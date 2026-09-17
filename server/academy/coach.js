/**
 * MANAGER COACHING LAYER
 *
 * The manager view answers four questions and nothing else:
 *   WHO IS PRACTISING · WHERE THE TEAM LOSES TRUST · WHAT REPEATS ·
 *   WHAT TO COACH THIS WEEK
 *
 * Output is evidence sentences derived from the client-state ledger and the
 * recorded choices — never a score, a percentile or a league table. Every
 * sentence names a count and the consequence that count produced.
 */

const canonical = require('../framework/canonical');

const T = (en, es) => ({ en, es });

// ---------------------------------------------------------------------------
// Behaviour patterns. Each maps the recorded option ids (across every case) to
// one named practice pattern, so the same behaviour is counted whether it was
// performed on Sofia, Carmen or a later case.
// ---------------------------------------------------------------------------
const PATTERNS = [
  {
    key: 'premature_reassurance',
    options: ['conn-reassure', 'disc-reassure', 'disc-solution'],
    label: T('Reassured before understanding the concern', 'Tranquilizó antes de comprender la preocupación'),
    consequence: T('clients withheld information for the remainder of the consultation',
                   'las clientas se guardaron información durante el resto de la consulta'),
    coach: T('Run Module 3, Lesson 4 (The premature reassurance trap) as a team session. Ask each practitioner to write the exact reassuring sentence they use — they will recognise their own.',
             'Haz el Módulo 3, Lección 4 (La trampa de la tranquilización prematura) como sesión de equipo. Pide a cada profesional que escriba la frase tranquilizadora exacta que usa: reconocerán la suya.')
  },
  {
    key: 'took_the_easy_yes',
    options: ['prep-easy', 'conn-match', 'disc-accept', 'dec-close'],
    label: T('Accepted an agreement the client had not earned the right to give',
             'Aceptó un acuerdo que la clienta no había tenido ocasión de dar de verdad'),
    consequence: T('willingness looked high while credibility was never established, which is the profile that cancels',
                   'la disposición parecía alta mientras la credibilidad nunca se estableció, que es el perfil que acaba cancelando'),
    coach: T('Module 8, Lesson 3, and Case 03. Ask each practitioner for a consultation where the client agreed with everything, and what they did about it.',
             'Módulo 8, Lección 3, y el Caso 03. Pide a cada profesional una consulta en la que la clienta estuviera de acuerdo con todo, y qué hizo al respecto.')
  },
  {
    key: 'clinical_before_person',
    options: ['prep-skim', 'prep-clinical', 'conn-clinical', 'disc-clinical'],
    label: T('Opened clinically before the client had spoken', 'Abrió en clave clínica antes de que la clienta hablara'),
    consequence: T('Safety never established, so Discovery ran on the rehearsed account',
                   'la Seguridad nunca se estableció, así que el Descubrimiento funcionó con el relato ensayado'),
    coach: T('Module 2, Lesson 2 (Make Safe). Set one rule for the week: no assessment of the face until the client has finished two answers.',
             'Módulo 2, Lección 2 (Crear Seguridad). Fija una regla para la semana: ninguna valoración del rostro hasta que la clienta haya terminado dos respuestas.')
  },
  {
    key: 'assumed_understanding',
    options: ['und-assume', 'und-agree', 'und-praise'],
    label: T('Confirmed understanding that the client had not given', 'Confirmó una comprensión que la clienta no había dado'),
    consequence: T('the recommendation could not be traced to anything she valued',
                   'la recomendación no pudo trazarse hasta nada que ella valorase'),
    coach: T('Module 4, Lesson 2. Require "What I\'m hearing is…" followed by silence, in every consultation this week.',
             'Módulo 4, Lección 2. Exige «Lo que estoy escuchando es…» seguido de silencio, en cada consulta de esta semana.')
  },
  {
    key: 'interpreted_for_client',
    options: ['und-overreach'],
    label: T('Interpreted the client\'s meaning aloud instead of asking for it',
             'Interpretó en voz alta el significado de la clienta en vez de pedírselo'),
    consequence: T('the client corrected politely and disclosed nothing further',
                   'la clienta corrigió con educación y no reveló nada más'),
    coach: T('Module 3, Lesson 6. Name the signal, not the meaning — practise the exact wording.',
             'Módulo 3, Lección 6. Nombra la señal, no el significado: practicad la formulación exacta.')
  },
  {
    key: 'oversold',
    options: ['edu-oversell', 'edu-features', 'edu-menu', 'edu-minimize', 'edu-programme'],
    label: T('Presented options without an honest ceiling', 'Presentó opciones sin un techo honesto'),
    consequence: T('an expectation was created that the follow-up plan will have to defend',
                   'se creó una expectativa que el plan de seguimiento tendrá que defender'),
    coach: T('Module 5, Lesson 3 (Honest limits before benefits). Audit one recommendation per practitioner for field 6 of Toolkit #4.',
             'Módulo 5, Lección 3 (Límites honestos antes que beneficios). Audita una recomendación por profesional en el campo 6 del Toolkit #4.')
  },
  {
    key: 'price_before_value',
    options: ['rec-price-first', 'rec-package', 'disc-price', 'rec-full'],
    label: T('Reached the number before the value structure existed', 'Llegó a la cifra antes de que existiera la estructura de valor'),
    consequence: T('price became the objection because nothing else had been established',
                   'el precio se convirtió en la objeción porque no se había establecido nada más'),
    coach: T('Module 6, Lessons 1 and 3. The four price laws, then one drill: say the number once and stop talking.',
             'Módulo 6, Lecciones 1 y 3. Las cuatro leyes del precio y un ejercicio: di la cifra una vez y calla.')
  },
  {
    key: 'pressure_at_decision',
    options: ['dec-overcome', 'obj-pressure', 'obj-discount', 'dec-concede', 'rec-abdicate', 'dec-pressure'],
    label: T('Pushed, discounted or abdicated at the decision', 'Presionó, descontó o abdicó en el momento de la decisión'),
    consequence: T('posture moved to withdrawn and the derived outcome fell to NO',
                   'la postura pasó a retraída y el resultado derivado cayó a NO'),
    coach: T('Module 7, Lesson 2 (Diagnose before you respond) plus Module 8, Lesson 2 (The partnership close).',
             'Módulo 7, Lección 2 (Diagnostica antes de responder) y Módulo 8, Lección 2 (El cierre en colaboración).')
  }
];

