/**
 * CONTINUATION ENGINE  (Product Layer — owner of Phase 8, Relationship Continuation)
 *
 * Phase 8 is a canonical phase and it EXECUTES. After the Decision Engine derives
 * the outcome, this engine:
 *   1. proposes a Toolkit #8 follow-up plan appropriate to the outcome,
 *   2. requires the learner to complete owner / timing / purpose / channel and a
 *      stop condition (validated in toolkits/registry.js),
 *   3. transitions the relationship state,
 *   4. enforces the Toolkit #16 / #17 eligibility gates.
 *
 * Source: MBOK Ch.6 (Relationship Continuum, End Relationships Responsibly);
 *         MIRROR Toolkit v1.0 §1 item 8; Decision Engine tri-state rules.
 */

const canonical = require('../framework/canonical');
const { RELATIONSHIP_STATES } = canonical;

/** Bilingual leaf; localize() resolves it at the API boundary. */
const T = (en, es) => ({ en, es });

// ---------------------------------------------------------------------------
// Relationship state transition — determined by outcome, never by preference.
// ---------------------------------------------------------------------------
function transitionFor(outcome, closureDisposition) {
  if (outcome === 'YES') {
    return {
      from: 'PROSPECTIVE', to: 'ACTIVE',
      label: canonical.relationshipLabel('ACTIVE'),
      basis: T('MBOK Ch.6 Relationship Continuum: accepted recommendation moves the client to Active.',
               'MBOK Cap.6, Continuo de la Relación: una recomendación aceptada mueve a la clienta a Activa.')
    };
  }
  if (outcome === 'DEFER') {
    return {
      from: 'PROSPECTIVE', to: 'CONSIDERING',
      label: canonical.relationshipLabel('CONSIDERING'),
      basis: T('Client wants more time or information. Remains in consultation, re-engaged on the agreed timeline.',
               'La clienta quiere más tiempo o información. Permanece en consulta y se retoma en el plazo acordado.')
    };
  }
  // NO — professional closure. The learner selects the appropriate disposition.
  const allowed = ['CONSULTED', 'PAUSED', 'REFERRED_DISCHARGED'];
  const to = allowed.includes(closureDisposition) ? closureDisposition : 'CONSULTED';
  return {
    from: 'PROSPECTIVE', to,
    label: canonical.relationshipLabel(to),
    basis: T('MBOK Ch.6 — End Relationships Responsibly. The client declined; the relationship closes professionally, not as Active.',
             'MBOK Cap.6 — Terminar Relaciones con Responsabilidad. La clienta declinó; la relación se cierra profesionalmente, no como Activa.')
  };
}

// ---------------------------------------------------------------------------
// Toolkit #16 / #17 eligibility gates — enforced, not advisory.
// ---------------------------------------------------------------------------
function toolkitEligibility(outcome, relationshipTo) {
  return {
    16: {
      eligible: false,
      reason: outcome === 'DEFER'
        ? T('Toolkit #16 (Reactivation Planner) is NOT eligible at an immediate DEFER. DEFER is governed by Toolkit #8 only. #16 becomes eligible only on a later genuine Dormant → Reactivated transition.',
            'El Toolkit #16 (Planificador de Reactivación) NO es elegible en un APLAZAR inmediato. El APLAZAR lo gobierna solo el Toolkit #8. El #16 pasa a ser elegible únicamente en una transición real posterior de Inactiva → Reactivada.')
        : outcome === 'NO'
          ? T('Toolkit #16 (Reactivation Planner) is NOT eligible at an immediate NO. Closure is governed by Toolkit #8 + MBOK Ch.6. #16 becomes eligible only on a later genuine Dormant → Reactivated transition.',
              'El Toolkit #16 (Planificador de Reactivación) NO es elegible en un NO inmediato. El cierre lo gobiernan el Toolkit #8 y el MBOK Cap.6. El #16 pasa a ser elegible únicamente en una transición real posterior de Inactiva → Reactivada.')
          : T('Toolkit #16 applies only to a later Dormant → Reactivated transition, not to a client who has just become Active.',
              'El Toolkit #16 solo se aplica a una transición posterior de Inactiva → Reactivada, no a una clienta que acaba de pasar a Activa.')
    },
    17: {
      eligible: false,
      reason: outcome === 'YES'
        ? T('Toolkit #17 (Retention & LTV Review) applies to ongoing Active-relationship management at a later review point, not to the immediate post-consultation step.',
            'El Toolkit #17 (Revisión de Retención y Valor de Vida) se aplica a la gestión continuada de una relación Activa en un punto de revisión posterior, no al paso inmediato tras la consulta.')
        : T('Toolkit #17 (Retention & LTV Review) is NOT eligible at an immediate DEFER or NO. It applies to Active relationship management only.',
            'El Toolkit #17 (Revisión de Retención y Valor de Vida) NO es elegible en un APLAZAR o un NO inmediatos. Solo se aplica a la gestión de relaciones Activas.')
    },
    8: { eligible: true, reason: T('Toolkit #8 governs all three outcomes: YES, DEFER and NO.',
                                    'El Toolkit #8 gobierna los tres resultados: SÍ, APLAZAR y NO.') }
  };
}

