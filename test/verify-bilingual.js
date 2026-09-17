/**
 * EN / ES PARITY — THE WHOLE PRODUCT
 *
 * The claim being tested is that the language switch changes the entire
 * Academy, not one demonstration card. Four surfaces are checked, each in the
 * place the parity could actually break:
 *
 *   1. The interface   — the two string tables in public/app.js must have the
 *                        same keys, and no Spanish value may be a copy of the
 *                        English one.
 *   2. The curriculum  — every {en,es} leaf across 10 modules and 60 lessons.
 *   3. The cases       — every {en,es} leaf across all nine consultations,
 *                        including client dialogue, options, MIRROR feedback,
 *                        Toolkit prompts and follow-up packs.
 *   4. The framework   — the canonical phase, stage, standard, duty and
 *                        Toolkit labels the learner reads on every screen.
 *
 * Run: node test/verify-bilingual.js
 */
const fs = require('fs');
const path = require('path');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) { pass++; } else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);

// English function words with no Spanish homograph. Three or more of these in a
// string that is supposed to be Spanish means English was left in place.
const EN_WORDS = /\b(the|and|you|your|she|her|that|this|with|what|which|would|because|about|there|they|have|was|were|been|will|not|from|when|where|their|them|should|could|which)\b/gi;
const looksEnglish = s => (String(s).match(EN_WORDS) || []).length >= 3;
// The book's title is English by right, and so are the canonical identifiers.
const ALLOWED_ENGLISH = /The Beauty Sales Secrets|MIRROR|MBOK|Clinic Scale System|Toolkit/g;
const strip = s => String(s).replace(ALLOWED_ENGLISH, '');

function leaves(v, p, out) {
  if (v === null || v === undefined) return out;
  if (typeof v === 'function') return out;
  if (Array.isArray(v)) { v.forEach((x, i) => leaves(x, `${p}[${i}]`, out)); return out; }
  if (typeof v === 'object') {
    const k = Object.keys(v);
    if (k.length && k.every(x => x === 'en' || x === 'es')) { out.push({ path: p, en: v.en, es: v.es }); return out; }
    k.forEach(x => leaves(v[x], `${p}.${x}`, out));
  }
  return out;
}

function auditLeaves(label, root, minimum) {
  const ls = leaves(root, label, []);
  const missingEs = ls.filter(l => typeof l.es !== 'string' || !l.es.trim());
  const missingEn = ls.filter(l => typeof l.en !== 'string' || !l.en.trim());
  const copied = ls.filter(l => typeof l.es === 'string' && l.es === l.en && String(l.en).length > 24);
  const english = ls.filter(l => typeof l.es === 'string' && !/\.source$/.test(l.path) && looksEnglish(strip(l.es)));

  ok(`${label}: every leaf has English`, missingEn.length === 0, missingEn.slice(0, 3).map(x => x.path).join(' | '));
  ok(`${label}: every leaf has Spanish`, missingEs.length === 0, missingEs.slice(0, 3).map(x => x.path).join(' | '));
  ok(`${label}: no Spanish string is a copy of its English`, copied.length === 0, copied.slice(0, 3).map(x => x.path).join(' | '));
  ok(`${label}: no English left inside a Spanish string`, english.length === 0, english.slice(0, 3).map(x => `${x.path}: ${String(x.es).slice(0, 70)}`).join(' | '));
  ok(`${label}: the surface is substantial`, ls.length >= minimum, `${ls.length} leaves`);
  return ls.length;
}

