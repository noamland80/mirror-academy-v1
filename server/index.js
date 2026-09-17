/**
 * MIRROR Consultation Training — Product V2 API
 *
 * Learner path enforced by this API:
 *   LOGIN → orientation → Engine + canonical Phase + Toolkit → client signal →
 *   decision → toolkit execution → MIRROR feedback → material consequence →
 *   next phase → derived YES/DEFER/NO → Toolkit #8 → Continuation →
 *   attempt evidence → manager visibility
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const Database = require('./database');
const canonical = require('./framework/canonical');
const scenarios = require('./scenario');
const toolkits = require('./toolkits/registry');
const feedbackEngine = require('./feedback/feedbackEngine');
const decisionEngine = require('./engines/decisionEngine');
const continuationEngine = require('./engines/continuationEngine');
const academy = require('./academy/content');
const coach = require('./academy/coach');
const tenancy = require('./tenancy');
const coachingLog = require('./academy/coachingLog');
const commercial = require('./commercial');

/** The case an attempt belongs to. */
const S = a => scenarios.get(a.scenario);

/** Requested language: ?lang=es, X-Mirror-Lang header, or English. */
function langOf(req) {
  const q = (req.query && req.query.lang) || req.headers['x-mirror-lang'] || 'en';
  return String(q).toLowerCase().startsWith('es') ? 'es' : 'en';
}
/** Every response passes the localization boundary; plain strings pass through. */
function send(req, res, payload, status) {
  return res.status(status || 200).json(scenarios.localize(payload, langOf(req)));
}

/** A bilingual pair; `send` collapses it to the requested language. */
const T = (en, es) => ({ en, es });

const BUILD = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'build.json'), 'utf8'));

const app = express();
// Behind a hosting platform's proxy the request arrives over plain HTTP. The
// invitation link a manager copies has to be the address her practitioner can
// actually open, so the forwarded protocol and host are believed.
app.set('trust proxy', true);
const db = new Database();

app.use(cors());
app.use(express.json({ limit: '2mb' }));
const PUBLIC = path.join(__dirname, '..', 'public');
app.use(express.static(PUBLIC, { index: false }));

// ---------------------------------------------------------------------------
// auth middleware
// ---------------------------------------------------------------------------
async function auth(req, res, next) {
  try {
    const h = req.headers.authorization || '';
    const token = h.startsWith('Bearer ') ? h.slice(7) : null;
    const user = await db.resolveSession(token);
    if (!user) return res.status(401).json({ error: 'Not authenticated' });
    req.user = user;
    req.token = token;
    next();
  } catch (e) { res.status(500).json({ error: e.message }); }
}
function requireRole(role) {
  return (req, res, next) => req.user.role === role
    ? next()
    : res.status(403).json({ error: `Requires ${role} role` });
}
const publicUser = u => ({ id: u.id, name: u.name, email: u.email, role: u.role, clinicId: u.clinic_id, clinicName: u.clinic_name });

// ---------------------------------------------------------------------------
// build + framework
// ---------------------------------------------------------------------------
app.get('/api/health', (req, res) => res.json({ status: 'ok', build: BUILD, time: new Date().toISOString() }));

app.get('/api/framework', (req, res) => {
  send(req, res, {
    build: BUILD,
    phases: canonical.PHASES,
    engines: canonical.ENGINES,
    phaseOwnership: canonical.PHASE_OWNERSHIP,
    trustStages: canonical.TRUST_STAGES,
    trustStandards: canonical.TRUST_STANDARDS,
    ethicalDuties: canonical.ETHICAL_DUTIES,
    relationshipStates: canonical.RELATIONSHIP_STATES,
    toolkit: canonical.TOOLKIT
  });
});

// ---------------------------------------------------------------------------
// auth
// ---------------------------------------------------------------------------
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    const user = await db.authenticate(email, password);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    const token = await db.createSession(user.id);
    res.json({ token, user: publicUser(user) });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/auth/logout', auth, async (req, res) => {
  await db.destroySession(req.token);
  res.json({ ok: true });
});

app.get('/api/auth/me', auth, (req, res) => res.json({ user: publicUser(req.user) }));

// ---------------------------------------------------------------------------
// attempt helpers
// ---------------------------------------------------------------------------
function newAttempt(user, scenarioId) {
  const sc = scenarios.get(scenarioId);
  return {
    id: 'att_' + uuidv4(),
    practitionerId: user.id,
    practitionerName: user.name,
    clinicId: user.clinic_id,
    clinicName: user.clinic_name,
    scenario: sc.id,
    status: 'in_progress',
    currentPhase: 'preparation',
    clientState: sc.initialClientState(),
    decisions: [],
    feedback: [],
    artifacts: {},
    decisionOutcome: null,
    continuation: null,
    startedAt: new Date().toISOString(),
    completedAt: null
  };
}

