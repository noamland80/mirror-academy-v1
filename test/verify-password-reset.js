/**
 * A FORGOTTEN PASSWORD DOES NOT COST HER HER WORK
 *
 * Somebody forgets a password in the first fortnight of every pilot. Until now
 * the only remedy was a fresh invitation to a different address, which would
 * have left every consultation she had already recorded attached to an account
 * nobody could sign into.
 *
 * The property this suite exists to protect is that one: after a reset she is
 * the SAME person — same id, same clinic, same recorded consultations, same
 * lesson progress, same field journal — with a different password.
 *
 * It also holds the line on everything the reset must not become: a way for a
 * manager to learn or choose somebody's password, a way into another clinic, a
 * link that works twice, a link that works forever, or a way to smuggle one of
 * the three published demo passwords back into a live account.
 *
 * Run: node test/verify-password-reset.js
 */
const path = require('path');
const os = require('os');
const fs = require('fs');

const dbPath = path.join(os.tmpdir(), `mirror-reset-${Date.now()}.db`);
process.env.MIRROR_DB = dbPath;

const { app, db, bootstrap } = require('../server/index');
const tenancy = require('../server/tenancy');
const seed = require('../server/seed');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);

let BASE;
async function call(token, method, p, body, lang) {
  const headers = Object.assign({ 'Content-Type': 'application/json' },
    token ? { Authorization: 'Bearer ' + token } : {},
    lang ? { 'X-Mirror-Lang': lang } : {});
  const r = await fetch(BASE + p, { method, headers, body: body ? JSON.stringify(body) : undefined });
  let j = null; try { j = await r.json(); } catch (e) {}
  return { status: r.status, ok: r.ok, body: j };
}
const login = async (email, password) => {
  const r = await call(null, 'POST', '/api/auth/login', { email, password });
  return r.ok ? r.body.token : null;
};
const tokenOf = link => String(link || '').split('token=')[1] || '';

