# MIRROR Academy — Commercial RC, for independent PASS/FAIL review

**Build** `mirror-academy-v1` · version `4.3.0` · frozen 16 September 2026
**Tag** `mirror-academy-rc-20260916` — the tag is the identity of this RC.
The commit SHA cannot be written inside the commit it names; resolve it with
`git rev-list -n1 mirror-academy-rc-20260916`, and check it against `RC_SHA.txt`,
which is written after the freeze and travels beside the bundle.

> **`mirror-wow-v1 @ 031f102a9339207cfdf4ec7976de9c37bacde4b0` is untouched.**
> Verified against the remote at freeze time. It remains a separate release
> candidate. This build forks its engine layer and adds the Academy on top; it
> must not be merged into that RC without an explicit decision.

---

## 1 · How to get this build

There is no GitHub repository for the Academy yet — creating one is the owner's
decision, not the build's. The RC ships as a complete, verifiable git bundle:

```
mirror-academy-rc-20260916.bundle        # 1.4 MB, complete history
git clone mirror-academy-rc-20260916.bundle mirror-academy
cd mirror-academy && git rev-list -n1 mirror-academy-rc-20260916   # compare with RC_SHA.txt
```

`git bundle verify` reports a complete history. Reviewing any commit other than
the one the tag resolves to is reviewing something else.

## 2 · How to run it

```
npm install          # express, cors, uuid — nothing else, no build step
npm start            # http://localhost:5000
```

Node 22.5+ needs nothing installed (the datastore is `node:sqlite`). Older Node
fetches one optional component on first run. A `Dockerfile`, `render.yaml` and
`fly.toml` are present and verified by `test/verify-hosted-readiness.js`.

## 3 · How to check the claims

```
npm test             # 20 verifiers, 4,576 assertions
node scripts/loop-audit.js
```

At freeze: **4,576 passed, 0 failed.** The release gate checks its own
completeness — `verify-hosted-readiness.js` fails if any verifier on disk is
missing from `npm test`, so the suite cannot silently rot.

| Verifier | Asserts |
|---|---:|
| `verify-content` | 2,173 |
| `verify-treatments` | 1,608 |
| `verify-commercial-journey` | 97 |
| `verify-case-06-07` | 91 |
| `verify-academy` | 85 |
| `verify-case-04-05` | 82 |
| `verify-case-08-09` | 73 |
| `verify-bilingual` | 74 |
| `verify-product-v2` | 71 |
| `verify-password-reset` | 46 |
| `verify-spanish-is-spanish` | 26 |
| `verify-coaching-returns` | 24 |
| `verify-book-citations` | 23 |
| `verify-hosted-readiness` | 22 |
| `verify-claims-are-true` | 18 |
| `verify-coaching-effect` | 16 |
| `verify-credentials` | 13 |
| `verify-sofia-branching` | 13 |
| `verify-nothing-invented` | 12 |
| `verify-no-english-comparisons` | 9 |

Every guard in this suite has been deliberately broken and observed to fail. A
green test nobody has seen go red is not evidence, and several of these were
written specifically because an earlier instrument flattered the build.

## 4 · What is being claimed

### Curriculum
- 10 modules · 60 lessons · 659 teaching minutes · 329 exercise blocks.
- Every module states, verb-first and in both languages, the skill a
  practitioner leaves with.
- Every lesson carries `depth`: why a **competent** practitioner gets this
  wrong, what the client is thinking and not saying, and the same moment
  written weak / average / strong with the effect of each.
- **150 treatment cards across 26 treatment families**, at plausible Madrid
  2026 prices, applying each lesson's own principle in that treatment's
  vocabulary. Before this round, 54 of 60 lessons never named a treatment.
- **22 before/after conversations**: the same exchange run twice from an
  identical client line, so the comparison is about the practitioner alone and
  the damage reads as cumulative.
- **60/60 lessons close** LEARN → SEE → DECIDE → CONSEQUENCE → UNDERSTAND →
  RETRY → APPLY → REFLECT. **0 lessons** where reading outweighs deciding.
- 60 retries, each declaring which of six axes it moves. A reveal is never
  counted as a retry — `translate` and `drill` are explicitly excluded.
- Every lesson is source-traced **on screen** to chapter, principle, phase,
  Trust Stage, Standard, Duty and Toolkit.

