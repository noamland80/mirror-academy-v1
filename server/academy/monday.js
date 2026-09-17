/**
 * MONDAY MORNING — what to do with the team this week.
 *
 * THE DIFFERENCE BETWEEN THIS AND THE COACHING VIEW. `coach.managerView`
 * already answers the manager's questions correctly and completely, across
 * everything her clinic has ever recorded. That is a report. A manager with
 * twenty minutes on a Monday does not want a report; she wants to know what to
 * say in the team meeting she is about to walk into.
 *
 * So this composes the same evidence into three movements and stops:
 *
 *   WHAT HAPPENED          seven days, counted, no interpretation
 *   WHAT IT MAY MEAN       the one pattern worth a conversation — "may",
 *                          because a pattern in eleven consultations is a
 *                          signal, not a finding
 *   WHAT TO DO             one ten-minute exercise she can run, and the one or
 *                          two cases to send people to afterwards
 *
 * WHAT IT REFUSES TO DO.
 *
 *   No leaderboard. Nobody is ranked, nobody is scored, and no practitioner is
 *   ever compared with another by name. A manager who opens MIRROR on a Monday
 *   and finds her team in rank order will use it as a stick, and the
 *   practitioners will learn to game it or stop practising.
 *
 *   No claim without the activity to support it. Every sentence here is gated
 *   on a minimum number of observations, and when there is not enough the
 *   brief says exactly that and offers the thing that would make evidence
 *   exist. "Not enough practice yet to say anything" is a true and useful
 *   sentence; a confident pattern drawn from two consultations is neither.
 *
 *   No arithmetic dressed as insight. Percentages are not reported on small
 *   denominators, because "67% of your team" meaning two people out of three
 *   is a sentence that misleads a manager who is in a hurry.
 */
const T = (en, es) => ({ en, es });

/** Seven days. The week she is actually planning. */
const WINDOW_DAYS = 7;

/**
 * How much evidence before the brief will interpret anything.
 *
 * Deliberately small enough that a real founding clinic reaches it in a week,
 * and large enough that one bad afternoon is not a pattern. Named here rather
 * than inlined so the threshold is arguable in one place.
 */
const ENOUGH = {
  // Decisions carrying the same pattern before it is called a pattern at all.
  pattern: 3,
  // ...spread across at least this many separate consultations. Four
  // occurrences inside ONE consultation is one person having one difficult
  // case, and calling that a team pattern is how a manager ends up running a
  // team session about something that happened once.
  patternAttempts: 2,
  // ...and this many separate people, before it earns TEAM time. A pattern
  // confined to one practitioner is real and worth coaching — one to one, in
  // the detailed view, not as an exercise in front of her colleagues.
  patternPractitioners: 2,
  // Decisions in one phase before "this is where the room is lost" is said.
  phase: 4,
  // Consultations in the window before anything at all is interpreted.
  //
  // This was 3, which suppressed a genuine signal: two practitioners, one
  // consultation each, the same pattern four times between them is exactly
  // the case this page exists for. The real guard is how far the pattern
  // spreads, not how many cases were opened, so the floor is the minimum at
  // which "spread" means anything at all.
  consultations: 2
};

/**
 * A ten-minute team exercise per pattern.
 *
 * Each one is a thing to DO in a room with people in it — a sentence to write
 * down, a pair to swap, a rule for the week — not a topic to discuss. Ten
 * minutes is the constraint that makes it happen at all: a manager will run a
 * ten-minute exercise before the clinic opens; she will not run a workshop.
 *
 * The teaching each one rests on is already in the Academy; the exercise is
 * how it gets into the room. `verify-monday.js` checks every pattern has one.
 */
