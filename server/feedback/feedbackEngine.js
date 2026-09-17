/**
 * MIRROR FEEDBACK ENGINE
 *
 * Every feedback object carries the seven required elements:
 *   1 signalDetected      — what the client actually signalled
 *   2 mirrorInterpretation— what MIRROR says that signal means
 *   3 canonicalPrinciple  — the phase objective / Trust Stage / Standard / Duty
 *   4 learnerDid          — what the learner actually did
 *   5 alignmentVerdict    — ALIGNED / PARTIALLY ALIGNED / NOT ALIGNED + why
 *   6 observableConsequence — the material change in the client-state ledger
 *   7 nextPracticePriority
 *
 * There is no generic praise path. Feedback text is authored per option in the
 * scenario and is bound to the canonical framework, not to a score.
 */

const canonical = require('../framework/canonical');
const { TRUST_STAGES, TRUST_STANDARDS, PHASES, getPhase } = canonical;

/** Bilingual leaf; localize() resolves it at the API boundary. */
const T = (en, es) => ({ en, es });
const READING = {
  ESTABLISHED: T('ESTABLISHED', 'ESTABLECIDA'), OPENING: T('OPENING', 'ABRIÉNDOSE'),
  NEUTRAL: T('NEUTRAL', 'NEUTRA'), STRAINED: T('STRAINED', 'TENSIONADA'), BROKEN: T('BROKEN', 'ROTA')
};

function trustReadout(trust) {
  return Object.keys(TRUST_STAGES).map(k => ({
    stage: TRUST_STAGES[k].n,
    key: k,
    name: canonical.stageName(k),
    value: trust[k],
    reading: READING[trust[k] >= 2 ? 'ESTABLISHED' : trust[k] === 1 ? 'OPENING' : trust[k] === 0 ? 'NEUTRAL' : trust[k] === -1 ? 'STRAINED' : 'BROKEN']
  }));
}

const POSTURE = {
  guarded: T('guarded', 'en guardia'), reserved: T('reserved', 'reservada'),
  armored: T('armored', 'acorazada'), compliant: T('compliant', 'complaciente'),
  opening: T('opening', 'abriéndose'), open: T('open', 'abierta'),
  engaged: T('engaged', 'implicada'), withdrawn: T('withdrawn', 'retraída')
};
const posture = p => POSTURE[p] || T(p, p);
const item = x => T(String(x).replace(/_/g, ' '), String(x).replace(/_/g, ' '));

function describeDelta(consequence) {
  const parts = [];
  for (const [k, v] of Object.entries(consequence.trustDelta || {})) {
    if (v === 0) continue;
    const sign = v > 0 ? '+' : '';
    const stage = canonical.stageName(k);
    parts.push(T(`${stage.en} ${sign}${v} (now ${consequence.trustAfter[k]})`,
                 `${stage.es} ${sign}${v} (ahora ${consequence.trustAfter[k]})`));
  }
  if (consequence.willingnessAfter !== consequence.willingnessBefore) {
    const d = consequence.willingnessAfter - consequence.willingnessBefore;
    const sign = d > 0 ? '+' : '';
    parts.push(T(`Willingness to proceed ${sign}${d} (now ${consequence.willingnessAfter}/100)`,
                 `Disposición a avanzar ${sign}${d} (ahora ${consequence.willingnessAfter}/100)`));
  }
  if (consequence.newlyRevealed && consequence.newlyRevealed.length) {
    const list = consequence.newlyRevealed.map(x => item(x).en).join(', ');
    parts.push(T(`Client disclosed: ${list}`, `La clienta reveló: ${list}`));
  }
  if (consequence.stillWithheld && consequence.stillWithheld.length) {
    const list = consequence.stillWithheld.map(x => item(x).en).join(', ');
    parts.push(T(`Still withheld: ${list}`, `Sigue sin revelar: ${list}`));
  }
  const p = posture(consequence.posture);
  parts.push(T(`Posture: ${p.en}`, `Postura: ${p.es}`));
  return parts;
}

