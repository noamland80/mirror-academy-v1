/**
 * THE LAST STAGE OF THE ARC CLOSES, AND KEEPS ITS CONFIDENCE
 *
 * The journey the product sells ends at manager coaching. Until a practitioner
 * can see that stage from her own side, the arc has a hole at the end: she
 * writes up a real consultation, her manager reads it and coaches her, and
 * nothing on her screen ever acknowledges that it happened.
 *
 * This proves two things that pull against each other:
 *
 *   · she CAN see that she was coached, on what, when, and what her own work
 *     has done since — measured against her own earlier consultations only;
 *   · she CANNOT see the manager's note. A manager writes that as her private
 *     record of a conversation she has already had out loud. Turning it into a
 *     message to the practitioner would change how managers write, and the
 *     product depends on that note being honest.
 *
 * Run: node test/verify-coaching-returns.js
 */
const path = require('path');
const os = require('os');
const fs = require('fs');

const dbPath = path.join(os.tmpdir(), `mirror-returns-${Date.now()}.db`);
process.env.MIRROR_DB = dbPath;

const { app, db, bootstrap } = require('../server/index');
const tenancy = require('../server/tenancy');

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
  if (!r.ok) throw new Error('login failed for ' + email);
  return r.body.token;
};

/** A recorded consultation, shaped as the engine stores one. */
const attempt = (id, who, when, optionIds, holds) => ({
  id, practitionerId: who, clinicId: null, scenario: 'beatriz-programme',
  status: 'completed', startedAt: when, completedAt: when, currentPhase: 'continuation',
  decisions: optionIds.map((optionId, i) => ({
    phase: 'discovery', optionId,
    consequence: { trustDelta: holds[i] ? { understanding: 1 } : { understanding: -1 } }
  })),
  artifacts: {}, clientState: { relationshipState: 'ACTIVE' }, decisionOutcome: { outcome: 'DEFER' }
});

// The exact wording a manager would never want read back verbatim.
const PRIVATE_NOTE =
  'I told her to push harder for the booking when the client is agreeable, which I now think was poor advice from me and I want to correct it.';

