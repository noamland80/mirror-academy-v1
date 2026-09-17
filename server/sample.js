/**
 * THE PUBLIC SAMPLE — meeting Carmen before you own anything.
 *
 * A visitor who reads a page about consultation training learns that a product
 * exists. A visitor who sits in front of Carmen learns what the product is.
 * So the landing page does not describe the experience; it hands over one real
 * moment from one of the nine shipped consultations and lets her play it.
 *
 * THREE DECISIONS MADE HERE, EACH FOR A REASON:
 *
 * 1. Carmen, not Sofia. `commercial.firstMoment()` already serves a moment to
 *    an owner who has an account, and that one is Sofia's Discovery. Carmen's
 *    entrance is the better public moment because her whole case is legible in
 *    nine words — "I may well decide to do nothing" — and because the honest
 *    answer to her is the one a clinic least expects a sales product to teach.
 *
 * 2. The reading is NOT in the payload. `firstMoment()` pre-resolves all three
 *    replies so the browser can answer instantly; behind a login that is fine.
 *    On a public page it would put the correct answer in the page source, which
 *    both spoils the only moment that matters and hands the teaching away.
 *    So the moment ships with her words and the three replies, and the reading
 *    for ONE reply arrives only after the visitor commits to it.
 *
 * 3. Nothing else comes with it. No lesson body, no toolkit, no other case, no
 *    principle catalogue. The sample is a sample: one phase, one client, one
 *    reading at a time, rate-limited. Somebody who wants the programme has to
 *    buy the programme.
 *
 * Nothing here writes to the database and nothing is recorded. There is no
 * attempt, no account and no score.
 */
const scenarios = require('./scenario');
const feedbackEngine = require('./feedback/feedbackEngine');
const { ledgerWord } = require('./ledger');

const T = (en, es) => ({ en, es });

/** The moment. Carmen's entrance — Phase 2, Connection. */
const SAMPLE = { scenario: 'carmen-injectables', phase: 'connection' };

/**
 * WHO SHE IS.
 *
 * Every line is drawn from her shipped case file — the booking note, the intake
 * form, the profile — and not one of it is written for the landing page. The
 * ordering is the point: she is a person with a reason to be in the room and a
 * reason to distrust it, and only then a case with a number.
 *
 * What she is protecting is named as a question, never as an answer. A visitor
 * must not be able to read the right reply off her portrait.
 */
function who(sc) {
  return {
    name: 'Carmen',
    fullName: sc.profile.name,
    age: sc.profile.age,
    occupation: T('Gallery director', 'Directora de galería'),
    // The two-line human opening the owner asked for, in her own case's facts.
    story: [
      T('Carmen did not book this appointment. Her sister did — a birthday present.',
        'Carmen no reservó esta cita. La reservó su hermana — un regalo de cumpleaños.'),
      T('On the booking form, in her own handwriting: "I want to still look like me. I\'ve seen what bad work looks like."',
        'En el formulario, de su puño y letra: «Quiero seguir pareciéndome a mí. He visto cómo queda un mal trabajo.»')
    ],
    // Context a practitioner would actually have before the door opens.
    onFile: [
      { label: T('Booked by', 'Reservado por'),
        value: T('Her sister — "a birthday present"', 'Su hermana — «un regalo de cumpleaños»') },
      { label: T('Concern', 'Motivo'),
        value: T('Frown lines, early marionette lines', 'Entrecejo, líneas de marioneta incipientes') },
      { label: T('Her words on the form', 'Sus palabras en el formulario'),
        value: T('"NOT sure I want anything done."', '«NO estoy segura de querer hacerme nada.»') },
      { label: T('Occupation', 'Profesión'),
        value: T('Gallery director — "my face is how collectors know me"',
                 'Directora de galería — «los coleccionistas me conocen por mi cara»') },
      { label: T('Last year', 'El año pasado'),
        value: T('Left a consultation at another clinic. They printed a treatment plan before she sat down.',
                 'Abandonó una consulta en otra clínica. Imprimieron un plan de tratamiento antes de que se sentara.') }
    ],
    // What the practitioner is supposed to notice — as questions, so the
    // moment is still a moment.
    toNotice: [
      T('She has told you she might do nothing. Is that a warning, or an invitation?',
        'Te ha dicho que quizá no haga nada. ¿Es una advertencia o una invitación?'),
      T('She walked out of a clinic that decided for her. What was she protecting?',
        'Se marchó de una clínica que decidió por ella. ¿Qué estaba protegiendo?'),
      // Deliberately a question and deliberately not the finding. An earlier
      // draft of this line read "Something in her file is not about her face at
      // all", which is a statement AND most of the answer: it tells a visitor
      // what to go and look for instead of making her look.
      T('One line on her file is not about her face. Which one?',
        '¿Qué línea de su ficha no habla de su cara?')
    ],
    caseTitle: sc.title,
    caseNumber: sc.caseNumber,
    scenario: sc.id
  };
}

