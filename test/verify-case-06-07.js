/**
 * CASES 06 (NURIA) AND 07 (TERESA) — STRUCTURAL, BILINGUAL AND BRANCHING PROOF
 *
 * What this asserts, in order:
 *   1. Both scenarios export the same surface as the canonical Beatriz case,
 *      key for key.
 *   2. Every client-facing {en, es} leaf carries both languages, non-empty, and
 *      no Spanish string over 24 characters is byte-identical to its English.
 *   3. A STRONG path and a WEAK path through each case produce materially
 *      different LATER consultations — different disclosed information, a
 *      different final posture, a willingness gap of at least 15, and a
 *      different Phase 7 objection variant. Both are printed side by side.
 *   4. Every combination of the seven decisions (3^7 = 2187 per case) is played
 *      through the real engine and its outcome DERIVED by the Decision Engine
 *      with all Toolkits valid. The YES / DEFER / NO distribution is printed.
 *      All three must occur; Nuria must DEFER most often; Teresa must exceed
 *      5 % on all three.
 *   5. Every mirror.principle cites a real canonical element, in both languages.
 *   6. Each case's caseFacts make a real Toolkit #3 hidden-motivation entry pass
 *      and a lazy one fail.
 *
 * Run: node test/verify-case-06-07.js
 */

const path = require('path');
const canonical = require('../server/framework/canonical');
const decisionEngine = require('../server/engines/decisionEngine');
const toolkits = require('../server/toolkits/registry');

const beatriz = require('../server/scenario/beatrizScenario');
const nuria = require('../server/scenario/nuriaScenario');
const teresa = require('../server/scenario/teresaScenario');

const clone = o => JSON.parse(JSON.stringify(o));
const txt = v => (typeof v === 'string' ? v : (v && v.en) || '');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => {
  if (c) { pass++; console.log(`  PASS  ${n}`); }
  else { fail++; failures.push(n + (d ? '  →  ' + d : '')); console.log(`  FAIL  ${n}${d ? '  →  ' + d : ''}`); }
};
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);

const CASES = [
  { key: 'nuria-undecided', label: 'CASE 06 — NURIA VIDAL', S: nuria, file: 'server/scenario/nuriaScenario.js' },
  { key: 'teresa-repair', label: 'CASE 07 — TERESA ALONSO', S: teresa, file: 'server/scenario/teresaScenario.js' }
];

const DECISION_PHASES = ['preparation', 'connection', 'discovery', 'understanding', 'education', 'recommendation', 'decisionSupport'];

// ---------------------------------------------------------------------------
console.log('MIRROR ACADEMY — CASES 06 AND 07');
console.log('='.repeat(78));

sec('1. EXPORTED SHAPE MATCHES THE CANONICAL BEATRIZ CASE, KEY FOR KEY');

