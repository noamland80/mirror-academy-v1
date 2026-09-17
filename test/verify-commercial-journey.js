/**
 * THE BUYER JOURNEY, END TO END
 *
 * The learning product was finished before the path to it was. This suite
 * walks the path a founding clinic actually takes, over the real API, in both
 * languages, and asserts every step of it:
 *
 *   1  The operator opens a clinic          — and nobody else can
 *   2  The manager signs in                 — and lands on something worth ten
 *                                             minutes before anyone has practised
 *   3  She walks one real consultation moment — the shipped case engine, not a mock
 *   4  She invites a practitioner           — and is handed a message she can send
 *   5  The practitioner accepts             — and is pointed at her first lesson,
 *                                             not at a dashboard
 *   6  She completes something              — a lesson, then her field assignment
 *   7  The manager sees it                  — in the arc, in the coaching view,
 *                                             and in what the clinic keeps
 *
 * And the guarantee that must survive all of it: a password published to a
 * public repository cannot open an account created anywhere along this path.
 *
 * Run: node test/verify-commercial-journey.js
 */

const path = require('path');
const os = require('os');
const fs = require('fs');

const dbPath = path.join(os.tmpdir(), `mirror-journey-${Date.now()}.db`);
process.env.MIRROR_DB = dbPath;
process.env.MIRROR_ADMIN_TOKEN = 'operator-token-for-this-suite';

const { app, bootstrap } = require('../server/index');
const academy = require('../server/academy/content');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);

// English function words with no Spanish homograph; three of them in a string
// that is meant to be Spanish means English was shipped in a Spanish key.
const EN_WORDS = /\b(the|and|you|your|she|her|that|this|with|what|which|would|because|about|there|they|have|was|were|been|will|not|from|when|where|their|them|should|could)\b/gi;
const ALLOWED = /The Beauty Sales Secrets|MIRROR|Toolkit|Clinic Scale System/g;
const looksEnglish = s => (String(s).replace(ALLOWED, '').match(EN_WORDS) || []).length >= 3;

/** Every string a payload would put on screen. */
function strings(v, out) {
  out = out || [];
  if (typeof v === 'string') { if (v.length > 18 && /\s/.test(v)) out.push(v); return out; }
  if (Array.isArray(v)) { v.forEach(x => strings(x, out)); return out; }
  if (v && typeof v === 'object') { Object.keys(v).forEach(k => strings(v[k], out)); return out; }
  return out;
}

