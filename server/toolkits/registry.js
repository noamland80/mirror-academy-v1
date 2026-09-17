/**
 * TOOLKIT EXECUTION LAYER
 *
 * A Toolkit item does not count because a form exists.
 * Every toolkit here is:
 *   (a) opened IN CONTEXT at its canonical phase,
 *   (b) VALIDATED against the canonical field structure and against what the
 *       client has actually disclosed, and
 *   (c) APPLIES EFFECTS to the client-state ledger, so the artifact changes
 *       what happens later in the simulation.
 *
 * Field structures are source-traced (MIRROR Toolkit v1.0 §1).
 */

const { applyEffects } = require('../scenario/sofiaScenario');

const T = (name, label, opts = {}) => Object.assign({ name, label, type: 'textarea' }, opts);
/** Bilingual leaf; localize() resolves it at the API boundary. */
const B = (en, es) => ({ en, es });

// ---------------------------------------------------------------------------
// CASE PARAMETRISATION
// The validators are scenario-agnostic. Case-specific facts (client name, which
// reveal carries the motivation, what the honest limitation is) arrive via
// ctx.caseFacts. The defaults below are the canonical Sofia case, so every
// existing assertion continues to hold byte-for-byte.
// ---------------------------------------------------------------------------
const SOFIA_FACTS = {
  clientName: 'Sofia',
  motivationItem: 'hidden_motivation',
  motiveRegex: /(video|call|camera|work|client|professional|seen|visib)/i,
  priorExperienceIssue: 'Prior experience risk is blank. Sofia disclosed a prior laser outcome — the canvas must carry it or Phase 7 will meet it cold.',
  whyNowIssue: 'You ticked "I understand why it matters now", but Sofia has not disclosed her motivation. Untick it or return to Discovery and ask.',
  undisclosedMotiveIssue: 'MATERIAL: Sofia never disclosed a motivation in this attempt. Recording an inferred motivation as fact is not permitted — write "Not disclosed" and note what you would ask next time.',
  motiveIssue: 'Sofia disclosed a professional-visibility motive (video calls). The map does not reflect it.',
  limitationIssue: 'Field 6 states no limitation. Melasma is managed, not cured — an expectation with no ceiling is an overclaim (Ethical Duty 4).'
};

function factsOf(ctx) {
  const cf = (ctx && ctx.caseFacts) || {};
  return Object.assign({}, SOFIA_FACTS, cf);
}