const EXERCISES = {
  premature_reassurance: {
    cases: ['carmen-injectables', 'teresa-repair'],
    title: T('The reassuring sentence', 'La frase tranquilizadora'),
    minutes: 10,
    steps: [
      T('Everyone writes down, word for word, the sentence they use when a client says she is worried it will look unnatural.',
        'Cada una escribe, palabra por palabra, la frase que usa cuando una clienta dice que le preocupa que quede poco natural.'),
      T('Read them out. Most will be a reassurance, and most will arrive before anyone has asked what she is actually picturing.',
        'Leedlas en voz alta. La mayoría serán una tranquilización, y la mayoría llegarán antes de que nadie haya preguntado qué se está imaginando ella.'),
      T('Agree one replacement question for the week: something that asks what she has seen that worried her.',
        'Acordad una pregunta sustituta para la semana: algo que pregunte qué ha visto que la haya preocupado.')
    ]
  },
  took_the_easy_yes: {
    cases: ['nuria-undecided', 'marta-returning'],
    title: T('The client who agreed with everything', 'La clienta que estaba de acuerdo con todo'),
    minutes: 10,
    steps: [
      T('Each person describes one consultation where the client agreed with every single thing.',
        'Cada una describe una consulta en la que la clienta estuvo de acuerdo absolutamente con todo.'),
      T('For each one: did she book, and did she come?',
        'Para cada una: ¿reservó, y vino?'),
      T('Name out loud what agreement with everything usually means. Then agree the question that tests it.',
        'Nombrad en voz alta qué suele significar estar de acuerdo con todo. Después acordad la pregunta que lo comprueba.')
    ]
  },
  clinical_before_person: {
    cases: ['carmen-injectables', 'sofia-melasma'],
    title: T('Two answers before the mirror', 'Dos respuestas antes del espejo'),
    minutes: 10,
    steps: [
      T('One rule, for this week only: nobody assesses a face until the client has finished two answers.',
        'Una regla, solo para esta semana: nadie valora un rostro hasta que la clienta haya terminado dos respuestas.'),
      T('Practise it once in pairs — one plays a client who came in talking about her sister\'s wedding.',
        'Practicadlo una vez por parejas: una hace de clienta que entra hablando de la boda de su hermana.'),
      T('On Friday, ask what it changed. That is the whole exercise.',
        'El viernes, pregunta qué cambió. Ese es todo el ejercicio.')
    ]
  },
  assumed_understanding: {
    cases: ['sofia-melasma', 'isabel-fullface'],
    title: T('“What I’m hearing is…” and then silence',
             '«Lo que estoy escuchando es…» y después silencio'),
    minutes: 10,
    steps: [
      T('In pairs, one person talks for ninety seconds about something she wants changed.',
        'Por parejas, una habla noventa segundos sobre algo que quiere cambiar.'),
      T('The other says only "What I\'m hearing is…", finishes the sentence, and then says nothing.',
        'La otra dice solo «Lo que estoy escuchando es…», termina la frase, y después no dice nada.'),
      T('Swap. The silence is the exercise — most people fill it, and that is the habit being trained out.',
        'Cambiad. El silencio es el ejercicio: casi todo el mundo lo rellena, y ese es el hábito que se está desentrenando.')
    ]
  },
  interpreted_for_client: {
    cases: ['isabel-fullface', 'lucia-body'],
    title: T('Her words, not yours', 'Sus palabras, no las tuyas'),
    minutes: 10,
    steps: [
      T('Take one real consultation. Write what she said, and beside it what was written in the notes.',
        'Coge una consulta real. Escribe qué dijo ella, y al lado qué se anotó en la ficha.'),
      T('Compare the two. The gap is the interpretation, and it is where a recommendation goes wrong.',
        'Compara las dos. La diferencia es la interpretación, y es donde se equivoca una recomendación.'),
      T('Agree to write one direct quotation in every set of notes this week.',
        'Acordad escribir una cita literal en cada ficha esta semana.')
    ]
  },
  oversold: {
    cases: ['beatriz-programme', 'isabel-fullface'],
    title: T('One thing less', 'Una cosa menos'),
    minutes: 10,
    steps: [
      T('Everyone brings the last plan they recommended, as they recommended it.',
        'Cada una trae el último plan que recomendó, tal como lo recomendó.'),
      T('Remove the item the client did not ask about and could not repeat back. Read what is left.',
        'Quita el elemento que la clienta no pidió y no sabría repetir. Lee lo que queda.'),
      T('Ask which version she would have said yes to.',
        'Pregunta a qué versión habría dicho sí.')
    ]
  },
  price_before_value: {
    cases: ['sofia-melasma', 'beatriz-programme'],
    title: T('Price versus value, in ten minutes',
             'Precio frente a valor, en diez minutos'),
    minutes: 10,
    steps: [
      T('Write the price of your three most-consulted treatments on one side of a sheet.',
        'Escribe el precio de vuestros tres tratamientos más consultados en un lado de una hoja.'),
      T('On the other side, for each one, write the outcome a client has actually said she wanted — in her words.',
        'En el otro lado, para cada uno, escribe el resultado que una clienta ha dicho de verdad que quería, con sus palabras.'),
      T('The rule for the week: nobody says a number until the right-hand side has been said out loud to that client.',
        'La regla de la semana: nadie dice una cifra hasta haberle dicho en voz alta a esa clienta lo del lado derecho.')
    ]
  },
  pressure_at_decision: {
    cases: ['nuria-undecided', 'pilar-thirdparty'],
    title: T('Saying the no out loud', 'Decir el no en voz alta'),
    minutes: 10,
    steps: [
      T('Each person says the sentence she uses when a client hesitates at the end.',
        'Cada una dice la frase que usa cuando una clienta duda al final.'),
      T('Mark the ones that add urgency. Urgency at the decision is what produces the cancellation.',
        'Marca las que añaden urgencia. La urgencia en la decisión es lo que produce la cancelación.'),
      T('Agree one sentence that makes not deciding today a real, respectable option. Everybody uses it this week.',
        'Acordad una frase que convierta no decidir hoy en una opción real y respetable. Todas la usan esta semana.')
    ]
  }
};

