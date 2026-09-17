/**
 * CASE 04 — ISABEL / FULL-FACE REJUVENATION PLAN — 8-PHASE CANONICAL SCENARIO (EN/ES)
 *
 * Materially different from Cases 01–03:
 *   - Sofia WITHHOLDS. Carmen DEFENDS her identity. Beatriz AGREES with everything.
 *     Isabel NEGOTIATES. She is a commercial litigator, she treats the consultation
 *     as a transaction, and she asks for the number in the first minute and again
 *     every time she is not given it. Posture opens 'evaluative', willingness 55.
 *   - Commercial shape: a full-face rejuvenation plan at 3.400 €, benchmarked
 *     against two clinics she has already visited and whose quotes she has
 *     attached to her own intake form.
 *   - The hidden material is the inversion of the obvious read: she is NOT price
 *     sensitive. The last clinic dropped its quote by nine hundred euros when she
 *     hesitated, and that discount is the reason she left. She is testing whether
 *     your number means anything.
 *   - Turning point 1 at PHASE 3 (decline to price what you cannot yet see) → competitor_quotes.
 *   - Turning point 2 at PHASE 4 (name the test out loud)                   → discount_test.
 *   - Turning point 3 at PHASE 7 (name the injury, not the number)          → trust_injury.
 *   - THE TRAP IS THE HELPFUL ANSWER: answering the price question the first
 *     time it is asked, matching a competitor quote, "including" something,
 *     or closing the gap with a percentage. Every concession raises willingness
 *     and destroys credibility and alignment, so the Decision Engine derives
 *     DEFER or NO out of a consultation that felt commercially skilful.
 *   - Phase 7 branches on what was actually built: a genuine VALUE question, a
 *     COMPARISON objection, or a DISCOUNT demand you manufactured yourself.
 *
 * Provenance: The Beauty Sales Secrets — Ch.14 The Price Moment, Law 1 (never
 * apologise for the number) and Law 2 (say it and stop talking); Ch.11 the double
 * diagnosis and "you don't need everything"; Ch.13 partnership close. Canonical
 * architecture unchanged (phases, stages, standards, duties, toolkits).
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
  name: 'Isabel Moreno',
  age: 51,
  presenting: T(
    'Full-face rejuvenation plan (skin quality, mid-face volume, perioral lines) — plan priced at 3.400 €. She asks what it costs in the first minute, and again every time she is not answered.',
    'Plan de rejuvenecimiento facial completo (calidad de piel, volumen del tercio medio, código de barras) — plan valorado en 3.400 €. Pregunta el precio en el primer minuto, y vuelve a preguntarlo cada vez que no se le responde.'
  ),
  visibleGoal: T(
    '"Before we start — what does the whole thing cost? I have two quotes already, so let\'s save each other the theatre."',
    '«Antes de empezar — ¿cuánto cuesta todo esto? Ya tengo dos presupuestos, así que ahorrémonos el teatro.»'
  ),
  hiddenMotivation: T(
    'She is not comparing prices — she is running a test. At the second clinic she hesitated, and the quote fell from 3.800 € to 2.900 € before she had finished the sentence. The discount is the reason she walked out. She is here to find out whether your number means anything, and she is fully prepared to pay the higher figure to the practitioner whose number holds.',
    'No está comparando precios — está haciendo una prueba. En la segunda clínica dudó, y el presupuesto bajó de 3.800 € a 2.900 € antes de que terminara la frase. Ese descuento es el motivo por el que se marchó. Viene a averiguar si tu cifra significa algo, y está perfectamente dispuesta a pagar la cifra más alta a quien la sostenga.'
  ),
  emotionalConsequence: T(
    'If you discount, she concludes that the price was never real — and that if the price was not real, the clinical judgement behind it is not real either. She will be courteous, she will thank you, and she will pay more somewhere else.',
    'Si le haces descuento, concluye que el precio nunca fue real — y que si el precio no era real, tampoco lo es el criterio clínico que lo sostenía. Será cortés, te dará las gracias y pagará más en otro sitio.'
  ),
  history: T(
    'No prior aesthetic treatments of any kind. Two consultations in the last five weeks, both of which ended with an offer rather than a recommendation. Twenty-six years in commercial litigation.',
    'Ningún tratamiento estético previo de ningún tipo. Dos consultas en las últimas cinco semanas, ambas terminadas en una oferta y no en una recomendación. Veintiséis años en litigación mercantil.'
  ),
  entryRelationshipState: 'PROSPECTIVE'
};

const intake = {
  bookingNote: T(
    '"Please send me the full price list before the appointment. I would rather not spend an hour discovering we are not in the same range. I have attached the two quotes I already hold."',
    '«Envíenme la lista de precios completa antes de la cita. Prefiero no pasarme una hora descubriendo que no estamos en la misma franja. Adjunto los dos presupuestos que ya tengo.»'
  ),
  intakeForm: [
    T('Concern: general facial tiredness — "I look adversarial when I am not. It costs me in meetings."', 'Motivo: cansancio facial general — «Parezco hostil cuando no lo estoy. Eso me cuesta dinero en las reuniones.»'),
    T('Requested: the complete plan, all three areas, one number', 'Solicita: el plan completo, las tres zonas, una sola cifra'),
    T('ATTACHED BY THE CLIENT: quote A, 2.950 €. Quote B, printed at 3.800 € with "2.900 € if you book today" handwritten across it in a different pen.', 'ADJUNTADO POR LA CLIENTA: presupuesto A, 2.950 €. Presupuesto B, impreso en 3.800 € con «2.900 € si reserva hoy» escrito a mano encima, con otro bolígrafo.'),
    T('Budget field: "Not the issue." And, in the same box: "I would rather pay more than be managed."', 'Campo de presupuesto: «No es el problema.» Y, en la misma casilla: «Prefiero pagar más que ser gestionada.»'),
    T('Occupation: lawyer — commercial litigation, 26 years. Written beside it: "I negotiate for a living. Please don\'t."', 'Profesión: abogada — litigación mercantil, 26 años. Escrito al lado: «Me gano la vida negociando. Por favor, no lo intente.»'),
    T('Timeline: "No particular date. I have been looking since February."', 'Cronología: «Sin fecha concreta. Llevo mirando desde febrero.»'),
    T('Final line of the form: "The second clinic telephoned me twice afterwards."', 'Última línea del formulario: «La segunda clínica me llamó dos veces después.»'),
    T('No medical contraindications flagged. No previous treatments of any kind.', 'Sin contraindicaciones médicas señaladas. Ningún tratamiento previo de ningún tipo.')
  ],
  buriedSignals: ['handwritten_discount', 'rather_pay_more', 'negotiates_for_a_living']
};

// ---------------------------------------------------------------------------
function initialClientState() {
  return {
    trust: { safety: 0, attention: 0, understanding: 0, credibility: 0, alignment: 0, reliability: 0, confirmation: 0 },
    willingness: 55,
    posture: 'evaluative',
    objectionIntensity: 2,
    revealed: [],
    withheld: ['discount_test', 'competitor_quotes', 'trust_injury'],
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
          'Preparation Engine: a client who attaches her competitors\' quotes to her own intake form is not shopping — she is building a record. One of those quotes has a nine-hundred-euro climb-down written across it by hand. Read that handwriting before you read the number.',
          'Motor de Preparación: una clienta que adjunta los presupuestos de la competencia a su propio formulario no está comparando — está construyendo un expediente. Uno de esos presupuestos lleva escrita a mano una rebaja de novecientos euros. Lee esa letra antes de leer la cifra.'
        )
      };
    },
    decision: {
      prompt: T('Four minutes before Isabel walks in. What do you do with this file?', 'Cuatro minutos antes de que entre Isabel. ¿Qué haces con esta ficha?'),
      options: [
        {
          id: 'prep-pricelist',
          label: T('Get the price list and the competitive comparison ready', 'Preparar la lista de precios y la comparativa con la competencia'),
          language: T('She wants numbers. Print the full price list, mark where we sit against both quotes, and have the payment plan and the two package tiers to hand so we can move quickly.', 'Quiere cifras. Imprimo la lista de precios completa, señalo dónde quedamos frente a los dos presupuestos y dejo a mano el plan de pago y los dos niveles de paquete para poder ir rápido.'),
          effects: { trust: { credibility: -1 }, willingness: 2, flags: { prepared: 'price' } },
          mirror: {
            signalDetected: T('Two competitor quotes, one of them with a handwritten nine-hundred-euro reduction across the front of it.', 'Dos presupuestos de la competencia, uno de ellos con una reducción de novecientos euros escrita a mano en la portada.'),
            interpretation: T('You read the file as a price comparison because it contains prices. It contains something much louder: a record of a clinic whose number moved, kept by a woman who wrote "I would rather pay more than be managed".', 'Leíste la ficha como una comparativa de precios porque contiene precios. Contiene algo mucho más ruidoso: el registro de una clínica cuya cifra se movió, guardado por una mujer que escribió «prefiero pagar más que ser gestionada».'),
            principle: J(duty(3), L('; ', '; '), std(3), L('; Phase 1 objective.', '; objetivo de la Fase 1.')),
            learnerDid: T('You prepared to compete on price against a client who told you in writing that price is not the issue.', 'Te preparaste para competir en precio contra una clienta que te dijo por escrito que el precio no es el problema.'),
            alignment: 'NOT ALIGNED',
            why: T('Competent preparation means preparing for the client in the file. The client in this file has already watched two professionals negotiate against themselves.', 'La preparación competente significa prepararse para la clienta que hay en la ficha. La clienta de esta ficha ya ha visto a dos profesionales negociar contra sí mismos.'),
            consequence: T('You will reach for the price list the first time she asks, which is the first minute. Credibility opens below baseline because you arrived ready to trade rather than ready to assess.', 'Buscarás la lista de precios la primera vez que lo pregunte, que será en el primer minuto. La credibilidad arranca por debajo de la línea base porque llegaste preparada para negociar y no para valorar.'),
            nextPriority: T('Treat an attached competitor quote as evidence about the competitor, not as a target to beat.', 'Trata un presupuesto adjunto de la competencia como prueba sobre la competencia, no como una cifra a batir.')
          }
        },
        {
          id: 'prep-clinical',
          label: T('Prepare the clinical assessment for three areas', 'Preparar la valoración clínica de las tres zonas'),
          language: T('Three zones, three different mechanisms, three different timelines. Skin quality before volume, volume before the perioral work, and I need to see her animate before I commit to any of it. Sequencing and contraindications ready.', 'Tres zonas, tres mecanismos distintos, tres calendarios distintos. Calidad de piel antes que volumen, volumen antes del trabajo perioral, y necesito verla en movimiento antes de comprometerme con nada. Secuencia y contraindicaciones listas.'),
          effects: { trust: { credibility: 1 }, willingness: 1, flags: { prepared: 'clinical' } },
          mirror: {
            signalDetected: T('A three-area request with one number attached to it, and no clinical information in the file at all.', 'Una petición de tres zonas con una sola cifra pegada, y ni un solo dato clínico en la ficha.'),
            interpretation: T('Sequencing three mechanisms properly is real professional work and it is the correct clinical instinct. It simply does not prepare you for the first sixty seconds, which will be about money.', 'Secuenciar bien tres mecanismos es trabajo profesional real y es el instinto clínico correcto. Solo que no te prepara para los primeros sesenta segundos, que van a ir de dinero.'),
            principle: J(duty(3), L('; ', '; '), std(3), L('.', '.')),
            learnerDid: T('You prepared the treatment and not the negotiation you were handed in writing.', 'Preparaste el tratamiento y no la negociación que te entregaron por escrito.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Your clinical plan will survive scrutiny. Your first answer about price will not, because you have not decided in advance what it is.', 'Tu plan clínico resistirá el escrutinio. Tu primera respuesta sobre el precio, no, porque no has decidido de antemano cuál es.'),
            consequence: T('Credibility opens slightly positive. The price question arrives in the first minute and you improvise it.', 'La credibilidad arranca ligeramente positiva. La pregunta del precio llega en el primer minuto y la improvisas.'),
            nextPriority: T('Decide now, on paper, what you will say the first three times she asks for the number.', 'Decide ahora, por escrito, qué vas a decir las tres primeras veces que te pida la cifra.')
          }
        },
        {
          id: 'prep-read',
          label: T('Read the file as a test that has already been run twice', 'Leer la ficha como una prueba que ya se ha hecho dos veces'),
          language: T('She attached a quote with a nine-hundred-euro climb-down handwritten on it, she wrote "I would rather pay more than be managed", and she wrote "I negotiate for a living — please don\'t". Three sentences, one message. She is not asking what it costs. She is asking whether my number is a number or a starting position. Plan: hold the figure, name the trade, concede nothing, and expect to be asked at least three times.', 'Adjuntó un presupuesto con una rebaja de novecientos euros escrita a mano, escribió «prefiero pagar más que ser gestionada» y escribió «me gano la vida negociando, por favor no lo intente». Tres frases, un mensaje. No pregunta cuánto cuesta. Pregunta si mi cifra es una cifra o una posición de partida. Plan: sostener la cifra, nombrar la contrapartida, no ceder nada y esperar que me lo pregunte al menos tres veces.'),
          effects: { trust: { credibility: 1, attention: 1 }, willingness: 3, flags: { prepared: 'full', anticipatedNegotiation: true } },
          mirror: {
            signalDetected: T('All three buried signals identified before contact: the handwritten discount, "I would rather pay more than be managed", and "I negotiate for a living. Please don\'t."', 'Las tres señales ocultas identificadas antes del contacto: el descuento manuscrito, «prefiero pagar más que ser gestionada» y «me gano la vida negociando. Por favor, no lo intente».'),
            interpretation: T('A woman who keeps the evidence of someone else\'s climb-down is not collecting prices — she is collecting behaviour. The quote she is most suspicious of is the cheapest one she holds.', 'Una mujer que conserva la prueba de la rebaja ajena no colecciona precios — colecciona conductas. El presupuesto que más desconfianza le produce es el más barato que tiene.'),
            principle: J(L('Phase 1 objective; ', 'Objetivo de la Fase 1; '), duty(3), L('; ', '; '), std(3), L('.', '.')),
            learnerDid: T('You converted a price enquiry into a working hypothesis about integrity, and you decided your answer before she could ask for it.', 'Convertiste una consulta de precio en una hipótesis de trabajo sobre integridad, y decidiste tu respuesta antes de que ella pudiera pedírtela.'),
            alignment: 'ALIGNED',
            why: T('With this client, preparation cannot buy warmth — she is not here for warmth. It can buy the one thing she is measuring: a position you hold when it would be easier not to.', 'Con esta clienta, la preparación no puede comprar calidez — no viene a por calidez. Puede comprar lo único que ella está midiendo: una posición que sostienes cuando sería más cómodo no hacerlo.'),
            consequence: T('You walk in able to hear the difference between a price question and an audit.', 'Entras capaz de distinguir una pregunta de precio de una auditoría.'),
            nextPriority: T('Do not answer the number in Phase 2. Tell her when you will answer it, and then do exactly that.', 'No respondas la cifra en la Fase 2. Dile cuándo se la vas a responder, y luego hazlo exactamente así.')
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
        source: T('Isabel, on time, coat still on, sitting before she is invited to', 'Isabel, puntual, con el abrigo aún puesto, sentándose antes de que se lo ofrezcan'),
        quote: T('"Right. Before we do the whole getting-to-know-each-other section — what is your number for all three areas? I have 2.950 € from one clinic and 2.900 € from another. I have half an hour."', '«Bien. Antes de la parte esa de conocernos — ¿cuál es su cifra por las tres zonas? Tengo 2.950 € de una clínica y 2.900 € de otra. Dispongo de media hora.»'),
        subtext: cs.flags.prepared === 'full'
          ? T('Exactly the opening you prepared for, delivered inside twelve seconds — and note what she did: she quoted you the DISCOUNTED figure from clinic B, not the printed one. She is showing you the trap and watching to see whether you step into it.', 'Exactamente la apertura para la que te preparaste, entregada en doce segundos — y fíjate en lo que ha hecho: te ha citado la cifra REBAJADA de la clínica B, no la impresa. Te está enseñando la trampa y mirando si entras en ella.')
          : T('Fast, courteous, and entirely transactional. It feels rude not to answer a direct question directly — which is precisely why most practitioners lose this consultation in the first minute.', 'Rápida, cortés y absolutamente transaccional. Parece descortés no responder directamente a una pregunta directa — y por eso mismo la mayoría pierde esta consulta en el primer minuto.')
      };
    },
    decision: {
      prompt: T('Phase 2 objective: psychological safety — with a client who has opened on price and given you a deadline. Your first move?', 'Objetivo de la Fase 2: seguridad psicológica — con una clienta que ha abierto con el precio y te ha puesto un plazo. ¿Tu primer movimiento?'),
      options: [
        {
          id: 'conn-answer',
          label: T('Answer the question — she asked directly, so be direct', 'Responder a la pregunta — ha preguntado directamente, sé directa'),
          language: T('Of course — I won\'t waste your time. The full plan is 3.400 €. I know that\'s above both of your quotes, and I\'m happy to talk about why, and about what we could do within your range.', 'Por supuesto — no le hago perder el tiempo. El plan completo son 3.400 €. Sé que está por encima de sus dos presupuestos, y encantada de explicarle por qué, y de ver qué podríamos hacer dentro de su franja.'),
          effects: { trust: { credibility: -1, attention: -1 }, willingness: 5, flags: { pricedEarly: true } },
          mirror: {
            signalDetected: T('A direct price question asked before a single clinical fact has been established, with a competitor\'s discounted figure attached to it.', 'Una pregunta directa de precio formulada antes de establecer un solo dato clínico, con la cifra rebajada de un competidor pegada detrás.'),
            interpretation: T('You answered a question you could not yet answer. There is no examination, no priority, no sequence — so 3.400 € is not a price, it is a guess with a decimal point. And then you offered to move it in the same breath.', 'Respondiste a una pregunta que todavía no podías responder. No hay exploración, ni prioridad, ni secuencia — así que 3.400 € no es un precio, es una suposición con decimales. Y encima te ofreciste a moverla en la misma frase.'),
            principle: J(std(5), L('; ', '; '), std(3), L('; Phase 2 objective; ', '; objetivo de la Fase 2; '), duty(4), L('.', '.')),
            learnerDid: T('You quoted a plan you have not designed, and pre-announced that the figure is negotiable.', 'Presupuestaste un plan que no has diseñado, y anunciaste de antemano que la cifra es negociable.'),
            alignment: 'NOT ALIGNED',
            why: T('Radical clarity is not speed. A number given before an assessment is not clear, it is merely fast — and "within your range" told her the number was soft before she even pushed.', 'La claridad radical no es rapidez. Una cifra dada antes de una valoración no es clara, solo es rápida — y «dentro de su franja» le dijo que la cifra era blanda antes incluso de que ella apretara.'),
            consequence: T('She writes it down. She now has a third quote and no reason to believe it either. Every later attempt to build value will read as retrospective justification.', 'Lo apunta. Ahora tiene un tercer presupuesto y ningún motivo para creérselo tampoco. Todo intento posterior de construir valor sonará a justificación a posteriori.'),
            nextPriority: T('A price is an output. If you have not done the work, you do not have one yet — say so.', 'Un precio es un resultado. Si no has hecho el trabajo, todavía no lo tienes — dilo.')
          }
        },
        {
          id: 'conn-rapport',
          label: T('Slow the room down and build some rapport first', 'Bajar el ritmo de la sala y crear algo de sintonía primero'),
          language: T('Let me take your coat. We\'ll get to the money, I promise — but let\'s not start there. Tell me a little about what brought you in.', 'Permítame el abrigo. Llegaremos al dinero, se lo prometo — pero no empecemos por ahí. Cuénteme un poco qué la ha traído por aquí.'),
          effects: { trust: { safety: 1 }, willingness: 2 },
          mirror: {
            signalDetected: T('A deadline ("I have half an hour") and a direct question, met with a deferral and no date attached to it.', 'Un plazo («dispongo de media hora») y una pregunta directa, respondidos con un aplazamiento sin fecha.'),
            interpretation: T('Slowing the room is genuine safety work. With this client it is also, faintly, the move she has seen twice before — "we\'ll get to the money" is what people say when the money is going to be a problem.', 'Bajar el ritmo de la sala es trabajo real de seguridad. Con esta clienta es también, ligeramente, el movimiento que ya ha visto dos veces — «llegaremos al dinero» es lo que dice quien sabe que el dinero va a ser un problema.'),
            principle: J(std(1), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You deferred the question without telling her when it would be answered.', 'Aplazaste la pregunta sin decirle cuándo iba a responderse.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Deferral without a commitment reads as avoidance to a litigator. Safety for Isabel is not warmth — it is predictability.', 'Un aplazamiento sin compromiso, para una litigante, se lee como evasiva. La seguridad para Isabel no es calidez — es previsibilidad.'),
            consequence: T('"Fine." She takes her coat off. She also takes out a notebook and writes the time down. Safety rises a little; the clock is now visible on the table.', '«Bien.» Se quita el abrigo. También saca una libreta y apunta la hora. La seguridad sube un poco; el reloj está ya visible sobre la mesa.'),
            nextPriority: T('Give the deferral a deadline. "In twenty minutes" is safety; "later" is evasion.', 'Ponle plazo al aplazamiento. «Dentro de veinte minutos» es seguridad; «luego» es evasiva.')
          }
        },
        {
          id: 'conn-frame',
          label: T('Name the order of the conversation — and commit to it', 'Nombrar el orden de la conversación — y comprometerse con él'),
          language: T('You\'ll get the number, and you\'ll get it from me in about twenty-five minutes, in writing, and it will not change afterwards. What you will not get is a number now, because right now I would be inventing one — I have not looked at your face in movement and I do not yet know what you actually need. I don\'t quote before I assess, and I don\'t move a figure once I\'ve given it. If that costs me the appointment, it costs me the appointment.', 'Va a tener la cifra, se la voy a dar yo dentro de unos veinticinco minutos, por escrito, y después no va a cambiar. Lo que no va a tener es una cifra ahora, porque ahora mismo me la estaría inventando — no le he visto la cara en movimiento y todavía no sé qué necesita usted de verdad. No presupuesto antes de valorar, y no muevo una cifra una vez dada. Si eso me cuesta la cita, me cuesta la cita.'),
          effects: { trust: { safety: 2, attention: 1, credibility: 1 }, willingness: -2, posture: 'testing', objectionIntensity: 2, flags: { frameSet: true } },
          mirror: {
            signalDetected: T('A price question used as an opening gambit, with a competitor\'s climb-down already in her handbag.', 'Una pregunta de precio usada como apertura, con la rebaja de un competidor ya dentro del bolso.'),
            interpretation: T('You did not refuse her — you gave her a timetable and a rule, which is exactly what a litigator recognises as good faith. "It will not change afterwards" is the sentence she came to hear, and you said it before she could test for it.', 'No la rechazaste — le diste un calendario y una regla, que es justo lo que una litigante reconoce como buena fe. «Después no va a cambiar» es la frase que venía a oír, y la dijiste antes de que pudiera ponerla a prueba.'),
            principle: J(std(1), L('; ', '; '), std(5), L('; ', '; '), duty(4), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You made the process predictable and put your own conduct on the record before she asked for it.', 'Hiciste previsible el procedimiento y pusiste tu propia conducta por escrito antes de que ella lo pidiera.'),
            alignment: 'ALIGNED',
            why: T('Psychological safety for a negotiator is not reassurance — it is a counterparty who states a rule and then keeps it. Everything downstream is measured against this sentence.', 'La seguridad psicológica para quien negocia no es tranquilizar — es una contraparte que enuncia una regla y después la cumple. Todo lo que viene después se mide contra esta frase.'),
            consequence: T('A pause. Then, drily: "Nobody has said that to me yet." She puts the notebook away. Willingness dips — she is now actively testing rather than politely shopping, and that is the honest number.', 'Una pausa. Luego, seca: «Todavía no me lo había dicho nadie.» Guarda la libreta. La disposición baja — ahora está poniendo a prueba activamente en lugar de comparar por cortesía, y ese es el número honesto.'),
            nextPriority: T('You have made a promise with a clock on it. The rest of this consultation is whether you keep it.', 'Has hecho una promesa con reloj. El resto de la consulta consiste en si la cumples.')
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
      if (cs.flags.frameSet) {
        return {
          source: 'Isabel',
          quote: T('"Twenty-five minutes. Fine. Then use them properly, because the last two people spent them telling me how advanced their equipment was." (beat) "Ask me something the others didn\'t."', '«Veinticinco minutos. De acuerdo. Pues aprovéchelos, porque los dos anteriores los gastaron contándome lo avanzado que era su equipo.» (pausa) «Pregúnteme algo que no me hayan preguntado los otros.»'),
          subtext: T('That is an invitation, issued in the only register she trusts: a challenge. She has just told you that both previous consultations were about the clinic and not about her.', 'Eso es una invitación, formulada en el único registro en el que ella confía: un desafío. Acaba de decirte que las dos consultas anteriores fueron sobre la clínica y no sobre ella.'),
          disclosureLevel: 'opening'
        };
      }
      return {
        source: 'Isabel',
        quote: T('"So — all three areas. What is the best you can do? And before you answer, I should say I have been quoted 2.900 € for what sounds like the same thing."', '«Entonces — las tres zonas. ¿Cuál es su mejor precio? Y antes de que responda, le digo que me han presupuestado 2.900 € por lo que suena a lo mismo.»'),
        subtext: T('"What is the best you can do" is not a question about money. It is a question about you, and it has now been asked twice.', '«¿Cuál es su mejor precio?» no es una pregunta sobre dinero. Es una pregunta sobre ti, y ya la ha hecho dos veces.'),
        disclosureLevel: 'minimal'
      };
    },
    decision: {
      prompt: T('Phase 3 objective: surface request vs real need. She is asking for the number again. What do you do?', 'Objetivo de la Fase 3: petición superficial frente a necesidad real. Vuelve a pedir la cifra. ¿Qué haces?'),
      options: [
        {
          id: 'disc-quote',
          label: T('Give her the number and a menu of ways to reach her range', 'Darle la cifra y un menú de formas de llegar a su franja'),
          language: T('The full plan is 3.400 €. If that\'s outside where you want to be, we have a two-area version at 2.600 € and a staged option you could spread over the year — so there is definitely something here that works for your budget.', 'El plan completo son 3.400 €. Si eso se sale de donde usted quiere estar, tenemos una versión de dos zonas a 2.600 € y una opción escalonada que podría repartir durante el año — así que seguro que aquí hay algo que encaja con su presupuesto.'),
          effects: { trust: { understanding: -1, alignment: -1 }, willingness: 6, flags: { pricedEarly: true, quotedMenu: true } },
          mirror: {
            signalDetected: T('"What is the best you can do" — the second request for a figure, still with no examination on the record.', '«¿Cuál es su mejor precio?» — la segunda petición de cifra, todavía sin ninguna exploración registrada.'),
            interpretation: T('A menu is a concession wearing a suit. You have not lowered the price; you have shown her that the price has a floor you are willing to walk down to, which is the same information.', 'Un menú es una concesión con traje. No has bajado el precio; le has enseñado que el precio tiene un suelo al que estás dispuesta a bajar, que es exactamente la misma información.'),
            principle: J(std(2), L('; Phase 3 objective; ', '; objetivo de la Fase 3; '), std(5), L('.', '.')),
            learnerDid: T('You solved a budget problem she does not have, and skipped Discovery to do it.', 'Resolviste un problema de presupuesto que ella no tiene, y te saltaste el Descubrimiento para hacerlo.'),
            alignment: 'NOT ALIGNED',
            why: T('She wrote "not the issue" in the budget field. Treating price as the constraint tells her you did not read the file — and tells her your plan is elastic.', 'Escribió «no es el problema» en el campo de presupuesto. Tratar el precio como la restricción le dice que no leíste la ficha — y que tu plan es elástico.'),
            consequence: T('"So the three-area plan can be two areas for less. Which two did I not need?" She has caught the contradiction, and Discovery is now over before it began.', '«Entonces el plan de tres zonas puede ser de dos por menos dinero. ¿Cuáles dos no necesitaba yo?» Ha cazado la contradicción, y el Descubrimiento se ha terminado antes de empezar.'),
            nextPriority: T('Never present a cheaper version before you have established what the expensive one is for.', 'Nunca presentes una versión más barata antes de haber establecido para qué sirve la cara.')
          }
        },
        {
          id: 'disc-benchmark',
          label: T('Ask about the other two consultations', 'Preguntar por las otras dos consultas'),
          language: T('Before I answer that — you have seen two clinics already. Tell me about them. Not the prices: what happened in the room.', 'Antes de responderle — ya ha visto dos clínicas. Cuénteme cómo fueron. Los precios no: qué pasó en la sala.'),
          effects: { trust: { attention: 1, understanding: 1 }, willingness: 4, reveals: ['competitor_quotes'] },
          mirror: {
            signalDetected: T('Two quotes attached to her own intake form, one of them altered by hand.', 'Dos presupuestos adjuntos a su propio formulario, uno de ellos modificado a mano.'),
            interpretation: T('Asking about the room rather than the price is the right axis, and it gets you the facts. It stops short of asking why she kept the evidence — so you learn what happened without learning what it did to her.', 'Preguntar por la sala en vez de por el precio es el eje correcto, y consigue los hechos. Se queda corta: no pregunta por qué conservó la prueba — así que averiguas qué pasó sin averiguar qué le hizo.'),
            principle: J(std(2), L('; ', '; '), stage('attention'), L('; Phase 3 objective.', '; objetivo de la Fase 3.')),
            learnerDid: T('You moved the conversation off the figure and onto the conduct — one step, not two.', 'Sacaste la conversación de la cifra y la llevaste a la conducta — un paso, no dos.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('It surfaces the material but leaves the meaning with her. She reports the events like a witness statement and keeps the conclusion to herself.', 'Saca el material a la luz pero deja el significado en su poder. Relata los hechos como una declaración testifical y se guarda la conclusión.'),
            consequence: T('"The first one was competent and bored. The second one was charming, quoted 3.800 €, and when I said I\'d think about it, it became 2.900 € before I\'d finished the sentence." A pause. "Anyway. Both fine." The quotes are on the table; what the second one cost her is not.', '«El primero fue competente y aburrido. El segundo fue encantador, me presupuestó 3.800 € y, cuando dije que me lo pensaría, se convirtió en 2.900 € antes de que yo terminara la frase.» Una pausa. «En fin. Los dos bien.» Los presupuestos están sobre la mesa; lo que le costó el segundo, no.'),
            nextPriority: T('She said "anyway" and closed a door. The consultation is behind that door.', 'Dijo «en fin» y cerró una puerta. La consulta está detrás de esa puerta.')
          }
        },
        {
          id: 'disc-decline',
          label: T('Decline to price what you have not yet examined — and say why', 'Negarse a presupuestar lo que aún no has valorado — y decir por qué'),
          language: T('I\'m not going to give you a number yet, and I want to be precise about why, because "let me examine you first" is what everyone says. You have three quotes for the same three words — "full face" — and not one of them can be right, because nobody has told you which of the three things is actually driving what you see. So: sit forward, talk to me, let me watch your face move. And tell me something else — you kept the sheet with 2.900 € written on it by hand. Why did you keep that one?', 'No le voy a dar una cifra todavía, y quiero ser precisa con el porqué, porque «déjeme valorarla primero» es lo que dice todo el mundo. Usted tiene tres presupuestos por las mismas tres palabras — «cara completa» — y ninguno puede ser correcto, porque nadie le ha dicho cuál de las tres cosas es la que de verdad manda en lo que usted ve. Así que: siéntese hacia delante, hábleme, déjeme verle la cara en movimiento. Y dígame otra cosa: usted guardó la hoja con 2.900 € escritos a mano. ¿Por qué guardó precisamente esa?'),
          effects: { trust: { safety: 1, attention: 2, understanding: 2 }, willingness: 2, posture: 'engaged', reveals: ['competitor_quotes'], flags: { declinedToPrice: true } },
          mirror: {
            signalDetected: T('Three identical requests for "full face", two quotes, and one handwritten reduction she chose to preserve and attach.', 'Tres peticiones idénticas de «cara completa», dos presupuestos y una reducción manuscrita que ella eligió conservar y adjuntar.'),
            interpretation: T('You declined the transaction and gave a reason she cannot argue with, because it is a reason about her file and not about your process. Then you asked the only question nobody has asked: why she kept the evidence.', 'Rechazaste la transacción y diste un motivo que ella no puede rebatir, porque es un motivo sobre su expediente y no sobre tu procedimiento. Y después hiciste la única pregunta que nadie le ha hecho: por qué conservó la prueba.'),
            principle: J(std(2), L('; ', '; '), std(3), L('; ', '; '), duty(3), L('; Phase 3 objective.', '; objetivo de la Fase 3.')),
            learnerDid: T('You refused to compete on a number and started competing on accuracy instead — and you read her own paperwork back to her.', 'Te negaste a competir en cifra y empezaste a competir en precisión — y le leíste su propio papeleo de vuelta.'),
            alignment: 'ALIGNED',
            why: T('With a negotiator, refusing to open a negotiation is not rudeness, it is the first credible thing she has heard. And the question about the kept sheet is the case.', 'Con quien negocia, negarse a abrir la negociación no es descortesía, es lo primero creíble que ha oído. Y la pregunta sobre la hoja guardada es el caso entero.'),
            consequence: T('She looks at you properly for the first time. "Because it was the moment I stopped believing him. Three hundred euros a sentence. I brought it so I could see what you would do with it." The quotes are on the table — and so is the fact that they are exhibits, not prices.', 'Te mira de verdad por primera vez. «Porque fue el momento en que dejé de creerle. Trescientos euros por frase. La traje para ver qué hacía usted con ella.» Los presupuestos están sobre la mesa — y también el hecho de que son pruebas, no precios.'),
            nextPriority: T('She has told you it is a test. Do not now pass it by talking about it — pass it by holding the number.', 'Te ha dicho que es una prueba. No la apruebes ahora hablando de ella — apruébala sosteniendo la cifra.')
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
      if (cs.revealed.includes('competitor_quotes')) {
        return {
          source: 'Isabel',
          quote: T('"Let me be efficient. I have 2.900 € on the table from a man who found nine hundred euros in his pocket in under four seconds. You are going to be more expensive. Persuade me — or match him and save us both the speech."', '«Voy a ser eficiente. Tengo 2.900 € sobre la mesa de un señor que se encontró novecientos euros en el bolsillo en menos de cuatro segundos. Usted va a ser más cara. Convénzame — o iguálelo y nos ahorramos los dos el discurso.»'),
          subtext: T('Read the sentence again. She has just offered you the discount herself, in the same breath as describing why the last discount disgusted her. This is the test, stated almost explicitly. Phase 4 exists to prove you understood what she is actually asking.', 'Lee la frase otra vez. Acaba de ofrecerte ella misma el descuento, en la misma frase en la que describe por qué el último descuento le dio asco. Esta es la prueba, formulada casi explícitamente. La Fase 4 existe para demostrar que entendiste qué está preguntando en realidad.')
        };
      }
      return {
        source: 'Isabel',
        quote: T('"We seem to be going the long way round. What is your number, and what is your best number? They are usually different."', '«Parece que vamos dando un rodeo. ¿Cuál es su cifra, y cuál es su mejor cifra? Suelen ser distintas.»'),
        subtext: T('Nothing to consolidate. Without her material, this phase can only process the transaction she keeps offering you.', 'Nada que consolidar. Sin su material, esta fase solo puede procesar la transacción que ella no deja de ofrecerte.')
      };
    },
    decision: {
      prompt: T('Phase 4 objective: prove understanding before any solution. She has just invited you to match a competitor. What do you reflect?', 'Objetivo de la Fase 4: demostrar comprensión antes de cualquier solución. Acaba de invitarte a igualar a un competidor. ¿Qué reflejas?'),
      options: [
        {
          id: 'und-match',
          label: T('Meet her where she is — match the 2.900 €', 'Encontrarse con ella donde está — igualar los 2.900 €'),
          language: T('I\'d rather not lose you over four hundred euros. Let\'s say 2.900 € and we\'re level with them — I\'d honestly rather have you as a client than win an argument about price.', 'Prefiero no perderla por cuatrocientos euros. Digamos 2.900 € y quedamos a la par con ellos — sinceramente, prefiero tenerla como clienta que ganar una discusión sobre el precio.'),
          effects: { trust: { credibility: -2, alignment: -1 }, willingness: 8, objectionIntensity: 3, flags: { concessionOffered: true } },
          mirror: {
            signalDetected: T('An explicit invitation to discount, issued by a woman who has just told you what the last discount did to her opinion of the last clinic.', 'Una invitación explícita a rebajar, formulada por una mujer que acaba de contarte qué le hizo el último descuento a su opinión sobre la última clínica.'),
            interpretation: T('You walked into the only trap in the case, and you did it kindly. The four hundred euros were never the question. The question was whether your figure was a clinical conclusion or an opening bid, and you have now answered it.', 'Entraste en la única trampa del caso, y lo hiciste con amabilidad. Los cuatrocientos euros nunca fueron la pregunta. La pregunta era si tu cifra era una conclusión clínica o una puja inicial, y acabas de responderla.'),
            principle: J(std(3), L(' — a price that moves is a judgement that moves; ', ' — un precio que se mueve es un criterio que se mueve; '), duty(4), L('; ', '; '), std(5), L('.', '.')),
            learnerDid: T('You proved that your number was a position, not an assessment.', 'Demostraste que tu cifra era una posición, no una valoración.'),
            alignment: 'NOT ALIGNED',
            why: T('For this client a concession is not generosity, it is evidence. If the price was negotiable then the plan behind it was negotiable, and a negotiable plan is not a clinical opinion.', 'Para esta clienta una concesión no es generosidad, es una prueba. Si el precio era negociable, el plan que lo sostenía era negociable, y un plan negociable no es una opinión clínica.'),
            consequence: T('"That was quick." She writes it down — she is keeping a record of you now, the way she kept a record of him. Credibility collapses; the Phase 7 objection becomes a demand for more of exactly what you just gave her.', '«Qué rápido.» Lo apunta — ahora está llevando un registro de ti, igual que lo llevó de él. La credibilidad se desploma; la objeción de la Fase 7 se convierte en una petición de más de lo mismo que acabas de darle.'),
            nextPriority: T('When a client invites a discount, the invitation IS the diagnostic. Answer the invitation, not the number.', 'Cuando una clienta invita al descuento, la invitación ES el diagnóstico. Responde a la invitación, no a la cifra.')
          }
        },
        {
          id: 'und-reflect',
          label: T('Reflect the pattern back and ask what she is actually buying', 'Reflejar el patrón y preguntar qué está comprando en realidad'),
          language: T('Two clinics, one of which moved nine hundred euros in four seconds, and you kept the paperwork. So let me check I have this right: what are you actually trying to buy here?', 'Dos clínicas, una de las cuales se movió novecientos euros en cuatro segundos, y usted guardó el papel. Déjeme comprobar que lo he entendido: ¿qué está intentando comprar usted aquí en realidad?'),
          requiresRevealed: 'competitor_quotes',
          degradedLanguage: T('Can I ask what would actually make this decision for you?', '¿Puedo preguntarle qué decidiría esto realmente por usted?'),
          effects: { trust: { attention: 1, understanding: 1 }, willingness: 3, reveals: ['discount_test'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 1 },
          degradedNote: T('A reasonable question with nothing underneath it — "the best price for the best result, like everyone" — and she returns to the number. Reflection needs Discovery to feed it.', 'Una pregunta razonable sin nada debajo — «el mejor precio por el mejor resultado, como todo el mundo» — y vuelve a la cifra. El reflejo necesita que el Descubrimiento lo alimente.'),
          mirror: {
            signalDetected: T('A kept exhibit, a described climb-down, and an offer to let you repeat it.', 'Una prueba conservada, una rebaja descrita y una oferta para que la repitas.'),
            interpretation: T('Naming the pattern and asking what she is buying is the right question. Asking it as a clarification rather than as a conclusion lets her answer it at half strength.', 'Nombrar el patrón y preguntar qué está comprando es la pregunta correcta. Hacerla como aclaración en vez de como conclusión le permite responder a media potencia.'),
            principle: J(std(2), L('; ', '; '), stage('understanding'), L('; Phase 4 objective.', '; objetivo de la Fase 4.')),
            learnerDid: T('You put the pattern in front of her and let her decide how much of it to explain.', 'Le pusiste el patrón delante y dejaste que ella decidiera cuánto explicar.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('The question is right; asking it in a register she can answer commercially lets her answer commercially.', 'La pregunta es la correcta; hacerla en un registro que ella puede responder comercialmente hace que responda comercialmente.'),
            consequence: T('"Judgement, I suppose. I can buy equipment anywhere." A shrug. "And I will admit I have been asking the price rather a lot, to see what happens to it." The test is named — briskly, as an aside, without the reason attached.', '«Criterio, supongo. Aparatos los compro en cualquier sitio.» Se encoge de hombros. «Y reconozco que llevo preguntando el precio bastante a menudo, para ver qué le pasa.» La prueba queda nombrada — con ligereza, de pasada, sin el motivo detrás.'),
            nextPriority: T('She has admitted the test. Now find out what it is protecting her from.', 'Ha reconocido la prueba. Ahora averigua de qué la está protegiendo.')
          }
        },
        {
          id: 'und-name',
          label: T('Name the test out loud and answer it with conduct, not argument', 'Nombrar la prueba en voz alta y responderla con conducta, no con argumentos'),
          language: T('No. And I want to be exact about what I am declining, because I think it is the actual subject of this meeting. You are not asking me to be cheaper — you wrote "I would rather pay more than be managed" in your own handwriting. You are asking whether my number is a number. It is 3.400 €, it was 3.400 € before you sat down, it will be 3.400 € if you walk out, and if you come back in March it will be 3.400 €. I am not matching him. The difference between me and him is not four hundred euros, it is that four hundred euros cannot buy anything from me.', 'No. Y quiero ser exacta sobre lo que estoy rechazando, porque creo que es el verdadero asunto de esta reunión. Usted no me está pidiendo que sea más barata — escribió de su puño y letra «prefiero pagar más que ser gestionada». Me está preguntando si mi cifra es una cifra. Son 3.400 €, eran 3.400 € antes de que usted se sentara, serán 3.400 € si se marcha, y si vuelve en marzo serán 3.400 €. No lo igualo. La diferencia entre él y yo no son cuatrocientos euros: es que cuatrocientos euros no me compran nada.'),
          requiresRevealed: 'competitor_quotes',
          degradedLanguage: T('I\'m not going to match another clinic\'s price. My figure is my figure.', 'No voy a igualar el precio de otra clínica. Mi cifra es mi cifra.'),
          effects: { trust: { safety: 1, understanding: 2, credibility: 1, alignment: 1 }, willingness: 5, posture: 'open', objectionIntensity: 1, reveals: ['discount_test'] },
          degradedEffects: { trust: { credibility: 1 }, willingness: 1 },
          degradedNote: T('Firmness with no diagnosis behind it — "fine, then we are done" — she cannot tell the difference between principle and stubbornness, because you have not shown her that you know what she is testing. Holding a price only works once you can say what the price is for.', 'Firmeza sin diagnóstico detrás — «bien, pues hemos terminado» — no puede distinguir principio de cabezonería, porque no le has demostrado que sabes qué está poniendo a prueba. Sostener un precio solo funciona cuando puedes decir para qué es el precio.'),
          mirror: {
            signalDetected: T('"Match him and save us both the speech" — an offered concession, from a client whose own form says she would rather pay more than be managed.', '«Iguálelo y nos ahorramos los dos el discurso» — una concesión ofrecida, por una clienta cuyo propio formulario dice que prefiere pagar más que ser gestionada.'),
            interpretation: T('You reflected the contradiction back to her in her own handwriting and then answered it with behaviour instead of rhetoric. Naming the price four times, unchanged, across four hypothetical futures, is the proof — the words are almost irrelevant.', 'Le devolviste la contradicción con su propia letra y luego la respondiste con conducta en lugar de retórica. Nombrar el precio cuatro veces, sin moverlo, en cuatro futuros hipotéticos, es la prueba — las palabras casi dan igual.'),
            principle: J(std(2), L('; ', '; '), std(3), L('; ', '; '), duty(4), L('; ', '; '), stage('understanding'), L('.', '.')),
            learnerDid: T('You declined a sale in the sentence where you diagnosed why it was offered.', 'Rechazaste una venta en la misma frase en la que diagnosticaste por qué te la ofrecían.'),
            alignment: 'ALIGNED',
            why: T('Understanding is demonstrated, not claimed. With a client who tests conduct, the only demonstration that counts is conduct under a cost — and you just accepted the cost in front of her.', 'La comprensión se demuestra, no se declara. Con una clienta que pone a prueba la conducta, la única demostración que cuenta es la conducta con un coste — y acabas de aceptar el coste delante de ella.'),
            consequence: T('A long silence, and then she laughs once, without much humour. "Yes. That is what I was asking." (beat) "He dropped nine hundred euros and I realised I had no idea which of his two numbers was the honest one — so I couldn\'t trust anything else he had told me either. I have been asking every clinic the same question since." The test is on the table, with its reason.', 'Un silencio largo, y luego se ríe una vez, sin mucho humor. «Sí. Eso era lo que estaba preguntando.» (pausa) «Bajó novecientos euros y me di cuenta de que no tenía ni idea de cuál de sus dos cifras era la honesta — así que tampoco podía fiarme de nada más de lo que me había dicho. Desde entonces le hago la misma pregunta a todas las clínicas.» La prueba está sobre la mesa, con su motivo.'),
            nextPriority: T('You have passed the first test by holding. Now earn the number by showing what is inside it.', 'Has pasado la primera prueba sosteniendo. Ahora gánate la cifra enseñando qué hay dentro de ella.')
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
        source: 'Isabel',
        quote: cs.revealed.includes('discount_test')
          ? T('"All right. Then tell me what is inside 3.400 € that is not inside 2.900 €. And I would like it itemised, because that is how I read everything."', '«De acuerdo. Entonces dígame qué hay dentro de 3.400 € que no haya dentro de 2.900 €. Y me gustaría desglosado, porque así leo yo todo.»')
          : T('"Explain the difference, then. Although I should warn you that everyone explains the difference, and it always comes out at exactly the price they were already charging."', '«Explíqueme la diferencia, entonces. Aunque le advierto que todo el mundo explica la diferencia, y siempre sale exactamente al precio que ya cobraba.»'),
        subtext: T('Phase 5 is where the number stops being a number. With a litigator the trap inside it is comparison: the moment you explain your value by reference to someone else\'s quote, you are arguing their case on their terms.', 'La Fase 5 es donde la cifra deja de ser una cifra. Con una litigante, la trampa que contiene es la comparación: en el momento en que explicas tu valor por referencia al presupuesto ajeno, estás defendiendo su caso en sus términos.')
      };
    },
    decision: {
      prompt: T('Phase 5 objective: educate so she can evaluate — a 3.400 € plan against two cheaper quotes. What do you explain?', 'Objetivo de la Fase 5: educar para que pueda evaluar — un plan de 3.400 € frente a dos presupuestos más baratos. ¿Qué explicas?'),
      options: [
        {
          id: 'edu-compare',
          label: T('Explain why the other two quotes are worse value', 'Explicar por qué los otros dos presupuestos son peor relación calidad-precio'),
          language: T('At 2.900 € somebody is cutting something — usually the product volume, sometimes the review appointments, sometimes the practitioner. I can tell you exactly what you are not getting for that money, and it is quite a list.', 'Por 2.900 € alguien está recortando algo — normalmente la cantidad de producto, a veces las revisiones, a veces el profesional. Puedo decirle exactamente qué no le están dando por ese dinero, y es una lista larga.'),
          effects: { trust: { alignment: -1, credibility: -1 }, willingness: 6, flags: { arguedComparison: true } },
          mirror: {
            signalDetected: T('An explicit invitation to compare yourself to two named quotes, from a professional advocate.', 'Una invitación explícita a compararte con dos presupuestos concretos, formulada por una profesional del litigio.'),
            interpretation: T('You accepted her framing and argued the other side\'s case. Everything you say about them is now unverifiable by her and self-serving from her point of view — and you have taught her that the difference between clinics is a matter of what gets cut, which is an argument she can win by choosing the cheapest.', 'Aceptaste su marco y defendiste el caso de la parte contraria. Todo lo que digas sobre ellos es ya inverificable para ella e interesado desde su punto de vista — y le has enseñado que la diferencia entre clínicas es cuestión de qué se recorta, un argumento que ella gana eligiendo la más barata.'),
            principle: J(std(3), L('; ', '; '), duty(4), L('; ', '; '), std(5), L('.', '.')),
            learnerDid: T('You disparaged two absent practitioners instead of describing your own work.', 'Desacreditaste a dos profesionales ausentes en lugar de describir tu propio trabajo.'),
            alignment: 'NOT ALIGNED',
            why: T('Credibility built by comparison depends entirely on her believing your account of someone she met and you did not. It is the weakest possible foundation, and she notices.', 'La credibilidad construida por comparación depende por completo de que ella crea tu versión sobre alguien a quien conoció ella y tú no. Es el cimiento más débil posible, y ella se da cuenta.'),
            consequence: T('"You are the third person to tell me the other two are cutting corners." She writes that down too. Alignment falls; the objection ahead becomes a comparison you cannot win.', '«Es la tercera persona que me dice que los otros dos recortan.» También lo apunta. La alineación cae; la objeción que viene se convierte en una comparación que no puedes ganar.'),
            nextPriority: T('Describe your own standard so precisely that the comparison makes itself — and never name the competitor.', 'Describe tu propio estándar con tanta precisión que la comparación se haga sola — y no nombres jamás al competidor.')
          }
        },
        {
          id: 'edu-mechanism',
          label: T('Explain the three mechanisms and why the order matters', 'Explicar los tres mecanismos y por qué importa el orden'),
          language: T('Three areas, three different biological problems. Skin quality is a surface and pigment problem and it runs over months. Mid-face volume is structural and it is what actually makes you read as tired. The perioral lines are the last thing to treat, not the first, because treating them before the mid-face just moves the shadow. The order is most of the result.', 'Tres zonas, tres problemas biológicos distintos. La calidad de piel es un asunto de superficie y pigmento y se desarrolla a lo largo de meses. El volumen del tercio medio es estructural y es lo que de verdad hace que se la lea cansada. El código de barras se trata al final, no al principio, porque tratarlo antes del tercio medio solo desplaza la sombra. El orden es la mayor parte del resultado.'),
          effects: { trust: { credibility: 1, reliability: 1 }, willingness: 4 },
          mirror: {
            signalDetected: T('"Tell me what is inside the number" — a request for substance, phrased as an audit.', '«Dígame qué hay dentro de la cifra» — una petición de sustancia, formulada como auditoría.'),
            interpretation: T('Explaining sequence as clinical logic is real education, and it is the correct answer to the question she asked out loud. It does not yet answer the question she asked in writing: what she is paying for that is not a product.', 'Explicar la secuencia como lógica clínica es educación real, y es la respuesta correcta a la pregunta que hizo en voz alta. Todavía no responde a la pregunta que hizo por escrito: qué está pagando que no sea un producto.'),
            principle: J(std(3), L('; ', '; '), stage('credibility'), L('; Phase 5 objective.', '; objetivo de la Fase 5.')),
            learnerDid: T('You taught her the clinical architecture and left the value question unanswered.', 'Le enseñaste la arquitectura clínica y dejaste sin responder la pregunta del valor.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Sequencing is a real differentiator and it is also something every clinic claims. Without a named trade-off it is a brochure sentence delivered well.', 'La secuencia es un diferenciador real y también algo que toda clínica dice tener. Sin una contrapartida nombrada, es una frase de folleto bien dicha.'),
            consequence: T('"That is the first clinical sentence anyone has said to me." Credibility and reliability rise. She still has not been told what she gives up.', '«Es la primera frase clínica que me dice alguien.» Suben credibilidad y fiabilidad. Todavía no le han dicho a qué renuncia.'),
            nextPriority: T('Say what the 3.400 € cannot do, and what she is giving up by paying it.', 'Di qué no puede hacer los 3.400 €, y a qué renuncia ella al pagarlos.')
          }
        },
        {
          id: 'edu-trade',
          label: T('Itemise the number honestly — including what it does not buy', 'Desglosar la cifra con honestidad — incluido lo que no compra'),
          language: T('Itemised, then, including the part that argues against me. 3.400 € buys three mechanisms sequenced over about seven months, the product volumes that sequence actually requires, four review appointments where I may tell you to stop, and a written plan with the dates fixed. What it does not buy: it does not buy surgery, so the jawline will improve and it will not be redrawn. It does not buy permanence — at fifty-one this is maintained or it regresses, and the maintenance is roughly a third of this figure each year, which I would rather you hear now than in eighteen months. And the honest part: for about 1.900 € I could do the mid-face alone, and for a lot of people that is eighty per cent of the visible change. What you are paying the extra 1.500 € for is the other twenty per cent and the fact that the three things are planned against each other instead of bought separately. If that twenty per cent is not worth 1.500 € to you, then the smaller plan is the right plan and I will say so in writing.', 'Desglosado, entonces, incluida la parte que juega en mi contra. 3.400 € compran tres mecanismos secuenciados a lo largo de unos siete meses, las cantidades de producto que esa secuencia exige de verdad, cuatro revisiones en las que puedo decirle que paremos, y un plan escrito con las fechas cerradas. Lo que no compran: no compran cirugía, así que el óvalo mejorará y no se redibujará. No compran permanencia — a los cincuenta y uno esto se mantiene o retrocede, y el mantenimiento ronda un tercio de esta cifra al año, y prefiero que lo oiga hoy y no dentro de dieciocho meses. Y la parte honesta: por unos 1.900 € podría hacer solo el tercio medio, y para mucha gente eso es el ochenta por ciento del cambio visible. Los 1.500 € de diferencia los paga usted por el veinte por ciento restante y por el hecho de que las tres cosas estén planificadas unas contra otras en lugar de compradas por separado. Si ese veinte por ciento no le vale 1.500 €, entonces el plan pequeño es el plan correcto y se lo diré por escrito.'),
          requiresRevealed: 'discount_test',
          degradedLanguage: T('I should be honest about the limits: this is not surgery, it is maintained rather than permanent, and a smaller plan would give you most of the visible change.', 'Debo ser honesta con los límites: esto no es cirugía, se mantiene en lugar de ser permanente, y un plan más pequeño le daría la mayor parte del cambio visible.'),
          effects: { trust: { credibility: 2, reliability: 1 }, willingness: 5, flags: { valueStructure: true } },
          degradedEffects: { trust: { credibility: 1 }, willingness: 2 },
          degradedNote: T('The right sentences, spoken to a client who has not told you what she is testing — "so the real price is 1.900 €" and she is back in the negotiation. An honest ceiling only builds credibility once the client has told you what honesty is worth to her.', 'Las frases correctas, dichas a una clienta que no te ha contado qué está poniendo a prueba — «entonces el precio real son 1.900 €» y vuelve a la negociación. Un techo honesto solo construye credibilidad cuando la clienta ya te ha dicho qué vale para ella la honestidad.'),
          mirror: {
            signalDetected: T('"Itemised, because that is how I read everything" — a request for a document, not a pitch, from someone who reads documents professionally.', '«Desglosado, porque así leo yo todo» — una petición de documento, no de argumentario, de alguien que lee documentos por profesión.'),
            interpretation: T('You put the cheaper option inside your own explanation and attached a real number to it. That is the single most expensive sentence available in this case, and it is the only one that answers what she is actually testing: whether your figure is built or asserted.', 'Metiste la opción barata dentro de tu propia explicación y le pusiste una cifra real. Es la frase más cara disponible en este caso, y la única que responde a lo que ella pone a prueba de verdad: si tu cifra está construida o simplemente afirmada.'),
            principle: J(std(3), L('; ', '; '), std(5), L('; ', '; '), duty(4), L('; ', '; '), stage('credibility'), L('.', '.')),
            learnerDid: T('You argued against your own plan with a specific figure, in front of a client who was waiting to see whether you would.', 'Argumentaste en contra de tu propio plan con una cifra concreta, ante una clienta que estaba esperando a ver si lo hacías.'),
            alignment: 'ALIGNED',
            why: T('A number you are willing to reason downward in public is a number you did not invent. This is the difference between holding a price and defending one — and she is the only client in the curriculum who can tell them apart.', 'Una cifra que estás dispuesta a razonar a la baja en público es una cifra que no te inventaste. Esta es la diferencia entre sostener un precio y defenderlo — y ella es la única clienta del programa capaz de distinguirlos.'),
            consequence: T('She stops writing. "You have just told me how to spend 1.500 € less with you, having refused to take four hundred off. That is either very stupid or the only coherent thing I have heard in five weeks." Credibility and reliability rise sharply.', 'Deja de escribir. «Acaba de decirme cómo gastarme 1.500 € menos con usted, después de haberse negado a quitar cuatrocientos. Eso o es muy tonto o es lo único coherente que he oído en cinco semanas.» Credibilidad y fiabilidad suben con fuerza.'),
            nextPriority: T('The structure is built. Now recommend inside it — and do not add back what you just took out.', 'La estructura está construida. Recomienda ahora dentro de ella — y no vuelvas a añadir lo que acabas de quitar.')
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
      if (cs.flags.valueStructure) {
        return {
          source: 'Isabel',
          quote: T('"So. Knowing all of that — what do you actually recommend? Not what I can afford. What you would write down if you had to sign it."', '«Bien. Sabiendo todo eso — ¿qué me recomienda de verdad? No lo que puedo pagar. Lo que usted pondría por escrito si tuviera que firmarlo.»'),
          subtext: T('The invitation to recommend, with her own standard attached: something you would put your name to. She has stopped negotiating and started instructing.', 'La invitación a recomendar, con su propio criterio incorporado: algo que firmarías. Ha dejado de negociar y ha empezado a instruir.')
        };
      }
      return {
        source: 'Isabel',
        quote: T('"Right — what is the final figure, and is there anything you can do on it? There is usually something."', '«Bien — ¿cuál es la cifra final, y puede hacer algo con ella? Siempre suele poder hacerse algo.»'),
        subtext: T('Still a negotiation, because nothing has yet been built that could replace one. Whatever you recommend now will be read as an opening position.', 'Sigue siendo una negociación, porque todavía no se ha construido nada que pueda sustituirla. Recomiendes lo que recomiendes, se leerá como posición de partida.')
      };
    },
    decision: {
      prompt: T('Phase 6 objective: a recommendation traceable to what she actually said. What do you recommend?', 'Objetivo de la Fase 6: una recomendación trazable a lo que ella dijo de verdad. ¿Qué recomiendas?'),
      options: [
        {
          id: 'rec-discount',
          label: T('Recommend the full plan and close the gap with a goodwill reduction', 'Recomendar el plan completo y cerrar la diferencia con un gesto comercial'),
          language: T('The full three-area plan, 3.400 € — and look, because you have been straight with me, let me do 3.100 € and include the first review. That puts us within two hundred of the others and I think you can see the difference is worth that.', 'El plan completo de tres zonas, 3.400 € — y mire, ya que ha sido franca conmigo, se lo dejo en 3.100 € e incluyo la primera revisión. Eso nos pone a doscientos euros de los otros y creo que ve usted que la diferencia lo vale.'),
          effects: { trust: { credibility: -2, alignment: -1 }, willingness: 7, objectionIntensity: 3, flags: { concessionOffered: true, oversold: true } },
          mirror: {
            signalDetected: T('A client who is deciding, met with a reduction she did not ask for at the exact moment she was about to accept the figure.', 'Una clienta que está decidiendo, a la que se le ofrece una rebaja que no pidió justo en el momento en que iba a aceptar la cifra.'),
            interpretation: T('An unrequested discount is worse than a requested one. It says the number was padded, and it says you were prepared to take more from her than the work is worth if she had not pushed — which is precisely the accusation she came in holding against clinic B.', 'Un descuento no solicitado es peor que uno pedido. Dice que la cifra estaba inflada, y dice que estabas dispuesta a cobrarle más de lo que vale el trabajo si ella no hubiera apretado — que es exactamente la acusación con la que llegó contra la clínica B.'),
            principle: J(std(4), L(' violated; ', ' incumplido; '), std(3), L(' violated; ', ' incumplido; '), duty(4), L(' violated.', ' incumplido.')),
            learnerDid: T('You discounted a price nobody had challenged, in the moment of decision.', 'Rebajaste un precio que nadie había cuestionado, en el momento de la decisión.'),
            alignment: 'NOT ALIGNED',
            why: T('If 3.100 € is a fair price today then 3.400 € was not one an hour ago. She will hold both figures side by side for the rest of the relationship, exactly as she has held clinic B\'s.', 'Si 3.100 € es un precio justo hoy, 3.400 € no lo era hace una hora. Ella sostendrá las dos cifras una al lado de la otra durante el resto de la relación, exactamente como sostiene las de la clínica B.'),
            consequence: T('"There it is." She says it almost gently. Credibility collapses; alignment falls; the Phase 7 objection becomes a demand for the rest of the discount you have just admitted exists.', '«Ahí está.» Lo dice casi con dulzura. La credibilidad se desploma; la alineación cae; la objeción de la Fase 7 se convierte en una petición del resto del descuento cuya existencia acabas de reconocer.'),
            nextPriority: T('A price you would reduce to close is a price you should not have quoted.', 'Un precio que rebajarías para cerrar es un precio que no deberías haber dado.')
          }
        },
        {
          id: 'rec-tiers',
          label: T('Recommend the full plan, with the smaller plan beside it at full price', 'Recomendar el plan completo, con el plan pequeño al lado y a precio íntegro'),
          language: T('Two plans, both priced properly and neither of them a discount on the other. The full sequence, 3.400 €, seven months. Or the mid-face alone, 1.900 €, three months, which is the majority of the visible change. Same standard, same review schedule, different scope. Choose on scope, not on price — and if you choose the smaller one I am not going to try to upgrade you in month two.', 'Dos planes, los dos con su precio correcto y ninguno un descuento del otro. La secuencia completa, 3.400 €, siete meses. O solo el tercio medio, 1.900 €, tres meses, que es la mayor parte del cambio visible. Mismo estándar, mismo calendario de revisiones, distinto alcance. Elija por alcance, no por precio — y si elige el pequeño, no voy a intentar ampliárselo en el mes dos.'),
          effects: { trust: { alignment: 1, reliability: 1 }, willingness: 4 },
          mirror: {
            signalDetected: T('A client asking for a final figure, who has spent five weeks being offered movement on figures.', 'Una clienta que pide una cifra final, y que lleva cinco semanas recibiendo ofertas de movimiento sobre cifras.'),
            interpretation: T('Two plans at two honest prices is a genuine structure and it protects her autonomy — she now has a real choice that is not a negotiation. It stops short of being a recommendation, which is what she asked for.', 'Dos planes con dos precios honestos es una estructura real y protege su autonomía — ahora tiene una elección verdadera que no es una negociación. Se queda corta como recomendación, que es lo que ella pidió.'),
            principle: J(std(4), L('; ', '; '), duty(2), L('; ', '; '), std(5), L('.', '.')),
            learnerDid: T('You gave her a choice without telling her which one you would choose.', 'Le diste una elección sin decirle cuál elegirías tú.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Options respect autonomy; a recommendation carries risk. She asked you to take the risk, and you handed the decision back instead.', 'Las opciones respetan la autonomía; una recomendación asume riesgo. Ella te pidió que asumieras el riesgo, y tú le devolviste la decisión.'),
            consequence: T('"Both at full price. Good." Alignment and reliability rise. Then: "But I asked what you recommend." The plan is defensible; it is not yet an opinion.', '«Los dos a precio íntegro. Bien.» Suben alineación y fiabilidad. Y luego: «Pero le he preguntado qué recomienda usted.» El plan es defendible; todavía no es una opinión.'),
            nextPriority: T('Say which one you would sign, and say why, in her words.', 'Di cuál firmarías tú, y di por qué, con sus palabras.')
          }
        },
        {
          id: 'rec-named',
          label: T('Recommend the smaller plan, at full price, and name what you are declining', 'Recomendar el plan pequeño, a precio íntegro, y nombrar lo que rechazas'),
          language: T('If I had to sign it: the mid-face alone. 1.900 €, three months, no discount and no package. What I am deliberately not recommending is the perioral work and the skin-quality course, and I want to be specific about why rather than vague about it — you said you look adversarial in meetings, and that is the mid-face shadow, not the lines around your mouth. Treating the lines would cost you another 1.500 € and change something nobody across a table has ever noticed. I would rather send you away having spent 1.900 € on the thing you actually described than 3.400 € on the thing you asked for. If in six months you want the rest, it will still be 1.500 €, and I will still tell you honestly whether you need it.', 'Si tuviera que firmarlo: solo el tercio medio. 1.900 €, tres meses, sin descuento y sin paquete. Lo que deliberadamente no le recomiendo es el trabajo perioral ni la pauta de calidad de piel, y quiero ser concreta con el porqué en vez de vaga — usted dijo que parece hostil en las reuniones, y eso es la sombra del tercio medio, no las líneas de alrededor de la boca. Tratar esas líneas le costaría otros 1.500 € y cambiaría algo que nadie ha notado nunca al otro lado de una mesa. Prefiero que se vaya habiéndose gastado 1.900 € en lo que describió de verdad que 3.400 € en lo que vino a pedir. Si dentro de seis meses quiere el resto, seguirá costando 1.500 €, y seguiré diciéndole con honestidad si lo necesita.'),
          requiresRevealed: 'discount_test',
          degradedLanguage: T('I\'d recommend the mid-face alone at 1.900 € rather than the full plan, and reviewing after three months.', 'Le recomendaría solo el tercio medio por 1.900 € en lugar del plan completo, y revisar a los tres meses.'),
          effects: { trust: { alignment: 2, reliability: 1, credibility: 1 }, willingness: 6, flags: { valueStructure: true } },
          degradedEffects: { trust: { alignment: 1 }, willingness: 2 },
          degradedNote: T('A smaller plan with none of HER in it — "so the answer to my price question was a cheaper plan after all". Without her own words attached, recommending less reads as the discount she was testing for, arriving by another route.', 'Un plan más pequeño sin nada de ELLA dentro — «o sea que la respuesta a mi pregunta sobre el precio era, después de todo, un plan más barato». Sin sus propias palabras detrás, recomendar menos se lee como el descuento que ella estaba buscando, llegando por otro camino.'),
          mirror: {
            signalDetected: T('"What you would write down if you had to sign it" — she asked for your professional exposure, not your inventory.', '«Lo que usted pondría por escrito si tuviera que firmarlo» — te pidió tu exposición profesional, no tu catálogo.'),
            interpretation: T('You recommended 1.500 € less than she came to buy, at full price, and traced it to her own sentence about meetings. The money you declined is the evidence that the money you asked for is real — and it is the opposite of a discount, because the standard did not move, the scope did.', 'Recomendaste 1.500 € menos de lo que vino a comprar, a precio íntegro, y lo trazaste a su propia frase sobre las reuniones. El dinero que rechazaste es la prueba de que el dinero que pides es real — y es lo contrario de un descuento, porque no se movió el estándar, se movió el alcance.'),
            principle: J(std(4), L('; ', '; '), duty(1), L('; ', '; '), duty(2), L('; ', '; '), stage('alignment'), L('.', '.')),
            learnerDid: T('You cut the scope without cutting the price, and attributed the cut to what she told you about her work.', 'Recortaste el alcance sin recortar el precio, y atribuiste el recorte a lo que ella te contó sobre su trabajo.'),
            alignment: 'ALIGNED',
            why: T('A negotiator can only be answered by conduct. Refusing four hundred euros and then volunteering fifteen hundred is the only sequence that proves the number was never about the money.', 'A quien negocia solo se le puede responder con conducta. Negarse a cuatrocientos euros y después ofrecer mil quinientos es la única secuencia que demuestra que la cifra nunca fue una cuestión de dinero.'),
            consequence: T('A long pause. "You would not take four hundred off, and you have just taken fifteen hundred off yourself." She almost smiles. "That is the answer to my question." Alignment +2.', 'Una pausa larga. «No quiso quitar cuatrocientos, y acaba de quitarse mil quinientos usted sola.» Casi sonríe. «Esa es la respuesta a mi pregunta.» Alineación +2.'),
            nextPriority: T('Do not add anything back. Now let her decide, including deciding against you.', 'No vuelvas a añadir nada. Ahora deja que decida, incluso que decida en tu contra.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a4 = artifacts['4'];
      if (!a4 || !a4.valid) {
        return { canAdvance: false, reason: T('Toolkit #4 (MIRROR Recommendation Builder) must be completed before Phase 7.', 'El Toolkit #4 (Constructor de Recomendación MIRROR) debe completarse antes de la Fase 7.') };
      }
      const a5 = artifacts['5'];
      if (!a5 || !a5.valid) {
        return { canAdvance: false, reason: T('Toolkit #5 (Price & Value Presentation Planner) must be completed before Phase 7. With this client the order of the value fields is the consultation.', 'El Toolkit #5 (Planificador de Presentación de Precio y Valor) debe completarse antes de la Fase 7. Con esta clienta, el orden de los campos de valor es la consulta.') };
      }
      return { canAdvance: true };
    }
  },

  // ===================== PHASE 7 — DECISION SUPPORT =======================
  decisionSupport: {
    key: 'decisionSupport', toolkit: 6,
    signal(cs) {
      // MATERIAL BRANCHING: which objection appears is determined by prior state.
      if (cs.flags.concessionOffered) {
        return {
          source: 'Isabel',
          objectionVariant: 'DISCOUNT',
          intensity: 3,
          quote: T('"You have already moved once, so let us not pretend. Make it 2.750 € and I will sign today. And if you can do 2.750 €, I would quite like to know what the first number was for."', '«Ya se ha movido una vez, así que no disimulemos. Déjelo en 2.750 € y firmo hoy. Y si puede hacer 2.750 €, me gustaría bastante saber para qué era la primera cifra.»'),
          subtext: T('Highest intensity, and it is entirely manufactured — you created this objection yourself the moment you conceded. Note the second sentence: she does not want the discount, she wants you to answer for it. Surface = price; underlying = your figure was never real and she is now auditing you.', 'Intensidad máxima, y es enteramente fabricada — creaste tú misma esta objeción en el momento en que cediste. Fíjate en la segunda frase: no quiere el descuento, quiere que respondas por él. Superficie = precio; fondo = tu cifra nunca fue real y ahora te está auditando.')
        };
      }
      if (cs.flags.valueStructure) {
        return {
          source: 'Isabel',
          objectionVariant: 'VALUE',
          intensity: 1,
          quote: T('"One question, and it is a real one, not a tactic. You have told me the mid-face is eighty per cent of it. If that is true, why does anyone pay you 3.400 €? I want to know whether I am buying the right thing or the thing you are most sure about."', '«Una pregunta, y es una pregunta de verdad, no una táctica. Me ha dicho que el tercio medio es el ochenta por ciento. Si eso es cierto, ¿por qué le paga alguien 3.400 €? Quiero saber si estoy comprando lo correcto o lo que usted tiene más claro.»'),
          subtext: T('Lowest intensity. This is a genuine value question from a client who has stopped testing and started deciding. Surface = the logic of your own pricing; underlying = she wants to be sure the recommendation was about her and not about your confidence.', 'Intensidad mínima. Es una pregunta de valor genuina de una clienta que ha dejado de poner a prueba y ha empezado a decidir. Superficie = la lógica de tu propia tarifa; fondo = quiere asegurarse de que la recomendación fue sobre ella y no sobre tu seguridad.')
        };
      }
      return {
        source: 'Isabel',
        objectionVariant: 'COMPARISON',
        intensity: 2,
        quote: T('"I still have 2.900 € in my bag for what I am told is the same three areas. You have given me reasons. He gave me reasons too. What I do not have from either of you is a way of telling the difference — so on the evidence I have, I should take the cheaper one, shouldn\'t I?"', '«Sigo teniendo 2.900 € en el bolso por lo que me dicen que son las mismas tres zonas. Usted me ha dado razones. Él también me dio razones. Lo que no tengo de ninguno de los dos es una manera de distinguirlos — así que, con las pruebas que tengo, debería quedarme con el más barato, ¿no?»'),
        subtext: T('Mid-intensity. The value structure was never built, so the only axis left is price and she is applying it correctly. Surface = comparison; underlying = nothing in this consultation gave her a way to tell two quotes apart.', 'Intensidad media. La estructura de valor nunca se construyó, así que el único eje que queda es el precio y lo está aplicando correctamente. Superficie = comparación; fondo = nada en esta consulta le ha dado una forma de distinguir dos presupuestos.')
      };
    },
    decision: {
      prompt: T('Phase 7 objective: explore the objection and support her pace. Note: the objection you are facing was determined by your earlier choices.', 'Objetivo de la Fase 7: explorar la objeción y acompañar su ritmo. Ojo: la objeción a la que te enfrentas la determinaron tus decisiones anteriores.'),
      options: [
        {
          id: 'dec-concede',
          label: T('Split the difference and close it today', 'Partir la diferencia y cerrarlo hoy'),
          language: T('Let\'s not lose this over a few hundred euros — 2.800 €, today only, and I\'ll throw in the first review free. You\'ve been straight with me and I want to be straight with you.', 'No perdamos esto por unos cientos de euros — 2.800 €, solo hoy, y le regalo la primera revisión. Ha sido franca conmigo y yo quiero serlo con usted.'),
          effects: { trust: { safety: -2, credibility: -2, alignment: -2, reliability: -1 }, willingness: -30, posture: 'withdrawn', objectionIntensity: 3 },
          mirror: {
            signalDetected: T('A price challenge at the decision point, from a client whose file says "I would rather pay more than be managed".', 'Un cuestionamiento del precio en el momento de decidir, de una clienta cuya ficha dice «prefiero pagar más que ser gestionada».'),
            interpretation: T('You did the exact thing that sent her out of clinic B, and you added a deadline to it. "Today only" converts the concession into pressure, so the two failures compound: the number was never real AND you are now managing her.', 'Hiciste exactamente lo que la echó de la clínica B, y además le pusiste plazo. «Solo hoy» convierte la concesión en presión, así que los dos fallos se suman: la cifra nunca fue real Y encima ahora la estás gestionando.'),
            principle: J(duty(2), L(' violated; ', ' incumplido; '), duty(4), L(' violated; ', ' incumplido; '), std(6), L(' violated; Phase 7 objective (\"support pace\", not close).', ' incumplido; objetivo de la Fase 7 («acompañar el ritmo», no cerrar).')),
            learnerDid: T('You answered an integrity question with a discount and a deadline.', 'Respondiste a una pregunta sobre integridad con un descuento y una fecha límite.'),
            alignment: 'NOT ALIGNED',
            why: T('This is the single largest failure available in the case. Everything she was testing for, she has now found — and manufactured urgency on top of it removes her autonomy in the same sentence.', 'Es el mayor fallo individual disponible en el caso. Todo lo que estaba buscando, lo acaba de encontrar — y la urgencia fabricada encima le retira la autonomía en la misma frase.'),
            consequence: T('"Thank you. That is very helpful." She stands, entirely pleasantly, and you never hear from her again. MATERIAL: willingness -30, posture withdrawn — the derived outcome moves to NO regardless of everything done well earlier.', '«Gracias. Me ha sido muy útil.» Se levanta, con toda cordialidad, y no vuelves a saber de ella. MATERIAL: disposición -30, postura retirada — el resultado derivado se desplaza al NO por bien que hicieras todo lo anterior.'),
            nextPriority: T('When the objection is about whether your number is real, any movement in the number is the answer "no".', 'Cuando la objeción va sobre si tu cifra es real, cualquier movimiento de la cifra es la respuesta «no».')
          }
        },
        {
          id: 'dec-hold',
          label: T('Hold the figure, hand her the decision, and take nothing today', 'Sostener la cifra, devolverle la decisión y no cobrar nada hoy'),
          language: T('The figure is the figure. 1.900 € for what I recommended, 3.400 € if you want the full sequence, and neither will be different next week. I\'m not taking a deposit and I\'m not holding a slot for you — if this is right it will still be right on Thursday, and if it isn\'t, the honest answer is one of the other two clinics or none of us.', 'La cifra es la cifra. 1.900 € por lo que le he recomendado, 3.400 € si quiere la secuencia completa, y ninguna de las dos será distinta la semana que viene. No le cobro señal ni le reservo hueco — si esto es lo correcto, seguirá siéndolo el jueves, y si no lo es, la respuesta honesta es otra de las dos clínicas, o ninguna de las tres.'),
          effects: { trust: { safety: 1, reliability: 1 }, willingness: 3 },
          mirror: {
            signalDetected: T('A challenge to the price, at the moment when conceding would be easiest and most profitable.', 'Un cuestionamiento del precio, en el momento en que ceder sería lo más fácil y lo más rentable.'),
            interpretation: T('Ch.14, Law 2: say the number and stop talking. Refusing a deposit removes the last instrument of pressure in the room. It protects her autonomy completely — it simply does not answer the question she is asking underneath.', 'Cap. 14, Ley 2: di la cifra y cállate. Negarse a cobrar señal retira el último instrumento de presión de la sala. Protege su autonomía por completo — solo que no responde a la pregunta que está haciendo por debajo.'),
            principle: J(std(5), L('; ', '; '), duty(2), L('; ', '; '), stage('reliability'), L('.', '.')),
            learnerDid: T('You kept the promise you made in Phase 2 and gave the decision back intact.', 'Cumpliste la promesa que hiciste en la Fase 2 y le devolviste la decisión intacta.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Holding is necessary and it is not sufficient. She has asked you a question — about comparison, about value, or about the discount you offered — and a held price is a posture, not an answer.', 'Sostener es necesario y no es suficiente. Ella te ha hecho una pregunta — sobre la comparación, sobre el valor o sobre el descuento que le ofreciste — y un precio sostenido es una postura, no una respuesta.'),
            consequence: T('"No deposit at all?" She looks at the door, then back. Safety and reliability rise; the reason she has been testing every clinic in the city stays in her handbag.', '«¿Ninguna señal?» Mira hacia la puerta, y luego vuelve a mirarte. Suben seguridad y fiabilidad; el motivo por el que lleva semanas poniendo a prueba a todas las clínicas de la ciudad se queda en su bolso.'),
            nextPriority: T('Holding is the posture. Now answer the question — and answer the injury underneath it.', 'Sostener es la postura. Ahora responde la pregunta — y responde a la herida que hay debajo.')
          }
        },
        {
          id: 'dec-injury',
          label: T('Answer the question, then name what the last clinic actually cost her', 'Responder la pregunta, y luego nombrar lo que de verdad le costó la última clínica'),
          language: T('Direct answer first: people pay 3.400 € when the mid-face alone leaves a mismatch they can see, and I do not think that is you — that is why I recommended 1.900 €, and it is why the figure did not move when you pushed it. Now the other thing. You have visited three clinics in five weeks and asked all three the same question. That is not shopping — that is checking. When he found nine hundred euros in four seconds, I do not think you lost nine hundred euros of trust in him; I think you lost your own ability to judge which of us is telling you the truth, and that is a far more expensive thing to lose. I cannot give it back to you with a sentence. I can only tell you that my number did not move, that I recommended less than you came for, and that you should go home and decide slowly, because a decision made under pressure is exactly the thing you have been avoiding for five weeks.', 'Primero la respuesta directa: la gente paga 3.400 € cuando el tercio medio por sí solo deja un desajuste que se les nota, y no creo que ese sea su caso — por eso le recomendé 1.900 €, y por eso la cifra no se movió cuando usted apretó. Y ahora lo otro. Ha visitado tres clínicas en cinco semanas y les ha hecho a las tres la misma pregunta. Eso no es comparar — es comprobar. Cuando él se encontró novecientos euros en cuatro segundos, no creo que usted perdiera novecientos euros de confianza en él; creo que perdió su propia capacidad de juzgar cuál de nosotros le está diciendo la verdad, y eso es muchísimo más caro de perder. No puedo devolvérsela con una frase. Solo puedo decirle que mi cifra no se movió, que le recomendé menos de lo que venía a comprar, y que se vaya a casa y decida despacio, porque una decisión tomada bajo presión es justo lo que lleva cinco semanas evitando.'),
          requiresRevealed: 'discount_test',
          degradedLanguage: T('Is it really the price, or is it that you no longer know who to believe?', '¿Es realmente el precio, o es que ya no sabe a quién creer?'),
          effects: { trust: { safety: 1, understanding: 1, reliability: 1, credibility: 1 }, willingness: 7, posture: 'resolved', objectionIntensity: 1, reveals: ['trust_injury'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 2 },
          degradedNote: T('"I believe whoever gives me the best price, obviously." Asked of a client who has told you nothing about the test, the question sounds like a rhetorical move — and she treats it as one. A diagnosis needs disclosed material underneath it.', '«Creo a quien me dé el mejor precio, evidentemente.» Hecha a una clienta que no te ha contado nada de la prueba, la pregunta suena a recurso retórico — y ella la trata como tal. Un diagnóstico necesita material revelado debajo.'),
          mirror: {
            signalDetected: T('A question about your pricing logic, asked by someone who has been auditing three clinics for five weeks.', 'Una pregunta sobre la lógica de tu tarifa, hecha por alguien que lleva cinco semanas auditando tres clínicas.'),
            interpretation: T('You answered the surface question in one sentence — which is what a litigator requires — and then named the underlying loss: not money, not even trust in him, but her confidence in her own judgement. That is the injury the whole negotiation has been built around.', 'Respondiste a la pregunta de superficie en una frase — que es lo que exige una litigante — y después nombraste la pérdida de fondo: no el dinero, ni siquiera la confianza en él, sino la confianza en su propio criterio. Esa es la herida sobre la que se ha construido toda la negociación.'),
            principle: J(std(2), L('; ', '; '), std(5), L('; ', '; '), duty(2), L('; ', '; '), stage('understanding'), L('.', '.')),
            learnerDid: T('You separated the surface objection from the underlying concern and then refused to exploit either.', 'Separaste la objeción de superficie de la preocupación de fondo y luego te negaste a explotar ninguna de las dos.'),
            alignment: 'ALIGNED',
            why: T('Toolkit #6 exists for exactly this: the surface objection and the underlying concern are rarely the same sentence. Here the surface is a price and the underlying is a woman who no longer trusts herself to tell professionals apart.', 'El Toolkit #6 existe exactamente para esto: la objeción de superficie y la preocupación de fondo rara vez son la misma frase. Aquí la superficie es un precio y el fondo es una mujer que ya no se fía de sí misma para distinguir a los profesionales.'),
            consequence: T('She is quiet for a while. "Twenty-six years of cross-examination and I have spent five weeks unable to work out who is lying to me about my own face." (beat) "You are the first one who has not asked me to decide today." The third hidden thing is in the room, and it is the one that decides whether she comes back.', 'Se queda callada un rato. «Veintiséis años interrogando testigos y llevo cinco semanas sin ser capaz de averiguar quién me está mintiendo sobre mi propia cara.» (pausa) «Es la primera que no me pide que decida hoy.» Lo tercero que estaba oculto está en la sala — y es lo que decide si vuelve.'),
            nextPriority: T('Whatever the Decision Engine derives now is legitimate. Protect it — and put the unchanged figure in writing before she leaves.', 'Lo que el Motor de Decisión derive ahora es legítimo. Protégelo — y deja la cifra sin cambiar por escrito antes de que se vaya.')
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
        quote: T('The consultation is over. With this client, the follow-up is admissible evidence: every message you send is compared against what you said in the room.', 'La consulta ha terminado. Con esta clienta, el seguimiento es prueba admisible: cada mensaje que envías se compara con lo que dijiste en la sala.'),
        subtext: T('Phase 8 is a canonical phase, not an epilogue. The one thing that destroys this relationship after the door closes is a follow-up message containing a better price — a "just for you" offer three days later undoes the entire consultation, and she will keep that message too.', 'La Fase 8 es una fase canónica, no un epílogo. Lo único que destruye esta relación una vez cerrada la puerta es un mensaje de seguimiento con un precio mejor — una oferta «solo para usted» tres días después deshace la consulta entera, y ella también guardará ese mensaje.')
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
      '"The mid-face, then. Nineteen hundred, full price, and I want it in writing that you refused to take four hundred euros off — because that is the only part of this I am actually paying for."',
      '«El tercio medio, entonces. Mil novecientos, precio íntegro, y quiero por escrito que usted se negó a quitar cuatrocientos euros — porque esa es la única parte de esto que estoy pagando de verdad.»'
    ),
    undisclosed: T(
      '"Fine. I\'ll take it. I still don\'t know whether your price is a price or a position, but you are the least irritating of the three."',
      '«Bien. Lo cojo. Sigo sin saber si su precio es un precio o una posición, pero es usted la menos irritante de las tres.»'
    )
  },
  DEFER: T(
    '"I\'m going to sit with it. Don\'t telephone me — the last clinic telephoned me twice and that is why they are the last clinic. I\'ll come back to you by Friday, one way or the other."',
    '«Me lo voy a pensar. No me llame — la última clínica me llamó dos veces y por eso es la última clínica. Le contesto el viernes, en un sentido o en otro.»'
  ),
  NO: T(
    '"No, thank you. You moved, and once the number moves I have no way of knowing what anything else you told me was worth. I\'d rather pay the higher figure to somebody who doesn\'t."',
    '«No, gracias. Usted se movió, y en cuanto la cifra se mueve no tengo forma de saber cuánto valía todo lo demás que me dijo. Prefiero pagarle la cifra más alta a alguien que no se mueva.»'
  )
};

// ---------------------------------------------------------------------------
// Case facts for the toolkit validators (scenario-aware honesty checks)
// ---------------------------------------------------------------------------
const caseFacts = {
  clientName: 'Isabel',
  motivationItem: 'discount_test',
  motiveRegex: /(discount|concession|negotiat|haggl|match(ing)? (the|his|a) (price|quote)|climb.?down|drop(ped)? (the )?price|price (held|hold|moved|move)|test(ing)?|integrity|trust|believe|judge?ment|other clinic|last clinic|second clinic|descuent|rebaj|concesi|negoci|regate|igualar|baj(ar|ó) el precio|prueba|probar|poner a prueba|integridad|confian|cre(er|ía)|criterio|otra clínica|otra clinica|última clínica|ultima clinica|segunda clínica|segunda clinica)/i,
  motiveIssue: T(
    'Isabel disclosed that the price questions are a test of whether your figure holds — after a clinic dropped nine hundred euros in four seconds and destroyed her ability to judge any of them. The map records a price-sensitivity or an appearance goal instead of that motive.',
    'Isabel reveló que las preguntas sobre el precio son una prueba para ver si tu cifra se sostiene — después de que una clínica bajara novecientos euros en cuatro segundos y destruyera su capacidad de juzgar a ninguna. El mapa registra sensibilidad al precio o un objetivo estético en lugar de ese motivo.'
  ),
  priorExperienceIssue: T(
    'Prior experience is blank. Isabel has no treatment history, but she has two recent consultations — one of which ended in an unrequested nine-hundred-euro reduction and two follow-up telephone calls. That is the prior experience the canvas must carry, and it is the risk Phase 7 will meet.',
    'La experiencia previa está en blanco. Isabel no tiene historial de tratamientos, pero sí dos consultas recientes — una de ellas terminada en una rebaja no solicitada de novecientos euros y dos llamadas de seguimiento. Esa es la experiencia previa que debe recoger el lienzo, y es el riesgo al que se enfrentará la Fase 7.'
  ),
  limitationIssue: T(
    'Field 6 states no limitation. A non-surgical full-face plan at 51 improves the mid-face shadow, does not redraw the jawline, and is maintained rather than permanent — with maintenance at roughly a third of the figure each year. An expectation with no ceiling is an overclaim (Ethical Duty 4), and with this client an unstated ceiling is read as the same softness as an unstated discount.',
    'El campo 6 no indica ninguna limitación. Un plan facial completo no quirúrgico a los 51 mejora la sombra del tercio medio, no redibuja el óvalo y se mantiene en lugar de ser permanente — con un mantenimiento de aproximadamente un tercio de la cifra al año. Una expectativa sin techo es una sobrepromesa (Deber Ético 4), y con esta clienta un techo no enunciado se lee con la misma blandura que un descuento no enunciado.'
  ),
  whyNowIssue: T(
    'You ticked "I understand why it matters now", but Isabel has not disclosed her real why-now. Repeated price questions are not disclosure — they are the test itself. Untick it or return to Discovery and ask why she kept the altered quote.',
    'Marcaste «Entiendo por qué le importa ahora», pero Isabel no ha revelado su verdadero porqué. Preguntar el precio una y otra vez no es revelación — es la prueba en sí. Desmárcalo o vuelve al Descubrimiento y pregúntale por qué guardó el presupuesto modificado.'
  ),
  undisclosedMotiveIssue: T(
    'MATERIAL: Isabel never disclosed a motive in this attempt — she negotiated instead. Recording "price sensitive" or "wants the best deal" as fact is not permitted, and in this case it is also wrong: her own form says she would rather pay more than be managed. Write "Not disclosed" and note what you would ask next time.',
    'MATERIAL: Isabel nunca reveló un motivo en este intento — se dedicó a negociar. Registrar «sensible al precio» o «busca la mejor oferta» como un hecho no está permitido y, en este caso, además es falso: su propio formulario dice que prefiere pagar más que ser gestionada. Escribe «No revelado» y anota qué preguntarías la próxima vez.'
  )
};

// Toolkit #8 draft rows for this case (Continuation Engine).
const followUpPack = {
  motivationItem: 'discount_test',
  yesRows: [
    'Send the written plan within two hours with the figure UNCHANGED and the date of the quote on it — the document is the proof, and she will file it beside the other two',
    'Confirm in writing what was deliberately NOT recommended and the price it would have been, so the declined scope is on the record rather than available as a later upsell',
    'State the maintenance cost per year in the same message as the treatment cost — never in a second message, which reads as a figure that was withheld',
    'Pre-session note: the price on the day will match the price on the plan to the euro; if anything changes clinically, the plan changes before the invoice does',
    'Review at the three-month point against her own sentence about meetings, not against a satisfaction score — and diarise the honest reassessment of whether she needs anything further at all'
  ],
  reviewNote: 'Never send this client a better price. A "just for you" offer after the consultation retroactively converts every honest sentence in it into a sales technique, and she keeps her correspondence. The follow-up must contain no new number, no expiring offer and no second telephone call — she told you in writing what the second call did to the last clinic. If she declines, close it in one message, name the other two clinics as legitimate choices, and stop.'
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
