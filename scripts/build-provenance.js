/**
 * BOOK → MIRROR PROVENANCE MAP GENERATOR
 *
 * Emits BOOK_MIRROR_CONTENT_MAP.md from the live curriculum plus the curated
 * per-lesson citation table below, so the map cannot drift from the product.
 *
 * Every lesson must appear in LESSON_SOURCES. The generator fails loudly if a
 * lesson is missing, which is what keeps "every teaching concept traces to the
 * book or to the canonical architecture" from becoming an aspiration.
 *
 * Run: node scripts/build-provenance.js
 */
const fs = require('fs');
const path = require('path');
const academy = require('../server/academy/content');
const method = require('../server/framework/method');
const scenarios = require('../server/scenario');

// Chapter titles as they appear in the book (EN edition).
const CHAPTERS = {
  0: 'Prologue',
  1: 'You Are Not Selling a Product — You Are Closing an Identity Gap',
  2: 'The Numbers Only Changed When We Changed One Thing',
  3: 'Stop Selling Treatments — Start Translating Feelings',
  4: 'The Three Layers — Understanding What Really Drives the Purchase',
  5: 'The Transformation You Don\'t See Coming',
  6: 'The Mirror Truth — Why Reflection Sells More Than Persuasion',
  7: 'The First 30 Seconds — Before She Speaks, You Already Know Everything',
  8: 'M — Make Safe — The Foundation of Every Sale',
  9: 'I — Inquire — The Three Layers of Truth',
  10: 'R — Reflect — The Sentence That Changes Everything',
  11: 'R — Recommend — The Doctor\'s Diagnosis That Sells',
  12: 'O — Overcome — Permission, Not Price',
  13: 'R — Resolve & Rise — The Close That Isn\'t One',
  14: 'The Price Moment — Decoding What "Expensive" Really Means',
  15: 'Mastery in Mindset — What Separates the Exceptional',
  16: 'From Theory to Reality — The Systems That Create Excellence',
  17: 'Mastery — When Selling Becomes a Calling',
  18: 'Epilogue and the closing Mirror Checklist'
};

/**
 * lessonId: [chapters, section or story used, canonical anchor]
 */