const beatrizKeys = Object.keys(beatriz).sort();
console.log(`  Beatriz surface: ${beatrizKeys.join(', ')}`);
for (const c of CASES) {
  const keys = Object.keys(c.S).sort();
  ok(`${c.label}: exports exactly Beatriz's keys`,
     JSON.stringify(keys) === JSON.stringify(beatrizKeys),
     `got [${keys.join(', ')}]`);
  for (const k of beatrizKeys) {
    ok(`${c.label}: "${k}" has the same type as Beatriz's`,
       typeof c.S[k] === typeof beatriz[k], `${typeof c.S[k]} vs ${typeof beatriz[k]}`);
  }
  ok(`${c.label}: the eight canonical phases, in canonical order`,
     JSON.stringify(Object.keys(c.S.phases)) === JSON.stringify(canonical.PHASE_ORDER),
     Object.keys(c.S.phases).join(', '));
  // seven decisions with >= 3 options; continuation carries none
  const withDecisions = DECISION_PHASES.filter(p => c.S.phases[p] && c.S.phases[p].decision);
  ok(`${c.label}: seven phases carry a decision`, withDecisions.length === 7, withDecisions.join(', '));
  ok(`${c.label}: every decision offers at least three options`,
     withDecisions.every(p => c.S.phases[p].decision.options.length >= 3),
     withDecisions.map(p => `${p}:${c.S.phases[p].decision.options.length}`).join(' '));
  ok(`${c.label}: continuation carries no decision, like Beatriz`,
     c.S.phases.continuation.decision === null && beatriz.phases.continuation.decision === null);
  // Toolkit attachment
  const tk = k => c.S.phases[k].toolkit;
  ok(`${c.label}: toolkit attachment — discovery #1, understanding #3, recommendation #4 (secondary #5), decisionSupport #6, continuation #8`,
     tk('discovery') === 1 && tk('understanding') === 3 && tk('recommendation') === 4 &&
     c.S.phases.recommendation.secondaryToolkit === 5 && tk('decisionSupport') === 6 && tk('continuation') === 8,
     `${tk('discovery')}/${tk('understanding')}/${tk('recommendation')}+${c.S.phases.recommendation.secondaryToolkit}/${tk('decisionSupport')}/${tk('continuation')}`);
  // Gates are real: they refuse without the artifact and permit with it
  const gated = { discovery: '1', understanding: '3', recommendation: '4', decisionSupport: '6' };
  const cs0 = c.S.initialClientState();
  let gatesReal = true, gateDetail = [];
  for (const [phase, artifact] of Object.entries(gated)) {
    const blocked = c.S.gateFor(phase, cs0, {});
    const opened = c.S.gateFor(phase, cs0, { 1: { valid: true }, 3: { valid: true }, 4: { valid: true }, 5: { valid: true }, 6: { valid: true } });
    if (blocked.canAdvance !== false || !blocked.reason || opened.canAdvance !== true) { gatesReal = false; gateDetail.push(phase); }
  }
  ok(`${c.label}: every toolkit gate actually refuses an empty artifact set and opens on a valid one`, gatesReal, gateDetail.join(', '));
  // Option id prefixes, in order
  const prefixes = { preparation: 'prep-', connection: 'conn-', discovery: 'disc-', understanding: 'und-', education: 'edu-', recommendation: 'rec-', decisionSupport: 'dec-' };
  const badPrefix = [];
  for (const [phase, pre] of Object.entries(prefixes)) {
    for (const o of c.S.phases[phase].decision.options) if (!o.id.startsWith(pre)) badPrefix.push(`${phase}:${o.id}`);
  }
  ok(`${c.label}: option ids use the required prefixes in order`, badPrefix.length === 0, badPrefix.join(', '));
  // Every option carries the full teaching payload
  const missing = [];
  for (const phase of DECISION_PHASES) {
    for (const o of c.S.phases[phase].decision.options) {
      for (const f of ['id', 'label', 'language', 'mirror', 'effects']) if (!o[f]) missing.push(`${o.id}.${f}`);
      const m = o.mirror || {};
      for (const f of ['signalDetected', 'interpretation', 'principle', 'learnerDid', 'alignment', 'why', 'consequence', 'nextPriority']) {
        if (!m[f]) missing.push(`${o.id}.mirror.${f}`);
      }
    }
  }
  ok(`${c.label}: every option carries id, label, language, a full mirror block and effects`, missing.length === 0, missing.slice(0, 6).join(', '));
}

// ---------------------------------------------------------------------------
sec('2. EVERY CLIENT-FACING LEAF IS BILINGUAL, NON-EMPTY, AND NOT A COPY-PASTE');

const IDENTICAL_MIN = 24;

function walk(value, trail, out) {
  if (value === null || value === undefined) return;
  if (value instanceof RegExp || typeof value === 'function') return;
  if (Array.isArray(value)) { value.forEach((v, i) => walk(v, `${trail}[${i}]`, out)); return; }
  if (typeof value !== 'object') return;
  const keys = Object.keys(value);
  if (keys.length && keys.every(k => k === 'en' || k === 'es')) { out.push({ trail, leaf: value }); return; }
  for (const k of keys) walk(value[k], `${trail}.${k}`, out);
}