// ---------------------------------------------------------------------------
// Toolkit #8 draft rows — outcome-specific. The learner must complete/confirm.
// ---------------------------------------------------------------------------
const SOFIA_PACK = {
  motivationItem: 'hidden_motivation',
  yesRows: [
    T('Book session 1 and 2; send pre-treatment and SPF protocol', 'Agendar las sesiones 1 y 2; enviar el protocolo previo y de fotoprotección'),
    T('Confirm the booking is understood and answer anything that surfaced overnight', 'Confirmar que la cita se ha entendido y responder a lo que haya surgido durante la noche'),
    T('Check SPF routine has actually started', 'Comprobar que la rutina de fotoprotección ha empezado de verdad'),
    T('Pre-session readiness check', 'Comprobación de preparación previa a la sesión'),
    T('Post session 1 response assessment against the stated expectation', 'Valoración de la respuesta tras la sesión 1 frente a la expectativa enunciada')
  ],
  reviewNote: T('Tie the 30-day review to the outcome she named, not to the pigment score alone.',
                'Ata la revisión de 30 días al resultado que ella nombró, no solo a la puntuación de pigmento.')
};

function proposePlan(outcome, clientState, attempt, pack) {
  const P = Object.assign({}, SOFIA_PACK, pack || {});
  const oversold = !!clientState.flags.oversold;
  const motivation = clientState.revealed.includes(P.motivationItem);

  if (outcome === 'YES') {
    const intervals = [T('Same day', 'Mismo día'), T('24 hours', '24 horas'), T('3 days', '3 días'), T('7 days', '7 días'), T('30 days', '30 días')];
    return {
      outcome,
      instruction: T('The client accepted. Toolkit #8 books the first session and establishes the maintenance schedule. Complete every row.',
                     'La clienta aceptó. El Toolkit #8 agenda la primera sesión y establece el calendario de mantenimiento. Completa todas las filas.'),
      rows: intervals.map((interval, i) => ({
        interval, timing: '', purpose: P.yesRows[i], channel: '', owner: '', outcome: ''
      })),
      prompts: {
        stopCondition: T('What ends this follow-up sequence? (Required — a plan without a stop condition is pressure with a schedule.)',
                         '¿Qué termina esta secuencia de seguimiento? (Obligatorio: un plan sin condición de cierre es presión con calendario.)'),
        notes: oversold
          ? T('FLAG: you made an outcome promise in Phase 5 that the condition does not support. Your 30-day row is where that promise gets tested. State here how you will handle it truthfully.',
              'AVISO: en la Fase 5 hiciste una promesa de resultado que la condición no respalda. Tu fila de 30 días es donde esa promesa se pone a prueba. Escribe aquí cómo la vas a manejar con honestidad.')
          : (motivation ? P.reviewNote : T('You never learned why this mattered now. Your 30-day review has no personal benchmark to measure against.',
                                           'Nunca averiguaste por qué le importaba ahora. Tu revisión de 30 días no tiene ninguna referencia personal con la que medir.'))
      },
      requires: ['rows', 'stopCondition']
    };
  }

  if (outcome === 'DEFER') {
    return {
      outcome,
      instruction: T('The client wants time. Toolkit #8 records the SPECIFIC agreed follow-up moment. Toolkit #16 is not available here.',
                     'La clienta quiere tiempo. El Toolkit #8 registra el momento de seguimiento acordado CONCRETO. El Toolkit #16 no está disponible aquí.'),
      rows: [
        { interval: T('Same day', 'Mismo día'), timing: '', purpose: T('Send the written recommendation summary and the alternative option, so she can decide with the facts in front of her', 'Enviar el resumen escrito de la recomendación y la opción alternativa, para que decida con los datos delante'), channel: '', owner: '', outcome: '' },
        { interval: T('Agreed date', 'Fecha acordada'), timing: '', purpose: T('The follow-up conversation SHE agreed to — not a chase', 'La conversación de seguimiento que ELLA acordó, no una persecución'), channel: '', owner: '', outcome: '' }
      ],
      prompts: {
        agreedFollowUpDate: T('The specific follow-up moment agreed WITH the client (e.g. "Call Thursday 12 March, agreed in the room")',
                              'El momento de seguimiento concreto acordado CON la clienta (p. ej. «Llamada el jueves 12 de marzo, acordada en la sala»)'),
        stopCondition: T('What ends this follow-up? (Required. E.g. "One agreed contact. If she does not respond, no further outreach — she has the summary and can return.")',
                         '¿Qué termina este seguimiento? (Obligatorio. P. ej. «Un contacto acordado. Si no responde, no hay más contactos: tiene el resumen y puede volver».)'),
        notes: T('DEFER is a legitimate outcome, not a failed sale. The plan must be executable without pressure.',
                 'APLAZAR es un resultado legítimo, no una venta fallida. El plan debe poder ejecutarse sin presión.')
      },
      requires: ['rows', 'agreedFollowUpDate', 'stopCondition']
    };
  }

  return {
    outcome: 'NO',
    instruction: T('The client declined. Toolkit #8 documents the outcome and the appropriate closure, with MBOK Ch.6 (End Relationships Responsibly). Toolkit #16 and #17 are not available here.',
                   'La clienta declinó. El Toolkit #8 documenta el resultado y el cierre adecuado, con el MBOK Cap.6 (Terminar Relaciones con Responsabilidad). Los Toolkits #16 y #17 no están disponibles aquí.'),
    closureOptions: [
      { key: 'CONSULTED', label: T('Consulted — closed', 'Consultada — cerrada'), when: T('She declined and no further clinical need or referral applies.', 'Declinó y no procede ninguna otra necesidad clínica ni derivación.') },
      { key: 'PAUSED', label: T('Paused', 'En pausa'), when: T('She explicitly indicated a later time, and agreed to be contacted then.', 'Indicó expresamente un momento posterior y aceptó que se la contacte entonces.') },
      { key: 'REFERRED_DISCHARGED', label: T('Referred–Discharged', 'Derivada–Alta'), when: T('Her need is better met elsewhere and you have made or offered that referral.', 'Su necesidad se atiende mejor en otro sitio y has hecho u ofrecido esa derivación.') }
    ],
    rows: [
      { interval: T('Same day', 'Mismo día'), timing: '', purpose: T('Send what she is entitled to keep: the assessment, the honest limitation, and the lower-risk alternative — with no offer attached', 'Enviar lo que tiene derecho a conservar: la valoración, la limitación honesta y la alternativa de menor riesgo, sin ninguna oferta adjunta'), channel: '', owner: '', outcome: '' }
    ],
    prompts: {
      closureNote: T('Document the outcome and the reason in her words, and the closure you are recording.',
                     'Documenta el resultado y el motivo con sus palabras, y el cierre que estás registrando.'),
      stopCondition: T('What ends contact? (Required. Closure means closure.)',
                       '¿Qué termina el contacto? (Obligatorio. Cerrar es cerrar.)'),
      notes: T('No reactivation sequence, no win-back, no nurture campaign. Those words will be rejected by the validator.',
               'Sin secuencia de reactivación, sin recuperación, sin campaña de nutrición. El validador rechazará esas palabras.')
    },
    requires: ['rows', 'closureNote', 'stopCondition']
  };
}

