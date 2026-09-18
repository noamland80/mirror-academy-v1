/**
 * THE LEGACY-SEAT HAZARD IS PROVABLE FROM OUTSIDE, AND CONTAMINATES NOTHING
 *
 * `verify-entitlement-authority.js` proves the hazard is closed. It proves it
 * in the builder's own suite, which is the builder's own word. Architecture has
 * to be able to prove it on the running instance, against the deployed build,
 * without trusting anything written here.
 *
 * So the instance can mint a disposable tenant carrying a deliberately stale
 * `seats=10` row. This test walks exactly the sequence Architecture will walk,
 * and then checks the two things that matter more than the proof itself:
 *
 *   · the production database still starts with zero clinics and zero accounts
 *   · the verification tenant is separate from the cold buyer's clinic in every
 *     direction, and removing it leaves the buyer untouched
 *
 * Run: node test/verify-legacy-seat-proof.js
 */
const fs = require('fs');
const path = require('path');
const os = require('os');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);

const ADMIN = 'operator-token-for-this-test';

(async () => {
  const dbPath = path.join(os.tmpdir(), `mirror-legacy-${Date.now()}.db`);
  process.env.MIRROR_DB = dbPath;
  process.env.MIRROR_ADMIN_TOKEN = ADMIN;
  process.env.MIRROR_MODE = 'production';

  const { app, db, bootstrap } = require('../server/index');
  await bootstrap();
  await require('../server/seed')(db);
  const server = app.listen(0);
  await new Promise(r => server.once('listening', r));
  const base = 'http://127.0.0.1:' + server.address().port;

  const J = h => Object.assign({ 'Content-Type': 'application/json' }, h || {});
  const OP = { 'x-admin-token': ADMIN };
  const post = (p, b, h) => fetch(base + p, { method: 'POST', headers: J(h), body: JSON.stringify(b || {}) });
  const get = (p, h) => fetch(base + p, { headers: h || {} });
  const del = (p, h) => fetch(base + p, { method: 'DELETE', headers: h || {} });
  const AS = t => ({ Authorization: 'Bearer ' + t });

  const SEATS = require('../server/tenancy').PLANS.founding_pilot.seats;

  // =========================================================================
  sec('THE PRODUCTION DATABASE STARTS EMPTY');
  ok('Zero clinics', (await db.get(`SELECT COUNT(*) n FROM clinics`)).n === 0);
  ok('Zero accounts', (await db.get(`SELECT COUNT(*) n FROM users`)).n === 0);
  ok('And no verification tenant exists until somebody asks',
     (await (await get('/api/admin/verification-tenant', OP)).json()).tenants.length === 0);

  sec('ONLY THE OPERATOR CAN MINT ONE');
  ok('A stranger cannot', (await post('/api/admin/verification-tenant', {})).status === 403);
  ok('Nor a wrong token',
     (await post('/api/admin/verification-tenant', {}, { 'x-admin-token': 'nope' })).status === 403);
  ok('And nothing was created', (await db.get(`SELECT COUNT(*) n FROM clinics`)).n === 0);

  // =========================================================================
  sec('THE HAZARDOUS ROW IS REAL');
  const r = await post('/api/admin/verification-tenant', {}, OP);
  ok('The operator mints it', r.status === 201, String(r.status));
  const v = await r.json();
  ok('Its id is unmistakably a verification tenant', /^clinic_verify_/.test(v.clinicId), v.clinicId);
  ok('It says so in its own name', /verification/i.test(v.clinicName), v.clinicName);
  ok('And declares itself disposable', v.disposable === true);
  ok('The STORED ROW says 10 — the pre-correction value', v.storedRow.seats === 10, String(v.storedRow.seats));
  ok('On a plan key that is current, which is what made it dangerous',
     v.storedRow.plan === 'founding_pilot', v.storedRow.plan);
  // Read it straight out of the database too, so this is not the API's word.
  const raw = await db.get(`SELECT seats FROM clinics WHERE id = ?`, [v.clinicId]);
  ok('The database itself holds 10', raw.seats === 10, String(raw.seats));
  done(`row seats=${v.storedRow.seats}`);

  sec('AND THE PRODUCT ENFORCES FIVE ANYWAY');
  ok(`The effective entitlement is ${SEATS}`, v.effective.seats === SEATS, String(v.effective.seats));
  ok('The mismatch is reported rather than hidden', v.rowIsStale === true);
  ok('Seat usage reports the enforced total, not the stored one',
     v.seatUsage.total === SEATS, String(v.seatUsage.total));
  ok('And it says in words what it is showing',
     /stored row says 10/i.test(String(v.note)) && new RegExp(`enforces ${SEATS}`, 'i').test(String(v.note)),
     String(v.note));
  done(v.note);

  // =========================================================================
  sec('PRACTITIONER SIX IS REFUSED — THE PROOF ARCHITECTURE RUNS');
  const login = await post('/api/auth/login', { email: v.manager.email, password: v.password });
  ok('The verification manager signs in', login.status === 200, String(login.status));
  const mgr = (await login.json()).token;

  const issued = [];
  let refusal = null;
  for (let i = 1; i <= 8; i++) {
    const inv = await post('/api/invites',
      { name: `Verify ${i}`, email: `v${i}@mirror-verification.invalid` }, Object.assign(AS(mgr), {}));
    if (inv.status === 201) { issued.push(i); continue; }
    refusal = (await inv.json()).error;
    break;
  }
  ok(`Exactly ${SEATS - 1} practitioners can be invited beside the manager`,
     issued.length === SEATS - 1, `${issued.length} issued`);
  ok('The next one is refused', !!refusal, String(refusal));
  ok(`The refusal names ${SEATS}, not 10`,
     !!refusal && refusal.includes(String(SEATS)) && !/\b10\b/.test(refusal), String(refusal));
  done(refusal);

  sec('AND THE ROW STILL SAYS 10 WHILE THAT HAPPENS');
  // This is the whole point: enforcement did not depend on repairing the row.
  const during = await db.get(`SELECT seats FROM clinics WHERE id = ?`, [v.clinicId]);
  ok('The stored row was never consulted', during.seats === 10, String(during.seats));

  // =========================================================================
  sec('A RESTART REPAIRS THE ROW ITSELF — THE SECOND PROOF');
  await require('../server/tenancy').migrate(db);       // what boot runs
  const after = await (await get('/api/admin/verification-tenant/' + v.clinicId, OP)).json();
  ok(`The stored row is now ${SEATS}`, after.storedRow.seats === SEATS, String(after.storedRow.seats));
  ok('Nothing is stale any more', after.rowIsStale === false);
  ok('And it explains how to demonstrate the first proof again',
     /restale/i.test(String(after.note)), String(after.note));

  sec('THE STALE STATE CAN BE PUT BACK ON DEMAND');
  const again = await (await post('/api/admin/verification-tenant/' + v.clinicId + '/restale', {}, OP)).json();
  ok('The row reads 10 again', again.storedRow.seats === 10, String(again.storedRow.seats));
  ok(`And the enforced entitlement is still ${SEATS}`, again.effective.seats === SEATS, String(again.effective.seats));

  // =========================================================================
  sec('A REAL BUYER IS CREATED BESIDE IT, AND THE TWO NEVER TOUCH');
  const buyer = await require('../server/tenancy').createPilotClinic(db, {
    clinicName: 'Clínica Compradora', managerName: 'Rosa Cliente', managerEmail: 'rosa@compradora.test',
    paymentState: 'paid', password: 'La-clinica-de-verdad-12'
  });
  const buyerTok = (await (await post('/api/auth/login',
    { email: 'rosa@compradora.test', password: 'La-clinica-de-verdad-12' })).json()).token;

  ok('The buyer clinic has a normal id', !/^clinic_verify_/.test(buyer.clinic.id), buyer.clinic.id);
  const buyerClinic = await (await get('/api/clinic', AS(buyerTok))).json();
  ok('The buyer sees her own clinic', buyerClinic.clinic.id === buyer.clinic.id);
  ok(`With ${SEATS} seats and no trace of the stale row`,
     buyerClinic.seats.total === SEATS, String(buyerClinic.seats.total));
  ok('The buyer cannot read the verification tenant\'s audit trail',
     !JSON.stringify(await (await get('/api/clinic/audit', AS(buyerTok))).json()).includes(v.clinicId));
  ok('The verification manager cannot see the buyer\'s clinic',
     (await (await get('/api/clinic', AS(mgr))).json()).clinic.id !== buyer.clinic.id);
  const mgrTeam = await (await get('/api/manager/monday', AS(mgr))).json();
  ok('Nor anybody on the buyer\'s team',
     !JSON.stringify(mgrTeam).includes('Rosa Cliente'));

  // =========================================================================
  sec('REMOVAL CANNOT TOUCH A REAL CUSTOMER');
  const misfire = await del('/api/admin/verification-tenant/' + buyer.clinic.id, OP);
  ok('Pointing removal at the buyer is refused', misfire.status === 400, String(misfire.status));
  ok('With a reason, not a silent no-op',
     /not a verification tenant/i.test((await misfire.json()).error));
  ok('And the buyer still exists',
     (await db.get(`SELECT COUNT(*) n FROM clinics WHERE id = ?`, [buyer.clinic.id])).n === 1);
  ok('Her manager can still sign in',
     (await post('/api/auth/login', { email: 'rosa@compradora.test', password: 'La-clinica-de-verdad-12' })).status === 200);

  sec('AND REMOVAL LEAVES THE CUSTOMER DATABASE CLEAN');
  const removed = await (await del('/api/admin/verification-tenant/' + v.clinicId, OP)).json();
  ok('The verification tenant is gone', removed.removed === true, JSON.stringify(removed).slice(0, 120));
  ok('Its accounts went with it', removed.usersRemoved >= 1, String(removed.usersRemoved));
  ok('No clinic row survives',
     (await db.get(`SELECT COUNT(*) n FROM clinics WHERE id = ?`, [v.clinicId])).n === 0);
  ok('No user row survives',
     (await db.get(`SELECT COUNT(*) n FROM users WHERE clinic_id = ?`, [v.clinicId])).n === 0);
  ok('No invitation survives',
     (await db.get(`SELECT COUNT(*) n FROM invites WHERE clinic_id = ?`, [v.clinicId])).n === 0);
  ok('Its manager can no longer sign in',
     (await post('/api/auth/login', { email: v.manager.email, password: v.password })).status === 401);
  ok('The buyer is untouched', removed.clinicsRemaining === 1, String(removed.clinicsRemaining));
  ok('And she can still sign in',
     (await post('/api/auth/login', { email: 'rosa@compradora.test', password: 'La-clinica-de-verdad-12' })).status === 200);
  ok('Nothing named "verify" is left anywhere in the clinic table',
     (await db.get(`SELECT COUNT(*) n FROM clinics WHERE id LIKE 'clinic_verify_%'`)).n === 0);
  done(`${removed.usersRemoved} account(s) removed, ${removed.clinicsRemaining} clinic left — the buyer`);

  sec('THE VERIFICATION TENANT IS NOT SOMETHING A BUYER CAN MINT');
  ok('Not with a manager session',
     (await post('/api/admin/verification-tenant', {}, AS(buyerTok))).status === 403);
  ok('Not with no token at all', (await post('/api/admin/verification-tenant', {})).status === 403);
  ok('And it is not reachable on any public route',
     (await get('/api/admin/verification-tenant')).status === 403);

  server.close();
  fs.existsSync(dbPath) && fs.unlinkSync(dbPath);
  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
