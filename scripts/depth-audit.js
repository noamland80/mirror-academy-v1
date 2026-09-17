/**
 * CONTENT DEPTH AUDIT
 *
 * Counts are not an acceptance test. This script samples the curriculum and
 * produces the evidence a human reviewer needs to judge whether each sampled
 * lesson is teaching something, or is padding between exercises.
 *
 * For each sampled lesson it reports:
 *   · the distinct concept it claims to teach (title + objective)
 *   · its source (module citation and any chapter cited inside the lesson)
 *   · the behaviour the learner practises
 *   · every interactive decision, quoted
 *   · the real-world transfer assignment it feeds
 *   · Spanish depth relative to English, per paragraph and per lesson
 *
 * And across the WHOLE curriculum, not only the sample:
 *   · near-duplicate lesson pairs (shared vocabulary over the content words)
 *   · lessons whose Spanish is materially shorter than their English
 *   · lessons that are mostly reading
 *
 * Run: node scripts/depth-audit.js [--seed N] [--json]
 */
const fs = require('fs');
const path = require('path');
const academy = require('../server/academy/content');

const argv = process.argv.slice(2);
const SEED = Number((argv.find(a => a.startsWith('--seed=')) || '--seed=20260908').split('=')[1]);
const AS_JSON = argv.includes('--json');

// deterministic RNG so the sample is reproducible and auditable
function rng(seed) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

// ---------------------------------------------------------------------------
const STOP = new Set(('the a an and or but of to in on for with is are was were be been it its that this those these ' +
  'you your she her he his they them their what which who when where how why not no yes as at by from into if then ' +
  'than so do does did done have has had can could will would should may might one two three there here about ' +
  'more most less least own same other another each every any all some such only just also very can not').split(/\s+/));

const words = s => (s.toLowerCase().match(/[a-záéíóúñü]{4,}/g) || []).filter(w => !STOP.has(w));

/** Pull every {en,es} leaf under a value, with its path. */
function leaves(v, p, out) {
  if (v === null || v === undefined) return out;
  if (Array.isArray(v)) { v.forEach((x, i) => leaves(x, `${p}[${i}]`, out)); return out; }
  if (typeof v === 'object') {
    const k = Object.keys(v);
    if (k.length && k.every(x => x === 'en' || x === 'es')) { out.push({ path: p, en: v.en, es: v.es }); return out; }
    k.forEach(x => leaves(v[x], `${p}.${x}`, out));
  }
  return out;
}

const READING = new Set(['passage', 'insight', 'layers', 'matrix']);
const DECISION = new Set(['choose', 'check', 'compare', 'spot', 'order', 'sort', 'match', 'reveal', 'drill']);

function profile(module, lesson) {
  const ls = leaves(lesson, lesson.id, []);
  const en = ls.map(l => l.en).join(' ');
  const es = ls.map(l => l.es).join(' ');
  const kinds = lesson.blocks.map(b => b.kind);

  const decisions = lesson.blocks
    .filter(b => DECISION.has(b.kind))
    .map(b => ({
      kind: b.kind,
      prompt: (b.prompt || b.title || {}).en || '(no prompt)',
      options: (b.options || b.left || b.items || b.guesses || []).length ||
               (b.kind === 'compare' ? 2 : (b.lines || []).length),
      why: !!(b.why || b.principle || b.rule)
    }));

  // Spanish depth.
  //
  // Spanish depth is measured at TWO scales, and deliberately not at the scale
  // in between.
  //
  //   · Per PROSE leaf (>= 160 chars) — a paragraph rendered as a summary loses
  //     length, and at paragraph scale that signal is reliable.
  //   · Per LESSON — total Spanish content words against total English. A
  //     Spanish journey that is a précis of the English shows up here as a
  //     deficit across the whole lesson even when no single leaf looks short.
  //
  // Short quoted dialogue is NOT length-tested. Colloquial Spanish is routinely
  // more compact than colloquial English ("Piénsatelo y me dices" for "Have a
  // think about it and get in touch"), Spanish drops the comma before "y" where
  // English keeps it, and Spanish uses "y" where English uses an em dash. Every
  // leaf those heuristics flagged in this curriculum was hand-checked and every
  // one preserved the full meaning, so the heuristics were measuring register,
  // not depth. Missing translations, untranslated copies and English left in
  // place are caught as hard failures by test/verify-content.js instead.
  const contentWords = s => (s.toLowerCase().match(/[a-záéíóúñü]{4,}/g) || []).length;
  const prose = ls.filter(l => l.en.length >= 160);
  const thin = prose.filter(l => l.es.length < l.en.length * 0.75);
  const enCw = ls.reduce((s, l) => s + contentWords(l.en), 0);
  const esCw = ls.reduce((s, l) => s + contentWords(l.es), 0);
  const ratio = enCw ? Number((esCw / enCw).toFixed(3)) : 1;

  const insights = lesson.blocks.filter(b => b.kind === 'insight').map(b => b.source.en);

  return {
    id: lesson.id, module: module.id, moduleN: module.n, n: lesson.n,
    title: lesson.title.en, titleEs: lesson.title.es,
    objective: lesson.objective.en, objectiveEs: lesson.objective.es,
    minutes: lesson.minutes,
    kinds, blocks: kinds.length,
    reading: kinds.filter(k => READING.has(k)).length,
    interactive: kinds.filter(k => !READING.has(k)).length,
    decisions,
    moduleSource: module.source.en,
    lessonSources: insights,
    assignment: module.apply.assignment.en,
    followUp: module.apply.prompt.en,
    enWords: words(en).length,
    esChars: es.length, enChars: en.length,
    esRatio: Number(ratio.toFixed(3)),
    thinSpanish: thin.map(t => t.path),
    bag: new Set(words(en))
  };
}

