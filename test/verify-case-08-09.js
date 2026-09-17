/**
 * CASE 08 (PILAR) AND CASE 09 (MARTA) — STRUCTURAL, BILINGUAL AND BRANCHING PROOF
 *
 * These two cases are not yet wired into server/scenario/index.js (that is done
 * separately), so this harness loads the scenario modules directly and drives the
 * real engines — no HTTP, no UI.
 *
 * What is asserted:
 *   1. the exported shape matches Beatriz key-for-key;
 *   2. every {en, es} leaf carries both languages, non-empty, and no Spanish
 *      string over 24 characters is byte-identical to its English;
 *   3. a STRONG and a WEAK path through each case produce materially different
 *      consultations — different disclosed information, different final posture,
 *      final willingness apart by >= 15, and a different Phase 7 objection
 *      variant — printed side by side;
 *   4. all 3^7 = 2187 combinations of the seven decisions are played out and the
 *      outcome derived by the Decision Engine with every required Toolkit valid;
 *      all three outcomes must occur, none below 3% or above 85%;
 *   5. for Marta, the final Relationship Continuum state differs between paths;
 *   6. every mirror.principle cites a real canonical element;
 *   7. each case's caseFacts make a real Toolkit #3 hidden-motivation entry pass
 *      the scenario-agnostic validator, and a lazy one fail.
 *
 * Run: node test/verify-case-08-09.js
 */

const path = require('path');
const canonical = require('../server/framework/canonical');
const decisionEngine = require('../server/engines/decisionEngine');
const toolkits = require('../server/toolkits/registry');

const beatriz = require('../server/scenario/beatrizScenario');
const pilar = require('../server/scenario/pilarScenario');
const marta = require('../server/scenario/martaScenario');

const clone = o => JSON.parse(JSON.stringify(o));
const txt = v => (typeof v === 'string' ? v : (v && v.en) || '');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => {
  if (c) { pass++; console.log(`  PASS  ${n}`); }
  else { fail++; failures.push(n + (d ? '  →  ' + d : '')); console.log(`  FAIL  ${n}${d ? '  →  ' + d : ''}`); }
};
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);

const PHASE_KEYS = ['preparation', 'connection', 'discovery', 'understanding', 'education', 'recommendation', 'decisionSupport', 'continuation'];
const DECISION_KEYS = PHASE_KEYS.slice(0, 7);
const ALL_TOOLKITS = { 1: { valid: true }, 3: { valid: true }, 4: { valid: true }, 5: { valid: true }, 6: { valid: true } };

const CASES = [
  {
    name: 'PILAR', id: 'pilar-thirdparty', mod: pilar,
    file: 'server/scenario/pilarScenario.js',
    strong: { preparation: 'prep-autonomy', connection: 'conn-her', discovery: 'disc-herview', understanding: 'und-separate', education: 'edu-showable', recommendation: 'rec-hers', decisionSupport: 'dec-autonomy' },
    weak: { preparation: 'prep-proxy', connection: 'conn-invite', discovery: 'disc-arm', understanding: 'und-echo', education: 'edu-pitch', recommendation: 'rec-couple', decisionSupport: 'dec-persuade' },
    goodMotive: 'She already spent 620 € on a salon course for the same area, it made zero difference, and she kept it from him — she cannot afford to be wrong twice.',
    lazyMotive: 'Her husband needs to approve it and he thinks it is expensive.'
  },
  {
    name: 'MARTA', id: 'marta-returning', mod: marta,
    file: 'server/scenario/martaScenario.js',
    strong: { preparation: 'prep-history', connection: 'conn-reset', discovery: 'disc-lastcourse', understanding: 'und-repair', education: 'edu-different', recommendation: 'rec-right', decisionSupport: 'dec-ask' },
    weak: { preparation: 'prep-memory', connection: 'conn-shortcut', discovery: 'disc-assume', understanding: 'und-reassure', education: 'edu-skip', recommendation: 'rec-upsell', decisionSupport: 'dec-loyalty' },
    goodMotive: 'She separated in February and now pays the flat on one salary; this is the first thing she has chosen for herself since.',
    lazyMotive: 'She wants to look younger along the jawline.'
  }
];

// ===========================================================================
// 1. EXPORTED SHAPE
// ===========================================================================
sec('1. EXPORTED SHAPE MATCHES THE BEATRIZ CONTRACT, KEY FOR KEY');

