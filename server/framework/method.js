/**
 * THE TWO MIRROR LAYERS — RECONCILIATION
 *
 * There are two legitimate MIRROR layers in this product. They are related but
 * they are NOT the same artefact, and this file exists so that the Academy can
 * say so out loud instead of quietly collapsing one into the other.
 *
 *   LAYER 1 — The MIRROR Method (learner-facing)
 *     Source: The Beauty Sales Secrets, Noam Landman.
 *     Six steps, one per letter, taught in Chapters 8–13:
 *       M  Make Safe        (Ch. 8)
 *       I  Inquire          (Ch. 9)
 *       R  Reflect          (Ch. 10)
 *       R  Recommend        (Ch. 11)
 *       O  Overcome         (Ch. 12)
 *       R  Resolve & Rise   (Ch. 13)
 *     It is a memorable behavioural method a practitioner can hold in her head
 *     during a live consultation.
 *
 *   LAYER 2 — The MIRROR Consultation Architecture (professional)
 *     Source: MBOK v0.17, Ch. 1 § 1.16.
 *     Eight phases: Preparation, Connection, Discovery, Understanding,
 *     Education, Recommendation, Decision Support, Relationship Continuation.
 *     It is the operating system: it says where each behaviour lives across a
 *     complete consultation, what trust it forms, which duty governs it and
 *     which Toolkit records it.
 *
 * BINDING RULES FOR THIS FILE
 *   1. Do not collapse one layer into the other. Six is not eight renamed.
 *   2. Do not claim the book teaches the 8-phase architecture. It does not.
 *      The book teaches the six-step method; MBOK supplies the architecture.
 *   3. No third framework is invented here. Every row below is a JOIN between
 *      two existing source-traced tables.
 *   4. Where the architecture names a phase the book does not name as a step,
 *      say so explicitly (see ARCHITECTURE_ONLY).
 */

const B = (en, es) => ({ en, es });

// ---------------------------------------------------------------------------
// LAYER 1 — the book's six steps. Chapter numbers are the book's own.
// ---------------------------------------------------------------------------
const BOOK_METHOD = [
  {
    key: 'makeSafe', letter: 'M', chapter: 8,
    name: B('Make Safe', 'Hacer Sentir Segura'),
    promise: B('Before she can tell you the truth, she has to stop defending herself.',
               'Antes de poder decirte la verdad, ella tiene que dejar de defenderse.')
  },
  {
    key: 'inquire', letter: 'I', chapter: 9,
    name: B('Inquire', 'Indagar'),
    promise: B('Ask the question underneath the request, not the request itself.',
               'Pregunta por lo que hay debajo de la petición, no por la petición.')
  },
  {
    key: 'reflect', letter: 'R', chapter: 10,
    name: B('Reflect', 'Reflejar'),
    promise: B('Say back what she means until she corrects you or relaxes.',
               'Devuélvele lo que quiere decir hasta que te corrija o se relaje.')
  },
  {
    key: 'recommend', letter: 'R', chapter: 11,
    name: B('Recommend', 'Recomendar'),
    promise: B('One clear recommendation in her words, with its honest limits.',
               'Una recomendación clara en sus palabras, con sus límites honestos.')
  },
  {
    key: 'overcome', letter: 'O', chapter: 12,
    name: B('Overcome', 'Superar'),
    promise: B('Treat the objection as information about what is unresolved.',
               'Trata la objeción como información sobre lo que sigue sin resolver.')
  },
  {
    key: 'resolveRise', letter: 'R', chapter: 13,
    name: B('Resolve & Rise', 'Resolver y Elevar'),
    promise: B('Close the decision honestly, then keep the relationship alive after it.',
               'Cierra la decisión con honestidad y mantén viva la relación después.')
  }
];

