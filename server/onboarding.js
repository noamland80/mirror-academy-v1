/**
 * ONBOARDING — seven questions, then a consultation she recognises.
 *
 * THE FAILURE THIS REPLACES. A practitioner activates her account and lands on
 * ten modules and sixty lessons. Nothing there is wrong, and nothing there is
 * hers. She reads "Module 1 — Lesson 1", decides she will come back when she
 * has an hour, and does not come back.
 *
 * So activation ends in a case, not a curriculum, and the case is chosen by
 * what she just told us. The Academy exists underneath; the experience leads.
 *
 * WHAT IS ASKED, AND WHY EACH ONE EARNS ITS PLACE. Seven questions, none of
 * them demographic curiosity, every one of them used:
 *
 *   name          she is greeted by it, every session
 *   role          a manager and a practitioner get different products
 *   experience    changes which case she is sent to first, not the content
 *   clinic        already known from the purchase for a manager; confirmed
 *   categories    what she actually consults on, so the teaching names
 *                 treatments she sells rather than treatments she does not
 *   hardest       the situation she loses — this picks her first case
 *   goal          what she came for, repeated back to her later
 *
 * WHAT IS NOT ASKED. Nothing about targets, conversion, revenue per
 * consultation or how she is doing. A product that opens by asking a
 * practitioner to self-report her sales performance has told her what it is
 * for, and it is not her.
 *
 * WHAT IS NEVER CONCLUDED. Her answers are her account's preferences, not
 * evidence. "You told us price is difficult" is a quotation. "You are weak at
 * price" is a finding, and there is no data behind it on day one. Every string
 * this module produces about her says what she said or what she has done —
 * never what it implies about her.
 */
const T = (en, es) => ({ en, es });

/**
 * The difficult-situation options. These are the situations clinics actually
 * lose money on, in the client's words rather than in a category name, and
 * each is mapped to the shipped case that puts a practitioner inside it.
 *
 * `scenario` must name a case that exists; `verify-onboarding.js` checks it.
 */
const HARD_SITUATIONS = [
  {
    key: 'think_about_it',
    said: T('“I need to think about it.”', '«Me lo tengo que pensar.»'),
    why: T('You cannot tell whether to keep talking or stop.',
           'No sabes si seguir hablando o parar.'),
    scenario: 'carmen-injectables'
  },
  {
    key: 'too_expensive',
    said: T('“It’s too expensive.”', '«Es demasiado caro.»'),
    why: T('The price conversation arrives before you are ready for it.',
           'La conversación de precio llega antes de que estés lista para ella.'),
    scenario: 'sofia-melasma'
  },
  {
    key: 'cheaper_elsewhere',
    said: T('“I saw it cheaper somewhere else.”', '«Lo he visto más barato en otro sitio.»'),
    why: T('You end up defending your price instead of her outcome.',
           'Acabas defendiendo tu precio en lugar de su resultado.'),
    scenario: 'sofia-melasma'
  },
  {
    key: 'ask_partner',
    said: T('“I need to ask my husband.”', '«Se lo tengo que preguntar a mi marido.»'),
    why: T('Someone who is not in the room is going to decide.',
           'Va a decidir alguien que no está en la sala.'),
    scenario: 'carmen-injectables'
  },
  {
    key: 'unnatural',
    said: T('“I’m afraid it will look unnatural.”', '«Me da miedo que quede poco natural.»'),
    why: T('Reassurance makes it worse and you can feel it happening.',
           'Tranquilizarla lo empeora y lo notas mientras ocurre.'),
    scenario: 'carmen-injectables'
  },
  {
    key: 'bad_experience',
    said: T('“I had a bad experience before.”', '«Tuve una mala experiencia antes.»'),
    why: T('She is comparing you to someone who let her down.',
           'Te está comparando con alguien que le falló.'),
    scenario: 'teresa-repair'
  },
  {
    key: 'only_information',
    said: T('“I only came for information.”', '«Solo venía a informarme.»'),
    why: T('You do not know whether that is true.',
           'No sabes si eso es verdad.'),
    scenario: 'carmen-injectables'
  },
  {
    key: 'discount',
    said: T('“Can you give me a discount?”', '«¿Me puedes hacer un descuento?»'),
    why: T('Saying no feels like losing her; saying yes feels like losing anyway.',
           'Decir no parece perderla; decir sí parece perder igual.'),
    scenario: 'sofia-melasma'
  },
  {
    key: 'cheapest_option',
    said: T('“I want the cheapest option.”', '«Quiero la opción más barata.»'),
    why: T('The cheapest thing will not do what she wants.',
           'Lo más barato no va a hacer lo que ella quiere.'),
    scenario: 'beatriz-programme'
  },
  {
    key: 'why_sessions',
    said: T('“Why do I need several sessions?”', '«¿Por qué necesito varias sesiones?»'),
    why: T('It sounds to her like the price going up.',
           'A ella le suena a que el precio sube.'),
    scenario: 'beatriz-programme'
  },
  {
    key: 'ill_call_you',
    said: T('“I’ll call you.”', '«Ya te llamo.»'),
    why: T('She never calls, and you never knew why.',
           'Nunca llama, y nunca supiste por qué.'),
    scenario: 'carmen-injectables'
  }
];