const beatrizKeys = Object.keys(beatriz).sort();
console.log(`  Beatriz exports: ${beatrizKeys.join(', ')}`);

for (const C of CASES) {
  const keys = Object.keys(C.mod).sort();
  ok(`${C.name}: exports exactly the same keys as Beatriz`,
     JSON.stringify(keys) === JSON.stringify(beatrizKeys),
     `${keys.join(', ')}`);
  ok(`${C.name}: every exported key has the same type as Beatriz's`,
     beatrizKeys.every(k => typeof C.mod[k] === typeof beatriz[k]),
     beatrizKeys.filter(k => typeof C.mod[k] !== typeof beatriz[k]).join(', ') || 'all match');
  ok(`${C.name}: eight canonical phases, in canonical order`,
     JSON.stringify(Object.keys(C.mod.phases)) === JSON.stringify(PHASE_KEYS),
     Object.keys(C.mod.phases).join(' → '));
  ok(`${C.name}: seven phases carry a decision, continuation carries none (as Beatriz)`,
     DECISION_KEYS.every(k => C.mod.phases[k].decision) && C.mod.phases.continuation.decision === null);
  ok(`${C.name}: every decision offers at least three options`,
     DECISION_KEYS.every(k => C.mod.phases[k].decision.options.length >= 3),
     DECISION_KEYS.map(k => `${k}:${C.mod.phases[k].decision.options.length}`).join(' '));
  ok(`${C.name}: every option carries id, label, language, mirror and effects`,
     DECISION_KEYS.every(k => C.mod.phases[k].decision.options.every(o =>
       o.id && o.label && o.language && o.mirror && o.effects &&
       o.mirror.signalDetected && o.mirror.interpretation && o.mirror.principle &&
       o.mirror.learnerDid && o.mirror.alignment && o.mirror.why && o.mirror.consequence)));
  const prefixOk = DECISION_KEYS.every((k, i) => {
    const pre = ['prep-', 'conn-', 'disc-', 'und-', 'edu-', 'rec-', 'dec-'][i];
    return C.mod.phases[k].decision.options.every(o => o.id.startsWith(pre));
  });
  ok(`${C.name}: option id prefixes follow prep- conn- disc- und- edu- rec- dec-`, prefixOk);

  // Toolkit attachment + real gates.
  const p = C.mod.phases;
  ok(`${C.name}: toolkit attachment — discovery #1, understanding #3, recommendation #4 (secondary #5), decisionSupport #6, continuation #8`,
     p.discovery.toolkit === 1 && p.understanding.toolkit === 3 &&
     p.recommendation.toolkit === 4 && p.recommendation.secondaryToolkit === 5 &&
     p.decisionSupport.toolkit === 6 && p.continuation.toolkit === 8,
     `${p.discovery.toolkit}/${p.understanding.toolkit}/${p.recommendation.toolkit}+${p.recommendation.secondaryToolkit}/${p.decisionSupport.toolkit}/${p.continuation.toolkit}`);

  const st = C.mod.initialClientState();
  const gatesBlock = ['discovery', 'understanding', 'recommendation', 'decisionSupport']
    .every(k => C.mod.gateFor(k, st, {}).canAdvance === false);
  const gatesOpen = ['discovery', 'understanding', 'recommendation', 'decisionSupport']
    .every(k => C.mod.gateFor(k, st, ALL_TOOLKITS).canAdvance === true);
  ok(`${C.name}: toolkit gates are real — they block without valid artifacts and open with them`, gatesBlock && gatesOpen);
  ok(`${C.name}: Toolkit #5 is independently gated at Recommendation (not merely advisory)`,
     C.mod.gateFor('recommendation', st, { 4: { valid: true } }).canAdvance === false);
}

// Case-specific opening ledger, as specified.
ok('PILAR: opens deferential at willingness 48 with three withheld items',
   pilar.initialClientState().posture === 'deferential' &&
   pilar.initialClientState().willingness === 48 &&
   JSON.stringify(pilar.initialClientState().withheld) === JSON.stringify(['previous_spend', 'not_told_him', 'own_view']));
ok('MARTA: opens familiar at willingness 65 — the highest opening willingness — already ACTIVE',
   marta.initialClientState().posture === 'familiar' &&
   marta.initialClientState().willingness === 65 &&
   marta.initialClientState().relationshipState === 'ACTIVE' &&
   marta.initialClientState().willingness > beatriz.initialClientState().willingness &&
   JSON.stringify(marta.initialClientState().withheld) === JSON.stringify(['unspoken_disappointment', 'changed_circumstances', 'considering_leaving']));

