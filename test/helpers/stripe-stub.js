/**
 * A STRIPE STAND-IN, FOR TESTING THE PAYMENT PATH WITHOUT AN ACCOUNT.
 *
 * WHAT THIS IS NOT. It is not a simulated payment inside the product. The
 * product makes real HTTP requests, parses real responses, verifies real
 * HMAC-SHA256 signatures over raw bytes, and enforces real idempotency. This
 * file only answers those requests. Point `STRIPE_API_BASE` at the owner's
 * real Stripe test host instead and nothing in `server/payments.js` changes.
 *
 * WHAT IT DELIBERATELY DOES. It speaks the subset the product uses, and it is
 * unhelpful in the ways Stripe is unhelpful:
 *
 *   · it honours `Idempotency-Key`, returning the SAME session for a repeated
 *     key, so the product's own retry safety is actually tested
 *   · it refuses a request with no or a wrong `Authorization` header, so a
 *     misconfigured key fails here rather than silently succeeding
 *   · it signs webhooks with the same `t=…,v1=…` scheme, so signature
 *     verification, timestamp tolerance and replay refusal are all exercised
 *     against real bytes
 *   · it can deliver the same event twice, which is the case that actually
 *     breaks provisioning in production
 */
const http = require('http');
const crypto = require('crypto');

function decodeForm(body) {
  const out = {};
  for (const pair of String(body).split('&')) {
    if (!pair) continue;
    const [k, v] = pair.split('=');
    out[decodeURIComponent(k)] = decodeURIComponent((v || '').replace(/\+/g, ' '));
  }
  return out;
}

/**
 * @param {object} opts
 *   secretKey     the key the product must present (default sk_test_stub)
 *   webhookSecret the secret webhooks are signed with
 */
function createStripeStub({ secretKey = 'sk_test_stub', webhookSecret = 'whsec_stub' } = {}) {
  const sessions = new Map();          // session id → session
  const byIdempotency = new Map();     // idempotency key → session id
  const requests = [];                 // every request, for assertions
  let nextFail = null;                 // queue one failure, like a declined key

  const server = http.createServer((req, res) => {
    let body = '';
    req.on('data', c => { body += c; });
    req.on('end', () => {
      const auth = req.headers['authorization'] || '';
      requests.push({ method: req.method, url: req.url, auth, body, headers: req.headers });

      const reply = (status, obj) => {
        res.writeHead(status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(obj));
      };

      if (auth !== 'Bearer ' + secretKey) {
        return reply(401, { error: { type: 'invalid_request_error', message: 'Invalid API Key provided' } });
      }
      if (nextFail) { const f = nextFail; nextFail = null; return reply(f.status, { error: f.error }); }

      if (req.method === 'POST' && req.url === '/v1/checkout/sessions') {
        const p = decodeForm(body);
        const idem = req.headers['idempotency-key'];
        if (idem && byIdempotency.has(idem)) {
          // Stripe replays the original response for a repeated key. The
          // product depends on this: without it, a dropped reply plus a retry
          // is two Checkout sessions for one buyer.
          return reply(200, sessions.get(byIdempotency.get(idem)));
        }
        const id = 'cs_test_' + crypto.randomBytes(12).toString('hex');
        const session = {
          id,
          object: 'checkout.session',
          url: `https://checkout.stripe.test/c/pay/${id}`,
          client_reference_id: p.client_reference_id || null,
          customer_email: p.customer_email || null,
          amount_total: Number(p['line_items[0][price_data][unit_amount]'] || 0),
          currency: p['line_items[0][price_data][currency]'] || 'eur',
          locale: p.locale || null,
          mode: p.mode,
          payment_status: 'unpaid',
          status: 'open',
          success_url: p.success_url,
          cancel_url: p.cancel_url,
          expires_at: Number(p.expires_at || 0),
          metadata: {
            order: p['metadata[order]'] || null,
            clinic: p['metadata[clinic]'] || null,
            plan: p['metadata[plan]'] || null
          },
          payment_intent: 'pi_test_' + crypto.randomBytes(10).toString('hex')
        };
        sessions.set(id, session);
        if (idem) byIdempotency.set(idem, id);
        return reply(200, session);
      }

      const m = req.url.match(/^\/v1\/checkout\/sessions\/([^/?]+)$/);
      if (req.method === 'GET' && m) {
        const s = sessions.get(m[1]);
        if (!s) return reply(404, { error: { message: 'No such checkout.session' } });
        return reply(200, s);
      }

      return reply(404, { error: { type: 'invalid_request_error', message: 'Unrecognised request URL' } });
    });
  });

  /** Build the exact body and header Stripe would send for one event. */
  function signEvent(type, dataObject, { id, timestamp, secret } = {}) {
    const event = {
      id: id || 'evt_test_' + crypto.randomBytes(12).toString('hex'),
      object: 'event',
      type,
      created: Math.floor(Date.now() / 1000),
      livemode: false,
      data: { object: dataObject }
    };
    const raw = JSON.stringify(event);
    const t = timestamp || Math.floor(Date.now() / 1000);
    const v1 = crypto.createHmac('sha256', secret || webhookSecret).update(`${t}.${raw}`).digest('hex');
    return { event, raw, header: `t=${t},v1=${v1}` };
  }

  /** The session as it looks after the buyer has actually paid. */
  function paidSession(sessionId, overrides = {}) {
    const s = sessions.get(sessionId);
    if (!s) throw new Error('Unknown stub session ' + sessionId);
    Object.assign(s, { payment_status: 'paid', status: 'complete' }, overrides);
    return Object.assign({}, s);
  }

  return {
    server,
    listen: () => new Promise(r => server.listen(0, () => r('http://127.0.0.1:' + server.address().port))),
    close: () => new Promise(r => server.close(r)),
    secretKey, webhookSecret,
    sessions, requests,
    signEvent, paidSession,
    failNext: (status, error) => { nextFail = { status, error }; },
    lastSession: () => [...sessions.values()][sessions.size - 1],
    checkoutRequests: () => requests.filter(r => r.url === '/v1/checkout/sessions')
  };
}

module.exports = { createStripeStub };
