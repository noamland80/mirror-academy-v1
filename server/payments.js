/**
 * PAYMENT — €490, once, for one clinic.
 *
 * WHAT THIS TALKS TO. Stripe Checkout, over HTTPS, with the account's secret
 * key. There is no Stripe SDK here and no new dependency: Checkout is three
 * form-encoded POSTs and one signed webhook, and `fetch` is in the runtime.
 * That keeps the zero-native-dependency promise the packaged edition rests on.
 *
 * WHAT IS REAL AND WHAT IS NOT. Every request in this file is a real HTTP
 * request to `STRIPE_API_BASE` (https://api.stripe.com by default), the webhook
 * signature is verified with Stripe's real scheme, and the idempotency is real.
 * Nothing simulates a payment. The tests point `STRIPE_API_BASE` at a local
 * stub that speaks the same subset of the API and signs webhooks with the same
 * scheme, so the whole path is exercised without an account — and when the
 * owner's test keys arrive, the only thing that changes is which host answers.
 *
 * THE FOUR THINGS THAT GO WRONG IN PRODUCTION, AND WHERE EACH IS HANDLED.
 *
 *   The webhook arrives twice.        Stripe retries, and a retry after a
 *                                     timeout is not an error — it is the
 *                                     normal case. Every event id is recorded
 *                                     before it is acted on, inside the same
 *                                     transaction-shaped guard, so the second
 *                                     delivery provisions nothing. See
 *                                     `alreadyHandled`.
 *
 *   The webhook arrives before the    The browser returning from Checkout is
 *   buyer's browser does, or after.   not the event; the webhook is. So the
 *                                     return page reads the order, and the
 *                                     order is only completed by the webhook.
 *                                     Both orders of arrival end in the same
 *                                     place.
 *
 *   The buyer abandons Checkout.      The order stays `pending` and expires.
 *                                     No clinic is created and the email is
 *                                     free to try again.
 *
 *   The payment is refunded.          The clinic is suspended, not deleted:
 *                                     her practitioners' work is hers, and a
 *                                     refund that destroyed it would be the
 *                                     product punishing a customer for a
 *                                     decision she is entitled to make.
 *
 * NO CARD DETAIL EVER REACHES THIS PROCESS. Checkout is hosted by Stripe; the
 * product never sees, stores or transmits a card number, and the only thing it
 * keeps is Stripe's own reference.
 */
const crypto = require('crypto');

const T = (en, es) => ({ en, es });

const API = () => process.env.STRIPE_API_BASE || 'https://api.stripe.com';
const KEY = () => process.env.STRIPE_SECRET_KEY || '';
const WEBHOOK_SECRET = () => process.env.STRIPE_WEBHOOK_SECRET || '';

/** Whether payment is wired up at all. Everything else degrades honestly. */
const configured = () => !!KEY();
/** Whether the key in use is a test key. Shown to the buyer, loudly. */
const isTestMode = () => /^sk_test_/.test(KEY());

/**
 * Order states. An order is the product's own record of one attempted
 * purchase; Stripe's session is the counterparty's record of the same thing.
 */
const ORDER_STATES = ['pending', 'paid', 'failed', 'expired', 'refunded'];

async function migrate(db) {
  await db.run(`CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL,
    clinic_name TEXT NOT NULL,
    manager_name TEXT NOT NULL,
    country TEXT,
    plan TEXT NOT NULL,
    amount_eur INTEGER NOT NULL,
    state TEXT NOT NULL,
    session_id TEXT,
    payment_intent TEXT,
    clinic_id TEXT,
    setup_token TEXT,
    lang TEXT NOT NULL DEFAULT 'en',
    test_mode INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    paid_at TEXT,
    expires_at TEXT NOT NULL
  )`);
  await db.run(`CREATE INDEX IF NOT EXISTS idx_orders_session ON orders(session_id)`);
  await db.run(`CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(email)`);
  await db.run(`CREATE UNIQUE INDEX IF NOT EXISTS idx_orders_setup ON orders(setup_token)`);

  // THE IDEMPOTENCY LEDGER. One row per Stripe event id, written before the
  // event is acted on. The PRIMARY KEY is what makes a concurrent duplicate
  // delivery lose rather than race: the second INSERT fails, and a failed
  // INSERT is the signal to do nothing.
  await db.run(`CREATE TABLE IF NOT EXISTS webhook_events (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    received_at TEXT NOT NULL,
    handled_at TEXT,
    outcome TEXT
  )`);
}