const patternFor = optionId => PATTERNS.find(p => p.options.includes(optionId)) || null;

const plural = (n, one, many) => (n === 1 ? one : many);

// ---------------------------------------------------------------------------
function whoIsPractising(attempts, progressRows, reflectionRows, practitioners) {
  const byId = {};
  practitioners.forEach(p => {
    byId[p.id] = {
      practitionerId: p.id, name: p.name,
      consultations: 0, completed: 0, lessons: 0,
      assignmentsOpen: 0, assignmentsAnswered: 0,
      lastActive: null, outcomes: { YES: 0, DEFER: 0, NO: 0 }
    };
  });
  attempts.forEach(a => {
    const r = byId[a.practitionerId];
    if (!r) return;
    r.consultations += 1;
    if (a.status === 'completed') r.completed += 1;
    if (a.decisionOutcome) r.outcomes[a.decisionOutcome.outcome] += 1;
    const when = a.completedAt || a.startedAt;
    if (!r.lastActive || when > r.lastActive) r.lastActive = when;
  });
  progressRows.forEach(row => {
    const r = byId[row.user_id];
    if (!r) return;
    if (row.status === 'complete') r.lessons += 1;
    if (!r.lastActive || row.updated_at > r.lastActive) r.lastActive = row.updated_at;
  });
  reflectionRows.forEach(row => {
    const r = byId[row.user_id];
    if (!r) return;
    if (row.status === 'open') r.assignmentsOpen += 1; else r.assignmentsAnswered += 1;
  });

  const rows = Object.values(byId).sort((a, b) => (b.lastActive || '').localeCompare(a.lastActive || ''));
  const active = rows.filter(r => r.consultations > 0 || r.lessons > 0);
  const dormant = rows.filter(r => r.consultations === 0 && r.lessons === 0);

  const headline = dormant.length
    ? T(`${active.length} of ${rows.length} practitioners have practised. ${dormant.map(d => d.name).join(', ')} ${plural(dormant.length, 'has', 'have')} not started.`,
        `${active.length} de ${rows.length} profesionales han practicado. ${dormant.map(d => d.name).join(', ')} no ${plural(dormant.length, 'ha', 'han')} empezado.`)
    : T(`All ${rows.length} practitioners have practised.`, `Los ${rows.length} profesionales han practicado.`);

  return { headline, rows };
}

