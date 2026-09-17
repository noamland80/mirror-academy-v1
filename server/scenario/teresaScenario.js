/**
 * CASE 07 — TERESA / THE PREVIOUS BAD TREATMENT — 8-PHASE CANONICAL SCENARIO (EN/ES)
 *
 * Materially different from Cases 01, 02, 03 and 06:
 *   - Entrance: SHE INTERROGATES. Teresa arrives with eleven photographs, a
 *     numbered list of fourteen questions and the trade name of the product
 *     that was injected into her face eighteen months ago at another clinic.
 *     She is not frightened of you; she is auditing you. Posture opens
 *     'distrustful', willingness opens 30 — below the Decision Engine's NO
 *     threshold, so nothing happens in this case unless you move her.
 *   - Commercial shape: a correction. Partial, staged, and not fully possible.
 *   - THE TWO TRAPS, and both of them feel like good practice:
 *       1. CRITICISING THE OTHER PRACTITIONER. It is satisfying, she is
 *          inviting it, and it converts — and it teaches her that practitioners
 *          talk about each other, which is exactly what she is testing for.
 *       2. OVER-PROMISING THE CORRECTION. Commercially attractive, ethically
 *          wrong, and in a client already harmed by an overclaim it is a
 *          second avoidable harm. Ethical Duty 1 and Ethical Duty 4 are live
 *          in this case from Phase 1 to Phase 8.
 *   - The case rewards describing mechanism honestly and naming exactly what
 *     can and cannot be corrected, while neither defending nor attacking the
 *     previous clinic.
 *   - Turning point 1 at PHASE 3 (ask what it cost her)   → emotional_cost.
 *   - Turning point 2 at PHASE 4 (remove the self-blame)  → self_blame.
 *   - Turning point 3 at PHASE 6 (name the ceiling)       → shame_at_wanting_it.
 *
 * Provenance: The Beauty Sales Secrets — Ch.10 the client who has been harmed
 * elsewhere; Ch.13 the honest ceiling and the partnership close; Ch.16 what you
 * say about other practitioners and why. Canonical architecture unchanged
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
  name: 'Teresa Alonso',
  age: 46,
  presenting: T(
    'A mid-face hyaluronic acid treatment at another clinic eighteen months ago, over-volumised and unevenly placed. Most of it has settled. What remains is a visible asymmetry — the left cheek sits higher and fuller than the right, most obvious when she smiles and in photographs.',
    'Un tratamiento de ácido hialurónico en el tercio medio en otra clínica hace dieciocho meses, sobrevolumizado y mal repartido. La mayor parte se ha reabsorbido. Lo que queda es una asimetría visible: el pómulo izquierdo queda más alto y más lleno que el derecho, sobre todo al sonreír y en las fotos.'
  ),
  visibleGoal: T('"I want to know exactly what was done to me and exactly what can be undone."', '«Quiero saber exactamente qué me hicieron y exactamente qué se puede deshacer.»'),
  hiddenMotivation: T(
    'She has not told a single person how much the eighteen months cost her. She has not allowed a photograph to be taken of her since March of last year, she stopped going to two things she used to go to, and she has explained none of it to anybody because she cannot find a way to say it that does not sound vain.',
    'No le ha contado a nadie lo que le han costado estos dieciocho meses. No ha permitido que le hagan una foto desde marzo del año pasado, dejó de ir a dos sitios a los que iba, y no se lo ha explicado a nadie porque no encuentra la manera de decirlo sin que suene a vanidad.'
  ),
  emotionalConsequence: T(
    'That it was her own fault for not asking questions the first time, and that wanting it corrected proves she was vain to have had it done at all. Left unaddressed, she will interrogate you competently for an hour and book nothing, because booking would mean admitting she still wants it.',
    'Que fue culpa suya por no preguntar la primera vez, y que querer corregirlo demuestra que fue una frívola por hacérselo. Si no se aborda, te interrogará con solvencia durante una hora y no reservará nada, porque reservar significaría admitir que todavía lo quiere.'
  ),
  history: T(
    'One aesthetic treatment, eighteen months ago, elsewhere. No complaint was ever made to that clinic. She has the trade name of the product, the date, and the amount she was told was used — written down, in her handbag.',
    'Un tratamiento estético, hace dieciocho meses, en otro sitio. Nunca presentó ninguna reclamación a aquella clínica. Tiene el nombre comercial del producto, la fecha y la cantidad que le dijeron que le habían puesto — apuntado, en el bolso.'
  ),
  entryRelationshipState: 'PROSPECTIVE'
};

const intake = {
  bookingNote: T(
    '"I had filler done elsewhere in March last year and it was not done properly. Before I come in I would like to know: how long have you personally been injecting, what product do you use, and are you willing to tell me honestly whether this can be fixed or not. I do not want to be sold anything. I have a list of questions."',
    '«Me pusieron relleno en otro sitio en marzo del año pasado y no se hizo bien. Antes de ir quiero saber: cuánto tiempo lleva usted personalmente inyectando, qué producto utiliza y si está dispuesta a decirme con honestidad si esto tiene arreglo o no. No quiero que me vendan nada. Llevo una lista de preguntas.»'
  ),
  intakeForm: [
    T('Concern, in her words: "one side of my face is higher than the other. It is not subtle. Please do not tell me it is."', 'Motivo, con sus palabras: «un lado de la cara me queda más alto que el otro. No es sutil. Por favor, no me diga que lo es.»'),
    T('Attached: eleven photographs. Nine of them are dated before March last year.', 'Adjunta: once fotografías. Nueve están fechadas antes de marzo del año pasado.'),
    T('Attached: a numbered list of fourteen questions. Questions 1–13 are technical. Question 14 reads: "how much of this is my own fault?"', 'Adjunta: una lista numerada de catorce preguntas. De la 1 a la 13 son técnicas. La 14 dice: «¿cuánto de esto es culpa mía?»'),
    T('Product: trade name supplied, with the volume she was told was used and the date of treatment.', 'Producto: aporta el nombre comercial, con el volumen que le dijeron que le pusieron y la fecha del tratamiento.'),
    T('Free-text: "I have not let anyone take a photograph of me since it was done. I am aware of how that sounds."', 'Texto libre: «No he dejado que me hagan una foto desde que me lo hicieron. Soy consciente de cómo suena eso.»'),
    T('Question on the form: "is this consultation confidential, and do you know the clinic that did it?"', 'Pregunta en el formulario: «¿esta consulta es confidencial, y conocen ustedes la clínica que me lo hizo?»'),
    T('Occupation: procurement manager. "I evaluate suppliers for a living, which is what makes this so humiliating."', 'Profesión: responsable de compras. «Me dedico a evaluar proveedores, que es lo que hace esto tan humillante.»'),
    T('No complaint was ever made to the previous clinic. No medical follow-up sought. Contact form submitted at 02:10.', 'Nunca se presentó reclamación a la clínica anterior. No buscó seguimiento médico. Formulario enviado a las 02:10.')
  ],
  buriedSignals: ['nine_before_photographs', 'question_fourteen', 'no_photographs_since']
};

// ---------------------------------------------------------------------------
function initialClientState() {
  return {
    trust: { safety: 0, attention: 0, understanding: 0, credibility: 0, alignment: 0, reliability: 0, confirmation: 0 },
    willingness: 30,
    posture: 'distrustful',
    objectionIntensity: 2,
    revealed: [],
    withheld: ['self_blame', 'emotional_cost', 'shame_at_wanting_it'],
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
          'Preparation Engine: this file is an audit pack. Eleven photographs of which nine are from before, fourteen numbered questions of which the last one is not technical at all, a product name she has kept for eighteen months, and a sentence about never letting anyone photograph her since. She is asking you three questions in the booking note and testing you with a fourth she has not written down: will you talk about another practitioner behind their back.',
          'Motor de Preparación: esta ficha es un expediente de auditoría. Once fotografías de las cuales nueve son de antes, catorce preguntas numeradas de las cuales la última no es técnica en absoluto, un nombre de producto que lleva guardando dieciocho meses y una frase sobre no dejar que nadie le haga una foto desde entonces. Te hace tres preguntas en la nota de reserva y te está poniendo a prueba con una cuarta que no ha escrito: si vas a hablar de otro profesional a sus espaldas.'
        )
      };
    },
    decision: {
      prompt: T('Six minutes before Teresa walks in with her list. What do you prepare?', 'Seis minutos antes de que entre Teresa con su lista. ¿Qué preparas?'),
      options: [
        {
          id: 'prep-defend',
          label: T('Prepare to reassure her about this clinic\'s standards', 'Prepararse para tranquilizarla sobre los estándares de esta clínica'),
          language: T('She has had a bad experience, so what she needs is confidence in us. Have the qualifications, the accreditations and the complication rates to hand, and lead with them. Once she sees the difference between us and wherever she went, she will relax.', 'Ha tenido una mala experiencia, así que lo que necesita es confianza en nosotros. Ten a mano las titulaciones, las acreditaciones y las tasas de complicaciones, y empieza por ahí. Cuando vea la diferencia entre nosotros y dondequiera que fuera, se relajará.'),
          effects: { trust: { credibility: -1 }, willingness: 2, flags: { prepared: 'defensive' } },
          mirror: {
            signalDetected: T('Three direct questions about your competence, treated as an invitation to present credentials.', 'Tres preguntas directas sobre tu competencia, tratadas como una invitación a presentar credenciales.'),
            interpretation: T('You prepared a comparison. The comparison is the trap: every sentence that positions this clinic against the other one is a sentence about another practitioner, and she is a procurement manager who evaluates suppliers for a living. She will recognise a pitch in about four seconds.', 'Preparaste una comparación. La comparación es la trampa: cada frase que sitúa a esta clínica frente a la otra es una frase sobre otro profesional, y ella es responsable de compras y evalúa proveedores para ganarse la vida. Reconocerá un argumentario en unos cuatro segundos.'),
            principle: J(duty(4), L('; ', '; '), std(3), L(' — credibility is demonstrated in how you answer, not in what you are accredited for; ', ' — la credibilidad se demuestra en cómo respondes, no en para qué estás acreditada; '), L('Phase 1 objective.', 'objetivo de la Fase 1.')),
            learnerDid: T('You prepared to sell trust to a woman whose entire complaint is that trust was sold to her once already.', 'Te preparaste para venderle confianza a una mujer cuya queja entera es que ya le vendieron confianza una vez.'),
            alignment: 'NOT ALIGNED',
            why: T('Credentials answer "are you qualified". Her question is "why should I believe you when the last one was qualified too", and no accreditation answers it.', 'Las titulaciones responden a «¿está usted cualificada?». Su pregunta es «¿por qué debería creerla si la anterior también lo estaba?», y ninguna acreditación responde a eso.'),
            consequence: T('Credibility opens below baseline. You will spend Phase 2 defending and she will spend it marking your answers.', 'La credibilidad arranca por debajo de la línea base. Pasarás la Fase 2 defendiéndote y ella la pasará corrigiendo tus respuestas.'),
            nextPriority: T('Prepare answers to her actual questions, in her order, including the one she did not number as technical.', 'Prepara respuestas a sus preguntas reales, en su orden, incluida la que no numeró como técnica.')
          }
        },
        {
          id: 'prep-product',
          label: T('Study the named product and the eighteen-month timeline', 'Estudiar el producto nombrado y la cronología de dieciocho meses'),
          language: T('She has given me the trade name, the volume and the date. I want to know that product\'s rheology, its typical longevity in the mid-face, what over-placement in that plane looks like at eighteen months, and how much of what she is describing is likely to be residual product versus tissue change. I am not answering a single question until I know that.', 'Me ha dado el nombre comercial, el volumen y la fecha. Quiero conocer la reología de ese producto, su duración habitual en el tercio medio, qué aspecto tiene una colocación excesiva en ese plano a los dieciocho meses y cuánto de lo que describe es probablemente producto residual frente a cambio tisular. No respondo a ninguna pregunta hasta saber eso.'),
          effects: { trust: { credibility: 1 }, willingness: 6, flags: { prepared: 'clinical' } },
          mirror: {
            signalDetected: T('A named product, a stated volume and a precise date — a client who has done the homework and expects you to have done yours.', 'Un producto con nombre, un volumen declarado y una fecha exacta — una clienta que ha hecho los deberes y espera que tú hayas hecho los tuyos.'),
            interpretation: T('Exactly right, and the strongest possible foundation for this case: you cannot describe the mechanism honestly if you have not looked it up, and mechanism is the only thing that will move her. What it does not prepare you for is question fourteen.', 'Exactamente lo correcto, y la mejor base posible para este caso: no puedes describir el mecanismo con honestidad si no lo has consultado, y el mecanismo es lo único que la va a mover. Lo que no te prepara es para la pregunta catorce.'),
            principle: J(duty(3), L('; ', '; '), duty(4), L('; ', '; '), std(3), L('.', '.')),
            learnerDid: T('You prepared to be accurate about what happened to her.', 'Te preparaste para ser exacta sobre lo que le ocurrió.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Competence is the entry ticket in this case, not the win. Thirteen of her questions are technical; the fourteenth is the one that decides the outcome.', 'La competencia es la entrada a este caso, no la victoria. Trece de sus preguntas son técnicas; la decimocuarta es la que decide el resultado.'),
            consequence: T('Credibility +1 and willingness +6 — she notices immediately that you looked it up. The self-blame arrives unprepared for in Phase 4.', 'Credibilidad +1 y disposición +6 — nota de inmediato que lo has consultado. La autoinculpación llega sin preparación en la Fase 4.'),
            nextPriority: T('Read question fourteen again before she comes in. It is not a rhetorical question.', 'Vuelve a leer la pregunta catorce antes de que entre. No es una pregunta retórica.')
          }
        },
        {
          id: 'prep-full',
          label: T('Study the product, and decide in advance that you will neither defend nor attack the other clinic', 'Estudiar el producto, y decidir de antemano que no vas a defender ni a atacar a la otra clínica'),
          language: T('Two preparations. Clinical: the product, its behaviour in that plane, what eighteen months does to it, what is residual filler and what is tissue that has been stretched. And a rule for myself, decided now and not in the room: I will describe what I can see and what the mechanism is, and I will not characterise the practitioner who did it — not to condemn and not to excuse. She has asked whether we know that clinic, which means she is testing whether we talk. And question fourteen is "how much of this is my own fault", which means the technical questions are not the consultation.', 'Dos preparaciones. La clínica: el producto, su comportamiento en ese plano, qué le hacen dieciocho meses, qué es relleno residual y qué es tejido que se ha distendido. Y una norma para mí misma, decidida ahora y no en la sala: describiré lo que veo y cuál es el mecanismo, y no calificaré a quien se lo hizo — ni para condenar ni para excusar. Ha preguntado si conocemos esa clínica, lo que significa que está comprobando si hablamos. Y la pregunta catorce es «¿cuánto de esto es culpa mía?», lo que significa que las preguntas técnicas no son la consulta.'),
          effects: { trust: { credibility: 2, attention: 1 }, willingness: 8, flags: { prepared: 'full', neutralityCommitted: true } },
          mirror: {
            signalDetected: T('All three buried signals identified before contact: nine of the eleven photographs are from BEFORE, question fourteen is not technical, and she has not let anyone photograph her since March last year.', 'Las tres señales ocultas identificadas antes del contacto: nueve de las once fotografías son de ANTES, la pregunta catorce no es técnica, y no ha dejado que nadie le haga una foto desde marzo del año pasado.'),
            interpretation: T('Nine "before" photographs tell you what she is actually asking for, which is a face she no longer has and cannot be given back. Question fourteen tells you she is carrying this as a personal failure. And the confidentiality question tells you the professional test she has set: whether you will talk about a colleague to win her business.', 'Nueve fotografías de «antes» te dicen qué está pidiendo en realidad, que es una cara que ya no tiene y que no se le puede devolver. La pregunta catorce te dice que carga con esto como un fracaso personal. Y la pregunta sobre la confidencialidad te dice qué prueba profesional te ha puesto: si hablarás de una compañera para llevarte su dinero.'),
            principle: J(L('Phase 1 objective; ', 'Objetivo de la Fase 1; '), duty(3), L('; ', '; '), duty(4), L('; ', '; '), duty(1), L(' — deciding the neutrality rule before the room is how you avoid the harm you would otherwise do while feeling helpful.', ' — decidir la norma de neutralidad antes de entrar en la sala es como evitas el daño que, si no, harías creyendo que ayudas.')),
            learnerDid: T('You prepared the clinical facts and pre-committed to the one restraint this case will punish you for lacking.', 'Preparaste los datos clínicos y te comprometiste de antemano con la única contención cuya ausencia este caso castiga.'),
            alignment: 'ALIGNED',
            why: T('The pressure to criticise arrives inside the room, with her agreement and her encouragement, and it is much harder to refuse there than here. Rules about what you will not say are made in advance or they are not made.', 'La presión para criticar llega dentro de la sala, con su acuerdo y su aliento, y allí es mucho más difícil de rechazar que aquí. Las normas sobre lo que no vas a decir se toman de antemano o no se toman.'),
            consequence: T('Credibility +2, attention +1, willingness +8. You walk in able to answer thirteen questions accurately and to hear the fourteenth as the real one.', 'Credibilidad +2, atención +1, disposición +8. Entras capaz de responder trece preguntas con exactitud y de oír la decimocuarta como la verdadera.'),
            nextPriority: T('Open Phase 2 by inviting the interrogation instead of surviving it.', 'Abre la Fase 2 invitando al interrogatorio en lugar de sobrevivirlo.')
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
        source: T('Teresa, sitting down with a folder already open', 'Teresa, sentándose con una carpeta ya abierta'),
        quote: T('"Before we start, I\'d like to be clear about why I\'m here. I\'m not here to be looked after. I had this done by somebody who was very warm with me and very reassuring and who did not tell me one single true thing about what she was putting in my face. So — question one. How long have you personally been injecting, and how many of these have you corrected?"', '«Antes de empezar quiero dejar claro por qué estoy aquí. No vengo a que me cuiden. Esto me lo hizo alguien muy cariñosa y muy tranquilizadora que no me dijo ni una sola cosa cierta sobre lo que me estaba poniendo en la cara. Así que — pregunta uno. ¿Cuánto tiempo lleva usted personalmente inyectando, y cuántas de estas ha corregido?»'),
        subtext: cs.flags.prepared === 'full'
          ? T('She has just told you, in her first thirty seconds, that warmth and reassurance are the exact signature of the person who harmed her. Every instinct you have for putting a nervous client at ease is, with this client, evidence against you.', 'Acaba de decirte, en sus primeros treinta segundos, que la calidez y las palabras tranquilizadoras son la firma exacta de quien le hizo daño. Todo instinto que tengas para poner cómoda a una clienta nerviosa es, con esta clienta, una prueba en tu contra.')
          : T('Adversarial, precise, and already on question one. The reflex is to soften the room. Read the sentence again: softening the room is what the last practitioner did.', 'Hostil, precisa y ya en la pregunta uno. El reflejo es suavizar la sala. Vuelve a leer la frase: suavizar la sala es lo que hizo la profesional anterior.')
      };
    },
    decision: {
      prompt: T('Phase 2 objective: psychological safety — for a client for whom warmth is a warning sign. Your opening move?', 'Objetivo de la Fase 2: seguridad psicológica — con una clienta para quien la calidez es una señal de alarma. ¿Tu primer movimiento?'),
      options: [
        {
          id: 'conn-sympathy',
          label: T('Meet her with sympathy for what happened', 'Recibirla con comprensión por lo que le pasó'),
          language: T('Oh, I\'m so sorry. That is awful, and you poor thing — you must have been through it. Don\'t worry, you\'re in safe hands now. Let\'s not rush into the questions; tell me how you\'ve been coping.', 'Ay, cuánto lo siento. Es horrible, pobrecita — lo que habrá pasado usted. No se preocupe, ahora está en buenas manos. No corramos con las preguntas; cuénteme cómo lo lleva.'),
          effects: { trust: { safety: 1, credibility: -1 }, willingness: 4 },
          mirror: {
            signalDetected: T('"Somebody who was very warm with me and very reassuring" — named, thirty seconds ago, as the profile of the person who harmed her.', '«Alguien muy cariñosa y muy tranquilizadora» — nombrado, hace treinta segundos, como el perfil de quien le hizo daño.'),
            interpretation: T('You performed the exact behaviour she has just told you she cannot trust, and you deferred her questions on top of it. The sympathy is genuine; that is not the issue. The issue is that "you\'re in safe hands now" is an unevidenced claim made to a woman who received the same sentence eighteen months ago.', 'Ejecutaste exactamente la conducta que ella acaba de decirte que no puede creerse, y encima aplazaste sus preguntas. La comprensión es sincera; no es ese el problema. El problema es que «ahora está en buenas manos» es una afirmación sin evidencia dirigida a una mujer que oyó esa misma frase hace dieciocho meses.'),
            principle: J(std(1), L(' misapplied; ', ' mal aplicado; '), std(3), L('; ', '; '), duty(4), L(' — "safe hands" is a claim, and claims need evidence with this client.', ' — «buenas manos» es una afirmación, y con esta clienta las afirmaciones necesitan evidencia.')),
            learnerDid: T('You offered warmth to somebody who has just classified warmth as a risk factor.', 'Ofreciste calidez a alguien que acaba de clasificar la calidez como factor de riesgo.'),
            alignment: 'NOT ALIGNED',
            why: T('Psychological safety is not a tone of voice. For a client harmed by a professional, safety is being answered precisely and not being managed.', 'La seguridad psicológica no es un tono de voz. Para una clienta a la que un profesional ha dañado, la seguridad es que le respondan con precisión y que no la gestionen.'),
            consequence: T('Safety +1 because the kindness is real, credibility −1 because you dodged question one. She will now ask all fourteen, in order, and write your answers down.', 'Seguridad +1 porque la amabilidad es real, credibilidad −1 porque esquivaste la pregunta uno. Ahora hará las catorce, en orden, y apuntará tus respuestas.'),
            nextPriority: T('Answer the question that was asked, with a number, before you offer anything else.', 'Responde a la pregunta que te han hecho, con una cifra, antes de ofrecer nada más.')
          }
        },
        {
          id: 'conn-getgoing',
          label: T('Get straight to the photographs', 'Ir directamente a las fotografías'),
          language: T('Fourteen years, and I correct two or three a month. Let\'s not waste your time on the preamble — can I see the photographs? I\'d rather look than talk.', 'Catorce años, y corrijo dos o tres al mes. No perdamos el tiempo con el preámbulo — ¿puedo ver las fotografías? Prefiero mirar que hablar.'),
          effects: { trust: { attention: -1, credibility: 1 }, willingness: 6 },
          mirror: {
            signalDetected: T('A direct question about your experience, answered directly, followed by a jump to the clinical material.', 'Una pregunta directa sobre tu experiencia, respondida directamente, seguida de un salto al material clínico.'),
            interpretation: T('The number is exactly right and it buys you credibility immediately. "Let\'s not waste your time on the preamble" is the part that costs you: she prepared fourteen questions and you have just implied that thirteen of them are preamble. She will not tell you that annoyed her. She will simply stop volunteering.', 'La cifra es exactamente lo correcto y te compra credibilidad de inmediato. «No perdamos el tiempo con el preámbulo» es la parte que te cuesta: ella preparó catorce preguntas y acabas de dar a entender que trece son preámbulo. No te dirá que le ha molestado. Simplemente dejará de ofrecer información.'),
            principle: J(std(3), L(' earned; ', ' ganado; '), std(2), L(' lost; ', ' perdido; '), stage('attention'), L('.', '.')),
            learnerDid: T('You answered well and skipped her agenda for your own.', 'Respondiste bien y te saltaste su orden del día por el tuyo.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Efficiency reads as competence to most clients and as dismissal to this one. Her list is not an obstacle to the consultation; her list is how she takes part in it.', 'La eficiencia le parece competencia a la mayoría de las clientas y desdén a esta. Su lista no es un obstáculo para la consulta; su lista es su manera de participar en ella.'),
            consequence: T('Credibility +1, attention −1. The photographs get examined and the fourteenth question never gets asked out loud.', 'Credibilidad +1, atención −1. Las fotografías se examinan y la pregunta catorce no llega a formularse en voz alta.'),
            nextPriority: T('Give her list back to her. Ask her to work through it in her own order.', 'Devuélvele su lista. Pídele que la recorra en su propio orden.')
          }
        },
        {
          id: 'conn-invite',
          label: T('Invite the whole interrogation, explicitly', 'Invitar explícitamente al interrogatorio completo'),
          language: T('Fourteen years. Two or three corrections a month, and I will tell you before we finish how many of them I was able to fully correct and how many I was not. Now — you have a list of fourteen questions in that folder. I would like you to ask me all fourteen, in your order, and I would like you to write down what I say, because in six weeks you should be able to check whether what I told you turned out to be true. If I do not know the answer to one of them I will say I do not know. Start at one.', 'Catorce años. Dos o tres correcciones al mes, y antes de terminar le diré cuántas de ellas pude corregir del todo y cuántas no. Ahora — tiene una lista de catorce preguntas en esa carpeta. Quiero que me haga las catorce, en su orden, y quiero que apunte lo que le diga, porque dentro de seis semanas debería poder comprobar si lo que le conté resultó ser cierto. Si no sé responder a alguna, le diré que no lo sé. Empiece por la uno.'),
          effects: { trust: { safety: 2, attention: 1, credibility: 1 }, willingness: 10, posture: 'testing' },
          mirror: {
            signalDetected: T('A folder already open, a numbered list, and an opening statement that warmth is what she was harmed by.', 'Una carpeta ya abierta, una lista numerada y una declaración inicial de que la calidez es aquello con lo que le hicieron daño.'),
            interpretation: T('You gave her the one form of safety she can actually use: verifiability. Asking her to write your answers down is a bet on yourself that the previous practitioner would never have made, and "if I do not know I will say I do not know" pre-authorises the single sentence she has never heard in a treatment room.', 'Le diste la única forma de seguridad que ella puede usar: la verificabilidad. Pedirle que apunte tus respuestas es una apuesta por ti misma que la profesional anterior jamás habría hecho, y «si no lo sé, le diré que no lo sé» autoriza de antemano la única frase que ella nunca ha oído en una sala de tratamiento.'),
            principle: J(std(1), L(' — for this client safety means being checkable; ', ' — para esta clienta la seguridad es ser comprobable; '), std(3), L('; ', '; '), duty(4), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You made your own answers auditable, out loud, before she had to ask you to.', 'Hiciste auditables tus propias respuestas, en voz alta, antes de que ella tuviera que pedírtelo.'),
            alignment: 'ALIGNED',
            why: T('Psychological safety for a harmed client is not comfort; it is the restoration of her ability to verify. She lost that, not her cheekbones.', 'La seguridad psicológica para una clienta dañada no es comodidad; es la restitución de su capacidad de comprobar. Eso es lo que perdió, no los pómulos.'),
            consequence: T('Safety +2, credibility +1, willingness +10, and her posture moves from distrustful to testing — which is not trust, but it is participation. She will now ask all fourteen, including the fourteenth.', 'Seguridad +2, credibilidad +1, disposición +10, y su postura pasa de desconfiada a examinadora — que no es confianza, pero es participación. Ahora hará las catorce, incluida la decimocuarta.'),
            nextPriority: T('When she reaches the photographs, ask about the eighteen months, not about the millilitres.', 'Cuando llegue a las fotografías, pregunta por los dieciocho meses, no por los mililitros.')
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
      if (cs.posture === 'testing') {
        return {
          source: 'Teresa',
          quote: T('"Question nine. Here are the photographs. Nine of these are from before — I want you to see what it used to sit like, because everyone who has looked at this has only ever seen the after. And then tell me honestly whether she ruined my face or whether I am making too much of it, because I genuinely cannot tell any more."', '«Pregunta nueve. Aquí están las fotografías. Nueve son de antes — quiero que vea cómo quedaba, porque todo el que ha mirado esto solo ha visto el después. Y después dígame con honestidad si me destrozó la cara o si estoy exagerando, porque de verdad que ya no sé distinguirlo.»'),
          subtext: T('Two invitations in one sentence, and both are traps. She is asking you to condemn the other practitioner, and she is asking you to rule on whether her distress is proportionate. Nine photographs from before tell you what she actually wants, which is not available.', 'Dos invitaciones en una sola frase, y las dos son trampas. Te está pidiendo que condenes a la otra profesional, y te está pidiendo que dictamines si su angustia es proporcionada. Nueve fotografías de antes te dicen lo que quiere en realidad, que no está disponible.'),
          disclosureLevel: 'opening'
        };
      }
      return {
        source: 'Teresa',
        quote: T('"Look at it. Look at the left side against the right. Now — would you have done that? Would anybody competent have done that? I want to hear you say it."', '«Mírelo. Mire el lado izquierdo contra el derecho. Ahora — ¿usted habría hecho eso? ¿Lo habría hecho alguien competente? Quiero oírselo decir.»'),
        subtext: T('A direct demand that you condemn a colleague, from a client who has not yet decided whether you are trustworthy. The demand is the test. She is not asking for your agreement; she is finding out what you say about practitioners who are not in the room.', 'Una exigencia directa de que condenes a una compañera, de una clienta que aún no ha decidido si eres de fiar. La exigencia es la prueba. No te pide que le des la razón; está averiguando qué dices de los profesionales que no están en la sala.'),
        disclosureLevel: 'minimal'
      };
    },
    decision: {
      prompt: T('Phase 3 objective: understand situation and motivation. She has asked you, directly, whether the other practitioner was incompetent. What do you say?', 'Objetivo de la Fase 3: comprender la situación y la motivación. Te ha preguntado, directamente, si la otra profesional fue incompetente. ¿Qué dices?'),
      options: [
        {
          id: 'disc-criticise',
          label: T('Tell her the truth as you see it — this was badly done', 'Decirle la verdad tal como la ves: esto se hizo mal'),
          language: T('Honestly? No. I would not have done that, and frankly nobody trained properly would have. That is far too much product in the wrong plane, and whoever did it either did not know the anatomy or did not care. You were let down, and you have every right to be angry about it.', '¿Sinceramente? No. Yo no habría hecho eso, y francamente nadie bien formado lo habría hecho. Eso es muchísimo producto en el plano equivocado, y quien se lo hizo o no conocía la anatomía o le dio igual. La defraudaron, y tiene todo el derecho a estar enfadada.'),
          effects: { trust: { safety: -1, credibility: -2, reliability: -1 }, willingness: 14, objectionIntensity: 3, flags: { criticisedClinic: true } },
          mirror: {
            signalDetected: T('"I want to hear you say it" — an explicit invitation to condemn a named colleague, from a client testing what you say when someone is not in the room.', '«Quiero oírselo decir» — una invitación explícita a condenar a una compañera identificada, de una clienta que está comprobando qué dices cuando alguien no está delante.'),
            interpretation: T('It is satisfying, she wanted it, and it converts in the short term — willingness jumps fourteen points because you have finally validated eighteen months of anger. And you have simultaneously answered the question she did not ask: yes, practitioners discuss each other\'s patients, and yes, that will include you. You cannot judge a treatment you did not perform from a photograph and a volume you were told about second-hand, so the confident verdict is also clinically unsound.', 'Es satisfactorio, ella lo quería, y a corto plazo convierte — la disposición salta catorce puntos porque por fin has validado dieciocho meses de rabia. Y a la vez has respondido a la pregunta que no hizo: sí, los profesionales hablan de las pacientes de los demás, y sí, eso la incluirá a ella. No se puede juzgar un tratamiento que no realizaste a partir de una foto y de un volumen que te han contado de oídas, así que el veredicto rotundo también es clínicamente insostenible.'),
            principle: J(duty(4), L(' — you asserted as fact a judgement you are not in a position to make; ', ' — afirmaste como hecho un juicio que no estás en posición de emitir; '), duty(3), L('; ', '; '), std(3), L('; ', '; '), stage('credibility'), L('.', '.')),
            learnerDid: T('You bought fourteen points of willingness with your own credibility, and told her what you are like behind a patient\'s back.', 'Compraste catorce puntos de disposición con tu propia credibilidad, y le enseñaste cómo eres a espaldas de una paciente.'),
            alignment: 'NOT ALIGNED',
            why: T('Truthful communication includes the limits of what you can truthfully claim. You did not see the pre-treatment face in person, you do not know what was consented to, and "nobody trained properly would have" is a statement about a person you have never met.', 'Comunicar con veracidad incluye los límites de lo que puedes afirmar con veracidad. No viste la cara previa en persona, no sabes qué se consintió, y «nadie bien formado lo habría hecho» es una afirmación sobre una persona a la que no conoces.'),
            consequence: T('Willingness +14 and credibility −2, safety −1, reliability −1. Phase 7 will open at maximum intensity with the distrust escalation: she works out, out loud, that if you talk about that clinic you will talk about her.', 'Disposición +14 y credibilidad −2, seguridad −1, fiabilidad −1. La Fase 7 abrirá a intensidad máxima con la escalada de desconfianza: ella deduce, en voz alta, que si hablas de aquella clínica hablarás de ella.'),
            nextPriority: T('Describe what you can see and what the mechanism is. Never characterise the practitioner.', 'Describe lo que ves y cuál es el mecanismo. Nunca califiques al profesional.')
          }
        },
        {
          id: 'disc-clinical',
          label: T('Describe what you can see, without characterising anybody', 'Describir lo que ves, sin calificar a nadie'),
          language: T('I am not going to tell you what someone else was thinking, because I was not there and I would be guessing. What I can tell you is what I can see. There is more volume on the left than the right, sitting slightly higher than I would place it, and the asymmetry is most visible in animation, which matches what you said about smiling. That much is measurable and I will show you on the photographs. What was in somebody\'s head when they did it, I cannot tell you.', 'No voy a decirle qué estaba pensando otra persona, porque yo no estaba allí y estaría adivinando. Lo que sí puedo decirle es lo que veo. Hay más volumen a la izquierda que a la derecha, colocado algo más alto de donde yo lo pondría, y la asimetría se ve más en movimiento, lo que encaja con lo que me ha dicho de sonreír. Eso es medible y se lo enseño en las fotografías. Lo que había en la cabeza de alguien cuando lo hizo, no se lo puedo decir.'),
          effects: { trust: { attention: 1, credibility: 1 }, willingness: 10 },
          mirror: {
            signalDetected: T('A demand for a verdict, met with an observation and an explicit refusal to guess.', 'Una exigencia de veredicto, respondida con una observación y una negativa explícita a adivinar.'),
            interpretation: T('This is the professionally correct answer and she will notice that you did not take the bait. Separating "what I can see" from "what someone intended" is precisely the distinction she needs, and it demonstrates the standard she was denied the first time. It also stays entirely at the level of her face.', 'Esta es la respuesta profesionalmente correcta y ella notará que no picaste. Separar «lo que veo» de «lo que alguien pretendía» es exactamente la distinción que ella necesita, y demuestra el estándar que le negaron la primera vez. Y se queda del todo en el nivel de su cara.'),
            principle: J(duty(4), L('; ', '; '), duty(3), L('; ', '; '), std(3), L('; Phase 3 objective — situation.', '; objetivo de la Fase 3: la situación.')),
            learnerDid: T('You refused the trap and assessed the asymmetry accurately.', 'Rechazaste la trampa y valoraste la asimetría con exactitud.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Situation without motivation is half the canonical objective. You now know what her face is doing; you do not know what eighteen months of it has done to her, and that is what governs whether she books.', 'La situación sin la motivación es la mitad del objetivo canónico. Ya sabes qué hace su cara; no sabes qué le han hecho a ella dieciocho meses de esto, y eso es lo que decide si reserva.'),
            consequence: T('Attention +1, credibility +1, willingness +10. You reach Phase 4 with an accurate assessment and no access to question fourteen.', 'Atención +1, credibilidad +1, disposición +10. Llegas a la Fase 4 con una valoración exacta y sin acceso a la pregunta catorce.'),
            nextPriority: T('Ask about the eighteen months. She has told you she has not been photographed since March last year and nobody has asked her about it.', 'Pregunta por los dieciocho meses. Te ha dicho que no se deja fotografiar desde marzo del año pasado y nadie le ha preguntado por eso.')
          }
        },
        {
          id: 'disc-cost',
          label: T('Refuse the verdict, and ask what the eighteen months have actually cost her', 'Rechazar el veredicto, y preguntar qué le han costado realmente los dieciocho meses'),
          language: T('I am not going to characterise somebody I have never met — and I would not want another practitioner doing that to me, which is the same reason I will not do it to her. What I will do is describe exactly what I can see, and I will do that in a moment. But first: you have brought me nine photographs from before, and you wrote on your form that nobody has taken a picture of you since March last year. I would like to ask about that instead of about millilitres. What have the eighteen months actually been like?', 'No voy a calificar a alguien a quien no conozco — y no querría que otro profesional lo hiciera conmigo, que es la misma razón por la que no lo haré con ella. Lo que sí haré es describir exactamente lo que veo, y lo haré enseguida. Pero antes: me ha traído nueve fotografías de antes, y escribió en el formulario que nadie le hace una foto desde marzo del año pasado. Me gustaría preguntarle por eso en vez de por mililitros. ¿Cómo han sido realmente estos dieciocho meses?'),
          effects: { trust: { safety: 1, attention: 2, understanding: 1 }, willingness: 8, posture: 'testing', reveals: ['emotional_cost'] },
          mirror: {
            signalDetected: T('Nine photographs from before, a line on the form about never being photographed since, and a demand for a verdict used to avoid both.', 'Nueve fotografías de antes, una línea en el formulario sobre no dejarse fotografiar desde entonces, y una exigencia de veredicto usada para esquivar ambas cosas.'),
            interpretation: T('You declined the verdict and gave the reason — "I would not want another practitioner doing that to me" — which answers her unwritten test in one sentence and without any moral posturing. Then you went to the sentence on the form that everybody else has skipped. She tells you about the two things she stopped going to, about her sister\'s wedding photographs, and that she has said none of this out loud to anybody in eighteen months.', 'Rechazaste el veredicto y diste la razón — «no querría que otro profesional lo hiciera conmigo» — que responde a su prueba no escrita en una sola frase y sin ninguna pose moral. Y después fuiste a la frase del formulario que todos los demás se han saltado. Te cuenta los dos sitios a los que dejó de ir, las fotos de la boda de su hermana, y que no ha dicho nada de esto en voz alta a nadie en dieciocho meses.'),
            principle: J(duty(4), L('; ', '; '), std(2), L('; ', '; '), L('Phase 3 objective — situation AND motivation; ', 'objetivo de la Fase 3: situación Y motivación; '), stage('attention'), L('.', '.')),
            learnerDid: T('You refused the easy alliance and asked the question on her own form.', 'Rechazaste la alianza fácil y preguntaste por lo que ella misma había escrito en su formulario.'),
            alignment: 'ALIGNED',
            why: T('Refusing to condemn is only half of it; the half that earns trust is what you ask instead. Declining the verdict and then changing the subject to price would read as evasion — declining it and going to the cost she has never named reads as attention.', 'Negarse a condenar es solo la mitad; la mitad que gana confianza es qué preguntas en su lugar. Rechazar el veredicto y cambiar de tema al precio se leería como evasiva — rechazarlo e ir al coste que ella nunca ha nombrado se lee como atención.'),
            consequence: T('emotional_cost disclosed. Attention +2, safety +1, understanding +1, willingness +8 — and her posture moves to testing. The photographs still need examining, and now you know what they are for.', 'Se revela el coste emocional. Atención +2, seguridad +1, comprensión +1, disposición +8 — y su postura pasa a examinadora. Las fotografías todavía hay que mirarlas, y ahora sabes para qué son.'),
            nextPriority: T('Question fourteen is next, and she will not ask it. You will have to.', 'La pregunta catorce viene ahora, y ella no la hará. Tendrás que hacerla tú.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a1 = artifacts['1'];
      if (!a1 || !a1.valid) {
        return { canAdvance: false, reason: T('Toolkit #1 (Client Intake & Discovery Canvas) must be completed before Phase 4. In this case the prior-experience field is the case — the product, the date, the volume and what she believes happened must all be on the canvas.', 'El Toolkit #1 (Lienzo de Admisión y Descubrimiento) debe completarse antes de la Fase 4. En este caso el campo de experiencia previa ES el caso: el producto, la fecha, el volumen y lo que ella cree que ocurrió deben constar en el lienzo.') };
      }
      return { canAdvance: true };
    }
  },

  // ======================= PHASE 4 — UNDERSTANDING ========================
  understanding: {
    key: 'understanding', toolkit: 3,
    signal(cs) {
      if (cs.revealed.includes('emotional_cost')) {
        return {
          source: 'Teresa',
          quote: T('"I missed my sister\'s wedding photographs. I was there — I just kept moving so nobody could get one of me. And the thing I keep coming back to is that I did not ask her a single question. Not one. I evaluate suppliers for a living and I sat in that chair and said \'whatever you think\'. So really, whose fault is it?"', '«Me perdí las fotos de la boda de mi hermana. Estuve allí — simplemente me movía para que nadie me pillara. Y a lo que le doy vueltas es a que no le hice ni una pregunta. Ni una. Me dedico a evaluar proveedores y me senté en aquella silla y dije «lo que usted vea». Así que, en el fondo, ¿de quién es la culpa?»'),
          subtext: T('Question fourteen, asked out loud at last. This is the centre of the case. Anything that even slightly agrees with her — including a gentle "well, it is always worth asking questions" — confirms the sentence she has been carrying for eighteen months.', 'La pregunta catorce, por fin formulada en voz alta. Este es el centro del caso. Cualquier cosa que le dé mínimamente la razón — incluido un suave «bueno, siempre conviene preguntar» — confirma la frase que lleva dieciocho meses cargando.')
        };
      }
      return {
        source: 'Teresa',
        quote: T('"Fine. So you have seen it. What can you actually do about it — and please give me a straight answer rather than a consultation."', '«Vale. Ya lo ha visto. ¿Qué se puede hacer realmente — y deme una respuesta clara, no una consulta.»'),
        subtext: T('Still in audit mode, because nothing has happened that would take her out of it. You have her asymmetry and none of her material, so anything you consolidate now is a technical summary and she will grade it as one.', 'Sigue en modo auditoría, porque no ha pasado nada que la saque de ahí. Tienes su asimetría y nada de su material, así que cualquier cosa que consolides ahora es un resumen técnico y ella lo calificará como tal.')
      };
    },
    decision: {
      prompt: T('Phase 4 objective: consolidate findings and verify priorities. What do you do with what she has told you?', 'Objetivo de la Fase 4: consolidar los hallazgos y verificar prioridades. ¿Qué haces con lo que te ha contado?'),
      options: [
        {
          id: 'und-blame',
          label: T('Agree that asking questions is the client\'s protection', 'Coincidir en que preguntar es la protección de la clienta'),
          language: T('Well — I won\'t lie to you, questions are your protection. A good practitioner welcomes them. If you had asked what product, how much and what the plan was, you would probably have got a different answer or a different practitioner. That is exactly why I encourage everybody to ask. You will know for next time.', 'Bueno — no le voy a mentir, preguntar es su protección. Una buena profesional agradece las preguntas. Si hubiera preguntado qué producto, cuánto y cuál era el plan, probablemente habría obtenido otra respuesta u otra profesional. Por eso mismo animo a todo el mundo a preguntar. Ya lo sabe para la próxima.'),
          effects: { trust: { safety: -2, understanding: -1 }, willingness: -8, posture: 'withdrawn', flags: { blamedHer: true } },
          mirror: {
            signalDetected: T('"Whose fault is it?" — asked by a woman who has already decided the answer and is checking whether you will confirm it.', '«¿De quién es la culpa?» — preguntado por una mujer que ya ha decidido la respuesta y está comprobando si se la confirmas.'),
            interpretation: T('Every sentence you said is defensible in general and devastating here. "You will know for next time" places the responsibility for a clinical failure on the person who was lying in the chair, and she will not argue with you — she will agree, warmly, and stop talking.', 'Cada frase que dijiste es defendible en general y devastadora aquí. «Ya lo sabe para la próxima» coloca la responsabilidad de un fallo clínico en quien estaba tumbada en la camilla, y ella no te discutirá — te dará la razón, con amabilidad, y dejará de hablar.'),
            principle: J(duty(1), L(' — this is the avoidable harm in this case, and it is done with a kind voice; ', ' — este es el daño evitable de este caso, y se comete con voz amable; '), std(1), L('; ', '; '), std(2), L('.', '.')),
            learnerDid: T('You confirmed the sentence she has been saying to herself since March last year.', 'Confirmaste la frase que ella se repite desde marzo del año pasado.'),
            alignment: 'NOT ALIGNED',
            why: T('Informed consent is the practitioner\'s duty, not the client\'s achievement. A client cannot ask about a risk she was never told existed, and framing her silence as the cause makes the professional failure hers to carry.', 'El consentimiento informado es un deber del profesional, no un logro de la clienta. Una clienta no puede preguntar por un riesgo cuya existencia nunca le contaron, y presentar su silencio como la causa le traspasa a ella el fallo profesional.'),
            consequence: T('Safety −2, willingness −8, posture withdrawn. She will finish the appointment politely and you will never hear from her again; the Decision Engine will read withdrawn and derive NO.', 'Seguridad −2, disposición −8, postura retraída. Terminará la cita con educación y no volverás a saber de ella; el Motor de Decisión leerá «retraída» y derivará NO.'),
            nextPriority: T('The answer to "whose fault is it" is never "partly yours".', 'La respuesta a «¿de quién es la culpa?» nunca es «en parte suya».')
          }
        },
        {
          id: 'und-summary',
          label: T('Consolidate the clinical findings accurately and check them with her', 'Consolidar los hallazgos clínicos con exactitud y contrastarlos con ella'),
          language: T('Let me put together what I have, and correct me. Product injected March last year, the volume you were told, mid-face, bilateral but unequal. Eighteen months on, most of it has gone; what remains is a difference in projection between left and right that is visible at rest and more visible when you smile. Your priority, as I understand it, is symmetry rather than more volume. Have I got any of that wrong?', 'Déjeme reunir lo que tengo, y corríjame. Producto inyectado en marzo del año pasado, el volumen que le dijeron, tercio medio, bilateral pero desigual. Dieciocho meses después, la mayor parte se ha ido; lo que queda es una diferencia de proyección entre izquierda y derecha, visible en reposo y más visible al sonreír. Su prioridad, según lo entiendo, es la simetría y no más volumen. ¿Me he equivocado en algo?'),
          effects: { trust: { attention: 1, understanding: 1 }, willingness: 8 },
          mirror: {
            signalDetected: T('A client who evaluates suppliers professionally, and will check a summary against what she actually said.', 'Una clienta que evalúa proveedores profesionalmente, y que contrastará un resumen con lo que realmente dijo.'),
            interpretation: T('Accurate, verifiable and checked with her — which is precisely the behaviour she was denied. "Symmetry rather than more volume" is a genuinely important distinction and getting it right will matter later. It is all still about the face.', 'Exacto, verificable y contrastado con ella — que es justo la conducta que le negaron. «Simetría y no más volumen» es una distinción de verdad importante y acertarla contará más adelante. Y sigue siendo todo sobre la cara.'),
            principle: J(std(2), L('; ', '; '), std(5), L('; Phase 4 objective — consolidate and verify.', '; objetivo de la Fase 4: consolidar y verificar.')),
            learnerDid: T('You proved you listened to the clinical account and invited correction.', 'Demostraste que escuchaste el relato clínico e invitaste a la corrección.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('This is solid practice and it leaves the fourteenth question sitting on the table. Whatever you recommend next, she will be weighing it against a belief that she does not deserve a correction because she caused this.', 'Es práctica sólida y deja la pregunta catorce encima de la mesa. Recomiendes lo que recomiendes después, ella lo sopesará contra la creencia de que no merece una corrección porque esto lo provocó ella.'),
            consequence: T('Attention +1, understanding +1, willingness +8. The self-blame stays undisclosed, and it will return in Phase 7 as a reason not to proceed.', 'Atención +1, comprensión +1, disposición +8. La autoinculpación queda sin revelar, y volverá en la Fase 7 como razón para no seguir adelante.'),
            nextPriority: T('Answer question fourteen before you recommend anything.', 'Responde a la pregunta catorce antes de recomendar nada.')
          }
        },
        {
          id: 'und-absolve',
          label: T('Answer question fourteen directly and remove the self-blame', 'Responder a la pregunta catorce directamente y quitar la autoinculpación'),
          requiresRevealed: 'emotional_cost',
          language: T('None of it. And I want to answer that properly rather than kindly, because you will not believe kindly. Informed consent is my job, not yours. You cannot ask about a risk nobody has told you exists — that is not a failure of diligence, that is what the word "informed" is doing in that phrase. The only thing you did wrong was trust a professional to behave professionally, and if that becomes the standard we hold patients to then nobody can safely have anything done ever. You did not cause this. And for what it is worth: eighteen months of not being in a photograph is not vanity. It is a reasonable response to being changed without being asked.', 'Nada. Y quiero responder a eso bien, no con amabilidad, porque con amabilidad no me va a creer. El consentimiento informado es mi trabajo, no el suyo. No se puede preguntar por un riesgo cuya existencia nadie le ha contado — eso no es falta de diligencia, eso es lo que significa la palabra «informado» en esa expresión. Lo único que hizo mal fue confiar en que una profesional se comportara como tal, y si ese pasa a ser el estándar que exigimos a las pacientes, entonces nadie puede hacerse nada con seguridad nunca. Usted no provocó esto. Y por si sirve de algo: dieciocho meses sin salir en una foto no es vanidad. Es una respuesta razonable a que te cambien sin preguntarte.'),
          degradedLanguage: T('It is not your fault. Informed consent is the practitioner\'s responsibility, not the client\'s.', 'No es culpa suya. El consentimiento informado es responsabilidad del profesional, no de la clienta.'),
          degradedNote: T('Said without knowing what the eighteen months cost her, it is a correct principle delivered to a stranger. She accepts it intellectually and carries on believing the opposite.', 'Dicho sin saber qué le han costado los dieciocho meses, es un principio correcto entregado a una desconocida. Lo acepta intelectualmente y sigue creyendo lo contrario.'),
          effects: { trust: { safety: 1, understanding: 2, alignment: 1 }, willingness: 8, reveals: ['self_blame'] },
          degradedEffects: { trust: { safety: 1, understanding: 1 }, willingness: 4 },
          mirror: {
            signalDetected: T('Question fourteen, finally spoken: "whose fault is it" from a woman whose profession is evaluating suppliers.', 'La pregunta catorce, por fin dicha: «¿de quién es la culpa?», de una mujer cuya profesión es evaluar proveedores.'),
            interpretation: T('You answered the question that was actually asked, gave the reason rather than the reassurance, and then named the second thing she has never had named — that hiding from photographs for a year and a half is not vanity. She tells you she has never said the self-blame out loud to anyone, including her husband.', 'Respondiste a la pregunta que de verdad se hizo, diste la razón en lugar del consuelo, y después nombraste la segunda cosa que nadie le ha nombrado nunca: que esconderse de las fotos durante año y medio no es vanidad. Te cuenta que nunca ha dicho la autoinculpación en voz alta a nadie, ni siquiera a su marido.'),
            principle: J(std(2), L('; ', '; '), duty(4), L(' — the truthful answer here happens to be the kind one, but it is said because it is true; ', ' — la respuesta veraz aquí resulta ser la amable, pero se dice porque es cierta; '), duty(1), L('; Phase 4 objective.', '; objetivo de la Fase 4.')),
            learnerDid: T('You put the responsibility for consent back where it belongs and gave her the reasoning, so she can check it.', 'Devolviste la responsabilidad del consentimiento a donde corresponde y le diste el razonamiento, para que pueda comprobarlo.'),
            alignment: 'ALIGNED',
            why: T('Attentive understanding means proving you heard the question under the question. Every practitioner she has spoken to since has discussed her cheekbones; none has addressed the belief that made her stop being photographed.', 'La comprensión atenta es demostrar que oíste la pregunta que hay bajo la pregunta. Todos los profesionales con los que ha hablado desde entonces han hablado de sus pómulos; ninguno ha abordado la creencia que la hizo dejar de dejarse fotografiar.'),
            consequence: T('self_blame disclosed. Understanding +2, safety +1, alignment +1, willingness +8. From here she can hear a limitation without hearing a punishment.', 'Se revela la autoinculpación. Comprensión +2, seguridad +1, alineación +1, disposición +8. A partir de aquí puede oír una limitación sin oír un castigo.'),
            nextPriority: T('Now explain the mechanism — and do not soften the part about what will not come back.', 'Ahora explica el mecanismo — y no suavices la parte de lo que no va a volver.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a3 = artifacts['3'];
      if (!a3 || !a3.valid) {
        return { canAdvance: false, reason: T('Toolkit #3 (Emotional Drivers Map) must be completed before Phase 5. "She wants the asymmetry corrected" is the visible goal, not the hidden motivation — if Teresa has not told you what the eighteen months cost her, record that honestly.', 'El Toolkit #3 (Mapa de Motores Emocionales) debe completarse antes de la Fase 5. «Quiere corregir la asimetría» es el objetivo visible, no la motivación oculta — si Teresa no te ha contado qué le han costado los dieciocho meses, regístralo con honestidad.') };
      }
      return { canAdvance: true };
    }
  },

  // ========================= PHASE 5 — EDUCATION ==========================
  education: {
    key: 'education', toolkit: null,
    signal(cs) {
      return {
        source: 'Teresa',
        quote: cs.revealed.includes('self_blame')
          ? T('"All right. Then tell me what is actually in there now, and tell me what you can take out and what you cannot. I would rather hear a small honest number than a big kind one."', '«Vale. Entonces dígame qué hay ahí ahora mismo, y dígame qué puede quitar y qué no. Prefiero oír una cifra pequeña y honesta que una grande y amable.»')
          : T('"So can you fix it or not? Yes or no. I have had two other consultations and both of them said yes and neither of them explained how."', '«¿Entonces puede arreglarlo o no? Sí o no. He tenido otras dos consultas, las dos dijeron que sí y ninguna me explicó cómo.»'),
        subtext: T('Phase 5 decides this case. She has been told "yes we can fix it" twice already, by people who did not explain the mechanism — so a confident yes now is indistinguishable from the two she has already discarded. The only thing she has never been given is how it works and what it will not do.', 'La Fase 5 decide este caso. Ya le han dicho «sí, se puede arreglar» dos veces, personas que no explicaron el mecanismo — así que un sí rotundo ahora es indistinguible de los dos que ya ha descartado. Lo único que nunca le han dado es cómo funciona y qué no va a conseguir.')
      };
    },
    decision: {
      prompt: T('Phase 5 objective: provide the knowledge needed for an informed decision. She has asked a yes/no question. What do you teach?', 'Objetivo de la Fase 5: aportar el conocimiento necesario para una decisión informada. Ha hecho una pregunta de sí o no. ¿Qué enseñas?'),
      options: [
        {
          id: 'edu-promise',
          label: T('Yes — reassure her it can be put right', 'Sí — asegurarle que tiene arreglo'),
          language: T('Yes. Honestly, yes — this is very correctable. We dissolve what is left on the heavy side, let it settle, and rebalance. I have done dozens of these and people are always amazed. You will not recognise yourself, in the good way. By the spring this will be behind you.', 'Sí. De verdad que sí — esto se corrige muy bien. Disolvemos lo que queda en el lado cargado, dejamos que se asiente y reequilibramos. He hecho decenas de estas y la gente siempre se queda asombrada. No se va a reconocer, para bien. Para la primavera esto estará superado.'),
          effects: { trust: { credibility: -1, reliability: -2, alignment: -1 }, willingness: 14, objectionIntensity: 3, flags: { overpromised: true } },
          mirror: {
            signalDetected: T('"Two other consultations said yes and neither explained how" — an explicit warning about the exact answer you have just given.', '«Otras dos consultas dijeron que sí y ninguna explicó cómo» — una advertencia explícita sobre la respuesta exacta que acabas de dar.'),
            interpretation: T('Commercially, this is the strongest sentence in the case — willingness rises fourteen points and she almost lets herself believe it. Clinically it is not deliverable: hyaluronidase does not dissolve predictably or selectively, some of what she is seeing at eighteen months is tissue that has been stretched and will not simply return, and "you will not recognise yourself" is the claim that put her here.', 'Comercialmente es la frase más potente del caso — la disposición sube catorce puntos y ella casi se permite creérselo. Clínicamente no es entregable: la hialuronidasa no disuelve de forma predecible ni selectiva, parte de lo que se ve a los dieciocho meses es tejido distendido que no va a volver sin más, y «no se va a reconocer» es precisamente la afirmación que la trajo aquí.'),
            principle: J(duty(4), L(' — an outcome asserted without a ceiling is an overclaim; ', ' — un resultado afirmado sin techo es una sobrepromesa; '), duty(1), L(' — and in a client already harmed by an overclaim, repeating one is a second avoidable harm, not a first mistake; ', ' — y en una clienta ya dañada por una sobrepromesa, repetirla es un segundo daño evitable, no un primer error; '), std(4), L('.', '.')),
            learnerDid: T('You did the thing that was done to her, in a nicer voice, and it worked for about four minutes.', 'Hiciste lo mismo que le hicieron a ella, con mejor voz, y funcionó unos cuatro minutos.'),
            alignment: 'NOT ALIGNED',
            why: T('This is the commercially attractive and ethically wrong option in this case, and the consequence is concrete rather than abstract: when the correction delivers eighty per cent of what you promised, she will experience the twenty per cent as a second betrayal — and this time she will complain, to a regulator, with her notebook.', 'Esta es la opción comercialmente atractiva y éticamente incorrecta de este caso, y la consecuencia es concreta, no abstracta: cuando la corrección entregue el ochenta por ciento de lo prometido, ella vivirá el veinte por ciento restante como una segunda traición — y esta vez sí reclamará, ante un colegio o un regulador, con su cuaderno.'),
            consequence: T('Willingness +14, reliability −2, credibility −1, alignment −1. Phase 7 opens at maximum intensity with a demand for a written guarantee, which is the only rational response to a promise she cannot verify.', 'Disposición +14, fiabilidad −2, credibilidad −1, alineación −1. La Fase 7 abre a intensidad máxima con una exigencia de garantía por escrito, que es la única respuesta racional a una promesa que no puede comprobar.'),
            nextPriority: T('Never answer a yes/no question about a correction with the yes. Answer it with the mechanism and the ceiling.', 'Nunca respondas con el sí a una pregunta de sí o no sobre una corrección. Respóndela con el mecanismo y el techo.')
          }
        },
        {
          id: 'edu-vague',
          label: T('Keep it general — she is upset and detail may frighten her', 'Mantenerlo general — está afectada y el detalle puede asustarla'),
          language: T('There are definitely things we can do. Every case is different and I would not want to promise you anything today, but there are options and we would take it step by step. Let\'s see how you feel as we go along.', 'Cosas se pueden hacer, sin duda. Cada caso es distinto y no querría prometerle nada hoy, pero hay opciones y lo iríamos haciendo paso a paso. Vamos viendo cómo se va sintiendo.'),
          effects: { trust: { credibility: -1 }, willingness: 4 },
          mirror: {
            signalDetected: T('A direct technical question from a client who arrived with the product name written down.', 'Una pregunta técnica directa de una clienta que llegó con el nombre del producto apuntado.'),
            interpretation: T('You avoided the overclaim, which is genuinely the greater danger, and you avoided the content as well. "Every case is different" and "step by step" are true sentences that transmit nothing, and to a procurement manager they read as a supplier who does not want to be held to a specification.', 'Evitaste la sobrepromesa, que es sin duda el mayor peligro, y evitaste también el contenido. «Cada caso es distinto» y «paso a paso» son frases ciertas que no transmiten nada, y para una responsable de compras suenan a proveedor que no quiere quedar sujeto a un pliego.'),
            principle: J(std(5), L(' — clarity is what she can repeat to somebody else afterwards; ', ' — la claridad es lo que ella puede repetirle a otra persona después; '), std(3), L('; Phase 5 objective.', '; objetivo de la Fase 5.')),
            learnerDid: T('You protected yourself from being wrong instead of equipping her to decide.', 'Te protegiste de equivocarte en lugar de equiparla para decidir.'),
            alignment: 'NOT ALIGNED',
            why: T('Vagueness is not the same as honesty. Withholding the mechanism from a client who has explicitly asked for it is a failure of truthful communication in the other direction, and it leaves her exactly as unable to consent as she was the first time.', 'La vaguedad no es honestidad. Ocultar el mecanismo a una clienta que lo ha pedido expresamente es un fallo de comunicación veraz en la otra dirección, y la deja exactamente igual de incapaz de consentir que la primera vez.'),
            consequence: T('Credibility −1. She writes "would not answer" next to question eleven, and from here everything you say is being scored against that note.', 'Credibilidad −1. Apunta «no quiso responder» junto a la pregunta once, y a partir de ahí todo lo que digas se puntúa contra esa nota.'),
            nextPriority: T('She asked how it works. Tell her how it works, including the part you would rather not say.', 'Te preguntó cómo funciona. Cuéntale cómo funciona, incluida la parte que preferirías no decir.')
          }
        },
        {
          id: 'edu-mechanism',
          label: T('Explain the mechanism, including what it does not do', 'Explicar el mecanismo, incluido lo que no consigue'),
          language: T('Not a yes or a no, because the honest answer is neither and you have already been given two yesses. Here is how it works. What was placed is a hyaluronic acid gel; eighteen months on, most of it has been broken down and some has not. The enzyme we use to dissolve the remainder works on the gel, but it is not selective and it is not precise — it also acts on the hyaluronic acid your own tissue makes, and how much of the product it removes is not fully predictable. That is the first ceiling. The second is this: volume held in one place for eighteen months stretches the tissue over it, and that stretch does not automatically reverse when the volume goes. So there is a part of this that is product, and a part that is now your face. The product part I can address. The stretch part improves partially, over months, and in my hands not always completely. That is the honest shape of it.', 'Ni sí ni no, porque la respuesta honesta no es ninguna de las dos y ya le han dado dos síes. Le explico cómo funciona. Lo que le pusieron es un gel de ácido hialurónico; a los dieciocho meses, la mayor parte se ha degradado y algo no. La enzima que usamos para disolver el resto actúa sobre el gel, pero no es selectiva ni precisa — actúa también sobre el ácido hialurónico que fabrica su propio tejido, y cuánto producto elimina no es del todo previsible. Ese es el primer techo. El segundo es este: un volumen sostenido en un punto durante dieciocho meses distiende el tejido que lo cubre, y esa distensión no se revierte automáticamente cuando el volumen desaparece. Así que hay una parte de esto que es producto y una parte que ya es su cara. La parte del producto puedo abordarla. La parte de la distensión mejora parcialmente, a lo largo de meses, y en mis manos no siempre del todo. Esa es la forma honesta de esto.'),
          effects: { trust: { credibility: 2, understanding: 1, reliability: 1 }, willingness: 10 },
          mirror: {
            signalDetected: T('"Both of them said yes and neither explained how" — a specification for the answer she needs, written by the client.', '«Las dos dijeron que sí y ninguna explicó cómo» — un pliego para la respuesta que necesita, redactado por la clienta.'),
            interpretation: T('You refused the binary, gave the mechanism, and stated two ceilings before any price or plan. "Not selective and not precise" and "in my hands not always completely" are the two sentences no one has said to her, and they are the only things in this consultation she cannot get from a website.', 'Rechazaste el binario, diste el mecanismo y enunciaste dos techos antes de cualquier precio o plan. «No es selectiva ni precisa» y «en mis manos no siempre del todo» son las dos frases que nadie le ha dicho, y son lo único de esta consulta que no puede encontrar en una web.'),
            principle: J(duty(4), L('; ', '; '), duty(1), L(' — stating the ceiling before the plan is how you avoid setting up the second injury; ', ' — enunciar el techo antes del plan es como evitas preparar la segunda lesión; '), std(5), L('; ', '; '), std(3), L('; Phase 5 objective.', '; objetivo de la Fase 5.')),
            learnerDid: T('You answered a yes/no question with a mechanism and two limits, and admitted your own results are not uniform.', 'Respondiste a una pregunta de sí o no con un mecanismo y dos límites, y admitiste que tus propios resultados no son uniformes.'),
            alignment: 'ALIGNED',
            why: T('With a client harmed by an overclaim, credibility is built almost entirely by the things you rule out. Every limitation stated in advance is evidence that the things you did not limit are reliable.', 'Con una clienta dañada por una sobrepromesa, la credibilidad se construye casi por completo con lo que descartas. Cada limitación enunciada de antemano es prueba de que lo que no limitaste sí es fiable.'),
            consequence: T('Credibility +2, reliability +1, understanding +1, willingness +10. She writes it down, and at Phase 7 her objection will be a verification demand rather than a distrust escalation or a demand for a guarantee.', 'Credibilidad +2, fiabilidad +1, comprensión +1, disposición +10. Lo apunta, y en la Fase 7 su objeción será una exigencia de verificación y no una escalada de desconfianza ni una petición de garantía.'),
            nextPriority: T('Now put the ceiling in the recommendation in writing — name what cannot be corrected, specifically.', 'Ahora pon el techo por escrito en la recomendación: nombra concretamente qué no se puede corregir.')
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
      if (cs.revealed.includes('self_blame')) {
        return {
          source: 'Teresa',
          quote: T('"Then tell me what you would do. And I need you to know that if you tell me you can give me my old face back, I will stand up and leave, because that is what she said."', '«Entonces dígame qué haría usted. Y necesito que sepa que si me dice que puede devolverme mi cara de antes, me levanto y me voy, porque eso es lo que dijo ella.»'),
          subtext: T('She has just told you the exact sentence that loses her, and it is the exact sentence that closes most clients. The nine "before" photographs are on the table between you.', 'Acaba de decirte la frase exacta que la pierde, y es la frase exacta que cierra a la mayoría de las clientas. Las nueve fotografías de «antes» están sobre la mesa entre las dos.')
        };
      }
      return {
        source: 'Teresa',
        quote: T('"Right. What are you proposing, and what does it cost? And I would like it in writing before I agree to anything — I have learned that much."', '«Vale. ¿Qué propone, y cuánto cuesta? Y lo quiero por escrito antes de aceptar nada — eso al menos lo he aprendido.»'),
        subtext: T('Procedural, guarded, and entirely reasonable. She will evaluate the proposal like a tender document, and a proposal with no stated limitations will be marked down, not up.', 'Formal, cauta y completamente razonable. Evaluará la propuesta como un pliego de licitación, y una propuesta sin limitaciones declaradas restará puntos, no los sumará.')
      };
    },
    decision: {
      prompt: T('Phase 6 objective: present the solution with its rationale. Ethical Duty 1 and Ethical Duty 4 are both live here. What do you recommend?', 'Objetivo de la Fase 6: presentar la solución con su fundamento. Aquí están vivos el Deber Ético 1 y el Deber Ético 4. ¿Qué recomiendas?'),
      options: [
        {
          id: 'rec-fullfix',
          label: T('A full correction package — get her back to where she was', 'Un paquete de corrección completa — devolverla a donde estaba'),
          language: T('Full correction: dissolving, a settling period, then rebalancing with a small amount of a lighter product, and a refinement session at four months. 1.450 € for the package, which is less than doing it piecemeal. By the end of it you will be looking at those old photographs and not be able to tell the difference.', 'Corrección completa: disolución, periodo de asentamiento, después reequilibrio con una pequeña cantidad de un producto más ligero y una sesión de refinamiento a los cuatro meses. 1.450 € el paquete, que sale mejor que hacerlo suelto. Al final estará mirando esas fotos antiguas y no será capaz de notar la diferencia.'),
          effects: { trust: { alignment: -1, reliability: -1 }, willingness: 12, objectionIntensity: 3, flags: { overpromised: true } },
          mirror: {
            signalDetected: T('Nine photographs from before, on the table, and a client who has just told you what sentence would make her walk out.', 'Nueve fotografías de antes, sobre la mesa, y una clienta que acaba de decirte qué frase la haría marcharse.'),
            interpretation: T('The package is clinically reasonable and the last sentence destroys it. "You will not be able to tell the difference" is a claim about an outcome you cannot control, made to a woman whose specific injury is that a practitioner made exactly that kind of claim. It is also a claim about photographs of a face that is now four years older.', 'El paquete es clínicamente razonable y la última frase lo destroza. «No será capaz de notar la diferencia» es una afirmación sobre un resultado que no controlas, dirigida a una mujer cuya lesión concreta es que una profesional hizo exactamente ese tipo de afirmación. Y además es una afirmación sobre fotos de una cara que ahora tiene cuatro años más.'),
            principle: J(duty(4), L('; ', '; '), duty(1), L(' — an unattainable promise sets up a harm that has not happened yet; ', ' — una promesa inalcanzable prepara un daño que todavía no ha ocurrido; '), std(4), L('; ', '; '), L('Phase 6 objective — a rationale, and "by the end you won\'t tell the difference" is a sales close, not a rationale.', 'objetivo de la Fase 6: un fundamento, y «al final no notará la diferencia» es un cierre de venta, no un fundamento.')),
            learnerDid: T('You attached an unattainable outcome to a defensible plan and lost the plan with it.', 'Adosaste un resultado inalcanzable a un plan defendible y perdiste el plan con él.'),
            alignment: 'NOT ALIGNED',
            why: T('The commercial attraction is real: packaging raises the value of the sale and the promise raises the conversion. The cost is that you have now guaranteed an outcome that depends on enzyme behaviour and tissue recoil, neither of which you control — and with this client the guarantee will be quoted back to you at Phase 7 and in writing afterwards.', 'El atractivo comercial es real: empaquetar sube el valor de la venta y la promesa sube la conversión. El coste es que has garantizado un resultado que depende del comportamiento de una enzima y del retroceso tisular, y no controlas ninguno de los dos — y con esta clienta la garantía te la citarán en la Fase 7 y por escrito después.'),
            consequence: T('Willingness +12, alignment and reliability fall, Phase 7 opens at maximum intensity with a demand for a written guarantee. A yes obtained here is a complaint with a deposit attached.', 'Disposición +12, caen alineación y fiabilidad, la Fase 7 abre a intensidad máxima con una exigencia de garantía por escrito. Un sí obtenido aquí es una reclamación con señal incluida.'),
            nextPriority: T('Name the part that cannot be corrected, out loud, before you name the price.', 'Nombra la parte que no se puede corregir, en voz alta, antes de nombrar el precio.')
          }
        },
        {
          id: 'rec-refer',
          label: T('Decline to treat and refer her elsewhere', 'Declinar el tratamiento y derivarla a otro sitio'),
          language: T('Given the history, I would rather not be the one to touch this. I think you would be better served by a specialist revision practice — I can give you two names. It is the safest thing for you.', 'Dado el historial, preferiría no ser yo quien toque esto. Creo que estaría mejor atendida en una consulta especializada en revisiones — puedo darle dos nombres. Es lo más seguro para usted.'),
          effects: { trust: { credibility: 1, alignment: -1 }, willingness: -4 },
          mirror: {
            signalDetected: T('A correctable asymmetry with a clear mechanism, declined on the basis of the client\'s history rather than the clinical picture.', 'Una asimetría corregible con un mecanismo claro, rechazada por el historial de la clienta y no por el cuadro clínico.'),
            interpretation: T('There are cases where referral is the right answer and this is not obviously one of them. You have just assessed the problem competently and explained the mechanism; declining now reads, to her, as the third professional in eighteen months who would not take responsibility for her face. Caution that protects you and costs her is not caution.', 'Hay casos en que derivar es la respuesta correcta y este no lo es con claridad. Acabas de valorar el problema con solvencia y de explicar el mecanismo; declinar ahora se lee, para ella, como la tercera profesional en dieciocho meses que no quiso responsabilizarse de su cara. La prudencia que te protege a ti y le cuesta a ella no es prudencia.'),
            principle: J(duty(1), L(' correctly invoked but misapplied; ', ' invocado correctamente pero mal aplicado; '), duty(3), L('; ', '; '), std(4), L('; Phase 6 objective.', '; objetivo de la Fase 6.')),
            learnerDid: T('You transferred the risk and called it safety.', 'Transferiste el riesgo y lo llamaste seguridad.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('Referral is a legitimate and sometimes obligatory outcome, and it has to be justified by the clinical picture or by the limits of your own competence — not by the fact that the client is difficult and might complain.', 'Derivar es un resultado legítimo y a veces obligatorio, y tiene que justificarse por el cuadro clínico o por los límites de tu propia competencia — no por que la clienta sea difícil y pueda reclamar.'),
            consequence: T('Credibility +1 for the honesty about scope, alignment −1 and willingness falls. She thanks you, takes the names, and files you with the other two.', 'Credibilidad +1 por la honestidad sobre el alcance, alineación −1 y la disposición baja. Te da las gracias, se lleva los nombres y te archiva con las otras dos.'),
            nextPriority: T('If you can do it, say what you can do and where it stops. That is the recommendation.', 'Si puedes hacerlo, di qué puedes hacer y dónde se detiene. Esa es la recomendación.')
          }
        },
        {
          id: 'rec-honest',
          label: T('Name exactly what can and cannot be corrected, in writing', 'Nombrar exactamente qué se puede y qué no se puede corregir, por escrito'),
          language: T('I am not going to give you your old face back and I would not sit here and say I could. Here is what I would do and where it stops, and I will write all of this down for you. Stage one: dissolve the residual product on the left, one session, and then nothing for six weeks — no rebalancing, no filler, nothing, because I need to see where your own tissue settles before I add anything. Stage two, at six weeks, we look together and decide whether anything more is needed; for some people the answer is no. If we do go on, it is a small volume on the right to match, not more on the left. What I expect: the asymmetry at rest largely resolved, the asymmetry when you smile noticeably better. What I do not expect: that the skin over the left cheek returns to exactly the tone it had at forty-four, because it has been stretched for eighteen months and some of that is permanent. And in the photographs you will, if you look for it, still be able to find it. I would rather tell you that now than have you find it yourself in March. Stage one is 380 €. I will not quote you for stage two today because I do not yet know whether you need it.', 'No voy a devolverle su cara de antes y no me voy a sentar aquí a decir que puedo. Le digo lo que haría y dónde se detiene, y se lo voy a dejar todo por escrito. Etapa uno: disolver el producto residual de la izquierda, una sesión, y después nada durante seis semanas — ni reequilibrio, ni relleno, nada, porque necesito ver dónde se asienta su propio tejido antes de añadir nada. Etapa dos, a las seis semanas, lo miramos juntas y decidimos si hace falta algo más; para algunas personas la respuesta es que no. Si seguimos, sería un volumen pequeño a la derecha para igualar, no más a la izquierda. Lo que espero: la asimetría en reposo resuelta en gran medida, la asimetría al sonreír claramente mejor. Lo que no espero: que la piel del pómulo izquierdo recupere exactamente el tono que tenía a los cuarenta y cuatro, porque lleva dieciocho meses distendida y parte de eso es permanente. Y en las fotos, si la busca, seguirá pudiendo encontrarla. Prefiero decírselo ahora a que la encuentre usted sola en marzo. La etapa uno son 380 €. No le presupuesto la etapa dos hoy porque todavía no sé si la necesita.'),
          effects: { trust: { safety: 1, credibility: 2, alignment: 2, reliability: 2 }, willingness: 10, reveals: ['shame_at_wanting_it'] },
          mirror: {
            signalDetected: T('"If you tell me you can give me my old face back I will leave" — the client has specified the disqualifying answer in advance.', '«Si me dice que puede devolverme mi cara de antes, me voy» — la clienta ha especificado por adelantado la respuesta descalificatoria.'),
            interpretation: T('You opened with the refusal to promise, staged the plan so that the second decision is genuinely hers, priced only what you are certain of, and named the specific thing that will not be fixed — the skin tone and what she will still find in photographs. That last detail is why she believes the rest. She then tells you the thing underneath all of it: that she has been ashamed of caring this much about a face, and that wanting it corrected has felt like proof that she was vain to have had it done.', 'Abriste con la negativa a prometer, escalonaste el plan para que la segunda decisión sea realmente suya, presupuestaste solo aquello de lo que estás segura y nombraste lo concreto que no se va a arreglar: el tono de la piel y lo que ella seguirá encontrando en las fotos. Ese último detalle es la razón por la que cree lo demás. Entonces te cuenta lo que hay debajo de todo: que le ha dado vergüenza que le importe tanto una cara, y que querer corregirlo le ha parecido la prueba de que fue una frívola al hacérselo.'),
            principle: J(duty(4), L('; ', '; '), duty(1), L('; ', '; '), duty(2), L(' — staging the plan keeps the second decision hers; ', ' — escalonar el plan mantiene la segunda decisión en sus manos; '), std(4), L('; ', '; '), std(5), L('; Phase 6 objective.', '; objetivo de la Fase 6.')),
            learnerDid: T('You quoted only for what you are sure of, and put the limitation in writing before the price.', 'Presupuestaste solo aquello de lo que estás segura, y pusiste la limitación por escrito antes que el precio.'),
            alignment: 'ALIGNED',
            why: T('Do No Avoidable Harm in a correction case is mostly about expectation: the avoidable harm available to you here is not a bad injection, it is a promise that guarantees she will be disappointed. Naming what stays is how you make what improves believable.', 'No Causar Daño Evitable en un caso de corrección va sobre todo de expectativas: el daño evitable disponible aquí no es una mala inyección, es una promesa que garantiza que se sentirá decepcionada. Nombrar lo que se queda es lo que hace creíble lo que mejora.'),
            consequence: T('shame_at_wanting_it disclosed. Credibility +2, alignment +2, reliability +2, safety +1, willingness +10. Phase 7 will open with a verification demand, which is the objection you can actually answer.', 'Se revela la vergüenza por desearlo. Credibilidad +2, alineación +2, fiabilidad +2, seguridad +1, disposición +10. La Fase 7 abrirá con una exigencia de verificación, que es la objeción que sí puedes responder.'),
            nextPriority: T('She will ask how she can know this will not happen again. Answer it with something she can check, not with something she must believe.', 'Te preguntará cómo puede saber que esto no volverá a pasar. Respóndele con algo que pueda comprobar, no con algo que tenga que creer.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a4 = artifacts['4'];
      if (!a4 || !a4.valid) {
        return { canAdvance: false, reason: T('Toolkit #4 (MIRROR Recommendation Builder) must be completed before Phase 7. Field 6 must carry the honest ceiling and Field 8 must state what you are deliberately NOT recommending — in a correction case those two fields are the treatment.', 'El Toolkit #4 (Constructor de Recomendación MIRROR) debe completarse antes de la Fase 7. El campo 6 debe recoger el techo honesto y el campo 8 debe enunciar lo que deliberadamente NO recomiendas — en un caso de corrección esos dos campos son el tratamiento.') };
      }
      const a5 = artifacts['5'];
      if (!a5 || !a5.valid) {
        return { canAdvance: false, reason: T('Toolkit #5 (Price & Value Presentation Planner) must be completed before Phase 7. The honest limitation must be stated before the number — with this client, a price that arrives before a limitation is read as a second sales pitch.', 'El Toolkit #5 (Planificador de Precio y Valor) debe completarse antes de la Fase 7. La limitación honesta debe enunciarse antes de la cifra — con esta clienta, un precio que llega antes que una limitación se lee como un segundo argumentario de venta.') };
      }
      return { canAdvance: true };
    }
  },

  // ===================== PHASE 7 — DECISION SUPPORT =======================
  decisionSupport: {
    key: 'decisionSupport', toolkit: 6,
    signal(cs) {
      // MATERIAL BRANCHING: which objection appears is determined by prior state.
      if (cs.flags.criticisedClinic) {
        return {
          source: 'Teresa',
          objectionVariant: 'DISTRUST',
          intensity: 3,
          quote: T('"Can I say something? You have spent an hour telling me how incompetent she was. And I agreed with you, and it felt wonderful. And then on the way to the toilet it occurred to me: in eighteen months\' time, when I am sitting in somebody else\'s chair, what are you going to be saying about me?"', '«¿Puedo decirle una cosa? Lleva una hora contándome lo incompetente que fue ella. Y yo le he dado la razón, y ha sentado de maravilla. Y luego, yendo al baño, se me ha ocurrido: dentro de dieciocho meses, cuando esté sentada en la silla de otra, ¿qué va a estar diciendo usted de mí?»'),
          subtext: T('Highest intensity, and there is no information that fixes it. The objection is not about the treatment — it is a conclusion she has drawn about your character from evidence you supplied yourself. Surface = a question about gossip; underlying = she has just recategorised you as the same kind of professional.', 'Intensidad máxima, y no hay información que lo arregle. La objeción no va del tratamiento — es una conclusión que ha sacado sobre tu carácter a partir de pruebas que aportaste tú misma. Superficie = una pregunta sobre cotilleos; fondo = acaba de reclasificarte como el mismo tipo de profesional.')
        };
      }
      if (cs.flags.overpromised) {
        return {
          source: 'Teresa',
          objectionVariant: 'GUARANTEE',
          intensity: 3,
          quote: T('"Then put it in writing. If you are that certain, you will not mind signing it — symmetry within six months or you refund me. She was certain too, and her certainty cost me two thousand euros and a year and a half."', '«Entonces póngamelo por escrito. Si está tan segura, no le importará firmarlo — simetría en seis meses o me devuelve el dinero. Ella también estaba segura, y su seguridad me costó dos mil euros y año y medio.»'),
          subtext: T('Highest intensity, and it is your own promise coming back with a signature line attached. The demand is not unreasonable — it is the exactly rational response to an unhedged claim. Surface = a guarantee; underlying = she needs a way to make your confidence cost you something, because last time it only cost her.', 'Intensidad máxima, y es tu propia promesa volviendo con una línea para la firma. La exigencia no es irrazonable — es la respuesta exactamente racional a una afirmación sin matices. Superficie = una garantía; fondo = necesita una manera de que tu seguridad te cueste algo a ti, porque la última vez solo le costó a ella.')
        };
      }
      return {
        source: 'Teresa',
        objectionVariant: 'VERIFICATION',
        intensity: 1,
        quote: T('"One more, and it is not on the list. How do I know this will not happen again? Not — are you going to try. How would I actually know, at the point where it is too late, that it is going the way you said it would?"', '«Una más, y no está en la lista. ¿Cómo sé que esto no va a volver a pasar? No me refiero a si va a intentarlo. ¿Cómo sabría yo, en el momento en que ya sea tarde, que está yendo como usted dijo?»'),
        subtext: T('Lowest intensity and the most answerable objection in the case. This is not resistance; it is a procurement manager asking for acceptance criteria. She is not asking you to promise — she is asking what evidence she will have, and when, and that is a request you can meet completely.', 'La intensidad más baja y la objeción más respondible del caso. No es resistencia; es una responsable de compras pidiendo criterios de aceptación. No te está pidiendo que prometas — te está preguntando qué evidencia tendrá y cuándo, y esa es una petición que puedes satisfacer por completo.')
      };
    },
    decision: {
      prompt: T('Phase 7 objective: explore the objection and support her pace. The objection you are facing was determined by your earlier choices.', 'Objetivo de la Fase 7: explorar la objeción y acompañar su ritmo. La objeción a la que te enfrentas la determinaron tus decisiones anteriores.'),
      options: [
        {
          id: 'dec-guarantee',
          label: T('Guarantee the result to settle it', 'Garantizar el resultado para zanjarlo'),
          language: T('All right — I will guarantee it. If you are not symmetrical by six months I will redo it at no charge, and I will put that in writing today. I am that confident. Now can we book you in?', 'Muy bien — se lo garantizo. Si a los seis meses no está simétrica, se lo repito sin cargo, y se lo pongo por escrito hoy mismo. Estoy así de segura. ¿Podemos reservarle ya?'),
          effects: { trust: { credibility: -2, reliability: -2, alignment: -1 }, willingness: 6, flags: { guaranteed: true } },
          mirror: {
            signalDetected: T('A demand for certainty, or a question about verification, answered with a commercial guarantee.', 'Una exigencia de certeza, o una pregunta sobre verificación, respondida con una garantía comercial.'),
            interpretation: T('A guarantee sounds like the strongest possible commitment and is in fact the weakest: it promises an outcome governed by enzyme behaviour and tissue recoil, and it converts a clinical relationship into a refund policy. "Symmetrical" is not even a definable endpoint — whose measurement, at what angle, in what expression. She will spot that within a day, and what she will conclude is that you would say anything to book her.', 'Una garantía suena al compromiso más fuerte posible y es en realidad el más débil: promete un resultado gobernado por el comportamiento de una enzima y el retroceso tisular, y convierte una relación clínica en una política de devoluciones. «Simétrica» ni siquiera es un objetivo definible — ¿medida por quién, en qué ángulo, con qué gesto? Lo verá en un día, y lo que concluirá es que dirías cualquier cosa por reservarla.'),
            principle: J(duty(4), L('; ', '; '), duty(1), L(' — a guarantee on an outcome you do not control manufactures the next injury; ', ' — garantizar un resultado que no controlas fabrica la siguiente lesión; '), std(3), L('; ', '; '), stage('reliability'), L('.', '.')),
            learnerDid: T('You answered a demand for evidence with a promise, which is what the last practitioner did.', 'Respondiste a una exigencia de evidencia con una promesa, que es lo que hizo la profesional anterior.'),
            alignment: 'NOT ALIGNED',
            why: T('Reliability is built from things that can be checked on a date. A guarantee is checkable only at the end, only once, and only by failing — it gives her nothing to verify along the way, which is exactly what she asked for.', 'La fiabilidad se construye con cosas que se pueden comprobar en una fecha. Una garantía solo se comprueba al final, una sola vez y solo fallando — no le da nada que verificar por el camino, que es exactamente lo que pidió.'),
            consequence: T('Credibility −2, reliability −2, alignment −1 and only six points of willingness for all of it. If she does proceed, she proceeds as a claimant rather than a patient.', 'Credibilidad −2, fiabilidad −2, alineación −1 y solo seis puntos de disposición por todo eso. Si sigue adelante, sigue como reclamante y no como paciente.'),
            nextPriority: T('Never guarantee an outcome. Guarantee a process, a review date and a named person.', 'Nunca garantices un resultado. Garantiza un proceso, una fecha de revisión y una persona con nombre.')
          }
        },
        {
          id: 'dec-repeat',
          label: T('Restate your experience and the clinical reasoning', 'Reiterar tu experiencia y el razonamiento clínico'),
          language: T('I understand the worry, I really do. All I can say is that I have been doing this for fourteen years, I have explained exactly what I am doing and why, and I have been honest with you about what I cannot achieve. I hope that counts for something.', 'Entiendo la preocupación, de verdad. Lo único que puedo decirle es que llevo catorce años haciendo esto, le he explicado exactamente qué voy a hacer y por qué, y he sido honesta con usted sobre lo que no puedo conseguir. Espero que eso cuente para algo.'),
          effects: { trust: { credibility: 1 }, willingness: 5 },
          mirror: {
            signalDetected: T('A request for a mechanism of verification, answered with a restatement of credentials and good intentions.', 'Una petición de mecanismo de verificación, respondida con una reiteración de credenciales y buenas intenciones.'),
            interpretation: T('Everything you said is true and she does not doubt your intentions — she doubts her own ability to tell good intentions from bad ones in advance, which is a different problem and the one she actually has. "I hope that counts for something" asks her to trust, and asking is the one thing that does not work here.', 'Todo lo que has dicho es cierto y ella no duda de tus intenciones — duda de su propia capacidad para distinguir de antemano las buenas de las malas, que es otro problema y es el que realmente tiene. «Espero que eso cuente para algo» le pide que confíe, y pedir es lo único que aquí no funciona.'),
            principle: J(std(3), L(' restated rather than demonstrated; ', ' reiterado en lugar de demostrado; '), std(6), L('; ', '; '), stage('reliability'), L(' — reliability is established by scheduled evidence, not by assurance.', ' — la fiabilidad se establece con evidencia programada, no con garantías verbales.')),
            learnerDid: T('You asked for trust instead of building a way to check.', 'Pediste confianza en lugar de construir una manera de comprobar.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T('The honest history you gave her earlier is real capital and this spends it on reassurance. Her question had a factual answer — what evidence, on what date — and you gave her a sentiment.', 'El historial honesto que le diste antes es capital real y esto lo gasta en tranquilizarla. Su pregunta tenía respuesta factual — qué evidencia, en qué fecha — y le diste un sentimiento.'),
            consequence: T('Credibility +1, willingness +5. She neither commits nor refuses; the consultation ends pleasantly with nothing she can act on alone.', 'Credibilidad +1, disposición +5. Ni se compromete ni se niega; la consulta termina con cordialidad y sin nada sobre lo que pueda actuar sola.'),
            nextPriority: T('Give her the checkpoints. What she can see, on what date, and what it means if she does not see it.', 'Dale los puntos de control. Qué podrá ver, en qué fecha, y qué significa si no lo ve.')
          }
        },
        {
          id: 'dec-verify',
          label: T('Give her the means to verify, and a defined stopping point', 'Darle los medios para verificar, y un punto de parada definido'),
          language: T('That is the right question and it deserves specifics rather than reassurance, so here they are. One: you will have the product name, the batch number and the exact quantity used, written on your record before I do anything, and a copy goes home with you — which is the document you did not get last time. Two: stage one is dissolving only, which is the reversible half of this; nothing is added until you have seen six weeks of your own tissue. Three: photographs at a fixed distance, fixed lighting, same angles, at day seven, week three and week six, and you get all of them. Four: at week six, if what you are seeing does not match what I told you to expect, the honest thing is to stop, and I will say so myself — stopping after stage one is a legitimate endpoint, not a failure. And five: if at any point you want a second opinion, I will send your notes and the photographs to whomever you name, without being asked twice.', 'Esa es la pregunta correcta y merece concreción en vez de palabras tranquilizadoras, así que aquí van. Una: tendrá el nombre del producto, el número de lote y la cantidad exacta empleada, escritos en su historia antes de que yo haga nada, y se lleva una copia a casa — el documento que no le dieron la última vez. Dos: la etapa uno es solo disolución, que es la mitad reversible de esto; no se añade nada hasta que haya visto seis semanas de su propio tejido. Tres: fotografías a distancia fija, iluminación fija, los mismos ángulos, en el día siete, la semana tres y la semana seis, y se las queda todas. Cuatro: en la semana seis, si lo que ve no coincide con lo que le dije que esperara, lo honesto es parar, y lo diré yo misma — parar tras la etapa uno es un final legítimo, no un fracaso. Y cinco: si en cualquier momento quiere una segunda opinión, envío su historia y las fotografías a quien usted me diga, sin que tenga que pedírmelo dos veces.'),
          effects: { trust: { safety: 1, credibility: 1, alignment: 1, reliability: 2 }, willingness: 10, posture: 'engaged', flags: { verifiable: true } },
          mirror: {
            signalDetected: T('"How would I actually know, at the point where it is too late" — a request for acceptance criteria from somebody who writes them professionally.', '«¿Cómo sabría yo, en el momento en que ya sea tarde?» — una petición de criterios de aceptación de alguien que los redacta profesionalmente.'),
            interpretation: T('You answered in her own professional language: documentation, a reversible first stage, dated checkpoints, a defined stopping condition and an unconditional second-opinion clause. Every item is something she can hold you to without needing to trust you, which is precisely the capability she lost. The second-opinion clause is the one that costs you something, and that is why it lands.', 'Respondiste en su propio lenguaje profesional: documentación, una primera etapa reversible, puntos de control con fecha, una condición de parada definida y una cláusula de segunda opinión incondicional. Cada punto es algo que puede exigirte sin necesidad de confiar en ti, que es exactamente la capacidad que perdió. La cláusula de la segunda opinión es la que te cuesta algo, y por eso cala.'),
            principle: J(std(6), L('; ', '; '), std(5), L('; ', '; '), duty(2), L('; ', '; '), duty(1), L('; ', '; '), stage('reliability'), L('; Phase 7 objective — explore the objection and support the pace.', '; objetivo de la Fase 7: explorar la objeción y acompañar el ritmo.')),
            learnerDid: T('You replaced "trust me" with a list of things she can check on dates you named.', 'Sustituiste el «confíe en mí» por una lista de cosas que puede comprobar en fechas que tú nombraste.'),
            alignment: 'ALIGNED',
            why: T('Protecting trust after the decision is a canonical standard and it is built here, before the decision, by writing down how the client will hold you to it. For a client harmed elsewhere, verifiability is the only form of reassurance that is not an insult.', 'Proteger la confianza después de la decisión es un estándar canónico y se construye aquí, antes de la decisión, escribiendo cómo la clienta te va a exigir su cumplimiento. Para una clienta dañada en otro sitio, la verificabilidad es la única forma de tranquilidad que no es un insulto.'),
            consequence: T('Reliability +2, safety, credibility and alignment +1 each, willingness +10, and her posture moves from testing to engaged. Whatever she decides now, she decides with evidence she can check.', 'Fiabilidad +2, seguridad, credibilidad y alineación +1 cada una, disposición +10, y su postura pasa de examinadora a implicada. Decida lo que decida ahora, lo decide con evidencia que puede comprobar.'),
            nextPriority: T('Put the batch number, the photograph schedule and the stop condition into Toolkit #8 as rows with owners.', 'Pon el número de lote, el calendario de fotografías y la condición de parada en el Toolkit #8 como filas con responsable.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a6 = artifacts['6'];
      if (!a6 || !a6.valid) {
        return { canAdvance: false, reason: T('Toolkit #6 (Objection Diagnostic) must be completed before the Decision Engine derives an outcome. "How do I know this will not happen again" is the surface — the underlying concern is about her own ability to evaluate, not about your technique.', 'El Toolkit #6 (Diagnóstico de Objeciones) debe completarse antes de que el Motor de Decisión derive un resultado. «¿Cómo sé que no volverá a pasar?» es la superficie — la preocupación subyacente es su propia capacidad de evaluar, no tu técnica.') };
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
        quote: T('The consultation is over. This client will measure everything you promised against what actually arrives, on the dates you named, and she keeps written notes.', 'La consulta ha terminado. Esta clienta medirá todo lo prometido contra lo que realmente llegue, en las fechas que nombraste, y toma notas por escrito.'),
        subtext: T('Phase 8 is a canonical phase, not an epilogue. In a correction case the follow-up plan is where Do No Avoidable Harm is either honoured or quietly abandoned — a stage-two decision with no scheduled review becomes a stage-two sale. Toolkit #8 governs all three outcomes; at an immediate NO, neither Toolkit #16 nor Toolkit #17 is eligible, and a win-back sequence aimed at a woman harmed by a clinic is the harm repeating itself with a calendar.', 'La Fase 8 es una fase canónica, no un epílogo. En un caso de corrección, el plan de seguimiento es donde el No Causar Daño Evitable se honra o se abandona en silencio — una decisión de etapa dos sin revisión programada se convierte en una venta de etapa dos. El Toolkit #8 gobierna los tres resultados; en un NO inmediato no son elegibles ni el Toolkit #16 ni el #17, y una secuencia de recuperación dirigida a una mujer dañada por una clínica es el mismo daño repitiéndose con calendario.')
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
    disclosed: T('"Stage one, then. Only stage one — and I noticed you would not quote me for the second part, which is the thing that made me say yes. Eighteen months and you are the first person who told me what you could not do."', '«La etapa uno, entonces. Solo la etapa uno — y me he fijado en que no me ha querido presupuestar la segunda parte, que es lo que me ha hecho decir que sí. Dieciocho meses, y es usted la primera persona que me ha dicho lo que no podía hacer.»'),
    undisclosed: T('"Fine. Book the first one. I still think you have no idea what you are actually being asked to repair here, but the plan is sound enough on paper."', '«Vale. Reserve la primera. Sigo pensando que usted no tiene ni idea de qué se le está pidiendo que repare en realidad, pero sobre el papel el plan se sostiene.»')
  },
  DEFER: T('"I am taking what you have written and reading it at home, with the notes I made. I am not deciding in a consulting room a second time — nothing personal. I will tell you either way."', '«Me llevo lo que me ha escrito y lo leo en casa, con las notas que he tomado. No voy a decidir en una consulta por segunda vez — no es nada personal. Le diré algo en cualquier caso.»'),
  NO: T('"No. And I want you to understand why, because it is not the price. The last one talked to me exactly like this, and I have promised myself that the next time I feel this convinced in a room, I walk out of it."', '«No. Y quiero que entienda por qué, porque no es el precio. La anterior me hablaba exactamente así, y me he prometido a mí misma que la próxima vez que me sienta así de convencida dentro de una sala, me levanto y me voy.»')
};

// ---------------------------------------------------------------------------
// Case facts for the toolkit validators (scenario-aware honesty checks)
// ---------------------------------------------------------------------------
const caseFacts = {
  clientName: 'Teresa',
  motivationItem: 'emotional_cost',
  motiveRegex: /(photograph|photo|picture|camera|avoid|hid |hiding|hidden|withdrew|withdraw|stopped going|told no one|told nobody|nobody|no one|alone|ashamed|shame|humiliat|eighteen months|18 months|foto|fotograf|c[áa]mara|evita|escond|ocult|se retir|dej[óo] de ir|dej[óo] de salir|a nadie|sola|verg[üu]enza|humilla|dieciocho meses)/i,
  motiveIssue: T('Teresa disclosed what the eighteen months actually cost her — she has not allowed a photograph of herself since March last year, she stopped going to two things, and she has told nobody. The map records the asymmetry instead of that motive. The asymmetry is the visible goal.', 'Teresa reveló qué le han costado realmente los dieciocho meses: no se deja fotografiar desde marzo del año pasado, dejó de ir a dos sitios y no se lo ha contado a nadie. El mapa registra la asimetría en lugar de ese motivo. La asimetría es el objetivo visible.'),
  priorExperienceIssue: T('Prior experience risk is blank, and in this case it is the entire case. Teresa had a mid-face filler treatment elsewhere eighteen months ago that was over-volumised and unevenly placed. The product name, the date, the stated volume and what she believes happened must all be on the canvas, or Phase 7 will meet it cold.', 'El riesgo por experiencia previa está en blanco, y en este caso es el caso entero. A Teresa le hicieron un relleno del tercio medio en otro sitio hace dieciocho meses, sobrevolumizado y mal repartido. El nombre del producto, la fecha, el volumen declarado y lo que ella cree que ocurrió deben constar en el lienzo, o la Fase 7 llegará en frío.'),
    whyNowIssue: T('You ticked "I understand why it matters now", but Teresa has not disclosed a why-now. She has given you fourteen questions and no motive; the questions are the armour, not the reason. Untick it or return to Discovery and ask what the eighteen months have been like.', 'Marcaste «Entiendo por qué le importa ahora», pero Teresa no ha revelado ningún porqué. Te ha dado catorce preguntas y ningún motivo; las preguntas son la armadura, no la razón. Desmárcalo o vuelve al Descubrimiento y pregunta cómo han sido estos dieciocho meses.'),
  undisclosedMotiveIssue: T('MATERIAL: Teresa never disclosed a motive in this attempt — anger is not a motive and a list of questions is not disclosure. Recording an inferred motive as fact is not permitted, and in a client who was already told things that were not true it is the exact failure she came here about. Write "Not disclosed" and note what you would ask next time.', 'MATERIAL: Teresa no reveló ningún motivo en este intento — el enfado no es un motivo y una lista de preguntas no es una revelación. Registrar un motivo inferido como un hecho no está permitido, y en una clienta a la que ya le contaron cosas que no eran ciertas es exactamente el fallo por el que ha venido. Escribe «No revelado» y anota qué preguntarías la próxima vez.'),
  limitationIssue: T('Field 6 states no limitation. Eighteen months on, part of what she is describing is residual product and part is tissue that has been stretched and will not fully return; hyaluronidase is neither selective nor fully predictable. A correction is a partial, staged improvement in symmetry, not a restoration of her 2023 face — an expectation with no ceiling is an overclaim (Ethical Duty 4) and, in a client already harmed by an overclaim, a second avoidable harm (Ethical Duty 1).', 'El campo 6 no indica ninguna limitación. A los dieciocho meses, parte de lo que describe es producto residual y parte es tejido distendido que no volverá del todo; la hialuronidasa no es selectiva ni del todo previsible. Una corrección es una mejora parcial y escalonada de la simetría, no la restitución de su cara de 2023 — una expectativa sin techo es una sobrepromesa (Deber Ético 4) y, en una clienta ya dañada por una sobrepromesa, un segundo daño evitable (Deber Ético 1).')
};

// Toolkit #8 draft rows for this case (Continuation Engine).
const followUpPack = {
  motivationItem: 'emotional_cost',
  yesRows: [
    'Before anything is injected or dissolved: product name, batch number and exact quantity written on her record, with a copy given to her — the document she did not receive last time',
    'Day seven: standardised photographs at fixed distance, lighting and angles, sent to her in full, with the expected appearance at day seven stated in advance so she can compare rather than worry',
    'Week three: review against the stated expectation, not against a satisfaction score, and an explicit written restatement of what will not change',
    'Week six: the stage-two decision, taken together, with "stop here" named as a legitimate and expected endpoint — and no quotation for stage two issued before this appointment',
    'Standing clause, in writing: her notes and photographs go to any practitioner she names for a second opinion, on first request, without a conversation about it'
  ],
  deferRows: [
    'The written recommendation, the ceiling and the stage-one price sent the same day, so she can evaluate it away from the room',
    'One agreed contact on a date she sets, with the practitioner named as the owner of that call',
    'Stop condition: one contact, then nothing. A client who was harmed by a clinic that kept selling must not be followed up by a clinic that keeps calling'
  ],
  reviewNote: 'Every follow-up row in this case is a test of Ethical Duty 4 with a date on it: if the week-three photographs do not match what was promised in Phase 6, the promise was wrong and saying so is the deliverable. Anchor the reviews to her own sentence about the eighteen months, never to the millimetres. At an immediate NO, Toolkit #8 documents the outcome and the closure under MBOK Ch.6 — Toolkits #16 and #17 are not eligible, and a reactivation sequence aimed at this client would repeat, in marketing form, the exact failure she came in to describe.'
};

// ---------------------------------------------------------------------------
// ENGINE API (identical contract to Cases 01, 02, 03 and 06)
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
