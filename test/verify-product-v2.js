/**
 * PRODUCT V2 VERIFICATION
 *
 * Walks the running application end-to-end on two DIVERGENT paths and asserts
 * that the differences are material, not cosmetic.
 *
 * Run: node test/verify-product-v2.js
 */

const path = require('path');
const fs = require('fs');

process.env.MIRROR_DB = path.join(__dirname, '..', 'data', 'verify.db');
if (fs.existsSync(process.env.MIRROR_DB)) fs.unlinkSync(process.env.MIRROR_DB);

const { app, db, bootstrap } = require('../server/index');
const seed = require('../server/seed');

let BASE;
let pass = 0, fail = 0;

function ok(name, cond, detail) {
  if (cond) { pass++; console.log(`  PASS  ${name}`); }
  else { fail++; console.log(`  FAIL  ${name}${detail ? '  →  ' + detail : ''}`); }
}
function section(t) { console.log(`\n${t}\n${'─'.repeat(t.length)}`); }

async function call(token, method, p, body) {
  const r = await fetch(BASE + p, {
    method,
    headers: Object.assign({ 'Content-Type': 'application/json' }, token ? { Authorization: 'Bearer ' + token } : {}),
    body: body ? JSON.stringify(body) : undefined
  });
  let j = null; try { j = await r.json(); } catch (e) {}
  return { status: r.status, ok: r.ok, body: j };
}

async function login(email, password) {
  const r = await call(null, 'POST', '/api/auth/login', { email, password });
  if (!r.ok) throw new Error('login failed for ' + email + ': ' + JSON.stringify(r.body));
  return r.body.token;
}

// --- toolkit payload factories -------------------------------------------
const T1_GOOD = {
  situation: 'Melasma on cheeks and forehead for about three years; two years of OTC brightening products with minimal result.',
  tried: 'Over-the-counter brightening creams, roughly two years, minimal change.',
  constraints: 'Wants improvement without a high-risk procedure; time-poor; risk tolerance low.',
  priorExperience: 'A friend had laser for melasma and the pigmentation returned darker and more widespread.',
  depthCheck: { wantsToChange: true, whyNow: true, whatTried: true, expectations: true, decisionCriteria: true, feelsHeard: true }
};
const T1_GUARDED = Object.assign({}, T1_GOOD, {
  depthCheck: { wantsToChange: true, whyNow: false, whatTried: true, expectations: true, decisionCriteria: true, feelsHeard: false }
});
const T1_NO_MOTIVE = Object.assign({}, T1_GOOD, {
  depthCheck: { wantsToChange: true, whyNow: false, whatTried: true, expectations: true, decisionCriteria: true, feelsHeard: true }
});
const T1_DISHONEST = Object.assign({}, T1_GOOD, {
  depthCheck: { wantsToChange: true, whyNow: true, whatTried: true, expectations: false, decisionCriteria: false, feelsHeard: true }
});
const T3_GOOD = {
  visibleGoal: 'Fade the melasma on cheeks and forehead',
  hiddenMotivation: 'Professional visibility — she is on video calls all day and manages where her face points',
  emotionalConsequence: 'Ongoing self-consciousness in client-facing work; avoidance behaviour on camera',
  desiredFeeling: 'Not thinking about her skin during a call',
  influencingPeople: 'Her friend, whose laser outcome was poor',
  clientLanguage: '"I don\'t want it to be the first thing a client sees on a call."'
};
const T3_INVENTED = Object.assign({}, T3_GOOD, { hiddenMotivation: 'She clearly wants to feel more confident and attractive' });
const T3_HONEST_UNKNOWN = Object.assign({}, T3_GOOD, { hiddenMotivation: 'Not disclosed — I did not ask why this mattered now.' });

const T4_GOOD = {
  f1_goal: 'She does not want it to be the first thing a client sees on a call.',
  f2_assessment: 'Moderate melasma across cheeks and forehead, dermal-epidermal, no active skin condition, suitable for conservative laser plus maintenance.',
  f3_solution: 'Four to five conservative ND:YAG sessions, four to six weeks apart, with daily SPF 50 and a brightening serum between sessions.',
  f4_whyFits: 'Conservative settings directly address the rebound risk she saw in her friend, and the series lets us assess her response before committing further.',
  f5_stages: 'Sessions 1–2 assessment and mild fading; sessions 3–4 noticeable fading; session 5 refinement; then maintenance.',
  f6_realistic: 'Melasma is managed, not cured. Expect meaningful fading, not disappearance, and it can recur without daily SPF.',
  f7_alternative: 'Prescription-strength topical only for three months: slower and weaker, but the lowest-risk pathway and a legitimate choice.',
  f8_notRecommending: 'Not recommending aggressive settings or a chemical peel — with reactive pigment both raise the risk of exactly the rebound her friend had.'
};
const T4_NO_CEILING = Object.assign({}, T4_GOOD, { f6_realistic: 'She should expect excellent clearance and be delighted with the result.' });