// ---------------------------------------------------------------------------
function whereTrustIsLost(attempts) {
  const perPhase = {};
  attempts.forEach(a => {
    (a.feedback || []).filter(f => f.kind === 'decision').forEach(f => {
      const key = f.phase;
      perPhase[key] = perPhase[key] || { key, misaligned: 0, partial: 0, total: 0, practitioners: new Set(), drops: 0 };
      const rec = perPhase[key];
      rec.total += 1;
      const v = f.feedback.alignmentVerdict || '';
      if (/^NOT ALIGNED/.test(v)) { rec.misaligned += 1; rec.practitioners.add(a.practitionerId); }
      else if (/^PARTIALLY/.test(v)) { rec.partial += 1; rec.practitioners.add(a.practitionerId); }
    });
    (a.decisions || []).forEach(d => {
      const c = d.consequence || {};
      const drop = Object.values(c.trustDelta || {}).some(v => v < 0);
      if (drop) {
        perPhase[d.phase] = perPhase[d.phase] || { key: d.phase, misaligned: 0, partial: 0, total: 0, practitioners: new Set(), drops: 0 };
        perPhase[d.phase].drops += 1;
      }
    });
  });

  const rows = Object.values(perPhase).map(r => {
    const p = canonical.getPhase(r.key);
    const nPrac = r.practitioners.size;
    // A phase has a name in each language. Reading the English one into a
    // Spanish sentence is the commonest way a bilingual product quietly stops
    // being bilingual, so the Spanish name is looked up, never inherited.
    const esName = (canonical.ES.phases[r.key] || {}).name || p.name;
    return {
      phaseKey: r.key, n: p.n, name: p.name,
      phaseName: T(p.name, esName),
      total: r.total, misaligned: r.misaligned, partial: r.partial, drops: r.drops,
      practitioners: nPrac,
      evidence: T(
        `${r.misaligned + r.partial} of ${r.total} recorded ${plural(r.total, 'choice', 'choices')} at Phase ${p.n} (${p.name}) did not hold, across ${nPrac} ${plural(nPrac, 'practitioner', 'practitioners')}. ${r.drops} produced a measurable fall in the trust ledger.`,
        `${r.misaligned + r.partial} de ${r.total} ${plural(r.total, 'decisión registrada', 'decisiones registradas')} en la Fase ${p.n} (${esName}) no se sostuvieron, en ${nPrac} ${plural(nPrac, 'profesional', 'profesionales')}. ${r.drops} produjeron una caída medible en el registro de confianza.`)
    };
  }).filter(r => r.misaligned + r.partial > 0)
    .sort((a, b) => (b.misaligned * 2 + b.partial) - (a.misaligned * 2 + a.partial));

  return rows;
}

