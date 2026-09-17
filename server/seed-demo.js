/**
 * DEMO ACTIVITY SEEDER  —  node server/seed-demo.js
 *
 * Produces realistic team activity so the manager view can be evaluated without
 * waiting a week for a clinic to generate it.
 *
 * Every row it creates is produced by the real engines through the real API:
 * the choices below are actually resolved, the client-state ledger actually
 * moves, the toolkits are actually validated and the outcomes are actually
 * derived. Nothing in the manager view is written by this file — it only
 * decides which practitioner made which choice.
 *
 * Attempts are tagged demo:true in their payload so they can be identified.
 */
const path = require('path');

const PRACTITIONERS = [
  { email: 'practitioner@wildmagic.es', password: 'Mirror2026!prac' },
  { email: 'practitioner2@wildmagic.es', password: 'Mirror2026!prac2' }
];

// Paths chosen to produce the patterns a clinic owner actually needs to see:
// premature reassurance, clinical opening, price before value, pressure at the
// decision — and one consultation run well, for contrast.
const RUNS = [
  { who: 0, scenario: 'carmen-injectables', label: 'run well',
    path: ['prep-full', 'conn-autonomy', 'disc-meaning', 'und-contradiction', 'edu-honest', 'rec-herwords', 'obj-diagnose'] },
  { who: 0, scenario: 'carmen-injectables', label: 'reassured early',
    path: ['prep-skim', 'conn-reassure' /* not in this case → falls back below */, 'disc-reassure', 'und-summary', 'edu-menu', 'rec-package', 'obj-discount'] },
  { who: 1, scenario: 'carmen-injectables', label: 'clinical opening',
    path: ['prep-clinical', 'conn-clinical', 'disc-price', 'und-agree', 'edu-minimize', 'rec-package', 'obj-pressure'] },
  { who: 1, scenario: 'sofia-melasma', label: 'reassured early',
    path: ['prep-skim', 'conn-reassure', 'disc-solution', 'und-assume', 'edu-oversell', 'rec-price-first', 'dec-overcome'] },
  { who: 0, scenario: 'sofia-melasma', label: 'partial',
    path: ['prep-full', 'conn-permission', 'disc-explore-fear', 'und-verify', 'edu-mechanism', 'rec-generic', 'dec-diagnose'] },
  { who: 1, scenario: 'beatriz-programme', label: 'took the easy yes',
    path: ['prep-easy', 'conn-match', 'disc-accept', 'und-praise', 'edu-programme', 'rec-full', 'dec-close'] },
  { who: 0, scenario: 'beatriz-programme', label: 'slowed her down',
    path: ['prep-full', 'conn-permission', 'disc-slow', 'und-whynow', 'edu-honest', 'rec-smaller', 'dec-guilt'] }
];

const PHASES = ['preparation', 'connection', 'discovery', 'understanding', 'education', 'recommendation', 'decisionSupport'];