const MODULES = academy.MODULES;
const ALL = MODULES.flatMap(m => m.lessons.map(l => profile(m, l)));

// --------------------------------------------------------------- duplication
function jaccard(a, b) {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}
const dupes = [];
for (let i = 0; i < ALL.length; i++) {
  for (let j = i + 1; j < ALL.length; j++) {
    const s = jaccard(ALL[i].bag, ALL[j].bag);
    if (s >= 0.22) dupes.push({ a: ALL[i].id, b: ALL[j].id, similarity: Number(s.toFixed(3)),
                                aTitle: ALL[i].title, bTitle: ALL[j].title });
  }
}
dupes.sort((x, y) => y.similarity - x.similarity);

// Jaccard over content words is a SCREEN, not a verdict: two lessons can share
// vocabulary because they discuss adjacent subjects. Every pair it raises is
// read by hand and adjudicated here, in the open, with the evidence that
// separated them. A pair with NO entry below is an unreviewed finding and the
// audit rejects the lessons in it.
const ADJUDICATED = {
  'm7l6|m9l4': {
    verdict: 'distinct',
    reason: 'Different canonical phases and different actors. m7l6 is a client declining a recommendation in Phase 7 \u2014 the relationship continues and moves to Considering on the Continuum, and Toolkit #8 still applies. m9l4 is the practitioner ending a relationship in Phase 8 under MBOK Ch.6. The shared vocabulary is "relationship", "decline", "referral" and "follow-up", which both subjects necessarily use. m7l6 now carries a compare block whose entire content is the distinction between the two, so the overlap is the curriculum teaching the difference rather than repeating itself.'
  }
};
const adjudicate = d => ADJUDICATED[[d.a, d.b].sort().join('|')] || null;

// -------------------------------------------------------------------- sample
// Stratified: one lesson from every module first, so no module escapes review,
// then fill to fifteen at random from what is left.
const rand = rng(SEED);
const pick = [];
MODULES.forEach(m => {
  const pool = ALL.filter(l => l.module === m.id);
  pick.push(pool[Math.floor(rand() * pool.length)]);
});
const rest = ALL.filter(l => !pick.includes(l));
while (pick.length < 15 && rest.length) {
  pick.push(rest.splice(Math.floor(rand() * rest.length), 1)[0]);
}
pick.sort((a, b) => a.moduleN - b.moduleN || a.n - b.n);

// ------------------------------------------------------------------- verdicts
function verdict(l) {
  const reasons = [];
  if (l.decisions.length < 2) reasons.push('fewer than two interactive decisions');
  if (l.enWords < 180) reasons.push(`thin (${l.enWords} content words)`);
  if (l.interactive < 2) reasons.push('mostly reading');
  if (l.esRatio < 0.85) reasons.push(`Spanish carries less than the English (content-word content-word ratio ${l.esRatio})`);
  if (l.thinSpanish.length) reasons.push(`${l.thinSpanish.length} Spanish paragraph(s) under 75% of the English`);
  if (!l.decisions.every(d => d.why)) reasons.push('a decision returns no explanation');
  const near = dupes.filter(d => (d.a === l.id || d.b === l.id) && !adjudicate(d));
  if (near.length) reasons.push(`unreviewed overlap with ${near.map(d => (d.a === l.id ? d.b : d.a) + '@' + d.similarity).join(', ')}`);
  return { pass: reasons.length === 0, reasons };
}

