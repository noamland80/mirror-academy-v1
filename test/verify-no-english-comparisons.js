/**
 * THE SCREEN NEVER DECIDES ANYTHING BY COMPARING A TRANSLATED WORD
 *
 * This suite exists because of a bug that every other test in the repository
 * was blind to.
 *
 * The feedback engine writes a competency reading as a WORD, and `send()`
 * localizes it on the way out: ESTABLISHED becomes ESTABLECIDA, STRENGTH
 * becomes FORTALEZA. The debrief screen then asked `reading === 'ESTABLISHED'`.
 * In Spanish that is false for every observation a practitioner could possibly
 * earn — so a Madrid practitioner finished a consultation she had run well and
 * was told that nothing she did had held, with every observation coloured as a
 * failure. In English it was false for STRENGTH too.
 *
 * String-parity tests cannot see this: both languages had all their keys, every
 * sentence was translated, and the defect lived in a comparison. So this checks
 * the comparisons themselves.
 *
 * The rule: a word the server translates must never appear in the front end as
 * a bare equality test. Match it in both languages, or key the decision off
 * something that is not prose.
 *
 * Run: node test/verify-no-english-comparisons.js
 */
const fs = require('fs');
const path = require('path');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);

const R = p => fs.readFileSync(path.join(__dirname, '..', p), 'utf8');
const app = R('public/app.js');

// ---------------------------------------------------------------------------
// Which words does the server actually translate? Read them out of the engines
// rather than listing them here, so a word added later is covered without
// anybody remembering to update this file.
function localizedWords() {
  const out = new Map();
  ['server/feedback/feedbackEngine.js', 'server/engines/decisionEngine.js',
   'server/engines/continuationEngine.js', 'server/academy/coach.js',
   'server/academy/coachingLog.js'].forEach(f => {
    let src = '';
    try { src = R(f); } catch (e) { return; }
    // T('WORD', 'PALABRA') where both sides are short, upper-case labels.
    for (const m of src.matchAll(/T\(\s*'([A-Z][A-Z ]{2,30})'\s*,\s*'([A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ ]{2,30})'\s*\)/g)) {
      if (m[1] !== m[2]) out.set(m[1], m[2]);
    }
  });
  return out;
}

const WORDS = localizedWords();

/**
 * Strip comments and the `T` string tables before scanning.
 *
 * The English word is allowed to appear in a comment explaining this very bug,
 * in a bilingual label table, and inside a regular expression that matches BOTH
 * languages — which is the fix, not the defect.
 */
function scannableCode(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, ' ')     // block comments
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1'); // line comments
}

const code = scannableCode(app);

(async () => {
  sec('WHAT THE SERVER TRANSLATES');
  ok('The engines were read and some translated words found', WORDS.size >= 5, String(WORDS.size));
  done([...WORDS.entries()].map(([a, b]) => `${a}→${b}`).join(' · '));

  sec('THE FRONT END NEVER COMPARES ONE AS A BARE ENGLISH LITERAL');
  const offences = [];
  for (const [en, es] of WORDS) {
    const lit = en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // `x === 'ESTABLISHED'`, `'ESTABLISHED' === x`, `x == "STRENGTH"`,
    // and switch/case on the word.
    const shapes = [
      new RegExp(`[=!]==?\\s*['"\`]${lit}['"\`]`),
      new RegExp(`['"\`]${lit}['"\`]\\s*[=!]==?`),
      new RegExp(`case\\s+['"\`]${lit}['"\`]\\s*:`),
      new RegExp(`\\.includes\\(\\s*['"\`]${lit}['"\`]\\s*\\)`)
    ];
    shapes.forEach(rx => {
      const m = rx.exec(code);
      if (!m) return;
      // A comparison that also names the Spanish word nearby is the fix.
      const around = code.slice(Math.max(0, m.index - 220), m.index + 220);
      if (around.includes(es)) return;
      offences.push(`"${en}" compared as English only  …${m[0]}…`);
    });
  }
  ok('No translated engine word is tested as a raw English string',
     offences.length === 0, offences.slice(0, 5).join(' | '));
  done(`${WORDS.size} translated words checked against four comparison shapes`);

  sec('THE READINGS THAT COUNT AS HELD ARE MATCHED IN BOTH LANGUAGES');
  // The specific fix for the original bug, pinned so it cannot silently regress
  // to an English-only test.
  const holds = /READING_HOLDS\s*=\s*\/\^\(([^)]+)\)/.exec(app);
  ok('The debrief has a both-language test for a reading that held', !!holds,
     'READING_HOLDS is gone — the Spanish debrief is probably broken again');
  if (holds) {
    const alts = holds[1].split('|');
    ['ESTABLISHED', 'ESTABLECIDA', 'STRENGTH', 'FORTALEZA'].forEach(w =>
      ok(`It matches ${w}`, alts.includes(w), holds[1]));
    ok('And it is case-insensitive', /READING_HOLDS[^;]*\/i/.test(app));
  }

  sec('RAW DATABASE AND ENGINE KEYS DO NOT REACH THE SCREEN');
  // A status like `in_progress` is a column value, not a sentence, and printing
  // it is the same failure wearing different clothes.
  const RAW = ['in_progress', 'not_started', 'too_early', 'decisionSupport', 'relationshipState'];
  const printed = [];
  RAW.forEach(k => {
    // Interpolated straight into markup without passing through a label lookup.
    const rx = new RegExp(`\\$\\{[^}]*['"\`]${k}['"\`][^}]*\\}`);
    const m = rx.exec(code);
    if (m && !/Word|Label|label|T\.|t\(\)/.test(m[0])) printed.push(`${k}: ${m[0].slice(0, 70)}`);
  });
  ok('No raw status or phase key is printed into the page', printed.length === 0,
     printed.slice(0, 3).join(' | '));

  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