// ---------------------------------------------------------------------------
// #1 CLIENT INTAKE & DISCOVERY CANVAS  (Phase 3)
// Components: intake section + 6-item Discovery Depth Check
// ---------------------------------------------------------------------------
const toolkit1 = {
  n: 1,
  name: B('Client Intake & Discovery Canvas', 'Lienzo de Admisión y Descubrimiento'),
  phase: 'discovery',
  intro: B('Complete during Discovery. The six-item Depth Check is the canonical criterion for advancing to Phase 4.', 'Complétalo durante el Descubrimiento. La Comprobación de Profundidad de seis puntos es el criterio canónico para avanzar a la Fase 4.'),
  fields: [
    T('situation', B('Situation in the client\'s own words', 'La situación con las palabras de la clienta'), { required: true }),
    T('tried', B('What has already been tried, and what happened', 'Qué se ha probado ya y qué pasó'), { required: true }),
    T('constraints', B('Expectations and constraints (time, budget, risk tolerance)', 'Expectativas y limitaciones (tiempo, presupuesto, tolerancia al riesgo)'), { required: true }),
    T('priorExperience', B('Prior experience risk — anything that happened to them or someone close to them', 'Riesgo por experiencia previa: algo que les haya pasado a ellas o a alguien cercano'), { required: true }),
    {
      name: 'depthCheck',
      label: B('Discovery Depth Check — tick only what is actually true', 'Comprobación de Profundidad — marca solo lo que sea realmente cierto'),
      type: 'checklist',
      required: true,
      items: [
        { key: 'wantsToChange',  label: B('I understand what the client wants to change', 'Entiendo qué quiere cambiar la clienta') },
        { key: 'whyNow',         label: B('I understand why it matters now', 'Entiendo por qué le importa ahora') },
        { key: 'whatTried',      label: B('I know what has been tried', 'Sé qué se ha probado') },
        { key: 'expectations',   label: B('I know their expectations and constraints', 'Conozco sus expectativas y limitaciones') },
        { key: 'decisionCriteria', label: B('I know their decision criteria', 'Conozco sus criterios de decisión') },
        { key: 'feelsHeard',     label: B('The client feels heard', 'La clienta se siente escuchada') }
      ]
    }
  ],
  validate(data, cs, artifacts, ctx) {
    const F = factsOf(ctx);
    const issues = [];
    const dc = data.depthCheck || {};
    const ticked = Object.keys(dc).filter(k => dc[k]);

    if (!data.situation || data.situation.trim().length < 15) issues.push(B('Situation must be recorded in the client\'s own words.', 'La situación debe registrarse con las palabras de la clienta.'));
    if (!data.priorExperience || data.priorExperience.trim().length < 10) {
      issues.push(F.priorExperienceIssue);
    }
    if (ticked.length < 4) issues.push(B('Depth Check: fewer than four criteria are met. Discovery is not complete enough to advance.', 'Comprobación de Profundidad: se cumplen menos de cuatro criterios. El Descubrimiento no está lo bastante completo para avanzar.'));

    // Honesty check: you cannot claim to know why-now if she never disclosed it.
    if (dc.whyNow && !cs.revealed.includes(F.motivationItem)) {
      issues.push(F.whyNowIssue);
    }
    if (dc.feelsHeard && cs.trust.safety < 1) {
      issues.push(B('You ticked "the client feels heard", but Safety is not established in her behaviour. This is a self-assessment, not a fact.', 'Marcaste «la clienta se siente escuchada», pero la Seguridad no está establecida en su conducta. Eso es una autoevaluación, no un hecho.'));
    }

    const effects = {};
    if (ticked.length >= 5 && issues.length === 0) effects.trust = { attention: 1, understanding: 1 };
    else if (issues.length === 0) effects.trust = { attention: 1 };

    return { valid: issues.length === 0, issues, effects, summary: B(`Depth Check ${ticked.length}/6`, `Comprobación de Profundidad ${ticked.length}/6`) };
  }
};

// ---------------------------------------------------------------------------
// #3 EMOTIONAL DRIVERS MAP  (Phase 4)
// Components: visible goal → hidden motivation → emotional consequence →
//             desired feeling → influencing people → client language
// ---------------------------------------------------------------------------
const toolkit3 = {
  n: 3,
  name: B('Emotional Drivers Map', 'Mapa de Motores Emocionales'),
  phase: 'understanding',
  intro: B('Complete during Understanding. Field 6 must be the client\'s exact words — Toolkit #4 field 1 will be validated against it.', 'Complétalo durante la Comprensión. El campo 6 deben ser las palabras exactas de la clienta: el campo 1 del Toolkit #4 se validará contra él.'),
  fields: [
    T('visibleGoal', B('Visible goal (what they asked for)', 'Objetivo visible (lo que pidió)'), { required: true }),
    T('hiddenMotivation', B('Hidden motivation (why it matters now)', 'Motivación oculta (por qué le importa ahora)'), { required: true }),
    T('emotionalConsequence', B('Emotional consequence if nothing changes', 'Consecuencia emocional si nada cambia'), { required: true }),
    T('desiredFeeling', B('Desired feeling', 'Sensación deseada')),
    T('influencingPeople', B('Influencing people', 'Personas que influyen')),
    T('clientLanguage', B('Client language — their exact words, quoted', 'Lenguaje de la clienta: sus palabras exactas, entrecomilladas'), { required: true })
  ],
  validate(data, cs, artifacts, ctx) {
    const F = factsOf(ctx);
    const issues = [];
    if (!data.visibleGoal) issues.push(B('Visible goal is required.', 'El objetivo visible es obligatorio.'));
    if (!data.clientLanguage || data.clientLanguage.trim().length < 10) issues.push(B('Client language must be captured verbatim.', 'El lenguaje de la clienta debe capturarse literalmente.'));

    const hm = (data.hiddenMotivation || '').toLowerCase();
    const disclosed = cs.revealed.includes(F.motivationItem);

    if (!disclosed) {
      // The learner never obtained this. They must record that, not invent it.
      const claimsKnowledge = hm.length > 0 && !/(not disclosed|unknown|not obtained|did not|n\/a|none|no divulgad|desconocid)/i.test(data.hiddenMotivation || '');
      if (claimsKnowledge) {
        issues.push(F.undisclosedMotiveIssue);
      }
    } else {
      if (!F.motiveRegex.test(hm)) {
        issues.push(F.motiveIssue);
      }
    }

    const effects = {};
    if (issues.length === 0 && disclosed) effects.trust = { understanding: 1, alignment: 1 };

    return {
      valid: issues.length === 0,
      issues,
      effects,
      summary: disclosed ? B('Hidden motivation captured', 'Motivación oculta capturada') : B('Hidden motivation NOT DISCLOSED (recorded honestly)', 'Motivación oculta NO REVELADA (registrado con honestidad)')
    };
  }
};

