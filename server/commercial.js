/**
 * COMMERCIAL EXPERIENCE — the things a buyer needs that the learning product
 * itself does not provide.
 *
 * Two pieces live here:
 *
 *   firstMoment()  A clinic owner's first ten minutes. Not a tour and not an
 *                  empty dashboard: one real moment out of a real consultation,
 *                  played by her, with the real MIRROR reading of each reply and
 *                  the real movement in the client's willingness. It is built
 *                  from the shipped case engine — the same signal, the same
 *                  three options, the same feedback her practitioners will get —
 *                  so it is a sample of the product, not a mock-up of it.
 *                  Nothing is recorded: it is not a consultation, it is a taste.
 *
 *   journey()      Where a person stands in the whole arc — learning path, case
 *                  practice, field application, what the clinic keeps — and the
 *                  single next step that follows from it. A practitioner and a
 *                  manager read the same four stages, hers for herself and his
 *                  for the team, so nobody has to ask "what now".
 *
 * Every user-visible string is a T(en, es) pair and is resolved at the API
 * boundary by send(). Nothing here writes to the database.
 */

const scenarios = require('./scenario');
const feedbackEngine = require('./feedback/feedbackEngine');
const academy = require('./academy/content');

const T = (en, es) => ({ en, es });

/** The moment is always the same one, and it is always a real one. */
const MOMENT = { scenario: 'sofia-melasma', phase: 'discovery' };

/**
 * One consultation moment, fully resolved.
 *
 * Every option is played through the real engine ahead of time so the browser
 * can show the consequence the instant she chooses, without recording an
 * attempt against anybody's name.
 */
function firstMoment() {
  const sc = scenarios.get(MOMENT.scenario);
  const opening = sc.initialClientState();
  const content = sc.getPhaseContent(MOMENT.phase, opening);

  const options = content.decision.options.map(o => {
    // resolveChoice applies the consequence to the state it is handed, so each
    // reply is played against her own opening state and never against the
    // wreckage of the reply before it.
    const state = sc.initialClientState();
    const before = { posture: state.posture, willingness: state.willingness };
    const resolved = sc.resolveChoice(MOMENT.phase, o.id, state);
    const fb = feedbackEngine.generateFeedback(MOMENT.phase, resolved, state);
    const c = resolved.consequence;
    const oc = fb.observableConsequence || {};
    return {
      id: o.id,
      label: o.label,
      language: o.language,
      alignment: fb.alignmentVerdict,
      reading: {
        signal: fb.signalDetected,
        interpretation: fb.mirrorInterpretation,
        principle: fb.canonicalPrinciple,
        did: fb.learnerDid,
        why: fb.alignmentReason,
        consequence: oc.narrative || null,
        next: fb.nextPracticePriority
      },
      movement: {
        willingnessBefore: c.willingnessBefore,
        willingnessAfter: c.willingnessAfter,
        postureBefore: before.posture,
        postureAfter: c.posture,
        trustDelta: c.trustDelta || {},
        revealed: c.newlyRevealed || [],
        stillWithheld: c.stillWithheld || []
      }
    };
  });

  return {
    kind: 'first_moment',
    minutes: 3,
    frame: {
      kicker: T('Ninety seconds inside the room',
                'Noventa segundos dentro de la sala'),
      title: T('Before you ask anyone on your team to do this, do it once yourself.',
               'Antes de pedirle esto a nadie de tu equipo, hazlo tú una vez.'),
      lead: T('This is one real moment out of one of the nine consultations in the programme — the same client, the same three replies, the same reading your practitioners will get. Read what she says, choose the reply you would actually give, and watch what it does to her.',
              'Este es un momento real de una de las nueve consultas del programa: la misma clienta, las mismas tres respuestas y la misma lectura que recibirán tus profesionales. Lee lo que dice, elige la respuesta que darías de verdad y observa qué le ocurre a ella.'),
      note: T('Nothing here is recorded and nothing is scored. It is yours to try.',
              'Nada de esto queda registrado ni se puntúa. Es para que lo pruebes.')
    },
    client: {
      name: sc.profile.name,
      age: sc.profile.age,
      presenting: sc.profile.presenting,
      caseTitle: sc.title,
      scenario: sc.id
    },
    phase: { n: 3, key: MOMENT.phase, name: T('Discovery', 'Descubrimiento'),
             objective: T('Understand situation and motivation.',
                          'Comprender la situación y la motivación.') },
    setting: T('She has been in the room four minutes. You have asked how long she has had it. This is her answer.',
               'Lleva cuatro minutos en la sala. Le has preguntado desde cuándo lo tiene. Esta es su respuesta.'),
    signal: content.clientSignal,
    prompt: content.decision.prompt,
    options,
    // What she should take away, whichever reply she chose.
    close: {
      title: T('That is the whole product, in miniature.',
               'Eso es el producto entero, en miniatura.'),
      points: [
        T('Your practitioner makes a choice like that eight times in one consultation, and the client carries every one of them forward.',
          'Tu profesional toma una decisión como esa ocho veces en una consulta, y la clienta se lleva todas ellas consigo.'),
        T('Each choice is read against the MIRROR method and the eight-phase architecture, and the reading names the principle, not an opinion.',
          'Cada decisión se lee según el método MIRROR y la arquitectura de ocho fases, y la lectura nombra el principio, no una opinión.'),
        T('You see every one of them afterwards: what she chose, what it cost, and what to say to her about it on Monday.',
          'Tú las ves todas después: qué eligió, qué le costó y qué decirle el lunes al respecto.')
      ]
    }
  };
}