// ===========================================================================
// 2. BILINGUAL LEAVES
// ===========================================================================
sec('2. EVERY CLIENT-FACING STRING IS A REAL {en, es} PAIR');

function isLeaf(v) {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return false;
  const keys = Object.keys(v);
  return keys.length > 0 && keys.every(k => k === 'en' || k === 'es');
}

function walkLeaves(value, trail, out) {
  if (value === null || value === undefined) return;
  if (typeof value === 'function') return;
  if (Array.isArray(value)) { value.forEach((v, i) => walkLeaves(v, `${trail}[${i}]`, out)); return; }
  if (typeof value !== 'object') return;
  if (isLeaf(value)) { out.push({ trail, leaf: value }); return; }
  for (const k of Object.keys(value)) walkLeaves(value[k], `${trail}.${k}`, out);
}

/** Collect every signal the two paths and the exhaustive enumeration can produce. */
function collectSignalVariants(mod) {
  const seen = new Set(); const out = [];
  const push = (trail, sig) => {
    const key = trail + JSON.stringify(sig);
    if (!seen.has(key)) { seen.add(key); out.push({ trail, sig }); }
  };
  const total = Math.pow(3, DECISION_KEYS.length);
  for (let i = 0; i < total; i++) {
    let n = i; const cs = mod.initialClientState();
    for (const key of DECISION_KEYS) {
      const idx = n % 3; n = Math.floor(n / 3);
      const view = mod.getPhaseContent(key, cs);
      push(`signal(${key})`, view.clientSignal);
      mod.resolveChoice(key, mod.phases[key].decision.options[idx].id, cs);
    }
    push('signal(continuation)', mod.getPhaseContent('continuation', cs).clientSignal);
  }
  return out;
}

for (const C of CASES) {
  const leaves = [];
  walkLeaves(C.mod.profile, `${C.name}.profile`, leaves);
  walkLeaves(C.mod.intake, `${C.name}.intake`, leaves);
  walkLeaves(C.mod.voice, `${C.name}.voice`, leaves);
  walkLeaves(C.mod.caseFacts, `${C.name}.caseFacts`, leaves);
  for (const key of PHASE_KEYS) {
    const ph = C.mod.phases[key];
    if (ph.decision) walkLeaves(ph.decision, `${C.name}.phases.${key}.decision`, leaves);
  }
  for (const { trail, sig } of collectSignalVariants(C.mod)) walkLeaves(sig, `${C.name}.${trail}`, leaves);

  const missing = leaves.filter(l => !l.leaf.en || !l.leaf.es || !String(l.leaf.en).trim() || !String(l.leaf.es).trim());
  ok(`${C.name}: all ${leaves.length} bilingual leaves carry a non-empty en AND es`,
     missing.length === 0,
     missing.slice(0, 3).map(m => m.trail).join(' | '));

  const untranslated = leaves.filter(l => String(l.leaf.en).length > 24 && l.leaf.en === l.leaf.es);
  ok(`${C.name}: no Spanish string over 24 characters is byte-identical to its English`,
     untranslated.length === 0,
     untranslated.slice(0, 3).map(m => `${m.trail}: "${String(m.leaf.en).slice(0, 50)}"`).join(' | '));

  // A literal word-for-word rendering is not enough: check the Spanish actually
  // reads as Spanish rather than as an English string with accents bolted on.
  const esBody = leaves.map(l => l.leaf.es).join(' ');
  ok(`${C.name}: the Spanish body uses "«»" quotation marks and Spanish orthography`,
     esBody.includes('«') && esBody.includes('»') && /[¿¡ñáéíóú]/.test(esBody));
}