// ---------------------------------------------------------------------------
function whatRepeats(attempts) {
  const counts = {};
  attempts.forEach(a => {
    const seen = new Set();
    (a.decisions || []).forEach(d => {
      const pat = patternFor(d.optionId);
      if (!pat) return;
      counts[pat.key] = counts[pat.key] || { pattern: pat, occurrences: 0, practitioners: new Set(), attempts: new Set(), withheldAfter: 0 };
      const rec = counts[pat.key];
      rec.occurrences += 1;
      rec.practitioners.add(a.practitionerId);
      rec.attempts.add(a.id);
      const c = d.consequence || {};
      if ((c.stillWithheld || []).length) rec.withheldAfter += 1;
      seen.add(pat.key);
    });
  });

  const totalPractitioners = new Set(attempts.map(a => a.practitionerId)).size;
  const totalAttempts = attempts.length;

  return Object.values(counts).map(r => {
    const nPrac = r.practitioners.size;
    const nAtt = r.attempts.size;
    return {
      key: r.pattern.key,
      label: r.pattern.label,
      practitioners: nPrac,
      occurrences: r.occurrences,
      attempts: nAtt,
      evidence: T(
        `${nPrac} of ${totalPractitioners} practitioners ${plural(nPrac, 'has', 'have')} ${String(r.pattern.label.en).charAt(0).toLowerCase() + String(r.pattern.label.en).slice(1)}. Across ${totalAttempts} recorded ${plural(totalAttempts, 'consultation', 'consultations')}, this occurred ${r.occurrences} ${plural(r.occurrences, 'time', 'times')}, and in ${r.withheldAfter} of them the client was still withholding information afterwards — ${r.pattern.consequence.en}.`,
        `${nPrac} de ${totalPractitioners} profesionales ${plural(nPrac, 'ha', 'han')} ${String(r.pattern.label.es).charAt(0).toLowerCase() + String(r.pattern.label.es).slice(1)}. En ${totalAttempts} ${plural(totalAttempts, 'consulta registrada', 'consultas registradas')}, ocurrió ${r.occurrences} ${plural(r.occurrences, 'vez', 'veces')}, y en ${r.withheldAfter} de ellas la clienta seguía reteniendo información después: ${r.pattern.consequence.es}.`),
      single: r.occurrences === 1,
      coach: r.pattern.coach
    };
  }).sort((a, b) => (b.practitioners - a.practitioners) || (b.occurrences - a.occurrences));
}

// ---------------------------------------------------------------------------
function coachThisWeek(repeats, trustRows, practising) {
  const items = [];

  if (repeats.length) {
    const top = repeats[0];
    items.push({
      priority: 1,
      title: top.label,
      evidence: top.evidence,
      action: top.coach,
      basis: T('Derived from recorded consultation choices, not from a self-assessment.',
               'Derivado de decisiones registradas en consulta, no de una autoevaluación.')
    });
  }

  if (trustRows.length) {
    const t = trustRows[0];
    if (!repeats.length || repeats[0].key !== 'premature_reassurance' || t.n !== 3) {
      items.push({
        priority: items.length + 1,
        title: T(`Phase ${t.n} — ${t.name} is where the team is losing the room`,
                 `Fase ${t.n} — ${t.phaseName.es} es donde el equipo pierde la sala`),
        evidence: t.evidence,
        action: T('Review one recorded attempt at this phase together, stopping at the choice, before anyone sees the feedback.',
                  'Revisad juntos un intento registrado en esta fase, parando en la decisión, antes de que nadie vea la retroalimentación.'),
        basis: T('Derived from the client-state ledger.', 'Derivado del registro de estado de la clienta.')
      });
    }
  }

  const dormant = practising.rows.filter(r => r.consultations === 0 && r.lessons === 0);
  if (dormant.length) {
    items.push({
      priority: items.length + 1,
      title: T('Practitioners who have not started', 'Profesionales que no han empezado'),
      evidence: T(`${dormant.map(d => d.name).join(', ')} ${plural(dormant.length, 'has', 'have')} no recorded lessons and no recorded consultations.`,
                  `${dormant.map(d => d.name).join(', ')} no ${plural(dormant.length, 'tiene', 'tienen')} lecciones ni consultas registradas.`),
      action: T('Assign Module 1 (38 minutes) and one Case 01 attempt before the next team meeting.',
                'Asigna el Módulo 1 (38 minutos) y un intento del Caso 01 antes de la próxima reunión de equipo.'),
      basis: T('Activity record.', 'Registro de actividad.')
    });
  }

  const openAssignments = practising.rows.reduce((s, r) => s + r.assignmentsOpen, 0);
  if (openAssignments > 0) {
    items.push({
      priority: items.length + 1,
      title: T('Field assignments awaiting an answer', 'Tareas de campo pendientes de respuesta'),
      evidence: T(`${openAssignments} module ${plural(openAssignments, 'assignment', 'assignments')} ${plural(openAssignments, 'is', 'are')} open. Each one asks a practitioner what happened when they used the method with a real client.`,
                  `${openAssignments} ${plural(openAssignments, 'tarea de módulo está pendiente', 'tareas de módulo están pendientes')}. Cada una pregunta al profesional qué pasó cuando usó el método con una clienta real.`),
      action: T('Read the answers aloud in the team meeting. They are the only record of the method leaving the screen.',
                'Lee las respuestas en voz alta en la reunión de equipo. Son el único registro de que el método sale de la pantalla.'),
      basis: T('Assignment record.', 'Registro de tareas.')
    });
  }

  return items;
}