/** Build the seven-element feedback record for a resolved choice. */
function generateFeedback(phaseKey, resolved, clientState) {
  const phase = getPhase(phaseKey);
  const m = resolved.mirror;

  return {
    phase: { n: phase.n, key: phase.key, name: canonical.phaseLabel(phase.key), objective: canonical.phaseObjective(phase.key) },
    choice: { id: resolved.optionId, label: resolved.label, language: resolved.languageUsed },
    signalDetected: m.signalDetected,
    mirrorInterpretation: m.interpretation,
    canonicalPrinciple: m.principle,
    learnerDid: m.learnerDid,
    alignmentVerdict: m.alignment,
    alignmentReason: m.why,
    observableConsequence: {
      narrative: m.consequence,
      ledgerChanges: describeDelta(resolved.consequence),
      degradedNote: resolved.degradedNote || null
    },
    nextPracticePriority: m.nextPriority,
    trustReadout: trustReadout(clientState.trust),
    timestamp: new Date().toISOString()
  };
}

/** Feedback for a toolkit submission — same discipline, applied to the artifact. */
function toolkitFeedback(phaseKey, result, clientState) {
  const phase = getPhase(phaseKey);
  const valid = result.valid;
  return {
    phase: { n: phase.n, key: phase.key, name: canonical.phaseLabel(phase.key) },
    toolkit: { n: result.toolkit.n, name: canonical.toolkitName(result.toolkit.n) },
    signalDetected: valid
      ? T(`Toolkit #${result.toolkit.n} completed in context at Phase ${phase.n}.`,
          `Toolkit #${result.toolkit.n} completado en contexto en la Fase ${phase.n}.`)
      : T(`Toolkit #${result.toolkit.n} submitted with ${result.issues.length} structural problem(s).`,
          `Toolkit #${result.toolkit.n} enviado con ${result.issues.length} problema(s) estructural(es).`),
    mirrorInterpretation: valid
      ? T('The artifact is consistent with what the client has actually disclosed, so it can be relied on by the later phases.',
          'El artefacto es coherente con lo que la clienta ha revelado realmente, así que las fases posteriores pueden apoyarse en él.')
      : T('The artifact does not yet hold. A toolkit that records something the client never said cannot support a recommendation built on it.',
          'El artefacto todavía no se sostiene. Un toolkit que registra algo que la clienta nunca dijo no puede sostener una recomendación construida sobre él.'),
    canonicalPrinciple: T(`MIRROR Toolkit v1.0 canonical field structure for item #${result.toolkit.n}.`,
                          `Estructura canónica de campos del MIRROR Toolkit v1.0 para el elemento #${result.toolkit.n}.`),
    learnerDid: valid
      ? T('Completed the canonical field structure truthfully.', 'Completó la estructura canónica de campos con honestidad.')
      : T('Submitted an incomplete or unsupported artifact.', 'Envió un artefacto incompleto o sin respaldo.'),
    alignmentVerdict: valid ? 'ALIGNED' : 'NOT ALIGNED',
    alignmentReason: valid
      ? (result.summary || T('All required fields validated.', 'Todos los campos exigidos han sido validados.'))
      : result.issues,
    observableConsequence: {
      narrative: valid && result.stateEffect
        ? T('The artifact advanced the client-state ledger and is now available to later phases and to your manager.',
            'El artefacto ha movido el registro de estado de la clienta y está disponible para las fases posteriores y para tu dirección.')
        : valid
          ? T('The artifact is saved and available to later phases and to your manager.',
              'El artefacto está guardado y disponible para las fases posteriores y para tu dirección.')
          : T('Nothing was written to the client-state ledger. Correct the artifact to proceed.',
              'No se ha escrito nada en el registro de estado. Corrige el artefacto para continuar.'),
      ledgerChanges: result.stateEffect ? describeDelta({
        trustDelta: result.stateEffect.trust || {},
        trustAfter: clientState.trust,
        willingnessBefore: clientState.willingness - (result.stateEffect.willingness || 0),
        willingnessAfter: clientState.willingness,
        posture: clientState.posture,
        newlyRevealed: result.stateEffect.revealed || [],
        stillWithheld: clientState.withheld
      }) : []
    },
    nextPracticePriority: valid
      ? T('Carry this artifact forward — later phases validate against it.',
          'Lleva este artefacto contigo: las fases posteriores se validan contra él.')
      : T('Resolve each listed problem; the phase gate will not open until the artifact holds.',
          'Resuelve cada problema listado; la compuerta de fase no se abrirá hasta que el artefacto se sostenga.'),
    issues: result.issues,
    timestamp: new Date().toISOString()
  };
}

/**
 * Competency observations for the manager. Diagnostic, not a score.
 */
