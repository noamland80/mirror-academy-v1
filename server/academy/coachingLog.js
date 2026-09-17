/**
 * COACHING, AND WHAT HAPPENED AFTER IT
 *
 * The four original manager questions describe a team. The fifth names what to
 * coach. This file answers the sixth, which is the one a clinic owner is
 * actually buying: **did the coaching work?**
 *
 * A manager records that she coached someone, on a named pattern or a named
 * phase, on a date. From then on the product can split that practitioner's
 * recorded choices into before and after, on exactly the thing that was
 * coached, and report the difference.
 *
 * Deliberately NOT a score:
 *   · it compares a person with her own earlier self, never with a colleague;
 *   · it reports counts and the sentences behind them, never a rating;
 *   · it says "not enough practice yet" rather than inventing a trend;
 *   · a result that got worse is reported as plainly as one that improved.
 */

const crypto = require('crypto');
const canonical = require('../framework/canonical');
const T = (en, es) => ({ en, es });

async function migrate(db) {
  await db.run(`CREATE TABLE IF NOT EXISTS coaching_notes (
    id TEXT PRIMARY KEY,
    clinic_id TEXT NOT NULL,
    practitioner_id TEXT NOT NULL,
    manager_id TEXT NOT NULL,
    pattern_key TEXT,
    phase TEXT,
    note TEXT NOT NULL,
    created_at TEXT NOT NULL
  )`);
  await db.run(`CREATE INDEX IF NOT EXISTS idx_cn_clinic ON coaching_notes(clinic_id)`);
  await db.run(`CREATE INDEX IF NOT EXISTS idx_cn_prac ON coaching_notes(practitioner_id)`);
}

async function record(db, manager, { practitionerId, patternKey, phase, note }) {
  if (!practitionerId) throw new Error('Choose the practitioner this conversation was with');
  if (!note || String(note).trim().length < 15) {
    throw new Error('Write what you actually said, in a sentence — it is what you will read back later');
  }
  const who = await db.getUserById(practitionerId);
  if (!who || who.clinic_id !== manager.clinic_id) throw new Error('That practitioner is not in this clinic');
  if (!patternKey && !phase) throw new Error('Name the pattern or the phase you coached, so the effect can be measured');

  const id = 'cn_' + crypto.randomBytes(6).toString('hex');
  await db.run(
    `INSERT INTO coaching_notes (id,clinic_id,practitioner_id,manager_id,pattern_key,phase,note,created_at)
     VALUES (?,?,?,?,?,?,?,?)`,
    [id, manager.clinic_id, practitionerId, manager.id, patternKey || null, phase || null,
     String(note).trim(), new Date().toISOString()]);
  return id;
}

function list(db, clinicId) {
  return db.all(`SELECT * FROM coaching_notes WHERE clinic_id = ? ORDER BY created_at DESC`, [clinicId]);
}

/** Did the choice hold? A decision that cost trust on any dimension did not. */
const held = d => {
  const delta = (d.consequence && d.consequence.trustDelta) || {};
  return !Object.values(delta).some(v => v < 0);
};

/**
 * Split one practitioner's recorded decisions around the moment she was
 * coached, and measure only the thing that was coached.
 *
 * `voice` decides who the sentences are addressed to. The same measurement is
 * read by two people: the manager who did the coaching, and the practitioner
 * whose work it is. Handing the manager's wording to the practitioner made her
 * read "the thing YOU coached" about herself — somebody else's voice narrating
 * her own consultations. So the numbers are computed once and spoken twice.
 */