// ---------------------------------------------------------------------------
// WHAT SHOULD THIS PERSON REPEAT?
//
// The four earlier questions describe the team. This one names, for each
// practitioner individually, the ONE lesson and the ONE case to send her back
// to, and quotes the evidence from her own consultations that says why.
//
// Everything here is derived. There is no score, no ranking and no ordering of
// practitioners against each other: two people with the same pattern get the
// same prescription regardless of how much either has practised.
// ---------------------------------------------------------------------------

/** Which case rehearses which failure, and what makes that case the right one. */
const CASE_FOR_PATTERN = {
  premature_reassurance: { case: 'sofia-melasma',     why: T('Sofia withholds a motive she never volunteers. Reassurance closes the only door it comes through.', 'Sofia se guarda un motivo que nunca ofrece. La tranquilización cierra la única puerta por la que sale.') },
  took_the_easy_yes:     { case: 'beatriz-programme', why: T('Beatriz agrees with everything. She is the only client in the library who cannot be converted by agreement.', 'Beatriz está de acuerdo con todo. Es la única clienta de la biblioteca a la que no se puede convertir con acuerdos.') },
  price_before_value:    { case: 'isabel-fullface',   why: T('Isabel asks the price early and repeatedly, and a discount is the one answer that loses her.', 'Isabel pregunta el precio pronto y varias veces, y el descuento es la única respuesta que la pierde.') },
  options_without_ceiling: { case: 'lucia-body',      why: T('Lucía expects an outcome no device can produce. The ceiling has to be named before the recommendation, not after.', 'Lucía espera un resultado que ningún equipo puede dar. El techo hay que nombrarlo antes de la recomendación, no después.') },
  opened_clinically:     { case: 'teresa-repair',     why: T('Teresa arrives distrustful with photographs. Opening clinically here reads as the same room she was hurt in.', 'Teresa llega desconfiada y con fotos. Abrir en clave clínica aquí suena a la misma consulta donde le hicieron daño.') },
  pushed_at_decision:    { case: 'nuria-undecided',   why: T('Nuria is genuinely undecided, and the case is built so that pushing her produces a worse outcome than waiting.', 'Nuria está de verdad indecisa, y el caso está construido para que presionarla dé un resultado peor que esperar.') },
  confirmed_not_given:   { case: 'pilar-thirdparty',  why: T('Pilar reports somebody else\'s view. Confirming an understanding she never gave is the whole trap.', 'Pilar transmite la opinión de otra persona. Confirmar una comprensión que ella nunca dio es justo la trampa.') }
};