/** What she wants out of MIRROR. Repeated back to her, never scored. */
const GOALS = [
  { key: 'stop_losing', label: T('Stop losing consultations I should not be losing',
                                 'Dejar de perder consultas que no debería perder') },
  { key: 'less_pushy', label: T('Sell better without becoming pushy',
                                'Vender mejor sin volverme insistente') },
  { key: 'price_confidence', label: T('Hold my price without getting defensive',
                                      'Mantener mi precio sin ponerme a la defensiva') },
  { key: 'understand_client', label: T('Understand what the client is actually asking for',
                                       'Entender qué está pidiendo la clienta de verdad') },
  { key: 'consistency', label: T('Do it the same good way every time',
                                 'Hacerlo igual de bien todas las veces') },
  { key: 'coach_team', label: T('Coach my team on it', 'Formar a mi equipo en esto') }
];

/** Treatment families a clinic consults on. Drawn from the shipped curriculum. */
const CATEGORIES = [
  { key: 'injectables', label: T('Injectables', 'Inyectables') },
  { key: 'skin', label: T('Skin and pigmentation', 'Piel y pigmentación') },
  { key: 'laser', label: T('Laser and light', 'Láser y luz') },
  { key: 'body', label: T('Body and contouring', 'Cuerpo y contorno') },
  { key: 'hair', label: T('Hair', 'Cabello') },
  { key: 'facials', label: T('Facials and maintenance', 'Faciales y mantenimiento') },
  { key: 'programmes', label: T('Multi-session programmes', 'Programas de varias sesiones') },
  { key: 'wellness', label: T('Wellness and recovery', 'Bienestar y recuperación') }
];

const EXPERIENCE = [
  { key: 'new', label: T('Less than a year', 'Menos de un año') },
  { key: 'some', label: T('One to three years', 'De uno a tres años') },
  { key: 'experienced', label: T('Three to ten years', 'De tres a diez años') },
  { key: 'veteran', label: T('More than ten years', 'Más de diez años') }
];

async function migrate(db) {
  await db.run(`CREATE TABLE IF NOT EXISTS onboarding (
    user_id TEXT PRIMARY KEY,
    role TEXT NOT NULL,
    experience TEXT,
    categories TEXT NOT NULL DEFAULT '[]',
    hardest TEXT,
    goal TEXT,
    completed_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  )`);
}

const keysOf = list => list.map(x => x.key);

/**
 * Store what she said. Anything unrecognised is dropped rather than stored:
 * a value that is not in the list cannot be used to choose a case, so keeping
 * it would only mean a later lookup silently finding nothing.
 */
async function save(db, user, answers = {}) {
  const cats = Array.isArray(answers.categories) ? answers.categories : [];
  const clean = {
    experience: keysOf(EXPERIENCE).includes(answers.experience) ? answers.experience : null,
    categories: cats.filter(c => keysOf(CATEGORIES).includes(c)).slice(0, 8),
    hardest: keysOf(HARD_SITUATIONS).includes(answers.hardest) ? answers.hardest : null,
    goal: keysOf(GOALS).includes(answers.goal) ? answers.goal : null
  };
  const now = new Date().toISOString();
  await db.run(
    `INSERT INTO onboarding (user_id,role,experience,categories,hardest,goal,completed_at,updated_at)
     VALUES (?,?,?,?,?,?,?,?)
     ON CONFLICT(user_id) DO UPDATE SET
       experience=excluded.experience, categories=excluded.categories,
       hardest=excluded.hardest, goal=excluded.goal, updated_at=excluded.updated_at`,
    [user.id, user.role, clean.experience, JSON.stringify(clean.categories),
     clean.hardest, clean.goal, now, now]);
  return clean;
}

async function get(db, userId) {
  const r = await db.get(`SELECT * FROM onboarding WHERE user_id = ?`, [userId]);
  if (!r) return null;
  return {
    role: r.role,
    experience: r.experience,
    categories: safeParse(r.categories, []),
    hardest: r.hardest,
    goal: r.goal,
    completedAt: r.completed_at
  };
}

function safeParse(s, fallback) { try { return JSON.parse(s); } catch (e) { return fallback; } }

/** The questions, as the browser needs them. */
function questions(role) {
  return {
    role,
    experience: { key: 'experience',
      ask: T('How long have you been running consultations?',
             '¿Cuánto tiempo llevas haciendo consultas?'),
      options: EXPERIENCE },
    categories: { key: 'categories',
      ask: T('What do you consult on most?', '¿Sobre qué consultas más?'),
      note: T('Pick as many as apply. It changes which treatments the teaching names.',
              'Elige todas las que correspondan. Cambia qué tratamientos nombra la formación.'),
      options: CATEGORIES },
    hardest: { key: 'hardest',
      ask: role === 'manager'
        ? T('Which of these does your team lose most often?',
            '¿Cuál de estas pierde tu equipo más a menudo?')
        : T('Which of these is hardest for you?', '¿Cuál de estas te cuesta más?'),
      note: T('Her words, not a category. This picks where you start.',
              'Sus palabras, no una categoría. Esto decide por dónde empiezas.'),
      options: HARD_SITUATIONS.map(h => ({ key: h.key, label: h.said, why: h.why })) },
    goal: { key: 'goal',
      ask: T('What do you want out of this?', '¿Qué quieres conseguir con esto?'),
      options: GOALS }
  };
}

