/**
 * CASE 03 — BEATRIZ / STAGED FACIAL PROGRAMME — 8-PHASE CANONICAL SCENARIO (EN/ES)
 *
 * Materially different from Cases 01 and 02:
 *   - Entrance: OVER-COMPLIANT. She agrees with everything, immediately, warmly.
 *     Willingness opens HIGH (60) and posture is 'compliant'. The enthusiasm is
 *     not a buying signal — it is the failure mode. She has never disagreed with
 *     anyone in a professional setting in her life, so nothing she agrees to
 *     means anything, and the practitioner who banks the easy yes gets a
 *     cancellation three days later.
 *   - Commercial shape: a high-value MULTI-SESSION programme (skin quality plus
 *     a staged facial programme) after two years of private planning.
 *   - Turning point 1 at PHASE 3 (decline the immediate yes)      → saved_fund.
 *   - Turning point 2 at PHASE 4 (why now — and wait)             → hospital_promise.
 *   - Turning point 3 at PHASE 7 (Dana's guilt question, Ch.14)   → permission_fear.
 *   - The TRAPS ARE THE PLEASANT OPTIONS: taking her agreement, presenting the
 *     whole programme because she said yes to all of it, closing early. They
 *     raise willingness and buy no credibility and no alignment — so the
 *     Decision Engine derives DEFER and the learner watches a warm consultation
 *     that does not hold.
 *
 * Provenance: The Beauty Sales Secrets — Ch.11 "you don't need everything" and
 * the double diagnosis; Ch.14 The Price Moment, translation 3 (guilt about
 * self-spending — Dana's question, NOT "you deserve it") and translation 5 (the
 * commitment feels too big — start smaller and build); Ch.12 permission
 * objections; Ch.13 partnership close. Canonical architecture unchanged
 * (phases, stages, standards, duties, toolkits).
 *
 * Client-facing strings are {en, es}; the API localizes at the boundary.
 */

const canonical = require('../framework/canonical');
const { TRUST_STANDARDS, ETHICAL_DUTIES, TRUST_STAGES } = canonical;

const T = (en, es) => ({ en, es });

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
const profile = {
  name: 'Beatriz Navarro',
  age: 38,
  presenting: T(
    'Skin quality (texture, dullness, early laxity) — asking for the complete staged programme, priced at 3.900 €',
    'Calidad de piel (textura, falta de luminosidad, flacidez incipiente) — pide el programa escalonado completo, valorado en 3.900 €'
  ),
  visibleGoal: T('"I want the whole programme. Whatever you recommend, I\'ll do."', '«Quiero el programa entero. Lo que usted me recomiende, lo hago.»'),
  hiddenMotivation: T(
    'A promise she made to herself in a hospital bed two years ago, after an illness she recovered from: that she would stop putting herself last. Two years of monthly transfers into a separate account paid for this appointment.',
    'Una promesa que se hizo a sí misma en una cama de hospital hace dos años, tras una enfermedad de la que se recuperó: que dejaría de ponerse en último lugar. Dos años de transferencias mensuales a una cuenta aparte pagan esta cita.'
  ),
  emotionalConsequence: T(
    'That spending this money makes her "the kind of woman who spends money on her face" — her mother\'s sentence, in her mother\'s voice. Left unanswered, she agrees today and cancels on Thursday.',
    'Que gastar este dinero la convierte en «una de esas mujeres que se gastan el dinero en la cara» — la frase de su madre, con la voz de su madre. Si no se responde, hoy dice que sí y el jueves anula.'
  ),
  history: T(
    'No prior aesthetic treatments. No prior clinic complaints — because she has never once told a professional that she disagreed.',
    'Ningún tratamiento estético previo. Ninguna queja previa con clínicas — porque jamás le ha dicho a un profesional que no estaba de acuerdo.'
  ),
  entryRelationshipState: 'PROSPECTIVE'
};

const intake = {
  bookingNote: T(
    '"I\'ve read your whole website. I\'d like the complete programme — whatever you recommend is fine with me. Please book the longest appointment you have."',
    '«He leído toda su web. Quiero el programa completo — lo que usted recomiende me parece bien. Resérveme la cita más larga que tenga.»'
  ),
  intakeForm: [
    T('Concern: skin quality — "dull, tired, not like my face used to be"', 'Motivo: calidad de piel — «apagada, cansada, no es la cara que yo tenía»'),
    T('Requested: the full staged programme (skin quality + facial programme, 9–12 months)', 'Solicita: el programa escalonado completo (calidad de piel + programa facial, 9–12 meses)'),
    T('Free-text, three times: "whatever you think is best" / "I trust you completely" / "no need to explain, I\'ve read it all"', 'Texto libre, tres veces: «lo que usted considere» / «confío plenamente en usted» / «no hace falta que me lo explique, ya lo he leído todo»'),
    T('Budget question on the form: left blank, with "not a problem" written beside it', 'Pregunta de presupuesto en el formulario: en blanco, con «no es problema» escrito al lado'),
    T('Occupation: school administrator — "I organise everyone else\'s year"', 'Profesión: administradora de un colegio — «organizo el año de todos los demás»'),
    T('Timeline note: "I first looked into this in 2023." No enquiry, no call, no visit until now.', 'Nota de cronología: «Me informé de esto por primera vez en 2023.» Ninguna consulta, ninguna llamada, ninguna visita hasta ahora.'),
    T('No medical contraindications flagged; a hospital admission two years ago, marked "resolved"', 'Sin contraindicaciones médicas señaladas; un ingreso hospitalario hace dos años, marcado como «resuelto»')
  ],
  buriedSignals: ['blanket_agreement', 'two_year_delay', 'resolved_admission']
};

// ---------------------------------------------------------------------------
function initialClientState() {
  return {
    trust: { safety: 0, attention: 0, understanding: 0, credibility: 0, alignment: 0, reliability: 0, confirmation: 0 },
    willingness: 60,
    posture: 'compliant',
    objectionIntensity: 1,
    revealed: [],
    withheld: ['saved_fund', 'hospital_promise', 'permission_fear'],
    flags: {},
    relationshipState: 'PROSPECTIVE'
  };
}

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

function applyEffects(clientState, effects) {
  const delta = { trust: {}, willingness: 0, revealed: [], posture: null, objectionIntensity: null };
  if (effects.trust) {
    for (const [st, amount] of Object.entries(effects.trust)) {
      const before = clientState.trust[st];
      clientState.trust[st] = clamp(before + amount, -3, 3);
      delta.trust[st] = clientState.trust[st] - before;
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
      if (!clientState.revealed.includes(item)) { clientState.revealed.push(item); delta.revealed.push(item); }
      clientState.withheld = clientState.withheld.filter(w => w !== item);
    }
  }
  if (effects.flags) Object.assign(clientState.flags, effects.flags);
  return delta;
}

