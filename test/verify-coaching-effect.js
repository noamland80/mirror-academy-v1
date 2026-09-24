/**
 * DID THE COACHING WORK?
 *
 * The manager's sixth question, and the one a clinic is really paying for.
 * This builds a clean clinic, records real consultations before a coaching
 * conversation and real consultations after it, and checks that the product
 * reports the difference honestly:
 *
 *   · improvement is reported when the coached behaviour actually falls away
 *   · getting worse is reported just as plainly, and flagged for a second
 *     conversation — not smoothed over
 *   · thin evidence is reported as thin evidence, never as a trend
 *   · the comparison is always with the practitioner's own earlier work,
 *     never with a colleague, and never as a score or a ranking
 *
 * Run: node test/verify-coaching-effect.js
 */
const path = require('path');
const os = require('os');
const fs = require('fs');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);

const dbPath = path.join(os.tmpdir(), `mirror-coach-${Date.now()}.db`);
process.env.MIRROR_DB = dbPath;

const Database = require('../server/database');
const coachingLog = require('../server/academy/coachingLog');
const coach = require('../server/academy/coach');

/**
 * A recorded consultation, shaped exactly as the engine stores one. Each
 * decision carries the option chosen and the trust delta it produced, which is
 * what the before/after measurement reads.
 */
function attempt({ id, practitionerId, startedAt, optionIds, phaseHolds }) {
  return {
    id, practitionerId, clinicId: 'c1', scenario: 'beatriz-programme',
    status: 'completed', startedAt, completedAt: startedAt,
    currentPhase: 'continuation', decisions: optionIds.map((optionId, i) => ({
      phase: 'discovery',
      optionId,
      consequence: { trustDelta: phaseHolds[i] ? { understanding: 1 } : { understanding: -1 } }
    })),
    artifacts: {}, clientState: { relationshipState: 'ACTIVE' }, decisionOutcome: { outcome: 'DEFER' }
  };
}