function competencyObservations(attempt) {
  const cs = attempt.clientState;
  const obs = [];
  const decisions = attempt.decisions || [];

  const byPhase = {};
  decisions.forEach(d => { byPhase[d.phase] = d; });

  // Per-stage observation grounded in the ledger.
  Object.keys(TRUST_STAGES).forEach(k => {
    const v = cs.trust[k];
    if (v >= 2) obs.push({ dimension: canonical.stageName(k), reading: T('ESTABLISHED', 'ESTABLECIDA'),
      evidence: T(`Ledger ${k} = ${v}.`, `Registro ${k} = ${v}.`) });
    else if (v <= -1) obs.push({ dimension: canonical.stageName(k), reading: T('AT RISK', 'EN RIESGO'),
      evidence: T(`Ledger ${k} = ${v}. Review the phase where this fell.`, `Registro ${k} = ${v}. Revisa la fase en la que cayó.`) });
  });

  // Behaviour-level observations tied to specific choices.
  if (byPhase.discovery && byPhase.discovery.optionId === 'disc-solution') {
    obs.push({
      dimension: T('Discovery discipline', 'Disciplina en el Descubrimiento'),
      reading: T('DEVELOPMENT AREA', 'ÁREA DE DESARROLLO'),
      evidence: T('Answered a harm disclosure with a product difference. Client stopped volunteering for the rest of the consultation.', 'Respondió a la revelación de un daño con una diferencia de producto. La clienta dejó de ofrecer información el resto de la consulta.')
    });
  }
  if (byPhase.discovery && byPhase.discovery.optionId === 'disc-explore-fear') {
    obs.push({
      dimension: T('Discovery discipline', 'Disciplina en el Descubrimiento'),
      reading: T('STRENGTH', 'FORTALEZA'),
      evidence: T('Interrogated the prior adverse event and asked what the outcome is for. Obtained the undisclosed motivation.', 'Indagó en el episodio adverso previo y preguntó para qué sirve el resultado. Obtuvo la motivación no revelada.')
    });
  }
  if (byPhase.education && byPhase.education.optionId === 'edu-oversell') {
    obs.push({
      dimension: T('Truthful communication (Ethical Duty 4)', 'Comunicación veraz (Deber Ético 4)'),
      reading: T('DEVELOPMENT AREA', 'ÁREA DE DESARROLLO'),
      evidence: T('Made an outcome claim the condition does not support. Reliability fell while willingness rose — a debt carried into continuation.', 'Hizo una afirmación de resultado que la condición no respalda. La Fiabilidad cayó mientras subía la Disposición: una deuda que se arrastra hasta la continuidad.')
    });
  }
  if (byPhase.decisionSupport && byPhase.decisionSupport.optionId === 'dec-overcome') {
    obs.push({
      dimension: T('Respect for autonomy (Ethical Duty 2)', 'Respeto a la autonomía (Deber Ético 2)'),
      reading: T('DEVELOPMENT AREA', 'ÁREA DE DESARROLLO'),
      evidence: T('Used urgency and a price deadline at the decision point. This is the single largest willingness penalty in the scenario.', 'Usó urgencia y un plazo de precio en el momento de la decisión. Es la mayor penalización de disposición del caso.')
    });
  }
  if (byPhase.decisionSupport && byPhase.decisionSupport.optionId === 'dec-diagnose') {
    obs.push({
      dimension: T('Objection diagnosis', 'Diagnóstico de objeciones'),
      reading: T('STRENGTH', 'FORTALEZA'),
      evidence: T('Separated surface from underlying and restructured the commitment to make the first step reversible.', 'Separó la superficie de lo subyacente y reestructuró el compromiso para que el primer paso fuera reversible.')
    });
  }
  if (!cs.revealed.includes('hidden_motivation')) {
    obs.push({
      dimension: T('Motivation elicitation', 'Obtención de la motivación'),
      reading: T('DEVELOPMENT AREA', 'ÁREA DE DESARROLLO'),
      evidence: T('The client\'s reason for acting now was never disclosed in this attempt. Toolkit #3 and Recommendation Builder field 1 could not be completed from her words.', 'La razón de la clienta para actuar ahora nunca se reveló en este intento. El Toolkit #3 y el campo 1 del Constructor de Recomendación no pudieron completarse con sus palabras.')
    });
  }

  return obs;
}

module.exports = { generateFeedback, toolkitFeedback, competencyObservations, trustReadout };
