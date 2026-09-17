# The lesson content contract

What every lesson carries, and what the screen is entitled to render. Written
before the content, so the writers and the renderer cannot disagree about shape.

Everything user-facing is `T(en, es)` — a `{ en, es }` pair built by the `T`
helper already imported in every content file. `scenarios.localize` collapses it
at the API boundary, so the browser only ever sees a plain string.

---

## 1 · `lesson.depth` — shipped, do not change

```js
depth: {
  whyItGoesWrong: T(...),   // why a COMPETENT practitioner errs here
  sheIsThinking:  T(...),   // the client's unspoken thought
  ladder: {
    weak:    { line: T(...), effect: T(...) },
    average: { line: T(...), effect: T(...) },
    strong:  { line: T(...), effect: T(...) }
  }
}
```

## 2 · `lesson.treatments` — NEW, required on every lesson

The single largest gap in the product: 54 of 60 lessons never named a
treatment. A practitioner who injects toxin all day was being taught the
consultation in the abstract.

Two or three entries per lesson. Each applies **this lesson's principle** to a
**named treatment**, because the treatment changes the moment: a €320 toxin
appointment and a €3,200 body programme are not the same conversation, and the
same sentence does different work in each.

```js
treatments: [
  {
    // The treatment, named the way a clinic names it.
    name: T('Botulinum toxin — upper face', 'Toxina botulínica — tercio superior'),
    // A real Madrid price, or a range. Never invented precision.
    price: T('€320, three areas', '320 €, tres zonas'),
    // One line: what makes THIS treatment's version of the moment different.
    why: T(...),
    // The moment itself, in this treatment's vocabulary.
    moment: T(...),
    // The two lines a practitioner actually chooses between here.
    weak:   { line: T(...), cost: T(...) },
    strong: { line: T(...), gain: T(...) }
  },
  // ...
]
```

Rules:
- **Name real treatments** that a Madrid aesthetic clinic offers: botulinum
  toxin, hyaluronic acid filler, skin boosters, mesotherapy, chemical peels,
  microneedling, laser (hair removal, vascular, resurfacing), IPL, radiofrequency,
  threads, PRP, body contouring, cryolipolysis, pigmentation programmes.
- **Vary them across the module.** A module whose three lessons all use toxin
  has taught one treatment, not a method.
- **Prices must be plausible for Madrid in 2026** and stated the way a clinic
  states them (per area, per session, per course of six). If a figure would be
  a guess, give a range and say it is a range.
- The `weak` line must be something a good practitioner would actually say —
  plausible, professional, and wrong for a reason the `cost` names.
- **No efficacy or medical claims.** Describe what is said in the room, never
  what a treatment achieves clinically.

## 3 · `lesson.conversation` — NEW, one per module minimum

The same exchange run twice: once the way it usually goes, once the way the
method runs it. A ladder compares single lines; this compares a whole exchange,
which is where a practitioner sees that the damage is cumulative.

```js
conversation: {
  setting: T(...),          // one line: who, which treatment, which minute
  before: [                 // 4–8 turns
    { who: 'client' | 'practitioner', line: T(...) }
  ],
  after:  [ /* same shape, same client, same opening line */ ],
  // What the second version did differently, in one paragraph.
  whatChanged: T(...),
  // What it cost, materially, to run it the first way.
  cost: T(...)
}
```

Rules:
- `before` and `after` must open on the **identical client line**, so the
  comparison is about the practitioner and nothing else.
- `before` is not a straw man. It is competent, courteous, and loses the room.
- Both arrays must name the same treatment and the same price.

## 4 · `module.outcome` — shipped

Verb-first, bilingual, a thing she can DO.

## 5 · `lesson.provenance` — shipped, do not change

`{ chapter, principle, phase, trustStage, standard, duty, toolkit }`

---

## What the screen does with these

- `treatments` → **treatment cards**: a card per treatment, its price, the
  moment, and the two lines with what each one costs or gains.
- `conversation` → **before/after conversation view**: two columns on a desk,
  stacked on a phone, with `whatChanged` beneath.
- Both are **teaching**, not exercises. Neither may be counted as the lesson's
  CHOOSE or RETRY stage, and neither is recorded against anybody.
- Both degrade to nothing when absent, so a lesson without them still renders.
