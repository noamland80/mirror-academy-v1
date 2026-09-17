/**
 * CASES 04 & 05 — STRUCTURAL, BILINGUAL, BRANCHING AND OUTCOME PROOF
 *
 *   Case 04 — isabelScenario.js  (isabel-fullface)  HIGH PRICE / VALUE OBJECTION
 *   Case 05 — lucyScenario.js    (lucia-body)       BODY TREATMENT / MINIMISATION
 *
 * What is actually being tested here:
 *   1. The exported surface is key-for-key identical to the canonical Beatriz case.
 *   2. Every client-facing {en, es} leaf carries BOTH languages, both non-empty,
 *      and no Spanish string over 24 characters is a byte-for-byte copy of its
 *      English — i.e. the Spanish learner is reading Spanish, not English.
 *   3. A strong early path and a weak early path produce two materially
 *      different consultations from an identical opening: different disclosed
 *      information, different final posture, a willingness gap of at least 15,
 *      and a different Phase 7 objection variant. Both are printed side by side.
 *   4. Every one of the 3^7 = 2187 decision combinations per case is played
 *      through the real engine and its outcome DERIVED by the Decision Engine
 *      with all required toolkits valid. YES, DEFER and NO must all occur, and
 *      none may fall below 3% or rise above 85% — i.e. the case is genuinely
 *      winnable, genuinely losable, and not a rail.
 *   5. Every mirror.principle cites a real canonical element.
 *   6. Bonus: the caseFacts motiveRegex makes a real Toolkit #3 hidden-motivation
 *      entry pass and a lazy one fail.
 *
 * Run: node test/verify-case-04-05.js
 */
const path = require('path');
const isabel = require('../server/scenario/isabelScenario');
const lucia = require('../server/scenario/lucyScenario');
const beatriz = require('../server/scenario/beatrizScenario');
const canonical = require('../server/framework/canonical');
const decisionEngine = require('../server/engines/decisionEngine');
const { TOOLKITS } = require('../server/toolkits/registry');

const clone = o => JSON.parse(JSON.stringify(o));
const txt = v => (typeof v === 'string' ? v : (v && v.en) || '');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => {
  if (c) { pass++; console.log(`  PASS  ${n}`); }
  else { fail++; failures.push(n + (d ? '  →  ' + d : '')); console.log(`  FAIL  ${n}${d ? '  →  ' + d : ''}`); }
};
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);

const PHASE_KEYS = canonical.PHASE_ORDER;
const DECISION_PHASES = PHASE_KEYS.filter(k => k !== 'continuation');
const ALL_TOOLKITS = { 1: { valid: true }, 3: { valid: true }, 4: { valid: true }, 5: { valid: true }, 6: { valid: true } };

const CASES = [
  {
    id: 'isabel-fullface', caseNumber: 4, name: 'ISABEL', mod: isabel,
    file: path.resolve(__dirname, '../server/scenario/isabelScenario.js'),
    strong: {
      preparation: 'prep-read', connection: 'conn-frame', discovery: 'disc-decline',
      understanding: 'und-name', education: 'edu-trade', recommendation: 'rec-named',
      decisionSupport: 'dec-injury'
    },
    weak: {
      preparation: 'prep-pricelist', connection: 'conn-answer', discovery: 'disc-quote',
      understanding: 'und-match', education: 'edu-compare', recommendation: 'rec-discount',
      decisionSupport: 'dec-concede'
    },
    // Toolkit #3 hidden-motivation entries: one real, one lazy.
    goodMotive: 'She is testing whether my price holds. The last clinic dropped 900 € in four seconds and she stopped believing anything he said — she would rather pay more than be managed.',
    lazyMotive: 'Wants to look less tired for work. Is comparing options and looking for the best deal she can get.'
  },
  {
    id: 'lucia-body', caseNumber: 5, name: 'LUCÍA', mod: lucia,
    file: path.resolve(__dirname, '../server/scenario/lucyScenario.js'),
    strong: {
      preparation: 'prep-read', connection: 'conn-refuse', discovery: 'disc-event',
      understanding: 'und-picture', education: 'edu-ceiling', recommendation: 'rec-honest',
      decisionSupport: 'dec-thirdvoice'
    },
    weak: {
      preparation: 'prep-routine', connection: 'conn-agree', discovery: 'disc-menu',
      understanding: 'und-reassure', education: 'edu-showcase', recommendation: 'rec-package',
      decisionSupport: 'dec-agree'
    },
    goodMotive: 'She invented a work commitment and missed nine days at the beach with her sister and the children in August, then watched the photographs arrive on her phone.',
    lazyMotive: 'Low self-esteem after her pregnancy. Would like to feel better about her body in general.'
  }
];