/** The static content plus every signal() rendered against a spread of states. */
function collectLeaves(S) {
  const out = [];
  walk({ profile: S.profile, intake: S.intake, voice: S.voice, caseFacts: S.caseFacts }, 'root', out);
  for (const phaseKey of canonical.PHASE_ORDER) {
    const ph = S.phases[phaseKey];
    if (ph.decision) walk(ph.decision, `phases.${phaseKey}.decision`, out);
  }
  // signal() variants — every branch a learner can reach
  const states = [];
  const base = S.initialClientState();
  states.push(base);
  const everything = clone(base);
  everything.revealed = base.withheld.slice();
  everything.withheld = [];
  everything.posture = 'testing';
  everything.flags = { prepared: 'full', permissionGiven: true, neutralityCommitted: true };
  states.push(everything);
  for (const flagset of [{ pushed: true }, { overloaded: true }, { criticisedClinic: true }, { overpromised: true }]) {
    const s = clone(everything); s.flags = Object.assign({}, everything.flags, flagset); states.push(s);
  }
  states.forEach((s, i) => {
    for (const phaseKey of canonical.PHASE_ORDER) {
      walk(S.phases[phaseKey].signal(s), `signal[${i}].${phaseKey}`, out);
    }
    for (const phaseKey of canonical.PHASE_ORDER) {
      const g = S.gateFor(phaseKey, s, {});
      walk(g, `gate[${i}].${phaseKey}`, out);
    }
  });
  return out;
}

for (const c of CASES) {
  const leaves = collectLeaves(c.S);
  const missingLang = leaves.filter(l => typeof l.leaf.en !== 'string' || typeof l.leaf.es !== 'string' ||
                                         !l.leaf.en.trim().length || !l.leaf.es.trim().length);
  ok(`${c.label}: all ${leaves.length} bilingual leaves carry a non-empty en AND es`,
     missingLang.length === 0, missingLang.slice(0, 4).map(l => l.trail).join(', '));
  const identical = leaves.filter(l => typeof l.leaf.en === 'string' && l.leaf.en.length > IDENTICAL_MIN && l.leaf.en === l.leaf.es);
  ok(`${c.label}: no Spanish string over ${IDENTICAL_MIN} characters is byte-identical to its English`,
     identical.length === 0, identical.slice(0, 4).map(l => `${l.trail}: "${l.leaf.en.slice(0, 40)}…"`).join(' | '));
  // Spanish must actually read as Spanish, not as English with accents bolted on.
  const longEs = leaves.filter(l => typeof l.leaf.es === 'string' && l.leaf.es.length > 60);
  const SPANISH_MARKERS = /\b(que|de|del|la|el|los|las|un|una|por|para|con|sin|no|ni|se|su|sus|es|en|y|o|al|lo|le|ning[úu]n|ninguna|m[áa]s|ha|han|est[áa]|esta|este)\b/i;
  const spanishish = longEs.filter(l => SPANISH_MARKERS.test(l.leaf.es));
  ok(`${c.label}: every substantial Spanish string is written in Spanish (${spanishish.length}/${longEs.length})`,
     longEs.length > 0 && spanishish.length === longEs.length,
     longEs.filter(l => !spanishish.includes(l)).slice(0, 3).map(l => l.trail).join(', '));
  // The Spanish layer must use Spanish quotation marks somewhere in the client's voice.
  const quoteUse = leaves.filter(l => typeof l.leaf.es === 'string' && /[«»]/.test(l.leaf.es)).length;
  ok(`${c.label}: Spanish client speech uses « » quotation marks (${quoteUse} leaves)`, quoteUse >= 10, String(quoteUse));
}

// ---------------------------------------------------------------------------
sec('3. A STRONG PATH AND A WEAK PATH PRODUCE TWO DIFFERENT CONSULTATIONS');

const PATHS = {
  'nuria-undecided': {
    STRONG: { preparation: 'prep-read', connection: 'conn-permit', discovery: 'disc-whynow', understanding: 'und-ambiv', education: 'edu-frame', recommendation: 'rec-defer', decisionSupport: 'dec-plan' },
    WEAK: { preparation: 'prep-assume', connection: 'conn-reassure', discovery: 'disc-options', understanding: 'und-planify', education: 'edu-sell', recommendation: 'rec-starter', decisionSupport: 'dec-close' }
  },
  'teresa-repair': {
    STRONG: { preparation: 'prep-full', connection: 'conn-invite', discovery: 'disc-cost', understanding: 'und-absolve', education: 'edu-mechanism', recommendation: 'rec-honest', decisionSupport: 'dec-verify' },
    WEAK: { preparation: 'prep-defend', connection: 'conn-sympathy', discovery: 'disc-criticise', understanding: 'und-blame', education: 'edu-promise', recommendation: 'rec-fullfix', decisionSupport: 'dec-guarantee' }
  }
};

