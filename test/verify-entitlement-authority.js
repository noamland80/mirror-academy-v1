/**
 * A ROW CANNOT GRANT MORE THAN THE PLAN
 *
 * Architecture found this before any clinic existed: `seatUsage` resolved the
 * seat count as `(clinic.seats) || PLANS.founding_pilot.seats`, which consults
 * the stored row first and the plan only when the row is missing. A clinic
 * provisioned while the Founding Pilot still granted ten seats would therefore
 * have kept ten after the approved entitlement became five — and every seat
 * guard in the product would have agreed with it, because they all ask
 * `seatUsage`.
 *
 * It was not blocking, because no tenant had ever been deployed. That is a
 * fact about the fixture, not a property of the code, and it stops being true
 * the first time a real clinic row outlives a plan change. So this test writes
 * the hazardous row by hand — plan `founding_pilot`, seats 10, exactly what a
 * legacy tenant would look like — and proves the product enforces five.
 *
 * Run: node test/verify-entitlement-authority.js
 */
const fs = require('fs');
const path = require('path');
const os = require('os');

const tenancy = require('../server/tenancy');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);

const SEATS = tenancy.PLANS.founding_pilot.seats;

(async () => {
  const dbPath = path.join(os.tmpdir(), `mirror-auth-${Date.now()}.db`);
  process.env.MIRROR_DB = dbPath;
  const { bootstrap, db } = require('../server/index');
  await bootstrap();

  sec('THE PLAN RESOLVES, NOT THE NUMBER ON THE ROW');
  ok('A row naming the Founding Pilot resolves to it',
     tenancy.planFor({ plan: 'founding_pilot' }).seats === SEATS);
  ok('A row naming a plan that no longer exists resolves to the Founding Pilot',
     tenancy.planFor({ plan: 'legacy_ten_seat_pilot' }).key === 'founding_pilot',
     tenancy.planFor({ plan: 'legacy_ten_seat_pilot' }).key);
  ok('A row with no plan at all resolves to the Founding Pilot',
     tenancy.planFor({}).key === 'founding_pilot');
  ok('No row at all resolves to the Founding Pilot',
     tenancy.planFor(null).key === 'founding_pilot');
  ok('And resolution never returns a seat count other than the plan\'s',
     [{ plan: 'founding_pilot' }, { plan: 'nonsense' }, {}, null]
       .every(r => tenancy.planFor(r).seats === SEATS));

  sec('A LEGACY ROW SAYING TEN GRANTS FIVE');
  // Exactly the row the old code would have honoured: the plan key is current,
  // the cached seat count is the pre-correction ten.
  const LEGACY = 'clinic_legacy_ten';
  const now = new Date().toISOString();
  await db.run(`INSERT INTO clinics (id,name,plan,seats,payment_state,created_at,activated_at)
                VALUES (?,?,?,?,?,?,?)`,
    [LEGACY, 'Clínica Heredada', 'founding_pilot', 10, 'paid', now, now]);
  const wrote = await db.get(`SELECT seats FROM clinics WHERE id = ?`, [LEGACY]);
  ok('The hazardous row really is in the database', wrote.seats === 10, String(wrote && wrote.seats));

  const ent = await tenancy.entitlement(db, LEGACY);
  ok(`Its effective entitlement is ${SEATS}, not 10`, ent.seats === SEATS, String(ent.seats));
  ok('And the stale column is reported rather than hidden', ent.rowStale === true && ent.rowSeats === 10,
     JSON.stringify({ rowStale: ent.rowStale, rowSeats: ent.rowSeats }));

  const usage = await tenancy.seatUsage(db, LEGACY);
  ok(`seatUsage reports ${SEATS} seats for the legacy clinic`, usage.total === SEATS, String(usage.total));
  ok('And names the plan it enforced', usage.plan === 'founding_pilot', usage.plan);
  done(`legacy row seats=10  →  enforced ${usage.total}`);

  sec('THE GUARD ACTUALLY REFUSES THE SIXTH SEAT');
  // A manager on the legacy clinic, then invitations until the guard bites.
  const mgr = await db.createUser({
    id: 'usr_legacy_mgr', email: 'ana@heredada.test', name: 'Ana Heredada',
    role: 'manager', clinicId: LEGACY, clinicName: 'Clínica Heredada',
    password: 'Legacy-row-probe-9271'
  });
  let issued = 0, refusal = null;
  for (let i = 1; i <= 12; i++) {
    try { await tenancy.createInvite(db, mgr, { name: `P${i}`, email: `p${i}@heredada.test` }); issued++; }
    catch (e) { refusal = e.message; break; }
  }
  ok(`Only ${SEATS - 1} practitioners can be invited beside the manager`,
     issued === SEATS - 1, `${issued} issued`);
  ok('The next invitation is refused', !!refusal, String(refusal));
  ok(`The refusal names ${SEATS}, not 10`,
     !!refusal && refusal.includes(String(SEATS)) && !/\b10\b/.test(refusal), refusal);
  done(refusal);

  sec('BOOT NORMALISES THE COLUMN SO NOTHING READS TEN AGAIN');
  // The row is only brought into line on the next migration pass, which is what
  // a restart does. Prove the value on disk is corrected, not merely ignored.
  await tenancy.migrate(db);
  const after = await db.get(`SELECT plan, seats FROM clinics WHERE id = ?`, [LEGACY]);
  ok(`The column now reads ${SEATS}`, after.seats === SEATS, String(after.seats));
  ok('The plan key is unchanged', after.plan === 'founding_pilot', after.plan);
  const entAfter = await tenancy.entitlement(db, LEGACY);
  ok('And nothing is reported as stale any more', entAfter.rowStale === false);

  // A row naming a plan that no longer exists is moved to what it is being
  // enforced as, rather than left claiming something the product will not honour.
  const ORPHAN = 'clinic_orphan_plan';
  await db.run(`INSERT INTO clinics (id,name,plan,seats,payment_state,created_at,activated_at)
                VALUES (?,?,?,?,?,?,?)`,
    [ORPHAN, 'Clínica Huérfana', 'legacy_ten_seat_pilot', 10, 'paid', now, now]);
  await tenancy.migrate(db);
  const fixed = await db.get(`SELECT plan, seats FROM clinics WHERE id = ?`, [ORPHAN]);
  ok('A row naming a dead plan is migrated to the Founding Pilot',
     fixed.plan === 'founding_pilot' && fixed.seats === SEATS, JSON.stringify(fixed));
  done(`dead plan row  →  ${fixed.plan} / ${fixed.seats} seats`);

  sec('A ROW SAYING FEWER SEATS IS ALSO NOT HONOURED');
  // The defect is symmetrical: trusting the row would also let a row under-grant.
  const MEAN = 'clinic_under_granting';
  await db.run(`INSERT INTO clinics (id,name,plan,seats,payment_state,created_at,activated_at)
                VALUES (?,?,?,?,?,?,?)`,
    [MEAN, 'Clínica Recortada', 'founding_pilot', 2, 'paid', now, now]);
  const under = await tenancy.seatUsage(db, MEAN);
  ok(`A row saying 2 still grants ${SEATS}`, under.total === SEATS, String(under.total));

  fs.existsSync(dbPath) && fs.unlinkSync(dbPath);
  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