// ---------------------------------------------------------------------------
// THE ARC
// ---------------------------------------------------------------------------

const STAGE_COPY = {
  learn: {
    title: T('Learning path', 'Ruta de aprendizaje'),
    caption: T('Interactive lessons, in order, each one ending in something you do.',
               'Lecciones interactivas, en orden, cada una termina en algo que haces.')
  },
  practise: {
    title: T('Case practice', 'Práctica con casos'),
    caption: T('Full consultations with a client who reacts to what you actually say.',
               'Consultas completas con una clienta que reacciona a lo que dices de verdad.')
  },
  apply: {
    title: T('Field application', 'Aplicación en la clínica'),
    caption: T('One assignment per module, carried into a real room and written up afterwards.',
               'Una tarea por módulo, llevada a una sala real y anotada después.')
  },
  keep: {
    title: T('What you keep', 'Lo que te queda'),
    caption: T('The documents you wrote, the consultations you recorded, the passages you were taught from.',
               'Los documentos que escribiste, las consultas que registraste y los pasajes con los que aprendiste.')
  }
};

const stage = (key, done, total, state, detail) => ({
  key, n: ['learn', 'practise', 'apply', 'keep'].indexOf(key) + 1,
  title: STAGE_COPY[key].title, caption: STAGE_COPY[key].caption,
  done, total, state, detail: detail || null
});

/** The first lesson she has not finished, across the modules that are built. */
function nextLessonFor(doneIds) {
  for (const m of academy.curriculum()) {
    if (m.status !== 'available') continue;
    for (const l of m.lessons) {
      if (!doneIds.has(l.id)) return { module: m, lesson: l };
    }
  }
  return null;
}

/**
 * A practitioner's own arc. `progressRows`, `attempts` and `reflections` are the
 * rows the database already holds for her; nothing is recomputed from scratch.
 */
