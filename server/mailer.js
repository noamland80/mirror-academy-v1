/**
 * OUTBOUND MAIL — with an honest answer for when there is no mail provider.
 *
 * MIRROR needs to send four things: a verification link, a reset link, a
 * practitioner's invitation, and a receipt-shaped confirmation after purchase.
 * Every one of them is a link with a token in it, which means every one of
 * them is a security boundary — and a product that silently fails to send one
 * is worse than a product that says it did not.
 *
 * SO THERE ARE TWO MODES AND NO PRETENDING.
 *
 *   Provider configured (MAIL_PROVIDER + MAIL_API_KEY + MAIL_FROM)
 *       One HTTPS POST per message to the provider's send endpoint. No SDK and
 *       no new dependency. Resend, Postmark and Brevo are supported because
 *       each is one POST with an API key and each has a free tier a founding
 *       pilot fits inside. A send that fails is recorded as failed, with the
 *       provider's own message, and the caller is told.
 *
 *   No provider configured
 *       The message is written to the outbox and NOT sent. The API tells the
 *       caller `delivered: false` and hands back the link, so the operator or
 *       the manager passes it on by hand — which is exactly how invitations
 *       have always worked in this product. Nothing claims an email was sent.
 *
 * The outbox is written in both modes. It is the record of what the product
 * tried to deliver, which is the only way to answer "I never got the link".
 * Tokens live in the outbox because the link IS the message; the outbox is
 * therefore as sensitive as the sessions table and is never exposed to a
 * clinic, only to the operator.
 */
const crypto = require('crypto');

const PROVIDERS = {
  resend: {
    url: () => 'https://api.resend.com/emails',
    headers: key => ({ 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' }),
    body: m => JSON.stringify({ from: m.from, to: [m.to], subject: m.subject, text: m.text })
  },
  postmark: {
    url: () => 'https://api.postmarkapp.com/email',
    headers: key => ({ 'X-Postmark-Server-Token': key, 'Content-Type': 'application/json', 'Accept': 'application/json' }),
    body: m => JSON.stringify({ From: m.from, To: m.to, Subject: m.subject, TextBody: m.text, MessageStream: 'outbound' })
  },
  brevo: {
    url: () => 'https://api.brevo.com/v3/smtp/email',
    headers: key => ({ 'api-key': key, 'Content-Type': 'application/json', 'Accept': 'application/json' }),
    body: m => JSON.stringify({
      sender: { email: m.from }, to: [{ email: m.to }],
      subject: m.subject, textContent: m.text
    })
  }
};

const providerName = () => String(process.env.MAIL_PROVIDER || '').toLowerCase();
const apiKey = () => process.env.MAIL_API_KEY || '';
const from = () => process.env.MAIL_FROM || '';

/** Configured means all three are present AND the provider is one we speak. */
function configured() {
  return !!(PROVIDERS[providerName()] && apiKey() && from());
}

async function migrate(db) {
  await db.run(`CREATE TABLE IF NOT EXISTS outbox (
    id TEXT PRIMARY KEY,
    kind TEXT NOT NULL,
    to_email TEXT NOT NULL,
    subject TEXT NOT NULL,
    body TEXT NOT NULL,
    link TEXT,
    clinic_id TEXT,
    state TEXT NOT NULL,
    provider TEXT,
    provider_id TEXT,
    error TEXT,
    created_at TEXT NOT NULL,
    sent_at TEXT
  )`);
  await db.run(`CREATE INDEX IF NOT EXISTS idx_outbox_to ON outbox(to_email, created_at)`);
}

/**
 * Queue and, if possible, send.
 *
 * Returns { id, delivered, link, reason }. `delivered` is only ever true when
 * a provider accepted the message. The caller decides what to tell the person:
 * for an invitation the link is handed to the manager either way, and for a
 * verification the practitioner is told to ask her manager for it.
 */
async function send(db, { kind, to, subject, text, link, clinicId }) {
  const id = `ob_${crypto.randomBytes(8).toString('hex')}`;
  const now = new Date().toISOString();
  const p = PROVIDERS[providerName()];

  await db.run(
    `INSERT INTO outbox (id,kind,to_email,subject,body,link,clinic_id,state,provider,created_at)
     VALUES (?,?,?,?,?,?,?,?,?,?)`,
    [id, kind, String(to).toLowerCase(), subject, text, link || null, clinicId || null,
     configured() ? 'sending' : 'held', configured() ? providerName() : null, now]);

  if (!configured()) {
    return { id, delivered: false, link: link || null, reason: 'no_mail_provider' };
  }

  try {
    const r = await fetch(p.url(), {
      method: 'POST',
      headers: p.headers(apiKey()),
      body: p.body({ from: from(), to, subject, text })
    });
    const body = await r.text();
    if (!r.ok) throw new Error(`HTTP ${r.status} ${body.slice(0, 200)}`);
    let pid = null;
    try { const j = JSON.parse(body); pid = j.id || j.MessageID || j.messageId || null; } catch (e) {}
    await db.run(`UPDATE outbox SET state='sent', sent_at=?, provider_id=? WHERE id=?`,
      [new Date().toISOString(), pid, id]);
    return { id, delivered: true, link: link || null, providerId: pid };
  } catch (e) {
    await db.run(`UPDATE outbox SET state='failed', error=? WHERE id=?`,
      [String(e.message).slice(0, 400), id]);
    // A failed send is reported, never swallowed: the link still has to reach
    // her, and the caller is the only one who can arrange that.
    return { id, delivered: false, link: link || null, reason: 'send_failed', error: String(e.message) };
  }
}

/** The operator's view. Never served to a clinic — the links are live tokens. */
function recent(db, limit = 100) {
  return db.all(
    `SELECT id,kind,to_email,subject,state,provider,error,created_at,sent_at
     FROM outbox ORDER BY created_at DESC LIMIT ?`, [Math.min(500, Math.max(1, limit))]);
}

module.exports = { configured, providerName, migrate, send, recent, PROVIDERS };
