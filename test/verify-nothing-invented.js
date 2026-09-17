/**
 * NOTHING IN THIS PRODUCT IS INVENTED
 *
 * A training product sold into a medical-adjacent business has two ways to lose
 * a clinic's trust in a single sentence: name a framework that does not exist,
 * or promise a clinical or commercial outcome it cannot produce.
 *
 * Everything the Academy teaches must trace to one of exactly two sources:
 *   · the book — The Beauty Sales Secrets, 17 real chapters;
 *   · the canonical MIRROR architecture in server/framework/canonical.js.
 *
 * So this checks three things:
 *   1. every structural term the product uses is one of those two sources',
 *      counted and named — no invented phases, stages, standards or duties;
 *   2. no lesson cites a chapter the book does not have;
 *   3. nothing anywhere promises a result — no conversion percentages, no
 *      revenue guarantees, no clinical claims, no efficacy figures.
 *
 * Run: node test/verify-nothing-invented.js
 */
const fs = require('fs');
const path = require('path');

const canonical = require('../server/framework/canonical');
const academy = require('../server/academy/content');
const scenarios = require('../server/scenario');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);
const R = p => fs.readFileSync(path.join(__dirname, '..', p), 'utf8');

const book = JSON.parse(R('test/fixtures/book-index.json'));
// The index keys chapters by number: { "1": {title, words, terms, …}, … }
const CHAPTERS = new Set(Object.keys(book.chapters || {}).map(Number));

/** Every user-facing string the product can emit, with where it came from. */
function allStrings() {
  const out = [];
  const walk = (v, at) => {
    if (!v || typeof v !== 'object') return;
    if (typeof v.en === 'string' && typeof v.es === 'string') {
      out.push({ at, en: v.en, es: v.es });
      return;
    }
    if (Array.isArray(v)) return v.forEach((x, i) => walk(x, `${at}[${i}]`));
    Object.keys(v).forEach(k => walk(v[k], `${at}.${k}`));
  };
  academy.MODULES.forEach(m => walk(m, m.id));
  scenarios.list().forEach(s => walk(scenarios.get(s.id) || s, s.id));
  return out;
}