// ===========================================================================
// 3. MATERIAL BRANCHING — STRONG vs WEAK
// ===========================================================================
function play(mod, label, choices) {
  const state = mod.initialClientState();
  const log = { label, phases: [], state: null };
  for (const phaseKey of PHASE_KEYS) {
    const view = mod.getPhaseContent(phaseKey, state) || {};
    const signal = view.clientSignal || {};
    const entry = {
      phase: phaseKey,
      says: txt(signal.quote),
      subtext: txt(signal.subtext),
      variant: signal.objectionVariant || null,
      posture: state.posture,
      willingness: state.willingness,
      revealed: state.revealed.slice(),
      withheld: state.withheld.slice(),
      objectionIntensity: state.objectionIntensity,
      relationshipState: state.relationshipState
    };
    const chosen = choices[phaseKey];
    if (chosen && view.decision) {
      const resolved = mod.resolveChoice(phaseKey, chosen, state);
      entry.chose = chosen;
      entry.degraded = resolved.degraded;
      entry.material = txt(resolved.mirror && resolved.mirror.consequence);
    }
    log.phases.push(entry);
  }
  log.state = state;
  return log;
}

const at = (p, key) => p.phases.find(x => x.phase === key);

for (const C of CASES) {
  const strong = play(C.mod, 'STRONG EARLY CHOICES', C.strong);
  const weak = play(C.mod, 'WEAK EARLY CHOICES', C.weak);
  C.strongLog = strong; C.weakLog = weak;

  console.log(`\n\n${C.name} (${C.id}) — TWO CONSULTATIONS FROM THE SAME OPENING`);
  console.log('='.repeat(78));
  [strong, weak].forEach(p => {
    console.log(`\n${p.label}`);
    console.log('-'.repeat(p.label.length));
    p.phases.forEach(ph => {
      const cp = canonical.getPhase(ph.phase);
      console.log(`  ${cp.n} ${cp.name}`);
      if (ph.says) console.log(`      SHE SAYS    “${ph.says.slice(0, 116)}${ph.says.length > 116 ? '…' : ''}”`);
      console.log(`      STATE       ${ph.posture}, willingness ${ph.willingness}, objection ${ph.objectionIntensity}, relationship ${ph.relationshipState}, withheld [${ph.withheld.join(', ') || '—'}]`);
      if (ph.variant) console.log(`      OBJECTION   ${ph.variant} (intensity ${ph.objectionIntensity})`);
      if (ph.chose) console.log(`      CHOSE       ${ph.chose}${ph.degraded ? '  [DEGRADED — prerequisite never disclosed]' : ''}`);
      if (ph.material) console.log(`      CONSEQUENCE ${ph.material.slice(0, 150)}${ph.material.length > 150 ? '…' : ''}`);
    });
    console.log(`  FINAL         ${p.state.posture}, willingness ${p.state.willingness}, relationship ${p.state.relationshipState}`);
    console.log(`                revealed [${p.state.revealed.join(', ') || '—'}]  withheld [${p.state.withheld.join(', ') || '—'}]`);
  });

  sec(`3. ${C.name}: THE TWO CONSULTATIONS DIFFER MATERIALLY, NOT ONLY IN WORDING`);

  ok(`${C.name}: the two paths start from an identical client state`,
     at(strong, 'preparation').posture === at(weak, 'preparation').posture &&
     at(strong, 'preparation').willingness === at(weak, 'preparation').willingness);

  ok(`${C.name}: DIFFERENT DISCLOSED INFORMATION — the strong path unlocks what the weak path never hears`,
     strong.state.revealed.length === 3 && weak.state.revealed.length === 0,
     `strong [${strong.state.revealed.join(', ') || '—'}] vs weak [${weak.state.revealed.join(', ') || '—'}]`);

  ok(`${C.name}: the hidden motivation is still withheld on the weak path at the end`,
     weak.state.withheld.includes(C.mod.caseFacts.motivationItem) &&
     !strong.state.withheld.includes(C.mod.caseFacts.motivationItem),
     `weak withheld [${weak.state.withheld.join(', ')}]`);

  ok(`${C.name}: DIFFERENT FINAL POSTURE`,
     strong.state.posture !== weak.state.posture,
     `${strong.state.posture} vs ${weak.state.posture}`);

  ok(`${C.name}: DIFFERENT FINAL WILLINGNESS — apart by at least 15`,
     Math.abs(strong.state.willingness - weak.state.willingness) >= 15,
     `${strong.state.willingness} vs ${weak.state.willingness} (Δ ${Math.abs(strong.state.willingness - weak.state.willingness)})`);

  const sObj = at(strong, 'decisionSupport'), wObj = at(weak, 'decisionSupport');
  ok(`${C.name}: DIFFERENT PHASE 7 OBJECTION VARIANT`,
     !!sObj.variant && !!wObj.variant && sObj.variant !== wObj.variant,
     `strong ${sObj.variant} vs weak ${wObj.variant}`);
  ok(`${C.name}: DIFFERENT PHASE 7 OBJECTION INTENSITY`,
     sObj.objectionIntensity !== wObj.objectionIntensity,
     `strong ${sObj.objectionIntensity} vs weak ${wObj.objectionIntensity}`);
  ok(`${C.name}: DIFFERENT DECISION CONTEXT — she does not say the same thing at Phase 7`,
     sObj.says && wObj.says && sObj.says !== wObj.says);

  const divergesAt = ['connection', 'discovery', 'understanding', 'education', 'recommendation', 'decisionSupport', 'continuation']
    .filter(k => at(strong, k).says !== at(weak, k).says);
  ok(`${C.name}: the consultations diverge at more than one later phase`,
     divergesAt.length >= 3, divergesAt.join(', '));

  ok(`${C.name}: the trust ledger ends in a different place`,
     canonical.TRUST_STAGE_KEYS.some(k => strong.state.trust[k] !== weak.state.trust[k]),
     canonical.TRUST_STAGE_KEYS.map(k => `${k} ${strong.state.trust[k]}/${weak.state.trust[k]}`).join(' · '));

  const sOut = decisionEngine.deriveOutcome(strong.state, ALL_TOOLKITS, { voice: C.mod.voice, motivationItem: C.mod.caseFacts.motivationItem });
  const wOut = decisionEngine.deriveOutcome(weak.state, ALL_TOOLKITS, { voice: C.mod.voice, motivationItem: C.mod.caseFacts.motivationItem });
  console.log(`  strong path → ${sOut.outcome}   /   weak path → ${wOut.outcome}`);
  ok(`${C.name}: the same toolkit work derives different outcomes from the two ledgers`,
     sOut.outcome !== wOut.outcome, `${sOut.outcome} vs ${wOut.outcome}`);
  C.sOut = sOut; C.wOut = wOut;
}

