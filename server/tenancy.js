/**
 * TENANCY — clinics, pilot provisioning and practitioner invites.
 *
 * The application was already clinic-scoped at the row level: every user,
 * attempt, lesson_progress and reflection carries a clinic_id, and every
 * manager query filters on it. What was missing was a way to CREATE a clinic
 * that is not the seeded demo one, and a way to get real practitioners into it
 * without the founder typing passwords for them.
 *
 * This module adds:
 *   clinics  — the tenant record, with its plan and payment state
 *   invites  — single-use, expiring tokens a manager issues to a practitioner
 *
 * Nothing here invents automation. There is no email sending and no payment
 * capture in this file: `createPilotClinic` returns the setup link, and the
 * caller decides how it reaches the manager (the pilot flow shows it on screen
 * and the founder sends it). Payment state is recorded, never asserted.
 */

const crypto = require('crypto');

/** A bilingual pair; `send()` collapses it to the requested language. */
const T = (en, es) => ({ en, es });

/**
 * The approved entitlement, and the only place it is stated.
 *
 * `seats` is governance: it is what a clinic is sold and what the product
 * enforces, and every other surface — the API, the landing page, the manager's
 * clinic view, both languages — reads it from here rather than restating it.
 * `test/verify-entitlement.js` fails if any of them says a different number.
 *
 * The description is bilingual because it is buyer-facing: it was a plain
 * English string, which meant a Spanish buyer read her entitlement in English.
 */
const PLANS = {
  founding_pilot: {
    key: 'founding_pilot',
    name: 'Founding Pilot',
    priceEur: 490,
    seats: 5,
    description: T(
      'One clinic, up to five practitioners, the full Academy and all nine consultation cases.',
      'Una clínica, hasta cinco profesionales, la Academia completa y los nueve casos de consulta.')
  }
};

const PAYMENT_STATES = ['pending', 'paid', 'waived', 'lapsed'];

const slug = s => String(s || '').toLowerCase().normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '').slice(0, 40) || 'clinic';

const token = () => crypto.randomBytes(24).toString('base64url');

/**
 * The three demo passwords were published to a public repository and are
 * permanently untrusted. `server/seed.js` keeps them out of the seeded accounts
 * in a hosted instance; this keeps them out of every account created after it,
 * so no clinic, manager or practitioner can ever be opened with one — including
 * a practitioner who happens to type one into the join page.
 */
const BURNED = require('./seed').BURNED_PASSWORDS;
function refuseBurned(password) {
  if (password && BURNED.includes(String(password))) {
    const e = new Error('That password has been published publicly and cannot be used. Choose another one.');
    e.burned = true;
    throw e;
  }
}

/** A password a human can read over the phone and a machine cannot guess. */
function generatePassword() {
  const words = ['amber', 'cedar', 'harbour', 'lantern', 'meridian', 'orchard', 'quartz',
                 'ridge', 'sable', 'thistle', 'vellum', 'willow', 'anchor', 'basalt'];
  const pick = () => words[crypto.randomInt(words.length)];
  return `${pick()}-${pick()}-${pick()}-${crypto.randomInt(1000, 9999)}`;
}