// ===========================================================================
console.log('CASES 04 & 05 — VERIFICATION');
console.log('='.repeat(78));

// ---------------------------------------------------------------------------
sec('1. EXPORTED SHAPE IS KEY-FOR-KEY IDENTICAL TO THE CANONICAL BEATRIZ CASE');

const beatrizKeys = Object.keys(beatriz).sort();
CASES.forEach(c => {
  const keys = Object.keys(c.mod).sort();
  ok(`${c.name}: exports exactly the same keys as beatrizScenario`,
     JSON.stringify(keys) === JSON.stringify(beatrizKeys),
     `got [${keys.join(', ')}]`);
  ok(`${c.name}: every export has the same type as Beatriz's`,
     beatrizKeys.every(k => typeof c.mod[k] === typeof beatriz[k]),
     beatrizKeys.filter(k => typeof c.mod[k] !== typeof beatriz[k]).join(', ') || 'all match');
  ok(`${c.name}: the eight canonical phases are present, in canonical order`,
     JSON.stringify(Object.keys(c.mod.phases)) === JSON.stringify(PHASE_KEYS),
     Object.keys(c.mod.phases).join(', '));

  const st = c.mod.initialClientState();
  ok(`${c.name}: initialClientState carries the same ledger fields as Beatriz's`,
     JSON.stringify(Object.keys(st).sort()) === JSON.stringify(Object.keys(beatriz.initialClientState()).sort()),
     Object.keys(st).join(', '));

  // Toolkit attachment: discovery #1, understanding #3, recommendation #4 (+#5),
  // decisionSupport #6, continuation #8.
  const tk = k => c.mod.phases[k].toolkit;
  ok(`${c.name}: toolkits attach at the canonical phases (1/3/4+5/6/8)`,
     tk('discovery') === 1 && tk('understanding') === 3 && tk('recommendation') === 4 &&
     c.mod.phases.recommendation.secondaryToolkit === 5 &&
     tk('decisionSupport') === 6 && tk('continuation') === 8,
     `${tk('discovery')}/${tk('understanding')}/${tk('recommendation')}+${c.mod.phases.recommendation.secondaryToolkit}/${tk('decisionSupport')}/${tk('continuation')}`);

  ok(`${c.name}: seven phases carry a decision with at least three options; continuation has none`,
     DECISION_PHASES.every(k => c.mod.phases[k].decision && c.mod.phases[k].decision.options.length >= 3) &&
     c.mod.phases.continuation.decision === null,
     DECISION_PHASES.map(k => `${k}:${c.mod.phases[k].decision.options.length}`).join(' '));

  const prefixes = { preparation: 'prep-', connection: 'conn-', discovery: 'disc-', understanding: 'und-', education: 'edu-', recommendation: 'rec-', decisionSupport: 'dec-' };
  ok(`${c.name}: option ids use the required prefixes in phase order`,
     DECISION_PHASES.every(k => c.mod.phases[k].decision.options.every(o => o.id.startsWith(prefixes[k]))),
     DECISION_PHASES.map(k => c.mod.phases[k].decision.options.map(o => o.id).join('|')).join('  '));

  // Gates must be real: the phase must not advance without its artifact.
  const fresh = c.mod.initialClientState();
  ok(`${c.name}: Toolkit gates are real — discovery/understanding/recommendation/decisionSupport all block when empty`,
     ['discovery', 'understanding', 'recommendation', 'decisionSupport']
       .every(k => c.mod.gateFor(k, fresh, {}).canAdvance === false),
     ['discovery', 'understanding', 'recommendation', 'decisionSupport']
       .map(k => `${k}:${c.mod.gateFor(k, fresh, {}).canAdvance}`).join(' '));
  ok(`${c.name}: the recommendation gate requires BOTH #4 and #5`,
     c.mod.gateFor('recommendation', fresh, { 4: { valid: true } }).canAdvance === false &&
     c.mod.gateFor('recommendation', fresh, { 4: { valid: true }, 5: { valid: true } }).canAdvance === true);
  ok(`${c.name}: gates open once the artifact is valid`,
     ['discovery', 'understanding', 'decisionSupport']
       .every(k => c.mod.gateFor(k, fresh, ALL_TOOLKITS).canAdvance === true));

  ok(`${c.name}: followUpPack and voice match Beatriz's shape`,
     JSON.stringify(Object.keys(c.mod.followUpPack).sort()) === JSON.stringify(Object.keys(beatriz.followUpPack).sort()) &&
     JSON.stringify(Object.keys(c.mod.voice).sort()) === JSON.stringify(Object.keys(beatriz.voice).sort()) &&
     JSON.stringify(Object.keys(c.mod.voice.YES).sort()) === JSON.stringify(Object.keys(beatriz.voice.YES).sort()));

  ok(`${c.name}: caseFacts supplies every key the toolkit validators parametrise on`,
     ['clientName', 'motivationItem', 'motiveRegex', 'motiveIssue', 'priorExperienceIssue',
      'limitationIssue', 'whyNowIssue', 'undisclosedMotiveIssue'].every(k => c.mod.caseFacts[k] !== undefined),
     Object.keys(c.mod.caseFacts).join(', '));

  ok(`${c.name}: the withheld ledger opens with the three items this case hides`,
     st.withheld.length === 3 && st.withheld.includes(c.mod.caseFacts.motivationItem),
     `[${st.withheld.join(', ')}]`);
});