// ---------------------------------------------------------------------------
// THE MAPPING — each letter joined to the architecture it lives inside.
// Every field is a reference into an existing source-traced table.
// ---------------------------------------------------------------------------
const METHOD_MAP = {
  makeSafe: {
    phases: ['preparation', 'connection'],
    stages: ['safety', 'attention'],
    standards: [1],
    duties: [1, 2],
    toolkits: [1],
    behaviour: B('Arrive prepared, read her entrance in the first thirty seconds, and remove the pressure she walked in expecting.',
                 'Llega preparada, lee su entrada en los primeros treinta segundos y retira la presión que ella esperaba encontrar.'),
    book: B('Ch. 7 — the three entrances and the first thirty seconds; Ch. 8 — Make Safe.',
            'Cap. 7 — las tres entradas y los primeros treinta segundos; Cap. 8 — Hacer Sentir Segura.'),
    mbok: B('MBOK Ch. 1 § 1.16 Phases 1–2; Ch. 3 Trust Stages 1–2 and Trust Standard 1; Ch. 2 Duties 1–2.',
            'MBOK Cap. 1 § 1.16 Fases 1–2; Cap. 3 Etapas de Confianza 1–2 y Estándar de Confianza 1; Cap. 2 Deberes 1–2.')
  },
  inquire: {
    phases: ['discovery'],
    stages: ['attention', 'understanding'],
    standards: [2],
    duties: [2, 4],
    toolkits: [1, 3],
    behaviour: B('Ask past the treatment request into the situation, the history and the drive underneath it — and let silence do the work.',
                 'Pregunta más allá del tratamiento pedido, hacia la situación, la historia y el motor que hay debajo — y deja que el silencio trabaje.'),
    book: B('Ch. 9 — Inquire; the Three Layers and Five Drives established in Ch. 3–4.',
            'Cap. 9 — Indagar; las Tres Capas y los Cinco Motores establecidos en los cap. 3–4.'),
    mbok: B('MBOK Ch. 1 § 1.16 Phase 3; Ch. 3 Trust Stages 2–3 and Trust Standard 2; Ch. 2 Duties 2 and 4.',
            'MBOK Cap. 1 § 1.16 Fase 3; Cap. 3 Etapas de Confianza 2–3 y Estándar de Confianza 2; Cap. 2 Deberes 2 y 4.')
  },
  reflect: {
    phases: ['understanding'],
    stages: ['understanding'],
    standards: [2, 5],
    duties: [4],
    toolkits: [3],
    behaviour: B('Consolidate what you heard, say it back in her words, and let her correct it before you recommend anything.',
                 'Consolida lo que has oído, devuélveselo con sus palabras y deja que lo corrija antes de recomendar nada.'),
    book: B('Ch. 10 — Reflect.', 'Cap. 10 — Reflejar.'),
    mbok: B('MBOK Ch. 1 § 1.16 Phase 4; Ch. 3 Trust Stage 3 and Trust Standards 2 and 5; Ch. 2 Duty 4.',
            'MBOK Cap. 1 § 1.16 Fase 4; Cap. 3 Etapa de Confianza 3 y Estándares de Confianza 2 y 5; Cap. 2 Deber 4.')
  },
  recommend: {
    phases: ['education', 'recommendation'],
    stages: ['credibility', 'alignment'],
    standards: [3, 4],
    duties: [1, 3, 4],
    toolkits: [4, 5],
    behaviour: B('Teach only what she needs to decide, then make one recommendation with its rationale, its order and its honest limits.',
                 'Enseña solo lo que necesita para decidir y haz una recomendación con su fundamento, su orden y sus límites honestos.'),
    book: B('Ch. 11 — Recommend; Ch. 14 — the price moment, for how the investment is framed.',
            'Cap. 11 — Recomendar; cap. 14 — el momento del precio, para cómo se enmarca la inversión.'),
    mbok: B('MBOK Ch. 1 § 1.16 Phases 5–6; Ch. 3 Trust Stages 4–5 and Trust Standards 3–4; Ch. 2 Duties 1, 3 and 4.',
            'MBOK Cap. 1 § 1.16 Fases 5–6; Cap. 3 Etapas de Confianza 4–5 y Estándares de Confianza 3–4; Cap. 2 Deberes 1, 3 y 4.')
  },
  overcome: {
    phases: ['decisionSupport'],
    stages: ['alignment', 'reliability'],
    standards: [4, 5],
    duties: [2, 4],
    toolkits: [5, 6],
    behaviour: B('Diagnose which of the five objections you are actually hearing before answering the words she used.',
                 'Diagnostica cuál de las cinco objeciones estás oyendo en realidad antes de responder a las palabras que usó.'),
    book: B('Ch. 12 — Overcome; Ch. 14 — the price moment, for the money objection specifically.',
            'Cap. 12 — Superar; cap. 14 — el momento del precio, para la objeción del dinero en concreto.'),
    mbok: B('MBOK Ch. 1 § 1.16 Phase 7; Ch. 3 Trust Stages 5–6 and Trust Standards 4–5; Ch. 2 Duties 2 and 4.',
            'MBOK Cap. 1 § 1.16 Fase 7; Cap. 3 Etapas de Confianza 5–6 y Estándares de Confianza 4–5; Cap. 2 Deberes 2 y 4.')
  },
  resolveRise: {
    phases: ['decisionSupport', 'continuation'],
    stages: ['reliability', 'confirmation'],
    standards: [5, 6],
    duties: [1, 2, 3, 4],
    toolkits: [8, 16, 17],
    behaviour: B('Ask for a decision without asking whether she wants one, protect the relationship whichever way it goes, and act on what you promised.',
                 'Pide una decisión sin preguntar si quiere tomarla, protege la relación decida lo que decida y cumple lo que prometiste.'),
    book: B('Ch. 13 — Resolve & Rise; Ch. 16 — the systems that make the follow-up happen without memory.',
            'Cap. 13 — Resolver y Elevar; cap. 16 — los sistemas que hacen que el seguimiento ocurra sin depender de la memoria.'),
    mbok: B('MBOK Ch. 1 § 1.16 Phases 7–8; Ch. 3 Trust Stages 6–7 and Trust Standards 5–6; Ch. 6 Relationship Continuum; Ch. 2 all four Duties.',
            'MBOK Cap. 1 § 1.16 Fases 7–8; Cap. 3 Etapas de Confianza 6–7 y Estándares de Confianza 5–6; Cap. 6 Continuo de la Relación; Cap. 2 los cuatro Deberes.')
  }
};