// Case 09 only: the relationship itself is at stake.
sec('3b. MARTA: THE RELATIONSHIP CONTINUUM STATE IS AN OUTCOME OF THE CONSULTATION');
const M = CASES.find(c => c.name === 'MARTA');
console.log(`  strong path relationship → ${M.strongLog.state.relationshipState}`);
console.log(`  weak path relationship   → ${M.weakLog.state.relationshipState}`);
ok('MARTA: the final relationship state differs between the strong and weak paths',
   M.strongLog.state.relationshipState !== M.weakLog.state.relationshipState,
   `${M.strongLog.state.relationshipState} vs ${M.weakLog.state.relationshipState}`);
ok('MARTA: the strong path keeps an Active relationship; the weak path loses it',
   M.strongLog.state.relationshipState === 'ACTIVE' &&
   ['PAUSED', 'DORMANT'].includes(M.weakLog.state.relationshipState),
   `${M.strongLog.state.relationshipState} vs ${M.weakLog.state.relationshipState}`);
ok('MARTA: every relationship state used is a traced state on the MBOK Ch.6 continuum',
   [M.strongLog.state.relationshipState, M.weakLog.state.relationshipState, 'ACTIVE', 'PAUSED', 'DORMANT']
     .every(s => !!canonical.RELATIONSHIP_STATES[s]));
ok('MARTA: Phase 8 reads the relationship state — the continuation signal differs between the paths',
   JSON.stringify(M.mod.getPhaseContent('continuation', M.strongLog.state).clientSignal) !==
   JSON.stringify(M.mod.getPhaseContent('continuation', M.weakLog.state).clientSignal));
ok('MARTA: Phase 8 states the canonical Toolkit #17 gate (Active relationship management only, never at an immediate NO)',
   /#17[\s\S]*Active relationship management only[\s\S]*never at an immediate NO/i
     .test(txt(M.mod.getPhaseContent('continuation', M.strongLog.state).clientSignal.subtext)) ||
   /Toolkit #17/.test(M.mod.followUpPack.reviewNote) &&
   /Applies to Active relationship management only\. Never at immediate NO/.test(M.mod.followUpPack.reviewNote),
   canonical.TOOLKIT[17].gate);

// ===========================================================================
// 4. EXHAUSTIVE ENUMERATION
// ===========================================================================
sec('4. EVERY COMBINATION OF THE SEVEN DECISIONS (3^7 = 2187 PER CASE)');

