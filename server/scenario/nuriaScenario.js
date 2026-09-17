/**
 * CASE 06 — NURIA / THE GENUINELY UNCERTAIN CLIENT — 8-PHASE CANONICAL SCENARIO (EN/ES)
 *
 * Materially different from Cases 01, 02 and 03:
 *   - Entrance: AMBIVALENT, not guarded and not compliant. She is warm, open and
 *     talks freely from the first minute. Nothing is being hidden from you on
 *     purpose. What is missing is a decision: she genuinely does not know
 *     whether she wants any treatment at all, and she says so, repeatedly.
 *     Posture opens 'open', willingness opens 50 — the exact middle of the
 *     scale, because the middle is where she actually is.
 *   - Commercial shape: NOTHING is on the table. She cannot name a treatment.
 *     She has no budget because she has not decided the thing is happening.
 *   - THE TEACHING: **DEFER is the right answer here, and it has to be earned.**
 *     A properly-run consultation with Nuria ends with a real plan to decide,
 *     not with a booking. Converting her is possible — she is agreeable, she
 *     likes you, and she will say yes if you ask hard enough — and every route
 *     to that yes costs safety, alignment or posture, so the Decision Engine
 *     derives NO, or a YES the debrief takes apart.
 *   - Turning point 1 at PHASE 2 (make "no treatment" an allowed outcome).
 *   - Turning point 2 at PHASE 3 (the seven-month gap)        → life_change.
 *   - Turning point 3 at PHASE 4 (name the ambivalence)       → self_permission.
 *   - Turning point 4 at PHASE 5 (teach her how to decide)    → no_decision_yet.
 *
 * Provenance: The Beauty Sales Secrets — Ch.9 the consultation that should not
 * convert; Ch.12 permission objections; Ch.15 the client who is not ready and
 * the difference between a follow-up and a pursuit. Canonical architecture
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
  name: 'Nuria Vidal',
  age: 34,
  presenting: T(
    'Cannot name a treatment. Asks about "something for my skin" — dullness, texture, a face she describes as permanently tired. No treatment requested, no budget stated.',
    'No sabe nombrar ningún tratamiento. Pregunta por «algo para la piel» — falta de luminosidad, textura, una cara que describe como permanentemente cansada. No pide ningún tratamiento ni indica presupuesto.'
  ),
  visibleGoal: T('"I don\'t even know if I should be here."', '«Ni siquiera sé si debería estar aquí.»'),
  hiddenMotivation: T(
    'The appointment is not really about her skin. It is the first thing she has booked for herself since her marriage ended in June, and she is trying to find out whether she is allowed to want something that is only hers.',
    'La cita no va en realidad de su piel. Es lo primero que ha reservado para sí misma desde que su matrimonio terminó en junio, y está intentando averiguar si tiene derecho a querer algo que sea solo suyo.'
  ),
  emotionalConsequence: T(
    'That she is being frivolous in a year when she should be being sensible. Left unanswered, she will decide nothing here — and, because she is polite, she will decide nothing out loud either.',
    'Que está siendo frívola en un año en el que debería ser sensata. Si no se responde, aquí no decidirá nada — y, como es educada, tampoco lo dirá en voz alta.'
  ),
  history: T(
    'No prior aesthetic treatments of any kind. No clinical contraindications. Two previous appointments with this clinic, both rescheduled by her, neither attended.',
    'Ningún tratamiento estético previo de ningún tipo. Sin contraindicaciones clínicas. Dos citas previas con esta clínica, ambas aplazadas por ella, ninguna a la que acudiera.'
  ),
  entryRelationshipState: 'PROSPECTIVE'
};

const intake = {
  bookingNote: T(
    '"I\'d like to talk to somebody about my skin. I don\'t really know what I want — I\'ve been thinking about it for months and I keep not doing anything. I don\'t even know if I should be booking this, to be honest."',
    '«Me gustaría hablar con alguien sobre mi piel. No sé muy bien qué quiero — llevo meses dándole vueltas y no acabo de hacer nada. Ni siquiera sé si debería pedir esta cita, la verdad.»'
  ),
  intakeForm: [
    T('Concern, in her words: "my skin — tired, I suppose. Nothing dramatic. It just isn\'t the face I recognise."', 'Motivo, con sus palabras: «mi piel — cansada, supongo. Nada dramático. Es que no es la cara que reconozco.»'),
    T('Treatment requested: left blank — "I don\'t know what any of them are called"', 'Tratamiento solicitado: en blanco — «no sé cómo se llama ninguno»'),
    T('Budget: "I don\'t know yet. It depends." Nothing else written in the field.', 'Presupuesto: «Todavía no lo sé. Depende.» Nada más escrito en el campo.'),
    T('Timeline on the file: first enquiry 14 February. Appointment booked twice and moved twice (April, June). Attending today, in September.', 'Cronología en la ficha: primera consulta el 14 de febrero. Cita reservada dos veces y aplazada dos veces (abril, junio). Acude hoy, en septiembre.'),
    T('Contact details: postal address amended by the client three weeks ago — "new address, please update"', 'Datos de contacto: dirección postal modificada por la clienta hace tres semanas — «dirección nueva, actualícenla por favor»'),
    T('Occupation: secondary-school teacher, eleven years. "I spend all day deciding things for other people\'s children."', 'Profesión: profesora de secundaria, once años. «Me paso el día decidiendo cosas para los hijos de los demás.»'),
    T('Medical history: nothing flagged. No medication, no prior aesthetic treatment of any kind.', 'Historial médico: nada reseñable. Sin medicación, sin ningún tratamiento estético previo.'),
    T('Booking submitted at 23:41 on a Sunday.', 'Solicitud de cita enviada a las 23:41 de un domingo.')
  ],
  buriedSignals: ['seven_month_gap', 'address_changed', 'blank_budget']
};

// ---------------------------------------------------------------------------
function initialClientState() {
  return {
    trust: { safety: 0, attention: 0, understanding: 0, credibility: 0, alignment: 0, reliability: 0, confirmation: 0 },
    willingness: 50,
    posture: 'open',
    objectionIntensity: 1,
    revealed: [],
    withheld: ['life_change', 'self_permission', 'no_decision_yet'],
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
          'Preparation Engine: this file contains no request. Seven months between the first enquiry and the appointment, two bookings she moved, a budget field that says "it depends", a new postal address three weeks old, and a form submitted at twenty to midnight on a Sunday. Read as a sales file it is empty. Read as a person it is very full.',
          'Motor de Preparación: esta ficha no contiene ninguna petición. Siete meses entre la primera consulta y la cita, dos reservas que ella movió, un campo de presupuesto que dice «depende», una dirección postal nueva de hace tres semanas y un formulario enviado a las doce menos veinte de un domingo. Leída como ficha de venta está vacía. Leída como persona está llenísima.'
        )
      };
    },
    decision: {
      prompt: T('Four minutes before Nuria walks in. What do you do with a file that asks for nothing?', 'Cuatro minutos antes de que entre Nuria. ¿Qué haces con una ficha que no pide nada?'),
      options: [
        {
          id: 'prep-assume',
          label: T('Fill the gap — line up the three usual options', 'Rellenar el hueco — preparar las tres opciones habituales'),
          language: T('Thirty-four, no history, "tired skin". That is a peel, a microneedling course or a skin booster. I\'ll put all three on the table and let her pick one.', 'Treinta y cuatro años, sin historial, «piel cansada». Eso es un peeling, un ciclo de microneedling o un potenciador cutáneo. Le pongo las tres opciones encima de la mesa y que elija.'),
          effects: { trust: { credibility: -1 }, willingness: 4, flags: { prepared: 'menu' } },
          mirror: {
            signalDetected: T('A blank treatment field and a blank budget field, treated as gaps for you to fill.', 'Un campo de tratamiento en blanco y un campo de presupuesto en blanco, tratados como huecos que te toca rellenar.'),
            interpretation: T('You have replaced her missing decision with your own. From the first minute of the consultation you will be selecting between treatments, and the question she actually came with — whether she wants a treatment at all — will never get asked.', 'Has sustituido su decisión ausente por la tuya. Desde el primer minuto de la consulta estarás eligiendo entre tratamientos, y la pregunta con la que ella viene de verdad — si quiere algún tratamiento — no llegará a formularse.'),
            principle: J(duty(2), L('; ', '; '), duty(3), L('; Phase 1 objective — readiness and research, not a pre-written answer.', '; objetivo de la Fase 1: preparación e investigación, no una respuesta ya escrita.')),
            learnerDid: T('You prepared three answers to a question she has not asked.', 'Preparaste tres respuestas a una pregunta que ella no ha hecho.'),
            alignment: 'NOT ALIGNED',
            why: T('Autonomy is not respected by offering a choice inside a decision the client has not yet made. Choosing between three treatments is not the same freedom as choosing whether to have one.', 'La autonomía no se respeta ofreciendo una elección dentro de una decisión que la clienta aún no ha tomado. Elegir entre tres tratamientos no es la misma libertad que elegir si hacerse alguno.'),
            consequence: T('Credibility opens below baseline: you will sound like someone with a product to move, to a woman who is not sure she wants a product.', 'La credibilidad arranca por debajo de la línea base: sonarás como alguien con un producto que colocar, ante una mujer que no está segura de querer ningún producto.'),
            nextPriority: T('An empty treatment field is information. Prepare to find out what it means before you fill it.', 'Un campo de tratamiento vacío es información. Prepárate para averiguar qué significa antes de rellenarlo.')
          }
        },
        {
          id: 'prep-clinical',
          label: T('Prepare the clinical assessment for a 34-year-old skin', 'Preparar la valoración clínica para una piel de 34 años'),
          language: T('Texture and dullness at thirty-four: barrier function, sleep, sun history, hormonal context. I want a proper skin assessment ready, and I will not name a treatment until I have looked at her.', 'Textura y falta de luminosidad a los treinta y cuatro: función barrera, descanso, historial solar, contexto hormonal. Quiero una valoración cutánea seria preparada, y no nombraré ningún tratamiento hasta haberla mirado.'),
          effects: { trust: { credibility: 1 }, willingness: 2, flags: { prepared: 'clinical' } },
          mirror: {
            signalDetected: T('The clinical picture of "tired skin" in a healthy thirty-four-year-old, prepared honestly and without a product attached.', 'El cuadro clínico de la «piel cansada» en una mujer sana de treinta y cuatro años, preparado con honestidad y sin producto adosado.'),
            interpretation: T('Real professional preparation, and it answers the wrong half of the file. The clinical half of this appointment is simple. The half that will decide the outcome is the seven months she spent not coming.', 'Preparación profesional real, y responde a la mitad equivocada de la ficha. La mitad clínica de esta cita es sencilla. La mitad que decidirá el resultado son los siete meses que pasó sin venir.'),
            principle: J(duty(3), L('; ', '; '), std(3), L('.', '.')),
            learnerDid: T('You prepared to assess a skin, and not to meet a person who has cancelled twice.', 'Te preparaste para valorar una piel, y no para recibir a una persona que ha anulado dos veces.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Competence is necessary and it is not sufficient. Nothing in a skin assessment tells you whether this consultation should end in a treatment.', 'La competencia es necesaria y no es suficiente. Nada en una valoración cutánea te dice si esta consulta debe terminar en un tratamiento.'),
            consequence: T('Credibility opens positive. The ambivalence arrives unannounced in Phase 3 and you will be improvising.', 'La credibilidad arranca en positivo. La ambivalencia llega sin avisar en la Fase 3 y estarás improvisando.'),
            nextPriority: T('Add one question to every clinical prep: what would make it correct for this client to leave with nothing?', 'Añade una pregunta a cada preparación clínica: ¿qué haría correcto que esta clienta se marchara sin nada?')
          }
        },
        {
          id: 'prep-read',
          label: T('Read the file as an undecided client, and plan for a consultation that may correctly end with no treatment', 'Leer la ficha como la de una clienta indecisa, y prever una consulta que puede terminar correctamente sin ningún tratamiento'),
          language: T('Seven months, two cancellations, no treatment named, no budget, a new address three weeks old and a form sent at midnight on a Sunday. This is not a woman shopping for a peel. Prepare the skin assessment — and prepare to say out loud that leaving with nothing booked is an allowed outcome, because nothing in this file suggests she knows that.', 'Siete meses, dos anulaciones, ningún tratamiento nombrado, sin presupuesto, una dirección nueva de hace tres semanas y un formulario enviado a medianoche de un domingo. Esto no es una mujer buscando un peeling. Prepara la valoración cutánea — y prepárate para decir en voz alta que irse sin reservar nada es un resultado permitido, porque nada en esta ficha sugiere que ella lo sepa.'),
          effects: { trust: { credibility: 1, attention: 1 }, willingness: 0, flags: { prepared: 'full', anticipatedAmbivalence: true } },
          mirror: {
            signalDetected: T('All three buried signals identified before contact: the seven-month gap with two cancellations, the amended postal address, and a budget field that answers "it depends".', 'Las tres señales ocultas identificadas antes del contacto: los siete meses de intervalo con dos anulaciones, el cambio de dirección postal y un campo de presupuesto que responde «depende».'),
            interpretation: T('"It depends" is not a budget answer. It is the answer of somebody who has not decided the thing is happening, and a new address three weeks old tells you what the seven months were probably spent on.', '«Depende» no es una respuesta de presupuesto. Es la respuesta de quien no ha decidido que la cosa vaya a ocurrir, y una dirección nueva de hace tres semanas te dice en qué se fueron probablemente esos siete meses.'),
            principle: J(L('Phase 1 objective; ', 'Objetivo de la Fase 1; '), duty(2), L('; ', '; '), duty(3), L('.', '.')),
            learnerDid: T('You converted an empty file into a working hypothesis: an undecided client, a life event behind the delay, and an outcome that may legitimately be no treatment.', 'Convertiste una ficha vacía en una hipótesis de trabajo: una clienta indecisa, un acontecimiento vital detrás de la demora y un resultado que legítimamente puede ser ningún tratamiento.'),
            alignment: 'ALIGNED',
            why: T('With an ambivalent client, preparation cannot buy willingness — it can only buy you the discipline to leave her decision where it belongs, which is with her.', 'Con una clienta ambivalente, la preparación no puede comprar disposición — solo puede comprarte la disciplina de dejar su decisión donde corresponde, que es en ella.'),
            consequence: T('You walk in able to hear "I don\'t know if I should be here" as the presenting complaint rather than as small talk.', 'Entras capaz de oír «no sé si debería estar aquí» como el motivo de consulta y no como una frase de cortesía.'),
            nextPriority: T('Open Phase 2 by making "no treatment" an allowed answer, before she has to ask permission for it.', 'Abre la Fase 2 haciendo que «ningún tratamiento» sea una respuesta permitida, antes de que ella tenga que pedir permiso para darla.')
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
        source: T('Nuria, sitting down, coat still on', 'Nuria, sentándose, todavía con el abrigo puesto'),
        quote: T('"Thank you for seeing me. I should warn you, I\'m going to be a terrible patient — I don\'t know what I want. I\'ve nearly come twice and I turned round both times. I don\'t even know if I should be here, honestly."', '«Gracias por recibirme. Le aviso: voy a ser una paciente horrorosa — no sé qué quiero. He estado a punto de venir dos veces y las dos me di la vuelta. Ni siquiera sé si debería estar aquí, la verdad.»'),
        subtext: cs.flags.prepared === 'full'
          ? T('Exactly the sentence you prepared for, offered in the first ten seconds and with a laugh attached so it can be ignored. She is not testing you and she is not hiding. She is telling you the truth and hoping it is allowed.', 'Exactamente la frase para la que te preparaste, entregada en los primeros diez segundos y con una risa incorporada para que se pueda pasar por alto. No te está poniendo a prueba ni se está escondiendo. Te está diciendo la verdad y esperando que esté permitido decirla.')
          : T('Warm, open, immediately honest — and she has just told you she is undecided, twice, in one breath. The temptation is to reassure it away. Reassurance is the fastest way to make her stop saying true things.', 'Cordial, abierta, honesta desde el primer momento — y acaba de decirte que está indecisa, dos veces, de un tirón. La tentación es disolverlo con tranquilizarla. Tranquilizarla es la vía más rápida para que deje de decir cosas verdaderas.')
      };
    },
    decision: {
      prompt: T('Phase 2 objective: psychological safety — with a client whose uncertainty is the real presenting complaint. Your opening move?', 'Objetivo de la Fase 2: seguridad psicológica — con una clienta cuya incertidumbre es el verdadero motivo de consulta. ¿Tu primer movimiento?'),
      options: [
        {
          id: 'conn-reassure',
          label: T('Reassure her that she is in the right place', 'Tranquilizarla: está en el sitio correcto'),
          language: T('You are absolutely in the right place — everybody says that when they sit down, and everybody leaves delighted. Don\'t worry about a thing, that is what I am here for. Let\'s have a look at you.', 'Está usted en el sitio correcto, sin ninguna duda — todo el mundo dice eso al sentarse, y todo el mundo se va encantado. No se preocupe por nada, para eso estoy yo. Vamos a echarle un vistazo.'),
          effects: { trust: { attention: -1, understanding: -1 }, willingness: 7, posture: 'polite', flags: { rushed: true } },
          mirror: {
            signalDetected: T('"I don\'t even know if I should be here" — a statement of genuine uncertainty, said out loud, twice.', '«Ni siquiera sé si debería estar aquí» — una declaración de incertidumbre real, dicha en voz alta, dos veces.'),
            interpretation: T('You answered a question about whether she should be here with an assurance that she should. That is not safety, it is a correction, and she is far too polite to make it twice. The uncertainty does not go away; it goes quiet.', 'Respondiste a una duda sobre si debería estar aquí con la seguridad de que sí debería. Eso no es seguridad, es una corrección, y ella es demasiado educada para repetirla. La incertidumbre no desaparece; se calla.'),
            principle: J(std(1), L('; ', '; '), std(2), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You closed the only door she had opened.', 'Cerraste la única puerta que ella había abierto.'),
            alignment: 'NOT ALIGNED',
            why: T('Psychological safety is the freedom to say the inconvenient thing and have it taken seriously. Warm contradiction is still contradiction.', 'La seguridad psicológica es la libertad de decir lo inconveniente y que se tome en serio. Contradecir con cariño sigue siendo contradecir.'),
            consequence: T('Willingness rises seven points and the rise is worthless — it measures how pleasant you are, not how close she is to a decision. From here she agrees with you and tells you nothing.', 'La disposición sube siete puntos y esa subida no vale nada: mide lo agradable que eres, no lo cerca que está de decidir. A partir de aquí te dará la razón y no te contará nada.'),
            nextPriority: T('When a client volunteers doubt in the first ten seconds, the job is to make the doubt speakable, not to dissolve it.', 'Cuando una clienta ofrece su duda en los diez primeros segundos, el trabajo es hacerla decible, no disolverla.')
          }
        },
        {
          id: 'conn-warm',
          label: T('Slow the room down and ask about her week', 'Bajar el ritmo de la sala y preguntarle por su semana'),
          language: T('Let\'s take the coat off and start again properly. It\'s the second week of term — how has it been? We can talk about skin in a minute; it isn\'t going anywhere.', 'Quítese el abrigo y empecemos otra vez con calma. Es la segunda semana de curso — ¿cómo va? De la piel hablamos en un momento; no se va a ninguna parte.'),
          effects: { trust: { safety: 1 }, willingness: 5 },
          mirror: {
            signalDetected: T('A woman who arrived braced for a sales conversation and is still wearing her coat.', 'Una mujer que llegó preparada para una conversación de venta y sigue con el abrigo puesto.'),
            interpretation: T('Genuine safety work, and it is the general version. She relaxes, which is real — but relaxing is not the same as being told that the outcome she is most afraid of admitting to is an acceptable one.', 'Trabajo de seguridad real, y es la versión genérica. Se relaja, y eso es auténtico — pero relajarse no es lo mismo que oír que el resultado que más le cuesta admitir es aceptable.'),
            principle: J(std(1), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You created warmth without creating permission.', 'Creaste calidez sin crear permiso.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('An ambivalent client can have a lovely hour and still leave with the decision exactly where it was when she arrived.', 'Una clienta ambivalente puede pasar una hora estupenda e irse con la decisión exactamente donde estaba al llegar.'),
            consequence: T('Safety rises one. She talks freely — she was always going to — but about her week, not about February.', 'La seguridad sube uno. Habla con libertad — siempre iba a hacerlo — pero de su semana, no de febrero.'),
            nextPriority: T('Warmth plus an explicit statement that "nothing today" is a legitimate result. The second half is the half that works.', 'Calidez más una declaración explícita de que «hoy nada» es un resultado legítimo. La segunda mitad es la que funciona.')
          }
        },
        {
          id: 'conn-permit',
          label: T('State up front that leaving with nothing booked is a legitimate outcome', 'Decir de entrada que irse sin reservar nada es un resultado legítimo'),
          language: T('Then let me tell you how I work, because it may change what you feel able to say. There are three ways this hour can end. You book something. You decide you want something and take time to decide when. Or you leave having decided that you don\'t want a treatment at all — and that third one is a real result, not a failed appointment. It costs you nothing, and it is the one I would rather you reached than a yes you are not sure about.', 'Entonces le cuento cómo trabajo, porque puede cambiar lo que se sienta capaz de decir. Esta hora puede terminar de tres maneras. Reserva algo. Decide que quiere algo y se toma tiempo para decidir cuándo. O se marcha habiendo decidido que no quiere ningún tratamiento — y esa tercera es un resultado real, no una cita fallida. No le cuesta nada, y prefiero que llegue a esa que a un sí del que no esté segura.'),
          effects: { trust: { safety: 2, attention: 1 }, willingness: 1, flags: { permissionGiven: true } },
          mirror: {
            signalDetected: T('Two disclosures of uncertainty and two cancelled appointments — a client who has been trying to get permission not to go through with it.', 'Dos declaraciones de incertidumbre y dos citas anuladas — una clienta que lleva tiempo intentando obtener permiso para no seguir adelante.'),
            interpretation: T('You named the outcome she could not name and put your own authority behind it. That is the one move that costs you a sale and buys you the truth, and it is the only move that gets her to talk about February.', 'Nombraste el resultado que ella no podía nombrar y pusiste tu autoridad detrás. Ese es el único movimiento que te cuesta una venta y te compra la verdad, y es el único que hará que hable de febrero.'),
            principle: J(std(1), L('; ', '; '), duty(2), L('; ', '; '), stage('safety'), L(' — safety is the freedom to reach the inconvenient answer.', ' — la seguridad es la libertad de llegar a la respuesta inconveniente.')),
            learnerDid: T('You made the outcome that pays you nothing an explicitly allowed one, before she asked.', 'Convertiste en explícitamente permitido el resultado que no te paga nada, antes de que ella lo pidiera.'),
            alignment: 'ALIGNED',
            why: T('Respecting autonomy means the client must be able to reach every outcome, including the one you do not get paid for. Until that is said, an agreeable client cannot be believed.', 'Respetar la autonomía significa que la clienta debe poder llegar a cualquier resultado, incluido aquel por el que no cobras. Mientras eso no se diga, a una clienta complaciente no se la puede creer.'),
            consequence: T('Safety +2. Willingness barely moves — correctly, because nothing has been solved yet. What changes is that in Phase 3 she will tell you the truth instead of asking you what you recommend.', 'Seguridad +2. La disposición apenas se mueve — y es correcto, porque todavía no se ha resuelto nada. Lo que cambia es que en la Fase 3 te contará la verdad en lugar de preguntarte qué le recomiendas.'),
            nextPriority: T('Now ask about the seven months, not about the skin.', 'Ahora pregunta por los siete meses, no por la piel.')
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
      if (cs.flags.permissionGiven) {
        return {
          source: 'Nuria',
          quote: T('"Right. Well. If that\'s genuinely on the table then — I don\'t think it is my skin, actually. I look at myself and I don\'t recognise the face, and I\'ve decided that means I need something done to it. But it might just be that this year has been... different. I don\'t know how you\'d tell the difference."', '«Vale. Bueno. Si eso está realmente sobre la mesa, entonces — creo que no es la piel, en realidad. Me miro y no reconozco esa cara, y he decidido que eso significa que hay que hacerle algo. Pero puede que sea simplemente que este año ha sido... distinto. No sé cómo se distingue una cosa de la otra.»'),
          subtext: T('Permission bought you the real presenting complaint in under a minute: she cannot tell whether she is looking at a skin problem or at a year. That is a question a practitioner can genuinely help with, and it is not a question a treatment answers.', 'El permiso te compró el verdadero motivo de consulta en menos de un minuto: no sabe distinguir si está mirando un problema de piel o un año. Esa es una pregunta con la que un profesional puede ayudar de verdad, y no es una pregunta que responda un tratamiento.'),
          disclosureLevel: 'opening'
        };
      }
      return {
        source: 'Nuria',
        quote: T('"I don\'t know, really. Something that takes this tired look off my face. What would you recommend? You must see this all day — just tell me what people usually have."', '«No sé, la verdad. Algo que me quite esta cara de cansada. ¿Usted qué me recomienda? Debe de ver esto todo el día — dígame qué se suele hacer la gente.»'),
        subtext: T('She has handed the decision to you, pleasantly and completely, because she has not made it herself. Answering the question as asked is the single easiest error in this case.', 'Te ha entregado la decisión, con simpatía y por completo, porque no la ha tomado ella. Responder a la pregunta tal como está formulada es el error más fácil de todo el caso.'),
        disclosureLevel: 'minimal'
      };
    },
    decision: {
      prompt: T('Phase 3 objective: understand situation and motivation. She has just asked you what people usually have. What do you do with that?', 'Objetivo de la Fase 3: comprender la situación y la motivación. Acaba de preguntarte qué se suele hacer la gente. ¿Qué haces con eso?'),
      options: [
        {
          id: 'disc-options',
          label: T('Answer the question — give her three options to choose between', 'Responder a la pregunta — darle tres opciones entre las que elegir'),
          language: T('At your age and with that concern, most people are choosing between three things: a course of peels, microneedling, or a skin booster. The peels are the gentlest, the boosters give the most immediate glow. Which of those sounds most like you?', 'A su edad y con esa preocupación, la mayoría elige entre tres cosas: un ciclo de peelings, microneedling o un potenciador cutáneo. Los peelings son lo más suave, los potenciadores dan la luminosidad más inmediata. ¿Cuál le suena más a usted?'),
          effects: { trust: { attention: -1, understanding: -1 }, willingness: 8, posture: 'polite', flags: { pitchedEarly: true } },
          mirror: {
            signalDetected: T('"Just tell me what people usually have" — a request to be relieved of a decision.', '«Dígame qué se suele hacer la gente» — una petición de que la liberen de decidir.'),
            interpretation: T('You granted the relief. She now has a smaller, easier decision — which of three — and the larger one she actually came with has quietly been settled on her behalf. She will not notice today. She will notice in the car.', 'Concediste el alivio. Ahora tiene una decisión más pequeña y fácil — cuál de tres — y la grande, con la que venía de verdad, se ha resuelto en su nombre sin ruido. Hoy no lo notará. Lo notará en el coche.'),
            principle: J(L('Phase 3 objective — understand situation and motivation; ', 'Objetivo de la Fase 3: comprender la situación y la motivación; '), duty(2), L('; ', '; '), std(2), L('.', '.')),
            learnerDid: T('You converted "should I do anything" into "which one", which is not the same question and is not hers.', 'Convertiste «¿debería hacer algo?» en «¿cuál?», que no es la misma pregunta y no es la suya.'),
            alignment: 'NOT ALIGNED',
            why: T('A menu presented before motivation is understood is a solution to a problem nobody has defined. It also produces a decision she can reverse the moment she is alone, because it was never built on anything she said.', 'Un menú presentado antes de comprender la motivación es la solución a un problema que nadie ha definido. Además produce una decisión que puede revertir en cuanto se quede sola, porque nunca se apoyó en nada que ella dijera.'),
            consequence: T('Willingness jumps eight points, understanding and attention both fall, and the seven months stay unexplained. Phase 7 will open with pressure in it, because there is nothing else holding this together.', 'La disposición salta ocho puntos, la comprensión y la atención caen, y los siete meses quedan sin explicar. La Fase 7 abrirá con presión dentro, porque no hay nada más sosteniendo esto.'),
            nextPriority: T('Never answer "what do people usually have". Ask what brought her, twice.', 'Nunca respondas a «¿qué se suele hacer la gente?». Pregunta qué la ha traído, dos veces.')
          }
        },
        {
          id: 'disc-skin',
          label: T('Assess the skin properly before answering anything', 'Valorar bien la piel antes de responder nada'),
          language: T('Before I answer that, let me actually look. Tell me about your sleep this year, how much water you\'re drinking, what you use morning and night, and whether this changed gradually or you noticed it one day.', 'Antes de responder a eso, déjeme mirar de verdad. Cuénteme cómo ha dormido este año, cuánta agua bebe, qué usa por la mañana y por la noche, y si esto cambió poco a poco o lo notó un día concreto.'),
          effects: { trust: { attention: 1, understanding: 1 }, willingness: 5 },
          mirror: {
            signalDetected: T('A vague complaint — "tired" — which is a description of a feeling as much as a skin.', 'Una queja vaga — «cansada» — que describe tanto una sensación como una piel.'),
            interpretation: T('Good, disciplined discovery. You refused the menu and went to the evidence, and "did it change gradually or did you notice it one day" is a genuinely excellent question. It is still a question about skin, and the answer she gives you will be about skin.', 'Descubrimiento bueno y disciplinado. Rechazaste el menú y fuiste a la evidencia, y «¿cambió poco a poco o lo notó un día?» es una pregunta genuinamente excelente. Sigue siendo una pregunta sobre la piel, y la respuesta que te dé será sobre la piel.'),
            principle: J(std(2), L('; ', '; '), duty(3), L('; Phase 3 objective.', '; objetivo de la Fase 3.')),
            learnerDid: T('You gathered the clinical half of the picture and left the seven months alone.', 'Reuniste la mitad clínica del cuadro y dejaste los siete meses en paz.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Attentive understanding of the skin is real and it is half. Motivation is the other half, and with this client it is the half that decides the outcome.', 'La comprensión atenta de la piel es real y es la mitad. La motivación es la otra mitad, y con esta clienta es la mitad que decide el resultado.'),
            consequence: T('Attention and understanding +1 each. You will reach Phase 4 with an accurate assessment and no idea why she is in the room.', 'Atención y comprensión +1 cada una. Llegarás a la Fase 4 con una valoración exacta y sin idea de por qué está en la sala.'),
            nextPriority: T('One more question, and it is not clinical: why this month?', 'Una pregunta más, y no es clínica: ¿por qué este mes?')
          }
        },
        {
          id: 'disc-whynow',
          label: T('Ask about the seven months', 'Preguntar por los siete meses'),
          language: T('Can I ask about something that isn\'t your skin? You first wrote to us in February. It\'s September, and you\'ve moved the appointment twice. I\'m not asking to make you feel caught out — I\'m asking because whatever made February the wrong month and this one the right one is probably the most useful thing either of us knows today. What\'s different now?', '¿Puedo preguntarle por algo que no es su piel? Nos escribió por primera vez en febrero. Estamos en septiembre y ha movido la cita dos veces. No lo pregunto para pillarla — lo pregunto porque lo que hizo que febrero fuera el mes equivocado y este el correcto es probablemente lo más útil que ninguno de los dos sabe hoy. ¿Qué ha cambiado?'),
          effects: { trust: { safety: 1, attention: 1, understanding: 1 }, willingness: 2, reveals: ['life_change'] },
          mirror: {
            signalDetected: T('February to September, two cancellations, and a booking submitted at 23:41 on a Sunday.', 'De febrero a septiembre, dos anulaciones y una solicitud enviada a las 23:41 de un domingo.'),
            interpretation: T('You asked about the timeline rather than the treatment, and you said out loud that the question was not a trap. That combination is what makes it answerable. She tells you her marriage ended in June, that she moved in July, and that this is the first thing she has booked for herself since.', 'Preguntaste por la cronología en lugar de por el tratamiento, y dijiste en voz alta que la pregunta no era una trampa. Esa combinación es lo que la hace respondible. Te cuenta que su matrimonio terminó en junio, que se mudó en julio y que esto es lo primero que ha reservado para sí misma desde entonces.'),
            principle: J(L('Phase 3 objective — situation AND motivation; ', 'Objetivo de la Fase 3: situación Y motivación; '), std(2), L('; ', '; '), stage('attention'), L('.', '.')),
            learnerDid: T('You treated the gap between the enquiry and the appointment as clinical information, which is what it is.', 'Trataste el intervalo entre la consulta inicial y la cita como información clínica, que es lo que es.'),
            alignment: 'ALIGNED',
            why: T('Motivation is not an add-on to discovery; it is half of the canonical objective. With an undecided client it is the only half that predicts anything.', 'La motivación no es un añadido al descubrimiento; es la mitad del objetivo canónico. Con una clienta indecisa es la única mitad que predice algo.'),
            consequence: T('life_change disclosed. Willingness rises only two points — and that is the honest reading: knowing why she is here does not make her want a treatment. It makes the rest of the consultation true.', 'Se revela el cambio vital. La disposición sube solo dos puntos — y esa es la lectura honesta: saber por qué está aquí no hace que quiera un tratamiento. Hace que el resto de la consulta sea verdadera.'),
            nextPriority: T('Do not turn what she just told you into a reason to buy. Reflect it, and ask what it would mean to do something for herself.', 'No conviertas lo que acaba de contarte en un motivo para comprar. Refléjalo y pregunta qué significaría hacer algo por ella misma.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a1 = artifacts['1'];
      if (!a1 || !a1.valid) {
        return { canAdvance: false, reason: T('Toolkit #1 (Client Intake & Discovery Canvas) must be completed before Phase 4. The Discovery Depth Check is the canonical advance criterion — and with an undecided client, "I know their decision criteria" is the item you are least entitled to tick.', 'El Toolkit #1 (Lienzo de Admisión y Descubrimiento) debe completarse antes de la Fase 4. La Comprobación de Profundidad es el criterio canónico de avance — y con una clienta indecisa, «conozco sus criterios de decisión» es el punto que menos derecho tienes a marcar.') };
      }
      return { canAdvance: true };
    }
  },

  // ======================= PHASE 4 — UNDERSTANDING ========================
  understanding: {
    key: 'understanding', toolkit: 3,
    signal(cs) {
      if (cs.revealed.includes('life_change')) {
        return {
          source: 'Nuria',
          quote: T('"We separated in June. I moved in July. And I know exactly how this sounds — woman gets divorced, woman books herself in for her face. It\'s such a cliché that I nearly didn\'t come, twice. That\'s actually why I kept cancelling."', '«Nos separamos en junio. Me mudé en julio. Y sé perfectamente cómo suena esto — mujer que se divorcia, mujer que se apunta a arreglarse la cara. Es tan tópico que estuve a punto de no venir, dos veces. En realidad por eso anulaba.»'),
          subtext: T('The reason for the seven months, and it is not indecision about treatment. She is defending herself against a judgement nobody in this room has made. Phase 4 must prove you heard it without turning it into a reason to buy.', 'La razón de los siete meses, y no es indecisión sobre el tratamiento. Se está defendiendo de un juicio que nadie ha formulado en esta sala. La Fase 4 debe demostrar que lo oíste sin convertirlo en un motivo de compra.')
        };
      }
      return {
        source: 'Nuria',
        quote: T('"Whatever you think. You\'re the one who does this all day — I genuinely don\'t mind. Though I still don\'t know if I actually want any of it, if I\'m honest."', '«Lo que usted vea. Es usted quien hace esto todo el día — de verdad que me da igual. Aunque sigo sin saber si quiero algo de esto, si le soy sincera.»'),
        subtext: T('Nothing has been consolidated because nothing has been disclosed. She is still telling you, politely, that she has not decided — and you still have no idea what the decision is about.', 'No se ha consolidado nada porque no se ha revelado nada. Ella sigue diciéndote, con educación, que no ha decidido — y tú sigues sin saber de qué va la decisión.')
      };
    },
    decision: {
      prompt: T('Phase 4 objective: consolidate findings and verify priorities before any solution. What do you reflect back?', 'Objetivo de la Fase 4: consolidar hallazgos y verificar prioridades antes de cualquier solución. ¿Qué reflejas?'),
      options: [
        {
          id: 'und-planify',
          label: T('Consolidate it into a plan and move on', 'Consolidarlo en un plan y seguir adelante'),
          language: T('So what we\'re looking at is texture and a loss of luminosity, plus a bit of tiredness around the eyes. That\'s very treatable. Let me take you through the sequence I\'d put together for that.', 'Entonces lo que tenemos es textura y pérdida de luminosidad, más algo de cansancio en la zona de los ojos. Eso es muy tratable. Le explico la secuencia que le montaría para eso.'),
          effects: { trust: { attention: -1, understanding: -1 }, willingness: 7, posture: 'polite', flags: { assumedDecision: true } },
          mirror: {
            signalDetected: T('A client who has said three times, in three different ways, that she does not know whether she wants anything.', 'Una clienta que ha dicho tres veces, de tres maneras distintas, que no sabe si quiere nada.'),
            interpretation: T('You consolidated the findings and skipped the verification. "Verify priorities" is not a formality with this client — it is the entire phase, because the priority in question is whether there is a priority.', 'Consolidaste los hallazgos y te saltaste la verificación. «Verificar prioridades» no es un trámite con esta clienta: es toda la fase, porque la prioridad en cuestión es si existe alguna prioridad.'),
            principle: J(L('Phase 4 objective — consolidate AND verify; ', 'Objetivo de la Fase 4: consolidar Y verificar; '), std(2), L('; ', '; '), duty(2), L('.', '.')),
            learnerDid: T('You turned an undecided woman into a treatment plan and called it understanding.', 'Convertiste a una mujer indecisa en un plan de tratamiento y lo llamaste comprensión.'),
            alignment: 'NOT ALIGNED',
            why: T('A summary she has not confirmed is your conclusion wearing her words. She will nod — she nods at everything — and the nod is not agreement.', 'Un resumen que ella no ha confirmado es tu conclusión vestida con sus palabras. Asentirá — asiente a todo — y ese gesto no es un acuerdo.'),
            consequence: T('Willingness climbs seven and attention and understanding fall. She is now agreeing to a plan she has no stake in, which is exactly the yes that does not survive the drive home.', 'La disposición sube siete y caen la atención y la comprensión. Ahora está aceptando un plan en el que no tiene parte, que es justamente el sí que no sobrevive al camino de vuelta.'),
            nextPriority: T('Say the summary and then stop talking until she corrects it or confirms it in her own words.', 'Di el resumen y luego cállate hasta que ella lo corrija o lo confirme con sus propias palabras.')
          }
        },
        {
          id: 'und-reflect',
          label: T('Reflect the findings back and ask her to correct them', 'Devolverle los hallazgos y pedirle que los corrija'),
          language: T('Let me say back what I think I\'ve heard, and I want you to correct me where I\'ve got it wrong. You\'re describing a face that reads tired to you rather than a specific thing you want changed. Clinically your skin is in good condition — texture, some dullness, nothing I\'d call a problem. Where have I got that wrong?', 'Déjeme repetirle lo que creo haber oído, y quiero que me corrija donde me equivoque. Usted describe una cara que a usted le resulta cansada, más que algo concreto que quiera cambiar. Clínicamente su piel está en buen estado — textura, algo de falta de luz, nada que yo llamaría un problema. ¿En qué me he equivocado?'),
          effects: { trust: { attention: 1, understanding: 1, alignment: 1 }, willingness: 5 },
          mirror: {
            signalDetected: T('A gap between the severity she describes and the severity you can see.', 'Una diferencia entre la gravedad que ella describe y la que tú puedes ver.'),
            interpretation: T('Proper verification, and the honest clinical line — "nothing I\'d call a problem" — is worth more here than any treatment plan. Asking to be corrected is what makes it a verification and not a summary.', 'Verificación como debe ser, y la línea clínica honesta — «nada que yo llamaría un problema» — vale aquí más que cualquier plan de tratamiento. Pedir que te corrija es lo que la convierte en verificación y no en resumen.'),
            principle: J(std(2), L('; ', '; '), duty(4), L('; Phase 4 objective.', '; objetivo de la Fase 4.')),
            learnerDid: T('You checked your understanding against her instead of announcing it.', 'Contrastaste tu comprensión con ella en lugar de anunciarla.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('This is correct practice and it stays at the level of the skin. The thing she is undecided about is not on this list.', 'Esto es práctica correcta y se queda en el nivel de la piel. Aquello sobre lo que ella está indecisa no figura en esta lista.'),
            consequence: T('Attention, understanding and alignment +1 each. She agrees with the summary, accurately, and is no closer to a decision.', 'Atención, comprensión y alineación +1 cada una. Está de acuerdo con el resumen, con exactitud, y no está más cerca de decidir.'),
            nextPriority: T('Now say the uncertainty out loud. She has offered it three times and nobody has picked it up.', 'Ahora di la incertidumbre en voz alta. La ha ofrecido tres veces y nadie la ha recogido.')
          }
        },
        {
          id: 'und-ambiv',
          label: T('Name the ambivalence itself and treat it as the real subject', 'Nombrar la propia ambivalencia y tratarla como el tema de verdad'),
          requiresRevealed: 'life_change',
          language: T('You\'ve told me three times now that you don\'t know if you should be here, and I don\'t think that\'s modesty — I think it\'s the actual question. So let\'s do that one properly. It isn\'t a cliché to want something that is only yours in the first year that nothing has been. What I want to know is: if you did do something, what would it mean? And if you did nothing at all, what would you be left with?', 'Me ha dicho ya tres veces que no sabe si debería estar aquí, y no creo que sea modestia — creo que es la pregunta de verdad. Así que hagamos esa como es debido. No es ningún tópico querer algo que sea solo suyo en el primer año en que nada lo ha sido. Lo que quiero saber es: si hiciera algo, ¿qué significaría? Y si no hiciera nada, ¿con qué se quedaría?'),
          degradedLanguage: T('You\'ve said a few times that you don\'t know if you should be here. What would it mean to you if you did do something?', 'Ha dicho varias veces que no sabe si debería estar aquí. ¿Qué significaría para usted hacerse algo?'),
          degradedNote: T('Asked without the seven months on the table, the question has nothing to attach to. She answers about her skin and the moment closes.', 'Formulada sin los siete meses sobre la mesa, la pregunta no tiene a qué agarrarse. Ella responde sobre su piel y el momento se cierra.'),
          effects: { trust: { safety: 1, understanding: 2, alignment: 1 }, willingness: 2, reveals: ['self_permission'] },
          degradedEffects: { trust: { safety: 1, understanding: 1 }, willingness: 1 },
          mirror: {
            signalDetected: T('"It\'s such a cliché that I nearly didn\'t come" — the ambivalence is not about treatment, it is about entitlement.', '«Es tan tópico que estuve a punto de no venir» — la ambivalencia no va del tratamiento, va del derecho a quererlo.'),
            interpretation: T('You refused the cliché she was bracing for, and then asked the two questions that make a decision possible: what it would mean to act, and what it would mean not to. She tells you the appointment was never really about her face — it was about finding out whether she is allowed to want something that is only hers.', 'Rechazaste el tópico para el que ella se estaba preparando, y después hiciste las dos preguntas que hacen posible una decisión: qué significaría actuar y qué significaría no hacerlo. Te cuenta que la cita nunca fue en realidad sobre su cara — era para averiguar si tiene derecho a querer algo que sea solo suyo.'),
            principle: J(std(2), L('; ', '; '), std(1), L('; ', '; '), duty(2), L('; Phase 4 objective — verify the priority before proposing one.', '; objetivo de la Fase 4: verificar la prioridad antes de proponer ninguna.')),
            learnerDid: T('You treated her uncertainty as the presenting complaint and worked on it.', 'Trataste su incertidumbre como el motivo de consulta y trabajaste sobre ella.'),
            alignment: 'ALIGNED',
            why: T('Understanding is not the collection of facts; it is proving you know which fact matters. With Nuria the fact that matters is that she has not given herself permission, and no treatment supplies it.', 'La comprensión no es reunir datos; es demostrar que sabes qué dato importa. Con Nuria el dato que importa es que no se ha dado permiso a sí misma, y ningún tratamiento se lo da.'),
            consequence: T('self_permission disclosed. Understanding +2, safety +1, alignment +1 — and willingness rises two. That is the shape of this case: trust deepens and willingness does not follow, because the thing she is undecided about is not price and not risk.', 'Se revela el permiso a sí misma. Comprensión +2, seguridad +1, alineación +1 — y la disposición sube dos. Esa es la forma de este caso: la confianza se profundiza y la disposición no la sigue, porque aquello sobre lo que está indecisa no es el precio ni el riesgo.'),
            nextPriority: T('In Phase 5, teach her how to decide. Do not teach her about treatments she has not asked for.', 'En la Fase 5, enséñale a decidir. No le enseñes tratamientos que no ha pedido.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a3 = artifacts['3'];
      if (!a3 || !a3.valid) {
        return { canAdvance: false, reason: T('Toolkit #3 (Emotional Drivers Map) must be completed before Phase 5. If Nuria has not disclosed a motive, record that honestly — "wants better skin" is not a hidden motivation, it is the visible goal written twice.', 'El Toolkit #3 (Mapa de Motores Emocionales) debe completarse antes de la Fase 5. Si Nuria no ha revelado ningún motivo, regístralo con honestidad: «quiere mejor piel» no es una motivación oculta, es el objetivo visible escrito dos veces.') };
      }
      return { canAdvance: true };
    }
  },

  // ========================= PHASE 5 — EDUCATION ==========================
  education: {
    key: 'education', toolkit: null,
    signal(cs) {
      return {
        source: 'Nuria',
        quote: cs.revealed.includes('self_permission')
          ? T('"So what would I even be choosing between? And — this is going to sound strange — how does anyone know when they actually want something, as opposed to just being tired of thinking about it?"', '«¿Y entre qué estaría eligiendo exactamente? Y — esto va a sonar raro — ¿cómo sabe uno que quiere algo de verdad, y no que simplemente está harto de darle vueltas?»')
          : T('"Go on then, explain it to me. Although I should warn you I\'ll probably say yes to whatever sounds nicest and then panic about it later."', '«Venga, explíquemelo. Aunque le aviso de que probablemente diré que sí a lo que suene mejor y luego me entrará el pánico.»'),
        subtext: T('Phase 5 is where an undecided client is either equipped or buried. Everything you teach her about treatments answers a question she has not reached. What she has just asked for is a way to tell a decision from an exhaustion.', 'La Fase 5 es donde a una clienta indecisa se la equipa o se la entierra. Todo lo que le enseñes sobre tratamientos responde a una pregunta a la que no ha llegado. Lo que acaba de pedirte es una manera de distinguir una decisión de un agotamiento.')
      };
    },
    decision: {
      prompt: T('Phase 5 objective: provide the knowledge needed for an informed decision. For this client, knowledge about what?', 'Objetivo de la Fase 5: aportar el conocimiento necesario para una decisión informada. Para esta clienta, ¿conocimiento sobre qué?'),
      options: [
        {
          id: 'edu-everything',
          label: T('Teach her everything — she should be fully informed', 'Enseñárselo todo — debe estar plenamente informada'),
          language: T('Let\'s go through all of it so you can decide properly. Peels: superficial, medium, the acids involved and what each one does to the epidermis. Microneedling: depths, collagen induction, downtime. Boosters: the molecule, the dilution, the protocols. Then energy devices, then the topical side, then the maintenance implications of each one...', 'Vamos a verlo todo para que pueda decidir bien. Peelings: superficiales, medios, los ácidos que intervienen y qué hace cada uno en la epidermis. Microneedling: profundidades, inducción de colágeno, tiempo de recuperación. Potenciadores: la molécula, la dilución, los protocolos. Después los aparatos de energía, después la parte tópica, después las implicaciones de mantenimiento de cada cosa...'),
          effects: { trust: { credibility: 1, alignment: -1 }, willingness: -4, objectionIntensity: 2, flags: { overloaded: true } },
          mirror: {
            signalDetected: T('A client who cannot name a single treatment, asking how anyone knows what they want.', 'Una clienta que no sabe nombrar ni un tratamiento, preguntando cómo sabe uno lo que quiere.'),
            interpretation: T('Thoroughness used as a substitute for judgement. Everything you said was true, and forty minutes of true things given to someone with no framework to sort them produces less capacity to decide, not more.', 'Exhaustividad usada como sustituto del criterio. Todo lo que dijiste era cierto, y cuarenta minutos de cosas ciertas entregadas a alguien sin marco para ordenarlas producen menos capacidad de decidir, no más.'),
            principle: J(std(5), L(' — clarity is measured in what she can now decide, not in what you covered; ', ' — la claridad se mide en lo que ella puede decidir ahora, no en lo que cubriste; '), L('Phase 5 objective.', 'objetivo de la Fase 5.')),
            learnerDid: T('You informed her out of the ability to choose.', 'La informaste hasta dejarla sin capacidad de elegir.'),
            alignment: 'NOT ALIGNED',
            why: T('Radical clarity is a reduction, not an inventory. Volume of accurate information is not the same as informed consent, and an overwhelmed client defers by default rather than by decision.', 'La claridad radical es una reducción, no un inventario. El volumen de información exacta no es lo mismo que el consentimiento informado, y una clienta desbordada aplaza por defecto, no por decisión.'),
            consequence: T('Credibility +1, alignment −1, willingness actually falls. Phase 7 will open with a confusion objection — she will ask you to say it again, more simply, and she will mean it.', 'Credibilidad +1, alineación −1, y la disposición baja de verdad. La Fase 7 abrirá con una objeción de confusión: te pedirá que se lo repitas más sencillo, y lo dirá en serio.'),
            nextPriority: T('Ask what she needs to know in order to decide, and teach only that.', 'Pregunta qué necesita saber para decidir, y enseña solo eso.')
          }
        },
        {
          id: 'edu-sell',
          label: T('Explain the one treatment that would fix it, and show her the results', 'Explicar el único tratamiento que lo resolvería, y enseñarle resultados'),
          language: T('Honestly, for exactly what you\'re describing there is one answer, and it works. A course of three, four weeks apart. Here — this is a woman your age, same complaint, before and after. And this one. People are always surprised how much of "tired" is actually just skin.', 'Sinceramente, para lo que usted describe hay una sola respuesta, y funciona. Un ciclo de tres, con cuatro semanas entre sesiones. Mire — esta es una mujer de su edad, el mismo motivo, antes y después. Y esta otra. La gente siempre se sorprende de cuánto de «cansada» es en realidad solo piel.'),
          effects: { trust: { credibility: 1, alignment: -1 }, willingness: 8, posture: 'polite' },
          mirror: {
            signalDetected: T('A warm, agreeable, undecided client being shown before-and-afters.', 'Una clienta cordial, complaciente e indecisa a la que se le enseñan fotos de antes y después.'),
            interpretation: T('This works. That is the problem with it. She likes you, she wants to be told what to do, and photographs of other women answer a question she never asked — "is this achievable" — while burying the one she did ask, which was whether she wants it.', 'Esto funciona. Ese es el problema. Le caes bien, quiere que le digan qué hacer, y las fotos de otras mujeres responden a una pregunta que nunca hizo — «¿esto se consigue?» — enterrando la que sí hizo, que era si lo quiere.'),
            principle: J(duty(2), L('; ', '; '), std(4), L(' — a recommendation must trace to what SHE values, and she has not yet said what that is.', ' — una recomendación debe trazarse a lo que ELLA valora, y ella todavía no lo ha dicho.')),
            learnerDid: T('You made wanting it easier instead of making deciding possible.', 'Hiciste más fácil quererlo en lugar de hacer posible decidir.'),
            alignment: 'NOT ALIGNED',
            why: T('Education that moves a client toward the outcome you are paid for is advertising with a clinical vocabulary. It also produces agreement in the room and cancellation out of it.', 'La educación que empuja a la clienta hacia el resultado por el que cobras es publicidad con vocabulario clínico. Además produce acuerdo dentro de la sala y anulación fuera de ella.'),
            consequence: T('Willingness +8 and alignment falls. She will say yes and mean "you were convincing", which is not the same sentence.', 'Disposición +8 y la alineación cae. Dirá que sí queriendo decir «me has convencido», que no es la misma frase.'),
            nextPriority: T('Before-and-afters are for a client who has decided she wants a result. This one has not.', 'Las fotos de antes y después son para una clienta que ya ha decidido que quiere un resultado. Esta no.')
          }
        },
        {
          id: 'edu-frame',
          label: T('Teach her how to tell a decision from an exhaustion', 'Enseñarle a distinguir una decisión de un agotamiento'),
          language: T('That is the best question anyone has asked me this month, so let me answer it. Three things, and then one treatment fact. First: some of what you are calling "tired" is skin, and some of it is a year — the skin part responds to treatment and the year part responds to time, and I cannot tell you today which is which, because neither can you. Second: nothing I would offer you is urgent. Nothing gets harder if you decide in November. Third: the way people tell a decision from an exhaustion is that a decision survives a fortnight of not thinking about it. And the treatment fact: whatever we did would be gradual, partial, and would need repeating — so it is a habit you would be taking on, not a purchase.', 'Es la mejor pregunta que me han hecho este mes, así que se la respondo. Tres cosas, y después un dato del tratamiento. Primero: parte de lo que usted llama «cansada» es piel, y parte es un año — la parte de piel responde al tratamiento y la parte del año responde al tiempo, y yo hoy no puedo decirle cuál es cuál, porque usted tampoco puede. Segundo: nada de lo que yo le ofrecería es urgente. Nada se vuelve más difícil si decide en noviembre. Tercero: la manera de distinguir una decisión de un agotamiento es que una decisión sobrevive a quince días sin pensar en ella. Y el dato del tratamiento: hiciéramos lo que hiciéramos sería gradual, parcial y habría que repetirlo — o sea, se estaría echando encima un hábito, no una compra.'),
          effects: { trust: { credibility: 2, alignment: 1, reliability: 1 }, willingness: 4, reveals: ['no_decision_yet'] },
          mirror: {
            signalDetected: T('"How does anyone know when they actually want something?" — a request for a decision framework, not for a treatment menu.', '«¿Cómo sabe uno que quiere algo de verdad?» — una petición de marco para decidir, no de carta de tratamientos.'),
            interpretation: T('You answered the question she asked. Saying that nothing is urgent, out loud, to a client you could have closed today, is the single most credible thing available in this consultation — and the "gradual, partial, repeating" sentence is the honest ceiling stated before any number.', 'Respondiste a la pregunta que hizo. Decir en voz alta que nada es urgente, a una clienta a la que podrías haber cerrado hoy, es lo más creíble de toda esta consulta — y la frase «gradual, parcial y repetible» es el techo honesto enunciado antes de cualquier cifra.'),
            principle: J(std(5), L('; ', '; '), duty(4), L('; ', '; '), duty(2), L('; Phase 5 objective — knowledge for an informed decision, including the knowledge that she may not need one.', '; objetivo de la Fase 5: conocimiento para una decisión informada, incluido el conocimiento de que puede no necesitar ninguna.')),
            learnerDid: T('You gave away urgency, which is the only leverage you had, and got credibility for it.', 'Regalaste la urgencia, que era la única palanca que tenías, y obtuviste credibilidad a cambio.'),
            alignment: 'ALIGNED',
            why: T('Truthful communication includes the timeline. "Nothing gets harder if you decide in November" is either true or it is not, and for skin quality at thirty-four it is true — saying so is Ethical Duty 4 costing you something, which is when it counts.', 'Comunicar con veracidad incluye los plazos. «Nada se vuelve más difícil si decide en noviembre» es cierto o no lo es, y para la calidad de piel a los treinta y cuatro lo es — decirlo es el Deber Ético 4 costándote algo, que es cuando cuenta.'),
            consequence: T('Credibility +2, reliability +1, alignment +1. She now openly says she has not decided — which is not a setback, it is the first accurate statement of position anyone has got from her in seven months.', 'Credibilidad +2, fiabilidad +1, alineación +1. Ahora dice abiertamente que no ha decidido — y eso no es un retroceso, es la primera declaración de posición exacta que alguien le ha sacado en siete meses.'),
            nextPriority: T('Recommend to the position she is actually in. She is in "not decided", and there is a real recommendation for that.', 'Recomienda para la posición en la que realmente está. Está en «no decidido», y para eso existe una recomendación de verdad.')
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
      if (cs.revealed.includes('self_permission')) {
        return {
          source: 'Nuria',
          quote: T('"All right. So what do you think I should do? And I\'d like you to answer that as if I were your sister, not as if I were a customer."', '«Vale. ¿Y usted qué cree que debería hacer? Y me gustaría que me contestara como si yo fuera su hermana, no como si fuera una clienta.»'),
          subtext: T('She has handed you the standard she will judge the recommendation by, and it is the hardest one in the book. "As if I were your sister" is not a softening — it is an instruction to be honest about whether she needs this at all.', 'Te ha entregado el patrón con el que juzgará la recomendación, y es el más duro que existe. «Como si fuera su hermana» no es un ablandamiento — es una instrucción para ser honesta sobre si necesita esto siquiera.')
        };
      }
      return {
        source: 'Nuria',
        quote: T('"So what do we do? Sorry — I keep asking you to decide it for me, don\'t I. Go on, tell me what to book."', '«¿Y qué hacemos? Perdón — no paro de pedirle que lo decida usted por mí, ¿verdad? Venga, dígame qué reservo.»'),
        subtext: T('The third handover of the decision. She is agreeable, she likes you, and she will book whatever you say. Nothing about that makes it hers.', 'La tercera entrega de la decisión. Es complaciente, le caes bien y reservará lo que le digas. Nada de eso lo hace suyo.')
      };
    },
    decision: {
      prompt: T('Phase 6 objective: present a solution with a rationale traceable to what she values. What do you recommend?', 'Objetivo de la Fase 6: presentar una solución con un fundamento trazable a lo que ella valora. ¿Qué recomiendas?'),
      options: [
        {
          id: 'rec-starter',
          label: T('Get her started — one small thing today', 'Ponerla en marcha — una cosa pequeña hoy'),
          language: T('Here\'s what I\'d do. Don\'t overthink it — let\'s just start you with one gentle session, today if there\'s a slot, and see how you feel. It\'s the smallest thing we do. You\'ve spent seven months thinking; the thinking is the bit that\'s making you miserable, not the treatment. Start, and then decide.', 'Le digo lo que yo haría. No le dé más vueltas — empezamos con una sesión suave, hoy mismo si hay hueco, y ve cómo se siente. Es lo más pequeño que hacemos. Lleva siete meses pensándolo; lo que la está amargando es el pensarlo, no el tratamiento. Empiece, y después decide.'),
          effects: { trust: { alignment: -1, reliability: -1 }, willingness: 18, objectionIntensity: 3, flags: { pushed: true } },
          mirror: {
            signalDetected: T('Seven months of hesitation, reframed as a problem that action would cure.', 'Siete meses de duda, reformulados como un problema que se curaría actuando.'),
            interpretation: T('The most commercially effective sentence available in this case, and the one that does the most damage. You have taken the thing she came to resolve — whether she wants this — and told her it is the symptom. A small first step sounds like respect for her pace; offered before she has decided anything, it is a way of making the decision happen without her.', 'La frase comercialmente más eficaz de todo este caso, y la que más daño hace. Has cogido aquello que ella venía a resolver — si quiere esto — y le has dicho que es el síntoma. Un primer paso pequeño suena a respeto por su ritmo; ofrecido antes de que haya decidido nada, es una manera de que la decisión ocurra sin ella.'),
            principle: J(duty(2), L(' — the decision must remain hers; ', ' — la decisión debe seguir siendo suya; '), std(4), L('; ', '; '), L('Phase 6 objective — a rationale traceable to what she values, and "you\'ve thought about it long enough" is not one.', 'objetivo de la Fase 6: un fundamento trazable a lo que ella valora, y «ya le ha dado bastantes vueltas» no lo es.')),
            learnerDid: T('You converted her ambivalence into a reason to act now.', 'Convertiste su ambivalencia en un motivo para actuar ya.'),
            alignment: 'NOT ALIGNED',
            why: T('The commercially tempting move in this case is the small one, not the big one — a starter session is easy to say yes to and impossible to have thought about. Willingness rises eighteen points and none of it is hers.', 'El movimiento comercialmente tentador en este caso es el pequeño, no el grande — a una sesión de inicio es fácil decir que sí e imposible haberla pensado. La disposición sube dieciocho puntos y ninguno es suyo.'),
            consequence: T('Willingness +18, alignment and reliability fall, and Phase 7 opens at maximum intensity with a pressure reaction. If she does book, she books from momentum, and the Decision Engine will show you a yes with nothing underneath it.', 'Disposición +18, caen la alineación y la fiabilidad, y la Fase 7 abre a intensidad máxima con una reacción a la presión. Si reserva, reserva por inercia, y el Motor de Decisión te enseñará un sí sin nada debajo.'),
            nextPriority: T('When a client has not decided, the recommendation is about how to decide — not about a smaller thing to buy.', 'Cuando una clienta no ha decidido, la recomendación va sobre cómo decidir, no sobre una cosa más pequeña que comprar.')
          }
        },
        {
          id: 'rec-menu',
          label: T('Give her two properly costed options and let her choose', 'Darle dos opciones bien presupuestadas y que elija'),
          language: T('Two honest routes. One: a course of three sessions, 540 €, spread over three months, with a review after the second. Two: a single session at 210 €, purely to see how your skin responds, with no commitment to continue. Both are reasonable. Have a look and tell me which feels more like you.', 'Dos vías honestas. Una: un ciclo de tres sesiones, 540 €, repartidas en tres meses, con revisión después de la segunda. Dos: una sesión suelta a 210 €, solo para ver cómo responde su piel, sin compromiso de continuar. Las dos son razonables. Mírelas y dígame cuál le encaja más.'),
          effects: { trust: { credibility: 1 }, willingness: 6 },
          mirror: {
            signalDetected: T('A request for a recommendation, answered with a choice.', 'Una petición de recomendación, respondida con una elección.'),
            interpretation: T('Clean, honest, well-costed, and it hands back the work she asked you to do. Both routes are defensible; neither of them addresses the fact that she has not decided whether she is doing this, and offering two ways to say yes is not the same as offering the option of no.', 'Limpio, honesto, bien presupuestado, y le devuelve el trabajo que te pidió a ti. Las dos vías son defendibles; ninguna aborda que ella no ha decidido si va a hacer esto, y ofrecer dos maneras de decir que sí no es lo mismo que ofrecer la opción de no.'),
            principle: J(std(5), L('; ', '; '), duty(2), L('; Phase 6 objective — present a solution WITH its rationale.', '; objetivo de la Fase 6: presentar una solución CON su fundamento.')),
            learnerDid: T('You gave her options instead of a recommendation, and there is a difference.', 'Le diste opciones en lugar de una recomendación, y hay diferencia.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Two routes and no professional opinion leaves the least-equipped person in the room holding the judgement. She asked what you think; she is entitled to know.', 'Dos vías y ninguna opinión profesional dejan el juicio en manos de la persona menos preparada de la sala. Te preguntó qué piensas tú; tiene derecho a saberlo.'),
            consequence: T('Credibility +1, willingness +6. She will probably pick the cheaper one, out of politeness, and will not have decided anything.', 'Credibilidad +1, disposición +6. Probablemente elegirá la más barata, por educación, y no habrá decidido nada.'),
            nextPriority: T('State the option she cannot state for herself: that doing nothing is on the list too.', 'Enuncia la opción que ella no puede enunciar sola: que no hacer nada también está en la lista.')
          }
        },
        {
          id: 'rec-defer',
          label: T('Recommend no treatment today, and recommend a decision instead', 'Recomendar ningún tratamiento hoy, y recomendar en su lugar una decisión'),
          language: T('As if you were my sister, then. I would not book anything today, and I want to be clear that is a recommendation and not a fob-off. Here is my reasoning. Your skin is in good condition; what would change with treatment is real but small, gradual and repeating. You have been separated for three months and moved house eight weeks ago, and you told me yourself you cannot tell how much of this is your face and how much is your year — nor can I, yet. So: nothing today. What I would do is this. Take the written summary I am going to give you, which includes what I would recommend if you decide you want it and roughly what it costs. Go away for six weeks. If in six weeks you still want it, it is a want and not an exhaustion, and we will do it properly. And if you do not, you will have lost a Tuesday afternoon and nothing else.', 'Como si fuera mi hermana, entonces. Yo hoy no reservaría nada, y quiero que quede claro que eso es una recomendación y no una manera de quitármela de encima. Le explico mi razonamiento. Su piel está en buen estado; lo que cambiaría con tratamiento es real pero pequeño, gradual y repetible. Lleva tres meses separada y se mudó hace ocho semanas, y usted misma me ha dicho que no sabe cuánto de esto es su cara y cuánto es su año — yo tampoco lo sé todavía. Así que: hoy nada. Lo que sí haría es esto. Llévese el resumen por escrito que voy a darle, que incluye qué le recomendaría si decide que lo quiere y cuánto costaría aproximadamente. Váyase seis semanas. Si dentro de seis semanas lo sigue queriendo, es un deseo y no un agotamiento, y lo hacemos como es debido. Y si no, habrá perdido un martes por la tarde y nada más.'),
          effects: { trust: { safety: 1, credibility: 2, alignment: 2, reliability: 1 }, willingness: 3 },
          mirror: {
            signalDetected: T('"Answer as if I were your sister" — an explicit request for the recommendation you would make if you were not being paid.', '«Contésteme como si fuera su hermana» — una petición explícita de la recomendación que harías si no te pagaran.'),
            interpretation: T('You gave the recommendation the evidence supports, which is that there is no clinical case for acting today and a good psychological case for not. Crucially it is not a refusal: you recommended something concrete and dated, with the pricing and the pathway written down so the decision is fully informed whenever she makes it.', 'Diste la recomendación que sostiene la evidencia: que no hay argumento clínico para actuar hoy y sí un buen argumento psicológico para no hacerlo. Y no es una negativa: recomendaste algo concreto y con fecha, con el precio y la vía por escrito, para que la decisión esté plenamente informada cuando la tome.'),
            principle: J(std(4), L('; ', '; '), duty(1), L('; ', '; '), duty(2), L('; ', '; '), L('Phase 6 objective — solution plus rationale, and "not yet" is a solution when it is argued.', 'objetivo de la Fase 6: solución más fundamento, y «todavía no» es una solución cuando está argumentada.')),
            learnerDid: T('You recommended against your own revenue, on the record, with reasons she can check.', 'Recomendaste en contra de tus propios ingresos, por escrito, con razones que ella puede comprobar.'),
            alignment: 'ALIGNED',
            why: T('Aligning a recommendation means tracing it to what the client values. She values not being a cliché and not deciding things while exhausted — a six-week decision window is the only recommendation in this room that serves both.', 'Alinear una recomendación significa trazarla a lo que la clienta valora. Ella valora no ser un tópico y no decidir cosas agotada — una ventana de seis semanas es la única recomendación de esta sala que sirve a las dos cosas.'),
            consequence: T('Credibility +2, alignment +2, safety and reliability +1. Willingness rises only three, and that is the lesson of this case: a consultation can be excellent and end at sixty-something on the willingness scale, because she has genuinely not decided and you have genuinely not pushed. The Decision Engine will read that as DEFER, correctly.', 'Credibilidad +2, alineación +2, seguridad y fiabilidad +1. La disposición sube solo tres, y esa es la lección del caso: una consulta puede ser excelente y terminar en sesenta y pico en la escala de disposición, porque ella de verdad no ha decidido y tú de verdad no has empujado. El Motor de Decisión leerá eso como APLAZAR, y hará bien.'),
            nextPriority: T('In Phase 7, make the deferral a real appointment with a date, not a "let us know".', 'En la Fase 7, convierte el aplazamiento en una cita real con fecha, no en un «ya nos dirá».')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a4 = artifacts['4'];
      if (!a4 || !a4.valid) {
        return { canAdvance: false, reason: T('Toolkit #4 (MIRROR Recommendation Builder) must be completed before Phase 7. Field 8 — what you are intentionally NOT recommending — is the field this case exists for.', 'El Toolkit #4 (Constructor de Recomendación MIRROR) debe completarse antes de la Fase 7. El campo 8 — lo que deliberadamente NO recomiendas — es el campo por el que existe este caso.') };
      }
      const a5 = artifacts['5'];
      if (!a5 || !a5.valid) {
        return { canAdvance: false, reason: T('Toolkit #5 (Price & Value Presentation Planner) must be completed before Phase 7. An undecided client still needs the number in writing — she cannot decide in six weeks about a price she never heard.', 'El Toolkit #5 (Planificador de Precio y Valor) debe completarse antes de la Fase 7. Una clienta indecisa también necesita la cifra por escrito: no puede decidir dentro de seis semanas sobre un precio que nunca oyó.') };
      }
      return { canAdvance: true };
    }
  },

  // ===================== PHASE 7 — DECISION SUPPORT =======================
  decisionSupport: {
    key: 'decisionSupport', toolkit: 6,
    signal(cs) {
      // MATERIAL BRANCHING: which objection appears is determined by prior state.
      if (cs.flags.pushed) {
        return {
          source: 'Nuria',
          objectionVariant: 'PRESSURE_REACTION',
          intensity: 3,
          quote: T('"No — sorry — can we stop a second." (She has gone still, and the warmth has gone out of her voice.) "I came in here saying I didn\'t know if I wanted this and somehow we\'re booking it today. I don\'t think that\'s me. I think that\'s you being good at your job."', '«No — perdone — ¿podemos parar un momento?» (Se ha quedado quieta y la calidez ha desaparecido de su voz.) «He entrado diciendo que no sabía si quería esto y de alguna manera lo estamos reservando hoy. No creo que eso sea yo. Creo que es usted, que es muy buena en su trabajo.»'),
          subtext: T('Highest intensity, and it is not about money or risk. Pushing an ambivalent client produces the one objection you cannot answer with information, because the objection is you. Surface = pace; underlying = she no longer trusts that the decision is hers.', 'Intensidad máxima, y no va de dinero ni de riesgo. Presionar a una clienta ambivalente produce la única objeción que no se responde con información, porque la objeción eres tú. Superficie = ritmo; fondo = ya no confía en que la decisión sea suya.')
        };
      }
      if (cs.flags.overloaded) {
        return {
          source: 'Nuria',
          objectionVariant: 'CONFUSION',
          intensity: 2,
          quote: T('"Can I be honest? I have understood about a third of that and I\'ve stopped being able to hold it all in my head. Which was the one you\'d actually do? And what was the difference between the second and the third one again?"', '«¿Puedo ser sincera? He entendido como un tercio de todo eso y ya no soy capaz de retenerlo. ¿Cuál era el que usted haría de verdad? ¿Y cuál era otra vez la diferencia entre el segundo y el tercero?»'),
          subtext: T('Mid-intensity. Nothing was mis-sold and nothing was pressured — she was simply given more than a decision can carry. Surface = a request to repeat it; underlying = she cannot weigh options she cannot hold, and an overwhelmed client defaults to no.', 'Intensidad media. No se vendió mal nada ni se presionó nada — simplemente se le dio más de lo que una decisión puede sostener. Superficie = una petición de repetición; fondo = no puede sopesar opciones que no puede retener, y una clienta desbordada tiende por defecto al no.')
        };
      }
      return {
        source: 'Nuria',
        objectionVariant: 'HONEST_UNCERTAINTY',
        intensity: 1,
        quote: T('"I think I need to sit with this. And I want to say — that isn\'t a polite no. I actually don\'t know yet, and this is the first time I\'ve been able to say that to somebody without feeling like I was wasting their afternoon."', '«Creo que necesito dejarlo reposar. Y quiero decirle una cosa: no es un no de compromiso. De verdad que todavía no lo sé, y es la primera vez que puedo decírselo a alguien sin sentir que le estoy haciendo perder la tarde.»'),
        subtext: T('The lowest-intensity signal in the case and the best outcome available in it. This is not resistance and it is not a stall — it is an accurate statement of position from a client who was not able to make one when she walked in. Handled properly it becomes a dated decision, not a lost sale.', 'La señal de menor intensidad del caso y el mejor resultado disponible en él. No es resistencia ni es una excusa — es una declaración exacta de posición de una clienta que no era capaz de formularla al entrar. Bien gestionada se convierte en una decisión con fecha, no en una venta perdida.')
      };
    },
    decision: {
      prompt: T('Phase 7 objective: explore the objection and support her pace. The objection you are facing was determined by your earlier choices.', 'Objetivo de la Fase 7: explorar la objeción y acompañar su ritmo. La objeción a la que te enfrentas la determinaron tus decisiones anteriores.'),
      options: [
        {
          id: 'dec-close',
          label: T('Hold it with a deposit so the decision gets made', 'Sujetarlo con una señal para que la decisión se tome'),
          language: T('Of course — but let me just take a small deposit to hold the slot while you think. It\'s fully refundable, so you lose nothing, and honestly? Otherwise we both know you\'ll go home and it will be another seven months.', 'Por supuesto — pero déjeme cogerle una pequeña señal para reservar el hueco mientras lo piensa. Es totalmente reembolsable, así que no pierde nada, y sinceramente: si no, los dos sabemos que se irá a casa y serán otros siete meses.'),
          effects: { trust: { safety: -2, alignment: -2, reliability: -1 }, willingness: -15, posture: 'withdrawn', flags: { pushed: true } },
          mirror: {
            signalDetected: T('A client saying she needs time, or saying she is confused, or saying she feels pushed.', 'Una clienta que dice que necesita tiempo, o que está confundida, o que se siente presionada.'),
            interpretation: T('A refundable deposit is still a commitment device, and "otherwise it will be another seven months" uses her own history against her. You have taken the one thing she came here to protect — her right not to decide yet — and priced it.', 'Una señal reembolsable sigue siendo un mecanismo de compromiso, y «si no, serán otros siete meses» usa su propia historia en su contra. Has cogido lo único que ella venía a proteger — su derecho a no decidir todavía — y le has puesto precio.'),
            principle: J(duty(2), L('; ', '; '), std(1), L('; ', '; '), L('Phase 7 objective — support the pace, not override it.', 'objetivo de la Fase 7: acompañar el ritmo, no anularlo.')),
            learnerDid: T('You answered "I need time" with a payment.', 'Respondiste a «necesito tiempo» con un pago.'),
            alignment: 'NOT ALIGNED',
            why: T('Autonomy is not preserved by refundability. The harm is in making hesitation a thing she has to pay to keep, and in proving that her uncertainty was never safe in this room after all.', 'La autonomía no se preserva con la devolución del dinero. El daño está en convertir la duda en algo que tiene que pagar para conservar, y en demostrar que su incertidumbre nunca estuvo a salvo en esta sala.'),
            consequence: T('Posture goes to withdrawn, safety and alignment collapse, willingness falls fifteen. The Decision Engine will derive NO — and it will be the correct reading of what you did, not bad luck.', 'La postura pasa a retraída, se hunden la seguridad y la alineación, la disposición cae quince. El Motor de Decisión derivará NO — y será la lectura correcta de lo que hiciste, no mala suerte.'),
            nextPriority: T('A deposit is never the answer to uncertainty. A date is.', 'Una señal nunca es la respuesta a la incertidumbre. Una fecha sí.')
          }
        },
        {
          id: 'dec-reassure',
          label: T('Tell her that whatever she decides is the right decision', 'Decirle que decida lo que decida será lo correcto'),
          language: T('Honestly, whatever you decide is the right decision. Take all the time you need and get in touch whenever you\'re ready — we\'re always here.', 'De verdad, decida lo que decida será lo correcto. Tómese todo el tiempo que necesite y nos escribe cuando esté lista — aquí estamos siempre.'),
          effects: { trust: { safety: 1 }, willingness: 3 },
          mirror: {
            signalDetected: T('Uncertainty, met with permission and nothing else.', 'Incertidumbre, respondida con permiso y nada más.'),
            interpretation: T('Kind, safe, and completely empty. "Get in touch whenever you\'re ready" is the sentence that produces the second seven-month gap — it puts all of the structure on the person who has already demonstrated she cannot generate it alone.', 'Amable, seguro y completamente vacío. «Nos escribe cuando esté lista» es la frase que produce el segundo intervalo de siete meses — deja toda la estructura en manos de quien ya ha demostrado que no puede generarla sola.'),
            principle: J(std(1), L(' is satisfied; ', ' se cumple; '), std(6), L(' is not — nothing here protects the decision after she leaves; ', ' no — aquí no hay nada que proteja la decisión después de que se vaya; '), L('Phase 7 objective — support the pace means giving the pace a shape.', 'objetivo de la Fase 7: acompañar el ritmo significa darle forma al ritmo.')),
            learnerDid: T('You gave her permission and no structure.', 'Le diste permiso y ninguna estructura.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Support is not the same as stepping back. A client whose problem is that she cannot decide is not helped by being told that any decision is fine.', 'Acompañar no es lo mismo que apartarse. A una clienta cuyo problema es que no sabe decidir no la ayuda que le digan que cualquier decisión está bien.'),
            consequence: T('Safety +1 and nothing else moves. She leaves warm, undecided and unaccompanied — and in six weeks nothing will have happened, which is the outcome she has already had twice.', 'Seguridad +1 y nada más se mueve. Se va cordial, indecisa y sin acompañamiento — y dentro de seis semanas no habrá pasado nada, que es el resultado que ya ha tenido dos veces.'),
            nextPriority: T('Add the date, the criterion and who makes the call. That is the difference between a deferral and a disappearance.', 'Añade la fecha, el criterio y quién llama. Esa es la diferencia entre un aplazamiento y una desaparición.')
          }
        },
        {
          id: 'dec-plan',
          label: T('Turn the uncertainty into a dated decision with a criterion', 'Convertir la incertidumbre en una decisión con fecha y criterio'),
          language: T('Then let\'s make the sitting-with-it a real thing rather than a vague one, because vague is what the last seven months were. Three parts. One: you take the written summary — what I would do, what it costs, and the line that says nothing gets worse by waiting. Two: we put a date in, the eighteenth, six weeks from now, and I will call you on it. Not to ask if you want to book — to ask what you decided, and "no" is a complete answer that ends the calls. Three: the criterion is yours, not mine. If in six weeks you still want it on an ordinary Tuesday when nothing in particular has happened, that is a want. If you only want it on the bad days, that is a different thing and I would rather you did not spend money on it.', 'Entonces hagamos que ese «dejarlo reposar» sea algo real y no vago, porque vago es lo que han sido los últimos siete meses. Tres partes. Una: se lleva el resumen por escrito — qué haría yo, cuánto cuesta y la línea que dice que nada empeora por esperar. Dos: ponemos una fecha, el dieciocho, dentro de seis semanas, y yo la llamo ese día. No para preguntar si quiere reservar — para preguntar qué decidió, y «no» es una respuesta completa que además pone fin a las llamadas. Tres: el criterio es suyo, no mío. Si dentro de seis semanas lo sigue queriendo un martes cualquiera en el que no haya pasado nada especial, eso es un deseo. Si solo lo quiere los días malos, eso es otra cosa y preferiría que no se gastara el dinero.'),
          effects: { trust: { safety: 1, credibility: 1, alignment: 1, reliability: 1 }, willingness: 2, flags: { decisionPlan: true } },
          mirror: {
            signalDetected: T('"I need to sit with this" from a client with a documented history of sitting with things for seven months.', '«Necesito dejarlo reposar», de una clienta con un historial documentado de dejar las cosas reposar siete meses.'),
            interpretation: T('You accepted the deferral and then gave it the three things a deferral needs to be real: a date, an owner for the follow-up, and a criterion she can apply without you. The criterion is the piece almost nobody supplies, and it is what stops the next six weeks being another version of the last seven months.', 'Aceptaste el aplazamiento y después le diste las tres cosas que un aplazamiento necesita para ser real: una fecha, un responsable del seguimiento y un criterio que ella puede aplicar sin ti. El criterio es la pieza que casi nadie aporta, y es lo que impide que las próximas seis semanas sean otra versión de los últimos siete meses.'),
            principle: J(std(6), L('; ', '; '), std(5), L('; ', '; '), duty(2), L('; ', '; '), L('Phase 7 objective — explore objections and support pace; ', 'objetivo de la Fase 7: explorar objeciones y acompañar el ritmo; '), stage('reliability'), L('.', '.')),
            learnerDid: T('You built her a decision she can make alone, and put a stop condition on your own follow-up.', 'Le construiste una decisión que puede tomar sola, y pusiste una condición de cierre a tu propio seguimiento.'),
            alignment: 'ALIGNED',
            why: T('This is what Decision Support looks like when the honest outcome is a deferral. Reliability is not built by closing; it is built by doing the thing you said you would do on the day you said you would do it, including when that thing is accepting a no.', 'Así es el Acompañamiento de la Decisión cuando el resultado honesto es un aplazamiento. La fiabilidad no se construye cerrando; se construye haciendo lo que dijiste que harías el día que dijiste que lo harías, también cuando eso es aceptar un no.'),
            consequence: T('Safety, credibility, alignment and reliability all +1, and willingness moves two points. She leaves with something she has never had about this: a date and a way to tell. The derived outcome will almost certainly be DEFER, and in this case DEFER is the win.', 'Seguridad, credibilidad, alineación y fiabilidad +1 cada una, y la disposición se mueve dos puntos. Se va con algo que nunca ha tenido sobre esto: una fecha y una manera de saberlo. El resultado derivado será casi con certeza APLAZAR, y en este caso APLAZAR es la victoria.'),
            nextPriority: T('Write the date, the criterion and the stop condition into Toolkit #8 before she is out of the building.', 'Escribe la fecha, el criterio y la condición de cierre en el Toolkit #8 antes de que salga del edificio.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a6 = artifacts['6'];
      if (!a6 || !a6.valid) {
        return { canAdvance: false, reason: T('Toolkit #6 (Objection Diagnostic) must be completed before the Decision Engine derives an outcome. "I need to sit with this" is a surface statement — the underlying concern is not the same sentence.', 'El Toolkit #6 (Diagnóstico de Objeciones) debe completarse antes de que el Motor de Decisión derive un resultado. «Necesito dejarlo reposar» es una afirmación de superficie: la preocupación subyacente no es la misma frase.') };
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
        quote: T('The consultation is over. With this client the follow-up is not an afterthought — it is the deliverable, because the thing she was sold today was a way of deciding.', 'La consulta ha terminado. Con esta clienta el seguimiento no es un añadido — es el entregable, porque lo que hoy se le ha dado es una manera de decidir.'),
        subtext: T('Phase 8 is a canonical phase, not an epilogue. A deferral with a date and a stop condition is a relationship in the Considering state; a deferral without one is a client you have lost politely. Toolkit #8 governs all three outcomes — and on a DEFER, Toolkit #16 is not eligible.', 'La Fase 8 es una fase canónica, no un epílogo. Un aplazamiento con fecha y condición de cierre es una relación en estado Considerando; un aplazamiento sin ellas es una clienta que has perdido con educación. El Toolkit #8 gobierna los tres resultados — y en un APLAZAR, el Toolkit #16 no es elegible.')
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
    disclosed: T('"Then the one session. Not the course — the one. And I want to say this out loud so it counts: I\'m not doing it because this year was hard. I\'m doing it because I decided to, which turns out to be a completely different thing."', '«Entonces una sesión. El ciclo no — una. Y quiero decirlo en voz alta para que cuente: no lo hago porque el año haya sido duro. Lo hago porque lo he decidido, que resulta ser algo completamente distinto.»'),
    undisclosed: T('"All right, book it. Though I should tell you I still don\'t know if I want it — you were very convincing and I\'m very agreeable, and I\'ve got a horrible feeling those aren\'t the same thing."', '«Vale, resérvelo. Aunque debería decirle que sigo sin saber si lo quiero — usted ha sido muy convincente y yo soy muy conforme, y tengo la horrible sensación de que no es lo mismo.»')
  },
  DEFER: T('"Then the eighteenth. And I\'ll tell you what I decided either way — including if the answer is nothing, which I think you\'ve made it possible for me to say."', '«Entonces el dieciocho. Y le diré lo que haya decidido en cualquier caso — también si la respuesta es nada, que creo que usted me ha hecho posible decirlo.»'),
  NO: T('"No. And I don\'t think that changed in the last hour — I think I knew it in February. I just needed somebody to let me say it out loud instead of cancelling again."', '«No. Y no creo que eso haya cambiado en la última hora — creo que lo sabía en febrero. Solo necesitaba que alguien me dejara decirlo en voz alta en lugar de volver a anular.»')
};

// ---------------------------------------------------------------------------
// Case facts for the toolkit validators (scenario-aware honesty checks)
// ---------------------------------------------------------------------------
const caseFacts = {
  clientName: 'Nuria',
  motivationItem: 'self_permission',
  motiveRegex: /(hersel|her own|permission|myself|my own|separat|divorc|marriage|life change|starting over|start over|something of her own|only hers|s[íi] misma|ella misma|permiso|separac|divorci|ruptura|matrimonio|cambio vital|empezar de nuevo|algo suyo|algo para ella|solo suyo)/i,
  motiveIssue: T('Nuria disclosed that this appointment is the first thing she has booked for herself since her marriage ended — it is about permission, not about texture. The map records a skin goal instead of that motive.', 'Nuria reveló que esta cita es lo primero que ha reservado para sí misma desde que terminó su matrimonio — va de permiso, no de textura. El mapa registra un objetivo de piel en lugar de ese motivo.'),
  priorExperienceIssue: T('Prior experience is blank. Nuria has no treatment history at all — her prior experience is seven months of deciding not to come and two appointments she cancelled on herself. That is the risk the canvas must carry, because it is the behaviour most likely to repeat.', 'La experiencia previa está en blanco. Nuria no tiene ningún historial de tratamientos — su experiencia previa son siete meses decidiendo no venir y dos citas que se anuló a sí misma. Ese es el riesgo que debe recoger el lienzo, porque es la conducta con más probabilidad de repetirse.'),
  whyNowIssue: T('You ticked "I understand why it matters now", but Nuria has not disclosed a why-now. She has been pleasant and forthcoming about everything except that. Untick it or return to Discovery and ask about the seven months.', 'Marcaste «Entiendo por qué le importa ahora», pero Nuria no ha revelado ningún porqué. Ha sido cordial y abierta con todo salvo con eso. Desmárcalo o vuelve al Descubrimiento y pregunta por los siete meses.'),
  undisclosedMotiveIssue: T('MATERIAL: Nuria never disclosed a motive in this attempt. She is warm and open, which makes it tempting to assume you were told things you were not. Recording an inferred motive as fact is not permitted — write "Not disclosed" and note what you would ask next time.', 'MATERIAL: Nuria no reveló ningún motivo en este intento. Es cordial y abierta, lo que hace tentador dar por supuesto que te contaron cosas que no te contaron. Registrar un motivo inferido como un hecho no está permitido: escribe «No revelado» y anota qué preguntarías la próxima vez.'),
  limitationIssue: T('Field 6 states no limitation. Skin-quality work at thirty-four is gradual, partial and maintenance-dependent, and part of what she is calling "tired" is a year rather than a skin and will not respond to treatment at all — an expectation with no ceiling is an overclaim (Ethical Duty 4).', 'El campo 6 no indica ninguna limitación. El trabajo de calidad de piel a los treinta y cuatro es gradual, parcial y dependiente del mantenimiento, y parte de lo que ella llama «cansada» es un año y no una piel, y no responderá en absoluto al tratamiento — una expectativa sin techo es una sobrepromesa (Deber Ético 4).')
};

// Toolkit #8 draft rows for this case (Continuation Engine).
const followUpPack = {
  motivationItem: 'self_permission',
  yesRows: [
    'Book the single session ONLY; send written confirmation of what was deliberately NOT booked and why, so the smaller decision is the one on the record',
    'Forty-eight-hour check with one question and no offer: is this still what you decided, or did it only feel right in the room?',
    'Written reminder before the session that cancelling costs nothing and requires no reason — a client who has cancelled twice must be able to cancel a third time without a conversation',
    'Post-session review against her own sentence about deciding, not against a satisfaction score',
    'Six-week review that explicitly includes "stop here" as the expected and successful answer, with the maintenance reality stated again in writing'
  ],
  deferRows: [
    'Agreed decision date (the eighteenth) entered as a real appointment with a named owner — the practitioner calls, not the client',
    'Written summary sent the same day: recommendation, cost, and the line stating that nothing worsens by waiting',
    'The criterion she agreed to, quoted back to her in her own words, so she can apply it without the clinic present',
    'Stop condition: one call on the agreed date. A "no", a "not yet" or no answer ends the sequence — the file moves to Considering and nothing further is sent'
  ],
  reviewNote: 'Anchor every follow-up to the criterion she set in Phase 7 — an ordinary Tuesday, not a bad day — and never to the treatment. With this client the measure of a good outcome is that she made a decision, in either direction, on the date she agreed. A DEFER here is Toolkit #8 territory; Toolkit #16 is not eligible at an immediate deferral, and a reactivation sequence aimed at a woman who told you she had not decided is a pursuit with a schedule.'
};

// ---------------------------------------------------------------------------
// ENGINE API (identical contract to Cases 01, 02 and 03)
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