/** The phase a practitioner keeps losing maps to the module that teaches it. */
const MODULE_FOR_PHASE = {
  preparation: { module: 'm2', title: T('Preparation & Safety', 'Preparación y Seguridad') },
  connection: { module: 'm2', title: T('Preparation & Safety', 'Preparación y Seguridad') },
  discovery: { module: 'm3', title: T('Discovery', 'Descubrimiento') },
  understanding: { module: 'm4', title: T('Understanding & Alignment', 'Comprensión y Alineación') },
  education: { module: 'm5', title: T('Building the Recommendation', 'Construir la Recomendación') },
  recommendation: { module: 'm5', title: T('Building the Recommendation', 'Construir la Recomendación') },
  decisionSupport: { module: 'm8', title: T('Decision Support', 'Acompañamiento de la Decisión') },
  continuation: { module: 'm9', title: T('Follow-up & Continuation', 'Seguimiento y Continuidad') }
};

function whatToRepeat(attempts, practitioners, scenarios) {
  return practitioners.map(p => {
    const mine = attempts.filter(a => a.practitionerId === p.id && (a.decisions || []).length);
    if (!mine.length) {
      return {
        practitionerId: p.id, name: p.name, state: 'not_started',
        headline: T(`${p.name} has not recorded a consultation yet.`, `${p.name} todavía no ha registrado ninguna consulta.`),
        evidence: T('There is nothing to coach from yet. The prescription appears as soon as she completes one case.',
                    'Todavía no hay nada sobre lo que entrenar. La recomendación aparece en cuanto complete un caso.'),
        repeatLesson: null, repeatCase: null
      };
    }

    // Which recorded pattern does this person repeat most?
    const hits = {};
    mine.forEach(a => (a.decisions || []).forEach(d => {
      PATTERNS.forEach(pat => { if (pat.options.includes(d.optionId)) hits[pat.key] = (hits[pat.key] || 0) + 1; });
    }));
    const topPattern = Object.entries(hits).sort((x, y) => y[1] - x[1])[0];

    // Which phase does her trust ledger fall at most often?
    const phaseDrops = {};
    mine.forEach(a => (a.decisions || []).forEach(d => {
      const delta = (d.consequence && d.consequence.trustDelta) || {};
      const fell = Object.values(delta).some(v => v < 0);
      if (fell) phaseDrops[d.phase] = (phaseDrops[d.phase] || 0) + 1;
    }));
    const topPhase = Object.entries(phaseDrops).sort((x, y) => y[1] - x[1])[0];

    const pattern = topPattern ? PATTERNS.find(x => x.key === topPattern[0]) : null;
    const phaseKey = topPhase ? topPhase[0] : null;
    const mod = phaseKey ? MODULE_FOR_PHASE[phaseKey] : null;
    const caseRec = pattern ? CASE_FOR_PATTERN[pattern.key] : null;
    const caseMeta = caseRec && scenarios ? scenarios.find(c => c.id === caseRec.case) : null;

    // The evidence sentence: her own counts, never a grade.
    const outcomes = mine.filter(a => a.decisionOutcome).reduce((acc, a) => {
      acc[a.decisionOutcome.outcome] = (acc[a.decisionOutcome.outcome] || 0) + 1; return acc;
    }, {});
    const outcomeText = Object.entries(outcomes).map(([k, v]) => `${v} ${k}`).join(', ') || 'none completed';

    const phaseName = phaseKey ? canonical.getPhase(phaseKey) : null;
    const evidence = T(
      `Across ${mine.length} recorded consultation${mine.length === 1 ? '' : 's'} (${outcomeText}), ` +
      (pattern ? `${p.name} chose "${pattern.label.en}" ${topPattern[1]} time${topPattern[1] === 1 ? '' : 's'}` : `${p.name} recorded no repeating pattern`) +
      (phaseName ? `, and her trust ledger fell most often at Phase ${phaseName.n} (${phaseName.name}) — ${topPhase[1]} time${topPhase[1] === 1 ? '' : 's'}.` : '.'),
      `En ${mine.length} consulta${mine.length === 1 ? '' : 's'} registrada${mine.length === 1 ? '' : 's'} (${outcomeText}), ` +
      (pattern ? `${p.name} eligió «${pattern.label.es}» ${topPattern[1]} ${topPattern[1] === 1 ? 'vez' : 'veces'}` : `${p.name} no repite ningún patrón`) +
      (phaseName ? `, y su registro de confianza cayó sobre todo en la Fase ${phaseName.n} (${canonical.ES.phases[phaseKey].name}): ${topPhase[1]} ${topPhase[1] === 1 ? 'vez' : 'veces'}.` : '.')
    );

    return {
      practitionerId: p.id, name: p.name, state: 'ready',
      headline: pattern
        ? T(`Send ${p.name} back to one lesson and one case.`, `Manda a ${p.name} de vuelta a una lección y a un caso.`)
        : T(`${p.name} is not repeating a recorded pattern.`, `${p.name} no repite ningún patrón registrado.`),
      evidence,
      repeatLesson: mod ? { moduleId: mod.module, title: mod.title,
        reason: T(`This is the phase her ledger falls at most often.`, `Es la fase donde más cae su registro.`) } : null,
      repeatCase: caseMeta ? { id: caseMeta.id, caseNumber: caseMeta.caseNumber, title: caseMeta.title, why: caseRec.why } : null,
      conversation: pattern ? pattern.coach : null,
      basis: T('Derived from this practitioner\'s own recorded choices. It is not a rating, and it does not compare her with anyone else.',
               'Derivado de las decisiones registradas por esta profesional. No es una calificación y no la compara con nadie.')
    };
  });
}

