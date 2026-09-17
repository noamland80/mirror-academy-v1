# BUILD PROVENANCE

Where every part of this build comes from, what is in this repository, and what
deliberately is not.

---

## 1 · The build under review

| | |
|---|---|
| **Build** | `mirror-academy-v1` · version `4.3.0` |
| **RC tag** | `mirror-academy-rc-20260916` |
| **RC commit** | `cef10429966878346fa264c8d45e6307675e4a55` |
| **Frozen** | 16 September 2026 |

**Review the tag, not the branch.**

```
git clone https://github.com/noamland80/mirror-academy-v1
cd mirror-academy-v1
git checkout mirror-academy-rc-20260916
git rev-parse HEAD        # must print cef10429966878346fa264c8d45e6307675e4a55
```

`main` is the RC commit **plus** the handoff commit that added this file and
`REVIEWING.md`. The RC itself was not rebuilt, regenerated, rewritten or
improved during transfer: the tag resolves to the same SHA that was frozen
before this repository existed, and `git diff mirror-academy-rc-20260916 main`
shows documentation only.

## 2 · Relationship to the other release candidate

`mirror-wow-v1 @ 031f102a9339207cfdf4ec7976de9c37bacde4b0` is a **separate**
release candidate, in a separate repository, untouched by this work and
verified untouched against its remote at freeze time. This build forks that
build's engine layer and adds the Academy on top. **It must not be merged into
that RC without an explicit decision.**

## 3 · The two sources, and only two

Everything the Academy teaches traces to one of exactly two sources. Nothing is
invented. `test/verify-nothing-invented.js` enforces this mechanically.

### 3a · The book — *The Beauty Sales Secrets* by Noam Landman

The learner-facing method: the 6 steps M·I·R·R·O·R across chapters 8–13, the
Price Moment (14), Mindset (15), Systems (16) and Mastery (17).

Every lesson carries a `provenance.chapter` and a `provenance.principle`, both
rendered on screen in a collapsible "Where this comes from" panel.

**The book's text is NOT in this repository.** What is here is
`test/fixtures/book-index.json` — chapter titles, word counts, distinctive-term
fingerprints and the client names appearing in each chapter, generated from the
author's own EPUB. It contains **no prose**.

`test/verify-book-citations.js` (23 assertions) verifies the citations against
that index: that M=8, I=9, R=10, R=11, O=12, R=13 match the book's own chapter
titles; that no lesson cites a chapter the book does not have; and that no
client story is attributed to the wrong chapter.

> **Why the book is not committed.** This repository is public for the duration
> of the review. The book is a commercial product on sale, and publishing its
> full text here would give it away. The author owns the copyright and could
> license it in, but that is a commercial decision with an obvious downside and
> it is not required for the review. **The book is supplied to Architecture as a
> separate delivery — see `REVIEWING.md` §6.**

### 3b · The canonical MIRROR architecture (MBOK v0.17)

The professional operating system: 8 consultation phases, 7 Trust Formation
Stages, 6 Trust Standards, 4 Ethical Duties, the Relationship Continuum, and
the Toolkit.

**In this repository:** `server/framework/canonical.js` is the single
authoritative implementation. Every element in it carries its MBOK citation in
the file header and at its definition:

| Element | Source |
|---|---|
| 8-Phase Consultation Framework | MBOK Ch.1 §1.16 |
| 4 Ethical Duties | MBOK Ch.2 |
| 7 Trust Formation Stages · 6 Trust Standards | MBOK Ch.3 |
| Relationship Continuum · ending relationships responsibly | MBOK Ch.6 |
| Five Engines · Phase Ownership Matrix · Decision Engine tri-state | Product layer |

> **The MBOK source document itself is not in this repository and was not
> present in the build environment.** `canonical.js` cites
> `MIRROR_Practitioner_Playbook_Source_Traceability.md`, which does not exist on
> the build machine. The citations are therefore **asserted by the
> implementation and have not been re-verified against the MBOK document during
> this build.** Architecture should treat the MBOK mapping as the one claim in
> this build that is not machine-checked, and check `canonical.js` against the
> MBOK directly. Every *other* provenance claim — chapters, phases, stages,
> standards, duties, toolkits — is verified by the test suite.

### 3c · The binding architecture rule

```
The Five Engines ORGANISE the learner experience.
They NEVER replace the 8 canonical phases.
The learner must always see: Engine + canonical Phase + Toolkit mechanism.
```

## 4 · The two MIRROR layers are joined, never collapsed

The 6-step **Method** from the book and the 8-phase **Architecture** from the
MBOK are different things. Most training conflates them. This build does not:
they are reconciled in `server/framework/method.js`, taught to the learner in
Module 1 lesson `m1l6`, and the three places where the six steps do not cover
the eight phases are stated explicitly rather than papered over.

**The book does not teach the 8-phase architecture, and this build does not
claim that it does.**

## 5 · What the build contains

| | |
|---|---:|
| Modules | 10 |
| Lessons | 60 |
| Teaching minutes | 659 |
| Exercise blocks | 329 |
| Retry moments | 60 |
| Treatment cards | 150 |
| Treatment families | 26 |
| Before/after conversations | 22 |
| Consultation cases | 9 |
| Lessons where reading outweighs deciding | 0 |
| Verifiers · assertions | 20 · 4,576 |

## 6 · Credentials and data

- **No real customer data** is in this repository. Every client in every case is
  fictional. Every practitioner and manager account is fictional.
- **No production credentials** are in this repository. `.env.example` contains
  variable names and explanatory comments only.
- The three review passwords in `server/seed.js` were published to a public
  repository in an earlier handoff and are therefore **permanently burned**.
  They are hard-coded as refused: `MIRROR_MODE=hosted` will not start with any
  of them, requires env-supplied replacements of at least 16 characters, and
  re-proves at boot that no burned credential authenticates against the live
  database. `tenancy.refuseBurned()` additionally rejects them at *every*
  account creation — clinic provisioning, the join page and password reset — so
  one cannot be reintroduced by a practitioner choosing it.
  **They are local review credentials that cannot be used against any hosted
  instance by design.** Guarded by `test/verify-credentials.js` and
  `test/verify-hosted-readiness.js`.

## 7 · Honest limits

1. **Never hosted.** Every deploy artifact exists and is verified
   (`Dockerfile`, `render.yaml`, `fly.toml`, `test/verify-hosted-readiness.js`),
   but the build environment blocked tunnels and PaaS APIs, so this product has
   never been served from a public URL.
2. **Never seen in its real typefaces.** Google Fonts was blocked in the build
   environment. Layout, weight, rhythm and colour were verified by eye across
   every screen; letterforms were not.
3. **No real-user validation, therefore no efficacy claim.**
   `PILOT_USER_TEST.md` holds a four-person protocol with pass thresholds and
   falsification criteria defined in advance. It has not been run. No efficacy
   or outcome claim appears anywhere in the product, and none should be made
   until it has.
4. **The MBOK citations are not machine-checked** — see §3b.
