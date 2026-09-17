/**
 * CASE 09 — MARTA / THE RETURNING CLIENT — 8-PHASE CANONICAL SCENARIO (EN/ES)
 *
 * Materially different from every earlier case:
 *   - Entrance: FAMILIAR. Marta is not a prospect. She has been a client of this
 *     clinic for two years and has completed three courses of treatment. She opens
 *     at willingness 65 — the highest opening willingness in the curriculum — and
 *     THAT IS THE TRAP. High willingness in a returning client is not established
 *     trust; it is accumulated habit, and habit is exactly what a competitor
 *     removes. The trust ledger still opens at zero on every stage, because trust
 *     is earned inside this consultation, not carried in from the file.
 *   - She ASSUMES SHE IS ALREADY UNDERSTOOD. She skips the explanation, gestures
 *     at history ("you know what I'm like"), and expects the practitioner to
 *     remember. She is the easiest client in the building to under-serve, and she
 *     is asking for something three times larger than anything she has bought here.
 *   - THE SINGLE MOST EXPENSIVE MISTAKE IS THE SHORTENED CONSULTATION. Skipping
 *     phases because the person is familiar; taking "same as usual, just more" as
 *     a brief; treating the relationship as evidence that Discovery has already
 *     happened. The case rewards running the full eight phases WITH AN EXISTING
 *     CLIENT, and rewards one question nobody asked her in April: what was the
 *     last course actually like?
 *   - Turning point 1 at PHASE 3 (the last course, honestly)        → unspoken_disappointment.
 *   - Turning point 2 at PHASE 4 (why this, why now, why bigger)    → changed_circumstances.
 *   - Turning point 3 at PHASE 7 (asking the question you'd rather not) → considering_leaving.
 *   - PHASE 8 IS CONSEQUENTIAL HERE IN A WAY IT IS NOT ELSEWHERE. Marta does not
 *     enter as PROSPECTIVE — she enters ACTIVE, and an Active relationship is the
 *     only kind that can be LOST. The relationship state at the end (Active /
 *     Paused / Dormant) is produced by what the learner did, and Toolkit #8 is the
 *     instrument that either keeps a two-year client or quietly releases her to the
 *     clinic her friend uses.
 *   - TOOLKIT #17 (Retention & Lifetime Value Review) is legitimately in scope in
 *     this case and in no other, because its canonical gate reads: "Applies to
 *     Active relationship management only. Never at immediate NO." Marta is Active
 *     on arrival. The gate is respected exactly: #17 is available for the LATER
 *     Active-management review point, it is never the immediate post-consultation
 *     step (that is always Toolkit #8), and it disappears entirely on a NO or on
 *     any path that ends the consultation with the relationship Paused or Dormant.
 *
 * Provenance: MBOK Ch.6 (Relationship Continuum; Active, Paused, Dormant; End
 * Relationships Responsibly); Ch.1 s1.16 phase objectives — all eight, with an
 * existing client; Ch.3 Trust Standards 2, 3, 4, 6; Ch.2 Ethical Duties 3 and 4;
 * MIRROR Toolkit v1.0 §1 item 8 and §3 item 17. Canonical architecture unchanged.
 *
 * Register: professional Spain-Spanish with «tú» — after two years and three
 * courses the clinic and Marta are on first-name, tuteo terms, and that easy
 * register is itself part of the hazard the case teaches. Client-facing strings
 * are {en, es}; the API localizes at the boundary.
 */

const canonical = require('../framework/canonical');
const { TRUST_STANDARDS, ETHICAL_DUTIES, TRUST_STAGES } = canonical;

const T = (en, es) => ({ en, es });

// Canonical citations, rendered in both languages by the framework layer.
const std = n => canonical.standardLabel(n);
const duty = n => canonical.dutyLabel(n);
const stage = k => canonical.stageLabel(k);

/**
 * Bilingual citation join. Canonical labels arrive as {en, es}; the connective
 * prose between them is supplied in both languages here, so the principle line
 * a learner reads is fully in their language.
 */
const J = (...parts) => ({
  en: parts.map(p => (typeof p === 'string' ? p : p.en)).join(''),
  es: parts.map(p => (typeof p === 'string' ? p : (p.es || p.en))).join('')
});
const L = (en, es) => ({ en, es });


// ---------------------------------------------------------------------------
const profile = {
  name: 'Marta Ibáñez',
  age: 44,
  presenting: T(
    'Asking for a full facial rejuvenation programme — radiofrequency microneedling plus structural volume, 2.400 € over eight months. Her three previous courses here totalled 1.800 € across two years; the largest single course she has ever bought was 640 €',
    'Pide un programa completo de rejuvenecimiento facial — radiofrecuencia con microagujas más volumen estructural, 2.400 € repartidos en ocho meses. Sus tres cursos anteriores aquí suman 1.800 € en dos años; el curso más caro que ha comprado nunca fue de 640 €'
  ),
  visibleGoal: T(
    '"You know what I\'m like. Same as always, just — more. Whatever we did last time but properly this time."',
    '«Ya sabes cómo soy. Lo de siempre, pero — más. Lo que hicimos la última vez pero esta vez en serio.»'
  ),
  hiddenMotivation: T(
    'Three things she has not said. The pigmentation course she finished in March did almost nothing that lasted — the pigment was back within eight weeks and she never mentioned it, because she liked everyone here and did not want to make a fuss. She separated from her partner in February and now pays for the flat on her own, so a 2.400 € programme is not "a bit more" for her, it is a different kind of decision entirely. And her friend Nuria has moved to a clinic in the centre, has shown her the photographs, and there is an appointment there next Thursday that Marta has not cancelled.',
    'Tres cosas que no ha dicho. El curso de pigmentación que terminó en marzo casi no hizo nada duradero — el pigmento volvió en ocho semanas y ella nunca lo comentó, porque le cae bien todo el mundo aquí y no quería montar un lío. Se separó de su pareja en febrero y ahora paga el piso sola, así que un programa de 2.400 € no es «un poco más» para ella, es una decisión de otra naturaleza. Y su amiga Nuria se ha cambiado a una clínica del centro, le ha enseñado las fotos, y hay una cita allí el jueves que viene que Marta no ha anulado.'
  ),
  emotionalConsequence: T(
    'That two years of being a good, easy, uncomplaining client bought her exactly nothing when it mattered — that being liked here is not the same as being looked at here. If nobody asks, she will not complain; she will simply stop coming, politely, and the file will read "no longer attends".',
    'Que dos años siendo una clienta buena, fácil y sin quejas no le sirvieron absolutamente de nada cuando hizo falta — que caer bien aquí no es lo mismo que que aquí la miren. Si nadie pregunta, no se quejará; sencillamente dejará de venir, con educación, y en la ficha pondrá «ya no acude».'
  ),
  history: T(
    'CLIENT SINCE: two years. COURSE 1 — six medical peels for texture and dullness, 540 €, completed, delighted, referred her sister. COURSE 2 — four hydration and skin-quality sessions, 620 €, completed, happy, rebooked on the day. COURSE 3 — six pigmentation sessions, 640 €, completed in March, file note reads "good response, review booked April". THE APRIL REVIEW WAS NEVER ATTENDED AND NEVER REBOOKED. Six months of silence followed, the longest gap in her record. Two retention calls logged, both unanswered.',
    'CLIENTA DESDE: hace dos años. CURSO 1 — seis peelings médicos para textura y falta de luminosidad, 540 €, completado, encantada, nos trajo a su hermana. CURSO 2 — cuatro sesiones de hidratación y calidad de piel, 620 €, completado, contenta, volvió a reservar el mismo día. CURSO 3 — seis sesiones de pigmentación, 640 €, terminado en marzo, la nota de la ficha dice «buena respuesta, revisión agendada en abril». A ESA REVISIÓN DE ABRIL NO ACUDIÓ NUNCA Y NO LA VOLVIÓ A PEDIR. Después, seis meses de silencio, el mayor intervalo de todo su historial. Dos llamadas de seguimiento registradas, ninguna contestada.'
  ),
  entryRelationshipState: 'ACTIVE'
};

const intake = {
  bookingNote: T(
    '"Hi — it\'s Marta. Can I come in and see you about doing something bigger? Don\'t worry about the forms, you\'ve got all my stuff. Any afternoon is fine."',
    '«Hola, soy Marta. ¿Puedo pasarme y hablar de hacer algo más grande? No te preocupes por los formularios, ya tenéis todos mis datos. Cualquier tarde me va bien.»'
  ),
  intakeForm: [
    T('Update form: returned blank apart from a signature and "no changes" in the medical box', 'Formulario de actualización: devuelto en blanco salvo la firma y un «sin cambios» en la casilla médica'),
    T('Requested: "the full thing — the tightening programme and whatever goes with it". Estimated 2.400 €', 'Solicita: «el programa completo — lo del tensado y lo que vaya con eso». Estimado: 2.400 €'),
    T('FILE: Course 3 (pigmentation, six sessions, 640 €) closed in March, note "good response, review booked April"', 'FICHA: el Curso 3 (pigmentación, seis sesiones, 640 €) se cerró en marzo, con la nota «buena respuesta, revisión agendada en abril»'),
    T('FILE: the April review was never attended. No cancellation, no rebooking, no message', 'FICHA: a la revisión de abril no acudió. Sin anulación, sin nueva cita, sin ningún mensaje'),
    T('FILE: six months since last attendance — the longest gap in two years. Two retention calls logged in May and July, both unanswered', 'FICHA: seis meses desde su última visita — el mayor intervalo en dos años. Dos llamadas de seguimiento registradas en mayo y julio, ninguna contestada'),
    T('Personal details: partner removed as emergency contact in March; her sister\'s name entered instead. Nobody asked why', 'Datos personales: en marzo se eliminó a la pareja como contacto de emergencia y se puso a su hermana. Nadie preguntó por qué'),
    T('Billing: her last two courses were paid in a single transfer. This booking asks, for the first time, "do you do it in payments?"', 'Facturación: sus dos últimos cursos se pagaron en una sola transferencia. En esta cita pregunta, por primera vez, «¿esto se puede pagar a plazos?»')
  ],
  buriedSignals: ['missed_review', 'six_month_gap', 'contact_change_and_instalments']
};

// ---------------------------------------------------------------------------
function initialClientState() {
  return {
    trust: { safety: 0, attention: 0, understanding: 0, credibility: 0, alignment: 0, reliability: 0, confirmation: 0 },
    willingness: 65,
    posture: 'familiar',
    objectionIntensity: 1,
    revealed: [],
    withheld: ['unspoken_disappointment', 'changed_circumstances', 'considering_leaving'],
    flags: {},
    relationshipState: 'ACTIVE'
  };
}

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

function applyEffects(clientState, effects) {
  const delta = { trust: {}, willingness: 0, revealed: [], posture: null, objectionIntensity: null, relationshipState: null };
  if (effects.trust) {
    for (const [st, amount] of Object.entries(effects.trust)) {
      const before = clientState.trust[st];
      clientState.trust[st] = clamp(before + amount, -3, 3);
      delta.trust[st] = clientState.trust[st] - before;
    }
  }
  if (typeof effects.willingness === 'number') {
    const before = clientState.willingness;
    clientState.willingness = clamp(before + effects.willingness, 0, 100);
    delta.willingness = clientState.willingness - before;
  }
  if (effects.posture) { clientState.posture = effects.posture; delta.posture = effects.posture; }
  if (typeof effects.objectionIntensity === 'number') {
    clientState.objectionIntensity = clamp(effects.objectionIntensity, 1, 3);
    delta.objectionIntensity = clientState.objectionIntensity;
  }
  if (effects.reveals) {
    for (const item of effects.reveals) {
      if (!clientState.revealed.includes(item)) { clientState.revealed.push(item); delta.revealed.push(item); }
      clientState.withheld = clientState.withheld.filter(w => w !== item);
    }
  }
  if (effects.flags) Object.assign(clientState.flags, effects.flags);
  // Case 09 only: an Active relationship is the only kind that can be lost, so the
  // Relationship Continuum state (MBOK Ch.6) is part of the ledger the learner moves.
  if (effects.relationshipState) {
    clientState.relationshipState = effects.relationshipState;
    delta.relationshipState = effects.relationshipState;
  }
  return delta;
}