async function migrate(db) {
  await db.run(`CREATE TABLE IF NOT EXISTS clinics (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    plan TEXT NOT NULL,
    seats INTEGER NOT NULL,
    payment_state TEXT NOT NULL,
    payment_reference TEXT,
    country TEXT,
    created_at TEXT NOT NULL,
    activated_at TEXT
  )`);
  await db.run(`CREATE TABLE IF NOT EXISTS invites (
    token TEXT PRIMARY KEY,
    clinic_id TEXT NOT NULL,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    invited_by TEXT NOT NULL,
    created_at TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    accepted_at TEXT,
    user_id TEXT
  )`);
  await db.run(`CREATE INDEX IF NOT EXISTS idx_invites_clinic ON invites(clinic_id)`);
  // The few things a person has already done that the product must never make
  // her do twice — the walk-through she has taken, the consultation moment she
  // has already played. Held on the account rather than in one browser, so it
  // follows her to whichever screen she opens next.
  await db.run(`CREATE TABLE IF NOT EXISTS milestones (
    user_id TEXT NOT NULL,
    key TEXT NOT NULL,
    reached_at TEXT NOT NULL,
    PRIMARY KEY (user_id, key)
  )`);

  // Somebody forgets a password in the first fortnight of every pilot. Without
  // this, the only remedy was a fresh invitation to a different address, which
  // would have orphaned every consultation she had already recorded.
  await db.run(`CREATE TABLE IF NOT EXISTS password_resets (
    token TEXT PRIMARY KEY,
    clinic_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    issued_by TEXT NOT NULL,
    created_at TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    used_at TEXT
  )`);
  await db.run(`CREATE INDEX IF NOT EXISTS idx_resets_user ON password_resets(user_id)`);

  // The demo clinic predates this table. Register it so the tenant list is
  // complete rather than silently missing the tenant everyone has seen.
  const demo = await db.get(`SELECT id FROM clinics WHERE id = 'clinic_wildmagic'`);
  if (!demo) {
    const seeded = await db.get(`SELECT clinic_name FROM users WHERE clinic_id = 'clinic_wildmagic' LIMIT 1`);
    if (seeded) {
      await db.run(`INSERT INTO clinics (id,name,plan,seats,payment_state,created_at,activated_at)
                    VALUES (?,?,?,?,?,?,?)`,
        ['clinic_wildmagic', seeded.clinic_name, 'founding_pilot', PLANS.founding_pilot.seats, 'waived',
         new Date().toISOString(), new Date().toISOString()]);
    }
  }
}

/**
 * Create a clinic and its first manager.
 * Returns { clinic, manager, password, setupToken } — the password is returned
 * exactly once, in the process that created it, and is never stored in clear.
 */
async function createPilotClinic(db, { clinicName, managerName, managerEmail, country, plan = 'founding_pilot', paymentState = 'pending', paymentReference = null, password }) {
  const p = PLANS[plan];
  if (!p) throw new Error(`Unknown plan: ${plan}`);
  if (!PAYMENT_STATES.includes(paymentState)) throw new Error(`Unknown payment state: ${paymentState}`);
  if (!clinicName || !managerName || !managerEmail) throw new Error('clinicName, managerName and managerEmail are required');

  refuseBurned(password);

  const existing = await db.getUserByEmail(managerEmail);
  if (existing) throw new Error(`${managerEmail} already has an account in ${existing.clinic_name}`);

  const clinicId = `clinic_${slug(clinicName)}_${crypto.randomBytes(3).toString('hex')}`;
  const now = new Date().toISOString();
  await db.run(`INSERT INTO clinics (id,name,plan,seats,payment_state,payment_reference,country,created_at,activated_at)
                VALUES (?,?,?,?,?,?,?,?,?)`,
    [clinicId, clinicName, p.key, p.seats, paymentState, paymentReference, country || null, now,
     paymentState === 'paid' || paymentState === 'waived' ? now : null]);

  const pw = password || generatePassword();
  const manager = await db.createUser({
    id: `usr_mgr_${crypto.randomBytes(4).toString('hex')}`,
    email: managerEmail, name: managerName, role: 'manager',
    clinicId, clinicName, password: pw
  });

  return {
    clinic: { id: clinicId, name: clinicName, plan: p.key, seats: p.seats, paymentState, paymentReference },
    manager: { id: manager.id, email: manager.email, name: manager.name },
    password: pw
  };
}