(async () => {
  const strings = allStrings();

  sec('THE STRUCTURE IS THE CANONICAL ONE, AND NOTHING ELSE');
  ok('Eight phases, no more and no fewer', canonical.PHASES.length === 8, String(canonical.PHASES.length));
  ok('Seven Trust Stages', Object.keys(canonical.TRUST_STAGES).length === 7,
     String(Object.keys(canonical.TRUST_STAGES).length));
  ok('Six Trust Standards', Object.keys(canonical.TRUST_STANDARDS).length === 6,
     String(Object.keys(canonical.TRUST_STANDARDS).length));
  ok('Four Ethical Duties', Object.keys(canonical.ETHICAL_DUTIES).length === 4,
     String(Object.keys(canonical.ETHICAL_DUTIES).length));

  // Every provenance record must point at something real.
  const phases = new Set(canonical.PHASES.map(p => p.key));
  const stages = new Set(Object.keys(canonical.TRUST_STAGES));
  const bad = [];
  academy.MODULES.forEach(m => m.lessons.forEach(l => {
    const p = l.provenance || {};
    const ch = Array.isArray(p.chapter) ? p.chapter : [p.chapter];
    ch.filter(c => c != null).forEach(c => {
      if (!CHAPTERS.has(Number(c))) bad.push(`${l.id} cites chapter ${c}, which the book does not have`);
    });
    if (p.phase && !phases.has(p.phase)) bad.push(`${l.id} names phase "${p.phase}"`);
    if (p.trustStage && !stages.has(p.trustStage)) bad.push(`${l.id} names Trust Stage "${p.trustStage}"`);
    if (p.standard != null && !(p.standard >= 1 && p.standard <= 6)) bad.push(`${l.id} names Standard ${p.standard}`);
    if (p.duty != null && !(p.duty >= 1 && p.duty <= 4)) bad.push(`${l.id} names Duty ${p.duty}`);
    if (p.toolkit != null && !canonical.TOOLKIT[p.toolkit]) bad.push(`${l.id} names Toolkit #${p.toolkit}`);
  }));
  ok('Every lesson traces to a real chapter, phase, stage, standard, duty and Toolkit',
     bad.length === 0, bad.slice(0, 4).join(' | '));
  done(`${academy.MODULES.reduce((n, m) => n + m.lessons.length, 0)} lessons, ${CHAPTERS.size} real chapters`);

  sec('NO FRAMEWORK IS NAMED THAT THE PRODUCT DOES NOT OWN');
  // The shapes an invented framework takes: a capitalised noun phrase followed
  // by a structural word, or a numbered "N Laws/Pillars/Principles of X".
  const INVENTED = [
    /\b(?:the\s+)?\d+\s+(?:pillars?|laws?|principles?|secrets?|steps?|keys?|rules?)\s+of\b/i,
    /\b(?:the\s+)?[A-Z][a-z]+\s+(?:Framework|Formula|Blueprint|Matrix|Methodology|System)\b/,
    /\b(?:los?\s+)?\d+\s+(?:pilares|leyes|principios|secretos|claves)\s+de\b/i
  ];
  // Names the product legitimately owns, from the book or the architecture.
  const OWNED = /\b(?:MIRROR|Trust (?:Stage|Standard)|Ethical Duty|Toolkit|Clinic Scale System|The Beauty Sales Secrets|Preparation Engine|Discovery Engine|Decision Engine|Continuation Engine|Education Engine|Five Engines|Price (?:Moment|Laws?)|Método MIRROR)\b/;
  const invented = [];
  strings.forEach(s => {
    [s.en, s.es].forEach(text => {
      INVENTED.forEach(rx => {
        const m = rx.exec(text);
        if (m && !OWNED.test(m[0])) invented.push(`${s.at}: «${m[0]}»`);
      });
    });
  });
  ok('No invented framework, formula or blueprint is named', invented.length === 0,
     [...new Set(invented)].slice(0, 5).join(' | '));

  sec('NOTHING PROMISES A RESULT');
  // Two families. Commercial: a number attached to conversion or revenue.
  // Clinical: a promise about what a treatment does to a body.
  // "Guarantee" is also an ordinary English verb meaning "ensures", and the
  // curriculum uses it that way ("explaining it as her readiness guarantees the
  // same consultation happens again"). Two lessons also teach ABOUT guarantees,
  // because a practitioner has to know why one is the wrong instrument. Neither
  // is a promise, so the pattern matches only a promise being MADE — an object
  // that is a result, or a first-person undertaking.
  const COMMERCIAL = [
    /\b\d{1,3}\s?%\s*(?:more|increase|uplift|conversion|higher|growth)/i,
    /\b(?:increase|boost|double|triple)s?\s+(?:your\s+)?(?:conversion|revenue|sales|bookings)\b/i,
    /\b(?:we|I)\s+guarantee\b/i,
    /\bguarantee[sd]?\s+(?:you|your|results?|a\s+(?:result|booking|sale|conversion)|success|satisfaction)\b/i,
    /\bguaranteed\s+(?:results?|outcome|success|conversion)\b/i,
    /\b(?:aumenta|duplica|triplica)\s+(?:tus?\s+)?(?:conversi[óo]n|ingresos|ventas)/i,
    /\b(?:te|le|os)\s+garantizo\b|\bgarantizamos\b/i,
    /\bresultados?\s+garantizados?\b/i
  ];
  const CLINICAL = [
    /\b(?:cures?|eliminates?|removes? permanently|permanent results?|risk-free|no side effects?)\b/i,
    /\b(?:clinically proven|proven to)\b/i,
    /\b(?:cura|elimina para siempre|resultados? permanentes?|sin riesgos?|sin efectos secundarios)\b/i
  ];

  /**
   * A clinical claim is a promise about a TREATMENT. The same words do ordinary
   * work elsewhere and must not be flagged there: "a question she can answer
   * without risk" is about a conversation, and "hesitation reframed as a problem
   * that action would cure" is the engine naming a practitioner's mistake, not
   * making a promise. So a clinical pattern only counts when a treatment is
   * named in the same sentence.
   */
  const TREATMENT_NEAR = /\b(?:treatment|toxin|botox|filler|laser|peel|IPL|microneedl|radiofrequenc|thread|PRP|programme|program|session|procedure|tratamiento|toxina|relleno|l[áa]ser|peeling|sesi[óo]n|procedimiento|programa)\b/i;
  const claims = [];
  strings.forEach(s => {
    [['en', s.en], ['es', s.es]].forEach(([lang, text]) => {
      // A sentence that names a claim in order to REFUSE it is the teaching,
      // and is the opposite of the defect.
      const sentences = text.split(/(?<=[.!?])\s+/);
      sentences.forEach(sn => {
        if (/\b(?:never|not|no |cannot|can't|nunca|jam[áa]s|sin prometer|no\s+prometas?)\b/i.test(sn)) return;
        COMMERCIAL.forEach(rx => {
          const m = rx.exec(sn);
          if (m) claims.push(`${s.at} (${lang}): «${m[0]}» in «${sn.slice(0, 70)}»`);
        });
        if (!TREATMENT_NEAR.test(sn)) return;
        CLINICAL.forEach(rx => {
          const m = rx.exec(sn);
          if (m) claims.push(`${s.at} (${lang}): «${m[0]}» in «${sn.slice(0, 70)}»`);
        });
      });
    });
  });
  ok('No commercial or clinical promise is made anywhere in the curriculum or cases',
     claims.length === 0, [...new Set(claims)].slice(0, 5).join('  |  '));
  done(`${strings.length} user-facing strings checked`);

  sec('THE SALES SURFACES MAKE NO PROMISE EITHER');
  ['public/landing.html', 'public/join.html', 'public/reset.html'].forEach(f => {
    const text = R(f).replace(/<style[\s\S]*?<\/style>/g, ' ');
    const hits = [];
    [...COMMERCIAL, ...CLINICAL].forEach(rx => {
      const m = rx.exec(text);
      if (m) hits.push(m[0]);
    });
    ok(`${path.basename(f)} promises no result`, hits.length === 0, hits.join(', '));
  });

  sec('EFFICACY IS NOT CLAIMED BEFORE IT HAS BEEN MEASURED');
  // The founder's own constraint: no efficacy claim before real-user validation.
  const landing = R('public/landing.html');
  ok('The landing page claims no measured outcome for the product itself',
     !/\b\d{1,3}\s?%[^<]{0,40}(?:more|better|higher|conversion)/i.test(landing));
  ok('And it does not claim clinics have already succeeded with it',
     !/\bclinics? (?:have|has) (?:seen|reported|achieved)\b/i.test(landing));

  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.slice(0, 20).forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