for (const C of CASES) {
  const counts = { YES: 0, DEFER: 0, NO: 0 };
  const total = Math.pow(3, DECISION_KEYS.length);
  const relStates = {};
  for (let i = 0; i < total; i++) {
    let n = i; const cs = C.mod.initialClientState();
    for (const key of DECISION_KEYS) {
      const idx = n % 3; n = Math.floor(n / 3);
      C.mod.resolveChoice(key, C.mod.phases[key].decision.options[idx].id, cs);
    }
    const out = decisionEngine.deriveOutcome(cs, ALL_TOOLKITS, { voice: C.mod.voice, motivationItem: C.mod.caseFacts.motivationItem });
    counts[out.outcome]++;
    relStates[cs.relationshipState] = (relStates[cs.relationshipState] || 0) + 1;
  }
  const pct = k => (100 * counts[k] / total);
  C.dist = { counts, total, pct: { YES: pct('YES'), DEFER: pct('DEFER'), NO: pct('NO') } };

  console.log(`\n  ${C.name} — ${total} consultations played, outcome derived from the ledger each time:`);
  for (const k of ['YES', 'DEFER', 'NO']) {
    const bar = '█'.repeat(Math.max(1, Math.round(pct(k) / 2)));
    console.log(`     ${k.padEnd(6)} ${String(counts[k]).padStart(5)}   ${pct(k).toFixed(1).padStart(5)}%  ${bar}`);
  }
  console.log(`     relationship states reached: ${Object.entries(relStates).map(([k, v]) => `${k} ${v}`).join(', ')}`);

  ok(`${C.name}: all three outcomes occur across the decision space`,
     counts.YES > 0 && counts.DEFER > 0 && counts.NO > 0, JSON.stringify(counts));
  ok(`${C.name}: no outcome is below 3% of the decision space`,
     pct('YES') >= 3 && pct('DEFER') >= 3 && pct('NO') >= 3,
     `YES ${pct('YES').toFixed(1)}% DEFER ${pct('DEFER').toFixed(1)}% NO ${pct('NO').toFixed(1)}%`);
  ok(`${C.name}: no outcome exceeds 85% of the decision space`,
     pct('YES') <= 85 && pct('DEFER') <= 85 && pct('NO') <= 85,
     `YES ${pct('YES').toFixed(1)}% DEFER ${pct('DEFER').toFixed(1)}% NO ${pct('NO').toFixed(1)}%`);
}
ok('MARTA: the decision space reaches more than one Relationship Continuum state',
   true === (() => {
     const seen = new Set();
     const total = Math.pow(3, DECISION_KEYS.length);
     for (let i = 0; i < total; i++) {
       let n = i; const cs = marta.initialClientState();
       for (const key of DECISION_KEYS) { const idx = n % 3; n = Math.floor(n / 3); marta.resolveChoice(key, marta.phases[key].decision.options[idx].id, cs); }
       seen.add(cs.relationshipState);
     }
     return seen.size > 1;
   })());

// ===========================================================================
// 5. CANONICAL CITATIONS
// ===========================================================================
sec('5. EVERY MIRROR PRINCIPLE CITES A REAL CANONICAL ELEMENT');

const PHASE_NAMES = canonical.PHASES.map(p => p.name);
const CANON_RX = new RegExp(
  '(Trust Standard|Ethical Duty|Trust Stage|Phase \\d|' + PHASE_NAMES.join('|') + ')');

for (const C of CASES) {
  const bad = [];
  const badLabels = [];
  for (const key of DECISION_KEYS) {
    for (const o of C.mod.phases[key].decision.options) {
      const en = txt(o.mirror.principle);
      const es = (o.mirror.principle && o.mirror.principle.es) || '';
      if (!CANON_RX.test(en)) bad.push(`${key}/${o.id}: "${en}"`);
      if (!es || es === en) badLabels.push(`${key}/${o.id}`);
      // Canonical numbering must be in range.
      for (const m of en.matchAll(/Trust Standard (\d+)/g)) if (!canonical.TRUST_STANDARDS[m[1]]) bad.push(`${key}/${o.id}: Trust Standard ${m[1]} does not exist`);
      for (const m of en.matchAll(/Ethical Duty (\d+)/g)) if (!canonical.ETHICAL_DUTIES[m[1]]) bad.push(`${key}/${o.id}: Ethical Duty ${m[1]} does not exist`);
      for (const m of en.matchAll(/Trust Stage (\d+)/g)) if (!Object.values(canonical.TRUST_STAGES).some(s => String(s.n) === m[1])) bad.push(`${key}/${o.id}: Trust Stage ${m[1]} does not exist`);
    }
  }
  ok(`${C.name}: all 21 mirror.principle lines cite a real phase, Trust Standard, Ethical Duty or Trust Stage`,
     bad.length === 0, bad.slice(0, 3).join(' | '));
  ok(`${C.name}: every mirror.principle is rendered in Spanish as well as English`,
     badLabels.length === 0, badLabels.slice(0, 3).join(' | '));
}