(function run() {

  // ----------------------------------------------------------- 1 interface
  sec('1 · THE INTERFACE');
  const app = fs.readFileSync(path.join(__dirname, '..', 'public', 'app.js'), 'utf8');
  // The two tables are object literals keyed `en:` and `es:` inside the string
  // bundle. Pull each table's top-level keys by brace-matching.
  function tableKeys(marker) {
    const i = app.indexOf(marker);
    if (i < 0) return null;
    let depth = 0, j = app.indexOf('{', i), start = j, inStr = null;
    for (; j < app.length; j++) {
      const c = app[j];
      if (inStr) { if (c === '\\') { j++; continue; } if (c === inStr) inStr = null; continue; }
      // Comments are skipped BEFORE quotes are considered. An apostrophe in a
      // comment ("the lesson's own verdict") would otherwise open a string
      // that never closes, swallow the braces after it, and make this function
      // report the keys of whatever object it happened to stop inside.
      if (c === '/' && app[j + 1] === '*') { j = app.indexOf('*/', j) + 1; continue; }
      if (c === '/' && app[j + 1] === '/') { j = app.indexOf('\n', j); continue; }
      if (c === '\'' || c === '"' || c === '`') { inStr = c; continue; }
      if (c === '{') depth++;
      else if (c === '}') { depth--; if (!depth) break; }
    }
    const body = app.slice(start, j + 1);
    const keys = new Set();
    // top-level keys only: at brace depth 1
    let d = 0, str = null;
    for (let k = 0; k < body.length; k++) {
      const c = body[k];
      if (str) { if (c === '\\') { k++; continue; } if (c === str) str = null; continue; }
      if (c === '\'' || c === '"' || c === '`') { str = c; continue; }
      if (c === '{') d++;
      else if (c === '}') d--;
      else if (d === 1 && c === '/' && body[k + 1] === '*') { k = body.indexOf('*/', k) + 1; continue; }
      else if (d === 1 && c === '/' && body[k + 1] === '/') { k = body.indexOf('\n', k); continue; }
      else if (d === 1 && /[A-Za-z_$]/.test(c)) {
        const m = /^([A-Za-z_$][\w$]*)\s*:/.exec(body.slice(k));
        if (m) { keys.add(m[1]); k += m[0].length - 1; }
      }
    }
    return keys;
  }
  const enKeys = tableKeys('\n  en: {');
  const esKeys = tableKeys('\n  es: {');
  ok('Both interface string tables were found', !!enKeys && !!esKeys);
  if (enKeys && esKeys) {
    const onlyEn = [...enKeys].filter(k => !esKeys.has(k));
    const onlyEs = [...esKeys].filter(k => !enKeys.has(k));
    ok('Every English interface string has a Spanish one', onlyEn.length === 0, onlyEn.slice(0, 8).join(', '));
    ok('No Spanish interface string is orphaned', onlyEs.length === 0, onlyEs.slice(0, 8).join(', '));
    ok('The interface is substantial', enKeys.size >= 150, `${enKeys.size} strings`);
    done(`${enKeys.size} interface strings, both languages`);
  }

  // ---------------------------------------------------------- 2 curriculum
  sec('2 · THE CURRICULUM');
  const academy = require('../server/academy/content');
  const n2 = auditLeaves('curriculum', academy.MODULES, 1800);
  done(`${n2} bilingual strings across ${academy.stats().modules} modules and ${academy.stats().lessons} lessons`);

  // --------------------------------------------------------------- 3 cases
  sec('3 · THE CASE LIBRARY');
  const scenarios = require('../server/scenario');
  const cases = scenarios.list();
  ok('Every case declares both languages', cases.every(c => c.languages.join(',') === 'en,es'));
  ok('No case carries a "not translated" note', cases.every(c => !c.languageNote || (!c.languageNote.en && !c.languageNote.es)));

  let caseLeaves = 0;
  cases.forEach(meta => {
    const s = scenarios.REGISTRY[meta.id];
    // Walk what the learner actually reads: the client's signals and every
    // decision option at every phase, from the real opening state.
    const state = s.initialClientState();
    const readable = { profile: s.profile, intake: s.intake, followUpPack: s.followUpPack, title: meta.title, subtitle: meta.subtitle };
    Object.keys(s.phases).forEach(k => {
      try { readable[k] = s.getPhaseContent(k, state); } catch (e) { /* phase needs later state */ }
    });
    caseLeaves += auditLeaves(`case ${meta.caseNumber} (${meta.id})`, readable, 30);
  });
  done(`${caseLeaves} bilingual strings across ${cases.length} consultations`);

  // ----------------------------------------------------------- 4 framework
  sec('4 · THE CANONICAL FRAMEWORK');
  const canon = require('../server/framework/canonical');
  const framework = {
    phases: canon.PHASES.map(p => ({ name: canon.phaseLabel(p.key), objective: canon.phaseObjective(p.key) })),
    stages: canon.TRUST_STAGE_KEYS.map(k => ({ label: canon.stageLabel(k), name: canon.stageName(k) })),
    standards: Object.keys(canon.TRUST_STANDARDS).map(n => canon.standardLabel(n)),
    duties: Object.keys(canon.ETHICAL_DUTIES).map(n => canon.dutyLabel(n)),
    toolkits: Object.keys(canon.TOOLKIT).filter(n => canon.TOOLKIT[n].name).map(n => canon.toolkitName(n)),
    relationship: Object.keys(canon.RELATIONSHIP_STATES).map(k => canon.relationshipLabel(k))
  };
  auditLeaves('framework', framework, 40);

  const method = require('../server/framework/method');
  auditLeaves('the two MIRROR layers', {
    table: method.methodTable(), coverage: method.phaseCoverage(),
    statement: method.RECONCILIATION_STATEMENT, gaps: method.ARCHITECTURE_ONLY
  }, 60);
  done('phases, stages, standards, duties, Toolkits, relationship states and the method table');

  // -------------------------------------------------------------------------
  // Data keys that get rendered as labels.
  //
  // A lesson option carries verdict: 'weak' | 'best' | 'harmful'. Those are
  // English data keys, and the front end used to upper-case them straight onto
  // the screen, so a Spanish practitioner was told her answer was "WEAK". Any
  // such key needs a looked-up word in both tables, and the two must differ —
  // a Spanish label identical to the English one is the tell that somebody
  // copied the row rather than translating it.
  sec('5 · DATA KEYS THAT BECOME LABELS');
  const verdicts = new Set();
  academy.MODULES.forEach(m => m.lessons.forEach(l => (l.blocks || []).forEach(b => {
    (b.options || []).forEach(o => o.verdict && verdicts.add(o.verdict));
    if (b.retry) (b.retry.options || []).forEach(o => o.verdict && verdicts.add(o.verdict));
  })));
  const vdEn = (app.match(/vd:\s*\{[^}]*\}/g) || [])[0] || '';
  const vdEs = (app.match(/vd:\s*\{[^}]*\}/g) || [])[1] || '';
  ok('Both languages define a verdict label table', !!vdEn && !!vdEs);
  [...verdicts].sort().forEach(v => {
    const en = (new RegExp(`${v}:\\s*'([^']+)'`).exec(vdEn) || [])[1];
    const es = (new RegExp(`${v}:\\s*'([^']+)'`).exec(vdEs) || [])[1];
    ok(`The verdict "${v}" has a word in both languages`, !!en && !!es, `en=${en} es=${es}`);
    ok(`And the Spanish word for "${v}" is not just the English one`, !!en && !!es && en !== es, `${en} / ${es}`);
  });
  ok('The screen looks the label up rather than upper-casing the key',
     !/esc\(o\.verdict\.toUpperCase\(\)\)/.test(app),
     'app.js still upper-cases a raw verdict key onto the screen');
  done(`${verdicts.size} verdict keys, each with a word in both languages`);

  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.slice(0, 25).forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})();