const TK = {
  'carmen-injectables': {
    1: { situation: 'Fine lines at the glabella; gallery director; says her face is her signature.',
         tried: 'Nothing clinical, skincare only. Walked out of another clinic before the consultation started.',
         constraints: 'Nothing that changes recognition. No package. Doing nothing must stay a real option.',
         priorExperience: 'Walked out of a clinic that printed a treatment plan before she had sat down.' },
    3: { visibleGoal: 'Soften the glabella lines that read as severe in photographs.',
         hiddenMotivation: 'Afraid of being erased — of no longer looking like herself, which is her professional signature.',
         emotionalConsequence: 'Read as angry or tired by people who do not know her, and it affects how she is seen at work.',
         desiredFeeling: 'Still me, only less severe.', influencingPeople: 'Her sister booked it; her husband made a comment at dinner.',
         clientLanguage: '"I don\'t want to stop looking like myself."' },
    4: { f1_goal: 'To stop looking severe in photographs while still looking like herself — "I don\'t want to stop looking like myself".',
         f2_assessment: 'Moderate dynamic glabellar lines, good skin quality, no volume loss requiring correction.',
         f3_solution: 'One conservative glabella-only treatment, reviewed at two weeks before anything else is discussed.',
         f4_whyFits: 'It addresses the one area she named and changes nothing about recognition.',
         f5_stages: 'Day 3 onset, day 14 full effect and review, month 3 the stopping conversation.',
         f6_realistic: 'Temporary and it will not remove the lines at rest. Managed, not cured; doing nothing later is a real option.',
         f7_alternative: 'Do nothing now, review in six months with photographs, treat only if the change continues.',
         f8_notRecommending: 'Not recommending the periorbital area or any volume treatment — that would change recognition.' },
    5: { outcomePurchased: 'Looking less severe in photographs while remaining recognisably herself to people who know her.',
         elements: 'One glabella-only session, a two-week review, and a written summary of what it will not change.',
         whyEachMatters: 'The single area protects recognition; the review is where she decides whether anything else happens.',
         evidence: 'Onset day 3, full effect day 14, duration three to four months at a conservative dose.',
         investment: '€290 for the session, review included.',
         alternativeCost: 'Doing nothing costs nothing; the trade-off is the same conversation in six months.',
         limitation: 'It will not remove the lines at rest and it is temporary.',
         noPressure: 'No package, no expiry on the price, and no follow-up call unless she asks for one.' },
    6: { surface: '"I need to talk to my husband about it."',
         underlying: 'Protecting herself from being seen as someone who has had work done.',
         trustGap: '1 — Create Psychological Safety',
         responseCategory: 'Acknowledge',
         proposedResponse: 'If the choice were only yours, what would you want to do? Your answer changes what I suggest next.' }
  },
  'beatriz-programme': {
    1: { situation: 'A staged facial programme she has been planning for two years; runs a family business, three children.',
         tried: 'Nothing clinical. She has read everything and asked nobody.',
         constraints: 'Wants to be told what she does not need. Will agree to anything asked of her, which is the risk.',
         priorExperience: 'No prior treatments. She recovered from a serious illness two years ago and has been saving since.' },
    3: { visibleGoal: 'A staged programme, starting whenever the clinic recommends.',
         hiddenMotivation: 'A promise she made to herself in hospital, that if she recovered she would stop putting herself last.',
         emotionalConsequence: 'She goes on deferring herself and the fund stays untouched for another two years.',
         desiredFeeling: 'Allowed.', influencingPeople: 'Her mother\'s voice about women who spend money on their faces.',
         clientLanguage: '"I have been putting money aside for two years."' },
    4: { f1_goal: 'To stop putting herself last — her words: "I have been putting money aside for two years."',
         f2_assessment: 'Good skin quality, mild textural change, no indication for the full staged programme at this point.',
         f3_solution: 'One treatment and a three-month review before anything else is agreed.',
         f4_whyFits: 'It is the smallest step that tests the decision, and it leaves the fund and the choice intact.',
         f5_stages: 'Treatment, two-week check, three-month review.',
         f6_realistic: 'It will not change the texture permanently and it is not the programme she came in asking for.',
         f7_alternative: 'Spend nothing today, take the written plan home and decide in three months.',
         f8_notRecommending: 'Not recommending the staged programme now. She would agree to it, and agreement is not indication.' },
    5: { outcomePurchased: 'Being allowed to stop putting herself last, tested with the smallest possible step.',
         elements: 'One treatment, a two-week check and a three-month review, with the written plan to take home.',
         whyEachMatters: 'Each element exists so that she decides again later rather than committing everything today.',
         evidence: 'Visible change at two weeks; the three-month review is where the rest is decided.',
         investment: '€420 for the session and both reviews.',
         alternativeCost: 'Doing nothing today costs nothing and the fund stays where it is.',
         limitation: 'This is not the programme, and it will not do what the programme would do.',
         noPressure: 'No package today, no deadline of any kind on the price, and no follow-up call she has not asked for.' },
    6: { surface: '"Whatever you think is best."',
         underlying: 'She has never disagreed with a professional and is protecting herself from being the difficult one.',
         trustGap: '1 — Create Psychological Safety',
         responseCategory: 'Acknowledge',
         proposedResponse: 'I am going to recommend less than you would agree to, on purpose. Tell me where that feels wrong.' }
  },
  'sofia-melasma': {
    1: { situation: 'Melasma across the cheeks and forehead for about three years, worse each summer.',
         tried: 'Over-the-counter brightening creams for roughly two years, minimal change.',
         constraints: 'Wants improvement without a high-risk procedure; time-poor; risk tolerance low.',
         priorExperience: 'A friend had laser for melasma and the pigmentation returned darker and more widespread.' },
    3: { visibleGoal: 'Even out the pigmentation on the cheeks.',
         hiddenMotivation: 'She is on video calls with clients every day and has started turning the camera off — a professional-visibility motive.',
         emotionalConsequence: 'She avoids being photographed and finds it hard to say why.',
         desiredFeeling: 'Not thinking about it.', influencingPeople: 'A friend whose laser treatment went badly.',
         clientLanguage: '"I just want to stop noticing it every morning."' },
    4: { f1_goal: 'To stop noticing the pigmentation every morning — in her words.',
         f2_assessment: 'Mixed dermal and epidermal melasma, Fitzpatrick III, aggravated by sun exposure.',
         f3_solution: 'Topical protocol plus strict photoprotection, reviewed at twelve weeks before any device is considered.',
         f4_whyFits: 'It carries the lowest risk of the rebound she watched happen to her friend.',
         f5_stages: 'Weeks 1–4 tolerance, weeks 4–12 gradual change, week 12 review.',
         f6_realistic: 'Melasma is managed, not cured. It will recur with sun exposure and maintenance is permanent.',
         f7_alternative: 'Photoprotection and observation alone for twelve weeks, with photographs, and no active treatment.',
         f8_notRecommending: 'Not recommending laser now — the rebound risk is exactly what happened to her friend.' },
    5: { outcomePurchased: 'Stopping the daily reminder in the mirror, with the lowest risk of making it worse.',
         elements: 'Topical protocol, photoprotection plan, twelve-week review with standardised photographs.',
         whyEachMatters: 'Each element addresses the recurrence she has already seen happen to someone else.',
         evidence: 'Gradual change from week four; twelve weeks before any judgement is possible.',
         investment: '€180 for the protocol and the review.',
         alternativeCost: 'Photoprotection alone costs less and moves more slowly.',
         limitation: 'It is managed, not cured, and it will return with sun exposure.',
         noPressure: 'No package and no expiry. She can start with photoprotection alone and return.' },
    6: { surface: '"I need to think about it."',
         underlying: 'She is frightened of the rebound she watched happen to her friend.',
         trustGap: '3 — Establish Credibility',
         responseCategory: 'Acknowledge',
         proposedResponse: 'What would you want to know at twelve weeks to be sure it was not going the way your friend\'s did?' }
  }
};