(async () => {
  const db = new Database(dbPath);
  await db.initialize();
  await coachingLog.migrate(db);

  const manager = await db.createUser({ id: 'm1', email: 'mgr@c1.test', name: 'Ana', role: 'manager',
    clinicId: 'c1', clinicName: 'Clinic One', password: 'a-long-enough-password' });
  await db.createUser({ id: 'p1', email: 'p1@c1.test', name: 'Elena', role: 'practitioner',
    clinicId: 'c1', clinicName: 'Clinic One', password: 'a-long-enough-password' });
  await db.createUser({ id: 'p2', email: 'p2@c1.test', name: 'Rosa', role: 'practitioner',
    clinicId: 'c1', clinicName: 'Clinic One', password: 'a-long-enough-password' });
  const practitioners = await db.listPractitioners('c1');

  const EASY = 'disc-accept';       // one of the took_the_easy_yes pattern options
  const GOOD = 'disc-slow';         // not in the pattern
  const BEFORE = new Date(Date.now() - 21 * 864e5).toISOString();
  const AFTER = new Date(Date.now() + 36e5).toISOString();

  sec('RECORDING A COACHING CONVERSATION');
  let err = null;
  try { await coachingLog.record(db, manager, { practitionerId: 'p1', patternKey: 'took_the_easy_yes', note: 'ok' }); }
  catch (e) { err = e.message; }
  ok('A one-word note is refused', !!err && /sentence/i.test(err), err);

  err = null;
  try { await coachingLog.record(db, manager, { practitionerId: 'p1', note: 'We watched the Beatriz consultation back together and talked about it.' }); }
  catch (e) { err = e.message; }
  ok('A note that names neither a pattern nor a phase is refused', !!err && /pattern or the phase/i.test(err), err);

  err = null;
  try { await coachingLog.record(db, manager, { practitionerId: 'nobody', patternKey: 'took_the_easy_yes', note: 'A perfectly reasonable sentence about coaching.' }); }
  catch (e) { err = e.message; }
  ok('A practitioner from another clinic is refused', !!err && /not in this clinic/i.test(err), err);

  sec('THIN EVIDENCE IS REPORTED AS THIN EVIDENCE');
  const beforeRuns = [
    attempt({ id: 'a1', practitionerId: 'p1', startedAt: BEFORE, optionIds: [EASY, EASY, GOOD], phaseHolds: [false, false, true] }),
    attempt({ id: 'a2', practitionerId: 'p1', startedAt: BEFORE, optionIds: [EASY, GOOD, GOOD], phaseHolds: [false, true, false] }),
    attempt({ id: 'a3', practitionerId: 'p1', startedAt: BEFORE, optionIds: [EASY, EASY, EASY], phaseHolds: [false, false, false] })
  ];
  for (const a of beforeRuns) await db.saveAttempt(a);

  await coachingLog.record(db, manager, {
    practitionerId: 'p1', patternKey: 'took_the_easy_yes', phase: 'discovery',
    note: 'Watched the Beatriz run back with her and asked her to name the moment the client agreed with something she had not been told yet.'
  });

  let all = await db.listAttemptsForClinic('c1');
  let effects = await coachingLog.effects(db, 'c1', all, practitioners, coach.PATTERNS);
  ok('The conversation is recorded against the right practitioner',
     effects.length === 1 && effects[0].practitioner === 'Elena');
  ok('With no practice since, the product says so rather than inventing a trend',
     effects[0].effect.state === 'too_early', effects[0].effect.state);
  ok('And it says what would make it answerable', /recorded consultation/i.test(effects[0].effect.detail.en));
  done(effects[0].effect.headline.en);

  sec('IMPROVEMENT IS REPORTED, WITH THE COUNTS BEHIND IT');
  for (const a of [
    attempt({ id: 'a4', practitionerId: 'p1', startedAt: AFTER, optionIds: [GOOD, GOOD, GOOD], phaseHolds: [true, true, true] }),
    attempt({ id: 'a5', practitionerId: 'p1', startedAt: AFTER, optionIds: [GOOD, GOOD, EASY], phaseHolds: [true, true, false] }),
    attempt({ id: 'a6', practitionerId: 'p1', startedAt: AFTER, optionIds: [GOOD, GOOD, GOOD], phaseHolds: [true, true, true] })
  ]) await db.saveAttempt(a);

  all = await db.listAttemptsForClinic('c1');
  effects = await coachingLog.effects(db, 'c1', all, practitioners, coach.PATTERNS);
  const e = effects[0].effect;
  ok('The product reports that the coached behaviour fell away', e.state === 'improved', e.state);
  ok('It counts the pattern before and after', e.before.occurrences === 6 && e.after.occurrences === 1,
     `before ${e.before.occurrences}, after ${e.after.occurrences}`);
  ok('It counts what held at the coached phase',
     e.before.phaseHeld === 2 && e.after.phaseHeld === 8,
     `held ${e.before.phaseHeld}/${e.before.phaseChoices} → ${e.after.phaseHeld}/${e.after.phaseChoices}`);
  ok('The evidence is sentences a manager can read aloud', e.lines.length >= 2 && e.lines.every(l => l.en && l.es));
  // The caution line is allowed to say it is NOT a rating; it must not be one.
  const graded = JSON.stringify(e).replace(/[^.]*\bnot a (rating|score)[^.]*\./gi, '')
                                  .replace(/[^.]*\bno (es una calificación|la compara)[^.]*\./gi, '');
  ok('It never produces a score, a rating or a ranking',
     !/\b\d{1,3}\s?%|\bscored?\b|\brating\b|\brank(ing|ed)?\b/i.test(graded),
     (graded.match(/\b\d{1,3}\s?%|\bscored?\b|\brating\b|\brank(ing|ed)?\b/i) || [])[0]);
  ok('It says out loud that this is not a comparison with anyone else',
     /not compare her with anybody else|no la compara con nadie/i.test(JSON.stringify(e.caution)));
  e.lines.forEach(l => done(l.en));

  sec('GETTING WORSE IS REPORTED JUST AS PLAINLY');
  await db.saveAttempt(attempt({ id: 'b1', practitionerId: 'p2', startedAt: BEFORE, optionIds: [GOOD, GOOD, GOOD], phaseHolds: [true, true, true] }));
  await db.saveAttempt(attempt({ id: 'b2', practitionerId: 'p2', startedAt: BEFORE, optionIds: [GOOD, GOOD, EASY], phaseHolds: [true, true, false] }));
  await coachingLog.record(db, manager, {
    practitionerId: 'p2', patternKey: 'took_the_easy_yes', phase: 'discovery',
    note: 'Told her to push harder for the booking when the client is agreeable, which I now think was the wrong advice.'
  });
  await db.saveAttempt(attempt({ id: 'b3', practitionerId: 'p2', startedAt: AFTER, optionIds: [EASY, EASY, EASY], phaseHolds: [false, false, false] }));
  await db.saveAttempt(attempt({ id: 'b4', practitionerId: 'p2', startedAt: AFTER, optionIds: [EASY, EASY, EASY], phaseHolds: [false, false, false] }));

  all = await db.listAttemptsForClinic('c1');
  effects = await coachingLog.effects(db, 'c1', all, practitioners, coach.PATTERNS);
  const worse = effects.find(x => x.practitioner === 'Rosa').effect;
  ok('A pattern that got MORE frequent after coaching is reported as worse', worse.state === 'worse', worse.state);
  ok('And the manager is told to have a different conversation, not the same one',
     /second conversation|segunda conversación/i.test(worse.headline.en + worse.headline.es));
  done(worse.headline.en);

  sec('ONE PRACTITIONER IS NEVER MEASURED AGAINST ANOTHER');
  ok('Each conversation is measured only against that practitioner\'s own history',
     effects.every(x => {
       const j = JSON.stringify(x.effect);
       const others = practitioners.filter(p => p.name !== x.practitioner).map(p => p.name);
       return others.every(n => !j.includes(n));
     }));
  ok('Both clinics stay separate', (await coachingLog.list(db, 'other-clinic')).length === 0);

  fs.existsSync(dbPath) && fs.unlinkSync(dbPath);
  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