/** A manager invites a practitioner into her own clinic. Single use, 14 days. */
async function createInvite(db, manager, { email, name }) {
  if (!email || !name) throw new Error('name and email are required');
  const clean = String(email).toLowerCase().trim();
  const existing = await db.getUserByEmail(clean);
  if (existing) throw new Error(`${clean} already has an account`);

  const open = await db.all(
    `SELECT token FROM invites WHERE clinic_id = ? AND email = ? AND accepted_at IS NULL`,
    [manager.clinic_id, clean]);
  if (open.length) throw new Error(`${clean} already has an open invitation`);

  const seats = await seatUsage(db, manager.clinic_id);
  if (seats.used >= seats.total) throw new Error(`All ${seats.total} seats on this plan are in use`);

  const t = token();
  const now = new Date();
  await db.run(`INSERT INTO invites (token,clinic_id,email,name,role,invited_by,created_at,expires_at)
                VALUES (?,?,?,?,?,?,?,?)`,
    [t, manager.clinic_id, clean, name, 'practitioner', manager.id,
     now.toISOString(), new Date(now.getTime() + 14 * 86400000).toISOString()]);
  return { token: t, email: clean, name, expiresAt: new Date(now.getTime() + 14 * 86400000).toISOString() };
}

async function getInvite(db, t) {
  const row = await db.get(`SELECT * FROM invites WHERE token = ?`, [t]);
  if (!row) return null;
  if (row.accepted_at) return { ...row, state: 'accepted' };
  if (new Date(row.expires_at) < new Date()) return { ...row, state: 'expired' };
  return { ...row, state: 'open' };
}

/** The practitioner sets her own password. The manager never sees it. */
async function acceptInvite(db, t, password) {
  const inv = await getInvite(db, t);
  if (!inv) throw new Error('This invitation link is not valid');
  if (inv.state === 'accepted') throw new Error('This invitation has already been used');
  if (inv.state === 'expired') throw new Error('This invitation has expired');
  if (!password || String(password).length < 10) throw new Error('Choose a password of at least 10 characters');
  refuseBurned(password);

  const clinic = await db.get(`SELECT name FROM clinics WHERE id = ?`, [inv.clinic_id]);
  const fallback = await db.get(`SELECT clinic_name FROM users WHERE clinic_id = ? LIMIT 1`, [inv.clinic_id]);
  const user = await db.createUser({
    id: `usr_prac_${crypto.randomBytes(4).toString('hex')}`,
    email: inv.email, name: inv.name, role: 'practitioner',
    clinicId: inv.clinic_id,
    clinicName: (clinic && clinic.name) || (fallback && fallback.clinic_name) || 'Clinic',
    password
  });
  await db.run(`UPDATE invites SET accepted_at = ?, user_id = ? WHERE token = ?`,
    [new Date().toISOString(), user.id, t]);
  return user;
}

// ---------------------------------------------------------------------------
// FORGOTTEN PASSWORDS
//
// There is no email from this product, so a self-service "email me a link" flow
// would have nowhere to send anything. In a ten-seat clinic the manager is in
// the building, so she issues the link and hands it over the same way she
// handed over the invitation.
//
// The manager never chooses or sees the new password. She issues a single-use
// link that expires in 48 hours; the practitioner sets her own. That keeps the
// one property that matters — nobody but the practitioner has ever known her
// password — while still letting a real clinic unstick itself in a minute.
// ---------------------------------------------------------------------------

/** A manager issues a reset link for somebody in her own clinic. */
async function createPasswordReset(db, manager, { practitionerId }) {
  if (!practitionerId) throw new Error('Choose whose password needs resetting');
  const who = await db.getUserById(practitionerId);
  if (!who || who.clinic_id !== manager.clinic_id) throw new Error('That person is not in this clinic');
  // A manager resetting her own password this way would be a way to lock a
  // clinic out of itself if the link were lost, so it is refused.
  if (who.id === manager.id) throw new Error('Use a different manager account, or ask us, to reset your own password');

  // Issuing a new link retires any older one, so a link that was handed over
  // and then re-issued cannot both still work.
  await db.run(`UPDATE password_resets SET used_at = ? WHERE user_id = ? AND used_at IS NULL`,
    [new Date().toISOString(), practitionerId]);

  const t = token();
  const now = new Date();
  const expires = new Date(now.getTime() + 2 * 86400000);
  await db.run(`INSERT INTO password_resets (token,clinic_id,user_id,issued_by,created_at,expires_at)
                VALUES (?,?,?,?,?,?)`,
    [t, manager.clinic_id, practitionerId, manager.id, now.toISOString(), expires.toISOString()]);
  return { token: t, name: who.name, email: who.email, expiresAt: expires.toISOString() };
}

