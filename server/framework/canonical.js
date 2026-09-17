/**
 * MIRROR CANONICAL FRAMEWORK
 *
 * Every element in this file is source-traced. Nothing here is invented.
 * Source: /root/MIRROR_Practitioner_Playbook_Source_Traceability.md
 *   - MBOK Ch.1 s1.16  : 8-Phase Consultation Framework
 *   - MBOK Ch.2        : 4 Ethical Duties
 *   - MBOK Ch.3        : 7 Trust Formation Stages, 6 Trust Standards
 *   - MBOK Ch.6        : Relationship Continuum, End Relationships Responsibly
 *   - Product Layer    : Five Engines, Phase Ownership Matrix, Decision Engine tri-state
 *
 * ARCHITECTURE RULE (binding):
 *   The Five Engines ORGANIZE the learner experience.
 *   They NEVER replace the 8 canonical phases.
 *   Learner must always see: Engine + canonical Phase + Toolkit mechanism.
 */

// ---------------------------------------------------------------------------
// 8 CANONICAL PHASES — MBOK Ch. 1, Section 1.16 (names are frozen)
// ---------------------------------------------------------------------------
const PHASES = [
  { n: 1, key: 'preparation',  name: 'Preparation',              objective: 'Readiness and research before the client arrives.' },
  { n: 2, key: 'connection',   name: 'Connection',               objective: 'Establish psychological safety.' },
  { n: 3, key: 'discovery',    name: 'Discovery',                objective: 'Understand situation and motivation.' },
  { n: 4, key: 'understanding',name: 'Understanding',            objective: 'Consolidate findings, verify priorities.' },
  { n: 5, key: 'education',    name: 'Education',                objective: 'Provide knowledge for informed decision.' },
  { n: 6, key: 'recommendation',name:'Recommendation',           objective: 'Present solution with rationale.' },
  { n: 7, key: 'decisionSupport',name:'Decision Support',        objective: 'Explore objections, support pace.' },
  { n: 8, key: 'continuation', name: 'Relationship Continuation',objective: 'Ongoing relationship management.' }
];

const PHASE_ORDER = PHASES.map(p => p.key);

// ---------------------------------------------------------------------------
// FIVE ENGINES — Product Layer (approved organizing architecture)
// Phase Ownership Matrix is deterministic and source-traced.
// ---------------------------------------------------------------------------
const ENGINES = {
  PREPARATION: {
    key: 'PREPARATION', name: 'Preparation Engine',
    role: 'Owns Phase 1', ownsPhases: [1],
    purpose: 'Readiness, research and pre-consultation context.'
  },
  CONSULTATION: {
    key: 'CONSULTATION', name: 'Consultation Engine',
    role: 'Owns Phases 2–7', ownsPhases: [2, 3, 4, 5, 6, 7],
    purpose: 'The consultation itself: connection through decision support.'
  },
  DECISION: {
    key: 'DECISION', name: 'Decision Engine',
    role: 'Secondary on Phase 7 — manages outcome tri-state', ownsPhases: [7],
    purpose: 'Derives and manages the YES / DEFER / NO outcome and its Toolkit attachment rules.'
  },
  CONTINUATION: {
    key: 'CONTINUATION', name: 'Continuation Engine',
    role: 'Owns Phase 8', ownsPhases: [8],
    purpose: 'Relationship state transition and follow-up execution after the decision.'
  },
  STANDARDS: {
    key: 'STANDARDS', name: 'Standards Engine',
    role: 'Cross-cutting on all phases', ownsPhases: 'all',
    purpose: 'Ethical duties and trust principles applied across every phase.'
  }
};

