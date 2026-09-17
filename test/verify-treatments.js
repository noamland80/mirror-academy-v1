/**
 * THE METHOD, APPLIED TO TREATMENTS A CLINIC ACTUALLY SELLS
 *
 * Fifty-four of the sixty lessons once taught the consultation without ever
 * naming a treatment. A practitioner who injects toxin all day was being asked
 * to carry an abstraction into a room where nothing is abstract.
 *
 * This checks that every lesson applies its own principle to named treatments,
 * that the treatments vary rather than repeating one across a module, that the
 * weak line is genuinely plausible rather than a straw man, and that the
 * before/after conversations compare a practitioner with herself and not with
 * a caricature.
 *
 * Written before the content, deliberately, so that no writer grades their own
 * homework.
 *
 * Run: node test/verify-treatments.js
 */
const academy = require('../server/academy/content');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const section = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);

const bi = v => !!(v && typeof v.en === 'string' && typeof v.es === 'string'
                   && v.en.trim().length && v.es.trim().length);

/** Treatments a Madrid aesthetic clinic actually offers. */
const REAL = [
  /botulinum|botox|toxina|toxin/i,
  /hyaluronic|hialur[óo]nico|filler|relleno/i,
  /skin ?booster|hidrataci[óo]n profunda|mesoterap/i,
  /peel|peeling/i,
  /microneedl|microagujas|dermapen/i,
  /laser|l[áa]ser/i,
  /\bIPL\b|luz pulsada/i,
  /radiofrecuenc|radiofrequenc/i,
  /thread|hilos? tensores?|hilos/i,
  /\bPRP\b|plasma/i,
  /criolip|cryolip|coolsculpt/i,
  /body contour|remodelaci[óo]n corporal|corporal/i,
  /pigmentaci[óo]n|pigmentation|melasma/i,
  /rosacea|ros[áa]cea|vascular/i,
  /acne|acn[ée]/i,
  /depilaci[óo]n/i
];
const namesARealTreatment = s => REAL.some(rx => rx.test(s));

/** A price a clinic would actually quote: a figure with a currency, or a range. */
const looksLikeAPrice = s => /(?:€|\beur\b)\s?\d|\d[\d.,]*\s?(?:€|eur\b)/i.test(s);