async function getPasswordReset(db, t) {
  const row = await db.get(`SELECT * FROM password_resets WHERE token = ?`, [t]);
  if (!row) return null;
  if (row.used_at) return { ...row, state: 'used' };
  if (new Date(row.expires_at) < new Date()) return { ...row, state: 'expired' };
  return { ...row, state: 'open' };
}

/** The practitioner sets her own new password. Her account and history survive. */
async function usePasswordReset(db, t, password) {
  const r = await getPasswordReset(db, t);
  if (!r) throw new Error('This link is not valid');
  if (r.state === 'used') throw new Error('This link has already been used');
  if (r.state === 'expired') throw new Error('This link has expired. Ask for a new one.');
  if (!password || String(password).length < 10) throw new Error('Choose a password of at least 10 characters');
  refuseBurned(password);

  const user = await db.setPassword(r.user_id, password);
  if (!user) throw new Error('That account no longer exists');
  await db.run(`UPDATE password_resets SET used_at = ? WHERE token = ?`, [new Date().toISOString(), t]);
  // Every existing session is ended: a forgotten password is also how a
  // borrowed or shared login gets taken back.
  if (typeof db.destroySessionsForUser === 'function') await db.destroySessionsForUser(r.user_id);
  return user;
}

/** Open reset links in a clinic, so a manager can see what she has handed out. */
function listPasswordResets(db, clinicId) {
  return db.all(
    `SELECT token,user_id,created_at,expires_at,used_at FROM password_resets
     WHERE clinic_id = ? ORDER BY created_at DESC`, [clinicId]);
}

async function seatUsage(db, clinicId) {
  const c = await db.get(`SELECT seats FROM clinics WHERE id = ?`, [clinicId]);
  const users = await db.get(`SELECT COUNT(*) n FROM users WHERE clinic_id = ?`, [clinicId]);
  const open = await db.get(
    `SELECT COUNT(*) n FROM invites WHERE clinic_id = ? AND accepted_at IS NULL AND expires_at > ?`,
    [clinicId, new Date().toISOString()]);
  // The plan is the single source of truth for the seat count; a clinic row
  // that predates a plan change falls back to it rather than to a literal.
  return { total: (c && c.seats) || PLANS.founding_pilot.seats, used: users.n + open.n, members: users.n, pending: open.n };
}

async function listInvites(db, clinicId) {
  const rows = await db.all(`SELECT * FROM invites WHERE clinic_id = ? ORDER BY created_at DESC`, [clinicId]);
  const now = new Date();
  return rows.map(r => ({
    token: r.token, email: r.email, name: r.name,
    state: r.accepted_at ? 'accepted' : (new Date(r.expires_at) < now ? 'expired' : 'open'),
    createdAt: r.created_at, expiresAt: r.expires_at, acceptedAt: r.accepted_at
  }));
}

/** Things already done, so they are never asked for twice. */
async function reachMilestone(db, userId, key) {
  await db.run(`INSERT OR REPLACE INTO milestones (user_id,key,reached_at) VALUES (?,?,?)`,
    [userId, String(key), new Date().toISOString()]);
  return { key: String(key) };
}

async function milestones(db, userId) {
  const rows = await db.all(`SELECT key, reached_at FROM milestones WHERE user_id = ?`, [userId]);
  const out = {};
  rows.forEach(r => { out[r.key] = r.reached_at; });
  return out;
}

async function getClinic(db, clinicId) {
  return db.get(`SELECT * FROM clinics WHERE id = ?`, [clinicId]);
}

async function listClinics(db) {
  return db.all(`SELECT * FROM clinics ORDER BY created_at DESC`);
}

module.exports = {
  PLANS, PAYMENT_STATES, migrate, createPilotClinic, createInvite, getInvite,
  acceptInvite, seatUsage, listInvites, getClinic, listClinics, generatePassword, slug,
  createPasswordReset, getPasswordReset, usePasswordReset, listPasswordResets,
  reachMilestone, milestones, refuseBurned
};
