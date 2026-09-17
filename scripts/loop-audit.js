#!/usr/bin/env node
/**
 * THE LEARNING LOOP AUDIT
 *
 * The product's promise is that a lesson leaves a practitioner able to do
 * something better tomorrow. The loop that does that is:
 *
 *   UNDERSTAND → SEE → CHOOSE → CONSEQUENCE → COACHING → RETRY → APPLY
 *
 * This script maps every lesson's blocks onto those seven stages and reports
 * which lessons are missing which stage. A lesson that is mostly reading with a
 * next button fails, and is named.
 *
 * Run: node scripts/loop-audit.js [--fix-list]
 */
const academy = require('../server/academy/content');

// Which stages a block kind can satisfy. A kind may serve more than one.
const STAGE_OF = {
  passage:       ['UNDERSTAND'],
  insight:       ['UNDERSTAND'],
  layers:        ['UNDERSTAND'],
  matrix:        ['UNDERSTAND'],
  signal:        ['SEE'],
  reveal:        ['SEE', 'CHOOSE'],
  signalGallery: ['SEE', 'CHOOSE'],
  clientline:    ['SEE'],
  timedPause:    ['SEE'],
  spot:          ['SEE', 'CHOOSE'],
  compare:       ['SEE', 'CHOOSE'],
  choose:        ['CHOOSE'],
  check:         ['CHOOSE'],
  order:         ['CHOOSE'],
  sort:          ['CHOOSE'],
  match:         ['CHOOSE'],
  drill:         ['CHOOSE'],
  // `translate` is a write-then-reveal exercise. Nothing in it can be got
  // wrong and re-attempted, so it is a CHOOSE and never a RETRY — the stage
  // table granted it RETRY as well, which is how nine lessons without a second
  // attempt were reported as closing the loop.
  translate:     ['CHOOSE'],
  reflect:       ['APPLY']
};

/** A block gives CONSEQUENCE if choosing wrongly produces a stated result. */
const givesConsequence = b =>
  (b.options || []).some(o => o.why) || !!b.why || !!b.principle || !!b.rule ||
  (b.items || []).some(i => i.note);

/** A block gives COACHING if it states the principle, not just the answer. */
const givesCoaching = b => !!(b.principle || b.rule || b.why) ||
  (b.items || []).some(i => i.note);

/**
 * RETRY: a SECOND ATTEMPT at the same skill, after the coaching, with a real
 * wrong answer available.
 *
 * Deliberately strict. A `translate` block (write something, then reveal a
 * model answer) and a `drill` checklist are useful, but nothing in them can be
 * got wrong and then re-attempted — revealing an answer is not practising one.
 * Counting them was flattering the audit, so only an explicit `retry` counts.
 */
const givesRetry = b => !!(b.retry && (b.retry.options || []).length >= 2);

/**
 * A retry is only meaningful if the second attempt CHANGES something in the
 * consultation: the client's response, what she discloses, the trust state, the
 * objection, the recommendation context, or the continuation outcome.
 */
const CHANGE_AXES = ['clientResponse', 'disclosure', 'trust', 'objection', 'recommendation', 'continuation'];
const retryChangesSomething = b =>
  !!(b.retry && b.retry.changes && CHANGE_AXES.includes(b.retry.changes.axis) &&
     b.retry.changes.detail && b.retry.changes.detail.es);

/** A lesson is only source-traced if it says where it comes from. */
const PROV_KEYS = ['chapter', 'principle', 'phase', 'trustStage', 'standard', 'duty'];
const hasProvenance = l => !!(l.provenance && PROV_KEYS.every(k => l.provenance[k] !== undefined));