// ---------------------------------------------------------------------------
// #4 MIRROR RECOMMENDATION BUILDER  (Phase 6) — canonical 8 fields
// ---------------------------------------------------------------------------
const toolkit4 = {
  n: 4,
  name: B('MIRROR Recommendation Builder', 'Constructor de Recomendación MIRROR'),
  phase: 'recommendation',
  intro: B('The canonical eight-field structure. Field 8 is not optional — what you decline to recommend is where Do No Avoidable Harm becomes visible.', 'La estructura canónica de ocho campos. El campo 8 no es opcional: lo que decides no recomendar es donde se hace visible No Causar Daño Evitable.'),
  fields: [
    T('f1_goal', B('1. Goal in the client\'s words', '1. Objetivo con las palabras de la clienta'), { required: true }),
    T('f2_assessment', B('2. Professional assessment', '2. Valoración profesional'), { required: true }),
    T('f3_solution', B('3. Recommended solution', '3. Solución recomendada'), { required: true }),
    T('f4_whyFits', B('4. Why it fits this client', '4. Por qué encaja con esta clienta'), { required: true }),
    T('f5_stages', B('5. Expected stages', '5. Etapas previstas'), { required: true }),
    T('f6_realistic', B('6. What the client should realistically expect', '6. Qué debe esperar la clienta de forma realista'), { required: true }),
    T('f7_alternative', B('7. Alternative option', '7. Opción alternativa'), { required: true }),
    T('f8_notRecommending', B('8. What I am intentionally NOT recommending, and why', '8. Lo que deliberadamente NO recomiendo, y por qué'), { required: true })
  ],
  validate(data, cs, artifacts, ctx) {
    const F = factsOf(ctx);
    const issues = [];
    for (const f of this.fields) {
      if (f.required && (!data[f.name] || data[f.name].trim().length < 10)) {
        issues.push(B(`Field ${f.label.en || f.label} is incomplete.`, `El campo ${f.label.es || f.label} está incompleto.`));
      }
    }
    if (issues.length) return { valid: false, issues, effects: {} };

    // Field 1 must trace to Toolkit #3 client language, when that exists.
    const t3 = artifacts && artifacts['3'] ? artifacts['3'].data : null;
    if (t3 && t3.clientLanguage && cs.revealed.includes(F.motivationItem)) {
      const words = t3.clientLanguage.toLowerCase().match(/[a-z]{5,}/g) || [];
      const goal = (data.f1_goal || '').toLowerCase();
      const overlap = words.filter(w => goal.includes(w)).length;
      if (overlap < 2) {
        issues.push(B('Field 1 does not trace to the client language you recorded in Toolkit #3. The goal must be in her words, not your paraphrase.', 'El campo 1 no se traza al lenguaje de la clienta que registraste en el Toolkit #3. El objetivo debe estar con sus palabras, no con tu paráfrasis.'));
      }
    }
    // Field 6 must contain an honest ceiling.
    if (!/(not|won\'t|will not|maintenance|manage|recur|come back|limit|realistic|partial|gradual|no |manten|gestion|vuelv|límit|limit|realista|parcial|gradual)/i.test(data.f6_realistic || '')) {
      issues.push(F.limitationIssue);
    }
    // Field 7 must be a real alternative, not a downsell of the same thing.
    if ((data.f7_alternative || '').trim().length < 20) {
      issues.push(B('Field 7 must offer a genuine alternative pathway so the client retains a real choice (Ethical Duty 2).', 'El campo 7 debe ofrecer una vía alternativa real para que la clienta conserve una elección verdadera (Deber Ético 2).'));
    }

    const effects = {};
    if (issues.length === 0) {
      effects.trust = { alignment: 1, reliability: 1 };
      effects.willingness = 5;
    }
    return { valid: issues.length === 0, issues, effects, summary: B('8/8 canonical fields validated', '8/8 campos canónicos validados') };
  }
};

// ---------------------------------------------------------------------------
// #5 PRICE & VALUE PRESENTATION PLANNER  (Phase 6)
// ---------------------------------------------------------------------------
const toolkit5 = {
  n: 5,
  name: B('Price & Value Presentation Planner', 'Planificador de Precio y Valor'),
  phase: 'recommendation',
  intro: B('Value structure before the number. The order of these fields is the order you must speak them in.', 'La estructura de valor antes que la cifra. El orden de estos campos es el orden en que debes decirlos.'),
  fields: [
    T('outcomePurchased', B('What is actually being purchased (the outcome, not the procedure)', 'Qué se está comprando en realidad (el resultado, no el procedimiento)'), { required: true }),
    T('elements', B('Elements included', 'Elementos incluidos'), { required: true }),
    T('whyEachMatters', B('Why each element matters to THIS client', 'Por qué cada elemento le importa a ESTA clienta'), { required: true }),
    T('evidence', B('Evidence / basis for the expectation', 'Evidencia o base de la expectativa'), { required: true }),
    { name: 'investment', label: B('Investment', 'Inversión'), type: 'text', required: true },
    T('alternativeCost', B('Lower-cost alternative and its honest trade-off', 'Alternativa más económica y su contrapartida honesta'), { required: true }),
    T('limitation', B('Honest limitation stated before the number', 'Limitación honesta enunciada antes de la cifra'), { required: true }),
    T('noPressure', B('How the client keeps the decision (what you will NOT do to close)', 'Cómo conserva la clienta la decisión (qué NO harás para cerrar)'), { required: true })
  ],
  validate(data) {
    const issues = [];
    for (const f of this.fields) {
      if (f.required && (!data[f.name] || String(data[f.name]).trim().length < 5)) issues.push(B(`${f.label.en || f.label} is incomplete.`, `${f.label.es || f.label}: incompleto.`));
    }
    const outcome = (data.outcomePurchased || '').toLowerCase();
    if (/^€|^\$|^\d/.test((data.outcomePurchased || '').trim())) {
      issues.push(B('The outcome field contains a price. The outcome is what changes for the client, not the amount.', 'El campo de resultado contiene un precio. El resultado es lo que cambia para la clienta, no el importe.'));
    }
    // Urgency counts only when it is being used, not when it is being ruled out:
    // "no price that expires" belongs in the no-pressure field and must pass.
    const urgencyHit = (() => {
      const text = Object.values(data).filter(v => typeof v === 'string').join(' \n ');
      const rx = /(today only|discount if|expires|expiry|limited time|book now to|solo hoy|caduca|tiempo limitado)/gi;
      let m;
      while ((m = rx.exec(text)) !== null) {
        const before = text.slice(Math.max(0, m.index - 40), m.index).toLowerCase();
        if (/\b(no|not|never|without|nothing|sin|ningún|ninguna|nunca)\b[^.]*$/.test(before)) continue;
        return true;
      }
      return false;
    })();
    if (urgencyHit) {
      issues.push(B('Time-pressure language detected. Manufactured urgency violates Ethical Duty 2 (Respect Autonomy).', 'Se ha detectado lenguaje de presión temporal. La urgencia fabricada incumple el Deber Ético 2 (Respetar la Autonomía).'));
    }
    if (/(laser session|procedure|treatment)$/i.test(outcome.trim()) && outcome.trim().length < 30) {
      issues.push(B('The outcome reads as a procedure. State what the client gets, in their terms.', 'El resultado se lee como un procedimiento. Enuncia qué obtiene la clienta, en sus términos.'));
    }
    const effects = issues.length === 0 ? { trust: { alignment: 1, reliability: 1 } } : {};
    return { valid: issues.length === 0, issues, effects, summary: B('Value structure precedes price', 'La estructura de valor precede al precio') };
  }
};

// ---------------------------------------------------------------------------
// #6 OBJECTION DIAGNOSTIC  (Phase 7)
// ---------------------------------------------------------------------------
const toolkit6 = {
  n: 6,
  name: B('Objection Diagnostic', 'Diagnóstico de Objeciones'),
  phase: 'decisionSupport',
  intro: B('Diagnose before you respond. The surface objection and the underlying concern are rarely the same sentence.', 'Diagnostica antes de responder. La objeción de superficie y la preocupación subyacente rara vez son la misma frase.'),
  fields: [
    T('surface', B('Surface objection — her exact words', 'Objeción de superficie: sus palabras exactas'), { required: true }),
    T('underlying', B('Underlying concern — what she is actually protecting', 'Preocupación subyacente: qué está protegiendo en realidad'), { required: true }),
    {
      name: 'trustGap', label: B('Which Trust Standard is the gap?', '¿En qué Estándar de Confianza está la brecha?'), type: 'select', required: true,
      options: [
        B('1 — Create Psychological Safety', '1 — Crear Seguridad Psicológica'),
        B('2 — Demonstrate Attentive Understanding', '2 — Demostrar Comprensión Atenta'),
        B('3 — Establish Credibility', '3 — Establecer Credibilidad'),
        B('4 — Align Recommendations', '4 — Alinear las Recomendaciones'),
        B('5 — Communicate with Radical Clarity', '5 — Comunicar con Claridad Radical'),
        B('6 — Protect Trust After Decision', '6 — Proteger la Confianza Después de la Decisión')
      ]
    },
    {
      name: 'responseCategory', label: B('Response category', 'Categoría de respuesta'), type: 'select', required: true,
      options: [B('Acknowledge', 'Reconocer'), B('Educate', 'Educar'), B('Recommit', 'Recomprometer'),
                B('Restructure the commitment', 'Reestructurar el compromiso'), B('Accept the decline', 'Aceptar el rechazo')]
    },
    T('proposedResponse', B('Your proposed response', 'Tu respuesta propuesta'), { required: true })
  ],
  validate(data, cs) {
    const issues = [];
    for (const f of this.fields) {
      if (f.required && (!data[f.name] || String(data[f.name]).trim().length < 5)) issues.push(B(`${f.label.en || f.label} is incomplete.`, `${f.label.es || f.label}: incompleto.`));
    }
    if (issues.length) return { valid: false, issues, effects: {} };

    const s = (data.surface || '').trim().toLowerCase();
    const u = (data.underlying || '').trim().toLowerCase();
    if (s === u || (u.length > 0 && s.includes(u) && u.length > 20)) {
      issues.push(B('Surface and underlying are the same statement. If the underlying concern is identical to her words, it has not been diagnosed.', 'La superficie y lo subyacente son la misma afirmación. Si la preocupación subyacente es idéntica a sus palabras, no se ha diagnosticado.'));
    }
    if (/(too expensive|no money|price)$/i.test(u) && cs.objectionIntensity === 3) {
      issues.push(B('"Price" as the underlying concern is usually the surface repeated. At this intensity the concern is that the outcome is not worth the risk with you.', '«Precio» como preocupación subyacente suele ser la superficie repetida. A esta intensidad, la preocupación es que el resultado no compensa el riesgo contigo.'));
    }
    const effects = issues.length === 0 ? { trust: { understanding: 1 } } : {};
    return { valid: issues.length === 0, issues, effects, summary: B('Surface separated from underlying', 'Superficie separada de lo subyacente') };
  }
};

// ---------------------------------------------------------------------------
// #8 POST-CONSULTATION FOLLOW-UP PLAN  (Phase 8)
// Components: timing / purpose / channel / owner / outcome per interval,
//             plus an explicit stop condition. Governs YES, DEFER and NO.
// ---------------------------------------------------------------------------
const toolkit8 = {
  n: 8,
  name: B('Post-Consultation Follow-up Plan', 'Plan de Seguimiento Posconsulta'),
  phase: 'continuation',
  intro: B('Toolkit #8 governs all three outcomes: YES, DEFER and NO. Every row needs an owner, a timing, a purpose, a channel and a stop condition.', 'El Toolkit #8 gobierna los tres resultados: SÍ, APLAZAR y NO. Cada fila necesita responsable, momento, propósito, canal y una condición de cierre.'),
  // Rows are generated per outcome by the Continuation Engine.
  validate(data, cs, artifacts, ctx) {
    const issues = [];
    const rows = data.rows || [];
    if (!rows.length) issues.push(B('The follow-up plan has no rows.', 'El plan de seguimiento no tiene filas.'));
    rows.forEach((r, i) => {
      ['timing', 'purpose', 'channel', 'owner'].forEach(k => {
        if (!r[k] || String(r[k]).trim().length < 2) issues.push(B(`Row ${i + 1}: ${k} is missing.`, `Fila ${i + 1}: falta ${k}.`));
      });
    });
    if (!data.stopCondition || data.stopCondition.trim().length < 10) {
      issues.push(B('A stop condition is required. A follow-up plan without a stop condition is pressure with a schedule.', 'Se exige una condición de cierre. Un plan de seguimiento sin condición de cierre es presión con calendario.'));
    }
    const outcome = ctx && ctx.outcome;
    if (outcome === 'DEFER') {
      if (!data.agreedFollowUpDate || data.agreedFollowUpDate.trim().length < 3) {
        issues.push(B('DEFER requires a specific agreed follow-up moment, agreed WITH the client (Toolkit #8, not Toolkit #16).', 'APLAZAR exige un momento de seguimiento concreto, acordado CON la clienta (Toolkit #8, no Toolkit #16).'));
      }
    }
    if (outcome === 'NO') {
      if (!data.closureNote || data.closureNote.trim().length < 10) {
        issues.push(B('NO requires the outcome and the closure to be documented (MBOK Ch.6 — End Relationships Responsibly).', 'El NO exige documentar el resultado y el cierre (MBOK Cap.6 — Terminar Relaciones con Responsabilidad).'));
      }
      if (/(reactivat|win.?back|follow up until|keep trying|nurture sequence)/i.test(JSON.stringify(data))) {
        issues.push(B('Reactivation or win-back language detected on a NO outcome. Toolkit #16 is not eligible here.', 'Se ha detectado lenguaje de reactivación o recuperación en un resultado NO. El Toolkit #16 no es elegible aquí.'));
      }
    }
    return { valid: issues.length === 0, issues, effects: {}, summary: B(`${rows.length} follow-up rows + stop condition`, `${rows.length} filas de seguimiento + condición de cierre`) };
  }
};

const TOOLKITS = { 1: toolkit1, 3: toolkit3, 4: toolkit4, 5: toolkit5, 6: toolkit6, 8: toolkit8 };

function getToolkit(n) { return TOOLKITS[String(n)] || TOOLKITS[n] || null; }

/** Validate a submission, apply its effects to the ledger, and return the result. */
function executeToolkit(n, data, clientState, artifacts, ctx) {
  const tk = getToolkit(n);
  if (!tk) return { error: B(`Toolkit #${n} is not implemented in this build.`, `El Toolkit #${n} no está implementado en esta versión.`) };
  const result = tk.validate(data, clientState, artifacts, ctx);
  let applied = null;
  if (result.valid && result.effects && Object.keys(result.effects).length) {
    applied = applyEffects(clientState, result.effects);
  }
  return {
    toolkit: { n: tk.n, name: tk.name },
    valid: result.valid,
    issues: result.issues,
    summary: result.summary || null,
    stateEffect: applied
  };
}

function schemaFor(n) {
  const tk = getToolkit(n);
  if (!tk) return null;
  return { n: tk.n, name: tk.name, phase: tk.phase, intro: tk.intro, fields: tk.fields || null };
}

module.exports = { TOOLKITS, getToolkit, executeToolkit, schemaFor };
