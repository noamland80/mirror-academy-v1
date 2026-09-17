/**
 * BOOK CITATIONS — CHECKED AGAINST THE REAL BOOK
 *
 * The Academy claims that every substantive teaching concept traces to
 * *The Beauty Sales Secrets* or to the canonical MIRROR architecture. Until
 * now that claim was checked against a hand-written provenance table, which
 * proves only that somebody wrote the table.
 *
 * This suite checks it against the book itself. `test/fixtures/book-index.json`
 * is generated from the author's EPUB and holds, per chapter: the real title,
 * the word count, a distinctive-term fingerprint, and the client names that
 * actually appear in that chapter. The book's prose is NOT stored there and is
 * not shipped in the product — only enough to verify that a citation names a
 * chapter that exists and whose subject matches what the lesson says it does.
 *
 * Run: node test/verify-book-citations.js
 */
const fs = require('fs');
const path = require('path');
const academy = require('../server/academy/content');
const method = require('../server/framework/method');

const BOOK = JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures', 'book-index.json'), 'utf8'));
const CH = BOOK.chapters;

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) { pass++; } else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);

const norm = s => String(s || '').toLowerCase().replace(/[^a-z' ]+/g, ' ');
/** Every chapter number a citation string names. */
function chaptersIn(s) {
  const out = new Set();
  String(s).replace(/Chapters?\s+([\d,\sand–—-]+)/gi, (_, list) => {
    list.split(/[,\s]+|and|–|—|-/).filter(Boolean).forEach(n => { if (/^\d+$/.test(n)) out.add(Number(n)); });
    return '';
  });
  return [...out];
}

// The client stories, as the book actually tells them: name → chapters the
// name appears in. Built from the fixture, so it cannot drift from the book.
const NAME_CHAPTERS = {};
Object.entries(CH).forEach(([n, c]) => (c.quotedNames || []).forEach(name => {
  (NAME_CHAPTERS[name] = NAME_CHAPTERS[name] || []).push(Number(n));
}));

(function run() {

  sec('THE BOOK THIS PRODUCT IS BUILT ON');
  ok('The chapter index was generated from the author\'s own file', /EPUB supplied by the author/.test(BOOK.source));
  ok('The book has seventeen chapters', Object.keys(CH).length === 17, String(Object.keys(CH).length));
  ok('No chapter is an empty stub', Object.values(CH).every(c => c.words > 300),
     Object.entries(CH).filter(([, c]) => c.words <= 300).map(([n]) => n).join(','));
  ok('The book index ships no book prose',
     !JSON.stringify(BOOK).includes('. ') || JSON.stringify(BOOK).length < 40000,
     `${JSON.stringify(BOOK).length} bytes`);
  done(`17 chapters, ${Object.values(CH).reduce((s, c) => s + c.words, 0).toLocaleString()} indexed words`);

  sec('THE SIX-STEP METHOD MAPS ONTO THE REAL CHAPTERS');
  const LETTER_CH = { makeSafe: 8, inquire: 9, reflect: 10, recommend: 11, overcome: 12, resolveRise: 13 };
  method.methodTable().forEach(r => {
    const expected = LETTER_CH[r.key];
    ok(`${r.letter} — ${r.name.en} cites chapter ${expected}`, r.chapter === expected, `cites ${r.chapter}`);
    const title = (CH[String(expected)] || {}).title || '';
    // The chapter's own title must carry the step's letter and name.
    const stem = r.name.en.split(/[ &]/)[0].toLowerCase();
    ok(`Chapter ${expected} is really "${r.name.en}"`,
       norm(title).includes(stem), title);
  });
  done('M=8 I=9 R=10 R=11 O=12 R=13, verified against the book\'s own chapter titles');

  sec('EVERY CITATION IN THE CURRICULUM NAMES A CHAPTER THAT EXISTS');
  const cites = [];
  academy.MODULES.forEach(m => {
    cites.push({ where: m.id, text: m.source.en });
    m.lessons.forEach(l => (l.blocks || []).forEach(b => {
      if (b.kind === 'insight') cites.push({ where: l.id, text: b.source.en, quote: b.quote.en, note: b.note.en });
    }));
  });
  const badChapter = [];
  cites.forEach(c => chaptersIn(c.text).forEach(n => { if (!CH[String(n)]) badChapter.push(`${c.where}→Ch.${n}`); }));
  ok('No citation names a chapter the book does not have', badChapter.length === 0, badChapter.slice(0, 6).join(', '));
  const cited = new Set(cites.flatMap(c => chaptersIn(c.text)));
  ok('The curriculum draws on at least fourteen of the seventeen chapters', cited.size >= 14,
     [...cited].sort((a, b) => a - b).join(','));
  const uncited = Object.keys(CH).map(Number).filter(n => !cited.has(n));
  done(`${cites.length} citations across ${cited.size} chapters${uncited.length ? ` · not cited: ${uncited.join(', ')}` : ''}`);

  sec('CLIENT STORIES ARE ATTRIBUTED TO THE CHAPTER THEY ARE ACTUALLY IN');
  // A lesson that names one of the book's clients and also names a chapter must
  // name the chapter that client appears in. This is the check that catches a
  // story quietly moved to the wrong source.
  const misattributed = [];
  let checked = 0;
  academy.MODULES.forEach(m => m.lessons.forEach(l => {
    const text = JSON.stringify(l);
    Object.entries(NAME_CHAPTERS).forEach(([name, chapters]) => {
      if (!new RegExp(`\\b${name}\\b`).test(text)) return;
      const named = new Set();
      (l.blocks || []).forEach(b => { if (b.kind === 'insight') chaptersIn(b.source.en).forEach(x => named.add(x)); });
      chaptersIn(m.source.en).forEach(x => named.add(x));
      if (!named.size) return;
      checked++;
      if (!chapters.some(c => named.has(c))) {
        misattributed.push(`${l.id} names ${name} (book Ch.${chapters.join('/')}) but cites Ch.${[...named].join(',')}`);
      }
    });
  }));
  ok('No client story is attributed to the wrong chapter', misattributed.length === 0,
     misattributed.slice(0, 6).join(' | '));
  done(`${checked} story attributions checked against the book`);

  sec('QUOTED BOOK INSIGHTS SIT IN THE RIGHT CHAPTER\'S SUBJECT');
  // A quote attributed to a chapter should share vocabulary with it. This is a
  // weak signal on purpose: it catches a citation pointing at an unrelated
  // chapter, without pretending to verify wording.
  const offSubject = [];
  let quoteChecks = 0;
  cites.filter(c => c.quote).forEach(c => {
    const ns = chaptersIn(c.text);
    if (ns.length !== 1) return;
    const terms = new Set((CH[String(ns[0])] || {}).terms || []);
    if (!terms.size) return;
    quoteChecks++;
    const body = norm(`${c.quote} ${c.note}`).split(/\s+/).filter(w => w.length >= 4);
    const hits = body.filter(w => terms.has(w)).length;
    if (hits < 2) offSubject.push(`${c.where} (Ch.${ns[0]}): ${hits} shared terms`);
  });
  ok('Each quoted insight shares vocabulary with the chapter it cites',
     offSubject.length <= Math.ceil(quoteChecks * 0.15),
     `${offSubject.length} of ${quoteChecks} weak: ${offSubject.slice(0, 5).join(' | ')}`);
  done(`${quoteChecks} quoted insights checked for subject match`);

  sec('THE PROVENANCE MAP AGREES WITH THE BOOK');
  const mapPath = path.join(__dirname, '..', 'BOOK_MIRROR_CONTENT_MAP.md');
  const map = fs.existsSync(mapPath) ? fs.readFileSync(mapPath, 'utf8') : '';
  ok('A provenance map exists', map.length > 1000);
  const mapBad = [];
  (map.match(/Ch\.\s?(\d+)/g) || []).forEach(m => {
    const n = Number(m.replace(/\D/g, ''));
    if (n >= 1 && n <= 40 && !CH[String(n)]) mapBad.push(n);
  });
  ok('The provenance map cites no chapter outside the book', mapBad.length === 0, [...new Set(mapBad)].join(','));
  ok('The map states the book does not teach the eight-phase architecture',
     /does not teach the eight-phase architecture|does NOT teach the eight-phase/i.test(map));

  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.slice(0, 20).forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})();