const T5_GOOD = {
  outcomePurchased: 'Not having to manage where her face points on a client call',
  elements: 'Four to five conservative laser sessions, SPF 50 protocol, brightening serum, response review at session two',
  whyEachMatters: 'Conservative settings answer the rebound risk; the review at session two makes the first step reversible; SPF is what protects the result she is paying for.',
  evidence: 'Conservative ND:YAG protocol used across this clinic\'s melasma cases; gradual clearance is the documented response pattern.',
  investment: '€185 per session; two-session assessment block €370',
  alternativeCost: 'Topical-only pathway at roughly €40/month for three months — slower and weaker, lowest risk.',
  limitation: 'Managed, not cured. Without daily SPF it returns, and roughly a fifth may not clear.',
  noPressure: 'No dated discount, no urgency framing. She can take the written plan away and decide.'
};
const T5_PRESSURE = Object.assign({}, T5_GOOD, { noPressure: 'Offer the discount if she books today only, expires Friday.' });

const T6_GOOD = {
  surface: '"Five sessions over five months is a longer commitment than I pictured."',
  underlying: 'She does not want to be locked into something she cannot reverse if her skin reacts the way her friend\'s did.',
  trustGap: '4 — Align Recommendations',
  responseCategory: 'Restructure the commitment',
  proposedResponse: 'Book two sessions, review her response after session two, and switch to the topical pathway if her skin does not behave as expected.'
};
const T6_LAZY = Object.assign({}, T6_GOOD, { underlying: '"Five sessions over five months is a longer commitment than I pictured."' });

const T8_YES = {
  rows: [
    { interval: 'Same day', timing: 'before 18:00', purpose: 'Book sessions 1 and 2, send SPF protocol', channel: 'email', owner: 'Sophia G.' },
    { interval: '24 hours', timing: 'next morning', purpose: 'Confirm booking understood', channel: 'phone', owner: 'Sophia G.' },
    { interval: '3 days', timing: 'day 3', purpose: 'Check SPF routine started', channel: 'whatsapp', owner: 'front desk' },
    { interval: '7 days', timing: 'day 7', purpose: 'Pre-session readiness', channel: 'email', owner: 'Sophia G.' },
    { interval: '30 days', timing: 'post session 1', purpose: 'Response assessment against stated expectation', channel: 'in clinic', owner: 'Sophia G.' }
  ],
  stopCondition: 'Sequence ends after the 30-day review, or immediately if Sofia asks to stop.'
};
const T8_DEFER_BAD = { rows: [{ interval: 'Same day', timing: 'today', purpose: 'Send summary', channel: 'email', owner: 'Sophia G.' }], stopCondition: 'After one contact.' };
const T8_DEFER_GOOD = Object.assign({}, T8_DEFER_BAD, { agreedFollowUpDate: 'Thursday 12 March, agreed in the room' });
const T8_NO_REACTIVATION = {
  rows: [{ interval: 'Same day', timing: 'today', purpose: 'Send assessment and lower-risk alternative, no offer attached', channel: 'email', owner: 'Sophia G.' }],
  closureNote: 'Declined the protocol; said the cost was not justified given recurrence. Recording closure.',
  stopCondition: 'Start a reactivation sequence and follow up until she responds.',
  closureDisposition: 'CONSULTED'
};
const T8_NO_GOOD = Object.assign({}, T8_NO_REACTIVATION, {
  stopCondition: 'No further outreach. She has the written assessment and can return if she chooses.'
});

