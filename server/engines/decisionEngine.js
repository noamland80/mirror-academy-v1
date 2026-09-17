/**
 * DECISION ENGINE  (Product Layer — secondary owner of Phase 7)
 *
 * The outcome is DERIVED, not chosen by the learner. It is a function of the
 * client-state ledger the learner's own choices produced, plus the validity of
 * the required toolkit artifacts.
 *
 * Tri-state (source-traced):
 *   YES   → Active               → Toolkit #8
 *   DEFER → Considering          → Toolkit #8 (NEVER Toolkit #16)
 *   NO    → Professional closure → Toolkit #8 + MBOK Ch.6 (NEVER #16 or #17)
 */

const REQUIRED_TOOLKITS = [1, 3, 4, 5, 6];

/** Bilingual leaf; localize() resolves it at the API boundary. */
const T = (en, es) => ({ en, es });

/**
 * Case voice pack. Defaults are the canonical Sofia case, so existing
 * assertions hold; a scenario may supply its own (bilingual) voice.
 */
const SOFIA_VOICE = {
  YES: {
    disclosed: 'Yes. Let\'s start with the first two and see how my skin does. Thank you for not pushing me.',
    undisclosed: 'Alright, let\'s do it. I still feel like you don\'t entirely know why I care about this, but I trust the plan.'
  },
  DEFER: 'I\'d like to think about it. Can we speak again in two weeks?',
  NO: 'I don\'t think this is for me. Thank you for your time.'
};