// ---------------------------------------------------------------------------
// TALKING TO STRIPE
// ---------------------------------------------------------------------------

/**
 * One form-encoded POST to Stripe. `idempotencyKey` makes a retried request
 * from THIS side safe, which matters when the network drops between our
 * request and Stripe's reply: without it, a retry can create a second Checkout
 * session for the same buyer.
 */
async function stripePost(path, params, idempotencyKey) {
  if (!configured()) throw new Error('Stripe is not configured');
  const headers = {
    'Authorization': 'Bearer ' + KEY(),
    'Content-Type': 'application/x-www-form-urlencoded',
    'Stripe-Version': '2024-06-20'
  };
  if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey;
  const r = await fetch(API() + path, { method: 'POST', headers, body: form(params) });
  const body = await r.text();
  let json = null;
  try { json = JSON.parse(body); } catch (e) { /* reported below */ }
  if (!r.ok) {
    const msg = (json && json.error && (json.error.message || json.error.type)) || `HTTP ${r.status}`;
    const err = new Error(`Stripe: ${msg}`);
    err.status = r.status;
    err.stripeCode = json && json.error && json.error.code;
    throw err;
  }
  if (!json) throw new Error('Stripe returned a response that was not JSON');
  return json;
}

async function stripeGet(path) {
  if (!configured()) throw new Error('Stripe is not configured');
  const r = await fetch(API() + path, {
    headers: { 'Authorization': 'Bearer ' + KEY(), 'Stripe-Version': '2024-06-20' }
  });
  const body = await r.text();
  if (!r.ok) throw new Error(`Stripe: HTTP ${r.status} ${body.slice(0, 200)}`);
  return JSON.parse(body);
}

/**
 * Stripe's form encoding, including its bracket notation for nested values
 * (`line_items[0][price_data][unit_amount]`). Flattening here is what removes
 * the need for the SDK.
 */
function form(obj, prefix, out) {
  out = out || [];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;
    const key = prefix ? `${prefix}[${k}]` : k;
    if (typeof v === 'object' && !Array.isArray(v)) form(v, key, out);
    else if (Array.isArray(v)) v.forEach((item, i) => {
      if (typeof item === 'object') form(item, `${key}[${i}]`, out);
      else out.push(`${encodeURIComponent(`${key}[${i}]`)}=${encodeURIComponent(String(item))}`);
    });
    else out.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`);
  }
  return out.join('&');
}

// ---------------------------------------------------------------------------
// STARTING A PURCHASE
// ---------------------------------------------------------------------------

const ref = () => `mo_${crypto.randomBytes(9).toString('hex')}`;
const setupToken = () => crypto.randomBytes(24).toString('hex');

/**
 * Create the order, then the Stripe Checkout session, and hand back the URL
 * the buyer is sent to.
 *
 * The order exists BEFORE the session, so a Checkout session can never arrive
 * back referring to something the product has no record of. Its id travels to
 * Stripe as `client_reference_id` and in metadata, which is how the webhook
 * finds it again.
 */
async function startCheckout(db, {
  email, clinicName, managerName, country, plan, priceEur, lang = 'en', origin
}) {
  const clean = String(email || '').trim().toLowerCase();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(clean)) throw new Error('A valid email address is required');
  if (!clinicName || String(clinicName).trim().length < 2) throw new Error('A clinic name is required');
  if (!managerName || String(managerName).trim().length < 2) throw new Error('A name is required');

  // One clinic per plan, per the entitlement. An address that already has an
  // account cannot buy a second clinic with it.
  const existing = await db.getUserByEmail(clean);
  if (existing) {
    const e = new Error(`${clean} already has a MIRROR account`);
    e.code = 'ACCOUNT_EXISTS';
    throw e;
  }

  const id = ref();
  const now = new Date();
  // A Checkout session is good for 24 hours at Stripe; the order matches it.
  const expires = new Date(now.getTime() + 24 * 3600 * 1000);
  await db.run(
    `INSERT INTO orders (id,email,clinic_name,manager_name,country,plan,amount_eur,state,lang,test_mode,created_at,updated_at,expires_at)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [id, clean, String(clinicName).trim(), String(managerName).trim(), country || null,
     plan, priceEur, 'pending', lang === 'es' ? 'es' : 'en', isTestMode() ? 1 : 0,
     now.toISOString(), now.toISOString(), expires.toISOString()]);

  const session = await stripePost('/v1/checkout/sessions', {
    mode: 'payment',
    // Stripe's own language for the Checkout page, so a Spanish buyer is not
    // handed an English payment form at the last step.
    locale: lang === 'es' ? 'es' : 'en',
    client_reference_id: id,
    customer_email: clean,
    // The buyer's email is on the session so Stripe can send its own receipt;
    // MIRROR does not need to send one to be a legitimate purchase record.
    success_url: `${origin}/welcome?order=${id}`,
    cancel_url: `${origin}/?checkout=cancelled#start`,
    expires_at: Math.floor(expires.getTime() / 1000),
    metadata: { order: id, clinic: String(clinicName).trim(), plan },
    line_items: [{
      quantity: 1,
      price_data: {
        currency: 'eur',
        unit_amount: priceEur * 100,
        product_data: {
          name: lang === 'es' ? 'MIRROR — Clínica Fundadora' : 'MIRROR — Founding Clinic',
          description: lang === 'es'
            ? 'Una clínica, hasta cinco profesionales, la Academia completa y los nueve casos de consulta. Pago único.'
            : 'One clinic, up to five practitioners, the full Academy and all nine consultation cases. One-time payment.'
        }
      }
    }],
    payment_intent_data: { metadata: { order: id } }
  }, `checkout-${id}`);

  await db.run(`UPDATE orders SET session_id = ?, updated_at = ? WHERE id = ?`,
    [session.id, new Date().toISOString(), id]);

  return { orderId: id, url: session.url, sessionId: session.id, testMode: isTestMode() };
}