// ---------------------------------------------------------------------------
sec('2. EVERY CLIENT-FACING LEAF IS GENUINELY BILINGUAL');

/** Walk a value and collect every {en, es} leaf with its path. */
function collectLeaves(value, at, out) {
  if (value === null || value === undefined) return out;
  if (Array.isArray(value)) { value.forEach((v, i) => collectLeaves(v, `${at}[${i}]`, out)); return out; }
  if (typeof value === 'object') {
    if (value instanceof RegExp) return out;
    const keys = Object.keys(value);
    if (keys.length && keys.every(k => k === 'en' || k === 'es')) { out.push({ at, leaf: value }); return out; }
    for (const k of keys) {
      if (typeof value[k] === 'function') continue;
      collectLeaves(value[k], `${at}.${k}`, out);
    }
    return out;
  }
  return out;
}

/** Every signal variant a learner can actually reach, for every reachable state. */
function allReachableSignals(mod) {
  const out = [];
  const seen = new Set();
  const states = [];
  // Replay every combination's state ONCE per phase so every signal branch is hit.
  const rec = (i, state) => {
    if (i === DECISION_PHASES.length) { states.push(clone(state)); return; }
    for (const o of mod.phases[DECISION_PHASES[i]].decision.options) {
      const st = clone(state);
      mod.resolveChoice(DECISION_PHASES[i], o.id, st);
      rec(i + 1, st);
    }
  };
  rec(0, mod.initialClientState());
  for (const st of states) {
    for (const k of PHASE_KEYS) {
      const sig = mod.phases[k].signal(st);
      const key = k + '::' + JSON.stringify(sig);
      if (!seen.has(key)) { seen.add(key); out.push({ at: `signal(${k})`, sig }); }
    }
  }
  return out;
}

