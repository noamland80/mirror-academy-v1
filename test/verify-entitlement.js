/**
 * ONE ENTITLEMENT, SAID THE SAME EVERYWHERE
 *
 * The Founding Pilot's seat count is governance, not a number somebody types
 * into a page. It shipped as ten in `tenancy.js` and as "up to ten
 * practitioners" in the English and Spanish buyer copy, and when the approved
 * entitlement became five, every one of those places had to move together or a
 * clinic would have been sold one thing and given another.
 *
 * So the plan is the single source of truth, and this checks that nothing
 * anywhere states a different number: not the API, not the landing page, not
 * the in-product copy, in either language.
 *
 * Run: node test/verify-entitlement.js
 */
const fs = require('fs');
const path = require('path');

const tenancy = require('../server/tenancy');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);
const R = p => fs.readFileSync(path.join(__dirname, '..', p), 'utf8');

const PLAN = tenancy.PLANS.founding_pilot;
const SEATS = PLAN.seats;
const PRICE = PLAN.priceEur;

// The number written as a word, in both languages, so prose is checked too.
const WORD = {
  1: ['one', 'un', 'una'], 2: ['two', 'dos'], 3: ['three', 'tres'], 4: ['four', 'cuatro'],
  5: ['five', 'cinco'], 6: ['six', 'seis'], 7: ['seven', 'siete'], 8: ['eight', 'ocho'],
  9: ['nine', 'nueve'], 10: ['ten', 'diez'], 12: ['twelve', 'doce'], 15: ['fifteen', 'quince'],
  20: ['twenty', 'veinte'], 25: ['twenty-five', 'veinticinco']
};
const ANY_NUMBER_WORD = Object.values(WORD).flat().join('|');

/**
 * An ENTITLEMENT claim: what the plan grants. Specifically
 *   "up to N practitioners / practitioner accounts"
 *   "hasta N profesionales / cuentas de profesionales"
 *   "N seats" / "N plazas"
 *
 * Deliberately narrow. The product is full of numbers about practitioners that
 * are not entitlements and must not be dragged in: "across 3 practitioners" in
 * a sample of manager evidence, "Three of five practitioners moved to price" in
 * a coaching sentence, "the six steps a practitioner runs" (the method), "the
 * nine stages her practitioners read" (the arc). Matching a bare
 * "<number> practitioners" flagged all four, which is an instrument fault, not
 * a copy fault — so the entitlement marker is required.
 */
function seatClaims(text) {
  const PEOPLE = '(?:practitioner accounts?|practitioners?|profesionales|cuentas de profesionales)';
  const SEAT = '(?:seats?|plazas)';
  const out = [];
  const push = (raw, n) => out.push({ said: n, text: raw.trim() });
  const wordToN = w => Number(Object.keys(WORD).find(k => WORD[k].includes(w.toLowerCase())));

  // "up to 5 practitioners" / "hasta cinco profesionales"
  const upto = new RegExp(`\\b(?:up to|hasta)\\s+(\\d{1,3}|${ANY_NUMBER_WORD})\\s+(?:[a-zá-úñ'’]+\\s+){0,2}?${PEOPLE}\\b`, 'gi');
  let m;
  while ((m = upto.exec(text))) push(m[0], /^\d+$/.test(m[1]) ? Number(m[1]) : wordToN(m[1]));

  // "5 seats" / "cinco plazas"
  const seats = new RegExp(`\\b(\\d{1,3}|${ANY_NUMBER_WORD})\\s+${SEAT}\\b`, 'gi');
  while ((m = seats.exec(text))) push(m[0], /^\d+$/.test(m[1]) ? Number(m[1]) : wordToN(m[1]));

  return out;
}

/** A claim of 1 is about the clinic ("one clinic"), never about seats. */
const isSeatClaim = c => Number.isFinite(c.said) && c.said !== 1;

