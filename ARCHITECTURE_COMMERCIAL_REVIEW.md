# MIRROR — commercial review, cold

This is written for someone who does not trust the builder. Every claim below is
something you can break on the running instance; where a claim is not provable
from outside, it says so.

**Nothing here declares a PASS.** The verdict is yours.

---

## What you are given

| | |
|---|---|
| Live instance | `https://<filled in at handoff>` |
| Build identity | `GET /api/health` returns version and build id |
| Deployed ref | `mirror-commercial-rc-20260917-2` |
| Source | github.com/noamland80/mirror-academy-v1 (public **for this review only** — see *Before customers*) |
| Stripe | **Test mode.** Real Stripe, real Checkout, real webhooks. No real money moves. |
| Database at handoff | the clinics created by the journey below, and nothing else |

`GET /api/health` is the fastest way to confirm you are reviewing the build you
were told about, before anything else.

---

## 1 · The cold purchase — the journey that matters

Walk this as a stranger, in a private window. Nothing is pre-created for you.

1. Open the root. You should meet **Carmen**, playable, with no account.
   Choose a reply. The reading arrives only after you commit — check the page
   source before you click and confirm the answer is not in it.
2. Scroll to **Open your founding clinic**. Four fields, a **€490** button, and
   a visible test-mode badge.
3. You are handed to **Stripe's own Checkout page**. Confirm the domain is
   Stripe's, the amount is €490, and the currency is EUR.
4. Pay with Stripe's test card: **`4242 4242 4242 4242`**, any future expiry,
   any CVC, any postcode.
5. You land on `/welcome?order=…`. It polls while Stripe confirms. **The
   browser returning is not the confirmation** — the webhook is.
6. Choose a password. Your clinic is created **only now**, and only because the
   webhook confirmed the payment.
7. You are signed in as the manager. Four questions, then a consultation chosen
   by your own answer, greeting you by name.
8. Invite practitioners from **Clinic**. The **fifth seat is refused**.
9. Accept an invitation in another private window, onboard, and reach a case.
10. Back as the manager: **Start here** shows the Monday brief.

**Break it.** Some suggestions, none of them exhaustive:

- open `/welcome?order=<invented>` — it must not create anything
- `POST /api/clinics/from-order` with an invented `setupToken`
- open the setup link twice in two tabs — two clinics must not exist
- pay, then use Stripe's **declined** test card `4000 0000 0000 0002` on a
  second order and confirm no clinic appears
- abandon a Checkout and confirm the order expires having created nothing
- buy twice with the same email address

---

## 2 · The legacy-seat hazard, provable on this instance

You flagged that `seatUsage` once resolved seats as
`(clinic.seats) || PLANS.founding_pilot.seats` — trusting the stored row, so a
clinic provisioned while the plan granted ten would have kept ten forever. It is
fixed. A test suite saying so is the builder's own word, so the instance can
mint a **disposable tenant carrying a deliberately stale `seats=10` row** for
you to attack.

It is created only by an explicit operator call, it is never seeded, its id
always begins `clinic_verify_`, and the production database still starts with
**zero clinics and zero accounts**.

The operator token is handed to you separately, never in a repository or a chat.

```
# mint it
curl -sX POST https://<host>/api/admin/verification-tenant \
  -H "x-admin-token: <token>"
```

The response gives you the clinic id, a manager address, a password, and both
numbers:

```json
{
  "storedRow": { "plan": "founding_pilot", "seats": 10 },
  "effective": { "plan": "founding_pilot", "seats": 5 },
  "rowIsStale": true,
  "seatUsage": { "total": 5, "used": 1 }
}
```

**Proof one — enforcement does not trust the row.** With the row still reading
10, sign in as that manager and invite practitioners. Four succeed. The fifth
invitation is refused, and the refusal names **5**, not 10. Re-read the tenant
mid-way and confirm the stored row still says 10 while that is happening.

**Proof two — the row is repaired, not merely ignored.** Restart the service
(`systemctl restart mirror`). Read the tenant again: the stored row is now 5 and
`rowIsStale` is false. `POST .../restale` puts it back to 10 if you want to run
proof one again.

**It cannot contaminate the buyer.** Removal refuses any id that is not a
verification tenant — point it at the real clinic and it answers 400 with a
reason, and the clinic is untouched. When you are finished:

```
curl -sX DELETE https://<host>/api/admin/verification-tenant/<clinic_verify_…> \
  -H "x-admin-token: <token>"
```

The response reports what was removed and how many clinics remain. Confirm the
remaining count is the buyer clinics only, and that
`SELECT COUNT(*) FROM clinics WHERE id LIKE 'clinic_verify_%'` is zero.

---

## 3 · Payment behaviours, each triggerable from the Stripe dashboard

| behaviour | how to trigger | what must happen |
|---|---|---|
| duplicate webhook | Stripe → Webhooks → the `checkout.session.completed` event → **Resend** | second delivery answers `{"duplicate":true}`; no second clinic, setup token unchanged |
| cancelled checkout | start a purchase, press back on Stripe's page | order stays pending then expires; nothing created; the same email can start again |
| failed payment | test card `4000 0000 0000 0002` | order marked failed; no clinic; the page says nothing was charged |
| expired checkout | wait out the session, or resend `checkout.session.expired` | order expired; no setup token was ever minted |
| refund | Stripe → Payments → the payment → **Refund** | clinic suspended, every session ended, **and every consultation still in the database**; the manager is told nothing was deleted |
| forged webhook | POST an unsigned or wrongly-signed body to `/api/stripe/webhook` | **400**, never 200. A 200 here would be a free clinic |
| replayed signature | resend a captured body with an old `t=` | 400 on the timestamp |

The refund case is the one worth reading carefully: access stops, **data does
not**. Restore the clinic's payment state and the manager signs in again with
the password she already had, and her team's work is all there.

---

## 4 · Identity and isolation

- **Verification.** A manager's address is unverified at creation. With no mail
  provider configured the verification link is returned to her on screen rather
  than claimed as sent — confirm the product never says it emailed something it
  did not. Confirm the link is single-use.
- **Reset.** Ask for a reset, use the link, confirm every existing session for
  that account is ended and the link cannot be used twice.
- **Revocation.** Withdraw a practitioner. Her live session must stop on the
  **next request**, not at next login. Her password must then be refused with
  `ACCOUNT_REVOKED` rather than "invalid credentials" — she is a real person and
  is owed the real reason. Her consultations must still exist. Her seat must
  come back.
- **Isolation.** With two clinics on the instance, confirm neither manager can
  read the other's clinic, audit trail, team, consultations or coaching. Try it
  by id, not just by navigation.
- **Rate limiting.** The public sample door, login (keyed by address *and* IP)
  and reset. Confirm a locked address does not lock the whole office, and that a
  correct password does not bypass an active window.

---

## 5 · Operations, on the actual server

```
systemctl status mirror caddy
node /opt/mirror/app/scripts/backup.js               # integrity-checked, verified
node /opt/mirror/app/scripts/restore.js --check <newest>   # rehearsal, touches nothing
/opt/mirror/rollback.sh                              # needs no argument
journalctl -u mirror -n 50
```

Worth attacking: put a deliberately broken ref through `/opt/mirror/deploy.sh`
and confirm the **old service keeps serving** and the working tree is returned.
That gate is the reason a bad release is a non-event here.

---

## 6 · What is deliberately not built, and not claimed

- **No photography.** Every image slot renders its own art-direction brief
  rather than a fabricated picture. The pages are unfinished on purpose; say so
  if it affects your judgement of the commercial experience.
- **No mail provider.** Verification and invitation links are handed over on
  screen. Nothing claims to have sent an email.
- **No certification, compliance attestation or security audit.** The
  protections are what a €490 product should have and what this one is tested to
  do. That is not a statement about any standard.
- **No testimonials, clinic results or social proof**, because there are none
  yet.

---

## Before any real customer

Two things must change, and neither is done:

1. **The repository must become private.** It is public for this review only.
   Commercial source must not stay publicly downloadable.
2. **Stripe must move from test keys to live keys**, which is a separate owner
   authorization.

---

## What the builder claims, so you can aim at it

27 verifiers, 4,985 assertions, 0 failures, run from a clean clone of the public
repository rather than only from the build environment. The Stripe idempotency
ledger, the webhook signature check and the verification tenant's removal guard
were each removed on purpose and confirmed to fail without them.

Every one of those is a claim about the suite. The instance is the thing that
matters, and it is in front of you.
