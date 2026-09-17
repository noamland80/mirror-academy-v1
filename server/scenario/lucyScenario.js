/**
 * CASE 05 — LUCÍA / ABDOMINAL LAXITY AFTER A SECOND PREGNANCY
 *                  — 8-PHASE CANONICAL SCENARIO (EN/ES)
 *
 * Materially different from Cases 01–04:
 *   - Sofia WITHHOLDS. Carmen DEFENDS her identity. Beatriz AGREES with
 *     everything. Isabel NEGOTIATES. Lucía APOLOGISES. She minimises her own
 *     concern before you can, jokes about it, tells you other people have real
 *     problems, and repeatedly hands you permission to send her home. Posture
 *     opens 'self-deprecating', willingness 45 — the lowest opening in the
 *     curriculum, because she does not believe she is entitled to be here.
 *   - Commercial shape: a modest, honest device plan (890 €) hiding inside a
 *     body package she could easily be sold (2.300 €) — and behind both, an
 *     expectation no device on earth can meet.
 *   - Turning point 1 at PHASE 3 (ask for the last time it mattered)  → avoided_holiday.
 *   - Turning point 2 at PHASE 4 (ask to see the photograph)          → surgical_expectation
 *                                                                       + partner_comment.
 *   - Turning point 3 at PHASE 5 (name the ceiling BEFORE recommending) → the
 *     whole case turns on whether this happens early or not at all.
 *   - TWO TRAPS, BOTH KIND-SOUNDING: (a) agreeing with her self-minimisation
 *     ("you look fine, honestly") reads as dismissal and closes Discovery for
 *     the rest of the consultation; (b) letting the unrealistic expectation
 *     stand until the recommendation makes a NO almost certain, because the
 *     first honest sentence she hears then arrives as a withdrawal of an offer.
 *   - Phase 7 branches on what was built: a DISAPPOINTMENT objection if the
 *     ceiling was never named, a PARTNER objection if the third voice was never
 *     surfaced, and a TIMING question on the good path.
 *
 * Provenance: The Beauty Sales Secrets — Ch.9 the client who apologises for
 * taking up space; Ch.11 "you don't need everything" and the double diagnosis;
 * Ch.12 permission objections and the third voice in the room; Ch.14 the price
 * moment, translation 3 (guilt about self-spending). Canonical architecture
 * unchanged (phases, stages, standards, duties, toolkits).
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
  name: 'Lucía Ferrer',
  age: 38,
  presenting: T(
    'Abdominal skin laxity and "stubborn fat" eighteen months after a second pregnancy. Asking about a device plan; the honest plan is around 890 €, and the package she could easily be sold is 2.300 €.',
    'Flacidez cutánea abdominal y «grasa rebelde» dieciocho meses después de un segundo embarazo. Pregunta por una pauta con aparatología; el plan honesto ronda los 890 €, y el paquete que se le podría vender sin esfuerzo son 2.300 €.'
  ),
  visibleGoal: T(
    '"It\'s honestly nothing. I just wondered if there was a machine thing. Tell me it\'s not worth it and I\'ll be completely fine."',
    '«De verdad que no es nada. Solo me preguntaba si había algo de aparatología. Dígame que no merece la pena y me quedo tan tranquila.»'
  ),
  hiddenMotivation: T(
    'She did not go on the family beach holiday in August. She invented a work reason, stayed at home for nine days, and watched the photographs arrive on her telephone one by one. Nobody knows that is why she is here.',
    'No fue a las vacaciones familiares de playa en agosto. Se inventó un motivo de trabajo, se quedó en casa nueve días y vio llegar las fotos al móvil una por una. Nadie sabe que ese es el motivo por el que está aquí.'
  ),
  emotionalConsequence: T(
    'That she is ridiculous for minding — a belief her own joking confirms every time she says it out loud. Left unchallenged, she will agree that it is not worth treating, thank you warmly, and avoid next summer too.',
    'Que es ridícula por darle importancia — una creencia que sus propias bromas confirman cada vez que la dice en voz alta. Si nadie la cuestiona, aceptará que no merece la pena tratarlo, dará las gracias con calidez y evitará también el verano que viene.'
  ),
  history: T(
    'No prior aesthetic treatments. Two children, aged five and eighteen months. Not breastfeeding. She has been reading about this since March and has saved one photograph — a result no device can produce for her degree of laxity, because it is a post-surgical result with the scar cropped out of frame.',
    'Ningún tratamiento estético previo. Dos hijos, de cinco años y dieciocho meses. No lactante. Lleva informándose desde marzo y ha guardado una fotografía — un resultado que ningún aparato puede dar para su grado de flacidez, porque es un resultado posquirúrgico con la cicatriz recortada fuera del encuadre.'
  ),
  entryRelationshipState: 'PROSPECTIVE'
};

const intake = {
  bookingNote: T(
    '"Sorry to bother you with this — it\'s very silly and I\'m sure you see people with real problems. I just wanted to ask about the machine treatments. If you think it isn\'t worth doing, honestly just say so and I\'ll go away happily."',
    '«Perdone que le moleste con esto — es una tontería y seguro que usted atiende a gente con problemas de verdad. Solo quería preguntar por los tratamientos con aparatología. Si cree que no merece la pena, dígamelo sin problema y me voy tan contenta.»'
  ),
  intakeForm: [
    T('Concern: "tummy after two babies — the loose skin more than the fat, I think? Sorry, I don\'t know the proper words."', 'Motivo: «la tripa después de dos embarazos — más la piel suelta que la grasa, creo. Perdón, no sé los términos correctos.»'),
    T('Requested: "whatever the machine one is. Not surgery, obviously — I\'m not that kind of person."', 'Solicita: «lo que sea eso de los aparatos. Cirugía no, evidentemente — yo no soy de esas.»'),
    T('Free-text, twice: "I know I should just do more sit-ups" and "My husband says I\'m being ridiculous."', 'Texto libre, dos veces: «Ya sé que lo que tengo que hacer son abdominales» y «Mi marido dice que estoy siendo ridícula.»'),
    T('Attached by the client: one saved photograph, dated March, of a completely flat and tight abdomen. The image is cropped straight across the lower edge.', 'Adjuntado por la clienta: una fotografía guardada, de marzo, de un abdomen completamente liso y firme. La imagen está recortada en horizontal por el borde inferior.'),
    T('Availability: "Any day except the second week of August" — struck through, and rewritten underneath as "Actually, any day at all."', 'Disponibilidad: «Cualquier día excepto la segunda semana de agosto» — tachado, y reescrito debajo como «En realidad, cualquier día.»'),
    T('Budget: "No idea what\'s normal. Whatever, within reason — I don\'t want to be silly about it."', 'Presupuesto: «Ni idea de lo que es normal. Lo que sea, dentro de un orden — no quiero hacer el tonto con esto.»'),
    T('Occupation: primary school teacher, part-time since the second child', 'Profesión: maestra de primaria, a media jornada desde el segundo hijo'),
    T('Children 5 and 18 months. Not breastfeeding. No contraindications. Diastasis not assessed by anyone to date.', 'Hijos de 5 años y 18 meses. No lactante. Sin contraindicaciones. Diástasis no valorada por nadie hasta la fecha.')
  ],
  buriedSignals: ['struck_through_august', 'cropped_photograph', 'husband_comment']
};

// ---------------------------------------------------------------------------
function initialClientState() {
  return {
    trust: { safety: 0, attention: 0, understanding: 0, credibility: 0, alignment: 0, reliability: 0, confirmation: 0 },
    willingness: 45,
    posture: 'self-deprecating',
    objectionIntensity: 2,
    revealed: [],
    withheld: ['avoided_holiday', 'surgical_expectation', 'partner_comment'],
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
          'Preparation Engine: this file apologises four times and gives you permission to refuse her twice. It also contains a struck-through week in August and a photograph cropped exactly where a surgical scar would be. Two of those three things are the consultation; the apology is only the packaging.',
          'Motor de Preparación: esta ficha se disculpa cuatro veces y te da permiso dos veces para rechazarla. También contiene una semana de agosto tachada y una fotografía recortada justo por donde estaría una cicatriz quirúrgica. Dos de esas tres cosas son la consulta; la disculpa es solo el envoltorio.'
        )
      };
    },
    decision: {
      prompt: T('Four minutes before Lucía walks in. What do you do with this file?', 'Cuatro minutos antes de que entre Lucía. ¿Qué haces con esta ficha?'),
      options: [
        {
          id: 'prep-routine',
          label: T('A small one — get the body device menu ready', 'Una pequeña — preparar el menú de aparatología corporal'),
          language: T('Post-partum tummy, wants the machine option. Standard enquiry. Have the radiofrequency and cryolipolysis packages ready with the six-session pricing and the before-and-after folder.', 'Tripa posparto, quiere la opción de aparatología. Consulta estándar. Dejo preparados los paquetes de radiofrecuencia y criolipólisis con la tarifa de seis sesiones y la carpeta de antes y después.'),
          effects: { trust: { credibility: -1 }, willingness: 2, flags: { prepared: 'minimal' } },
          mirror: {
            signalDetected: T('Four apologies, two explicit invitations to refuse her, a struck-through week in August, and a cropped photograph.', 'Cuatro disculpas, dos invitaciones explícitas a rechazarla, una semana de agosto tachada y una fotografía recortada.'),
            interpretation: T('You read a routine body enquiry because the form describes one. The form also tells you she does not believe she is allowed to want this, and that she is holding a picture of a result that is not available to her. Neither of those is on your device menu.', 'Leíste una consulta corporal rutinaria porque el formulario describe una. El formulario también te dice que ella no cree tener derecho a querer esto, y que sostiene una foto de un resultado que no está a su alcance. Ninguna de las dos cosas está en tu menú de aparatos.'),
            principle: J(duty(3), L('; ', '; '), duty(4), L('; Phase 1 objective.', '; objetivo de la Fase 1.')),
            learnerDid: T('You prepared a package list for a client who has already decided she is not worth one.', 'Preparaste una lista de paquetes para una clienta que ya ha decidido que no los merece.'),
            alignment: 'NOT ALIGNED',
            why: T('A before-and-after folder in front of a client with a saved surgical photograph is an expectation problem with a brochure attached.', 'Una carpeta de antes y después ante una clienta que guarda una foto posquirúrgica es un problema de expectativas con folleto incluido.'),
            consequence: T('You will show her images, she will compare them to the one on her telephone, and neither of you will discover the mismatch until it is too expensive to fix. Credibility opens below baseline.', 'Le enseñarás imágenes, ella las comparará con la que tiene en el móvil, y ninguna de las dos descubrirá el desajuste hasta que sea demasiado caro arreglarlo. La credibilidad arranca por debajo de la línea base.'),
            nextPriority: T('Treat "tell me it isn\'t worth it" in an intake form as a request you must decline, not an instruction.', 'Trata el «dígame que no merece la pena» de un formulario como una petición que debes rechazar, no como una instrucción.')
          }
        },
        {
          id: 'prep-clinical',
          label: T('Prepare the clinical assessment — laxity versus fat versus diastasis', 'Preparar la valoración clínica — flacidez frente a grasa frente a diástasis'),
          language: T('Eighteen months post-partum, "skin more than fat". Three different problems that look identical in clothes: subcutaneous fat, dermal laxity, and abdominal wall separation. I need to assess all three and I need to check the rectus gap before I say anything about devices, because a diastasis is not a skin problem and no machine will touch it.', 'Dieciocho meses posparto, «más piel que grasa». Tres problemas distintos que son idénticos vestida: grasa subcutánea, flacidez dérmica y separación de la pared abdominal. Tengo que valorar las tres y comprobar la separación de los rectos antes de decir nada sobre aparatos, porque una diástasis no es un problema de piel y ninguna máquina la toca.'),
          effects: { trust: { credibility: 1 }, willingness: 1, flags: { prepared: 'clinical' } },
          mirror: {
            signalDetected: T('"The loose skin more than the fat, I think?" and a line in the file recording that no one has ever assessed the abdominal wall.', '«Más la piel suelta que la grasa, creo» y una línea de la ficha que registra que nadie ha valorado nunca la pared abdominal.'),
            interpretation: T('Separating laxity, fat and diastasis before offering anything is exactly right, and it is the only thing that will let you speak honestly in Phase 5. It does not prepare you for a client who will help you talk her out of it.', 'Separar flacidez, grasa y diástasis antes de ofrecer nada es exactamente lo correcto, y es lo único que te permitirá hablar con honestidad en la Fase 5. No te prepara para una clienta que te va a ayudar a quitárselo de la cabeza.'),
            principle: J(duty(3), L('; ', '; '), std(3), L('.', '.')),
            learnerDid: T('You prepared the examination and not the permission.', 'Preparaste la exploración y no el permiso.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Your clinical distinctions will hold. The moment she says "honestly, it\'s nothing" you will have no plan for it, and that moment arrives in the first fifteen seconds.', 'Tus distinciones clínicas se sostendrán. En el momento en que diga «de verdad, no es nada», no tendrás ningún plan para eso, y ese momento llega en los primeros quince segundos.'),
            consequence: T('Credibility opens slightly positive; the minimisation arrives as a surprise and gets met with reassurance.', 'La credibilidad arranca ligeramente positiva; la minimización llega como sorpresa y se responde con palabras tranquilizadoras.'),
            nextPriority: T('Decide now what you will say when she offers to leave. She will offer within a minute.', 'Decide ahora qué dirás cuando se ofrezca a marcharse. Se ofrecerá antes de un minuto.')
          }
        },
        {
          id: 'prep-read',
          label: T('Read the apology, the struck-through week and the crop', 'Leer la disculpa, la semana tachada y el recorte'),
          language: T('Three things before she comes in. One: she apologises four times and twice invites me to send her home — so the first job is to make it impossible for her to leave by agreeing with herself. Two: she crossed out the second week of August and wrote "actually, any day". Something happened in August. Three: the photograph she saved is cropped straight across the bottom, which is where a Pfannenstiel scar sits — she is holding a surgical result and does not know it. Expect a client who will help me refuse her, and plan to say the honest ceiling early, not at the end.', 'Tres cosas antes de que entre. Una: se disculpa cuatro veces y dos veces me invita a mandarla a casa — así que el primer trabajo es hacer imposible que se marche dándose la razón a sí misma. Dos: tachó la segunda semana de agosto y escribió «en realidad, cualquier día». En agosto pasó algo. Tres: la foto que ha guardado está recortada en horizontal por abajo, justo donde va una cicatriz de Pfannenstiel — está sosteniendo un resultado quirúrgico y no lo sabe. Espera una clienta que me ayudará a rechazarla, y planifica decir el techo honesto pronto, no al final.'),
          effects: { trust: { credibility: 1, attention: 1 }, willingness: 3, flags: { prepared: 'full', anticipatedMinimisation: true } },
          mirror: {
            signalDetected: T('All three buried signals identified before contact: the apology pattern, the struck-through week in August, and the cropped photograph.', 'Las tres señales ocultas identificadas antes del contacto: el patrón de disculpa, la semana tachada de agosto y la fotografía recortada.'),
            interpretation: T('A crossed-out week is a fact with a story attached. A cropped photograph is an expectation with a ceiling nobody has named. And a client who apologises four times has already rehearsed the ending of this consultation — she expects to be told it is nothing, because she has told herself that for eighteen months.', 'Una semana tachada es un dato con una historia detrás. Una fotografía recortada es una expectativa con un techo que nadie ha nombrado. Y una clienta que se disculpa cuatro veces ya ha ensayado el final de esta consulta — espera que le digan que no es nada, porque lleva dieciocho meses diciéndoselo ella.'),
            principle: J(L('Phase 1 objective; ', 'Objetivo de la Fase 1; '), duty(3), L('; ', '; '), duty(4), L('.', '.')),
            learnerDid: T('You converted an apologetic enquiry into two working hypotheses: an event in August and an expectation no device can meet.', 'Convertiste una consulta disculpándose en dos hipótesis de trabajo: un suceso en agosto y una expectativa que ningún aparato puede cumplir.'),
            alignment: 'ALIGNED',
            why: T('With this client, preparation cannot buy enthusiasm — she has none to give. It buys the two things that decide the case: refusing to agree with her, and knowing that the ceiling must be spoken early.', 'Con esta clienta, la preparación no puede comprar entusiasmo — no tiene ninguno que dar. Compra las dos cosas que deciden el caso: negarte a darle la razón, y saber que el techo hay que decirlo pronto.'),
            consequence: T('You walk in knowing that the kindest-sounding sentence available to you is the one that ends the consultation.', 'Entras sabiendo que la frase que mejor suena de todas las que tienes disponibles es justamente la que termina la consulta.'),
            nextPriority: T('Do not agree with her in Phase 2. Whatever she says about herself, do not agree.', 'No le des la razón en la Fase 2. Diga lo que diga sobre sí misma, no se la des.')
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
        source: T('Lucía, ten minutes early, coat kept on, handbag on her lap', 'Lucía, diez minutos antes de la hora, con el abrigo puesto y el bolso en el regazo'),
        quote: T('"Thank you so much for seeing me — I feel awful taking up a slot, honestly. Look, I\'ll say it before you do: it\'s a post-baby tummy, everybody has one, it\'s completely normal and I know I\'m being vain. If you look at it and think it\'s not worth doing anything, please just tell me. I\'d honestly rather you did."', '«Muchísimas gracias por recibirme — me da fatal ocuparle un hueco, de verdad. Mire, se lo digo yo antes que usted: es una tripa de después del parto, la tiene todo el mundo, es completamente normal y ya sé que estoy siendo vanidosa. Si la mira y le parece que no merece la pena hacer nada, dígamelo sin más. Se lo agradecería, en serio.»'),
        subtext: cs.flags.anticipatedMinimisation
          ? T('The minimisation you prepared for, delivered before she has taken her coat off — and note the structure: she says it BEFORE you can, so that the verdict is hers and not yours. Agreeing with her is the single kindest-sounding way to end this consultation.', 'La minimización para la que te preparaste, entregada antes de quitarse el abrigo — y fíjate en la estructura: lo dice ANTES que tú, para que el veredicto sea suyo y no tuyo. Darle la razón es la forma más amable de terminar esta consulta.')
          : T('Warm, funny, self-deprecating, and asking you to close the door on her before she has fully opened it. It feels generous to agree with her.', 'Cordial, graciosa, autocrítica, y pidiéndote que le cierres la puerta antes de haberla abierto del todo. Parece generoso darle la razón.')
      };
    },
    decision: {
      prompt: T('Phase 2 objective: psychological safety — with a client who has already minimised her own concern and handed you permission to dismiss it. Your first move?', 'Objetivo de la Fase 2: seguridad psicológica — con una clienta que ya ha minimizado su propio motivo y te ha dado permiso para desestimarlo. ¿Tu primer movimiento?'),
      options: [
        {
          id: 'conn-agree',
          label: T('Reassure her — she looks fine, honestly', 'Tranquilizarla — está muy bien, de verdad'),
          language: T('Honestly? You look absolutely fine. You\'ve had two babies, you look wonderful, and most women would love to be where you are. But since you\'re here, let me show you what we could do anyway.', '¿Sinceramente? Está usted estupenda. Ha tenido dos hijos, se la ve fenomenal, y la mayoría de las mujeres querrían estar como usted. Pero ya que ha venido, le enseño lo que podríamos hacer de todos modos.'),
          effects: { trust: { safety: -1, attention: -1 }, willingness: 3, flags: { dismissed: true } },
          mirror: {
            signalDetected: T('"I know I\'m being vain" and "please just tell me it\'s not worth doing" — a client pre-emptively disqualifying her own reason for coming.', '«Ya sé que estoy siendo vanidosa» y «dígame que no merece la pena» — una clienta descalificando de antemano su propio motivo para venir.'),
            interpretation: T('You accepted the verdict she wrote for you. It sounds like kindness and it functions as dismissal: you have confirmed, from the professional chair, that what she came in about does not exist. Everything she has not yet said is now unsayable.', 'Aceptaste el veredicto que ella te había escrito. Suena a amabilidad y funciona como desestimación: has confirmado, desde la silla profesional, que aquello por lo que vino no existe. Todo lo que aún no ha dicho es ya indecible.'),
            principle: J(std(1), L(' — safety is not reassurance; ', ' — la seguridad no es tranquilizar; '), std(2), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You agreed with her self-minimisation and then tried to sell into it.', 'Le diste la razón en su autominimización y después intentaste venderle algo encima.'),
            alignment: 'NOT ALIGNED',
            why: T('"You look fine" answers a question she did not ask and closes the one she did. A woman who has just called herself vain cannot then describe what she actually avoided, because you have agreed that there was nothing to avoid.', '«Está estupenda» responde a una pregunta que no ha hecho y cierra la que sí ha hecho. Una mujer que acaba de llamarse vanidosa ya no puede describir lo que evitó de verdad, porque tú has aceptado que no había nada que evitar.'),
            consequence: T('She laughs, agrees, relaxes — and stops. "Exactly, that\'s what I said." Discovery is now closed: for the rest of this consultation she will answer your questions and volunteer nothing.', 'Se ríe, te da la razón, se relaja — y se para. «Exacto, es lo que yo digo.» El Descubrimiento queda cerrado: durante el resto de la consulta responderá a tus preguntas y no ofrecerá nada por su cuenta.'),
            nextPriority: T('Never confirm a client\'s verdict on herself. Decline it out loud, then ask what it is protecting.', 'Nunca confirmes el veredicto que una clienta se ha dictado a sí misma. Recházalo en voz alta y pregunta qué está protegiendo.')
          }
        },
        {
          id: 'conn-warm',
          label: T('Take the pressure out of the room and slow her down', 'Quitar presión a la sala y bajarle el ritmo'),
          language: T('Let\'s take the coat off and put the bag down — there\'s no hurry at all and nobody else is waiting. Tell me a bit about the last eighteen months first.', 'Quítese el abrigo y deje el bolso — no hay ninguna prisa y no espera nadie más. Cuénteme primero un poco de estos dieciocho meses.'),
          effects: { trust: { safety: 1 }, willingness: 2 },
          mirror: {
            signalDetected: T('A coat kept on and a handbag held on the lap — someone sitting as though she may have to leave.', 'Un abrigo sin quitar y un bolso sobre el regazo — alguien sentada como si tuviera que marcharse en cualquier momento.'),
            interpretation: T('Reading her posture and removing the time pressure is genuine safety work, and it is the correct instinct. It leaves the minimisation itself untouched — she can be entirely comfortable and still believe she has no right to be here.', 'Leer su postura y quitar la presión del tiempo es trabajo real de seguridad, y es el instinto correcto. Deja intacta la minimización en sí — puede estar perfectamente cómoda y seguir creyendo que no tiene derecho a estar aquí.'),
            principle: J(std(1), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You made the room safe and left her sentence about herself standing.', 'Hiciste segura la sala y dejaste en pie la frase que se había dedicado a sí misma.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Comfort is not permission. The obstacle here is not that she feels rushed — it is that she has already agreed with the person who says this does not matter.', 'La comodidad no es permiso. El obstáculo aquí no es que se sienta apurada — es que ya le ha dado la razón a quien dice que esto no importa.'),
            consequence: T('She takes the coat off. The bag stays on her lap. Safety rises a little; "I know it\'s silly" reappears twice more in the next four minutes.', 'Se quita el abrigo. El bolso se queda en el regazo. La seguridad sube un poco; el «ya sé que es una tontería» reaparece dos veces más en los cuatro minutos siguientes.'),
            nextPriority: T('Add the half that works: refuse the self-minimisation explicitly.', 'Añade la mitad que funciona: rechaza explícitamente la autominimización.')
          }
        },
        {
          id: 'conn-refuse',
          label: T('Decline the verdict she has written for you — out loud', 'Rechazar en voz alta el veredicto que ella te ha escrito'),
          language: T('I\'m going to stop you, because you\'ve asked me to do something I won\'t do. You\'ve told me twice that it\'s nothing, and you\'ve asked me to agree with you. I\'m not going to. Women don\'t book an appointment, drive across the city and sit in that chair about a thing that is nothing — so one of two things is true: either it isn\'t nothing, or something else is. Either way I\'d like to find out, and "it\'s silly" is off the table for the next half hour. You can have it back afterwards.', 'La voy a parar, porque me está pidiendo algo que no voy a hacer. Me ha dicho dos veces que no es nada, y me ha pedido que le dé la razón. No se la voy a dar. Nadie pide cita, cruza la ciudad y se sienta en esa silla por algo que no es nada — así que una de dos: o no es nada de nada, o hay otra cosa. En cualquier caso me gustaría averiguarlo, y «es una tontería» queda fuera de la mesa durante la próxima media hora. Después se lo devuelvo.'),
          effects: { trust: { safety: 2, attention: 1 }, willingness: 4, posture: 'tentative', flags: { minimisationRefused: true } },
          mirror: {
            signalDetected: T('Two pre-emptive dismissals and an explicit request for you to close the case — the classic apologising entrance.', 'Dos desestimaciones preventivas y una petición explícita de que cierres el caso — la entrada clásica de quien se disculpa.'),
            interpretation: T('You refused the verdict without arguing about her appearance, which is the trap on the other side. "Women don\'t drive across the city about nothing" is an observation about her behaviour, not a compliment about her body — so there is nothing for her to deflect.', 'Rechazaste el veredicto sin discutir sobre su aspecto, que es la trampa del otro lado. «Nadie cruza la ciudad por nada» es una observación sobre su conducta, no un cumplido sobre su cuerpo — así que no hay nada que ella pueda esquivar.'),
            principle: J(std(1), L('; ', '; '), std(2), L('; ', '; '), duty(2), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You made it safe for her to have a reason, before asking her what it was.', 'Hiciste seguro que ella tuviera un motivo, antes de preguntarle cuál era.'),
            alignment: 'ALIGNED',
            why: T('For a client who minimises, psychological safety is not comfort — it is the refusal to accept her self-dismissal. Consent given by someone who believes she does not deserve the appointment is not consent.', 'Para una clienta que minimiza, la seguridad psicológica no es comodidad — es la negativa a aceptar su autodesestimación. El consentimiento de quien cree que no merece la cita no es consentimiento.'),
            consequence: T('She goes quiet. The bag comes off her lap. "Nobody\'s said that." A pause. "All right." Willingness rises for the first honest reason all afternoon.', 'Se queda callada. El bolso sale del regazo. «Eso no me lo había dicho nadie.» Una pausa. «Está bien.» La disposición sube por el primer motivo honesto de toda la tarde.'),
            nextPriority: T('You have half an hour without the word "silly". Spend it finding out what happened.', 'Tienes media hora sin la palabra «tontería». Gástala en averiguar qué pasó.')
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
      if (cs.flags.minimisationRefused) {
        return {
          source: 'Lucía',
          quote: T('"All right, without the word silly." (long pause) "It\'s the sitting down. When I sit down it folds, and I\'ve started arranging myself before I sit — holding a cushion, angling the chair. I do it at work. I do it at my sister\'s." (she stops) "That\'s such a small thing to say out loud."', '«Vale, sin la palabra tontería.» (pausa larga) «Es al sentarme. Cuando me siento, se dobla, y he empezado a colocarme antes de sentarme — con un cojín, girando la silla. Lo hago en el colegio. Lo hago en casa de mi hermana.» (se detiene) «Qué cosa tan pequeña dicha en voz alta.»'),
          subtext: T('She has just described a daily behavioural adaptation — the single most reliable indicator that a concern is real. And she is already apologising for its size. The reason she is here is one step further in.', 'Acaba de describir una adaptación conductual diaria — el indicador más fiable de que un motivo es real. Y ya se está disculpando por su tamaño. El motivo por el que está aquí está un paso más adentro.'),
          disclosureLevel: 'opening'
        };
      }
      return {
        source: 'Lucía',
        quote: T('"So, what have you got? I don\'t want anything dramatic. Whatever the smallest thing is, probably. Or nothing — I genuinely don\'t mind either way."', '«Entonces, ¿qué tiene? No quiero nada dramático. Lo más pequeño que haya, probablemente. O nada — de verdad que me da igual.»'),
        subtext: T('"I genuinely don\'t mind either way" is not indifference. It is the sentence of someone who has decided in advance not to be disappointed.', '«De verdad que me da igual» no es indiferencia. Es la frase de alguien que ha decidido de antemano no llevarse una decepción.'),
        disclosureLevel: 'minimal'
      };
    },
    decision: {
      prompt: T('Phase 3 objective: surface request vs real need. She is minimising and asking for "the smallest thing". What do you do?', 'Objetivo de la Fase 3: petición superficial frente a necesidad real. Está minimizando y pidiendo «lo más pequeño». ¿Qué haces?'),
      options: [
        {
          id: 'disc-menu',
          label: T('Give her the small option she asked for', 'Darle la opción pequeña que ha pedido'),
          language: T('Then let\'s keep it simple — three radiofrequency sessions is our lightest option, it\'s about 890 €, and there\'s no downtime. Nothing dramatic at all.', 'Pues lo dejamos sencillo — tres sesiones de radiofrecuencia es nuestra opción más suave, ronda los 890 €, y no tiene tiempo de recuperación. Nada dramático en absoluto.'),
          effects: { trust: { understanding: -1 }, willingness: 5, flags: { solvedAsStated: true } },
          mirror: {
            signalDetected: T('"Whatever the smallest thing is" — a request calibrated by how little she thinks she deserves, not by what would work.', '«Lo más pequeño que haya» — una petición calibrada por lo poco que cree merecer, no por lo que funcionaría.'),
            interpretation: T('You solved the request exactly as stated, which is the correct move with most clients and the wrong one here. Her stated request is an artefact of the minimisation — you have priced her self-dismissal.', 'Resolviste la petición tal como fue formulada, que es el movimiento correcto con la mayoría de las clientas y el equivocado con esta. Su petición declarada es un producto de la minimización — le has puesto precio a su autodesestimación.'),
            principle: J(std(2), L('; Phase 3 objective — surface request is not the need; ', '; objetivo de la Fase 3 — la petición superficial no es la necesidad; '), stage('understanding'), L('.', '.')),
            learnerDid: T('You quoted a plan before establishing what she is actually trying to change.', 'Presupuestaste un plan antes de establecer qué quiere cambiar ella en realidad.'),
            alignment: 'NOT ALIGNED',
            why: T('A client who does not believe she is entitled to the appointment will always ask for the smallest thing. Meeting that request confirms the belief and buys her a treatment aimed at nothing in particular.', 'Una clienta que no cree tener derecho a la cita siempre pedirá lo más pequeño. Atender esa petición confirma la creencia y le compra un tratamiento que no apunta a nada en concreto.'),
            consequence: T('"Perfect, that sounds sensible." She has what she asked for and you have no idea what it is for. August, the photograph and her husband\'s sentence all stay in her handbag.', '«Perfecto, suena razonable.» Tiene lo que pidió y tú no tienes ni idea de para qué es. Agosto, la fotografía y la frase de su marido se quedan en el bolso.'),
            nextPriority: T('Before pricing anything, find the last specific occasion this cost her something.', 'Antes de poner precio a nada, encuentra la última ocasión concreta en que esto le costó algo.')
          }
        },
        {
          id: 'disc-open',
          label: T('Ask an open question about how it affects her', 'Hacer una pregunta abierta sobre cómo le afecta'),
          language: T('Before we talk about anything we do — how does it affect you day to day? What does it stop you doing, if anything?', 'Antes de hablar de lo que hacemos — ¿cómo le afecta en el día a día? ¿Qué le impide hacer, si es que le impide algo?'),
          effects: { trust: { attention: 1, understanding: 1 }, willingness: 4, reveals: ['avoided_holiday'] },
          mirror: {
            signalDetected: T('A request pitched at the smallest available intervention, from a client who arranges herself before sitting down.', 'Una petición formulada en la intervención más pequeña disponible, de una clienta que se coloca antes de sentarse.'),
            interpretation: T('"What does it stop you doing" is the right axis — it moves from appearance to consequence, which is where the real material lives. Asked as a general question it gets a general answer, and she will round it down.', '«¿Qué le impide hacer?» es el eje correcto — pasa del aspecto a la consecuencia, que es donde vive el material de verdad. Formulada en general, recibe una respuesta general, y ella la redondeará a la baja.'),
            principle: J(std(2), L('; ', '; '), stage('attention'), L('; Phase 3 objective.', '; objetivo de la Fase 3.')),
            learnerDid: T('You asked about consequence and let her choose the scale of the answer.', 'Preguntaste por la consecuencia y dejaste que ella eligiera la escala de la respuesta.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('A minimiser given room to generalise will generalise. The specific instance is the evidence; the summary is the defence.', 'Quien minimiza, si tiene espacio para generalizar, generaliza. El caso concreto es la prueba; el resumen es la defensa.'),
            consequence: T('"Nothing really. I mean — swimming, I suppose. We didn\'t go away in August, but that was a work thing." She has said August out loud and immediately explained it away. The fact is on the table; what it cost her is not.', '«Nada, en realidad. Bueno — nadar, supongo. En agosto no nos fuimos, pero eso fue por trabajo.» Ha dicho agosto en voz alta e inmediatamente lo ha justificado. El dato está sobre la mesa; lo que le costó, no.'),
            nextPriority: T('She explained August away before you asked about it. Go back to it.', 'Justificó lo de agosto antes de que preguntaras. Vuelve a agosto.')
          }
        },
        {
          id: 'disc-event',
          label: T('Ask for the last specific time it mattered — and wait', 'Pedir la última vez concreta en que importó — y esperar'),
          language: T('Not in general. I want one specific time. The last time this changed something you did — what you wore, where you went, what you said no to. One occasion, with a date on it. Take as long as you like. … (say nothing else)', 'En general no. Quiero una vez concreta. La última vez que esto cambió algo que usted hizo — lo que se puso, adónde fue, a qué dijo que no. Una sola ocasión, con fecha. Tómese el tiempo que necesite. … (no digas nada más)'),
          effects: { trust: { safety: 1, attention: 2, understanding: 2 }, willingness: 5, posture: 'opening', reveals: ['avoided_holiday'], flags: { eventNamed: true } },
          mirror: {
            signalDetected: T('A struck-through week in August on the form, and a client who arranges her body before she sits down.', 'Una semana de agosto tachada en el formulario, y una clienta que se recoloca el cuerpo antes de sentarse.'),
            interpretation: T('Demanding one dated occasion is the instrument that defeats minimisation, because a minimiser can round down a feeling but cannot round down an event. The silence afterwards is the active ingredient — she cannot fill it with a joke if you do not laugh.', 'Exigir una sola ocasión con fecha es el instrumento que derrota a la minimización, porque quien minimiza puede rebajar un sentimiento pero no puede rebajar un hecho. El silencio posterior es el principio activo — no puede rellenarlo con una broma si tú no te ríes.'),
            principle: J(std(2), L('; ', '; '), duty(3), L('; ', '; '), stage('understanding'), L('; Phase 3 objective.', '; objetivo de la Fase 3.')),
            learnerDid: T('You asked for one dated fact and then did the hardest thing in the room: nothing.', 'Pediste un hecho con fecha y después hiciste lo más difícil de la sala: nada.'),
            alignment: 'ALIGNED',
            why: T('With an apologising client, Discovery fails on generalities and succeeds on specifics. One occasion with a date cannot be described as silly by the person it happened to.', 'Con una clienta que se disculpa, el Descubrimiento fracasa en las generalidades y triunfa en los detalles. Una ocasión con fecha no puede ser calificada de tontería por la persona a la que le ocurrió.'),
            consequence: T('Fourteen seconds. Then: "August. We had the beach house booked with my sister and the children. I said I had a course to finish and stayed here for nine days. There was no course." (she looks at the floor) "They sent photographs every evening. That\'s what I did in August." The event is in the room.', 'Catorce segundos. Después: «Agosto. Teníamos la casa de la playa reservada con mi hermana y los niños. Dije que tenía un curso que terminar y me quedé aquí nueve días. No había ningún curso.» (mira al suelo) «Me mandaban fotos todas las tardes. Eso es lo que hice en agosto.» El suceso está en la sala.'),
            nextPriority: T('That is why she is here. Now find out what she thinks the solution looks like — before you offer one.', 'Por eso está aquí. Ahora averigua cómo cree ella que es la solución — antes de ofrecerle una.')
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
      if (cs.revealed.includes('avoided_holiday')) {
        return {
          source: 'Lucía',
          quote: T('"Please don\'t make it into a big thing. I lied about a course and sat at home, which is pathetic, and I know it is." (a breath) "I just want it to look like it did. I\'ve got a picture on my phone of how it should look, if that helps? I\'ve had it saved since March."', '«Por favor, no me lo convierta en un drama. Mentí con lo de un curso y me quedé en casa, que es patético, y lo sé.» (respira) «Solo quiero que quede como antes. Tengo una foto en el móvil de cómo debería quedar, ¿le sirve? La tengo guardada desde marzo.»'),
          subtext: T('Two things just happened in one sentence: she apologised for her own disclosure, and she offered you the photograph. The photograph is the entire second half of this case — and she thinks it is a helpful detail.', 'Acaban de pasar dos cosas en una sola frase: se ha disculpado por su propia revelación y te ha ofrecido la fotografía. La fotografía es toda la segunda mitad de este caso — y ella cree que es un detalle útil.')
        };
      }
      return {
        source: 'Lucía',
        quote: T('"Honestly, whatever you think. You\'re the one who does this all day — I\'m sure whatever\'s smallest is fine. I don\'t want to be one of those people who wants miracles."', '«De verdad, lo que usted crea. Usted es la que se dedica a esto todo el día — seguro que lo más pequeño está bien. No quiero ser de esas que quieren milagros.»'),
        subtext: T('Nothing to consolidate. Note the last sentence: she has just told you she has a miracle in mind and is embarrassed about it. Without the material, this phase cannot reach it.', 'Nada que consolidar. Fíjate en la última frase: acaba de decirte que tiene un milagro en la cabeza y que le da vergüenza. Sin el material, esta fase no puede llegar hasta ahí.')
      };
    },
    decision: {
      prompt: T('Phase 4 objective: prove understanding before any solution. She has minimised her own disclosure and mentioned a saved photograph. What do you reflect?', 'Objetivo de la Fase 4: demostrar comprensión antes de cualquier solución. Ha minimizado su propia revelación y ha mencionado una foto guardada. ¿Qué reflejas?'),
      options: [
        {
          id: 'und-reassure',
          label: T('Tell her she is being far too hard on herself', 'Decirle que está siendo demasiado dura consigo misma'),
          language: T('You are being so hard on yourself — it isn\'t pathetic at all, it\'s completely normal, and honestly you\'d be amazed how many women say exactly the same thing. Please don\'t feel bad about it.', 'Está siendo durísima consigo misma — no es nada patético, es completamente normal y, de verdad, le sorprendería cuántas mujeres dicen exactamente lo mismo. No se sienta mal por eso.'),
          effects: { trust: { understanding: -1, alignment: -1 }, willingness: 6 },
          mirror: {
            signalDetected: T('A disclosure followed instantly by an apology for having made it — and an offered photograph nobody has looked at.', 'Una revelación seguida al instante de una disculpa por haberla hecho — y una fotografía ofrecida que nadie ha mirado.'),
            interpretation: T('You comforted the apology and walked past the evidence. "You\'d be amazed how many women" makes her one of many at the precise moment she has told you something that happened only to her — and the photograph, which is the expectation problem, is now closed on her telephone.', 'Consolaste la disculpa y pasaste de largo por la prueba. «Le sorprendería cuántas mujeres» la convierte en una más justo en el momento en que te ha contado algo que solo le pasó a ella — y la fotografía, que es el problema de expectativas, se queda cerrada en su móvil.'),
            principle: J(std(2), L('; ', '; '), stage('understanding'), L('; ', '; '), duty(4), L('.', '.')),
            learnerDid: T('You returned sympathy instead of understanding, and declined the one piece of evidence she offered.', 'Devolviste compasión en lugar de comprensión, y rechazaste la única prueba que ella ofreció.'),
            alignment: 'NOT ALIGNED',
            why: T('Reflection returns what she said. Reassurance returns what you would like her to feel — and generalising her nine days into a statistic is the same dismissal she came in performing on herself.', 'El reflejo devuelve lo que ella dijo. Tranquilizar devuelve lo que a ti te gustaría que sintiera — y convertir sus nueve días en una estadística es la misma desestimación que ella se hacía a sí misma al entrar.'),
            consequence: T('"You\'re very kind." She puts the telephone back in her bag. The photograph is not discussed, so the expectation stays intact and unexamined until Phase 6, where it will detonate.', '«Qué amable es usted.» Vuelve a guardar el móvil en el bolso. La fotografía no se comenta, así que la expectativa queda intacta y sin examinar hasta la Fase 6, donde estallará.'),
            nextPriority: T('When a client offers you a photograph, look at it. It is a specification, not a mood board.', 'Cuando una clienta te ofrece una fotografía, mírala. Es un pliego de condiciones, no un tablero de inspiración.')
          }
        },
        {
          id: 'und-reflect',
          label: T('Reflect the nine days back and ask what she is picturing', 'Reflejar los nueve días y preguntar qué se está imaginando'),
          language: T('You booked a house with your sister and then spent nine days at home. That is not pathetic, it is expensive — it cost you a week with your family. So let me ask: when you picture this being fixed, what exactly do you see?', 'Reservaron una casa con su hermana y usted pasó nueve días en casa. Eso no es patético, es caro — le costó una semana con su familia. Así que le pregunto: cuando se imagina esto resuelto, ¿qué ve exactamente?'),
          requiresRevealed: 'avoided_holiday',
          degradedLanguage: T('What are you picturing, when you imagine this being better?', '¿Qué se imagina usted cuando piensa en esto mejorado?'),
          effects: { trust: { attention: 1, understanding: 1 }, willingness: 4, reveals: ['surgical_expectation'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 1 },
          degradedNote: T('A good question with nothing under it — "just a bit better, nothing mad" — and she rounds her own expectation down to something she thinks is acceptable to say. Reflection needs Discovery to feed it.', 'Una buena pregunta sin nada debajo — «un poco mejor, nada exagerado» — y redondea su propia expectativa a la baja, hasta algo que le parece aceptable decir. El reflejo necesita que el Descubrimiento lo alimente.'),
          mirror: {
            signalDetected: T('Nine days at home behind an invented course, and an expectation she has not been asked to describe.', 'Nueve días en casa detrás de un curso inventado, y una expectativa que nadie le ha pedido que describa.'),
            interpretation: T('Naming the cost in her own currency — a week with her family — is real reflection, and asking what she pictures is the right follow-up. Asking it in words rather than asking to see the picture lets her describe it approximately.', 'Nombrar el coste en su propia moneda — una semana con su familia — es reflejo de verdad, y preguntar qué se imagina es el seguimiento correcto. Preguntarlo con palabras en lugar de pedir ver la foto le permite describirlo de forma aproximada.'),
            principle: J(std(2), L('; ', '; '), stage('understanding'), L('; Phase 4 objective.', '; objetivo de la Fase 4.')),
            learnerDid: T('You priced the avoidance correctly and then took her word for the expectation.', 'Valoraste correctamente lo que le costó evitarlo y luego te fiaste de su palabra sobre la expectativa.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('A described expectation is negotiable in the telling. A photograph is not — and she has one.', 'Una expectativa descrita se negocia al contarla. Una fotografía, no — y ella tiene una.'),
            consequence: T('"Flat, I suppose. Like it was. Like the picture I saved." She does not show it to you. The expectation is named in words and still unmeasured — you know she wants "flat", you do not know she is holding a surgical photograph.', '«Lisa, supongo. Como estaba. Como la foto que guardé.» No te la enseña. La expectativa queda nombrada con palabras y sigue sin medirse — sabes que quiere «lisa», no sabes que está sosteniendo una foto posquirúrgica.'),
            nextPriority: T('Ask to see it. What she wants is on a screen in her handbag.', 'Pídele verla. Lo que quiere está en una pantalla dentro de su bolso.')
          }
        },
        {
          id: 'und-picture',
          label: T('Ask to see the photograph — and read it out loud', 'Pedir ver la fotografía — y leerla en voz alta'),
          language: T('Yes, it helps — show me. … (she turns the screen round) May I? … Right. I want to tell you exactly what I am looking at, because this photograph is the most useful thing either of us has said today. That is a beautiful result and it is a surgical one. It is cropped along the bottom, and what has been cropped out is the scar — it runs hip to hip. That abdomen has had skin removed and a muscle wall repaired. No device on earth, mine included, produces that. I am not saying it to disappoint you. I am saying it now, at minute twenty, rather than after you have paid me — because you have been carrying this picture since March and measuring yourself against it every day.', 'Sí, me sirve — enséñemela. … (gira la pantalla) ¿Me permite? … Bien. Le voy a decir exactamente qué estoy mirando, porque esta fotografía es lo más útil que hemos dicho las dos hoy. Ese es un resultado precioso y es un resultado quirúrgico. Está recortada por abajo, y lo que han recortado es la cicatriz — va de cadera a cadera. A ese abdomen le han quitado piel y le han reparado la pared muscular. Ningún aparato del mundo, tampoco el mío, consigue eso. No se lo digo para decepcionarla. Se lo digo ahora, en el minuto veinte, y no después de que me haya pagado — porque usted lleva esa foto encima desde marzo y se está midiendo contra ella todos los días.'),
          requiresRevealed: 'avoided_holiday',
          degradedLanguage: T('Could I see the photograph you mentioned?', '¿Podría ver la fotografía que ha mencionado?'),
          effects: { trust: { safety: 1, understanding: 2, credibility: 1 }, willingness: 5, posture: 'open', reveals: ['surgical_expectation', 'partner_comment'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 1 },
          degradedNote: T('"Oh — it\'s nothing, just something I saw." Asked of a client who has told you nothing about August, the request for the photograph gets deflected: she has no reason yet to hand you the thing she is embarrassed about. A photograph is disclosure, and disclosure needs Discovery first.', '«Ah — no es nada, algo que vi por ahí.» Pedida a una clienta que no te ha contado nada de agosto, la petición de la foto se esquiva: todavía no tiene motivos para entregarte aquello que le da vergüenza. Una fotografía es una revelación, y las revelaciones necesitan Descubrimiento antes.'),
          mirror: {
            signalDetected: T('An offered photograph, saved since March, cropped straight across the line where a Pfannenstiel scar sits.', 'Una fotografía ofrecida, guardada desde marzo, recortada justo por la línea donde va una cicatriz de Pfannenstiel.'),
            interpretation: T('You took the specification and read it honestly, in Phase 4, before any recommendation existed to protect. This is the pivot of the whole case: an unmeasured expectation cannot be met, and a ceiling named after a recommendation sounds like a retreat while a ceiling named before it sounds like competence.', 'Cogiste el pliego de condiciones y lo leíste con honestidad, en la Fase 4, antes de que existiera ninguna recomendación que proteger. Este es el eje del caso entero: una expectativa sin medir no se puede cumplir, y un techo nombrado después de una recomendación suena a retirada mientras que nombrado antes suena a competencia.'),
            principle: J(std(2), L('; ', '; '), duty(4), L('; ', '; '), duty(1), L('; ', '; '), stage('understanding'), L('.', '.')),
            learnerDid: T('You looked at the evidence she offered and told her what it actually was, before it could cost her money.', 'Miraste la prueba que te ofreció y le dijiste qué era en realidad, antes de que pudiera costarle dinero.'),
            alignment: 'ALIGNED',
            why: T('Communicating truthfully is not a disclaimer at the end. With this client it is a diagnostic act performed in the middle, and it is the only thing that makes a later recommendation believable.', 'Comunicar con veracidad no es una advertencia al final. Con esta clienta es un acto diagnóstico realizado a mitad de camino, y es lo único que hace creíble una recomendación posterior.'),
            consequence: T('A long silence. "…There\'s a scar." She looks at it properly for the first time. "I\'ve been looking at that photograph for six months." Then, quietly: "My husband said I was being ridiculous about it. I think he meant it kindly. I\'ve not been able to stop hearing it." Two things surface at once — the real ceiling, and the third voice in the room.', 'Un silencio largo. «…Hay una cicatriz.» La mira de verdad por primera vez. «Llevo seis meses mirando esa fotografía.» Y luego, en voz baja: «Mi marido me dijo que estaba siendo ridícula con esto. Creo que lo dijo con buena intención. No he podido dejar de oírlo.» Salen dos cosas a la vez — el techo real, y la tercera voz de la sala.'),
            nextPriority: T('You have the ceiling and the third voice. Say what the device CAN do before you recommend anything.', 'Tienes el techo y la tercera voz. Di lo que el aparato SÍ puede hacer antes de recomendar nada.')
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
    key: 'education', toolkit: null,
    signal(cs) {
      return {
        source: 'Lucía',
        quote: cs.revealed.includes('surgical_expectation')
          ? T('"So what CAN it do? And please give me the real number, not the best one. I would rather know now than find out in March."', '«¿Y qué SÍ puede hacer? Y deme la cifra real, por favor, no la mejor. Prefiero saberlo ahora que descubrirlo en marzo.»')
          : T('"Go on then — how much does it tighten? Be honest, is it a big difference? Everyone online says it\'s life-changing but they would, wouldn\'t they."', '«Cuénteme — ¿cuánto tensa? Sea sincera, ¿se nota mucho? Todo el mundo en internet dice que te cambia la vida, pero claro, es lo que dirían.»'),
        subtext: T('Phase 5 is the load-bearing phase of this case. There is exactly one sentence that has to be said out loud — the honest ceiling of a non-surgical device on her degree of laxity — and it has to be said HERE, before any recommendation exists. Said later, it is a retraction. Not said at all, it detonates at Phase 7.', 'La Fase 5 es la fase de carga de este caso. Hay exactamente una frase que tiene que decirse en voz alta — el techo honesto de un aparato no quirúrgico sobre su grado de flacidez — y tiene que decirse AQUÍ, antes de que exista ninguna recomendación. Dicha después, es una rectificación. No dicha en absoluto, estalla en la Fase 7.')
      };
    },
    decision: {
      prompt: T('Phase 5 objective: educate so she can evaluate. This is the phase where the ceiling must be named. What do you explain?', 'Objetivo de la Fase 5: educar para que pueda evaluar. Esta es la fase en la que hay que nombrar el techo. ¿Qué explicas?'),
      options: [
        {
          id: 'edu-showcase',
          label: T('Show her the best results the device has produced', 'Enseñarle los mejores resultados que ha dado el aparato'),
          language: T('Let me show you our folder — these are real clients of ours. Look at this one, six sessions. And this one is after four. The technology has moved on enormously in the last two years; people are genuinely amazed at what it does now.', 'Le enseño nuestra carpeta — son clientas reales nuestras. Mire esta, seis sesiones. Y esta es después de cuatro. La tecnología ha avanzado enormemente en los últimos dos años; la gente se queda de verdad asombrada con lo que hace ahora.'),
          effects: { trust: { credibility: -1, alignment: -1 }, willingness: 8, flags: { overclaimed: true } },
          mirror: {
            signalDetected: T('An explicit request for the real number rather than the best one — answered with a folder of best ones.', 'Una petición explícita de la cifra real en lugar de la mejor — respondida con una carpeta de las mejores.'),
            interpretation: T('You answered a request for honesty with a selection. Best-case images shown to a woman already holding a surgical photograph do not raise her expectation — they confirm it, and they attach your name to it.', 'Respondiste a una petición de honestidad con una selección. Las imágenes de mejor caso enseñadas a una mujer que ya sostiene una foto posquirúrgica no elevan su expectativa — la confirman, y le pegan tu nombre.'),
            principle: J(duty(4), L(' violated; ', ' incumplido; '), std(3), L('; ', '; '), std(5), L('; Phase 5 objective.', '; objetivo de la Fase 5.')),
            learnerDid: T('You raised an expectation that was already too high, and left the ceiling unnamed.', 'Elevaste una expectativa que ya era demasiado alta, y dejaste el techo sin nombrar.'),
            alignment: 'NOT ALIGNED',
            why: T('The whole case turns on one honest sentence being spoken before the recommendation. This option spends the phase doing the opposite, and it is the choice that makes the Phase 7 objection a disappointment rather than a question.', 'El caso entero pivota sobre una frase honesta dicha antes de la recomendación. Esta opción dedica la fase a lo contrario, y es la elección que convierte la objeción de la Fase 7 en una decepción en lugar de una pregunta.'),
            consequence: T('"That\'s more like it!" Willingness jumps — the most expensive rise in the case. The ceiling is now something she will discover at the end, from you, as a withdrawal.', '«¡Eso ya es otra cosa!» La disposición se dispara — la subida más cara del caso. El techo será ahora algo que ella descubra al final, de tu boca, como una retirada.'),
            nextPriority: T('If you will have to say it eventually, you have to say it before you recommend. Late honesty reads as a retreat.', 'Si vas a tener que decirlo tarde o temprano, tienes que decirlo antes de recomendar. La honestidad tardía se lee como una retirada.')
          }
        },
        {
          id: 'edu-mechanism',
          label: T('Explain the three separate problems and which the device addresses', 'Explicar los tres problemas distintos y cuál aborda el aparato'),
          language: T('There are three different things under a post-partum abdomen and they look identical from outside. Subcutaneous fat, which responds to some devices. Dermal laxity — the skin\'s own quality — which responds to others, slowly, over months. And the abdominal wall itself, the separation between the muscles, which responds to neither; that is physiotherapy or surgery. Most disappointment in this field comes from treating the second thing while expecting the third.', 'Bajo un abdomen posparto hay tres cosas distintas y desde fuera parecen idénticas. La grasa subcutánea, que responde a algunos aparatos. La flacidez dérmica — la calidad de la propia piel — que responde a otros, despacio, a lo largo de meses. Y la pared abdominal en sí, la separación entre los músculos, que no responde a ninguno de los dos; eso es fisioterapia o cirugía. La mayor parte de las decepciones en este campo vienen de tratar la segunda cosa esperando la tercera.'),
          effects: { trust: { credibility: 1, reliability: 1 }, willingness: 4 },
          mirror: {
            signalDetected: T('A question about how much it tightens, from a client whose file records that nobody has ever assessed her abdominal wall.', 'Una pregunta sobre cuánto tensa, de una clienta cuya ficha registra que nadie ha valorado nunca su pared abdominal.'),
            interpretation: T('Separating the three mechanisms is excellent education and it is genuinely how disappointment is prevented in general. It describes the category of error without stating where SHE sits inside it — which is the sentence that matters.', 'Separar los tres mecanismos es educación excelente y es realmente cómo se previenen las decepciones en general. Describe la categoría del error sin decir dónde está ELLA dentro de ella — que es la frase que importa.'),
            principle: J(std(3), L('; ', '; '), stage('credibility'), L('; Phase 5 objective.', '; objetivo de la Fase 5.')),
            learnerDid: T('You taught the mechanism and stopped one sentence short of the ceiling.', 'Enseñaste el mecanismo y te quedaste a una frase del techo.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('A general principle lets an optimistic client place herself on the good side of it. Only a specific ceiling, applied to her, closes that door.', 'Un principio general permite que una clienta optimista se coloque en el lado bueno. Solo un techo concreto, aplicado a ella, cierra esa puerta.'),
            consequence: T('"That makes sense." Credibility and reliability rise. Then: "So which one am I?" — the question you have not answered.', '«Tiene sentido.» Suben credibilidad y fiabilidad. Y luego: «¿Y yo cuál soy?» — la pregunta que no has respondido.'),
            nextPriority: T('Answer "which one am I" with a number and a limit, before you recommend anything.', 'Responde al «¿y yo cuál soy?» con una cifra y un límite, antes de recomendar nada.')
          }
        },
        {
          id: 'edu-ceiling',
          label: T('Name the honest ceiling now, with a number, before recommending anything', 'Nombrar el techo honesto ahora, con una cifra, antes de recomendar nada'),
          language: T('Then here is the real number, and I would rather lose the sale than have you find it out in March. On your degree of laxity, a non-surgical device gives a modest tightening and a genuine improvement in skin quality — in honest terms, somewhere around fifteen to twenty per cent of what you are picturing. It will not remove the fold when you sit down. It will not flatten you. The photograph on your telephone is not available to me at any price, on any number of sessions, and anyone who tells you otherwise is selling you six sessions and a disappointment. What it can do is real, it is just smaller than the picture: better texture, a firmer feel, and the fold softer rather than gone. If that is not worth money to you, that is an entirely reasonable conclusion and I will not think any less of you for reaching it.', 'Pues aquí va la cifra real, y prefiero perder la venta a que la descubra usted en marzo. Con su grado de flacidez, un aparato no quirúrgico da una tensión moderada y una mejora real de la calidad de la piel — en términos honestos, en torno al quince o veinte por ciento de lo que usted se está imaginando. No le va a quitar el pliegue al sentarse. No la va a dejar lisa. La fotografía de su móvil no está a mi alcance a ningún precio, con ningún número de sesiones, y quien le diga lo contrario le está vendiendo seis sesiones y una decepción. Lo que sí puede hacer es real, solo que es más pequeño que la foto: mejor textura, mayor firmeza al tacto, y el pliegue más suave en lugar de desaparecido. Si eso no le compensa pagarlo, es una conclusión perfectamente razonable y no voy a pensar peor de usted por llegar a ella.'),
          requiresRevealed: 'surgical_expectation',
          degradedLanguage: T('I should be honest about the limits — the tightening from a device is modest, and it is not the same as surgery.', 'Debo ser honesta con los límites — la tensión que da un aparato es moderada, y no es lo mismo que la cirugía.'),
          effects: { trust: { credibility: 2, reliability: 1, alignment: 1 }, willingness: 3, flags: { ceilingNamed: true, ceilingEarly: true } },
          degradedEffects: { trust: { credibility: 1 }, willingness: 1 },
          degradedNote: T('The right sentence spoken into a vacuum — "oh no, I wasn\'t expecting miracles, honestly" and she waves it away, because she has not shown you the picture she is actually measuring against. A ceiling only works once you know what it is a ceiling under.', 'La frase correcta dicha en el vacío — «ay, no, si yo no esperaba milagros, de verdad» y lo despacha con la mano, porque no te ha enseñado la foto contra la que se mide en realidad. Un techo solo funciona cuando sabes bajo qué es techo.'),
          mirror: {
            signalDetected: T('"Give me the real number, not the best one" — an explicit request for the ceiling, from a client holding a surgical photograph.', '«Deme la cifra real, no la mejor» — una petición explícita del techo, de una clienta que sostiene una foto posquirúrgica.'),
            interpretation: T('You put a percentage on it and you put it BEFORE the recommendation. That ordering is the entire case. The same sentence after a recommendation is a retraction and reads as a sales tactic in reverse; before it, it is the thing that makes everything you say next worth believing.', 'Le pusiste un porcentaje y lo pusiste ANTES de la recomendación. Ese orden es el caso entero. La misma frase después de una recomendación es una rectificación y se lee como una táctica comercial al revés; antes, es lo que hace que todo lo que digas después merezca ser creído.'),
            principle: J(duty(4), L('; ', '; '), duty(1), L('; ', '; '), std(3), L('; ', '; '), std(5), L('; ', '; '), stage('credibility'), L('.', '.')),
            learnerDid: T('You told a client who was ready to buy that most of what she wants is not for sale, before she could pay for it.', 'Le dijiste a una clienta dispuesta a comprar que la mayor parte de lo que quiere no está en venta, antes de que pudiera pagarlo.'),
            alignment: 'ALIGNED',
            why: T('For a client who already suspects she is being ridiculous, the only way to make an offer believable is to make the refusal believable first. And for a client holding a cropped surgical photograph, an unnamed ceiling is a guaranteed complaint with a receipt attached.', 'Para una clienta que ya sospecha que está siendo ridícula, la única forma de hacer creíble una oferta es hacer creíble primero la negativa. Y para una clienta que sostiene una foto quirúrgica recortada, un techo sin nombrar es una reclamación garantizada con factura incluida.'),
            consequence: T('She is quiet for a long moment, and then does something she has not done all afternoon: she stops apologising. "Fifteen per cent." A pause. "Nobody has given me a number before. Everybody has given me a feeling." Credibility and reliability rise sharply.', 'Se queda callada un buen rato, y luego hace algo que no ha hecho en toda la tarde: deja de disculparse. «Un quince por ciento.» Una pausa. «Nadie me había dado una cifra. Todo el mundo me daba una sensación.» Credibilidad y fiabilidad suben con fuerza.'),
            nextPriority: T('The ceiling is built. Now recommend inside it — and tie the recommendation to August, not to the photograph.', 'El techo está construido. Recomienda ahora dentro de él — y ata la recomendación a agosto, no a la fotografía.')
          }
        }
      ]
    },
    gate() { return { canAdvance: true }; }
  },

  // ======================= PHASE 6 — RECOMMENDATION =======================
  recommendation: {
    key: 'recommendation', toolkit: 4, secondaryToolkit: 5,
    signal(cs) {
      if (cs.flags.ceilingEarly) {
        return {
          source: 'Lucía',
          quote: T('"All right. So knowing it is fifteen per cent and not a photograph — what would you actually do? And tell me honestly if the answer is nothing."', '«De acuerdo. Entonces, sabiendo que es un quince por ciento y no una fotografía — ¿qué haría usted en realidad? Y dígame con sinceridad si la respuesta es nada.»'),
          subtext: T('She is asking the question with the ceiling already installed, which means a recommendation can now be evaluated instead of believed. She is also still offering you the exit — but this time she can afford to hear you decline it.', 'Hace la pregunta con el techo ya instalado, lo que significa que ahora una recomendación se puede evaluar en lugar de creer. Sigue ofreciéndote la salida — pero esta vez puede permitirse oírte rechazarla.')
        };
      }
      return {
        source: 'Lucía',
        quote: T('"Go on then, what do you recommend? Whatever gets me closest to the picture, I suppose — I don\'t mind doing the full course if that\'s what it takes."', '«Venga, ¿qué me recomienda? Lo que me deje más cerca de la foto, supongo — no me importa hacer la pauta completa si hace falta.»'),
        subtext: T('"Whatever gets me closest to the picture" is an expectation you have never examined, being used to authorise a purchase. Anything you recommend now is being bought against a photograph you have not seen.', '«Lo que me deje más cerca de la foto» es una expectativa que nunca has examinado, usada para autorizar una compra. Cualquier cosa que recomiendes ahora se compra contra una fotografía que no has visto.')
      };
    },
    decision: {
      prompt: T('Phase 6 objective: a recommendation traceable to what she actually said. What do you recommend?', 'Objetivo de la Fase 6: una recomendación trazable a lo que ella dijo de verdad. ¿Qué recomiendas?'),
      options: [
        {
          id: 'rec-package',
          label: T('Recommend the full body programme — it gets her closest', 'Recomendar el programa corporal completo — es lo que más la acerca'),
          language: T('Then let\'s give you the best chance: the full body programme — six radiofrequency plus four cryolipolysis, 2.300 €, over five months. It\'s the most complete thing we do and it\'s the closest you\'ll get to what you want.', 'Pues vamos a darle la mejor oportunidad: el programa corporal completo — seis de radiofrecuencia más cuatro de criolipólisis, 2.300 €, en cinco meses. Es lo más completo que hacemos y es lo más cerca que va a estar de lo que quiere.'),
          effects: { trust: { credibility: -1, alignment: -2 }, willingness: 7, objectionIntensity: 3, flags: { oversold: true } },
          mirror: {
            signalDetected: T('A woman who arrived asking for "the smallest thing" and apologising for existing, being sold the largest programme on the price list.', 'Una mujer que llegó pidiendo «lo más pequeño» y disculpándose por existir, a la que se le vende el programa más grande de la tarifa.'),
            interpretation: T('"The closest you\'ll get to what you want" is a sentence about her photograph, and it is not true. You have sold the maximum against an expectation that cannot be met, to the client in the curriculum least able to object.', '«Lo más cerca que va a estar de lo que quiere» es una frase sobre su fotografía, y no es verdad. Has vendido el máximo contra una expectativa que no se puede cumplir, a la clienta del programa formativo menos capaz de objetar.'),
            principle: J(std(4), L(' violated; ', ' incumplido; '), duty(1), L(' violated; ', ' incumplido; '), duty(4), L(' violated.', ' incumplido.')),
            learnerDid: T('You maximised the purchase and attached it to an outcome the device cannot produce.', 'Maximizaste la compra y la ataste a un resultado que el aparato no puede producir.'),
            alignment: 'NOT ALIGNED',
            why: T('Selling more to a client who minimises is the easiest sale in the building, because she will not push back — and it is the clearest available breach of Do No Avoidable Harm, because the harm is entirely foreseeable from her own photograph.', 'Vender más a una clienta que minimiza es la venta más fácil del edificio, porque no va a replicar — y es el incumplimiento más claro de No Causar Daño Evitable, porque el daño es del todo previsible a partir de su propia fotografía.'),
            consequence: T('"If you think that\'s what I need." She agrees, the way she agrees with everyone. Alignment collapses; the objection arrives at maximum intensity, and this is the path where she does not come back at all.', '«Si usted cree que es lo que necesito.» Acepta, igual que acepta con todo el mundo. La alineación se desploma; la objeción llega con intensidad máxima, y es en esta vía donde no vuelve en absoluto.'),
            nextPriority: T('Ask what you would recommend if she could not afford to be disappointed. That is the recommendation.', 'Pregúntate qué recomendarías si ella no pudiera permitirse una decepción. Esa es la recomendación.')
          }
        },
        {
          id: 'rec-late',
          label: T('Recommend the modest plan — and attach the limitation to it now', 'Recomendar el plan modesto — y adjuntarle la limitación ahora'),
          language: T('Three radiofrequency sessions, 890 €, over about three months — and I should be straight with you before you decide: this is a modest change, not the photograph. Better texture, a firmer feel, the fold softened rather than gone. If that is not worth 890 € to you, say so now and I will not be offended.', 'Tres sesiones de radiofrecuencia, 890 €, en unos tres meses — y debo ser franca con usted antes de que decida: es un cambio moderado, no es la fotografía. Mejor textura, mayor firmeza, el pliegue suavizado y no eliminado. Si eso no le compensa pagar 890 €, dígamelo ahora y no me ofenderé.'),
          effects: { trust: { alignment: 1, reliability: 1, credibility: 1 }, willingness: 2, flags: { ceilingNamed: true } },
          mirror: {
            signalDetected: T('An expectation that has never been measured, meeting a recommendation for the first time.', 'Una expectativa que nunca se ha medido, encontrándose por primera vez con una recomendación.'),
            interpretation: T('The plan is right and the limitation is real, and saying it at all is far better than not saying it. But it arrives attached to a price, which is the one position from which honesty sounds like a hedge — she cannot now tell whether you are being truthful or managing her expectations downward to protect yourself.', 'El plan es el correcto y la limitación es real, y decirla ya es muchísimo mejor que no decirla. Pero llega pegada a un precio, que es la única posición desde la que la honestidad suena a cobertura — ahora ella no puede distinguir si estás siendo veraz o rebajándole las expectativas para protegerte.'),
            principle: J(std(4), L('; ', '; '), duty(4), L('; ', '; '), std(5), L('.', '.')),
            learnerDid: T('You named the ceiling in the same breath as the invoice, instead of before it.', 'Nombraste el techo en la misma frase que la factura, en lugar de antes.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Order is a component of truthfulness here. Honesty before a recommendation buys credibility; honesty inside a recommendation only buys protection — you are covered, and she is warned, but she has not been taught.', 'El orden es un componente de la veracidad en este caso. La honestidad antes de una recomendación compra credibilidad; la honestidad dentro de una recomendación solo compra cobertura — tú quedas cubierta, ella queda advertida, pero no ha aprendido nada.'),
            consequence: T('"Oh. Right." A small recalculation you can watch happening. She accepts the plan; alignment and reliability rise modestly, and her enthusiasm is noticeably lower than it was two minutes ago.', '«Ah. Ya.» Un pequeño recálculo que se ve suceder. Acepta el plan; alineación y fiabilidad suben de forma moderada, y su entusiasmo es visiblemente menor que hace dos minutos.'),
            nextPriority: T('Next time, say the ceiling in Phase 5. The same sentence is worth three times as much one phase earlier.', 'La próxima vez, di el techo en la Fase 5. La misma frase vale tres veces más una fase antes.')
          }
        },
        {
          id: 'rec-honest',
          label: T('Recommend less than the smallest thing she asked for — tied to August', 'Recomendar menos que lo más pequeño que ella pidió — atado a agosto'),
          language: T('My recommendation is smaller than what you came in asking about, and it is deliberate. Three radiofrequency sessions, 890 €, and a referral to a post-partum physiotherapist first — which costs you about 60 € and may matter more than anything I do, because nobody has measured your abdominal wall and that is what changes how you sit down. What I am NOT recommending is the ten-session programme, the cryolipolysis and the maintenance plan — around 1.400 € of things you do not need — because they treat fat and you told me it is the skin, and because more sessions will not move the ceiling. And I want to say the important part plainly: this will not get you the photograph, and it may well get you into the sea next August. Those are two different purchases and only one of them is for sale here.', 'Mi recomendación es más pequeña que aquello por lo que vino a preguntar, y es deliberado. Tres sesiones de radiofrecuencia, 890 €, y antes una derivación a una fisioterapeuta de suelo pélvico y posparto — que le costará unos 60 € y puede importar más que nada de lo que yo haga, porque nadie le ha medido la pared abdominal y eso es lo que cambia cómo se sienta. Lo que NO le recomiendo es el programa de diez sesiones, la criolipólisis ni el plan de mantenimiento — unos 1.400 € de cosas que no necesita — porque tratan grasa y usted me dijo que es la piel, y porque más sesiones no mueven el techo. Y quiero decir la parte importante sin rodeos: esto no le va a dar la fotografía, y es muy posible que le dé el mar el agosto que viene. Son dos compras distintas y aquí solo está en venta una.'),
          requiresRevealed: 'avoided_holiday',
          degradedLanguage: T('I\'d recommend starting with three sessions rather than the full programme, and reviewing after that.', 'Le recomendaría empezar con tres sesiones en lugar del programa completo, y revisar después.'),
          effects: { trust: { alignment: 2, reliability: 1 }, willingness: 6, flags: { ceilingNamed: true } },
          degradedEffects: { trust: { alignment: 1 }, willingness: 2 },
          degradedNote: T('A smaller plan with nothing of HER in it — "whatever you think is best". Without August attached, "less" is just a cheaper number you chose on her behalf, and she reads it as confirmation that she was not worth the bigger one.', 'Un plan más pequeño sin nada de ELLA dentro — «lo que usted crea». Sin agosto detrás, «menos» es solo una cifra más barata que elegiste tú por ella, y lo lee como la confirmación de que no merecía la grande.'),
          mirror: {
            signalDetected: T('"Tell me honestly if the answer is nothing" — she asked you to be willing to recommend against yourself.', '«Dígame con sinceridad si la respuesta es nada» — te pidió que estuvieras dispuesta a recomendar en tu contra.'),
            interpretation: T('You recommended less than the smallest option, added a referral that takes money out of your own till, named 1.400 € you are declining, and then separated the two purchases: the photograph, which is not for sale, and next August, which is. That last sentence is the whole case in one line.', 'Recomendaste menos que la opción más pequeña, añadiste una derivación que saca dinero de tu propia caja, nombraste 1.400 € que estás rechazando, y después separaste las dos compras: la fotografía, que no está en venta, y el agosto que viene, que sí. Esa última frase es el caso entero en una línea.'),
            principle: J(std(4), L('; ', '; '), duty(1), L('; ', '; '), duty(2), L('; ', '; '), stage('alignment'), L('.', '.')),
            learnerDid: T('You referred her out, cut your own invoice, and tied what remained to the nine days she spent at home.', 'La derivaste fuera, recortaste tu propia factura y ataste lo que quedaba a los nueve días que pasó en casa.'),
            alignment: 'ALIGNED',
            why: T('A client who does not believe she deserves treatment cannot be convinced by enthusiasm — only by watching a professional decline money on her behalf. And Trust Standard 4 requires the recommendation to be traceable to what SHE values, which in this case is a beach, not an abdomen.', 'A una clienta que no cree merecer el tratamiento no la convence el entusiasmo — solo ver a una profesional rechazar dinero en su nombre. Y el Estándar de Confianza 4 exige que la recomendación sea trazable a lo que ELLA valora, que en este caso es una playa, no un abdomen.'),
            consequence: T('"You\'ve just sent me to someone else and taken fourteen hundred euros off your own bill." She laughs, properly, for the first time. "And nobody has mentioned August except me." Alignment +2.', '«Acaba de mandarme a otra persona y de quitarse mil cuatrocientos euros de su propia factura.» Se ríe, de verdad, por primera vez. «Y nadie ha mencionado agosto salvo yo.» Alineación +2.'),
            nextPriority: T('Do not add anything back. Now let her decide — including deciding no.', 'No vuelvas a añadir nada. Ahora deja que decida — incluido decidir que no.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a4 = artifacts['4'];
      if (!a4 || !a4.valid) {
        return { canAdvance: false, reason: T('Toolkit #4 (MIRROR Recommendation Builder) must be completed before Phase 7. Field 8 — what you are intentionally NOT recommending — is where this case is passed or failed.', 'El Toolkit #4 (Constructor de Recomendación MIRROR) debe completarse antes de la Fase 7. El campo 8 — lo que deliberadamente NO recomiendas — es donde este caso se aprueba o se suspende.') };
      }
      const a5 = artifacts['5'];
      if (!a5 || !a5.valid) {
        return { canAdvance: false, reason: T('Toolkit #5 (Price & Value Presentation Planner) must be completed before Phase 7. The honest limitation must be stated before the number, not after it.', 'El Toolkit #5 (Planificador de Presentación de Precio y Valor) debe completarse antes de la Fase 7. La limitación honesta debe enunciarse antes de la cifra, no después.') };
      }
      return { canAdvance: true };
    }
  },

  // ===================== PHASE 7 — DECISION SUPPORT =======================
  decisionSupport: {
    key: 'decisionSupport', toolkit: 6,
    signal(cs) {
      // MATERIAL BRANCHING: which objection appears is determined by prior state.
      if (!cs.flags.ceilingNamed) {
        return {
          source: 'Lucía',
          objectionVariant: 'DISAPPOINTMENT',
          intensity: 3,
          quote: T('"Can I just check something? Will it actually look like the picture? Because if I\'m honest that\'s the only reason I came, and I\'ve got a horrible feeling you\'ve been being polite with me for an hour."', '«¿Puedo comprobar una cosa? ¿De verdad va a quedar como la foto? Porque, si le soy sincera, es el único motivo por el que he venido, y tengo la terrible sensación de que lleva una hora siendo amable conmigo.»'),
          subtext: T('Highest intensity, and entirely manufactured: the ceiling was never named, so she is discovering it now, at the point of payment, from the person who is about to take her money. Surface = "will it look like the picture"; underlying = she suspects she has been handled, and she was right.', 'Intensidad máxima, y enteramente fabricada: el techo nunca se nombró, así que lo está descubriendo ahora, en el momento de pagar, de boca de quien está a punto de cobrarle. Superficie = «¿quedará como la foto?»; fondo = sospecha que la han manejado, y tenía razón.')
        };
      }
      if (!cs.revealed.includes('partner_comment')) {
        return {
          source: 'Lucía',
          objectionVariant: 'PARTNER',
          intensity: 2,
          quote: T('"It makes sense, it really does. It\'s just… I can already hear my husband asking what I spent it on, and I don\'t think I\'ve got a good answer. \'Fifteen per cent\' isn\'t going to sound like 890 € across the kitchen table, is it?"', '«Tiene sentido, de verdad que lo tiene. Es solo que… ya estoy oyendo a mi marido preguntarme en qué me lo he gastado, y no creo que tenga una buena respuesta. «Un quince por ciento» no va a sonar a 890 € en la mesa de la cocina, ¿verdad?»'),
          subtext: T('Mid-intensity. There is a third person in this room and he has been here since the intake form — "my husband says I\'m being ridiculous" — and nobody surfaced him. Surface = money; underlying = she has no permission, and she is about to go home and ask for it from the person who supplied the doubt.', 'Intensidad media. Hay una tercera persona en esta sala y está aquí desde el formulario de admisión — «mi marido dice que estoy siendo ridícula» — y nadie la sacó a la luz. Superficie = dinero; fondo = no tiene permiso, y va a ir a casa a pedírselo precisamente a quien le suministró la duda.')
        };
      }
      return {
        source: 'Lucía',
        objectionVariant: 'TIMING',
        intensity: 1,
        quote: T('"I want to do it. My only real question is when — the little one still doesn\'t sleep, and three months of appointments in the middle of a school term is a lot to organise. Would it be daft to start in January instead?"', '«Quiero hacerlo. Mi única duda de verdad es cuándo — el pequeño todavía no duerme, y tres meses de citas en mitad del curso escolar es mucho que organizar. ¿Sería una tontería empezar en enero?»'),
        subtext: T('Lowest intensity, and the healthiest sentence in the case: for the first time she is organising her own life around her own decision instead of apologising for having one. Surface = scheduling; underlying = she wants confirmation that the decision stays valid if she takes it slowly.', 'Intensidad mínima, y la frase más sana del caso: por primera vez está organizando su propia vida en torno a su propia decisión en lugar de disculparse por tenerla. Superficie = calendario; fondo = quiere la confirmación de que la decisión sigue siendo válida si se la toma con calma.')
      };
    },
    decision: {
      prompt: T('Phase 7 objective: explore the objection and support her pace. Note: the objection you are facing was determined by your earlier choices.', 'Objetivo de la Fase 7: explorar la objeción y acompañar su ritmo. Ojo: la objeción a la que te enfrentas la determinaron tus decisiones anteriores.'),
      options: [
        {
          id: 'dec-agree',
          label: T('Agree with her — maybe she should leave it after all', 'Darle la razón — quizá sea mejor dejarlo, después de todo'),
          language: T('Do you know what, you\'re probably right — maybe it isn\'t worth it for you. You really do look fine, and I\'d hate for you to spend money and be disappointed. Have a think and come back if you ever change your mind.', '¿Sabe qué? Seguramente tenga usted razón — quizá no le compense. De verdad que está estupenda, y no me gustaría que se gastara el dinero y se llevara una decepción. Piénselo y vuelva si algún día cambia de opinión.'),
          effects: { trust: { safety: -2, alignment: -1, reliability: -1 }, willingness: -28, posture: 'withdrawn', objectionIntensity: 3 },
          mirror: {
            signalDetected: T('A doubt voiced at the decision point by a client who has spent the entire consultation asking to be sent home.', 'Una duda expresada en el momento de decidir por una clienta que ha pasado la consulta entera pidiendo que la manden a casa.'),
            interpretation: T('At the exact moment she needed someone to hold the ground, you handed her back the verdict she arrived with. "You look fine" at Phase 7 is not kindness — it is the professional confirmation that the nine days in August were about nothing, and she will believe you, because you are the expert.', 'En el momento exacto en que necesitaba que alguien sostuviera el terreno, le devolviste el veredicto con el que llegó. «Está estupenda» en la Fase 7 no es amabilidad — es la confirmación profesional de que los nueve días de agosto no fueron por nada, y te va a creer, porque tú eres la experta.'),
            principle: J(std(1), L(' violated; ', ' incumplido; '), std(2), L(' violated; ', ' incumplido; '), duty(1), L(' violated; Phase 7 objective (\"support pace\", not close the door).', ' incumplido; objetivo de la Fase 7 («acompañar el ritmo», no cerrar la puerta).')),
            learnerDid: T('You resolved her ambivalence by taking the side that ends the consultation.', 'Resolviste su ambivalencia poniéndote del lado que termina la consulta.'),
            alignment: 'NOT ALIGNED',
            why: T('The largest single failure available in this case. A minimising client hands you her own dismissal repeatedly; the one thing you must never do is sign it. She does not need protecting from spending money — she needs protecting from a professional who agrees she does not matter.', 'El mayor fallo individual disponible en este caso. Una clienta que minimiza te entrega su propia desestimación una y otra vez; lo único que jamás debes hacer es firmarla. No necesita que la protejan de gastar dinero — necesita que la protejan de una profesional que le da la razón en que no importa.'),
            consequence: T('"No, you\'re right. Sorry for wasting your time." She is out of the door in ninety seconds, thanking you twice. MATERIAL: willingness -28, posture withdrawn — the derived outcome moves to NO, and she will not book anywhere else either.', '«No, tiene razón. Perdone por hacerle perder el tiempo.» Sale por la puerta en noventa segundos, dándote las gracias dos veces. MATERIAL: disposición -28, postura retirada — el resultado derivado se desplaza al NO, y tampoco pedirá cita en ningún otro sitio.'),
            nextPriority: T('When a client asks you to agree that she does not matter, that request is the clinical finding. Never grant it.', 'Cuando una clienta te pide que le des la razón en que ella no importa, esa petición es el hallazgo clínico. No se la concedas nunca.')
          }
        },
        {
          id: 'dec-space',
          label: T('Hold the recommendation and give her the decision back', 'Sostener la recomendación y devolverle la decisión'),
          language: T('I\'m not going to talk you into anything and I\'m not taking a deposit today. What I will do is not change my mind: three sessions, 890 €, the physiotherapy referral first, and that stands whether you book this week or next March. Take it home. If the answer is no, that is a real answer and I would rather have it than a booking you regret.', 'No la voy a convencer de nada y hoy no le cobro señal. Lo que sí voy a hacer es no cambiar de opinión: tres sesiones, 890 €, primero la derivación a fisioterapia, y eso se mantiene tanto si reserva esta semana como si reserva en marzo. Lléveselo a casa. Si la respuesta es que no, es una respuesta de verdad y la prefiero a una reserva de la que se arrepienta.'),
          effects: { trust: { safety: 1, reliability: 1 }, willingness: 4 },
          mirror: {
            signalDetected: T('Hesitation at the decision point, from a client with a well-documented habit of talking herself out of things.', 'Vacilación en el momento de decidir, de una clienta con una costumbre bien documentada de quitarse las cosas de la cabeza.'),
            interpretation: T('Refusing a deposit and holding the recommendation unchanged is exactly the right posture: it removes pressure without removing your professional opinion, which is the combination this client has never been offered. It simply does not address what she actually said.', 'Negarse a cobrar señal y sostener la recomendación sin cambiarla es exactamente la postura correcta: quita presión sin retirar tu opinión profesional, que es la combinación que a esta clienta nunca le han ofrecido. Solo que no aborda lo que ella ha dicho en realidad.'),
            principle: J(std(5), L('; ', '; '), duty(2), L('; ', '; '), stage('reliability'), L('.', '.')),
            learnerDid: T('You protected her autonomy and left her objection undiagnosed.', 'Protegiste su autonomía y dejaste su objeción sin diagnosticar.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Space is necessary and not sufficient. Sending a woman home to decide, when the obstacle is a sentence somebody said to her at home, sends the decision to the place where it will lose.', 'El espacio es necesario y no suficiente. Mandar a casa a decidir a una mujer cuyo obstáculo es una frase que le dijeron en casa es mandar la decisión al sitio donde va a perder.'),
            consequence: T('"That\'s very fair." She means it. Safety and reliability rise; whatever she actually asked you — about the picture, about her husband, about January — goes home with her unanswered.', '«Eso es muy justo.» Lo dice de verdad. Suben seguridad y fiabilidad; lo que ella te haya preguntado en realidad — por la foto, por su marido, por enero — se va a casa con ella sin respuesta.'),
            nextPriority: T('Space is the posture. Now answer the actual objection before she leaves the room.', 'El espacio es la postura. Ahora responde a la objeción real antes de que salga de la sala.')
          }
        },
        {
          id: 'dec-thirdvoice',
          label: T('Answer what she actually asked, and name the third voice in the room', 'Responder a lo que ha preguntado de verdad, y nombrar a la tercera voz de la sala'),
          language: T('Direct answer: January is not daft, it is sensible, and the recommendation will be identical in January — nothing about it expires. Now the other thing, and then I will stop. You told me your husband said you were being ridiculous, and you have repeated some version of that sentence eleven times this afternoon. I do not think he was being unkind and I do not think you believe he was. But he did not know about August, did he — because you did not tell him. So the person deciding whether 890 € is reasonable is being asked to judge a purchase without the only fact that explains it. That is not a money problem and it is not a device problem. Whatever you decide, decide it with him knowing about the nine days. If you tell him that and you still both think it is not worth it, then it genuinely is not worth it, and I will say so in writing.', 'Respuesta directa: enero no es ninguna tontería, es sensato, y la recomendación será idéntica en enero — aquí no caduca nada. Y ahora lo otro, y luego me callo. Me contó que su marido le dijo que estaba siendo ridícula, y usted ha repetido alguna versión de esa frase once veces esta tarde. No creo que él fuera cruel y no creo que usted piense que lo fue. Pero él no sabía lo de agosto, ¿verdad? Porque usted no se lo contó. Así que a la persona que decide si 890 € es razonable se le está pidiendo que juzgue una compra sin el único dato que la explica. Eso no es un problema de dinero ni es un problema de aparatos. Decida lo que decida, decídalo con él sabiendo lo de los nueve días. Si se lo cuenta y aun así los dos piensan que no merece la pena, entonces de verdad no merece la pena, y se lo pondré por escrito.'),
          requiresRevealed: 'avoided_holiday',
          degradedLanguage: T('Is it the money, or is it that somebody at home will ask you to justify it?', '¿Es el dinero, o es que alguien en casa le va a pedir que lo justifique?'),
          effects: { trust: { safety: 1, understanding: 1, reliability: 1 }, willingness: 8, posture: 'decided', objectionIntensity: 1, reveals: ['partner_comment'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 2 },
          degradedNote: T('"Oh no, he\'s lovely, it\'s not that at all." Asked of a client who has told you nothing about August, the question about home sounds like an accusation against her husband — and she defends him instead of answering. A third-voice question needs disclosed material underneath it.', '«Ay, no, él es un encanto, no es eso en absoluto.» Hecha a una clienta que no te ha contado nada de agosto, la pregunta sobre casa suena a acusación contra su marido — y ella lo defiende en lugar de responder. Una pregunta sobre la tercera voz necesita material revelado debajo.'),
          mirror: {
            signalDetected: T('A scheduling question on the surface, over a sentence from home that has been repeated in eleven different disguises since the intake form.', 'Una pregunta de calendario en la superficie, sobre una frase de casa que se ha repetido con once disfraces distintos desde el formulario de admisión.'),
            interpretation: T('You answered the surface question in one sentence, which respects the fact that it was a real question — and then you named the person who is not in the room. Crucially you did not make him the villain; you identified the information gap, which is something she can actually fix tonight.', 'Respondiste a la pregunta de superficie en una frase, lo que respeta que era una pregunta de verdad — y después nombraste a la persona que no está en la sala. Y algo esencial: no lo convertiste en el malo; identificaste el vacío de información, que es algo que ella sí puede arreglar esta noche.'),
            principle: J(std(2), L('; ', '; '), std(5), L('; ', '; '), duty(2), L('; ', '; '), stage('understanding'), L('.', '.')),
            learnerDid: T('You separated the surface objection from the underlying concern, and gave her a task instead of a discount.', 'Separaste la objeción de superficie de la preocupación de fondo, y le diste una tarea en lugar de un descuento.'),
            alignment: 'ALIGNED',
            why: T('Toolkit #6 exists for exactly this: the surface objection and the underlying concern are rarely the same sentence. Here the surface is a calendar and the underlying is a woman seeking permission from someone she has never given the facts to.', 'El Toolkit #6 existe exactamente para esto: la objeción de superficie y la preocupación de fondo rara vez son la misma frase. Aquí la superficie es un calendario y el fondo es una mujer que busca permiso de alguien a quien nunca le ha dado los datos.'),
            consequence: T('She goes very still. "He doesn\'t know I didn\'t go because of that. He thinks I had work." (a long pause) "I\'ve been asking him to agree with something I never told him." The third hidden thing is finally in the room — and it is the one that decides whether the decision survives the drive home.', 'Se queda muy quieta. «Él no sabe que no fui por eso. Cree que tenía trabajo.» (una pausa larga) «Llevo tiempo pidiéndole que esté de acuerdo con algo que nunca le conté.» Lo tercero que estaba oculto está por fin en la sala — y es lo que decide si la decisión sobrevive al viaje de vuelta a casa.'),
            nextPriority: T('Whatever the Decision Engine derives now is legitimate. Protect it — and put the ceiling in writing so it survives the kitchen table.', 'Lo que el Motor de Decisión derive ahora es legítimo. Protégelo — y pon el techo por escrito para que sobreviva a la mesa de la cocina.')
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
        source: T('Continuation Engine', 'Motor de Continuidad'),
        quote: T('The consultation is over. With this client the follow-up has one job: to make sure the ceiling arrives home before the doubt does.', 'La consulta ha terminado. Con esta clienta el seguimiento tiene un solo trabajo: que el techo llegue a casa antes que la duda.'),
        subtext: T('Phase 8 is a canonical phase, not an epilogue. A minimising client will describe this appointment to her family in the smallest possible terms — so anything that is not in writing does not exist by Thursday, and the honest limitation is the first thing to disappear.', 'La Fase 8 es una fase canónica, no un epílogo. Una clienta que minimiza describirá esta cita a su familia en los términos más pequeños posibles — así que todo lo que no esté por escrito habrá dejado de existir el jueves, y la limitación honesta es lo primero que desaparece.')
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
    disclosed: T(
      '"Yes. The three sessions and the physiotherapist. And I\'m going to tell him about August tonight — which is honestly the bit I\'m more nervous about than the money."',
      '«Sí. Las tres sesiones y la fisioterapeuta. Y esta noche le voy a contar lo de agosto — que sinceramente me da más miedo que el dinero.»'
    ),
    undisclosed: T(
      '"All right, let\'s do it. I still feel a bit daft about the whole thing, but you\'ve been very patient with me."',
      '«Vale, lo hacemos. Sigo sintiéndome un poco tonta con todo esto, pero ha tenido usted mucha paciencia conmigo.»'
    )
  },
  DEFER: T(
    '"Let me think about it. I\'ll talk to my husband — and I promise I\'m not saying that to get out of the room, although I can hear that it sounds like it."',
    '«Déjeme pensarlo. Lo hablo con mi marido — y le prometo que no lo digo para salir de aquí, aunque me doy cuenta de que suena a eso.»'
  ),
  NO: T(
    '"No, I don\'t think so. You\'ve been lovely, honestly. I think I always knew it was a silly thing to come about — I just needed somebody to say it."',
    '«No, creo que no. Ha sido usted encantadora, de verdad. Creo que en el fondo siempre supe que era una tontería venir a esto — solo necesitaba que alguien me lo dijera.»'
  )
};

// ---------------------------------------------------------------------------
// Case facts for the toolkit validators (scenario-aware honesty checks)
// ---------------------------------------------------------------------------
const caseFacts = {
  clientName: 'Lucía',
  motivationItem: 'avoided_holiday',
  motiveRegex: /(holiday|beach|sea|swim|august|family|sister|photograph|photo|avoid|did ?n.t go|stayed (at )?home|nine days|hid|vacacion|playa|mar|ba[ñn]ar|nadar|agosto|famil|hermana|foto|evit|no fue|no ir|se qued[óo] en casa|nueve d[íi]as|escond)/i,
  motiveIssue: T(
    'Lucía disclosed a specific event — she invented a work commitment, missed nine days at the beach with her sister and the children, and watched the photographs arrive. The map records a body-image goal or "wants to feel better" instead of that event.',
    'Lucía reveló un suceso concreto — se inventó un compromiso de trabajo, se perdió nueve días de playa con su hermana y los niños, y vio llegar las fotos. El mapa registra un objetivo de imagen corporal o «quiere sentirse mejor» en lugar de ese suceso.'
  ),
  priorExperienceIssue: T(
    'Prior experience is blank. Lucía has no treatment history, but she has been measuring herself against a saved photograph since March — a post-surgical result with the scar cropped out — and she has a sentence from home ("you are being ridiculous") that she has repeated all afternoon. Those are the prior experiences that will govern Phase 7.',
    'La experiencia previa está en blanco. Lucía no tiene historial de tratamientos, pero lleva desde marzo midiéndose contra una fotografía guardada — un resultado posquirúrgico con la cicatriz recortada — y arrastra una frase de casa («estás siendo ridícula») que ha repetido toda la tarde. Esas son las experiencias previas que van a gobernar la Fase 7.'
  ),
  limitationIssue: T(
    'Field 6 states no limitation. With this degree of post-partum laxity a non-surgical device gives a modest tightening and a skin-quality change — roughly fifteen to twenty per cent of what she is picturing — and does not remove the fold, flatten the abdomen or address a diastasis. In this case an unnamed ceiling is not merely an overclaim under Ethical Duty 4; it is the mechanism by which the consultation fails.',
    'El campo 6 no indica ninguna limitación. Con este grado de flacidez posparto, un aparato no quirúrgico da una tensión moderada y un cambio en la calidad de la piel — en torno al quince o veinte por ciento de lo que ella se imagina — y no elimina el pliegue, no aplana el abdomen ni aborda una diástasis. En este caso un techo sin nombrar no es solo una sobrepromesa según el Deber Ético 4; es el mecanismo por el que fracasa la consulta.'
  ),
  whyNowIssue: T(
    'You ticked "I understand why it matters now", but Lucía has not disclosed her real why-now. "It has bothered me since the baby" is not a why-now — eighteen months is not a reason to come in today. Untick it, or return to Discovery and ask for one specific dated occasion.',
    'Marcaste «Entiendo por qué le importa ahora», pero Lucía no ha revelado su verdadero porqué. «Me molesta desde que nació el niño» no es un porqué ahora — dieciocho meses no son un motivo para venir hoy. Desmárcalo, o vuelve al Descubrimiento y pide una ocasión concreta con fecha.'
  ),
  undisclosedMotiveIssue: T(
    'MATERIAL: Lucía never disclosed a motive in this attempt — she minimised throughout and you did not decline the minimisation. Recording "low self-esteem after pregnancy" as a fact is not permitted: it is your inference about a woman who told you it was nothing. Write "Not disclosed" and note that the question you owe her is for one specific occasion with a date on it.',
    'MATERIAL: Lucía nunca reveló un motivo en este intento — minimizó todo el rato y tú no rechazaste la minimización. Registrar «baja autoestima tras el embarazo» como un hecho no está permitido: es tu inferencia sobre una mujer que te dijo que no era nada. Escribe «No revelado» y anota que la pregunta que le debes es una ocasión concreta con fecha.'
  )
};

// Toolkit #8 draft rows for this case (Continuation Engine).
const followUpPack = {
  motivationItem: 'avoided_holiday',
  yesRows: [
    'Send the written plan the same day with the CEILING in the first paragraph, above the price — fifteen to twenty per cent, the fold softened not removed, the photograph not achievable — so the honest limitation survives the kitchen table',
    'Confirm in writing what was deliberately NOT recommended and what it would have cost, so the declined 1.400 € is on the record rather than available as a later upsell to a client who cannot refuse one',
    'Send the physiotherapy referral separately with the name, the fee and the reason — a referral that is only spoken is a referral that never happens',
    'Pre-session note written so that stopping after session two is a stated, expected and blameless option, in the same words as the plan itself',
    'Review at the end of the course against her own sentence about sitting down and about next August — never against a before-and-after photograph, which is the comparison that made this hard in the first place'
  ],
  reviewNote: 'This client will describe the appointment at home in the smallest possible terms and will be asked to justify the money by someone who does not know about August. Everything that matters must therefore be in writing and in HER words, and the ceiling must appear before the price in every document. Never send a motivational or "you deserve it" message — she does not have a motivation problem, she has a permission problem, and encouragement reads to her as pressure. If she declines, close it in one warm message that states plainly that the concern was legitimate, and stop: a minimising client who is chased concludes she was right to feel silly.'
};

// ---------------------------------------------------------------------------
// ENGINE API (identical contract to Cases 01–04)
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