(async () => {
  const modules = academy.MODULES;
  let lessons = 0, withTreatments = 0, cards = 0, conversations = 0;
  const allNames = [];

  section('EVERY LESSON APPLIES ITS PRINCIPLE TO A NAMED TREATMENT');
  modules.forEach(m => {
    const perModule = [];
    m.lessons.forEach(l => {
      lessons++;
      const list = l.treatments;
      const has = Array.isArray(list) && list.length >= 2;
      ok(`${l.id} carries at least two treatment-specific examples`, has,
         Array.isArray(list) ? `${list.length} found` : 'none');
      if (!has) return;
      withTreatments++;

      list.forEach((tr, i) => {
        cards++;
        const at = `${l.id} treatment ${i + 1}`;
        ok(`${at} names the treatment in both languages`, bi(tr.name));
        ok(`${at} names a treatment a clinic actually offers`,
           bi(tr.name) && namesARealTreatment(tr.name.en + ' ' + tr.name.es),
           bi(tr.name) ? tr.name.en : '');
        ok(`${at} quotes a price the way a clinic quotes one`,
           bi(tr.price) && looksLikeAPrice(tr.price.en) && looksLikeAPrice(tr.price.es),
           bi(tr.price) ? `${tr.price.en} / ${tr.price.es}` : 'missing');
        ok(`${at} says why this treatment changes the moment`, bi(tr.why));
        ok(`${at} puts the moment in this treatment's own vocabulary`, bi(tr.moment));
        ok(`${at} offers a weak line and what it costs`,
           tr.weak && bi(tr.weak.line) && bi(tr.weak.cost));
        ok(`${at} offers a strong line and what it gains`,
           tr.strong && bi(tr.strong.line) && bi(tr.strong.gain));

        // A weak line nobody would say teaches nothing. It has to be a real
        // sentence a competent practitioner would actually produce.
        if (tr.weak && bi(tr.weak.line)) {
          const w = tr.weak.line.en.trim();
          ok(`${at} the weak line is a sentence somebody would really say`,
             w.length >= 25 && !/^(never|don't|do not|avoid)\b/i.test(w), w.slice(0, 60));
        }
        if (tr.weak && tr.strong && bi(tr.weak.line) && bi(tr.strong.line)) {
          ok(`${at} the two lines are genuinely different`,
             tr.weak.line.en.trim() !== tr.strong.line.en.trim()
             && tr.weak.line.es.trim() !== tr.strong.line.es.trim());
        }
        if (bi(tr.name)) { perModule.push(tr.name.en.toLowerCase()); allNames.push(tr.name.en.toLowerCase()); }
      });
    });

    // A module that runs every lesson on toxin has taught one treatment.
    const distinct = new Set(perModule.map(n => n.split(/[—–-]/)[0].trim()));
    ok(`${m.id} varies the treatment across its lessons`, distinct.size >= 3,
       `${distinct.size} distinct: ${[...distinct].slice(0, 5).join(', ')}`);
  });
  done(`${withTreatments}/${lessons} lessons · ${cards} treatment cards`);

  section('THE CURRICULUM COVERS THE CLINIC, NOT ONE INJECTABLE');
  const covered = REAL.filter(rx => allNames.some(n => rx.test(n)));
  ok('At least eight different treatment families appear across the curriculum',
     covered.length >= 8, `${covered.length} families`);
  done(`${new Set(allNames).size} distinct treatment names across the curriculum`);

  section('NO MEDICAL OR EFFICACY CLAIM IS MADE');
  // The product teaches what is said in the room. It must never drift into
  // telling a practitioner what a treatment achieves clinically.
  const CLAIM = /\b(cures?|guarantees?|permanent(?:ly)?|risk-free|100%|clinically proven|garantiza|permanente|sin riesgos?|cura)\b/i;
  let claims = [];
  modules.forEach(m => m.lessons.forEach(l => (l.treatments || []).forEach((tr, i) => {
    const blob = JSON.stringify(tr);
    // A line that names the claim in order to REFUSE it is the teaching.
    const stripped = blob.replace(/[^"]*\b(?:never|not|no |cannot|nunca|no se puede)\b[^"]*/gi, '');
    const hit = stripped.match(CLAIM);
    if (hit) claims.push(`${l.id}#${i + 1} "${hit[0]}"`);
  })));
  ok('No treatment example promises an outcome', claims.length === 0, claims.slice(0, 4).join(', '));

  section('THE BEFORE/AFTER CONVERSATIONS COMPARE LIKE WITH LIKE');
  modules.forEach(m => {
    const withConv = m.lessons.filter(l => l.conversation);
    ok(`${m.id} has at least one full before/after conversation`, withConv.length >= 1,
       `${withConv.length}`);
    withConv.forEach(l => {
      conversations++;
      const c = l.conversation;
      const at = `${l.id} conversation`;
      ok(`${at} sets the scene`, bi(c.setting));
      ok(`${at} runs long enough to go wrong`,
         Array.isArray(c.before) && c.before.length >= 4 && Array.isArray(c.after) && c.after.length >= 4,
         `${(c.before || []).length} / ${(c.after || []).length} turns`);
      if (Array.isArray(c.before) && Array.isArray(c.after) && c.before.length && c.after.length) {
        // Both versions must start from the identical client line, or the
        // comparison is about the client rather than the practitioner.
        ok(`${at} both versions open on the same client line`,
           bi(c.before[0].line) && bi(c.after[0].line)
           && c.before[0].line.en.trim() === c.after[0].line.en.trim(),
           `${(c.before[0].line || {}).en} ≠ ${(c.after[0].line || {}).en}`);
        ok(`${at} every turn is attributed and bilingual`,
           [...c.before, ...c.after].every(t =>
             ['client', 'practitioner'].includes(t.who) && bi(t.line)));
        // The losing version must be competent. A straw man teaches nobody.
        const beforePrac = c.before.filter(t => t.who === 'practitioner');
        ok(`${at} the version that loses the room is still competent`,
           beforePrac.length >= 2 && beforePrac.every(t => t.line.en.trim().length >= 30),
           `${beforePrac.length} practitioner turns`);
        ok(`${at} the two versions are not the same conversation`,
           JSON.stringify(c.before) !== JSON.stringify(c.after));
      }
      ok(`${at} says what the second version did differently`, bi(c.whatChanged));
      ok(`${at} says what the first version cost`, bi(c.cost));
    });
  });
  done(`${conversations} before/after conversations`);

  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.slice(0, 30).forEach(f => console.log('  · ' + f)); }
  if (failures.length > 30) console.log(`  … and ${failures.length - 30} more`);
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