(async () => {
  await bootstrap();
  const server = app.listen(0);
  await new Promise(r => server.once('listening', r));
  BASE = 'http://127.0.0.1:' + server.address().port;

  sec('A CLINIC WITH A PRACTITIONER WHO HAS DONE REAL WORK');
  const made = await tenancy.createPilotClinic(db, {
    clinicName: 'Clínica Vela', managerName: 'Ana Ruiz', managerEmail: 'ana@vela.test'
  });
  const mgr = await db.getUserByEmail('ana@vela.test');
  const inv = await tenancy.createInvite(db, mgr, { name: 'Elena Duarte', email: 'elena@vela.test' });
  const elena = await tenancy.acceptInvite(db, inv.token, 'her-first-password');

  // Work that must survive: a recorded consultation and a lesson.
  await db.saveAttempt({
    id: 'att_keep_1', practitionerId: elena.id, clinicId: made.clinic.id,
    scenario: 'beatriz-programme', status: 'completed',
    startedAt: '2026-09-01T09:00:00.000Z', completedAt: '2026-09-01T10:00:00.000Z',
    currentPhase: 'continuation',
    decisions: [{ phase: 'discovery', optionId: 'disc-slow', consequence: { trustDelta: { understanding: 1 } } }],
    artifacts: {}, clientState: { relationshipState: 'ACTIVE' }, decisionOutcome: { outcome: 'DEFER' }
  });
  await db.saveLessonProgress({ userId: elena.id, clinicId: made.clinic.id, moduleId: 'm1', lessonId: 'm1l1', status: 'complete' });

  const beforeAttempts = (await db.listAttemptsForClinic(made.clinic.id)).filter(a => a.practitionerId === elena.id);
  const beforeLessons = await db.listLessonProgress(elena.id);
  ok('She has recorded work before the reset', beforeAttempts.length === 1 && beforeLessons.length >= 1,
     `${beforeAttempts.length} consultations, ${beforeLessons.length} lessons`);

  const mgrTok = await login('ana@vela.test', made.password);
  ok('Her manager can sign in', !!mgrTok);
  ok('She can sign in with the password she chose', !!(await login('elena@vela.test', 'her-first-password')));

  sec('THE MANAGER ISSUES A LINK, AND NEVER LEARNS THE PASSWORD');
  const issued = await call(mgrTok, 'POST', '/api/password-resets', { practitionerId: elena.id });
  ok('The manager can issue a reset link', issued.status === 201, String(issued.status));
  ok('It is a link she can hand over, not a bare token', /\/reset\?token=/.test(issued.body.link || ''), issued.body.link);
  ok('It comes with a message she can paste', typeof issued.body.message === 'string' && issued.body.message.length > 60);
  ok('The message contains the link', (issued.body.message || '').includes(issued.body.link));
  ok('The message greets her by name', (issued.body.message || '').includes('Elena'));
  ok('No password appears anywhere in what the manager is given',
     !/her-first-password/.test(JSON.stringify(issued.body)));
  done(issued.body.note);

  const link = tokenOf(issued.body.link);

  sec('THE LINK TELLS THE PAGE ONLY WHAT IT NEEDS');
  const peek = await call(null, 'GET', `/api/password-resets/${link}`);
  ok('An unauthenticated page can read the link state', peek.ok, String(peek.status));
  ok('It says the link is open', peek.body.state === 'open', peek.body.state);
  ok('It names her, so she knows it is hers', peek.body.name === 'Elena Duarte', peek.body.name);
  ok('It does NOT leak her email address', !/elena@vela\.test/.test(JSON.stringify(peek.body)));

  sec('THE PUBLISHED DEMO PASSWORDS CANNOT COME BACK THIS WAY');
  for (const burned of seed.BURNED_PASSWORDS) {
    const r = await call(null, 'POST', `/api/password-resets/${link}/use`, { password: burned });
    ok(`A burned password is refused (${burned.slice(0, 6)}…)`, r.status === 409, String(r.status));
  }
  const tooShort = await call(null, 'POST', `/api/password-resets/${link}/use`, { password: 'short' });
  ok('A password under ten characters is refused', tooShort.status === 409, String(tooShort.status));
  ok('And the link still works after those refusals',
     (await call(null, 'GET', `/api/password-resets/${link}`)).body.state === 'open');

  sec('SHE SETS A NEW PASSWORD AND IS THE SAME PERSON');
  const used = await call(null, 'POST', `/api/password-resets/${link}/use`, { password: 'her-second-password' });
  ok('The reset succeeds', used.status === 201, String(used.status));
  ok('She arrives already signed in', !!used.body.token);
  ok('It is the same account id', used.body.user && used.body.user.id === elena.id,
     `${used.body.user && used.body.user.id} vs ${elena.id}`);
  ok('In the same clinic, with the same name',
     used.body.user.clinicId === made.clinic.id && used.body.user.name === 'Elena Duarte');

  const afterAttempts = (await db.listAttemptsForClinic(made.clinic.id)).filter(a => a.practitionerId === elena.id);
  const afterLessons = await db.listLessonProgress(elena.id);
  ok('Her recorded consultation survived', afterAttempts.length === beforeAttempts.length,
     `${beforeAttempts.length} → ${afterAttempts.length}`);
  ok('Her lesson progress survived', afterLessons.length === beforeLessons.length,
     `${beforeLessons.length} → ${afterLessons.length}`);
  ok('Her clinic still counts one practitioner, not two',
     (await db.listPractitioners(made.clinic.id)).length === 1,
     String((await db.listPractitioners(made.clinic.id)).length));
  ok('Her manager still sees her work',
     (await db.listAttemptsForClinic(made.clinic.id)).length === 1);
  done(`consultations ${afterAttempts.length} · lessons ${afterLessons.length} · id unchanged`);

  sec('THE OLD PASSWORD AND THE OLD SESSIONS ARE GONE');
  ok('The old password no longer works', !(await login('elena@vela.test', 'her-first-password')));
  ok('The new password does', !!(await login('elena@vela.test', 'her-second-password')));

  sec('THE LINK IS SINGLE USE, AND IT EXPIRES');
  const again = await call(null, 'POST', `/api/password-resets/${link}/use`, { password: 'a-third-password' });
  ok('The same link cannot be used twice', again.status === 409, String(again.status));
  ok('And the page is told why', (await call(null, 'GET', `/api/password-resets/${link}`)).body.state === 'used');
  ok('The third password never took effect', !(await login('elena@vela.test', 'a-third-password')));

  // Issuing a new link must retire the old one, or a link handed over and then
  // re-issued would leave two live ways into the same account.
  const first = await call(mgrTok, 'POST', '/api/password-resets', { practitionerId: elena.id });
  const second = await call(mgrTok, 'POST', '/api/password-resets', { practitionerId: elena.id });
  ok('Issuing a new link retires the previous one',
     (await call(null, 'GET', `/api/password-resets/${tokenOf(first.body.link)}`)).body.state === 'used');
  ok('The newest link is the live one',
     (await call(null, 'GET', `/api/password-resets/${tokenOf(second.body.link)}`)).body.state === 'open');

  const expired = await tenancy.createPasswordReset(db, mgr, { practitionerId: elena.id });
  await db.run(`UPDATE password_resets SET expires_at = ? WHERE token = ?`,
    ['2020-01-01T00:00:00.000Z', expired.token]);
  ok('An old link reports itself expired',
     (await call(null, 'GET', `/api/password-resets/${expired.token}`)).body.state === 'expired');
  ok('And it cannot set a password',
     (await call(null, 'POST', `/api/password-resets/${expired.token}/use`, { password: 'never-going-to-work' })).status === 409);

  sec('NOBODY CAN RESET ACROSS A CLINIC BOUNDARY');
  const other = await tenancy.createPilotClinic(db, {
    clinicName: 'Bellara', managerName: 'Nuria Paz', managerEmail: 'nuria@bellara.test'
  });
  const otherTok = await login('nuria@bellara.test', other.password);
  const cross = await call(otherTok, 'POST', '/api/password-resets', { practitionerId: elena.id });
  ok('A manager cannot reset somebody in another clinic', cross.status === 422, String(cross.status));
  ok('And is told plainly why', /not in this clinic/i.test((cross.body || {}).error || ''), (cross.body || {}).error);

  const elenaTok = await login('elena@vela.test', 'her-second-password');
  const byPrac = await call(elenaTok, 'POST', '/api/password-resets', { practitionerId: elena.id });
  ok('A practitioner cannot issue reset links at all', byPrac.status === 403, String(byPrac.status));
  const anon = await call(null, 'POST', '/api/password-resets', { practitionerId: elena.id });
  ok('Nor can a stranger', anon.status === 401, String(anon.status));

  const self = await call(mgrTok, 'POST', '/api/password-resets', { practitionerId: mgr.id });
  ok('A manager cannot reset her own password this way', self.status === 422, String(self.status));

  sec('THE PAGE SPEAKS BOTH LANGUAGES');
  const html = fs.readFileSync(path.join(__dirname, '..', 'public', 'reset.html'), 'utf8');
  ok('The reset page exists and is served at /reset', html.length > 2000);
  ok('It carries an English and a Spanish copy table', /\ben:\s*\{/.test(html) && /\bes:\s*\{/.test(html));
  ok('It promises her work is kept, in both languages',
     /stays exactly where it is/.test(html) && /se queda tal cual/.test(html));
  ok('It shows no email address and no password on screen',
     !/value\s*=\s*["'][^"']*@/.test(html));
  for (const lang of ['en', 'es']) {
    const r = await call(mgrTok, 'POST', '/api/password-resets', { practitionerId: elena.id }, lang);
    ok(`${lang}: the handover message is in the requested language`,
       typeof r.body.message === 'string' && (lang === 'es'
         ? /contraseña/.test(r.body.message) : /password/.test(r.body.message)),
       (r.body.message || '').slice(0, 50));
  }

  server.close();
  fs.existsSync(dbPath) && fs.unlinkSync(dbPath);
  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
