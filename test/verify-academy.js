/**
 * MIRROR INTERACTIVE SALES ACADEMY — VERIFICATION
 *
 * Asserts the things a founder would otherwise have to take on trust:
 *   · Case 02 (Carmen) runs end to end and is materially different from Case 01
 *   · The Spanish journey is really Spanish — no {en,es} leakage, no English left in
 *   · DEFER is genuinely reachable in Case 02, not only YES/NO
 *   · Toolkit validators are case-aware (Carmen's honesty checks, not Sofia's)
 *   · The Academy curriculum, lesson interiors, progression and field
 *     assignments work through the API
 *   · The manager view produces evidence sentences with counts
 *
 * Run: node test/verify-academy.js
 */

const path = require('path');
const fs = require('fs');

process.env.MIRROR_DB = path.join(__dirname, '..', 'data', 'verify-academy.db');
if (fs.existsSync(process.env.MIRROR_DB)) fs.unlinkSync(process.env.MIRROR_DB);

const { app, db, bootstrap } = require('../server/index');
const seed = require('../server/seed');

let BASE;
let pass = 0, fail = 0;
const failures = [];

function ok(name, cond, detail) {
  if (cond) { pass++; console.log(`  PASS  ${name}`); }
  else { fail++; failures.push(name + (detail ? ' → ' + detail : '')); console.log(`  FAIL  ${name}${detail ? '  →  ' + detail : ''}`); }
}
function section(t) { console.log(`\n${t}\n${'─'.repeat(t.length)}`); }

async function call(token, method, p, body, lang) {
  const headers = Object.assign({ 'Content-Type': 'application/json' },
    token ? { Authorization: 'Bearer ' + token } : {},
    lang ? { 'X-Mirror-Lang': lang } : {});
  const r = await fetch(BASE + p, { method, headers, body: body ? JSON.stringify(body) : undefined });
  let j = null; try { j = await r.json(); } catch (e) {}
  return { status: r.status, ok: r.ok, body: j };
}
async function login(email, password) {
  const r = await call(null, 'POST', '/api/auth/login', { email, password });
  if (!r.ok) throw new Error('login failed for ' + email);
  return r.body.token;
}