// ---------------------------------------------------------------------------
// THE WEBHOOK
// ---------------------------------------------------------------------------

/**
 * Verify Stripe's signature over the RAW body.
 *
 * Three things matter and each has been a real-world breach somewhere:
 *   · the raw bytes, not the parsed object — re-serialising JSON changes it
 *   · a timing-safe comparison, so the signature cannot be guessed byte by byte
 *   · a timestamp tolerance, so a signature captured once cannot be replayed
 *     forever
 */
function verifySignature(rawBody, header, secret, toleranceSeconds = 300) {
  if (!secret) throw new Error('STRIPE_WEBHOOK_SECRET is not set');
  if (!header) throw new Error('Missing Stripe-Signature');
  const parts = String(header).split(',').reduce((acc, p) => {
    const [k, v] = p.split('=');
    if (k === 't') acc.t = v;
    if (k === 'v1') (acc.v1 = acc.v1 || []).push(v);
    return acc;
  }, {});
  if (!parts.t || !parts.v1) throw new Error('Malformed Stripe-Signature');

  const age = Math.abs(Math.floor(Date.now() / 1000) - Number(parts.t));
  if (!Number.isFinite(age) || age > toleranceSeconds) throw new Error('Signature timestamp outside tolerance');

  const expected = crypto.createHmac('sha256', secret)
    .update(`${parts.t}.${rawBody instanceof Buffer ? rawBody.toString('utf8') : String(rawBody)}`)
    .digest('hex');
  const ok = parts.v1.some(sig => {
    const a = Buffer.from(expected, 'utf8');
    const b = Buffer.from(String(sig), 'utf8');
    return a.length === b.length && crypto.timingSafeEqual(a, b);
  });
  if (!ok) throw new Error('Signature does not match');
  return true;
}

/**
 * Claim an event id. Returns false when this id has been seen before, which is
 * the whole of the duplicate defence: the unique PRIMARY KEY decides, not a
 * SELECT-then-INSERT that two concurrent deliveries could both pass.
 */
async function claimEvent(db, id, type) {
  try {
    await db.run(`INSERT INTO webhook_events (id,type,received_at) VALUES (?,?,?)`,
      [id, type, new Date().toISOString()]);
    return true;
  } catch (e) {
    if (/UNIQUE|constraint/i.test(String(e.message))) return false;
    throw e;
  }
}