// Phase Ownership Matrix — primary + secondary engine per canonical phase.
const PHASE_OWNERSHIP = {
  preparation:     { primary: 'PREPARATION',  secondary: ['STANDARDS'] },
  connection:      { primary: 'CONSULTATION', secondary: ['STANDARDS'] },
  discovery:       { primary: 'CONSULTATION', secondary: ['STANDARDS'] },
  understanding:   { primary: 'CONSULTATION', secondary: ['STANDARDS'] },
  education:       { primary: 'CONSULTATION', secondary: ['STANDARDS'] },
  recommendation:  { primary: 'CONSULTATION', secondary: ['STANDARDS'] },
  decisionSupport: { primary: 'CONSULTATION', secondary: ['DECISION', 'STANDARDS'] },
  continuation:    { primary: 'CONTINUATION', secondary: ['STANDARDS'] }
};

// ---------------------------------------------------------------------------
// TRUST FORMATION SEQUENCE — MBOK Ch. 3 (7 stages)
// ---------------------------------------------------------------------------
const TRUST_STAGES = {
  safety:       { n: 1, name: 'Safety',       question: 'Can I speak freely without being judged or manipulated?' },
  attention:    { n: 2, name: 'Attention',    question: 'Is this professional actually listening to me?' },
  understanding:{ n: 3, name: 'Understanding',question: 'Do they understand what I actually mean?' },
  credibility:  { n: 4, name: 'Credibility',  question: 'Do they know what they are doing?' },
  alignment:    { n: 5, name: 'Alignment',    question: 'Does this recommendation fit what I value?' },
  reliability:  { n: 6, name: 'Reliability',  question: 'Will they follow through consistently?' },
  confirmation: { n: 7, name: 'Confirmation', question: 'Has my experience confirmed this trust?' }
};
const TRUST_STAGE_KEYS = Object.keys(TRUST_STAGES);

// ---------------------------------------------------------------------------
// SIX TRUST STANDARDS — MBOK Ch. 3
// ---------------------------------------------------------------------------
const TRUST_STANDARDS = {
  1: 'Create Psychological Safety',
  2: 'Demonstrate Attentive Understanding',
  3: 'Establish Credibility',
  4: 'Align Recommendations',
  5: 'Communicate with Radical Clarity',
  6: 'Protect Trust After Decision'
};

// ---------------------------------------------------------------------------
// FOUR ETHICAL DUTIES — MBOK Ch. 2
// ---------------------------------------------------------------------------
const ETHICAL_DUTIES = {
  1: 'Do No Avoidable Harm',
  2: 'Respect Autonomy',
  3: 'Practice Competently',
  4: 'Communicate Truthfully'
};

// ---------------------------------------------------------------------------
// RELATIONSHIP CONTINUUM — MBOK Ch. 6
// NOTE: The canonical continuum has 10 states. Only the states explicitly
// source-traced in available materials are implemented here. The remainder are
// intentionally NOT invented. See REAL_PARTIAL_MOCKED.md.
// ---------------------------------------------------------------------------
const RELATIONSHIP_STATES = {
  PROSPECTIVE:        { key: 'PROSPECTIVE',        label: 'Prospective',         traced: true },
  CONSIDERING:        { key: 'CONSIDERING',        label: 'Considering',         traced: true },
  CONSULTED:          { key: 'CONSULTED',          label: 'Consulted',           traced: true },
  ACTIVE:             { key: 'ACTIVE',             label: 'Active',              traced: true },
  PAUSED:             { key: 'PAUSED',             label: 'Paused',              traced: true },
  REFERRED_DISCHARGED:{ key: 'REFERRED_DISCHARGED',label: 'Referred–Discharged', traced: true },
  DORMANT:            { key: 'DORMANT',            label: 'Dormant',             traced: true },
  REACTIVATED:        { key: 'REACTIVATED',        label: 'Reactivated',         traced: true }
};

