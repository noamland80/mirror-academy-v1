/**
 * THE VERIFICATION TENANT — proving the legacy-seat hazard is closed, on the
 * running instance, without touching the real customer database.
 *
 * WHAT ARCHITECTURE NEEDS TO PROVE. `seatUsage` once resolved the seat count as
 * `(clinic.seats) || PLANS.founding_pilot.seats`, which trusts the stored row
 * first. A clinic provisioned while the Founding Pilot still granted ten would
 * have gone on granting ten after the approved entitlement became five, and
 * every seat guard in the product would have agreed with it. That is fixed, and
 * `verify-entitlement-authority.js` proves it in the suite — but a suite is the
 * builder's own word. It has to be provable on the live instance, by somebody
 * who does not trust the builder.
 *
 * WHY IT CANNOT SIMPLY BE SEEDED. The production database must start with zero
 * clinics, zero accounts and zero seeded users, and the cold buyer journey must
 * be the only thing that ever creates a tenant on it. A demonstration fixture
 * sitting in the tenant list would contaminate exactly the thing Architecture
 * is there to review.
 *
 * SO: nothing exists until the operator asks for it, it is unmistakably marked,
 * and it is removed in one call when the review is over.
 *
 *   · it is created ONLY by an explicit operator-token call, never at boot
 *   · its clinic id always begins `clinic_verify_`, and removal refuses to
 *     touch anything that does not — so this file cannot delete a paying
 *     customer even if it is called with the wrong id
 *   · it is excluded from nothing else: tenant isolation is per-clinic
 *     everywhere, so it is as separate from the buyer's clinic as two real
 *     customers are from each other
 *   · `remove` deletes every row it owns and reports the counts
 *
 * THE HONEST WRINKLE. The fix includes a boot migration that NORMALISES a stale
 * row — seats=10 becomes 5 — which is the right behaviour and also erases the
 * hazard this tenant exists to display. So `restale` puts the row back to 10 on
 * demand, and the description says plainly that a restart will normalise it.
 * That gives Architecture two separate proofs rather than one:
 *
 *   1. with the row reading 10 RIGHT NOW, the effective entitlement is 5 and
 *      the sixth seat is refused — enforcement does not trust the row
 *   2. restart the service, and the row itself becomes 5 — the stale value is
 *      not merely ignored, it is repaired
 */
const crypto = require('crypto');

const tenancy = require('./tenancy');

/** Every id this module will create or delete. Nothing else is touchable. */
const PREFIX = 'clinic_verify_';

const isVerificationId = id => typeof id === 'string' && id.startsWith(PREFIX);

/**
 * Create the tenant, with a deliberately stale seat count on the row.
 *
 * The clinic row is written directly rather than through `createPilotClinic`,
 * because the whole point is a row the product would never write for itself:
 * one that survived a plan change. The manager is created through the ordinary
 * path, so she is a real account with a real scrypt-hashed password and no
 * special handling anywhere.
 */
async function create(db, { staleSeats = 10, clinicName = 'Verification Tenant (disposable)' } = {}) {
  const id = PREFIX + crypto.randomBytes(4).toString('hex');
  const email = `verify+${crypto.randomBytes(3).toString('hex')}@mirror-verification.invalid`;
  const password = tenancy.generatePassword();
  const now = new Date().toISOString();

  // The hazardous row: a current plan key, and the pre-correction seat count.
  await db.run(
    `INSERT INTO clinics (id,name,plan,seats,payment_state,payment_reference,country,created_at,activated_at)
     VALUES (?,?,?,?,?,?,?,?,?)`,
    [id, clinicName, 'founding_pilot', staleSeats, 'waived', 'VERIFICATION', null, now, now]);

  const manager = await db.createUser({
    id: `usr_verify_${crypto.randomBytes(4).toString('hex')}`,
    email, name: 'Verification Manager', role: 'manager',
    clinicId: id, clinicName, password
  });

  return { clinicId: id, manager: { id: manager.id, email, name: manager.name }, password, staleSeats };
}

/**
 * Put the row back to a stale value. Needed because the boot migration repairs
 * it, so a restart between provisioning and review would leave nothing to see.
 */
async function restale(db, clinicId, staleSeats = 10) {
  if (!isVerificationId(clinicId)) throw new Error('Not a verification tenant');
  const row = await db.get(`SELECT id FROM clinics WHERE id = ?`, [clinicId]);
  if (!row) throw new Error('No such verification tenant');
  await db.run(`UPDATE clinics SET seats = ? WHERE id = ?`, [staleSeats, clinicId]);
  return describe(db, clinicId);
}

/**
 * What the row says, what the product enforces, and whether those differ.
 *
 * Deliberately reports BOTH numbers. A proof that only showed the enforced
 * value would be indistinguishable from a tenant that never had a stale row.
 */