/**
 * The moment as a visitor receives it: her words, the room, and three replies
 * she could actually be given. No alignment, no reading, no consequence.
 */
function sampleMoment() {
  const sc = scenarios.get(SAMPLE.scenario);
  const opening = sc.initialClientState();
  const content = sc.getPhaseContent(SAMPLE.phase, opening);

  return {
    kind: 'public_sample',
    client: who(sc),
    phase: {
      n: 2, key: SAMPLE.phase,
      name: T('Connection', 'Conexión'),
      objective: T('Establish psychological safety.', 'Establecer seguridad psicológica.')
    },
    setting: T('The door opens. She does not sit down slowly.',
               'La puerta se abre. No se sienta despacio.'),
    signal: {
      source: content.clientSignal.source,
      quote: content.clientSignal.quote
      // Her subtext is withheld: it is the beginning of the reading.
    },
    prompt: content.decision.prompt,
    // Labels and the words themselves — enough to choose, nothing to grade by.
    options: content.decision.options.map(o => ({
      id: o.id, label: o.label, language: o.language
    })),
    ask: T('What do you say next?', '¿Qué dices a continuación?')
  };
}

/**
 * The reading for ONE reply, resolved against her own opening state.
 *
 * The whole point of MIRROR is here: not "correct" or "incorrect", but what she
 * said, what it signalled, what your reply did to her, and what is now possible
 * that was not possible before — or no longer is.
 */
function sampleReveal(optionId) {
  const sc = scenarios.get(SAMPLE.scenario);
  const opening = sc.initialClientState();
  const content = sc.getPhaseContent(SAMPLE.phase, opening);
  const chosen = content.decision.options.find(o => o.id === optionId);
  if (!chosen) return null;

  // resolveChoice mutates the state it is handed, so every reply is played
  // against a fresh copy of her entrance and never against another reply's wake.
  const state = sc.initialClientState();
  const before = { posture: state.posture, willingness: state.willingness };
  const resolved = sc.resolveChoice(SAMPLE.phase, optionId, state);
  const fb = feedbackEngine.generateFeedback(SAMPLE.phase, resolved, state);
  const c = resolved.consequence || {};
  const oc = fb.observableConsequence || {};

  const full = content.decision.options.find(o => o.id === optionId);
  const subtext = sc.getPhaseContent(SAMPLE.phase, state);

  return {
    kind: 'public_sample_reading',
    optionId,
    label: chosen.label,
    language: chosen.language,
    alignment: fb.alignmentVerdict,
    // The order a practitioner should read it in: what you missed or caught
    // first, then what it did, then what to carry forward.
    reading: {
      signal: fb.signalDetected,
      interpretation: fb.mirrorInterpretation,
      did: fb.learnerDid,
      why: fb.alignmentReason,
      principle: fb.canonicalPrinciple,
      next: fb.nextPracticePriority
    },
    // What actually happened in the room, in her behaviour rather than a score.
    consequence: {
      narrative: oc.narrative || null,
      postureBefore: before.posture,
      postureAfter: c.posture || before.posture,
      willingnessBefore: typeof c.willingnessBefore === 'number' ? c.willingnessBefore : before.willingness,
      willingnessAfter: typeof c.willingnessAfter === 'number' ? c.willingnessAfter : before.willingness,
      trustDelta: c.trustDelta || {},
      // The ledger in words, not in engine flags. A visitor must never read
      // `identity_fear` — least of all a Spanish visitor, for whom the raw
      // flag is also the wrong language.
      revealed: (c.newlyRevealed || []).map(ledgerWord),
      stillWithheld: (c.stillWithheld || []).map(ledgerWord)
    },
    // What the visitor should understand about the product, said once, plainly,
    // and only after she has felt it.
    close: {
      title: T('Your practitioner makes a choice like that eight times in one consultation.',
               'Tu profesional toma una decisión así ocho veces en una consulta.'),
      points: [
        T('Carmen carries every one of them into the next phase. So the consultation you get at the price conversation is the one the first four minutes built.',
          'Carmen se lleva todas ellas a la fase siguiente. La consulta que llegas a tener en la conversación de precio es la que construyeron los primeros cuatro minutos.'),
        T('Every reply is read against the MIRROR method — the principle is named, not an opinion about tone.',
          'Cada respuesta se lee según el método MIRROR — se nombra el principio, no una opinión sobre el tono.'),
        T('Her manager sees what she chose, what it cost, and what to say to her about it on Monday.',
          'Su responsable ve qué eligió, qué le costó y qué decirle el lunes al respecto.')
      ]
    }
  };
}

/** The reply ids a visitor may ask about — nothing else is answerable. */
function sampleOptionIds() {
  const sc = scenarios.get(SAMPLE.scenario);
  return sc.getPhaseContent(SAMPLE.phase, sc.initialClientState())
    .decision.options.map(o => o.id);
}

module.exports = { SAMPLE, sampleMoment, sampleReveal, sampleOptionIds };
