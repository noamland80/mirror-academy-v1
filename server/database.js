/**
 * PERSISTENCE LAYER — SQLite
 *
 * Survives: page reload, logout/login, server restart, second browser/device.
 * Tables:
 *   users      — practitioners and managers, scoped to a clinic, salted password hash
 *   sessions   — auth tokens (rows survive restart, so a token stays valid)
 *   attempts   — one practice attempt: client-state ledger, decisions, feedback,
 *                toolkit artifacts, derived outcome, continuation record
 */

const path = require('path');
const crypto = require('crypto');

/**
 * DRIVER SELECTION
 *
 * The product must start on a customer's machine by double-clicking one file,
 * with no compiler, no build step and no network. A native SQLite binding
 * cannot promise that: it has to be compiled or downloaded per platform.
 *
 * So the store prefers `node:sqlite`, which ships inside Node itself (22.5+)
 * and needs nothing installed, and falls back to the `sqlite3` npm package
 * when it is present — which is what the development tree and CI use. Both
 * drivers are wrapped to the same promise-returning run/get/all, so nothing
 * above this file knows or cares which one is running.
 */
function selectDriver() {
  try {
    const { DatabaseSync } = require('node:sqlite');
    if (DatabaseSync) return { kind: 'node:sqlite', DatabaseSync };
  } catch (_) { /* older Node — fall through */ }
  try {
    return { kind: 'sqlite3', sqlite3: require('sqlite3').verbose() };
  } catch (_) { /* not installed */ }
  return { kind: 'none' };
}
const DRIVER = selectDriver();

const DB_PATH = process.env.MIRROR_DB || path.join(__dirname, '..', 'data', 'mirror.db');

function hashPassword(password, salt) {
  const s = salt || crypto.randomBytes(16).toString('hex');
  const h = crypto.scryptSync(password, s, 32).toString('hex');
  return { salt: s, hash: h };
}
function verifyPassword(password, salt, hash) {
  const h = crypto.scryptSync(password, salt, 32).toString('hex');
  return crypto.timingSafeEqual(Buffer.from(h), Buffer.from(hash));
}

class Database {
  constructor(dbPath) {
    this.path = dbPath || DB_PATH;
    this.db = null;
  }

