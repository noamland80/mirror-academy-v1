# MIRROR Academy — content depth audit and learner journeys

**Date:** 2026-09-08 · **Build:** `mirror-academy-v1` · **Frozen RC `mirror-wow-v1-20260901`: untouched.**

Counts are not the acceptance test. This document records what was sampled, what was
rejected, what was changed as a result, and an honest answer to the value question for
three different buyers. It is reproducible:

```
node scripts/depth-audit.js [--seed N]      # the sample and the curriculum-wide flags
node /root/growth/proto-qa/journeys.js      # the three journeys, against the live API
```

---

## 1. The two MIRROR layers — the correction

The product previously used one word for two artefacts. It now says out loud that they
are two, and shows the join. This is **Module 1, lesson `m1l6` — "The two MIRRORs"**
(10 minutes, 6 blocks, 3 of them decisions), not engineering documentation.

The learner reads this sentence verbatim, in both languages:

> The 6-step MIRROR Method is the memorable practitioner method from The Beauty Sales
> Secrets. The 8-phase MIRROR Consultation Architecture is the deeper professional
> operating system that shows where those behaviors live across a complete consultation.

The canonical mapping table below is generated from `server/framework/method.js`, which
joins two existing source-traced tables. **No third framework was invented.** If a
canonical name ever changes, the table changes with it — it holds references, not copies.

| M.I.R.R.O.R (book) | Ch. | Canonical phases | Trust stages | Standards | Duties | Toolkits |
|---|---|---|---|---|---|---|
| M — Make Safe | 8 | 1 Preparation, 2 Connection | 1 Safety, 2 Attention | 1 | 1, 2 | #1 |
| I — Inquire | 9 | 3 Discovery | 2 Attention, 3 Understanding | 2 | 2, 4 | #1, #3 |
| R — Reflect | 10 | 4 Understanding | 3 Understanding | 2, 5 | 4 | #3 |
| R — Recommend | 11 | 5 Education, 6 Recommendation | 4 Credibility, 5 Alignment | 3, 4 | 1, 3, 4 | #4, #5 |
| O — Overcome | 12 | 7 Decision Support | 5 Alignment, 6 Reliability | 4, 5 | 2, 4 | #5, #6 |
| R — Resolve & Rise | 13 | 7 Decision Support, 8 Relationship Continuation | 6 Reliability, 7 Confirmation | 5, 6 | 1, 2, 3, 4 | #8, #16, #17 |

### Where the six do not cover the eight

Stated in the lesson, not papered over. The book does **not** teach the eight-phase
architecture and the Academy does not claim it does.

- **Phase 1 Preparation** — the book has no letter for it. It treats readiness as
  something done before the consultation (the file read as a prediction, the Reset ritual)
  and folds it into Make Safe. The architecture promotes it because it is where most of
  the avoidable damage is done.
- **Phase 5 Education** — the book does not separate teaching from recommending; Ch. 11
  does both inside one letter. The architecture separates them because a client can be
  well taught and still badly recommended to, and the two failures need different repairs.
- **Phase 8 Relationship Continuation** — Resolve & Rise carries everything after the
  decision. MBOK Ch. 6 gives continuation its own phase and its own states, because a
  relationship that continues is a different object from a decision that closed.

The `match` exercise in `m1l6` is built on this mismatch: the learner discovers there is
no letter to place in Phase 1 or Phase 6, and that one letter has to cover two phases.

