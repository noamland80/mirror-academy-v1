/**
 * SOFIA / MELASMA — 8-PHASE CANONICAL SCENARIO (bilingual EN/ES)
 *
 * Every phase in the canonical MBOK Ch.1 s1.16 spine is executable:
 *   1 Preparation → 2 Connection → 3 Discovery → 4 Understanding →
 *   5 Education → 6 Recommendation → 7 Decision Support → 8 Relationship Continuation
 *
 * MATERIAL BRANCHING CONTRACT
 * ---------------------------
 * A learner choice does not merely change feedback text. Each choice writes to a
 * persistent client-state ledger:
 *   trust{}      — the 7 canonical Trust Formation stages, -3..+3
 *   willingness  — 0..100, drives the derived decision outcome
 *   posture      — how Sofia behaves in later phases
 *   objectionIntensity — 1..3, selects WHICH objection appears in Phase 7
 *   revealed[]   — information Sofia has actually disclosed
 *   withheld[]   — information she is holding back because trust is insufficient
 *
 * Downstream phases read that ledger and serve different client signals,
 * different available information, different objections and different outcomes.
 * If `hidden_motivation` is never revealed, Toolkit #3 and #4 cannot be completed
 * truthfully, Phase 6 alignment is capped, and YES becomes unreachable.
 *
 * Client-facing strings are {en, es}; the API localizes at the boundary
 * (see scenario/index.js localize()). Structural values — option ids, phase
 * keys, alignment verdicts, reveal ids, flags, effects — are never translated.
 */

const canonical = require('../framework/canonical');
const { TRUST_STANDARDS, ETHICAL_DUTIES, TRUST_STAGES } = canonical;

const T = (en, es) => ({ en, es });

// ---------------------------------------------------------------------------
// CLIENT PROFILE
// ---------------------------------------------------------------------------
const sofiaProfile = {
  name: 'Sofia Ramos',
  age: 42,
  presenting: T('Melasma across cheeks and forehead, ~3 years', 'Melasma en mejillas y frente, unos 3 años'),
  visibleGoal: T('Fade the melasma', 'Atenuar el melasma'),
  hiddenMotivation: T(
    'Professional visibility — she is on video calls daily and believes her skin is the first thing people notice',
    'Visibilidad profesional — está en videollamadas a diario y cree que su piel es lo primero que ve la gente'
  ),
  emotionalConsequence: T(
    'Fear of skin damage and loss of control, after a friend\'s laser outcome',
    'Miedo a dañarse la piel y a perder el control, tras el resultado del láser de una amiga'
  ),
  history: T(
    'Two years of over-the-counter brightening products, minimal result',
    'Dos años de productos despigmentantes de venta libre, con resultado mínimo'
  ),
  priorExperienceRisk: T(
    'Friend had a laser treatment for melasma that made her pigmentation worse',
    'Una amiga se trató el melasma con láser y su pigmentación empeoró'
  ),
  entryRelationshipState: 'PROSPECTIVE'
};

// Intake brief the Preparation Engine exposes in Phase 1.
const intakeBrief = {
  bookingNote: T(
    '"Interested in treatment for melasma. Have questions about laser."',
    '«Me interesa un tratamiento para el melasma. Tengo dudas sobre el láser.»'
  ),
  intakeForm: [
    T('Concern: melasma, cheeks + forehead, approx. 3 years', 'Motivo: melasma, mejillas y frente, unos 3 años'),
    T('Tried: OTC brightening products (2 years), minimal result', 'Ha probado: despigmentantes de venta libre (2 años), resultado mínimo'),
    T('Free-text note: "A friend had laser for the same thing and it got worse."', 'Nota en texto libre: «Una amiga se hizo láser para lo mismo y le fue a peor.»'),
    T('Occupation field: consultant — "lots of video calls"', 'Casilla de profesión: consultora — «muchas videollamadas»'),
    T('No current active skin condition, no isotretinoin, no pregnancy', 'Sin patología cutánea activa, sin isotretinoína, sin embarazo')
  ],
  buriedSignals: ['prior_experience_risk', 'occupational_visibility']
};

// ---------------------------------------------------------------------------
// INITIAL CLIENT STATE LEDGER
// ---------------------------------------------------------------------------
function initialClientState() {
  return {
    trust: { safety: 0, attention: 0, understanding: 0, credibility: 0, alignment: 0, reliability: 0, confirmation: 0 },
    willingness: 40,
    posture: 'reserved',
    objectionIntensity: 2,
    revealed: [],
    withheld: ['hidden_motivation', 'budget_ceiling'],
    flags: {},
    relationshipState: 'PROSPECTIVE'
  };
}

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

/** Apply an option's effects to the client-state ledger. Returns a delta report. */
function applyEffects(clientState, effects) {
  const delta = { trust: {}, willingness: 0, revealed: [], posture: null, objectionIntensity: null };
  if (effects.trust) {
    for (const [stage, amount] of Object.entries(effects.trust)) {
      const before = clientState.trust[stage];
      clientState.trust[stage] = clamp(before + amount, -3, 3);
      delta.trust[stage] = clientState.trust[stage] - before;
    }
  }
  if (typeof effects.willingness === 'number') {
    const before = clientState.willingness;
    clientState.willingness = clamp(before + effects.willingness, 0, 100);
    delta.willingness = clientState.willingness - before;
  }
  if (effects.posture) { clientState.posture = effects.posture; delta.posture = effects.posture; }
  if (typeof effects.objectionIntensity === 'number') {
    clientState.objectionIntensity = clamp(effects.objectionIntensity, 1, 3);
    delta.objectionIntensity = clientState.objectionIntensity;
  }
  if (effects.reveals) {
    for (const item of effects.reveals) {
      if (!clientState.revealed.includes(item)) {
        clientState.revealed.push(item);
        delta.revealed.push(item);
      }
      clientState.withheld = clientState.withheld.filter(w => w !== item);
    }
  }
  if (effects.flags) Object.assign(clientState.flags, effects.flags);
  return delta;
}

// Convenience for mirror blocks. These compose canonical framework citations
// (Trust Standards, Ethical Duties, Trust Stages) and stay plain strings, as in
// Case 02 — the canonical names are not localized.
// Canonical citations, rendered in both languages by the framework layer.
const std = n => canonical.standardLabel(n);
const duty = n => canonical.dutyLabel(n);
const stage = k => canonical.stageLabel(k);

/**
 * Bilingual citation join. Canonical labels arrive as {en, es}; the connective
 * prose between them is supplied in both languages here, so the principle line
 * a learner reads is fully in their language.
 */
const J = (...parts) => ({
  en: parts.map(p => (typeof p === 'string' ? p : p.en)).join(''),
  es: parts.map(p => (typeof p === 'string' ? p : (p.es || p.en))).join('')
});
const L = (en, es) => ({ en, es });