  initialize() {
    const fs = require('fs');
    const dir = path.dirname(this.path);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const SCHEMA = [
      `CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            name TEXT NOT NULL,
            role TEXT NOT NULL CHECK(role IN ('practitioner','manager')),
            clinic_id TEXT NOT NULL,
            clinic_name TEXT NOT NULL,
            salt TEXT NOT NULL,
            password_hash TEXT NOT NULL,
            created_at TEXT NOT NULL
          )`,
      `CREATE TABLE IF NOT EXISTS sessions (
            token TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            created_at TEXT NOT NULL,
            expires_at TEXT NOT NULL
          )`,
      `CREATE TABLE IF NOT EXISTS attempts (
            id TEXT PRIMARY KEY,
            practitioner_id TEXT NOT NULL,
            clinic_id TEXT NOT NULL,
            scenario TEXT NOT NULL,
            status TEXT NOT NULL,
            current_phase TEXT NOT NULL,
            outcome TEXT,
            relationship_state TEXT,
            payload TEXT NOT NULL,
            started_at TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            completed_at TEXT
          )`,
      `CREATE INDEX IF NOT EXISTS idx_attempts_prac ON attempts(practitioner_id)`,
      `CREATE INDEX IF NOT EXISTS idx_attempts_clinic ON attempts(clinic_id)`,
      `CREATE TABLE IF NOT EXISTS lesson_progress (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            clinic_id TEXT NOT NULL,
            module_id TEXT NOT NULL,
            lesson_id TEXT NOT NULL,
            status TEXT NOT NULL,
            score INTEGER,
            attempts INTEGER NOT NULL DEFAULT 1,
            payload TEXT,
            updated_at TEXT NOT NULL
          )`,
      `CREATE UNIQUE INDEX IF NOT EXISTS idx_lp_unique ON lesson_progress(user_id, lesson_id)`,
      `CREATE INDEX IF NOT EXISTS idx_lp_clinic ON lesson_progress(clinic_id)`,
      `CREATE TABLE IF NOT EXISTS reflections (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            clinic_id TEXT NOT NULL,
            module_id TEXT NOT NULL,
            assignment TEXT NOT NULL,
            answer TEXT,
            status TEXT NOT NULL,
            created_at TEXT NOT NULL,
            answered_at TEXT
          )`,
      `CREATE INDEX IF NOT EXISTS idx_ref_user ON reflections(user_id)`,
      `CREATE INDEX IF NOT EXISTS idx_ref_clinic ON reflections(clinic_id)`
    ];

    if (DRIVER.kind === 'none') {
      return Promise.reject(new Error(
        'No SQLite driver is available. This build needs Node 22.5 or newer ' +
        '(which includes one), or the sqlite3 package installed.'));
    }

    /**
     * COLUMNS ADDED TO `users` AFTER IT SHIPPED.
     *
     * These live here, beside the CREATE TABLE they extend, and not in
     * tenancy's migration — which is where they were first written, and which
     * was wrong. `listPractitioners` reads `revoked_at`, so a caller that
     * brought up the database without also running tenancy's migration got a
     * "no such column" error at query time. Two tests did exactly that, which
     * is how it was found; a customer would have found it as a 500.
     *
     * The rule this encodes: the module that owns a table owns every column in
     * it. SQLite has no ADD COLUMN IF NOT EXISTS, so each is attempted and a
     * duplicate-column error is the success case on every boot after the first.
     */
    const COLUMNS = [
      // Whether a reset can actually reach her. An address nobody has proved
      // reaches a human is an account that cannot be recovered.
      `ALTER TABLE users ADD COLUMN email_verified_at TEXT`,
      // A withdrawn colleague keeps her rows — the consultations she recorded
      // are the clinic's record of its own practice — and cannot sign in.
      `ALTER TABLE users ADD COLUMN revoked_at TEXT`,
      `ALTER TABLE users ADD COLUMN revoked_by TEXT`
    ];

    const addColumns = () => Promise.all(COLUMNS.map(ddl =>
      this.run(ddl).catch(e => {
        if (/duplicate column/i.test(String(e && e.message))) return null;
        throw e;
      })));

    if (DRIVER.kind === 'node:sqlite') {
      this.db = new DRIVER.DatabaseSync(this.path);
      this.sync = true;
      for (const stmt of SCHEMA) this.db.exec(stmt);
      return addColumns().then(() => this);
    }

    return new Promise((resolve, reject) => {
      this.db = new DRIVER.sqlite3.Database(this.path, err => {
        if (err) return reject(err);
        this.db.serialize(() => {
          SCHEMA.forEach((stmt, i) => {
            this.db.run(stmt, i === SCHEMA.length - 1
              ? (e => e ? reject(e) : addColumns().then(() => resolve(this), reject))
              : undefined);
          });
        });
      });
    });
  }

  /** node:sqlite is synchronous and rejects `undefined` parameters. */
  _params(params) {
    return (params || []).map(v => v === undefined ? null : (typeof v === 'boolean' ? (v ? 1 : 0) : v));
  }

  run(sql, params = []) {
    if (this.sync) {
      try { return Promise.resolve(this.db.prepare(sql).run(...this._params(params))); }
      catch (e) { return Promise.reject(e); }
    }
    return new Promise((res, rej) => this.db.run(sql, params, function (e) { e ? rej(e) : res(this); }));
  }
  get(sql, params = []) {
    if (this.sync) {
      try { return Promise.resolve(this.db.prepare(sql).get(...this._params(params))); }
      catch (e) { return Promise.reject(e); }
    }
    return new Promise((res, rej) => this.db.get(sql, params, (e, r) => e ? rej(e) : res(r)));
  }
  all(sql, params = []) {
    if (this.sync) {
      try { return Promise.resolve(this.db.prepare(sql).all(...this._params(params)) || []); }
      catch (e) { return Promise.reject(e); }
    }
    return new Promise((res, rej) => this.db.all(sql, params, (e, r) => e ? rej(e) : res(r || [])));
  }

