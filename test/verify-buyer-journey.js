/**
 * THE WHOLE JOURNEY, END TO END, AS A STRANGER WALKS IT
 *
 *   visitor meets Carmen → pays €490 → Stripe confirms → she chooses a
 *   password → her clinic exists → she is the manager → she onboards → she is
 *   sent to a consultation she recognises → she invites four practitioners →
 *   the fifth is refused → a practitioner activates → onboards → gets her own
 *   first case
 *
 * Every HTTP request in the product is real. Stripe is a local stand-in that
 * speaks the same API and signs webhooks with the same scheme (see
 * test/helpers/stripe-stub.js), so signature verification, idempotency and
 * order state are exercised against real bytes. Nothing simulates a payment
 * inside the product.
 *
 * THE CASES THAT ACTUALLY BREAK THIS IN PRODUCTION, EACH TESTED:
 *   · the webhook arrives twice          (Stripe retries on every timeout)
 *   · the webhook arrives before the buyer's browser does, and after
 *   · the buyer opens the success URL for an order that was never paid
 *   · two browser tabs both try to create the clinic from one purchase
 *   · the payment is refunded after the clinic is live
 *   · a practitioner is withdrawn and her seat comes back
 *   · a withdrawn practitioner's live session stops working immediately
 *
 * Run: node test/verify-buyer-journey.js
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const { createStripeStub } = require('./helpers/stripe-stub');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);

(async () => {
  // ---- Stripe stand-in, and the environment the product reads ----
  const stub = createStripeStub();
  const stubUrl = await stub.listen();
  process.env.STRIPE_API_BASE = stubUrl;
  process.env.STRIPE_SECRET_KEY = stub.secretKey;
  process.env.STRIPE_WEBHOOK_SECRET = stub.webhookSecret;
  delete process.env.MAIL_PROVIDER;           // no mail provider: the honest default
  delete process.env.MIRROR_PUBLIC_URL;

  const dbPath = path.join(os.tmpdir(), `mirror-journey-${Date.now()}.db`);
  process.env.MIRROR_DB = dbPath;
  const { app, db, bootstrap } = require('../server/index');
  await bootstrap();
  const server = app.listen(0);
  await new Promise(r => server.once('listening', r));
  const base = 'http://127.0.0.1:' + server.address().port;

  const J = (extra = {}) => Object.assign({ 'Content-Type': 'application/json' }, extra);
  const post = (p, body, headers) => fetch(base + p, { method: 'POST', headers: J(headers), body: JSON.stringify(body || {}) });
  const get = (p, headers) => fetch(base + p, { headers: headers || {} });
  const AS = tok => ({ Authorization: 'Bearer ' + tok });

  /** Deliver a webhook exactly as Stripe would: raw body + signature header. */
  async function deliver(type, obj, opts = {}) {
    const { raw, header, event } = stub.signEvent(type, obj, opts);
    const r = await fetch(base + '/api/stripe/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Stripe-Signature': header },
      body: raw
    });
    return { status: r.status, body: await r.json().catch(() => ({})), event };
  }

  const plan = require('../server/tenancy').PLANS.founding_pilot;

  // =========================================================================
  sec('A STRANGER ARRIVES AND MEETS CARMEN');
  const root = await get('/');
  ok('The root serves the commercial page, not a login box', root.status === 200);
  const rootHtml = await root.text();
  ok('And it is the page with Carmen on it', /id="meet"/.test(rootHtml));
  ok('The product itself is at /app', (await get('/app')).status === 200);
  const s = await (await get('/api/sample')).json();
  ok('She can play the sample with no account', s.kind === 'public_sample');

  // =========================================================================
  sec('SHE BUYS');
  const buyer = { email: 'ana@clinicaluz.es', clinicName: 'Clínica Luz', managerName: 'Ana Beltrán', country: 'ES' };
  const co = await post('/api/checkout', buyer);
  ok('POST /api/checkout is accepted', co.status === 200, String(co.status));
  const coj = await co.json();
  ok('It returns a Stripe Checkout URL', /^https:\/\/checkout\.stripe\.test\//.test(coj.url || ''), coj.url);
  ok('It names the order', /^mo_/.test(coj.orderId || ''), coj.orderId);
  ok('And it says this is test mode, because the key is a test key', coj.testMode === true);

  const sess = stub.lastSession();
  ok('Stripe was asked for €490 in cents', sess.amount_total === plan.priceEur * 100, String(sess.amount_total));
  ok('In euros', sess.currency === 'eur', sess.currency);
  ok('Once, not as a subscription', sess.mode === 'payment', sess.mode);
  ok('With the order as the client reference', sess.client_reference_id === coj.orderId);
  ok('And her address, so Stripe can send its own receipt', sess.customer_email === buyer.email);
  ok('The success URL comes back to this instance', String(sess.success_url).includes('/welcome?order=' + coj.orderId));
  ok('The request carried an idempotency key', !!stub.checkoutRequests()[0].headers['idempotency-key']);
  done(`€${plan.priceEur} · ${sess.id}`);

  sec('HER RETURN PAGE IS HONEST WHILE STRIPE IS STILL THINKING');
  const pending = await (await get('/api/orders/' + coj.orderId)).json();
  ok('The order reads pending', pending.state === 'pending', pending.state);
  ok('No setup token exists yet', pending.setupToken === null, String(pending.setupToken));
  ok('And it says so in words', /not confirmed/i.test(String(pending.message)), String(pending.message));

  sec('A BROWSER THAT ARRIVES CLAIMING SUCCESS GETS NOTHING');
  const forged = await post('/api/clinics/from-order', { setupToken: 'not-a-real-token', password: 'Choosing-my-own-9281' });
  ok('An invented setup token is refused', forged.status === 404, String(forged.status));
  const noClinic = await db.get(`SELECT COUNT(*) n FROM clinics WHERE name = ?`, [buyer.clinicName]);
  ok('And no clinic was created', noClinic.n === 0, String(noClinic.n));

  // =========================================================================
  sec('STRIPE CONFIRMS');
  const paid = stub.paidSession(sess.id);
  const wh = await deliver('checkout.session.completed', paid);
  ok('The webhook is accepted', wh.status === 200, String(wh.status));
  ok('And reports what it did', /marked paid/.test(String(wh.body.outcome)), String(wh.body.outcome));
  const afterPaid = await (await get('/api/orders/' + coj.orderId)).json();
  ok('The order is paid', afterPaid.state === 'paid', afterPaid.state);
  ok('A setup token now exists', typeof afterPaid.setupToken === 'string' && afterPaid.setupToken.length >= 32);
  ok('The amount is what was actually charged', afterPaid.amountEur === plan.priceEur, String(afterPaid.amountEur));
  const setupToken = afterPaid.setupToken;

  sec('THE SAME WEBHOOK AGAIN CHANGES NOTHING');
  // Stripe retries after any timeout, so this is the normal case.
  const again = await deliver('checkout.session.completed', paid, { id: wh.event.id });
  ok('The duplicate is accepted, not errored', again.status === 200, String(again.status));
  ok('And recognised as a duplicate', again.body.duplicate === true, JSON.stringify(again.body));
  const ordersNow = await db.get(`SELECT COUNT(*) n FROM orders WHERE email = ?`, [buyer.email]);
  ok('There is still one order', ordersNow.n === 1, String(ordersNow.n));
  const stillToken = (await (await get('/api/orders/' + coj.orderId)).json()).setupToken;
  ok('And the setup token did not change', stillToken === setupToken);

  sec('A WEBHOOK WITH A BAD SIGNATURE IS REFUSED');
  const bad = await deliver('checkout.session.completed', paid, { secret: 'whsec_wrong' });
  ok('A wrong secret is a 400, never a 200', bad.status === 400, String(bad.status));
  const old = await deliver('checkout.session.completed', paid, { timestamp: Math.floor(Date.now() / 1000) - 4000 });
  ok('A replayed old signature is refused on its timestamp', old.status === 400, String(old.status));
  const unsigned = await fetch(base + '/api/stripe/webhook', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: 'evt_x', type: 'x' })
  });
  ok('An unsigned webhook is refused', unsigned.status === 400, String(unsigned.status));

  // =========================================================================
  sec('SHE CHOOSES HER PASSWORD AND HER CLINIC EXISTS');
  const short = await post('/api/clinics/from-order', { setupToken, password: 'short' });
  ok('A short password is refused', short.status === 400, String(short.status));
  const created = await post('/api/clinics/from-order', { setupToken, password: 'Mi-propia-clave-2026' });
  ok('Creation succeeds', created.status === 201, String(created.status));
  const cj = await created.json();
  ok('She is the manager', cj.user && cj.user.role === 'manager', JSON.stringify(cj.user && cj.user.role));
  ok('Of the clinic she named', cj.clinic.name === buyer.clinicName, cj.clinic.name);
  ok('With the entitlement the plan grants, not a number from the order',
     cj.clinic.seats === plan.seats, String(cj.clinic.seats));
  ok('She is signed in immediately', typeof cj.token === 'string' && cj.token.length > 20);
  ok('Her address is not verified yet', cj.user.emailVerified === false);
  ok('And with no mail provider the verification link is handed back rather than claimed as sent',
     cj.verification.delivered === false && /\/verify\?token=/.test(String(cj.verification.link)),
     JSON.stringify(cj.verification));
  const mgrToken = cj.token;
  const verifyLink = cj.verification.link;
  done(`${cj.clinic.name} · ${cj.clinic.seats} seats · manager ${cj.user.email}`);

  sec('THE SETUP TOKEN IS SPENT');
  const twice = await post('/api/clinics/from-order', { setupToken, password: 'Otra-clave-distinta-7' });
  ok('A second tab cannot create a second clinic', twice.status === 404 || twice.status === 409, String(twice.status));
  const clinicCount = await db.get(`SELECT COUNT(*) n FROM clinics WHERE name = ?`, [buyer.clinicName]);
  ok('There is exactly one clinic', clinicCount.n === 1, String(clinicCount.n));

  sec('SHE CONFIRMS HER ADDRESS');
  const vtok = new URL(verifyLink).searchParams.get('token');
  const v = await post('/api/email-verifications/' + vtok + '/use', {});
  ok('The link verifies her', v.status === 200, String(v.status));
  const me = await (await get('/api/auth/me', AS(mgrToken))).json();
  ok('And the account says so', me.user.emailVerified === true);
  const vAgain = await post('/api/email-verifications/' + vtok + '/use', {});
  ok('The link is single-use', vAgain.status === 400, String(vAgain.status));

  // =========================================================================
  sec('SHE IS ASKED SEVEN THINGS, AND EVERY ONE IS USED');
  const ob = await (await get('/api/onboarding', AS(mgrToken))).json();
  ok('She is not onboarded yet', ob.complete === false);
  ok('She is addressed by her first name', ob.firstName === 'Ana', ob.firstName);
  ok('The hardest-situation question is asked in the client\'s own words',
     /think about it|caro|descuento|pensar/i.test(JSON.stringify(ob.questions.hardest.options)));
  ok('A manager is asked about her team, not about herself',
     /your team/i.test(String(ob.questions.hardest.ask)), String(ob.questions.hardest.ask));
  ok('Nothing asks her to self-report sales performance',
     !/conversion|target|revenue|quota|close rate/i.test(JSON.stringify(ob.questions)));

  const saved = await post('/api/onboarding', {
    experience: 'experienced', categories: ['injectables', 'skin'],
    hardest: 'think_about_it', goal: 'less_pushy'
  }, AS(mgrToken));
  ok('Her answers are accepted', saved.status === 201, String(saved.status));
  const sj = await saved.json();
  ok('Her first win greets her by name, in the language she is reading',
     /^Hello Ana\.$/.test(String(sj.firstWin.greeting)), String(sj.firstWin.greeting));
  {
    const esWin = await (await post('/api/onboarding', {
      experience: 'experienced', categories: ['injectables'], hardest: 'think_about_it', goal: 'less_pushy'
    }, Object.assign(AS(mgrToken), { 'X-Mirror-Lang': 'es' }))).json();
    ok('And in Spanish for a Spanish reader', /^Hola Ana\.$/.test(String(esWin.firstWin.greeting)),
       String(esWin.firstWin.greeting));
    ok('Whose quoted words are also Spanish',
       /pensar|tengo que/i.test(String(esWin.firstWin.said)), String(esWin.firstWin.said));
  }
  {
    // The sentence must be HER reason, not one fixed clause pinned onto
    // whichever situation she picked. Every situation is checked, in both
    // languages, because the first draft told a practitioner who chose "it's
    // too expensive" that she had said something about knowing when to stop.
    const ob = require('../server/onboarding');
    let wrong = [];
    for (const h of ob.HARD_SITUATIONS) {
      for (const lang of ['en', 'es']) {
        const w = ob.firstWin({ user: { name: 'Elena Duarte', role: 'practitioner' },
                                profile: { hardest: h.key } });
        const said = w.said[lang];
        const quote = h.said[lang].replace(/[“”«»".]/g, '').trim();
        const why = h.why[lang].replace(/^./, c => c.toLowerCase()).trim();
        if (!said.includes(quote)) wrong.push(`${h.key}/${lang}: quote missing`);
        if (!said.toLowerCase().includes(why.toLowerCase().slice(0, 18))) wrong.push(`${h.key}/${lang}: not her reason`);
        // Spanish keeps Spanish quotation marks; English keeps English ones.
        if (lang === 'es' && /[“”]/.test(said)) wrong.push(`${h.key}/es: English quote marks`);
        if (lang === 'en' && /[«»]/.test(said)) wrong.push(`${h.key}/en: Spanish quote marks`);
        // A question she asks stays a question.
        if (/\?/.test(h.said[lang]) && !/\?/.test(said)) wrong.push(`${h.key}/${lang}: lost its question mark`);
      }
    }
    ok(`All ${ob.HARD_SITUATIONS.length} situations quote her words and her own reason, in both languages`,
       wrong.length === 0, wrong.slice(0, 4).join(' | '));
  }
  ok('A manager is not sent to a consultation she cannot record',
     sj.firstWin.forManager === true && sj.firstWin.opens === 'first_moment',
     JSON.stringify({ forManager: sj.firstWin.forManager, opens: sj.firstWin.opens }));
  ok('It quotes what she said back to her', /think about it/i.test(String(sj.firstWin.said)), String(sj.firstWin.said));
  ok('It does not conclude anything about her',
     !/you are (weak|bad|poor)|your weakness|struggle with/i.test(String(sj.firstWin.said)));
  ok('And it sends her to a real case', !!require('../server/scenario').get(sj.firstWin.scenario), sj.firstWin.scenario);
  ok('It never counts what is left to finish',
     !/\b60\b|sixty lessons|lessons remaining/i.test(JSON.stringify(sj.firstWin)));
  done(`${sj.firstWin.greeting} → ${sj.firstWin.scenario}`);

  sec('GARBAGE IN THE ANSWERS IS DROPPED, NOT STORED');
  await post('/api/onboarding', {
    experience: 'wizard', categories: ['injectables', 'astrology'], hardest: 'nonsense', goal: 'world_peace'
  }, AS(mgrToken));
  const prof = await db.get(`SELECT * FROM onboarding WHERE user_id = ?`, [cj.user.id]);
  ok('An invented experience level is not stored', prof.experience === null, String(prof.experience));
  ok('An invented category is filtered out', prof.categories === '["injectables"]', prof.categories);
  ok('An invented situation is not stored', prof.hardest === null, String(prof.hardest));
  // Put her real answers back for the rest of the run.
  await post('/api/onboarding', { experience: 'experienced', categories: ['injectables'], hardest: 'think_about_it', goal: 'less_pushy' }, AS(mgrToken));

  // =========================================================================
  sec('SHE INVITES HER TEAM, AND THE FIFTH SEAT IS THE LIMIT');
  const invites = [];
  for (let i = 1; i <= 4; i++) {
    const r = await post('/api/invites', { name: `Práctica ${i}`, email: `p${i}@clinicaluz.es` }, AS(mgrToken));
    if (r.status === 201) invites.push(await r.json());
  }
  ok('Four practitioners can be invited beside her', invites.length === 4, String(invites.length));
  const fifth = await post('/api/invites', { name: 'Una más', email: 'p5@clinicaluz.es' }, AS(mgrToken));
  ok('The next one is refused', fifth.status === 409, String(fifth.status));
  const fj = await fifth.json();
  ok('And the refusal names five', /\b5\b/.test(fj.error) && !/\b10\b/.test(fj.error), fj.error);
  ok('With no mail provider, the manager is told nothing was emailed',
     invites[0].emailed === false, String(invites[0].emailed));
  ok('And is handed a message she can paste', /clinicaluz|Clínica Luz/.test(JSON.stringify(invites[0].message)));
  done(fj.error);

  sec('SHE CAN TAKE AN INVITATION BACK AND THE SEAT RETURNS');
  const before = (await (await get('/api/clinic', AS(mgrToken))).json()).seats
    || await require('../server/tenancy').seatUsage(db, cj.clinic.id);
  const rev = await post('/api/invites/' + invites[3].invite.token + '/revoke', {}, AS(mgrToken));
  ok('An open invitation can be withdrawn', rev.status === 200, String(rev.status));
  const rj = await rev.json();
  ok('And the seat is free again', rj.seats.used === 4, JSON.stringify(rj.seats));
  const deadLink = await get('/api/invites/' + invites[3].invite.token);
  ok('The withdrawn link is dead', deadLink.status === 404 || (await deadLink.json()).state !== 'open', String(deadLink.status));
  const refill = await post('/api/invites', { name: 'Otra', email: 'p5@clinicaluz.es' }, AS(mgrToken));
  ok('So the seat can be used for somebody else', refill.status === 201, String(refill.status));
  const p5 = await refill.json();

  // =========================================================================
  sec('A PRACTITIONER ACTIVATES AND GETS HER OWN FIRST CASE');
  const acc = await post('/api/invites/' + invites[0].invite.token + '/accept', { password: 'Mi-clave-propia-4471' });
  ok('She sets her own password', acc.status === 201, String(acc.status));
  const aj = await acc.json();
  ok('And is signed in', typeof aj.token === 'string');
  ok('As a practitioner', aj.user.role === 'practitioner', aj.user.role);
  ok('In the clinic that invited her', aj.user.clinicId === cj.clinic.id);
  const pracToken = aj.token;

  const pw = await (await get('/api/first-win', AS(pracToken))).json();
  ok('Before onboarding, she is sent to onboarding — not to sixty lessons',
     pw.needsOnboarding === true, JSON.stringify(pw).slice(0, 80));
  const pob = await (await get('/api/onboarding', AS(pracToken))).json();
  ok('A practitioner is asked about herself, not about a team',
     /hardest for you/i.test(String(pob.questions.hardest.ask)), String(pob.questions.hardest.ask));
  const pSaved = await (await post('/api/onboarding', {
    experience: 'some', categories: ['skin'], hardest: 'too_expensive', goal: 'price_confidence'
  }, AS(pracToken))).json();
  ok('Her first win is hers, not the manager\'s',
     pSaved.firstWin.scenario !== sj.firstWin.scenario, `${pSaved.firstWin.scenario} vs ${sj.firstWin.scenario}`);
  ok('And it quotes the situation SHE named',
     /expensive|caro/i.test(String(pSaved.firstWin.said)), String(pSaved.firstWin.said));
  done(`${pSaved.firstWin.greeting} → ${pSaved.firstWin.scenario}`);

  sec('SHE CAN ACTUALLY START THAT CASE');
  const att = await post('/api/attempts', { scenarioId: pSaved.firstWin.scenario }, AS(pracToken));
  ok('The case her onboarding named opens', att.status === 201 || att.status === 200, String(att.status));

  // =========================================================================
  sec('WITHDRAWING A COLLEAGUE STOPS HER SESSION NOW, NOT AT NEXT LOGIN');
  const stillWorks = await get('/api/auth/me', AS(pracToken));
  ok('Her session works before', stillWorks.status === 200, String(stillWorks.status));
  const revoked = await post('/api/team/' + aj.user.id + '/revoke', { reason: 'left the clinic' }, AS(mgrToken));
  ok('The manager can withdraw her', revoked.status === 200, String(revoked.status));
  const nowDead = await get('/api/auth/me', AS(pracToken));
  // Her session is DESTROYED, not merely refused, so the token she is holding
  // is now an unknown token and the honest answer is 401. Telling an unknown
  // token "that account was revoked" would hand account state to anybody
  // holding an old one, so the reason is given at the next login instead,
  // where a correct password proves she is the person asking.
  ok('Her existing session stops immediately', nowDead.status === 401, String(nowDead.status));
  const relogin = await post('/api/auth/login', { email: aj.user.email, password: 'Mi-clave-propia-4471' });
  ok('Her password no longer gets her in', relogin.status === 403, String(relogin.status));
  const rlj = await relogin.json();
  ok('With the real reason, not "invalid credentials"', rlj.code === 'ACCOUNT_REVOKED', rlj.code);
  ok('And it is told to her in words, pointing at who can fix it',
     /withdrawn/i.test(String(rlj.error)) && /manager/i.test(String(rlj.error)), String(rlj.error));
  // And the middleware refusal is reached too, for the case an operator flips
  // a clinic's state in the database without deleting anybody's session.
  {
    const live = await (await post('/api/auth/login', { email: buyer.email, password: 'Mi-propia-clave-2026' })).json();
    await db.run(`UPDATE clinics SET payment_state = 'lapsed' WHERE id = ?`, [cj.clinic.id]);
    const mid = await get('/api/auth/me', AS(live.token));
    ok('A live session dies the moment its clinic stops being active',
       mid.status === 402, String(mid.status));
    ok('With the reason, and the reassurance', (await mid.json()).code === 'CLINIC_INACTIVE');
    await db.run(`UPDATE clinics SET payment_state = 'paid' WHERE id = ?`, [cj.clinic.id]);
  }

  sec('BUT HER WORK IS NOT DELETED');
  const herAttempts = await db.get(`SELECT COUNT(*) n FROM attempts WHERE practitioner_id = ?`, [aj.user.id]);
  ok('The consultation she recorded is still there', herAttempts.n >= 1, String(herAttempts.n));
  const seatsAfter = (await revoked.json ? await (await get('/api/clinic', AS(mgrToken))).json() : null);
  const su = await require('../server/tenancy').seatUsage(db, cj.clinic.id);
  ok('And her seat came back', su.used === 4, JSON.stringify(su));

  sec('A MANAGER CANNOT WITHDRAW HERSELF');
  const selfRev = await post('/api/team/' + cj.user.id + '/revoke', {}, AS(mgrToken));
  ok('Refused — a clinic with no manager cannot invite or restore anyone',
     selfRev.status === 400, String(selfRev.status));
  ok('Her session still works', (await get('/api/auth/me', AS(mgrToken))).status === 200);

  sec('AND A WITHDRAWN COLLEAGUE CAN BE PUT BACK');
  const back = await post('/api/team/' + aj.user.id + '/restore', {}, AS(mgrToken));
  ok('She can be restored', back.status === 200, String(back.status));
  const reLogin2 = await post('/api/auth/login', { email: aj.user.email, password: 'Mi-clave-propia-4471' });
  ok('And her own password works again', reLogin2.status === 200, String(reLogin2.status));

  // =========================================================================
  sec('A REFUND SUSPENDS THE CLINIC AND DELETES NOTHING');
  const refund = await deliver('charge.refunded', {
    id: 'ch_test_1', object: 'charge', amount_refunded: plan.priceEur * 100,
    metadata: { order: coj.orderId }
  });
  ok('The refund webhook is accepted', refund.status === 200, String(refund.status));
  const clinicRow = await db.get(`SELECT payment_state FROM clinics WHERE id = ?`, [cj.clinic.id]);
  ok('The clinic is marked refunded', clinicRow.payment_state === 'refunded', clinicRow.payment_state);
  const lockedOut = await post('/api/auth/login', { email: buyer.email, password: 'Mi-propia-clave-2026' });
  ok('Even the manager cannot sign in', lockedOut.status === 402, String(lockedOut.status));
  const lj = await lockedOut.json();
  ok('And is told nothing was deleted', /still here|siguen aquí/i.test(String(lj.error)), String(lj.error));
  const survives = await db.get(`SELECT COUNT(*) n FROM attempts WHERE clinic_id = ?`, [cj.clinic.id]);
  ok('Her team\'s consultations survive the refund', survives.n >= 1, String(survives.n));
  const usersSurvive = await db.get(`SELECT COUNT(*) n FROM users WHERE clinic_id = ?`, [cj.clinic.id]);
  ok('So do the accounts', usersSurvive.n >= 2, String(usersSurvive.n));

  sec('AND THE OPERATOR CAN PUT IT BACK');
  await db.run(`UPDATE clinics SET payment_state = 'paid' WHERE id = ?`, [cj.clinic.id]);
  const backIn = await post('/api/auth/login', { email: buyer.email, password: 'Mi-propia-clave-2026' });
  ok('She signs in again with the same password', backIn.status === 200, String(backIn.status));

  // =========================================================================
  sec('AN ABANDONED CHECKOUT CREATES NOTHING AND FREES THE ADDRESS');
  const co2 = await (await post('/api/checkout', {
    email: 'nadie@clinicados.es', clinicName: 'Clínica Dos', managerName: 'Bea'
  })).json();
  const s2 = stub.lastSession();
  const exp = await deliver('checkout.session.expired', {
    id: s2.id, object: 'checkout.session', client_reference_id: co2.orderId
  });
  ok('The expiry webhook is accepted', exp.status === 200, String(exp.status));
  const o2 = await (await get('/api/orders/' + co2.orderId)).json();
  ok('The order is expired', o2.state === 'expired', o2.state);
  ok('No setup token was ever minted', o2.setupToken === null);
  ok('And it says nothing was charged', /Nothing was charged/i.test(String(o2.message)), String(o2.message));
  const noClinic2 = await db.get(`SELECT COUNT(*) n FROM clinics WHERE name = 'Clínica Dos'`);
  ok('No clinic exists', noClinic2.n === 0, String(noClinic2.n));
  const retry = await post('/api/checkout', { email: 'nadie@clinicados.es', clinicName: 'Clínica Dos', managerName: 'Bea' });
  ok('She can start again with the same address', retry.status === 200, String(retry.status));

  sec('A FAILED PAYMENT IS NOT A CLINIC');
  const co3 = await (await post('/api/checkout', {
    email: 'tres@clinicatres.es', clinicName: 'Clínica Tres', managerName: 'Cris'
  })).json();
  const fail3 = await deliver('payment_intent.payment_failed', {
    id: 'pi_test_fail', object: 'payment_intent',
    metadata: { order: co3.orderId },
    last_payment_error: { message: 'Your card was declined.' }
  });
  ok('The failure webhook is accepted', fail3.status === 200, String(fail3.status));
  const o3 = await (await get('/api/orders/' + co3.orderId)).json();
  ok('The order is failed', o3.state === 'failed', o3.state);
  ok('And it says nothing was charged and nothing created',
     /Nothing was charged|nothing was created/i.test(String(o3.message)), String(o3.message));

  sec('AN ADDRESS THAT ALREADY HAS AN ACCOUNT CANNOT BUY A SECOND CLINIC');
  const dup = await post('/api/checkout', { email: buyer.email, clinicName: 'Clínica Otra', managerName: 'Ana' });
  ok('Refused with a reason she can act on', dup.status === 409, String(dup.status));
  ok('Naming the address', (await dup.json()).error.includes(buyer.email));

  // =========================================================================
  sec('EVERY MONEY AND ACCOUNT EVENT IS ON THE RECORD');
  const events = await require('../server/audit').recent(db, 300);
  const kinds = new Set(events.map(e => e.event));
  for (const k of ['checkout_started', 'payment_confirmed', 'clinic_provisioned', 'manager_activated',
                   'email_verification_issued', 'email_verified', 'invite_issued', 'invite_revoked',
                   'seat_refused', 'account_revoked', 'payment_refunded', 'clinic_suspended',
                   'checkout_expired', 'payment_failed', 'payment_duplicate_ignored',
                   'onboarding_completed']) {
    ok(`recorded: ${k}`, kinds.has(k));
  }
  ok('The provisioning event records the entitlement as it was granted',
     events.some(e => e.event === 'clinic_provisioned' && e.detail.seats === plan.seats));
  const blob = JSON.stringify(events);
  ok('No password, token or card detail is in the audit log',
     !/Mi-propia-clave|Mi-clave-propia|password|sk_test|pi_test|cs_test|setup_token/i.test(blob),
     blob.slice(0, 160));
  ok('And no consultation content is in it — practice is not an account event',
     !/willingness|posture|trustDelta|conn-autonomy/i.test(blob));
  done(`${events.length} events, ${kinds.size} kinds`);

  sec('A MANAGER SEES HER OWN CLINIC\'S HISTORY AND ONLY HERS');
  const mine = await (await get('/api/clinic/audit', AS((await (await post('/api/auth/login',
    { email: buyer.email, password: 'Mi-propia-clave-2026' })).json()).token))).json();
  ok('She can read it', Array.isArray(mine.events) && mine.events.length > 0, String(mine.events && mine.events.length));
  ok('And every row is her clinic\'s',
     mine.events.every(e => !e.clinicId || e.clinicId === cj.clinic.id));
  // A fresh practitioner session, because hers was destroyed and restored: a
  // dead token would prove nothing about authorization.
  const pracAgain = await (await post('/api/auth/login',
    { email: aj.user.email, password: 'Mi-clave-propia-4471' })).json();
  ok('A practitioner cannot read it',
     (await get('/api/clinic/audit', AS(pracAgain.token))).status === 403);

  // =========================================================================
  sec('THE PRODUCT REFUSES TO PRETEND WHEN STRIPE IS NOT CONFIGURED');
  const key = process.env.STRIPE_SECRET_KEY;
  delete process.env.STRIPE_SECRET_KEY;
  const noStripe = await post('/api/checkout', { email: 'x@y.es', clinicName: 'Z', managerName: 'Q' });
  ok('Checkout answers 503, not a fake success', noStripe.status === 503, String(noStripe.status));
  ok('With a code the page can act on', (await noStripe.json()).code === 'PAYMENT_NOT_CONFIGURED');
  process.env.STRIPE_SECRET_KEY = key;

  sec('AND REFUSES TO ACT ON A KEY STRIPE WOULD REJECT');
  process.env.STRIPE_SECRET_KEY = 'sk_test_wrong_key';
  const badKey = await post('/api/checkout', { email: 'x2@y.es', clinicName: 'Z2', managerName: 'Q2' });
  ok('A rejected key surfaces as an error, not a clinic', badKey.status >= 400, String(badKey.status));
  const stranded = await db.get(`SELECT state FROM orders WHERE email = 'x2@y.es'`);
  ok('The order it created stays pending and provisions nothing',
     !stranded || stranded.state === 'pending', JSON.stringify(stranded));
  process.env.STRIPE_SECRET_KEY = key;

  server.close();
  await stub.close();
  fs.existsSync(dbPath) && fs.unlinkSync(dbPath);
  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