async function describe(db, clinicId) {
  if (!isVerificationId(clinicId)) throw new Error('Not a verification tenant');
  const row = await db.get(`SELECT id,name,plan,seats,payment_state FROM clinics WHERE id = ?`, [clinicId]);
  if (!row) return null;
  const ent = await tenancy.entitlement(db, clinicId);
  const usage = await tenancy.seatUsage(db, clinicId);
  const members = await db.all(
    `SELECT id,name,email,role,revoked_at FROM users WHERE clinic_id = ? ORDER BY role DESC, name`, [clinicId]);
  const invites = await tenancy.listInvites(db, clinicId);

  return {
    clinicId: row.id,
    clinicName: row.name,
    disposable: true,
    storedRow: { plan: row.plan, seats: row.seats, paymentState: row.payment_state },
    effective: { plan: ent.plan, seats: ent.seats, priceEur: ent.priceEur },
    rowIsStale: ent.rowStale,
    seatUsage: { total: usage.total, used: usage.used, members: usage.members, pending: usage.pending },
    people: members.map(m => ({ name: m.name, email: m.email, role: m.role, revoked: !!m.revoked_at })),
    invitesOpen: invites.filter(i => i.state === 'open').length,
    // Said out loud so nobody mistakes a repaired row for a broken proof.
    note: row.seats === ent.seats
      ? 'The stored row now matches the plan. It was normalised by a boot migration, which is the repair half of the fix. POST .../restale to set it back to 10 and demonstrate the enforcement half.'
      : `The stored row says ${row.seats}. The product enforces ${ent.seats}. A restart will normalise the row itself.`
  };
}

/**
 * Remove it completely.
 *
 * Refuses any id that is not a verification tenant, so the worst a wrong call
 * can do is nothing. Deletes in dependency order and reports what went, so the
 * operator can see the database is back to the customers only.
 */
async function remove(db, clinicId) {
  if (!isVerificationId(clinicId)) {
    const e = new Error('Refusing to remove: that is not a verification tenant');
    e.code = 'NOT_VERIFICATION_TENANT';
    throw e;
  }
  const row = await db.get(`SELECT id FROM clinics WHERE id = ?`, [clinicId]);
  if (!row) return { removed: false, reason: 'no such verification tenant' };

  const users = await db.all(`SELECT id FROM users WHERE clinic_id = ?`, [clinicId]);
  const ids = users.map(u => u.id);
  const counts = {};

  for (const [table, sql, params] of [
    ['sessions', `DELETE FROM sessions WHERE user_id IN (SELECT id FROM users WHERE clinic_id = ?)`, [clinicId]],
    ['attempts', `DELETE FROM attempts WHERE clinic_id = ?`, [clinicId]],
    ['lesson_progress', `DELETE FROM lesson_progress WHERE clinic_id = ?`, [clinicId]],
    ['reflections', `DELETE FROM reflections WHERE clinic_id = ?`, [clinicId]],
    ['invites', `DELETE FROM invites WHERE clinic_id = ?`, [clinicId]],
    ['password_resets', `DELETE FROM password_resets WHERE clinic_id = ?`, [clinicId]],
    ['audit_events', `DELETE FROM audit_events WHERE clinic_id = ?`, [clinicId]],
    ['coaching_notes', `DELETE FROM coaching_notes WHERE clinic_id = ?`, [clinicId]]
  ]) {
    try { const r = await db.run(sql, params); counts[table] = (r && (r.changes || r.rowsAffected)) || 0; }
    catch (e) { counts[table] = null; }   // a table this build does not have
  }
  for (const uid of ids) {
    try { await db.run(`DELETE FROM milestones WHERE user_id = ?`, [uid]); } catch (e) {}
    try { await db.run(`DELETE FROM onboarding WHERE user_id = ?`, [uid]); } catch (e) {}
    try { await db.run(`DELETE FROM email_verifications WHERE user_id = ?`, [uid]); } catch (e) {}
  }
  await db.run(`DELETE FROM users WHERE clinic_id = ?`, [clinicId]);
  await db.run(`DELETE FROM clinics WHERE id = ?`, [clinicId]);

  const left = await db.get(`SELECT COUNT(*) n FROM clinics WHERE id = ?`, [clinicId]);
  return { removed: left.n === 0, clinicId, usersRemoved: ids.length, rows: counts };
}

/** Every verification tenant currently on this instance. */
async function list(db) {
  const rows = await db.all(
    `SELECT id,name,seats,created_at FROM clinics WHERE id LIKE ? ORDER BY created_at DESC`, [PREFIX + '%']);
  return rows.map(r => ({ clinicId: r.id, clinicName: r.name, storedSeats: r.seats, createdAt: r.created_at }));
}

module.exports = { PREFIX, isVerificationId, create, restale, describe, remove, list };