  // ---------------- users ----------------
  async createUser({ id, email, name, role, clinicId, clinicName, password }) {
    const { salt, hash } = hashPassword(password);
    await this.run(
      `INSERT OR REPLACE INTO users (id,email,name,role,clinic_id,clinic_name,salt,password_hash,created_at)
       VALUES (?,?,?,?,?,?,?,?,?)`,
      [id, email.toLowerCase(), name, role, clinicId, clinicName, salt, hash, new Date().toISOString()]
    );
    return this.getUserByEmail(email);
  }
  /**
   * Change one account's password in place.
   *
   * Deliberately NOT createUser with a new password: that is INSERT OR REPLACE,
   * which rewrites the row and resets created_at, so a practitioner who forgot
   * her password would quietly become a new member of her own clinic. Her id is
   * what every attempt, lesson record and reflection is keyed on, and it has to
   * survive a reset.
   */
  async setPassword(userId, password) {
    const { salt, hash } = hashPassword(password);
    await this.run(`UPDATE users SET salt = ?, password_hash = ? WHERE id = ?`, [salt, hash, userId]);
    return this.getUserById(userId);
  }
  getUserByEmail(email) { return this.get(`SELECT * FROM users WHERE email = ?`, [String(email || '').toLowerCase()]); }
  getUserById(id) { return this.get(`SELECT * FROM users WHERE id = ?`, [id]); }
  /**
   * The people a manager is coaching. A revoked colleague is excluded: she is
   * not on the team any more, and her rows stay only so the consultations she
   * recorded are not orphaned. The seats screen uses the other one, because
   * there a manager needs to see who she could restore.
   */
  listPractitioners(clinicId) {
    return this.all(
      `SELECT id,name,email FROM users
       WHERE clinic_id = ? AND role='practitioner' AND revoked_at IS NULL`, [clinicId]);
  }
  listPractitionersIncludingRevoked(clinicId) {
    return this.all(
      `SELECT id,name,email,email_verified_at,revoked_at FROM users
       WHERE clinic_id = ? AND role='practitioner'
       ORDER BY revoked_at IS NOT NULL, name`, [clinicId]);
  }

  /**
   * A password check, and nothing else.
   *
   * Deliberately NOT where revocation or billing state is enforced. Those are
   * decisions about whether an account may be USED, and they belong at the one
   * door that mints a session, so a single place decides and the person can be
   * told which of the two it was. Checking the password first also stops this
   * becoming an oracle for which addresses are still active.
   */
  async authenticate(email, password) {
    const u = await this.getUserByEmail(email);
    if (!u) return null;
    try { if (!verifyPassword(password, u.salt, u.password_hash)) return null; }
    catch (_) { return null; }
    return u;
  }

  // ---------------- sessions ----------------
  async createSession(userId, days = 30) {
    const token = crypto.randomBytes(32).toString('hex');
    const now = new Date();
    const exp = new Date(now.getTime() + days * 86400000);
    await this.run(`INSERT INTO sessions (token,user_id,created_at,expires_at) VALUES (?,?,?,?)`,
      [token, userId, now.toISOString(), exp.toISOString()]);
    return token;
  }
  async resolveSession(token) {
    if (!token) return null;
    const s = await this.get(`SELECT * FROM sessions WHERE token = ?`, [token]);
    if (!s) return null;
    if (new Date(s.expires_at) < new Date()) { await this.run(`DELETE FROM sessions WHERE token=?`, [token]); return null; }
    return this.getUserById(s.user_id);
  }
  destroySession(token) { return this.run(`DELETE FROM sessions WHERE token = ?`, [token]); }
  /**
   * End every session an account has open. Used when a password is reset: a
   * forgotten password is also how a borrowed or shared login gets taken back,
   * and leaving the old sessions alive would defeat that.
   */
  destroySessionsForUser(userId) { return this.run(`DELETE FROM sessions WHERE user_id = ?`, [userId]); }

