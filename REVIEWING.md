# REVIEWING THIS BUILD

Everything needed to install, run, sign in and evaluate the MIRROR Academy
Commercial RC. Nothing here requires a hosted instance.

---

## 1 · Get the exact RC

```bash
git clone https://github.com/noamland80/mirror-academy-v1
cd mirror-academy-v1
git checkout mirror-academy-rc-20260916
git rev-parse HEAD        # must print cef10429966878346fa264c8d45e6307675e4a55
```

Reviewing any other commit is reviewing something else. `main` is this commit
plus a documentation-only handoff commit; `git diff mirror-academy-rc-20260916 main`
shows the difference.

## 2 · Clean install

```bash
npm ci
```

Falls back to `npm install` if you prefer; the lockfile is committed and both
produce the same tree. Runtime dependencies are **express, cors and uuid** —
nothing else, and there is no build step.

**Node 22.5 or newer needs nothing else installed**: the datastore is the
built-in `node:sqlite`. On older Node, `npm ci` fetches `sqlite3` as an
optional dependency and the application uses it automatically.

## 3 · Start

```bash
npm start
```

Then open **http://localhost:5000**.

Set `PORT` to use another port. The database is created automatically at
`data/mirror.db` on first run — no migration step, no external database, no
Docker required. Delete that file to return to a clean install.

## 4 · Review credentials

Seeded automatically on first start. All fictional, all local-only.

| Role | Email | Password |
|---|---|---|
| **Novice practitioner** | `practitioner2@wildmagic.es` | `Mirror2026!prac2` |
| **Experienced practitioner** | `practitioner@wildmagic.es` | `Mirror2026!prac` |
| **Clinic manager** | `manager@wildmagic.es` | `Mirror2026!mgr` |

> These three passwords were published in an earlier public handoff and are
> **permanently burned**: `MIRROR_MODE=hosted` refuses to start with any of
> them, and every account-creation path rejects them. They work on a local
> review install and cannot be used against a hosted instance. See
> `BUILD_PROVENANCE.md` §6.

### Making the "experienced" practitioner experienced

**On a clean install every account is empty** — that is the honest novice state,
and it is what you should use to review the novice journey.

To review the **experienced practitioner** and the **manager** you need recorded
behaviour, because the manager product is built on behaviour and not on
completion tracking. One command produces it:

```bash
npm run seed:demo
```

It runs real consultations through the real engines — the choices are actually
resolved, the client-state ledger actually moves, the toolkits are actually
validated and the outcomes are actually derived. Nothing in the manager view is
written by the seeder; it only decides which practitioner made which choice.

After it runs:

| | Lessons | Consultations |
|---|---:|---:|
| Sophia García (experienced) | 6 | 4 |
| Elena Duarte | 0 | 3 |

and the manager view has real patterns to report.

**Review the novice journey before running the seeder**, or against a fresh
`data/mirror.db`.

## 5 · Exact EN/ES test instructions

The language switch is **EN / ES in the top-right of the header**, on every
screen including the sign-in, join and reset pages. It persists per browser.
The API also honours `?lang=es` and the `X-Mirror-Lang: es` header.

Parity here means **instructional value**, not string coverage. Run the same
path in both languages and compare what is actually taught.

### The EN path

1. Sign in as the **novice practitioner**.
2. **Curriculum** → the module grid. Each module states, verb-first, the skill it
   produces ("AFTER THIS MODULE").
3. Open **Module 6 → `m6l3` "Saying the number"**. Check, in order:
   - "Why a good practitioner gets this wrong" — the reasoning, not a warning;
   - "What she is thinking and not saying" — the client's interior voice;
   - the weak / average / strong ladder — *strong stays locked until the other
     two are read*, by design;
   - **the treatment cards** — the same principle priced on botulinum toxin,
     a laser course and PDO threads, with what is usually said and what it costs.
4. **Answer the first decision wrongly on purpose.** Watch the consequence, the
   coaching, and then the journey rail at the top **move back to RETRY** and
   re-light DECIDE with a superscript 2. That loop is the product's central
   claim and the thing a book cannot do.