(async () => {

await bootstrap();
const server = app.listen(0);
await new Promise(r => server.once('listening', r));
const base = `http://127.0.0.1:${server.address().port}`;

/** One request, in one language, with one identity. */
async function call(method, route, { token, body, lang, admin } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = 'Bearer ' + token;
  if (lang) headers['X-Mirror-Lang'] = lang;
  if (admin) headers['x-admin-token'] = admin;
  const r = await fetch(base + route + (lang ? (route.includes('?') ? '&' : '?') + 'lang=' + lang : ''), {
    method, headers, body: body ? JSON.stringify(body) : undefined
  });
  let j = null; try { j = await r.json(); } catch (e) { /* some routes answer empty */ }
  return { status: r.status, ok: r.ok, body: j };
}

// ===========================================================================
sec('1 · A FOUNDING CLINIC IS OPENED BY THE OPERATOR, AND BY NOBODY ELSE');

const NEW_CLINIC = { clinicName: 'Clínica Ribe', managerName: 'Marta Ribé', managerEmail: 'marta@ribe.test', country: 'ES' };

const anon = await call('POST', '/api/admin/clinics', { body: NEW_CLINIC });
ok('A stranger cannot open a clinic', anon.status === 403, String(anon.status));

const wrongToken = await call('POST', '/api/admin/clinics', { body: NEW_CLINIC, admin: 'not-the-token' });
ok('A wrong operator token cannot open a clinic', wrongToken.status === 403, String(wrongToken.status));

ok('There is no public self-signup route left',
   (await call('POST', '/api/signup/pilot', { body: NEW_CLINIC })).status === 404);

const opened = await call('POST', '/api/admin/clinics', { body: NEW_CLINIC, admin: process.env.MIRROR_ADMIN_TOKEN });
ok('The operator opens the clinic', opened.status === 201, JSON.stringify(opened.body).slice(0, 120));
ok('A manager account comes with it', !!(opened.body && opened.body.manager && opened.body.manager.email === 'marta@ribe.test'));
ok('Her password is generated, not chosen for her by a form',
   !!(opened.body && typeof opened.body.password === 'string' && opened.body.password.length >= 12));
ok('The plan is the Founding Pilot with ten seats',
   opened.body.clinic.plan === 'founding_pilot' && opened.body.clinic.seats === 10);

const MANAGER_PW = opened.body.password;

// ===========================================================================
sec('2 · THE MANAGER SIGNS IN AND IS GIVEN SOMETHING WORTH TEN MINUTES');

const badLogin = await call('POST', '/api/auth/login', { body: { email: 'marta@ribe.test', password: 'wrong-password' } });
ok('A wrong password does not sign her in', badLogin.status === 401);

const login = await call('POST', '/api/auth/login', { body: { email: 'marta@ribe.test', password: MANAGER_PW } });
ok('She signs in with the credentials the operator handed her', login.status === 200 && !!login.body.token);
const mgr = login.body.token;
ok('She is a manager of her own clinic',
   login.body.user.role === 'manager' && login.body.user.clinicName === 'Clínica Ribe');

const j0 = await call('GET', '/api/journey', { token: mgr });
ok('Her first screen has an arc, not an empty table', j0.status === 200 && j0.body.stages.length === 4);
ok('The four movements are learn, practise, apply and keep',
   j0.body.stages.map(s => s.key).join(',') === 'learn,practise,apply,keep');
ok('No movement is reported as "0 of 0"',
   j0.body.stages.every(s => s.total == null || s.total > 0),
   j0.body.stages.map(s => `${s.key}:${s.done}/${s.total}`).join(' '));
ok('With nothing recorded, the next step is not "wait for data"',
   j0.body.next && j0.body.next.kind === 'moment', j0.body.next && j0.body.next.kind);
ok('It names ten seats she has not used', j0.body.team.seatsTotal === 10 && j0.body.team.practitioners === 0);

// ===========================================================================
sec('3 · SHE WALKS ONE REAL CONSULTATION MOMENT HERSELF');

const anonMoment = await call('GET', '/api/first-moment');
ok('The moment is behind her account, not open to the internet', anonMoment.status === 401);

const moment = await call('GET', '/api/first-moment', { token: mgr });
ok('The moment loads', moment.status === 200);
ok('It is a real client from a real case',
   moment.body.client.name === 'Sofia Ramos' && moment.body.client.scenario === 'sofia-melasma');
ok('It is a real phase of the real spine', moment.body.phase.n === 3 && moment.body.phase.key === 'discovery');
ok('She is given the client\'s own words, verbatim',
   String(moment.body.signal.quote).length > 60 && /["“«]/.test(String(moment.body.signal.quote)),
   String(moment.body.signal.quote).slice(0, 60));
ok('There are three replies to choose between', moment.body.options.length === 3);

const verdicts = moment.body.options.map(o => o.alignment);
ok('The three replies do not all read the same way', new Set(verdicts).size === 3, verdicts.join(' | '));
ok('Every reply carries the full MIRROR reading', moment.body.options.every(o =>
   o.reading.signal && o.reading.interpretation && o.reading.principle && o.reading.consequence && o.reading.next));
ok('Every line of the reading is a sentence, not a structure',
   moment.body.options.every(o => Object.keys(o.reading).every(k => typeof o.reading[k] === 'string')),
   JSON.stringify(moment.body.options.map(o => Object.keys(o.reading)
     .filter(k => typeof o.reading[k] !== 'string'))));
ok('Each reply is played against her opening state, not against the reply before it',
   moment.body.options.every(o => o.movement.willingnessBefore === 40 && o.movement.postureBefore === 'reserved'),
   moment.body.options.map(o => `${o.movement.postureBefore}:${o.movement.willingnessBefore}`).join(' | '));
ok('Every reply carries a material movement in the client', moment.body.options.every(o =>
   typeof o.movement.willingnessBefore === 'number' && typeof o.movement.willingnessAfter === 'number'));

const worst = moment.body.options.find(o => /^NOT/.test(o.alignment));
const best = moment.body.options.find(o => /^ALIGNED/.test(o.alignment));
ok('The misaligned reply costs her willingness',
   worst.movement.willingnessAfter < worst.movement.willingnessBefore,
   `${worst.movement.willingnessBefore} → ${worst.movement.willingnessAfter}`);
ok('The aligned reply earns it',
   best.movement.willingnessAfter > best.movement.willingnessBefore,
   `${best.movement.willingnessBefore} → ${best.movement.willingnessAfter}`);
ok('Walking the moment records no consultation against anybody',
   (await call('GET', '/api/manager/attempts', { token: mgr })).body.attempts.length === 0);

await call('POST', '/api/milestones/first_moment', { token: mgr });
const j1 = await call('GET', '/api/journey', { token: mgr });
ok('Having walked it, she is not asked to walk it again',
   j1.body.next.kind === 'invite', j1.body.next.kind);

// ===========================================================================
sec('4 · SHE BRINGS A PRACTITIONER IN, WITH SOMETHING SHE CAN ACTUALLY SEND');

const inv = await call('POST', '/api/invites', { token: mgr, body: { name: 'Lucía Fernández', email: 'lucia@ribe.test' } });
ok('The invitation is created', inv.status === 201, JSON.stringify(inv.body).slice(0, 140));
ok('She is handed a link', typeof inv.body.link === 'string' && /\/join\?token=/.test(inv.body.link), inv.body.link);
ok('The link is not a file path a customer should ever see', !/\.html/.test(inv.body.link), inv.body.link);
ok('She is handed a message, not just a link', typeof inv.body.message === 'string' && inv.body.message.length > 120);
ok('The message is addressed to the practitioner by name', /Lucía/.test(inv.body.message));
ok('The message carries her clinic\'s name', /Ribe/.test(inv.body.message));
ok('The message contains the link itself', inv.body.message.includes(inv.body.link));
ok('The message contains no machinery', !/token=.*\n.*api|localhost|undefined|null/.test(inv.body.message));
ok('A seat is taken by the open invitation', inv.body.seats.used === 2 && inv.body.seats.pending === 1);

const token = inv.body.link.split('token=')[1];

const handover = await call('GET', `/api/invites/${encodeURIComponent(token)}/handover`, { token: mgr });
ok('She can get the same message again later', handover.status === 200 && handover.body.message === inv.body.message);

const seatDupe = await call('POST', '/api/invites', { token: mgr, body: { name: 'Lucía Fernández', email: 'lucia@ribe.test' } });
ok('The same person cannot be invited twice while an invitation is open', seatDupe.status === 409);

// ===========================================================================
sec('5 · THE PRACTITIONER ACCEPTS AND LANDS IN A LESSON, NOT ON A DASHBOARD');

const look = await call('GET', `/api/invites/${encodeURIComponent(token)}`);
ok('She can read her own invitation without an account', look.status === 200 && look.body.state === 'open');
ok('It names the clinic that invited her', look.body.clinicName === 'Clínica Ribe');

ok('A short password is refused',
   (await call('POST', `/api/invites/${encodeURIComponent(token)}/accept`, { body: { password: 'short' } })).status === 409);

const burned = await call('POST', `/api/invites/${encodeURIComponent(token)}/accept`, { body: { password: 'Mirror2026!prac' } });
ok('A password published to the public repository is refused even here', burned.status === 409,
   burned.body && burned.body.error);

const accept = await call('POST', `/api/invites/${encodeURIComponent(token)}/accept`, { body: { password: 'her-own-private-password' } });
ok('She creates her account by choosing her own password', accept.status === 201 && !!accept.body.token);
ok('She is signed in immediately', accept.body.user.role === 'practitioner');
ok('She joins the clinic that invited her and no other', accept.body.user.clinicName === 'Clínica Ribe');
ok('She is pointed at a first lesson rather than a dashboard',
   !!(accept.body.firstLesson && accept.body.firstLesson.moduleId && accept.body.firstLesson.lessonId),
   JSON.stringify(accept.body.firstLesson));

const prac = accept.body.token;
const first = accept.body.firstLesson;

ok('That lesson exists and opens',
   (await call('GET', `/api/academy/modules/${first.moduleId}/lessons/${first.lessonId}`, { token: prac })).status === 200);

ok('The invitation cannot be used a second time',
   (await call('POST', `/api/invites/${encodeURIComponent(token)}/accept`, { body: { password: 'another-long-password' } })).status === 409);

const pj0 = await call('GET', '/api/journey', { token: prac });
ok('Her own arc is the same four movements', pj0.body.stages.map(s => s.key).join(',') === 'learn,practise,apply,keep');
ok('Her next step is the lesson she was handed',
   pj0.body.next.kind === 'lesson' && pj0.body.next.lessonId === first.lessonId);
ok('She cannot see the manager\'s coaching view',
   (await call('GET', '/api/manager/coaching', { token: prac })).status === 403);

// ===========================================================================
sec('6 · SHE COMPLETES SOMETHING REAL');

const mod1 = academy.curriculum().find(m => m.status === 'available');
for (const l of mod1.lessons) {
  await call('POST', '/api/academy/progress', { token: prac, body: { moduleId: mod1.id, lessonId: l.id, status: 'complete' } });
}
const cur = await call('GET', '/api/academy/curriculum', { token: prac });
const doneMod = cur.body.modules.find(m => m.id === mod1.id);
ok('A finished module is recorded as finished', doneMod.completed === doneMod.lessons.length,
   `${doneMod.completed}/${doneMod.lessons.length}`);
ok('Finishing the module opens a field assignment', (cur.body.openAssignments || []).length >= 1);

const assignmentId = cur.body.openAssignments[0].id;
ok('A one-line answer to the field assignment is refused',
   (await call('POST', `/api/academy/journal/${assignmentId}`, { token: prac, body: { answer: 'sí' } })).status === 422);

const answered = await call('POST', `/api/academy/journal/${assignmentId}`, {
  token: prac,
  body: { answer: 'Se lo pregunté a una paciente el martes y me contó el motivo real a la tercera pregunta.' }
});
ok('A real answer is accepted', answered.status === 200);

const pj1 = await call('GET', '/api/journey', { token: prac });
ok('Her arc has moved: lessons are recorded', pj1.totals ? true : pj1.body.totals.lessons === mod1.lessons.length,
   String(pj1.body.totals.lessons));
ok('Her arc has moved: the assignment is recorded', pj1.body.totals.assignmentsAnswered === 1);
ok('Her next step is no longer the lesson she has just done',
   !(pj1.body.next.kind === 'lesson' && pj1.body.next.lessonId === first.lessonId));
ok('There is always a next step, never a dead end', !!(pj1.body.next && pj1.body.next.label && pj1.body.next.why));
ok('What she keeps has no denominator — it only ever grows',
   pj1.body.stages.find(s => s.key === 'keep').total == null);
ok('Nothing she has done is reported as "0 of 0"',
   pj1.body.stages.every(s => s.total == null || s.total > 0),
   pj1.body.stages.map(s => `${s.key}:${s.done}/${s.total}`).join(' '));

// ===========================================================================
sec('7 · THE MANAGER SEES IT');

const j2 = await call('GET', '/api/journey', { token: mgr });
ok('The clinic arc shows the lessons her practitioner completed',
   j2.body.totals.lessons === mod1.lessons.length, String(j2.body.totals.lessons));
ok('The clinic arc shows the field assignment answered', j2.body.totals.assignmentsAnswered === 1);
ok('The team is counted', j2.body.team.practitioners === 1 && j2.body.team.practising === 1);

const coaching = await call('GET', '/api/manager/coaching', { token: mgr });
ok('The coaching view names her practitioner', coaching.status === 200 &&
   coaching.body.practising.rows.some(r => r.name === 'Lucía Fernández'));
ok('It counts her lessons', coaching.body.totals.lessonsCompleted === mod1.lessons.length);

const assignments = await call('GET', '/api/manager/assignments', { token: mgr });
ok('The clinic keeps the field journal entry',
   assignments.body.entries.some(e => e.status === 'answered' && e.practitioner === 'Lucía Fernández'));

const invites = await call('GET', '/api/invites', { token: mgr });
ok('The accepted invitation is shown as accepted',
   invites.body.invites.some(i => i.email === 'lucia@ribe.test' && i.state === 'accepted'));
ok('Nine seats remain', invites.body.seats.used === 2 && invites.body.seats.total === 10);

// ===========================================================================
sec('8 · TENANTS CANNOT SEE EACH OTHER ALONG THIS PATH');

const other = await call('POST', '/api/admin/clinics', {
  admin: process.env.MIRROR_ADMIN_TOKEN,
  body: { clinicName: 'PHI Clinic Madrid', managerName: 'Paula Hidalgo', managerEmail: 'paula@phi.test' }
});
const otherMgr = (await call('POST', '/api/auth/login', {
  body: { email: 'paula@phi.test', password: other.body.password }
})).body.token;

ok('The second clinic sees none of the first clinic\'s people',
   (await call('GET', '/api/manager/coaching', { token: otherMgr })).body.practising.rows.length === 0);
ok('The second clinic sees none of the first clinic\'s invitations',
   (await call('GET', '/api/invites', { token: otherMgr })).body.invites.length === 0);
ok('The second clinic cannot pull the first clinic\'s handover message',
   (await call('GET', `/api/invites/${encodeURIComponent(token)}/handover`, { token: otherMgr })).status === 404);
ok('Its arc starts at the beginning, with the moment offered first',
   (await call('GET', '/api/journey', { token: otherMgr })).body.next.kind === 'moment');

// ===========================================================================
sec('9 · THE SAME JOURNEY, IN SPANISH');

const esJourney = await call('GET', '/api/journey', { token: mgr, lang: 'es' });
const enJourney = await call('GET', '/api/journey', { token: mgr, lang: 'en' });
ok('The arc is localized', esJourney.body.stages[0].title !== enJourney.body.stages[0].title,
   `${esJourney.body.stages[0].title} / ${enJourney.body.stages[0].title}`);
ok('No Spanish arc string is left in English',
   !strings(esJourney.body.stages).some(looksEnglish),
   strings(esJourney.body.stages).filter(looksEnglish).slice(0, 2).join(' | '));
ok('The next step is written in Spanish too',
   !strings(esJourney.body.next).some(looksEnglish),
   strings(esJourney.body.next).filter(looksEnglish).slice(0, 2).join(' | '));

const esMoment = await call('GET', '/api/first-moment', { token: mgr, lang: 'es' });
const enMoment = await call('GET', '/api/first-moment', { token: mgr, lang: 'en' });
ok('The consultation moment is localized whole',
   esMoment.body.signal.quote !== enMoment.body.signal.quote &&
   esMoment.body.frame.title !== enMoment.body.frame.title);
ok('No English is left anywhere in the Spanish moment',
   !strings(esMoment.body).some(looksEnglish),
   strings(esMoment.body).filter(looksEnglish).slice(0, 2).join(' | '));
ok('The client speaks Spanish to a Spanish practitioner', /[«¿áéíóúñ]/.test(String(esMoment.body.signal.quote)));
ok('Every reply she can choose is in Spanish',
   esMoment.body.options.every(o => !looksEnglish(o.language) && !looksEnglish(o.label)));
ok('The reading of every reply is in Spanish',
   esMoment.body.options.every(o => !strings(o.reading).some(looksEnglish)));

const esInvite = await call('POST', '/api/invites', {
  token: mgr, lang: 'es', body: { name: 'Nuria Sanz', email: 'nuria@ribe.test' }
});
ok('A Spanish manager gets a Spanish message to send', esInvite.status === 201 && !looksEnglish(esInvite.body.message),
   String(esInvite.body.message).slice(0, 90));
ok('The Spanish message is addressed and signed', /Hola Nuria/.test(esInvite.body.message) && /Marta Rib/.test(esInvite.body.message));
ok('The Spanish message still carries the working link', esInvite.body.message.includes(esInvite.body.link));

const esToken = esInvite.body.link.split('token=')[1];
const esLook = await call('GET', `/api/invites/${encodeURIComponent(esToken)}`, { lang: 'es' });
ok('She reads her invitation in Spanish', esLook.status === 200 && esLook.body.state === 'open');

const esAccept = await call('POST', `/api/invites/${encodeURIComponent(esToken)}/accept`, {
  lang: 'es', body: { password: 'una-contrasena-larga-mia' }
});
ok('She creates her account and is handed a first lesson, in Spanish',
   esAccept.status === 201 && !!esAccept.body.firstLesson,
   JSON.stringify(esAccept.body.firstLesson || {}).slice(0, 120));
ok('That lesson is titled in Spanish', !looksEnglish(esAccept.body.firstLesson.title),
   esAccept.body.firstLesson.title);

const esPrac = esAccept.body.token;
const esMod = academy.curriculum().find(m => m.status === 'available');
await call('POST', '/api/academy/progress', {
  token: esPrac, lang: 'es',
  body: { moduleId: esMod.id, lessonId: esMod.lessons[0].id, status: 'complete' }
});
const esPj = await call('GET', '/api/journey', { token: esPrac, lang: 'es' });
ok('Her Spanish arc records the lesson', esPj.body.totals.lessons === 1);
ok('Her Spanish arc offers a Spanish next step',
   !strings(esPj.body.next).some(looksEnglish), JSON.stringify(esPj.body.next).slice(0, 120));

const esCoach = await call('GET', '/api/manager/coaching', { token: mgr, lang: 'es' });
ok('The manager sees the Spanish practitioner in her coaching view',
   esCoach.body.practising.rows.some(r => r.name === 'Nuria Sanz'));

// ===========================================================================
sec('10 · THE BURNED CREDENTIALS CANNOT REACH THIS CLINIC');

const seed = require('../server/seed');
for (const pw of seed.BURNED_PASSWORDS) {
  ok(`No account on this path opens with "${pw}"`,
     (await call('POST', '/api/auth/login', { body: { email: 'marta@ribe.test', password: pw } })).status === 401 &&
     (await call('POST', '/api/auth/login', { body: { email: 'lucia@ribe.test', password: pw } })).status === 401 &&
     (await call('POST', '/api/auth/login', { body: { email: 'nuria@ribe.test', password: pw } })).status === 401);
}
const burnedClinic = await call('POST', '/api/admin/clinics', {
  admin: process.env.MIRROR_ADMIN_TOKEN,
  body: { clinicName: 'Burned Test', managerName: 'X', managerEmail: 'x@burned.test', password: 'Mirror2026!mgr' }
});
ok('A clinic cannot be opened with a published password', burnedClinic.status === 409,
   String(burnedClinic.status));

// ===========================================================================
server.close();
fs.existsSync(dbPath) && fs.unlinkSync(dbPath);

console.log('\n' + '═'.repeat(58));
console.log(`RESULT: ${pass} passed, ${fail} failed`);
if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
console.log('═'.repeat(58));
process.exit(fail ? 1 : 0);

})().catch(e => { console.error(e); process.exit(1); });