function practitionerJourney({ progressRows, attempts, reflections, materials }) {
  const doneIds = new Set(progressRows.filter(r => r.status === 'complete').map(r => r.lesson_id));
  const builtLessons = academy.curriculum()
    .filter(m => m.status === 'available')
    .reduce((s, m) => s + m.lessons.length, 0);

  const completedConsults = attempts.filter(a => a.status === 'completed');
  const openConsults = attempts.filter(a => a.status === 'in_progress' && a.decisions.length);
  const answered = reflections.filter(r => r.status === 'answered');
  const openAssignments = reflections.filter(r => r.status !== 'answered');

  const nl = nextLessonFor(doneIds);
  const kept = materials || 0;

  // The one thing to do next. Read in the order the programme is meant to be
  // walked: finish what is open before starting what is not.
  let next;
  if (openConsults.length) {
    const a = openConsults[0];
    next = {
      kind: 'case', scenarioId: a.scenario, attemptId: a.id,
      label: T('Continue this consultation', 'Continuar esta consulta'),
      title: scenarios.get(a.scenario).title,
      why: T('You left this client mid-consultation. She is still in the room.',
             'Dejaste a esta clienta a mitad de consulta. Sigue en la sala.')
    };
  } else if (openAssignments.length) {
    next = {
      kind: 'journal', reflectionId: openAssignments[0].id,
      label: T('Write up what happened', 'Escribe qué pasó'),
      title: T('Your field assignment is waiting', 'Tienes una tarea de clínica pendiente'),
      why: T('A module is finished. What it asked you to try in a real room is still unanswered.',
             'Has terminado un módulo. Lo que te pidió probar en una sala real sigue sin respuesta.')
    };
  } else if (nl) {
    next = {
      kind: 'lesson', moduleId: nl.module.id, lessonId: nl.lesson.id,
      label: T('Open this lesson', 'Abrir esta lección'),
      title: nl.lesson.title,
      why: nl.lesson.objective
    };
  } else if (!completedConsults.length) {
    const first = scenarios.list()[0];
    next = {
      kind: 'case', scenarioId: first.id,
      label: T('Start your first consultation', 'Empieza tu primera consulta'),
      title: first.title,
      why: T('The lessons are done. The next thing is a client who answers back.',
             'Las lecciones están hechas. Lo siguiente es una clienta que te responde.')
    };
  } else {
    const list = scenarios.list();
    const doneScenarios = new Set(completedConsults.map(a => a.scenario));
    const fresh = list.find(c => !doneScenarios.has(c.id)) || list[0];
    next = {
      kind: 'case', scenarioId: fresh.id,
      label: T('Take the next client', 'Atiende a la siguiente clienta'),
      title: fresh.title,
      why: T('A different client, difficult in a different way.',
             'Otra clienta, difícil de otra manera.')
    };
  }

  const stages = [
    stage('learn', doneIds.size, builtLessons,
      doneIds.size >= builtLessons && builtLessons ? 'done' : (next.kind === 'lesson' ? 'now' : (doneIds.size ? 'open' : 'now'))),
    stage('practise', completedConsults.length, scenarios.list().length,
      completedConsults.length >= scenarios.list().length ? 'done'
        : (next.kind === 'case' ? 'now' : (completedConsults.length || openConsults.length ? 'open' : 'ahead'))),
    stage('apply', answered.length, answered.length + openAssignments.length,
      openAssignments.length ? (next.kind === 'journal' ? 'now' : 'open')
        : (answered.length ? 'done' : 'ahead')),
    // What she keeps has no denominator: it only ever grows.
    stage('keep', kept, null, kept ? 'open' : 'ahead')
  ];

  return {
    role: 'practitioner',
    stages,
    next,
    totals: {
      lessons: doneIds.size, lessonsAvailable: builtLessons,
      consultations: attempts.length, consultationsCompleted: completedConsults.length,
      assignmentsOpen: openAssignments.length, assignmentsAnswered: answered.length,
      materials: kept
    }
  };
}

/**
 * The same four stages, read across a clinic. The manager's next step is never
 * "wait for data": it is the thing she can do today that makes the data exist.
 */