function auditLesson(module, lesson) {
  const stages = new Set();
  (lesson.blocks || []).forEach(b => {
    (STAGE_OF[b.kind] || []).forEach(s => stages.add(s));
    if (givesConsequence(b)) stages.add('CONSEQUENCE');
    if (givesCoaching(b)) stages.add('COACHING');
    if (givesRetry(b)) stages.add('RETRY');
  });
  // APPLY is satisfied by the lesson's own reflect block or by the module's
  // field assignment, which every module carries.
  if (module.apply && module.apply.assignment) stages.add('APPLY');

  const ORDER = ['UNDERSTAND', 'SEE', 'CHOOSE', 'CONSEQUENCE', 'COACHING', 'RETRY', 'APPLY'];
  const missing = ORDER.filter(s => !stages.has(s));
  const decisions = (lesson.blocks || []).filter(b => ['choose', 'check', 'compare', 'spot', 'order', 'sort', 'match', 'drill', 'reveal'].includes(b.kind)).length;
  const reading = (lesson.blocks || []).filter(b => ['passage', 'insight', 'layers', 'matrix'].includes(b.kind)).length;

  const retryBlocks = (lesson.blocks || []).filter(givesRetry);
  return {
    hollowRetry: retryBlocks.length > 0 && !retryBlocks.some(retryChangesSomething),
    noProvenance: !hasProvenance(lesson),
    id: lesson.id, module: module.id, moduleN: module.n, title: lesson.title.en,
    kinds: (lesson.blocks || []).map(b => b.kind),
    stages: ORDER.filter(s => stages.has(s)),
    missing, decisions, reading,
    mostlyReading: reading >= decisions,
    retryBlocks: (lesson.blocks || []).filter(givesRetry).map(b => b.kind)
  };
}

const rows = academy.MODULES.flatMap(m => m.lessons.map(l => auditLesson(m, l)));

const W = console.log;
W('THE LEARNING LOOP AUDIT');
W('='.repeat(78));
W('UNDERSTAND → SEE → CHOOSE → CONSEQUENCE → COACHING → RETRY → APPLY');
W('');

const STAGES = ['UNDERSTAND', 'SEE', 'CHOOSE', 'CONSEQUENCE', 'COACHING', 'RETRY', 'APPLY'];
const counts = {};
STAGES.forEach(s => { counts[s] = rows.filter(r => r.stages.includes(s)).length; });
W('COVERAGE ACROSS ALL ' + rows.length + ' LESSONS');
W('─'.repeat(40));
STAGES.forEach(s => {
  const n = counts[s], bar = '█'.repeat(Math.round(n / rows.length * 30));
  W(`  ${s.padEnd(12)} ${String(n).padStart(3)}/${rows.length}  ${bar}`);
});

const incomplete = rows.filter(r => r.missing.length);
W('');
W(`LESSONS NOT YET CLOSING THE LOOP: ${incomplete.length}`);
W('─'.repeat(40));
const byMissing = {};
incomplete.forEach(r => r.missing.forEach(s => { (byMissing[s] = byMissing[s] || []).push(r.id); }));
Object.entries(byMissing).sort((a, b) => b[1].length - a[1].length).forEach(([s, ids]) => {
  W(`  missing ${s} (${ids.length}): ${ids.join(', ')}`);
});

const hollow = rows.filter(r => r.hollowRetry);
W('');
W(`RETRIES THAT DO NOT NAME WHAT THEY CHANGE: ${hollow.length}`);
if (hollow.length) W('  ' + hollow.map(r => r.id).join(', '));

const unsourced = rows.filter(r => r.noProvenance);
W('');
W(`LESSONS WITHOUT AN INTERNAL SOURCE TRACE: ${unsourced.length}`);
if (unsourced.length) W('  ' + unsourced.map(r => r.id).join(', '));

const mostly = rows.filter(r => r.mostlyReading);
W('');
W(`LESSONS WHERE READING OUTWEIGHS DECIDING: ${mostly.length}`);
if (mostly.length) mostly.forEach(r => W(`  ${r.id}  ${r.reading} reading / ${r.decisions} decisions  — ${r.title}`));

if (process.argv.includes('--fix-list')) {
  W('');
  W('PRIORITISED FIX LIST');
  W('─'.repeat(40));
  const score = r => r.missing.length * 10 + (r.mostlyReading ? 5 : 0) - r.decisions;
  rows.filter(r => r.missing.length || r.mostlyReading)
    .sort((a, b) => score(b) - score(a))
    .forEach(r => W(`  ${r.id.padEnd(7)} m${r.moduleN}  missing[${r.missing.join(',')}]  ${r.decisions} decisions  — ${r.title}`));
}

W('');
W('═'.repeat(58));
const complete = rows.length - incomplete.length;
W(`RESULT: ${complete}/${rows.length} lessons close the full loop`);
W('═'.repeat(58));
process.exit(0);