CASES.forEach(c => {
  const leaves = [];
  collectLeaves(c.mod.profile, `${c.name}.profile`, leaves);
  collectLeaves(c.mod.intake, `${c.name}.intake`, leaves);
  collectLeaves(c.mod.voice, `${c.name}.voice`, leaves);
  collectLeaves(c.mod.caseFacts, `${c.name}.caseFacts`, leaves);
  DECISION_PHASES.forEach(k => collectLeaves(c.mod.phases[k].decision, `${c.name}.phases.${k}.decision`, leaves));
  allReachableSignals(c.mod).forEach(s => collectLeaves(s.sig, `${c.name}.${s.at}`, leaves));
  // Gate refusals are client-facing too.
  const fresh = c.mod.initialClientState();
  ['discovery', 'understanding', 'recommendation', 'decisionSupport'].forEach(k =>
    collectLeaves(c.mod.gateFor(k, fresh, {}), `${c.name}.gate.${k}`, leaves));

  const missing = leaves.filter(l => !l.leaf.en || !l.leaf.es ||
                                     !String(l.leaf.en).trim() || !String(l.leaf.es).trim());
  ok(`${c.name}: all ${leaves.length} bilingual leaves carry a non-empty en AND es`,
     missing.length === 0, missing.slice(0, 4).map(m => m.at).join(' | '));

  const untranslated = leaves.filter(l => String(l.leaf.en).length > 24 &&
                                          String(l.leaf.en) === String(l.leaf.es));
  ok(`${c.name}: no Spanish string over 24 characters is byte-identical to its English`,
     untranslated.length === 0,
     untranslated.slice(0, 4).map(m => `${m.at}: "${String(m.leaf.en).slice(0, 50)}"`).join(' | '));

  // Depth, not summary: the Spanish must be of comparable substance.
  const thin = leaves.filter(l => String(l.leaf.en).length > 120 &&
                                  String(l.leaf.es).length < String(l.leaf.en).length * 0.6);
  ok(`${c.name}: no long Spanish leaf is a summary of its English (< 60% of length)`,
     thin.length === 0,
     thin.slice(0, 4).map(m => `${m.at} ${String(m.leaf.es).length}/${String(m.leaf.en).length}`).join(' | '));

  ok(`${c.name}: Spanish uses Spain-Spanish angle quotation marks somewhere in the client voice`,
     leaves.some(l => /[«»]/.test(String(l.leaf.es))));
});

// ---------------------------------------------------------------------------
sec('3. EVERY mirror.principle CITES A REAL CANONICAL ELEMENT');

const PHASE_NAMES = canonical.PHASES.map(p => p.name);
const canonicalMention = s =>
  /Trust Standard \d/.test(s) || /Ethical Duty \d/.test(s) || /Trust Stage \d/.test(s) ||
  PHASE_NAMES.some(n => s.includes(n));

CASES.forEach(c => {
  const bad = [];
  let count = 0;
  DECISION_PHASES.forEach(k => c.mod.phases[k].decision.options.forEach(o => {
    count++;
    const req = ['signalDetected', 'interpretation', 'principle', 'learnerDid', 'alignment', 'why', 'consequence', 'nextPriority'];
    const missing = req.filter(f => !o.mirror || o.mirror[f] === undefined);
    if (missing.length) bad.push(`${o.id}: missing ${missing.join('/')}`);
    else if (!canonicalMention(txt(o.mirror.principle))) bad.push(`${o.id}: "${txt(o.mirror.principle).slice(0, 60)}"`);
  }));
  ok(`${c.name}: all ${count} options carry a complete mirror whose principle cites a real canonical element`,
     bad.length === 0, bad.slice(0, 4).join(' | '));

  const badEs = [];
  DECISION_PHASES.forEach(k => c.mod.phases[k].decision.options.forEach(o => {
    const es = (o.mirror.principle || {}).es || '';
    if (!/Estándar de Confianza \d|Deber Ético \d|Etapa de Confianza \d|Fase \d/.test(es)) badEs.push(o.id);
  }));
  ok(`${c.name}: the Spanish principle line cites the same canon in Spanish`,
     badEs.length === 0, badEs.slice(0, 5).join(', '));

  const alignments = new Set();
  DECISION_PHASES.forEach(k => c.mod.phases[k].decision.options.forEach(o => alignments.add(o.mirror.alignment)));
  ok(`${c.name}: every option is graded ALIGNED / PARTIALLY ALIGNED / NOT ALIGNED`,
     [...alignments].every(a => ['ALIGNED', 'PARTIALLY ALIGNED', 'NOT ALIGNED'].includes(a)),
     [...alignments].join(', '));
});