  // ---------------- attempts ----------------
  async saveAttempt(a) {
    await this.run(
      `INSERT OR REPLACE INTO attempts
       (id,practitioner_id,clinic_id,scenario,status,current_phase,outcome,relationship_state,payload,started_at,updated_at,completed_at)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
      [a.id, a.practitionerId, a.clinicId, a.scenario, a.status, a.currentPhase,
       a.outcome || null, (a.clientState && a.clientState.relationshipState) || null,
       JSON.stringify(a), a.startedAt, new Date().toISOString(), a.completedAt || null]
    );
    return a;
  }
  async getAttempt(id) {
    const r = await this.get(`SELECT payload FROM attempts WHERE id = ?`, [id]);
    return r ? JSON.parse(r.payload) : null;
  }
  async listAttemptsForPractitioner(pid) {
    const rows = await this.all(`SELECT payload FROM attempts WHERE practitioner_id = ? ORDER BY started_at DESC`, [pid]);
    return rows.map(r => JSON.parse(r.payload));
  }
  async listAttemptsForClinic(cid) {
    const rows = await this.all(`SELECT payload FROM attempts WHERE clinic_id = ? ORDER BY started_at DESC`, [cid]);
    return rows.map(r => JSON.parse(r.payload));
  }
  async findInProgress(pid, scenarioId) {
    const rows = scenarioId
      ? await this.all(`SELECT payload FROM attempts WHERE practitioner_id = ? AND scenario = ? AND status = 'in_progress' ORDER BY started_at DESC LIMIT 1`, [pid, scenarioId])
      : await this.all(`SELECT payload FROM attempts WHERE practitioner_id = ? AND status = 'in_progress' ORDER BY started_at DESC LIMIT 1`, [pid]);
    return rows.length ? JSON.parse(rows[0].payload) : null;
  }

  // ---------------- academy: lesson progress ----------------
  async saveLessonProgress({ userId, clinicId, moduleId, lessonId, status, score, payload }) {
    const existing = await this.get(`SELECT id, attempts FROM lesson_progress WHERE user_id = ? AND lesson_id = ?`, [userId, lessonId]);
    const id = existing ? existing.id : 'lp_' + crypto.randomBytes(8).toString('hex');
    const attempts = existing ? existing.attempts + 1 : 1;
    await this.run(
      `INSERT OR REPLACE INTO lesson_progress (id,user_id,clinic_id,module_id,lesson_id,status,score,attempts,payload,updated_at)
       VALUES (?,?,?,?,?,?,?,?,?,?)`,
      [id, userId, clinicId, moduleId, lessonId, status, score == null ? null : score, attempts,
       payload ? JSON.stringify(payload) : null, new Date().toISOString()]
    );
    return { id, lessonId, moduleId, status, score, attempts };
  }
  listLessonProgress(userId) {
    return this.all(`SELECT module_id, lesson_id, status, score, attempts, updated_at FROM lesson_progress WHERE user_id = ?`, [userId]);
  }
  listClinicLessonProgress(clinicId) {
    return this.all(
      `SELECT lp.*, u.name AS practitioner_name FROM lesson_progress lp
       JOIN users u ON u.id = lp.user_id WHERE lp.clinic_id = ? ORDER BY lp.updated_at DESC`, [clinicId]);
  }

  // ---------------- academy: field assignments ----------------
  async createReflection({ userId, clinicId, moduleId, assignment }) {
    const open = await this.get(
      `SELECT id FROM reflections WHERE user_id = ? AND module_id = ? AND status = 'open'`, [userId, moduleId]);
    if (open) return open.id;
    const id = 'ref_' + crypto.randomBytes(8).toString('hex');
    await this.run(
      `INSERT INTO reflections (id,user_id,clinic_id,module_id,assignment,answer,status,created_at,answered_at)
       VALUES (?,?,?,?,?,NULL,'open',?,NULL)`,
      [id, userId, clinicId, moduleId, assignment, new Date().toISOString()]);
    return id;
  }
  answerReflection(id, userId, answer) {
    return this.run(`UPDATE reflections SET answer = ?, status = 'answered', answered_at = ? WHERE id = ? AND user_id = ?`,
      [answer, new Date().toISOString(), id, userId]);
  }
  listReflections(userId) {
    return this.all(`SELECT * FROM reflections WHERE user_id = ? ORDER BY created_at DESC`, [userId]);
  }
  openReflections(userId) {
    return this.all(`SELECT * FROM reflections WHERE user_id = ? AND status = 'open' ORDER BY created_at ASC`, [userId]);
  }
  listClinicReflections(clinicId) {
    return this.all(
      `SELECT r.*, u.name AS practitioner_name FROM reflections r
       JOIN users u ON u.id = r.user_id WHERE r.clinic_id = ? ORDER BY r.created_at DESC`, [clinicId]);
  }

  close() { if (this.db) this.db.close(); }
}

module.exports = Database;
module.exports.DRIVER = DRIVER.kind;
module.exports.hashPassword = hashPassword;