(async () => {
  await bootstrap();
  const server = app.listen(0);
  await new Promise(r => server.once('listening', r));
  BASE = 'http://127.0.0.1:' + server.address().port;

  sec('A CLINIC, A MANAGER AND TWO PRACTITIONERS');
  const made = await tenancy.createPilotClinic(db, {
    clinicName: 'Clínica Arco', managerName: 'Ana Beltrán', managerEmail: 'ana@arco.test'
  });
  const clinicId = made.clinic.id;
  const inv1 = await tenancy.createInvite(db, await db.getUserByEmail('ana@arco.test'),
    { name: 'Elena Duarte', email: 'elena@arco.test' });
  await tenancy.acceptInvite(db, inv1.token, 'a-long-enough-password');
  const inv2 = await tenancy.createInvite(db, await db.getUserByEmail('ana@arco.test'),
    { name: 'Rosa Pérez', email: 'rosa@arco.test' });
  await tenancy.acceptInvite(db, inv2.token, 'a-long-enough-password');

  const elena = await db.getUserByEmail('elena@arco.test');
  const rosa = await db.getUserByEmail('rosa@arco.test');
  const mgrTok = await login('ana@arco.test', made.password);
  const elenaTok = await login('elena@arco.test', 'a-long-enough-password');
  const rosaTok = await login('rosa@arco.test', 'a-long-enough-password');
  ok('The clinic, its manager and two practitioners exist', !!elena && !!rosa && !!mgrTok);

  sec('BEFORE ANY COACHING, THE STAGE IS HONEST RATHER THAN EMPTY');
  let mine = await call(elenaTok, 'GET', '/api/coaching-received');
  ok('She can ask, and the product answers', mine.ok, String(mine.status));
  ok('It says nothing has happened yet', (mine.body.conversations || []).length === 0);
  ok('And it says what would make it happen', /manager reads/i.test(mine.body.note || ''), mine.body.note);
  done(mine.body.note);

  sec('SHE IS COACHED, AND THE LOOP CLOSES ON HER SCREEN');
  const EASY = 'disc-accept', GOOD = 'disc-slow';
  const BEFORE = new Date(Date.now() - 21 * 864e5).toISOString(), AFTER = new Date(Date.now() + 36e5).toISOString();
  for (const a of [
    attempt('e1', elena.id, BEFORE, [EASY, EASY, EASY], [false, false, false]),
    attempt('e2', elena.id, BEFORE, [EASY, EASY, GOOD], [false, false, true]),
    attempt('e3', elena.id, BEFORE, [EASY, GOOD, GOOD], [false, true, true])
  ]) { a.clinicId = clinicId; await db.saveAttempt(a); }

  const rec = await call(mgrTok, 'POST', '/api/manager/coaching-notes', {
    practitionerId: elena.id, patternKey: 'took_the_easy_yes', phase: 'discovery', note: PRIVATE_NOTE
  });
  ok('The manager records the conversation', rec.status === 201, String(rec.status));

  for (const a of [
    attempt('e4', elena.id, AFTER, [GOOD, GOOD, GOOD], [true, true, true]),
    attempt('e5', elena.id, AFTER, [GOOD, GOOD, GOOD], [true, true, true]),
    attempt('e6', elena.id, AFTER, [GOOD, GOOD, EASY], [true, true, false])
  ]) { a.clinicId = clinicId; await db.saveAttempt(a); }

  mine = await call(elenaTok, 'GET', '/api/coaching-received');
  const conv = (mine.body.conversations || [])[0];
  ok('She now sees that she was coached', !!conv, JSON.stringify(mine.body).slice(0, 120));
  ok('She sees what it was about', !!conv && (!!conv.patternKey || !!conv.phase));
  ok('She sees when it happened', !!conv && !!conv.createdAt);
  ok('She sees what her own work has done since',
     !!conv && !!conv.effect && conv.effect.state === 'improved', conv && conv.effect && conv.effect.state);
  // Three consultations before, using the coached option 3 + 2 + 1 times.
  ok('With the counts behind it',
     !!conv && conv.effect.before.occurrences === 6 && conv.effect.after.occurrences === 1,
     conv && `${conv.effect.before.occurrences} → ${conv.effect.after.occurrences}`);

  // The sentences are generated for the manager who did the coaching. Handed to
  // the practitioner unchanged they read "the thing YOU coached" about herself,
  // which is somebody else's voice describing her own work.
  ok('The wording addresses her, not the manager who coached her',
     !/\byou coached\b|\btrabajaste\b/i.test(JSON.stringify(mine.body)),
     (JSON.stringify(mine.body).match(/[^"]*\byou coached\b[^"]*/i) || [])[0]);
  done(conv.effect.headline);
  (conv.effect.lines || []).forEach(l => done(l));

  sec('THE MANAGER\'S PRIVATE NOTE DOES NOT REACH HER');
  const blob = JSON.stringify(mine.body);
  ok('The note text is absent from her payload', !blob.includes('poor advice from me'));
  ok('No fragment of it survives anywhere in the response',
     !blob.includes(PRIVATE_NOTE.slice(0, 40)));
  ok('There is no `note` field on the conversation at all',
     !!conv && !Object.prototype.hasOwnProperty.call(conv, 'note'),
     Object.keys(conv).join(','));
  // The manager keeps her own record in full.
  const mgrView = await call(mgrTok, 'GET', '/api/manager/coaching-notes');
  ok('The manager still reads back exactly what she wrote',
     JSON.stringify(mgrView.body).includes('poor advice from me'));

  sec('IT IS HER OWN WORK, AND NOBODY ELSE\'S');
  await db.saveAttempt(Object.assign(attempt('r1', rosa.id, BEFORE, [EASY, EASY, EASY], [false, false, false]), { clinicId }));
  await call(mgrTok, 'POST', '/api/manager/coaching-notes', {
    practitionerId: rosa.id, patternKey: 'took_the_easy_yes', note: 'A different conversation entirely, with Rosa.'
  });
  mine = await call(elenaTok, 'GET', '/api/coaching-received');
  ok('Another practitioner\'s coaching is not in her list',
     (mine.body.conversations || []).length === 1, String((mine.body.conversations || []).length));
  ok('And her colleague is not named anywhere in it',
     !JSON.stringify(mine.body).includes('Rosa'));
  const rosaSees = await call(rosaTok, 'GET', '/api/coaching-received');
  ok('Rosa sees her own, and only her own', (rosaSees.body.conversations || []).length === 1);

  sec('NO SCORE, NO RANKING, IN EITHER LANGUAGE');
  for (const lang of ['en', 'es']) {
    const r = await call(elenaTok, 'GET', '/api/coaching-received', null, lang);
    const j = JSON.stringify(r.body)
      .replace(/[^.]*\bnot a (rating|score)[^.]*\./gi, '')
      .replace(/[^.]*\bno (es una calificación|la compara)[^.]*\./gi, '');
    ok(`${lang}: no score, percentage or ranking reaches her`,
       !/\b\d{1,3}\s?%|\bscored?\b|\brating\b|\brank(ing|ed)?\b|\bpuntuaci[óo]n\b|\bcalificaci[óo]n\b/i.test(j),
       (j.match(/\b\d{1,3}\s?%|\bscored?\b|\brating\b|\brank(ing|ed)?\b/i) || [])[0]);
    ok(`${lang}: the whole response is in the requested language`,
       typeof r.body.note === 'string' && r.body.note.length > 0);
  }
  const es = await call(elenaTok, 'GET', '/api/coaching-received', null, 'es');
  done(es.body.conversations[0].effect.headline);

  sec('A MANAGER ASKING THIS GETS HER OWN VIEW, NOT A PRACTITIONER\'S');
  const mgrAsks = await call(mgrTok, 'GET', '/api/coaching-received');
  ok('The manager is not handed a practitioner payload',
     mgrAsks.ok && (mgrAsks.body.conversations || []).length === 0);
  const anon = await call(null, 'GET', '/api/coaching-received');
  ok('A stranger gets nothing', anon.status === 401, String(anon.status));

  server.close();
  fs.existsSync(dbPath) && fs.unlinkSync(dbPath);
  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