const LESSON_SOURCES = {
  // MODULE 1 — Psychology of the Consultation
  m1l1: [[0, 1], 'Prologue; "she is deciding about you, not the treatment"', 'Trust Stage 1 (Safety); Phase 2 Connection'],
  m1l2: [[7], 'Three Types of Entrance — quiet, confident, stormy', 'Trust Standard 1; Phase 2 Connection'],
  m1l3: [[3, 4], 'The Three Layers: surface / emotional / identity', 'Phase 3 Discovery; Toolkit #3 fields 1–2 and 6'],
  m1l4: [[4], 'Five Drives That Bring Women Through the Door', 'Phase 3 Discovery; Trust Stage 3 (Understanding)'],
  m1l5: [[7, 8], 'The first 30 seconds; premature reassurance', 'Trust Standard 1; Ethical Duty 2 (Respect Autonomy)'],
  m1l6: [[8, 9, 10, 11, 12, 13], 'The six-step M.I.R.R.O.R method, Ch.8–13, reconciled with the eight-phase architecture', 'MBOK Ch.1 s1.16 (8 phases); Ch.3 (7 stages, 6 standards); Ch.2 (4 duties); Toolkits #1,#3,#4,#5,#6,#8,#16,#17'],

  // MODULE 2 — Preparation & Safety
  m2l1: [[8], 'The neuroscience of the 30-second decision; the polyvagal scan', 'Phase 1 Preparation; Trust Stage 1 (Safety)'],
  m2l2: [[8], 'Mirror neurons and contagious state; the Reset ritual', 'Phase 1 Preparation; Ethical Duty 3 (Act in the Client\'s Interest)'],
  m2l3: [[8], 'Preparation before the client arrives', 'Phase 1 Preparation; Toolkit #1 prior-experience field'],
  m2l4: [[8], 'Anita & Nadia — the five states of M, and holding silence', 'Trust Standard 1; Phase 2 Connection'],
  m2l5: [[8], '"M is sacred": no screen, no phone, no time-checking, no selling energy', 'Trust Stage 1; Trust Standard 1'],
  m2l6: [[8], 'The Clinic Action Step — the eight-item M checklist', 'Phase 1–2 gate; Toolkit #1'],

  // MODULE 3 — Discovery
  m3l1: [[9], 'Inquire: collecting versus producing information', 'Phase 3 Discovery; Toolkit #1 Depth Check gate'],
  m3l2: [[3, 9], 'Translating the surface sentence into the layer beneath', 'Phase 3 Discovery; Trust Stage 3'],
  m3l3: [[9], 'The question sequence, and the deflected "why now"', 'Phase 3 Discovery; Trust Standard 2'],
  m3l4: [[8, 9], 'Reassurance before understanding', 'Trust Standard 2 (Demonstrate Attentive Understanding)'],
  m3l5: [[9], 'Ask, then wait — the second answer', 'Phase 3 Discovery; Trust Stage 2 (Attention)'],
  m3l6: [[7, 9], 'What the body says: the recurring signals', 'Phase 3 Discovery; Trust Standard 2'],
  m3l7: [[9], 'The Discovery record and the honesty of the Depth Check', 'Toolkit #1; the Phase 3 → Phase 4 gate'],

  // MODULE 4 — Understanding & Alignment
  m4l1: [[6, 10], 'The reflection forms; "reflection sells more than persuasion"', 'Phase 4 Understanding; Trust Stage 3'],
  m4l2: [[10], '"What I\'m hearing is…" — the summary the client corrects', 'Phase 4 Understanding; Trust Standard 2'],
  m4l3: [[10], 'The contradiction mirror', 'Phase 4 Understanding; Trust Stage 3'],
  m4l4: [[11], 'Double diagnosis — emotional first, aesthetic second', 'Phase 4 → Phase 5 boundary; Trust Standard 4'],
  m4l5: [[10], 'Client language captured verbatim', 'Toolkit #3 (Emotional Drivers Map), field 6'],

  // MODULE 5 — Building the Recommendation
  m5l1: [[11], 'The two diagnoses and the order they must be delivered in', 'Phases 5–6; Trust Stage 5 (Alignment)'],
  m5l2: [[11], '"You don\'t need everything"', 'Ethical Duty 1 (Recommend Only What Is Warranted); Toolkit #4 field 8'],
  m5l3: [[11, 5], 'Three maximum; future pacing', 'Ethical Duty 2 (Respect Autonomy); Phase 6'],
  m5l4: [[11], 'Price and promise delivered without apology or overclaim', 'Ethical Duty 4 (Do Not Overclaim); Toolkit #4 field 6'],
  m5l5: [[11], 'Connecting every element to a feeling from stage I', 'Trust Standard 4; Toolkit #3 → Toolkit #4 traceability'],
  m5l6: [[11], 'The recommendation as a diagnosis, including what is declined', 'Toolkit #4, canonical eight fields'],

  // MODULE 6 — Price, Value and Investment
  m6l1: [[14], 'The Four Laws of the Price Conversation', 'Phase 6; Toolkit #5 (Price & Value Presentation Planner)'],
  m6l2: [[14], 'The five translations of "expensive"', 'Phase 7; Toolkit #6 (Objection Diagnostic)'],
  m6l3: [[14, 11], 'The five mistakes; price with zero apology', 'Trust Standard 5 (Communicate with Radical Clarity)'],
  m6l4: [[14], 'Orly at the counter; Michal and the cheaper quote', 'Trust Stage 4 (Credibility); Ethical Duty 3'],
  m6l5: [[14], 'Dana and the guilt moment', 'Trust Standard 1; Ethical Duty 2'],
  m6l6: [[14], 'Value structure before the number', 'Toolkit #5, canonical field structure'],

  // MODULE 7 — Objections
  m7l1: [[12], 'Permission, not price — the three hidden objections', 'Phase 7 Decision Support; Toolkit #6'],
  m7l2: [[12], 'Diagnose before you respond', 'Toolkit #6 fields 1–2; Trust Standards 1–5'],
  m7l3: [[12, 13], '"I need to think about it"', 'Phase 7; the derived DEFER outcome'],
  m7l4: [[12], 'The authority objection and the absent decision-maker', 'Ethical Duty 2; Toolkit #4 field 8'],
  m7l5: [[11, 12], 'The objection produced by the consultation itself', 'Phases 5–6; Trust Standard 6'],
  m7l6: [[13], 'Accepting a decline', 'MBOK Ch.6 End Relationships Responsibly; Toolkit #8; #16/#17 ineligibility'],

  // MODULE 8 — Decision Support
  m8l1: [[13], 'The three closes: pressure, passive, partnership', 'Phase 7; Ethical Duty 2'],
  m8l2: [[13], 'The partnership close; Dana\'s "It is."', 'Phase 7; Trust Stage 7 (Confirmation)'],
  m8l3: [[13], 'Ruti — the block that is fear of herself', 'Phase 7; Toolkit #6 field 2'],
  m8l4: [[13], 'Closing in 30 seconds: when, which, shall I', 'Ethical Duty 2; Phase 7'],
  m8l5: [[13], 'The thirty seconds after yes', 'Trust Standard 6 (Protect Trust After Decision)'],
  m8l6: [[13], 'Elena — abandoning is not respect either', 'Decision Engine tri-state; Toolkit #8 at DEFER'],

  // MODULE 9 — Follow-up & Continuation
  m9l1: [[16], 'The follow-up sequence: day 3, week 2, month 1, month 3', 'Phase 8 Relationship Continuation; Toolkit #8'],
  m9l2: [[16], 'Systematic care versus pursuit', 'Ethical Duty 2; Toolkit #8 stop condition'],
  m9l3: [[16], 'The 48-hour follow-up on a consultation that did not close', 'DEFER handling; Toolkit #16 ineligibility'],
  m9l4: [[16], 'Relationship, not transaction', 'MBOK Ch.6; relationship states CONSULTED / PAUSED / REFERRED–DISCHARGED'],
  m9l5: [[16], 'The evaluation conversation at month one', 'Trust Standard 6; Ethical Duty 4'],
  m9l6: [[16], 'The systems that make follow-up survive a bad week', 'Toolkit #8, canonical row structure'],

  // MODULE 10 — MIRROR Mastery
  m10l1: [[15], 'Sophia and Anna; the five pillars of the mastery mindset', 'The Five Engines; professional identity across all phases'],
  m10l2: [[15, 17], 'Dr. Liore — 18 of 20 minutes talking, one question asked', 'Phase 3 Discovery; Trust Standard 2'],
  m10l3: [[13, 15], 'Rejection as information; "can I ask what that no was about?"', 'The NO outcome; MBOK Ch.6'],
  m10l4: [[15], 'Reading your own pattern instead of your results', 'Trust stages and alignment verdicts as a self-diagnostic'],
  m10l5: [[18], 'The closing Mirror Checklist', 'All 8 canonical phases in sequence'],
  m10l6: [[17], 'Yael returns — "you changed more than my skin"', 'Trust Stage 7; Relationship Continuum']
};