function phaseView(attempt) {
  const sc = S(attempt);
  const key = attempt.currentPhase;
  const content = sc.getPhaseContent(key, attempt.clientState);
  const nav = canonical.navigationContext(key, content ? content.toolkit : null);
  const gate = sc.gateFor(key, attempt.clientState, attempt.artifacts);
  const decided = attempt.decisions.some(d => d.phase === key);
  const toolkitDone = content && content.toolkit ? !!(attempt.artifacts[String(content.toolkit)] || {}).valid : true;
  const secondaryDone = content && content.secondaryToolkit ? !!(attempt.artifacts[String(content.secondaryToolkit)] || {}).valid : true;

  return {
    navigation: nav,
    content,
    progress: {
      decisionMade: decided,
      toolkitComplete: toolkitDone && secondaryDone,
      gate,
      canAdvance: decided && gate.canAdvance && toolkitDone && secondaryDone
    },
    clientState: attempt.clientState,
    trustReadout: feedbackEngine.trustReadout(attempt.clientState.trust),
    caseMeta: { id: sc.id, caseNumber: sc.caseNumber, title: sc.title, profile: sc.profile, languages: sc.languages, languageNote: sc.languageNote }
  };
}

function attemptResponse(attempt) {
  return {
    attempt: {
      id: attempt.id,
      status: attempt.status,
      currentPhase: attempt.currentPhase,
      scenario: attempt.scenario,
      startedAt: attempt.startedAt,
      completedAt: attempt.completedAt,
      practitionerName: attempt.practitionerName,
      artifacts: Object.keys(attempt.artifacts).map(n => ({
        n: Number(n), valid: attempt.artifacts[n].valid, summary: attempt.artifacts[n].summary
      })),
      decisionOutcome: attempt.decisionOutcome,
      continuation: attempt.continuation
    },
    view: attempt.status === 'completed' ? null : phaseView(attempt)
  };
}

async function loadOwn(req, res) {
  const a = await db.getAttempt(req.params.id);
  if (!a) { res.status(404).json({ error: 'Attempt not found' }); return null; }
  if (a.practitionerId !== req.user.id) { res.status(403).json({ error: 'Not your attempt' }); return null; }
  return a;
}

// ---------------------------------------------------------------------------
// orientation
// ---------------------------------------------------------------------------
app.get('/api/orientation', auth, (req, res) => {
  send(req, res, {
    title: 'MIRROR Consultation Framework — orientation',
    spine: canonical.PHASES,
    engines: Object.values(canonical.ENGINES).map(e => ({ key: e.key, name: e.name, role: e.role, purpose: e.purpose })),
    rule: 'The Five Engines organize the experience. They never replace the eight canonical phases. You will always see your current Engine, your current canonical Phase, and the Toolkit mechanism in play.',
    trustStages: canonical.TRUST_STAGES,
    trustStandards: canonical.TRUST_STANDARDS,
    ethicalDuties: canonical.ETHICAL_DUTIES,
    cases: scenarios.list().map(c => ({
      id: c.id, caseNumber: c.caseNumber, title: c.title, subtitle: c.subtitle,
      languages: c.languages, languageNote: c.languageNote,
      client: c.profile
    }))
  });
});

