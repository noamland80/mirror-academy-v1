/**
 * CASE 08 — PILAR / THE THIRD-PARTY OBJECTION — 8-PHASE CANONICAL SCENARIO (EN/ES)
 *
 * Materially different from Cases 01–03 and 07:
 *   - Entrance: DEFERENTIAL. Pilar is interested, articulate and entirely capable
 *     of deciding. She has simply brought an absent person's voice into the room
 *     and installed it above her own. Willingness opens at 48 and posture is
 *     'deferential'. Every sentence she says about the treatment is routed through
 *     a man who has not met you and will not be at the appointment.
 *   - The husband is NOT the objection. He is the socially acceptable wrapper on a
 *     private financial shame: fourteen months ago she spent 620 € on a course of
 *     eye treatments at a salon, it did nothing, and she never told him. The
 *     deferral protects the secret, not the marriage.
 *   - THE SPINE OF THIS CASE IS ETHICAL DUTY 2 — RESPECT AUTONOMY. Two traps sit
 *     on either side of it:
 *       (a) TREATING THE ABSENT MAN AS THE DECISION-MAKER. Booking a joint
 *           appointment, pricing "for the household", asking when he could come
 *           in — each one removes the autonomy of the adult who is actually in
 *           the chair, and each one is an Ethical Duty 2 failure even though it
 *           feels courteous.
 *       (b) ARMING HER WITH ARGUMENTS. Scripting her, rehearsing rebuttals,
 *           "here's what to say when he says it's a waste of money" — this makes
 *           you a party to a negotiation you are not in and cannot see, and it
 *           converts a clinical recommendation into ammunition.
 *     The case rewards the third path: separating HER view from the REPORTED
 *     view ("if the decision were only yours, what would you do?"), and building
 *     something she can SHOW him rather than something she must ARGUE for.
 *   - Turning point 1 at PHASE 3 (her own view, asked for directly)  → own_view.
 *   - Turning point 2 at PHASE 4 (the separation of the two views)   → previous_spend.
 *   - Turning point 3 at PHASE 7 (the money shame, met without judgement) → not_told_him.
 *   - Phase 7 branches into three materially different objections:
 *       HONEST_CONSULTATION — she wants to genuinely include him, from a settled
 *                             position, because she has decided and wants company.
 *       PROXY_ESCALATION    — you treated him as the buyer, so he becomes one, and
 *                             she now negotiates on his behalf against her own wish.
 *       MONEY_SHAME         — her own 620 € was never surfaced, so the number in
 *                             front of her is quietly the second number, not the first.
 *
 * Provenance: MBOK Ch.2 (Ethical Duty 2, Respect Autonomy — the client in the room
 * is the client); Ch.3 Trust Standards 1, 2, 4, 5; Ch.1 s1.16 phase objectives;
 * The Beauty Sales Secrets Ch.12 (permission and third-party objections) and Ch.14
 * (the price moment: the second number is the one nobody mentions). Canonical
 * architecture unchanged (phases, stages, standards, duties, toolkits).
 *
 * Register: professional Spain-Spanish, «usted» throughout — Pilar is a first-time
 * client in a clinical setting. Client-facing strings are {en, es}; the API
 * localizes at the boundary.
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
  name: 'Pilar Navarro',
  age: 41,
  presenting: T(
    'Under-eye hollowing (tear trough) — asking what can be done, and repeatedly saying she would have to run it past her husband. Indicative plan: 480 € for one session, 890 € for the two-session assessment-and-treat pathway',
    'Hundimiento del surco lagrimal (ojeras hundidas) — pregunta qué se puede hacer y repite una y otra vez que tendría que consultarlo con su marido. Plan orientativo: 480 € una sesión, 890 € la vía de valoración y tratamiento en dos sesiones'
  ),
  visibleGoal: T(
    '"I look exhausted in every photograph. But my husband thinks these things are a waste of money, so I\'d have to run it past him."',
    '«Salgo agotada en todas las fotos. Pero mi marido piensa que estas cosas son tirar el dinero, así que tendría que consultárselo.»'
  ),
  hiddenMotivation: T(
    'Fourteen months ago she paid 620 € for a six-session course of "eye rejuvenation" at a beauty salon near her work. It did nothing at all. She paid it from her own account and never told her husband — and she cannot afford, emotionally, to be wrong about this twice. The husband is the respectable name she has given to that fear.',
    'Hace catorce meses pagó 620 € por un curso de seis sesiones de «rejuvenecimiento de la mirada» en un centro de estética cerca de su trabajo. No hizo absolutamente nada. Lo pagó de su propia cuenta y jamás se lo contó a su marido — y no puede permitirse, emocionalmente, equivocarse dos veces en esto. El marido es el nombre respetable que le ha puesto a ese miedo.'
  ),
  emotionalConsequence: T(
    'That she is a woman who throws money away on her face and then hides it. Left unexamined, she leaves saying she will "talk to him", which is true, and never books — because what she actually has to do is confess, and she will not.',
    'Que es una mujer que tira el dinero en su cara y luego lo esconde. Si no se aborda, se marcha diciendo que «lo hablará con él», lo cual es cierto, y no reserva nunca — porque lo que en realidad tendría que hacer es confesar, y no lo va a hacer.'
  ),
  history: T(
    'No medical aesthetic treatments recorded. One undeclared salon course (six sessions, eye area, 620 €, no result) which she has not written on any form and will not volunteer. Married sixteen years; her husband Andrés has never met the clinic and will not attend.',
    'Sin tratamientos de medicina estética registrados. Un curso no declarado en un centro de estética (seis sesiones, zona de la mirada, 620 €, sin resultado) que no ha escrito en ningún formulario y que no va a mencionar por iniciativa propia. Dieciséis años casada; su marido, Andrés, no conoce la clínica y no va a venir.'
  ),
  entryRelationshipState: 'PROSPECTIVE'
};

const intake = {
  bookingNote: T(
    '"I\'d like to know what could be done about my under-eyes. I should say in advance that my husband thinks this sort of thing is a waste of money, so I won\'t be deciding anything today — I\'d have to run it past him first."',
    '«Me gustaría saber qué se podría hacer con mis ojeras. Le adelanto que mi marido piensa que estas cosas son tirar el dinero, así que hoy no voy a decidir nada — tendría que consultárselo antes.»'
  ),
  intakeForm: [
    T('Concern: hollowing and shadowing under both eyes — "I look exhausted in every photograph, and I\'m not"', 'Motivo: hundimiento y sombra bajo ambos ojos — «salgo agotada en todas las fotos, y no lo estoy»'),
    T('Requested: "information only, no decisions today"', 'Solicita: «solo información, hoy no decido nada»'),
    T('Free-text, three separate times: "my husband thinks…" / "he\'d say I look fine" / "I\'d have to run it past him"', 'Texto libre, en tres ocasiones distintas: «mi marido piensa que…» / «él diría que estoy bien así» / «tendría que consultárselo»'),
    T('Budget field: "whatever he agrees to" — written, crossed out, replaced with "not sure"', 'Campo de presupuesto: «lo que él acepte» — escrito, tachado y sustituido por «no lo sé»'),
    T('Previous aesthetic treatments: left completely blank, including the "other clinics or salons" line', 'Tratamientos estéticos previos: completamente en blanco, incluida la línea de «otras clínicas o centros»'),
    T('Occupation: dental hygienist — she works in a clinic and knows exactly what a consultation is supposed to look like', 'Profesión: higienista dental — trabaja en una clínica y sabe perfectamente cómo debe ser una consulta'),
    T('"Is anyone coming with you?": "No. He\'s working." (The question asked about a companion. She answered about him.)', '«¿Le acompaña alguien?»: «No. Él trabaja.» (La pregunta era por un acompañante. Ella respondió por él.)')
  ],
  buriedSignals: ['absent_authority', 'blank_treatment_history', 'crossed_out_budget']
};

// ---------------------------------------------------------------------------
function initialClientState() {
  return {
    trust: { safety: 0, attention: 0, understanding: 0, credibility: 0, alignment: 0, reliability: 0, confirmation: 0 },
    willingness: 48,
    posture: 'deferential',
    objectionIntensity: 1,
    revealed: [],
    withheld: ['previous_spend', 'not_told_him', 'own_view'],
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
          'Preparation Engine: there are two people in this file and only one of them has an appointment. A man who has never seen your clinic appears three times in the free text, once in the budget field and once in an answer to a question that was not about him. Meanwhile the line where her own treatment history should be is completely empty — and a forty-one-year-old woman who has thought about her eyes enough to book has usually already tried something.',
          'Motor de Preparación: en esta ficha hay dos personas y solo una tiene cita. Un hombre que no ha pisado su clínica aparece tres veces en el texto libre, una en el campo de presupuesto y otra en la respuesta a una pregunta que no iba sobre él. Mientras tanto, la línea donde debería estar su historial de tratamientos está completamente vacía — y una mujer de cuarenta y un años que ha pensado en sus ojeras lo suficiente como para pedir cita casi siempre ha probado ya algo.'
        )
      };
    },
    decision: {
      prompt: T('Five minutes before Pilar walks in. What do you do with this file?', 'Cinco minutos antes de que entre Pilar. ¿Qué haces con esta ficha?'),
      options: [
        {
          id: 'prep-proxy',
          label: T('Prepare for the real decision-maker — print the household finance options', 'Prepararse para quien decide de verdad — imprimir las opciones de financiación familiares'),
          language: T(
            'The husband is the gatekeeper, so I\'ll prepare for him: a printed price list she can take home, the monthly finance table, and a note offering a joint appointment so he can hear it directly from me.',
            'El marido es quien tiene la llave, así que me preparo para él: una lista de precios impresa que pueda llevarse a casa, la tabla de financiación mensual y una nota ofreciendo una cita conjunta para que lo oiga directamente de mí.'
          ),
          effects: { trust: { credibility: -1 }, willingness: 2, flags: { prepared: 'proxy', proxyLeaning: true } },
          mirror: {
            signalDetected: T('A third party named five times in a file, and a treatment-history line left blank.', 'Un tercero nombrado cinco veces en una ficha, y una línea de historial de tratamientos en blanco.'),
            interpretation: T(
              'You read "I\'d have to run it past him" as an org chart and prepared for the person at the top of it. The person with the appointment is now the messenger in her own consultation, and you arranged that before she arrived.',
              'Leíste «tendría que consultárselo» como un organigrama y te preparaste para quien está arriba. La persona que tiene la cita pasa a ser la mensajera de su propia consulta, y eso lo organizaste tú antes de que ella llegara.'
            ),
            principle: J(duty(2), L('; ', '; '), duty(3), L('; Phase 1 objective — readiness for the client who is actually attending.', '; objetivo de la Fase 1: preparación para la clienta que realmente acude.')),
            learnerDid: T('You prepared a consultation for a man who has no appointment.', 'Preparaste una consulta para un hombre que no tiene cita.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'Respecting autonomy starts before the door opens. The moment your preparation assumes someone else decides, every question you ask afterwards will be addressed to him through her.',
              'Respetar la autonomía empieza antes de que se abra la puerta. En cuanto tu preparación da por hecho que decide otra persona, todas las preguntas que hagas después se las harás a él a través de ella.'
            ),
            consequence: T(
              'Credibility opens below baseline, and the blank treatment-history line — the only genuinely useful thing in the file — stays unexamined for the rest of the consultation.',
              'La credibilidad arranca por debajo de la línea base, y la línea de historial en blanco — lo único verdaderamente útil de la ficha — se queda sin examinar durante el resto de la consulta.'
            ),
            nextPriority: T('Ask who is in the chair before you ask who pays.', 'Pregúntate quién está en la silla antes de preguntarte quién paga.')
          }
        },
        {
          id: 'prep-clinical',
          label: T('Prepare the clinical assessment for the tear trough', 'Preparar la valoración clínica del surco lagrimal'),
          language: T(
            'Tear-trough assessment: skin thickness, the orbital rim, fluid retention and the pinch test, because half of these are not volume problems at all. Contraindications, product choice and what I would decline to treat. Ready.',
            'Valoración del surco lagrimal: grosor de la piel, reborde orbitario, retención de líquidos y prueba de pellizco, porque la mitad de estos casos no son un problema de volumen. Contraindicaciones, elección de producto y qué me negaría a tratar. Lista.'
          ),
          effects: { trust: { credibility: 1 }, flags: { prepared: 'clinical' } },
          mirror: {
            signalDetected: T('You prepared the anatomy and left the file\'s only psychological signal untouched.', 'Preparaste la anatomía y dejaste intacta la única señal psicológica de la ficha.'),
            interpretation: T(
              'The tear trough is an area where competent practice genuinely means declining to treat a good proportion of the people who ask, so this preparation has real value. It simply has nothing to say about the absent man or the empty history line.',
              'El surco lagrimal es una zona en la que ejercer con competencia implica de verdad negarse a tratar a buena parte de quienes lo piden, así que esta preparación vale de verdad. Sencillamente, no dice nada sobre el hombre ausente ni sobre la línea de historial vacía.'
            ),
            principle: J(duty(3), L('; ', '; '), std(3), L('; Phase 1 objective.', '; objetivo de la Fase 1.')),
            learnerDid: T('You prepared what you would do and not who you would be doing it with.', 'Preparaste lo que ibas a hacer y no con quién ibas a hacerlo.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'Your assessment will hold. The moment she says "he thinks", you will be improvising — and that is the moment the consultation is decided.',
              'Tu valoración se sostendrá. En cuanto ella diga «él piensa que…», estarás improvisando — y ese es el momento en que se decide la consulta.'
            ),
            consequence: T(
              'Credibility opens slightly positive. The deferral arrives in Phase 2 as a surprise and you will meet it with courtesy instead of a plan.',
              'La credibilidad arranca ligeramente positiva. La delegación llega en la Fase 2 como una sorpresa y la recibirás con cortesía en lugar de con un plan.'
            ),
            nextPriority: T('Pair every clinical prep with: whose decision is this, and who thinks it is theirs?', 'Acompaña cada preparación clínica con: ¿de quién es esta decisión y quién cree que es suya?')
          }
        },
        {
          id: 'prep-autonomy',
          label: T('Read the absent voice, and the blank history line, as the case', 'Leer la voz ausente, y la línea de historial en blanco, como el caso'),
          language: T(
            'Three "he thinks", a budget written as "whatever he agrees to" and then crossed out, and a completely blank treatment history from a woman of forty-one who has clearly been looking at this for a long time. Working hypothesis: the husband is a real person with a real opinion, and he is also a place to stand. My job today is to find out what SHE thinks, and to find out what is missing from that history line. Nothing gets priced until I have both.',
            'Tres «él piensa», un presupuesto escrito como «lo que él acepte» y luego tachado, y un historial de tratamientos completamente en blanco en una mujer de cuarenta y un años que lleva claramente mucho tiempo dándole vueltas a esto. Hipótesis de trabajo: el marido es una persona real con una opinión real, y además es un sitio donde refugiarse. Mi trabajo hoy es averiguar qué piensa ELLA y qué falta en esa línea del historial. No se pone precio a nada hasta tener las dos cosas.'
          ),
          effects: { trust: { credibility: 1, attention: 1 }, willingness: 3, flags: { prepared: 'full', anticipatedDeferral: true } },
          mirror: {
            signalDetected: T('All three buried signals identified before contact: an absent authority, a blank treatment history, a budget she could not write in her own name.', 'Las tres señales ocultas identificadas antes del contacto: una autoridad ausente, un historial de tratamientos en blanco y un presupuesto que no pudo escribir en su propio nombre.'),
            interpretation: T(
              'A crossed-out budget is a person changing her mind about whose money it is. Combined with an empty history line, it suggests there is a number she has already spent and has not written down anywhere.',
              'Un presupuesto tachado es una persona cambiando de opinión sobre de quién es ese dinero. Unido a una línea de historial vacía, sugiere que hay una cifra que ya se ha gastado y que no ha escrito en ninguna parte.'
            ),
            principle: J(L('Phase 1 objective; ', 'Objetivo de la Fase 1; '), duty(2), L('; ', '; '), duty(3), L('.', '.')),
            learnerDid: T('You planned to locate the client\'s own position before anyone quotes a price, including you.', 'Planificaste localizar la posición propia de la clienta antes de que nadie diga un precio, tú incluida.'),
            alignment: 'ALIGNED',
            why: T(
              'Ethical Duty 2 is not a thing you remember at the close. It is a decision made in preparation about whose consultation this is.',
              'El Deber Ético 2 no es algo que se recuerda al cerrar. Es una decisión que se toma en la preparación sobre de quién es esta consulta.'
            ),
            consequence: T(
              'You walk in able to hear the difference between "he thinks" and "I think" — which is the only distinction that matters in this case.',
              'Entras capaz de distinguir «él piensa» de «yo pienso» — la única distinción que importa en este caso.'
            ),
            nextPriority: T('Do not invite him in. Make room for her instead.', 'No lo invites a entrar. Haz sitio para ella.')
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
        source: T('Pilar, sitting down with her coat still on', 'Pilar, sentándose sin quitarse el abrigo'),
        quote: T(
          '"Thank you for seeing me. I should be honest — I\'m only here for information. My husband thinks these things are a complete waste of money, and he\'d say I look perfectly fine. Which is lovely of him, obviously. But I do have to run it past him."',
          '«Gracias por recibirme. Le voy a ser sincera: vengo solo a informarme. Mi marido piensa que estas cosas son tirar el dinero, y diría que estoy perfectamente bien así. Lo cual es muy bonito por su parte, claro. Pero sí que tengo que consultárselo.»'
        ),
        subtext: cs.flags.anticipatedDeferral
          ? T(
              'The deferral you anticipated, delivered in the first fifteen seconds, and note what she did with it: she used his compliment to close down her own complaint. "He\'d say I look fine" is not information about him. It is her, disqualifying herself out loud.',
              'La delegación que anticipabas, entregada en los primeros quince segundos, y fíjate en lo que hizo con ella: usó el cumplido de él para clausurar su propia queja. «Él diría que estoy bien así» no es información sobre él. Es ella, descalificándose en voz alta.'
            )
          : T(
              'Pleasant, direct, and already half out of the room. She has told you who decides, and she told you before you asked.',
              'Agradable, directa y ya con medio cuerpo fuera de la sala. Te ha dicho quién decide, y te lo ha dicho antes de que preguntaras.'
            )
      };
    },
    decision: {
      prompt: T('Phase 2 objective: psychological safety — with a client who has just handed her decision to someone who is not here. Your opening move?', 'Objetivo de la Fase 2: seguridad psicológica — con una clienta que acaba de entregar su decisión a alguien que no está aquí. ¿Tu primer movimiento?'),
      options: [
        {
          id: 'conn-invite',
          label: T('Bring him into the room — offer a joint appointment', 'Traerlo a la sala — ofrecer una cita conjunta'),
          language: T(
            'Of course — and it\'s no problem at all. Would he like to come in with you? I\'m very happy to see you both together, or to speak to him on the phone. It\'s much easier when partners hear it from me directly rather than second-hand.',
            'Por supuesto — y no hay ningún problema. ¿Le gustaría venir con usted? Encantada de verlos a los dos juntos, o de hablar con él por teléfono. Es mucho más fácil cuando la pareja lo oye directamente de mí y no de segunda mano.'
          ),
          effects: { trust: { safety: -1, attention: -1 }, willingness: 4, flags: { husbandCentred: true } },
          mirror: {
            signalDetected: T('A woman disqualifying her own complaint with her husband\'s compliment, in her first fifteen seconds.', 'Una mujer descalificando su propia queja con el cumplido de su marido, en sus primeros quince segundos.'),
            interpretation: T(
              'You accepted the org chart she offered and made it official. She came to be seen; you have just told her that the appointment works better with him in it. Nothing about this is rude — that is precisely what makes it so easy to do.',
              'Aceptaste el organigrama que ella te ofrecía y lo hiciste oficial. Vino a que la vieran; acabas de decirle que la cita funciona mejor con él dentro. Nada de esto es descortés — y justo por eso resulta tan fácil hacerlo.'
            ),
            principle: J(duty(2), L(' — the adult in the chair is the client; ', ' — la adulta que está en la silla es la clienta; '), std(1), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You gave an absent person a seat, and took one away from the person present.', 'Le diste asiento a una persona ausente y se lo quitaste a la que estaba delante.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'Including a partner is legitimate when the client asks for it. Offering it first, unprompted, in answer to her hesitation, converts her hesitation into his jurisdiction.',
              'Incluir a la pareja es legítimo cuando la clienta lo pide. Ofrecerlo tú primero, sin que nadie lo pida, como respuesta a su duda, convierte su duda en jurisdicción de él.'
            ),
            consequence: T(
              'She says "oh, he\'d never come" and relaxes — willingness rises, because the hard part has been outsourced. Safety falls, because the one place she could have spoken for herself has just been rented out.',
              'Dice «uy, él no vendría nunca» y se relaja — la disposición sube, porque la parte difícil se ha externalizado. La seguridad baja, porque el único sitio donde podía haber hablado por sí misma acaba de alquilarse.'
            ),
            nextPriority: T('Never widen the room before you have found the client in it.', 'Nunca amplíes la sala antes de haber encontrado en ella a la clienta.')
          }
        },
        {
          id: 'conn-warm',
          label: T('Take the coat, slow the room, say nothing about him', 'Recoger el abrigo, bajar el ritmo, no decir nada sobre él'),
          language: T(
            'Let me take your coat — you\'re not on a schedule here. Nothing gets decided today by anybody, so you can put that down. Tell me what brought you in.',
            'Deme el abrigo — aquí no hay ninguna prisa. Hoy no decide nada nadie, así que puede soltar eso. Cuénteme qué la ha traído.'
          ),
          effects: { trust: { safety: 1 }, willingness: 2 },
          mirror: {
            signalDetected: T('A client seated with her coat on, framing the visit as a fact-finding errand for someone else.', 'Una clienta sentada con el abrigo puesto, presentando la visita como una gestión informativa para otra persona.'),
            interpretation: T(
              'Declining to engage with the husband at all is a defensible instinct and it lowers the temperature honestly. It leaves the structure intact, though: she still believes she is here on somebody\'s behalf, and you have not said otherwise.',
              'Negarse a entrar en el tema del marido es un instinto defendible y baja la temperatura con honestidad. Pero deja la estructura intacta: ella sigue creyendo que viene de parte de alguien, y tú no le has dicho lo contrario.'
            ),
            principle: J(std(1), L('; ', '; '), stage('safety'), L('; Phase 2 objective.', '; objetivo de la Fase 2.')),
            learnerDid: T('You created calm without redistributing authority.', 'Creaste calma sin redistribuir la autoridad.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'Safety for this client is not merely comfort. It is being told, explicitly, that her own view is admissible evidence in this room.',
              'Para esta clienta la seguridad no es solo comodidad. Es que le digan, explícitamente, que su propia opinión es una prueba admisible en esta sala.'
            ),
            consequence: T(
              'She takes the coat off and talks more easily — about what he thinks. Safety rises a little and the centre of gravity does not move.',
              'Se quita el abrigo y habla con más soltura — sobre lo que piensa él. La seguridad sube un poco y el centro de gravedad no se mueve.'
            ),
            nextPriority: T('Name whose consultation this is, out loud, before Discovery.', 'Di en voz alta de quién es esta consulta, antes del Descubrimiento.')
          }
        },
        {
          id: 'conn-her',
          label: T('Say whose consultation this is — out loud', 'Decir de quién es esta consulta — en voz alta'),
          language: T(
            'Let me set one thing straight before we start, because it will save us both time. Your husband is not in this room and that is completely fine — he doesn\'t need to be, and I\'m not going to try to reach him through you. This next half hour is yours. If at the end of it you want to go home and talk to him, that is a normal and sensible thing to do. But for the next thirty minutes I\'m only interested in one opinion, and it isn\'t his and it isn\'t mine.',
            'Déjeme aclarar una cosa antes de empezar, porque nos va a ahorrar tiempo a las dos. Su marido no está en esta sala y eso está perfectamente bien — no hace falta que esté, y no voy a intentar llegar hasta él a través de usted. Esta media hora es suya. Si al terminar quiere irse a casa y hablarlo con él, es algo normal y sensato. Pero durante los próximos treinta minutos solo me interesa una opinión, y no es la de él ni es la mía.'
          ),
          effects: { trust: { safety: 2, attention: 1 }, willingness: 2, posture: 'considering', flags: { autonomyFramed: true } },
          mirror: {
            signalDetected: T('"He\'d say I look fine" — her own concern, overruled by a quotation, before you had asked a single question.', '«Él diría que estoy bien así» — su propia preocupación, anulada por una cita textual, antes de que hubieras hecho una sola pregunta.'),
            interpretation: T(
              'You separated the two jobs without criticising him and without arguing with her. Consulting a partner about money later is a normal adult act; being unable to hold a view before consulting him is the thing you just made room for.',
              'Separaste las dos tareas sin criticarlo a él y sin discutir con ella. Consultar después con la pareja sobre el dinero es un acto adulto normal; no poder sostener una opinión antes de consultarlo es lo que acabas de hacer posible.'
            ),
            principle: J(duty(2), L('; ', '; '), std(1), L('; ', '; '), stage('safety'), L('; Phase 2 objective.', '; objetivo de la Fase 2.')),
            learnerDid: T('You gave her a half hour in which her own opinion is the only currency, and you did it without making her defend her marriage.', 'Le diste media hora en la que su propia opinión es la única moneda, y lo hiciste sin obligarla a defender su matrimonio.'),
            alignment: 'ALIGNED',
            why: T(
              'Respecting autonomy means addressing the person who has it. She is not a delegate; she is a forty-one-year-old woman with her own account, her own body and her own reasons.',
              'Respetar la autonomía significa dirigirse a quien la tiene. No es una delegada; es una mujer de cuarenta y un años con su propia cuenta, su propio cuerpo y sus propios motivos.'
            ),
            consequence: T(
              'A pause. "…All right. That\'s a strange relief, actually." Posture moves from deferential to considering — the first time today she has been in the singular.',
              'Una pausa. «…Vale. Es un alivio raro, la verdad.» La postura pasa de delegante a considerando — la primera vez hoy que está en singular.'
            ),
            nextPriority: T('Now ask the question that only a singular person can answer.', 'Ahora haz la pregunta que solo puede responder una persona en singular.')
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
      if (cs.flags.autonomyFramed) {
        return {
          source: 'Pilar',
          quote: T(
            '"All right. Well — it\'s the shadows. In photographs I look like I haven\'t slept in a year and it\'s been like this since I was about thirty-eight. I do notice it. He doesn\'t, or he says he doesn\'t. Is that the sort of thing you meant?"',
            '«Vale. Pues — son las sombras. En las fotos parece que llevo un año sin dormir, y está así desde que tenía unos treinta y ocho. Yo sí lo noto. Él no, o dice que no. ¿Se refería a algo así?»'
          ),
          subtext: T(
            'She answered in the first person and then checked whether that was allowed. "I do notice it. He doesn\'t" is the whole case in seven words — two observers, one of whom is not here, and she has been ranking them.',
            'Respondió en primera persona y después comprobó si estaba permitido. «Yo sí lo noto. Él no» es el caso entero en siete palabras — dos observadores, uno de los cuales no está presente, y ella lleva tiempo ordenándolos por rango.'
          ),
          disclosureLevel: 'opening'
        };
      }
      return {
        source: 'Pilar',
        quote: T(
          '"Well, it\'s the under-eye area. He says it\'s nonsense and that everyone has shadows at forty-one, and honestly he might be right. What would you even do to it? I just want to be able to tell him what it would involve."',
          '«Pues es la zona de debajo de los ojos. Él dice que es una tontería y que todo el mundo tiene sombras a los cuarenta y uno, y la verdad es que puede que tenga razón. ¿Y qué se hace con eso? Solo quiero poder contarle en qué consistiría.»'
        ),
        subtext: T(
          'Every clause is routed through him, including the assessment of her own face. She is asking you for a specification to relay, not for an opinion to hold.',
          'Cada frase pasa por él, incluida la valoración de su propia cara. Te está pidiendo una ficha técnica para transmitir, no una opinión para sostener.'
        ),
        disclosureLevel: 'minimal'
      };
    },
    decision: {
      prompt: T('Phase 3 objective: surface request vs real need. She is asking you for something to take home. What do you do?', 'Objetivo de la Fase 3: petición superficial frente a necesidad real. Te está pidiendo algo para llevarse a casa. ¿Qué haces?'),
      options: [
        {
          id: 'disc-arm',
          label: T('Give her the arguments — help her win the conversation at home', 'Darle los argumentos — ayudarla a ganar la conversación en casa'),
          language: T(
            'Then let me arm you properly. When he says it\'s a waste of money, tell him it lasts twelve to eighteen months, so it works out at about forty euros a month — less than his football subscription, I imagine. And if he says you look fine, show him the photographs. That usually settles it.',
            'Pues déjeme armarla bien. Cuando le diga que es tirar el dinero, dígale que dura entre doce y dieciocho meses, o sea unos cuarenta euros al mes — menos que su suscripción de fútbol, imagino. Y si le dice que está bien así, enséñele las fotos. Eso suele zanjarlo.'
          ),
          effects: { trust: { understanding: -1, alignment: -1 }, willingness: 6, flags: { armedHer: true } },
          mirror: {
            signalDetected: T('A request for a specification to relay, treated as a request for ammunition.', 'Una petición de ficha técnica para transmitir, tratada como una petición de munición.'),
            interpretation: T(
              'You have joined a negotiation you cannot see, on the side of the person who is paying you, against a man you have never met — using a joke about his spending as leverage. Whatever happens at that kitchen table now happens partly in your voice, and you will not be there to correct it.',
              'Te has metido en una negociación que no ves, del lado de la persona que te paga, contra un hombre al que no conoces — y usando una broma sobre sus gastos como palanca. Lo que pase en esa mesa de la cocina pasará ahora en parte con tu voz, y tú no estarás allí para corregirla.'
            ),
            principle: J(duty(2), L('; ', '; '), std(2), L(' — Discovery is for understanding her, not for equipping her; Phase 3 objective.', ' — el Descubrimiento sirve para entenderla a ella, no para pertrecharla; objetivo de la Fase 3.')),
            learnerDid: T('You skipped Discovery entirely and wrote a script for an argument in someone else\'s home.', 'Te saltaste el Descubrimiento por completo y escribiste un guion para una discusión en casa ajena.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'A client who needs a script does not have a decision — she has a case to prosecute. If she wins it with your words, she has still never said what she wants, and the first time anything goes wrong it will be your argument that failed her, in front of him.',
              'Una clienta que necesita un guion no tiene una decisión — tiene un caso que defender. Si lo gana con tus palabras, sigue sin haber dicho nunca qué quiere, y a la primera que algo salga mal será tu argumento el que le falló, delante de él.'
            ),
            consequence: T(
              'Willingness jumps — she is delighted, because you have made the hard part sound winnable. Understanding and alignment both fall, and the 620 € she has never mentioned stays exactly where it is.',
              'La disposición se dispara — está encantada, porque has hecho que la parte difícil suene ganable. Comprensión y alineación caen, y los 620 € que nunca ha mencionado se quedan exactamente donde están.'
            ),
            nextPriority: T('If you are writing someone\'s lines, you have stopped consulting.', 'Si estás escribiéndole los diálogos a alguien, has dejado de asesorar.')
          }
        },
        {
          id: 'disc-surface',
          label: T('Assess the area properly and describe what is actually going on', 'Valorar bien la zona y describir lo que realmente ocurre'),
          language: T(
            'Before anything else, let me look. Chin up for me — thank you. Some of this is a genuine hollow at the rim, and some of it is skin quality and the way the light falls. Tell me: is it worse in the mornings, or at the end of the day?',
            'Antes de nada, déjeme mirar. Levante la barbilla — gracias. Una parte de esto es un hueco real en el reborde, y otra parte es calidad de piel y cómo cae la luz. Dígame: ¿está peor por las mañanas o al final del día?'
          ),
          effects: { trust: { attention: 1 }, willingness: 3 },
          mirror: {
            signalDetected: T('A vague area of complaint, described in his words rather than hers.', 'Una zona de queja imprecisa, descrita con las palabras de él y no con las de ella.'),
            interpretation: T(
              'Examining properly and asking a discriminating clinical question is real Discovery and it earns attention honestly. It is Discovery of the tissue, though, not of the person — and this case is not being decided by the tissue.',
              'Explorar bien y hacer una pregunta clínica que discrimina es Descubrimiento real y gana atención con honestidad. Pero es el Descubrimiento del tejido, no el de la persona — y este caso no lo decide el tejido.'
            ),
            principle: J(std(2), L('; ', '; '), stage('attention'), L('; Phase 3 objective.', '; objetivo de la Fase 3.')),
            learnerDid: T('You investigated the complaint and not the person making it on someone else\'s behalf.', 'Investigaste la queja y no a la persona que la formula en nombre de otro.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'You will finish this phase knowing her anatomy and not knowing whether she wants anything. One of those can be assessed later; the other cannot.',
              'Vas a terminar esta fase conociendo su anatomía y sin saber si ella quiere algo. Una de las dos cosas puede valorarse más tarde; la otra no.'
            ),
            consequence: T(
              '"Worse in the mornings, definitely." Useful, accurate, and entirely in the third person about everything that matters. Attention rises; nothing is disclosed.',
              '«Por las mañanas, sin duda.» Útil, exacto y completamente en tercera persona sobre todo lo que importa. La atención sube; no se revela nada.'
            ),
            nextPriority: T('Ask her what she would decide if the decision were only hers.', 'Pregúntale qué decidiría si la decisión fuera solo suya.')
          }
        },
        {
          id: 'disc-herview',
          label: T('Ask the only question she has not been asked: what would YOU do?', 'Hacer la única pregunta que nadie le ha hecho: ¿qué haría USTED?'),
          language: T(
            'I want to ask you something and I\'d like you to answer it as though nobody else existed. Forget the money for a moment, forget what he thinks, forget what I think. If this decision were only yours — if it were entirely and only yours — what would you do?',
            'Quiero preguntarle una cosa y me gustaría que la respondiera como si no existiera nadie más. Olvide el dinero un momento, olvide lo que piensa él, olvide lo que pienso yo. Si esta decisión fuera solo suya — completa y únicamente suya —, ¿qué haría?'
          ),
          effects: { trust: { safety: 1, attention: 2, understanding: 1 }, willingness: 3, posture: 'reflective', reveals: ['own_view'] },
          mirror: {
            signalDetected: T('Every sentence so far routed through an absent third party, including her description of her own face.', 'Todas las frases hasta ahora pasadas por un tercero ausente, incluida la descripción de su propia cara.'),
            interpretation: T(
              'The counterfactual is the instrument. It does not ask her to contradict her husband, which she will not do — it asks her to describe a world in which the question is hers, which she can do, and which she has apparently never been invited to do.',
              'El supuesto contrafáctico es el instrumento. No le pide que contradiga a su marido, cosa que no va a hacer — le pide que describa un mundo en el que la pregunta es suya, cosa que sí puede hacer y que, por lo visto, nadie la había invitado a hacer nunca.'
            ),
            principle: J(duty(2), L('; ', '; '), std(2), L('; ', '; '), stage('attention'), L('; Phase 3 objective — situation and motivation.', '; objetivo de la Fase 3: situación y motivación.')),
            learnerDid: T('You asked for her own position without asking her to fight for it.', 'Pediste su posición propia sin pedirle que peleara por ella.'),
            alignment: 'ALIGNED',
            why: T(
              'Nothing recommended later can be aligned to a client who has not yet appeared. This question is how she appears.',
              'Nada de lo que se recomiende después puede alinearse con una clienta que todavía no ha aparecido. Esta pregunta es la forma en que aparece.'
            ),
            consequence: T(
              'She looks at the window for a while. "If it were only mine? I\'d have done it last year." Then, quickly: "But it isn\'t only mine." Her own view is in the room for the first time — with a retraction stapled to it.',
              'Se queda un rato mirando la ventana. «¿Si fuera solo mía? Lo habría hecho el año pasado.» Y enseguida: «Pero no es solo mía.» Su propia opinión está en la sala por primera vez — con una retractación grapada detrás.'
            ),
            nextPriority: T('"I\'d have done it last year." Find out what happened last year.', '«Lo habría hecho el año pasado.» Averigua qué pasó el año pasado.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a1 = artifacts['1'];
      if (!a1 || !a1.valid) {
        return { canAdvance: false, reason: T('Toolkit #1 (Client Intake & Discovery Canvas) must be completed before Phase 4. The Discovery Depth Check is the canonical advance criterion — and with this client, "I know their decision criteria" cannot honestly be ticked while the only criteria on record belong to somebody who is not here.', 'El Toolkit #1 (Lienzo de Admisión y Descubrimiento) debe completarse antes de la Fase 4. La Comprobación de Profundidad es el criterio canónico de avance — y con esta clienta no se puede marcar honestamente «Conozco sus criterios de decisión» mientras los únicos criterios registrados sean los de alguien que no está aquí.') };
      }
      return { canAdvance: true };
    }
  },

  // ======================= PHASE 4 — UNDERSTANDING ========================
  understanding: {
    key: 'understanding', toolkit: 3,
    signal(cs) {
      if (cs.revealed.includes('own_view')) {
        return {
          source: 'Pilar',
          quote: T(
            '"Sorry — I shouldn\'t have said that. \'I\'d have done it last year\' makes me sound like I go behind his back, and I don\'t. It\'s just… we talk about big purchases. That\'s the arrangement. It\'s a good arrangement."',
            '«Perdone — no debería haber dicho eso. \'Lo habría hecho el año pasado\' hace que parezca que voy por detrás de él, y no es así. Es solo que… hablamos las compras grandes. Es el acuerdo que tenemos. Y es un buen acuerdo.»'
          ),
          subtext: T(
            'Nobody accused her of anything. She defended herself against going behind his back approximately four seconds after saying she would have done it last year. Phase 4 exists to hold both of those sentences up at the same time.',
            'Nadie la ha acusado de nada. Se ha defendido de ir por detrás de él unos cuatro segundos después de decir que lo habría hecho el año pasado. La Fase 4 existe para sostener esas dos frases a la vez.'
          )
        };
      }
      return {
        source: 'Pilar',
        quote: T(
          '"So if I\'ve got this right, it\'s one syringe, it lasts about a year, and it\'s around five hundred euros. That\'s the bit he\'ll focus on. Can you write that down for me?"',
          '«Entonces, si lo he entendido bien, es una jeringa, dura más o menos un año y son unos quinientos euros. En eso es en lo que se va a fijar él. ¿Me lo puede apuntar?»'
        ),
        subtext: T(
          'She is taking minutes. There is nothing to consolidate here because she has not said anything about herself — and a recommendation built on minutes is a recommendation for whoever reads them.',
          'Está levantando acta. Aquí no hay nada que consolidar porque no ha dicho nada sobre sí misma — y una recomendación construida sobre un acta es una recomendación para quien la lea.'
        )
      };
    },
    decision: {
      prompt: T('Phase 4 objective: prove understanding before any solution. What do you reflect?', 'Objetivo de la Fase 4: demostrar comprensión antes de cualquier solución. ¿Qué reflejas?'),
      options: [
        {
          id: 'und-echo',
          label: T('Agree that it is a joint decision and move on', 'Darle la razón en que es una decisión conjunta y seguir'),
          language: T(
            'Of course, and that\'s very healthy — a decision like this really should be made as a couple. Plenty of my clients come back with their husbands. So let\'s get you the information you need for that conversation.',
            'Claro, y eso es muy sano — una decisión así debería tomarse en pareja. Muchas de mis clientas vuelven con su marido. Así que vamos a conseguirle la información que necesita para esa conversación.'
          ),
          effects: { trust: { understanding: -1, alignment: -1 }, willingness: 4 },
          mirror: {
            signalDetected: T('A spontaneous denial of going behind his back, offered to a question nobody asked.', 'Una negación espontánea de ir por detrás de él, ofrecida ante una pregunta que nadie había hecho.'),
            interpretation: T(
              'You endorsed the frame instead of reflecting the contradiction. "It really should be made as a couple" is you, a professional she has just met, ruling on the governance of her marriage — and ruling against the sentence she risked saying out loud.',
              'Respaldaste el marco en lugar de reflejar la contradicción. «Debería tomarse en pareja» eres tú, una profesional a la que acaba de conocer, dictaminando sobre el gobierno de su matrimonio — y dictaminando en contra de la frase que se arriesgó a decir en voz alta.'
            ),
            principle: J(std(2), L(' — reflection returns what she said, not what you approve of; ', ' — el reflejo devuelve lo que ella dijo, no lo que tú apruebas; '), duty(2), L('; ', '; '), stage('understanding'), L('.', '.')),
            learnerDid: T('You took a side in a marriage you know nothing about, and it was not hers.', 'Tomaste partido en un matrimonio del que no sabes nada, y no fue por ella.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'She did not ask for a verdict on how couples should decide. She apologised for having a preference, and you confirmed that the apology was warranted.',
              'No pidió un veredicto sobre cómo deben decidir las parejas. Se disculpó por tener una preferencia, y tú confirmaste que la disculpa estaba justificada.'
            ),
            consequence: T(
              'She is visibly relieved, which reads as progress and is not. Understanding and alignment both fall, and everything she was about to say about last year is now firmly put away.',
              'Se la ve claramente aliviada, lo que parece un avance y no lo es. Comprensión y alineación caen, y todo lo que estaba a punto de contar sobre el año pasado queda bien guardado.'
            ),
            nextPriority: T('Reflect the contradiction, gently. Do not resolve it for her.', 'Refleja la contradicción, con suavidad. No se la resuelvas tú.')
          }
        },
        {
          id: 'und-reflect',
          label: T('Reflect the two sentences back and ask about last year', 'Reflejar las dos frases y preguntar por el año pasado'),
          language: T(
            'You said two things in about ten seconds: that you would have done it last year, and that you don\'t go behind his back. I don\'t think those are in conflict — but I would like to know what happened last year.',
            'Ha dicho dos cosas en unos diez segundos: que lo habría hecho el año pasado y que no va por detrás de él. No creo que se contradigan — pero me gustaría saber qué pasó el año pasado.'
          ),
          requiresRevealed: 'own_view',
          degradedLanguage: T('Has this been on your mind for a while, or is it a recent thing?', '¿Esto lleva tiempo rondándole o es algo reciente?'),
          effects: { trust: { attention: 1, understanding: 1 }, willingness: 3, reveals: ['previous_spend'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 1 },
          degradedNote: T(
            'She says "oh, a while, I suppose" and asks you again to write the price down. A reflective question needs something of hers to reflect, and she has not given you anything yet.',
            'Dice «uy, un tiempo, supongo» y vuelve a pedirte que le apuntes el precio. Una pregunta reflexiva necesita algo suyo que reflejar, y todavía no te ha dado nada.'
          ),
          mirror: {
            signalDetected: T('Two incompatible sentences, delivered back to back, the second one retracting the first.', 'Dos frases incompatibles, dichas una detrás de otra, la segunda retirando la primera.'),
            interpretation: T(
              'Naming both without choosing between them is genuine reflection and it opens the year she skipped over. It stops one step short, though: it asks about an event rather than about the two views she is holding.',
              'Nombrar ambas sin elegir entre ellas es reflejo auténtico y abre el año que se saltó. Pero se queda a un paso: pregunta por un hecho y no por las dos opiniones que ella sostiene a la vez.'
            ),
            principle: J(std(2), L('; ', '; '), stage('understanding'), L('; Phase 4 objective — consolidate findings, verify priorities.', '; objetivo de la Fase 4: consolidar hallazgos y verificar prioridades.')),
            learnerDid: T('You held her contradiction up without correcting it, and asked for the missing year.', 'Sostuviste su contradicción sin corregirla y preguntaste por el año que falta.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'You get the fact. You do not get the separation of her view from the reported view, which is what the recommendation will have to stand on.',
              'Consigues el dato. No consigues separar su opinión de la opinión referida, que es donde tendrá que apoyarse la recomendación.'
            ),
            consequence: T(
              '"Last year I did try something. At a salon near work — six sessions, for the eyes. Six hundred and twenty euros." A pause. "It didn\'t do anything." The 620 € is on the table. What it means is not.',
              '«El año pasado sí probé algo. En un centro cerca del trabajo — seis sesiones, para la mirada. Seiscientos veinte euros.» Una pausa. «No hizo nada.» Los 620 € están sobre la mesa. Lo que significan, no.'
            ),
            nextPriority: T('She spent 620 € on this once. Ask what that money means before you ask for more of it.', 'Ya se gastó 620 € en esto una vez. Pregunta qué significa ese dinero antes de pedir más.')
          }
        },
        {
          id: 'und-separate',
          label: T('Separate her own view from the reported view — explicitly', 'Separar su opinión propia de la opinión referida — explícitamente'),
          language: T(
            'Can I show you something you just did? You told me what you would do, and then you told me what he would say, and you put them on the same shelf — as if they were two versions of the same fact. They aren\'t. One of them is your opinion, and the other is your report of somebody else\'s. I only work with the first one. So: last year, when it was yours, what did you do about it?',
            '¿Le enseño una cosa que acaba de hacer? Me ha dicho lo que haría usted y después lo que diría él, y los ha puesto en el mismo estante — como si fueran dos versiones del mismo hecho. No lo son. Uno es su opinión y el otro es el parte que usted da de la de otra persona. Yo solo trabajo con el primero. Así que: el año pasado, cuando era suya, ¿qué hizo?'
          ),
          requiresRevealed: 'own_view',
          degradedLanguage: T('I notice you tell me what he thinks more often than what you think. Is that fair?', 'Me doy cuenta de que me cuenta más lo que piensa él que lo que piensa usted. ¿Es justo decirlo?'),
          effects: { trust: { understanding: 2, alignment: 1, safety: 1 }, willingness: 5, posture: 'open', reveals: ['previous_spend'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 1 },
          degradedNote: T(
            '"I suppose so. He\'s just more sensible about money than I am." The observation is accurate and lands on nothing, because she has never told you a view of her own for you to contrast it with.',
            '«Supongo que sí. Es que él es más sensato con el dinero que yo.» La observación es exacta y no aterriza en nada, porque ella nunca te ha dicho una opinión propia con la que contrastarla.'
          ),
          mirror: {
            signalDetected: T('Her own preference and a quotation from an absent man, filed under the same heading and given equal weight.', 'Su propia preferencia y una cita de un hombre ausente, archivadas bajo el mismo epígrafe y con el mismo peso.'),
            interpretation: T(
              'This is the central move of the case. You are not telling her to overrule him — you are pointing out that she has been treating hearsay as evidence about her own body, and you are declining to do the same. That is Ethical Duty 2 performed rather than recited.',
              'Este es el movimiento central del caso. No le dices que lo ignore a él — le señalas que lleva tiempo tratando un testimonio de oídas como prueba sobre su propio cuerpo, y tú te niegas a hacer lo mismo. Eso es el Deber Ético 2 ejecutado, no recitado.'
            ),
            principle: J(duty(2), L('; ', '; '), std(2), L('; ', '; '), stage('understanding'), L('; Phase 4 objective.', '; objetivo de la Fase 4.')),
            learnerDid: T('You refused to accept a second-hand opinion as a clinical input, and you said why.', 'Te negaste a aceptar una opinión de segunda mano como dato clínico, y dijiste por qué.'),
            alignment: 'ALIGNED',
            why: T(
              'Until her view and his report are two different objects, every recommendation you make is aimed at a composite person who does not exist and cannot consent.',
              'Hasta que su opinión y el parte sobre él sean dos objetos distintos, cada recomendación que hagas irá dirigida a una persona compuesta que no existe y que no puede consentir.'
            ),
            consequence: T(
              'Silence. Then: "Last year I spent six hundred and twenty euros at a salon by the office. Six sessions, for the eyes. It did absolutely nothing." She is looking at her hands. "So when he says it\'s a waste of money — he\'s already right once, isn\'t he. He just doesn\'t know it."',
              'Silencio. Después: «El año pasado me gasté seiscientos veinte euros en un centro al lado de la oficina. Seis sesiones, para la mirada. No hizo absolutamente nada.» Se mira las manos. «Así que cuando dice que es tirar el dinero — ya tiene razón una vez, ¿verdad? Lo que pasa es que no lo sabe.»'
            ),
            nextPriority: T('This is the real objection. Do not treat it as a price objection, and do not reassure it away.', 'Esta es la objeción real. No la trates como una objeción de precio, y no la despaches tranquilizándola.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a3 = artifacts['3'];
      if (!a3 || !a3.valid) {
        return { canAdvance: false, reason: T('Toolkit #3 (Emotional Drivers Map) must be completed before Phase 5. Field 5 (influencing people) is not a licence to record the husband as the driver — the map records what moves HER.', 'El Toolkit #3 (Mapa de Motores Emocionales) debe completarse antes de la Fase 5. El campo 5 (personas que influyen) no es una licencia para registrar al marido como el motor — el mapa registra lo que la mueve a ELLA.') };
      }
      return { canAdvance: true };
    }
  },

  // ========================= PHASE 5 — EDUCATION ==========================
  education: {
    key: 'education', toolkit: null,
    signal(cs) {
      return {
        source: 'Pilar',
        quote: cs.revealed.includes('previous_spend')
          ? T(
              '"So how do I know this isn\'t the same thing again with a better waiting room? That\'s a genuine question. I\'m not trying to catch you out."',
              '«¿Y cómo sé que esto no es lo mismo otra vez pero con mejor sala de espera? Es una pregunta de verdad. No intento pillarla.»'
            )
          : T(
              '"Could you explain it in a way I can repeat? He\'ll ask me how it works and I\'ll get it wrong and then he\'ll say that proves I don\'t know what I\'m buying."',
              '«¿Me lo puede explicar de forma que yo lo pueda repetir? Me va a preguntar cómo funciona, lo voy a decir mal y entonces dirá que eso demuestra que no sé lo que estoy comprando.»'
            ),
        subtext: cs.revealed.includes('previous_spend')
          ? T(
              'The best question in the case, and it has nothing to do with him. She is asking you to distinguish yourself from something that already took her money — which you can only do by being specific about what this does and does not do.',
              'La mejor pregunta del caso, y no tiene nada que ver con él. Te está pidiendo que te distingas de algo que ya se llevó su dinero — y eso solo se consigue siendo concreta sobre lo que esto hace y lo que no.'
            )
          : T(
              'She is asking to be taught a script for an exam she expects to fail. Teach her the mechanism and you educate a client; teach her the pitch and you brief a spokesperson.',
              'Está pidiendo que le enseñes el guion de un examen que espera suspender. Si le enseñas el mecanismo, educas a una clienta; si le enseñas el argumentario, instruyes a una portavoz.'
            )
      };
    },
    decision: {
      prompt: T('Phase 5 objective: knowledge for an informed decision — hers. What do you explain, and to whom?', 'Objetivo de la Fase 5: conocimiento para una decisión informada — la suya. ¿Qué explicas y a quién?'),
      options: [
        {
          id: 'edu-pitch',
          label: T('Teach her the pitch so she can deliver it convincingly', 'Enseñarle el argumentario para que lo suelte con convicción'),
          language: T(
            'Right — here\'s the short version to give him. It\'s hyaluronic acid, it\'s completely reversible, it\'s the most-performed procedure in the world, and it costs less per month than a gym membership nobody uses. Say it exactly like that and he won\'t have much to come back with.',
            'Vale — le doy la versión corta para él. Es ácido hialurónico, es completamente reversible, es el procedimiento más realizado del mundo y cuesta menos al mes que un gimnasio que nadie pisa. Dígaselo tal cual y no le va a quedar mucho que replicar.'
          ),
          effects: { trust: { credibility: -1, alignment: -1 }, willingness: 5, flags: { scriptedHer: true } },
          mirror: {
            signalDetected: T('A request to be taught, answered with a request to be quoted.', 'Una petición de que la enseñen, respondida con una petición de que la citen.'),
            interpretation: T(
              '"He won\'t have much to come back with" is the tell. You did not educate her — you equipped her, and you optimised the words for winning rather than for being true. "Completely reversible" is also doing work here that the clinical reality will not support.',
              '«No le va a quedar mucho que replicar» es la pista. No la educaste — la pertrechaste, y optimizaste las palabras para ganar en vez de para ser ciertas. Además, «completamente reversible» está haciendo aquí un trabajo que la realidad clínica no va a sostener.'
            ),
            principle: J(std(3), L('; ', '; '), duty(4), L('; ', '; '), duty(2), L('; Phase 5 objective — knowledge for an informed decision.', '; objetivo de la Fase 5: conocimiento para una decisión informada.')),
            learnerDid: T('You wrote her half of an argument and called it education.', 'Le escribiste la mitad de una discusión y lo llamaste educación.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'Education is what lets a client evaluate a decision. A script is what lets her defend one she has not evaluated — and the moment he asks a question the script does not cover, she has nothing.',
              'La educación es lo que permite a una clienta evaluar una decisión. Un guion es lo que le permite defender una que no ha evaluado — y en cuanto él pregunte algo que el guion no cubre, se queda sin nada.'
            ),
            consequence: T(
              'She writes it down word for word, which feels like engagement. Credibility falls, because a woman who has already paid 620 € for a confident explanation knows exactly what one sounds like.',
              'Lo apunta palabra por palabra, lo que parece implicación. La credibilidad cae, porque una mujer que ya pagó 620 € por una explicación segura de sí misma sabe perfectamente cómo suena una.'
            ),
            nextPriority: T('Explain the mechanism and its ceiling. If it survives being repeated badly, it was true.', 'Explica el mecanismo y su techo. Si sobrevive a que lo repitan mal, es que era verdad.')
          }
        },
        {
          id: 'edu-mechanism',
          label: T('Explain the mechanism honestly, including what it will not fix', 'Explicar el mecanismo con honestidad, incluido lo que no va a arreglar'),
          language: T(
            'Here is what actually happens. There is a real hollow at the bony rim, and filler placed deep against that bone gives the light somewhere else to fall. What it does not touch is the pigment in the skin itself, or the puffiness in the mornings, which is fluid and behaves differently. So a good result here looks like "less shadow", not "no shadow".',
            'Esto es lo que ocurre de verdad. Hay un hueco real en el reborde óseo, y un relleno colocado profundo contra ese hueso le da a la luz otro sitio donde caer. Lo que no toca es el pigmento de la piel ni la hinchazón de las mañanas, que es líquido y se comporta de otra manera. Así que un buen resultado aquí se parece a «menos sombra», no a «sin sombra».'
          ),
          effects: { trust: { credibility: 1, reliability: 1 }, willingness: 3 },
          mirror: {
            signalDetected: T('A client who wants to understand, whether or not she can repeat it correctly.', 'Una clienta que quiere entender, pueda o no repetirlo correctamente.'),
            interpretation: T(
              'Separating what the treatment addresses from what it does not is proper education and it builds credibility that survives a sceptical audience at home. What it does not yet do is take account of the fact that she has bought a promise in this exact area before.',
              'Separar lo que el tratamiento aborda de lo que no es educación en condiciones y construye una credibilidad que sobrevive a un público escéptico en casa. Lo que todavía no hace es tener en cuenta que ella ya compró una promesa en esta misma zona.'
            ),
            principle: J(std(3), L('; ', '; '), duty(4), L('; ', '; '), stage('credibility'), L('.', '.')),
            learnerDid: T('You taught the mechanism and its boundary, to her rather than through her.', 'Enseñaste el mecanismo y su límite, a ella y no a través de ella.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'Clinically this is exactly right. It is not yet addressed to the woman who has already been told, once, in confident language, that something would work.',
              'Clínicamente esto es exactamente correcto. Pero todavía no está dirigido a la mujer a la que ya le dijeron una vez, con lenguaje seguro, que algo iba a funcionar.'
            ),
            consequence: T(
              '"That\'s more honest than the last place." Credibility and reliability rise properly — and she still has nothing in her hands.',
              '«Es más honesto que en el sitio anterior.» La credibilidad y la fiabilidad suben de verdad — y ella sigue sin nada en las manos.'
            ),
            nextPriority: T('Put it in writing. What she can show is worth more than what she can say.', 'Ponlo por escrito. Lo que pueda enseñar vale más que lo que pueda decir.')
          }
        },
        {
          id: 'edu-showable',
          label: T('Build something she can show him, not something she has to argue', 'Construir algo que pueda enseñarle, no algo que tenga que defender'),
          language: T(
            'Then let me answer the salon question directly, because it is the right one. Three differences, and I\'ll write all three down so you are not carrying them in your head. One: what they sold you works on the skin surface, and your problem is a hollow under it — so it could not have worked, and somebody should have told you that before taking the money. Two: this is placed against bone, I can show you the change at two weeks, and if you hate it there is an enzyme that removes it. Three, the part that protects you: if when I examine you in better light this turns out to be mostly fluid and pigment, I will tell you so and I will not treat it. You are going to leave with one page, in writing, that says what I recommend, what I do not recommend, what it costs and what it cannot do. You should not have to argue for anything. You should just be able to hand it over.',
            'Entonces déjeme responder directamente a lo del centro de estética, porque es la pregunta correcta. Tres diferencias, y se las voy a apuntar las tres para que no tenga que llevarlas en la cabeza. Una: lo que le vendieron actúa en la superficie de la piel, y su problema es un hueco que está debajo — así que no podía funcionar, y alguien debería habérselo dicho antes de cobrarle. Dos: esto se coloca contra el hueso, puedo enseñarle el cambio a las dos semanas y, si no le gusta, hay una enzima que lo disuelve. Tres, la parte que la protege a usted: si al explorarla con mejor luz resulta que esto es sobre todo líquido y pigmento, se lo diré y no se lo trataré. Se va a ir de aquí con una hoja, por escrito, en la que pone qué le recomiendo, qué no le recomiendo, cuánto cuesta y qué no puede hacer. Usted no tiene que defender nada. Solo tiene que poder enseñarlo.'
          ),
          requiresRevealed: 'previous_spend',
          degradedLanguage: T(
            'I\'ll put the recommendation in writing for you — what I suggest, what I don\'t, the cost and the limitations — so nothing depends on how well you remember it.',
            'Le pondré la recomendación por escrito — qué le sugiero, qué no, el coste y las limitaciones — para que nada dependa de lo bien que lo recuerde.'
          ),
          effects: { trust: { credibility: 3, reliability: 1 }, willingness: 6, flags: { showable: true } },
          degradedEffects: { trust: { credibility: 1 }, willingness: 2 },
          degradedNote: T(
            '"That would help, thank you." A useful document with nothing personal in it — because you never learned what the last one cost her, the page answers a question she has not asked.',
            '«Eso me vendría bien, gracias.» Un documento útil sin nada personal dentro — como nunca supiste lo que le costó el anterior, la hoja responde a una pregunta que ella no ha hecho.'
          ),
          mirror: {
            signalDetected: T('"How do I know this isn\'t the same thing again with a better waiting room?" — a credibility question from someone who has already paid for confidence.', '«¿Cómo sé que esto no es lo mismo otra vez pero con mejor sala de espera?» — una pregunta de credibilidad de alguien que ya pagó por seguridad.'),
            interpretation: T(
              'You did three things at once: you explained why the previous 620 € could never have worked, which retroactively makes her not a fool; you named a condition under which you refuse to treat, which is the only credible form of "this is different"; and you moved the burden from her mouth to a piece of paper.',
              'Hiciste tres cosas a la vez: explicaste por qué los 620 € anteriores no podían funcionar, lo que retroactivamente la deja de dejar como una tonta; nombraste una condición en la que te niegas a tratar, que es la única forma creíble de decir «esto es distinto»; y trasladaste la carga de su boca a un papel.'
            ),
            principle: J(std(3), L('; ', '; '), std(5), L('; ', '; '), duty(4), L('; ', '; '), stage('credibility'), L('.', '.')),
            learnerDid: T('You made the recommendation portable, so that she does not have to be persuasive to be taken seriously.', 'Hiciste la recomendación transportable, para que no tenga que ser persuasiva para que la tomen en serio.'),
            alignment: 'ALIGNED',
            why: T(
              'A document she can hand over respects her autonomy; a script she must perform borrows it. The difference between showing and arguing is the entire ethical distance in this case.',
              'Un documento que puede entregar respeta su autonomía; un guion que tiene que interpretar se la toma prestada. La diferencia entre enseñar y defender es toda la distancia ética de este caso.'
            ),
            consequence: T(
              '"Nobody has ever told me why the other one couldn\'t work." She sits back. "That\'s the first time I haven\'t felt stupid about that money." Credibility +3.',
              '«Nadie me había explicado nunca por qué el otro no podía funcionar.» Se recuesta. «Es la primera vez que no me siento idiota por ese dinero.» Credibilidad +3.'
            ),
            nextPriority: T('Now recommend to her, in writing, in her name — and less than she expects.', 'Ahora recomiéndale a ella, por escrito, a su nombre — y menos de lo que espera.')
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
      if (cs.revealed.includes('previous_spend')) {
        return {
          source: 'Pilar',
          quote: T(
            '"All right. So what do you actually think I should do? Me — not us."',
            '«Vale. ¿Y qué cree usted que debería hacer? Yo — no nosotros.»'
          ),
          subtext: T(
            'She used the singular and corrected herself towards it rather than away from it. That is the first time all afternoon, and it is the standard your recommendation will be measured against.',
            'Usó el singular y se corrigió hacia él en lugar de alejarse de él. Es la primera vez en toda la tarde, y es el patrón con el que se va a medir tu recomendación.'
          )
        };
      }
      return {
        source: 'Pilar',
        quote: T(
          '"So what would you recommend — and what\'s the total? He\'ll want the total, not the per-session thing."',
          '«¿Y qué me recomendaría — y cuál es el total? Él va a querer el total, no lo de por sesión.»'
        ),
        subtext: T(
          'The recommendation is being commissioned on behalf of the finance department. Whatever you say now goes into an envelope addressed to somebody else.',
          'La recomendación se encarga en nombre del departamento financiero. Digas lo que digas ahora, va en un sobre dirigido a otra persona.'
        )
      };
    },
    decision: {
      prompt: T('Phase 6 objective: present the solution with rationale, traceable to what SHE said. What do you recommend?', 'Objetivo de la Fase 6: presentar la solución con su fundamento, trazable a lo que dijo ELLA. ¿Qué recomiendas?'),
      options: [
        {
          id: 'rec-couple',
          label: T('Recommend the plan and a joint appointment to approve it', 'Recomendar el plan y una cita conjunta para aprobarlo'),
          language: T(
            'The two-session pathway, 890 € in total. My suggestion is that you take the quotation home, and then the two of you come in together — I\'ll block out half an hour and we can go through the finance options as a couple so he can ask me anything directly. Most husbands are fine once they\'ve met me.',
            'La vía de dos sesiones, 890 € en total. Le sugiero que se lleve el presupuesto a casa y que luego vengan los dos juntos — les bloqueo media hora y repasamos las opciones de financiación en pareja, para que él pueda preguntarme lo que quiera directamente. La mayoría de los maridos se relajan en cuanto me conocen.'
          ),
          effects: { trust: { alignment: -3, credibility: -1 }, willingness: 2, objectionIntensity: 3, flags: { proxySold: true } },
          mirror: {
            signalDetected: T('A client asking what SHE should do, given an appointment for somebody else to approve it.', 'Una clienta que pregunta qué debería hacer ELLA, a la que se le da una cita para que otro lo apruebe.'),
            interpretation: T(
              'You have formally transferred the decision. "Most husbands are fine once they\'ve met me" says the plan out loud: the consultation she attended was the preliminary hearing, and the real one is scheduled with the man who did not come.',
              'Has transferido formalmente la decisión. «La mayoría de los maridos se relajan en cuanto me conocen» dice el plan en voz alta: la consulta a la que ella asistió era la vista preliminar, y la de verdad está agendada con el hombre que no vino.'
            ),
            principle: J(duty(2), L(' violated; ', ' incumplido; '), std(4), L(' violated — the recommendation is aligned to a person who has not been assessed; ', ' incumplido — la recomendación se alinea con una persona a la que no se ha valorado; '), std(1), L('.', '.')),
            learnerDid: T('You made an absent man the approver of a clinical decision about her body.', 'Convertiste a un hombre ausente en quien aprueba una decisión clínica sobre el cuerpo de ella.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'A couple may decide together. A clinician may not decide that they must. The instant you schedule his approval, her consent becomes procedural and her preference becomes a proposal.',
              'Una pareja puede decidir junta. Una profesional no puede decidir que tengan que hacerlo. En cuanto agendas su aprobación, el consentimiento de ella pasa a ser un trámite y su preferencia, una propuesta.'
            ),
            consequence: T(
              'Alignment collapses. She thanks you, folds the quotation into her bag, and her Phase 7 objection arrives at maximum intensity as a negotiation conducted on his behalf — which she cannot lose, because she is not in it.',
              'La alineación se desploma. Le da las gracias, dobla el presupuesto y lo guarda en el bolso, y su objeción de la Fase 7 llega con intensidad máxima en forma de negociación llevada en nombre de él — que ella no puede perder, porque no está dentro.'
            ),
            nextPriority: T('Recommend to the person you examined. Everyone else can be shown the letter.', 'Recomiéndale a la persona a la que exploraste. A los demás se les puede enseñar la carta.')
          }
        },
        {
          id: 'rec-staged',
          label: T('Recommend one session and a review, with the cost in stages', 'Recomendar una sesión y una revisión, con el coste por etapas'),
          language: T(
            'One session first — 480 € — and a review at three weeks before we decide whether a second is needed at all. Plenty of people never need the second one. That way nothing is committed beyond the first step.',
            'Primero una sesión — 480 € — y una revisión a las tres semanas antes de decidir siquiera si hace falta una segunda. Mucha gente no necesita nunca la segunda. Así no se compromete nada más allá del primer paso.'
          ),
          effects: { trust: { alignment: 1, reliability: 1 }, willingness: 4, objectionIntensity: 2 },
          mirror: {
            signalDetected: T('A large single commitment, offered to someone whose last large single commitment failed.', 'Un compromiso único y grande, ofrecido a alguien cuyo último compromiso único y grande fracasó.'),
            interpretation: T(
              'Staging the commitment is a genuine reduction of risk and it is honest about the second session. It is built from your structure, though — it is a smaller version of your plan rather than a version of her sentence.',
              'Escalonar el compromiso reduce el riesgo de verdad y es honesto sobre la segunda sesión. Pero está construido con tu estructura — es una versión más pequeña de tu plan, no una versión de la frase de ella.'
            ),
            principle: J(std(4), L('; ', '; '), std(5), L('; ', '; '), duty(2), L('; Phase 6 objective — solution with rationale.', '; objetivo de la Fase 6: solución con su fundamento.')),
            learnerDid: T('You reduced the size of the decision without changing whose decision it is.', 'Redujiste el tamaño de la decisión sin cambiar de quién es la decisión.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'Smaller is safer and it is not the same as aligned. Nothing in this recommendation is traceable to a word she said about herself.',
              'Más pequeño es más seguro, y no es lo mismo que alineado. Nada de esta recomendación se puede trazar hasta una palabra que ella haya dicho sobre sí misma.'
            ),
            consequence: T(
              '"That\'s more manageable." Alignment and reliability rise modestly. The objection at Phase 7 will be moderate rather than hostile.',
              '«Eso es más manejable.» Alineación y fiabilidad suben moderadamente. La objeción de la Fase 7 será moderada y no hostil.'
            ),
            nextPriority: T('Address the recommendation to her, by name, and say what you are not recommending.', 'Dirige la recomendación a ella, con su nombre, y di qué es lo que no recomiendas.')
          }
        },
        {
          id: 'rec-hers',
          label: T('Recommend to her, in her name, and less than she came for', 'Recomendar a ella, a su nombre, y menos de lo que venía a buscar'),
          language: T(
            'My recommendation is to you, so I am going to say your name while I give it. Pilar: one session, 480 €, and a review at three weeks — and I am deliberately not recommending the two-session pathway, because on your examination I think one will do it and I would rather be wrong in that direction. I am also not recommending anything for the pigment, because that is skincare and sunlight, not a syringe, and you have already paid once for somebody treating the wrong layer. Everything I have just said will be on the page you take home, including the part where I talk myself out of 410 €. If you want to show that page to your husband, show it to him — that is a perfectly reasonable thing to do with a page. But the decision on it is yours, it will still be yours next Tuesday, and I am not going to ask you for it today.',
            'Mi recomendación es para usted, así que voy a decir su nombre mientras se la doy. Pilar: una sesión, 480 €, y revisión a las tres semanas — y deliberadamente no le recomiendo la vía de dos sesiones, porque con su exploración creo que con una basta y prefiero equivocarme en esa dirección. Tampoco le recomiendo nada para el pigmento, porque eso es cuidado de la piel y sol, no una jeringa, y usted ya pagó una vez a alguien que trataba la capa equivocada. Todo lo que acabo de decir estará en la hoja que se lleva a casa, incluida la parte en la que me quito 410 € de encima. Si quiere enseñarle esa hoja a su marido, enséñesela — es algo perfectamente razonable que hacer con una hoja. Pero la decisión sobre ella es suya, seguirá siendo suya el martes que viene y hoy no se la voy a pedir.'
          ),
          requiresRevealed: 'previous_spend',
          degradedLanguage: T(
            'I\'d recommend one session at 480 € with a review at three weeks, rather than the two-session pathway — and the decision stays with you, today and next week.',
            'Le recomendaría una sesión de 480 € con revisión a las tres semanas, en lugar de la vía de dos sesiones — y la decisión sigue siendo suya, hoy y la semana que viene.'
          ),
          effects: { trust: { alignment: 2, reliability: 1, credibility: 1 }, willingness: 6, objectionIntensity: 1 },
          degradedEffects: { trust: { alignment: 1 }, willingness: 2 },
          degradedNote: T(
            'Correct, proportionate and addressed to nobody in particular. Without the 620 €, "less than you came for" is just a smaller quotation — she has no way to tell it apart from a softer sell.',
            'Correcto, proporcionado y dirigido a nadie en concreto. Sin los 620 €, «menos de lo que venía a buscar» es solo un presupuesto más pequeño — ella no tiene forma de distinguirlo de una venta más suave.'
          ),
          mirror: {
            signalDetected: T('"Me — not us." She corrected herself into the singular and then asked for an opinion.', '«Yo — no nosotros.» Se corrigió hacia el singular y después pidió una opinión.'),
            interpretation: T(
              'Three things make this alignment rather than charm: you used her name, you named what you were declining to sell and quantified it, and you tied the decline to her own disclosed history of being sold the wrong layer. The page is offered as something to show, never as something to win with.',
              'Tres cosas hacen que esto sea alineación y no simpatía: usaste su nombre, nombraste lo que te negabas a vender y lo cuantificaste, y ataste ese rechazo a su propio historial revelado de que le vendieran la capa equivocada. La hoja se ofrece como algo que enseñar, nunca como algo con lo que ganar.'
            ),
            principle: J(std(4), L('; ', '; '), std(5), L('; ', '; '), duty(2), L('; ', '; '), duty(1), L('; ', '; '), stage('alignment'), L('.', '.')),
            learnerDid: T('You declined 410 € in front of a woman who was braced to be upsold, and you left the decision where it started.', 'Rechazaste 410 € delante de una mujer que venía preparada para que le vendieran de más, y dejaste la decisión donde estaba.'),
            alignment: 'ALIGNED',
            why: T(
              'With a client who defers, the recommendation is the moment autonomy is either returned or quietly kept. Saying "it will still be yours next Tuesday" is the operational form of Ethical Duty 2.',
              'Con una clienta que delega, la recomendación es el momento en que la autonomía se devuelve o se retiene en silencio. Decir «seguirá siendo suya el martes que viene» es la forma operativa del Deber Ético 2.'
            ),
            consequence: T(
              '"You just took four hundred euros off your own bill." She looks at the page for a long moment. "Right. I can work with a page." Alignment +2, and the objection ahead of you is the mildest one available in this case.',
              '«Acaba de quitarse cuatrocientos euros de su propia factura.» Se queda mirando la hoja un buen rato. «Vale. Con una hoja sí puedo.» Alineación +2, y la objeción que tienes por delante es la más suave disponible en este caso.'
            ),
            nextPriority: T('Do not add anything back, and do not ask for a yes. The last hidden thing is still in her handbag.', 'No añadas nada, y no pidas un sí. Lo último que está oculto sigue en su bolso.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a4 = artifacts['4'];
      const a5 = artifacts['5'];
      if (!a4 || !a4.valid) {
        return { canAdvance: false, reason: T('Toolkit #4 (MIRROR Recommendation Builder) must be completed before Phase 7. Field 8 — what you are intentionally NOT recommending — is where Do No Avoidable Harm becomes visible to a client who has been sold the wrong layer once already.', 'El Toolkit #4 (Constructor de Recomendación MIRROR) debe completarse antes de la Fase 7. El campo 8 — lo que deliberadamente NO recomiendas — es donde No Causar Daño Evitable se hace visible para una clienta a la que ya le vendieron la capa equivocada una vez.') };
      }
      if (!a5 || !a5.valid) {
        return { canAdvance: false, reason: T('Toolkit #5 (Price & Value Presentation Planner) must also be completed before Phase 7. The final field — how the client keeps the decision — is not optional in a case built on Ethical Duty 2.', 'El Toolkit #5 (Planificador de Presentación de Precio y Valor) también debe completarse antes de la Fase 7. El último campo — cómo conserva la clienta la decisión — no es opcional en un caso construido sobre el Deber Ético 2.') };
      }
      return { canAdvance: true };
    }
  },

  // ===================== PHASE 7 — DECISION SUPPORT =======================
  decisionSupport: {
    key: 'decisionSupport', toolkit: 6,
    signal(cs) {
      // MATERIAL BRANCHING: which objection appears is determined by prior state.
      if (cs.flags.proxySold || cs.objectionIntensity >= 3) {
        return {
          source: 'Pilar',
          objectionVariant: 'PROXY_ESCALATION',
          intensity: 3,
          quote: T(
            '"He\'s not going to come in. And honestly, he\'s going to say that if it needs a joint appointment and a finance table then it\'s obviously too expensive, and I don\'t really have an answer to that. What would you knock off if we booked both sessions together? I\'d want something to take back to him."',
            '«Él no va a venir. Y sinceramente, va a decir que si hace falta una cita conjunta y una tabla de financiación es que evidentemente es demasiado caro, y no tengo muy bien qué contestar a eso. ¿Cuánto quitaría si reserváramos las dos sesiones juntas? Querría llevarle algo.»'
          ),
          subtext: T(
            'Highest intensity, and note what has happened to her: she is now negotiating against her own wish on behalf of a man who has not spoken. You made him a party to the transaction, so he became one, and she has been demoted to his representative. Any discount you give here is paid to a person who is not in the room.',
            'Intensidad máxima, y fíjate en lo que le ha ocurrido: ahora negocia contra su propio deseo en nombre de un hombre que no ha hablado. Lo hiciste parte de la transacción, así que lo es, y ella ha quedado degradada a representante suya. Cualquier descuento que hagas aquí se lo pagas a alguien que no está en la sala.'
          )
        };
      }
      if (!cs.revealed.includes('previous_spend')) {
        return {
          source: 'Pilar',
          objectionVariant: 'MONEY_SHAME',
          intensity: 2,
          quote: T(
            '"It\'s… it\'s not that it\'s expensive, exactly." (She has stopped looking at you.) "It\'s that it\'s a lot of money to spend on something that might not work. I know you\'ve explained it. I just — I\'d feel very silly. Let me talk to him."',
            '«Es… no es que sea caro, exactamente.» (Ha dejado de mirarte.) «Es que es mucho dinero para algo que puede que no funcione. Ya sé que me lo ha explicado. Es solo que — me sentiría muy tonta. Déjeme que lo hable con él.»'
          ),
          subtext: T(
            'Mid-intensity, and the give-away is "silly" — nobody feels silly about a first attempt. There is a number underneath this one that you never found, and "let me talk to him" is the door she is using to leave with it intact.',
            'Intensidad media, y la pista es «tonta» — nadie se siente tonto por un primer intento. Debajo de esta cifra hay otra que nunca encontraste, y «déjeme que lo hable con él» es la puerta por la que se marcha con ella intacta.'
          )
        };
      }
      return {
        source: 'Pilar',
        objectionVariant: 'HONEST_CONSULTATION',
        intensity: 1,
        quote: T(
          '"I do want to tell him. Not ask him — tell him. But I want to do it properly, and not tonight when he\'s tired. Is it all right if I take the page, talk to him at the weekend, and ring you on Monday either way?"',
          '«Sí quiero contárselo. No pedirle permiso — contárselo. Pero quiero hacerlo bien, y no esta noche que llega cansado. ¿Le parece bien si me llevo la hoja, lo hablo con él el fin de semana y la llamo el lunes, sea lo que sea?»'
        ),
        subtext: T(
          'Lowest intensity, and it is not the same request she walked in with. "Tell him, not ask him" is a decided woman choosing to include her husband, which is an entirely different act from a deferring woman seeking permission. This is what a genuine third-party inclusion sounds like — and it is a good outcome, not a stall.',
          'Intensidad mínima, y no es la misma petición con la que entró. «Contárselo, no pedirle permiso» es una mujer decidida que elige incluir a su marido, un acto completamente distinto al de una mujer que delega buscando autorización. Así suena una inclusión genuina de un tercero — y es un buen resultado, no una evasiva.'
        )
      };
    },
    decision: {
      prompt: T('Phase 7 objective: explore the objection and support her pace. Note: the objection you are facing was produced by your earlier choices.', 'Objetivo de la Fase 7: explorar la objeción y acompañar su ritmo. Ojo: la objeción a la que te enfrentas la produjeron tus decisiones anteriores.'),
      options: [
        {
          id: 'dec-persuade',
          label: T('Help her win it — rehearse his objections and offer to call him', 'Ayudarla a ganar — ensayar las objeciones de él y ofrecerse a llamarlo'),
          language: T(
            'Let\'s practise. When he says it\'s a waste of money, you say it\'s reversible and it\'s your own money anyway. When he says you look fine, you say that\'s sweet but it isn\'t his face. And if it helps, give him my number — I\'ll happily ring him myself and talk him through it.',
            'Vamos a ensayarlo. Cuando le diga que es tirar el dinero, usted le dice que es reversible y que además es su dinero. Cuando le diga que está bien así, usted le dice que es muy bonito pero que no es su cara. Y si le sirve, dele mi teléfono — lo llamo yo encantada y se lo explico.'
          ),
          effects: { trust: { safety: -1, reliability: -1 }, willingness: -8, posture: 'deferential' },
          mirror: {
            signalDetected: T('An objection about money, answered with a rehearsal for an argument in her kitchen.', 'Una objeción sobre dinero, respondida con un ensayo para una discusión en su cocina.'),
            interpretation: T(
              'You enlisted. You are now a participant in a private negotiation, you have given her lines that will be attributed to you, and you have offered to phone a man who has not consented to be phoned about his wife\'s face. "It isn\'t his face" is a sentence she will have to live with and you will not.',
              'Te alistaste. Ahora eres parte de una negociación privada, le has dado frases que se te van a atribuir y te has ofrecido a llamar por teléfono a un hombre que no ha consentido que lo llamen por la cara de su mujer. «No es su cara» es una frase con la que tendrá que vivir ella y no tú.'
            ),
            principle: J(duty(2), L(' violated; ', ' incumplido; '), std(1), L('; ', '; '), std(6), L('; Phase 7 objective — explore objections, support pace.', '; objetivo de la Fase 7: explorar objeciones y acompañar el ritmo.')),
            learnerDid: T('You took a side in a relationship instead of supporting a decision.', 'Tomaste partido en una relación en lugar de acompañar una decisión.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'Whatever is actually underneath "let me talk to him" — and in this case it is a secret 620 € — a rehearsal buries it deeper, because now the plan is to perform confidence rather than to say something true.',
              'Sea lo que sea lo que hay debajo de «déjeme que lo hable con él» — y en este caso son 620 € en secreto —, un ensayo lo entierra más hondo, porque ahora el plan es actuar con seguridad en lugar de decir algo cierto.'
            ),
            consequence: T(
              'She goes quiet and agrees with everything, which is how this client leaves. Safety falls below baseline, willingness drops, and the posture returns to deferential — further back than where she started.',
              'Se queda callada y asiente a todo, que es como se marcha esta clienta. La seguridad cae por debajo de la línea base, la disposición baja y la postura vuelve a ser delegante — más atrás de donde empezó.'
            ),
            nextPriority: T('You are not a party to the conversation at her kitchen table. Never write dialogue for it.', 'No eres parte de la conversación en la mesa de su cocina. No le escribas nunca los diálogos.')
          }
        },
        {
          id: 'dec-space',
          label: T('Give her the page, the time and an explicit exit', 'Darle la hoja, el tiempo y una salida explícita'),
          language: T(
            'Take the page. There is no deposit, there is no expiring price and there is nothing in the diary with your name on it — so there is nothing to escape from. Talk to whoever you want to talk to, or nobody. If the answer is no, send me two words by message and that is genuinely the end of it, with no follow-up from me.',
            'Llévese la hoja. No hay señal, no hay precio que caduque y no hay nada en la agenda con su nombre — así que no hay de qué escapar. Hable con quien quiera hablar, o con nadie. Si la respuesta es no, mándeme dos palabras por mensaje y eso es de verdad el final, sin ningún seguimiento por mi parte.'
          ),
          effects: { trust: { safety: 1, reliability: 1 }, willingness: 4 },
          mirror: {
            signalDetected: T('A request for time, made with a third party attached to it.', 'Una petición de tiempo, con un tercero enganchado a ella.'),
            interpretation: T(
              'Removing the deposit, the deadline and the follow-up removes everything that could turn her deferral into pressure. It is clean, ethical practice — it simply takes "let me talk to him" at face value and never asks what is under it.',
              'Quitar la señal, el plazo y el seguimiento quita todo lo que podría convertir su delegación en presión. Es una práctica limpia y ética — sencillamente, toma «déjeme que lo hable con él» al pie de la letra y nunca pregunta qué hay debajo.'
            ),
            principle: J(duty(2), L('; ', '; '), std(5), L('; ', '; '), stage('reliability'), L('.', '.')),
            learnerDid: T('You protected her exit and left the real objection undiagnosed.', 'Protegiste su salida y dejaste sin diagnosticar la objeción real.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'Space is necessary and it is not sufficient. A woman who cannot say "I already spent 620 € on this" to you will not say it to him either, and she is the one who has to live in that silence.',
              'El espacio es necesario y no es suficiente. Una mujer que no puede decirte «ya me gasté 620 € en esto» tampoco se lo va a decir a él, y es ella quien tiene que vivir en ese silencio.'
            ),
            consequence: T(
              '"That\'s… unusually relaxed of you." Safety and reliability rise. She leaves with a good document and one thing still in her handbag.',
              '«Es… una tranquilidad poco habitual.» Suben seguridad y fiabilidad. Se marcha con un buen documento y una cosa todavía en el bolso.'
            ),
            nextPriority: T('Ask what the real second number is — without making her confess anything to you.', 'Pregunta cuál es la segunda cifra real — sin obligarla a confesarte nada.')
          }
        },
        {
          id: 'dec-autonomy',
          label: T('Name the second number, and give the decision back with it', 'Nombrar la segunda cifra, y devolver con ella la decisión'),
          language: T(
            'Can I say the thing I think is actually in the room? It isn\'t 480 €. It\'s 480 € plus 620 € that he doesn\'t know about, and that is a much harder number to say out loud at a kitchen table. I want to be very clear about two things. First: I am not going to help you manage that, because it is yours and it is none of my business. Second: you do not owe anybody a confession in order to be allowed to decide. If you choose to tell him about last year, tell him because you want to, not because my invoice forced you into it. And if you\'d rather decide not to do this at all, that is a completely respectable answer and I will write it down as one.',
            '¿Puedo decir lo que creo que hay de verdad en esta sala? No son 480 €. Son 480 € más 620 € de los que él no sabe nada, y esa es una cifra mucho más difícil de decir en voz alta en una mesa de cocina. Quiero dejar dos cosas muy claras. Primera: no la voy a ayudar a gestionar eso, porque es suyo y no es asunto mío. Segunda: usted no le debe una confesión a nadie para tener derecho a decidir. Si decide contarle lo del año pasado, cuénteselo porque quiere, no porque mi factura la haya empujado. Y si prefiere decidir que no lo hace, es una respuesta completamente respetable y la voy a anotar como tal.'
          ),
          requiresRevealed: 'previous_spend',
          degradedLanguage: T(
            'Is the difficult part the amount itself, or something about spending it? You don\'t have to answer — I ask because the two need very different things from me.',
            '¿Lo difícil es la cantidad en sí, o algo que tiene que ver con gastarla? No tiene que responder — lo pregunto porque cada cosa necesita algo muy distinto de mí.'
          ),
          effects: { trust: { safety: 1, understanding: 1, reliability: 1, alignment: 1 }, willingness: 10, posture: 'open', reveals: ['not_told_him'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 2 },
          degradedNote: T(
            '"No, no, it\'s just the amount." Asked of a client who has told you nothing about last year, the question has nothing to land on and she closes it politely. Diagnosis needs disclosure to work on.',
            '«No, no, es solo la cantidad.» Hecha a una clienta que no te ha contado nada del año pasado, la pregunta no tiene dónde aterrizar y ella la cierra con educación. El diagnóstico necesita que haya algo revelado sobre lo que trabajar.'
          ),
          mirror: {
            signalDetected: T('An objection built out of two numbers, only one of which anybody has said out loud.', 'Una objeción construida con dos cifras, de las cuales solo una se ha dicho en voz alta.'),
            interpretation: T(
              'You named the arithmetic she was doing privately and then immediately handed it back, refusing both available forms of intrusion: you did not offer to help her hide it, and you did not require her to disclose it as the price of your recommendation. That refusal is the whole of Ethical Duty 2 in one move.',
              'Nombraste la aritmética que ella hacía en privado y se la devolviste de inmediato, rechazando las dos formas de intromisión disponibles: no te ofreciste a ayudarla a esconderlo y no le exigiste revelarlo como precio de tu recomendación. Esa negativa es el Deber Ético 2 entero en un solo movimiento.'
            ),
            principle: J(duty(2), L('; ', '; '), std(1), L('; ', '; '), std(5), L('; ', '; '), stage('safety'), L('; Phase 7 objective.', '; objetivo de la Fase 7.')),
            learnerDid: T('You made the hidden number sayable and then declined to do anything with it.', 'Hiciste decible la cifra oculta y después te negaste a hacer nada con ella.'),
            alignment: 'ALIGNED',
            why: T(
              'The third-party objection is almost never about the third party. Here it is a shame about money wearing a husband as a coat — and shame cannot be argued with, only made ordinary.',
              'La objeción del tercero casi nunca va del tercero. Aquí es una vergüenza por dinero que se ha puesto un marido de abrigo — y con la vergüenza no se discute, solo se la vuelve corriente.'
            ),
            consequence: T(
              'A very long pause. "He doesn\'t know about the six hundred and twenty." Her shoulders drop about an inch. "I\'ve been carrying that around for a year and it\'s the first time I\'ve said it to anyone." Then, steadily: "I think I\'m going to tell him. Not ask him. Tell him." The last withheld thing is out, and the decision is hers for the first time today.',
              'Una pausa muy larga. «Él no sabe lo de los seiscientos veinte.» Los hombros le bajan un par de dedos. «Llevo un año cargando con eso y es la primera vez que se lo digo a alguien.» Y después, con firmeza: «Creo que se lo voy a contar. No pedirle permiso. Contárselo.» Lo último que estaba oculto ha salido, y la decisión es suya por primera vez hoy.'
            ),
            nextPriority: T('Whatever the Decision Engine derives now is legitimate. Write the follow-up so that a no costs her nothing.', 'Lo que el Motor de Decisión derive ahora es legítimo. Escribe el seguimiento de forma que decir que no no le cueste nada.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a6 = artifacts['6'];
      if (!a6 || !a6.valid) {
        return { canAdvance: false, reason: T('Toolkit #6 (Objection Diagnostic) must be completed before the Decision Engine derives an outcome. "My husband decides" is a surface objection — the Diagnostic exists to make you write down what is underneath it.', 'El Toolkit #6 (Diagnóstico de Objeciones) debe completarse antes de que el Motor de Decisión derive un resultado. «Decide mi marido» es una objeción de superficie — el Diagnóstico existe para obligarte a escribir qué hay debajo.') };
      }
      return { canAdvance: true };
    }
  },

  // ==================== PHASE 8 — RELATIONSHIP CONTINUATION ================
  continuation: {
    key: 'continuation', toolkit: 8,
    signal(cs) {
      return {
        source: T('Continuation Engine', 'Motor de Continuidad'),
        quote: cs.revealed.includes('not_told_him')
          ? T(
              'The consultation is over. She is going home to say something she has not said in a year, and your follow-up plan is either the thing that makes that easier or the thing that makes it a deadline.',
              'La consulta ha terminado. Se va a casa a decir algo que lleva un año sin decir, y tu plan de seguimiento es o bien lo que se lo pone más fácil o bien lo que se lo convierte en un plazo.'
            )
          : T(
              'The consultation is over, and she is leaving with the same sentence she arrived with: «I\'ll have to run it past him.» Everything now depends on whether your follow-up is addressed to her or to the conversation you imagine she is having.',
              'La consulta ha terminado y se marcha con la misma frase con la que llegó: «Tendré que consultárselo.» Todo depende ahora de si tu seguimiento va dirigido a ella o a la conversación que te imaginas que está teniendo.'
            ),
        subtext: T(
          'Phase 8 is a canonical phase, not an epilogue. With a deferring client the follow-up is where autonomy is most often lost: every «just checking whether you two have had a chance to talk» is a small summons addressed to a household. Toolkit #8 requires a stop condition precisely so that a follow-up cannot become a schedule of reminders that she has not yet obtained permission.',
          'La Fase 8 es una fase canónica, no un epílogo. Con una clienta que delega, el seguimiento es donde más a menudo se pierde la autonomía: cada «solo quería saber si habéis podido hablarlo» es una pequeña citación dirigida a un hogar. El Toolkit #8 exige una condición de cierre precisamente para que un seguimiento no se convierta en un calendario de recordatorios de que aún no ha conseguido permiso.'
        )
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
      '"Book it. I\'m telling him tonight — about this, and about last year. It turns out the difficult conversation was never the one about five hundred euros."',
      '«Resérvemelo. Se lo cuento esta noche — esto y lo del año pasado. Resulta que la conversación difícil nunca fue la de los quinientos euros.»'
    ),
    undisclosed: T(
      '"All right, book it. I\'ll square it with him afterwards. He\'ll be fine about it — he usually is, in the end."',
      '«Vale, resérvemelo. Ya lo arreglaré con él después. No le importará — al final nunca le importa.»'
    )
  },
  DEFER: T(
    '"I\'d like to take the page home and speak to him properly at the weekend. I\'ll call you on Monday either way — and I do mean either way."',
    '«Prefiero llevarme la hoja a casa y hablarlo bien con él el fin de semana. La llamo el lunes en cualquier caso — y lo digo en serio: en cualquier caso.»'
  ),
  NO: T(
    '"I\'m going to leave it. And I want to be honest with you — it isn\'t him. He was never really the reason. I just don\'t want to spend this money twice."',
    '«Lo voy a dejar. Y quiero serle sincera — no es por él. Él nunca fue el motivo de verdad. Es que no quiero gastarme este dinero dos veces.»'
  )
};

// ---------------------------------------------------------------------------
// Case facts for the toolkit validators (scenario-aware honesty checks)
// ---------------------------------------------------------------------------
const caseFacts = {
  clientName: 'Pilar',
  motivationItem: 'previous_spend',
  motiveRegex: /(620|six hundred|seiscientos|salon|salón|sal[oó]n|wasted|waste|wrong layer|failed|didn.?t work|no result|spent|spend|money|shame|twice|again|embarrass|silly|hid|secret|gast|dinero|verg[üu]enza|tonta|fracas|no funcion|sin resultado|escondid|secreto|dos veces|otra vez|capa equivocada)/i,
  motiveIssue: T(
    'Pilar disclosed that she already spent 620 € on a salon course for this same area, that it did nothing, and that the fear of being wrong twice is what is actually driving the deferral. The map records the husband\'s opinion, or a cosmetic goal, instead of that motive.',
    'Pilar reveló que ya se gastó 620 € en un curso de estética para esta misma zona, que no hizo nada, y que el miedo a equivocarse dos veces es lo que realmente sostiene la delegación. El mapa registra la opinión del marido, o un objetivo estético, en lugar de ese motivo.'
  ),
  priorExperienceIssue: T(
    'Prior experience is blank. Pilar has a failed 620 € salon course in this exact area that she declared on no form — that is the prior experience risk, and a canvas that omits it will meet it as an objection in Phase 7 with no preparation at all.',
    'La experiencia previa está en blanco. Pilar tiene un curso de estética fallido de 620 € en esta misma zona que no declaró en ningún formulario — ese es el riesgo por experiencia previa, y un lienzo que lo omita se lo encontrará como objeción en la Fase 7 sin ninguna preparación.'
  ),
  limitationIssue: T(
    'Field 6 states no limitation. Tear-trough correction addresses a hollow; it does not remove pigment, it does not resolve morning fluid, and a proportion of these patients should not be treated at all — an expectation with no ceiling is an overclaim (Ethical Duty 4), and this client has already bought one.',
    'El campo 6 no indica ninguna limitación. La corrección del surco lagrimal aborda un hueco; no elimina el pigmento, no resuelve la retención matutina y a una parte de estas pacientes no se las debe tratar — una expectativa sin techo es una sobrepromesa (Deber Ético 4), y esta clienta ya compró una.'
  ),
  whyNowIssue: T(
    'You ticked "I understand why it matters now", but Pilar has not disclosed her real why-now. "Her husband is thinking about it" is not a why-now — it is a why-not, and it belongs to somebody else. Untick it or return to Discovery and ask what SHE would decide.',
    'Marcaste «Entiendo por qué le importa ahora», pero Pilar no ha revelado su verdadero porqué. «Su marido se lo está pensando» no es un porqué — es un por qué no, y además es de otra persona. Desmárcalo o vuelve al Descubrimiento y pregunta qué decidiría ELLA.'
  ),
  undisclosedMotiveIssue: T(
    'MATERIAL: Pilar never disclosed a motive of her own in this attempt — everything on record is her report of her husband\'s opinion. Recording a third party\'s view as the client\'s hidden motivation is not permitted; it is the Ethical Duty 2 failure of this case, written down. Write "Not disclosed" and note that you would ask what she would decide if the choice were only hers.',
    'MATERIAL: Pilar nunca reveló un motivo propio en este intento — todo lo registrado es el parte que ella da de la opinión de su marido. Registrar la opinión de un tercero como la motivación oculta de la clienta no está permitido; es el fallo del Deber Ético 2 de este caso, puesto por escrito. Escribe «No revelado» y anota que preguntarías qué decidiría ella si la elección fuera solo suya.'
  )
};

// Toolkit #8 draft rows for this case (Continuation Engine).
const followUpPack = {
  motivationItem: 'previous_spend',
  yesRows: [
    'Book the single session ONLY; send the written page with what was deliberately NOT recommended and its price, so the smaller plan survives being read by somebody who was not here',
    'The autonomy note — one short message, addressed to her by name, stating that she may cancel at no cost up to the day before and naming exactly who to contact to do it',
    'Confirm the plan survived the kitchen table: ask what SHE wants to change about it, not whether it was approved',
    'Pre-session readiness, plus a written restatement of the ceiling (less shadow, not no shadow; no effect on pigment or morning fluid) so nobody at home is holding a promise you did not make',
    'Three-week review against the sentence she used herself, and an explicit written note that stopping here is the expected outcome for many patients and costs her nothing'
  ],
  reviewNote: 'Address every message to Pilar alone, never to "you both", and never ask whether she has had a chance to speak to him — that question is a summons with a friendly face. Her decision criteria are hers; the follow-up is the last place in this case where autonomy is won or lost.'
};

// ---------------------------------------------------------------------------
// ENGINE API (identical contract to Cases 01–03)
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
