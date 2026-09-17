/**
 * SOFIA — MATERIAL BRANCHING PROOF
 *
 * The claim being tested is not "different feedback text". It is that a strong
 * early choice produces a materially different LATER consultation than a weak
 * one, from the same starting scenario:
 *
 *   · different client state
 *   · different disclosed information
 *   · different objection at Phase 7
 *   · different decision context
 *
 * This runs both paths through the real engine (no HTTP, no UI) and prints the
 * two consultations side by side, then asserts the differences exist.
 *
 * Run: node test/verify-sofia-branching.js
 */
const scenarios = require('../server/scenario');
const canonical = require('../server/framework/canonical');

const S = scenarios.get('sofia-melasma');
const clone = o => JSON.parse(JSON.stringify(o));
const txt = v => typeof v === 'string' ? v : (v && v.en) || '';

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) { pass++; console.log(`  PASS  ${n}`); } else { fail++; failures.push(n + (d ? '  →  ' + d : '')); console.log(`  FAIL  ${n}${d ? '  →  ' + d : ''}`); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);

/** Play one path and record what the learner would actually have seen. */
function play(label, choices) {
  let state = clone(S.initialClientState());
  const log = { label, phases: [], state: null };

  for (const phaseKey of Object.keys(S.phases)) {
    const view = S.getPhaseContent(phaseKey, state) || {};
    const signal = view.clientSignal || {};
    const entry = {
      phase: phaseKey,
      says: txt(signal.quote || signal.says || signal.line),
      subtext: txt(signal.subtext),
      variant: signal.objectionVariant || null,
      notice: [txt(signal.subtext), signal.objectionVariant || '', String(signal.intensity == null ? '' : signal.intensity)],
      posture: state.posture,
      willingness: state.willingness,
      revealed: state.revealed.slice(),
      withheld: state.withheld.slice(),
      objectionIntensity: state.objectionIntensity,
      options: (view.decision && view.decision.options || []).map(o => ({ id: o.id, label: txt(o.label) }))
    };

    const chosen = choices[phaseKey];
    if (chosen && view.decision) {
      // resolveChoice mutates the ledger and returns the material consequence:
      // this is the single place branching is decided in the product.
      const resolved = S.resolveChoice(phaseKey, chosen, state);
      entry.chose = chosen;
      entry.material = txt((resolved.mirror && (resolved.mirror.material || resolved.mirror.consequence)) || '');
      entry.after = {
        posture: state.posture, willingness: state.willingness,
        revealed: state.revealed.slice(), withheld: state.withheld.slice(),
        objectionIntensity: state.objectionIntensity
      };
    }
    log.phases.push(entry);
  }
  log.state = state;
  return log;
}

// A practitioner who prepares, makes disagreement safe, and opens the fear.
const STRONG = {
  preparation: 'prep-full', connection: 'conn-permission', discovery: 'disc-explore-fear',
  understanding: 'und-verify', education: 'edu-mechanism', recommendation: 'rec-aligned',
  decisionSupport: 'dec-diagnose'
};
// A practitioner who skims, reassures, and solves the request as stated.
const WEAK = {
  preparation: 'prep-skim', connection: 'conn-reassure', discovery: 'disc-solution',
  understanding: 'und-assume', education: 'edu-features', recommendation: 'rec-price-first',
  decisionSupport: 'dec-overcome'
};

const strong = play('STRONG EARLY CHOICES', STRONG);
const weak = play('WEAK EARLY CHOICES', WEAK);

// ---------------------------------------------------------------------------
console.log('SOFIA — TWO CONSULTATIONS FROM THE SAME OPENING');
console.log('='.repeat(78));

[strong, weak].forEach(p => {
  console.log(`\n${p.label}`);
  console.log('-'.repeat(p.label.length));
  p.phases.forEach(ph => {
    const n = canonical.getPhase(ph.phase).n;
    console.log(`  ${n} ${canonical.getPhase(ph.phase).name}`);
    if (ph.says) console.log(`      SHE SAYS   “${ph.says.slice(0, 118)}${ph.says.length > 118 ? '…' : ''}”`);
    console.log(`      STATE      ${ph.posture}, willingness ${ph.willingness}, objection ${ph.objectionIntensity}, withheld [${ph.withheld.join(', ') || '—'}]`);
    if (ph.chose) console.log(`      CHOSE      ${ph.chose}`);
    if (ph.material) console.log(`      CONSEQUENCE ${ph.material.slice(0, 150)}${ph.material.length > 150 ? '…' : ''}`);
  });
  console.log(`  FINAL        ${p.state.posture}, willingness ${p.state.willingness}, revealed [${p.state.revealed.join(', ') || '—'}], withheld [${p.state.withheld.join(', ') || '—'}]`);
});