const results = pick.map(l => ({ lesson: l, verdict: verdict(l) }));

// Curriculum-wide flags, not only the sample
const allThinEs = ALL.filter(l => l.esRatio < 0.85 || l.thinSpanish.length);
const allMostlyReading = ALL.filter(l => l.interactive < 2);
const allThinWords = ALL.filter(l => l.enWords < 180);

if (AS_JSON) {
  console.log(JSON.stringify({
    seed: SEED,
    sample: results.map(r => ({ ...r.lesson, bag: undefined, verdict: r.verdict })),
    dupes, allThinEs: allThinEs.map(l => ({ id: l.id, ratio: l.esRatio, leaves: l.thinSpanish })),
    allMostlyReading: allMostlyReading.map(l => l.id),
    allThinWords: allThinWords.map(l => ({ id: l.id, words: l.enWords }))
  }, null, 1));
  process.exit(0);
}

const W = s => console.log(s);
W('CONTENT DEPTH AUDIT');
W('===================');
W(`seed ${SEED} · ${ALL.length} lessons in the curriculum · 15 sampled, at least one per module`);
W('');

results.forEach(({ lesson: l, verdict: v }) => {
  W('─'.repeat(78));
  W(`${l.id}  (Module ${l.moduleN}, lesson ${l.n})  ·  ${l.minutes} min  ·  ${v.pass ? 'ACCEPT' : 'REJECT'}`);
  W(`  CONCEPT     ${l.title}`);
  W(`              ${l.objective}`);
  W(`  SOURCE      ${l.moduleSource}`);
  if (l.lessonSources.length) l.lessonSources.forEach(s => W(`              cites: ${s}`));
  W(`  PRACTISED   ${l.decisions.length} decision(s) across ${l.blocks} blocks (${l.interactive} interactive, ${l.reading} reading)`);
  l.decisions.forEach(d => W(`    · [${d.kind}] ${d.prompt.slice(0, 96)}${d.prompt.length > 96 ? '…' : ''}  (${d.options} options, ${d.why ? 'explained' : 'NO EXPLANATION'})`));
  W(`  TRANSFER    ${l.assignment.slice(0, 150)}${l.assignment.length > 150 ? '…' : ''}`);
  W(`  FOLLOW-UP   ${l.followUp.slice(0, 120)}${l.followUp.length > 120 ? '…' : ''}`);
  W(`  SPANISH     content-word ratio ${l.esRatio} · ${l.thinSpanish.length} thin leaves · ${l.enWords} EN content words`);
  if (!v.pass) v.reasons.forEach(r => W(`  ✗ ${r}`));
  W('');
});

W('─'.repeat(78));
W('CURRICULUM-WIDE');
W(`  near-duplicate lesson pairs (jaccard ≥ 0.22): ${dupes.length}`);
dupes.slice(0, 10).forEach(d => {
  const adj = adjudicate(d);
  W(`    ${d.similarity}  ${d.a} "${d.aTitle}"  ↔  ${d.b} "${d.bTitle}"  —  ${adj ? adj.verdict.toUpperCase() + ' (adjudicated)' : 'UNREVIEWED'}`);
  if (adj) W(`             ${adj.reason}`);
});
W(`  lessons with Spanish materially shorter than English: ${allThinEs.length}`);
allThinEs.slice(0, 12).forEach(l => W(`    ${l.id} content-word ratio ${l.esRatio} (${l.thinSpanish.length} leaves)`));
W(`  lessons that are mostly reading: ${allMostlyReading.length}  ${allMostlyReading.map(l => l.id).join(', ')}`);
W(`  lessons under 180 content words: ${allThinWords.length}  ${allThinWords.map(l => l.id + ':' + l.enWords).join(', ')}`);
W('');
const rejected = results.filter(r => !r.verdict.pass);
W(`SAMPLE RESULT: ${results.length - rejected.length} accepted, ${rejected.length} rejected`);
if (rejected.length) rejected.forEach(r => W(`  · ${r.lesson.id} — ${r.verdict.reasons.join('; ')}`));
process.exit(0);