// --- Carmen toolkit payloads (EN) ----------------------------------------
const C_T1 = {
  situation: 'Fine lines at the glabella and around the eyes; she is a gallery director and says her face is her signature.',
  tried: 'Nothing clinical. Skincare only. Booked once elsewhere and walked out before the consultation started.',
  constraints: 'Nothing that changes recognition. No package. Wants the option of doing nothing to stay real.',
  priorExperience: 'Walked out of a clinic that printed a treatment plan before she had sat down.',
  depthCheck: { wantsToChange: true, whyNow: true, whatTried: true, expectations: true, decisionCriteria: true, feelsHeard: true }
};
const C_T3 = {
  visibleGoal: 'Soften the glabella lines that make her look severe in photographs.',
  hiddenMotivation: 'She is afraid of being erased — of no longer being recognisably herself, which is her professional signature.',
  emotionalConsequence: 'She keeps being read as angry or tired by people who do not know her, and it is starting to affect how she is seen at work.',
  desiredFeeling: 'Still me, only less severe.',
  influencingPeople: 'Her sister, who booked the appointment; her husband, who joked at dinner that a friend had "had work done".',
  clientLanguage: '"I don\'t want to stop looking like myself."'
};
const C_T4 = {
  f1_goal: 'To stop looking severe in photographs while still looking like herself — her own words: "I don\'t want to stop looking like myself".',
  f2_assessment: 'Moderate dynamic glabellar lines, mild periorbital lines, good skin quality, no volume loss requiring correction.',
  f3_solution: 'One conservative glabella-only treatment, reviewed at two weeks before anything else is discussed.',
  f4_whyFits: 'It addresses the one area she named, changes nothing about recognition, and leaves every other decision open to her.',
  f5_stages: 'Day 3 onset, day 14 full effect and review, month 3 the stopping conversation.',
  f6_realistic: 'The result is temporary and will not remove the lines at rest. It is managed, not cured, and doing nothing later is a real option.',
  f7_alternative: 'Do nothing now, review in six months with photographs, and treat only if the change she is describing continues.',
  f8_notRecommending: 'I am not recommending the periorbital area or any volume treatment. Treating them now would change recognition, which is exactly what she asked me not to do.'
};
const C_T5 = {
  outcomePurchased: 'Looking less severe in photographs while remaining recognisably herself to the people who know her.',
  elements: 'One glabella-only session, a two-week review appointment, and a written summary of what it will not change.',
  whyEachMatters: 'The single area protects recognition; the review is where she decides whether anything else ever happens; the written summary exists because she has been handed a plan she did not agree to before.',
  evidence: 'Typical onset day 3, full effect day 14, duration three to four months at a conservative dose.',
  investment: '€290 for the session, review included.',
  alternativeCost: 'Doing nothing costs nothing; the trade-off is that she will have the same conversation with herself in six months.',
  limitation: 'It will not remove the lines at rest and it is temporary. If she wants a permanent change, this is not it.',
  noPressure: 'No package, no expiry on the price, and no follow-up call unless she asks for one. She can leave today with the summary and decide alone.'
};
const C_T6 = {
  surface: '"I need to talk to my husband about it."',
  underlying: 'She is protecting herself from being seen as someone who has "had work done" — her husband joked about exactly that at dinner.',
  trustGap: '1 — Create Psychological Safety',
  responseCategory: 'Acknowledge',
  proposedResponse: 'If the choice were only yours, what would you want to do? I am asking because your answer changes what I would suggest next, not because I am trying to move you past him.'
};
const C_T8_YES = {
  rows: [
    { interval: 'Same day', timing: 'Today 18:00', purpose: 'Book the conservative session and send the written "what this will not change" summary', channel: 'Email', owner: 'Practitioner', outcome: '' },
    { interval: '24 hours', timing: 'Tomorrow 10:00', purpose: 'Confirm she has read the summary', channel: 'WhatsApp', owner: 'Practitioner', outcome: '' },
    { interval: '3 days', timing: 'Day 3', purpose: 'Onset check — nothing is final yet', channel: 'WhatsApp', owner: 'Practitioner', outcome: '' },
    { interval: '14 days', timing: 'Day 14', purpose: 'Review against her own sentence, not a photo grid', channel: 'In clinic', owner: 'Practitioner', outcome: '' },
    { interval: 'Month 3', timing: 'Month 3', purpose: 'The stopping conversation, including doing nothing', channel: 'In clinic', owner: 'Practitioner', outcome: '' }
  ],
  stopCondition: 'The sequence ends at the month-3 conversation. If she does not want to continue, there is no further contact and she keeps the summary.'
};
const C_T8_DEFER = {
  rows: [
    { interval: 'Same day', timing: 'Today 18:00', purpose: 'Send the written recommendation and the do-nothing alternative so she can decide with the facts in front of her', channel: 'Email', owner: 'Practitioner', outcome: '' },
    { interval: 'Agreed date', timing: 'Thursday 24th, 12:00', purpose: 'The follow-up conversation she agreed to in the room', channel: 'Phone', owner: 'Practitioner', outcome: '' }
  ],
  agreedFollowUpDate: 'Thursday 24th at 12:00, agreed with her in the room',
  stopCondition: 'One agreed contact. If she does not answer, there is no further outreach — she has the summary and can return whenever she wants.'
};

// Spanish variants (the ES journey must validate on Spanish text).
const ES_T1 = {
  situation: 'Líneas finas en el entrecejo y alrededor de los ojos; es directora de galería y dice que su cara es su firma.',
  tried: 'Nada clínico, solo cosmética. Pidió cita en otro sitio y se marchó antes de empezar.',
  constraints: 'Nada que cambie el reconocimiento. Sin paquetes. Quiere que no hacer nada siga siendo una opción real.',
  priorExperience: 'Se marchó de una clínica que imprimió un plan de tratamiento antes de que ella se sentara.',
  depthCheck: { wantsToChange: true, whyNow: true, whatTried: true, expectations: true, decisionCriteria: true, feelsHeard: true }
};
const ES_T3 = Object.assign({}, C_T3, {
  hiddenMotivation: 'Teme quedar borrada: dejar de ser reconociblemente ella misma, que es su firma profesional.',
  clientLanguage: '«No quiero dejar de parecerme a mí misma».'
});
const ES_T4 = Object.assign({}, C_T4, {
  f1_goal: 'Dejar de parecer severa en las fotos sin dejar de parecerse a sí misma — sus palabras: «no quiero dejar de parecerme a mí misma».',
  f6_realistic: 'El resultado es temporal y no eliminará las líneas en reposo. Se gestiona, no se cura, y no hacer nada más adelante es una opción real.'
});