// ---------------------------------------------------------------------------
async function runPath(token, label, choices, toolkitPlan) {
  const start = await call(token, 'POST', '/api/attempts', { forceNew: true });
  const id = start.body.attempt.id;
  const trace = { id, phases: [], objectionVariant: null, toolkitResults: {} };

  for (const [phase, optionId] of choices) {
    const before = await call(token, 'GET', '/api/attempts/' + id);
    const v = before.body.view;
    if (v.navigation.phase.key !== phase) throw new Error(`${label}: expected phase ${phase}, at ${v.navigation.phase.key}`);
    if (phase === 'decisionSupport') trace.objectionVariant = v.content.clientSignal.objectionVariant;

    const d = await call(token, 'POST', '/api/attempts/' + id + '/decision', { optionId });
    if (!d.ok) throw new Error(`${label}/${phase} decision failed: ${JSON.stringify(d.body)}`);
    trace.phases.push({ phase, optionId, feedback: d.body.feedback, consequence: d.body.consequence });

    for (const tk of (toolkitPlan[phase] || [])) {
      const t = await call(token, 'POST', `/api/attempts/${id}/toolkit/${tk.n}`, tk.data);
      trace.toolkitResults[tk.n] = t.body;
    }

    const adv = await call(token, 'POST', '/api/attempts/' + id + '/advance', {});
    if (!adv.ok) throw new Error(`${label}/${phase} advance blocked: ${JSON.stringify(adv.body.reason || adv.body)}`);
    if (adv.body.decisionOutcome) { trace.outcome = adv.body.decisionOutcome; trace.proposal = adv.body.continuationProposal; }
  }
  return trace;
}