function play(S, label, choices) {
  let state = clone(S.initialClientState());
  const log = { label, phases: [], state: null };
  for (const phaseKey of canonical.PHASE_ORDER) {
    const view = S.getPhaseContent(phaseKey, state) || {};
    const signal = view.clientSignal || {};
    const entry = {
      phase: phaseKey,
      says: txt(signal.quote),
      subtext: txt(signal.subtext),
      variant: signal.objectionVariant || null,
      notice: [txt(signal.subtext), signal.objectionVariant || '', String(signal.intensity == null ? '' : signal.intensity)],
      posture: state.posture,
      willingness: state.willingness,
      revealed: state.revealed.slice(),
      withheld: state.withheld.slice(),
      objectionIntensity: state.objectionIntensity
    };
    const chosen = choices[phaseKey];
    if (chosen && view.decision) {
      const resolved = S.resolveChoice(phaseKey, chosen, state);
      if (!resolved) throw new Error(`${label}: unknown option ${chosen} at ${phaseKey}`);
      entry.chose = chosen;
      entry.degraded = resolved.degraded;
      entry.material = txt(resolved.mirror && resolved.mirror.consequence);
      entry.after = { posture: state.posture, willingness: state.willingness, revealed: state.revealed.slice() };
    }
    log.phases.push(entry);
  }
  log.state = state;
  return log;
}

const allToolkits = { 1: { valid: true }, 3: { valid: true }, 4: { valid: true }, 5: { valid: true }, 6: { valid: true } };

for (const c of CASES) {
  const strong = play(c.S, 'STRONG EARLY CHOICES', PATHS[c.key].STRONG);
  const weak = play(c.S, 'WEAK EARLY CHOICES', PATHS[c.key].WEAK);

  console.log(`\n${c.label} — TWO CONSULTATIONS FROM THE SAME OPENING`);
  console.log('='.repeat(78));
  [strong, weak].forEach(p => {
    console.log(`\n${p.label}`);
    console.log('-'.repeat(p.label.length));
    p.phases.forEach(ph => {
      const cp = canonical.getPhase(ph.phase);
      console.log(`  ${cp.n} ${cp.name}`);
      if (ph.says) console.log(`      SHE SAYS    “${ph.says.slice(0, 116)}${ph.says.length > 116 ? '…' : ''}”`);
      console.log(`      STATE       ${ph.posture}, willingness ${ph.willingness}, objection ${ph.objectionIntensity}${ph.variant ? ' (' + ph.variant + ')' : ''}, withheld [${ph.withheld.join(', ') || '—'}]`);
      if (ph.chose) console.log(`      CHOSE       ${ph.chose}${ph.degraded ? '  (DEGRADED — prerequisite not disclosed)' : ''}`);
      if (ph.material) console.log(`      CONSEQUENCE ${ph.material.slice(0, 150)}${ph.material.length > 150 ? '…' : ''}`);
    });
    const out = decisionEngine.deriveOutcome(p.state, allToolkits, { voice: c.S.voice, motivationItem: c.S.caseFacts.motivationItem });
    console.log(`  FINAL         ${p.state.posture}, willingness ${p.state.willingness}, revealed [${p.state.revealed.join(', ') || '—'}], withheld [${p.state.withheld.join(', ') || '—'}]`);
    console.log(`  DERIVED       ${out.outcome}`);
    p.derived = out.outcome;
  });

  console.log('');
  const at = (p, k) => p.phases.find(x => x.phase === k);

  ok(`${c.label}: the two paths start from an identical client state`,
     at(strong, 'preparation').posture === at(weak, 'preparation').posture &&
     at(strong, 'preparation').willingness === at(weak, 'preparation').willingness);

  ok(`${c.label}: DIFFERENT DISCLOSED INFORMATION — the strong path unlocks what the weak path never hears`,
     strong.state.revealed.length > weak.state.revealed.length && weak.state.revealed.length === 0,
     `strong [${strong.state.revealed.join(', ')}] vs weak [${weak.state.revealed.join(', ') || '—'}]`);

  ok(`${c.label}: the hidden motivation is still withheld on the weak path at the end`,
     weak.state.withheld.includes(c.S.caseFacts.motivationItem) &&
     !strong.state.withheld.includes(c.S.caseFacts.motivationItem),
     `weak withheld [${weak.state.withheld.join(', ')}]`);

  ok(`${c.label}: DIFFERENT FINAL POSTURE`, strong.state.posture !== weak.state.posture,
     `${strong.state.posture} vs ${weak.state.posture}`);

  ok(`${c.label}: FINAL WILLINGNESS diverges by at least 15`,
     Math.abs(strong.state.willingness - weak.state.willingness) >= 15,
     `${strong.state.willingness} vs ${weak.state.willingness}`);

  const sObj = at(strong, 'decisionSupport'), wObj = at(weak, 'decisionSupport');
  ok(`${c.label}: DIFFERENT PHASE 7 OBJECTION VARIANT`, sObj.variant && wObj.variant && sObj.variant !== wObj.variant,
     `strong ${sObj.variant} vs weak ${wObj.variant}`);
  ok(`${c.label}: Phase 7 opens at a different intensity and she does not say the same thing`,
     sObj.objectionIntensity !== wObj.objectionIntensity && sObj.says !== wObj.says,
     `intensity ${sObj.objectionIntensity} vs ${wObj.objectionIntensity}`);
  ok(`${c.label}: DIFFERENT DECISION CONTEXT — the Phase 7 signal itself differs, not only the feedback`,
     JSON.stringify(sObj.notice) !== JSON.stringify(wObj.notice));

  const diverges = ['connection', 'discovery', 'understanding', 'education', 'recommendation', 'decisionSupport']
    .filter(k => at(strong, k).says !== at(weak, k).says);
  ok(`${c.label}: the consultations diverge at more than one later phase`, diverges.length >= 3, diverges.join(', '));

  ok(`${c.label}: the same toolkit work derives different outcomes from the two client states`,
     strong.derived !== weak.derived, `${strong.derived} vs ${weak.derived}`);

  // All three objection variants must be reachable, not just two.
  const variants = new Set();
  for (const flags of [{}, { pushed: true }, { overloaded: true }, { criticisedClinic: true }, { overpromised: true }]) {
    const s = clone(c.S.initialClientState()); s.flags = flags;
    const v = c.S.phases.decisionSupport.signal(s).objectionVariant;
    if (v) variants.add(v);
  }
  ok(`${c.label}: three distinct Phase 7 objection variants exist`, variants.size === 3, [...variants].join(', '));
}