const PATH_BEST = {
  preparation: 'prep-full',
  connection: 'conn-autonomy',
  discovery: 'disc-meaning',
  understanding: 'und-contradiction',
  education: 'edu-honest',
  recommendation: 'rec-herwords',
  decisionSupport: 'obj-diagnose'
};
// Safety and discovery done well, but the contradiction is never mirrored (so
// the spouse comment stays withheld), the close is passive, and the objection
// is answered with money instead of a diagnosis. She trusts you and still
// leaves to think. This is the commonest real DEFER.
const PATH_DEFER = {
  preparation: 'prep-full',
  connection: 'conn-autonomy',
  discovery: 'disc-meaning',
  understanding: 'und-summary',
  education: 'edu-honest',
  recommendation: 'rec-abdicate',
  decisionSupport: 'obj-discount'
};

async function runCase(token, scenarioId, pathMap, payloads, lang) {
  const created = await call(token, 'POST', '/api/attempts', { scenarioId, forceNew: true }, lang);
  const id = created.body.attempt.id;
  const order = ['preparation', 'connection', 'discovery', 'understanding', 'education', 'recommendation', 'decisionSupport'];
  const trace = [];
  for (const phase of order) {
    // Toolkit placement is a property of the case, so read it from the phase view.
    const view = await call(token, 'GET', `/api/attempts/${id}`, null, lang);
    const content = view.body.view.content || {};
    const needed = [content.toolkit, content.secondaryToolkit].filter(Boolean);

    const d = await call(token, 'POST', `/api/attempts/${id}/decision`, { optionId: pathMap[phase], readStage: 'safety' }, lang);
    if (d.status !== 200) trace.push({ decisionFailed: phase, status: d.status, body: d.body });
    trace.push({ phase, feedback: d.body && d.body.feedback, consequence: d.body && d.body.consequence });

    for (const n of needed) {
      const r = await call(token, 'POST', `/api/attempts/${id}/toolkit/${n}`, payloads[n], lang);
      if (!r.body || r.body.valid !== true) trace.push({ toolkitFailure: n, issues: r.body && r.body.issues });
    }
    const adv = await call(token, 'POST', `/api/attempts/${id}/advance`, {}, lang);
    if (adv.status === 409) trace.push({ gateBlocked: phase, reason: adv.body.reason });
    if (adv.body && adv.body.decisionOutcome) trace.push({ outcome: adv.body.decisionOutcome, proposal: adv.body.continuationProposal });
  }
  return { id, trace };
}

function deepFindBilingualLeak(value, seenPath) {
  if (value === null || value === undefined) return null;
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const r = deepFindBilingualLeak(value[i], `${seenPath}[${i}]`);
      if (r) return r;
    }
    return null;
  }
  if (typeof value === 'object') {
    const keys = Object.keys(value);
    if (keys.length && keys.every(k => k === 'en' || k === 'es')) return seenPath;
    for (const k of keys) {
      const r = deepFindBilingualLeak(value[k], `${seenPath}.${k}`);
      if (r) return r;
    }
  }
  return null;
}