function clinicJourney({ practitioners, progressRows, attempts, reflections, seats, invitesOpen, momentSeen }) {
  const doneLessons = progressRows.filter(r => r.status === 'complete').length;
  const completedConsults = attempts.filter(a => a.status === 'completed');
  const realConsults = attempts.filter(a => a.decisions && a.decisions.length);
  const answered = reflections.filter(r => r.status === 'answered');
  const practising = new Set(progressRows.map(r => r.user_id)
    .concat(realConsults.map(a => a.practitionerId))).size;

  const materials = completedConsults.length + answered.length;

  let next;
  if (!momentSeen) {
    next = {
      kind: 'moment',
      label: T('Walk one consultation moment', 'Recorre un momento de consulta'),
      title: T('Three minutes, and you will know what you are buying',
               'Tres minutos y sabrás qué estás comprando'),
      why: T('Do once, yourself, what you are about to ask your team to do.',
             'Haz tú una vez lo que vas a pedirle a tu equipo.')
    };
  } else if (!practitioners.length) {
    next = {
      kind: 'invite',
      label: T('Add your first practitioner', 'Añade a tu primera profesional'),
      title: T('Bring your team in', 'Trae a tu equipo'),
      why: T('You have ' + seats.total + ' places. Each one is a link you send yourself — there is nothing to install and no password for you to invent.',
             'Tienes ' + seats.total + ' plazas. Cada una es un enlace que envías tú; no hay nada que instalar ni contraseñas que inventar.')
    };
  } else if (invitesOpen) {
    next = {
      kind: 'invite',
      label: T('See who has not joined yet', 'Mira quién no ha entrado todavía'),
      title: T('Invitations still open', 'Invitaciones pendientes'),
      why: T('An invitation stays open for fourteen days. A link can be sent again at any time.',
             'Una invitación sigue abierta catorce días. Un enlace se puede reenviar en cualquier momento.')
    };
  } else if (!realConsults.length) {
    next = {
      kind: 'curriculum',
      label: T('See what your team is working through', 'Mira lo que está trabajando tu equipo'),
      title: T('The learning path they are on', 'La ruta que están haciendo'),
      why: T('Your team is in. The first recorded consultation is what turns this page into coaching.',
             'Tu equipo ya está dentro. La primera consulta registrada es lo que convierte esta página en coaching.')
    };
  } else {
    next = {
      kind: 'coach',
      label: T('Read this week\'s coaching', 'Lee el coaching de esta semana'),
      title: T('There are recorded consultations to read', 'Hay consultas registradas para leer'),
      why: T('Every sentence names the consultation it came from, so you can open it and see the choice for yourself.',
             'Cada frase nombra la consulta de la que sale, así puedes abrirla y ver la decisión tú misma.')
    };
  }

  const stages = [
    stage('learn', doneLessons, null, doneLessons ? 'open' : (practitioners.length ? 'now' : 'ahead'),
      practitioners.length
        ? T(practising + ' of ' + practitioners.length + ' practising',
            practising + ' de ' + practitioners.length + ' practicando')
        : null),
    stage('practise', completedConsults.length, null,
      completedConsults.length ? 'open' : (doneLessons ? 'now' : 'ahead')),
    stage('apply', answered.length, null, answered.length ? 'open' : 'ahead'),
    stage('keep', materials, null, materials ? 'open' : 'ahead')
  ];

  return {
    role: 'manager',
    stages,
    next,
    team: {
      practitioners: practitioners.length,
      practising,
      seatsTotal: seats.total,
      seatsUsed: seats.used,
      invitesOpen
    },
    totals: {
      lessons: doneLessons,
      consultations: realConsults.length,
      consultationsCompleted: completedConsults.length,
      assignmentsAnswered: answered.length,
      materials
    }
  };
}

/**
 * The message a manager sends a practitioner. The product cannot send email, so
 * the handover artefact has to be good enough that she sends it herself in one
 * paste — addressed to the person, in her own language, with nothing in it that
 * reads as machinery.
 */
function handoverMessage({ name, clinicName, managerName, link }) {
  const first = String(name || '').trim().split(/\s+/)[0] || '';
  const clinic = clinicName || '';
  const from = managerName ? `\n\n${managerName}` : '';
  return T(
`Hi ${first},

${clinic} has opened your place in the MIRROR Academy — the consultation training we are doing together as a team.

Open this link and choose your own password. It takes a minute, and it puts you straight into your first lesson:

${link}

The link is yours alone and stays open for fourteen days. Nobody else sees the password you choose, including me.${from}`,
`Hola ${first}:

En ${clinic} ya tienes tu plaza en la Academia MIRROR, la formación de consulta que vamos a hacer todo el equipo.

Abre este enlace y elige tu propia contraseña. Es cosa de un minuto y entras directamente en tu primera lección:

${link}

El enlace es solo para ti y estará disponible catorce días. Nadie más ve la contraseña que elijas, yo tampoco.${from}`
  );
}

module.exports = { firstMoment, practitionerJourney, clinicJourney, handoverMessage, MOMENT };