// ---------------------------------------------------------------------------
function managerView({ attempts, progressRows, reflectionRows, practitioners, clinicName, scenarios }) {
  // A case that was opened and abandoned before a single choice was recorded is
  // not a consultation, and counting it silently distorts every ratio in this
  // view — "11 of 24 choices at Preparation" becomes a different number
  // depending on how many times somebody clicked into a case and walked away.
  // Those rows are excluded from the evidence and reported separately, so the
  // manager can see that they exist without them moving the coaching.
  const all = attempts;
  const abandoned = attempts.filter(a => a.status !== 'completed' && (a.decisions || []).length === 0);
  attempts = attempts.filter(a => !abandoned.includes(a));

  const practising = whoIsPractising(attempts, progressRows, reflectionRows, practitioners);
  const trustRows = whereTrustIsLost(attempts);
  const repeats = whatRepeats(attempts);
  return {
    clinic: clinicName,
    generatedAt: new Date().toISOString(),
    basis: T('Every sentence below is derived from recorded consultation choices and the client-state ledger they produced. There are no scores, rankings or self-assessments in this view.',
             'Cada frase de esta vista se deriva de decisiones registradas en consulta y del registro de estado de la clienta que produjeron. Aquí no hay puntuaciones, clasificaciones ni autoevaluaciones.'),
    practising,
    trustLoss: trustRows,
    repeats,
    coachThisWeek: coachThisWeek(repeats, trustRows, practising),
    whatToRepeat: whatToRepeat(attempts, practitioners, scenarios),
    totals: {
      consultations: attempts.length,
      completed: attempts.filter(a => a.status === 'completed').length,
      openedAndAbandoned: abandoned.length,
      lessonsCompleted: progressRows.filter(r => r.status === 'complete').length,
      assignmentsAnswered: reflectionRows.filter(r => r.status === 'answered').length
    }
  };
}

module.exports = { managerView, PATTERNS };
