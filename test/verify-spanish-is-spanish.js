/**
 * IS THE SPANISH ACTUALLY SPANISH?
 *
 * String parity is cheap: two keys, both present, both non-empty, and the test
 * goes green while the Spanish sentence reads "Fase 6 — Recommendation". That
 * is what a Madrid clinic would see, and it is the tell that a product was
 * translated at the surface and not underneath.
 *
 * This walks every bilingual pair the product can emit — the whole curriculum,
 * every case, and a live manager view built from real recorded consultations —
 * and fails any Spanish string that has an English canonical term sitting
 * inside it where the Spanish one exists.
 *
 * It also checks the reverse (a Spanish term stranded in an English sentence),
 * because the same carelessness runs both ways.
 *
 * Run: node test/verify-spanish-is-spanish.js
 */
const path = require('path');
const os = require('os');
const fs = require('fs');

const dbPath = path.join(os.tmpdir(), `mirror-es-${Date.now()}.db`);
process.env.MIRROR_DB = dbPath;

const canonical = require('../server/framework/canonical');
const academy = require('../server/academy/content');
const scenarios = require('../server/scenario');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const section = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);

// ---------------------------------------------------------------------------
// The terms that have a real translation, and therefore must never cross over.
// A term is only checked when the two languages actually differ — "Conexión"
// and "Connection" are different words, but a term that is spelled the same in
// both languages can prove nothing and is skipped.
const PAIRS = [];
canonical.PHASES.forEach(p => {
  const es = (canonical.ES.phases[p.key] || {}).name;
  if (es && es !== p.name) PAIRS.push({ en: p.name, es, what: `phase ${p.n}` });
});
Object.keys(canonical.TRUST_STAGES).forEach(k => {
  const en = canonical.TRUST_STAGES[k].name;
  const es = (canonical.ES.stages[k] || {}).name;
  if (es && es !== en) PAIRS.push({ en, es, what: `trust stage ${canonical.TRUST_STAGES[k].n}` });
});

/**
 * "Understanding" is both a phase and a trust stage, and it is an ordinary
 * English word besides. Matching it as a bare word inside a long sentence
 * produces noise, so a term is only counted when it appears in the shape the
 * bug actually takes: immediately after its label, or in the parentheses that
 * follow a number.
 */
function englishTermLeak(esString) {
  for (const p of PAIRS) {
    const t = p.en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const shapes = [
      new RegExp(`\\((${t})\\)`),                       // "Fase 6 (Recommendation)"
      new RegExp(`(?:Fase|Etapa)\\s*\\d+\\s*[—–-]\\s*${t}\\b`), // "Fase 6 — Recommendation"
      new RegExp(`(?:Fase|Etapa)\\s+de\\s+${t}\\b`, 'i')
    ];
    if (shapes.some(rx => rx.test(esString))) return `${p.what}: English "${p.en}" in a Spanish sentence`;
  }
  return null;
}

function spanishTermLeak(enString) {
  for (const p of PAIRS) {
    const t = p.es.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const shapes = [
      new RegExp(`\\((${t})\\)`),
      new RegExp(`(?:Phase|Stage)\\s*\\d+\\s*[—–-]\\s*${t}\\b`)
    ];
    if (shapes.some(rx => rx.test(enString))) return `${p.what}: Spanish "${p.es}" in an English sentence`;
  }
  return null;
}

/** Every {en, es} pair anywhere in a structure, with the path that reached it. */
function walk(value, at, out) {
  if (!value || typeof value !== 'object') return out;
  if (Array.isArray(value)) { value.forEach((v, i) => walk(v, `${at}[${i}]`, out)); return out; }
  const keys = Object.keys(value);
  if (keys.length === 2 && keys.includes('en') && keys.includes('es')
      && typeof value.en === 'string' && typeof value.es === 'string') {
    out.push({ at, en: value.en, es: value.es });
    return out;
  }
  keys.forEach(k => walk(value[k], `${at}.${k}`, out));
  return out;
}

function check(label, tree) {
  const pairs = walk(tree, label, []);
  const bad = [];
  pairs.forEach(p => {
    const e = englishTermLeak(p.es); if (e) bad.push(`${p.at} — ${e}  «${p.es.slice(0, 110)}»`);
    const s = spanishTermLeak(p.en); if (s) bad.push(`${p.at} — ${s}  «${p.en.slice(0, 110)}»`);
  });
  ok(`${label}: no canonical term is stranded in the wrong language (${pairs.length} pairs)`,
     bad.length === 0, bad.slice(0, 4).join('  |  '));
  return pairs.length;
}