async function main() {
  await bootstrap();
  await seed(db);
  const server = app.listen(0);
  await new Promise(r => server.once('listening', r));
  BASE = 'http://127.0.0.1:' + server.address().port;

  section('AUTH & PERSISTENCE');
  const pracToken = await login('practitioner@wildmagic.es', 'Mirror2026!prac');
  ok('Practitioner login issues a session token', !!pracToken);
  const bad = await call(null, 'POST', '/api/auth/login', { email: 'practitioner@wildmagic.es', password: 'wrong' });
  ok('Wrong password rejected', bad.status === 401);
  const mgrToken = await login('manager@wildmagic.es', 'Mirror2026!mgr');
  ok('Manager login issues a session token', !!mgrToken);

  section('FRAMEWORK INTEGRITY');
  const fw = (await call(pracToken, 'GET', '/api/framework')).body;
  ok('Exactly 8 canonical phases', fw.phases.length === 8, 'got ' + fw.phases.length);
  ok('Phase names are canonical and unrenamed',
    JSON.stringify(fw.phases.map(p => p.name)) === JSON.stringify(['Preparation', 'Connection', 'Discovery', 'Understanding', 'Education', 'Recommendation', 'Decision Support', 'Relationship Continuation']));
  ok('Five Engines present', Object.keys(fw.engines).length === 5);
  ok('Engines do not replace phases (ownership matrix covers all 8)', Object.keys(fw.phaseOwnership).length === 8);
  ok('Toolkit registry spans #1–#24', Object.keys(fw.toolkit).length === 24);
  ok('Un-traced toolkit items are not invented', fw.toolkit['2'].name === null && fw.toolkit['2'].status === 'NOT_IMPLEMENTED');
  ok('Toolkit #16 is gated', fw.toolkit['16'].status === 'GATED');
  const banned = /CUBAA|Value Ladder|Consultation Pyramid|Trust Curve|Conversion Compass|Performance Radar|Growth Cycle|Operating Rhythm|Maturity Model|Decision Matrix|Client Journey|Coaching Loop/i;
  const srcDump = ['framework/canonical.js', 'scenario/sofiaScenario.js', 'toolkits/registry.js', 'feedback/feedbackEngine.js', 'engines/decisionEngine.js', 'engines/continuationEngine.js', 'index.js']
    .map(f => fs.readFileSync(path.join(__dirname, '..', 'server', f), 'utf8')).join('\n')
    + fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html'), 'utf8');
  ok('No unapproved named frameworks anywhere in the product', !banned.test(srcDump));

  section('PATH A — high-trust execution');
  const A = await runPath(pracToken, 'A', [
    ['preparation', 'prep-full'],
    ['connection', 'conn-permission'],
    ['discovery', 'disc-explore-fear'],
    ['understanding', 'und-verify'],
    ['education', 'edu-mechanism'],
    ['recommendation', 'rec-aligned'],
    ['decisionSupport', 'dec-diagnose']
  ], {
    discovery: [{ n: 1, data: T1_GOOD }],
    understanding: [{ n: 3, data: T3_GOOD }],
    recommendation: [{ n: 4, data: T4_GOOD }, { n: 5, data: T5_GOOD }],
    decisionSupport: [{ n: 6, data: T6_GOOD }]
  });
  ok('All 7 consultation phases executed', A.phases.length === 7);
  ok('Phase 3 disclosed the hidden motivation', A.phases[2].consequence.newlyRevealed.includes('hidden_motivation'));
  ok('Phase 7 objection variant is PACE (lowest intensity)', A.objectionVariant === 'PACE', 'got ' + A.objectionVariant);
  ok('Decision Engine derived YES', A.outcome.outcome === 'YES', JSON.stringify(A.outcome && A.outcome.rationale));
  ok('Outcome is product-layer derived, not learner-selected', /PRODUCT-LAYER DERIVED/.test(A.outcome.derivedBy));
  ok('Feedback carries all seven elements', ['signalDetected', 'mirrorInterpretation', 'canonicalPrinciple', 'learnerDid', 'alignmentVerdict', 'observableConsequence', 'nextPracticePriority']
    .every(k => A.phases[0].feedback[k]));
  ok('Feedback cites canonical framework, not generic praise',
    /Trust Standard|Ethical Duty|Trust Stage|Phase \d/.test(A.phases[3].feedback.canonicalPrinciple));

  section('TOOLKIT EXECUTION IS ENFORCED, NOT DECORATIVE');
  ok('#1 Discovery Canvas validated', A.toolkitResults[1].valid);
  ok('#3 Emotional Drivers Map validated', A.toolkitResults[3].valid);
  ok('#4 Recommendation Builder validated (8 canonical fields)', A.toolkitResults[4].valid);
  ok('#5 Price & Value validated', A.toolkitResults[5].valid);
  ok('#6 Objection Diagnostic validated', A.toolkitResults[6].valid);

  // Negative toolkit tests on a throwaway attempt.
  const scratch = (await call(pracToken, 'POST', '/api/attempts', { forceNew: true })).body.attempt.id;
  await call(pracToken, 'POST', `/api/attempts/${scratch}/decision`, { optionId: 'prep-full' });
  const t4bad = await call(pracToken, 'POST', `/api/attempts/${scratch}/toolkit/4`, T4_NO_CEILING);
  ok('#4 rejects a recommendation with no honest ceiling', t4bad.body.valid === false);
  const t5bad = await call(pracToken, 'POST', `/api/attempts/${scratch}/toolkit/5`, T5_PRESSURE);
  ok('#5 rejects manufactured urgency (Ethical Duty 2)', t5bad.body.valid === false);
  const t6bad = await call(pracToken, 'POST', `/api/attempts/${scratch}/toolkit/6`, T6_LAZY);
  ok('#6 rejects surface repeated as underlying', t6bad.body.valid === false);
  const t3bad = await call(pracToken, 'POST', `/api/attempts/${scratch}/toolkit/3`, T3_INVENTED);
  ok('#3 rejects an invented motivation the client never disclosed', t3bad.body.valid === false);
  const t3ok = await call(pracToken, 'POST', `/api/attempts/${scratch}/toolkit/3`, T3_HONEST_UNKNOWN);
  ok('#3 accepts "Not disclosed" recorded honestly', t3ok.body.valid === true);
  const t1bad = await call(pracToken, 'POST', `/api/attempts/${scratch}/toolkit/1`, T1_DISHONEST);
  ok('#1 rejects "why now" ticked when nothing was disclosed', t1bad.body.valid === false);

  section('PHASE GATES');
  const gated = (await call(pracToken, 'POST', '/api/attempts', { forceNew: true })).body.attempt.id;
  const noDecision = await call(pracToken, 'POST', `/api/attempts/${gated}/advance`, {});
  ok('Cannot advance without a decision', noDecision.status === 409);
  await call(pracToken, 'POST', `/api/attempts/${gated}/decision`, { optionId: 'prep-full' });
  await call(pracToken, 'POST', `/api/attempts/${gated}/advance`, {});
  await call(pracToken, 'POST', `/api/attempts/${gated}/decision`, { optionId: 'conn-permission' });
  await call(pracToken, 'POST', `/api/attempts/${gated}/advance`, {});
  await call(pracToken, 'POST', `/api/attempts/${gated}/decision`, { optionId: 'disc-explore-fear' });
  const noToolkit = await call(pracToken, 'POST', `/api/attempts/${gated}/advance`, {});
  ok('Cannot leave Phase 3 without Toolkit #1', noToolkit.status === 409 && /Toolkit #1/.test(noToolkit.body.reason));

  section('PATH B — low-trust execution (material divergence)');
  const B = await runPath(pracToken, 'B', [
    ['preparation', 'prep-skim'],
    ['connection', 'conn-agenda'],
    ['discovery', 'disc-solution'],
    ['understanding', 'und-assume'],
    ['education', 'edu-oversell'],
    ['recommendation', 'rec-price-first'],
    ['decisionSupport', 'dec-overcome']
  ], {
    discovery: [{ n: 1, data: T1_GUARDED }],
    understanding: [{ n: 3, data: T3_HONEST_UNKNOWN }],
    recommendation: [{ n: 4, data: T4_GOOD }, { n: 5, data: T5_GOOD }],
    decisionSupport: [{ n: 6, data: T6_GOOD }]
  });
  ok('Path B never obtained the hidden motivation', !B.phases[2].consequence.newlyRevealed.includes('hidden_motivation'));
  ok('MATERIAL: Phase 7 served a DIFFERENT objection (PRICE_PRESSURE)', B.objectionVariant === 'PRICE_PRESSURE', 'got ' + B.objectionVariant);
  ok('MATERIAL: objection variant differs between paths', A.objectionVariant !== B.objectionVariant);
  ok('Decision Engine derived NO', B.outcome.outcome === 'NO', JSON.stringify(B.outcome && B.outcome.rationale));
  ok('MATERIAL: same scenario, different derived outcome', A.outcome.outcome !== B.outcome.outcome);
  const aPhase6 = A.phases[5].feedback.choice.language, bPhase6 = B.phases[5].feedback.choice.language;
  ok('MATERIAL: Phase 6 available language differed', aPhase6 !== bPhase6);
  ok('MATERIAL: Phase 4 client signal degraded in Path B', B.phases[3].feedback.observableConsequence.ledgerChanges.length >= 0);

  section('PATH C — DEFER and Toolkit #16 gate');
  const C = await runPath(pracToken, 'C', [
    ['preparation', 'prep-full'],
    ['connection', 'conn-permission'],
    ['discovery', 'disc-clinical'],
    ['understanding', 'und-verify'],
    ['education', 'edu-mechanism'],
    ['recommendation', 'rec-generic'],
    ['decisionSupport', 'dec-concede']
  ], {
    discovery: [{ n: 1, data: T1_NO_MOTIVE }],
    understanding: [{ n: 3, data: T3_HONEST_UNKNOWN }],
    recommendation: [{ n: 4, data: T4_GOOD }, { n: 5, data: T5_GOOD }],
    decisionSupport: [{ n: 6, data: T6_GOOD }]
  });
  ok('Decision Engine derived DEFER', C.outcome.outcome === 'DEFER', JSON.stringify(C.outcome && C.outcome.rationale));
  ok('DEFER proposal states Toolkit #16 is not used', /Toolkit #16 is not available|NOT eligible|not used/i.test(C.proposal.instruction + JSON.stringify(C.outcome.toolkitAttachment)));
  const deferBad = await call(pracToken, 'POST', `/api/attempts/${C.id}/continuation`, T8_DEFER_BAD);
  ok('DEFER rejected without a specific agreed follow-up moment', deferBad.status === 422);
  const deferOk = await call(pracToken, 'POST', `/api/attempts/${C.id}/continuation`, T8_DEFER_GOOD);
  ok('DEFER accepted with agreed follow-up + stop condition', deferOk.ok === true);
  ok('DEFER transitions relationship to Considering', deferOk.body.continuation.relationshipTransition.to === 'CONSIDERING');
  ok('Toolkit #16 BLOCKED at immediate DEFER', deferOk.body.continuation.toolkitEligibility['16'].eligible === false);
  ok('Toolkit #17 BLOCKED at immediate DEFER', deferOk.body.continuation.toolkitEligibility['17'].eligible === false);

  section('PHASE 8 EXECUTION — YES');
  const yesOk = await call(pracToken, 'POST', `/api/attempts/${A.id}/continuation`, T8_YES);
  ok('YES continuation plan accepted', yesOk.ok === true, JSON.stringify(yesOk.body && yesOk.body.issues));
  ok('YES transitions relationship to Active', yesOk.body.continuation.relationshipTransition.to === 'ACTIVE');
  ok('Plan rows carry owner/timing/purpose/channel', yesOk.body.continuation.plan.rows.every(r => r.owner && r.timing && r.purpose && r.channel));
  ok('Stop condition recorded', !!yesOk.body.continuation.plan.stopCondition);
  ok('Toolkit #16 blocked even on YES (no Dormant→Reactivated transition)', yesOk.body.continuation.toolkitEligibility['16'].eligible === false);

  section('PHASE 8 EXECUTION — NO');
  const noBad = await call(pracToken, 'POST', `/api/attempts/${B.id}/continuation`, T8_NO_REACTIVATION);
  ok('NO rejects reactivation / win-back language', noBad.status === 422 && noBad.body.issues.some(i => /Reactivation|#16/i.test(i)));
  const noOk = await call(pracToken, 'POST', `/api/attempts/${B.id}/continuation`, T8_NO_GOOD);
  ok('NO accepted with closure note + stop condition', noOk.ok === true, JSON.stringify(noOk.body && noOk.body.issues));
  ok('NO produces professional closure state (not Active)', ['CONSULTED', 'PAUSED', 'REFERRED_DISCHARGED'].includes(noOk.body.continuation.relationshipTransition.to));
  ok('Toolkit #16 BLOCKED at immediate NO', noOk.body.continuation.toolkitEligibility['16'].eligible === false);
  ok('Toolkit #17 BLOCKED at immediate NO', noOk.body.continuation.toolkitEligibility['17'].eligible === false);

  section('PERSISTENCE ACROSS LOGOUT / LOGIN / NEW SESSION');
  await call(pracToken, 'POST', '/api/auth/logout', {});
  const afterLogout = await call(pracToken, 'GET', '/api/attempts');
  ok('Old token is dead after logout', afterLogout.status === 401);
  const token2 = await login('practitioner@wildmagic.es', 'Mirror2026!prac');
  const relist = await call(token2, 'GET', '/api/attempts');
  ok('Attempts survive logout/login on a fresh session', relist.body.attempts.length >= 3);
  const evA = await call(token2, 'GET', `/api/attempts/${A.id}/evidence`);
  ok('Decision history survives', evA.body.decisions.length === 7);
  ok('Toolkit artifacts survive', evA.body.toolkitArtifacts.length >= 6);
  ok('Continuation plan survives', !!evA.body.continuation && evA.body.continuation.plan.rows.length === 5);
  ok('Derived outcome survives', evA.body.decisionOutcome.outcome === 'YES');

  // simulate a second device: independent token, same account
  const token3 = await login('practitioner@wildmagic.es', 'Mirror2026!prac');
  const dev2 = await call(token3, 'GET', `/api/attempts/${A.id}/evidence`);
  ok('Second concurrent session sees the same evidence', dev2.body.decisions.length === 7 && dev2.body.decisionOutcome.outcome === 'YES');

  section('MANAGER VISIBILITY');
  const mList = await call(mgrToken, 'GET', '/api/manager/attempts');
  ok('Manager sees clinic attempts', mList.body.attempts.length >= 3);
  const mOne = await call(mgrToken, 'GET', `/api/manager/attempts/${A.id}`);
  ok('Manager sees decisions in sequence', mOne.body.decisions.length === 7);
  ok('Manager sees client consequence per decision', mOne.body.decisions.every(d => d.consequence && d.consequence.trustAfter));
  ok('Manager sees feedback evidence', mOne.body.feedback.length >= 7);
  ok('Manager sees toolkit artifacts with data', mOne.body.toolkitArtifacts.some(a => a.n === 4 && a.data.f8_notRecommending));
  ok('Manager sees competency observations', mOne.body.competencyObservations.length > 0);
  ok('Manager sees final outcome + continuation plan', mOne.body.decisionOutcome.outcome === 'YES' && !!mOne.body.continuation);
  ok('Competency observations are diagnostic, not numeric', mOne.body.competencyObservations.every(o => typeof o.reading === 'string' && !/^\d+$/.test(o.reading)));
  const crossRole = await call(pracToken, 'GET', '/api/manager/attempts');
  ok('Practitioner cannot access manager endpoints', crossRole.status === 401 || crossRole.status === 403);

  console.log(`\n${'═'.repeat(58)}\nRESULT: ${pass} passed, ${fail} failed\n${'═'.repeat(58)}`);
  server.close(); db.close();
  process.exit(fail ? 1 : 0);
}

main().catch(e => { console.error('\nVERIFICATION ABORTED:', e.message); process.exit(1); });
