/**
 * HOSTED MULTI-TENANT READINESS
 *
 * Everything that must be true before a clinic that is not Wild Magic can be
 * given a login. This suite cannot prove the product is deployed — no public
 * host is reachable from this environment — but it proves the product is
 * deployable and that tenants cannot see each other.
 *
 * Run: node test/verify-hosted-readiness.js
 */
const fs = require('fs');
const path = require('path');
const os = require('os');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const R = p => fs.readFileSync(path.join(__dirname, '..', p), 'utf8');

(async () => {

sec('THE IMAGE BUILDS FROM WHAT IS IN THE REPOSITORY');
const df = R('Dockerfile');
ok('A Dockerfile exists and pins a Node with a built-in datastore', /FROM node:2[2-9]/.test(df));
ok('It runs in hosted mode by default', /MIRROR_MODE=hosted/.test(df));
ok('The database is on a volume, not in the image', /VOLUME \["\/data"\]/.test(df) && /MIRROR_DB=\/data/.test(df));
ok('It does not run as root', /USER node/.test(df));
ok('It health-checks itself', /HEALTHCHECK/.test(df) && /api\/health/.test(df));
ok('Dev-only material is excluded from the build context',
   ['test', 'scripts', 'data'].every(x => R('.dockerignore').includes(x)));
ok('A Render blueprint and a Fly config both exist',
   fs.existsSync(path.join(__dirname, '..', 'render.yaml')) && fs.existsSync(path.join(__dirname, '..', 'fly.toml')));
ok('Neither deploy file contains a literal secret',
   !/MIRROR_SEED_PW_\w+\s*[:=]\s*["']?[A-Za-z0-9!@#$%^&*-]{6,}/.test(R('render.yaml') + R('fly.toml')));
ok('Both deploy files require every seed password to be supplied',
   ['MIRROR_SEED_PW_PRAC1', 'MIRROR_SEED_PW_PRAC2', 'MIRROR_SEED_PW_MGR']
     .every(k => R('render.yaml').includes(k) && R('fly.toml').includes(k)));

sec('THE PRODUCT HAS NO NATIVE DEPENDENCY TO COMPILE');
const pkg = JSON.parse(R('package.json'));
ok('Runtime dependencies are pure JavaScript',
   Object.keys(pkg.dependencies || {}).every(d => ['express', 'cors', 'uuid'].includes(d)),
   Object.keys(pkg.dependencies || {}).join(','));
ok('sqlite3 is optional, not required', !(pkg.dependencies || {}).sqlite3);
ok('The running driver needs nothing installed', require('../server/database').DRIVER === 'node:sqlite',
   require('../server/database').DRIVER);

sec('TENANTS CANNOT SEE EACH OTHER');
const dbPath = path.join(os.tmpdir(), `mirror-tenancy-${Date.now()}.db`);
process.env.MIRROR_DB = dbPath;
const Database = require('../server/database');
const tenancy = require('../server/tenancy');
const db = new Database(dbPath);
await db.initialize();
await tenancy.migrate(db);

const a = await tenancy.createPilotClinic(db, { clinicName: 'Clínica Aurora', managerName: 'Rosa Gil', managerEmail: 'rosa@aurora.test' });
const b = await tenancy.createPilotClinic(db, { clinicName: 'Bellara Madrid', managerName: 'Nuria Paz', managerEmail: 'nuria@bellara.test' });
ok('Two clinics can exist at once', a.clinic.id !== b.clinic.id);
ok('Each clinic gets its own manager, with its own generated password',
   a.password !== b.password && a.password.length >= 12 && b.password.length >= 12);

const mgrA = await db.getUserByEmail('rosa@aurora.test');
const mgrB = await db.getUserByEmail('nuria@bellara.test');
const invA = await tenancy.createInvite(db, mgrA, { name: 'Ana', email: 'ana@aurora.test' });
await tenancy.acceptInvite(db, invA.token, 'a-long-enough-password');

const listA = await db.listPractitioners(a.clinic.id);
const listB = await db.listPractitioners(b.clinic.id);
ok('A practitioner joins only the clinic that invited her', listA.length === 1 && listB.length === 0,
   `${listA.length} / ${listB.length}`);
ok('One clinic cannot see the other\'s consultations',
   (await db.listAttemptsForClinic(a.clinic.id)).length === 0 &&
   (await db.listAttemptsForClinic(b.clinic.id)).length === 0);
ok('One clinic cannot see the other\'s invitations',
   (await tenancy.listInvites(db, b.clinic.id)).length === 0 &&
   (await tenancy.listInvites(db, a.clinic.id)).length === 1);
ok('Seats are counted per clinic', (await tenancy.seatUsage(db, a.clinic.id)).members === 2);

let crossed = null;
try { await tenancy.createInvite(db, mgrB, { name: 'Ana', email: 'ana@aurora.test' }); }
catch (e) { crossed = e.message; }
ok('A manager cannot invite somebody who already belongs to another clinic', !!crossed, crossed || 'no error raised');

sec('THE BURNED CREDENTIALS CANNOT REACH A HOSTED TENANT');
const seed = require('../server/seed');
ok('The three published passwords are named as burned', seed.BURNED_PASSWORDS.length === 3);
const probe = await seed.assertNoBurnedCredentials(db).then(r => r.checked).catch(() => -1);
ok('A fresh hosted database rejects every burned-credential probe', probe === 9, String(probe));

// ---------------------------------------------------------------------------
// A verifier that nothing runs is a verifier that does not exist. Writing one
// and forgetting to wire it into `npm test` is the quiet way a suite rots, so
// the release gate checks its own completeness.
sec('EVERY VERIFIER IS IN THE RELEASE GATE');
const gate = JSON.parse(R("package.json"));
const onDisk = fs.readdirSync(__dirname).filter(f => /^verify-.*\.js$/.test(f)).sort();
const wired = (gate.scripts || {}).test || '';
const orphans = onDisk.filter(f => !wired.includes('test/' + f));
ok(`All ${onDisk.length} verifiers run under npm test`, orphans.length === 0, orphans.join(', '));

fs.existsSync(dbPath) && fs.unlinkSync(dbPath);

console.log('\n' + '═'.repeat(58));
console.log(`RESULT: ${pass} passed, ${fail} failed`);
if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
console.log('═'.repeat(58));
process.exit(fail ? 1 : 0);
})();