// ---------------------------------------------------------------------------
// academy: curriculum, lessons, progress, field assignments
// ---------------------------------------------------------------------------
app.get('/api/academy/curriculum', auth, async (req, res) => {
  try {
    const progress = await db.listLessonProgress(req.user.id);
    const done = {};
    progress.forEach(p => { done[p.lesson_id] = { status: p.status, attempts: p.attempts, score: p.score, updatedAt: p.updated_at }; });
    const modules = academy.curriculum().map(m => Object.assign({}, m, {
      lessons: m.lessons.map(l => Object.assign({}, l, { progress: done[l.id] || null })),
      completed: m.lessons.filter(l => done[l.id] && done[l.id].status === 'complete').length
    }));
    const open = await db.openReflections(req.user.id);
    send(req, res, {
      stats: academy.stats(),
      cases: scenarios.list().map(c => ({ id: c.id, caseNumber: c.caseNumber, title: c.title, subtitle: c.subtitle, languages: c.languages, languageNote: c.languageNote, client: c.profile })),
      modules,
      openAssignments: open.map(o => ({ id: o.id, moduleId: o.module_id, assignment: o.assignment, createdAt: o.created_at }))
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/academy/modules/:moduleId/lessons/:lessonId', auth, async (req, res) => {
  try {
    const found = academy.getLesson(req.params.moduleId, req.params.lessonId);
    if (!found) return res.status(404).json({ error: 'Lesson not found' });
    if (!found.lesson.blocks || !found.lesson.blocks.length) {
      return send(req, res, {
        module: found.module, lesson: { id: found.lesson.id, n: found.lesson.n, title: found.lesson.title, objective: found.lesson.objective, minutes: found.lesson.minutes },
        built: false,
        note: {
          en: 'This lesson is authored but not yet built in this release. Its title, objective and source are fixed; the interactive interior is in production.',
          es: 'Esta lección está redactada pero aún no construida en esta versión. Su título, objetivo y fuente están fijados; el interior interactivo está en producción.'
        }
      });
    }
    send(req, res, { module: found.module, lesson: found.lesson, built: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/academy/progress', auth, async (req, res) => {
  try {
    const { moduleId, lessonId, status, score, payload } = req.body || {};
    if (!moduleId || !lessonId) return res.status(400).json({ error: 'moduleId and lessonId are required' });
    const saved = await db.saveLessonProgress({
      userId: req.user.id, clinicId: req.user.clinic_id,
      moduleId, lessonId, status: status || 'complete', score, payload
    });

    // Completing the last built lesson of a module opens its field assignment.
    let assignment = null;
    const mod = academy.getModule(moduleId);
    if (mod && mod.status === 'available') {
      const rows = await db.listLessonProgress(req.user.id);
      const doneIds = new Set(rows.filter(r => r.status === 'complete').map(r => r.lesson_id));
      const allDone = mod.lessons.every(l => doneIds.has(l.id));
      if (allDone) {
        const id = await db.createReflection({
          userId: req.user.id, clinicId: req.user.clinic_id,
          moduleId, assignment: JSON.stringify(mod.apply)
        });
        assignment = { id, moduleId, apply: mod.apply };
      }
    }
    send(req, res, { saved, assignment });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/academy/journal', auth, async (req, res) => {
  try {
    const rows = await db.listReflections(req.user.id);
    send(req, res, {
      entries: rows.map(r => {
        let apply = null;
        try { apply = JSON.parse(r.assignment); } catch (_) { apply = { assignment: r.assignment, prompt: null }; }
        const mod = academy.getModule(r.module_id);
        return {
          id: r.id, moduleId: r.module_id, moduleTitle: mod ? mod.title : null,
          apply, answer: r.answer, status: r.status,
          createdAt: r.created_at, answeredAt: r.answered_at
        };
      })
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/academy/journal/:id', auth, async (req, res) => {
  try {
    const { answer } = req.body || {};
    if (!answer || String(answer).trim().length < 15) {
      return res.status(422).json({ error: 'Write what actually happened — a few words is not an answer to this.' });
    }
    await db.answerReflection(req.params.id, req.user.id, String(answer).trim());
    send(req, res, { ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ---------------------------------------------------------------------------
// practitioner: attempts
// ---------------------------------------------------------------------------
app.get('/api/attempts', auth, requireRole('practitioner'), async (req, res) => {
  try {
    const list = await db.listAttemptsForPractitioner(req.user.id);
    const payload = {
      attempts: list.map(a => ({
        id: a.id, status: a.status, currentPhase: a.currentPhase,
        scenario: a.scenario, caseTitle: scenarios.get(a.scenario).title,
        startedAt: a.startedAt, completedAt: a.completedAt,
        outcome: a.decisionOutcome ? a.decisionOutcome.outcome : null,
        relationshipState: a.clientState.relationshipState,
        decisions: a.decisions.length,
        toolkitsCompleted: Object.keys(a.artifacts).filter(n => a.artifacts[n].valid).map(Number)
      }))
    };
    send(req, res, payload);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/attempts', auth, requireRole('practitioner'), async (req, res) => {
  try {
    const scenarioId = (req.body && req.body.scenarioId) || 'sofia-melasma';
    if (!req.body || !req.body.forceNew) {
      const existing = await db.findInProgress(req.user.id, scenarioId);
      if (existing) return send(req, res, Object.assign({ resumed: true }, attemptResponse(existing)));
    }
    const a = newAttempt(req.user, scenarioId);
    await db.saveAttempt(a);
    send(req, res, Object.assign({ resumed: false }, attemptResponse(a)));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/attempts/:id', auth, async (req, res) => {
  try {
    const a = await loadOwn(req, res); if (!a) return;
    send(req, res, attemptResponse(a));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// --- decision within a phase ---
app.post('/api/attempts/:id/decision', auth, requireRole('practitioner'), async (req, res) => {
  try {
    const a = await loadOwn(req, res); if (!a) return;
    if (a.status !== 'in_progress') return res.status(409).json({ error: 'Attempt is completed' });
    if (a.decisions.some(d => d.phase === a.currentPhase)) {
      return res.status(409).json({ error: 'A decision has already been recorded for this phase' });
    }
    const { optionId, readStage } = req.body || {};
    const resolved = S(a).resolveChoice(a.currentPhase, optionId, a.clientState);
    if (!resolved) return res.status(400).json({ error: 'Unknown option for this phase' });

    const fb = feedbackEngine.generateFeedback(a.currentPhase, resolved, a.clientState);
    a.decisions.push({
      phase: a.currentPhase,
      readStage: readStage || null,
      optionId: resolved.optionId,
      label: resolved.label,
      language: resolved.languageUsed,
      degraded: resolved.degraded,
      consequence: resolved.consequence,
      at: new Date().toISOString()
    });
    a.feedback.push({ phase: a.currentPhase, kind: 'decision', feedback: fb });
    await db.saveAttempt(a);

    send(req, res, { feedback: fb, consequence: resolved.consequence, view: phaseView(a) });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// --- toolkit schema + execution ---
app.get('/api/toolkits/:n', auth, (req, res) => {
  const s = toolkits.schemaFor(Number(req.params.n));
  if (!s) {
    const reg = canonical.TOOLKIT[req.params.n];
    return send(req, res, {
      error: `Toolkit #${req.params.n} is not implemented in this build.`,
      registry: reg || null
    }, 404);
  }
  send(req, res, s);
});

app.post('/api/attempts/:id/toolkit/:n', auth, requireRole('practitioner'), async (req, res) => {
  try {
    const a = await loadOwn(req, res); if (!a) return;
    if (a.status !== 'in_progress') return res.status(409).json({ error: 'Attempt is completed' });
    const n = Number(req.params.n);
    const ctx = { outcome: a.decisionOutcome ? a.decisionOutcome.outcome : null, caseFacts: S(a).caseFacts || null };
    const result = toolkits.executeToolkit(n, req.body || {}, a.clientState, a.artifacts, ctx);
    if (result.error) return res.status(404).json(result);

    a.artifacts[String(n)] = {
      n,
      name: result.toolkit.name,
      data: req.body,
      valid: result.valid,
      issues: result.issues,
      summary: result.summary,
      phase: a.currentPhase,
      submittedAt: new Date().toISOString()
    };
    const fb = feedbackEngine.toolkitFeedback(a.currentPhase, result, a.clientState);
    a.feedback.push({ phase: a.currentPhase, kind: 'toolkit', toolkit: n, feedback: fb });
    await db.saveAttempt(a);

    send(req, res, { valid: result.valid, issues: result.issues, feedback: fb, view: phaseView(a) });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// --- advance phase ---
app.post('/api/attempts/:id/advance', auth, requireRole('practitioner'), async (req, res) => {
  try {
    const a = await loadOwn(req, res); if (!a) return;
    if (a.status !== 'in_progress') return res.status(409).json({ error: 'Attempt is completed' });

    const view = phaseView(a);
    if (!view.progress.canAdvance) {
      return send(req, res, {
        error: 'Phase gate is closed',
        reason: view.progress.gate.reason ||
          (!view.progress.decisionMade ? 'No decision recorded for this phase.' : 'A required toolkit artifact is incomplete.'),
        view
      }, 409);
    }

    const idx = canonical.PHASE_ORDER.indexOf(a.currentPhase);
    const sc = S(a);

    // Phase 7 → Decision Engine derives the outcome before Phase 8 opens.
    if (a.currentPhase === 'decisionSupport') {
      a.decisionOutcome = decisionEngine.deriveOutcome(a.clientState, a.artifacts, {
        voice: sc.voice || null,
        motivationItem: sc.caseFacts ? sc.caseFacts.motivationItem : null
      });
      a.currentPhase = 'continuation';
      await db.saveAttempt(a);
      return send(req, res, {
        decisionOutcome: a.decisionOutcome,
        continuationProposal: continuationEngine.proposePlan(a.decisionOutcome.outcome, a.clientState, a, sc.followUpPack),
        view: phaseView(a)
      });
    }

    a.currentPhase = canonical.PHASE_ORDER[idx + 1];
    await db.saveAttempt(a);
    send(req, res, { view: phaseView(a) });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// --- Phase 8: continuation ---
app.get('/api/attempts/:id/continuation', auth, async (req, res) => {
  try {
    const a = await loadOwn(req, res); if (!a) return;
    if (!a.decisionOutcome) return res.status(409).json({ error: 'No derived outcome yet — complete Phase 7 first.' });
    send(req, res, {
      decisionOutcome: a.decisionOutcome,
      proposal: continuationEngine.proposePlan(a.decisionOutcome.outcome, a.clientState, a, S(a).followUpPack),
      eligibility: continuationEngine.toolkitEligibility(a.decisionOutcome.outcome),
      executed: a.continuation || null
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/attempts/:id/continuation', auth, requireRole('practitioner'), async (req, res) => {
  try {
    const a = await loadOwn(req, res); if (!a) return;
    if (!a.decisionOutcome) return res.status(409).json({ error: 'No derived outcome yet.' });
    const outcome = a.decisionOutcome.outcome;

    // Toolkit #8 governs all three outcomes and must validate first.
    const result = toolkits.executeToolkit(8, req.body || {}, a.clientState, a.artifacts, { outcome, caseFacts: S(a).caseFacts || null });
    a.artifacts['8'] = {
      n: 8, name: result.toolkit.name, data: req.body,
      valid: result.valid, issues: result.issues, summary: result.summary,
      phase: 'continuation', submittedAt: new Date().toISOString()
    };
    const fb = feedbackEngine.toolkitFeedback('continuation', result, a.clientState);
    a.feedback.push({ phase: 'continuation', kind: 'toolkit', toolkit: 8, feedback: fb });

    if (!result.valid) {
      await db.saveAttempt(a);
      return send(req, res, { valid: false, issues: result.issues, feedback: fb }, 422);
    }

    a.continuation = continuationEngine.executeContinuation(outcome, req.body || {}, a.clientState);
    a.status = 'completed';
    a.completedAt = new Date().toISOString();
    await db.saveAttempt(a);

    send(req, res, { valid: true, feedback: fb, continuation: a.continuation, evidence: evidenceFor(a) });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// --- evidence ---
function evidenceFor(a) {
  return {
    attemptId: a.id,
    practitioner: a.practitionerName,
    scenario: a.scenario,
    caseTitle: scenarios.get(a.scenario).title,
    clientName: scenarios.get(a.scenario).profile.name,
    startedAt: a.startedAt,
    completedAt: a.completedAt,
    status: a.status,
    phasesExecuted: a.decisions.map(d => {
      const p = canonical.getPhase(d.phase);
      return { n: p.n, name: p.name, choice: d.label, optionId: d.optionId };
    }),
    decisions: a.decisions,
    feedback: a.feedback,
    toolkitArtifacts: Object.keys(a.artifacts).map(n => a.artifacts[n]),
    clientStateFinal: a.clientState,
    trustReadout: feedbackEngine.trustReadout(a.clientState.trust),
    decisionOutcome: a.decisionOutcome,
    continuation: a.continuation,
    competencyObservations: feedbackEngine.competencyObservations(a)
  };
}

app.get('/api/attempts/:id/evidence', auth, async (req, res) => {
  try {
    const a = await loadOwn(req, res); if (!a) return;
    send(req, res, evidenceFor(a));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ---------------------------------------------------------------------------
// manager
// ---------------------------------------------------------------------------
app.get('/api/manager/attempts', auth, requireRole('manager'), async (req, res) => {
  try {
    const list = await db.listAttemptsForClinic(req.user.clinic_id);
    send(req, res, {
      clinic: req.user.clinic_name,
      attempts: list.map(a => ({
        id: a.id,
        practitionerId: a.practitionerId,
        practitionerName: a.practitionerName,
        scenario: a.scenario, caseTitle: scenarios.get(a.scenario).title,
        status: a.status,
        startedAt: a.startedAt,
        completedAt: a.completedAt,
        phaseReached: canonical.getPhase(a.currentPhase).n + ' — ' + canonical.getPhase(a.currentPhase).name,
        decisions: a.decisions.length,
        // opened and walked away from before a single choice — shown, but never
        // counted as a consultation in the coaching evidence
        abandoned: a.status !== 'completed' && a.decisions.length === 0,
        toolkitsValid: Object.keys(a.artifacts).filter(n => a.artifacts[n].valid).map(Number),
        outcome: a.decisionOutcome ? a.decisionOutcome.outcome : null,
        relationshipState: a.clientState.relationshipState,
        continuationPlanned: !!a.continuation
      }))
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/manager/attempts/:id', auth, requireRole('manager'), async (req, res) => {
  try {
    const a = await db.getAttempt(req.params.id);
    if (!a) return res.status(404).json({ error: 'Attempt not found' });
    if (a.clinicId !== req.user.clinic_id) return res.status(403).json({ error: 'Different clinic' });
    send(req, res, evidenceFor(a));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

/**
 * A coaching conversation, recorded by the manager who had it.
 * This is what makes "did the coaching work?" answerable later.
 */
app.post('/api/manager/coaching-notes', auth, requireRole('manager'), async (req, res) => {
  try {
    const id = await coachingLog.record(db, req.user, req.body || {});
    send(req, res, { id }, 201);
  } catch (e) { res.status(422).json({ error: e.message }); }
});

app.get('/api/manager/coaching-notes', auth, requireRole('manager'), async (req, res) => {
  try {
    const [attempts, practitioners] = await Promise.all([
      db.listAttemptsForClinic(req.user.clinic_id),
      db.listPractitioners(req.user.clinic_id)
    ]);
    send(req, res, {
      notes: await coachingLog.effects(db, req.user.clinic_id, attempts, practitioners, coach.PATTERNS)
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

/**
 * THE LAST STAGE OF THE ARC, FROM HER SIDE.
 *
 * The journey ends at manager coaching, and until now a practitioner could not
 * see that it had happened: the loop closed somewhere she could not look. This
 * is her own end of it — what she was coached on, when, and what her own work
 * has done since.
 *
 * What it deliberately does NOT return is the manager's note itself. A manager
 * writes that as her own record of a conversation she has already had out loud;
 * it is not a message to the practitioner, and quietly turning it into one
 * would make managers write differently — which would cost the product the
 * honest note it depends on. So the practitioner gets the subject, the date and
 * the measurement of her own work, and never the private wording.
 *
 * The measurement compares her only with her own earlier consultations, never
 * with a colleague, and reports thin evidence as thin evidence.
 */
app.get('/api/coaching-received', auth, async (req, res) => {
  try {
    if (req.user.role !== 'practitioner') return send(req, res, { conversations: [] });
    const [attempts, practitioners] = await Promise.all([
      db.listAttemptsForClinic(req.user.clinic_id),
      db.listPractitioners(req.user.clinic_id)
    ]);
    const all = await coachingLog.effects(
      db, req.user.clinic_id, attempts, practitioners, coach.PATTERNS, 'practitioner');
    const mine = all.filter(n => n.practitionerId === req.user.id).map(n => ({
      id: n.id,
      phase: n.phase,
      phaseName: n.phaseName,
      patternKey: n.patternKey,
      createdAt: n.createdAt,
      effect: n.effect
      // n.note is intentionally absent — see the comment above.
    }));
    send(req, res, {
      conversations: mine,
      note: mine.length
        ? T('What your manager coached you on, and what your own work has done since. It compares you with your own earlier consultations and with nobody else.',
             'Lo que tu responsable trabajó contigo y lo que ha hecho tu propio trabajo desde entonces. Te compara con tus propias consultas anteriores y con nadie más.')
        : T('Nothing yet. This fills in after your manager reads one of your written-up consultations and talks it through with you.',
             'Todavía nada. Esto se rellena cuando tu responsable lea una de tus consultas escritas y la comente contigo.')
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

/** The four questions a clinic owner is actually buying an answer to. */
app.get('/api/manager/coaching', auth, requireRole('manager'), async (req, res) => {
  try {
    const [attempts, progressRows, reflectionRows, practitioners] = await Promise.all([
      db.listAttemptsForClinic(req.user.clinic_id),
      db.listClinicLessonProgress(req.user.clinic_id),
      db.listClinicReflections(req.user.clinic_id),
      db.listPractitioners(req.user.clinic_id)
    ]);
    const view = coach.managerView({
      attempts, progressRows, reflectionRows, practitioners,
      clinicName: req.user.clinic_name, scenarios: scenarios.list()
    });
    // The sixth question: what changed after the coaching that was actually given.
    view.coachingEffects = await coachingLog.effects(
      db, req.user.clinic_id, attempts, practitioners, coach.PATTERNS);
    send(req, res, view);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

/** Field assignments across the clinic — the record of the method leaving the screen. */
app.get('/api/manager/assignments', auth, requireRole('manager'), async (req, res) => {
  try {
    const rows = await db.listClinicReflections(req.user.clinic_id);
    send(req, res, {
      entries: rows.map(r => {
        let apply = null;
        try { apply = JSON.parse(r.assignment); } catch (_) { apply = { assignment: r.assignment, prompt: null }; }
        const mod = academy.getModule(r.module_id);
        return {
          id: r.id, practitioner: r.practitioner_name, moduleId: r.module_id,
          moduleTitle: mod ? mod.title : null, apply, answer: r.answer,
          status: r.status, createdAt: r.created_at, answeredAt: r.answered_at
        };
      })
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ---------------------------------------------------------------------------
// COMMERCIAL FLOW — plan, clinic provisioning, practitioner invites
//
// No invented automation: nothing here sends an email or captures a card, and
// there is no public self-signup. A founding clinic is opened by the operator,
// who holds MIRROR_ADMIN_TOKEN, after a conversation — the manager never types
// a card number inside the product and never invents her own account.
// ---------------------------------------------------------------------------
app.get('/api/plan', (req, res) => {
  const p = tenancy.PLANS.founding_pilot;
  send(req, res, {
    plan: p,
    payment: {
      currency: 'EUR',
      amount: p.priceEur,
      note: { en: 'The Founding Pilot is invoiced to the clinic. Nothing is charged inside the product and no card details are ever asked for here.',
              es: 'El Pilot Fundador se factura a la clínica. Dentro del producto no se cobra nada y aquí nunca se piden datos de tarjeta.' }
    }
  });
});

/** Only the operator may open a clinic. Guarded by a token only he holds. */
function operator(req, res) {
  const admin = process.env.MIRROR_ADMIN_TOKEN;
  if (!admin) { res.status(503).json({ error: 'Clinics are opened by arrangement, not from this address.' }); return false; }
  if ((req.headers['x-admin-token'] || '') !== admin) { res.status(403).json({ error: 'Not authorised' }); return false; }
  return true;
}

/**
 * Open a founding clinic and its first manager account.
 * The password is returned exactly once, to the operator who ran this, and is
 * never stored in clear and never shown inside the product.
 */
app.post('/api/admin/clinics', async (req, res) => {
  if (!operator(req, res)) return;
  try {
    const { clinicName, managerName, managerEmail, country, paymentState, paymentReference, password } = req.body || {};
    if (!clinicName || !managerName || !managerEmail) {
      return res.status(422).json({ error: 'clinicName, managerName and managerEmail are required' });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(managerEmail))) {
      return res.status(422).json({ error: 'That email address does not look valid' });
    }
    // An operator may set the first password himself — handing it over in the
    // room is often how a founding clinic actually starts — but he may not set
    // a weak one, and never one of the published ones.
    if (password && String(password).length < 12) {
      return res.status(422).json({ error: 'A supplied password must be at least 12 characters' });
    }
    const created = await tenancy.createPilotClinic(db, {
      clinicName, managerName, managerEmail, country, password: password || undefined,
      paymentState: paymentState || 'pending',
      paymentReference: paymentReference || 'INV-' + Date.now().toString(36).toUpperCase()
    });
    res.status(201).json({
      clinic: created.clinic,
      manager: created.manager,
      password: created.password,
      signInAt: `${req.protocol}://${req.get('host')}/app`
    });
  } catch (e) { res.status(409).json({ error: e.message }); }
});

/** Human confirmation of payment. Guarded by a token only the operator holds. */
app.post('/api/admin/clinics/:id/payment', async (req, res) => {
  if (!operator(req, res)) return;
  try {
    const { state, reference } = req.body || {};
    if (!tenancy.PAYMENT_STATES.includes(state)) return res.status(422).json({ error: 'Unknown payment state' });
    const clinic = await tenancy.getClinic(db, req.params.id);
    if (!clinic) return res.status(404).json({ error: 'No such clinic' });
    await db.run(`UPDATE clinics SET payment_state = ?, payment_reference = COALESCE(?, payment_reference),
                  activated_at = COALESCE(activated_at, ?) WHERE id = ?`,
      [state, reference || null, state === 'paid' || state === 'waived' ? new Date().toISOString() : null, req.params.id]);
    send(req, res, { clinic: await tenancy.getClinic(db, req.params.id) });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/admin/clinics', async (req, res) => {
  if (!operator(req, res)) return;
  try { res.json({ clinics: await tenancy.listClinics(db) }); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

/** The manager's own clinic: plan, seats, payment state. */
app.get('/api/clinic', auth, async (req, res) => {
  try {
    const clinic = await tenancy.getClinic(db, req.user.clinic_id);
    const seats = await tenancy.seatUsage(db, req.user.clinic_id);
    send(req, res, {
      clinic: clinic ? {
        id: clinic.id, name: clinic.name, plan: clinic.plan,
        paymentState: clinic.payment_state, paymentReference: clinic.payment_reference,
        createdAt: clinic.created_at, activatedAt: clinic.activated_at
      } : { id: req.user.clinic_id, name: req.user.clinic_name, plan: 'founding_pilot', paymentState: 'waived' },
      seats,
      plan: tenancy.PLANS.founding_pilot
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/invites', auth, requireRole('manager'), async (req, res) => {
  try {
    send(req, res, {
      invites: await tenancy.listInvites(db, req.user.clinic_id),
      seats: await tenancy.seatUsage(db, req.user.clinic_id)
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

/** The link, and the message that carries it. */
function inviteHandover(req, inv, manager) {
  const link = `${req.protocol}://${req.get('host')}/join?token=${inv.token}`;
  return {
    link,
    message: commercial.handoverMessage({
      name: inv.name,
      clinicName: manager.clinic_name,
      managerName: manager.name,
      link
    })
  };
}

app.post('/api/invites', auth, requireRole('manager'), async (req, res) => {
  try {
    const inv = await tenancy.createInvite(db, req.user, req.body || {});
    const handover = inviteHandover(req, inv, req.user);
    send(req, res, Object.assign({
      invite: inv,
      // The manager sends this herself. Nothing is emailed from here, so what
      // she is handed has to be good enough to paste once and be done.
      seats: await tenancy.seatUsage(db, req.user.clinic_id)
    }, handover), 201);
  } catch (e) { res.status(409).json({ error: e.message }); }
});

/**
 * The same handover again, for an invitation she sent last week and now needs
 * to chase. A link she cannot find again is a link that was never sent.
 */
app.get('/api/invites/:token/handover', auth, requireRole('manager'), async (req, res) => {
  try {
    const inv = await tenancy.getInvite(db, req.params.token);
    if (!inv || inv.clinic_id !== req.user.clinic_id) {
      return res.status(404).json({ error: 'This invitation is not one of yours' });
    }
    if (inv.state !== 'open') {
      return res.status(409).json({ error: inv.state === 'accepted'
        ? 'She has already used this invitation and has her own account now'
        : 'This invitation has expired — issue a new one' });
    }
    send(req, res, Object.assign({ name: inv.name, email: inv.email, expiresAt: inv.expires_at },
      inviteHandover(req, inv, req.user)));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/invites/:token', async (req, res) => {
  try {
    const inv = await tenancy.getInvite(db, req.params.token);
    if (!inv) return res.status(404).json({ error: 'This invitation link is not valid' });
    const clinic = await tenancy.getClinic(db, inv.clinic_id);
    send(req, res, {
      state: inv.state, name: inv.name, email: inv.email,
      clinicName: clinic ? clinic.name : null, expiresAt: inv.expires_at
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/invites/:token/accept', async (req, res) => {
  try {
    const user = await tenancy.acceptInvite(db, req.params.token, (req.body || {}).password);
    const token = await db.createSession(user.id);
    // She does not land on a dashboard. She lands in a lesson, and the page she
    // came from is told which one before it moves her.
    const rows = await db.listLessonProgress(user.id);
    const done = new Set(rows.filter(r => r.status === 'complete').map(r => r.lesson_id));
    let first = null;
    for (const m of academy.curriculum()) {
      if (m.status !== 'available') continue;
      const l = m.lessons.find(x => !done.has(x.id));
      if (l) { first = { moduleId: m.id, lessonId: l.id, moduleTitle: m.title, title: l.title, minutes: l.minutes, objective: l.objective }; break; }
    }
    send(req, res, { token, user: publicUser(user), firstLesson: first }, 201);
  } catch (e) { res.status(409).json({ error: e.message }); }
});

// ---------------------------------------------------------------------------
// A FORGOTTEN PASSWORD
//
// Somebody forgets one in the first fortnight of every pilot, and until now the
// only remedy was a fresh invitation to a different address — which would have
// orphaned everything she had already recorded against her old account.
//
// There is no email from this product, so there is no "email me a link" flow to
// build. In a ten-seat clinic the manager is in the building: she issues the
// link and hands it over, exactly as she handed over the invitation. She never
// chooses or sees the new password.
// ---------------------------------------------------------------------------

app.post('/api/password-resets', auth, requireRole('manager'), async (req, res) => {
  try {
    const r = await tenancy.createPasswordReset(db, req.user, req.body || {});
    const base = `${req.protocol}://${req.get('host')}`;
    const link = `${base}/reset?token=${r.token}`;
    const firstName = String(r.name || '').split(' ')[0];
    send(req, res, {
      link,
      name: r.name,
      expiresAt: r.expiresAt,
      // Something she can paste into a message, in her own language, rather
      // than a bare token she has to explain.
      message: T(
        `Hi ${firstName} — here is a link to set a new MIRROR password. It works once and expires in 48 hours. Everything you have already recorded stays exactly where it is.\n\n${link}`,
        `Hola ${firstName}: aquí tienes un enlace para poner una contraseña nueva en MIRROR. Funciona una sola vez y caduca en 48 horas. Todo lo que ya tienes registrado se queda tal cual.\n\n${link}`),
      note: T('Send her this link. She chooses the password — you never see it, and nothing she has recorded is lost.',
              'Mándale este enlace. La contraseña la elige ella: tú no la ves, y no se pierde nada de lo que tenga registrado.')
    }, 201);
  } catch (e) { res.status(422).json({ error: e.message }); }
});

/** What the reset page needs before it shows a form. Never reveals the email. */
app.get('/api/password-resets/:token', async (req, res) => {
  try {
    const r = await tenancy.getPasswordReset(db, req.params.token);
    if (!r) return res.status(404).json({ error: 'This link is not valid' });
    const who = await db.getUserById(r.user_id);
    send(req, res, {
      state: r.state,
      name: who ? who.name : null,
      clinicName: who ? who.clinic_name : null
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/password-resets/:token/use', async (req, res) => {
  try {
    const user = await tenancy.usePasswordReset(db, req.params.token, (req.body || {}).password);
    const token = await db.createSession(user.id);
    send(req, res, { token, user: publicUser(user) }, 201);
  } catch (e) { res.status(409).json({ error: e.message }); }
});

// ---------------------------------------------------------------------------
// THE FIRST TEN MINUTES, AND THE ARC
//
// Two things the product owed anybody who had just been given an account: one
// thing worth her time before a single person has practised, and an honest
// answer to "where am I in all of this, and what do I do next".
// ---------------------------------------------------------------------------

/**
 * One real consultation moment, playable by anybody with an account and
 * recorded against nobody. It is what a clinic owner is buying, in three
 * minutes, before she asks her team for anything.
 */
app.get('/api/first-moment', auth, (req, res) => {
  send(req, res, commercial.firstMoment());
});

/** What a person has already done that should never be asked of her twice. */
app.post('/api/milestones/:key', auth, async (req, res) => {
  try {
    const allowed = ['first_moment', 'walked_in', 'team_invited'];
    if (!allowed.includes(req.params.key)) return res.status(404).json({ error: 'Unknown milestone' });
    await tenancy.reachMilestone(db, req.user.id, req.params.key);
    send(req, res, { reached: await tenancy.milestones(db, req.user.id) });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

/** Learning path → case practice → field application → what you keep. */
app.get('/api/journey', auth, async (req, res) => {
  try {
    const reached = await tenancy.milestones(db, req.user.id);
    if (req.user.role === 'manager') {
      const [practitioners, progressRows, attempts, reflections, seats, invites] = await Promise.all([
        db.listPractitioners(req.user.clinic_id),
        db.listClinicLessonProgress(req.user.clinic_id),
        db.listAttemptsForClinic(req.user.clinic_id),
        db.listClinicReflections(req.user.clinic_id),
        tenancy.seatUsage(db, req.user.clinic_id),
        tenancy.listInvites(db, req.user.clinic_id)
      ]);
      return send(req, res, Object.assign(
        commercial.clinicJourney({
          practitioners, progressRows, attempts, reflections, seats,
          invitesOpen: invites.filter(i => i.state === 'open').length,
          momentSeen: !!reached.first_moment
        }),
        { reached, clinic: req.user.clinic_name }));
    }
    const [progressRows, attempts, reflections] = await Promise.all([
      db.listLessonProgress(req.user.id),
      db.listAttemptsForPractitioner(req.user.id),
      db.listReflections(req.user.id)
    ]);
    const materials = attempts.reduce((s, a) =>
      s + Object.keys(a.artifacts || {}).filter(n => a.artifacts[n].valid).length, 0)
      + reflections.filter(r => r.status === 'answered').length;
    send(req, res, Object.assign(
      commercial.practitionerJourney({ progressRows, attempts, reflections, materials }),
      { reached, clinic: req.user.clinic_name }));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ---------------------------------------------------------------------------
// The buyer opens the product and sees the product. The commercial page is
// still served, at /pilot, but it is never what a launcher lands on.
app.get('/', (req, res) => res.sendFile(path.join(PUBLIC, 'index.html')));
app.get('/app', (req, res) => res.sendFile(path.join(PUBLIC, 'index.html')));
app.get('/pilot', (req, res) => res.sendFile(path.join(PUBLIC, 'landing.html')));
app.get('/join', (req, res) => res.sendFile(path.join(PUBLIC, 'join.html')));
app.get('/reset', (req, res) => res.sendFile(path.join(PUBLIC, 'reset.html')));

const PORT = process.env.PORT || 5000;

/**
 * One way to bring the database up — used by the server, by the tests, and by
 * anything that embeds the app. Every schema migration belongs here and
 * nowhere else. A caller that only ran db.initialize() used to get a database
 * with no tenancy and no coaching tables, and the first manager request into
 * it failed at runtime instead of at boot.
 */
let booted = null;
function bootstrap() {
  if (!booted) {
    booted = db.initialize()
      .then(() => tenancy.migrate(db))
      .then(() => coachingLog.migrate(db))
      .then(() => db);
  }
  return booted;
}

if (require.main === module) {
  bootstrap()
    .then(() => require('./seed')(db))
    .then(() => {
      app.listen(PORT, '0.0.0.0', () => {
        console.log(`MIRROR Product V2 (${BUILD.version} / ${BUILD.buildId}) listening on http://0.0.0.0:${PORT}`);
      });
    })
    .catch(e => { console.error('Startup failed:', e); process.exit(1); });
}

module.exports = { app, db, bootstrap };