(async () => {
  sec('THE PLAN IS THE SOURCE OF TRUTH');
  ok('The Founding Pilot exists', !!PLAN);
  ok(`It grants ${SEATS} seats`, SEATS === 5, String(SEATS));
  ok(`It costs €${PRICE} one-time`, PRICE === 490, String(PRICE));
  ok('Its description is bilingual, because a buyer reads it',
     PLAN.description && typeof PLAN.description.en === 'string' && typeof PLAN.description.es === 'string',
     JSON.stringify(PLAN.description).slice(0, 80));
  ok('And the Spanish is not just the English',
     PLAN.description.en !== PLAN.description.es);
  ['en', 'es'].forEach(l =>
    ok(`Its ${l} description states that seat count`,
       seatClaims(PLAN.description[l]).filter(isSeatClaim).every(c => c.said === SEATS),
       PLAN.description[l]));
  done(`${PLAN.name}: €${PRICE}, ${SEATS} seats`);

  sec('NOTHING SURFACED STATES A DIFFERENT NUMBER');
  const SURFACES = [
    ['public/landing.html', 'the landing page (EN + ES copy tables)'],
    ['public/app.js', 'in-product copy (EN + ES)'],
    ['public/join.html', 'the practitioner join page'],
    ['public/reset.html', 'the password reset page'],
    ['server/tenancy.js', 'tenancy'],
    ['server/index.js', 'the API'],
    ['server/commercial.js', 'the commercial surfaces']
  ];
  SURFACES.forEach(([f, label]) => {
    let text = '';
    try { text = R(f); } catch (e) { return; }
    const wrong = seatClaims(text).filter(isSeatClaim).filter(c => c.said !== SEATS);
    ok(`${label} states ${SEATS}, never another number`,
       wrong.length === 0, [...new Set(wrong.map(w => `«${w.text}»`))].slice(0, 4).join(' | '));
  });

  sec('NO SEAT COUNT IS HARD-CODED AWAY FROM THE PLAN');
  // A literal fallback is how the two drift apart the next time this changes.
  const tenancySrc = R('server/tenancy.js');
  const planBlock = (tenancySrc.match(/const PLANS = \{[\s\S]*?\n\};/) || [''])[0];
  const outside = tenancySrc.replace(planBlock, '');
  ok('seatUsage falls back to the plan, not to a literal',
     !/\|\|\s*\d+\s*,\s*used:/.test(outside),
     (outside.match(/\|\|\s*\d+\s*,\s*used:.*/) || [])[0]);
  ok('The demo clinic is registered with the plan\'s seat count',
     !/'founding_pilot',\s*\d+\s*,\s*'waived'/.test(tenancySrc),
     (tenancySrc.match(/'founding_pilot',\s*\d+\s*,\s*'waived'/) || [])[0]);

  sec('THE API SERVES THE SAME ENTITLEMENT');
  const dbPath = path.join(require('os').tmpdir(), `mirror-ent-${Date.now()}.db`);
  process.env.MIRROR_DB = dbPath;
  const { app, bootstrap } = require('../server/index');
  await bootstrap();
  const server = app.listen(0);
  await new Promise(r => server.once('listening', r));
  const base = 'http://127.0.0.1:' + server.address().port;

  for (const lang of ['en', 'es']) {
    const r = await fetch(base + '/api/plan', { headers: { 'X-Mirror-Lang': lang } });
    const j = await r.json();
    ok(`${lang}: /api/plan reports ${SEATS} seats`, j.plan && j.plan.seats === SEATS,
       JSON.stringify(j.plan && j.plan.seats));
    ok(`${lang}: /api/plan reports €${PRICE}`, j.payment && j.payment.amount === PRICE,
       String(j.payment && j.payment.amount));
    const claims = seatClaims(JSON.stringify(j)).filter(isSeatClaim).filter(c => c.said !== SEATS);
    ok(`${lang}: its description states no other number`, claims.length === 0,
       claims.map(c => c.text).join(' | '));
    done(`${lang}: ${j.plan.description}`);
  }

  sec('A CLINIC IS ACTUALLY CREATED WITH THAT MANY SEATS');
  // Reuse the database bootstrap() already brought up: a second, uninitialised
  // Database instance has no connection and fails on its first query.
  const db = require('../server/index').db;
  const made = await tenancy.createPilotClinic(db, {
    clinicName: 'Clínica Entitlement', managerName: 'Ana', managerEmail: 'ana@ent.test'
  });
  ok('The clinic row carries the plan\'s seat count', made.clinic.seats === SEATS, String(made.clinic.seats));
  const usage = await tenancy.seatUsage(db, made.clinic.id);
  ok('Seat usage reports the same total', usage.total === SEATS, String(usage.total));

  // Fill every remaining seat, then prove the next invitation is refused.
  const mgr = await db.getUserByEmail('ana@ent.test');
  let issued = 0, refusal = null;
  for (let i = 1; i <= SEATS + 2; i++) {
    try { await tenancy.createInvite(db, mgr, { name: `P${i}`, email: `p${i}@ent.test` }); issued++; }
    catch (e) { refusal = e.message; break; }
  }
  ok(`Exactly ${SEATS - 1} practitioners can be invited beside the manager`,
     issued === SEATS - 1, `${issued} issued`);
  ok('The seat after that is refused, naming the plan\'s limit',
     !!refusal && refusal.includes(String(SEATS)), refusal);
  done(refusal);

  server.close();
  fs.existsSync(dbPath) && fs.unlinkSync(dbPath);
  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