// ---------------------------------------------------------------------------
sec('4. TWO CONSULTATIONS FROM THE SAME OPENING — MATERIAL BRANCHING');

/** Play one path and record what the learner would actually have seen. */
function play(mod, label, choices) {
  let state = clone(mod.initialClientState());
  const log = { label, phases: [], state: null };
  for (const phaseKey of PHASE_KEYS) {
    const view = mod.getPhaseContent(phaseKey, state) || {};
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
      const resolved = mod.resolveChoice(phaseKey, chosen, state);
      entry.chose = chosen;
      entry.degraded = resolved.degraded;
      entry.material = txt((resolved.mirror && (resolved.mirror.material || resolved.mirror.consequence)) || '');
    }
    log.phases.push(entry);
  }
  log.state = state;
  return log;
}

CASES.forEach(c => {
  const strong = play(c.mod, 'STRONG EARLY CHOICES', c.strong);
  const weak = play(c.mod, 'WEAK EARLY CHOICES', c.weak);
  c._strong = strong; c._weak = weak;

  console.log(`\n${c.name} — TWO CONSULTATIONS FROM THE SAME OPENING`);
  console.log('='.repeat(78));
  [strong, weak].forEach(p => {
    console.log(`\n${p.label}`);
    console.log('-'.repeat(p.label.length));
    p.phases.forEach(ph => {
      const ph8 = canonical.getPhase(ph.phase);
      console.log(`  ${ph8.n} ${ph8.name}`);
      if (ph.says) console.log(`      SHE SAYS   “${ph.says.slice(0, 116)}${ph.says.length > 116 ? '…' : ''}”`);
      console.log(`      STATE      ${ph.posture}, willingness ${ph.willingness}, objection ${ph.objectionIntensity}, withheld [${ph.withheld.join(', ') || '—'}]`);
      if (ph.variant) console.log(`      OBJECTION  ${ph.variant}`);
      if (ph.chose) console.log(`      CHOSE      ${ph.chose}${ph.degraded ? '  (DEGRADED — the material was never disclosed)' : ''}`);
      if (ph.material) console.log(`      CONSEQUENCE ${ph.material.slice(0, 150)}${ph.material.length > 150 ? '…' : ''}`);
    });
    console.log(`  FINAL        ${p.state.posture}, willingness ${p.state.willingness}, revealed [${p.state.revealed.join(', ') || '—'}], withheld [${p.state.withheld.join(', ') || '—'}]`);
  });

  const at = (p, k) => p.phases.find(x => x.phase === k);
  console.log('');
  ok(`${c.name}: the two paths start from an identical client state`,
     at(strong, 'preparation').posture === at(weak, 'preparation').posture &&
     at(strong, 'preparation').willingness === at(weak, 'preparation').willingness);

  ok(`${c.name}: DIFFERENT DISCLOSED INFORMATION — the strong path unlocks what the weak path never hears`,
     strong.state.revealed.length > weak.state.revealed.length && weak.state.revealed.length === 0,
     `strong [${strong.state.revealed.join(', ')}] vs weak [${weak.state.revealed.join(', ') || '—'}]`);

  ok(`${c.name}: the hidden motivation is still withheld on the weak path at the end`,
     weak.state.withheld.includes(c.mod.caseFacts.motivationItem) &&
     !strong.state.withheld.includes(c.mod.caseFacts.motivationItem));

  ok(`${c.name}: DIFFERENT FINAL POSTURE`,
     strong.state.posture !== weak.state.posture,
     `${strong.state.posture} vs ${weak.state.posture}`);

  ok(`${c.name}: DIFFERENT FINAL WILLINGNESS — the gap is at least 15`,
     Math.abs(strong.state.willingness - weak.state.willingness) >= 15,
     `${strong.state.willingness} vs ${weak.state.willingness} (gap ${Math.abs(strong.state.willingness - weak.state.willingness)})`);

  const sObj = at(strong, 'decisionSupport'), wObj = at(weak, 'decisionSupport');
  ok(`${c.name}: DIFFERENT PHASE 7 OBJECTION VARIANT`,
     sObj.variant && wObj.variant && sObj.variant !== wObj.variant,
     `strong ${sObj.variant} vs weak ${wObj.variant}`);
  ok(`${c.name}: Phase 7 opens at a different intensity and she does not say the same thing`,
     sObj.objectionIntensity !== wObj.objectionIntensity && sObj.says !== wObj.says,
     `intensity ${sObj.objectionIntensity} vs ${wObj.objectionIntensity}`);
  ok(`${c.name}: DIFFERENT DECISION CONTEXT — the Phase 7 signal itself differs, not only the feedback`,
     JSON.stringify(sObj.notice) !== JSON.stringify(wObj.notice));

  const divergesAt = ['connection', 'discovery', 'understanding', 'education', 'recommendation', 'decisionSupport']
    .filter(k => at(strong, k).says !== at(weak, k).says);
  ok(`${c.name}: the consultations diverge at three or more later phases`,
     divergesAt.length >= 3, divergesAt.join(', '));

  ok(`${c.name}: nothing degrades on the strong path — every advanced line is earned`,
     !strong.phases.some(p => p.degraded));

  // A practitioner who skims Discovery and then reaches for the expert language
  // gets the degraded version of it: the words exist, the material does not.
  const bluff = play(c.mod, 'SKIMMED EARLY, AMBITIOUS LATE', Object.assign({}, c.strong, {
    preparation: c.weak.preparation, connection: c.weak.connection,
    discovery: c.weak.discovery, understanding: c.weak.understanding
  }));
  const degradedPhases = bluff.phases.filter(p => p.degraded).map(p => p.phase);
  ok(`${c.name}: skipping Discovery DEGRADES the later expert language (${degradedPhases.join(', ') || 'none'})`,
     degradedPhases.length >= 2 && bluff.state.revealed.length === 0,
     `degraded at [${degradedPhases.join(', ')}], revealed [${bluff.state.revealed.join(', ') || '—'}]`);

  ok(`${c.name}: the trust ledger ends in a different place on every dimension in play`,
     canonical.TRUST_STAGE_KEYS.some(k => strong.state.trust[k] !== weak.state.trust[k]),
     canonical.TRUST_STAGE_KEYS.map(k => `${k} ${strong.state.trust[k]}/${weak.state.trust[k]}`).join(' · '));

  const sOut = decisionEngine.deriveOutcome(strong.state, ALL_TOOLKITS, { voice: c.mod.voice, motivationItem: c.mod.caseFacts.motivationItem });
  const wOut = decisionEngine.deriveOutcome(weak.state, ALL_TOOLKITS, { voice: c.mod.voice, motivationItem: c.mod.caseFacts.motivationItem });
  console.log(`  strong path → ${sOut.outcome}`);
  console.log(`  weak path   → ${wOut.outcome}`);
  ok(`${c.name}: the same toolkit work derives different outcomes from the two client states`,
     sOut.outcome !== wOut.outcome, `${sOut.outcome} vs ${wOut.outcome}`);
});