// ---------------------------------------------------------------------------
sec('4. EXHAUSTIVE ENUMERATION — 3^7 = 2187 CONSULTATIONS PER CASE, OUTCOME DERIVED');

const distributions = {};
for (const c of CASES) {
  const optionIds = DECISION_PHASES.map(p => c.S.phases[p].decision.options.map(o => o.id));
  const dist = { YES: 0, DEFER: 0, NO: 0 };
  let total = 0;
  const idx = new Array(7).fill(0);

  const recurse = (depth, state) => {
    if (depth === 7) {
      total++;
      const out = decisionEngine.deriveOutcome(state, allToolkits, { voice: c.S.voice, motivationItem: c.S.caseFacts.motivationItem });
      dist[out.outcome]++;
      return;
    }
    for (const optId of optionIds[depth]) {
      const next = clone(state);
      c.S.resolveChoice(DECISION_PHASES[depth], optId, next);
      recurse(depth + 1, next);
    }
  };
  recurse(0, c.S.initialClientState());

  const pct = n => (100 * n / total);
  distributions[c.key] = { dist, total, pct: { YES: pct(dist.YES), DEFER: pct(dist.DEFER), NO: pct(dist.NO) } };

  console.log(`\n  ${c.label}   (${total} consultations enumerated)`);
  for (const k of ['YES', 'DEFER', 'NO']) {
    const bar = '█'.repeat(Math.round(pct(dist[k]) / 2));
    console.log(`    ${k.padEnd(6)} ${String(dist[k]).padStart(5)}   ${pct(dist[k]).toFixed(1).padStart(5)} %  ${bar}`);
  }

  ok(`${c.label}: every combination of the seven decisions was enumerated`, total === 2187, String(total));
  ok(`${c.label}: all three outcomes occur`, dist.YES > 0 && dist.DEFER > 0 && dist.NO > 0, JSON.stringify(dist));
}