async function finishEvent(db, id, outcome) {
  await db.run(`UPDATE webhook_events SET handled_at = ?, outcome = ? WHERE id = ?`,
    [new Date().toISOString(), String(outcome).slice(0, 200), id]);
}

const getOrder = (db, id) => db.get(`SELECT * FROM orders WHERE id = ?`, [id]);
const getOrderBySession = (db, sid) => db.get(`SELECT * FROM orders WHERE session_id = ?`, [sid]);
const getOrderBySetupToken = (db, tok) => db.get(`SELECT * FROM orders WHERE setup_token = ?`, [tok]);

async function setOrderState(db, id, state, extra = {}) {
  if (!ORDER_STATES.includes(state)) throw new Error(`Unknown order state: ${state}`);
  const sets = ['state = ?', 'updated_at = ?'];
  const vals = [state, new Date().toISOString()];
  for (const [col, v] of Object.entries(extra)) { sets.push(`${col} = ?`); vals.push(v); }
  vals.push(id);
  await db.run(`UPDATE orders SET ${sets.join(', ')} WHERE id = ?`, vals);
  return getOrder(db, id);
}

/**
 * Mark an order paid and mint the one-time setup token the buyer's browser
 * will use to create her clinic.
 *
 * The clinic is NOT created here. A paid order plus a setup token means "you
 * are entitled to a clinic"; the clinic itself is created when she chooses her
 * password, because a manager account with a password the product invented and
 * had to show her somewhere is a worse account than one she chose herself.
 */
async function markPaid(db, order, { paymentIntent, amountEur } = {}) {
  if (order.state === 'paid') return { order, alreadyPaid: true };
  const token = order.setup_token || setupToken();
  const updated = await setOrderState(db, order.id, 'paid', {
    paid_at: new Date().toISOString(),
    setup_token: token,
    payment_intent: paymentIntent || order.payment_intent || null,
    amount_eur: typeof amountEur === 'number' ? amountEur : order.amount_eur
  });
  return { order: updated, alreadyPaid: false };
}

/** Sweep orders whose Checkout window has closed. Safe to call on a timer. */
async function expireStaleOrders(db) {
  const rows = await db.all(
    `SELECT id FROM orders WHERE state = 'pending' AND expires_at < ?`,
    [new Date().toISOString()]);
  for (const r of rows) await setOrderState(db, r.id, 'expired');
  return rows.map(r => r.id);
}

/** What the buyer's return page is allowed to know. No Stripe ids. */
function publicOrder(order) {
  if (!order) return null;
  return {
    id: order.id,
    state: order.state,
    clinicName: order.clinic_name,
    managerName: order.manager_name,
    email: order.email,
    plan: order.plan,
    amountEur: order.amount_eur,
    currency: 'EUR',
    testMode: !!order.test_mode,
    lang: order.lang,
    // Present only once the payment is confirmed, and consumed on use.
    setupToken: order.state === 'paid' && !order.clinic_id ? order.setup_token : null,
    clinicId: order.clinic_id || null
  };
}

const STATE_COPY = {
  pending: T('Stripe has not confirmed this payment yet. This page updates itself.',
             'Stripe todavía no ha confirmado este pago. Esta página se actualiza sola.'),
  paid: T('Payment confirmed.', 'Pago confirmado.'),
  failed: T('The payment did not go through. Nothing was charged and nothing was created.',
            'El pago no se ha completado. No se ha cobrado nada ni se ha creado nada.'),
  expired: T('This checkout expired before it was paid. Nothing was charged.',
             'Este pago caducó antes de completarse. No se ha cobrado nada.'),
  refunded: T('This purchase was refunded and the clinic\'s access is suspended.',
              'Esta compra fue reembolsada y el acceso de la clínica está suspendido.')
};

module.exports = {
  ORDER_STATES, STATE_COPY,
  configured, isTestMode, migrate,
  startCheckout, verifySignature, claimEvent, finishEvent,
  getOrder, getOrderBySession, getOrderBySetupToken, setOrderState, markPaid,
  expireStaleOrders, publicOrder,
  stripePost, stripeGet, form
};
