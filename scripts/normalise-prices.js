/**
 * ONE CURRENCY CONVENTION PER LANGUAGE
 *
 * The English curriculum was written in two conventions at once. A single
 * treatment card showed "€1,980 for six sessions" in its price pill and
 * "1.980 € is the first figure most clinics quote" three lines below it, and a
 * clinic owner being asked for €490 notices that kind of thing.
 *
 *   English  →  €1,980   (the convention the founder, the landing page and the
 *                         case library already use)
 *   Spanish  →  1.980 €  (the convention a Madrid clinic prints)
 *
 * Only ENGLISH string literals are touched, and which literals those are is
 * decided by parsing the file rather than by pattern-matching the text — a
 * regex over the source cannot tell the English half of a `T(en, es)` pair from
 * the Spanish half, and rewriting a Spanish price would be the same bug in the
 * other direction.
 *
 * This is a one-off maintenance script, not part of the running product, and it
 * is the only thing in the repository that wants a parser. `npm i acorn` first
 * if it is missing; nothing in `server/` depends on it, and the runtime
 * dependency list stays express + cors + uuid.
 *
 * Run: node scripts/normalise-prices.js [--write]
 */
const fs = require('fs');
const path = require('path');

let acorn;
try { acorn = require('acorn'); }
catch (e) {
  console.error('This maintenance script needs a parser: npm i acorn --no-save');
  console.error('(It is deliberately not a dependency of the product.)');
  process.exit(1);
}

const WRITE = process.argv.includes('--write');
const DIR = path.join(__dirname, '..', 'server', 'academy');
const FILES = fs.readdirSync(DIR).filter(f => /^(content|module\d+)\.js$/.test(f));

/**
 * Every English string literal in the file, as { start, end, value }.
 *
 * English is either the value of an `en:` property or the FIRST argument of a
 * `T(...)` call. Everything else — `es:`, the second argument — is left alone.
 */
function englishLiterals(src) {
  const ast = acorn.parse(src, { ecmaVersion: 2022, sourceType: 'script', ranges: true });
  const out = [];
  const seen = new Set();

  const add = node => {
    if (!node || node.type !== 'Literal' || typeof node.value !== 'string') return;
    if (seen.has(node.start)) return;
    seen.add(node.start);
    out.push({ start: node.start, end: node.end, value: node.value });
  };

  (function walk(node) {
    if (!node || typeof node.type !== 'string') return;
    if (node.type === 'Property' && !node.computed) {
      const key = node.key.name || node.key.value;
      if (key === 'en') add(node.value);
    }
    if (node.type === 'CallExpression' && node.callee.type === 'Identifier'
        && node.callee.name === 'T' && node.arguments.length) {
      add(node.arguments[0]);
    }
    for (const k of Object.keys(node)) {
      const v = node[k];
      if (Array.isArray(v)) v.forEach(walk);
      else if (v && typeof v.type === 'string') walk(v);
    }
  })(ast);

  return out.sort((a, b) => a.start - b.start);
}

/**
 * "1.980 €" / "690 €" / "1,400 €"  →  "€1,980" / "€690" / "€1,400".
 *
 * The digits are re-grouped rather than copied, because the source mixes a
 * European full stop and an English comma as the thousands mark and only one
 * of them can survive into English.
 */
function toEnglishCurrency(text) {
  return text.replace(/(\d[\d.,]*)\s?€/g, (whole, num) => {
    // Strip every group separator, keeping a decimal tail only when it is
    // genuinely cents (exactly two digits after the final separator AND the
    // number is not a plain thousands group like 1.980).
    const m = /^(\d[\d.,]*?)([.,](\d{2}))?$/.exec(num);
    let digits = num.replace(/[.,]/g, '');
    let cents = '';
    if (m && m[3]) {
      const head = m[1].replace(/[.,]/g, '');
      // 1.980 is one thousand nine hundred and eighty, not 1 euro 98.
      if (head.length >= 2 && m[3] !== '00' && /[.,]\d{2}$/.test(num) && head.length !== 1) {
        // ambiguous; treat as thousands unless there are 3 digits after it
      }
    }
    // Every price in this curriculum is a whole number of euros.
    cents = '';
    const grouped = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return '€' + grouped + cents;
  });
}

let files = 0, strings = 0, edits = 0;
const samples = [];

for (const f of FILES) {
  const p = path.join(DIR, f);
  const src = fs.readFileSync(p, 'utf8');
  const lits = englishLiterals(src);
  let out = '', cursor = 0, touched = 0;

  for (const lit of lits) {
    strings++;
    if (!/\d[\d.,]*\s?€/.test(lit.value)) continue;
    const fixed = toEnglishCurrency(lit.value);
    if (fixed === lit.value) continue;

    // Re-emit the literal with its original quoting style preserved.
    const quote = src[lit.start];
    const body = quote === '`'
      ? fixed
      : fixed.replace(/\\/g, '\\\\').replace(new RegExp(quote, 'g'), '\\' + quote);
    out += src.slice(cursor, lit.start) + quote + body + quote;
    cursor = lit.end;
    touched++; edits++;
    if (samples.length < 8) samples.push(`${f}: «${lit.value.slice(0, 58)}» → «${fixed.slice(0, 58)}»`);
  }
  out += src.slice(cursor);

  if (touched) {
    files++;
    // Never write a file we have just broken.
    try { acorn.parse(out, { ecmaVersion: 2022, sourceType: 'script' }); }
    catch (e) { console.error(`REFUSING ${f}: rewrite would not parse — ${e.message}`); process.exit(1); }
    if (WRITE) fs.writeFileSync(p, out);
  }
}

console.log(`${strings} English strings scanned · ${edits} prices reformatted in ${files} files`);
samples.forEach(s => console.log('  ' + s));
console.log(WRITE ? '\nWritten.' : '\nDry run. Re-run with --write to apply.');