ok('CASE 06 — NURIA: DEFER is the largest share, because a well-run consultation with an undecided client ends in a plan to decide',
   distributions['nuria-undecided'].dist.DEFER > distributions['nuria-undecided'].dist.YES &&
   distributions['nuria-undecided'].dist.DEFER > distributions['nuria-undecided'].dist.NO,
   `YES ${distributions['nuria-undecided'].pct.YES.toFixed(1)}% / DEFER ${distributions['nuria-undecided'].pct.DEFER.toFixed(1)}% / NO ${distributions['nuria-undecided'].pct.NO.toFixed(1)}%`);

ok('CASE 07 — TERESA: all three outcomes exceed 5 %',
   ['YES', 'DEFER', 'NO'].every(k => distributions['teresa-repair'].pct[k] > 5),
   `YES ${distributions['teresa-repair'].pct.YES.toFixed(1)}% / DEFER ${distributions['teresa-repair'].pct.DEFER.toFixed(1)}% / NO ${distributions['teresa-repair'].pct.NO.toFixed(1)}%`);

// ---------------------------------------------------------------------------
sec('5. EVERY MIRROR PRINCIPLE CITES A REAL CANONICAL ELEMENT');

const PHASE_NAMES_EN = canonical.PHASES.map(p => p.name);
const PHASE_NAMES_ES = canonical.PHASE_ORDER.map(k => canonical.ES.phases[k].name);
const CANON_EN = ['Trust Standard', 'Ethical Duty', 'Trust Stage', ...PHASE_NAMES_EN];
const CANON_ES = ['Estándar de Confianza', 'Deber Ético', 'Etapa de Confianza', ...PHASE_NAMES_ES];

// Cited labels must be real ones, not invented numbers.
const VALID_STD = Object.keys(canonical.TRUST_STANDARDS);
const VALID_DUTY = Object.keys(canonical.ETHICAL_DUTIES);

for (const c of CASES) {
  const bad = [], badNumbers = [];
  for (const phaseKey of DECISION_PHASES) {
    for (const o of c.S.phases[phaseKey].decision.options) {
      const p = o.mirror.principle;
      const en = txt(p), es = (p && p.es) || '';
      if (!CANON_EN.some(t => en.includes(t))) bad.push(`${o.id} (en)`);
      if (!CANON_ES.some(t => es.includes(t))) bad.push(`${o.id} (es)`);
      for (const m of en.matchAll(/Trust Standard (\d+)/g)) if (!VALID_STD.includes(m[1])) badNumbers.push(`${o.id}: TS${m[1]}`);
      for (const m of en.matchAll(/Ethical Duty (\d+)/g)) if (!VALID_DUTY.includes(m[1])) badNumbers.push(`${o.id}: ED${m[1]}`);
      for (const m of en.matchAll(/Trust Stage (\d+)/g)) if (Number(m[1]) < 1 || Number(m[1]) > 7) badNumbers.push(`${o.id}: TStage${m[1]}`);
    }
  }
  ok(`${c.label}: all 21 mirror principles cite a canonical element, in both languages`, bad.length === 0, bad.slice(0, 5).join(', '));
  ok(`${c.label}: every cited Trust Standard / Ethical Duty / Trust Stage number exists in the canon`, badNumbers.length === 0, badNumbers.join(', '));
}

// Duty 1 and Duty 4 must be live across Teresa's case.
const teresaPrinciples = DECISION_PHASES.flatMap(p => teresa.phases[p].decision.options.map(o => txt(o.mirror.principle)));
ok('CASE 07 — TERESA: Ethical Duty 1 (Do No Avoidable Harm) is live in the case',
   teresaPrinciples.filter(s => /Ethical Duty 1\b/.test(s)).length >= 3,
   `${teresaPrinciples.filter(s => /Ethical Duty 1\b/.test(s)).length} options cite it`);
ok('CASE 07 — TERESA: Ethical Duty 4 (Communicate Truthfully) is live in the case',
   teresaPrinciples.filter(s => /Ethical Duty 4\b/.test(s)).length >= 3,
   `${teresaPrinciples.filter(s => /Ethical Duty 4\b/.test(s)).length} options cite it`);