(async () => {
  section('THE CURRICULUM');
  let n = 0;
  academy.MODULES.forEach(m => { n += check(m.id, m); });
  console.log(`  ${n} bilingual pairs across ten modules`);

  // -------------------------------------------------------------------------
  // Money is written differently in the two languages, and the curriculum was
  // once written in both conventions at once — a treatment card whose price
  // pill read "€1,980" and whose body read "1.980 €" three lines below it. A
  // clinic owner being asked for €490 notices that kind of thing.
  section('EACH LANGUAGE USES ITS OWN CURRENCY CONVENTION');
  const EURO_FIRST = /€\s?\d/;          // €1,980 — English
  const EURO_LAST = /\d[\d.,]*\s?€/;    // 1.980 € — Spanish
  const badMoney = { en: [], es: [] };
  const money = (value, at) => {
    if (!value || typeof value !== 'object') return;
    if (typeof value.en === 'string' && typeof value.es === 'string') {
      if (EURO_LAST.test(value.en)) badMoney.en.push(`${at} «${value.en.slice(0, 64)}»`);
      if (EURO_FIRST.test(value.es)) badMoney.es.push(`${at} «${value.es.slice(0, 64)}»`);
      return;
    }
    if (Array.isArray(value)) return value.forEach((v, i) => money(v, `${at}[${i}]`));
    Object.keys(value).forEach(k => money(value[k], `${at}.${k}`));
  };
  academy.MODULES.forEach(m => money(m, m.id));
  ok('English prices read €1,980, never 1.980 €', badMoney.en.length === 0, badMoney.en.slice(0, 3).join(' | '));
  ok('Spanish prices read 1.980 €, never €1,980', badMoney.es.length === 0, badMoney.es.slice(0, 3).join(' | '));
  console.log('  one convention per language, across the whole curriculum');

  section('THE CASE LIBRARY');
  let c = 0;
  scenarios.list().forEach(s => {
    const full = scenarios.get(s.id) || s;
    c += check(s.id, full);
  });
  console.log(`  ${c} bilingual pairs across the case library`);

  // -------------------------------------------------------------------------
  // The manager view is generated at request time from recorded consultations,
  // so its sentences exist nowhere in the source and cannot be checked by
  // reading files. It has to be built.
  section('THE MANAGER VIEW, BUILT FROM REAL CONSULTATIONS');
  const Database = require('../server/database');
  const coach = require('../server/academy/coach');
  const coachingLog = require('../server/academy/coachingLog');
  const db = new Database(dbPath);
  await db.initialize();
  await coachingLog.migrate(db);

  const manager = await db.createUser({ id: 'm1', email: 'mgr@es.test', name: 'Ana', role: 'manager',
    clinicId: 'c1', clinicName: 'Clínica', password: 'a-long-enough-password' });
  await db.createUser({ id: 'p1', email: 'p1@es.test', name: 'Elena', role: 'practitioner',
    clinicId: 'c1', clinicName: 'Clínica', password: 'a-long-enough-password' });
  await db.createUser({ id: 'p2', email: 'p2@es.test', name: 'Rosa', role: 'practitioner',
    clinicId: 'c1', clinicName: 'Clínica', password: 'a-long-enough-password' });
  const practitioners = await db.listPractitioners('c1');

  // Decisions that fail at several phases, so every trust-loss row is populated
  // and the generated sentences actually name phases.
  const PHASES = ['connection', 'discovery', 'understanding', 'education', 'recommendation', 'decisionSupport'];
  let id = 0;
  for (const who of ['p1', 'p2']) {
    for (let k = 0; k < 3; k++) {
      await db.saveAttempt({
        id: 'a' + (++id), practitionerId: who, clinicId: 'c1', scenario: 'beatriz-programme',
        status: 'completed', startedAt: '2026-09-0' + (k + 1) + 'T09:00:00.000Z',
        completedAt: '2026-09-0' + (k + 1) + 'T10:00:00.000Z', currentPhase: 'continuation',
        // Trust-loss rows are built from graded feedback, not from the raw
        // decision, so the feedback has to be here or the phase sentences this
        // test exists to read are never generated at all.
        feedback: PHASES.map(phase => ({
          kind: 'decision', phase,
          feedback: { alignmentVerdict: 'NOT ALIGNED — she agreed to something she had not been told' }
        })),
        decisions: PHASES.map((phase, i) => ({
          phase, optionId: i % 2 ? 'disc-accept' : 'disc-slow',
          alignment: i % 2 ? 'misaligned' : 'aligned',
          consequence: { trustDelta: { understanding: -1 } }
        })),
        artifacts: {}, clientState: { relationshipState: 'ACTIVE' }, decisionOutcome: { outcome: 'DEFER' }
      });
    }
  }
  await coachingLog.record(db, manager, {
    practitionerId: 'p1', patternKey: 'took_the_easy_yes', phase: 'recommendation',
    note: 'Vimos juntas la consulta de Beatriz y le pedí que nombrara el momento en que la clienta estuvo de acuerdo con algo que aún no le habían contado.'
  });

  const attempts = await db.listAttemptsForClinic('c1');
  const view = coach.managerView({
    attempts, progressRows: [], reflectionRows: [], practitioners,
    clinicName: 'Clínica', scenarios: scenarios.list()
  });
  view.coachingEffects = await coachingLog.effects(db, 'c1', attempts, practitioners, coach.PATTERNS);

  const built = walk(view, 'managerView', []);
  ok('The manager view actually produced sentences to check', built.length >= 10, String(built.length));
  check('managerView', view);
  // A test that finds no phase names has proved nothing about phase names.
  ok('The trust-loss rows were actually generated',
     (view.trustLoss || []).length > 0, 'trustLoss was empty — this test would pass vacuously');
  ok('And they name a phase in Spanish',
     (view.trustLoss || []).some(r => /Fase \d+ \([^)]+\)/.test(r.evidence.es)),
     'no Spanish phase reference was generated');
  ok('The week\'s coaching headline names its phase in Spanish too',
     (view.coachThisWeek || []).some(r => /Fase \d/.test(r.title.es))
       || !(view.coachThisWeek || []).some(r => /Phase \d/.test(r.title.en)),
     JSON.stringify((view.coachThisWeek || []).map(r => r.title.es)));
  console.log(`  ${built.length} generated bilingual pairs`);

  // Show the manager's Spanish, so a human can read it rather than trust a tick.
  section('WHAT A SPANISH-SPEAKING MANAGER READS');
  (view.trustLoss || []).slice(0, 2).forEach(r => console.log('  · ' + r.evidence.es));
  (view.coachThisWeek || []).slice(0, 2).forEach(r => console.log('  · ' + r.title.es));
  (view.coachingEffects || []).forEach(r => console.log('  · ' + r.effect.headline.es));

  fs.existsSync(dbPath) && fs.unlinkSync(dbPath);
  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