### The two MIRROR layers
The 6-step Method from the book (Ch. 8–13) and the 8-phase Consultation
Architecture (MBOK v0.17) are **joined and never collapsed**, reconciled in
`server/framework/method.js` and taught in `m1l6`, with the three places the six
do not cover the eight stated explicitly. The book does not teach the 8-phase
architecture and this build does not claim it does.

### Cases
9 consultations built on 9 distinct commercial failures — fear, identity,
over-agreement, price, unrealistic expectation, genuine uncertainty, distrust
after a bad prior experience, third-party influence, existing-client
complacency. Choices materially alter disclosure, posture, trust state,
objection, recommendation context and continuation. The outcome is **derived**
from the client's state, never chosen.

### Manager product
Seven questions answered from recorded behaviour, never from completion
tracking: who is practising · what repeats · where trust breaks · what to coach
· the evidence · **what changed after coaching** · the arc across the team.
The coaching-effect measurement compares a practitioner **only with her own
earlier work**, reports thin evidence as thin (`too_early`), and reports a
result getting worse as plainly as one improving. There are no scores, ratings,
rankings or percentages anywhere in the manager product.

### Bilingual
Parity of **instructional value**, not of strings. Fixed this round:
English phase names inside Spanish sentences; English verdict badges
(`WEAK`/`BEST`) shown to Spanish practitioners; two currency conventions inside
a single card; and a debrief that compared a translated word as an English
literal, so **every Spanish practitioner was told nothing she did had held**.
That last class of defect is now guarded by `verify-no-english-comparisons.js`.

### Nothing invented
`verify-nothing-invented.js` asserts 8 phases, 7 Trust Stages, 6 Standards,
4 Duties and nothing else; that every lesson cites a chapter the book actually
has; that no invented framework, formula or blueprint is named; and that
**nothing anywhere promises a result** — no conversion percentages, no revenue
promises, no clinical or efficacy claims, on any surface including the sales
pages.

## 5 · Suggested review path

1. Check out the tag, confirm the SHA against `RC_SHA.txt`, then `npm test`.
2. `node scripts/loop-audit.js` — the loop and the reading/deciding ratio.
3. Sign in as a practitioner. Open `m6l3` ("Saying the number") for the depth
   panel, the ladder and the treatment cards; then `m7l3` ("I need to think
   about it") for the before/after conversation.
4. Answer a lesson **wrongly on purpose** and watch the journey rail loop back
   to RETRY. That loop is the product's central claim.
5. Run one case end to end — `teresa-repair` is the hardest — and read the
   derived outcome and the debrief.
6. Switch to Spanish and repeat steps 3–5. The instructional depth must be
   identical, not merely translated.
7. Sign in as a manager: the seven questions, the coaching record, and the
   arc for the team.
8. Repeat any of the above at 390px.

## 6 · Known not production-ready

1. **No hosted instance.** Every deploy artifact exists and is verified, but the
   build environment blocks tunnels and PaaS APIs, so this product has never
   been served from a public URL. This is the one blocker between the RC and a
   founding pilot, and it needs a platform and credentials, not more code.
2. **Never seen in its real typefaces.** Google Fonts is blocked in the build
   environment; all visual verification used fallback faces. Layout, weight,
   rhythm and colour are verified; letterforms are not.
3. **No real-user validation.** `PILOT_USER_TEST.md` holds the four-person
   protocol, written with pass thresholds and falsification criteria defined in
   advance. It has not been run. **No efficacy claim is made anywhere in the
   product**, and none should be made until it has.

## 7 · Credentials

The three demo passwords published to the public repository are **burned**.
`MIRROR_MODE=hosted` refuses them, requires env-supplied replacements of at
least 16 characters, and re-proves at startup that no burned credential
authenticates against the live database. `tenancy.refuseBurned()` additionally
rejects them at **every** account creation — clinic provisioning, the join page
and password reset — so one cannot be reintroduced by a practitioner choosing
it. Guarded by `verify-credentials.js` and `verify-hosted-readiness.js`.

## 8 · The question this review should answer

Not "is there enough content". The two questions the build was held to:

- **Would a practitioner consult differently tomorrow because she used this
  today?**
- **Would a clinic owner pay €490 for visibility and coaching capability she
  cannot get by handing her team the book?**

A PASS should mean both are unequivocally yes on the evidence in the build, and
that the three items in §6 are understood as the honest remainder rather than
discovered during a customer demo.