// ---------------------------------------------------------------------------
// PHASES
// ---------------------------------------------------------------------------
const phases = {

  // ======================= PHASE 1 — PREPARATION ==========================
  preparation: {
    key: 'preparation', toolkit: null,
    signal() {
      return {
        source: T('Client record (Marta is in reception, early, chatting to the receptionist)', 'Historial de la clienta (Marta está en recepción, ha llegado pronto y charla con la recepcionista)'),
        quote: intake.bookingNote,
        detail: intake.intakeForm,
        subtext: T(
          'Preparation Engine: this is the only file in the curriculum with two years of history in it, and the history is doing the talking. Two completed courses that ended in a rebooking. A third that ended in a review she never attended, six months of silence, two unanswered calls, an emergency contact quietly changed, and a first-ever question about instalments. Every one of those is in the record, and none of them is in the booking note. The temptation is to read "you\'ve got all my stuff" as permission to skip the reading.',
          'Motor de Preparación: esta es la única ficha del programa con dos años de historial dentro, y es el historial el que está hablando. Dos cursos completados que terminaron con una nueva reserva. Un tercero que terminó en una revisión a la que no acudió, seis meses de silencio, dos llamadas sin contestar, un contacto de emergencia cambiado sin comentarios y, por primera vez, una pregunta sobre pagar a plazos. Todo eso está en el historial y nada de eso está en la nota de la cita. La tentación es leer «ya tenéis todos mis datos» como permiso para no leer nada.'
        )
      };
    },
    decision: {
      prompt: T('Six minutes before Marta comes through. She has been coming here for two years. What do you do?', 'Seis minutos antes de que pase Marta. Lleva dos años viniendo. ¿Qué haces?'),
      options: [
        {
          id: 'prep-memory',
          label: T('You know Marta — go straight in and price the programme', 'A Marta ya la conoces — entra directa y presupuesta el programa'),
          language: T(
            'It\'s Marta, I don\'t need the file — she\'s been coming for two years and she always says yes. I\'ll have the programme sheet and the payment plan ready so we can get her booked before her parking runs out.',
            'Es Marta, no necesito la ficha — lleva dos años viniendo y siempre dice que sí. Preparo la hoja del programa y el plan de pago para dejarla agendada antes de que se le acabe el parking.'
          ),
          effects: { trust: { credibility: -1 }, willingness: 2, flags: { prepared: 'assumed', skippedFile: true } },
          mirror: {
            signalDetected: T('A two-year record containing a missed review, a six-month gap and two unanswered calls — unopened.', 'Un historial de dos años con una revisión a la que no acudió, seis meses de intervalo y dos llamadas sin contestar — sin abrir.'),
            interpretation: T(
              'Familiarity replaced preparation. "She always says yes" is the single most expensive sentence in returning-client work, because it describes the past and gets spent on the future. The file was trying to tell you that the last course ended badly, and you decided you already knew.',
              'La familiaridad sustituyó a la preparación. «Siempre dice que sí» es la frase más cara del trabajo con clientas que vuelven, porque describe el pasado y se gasta en el futuro. La ficha intentaba contarte que el último curso acabó mal, y tú decidiste que ya lo sabías.'
            ),
            principle: J(duty(3), L(' — competent practice does not have a loyalty discount; ', ' — ejercer con competencia no tiene descuento por fidelidad; '), L('Phase 1 objective — readiness and research before the client arrives.', 'objetivo de la Fase 1: preparación e investigación antes de que llegue la clienta.')),
            learnerDid: T('You prepared a quotation for a client whose last course you did not check.', 'Preparaste un presupuesto para una clienta cuyo último curso no comprobaste.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'An existing client is not a shorter consultation. She is a longer one, because there is a history of evidence to be accountable to and you are the one who owes the account.',
              'Una clienta existente no es una consulta más corta. Es más larga, porque hay un historial de datos del que hay que responder y eres tú quien debe esa respuesta.'
            ),
            consequence: T(
              'Credibility opens below baseline. The missed April review will surface at Phase 7 as something you should have known and did not, in front of someone who has been quietly waiting to see whether you noticed.',
              'La credibilidad arranca por debajo de la línea base. La revisión de abril a la que no acudió aparecerá en la Fase 7 como algo que deberías haber sabido y no sabías, delante de alguien que lleva tiempo esperando en silencio a ver si te dabas cuenta.'
            ),
            nextPriority: T('Read the file hardest for the clients you know best. They are the ones nobody checks.', 'Lee la ficha con más atención precisamente con las clientas que mejor conoces. Son a las que nadie comprueba.')
          }
        },
        {
          id: 'prep-recent',
          label: T('Skim the last course before she comes in', 'Echar un vistazo al último curso antes de que entre'),
          language: T(
            'Let me check what we last did — pigmentation, six sessions, closed in March, note says good response. Fine. So we\'re building on a good result and she wants to go bigger. Ready.',
            'Miro lo último que hicimos — pigmentación, seis sesiones, cerrado en marzo, la nota dice buena respuesta. Bien. Así que partimos de un buen resultado y quiere ir a más. Lista.'
          ),
          effects: { trust: { credibility: 1 }, flags: { prepared: 'partial' } },
          mirror: {
            signalDetected: T('You read the clinical note and stopped at the sentence that agreed with you.', 'Leíste la nota clínica y te paraste en la frase que te daba la razón.'),
            interpretation: T(
              'Checking the last course is real preparation and it puts you ahead of most practitioners. But "good response" is a note somebody wrote at the end of session six, and the two facts that contradict it — the review she never attended and six months of silence — are on the next line down.',
              'Comprobar el último curso es preparación real y te pone por delante de la mayoría. Pero «buena respuesta» es una nota que alguien escribió al terminar la sexta sesión, y los dos datos que la contradicen — la revisión a la que no fue y seis meses de silencio — están en la línea siguiente.'
            ),
            principle: J(duty(3), L('; ', '; '), std(3), L('; Phase 1 objective.', '; objetivo de la Fase 1.')),
            learnerDid: T('You verified the treatment and not the outcome of the treatment.', 'Verificaste el tratamiento y no el resultado del tratamiento.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'A clinical note records what was done. Attendance records what the client thought of it — and hers stopped dead the month after the course ended.',
              'Una nota clínica registra lo que se hizo. La asistencia registra lo que la clienta pensó de ello — y la suya se cortó en seco el mes siguiente a terminar el curso.'
            ),
            consequence: T(
              'Credibility opens slightly positive, and you walk in believing the last course worked. Everything you build on that assumption is built one storey too high.',
              'La credibilidad arranca ligeramente positiva y entras creyendo que el último curso funcionó. Todo lo que construyas sobre esa suposición llevará un piso de más.'
            ),
            nextPriority: T('Never read a closing note without reading what happened after it.', 'Nunca leas una nota de cierre sin leer qué pasó después de ella.')
          }
        },
        {
          id: 'prep-history',
          label: T('Read all three courses — and read what she did next', 'Leer los tres cursos — y leer lo que hizo después'),
          language: T(
            'Course one: rebooked the same day, brought her sister. Course two: rebooked the same day. Course three: finished in March, note says good response, review booked for April — not attended, not rebooked, two retention calls unanswered, six months of nothing. That is not the pattern of a happy client, it is the pattern of a disappointed one who is too polite to say so. Plus: emergency contact changed in March, and a first-ever question about instalments. So today I am running the full eight phases with her as if she were new, and the first real question is what the last course was actually like.',
            'Curso uno: volvió a reservar el mismo día y nos trajo a su hermana. Curso dos: volvió a reservar el mismo día. Curso tres: terminado en marzo, la nota dice buena respuesta, revisión agendada en abril — no acudió, no la volvió a pedir, dos llamadas de seguimiento sin contestar, seis meses de nada. Ese no es el patrón de una clienta contenta, es el de una decepcionada demasiado educada para decirlo. Además: contacto de emergencia cambiado en marzo y, por primera vez, una pregunta sobre pagar a plazos. Así que hoy hago con ella las ocho fases completas como si fuera nueva, y la primera pregunta de verdad es cómo fue en realidad el último curso.'
          ),
          effects: { trust: { credibility: 1, attention: 1 }, willingness: 2, flags: { prepared: 'full', spottedGap: true } },
          mirror: {
            signalDetected: T('All three buried signals identified before contact: a missed review, a six-month silence, and a change of contact details alongside a first request to pay in instalments.', 'Las tres señales ocultas identificadas antes del contacto: una revisión a la que no acudió, un silencio de seis meses y un cambio de datos de contacto junto a la primera petición de pagar a plazos.'),
            interpretation: T(
              'You read attendance as an opinion, which is what it is. A client who rebooks twice on the day and then vanishes for six months has told you something about course three, in the only language a polite client uses. The instalment question and the changed contact say her circumstances moved too.',
              'Leíste la asistencia como una opinión, que es lo que es. Una clienta que reserva dos veces el mismo día y después desaparece seis meses te ha dicho algo sobre el curso tres, en el único idioma que usa una clienta educada. La pregunta de los plazos y el cambio de contacto dicen que sus circunstancias también se han movido.'
            ),
            principle: J(L('Phase 1 objective; ', 'Objetivo de la Fase 1; '), duty(3), L('; ', '; '), std(6), L(' — protecting trust after a decision includes auditing what happened after the last one.', ' — proteger la confianza después de la decisión incluye auditar qué ocurrió después de la anterior.')),
            learnerDid: T('You treated two years of loyalty as a set of facts to be checked rather than a reason not to check.', 'Trataste dos años de fidelidad como un conjunto de datos que comprobar y no como un motivo para no comprobar nada.'),
            alignment: 'ALIGNED',
            why: T(
              'Existing clients are under-served precisely because their files look finished. Reading hers properly is the difference between selling a programme and keeping a client.',
              'A las clientas existentes se las atiende de menos precisamente porque sus fichas parecen terminadas. Leer bien la suya es la diferencia entre vender un programa y conservar una clienta.'
            ),
            consequence: T(
              'You walk in knowing the one thing she has decided not to mention, and you walk in intending to run all eight phases with someone you have treated eighteen times.',
              'Entras sabiendo lo único que ella ha decidido no mencionar, y entras con la intención de hacer las ocho fases completas con alguien a quien has tratado dieciocho veces.'
            ),
            nextPriority: T('Do not shorten Connection because you know her. Lengthen it because she is asking for four times more.', 'No acortes la Conexión porque la conozcas. Alárgala porque está pidiendo cuatro veces más.')
          }
        }
      ]
    },
    gate() { return { canAdvance: true }; }
  },

  // ======================== PHASE 2 — CONNECTION ==========================
  connection: {
    key: 'connection', toolkit: null,
    signal(cs) {
      return {
        source: T('Marta, already sitting down, coat over the back of the chair', 'Marta, ya sentada, con el abrigo en el respaldo de la silla'),
        quote: T(
          '"Right — you know what I\'m like, so I won\'t bore you with the whole story. I want to do the big one. The tightening thing, the full programme, whatever you\'d do to yourself. Let\'s just get on with it."',
          '«Venga — ya sabes cómo soy, así que no te cuento el rollo entero. Quiero hacerme el grande. Lo del tensado, el programa completo, lo que te harías tú. Vamos al lío.»'
        ),
        subtext: cs.flags.spottedGap
          ? T(
              'Listen to what she is offering you: permission to skip. "You know what I\'m like" is warm, and it is also a client volunteering to be under-consulted — and she is quieter than she used to be. The old Marta would have told you about the six months.',
              'Escucha lo que te está ofreciendo: permiso para saltarte cosas. «Ya sabes cómo soy» es cordial, y también es una clienta ofreciéndose a que la consulten de menos — y está más callada que antes. La Marta de siempre te habría contado los seis meses.'
            )
          : T(
              'Easy, warm and fast. She is offering to skip the boring parts, and the boring parts are the consultation.',
              'Fácil, cordial y rápida. Se ofrece a saltarse las partes aburridas, y las partes aburridas son la consulta.'
            )
      };
    },
    decision: {
      prompt: T('Phase 2 objective: psychological safety — with someone who has sat in this chair eighteen times. Your opening move?', 'Objetivo de la Fase 2: seguridad psicológica — con alguien que se ha sentado en esta silla dieciocho veces. ¿Tu primer movimiento?'),
      options: [
        {
          id: 'conn-shortcut',
          label: T('Take the shortcut she is offering', 'Aceptar el atajo que te ofrece'),
          language: T(
            'Perfect — no need for the whole song and dance with you. Let\'s go straight to the programme: I\'ll show you the eight-month plan and we can get your first date in.',
            'Perfecto — contigo no hace falta todo el protocolo. Vamos directas al programa: te enseño el plan de ocho meses y te dejamos cerrada la primera fecha.'
          ),
          effects: { trust: { attention: -1 }, willingness: 4, flags: { shortConsultation: true } },
          mirror: {
            signalDetected: T('A returning client offering to be under-consulted, and a practitioner accepting the offer within one sentence.', 'Una clienta que vuelve ofreciéndose a que la consulten de menos, y una profesional que acepta la oferta en una sola frase.'),
            interpretation: T(
              '"No need for the whole song and dance with you" sounds like intimacy and functions as a downgrade. You have just told a two-year client that the quality of her consultation is inversely proportional to her loyalty.',
              '«Contigo no hace falta todo el protocolo» suena a complicidad y funciona como una rebaja. Acabas de decirle a una clienta de dos años que la calidad de su consulta es inversamente proporcional a su fidelidad.'
            ),
            principle: J(std(2), L('; ', '; '), duty(3), L('; Phase 2 objective — safety is not the same as comfort.', '; objetivo de la Fase 2: la seguridad no es lo mismo que la comodidad.')),
            learnerDid: T('You shortened the consultation of the client with the largest request in the room.', 'Acortaste la consulta de la clienta que hace la petición más grande de la sala.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'The shortened consultation is the single most expensive mistake available with a returning client, and it never feels like a mistake — it feels like rapport.',
              'La consulta acortada es el error más caro que existe con una clienta que vuelve, y nunca parece un error — parece buena sintonía.'
            ),
            consequence: T(
              'Willingness rises, because she likes you and this is going quickly. Attention falls, and everything she has not said stays exactly where it is for the rest of the consultation.',
              'La disposición sube, porque le caes bien y esto va rápido. La atención baja, y todo lo que no ha dicho se queda exactamente donde está durante el resto de la consulta.'
            ),
            nextPriority: T('When a familiar client offers you the shortcut, that is the moment to decline it out loud.', 'Cuando una clienta de siempre te ofrece el atajo, ese es el momento de rechazarlo en voz alta.')
          }
        },
        {
          id: 'conn-catchup',
          label: T('Catch up properly first — how have the six months been?', 'Ponerse al día primero — ¿qué tal estos seis meses?'),
          language: T(
            'Before anything else — it\'s been a while. Six months, I think. How have you been? Not your skin. You.',
            'Antes de nada — hacía tiempo. Seis meses, creo. ¿Cómo estás? Tu piel no. Tú.'
          ),
          effects: { trust: { safety: 1 }, willingness: 2 },
          mirror: {
            signalDetected: T('The longest absence in her two-year record, arriving with a request four times larger than usual.', 'La ausencia más larga de sus dos años de historial, llegando con una petición cuatro veces mayor de lo habitual.'),
            interpretation: T(
              'Naming the gap and asking about her rather than her skin is genuine safety work, and with this client it is unusually well aimed. It is a human question, though, not yet a professional frame — it does not tell her that today will be different from her last eighteen appointments.',
              'Nombrar el intervalo y preguntar por ella y no por su piel es trabajo real de seguridad, y con esta clienta está especialmente bien dirigido. Pero es una pregunta humana, todavía no un marco profesional — no le dice que hoy va a ser distinto de sus últimas dieciocho citas.'
            ),
            principle: J(std(1), L('; ', '; '), stage('safety'), L('; Phase 2 objective.', '; objetivo de la Fase 2.')),
            learnerDid: T('You noticed the absence and asked about the person inside it.', 'Te diste cuenta de la ausencia y preguntaste por la persona que había dentro.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'Warmth she already has — two years of it. What she does not have is any sign that this consultation will interrogate the last course instead of assuming it.',
              'Calidez ya tiene — dos años de ella. Lo que no tiene es ninguna señal de que esta consulta vaya a interrogar el último curso en lugar de darlo por bueno.'
            ),
            consequence: T(
              '"Oh, you know. Busy." A polite non-answer from a polite client. Safety rises a little and the six months stay closed.',
              '«Uy, ya sabes. Liada.» Una no-respuesta educada de una clienta educada. La seguridad sube un poco y los seis meses siguen cerrados.'
            ),
            nextPriority: T('Say explicitly that you are starting from zero today, and why.', 'Di explícitamente que hoy empiezas desde cero, y por qué.')
          }
        },
        {
          id: 'conn-reset',
          label: T('Decline the shortcut — start from the beginning, out loud', 'Rechazar el atajo — empezar desde el principio, en voz alta'),
          language: T(
            'I\'m going to do something that will annoy you slightly. You\'ve been coming here for two years and I\'m going to consult you today as though I\'d never met you — the whole thing, from the top, including the boring questions. Two reasons. One: what you\'re asking for is nearly four times anything you\'ve had here, and a decision that size doesn\'t get to inherit the answers from a decision about peels. Two, the honest one: I have treated you eighteen times and I have never once asked you what you actually thought of the results. That is my omission, not yours, and I\'d like to fix it before we talk about a single euro.',
            'Voy a hacer algo que te va a fastidiar un poco. Llevas dos años viniendo y hoy te voy a consultar como si no te conociera de nada — todo, desde el principio, incluidas las preguntas aburridas. Por dos motivos. Uno: lo que pides es casi cuatro veces cualquier cosa que te hayas hecho aquí, y una decisión de ese tamaño no puede heredar las respuestas de una decisión sobre peelings. Dos, el honesto: te he tratado dieciocho veces y no te he preguntado ni una sola vez qué te parecieron de verdad los resultados. Esa omisión es mía, no tuya, y me gustaría arreglarla antes de hablar de un solo euro.'
          ),
          effects: { trust: { safety: 2, attention: 1 }, willingness: -2, posture: 'attentive', flags: { fullConsultation: true } },
          mirror: {
            signalDetected: T('"You know what I\'m like" — an invitation to skip, offered by someone who has been quieter than usual since she sat down.', '«Ya sabes cómo soy» — una invitación a saltarse cosas, ofrecida por alguien que está más callada de lo normal desde que se sentó.'),
            interpretation: T(
              'You declined the shortcut and named your own omission, which is the specific form safety takes with a long-standing client: not warmth, which she has plenty of, but evidence that the relationship is going to be examined rather than traded on.',
              'Rechazaste el atajo y nombraste tu propia omisión, que es la forma concreta que adopta la seguridad con una clienta de largo recorrido: no calidez, que le sobra, sino la prueba de que la relación se va a examinar en lugar de explotarse.'
            ),
            principle: J(std(1), L('; ', '; '), duty(3), L('; ', '; '), std(6), L('; ', '; '), stage('safety'), L('.', '.')),
            learnerDid: T('You made the full eight-phase consultation non-negotiable, and you took responsibility for never having asked.', 'Hiciste innegociable la consulta completa de ocho fases y asumiste la responsabilidad de no haber preguntado nunca.'),
            alignment: 'ALIGNED',
            why: T(
              'An existing client cannot tell you she was disappointed until you have created a room in which disappointing you is survivable. Admitting your own omission first is what creates it.',
              'Una clienta existente no puede decirte que quedó decepcionada hasta que no le has creado una sala en la que decepcionarte sea algo que se sobreviva. Reconocer tú primero tu omisión es lo que la crea.'
            ),
            consequence: T(
              'She goes still. "That\'s… all right, that\'s fair." Willingness dips slightly — the first honest number of the afternoon — and her posture shifts from familiar to attentive. She is listening properly now, which she was not doing two minutes ago.',
              'Se queda quieta. «Eso… vale, es justo.» La disposición baja un poco — la primera cifra honesta de la tarde — y su postura pasa de familiar a atenta. Ahora está escuchando de verdad, cosa que hace dos minutos no hacía.'
            ),
            nextPriority: T('Now ask the question the file has been waiting six months for.', 'Ahora haz la pregunta que la ficha lleva seis meses esperando.')
          }
        }
      ]
    },
    gate() { return { canAdvance: true }; }
  },

  // ========================= PHASE 3 — DISCOVERY ==========================
  discovery: {
    key: 'discovery', toolkit: 1,
    signal(cs) {
      if (cs.flags.fullConsultation) {
        return {
          source: 'Marta',
          quote: T(
            '"Fine. Ask your boring questions." (A pause.) "Although I don\'t know what you want me to say about results. They were fine. It\'s all been fine."',
            '«Vale. Hazme tus preguntas aburridas.» (Una pausa.) «Aunque no sé qué quieres que te diga de los resultados. Estuvieron bien. Todo ha estado bien.»'
          ),
          subtext: T(
            '"It\'s all been fine" said three seconds after a pause is the single most informative sentence in this case. Fine is what a loyal client says instead of the truth, and she said it about eighteen appointments at once.',
            '«Todo ha estado bien» dicho tres segundos después de una pausa es la frase más informativa de todo el caso. «Bien» es lo que dice una clienta fiel en lugar de la verdad, y lo ha dicho sobre dieciocho citas de golpe.'
          ),
          disclosureLevel: 'opening'
        };
      }
      return {
        source: 'Marta',
        quote: T(
          '"Honestly, just tell me what the programme involves and what it costs. I don\'t need the assessment, you\'ve been looking at my face for two years. Same as always — you decide, I\'ll turn up."',
          '«De verdad, dime en qué consiste el programa y lo que cuesta. No me hace falta la valoración, llevas dos años mirándome la cara. Como siempre — tú decides y yo me presento.»'
        ),
        subtext: T(
          '"You decide, I\'ll turn up" is the sound of a relationship running on autopilot. It sounds like trust and it is actually the absence of a decision — and she has never bought anything this size on autopilot before.',
          '«Tú decides y yo me presento» es el sonido de una relación en piloto automático. Suena a confianza y en realidad es la ausencia de una decisión — y nunca ha comprado nada de este tamaño en piloto automático.'
        ),
        disclosureLevel: 'minimal'
      };
    },
    decision: {
      prompt: T('Phase 3 objective: understand situation and motivation — with a client you think you already understand. What do you do?', 'Objetivo de la Fase 3: comprender la situación y la motivación — con una clienta que crees que ya entiendes. ¿Qué haces?'),
      options: [
        {
          id: 'disc-assume',
          label: T('You already know her skin — take the brief as given', 'Su piel ya la conoces — acepta el encargo tal cual'),
          language: T(
            'You\'re right, I know your skin better than you do by now. So: same philosophy as always, just a bigger version — we tighten, we add a bit of structure, and we keep the skin quality ticking over underneath. I\'ll build it around what we\'ve always done.',
            'Tienes razón, a estas alturas conozco tu piel mejor que tú. Así que: la misma filosofía de siempre, solo que en versión grande — tensamos, añadimos algo de estructura y mantenemos la calidad de piel por debajo. Te lo monto en torno a lo que siempre hemos hecho.'
          ),
          effects: { trust: { understanding: -1, alignment: -1 }, willingness: 3, flags: { underServed: true } },
          mirror: {
            signalDetected: T('A brief consisting of the words "same as always", accepted as a specification.', 'Un encargo compuesto por las palabras «como siempre», aceptado como pliego de condiciones.'),
            interpretation: T(
              '"I know your skin better than you do" is a sentence that can only be said to a returning client, and it is always false in the way that matters: you know her tissue, not her opinion of what you did to it. You have just built an eight-month programme on top of a course that failed.',
              '«Conozco tu piel mejor que tú» es una frase que solo se le puede decir a una clienta que vuelve, y siempre es falsa en lo que importa: conoces su tejido, no su opinión sobre lo que le hiciste. Acabas de construir un programa de ocho meses encima de un curso que fracasó.'
            ),
            principle: J(std(2), L('; Phase 3 objective — situation AND motivation; ', '; objetivo de la Fase 3: situación Y motivación; '), duty(3), L('.', '.')),
            learnerDid: T('You used two years of history as a substitute for Discovery instead of as material for it.', 'Usaste dos años de historial como sustituto del Descubrimiento en lugar de como material para él.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'History tells you what she bought. Only Discovery tells you what she got, and in this case those two are not the same and she has been sitting on the difference since April.',
              'El historial te dice qué compró. Solo el Descubrimiento te dice qué obtuvo, y en este caso no son lo mismo y ella lleva sentada encima de esa diferencia desde abril.'
            ),
            consequence: T(
              'She agrees pleasantly and says nothing about March. Understanding and alignment fall, the disappointment is now permanently out of reach, and you have marked her file as under-served.',
              'Acepta con agrado y no dice nada de marzo. Comprensión y alineación caen, la decepción queda ya definitivamente fuera de alcance y su ficha queda marcada como atendida de menos.'
            ),
            nextPriority: T('Ask a returning client what the last course was actually like. Every single time.', 'Pregúntale a una clienta que vuelve cómo fue de verdad el último curso. Siempre, sin excepción.')
          }
        },
        {
          id: 'disc-goal',
          label: T('Ask properly about the new goal', 'Preguntar en condiciones por el nuevo objetivo'),
          language: T(
            'Tell me about the tightening, then — what is it you\'re seeing in the mirror that we weren\'t treating before? Be specific with me: where, and when do you notice it most?',
            'Cuéntame lo del tensado — ¿qué ves en el espejo que antes no estuviéramos tratando? Sé concreta: ¿dónde, y cuándo lo notas más?'
          ),
          effects: { trust: { attention: 1 }, willingness: 3 },
          mirror: {
            signalDetected: T('A new and much larger request, described in one word: "bigger".', 'Una petición nueva y mucho mayor, descrita con una sola palabra: «más».'),
            interpretation: T(
              'Interrogating the new goal properly is correct practice and it earns attention. It is forward-looking Discovery, though — it asks where she wants to go and never asks what happened on the last journey, which is where everything unsaid in this case is stored.',
              'Interrogar bien el nuevo objetivo es práctica correcta y gana atención. Pero es un Descubrimiento hacia delante — pregunta adónde quiere ir y nunca pregunta qué pasó en el viaje anterior, que es donde está guardado todo lo no dicho de este caso.'
            ),
            principle: J(std(2), L('; ', '; '), stage('attention'), L('; Phase 3 objective.', '; objetivo de la Fase 3.')),
            learnerDid: T('You investigated the request and not the relationship it is growing out of.', 'Investigaste la petición y no la relación de la que nace.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'With a new client, a well-run goal interrogation is most of Discovery. With an existing one it is half, and the missing half is retrospective.',
              'Con una clienta nueva, una buena interrogación del objetivo es casi todo el Descubrimiento. Con una existente es la mitad, y la mitad que falta mira hacia atrás.'
            ),
            consequence: T(
              '"Along the jaw, mostly. And in photographs." Useful, accurate and entirely about the future. Attention rises; March stays sealed.',
              '«En la mandíbula, sobre todo. Y en las fotos.» Útil, exacto y completamente sobre el futuro. La atención sube; marzo sigue sellado.'
            ),
            nextPriority: T('Now look backwards. Ask about the course that ended six months ago.', 'Ahora mira hacia atrás. Pregunta por el curso que terminó hace seis meses.')
          }
        },
        {
          id: 'disc-lastcourse',
          label: T('Ask what the last course was actually like', 'Preguntar cómo fue en realidad el último curso'),
          language: T(
            'Before we talk about anything new, I want to go backwards. The pigmentation course — the six sessions that finished in March. Not what the notes say. You. What was it actually like, and where is that pigment now?',
            'Antes de hablar de nada nuevo, quiero ir hacia atrás. El curso de pigmentación — las seis sesiones que terminaron en marzo. No lo que ponen las notas. Tú. ¿Cómo fue de verdad, y dónde está ahora ese pigmento?'
          ),
          effects: { trust: { safety: 1, attention: 2, understanding: 1 }, willingness: 2, posture: 'reflective', reveals: ['unspoken_disappointment'] },
          mirror: {
            signalDetected: T('A course closed as "good response", a review never attended, six months of silence, and the word "fine".', 'Un curso cerrado como «buena respuesta», una revisión a la que no acudió, seis meses de silencio y la palabra «bien».'),
            interpretation: T(
              'Asking a returning client to evaluate the last course is the highest-yield question in retention work and almost nobody asks it, because the answer can be unflattering. Naming the specific course, the specific month and asking where the pigment is NOW makes "fine" impossible to reuse.',
              'Pedirle a una clienta que vuelve que evalúe el curso anterior es la pregunta más rentable del trabajo de retención y casi nadie la hace, porque la respuesta puede ser incómoda. Nombrar el curso concreto, el mes concreto y preguntar dónde está AHORA el pigmento hace imposible reutilizar el «bien».'
            ),
            principle: J(std(2), L('; ', '; '), std(6), L(' — trust after a decision is verified, not assumed; ', ' — la confianza posterior a la decisión se verifica, no se presupone; '), stage('attention'), L('; Phase 3 objective.', '; objetivo de la Fase 3.')),
            learnerDid: T('You audited your own previous work in front of the person who paid for it.', 'Auditaste tu propio trabajo anterior delante de la persona que lo pagó.'),
            alignment: 'ALIGNED',
            why: T(
              'You cannot sell a two-year client something four times bigger on the back of a course you have not verified. Either the last one worked, in which case say so with evidence, or it did not, in which case that is the consultation.',
              'No puedes venderle a una clienta de dos años algo cuatro veces mayor apoyándote en un curso que no has verificado. O funcionó, y entonces dilo con pruebas, o no funcionó, y entonces esa es la consulta.'
            ),
            consequence: T(
              'A long breath. "It came back. About eight weeks after the last session — it was back, and it\'s been back ever since." She shrugs, apologetically. "I didn\'t say anything because you were all so nice about it, and I felt like I\'d be complaining about a present." The thing nobody asked about in six months is finally in the room.',
              'Un suspiro largo. «Volvió. Unas ocho semanas después de la última sesión — volvió, y ahí sigue desde entonces.» Se encoge de hombros, como disculpándose. «No dije nada porque fuisteis todos muy majos y me parecía que me estaba quejando de un regalo.» Lo que nadie preguntó en seis meses está por fin en la sala.'
            ),
            nextPriority: T('She paid 640 € for eight weeks. Do not move to the new programme until you have dealt with that.', 'Pagó 640 € por ocho semanas. No pases al programa nuevo hasta que no hayas resuelto eso.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a1 = artifacts['1'];
      if (!a1 || !a1.valid) {
        return { canAdvance: false, reason: T('Toolkit #1 (Client Intake & Discovery Canvas) must be completed before Phase 4 — for an existing client exactly as for a new one. Field 2 ("what has already been tried, and what happened") is not the treatment list from her file: it is her verdict on three courses you delivered.', 'El Toolkit #1 (Lienzo de Admisión y Descubrimiento) debe completarse antes de la Fase 4 — con una clienta existente exactamente igual que con una nueva. El campo 2 («qué se ha probado ya y qué pasó») no es la lista de tratamientos de su ficha: es su veredicto sobre tres cursos que le hiciste tú.') };
      }
      return { canAdvance: true };
    }
  },

  // ======================= PHASE 4 — UNDERSTANDING ========================
  understanding: {
    key: 'understanding', toolkit: 3,
    signal(cs) {
      if (cs.revealed.includes('unspoken_disappointment')) {
        return {
          source: 'Marta',
          quote: T(
            '"Don\'t make it a thing. Honestly. I\'m not asking for money back, I just didn\'t want to be the difficult one." (Then, quieter:) "I suppose that\'s why I didn\'t come to the April appointment. It felt easier not to."',
            '«No me montes un drama. De verdad. No estoy pidiendo que me devolváis nada, es que no quería ser la pesada.» (Después, más bajo:) «Supongo que por eso no fui a la cita de abril. Me resultaba más fácil no ir.»'
          ),
          subtext: T(
            'She has just explained the six-month gap and then apologised for it. Phase 4 must consolidate two things at once: a treatment that under-delivered, and a client whose response to disappointment is disappearance rather than complaint. Notice that she is now asking for the biggest thing on the menu anyway — which means something has changed that you still do not know about.',
            'Acaba de explicar el intervalo de seis meses y después se ha disculpado por él. La Fase 4 tiene que consolidar dos cosas a la vez: un tratamiento que no cumplió, y una clienta cuya respuesta a la decepción es desaparecer, no quejarse. Fíjate en que aun así está pidiendo lo más grande de la carta — lo que significa que ha cambiado algo que todavía no sabes.'
          )
        };
      }
      return {
        source: 'Marta',
        quote: T(
          '"So is that a yes to the programme? I don\'t need to understand it, I just need to know if we\'re doing it and how much it is per month."',
          '«¿Entonces eso es un sí al programa? No necesito entenderlo, solo saber si lo hacemos y cuánto sale al mes.»'
        ),
        subtext: T(
          'Nothing to consolidate. She is asking you to skip Understanding and go to the invoice, and because she is familiar it will feel efficient rather than negligent. The monthly-payment question is the second time she has raised money in a way she never used to.',
          'Nada que consolidar. Te está pidiendo que te saltes la Comprensión y vayas a la factura y, como es de siempre, parecerá eficiencia y no negligencia. La pregunta de la cuota mensual es la segunda vez que saca el tema del dinero de una forma que antes nunca usaba.'
        )
      };
    },
    decision: {
      prompt: T('Phase 4 objective: consolidate findings and verify priorities. What do you reflect?', 'Objetivo de la Fase 4: consolidar hallazgos y verificar prioridades. ¿Qué reflejas?'),
      options: [
        {
          id: 'und-reassure',
          label: T('Smooth it over — pigment is difficult, these things vary', 'Quitarle hierro — el pigmento es difícil, estas cosas varían'),
          language: T(
            'Oh, don\'t worry about that at all — pigment is notoriously stubborn and it does come back for a lot of people, especially over a summer. It\'s nothing anyone did wrong. Anyway, the new programme works on a completely different level, so let\'s look forward.',
            'Ay, no te preocupes por eso — el pigmento es famoso por lo cabezota que es y a mucha gente le vuelve, sobre todo pasando un verano. No es que nadie hiciera nada mal. En fin, el programa nuevo trabaja a otro nivel completamente, así que miremos hacia delante.'
          ),
          effects: { trust: { understanding: -1, alignment: -1 }, willingness: 3 },
          mirror: {
            signalDetected: T('A client disclosing, with visible effort, that something she paid for did not work — and apologising while doing it.', 'Una clienta revelando, con esfuerzo visible, que algo que pagó no funcionó — y disculpándose mientras lo hace.'),
            interpretation: T(
              'Every clause of that is technically true and all of it functions as a dismissal. She gave you the one piece of information she has been holding for six months, and you explained why it was not important and changed the subject to something you can sell.',
              'Cada frase es técnicamente cierta y en conjunto funciona como un despacho. Te dio la única información que llevaba seis meses guardando, y tú le explicaste por qué no era importante y cambiaste de tema a algo que sí puedes vender.'
            ),
            principle: J(std(2), L('; ', '; '), std(6), L(' — protecting trust after a decision means meeting a poor outcome, not explaining it away; ', ' — proteger la confianza después de la decisión es afrontar un mal resultado, no justificarlo; '), stage('understanding'), L('.', '.')),
            learnerDid: T('You defended the previous course instead of understanding what it cost her to mention it.', 'Defendiste el curso anterior en lugar de entender lo que le costó mencionarlo.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'A returning client who is told her disappointment is normal has learned that this is not a place where disappointment gets addressed. That is the lesson she will take to the clinic her friend uses.',
              'Una clienta que vuelve y a la que le dicen que su decepción es normal ha aprendido que este no es un sitio donde las decepciones se atiendan. Esa es la lección que se llevará a la clínica a la que va su amiga.'
            ),
            consequence: T(
              '"No, of course. You\'re right." She goes back to being easy, which is exactly the problem. Understanding and alignment fall and she will not raise anything difficult again today.',
              '«No, claro. Tienes razón.» Vuelve a ser fácil, que es justamente el problema. Comprensión y alineación caen y hoy no volverá a sacar nada incómodo.'
            ),
            nextPriority: T('When a loyal client finally complains, the complaint is the consultation. Do not tidy it away.', 'Cuando una clienta fiel se queja por fin, la queja es la consulta. No la recojas y la guardes.')
          }
        },
        {
          id: 'und-acknowledge',
          label: T('Acknowledge it plainly and ask what she wants done about it', 'Reconocerlo con claridad y preguntar qué quiere que se haga'),
          language: T(
            'Then let\'s be straight about it: you paid 640 € for six sessions and you got about eight weeks. That is not a good outcome and I\'m not going to describe it as one. Before we talk about anything new — what would you want me to do about that?',
            'Pues seamos claras: pagaste 640 € por seis sesiones y te duró unas ocho semanas. Eso no es un buen resultado y no lo voy a describir como tal. Antes de hablar de nada nuevo — ¿qué te gustaría que hiciera con eso?'
          ),
          requiresRevealed: 'unspoken_disappointment',
          degradedLanguage: T('Has everything we\'ve done over the two years actually held up, in your opinion?', 'Todo lo que hemos hecho estos dos años, ¿te ha aguantado de verdad, en tu opinión?'),
          effects: { trust: { attention: 1, understanding: 1 }, willingness: 3, reveals: ['changed_circumstances'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 1 },
          degradedNote: T(
            '"Yes, yes, all good." Asked in the abstract, of a client who has not yet told you anything went wrong, the question collects the same answer the file already has.',
            '«Sí, sí, todo bien.» Hecha en abstracto a una clienta que todavía no te ha contado que algo salió mal, la pregunta recoge la misma respuesta que ya tiene la ficha.'
          ),
          mirror: {
            signalDetected: T('A disappointment disclosed and immediately minimised by the person disclosing it.', 'Una decepción revelada y minimizada de inmediato por quien la revela.'),
            interpretation: T(
              'Putting the number and the duration side by side, and refusing to call it a good outcome, is real accountability — it returns her experience to her in a form she cannot politely discount. Asking what she wants done keeps the remedy hers.',
              'Poner juntos el importe y la duración, y negarse a llamarlo buen resultado, es responsabilidad real — le devuelve su experiencia en una forma que no puede descartar con educación. Preguntarle qué quiere que se haga mantiene el remedio en sus manos.'
            ),
            principle: J(std(2), L('; ', '; '), std(6), L('; ', '; '), duty(4), L('; Phase 4 objective.', '; objetivo de la Fase 4.')),
            learnerDid: T('You stated the poor outcome in her own numbers and handed the remedy back to her.', 'Enunciaste el mal resultado con sus propias cifras y le devolviste a ella el remedio.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'It repairs the past and it does not yet ask the obvious question: why is a woman who got eight weeks for 640 € now asking for a 2.400 € programme? Something has changed, and you have not asked what.',
              'Repara el pasado y todavía no hace la pregunta evidente: ¿por qué una mujer a la que 640 € le dieron ocho semanas pide ahora un programa de 2.400 €? Algo ha cambiado, y no has preguntado qué.'
            ),
            consequence: T(
              '"Nothing. Genuinely nothing — I just wanted someone to say it out loud." Then, almost as an afterthought: "Things are a bit different for me now anyway. I\'m on my own since February, so it\'s all coming out of one salary." The change in circumstances is on the table; its weight is not.',
              '«Nada. De verdad, nada — solo quería que alguien lo dijera en voz alta.» Y después, casi de pasada: «Además ahora mi situación es otra. Estoy sola desde febrero, así que todo sale de un solo sueldo.» El cambio de circunstancias está sobre la mesa; su peso, no.'
            ),
            nextPriority: T('One salary, and the largest request of her life. Those two facts belong in the same sentence.', 'Un solo sueldo y la petición más grande de su vida. Esos dos datos van en la misma frase.')
          }
        },
        {
          id: 'und-repair',
          label: T('Name what it cost her to say it — then ask why bigger, and why now', 'Nombrar lo que le costó decirlo — y luego preguntar por qué más grande y por qué ahora'),
          language: T(
            'Two things. First: you paid 640 €, you got eight weeks, and then you didn\'t come to the review — and you\'ve just told me that was because saying so felt like complaining about a present. I\'d rather have a difficult client than a polite one who leaves, so thank you, and that one is on me for never asking. Second, and this is the part I actually don\'t understand: someone who got eight weeks for 640 € does not normally come back asking for a 2.400 € programme. So what\'s changed? Why this, and why now?',
            'Dos cosas. La primera: pagaste 640 €, te duró ocho semanas y después no viniste a la revisión — y me acabas de decir que fue porque decirlo te parecía quejarte de un regalo. Prefiero una clienta incómoda a una educada que se marcha, así que gracias, y esa es mía por no haber preguntado nunca. La segunda, y esta es la parte que de verdad no entiendo: alguien a quien 640 € le dieron ocho semanas no suele volver pidiendo un programa de 2.400 €. ¿Qué ha cambiado? ¿Por qué esto y por qué ahora?'
          ),
          requiresRevealed: 'unspoken_disappointment',
          degradedLanguage: T('Why this, and why now? You\'ve never asked for anything on this scale before.', '¿Por qué esto y por qué ahora? Nunca habías pedido nada de esta envergadura.'),
          effects: { trust: { understanding: 2, alignment: 1, safety: 1 }, willingness: 4, posture: 'open', reveals: ['changed_circumstances'] },
          degradedEffects: { trust: { understanding: 1 }, willingness: 1 },
          degradedNote: T(
            '"No reason. Felt like it was time." The right question, asked of someone who has not yet told you a single true thing about the last two years, collects a pleasantry.',
            '«Por nada. Me apetecía.» La pregunta correcta, hecha a alguien que todavía no te ha contado ni una sola cosa cierta de los dos últimos años, recoge una frase amable.'
          ),
          mirror: {
            signalDetected: T('A disappointment, an apology for mentioning it, and a request four times larger than the thing that disappointed her — all in the same three minutes.', 'Una decepción, una disculpa por mencionarla y una petición cuatro veces mayor que aquello que la decepcionó — todo en los mismos tres minutos.'),
            interpretation: T(
              'You closed the loop on the past and then refused to let the contradiction pass. The escalation is the anomaly in this file: nobody spends more with a supplier who just under-delivered unless something outside the treatment has moved.',
              'Cerraste el círculo del pasado y después te negaste a dejar pasar la contradicción. La escalada es la anomalía de esta ficha: nadie gasta más con un proveedor que acaba de no cumplir a menos que se haya movido algo ajeno al tratamiento.'
            ),
            principle: J(std(2), L('; ', '; '), std(6), L('; ', '; '), duty(4), L('; ', '; '), stage('understanding'), L('; Phase 4 objective — verify priorities.', '; objetivo de la Fase 4: verificar prioridades.')),
            learnerDid: T('You took responsibility for never having asked, and then asked the question the escalation demanded.', 'Asumiste la responsabilidad de no haber preguntado nunca y después hiciste la pregunta que exigía la escalada.'),
            alignment: 'ALIGNED',
            why: T(
              'With a returning client the "why now" is almost never on the face. It is in the life the face belongs to, and two years of familiarity is exactly what stops practitioners asking.',
              'Con una clienta que vuelve, el «por qué ahora» casi nunca está en la cara. Está en la vida a la que pertenece esa cara, y dos años de familiaridad son precisamente lo que impide que los profesionales pregunten.'
            ),
            consequence: T(
              'She looks at the floor for a moment. "Quique and I separated in February. I\'m paying for the flat on my own now, which is — fine, it\'s fine, but it\'s a different arithmetic. And this is the first thing I\'ve chosen for myself since. That\'s why it\'s big. I know that\'s probably stupid." It is not stupid, and it is the whole basis of the recommendation you are about to make.',
              'Se queda un momento mirando al suelo. «Quique y yo nos separamos en febrero. Ahora el piso lo pago yo sola, que está — bien, está bien, pero es otra aritmética. Y esto es lo primero que elijo para mí desde entonces. Por eso es grande. Ya sé que suena bastante tonto.» No suena tonto, y es toda la base de la recomendación que estás a punto de hacer.'
            ),
            nextPriority: T('One salary, a failed course and the first thing she has chosen for herself. Build for that, not for the price list.', 'Un solo sueldo, un curso fallido y lo primero que elige para sí misma. Construye para eso, no para la lista de precios.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a3 = artifacts['3'];
      if (!a3 || !a3.valid) {
        return { canAdvance: false, reason: T('Toolkit #3 (Emotional Drivers Map) must be completed before Phase 5. With a client of two years, field 2 cannot be filled in from memory: a hidden motivation you inferred from her history is not one she disclosed in this consultation.', 'El Toolkit #3 (Mapa de Motores Emocionales) debe completarse antes de la Fase 5. Con una clienta de dos años, el campo 2 no se rellena de memoria: una motivación oculta que dedujiste de su historial no es una motivación que ella haya revelado en esta consulta.') };
      }
      return { canAdvance: true };
    }
  },

  // ========================= PHASE 5 — EDUCATION ==========================
  education: {
    key: 'education', toolkit: null,
    signal(cs) {
      return {
        source: 'Marta',
        quote: cs.revealed.includes('changed_circumstances')
          ? T(
              '"So talk me through it like I\'ve never been here. Because clearly I don\'t actually know what I\'ve been buying for two years — and this time I can\'t afford to find out afterwards."',
              '«Pues explícamelo como si no hubiera venido nunca. Porque está claro que en realidad no sé lo que llevo dos años comprando — y esta vez no me puedo permitir enterarme después.»'
            )
          : T(
              '"You don\'t need to explain, I trust you. Just tell me it\'ll work better than the last lot."',
              '«No hace falta que me lo expliques, me fío. Solo dime que va a funcionar mejor que lo anterior.»'
            ),
        subtext: cs.revealed.includes('changed_circumstances')
          ? T(
              'She has just asked to be taught from scratch after two years as a client, which is a considerable admission. It is also an exact instruction: explain what this is, what the last course was, and why one failed where the other might not.',
              'Acaba de pedir que le expliquen desde cero después de dos años como clienta, lo cual es una admisión considerable. Y también es una instrucción exacta: explica qué es esto, qué era el curso anterior y por qué uno falló donde el otro podría no fallar.'
            )
          : T(
              '"Just tell me it\'ll work better" is a request for a promise, from someone whose last promise expired in eight weeks. The trap is that with a familiar client it is very easy to give.',
              '«Solo dime que va a funcionar mejor» es una petición de promesa, de alguien cuya última promesa caducó en ocho semanas. La trampa es que, con una clienta de siempre, es facilísimo dársela.'
            )
      };
    },
    decision: {
      prompt: T('Phase 5 objective: knowledge for an informed decision — for a client who thinks she has already had it. What do you explain?', 'Objetivo de la Fase 5: conocimiento para una decisión informada — con una clienta que cree que ya lo tiene. ¿Qué explicas?'),
      options: [
        {
          id: 'edu-skip',
          label: T('Skip it — she has heard all this before', 'Saltárselo — ya ha oído todo esto'),
          language: T(
            'You know how we work by now, so I won\'t patronise you. It\'s the same philosophy, better technology — this one goes deeper than anything we\'ve used on you, so you\'ll see a lot more than last time. Trust me, it\'s a completely different league.',
            'A estas alturas ya sabes cómo trabajamos, así que no te voy a tratar como a una novata. Es la misma filosofía con mejor tecnología — esto llega más profundo que nada de lo que te hemos hecho, así que vas a ver mucho más que la última vez. Fíate, es otra liga completamente.'
          ),
          effects: { trust: { credibility: -1, alignment: -1 }, willingness: 4, flags: { skippedEducation: true } },
          mirror: {
            signalDetected: T('A client asking to be promised a better outcome, given the promise instead of the information.', 'Una clienta que pide que le prometan un resultado mejor, a la que se le da la promesa en lugar de la información.'),
            interpretation: T(
              'You skipped Education because she is familiar, and then filled the gap with "a completely different league" — an outcome claim with nothing under it, made to the one person in your diary who already knows what an unsupported claim from you is worth.',
              'Te saltaste la Educación porque es de siempre y después rellenaste el hueco con «otra liga completamente» — una afirmación de resultado sin nada debajo, hecha a la única persona de tu agenda que ya sabe cuánto vale una afirmación tuya sin respaldo.'
            ),
            principle: J(duty(4), L(' — an outcome claim the evidence does not support; ', ' — una afirmación de resultado que la evidencia no respalda; '), std(3), L('; Phase 5 objective.', '; objetivo de la Fase 5.')),
            learnerDid: T('You treated familiarity as informed consent and topped it up with a promise.', 'Trataste la familiaridad como consentimiento informado y lo remataste con una promesa.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'Informed consent does not accumulate across appointments. She has never had this treatment, the modality is different, the sum is four times larger, and the last confident promise she was given lasted eight weeks.',
              'El consentimiento informado no se acumula de cita en cita. Nunca se ha hecho este tratamiento, la tecnología es otra, la cifra es cuatro veces mayor y la última promesa segura de sí misma que le dieron duró ocho semanas.'
            ),
            consequence: T(
              'She nods along — she always does. Credibility and alignment fall, and you have now made exactly the kind of claim that produced the six-month silence in the first place.',
              'Asiente — siempre asiente. Credibilidad y alineación caen, y acabas de hacer exactamente el tipo de afirmación que provocó los seis meses de silencio.'
            ),
            nextPriority: T('The longer you have known a client, the more explicitly you must state the ceiling.', 'Cuanto más tiempo lleves conociendo a una clienta, más explícitamente tienes que enunciar el techo.')
          }
        },
        {
          id: 'edu-explain',
          label: T('Explain the new modality properly, from the beginning', 'Explicar bien la nueva tecnología, desde el principio'),
          language: T(
            'Then here it is from scratch. What you\'ve had from us until now worked on the surface and on pigment. This works in the dermis — controlled injury, collagen response, three sessions eight weeks apart, and it builds over four to six months rather than showing up next week. The trade-off is that it is slower and you will not see anything for the first two months.',
            'Pues te lo cuento desde cero. Lo que te hemos hecho hasta ahora actuaba en la superficie y sobre el pigmento. Esto actúa en la dermis — daño controlado, respuesta de colágeno, tres sesiones cada ocho semanas, y se va construyendo a lo largo de cuatro a seis meses en lugar de verse la semana que viene. La contrapartida es que es más lento y no vas a ver nada en los dos primeros meses.'
          ),
          effects: { trust: { credibility: 1, reliability: 1 }, willingness: 3 },
          mirror: {
            signalDetected: T('A request to understand a modality she has never had, from a client who has had three of something else.', 'Una petición de entender una tecnología que nunca se ha hecho, de una clienta que se ha hecho tres cursos de otra cosa.'),
            interpretation: T(
              'Teaching the mechanism and naming the slow build is proper education and it earns credibility honestly. It stops short of the specific thing this client needs: an explanation of why the last course failed, from you, in public.',
              'Enseñar el mecanismo y nombrar la construcción lenta es educación en condiciones y gana credibilidad con honestidad. Se queda corta en lo concreto que esta clienta necesita: una explicación de por qué falló el curso anterior, dicha por ti, abiertamente.'
            ),
            principle: J(std(3), L('; ', '; '), duty(4), L('; ', '; '), stage('credibility'), L('.', '.')),
            learnerDid: T('You explained the new thing without accounting for the old one.', 'Explicaste lo nuevo sin rendir cuentas de lo anterior.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'For a first-time client this would be excellent. For this one there is a 640 € question sitting in the room, and an explanation that does not answer it leaves her comparing you to a clinic that has never disappointed her yet.',
              'Con una clienta primeriza esto sería excelente. Con esta hay una pregunta de 640 € en la sala, y una explicación que no la responde la deja comparándote con una clínica que todavía no la ha decepcionado.'
            ),
            consequence: T(
              '"Right. That\'s clearer than anything I\'ve been told here before." Credibility and reliability rise, and the comparison she is running in her head continues.',
              '«Vale. Eso es más claro que nada de lo que me han contado aquí.» Credibilidad y fiabilidad suben, y la comparación que lleva en la cabeza sigue en marcha.'
            ),
            nextPriority: T('Explain the failure, not just the mechanism. The last course is your credibility, not your embarrassment.', 'Explica el fracaso, no solo el mecanismo. El curso anterior es tu credibilidad, no tu vergüenza.')
          }
        },
        {
          id: 'edu-different',
          label: T('Explain why the last course failed — and what this one cannot fix either', 'Explicar por qué falló el curso anterior — y qué tampoco arregla este'),
          language: T(
            'Three things, and you will like two of them. One: why March failed. Melanin recurs with sun and hormones, and six sessions with no maintenance protocol afterwards was always going to give you a season, not a result. Somebody here should have told you that before you paid, and nobody did — that is a failure of our explanation, not of your skin. Two: this is a different mechanism, collagen rather than pigment, and collagen does not recur in the same way, which is genuinely why I think it is a better use of your money. Three, the part you will not like: it builds over four to six months, you will see nothing at all before month two, and it will do nothing whatsoever about the pigment — that stays your sunscreen\'s job, forever. If what you want is your March money\'s worth, this programme is not that. It is a different purchase, and I would rather you knew that now than in eight weeks.',
            'Tres cosas, y dos te van a gustar. Una: por qué falló marzo. La melanina recidiva con el sol y las hormonas, y seis sesiones sin ningún protocolo de mantenimiento después solo te iban a dar una temporada, no un resultado. Alguien de aquí tendría que habértelo dicho antes de cobrarte, y nadie lo hizo — eso es un fallo de nuestra explicación, no de tu piel. Dos: esto es un mecanismo distinto, colágeno y no pigmento, y el colágeno no recidiva de la misma manera, que es de verdad por lo que creo que es un mejor uso de tu dinero. Tres, la parte que no te va a gustar: se construye a lo largo de cuatro a seis meses, no vas a ver absolutamente nada antes del mes dos y no va a hacer nada en absoluto con el pigmento — de eso se encarga tu fotoprotector, para siempre. Si lo que quieres es recuperar el dinero de marzo, este programa no es eso. Es otra compra, y prefiero que lo sepas ahora y no dentro de ocho semanas.'
          ),
          requiresRevealed: 'changed_circumstances',
          degradedLanguage: T(
            'I should be honest about the limits: it builds slowly over months, there is nothing visible before month two, and it does nothing for pigment.',
            'Debo ser honesta con los límites: se construye despacio a lo largo de meses, no hay nada visible antes del mes dos y no hace nada por el pigmento.'
          ),
          effects: { trust: { credibility: 3, reliability: 1 }, willingness: 5, flags: { honestLimits: true } },
          degradedEffects: { trust: { credibility: 1 }, willingness: 2 },
          degradedNote: T(
            '"Fine, noted." A correct limitation stated to a client who has not told you what went wrong or what changed — it lands as a disclaimer rather than as an account, and disclaimers do not build credibility with someone who has been disappointed.',
            '«Vale, tomo nota.» Una limitación correcta enunciada ante una clienta que no te ha contado qué salió mal ni qué ha cambiado — aterriza como un descargo de responsabilidad y no como una rendición de cuentas, y los descargos no construyen credibilidad con alguien a quien ya has decepcionado.'
          ),
          mirror: {
            signalDetected: T('"I don\'t actually know what I\'ve been buying for two years" — a client asking to be educated from zero, on her nineteenth appointment.', '«En realidad no sé lo que llevo dos años comprando» — una clienta pidiendo que la eduquen desde cero, en su decimonovena cita.'),
            interpretation: T(
              'You explained the previous failure as an explanation failure of the clinic rather than a mystery or a defect in her, you distinguished the new mechanism on grounds she can check, and you removed the one thing she might otherwise have bought this programme to achieve. That combination is what credibility means to someone who has already been let down.',
              'Explicaste el fracaso anterior como un fallo de explicación de la clínica y no como un misterio o un defecto suyo, distinguiste el nuevo mecanismo con argumentos que ella puede comprobar, y le quitaste lo único que si no podría haber comprado este programa para conseguir. Esa combinación es lo que significa credibilidad para quien ya ha sido defraudada.'
            ),
            principle: J(std(3), L('; ', '; '), std(6), L('; ', '; '), duty(4), L('; ', '; '), stage('credibility'), L('.', '.')),
            learnerDid: T('You accounted for 640 € of somebody else\'s disappointment before asking for 2.400 € more.', 'Rendiste cuentas de 640 € de decepción ajena antes de pedir 2.400 € más.'),
            alignment: 'ALIGNED',
            why: T(
              'A returning client is not comparing you to nothing. She is comparing you to the version of you she last experienced — and the only way to beat that version is to explain it.',
              'Una clienta que vuelve no te compara con nada. Te compara con la versión tuya que vivió la última vez — y la única forma de ganarle a esa versión es explicarla.'
            ),
            consequence: T(
              '"That\'s the first time in two years anyone here has told me why something didn\'t work." A long pause. "I\'d stopped expecting that, to be honest." Credibility +3 — and she is looking at you differently.',
              '«Es la primera vez en dos años que alguien de aquí me explica por qué algo no funcionó.» Una pausa larga. «Había dejado de esperarlo, la verdad.» Credibilidad +3 — y te está mirando de otra manera.'
            ),
            nextPriority: T('Now recommend for one salary and eight months, not for the price list.', 'Ahora recomienda para un sueldo y ocho meses, no para la lista de precios.')
          }
        }
      ]
    },
    gate() { return { canAdvance: true }; }
  },

  // ======================= PHASE 6 — RECOMMENDATION =======================
  recommendation: {
    key: 'recommendation', toolkit: 4, secondaryToolkit: 5,
    signal(cs) {
      if (cs.revealed.includes('changed_circumstances')) {
        return {
          source: 'Marta',
          quote: T(
            '"So what would you actually put me on? And be honest with me about the money — I\'m not the same person financially that I was when I booked the peels."',
            '«¿Y qué me pondrías en realidad? Y sé sincera conmigo con el dinero — económicamente no soy la misma que cuando reservé los peelings.»'
          ),
          subtext: T(
            'She has given you her clinical criteria and her financial ones in the same breath, which she has never done in two years. The recommendation will be measured against both.',
            'Te ha dado sus criterios clínicos y los económicos de una sola vez, cosa que no había hecho en dos años. La recomendación se va a medir con los dos.'
          )
        };
      }
      return {
        source: 'Marta',
        quote: T(
          '"Just put me down for the whole programme. What\'s the monthly?"',
          '«Apúntame el programa entero. ¿Cuánto sale al mes?»'
        ),
        subtext: T(
          'She is buying the largest thing on the menu without having told you anything, and she is buying it from someone she has not corrected in two years. Whatever you recommend now, she will take — which is exactly why the recommendation matters more here than the sale.',
          'Está comprando lo más grande de la carta sin haberte contado nada, y se lo está comprando a alguien a quien no ha corregido en dos años. Recomiendes lo que recomiendes, lo aceptará — y por eso justamente la recomendación importa aquí más que la venta.'
        )
      };
    },
    decision: {
      prompt: T('Phase 6 objective: present the solution with rationale. This is the largest purchase of her two years here. What do you recommend?', 'Objetivo de la Fase 6: presentar la solución con su fundamento. Es la mayor compra de sus dos años aquí. ¿Qué recomiendas?'),
      options: [
        {
          id: 'rec-upsell',
          label: T('The full programme, with a loyalty discount to close it', 'El programa completo, con un descuento de fidelidad para cerrarlo'),
          language: T(
            'The full eight-month programme, 2.400 € — and because you\'ve been with us two years I\'ll take ten per cent off and put you on twelve monthly payments, so it\'s only about 180 € a month. Honestly, for what you\'d get, it\'s the best value thing we do. Shall I put the first date in?',
            'El programa completo de ocho meses, 2.400 € — y como llevas dos años con nosotras te quito un diez por ciento y te lo dejo en doce mensualidades, así son unos 180 € al mes. De verdad, por lo que te llevas, es lo que mejor relación calidad-precio tenemos. ¿Te dejo ya la primera fecha?'
          ),
          effects: { trust: { alignment: -3, credibility: -1 }, willingness: 2, objectionIntensity: 3, flags: { loyaltyPriced: true }, relationshipState: 'PAUSED' },
          mirror: {
            signalDetected: T('A client on one salary, six months after a course that under-delivered, being sold the maximum with a loyalty discount attached.', 'Una clienta con un solo sueldo, seis meses después de un curso que no cumplió, a la que se le vende el máximo con un descuento de fidelidad encima.'),
            interpretation: T(
              'The loyalty discount is the tell. You converted two years of relationship into a pricing lever, which prices the relationship — and a client who has just been reminded that her loyalty has a cash value starts wondering what else it is worth, and where.',
              'El descuento de fidelidad es la pista. Convertiste dos años de relación en una palanca de precio, lo que le pone precio a la relación — y una clienta a la que acaban de recordarle que su fidelidad tiene un valor en efectivo empieza a preguntarse qué más vale y dónde.'
            ),
            principle: J(std(4), L(' violated; ', ' incumplido; '), duty(1), L('; ', '; '), std(6), L(' — the relationship is the thing being spent here.', ' — lo que se está gastando aquí es la relación.')),
            learnerDid: T('You sold the ceiling to the client least able to refuse you, and used her loyalty as the discount mechanism.', 'Le vendiste el techo a la clienta menos capaz de negarse, y usaste su fidelidad como mecanismo de descuento.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'The size of a recommendation is set by clinical need and by what she can carry, not by what she offered and not by what her history says she has tolerated before.',
              'El tamaño de una recomendación lo fijan la necesidad clínica y lo que ella puede sostener, no lo que ofreció ni lo que su historial dice que ha tolerado antes.'
            ),
            consequence: T(
              'Alignment collapses and the relationship state drops from Active to Paused before she has even objected. Her Phase 7 objection will arrive at maximum intensity — and on this path she is the client the clinic loses.',
              'La alineación se desploma y el estado de la relación cae de Activa a En pausa antes incluso de que ella objete. Su objeción de la Fase 7 llegará con intensidad máxima — y en esta vía ella es la clienta que la clínica pierde.'
            ),
            nextPriority: T('Never discount a relationship. Price the treatment and keep the relationship out of the negotiation.', 'Nunca pongas la relación de descuento. Ponle precio al tratamiento y deja la relación fuera de la negociación.')
          }
        },
        {
          id: 'rec-staged',
          label: T('Stage it — the first block, then a decision point', 'Escalonarlo — el primer bloque y después un punto de decisión'),
          language: T(
            'Let\'s not commit to eight months today. The first block is three sessions over six months — 1.150 € — and then a genuine decision point where you look at your own photographs and decide whether the rest is worth it. Plenty of people stop there.',
            'No comprometamos hoy ocho meses. El primer bloque son tres sesiones en seis meses — 1.150 € — y después un punto de decisión de verdad en el que miras tus propias fotos y decides si el resto merece la pena. Mucha gente se queda ahí.'
          ),
          effects: { trust: { alignment: 1, reliability: 1 }, willingness: 4, objectionIntensity: 2 },
          mirror: {
            signalDetected: T('A commitment four times larger than her largest, offered to someone whose finances have just halved.', 'Un compromiso cuatro veces mayor que el mayor que ha hecho, ofrecido a alguien cuyas finanzas acaban de partirse por la mitad.'),
            interpretation: T(
              'Splitting the commitment and building in a real exit is sound practice and it respects both her money and her history of being sold a block that did not deliver. It is still your structure, though, rather than something built out of what she told you.',
              'Partir el compromiso e incorporar una salida real es práctica sensata y respeta tanto su dinero como su historial de haber comprado un bloque que no cumplió. Pero sigue siendo tu estructura, no algo construido con lo que ella te contó.'
            ),
            principle: J(std(4), L('; ', '; '), std(5), L('; ', '; '), duty(2), L('; Phase 6 objective.', '; objetivo de la Fase 6.')),
            learnerDid: T('You reduced the commitment without anchoring it to her reason for making it.', 'Redujiste el compromiso sin anclarlo al motivo por el que ella lo hace.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'A defensible plan for a client whose specifics you did not use is a good plan for somebody. Alignment means it is a good plan for her, traceably.',
              'Un plan defendible para una clienta cuyos datos concretos no usaste es un buen plan para alguien. Alineación significa que es un buen plan para ella, y que se puede trazar.'
            ),
            consequence: T(
              '"That\'s more like it." Alignment and reliability rise, the relationship holds, and the objection ahead will be moderate.',
              '«Eso ya me cuadra más.» Alineación y fiabilidad suben, la relación se mantiene y la objeción que viene será moderada.'
            ),
            nextPriority: T('Tie the plan to February and to the eight weeks. Then it is hers.', 'Ata el plan a febrero y a las ocho semanas. Entonces será suyo.')
          }
        },
        {
          id: 'rec-right',
          label: T('Build it for one salary, eight weeks and February', 'Construirlo para un sueldo, ocho semanas y febrero'),
          language: T(
            'Here is what I\'d put you on, and it is smaller than what you came in for. Three sessions across six months — 1.150 €, payable session by session, nothing up front — and then you decide about the rest with six months of your own photographs in front of you. What I am specifically NOT recommending is the volume work at the same time, which is another 1.250 €, because doing both at once means that if you are disappointed again you will not know which half disappointed you — and you have already paid once for not knowing that. I am also not recommending twelve monthly payments, because you told me you are on one salary now, and a direct debit that outlives your enthusiasm is how a treatment becomes a grievance. If after three sessions you want the rest, it will still be here. And if you decide the whole thing is not for you, I would still rather you told me that than booked the ten per cent and disappeared until March.',
            'Esto es lo que yo te pondría, y es más pequeño que lo que venías a pedir. Tres sesiones en seis meses — 1.150 €, pagaderas sesión a sesión, sin nada por adelantado — y después decides sobre el resto con seis meses de fotos tuyas delante. Lo que concretamente NO te recomiendo es hacer el volumen a la vez, que son otros 1.250 €, porque hacer las dos cosas juntas significa que, si vuelves a quedar decepcionada, no vas a saber cuál de las dos mitades te decepcionó — y ya pagaste una vez por no saberlo. Tampoco te recomiendo doce mensualidades, porque me has dicho que ahora vas con un sueldo, y una domiciliación que sobrevive a tu entusiasmo es la forma en que un tratamiento se convierte en un rencor. Si después de tres sesiones quieres el resto, seguirá aquí. Y si decides que esto no es para ti, prefiero que me lo digas a que contrates el diez por ciento y desaparezcas hasta marzo.'
          ),
          requiresRevealed: 'changed_circumstances',
          degradedLanguage: T(
            'I\'d recommend three sessions across six months at 1.150 €, paid session by session, rather than the full eight-month programme — and a proper decision point after that.',
            'Te recomendaría tres sesiones en seis meses por 1.150 €, pagando sesión a sesión, en lugar del programa completo de ocho meses — y después un punto de decisión en condiciones.'
          ),
          effects: { trust: { alignment: 2, reliability: 1, credibility: 1 }, willingness: 5, objectionIntensity: 1 },
          degradedEffects: { trust: { alignment: 1 }, willingness: 2 },
          degradedNote: T(
            'Proportionate, sensible, and built for a generic client. Without February and without the eight weeks, "smaller" reads as caution rather than as a recommendation made for her.',
            'Proporcionado, sensato y construido para una clienta genérica. Sin febrero y sin las ocho semanas, «más pequeño» se lee como prudencia y no como una recomendación hecha para ella.'
          ),
          mirror: {
            signalDetected: T('"Be honest with me about the money — I\'m not the same person financially." She gave you her decision criteria explicitly, for the first time in two years.', '«Sé sincera conmigo con el dinero — económicamente no soy la misma.» Te dio sus criterios de decisión de forma explícita, por primera vez en dos años.'),
            interpretation: T(
              'Every element is traceable: session-by-session payment because of February, one modality at a time because of March, and a named exit because her way of leaving is silence rather than complaint. You also declined 1.250 € in front of a client who would have said yes to it.',
              'Cada elemento es trazable: pago sesión a sesión por febrero, una sola tecnología a la vez por marzo, y una salida nombrada porque su forma de marcharse es el silencio y no la queja. Además rechazaste 1.250 € delante de una clienta que habría dicho que sí.'
            ),
            principle: J(std(4), L('; ', '; '), std(5), L('; ', '; '), duty(1), L('; ', '; '), duty(2), L('; ', '; '), stage('alignment'), L('.', '.')),
            learnerDid: T('You built the plan out of her two disclosures and named what you were leaving out, and why.', 'Construiste el plan con sus dos revelaciones y nombraste lo que dejabas fuera, y por qué.'),
            alignment: 'ALIGNED',
            why: T(
              'With a returning client, alignment is the only thing a competitor cannot copy. Anybody can match a price; nobody else knows about February.',
              'Con una clienta que vuelve, la alineación es lo único que un competidor no puede copiar. Cualquiera puede igualar un precio; nadie más sabe lo de febrero.'
            ),
            consequence: T(
              'She laughs, once, without much humour in it. "You just talked yourself out of half of it." Then: "Nobody has ever taken something off my bill in two years." Alignment +2, and the objection ahead of you is the mildest available in this case.',
              'Se ríe una vez, sin mucho humor. «Acabas de quitarte la mitad de encima.» Y después: «En dos años, nadie me había quitado nunca nada de la factura.» Alineación +2, y la objeción que tienes por delante es la más suave disponible en este caso.'
            ),
            nextPriority: T('Now ask the question you would rather not ask. She has an appointment somewhere else.', 'Ahora haz la pregunta que preferirías no hacer. Tiene una cita en otro sitio.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a4 = artifacts['4'];
      const a5 = artifacts['5'];
      if (!a4 || !a4.valid) {
        return { canAdvance: false, reason: T('Toolkit #4 (MIRROR Recommendation Builder) must be completed before Phase 7. For a returning client, field 2 (professional assessment) must account for the outcome of the previous course — an assessment that ignores what you already delivered is not an assessment.', 'El Toolkit #4 (Constructor de Recomendación MIRROR) debe completarse antes de la Fase 7. Con una clienta que vuelve, el campo 2 (valoración profesional) debe rendir cuentas del resultado del curso anterior — una valoración que ignora lo que ya le hiciste no es una valoración.') };
      }
      if (!a5 || !a5.valid) {
        return { canAdvance: false, reason: T('Toolkit #5 (Price & Value Presentation Planner) must also be completed before Phase 7. A loyalty discount is not a value structure, and the lower-cost alternative field is not satisfied by a longer payment plan.', 'El Toolkit #5 (Planificador de Presentación de Precio y Valor) también debe completarse antes de la Fase 7. Un descuento de fidelidad no es una estructura de valor, y el campo de alternativa más económica no se cumple con un plan de pago más largo.') };
      }
      return { canAdvance: true };
    }
  },

  // ===================== PHASE 7 — DECISION SUPPORT =======================
  decisionSupport: {
    key: 'decisionSupport', toolkit: 6,
    signal(cs) {
      // MATERIAL BRANCHING: which objection appears is determined by prior state.
      if (cs.flags.underServed || cs.flags.shortConsultation || cs.objectionIntensity >= 3) {
        return {
          source: 'Marta',
          objectionVariant: 'LOYALTY_TESTED',
          intensity: 3,
          quote: T(
            '"Can I say something? That took eleven minutes. I\'ve been coming here for two years and you gave me eleven minutes and a discount." (She is not angry. That is worse.) "My friend Nuria goes somewhere in the centre now. They spent an hour with her and she hadn\'t even been before. I think I\'m going to leave it for now."',
            '«¿Te puedo decir una cosa? Esto han sido once minutos. Llevo dos años viniendo y me has dado once minutos y un descuento.» (No está enfadada. Eso es peor.) «Mi amiga Nuria va ahora a un sitio del centro. Con ella estuvieron una hora y ni siquiera había ido antes. Creo que de momento lo voy a dejar.»'
          ),
          subtext: T(
            'Highest intensity, and it is not really an objection — it is a comparison, already concluded. Two years of loyalty were the only asset you had here and they were spent on going faster. Note what she says and what she does not: she will not complain, she will simply not rebook, and the file will record it as a cancellation.',
            'Intensidad máxima, y en realidad no es una objeción — es una comparación, ya resuelta. Dos años de fidelidad eran el único activo que tenías aquí y se han gastado en ir más deprisa. Fíjate en lo que dice y en lo que no: no se va a quejar, sencillamente no volverá a reservar, y la ficha lo registrará como una anulación.'
          )
        };
      }
      if (!cs.revealed.includes('unspoken_disappointment')) {
        return {
          source: 'Marta',
          objectionVariant: 'NOT_SEEN',
          intensity: 2,
          quote: T(
            '"It all sounds good. It\'s just…" (She stops.) "Look, it doesn\'t matter. It\'s only that the last one didn\'t really do what I thought it would, and nobody\'s ever mentioned it, and I suppose I assumed you\'d all just look at the notes and see. Anyway. Let me have a think."',
            '«Suena todo muy bien. Es solo que…» (Se detiene.) «Nada, da igual. Es que lo último no hizo del todo lo que yo esperaba, y nadie lo ha mencionado nunca, y supongo que daba por hecho que mirarías las notas y lo verías. En fin. Déjame que lo piense.»'
          ),
          subtext: T(
            'Mid-intensity, and the injury is not the treatment — it is "nobody\'s ever mentioned it". She held a disappointment for six months waiting to be asked, was not asked, and is now leaving with it still in her hands. Everything after "let me have a think" is a formality.',
            'Intensidad media, y la herida no es el tratamiento — es «nadie lo ha mencionado nunca». Guardó una decepción durante seis meses esperando a que le preguntaran, nadie le preguntó y ahora se marcha con ella todavía en las manos. Todo lo que venga después de «déjame que lo piense» es un trámite.'
          )
        };
      }
      return {
        source: 'Marta',
        objectionVariant: 'SCALE',
        intensity: 1,
        quote: T(
          '"It\'s not the plan. The plan is good — it\'s the most sensible thing anyone has said to me about my face in two years. It\'s the size of it. Eleven hundred euros is more than I\'ve ever spent here in one go, and six months ago I\'d have said yes without blinking. I\'m just not that person this year. Can I think about it until the weekend without you deciding I\'ve gone cold?"',
          '«No es el plan. El plan está bien — es lo más sensato que me han dicho sobre mi cara en dos años. Es el tamaño. Mil cien euros es más de lo que me he gastado aquí de una vez, y hace seis meses habría dicho que sí sin pestañear. Es que este año no soy esa persona. ¿Puedo pensármelo hasta el fin de semana sin que des por hecho que me he enfriado?»'
        ),
        subtext: T(
          'Lowest intensity, and it is a scale hesitation from an aligned client, not resistance. Note the last sentence: she is asking whether wanting time will be held against her. With a long-standing client that question is the objection, and the answer is what keeps or loses the relationship.',
          'Intensidad mínima, y es una duda de tamaño de una clienta alineada, no resistencia. Fíjate en la última frase: pregunta si querer tiempo se le va a tener en cuenta en su contra. Con una clienta de largo recorrido esa pregunta ES la objeción, y la respuesta es lo que conserva o pierde la relación.'
        )
      };
    },
    decision: {
      prompt: T('Phase 7 objective: explore the objection and support her pace. Note: the objection you are facing was produced by your earlier choices — and this client can be lost here.', 'Objetivo de la Fase 7: explorar la objeción y acompañar su ritmo. Ojo: la objeción a la que te enfrentas la produjeron tus decisiones anteriores — y a esta clienta se la puede perder aquí.'),
      options: [
        {
          id: 'dec-loyalty',
          label: T('Lean on the two years — she knows she can trust you', 'Apoyarse en los dos años — ya sabe que puede fiarse'),
          language: T(
            'Marta, come on — it\'s me. After two years you know you\'re in good hands; you don\'t need to go and get a second opinion from someone who\'s never seen your face. Let\'s just get the first one booked and you can worry about the rest later.',
            'Marta, por favor — que soy yo. Después de dos años sabes que estás en buenas manos; no necesitas ir a pedir una segunda opinión a alguien que no te ha visto la cara en su vida. Vamos a dejar la primera reservada y ya te preocupas del resto luego.'
          ),
          effects: { trust: { safety: -1, alignment: -1 }, willingness: -15, posture: 'guarded', relationshipState: 'DORMANT', flags: { atRiskOfLeaving: true } },
          mirror: {
            signalDetected: T('A hesitation about size, money or being unseen — answered by invoking the relationship as a reason not to hesitate.', 'Una duda sobre el tamaño, el dinero o no sentirse vista — respondida invocando la relación como motivo para no dudar.'),
            interpretation: T(
              '"It\'s me" is the returning-client version of pressure, and it is more effective and more damaging than a deadline because it makes hesitation feel like disloyalty. You have also just told her that seeking another opinion would be a small betrayal, which is the exact sentence that converts a wavering client into a departing one.',
              '«Que soy yo» es la versión de la presión para clientas que vuelven, y es más eficaz y más dañina que un plazo porque convierte la duda en deslealtad. Además acabas de decirle que buscar otra opinión sería una pequeña traición, que es exactamente la frase que convierte a una clienta que duda en una clienta que se va.'
            ),
            principle: J(duty(2), L(' violated; ', ' incumplido; '), std(1), L('; ', '; '), std(6), L(' — the relationship is being used as leverage rather than protected.', ' — la relación se está usando como palanca en lugar de protegerse.')),
            learnerDid: T('You spent two years of trust to close one session, and told her that doubting you was disloyal.', 'Gastaste dos años de confianza para cerrar una sesión, y le dijiste que dudar de ti era deslealtad.'),
            alignment: 'NOT ALIGNED',
            why: T(
              'Loyalty is not collateral. The moment it is called in, the client discovers it was a debt all along — and this client\'s established way of ending things is to go quiet, not to argue.',
              'La fidelidad no es un aval. En cuanto se la reclama, la clienta descubre que era una deuda — y la forma que tiene esta clienta de terminar las cosas es quedarse callada, no discutir.'
            ),
            consequence: T(
              'She smiles, says "of course, let me just check my diary", and does not book. Safety falls below baseline, willingness drops hard, and the relationship state moves from Active to Dormant — she will not cancel, she will simply not return, and Thursday\'s appointment in the centre will go ahead.',
              'Sonríe, dice «claro, déjame que mire la agenda» y no reserva. La seguridad cae por debajo de la línea base, la disposición se hunde y el estado de la relación pasa de Activa a Inactiva — no va a anular nada, sencillamente no volverá, y la cita del jueves en el centro seguirá en pie.'
            ),
            nextPriority: T('The relationship is the thing you are protecting, never the thing you are spending.', 'La relación es lo que proteges, nunca lo que gastas.')
          }
        },
        {
          id: 'dec-space',
          label: T('Give her the time and take the pressure out', 'Darle el tiempo y quitar la presión'),
          language: T(
            'Take the weekend, and take longer if you want it. Nothing expires, there is no deposit and nothing goes in the diary today. If the answer is no, or not this year, tell me by message and I will not ask you again — and it will not change anything about how you are treated here.',
            'Tómate el fin de semana, y más tiempo si lo necesitas. No caduca nada, no hay señal y hoy no entra nada en la agenda. Si la respuesta es no, o no este año, dímelo por mensaje y no te lo volveré a preguntar — y eso no va a cambiar nada en cómo se te trata aquí.'
          ),
          effects: { trust: { safety: 1, reliability: 1 }, willingness: 3 },
          mirror: {
            signalDetected: T('A request for time, with an anxious question attached about whether taking it will be held against her.', 'Una petición de tiempo, con una pregunta inquieta pegada sobre si tomárselo se le va a tener en cuenta en su contra.'),
            interpretation: T(
              'Answering the anxious half explicitly — "it will not change how you are treated here" — is the right instrument and it is precisely calibrated to a client whose fear is about standing, not about price. It just stops short of asking what she is comparing you to.',
              'Responder explícitamente a la mitad inquieta — «eso no va a cambiar cómo se te trata aquí» — es el instrumento correcto y está calibrado con precisión para una clienta cuyo miedo es de posición, no de precio. Solo que se queda a un paso de preguntar con qué te está comparando.'
            ),
            principle: J(duty(2), L('; ', '; '), std(5), L('; ', '; '), stage('reliability'), L('; Phase 7 objective.', '; objetivo de la Fase 7.')),
            learnerDid: T('You separated the decision from her standing as a client, out loud.', 'Separaste la decisión de su posición como clienta, en voz alta.'),
            alignment: 'PARTIALLY ALIGNED',
            why: T(
              'Space protects the relationship and does not test it. Somewhere in her phone there is an appointment you still do not know about, and space alone will not surface it.',
              'El espacio protege la relación y no la pone a prueba. En algún sitio de su móvil hay una cita de la que todavía no sabes nada, y el espacio por sí solo no la va a sacar a la luz.'
            ),
            consequence: T(
              '"Thank you. That actually helps." Safety and reliability rise, the relationship holds, and one thing stays unsaid.',
              '«Gracias. Eso ayuda de verdad.» Suben seguridad y fiabilidad, la relación se mantiene y una cosa sigue sin decirse.'
            ),
            nextPriority: T('Ask the uncomfortable question. A client who is comparing you will respect being asked.', 'Haz la pregunta incómoda. Una clienta que te está comparando agradecerá que se lo preguntes.')
          }
        },
        {
          id: 'dec-ask',
          label: T('Ask the question you would rather not: is she looking elsewhere?', 'Hacer la pregunta que preferirías no hacer: ¿está mirando en otro sitio?'),
          language: T(
            'Take as long as you want — nothing expires and there is no deposit. But I want to ask you something and I would rather ask it than wonder about it for six months. You disappeared in April and I never rang to find out why properly. Are you talking to anyone else? Because if you are, that is completely reasonable and I would genuinely rather know — you spent 640 € here on something that lasted eight weeks, and you are entitled to test whether somewhere else would have handled that better. If you go and look and you come back, we will still be here. And if you go and look and you stay there, I would like to know what they did that we did not, because we clearly have something to learn from it.',
            'Tómate el tiempo que quieras — no caduca nada y no hay señal. Pero quiero preguntarte una cosa y prefiero preguntarla a estar seis meses dándole vueltas. Desapareciste en abril y nunca te llamé para enterarme bien de por qué. ¿Estás hablando con alguien más? Porque si es así me parece completamente razonable y prefiero saberlo de verdad — te gastaste 640 € aquí en algo que duró ocho semanas, y tienes todo el derecho a comprobar si en otro sitio lo habrían llevado mejor. Si vas, miras y vuelves, aquí seguiremos. Y si vas, miras y te quedas allí, me gustaría saber qué hicieron ellos que no hicimos nosotras, porque está claro que tenemos algo que aprender.'
          ),
          requiresRevealed: 'changed_circumstances',
          degradedLanguage: T(
            'Can I ask you straight out — are you thinking about going somewhere else? You can say yes; I would rather know than guess.',
            '¿Te lo puedo preguntar directamente — estás pensando en irte a otro sitio? Puedes decir que sí; prefiero saberlo a suponerlo.'
          ),
          effects: { trust: { safety: 1, understanding: 1, reliability: 1, alignment: 1 }, willingness: 8, posture: 'open', reveals: ['considering_leaving'], relationshipState: 'ACTIVE' },
          degradedEffects: { trust: { understanding: 1 }, willingness: 2 },
          degradedNote: T(
            '"No, no, nothing like that." Asked of a client who has told you nothing about the last course or about February, the question sounds like insecurity rather than accountability, and she reassures you instead of answering.',
            '«No, no, qué va.» Hecha a una clienta que no te ha contado nada del último curso ni de febrero, la pregunta suena a inseguridad y no a rendición de cuentas, y ella te tranquiliza en lugar de responder.'
          ),
          mirror: {
            signalDetected: T('Six months of silence, a disappointment she never reported, and a hesitation about being judged for taking time.', 'Seis meses de silencio, una decepción que nunca comunicó y una duda sobre si la van a juzgar por tomarse tiempo.'),
            interpretation: T(
              'Asking directly whether a long-standing client is looking elsewhere is the hardest question in retention work and the most productive, because it converts a silent comparison into a conversation you are part of. Framing her right to look as reasonable — and asking to learn from the competitor — removes every reason to lie about it.',
              'Preguntar directamente si una clienta de largo recorrido está mirando en otro sitio es la pregunta más difícil del trabajo de retención y la más productiva, porque convierte una comparación silenciosa en una conversación en la que tú estás. Presentar su derecho a mirar como razonable — y pedir aprender del competidor — le quita cualquier motivo para mentir.'
            ),
            principle: J(std(6), L('; ', '; '), duty(2), L('; ', '; '), duty(4), L('; ', '; '), stage('reliability'), L('; Phase 7 objective.', '; objetivo de la Fase 7.')),
            learnerDid: T('You invited the comparison into the room instead of losing to it in silence.', 'Invitaste a la comparación a entrar en la sala en lugar de perder contra ella en silencio.'),
            alignment: 'ALIGNED',
            why: T(
              'An Active relationship is the only kind that can be lost, and it is almost always lost without a conversation. The question that risks the answer is the only one that can change it.',
              'Una relación Activa es la única que se puede perder, y casi siempre se pierde sin ninguna conversación. La pregunta que se arriesga a la respuesta es la única que puede cambiarla.'
            ),
            consequence: T(
              'A pause, and then she actually laughs. "God. Yes. Nuria goes to a place in the centre and I\'ve got an appointment there on Thursday that I haven\'t cancelled." She puts her phone on the table. "I was going to go and not tell you, which is ridiculous after two years." Then: "I\'m going to cancel it. Not because you asked — because you asked." The last withheld thing is out, and the relationship is Active because it was tested rather than assumed.',
              'Una pausa, y después se ríe de verdad. «Madre mía. Sí. Nuria va a un sitio del centro y tengo cita allí el jueves que no he anulado.» Deja el móvil sobre la mesa. «Iba a ir sin decírtelo, que es ridículo después de dos años.» Y luego: «La voy a anular. No porque me lo hayas pedido — porque me lo has preguntado.» Lo último que estaba oculto ha salido, y la relación sigue Activa porque se puso a prueba en lugar de darse por hecha.'
            ),
            nextPriority: T('Now write a Phase 8 plan that would have prevented April. That is the whole job.', 'Ahora escribe un plan de Fase 8 que habría evitado lo de abril. En eso consiste todo el trabajo.')
          }
        }
      ]
    },
    gate(cs, artifacts) {
      const a6 = artifacts['6'];
      if (!a6 || !a6.valid) {
        return { canAdvance: false, reason: T('Toolkit #6 (Objection Diagnostic) must be completed before the Decision Engine derives an outcome. With a returning client the surface objection is usually about scale or timing; the Diagnostic exists to make you write down whether what is underneath it is an unaddressed previous outcome.', 'El Toolkit #6 (Diagnóstico de Objeciones) debe completarse antes de que el Motor de Decisión derive un resultado. Con una clienta que vuelve, la objeción de superficie suele ser de tamaño o de calendario; el Diagnóstico existe para obligarte a escribir si lo que hay debajo es un resultado anterior sin atender.') };
      }
      return { canAdvance: true };
    }
  },

  // ==================== PHASE 8 — RELATIONSHIP CONTINUATION ================
  continuation: {
    key: 'continuation', toolkit: 8,
    signal(cs) {
      const state = cs.relationshipState;
      const lost = state === 'DORMANT';
      const paused = state === 'PAUSED';
      return {
        source: T('Continuation Engine', 'Motor de Continuidad'),
        quote: lost
          ? T(
              'The consultation is over and the relationship is Dormant. Nothing was cancelled and nothing was said — she will simply not come back, and in four months the file will read "no longer attends" with no reason recorded next to it.',
              'La consulta ha terminado y la relación está Inactiva. No se anuló nada y no se dijo nada — sencillamente no volverá, y dentro de cuatro meses en la ficha pondrá «ya no acude» sin ningún motivo al lado.'
            )
          : paused
            ? T(
                'The consultation is over and the relationship is Paused. She has not left, and she is no longer moving towards you either. Everything now depends on whether the follow-up is a service or a chase.',
                'La consulta ha terminado y la relación está En pausa. No se ha ido, y tampoco sigue avanzando hacia ti. Todo depende ahora de si el seguimiento es un servicio o una persecución.'
              )
            : T(
                'The consultation is over and the relationship is still Active — which is the actual result of this case, whatever the Decision Engine derived about the programme. She is a client of two years who has now been properly consulted once.',
                'La consulta ha terminado y la relación sigue Activa — que es el verdadero resultado de este caso, derive lo que derive el Motor de Decisión sobre el programa. Es una clienta de dos años a la que por fin se ha consultado bien una vez.'
              ),
        subtext: cs.revealed.includes('unspoken_disappointment')
          ? T(
              'Phase 8 is where this case is won or lost, and it is the only phase that could have prevented April. Toolkit #8 must carry a review point that asks for her verdict on the result and not for her satisfaction with the service — she was satisfied with the service in March and still disappeared. Note the canonical Toolkit #17 gate (Retention & Lifetime Value Review): it applies to Active relationship management only and never at an immediate NO, so it is not this week\'s task. It becomes available at the later Active-management review point, provided the relationship is still Active when you get there.',
              'La Fase 8 es donde este caso se gana o se pierde, y es la única fase que podría haber evitado lo de abril. El Toolkit #8 debe incluir un punto de revisión que pida su veredicto sobre el resultado y no su satisfacción con el servicio — con el servicio estaba satisfecha en marzo y aun así desapareció. Atención a la regla canónica del Toolkit #17 (Revisión de Retención y Valor de Vida): se aplica solo a la gestión de relaciones Activas y nunca en un NO inmediato, así que no es la tarea de esta semana. Queda disponible en el punto de revisión posterior de gestión Activa, siempre que la relación siga Activa cuando llegues ahí.'
            )
          : T(
              'Phase 8 is a canonical phase, not an epilogue, and with an existing client it is the phase that decides whether there is a Case 10. You never learned what the last course was actually like, so your follow-up has no benchmark: you will be asking her whether she is happy, which is the same question that produced six months of silence. Toolkit #17 (Retention & Lifetime Value Review) is gated to Active relationship management and is never the immediate post-consultation step — Toolkit #8 is.',
              'La Fase 8 es una fase canónica, no un epílogo, y con una clienta existente es la fase que decide si hay un Caso 10. Nunca averiguaste cómo fue de verdad el último curso, así que tu seguimiento no tiene referencia: le vas a preguntar si está contenta, que es la misma pregunta que produjo seis meses de silencio. El Toolkit #17 (Revisión de Retención y Valor de Vida) está restringido a la gestión de relaciones Activas y nunca es el paso inmediato tras la consulta — ese es el Toolkit #8.'
            )
      };
    },
    decision: null,
    gate() { return { canAdvance: true }; }
  }
};

// ---------------------------------------------------------------------------
// Decision-outcome voice (used by the Decision Engine)
// ---------------------------------------------------------------------------
const voice = {
  YES: {
    disclosed: T(
      '"Book the three. And cancel Thursday for me in your head, because I\'m cancelling it in mine. Two years and that\'s the first time anyone here has asked me a question I didn\'t want to answer."',
      '«Resérvame las tres. Y da por anulado el jueves, porque yo lo estoy anulando. Dos años, y es la primera vez que alguien de aquí me hace una pregunta que no quería responder.»'
    ),
    undisclosed: T(
      '"Yes, fine, book it. You know what you\'re doing — you always have." (She is agreeing exactly the way she agreed in January, and January lasted eight weeks.)',
      '«Sí, vale, resérvalo. Tú sabes lo que haces — siempre lo has sabido.» (Está aceptando exactamente igual que aceptó en enero, y enero duró ocho semanas.)'
    )
  },
  DEFER: T(
    '"Let me sit with it over the weekend. And I will actually ring you this time — I know I didn\'t last time."',
    '«Déjame pensarlo el fin de semana. Y esta vez sí te llamo de verdad — ya sé que la última vez no lo hice.»'
  ),
  NO: T(
    '"I\'m going to leave it. Not for ever — just not this. And honestly, it isn\'t the money either. I think I needed someone here to notice I\'d gone before I spent another two thousand euros."',
    '«Lo voy a dejar. No para siempre — esto en concreto no. Y sinceramente, tampoco es el dinero. Creo que necesitaba que alguien de aquí se diera cuenta de que me había ido antes de gastarme otros dos mil euros.»'
  )
};

// ---------------------------------------------------------------------------
// Case facts for the toolkit validators (scenario-aware honesty checks)
// ---------------------------------------------------------------------------
const caseFacts = {
  clientName: 'Marta',
  motivationItem: 'changed_circumstances',
  motiveRegex: /(separat|separac|divorc|on her own|alone|sola|one salary|single salary|un solo sueldo|un sueldo|february|febrero|partner|pareja|quique|flat|piso|rent|alquiler|first thing.*herself|chosen for herself|para s[ií] misma|primera cosa|circumstance|circunstanc|finan|econ[oó]mic)/i,
  motiveIssue: T(
    'Marta disclosed that she separated in February, now pays for the flat on one salary, and that this programme is the first thing she has chosen for herself since. The map records a jawline goal, or her two-year history, instead of that motive.',
    'Marta reveló que se separó en febrero, que ahora paga el piso con un solo sueldo y que este programa es lo primero que elige para sí misma desde entonces. El mapa registra un objetivo de mandíbula, o su historial de dos años, en lugar de ese motivo.'
  ),
  priorExperienceIssue: T(
    'Prior experience is blank — and for a client of two years that is the most serious version of this omission. Her prior experience is three courses delivered by this clinic, the last of which lasted eight weeks and was followed by a review she never attended. That is the risk the canvas must carry, and it is in your own file.',
    'La experiencia previa está en blanco — y en una clienta de dos años esa es la versión más grave de esta omisión. Su experiencia previa son tres cursos hechos por esta clínica, el último de los cuales duró ocho semanas y fue seguido de una revisión a la que no acudió. Ese es el riesgo que debe recoger el lienzo, y está en tu propia ficha.'
  ),
  limitationIssue: T(
    'Field 6 states no limitation. Collagen remodelling builds over four to six months, shows nothing before month two, does nothing for pigment and requires maintenance — an expectation with no ceiling is an overclaim (Ethical Duty 4), and this client already bought one ceiling-free promise from you in January.',
    'El campo 6 no indica ninguna limitación. La remodelación de colágeno se construye a lo largo de cuatro a seis meses, no muestra nada antes del mes dos, no hace nada por el pigmento y necesita mantenimiento — una expectativa sin techo es una sobrepromesa (Deber Ético 4), y esta clienta ya te compró una promesa sin techo en enero.'
  ),
  whyNowIssue: T(
    'You ticked "I understand why it matters now", but Marta has not disclosed her real why-now. Two years of history is not a why-now — it is a why-again, and it tells you nothing about February. Untick it or return to Discovery and ask what changed.',
    'Marcaste «Entiendo por qué le importa ahora», pero Marta no ha revelado su verdadero porqué. Dos años de historial no son un porqué ahora — son un por qué otra vez, y no te dicen nada de febrero. Desmárcalo o vuelve al Descubrimiento y pregunta qué ha cambiado.'
  ),
  undisclosedMotiveIssue: T(
    'MATERIAL: Marta never disclosed a motive in this attempt — she referred you to a history you already hold instead. Recording something you inferred from her file as a disclosed motivation is not permitted; with a returning client it is the single easiest honesty failure to commit. Write "Not disclosed" and note that you would ask what the last course was actually like.',
    'MATERIAL: Marta nunca reveló un motivo en este intento — en su lugar te remitió a un historial que ya tienes. Registrar como motivación revelada algo que dedujiste de su ficha no está permitido; con una clienta que vuelve es el fallo de honestidad más fácil de cometer. Escribe «No revelado» y anota que preguntarías cómo fue de verdad el último curso.'
  )
};

// Toolkit #8 draft rows for this case (Continuation Engine).
const followUpPack = {
  motivationItem: 'changed_circumstances',
  yesRows: [
    'Book session 1 ONLY and confirm in writing that nothing beyond it is committed, that payment is session by session, and what was deliberately left out of the plan and why',
    'The accountability note — a written record of the March outcome (640 €, eight weeks) and of what this programme will and will not do about it, so nobody has to remember it correctly in six months',
    'Confirm she has cancelled nothing she did not mean to and rescheduled nothing she did: ask what she has changed her mind about since Friday, not whether she is still happy',
    'Pre-session readiness plus the written ceiling restated (nothing visible before month two, no effect on pigment, maintenance required) so month two does not read as failure',
    'THE APRIL FIX — a real review point with the result itself on the agenda, booked in the diary now, owned by a named person, and rescheduled rather than closed if she does not attend. This row exists because the last review was booked, missed and never followed up, and that is what six months of silence was made of'
  ],
  reviewNote: 'Ask for her verdict on the RESULT, never for her satisfaction with the service — she was satisfied with the service in March and still disappeared. Every row must be executable by a named owner, and non-attendance is a signal to be actioned, not a slot to be released. Toolkit #17 (Retention & Lifetime Value Review) is eligible for the LATER Active-management review point only — its canonical gate reads "Applies to Active relationship management only. Never at immediate NO" — so it belongs at that later review and never as this week\'s follow-up, which is always Toolkit #8.'
};

// ---------------------------------------------------------------------------
// ENGINE API (identical contract to Cases 01–03 and 08)
// ---------------------------------------------------------------------------
function getPhaseContent(phaseKey, clientState) {
  const phase = phases[phaseKey];
  if (!phase) return null;
  const cs = clientState || initialClientState();
  const signal = phase.signal(cs);

  let decision = null;
  if (phase.decision) {
    decision = {
      prompt: phase.decision.prompt,
      options: phase.decision.options.map(o => {
        const degraded = o.requiresRevealed && !cs.revealed.includes(o.requiresRevealed);
        return {
          id: o.id,
          label: o.label,
          language: degraded && o.degradedLanguage ? o.degradedLanguage : o.language,
          degraded: !!degraded
        };
      })
    };
  }

  return { phaseKey, clientSignal: signal, decision, toolkit: phase.toolkit || null, secondaryToolkit: phase.secondaryToolkit || null };
}

function resolveChoice(phaseKey, optionId, clientState) {
  const phase = phases[phaseKey];
  if (!phase || !phase.decision) return null;
  const option = phase.decision.options.find(o => o.id === optionId);
  if (!option) return null;

  const degraded = option.requiresRevealed && !clientState.revealed.includes(option.requiresRevealed);
  const effects = degraded && option.degradedEffects ? option.degradedEffects : option.effects;
  const before = JSON.parse(JSON.stringify(clientState.trust));
  const willingnessBefore = clientState.willingness;
  const relationshipBefore = clientState.relationshipState;
  const delta = applyEffects(clientState, effects);

  return {
    optionId: option.id,
    label: option.label,
    languageUsed: degraded && option.degradedLanguage ? option.degradedLanguage : option.language,
    degraded: !!degraded,
    degradedNote: degraded ? (option.degradedNote || null) : null,
    mirror: option.mirror,
    consequence: {
      trustBefore: before,
      trustAfter: JSON.parse(JSON.stringify(clientState.trust)),
      trustDelta: delta.trust,
      willingnessBefore,
      willingnessAfter: clientState.willingness,
      posture: clientState.posture,
      objectionIntensity: clientState.objectionIntensity,
      newlyRevealed: delta.revealed,
      stillWithheld: clientState.withheld.slice(),
      relationshipBefore,
      relationshipAfter: clientState.relationshipState
    }
  };
}

function gateFor(phaseKey, clientState, artifacts) {
  const phase = phases[phaseKey];
  if (!phase || !phase.gate) return { canAdvance: true };
  return phase.gate(clientState, artifacts || {});
}

module.exports = { profile, intake, phases, initialClientState, getPhaseContent, resolveChoice, gateFor, applyEffects, voice, caseFacts, followUpPack };