const within = (iso, days) => {
  if (!iso) return false;
  const t = new Date(iso).getTime();
  return Number.isFinite(t) && (Date.now() - t) <= days * 86400000;
};

/**
 * Compose the brief.
 *
 * Takes the rows the database already holds plus the view `coach.managerView`
 * already computed, so nothing is recalculated and the two screens can never
 * disagree about the same week.
 */
function brief({ clinicName, firstName, attempts, progressRows, reflectionRows, practitioners, view, coachingEffects, scenarios }) {
  // Cases are named by id in the exercises; their titles come from the shipped
  // registry so this file never restates one.
  const scenarioIndex = {};
  for (const sc of (scenarios || [])) scenarioIndex[sc.id] = sc;
  // Only consultations with a recorded decision count as practice. A case
  // opened and abandoned is not a consultation, and counting it would inflate
  // every number on this page.
  const real = (attempts || []).filter(a => (a.decisions || []).length > 0);
  const weekAttempts = real.filter(a => within(a.started_at || a.startedAt, WINDOW_DAYS));
  const weekCompleted = weekAttempts.filter(a => a.status === 'completed');
  const weekLessons = (progressRows || []).filter(r =>
    r.status === 'complete' && within(r.completed_at || r.updated_at, WINDOW_DAYS));
  const weekAnswered = (reflectionRows || []).filter(r =>
    r.status === 'answered' && within(r.answered_at, WINDOW_DAYS));

  const practisedIds = new Set(weekAttempts.map(a => a.practitionerId || a.practitioner_id));
  const team = (practitioners || []).length;

  // ---- WHAT HAPPENED. Counts only. No adjectives. ----
  const happened = {
    windowDays: WINDOW_DAYS,
    practitionersPractised: practisedIds.size,
    practitionersOnTeam: team,
    consultations: weekAttempts.length,
    consultationsCompleted: weekCompleted.length,
    lessonsCompleted: weekLessons.length,
    assignmentsAnswered: weekAnswered.length,
    // Named, never ranked: who has not practised is a fact a manager needs and
    // is not a judgement of anybody's work.
    notYetThisWeek: (practitioners || [])
      .filter(p => !practisedIds.has(p.id))
      .map(p => ({ id: p.id, name: p.name }))
  };

  // ---- Is there enough to say anything at all? ----
  const enough = weekAttempts.length >= ENOUGH.consultations;

  if (!enough) {
    return {
      kind: 'monday_brief',
      clinic: clinicName,
      greeting: T(`Good morning${firstName ? ', ' + firstName : ''}.`,
                  `Buenos días${firstName ? ', ' + firstName : ''}.`),
      happened,
      enoughEvidence: false,
      // This is the honest version of "what needs attention" when nothing can
      // honestly be said. It is not an apology and it is not empty: it is the
      // one action that makes next Monday's brief real.
      mayMean: null,
      thisWeek: {
        headline: weekAttempts.length === 0
          ? T('Nobody has practised a consultation this week yet, so there is nothing to coach from — and that is the only thing worth fixing today.',
              'Esta semana todavía nadie ha practicado una consulta, así que no hay nada de lo que partir para formar — y eso es lo único que merece la pena arreglar hoy.')
          : T(`${weekAttempts.length} consultation${weekAttempts.length === 1 ? '' : 's'} this week is not yet enough to tell a pattern from an accident.`,
              `${weekAttempts.length} consulta${weekAttempts.length === 1 ? '' : 's'} esta semana todavía no es suficiente para distinguir un patrón de una casualidad.`),
        action: happened.notYetThisWeek.length
          ? T(`Ask ${happened.notYetThisWeek.map(p => p.name.split(/\s+/)[0]).slice(0, 3).join(', ')} to run one case before Friday. One each is enough for this page to have something to say.`,
              `Pide a ${happened.notYetThisWeek.map(p => p.name.split(/\s+/)[0]).slice(0, 3).join(', ')} que hagan un caso antes del viernes. Con uno cada una, esta página ya tendrá algo que decir.`)
          : T('Run one case yourself before Friday, so you have met what you are about to ask your team to practise.',
              'Haz tú un caso antes del viernes, para haber pasado por lo que vas a pedirle a tu equipo que practique.'),
        exercise: null,
        practice: null
      },
      changedSinceCoaching: coachingEffects || null,
      basis: T('Counts only. Nothing on this page is interpreted until there is enough practice to interpret.',
               'Solo recuentos. En esta página no se interpreta nada hasta que haya práctica suficiente para interpretarlo.')
    };
  }

  // ---- WHAT IT MAY MEAN. The one thing worth the team's ten minutes. ----
  // The existing view already found the patterns and the phase where the room
  // is lost; this picks the strongest one that clears its own threshold.
  const repeats = (view && view.repeats) || [];
  const trustLoss = (view && view.trustLoss) || [];

  // The field names are coach.js's own — `occurrences` on a repeat, and
  // `misaligned + partial` out of `total` on a phase. Reading invented names
  // here would have silently produced a brief that never interpreted anything,
  // which is the most dangerous kind of wrong: it looks like a quiet week.
  // Strong enough to name, and spread widely enough to be the team's.
  const spread = repeats.filter(r =>
    (r.occurrences || 0) >= ENOUGH.pattern &&
    (r.attempts || 0) >= ENOUGH.patternAttempts);

  const topPattern = spread
    .filter(r => (r.practitioners || 0) >= ENOUGH.patternPractitioners)
    .sort((a, b) => (b.practitioners - a.practitioners) || (b.occurrences - a.occurrences))[0] || null;

  // Strong, spread across consultations, but confined to one person. Named as
  // what it is — a conversation with one practitioner, not a team session —
  // and deliberately without naming her on a page read out to the room.
  const onePersonPattern = !topPattern
    ? (spread.filter(r => (r.practitioners || 0) === 1)
        .sort((a, b) => b.occurrences - a.occurrences)[0] || null)
    : null;

  const topPhase = trustLoss
    .filter(p => ((p.misaligned || 0) + (p.partial || 0)) >= ENOUGH.phase)
    .sort((a, b) => ((b.misaligned || 0) * 2 + (b.partial || 0)) - ((a.misaligned || 0) * 2 + (a.partial || 0)))[0] || null;

  // The observation is asserted; what it means about anybody is not. `evidence`
  // is coach.js's own sentence, which counts rather than concludes.
  const mayMean = topPattern ? {
    pattern: topPattern.key,
    observation: topPattern.label,
    evidence: topPattern.evidence,
    occurrences: topPattern.occurrences,
    across: topPattern.practitioners,
    phase: topPhase ? topPhase.phaseName : null
  } : (topPhase ? {
    pattern: null,
    observation: topPhase.phaseName,
    evidence: topPhase.evidence,
    occurrences: (topPhase.misaligned || 0) + (topPhase.partial || 0),
    across: topPhase.practitioners,
    phase: topPhase.phaseName
  } : null);

  // ---- WHAT TO DO. One exercise, and where to send people afterwards. ----
  const ex = topPattern && EXERCISES[topPattern.key] ? EXERCISES[topPattern.key] : null;

  /**
   * SUGGESTED PRACTICE — cases, not people.
   *
   * `view.whatToRepeat` is a per-practitioner prescription: it names a person
   * and the pattern she repeats. That is exactly what a manager needs when she
   * sits down with ONE practitioner, and exactly what must not appear on a
   * page she reads out to the room. Reading it here produced a list of named
   * people beside their weaknesses — a leaderboard with the scores written in
   * prose — so the brief takes its cases from the pattern instead, and every
   * practitioner is sent to the same two.
   */
  const practice = ex && Array.isArray(ex.cases)
    ? ex.cases.map(id => {
        const sc = scenarioIndex[id];
        return sc ? { scenario: id, title: sc.title, subtitle: sc.subtitle } : null;
      }).filter(Boolean)
    : [];

  return {
    kind: 'monday_brief',
    clinic: clinicName,
    greeting: T(`Good morning${firstName ? ', ' + firstName : ''}.`,
                `Buenos días${firstName ? ', ' + firstName : ''}.`),
    happened,
    enoughEvidence: true,
    mayMean,
    thisWeek: {
      headline: mayMean
        ? T('One thing is worth ten minutes with the team.',
            'Una cosa merece diez minutos con el equipo.')
        : (onePersonPattern
            ? T('Nothing is repeating across the team this week. One practitioner has a pattern of her own — that is a conversation with her, not a team session.',
                'Esta semana no se repite nada en todo el equipo. Una profesional tiene un patrón propio: eso es una conversación con ella, no una sesión de equipo.')
            : T('Nothing is repeating often enough this week to need a team session. Keep the practice going.',
                'Esta semana nada se repite lo suficiente para necesitar una sesión de equipo. Mantened la práctica.')),
      action: ex
        ? T(`Run “${ex.title.en}” — ${ex.minutes} minutes, before the clinic opens.`,
            `Haz «${ex.title.es}» — ${ex.minutes} minutos, antes de abrir la clínica.`)
        : (onePersonPattern
            ? T('Open the coaching view: it names who, what is repeating, and what to say to her about it.',
                'Abre la vista de formación: ahí está quién, qué se repite y qué decirle al respecto.')
            : null),
      exercise: ex ? { key: topPattern.key, title: ex.title, minutes: ex.minutes, steps: ex.steps } : null,
      // The Academy's own prescription for the same pattern, so the exercise
      // and the lesson are never two different pieces of advice.
      thenRead: topPattern ? (topPattern.coach || null) : null,
      practice
    },
    changedSinceCoaching: coachingEffects || null,
    basis: T('Every sentence here comes from recorded consultation decisions in the last seven days. Nobody is scored and no practitioner is compared with another.',
             'Cada frase de aquí proviene de decisiones de consulta registradas en los últimos siete días. Nadie recibe puntuación y no se compara a ninguna profesional con otra.')
  };
}

module.exports = { brief, EXERCISES, ENOUGH, WINDOW_DAYS };