const CASE_SOURCES = [
  ['Case 01 — Sofia', 'Ch.9 (Inquire) and Ch.12 (Overcome): a withheld motive and a prior-experience fear carried by someone close to her.',
   'Phases 1–8; Toolkits #1, #3, #4, #5, #6, #8; derived YES / DEFER / NO.'],
  ['Case 02 — Carmen', 'Ch.7 (the confident entrance as armour), Ch.10 (the contradiction mirror), Ch.12 (the authority objection that is really exposure).',
   'Phases 1–8; the same toolkit set with case-aware honesty validation; DEFER reachable on 32% of paths.'],
  ['Case 03 — Beatriz', 'Ch.14 (the five translations of "expensive", the commitment translation in particular) and Ch.11 ("you don\'t need everything" against a programme).',
   'Phases 1–8; investment objection at Phase 7; all three outcomes reachable.']
];

// ---------------------------------------------------------------------------
function build() {
  const mods = academy.MODULES;
  const missing = [];
  mods.forEach(m => m.lessons.forEach(l => { if (!LESSON_SOURCES[l.id]) missing.push(l.id); }));
  if (missing.length) {
    console.error('MISSING PROVENANCE for: ' + missing.join(', '));
    process.exit(1);
  }

  const stats = academy.stats();
  const out = [];
  const w = s => out.push(s);

  w('# BOOK → MIRROR PROVENANCE MAP');
  w('');
  w('_Generated by `scripts/build-provenance.js` from the live curriculum. Do not edit by hand._');
  w('');
  w(`**Content source:** *The Beauty Sales Secrets* (Noam Landman), EN and ES editions.  `);
  w(`**Structural source:** the canonical MIRROR architecture — 8 phases, 7 trust stages, 6 trust standards, 4 ethical duties, Toolkits #1–24.  `);
  w(`**Coverage:** ${stats.modules} modules · ${stats.lessons} lessons · ${stats.learningMinutes} minutes of teaching · ${scenarios.list().length} full consultation cases.`);
  w('');
  w('No framework in this product is invented. Every teaching concept below traces either to a chapter of the book or to the canonical architecture, and usually to both: the book supplies the substance, the architecture supplies the structure that makes it executable and assessable.');
  w('');

  w('## 1. The two MIRROR layers');
  w('');
  w('There are TWO legitimate MIRROR layers in this product and they are deliberately not collapsed into one another.');
  w('');
  w('- **The 6-step MIRROR Method** is the learner-facing method from *The Beauty Sales Secrets* (Chapters 8–13). It is what a practitioner runs.');
  w('- **The 8-phase MIRROR Consultation Architecture** is MBOK v0.17 Ch.1 s1.16. It is what a consultation is reviewed against.');
  w('');
  w('> ' + method.RECONCILIATION_STATEMENT.en);
  w('');
  w('The book does NOT teach the eight-phase architecture and this product does not claim it does. The table below is a JOIN between two source-traced tables, generated from `server/framework/method.js`; it is not a third framework. The learner sees exactly this reconciliation in **Module 1, lesson `m1l6` — "The two MIRRORs"** — it is curriculum, not engineering documentation.');
  w('');
  w('| M.I.R.R.O.R (book) | Ch. | Canonical phases | Trust stages | Trust standards | Ethical duties | Toolkits |');
  w('|---|---|---|---|---|---|---|');
  method.methodTable().forEach(r => {
    w(`| ${r.letter} — ${r.name.en} | ${r.chapter} `
      + `| ${r.phases.map(p => p.n + ' ' + p.name.en).join(', ')} `
      + `| ${r.stages.map(x => x.n + ' ' + x.name.en).join(', ')} `
      + `| ${r.standards.map(x => x.n + ' ' + x.name.en).join(', ')} `
      + `| ${r.duties.map(x => x.n + ' ' + x.name.en).join(', ')} `
      + `| ${r.toolkits.map(x => '#' + x.n).join(', ')} |`);
  });
  w('');
  w('Per-step provenance, verbatim from `method.js`:');
  w('');
  method.methodTable().forEach(r => {
    w(`- **${r.letter} — ${r.name.en}** — book: ${r.book.en} · architecture: ${r.mbok.en}`);
  });
  w('');
  w('### Where the six steps do not cover the eight phases');
  w('');
  w('Stated explicitly rather than papered over. Six behaviours do not divide evenly into eight phases:');
  w('');
  method.phaseCoverage().filter(p => p.architectureOnly).forEach(p => {
    w(`- **Phase ${p.n} ${p.name.en}** — ${p.note.en}`);
  });
  w('');
  w('The price chapter (14) sits across phases 6 and 7; the mindset and systems chapters (15–17) and the epilogue supply Module 10 and the follow-up systems in Module 9.');
  w('');

  w('## 2. Chapter → module coverage');
  w('');
  const byChapter = {};
  Object.entries(LESSON_SOURCES).forEach(([id, [chs]]) => chs.forEach(c => {
    byChapter[c] = byChapter[c] || new Set();
    byChapter[c].add(id.replace(/l\d+$/, '').toUpperCase());
  }));
  w('| Chapter | Title | Used by |');
  w('|---|---|---|');
  Object.keys(CHAPTERS).map(Number).sort((a, b) => a - b).forEach(c => {
    const used = byChapter[c] ? [...byChapter[c]].sort((a, b) => Number(a.slice(1)) - Number(b.slice(1))).join(', ') : '—';
    w(`| ${c === 0 ? 'Prologue' : c === 18 ? 'Epilogue' : c} | ${CHAPTERS[c]} | ${used} |`);
  });
  w('');
  const unused = Object.keys(CHAPTERS).map(Number).filter(c => !byChapter[c]);
  if (unused.length) {
    w(`Chapters not yet drawn on: ${unused.map(c => CHAPTERS[c]).join('; ')}. These are narrative or contextual chapters whose material appears inside other modules rather than as lessons of their own.`);
    w('');
  }

  w('## 3. Lesson-level provenance');
  w('');
  mods.forEach(m => {
    w(`### Module ${m.n} — ${m.title.en} / ${m.title.es}`);
    w('');
    w(`*${m.strapline.en}*`);
    w('');
    w(`Canonical phase: **${m.phase}** · ${m.lessons.length} lessons · ${m.minutes} minutes · source line: ${m.source.en}`);
    w('');
    w('| Lesson | Title | Book chapter and section | Canonical anchor |');
    w('|---|---|---|---|');
    m.lessons.forEach(l => {
      const [chs, section, anchor] = LESSON_SOURCES[l.id];
      const chapterList = chs.map(c => c === 0 ? 'Prologue' : c === 18 ? 'Epilogue' : `Ch.${c}`).join(', ');
      w(`| \`${l.id}\` | ${l.title.en} | ${chapterList} — ${section} | ${anchor} |`);
    });
    w('');
    w(`**Field assignment:** ${m.apply.assignment.en}`);
    w('');
  });

  w('## 4. Case provenance');
  w('');
  w('| Case | Book grounding | Canonical structure |');
  w('|---|---|---|');
  CASE_SOURCES.forEach(([name, book, canon]) => w(`| ${name} | ${book} | ${canon} |`));
  w('');
  w('Client names, histories and dialogue in the cases are original compositions built on the book\'s patterns; they are not transcriptions of the book\'s named clients. The book\'s own stories (Yael, Anita and Nadia, Rachel and Mia, Shira, Sigal, Ruti, Orly, Michal, Dana, Maria, Miri, Elena, Dr. Liore) appear inside lessons, cited, as teaching material.');
  w('');

  w('## 5. What is NOT from the book');
  w('');
  w('These are the canonical architecture, not the book, and are labelled as such wherever they appear:');
  w('');
  w('- The eight canonical phases and their gates.');
  w('- The seven trust stages and the client-state ledger that scores them.');
  w('- The six trust standards and four ethical duties.');
  w('- Toolkits #1–24 and their field structures and validators.');
  w('- The Decision Engine\'s derived tri-state outcome, and the Toolkit #16 / #17 eligibility rules.');
  w('- The Five Engines that organise the learner experience.');
  w('');
  w('Nothing else has been added. Where a lesson needed a framework the book does not contain, the lesson was written against the canonical architecture instead — and where neither had one, the lesson was not written.');
  w('');

  const file = path.join(__dirname, '..', 'BOOK_MIRROR_CONTENT_MAP.md');
  fs.writeFileSync(file, out.join('\n'));
  console.log(`Wrote ${file}`);
  console.log(`  ${mods.length} modules, ${stats.lessons} lessons, ${Object.keys(LESSON_SOURCES).length} provenance entries`);
}

build();