**Enforced by 23 assertions** in `test/verify-content.js` (section "THE TWO MIRROR LAYERS
ARE RECONCILED, NOT COLLAPSED"), including that the six letters spell MIRROR, that all
eight phases are either claimed by a letter or carry an honest gap note, that six does not
map one-to-one onto eight, and that the verbatim statement appears in the lesson in both
languages.

---

## 2. Content depth audit

**Method.** Deterministic seeded sample, stratified so no module escapes review: one
lesson from every module, then five more at random, fifteen in total. Each is required to
show a distinct concept, a source, a practised behaviour, at least two interactive
decisions that return an explanation, and a real-world transfer assignment. Separately,
**all 60 lessons** are screened for near-duplication, thin Spanish, and reading-only
content.

### What the audit rejected, and what was done

| Rejected | Finding | Fix |
|---|---|---|
| `m8l4` | 179 content words — thin | Added a `translate` block: three consultations at the point of decision, rewritten as when / which / shall-I closes, each with the Duty-2 reasoning. 8 → 10 min. |
| `m1l1` | 177 words | Added a `compare` block: two replies to "I don't want to look done", one answering the treatment and one answering the decision. 6 → 8 min. |
| `m1l5` | 170 words | Added a `translate` block: three client openings, each inviting one of the four safety removals. 7 → 9 min. |
| `m3l5` | 174 words | Added a `choose` block: she fills the silence with "whatever you think is best" — declining the handover. 7 → 9 min. |
| `m10l6` | Only one interactive decision (found at seeds 7 and 99991) | Added a `check` block distinguishing Trust Stage 7 confirmation from ordinary warmth. 10 → 12 min. |
| `m7l6` ↔ `m9l4` | Vocabulary overlap, jaccard 0.238 | Adjudicated **distinct** — different phases, different actors. `m7l6` gained a `compare` block whose entire content is the distinction between a Phase 7 decline and a Phase 8 responsible ending. 10 → 12 min. |

The adjudication is recorded in the open in `scripts/depth-audit.js` with its reasoning.
A duplicate pair with **no** adjudication entry is reported as a rejection, so the
whitelist cannot grow silently.

### Result

```
seed 20260908  15 accepted, 0 rejected
seed 1         15 accepted, 0 rejected
seed 7         15 accepted, 0 rejected
seed 424242    15 accepted, 0 rejected
seed 99991     15 accepted, 0 rejected
seed 31337     15 accepted, 0 rejected
```

Curriculum-wide, across all 60 lessons: **0** lessons under 180 content words, **0**
mostly-reading lessons, **0** lessons whose Spanish is materially shorter than the
English, **1** near-duplicate pair, adjudicated.

### On Spanish depth — a correction to the instrument, disclosed

The first version of the detector compared Spanish and English *character counts* leaf by
leaf and flagged five lines. All five were read by hand. All five were correct, idiomatic
Spanish that preserved the full meaning:

| English | Spanish | Ratio |
|---|---|---|
| "Have a think about it and get in touch if you decide to go ahead." | «Piénsatelo y me dices si al final te decides». | 0.70 |
| "I'm going to have a look at a couple of other places first." | «Voy a mirar un par de sitios más primero». | 0.70 |
| "She is not a serious enquiry and the consultation will be short." | «No es una consulta seria y será corta». | 0.59 |

A clause-count test was tried next and was worse: it flagged every objective of the form
*"run the sequence, and know what each is for"*, because correct Spanish drops the comma
before *y*. Nine of nine inspected flags were false positives.

Padding those lines to satisfy a ratio would have made the product worse. So the
instrument was changed, not the content: Spanish depth is now measured **per prose
paragraph** (≥160 characters, where a summary genuinely shows as lost length) and **per
lesson** (total Spanish content words against total English, floor 0.85). Short quoted
dialogue is not length-tested, because at that scale the measurement was reading register
rather than depth. The hard guarantees — no missing translation, no untranslated copy, no
English left in a Spanish string — remain enforced as failures in
`test/verify-content.js`, which checks 1,966 bilingual strings.

Measured lesson content-word ratios sit between 0.94 and 1.06 across the curriculum.

### One honest limitation

Transfer assignments and field-journal follow-ups are **per module**, not per lesson. All
six lessons of Module 2 share Module 2's assignment. That was the original specification
and it is defensible — one field task per module is what a practitioner can actually carry
into a working week — but it means the audit's "real-world transfer" column shows the same
sentence for several sampled lessons. If per-lesson micro-assignments are wanted, that is
a real piece of work (60 assignments), not a tweak.

---

## 3. Three learner journeys

### Journey 1 — the novice practitioner (first week)

She signs in to 10 modules, 60 lessons, 562 minutes and 3 full cases, ordered so that
psychology precedes preparation, preparation precedes discovery, and nothing about price
appears until Module 6. Her first hour is `m1l1` → `m1l2` → `m1l3`: what the client is
actually deciding, the three entrances, the three layers. Fifteen blocks, nine of them
decisions.

Before Module 2 she is sent into a real clinic with a specific instruction and is asked a
specific question when she returns:

> Say nothing evaluative for the first ninety seconds. Open with one question, then let
> her finish twice — including the pause after she appears to have finished.
>
> *What did she say in the second pause that she would not have said otherwise?*

Her first consultation opens in Phase 1 Preparation with the Preparation Engine named on
screen and Sofia at posture *reserved*, willingness 40 — before Sofia has said anything.

**Verdict: yes.** She gets a sequenced curriculum, a named phase for every screen, and
homework that produces evidence rather than a feeling. The risk for her is volume, not
substance — 562 minutes is six to eight weeks at a realistic pace, and nothing in the
product currently paces her.

### Journey 2 — the experienced high performer

The honest test is whether the Academy can tell her something she does not already do.
Two things in the product do that.

**The distractors are the ones she would actually pick.** In `m5l3`, "present all five
options, ranked, so she can decide with complete information" is marked wrong under
Ethical Duty 2, because a choice containing a decoy is not a choice. In `m8l2`, after the
number and eight seconds of silence, "and of course we can look at splitting it" is marked
wrong. In `m7l2`, "would it help if I put the plan in writing so you can go through it
together?" is marked wrong — it answers the surface objection rather than diagnosing it.
These are not straw men; they are what a good closer says.

**The engine refuses to let her skip.** Running Case 03 the way a confident closer runs it
— read the file lightly, match her warmth, accept her agreement — the consultation is
**blocked at the Phase 3 gate**. The attempt cannot advance, and the evidence returned
names why:

```
Attention      STRAINED       Understanding  STRAINED
Credibility    STRAINED       Alignment      STRAINED

Motivation elicitation — DEVELOPMENT AREA
  The client's reason for acting now was never disclosed in this attempt.
```

Beatriz agrees with everything and discloses nothing, and the product will not let a
compliant client be converted into a YES. Across the enumerated outcome space her easy
path yields YES only 8.23% of the time.

**Verdict: yes, conditionally.** The value for her is the gate and the distractors, not
the reading. What is missing is a way for her to *start* there: there is no diagnostic
entry point that says "run Case 03 first, then we will tell you which three lessons you
need." She has to find her own way to Module 6 and Module 8. That is a real gap for the
experienced buyer and the highest-value next feature.

### Journey 3 — the manager

She opens 25 consultations across 2 practitioners (plus 2 opened-and-abandoned, now
excluded from the evidence and labelled as such — see the defect below). She gets four
answers, each an evidence sentence rather than a score:

> **Accepted an agreement the client had not earned the right to give** — 2 of 2
> practitioners, 20 occurrences across 25 recorded consultations, and in 20 of them the
> client was still withholding information afterwards. Willingness looked high while
> credibility was never established, which is the profile that cancels.
> *Coach: Module 8 Lesson 3, and Case 03. Ask each practitioner for a consultation where
> the client agreed with everything, and what they did about it.*

> **Phase 3 — Discovery is where the team is losing the room** — 12 of 23 recorded choices
> at Phase 3 did not hold, across 2 practitioners; 12 produced a measurable fall in the
> trust ledger.
> *Coach: review one recorded attempt at this phase together, stopping at the choice,
> before anyone sees the feedback.*

She can open any single consultation and read the practitioner's actual sequence of
choices, phase by phase, with the per-phase feedback and the Toolkit artifacts attached.

**Defect found and fixed during this journey.** A case that is opened and abandoned before
a single choice is recorded was being counted as a consultation. Every ratio in the
coaching moved whenever somebody clicked into a case and walked away — the same pattern
read "17 of 35" and then "20 of 25" depending on click noise. Abandoned attempts are now
excluded from the evidence, reported separately as `openedAndAbandoned`, and flagged in the
manager's list. Four assertions guard it.

**Verdict: yes.** This is the strongest part of the product commercially. It answers "who
do I coach on Monday, on what, and what do I say" from recorded behaviour, and it names a
specific lesson to send them to. No scores, no rankings, no self-assessment — enforced by
test.

---

## 4. Verification

| Suite | Assertions |
|---|---|
| `test/verify-product-v2.js` — engine, gates, tri-state outcomes | 71 |
| `test/verify-academy.js` — API, bilingual boundary, manager evidence | 82 |
| `test/verify-content.js` — curriculum shape, answer keys, bilingual parity, provenance, two-layer reconciliation | 881 |
| `test/verify-credentials.js` — burned-credential guard | 13 |
| `academy-e2e.js` — real browser, 13 lesson walks, 3 cases, Spanish, manager, 3 viewports | 58 |
| **Total** | **1,105** |

---

## 5. Compromised demo credentials

The three passwords published in the public repository are treated as burned. They may
remain in the frozen RC for architecture review; they are now structurally incapable of
being valid in a hosted instance.

- `MIRROR_MODE=hosted` requires every seed password to come from an environment variable,
  to be at least 16 characters, and to not be one of the three burned strings. Any
  violation aborts boot. There is no flag to relax it.
- At startup in hosted mode the server re-proves the rule against the live database: it
  attempts a real authentication with each burned password against each seeded account —
  nine probes — and refuses to start if any succeeds.
- `test/verify-credentials.js` proves both directions, including that a database seeded in
  demo mode is *refused* by the hosted guard.

**Still outstanding, and outside the code:** the repository is public, so the three strings
are readable by anyone. Making `noamland80/mirror-wow-v1` private is a settings change only
the owner can make.
