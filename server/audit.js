/**
 * THE AUDIT TRAIL — what happened to an account, and when.
 *
 * Not analytics and not telemetry. This is the answer to the four questions a
 * real customer eventually asks, each of which is unanswerable without a
 * written record:
 *
 *   "Did you charge me twice?"            → the payment events for her clinic
 *   "Who invited this person?"            → the invitation events, with the
 *                                           manager who issued them
 *   "Somebody else got into my account"   → the session and reset events
 *   "We never agreed to five seats"       → the provisioning event, with the
 *                                           entitlement as it was at the time
 *
 * WHAT IS DELIBERATELY NOT IN HERE. No consultation content, no lesson
 * progress, no decision a practitioner made in a case: her practice is not an
 * account event and putting it in an audit log turns the log into surveillance.
 * No password, no token, no card detail — an audit row is written precisely
 * when a secret is used, so the row must be safe to read aloud. Payloads are
 * whitelisted per event rather than dumped, because "log the whole object" is
 * how a token ends up in a log file.
 *
 * Rows are never updated and never deleted by the product. Retention is a
 * decision for the operator with the database, not something this file does
 * quietly.
 */
const crypto = require('crypto');

/**
 * The events that exist. An event not in this list is refused rather than
 * written, so a typo cannot create a category nobody ever queries.
 */
const EVENTS = {
  // provisioning and money
  checkout_started: ['email', 'clinicName', 'plan', 'amountEur', 'reference'],
  checkout_expired: ['reference'],
  payment_confirmed: ['reference', 'amountEur', 'currency', 'plan'],
  payment_failed: ['reference', 'reason'],
  payment_refunded: ['reference', 'amountEur'],
  payment_duplicate_ignored: ['reference', 'eventId'],
  clinic_provisioned: ['clinicId', 'clinicName', 'plan', 'seats', 'reference'],
  clinic_suspended: ['clinicId', 'reason'],
  clinic_restored: ['clinicId'],

  // identity
  manager_activated: ['userId', 'email'],
  email_verification_issued: ['userId', 'email'],
  email_verified: ['userId', 'email'],
  password_reset_issued: ['userId', 'issuedBy'],
  password_reset_used: ['userId'],
  password_reset_refused: ['reason'],
  sessions_revoked: ['userId', 'reason'],
  account_revoked: ['userId', 'by', 'reason'],

  // seats
  invite_issued: ['email', 'name', 'invitedBy'],
  invite_revoked: ['email', 'revokedBy'],
  invite_accepted: ['email', 'userId'],
  seat_refused: ['email', 'seats', 'invitedBy'],

  // onboarding
  onboarding_completed: ['userId', 'role']
};

async function migrate(db) {
  await db.run(`CREATE TABLE IF NOT EXISTS audit_events (
    id TEXT PRIMARY KEY,
    at TEXT NOT NULL,
    event TEXT NOT NULL,
    clinic_id TEXT,
    actor_id TEXT,
    ip TEXT,
    detail TEXT NOT NULL
  )`);
  await db.run(`CREATE INDEX IF NOT EXISTS idx_audit_clinic ON audit_events(clinic_id, at)`);
  await db.run(`CREATE INDEX IF NOT EXISTS idx_audit_event ON audit_events(event, at)`);
}

/**
 * Write one event.
 *
 * `detail` is filtered to the keys declared for the event, so a caller that
 * hands over a whole request body cannot smuggle a password into the log.
 * Unknown events throw: a record nobody can query is worse than a loud failure
 * at the moment the code is written.
 */
async function record(db, event, { clinicId = null, actorId = null, ip = null, detail = {} } = {}) {
  const allowed = EVENTS[event];
  if (!allowed) throw new Error(`Unknown audit event: ${event}`);
  const kept = {};
  for (const k of allowed) if (detail[k] !== undefined && detail[k] !== null) kept[k] = detail[k];
  await db.run(
    `INSERT INTO audit_events (id,at,event,clinic_id,actor_id,ip,detail) VALUES (?,?,?,?,?,?,?)`,
    [`ae_${crypto.randomBytes(8).toString('hex')}`, new Date().toISOString(), event,
     clinicId, actorId, ip ? String(ip).slice(0, 60) : null, JSON.stringify(kept)]);
  return true;
}

/** One clinic's history, newest first. What a manager is entitled to see. */
async function forClinic(db, clinicId, limit = 200) {
  const rows = await db.all(
    `SELECT id,at,event,actor_id,detail FROM audit_events WHERE clinic_id = ?
     ORDER BY at DESC LIMIT ?`, [clinicId, Math.min(500, Math.max(1, limit))]);
  return rows.map(r => ({
    id: r.id, at: r.at, event: r.event, actorId: r.actor_id,
    detail: safeParse(r.detail)
  }));
}

/** Everything, for the operator. Never exposed to a clinic. */
async function recent(db, limit = 200) {
  const rows = await db.all(
    `SELECT id,at,event,clinic_id,actor_id,ip,detail FROM audit_events ORDER BY at DESC LIMIT ?`,
    [Math.min(1000, Math.max(1, limit))]);
  return rows.map(r => ({
    id: r.id, at: r.at, event: r.event, clinicId: r.clinic_id,
    actorId: r.actor_id, ip: r.ip, detail: safeParse(r.detail)
  }));
}

function safeParse(s) { try { return JSON.parse(s); } catch (e) { return {}; } }

module.exports = { EVENTS, migrate, record, forClinic, recent };
