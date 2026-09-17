/**
 * MIRROR ACADEMY — scenario registry.
 *
 * Each case exposes the same surface as the canonical Sofia scenario:
 *   profile, intake, phases, initialClientState, getPhaseContent,
 *   resolveChoice, gateFor, applyEffects
 *
 * Bilingual cases store client-facing strings as {en, es}; localize() resolves
 * them at the API boundary. Plain strings pass through untouched, so the
 * canonical Sofia case (EN) runs unchanged.
 */

const sofia = require('./sofiaScenario');
const carmen = require('./carmenScenario');
const beatriz = require('./beatrizScenario');
const isabel = require('./isabelScenario');
const lucia  = require('./lucyScenario');
const nuria  = require('./nuriaScenario');
const teresa = require('./teresaScenario');
const pilar  = require('./pilarScenario');
const marta  = require('./martaScenario');

/**
 * Every case exposes the identical surface, so the registry entry is a
 * mechanical wrapping. Written once rather than nine times.
 */
const entry = (id, n, mod, title, subtitle) => ({
  id, caseNumber: n, title, subtitle,
  languages: ['en', 'es'],
  languageNote: { en: null, es: null },
  voice: mod.voice, caseFacts: mod.caseFacts, followUpPack: mod.followUpPack,
  profile: mod.profile, intake: mod.intake, phases: mod.phases,
  initialClientState: mod.initialClientState,
  getPhaseContent: mod.getPhaseContent,
  resolveChoice: mod.resolveChoice,
  gateFor: mod.gateFor,
  applyEffects: mod.applyEffects
});

const REGISTRY = {
  'sofia-melasma': {
    id: 'sofia-melasma',
    caseNumber: 1,
    title: { en: 'Case 01 — Sofia', es: 'Caso 01 — Sofia' },
    subtitle: {
      en: 'Melasma, a frightened friend, and a motive she plans to keep private',
      es: 'Melasma, una amiga con una mala experiencia y un motivo que piensa callar'
    },
    languages: ['en', 'es'],
    languageNote: { en: null, es: null },
    voice: sofia.voice,
    caseFacts: sofia.caseFacts,
    followUpPack: sofia.followUpPack,
    profile: sofia.sofiaProfile,
    intake: sofia.intakeBrief,
    phases: sofia.phases,
    initialClientState: sofia.initialClientState,
    getPhaseContent: sofia.getPhaseContent,
    resolveChoice: sofia.resolveChoice,
    gateFor: sofia.gateFor,
    applyEffects: sofia.applyEffects
  },
  'carmen-injectables': {
    id: 'carmen-injectables',
    caseNumber: 2,
    title: { en: 'Case 02 — Carmen', es: 'Caso 02 — Carmen' },
    subtitle: {
      en: 'Injectables, identity fear — "I don\'t want to stop looking like myself"',
      es: 'Inyectables, miedo a la identidad — «No quiero dejar de parecerme a mí misma»'
    },
    languages: ['en', 'es'],
    languageNote: { en: null, es: null },
    voice: carmen.voice,
    caseFacts: carmen.caseFacts,
    followUpPack: carmen.followUpPack,
    profile: carmen.profile,
    intake: carmen.intake,
    phases: carmen.phases,
    initialClientState: carmen.initialClientState,
    getPhaseContent: carmen.getPhaseContent,
    resolveChoice: carmen.resolveChoice,
    gateFor: carmen.gateFor,
    applyEffects: carmen.applyEffects
  }
  ,
  'beatriz-programme': {
    id: 'beatriz-programme',
    caseNumber: 3,
    title: { en: 'Case 03 — Beatriz', es: 'Caso 03 — Beatriz' },
    subtitle: {
      en: 'A high-value programme, two years of saving, and a client who agrees with everything',
      es: 'Un programa de alto valor, dos años ahorrando y una clienta que está de acuerdo con todo'
    },
    languages: ['en', 'es'],
    languageNote: { en: null, es: null },
    voice: beatriz.voice,
    caseFacts: beatriz.caseFacts,
    followUpPack: beatriz.followUpPack,
    profile: beatriz.profile,
    intake: beatriz.intake,
    phases: beatriz.phases,
    initialClientState: beatriz.initialClientState,
    getPhaseContent: beatriz.getPhaseContent,
    resolveChoice: beatriz.resolveChoice,
    gateFor: beatriz.gateFor,
    applyEffects: beatriz.applyEffects
  },

  'isabel-fullface': entry('isabel-fullface', 4, isabel,
    { en: 'Case 04 — Isabel', es: 'Caso 04 — Isabel' },
    { en: 'A four-figure plan, three clinics visited, and a client who negotiates for a living',
      es: 'Un plan de cuatro cifras, tres clínicas visitadas y una clienta que negocia para ganarse la vida' }),

  'lucia-body': entry('lucia-body', 5, lucia,
    { en: 'Case 05 — Lucía', es: 'Caso 05 — Lucía' },
    { en: 'A body concern she apologises for, and an expectation no device can meet',
      es: 'Una preocupación corporal por la que se disculpa y una expectativa que ningún equipo puede cumplir' }),

  'nuria-undecided': entry('nuria-undecided', 6, nuria,
    { en: 'Case 06 — Nuria', es: 'Caso 06 — Nuria' },
    { en: 'Warm, open, and genuinely undecided — the consultation where DEFER is the right answer',
      es: 'Cercana, abierta y realmente indecisa: la consulta donde APLAZAR es la respuesta correcta' }),

  'teresa-repair': entry('teresa-repair', 7, teresa,
    { en: 'Case 07 — Teresa', es: 'Caso 07 — Teresa' },
    { en: 'A result that went wrong elsewhere, a folder of photographs, and two ways to lose her',
      es: 'Un resultado que salió mal en otra clínica, una carpeta de fotos y dos formas de perderla' }),

  'pilar-thirdparty': entry('pilar-thirdparty', 8, pilar,
    { en: 'Case 08 — Pilar', es: 'Caso 08 — Pilar' },
    { en: 'A husband who is not in the room, and the objection hiding behind him',
      es: 'Un marido que no está en la sala y la objeción que se esconde detrás de él' }),

  'marta-returning': entry('marta-returning', 9, marta,
    { en: 'Case 09 — Marta', es: 'Caso 09 — Marta' },
    { en: 'Two years a client, the highest opening willingness of any case — and that is the trap',
      es: 'Dos años de clienta, la mayor disposición inicial de todos los casos, y ahí está la trampa' })
};

function get(id) {
  return REGISTRY[id] || REGISTRY['sofia-melasma'];
}

function list() {
  return Object.values(REGISTRY).map(s => ({
    id: s.id, caseNumber: s.caseNumber, title: s.title, subtitle: s.subtitle,
    languages: s.languages, languageNote: s.languageNote, profile: s.profile
  }));
}

/** Deep-localize: replace every {en, es} leaf with the requested language. */
function localize(value, lang) {
  const L = lang === 'es' ? 'es' : 'en';
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return value.map(v => localize(v, L));
  if (typeof value === 'object') {
    const keys = Object.keys(value);
    if (keys.length && keys.every(k => k === 'en' || k === 'es')) {
      return value[L] !== undefined ? value[L] : value.en;
    }
    const out = {};
    for (const k of keys) out[k] = localize(value[k], L);
    return out;
  }
  return value;
}

module.exports = { get, list, localize, REGISTRY };