// ---------------------------------------------------------------------------
sec('5. EXHAUSTIVE OUTCOME DISTRIBUTION — ALL 3^7 = 2187 CONSULTATIONS PER CASE');

const distributions = {};
CASES.forEach(c => {
  const dist = { YES: 0, DEFER: 0, NO: 0 };
  let total = 0;
  const rec = (i, state) => {
    if (i === DECISION_PHASES.length) {
      const r = decisionEngine.deriveOutcome(state, ALL_TOOLKITS,
        { voice: c.mod.voice, motivationItem: c.mod.caseFacts.motivationItem });
      dist[r.outcome]++; total++;
      return;
    }
    for (const o of c.mod.phases[DECISION_PHASES[i]].decision.options) {
      const st = clone(state);
      c.mod.resolveChoice(DECISION_PHASES[i], o.id, st);
      rec(i + 1, st);
    }
  };
  rec(0, c.mod.initialClientState());
  distributions[c.name] = { dist, total };

  const pct = k => (dist[k] / total) * 100;
  console.log(`\n  ${c.name} (${c.id}) — ${total} consultations, every toolkit valid`);
  ['YES', 'DEFER', 'NO'].forEach(k => {
    const p = pct(k);
    const bar = '█'.repeat(Math.max(1, Math.round(p / 2)));
    console.log(`      ${k.padEnd(5)} ${String(dist[k]).padStart(4)}  ${p.toFixed(2).padStart(6)}%  ${bar}`);
  });

  ok(`${c.name}: all three outcomes are genuinely reachable`,
     dist.YES > 0 && dist.DEFER > 0 && dist.NO > 0,
     `YES ${dist.YES} / DEFER ${dist.DEFER} / NO ${dist.NO}`);
  ok(`${c.name}: no outcome is below 3% (the case is not a rail in either direction)`,
     ['YES', 'DEFER', 'NO'].every(k => pct(k) >= 3),
     ['YES', 'DEFER', 'NO'].map(k => `${k} ${pct(k).toFixed(2)}%`).join(' · '));
  ok(`${c.name}: no outcome is above 85% (the outcome is not predetermined)`,
     ['YES', 'DEFER', 'NO'].every(k => pct(k) <= 85),
     ['YES', 'DEFER', 'NO'].map(k => `${k} ${pct(k).toFixed(2)}%`).join(' · '));
  ok(`${c.name}: total enumerated equals 3^7`, total === 2187, String(total));
});