/**
 * HER FIRST WIN.
 *
 * Greeting, her own words quoted back, and the one case that puts her inside
 * the situation she just named. Nothing is concluded about her and nothing is
 * scored; the only claim made is what she said and what she has done.
 */
function firstWin({ user, profile, scenarioTitle }) {
  const hard = HARD_SITUATIONS.find(h => h.key === (profile && profile.hardest)) || null;
  const goal = GOALS.find(g => g.key === (profile && profile.goal)) || null;
  const first = (user.name || '').trim().split(/\s+/)[0] || '';

  // The owner's example was Spanish — "Hola Elena." — and it was written into
  // both halves of the pair, which put a Spanish greeting at the top of the
  // English product. The warmth was the point, not the language.
  const greeting = T(`Hello ${first}.`, `Hola ${first}.`);

  // Two shapes: one for a practitioner who named a situation, one for a
  // practitioner who skipped the question. Neither invents a diagnosis.
  // Her own words AND her own reason. The first draft of this appended one
  // fixed clause — "you find it hard to know whether to keep talking or stop" —
  // to whichever situation she chose, so a practitioner who picked "it's too
  // expensive" was told she had said something she never said. Each situation
  // carries its own `why`; that is the half of the sentence that is hers.
  const said = hard
    ? T(`You said that when a client says ${plain(hard.said.en)}, ${lower(hard.why.en)}`,
        `Dijiste que cuando una clienta dice ${plain(hard.said.es)}, ${lower(hard.why.es)}`)
    : T('You have not told us which situation is hardest yet, so this is the consultation most practitioners meet first.',
        'Todavía no nos has dicho qué situación te cuesta más, así que esta es la consulta que la mayoría se encuentra primero.');

  const bridge = hard
    ? T('Today you are going to practise exactly that.', 'Hoy vas a practicar exactamente eso.')
    : T('Start here.', 'Empieza por aquí.');

  const isManager = user.role === 'manager';

  return {
    kind: 'first_win',
    // A manager cannot own an attempt — recording a consultation is a
    // practitioner act — so hers points at the one moment the product does
    // hand her directly, and her team's practice is what she assigns next.
    role: user.role,
    forManager: isManager,
    greeting,
    said: hard ? said : said,
    bridge,
    meet: T('Meet Carmen.', 'Conoce a Carmen.'),
    // What the button does. A practitioner starts the case; a manager plays the
    // one consultation moment the product gives her, then assigns the case.
    opens: isManager ? 'first_moment' : 'case',
    scenario: hard ? hard.scenario : 'carmen-injectables',
    scenarioTitle: scenarioTitle || null,
    // What she came for, said back to her once, in her own chosen words.
    goal: goal ? goal.label : null,
    // Deliberately no estimate of how long anything takes and no count of what
    // remains: "sixty lessons to finish" is the feeling this page exists to
    // avoid.
    note: isManager
      ? T('Nothing here is a test. Walk one moment yourself before you ask anything of your team — then send them the same case.',
          'Aquí nada es un examen. Recorre tú un momento antes de pedirle nada a tu equipo, y después envíales el mismo caso.')
      : T('Nothing here is a test. You will see what your reply did to her, and why.',
          'Aquí nada es un examen. Verás qué le hizo tu respuesta y por qué.')
  };
}

/**
 * The quotation as written, minus its trailing full stop so it can sit inside
 * a longer sentence.
 *
 * It used to rewrite the quote marks to the English pair, which replaced the
 * Spanish «…» with “…” in the middle of a Spanish sentence — a small thing
 * that makes a page read as translated rather than written.
 */
// Only a full stop is dropped. A question mark is part of what she said, and
// in Spanish removing it leaves the opening ¿ unbalanced — "«¿Por qué necesito
// varias sesiones»" was the result of stripping it.
const plain = s => String(s).trim().replace(/\.\s*([”"»])$/, '$1');

/**
 * Her reason, joined into the middle of a sentence rather than starting one.
 * "I" and "MIRROR" keep their capitals; everything else, including "You",
 * becomes lower case because it is now a clause and not a sentence.
 */
const lower = s => {
  const t = String(s).trim();
  return /^(I|MIRROR)\b/.test(t) ? t : t.charAt(0).toLowerCase() + t.slice(1);
};

module.exports = {
  HARD_SITUATIONS, GOALS, CATEGORIES, EXPERIENCE,
  migrate, save, get, questions, firstWin
};
