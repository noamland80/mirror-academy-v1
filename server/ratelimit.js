/**
 * RATE LIMITING — for the doors that open to the whole internet.
 *
 * Three doors need it for three different reasons:
 *
 *   the public sample   is the only place premium-adjacent content is served
 *                       without an account, so it is the only place somebody
 *                       can try to walk the whole thing out one request at a
 *                       time. The limit is what makes that tedious.
 *   login               is where passwords get guessed.
 *   password reset      is where a working address gets used to spray mail, or
 *                       to fish for which addresses exist.
 *
 * In-memory and per-process on purpose. This product runs as one Node process
 * against one SQLite file; a shared store would be a second moving part bought
 * with nothing. If it ever runs behind more than one process, this file is the
 * one place that has to change, and it says so here rather than in a document
 * nobody opens.
 *
 * `app.set('trust proxy', true)` is already set, so `req.ip` is the client's
 * address behind the reverse proxy rather than the proxy's own.
 */

/** One sliding window per key. Entries are dropped as they expire. */
function createLimiter({ windowMs, max, name }) {
  const hits = new Map();

  // Keep the map from growing without bound on a long-running process. Cheap,
  // and only ever touches keys that are already expired.
  let lastSweep = Date.now();
  function sweep(now) {
    if (now - lastSweep < windowMs) return;
    lastSweep = now;
    for (const [k, times] of hits) {
      const live = times.filter(t => now - t < windowMs);
      if (live.length) hits.set(k, live); else hits.delete(k);
    }
  }

  /**
   * Returns { allowed, remaining, retryAfterSeconds }.
   * Call `consume` only for attempts that should count.
   */
  function consume(key) {
    const now = Date.now();
    sweep(now);
    const times = (hits.get(key) || []).filter(t => now - t < windowMs);
    if (times.length >= max) {
      const oldest = times[0];
      return {
        allowed: false,
        remaining: 0,
        retryAfterSeconds: Math.max(1, Math.ceil((windowMs - (now - oldest)) / 1000))
      };
    }
    times.push(now);
    hits.set(key, times);
    return { allowed: true, remaining: max - times.length, retryAfterSeconds: 0 };
  }

  /** Forget a key — used after a successful login, so one bad typo is not held against a real customer. */
  function forget(key) { hits.delete(key); }

  return { consume, forget, name, windowMs, max, _hits: hits };
}

/**
 * Express middleware. The refusal is deliberately bilingual and deliberately
 * vague: it says to wait, and it does not say how many attempts remain or
 * whether the address it was given exists.
 */
function limit(limiter, keyFn) {
  return (req, res, next) => {
    const key = keyFn ? keyFn(req) : req.ip;
    const r = limiter.consume(String(key));
    if (r.allowed) { res.set('X-RateLimit-Remaining', String(r.remaining)); return next(); }
    res.set('Retry-After', String(r.retryAfterSeconds));
    const lang = (req.get('X-Mirror-Lang') || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
    return res.status(429).json({
      error: lang === 'es'
        ? 'Demasiadas solicitudes. Espera un momento y vuelve a intentarlo.'
        : 'Too many requests. Wait a moment and try again.',
      retryAfterSeconds: r.retryAfterSeconds
    });
  };
}

// The windows. Generous enough that no real person meets them, tight enough
// that a script does.
const limiters = {
  // A visitor plays the sample, changes her mind, plays it again. Forty in ten
  // minutes is far more than curiosity and far less than extraction.
  sample: createLimiter({ name: 'sample', windowMs: 10 * 60 * 1000, max: 40 }),
  // Password guessing, keyed by address+ip so one clinic's office network is
  // not locked out because one person mistyped.
  login: createLimiter({ name: 'login', windowMs: 15 * 60 * 1000, max: 10 }),
  // Reset links, keyed by ip.
  reset: createLimiter({ name: 'reset', windowMs: 60 * 60 * 1000, max: 8 }),
  // Checkout STARTS, so the orders table cannot be filled by a script. Tight
  // on purpose: nobody legitimately begins twelve purchases in an hour.
  signup: createLimiter({ name: 'signup', windowMs: 60 * 60 * 1000, max: 12 }),
  // READING an order is a different act from starting one, and it must have
  // its own window.
  //
  // The buyer's return page polls the order while it waits for Stripe's
  // webhook, which can take a few seconds. Sharing the checkout window meant
  // her own welcome page exhausted twelve requests in under a minute and then
  // showed her a rate-limit error in the middle of a completed purchase — the
  // worst possible moment, and the exact thing the buyer-journey test caught.
  // Reading an order reveals nothing but her own order's state, so this is
  // generous; it exists to stop id enumeration, not to pace her browser.
  orderRead: createLimiter({ name: 'orderRead', windowMs: 10 * 60 * 1000, max: 300 })
};

module.exports = { createLimiter, limit, limiters };
