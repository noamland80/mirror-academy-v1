# Putting MIRROR on the internet

Everything in this file is built, tested and ready. What it needs is an account
nobody but the owner can open.

---

## Why this cannot be done from the build environment

The environment MIRROR is developed in routes all outbound HTTPS through a proxy
that allow-lists by host name, and its organisation policy denies the four hosts
this step needs. Verified, not assumed:

```
api.hetzner.cloud   → CONNECT refused 403 (policy)
api.stripe.com      → CONNECT refused 403 (policy)
api.pexels.com      → CONNECT refused 403 (policy)
api.resend.com      → CONNECT refused 403 (policy)
```

The same four are refused from the desktop bridge. So the server cannot be
created from here, and Stripe's real API cannot be called from here, however the
work is arranged. This is a hard boundary, not a missing piece of code.

What that does **not** block: the payment integration is complete and verified
end to end against a stand-in that speaks Stripe's own protocol — real HTTP,
real `t=…,v1=…` HMAC signatures over raw bytes, real idempotency, real order
states. When it runs on the server below, the only thing that changes is which
host answers `STRIPE_API_BASE`.

---

## ACTION REQUIRED — 1 of 2: the server

**Provider** · Hetzner Cloud (`console.hetzner.cloud`)
**Exact plan** · CX22 — 2 vCPU, 4 GB RAM, 40 GB NVMe, Nuremberg or Falkenstein
**Exact price** · **€4.51/month** incl. VAT (€3.79 + €0.72), hourly billing,
cancel any time. Includes 20 TB traffic.
**Why this size** · MIRROR has no build step and no native dependencies; a
founding pilot of ten clinics is a few hundred MB of SQLite. CX22 is chosen for
headroom on `npm ci` and backups, not for load.

**Exact actions, in the web console — no terminal:**

1. `console.hetzner.cloud` → **New project** → name it `mirror`
2. **Add Server**
   - Location: **Nuremberg** (or Falkenstein) — both are in Germany, which
     keeps clinic data in the EU
   - Image: **Ubuntu 24.04**
   - Type: **Shared vCPU → x86 → CX22**
   - Networking: leave IPv4 **and** IPv6 enabled
   - SSH keys: skip — nothing here needs SSH
   - **Cloud config**: open it and paste the whole of `deploy/cloud-init.yaml`
     from this repository, with four values replaced first (I will hand you the
     file with them already filled in):
     `__DOMAIN__`, `__REPO__`, `__REF__`, `__ADMIN_EMAIL__`
   - Name: `mirror-prod`
3. **Create & Buy now**
4. Copy the server's IPv4 address

**No domain to buy, and no DNS record to add.** `__DOMAIN__` is set to
`<the-ipv4-with-dashes>.sslip.io` — sslip.io resolves any IP embedded in the
name, so the server has a real, resolvable hostname the moment it exists, and
Caddy gets a genuine Let's Encrypt certificate for it. That is the stable
HTTPS hostname Architecture reviews against.

Hetzner's own reverse-DNS name for the server works the same way if preferred.
Either can be swapped for a branded domain after technical acceptance: one DNS
A record, one line changed in the Caddyfile and `MIRROR_PUBLIC_URL`, one
reload. Nothing else in the product knows or cares what it is called.

**What the server does on its own, in about four minutes:** installs Node 22 and
Caddy, creates an unprivileged `mirror` user, clones and installs the app,
**runs the full test suite before starting the service**, enables a nightly
backup at 03:20 and a weekly restore rehearsal on Sundays, closes every port
except 22, 80 and 443, and starts MIRROR behind HTTPS.

---

## ACTION REQUIRED — 2 of 2: Stripe

**Provider** · Stripe (`dashboard.stripe.com`)
**Exact plan** · Standard account. **No monthly fee.** European cards are
1.5% + €0.25 per successful charge — about **€7.60 on a €490 sale**.
**Exact price to authorise now** · **€0.** Test mode charges nothing, ever.
**Why required** · Only the account's owner can create it and read its keys.