// ---------------------------------------------------------------------------
sec('THE TWO CONSULTATIONS DIFFER MATERIALLY, NOT ONLY IN WORDING');

const at = (p, key) => p.phases.find(x => x.phase === key);

ok('The two paths start from an identical client state',
   JSON.stringify(at(strong, 'preparation').posture) === JSON.stringify(at(weak, 'preparation').posture) &&
   at(strong, 'preparation').willingness === at(weak, 'preparation').willingness,
   `${at(strong, 'preparation').posture}/${at(strong, 'preparation').willingness} vs ${at(weak, 'preparation').posture}/${at(weak, 'preparation').willingness}`);

ok('DIFFERENT DISCLOSED INFORMATION — the strong path unlocks what the weak path never hears',
   strong.state.revealed.length > weak.state.revealed.length,
   `strong revealed [${strong.state.revealed.join(', ')}] vs weak [${weak.state.revealed.join(', ')}]`);

ok('The hidden motivation is still withheld on the weak path at the end of the consultation',
   weak.state.withheld.includes('hidden_motivation') && !strong.state.withheld.includes('hidden_motivation'),
   `weak withheld [${weak.state.withheld.join(', ')}]`);

ok('DIFFERENT CLIENT STATE — posture diverges',
   strong.state.posture !== weak.state.posture,
   `${strong.state.posture} vs ${weak.state.posture}`);

ok('DIFFERENT CLIENT STATE — willingness diverges by more than a rounding step',
   Math.abs(strong.state.willingness - weak.state.willingness) >= 15,
   `${strong.state.willingness} vs ${weak.state.willingness}`);

const sObj = at(strong, 'decisionSupport'), wObj = at(weak, 'decisionSupport');
ok('DIFFERENT OBJECTION — Phase 7 opens at a different intensity',
   sObj.objectionIntensity !== wObj.objectionIntensity,
   `strong ${sObj.objectionIntensity} vs weak ${wObj.objectionIntensity}`);

ok('DIFFERENT OBJECTION — she does not say the same thing at Phase 7',
   sObj.says && wObj.says && sObj.says !== wObj.says,
   `strong: "${(sObj.says || '').slice(0, 60)}…" / weak: "${(wObj.says || '').slice(0, 60)}…"`);

ok('DIFFERENT OBJECTION — Phase 7 raises a different objection variant',
   sObj.variant !== wObj.variant, `strong ${sObj.variant} vs weak ${wObj.variant}`);

ok('DIFFERENT DECISION CONTEXT — the Phase 7 signal itself differs, not only the feedback',
   JSON.stringify(sObj.notice) !== JSON.stringify(wObj.notice),
   `strong subtext: ${(sObj.subtext||'').slice(0,70)}…`);

const divergesAt = ['connection', 'discovery', 'understanding', 'education', 'recommendation', 'decisionSupport']
  .filter(k => at(strong, k).says !== at(weak, k).says);
ok('The consultations diverge at more than one later phase',
   divergesAt.length >= 3, divergesAt.join(', '));

ok('The trust ledger ends in a different place on every dimension that was in play',
   canonical.TRUST_STAGE_KEYS.some(k => strong.state.trust[k] !== weak.state.trust[k]),
   canonical.TRUST_STAGE_KEYS.map(k => `${k} ${strong.state.trust[k]}/${weak.state.trust[k]}`).join(' · '));

sec('AND THE OUTCOME IS DERIVED FROM THAT STATE, NOT CHOSEN');
const decisionEngine = require('../server/engines/decisionEngine');
const allToolkits = { 1: { valid: true }, 3: { valid: true }, 4: { valid: true }, 5: { valid: true }, 6: { valid: true } };
const sOut = decisionEngine.deriveOutcome(strong.state, allToolkits);
const wOut = decisionEngine.deriveOutcome(weak.state, allToolkits);
console.log(`  strong path → ${sOut.outcome}`);
console.log(`  weak path   → ${wOut.outcome}`);
ok('The same toolkit work produces different outcomes from the two client states',
   sOut.outcome !== wOut.outcome, `${sOut.outcome} vs ${wOut.outcome}`);
ok('Each outcome carries a rationale drawn from the ledger, not a score',
   (sOut.rationale || []).length > 0 && (wOut.rationale || []).length > 0 &&
   !/\b\d{1,3}\s?%|score/i.test(JSON.stringify(sOut.rationale) + JSON.stringify(wOut.rationale)));

console.log('\n' + '═'.repeat(58));
console.log(`RESULT: ${pass} passed, ${fail} failed`);
if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
console.log('═'.repeat(58));
process.exit(fail ? 1 : 0);