function deriveOutcome(clientState, artifacts, opts) {
  const voice = (opts && opts.voice) || SOFIA_VOICE;
  const motivationItem = (opts && opts.motivationItem) || 'hidden_motivation';
  const t = clientState.trust;
  const w = clientState.willingness;

  const toolkitStatus = REQUIRED_TOOLKITS.map(n => ({
    n,
    present: !!artifacts[String(n)],
    valid: !!(artifacts[String(n)] && artifacts[String(n)].valid)
  }));
  const allToolkitsValid = toolkitStatus.every(t2 => t2.valid);

  const inputs = {
    safety: t.safety,
    attention: t.attention,
    understanding: t.understanding,
    credibility: t.credibility,
    alignment: t.alignment,
    reliability: t.reliability,
    willingness: w,
    posture: clientState.posture,
    objectionIntensity: clientState.objectionIntensity,
    motivationDisclosed: clientState.revealed.includes(motivationItem),
    requiredToolkitsValid: allToolkitsValid,
    toolkitStatus
  };

  const yesRule = t.safety >= 1 && t.credibility >= 2 && t.alignment >= 2 && t.reliability >= 1 && w >= 70 && allToolkitsValid;
  const noRule = w <= 35 || t.safety <= -1 || t.alignment <= -2 || clientState.posture === 'withdrawn';

  let outcome, rationale, clientLanguage;

  if (yesRule) {
    outcome = 'YES';
    rationale = [
      T(`Safety ${t.safety} ≥ 1, Credibility ${t.credibility} ≥ 2, Alignment ${t.alignment} ≥ 2, Reliability ${t.reliability} ≥ 1.`,
        `Seguridad ${t.safety} ≥ 1, Credibilidad ${t.credibility} ≥ 2, Alineación ${t.alignment} ≥ 2, Fiabilidad ${t.reliability} ≥ 1.`),
      T(`Willingness ${w}/100 ≥ 70.`, `Disposición ${w}/100 ≥ 70.`),
      T('All required toolkit artifacts validated.', 'Todos los artefactos de toolkit exigidos han sido validados.'),
      T('Derived by the Decision Engine from the client-state ledger — not selected by the learner.',
        'Derivado por el Motor de Decisión a partir del registro de estado de la clienta, no elegido por quien aprende.')
    ];
    clientLanguage = inputs.motivationDisclosed ? voice.YES.disclosed : voice.YES.undisclosed;
  } else if (noRule) {
    outcome = 'NO';
    rationale = [
      w <= 35 ? T(`Willingness ${w}/100 ≤ 35.`, `Disposición ${w}/100 ≤ 35.`) : null,
      t.safety <= -1 ? T(`Safety ${t.safety} ≤ -1 — psychological safety was withdrawn.`,
                         `Seguridad ${t.safety} ≤ -1: se retiró la seguridad psicológica.`) : null,
      t.alignment <= -2 ? T(`Alignment ${t.alignment} ≤ -2 — the recommendation was not traceable to what she values.`,
                            `Alineación ${t.alignment} ≤ -2: la recomendación no era trazable a lo que ella valora.`) : null,
      clientState.posture === 'withdrawn' ? T('Client posture is withdrawn.', 'La postura de la clienta es retraída.') : null,
      T('Derived by the Decision Engine from the client-state ledger — not selected by the learner.',
        'Derivado por el Motor de Decisión a partir del registro de estado de la clienta, no elegido por quien aprende.')
    ].filter(Boolean);
    clientLanguage = voice.NO;
  } else {
    outcome = 'DEFER';
    const gaps = [];
    if (t.credibility < 2) gaps.push(T(`Credibility ${t.credibility} < 2`, `Credibilidad ${t.credibility} < 2`));
    if (t.alignment < 2) gaps.push(T(`Alignment ${t.alignment} < 2`, `Alineación ${t.alignment} < 2`));
    if (t.reliability < 1) gaps.push(T(`Reliability ${t.reliability} < 1`, `Fiabilidad ${t.reliability} < 1`));
    if (w < 70) gaps.push(T(`Willingness ${w}/100 < 70`, `Disposición ${w}/100 < 70`));
    if (!allToolkitsValid) gaps.push(T('Required toolkit artifacts incomplete', 'Artefactos de toolkit exigidos incompletos'));
    rationale = [
      T('Trust is intact but at least one threshold for commitment is unmet: ' + gaps.map(g => g.en).join('; ') + '.',
        'La confianza está intacta pero al menos un umbral para el compromiso no se cumple: ' + gaps.map(g => g.es).join('; ') + '.'),
      T('Derived by the Decision Engine from the client-state ledger — not selected by the learner.',
        'Derivado por el Motor de Decisión a partir del registro de estado de la clienta, no elegido por quien aprende.')
    ];
    clientLanguage = voice.DEFER;
  }

  return {
    outcome,
    clientLanguage,
    derivedBy: T('DECISION ENGINE (product layer) — PRODUCT-LAYER DERIVED',
                 'MOTOR DE DECISIÓN (capa de producto) — DERIVADO EN LA CAPA DE PRODUCTO'),
    inputs,
    rationale,
    toolkitAttachment: {
      required: 8,
      note: outcome === 'DEFER'
        ? T('Toolkit #8 governs the agreed follow-up moment. Toolkit #16 is NOT eligible at an immediate DEFER.',
            'El Toolkit #8 gobierna el momento de seguimiento acordado. El Toolkit #16 NO es elegible en un APLAZAR inmediato.')
        : outcome === 'NO'
          ? T('Toolkit #8 documents the outcome and closure, with MBOK Ch.6 (End Relationships Responsibly). Toolkit #16 and #17 are NOT eligible at an immediate NO.',
              'El Toolkit #8 documenta el resultado y el cierre, con MBOK Cap.6 (Terminar Relaciones con Responsabilidad). Los Toolkits #16 y #17 NO son elegibles en un NO inmediato.')
          : T('Toolkit #8 books the first session and establishes the maintenance schedule.',
              'El Toolkit #8 agenda la primera sesión y establece el calendario de mantenimiento.')
    },
    derivedAt: new Date().toISOString()
  };
}

module.exports = { deriveOutcome, REQUIRED_TOOLKITS, SOFIA_VOICE };