const commerciallyWrong = ['edu-promise', 'rec-fullfix', 'disc-criticise', 'dec-guarantee']
  .map(id => DECISION_PHASES.map(p => teresa.phases[p].decision.options.find(o => o.id === id)).find(Boolean))
  .filter(Boolean);
ok('CASE 07 — TERESA: the commercially attractive / ethically wrong options raise willingness AND damage the ledger, with the consequence spelled out',
   commerciallyWrong.length === 4 &&
   commerciallyWrong.every(o => o.mirror.alignment === 'NOT ALIGNED' && txt(o.mirror.consequence).length > 60) &&
   commerciallyWrong.filter(o => (o.effects.willingness || 0) > 0).length === 4,
   commerciallyWrong.map(o => `${o.id}:+${o.effects.willingness}`).join(' '));

// ---------------------------------------------------------------------------
sec('6. CASE FACTS MAKE THE TOOLKIT #3 VALIDATORS CASE-AWARE');

const REAL_MOTIVE = {
  'nuria-undecided': 'This appointment is the first thing she has booked for herself since the separation — it is about permission to want something that is only hers, not about texture.',
  'teresa-repair': 'She has not allowed a photograph of herself since March last year, stopped going to two things she used to go to, and has told nobody — eighteen months of hiding is what she is actually here to end.'
};
const LAZY_MOTIVE = {
  'nuria-undecided': 'She wants to look less tired and improve her skin.',
  'teresa-repair': 'She wants the asymmetry corrected and she is angry about it.'
};

for (const c of CASES) {
  const cs = c.S.initialClientState();
  cs.revealed = [c.S.caseFacts.motivationItem];
  const base = {
    visibleGoal: 'What she asked for when she sat down',
    emotionalConsequence: 'What happens for her if nothing changes at all',
    clientLanguage: '"' + txt(c.S.profile.visibleGoal).replace(/^"|"$/g, '') + '"'
  };
  const good = toolkits.executeToolkit(3, Object.assign({}, base, { hiddenMotivation: REAL_MOTIVE[c.key] }), clone(cs), {}, { caseFacts: c.S.caseFacts });
  const lazy = toolkits.executeToolkit(3, Object.assign({}, base, { hiddenMotivation: LAZY_MOTIVE[c.key] }), clone(cs), {}, { caseFacts: c.S.caseFacts });
  ok(`${c.label}: a real hidden-motivation entry PASSES Toolkit #3`, good.valid === true,
     (good.issues || []).map(i => txt(i)).join(' | '));
  ok(`${c.label}: a lazy hidden-motivation entry FAILS Toolkit #3 with the case-specific issue`,
     lazy.valid === false && (lazy.issues || []).some(i => txt(i) === txt(c.S.caseFacts.motiveIssue)),
     (lazy.issues || []).map(i => txt(i).slice(0, 60)).join(' | '));

  // And when nothing was disclosed, an invented motive must be refused.
  const csNone = c.S.initialClientState();
  const invented = toolkits.executeToolkit(3, Object.assign({}, base, { hiddenMotivation: REAL_MOTIVE[c.key] }), clone(csNone), {}, { caseFacts: c.S.caseFacts });
  const honest = toolkits.executeToolkit(3, Object.assign({}, base, { hiddenMotivation: 'Not disclosed — she never told me.' }), clone(csNone), {}, { caseFacts: c.S.caseFacts });
  ok(`${c.label}: recording an undisclosed motive as fact is refused`, invented.valid === false);
  ok(`${c.label}: recording "Not disclosed" honestly is accepted`, honest.valid === true,
     (honest.issues || []).map(i => txt(i)).join(' | '));
}

// ---------------------------------------------------------------------------
console.log('\n' + '═'.repeat(78));
console.log('OUTCOME DISTRIBUTIONS (2187 enumerated consultations per case)');
for (const c of CASES) {
  const d = distributions[c.key];
  console.log(`  ${c.label.padEnd(24)}  YES ${d.pct.YES.toFixed(1)}%   DEFER ${d.pct.DEFER.toFixed(1)}%   NO ${d.pct.NO.toFixed(1)}%`);
}
console.log('═'.repeat(78));
console.log(`RESULT: ${pass} passed, ${fail} failed`);
if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
console.log('═'.repeat(78));
process.exit(fail ? 1 : 0);
