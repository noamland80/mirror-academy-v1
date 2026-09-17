/**
 * MONDAY MORNING SAYS SOMETHING TRUE, OR SAYS NOTHING
 *
 * The manager's brief has one job and two ways to fail at it.
 *
 *   It can say too little. A manager who opens it and finds counts and no
 *   action has another dashboard, and she will stop opening it.
 *
 *   It can say too much. A pattern drawn from two consultations, a percentage
 *   on a denominator of three, a named practitioner beside a weakness — each
 *   of those is a sentence she will repeat to her team as if it were true, and
 *   each one damages somebody.
 *
 * So this tests the second failure hardest. It builds a clinic with nothing in
 * it and proves the brief refuses to interpret; adds one consultation and
 * proves it still refuses; then drives a real pattern through the real engine
 * and proves the brief finds it, names it as a signal, and ends in something
 * she can do in ten minutes.
 *
 * Run: node test/verify-monday.js
 */
const fs = require('fs');
const path = require('path');
const os = require('os');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);

const monday = require('../server/academy/monday');
const coach = require('../server/academy/coach');
const tenancy = require('../server/tenancy');
const scenarios = require('../server/scenario');

(async () => {
  const dbPath = path.join(os.tmpdir(), `mirror-monday-${Date.now()}.db`);
  process.env.MIRROR_DB = dbPath;
  process.env.MIRROR_ADMIN_TOKEN = 'monday-operator';
  const { app, db, bootstrap } = require('../server/index');
  await bootstrap();
  const server = app.listen(0);
  await new Promise(r => server.once('listening', r));
  const base = 'http://127.0.0.1:' + server.address().port;

  const J = h => Object.assign({ 'Content-Type': 'application/json' }, h || {});
  const post = (p, b, h) => fetch(base + p, { method: 'POST', headers: J(h), body: JSON.stringify(b || {}) });
  const get = (p, h) => fetch(base + p, { headers: h || {} });
  const AS = t => ({ Authorization: 'Bearer ' + t });

  // ---- a clinic, a manager, two practitioners ----
  const made = await tenancy.createPilotClinic(db, {
    clinicName: 'Clínica Lunes', managerName: 'Rosa Vidal', managerEmail: 'rosa@lunes.test',
    paymentState: 'paid', password: 'Lunes-por-la-manana-1'
  });
  const mgr = (await (await post('/api/auth/login',
    { email: 'rosa@lunes.test', password: 'Lunes-por-la-manana-1' })).json()).token;

  const pracTokens = [];
  for (const [name, email] of [['Elena Ruiz', 'elena@lunes.test'], ['Sara Mota', 'sara@lunes.test']]) {
    const inv = await (await post('/api/invites', { name, email }, AS(mgr))).json();
    const acc = await (await post('/api/invites/' + inv.invite.token + '/accept',
      { password: 'Mi-clave-de-practica-9' })).json();
    pracTokens.push(acc.token);
  }

  // =========================================================================
  sec('AN EMPTY WEEK REFUSES TO INTERPRET, AND SAYS WHAT WOULD HELP');
  let b = await (await get('/api/manager/monday', AS(mgr))).json();
  ok('The brief exists', b.kind === 'monday_brief', String(b.kind));
  ok('She is greeted by name', /Rosa/.test(String(b.greeting)), String(b.greeting));
  ok('It counts seven days', b.happened.windowDays === 7, String(b.happened.windowDays));
  ok('Nobody practised', b.happened.consultations === 0, String(b.happened.consultations));
  ok('It knows the team size', b.happened.practitionersOnTeam === 2, String(b.happened.practitionersOnTeam));
  ok('It says outright there is not enough evidence', b.enoughEvidence === false);
  ok('It concludes nothing', b.mayMean === null, JSON.stringify(b.mayMean));
  ok('It offers no team exercise it cannot justify', b.thisWeek.exercise === null);
  ok('But it is not empty — it names the one thing worth doing',
     /nothing to coach from|nada de lo que partir/i.test(String(b.thisWeek.headline)), String(b.thisWeek.headline));
  ok('And it names who has not practised, without judging anybody',
     b.happened.notYetThisWeek.length === 2 &&
     !/weak|poor|bad|behind|worst/i.test(JSON.stringify(b.happened.notYetThisWeek)));
  ok('The action is addressed to real people by first name',
     /Elena|Sara/.test(String(b.thisWeek.action)), String(b.thisWeek.action));
  done(String(b.thisWeek.headline));

  // =========================================================================
  sec('ONE CONSULTATION IS STILL NOT A PATTERN');
  /** Walk a case through the real engine, choosing by a predicate. */
  async function walk(token, scenario, choose) {
    const started = await (await post('/api/attempts', { scenarioId: scenario, forceNew: true }, AS(token))).json();
    const id = started.attempt ? started.attempt.id : started.id;
    for (let step = 0; step < 12; step++) {
      const cur = await (await get('/api/attempts/' + id, AS(token))).json();
      const a = cur.attempt || cur;
      if (a.status === 'completed') break;
      // The API answers { attempt, view }, and the phase content is inside view.
      const content = (cur.view && cur.view.content) || {};
      const opts = (content.decision && content.decision.options) || [];
      if (!opts.length) {
        const adv = await post('/api/attempts/' + id + '/advance', {}, AS(token));
        if (!adv.ok) break;
        continue;
      }
      const pick = choose(opts) || opts[0];
      const d = await post('/api/attempts/' + id + '/decision', { optionId: pick.id }, AS(token));
      if (!d.ok) break;
      const adv = await post('/api/attempts/' + id + '/advance', {}, AS(token));
      if (!adv.ok) break;
    }
    return id;
  }

  // The pattern `clinical_before_person` is carried by option ids like
  // prep-clinical / conn-clinical, so choosing them drives a real pattern
  // rather than a hand-written row in the database.
  const CLINICAL = /^(prep-skim|prep-clinical|conn-clinical|disc-clinical)$/;
  await walk(pracTokens[0], 'carmen-injectables', opts => opts.find(o => CLINICAL.test(o.id)));

  b = await (await get('/api/manager/monday', AS(mgr))).json();
  ok('The consultation is counted', b.happened.consultations >= 1, String(b.happened.consultations));
  ok('One practitioner shows as having practised', b.happened.practitionersPractised === 1,
     String(b.happened.practitionersPractised));
  ok('It still refuses to call anything a pattern', b.enoughEvidence === false, String(b.enoughEvidence));
  ok('And says why, rather than going quiet',
     /not yet enough|todavía no es suficiente|nothing to coach/i.test(String(b.thisWeek.headline)),
     String(b.thisWeek.headline));
  done(String(b.thisWeek.headline));

  // =========================================================================
  sec('ENOUGH PRACTICE, AND IT NAMES ONE THING WORTH TEN MINUTES');
  await walk(pracTokens[0], 'sofia-melasma', opts => opts.find(o => CLINICAL.test(o.id)));
  await walk(pracTokens[1], 'carmen-injectables', opts => opts.find(o => CLINICAL.test(o.id)));
  await walk(pracTokens[1], 'sofia-melasma', opts => opts.find(o => CLINICAL.test(o.id)));

  b = await (await get('/api/manager/monday', AS(mgr))).json();
  ok('There is now enough to interpret', b.enoughEvidence === true, String(b.enoughEvidence));
  ok('Both practitioners show as practising', b.happened.practitionersPractised === 2,
     String(b.happened.practitionersPractised));
  ok('Something is named', !!b.mayMean, JSON.stringify(b.mayMean));
  if (b.mayMean) {
    ok('With the evidence that produced it, in counts',
       /\d+ of \d+|\d+ de \d+/.test(String(b.mayMean.evidence)), String(b.mayMean.evidence));
    ok('And it is a described behaviour, not a verdict on anybody',
       !/weak|poor|bad at|underperform|worst|best/i.test(String(b.mayMean.observation)),
       String(b.mayMean.observation));
    done(String(b.mayMean.observation));
  } else { ok('With the evidence that produced it, in counts', false); ok('And it is a described behaviour, not a verdict on anybody', false); }

  sec('AND IT ENDS IN SOMETHING SHE CAN ACTUALLY DO');
  ok('There is a team exercise', !!b.thisWeek.exercise, JSON.stringify(b.thisWeek.exercise));
  if (b.thisWeek.exercise) {
    ok('It fits in ten minutes', b.thisWeek.exercise.minutes <= 10, String(b.thisWeek.exercise.minutes));
    ok('It has steps, not a topic', Array.isArray(b.thisWeek.exercise.steps) && b.thisWeek.exercise.steps.length >= 2,
       String(b.thisWeek.exercise.steps && b.thisWeek.exercise.steps.length));
    ok('Every step is a thing to do in a room',
       b.thisWeek.exercise.steps.every(s => String(s).trim().length > 25));
    ok('The action tells her when to run it',
       /minutes|minutos/.test(String(b.thisWeek.action)), String(b.thisWeek.action));
    done(`${b.thisWeek.exercise.title} · ${b.thisWeek.exercise.minutes} min`);
  } else {
    ['It fits in ten minutes', 'It has steps, not a topic', 'Every step is a thing to do in a room',
     'The action tells her when to run it'].forEach(n => ok(n, false));
  }
  ok('And two cases to send people to afterwards',
     Array.isArray(b.thisWeek.practice) && b.thisWeek.practice.length >= 1,
     JSON.stringify(b.thisWeek.practice));
  ok('Which are real cases', (b.thisWeek.practice || []).every(p => !!scenarios.get(p.scenario)),
     JSON.stringify((b.thisWeek.practice || []).map(p => p.scenario)));
  ok('Named by their own titles, not restated here',
     (b.thisWeek.practice || []).every(p => !!p.title));
  ok('It also points at the Academy\'s own prescription for the same pattern',
     !!b.thisWeek.thenRead, String(b.thisWeek.thenRead).slice(0, 60));

  // =========================================================================
  sec('IT IS NOT A LEADERBOARD');
  // `basis` is the sentence that DENIES scoring — "nobody is scored, and no
  // practitioner is compared with another". Scanning it for the word "score"
  // flags the disclaimer for saying what it exists to say, which is an
  // instrument fault and not a product one, so the scan excludes it and
  // asserts its content separately below.
  const blob = JSON.stringify(Object.assign({}, b, { basis: undefined }));
  {
    const hits = blob.match(/.{0,70}(\brank|\bscore|\bgrade|leaderboard|top perform|best perform).{0,70}/ig) || [];
    ok('No score, rank, grade or percentage of a person', hits.length === 0, hits.slice(0, 2).join(' || '));
  }
  ok('No practitioner is named beside a weakness',
     !/Elena[^"]{0,60}(weak|poor|fail|worst|behind)|Sara[^"]{0,60}(weak|poor|fail|worst|behind)/i.test(blob));
  // Names appear ONLY in "has not practised this week", which is a fact about
  // activity, and in nothing else.
  const namesOutsideActivity = JSON.stringify(Object.assign({}, b, {
    happened: Object.assign({}, b.happened, { notYetThisWeek: [] }),
    thisWeek: Object.assign({}, b.thisWeek, { action: '' })
  }));
  ok('Individuals are not named anywhere except in who has yet to practise',
     !/Elena|Sara/.test(namesOutsideActivity),
     (namesOutsideActivity.match(/.{0,40}(Elena|Sara).{0,40}/) || [])[0]);
  ok('And the basis says so out loud',
     /nobody is scored|nadie recibe puntuación/i.test(String(b.basis)), String(b.basis));

  sec('EVERY PATTERN THE ENGINE CAN FIND HAS AN EXERCISE');
  const patternKeys = coach.PATTERNS.map(p => p.key);
  const missing = patternKeys.filter(k => !monday.EXERCISES[k]);
  ok(`All ${patternKeys.length} coaching patterns have a ten-minute exercise`,
     missing.length === 0, missing.join(', '));
  const badMinutes = Object.entries(monday.EXERCISES).filter(([, e]) => !(e.minutes > 0 && e.minutes <= 10));
  ok('None of them claims to take longer than ten minutes',
     badMinutes.length === 0, badMinutes.map(([k]) => k).join(', '));
  const badCases = Object.entries(monday.EXERCISES)
    .filter(([, e]) => !Array.isArray(e.cases) || !e.cases.length || e.cases.some(c => !scenarios.get(c)));
  ok('And each names real cases to practise afterwards',
     badCases.length === 0, badCases.map(([k]) => k).join(', '));

  sec('IT IS SPANISH IN SPANISH');
  const es = await (await get('/api/manager/monday', Object.assign(AS(mgr), { 'X-Mirror-Lang': 'es' }))).json();
  ok('The greeting is Spanish', /Buenos días/.test(String(es.greeting)), String(es.greeting));
  ok('The exercise is Spanish',
     !!es.thisWeek.exercise && /[áéíóúñ¿«]/.test(JSON.stringify(es.thisWeek.exercise)),
     JSON.stringify(es.thisWeek.exercise && es.thisWeek.exercise.title));
  ok('And it is not the English text',
     JSON.stringify(es.thisWeek.exercise) !== JSON.stringify(b.thisWeek.exercise));
  ok('No English phase name is left inside a Spanish sentence',
     !/\b(Connection|Discovery|Understanding|Recommendation|Preparation)\b/.test(JSON.stringify(es)),
     (JSON.stringify(es).match(/.{0,50}(Connection|Discovery|Understanding)/) || [])[0]);
  done(String(es.thisWeek.action));

  sec('A PRACTITIONER CANNOT READ HER CLINIC\'S BRIEF');
  ok('Managers only', (await get('/api/manager/monday', AS(pracTokens[0]))).status === 403);

  server.close();
  fs.existsSync(dbPath) && fs.unlinkSync(dbPath);
  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