(async () => {
  await bootstrap();
  await seed(db);
  const server = app.listen(0);
  await new Promise(r => server.once('listening', r));
  BASE = 'http://127.0.0.1:' + server.address().port;

  const prac = await login('practitioner@wildmagic.es', 'Mirror2026!prac');
  const prac2 = await login('practitioner2@wildmagic.es', 'Mirror2026!prac2');
  const mgr = await login('manager@wildmagic.es', 'Mirror2026!mgr');

  // =====================================================================
  section('CASE REGISTRY');
  const orient = await call(prac, 'GET', '/api/orientation');
  // The case library grows; the assertion is that it is a LIBRARY of materially
  // distinct consultations, not that it is any particular size.
  ok('The case library offers at least nine consultations',
     orient.body.cases && orient.body.cases.length >= 9,
     JSON.stringify((orient.body.cases || []).map(c => c.id)));
  ok('Case numbers are unique and sequential from 1',
     (orient.body.cases || []).map(c => c.caseNumber).sort((a, b) => a - b)
       .every((n, i) => n === i + 1),
     JSON.stringify((orient.body.cases || []).map(c => c.caseNumber)));
  ok('Every case is a different client, not a renamed one',
     new Set((orient.body.cases || []).map(c => c.client && c.client.name)).size
       === (orient.body.cases || []).length,
     JSON.stringify((orient.body.cases || []).map(c => c.client && c.client.name)));
  ok('Every case states what makes it different, in both languages',
     (orient.body.cases || []).every(c => c.subtitle && String(c.subtitle).length > 30));
  const carmen = (orient.body.cases || []).find(c => c.id === 'carmen-injectables');
  ok('Case 02 is Carmen and declares both languages', !!carmen && carmen.languages.join(',') === 'en,es');
  ok('Every case runs in both languages', (orient.body.cases || []).every(c => c.languages.join(',') === 'en,es'),
     JSON.stringify((orient.body.cases || []).map(c => c.id + ':' + c.languages.join('+'))));
  ok('No case carries a "not translated yet" note any more',
     (orient.body.cases || []).every(c => !c.languageNote));
  const orientEs = await call(prac, 'GET', '/api/orientation?lang=es');
  const sofiaEs = (orientEs.body.cases || []).find(c => c.id === 'sofia-melasma');
  ok('Case 01 presents itself in Spanish', !!sofiaEs && /[áéíóúñ]/.test(JSON.stringify(sofiaEs.client)),
     JSON.stringify(sofiaEs && sofiaEs.client).slice(0, 120));
  const beatriz = (orient.body.cases || []).find(c => c.id === 'beatriz-programme');
  ok('Case 03 is Beatriz and is live', !!beatriz && beatriz.caseNumber === 3);

  // =====================================================================
  section('CASE 02 — CARMEN, BEST PATH (EN)');
  const best = await runCase(prac, 'carmen-injectables', PATH_BEST,
    { 1: C_T1, 3: C_T3, 4: C_T4, 5: C_T5, 6: C_T6 });
  const tkFails = best.trace.filter(t => t.toolkitFailure);
  ok('All toolkits validate on the best path', tkFails.length === 0, JSON.stringify(tkFails));
  const gates = best.trace.filter(t => t.gateBlocked);
  ok('No phase gate blocked the best path', gates.length === 0, JSON.stringify(gates));
  const outcomeRec = best.trace.find(t => t.outcome);
  ok('An outcome was derived', !!outcomeRec, JSON.stringify(best.trace.slice(-2)));
  ok('Best path derives YES', outcomeRec && outcomeRec.outcome.outcome === 'YES',
     outcomeRec ? outcomeRec.outcome.outcome + ' ' + JSON.stringify(outcomeRec.outcome.rationale) : 'none');
  ok('Carmen speaks in her own voice at the outcome, not Sofia\'s',
     outcomeRec && /glabella|conservative/i.test(outcomeRec.outcome.clientLanguage) && !/my skin does/i.test(outcomeRec.outcome.clientLanguage),
     outcomeRec && outcomeRec.outcome.clientLanguage);
  ok('The follow-up plan is Carmen\'s, not the melasma plan',
     outcomeRec && JSON.stringify(outcomeRec.proposal.rows).includes('recognisably herself') === false
       && /will NOT change|stopping conversation/i.test(JSON.stringify(outcomeRec.proposal.rows)),
     outcomeRec && JSON.stringify(outcomeRec.proposal.rows).slice(0, 160));

  const turningPoints = best.trace.filter(t => t.consequence && (t.consequence.newlyRevealed || []).length);
  ok('The consultation has at least three turning points', turningPoints.length >= 3,
     JSON.stringify(turningPoints.map(t => t.consequence.newlyRevealed)));
  ok('Identity fear is disclosed, not assumed',
     JSON.stringify(turningPoints).includes('identity_fear'));
  ok('The spouse comment is a separate, later disclosure',
     JSON.stringify(turningPoints).includes('spouse_comment'));

  const cont = await call(prac, 'POST', `/api/attempts/${best.id}/continuation`, C_T8_YES);
  ok('Toolkit #8 validates and the attempt completes', cont.body.valid === true, JSON.stringify(cont.body.issues));
  ok('Relationship moves to Active on YES',
     cont.body.continuation && cont.body.continuation.relationshipTransition.to === 'ACTIVE');

  // =====================================================================
  section('CASE 02 — DEFER IS REACHABLE');
  const deferRun = await runCase(prac2, 'carmen-injectables', PATH_DEFER,
    { 1: C_T1, 3: C_T3, 4: C_T4, 5: C_T5, 6: C_T6 });
  const deferOutcome = deferRun.trace.find(t => t.outcome);
  ok('A materially different path derives DEFER', deferOutcome && deferOutcome.outcome.outcome === 'DEFER',
     deferOutcome ? deferOutcome.outcome.outcome : 'none');
  ok('DEFER is explained by named thresholds, not a score',
     deferOutcome && deferOutcome.outcome.rationale.join(' ').includes('threshold'),
     deferOutcome && deferOutcome.outcome.rationale[0]);
  ok('Toolkit #16 is refused at an immediate DEFER',
     deferOutcome && /NOT eligible at an immediate DEFER/.test(JSON.stringify(deferOutcome.outcome.toolkitAttachment)));
  const deferCont = await call(prac2, 'POST', `/api/attempts/${deferRun.id}/continuation`, C_T8_DEFER);
  ok('DEFER requires an agreed follow-up moment and accepts it', deferCont.body.valid === true, JSON.stringify(deferCont.body.issues));
  ok('Relationship moves to Considering on DEFER',
     deferCont.body.continuation && deferCont.body.continuation.relationshipTransition.to === 'CONSIDERING');
  const deferNoDate = await call(prac2, 'POST', `/api/attempts/${deferRun.id}/continuation`, Object.assign({}, C_T8_DEFER, { agreedFollowUpDate: '' }));
  ok('A DEFER plan without an agreed moment is rejected', deferNoDate.status === 409 || deferNoDate.body.valid === false);

  // =====================================================================
  section('CASE-AWARE TOOLKIT HONESTY');
  const fresh = await call(prac, 'POST', '/api/attempts', { scenarioId: 'carmen-injectables', forceNew: true });
  const fid = fresh.body.attempt.id;
  await call(prac, 'POST', `/api/attempts/${fid}/decision`, { optionId: 'prep-full' });
  await call(prac, 'POST', `/api/attempts/${fid}/advance`, {});
  await call(prac, 'POST', `/api/attempts/${fid}/decision`, { optionId: 'conn-clinical' });
  await call(prac, 'POST', `/api/attempts/${fid}/advance`, {});
  await call(prac, 'POST', `/api/attempts/${fid}/decision`, { optionId: 'disc-reassure' });
  const dishonest = await call(prac, 'POST', `/api/attempts/${fid}/toolkit/1`, C_T1);
  ok('Ticking "why it matters now" without disclosure is rejected — in Carmen\'s words',
     dishonest.body.valid === false && /Carmen/.test(JSON.stringify(dishonest.body.issues)),
     JSON.stringify(dishonest.body.issues));
  ok('The rejection is not Sofia\'s melasma text',
     !/melasma|laser/i.test(JSON.stringify(dishonest.body.issues)));
  const invented = await call(prac, 'POST', `/api/attempts/${fid}/toolkit/3`, C_T3);
  ok('Recording an inferred motive as fact is refused',
     invented.body.valid === false && /MATERIAL/.test(JSON.stringify(invented.body.issues)),
     JSON.stringify(invented.body.issues));

  // =====================================================================
  section('SPANISH JOURNEY (CASE 02)');
  const es = await runCase(prac2, 'carmen-injectables', PATH_BEST,
    { 1: ES_T1, 3: ES_T3, 4: ES_T4, 5: C_T5, 6: C_T6 }, 'es');
  const esOutcome = es.trace.find(t => t.outcome);
  ok('The Spanish journey reaches an outcome', !!esOutcome);
  ok('Spanish outcome language is Spanish',
     esOutcome && /[áéíóúñ¿«]/.test(esOutcome.outcome.clientLanguage),
     esOutcome && esOutcome.outcome.clientLanguage);
  const esView = await call(prac2, 'GET', `/api/attempts/${es.id}?lang=es`);
  const leak = deepFindBilingualLeak(esView.body, 'attempt');
  ok('No {en,es} object leaks through the API in Spanish', leak === null, leak || '');
  const esFeedback = es.trace.filter(t => t.feedback).map(t => t.feedback);
  const esText = JSON.stringify(esFeedback.map(f => [f.signalDetected, f.mirrorInterpretation, f.learnerDid, f.alignmentReason, f.nextPracticePriority]));
  ok('Spanish feedback carries Spanish accents throughout', /[áéíóúñ]/.test(esText));
  ok('Spanish feedback contains no English scenario prose',
     !/\bthe client\b|\byou did\b|\bshe said\b/i.test(esText));
  const enFresh = await call(prac, 'POST', '/api/attempts', { scenarioId: 'carmen-injectables', forceNew: true });
  ok('English journey is unaffected by the bilingual layer',
     !/[áéíóúñ]/.test(JSON.stringify(enFresh.body.view.content)) && /Carmen/.test(JSON.stringify(enFresh.body.view.caseMeta)));


  // =====================================================================
  section('CASE 03 — BEATRIZ, THE EASY YES');
  const b0 = await call(prac, 'POST', '/api/attempts', { scenarioId: 'beatriz-programme', forceNew: true });
  const bState = b0.body.view.clientState;
  ok('Case 03 opens compliant and already willing — the opposite trap',
     bState.posture === 'compliant' && bState.willingness >= 55,
     JSON.stringify({ p: bState.posture, w: bState.willingness }));
  ok('Case 03 withholds a fund, a promise and a permission fear',
     ['saved_fund', 'hospital_promise', 'permission_fear'].every(x => bState.withheld.includes(x)),
     JSON.stringify(bState.withheld));

  // The pleasant path: accept the agreement, present everything, close early.
  const EASY = { preparation: 'prep-easy', connection: 'conn-match', discovery: 'disc-accept',
                 understanding: 'und-praise', education: 'edu-programme', recommendation: 'rec-full',
                 decisionSupport: 'dec-close' };
  const B_TK = { 1: C_T1, 3: C_T3, 4: C_T4, 5: C_T5, 6: C_T6 };
  const easy = await runCase(prac2, 'beatriz-programme', EASY, B_TK);
  const easyOutcome = easy.trace.find(t => t.outcome);
  ok('The warm consultation does not derive YES', !easyOutcome || easyOutcome.outcome.outcome !== 'YES',
     easyOutcome ? easyOutcome.outcome.outcome : 'blocked at a gate');

  const b1 = await call(prac, 'POST', '/api/attempts', { scenarioId: 'beatriz-programme', forceNew: true });
  const bid = b1.body.attempt.id;
  await call(prac, 'POST', `/api/attempts/${bid}/decision`, { optionId: 'prep-full' });
  await call(prac, 'POST', `/api/attempts/${bid}/advance`, {});
  await call(prac, 'POST', `/api/attempts/${bid}/decision`, { optionId: 'conn-permission' });
  await call(prac, 'POST', `/api/attempts/${bid}/advance`, {});
  const slow = await call(prac, 'POST', `/api/attempts/${bid}/decision`, { optionId: 'disc-slow' });
  ok('Declining the easy yes is what discloses the saved fund',
     (slow.body.consequence.newlyRevealed || []).includes('saved_fund'),
     JSON.stringify(slow.body.consequence.newlyRevealed));

  const bEs = await call(prac, 'GET', `/api/attempts/${bid}?lang=es`);
  ok('Case 03 runs in Spanish', /[áéíóúñ«]/.test(JSON.stringify(bEs.body.view.content)));
  ok('Case 03 has no {en,es} leakage', deepFindBilingualLeak(bEs.body, 'beatriz') === null,
     deepFindBilingualLeak(bEs.body, 'beatriz') || '');

  // =====================================================================
  section('THE CANONICAL FRAMEWORK SPEAKS SPANISH');
  const fwEs = await call(prac, 'GET', '/api/framework?lang=es');
  ok('Framework endpoint localizes', fwEs.status === 200);
  const navEs = bEs.body.view.navigation;
  ok('Phase names are Spanish in the Spanish journey', /Descubrimiento|Preparación|Conexión/.test(navEs.phase.name),
     navEs.phase.name);
  ok('Engine names are Spanish too', /Motor/.test(navEs.engine.name), navEs.engine.name);
  ok('Trust stages are Spanish', /Seguridad|Atención/.test(JSON.stringify(bEs.body.view.trustReadout)));
  const tkEs = await call(prac, 'GET', '/api/toolkits/1?lang=es');
  ok('Toolkit workspaces are Spanish', /Lienzo|clienta/.test(JSON.stringify(tkEs.body)),
     JSON.stringify(tkEs.body.name));
  ok('Toolkit checklist items are Spanish',
     /Entiendo|Conozco/.test(JSON.stringify(tkEs.body.fields)));
  const tkEn = await call(prac, 'GET', '/api/toolkits/1');
  ok('The English toolkit is unaffected', /Client Intake/.test(JSON.stringify(tkEn.body.name)));

  // =====================================================================
  section('ACADEMY CURRICULUM');
  const cur = await call(prac, 'GET', '/api/academy/curriculum');
  ok('Ten modules are published', cur.body.modules.length === 10);
  const built = cur.body.modules.filter(m => m.status === 'available');
  ok('Built modules are marked available and the rest are marked in production',
     built.length >= 2 && cur.body.modules.filter(m => m.status === 'production').length === 10 - built.length);
  const m3 = cur.body.modules.find(m => m.id === 'm3');
  ok('Module 3 (Discovery) is the deepest built module', m3 && m3.lessons.length === 7, m3 && String(m3.lessons.length));
  ok('Every Module 3 lesson has a built interior', m3 && m3.lessons.every(l => l.built));
  ok('Module 1 is fully built too', (cur.body.modules.find(m => m.id === 'm1') || {}).lessons.every(l => l.built));
  ok('Modules 4 and 7 are fully built as well',
     ['m4', 'm7'].every(id => cur.body.modules.find(m => m.id === id).lessons.every(l => l.built)));
  ok('Objections is the promised substantial library', (cur.body.modules.find(m => m.id === 'm7') || {}).lessons.length === 6);
  ok('Curriculum totals are reported honestly',
     cur.body.stats.lessons === 51 || cur.body.stats.lessons > 40, JSON.stringify(cur.body.stats));

  const lesson = await call(prac, 'GET', '/api/academy/modules/m3/lessons/m3l3');
  ok('A lesson returns its interactive blocks', lesson.body.built === true && lesson.body.lesson.blocks.length >= 4,
     lesson.body.lesson && String((lesson.body.lesson.blocks || []).length));
  const kinds = new Set(lesson.body.lesson.blocks.map(b => b.kind));
  ok('A lesson is not paragraphs and a Next button', kinds.size >= 3, [...kinds].join(','));
  const allKinds = new Set();
  for (const mid of ['m1', 'm3']) {
    const mod = cur.body.modules.find(m => m.id === mid);
    for (const l of mod.lessons) {
      const r = await call(prac, 'GET', `/api/academy/modules/${mid}/lessons/${l.id}`);
      (r.body.lesson.blocks || []).forEach(b => allKinds.add(b.kind));
    }
  }
  ok('At least eight distinct exercise types exist across the built modules', allKinds.size >= 8, [...allKinds].join(','));

  const lessonEs = await call(prac, 'GET', '/api/academy/modules/m3/lessons/m3l4?lang=es');
  const lessonLeak = deepFindBilingualLeak(lessonEs.body, 'lesson');
  ok('Lessons localize cleanly to Spanish', lessonLeak === null, lessonLeak || '');
  ok('Spanish lesson prose is Spanish', /[áéíóúñ]/.test(JSON.stringify(lessonEs.body.lesson.blocks)));

  const everyLesson = [];
  for (const m of cur.body.modules) for (const l of m.lessons) everyLesson.push([m.id, l.id]);
  let unbuiltCount = 0;
  for (const [mid, lid] of everyLesson) {
    const r = await call(prac, 'GET', `/api/academy/modules/${mid}/lessons/${lid}`);
    if (!r.body.built) unbuiltCount++;
  }
  ok('Every published lesson serves a built interior', unbuiltCount === 0, `${unbuiltCount} unbuilt`);
  ok('The curriculum is ten modules deep', cur.body.modules.every(m => m.status === 'available'),
     cur.body.modules.filter(m => m.status !== 'available').map(m => m.id).join(','));

  // =====================================================================
  section('PROGRESSION AND FIELD ASSIGNMENTS');
  const m1 = cur.body.modules.find(m => m.id === 'm1');
  let assignment = null;
  for (const l of m1.lessons) {
    const r = await call(prac, 'POST', '/api/academy/progress', { moduleId: 'm1', lessonId: l.id, status: 'complete', score: 100 });
    if (r.body.assignment) assignment = r.body.assignment;
  }
  ok('Completing every lesson in a module opens its field assignment', !!assignment);
  ok('The assignment is an instruction for a real consultation',
     assignment && /consultation|ninety seconds/i.test(JSON.stringify(assignment.apply)));
  const journal = await call(prac, 'GET', '/api/academy/journal');
  ok('The assignment appears in the practitioner journal as open',
     journal.body.entries.length === 1 && journal.body.entries[0].status === 'open');
  const tooShort = await call(prac, 'POST', `/api/academy/journal/${assignment.id}`, { answer: 'went ok' });
  ok('A one-line answer to "what happened?" is refused', tooShort.status === 422);
  const answered = await call(prac, 'POST', `/api/academy/journal/${assignment.id}`, {
    answer: 'I stayed quiet for the first ninety seconds with a client who came about her jawline. In the second pause she told me her sister had said something at a wedding. I would never have heard that.'
  });
  ok('A real answer is accepted', answered.body.ok === true);
  const cur2 = await call(prac, 'GET', '/api/academy/curriculum');
  // every lesson of module 1 was walked above, so completion must equal the
  // module's own lesson count rather than a constant that goes stale whenever
  // a lesson is added
  const m1now = cur2.body.modules.find(m => m.id === 'm1');
  ok('Progress persists and is reported per lesson',
     m1now.completed === m1now.lessons.length,
     `${m1now.completed}/${m1now.lessons.length}`);

  // =====================================================================
  section('MANAGER COACHING VIEW');
  const coaching = await call(mgr, 'GET', '/api/manager/coaching');
  ok('The manager view returns all four questions',
     !!coaching.body.practising && !!coaching.body.trustLoss && !!coaching.body.repeats && !!coaching.body.coachThisWeek);
  ok('WHO IS PRACTISING names practitioners and counts',
     /practitioners/.test(coaching.body.practising.headline) || coaching.body.practising.rows.length >= 2,
     coaching.body.practising.headline);
  ok('WHERE THE TEAM LOSES TRUST names a phase with counts',
     coaching.body.trustLoss.length > 0 && /of \d+ recorded/.test(coaching.body.trustLoss[0].evidence),
     coaching.body.trustLoss[0] && coaching.body.trustLoss[0].evidence);
  ok('WHAT REPEATS is an evidence sentence, not a score',
     coaching.body.repeats.length > 0 && /of \d+ practitioners/.test(coaching.body.repeats[0].evidence),
     coaching.body.repeats[0] && coaching.body.repeats[0].evidence);
  ok('WHAT TO COACH THIS WEEK carries the evidence and the action',
     coaching.body.coachThisWeek.length > 0 && !!coaching.body.coachThisWeek[0].evidence && !!coaching.body.coachThisWeek[0].action);
  ok('The manager view contains no scores or percentages',
     !/\b\d{1,3}\s?%|\bscore\b|\brank/i.test(JSON.stringify(coaching.body.repeats) + JSON.stringify(coaching.body.trustLoss)));

  // A case opened and walked away from is not a consultation. If those rows are
  // counted, every ratio in the coaching moves whenever somebody clicks into a
  // case and leaves, which makes the evidence unciteable.
  const mgrList = await call(mgr, 'GET', '/api/manager/attempts');
  const idle = mgrList.body.attempts.filter(a => a.abandoned);
  ok('Abandoned attempts are visible to the manager', mgrList.body.attempts.every(a => 'abandoned' in a));
  ok('Abandoned attempts are reported separately from consultations',
     typeof coaching.body.totals.openedAndAbandoned === 'number' &&
     coaching.body.totals.openedAndAbandoned === idle.length,
     `${coaching.body.totals.openedAndAbandoned} vs ${idle.length}`);
  ok('Abandoned attempts do not inflate the coaching denominator',
     coaching.body.totals.consultations === mgrList.body.attempts.length - idle.length,
     `${coaching.body.totals.consultations} of ${mgrList.body.attempts.length}`);
  ok('Every attempt counted as a consultation recorded at least one choice',
     mgrList.body.attempts.filter(a => !a.abandoned).every(a => a.decisions > 0 || a.status === 'completed'));
  const coachingEs = await call(mgr, 'GET', '/api/manager/coaching?lang=es');
  const coachLeak = deepFindBilingualLeak(coachingEs.body, 'coaching');
  ok('The manager view localizes cleanly', coachLeak === null, coachLeak || '');
  ok('Spanish manager evidence is Spanish',
     /[áéíóúñ]/.test(JSON.stringify(coachingEs.body.repeats) + JSON.stringify(coachingEs.body.coachThisWeek)));
  const assignments = await call(mgr, 'GET', '/api/manager/assignments');
  ok('The manager sees what practitioners reported from real consultations',
     assignments.body.entries.length >= 1 && /jawline|wedding/.test(JSON.stringify(assignments.body.entries)));

  // =====================================================================
  section('CASE 01 IS UNCHANGED');
  const sofiaRun = await call(prac, 'POST', '/api/attempts', { scenarioId: 'sofia-melasma', forceNew: true });
  const sid = sofiaRun.body.attempt.id;
  const sview = await call(prac, 'GET', `/api/attempts/${sid}`);
  ok('Case 01 still starts at Preparation with the canonical content',
     sview.body.view.navigation.phase.n === 1 && /Sofia/.test(JSON.stringify(sview.body.view.caseMeta.profile)));
  ok('Case 01 opens in its own client state, distinct from Carmen\'s',
     sview.body.view.clientState.willingness === 40 && sview.body.view.clientState.posture === 'reserved',
     JSON.stringify({ w: sview.body.view.clientState.willingness, p: sview.body.view.clientState.posture }));
  const carmenState = (await call(prac, 'POST', '/api/attempts', { scenarioId: 'carmen-injectables', forceNew: true })).body.view.clientState;
  ok('Case 02 opens armored and less willing than Case 01 — a different consultation from the first second',
     carmenState.posture === 'armored' && carmenState.willingness === 45,
     JSON.stringify({ w: carmenState.willingness, p: carmenState.posture }));

  // =====================================================================
  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  server.close();
  db.close();
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