function measure(note, attempts, patterns, voice) {
  const toHer = voice === 'practitioner';
  const mine = attempts.filter(a => a.practitionerId === note.practitioner_id && (a.decisions || []).length);
  const when = new Date(note.created_at);
  const before = mine.filter(a => new Date(a.startedAt) < when);
  const after = mine.filter(a => new Date(a.startedAt) >= when);

  const pattern = note.pattern_key ? patterns.find(p => p.key === note.pattern_key) : null;
  const phaseKey = note.phase || null;
  const phase = phaseKey ? canonical.getPhase(phaseKey) : null;

  const count = (list) => {
    let occurrences = 0, phaseChoices = 0, phaseHeld = 0;
    list.forEach(a => (a.decisions || []).forEach(d => {
      if (pattern && pattern.options.includes(d.optionId)) occurrences++;
      if (phaseKey && d.phase === phaseKey) { phaseChoices++; if (held(d)) phaseHeld++; }
    }));
    return { consultations: list.length, occurrences, phaseChoices, phaseHeld };
  };

  const b = count(before), a = count(after);

  // Honest about thin evidence. Two consultations is not a trend.
  if (a.consultations < 2) {
    return {
      state: 'too_early',
      before: b, after: a,
      headline: T(
        `Not enough practice since that conversation to say anything yet — ${a.consultations} consultation${a.consultations === 1 ? '' : 's'} recorded.`,
        `Todavía no hay práctica suficiente desde esa conversación para decir nada: ${a.consultations} consulta${a.consultations === 1 ? '' : 's'} registrada${a.consultations === 1 ? '' : 's'}.`),
      detail: toHer
        ? T('One more recorded consultation on the case you were sent to, and this will answer itself.',
            'Una consulta registrada más en el caso al que te mandaron y esto se responderá solo.')
        : T('Ask for one more recorded consultation on the case you sent her to, and this will answer itself.',
            'Pídele una consulta registrada más en el caso al que la enviaste y esto se responderá solo.')
    };
  }

  const lines = [];
  let direction = 'unchanged';

  if (pattern) {
    const rateB = b.consultations ? b.occurrences / b.consultations : 0;
    const rateA = a.occurrences / a.consultations;
    const subjectEn = toHer ? 'The pattern you talked about' : 'The pattern you coached';
    const subjectEs = toHer ? 'El patrón del que hablasteis' : 'El patrón que trabajaste';
    lines.push(T(
      `${subjectEn} — ${pattern.label.en.toLowerCase()} — appeared ${b.occurrences} time${b.occurrences === 1 ? '' : 's'} across the ${b.consultations} consultation${b.consultations === 1 ? '' : 's'} before that conversation, and ${a.occurrences} time${a.occurrences === 1 ? '' : 's'} across the ${a.consultations} since.`,
      `${subjectEs} —${pattern.label.es.toLowerCase()}— apareció ${b.occurrences} ${b.occurrences === 1 ? 'vez' : 'veces'} en las ${b.consultations} consulta${b.consultations === 1 ? '' : 's'} previas a esa conversación, y ${a.occurrences} ${a.occurrences === 1 ? 'vez' : 'veces'} en las ${a.consultations} posteriores.`));
    if (rateA < rateB * 0.6) direction = 'improved';
    else if (rateA > rateB * 1.4) direction = 'worse';
  }

  if (phase && b.phaseChoices + a.phaseChoices > 0) {
    lines.push(T(
      `At Phase ${phase.n} (${phase.name}), ${b.phaseHeld} of ${b.phaseChoices} recorded choices held before, and ${a.phaseHeld} of ${a.phaseChoices} since.`,
      `En la Fase ${phase.n} (${canonical.ES.phases[phaseKey].name}), ${b.phaseHeld} de ${b.phaseChoices} decisiones registradas se sostuvieron antes, y ${a.phaseHeld} de ${a.phaseChoices} después.`));
    const rB = b.phaseChoices ? b.phaseHeld / b.phaseChoices : 0;
    const rA = a.phaseChoices ? a.phaseHeld / a.phaseChoices : 0;
    if (!pattern) direction = rA > rB + 0.15 ? 'improved' : (rA < rB - 0.15 ? 'worse' : 'unchanged');
  }

  const headline = (toHer ? {
    improved: T('What you talked about is happening less often since that conversation.',
                'Lo que hablasteis ocurre menos desde esa conversación.'),
    worse: T('What you talked about is happening MORE often since that conversation. That is worth raising again, and differently.',
             'Lo que hablasteis ocurre MÁS desde esa conversación. Merece volver a plantearlo, y de otra manera.'),
    unchanged: T('Nothing has moved yet on what you talked about.',
                 'Todavía no se ha movido nada en lo que hablasteis.')
  } : {
    improved: T('The thing you coached is happening less often since you coached it.',
                'Lo que trabajaste ocurre menos desde que lo trabajaste.'),
    worse: T('The thing you coached is happening MORE often since you coached it. That is worth a second conversation, and a different one.',
             'Lo que trabajaste ocurre MÁS desde que lo trabajaste. Merece una segunda conversación, y distinta.'),
    unchanged: T('Nothing has moved yet on the thing you coached.',
                 'Todavía no se ha movido nada en lo que trabajaste.')
  })[direction];

  return {
    state: direction, before: b, after: a, headline,
    lines,
    caution: toHer
      ? T('This compares you with your own earlier work, on the one thing that was named. It is not a rating and it does not compare you with anybody else.',
          'Esto te compara con tu propio trabajo anterior, en lo único que se nombró. No es una calificación y no te compara con nadie.')
      : T('This compares her with her own earlier work, on the one thing you named. It is not a rating and it does not compare her with anybody else.',
          'Esto la compara con su propio trabajo anterior, en lo único que nombraste. No es una calificación y no la compara con nadie.')
  };
}

/**
 * Every coaching conversation in the clinic, with what happened after it.
 *
 * `voice` is 'manager' by default. Pass 'practitioner' to get the same numbers
 * addressed to the person whose work is being measured.
 */
async function effects(db, clinicId, attempts, practitioners, patterns, voice) {
  const notes = await list(db, clinicId);
  const byId = {};
  practitioners.forEach(p => { byId[p.id] = p.name; });
  return notes.map(n => ({
    id: n.id,
    practitionerId: n.practitioner_id,
    practitioner: byId[n.practitioner_id] || n.practitioner_id,
    patternKey: n.pattern_key,
    phase: n.phase,
    phaseName: n.phase ? canonical.phaseLabel(n.phase) : null,
    note: n.note,
    createdAt: n.created_at,
    effect: measure(n, attempts, patterns, voice)
  }));
}

module.exports = { migrate, record, list, effects, measure };