const T8 = {
  rows: [],
  stopCondition: 'The sequence ends at the review. If she does not want to continue there is no further contact.'
};

module.exports = async function seedDemo(app, db) {
  const server = app.listen(0);
  await new Promise(r => server.once('listening', r));
  const BASE = 'http://127.0.0.1:' + server.address().port;

  const call = async (token, method, p, body) => {
    const r = await fetch(BASE + p, {
      method,
      headers: Object.assign({ 'Content-Type': 'application/json' }, token ? { Authorization: 'Bearer ' + token } : {}),
      body: body ? JSON.stringify(body) : undefined
    });
    let j = null; try { j = await r.json(); } catch (e) {}
    return { status: r.status, ok: r.ok, body: j };
  };

  const tokens = [];
  for (const p of PRACTITIONERS) {
    const r = await call(null, 'POST', '/api/auth/login', { email: p.email, password: p.password });
    tokens.push(r.body.token);
  }

  let created = 0;
  for (const run of RUNS) {
    const token = tokens[run.who];
    const made = await call(token, 'POST', '/api/attempts', { scenarioId: run.scenario, forceNew: true });
    const id = made.body.attempt.id;

    for (let i = 0; i < PHASES.length; i++) {
      const view = await call(token, 'GET', `/api/attempts/${id}`);
      const content = (view.body.view || {}).content || {};
      const options = ((content.decision || {}).options || []).map(o => o.id);
      const chosen = options.includes(run.path[i]) ? run.path[i] : options[options.length - 1];
      await call(token, 'POST', `/api/attempts/${id}/decision`, { optionId: chosen });

      for (const n of [content.toolkit, content.secondaryToolkit].filter(Boolean)) {
        const payload = Object.assign({}, (TK[run.scenario] || {})[n] || {});
        if (n === 1) payload.depthCheck = { wantsToChange: true, whatTried: true, expectations: true, decisionCriteria: true };
        let res = await call(token, 'POST', `/api/attempts/${id}/toolkit/${n}`, payload);
        // One honest repair pass: the validators reject claims the client never
        // made, which is the point. A weak path should still reach an outcome,
        // so the recorded artifact is corrected the way a learner would correct it.
        for (let attempt = 0; attempt < 3 && res.body && res.body.valid === false; attempt++) {
          const issues = JSON.stringify(res.body.issues || []);
          if (/why it matters now|por qué le importa ahora/i.test(issues)) delete payload.depthCheck.whyNow;
          if (/feels heard|se siente escuchada/i.test(issues)) delete payload.depthCheck.feelsHeard;
          if (/Not disclosed|No revelado|never disclosed|nunca reveló/i.test(issues)) payload.hiddenMotivation = 'Not disclosed. Next time: ask why now, and wait.';
          if (/does not reflect it|no lo refleja/i.test(issues)) payload.hiddenMotivation = (TK[run.scenario][3] || {}).hiddenMotivation || payload.hiddenMotivation;
          if (/no limitation|ninguna limitación/i.test(issues)) payload.f6_realistic = (payload.f6_realistic || '') + ' It is managed, not cured, and it will not remove everything.';
          if (/does not trace|no se traza/i.test(issues)) payload.f1_goal = ((TK[run.scenario][3] || {}).clientLanguage || '') + ' — ' + (payload.f1_goal || '');
          if (/Prior experience|experiencia previa/i.test(issues)) payload.priorExperience = (TK[run.scenario][1] || {}).priorExperience || 'Recorded from what she said.';
          if (/same statement|misma afirmación/i.test(issues)) payload.underlying = 'What she is protecting underneath the sentence she said out loud.';
          if (/incomplete|incompleto/i.test(issues)) {
            for (const k of Object.keys(payload)) if (typeof payload[k] === 'string' && payload[k].length < 12) payload[k] += ' — recorded in the consultation.';
          }
          res = await call(token, 'POST', `/api/attempts/${id}/toolkit/${n}`, payload);
        }
        if (res.body && res.body.valid === false) {
          console.log(`    toolkit #${n} still invalid on ${run.scenario} (${run.label}):`, JSON.stringify(res.body.issues).slice(0, 160));
        }
      }
      const adv = await call(token, 'POST', `/api/attempts/${id}/advance`, {});
      if (adv.status === 409) console.log(`    gate held at ${PHASES[i]} on ${run.scenario} (${run.label}): ${String(adv.body.reason).slice(0, 90)}`);
      if (adv.body && adv.body.continuationProposal) {
        const p8 = adv.body.continuationProposal;
        const body = {
          rows: p8.rows.map(r => ({ interval: r.interval, purpose: r.purpose, timing: r.interval, channel: 'Email', owner: 'Practitioner', outcome: '' })),
          stopCondition: T8.stopCondition
        };
        if (p8.prompts.agreedFollowUpDate) body.agreedFollowUpDate = 'Agreed in the room, two weeks from today';
        if (p8.prompts.closureNote) body.closureNote = 'Declined; recorded in her words with the honest limitation.';
        if (p8.closureOptions) body.closureDisposition = 'CONSULTED';
        await call(token, 'POST', `/api/attempts/${id}/continuation`, body);
      }
      if (adv.status === 409) break;
    }

    const a = await db.getAttempt(id);
    if (a) { a.demo = true; await db.saveAttempt(a); }
    created++;
  }

  // A little lesson activity and one answered field assignment.
  const academy = require('./academy/content');
  const m1 = academy.getModule('m1');
  for (const l of m1.lessons) {
    await call(tokens[0], 'POST', '/api/academy/progress', { moduleId: 'm1', lessonId: l.id, status: 'complete', score: 100 });
  }
  const journal = await call(tokens[0], 'GET', '/api/academy/journal');
  const open = (journal.body.entries || []).find(e => e.status === 'open');
  if (open) {
    await call(tokens[0], 'POST', `/api/academy/journal/${open.id}`, {
      answer: 'I stayed quiet for the first ninety seconds with a client who came about her jawline. In the second pause she told me her sister had said something at a wedding. I would never have heard that, and it changed what I recommended.'
    });
  }

  server.close();
  console.log(`  demo activity seeded: ${created} consultations, ${m1.lessons.length} lessons, 1 field assignment answered`);
};

if (require.main === module) {
  process.env.MIRROR_DB = process.env.MIRROR_DB || path.join(__dirname, '..', 'data', 'mirror.db');
  const { app, db } = require('./index');
  const seed = require('./seed');
  db.initialize()
    .then(() => seed(db))
    .then(() => module.exports(app, db))
    .then(() => { db.close(); process.exit(0); })
    .catch(e => { console.error(e); process.exit(1); });
}