5. Open **Module 7 → `m7l3` "I need to think about it"** for the **before/after
   conversation**: the same exchange run twice from an identical client line,
   with the divergence point marked in both columns.
6. **Consultations** → open **Case 07, Teresa Alonso** (distrustful after a bad
   prior experience — the hardest). Take it to a derived outcome and read the
   debrief.
7. **Your development** → the nine-stage arc: six stages on the screen, three in
   the clinic.

### The ES path

Switch to **ES** and repeat steps 2–7 exactly.

What to check specifically:

- **`m7l3`'s conversation** must carry the same instructional weight in Spanish,
  not a translation of it — guillemets «», native register, and the same
  divergence point.
- **Prices** must read `1.980 €` in Spanish and `€1,980` in English. One
  convention per language, never mixed inside a card.
- **No English term may appear inside a Spanish sentence** — no "Fase 6 —
  Recommendation", no `WEAK` badge. (`test/verify-spanish-is-spanish.js` and
  `test/verify-no-english-comparisons.js` check this mechanically; step 6's
  debrief is the screen where it was worst, and is worth reading closely.)
- Finish a consultation in Spanish and confirm the debrief reports what **held**,
  not that nothing did.

### The manager path (either language)

1. `npm run seed:demo`, then sign in as the **manager**.
2. **Start here** — the first ten minutes: play the consultation moment yourself.
3. **Team coaching** — the seven questions, each answered from recorded
   consultations with counts you can read aloud. Confirm there are **no scores,
   ratings, rankings or percentages** anywhere.
4. Record a coaching conversation from a "what to coach this week" row, then
   look at "what changed after coaching". With no practice since, it must say so
   rather than invent a trend.
5. **Clinic** — invite handover, password reset handover, and what the clinic
   keeps.

### Mobile

Every path above should be repeated at a phone width (**390px**). Chrome
DevTools device toolbar is sufficient. There should be no horizontal scrolling
on any screen.

## 6 · The book and the MBOK source

- **The book — *The Beauty Sales Secrets*** — is **not in this repository**, by
  deliberate decision: the repository is public for the review and the book is a
  commercial product on sale. It is supplied to Architecture as a **separate
  delivery**, alongside this handoff, as:
  - `thebeautysalessecretsbnPresslinks.epub` (English)
  - `lossecretosdevenderbellezabnPresslinks.epub` (Spanish)
  - `thebeautysalessecretsTRADE.pdf` (trade edition)

  What *is* in the repository is `test/fixtures/book-index.json` — chapter
  titles, word counts and term fingerprints, **no prose** — which is what
  `test/verify-book-citations.js` checks the lessons against.

- **The canonical MIRROR / MBOK source** is implemented in
  `server/framework/canonical.js`, with each element's MBOK citation at its
  definition. **The MBOK document itself is not in this repository and was not
  present in the build environment**, so those citations are asserted by the
  implementation rather than machine-verified. This is the one provenance claim
  in the build that is not checked by a test — see `BUILD_PROVENANCE.md` §3b.

## 7 · Checking the claims

```bash
npm test                      # 20 verifiers, 4,576 assertions, 0 failures
node scripts/loop-audit.js    # the learning loop and the reading/deciding ratio
```

The release gate checks its own completeness: `verify-hosted-readiness.js` fails
if any verifier on disk is missing from `npm test`.

Useful subsets:

```bash
npm run test:academy      # the Academy API end to end
npm run test:journey      # the commercial buyer journey, both languages
npm run test:spanish      # Spanish that is actually Spanish
npm run test:engine       # the consultation engine
```

## 8 · What is already known to be unfinished

Stated so it is not discovered mid-review:

1. **Never hosted** — deploy artifacts exist and verify; the build environment
   blocked tunnels and PaaS APIs.
2. **Never seen in its real typefaces** — Google Fonts was blocked; layout and
   rhythm were verified, letterforms were not.
3. **No real-user validation, therefore no efficacy claim anywhere.**
4. **MBOK citations are not machine-checked** — §6 above.