// ---------------------------------------------------------------------------
// TOOLKIT REGISTRY #1–#24
// Names are only present where source-traced. Un-traced items are declared
// NOT_IMPLEMENTED with a null name rather than being invented.
// ---------------------------------------------------------------------------
const TOOLKIT = {
  1:  { n: 1,  name: 'Client Intake & Discovery Canvas',  section: 'Consultation Tools #1–#8', status: 'IMPLEMENTED',     source: 'MIRROR Toolkit v1.0 §1 item 1' },
  2:  { n: 2,  name: null,                                section: 'Consultation Tools #1–#8', status: 'NOT_IMPLEMENTED', source: null },
  3:  { n: 3,  name: 'Emotional Drivers Map',             section: 'Consultation Tools #1–#8', status: 'IMPLEMENTED',     source: 'MIRROR Toolkit v1.0 §1 item 3' },
  4:  { n: 4,  name: 'MIRROR Recommendation Builder',     section: 'Consultation Tools #1–#8', status: 'IMPLEMENTED',     source: 'MIRROR Toolkit v1.0 §1 item 4' },
  5:  { n: 5,  name: 'Price & Value Presentation Planner',section: 'Consultation Tools #1–#8', status: 'IMPLEMENTED',     source: 'MIRROR Toolkit v1.0 §1 item 5' },
  6:  { n: 6,  name: 'Objection Diagnostic',              section: 'Consultation Tools #1–#8', status: 'IMPLEMENTED',     source: 'MIRROR Toolkit v1.0 §1 item 6' },
  7:  { n: 7,  name: null,                                section: 'Consultation Tools #1–#8', status: 'NOT_IMPLEMENTED', source: null },
  8:  { n: 8,  name: 'Post-Consultation Follow-up Plan',  section: 'Consultation Tools #1–#8', status: 'IMPLEMENTED',     source: 'MIRROR Toolkit v1.0 §1 item 8' },
  9:  { n: 9,  name: null, section: 'Manager & Coaching Tools #9–#14',  status: 'NOT_IMPLEMENTED', source: null },
  10: { n: 10, name: 'Weekly KPI Dashboard', section: 'Manager & Coaching Tools #9–#14', status: 'NOT_IMPLEMENTED', source: 'MIRROR Toolkit v1.0 §2 item 10' },
  11: { n: 11, name: null, section: 'Manager & Coaching Tools #9–#14',  status: 'NOT_IMPLEMENTED', source: null },
  12: { n: 12, name: null, section: 'Manager & Coaching Tools #9–#14',  status: 'NOT_IMPLEMENTED', source: null },
  13: { n: 13, name: null, section: 'Manager & Coaching Tools #9–#14',  status: 'NOT_IMPLEMENTED', source: null },
  14: { n: 14, name: null, section: 'Manager & Coaching Tools #9–#14',  status: 'NOT_IMPLEMENTED', source: null },
  15: { n: 15, name: null, section: 'Growth & Retention Tools #15–#18', status: 'NOT_IMPLEMENTED', source: null },
  16: { n: 16, name: 'Reactivation Planner', section: 'Growth & Retention Tools #15–#18', status: 'GATED',
        source: 'MIRROR Toolkit v1.0 §3 item 16',
        gate: 'Eligible ONLY on a later genuine Dormant → Reactivated relationship-state transition. Never at immediate DEFER or NO.' },
  17: { n: 17, name: 'Retention & Lifetime Value Review', section: 'Growth & Retention Tools #15–#18', status: 'GATED',
        source: 'MIRROR Toolkit v1.0 §3 item 17',
        gate: 'Applies to Active relationship management only. Never at immediate NO.' },
  18: { n: 18, name: null, section: 'Growth & Retention Tools #15–#18', status: 'NOT_IMPLEMENTED', source: null },
  19: { n: 19, name: null, section: 'Tools #19–#24', status: 'NOT_IMPLEMENTED', source: null },
  20: { n: 20, name: null, section: 'Tools #19–#24', status: 'NOT_IMPLEMENTED', source: null },
  21: { n: 21, name: null, section: 'Tools #19–#24', status: 'NOT_IMPLEMENTED', source: null },
  22: { n: 22, name: null, section: 'Tools #19–#24', status: 'NOT_IMPLEMENTED', source: null },
  23: { n: 23, name: null, section: 'Tools #19–#24', status: 'NOT_IMPLEMENTED', source: null },
  24: { n: 24, name: null, section: 'Tools #19–#24', status: 'NOT_IMPLEMENTED', source: null }
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function getPhase(key) {
  return PHASES.find(p => p.key === key) || null;
}

function getEngineForPhase(key) {
  const own = PHASE_OWNERSHIP[key];
  if (!own) return null;
  return {
    primary: ENGINES[own.primary],
    secondary: own.secondary.map(s => ENGINES[s])
  };
}


// ---------------------------------------------------------------------------
// SPANISH DISPLAY LAYER
//
// The canonical English names above are source-traced and frozen — they are the
// architecture's identifiers and are never renamed. This table is a DISPLAY
// translation used at the API boundary so the Spanish journey reads as Spanish.
// Nothing here is a second canon; it is the same canon, rendered.
// ---------------------------------------------------------------------------
const ES = {
  phases: {
    preparation:    { name: 'Preparación',                 objective: 'Preparación e investigación antes de que llegue la clienta.' },
    connection:     { name: 'Conexión',                    objective: 'Establecer seguridad psicológica.' },
    discovery:      { name: 'Descubrimiento',              objective: 'Comprender la situación y la motivación.' },
    understanding:  { name: 'Comprensión',                 objective: 'Consolidar los hallazgos y verificar prioridades.' },
    education:      { name: 'Educación',                   objective: 'Aportar el conocimiento para una decisión informada.' },
    recommendation: { name: 'Recomendación',               objective: 'Presentar la solución con su fundamento.' },
    decisionSupport:{ name: 'Acompañamiento de la Decisión',objective: 'Explorar objeciones y respetar su ritmo.' },
    continuation:   { name: 'Continuidad de la Relación',  objective: 'Gestión continuada de la relación.' }
  },
  engines: {
    PREPARATION:  { name: 'Motor de Preparación',  role: 'Gobierna la Fase 1' },
    CONSULTATION: { name: 'Motor de Consulta',     role: 'Gobierna las Fases 2–7' },
    DECISION:     { name: 'Motor de Decisión',     role: 'Secundario en la Fase 7 — gestiona el resultado' },
    CONTINUATION: { name: 'Motor de Continuidad',  role: 'Gobierna la Fase 8' },
    STANDARDS:    { name: 'Motor de Estándares',   role: 'Transversal a todas las fases' }
  },
  stages: {
    safety:        { name: 'Seguridad',    question: '¿Puedo hablar con libertad sin que me juzguen ni me manipulen?' },
    attention:     { name: 'Atención',     question: '¿Este profesional me está escuchando de verdad?' },
    understanding: { name: 'Comprensión',  question: '¿Entiende lo que realmente quiero decir?' },
    credibility:   { name: 'Credibilidad', question: '¿Sabe lo que está haciendo?' },
    alignment:     { name: 'Alineación',   question: '¿Esta recomendación encaja con lo que valoro?' },
    reliability:   { name: 'Fiabilidad',   question: '¿Va a cumplir de forma constante?' },
    confirmation:  { name: 'Confirmación', question: '¿Mi experiencia ha confirmado esta confianza?' }
  },
  standards: {
    1: 'Crear Seguridad Psicológica',
    2: 'Demostrar Comprensión Atenta',
    3: 'Establecer Credibilidad',
    4: 'Alinear las Recomendaciones',
    5: 'Comunicar con Claridad Radical',
    6: 'Proteger la Confianza Después de la Decisión'
  },
  duties: {
    1: 'No Causar Daño Evitable',
    2: 'Respetar la Autonomía',
    3: 'Ejercer con Competencia',
    4: 'Comunicar con Veracidad'
  },
  relationship: {
    PROSPECTIVE: 'Prospectiva', CONSIDERING: 'Considerando', CONSULTED: 'Consultada',
    ACTIVE: 'Activa', PAUSED: 'En pausa', REFERRED_DISCHARGED: 'Derivada–Alta',
    DORMANT: 'Inactiva', REACTIVATED: 'Reactivada'
  },
  toolkits: {
    1: 'Lienzo de Admisión y Descubrimiento',
    3: 'Mapa de Motores Emocionales',
    4: 'Constructor de Recomendación MIRROR',
    5: 'Planificador de Precio y Valor',
    6: 'Diagnóstico de Objeciones',
    8: 'Plan de Seguimiento Posconsulta',
    10: 'Panel Semanal de KPI',
    16: 'Planificador de Reactivación',
    17: 'Revisión de Retención y Valor de Vida'
  },
  readings: {
    ESTABLISHED: 'ESTABLECIDA', OPENING: 'ABRIÉNDOSE', NEUTRAL: 'NEUTRA',
    STRAINED: 'TENSIONADA', BROKEN: 'ROTA'
  },
  outcomes: { YES: 'SÍ', DEFER: 'APLAZAR', NO: 'NO' }
};

/** Bilingual label helpers. English is canonical; Spanish is display. */
const T2 = (en, es) => ({ en, es: es || en });
const phaseLabel   = key => T2((getPhase(key) || {}).name, (ES.phases[key] || {}).name);
const phaseObjective = key => T2((getPhase(key) || {}).objective, (ES.phases[key] || {}).objective);
const standardLabel = n => T2(`Trust Standard ${n} — ${TRUST_STANDARDS[n]}`, `Estándar de Confianza ${n} — ${ES.standards[n]}`);
const dutyLabel     = n => T2(`Ethical Duty ${n} — ${ETHICAL_DUTIES[n]}`, `Deber Ético ${n} — ${ES.duties[n]}`);
const stageLabel    = k => T2(`Trust Stage ${TRUST_STAGES[k].n} (${TRUST_STAGES[k].name})`,
                              `Etapa de Confianza ${TRUST_STAGES[k].n} (${ES.stages[k].name})`);
const stageName     = k => T2(TRUST_STAGES[k].name, ES.stages[k].name);
const toolkitName   = n => T2((TOOLKIT[n] || {}).name, ES.toolkits[n]);
const relationshipLabel = k => T2((RELATIONSHIP_STATES[k] || {}).label, ES.relationship[k]);

/** Header context the learner must always be able to see. */
function navigationContext(phaseKey, toolkitNumber) {
  const phase = getPhase(phaseKey);
  const eng = getEngineForPhase(phaseKey);
  const tk = toolkitNumber ? TOOLKIT[toolkitNumber] : null;
  const engEs = eng ? ES.engines[eng.primary.key] : null;
  return {
    engine: eng ? {
      key: eng.primary.key,
      name: T2(eng.primary.name, engEs && engEs.name),
      role: T2(eng.primary.role, engEs && engEs.role)
    } : null,
    secondaryEngines: eng ? eng.secondary.map(e => ({
      key: e.key,
      name: T2(e.name, (ES.engines[e.key] || {}).name),
      role: T2(e.role, (ES.engines[e.key] || {}).role)
    })) : [],
    phase: phase ? { n: phase.n, key: phase.key, name: phaseLabel(phase.key), objective: phaseObjective(phase.key) } : null,
    toolkit: tk ? { n: tk.n, name: toolkitName(tk.n), status: tk.status } : null,
    phaseSpine: PHASES.map(p => ({ n: p.n, key: p.key, name: phaseLabel(p.key) }))
  };
}

module.exports = {
  PHASES, PHASE_ORDER, ENGINES, PHASE_OWNERSHIP,
  TRUST_STAGES, TRUST_STAGE_KEYS, TRUST_STANDARDS, ETHICAL_DUTIES,
  RELATIONSHIP_STATES, TOOLKIT, ES,
  getPhase, getEngineForPhase, navigationContext,
  phaseLabel, phaseObjective, standardLabel, dutyLabel, stageLabel, stageName,
  toolkitName, relationshipLabel
};
