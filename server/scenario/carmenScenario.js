/**
 * CASE 02 — CARMEN / INJECTABLES — 8-PHASE CANONICAL SCENARIO (bilingual EN/ES)
 *
 * Materially different from Case 01:
 *   - Entrance: armored/confident (book Ch.7), not reserved.
 *   - Core issue: identity fear — "I don't want to stop looking like myself."
 *   - Turning point 1 at PHASE 2 (honor the armor vs compete/flatter).
 *   - Turning point 2 at PHASE 4 (contradiction reflection).
 *   - Objection ladder: regret-fear (1) / spouse-authority (2) / identity refusal (3).
 *   - DEFER is the honest common ending; YES is narrow; NO can be a *good* NO.
 *
 * Provenance: The Beauty Sales Secrets — Ch.1 identity gap, Ch.4 Drives 1&4,
 * Ch.7 confident entrance, Ch.10 contradiction mirror, Ch.11 "you don't need
 * everything", Ch.12 authority objection, Ch.13 partnership close.
 * Canonical architecture unchanged (phases, stages, standards, duties, toolkits).
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
  name: 'Carmen Delgado',
  age: 51,
  presenting: T('Frown lines and marionette lines — consultation booked by her sister', 'Líneas de entrecejo y líneas de marioneta — consulta reservada por su hermana'),
  visibleGoal: T('"Soften the lines — IF I do anything at all"', '«Suavizar las líneas — SI es que hago algo»'),
  hiddenMotivation: T('Identity: her face is her professional signature. She fears looking "done" more than she dislikes the lines.', 'Identidad: su cara es su firma profesional. Teme parecer «retocada» más de lo que le molestan las líneas.'),
  emotionalConsequence: T('Fear of regret and of a change she cannot take back — sharpened by her husband\'s joke about "work done" faces.', 'Miedo al arrepentimiento y a un cambio irreversible — agravado por la broma de su marido sobre caras «retocadas».'),
  history: T('Walked out of another clinic last year when they printed a treatment plan before she sat down.', 'El año pasado se marchó de otra clínica cuando imprimieron un plan de tratamiento antes de que se sentara.'),
  entryRelationshipState: 'PROSPECTIVE'
};

const intake = {
  bookingNote: T('"Consultation re: frown lines / marionette lines. NOT sure I want anything done."', '«Consulta por líneas de entrecejo / marioneta. NO estoy segura de querer hacerme nada.»'),
  intakeForm: [
    T('Concern: frown lines + early marionette lines', 'Motivo: entrecejo + líneas de marioneta incipientes'),
    T('Booked by: her sister — "a birthday present"', 'Reservado por: su hermana — «un regalo de cumpleaños»'),
    T('Free-text note: "I want to still look like me. I\'ve seen what bad work looks like."', 'Nota libre: «Quiero seguir pareciéndome a mí. He visto cómo queda un mal trabajo.»'),
    T('Occupation: gallery director — "my face is how collectors know me"', 'Profesión: directora de galería — «los coleccionistas me conocen por mi cara»'),
    T('History: left a consultation elsewhere last year ("they printed a plan before I sat down")', 'Historial: abandonó una consulta el año pasado («imprimieron un plan antes de que me sentara»)'),
    T('No medical contraindications flagged', 'Sin contraindicaciones médicas señaladas')
  ],
  buriedSignals: ['identity_language', 'prior_consult_walkout']
};

// ---------------------------------------------------------------------------
function initialClientState() {
  return {
    trust: { safety: 0, attention: 0, understanding: 0, credibility: 0, alignment: 0, reliability: 0, confirmation: 0 },
    willingness: 45,
    posture: 'armored',
    objectionIntensity: 2,
    revealed: [],
    withheld: ['identity_fear', 'spouse_comment'],
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
          'Preparation Engine: this file predicts the whole consultation — an identity phrase, a walkout history, and a booking she did not make herself.',
          'Motor de Preparación: esta ficha anticipa toda la consulta — una frase de identidad, un abandono previo y una cita que no reservó ella misma.'
        )
      };
    },
    decision: {
      prompt: T('Four minutes before Carmen walks in. What do you do with this file?', 'Cuatro minutos antes de que entre Carmen. ¿Qué haces con esta ficha?'),
      options: [
        {
          id: 'prep-skim',
          label: T('Skim the concern and go in', 'Leer el motivo por encima y entrar'),
          language: T('Frown lines, early marionette. Standard toxin-plus-filler conversation.', 'Entrecejo, marioneta incipiente. Conversación estándar de toxina y relleno.'),
          effects: { trust: { credibility: -1 }, willingness: -4, flags: { prepared: 'minimal' } },
          mirror: {
            signalDetected: T('The file holds three signals beyond the lines: "still look like me", a walkout from a plan-printing clinic, and a sister who booked it.', 'La ficha contiene tres señales más allá de las líneas: «seguir pareciéndome a mí», un abandono de una clínica que imprimió un plan, y una hermana que reservó la cita.'),
            interpretation: T('Reading only the concern means preparing for a wrinkle conversation when the file predicts an identity conversation.', 'Leer solo el motivo es prepararse para una conversación de arrugas cuando la ficha anticipa una conversación de identidad.'),
            principle: J(duty(3), L('; Phase 1 objective.', '; objetivo de la Fase 1.')),
            learnerDid: T('You walked in ready to discuss product, not ready to meet a woman who left the last clinic that did exactly that.', 'Entraste lista para hablar de producto, no para recibir a una mujer que abandonó la última clínica que hizo exactamente eso.'),
            alignment: 'NOT ALIGNED',
            why: T('Competent practice includes knowing what she already told you in writing.', 'La práctica competente incluye saber lo que ella ya te dijo por escrito.'),
            consequence: T('Her armor will read your unpreparedness within a minute — credibility opens below baseline.', 'Su coraza detectará tu falta de preparación en un minuto — la credibilidad arranca por debajo de la línea base.'),
            nextPriority: T('Before every consultation, hunt the free-text for identity language and prior-clinic history.', 'Antes de cada consulta, busca en el texto libre lenguaje de identidad e historial con otras clínicas.')
          }
        },
        {
          id: 'prep-clinical',
          label: T('Prepare the injectables pathway only', 'Preparar solo la vía clínica de inyectables'),
          language: T('Conservative dosing plan for glabella, staged review, contraindications clear. Ready.', 'Plan de dosis conservadora para glabela, revisión escalonada, sin contraindicaciones. Lista.'),
          effects: { trust: { credibility: 1 }, flags: { prepared: 'clinical' } },
          mirror: {
            signalDetected: T('You prepared the clinical half and skipped the identity half.', 'Preparaste la mitad clínica y omitiste la mitad de identidad.'),
            interpretation: T('Clinical readiness is real, but the phrase "still look like me" is the actual brief for this consultation.', 'La preparación clínica es real, pero la frase «seguir pareciéndome a mí» es el verdadero encargo de esta consulta.'),
            principle: J(duty(3), L('; ', '; '), std(3), L('.', '.')),
            learnerDid: T('Prepared competence without preparing for her fear of becoming someone else.', 'Preparaste competencia sin preparar su miedo a convertirse en otra persona.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Your grounding will show, but her identity concern will arrive as a surprise instead of as something you anticipated.', 'Tu base se notará, pero su preocupación de identidad llegará como sorpresa en lugar de como algo anticipado.'),
            consequence: T('Credibility opens slightly positive; the walkout story stays unread and can repeat itself here.', 'La credibilidad arranca ligeramente positiva; la historia del abandono queda sin leer y puede repetirse aquí.'),
            nextPriority: T('Pair every clinical prep with a "what is she protecting" pass.', 'Acompaña cada preparación clínica con una lectura de «qué está protegiendo ella».')
          }
        },
        {
          id: 'prep-full',
          label: T('Read everything and name what you expect', 'Leerlo todo y nombrar lo que esperas'),
          language: T('Identity phrase twice, a walkout over a printed plan, a sister\'s booking. Expect armor, expect the real question to be "will I still be me", and plan to promise nothing today.', 'Frase de identidad dos veces, un abandono por un plan impreso, una cita reservada por la hermana. Espera coraza, espera que la pregunta real sea «¿seguiré siendo yo?», y prepárate para no prometer nada hoy.'),
          effects: { trust: { credibility: 2, attention: 1 }, willingness: 4, flags: { prepared: 'full', anticipatedIdentity: true } },
          mirror: {
            signalDetected: T('All three buried signals identified before contact: identity language, walkout history, third-party booking.', 'Las tres señales ocultas identificadas antes del contacto: lenguaje de identidad, historial de abandono, reserva de terceros.'),
            interpretation: T('You now know her armor is earned, her fear is identity, and her autonomy is sensitive — before she says a word.', 'Ahora sabes que su coraza es merecida, su miedo es de identidad y su autonomía es sensible — antes de que diga una palabra.'),
            principle: J(L('Phase 1 objective; ', 'Objetivo de la Fase 1; '), duty(3), L('; ', '; '), std(3), L('.', '.')),
            learnerDid: T('Converted an intake file into a working hypothesis about identity and control.', 'Convertiste una ficha de admisión en una hipótesis de trabajo sobre identidad y control.'),
            alignment: 'ALIGNED',
            why: T('Preparation done against this specific client, not against wrinkles in general.', 'Preparación hecha para esta clienta concreta, no para las arrugas en general.'),
            consequence: T('You can honor her control in Connection instead of colliding with it.', 'Podrás respetar su control en Conexión en lugar de chocar con él.'),
            nextPriority: T('Hold the hypothesis loosely — Discovery still has to earn the real words.', 'Sostén la hipótesis con suavidad — el Descubrimiento aún tiene que ganarse las palabras reales.')
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
        source: T('Carmen, entering briskly', 'Carmen, entrando con paso decidido'),
        quote: T('"I\'ve read quite a lot about neurotoxins. I have three questions, and I\'d appreciate direct answers. I should say up front — I may well decide to do nothing."', '«He leído bastante sobre neurotoxinas. Tengo tres preguntas y agradecería respuestas directas. Le adelanto que es muy posible que decida no hacerme nada.»'),
        subtext: cs.flags.prepared === 'full'
          ? T('The armored entrance you anticipated. This is control as protection — under it, per her own file, is a woman who left the last clinic that tried to manage her.', 'La entrada acorazada que anticipaste. Es control como protección — debajo, según su propia ficha, hay una mujer que abandonó la última clínica que intentó manejarla.')
          : T('A confident, controlled entrance. She is telling you the terms before you can set any.', 'Una entrada segura y controlada. Te marca las condiciones antes de que puedas poner ninguna.')
      };
    },
    decision: {
      prompt: T('Phase 2 objective: psychological safety — with a client wearing armor. Your opening move?', 'Objetivo de la Fase 2: seguridad psicológica — con una clienta con coraza. ¿Tu primer movimiento?'),
      options: [
        {
          id: 'conn-flatter',
          label: T('Disarm her with a compliment', 'Desarmarla con un cumplido'),
          language: T('Honestly? You barely need anything. Whoever sent you here was exaggerating — you look wonderful.', '¿Sinceramente? Apenas necesita nada. Quien la envió aquí exageraba — está estupenda.'),
          effects: { trust: { safety: -1, credibility: -1 }, willingness: -5, posture: 'armored' },
          mirror: {
            signalDetected: T('Armor. She announced control and the possibility of "nothing".', 'Coraza. Ella anunció control y la posibilidad de «nada».'),
            interpretation: T('Flattery answers a question she did not ask, and quietly judges the sister who booked it. Armor reads flattery as technique.', 'El cumplido responde a una pregunta que no hizo y juzga en voz baja a la hermana que reservó. La coraza lee el halago como técnica.'),
            principle: J(std(1), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You tried to melt the armor instead of respecting it.', 'Intentaste derretir la coraza en lugar de respetarla.'),
            alignment: 'NOT ALIGNED',
            why: T('A controlled entrance is fear of being managed. Charm is a management move.', 'Una entrada controlada es miedo a ser manejada. El encanto es una maniobra de manejo.'),
            consequence: T('She stays armored, files you under "selling", and her three questions become a wall.', 'Sigue acorazada, te archiva como «vendedora», y sus tres preguntas se convierten en un muro.'),
            nextPriority: T('With armored entrances: respect the control, never work around it.', 'Con entradas acorazadas: respeta el control, nunca lo bordees.')
          }
        },
        {
          id: 'conn-clinical',
          label: T('Take the three questions head-on, strictly clinical', 'Responder las tres preguntas, en tono estrictamente clínico'),
          language: T('Of course. Ask — I\'ll give you exact answers, and we can examine afterwards if you wish.', 'Por supuesto. Pregunte — le daré respuestas exactas, y después examinamos si lo desea.'),
          effects: { trust: { credibility: 1 }, posture: 'armored', flags: {} },
          mirror: {
            signalDetected: T('She asked for directness; you gave directness.', 'Pidió respuestas directas; le diste respuestas directas.'),
            interpretation: T('Matching her register earns competence points but leaves the armor untouched — the consultation stays on her defensive terms.', 'Igualar su registro suma puntos de competencia pero deja la coraza intacta — la consulta sigue en sus términos defensivos.'),
            principle: J(std(3), L('; ', '; '), stage('credibility'), L('.', '.')),
            learnerDid: T('You met the surface request precisely and postponed the safety work.', 'Atendiste la petición superficial con precisión y aplazaste el trabajo de seguridad.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Credibility grows, but nothing invited the real question underneath the third one.', 'Crece la credibilidad, pero nada invitó a la pregunta real que hay bajo la tercera.'),
            consequence: T('She will keep the consultation transactional unless something later earns more.', 'Mantendrá la consulta en modo transaccional salvo que algo posterior gane más terreno.'),
            nextPriority: T('Directness plus explicit autonomy is what actually lowers armor.', 'Franqueza más autonomía explícita es lo que de verdad baja la coraza.')
          }
        },
        {
          id: 'conn-autonomy',
          label: T('Honor the armor: directness plus explicit autonomy', 'Respetar la coraza: franqueza más autonomía explícita'),
          language: T('You came prepared, and I respect that. I\'ll answer all three honestly — including anything I think you don\'t need. And so it\'s said out loud: "nothing" is a real option here today, and it stays your decision, not mine.', 'Ha venido preparada, y lo respeto. Responderé a las tres con honestidad — incluido lo que crea que usted no necesita. Y para decirlo en voz alta: «nada» es una opción real hoy, y la decisión seguirá siendo suya, no mía.'),
          effects: { trust: { safety: 2, credibility: 1 }, willingness: 6, posture: 'testing', reveals: ['guard_lowered'], flags: { safetyEstablished: true } },
          mirror: {
            signalDetected: T('The armored entrance: control announced, "nothing" reserved as an exit.', 'La entrada acorazada: control anunciado, «nada» reservado como salida.'),
            interpretation: T('"Including what you don\'t need" and "nothing is a real option" answer the fear under the armor: that someone will manage her into a decision.', '«Incluido lo que no necesita» y «nada es una opción real» responden al miedo bajo la coraza: que alguien la maneje hacia una decisión.'),
            principle: J(std(1), L('; ', '; '), duty(2), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You made her control explicit and safe instead of something she has to defend.', 'Convertiste su control en algo explícito y seguro, no en algo que deba defender.'),
            alignment: 'ALIGNED',
            why: T('With an armored entrance, safety is built by honoring autonomy — the book\'s response to the confident entrance, and the canonical Phase 2 objective.', 'Con una entrada acorazada, la seguridad se construye respetando la autonomía — la respuesta del libro a la entrada segura, y el objetivo canónico de la Fase 2.'),
            consequence: T('Her shoulders drop a centimetre. The third question she asks will not be the one she wrote down.', 'Sus hombros bajan un centímetro. La tercera pregunta que hará no será la que traía escrita.'),
            nextPriority: T('Do not spend this. Let her use the safety — do not rush Discovery.', 'No lo gastes. Deja que ella use esa seguridad — no aceleres el Descubrimiento.')
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
      if (cs.revealed.includes('guard_lowered')) {
        return {
          source: 'Carmen',
          quote: T('"Units and downtime, fine, you answered those. My third question isn\'t technical. How do you make sure someone still looks like themselves afterwards? I\'ve seen women who look... erased."', '«Unidades y recuperación, bien, ya lo ha respondido. Mi tercera pregunta no es técnica. ¿Cómo garantizan que alguien siga pareciéndose a sí misma después? He visto mujeres que parecen... borradas.»'),
          subtext: T('The safety you built is being used: she has swapped her scripted question for the real one. "Erased" is identity language.', 'La seguridad que construiste está dando fruto: ha cambiado su pregunta preparada por la real. «Borradas» es lenguaje de identidad.'),
          disclosureLevel: 'opening'
        };
      }
      return {
        source: 'Carmen',
        quote: T('"Question one: how many units for the glabella, and the price. Two: downtime. Three: how long before it wears off."', '«Pregunta uno: cuántas unidades para la glabela, y el precio. Dos: tiempo de recuperación. Tres: cuánto tarda en desaparecer el efecto.»'),
        subtext: T('Armored discovery: three transactional questions, no story. The real concern is being withheld.', 'Descubrimiento acorazado: tres preguntas transaccionales, sin historia. La preocupación real sigue retenida.'),
        disclosureLevel: 'minimal'
      };
    },
    decision: {
      prompt: T('Phase 3 objective: surface request vs real need. How do you respond?', 'Objetivo de la Fase 3: petición superficial frente a necesidad real. ¿Cómo respondes?'),
      options: [
        {
          id: 'disc-price',
          label: T('Answer precisely: units, price, downtime', 'Responder con precisión: unidades, precio, recuperación'),
          language: T('Twenty to twenty-five units, from three hundred euros, no real downtime, three to four months of effect.', 'Entre veinte y veinticinco unidades, desde trescientos euros, sin apenas recuperación, tres o cuatro meses de efecto.'),
          effects: { trust: { understanding: -1 }, willingness: -3, objectionIntensity: 3 },
          mirror: {
            signalDetected: T('Layer-one questions carrying a layer-three concern.', 'Preguntas de primera capa que transportan una preocupación de tercera capa.'),
            interpretation: T('Answering when you should be asking: precise numbers close the conversation the numbers were hiding.', 'Responder cuando deberías preguntar: los números exactos cierran la conversación que los números escondían.'),
            principle: J(std(2), L('; Phase 3 objective.', '; objetivo de la Fase 3.')),
            learnerDid: T('You sold information. She was shopping for trust.', 'Vendiste información. Ella venía a comprar confianza.'),
            alignment: 'NOT ALIGNED',
            why: T('The book\'s discovery rule: a surface question answered at the surface produces "I\'ll think about it."', 'La regla de descubrimiento del libro: una pregunta superficial respondida en la superficie produce «me lo voy a pensar».'),
            consequence: T('She now has everything she needs to comparison-shop and no reason to come back. Her real fear stays hidden and hardens.', 'Ahora tiene todo lo necesario para comparar precios y ninguna razón para volver. Su miedo real sigue oculto y se endurece.'),
            nextPriority: T('Before answering any numbers question, earn one meaning question.', 'Antes de responder una pregunta de números, gánate una pregunta de significado.')
          }
        },
        {
          id: 'disc-reassure',
          label: T('Reassure her about natural results', 'Tranquilizarla sobre resultados naturales'),
          language: T('You won\'t look frozen — modern dosing is very subtle. Nobody will be able to tell.', 'No quedará congelada — la dosificación moderna es muy sutil. Nadie lo notará.'),
          effects: { trust: { safety: -1, understanding: -2 }, willingness: -7, posture: 'armored', objectionIntensity: 3 },
          mirror: {
            signalDetected: T('Fear of being "erased" — an identity signal, not a technique question.', 'Miedo a quedar «borrada» — una señal de identidad, no una duda técnica.'),
            interpretation: T('Premature reassurance before understanding reads as dismissal. You answered the fear before asking what it is made of.', 'La tranquilización prematura, antes de comprender, se percibe como desdén. Respondiste al miedo antes de preguntar de qué está hecho.'),
            principle: J(std(2), L(' before ', ' antes que '), std(3), L('; ', '; '), duty(4), L('.', '.')),
            learnerDid: T('You closed the door she had just opened a crack.', 'Cerraste la puerta que ella acababa de entreabrir.'),
            alignment: 'NOT ALIGNED',
            why: T('"Nobody will be able to tell" is also a promise you have not earned the right to make.', '«Nadie lo notará» es además una promesa que no te has ganado el derecho a hacer.'),
            consequence: T('The armor comes back up. What she saw — and who commented on it — stays untold, and her Phase 7 objection escalates.', 'La coraza vuelve a subir. Lo que vio — y quién lo comentó — queda sin contar, y su objeción de la Fase 7 se intensifica.'),
            nextPriority: T('When a client names a fear, your next sentence must be a question, not a comfort.', 'Cuando una clienta nombra un miedo, tu siguiente frase debe ser una pregunta, no un consuelo.')
          }
        },
        {
          id: 'disc-meaning',
          label: T('Ask what "erased" means — in her words', 'Preguntar qué significa «borrada» — en sus palabras'),
          language: T('"Erased" — tell me what you actually saw. And then tell me the opposite: what would "still completely you" look like, in your own words?', '«Borradas» — cuénteme qué vio exactamente. Y luego lo contrario: ¿qué aspecto tendría «seguir siendo totalmente usted», dicho con sus palabras?'),
          requiresRevealed: 'guard_lowered',
          degradedLanguage: T('Can I ask what\'s behind the third question? How long it lasts matters to most people for different reasons.', '¿Puedo preguntar qué hay detrás de la tercera pregunta? La duración importa a cada persona por motivos distintos.'),
          effects: { trust: { attention: 2, understanding: 2, safety: 1 }, willingness: 10, posture: 'opening', objectionIntensity: 2, reveals: ['identity_fear'] },
          degradedEffects: { trust: { attention: 1 }, willingness: 2 },
          degradedNote: T('The question was right, but her armor is still up — she gave you the safe version, not the real one.', 'La pregunta era correcta, pero su coraza sigue puesta — te dio la versión segura, no la real.'),
          mirror: {
            signalDetected: T('"Erased" plus a professional whose face is her signature.', '«Borradas» y una profesional cuya cara es su firma.'),
            interpretation: T('A meaning question converts a technique doubt into her actual brief: change without becoming someone else.', 'Una pregunta de significado convierte una duda técnica en su verdadero encargo: cambiar sin convertirse en otra persona.'),
            principle: J(std(2), L('; ', '; '), stage('understanding'), L('; Phase 3 objective.', '; objetivo de la Fase 3.')),
            learnerDid: T('You asked instead of assuming, and you asked for her words, not your categories.', 'Preguntaste en lugar de suponer, y pediste sus palabras, no tus categorías.'),
            alignment: 'ALIGNED',
            why: T('Discovery\'s only job is to earn the real need. This question does exactly that and nothing else.', 'El único trabajo del Descubrimiento es ganarse la necesidad real. Esta pregunta hace exactamente eso y nada más.'),
            consequence: T('She describes a collector\'s wife whose face "stopped moving at parties" — and admits the lines bother her less than the fear of that. The identity fear is now on the table.', 'Describe a la mujer de un coleccionista cuya cara «dejó de moverse en las fiestas» — y admite que las líneas le molestan menos que el miedo a eso. El miedo de identidad ya está sobre la mesa.'),
            nextPriority: T('Her words — "erased", "still me" — are now your material. Reflect them before you use them.', 'Sus palabras — «borrada», «seguir siendo yo» — son ahora tu material. Refléjalas antes de usarlas.')
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
      if (cs.revealed.includes('identity_fear')) {
        return {
          source: 'Carmen',
          quote: T('"It isn\'t vanity. In my work, my face is my signature — collectors know me twenty years. The lines annoy me, yes. But if I walk into an opening looking \'done\', it says something about me I don\'t mean."', '«No es vanidad. En mi trabajo, mi cara es mi firma — los coleccionistas me conocen desde hace veinte años. Las líneas me molestan, sí. Pero si entro en una inauguración con cara «retocada», dice algo de mí que yo no quiero decir.»'),
          subtext: T('She is explaining her identity to you. Phase 4\'s job is to prove you understood — in her terms.', 'Te está explicando su identidad. El trabajo de la Fase 4 es demostrar que comprendiste — en sus términos.')
        };
      }
      return {
        source: 'Carmen',
        quote: T('"Look — the lines are simply there, and either you can soften them or you can\'t. Can we get to what you would actually do?"', '«Mire — las líneas simplemente están ahí, y o puede suavizarlas o no puede. ¿Vamos a lo que usted haría exactamente?»'),
        subtext: T('Armored impatience. Without her real concern in the room, this phase can only process the surface.', 'Impaciencia acorazada. Sin su preocupación real sobre la mesa, esta fase solo puede procesar la superficie.')
      };
    },
    decision: {
      prompt: T('Phase 4 objective: prove understanding before any solution. What do you reflect?', 'Objetivo de la Fase 4: demostrar comprensión antes de cualquier solución. ¿Qué reflejas?'),
      options: [
        {
          id: 'und-summary',
          label: T('Summarize accurately and move forward', 'Resumir con precisión y avanzar'),
          language: T('So: frown lines and early marionette lines, a preference for natural results, and you want to keep expression. Understood — let\'s look at options.', 'Entonces: entrecejo y marioneta incipiente, preferencia por resultados naturales y quiere conservar la expresión. Entendido — veamos opciones.'),
          effects: { trust: { understanding: 1 } },
          mirror: {
            signalDetected: T('A personal explanation, answered with an accurate list.', 'Una explicación personal, respondida con una lista exacta.'),
            interpretation: T('Content reflection without feeling reflection: correct, and cold. She said "signature"; you said "natural results."', 'Reflejo de contenido sin reflejo de sentimiento: correcto, y frío. Ella dijo «firma»; tú dijiste «resultados naturales».'),
            principle: J(std(2), L('; ', '; '), stage('understanding'), L('.', '.')),
            learnerDid: T('You proved you listened to the facts, not to the person.', 'Demostraste haber escuchado los hechos, no a la persona.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('The book\'s rule: reflection returns what she felt, not what she said. A summary is parroting with good manners.', 'La regla del libro: el reflejo devuelve lo que ella sintió, no lo que dijo. Un resumen es repetición con buenos modales.'),
            consequence: T('Understanding rises a little. The deeper thing she is carrying — who commented, and what it cost — stays unsaid.', 'La comprensión sube un poco. Lo más profundo que carga — quién hizo el comentario, y lo que costó — queda sin decir.'),
            nextPriority: T('Reflect meaning, then wait. The silence after a reflection is where the truth arrives.', 'Refleja el significado, y espera. En el silencio tras un reflejo es donde llega la verdad.')
          }
        },
        {
          id: 'und-contradiction',
          label: T('Reflect the contradiction you keep hearing', 'Reflejar la contradicción que sigues escuchando'),
          language: T('Can I say back what I keep hearing? You call it "just two lines" — but you\'ve said "still look like me" three times now. I don\'t think this consultation is about lines. I think you\'re asking whether anything can change without you becoming someone else.', '¿Puedo devolverle lo que no dejo de escuchar? Usted lo llama «solo dos líneas» — pero ya ha dicho «seguir pareciéndome a mí» tres veces. No creo que esta consulta vaya de líneas. Creo que usted pregunta si algo puede cambiar sin convertirse en otra persona.'),
          requiresRevealed: 'identity_fear',
          degradedLanguage: T('It sounds like this is about more than the lines for you — am I reading that right?', 'Suena a que esto es más que las líneas para usted — ¿lo estoy leyendo bien?'),
          effects: { trust: { understanding: 2, alignment: 1, safety: 1 }, willingness: 8, reveals: ['spouse_comment'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 2 },
          degradedNote: T('A guess at depth without earned material — she deflects politely. Reflection needs Discovery to feed it.', 'Una intuición de profundidad sin material ganado — ella lo esquiva con cortesía. El reflejo necesita que el Descubrimiento lo alimente.'),
          mirror: {
            signalDetected: T('"Just two lines" said in the same breath as a twenty-year professional identity.', '«Solo dos líneas» dicho junto a una identidad profesional de veinte años.'),
            interpretation: T('The contradiction mirror — gently returning the gap between what she says and what she keeps saying — is the deepest form of reflection.', 'El espejo de contradicción — devolver con suavidad la brecha entre lo que dice y lo que no deja de decir — es la forma más profunda de reflejo.'),
            principle: J(std(2), L('; ', '; '), stage('understanding'), L('; ', '; '), duty(1), L('.', '.')),
            learnerDid: T('You named the real question underneath her stated one, in her own words, and stopped.', 'Nombraste la pregunta real bajo la declarada, con sus propias palabras, y te detuviste.'),
            alignment: 'ALIGNED',
            why: T('When a contradiction reflection is accurate, the client hears herself — and what she has been protecting comes out.', 'Cuando un reflejo de contradicción es certero, la clienta se escucha a sí misma — y lo que protegía sale a la luz.'),
            consequence: T('A silence. Then: "…My husband. At a dinner, he pointed at someone and said \'she\'s had work done\' — like a punchline. If I do this and he can TELL—" The second withheld fact is now in the room.', 'Un silencio. Después: «…Mi marido. En una cena señaló a alguien y dijo \'esa se ha hecho algo\' — como un chiste. Si me lo hago y él LO NOTA—» El segundo dato retenido ya está en la sala.'),
            nextPriority: T('Two fears are now explicit: being erased, and being found out. The recommendation must answer both or neither.', 'Dos miedos son ya explícitos: quedar borrada, y ser descubierta. La recomendación debe responder a ambos o a ninguno.')
          }
        },
        {
          id: 'und-agree',
          label: T('Validate by promising invisibility', 'Validar prometiendo invisibilidad'),
          language: T('Completely understood — and you never would look done here. Our results are genuinely invisible. Nobody in your gallery would ever know.', 'Comprendido del todo — y aquí jamás parecería retocada. Nuestros resultados son realmente invisibles. Nadie en su galería lo sabría nunca.'),
          effects: { trust: { alignment: -1, credibility: -1 }, willingness: -4, flags: { oversold: true } },
          mirror: {
            signalDetected: T('An identity fear, answered with a guarantee.', 'Un miedo de identidad, respondido con una garantía.'),
            interpretation: T('Blind validation plus an invisibility promise: you agreed with her fear and then made the exact overclaim that created it.', 'Validación ciega más promesa de invisibilidad: le diste la razón al miedo y luego hiciste exactamente la sobrepromesa que lo creó.'),
            principle: J(duty(4), L('; ', '; '), std(3), L('.', '.')),
            learnerDid: T('You promised an outcome no honest practitioner can guarantee.', 'Prometiste un resultado que ningún profesional honesto puede garantizar.'),
            alignment: 'NOT ALIGNED',
            why: T('She has SEEN work that was supposed to be invisible. Your guarantee tells her you are either naive or selling.', 'Ella HA VISTO trabajos que se suponían invisibles. Tu garantía le dice que eres ingenua o que estás vendiendo.'),
            consequence: T('Credibility and alignment fall. The overclaim is now on record and Phase 7 will collect on it.', 'Caen credibilidad y alineación. La sobrepromesa queda registrada y la Fase 7 la cobrará.'),
            nextPriority: T('Replace guarantees with mechanisms: staged dosing, review points, reversibility — truth that answers fear.', 'Sustituye garantías por mecanismos: dosis escalonadas, puntos de revisión, reversibilidad — verdad que responde al miedo.')
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
        source: 'Carmen',
        quote: cs.revealed.includes('identity_fear')
          ? T('"Alright. So IF I did anything — and it is still an if — what exactly would you do? And I want the honest version: what can go wrong, and what can\'t be undone."', '«De acuerdo. Entonces, SI me hiciera algo — y sigue siendo un si — ¿qué haría usted exactamente? Y quiero la versión honesta: qué puede salir mal, y qué no tiene vuelta atrás.»')
          : T('"Fine. Tell me what you\'d propose. Keep it short."', '«Bien. Dígame qué propondría. Sea breve.»'),
        subtext: T('Phase 5 is where credibility is really built — by honest mechanism, not by promises. She is explicitly testing for honesty.', 'La Fase 5 es donde de verdad se construye la credibilidad — con mecanismo honesto, no con promesas. Ella está poniendo a prueba la honestidad de forma explícita.')
      };
    },
    decision: {
      prompt: T('Phase 5 objective: educate so she can evaluate. What do you explain?', 'Objetivo de la Fase 5: educar para que ella pueda evaluar. ¿Qué explicas?'),
      options: [
        {
          id: 'edu-menu',
          label: T('Present the full menu of options', 'Presentar el menú completo de opciones'),
          language: T('There\'s the glabella, we could support the brow, the marionette area responds to filler, skin quality would improve with biostimulators, and many clients pair it with...', 'Está la glabela, podríamos sostener la ceja, la zona de marioneta responde a relleno, la calidad de piel mejoraría con bioestimuladores, y muchas clientas lo combinan con...'),
          effects: { trust: { credibility: -1 }, willingness: -4 },
          mirror: {
            signalDetected: T('A request for the honest version, answered with abundance.', 'Una petición de versión honesta, respondida con abundancia.'),
            interpretation: T('Treatment dumping. Five options to a woman deciding between "tiny" and "nothing" reads as appetite, not expertise.', 'Volcado de tratamientos. Cinco opciones a una mujer que decide entre «mínimo» y «nada» se lee como apetito, no como pericia.'),
            principle: J(std(3), L('; the book\'s rule of three.', '; la regla de tres del libro.')),
            learnerDid: T('You educated about everything you can do instead of the one thing she asked about.', 'Educaste sobre todo lo que sabes hacer en lugar de lo único que ella preguntó.'),
            alignment: 'NOT ALIGNED',
            why: T('Clarity builds credibility; abundance builds suspicion — especially against her walkout history.', 'La claridad construye credibilidad; la abundancia construye sospecha — sobre todo con su historial de abandono.'),
            consequence: T('She hears the printed treatment plan from last year, spoken aloud.', 'Ella escucha, en voz alta, el plan impreso del año pasado.'),
            nextPriority: T('One pathway, honestly limited, is worth five options.', 'Una sola vía, honestamente limitada, vale más que cinco opciones.')
          }
        },
        {
          id: 'edu-honest',
          label: T('One conservative pathway, with its honest limits', 'Una vía conservadora, con sus límites honestos'),
          language: T('One area only: the glabella, at a deliberately low dose. Two weeks later we review — if you want more, we add; if you want nothing more, we stop. The honest part: results are technique-dependent, they wear off in three to four months, and the first two weeks can look slightly uneven before settling. And "nothing today" remains a good decision.', 'Una sola zona: la glabela, con una dosis deliberadamente baja. A las dos semanas revisamos — si quiere más, añadimos; si no quiere nada más, paramos. La parte honesta: el resultado depende de la técnica, desaparece en tres o cuatro meses, y las dos primeras semanas puede verse ligeramente irregular antes de asentarse. Y «nada por hoy» sigue siendo una buena decisión.'),
          effects: { trust: { credibility: 2, reliability: 1 }, willingness: 6, flags: { honestLimits: true } },
          mirror: {
            signalDetected: T('An explicit test: "the honest version".', 'Una prueba explícita: «la versión honesta».'),
            interpretation: T('Mechanism, staging, review point, reversibility of scale, and a named limitation — credibility built from truth.', 'Mecanismo, escalonado, punto de revisión, reversibilidad de escala y una limitación nombrada — credibilidad construida desde la verdad.'),
            principle: J(std(3), L('; ', '; '), duty(4), L('; ', '; '), stage('credibility'), L('.', '.')),
            learnerDid: T('You taught her how it works and where it stops working, and kept "nothing" on the table.', 'Le enseñaste cómo funciona y dónde deja de funcionar, y mantuviste «nada» sobre la mesa.'),
            alignment: 'ALIGNED',
            why: T('Passing an honesty test is worth more than any before/after photo — for this client, it is the product.', 'Superar una prueba de honestidad vale más que cualquier foto de antes/después — para esta clienta, es el producto.'),
            consequence: T('She nods slowly. "That\'s the first time anyone has told me what it CAN\'T do." Credibility and reliability rise.', 'Asiente despacio. «Es la primera vez que alguien me dice lo que NO puede hacer.» Suben credibilidad y fiabilidad.'),
            nextPriority: T('Carry these exact limits into the recommendation — they are now load-bearing.', 'Lleva estos límites exactos a la recomendación — ahora son estructurales.')
          }
        },
        {
          id: 'edu-minimize',
          label: T('Minimize the risks to keep momentum', 'Minimizar los riesgos para no perder impulso'),
          language: T('In good hands the risks are essentially nil, and the result will simply be a fresher you.', 'En buenas manos los riesgos son prácticamente nulos, y el resultado será simplemente una versión más fresca de usted.'),
          effects: { trust: { credibility: -2 }, willingness: -5, flags: { oversold: true } },
          mirror: {
            signalDetected: T('A direct request for what can go wrong.', 'Una petición directa de qué puede salir mal.'),
            interpretation: T('"Essentially nil" to a woman who has seen it go wrong is not reassurance — it is disqualification.', '«Prácticamente nulos» a una mujer que lo ha visto salir mal no es tranquilidad — es descalificación.'),
            principle: J(duty(4), L('; ', '; '), std(3), L('.', '.')),
            learnerDid: T('You traded her explicit test for momentum.', 'Cambiaste su prueba explícita por impulso comercial.'),
            alignment: 'NOT ALIGNED',
            why: T('Communicating with radical clarity includes the failure modes. Anything else is marketing in a clinical coat.', 'Comunicar con claridad radical incluye los modos de fallo. Lo demás es marketing con bata clínica.'),
            consequence: T('Credibility drops sharply. She stops asking questions — the worst possible sign with an armored client.', 'La credibilidad cae en picado. Deja de hacer preguntas — la peor señal posible con una clienta acorazada.'),
            nextPriority: T('Honest limitation language is a skill: practice naming what your treatment cannot do.', 'El lenguaje de limitación honesta es una destreza: practica nombrar lo que tu tratamiento no puede hacer.')
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
      if (cs.revealed.includes('spouse_comment')) {
        return {
          source: 'Carmen',
          quote: T('"Say it to me the way you would say it to someone you are not trying to convince."', '«Dígamelo como se lo diría a alguien a quien no está intentando convencer.»'),
          subtext: T('She is inviting the recommendation — on the condition that it is a recommendation, not a close.', 'Está invitando la recomendación — con la condición de que sea una recomendación, no un cierre.')
        };
      }
      return {
        source: 'Carmen',
        quote: T('"So. Bottom line it for me."', '«Bien. Deme la conclusión.»'),
        subtext: T('A transactional invitation. Whatever you recommend now will be evaluated as a pitch.', 'Una invitación transaccional. Lo que recomiendes ahora será evaluado como un discurso de venta.')
      };
    },
    decision: {
      prompt: T('Phase 6 objective: a recommendation traceable to what she actually said. What do you recommend?', 'Objetivo de la Fase 6: una recomendación trazable a lo que ella dijo de verdad. ¿Qué recomiendas?'),
      options: [
        {
          id: 'rec-herwords',
          label: T('Recommend from her own words — and define success her way', 'Recomendar desde sus propias palabras — y definir el éxito a su manera'),
          language: T('Based on what you told me: micro-dose, glabella only, review at two weeks — and nothing else for at least three months, whatever I might sell you. Success, in your terms: your husband notices nothing at that dinner table, your collectors see exactly the woman they know, and YOU stop noticing the lines. If any of that fails the two-week review, we stop there.', 'Basándome en lo que me ha contado: microdosis, solo glabela, revisión a las dos semanas — y nada más durante al menos tres meses, me convenga o no. El éxito, en sus términos: su marido no nota nada en esa cena, sus coleccionistas ven exactamente a la mujer que conocen, y USTED deja de fijarse en las líneas. Si algo de eso falla en la revisión de las dos semanas, paramos ahí.'),
          requiresRevealed: 'identity_fear',
          degradedLanguage: T('I\'d suggest a light, natural-looking treatment of the frown lines, staged carefully.', 'Le sugeriría un tratamiento suave y de aspecto natural del entrecejo, cuidadosamente escalonado.'),
          effects: { trust: { alignment: 2, reliability: 1 }, willingness: 9 },
          degradedEffects: { trust: { alignment: 1 }, willingness: 3 },
          degradedNote: T('A sensible recommendation with nothing of HER in it — "natural" is your word; she never got to give you hers.', 'Una recomendación sensata sin nada de ELLA dentro — «natural» es tu palabra; ella nunca llegó a darte las suyas.'),
          mirror: {
            signalDetected: T('"Not trying to convince me" — a request for partnership language.', '«A quien no intenta convencer» — una petición de lenguaje de socia, no de vendedora.'),
            interpretation: T('The recommendation is built from her disclosed material: the dinner, the collectors, the "still me" — and success is defined in her terms, with a stopping rule.', 'La recomendación se construye con su material revelado: la cena, los coleccionistas, el «seguir siendo yo» — y el éxito se define en sus términos, con una regla de parada.'),
            principle: J(std(4), L('; ', '; '), stage('alignment'), L('; ', '; '), duty(2), L('.', '.')),
            learnerDid: T('You recommended less than you could have sold, tied to what she values, with an exit built in.', 'Recomendaste menos de lo que podrías haber vendido, ligado a lo que ella valora, con una salida incorporada.'),
            alignment: 'ALIGNED',
            why: T('Alignment means she recognizes her own goal inside your plan. She will — the plan is made of her sentences.', 'Alineación significa que ella reconoce su propio objetivo dentro de tu plan. Lo hará — el plan está hecho con sus frases.'),
            consequence: T('"…That\'s the first proposal in this whole process that sounds like it\'s about me." Alignment +2. The decision is now genuinely hers to make.', '«…Es la primera propuesta de todo este proceso que suena a que va de mí.» Alineación +2. La decisión es ahora genuinamente suya.'),
            nextPriority: T('Do not add anything. The recommendation is finished; let Phase 7 do its work.', 'No añadas nada. La recomendación está terminada; deja que la Fase 7 haga su trabajo.')
          }
        },
        {
          id: 'rec-package',
          label: T('Present the full-face plan with today\'s pricing', 'Presentar el plan facial completo con precio de hoy'),
          language: T('The complete refresh — glabella, brow support, marionette filler — is 1.450€, and if we book today I can hold last quarter\'s pricing.', 'El plan completo — glabela, sostén de ceja, relleno de marioneta — son 1.450 €, y si reservamos hoy puedo mantener la tarifa del trimestre pasado.'),
          effects: { trust: { alignment: -2, safety: -1 }, willingness: -10, objectionIntensity: 3 },
          mirror: {
            signalDetected: T('A woman who left a clinic over a printed plan, offered a bigger plan with a deadline.', 'Una mujer que dejó una clínica por un plan impreso, recibiendo un plan mayor con fecha límite.'),
            interpretation: T('Urgency pricing at the recommendation moment converts a consultation into a transaction — the exact thing her armor exists to detect.', 'El precio con urgencia en el momento de la recomendación convierte la consulta en transacción — exactamente lo que su coraza existe para detectar.'),
            principle: J(std(4), L('; ', '; '), std(5), L('; ', '; '), duty(2), L('.', '.')),
            learnerDid: T('You reproduced the experience she walked out of, with better manners.', 'Reprodujiste la experiencia de la que ella se marchó, con mejores modales.'),
            alignment: 'NOT ALIGNED',
            why: T('Nothing in this recommendation is traceable to anything she said. Pressure plus volume equals her worst-case scenario.', 'Nada de esta recomendación es trazable a nada de lo que ella dijo. Presión más volumen es su peor escenario.'),
            consequence: T('Willingness collapses. If she stays at all, her Phase 7 objection arrives at maximum intensity.', 'La disposición se desploma. Si es que se queda, su objeción de la Fase 7 llega con intensidad máxima.'),
            nextPriority: T('A recommendation must quote the client. If it could be printed before she arrived, it is not a recommendation.', 'Una recomendación debe citar a la clienta. Si podía imprimirse antes de que llegara, no es una recomendación.')
          }
        },
        {
          id: 'rec-abdicate',
          label: T('Step back entirely — leave it with her', 'Retirarte del todo — dejarlo en sus manos'),
          language: T('Honestly, you could also simply do nothing. Take the information home, and if you ever feel like it, we\'re here.', 'Sinceramente, también puede simplemente no hacerse nada. Llévese la información a casa y, si algún día le apetece, aquí estamos.'),
          effects: { trust: { reliability: 1, alignment: 0 }, willingness: -2 },
          mirror: {
            signalDetected: T('An invitation to recommend — declined.', 'Una invitación a recomendar — rechazada.'),
            interpretation: T('Respecting autonomy without offering judgment is the passive close: she feels unpressured, and unaccompanied.', 'Respetar la autonomía sin ofrecer criterio es el cierre pasivo: ella se siente sin presión, y sin compañía.'),
            principle: J(duty(2), L(' honored; ', ' respetado; '), std(4), L(' missed.', ' omitido.')),
            learnerDid: T('You protected her autonomy and withheld your expertise.', 'Protegiste su autonomía y retuviste tu criterio profesional.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('"If she believed in it, she would ask for my yes." Abandoning the recommendation is not the same as respecting the decision.', '«Si ella creyera en esto, me pediría el sí.» Abandonar la recomendación no es lo mismo que respetar la decisión.'),
            consequence: T('Reliability rises slightly — you clearly aren\'t selling. But with no recommendation to accept, DEFER becomes the ceiling.', 'La fiabilidad sube un poco — está claro que no vendes. Pero sin recomendación que aceptar, DIFERIR se convierte en el techo.'),
            nextPriority: T('Autonomy plus a clear professional judgment is partnership. Autonomy alone is abdication.', 'Autonomía más criterio profesional claro es asociación. Autonomía sola es abdicación.')
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
          source: 'Carmen',
          quote: T('"The more we talk, the more I think this simply is not me. My sister means well. But I think I\'m done here."', '«Cuanto más hablamos, más pienso que esto sencillamente no soy yo. Mi hermana lo hace con buena intención. Pero creo que he terminado aquí.»'),
          subtext: T('Identity refusal at full intensity. The consultation lost her earlier — this is where it becomes visible.', 'Rechazo de identidad a máxima intensidad. La consulta la perdió antes — aquí es donde se hace visible.')
        };
      }
      if (cs.objectionIntensity === 2) {
        return {
          source: 'Carmen',
          quote: T('"I keep hearing my husband\'s voice at that dinner. \'She\'s had work done.\' Maybe... maybe I should talk to him first. It\'s his face across the breakfast table too, isn\'t it?"', '«No dejo de oír la voz de mi marido en aquella cena. \'Esa se ha hecho algo.\' Quizá... quizá debería hablar primero con él. También es su cara la que está al otro lado del desayuno, ¿no?»'),
          subtext: T('The authority objection: she is asking whether she is allowed to decide alone. Behind it — fear of being found out by the one commentator who matters.', 'La objeción de autoridad: pregunta si puede decidir sola. Detrás — el miedo a ser descubierta por el único comentarista que importa.')
        };
      }
      return {
        source: 'Carmen',
        quote: T('"And if we do the tiny version and I hate even that — then what? That\'s the part nobody ever answers."', '«¿Y si hacemos la versión mínima y hasta eso lo detesto — entonces qué? Esa es la parte que nadie responde nunca.»'),
        subtext: T('Regret-fear at its mildest: she wants to know the exit exists before she walks through the entrance.', 'Miedo al arrepentimiento en su forma más leve: quiere saber que la salida existe antes de cruzar la entrada.')
      };
    },
    decision: {
      prompt: T('Phase 7 objective: support the decision without owning it. How do you meet the objection?', 'Objetivo de la Fase 7: apoyar la decisión sin apropiártela. ¿Cómo recibes la objeción?'),
      options: [
        {
          id: 'obj-discount',
          label: T('Sweeten the decision', 'Endulzar la decisión'),
          language: T('I understand. What if I take ten percent off the first session — would that make it easier to say yes today?', 'Lo entiendo. ¿Y si le descuento un diez por ciento la primera sesión — le resultaría más fácil decir que sí hoy?'),
          effects: { trust: { safety: -1, credibility: -1 }, willingness: -8 },
          mirror: {
            signalDetected: T('An objection about identity, permission or regret — not one word of it about money.', 'Una objeción sobre identidad, permiso o arrepentimiento — ni una palabra sobre dinero.'),
            interpretation: T('A discount answers a question she did not ask, and confirms the suspicion her armor arrived with: this was a sale all along.', 'Un descuento responde a una pregunta que no hizo, y confirma la sospecha con la que llegó su coraza: esto siempre fue una venta.'),
            principle: J(std(5), L('; ', '; '), duty(2), L('.', '.')),
            learnerDid: T('You diagnosed nothing and prescribed a price.', 'No diagnosticaste nada y recetaste un precio.'),
            alignment: 'NOT ALIGNED',
            why: T('The book\'s law: never respond to the word — respond to what is behind it. Behind this one is a person, not a number.', 'La ley del libro: nunca respondas a la palabra — responde a lo que hay detrás. Detrás de esta hay una persona, no una cifra.'),
            consequence: T('Safety and credibility both fall. Whatever she decides now, she decides it about you.', 'Caen seguridad y credibilidad. Decida lo que decida ahora, lo decide sobre ti.'),
            nextPriority: T('Diagnose every objection before responding: which of the three hidden objections is this?', 'Diagnostica cada objeción antes de responder: ¿cuál de las tres objeciones ocultas es esta?')
          }
        },
        {
          id: 'obj-diagnose',
          label: T('Diagnose what is actually underneath', 'Diagnosticar lo que hay realmente debajo'),
          language: T('Before anything else — can I ask one question? If the choice were only yours — no dinner table, no sister, no one to explain it to — what would you do? Take your time. Whatever the answer is, it\'s the right one.', 'Antes de nada — ¿puedo hacerle una pregunta? Si la decisión fuera solo suya — sin cena, sin hermana, sin nadie a quien explicárselo — ¿qué haría? Tómese su tiempo. Sea cual sea la respuesta, es la correcta.'),
          effects: { trust: { reliability: 1, understanding: 1, safety: 1 }, willingness: 6 },
          mirror: {
            signalDetected: T('An objection borrowing someone else\'s voice — her husband\'s, her sister\'s, or her own fear\'s.', 'Una objeción con voz prestada — la de su marido, la de su hermana, o la de su propio miedo.'),
            interpretation: T('The diagnostic question separates the decision from the permission. Whatever she answers, you both finally know what you are actually discussing.', 'La pregunta diagnóstica separa la decisión del permiso. Responda lo que responda, por fin ambos sabéis de qué se está hablando en realidad.'),
            principle: J(std(5), L('; ', '; '), duty(2), L('; ', '; '), stage('reliability'), L('.', '.')),
            learnerDid: T('You asked, waited, and handed her back her own authority — with the exit visibly open.', 'Preguntaste, esperaste y le devolviste su propia autoridad — con la salida a la vista.'),
            alignment: 'ALIGNED',
            why: T('Decision support means she leaves proud of HER decision — including if it is no, or not yet.', 'Apoyar la decisión significa que se vaya orgullosa de SU decisión — incluso si es no, o todavía no.'),
            consequence: T('A long pause. Then, quietly: "…If it were only mine, I think I\'d try the small version. It\'s the explaining I dread." Now the real conversation can finish honestly.', 'Una pausa larga. Después, en voz baja: «…Si fuera solo mía, creo que probaría la versión pequeña. Lo que me da pavor es tener que explicarlo.» Ahora la conversación real puede terminar con honestidad.'),
            nextPriority: T('Whatever the Decision Engine derives from here is a legitimate outcome. Protect it in Phase 8.', 'Lo que el Motor de Decisión derive desde aquí es un resultado legítimo. Protégelo en la Fase 8.')
          }
        },
        {
          id: 'obj-pressure',
          label: T('Create urgency to resolve the wobble', 'Crear urgencia para resolver la duda'),
          language: T('I\'ll be honest — my diary fills quickly and I\'d hate for you to lose the momentum you\'ve built today. Shall we at least hold Thursday?', 'Le seré franca — mi agenda se llena rápido y no me gustaría que perdiera el impulso que ha ganado hoy. ¿Reservamos al menos el jueves?'),
          effects: { trust: { safety: -2, reliability: -1 }, willingness: -12, posture: 'withdrawn' },
          mirror: {
            signalDetected: T('Hesitation that explicitly referenced her husband and her own identity.', 'Una vacilación que mencionó explícitamente a su marido y su propia identidad.'),
            interpretation: T('Scarcity pressure at the exact moment she asked for room. This is the behavior her walkout history predicted she would meet.', 'Presión de escasez en el momento exacto en que pidió espacio. Es la conducta que su historial de abandono predecía que encontraría.'),
            principle: J(std(5), L(' violated; ', ' incumplido; '), duty(2), L(' violated.', ' incumplido.')),
            learnerDid: T('You answered a request for permission with a deadline.', 'Respondiste a una petición de permiso con una fecha límite.'),
            alignment: 'NOT ALIGNED',
            why: T('Pressure at the decision point is the single largest willingness penalty in this case — and she has walked out over less.', 'La presión en el punto de decisión es la mayor penalización de disposición de este caso — y ella se ha marchado por menos.'),
            consequence: T('She stands up, polite and final. Posture: withdrawn.', 'Se levanta, cortés y definitiva. Postura: retirada.'),
            nextPriority: T('When a client asks for room, the only professional answer is room.', 'Cuando una clienta pide espacio, la única respuesta profesional es espacio.')
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
        quote: T('The consultation is over. What happens next is not automatic.', 'La consulta ha terminado. Lo que ocurre después no es automático.'),
        subtext: T('Phase 8 is a canonical phase, not an epilogue. The relationship transition and the follow-up plan are executed here.', 'La Fase 8 es una fase canónica, no un epílogo. La transición de la relación y el plan de seguimiento se ejecutan aquí.')
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
    disclosed: T('"Alright. The small version — glabella only, and the two-week review. And if my husband notices anything at that table, I\'m sending him to you to explain it."', '«De acuerdo. La versión pequeña — solo glabela, y la revisión a las dos semanas. Y si mi marido nota algo en esa mesa, se lo mando a usted para que se lo explique.»'),
    undisclosed: T('"Fine — the conservative plan. I still feel you don\'t entirely know why this was hard for me, but the plan itself is sensible."', '«Está bien — el plan conservador. Sigo sintiendo que no sabe del todo por qué esto era difícil para mí, pero el plan en sí es sensato.»')
  },
  DEFER: T('"I\'m not saying no. I want to sit with it — and honestly, I want one conversation at home first. Two weeks?"', '«No estoy diciendo que no. Quiero pensarlo con calma — y sinceramente, quiero una conversación en casa primero. ¿Dos semanas?»'),
  NO: T('"This isn\'t for me — and I\'m oddly glad my sister made me come, because I needed to hear myself say that out loud. Thank you for not selling me."', '«Esto no es para mí — y me alegra, curiosamente, que mi hermana me obligara a venir, porque necesitaba oírme decirlo en voz alta. Gracias por no venderme nada.»')
};

// ---------------------------------------------------------------------------
// Case facts for the toolkit validators (scenario-aware honesty checks)
// ---------------------------------------------------------------------------
const caseFacts = {
  clientName: 'Carmen',
  motivationItem: 'identity_fear',
  motiveRegex: /(myself|identity|signature|recogni|erased|natural|still me|misma|identidad|firma|borrad|reconoc)/i,
  motiveIssue: T('Carmen disclosed an identity motive ("still look like me", her professional signature). The map does not reflect it.', 'Carmen reveló un motivo de identidad («seguir pareciéndome a mí», su firma profesional). El mapa no lo refleja.'),
  priorExperienceIssue: T('Prior experience is blank. Carmen told you she walked out of a clinic that printed a plan before she sat down — the canvas must carry it or Phase 6 will repeat it.', 'La experiencia previa está en blanco. Carmen contó que abandonó una clínica que imprimió un plan antes de que se sentara — el lienzo debe recogerlo o la Fase 6 lo repetirá.'),
  limitationIssue: T('Field 6 states no limitation. Injectable results are temporary and technique-dependent — an expectation with no ceiling is an overclaim (Ethical Duty 4).', 'El campo 6 no indica ninguna limitación. Los resultados de los inyectables son temporales y dependen de la técnica — una expectativa sin techo es una sobrepromesa (Deber Ético 4).'),
  whyNowIssue: T('You ticked "I understand why it matters now", but Carmen has not disclosed her real motive. Untick it or return to Discovery and ask.', 'Marcaste «Entiendo por qué le importa ahora», pero Carmen no ha revelado su motivo real. Desmárcalo o vuelve al Descubrimiento y pregunta.'),
  undisclosedMotiveIssue: T('MATERIAL: Carmen never disclosed a motive in this attempt. Recording an inferred motive as fact is not permitted — write "Not disclosed" and note what you would ask next time.', 'MATERIAL: Carmen nunca reveló un motivo en este intento. Registrar un motivo inferido como un hecho no está permitido — escribe «No revelado» y anota qué preguntarías la próxima vez.')
};

// Toolkit #8 draft rows for this case (Continuation Engine).
const followUpPack = {
  motivationItem: 'identity_fear',
  yesRows: [
    'Book the single conservative session; send the pre-treatment note and the written "what this will NOT change" summary',
    'Confirm she has read the written summary, and answer anything that surfaced overnight',
    'Day 3 — onset check: the result is still arriving, nothing is final yet',
    'Day 14 — review against her own sentence, not a photo grid: does she still look like herself?',
    'Month 3 — the stopping conversation: what happens next, including doing nothing'
  ],
  reviewNote: 'Anchor the 14-day review to her sentence — still recognisably herself — not to a wrinkle score.'
};

// ---------------------------------------------------------------------------
// ENGINE API (identical contract to Case 01)
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