// Case 08 spine.
const P = CASES.find(c => c.name === 'PILAR');
const pilarDuty2 = DECISION_KEYS.filter(k =>
  P.mod.phases[k].decision.options.some(o => /Ethical Duty 2/.test(txt(o.mirror.principle))));
ok('PILAR: Ethical Duty 2 (Respect Autonomy) is the spine — it is cited in at least six of the seven decision phases',
   pilarDuty2.length >= 6, pilarDuty2.join(', '));

// ===========================================================================
// 6. CASE-AWARE TOOLKIT VALIDATION
// ===========================================================================
sec('6. caseFacts MAKE THE TOOLKIT #3 VALIDATOR CASE-AWARE');

for (const C of CASES) {
  // Play the strong path so the motivation is genuinely disclosed.
  const cs = C.mod.initialClientState();
  for (const key of DECISION_KEYS) C.mod.resolveChoice(key, C.strong[key], cs);

  const base = {
    visibleGoal: 'What she asked for when she walked in',
    emotionalConsequence: 'What happens for her if nothing changes at all this year',
    desiredFeeling: 'Recognised', influencingPeople: 'Recorded',
    clientLanguage: '"' + txt(C.mod.profile.visibleGoal).slice(0, 80) + '"'
  };
  const good = toolkits.executeToolkit(3, Object.assign({}, base, { hiddenMotivation: C.goodMotive }), clone(cs), {}, { caseFacts: C.mod.caseFacts });
  const lazy = toolkits.executeToolkit(3, Object.assign({}, base, { hiddenMotivation: C.lazyMotive }), clone(cs), {}, { caseFacts: C.mod.caseFacts });

  ok(`${C.name}: a real hidden-motivation entry passes Toolkit #3`,
     good.valid === true, JSON.stringify(good.issues && good.issues.map(txt)));
  ok(`${C.name}: a lazy hidden-motivation entry fails Toolkit #3 with the case-specific issue`,
     lazy.valid === false && (lazy.issues || []).some(i => txt(i) === txt(C.mod.caseFacts.motiveIssue)),
     JSON.stringify((lazy.issues || []).map(txt)));

  // And an inferred motivation, recorded as fact when nothing was disclosed, is refused.
  const csWeak = C.mod.initialClientState();
  for (const key of DECISION_KEYS) C.mod.resolveChoice(key, C.weak[key], csWeak);
  const invented = toolkits.executeToolkit(3, Object.assign({}, base, { hiddenMotivation: C.goodMotive }), clone(csWeak), {}, { caseFacts: C.mod.caseFacts });
  ok(`${C.name}: recording an inferred motive as fact after the weak path is refused`,
     invented.valid === false &&
     (invented.issues || []).some(i => txt(i) === txt(C.mod.caseFacts.undisclosedMotiveIssue)),
     JSON.stringify((invented.issues || []).map(txt)).slice(0, 160));
}

// ===========================================================================
console.log('\n' + '═'.repeat(64));
console.log('OUTCOME DISTRIBUTIONS (derived, never chosen)');
for (const C of CASES) {
  console.log(`  ${C.name.padEnd(6)} ${C.id.padEnd(20)} YES ${C.dist.pct.YES.toFixed(1)}%  DEFER ${C.dist.pct.DEFER.toFixed(1)}%  NO ${C.dist.pct.NO.toFixed(1)}%   (n=${C.dist.total})`);
  console.log(`         strong → ${C.sOut.outcome}, weak → ${C.wOut.outcome}`);
}
console.log('═'.repeat(64));
console.log(`RESULT: ${pass} passed, ${fail} failed`);
if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
console.log('═'.repeat(64));
process.exit(fail ? 1 : 0);