// ---------------------------------------------------------------------------
// Execute Phase 8 once the learner's Toolkit #8 plan validates.
// ---------------------------------------------------------------------------
function executeContinuation(outcome, planData, clientState) {
  const transition = transitionFor(outcome, planData.closureDisposition);
  clientState.relationshipState = transition.to;

  const eligibility = toolkitEligibility(outcome, transition.to);

  return {
    executed: true,
    outcome,
    relationshipTransition: transition,
    toolkitEligibility: eligibility,
    plan: {
      rows: planData.rows || [],
      stopCondition: planData.stopCondition || null,
      agreedFollowUpDate: planData.agreedFollowUpDate || null,
      closureNote: planData.closureNote || null,
      closureDisposition: outcome === 'NO' ? transition.to : null
    },
    standardsCheck: {
      standard6: T('Protect Trust After Decision — the plan above is the operational form of this standard.',
                   'Proteger la Confianza Después de la Decisión: el plan anterior es la forma operativa de este estándar.'),
      duty2: T('Respect Autonomy — the stop condition is what keeps follow-up from becoming pressure.',
               'Respetar la Autonomía: la condición de cierre es lo que evita que el seguimiento se convierta en presión.'),
      chapter6: outcome === 'NO' ? T('MBOK Ch.6 End Relationships Responsibly applied.', 'MBOK Cap.6, Terminar Relaciones con Responsabilidad, aplicado.') : null
    },
    executedAt: new Date().toISOString()
  };
}

module.exports = { proposePlan, executeContinuation, transitionFor, toolkitEligibility };