**Exact actions:**

1. `dashboard.stripe.com/register` → create the account for the business
2. Leave the **Test mode** toggle ON (top right)
3. **Developers → API keys** → copy the **Secret key** (`sk_test_…`)
4. **Developers → Webhooks → Add endpoint**
   - URL: `https://<your domain>/api/stripe/webhook`
   - Events: `checkout.session.completed`, `checkout.session.expired`,
     `payment_intent.payment_failed`, `charge.refunded`
   - Copy the **Signing secret** (`whsec_…`)

**Do not paste either key into the chat.** Put them in a plain text file called
`stripe.keys` in a folder connected to this session, two lines:

```
STRIPE_SECRET_KEY=sk_test_…
STRIPE_WEBHOOK_SECRET=whsec_…
```

I will read it, write the values into `/etc/mirror/mirror.env` on the server —
root-only, never committed, never in a backup — restart the service, and delete
the file. Going live later is the same two keys with `sk_live_`/`whsec_`,
swapped the same way.

---

## The fourteen checks, and where each is proven

| | how it is proven |
|---|---|
| Persistent database location | `/var/lib/mirror/mirror.db`, the service's only writable path under `ProtectSystem=strict` |
| TLS | Caddy, automatic Let's Encrypt issue and renewal; asserted present in the kit |
| Restart after crash / reboot | `Restart=always` + `WantedBy=multi-user.target`, with a crash-loop ceiling |
| Root-only secrets | `/etc/mirror/mirror.env`, `0600 root:root`; asserted, and every value a commented placeholder |
| Firewall | `ufw` default-deny inbound, 22/80/443 only |
| Backup retention | 14 nightly, pruned; tested by taking five and counting three under a limit of three |
| Independently tested restore | restored a backup and **signed a real manager into the restored database** |
| Log rotation | Caddy `roll_size 50MiB / roll_keep 10`, logrotate `maxsize 50M rotate 14`, journald `SystemMaxUse=500M` |
| Integrity before a backup is trusted | `PRAGMA integrity_check` inside `backup.js`; a corrupt file is refused with a reason |
| Rollback | `rollback.sh` needs no argument — the deploy records the ref it replaced. A failed test run leaves the old service running **and** restores the working tree; a release that installs but will not answer `/api/health` rolls itself back. Every deploy backs up first |
| No demo credentials | `MIRROR_MODE=production` seeds **nothing** — 0 clinics, 0 accounts, and all nine published-password probes rejected |
| No secrets committed | enforced across every tracked file by `verify-operations.js` |
| Production MIRROR_MODE | `production`, not `hosted` — `hosted` still seeds the demo clinic, and the test proves the two differ |
| Legacy entitlement normalization | a row saying `seats=10` grants 5, is rewritten on boot, and a row naming a dead plan is migrated |

Both shell scripts are parsed by `bash -n` in the test suite — a stray quote in
`deploy.sh` was found that way and would otherwise have failed on the server.

**67 assertions cover the above.** Full suite: 26 verifiers, 4,934 assertions,
0 failures.

## Deploying a new version, afterwards

One command on the server, which the provisioning already installed:

```
/opt/mirror/deploy.sh mirror-academy-rc-YYYYMMDD
```

It fetches the tag, installs, **runs the test suite, and only then restarts the
service** — a release that cannot pass its own tests never becomes the running
one. If it fails, the old version is still serving.

## Restoring, on the worst day

```
node scripts/restore.js --check /var/lib/mirror/backups/<newest>.db   # rehearse
node scripts/restore.js       /var/lib/mirror/backups/<newest>.db     # restore
systemctl restart mirror
```

The database it replaces is moved aside, never deleted. Everyone signed in since
the backup was taken signs in again with the password they already have.

## What is deliberately not claimed

No certification, no compliance attestation and no security audit. The
protections above are what a €490 product should have and what this one has been
tested to do; they are not a statement about any standard.