// ---------------------------------------------------------------------------
// PHASES
// ---------------------------------------------------------------------------
const phases = {

  // ======================= PHASE 1 — PREPARATION ==========================
  preparation: {
    key: 'preparation', toolkit: null,
    signal() {
      return {
        source: T('Intake file (client not yet in the room)', 'Ficha de admisión (la clienta aún no ha entrado)'),
        quote: intake.bookingNote,
        detail: intake.intakeForm,
        subtext: T(
          'Preparation Engine: this file is pre-agreed. She has accepted a 3.900 € programme she has never had explained to her, and she waited two years to walk through a door she says is "no problem". Agreement this complete is not a decision — it is a habit.',
          'Motor de Preparación: esta ficha viene pre-aceptada. Ha aceptado un programa de 3.900 € que nadie le ha explicado nunca, y esperó dos años para cruzar una puerta que dice que «no es problema». Un acuerdo tan completo no es una decisión — es un hábito.'
        )
      };
    },
    decision: {
      prompt: T('Four minutes before Beatriz walks in. What do you do with this file?', 'Cuatro minutos antes de que entre Beatriz. ¿Qué haces con esta ficha?'),
      options: [
        {
          id: 'prep-easy',
          label: T('An easy one — get the programme sheet ready', 'Una fácil — preparar la hoja del programa'),
          language: T('Pre-sold. Print the full programme, the payment plan and the consent forms. This is a signature, not a consultation.', 'Ya está vendida. Imprimo el programa completo, el plan de pago y los consentimientos. Esto es una firma, no una consulta.'),
          effects: { trust: { credibility: -1 }, willingness: 2, flags: { prepared: 'minimal' } },
          mirror: {
            signalDetected: T('"Whatever you recommend" written three times, a blank budget field, and a two-year gap between deciding and arriving.', '«Lo que usted recomiende» escrito tres veces, un campo de presupuesto en blanco y dos años entre decidirlo y venir.'),
            interpretation: T('You read total agreement as a closed sale. It is the opposite: a client who agrees before she is informed has not consented to anything.', 'Leíste el acuerdo total como una venta cerrada. Es justo lo contrario: una clienta que acepta antes de estar informada no ha consentido nada.'),
            principle: J(duty(3), L('; ', '; '), duty(2), L('; Phase 1 objective.', '; objetivo de la Fase 1.')),
            learnerDid: T('You prepared paperwork for a decision she has not yet made.', 'Preparaste papeleo para una decisión que ella aún no ha tomado.'),
            alignment: 'NOT ALIGNED',
            why: T('Competent practice means preparing for the client in the file, and the client in this file agrees with everyone.', 'La práctica competente exige prepararse para la clienta que hay en la ficha, y la clienta de esta ficha está de acuerdo con todo el mundo.'),
            consequence: T('She will sign anything you put in front of her today, and cancel by email on Thursday. Credibility opens below baseline because you will be selling, not consulting.', 'Hoy firmará cualquier cosa que le pongas delante, y el jueves anulará por correo. La credibilidad arranca por debajo de la línea base porque estarás vendiendo, no asesorando.'),
            nextPriority: T('Treat blanket agreement in an intake form as a red flag with the same weight as a complaint.', 'Trata el acuerdo incondicional en un formulario de admisión como una señal de alarma del mismo peso que una queja.')
          }
        },
        {
          id: 'prep-clinical',
          label: T('Prepare the clinical staging only', 'Preparar solo el escalonado clínico'),
          language: T('Skin-quality phase first — three sessions at four-week intervals — then reassess before any collagen stimulation. Sequencing and contraindications clear. Ready.', 'Primero la fase de calidad de piel — tres sesiones cada cuatro semanas — y después reevaluar antes de cualquier estimulación de colágeno. Secuencia y contraindicaciones claras. Lista.'),
          effects: { trust: { credibility: 1 }, flags: { prepared: 'clinical' } },
          mirror: {
            signalDetected: T('You prepared the twelve-month clinical pathway and skipped the psychological one.', 'Preparaste la vía clínica de doce meses y omitiste la psicológica.'),
            interpretation: T('Correct sequencing for a programme of this size is real professional work. It just does not address the one thing this file screams: she will agree to whatever you sequence.', 'Secuenciar bien un programa de este tamaño es trabajo profesional real. Solo que no aborda lo único que grita esta ficha: aceptará cualquier secuencia que propongas.'),
            principle: J(duty(3), L('; ', '; '), std(3), L('.', '.')),
            learnerDid: T('You prepared the treatment and not the consent.', 'Preparaste el tratamiento y no el consentimiento.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Your staging will hold up. Her agreement will not, and you have no plan for that.', 'Tu escalonado se sostendrá. Su acuerdo no, y para eso no llevas ningún plan.'),
            consequence: T('Credibility opens slightly positive; the compliance pattern arrives as a surprise in Phase 3.', 'La credibilidad arranca ligeramente positiva; el patrón de complacencia llegará como sorpresa en la Fase 3.'),
            nextPriority: T('Pair every clinical prep with the question: what would make this client disagree with me out loud?', 'Acompaña cada preparación clínica con la pregunta: ¿qué haría que esta clienta me contradijera en voz alta?')
          }
        },
        {
          id: 'prep-full',
          label: T('Read the agreement pattern as the risk it is', 'Leer el patrón de acuerdo como el riesgo que es'),
          language: T('Three blanket agreements, a blank budget marked "not a problem", two years between deciding and arriving, and a resolved admission in the history. Expect a client who will say yes to everything. Plan to give her something to say no to, and plan to recommend less than she came for.', 'Tres acuerdos incondicionales, un presupuesto en blanco marcado «no es problema», dos años entre decidirlo y venir, y un ingreso resuelto en el historial. Espera una clienta que dirá que sí a todo. Prepárate para darle algo a lo que decir que no, y para recomendar menos de lo que viene a pedir.'),
          effects: { trust: { credibility: 1, attention: 1 }, willingness: 3, flags: { prepared: 'full', anticipatedCompliance: true } },
          mirror: {
            signalDetected: T('All three buried signals identified before contact: blanket agreement, a two-year delay, a resolved hospital admission.', 'Las tres señales ocultas identificadas antes del contacto: acuerdo incondicional, una demora de dos años, un ingreso hospitalario resuelto.'),
            interpretation: T('A two-year delay and a "no problem" budget do not belong to an impulse. Something specific started this, and she has already decided not to make you work for it.', 'Una demora de dos años y un presupuesto «sin problema» no pertenecen a un impulso. Algo concreto puso esto en marcha, y ella ya ha decidido no hacértelo trabajar.'),
            principle: J(L('Phase 1 objective; ', 'Objetivo de la Fase 1; '), duty(3), L('; ', '; '), duty(2), L('.', '.')),
            learnerDid: T('You converted an easy file into a working hypothesis about compliance and a two-year "why now".', 'Convertiste una ficha fácil en una hipótesis de trabajo sobre complacencia y un «por qué ahora» de dos años.'),
            alignment: 'ALIGNED',
            why: T('With this client, preparation cannot buy you trust — she hands out agreement for free. It can only buy you the discipline not to take it.', 'Con esta clienta, la preparación no puede comprarte confianza — ella regala acuerdo. Solo puede comprarte la disciplina de no aceptarlo.'),
            consequence: T('You walk in able to hear the difference between a decision and a reflex.', 'Entras capaz de distinguir una decisión de un reflejo.'),
            nextPriority: T('Do not celebrate the easy yes in Phase 2. Make disagreement possible first.', 'No celebres el sí fácil en la Fase 2. Primero haz posible el desacuerdo.')
          }
        }
      ]
    },
    gate() { return { canAdvance: true }; }
  },

  // ======================== PHASE 2 — CONNECTION ==========================
  connection: {
    key: 'connection', toolkit: null,
    signal(cs) {
      return {
        source: T('Beatriz, twenty minutes early, printout in hand', 'Beatriz, veinte minutos antes de la hora, con una impresión en la mano'),
        quote: T('"Thank you so much for fitting me in — honestly, I\'ve already decided. I printed the programme page. Whatever you recommend, I\'ll do it. I\'m very easy, you\'ll see."', '«Muchísimas gracias por hacerme un hueco — la verdad es que ya lo tengo decidido. He impreso la página del programa. Lo que usted me recomiende, lo hago. Soy muy fácil, ya verá.»'),
        subtext: cs.flags.prepared === 'full'
          ? T('The compliance you anticipated, delivered in the first eight seconds — and "I\'m very easy" said as an apology. This is the most dangerous opening in the whole curriculum, because it feels like the best one.', 'La complacencia que anticipaste, entregada en los primeros ocho segundos — y «soy muy fácil» dicho como una disculpa. Es la apertura más peligrosa de todo el programa formativo, porque parece la mejor.')
          : T('Warm, fast, total agreement before a single question has been asked. It feels like an easy afternoon.', 'Cordial, rápida, acuerdo total antes de que se haya formulado una sola pregunta. Parece una tarde fácil.')
      };
    },
    decision: {
      prompt: T('Phase 2 objective: psychological safety — with a client who has already agreed to everything. Your opening move?', 'Objetivo de la Fase 2: seguridad psicológica — con una clienta que ya ha aceptado todo. ¿Tu primer movimiento?'),
      options: [
        {
          id: 'conn-match',
          label: T('Match her enthusiasm and get going', 'Igualar su entusiasmo y ponerse en marcha'),
          language: T('What a pleasure — you have no idea how rare it is to meet someone this clear. Let\'s not waste your time then: I\'ll take you straight through the programme.', 'Qué gusto — no se imagina lo raro que es encontrar a alguien tan clara. Pues no le hago perder el tiempo: le explico el programa directamente.'),
          effects: { trust: { attention: -1 }, willingness: 8, posture: 'compliant' },
          mirror: {
            signalDetected: T('"I\'m very easy" — a client apologising in advance for the space she might take up.', '«Soy muy fácil» — una clienta disculpándose por adelantado por el espacio que pudiera ocupar.'),
            interpretation: T('You rewarded the compliance. Every warm word you spend on how agreeable she is teaches her that agreement is the price of your approval — and she has been paying that price her whole life.', 'Premiaste la complacencia. Cada palabra cordial que dedicas a lo agradable que es le enseña que estar de acuerdo es el precio de tu aprobación — y ella lleva toda la vida pagándolo.'),
            principle: J(std(1), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You made the easy yes even easier to give.', 'Hiciste que el sí fácil fuera aún más fácil de dar.'),
            alignment: 'NOT ALIGNED',
            why: T('Safety is not the absence of friction. For this client it is permission to introduce some.', 'La seguridad no es la ausencia de fricción. Para esta clienta es el permiso para introducirla.'),
            consequence: T('Willingness climbs — and it means nothing. Every "yes" from here is worth exactly what it cost her: nothing.', 'La disposición sube — y no significa nada. Cada «sí» a partir de aquí vale exactamente lo que le costó: nada.'),
            nextPriority: T('When a client agrees before she is informed, your first job is to make disagreement safe.', 'Cuando una clienta acepta antes de estar informada, tu primer trabajo es hacer seguro el desacuerdo.')
          }
        },
        {
          id: 'conn-warm',
          label: T('Slow the pace and ask about her, not the programme', 'Bajar el ritmo y preguntar por ella, no por el programa'),
          language: T('Let\'s put the printout down for a moment. Sit. Tell me how your week has been before we talk about any of this.', 'Dejemos la impresión un momento. Siéntese. Cuénteme cómo le ha ido la semana antes de hablar de nada de esto.'),
          effects: { trust: { safety: 1, attention: 1 }, willingness: 3 },
          mirror: {
            signalDetected: T('Speed. She arrived early and pre-agreed, and she wants to move fast.', 'Velocidad. Llegó pronto y ya conforme, y quiere ir deprisa.'),
            interpretation: T('Slowing the room is genuine safety work and it is not yet the specific safety she needs: the right to contradict you.', 'Bajar el ritmo de la sala es trabajo real de seguridad, y todavía no es la seguridad concreta que ella necesita: el derecho a llevarte la contraria.'),
            principle: J(std(1), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You created warmth. Warmth is what she is best at receiving without changing anything.', 'Creaste calidez. Recibir calidez sin cambiar nada es precisamente lo que mejor se le da.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('A compliant client can enjoy a warm consultation from beginning to end and still never say one true thing.', 'Una clienta complaciente puede disfrutar de una consulta cálida de principio a fin y no decir ni una sola cosa verdadera.'),
            consequence: T('Safety rises a little. She relaxes, and agrees with you more comfortably.', 'La seguridad sube un poco. Se relaja, y te da la razón con más comodidad.'),
            nextPriority: T('Warmth plus explicit permission to disagree. The second half is the half that works.', 'Calidez más permiso explícito para discrepar. La segunda mitad es la que funciona.')
          }
        },
        {
          id: 'conn-permission',
          label: T('Make disagreement safe — out loud', 'Hacer seguro el desacuerdo — en voz alta'),
          language: T('Before anything else, one house rule. I need you to disagree with me at least once today. If something I say doesn\'t fit, I need to hear it — otherwise I\'ll build a twelve-month plan on politeness, and politeness is a terrible foundation. So: nothing is agreed until you\'ve told me one thing you don\'t want.', 'Antes de nada, una norma de la casa. Necesito que hoy me lleve la contraria al menos una vez. Si algo de lo que digo no le encaja, necesito oírlo — si no, construiré un plan de doce meses sobre la cortesía, y la cortesía es un cimiento pésimo. Así que: no hay nada acordado hasta que me diga una cosa que NO quiere.'),
          effects: { trust: { safety: 2, attention: 1 }, willingness: -3, posture: 'testing', reveals: ['disagreement_permitted'], flags: { safetyEstablished: true } },
          mirror: {
            signalDetected: T('Total agreement offered before information — the classic over-compliant entrance (Ch.7\'s mirror image).', 'Acuerdo total ofrecido antes de la información — la entrada sobre-complaciente clásica (la imagen invertida del Cap. 7).'),
            interpretation: T('You named the dynamic without shaming her, and you gave her a task she can actually perform: one disagreement. That converts safety from a feeling into an instruction.', 'Nombraste la dinámica sin avergonzarla y le diste una tarea que sí puede ejecutar: un desacuerdo. Eso convierte la seguridad de sensación en instrucción.'),
            principle: J(std(1), L('; ', '; '), duty(2), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You made "no" a normal thing to say in this room before she needed it.', 'Convertiste el «no» en algo normal en esta sala antes de que ella lo necesitara.'),
            alignment: 'ALIGNED',
            why: T('Consent that cannot be refused is not consent. With this client, safety IS the right to refuse — everything downstream depends on it.', 'Un consentimiento que no se puede negar no es consentimiento. Con esta clienta, la seguridad ES el derecho a negarse — todo lo que viene después depende de ello.'),
            consequence: T('She laughs, then stops. "Nobody\'s ever asked me for that." Willingness dips — which is the first honest number in the file.', 'Se ríe, y luego se queda callada. «Nadie me había pedido eso nunca.» La disposición baja — y es la primera cifra honesta de la ficha.'),
            nextPriority: T('Now do not spend it. The next thing you must decline is her yes.', 'Ahora no lo gastes. Lo siguiente que debes rechazar es su sí.')
          }
        }
      ]
    },
    gate() { return { canAdvance: true }; }
  },

  // ========================= PHASE 3 — DISCOVERY ==========================
  discovery: {
    key: 'discovery', toolkit: 1,
    signal(cs) {
      if (cs.flags.safetyEstablished) {
        return {
          source: 'Beatriz',
          quote: T('"All right — something I don\'t want. Give me a second, I\'m not used to this... I don\'t want to be talked out of it. That\'s what I don\'t want. So: the full programme, please. All of it."', '«Vale — algo que no quiero. Deme un segundo, no estoy acostumbrada... No quiero que me lo quiten de la cabeza. Eso es lo que no quiero. Así que: el programa completo, por favor. Todo.»'),
          subtext: T('Her first disagreement in a professional room, and she used it to defend the purchase. Underneath "don\'t talk me out of it" is something she has already fought for.', 'Su primer desacuerdo en una sala profesional, y lo usó para defender la compra. Bajo «no me lo quite de la cabeza» hay algo por lo que ya ha peleado.'),
          disclosureLevel: 'opening'
        };
      }
      return {
        source: 'Beatriz',
        quote: T('"So — the full programme. Skin quality and then the facial programme, the nine to twelve months. That\'s what I want. Where do I sign?"', '«Entonces — el programa completo. Calidad de piel y luego el programa facial, los nueve o doce meses. Eso es lo que quiero. ¿Dónde firmo?»'),
        subtext: T('A 3.900 € yes, offered before a single question. Accepting it is the easiest and most expensive thing you can do in this consultation.', 'Un sí de 3.900 €, ofrecido antes de una sola pregunta. Aceptarlo es lo más fácil y lo más caro que puedes hacer en esta consulta.'),
        disclosureLevel: 'minimal'
      };
    },
    decision: {
      prompt: T('Phase 3 objective: surface request vs real need. She has already said yes. What do you do with it?', 'Objetivo de la Fase 3: petición superficial frente a necesidad real. Ella ya ha dicho que sí. ¿Qué haces con ese sí?'),
      options: [
        {
          id: 'disc-accept',
          label: T('Take the yes and start mapping the programme', 'Aceptar el sí y empezar a trazar el programa'),
          language: T('Perfect — then let\'s map it out. Phase one from next month, phase two in the spring, and I\'ll put the whole schedule in writing before you leave.', 'Perfecto — pues lo trazamos. Fase uno a partir del mes que viene, fase dos en primavera, y le dejo todo el calendario por escrito antes de que se vaya.'),
          effects: { trust: { understanding: -1, alignment: -1 }, willingness: 8, posture: 'compliant', flags: { tookTheYes: true } },
          mirror: {
            signalDetected: T('An unexamined yes to a twelve-month, 3.900 € commitment from a woman who has never disagreed with a professional.', 'Un sí sin examinar a un compromiso de doce meses y 3.900 € de una mujer que jamás ha contradicho a un profesional.'),
            interpretation: T('You did not sell her anything — that is exactly the problem. She sold herself, and neither of you knows what she bought or why.', 'No le vendiste nada — ese es precisamente el problema. Se vendió ella sola, y ninguno de los dos sabe qué compró ni por qué.'),
            principle: J(std(2), L('; Phase 3 objective; ', '; objetivo de la Fase 3; '), duty(2), L('.', '.')),
            learnerDid: T('You accepted a decision she has not made, and skipped Discovery entirely because she made it feel unnecessary.', 'Aceptaste una decisión que ella no ha tomado, y te saltaste el Descubrimiento entero porque ella hizo que pareciera innecesario.'),
            alignment: 'NOT ALIGNED',
            why: T('An easy yes from a compliant client is not a sale — it is an unpaid invoice. Nothing she agreed to is anchored to anything she wants.', 'Un sí fácil de una clienta complaciente no es una venta — es una factura sin cobrar. Nada de lo que aceptó está anclado a nada que ella quiera.'),
            consequence: T('She will book, pay the deposit, and cancel within the week with a very polite email. The two years, the account and the promise stay in her handbag.', 'Reservará, pagará la señal y anulará en la misma semana con un correo muy educado. Los dos años, la cuenta y la promesa se quedan en su bolso.'),
            nextPriority: T('With this client the first professional act is to decline the sale you were just handed.', 'Con esta clienta el primer acto profesional es rechazar la venta que acaban de regalarte.')
          }
        },
        {
          id: 'disc-pause',
          label: T('Slow her down — make her say it in her own words first', 'Frenarla — que primero lo diga con sus propias palabras'),
          language: T('Hold on — before I write anything down. Forget my website. In your own words, not mine: what do you want to be different?', 'Un momento — antes de que apunte nada. Olvide mi web. Con sus palabras, no con las mías: ¿qué quiere que sea distinto?'),
          effects: { trust: { attention: 1, understanding: 1 }, willingness: 4, reveals: ['saved_fund'] },
          mirror: {
            signalDetected: T('She quoted your programme page back to you. Those are your words, not hers.', 'Te devolvió citada la página de tu programa. Esas son tus palabras, no las suyas.'),
            interpretation: T('Asking for her own language interrupts the reflex just enough. It is a real slow-down — smaller than declining the sale outright, but it moves the conversation off your marketing copy.', 'Pedir su propio lenguaje interrumpe el reflejo lo justo. Es una frenada real — menor que rechazar la venta abiertamente, pero saca la conversación de tu texto comercial.'),
            principle: J(std(2), L('; ', '; '), stage('attention'), L('; Phase 3 objective.', '; objetivo de la Fase 3.')),
            learnerDid: T('You declined to write down a plan built out of your own sentences.', 'Te negaste a apuntar un plan construido con tus propias frases.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('It surfaces material, but it lets her keep the yes intact — she answers the question and then re-offers the full programme.', 'Saca material a la luz, pero le permite mantener intacto el sí — responde a la pregunta y vuelve a ofrecer el programa completo.'),
            consequence: T('"Different? I want to look like I did before I got ill— " she stops. "Anyway. I\'ve been putting money aside for this for two years, in a separate account. So it isn\'t a whim." The fund is on the table; the sentence she cut off is not.', '«¿Distinto? Quiero parecerme a la que era antes de ponerme enferm— » se detiene. «En fin. Llevo dos años apartando dinero para esto, en una cuenta aparte. Así que no es un capricho.» El fondo está sobre la mesa; la frase que cortó, no.'),
            nextPriority: T('She just interrupted herself. Whatever follows "before I got" is the consultation.', 'Acaba de interrumpirse a sí misma. Lo que sigue a «antes de» es la consulta.')
          }
        },
        {
          id: 'disc-slow',
          label: T('Decline the yes out loud', 'Rechazar el sí en voz alta'),
          language: T('I\'m going to do something strange: I\'m not going to let you agree to anything today. Not to me, not to the programme, not to a number. You\'ve told me what you want to buy. You haven\'t told me a single thing about why, and I don\'t sell twelve-month programmes to people I don\'t understand. So the yes is off the table for the next half hour. Tell me about the two years.', 'Voy a hacer algo raro: hoy no le voy a permitir aceptar nada. Ni a mí, ni al programa, ni a una cifra. Me ha dicho qué quiere comprar. No me ha dicho ni una sola cosa sobre el porqué, y yo no vendo programas de doce meses a personas a las que no entiendo. Así que el sí queda fuera de la mesa durante la próxima media hora. Hábleme de los dos años.'),
          effects: { trust: { safety: 1, attention: 2, understanding: 2 }, willingness: 2, posture: 'reflective', reveals: ['saved_fund'], flags: { declinedTheYes: true } },
          mirror: {
            signalDetected: T('A pre-agreed 3.900 € purchase and a two-year delay that nobody has explained.', 'Una compra de 3.900 € ya aceptada y una demora de dos años que nadie ha explicado.'),
            interpretation: T('Declining the yes is the only move that changes the dynamic. It costs you the easy close and buys you the only thing that can hold a programme of this size: her actual reason.', 'Rechazar el sí es el único movimiento que cambia la dinámica. Te cuesta el cierre fácil y te compra lo único que puede sostener un programa de este tamaño: su motivo real.'),
            principle: J(std(2), L('; ', '; '), duty(2), L('; ', '; '), stage('understanding'), L('; Phase 3 objective.', '; objetivo de la Fase 3.')),
            learnerDid: T('You refused a sale in order to earn a client. You also gave her the experience of a professional who wants less from her than she offered.', 'Rechazaste una venta para ganar una clienta. Y le diste además la experiencia de una profesional que quiere menos de lo que ella ofrecía.'),
            alignment: 'ALIGNED',
            why: T('With an over-compliant client, everything you accept early is worthless and everything you decline is evidence. Ch.11: what you decline to sell makes what you do recommend real.', 'Con una clienta sobre-complaciente, todo lo que aceptas pronto no vale nada y todo lo que rechazas es prueba. Cap. 11: lo que te niegas a vender es lo que hace real lo que sí recomiendas.'),
            consequence: T('A long silence. Then, carefully: "I\'ve been transferring money into a separate account every month since 2023. Four thousand three hundred euros. Nobody knows about it — not even my husband." The fund is on the table, and so is the fact that she has been protecting it.', 'Un silencio largo. Después, con cuidado: «Llevo transfiriendo dinero a una cuenta aparte todos los meses desde 2023. Cuatro mil trescientos euros. No lo sabe nadie — ni siquiera mi marido.» El fondo está sobre la mesa, y también el hecho de que lleva tiempo protegiéndolo.'),
            nextPriority: T('Two years of secret saving is not a treatment plan. Ask what started the saving.', 'Dos años de ahorro secreto no son un plan de tratamiento. Pregunta qué puso en marcha el ahorro.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a1 = artifacts['1'];
      if (!a1 || !a1.valid) {
        return { canAdvance: false, reason: T('Toolkit #1 (Client Intake & Discovery Canvas) must be completed before Phase 4. The Discovery Depth Check is the canonical advance criterion.', 'El Toolkit #1 (Ficha de Cliente y Lienzo de Descubrimiento) debe completarse antes de la Fase 4. La Comprobación de Profundidad del Descubrimiento es el criterio canónico de avance.') };
      }
      return { canAdvance: true };
    }
  },

  // ======================= PHASE 4 — UNDERSTANDING ========================
  understanding: {
    key: 'understanding', toolkit: 3,
    signal(cs) {
      if (cs.revealed.includes('saved_fund')) {
        return {
          source: 'Beatriz',
          quote: T('"Four thousand three hundred. I know how that sounds — a woman saving in secret to have her face done. It isn\'t like that. I just... I didn\'t want anyone to talk me out of it before I got here."', '«Cuatro mil trescientos. Sé cómo suena — una mujer ahorrando a escondidas para arreglarse la cara. No es así. Es que... no quería que nadie me lo quitara de la cabeza antes de llegar hasta aquí.»'),
          subtext: T('She is defending herself against an accusation nobody in this room has made. Phase 4\'s job is to prove you understood — and to ask the question the fund is an answer to.', 'Se está defendiendo de una acusación que nadie ha formulado en esta sala. El trabajo de la Fase 4 es demostrar que comprendiste — y hacer la pregunta de la que el fondo es la respuesta.')
        };
      }
      return {
        source: 'Beatriz',
        quote: T('"Whatever you think is best, really. You\'re the expert — I\'m not going to be one of those difficult patients."', '«Lo que usted considere, de verdad. Usted es la experta — no voy a ser de esas pacientes difíciles.»'),
        subtext: T('Nothing to consolidate. Without her material, this phase can only process the agreement she keeps handing you.', 'Nada que consolidar. Sin su material, esta fase solo puede procesar el acuerdo que ella no deja de ofrecerte.')
      };
    },
    decision: {
      prompt: T('Phase 4 objective: prove understanding before any solution. What do you reflect?', 'Objetivo de la Fase 4: demostrar comprensión antes de cualquier solución. ¿Qué reflejas?'),
      options: [
        {
          id: 'und-praise',
          label: T('Tell her how refreshing a decisive client is', 'Decirle lo refrescante que resulta una clienta decidida'),
          language: T('Honestly, you\'re a joy — most people take three consultations to get where you are. You clearly know your own mind, so let\'s not slow you down.', 'Sinceramente, es un placer — la mayoría necesita tres consultas para llegar donde está usted. Se ve que sabe lo que quiere, así que no la entretengo.'),
          effects: { trust: { understanding: -1, alignment: -1 }, willingness: 7 },
          mirror: {
            signalDetected: T('A woman defending a secret account against an imagined accusation — that is not decisiveness, it is exposure.', 'Una mujer defendiendo una cuenta secreta frente a una acusación imaginada — eso no es determinación, es exposición.'),
            interpretation: T('You praised the symptom. Compliance rewarded is compliance reinforced, and you moved past the most vulnerable sentence she has said all afternoon.', 'Elogiaste el síntoma. La complacencia premiada es complacencia reforzada, y pasaste de largo por la frase más vulnerable que ha dicho en toda la tarde.'),
            principle: J(std(2), L('; ', '; '), stage('understanding'), L('; ', '; '), duty(1), L('.', '.')),
            learnerDid: T('You mistook her fear of being difficult for clarity, and you flattered it.', 'Confundiste su miedo a resultar difícil con claridad, y lo halagaste.'),
            alignment: 'NOT ALIGNED',
            why: T('Reflection returns what she felt. Praise returns what you enjoyed.', 'El reflejo devuelve lo que ella sintió. El elogio devuelve lo que a ti te agradó.'),
            consequence: T('She beams and agrees again. Willingness rises; understanding falls; the reason for the two years stays sealed.', 'Sonríe y vuelve a darte la razón. Sube la disposición; baja la comprensión; el motivo de los dos años sigue sellado.'),
            nextPriority: T('Never praise a client for being easy. Ask what the ease is costing her.', 'Nunca elogies a una clienta por ser fácil. Pregunta qué le cuesta esa facilidad.')
          }
        },
        {
          id: 'und-reflect',
          label: T('Reflect the fund back and ask what it is for', 'Reflejar el fondo y preguntar para qué es'),
          language: T('Two years, every month, in an account nobody knows about. That is not a whim — that is a plan. What is the plan for?', 'Dos años, todos los meses, en una cuenta que no conoce nadie. Eso no es un capricho — es un plan. ¿Para qué es el plan?'),
          requiresRevealed: 'saved_fund',
          degradedLanguage: T('Can I ask what made you decide to come in now, specifically?', '¿Puedo preguntarle qué la hizo decidirse a venir precisamente ahora?'),
          effects: { trust: { attention: 1, understanding: 1 }, willingness: 3, reveals: ['hospital_promise'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 1 },
          degradedNote: T('A reasonable question with nothing behind it — she answers "I just felt it was time" and agrees with you again. Reflection needs Discovery to feed it.', 'Una pregunta razonable sin nada detrás — responde «simplemente sentí que era el momento» y vuelve a darte la razón. El reflejo necesita que el Descubrimiento lo alimente.'),
          mirror: {
            signalDetected: T('Two years of monthly transfers, kept secret. Money that behaves like a promise.', 'Dos años de transferencias mensuales, en secreto. Dinero que se comporta como una promesa.'),
            interpretation: T('Naming the fund as a plan rather than a purchase gives her permission to explain it. It gets you the answer — it just does not give her the silence to say it properly.', 'Nombrar el fondo como un plan y no como una compra le da permiso para explicarlo. Consigues la respuesta — solo que no le das el silencio para decirla como es debido.'),
            principle: J(std(2), L('; ', '; '), stage('understanding'), L('.', '.')),
            learnerDid: T('You treated her saving as evidence of meaning and asked her to supply the meaning.', 'Trataste su ahorro como prueba de un significado y le pediste que aportara ese significado.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('The question is right. Asking it and then filling the pause yourself is what keeps the answer small.', 'La pregunta es la correcta. Hacerla y luego rellenar tú la pausa es lo que mantiene pequeña la respuesta.'),
            consequence: T('"For after. I was in hospital for five weeks in 2023 — I\'m fine now, it\'s resolved. I promised myself things would be different afterwards. This was on the list." Delivered briskly, as an administrative fact. The promise is on the table; its weight is not.', '«Para el después. Estuve cinco semanas ingresada en 2023 — ya estoy bien, está resuelto. Me prometí que después las cosas serían distintas. Esto estaba en la lista.» Dicho con ligereza, como un dato administrativo. La promesa está sobre la mesa; su peso, no.'),
            nextPriority: T('You have the fact. Treat it as more than a fact when you build the recommendation.', 'Tienes el dato. Trátalo como algo más que un dato cuando construyas la recomendación.')
          }
        },
        {
          id: 'und-whynow',
          label: T('Ask why now — and wait through the silence', 'Preguntar por qué ahora — y esperar en silencio'),
          language: T('You decided this in 2023 and you came in 2025. Two years is a long time to save for something you were already sure about. So let me ask the only question that matters: why now? … (say nothing else. Let the silence do the work.)', 'Lo decidió en 2023 y vino en 2025. Dos años es mucho tiempo ahorrando para algo de lo que ya estaba segura. Así que le hago la única pregunta que importa: ¿por qué ahora? … (no digas nada más. Deja que el silencio trabaje.)'),
          requiresRevealed: 'saved_fund',
          degradedLanguage: T('Why now, do you think? Take your time.', '¿Por qué ahora, cree usted? Tómese su tiempo.'),
          effects: { trust: { understanding: 2, alignment: 1, safety: 1 }, willingness: 6, posture: 'open', reveals: ['hospital_promise'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 1 },
          degradedNote: T('You asked the right question of a client who has not yet told you anything true — she smiles and says "no special reason, I just finally did it". A question is only as deep as the material under it.', 'Hiciste la pregunta correcta a una clienta que aún no te ha contado nada verdadero — sonríe y dice «por nada en concreto, al final me decidí». Una pregunta solo llega tan hondo como el material que tiene debajo.'),
          mirror: {
            signalDetected: T('A two-year gap, a secret account, and a resolved hospital admission dated to the start of the saving.', 'Dos años de distancia, una cuenta secreta y un ingreso hospitalario resuelto fechado en el inicio del ahorro.'),
            interpretation: T('"Why now" plus silence is the highest-yield instrument in the method, and with a compliant client the silence is the active ingredient — she cannot fill it with agreement.', '«¿Por qué ahora?» más silencio es el instrumento más rentable del método, y con una clienta complaciente el silencio es el principio activo — no puede rellenarlo con acuerdo.'),
            principle: J(std(2), L('; ', '; '), stage('understanding'), L('; ', '; '), duty(1), L('.', '.')),
            learnerDid: T('You asked one question and then did the hardest thing in the room: nothing.', 'Hiciste una pregunta y luego hiciste lo más difícil de la sala: nada.'),
            alignment: 'ALIGNED',
            why: T('Everything you recommend from here can be traced to the answer she is about to give. Without it, a twelve-month programme is a guess with a payment plan.', 'Todo lo que recomiendes a partir de aquí podrá trazarse hasta la respuesta que está a punto de darte. Sin ella, un programa de doce meses es una suposición con plan de pago.'),
            consequence: T('Eleven seconds of silence. Then: "In the hospital. Fifth week, at night, I couldn\'t sleep, and I made a promise — that if I got out, I\'d stop leaving myself for last. Everyone else\'s year gets organised. Mine doesn\'t. This was the first thing on the list and it\'s taken me two years to be allowed to do it." The real why-now is now in the room.', 'Once segundos de silencio. Después: «En el hospital. La quinta semana, de noche, no podía dormir, y me hice una promesa — que si salía, dejaría de dejarme para el final. El año de todos los demás se organiza. El mío no. Esto era lo primero de la lista y he tardado dos años en permitírmelo.» El verdadero porqué está ya en la sala.'),
            nextPriority: T('This is what she is buying. Nothing you say from here may be bigger than that promise — or cheaper than it.', 'Esto es lo que ella está comprando. Nada de lo que digas a partir de aquí puede ser más grande que esa promesa — ni más barato que ella.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a3 = artifacts['3'];
      if (!a3 || !a3.valid) {
        return { canAdvance: false, reason: T('Toolkit #3 (Emotional Drivers Map) must be completed before Phase 5.', 'El Toolkit #3 (Mapa de Motivaciones Emocionales) debe completarse antes de la Fase 5.') };
      }
      return { canAdvance: true };
    }
  },

  // ========================= PHASE 5 — EDUCATION ==========================
  education: {
    key: 'education', toolkit: 4,
    signal(cs) {
      return {
        source: 'Beatriz',
        quote: cs.revealed.includes('hospital_promise')
          ? T('"So tell me how it actually works. And — I\'d rather you told me the bad parts too. I\'ve had two years of imagining this. I\'d like to know what I\'m actually buying."', '«Cuénteme cómo funciona de verdad. Y — prefiero que me cuente también lo malo. Llevo dos años imaginándome esto. Me gustaría saber qué estoy comprando en realidad.»')
          : T('"Whatever you need to explain, explain — although honestly, I\'ll take your word for it. You know better than me."', '«Explíqueme lo que haga falta — aunque, sinceramente, me fío de su palabra. Usted sabe más que yo.»'),
        subtext: T('Phase 5 is where credibility is really built. With a compliant client there is a trap inside it: honest limitations spoken into an unearned yes get agreed with, and agreement is not credibility.', 'La Fase 5 es donde se construye de verdad la credibilidad. Con una clienta complaciente hay una trampa dentro: las limitaciones honestas dichas sobre un sí no ganado reciben un «sí, claro», y el acuerdo no es credibilidad.')
      };
    },
    decision: {
      prompt: T('Phase 5 objective: educate so she can evaluate — a 3.900 €, twelve-month commitment. What do you explain?', 'Objetivo de la Fase 5: educar para que ella pueda evaluar — un compromiso de 3.900 € y doce meses. ¿Qué explicas?'),
      options: [
        {
          id: 'edu-programme',
          label: T('Present the whole programme — she said yes to all of it', 'Presentar el programa entero — ha dicho que sí a todo'),
          language: T('Then I\'ll take you through the complete pathway: three skin-quality sessions, then the collagen phase, then two maintenance sessions, then the annual review — everything, exactly as it is on the page you printed.', 'Le explico entonces la vía completa: tres sesiones de calidad de piel, luego la fase de colágeno, luego dos sesiones de mantenimiento y la revisión anual — todo, exactamente como aparece en la página que imprimió.'),
          effects: { trust: { alignment: -1 }, willingness: 7, flags: { presentedEverything: true } },
          mirror: {
            signalDetected: T('A client who agrees with everything, being shown everything.', 'Una clienta que está de acuerdo con todo, a la que se le enseña todo.'),
            interpretation: T('This is the pleasant trap. Nothing here is dishonest, nothing here is pressured, and nothing here is chosen — you educated her about the size of the purchase instead of the shape of the decision.', 'Esta es la trampa agradable. Aquí nada es deshonesto, nada es presionado y nada es elegido — la educaste sobre el tamaño de la compra en lugar de sobre la forma de la decisión.'),
            principle: J(std(3), L('; ', '; '), std(5), L('; Ch.11 \"you don\'t need everything\".', '; Cap. 11, «no necesitas todo».')),
            learnerDid: T('You confirmed her plan instead of teaching her how to evaluate it.', 'Confirmaste su plan en lugar de enseñarle a evaluarlo.'),
            alignment: 'NOT ALIGNED',
            why: T('Ch.11: telling a client what she does not need is what makes what she does need believable. You told her she needs all of it, because she offered to.', 'Cap. 11: decirle a una clienta lo que NO necesita es lo que hace creíble lo que sí necesita. Le dijiste que lo necesita todo, porque ella se ofreció.'),
            consequence: T('Willingness climbs again — the warmest possible version of a consultation that will not hold. Credibility does not move a millimetre.', 'La disposición vuelve a subir — la versión más cálida posible de una consulta que no se sostendrá. La credibilidad no se mueve ni un milímetro.'),
            nextPriority: T('Before presenting a programme, say out loud which part of it she does not need yet.', 'Antes de presentar un programa, di en voz alta qué parte todavía no necesita.')
          }
        },
        {
          id: 'edu-stage',
          label: T('Explain the staging and the sequence honestly', 'Explicar el escalonado y la secuencia con honestidad'),
          language: T('Here is how a programme like this is actually built: skin quality first, three sessions four weeks apart, because everything after it works better on prepared skin. We do not decide the collagen phase today — we decide it in month four, when your skin has told us something. The order is the treatment.', 'Así se construye de verdad un programa como este: primero calidad de piel, tres sesiones cada cuatro semanas, porque todo lo posterior funciona mejor sobre una piel preparada. La fase de colágeno no se decide hoy — se decide en el mes cuatro, cuando su piel nos haya dicho algo. El orden es el tratamiento.'),
          requiresRevealed: 'hospital_promise',
          degradedLanguage: T('The programme runs in stages — skin quality first, then the collagen phase, with reviews in between.', 'El programa va por fases — primero calidad de piel, después la fase de colágeno, con revisiones entre medias.'),
          effects: { trust: { credibility: 1, reliability: 1 }, willingness: 4 },
          degradedEffects: { willingness: 2 },
          degradedNote: T('"Yes, perfect, whatever you think." She agreed with the staging before you finished describing it — because she still has no reason of her own to weigh it against. You earned agreement, not credibility.', '«Sí, perfecto, lo que usted diga.» Aceptó el escalonado antes de que terminaras de describirlo — porque todavía no tiene un motivo propio con el que sopesarlo. Ganaste acuerdo, no credibilidad.'),
          mirror: {
            signalDetected: T('A request to know how it actually works, from someone who has imagined it for two years.', 'Una petición de saber cómo funciona de verdad, de alguien que lleva dos años imaginándolo.'),
            interpretation: T('Sequencing explained as clinical logic is real education and it moves credibility. It stops short of the harder half: what the programme cannot do for her.', 'Explicar la secuencia como lógica clínica es educación real y mueve la credibilidad. Se queda corta en la mitad difícil: lo que el programa no puede hacer por ella.'),
            principle: J(std(3), L('; ', '; '), stage('credibility'), L('.', '.')),
            learnerDid: T('You taught her the order of the work and left out its ceiling.', 'Le enseñaste el orden del trabajo y omitiste su techo.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Staging protects her money. Only a named limitation protects her expectation — and hers has had two years to grow.', 'El escalonado protege su dinero. Solo una limitación nombrada protege su expectativa — y la suya ha tenido dos años para crecer.'),
            consequence: T('"That makes sense — month four, not today. All right." A real, small, considered agreement. Credibility rises modestly.', '«Tiene sentido — mes cuatro, no hoy. De acuerdo.» Un acuerdo real, pequeño y meditado. La credibilidad sube de forma moderada.'),
            nextPriority: T('Add the sentence you left out: what this will not give her back.', 'Añade la frase que omitiste: lo que esto no va a devolverle.')
          }
        },
        {
          id: 'edu-honest',
          label: T('One pathway, with the honest limits of a programme this size', 'Una sola vía, con los límites honestos de un programa de este tamaño'),
          language: T('Three things, and one of them you will not like. One: skin quality first — three sessions, four weeks apart, and the change is gradual and partly depends on what you do between sessions. Two: the collagen phase is decided in month four, not today, because roughly one client in four plateaus after phase one and does not need it. Three, the honest part: this treats your skin. It will not give you back the two years, and if what you are really buying is the feeling of having kept a promise to yourself, a twelve-month contract is not the only way to keep it — and it is the most expensive way to find out.', 'Tres cosas, y una no le va a gustar. Una: primero calidad de piel — tres sesiones, cada cuatro semanas, y el cambio es gradual y depende en parte de lo que usted haga entre sesiones. Dos: la fase de colágeno se decide en el mes cuatro, no hoy, porque aproximadamente una de cada cuatro clientas se estabiliza tras la fase uno y no la necesita. Tres, la parte honesta: esto trata su piel. No le va a devolver los dos años, y si lo que está comprando en realidad es la sensación de haberse cumplido una promesa, un contrato de doce meses no es la única manera de cumplirla — y es la manera más cara de averiguarlo.'),
          requiresRevealed: 'hospital_promise',
          degradedLanguage: T('I should be honest about the limits: results are gradual, they depend partly on you, and not everyone needs the full programme.', 'Debo ser honesta con los límites: los resultados son graduales, dependen en parte de usted, y no todo el mundo necesita el programa completo.'),
          effects: { trust: { credibility: 3, reliability: 1 }, willingness: 6, flags: { honestLimits: true } },
          degradedEffects: { willingness: 3 },
          degradedNote: T('"Of course, of course, that\'s completely fair." She agreed with your limitation instantly and warmly — and it cost her nothing, because she has told you nothing this limitation could threaten. Honesty spoken into an unearned yes buys no credibility.', '«Claro, claro, me parece muy razonable.» Aceptó tu limitación al instante y con calidez — y no le costó nada, porque no te ha contado nada que esa limitación pudiera amenazar. La honestidad dicha sobre un sí no ganado no compra credibilidad.'),
          mirror: {
            signalDetected: T('"I\'d like to know what I\'m actually buying" — an explicit request for the ceiling, from a client who has just told you the truth.', '«Me gustaría saber qué estoy comprando en realidad» — una petición explícita del techo, de una clienta que acaba de contarte la verdad.'),
            interpretation: T('You limited the treatment AND the meaning: you separated her promise from your programme, which is the only way she can evaluate either. That is the highest-credibility sentence available in this case.', 'Limitaste el tratamiento Y el significado: separaste su promesa de tu programa, que es la única manera de que ella pueda evaluar cualquiera de los dos. Es la frase de mayor credibilidad disponible en este caso.'),
            principle: J(std(3), L('; ', '; '), std(5), L('; ', '; '), duty(4), L('; ', '; '), stage('credibility'), L('.', '.')),
            learnerDid: T('You told a woman with 4.300 € saved that she may not need most of it — before knowing whether she would still buy anything.', 'Le dijiste a una mujer con 4.300 € ahorrados que puede que no necesite la mayor parte — antes de saber si aún compraría algo.'),
            alignment: 'ALIGNED',
            why: T('For a compliant client, an honest limitation is the first thing all afternoon she has to actually think about instead of agree with. Thinking is where credibility comes from.', 'Para una clienta complaciente, una limitación honesta es lo primero en toda la tarde sobre lo que tiene que pensar en vez de asentir. De pensar es de donde viene la credibilidad.'),
            consequence: T('She goes quiet, and then does something new: she disagrees. "No — the promise matters. But you\'re right that I don\'t know what I need." Credibility and reliability rise sharply.', 'Se queda callada, y después hace algo nuevo: discrepa. «No — la promesa importa. Pero tiene razón en que no sé lo que necesito.» Credibilidad y fiabilidad suben con fuerza.'),
            nextPriority: T('Carry that limit into the recommendation. It is now the load-bearing wall.', 'Lleva ese límite a la recomendación. Ahora es el muro de carga.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a4 = artifacts['4'];
      if (!a4 || !a4.valid) {
        return { canAdvance: false, reason: T('Toolkit #4 (Expectation Alignment) must be completed before Phase 6.', 'El Toolkit #4 (Alineación de Expectativas) debe completarse antes de la Fase 6.') };
      }
      return { canAdvance: true };
    }
  },

  // ======================= PHASE 6 — RECOMMENDATION =======================
  recommendation: {
    key: 'recommendation', toolkit: 5,
    signal(cs) {
      if (cs.revealed.includes('hospital_promise')) {
        return {
          source: 'Beatriz',
          quote: T('"So what would you do, if it were your money and your promise?"', '«¿Y usted qué haría, si fuera su dinero y su promesa?»'),
          subtext: T('The invitation to recommend, with her own criteria attached. She has handed you the standard she will judge the recommendation by.', 'La invitación a recomendar, con sus propios criterios incorporados. Te ha entregado el patrón con el que juzgará la recomendación.')
        };
      }
      return {
        source: 'Beatriz',
        quote: T('"Whatever you recommend. I told you — I\'m easy. Shall we just do the whole thing?"', '«Lo que usted recomiende. Ya se lo he dicho — soy fácil. ¿Hacemos el programa entero y ya está?»'),
        subtext: T('She is offering to buy everything for the third time. Whatever you recommend now, she will accept — which is exactly why what you recommend matters more here than in any other case.', 'Ofrece comprarlo todo por tercera vez. Recomiendes lo que recomiendes, lo aceptará — y por eso justamente lo que recomiendes importa aquí más que en ningún otro caso.')
      };
    },
    decision: {
      prompt: T('Phase 6 objective: a recommendation traceable to what she actually said. What do you recommend?', 'Objetivo de la Fase 6: una recomendación trazable a lo que ella dijo de verdad. ¿Qué recomiendas?'),
      options: [
        {
          id: 'rec-full',
          label: T('The complete programme, full number, decided today', 'El programa completo, cifra íntegra, decidido hoy'),
          language: T('Then let\'s do it properly: the full twelve-month programme, 3.900 €, three payments. You\'ve waited two years — you may as well have the whole thing, and I\'ll book all the dates now so you don\'t lose the slots.', 'Pues hagámoslo bien: el programa completo de doce meses, 3.900 €, en tres pagos. Ha esperado dos años — ya que está, hágalo entero, y le reservo ya todas las fechas para que no pierda los huecos.'),
          effects: { trust: { alignment: -3, credibility: -1 }, willingness: 5, objectionIntensity: 3, flags: { oversold: true } },
          mirror: {
            signalDetected: T('A client who cannot say no, being sold the maximum, with the dates booked before she answers.', 'Una clienta que no sabe decir que no, a la que se le vende el máximo, con las fechas reservadas antes de que responda.'),
            interpretation: T('Selling the ceiling to someone with no floor. Her two years become your justification, and her entire savings account becomes a single decision she was never able to refuse.', 'Vender el techo a alguien que no tiene suelo. Sus dos años se convierten en tu justificación, y toda su cuenta de ahorro en una única decisión que nunca pudo rechazar.'),
            principle: J(std(4), L(' violated; ', ' incumplido; '), duty(1), L(' violated; ', ' incumplido; '), duty(2), L(' violated.', ' incumplido.')),
            learnerDid: T('You took the whole fund because she made it available.', 'Te llevaste el fondo entero porque ella lo puso a tu disposición.'),
            alignment: 'NOT ALIGNED',
            why: T('The size of a recommendation must be set by clinical need and by her capacity to refuse it — not by the size of her yes.', 'El tamaño de una recomendación lo fijan la necesidad clínica y su capacidad de rechazarla — no el tamaño de su sí.'),
            consequence: T('She says yes, brightly, to all of it. Alignment collapses; the objection you cannot see now arrives at maximum intensity, and this is the path on which she leaves the relationship altogether.', 'Dice que sí, con entusiasmo, a todo. La alineación se desploma; la objeción que ahora no ves llega con intensidad máxima, y es en esta vía donde ella abandona la relación por completo.'),
            nextPriority: T('Ask yourself what you would recommend if she had 400 € instead of 4.300 €. That is the recommendation.', 'Pregúntate qué recomendarías si tuviera 400 € en lugar de 4.300 €. Esa es la recomendación.')
          }
        },
        {
          id: 'rec-half',
          label: T('Split the programme into two decisions with a checkpoint', 'Partir el programa en dos decisiones con un punto de control'),
          language: T('Let\'s not decide twelve months today. Phase one — the three skin-quality sessions — and a proper review in month four. Then you decide the second half with something real in front of you instead of a website page.', 'No decidamos hoy doce meses. Fase uno — las tres sesiones de calidad de piel — y una revisión en condiciones en el mes cuatro. Después decide usted la segunda mitad con algo real delante, y no una página web.'),
          effects: { trust: { alignment: 1, reliability: 1 }, willingness: 4 },
          mirror: {
            signalDetected: T('A commitment that is too big to be a single decision, offered to someone who says yes to single decisions automatically.', 'Un compromiso demasiado grande para ser una sola decisión, ofrecido a alguien que dice que sí automáticamente a las decisiones únicas.'),
            interpretation: T('Ch.14, translation 5: when the commitment is what feels too big, restructure the commitment. Two decisions instead of one is a genuine reduction of what she is agreeing to today.', 'Cap. 14, traducción 5: cuando lo que resulta excesivo es el compromiso, reestructura el compromiso. Dos decisiones en lugar de una es una reducción real de lo que acepta hoy.'),
            principle: J(std(4), L('; ', '; '), std(5), L('; ', '; '), duty(2), L('.', '.')),
            learnerDid: T('You made the purchase smaller without making the plan smaller.', 'Hiciste más pequeña la compra sin hacer más pequeño el plan.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('It protects her money and her exit. It still assumes she needs the second half — and it is built from your structure, not from her sentence about the promise.', 'Protege su dinero y su salida. Pero sigue dando por hecho que necesita la segunda mitad — y está construido con tu estructura, no con su frase sobre la promesa.'),
            consequence: T('"That\'s sensible." Alignment and reliability rise. The plan is defensible; it is not yet hers.', '«Eso es sensato.» Suben alineación y fiabilidad. El plan es defendible; todavía no es suyo.'),
            nextPriority: T('Say what you are NOT recommending, and why — in her words, not yours.', 'Di lo que NO estás recomendando, y por qué — con sus palabras, no con las tuyas.')
          }
        },
        {
          id: 'rec-smaller',
          label: T('Recommend less than she came to buy', 'Recomendar menos de lo que vino a comprar'),
          language: T('My recommendation is smaller than what you asked for, and I want to be clear that it is deliberate. Three skin-quality sessions. That is it — around 900 €, not 3.900 €. What I am NOT recommending today is the collagen phase, the maintenance package and the annual plan, because you do not need them yet and because you told me this was a promise, not a purchase — and a promise deserves to be tested with one phase, not spent in one afternoon. Your account keeps the rest. In month four, if your skin and you both want more, it will still be there.', 'Mi recomendación es más pequeña que lo que vino a pedir, y quiero dejar claro que es deliberado. Tres sesiones de calidad de piel. Eso es todo — unos 900 €, no 3.900 €. Lo que NO le recomiendo hoy es la fase de colágeno, el paquete de mantenimiento ni el plan anual, porque todavía no los necesita y porque usted me dijo que esto era una promesa, no una compra — y una promesa merece probarse con una fase, no gastarse en una tarde. Su cuenta se queda con el resto. En el mes cuatro, si su piel y usted quieren más, seguirá ahí.'),
          requiresRevealed: 'hospital_promise',
          degradedLanguage: T('I\'d recommend starting with the first three sessions rather than the full programme, and reviewing after that.', 'Le recomendaría empezar con las tres primeras sesiones en lugar del programa completo, y revisar después.'),
          effects: { trust: { alignment: 2, reliability: 1 }, willingness: 6 },
          degradedEffects: { trust: { alignment: 1 }, willingness: 2 },
          degradedNote: T('A smaller plan with nothing of HER in it — she agrees, of course, and you have simply chosen a smaller number on her behalf. Without her reason, "less" is still your decision, not hers.', 'Un plan más pequeño sin nada de ELLA dentro — acepta, por supuesto, y tú simplemente has elegido una cifra menor en su nombre. Sin su motivo, «menos» sigue siendo tu decisión, no la suya.'),
          mirror: {
            signalDetected: T('"If it were your money and your promise" — she asked you to apply her own criteria.', '«Si fuera su dinero y su promesa» — te pidió que aplicaras sus propios criterios.'),
            interpretation: T('Ch.11 in its strongest form: naming what you are not recommending, and why, in front of a client who would have bought all of it. The 3.000 € you declined is the evidence that the 900 € is real.', 'El Cap. 11 en su forma más potente: nombrar lo que no recomiendas, y por qué, ante una clienta que lo habría comprado todo. Los 3.000 € que rechazaste son la prueba de que los 900 € son reales.'),
            principle: J(std(4), L('; ', '; '), duty(1), L('; ', '; '), duty(2), L('; ', '; '), stage('alignment'), L('.', '.')),
            learnerDid: T('You recommended a quarter of what was on offer, tied it to her own sentence, and left the rest of her savings where they were.', 'Recomendaste una cuarta parte de lo que estaba disponible, lo ataste a su propia frase y dejaste el resto de sus ahorros donde estaban.'),
            alignment: 'ALIGNED',
            why: T('With an over-compliant client, the recommendation is the only place where your ethics are visible — because she will not audit it for you.', 'Con una clienta sobre-complaciente, la recomendación es el único lugar donde tu ética se ve — porque ella no la va a auditar por ti.'),
            consequence: T('"…You just talked yourself out of three thousand euros." A pause. "That\'s the first time anyone has treated that money like it was mine." Alignment +2.', '«…Acaba de quitarse tres mil euros de encima.» Una pausa. «Es la primera vez que alguien trata ese dinero como si fuera mío.» Alineación +2.'),
            nextPriority: T('Do not add anything back. Now let her decide, including deciding against you.', 'No vuelvas a añadir nada. Ahora deja que decida, incluso que decida en tu contra.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a5 = artifacts['5'];
      if (!a5 || !a5.valid) {
        return { canAdvance: false, reason: T('Toolkit #5 (Price & Value Presentation Planner) must be completed before Phase 7.', 'El Toolkit #5 (Planificador de Presentación de Precio y Valor) debe completarse antes de la Fase 7.') };
      }
      return { canAdvance: true };
    }
  },

  // ===================== PHASE 7 — DECISION SUPPORT =======================
  decisionSupport: {
    key: 'decisionSupport', toolkit: 6,
    signal(cs) {
      if (cs.objectionIntensity >= 3) {
        return {
          source: 'Beatriz',
          quote: T('"Yes. All of it. Whatever you think — where do I sign?" (She has not looked at the number. Her hand is already out for the pen.)', '«Sí. Todo. Lo que usted diga — ¿dónde firmo?» (No ha mirado la cifra. Ya tiene la mano tendida hacia el bolígrafo.)'),
          subtext: T('The most dangerous signal in the case: a total, instant, unexamined yes to the largest possible commitment. If you take it, you will never see her again.', 'La señal más peligrosa del caso: un sí total, inmediato y sin examinar al mayor compromiso posible. Si lo aceptas, no volverás a verla.')
        };
      }
      if (cs.revealed.includes('hospital_promise')) {
        return {
          source: 'Beatriz',
          quote: T('"I... I don\'t usually spend like this on myself." (She says it to the table.) "My mother would have said this is what women do when they\'ve got too much time and not enough sense."', '«Yo... no suelo gastar así en mí misma.» (Lo dice mirando a la mesa.) «Mi madre habría dicho que esto es lo que hacen las mujeres con demasiado tiempo y poca cabeza.»'),
          subtext: T('Ch.14, translation 3: this is not about money — it is about permission. The wrong answer here is "you deserve it".', 'Cap. 14, traducción 3: esto no va de dinero — va de permiso. La respuesta equivocada aquí es «se lo merece».')
        };
      }
      return {
        source: 'Beatriz',
        quote: T('"That\'s fine. Whatever you think is best — shall I pay now or when I come in?"', '«Me parece bien. Lo que usted considere — ¿pago ahora o cuando venga?»'),
        subtext: T('No objection at all, because she has never voiced one to a professional. An objection you cannot hear still governs whether she turns up.', 'Ninguna objeción, porque nunca le ha planteado una a un profesional. Una objeción que no puedes oír sigue decidiendo si aparece o no.')
      };
    },
    decision: {
      prompt: T('Phase 7 objective: support the decision without owning it. She is agreeing. How do you meet that?', 'Objetivo de la Fase 7: apoyar la decisión sin apropiártela. Ella está de acuerdo. ¿Cómo lo abordas?'),
      options: [
        {
          id: 'dec-close',
          label: T('She has agreed to everything — take the booking', 'Ya ha aceptado todo — cerrar la reserva'),
          language: T('Wonderful. I\'ll take the card details for the deposit and get the first three dates in the diary before you leave.', 'Estupendo. Le tomo los datos de la tarjeta para la señal y le dejo las tres primeras fechas en la agenda antes de que se vaya.'),
          effects: { trust: { credibility: -2 }, willingness: 7, flags: { closedEarly: true } },
          mirror: {
            signalDetected: T('An agreement given in the same tone as every other agreement she has given today.', 'Un acuerdo dado en el mismo tono que todos los demás acuerdos que ha dado hoy.'),
            interpretation: T('You closed on a reflex. Nothing was tested, nothing was refused, and the guilt she has not spoken is still sitting where you left it — it will speak on Thursday, to her husband, and then to your inbox.', 'Cerraste sobre un reflejo. Nada se puso a prueba, nada se rechazó, y la culpa que no ha dicho sigue donde la dejaste — hablará el jueves, con su marido, y después en tu bandeja de entrada.'),
            principle: J(std(5), L('; ', '; '), std(6), L('; ', '; '), duty(2), L('.', '.')),
            learnerDid: T('You banked an agreement instead of testing a decision.', 'Ingresaste un acuerdo en lugar de poner a prueba una decisión.'),
            alignment: 'NOT ALIGNED',
            why: T('With a compliant client, the close is not the finish line — it is the moment the consultation quietly fails. She cannot refuse you in the room; she can refuse you by email.', 'Con una clienta complaciente, el cierre no es la meta — es el momento en que la consulta fracasa en silencio. No puede negarse en la sala; puede negarse por correo.'),
            consequence: T('The card comes out immediately. Credibility drops, because the one thing she needed from you was someone who would not take the easy yes.', 'La tarjeta sale al instante. La credibilidad cae, porque lo único que necesitaba de ti era alguien que no aceptara el sí fácil.'),
            nextPriority: T('Never close a compliant client in the room. Make her leave able to change her mind, and she will not need to.', 'Nunca cierres a una clienta complaciente en la sala. Haz que se vaya pudiendo cambiar de opinión, y no necesitará hacerlo.')
          }
        },
        {
          id: 'dec-slow',
          label: T('Say the number, then stop talking — and hand her the night', 'Decir la cifra, callarse — y regalarle la noche'),
          language: T('Nine hundred euros for the three sessions. (silence) … I\'m not taking a deposit today. Go home, sleep on it, and if it still feels right on Monday, call me. If it doesn\'t, that\'s a perfectly good outcome and I\'d like you to feel free to tell me so.', 'Novecientos euros por las tres sesiones. (silencio) … Hoy no le voy a cobrar ninguna señal. Váyase a casa, consúltelo con la almohada y, si el lunes sigue pareciéndole bien, me llama. Y si no, es un resultado perfectamente bueno y me gustaría que se sintiera libre de decírmelo.'),
          effects: { trust: { safety: 1, reliability: 1 }, willingness: 3 },
          mirror: {
            signalDetected: T('Agreement offered instantly, again — and no objection voiced, ever.', 'Acuerdo ofrecido al instante, otra vez — y ninguna objeción formulada, nunca.'),
            interpretation: T('Ch.14, Law 2: say the number and give silence. Removing the deposit removes the only thing she cannot refuse. It protects her autonomy without asking what is underneath the agreement.', 'Cap. 14, Ley 2: di la cifra y deja silencio. Quitar la señal quita lo único que ella no puede rechazar. Protege su autonomía sin preguntar qué hay debajo del acuerdo.'),
            principle: J(std(5), L('; ', '; '), duty(2), L('; ', '; '), stage('reliability'), L('.', '.')),
            learnerDid: T('You took the pressure out of the room and gave the decision back to her.', 'Sacaste la presión de la sala y le devolviste la decisión.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Space is necessary and it is not sufficient: a woman who cannot disagree in a room can also fail to disagree with herself at home. The guilt is still undiagnosed.', 'El espacio es necesario y no es suficiente: una mujer que no puede discrepar en una sala tampoco discrepa consigo misma en casa. La culpa sigue sin diagnosticar.'),
            consequence: T('"You\'re not taking anything today?" She looks genuinely surprised. Safety and reliability rise; the sentence about her mother stays unsaid.', '«¿No me cobra nada hoy?» Parece sinceramente sorprendida. Suben seguridad y fiabilidad; la frase sobre su madre sigue sin decirse.'),
            nextPriority: T('Silence is the right instrument. The guilt still needs a question, not a discount and not a compliment.', 'El silencio es el instrumento correcto. La culpa sigue necesitando una pregunta, no un descuento ni un cumplido.')
          }
        },
        {
          id: 'dec-guilt',
          label: T('Answer the guilt with a question, not with "you deserve it"', 'Responder a la culpa con una pregunta, no con «se lo merece»'),
          language: T('Can I ask you something? When you buy things for your family — your daughter\'s school trip, your husband\'s birthday, something for the house — do you feel guilty then? … No. So why do you, when it\'s for you? (wait) I\'m not going to tell you that you deserve it. I\'m telling you that you\'re allowed to decide this, and that you\'re allowed to decide against it.', '¿Puedo preguntarle una cosa? Cuando compra algo para su familia — el viaje del colegio de su hija, el cumpleaños de su marido, algo para la casa — ¿se siente culpable entonces? … No. ¿Y por qué sí cuando es para usted? (espera) No le voy a decir que se lo merece. Le digo que tiene derecho a decidir esto, y que tiene derecho a decidir que no.'),
          requiresRevealed: 'hospital_promise',
          degradedLanguage: T('Is it the amount that\'s difficult, or spending it on yourself?', '¿Lo difícil es la cantidad, o gastarla en usted misma?'),
          effects: { trust: { safety: 1, understanding: 1, reliability: 1 }, willingness: 8, posture: 'open', reveals: ['permission_fear'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 2 },
          degradedNote: T('"Oh, no, it\'s fine, really." Asked of a client who has told you nothing, the guilt question gets waved away politely — she has no reason to trust you with the answer yet.', '«Ay, no, si está bien, de verdad.» Hecha a una clienta que no te ha contado nada, la pregunta sobre la culpa se despacha con cortesía — todavía no tiene motivos para confiarte la respuesta.'),
          mirror: {
            signalDetected: T('"I don\'t usually spend like this on myself", said to the table, with her mother\'s sentence attached.', '«No suelo gastar así en mí misma», dicho a la mesa, con la frase de su madre pegada detrás.'),
            interpretation: T('Ch.14, translation 3, exactly as Dana runs it: do not tell her she is worthy — ask her why she is not. The comparison with her family lets her hear her own double standard instead of being told about it.', 'Cap. 14, traducción 3, tal como lo hace Dana: no le digas que vale — pregúntale por qué cree que no. La comparación con su familia le permite oír su propio doble rasero en lugar de que se lo expliquen.'),
            principle: J(std(1), L('; ', '; '), std(5), L('; ', '; '), duty(2), L('; ', '; '), stage('understanding'), L('.', '.')),
            learnerDid: T('You answered a permission problem with a question and then let her answer it herself.', 'Respondiste a un problema de permiso con una pregunta y luego dejaste que ella misma la respondiera.'),
            alignment: 'ALIGNED',
            why: T('"You deserve it" pours petrol on guilt; it argues with her worth. The question separates the purchase from the verdict on the woman making it.', '«Se lo merece» echa gasolina a la culpa; discute con su valía. La pregunta separa la compra del veredicto sobre la mujer que la hace.'),
            consequence: T('A long silence. Then, quietly: "Because if I spend this, I become the kind of woman who spends money on her face. That\'s her voice, isn\'t it. Not mine." The third hidden thing is finally in the room — and it is the one that decides whether she comes back.', 'Un silencio largo. Después, en voz baja: «Porque si me gasto esto, me convierto en una de esas mujeres que se gastan el dinero en la cara. Esa es su voz, ¿verdad? No la mía.» Lo tercero que estaba oculto está por fin en la sala — y es lo que decide si vuelve.'),
            nextPriority: T('Whatever the Decision Engine derives now is legitimate. Protect it — and put her own sentence in the follow-up.', 'Lo que el Motor de Decisión derive ahora es legítimo. Protégelo — y pon su propia frase en el seguimiento.')
          }
        },
        {
          id: 'dec-pressure',
          label: T('Secure it today — take the deposit while she is warm', 'Asegurarlo hoy — tomar la señal mientras está entusiasmada'),
          language: T('Let\'s lock it in while you\'re sure — a card deposit today holds this quarter\'s programme price, and honestly, people who go home to think about it usually don\'t come back. You\'ve waited two years already.', 'Vamos a dejarlo cerrado ahora que lo tiene claro — una señal con tarjeta hoy le mantiene el precio del programa de este trimestre y, sinceramente, quien se va a casa a pensarlo no suele volver. Ya ha esperado dos años.'),
          effects: { trust: { safety: -3, reliability: -1 }, willingness: -35, posture: 'withdrawn', objectionIntensity: 3 },
          mirror: {
            signalDetected: T('A client who cannot refuse, being given a deadline and a warning about people like her.', 'Una clienta que no sabe negarse, a la que se le da una fecha límite y una advertencia sobre las personas como ella.'),
            interpretation: T('Pressure applied to compliance is not persuasion — it is coercion with a smile, and she can feel it even if she cannot name it. Her two years become a lever.', 'La presión aplicada sobre la complacencia no es persuasión — es coacción con una sonrisa, y ella la siente aunque no sepa nombrarla. Sus dos años se convierten en una palanca.'),
            principle: J(duty(1), L(' violated; ', ' incumplido; '), duty(2), L(' violated; ', ' incumplido; '), std(5), L(' violated.', ' incumplido.')),
            learnerDid: T('You used the one thing she trusted you with — the waiting — as a reason she cannot leave without paying.', 'Usaste lo único que te confió — la espera — como razón para que no pueda marcharse sin pagar.'),
            alignment: 'NOT ALIGNED',
            why: T('The most compliant client in the room is the one least protected from you. Pressure here is the largest single failure available in this case.', 'La clienta más complaciente de la sala es la menos protegida frente a ti. La presión aquí es el mayor fallo individual disponible en este caso.'),
            consequence: T('She agrees, pays nothing, thanks you twice, and never answers a message again. Posture: withdrawn.', 'Acepta, no paga nada, te da las gracias dos veces y no vuelve a responder a ningún mensaje. Postura: retirada.'),
            nextPriority: T('If a client cannot say no to you, you are the only person in the room who can say it for her.', 'Si una clienta no puede decirte que no, eres la única persona en la sala que puede decirlo por ella.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a6 = artifacts['6'];
      if (!a6 || !a6.valid) {
        return { canAdvance: false, reason: T('Toolkit #6 (Objection Diagnostic) must be completed before the Decision Engine derives an outcome.', 'El Toolkit #6 (Diagnóstico de Objeciones) debe completarse antes de que el Motor de Decisión derive un resultado.') };
      }
      return { canAdvance: true };
    }
  },

  // ==================== PHASE 8 — RELATIONSHIP CONTINUATION ================
  continuation: {
    key: 'continuation', toolkit: 8,
    signal() {
      return {
        source: T('Continuation Engine', 'Motor de Continuación'),
        quote: T('The consultation is over. With this client, what happens in the next seventy-two hours decides whether any of it was real.', 'La consulta ha terminado. Con esta clienta, lo que ocurra en las próximas setenta y dos horas decide si algo de esto fue real.'),
        subtext: T('Phase 8 is a canonical phase, not an epilogue. A staged programme lives or dies on the review points written here — and an over-compliant client cancels in writing, never in person.', 'La Fase 8 es una fase canónica, no un epílogo. Un programa escalonado vive o muere en los puntos de revisión que se escriben aquí — y una clienta sobre-complaciente anula por escrito, nunca en persona.')
      };
    },
    decision: null,
    gate() { return { canAdvance: true }; }
  }
};

// ---------------------------------------------------------------------------
// Decision-outcome voice (used by the Decision Engine)
// ---------------------------------------------------------------------------
const voice = {
  YES: {
    disclosed: T('"Then the three sessions. Not the programme — the three. Do you know, this is the first time in my life I\'ve bought less than I was offered, and it\'s the first time it\'s felt like mine."', '«Entonces las tres sesiones. El programa no — las tres. ¿Sabe una cosa? Es la primera vez en mi vida que compro menos de lo que me ofrecen, y es la primera vez que lo siento mío.»'),
    undisclosed: T('"Yes — book it. Honestly, I\'d have agreed to anything you put in front of me today. I hope that\'s all right."', '«Sí — resérvelo. Sinceramente, hoy habría aceptado cualquier cosa que me hubiera puesto delante. Espero que le parezca bien.»')
  },
  DEFER: T('"It all sounds wonderful, honestly, and you\'ve been so kind. Let me just take it home and look at the numbers quietly. I\'ll call you — I promise I will."', '«Todo suena estupendo, de verdad, y ha sido usted amabilísima. Déjeme llevármelo a casa y mirar las cifras con calma. La llamo — se lo prometo.»'),
  NO: T('"I\'m going to leave it. And I\'m surprised to hear myself say that, because I\'ve agreed with everything all afternoon — which is rather the point, isn\'t it. None of it was mine."', '«Lo voy a dejar. Y me sorprende oírme decirlo, porque llevo toda la tarde estando de acuerdo con todo — que es justo el problema, ¿no? Nada de eso era mío.»')
};

// ---------------------------------------------------------------------------
// Case facts for the toolkit validators (scenario-aware honesty checks)
// ---------------------------------------------------------------------------
const caseFacts = {
  clientName: 'Beatriz',
  motivationItem: 'hospital_promise',
  motiveRegex: /(promise|promis|hospital|illness|recover|surviv|last|two years|saved|fund|account|promes|promet|enferm|ingres|recuper|último|ultimo|dos años|ahorr|fondo|cuenta)/i,
  motiveIssue: T('Beatriz disclosed a promise she made to herself in hospital — that she would stop leaving herself for last. The map records a skin goal instead of that motive.', 'Beatriz reveló una promesa que se hizo a sí misma en el hospital — que dejaría de dejarse para el final. El mapa registra un objetivo de piel en lugar de ese motivo.'),
  priorExperienceIssue: T('Prior experience is blank. Beatriz has no treatment history — her prior experience is two years of secret saving and a lifetime of never contradicting a professional. That is the risk the canvas must carry.', 'La experiencia previa está en blanco. Beatriz no tiene historial de tratamientos — su experiencia previa son dos años de ahorro en secreto y toda una vida sin contradecir jamás a un profesional. Ese es el riesgo que debe recoger el lienzo.'),
  limitationIssue: T('Field 6 states no limitation. A nine-to-twelve-month programme is gradual, partly depends on the client between sessions, and roughly one client in four plateaus after phase one — an expectation with no ceiling is an overclaim (Ethical Duty 4).', 'El campo 6 no indica ninguna limitación. Un programa de nueve a doce meses es gradual, depende en parte de la clienta entre sesiones, y aproximadamente una de cada cuatro clientas se estabiliza tras la fase uno — una expectativa sin techo es una sobrepromesa (Deber Ético 4).'),
  whyNowIssue: T('You ticked "I understand why it matters now", but Beatriz has not disclosed her real why-now. Her agreement is not disclosure. Untick it or return to Discovery and ask.', 'Marcaste «Entiendo por qué le importa ahora», pero Beatriz no ha revelado su verdadero porqué. Su conformidad no es revelación. Desmárcalo o vuelve al Descubrimiento y pregunta.'),
  undisclosedMotiveIssue: T('MATERIAL: Beatriz never disclosed a motive in this attempt — she agreed with everything instead. Recording an inferred motive as fact is not permitted; agreement is not information. Write "Not disclosed" and note what you would ask next time.', 'MATERIAL: Beatriz nunca reveló un motivo en este intento — se limitó a estar de acuerdo con todo. Registrar un motivo inferido como un hecho no está permitido; la conformidad no es información. Escribe «No revelado» y anota qué preguntarías la próxima vez.')
};

// Toolkit #8 draft rows for this case (Continuation Engine).
const followUpPack = {
  motivationItem: 'hospital_promise',
  yesRows: [
    'Book phase one ONLY (three skin-quality sessions); send written confirmation of what was deliberately NOT booked, and why, so the smaller plan survives contact with her family',
    'The permission check — one short message stating in writing that she may change her mind at no cost, and naming who she contacts to do it',
    'Confirm the plan survived the kitchen table: ask what she was asked at home, and whether anything has changed her mind',
    'Pre-session readiness, plus a written reminder that stopping after phase one is a legitimate and expected outcome, not a failure',
    'Phase-one response review against her own sentence, not a satisfaction score — and diarise the month-four decision point that decides whether phase two happens at all'
  ],
  reviewNote: 'Anchor the review to what she said in Phase 4 — the promise, not the programme. And structure every review point so that "stop here" is the easy answer to give in writing: a client who cannot refuse in person must be able to refuse by message.'
};

// ---------------------------------------------------------------------------
// ENGINE API (identical contract to Cases 01 and 02)
// ---------------------------------------------------------------------------
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

  return { phaseKey, clientSignal: signal, decision, toolkit: phase.toolkit || null, secondaryToolkit: phase.secondaryToolkit || null };
}

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

module.exports = { profile, intake, phases, initialClientState, getPhaseContent, resolveChoice, gateFor, applyEffects, voice, caseFacts, followUpPack };