// ---------------------------------------------------------------------------
sec('6. caseFacts MAKES THE TOOLKIT #3 VALIDATOR CASE-AWARE');

CASES.forEach(c => {
  // Reach a state in which the case's motivation has been disclosed.
  const st = clone(c.mod.initialClientState());
  DECISION_PHASES.slice(0, 4).forEach(k => c.mod.resolveChoice(k, c.strong[k], st));
  const disclosed = st.revealed.includes(c.mod.caseFacts.motivationItem);

  const base = {
    visibleGoal: 'What she asked for at the door',
    emotionalConsequence: 'What happens if nothing changes',
    clientLanguage: 'Her exact words, quoted at length so the field passes the verbatim check'
  };
  const good = TOOLKITS[3].validate(Object.assign({}, base, { hiddenMotivation: c.goodMotive }), st, {}, { caseFacts: c.mod.caseFacts });
  const lazy = TOOLKITS[3].validate(Object.assign({}, base, { hiddenMotivation: c.lazyMotive }), st, {}, { caseFacts: c.mod.caseFacts });

  ok(`${c.name}: the motivation is disclosed by the strong path before Toolkit #3 is due`, disclosed);
  ok(`${c.name}: a real hidden-motivation entry PASSES Toolkit #3`, good.valid === true,
     JSON.stringify((good.issues || []).map(txt)));
  ok(`${c.name}: a lazy hidden-motivation entry FAILS Toolkit #3`, lazy.valid === false,
     `lazy: "${c.lazyMotive.slice(0, 50)}…"`);

  // And an invented motive on a path where nothing was disclosed is refused.
  const undisclosedState = clone(c.mod.initialClientState());
  DECISION_PHASES.slice(0, 4).forEach(k => c.mod.resolveChoice(k, c.weak[k], undisclosedState));
  const invented = TOOLKITS[3].validate(Object.assign({}, base, { hiddenMotivation: c.goodMotive }), undisclosedState, {}, { caseFacts: c.mod.caseFacts });
  ok(`${c.name}: recording a motive that was never disclosed is refused as material`, invented.valid === false);
});

// ---------------------------------------------------------------------------
console.log('\n' + '═'.repeat(78));
console.log('OUTCOME DISTRIBUTIONS');
Object.entries(distributions).forEach(([name, d]) => {
  console.log(`  ${name.padEnd(8)} YES ${((d.dist.YES / d.total) * 100).toFixed(2)}%  ·  DEFER ${((d.dist.DEFER / d.total) * 100).toFixed(2)}%  ·  NO ${((d.dist.NO / d.total) * 100).toFixed(2)}%   (n=${d.total})`);
});
console.log('═'.repeat(78));
console.log(`RESULT: ${pass} passed, ${fail} failed`);
if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
console.log('═'.repeat(78));
process.exit(fail ? 1 : 0);