// ---------------------------------------------------------------------------
// HONESTY CLAUSE — where the two layers do NOT line up one-to-one.
// The book does not name these as steps. Saying otherwise would be a claim the
// book does not make.
// ---------------------------------------------------------------------------
const ARCHITECTURE_ONLY = [
  {
    phase: 'preparation',
    note: B('The book has no letter for Preparation. It treats readiness as something you do before the consultation starts — the file read as a prediction, the Reset ritual between clients — and folds it into Make Safe. The architecture promotes it to a phase of its own because it is where most of the avoidable damage is done.',
            'El libro no tiene ninguna letra para la Preparación. Trata la disposición como algo previo a la consulta —leer la ficha como una predicción, el ritual de Reinicio entre clientas— y lo integra en Hacer Sentir Segura. La arquitectura la eleva a fase propia porque es donde se causa la mayor parte del daño evitable.')
  },
  {
    phase: 'education',
    note: B('The book does not separate teaching from recommending; Ch. 11 does both inside one letter. The architecture separates them because a client can be well taught and still be badly recommended to, and the two failures need different repairs.',
            'El libro no separa enseñar de recomendar; el cap. 11 hace ambas cosas dentro de una sola letra. La arquitectura las separa porque una clienta puede estar bien informada y aun así mal recomendada, y esos dos fallos se reparan de forma distinta.')
  },
  {
    phase: 'continuation',
    note: B('Resolve & Rise carries the whole of what happens after the decision. The architecture gives Relationship Continuation its own phase, and MBOK Ch. 6 gives it states, because a relationship that continues is a different object from a decision that closed.',
            'Resolver y Elevar carga con todo lo que ocurre después de la decisión. La arquitectura da a la Continuidad de la Relación una fase propia, y el cap. 6 del MBOK le da estados, porque una relación que continúa es un objeto distinto de una decisión que se cerró.')
  }
];

// The sentence the Academy shows the learner, verbatim, in Module 1.
const RECONCILIATION_STATEMENT = B(
  'The 6-step MIRROR Method is the memorable practitioner method from The Beauty Sales Secrets. The 8-phase MIRROR Consultation Architecture is the deeper professional operating system that shows where those behaviors live across a complete consultation.',
  'El Método MIRROR de 6 pasos es el método memorable de la profesional que viene de The Beauty Sales Secrets. La Arquitectura de Consulta MIRROR de 8 fases es el sistema operativo profesional más profundo que muestra dónde viven esos comportamientos a lo largo de una consulta completa.'
);

// ---------------------------------------------------------------------------
// Resolved table for display. Joins the two canons via the canonical helpers so
// the labels can never drift from the frozen names.
// ---------------------------------------------------------------------------
function methodTable() {
  const canon = require('./canonical');
  return BOOK_METHOD.map(step => {
    const m = METHOD_MAP[step.key];
    return {
      key: step.key,
      letter: step.letter,
      chapter: step.chapter,
      name: step.name,
      promise: step.promise,
      behaviour: m.behaviour,
      phases: m.phases.map(p => ({ key: p, n: canon.getPhase(p).n, name: canon.phaseLabel(p) })),
      stages: m.stages.map(s => ({ key: s, n: canon.TRUST_STAGES[s].n, name: canon.stageName(s) })),
      standards: m.standards.map(n => ({ n, name: B(canon.TRUST_STANDARDS[n], canon.ES.standards[n]) })),
      duties: m.duties.map(n => ({ n, name: B(canon.ETHICAL_DUTIES[n], canon.ES.duties[n]) })),
      toolkits: m.toolkits.map(n => ({ n, name: canon.toolkitName(n), status: canon.TOOLKIT[n].status })),
      book: m.book,
      mbok: m.mbok
    };
  });
}

/** Every canonical phase, with the letter(s) that name it — or an honest gap. */
function phaseCoverage() {
  const canon = require('./canonical');
  return canon.PHASES.map(p => {
    const letters = BOOK_METHOD.filter(s => METHOD_MAP[s.key].phases.includes(p.key));
    const only = ARCHITECTURE_ONLY.find(a => a.phase === p.key);
    return {
      n: p.n, key: p.key, name: canon.phaseLabel(p.key),
      steps: letters.map(s => ({ letter: s.letter, name: s.name, chapter: s.chapter })),
      architectureOnly: !!only,
      note: only ? only.note : null
    };
  });
}

module.exports = {
  BOOK_METHOD, METHOD_MAP, ARCHITECTURE_ONLY, RECONCILIATION_STATEMENT,
  methodTable, phaseCoverage
};