// ---------------------------------------------------------------------------
// PHASES
// ---------------------------------------------------------------------------
const phases = {

  // ======================= PHASE 1 — PREPARATION ==========================
  preparation: {
    key: 'preparation',
    toolkit: null,
    signal(cs) {
      return {
        source: T('Intake file (client not yet in the room)', 'Ficha de admisión (la clienta aún no ha entrado)'),
        quote: intakeBrief.bookingNote,
        detail: intakeBrief.intakeForm,
        subtext: T(
          'Preparation Engine: everything you will be able to use in Connection and Discovery is already on this form. What you fail to read now, you cannot use later.',
          'Motor de Preparación: todo lo que podrás usar en Conexión y Descubrimiento ya está en esta ficha. Lo que no leas ahora, no lo podrás usar después.'
        )
      };
    },
    decision: {
      prompt: T(
        'You have four minutes before Sofia comes in. What do you actually do with the intake file?',
        'Tienes cuatro minutos antes de que entre Sofia. ¿Qué haces realmente con la ficha de admisión?'
      ),
      options: [
        {
          id: 'prep-skim',
          label: T('Skim the presenting concern and go in', 'Leer por encima el motivo de consulta y entrar'),
          language: T('Melasma, three years, tried creams. That is enough to start.', 'Melasma, tres años, ha probado cremas. Con eso basta para empezar.'),
          effects: { trust: { credibility: -1 }, willingness: -5, flags: { prepared: 'minimal' } },
          mirror: {
            signalDetected: T(
              'The intake form carries two signals beyond the presenting concern: a prior negative laser experience in a friend, and an occupational visibility cue ("lots of video calls").',
              'La ficha contiene dos señales más allá del motivo de consulta: una experiencia previa negativa con láser en una amiga, y una pista de visibilidad laboral («muchas videollamadas»).'
            ),
            interpretation: T(
              'Preparation is a canonical phase, not a courtesy. Reading only the presenting complaint means you enter Connection without the two facts that will govern this consultation.',
              'La Preparación es una fase canónica, no una cortesía. Leer solo el motivo de consulta significa entrar en Conexión sin los dos datos que van a gobernar esta consulta.'
            ),
            principle: J(duty(3), L('; Phase 1 objective: readiness and research.', '; objetivo de la Fase 1: preparación e investigación.')),
            learnerDid: T(
              'You entered the room prepared for a pigmentation conversation and unprepared for a fear conversation.',
              'Entraste en la sala preparada para una conversación sobre pigmentación y sin preparar para una conversación sobre miedo.'
            ),
            alignment: 'NOT ALIGNED',
            why: T(
              'Competent practice includes knowing what the client has already told you. Sofia will have to repeat a fear she already disclosed in writing, which reads to her as not being read.',
              'La práctica competente incluye saber lo que la clienta ya te ha contado. Sofia tendrá que repetir un miedo que ya reveló por escrito, y eso ella lo interpreta como que nadie la ha leído.'
            ),
            consequence: T(
              'You will not be able to reference the friend\'s outcome unprompted. Credibility starts below baseline and Sofia\'s guard goes up before you speak.',
              'No podrás mencionar por iniciativa propia lo que le ocurrió a su amiga. La credibilidad arranca por debajo de la línea base y Sofia levanta la guardia antes de que hables.'
            ),
            nextPriority: T(
              'Re-read intake for prior-experience and motivation signals before every consultation.',
              'Relee la ficha buscando señales de experiencia previa y de motivación antes de cada consulta.'
            )
          }
        },
        {
          id: 'prep-clinical',
          label: T(
            'Prepare the clinical pathway only (laser parameters, contraindications)',
            'Preparar solo la vía clínica (parámetros del láser, contraindicaciones)'
          ),
          language: T(
            'Melasma, Fitzpatrick assessment, conservative ND:YAG settings, no contraindications flagged. Ready.',
            'Melasma, valoración de Fitzpatrick, parámetros conservadores de ND:YAG, sin contraindicaciones señaladas. Lista.'
          ),
          effects: { trust: { credibility: 1 }, willingness: 0, flags: { prepared: 'clinical' } },
          mirror: {
            signalDetected: T(
              'You caught the clinical picture but not the free-text note about the friend\'s laser outcome.',
              'Captaste el cuadro clínico pero no la nota en texto libre sobre el resultado del láser de su amiga.'
            ),
            interpretation: T(
              'Clinical readiness is half of Phase 1. The other half is relational readiness — what this specific client is afraid of and why they are here now.',
              'La preparación clínica es la mitad de la Fase 1. La otra mitad es la preparación relacional — a qué teme esta clienta concreta y por qué viene ahora.'
            ),
            principle: J(duty(3), L('; ', '; '), std(3), L('.', '.')),
            learnerDid: T('You prepared competence without preparing context.', 'Preparaste competencia sin preparar contexto.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'Your clinical grounding is real and will show. But the intake note that predicts her objection is unread, so you will meet it cold in Phase 7.',
              'Tu base clínica es real y se notará. Pero la nota de admisión que anticipa su objeción sigue sin leer, así que la encontrarás en frío en la Fase 7.'
            ),
            consequence: T(
              'Credibility opens slightly positive. The fear signal will arrive as a surprise in Discovery instead of as something you anticipated.',
              'La credibilidad arranca ligeramente positiva. La señal de miedo llegará como sorpresa en el Descubrimiento en lugar de como algo anticipado.'
            ),
            nextPriority: T(
              'Add a "prior experience / why now" pass to your pre-consultation routine.',
              'Añade una lectura de «experiencia previa / por qué ahora» a tu rutina previa a la consulta.'
            )
          }
        },
        {
          id: 'prep-full',
          label: T(
            'Read the full file including free-text, and name the two risks you expect',
            'Leer la ficha completa, texto libre incluido, y nombrar los dos riesgos que esperas'
          ),
          language: T(
            'Melasma three years, OTC failure. Free-text: a friend\'s laser made it worse — expect fear of damage. Occupation: video calls — expect a visibility motive she has not said out loud. Prepare conservative-pathway language and a mechanism explanation for why her friend\'s outcome happened.',
            'Melasma de tres años, fracaso de la venta libre. Texto libre: a una amiga el láser se lo empeoró — espera miedo al daño. Profesión: videollamadas — espera un motivo de visibilidad que aún no ha dicho en voz alta. Prepara un discurso de vía conservadora y una explicación del mecanismo por el que ocurrió lo de su amiga.'
          ),
          effects: { trust: { credibility: 2, attention: 1 }, willingness: 5, flags: { prepared: 'full', anticipatedFear: true, anticipatedVisibility: true } },
          mirror: {
            signalDetected: T(
              'Both buried signals identified before contact: prior-experience risk (friend\'s laser) and occupational visibility ("lots of video calls").',
              'Las dos señales ocultas identificadas antes del contacto: riesgo por experiencia previa (el láser de la amiga) y visibilidad laboral («muchas videollamadas»).'
            ),
            interpretation: T(
              'Phase 1 done properly hands you the whole consultation. You now know the objection before it is spoken and the motivation before it is admitted.',
              'La Fase 1 bien hecha te entrega la consulta entera. Ahora conoces la objeción antes de que se pronuncie y la motivación antes de que se admita.'
            ),
            principle: J(L('Phase 1 (Preparation) objective; ', 'Objetivo de la Fase 1 (Preparación); '), duty(3), L('; ', '; '), std(3), L('.', '.')),
            learnerDid: T(
              'You converted an intake form into a working hypothesis about fear and motivation.',
              'Convertiste una ficha de admisión en una hipótesis de trabajo sobre miedo y motivación.'
            ),
            alignment: 'ALIGNED',
            why: T(
              'Readiness and research is the canonical content of Phase 1, and you executed it against this specific client rather than against melasma in general.',
              'Preparación e investigación es el contenido canónico de la Fase 1, y lo ejecutaste para esta clienta concreta y no para el melasma en general.'
            ),
            consequence: T(
              'You can reference her note in Connection without her having to raise it. Credibility opens at +2 and Sofia registers that she was read.',
              'Podrás mencionar su nota en Conexión sin que ella tenga que sacarla. La credibilidad abre en +2 y Sofia registra que la han leído.'
            ),
            nextPriority: T(
              'Hold the hypothesis loosely — Discovery must still test it rather than assume it.',
              'Sostén la hipótesis con suavidad — el Descubrimiento todavía debe comprobarla, no darla por hecha.'
            )
          }
        }
      ]
    },
    gate() { return { canAdvance: true }; }
  },

  // ======================== PHASE 2 — CONNECTION ==========================
  connection: {
    key: 'connection',
    toolkit: null,
    signal(cs) {
      if (cs.flags.prepared === 'full') {
        return {
          source: T('Sofia, sitting down', 'Sofia, sentándose'),
          quote: T(
            '"Hi — thanks for seeing me. I filled in that form, I don\'t know if you saw it."',
            '«Hola, gracias por recibirme. Rellené el formulario, no sé si lo habrá visto.»'
          ),
          subtext: T(
            'She is checking whether the disclosure she made in writing has been received. This is a Safety test, not small talk.',
            'Está comprobando si ha llegado lo que reveló por escrito. Es una prueba de Seguridad, no una charla de cortesía.'
          )
        };
      }
      return {
        source: T('Sofia, sitting down', 'Sofia, sentándose'),
        quote: T(
          '"Hi. So... I have this pigmentation on my face. I don\'t really know where to start."',
          '«Hola. Pues... tengo estas manchas en la cara. La verdad es que no sé por dónde empezar.»'
        ),
        subtext: T(
          'She is opening with the surface concern and watching how you handle the opening seconds.',
          'Abre con la preocupación superficial y observa cómo manejas los primeros segundos.'
        )
      };
    },
    decision: {
      prompt: T(
        'Phase 2 objective is to establish psychological safety. What is your opening move?',
        'El objetivo de la Fase 2 es crear seguridad psicológica. ¿Cuál es tu primer movimiento?'
      ),
      options: [
        {
          id: 'conn-agenda',
          label: T('Set a clinical agenda immediately', 'Fijar de inmediato una agenda clínica'),
          language: T(
            'Right, let\'s take a look at the pigmentation. If you can turn to the light I\'ll assess the distribution and we can talk about laser options.',
            'Bien, vamos a ver esas manchas. Si se gira hacia la luz, valoro la distribución y hablamos de opciones de láser.'
          ),
          effects: { trust: { safety: -1, attention: -1 }, willingness: -5, posture: 'guarded' },
          mirror: {
            signalDetected: T(
              'Sofia opened with hesitancy ("I don\'t know where to start") — a request for permission, not a request for assessment.',
              'Sofia abrió con titubeo («no sé por dónde empezar») — una petición de permiso, no una petición de valoración.'
            ),
            interpretation: T(
              'Moving to examination in the first thirty seconds tells her the consultation is about her skin, not about her.',
              'Pasar a la exploración en los primeros treinta segundos le dice que la consulta trata de su piel, no de ella.'
            ),
            principle: J(std(1), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T(
              'You answered an emotional opening with a procedural instruction.',
              'Respondiste a una apertura emocional con una instrucción de procedimiento.'
            ),
            alignment: 'NOT ALIGNED',
            why: T(
              'Psychological safety is the Phase 2 objective and the first canonical trust stage. It cannot be back-filled later.',
              'La seguridad psicológica es el objetivo de la Fase 2 y la primera etapa canónica de la confianza. No se rellena a posteriori.'
            ),
            consequence: T(
              'Sofia\'s posture becomes guarded. She will answer questions but will not volunteer the reason she booked now.',
              'La postura de Sofia se vuelve defensiva. Responderá a lo que le preguntes, pero no ofrecerá por sí misma el motivo por el que ha pedido cita ahora.'
            ),
            nextPriority: T(
              'Open with permission and pace before any examination.',
              'Abre con permiso y con ritmo antes de cualquier exploración.'
            )
          }
        },
        {
          id: 'conn-reassure',
          label: T('Reassure her straight away', 'Tranquilizarla de entrada'),
          language: T(
            'Don\'t worry, melasma is very common and very treatable. You\'re in good hands — we do this all the time.',
            'No se preocupe, el melasma es muy frecuente y muy tratable. Está en buenas manos: esto lo hacemos a diario.'
          ),
          effects: { trust: { safety: 0, attention: -1, credibility: -1 }, willingness: -3, posture: 'polite' },
          mirror: {
            signalDetected: T(
              'Hesitancy and an unspoken concern. You responded to the hesitancy with volume of reassurance.',
              'Titubeo y una preocupación no dicha. Respondiste al titubeo con un exceso de tranquilización.'
            ),
            interpretation: T(
              'Reassurance before understanding is a closure move. It ends the disclosure it was meant to invite.',
              'Tranquilizar antes de comprender es una maniobra de cierre. Termina la revelación que pretendía invitar.'
            ),
            principle: J(std(1), L('; ', '; '), std(2), L('; ', '; '), duty(4), L('.', '.')),
            learnerDid: T(
              'You resolved her discomfort instead of making room for it.',
              'Resolviste su incomodidad en lugar de hacerle sitio.'
            ),
            alignment: 'NOT ALIGNED',
            why: T(
              'Safety is created by permission to speak, not by being told there is nothing to worry about. "Very treatable" also pre-commits you before assessment.',
              'La seguridad se crea con permiso para hablar, no diciéndole que no hay nada de qué preocuparse. Además, «muy tratable» te compromete antes de haber valorado nada.'
            ),
            consequence: T(
              'Sofia becomes polite and compliant — the hardest posture to read. She will not tell you about her friend unless you ask directly.',
              'Sofia se vuelve cortés y complaciente — la postura más difícil de leer. No te hablará de su amiga salvo que preguntes directamente.'
            ),
            nextPriority: T(
              'Withhold reassurance until Phase 5. In Phase 2, create room instead.',
              'Guarda la tranquilización para la Fase 5. En la Fase 2, crea espacio.'
            )
          }
        },
        {
          id: 'conn-permission',
          label: T('Name the note she left, and hand her the pace', 'Nombrar la nota que dejó y cederle el ritmo'),
          language: T(
            'I did read your form — including the part about your friend. Before I look at anything, I\'d rather hear it from you: what made you book now, and what are you hoping this conversation gives you today? Nothing gets examined or recommended until you\'re ready.',
            'Sí he leído su formulario, también la parte sobre su amiga. Antes de mirar nada, prefiero oírlo de usted: ¿qué le ha hecho pedir cita ahora, y qué espera llevarse de esta conversación hoy? No exploro ni recomiendo nada hasta que usted quiera.'
          ),
          effects: { trust: { safety: 2, attention: 2 }, willingness: 8, posture: 'opening', flags: { safetyEstablished: true } },
          requires: { flag: 'prepared', anyOf: ['full'] },
          fallbackLanguage: T(
            'Before I look at anything, I\'d rather hear it from you: what made you book now, and what are you hoping this conversation gives you today? Nothing gets examined or recommended until you\'re ready.',
            'Antes de mirar nada, prefiero oírlo de usted: ¿qué le ha hecho pedir cita ahora, y qué espera llevarse de esta conversación hoy? No exploro ni recomiendo nada hasta que usted quiera.'
          ),
          mirror: {
            signalDetected: T(
              'Sofia asked, indirectly, whether her written disclosure was received.',
              'Sofia preguntó, de forma indirecta, si había llegado lo que reveló por escrito.'
            ),
            interpretation: T(
              'Naming the note answers the Safety question in one move: she is not going to have to fight to be heard.',
              'Nombrar la nota responde a la pregunta de Seguridad de un solo golpe: no va a tener que pelear para que la escuchen.'
            ),
            principle: J(std(1), L('; ', '; '), duty(2), L('; ', '; '), stage('safety'), L(' and ', ' y '), stage('attention'), L('.', '.')),
            learnerDid: T(
              'You confirmed receipt of her disclosure and explicitly handed her control of the pace.',
              'Confirmaste que habías recibido lo que reveló y le cediste explícitamente el control del ritmo.'
            ),
            alignment: 'ALIGNED',
            why: T(
              'Phase 2\'s objective is psychological safety, and autonomy over pace is the operational form of it.',
              'El objetivo de la Fase 2 es la seguridad psicológica, y la autonomía sobre el ritmo es su forma operativa.'
            ),
            consequence: T(
              'Sofia\'s posture shifts to opening. Safety +2, Attention +2. She is now willing to say more than she planned to.',
              'La postura de Sofia pasa a apertura. Seguridad +2, Atención +2. Ahora está dispuesta a contar más de lo que traía previsto.'
            ),
            nextPriority: T(
              'Do not spend the safety you just created by rushing Discovery.',
              'No gastes la seguridad que acabas de crear acelerando el Descubrimiento.'
            )
          }
        }
      ]
    },
    gate() { return { canAdvance: true }; }
  },

  // ========================= PHASE 3 — DISCOVERY ==========================
  discovery: {
    key: 'discovery',
    toolkit: 1,
    signal(cs) {
      if (cs.trust.safety >= 2) {
        return {
          source: 'Sofia',
          quote: T(
            '"My friend had laser for melasma last year and it came back worse — darker, more spread out. That\'s the thing that scares me. And honestly... I\'m on video calls all day. I keep angling my face away from the camera. That\'s the bit I don\'t normally say out loud."',
            '«Mi amiga se hizo láser para el melasma el año pasado y le volvió peor: más oscuro, más extendido. Eso es lo que me da miedo. Y, sinceramente... me paso el día en videollamadas. No dejo de girar la cara para esquivar la cámara. Esa parte no suelo decirla en voz alta.»'
          ),
          subtext: T(
            'Because safety was established, Sofia has volunteered BOTH the fear and the motivation. The visibility motive is now on the table.',
            'Como la seguridad quedó establecida, Sofia ha ofrecido por sí misma AMBAS cosas: el miedo y la motivación. El motivo de visibilidad ya está sobre la mesa.'
          ),
          disclosureLevel: 'full'
        };
      }
      if (cs.posture === 'guarded') {
        return {
          source: 'Sofia',
          quote: T(
            '"It\'s just the pigmentation. I\'d like it gone. What do you normally do for it?"',
            '«Son solo las manchas. Me gustaría quitármelas. ¿Qué suelen hacer ustedes para esto?»'
          ),
          subtext: T(
            'Guarded posture: Sofia is giving you the transactional version. The fear and the motivation are both being withheld.',
            'Postura defensiva: Sofia te da la versión transaccional. Retiene tanto el miedo como la motivación.'
          ),
          disclosureLevel: 'minimal'
        };
      }
      return {
        source: 'Sofia',
        quote: T(
          '"I\'ve had it about three years. Creams didn\'t do much. I did wonder about laser but... I know someone who had a bad experience with it."',
          '«Lo tengo desde hace unos tres años. Las cremas hicieron poco. Sí me planteé el láser, pero... conozco a alguien a quien le fue mal con eso.»'
        ),
        subtext: T(
          'Partial disclosure: the fear is hinted at. The motivation is still withheld.',
          'Revelación parcial: el miedo queda insinuado. La motivación sigue retenida.'
        ),
        disclosureLevel: 'partial'
      };
    },
    decision: {
      prompt: T(
        'Phase 3 objective is to understand situation AND motivation. What do you do with what she just said?',
        'El objetivo de la Fase 3 es comprender situación Y motivación. ¿Qué haces con lo que acaba de decir?'
      ),
      options: [
        {
          id: 'disc-solution',
          label: T('Move to what you would do differently', 'Pasar a lo que tú harías de otra manera'),
          language: T(
            'That happens with the wrong device. We use a completely different laser here, so that won\'t happen to you.',
            'Eso pasa con el aparato equivocado. Aquí usamos un láser completamente distinto, así que a usted no le va a pasar.'
          ),
          effects: { trust: { safety: -1, attention: -2, understanding: -2 }, willingness: -10, posture: 'guarded', objectionIntensity: 3, flags: { fearAcknowledged: false } },
          mirror: {
            signalDetected: T(
              'Sofia raised a prior negative outcome. That is a Safety-stage signal about harm, not a Credibility-stage request for equipment specifications.',
              'Sofia sacó un resultado negativo previo. Es una señal de la etapa de Seguridad sobre el daño, no una petición de fichas técnicas propia de la etapa de Credibilidad.'
            ),
            interpretation: T(
              'Answering a fear with a product difference skips the stage she is actually at. She has not asked "which laser" — she has asked "can I trust you not to hurt me".',
              'Responder a un miedo con una diferencia de producto se salta la etapa en la que ella está. No ha preguntado «qué láser»: ha preguntado «¿puedo fiarme de que no me hará daño?».'
            ),
            principle: J(stage('safety'), L('; ', '; '), std(1), L('; ', '; '), std(2), L('.', '.')),
            learnerDid: T(
              'You converted her disclosure into an objection and rebutted it.',
              'Convertiste su revelación en una objeción y la rebatiste.'
            ),
            alignment: 'NOT ALIGNED',
            why: T(
              'Discovery\'s canonical objective is to understand situation and motivation. You closed the disclosure instead of opening it.',
              'El objetivo canónico del Descubrimiento es comprender situación y motivación. Cerraste la revelación en lugar de abrirla.'
            ),
            consequence: T(
              'MATERIAL: Sofia stops volunteering. Her hidden motivation stays withheld for the rest of the consultation, and her Phase 7 objection escalates to the highest intensity.',
              'MATERIAL: Sofia deja de ofrecer información. Su motivación oculta queda retenida durante el resto de la consulta, y su objeción de la Fase 7 escala a la intensidad máxima.'
            ),
            nextPriority: T(
              'When a client names a bad outcome, ask what happened before you say what you do.',
              'Cuando una clienta nombra un mal resultado, pregunta qué ocurrió antes de contar lo que tú haces.'
            )
          }
        },
        {
          id: 'disc-clinical',
          label: T('Take a thorough clinical history', 'Hacer una historia clínica completa'),
          language: T(
            'Let\'s go through it properly. How long, what have you used, any hormonal factors, sun exposure, pregnancy history, current products?',
            'Vamos a repasarlo bien. ¿Desde cuándo, qué ha usado, factores hormonales, exposición solar, embarazos previos, productos actuales?'
          ),
          effects: { trust: { attention: 1, understanding: 1, credibility: 1 }, willingness: 0, flags: { fearAcknowledged: false, clinicalHistoryTaken: true } },
          mirror: {
            signalDetected: T(
              'You captured the situation. The motivation and the fear were both left on the table.',
              'Capturaste la situación. La motivación y el miedo se quedaron sobre la mesa.'
            ),
            interpretation: T(
              'A clinical history is necessary and insufficient. Phase 3 requires situation AND motivation; you have collected one of the two.',
              'Una historia clínica es necesaria e insuficiente. La Fase 3 exige situación Y motivación; has recogido una de las dos.'
            ),
            principle: J(L('Phase 3 objective; ', 'Objetivo de la Fase 3; '), std(2), L('; Toolkit #1 depth check items 2 and 6.', '; Toolkit #1, puntos 2 y 6 de la comprobación de profundidad.')),
            learnerDid: T(
              'You gathered facts competently without gathering meaning.',
              'Reuniste datos con competencia sin reunir significado.'
            ),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'The history will make your recommendation clinically sound but not personally aligned, because you do not yet know what she is buying.',
              'La historia hará que tu recomendación sea sólida clínicamente pero no alineada personalmente, porque todavía no sabes qué está comprando ella.'
            ),
            consequence: T(
              'Attention and Credibility rise modestly. The visibility motive remains withheld, which will cap alignment in Phase 6.',
              'Atención y Credibilidad suben de forma modesta. El motivo de visibilidad sigue retenido, y eso pondrá techo a la alineación en la Fase 6.'
            ),
            nextPriority: T(
              'Follow every history with "why now" and "what would change for you".',
              'Acompaña cada historia clínica con un «por qué ahora» y un «qué cambiaría para usted».'
            )
          }
        },
        {
          id: 'disc-explore-fear',
          label: T(
            'Ask what actually happened to her friend, then what she is protecting',
            'Preguntar qué le pasó exactamente a su amiga, y luego qué está protegiendo ella'
          ),
          language: T(
            'Tell me what happened to her — what was done, and what did her skin do afterwards? I ask because "laser" isn\'t one thing, and I want to know which one we\'re actually talking about. And then I want to ask you something else: what would be different for you if this were gone?',
            'Cuénteme qué le pasó a ella: ¿qué le hicieron y cómo reaccionó su piel después? Se lo pregunto porque «láser» no es una sola cosa, y quiero saber de cuál estamos hablando. Y luego quiero preguntarle otra cosa: ¿qué sería distinto para usted si esto desapareciera?'
          ),
          effects: { trust: { safety: 2, attention: 2, understanding: 2 }, willingness: 12, posture: 'open', objectionIntensity: 1, reveals: ['prior_experience_detail', 'hidden_motivation'], flags: { fearAcknowledged: true } },
          mirror: {
            signalDetected: T(
              'Two signals: a harm fear anchored in a specific prior event, and an unstated reason this became urgent now.',
              'Dos señales: un miedo al daño anclado en un suceso previo concreto, y un motivo no dicho por el que esto se ha vuelto urgente ahora.'
            ),
            interpretation: T(
              'Asking what was actually done treats her fear as information rather than as resistance. The second question moves from situation to motivation, which is the other half of Phase 3.',
              'Preguntar qué se hizo realmente trata su miedo como información y no como resistencia. La segunda pregunta pasa de la situación a la motivación, que es la otra mitad de la Fase 3.'
            ),
            principle: J(std(1), L('; ', '; '), std(2), L('; ', '; '), stage('understanding'), L('; Toolkit #3 (visible goal → hidden motivation).', '; Toolkit #3 (objetivo visible → motivación oculta).')),
            learnerDid: T(
              'You interrogated the event, not the emotion, and then asked what the outcome is for.',
              'Interrogaste el suceso, no la emoción, y después preguntaste para qué sirve el resultado.'
            ),
            alignment: 'ALIGNED',
            why: T(
              'Phase 3 requires both situation and motivation. You obtained the mechanism of the friend\'s outcome and the reason Sofia booked now.',
              'La Fase 3 exige situación y motivación. Obtuviste el mecanismo del resultado de su amiga y el motivo por el que Sofia ha pedido cita ahora.'
            ),
            consequence: T(
              'MATERIAL: Sofia discloses the video-call visibility motive. That disclosure unlocks Toolkit #3 and Toolkit #4 field 1, and lowers her Phase 7 objection to its mildest form.',
              'MATERIAL: Sofia revela el motivo de visibilidad en videollamadas. Esa revelación desbloquea el Toolkit #3 y el campo 1 del Toolkit #4, y rebaja su objeción de la Fase 7 a su forma más leve.'
            ),
            nextPriority: T(
              'Record her exact words — you will need her language, not your paraphrase, in Recommendation.',
              'Anota sus palabras exactas — en la Recomendación necesitarás su lenguaje, no tu paráfrasis.'
            )
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const t1 = artifacts['1'];
      if (!t1) {
        return {
          canAdvance: false,
          reason: T(
            'Toolkit #1 (Client Intake & Discovery Canvas) must be completed before Phase 4. The Discovery Depth Check is the canonical advance criterion.',
            'El Toolkit #1 (Ficha de Cliente y Lienzo de Descubrimiento) debe completarse antes de la Fase 4. La Comprobación de Profundidad del Descubrimiento es el criterio canónico de avance.'
          )
        };
      }
      return { canAdvance: true };
    }
  },

  // ====================== PHASE 4 — UNDERSTANDING =========================
  understanding: {
    key: 'understanding',
    toolkit: 3,
    signal(cs) {
      if (cs.revealed.includes('hidden_motivation')) {
        return {
          source: 'Sofia',
          quote: T(
            '"Yes — that\'s it exactly. It\'s not vanity, it\'s that I don\'t want it to be the first thing a client sees. You\'re the first person who\'s asked me that."',
            '«Sí, es exactamente eso. No es vanidad: es que no quiero que sea lo primero que vea un cliente. Es usted la primera persona que me lo pregunta.»'
          ),
          subtext: T(
            'The motivation is on the table and confirmed in her own words. Understanding can now be verified rather than assumed.',
            'La motivación está sobre la mesa y confirmada con sus propias palabras. Ahora la comprensión puede verificarse en lugar de suponerse.'
          )
        };
      }
      return {
        source: 'Sofia',
        quote: T(
          '"...I suppose. I mean, yes, I want it gone. Is that not enough of a reason?"',
          '«...Supongo. O sea, sí, quiero quitármelo. ¿No es razón suficiente?»'
        ),
        subtext: T(
          'MATERIAL CONSEQUENCE: the motivation was never disclosed. Any summary you give her now can only reflect the surface goal, and she can hear that it is thin.',
          'CONSECUENCIA MATERIAL: la motivación nunca se reveló. Cualquier resumen que le des ahora solo puede reflejar el objetivo superficial, y ella nota que es flojo.'
        )
      };
    },
    decision: {
      prompt: T(
        'Phase 4 objective is to consolidate findings and verify priorities. How do you close Discovery?',
        'El objetivo de la Fase 4 es consolidar hallazgos y verificar prioridades. ¿Cómo cierras el Descubrimiento?'
      ),
      options: [
        {
          id: 'und-assume',
          label: T('Summarise and move on', 'Resumir y seguir adelante'),
          language: T(
            'Okay, so melasma, three years, creams haven\'t worked, you want it gone. Let me explain the options.',
            'Vale: melasma, tres años, las cremas no han funcionado, quiere quitárselo. Le explico las opciones.'
          ),
          effects: { trust: { understanding: -1, attention: -1 }, willingness: -5 },
          mirror: {
            signalDetected: T(
              'You produced a summary but did not ask her to correct it.',
              'Produjiste un resumen pero no le pediste que lo corrigiera.'
            ),
            interpretation: T(
              'Consolidation without verification is assumption. Phase 4 is specifically the verification step in the canonical spine.',
              'Consolidar sin verificar es suponer. La Fase 4 es justamente el paso de verificación dentro de la columna canónica.'
            ),
            principle: J(L('Phase 4 objective; ', 'Objetivo de la Fase 4; '), std(2), L('; ', '; '), duty(2), L('.', '.')),
            learnerDid: T(
              'You told her what you heard and moved to Education without checking.',
              'Le contaste lo que habías oído y pasaste a Educación sin comprobarlo.'
            ),
            alignment: 'NOT ALIGNED',
            why: T(
              'Verifying priorities is the phase objective. A summary she never confirmed cannot anchor a recommendation.',
              'Verificar prioridades es el objetivo de la fase. Un resumen que ella nunca confirmó no puede anclar ninguna recomendación.'
            ),
            consequence: T(
              'Understanding falls. In Phase 6 she will not recognise her own goal in your recommendation.',
              'La Comprensión cae. En la Fase 6 ella no reconocerá su propio objetivo dentro de tu recomendación.'
            ),
            nextPriority: T(
              'End every Phase 4 with an explicit "what have I got wrong?"',
              'Termina cada Fase 4 con un «¿en qué me he equivocado?» explícito.'
            )
          }
        },
        {
          id: 'und-verify',
          label: T('Reflect it back in her words and invite correction', 'Devolvérselo con sus palabras e invitar a la corrección'),
          language: T(
            'Let me say it back and you tell me what I have wrong. The pigmentation has been there about three years, creams did very little, and the thing that actually made you book was not the marks themselves but being on camera all day and managing where your face is pointed. And running underneath it is what happened to your friend — you need to know this won\'t make it worse. Have I got that right, and what have I missed?',
            'Déjeme devolvérselo y usted me dice en qué me equivoco. Las manchas llevan unos tres años, las cremas hicieron muy poco, y lo que de verdad le hizo pedir cita no fueron las manchas en sí, sino estar todo el día ante la cámara calculando hacia dónde gira la cara. Y por debajo corre lo que le pasó a su amiga: necesita saber que esto no lo va a empeorar. ¿Lo he entendido bien, y qué se me ha escapado?'
          ),
          effects: { trust: { understanding: 2, attention: 1, alignment: 1 }, willingness: 8, flags: { prioritiesVerified: true } },
          requiresRevealed: 'hidden_motivation',
          degradedLanguage: T(
            'Let me say it back and you tell me what I have wrong. Pigmentation about three years, creams did very little, and you\'d like it gone. Have I got that right?',
            'Déjeme devolvérselo y usted me dice en qué me equivoco. Manchas desde hace unos tres años, las cremas hicieron muy poco, y le gustaría quitárselas. ¿Lo he entendido bien?'
          ),
          degradedEffects: { trust: { understanding: 0, attention: 1 }, willingness: 0 },
          degradedNote: T(
            'MATERIAL CONSEQUENCE: because the motivation was never disclosed, the verification you can offer is only the surface goal. Sofia confirms it flatly. Understanding does not advance.',
            'CONSECUENCIA MATERIAL: como la motivación nunca se reveló, la verificación que puedes ofrecer se queda en el objetivo superficial. Sofia lo confirma sin más. La Comprensión no avanza.'
          ),
          mirror: {
            signalDetected: T(
              'Sofia has given you both a stated goal and an underlying reason; the two are not the same.',
              'Sofia te ha dado un objetivo declarado y una razón de fondo; no son lo mismo.'
            ),
            interpretation: T(
              'Reflecting her own language back and inviting correction is what converts collected information into verified understanding.',
              'Devolverle su propio lenguaje e invitarla a corregir es lo que convierte la información recogida en comprensión verificada.'
            ),
            principle: J(L('Phase 4 objective; ', 'Objetivo de la Fase 4; '), std(2), L('; ', '; '), stage('understanding'), L('; ', '; '), duty(2), L('.', '.')),
            learnerDid: T(
              'You consolidated situation, motivation and fear into one statement and handed her the right to correct it.',
              'Consolidaste situación, motivación y miedo en una sola frase y le entregaste el derecho a corregirla.'
            ),
            alignment: 'ALIGNED',
            why: T(
              'Verification is the canonical objective of this phase, and using her words rather than yours is what makes it verifiable.',
              'La verificación es el objetivo canónico de esta fase, y usar sus palabras en lugar de las tuyas es lo que la hace verificable.'
            ),
            consequence: T(
              'Understanding +2 and Alignment opens. Her confirmed language becomes the anchor for Toolkit #4 field 1.',
              'Comprensión +2 y se abre la Alineación. El lenguaje que ella confirma se convierte en el ancla del campo 1 del Toolkit #4.'
            ),
            nextPriority: T(
              'Carry her exact phrasing into the Recommendation Builder unchanged.',
              'Traslada sus frases exactas al Constructor de Recomendaciones sin retocarlas.'
            )
          }
        },
        {
          id: 'und-overreach',
          label: T('Interpret the emotional meaning for her', 'Interpretarle el significado emocional'),
          language: T(
            'What I\'m really hearing is that this has affected your confidence quite deeply, and that you\'ve been carrying that for a long time.',
            'Lo que oigo en realidad es que esto le ha afectado bastante a la seguridad en sí misma, y que lleva mucho tiempo cargando con ello.'
          ),
          effects: { trust: { understanding: -1, safety: -1 }, willingness: -5, posture: 'polite' },
          mirror: {
            signalDetected: T(
              'She described a practical, situational problem. You returned a psychological interpretation she did not offer.',
              'Ella describió un problema práctico y situacional. Le devolviste una interpretación psicológica que ella no había ofrecido.'
            ),
            interpretation: T(
              'Interpretation that outruns disclosure reads as being told who you are. It withdraws safety rather than deepening understanding.',
              'Una interpretación que va por delante de lo revelado se vive como que a una le digan quién es. Retira seguridad en vez de profundizar la comprensión.'
            ),
            principle: J(std(2), L('; ', '; '), std(1), L('; ', '; '), duty(2), L('.', '.')),
            learnerDid: T('You substituted your framing for her account.', 'Sustituiste su relato por tu marco interpretativo.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'Understanding means she recognises herself in your summary. Here she does not.',
              'Comprender significa que ella se reconozca en tu resumen. Aquí no se reconoce.'
            ),
            consequence: T(
              'Sofia becomes polite and less forthcoming. Safety drops back.',
              'Sofia se vuelve cortés y menos comunicativa. La Seguridad retrocede.'
            ),
            nextPriority: T(
              'Reflect only what was said; let her supply the meaning.',
              'Refleja solo lo dicho; deja que el significado lo ponga ella.'
            )
          }
        }
      ]
    },
    gate(cs, artifacts) {
      if (!artifacts['3']) {
        return {
          canAdvance: false,
          reason: T(
            'Toolkit #3 (Emotional Drivers Map) must be completed before Phase 5.',
            'El Toolkit #3 (Mapa de Motivaciones Emocionales) debe completarse antes de la Fase 5.'
          )
        };
      }
      return { canAdvance: true };
    }
  },

  // ========================= PHASE 5 — EDUCATION ==========================
  education: {
    key: 'education',
    toolkit: null,
    signal(cs) {
      if (cs.revealed.includes('prior_experience_detail')) {
        return {
          source: 'Sofia',
          quote: T(
            '"So why did it go wrong for her? That\'s the part I need to understand before I agree to anything."',
            '«¿Y por qué a ella le salió mal? Esa es la parte que necesito entender antes de aceptar nada.»'
          ),
          subtext: T(
            'She is inviting you to demonstrate Credibility. This is an opportunity, not an objection.',
            'Te está invitando a demostrar Credibilidad. Es una oportunidad, no una objeción.'
          )
        };
      }
      return {
        source: 'Sofia',
        quote: T('"Okay. So what are the options?"', '«Bien. ¿Y cuáles son las opciones?»'),
        subtext: T(
          'A neutral request for information. Without the friend\'s case on the table you have less to anchor the explanation to.',
          'Una petición neutra de información. Sin el caso de la amiga sobre la mesa tienes menos donde anclar la explicación.'
        )
      };
    },
    decision: {
      prompt: T(
        'Phase 5 objective is to provide knowledge for an informed decision. How do you educate?',
        'El objetivo de la Fase 5 es aportar conocimiento para una decisión informada. ¿Cómo educas?'
      ),
      options: [
        {
          id: 'edu-features',
          label: T('Lead with the technology', 'Empezar por la tecnología'),
          language: T(
            'We use a medical-grade ND:YAG. It\'s FDA-cleared, it\'s the gold standard, and it\'s far more advanced than what she would have had.',
            'Usamos un ND:YAG de grado médico. Está aprobado por la FDA, es el patrón de referencia y es mucho más avanzado que lo que le habrán hecho a ella.'
          ),
          effects: { trust: { credibility: 0, understanding: -1 }, willingness: -3 },
          mirror: {
            signalDetected: T(
              'She asked WHY an outcome happened. You answered WHAT equipment you own.',
              'Ella preguntó POR QUÉ ocurrió un resultado. Contestaste QUÉ aparato tienes.'
            ),
            interpretation: T(
              'Device names are credentials, not explanations. They do not tell her why her friend\'s pigment darkened or why yours would not.',
              'Los nombres de los aparatos son credenciales, no explicaciones. No le dicen por qué se oscureció el pigmento de su amiga ni por qué el suyo no lo haría.'
            ),
            principle: J(std(3), L('; ', '; '), std(5), L('; Phase 5 objective (informed decision).', '; objetivo de la Fase 5 (decisión informada).')),
            learnerDid: T(
              'You asserted superiority instead of explaining mechanism.',
              'Afirmaste superioridad en lugar de explicar el mecanismo.'
            ),
            alignment: 'NOT ALIGNED',
            why: T(
              'An informed decision requires that she understand the causal difference, not that she accept your equipment claim.',
              'Una decisión informada exige que ella entienda la diferencia causal, no que acepte tu afirmación sobre el aparato.'
            ),
            consequence: T(
              'Credibility does not advance. In Phase 7 she has no mechanism to fall back on when the fear returns.',
              'La Credibilidad no avanza. En la Fase 7 ella no tendrá ningún mecanismo al que agarrarse cuando vuelva el miedo.'
            ),
            nextPriority: T(
              'Explain cause and effect before naming any device.',
              'Explica causa y efecto antes de nombrar ningún aparato.'
            )
          }
        },
        {
          id: 'edu-mechanism',
          label: T('Explain the mechanism, including the honest limitation', 'Explicar el mecanismo, incluida la limitación honesta'),
          language: T(
            'Melasma sits deeper than a surface mark and it is reactive — the pigment cells respond to heat and light by producing more pigment, which is exactly what happens when a device meant for something else is used at aggressive settings. That is the most likely reason your friend\'s got darker. What we do differently is conservative settings across a series, so we are asking the pigment to clear gradually rather than shocking it. The honest part: this is a managed condition, not a cured one. Expect meaningful fading over four to five sessions, not disappearance, and daily SPF is not optional — without it, it comes back.',
            'El melasma está más profundo que una mancha superficial y además es reactivo: las células del pigmento responden al calor y a la luz produciendo más pigmento, que es justo lo que ocurre cuando se usa un aparato pensado para otra cosa con parámetros agresivos. Esa es la razón más probable de que a su amiga se le oscureciera. Lo que hacemos distinto son parámetros conservadores repartidos en una serie: le pedimos al pigmento que se aclare poco a poco en lugar de darle un choque. La parte honesta: esta es una condición que se controla, no que se cura. Espere una atenuación apreciable a lo largo de cuatro o cinco sesiones, no una desaparición, y el fotoprotector diario no es opcional: sin él, vuelve.'
          ),
          effects: { trust: { credibility: 2, understanding: 1, reliability: 1 }, willingness: 10, flags: { mechanismExplained: true, expectationsHonest: true } },
          mirror: {
            signalDetected: T(
              'A causal question about a specific adverse outcome.',
              'Una pregunta causal sobre un resultado adverso concreto.'
            ),
            interpretation: T(
              'Explaining that melasma is reactive to heat gives her a model that makes both her friend\'s result and your protocol predictable rather than arbitrary.',
              'Explicar que el melasma reacciona al calor le da un modelo que vuelve predecibles, y no arbitrarios, tanto el resultado de su amiga como tu protocolo.'
            ),
            principle: J(std(3), L('; ', '; '), std(5), L('; ', '; '), duty(4), L('; ', '; '), duty(3), L('.', '.')),
            learnerDid: T(
              'You explained the mechanism of the adverse outcome, the mechanism of your approach, and the limitation of both.',
              'Explicaste el mecanismo del resultado adverso, el mecanismo de tu enfoque y la limitación de ambos.'
            ),
            alignment: 'ALIGNED',
            why: T(
              'Phase 5 exists to make the decision informed. Including the ceiling ("managed, not cured") is what makes the rest of it believable.',
              'La Fase 5 existe para que la decisión sea informada. Incluir el techo («se controla, no se cura») es lo que hace creíble todo lo demás.'
            ),
            consequence: T(
              'Credibility +2 and Reliability opens. She now has a model she can reason with in Phase 7 instead of only a feeling.',
              'Credibilidad +2 y se abre la Fiabilidad. Ahora tiene un modelo con el que razonar en la Fase 7, y no solo una sensación.'
            ),
            nextPriority: T(
              'Do not dilute the limitation later to make the recommendation easier.',
              'No diluyas después esa limitación para que la recomendación resulte más fácil.'
            )
          }
        },
        {
          id: 'edu-oversell',
          label: T('Educate, but promise the outcome', 'Educar, pero prometiendo el resultado'),
          language: T(
            'Melasma responds very well to the right laser. With our protocol you\'ll see it clear up over a few sessions — most people are delighted by session three.',
            'El melasma responde muy bien al láser adecuado. Con nuestro protocolo lo verá desaparecer en unas pocas sesiones: la mayoría está encantada ya en la tercera.'
          ),
          effects: { trust: { credibility: 1, reliability: -2 }, willingness: 12, flags: { mechanismExplained: false, expectationsHonest: false, oversold: true } },
          mirror: {
            signalDetected: T('She asked for understanding. You supplied optimism.', 'Ella pidió comprensión. Le suministraste optimismo.'),
            interpretation: T(
              'Optimism raises short-term willingness and destroys Reliability, because melasma is recurrent and the promise will be falsified by her own skin.',
              'El optimismo sube la disposición a corto plazo y destruye la Fiabilidad, porque el melasma es recurrente y la promesa la desmentirá su propia piel.'
            ),
            principle: J(duty(4), L('; ', '; '), std(5), L('; ', '; '), std(6), L('.', '.')),
            learnerDid: T(
              'You made an outcome claim the biology does not support.',
              'Hiciste una afirmación de resultado que la biología no sostiene.'
            ),
            alignment: 'NOT ALIGNED',
            why: T(
              'Truthful communication is a duty, and Standard 6 protects trust after the decision — a promise that fails in month three breaks it.',
              'Comunicar con veracidad es un deber, y la Norma 6 protege la confianza después de la decisión: una promesa que falla al tercer mes la rompe.'
            ),
            consequence: T(
              'MATERIAL: willingness rises now, Reliability falls to -2. If she says YES, she says it to a promise you cannot keep, and the continuation plan inherits that debt.',
              'MATERIAL: la disposición sube ahora y la Fiabilidad cae a -2. Si dice SÍ, se lo dice a una promesa que no puedes cumplir, y el plan de continuidad hereda esa deuda.'
            ),
            nextPriority: T('State the ceiling before the benefit, every time.', 'Enuncia el techo antes que el beneficio, siempre.')
          }
        }
      ]
    },
    gate() { return { canAdvance: true }; }
  },

  // ====================== PHASE 6 — RECOMMENDATION ========================
  recommendation: {
    key: 'recommendation',
    toolkit: 4,
    secondaryToolkit: 5,
    signal(cs) {
      if (cs.trust.credibility >= 2 && cs.revealed.includes('hidden_motivation')) {
        return {
          source: 'Sofia',
          quote: T(
            '"Okay. I understand what it is now, and what it isn\'t. So what do you actually recommend for me?"',
            '«Vale. Ahora entiendo qué es esto y qué no es. ¿Entonces qué me recomienda usted a mí exactamente?»'
          ),
          subtext: T(
            'Credibility is established and the motive is known. She is asking for a recommendation she can measure against her own goal.',
            'La Credibilidad está establecida y el motivo se conoce. Pide una recomendación que pueda medir contra su propio objetivo.'
          )
        };
      }
      if (cs.trust.credibility >= 2) {
        return {
          source: 'Sofia',
          quote: T('"Alright, that makes sense. What would you suggest?"', '«De acuerdo, tiene sentido. ¿Qué sugeriría usted?»'),
          subtext: T(
            'Credible, but you are recommending against a stated goal only — you never learned what the outcome is for.',
            'Hay credibilidad, pero recomiendas solo contra un objetivo declarado: nunca supiste para qué sirve el resultado.'
          )
        };
      }
      return {
        source: 'Sofia',
        quote: T('"I suppose you\'re going to tell me I need the laser."', '«Supongo que ahora me dirá que necesito el láser.»'),
        subtext: T(
          'MATERIAL CONSEQUENCE: low credibility. She is pre-framing your recommendation as a sale before you have made it.',
          'CONSECUENCIA MATERIAL: credibilidad baja. Está encuadrando tu recomendación como una venta antes incluso de que la hagas.'
        )
      };
    },
    decision: {
      prompt: T(
        'Phase 6 objective is to present the solution with rationale. How do you deliver it?',
        'El objetivo de la Fase 6 es presentar la solución con su razonamiento. ¿Cómo la entregas?'
      ),
      options: [
        {
          id: 'rec-price-first',
          label: T('Lead with the package and the price', 'Empezar por el paquete y el precio'),
          language: T(
            'I\'d recommend our five-session melasma package. It\'s €1,150, or €995 if you take it today.',
            'Le recomendaría nuestro paquete de melasma de cinco sesiones. Son 1.150 €, o 995 € si lo contrata hoy.'
          ),
          effects: { trust: { alignment: -2, reliability: -1 }, willingness: -10, objectionIntensity: 3 },
          mirror: {
            signalDetected: T(
              'She asked what you recommend for her. You answered with a commercial unit.',
              'Preguntó qué le recomiendas a ella. Contestaste con una unidad comercial.'
            ),
            interpretation: T(
              'Price before rationale converts a clinical recommendation into a transaction, and the discount-for-today framing removes the autonomy Phase 2 established.',
              'El precio antes del razonamiento convierte una recomendación clínica en una transacción, y el descuento por contratar hoy retira la autonomía que estableció la Fase 2.'
            ),
            principle: J(std(4), L('; ', '; '), std(5), L('; ', '; '), duty(2), L('; Toolkit #5 (value before price).', '; Toolkit #5 (valor antes que precio).')),
            learnerDid: T(
              'You presented cost without the reasoning that makes cost interpretable.',
              'Presentaste el coste sin el razonamiento que hace interpretable ese coste.'
            ),
            alignment: 'NOT ALIGNED',
            why: T(
              'A recommendation with rationale is the canonical Phase 6 objective; a package with a deadline is neither.',
              'Una recomendación con razonamiento es el objetivo canónico de la Fase 6; un paquete con fecha límite no es ni lo uno ni lo otro.'
            ),
            consequence: T(
              'MATERIAL: Alignment -2 and her Phase 7 objection escalates to the price-pressure variant, which is the hardest to recover from.',
              'MATERIAL: Alineación -2 y su objeción de la Fase 7 escala a la variante de presión por precio, la más difícil de remontar.'
            ),
            nextPriority: T(
              'Never state investment before outcome, mechanism and limitation.',
              'Nunca digas la inversión antes que el resultado, el mecanismo y la limitación.'
            )
          }
        },
        {
          id: 'rec-generic',
          label: T('Recommend the standard protocol', 'Recomendar el protocolo estándar'),
          language: T(
            'For melasma we\'d do a series of laser sessions spaced four to six weeks apart, with SPF and a brightening serum in between. It\'s what we do for this condition.',
            'Para el melasma haríamos una serie de sesiones de láser separadas entre cuatro y seis semanas, con fotoprotector y un sérum despigmentante entre medias. Es lo que hacemos para esta condición.'
          ),
          effects: { trust: { alignment: 0, credibility: 1 }, willingness: 3 },
          mirror: {
            signalDetected: T(
              'A request for a personal recommendation, answered with a protocol for a condition.',
              'Una petición de recomendación personal, respondida con un protocolo para una condición.'
            ),
            interpretation: T(
              '"What we do for this" is defensible clinically and invisible personally — nothing in it is traceable to Sofia.',
              '«Lo que hacemos para esto» es defendible clínicamente e invisible en lo personal: nada de ello es trazable hasta Sofia.'
            ),
            principle: J(std(4), L('; Toolkit #4 fields 1 and 4.', '; Toolkit #4, campos 1 y 4.')),
            learnerDid: T('You recommended for melasma rather than for Sofia.', 'Recomendaste para el melasma, no para Sofia.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'Alignment requires the recommendation to be tied to what she said she values. Yours is tied to the diagnosis only.',
              'La alineación exige que la recomendación esté atada a lo que ella dijo que valora. La tuya está atada solo al diagnóstico.'
            ),
            consequence: T(
              'She accepts it as reasonable without it becoming hers. Alignment does not move.',
              'Lo acepta como razonable sin que llegue a ser suyo. La Alineación no se mueve.'
            ),
            nextPriority: T(
              'Tie every element of the plan to a specific thing she told you.',
              'Ata cada elemento del plan a algo concreto que ella te haya contado.'
            )
          }
        },
        {
          id: 'rec-aligned',
          label: T(
            'Recommend against her stated outcome, with the alternative and the exclusion',
            'Recomendar contra el resultado que ella declaró, con la alternativa y la exclusión'
          ),
          language: T(
            'Your words were that you don\'t want it to be the first thing a client sees on a call. So I\'m recommending for that, not for a photograph. Four to five conservative ND:YAG sessions, four to six weeks apart, with daily SPF 50 and a brightening serum between sessions — conservative specifically because of what happened to your friend. Realistically: visible fading by session two or three, meaningful improvement by five, and maintenance after that. The alternative is prescription-strength topical only for three months — slower and weaker, but the lowest-risk option, and it is a legitimate choice. What I am deliberately not recommending is aggressive settings or a peel, because with reactive pigment both raise the risk of exactly the rebound your friend had.',
            'Sus palabras fueron que no quiere que sea lo primero que vea un cliente en una llamada. Así que recomiendo para eso, no para una fotografía. Entre cuatro y cinco sesiones conservadoras de ND:YAG, separadas de cuatro a seis semanas, con fotoprotector 50 a diario y un sérum despigmentante entre sesiones; conservadoras precisamente por lo que le ocurrió a su amiga. Siendo realistas: atenuación visible hacia la segunda o tercera sesión, mejoría apreciable en la quinta, y mantenimiento después. La alternativa es solo tratamiento tópico de prescripción durante tres meses: más lento y más flojo, pero es la opción de menor riesgo y es una elección legítima. Lo que deliberadamente no le recomiendo son parámetros agresivos ni un peeling, porque con un pigmento reactivo ambos elevan el riesgo del mismo rebote que tuvo su amiga.'
          ),
          effects: { trust: { alignment: 3, credibility: 1, reliability: 1 }, willingness: 15, objectionIntensity: 1, flags: { alignedRecommendation: true } },
          requiresRevealed: 'hidden_motivation',
          degradedLanguage: T(
            'I\'m recommending four to five conservative ND:YAG sessions, four to six weeks apart, with daily SPF 50 and a brightening serum between. Conservative because of what happened to your friend. Realistically: visible fading by session two or three, meaningful improvement by five. The alternative is topical-only for three months — slower, lowest risk. What I am not recommending is aggressive settings or a peel, because of the rebound risk.',
            'Le recomiendo entre cuatro y cinco sesiones conservadoras de ND:YAG, separadas de cuatro a seis semanas, con fotoprotector 50 a diario y un sérum despigmentante entre medias. Conservadoras por lo que le ocurrió a su amiga. Siendo realistas: atenuación visible hacia la segunda o tercera sesión, mejoría apreciable en la quinta. La alternativa es solo tópico durante tres meses: más lento, riesgo mínimo. Lo que no le recomiendo son parámetros agresivos ni un peeling, por el riesgo de rebote.'
          ),
          degradedEffects: { trust: { alignment: 1, credibility: 1, reliability: 1 }, willingness: 8, objectionIntensity: 2 },
          degradedNote: T(
            'MATERIAL CONSEQUENCE: the structure is right but field 1 cannot carry her own words, because the motivation was never disclosed. Alignment reaches +1 instead of +3.',
            'CONSECUENCIA MATERIAL: la estructura es correcta, pero el campo 1 no puede llevar sus propias palabras porque la motivación nunca se reveló. La Alineación llega a +1 en lugar de +3.'
          ),
          mirror: {
            signalDetected: T(
              'A direct request for a personal recommendation, from a client whose stated goal and underlying motive you both now know.',
              'Una petición directa de recomendación personal, de una clienta cuyo objetivo declarado y motivo de fondo ya conocéis las dos.'
            ),
            interpretation: T(
              'Recommending against her own words, naming an alternative, and naming an exclusion is the canonical eight-field structure delivered as speech.',
              'Recomendar contra sus propias palabras, nombrar una alternativa y nombrar una exclusión es la estructura canónica de ocho campos convertida en habla.'
            ),
            principle: J(std(4), L('; ', '; '), std(5), L('; ', '; '), duty(1), L('; ', '; '), duty(2), L('; Toolkit #4 fields 1, 4, 7 and 8.', '; Toolkit #4, campos 1, 4, 7 y 8.')),
            learnerDid: T(
              'You anchored the plan in her language, gave a genuine alternative, and stated what you are refusing to do and why.',
              'Anclaste el plan en su lenguaje, diste una alternativa real y dijiste qué te niegas a hacer y por qué.'
            ),
            alignment: 'ALIGNED',
            why: T(
              'Alignment is created by traceability to what she values; autonomy is preserved by a real alternative; the exclusion demonstrates Do No Avoidable Harm.',
              'La alineación nace de la trazabilidad hasta lo que ella valora; la autonomía se preserva con una alternativa real; la exclusión demuestra el principio de no causar daño evitable.'
            ),
            consequence: T(
              'Alignment +3 and her Phase 7 objection drops to the mildest variant — a question about pace rather than a challenge to the price.',
              'Alineación +3 y su objeción de la Fase 7 baja a la variante más leve: una pregunta sobre el ritmo, no un cuestionamiento del precio.'
            ),
            nextPriority: T(
              'Present investment only after this, using Toolkit #5 value structure.',
              'Presenta la inversión solo después de esto, con la estructura de valor del Toolkit #5.'
            )
          }
        }
      ]
    },
    gate(cs, artifacts) {
      if (!artifacts['4']) {
        return {
          canAdvance: false,
          reason: T(
            'Toolkit #4 (MIRROR Recommendation Builder) must be completed before Phase 7.',
            'El Toolkit #4 (Constructor de Recomendaciones MIRROR) debe completarse antes de la Fase 7.'
          )
        };
      }
      if (!artifacts['5']) {
        return {
          canAdvance: false,
          reason: T(
            'Toolkit #5 (Price & Value Presentation Planner) must be completed before Phase 7.',
            'El Toolkit #5 (Planificador de Presentación de Precio y Valor) debe completarse antes de la Fase 7.'
          )
        };
      }
      return { canAdvance: true };
    }
  },

  // ===================== PHASE 7 — DECISION SUPPORT =======================
  decisionSupport: {
    key: 'decisionSupport',
    toolkit: 6,
    signal(cs) {
      // MATERIAL BRANCHING: which objection appears is determined by prior state.
      if (cs.objectionIntensity <= 1) {
        return {
          source: 'Sofia',
          objectionVariant: 'PACE',
          intensity: 1,
          quote: T(
            '"That all makes sense. My only real question is timing — five sessions over five months is a longer commitment than I pictured. Can I start and see how session two goes before I commit to the whole thing?"',
            '«Todo eso tiene sentido. Mi única duda real es el calendario: cinco sesiones en cinco meses es un compromiso más largo del que me imaginaba. ¿Puedo empezar y ver cómo va la segunda sesión antes de comprometerme con todo?»'
          ),
          subtext: T(
            'Lowest-intensity objection. This is a pace request from an aligned client, not resistance. Surface = timeline; underlying = wanting a reversible first step.',
            'Objeción de intensidad mínima. Es una petición de ritmo de una clienta alineada, no resistencia. Superficie = calendario; fondo = querer un primer paso reversible.'
          )
        };
      }
      if (cs.objectionIntensity === 2) {
        return {
          source: 'Sofia',
          objectionVariant: 'RISK',
          intensity: 2,
          quote: T(
            '"I hear you, but how do I actually know I won\'t end up like my friend? You\'re telling me it\'s conservative, but she was told it was safe too."',
            '«La escucho, pero ¿cómo sé de verdad que no voy a acabar como mi amiga? Usted me dice que es conservador, pero a ella también le dijeron que era seguro.»'
          ),
          subtext: T(
            'Mid-intensity. The fear was never fully resolved in Discovery or Education, so it resurfaces as a credibility challenge at the decision point.',
            'Intensidad media. El miedo nunca se resolvió del todo en Descubrimiento ni en Educación, así que reaparece como un cuestionamiento de credibilidad en el momento de decidir.'
          )
        };
      }
      return {
        source: 'Sofia',
        objectionVariant: 'PRICE_PRESSURE',
        intensity: 3,
        quote: T(
          '"Honestly? This feels like a lot of money for something you\'ve just told me might come back. I think I need to go away and think about it — or just leave it."',
          '«¿Sinceramente? Me parece mucho dinero para algo que usted acaba de decirme que puede volver. Creo que necesito irme a pensarlo... o dejarlo estar.»'
        ),
        subtext: T(
          'Highest intensity. Trust was not built earlier, so the objection is compound: cost + doubt + exit. Surface = price; underlying = she does not believe the outcome is worth the risk with you.',
          'Intensidad máxima. La confianza no se construyó antes, así que la objeción es compuesta: coste + duda + salida. Superficie = precio; fondo = no cree que el resultado compense el riesgo contigo.'
        )
      };
    },
    decision: {
      prompt: T(
        'Phase 7 objective is to explore objections and support her pace. Note: the objection you are facing was determined by your earlier choices.',
        'El objetivo de la Fase 7 es explorar objeciones y acompañar su ritmo. Ojo: la objeción a la que te enfrentas la determinaron tus decisiones anteriores.'
      ),
      options: [
        {
          id: 'dec-overcome',
          label: T('Handle the objection and close', 'Rebatir la objeción y cerrar'),
          language: T(
            'I understand — but if you wait, the pigment gets more established and it gets harder. I can hold today\'s price until Friday if that helps you decide.',
            'Lo entiendo, pero si espera, el pigmento se asienta más y se vuelve más difícil. Puedo mantenerle el precio de hoy hasta el viernes si eso le ayuda a decidirse.'
          ),
          effects: { trust: { safety: -2, alignment: -2, reliability: -1 }, willingness: -20, posture: 'withdrawn' },
          mirror: {
            signalDetected: T('A request for time or a statement of doubt.', 'Una petición de tiempo o una declaración de duda.'),
            interpretation: T(
              'Urgency plus a price deadline converts Decision Support into pressure. It answers her hesitation by making hesitation expensive.',
              'Urgencia más fecha límite de precio convierte el Apoyo a la Decisión en presión. Responde a su vacilación encareciendo el vacilar.'
            ),
            principle: J(duty(2), L('; ', '; '), std(1), L('; ', '; '), std(6), L('; Phase 7 objective (\"support pace\", not overcome).', '; objetivo de la Fase 7 («respetar el ritmo», no vencer).')),
            learnerDid: T('You treated her pace as an obstacle to remove.', 'Trataste su ritmo como un obstáculo que eliminar.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'The canonical objective of this phase is to explore objections and support pace. Manufactured urgency violates autonomy directly.',
              'El objetivo canónico de esta fase es explorar objeciones y acompañar el ritmo. La urgencia fabricada vulnera la autonomía de forma directa.'
            ),
            consequence: T(
              'MATERIAL: willingness -20 and posture withdrawn. The derived outcome will move toward NO regardless of everything you did well earlier.',
              'MATERIAL: disposición -20 y postura retirada. El resultado derivado se desplazará hacia el NO por bien que hicieras todo lo anterior.'
            ),
            nextPriority: T(
              'Separate the surface objection from the underlying concern before responding at all.',
              'Separa la objeción superficial de la preocupación de fondo antes siquiera de responder.'
            )
          }
        },
        {
          id: 'dec-concede',
          label: T('Accept the objection at face value and retreat', 'Aceptar la objeción tal cual y retirarte'),
          language: T(
            'Of course, no pressure at all. Have a think and let me know whenever you\'re ready.',
            'Por supuesto, ninguna presión. Piénselo y me dice cuando lo tenga claro.'
          ),
          effects: { trust: { reliability: -1, alignment: -1 }, willingness: -5, posture: 'polite' },
          mirror: {
            signalDetected: T(
              'A stated objection with an unexplored reason underneath it.',
              'Una objeción enunciada con una razón sin explorar por debajo.'
            ),
            interpretation: T(
              'Immediate retreat is not respect for autonomy — it is a failure to diagnose. She leaves with the concern intact and no agreed next step.',
              'Retirarse de inmediato no es respeto por la autonomía: es un fallo de diagnóstico. Ella se va con la preocupación intacta y sin ningún paso siguiente acordado.'
            ),
            principle: J(L('Phase 7 objective; ', 'Objetivo de la Fase 7; '), std(2), L('; Toolkit #6 (surface vs underlying).', '; Toolkit #6 (superficie frente a subyacente).')),
            learnerDid: T(
              'You accepted the surface statement without diagnosing the concern.',
              'Aceptaste el enunciado superficial sin diagnosticar la preocupación.'
            ),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'Autonomy is respected, but the phase objective — explore the objection — was skipped, so nothing was resolved.',
              'Se respeta la autonomía, pero el objetivo de la fase — explorar la objeción — se omitió, así que no se resolvió nada.'
            ),
            consequence: T(
              'Willingness drifts down and no follow-up commitment exists, which weakens the continuation plan in Phase 8.',
              'La disposición se desliza a la baja y no existe ningún compromiso de seguimiento, lo que debilita el plan de continuidad de la Fase 8.'
            ),
            nextPriority: T(
              'Diagnose first, then respect the answer she gives afterwards.',
              'Diagnostica primero y después respeta la respuesta que ella dé.'
            )
          }
        },
        {
          id: 'dec-diagnose',
          label: T(
            'Diagnose the underlying concern, then answer it and hand back the choice',
            'Diagnosticar la preocupación de fondo, responderla y devolverle la elección'
          ),
          language: T(
            'Let me check I understand what you\'re actually weighing. Tell me if I\'m wrong: it isn\'t really the number of sessions — it\'s that you don\'t want to be committed to something you can\'t reverse if your skin reacts badly. If that\'s it, here is what I would do: book two sessions, not five. We assess your response after session two, and if your skin doesn\'t behave the way I expect, we stop and switch to the topical route. You don\'t need to decide about sessions three to five today. And if you\'d rather take the whole thing away and think, that is a completely reasonable answer and I\'ll write down what we agreed either way.',
            'Déjeme comprobar si entiendo lo que está sopesando. Corríjame si me equivoco: no es realmente el número de sesiones, es que no quiere comprometerse con algo que no pueda deshacer si su piel reacciona mal. Si es eso, esto es lo que yo haría: reserve dos sesiones, no cinco. Valoramos su respuesta después de la segunda y, si su piel no se comporta como espero, paramos y cambiamos a la vía tópica. No tiene que decidir hoy sobre las sesiones tres a cinco. Y si prefiere llevárselo todo y pensarlo, es una respuesta completamente razonable y, en cualquier caso, le dejo por escrito lo que hayamos acordado.'
          ),
          effects: { trust: { safety: 1, understanding: 2, alignment: 2, reliability: 2 }, willingness: 18, posture: 'engaged', flags: { objectionDiagnosed: true } },
          mirror: {
            signalDetected: T(
              'A surface objection about time or money sitting on top of an underlying concern about irreversibility and risk.',
              'Una objeción superficial sobre tiempo o dinero apoyada sobre una preocupación de fondo por la irreversibilidad y el riesgo.'
            ),
            interpretation: T(
              'Naming the underlying concern and restructuring the commitment answers the real question. Explicitly permitting her to decline keeps the decision hers.',
              'Nombrar la preocupación de fondo y reestructurar el compromiso responde a la pregunta real. Darle permiso explícito para decir que no mantiene la decisión en sus manos.'
            ),
            principle: J(L('Phase 7 objective; ', 'Objetivo de la Fase 7; '), std(2), L('; ', '; '), std(4), L('; ', '; '), duty(2), L('; Toolkit #6 (surface → underlying → trust gap → response category).', '; Toolkit #6 (superficie → subyacente → brecha de confianza → categoría de respuesta).')),
            learnerDid: T(
              'You separated surface from underlying, restructured the offer to make the first step reversible, and returned the decision.',
              'Separaste la superficie del fondo, reestructuraste la propuesta para que el primer paso fuera reversible y devolviste la decisión.'
            ),
            alignment: 'ALIGNED',
            why: T(
              'Exploring the objection and supporting pace is precisely the canonical objective, and a reversible first step is what makes support real rather than rhetorical.',
              'Explorar la objeción y acompañar el ritmo es justamente el objetivo canónico, y un primer paso reversible es lo que hace que ese acompañamiento sea real y no retórico.'
            ),
            consequence: T(
              'Reliability +2 and Alignment +2. Whatever she decides, the decision is now informed and the relationship survives it.',
              'Fiabilidad +2 y Alineación +2. Decida lo que decida, la decisión ya es informada y la relación sobrevive a ella.'
            ),
            nextPriority: T(
              'Record the agreed structure in Toolkit #8 so the commitment you made is the one that gets executed.',
              'Registra la estructura acordada en el Toolkit #8 para que el compromiso que asumiste sea el que se ejecute.'
            )
          }
        }
      ]
    },
    gate(cs, artifacts) {
      if (!artifacts['6']) {
        return {
          canAdvance: false,
          reason: T(
            'Toolkit #6 (Objection Diagnostic) must be completed before the Decision Engine derives an outcome.',
            'El Toolkit #6 (Diagnóstico de Objeciones) debe completarse antes de que el Motor de Decisión derive un resultado.'
          )
        };
      }
      return { canAdvance: true };
    }
  },

  // ============== PHASE 8 — RELATIONSHIP CONTINUATION =====================
  // Phase 8 is executed by the Continuation Engine (see engines/continuationEngine.js).
  continuation: {
    key: 'continuation',
    toolkit: 8,
    signal(cs) {
      return {
        source: T('Continuation Engine', 'Motor de Continuación'),
        quote: T(
          'The consultation is over. What happens next is not automatic.',
          'La consulta ha terminado. Lo que ocurre después no es automático.'
        ),
        subtext: T(
          'Phase 8 is a canonical phase, not an epilogue. The relationship state transition and the follow-up plan are executed here.',
          'La Fase 8 es una fase canónica, no un epílogo. La transición del estado de la relación y el plan de seguimiento se ejecutan aquí.'
        )
      };
    },
    decision: null, // handled by continuationEngine
    gate() { return { canAdvance: true }; }
  }
};

// ---------------------------------------------------------------------------
// Decision-outcome voice (used by the Decision Engine)
// English wording is the canonical Sofia voice, unchanged.
// ---------------------------------------------------------------------------
const voice = {
  YES: {
    disclosed: T(
      'Yes. Let\'s start with the first two and see how my skin does. Thank you for not pushing me.',
      'Sí. Empecemos por las dos primeras y vemos cómo responde mi piel. Gracias por no presionarme.'
    ),
    undisclosed: T(
      'Alright, let\'s do it. I still feel like you don\'t entirely know why I care about this, but I trust the plan.',
      'De acuerdo, hagámoslo. Sigo teniendo la sensación de que no sabe del todo por qué esto me importa, pero me fío del plan.'
    )
  },
  DEFER: T(
    'I\'d like to think about it. Can we speak again in two weeks?',
    'Me gustaría pensarlo. ¿Podemos hablar otra vez dentro de dos semanas?'
  ),
  NO: T(
    'I don\'t think this is for me. Thank you for your time.',
    'Creo que esto no es para mí. Gracias por su tiempo.'
  )
};

// ---------------------------------------------------------------------------
// Case facts for the toolkit validators (scenario-aware honesty checks).
// English wording matches the canonical Sofia defaults byte-for-byte.
// ---------------------------------------------------------------------------
const caseFacts = {
  clientName: 'Sofia',
  motivationItem: 'hidden_motivation',
  motiveRegex: /(video|call|camera|work|client|professional|seen|visib|vídeo|videollamada|llamada|cámara|camara|trabajo|profesional|clienta|vean|verla|pantalla)/i,
  motiveIssue: T(
    'Sofia disclosed a professional-visibility motive (video calls). The map does not reflect it.',
    'Sofia reveló un motivo de visibilidad profesional (las videollamadas). El mapa no lo refleja.'
  ),
  priorExperienceIssue: T(
    'Prior experience risk is blank. Sofia disclosed a prior laser outcome — the canvas must carry it or Phase 7 will meet it cold.',
    'El riesgo por experiencia previa está en blanco. Sofia contó el resultado de un láser anterior — el lienzo debe recogerlo o la Fase 7 lo encontrará en frío.'
  ),
  limitationIssue: T(
    'Field 6 states no limitation. Melasma is managed, not cured — an expectation with no ceiling is an overclaim (Ethical Duty 4).',
    'El campo 6 no indica ninguna limitación. El melasma se controla, no se cura — una expectativa sin techo es una sobrepromesa (Deber Ético 4).'
  ),
  whyNowIssue: T(
    'You ticked "I understand why it matters now", but Sofia has not disclosed her motivation. Untick it or return to Discovery and ask.',
    'Marcaste «Entiendo por qué le importa ahora», pero Sofia no ha revelado su motivación. Desmárcalo o vuelve al Descubrimiento y pregunta.'
  ),
  undisclosedMotiveIssue: T(
    'MATERIAL: Sofia never disclosed a motivation in this attempt. Recording an inferred motivation as fact is not permitted — write "Not disclosed" and note what you would ask next time.',
    'MATERIAL: Sofia nunca reveló una motivación en este intento. Registrar una motivación inferida como un hecho no está permitido — escribe «No revelado» y anota qué preguntarías la próxima vez.'
  )
};

// Toolkit #8 draft rows for this case (Continuation Engine).
// English wording matches the canonical Sofia pack.
const followUpPack = {
  motivationItem: 'hidden_motivation',
  yesRows: [
    T(
      'Book session 1 and 2; send pre-treatment and SPF protocol',
      'Reservar las sesiones 1 y 2; enviar el protocolo previo al tratamiento y el de fotoprotección'
    ),
    T(
      'Confirm the booking is understood and answer anything that surfaced overnight',
      'Confirmar que la reserva ha quedado clara y resolver lo que le haya surgido de un día para otro'
    ),
    T('Check SPF routine has actually started', 'Comprobar que la rutina de fotoprotección ha empezado de verdad'),
    T('Pre-session readiness check', 'Comprobación de preparación previa a la sesión'),
    T(
      'Post session 1 response assessment against the stated expectation',
      'Valoración de la respuesta tras la sesión 1 frente a la expectativa declarada'
    )
  ],
  reviewNote: T(
    'Tie the 30-day review to the outcome she named, not to the pigment score alone.',
    'Ata la revisión de los 30 días al resultado que ella nombró, no solo a la puntuación del pigmento.'
  )
};

// ---------------------------------------------------------------------------
// ENGINE API
// ---------------------------------------------------------------------------

/** Returns the phase payload the learner sees, computed against current state. */
function getPhaseContent(phaseKey, clientState) {
  const phase = phases[phaseKey];
  if (!phase) return null;
  const cs = clientState || initialClientState();
  const signal = phase.signal(cs);

  let decision = null;
  if (phase.decision) {
    decision = {
      prompt: phase.decision.prompt,
      options: phase.decision.options.map(o => {
        // Degrade an option's language when its precondition was never met.
        const degraded = o.requiresRevealed && !cs.revealed.includes(o.requiresRevealed);
        return {
          id: o.id,
          label: o.label,
          language: degraded && o.degradedLanguage ? o.degradedLanguage : o.language,
          degraded: !!degraded
        };
      })
    };
  }

  return {
    phaseKey,
    clientSignal: signal,
    decision,
    toolkit: phase.toolkit || null,
    secondaryToolkit: phase.secondaryToolkit || null
  };
}

/**
 * Resolve a learner choice: mutate the client-state ledger and return the
 * material consequence. This is the single place branching is decided.
 */
function resolveChoice(phaseKey, optionId, clientState) {
  const phase = phases[phaseKey];
  if (!phase || !phase.decision) return null;
  const option = phase.decision.options.find(o => o.id === optionId);
  if (!option) return null;

  const degraded = option.requiresRevealed && !clientState.revealed.includes(option.requiresRevealed);
  const effects = degraded && option.degradedEffects ? option.degradedEffects : option.effects;
  const before = JSON.parse(JSON.stringify(clientState.trust));
  const willingnessBefore = clientState.willingness;

  const delta = applyEffects(clientState, effects);

  return {
    optionId: option.id,
    label: option.label,
    languageUsed: degraded && option.degradedLanguage ? option.degradedLanguage : option.language,
    degraded: !!degraded,
    degradedNote: degraded ? (option.degradedNote || null) : null,
    mirror: option.mirror,
    consequence: {
      trustBefore: before,
      trustAfter: JSON.parse(JSON.stringify(clientState.trust)),
      trustDelta: delta.trust,
      willingnessBefore,
      willingnessAfter: clientState.willingness,
      posture: clientState.posture,
      objectionIntensity: clientState.objectionIntensity,
      newlyRevealed: delta.revealed,
      stillWithheld: clientState.withheld.slice()
    }
  };
}

function gateFor(phaseKey, clientState, artifacts) {
  const phase = phases[phaseKey];
  if (!phase || !phase.gate) return { canAdvance: true };
  return phase.gate(clientState, artifacts || {});
}

module.exports = {
  sofiaProfile,
  intakeBrief,
  phases,
  initialClientState,
  getPhaseContent,
  resolveChoice,
  gateFor,
  applyEffects,
  voice,
  caseFacts,
  followUpPack
};
