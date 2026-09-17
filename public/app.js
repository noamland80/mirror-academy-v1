/* ==========================================================================
   MIRROR INTERACTIVE SALES ACADEMY — application
   ========================================================================== */
(function () {
'use strict';

// --------------------------------------------------------------------------
// state
// --------------------------------------------------------------------------
// The product ships in one language. The Spanish tables and the whole lang
// plumbing below are intact; only this flag hides the switch and pins English.
// The Academy ships in English and Spanish at full parity: the switch changes
// navigation, lessons, cases, client dialogue, feedback, toolkits, assignments
// and the manager view, not a demonstration card.
const SHOW_LANGUAGE_SWITCH = true;

const S = {
  lang: SHOW_LANGUAGE_SWITCH ? (localStorage.getItem('mirror.lang') || 'en') : 'en',
  token: localStorage.getItem('mirror.token') || null,
  user: null,
  tab: 'home',
  curriculum: null,
  lesson: null,          // { module, lesson, index, answers }
  attempt: null,         // active consultation
  view: null,
  feedback: null,
  outcome: null,
  proposal: null,
  evidence: null,
  cases: [],
  orientation: null,      // the five engines and the eight-phase spine
  lastSignal: null,       // what she said immediately before the current decision
  prevState: null,        // her state before the current decision, for the delta
  signinRole: 'practitioner',
  onboard: null,         // the first-run walk-in, while it is running
  library: null,         // her retained materials, once gathered
  completion: null,      // the completion treatment waiting to be shown
  caseEvidence: null,    // one consultation, opened by a manager
  manager: null,         // the coaching view as the server last sent it
  coachFlash: null,      // one-shot confirmation, kept across the re-render
  journey: null,         // the four-movement arc, as the server last sent it
  moment: null,          // the first consultation moment, while she is in it
  momentData: null,      // the moment itself, fetched once per language
  handover: null,        // an invitation and the message that carries it
  pwHandover: null,      // a password link for one practitioner, and its message
  pwGuide: null,         // why there is no password link for that one
  arriving: false        // she has just accepted an invitation and goes to a lesson
};

// --------------------------------------------------------------------------
// The one thing the product remembers about a person between sessions: that
// she has already been walked in. Storage can be unavailable (a private
// window, blocked site data), and a walk-in shown a second time is a nuisance,
// never a failure — so every access is guarded and failure means "not seen".
// --------------------------------------------------------------------------
const SEEN_KEY = role => 'mirror.walkedIn.' + (role === 'manager' ? 'manager' : 'practitioner') + '.v1';
function hasBeenWalkedIn(role) {
  try { return localStorage.getItem(SEEN_KEY(role)) === 'yes'; } catch (e) { return false; }
}
function markWalkedIn(role) {
  try { localStorage.setItem(SEEN_KEY(role), 'yes'); } catch (e) { /* nothing to do */ }
}

// --------------------------------------------------------------------------
// interface language (content language is resolved server-side)
// --------------------------------------------------------------------------
const UI = {
  en: {
    productName: 'MIRROR Consultation Training System',
    productShort: 'Consultation Training System',
    signIn: 'Sign in', enter: 'Enter', email: 'Email', password: 'Password',
    hint: 'Choose how you are signing in, then use the account your clinic issued you.',
    hintPrac: 'Sign in with the account your clinic issued you.',
    hintMgr: 'Sign in with the manager account for your clinic.',
    practitionerLogin: 'Practitioner Login', practitionerLoginD: 'Learn and practise consultations',
    managerLogin: 'Manager Login', managerLoginD: 'Coach the team from what they practise',
    signFoot: 'One clinic, one team, one method.',
    practitioner: 'Practitioner', practitionerD: 'Learn and practise',
    manager: 'Clinic manager', managerD: 'Coach the team',

    /* --- practitioner dashboard --- */
    journey: 'My MIRROR Journey',
    welcomeBack: 'Welcome back', welcomeFirst: 'Welcome',
    journeyLead: 'Your training is one consultation practised properly, phase by phase, until it holds with a real client.',
    enginesTitle: 'The Five Engines',
    enginesSub: 'The engines organise your training. They never replace the eight phases — each one says who is in charge of which part of the consultation.',
    spineTitle: 'The eight phases of a consultation',
    spineSub: 'Every consultation you practise runs this spine, in this order. Nothing is skipped.',
    spineNotStarted: 'You have not opened a consultation yet, so the spine is showing you the whole road before you walk it.',
    youAreHere: 'You are here',
    objectiveTitle: 'Current learning objective',
    objectiveNow: 'Right now you are working on this.',
    yourCase: 'Your consultation',
    startSofia: 'Start the Sofia consultation', continueSofia: 'Continue the Sofia consultation',
    sofiaNotStarted: 'You have not opened this consultation yet. It begins at Phase 1, Preparation, before Sofia is in the room.',
    phaseOf: 'Phase', ofEight: 'of 8',
    inProgressAt: 'In progress',
    academyProgress: 'Your Academy progress',
    lessonsCompleted: 'lessons completed', modulesReady: 'modules available', lessonsInPlan: 'lessons in the curriculum',
    openLesson: 'Open the lesson',
    ownsPhase: 'Owns Phase', ownsPhases: 'Owns Phases', secondaryOn: 'Secondary on Phase',
    acrossAll: 'Across all eight phases',
    academySub: 'The lessons behind the consultation.',
    keepLearning: 'Open the curriculum',
    fieldAssignment: 'Field assignment',
    noAssignment: 'No field assignment is open. One opens each time you finish a module.',
    minutesPlan: 'planned',

    /* --- consultation, step by step --- */
    stepSignal: 'The signal she gives',
    stepNotice: 'What there is to notice',
    stepDecision: 'Your decision',
    stepChanged: 'What materially changed in her',
    stepWhy: 'Why, in MIRROR terms',
    stepToolkit: 'The Toolkit you now operate',
    stepNext: 'The next phase',
    stepDone: 'Decision recorded',
    engineLabel: 'Engine', phaseLabelWord: 'Canonical phase', toolkitLabel: 'Toolkit in play',
    noToolkitHere: 'None in this phase',
    yourChoice: 'What you chose', herWords: 'The words you used',
    nothingYet: 'Nothing has changed yet. Her state moves the moment you decide.',
    nothingDisclosed: 'She has disclosed nothing yet. What she is still holding back is listed below.',
    stateNow: 'How she is right now', changedNow: 'Changed just now',
    nextPhaseIs: 'Next',
    consultationEnds: 'This is the last phase before the outcome is derived.',

    /* --- the case library --- */
    libTitle: 'The case library',
    libSub: 'Nine complete consultations. Each one is a different person with a different reason for being difficult, and the outcome is derived from her state — never chosen by you.',
    libTrack: 'What it trains',
    libTeaches: 'What this case trains',
    libOpening: 'How she opens',
    libOpeningTitle: 'Read the opening number before you pick a case',
    libOpeningNote: 'Willingness is what she would agree to before you have done anything — not what she believes. Marta opens at 65 because two years of being an easy, satisfied client have taught her to say yes without thinking; Teresa opens at 30 because she has decided to find out who you are before she gives you anything. The high number is the one that hides the most: it can fall much further, it rests on nothing you built, and it makes the questions that matter feel unnecessary. Read the opening number as the distance she can fall, not as the distance you have already travelled.',
    libPosture: 'Posture at the door',
    libHolding: 'things she has not said',
    libHolding1: 'thing she has not said',
    libOf100: 'willingness at the door',
    libThresholdShort: '70 = the YES threshold',
    libHistory: 'Your history with her',
    libNotStarted: 'Not started',
    libAtPhase: 'In progress · Phase',
    libCompletedAs: 'Completed —',
    libAgain: 'Practise it again',
    libPaths: 'Where every decision path ends',
    libPathsNote: 'Counted, not estimated: every combination of decisions in this case was enumerated with all required Toolkit artifacts valid.',
    libHardest: 'Among the hardest to reach a YES',
    libPathsOf: 'of',
    libPathsEnd: 'decision paths end in a booking — one in',
    libHardestNote: 'The three cases where the fewest decision paths end in a booking.',
    libAll: 'All nine',
    libShow: 'Show',
    libCount: 'cases',
    libCount1: 'case',
    outYes: 'YES', outDefer: 'DEFER', outNo: 'NO',

    /* --- tracks: what each group of cases trains --- */
    trDisclosure: 'Disclosure',
    trDisclosureSub: 'What she has decided not to say',
    trDisclosureNote: 'Both clients arrive with a reason they have chosen to keep to themselves, and neither will hand it over because you asked for it.',
    trIdentity: 'Identity and fear',
    trIdentitySub: 'What the treatment would say about her',
    trIdentityNote: 'Here the risk is not the result. It is what having the result done would mean about the kind of woman she is.',
    trPrice: 'Price and value',
    trPriceSub: 'The number, and what holding it says about your judgement',
    trPriceNote: 'Two four-figure consultations that are lost in opposite directions: one client agrees too easily, the other is testing whether your price is real.',
    trObjection: 'Objection structure',
    trObjectionSub: 'What the objection is actually made of',
    trObjectionNote: 'One case, because it is the purest: a named, reasonable, entirely genuine objection standing in front of the real one.',
    trRelationship: 'The relationship over time',
    trRelationshipSub: 'Before the first yes, and long after it',
    trRelationshipNote: 'The consultation that should not close today, and the client who has been closing easily for two years and is about to leave.',

    /* --- consultation: reaction, movement, map --- */
    stepReaction: 'What she says next',
    afterYouSaid: 'After you said',
    reactionHead: 'Her reaction',
    yourWords: 'What you would say',
    stateBefore: 'Before', stateAfter: 'After',
    thrNote: 'The mark at 70 is the willingness the Decision Engine requires before a YES is available.',
    trustMoveTitle: 'Trust movement',
    trustLegend: 'Each stage is drawn from −3 to +3. The ring marks where that stage stood before your last decision.',
    objectionRow: 'Objection intensity',
    justDisclosed: 'She has just told you',
    postureRow: 'Posture',
    nothingMoved: 'Nothing in her ledger moved.',
    mapTitle: 'The consultation map',
    mapSub: 'Every phase, the decision you made in it, and what moved in her because of it.',
    mapSubMgr: 'Every phase, the decision she made in it, and what moved in the client because of it.',
    mapNotReached: 'Not reached',
    mapHere: 'You are deciding here',
    willShort: 'willingness',
    stateHead: 'Her state right now',
    stateExpand: 'Open her full state',

    /* --- feedback headings --- */
    fbSignal: 'Signal detected', fbInterpret: 'What MIRROR interprets',
    fbEvidence: 'Evidence from', fbPrinciple: 'Principle involved',
    fbWhy: 'Why your action helped or hurt', fbChangedState: 'What changed in her state',
    fbNext: 'What to try next',

    /* --- plain-English failures --- */
    errLoad: 'That did not load. Check your connection and try again.',
    errSignIn: 'That email and password do not match an account. Check both and try again.',
    errSignInOff: 'We could not reach your Academy just now. Try again in a moment.',
    errSave: 'That did not save. Try again in a moment.',
    errSession: 'You were signed out. Sign in again to carry on.',
    pitch: 'Practise the consultation, not the presentation.',
    sub: 'Ten modules, interactive lessons and full simulated consultations, built on the MIRROR Method from The Beauty Sales Secrets.',
    tabs: { start: 'Start here', home: 'My Journey', curriculum: 'Curriculum', practice: 'Consultations', resources: 'Materials', journal: 'Field journal', progress: 'Your development', manager: 'Team coaching', clinic: 'Clinic' },
    signOut: 'Sign out',
    obStep: 'Question {n} of {of}',
    obNext: 'Continue', obFinish: 'Done', obSkip: 'Skip this',
    fwStart: 'Meet her now', fwLater: 'Not right now',
    fwGoal: 'What you said you want from this:',
    mdTitle: 'This week at your clinic',
    mdPractised: 'practitioners practised', mdConsults: 'consultations',
    mdCompleted: 'completed', mdLessons: 'lessons finished',
    mdNotYet: 'Has not practised this week',
    mdAttention: 'What needs attention',
    mdExercise: 'Suggested team exercise',
    mdPractice: 'Suggested practice',
    mdThenRead: 'Then, in the Academy',
    mdDetail: 'Open the full coaching view',
    mdBasis: 'Where this comes from',
    welcome: 'Welcome back', welcomeNew: 'Welcome to the Academy',
    heroSub: 'You are not here to learn a script. You are here to practise the moments where consultations are actually won and lost.',
    modules: 'modules', lessons: 'lessons', minutes: 'minutes of teaching', cases: 'full consultations',
    continueLesson: 'Continue where you left off', start: 'Start', resume: 'Resume', review: 'Review',
    openAssignment: 'You have an assignment open', whatHappened: 'What happened when you tried it?',
    answer: 'Write what happened', save: 'Save', saved: 'Saved', saving: 'Saving…',
    curriculumTitle: 'The curriculum', curriculumSub: 'Ten modules. Each one ends with something you take into a real consultation.',
    inProduction: 'In production', available: 'Available', completed: 'Complete',
    lessonsIn: 'lessons', lessonN: 'Lesson', moduleN: 'Module', min: 'min', source: 'Source',
    back: 'Back', next: 'Continue', finish: 'Finish lesson', lessonDone: 'Lesson complete',
    checkAnswer: 'Check', tryAgain: 'Try again', showModel: 'Show the model answer', yourAnswer: 'Your answer',
    wait: 'Wait…', waiting: 'Say nothing', holdSilence: 'Hold the silence',
    reveal: 'Reveal', whatDidYouNotice: 'What did you notice?', chooseOne: 'Choose one',
    caseCol: 'Case', consultMap: 'The consultation, phase by phase',
    consultMapNote: 'Each point is a decision you made. Green held, red did not, and the dotted line is the willingness threshold the outcome is derived against.',
    consultMapNoteMgr: 'Each point is a decision she made. Green held, red did not, and the dotted line is the willingness threshold the outcome is derived against.',
    decisionsMade: 'decisions recorded', toolkitDocs: 'Toolkit documents',
    allClear: 'Nothing else repeats this week.', practiceTitle: 'Consultations', practiceSub: 'Complete simulated consultations. The client remembers what you did, and the outcome is derived from her state — never chosen by you.',
    beginCase: 'Begin consultation', continueCase: 'Continue consultation', restart: 'Start again',
    caseLocked: 'In production', clientState: 'Client state', trust: 'Trust stages',
    willingness: 'Willingness to proceed', posture: 'Posture', withheld: 'Still withheld', disclosed: 'Disclosed',
    yourMove: 'Your move', whatSheSays: 'What the client says', whatShifted: 'What shifted',
    toolkitTitle: 'Toolkit', submit: 'Submit', advance: 'Continue to the next phase',
    gateClosed: 'This phase is not finished', outcomeTitle: 'Derived outcome',
    followUp: 'Follow-up plan', stopCondition: 'Stop condition', agreedDate: 'Agreed follow-up moment',
    closureNote: 'Closure note', completePlan: 'Complete the plan', debrief: 'Consultation debrief',
    libMore: 'Show earlier consultations',
    retryTag: 'Try it again, now',
    retryNote: 'Same skill, a different client, while the principle is still in front of you.',
    retryLanded: 'That is the skill. ',
    pvTitle: 'Where this comes from', pvChapter: 'Chapter', pvCanonical: 'MIRROR architecture',
    pvBook: 'The book', pvPhase: 'Canonical phase', pvStage: 'Trust Stage it forms',
    pvStandard: 'Trust Standard', pvStandard0: 'Standard', pvDuty: 'Ethical Duty', pvDuty0: 'Duty',
    pvToolkit: 'Toolkit', pvNoToolkit: 'None in this lesson',
    ax_clientResponse: 'What she says next changes',
    ax_disclosure: 'She discloses something she would not have',
    ax_trust: 'A Trust Stage holds that would have fallen',
    ax_objection: 'The objection arrives differently',
    ax_recommendation: 'The recommendation can now be built',
    ax_continuation: 'What happens after the consultation changes',
    turningPoints: 'Turning points', journalTitle: 'Field journal',
    journalSub: 'What happened when you used the method with a real client. This is the only record of the Academy leaving the screen.',
    open: 'Open', answered: 'Answered',
    progressTitle: 'Your development', progressSub: 'Nothing here is graded. What is recorded is what you did and what it produced.',
    mgrTitle: 'Team coaching', mgrSub: 'Seven questions, answered from recorded consultations and nothing else.',
    whoPractising: 'Who is practising', whereLost: 'Where the team loses trust', whatRepeats: 'What repeats', coachWeek: 'What to coach this week',
    noData: 'Nothing recorded yet.', consultations: 'consultations', lessonsDone: 'lessons', lastActive: 'Last active', assignments: 'assignments',
    basedOn: 'Based on the MIRROR Method from The Beauty Sales Secrets',
    endorsed: 'Endorsed by Clinic Scale System',
    learn: 'Learn', see: 'See', choose: 'Choose', experience: 'Experience', reflect: 'Reflect', apply: 'Apply',
    fromBook: 'From The Beauty Sales Secrets', principle: 'MIRROR principle',
    notBuilt: 'This lesson is in production', assignmentFor: 'Assignment —',
    noticed: 'What you noticed', missed: 'What you missed', did: 'What you did',
    interpreted: 'How the client interpreted it', changed: 'What changed', matters: 'Why it matters',
    better: 'Better language', tryNext: 'Try this next',

    clinicTitle: 'Your clinic', clinicSub: 'The plan, the seats on it, and the practitioners in them.',
    planTitle: 'The plan', planName: 'Founding Pilot', planPrice: '€490', priceNote: 'one-off, one clinic',
    planIncludes: 'One clinic, up to five practitioners, the full Academy and all nine consultation cases.',
    seatsInUse: 'seats in use', seatsRow: 'Seats in use', seatsOf: 'of', seatsFree: 'free',
    clinicOpened: 'Clinic opened', activeSince: 'Active since', paymentTitle: 'Payment',
    accountsRow: 'Accounts on the plan', openInvitesRow: 'Open invitations',
    payPending: 'Payment not yet recorded',
    payPendingNote: 'Your place is held and the Academy is open. The pilot is settled by transfer, so your payment is matched by hand against the reference below.',
    payActive: 'Active', payPaidNote: 'Payment recorded. Nothing further is owed on the pilot.',
    payWaivedNote: 'Waived by agreement. Nothing is owed on the pilot.',
    payLapsed: 'Payment lapsed',
    payLapsedNote: 'The pilot period has passed without a recorded payment. Speak to your contact at Clinic Scale System.',
    invoiceRef: 'Invoice reference', noRef: 'No reference issued',
    peopleTitle: 'Practitioners', peopleSub: 'Everyone holding a seat, and what each has completed.',
    noPeople: 'No practitioners have accounts yet. The invitation below is how the first one gets in.',
    inviteTitle: 'Invite a practitioner',
    inviteSub: 'You create the invitation; she chooses her own password. You never see it, and neither does anyone else.',
    inviteName: 'Her name', inviteEmail: 'Her email address',
    inviteSend: 'Create the invitation', inviteWorking: 'Creating…',
    inviteLinkTitle: 'Her invitation link',
    inviteNoEmail: 'Invitations are not emailed for you. Copy the link and send it to her yourself. It works once, for her only, and expires in fourteen days.',
    copyLink: 'Copy link', copied: 'Copied', copyManual: 'Copying was blocked. Select the link and copy it by hand.',
    inviteFields: 'A name and an email address are both needed.',
    inviteFailed: 'The invitation could not be created.',
    invitesTitle: 'Pending and expired invitations',
    invitesSub: 'An invitation holds a seat until it is accepted or expires.',
    noInvites: 'No invitations are open.',
    stOpen: 'Pending', stAccepted: 'Accepted', stExpired: 'Expired',
    sentOn: 'Sent', expiresOn: 'Expires', acceptedOn: 'Joined', seatsNone: 'Every seat on this plan is in use.',
    noInvitesBody: 'Every invitation you create stays here until she accepts it or it expires — with the message that carried it, so you can send it again without hunting for the link.',
    pplNotStarted: 'Has not started yet',
    noPeopleT: 'Nobody holds a seat yet',
    pplLast: 'Last active',

    /* --- a practitioner who cannot sign in --------------------------------
       She forgot her password. The manager issues a link and hands it over,
       exactly as she handed over the invitation, and never sees the password
       itself. Everything the practitioner has recorded survives untouched. */
    pwAsk: 'She cannot sign in',
    pwAgain: 'Issue another link',
    pwWorking: 'Issuing…',
    pwFor: 'New password link for',
    pwLead: 'Written for you, in her language. Paste it into whatever you already use — mail, a message, a note left on the desk.',
    pwKnowTitle: 'What this does, and what it does not',
    pwFactOnce: 'The link works once, and only for her.',
    pwFactExpires: 'It expires in 48 hours. After that it is dead, and you issue another.',
    pwFactNever: 'You never see the new password. She chooses it herself, on the link.',
    pwFactKeeps: 'Nothing she has recorded is lost — her lessons, her consultations, the documents she wrote inside them and her field journal all stay exactly where they are.',
    pwFactRetires: 'Any earlier link for her stops working the moment you issue this one.',
    pwSignedOut: 'She will be signed out anywhere she was still signed in. That is also how a shared login is taken back.',
    pwFailed: 'The link could not be issued just now. Try again in a moment.',
    pwGuideTitle: 'No link for this one',
    pwGuideSelf: 'A manager cannot reset her own password from here — that is the rule that stops a clinic locking itself out of its own account. Ask your contact at Clinic Scale System and it is done in a moment.',
    pwGuideNotHere: 'She is not on this clinic\'s plan any more, so there is no account here to issue a link for. If she should be, invite her below — a new invitation creates a new account rather than reopening the old one.',
    pwGuidePick: 'Choose which practitioner cannot sign in.',
    pwGuideOther: 'No link could be issued for her. Nothing has changed on her account, and she can still sign in with the password she has. If she genuinely cannot, ask your contact at Clinic Scale System.',

    /* --- the states nobody photographs: empty, loading, failed ------------- */
    loadingWord: 'Loading',
    failTitle: 'That did not load',
    failBody: 'Check your connection and try again. Nothing you have recorded is affected.',
    blankJnK: 'Nothing recorded yet',
    blankJnTitle: 'Nothing has left the screen yet',
    blankJnBody: 'A field assignment opens each time you finish a module, and asks what happened when you used that module with a real client. Your answers collect here, in your own words, against the assignment that asked for them.',
    blankJnGo: 'Open the curriculum',
    blankConsK: 'Nothing recorded yet',
    blankConsTitle: 'You have not opened a consultation yet',
    blankConsBody: 'Nine complete consultations are waiting, each a different woman with a different reason for being difficult. The first one begins at Phase 1, Preparation, before Sofia is in the room.',
    blankConsGo: 'Open the case library',
    blankMgrConsTitle: 'No consultation has been recorded yet',
    blankMgrConsBody: 'The moment somebody on your team finishes one, it appears here in full: every decision she made, what it cost or bought her, the client\'s state at that exact moment, and the documents written inside it.',
    blankMgrConsGo: 'Go to the clinic',
    blankAssignTitle: 'No field assignment is open',
    blankAssignBody: 'One opens each time you finish a module, and it is the part of the method that happens in a real room rather than on this screen.',

    /* --- the follow-up plan, in words rather than field names -------------- */
    depthCheckTitle: 'Discovery Depth Check',
    tkKept: 'What you write here is kept, word for word, in your materials.',
    tkNotYet: 'Not complete enough to advance',
    outcomeBasis: 'What this was derived from',
    tkLater: 'There is nothing to fill in here. This Toolkit is written from the outcome of the consultation, and you complete it on the screen that carries her answer.',
    statComplete: 'completed',

    /* --- the walk-in: shown once, on the first sign-in --------------------- */
    obKicker: 'Before you begin',
    obOf: 'of',
    obSkip: 'Skip this',
    obNextStep: 'Continue',
    obT1: 'She is deciding something other than the thing she asked about',
    obB1: 'A woman books for a treatment and spends the consultation deciding whether you are safe to be honest with. MIRROR is the method for that second conversation — the one that actually settles the outcome.',
    obSaid: '“I just want to look less tired.”',
    obLayerA: 'What she asked for',
    obLayerB: 'What she actually wants',
    obLayerC: 'What she will not say first',
    obDown: 'Go down',
    obT2: 'You learn it, you practise it, then you take it out of the room',
    obB2: 'The Academy teaches a phase. A consultation case makes you practise it against a client who remembers everything you did. The field journal is where you write what happened when you used it on a real one. Nothing is graded, and the outcome is never yours to pick.',
    obLoopA: 'Academy lesson',
    obLoopB: 'Consultation case',
    obLoopC: 'Real client',
    obLoopBack: 'What happened comes back as a field assignment',
    obT3: 'Every consultation runs the same eight phases',
    obB3: 'This is the spine. Modules attach to it, cases run along it, and her state is carried from one phase into the next — so a shortcut taken in Phase 3 is still costing you in Phase 7.',
    obT4: 'Start here',
    obB4: 'One lesson takes under ten minutes. One consultation takes about fifteen. Either is a real start; the lesson is the quieter one.',
    obStartLesson: 'Open the first lesson',
    obStartCase: 'Open a consultation',
    obDone: 'Begin',
    obMT1: 'Everything here comes from what your team actually did',
    obMB1: 'No self-assessment, no rating, no ranking. Each sentence in the coaching centre counts recorded decisions and names what those decisions did to the client sitting in front of them.',
    obMScene: 'One thing to coach',
    obMSceneNote: 'Recorded decisions, across practitioners and cases',
    obMT2: 'Six questions, answered on one screen',
    obMB2: 'Who is practising, what behaviour keeps recurring, where trust usually breaks, what to coach next, the case evidence itself — one practitioner’s consultation opened decision by decision — and, last, the one lesson and the one case to send each person back to.',
    obMGo: 'Open the coaching centre',

    /* --- the curriculum as a progression ---------------------------------- */
    curMapTitle: 'The progression',
    curMapSub: 'Ten modules in the order you learn them, the eight phases in the order a consultation runs them, and a line from each module to the phase it is for. The lines cross because the two orders are not the same.',
    curAscent: 'The order you learn it',
    curRail: 'The order the consultation runs',
    curHere: 'Next',
    curTeaches: 'Teaches phase',
    curYouAre: 'Where you are',
    curDoneN: 'modules complete',
    curNextIs: 'Next module',
    curNoneOpen: 'Every module is complete. Nothing is waiting.',
    curStart: 'Open it',
    stages: ['Psychology', 'Preparation', 'Discovery', 'Understanding', 'Recommendation',
             'Value', 'Objections', 'Decision', 'Continuation', 'Mastery'],

    /* --- the retained library --------------------------------------------- */
    resTitle: 'Your materials',
    resSub: 'Everything you have written and everything you have worked through, kept where you can read it again. This is yours: it does not reset, and it is what you bring into a real consultation.',
    resTk: 'Toolkit documents',
    resTkSub: 'The artifacts you completed inside a consultation, as the documents they are.',
    resTkEmpty: 'You fill this by running a consultation. Each phase hands you a Toolkit — an intake canvas, an emotional drivers map, a recommendation builder — and the one you complete is kept here, with everything you wrote in it.',
    resJn: 'Field journal',
    resJnSub: 'What happened when you used the method on a real client, kept against the assignment that asked.',
    resJnEmpty: 'A field assignment opens each time you finish a module, and asks what happened when you used that module with a real client. Your answers collect here.',
    resBk: 'From the book',
    resBkSub: 'The passages you have worked through in lessons, with their chapter references, collected as one reference.',
    resBkEmpty: 'Lessons carry passages from The Beauty Sales Secrets with the chapter each one comes from. As you complete lessons, the passages you have worked through collect here, so you can re-read them without going back into the lesson.',
    resWrittenIn: 'Written during',
    resFrom: 'From',
    resAnswered: 'Answered',
    resOpenDoc: 'Read it',
    resCloseDoc: 'Close',
    resItems: 'documents',
    resItem: 'document',
    resNotes: 'passages',
    resNote: 'passage',
    resEntries: 'entries',
    resEntry: 'entry',
    resAssignment: 'The assignment',
    resYourAnswer: 'What you wrote',
    resLoading: 'Gathering your materials…',
    resTkEmptyT: 'No Toolkit document yet',
    resJnEmptyT: 'No answer written yet',
    resBkEmptyT: 'No passage worked through yet',

    /* --- completion and continuation -------------------------------------- */
    cmpLesson: 'Lesson complete',
    cmpModule: 'Module complete',
    cmpAll: 'All ten modules complete',
    cmpCase: 'Consultation complete',
    cmpNowCan: 'What you can do now that you could not before',
    cmpNextThing: 'The next thing',
    cmpThisWeek: 'Take this into a real consultation this week',
    cmpContinue: 'Continue',
    cmpBackToModule: 'Back to the module',
    cmpOpenNext: 'Open the next lesson',
    cmpOpenNextModule: 'Open the next module',
    cmpOpenCase: 'Practise it in a consultation',
    cmpOpenJournal: 'Write what happened',
    cmpModuleBody: 'This module is finished, and a field assignment is now open against it. That assignment is the only part of the Academy that leaves the screen.',
    cmpAllBody: 'Sixty lessons, five hundred and sixty-two minutes of teaching, and each of the eight phases taught by at least one module. Nothing here is a qualification and nothing has been graded. What it says is that you have worked through the whole method once.',
    cmpAllNext: 'What is left is the part that does not finish: the nine consultation cases, practised until the phases hold without you thinking about them, and the field journal, where the method stops being training.',
    cmpHonest: 'A record of work done, not an assessment of how well it was done.',
    cmpNoneEstablished: 'The record does not yet support a standing claim about any one competency in this consultation. What it does hold is every decision you made and what each one did to her.',
    cmpCaseBody: 'The outcome was derived from her state, not chosen. What follows is what this consultation showed you were able to do.',
    cmpEvidence: 'What the record supports',
    cmpNoNext: 'Nothing is queued behind this one.',

    /* --- the five questions ------------------------------------------------ */
    mgrSub5: 'Five questions, answered from recorded consultations and nothing else.',
    qWho: 'Who is practising?',
    qRepeats: 'What behaviour keeps recurring?',
    qTrust: 'Where does trust usually break?',
    qCoach: 'What should I coach next?',
    qEvidence: 'What happened in the actual case evidence?',
    qEvidenceSub: 'Open one consultation and read it the way the practitioner lived it: every decision, her state at that moment, the documents written inside it, and the outcome the engine derived from all of it.',
    qNoneWho: 'Nobody has completed a lesson or a consultation yet. The first recorded activity answers this.',
    qNoneRepeats: 'No behaviour has repeated yet. A pattern appears here once the same kind of choice has been made more than once.',
    qNoneTrust: 'No phase has produced a fall in the trust ledger yet. This fills from recorded consultations.',
    qNoneCoach: 'There is nothing to coach from evidence yet. This fills as soon as consultations are recorded.',
    qNoneEvidence: 'No consultation has been recorded yet. Once one is, it opens here decision by decision.',
    evOpen: 'Open the evidence',
    evTitle: 'Case evidence',
    evDecisions: 'Decision by decision',
    evAtPhase: 'Phase',
    evChose: 'What she chose',
    evSaid: 'The words she used',
    evClientAt: 'The client at this moment',
    evMoved: 'What moved',
    evVerdict: 'MIRROR reading',
    evArtifacts: 'What she wrote',
    evArtifactsSub: 'The Toolkit documents completed inside this consultation, exactly as submitted.',
    evNoArtifacts: 'No Toolkit document was completed in this consultation.',
    evOutcome: 'The derived outcome',
    evRationale: 'Why it was derived that way',
    evNotDerived: 'This consultation has not reached an outcome yet.',
    evAbandoned: 'Opened, no decision recorded',
    evWhoWhen: 'Practitioner',
    evNothingMoved: 'Nothing in her ledger moved at this phase.',
    evDegraded: 'Taken without the information it needed',
    evFollowUp: 'The follow-up plan she wrote',
    evBack: 'Back to the coaching centre',
    evSeeAll: 'All recorded consultations',

    /* --- the lesson, as something made ------------------------------------ */
    lcModule: 'Module',
    lcOf: 'of',
    lcTeaches: 'The phase it teaches',
    lcGives: 'What this lesson leaves you with',
    lcRead: 'Reading time',
    lcStep: 'Step',
    lcProgress: 'Where you are in the lesson',
    lcBegin: 'Begin the lesson',
    lcFrom: 'Drawn from',
    insCite: 'The passage',
    insRead: 'What it means in the room',
    retrySecond: 'Second attempt',
    retryWhy: 'Nobody learns a skill by being told they missed it. This is the same skill, a different client, right now.',
    cmpKick: 'Two ways of saying the same thing',
    cmpYouSay: 'What you say',
    cmpHer: 'What she can do with it',
    cmpPending: 'Not answered yet',
    cmpOpens: 'She can answer this one honestly.',
    cmpCloses: 'She can answer this one politely, and that is all.',
    cmpChosen: 'You chose this one',
    cmpReading: 'The difference between them',

    /* --- the sixth question ------------------------------------------------ */
    mgrSub6: 'Six questions, answered from recorded consultations and nothing else.',
    qPrescribe: 'Which lesson and which case should this person repeat?',
    prescribeCap: 'What to send each person back to',
    qPrescribeSub: 'One prescription per practitioner, read from her own recorded consultations. Nobody is rated, nobody is placed above anybody else, and every card is about one person on her own.',
    qNonePrescribe: 'Nobody holds a seat yet, so there is nothing to prescribe. This fills as soon as practitioners have accounts.',
    rxLesson: 'The lesson to repeat',
    rxCase: 'The case to repeat',
    rxWhy: 'Why this one',
    rxEvidence: 'What her own record shows',
    rxConversation: 'The conversation to have with her',
    rxNoLesson: 'The record does not point at one module yet.',
    rxNoCase: 'The record does not point at one case yet.',
    rxNotStarted: 'Nothing recorded yet',
    rxOpenModule: 'Open the module',
    rxBasis: 'Read from her own choices',

    /* --- what a module buys her -------------------------------------------- */
    outcomeTitle2: 'What you will be able to do',
    outcomeCard: 'After this module',
    outcomeLesson: 'The skill this lesson builds toward',

    /* --- the reasoning underneath the lesson ------------------------------- */
    dpBefore: 'Before you begin',
    dpWhy: 'Why a good practitioner gets this wrong',
    dpThinking: 'What she is thinking and not saying',
    dpThinkingNote: 'She will not say this out loud. Everything she does say is built around it.',
    dpLadder: 'The same moment, three ways of answering it',
    dpLadderSub: 'One client, one sentence to answer. Step through each answer and read what it does to her.',
    ldWeak: 'Weak',
    ldAverage: 'Average',
    ldStrong: 'Strong',
    ldSays: 'What you say',
    ldDoes: 'What it does to her',
    ldWeakNote: 'It costs you something the moment you say it, and you can usually hear it land.',
    ldAvgNote: 'Nothing goes wrong. That is exactly why it is the answer most practitioners give — and it still quietly costs you the thing you came in for.',
    ldStrongNote: 'The same information and the same four minutes. What changes is what the sentence asks her to do.',
    ldLocked: 'Read the other two first',
    ldLockedWhy: 'The strong line only stops looking obvious once you have felt what the safe one costs.',
    ldPick: 'Choose a rung to hear it.',
    ldNotGraded: 'This is teaching, not an exercise. Nothing here is marked and nothing here is recorded.',

    /* --- the arc of a lesson, drawn ---------------------------------------- */
    jsConsequence: 'Consequence',
    jsUnderstand: 'Understand',
    jsRetry: 'Retry',
    jrTitle: 'The arc of this lesson',
    jrNow: 'You are here',
    jrMaybe: 'only if a choice misses',
    jrLooped: 'The lesson went back a step. You made the choice again with the coaching still in front of you — that loop is the part a book cannot give you.',

    /* --- the seventh question ---------------------------------------------- */
    mgrSub7: 'Seven questions, answered from recorded consultations and nothing else.',
    qChanged: 'What changed after coaching?',
    changedCap: 'Before and after a conversation you actually had',
    qChangedSub: 'Record the coaching conversations you have, and this compares each practitioner with her own earlier work on the one thing you named. It is not a rating, it is not a trend line, and it never places one practitioner against another.',
    cnRecord: 'Record a coaching conversation',
    cnRecordSub: 'Three things: who you spoke to, what you coached, and what you actually said. The last one is the part you will want to read back.',
    cnWho: 'Who did you coach?',
    cnWhoPick: 'Choose a practitioner',
    cnWhat: 'What did you coach?',
    cnWhatPick: 'Choose the pattern or the phase',
    cnPatterns: 'A behaviour that repeats',
    cnPhases: 'A phase where trust is being lost',
    cnNote: 'What did you actually say to her?',
    cnNotePh: 'In your own words — the sentence you used, not a summary of it.',
    cnSave: 'Record the conversation',
    cnSaving: 'Recording…',
    cnSaved: 'Recorded. The before and after appears below as soon as she has practised again.',
    cnFromRow: 'I had this conversation',
    cnNone: 'No coaching conversation has been recorded yet. Record one above — from then on, this question answers itself from her own consultations.',
    cnNoWho: 'Nobody holds a practitioner seat in this clinic yet, so there is nobody to record a conversation with.',
    cnCoachedOn: 'Coached on',
    cnSaidIt: 'What you said',
    cnBefore: 'Before that conversation',
    cnAfter: 'Since that conversation',
    cnConsults: 'recorded consultations',
    cnStTooEarly: 'Too early to say',
    cnStImproved: 'Happening less',
    cnStWorse: 'Happening more',
    cnStUnchanged: 'Nothing has moved',
    cnPhaseWord: 'Phase',
    cnWhatWeRead: 'What the record shows',

    /* --- the first ten minutes (clinic manager) --- */
    stTitle: 'Your first ten minutes',
    stLead: 'Three things, in this order. None of them waits for anybody on your team to have done anything.',
    stStepWord: 'Step',
    stMinutes: 'minutes',
    st1Title: 'Sit in the consultation yourself',
    st1Body: 'One real moment from one of the nine cases in the programme. You read what the client says, you choose the reply you would actually give, and you see what it costs her — before you ask a single practitioner to do it.',
    st1Cta: 'Walk the moment',
    st2Title: 'Bring your team in',
    st2Body: 'A link each, and a message written for you that you can send exactly as it is. There is nothing to install, no password for you to invent, and nothing for anyone to configure.',
    st2Cta: 'Add a practitioner',
    st3Title: 'Know what you will be reading',
    st3Body: 'Everything they practise comes back to you as sentences with counts behind them, and every sentence names the consultation it came from, so you can open it and read the choice yourself.',
    st3Cta: 'Open the coaching centre',
    stStateDone: 'Done', stStateNow: 'Now', stStateNext: 'Next',
    stWhyHere: 'This page stays. Come back to it whenever you hand the programme to somebody new.',
    stArcTitle: 'Where your clinic is',
    stSampleTitle: 'The form every answer takes',
    stSample: '“Three of five practitioners moved to price before the client had named what she was protecting. It happened in four of nine recorded consultations, all of them in Phase 3.”',
    stSampleNote: 'Written from your clinic’s own recorded consultations. No scores, no percentages of ability, no ranking of one practitioner against another.',

    /* --- the consultation moment --- */
    fmRoom: 'The room',
    fmSays: 'She says',
    fmBeneath: 'What is underneath it',
    fmChoose: 'Choose the reply you would give',
    fmYouSay: 'What you said',
    fmReading: 'The MIRROR reading',
    fmDid: 'What you did',
    fmPrinciple: 'The principle behind it',
    fmWhy: 'Why that is the verdict',
    // The verdict on a chosen line. It comes from the lesson's own `verdict`
    // key, which is English data, so the badge has to be looked up rather than
    // upper-cased — otherwise a Spanish practitioner reads "WEAK".
    vd: { weak: 'WEAK', best: 'BEST', harmful: 'HARMFUL' },
    fmCost: 'What it costs, materially',
    fmNextTime: 'What to do instead, next time',
    fmMoved: 'What it did to her',
    fmWillingness: 'Willingness to continue',
    fmPosture: 'How she is sitting now',
    fmStill: 'Still withheld',
    fmRevealed: 'She has now told you',
    fmAgain: 'Try a different reply',
    fmSeenEnough: 'I have seen enough — bring my team in',
    fmSkip: 'Skip this for now',
    vdAligned: 'ALIGNED', vdPartial: 'PARTIALLY ALIGNED', vdNot: 'NOT ALIGNED',

    /* --- this principle, on the treatments a clinic actually sells --- */
    trxKick: 'The same principle, priced',
    trxTitle: 'On the treatments you actually sell',
    trxSub: 'A toxin appointment and a body programme are not the same conversation, and the same sentence does different work in each. Here is this lesson\'s principle in the rooms you work in.',
    trxMoment: 'The moment',
    trxWeak: 'What is usually said',
    trxStrong: 'What the method says',
    trxCost: 'What it costs',
    trxGain: 'What it gains',
    trxFoot: 'Teaching, not an exercise. Nothing here is marked and nothing here is recorded.',

    /* --- the same exchange, run twice --- */
    cvKick: 'The whole exchange, twice',
    cvTitle: 'The same conversation, run two ways',
    cvSub: 'The ladder compares single lines. This compares a whole exchange, which is where you see that the damage is cumulative rather than one badly chosen sentence.',
    cvSetting: 'The setting',
    cvShared: 'Both versions open on the same sentence',
    cvSharedNote: 'She says exactly this in both. Everything after it is you, and only you.',
    cvBefore: 'How it usually goes',
    cvBeforeNote: 'Competent, courteous, and it loses the room.',
    cvAfter: 'How the method runs it',
    cvAfterNote: 'Same client, same treatment, same price.',
    cvSplit: 'This is where the two versions part',
    cvClient: 'Her', cvYou: 'You',
    cvChanged: 'What the second version did differently',
    cvCost: 'What the first version cost',
    cvFoot: 'Teaching, not an exercise. This is not your decision and not your retry — nothing here is marked and nothing here is recorded.',

    /* --- the end of a lesson is not the end of the arc --- */
    contKick: 'This does not end on the screen',
    contTitle: 'What happens after this lesson',
    contLead: 'Three more things happen, and none of them happen here. The method only counts once it has been used on someone who is actually paying.',
    contNoAssign: 'This module\'s clinic assignment opens when the module is built out.',
    contOpensAt: 'It opens the moment you finish this module.',
    contOpenNow: 'It is open now, and it is waiting in your field journal.',
    contReflect: 'When you come back, you write what actually happened — in your words, about your client, not a form with boxes.',
    contCoach: 'Your manager reads what you wrote and coaches from it: from your consultations, not from a general opinion about you.',
    contSeeArc: 'See the whole arc',
    contOpenJournal: 'Open the field journal',

    /* --- the nine stations of the arc --- */
    arcS1: 'Learn',
    arcS1C: 'The principle, taught from the book and put in front of you before anybody asks you to use it.',
    arcS2: 'See',
    arcS2C: 'The signal a real client gives — what there is to notice before you answer.',
    arcS3: 'Decide',
    arcS3C: 'One reply, chosen against two others that also sound perfectly reasonable.',
    arcS4: 'Experience the consequence',
    arcS4C: 'What your reply did to her: what she now says, and what she now keeps to herself.',
    arcS5: 'Understand',
    arcS5C: 'Why it did that, in MIRROR terms, named rather than implied.',
    arcS6: 'Retry',
    arcS6C: 'The same moment again, once you know what the first answer cost. This is the part a book cannot give you.',
    arcS7: 'Apply in clinic',
    arcS7C: 'One assignment per module, carried out of here and into a real consultation with a real client.',
    arcS8: 'Reflect',
    arcS8C: 'What actually happened, written up in your own words when you come back.',
    arcS9: 'Manager coaching',
    arcS9C: 'Your written work reaches your manager, and the coaching you get is about your consultations.',
    arcM9: 'Coaching from you',
    arcMgrBandScreenSub: 'Inside every lesson your team takes, and inside every consultation they practise.',
    arcMgrWhereDecide: 'Where a lesson and a consultation both stop and wait for an answer.',
    arcMgrWhereConseq: 'It arrives on its own, immediately, after every decision they take.',
    arcMgrWhereUnderstand: 'Said out loud every time, rather than left for them to work out.',
    arcM1C: 'The principle, taught from the book before anybody is asked to use it.',
    arcM2C: 'The signal a real client gives, and what there is to notice before answering it.',
    arcM3C: 'One reply, chosen against two others that also sound perfectly reasonable.',
    arcM4C: 'What that reply did to the client: what she now says, and what she now keeps to herself.',
    arcM5C: 'Why it did that, in MIRROR terms, named rather than implied.',
    arcM6C: 'The same moment again, with the cost of the first answer already known. This is the part a book cannot give them.',
    arcM7C: 'One assignment per module, carried out of here and into a real consultation with a real client.',
    arcM8C: 'What actually happened, written up in their own words when they come back.',
    arcM9C: 'Their written work reaches you, and what you coach from is their own consultations.',
    arcBandScreen: 'On the screen',
    arcBandScreenSub: 'Inside every lesson, and inside every consultation you practise.',
    arcBandClinic: 'In the clinic',
    arcBandClinicSub: 'Where the method stops being training. None of this happens on this screen.',
    arcStNotYet: 'Not yet',
    arcUnitLessons: 'lessons completed',
    arcUnitConsults: 'consultations opened',
    arcUnitDecisions: 'decisions recorded',
    arcUnitAssign: 'clinic assignments opened',
    arcUnitWritten: 'written up',
    arcUnitCoaching: 'coaching conversations recorded',
    arcWhereLearn: 'Where the arc starts. The lessons run in order, and each one ends in something you do.',
    arcWhereSee: 'What opens every lesson and every consultation.',
    arcWhereDecide: 'Where a lesson and a consultation both stop and wait for you.',
    arcWhereConseq: 'It arrives on its own, immediately, after every decision you take.',
    arcWhereUnderstand: 'Said out loud every time, rather than left for you to work out.',
    arcWhereRetry: 'Every lesson carries one. It opens the moment a choice misses.',
    arcApplyNotYet: 'The first one opens the day you finish a module.',
    arcReflectNotYet: 'Nothing written up yet. It is the first thing you do when you come back.',
    arcCoachWith: 'What you have written up is on your manager\'s coaching page.',
    arcCoachNotYet: 'Nothing has reached her yet. It will, the first time you write one up.',
    arcMgrApply: 'One assignment opens for each practitioner who finishes a module.',
    arcMgrReflect: 'Their own words, about their own clients. This is the method leaving the screen.',
    arcMgrCoach: 'The coaching conversations you have recorded, and what changed in their work afterwards.',
    arcNotYetNote: 'A stage you have not reached yet is not a failure and not a score. It is simply not yet.',
    arcMgrNotYetNote: 'A stage your team has not reached yet is not a failure and not a score. It is simply not yet.',
    mgrArcTitle: 'Where the method is, across your team',

    /* --- the arc: learning path, case practice, field application, keeping --- */
    arcTitle: 'Where you are',
    arcLead: 'The whole arc is nine stages. Six of them happen on this screen; the last three happen in your clinic, and they are the reason this is not a book.',
    arcMgrLead: 'The whole arc is nine stages. Six of them happen on the screen; the last three happen in your clinic. This is how far your team has walked into them.',
    arcNext: 'What comes next',
    arcNextWhy: 'Why this one',
    arcStDone: 'Complete', arcStNow: 'You are here', arcStOpen: 'Under way', arcStAhead: 'Ahead',
    arcOf: 'of',
    arcNothing: 'Nothing recorded here yet.',
    arcGoLesson: 'Open the lesson',
    arcGoCase: 'Open the consultation',
    arcGoJournal: 'Open the field journal',
    arcGoMaterials: 'Open your materials',
    arcGoInvite: 'Open the clinic page',
    arcGoMoment: 'Walk the moment',
    arcGoCoach: 'Open the coaching centre',
    arcGoCurriculum: 'Open the learning path',

    /* --- the handover a manager sends --- */
    hoTitle: 'Send this to her',
    hoLead: 'Written for you, in her language. Paste it into whatever you already use — mail, a message, a note left on the desk.',
    hoMessage: 'The message',
    hoLink: 'The link on its own',
    hoCopyMessage: 'Copy the message',
    hoCopyLink: 'Copy the link',
    hoCopied: 'Copied.',
    hoManual: 'Select the text and copy it with your keyboard.',
    hoResend: 'Send it again',
    hoWhatHappens: 'She opens the link, chooses her own password and goes straight into her first lesson. You never see that password, and there is nothing for her to install.',
    hoValid: 'Valid until',
    hoClose: 'Close',

    /* --- what the clinic keeps --- */
    keepTitle: 'What this clinic keeps',
    keepLead: 'The programme ends. These do not. Everything your team writes inside it stays in the clinic and stays readable.',
    keepConsults: 'recorded consultations',
    keepDocs: 'consultation documents',
    keepJournal: 'field journal entries',
    keepConsultsWhat: 'Every phase, every choice, the words used, and the client’s state at that exact moment.',
    keepDocsWhat: 'Intake canvases, emotional-driver maps, recommendation builders and follow-up plans, as your team wrote them.',
    keepJournalWhat: 'What actually happened when the method left the screen and went into a real room.',
    keepEmpty: 'This fills as your team practises, and nothing is removed when the programme ends.',
    keepOpenEvidence: 'Read the consultations',
    keepOpenJournal: 'Read the field journal',
    cmpKeepNote: 'The Toolkit documents you wrote inside this consultation are yours to keep. They are already in your materials, in your own words.'
  },
  es: {
    productName: 'Sistema de Formación en Consulta MIRROR',
    productShort: 'Sistema de Formación en Consulta',
    signIn: 'Iniciar sesión', enter: 'Entrar', email: 'Correo electrónico', password: 'Contraseña',
    hint: 'Elige cómo entras y usa la cuenta que te ha dado tu clínica.',
    hintPrac: 'Entra con la cuenta que te ha dado tu clínica.',
    hintMgr: 'Entra con la cuenta de dirección de tu clínica.',
    practitionerLogin: 'Acceso profesional', practitionerLoginD: 'Aprender y practicar consultas',
    managerLogin: 'Acceso de dirección', managerLoginD: 'Formar al equipo con lo que practica',
    signFoot: 'Una clínica, un equipo, un método.',
    practitioner: 'Profesional', practitionerD: 'Aprender y practicar',
    manager: 'Dirección de clínica', managerD: 'Formar al equipo',

    journey: 'Mi camino MIRROR',
    welcomeBack: 'Bienvenida de nuevo', welcomeFirst: 'Bienvenida',
    journeyLead: 'Tu formación es una consulta practicada bien, fase a fase, hasta que se sostiene con una clienta real.',
    enginesTitle: 'Los cinco motores',
    enginesSub: 'Los motores organizan tu formación. Nunca sustituyen a las ocho fases: dicen quién gobierna cada parte de la consulta.',
    spineTitle: 'Las ocho fases de una consulta',
    spineSub: 'Cada consulta que practicas recorre esta columna, en este orden. No se salta nada.',
    spineNotStarted: 'Todavía no has abierto una consulta, así que la columna te muestra el camino entero antes de recorrerlo.',
    youAreHere: 'Estás aquí',
    objectiveTitle: 'Objetivo de aprendizaje actual',
    objectiveNow: 'Esto es en lo que estás trabajando ahora.',
    yourCase: 'Tu consulta',
    startSofia: 'Empezar la consulta de Sofia', continueSofia: 'Continuar la consulta de Sofia',
    sofiaNotStarted: 'Todavía no has abierto esta consulta. Empieza en la Fase 1, Preparación, antes de que Sofia entre.',
    phaseOf: 'Fase', ofEight: 'de 8',
    inProgressAt: 'En curso',
    academyProgress: 'Tu progreso en la Academia',
    lessonsCompleted: 'lecciones completadas', modulesReady: 'módulos disponibles', lessonsInPlan: 'lecciones en el plan',
    openLesson: 'Abrir la lección',
    ownsPhase: 'Gobierna la Fase', ownsPhases: 'Gobierna las Fases', secondaryOn: 'Secundario en la Fase',
    acrossAll: 'Transversal a las ocho fases',
    academySub: 'Las lecciones que sostienen la consulta.',
    keepLearning: 'Abrir el plan de estudios',
    fieldAssignment: 'Tarea de campo',
    noAssignment: 'No hay ninguna tarea de campo abierta. Se abre una cada vez que terminas un módulo.',
    minutesPlan: 'previstos',

    stepSignal: 'La señal que te da',
    stepNotice: 'Qué hay que notar',
    stepDecision: 'Tu decisión',
    stepChanged: 'Qué ha cambiado en ella de verdad',
    stepWhy: 'Por qué, en términos MIRROR',
    stepToolkit: 'El Toolkit que operas ahora',
    stepNext: 'La siguiente fase',
    stepDone: 'Decisión registrada',
    engineLabel: 'Motor', phaseLabelWord: 'Fase canónica', toolkitLabel: 'Toolkit en juego',
    noToolkitHere: 'Ninguno en esta fase',
    yourChoice: 'Lo que has elegido', herWords: 'Las palabras que has usado',
    nothingYet: 'Todavía no ha cambiado nada. Su estado se mueve en cuanto decides.',
    nothingDisclosed: 'Todavía no ha revelado nada. Lo que sigue guardando está abajo.',
    stateNow: 'Cómo está ella ahora', changedNow: 'Ha cambiado ahora',
    nextPhaseIs: 'Siguiente',
    consultationEnds: 'Esta es la última fase antes de derivar el resultado.',

    /* --- la biblioteca de casos --- */
    libTitle: 'La biblioteca de casos',
    libSub: 'Nueve consultas completas. Cada una es una persona distinta con un motivo distinto para ponerlo difícil, y el resultado se deriva de su estado; nunca lo eliges tú.',
    libTrack: 'Qué entrena',
    libTeaches: 'Qué entrena este caso',
    libOpening: 'Cómo entra ella',
    libOpeningTitle: 'Lee el número de apertura antes de elegir un caso',
    libOpeningNote: 'La disposición es lo que aceptaría antes de que hayas hecho nada; no es lo que cree. Marta abre en 65 porque dos años siendo una clienta fácil y satisfecha le han enseñado a decir que sí sin pensarlo; Teresa abre en 30 porque ha decidido averiguar quién eres antes de darte nada. El número alto es el que más esconde: puede caer mucho más, no se apoya en nada que tú hayas construido y hace que las preguntas importantes parezcan innecesarias. Lee el número de apertura como la distancia que ella puede caer, no como la distancia que tú ya has recorrido.',
    libPosture: 'Postura al entrar',
    libHolding: 'cosas que no ha contado',
    libHolding1: 'cosa que no ha contado',
    libOf100: 'de disposición al entrar',
    libThresholdShort: '70 = el umbral del SÍ',
    libHistory: 'Tu historial con ella',
    libNotStarted: 'Sin empezar',
    libAtPhase: 'En curso · Fase',
    libCompletedAs: 'Completada —',
    libAgain: 'Practicarla otra vez',
    libPaths: 'Dónde termina cada camino de decisiones',
    libPathsNote: 'Contado, no estimado: se han enumerado todas las combinaciones de decisiones de este caso con todos los artefactos de Toolkit exigidos válidos.',
    libHardest: 'De los más difíciles de llevar a un SÍ',
    libPathsOf: 'de',
    libPathsEnd: 'caminos de decisión terminan en reserva: uno de cada',
    libHardestNote: 'Los tres casos en los que menos caminos de decisión terminan en una reserva.',
    libAll: 'Los nueve',
    libShow: 'Ver',
    libCount: 'casos',
    libCount1: 'caso',
    outYes: 'SÍ', outDefer: 'APLAZAR', outNo: 'NO',

    /* --- itinerarios: qué entrena cada grupo de casos --- */
    trDisclosure: 'Revelación',
    trDisclosureSub: 'Lo que ha decidido no contar',
    trDisclosureNote: 'Las dos llegan con un motivo que han decidido guardarse, y ninguna lo va a entregar porque se lo pidas.',
    trIdentity: 'Identidad y miedo',
    trIdentitySub: 'Lo que el tratamiento diría de ella',
    trIdentityNote: 'Aquí el riesgo no es el resultado. Es lo que hacerse ese resultado diría sobre la clase de mujer que es.',
    trPrice: 'Precio y valor',
    trPriceSub: 'La cifra, y qué dice de tu criterio sostenerla',
    trPriceNote: 'Dos consultas de cuatro cifras que se pierden en direcciones opuestas: una clienta acepta con demasiada facilidad, la otra está comprobando si tu precio es de verdad.',
    trObjection: 'Estructura de la objeción',
    trObjectionSub: 'De qué está hecha en realidad la objeción',
    trObjectionNote: 'Un solo caso, porque es el más puro: una objeción con nombre, razonable y completamente real, puesta delante de la verdadera.',
    trRelationship: 'La relación en el tiempo',
    trRelationshipSub: 'Antes del primer sí, y mucho después',
    trRelationshipNote: 'La consulta que hoy no debería cerrarse, y la clienta que lleva dos años cerrando con facilidad y está a punto de marcharse.',

    /* --- la consulta: reacción, movimiento, mapa --- */
    stepReaction: 'Lo que dice a continuación',
    afterYouSaid: 'Después de que dijeras',
    reactionHead: 'Su reacción',
    yourWords: 'Lo que dirías tú',
    stateBefore: 'Antes', stateAfter: 'Después',
    thrNote: 'La marca del 70 es la disposición que el Motor de Decisión exige antes de que un SÍ sea posible.',
    trustMoveTitle: 'Movimiento de la confianza',
    trustLegend: 'Cada etapa se dibuja de −3 a +3. El círculo marca dónde estaba esa etapa antes de tu última decisión.',
    objectionRow: 'Intensidad de la objeción',
    justDisclosed: 'Acaba de contarte',
    postureRow: 'Postura',
    nothingMoved: 'Nada en su registro se ha movido.',
    mapTitle: 'El mapa de la consulta',
    mapSub: 'Cada fase, la decisión que tomaste en ella y qué se movió en ella por eso.',
    mapSubMgr: 'Cada fase, la decisión que tomó ella y qué se movió en la clienta por eso.',
    mapNotReached: 'Sin llegar',
    mapHere: 'Estás decidiendo aquí',
    willShort: 'disposición',
    stateHead: 'Cómo está ella ahora',
    stateExpand: 'Abrir su estado completo',

    fbSignal: 'Señal detectada', fbInterpret: 'Qué interpreta MIRROR',
    fbEvidence: 'Evidencia de', fbPrinciple: 'Principio implicado',
    fbWhy: 'Por qué tu acción ayudó o perjudicó', fbChangedState: 'Qué ha cambiado en su estado',
    fbNext: 'Qué probar la próxima vez',

    errLoad: 'Esto no se ha cargado. Comprueba tu conexión e inténtalo otra vez.',
    errSignIn: 'Ese correo y esa contraseña no coinciden con ninguna cuenta. Compruébalos e inténtalo otra vez.',
    errSignInOff: 'No hemos podido abrir tu Academia ahora mismo. Inténtalo en un momento.',
    errSave: 'Esto no se ha guardado. Inténtalo en un momento.',
    errSession: 'Se ha cerrado tu sesión. Vuelve a entrar para seguir.',
    pitch: 'Practica la consulta, no la presentación.',
    sub: 'Diez módulos, lecciones interactivas y consultas simuladas completas, sobre el Método MIRROR de The Beauty Sales Secrets.',
    tabs: { start: 'Empieza aquí', home: 'Mi camino', curriculum: 'Plan de estudios', practice: 'Consultas', resources: 'Materiales', journal: 'Diario de campo', progress: 'Tu desarrollo', manager: 'Formación del equipo', clinic: 'Clínica' },
    signOut: 'Salir',
    obStep: 'Pregunta {n} de {of}',
    obNext: 'Continuar', obFinish: 'Listo', obSkip: 'Saltar esto',
    fwStart: 'Conócela ahora', fwLater: 'Ahora no',
    fwGoal: 'Lo que dijiste que quieres conseguir:',
    mdTitle: 'Esta semana en tu clínica',
    mdPractised: 'profesionales han practicado', mdConsults: 'consultas',
    mdCompleted: 'completadas', mdLessons: 'lecciones terminadas',
    mdNotYet: 'No ha practicado esta semana',
    mdAttention: 'Qué necesita atención',
    mdExercise: 'Ejercicio de equipo sugerido',
    mdPractice: 'Práctica sugerida',
    mdThenRead: 'Después, en la Academia',
    mdDetail: 'Abrir la vista completa de formación',
    mdBasis: 'De dónde sale esto',
    welcome: 'Bienvenida de nuevo', welcomeNew: 'Bienvenida a la Academia',
    heroSub: 'No estás aquí para aprender un guion. Estás aquí para practicar los momentos en los que realmente se ganan y se pierden las consultas.',
    modules: 'módulos', lessons: 'lecciones', minutes: 'minutos de formación', cases: 'consultas completas',
    continueLesson: 'Continúa donde lo dejaste', start: 'Empezar', resume: 'Continuar', review: 'Repasar',
    openAssignment: 'Tienes una tarea abierta', whatHappened: '¿Qué pasó cuando lo probaste?',
    answer: 'Escribe qué pasó', save: 'Guardar', saved: 'Guardado', saving: 'Guardando…',
    curriculumTitle: 'El plan de estudios', curriculumSub: 'Diez módulos. Cada uno termina con algo que te llevas a una consulta real.',
    inProduction: 'En producción', available: 'Disponible', completed: 'Completado',
    lessonsIn: 'lecciones', lessonN: 'Lección', moduleN: 'Módulo', min: 'min', source: 'Fuente',
    back: 'Volver', next: 'Continuar', finish: 'Terminar la lección', lessonDone: 'Lección completada',
    checkAnswer: 'Comprobar', tryAgain: 'Inténtalo otra vez', showModel: 'Ver la respuesta modelo', yourAnswer: 'Tu respuesta',
    wait: 'Espera…', waiting: 'No digas nada', holdSilence: 'Sostén el silencio',
    reveal: 'Revelar', whatDidYouNotice: '¿Qué has notado?', chooseOne: 'Elige una',
    caseCol: 'Caso', consultMap: 'La consulta, fase a fase',
    consultMapNote: 'Cada punto es una decisión tuya. Verde se sostuvo, rojo no, y la línea punteada es el umbral de disposición contra el que se deriva el resultado.',
    consultMapNoteMgr: 'Cada punto es una decisión suya. Verde se sostuvo, rojo no, y la línea punteada es el umbral de disposición contra el que se deriva el resultado.',
    decisionsMade: 'decisiones registradas', toolkitDocs: 'documentos de Toolkit',
    allClear: 'Nada más se repite esta semana.', practiceTitle: 'Consultas', practiceSub: 'Consultas simuladas completas. La clienta recuerda lo que hiciste, y el resultado se deriva de su estado; nunca lo eliges tú.',
    beginCase: 'Empezar la consulta', continueCase: 'Continuar la consulta', restart: 'Empezar de nuevo',
    caseLocked: 'En producción', clientState: 'Estado de la clienta', trust: 'Etapas de confianza',
    willingness: 'Disposición a avanzar', posture: 'Postura', withheld: 'Sigue sin revelar', disclosed: 'Revelado',
    yourMove: 'Tu decisión', whatSheSays: 'Lo que dice la clienta', whatShifted: 'Qué ha cambiado',
    toolkitTitle: 'Toolkit', submit: 'Enviar', advance: 'Continuar a la siguiente fase',
    gateClosed: 'Esta fase no está terminada', outcomeTitle: 'Resultado derivado',
    followUp: 'Plan de seguimiento', stopCondition: 'Condición de cierre', agreedDate: 'Momento de seguimiento acordado',
    closureNote: 'Nota de cierre', completePlan: 'Completa el plan', debrief: 'Informe de la consulta',
    libMore: 'Ver consultas anteriores',
    retryTag: 'Vuelve a intentarlo, ahora',
    retryNote: 'La misma competencia, otra clienta, con el principio todavía delante.',
    retryLanded: 'Esa es la competencia. ',
    pvTitle: 'De dónde viene esto', pvChapter: 'Capítulo', pvCanonical: 'Arquitectura MIRROR',
    pvBook: 'El libro', pvPhase: 'Fase canónica', pvStage: 'Etapa de Confianza que forma',
    pvStandard: 'Estándar de Confianza', pvStandard0: 'Estándar', pvDuty: 'Deber Ético', pvDuty0: 'Deber',
    pvToolkit: 'Toolkit', pvNoToolkit: 'Ninguno en esta lección',
    ax_clientResponse: 'Cambia lo que ella dice a continuación',
    ax_disclosure: 'Revela algo que no habría contado',
    ax_trust: 'Se sostiene una Etapa de Confianza que se habría caído',
    ax_objection: 'La objeción llega de otra manera',
    ax_recommendation: 'Ahora se puede construir la recomendación',
    ax_continuation: 'Cambia lo que ocurre después de la consulta',
    turningPoints: 'Puntos de inflexión', journalTitle: 'Diario de campo',
    journalSub: 'Qué pasó cuando usaste el método con una clienta real. Es el único registro de que la Academia sale de la pantalla.',
    open: 'Abierta', answered: 'Respondida',
    progressTitle: 'Tu desarrollo', progressSub: 'Aquí no se califica. Lo que se registra es lo que hiciste y lo que produjo.',
    mgrTitle: 'Formación del equipo', mgrSub: 'Siete preguntas, respondidas solo desde consultas registradas.',
    whoPractising: 'Quién está practicando', whereLost: 'Dónde pierde confianza el equipo', whatRepeats: 'Qué se repite', coachWeek: 'Qué formar esta semana',
    noData: 'Todavía no hay registros.', consultations: 'consultas', lessonsDone: 'lecciones', lastActive: 'Última actividad', assignments: 'tareas',
    basedOn: 'Basado en el Método MIRROR de The Beauty Sales Secrets',
    endorsed: 'Avalado por Clinic Scale System',
    learn: 'Aprende', see: 'Observa', choose: 'Decide', experience: 'Vive', reflect: 'Reflexiona', apply: 'Aplica',
    fromBook: 'De The Beauty Sales Secrets', principle: 'Principio MIRROR',
    notBuilt: 'Esta lección está en producción', assignmentFor: 'Tarea —',
    noticed: 'Qué has notado', missed: 'Qué se te ha escapado', did: 'Qué has hecho',
    interpreted: 'Cómo lo ha interpretado la clienta', changed: 'Qué ha cambiado', matters: 'Por qué importa',
    better: 'Mejor formulación', tryNext: 'Prueba esto la próxima vez',

    clinicTitle: 'Tu clínica', clinicSub: 'El plan, las plazas que incluye y las profesionales que las ocupan.',
    planTitle: 'El plan', planName: 'Founding Pilot', planPrice: '490 €', priceNote: 'pago único, una clínica',
    planIncludes: 'Una clínica, hasta cinco profesionales, la Academia completa y los nueve casos de consulta.',
    seatsInUse: 'plazas en uso', seatsRow: 'Plazas en uso', seatsOf: 'de', seatsFree: 'libres',
    clinicOpened: 'Clínica creada', activeSince: 'Activa desde', paymentTitle: 'Pago',
    accountsRow: 'Cuentas en el plan', openInvitesRow: 'Invitaciones abiertas',
    payPending: 'Pago todavía no registrado',
    payPendingNote: 'Tu plaza está reservada y la Academia está abierta. El piloto se abona por transferencia, así que el pago se concilia a mano con la referencia de abajo.',
    payActive: 'Activa', payPaidNote: 'Pago registrado. No queda nada pendiente del piloto.',
    payWaivedNote: 'Exento por acuerdo. No hay nada que pagar por el piloto.',
    payLapsed: 'Pago vencido',
    payLapsedNote: 'El periodo del piloto ha pasado sin que se registre el pago. Habla con tu contacto en Clinic Scale System.',
    invoiceRef: 'Referencia de factura', noRef: 'Sin referencia emitida',
    peopleTitle: 'Profesionales', peopleSub: 'Quién ocupa cada plaza y qué ha completado.',
    noPeople: 'Todavía no hay profesionales con cuenta. La invitación de abajo es la forma de que entre la primera.',
    inviteTitle: 'Invitar a una profesional',
    inviteSub: 'Tú creas la invitación; ella elige su propia contraseña. Ni tú ni nadie más llega a verla.',
    inviteName: 'Su nombre', inviteEmail: 'Su correo electrónico',
    inviteSend: 'Crear la invitación', inviteWorking: 'Creando…',
    inviteLinkTitle: 'Su enlace de invitación',
    inviteNoEmail: 'Las invitaciones no se envían por correo automáticamente. Copia el enlace y envíaselo tú misma. Sirve una sola vez, solo para ella, y caduca a los catorce días.',
    copyLink: 'Copiar enlace', copied: 'Copiado', copyManual: 'No se ha podido copiar. Selecciona el enlace y cópialo a mano.',
    inviteFields: 'Hacen falta un nombre y un correo electrónico.',
    inviteFailed: 'No se ha podido crear la invitación.',
    invitesTitle: 'Invitaciones pendientes y caducadas',
    invitesSub: 'Una invitación reserva una plaza hasta que se acepta o caduca.',
    noInvites: 'No hay invitaciones abiertas.',
    stOpen: 'Pendiente', stAccepted: 'Aceptada', stExpired: 'Caducada',
    sentOn: 'Enviada', expiresOn: 'Caduca', acceptedOn: 'Se unió', seatsNone: 'Todas las plazas de este plan están ocupadas.',
    noInvitesBody: 'Cada invitación que crees se queda aquí hasta que ella la acepte o caduque, con el mensaje que la llevaba, para que puedas reenviarla sin andar buscando el enlace.',
    pplNotStarted: 'Todavía no ha empezado',
    noPeopleT: 'Todavía no hay nadie en ninguna plaza',
    pplLast: 'Última actividad',

    /* --- alguien del equipo no puede entrar -------------------------------
       Se le ha olvidado la contraseña. La dirección genera un enlace y se lo
       pasa, igual que le pasó la invitación, y nunca ve la contraseña. Nada de
       lo que ella tenga registrado se toca. */
    pwAsk: 'No puede entrar',
    pwAgain: 'Generar otro enlace',
    pwWorking: 'Generando…',
    pwFor: 'Enlace de contraseña nueva para',
    pwLead: 'Escrito para ti, en su idioma. Pégalo donde ya escribes: correo, un mensaje, una nota en el mostrador.',
    pwKnowTitle: 'Qué hace esto y qué no hace',
    pwFactOnce: 'El enlace funciona una sola vez, y solo para ella.',
    pwFactExpires: 'Caduca a las 48 horas. A partir de ahí no sirve y generas otro.',
    pwFactNever: 'Tú nunca ves la contraseña nueva: la elige ella, en el enlace.',
    pwFactKeeps: 'No se pierde nada de lo que tenga registrado: sus lecciones, sus consultas, los documentos que escribió dentro de ellas y su diario de campo se quedan tal cual.',
    pwFactRetires: 'Cualquier enlace anterior suyo deja de funcionar en cuanto generas este.',
    pwSignedOut: 'Se le cerrará la sesión allí donde la tuviera abierta. Así es también como se recupera una cuenta compartida.',
    pwFailed: 'Ahora mismo no se ha podido generar el enlace. Inténtalo en un momento.',
    pwGuideTitle: 'Aquí no hay enlace',
    pwGuideSelf: 'La dirección no puede cambiar su propia contraseña desde aquí: esa es la regla que evita que una clínica se quede fuera de su propia cuenta. Habla con tu contacto en Clinic Scale System y se resuelve en un momento.',
    pwGuideNotHere: 'Ella ya no está en el plan de esta clínica, así que aquí no hay cuenta para la que generar un enlace. Si debería estar, invítala abajo: una invitación nueva crea una cuenta nueva, no reabre la anterior.',
    pwGuidePick: 'Elige quién no puede entrar.',
    pwGuideOther: 'No se ha podido generar un enlace para ella. Su cuenta no ha cambiado y puede seguir entrando con la contraseña que tiene. Si de verdad no puede, habla con tu contacto en Clinic Scale System.',

    /* --- los estados que nadie fotografía: vacío, cargando, fallido ------- */
    loadingWord: 'Cargando',
    failTitle: 'Esto no se ha cargado',
    failBody: 'Comprueba tu conexión e inténtalo otra vez. No afecta a nada de lo que tengas registrado.',
    blankJnK: 'Todavía sin registrar',
    blankJnTitle: 'Todavía no ha salido nada de la pantalla',
    blankJnBody: 'Cada vez que terminas un módulo se abre una tarea de campo que te pregunta qué pasó cuando usaste ese módulo con una clienta real. Tus respuestas se reúnen aquí, con tus palabras, junto a la tarea que las pidió.',
    blankJnGo: 'Abrir el temario',
    blankConsK: 'Todavía sin registrar',
    blankConsTitle: 'Todavía no has abierto ninguna consulta',
    blankConsBody: 'Te esperan nueve consultas completas, cada una con una mujer distinta y un motivo distinto para ponértelo difícil. La primera empieza en la Fase 1, Preparación, antes de que Sofía entre en la sala.',
    blankConsGo: 'Abrir la biblioteca de casos',
    blankMgrConsTitle: 'Todavía no se ha registrado ninguna consulta',
    blankMgrConsBody: 'En cuanto alguien de tu equipo termine una, aparece aquí entera: cada decisión que tomó, lo que le costó o le dio, el estado de la clienta en ese momento exacto y los documentos escritos dentro de ella.',
    blankMgrConsGo: 'Ir a la clínica',
    blankAssignTitle: 'No hay ninguna tarea de campo abierta',
    blankAssignBody: 'Se abre una cada vez que terminas un módulo, y es la parte del método que ocurre en una sala de verdad y no en esta pantalla.',

    /* --- el plan de seguimiento, con palabras y no con nombres de campo --- */
    depthCheckTitle: 'Comprobación de Profundidad',
    tkKept: 'Lo que escribas aquí se guarda, palabra por palabra, en tus materiales.',
    tkNotYet: 'Todavía no está lo bastante completo para avanzar',
    outcomeBasis: 'De dónde sale este resultado',
    tkLater: 'Aquí no hay nada que rellenar. Este Toolkit se escribe a partir del resultado de la consulta, y lo completas en la pantalla que recoge su respuesta.',
    statComplete: 'completadas',

    /* --- la entrada: se muestra una vez, al entrar por primera vez -------- */
    obKicker: 'Antes de empezar',
    obOf: 'de',
    obSkip: 'Saltar esto',
    obNextStep: 'Continuar',
    obT1: 'Ella está decidiendo algo distinto de lo que ha venido a pedir',
    obB1: 'Una mujer pide cita para un tratamiento y se pasa la consulta decidiendo si contigo se puede ser sincera. MIRROR es el método para esa segunda conversación, la que de verdad decide el resultado.',
    obSaid: '«Solo quiero parecer menos cansada.»',
    obLayerA: 'Lo que ha pedido',
    obLayerB: 'Lo que quiere de verdad',
    obLayerC: 'Lo que no dirá al principio',
    obDown: 'Baja',
    obT2: 'Lo aprendes, lo practicas y después lo sacas de la sala',
    obB2: 'La Academia enseña una fase. Un caso de consulta te hace practicarla frente a una clienta que recuerda todo lo que hiciste. El diario de campo es donde escribes qué pasó al usarlo con una clienta real. Aquí no se califica nada, y el resultado nunca lo eliges tú.',
    obLoopA: 'Lección de la Academia',
    obLoopB: 'Caso de consulta',
    obLoopC: 'Clienta real',
    obLoopBack: 'Lo ocurrido vuelve como tarea de campo',
    obT3: 'Toda consulta recorre las mismas ocho fases',
    obB3: 'Esta es la columna. Los módulos se enganchan a ella, los casos la recorren y el estado de la clienta pasa de una fase a la siguiente: por eso un atajo en la Fase 3 te sigue costando en la Fase 7.',
    obT4: 'Empieza aquí',
    obB4: 'Una lección lleva menos de diez minutos. Una consulta, unos quince. Cualquiera de las dos es un comienzo real; la lección es la más tranquila.',
    obStartLesson: 'Abrir la primera lección',
    obStartCase: 'Abrir una consulta',
    obDone: 'Empezar',
    obMT1: 'Todo esto sale de lo que tu equipo hizo realmente',
    obMB1: 'Sin autoevaluación, sin notas, sin clasificaciones. Cada frase del centro de formación cuenta decisiones registradas y nombra qué hicieron esas decisiones a la clienta sentada delante.',
    obMScene: 'Una cosa para formar',
    obMSceneNote: 'Decisiones registradas, por profesional y por caso',
    obMT2: 'Seis preguntas, respondidas en una sola pantalla',
    obMB2: 'Quién practica, qué conducta se repite, dónde se rompe la confianza, qué formar a continuación, la evidencia del caso —la consulta de una profesional abierta decisión a decisión— y, al final, la lección y el caso a los que mandar de vuelta a cada persona.',
    obMGo: 'Abrir el centro de formación',

    /* --- el plan de estudios como progresión ------------------------------ */
    curMapTitle: 'La progresión',
    curMapSub: 'Diez módulos en el orden en que los aprendes, las ocho fases en el orden en que las recorre una consulta, y una línea de cada módulo a la fase para la que sirve. Las líneas se cruzan porque los dos órdenes no coinciden.',
    curAscent: 'El orden en que lo aprendes',
    curRail: 'El orden en que va la consulta',
    curHere: 'Siguiente',
    curTeaches: 'Enseña la fase',
    curYouAre: 'Dónde estás',
    curDoneN: 'módulos completados',
    curNextIs: 'Siguiente módulo',
    curNoneOpen: 'Todos los módulos están completados. No queda ninguno pendiente.',
    curStart: 'Abrirlo',
    stages: ['Psicología', 'Preparación', 'Descubrimiento', 'Comprensión', 'Recomendación',
             'Valor', 'Objeciones', 'Decisión', 'Continuidad', 'Maestría'],

    /* --- la biblioteca que se queda --------------------------------------- */
    resTitle: 'Tus materiales',
    resSub: 'Todo lo que has escrito y todo lo que has trabajado, guardado donde puedes volver a leerlo. Esto es tuyo: no se reinicia, y es lo que te llevas a una consulta real.',
    resTk: 'Documentos de Toolkit',
    resTkSub: 'Los artefactos completados dentro de una consulta, tal como son: documentos.',
    resTkEmpty: 'Esto se llena cuando haces una consulta. Cada fase te entrega un Toolkit —un lienzo de admisión, un mapa de motores emocionales, un constructor de recomendación— y el que completas queda aquí, con todo lo escrito dentro.',
    resJn: 'Diario de campo',
    resJnSub: 'Qué pasó al usar el método con una clienta real, junto a la tarea de campo que lo preguntó.',
    resJnEmpty: 'Cada vez que terminas un módulo se abre una tarea de campo, y te pregunta qué pasó al usar ese módulo con una clienta real. Tus respuestas se recogen aquí.',
    resBk: 'Del libro',
    resBkSub: 'Los pasajes trabajados en las lecciones, con su referencia de capítulo, reunidos como una sola referencia.',
    resBkEmpty: 'Las lecciones traen pasajes de The Beauty Sales Secrets con el capítulo del que procede cada uno. A medida que completas lecciones, los pasajes trabajados se reúnen aquí, para releerlos sin volver a entrar en la lección.',
    resWrittenIn: 'Escrito durante',
    resFrom: 'De',
    resAnswered: 'Respondida',
    resOpenDoc: 'Leerlo',
    resCloseDoc: 'Cerrar',
    resItems: 'documentos',
    resItem: 'documento',
    resNotes: 'pasajes',
    resNote: 'pasaje',
    resEntries: 'entradas',
    resEntry: 'entrada',
    resAssignment: 'La tarea',
    resYourAnswer: 'Lo que escribiste',
    resLoading: 'Reuniendo tus materiales…',
    resTkEmptyT: 'Todavía no hay ningún documento de Toolkit',
    resJnEmptyT: 'Todavía no has escrito ninguna respuesta',
    resBkEmptyT: 'Todavía no has trabajado ningún pasaje',

    /* --- cierre y continuidad ---------------------------------------------- */
    cmpLesson: 'Lección completada',
    cmpModule: 'Módulo completado',
    cmpAll: 'Los diez módulos completados',
    cmpCase: 'Consulta completada',
    cmpNowCan: 'Qué puedes hacer ahora y antes no podías',
    cmpNextThing: 'Lo siguiente',
    cmpThisWeek: 'Llévate esto a una consulta real esta semana',
    cmpContinue: 'Continuar',
    cmpBackToModule: 'Volver al módulo',
    cmpOpenNext: 'Abrir la siguiente lección',
    cmpOpenNextModule: 'Abrir el siguiente módulo',
    cmpOpenCase: 'Practicarlo en una consulta',
    cmpOpenJournal: 'Escribir qué pasó',
    cmpModuleBody: 'Este módulo está terminado, y queda abierta una tarea de campo asociada. Esa tarea es la única parte de la Academia que sale de la pantalla.',
    cmpAllBody: 'Sesenta lecciones, quinientos sesenta y dos minutos de formación, y cada una de las ocho fases enseñada por al menos un módulo. Aquí no hay ninguna titulación ni se ha calificado nada. Lo único que dice es esto: has recorrido el método entero una vez.',
    cmpAllNext: 'Queda la parte que no termina: los nueve casos de consulta, practicados hasta que las fases se sostengan sin pensarlas, y el diario de campo, donde el método deja de ser formación.',
    cmpHonest: 'Un registro del trabajo hecho, no una valoración de cómo se hizo.',
    cmpNoneEstablished: 'El registro todavía no sostiene una afirmación firme sobre ninguna competencia concreta en esta consulta. Lo que sí guarda es cada decisión que tomaste y qué hizo cada una en ella.',
    cmpCaseBody: 'El resultado se derivó de su estado, no se eligió. Lo siguiente es lo que esta consulta demostró que sabes hacer.',
    cmpEvidence: 'Qué sostiene el registro',
    cmpNoNext: 'No queda nada en cola detrás de esta.',

    /* --- las cinco preguntas ----------------------------------------------- */
    mgrSub5: 'Cinco preguntas, respondidas solo desde consultas registradas.',
    qWho: '¿Quién está practicando?',
    qRepeats: '¿Qué conducta se repite?',
    qTrust: '¿Dónde se rompe la confianza?',
    qCoach: '¿Qué debo formar a continuación?',
    qEvidence: '¿Qué pasó en la evidencia real del caso?',
    qEvidenceSub: 'Abre una consulta y léela como la vivió la profesional: cada decisión, el estado de la clienta en ese momento, los documentos escritos dentro y el resultado que el motor derivó de todo ello.',
    qNoneWho: 'Todavía nadie ha completado una lección ni una consulta. La primera actividad registrada responde a esto.',
    qNoneRepeats: 'Todavía no se repite ninguna conducta. Un patrón aparece aquí en cuanto el mismo tipo de decisión se toma más de una vez.',
    qNoneTrust: 'Todavía ninguna fase ha producido una caída en el registro de confianza. Esto se llena con consultas registradas.',
    qNoneCoach: 'Todavía no hay nada que formar desde la evidencia. Esto se llena en cuanto se registran consultas.',
    qNoneEvidence: 'Todavía no hay ninguna consulta registrada. En cuanto la haya, se abre aquí decisión a decisión.',
    evOpen: 'Abrir la evidencia',
    evTitle: 'Evidencia del caso',
    evDecisions: 'Decisión a decisión',
    evAtPhase: 'Fase',
    evChose: 'Qué eligió',
    evSaid: 'Las palabras que usó',
    evClientAt: 'La clienta en ese momento',
    evMoved: 'Qué se movió',
    evVerdict: 'Lectura MIRROR',
    evArtifacts: 'Lo que escribió',
    evArtifactsSub: 'Los documentos de Toolkit completados dentro de esta consulta, tal cual se enviaron.',
    evNoArtifacts: 'En esta consulta no se completó ningún documento de Toolkit.',
    evOutcome: 'El resultado derivado',
    evRationale: 'Por qué se derivó así',
    evNotDerived: 'Esta consulta todavía no ha llegado a un resultado.',
    evAbandoned: 'Abierta, sin ninguna decisión registrada',
    evWhoWhen: 'Profesional',
    evNothingMoved: 'En esta fase no se movió nada en su registro.',
    evDegraded: 'Tomada sin la información necesaria',
    evFollowUp: 'El plan de seguimiento que escribió',
    evBack: 'Volver al centro de formación',
    evSeeAll: 'Todas las consultas registradas',

    /* --- la lección, como algo hecho -------------------------------------- */
    lcModule: 'Módulo',
    lcOf: 'de',
    lcTeaches: 'La fase que enseña',
    lcGives: 'Con qué te quedas al terminarla',
    lcRead: 'Duración',
    lcStep: 'Paso',
    lcProgress: 'Por dónde vas en la lección',
    lcBegin: 'Empezar la lección',
    lcFrom: 'Sale de',
    insCite: 'El pasaje',
    insRead: 'Qué significa esto en la sala',
    retrySecond: 'Segundo intento',
    retryWhy: 'A nadie le sale una competencia porque le digan que ha fallado. Esta es la misma competencia, con otra clienta, ahora mismo.',
    cmpKick: 'Dos maneras de decir lo mismo',
    cmpYouSay: 'Lo que dices tú',
    cmpHer: 'Qué puede hacer ella con eso',
    cmpPending: 'Todavía sin responder',
    cmpOpens: 'A esta puede responder con sinceridad.',
    cmpCloses: 'A esta puede responder con educación, y ya está.',
    cmpChosen: 'Has elegido esta',
    cmpReading: 'La diferencia entre las dos',

    /* --- la sexta pregunta ------------------------------------------------- */
    mgrSub6: 'Seis preguntas, respondidas solo desde consultas registradas.',
    qPrescribe: '¿Qué lección y qué caso debería repetir esta persona?',
    prescribeCap: 'A qué mandar de vuelta a cada persona',
    qPrescribeSub: 'Una indicación por profesional, leída de sus propias consultas registradas. Aquí no se califica a nadie, a nadie se la pone por encima de nadie y cada ficha habla de una sola persona.',
    qNonePrescribe: 'Todavía no hay nadie ocupando plaza, así que no hay nada que indicar. Esto se llena en cuanto las profesionales tengan cuenta.',
    rxLesson: 'La lección que repetir',
    rxCase: 'El caso que repetir',
    rxWhy: 'Por qué este',
    rxEvidence: 'Qué muestra su propio registro',
    rxConversation: 'La conversación que tener con ella',
    rxNoLesson: 'El registro todavía no señala ningún módulo.',
    rxNoCase: 'El registro todavía no señala ningún caso.',
    rxNotStarted: 'Todavía sin registro',
    rxOpenModule: 'Abrir el módulo',
    rxBasis: 'Leído de sus propias decisiones',

    /* --- qué te da un módulo ------------------------------------------------ */
    outcomeTitle2: 'Lo que vas a saber hacer',
    outcomeCard: 'Al terminar este módulo',
    outcomeLesson: 'La competencia a la que suma esta lección',

    /* --- el razonamiento que hay debajo de la lección ----------------------- */
    dpBefore: 'Antes de empezar',
    dpWhy: 'Por qué una buena profesional se equivoca aquí',
    dpThinking: 'Lo que ella piensa y no dice',
    dpThinkingNote: 'Esto no lo va a decir en voz alta. Todo lo que sí dice está construido alrededor de ello.',
    dpLadder: 'El mismo momento, tres formas de responderlo',
    dpLadderSub: 'Una clienta, una frase que responder. Recorre cada respuesta y lee lo que le hace a ella.',
    ldWeak: 'Floja',
    ldAverage: 'Normal',
    ldStrong: 'Fuerte',
    ldSays: 'Lo que dices',
    ldDoes: 'Lo que le hace a ella',
    ldWeakNote: 'Te cuesta algo en el momento mismo de decirlo, y normalmente se nota cómo cae.',
    ldAvgNote: 'No pasa nada malo. Justo por eso es la respuesta que da la mayoría de profesionales, y aun así te cuesta en silencio aquello por lo que habías entrado.',
    ldStrongNote: 'La misma información y los mismos cuatro minutos. Lo que cambia es lo que la frase le pide a ella.',
    ldLocked: 'Lee antes las otras dos',
    ldLockedWhy: 'La frase fuerte solo deja de parecer obvia cuando ya has notado lo que cuesta la segura.',
    ldPick: 'Elige un peldaño para escucharlo.',
    ldNotGraded: 'Esto es enseñanza, no un ejercicio. Aquí no se corrige nada ni se registra nada.',

    /* --- el arco de una lección, dibujado ----------------------------------- */
    jsConsequence: 'Consecuencia',
    jsUnderstand: 'Comprende',
    jsRetry: 'Repite',
    jrTitle: 'El arco de esta lección',
    jrNow: 'Estás aquí',
    jrMaybe: 'solo si una decisión falla',
    jrLooped: 'La lección ha vuelto un paso atrás. Has tomado la decisión otra vez con la corrección todavía delante: ese bucle es lo que un libro no te puede dar.',

    /* --- la séptima pregunta ------------------------------------------------ */
    mgrSub7: 'Siete preguntas, respondidas solo desde consultas registradas.',
    qChanged: '¿Qué cambió después de formar?',
    changedCap: 'El antes y el después de una conversación que tuviste de verdad',
    qChangedSub: 'Registra las conversaciones de formación que tienes y esto compara a cada profesional con su propio trabajo anterior en lo único que nombraste. No es una calificación, no es una tendencia y nunca pone a una profesional frente a otra.',
    cnRecord: 'Registrar una conversación de formación',
    cnRecordSub: 'Tres cosas: con quién hablaste, qué trabajaste y qué le dijiste de verdad. Lo último es lo que querrás releer.',
    cnWho: '¿Con quién hablaste?',
    cnWhoPick: 'Elige una profesional',
    cnWhat: '¿Qué trabajaste?',
    cnWhatPick: 'Elige el patrón o la fase',
    cnPatterns: 'Una conducta que se repite',
    cnPhases: 'Una fase donde se pierde la confianza',
    cnNote: '¿Qué le dijiste exactamente?',
    cnNotePh: 'Con tus palabras: la frase que usaste, no un resumen de ella.',
    cnSave: 'Registrar la conversación',
    cnSaving: 'Registrando…',
    cnSaved: 'Registrada. El antes y el después aparece aquí abajo en cuanto ella vuelva a practicar.',
    cnFromRow: 'He tenido esta conversación',
    cnNone: 'Todavía no hay ninguna conversación de formación registrada. Registra una arriba y, a partir de ahí, esta pregunta se responde sola desde sus propias consultas.',
    cnNoWho: 'Todavía no hay ninguna profesional con plaza en esta clínica, así que no hay con quién registrar una conversación.',
    cnCoachedOn: 'Lo que trabajasteis',
    cnSaidIt: 'Lo que dijiste',
    cnBefore: 'Antes de esa conversación',
    cnAfter: 'Desde esa conversación',
    cnConsults: 'consultas registradas',
    cnStTooEarly: 'Aún es pronto',
    cnStImproved: 'Ocurre menos',
    cnStWorse: 'Ocurre más',
    cnStUnchanged: 'No se ha movido nada',
    cnPhaseWord: 'Fase',
    cnWhatWeRead: 'Lo que muestra el registro',

    /* --- los primeros diez minutos (dirección de clínica) --- */
    stTitle: 'Tus primeros diez minutos',
    stLead: 'Tres cosas, en este orden. Ninguna espera a que nadie de tu equipo haya hecho nada.',
    stStepWord: 'Paso',
    stMinutes: 'minutos',
    st1Title: 'Siéntate tú en la consulta',
    st1Body: 'Un momento real de uno de los nueve casos del programa. Lees lo que dice la clienta, eliges la respuesta que darías de verdad y ves lo que le cuesta a ella, antes de pedírselo a ninguna profesional.',
    st1Cta: 'Recorrer el momento',
    st2Title: 'Trae a tu equipo',
    st2Body: 'Un enlace para cada una y un mensaje ya escrito que puedes enviar tal cual. No hay nada que instalar, ninguna contraseña que inventar y nada que configurar.',
    st2Cta: 'Añadir a una profesional',
    st3Title: 'Ten claro qué vas a leer',
    st3Body: 'Todo lo que practican vuelve a ti en frases con cifras detrás, y cada frase nombra la consulta de la que sale, para que puedas abrirla y leer tú misma la decisión.',
    st3Cta: 'Abrir el centro de formación',
    stStateDone: 'Hecho', stStateNow: 'Ahora', stStateNext: 'Después',
    stWhyHere: 'Esta página se queda. Vuelve a ella siempre que entregues el programa a alguien nuevo.',
    stArcTitle: 'Dónde está tu clínica',
    stSampleTitle: 'La forma que tiene cada respuesta',
    stSample: '«Tres de cinco profesionales pasaron al precio antes de que la clienta dijera qué estaba protegiendo. Ocurrió en cuatro de nueve consultas registradas, todas en la Fase 3.»',
    stSampleNote: 'Escrito a partir de las consultas registradas de tu propia clínica. Sin puntuaciones, sin porcentajes de capacidad y sin clasificar a una profesional frente a otra.',

    /* --- el momento de consulta --- */
    fmRoom: 'La sala',
    fmSays: 'Ella dice',
    fmBeneath: 'Lo que hay debajo',
    fmChoose: 'Elige la respuesta que darías',
    fmYouSay: 'Lo que dijiste',
    fmReading: 'La lectura MIRROR',
    fmDid: 'Lo que hiciste',
    fmPrinciple: 'El principio que hay detrás',
    fmWhy: 'Por qué ese es el veredicto',
    vd: { weak: 'FLOJA', best: 'MEJOR', harmful: 'DAÑINA' },
    fmCost: 'Lo que cuesta, en la práctica',
    fmNextTime: 'Qué hacer en su lugar la próxima vez',
    fmMoved: 'Qué le hizo a ella',
    fmWillingness: 'Disposición a continuar',
    fmPosture: 'Cómo está ahora',
    fmStill: 'Sigue sin contarte',
    fmRevealed: 'Ahora ya te ha contado',
    fmAgain: 'Probar otra respuesta',
    fmSeenEnough: 'Ya lo he visto: quiero traer a mi equipo',
    fmSkip: 'Dejarlo para luego',
    vdAligned: 'ALINEADO', vdPartial: 'PARCIALMENTE ALINEADO', vdNot: 'NO ALINEADO',

    /* --- el mismo principio, en los tratamientos que vende la clínica --- */
    trxKick: 'El mismo principio, con precio',
    trxTitle: 'En los tratamientos que vendes de verdad',
    trxSub: 'Una cita de toxina y un programa corporal no son la misma conversación, y la misma frase hace un trabajo distinto en cada una. Este es el principio de la lección en las salas donde trabajas.',
    trxMoment: 'El momento',
    trxWeak: 'Lo que se suele decir',
    trxStrong: 'Lo que dice el método',
    trxCost: 'Lo que cuesta',
    trxGain: 'Lo que gana',
    trxFoot: 'Esto es enseñanza, no un ejercicio. Aquí no se corrige nada ni se registra nada.',

    /* --- el mismo intercambio, dos veces --- */
    cvKick: 'El intercambio entero, dos veces',
    cvTitle: 'La misma conversación, llevada de dos maneras',
    cvSub: 'La escalera compara frases sueltas. Esto compara un intercambio entero, que es donde se ve que el daño se acumula en vez de estar en una sola frase mal elegida.',
    cvSetting: 'La escena',
    cvShared: 'Las dos versiones empiezan con la misma frase',
    cvSharedNote: 'Ella dice exactamente esto en las dos. Todo lo que viene después eres tú, y solo tú.',
    cvBefore: 'Como suele ir',
    cvBeforeNote: 'Competente, correcta, y pierde la sala.',
    cvAfter: 'Como lo lleva el método',
    cvAfterNote: 'Misma clienta, mismo tratamiento, mismo precio.',
    cvSplit: 'Aquí es donde se separan las dos versiones',
    cvClient: 'Ella', cvYou: 'Tú',
    cvChanged: 'Qué hizo distinto la segunda versión',
    cvCost: 'Lo que costó la primera versión',
    cvFoot: 'Esto es enseñanza, no un ejercicio. No es tu decisión ni tu reintento: aquí no se corrige nada ni se registra nada.',

    /* --- el final de una lección no es el final del arco --- */
    contKick: 'Esto no termina en la pantalla',
    contTitle: 'Qué pasa después de esta lección',
    contLead: 'Quedan tres cosas más, y ninguna pasa aquí. El método solo cuenta cuando lo has usado con alguien que está pagando de verdad.',
    contNoAssign: 'La tarea de clínica de este módulo se abrirá cuando el módulo esté construido.',
    contOpensAt: 'Se abre en cuanto termines este módulo.',
    contOpenNow: 'Ya está abierta y te espera en tu diario de campo.',
    contReflect: 'Cuando vuelvas, escribes lo que pasó de verdad: con tus palabras, sobre tu clienta, no rellenando casillas.',
    contCoach: 'Tu responsable lee lo que has escrito y te forma a partir de ahí: desde tus consultas, no desde una opinión general sobre ti.',
    contSeeArc: 'Ver el arco entero',
    contOpenJournal: 'Abrir el diario de campo',

    /* --- las nueve estaciones del arco --- */
    arcS1: 'Aprender',
    arcS1C: 'El principio, explicado desde el libro y puesto delante de ti antes de que nadie te pida usarlo.',
    arcS2: 'Ver',
    arcS2C: 'La señal que da una clienta real: lo que hay que notar antes de responder.',
    arcS3: 'Decidir',
    arcS3C: 'Una respuesta, elegida frente a otras dos que también suenan de lo más razonables.',
    arcS4: 'Vivir la consecuencia',
    arcS4C: 'Lo que tu respuesta le hizo a ella: qué dice ahora y qué se guarda ahora.',
    arcS5: 'Entender',
    arcS5C: 'Por qué pasó eso, en términos MIRROR, dicho con todas las letras.',
    arcS6: 'Reintentar',
    arcS6C: 'El mismo momento otra vez, ya sabiendo lo que costó la primera respuesta. Esto es lo que un libro no te puede dar.',
    arcS7: 'Aplicar en la clínica',
    arcS7C: 'Una tarea por módulo, que sale de aquí y entra en una consulta real con una clienta real.',
    arcS8: 'Reflexionar',
    arcS8C: 'Lo que pasó de verdad, escrito con tus palabras cuando vuelves.',
    arcS9: 'Coaching de tu responsable',
    arcS9C: 'Lo que escribes llega a tu responsable, y la formación que recibes va sobre tus consultas.',
    arcM9: 'El coaching que das tú',
    arcMgrBandScreenSub: 'Dentro de cada lección que hace tu equipo y dentro de cada consulta que practican.',
    arcMgrWhereDecide: 'Donde la lección y la consulta se paran a esperar una respuesta.',
    arcMgrWhereConseq: 'Llega sola, en el momento, después de cada decisión que toman.',
    arcMgrWhereUnderstand: 'Dicho en voz alta cada vez, no dejado a que lo deduzcan ellas.',
    arcM1C: 'El principio, explicado desde el libro antes de que nadie tenga que usarlo.',
    arcM2C: 'La señal que da una clienta real y lo que hay que notar antes de responderla.',
    arcM3C: 'Una respuesta, elegida frente a otras dos que también suenan de lo más razonables.',
    arcM4C: 'Lo que esa respuesta le hizo a la clienta: qué dice ahora y qué se guarda ahora.',
    arcM5C: 'Por qué pasó eso, en términos MIRROR, dicho con todas las letras.',
    arcM6C: 'El mismo momento otra vez, ya sabiendo lo que costó la primera respuesta. Esto es lo que un libro no les puede dar.',
    arcM7C: 'Una tarea por módulo, que sale de aquí y entra en una consulta real con una clienta real.',
    arcM8C: 'Lo que pasó de verdad, escrito con sus propias palabras cuando vuelven.',
    arcM9C: 'Lo que escriben te llega a ti, y lo que tú formas sale de sus propias consultas.',
    arcBandScreen: 'En la pantalla',
    arcBandScreenSub: 'Dentro de cada lección y dentro de cada consulta que practicas.',
    arcBandClinic: 'En la clínica',
    arcBandClinicSub: 'Donde el método deja de ser formación. Nada de esto pasa en esta pantalla.',
    arcStNotYet: 'Todavía no',
    arcUnitLessons: 'lecciones completadas',
    arcUnitConsults: 'consultas abiertas',
    arcUnitDecisions: 'decisiones registradas',
    arcUnitAssign: 'tareas de clínica abiertas',
    arcUnitWritten: 'escritas',
    arcUnitCoaching: 'conversaciones de formación registradas',
    arcWhereLearn: 'Donde arranca el arco. Las lecciones van en orden y cada una termina en algo que haces.',
    arcWhereSee: 'Con lo que empieza cada lección y cada consulta.',
    arcWhereDecide: 'Donde la lección y la consulta se paran y te esperan.',
    arcWhereConseq: 'Llega sola, en el momento, después de cada decisión que tomas.',
    arcWhereUnderstand: 'Dicho en voz alta cada vez, no dejado a que lo deduzcas tú.',
    arcWhereRetry: 'Cada lección lleva uno. Se abre en cuanto una respuesta falla.',
    arcApplyNotYet: 'La primera se abre el día que termines un módulo.',
    arcReflectNotYet: 'Todavía no has escrito ninguna. Es lo primero que haces al volver.',
    arcCoachWith: 'Lo que has escrito está en la página de formación de tu responsable.',
    arcCoachNotYet: 'Todavía no le ha llegado nada. Le llegará en cuanto escribas la primera.',
    arcMgrApply: 'Se abre una tarea por cada profesional que termina un módulo.',
    arcMgrReflect: 'Sus propias palabras, sobre sus propias clientas. Aquí es donde el método sale de la pantalla.',
    arcMgrCoach: 'Las conversaciones de formación que has registrado y lo que cambió después en su trabajo.',
    arcNotYetNote: 'Una etapa a la que todavía no has llegado no es un suspenso ni una nota. Es, sencillamente, todavía no.',
    arcMgrNotYetNote: 'Una etapa a la que tu equipo todavía no ha llegado no es un suspenso ni una nota. Es, sencillamente, todavía no.',
    mgrArcTitle: 'Dónde está el método en tu equipo',

    /* --- el arco: ruta, casos, aplicación, lo que queda --- */
    arcTitle: 'Dónde estás',
    arcLead: 'El arco entero son nueve etapas. Seis pasan en esta pantalla; las tres últimas pasan en tu clínica, y son la razón por la que esto no es un libro.',
    arcMgrLead: 'El arco entero son nueve etapas. Seis pasan en la pantalla; las tres últimas pasan en tu clínica. Esto es lo que ha recorrido tu equipo dentro de ellas.',
    arcNext: 'Lo que viene ahora',
    arcNextWhy: 'Por qué esto',
    arcStDone: 'Completo', arcStNow: 'Estás aquí', arcStOpen: 'En marcha', arcStAhead: 'Más adelante',
    arcOf: 'de',
    arcNothing: 'Aquí todavía no hay nada registrado.',
    arcGoLesson: 'Abrir la lección',
    arcGoCase: 'Abrir la consulta',
    arcGoJournal: 'Abrir el diario de campo',
    arcGoMaterials: 'Abrir tus materiales',
    arcGoInvite: 'Abrir la página de la clínica',
    arcGoMoment: 'Recorrer el momento',
    arcGoCoach: 'Abrir el centro de formación',
    arcGoCurriculum: 'Abrir la ruta de aprendizaje',

    /* --- la entrega que envía la dirección --- */
    hoTitle: 'Envíale esto',
    hoLead: 'Escrito para ti, en su idioma. Pégalo donde ya escribes: correo, un mensaje, una nota en el mostrador.',
    hoMessage: 'El mensaje',
    hoLink: 'El enlace solo',
    hoCopyMessage: 'Copiar el mensaje',
    hoCopyLink: 'Copiar el enlace',
    hoCopied: 'Copiado.',
    hoManual: 'Selecciona el texto y cópialo con el teclado.',
    hoResend: 'Volver a enviarlo',
    hoWhatHappens: 'Ella abre el enlace, elige su propia contraseña y entra directamente en su primera lección. Tú nunca ves esa contraseña y ella no tiene nada que instalar.',
    hoValid: 'Válido hasta el',
    hoClose: 'Cerrar',

    /* --- lo que se queda la clínica --- */
    keepTitle: 'Lo que se queda esta clínica',
    keepLead: 'El programa termina. Esto no. Todo lo que escribe tu equipo dentro se queda en la clínica y se puede seguir leyendo.',
    keepConsults: 'consultas registradas',
    keepDocs: 'documentos de consulta',
    keepJournal: 'entradas del diario de campo',
    keepConsultsWhat: 'Cada fase, cada decisión, las palabras usadas y el estado de la clienta en ese momento exacto.',
    keepDocsWhat: 'Fichas de acogida, mapas de motivadores emocionales, constructores de recomendación y planes de seguimiento, tal como los escribió tu equipo.',
    keepJournalWhat: 'Lo que pasó de verdad cuando el método salió de la pantalla y entró en una sala real.',
    keepEmpty: 'Esto se va llenando según practica tu equipo, y no se borra nada cuando acaba el programa.',
    keepOpenEvidence: 'Leer las consultas',
    keepOpenJournal: 'Leer el diario de campo',
    cmpKeepNote: 'Los documentos de Toolkit que escribiste dentro de esta consulta son tuyos. Ya están en tus materiales, con tus propias palabras.'
  }
};
const t = () => UI[S.lang];

// --------------------------------------------------------------------------
// helpers
// --------------------------------------------------------------------------
const $ = sel => document.querySelector(sel);
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const el = (html) => { const d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstElementChild; };

async function api(method, path, body) {
  const sep = path.includes('?') ? '&' : '?';
  const r = await fetch(path + sep + 'lang=' + S.lang, {
    method,
    headers: Object.assign({ 'Content-Type': 'application/json', 'X-Mirror-Lang': S.lang },
      S.token ? { Authorization: 'Bearer ' + S.token } : {}),
    body: body ? JSON.stringify(body) : undefined
  });
  let j = null; try { j = await r.json(); } catch (e) {}
  // A 401 while signed in means the session ended; a 401 on the way in is
  // simply a wrong email or password and is answered by the form itself.
  if (r.status === 401 && S.token) { signOut(); throw new Error(t().errSession); }
  return { status: r.status, ok: r.ok, body: j };
}

/**
 * What the customer is told when something fails. A message already written
 * for a person passes through; anything that reads like machinery is replaced
 * by a plain sentence about what happened and what to do next.
 */
function plainError(res, fallback) {
  const msg = res && res.body && res.body.error;
  const human = typeof msg === 'string' && msg.length > 14 && /\s/.test(msg) &&
    !/[\/\\{}<>#]|http|api|token|null|undefined|status|\bid\b/i.test(msg);
  return human ? msg : (fallback || t().errLoad);
}

function langSwitch(id) {
  const host = $('#' + id); if (!host) return;
  // One language ships. The control stays in the DOM, and the Spanish tables
  // stay whole, so returning it is a single flag — but it carries no visible
  // surface for the customer.
  host.classList.toggle('stowed', !SHOW_LANGUAGE_SWITCH);
  host.innerHTML = ['en', 'es'].map(l =>
    `<button data-l="${l}" class="${S.lang === l ? 'on' : ''}">${l.toUpperCase()}</button>`).join('');
  host.querySelectorAll('button').forEach(b => b.onclick = () => {
    S.lang = b.dataset.l; localStorage.setItem('mirror.lang', S.lang);
    document.documentElement.lang = S.lang;
    // Content is localized server-side, so every cached payload is stale.
    S.curriculum = null; S.cases = []; S.lesson = null; S.library = null;
    S.feedback = null; S.outcome = null; S.proposal = null; S.evidence = null;
    S.completion = null; S.caseEvidence = null; S.momentData = null;
    S.journey = null; S.handover = null;
    if (S.user) {
      if (S.attempt) {
        api('GET', '/api/attempts/' + S.attempt.id).then(r => {
          S.attempt = r.body.attempt; S.view = r.body.view; boot();
        });
      } else boot();
    } else renderSignIn();
  });
}

// ==========================================================================
// SIGN IN
// ==========================================================================
function renderSignIn() {
  const T = t();
  $('#signin').classList.remove('hidden');
  $('#app').classList.add('hidden');
  $('#si-desc').textContent = T.productShort;
  $('#si-prod').textContent = T.productName;
  $('#si-pitch').textContent = T.pitch;
  $('#si-sub').textContent = T.sub;
  $('#si-title').textContent = T.signIn;
  $('#si-hint').textContent = S.signinRole === 'manager' ? T.hintMgr : T.hintPrac;
  $('#si-lemail').textContent = T.email;
  $('#si-lpass').textContent = T.password;
  $('#si-submit').textContent = T.enter;
  $('#si-end1').textContent = T.endorsed;
  $('#si-end2').textContent = T.basedOn;
  $('#si-foot').textContent = T.signFoot;
  $('#si-logo').innerHTML = ART.csLogo(30);
  langSwitch('si-lang');
  // The two ways in, named as the person thinks of them.
  $('#si-roles').innerHTML = [
    ['practitioner', T.practitionerLogin, T.practitionerLoginD],
    ['manager', T.managerLogin, T.managerLoginD]
  ].map(([k, a, b]) => `<div class="roletab ${S.signinRole === k ? 'on' : ''}" data-r="${k}">
      <div class="rt">${esc(a)}</div><div class="rd">${esc(b)}</div></div>`).join('');
  $('#si-roles').querySelectorAll('.roletab').forEach(r => r.onclick = () => {
    S.signinRole = r.dataset.r;
    const email = $('#si-email').value, pass = $('#si-pass').value;
    renderSignIn();
    $('#si-email').value = email; $('#si-pass').value = pass;
  });
  $('#si-form').onsubmit = async (e) => {
    e.preventDefault();
    const box = $('#si-err');
    let r = null;
    try { r = await api('POST', '/api/auth/login', { email: $('#si-email').value.trim(), password: $('#si-pass').value }); }
    catch (err) { box.textContent = T.errSignInOff; box.classList.remove('hidden'); return; }
    if (!r.ok) { box.textContent = T.errSignIn; box.classList.remove('hidden'); return; }
    box.classList.add('hidden');
    S.token = r.body.token; localStorage.setItem('mirror.token', S.token);
    S.user = r.body.user; S.tab = S.user.role === 'manager' ? 'start' : 'home';
    boot();
  };
}
function signOut() {
  S.token = null; S.user = null; localStorage.removeItem('mirror.token');
  renderSignIn();
}

// ==========================================================================
// SHELL
// ==========================================================================
async function boot() {
  if (!S.token) return renderSignIn();
  const me = await api('GET', '/api/auth/me');
  if (!me.ok) return signOut();
  S.user = me.body.user;
  $('#signin').classList.add('hidden');
  $('#app').classList.remove('hidden');
  document.documentElement.lang = S.lang;
  const T = t();
  $('#hdr-desc').textContent = T.productShort;
  $('#hdr-name').textContent = S.user.name;
  $('#hdr-role').textContent = (S.user.role === 'manager' ? T.manager : T.practitioner) + ' · ' + S.user.clinicName;
  $('#hdr-out').title = T.signOut;
  $('#hdr-out').textContent = T.signOut;
  $('#hdr-out').onclick = () => { api('POST', '/api/auth/logout').finally(signOut); };
  langSwitch('hdr-lang');
  $('#ft-1').innerHTML = `<b>${esc(T.productName)}</b> · ${esc(T.basedOn)}`;
  $('#ft-2').innerHTML = `${ART.csLogo(20)} <span style="vertical-align:6px">${esc(T.endorsed)}</span>`;
  // A manager is not walked through a slideshow: her first screen IS the walk
  // in, and it is three things she can do rather than three things to read.
  if (S.user.role !== 'manager' && !S.onboard && !hasBeenWalkedIn(S.user.role)) S.onboard = { step: 0 };
  renderTabs();

  // WHAT SHE MEETS FIRST.
  //
  // This used to send a newly activated practitioner straight into Module 1,
  // Lesson 1. It was well meant — better than a dashboard — but "Lesson 1 of
  // 60" is still a curriculum, and a curriculum is what she postpones.
  //
  // So anybody who has not answered the four questions answers them now, and
  // lands in the consultation her own answer picked. Everything else is
  // reachable from the tabs the moment she wants it.
  if (!S.obDone) {
    try {
      const fw = await api('GET', '/api/first-win');
      if (fw.ok && fw.body.needsOnboarding) {
        S.arriving = false;
        markWalkedIn(S.user.role);
        S.onboard = null;
        return renderOnboarding();
      }
      // Already onboarded, and arriving from her invitation: she is shown the
      // case her answers named rather than a dashboard.
      if (fw.ok && S.arriving) {
        S.arriving = false;
        markWalkedIn(S.user.role);
        S.onboard = null;
        S.firstWin = fw.body;
        S.obDone = true;
        return renderFirstWin();
      }
      S.obDone = true;
    } catch (e) { S.obDone = true; }
  }
  S.arriving = false;
  await render();
}

/* ==========================================================================
   ONBOARDING, AND THE FIRST WIN
   --------------------------------------------------------------------------
   THE FAILURE THIS REPLACES. A practitioner accepted her invitation and was
   dropped into Module 1, Lesson 1 — sixty lessons deep, nothing in it hers.
   She read "Lesson 1 of 60", decided she would come back when she had an
   hour, and did not come back.

   So activation now ends in a consultation she recognises. Four questions,
   one screen each, then her own first case. The Academy is still underneath
   and she can reach it from the tabs the moment she wants it; it just is not
   the first thing she meets.

   One question per screen on purpose: seven fields on one page is a form, and
   a form is the thing she abandons on a phone between clients.
   ========================================================================== */

/** Four screens. `categories` is the only one that takes more than one answer. */
const OB_STEPS = ['hardest', 'experience', 'categories', 'goal'];

async function renderOnboarding() {
  const T = t();
  if (!S.ob) {
    const r = await api('GET', '/api/onboarding');
    if (!r.ok) { S.ob = null; S.obDone = true; return render(); }
    S.ob = { q: r.body.questions, answers: { categories: [] }, step: 0, firstName: r.body.firstName };
  }
  const ob = S.ob;
  const key = OB_STEPS[ob.step];
  const q = ob.q[key];
  const multi = key === 'categories';
  const chosen = multi ? (ob.answers.categories || []) : [ob.answers[key]];

  $('#view').innerHTML = `
    <section class="ob">
      <div class="ob-step">${esc(T.obStep.replace('{n}', ob.step + 1).replace('{of}', OB_STEPS.length))}</div>
      <div class="ob-bar"><i style="width:${Math.round(((ob.step) / OB_STEPS.length) * 100)}%"></i></div>
      <h2>${esc(q.ask)}</h2>
      ${q.note ? `<p class="note">${esc(q.note)}</p>` : ''}
      <div class="ob-opts">
        ${q.options.map(o => `
          <button class="ob-opt ${chosen.indexOf(o.key) >= 0 ? 'on' : ''}" type="button" data-k="${esc(o.key)}">
            <span class="lab">${esc(o.label)}</span>
            ${o.why ? `<span class="why">${esc(o.why)}</span>` : ''}
          </button>`).join('')}
      </div>
      <div class="ob-acts">
        <button class="btn primary" type="button" id="ob-next">${esc(ob.step === OB_STEPS.length - 1 ? T.obFinish : T.obNext)}</button>
        ${ob.step > 0 ? `<button class="btn" type="button" id="ob-back">${esc(T.back)}</button>` : ''}
        <button class="ob-skip" type="button" id="ob-skip">${esc(T.obSkip)}</button>
      </div>
    </section>`;

  $('#view').querySelectorAll('.ob-opt').forEach(b => b.onclick = () => {
    const k = b.dataset.k;
    if (multi) {
      const list = ob.answers.categories || (ob.answers.categories = []);
      const i = list.indexOf(k);
      if (i >= 0) list.splice(i, 1); else list.push(k);
    } else {
      // Single-choice answers advance on tap: an extra "next" press for a
      // decision she has already made is friction with nothing behind it.
      // Including the LAST one — it selected and then sat there waiting for a
      // button, which is the one place in the flow where she would have had to
      // go looking for how to continue.
      ob.answers[key] = k;
      if (ob.step < OB_STEPS.length - 1) { ob.step += 1; return renderOnboarding(); }
      return saveOnboarding();
    }
    renderOnboarding();
  });
  $('#ob-next').onclick = () => {
    if (ob.step < OB_STEPS.length - 1) { ob.step += 1; return renderOnboarding(); }
    return saveOnboarding();
  };
  const back = $('#ob-back'); if (back) back.onclick = () => { ob.step -= 1; renderOnboarding(); };
  // Skipping is allowed and costs her nothing: the brief and the first case
  // both have an honest shape for "she did not say".
  $('#ob-skip').onclick = () => saveOnboarding();
}

async function saveOnboarding() {
  busy();
  const a = (S.ob && S.ob.answers) || {};
  const r = await api('POST', '/api/onboarding', {
    experience: a.experience || null,
    categories: a.categories || [],
    hardest: a.hardest || null,
    goal: a.goal || null
  });
  S.ob = null;
  S.obDone = true;
  // The legacy three-card walk-through is the OLD answer to "what does she see
  // first". Having just answered four questions and been handed her own case,
  // she must not then be shown a slideshow introducing the product — two
  // onboardings back to back is the exact feeling this flow replaced.
  markWalkedIn(S.user.role);
  S.onboard = null;
  S.firstWin = (r.ok && r.body.firstWin) || null;
  return renderFirstWin();
}

/**
 * HER FIRST WIN.
 *
 * Greeting, her own words quoted back, and one button into the consultation
 * that puts her inside the situation she just named. Deliberately no count of
 * what is left to do, no estimate of how long anything takes, and no score.
 */
async function renderFirstWin() {
  const T = t();
  if (!S.firstWin) {
    const r = await api('GET', '/api/first-win');
    if (!r.ok || r.body.needsOnboarding) { S.ob = null; return renderOnboarding(); }
    S.firstWin = r.body;
  }
  const w = S.firstWin;
  const title = w.scenarioTitle || '';
  $('#view').innerHTML = `
    <section class="fw">
      <h1 class="hi">${esc(w.greeting)}</h1>
      <p class="said">${esc(w.said)}</p>
      <p class="bridge">${esc(w.bridge)}</p>
      <p class="meet">${esc(w.meet)}</p>
      <div class="ob-acts">
        <button class="btn primary" type="button" id="fw-go">${esc(T.fwStart)}</button>
        <button class="ob-skip" type="button" id="fw-later">${esc(T.fwLater)}</button>
      </div>
      <p class="note">${esc(w.note)}</p>
      ${w.goal ? `<p class="goal">${esc(T.fwGoal)} ${esc(w.goal)}</p>` : ''}
    </section>`;
  $('#fw-go').onclick = () => {
    // A manager cannot own an attempt: POST /api/attempts is practitioner-only,
    // so sending her to startCase would have answered 403 on the very first
    // button the product ever shows her. She gets the consultation moment the
    // product hands her directly instead.
    if (w.forManager || w.opens === 'first_moment') {
      S.tab = 'start';
      renderTabs();
      S.moment = { pick: null };
      return renderFirstMoment();
    }
    S.tab = 'practice';
    renderTabs();
    return startCase(w.scenario);
  };
  $('#fw-later').onclick = () => { S.firstWin = null; render(); };
}

function renderTabs() {
  const T = t();
  const keys = S.user.role === 'manager'
    ? ['start', 'manager', 'curriculum', 'practice', 'clinic']
    : ['home', 'curriculum', 'practice', 'resources', 'journal', 'progress'];
  if (!keys.includes(S.tab)) S.tab = keys[0];
  $('#tabs').innerHTML = keys.map(k => `<button data-t="${k}" class="${S.tab === k ? 'on' : ''}">${esc(T.tabs[k])}</button>`).join('');
  $('#tabs').querySelectorAll('button').forEach(b => b.onclick = () => {
    S.tab = b.dataset.t;
    // Leaving a view resets the local runner context; an unfinished consultation
    // lives on the server and is offered again from the picker.
    S.lesson = null; S.attempt = null; S.view = null;
    S.feedback = null; S.outcome = null; S.proposal = null; S.evidence = null;
    S.completion = null; S.caseEvidence = null;
    S.moment = null; S.handover = null; S.pwHandover = null; S.pwGuide = null;
    // Leaving the first screen is itself a way of saying "I have seen this".
    if (S.onboard) { markWalkedIn(S.user.role); S.onboard = null; }
    renderTabs(); render();
  });
}

// --------------------------------------------------------------------------
// THE THREE STATES NOBODY PHOTOGRAPHS
//
// A screen is empty, or waiting, or it failed. Every surface reaches all three
// eventually, and until now each one improvised: a bare sentence on white, a
// spinner alone in the middle of nothing, a red box with a status code's
// manners. They are three components now, in the same porcelain language as
// the screens that have something to show, so a clinic that has just opened
// its account sees the same product as one three months in.
// --------------------------------------------------------------------------

/**
 * A shelf with nothing on it yet. `o.mark` picks the line drawing, `o.kicker`
 * names the state, `o.title` says what the shelf is for and `o.body` says how
 * it fills — because that is the only useful sentence on an empty screen.
 * `o.acts` is a list of { id, label } offers, wired by the caller.
 */
function blank(o) {
  const acts = (o.acts || []).filter(Boolean);
  return `<div class="blank">
    <div class="bkmark">${ART.blankMark(o.mark || '', 28)}</div>
    <div class="bktext">
      ${o.kicker ? `<div class="bkk">${esc(o.kicker)}</div>` : ''}
      <h3>${esc(String(o.title || '').replace(/\.$/, ''))}</h3>
      ${(Array.isArray(o.body) ? o.body : [o.body]).filter(Boolean)
        .map(p => `<p>${esc(p)}</p>`).join('')}
      ${acts.length ? `<div class="bkacts">${acts.map(a =>
        `<button class="wi-alt" id="${esc(a.id)}">${esc(a.label)}</button>`).join('')}</div>` : ''}
    </div>
  </div>`;
}

/** The shape of the screen that is coming, so nothing jumps when it lands. */
function loadingPane(word) {
  const T = t();
  return `<div class="loadpane" role="status" aria-live="polite">
    <div class="lphead"><span class="spinner"></span>
      <span class="lpword">${esc(word || T.loadingWord)}</span></div>
    <div class="skel w1"></div><div class="skel w2"></div>
    <div class="skel w3"></div><div class="skel w4"></div>
  </div>`;
}

function busy() { $('#view').innerHTML = loadingPane(); }

async function render() {
  busy();
  try {
    // `return await`, not `return`. A plain `return somePromise` inside a try
    // hands the promise to the caller and leaves the catch below unreachable,
    // so until now every one of these screens answered a dropped connection
    // with an unhandled rejection and a page that never stopped loading.
    if (S.completion) return await renderCompletion();
    if (S.lesson) return await renderLesson();
    if (S.moment) return await renderFirstMoment();
    if (S.tab === 'start') return await renderStart();
    if (S.tab === 'home') return await renderHome();
    if (S.tab === 'curriculum') return await renderCurriculum();
    if (S.tab === 'practice') return await renderPractice();
    if (S.tab === 'resources') return await renderResources();
    if (S.tab === 'journal') return await renderJournal();
    if (S.tab === 'progress') return await renderProgress();
    if (S.tab === 'manager') return await renderManager();
    if (S.tab === 'clinic') return await renderClinic();
  } catch (e) {
    // Never a status code and never a stack: what happened, and what to do.
    const T = t();
    $('#view').innerHTML = `<div class="failpane">
      <h3>${esc(T.failTitle)}</h3>
      <p>${esc(T.failBody)}</p>
      <button class="primary" id="retry">${esc(T.tryAgain)}</button></div>`;
    const rb = $('#retry'); if (rb) rb.onclick = () => render();
  }
}

// ==========================================================================
// HOME
// ==========================================================================
async function loadCurriculum(force) {
  if (S.curriculum && !force) return S.curriculum;
  const r = await api('GET', '/api/academy/curriculum');
  S.curriculum = r.body; S.cases = r.body.cases || [];
  return S.curriculum;
}

/** The engines and the eight-phase spine, as the server holds them. */
async function loadOrientation() {
  if (S.orientation) return S.orientation;
  const r = await api('GET', '/api/orientation');
  S.orientation = (r.body && r.body.spine) ? r.body : null;
  return S.orientation;
}

// The Phase Ownership Matrix, drawn. Which engine governs which canonical
// phase is fixed by the framework; the strip only renders it.
const ENGINE_OWNS = {
  PREPARATION: [1], CONSULTATION: [2, 3, 4, 5, 6, 7], DECISION: [7],
  CONTINUATION: [8], STANDARDS: 'all'
};
const PHASE_KEYS = ['preparation', 'connection', 'discovery', 'understanding',
                    'education', 'recommendation', 'decisionSupport', 'continuation'];
const phaseNumberOf = key => Math.max(1, PHASE_KEYS.indexOf(key) + 1);

/** Stored assignments keep their bilingual leaves; resolve one for display. */
const loc = v => (v && typeof v === 'object' && (v.en || v.es)) ? (v[S.lang] || v.en) : v;

/**
 * THE MODULE'S PROMISE.
 * A verb-first sentence naming what a practitioner can DO once a module is
 * behind her. It is content, so it arrives already resolved into the active
 * language; a module authored without one simply has none, and every place
 * that shows it leaves the space clean rather than printing a heading over
 * nothing.
 */
function moduleOutcome(m) {
  const v = loc(m && m.outcome);
  return typeof v === 'string' && v.trim() ? v.trim() : '';
}

/**
 * The five engines carry one name and one purpose sentence, and the framework
 * holds them in English only. The Academy ships at full parity, so the Spanish
 * reading of each is kept here beside the phase tables; the English is left
 * exactly as the framework states it.
 */
const ENGINE_ES = {
  PREPARATION:  { name: 'Motor de Preparación',
                  purpose: 'Preparación, información previa y contexto antes de la consulta.' },
  CONSULTATION: { name: 'Motor de Consulta',
                  purpose: 'La consulta en sí: de la conexión al acompañamiento de la decisión.' },
  DECISION:     { name: 'Motor de Decisión',
                  purpose: 'Deriva y gestiona el resultado SÍ / APLAZAR / NO y sus reglas de Toolkit.' },
  CONTINUATION: { name: 'Motor de Continuidad',
                  purpose: 'Cambio de estado de la relación y ejecución del seguimiento tras la decisión.' },
  STANDARDS:    { name: 'Motor de Estándares',
                  purpose: 'Deberes éticos y principios de confianza aplicados en todas las fases.' }
};
const engineWords = e => (S.lang === 'es' && e && ENGINE_ES[e.key])
  ? Object.assign({}, e, ENGINE_ES[e.key]) : (e || {});

/** What an engine owns, said in a sentence a clinician reads without effort. */
function ownershipLine(engine) {
  const T = t(), owns = ENGINE_OWNS[engine.key];
  if (owns === 'all') return T.acrossAll;
  if (!owns || !owns.length) return engine.role || '';
  if (engine.key === 'DECISION') return `${T.secondaryOn} ${owns[0]}`;
  if (owns.length === 1) return `${T.ownsPhase} ${owns[0]}`;
  return `${T.ownsPhases} ${owns[0]}–${owns[owns.length - 1]}`;
}

/**
 * MY MIRROR JOURNEY — what a practitioner sees the moment she signs in.
 * Order is deliberate: who she is, what organises the training, the road,
 * the one thing she is working on now, the consultation itself, and only
 * then the quieter records.
 */
async function renderHome() {
  const T = t();
  const [c, orient, list, jr] = await Promise.all([
    loadCurriculum(true), loadOrientation(), api('GET', '/api/attempts'),
    api('GET', '/api/journey').catch(() => null)
  ]);
  const attempts = (list.body && list.body.attempts) || [];
  const journey = (jr && jr.body && jr.body.stages) ? jr.body : null;
  S.journey = journey;
  // The DECIDE station of the arc counts real recorded decisions. The journey
  // payload does not carry them; her own attempts already do.
  const decisionsTaken = attempts.reduce((s, a) => s + (a.decisions || 0), 0);
  const spine = (orient && orient.spine) || PHASE_KEYS.map((k, i) => ({ n: i + 1, key: k, name: phaseLabel(k) }));
  const engines = (orient && orient.engines) || [];
  const totalDone = c.modules.reduce((s, m) => s + m.completed, 0);

  const nextLesson = (() => {
    for (const m of c.modules) {
      if (m.status !== 'available') continue;
      for (const l of m.lessons) if (!l.progress || l.progress.status !== 'complete') return { m, l };
    }
    return null;
  })();

  // Her real case: Sofia, and whether one of hers is still open.
  const cases = c.cases || [];
  const sofiaCase = cases.find(x => /^sofia/.test(x.id)) || cases[0];
  const open = attempts.filter(a => a.status === 'in_progress');
  const openSofia = sofiaCase ? open.find(a => a.scenario === sofiaCase.id) : null;
  const openAny = openSofia || open[0] || null;

  // The objective is read from her state, in this order: the phase she is
  // standing in, then the lesson she has not finished, then Phase 1.
  let liveView = null;
  if (openAny) {
    try {
      const r = await api('GET', '/api/attempts/' + openAny.id);
      liveView = r.body && r.body.view;
    } catch (e) { liveView = null; }
  }
  let objective, objSource;
  if (liveView && liveView.navigation && liveView.navigation.phase) {
    const nav = liveView.navigation;
    objective = nav.phase.objective;
    objSource = `${esc(T.phaseOf)} ${nav.phase.n} · ${esc(nav.phase.name)} — ${esc((openAny && caseTitleOf(cases, openAny.scenario)) || '')}`;
  } else if (nextLesson) {
    objective = nextLesson.l.objective;
    objSource = `${esc(nextLesson.m.title)} · ${esc(T.lessonN)} ${nextLesson.l.n} — ${esc(nextLesson.l.title)}`;
  } else {
    const p1 = spine[0] || {};
    objective = p1.objective || T.journeyLead;
    objSource = `${esc(T.phaseOf)} 1 · ${esc(p1.name || phaseLabel('preparation'))}`;
  }

  const sofiaPhase = openSofia ? phaseNumberOf(openSofia.currentPhase) : null;
  const sofiaPhaseName = openSofia
    ? (spine[sofiaPhase - 1] ? spine[sofiaPhase - 1].name : phaseLabel(openSofia.currentPhase)) : null;
  const avatarKey = sofiaCase ? sofiaCase.id.split('-')[0] : 'sofia';
  // Her portrait is drawn in the state she is actually in: live, if a
  // consultation of hers is open; otherwise the posture she holds at the door.
  const sofiaPosture = (openSofia && liveView && liveView.clientState && liveView.clientState.posture)
    || (sofiaCase ? openingPostureOf(sofiaCase.id) : 'polite');
  const spineCurrent = openAny ? phaseNumberOf(openAny.currentPhase) : null;

  const walkCtx = { nextLesson, firstCase: sofiaCase, spine };
  let html = (S.onboard ? walkInHTML(walkCtx) : '') +
    `<div class="jtitle">${esc(T.journey)}</div>
    <section class="hero jhero">
      <div class="kicker">${esc(T.productName)}</div>
      <h1>${esc(totalDone || attempts.length ? T.welcomeBack : T.welcomeFirst)}, ${esc(S.user.name.split(' ')[0])}</h1>
      <p>${esc(S.user.clinicName)} · ${esc(T.journeyLead)}</p>
    </section>

    ${journey ? `<div class="secthead"><h2>${esc(T.arcTitle)}</h2></div>
    <p class="muted lead-note">${esc(T.arcLead)}</p>
    ${arcHTML(journey, { extra: { decisions: decisionsTaken } })}` : ''}

    <div class="secthead"><h2>${esc(T.enginesTitle)}</h2></div>
    <p class="muted lead-note">${esc(T.enginesSub)}</p>
    <div id="engines">${ART.engineStrip(engines.map(e => Object.assign({}, engineWords(e), {
      ownsPhases: ENGINE_OWNS[e.key] || [], role: ownershipLine(e)
    })))}</div>

    <div class="secthead"><h2>${esc(T.spineTitle)}</h2></div>
    <p class="muted lead-note">${esc(spineCurrent ? T.spineSub : T.spineNotStarted)}</p>
    <section class="card spinecard" id="spine">
      ${ART.phaseSpine(spine, spineCurrent, T.youAreHere)}
    </section>

    <section class="card objcard" id="objective">
      <h4>${esc(T.objectiveTitle)}</h4>
      <p class="objline">${esc(objective)}</p>
      <div class="muted">${objSource}</div>
    </section>`;

  if (sofiaCase) {
    html += `<section class="card sofiacard" id="sofia-card">
      <div class="sc-top">
        <div class="sc-face">${ART.avatar(avatarKey, 78, sofiaPosture)}</div>
        <div class="sc-id">
          <div class="sc-kick">${esc(T.yourCase)}</div>
          <h2>${esc(sofiaCase.title)} · ${esc(sofiaCase.client.name)}</h2>
          <div class="sc-sub">${esc(sofiaCase.subtitle)}</div>
          <div class="muted sc-facts">${esc(sofiaCase.client.age || '')}${sofiaCase.client.age ? ' · ' : ''}${esc(sofiaCase.client.presenting || sofiaCase.client.occupation || '')}</div>
        </div>
      </div>
      <div class="sc-prog">
        ${ART.phaseDots(sofiaPhase)}
        <div class="sc-progtext">${openSofia
          ? `<b>${esc(T.inProgressAt)} — ${esc(T.phaseOf)} ${sofiaPhase} ${esc(T.ofEight)}: ${esc(sofiaPhaseName)}</b>`
          : `<b>${esc(T.sofiaNotStarted)}</b>`}</div>
      </div>
      <div class="sc-act">
        <button class="primary lg" id="go-sofia">${esc(openSofia ? T.continueSofia : T.startSofia)}</button>
      </div>
    </section>`;
  }

  // Quieter, below: what the Academy has recorded, and any open field work.
  const openA = (c.openAssignments || [])[0];
  let apply = null;
  if (openA) {
    try {
      const raw = typeof openA.assignment === 'string' ? JSON.parse(openA.assignment) : openA.assignment;
      apply = raw ? { assignment: loc(raw.assignment), prompt: loc(raw.prompt) } : null;
    } catch (e) { apply = null; }
  }
  html += `<div class="cols two quiet">
    <section class="card">
      <h4>${esc(T.academyProgress)}</h4>
      <div class="herostats">
        <div><b>${totalDone}</b>${esc(T.lessonsCompleted)}</div>
        <div><b>${c.stats.modulesBuilt}/${c.stats.modules}</b>${esc(T.modulesReady)}</div>
        <div><b>${c.stats.lessonsBuilt}</b>${esc(T.lessonsInPlan)}</div>
      </div>
      <p class="muted" style="margin-top:12px">${esc(nextLesson
        ? `${T.continueLesson}: ${nextLesson.m.title} · ${T.lessonN} ${nextLesson.l.n} — ${nextLesson.l.title}`
        : T.academySub)}</p>
      <button id="go-cur">${esc(nextLesson ? T.openLesson : T.keepLearning)}</button>
    </section>
    <section class="card">
      <h4>${esc(T.fieldAssignment)}</h4>
      ${apply ? `<p class="assignline">${esc(apply.assignment)}</p>
        <p class="muted">${esc(apply.prompt || T.whatHappened)}</p>
        <button id="go-journal">${esc(T.whatHappened)}</button>`
      : blank({ mark: 'assignment', title: T.blankAssignTitle, body: T.blankAssignBody })}
    </section>
  </div>`;

  $('#view').innerHTML = html;
  if (S.onboard) bindWalkIn(walkCtx);
  if (journey) wireArcNext(journey);

  const gj = $('#go-journal'); if (gj) gj.onclick = () => { S.tab = 'journal'; renderTabs(); render(); };
  const gc = $('#go-cur'); if (gc) gc.onclick = () => {
    if (nextLesson) return openLesson(nextLesson.m.id, nextLesson.l.id);
    S.tab = 'curriculum'; renderTabs(); render();
  };
  const gs = $('#go-sofia'); if (gs) gs.onclick = () => {
    S.tab = 'practice'; renderTabs();
    startCase(sofiaCase.id, false);
  };
}

const caseTitleOf = (cases, id) => {
  const c = (cases || []).find(x => x.id === id);
  return c ? c.title : '';
};

// ==========================================================================
// THE WALK-IN
//
// A practitioner signing in for the first time is walked in, not dropped in:
// what she is actually being taught, how the Academy and the consultation
// cases feed each other, the eight phases everything hangs from, and one
// first action with her real next lesson named in it. Four steps, each one
// drawn, each one skippable, and once it is done it never appears again.
//
// It is laid into the top of her first screen rather than thrown over it, so
// nothing underneath is ever unreachable — she can walk past it at any point
// by using the navigation, and that counts as having seen it.
// ==========================================================================
function walkInSteps(ctx) {
  const T = t();
  if (S.user.role === 'manager') {
    return [
      { title: T.obMT1, body: T.obMB1,
        art: ART.onboardScene('evidence', { out: T.obMScene, note: T.obMSceneNote }) },
      { title: T.obMT2, body: T.obMB2,
        list: [T.qWho, T.qRepeats, T.qTrust, T.qCoach, T.qEvidence],
        cta: T.obMGo }
    ];
  }
  return [
    { title: T.obT1, body: T.obB1,
      art: ART.onboardScene('layers', { said: T.obSaid, a: T.obLayerA, b: T.obLayerB, c: T.obLayerC, down: T.obDown }) },
    { title: T.obT2, body: T.obB2,
      art: ART.onboardScene('loop', { a: T.obLoopA, b: T.obLoopB, c: T.obLoopC, back: T.obLoopBack }) },
    { title: T.obT3, body: T.obB3, spine: true },
    { title: T.obT4, body: T.obB4, start: true,
      lead: ctx.nextLesson
        ? `${ctx.nextLesson.m.title} · ${T.lessonN} ${ctx.nextLesson.l.n} — ${ctx.nextLesson.l.title}`
        : null,
      caseLead: ctx.firstCase ? `${ctx.firstCase.title} — ${ctx.firstCase.client.name}` : null }
  ];
}

function walkInHTML(ctx) {
  const T = t();
  const steps = walkInSteps(ctx);
  const i = Math.max(0, Math.min(S.onboard.step, steps.length - 1));
  const s = steps[i];
  const last = i === steps.length - 1;
  const spine = ctx.spine || [];

  return `<section class="walkin" id="walkin">
    <div class="wi-head">
      <span class="wi-kick">${esc(T.obKicker)}</span>
      <span class="wi-dots">${steps.map((_, k) =>
        `<i class="${k === i ? 'on' : k < i ? 'past' : ''}"></i>`).join('')}</span>
      <span class="sp"></span>
      <button class="wi-skip" id="wi-skip">${esc(T.obSkip)}</button>
    </div>
    <div class="wi-body${s.art ? '' : ' wide'}">
      <div class="wi-text">
        <h2>${esc(s.title)}</h2>
        <p>${esc(s.body)}</p>
        ${s.list ? `<ol class="wi-list">${s.list.map(x => `<li>${esc(x)}</li>`).join('')}</ol>` : ''}
      </div>
      ${s.art ? `<div class="wi-art">${s.art}</div>` : ''}
    </div>
    ${s.spine ? `<div class="wi-panel">${ART.phaseSpine(spine, null, '')}</div>` : ''}
    ${s.start ? `<div class="wi-starts">
      ${s.lead ? `<div class="wi-start"><span class="wi-sk">${esc(T.obStartLesson)}</span>
        <b>${esc(s.lead)}</b></div>` : ''}
      ${s.caseLead ? `<div class="wi-start"><span class="wi-sk">${esc(T.obStartCase)}</span>
        <b>${esc(s.caseLead)}</b></div>` : ''}
    </div>` : ''}
    <div class="wi-foot">
      <span class="wi-n">${i + 1} ${esc(T.obOf)} ${steps.length}</span>
      <span class="sp"></span>
      ${last
        ? (s.start
            ? `${s.lead ? `<button class="primary lg" id="wi-lesson">${esc(T.obStartLesson)}</button>` : ''}
               ${s.caseLead ? `<button class="wi-alt" id="wi-case">${esc(T.obStartCase)}</button>` : ''}
               <button class="wi-alt" id="wi-done">${esc(T.obDone)}</button>`
            : `<button class="primary lg" id="wi-done">${esc(s.cta || T.obDone)}</button>`)
        : `<button class="primary lg" id="wi-next">${esc(T.obNextStep)}</button>`}
    </div>
  </section>`;
}

function bindWalkIn(ctx) {
  const host = $('#walkin');
  if (!host) return;
  const close = () => { markWalkedIn(S.user.role); S.onboard = null; };
  const step = () => { S.onboard.step += 1; render(); };
  const on = (id, fn) => { const b = $('#' + id); if (b) b.onclick = fn; };
  on('wi-next', () => { step(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  on('wi-skip', () => { close(); render(); });
  on('wi-done', () => { close(); render(); });
  on('wi-lesson', () => { close(); openLesson(ctx.nextLesson.m.id, ctx.nextLesson.l.id); });
  on('wi-case', () => {
    close(); S.tab = 'practice'; renderTabs(); startCase(ctx.firstCase.id, false);
  });
}

// ==========================================================================
// CURRICULUM
// ==========================================================================
const PHASE_LABEL = {
  en: { preparation: 'Preparation', connection: 'Connection', discovery: 'Discovery', understanding: 'Understanding',
        education: 'Education', recommendation: 'Recommendation', decisionSupport: 'Decision support', continuation: 'Continuation' },
  es: { preparation: 'Preparación', connection: 'Conexión', discovery: 'Descubrimiento', understanding: 'Comprensión',
        education: 'Educación', recommendation: 'Recomendación', decisionSupport: 'Acompañamiento', continuation: 'Continuidad' }
};
const phaseLabel = k => (PHASE_LABEL[S.lang] && PHASE_LABEL[S.lang][k]) || k;

// The seven canonical Trust Stages, numbered as MBOK Ch.3 numbers them.
const STAGE_LABEL = {
  en: { safety: '1 Safety', attention: '2 Attention', understanding: '3 Understanding',
        credibility: '4 Credibility', alignment: '5 Alignment', reliability: '6 Reliability',
        confirmation: '7 Confirmation' },
  es: { safety: '1 Seguridad', attention: '2 Atención', understanding: '3 Comprensión',
        credibility: '4 Credibilidad', alignment: '5 Alineación', reliability: '6 Fiabilidad',
        confirmation: '7 Confirmación' }
};
const stageLabel = k => (STAGE_LABEL[S.lang] && STAGE_LABEL[S.lang][k]) || k;

/**
 * Where each module sits in the progression, and what state it is in. The
 * progression is the order the modules are numbered in; the canonical phase is
 * the one the module teaches, which is not the same order and is not meant to
 * be. `next` is the first available module that is not finished — there is
 * exactly one of it, or none.
 */
function progressionOf(mods) {
  const T = t();
  const list = (mods || []).slice().sort((a, b) => a.n - b.n);
  let nextTaken = false;
  return list.map(m => {
    const ready = m.status === 'available';
    const done = ready && m.lessons.length > 0 && m.completed === m.lessons.length;
    let state = 'open';
    if (done) state = 'done';
    else if (ready && !nextTaken) { state = 'next'; nextTaken = true; }
    return {
      m, n: m.n, stage: (T.stages && T.stages[m.n - 1]) || m.title,
      phaseN: phaseNumberOf(m.phase), phaseName: phaseLabel(m.phase),
      state, done: m.completed, total: m.lessons.length
    };
  });
}

function moduleGrid(mods, prog) {
  const T = t();
  const byId = {};
  (prog || progressionOf(mods)).forEach(p => { byId[p.m.id] = p; });
  return `<div class="modgrid">` + mods.map(m => {
    const ready = m.status === 'available';
    const p = byId[m.id] || { state: 'open', stage: '' };
    const done = p.state === 'done';
    // What the module BUYS her, before she has opened it. The strapline says
    // what it is about; this says what she will be able to do afterwards.
    const out = moduleOutcome(m);
    return `<article class="mod ${ready ? 'available' : ''} st-${p.state}" data-m="${m.id}" data-state="${p.state}">
      <div class="cover">${ART.cover(m.n, m.accent)}
        <span class="num">${String(m.n).padStart(2, '0')}</span>
        <span class="ph">${esc(phaseLabel(m.phase))}</span></div>
      <div class="body">
        <div class="stagek">${esc(p.stage)}${p.state === 'next' ? `<span class="nextk">${esc(T.curHere)}</span>` : ''}</div>
        <h3>${esc(m.title)}</h3>
        <div class="strap">${esc(m.strapline)}</div>
        ${out ? `<div class="modout">
          <span class="mok">${esc(T.outcomeCard)}</span>
          <p>${esc(out)}</p></div>` : ''}
        <div class="meta">
          ${ready ? ART.ring(m.completed, m.lessons.length) : ''}
          <span>${m.lessons.length} ${esc(T.lessonsIn)} · ${m.minutes} ${esc(T.min)}</span>
          <span class="sp"></span>
          <span class="badge ${done ? 'done' : ready ? 'ready' : 'prod'}">${esc(done ? T.completed : ready ? T.available : T.inProduction)}</span>
        </div>
      </div></article>`;
  }).join('') + `</div>`;
}
function bindModuleGrid() {
  document.querySelectorAll('.mod.available').forEach(a => a.onclick = () => openModule(a.dataset.m));
}

/**
 * THE CURRICULUM AS A PROGRESSION.
 * The ten modules are drawn as one ascent — psychology through to mastery —
 * with the learner's position on it, and the eight canonical phases drawn
 * underneath as the rail a consultation actually runs. A line joins each
 * module to the phase it teaches; the lines cross, and the crossing is the
 * point. Each module still opens to its lesson list.
 */
async function renderCurriculum() {
  const T = t();
  const c = await loadCurriculum(true);
  try { await loadOrientation(); } catch (e) { /* the spine also exists locally */ }
  const spine = (S.orientation && S.orientation.spine) ||
    PHASE_KEYS.map((k, i) => ({ n: i + 1, key: k, name: phaseLabel(k) }));
  const prog = progressionOf(c.modules);
  const doneCount = prog.filter(p => p.state === 'done').length;
  const next = prog.find(p => p.state === 'next') || null;

  $('#view').innerHTML = `
    <h1>${esc(T.curriculumTitle)}</h1>
    <p class="muted lead-note">${esc(T.curriculumSub)}</p>

    <section class="card curmap">
      <div class="curhead">
        <div>
          <h4>${esc(T.curMapTitle)}</h4>
          <p class="muted curnote">${esc(T.curMapSub)}</p>
        </div>
        <div class="curwhere">
          <div class="cwn"><b>${doneCount}</b><span>${esc(T.curDoneN)}</span></div>
          ${next ? `<div class="cwnext"><span class="cwk">${esc(T.curNextIs)}</span>
            <b>${next.n}. ${esc(next.stage)}</b>
            <span class="cwt">${esc(next.m.title)}</span>
            <button class="wi-alt" id="cur-next">${esc(T.curStart)}</button></div>`
          : `<div class="cwnext"><span class="cwk">${esc(T.curYouAre)}</span>
            <b>${esc(T.curNoneOpen)}</b></div>`}
        </div>
      </div>
      ${ART.curriculumMap(prog, spine.slice(0, 8), {
        ascent: T.curAscent, rail: T.curRail, here: T.curHere, teaches: T.curTeaches
      })}
    </section>

    ${moduleGrid(c.modules, prog)}`;
  bindModuleGrid();
  const cn = $('#cur-next');
  if (cn && next) cn.onclick = () => openModule(next.m.id);
}

async function openModule(moduleId) {
  const T = t();
  const c = await loadCurriculum();
  const m = c.modules.find(x => x.id === moduleId);
  $('#view').innerHTML = `
    <button class="ghost" id="bk">← ${esc(T.back)}</button>
    <section class="hero" style="margin-top:10px">
      <div class="kicker">${esc(T.moduleN)} ${String(m.n).padStart(2, '0')} · ${esc(phaseLabel(m.phase))}</div>
      <h1>${esc(m.title)}</h1>
      <p>${esc(m.summary)}</p>
      <div class="herostats">
        <div><b>${m.lessons.length}</b>${esc(T.lessonsIn)}</div>
        <div><b>${m.minutes}</b>${esc(T.min)}</div>
        <div><b>${m.completed}</b>${esc(T.statComplete)}</div>
      </div></section>
    ${moduleOutcome(m) ? `<section class="outpromise">
      <div class="opk">${esc(T.outcomeTitle2)}</div>
      <p>${esc(moduleOutcome(m))}</p>
    </section>` : ''}
    <div class="card"><h4>${esc(T.source)}</h4><div>${esc(m.source)}</div></div>
    <div class="card">
      ${m.lessons.map(l => {
        const done = l.progress && l.progress.status === 'complete';
        return `<div class="orderitem lessonrow ${done ? 'done' : ''} ${l.built ? '' : 'locked'}" data-l="${l.id}"
          style="cursor:${l.built ? 'pointer' : 'default'};opacity:${l.built ? 1 : .6};margin-bottom:9px">
          <div class="ord">${done ? '✓' : l.n}</div>
          <div class="txt"><b>${esc(l.title)}</b><br><span class="muted">${esc(l.objective)}</span></div>
          <div class="lmin">${l.minutes} ${esc(T.min)}</div>
          <span class="lgo" aria-hidden="true">›</span>
        </div>`;
      }).join('')}
    </div>
    <div class="card" style="background:var(--panel-2)">
      <h4>${esc(T.apply)}</h4>
      <p style="font-family:var(--serif);font-size:17px;margin:6px 0 6px">${esc(m.apply.assignment)}</p>
      <p class="muted" style="margin:0">${esc(m.apply.prompt)}</p>
    </div>`;
  $('#bk').onclick = () => { S.tab = 'curriculum'; renderTabs(); render(); };
  document.querySelectorAll('[data-l]').forEach(d => {
    const l = m.lessons.find(x => x.id === d.dataset.l);
    if (l && l.built) d.onclick = () => openLesson(m.id, l.id);
  });
}

// ==========================================================================
// LESSON PLAYER
// ==========================================================================
async function openLesson(moduleId, lessonId) {
  busy();
  const r = await api('GET', `/api/academy/modules/${moduleId}/lessons/${lessonId}`);
  if (!r.body.built) {
    const T = t();
    $('#view').innerHTML = `<button class="ghost" id="bk">← ${esc(T.back)}</button>
      <div class="card"><h1>${esc(r.body.lesson.title)}</h1>
      <p class="muted">${esc(r.body.lesson.objective)}</p>
      <div class="notice">${esc(r.body.note)}</div></div>`;
    $('#bk').onclick = () => openModule(moduleId);
    return;
  }
  // The module's clinic assignment lives on the curriculum, not on the lesson,
  // and the end of a lesson has to be able to name it. A cached curriculum
  // answers this without a second request; a failure simply means the
  // continuation panel says less, never that the lesson fails to open.
  let apply = null, lessonsInModule = 0, lessonsDoneInModule = 0;
  try {
    const c = await loadCurriculum();
    const cm = (c.modules || []).find(x => x.id === moduleId);
    if (cm) {
      apply = cm.apply || null;
      lessonsInModule = (cm.lessons || []).length;
      lessonsDoneInModule = cm.completed || 0;
    }
  } catch (e) { /* the lesson still opens */ }

  S.lesson = {
    module: r.body.module, lesson: r.body.lesson, index: 0, answers: {},
    apply, lessonsInModule, lessonsDoneInModule
  };
  renderLesson();
}

/**
 * The badge on a chosen line: WEAK / BEST / HARMFUL.
 *
 * `verdict` is a key in the curriculum data and is therefore always English.
 * Upper-casing it put "WEAK" in front of a Spanish practitioner, so the label
 * is looked up in the active language and the raw key is only a fallback for a
 * verdict this build does not yet have a word for.
 */
function verdictBadge(v) {
  const words = t().vd || {};
  return words[v] || String(v || '').toUpperCase();
}

const STAGE_FOR = {
  passage: 'learn', insight: 'learn', layers: 'learn', matrix: 'learn',
  signal: 'see', clientline: 'see', reveal: 'see',
  choose: 'choose', compare: 'choose', spot: 'choose', order: 'choose', sort: 'choose',
  match: 'choose', translate: 'experience', timedPause: 'experience', signalGallery: 'experience',
  drill: 'apply', check: 'reflect', reflect: 'reflect'
};

// ==========================================================================
// THE JOURNEY RAIL
//
// A lesson is not a list of blocks. It is a designed progression, and until
// now the practitioner could not see it: she knew she was on step 4 of 9 and
// nothing about what kind of step it was, or what was still coming.
//
// The rail is derived from this lesson's own blocks — never declared, never
// hardcoded. A lesson without a drill has no APPLY rung before the end; a
// lesson whose decisions carry no `retry` has no RETRY rung at all.
//
// CONSEQUENCE and RETRY are the two rungs that make this different from
// reading the book, so they are the two the rail works hardest to show. A
// decision block is not one rung: choosing, living with what the choice did,
// and being told why are three, and the rail walks them as the learner does.
// When a miss fires a retry the rail loops visibly BACK to the decision,
// because that loop is the thing she is paying for.
// ==========================================================================
const JOURNEY = ['learn', 'see', 'choose', 'consequence', 'understand', 'retry', 'apply', 'reflect'];

/** What the learner is asked to do inside one block, in the order she does it. */
const JOURNEY_FOR = {
  passage: ['learn'], insight: ['learn'], layers: ['learn'], matrix: ['learn'],
  signal: ['see'], clientline: ['see'], signalGallery: ['see'],
  reveal: ['see', 'choose', 'consequence', 'understand'],
  timedPause: ['see', 'consequence', 'understand'],
  choose: ['choose', 'consequence', 'understand'],
  compare: ['choose', 'consequence', 'understand'],
  spot: ['choose', 'consequence', 'understand'],
  check: ['choose', 'understand'],
  order: ['choose', 'understand'],
  sort: ['choose', 'understand'],
  match: ['choose', 'understand'],
  translate: ['apply'], drill: ['apply'],
  reflect: ['reflect']
};

const journeyStagesOf = kind => JOURNEY_FOR[kind] || ['learn'];
const journeyLabel = key => {
  const T = t();
  return key === 'consequence' ? T.jsConsequence
    : key === 'understand' ? T.jsUnderstand
    : key === 'retry' ? T.jsRetry
    : (T[key] || key);
};

/**
 * The rungs this lesson actually contains, in canonical order. A RETRY rung is
 * included only where a block really carries one, and it is marked as
 * conditional until a miss makes it real.
 */
function journeyOf(lesson) {
  const present = {};
  (lesson.blocks || []).forEach(b => {
    journeyStagesOf(b.kind).forEach(s => { present[s] = true; });
    if (b.retry) present.retry = 'maybe';
  });
  present.apply = present.apply || true;   // the lesson always ends on the assignment
  return JOURNEY.filter(k => present[k])
    .map(k => ({ key: k, label: journeyLabel(k), conditional: present[k] === 'maybe' }));
}

function railHTML(stages) {
  const T = t();
  return `<nav class="jrail" id="jrail" aria-label="${esc(T.jrTitle)}">
    <ol class="jrsteps">
      ${stages.map((s, n) => `<li class="jst" data-st="${esc(s.key)}"${s.conditional ? ' data-maybe="1"' : ''}>
        <span class="jdot"><i></i></span>
        <span class="jlab">${esc(s.label)}</span>
        ${s.conditional ? `<span class="jmaybe">${esc(T.jrMaybe)}</span>` : ''}
        <span class="jnow">${esc(T.jrNow)}</span>
      </li>`).join('')}
    </ol>
    <p class="jloop" id="jloop">${esc(T.jrLooped)}</p>
  </nav>`;
}

/**
 * Light the rail. `now` is the rung she is standing on; everything before it
 * has settled, everything after it is waiting. A rung she has already walked
 * and come back to keeps its settled mark and gains the loop.
 */
function setStage(key) {
  const L = S.lesson;
  if (!L || !L.rail) return;
  const rail = $('#jrail');
  if (!rail) return;
  const order = L.rail.stages.map(s => s.key);
  const at = order.indexOf(key);
  if (at < 0) return;
  L.rail.now = key;
  rail.querySelectorAll('.jst').forEach((li, n) => {
    li.classList.toggle('is-past', n < at);
    li.classList.toggle('is-now', n === at);
    li.classList.toggle('is-ahead', n > at);
  });
}

/** A miss fired the retry: show the rung become real, and the loop back to the decision. */
function fireRetryStage() {
  const L = S.lesson;
  if (!L || !L.rail) return;
  const rail = $('#jrail');
  if (!rail) return;
  L.rail.looped = true;
  rail.classList.add('looped');
  const r = rail.querySelector('.jst[data-st="retry"]');
  if (r) { r.classList.add('is-real'); r.removeAttribute('data-maybe'); }
  const c = rail.querySelector('.jst[data-st="choose"]');
  if (c) c.classList.add('is-again');
  setStage('retry');
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && c) { c.classList.remove('pulse'); void c.offsetWidth; c.classList.add('pulse'); }
}

// ==========================================================================
// THE REASONING UNDER THE LESSON
//
// Every lesson carries the three pieces of writing that make it worth €490
// rather than the price of the book: why a careful practitioner walks into
// this trap, what the client is thinking while she does, and the same moment
// answered three ways.
//
// It is teaching, not an exercise. It carries no stage chip, nothing in it is
// marked, and nothing in it is recorded.
// ==========================================================================
function depthPanel(d) {
  if (!d) return '';
  const T = t();
  const lad = d.ladder || {};
  const rungs = ['weak', 'average', 'strong'].filter(k => lad[k] && lad[k].line);
  const rungLabel = { weak: T.ldWeak, average: T.ldAverage, strong: T.ldStrong };
  const rungNote = { weak: T.ldWeakNote, average: T.ldAvgNote, strong: T.ldStrongNote };

  const why = d.whyItGoesWrong ? `<section class="dwhy">
      <div class="dpk">${esc(T.dpBefore)}</div>
      <h2>${esc(T.dpWhy)}</h2>
      <p>${esc(d.whyItGoesWrong)}</p>
    </section>` : '';

  const her = d.sheIsThinking ? `<section class="dthink">
      <span class="dtmark">${ART.quoteMark(38)}</span>
      <div class="dtbody">
        <div class="dtk">${esc(T.dpThinking)}</div>
        <blockquote>${esc(d.sheIsThinking)}</blockquote>
        <p class="dtnote">${esc(T.dpThinkingNote)}</p>
      </div>
    </section>` : '';

  const ladder = rungs.length ? `<section class="dladder" id="dladder">
      <div class="dpk">${esc(T.dpBefore)}</div>
      <h2>${esc(T.dpLadder)}</h2>
      <p class="dlsub">${esc(T.dpLadderSub)}</p>
      <div class="dlrungs" role="tablist">
        ${rungs.map((k, n) => `<button class="dlrung r-${k}" role="tab" aria-selected="false"
            data-rung="${k}" id="rung-${k}">
          <span class="dlnum">${n + 1}</span>
          <span class="dlname">${esc(rungLabel[k])}</span>
          <span class="dllock">${esc(T.ldLocked)}</span>
        </button>`).join('')}
      </div>
      <div class="dlstage" id="dlstage" role="tabpanel">
        <p class="dlempty">${esc(T.ldPick)}</p>
      </div>
      <p class="dlfoot">${esc(T.ldNotGraded)}</p>
    </section>` : '';

  if (!why && !her && !ladder) return '';
  return `<div class="depth">${why}${her}${ladder}</div>`;
}

/**
 * The ladder is wired after the lesson is on screen. The strong rung stays shut
 * until the other two have been opened: the whole teaching point is that strong
 * only stops looking obvious once you have felt what the safe answer costs.
 */
function wireLadder(d) {
  if (!d || !d.ladder) return;
  const T = t();
  const lad = d.ladder;
  const host = $('#dladder');
  if (!host) return;
  const stage = $('#dlstage');
  const seen = {};
  const rungLabel = { weak: T.ldWeak, average: T.ldAverage, strong: T.ldStrong };
  const rungNote = { weak: T.ldWeakNote, average: T.ldAvgNote, strong: T.ldStrongNote };
  const unlocked = () => !!(seen.weak && seen.average);

  const paint = () => host.querySelectorAll('.dlrung').forEach(btn => {
    const k = btn.dataset.rung;
    const shut = k === 'strong' && !unlocked();
    btn.classList.toggle('shut', shut);
    btn.classList.toggle('read', !!seen[k]);
    btn.setAttribute('aria-disabled', shut ? 'true' : 'false');
  });

  const show = (k) => {
    const r = lad[k];
    if (!r) return;
    seen[k] = true;
    paint();
    host.querySelectorAll('.dlrung').forEach(b => {
      const on = b.dataset.rung === k;
      b.classList.toggle('on', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    stage.className = 'dlstage on r-' + k;
    stage.innerHTML = `<div class="dlhead"><span class="dlbadge">${esc(rungLabel[k])}</span></div>
      <div class="dlsays"><div class="dlk">${esc(T.ldSays)}</div>
        <q>${esc(r.line)}</q></div>
      <div class="dldoes"><div class="dlk">${esc(T.ldDoes)}</div>
        <p>${esc(r.effect)}</p></div>
      <p class="dlcost">${esc(rungNote[k] || '')}</p>
      ${k !== 'strong' && !unlocked() ? `<p class="dlgate">${esc(T.ldLockedWhy)}</p>` : ''}`;
  };

  host.querySelectorAll('.dlrung').forEach(btn => btn.onclick = () => {
    if (btn.classList.contains('shut')) {
      const gate = stage.querySelector('.dlgate');
      if (gate) {
        const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!reduce) { gate.classList.remove('nudge'); void gate.offsetWidth; gate.classList.add('nudge'); }
      }
      return;
    }
    show(btn.dataset.rung);
  });
  paint();
}

// ==========================================================================
// A WRITTEN LINE, AS THE CONTENT ACTUALLY SHIPS IT
//
// Every line in the curriculum arrives already punctuated, and the two
// languages do not punctuate alike: English writes "like this", Spanish
// writes «así». A handful of lines are not dialogue at all — they are stage
// directions, or a spoken fragment with a direction attached to it:
//
//     "380 €." — and wait for her next question.
//     «380 €.» — y espera a su siguiente pregunta.
//     (Nothing. Three full seconds, hands still, eyes on her.)
//     Put the pen down. "Say that again?"
//
// So the screen adds no quotation marks of its own: it would put marks inside
// marks, it would put English marks around Spanish speech, and it would turn
// a direction into something somebody said out loud. What this does instead is
// separate the direction from the words, so the two can be set differently,
// and hand back the spoken part with the author's own punctuation on it.
// Anything that will not split cleanly is shown exactly as it was written.
// ==========================================================================
const QUOTE_CLOSER = { '"': '"', '“': '”', '«': '»' };

/**
 * One line, read as the beats it is actually made of: what is spoken, and
 * what is only done. A line can be all speech, all direction, or alternate —
 * «Sí.» (pausa) «Dicho así suena bastante triste.» is three beats and two of
 * them are things she says out loud.
 *
 * Punctuation that sits outside the closing mark, as Spanish sets it, is kept
 * with the quotation it belongs to rather than orphaned at the head of the
 * direction. Nothing is added and nothing is re-punctuated.
 */
function lineBeats(raw) {
  const s = String(raw == null ? '' : raw).trim();
  if (!s) return [];
  const beats = [];
  let buf = '';
  const flush = () => {
    const a = buf.replace(/^[\s—–-]+/, '').trim().replace(/^\(([\s\S]*)\)$/, '$1').trim();
    if (a) beats.push({ kind: 'aside', text: a });
    buf = '';
  };
  for (let i = 0; i < s.length; i++) {
    const closer = QUOTE_CLOSER[s[i]];
    const end = closer ? s.indexOf(closer, i + 1) : -1;
    if (end > i) {
      let j = end + 1;
      while (j < s.length && /[.,;:!?…]/.test(s[j])) j++;   // «…ochenta». keeps its stop
      flush();
      beats.push({ kind: 'said', text: s.slice(i, j) });
      i = j - 1;
      continue;
    }
    buf += s[i];
  }
  flush();
  return beats.length ? beats : [{ kind: 'said', text: s }];
}

/** One line on the page: the words as written, the direction set beside them. */
function lineHTML(raw, cls) {
  const k = cls ? ' ' + cls : '';
  const beats = lineBeats(raw);
  // Where the whole answer IS the direction — "Nothing. Three full seconds,
  // hands still, eyes on her." — it is the line, and it is set as one rather
  // than whispered underneath a line that is not there.
  const lone = beats.some(b => b.kind === 'said') ? '' : ' lone';
  return beats.map(b => b.kind === 'said'
    ? `<p class="say${k}">${esc(b.text)}</p>`
    : `<p class="aside${lone}">${esc(b.text)}</p>`).join('');
}

// ==========================================================================
// TREATMENT CARDS
//
// The moment the lesson stops being abstract. A practitioner who injects
// toxin all day was being taught the consultation in the abstract; here the
// lesson's own principle is put against a named treatment at a Madrid price,
// because a €320 toxin appointment and a €3,200 body programme are not the
// same conversation and the same sentence does different work in each.
//
// Teaching, not an exercise: nothing here is marked and nothing is recorded.
// ==========================================================================
function treatmentsPanel(list) {
  if (!Array.isArray(list) || !list.length) return '';
  const T = t();
  const cards = list.filter(x => x && x.name).map((tr, i) => {
    const weak = tr.weak || {}, strong = tr.strong || {};
    return `<article class="trxc">
      <header class="trxh">
        <span class="trxn">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="trxname">${esc(tr.name)}</h3>
        ${tr.price ? `<span class="trxprice">${esc(tr.price)}</span>` : ''}
      </header>
      ${tr.why ? `<p class="trxwhy">${esc(tr.why)}</p>` : ''}
      ${tr.moment ? `<div class="trxmom">
        <div class="trxk">${esc(T.trxMoment)}</div>
        <p>${esc(tr.moment)}</p></div>` : ''}
      <div class="trxlines">
        ${weak.line ? `<section class="trxl weak">
          <div class="trxk">${esc(T.trxWeak)}</div>
          ${lineHTML(weak.line)}
          ${weak.cost ? `<p class="trxeff"><span>${esc(T.trxCost)}</span>${esc(weak.cost)}</p>` : ''}
        </section>` : ''}
        ${strong.line ? `<section class="trxl strong">
          <div class="trxk">${esc(T.trxStrong)}</div>
          ${lineHTML(strong.line)}
          ${strong.gain ? `<p class="trxeff"><span>${esc(T.trxGain)}</span>${esc(strong.gain)}</p>` : ''}
        </section>` : ''}
      </div>
    </article>`;
  }).join('');
  if (!cards) return '';
  return `<section class="trx">
    <div class="dpk">${esc(T.trxKick)}</div>
    <h2>${esc(T.trxTitle)}</h2>
    <p class="trxsub">${esc(T.trxSub)}</p>
    <div class="trxset" data-n="${list.length}">${cards}</div>
    <p class="trxfoot">${esc(T.trxFoot)}</p>
  </section>`;
}

// ==========================================================================
// THE BEFORE / AFTER CONVERSATION
//
// A ladder compares single lines. This compares a whole exchange, which is
// where a practitioner sees that the damage is cumulative rather than one
// badly chosen sentence.
//
// Both versions open on the identical client line by contract, so that line
// is lifted out and shown once, above both columns: the comparison is about
// the practitioner and nothing else. The first turn where the two versions
// stop agreeing is marked in both columns, because "where it went wrong" is
// the thing she is here to see.
//
// Teaching, not an exercise. It is neither the lesson's CHOOSE nor its RETRY,
// it carries no stage chip, and nothing in it is recorded.
// ==========================================================================
function conversationPanel(c) {
  if (!c || !Array.isArray(c.before) || !Array.isArray(c.after)) return '';
  if (!c.before.length || !c.after.length) return '';
  const T = t();

  const same = (x, y) => x && y && x.who === y.who && String(x.line) === String(y.line);
  const shared = same(c.before[0], c.after[0]) && c.before[0].who === 'client' ? c.before[0] : null;
  const before = shared ? c.before.slice(1) : c.before;
  const after = shared ? c.after.slice(1) : c.after;

  // The first turn at which the two versions stop being the same conversation.
  let split = -1;
  const n = Math.max(before.length, after.length);
  for (let i = 0; i < n; i++) { if (!same(before[i], after[i])) { split = i; break; } }

  const turn = (tn, i) => `${i === split ? `<li class="cvsplit"><span>${esc(T.cvSplit)}</span></li>` : ''}
    <li class="cvt ${tn.who === 'client' ? 'cl' : 'pr'}${i === split ? ' diverge' : ''}">
      <span class="cvwho">${esc(tn.who === 'client' ? T.cvClient : T.cvYou)}</span>
      <div class="cvbub">${lineHTML(tn.line)}</div>
    </li>`;

  const column = (turns, kind, label, note) => `<section class="cvcol ${kind}">
    <header class="cvch">
      <span class="cvtag">${esc(label)}</span>
      <p>${esc(note)}</p>
    </header>
    <ol class="cvturns">${turns.map(turn).join('')}</ol>
  </section>`;

  return `<section class="cv">
    <div class="dpk">${esc(T.cvKick)}</div>
    <h2>${esc(T.cvTitle)}</h2>
    <p class="cvsub">${esc(T.cvSub)}</p>
    ${c.setting ? `<div class="cvset">
      <div class="trxk">${esc(T.cvSetting)}</div>
      <p>${esc(c.setting)}</p></div>` : ''}
    ${shared ? `<div class="cvshared">
      <div class="cvsharedk">${esc(T.cvShared)}</div>
      <div class="cvt cl">
        <span class="cvwho">${esc(T.cvClient)}</span>
        <div class="cvbub">${lineHTML(shared.line)}</div>
      </div>
      <p class="cvsharednote">${esc(T.cvSharedNote)}</p>
    </div>` : ''}
    <div class="cvcols">
      ${column(before, 'was', T.cvBefore, T.cvBeforeNote)}
      ${column(after, 'is', T.cvAfter, T.cvAfterNote)}
    </div>
    ${c.whatChanged ? `<section class="cvchanged">
      <div class="trxk">${esc(T.cvChanged)}</div>
      <p>${esc(c.whatChanged)}</p></section>` : ''}
    ${c.cost ? `<section class="cvcost">
      <span class="cvcostmark">${ART.quoteMark(34)}</span>
      <div class="cvcostin">
        <div class="cvcostk">${esc(T.cvCost)}</div>
        <p>${esc(c.cost)}</p>
      </div></section>` : ''}
    <p class="trxfoot">${esc(T.cvFoot)}</p>
  </section>`;
}

/**
 * A lesson opens on a cover, not on a paragraph: the module it belongs to and
 * that module's own drawn composition, the title, what the lesson leaves her
 * with, the canonical phase it teaches, and how long it takes. Then the
 * lesson runs as a sequence of beats, one at a time, with the step counter
 * where a thumb can see it on a phone.
 */
/**
 * WHERE THIS LESSON COMES FROM
 *
 * Six things a practitioner — or her clinic's auditor — can ask of any lesson:
 * which chapter of the book, which principle, which canonical phase, which
 * Trust Stage it forms, which Standard governs it, which Duty binds it, and the
 * Toolkit where one applies. Rendered from the lesson's own `provenance`, so it
 * cannot drift from what the content actually claims.
 */
function provenancePanel(p) {
  if (!p) return '';
  const T = t();
  const chapters = (Array.isArray(p.chapter) ? p.chapter : [p.chapter]).filter(c => c != null);
  const row = (label, value) => value
    ? `<div class="pvr"><span>${esc(label)}</span><b>${esc(value)}</b></div>` : '';
  return `<details class="prov">
    <summary><span class="pvtag">${esc(T.pvTitle)}</span>
      <span class="pvsum">${esc(chapters.length ? T.pvChapter + ' ' + chapters.join(' · ') : T.pvCanonical)}</span></summary>
    <blockquote class="pvprin">${esc(p.principle)}</blockquote>
    <div class="pvgrid">
      ${row(T.pvBook, chapters.length ? T.pvChapter + ' ' + chapters.join(', ') : '—')}
      ${row(T.pvPhase, phaseNumberOf(p.phase) + ' · ' + phaseLabel(p.phase))}
      ${row(T.pvStage, stageLabel(p.trustStage))}
      ${row(T.pvStandard, T.pvStandard0 + ' ' + p.standard)}
      ${row(T.pvDuty, T.pvDuty0 + ' ' + p.duty)}
      ${row(T.pvToolkit, p.toolkit ? '#' + p.toolkit : T.pvNoToolkit)}
    </div>
  </details>`;
}

function renderLesson() {
  const T = t();
  const L = S.lesson;
  const total = L.lesson.blocks.length;
  const m = L.module;
  const phaseN = phaseNumberOf(m.phase);
  const stepNow = Math.min(L.index + 1, total);
  L.rail = { stages: journeyOf(L.lesson), now: null, looped: false };
  // The module's promise, carried down onto the lesson: what she will be able
  // to do, and the fact that this lesson is one of the things that gets her there.
  const outcome = moduleOutcome(m);
  $('#view').innerHTML = `<div class="lessonhead">
      <button class="ghost back" id="bk">← ${esc(L.module.title)}</button>
    </div>
    <section class="lcover">
      ${ART.coverBand(m.n, m.accent)}
      <div class="lcin">
        <div class="lckick"><span>${esc(T.lcModule)} ${String(m.n).padStart(2, '0')}</span>
          <i class="lcdot"></i><span>${esc(m.title)}</span></div>
        <h1 class="lctitle">${esc(L.lesson.title)}</h1>
        <p class="lcobj">${esc(L.lesson.objective)}</p>
        ${outcome ? `<div class="lcout">
          <span class="lcoutk">${esc(T.outcomeLesson)}</span>
          <p>${esc(outcome)}</p></div>` : ''}
        <div class="lcmeta">
          <div class="lcm"><span>${esc(T.lcTeaches)}</span><b>${phaseN} · ${esc(phaseLabel(m.phase))}</b></div>
          <div class="lcm"><span>${esc(T.lessonN)}</span><b>${L.lesson.n}</b></div>
          <div class="lcm"><span>${esc(T.lcRead)}</span><b>${L.lesson.minutes} ${esc(T.min)}</b></div>
        </div>
      </div>
    </section>
    ${provenancePanel(L.lesson.provenance)}
    <div class="lprog" id="lprog">
      <span class="lpk">${esc(T.lcStep)} <b id="pstep">${stepNow}</b> ${esc(T.lcOf)} ${total}</span>
      <span class="progressline" role="progressbar" aria-label="${esc(T.lcProgress)}">
        <i id="plin" style="width:${((L.index + 1) / total * 100).toFixed(0)}%"></i></span>
    </div>
    ${railHTML(L.rail.stages)}
    ${depthPanel(L.lesson.depth)}
    ${treatmentsPanel(L.lesson.treatments)}
    ${conversationPanel(L.lesson.conversation)}
    <div id="blocks"></div>
    <div id="tail"></div>`;
  $('#bk').onclick = () => { S.lesson = null; openModule(L.module.id); };
  wireLadder(L.lesson.depth);
  for (let i = 0; i <= L.index && i < total; i++) appendBlock(i, false);
  renderTail();
}

/** Blocks are appended once and never re-rendered, so answered work stays visible. */
function appendBlock(i, scroll) {
  const T = t(), L = S.lesson, b = L.lesson.blocks[i];
  const node = el(`<section class="block k-${esc(b.kind)}" data-b="${i}">
      <div class="stage">${esc(T[STAGE_FOR[b.kind] || 'learn'])}</div>
      <div class="bi"></div></section>`);
  $('#blocks').appendChild(node);
  renderBlock(b, i, node.querySelector('.bi'));
  // Opening a block puts her on the first rung that block asks of her.
  setStage(journeyStagesOf(b.kind)[0]);
  if (scroll) {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    node.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  }
}

function advanceBlock() {
  const L = S.lesson, total = L.lesson.blocks.length;
  // retire the block that was just completed
  const blocks = document.querySelectorAll('#blocks .block');
  const last = blocks[blocks.length - 1];
  if (last) {
    last.classList.add('done');
    const nb = last.querySelector('[data-next]');
    if (nb) nb.remove();
  }
  if (L.index < total - 1) {
    L.index++;
    appendBlock(L.index, true);
  } else {
    L.index = total;
  }
  const pct = Math.min(1, (L.index + 1) / total) * 100;
  const bar = $('#plin'); if (bar) bar.style.width = pct.toFixed(0) + '%';
  const st = $('#pstep'); if (st) st.textContent = Math.min(L.index + 1, total);
  renderTail();
}

// ==========================================================================
// THE ARC DOES NOT END AT THE LESSON
//
// Six of the nine stages happen on this screen. The last three do not: the
// assignment is carried into a real consultation, what happened is written up
// on the way back, and what she writes is what her manager coaches from.
//
// Until this was on the page, a practitioner finished a lesson and the product
// looked like a book with buttons. So the end of a lesson names all three,
// with the module's own assignment in it, and is never a dead end.
// ==========================================================================
function continuationHTML(L) {
  const T = t();
  const apply = L.apply || null;
  const assignment = apply ? loc(apply.assignment) : '';
  const prompt = apply ? loc(apply.prompt) : '';
  // The assignment opens when the last lesson of the module is finished. This
  // lesson is not recorded until she presses Finish, so it counts itself in.
  const done = (L.lessonsDoneInModule || 0) + ((L.lesson.progress && L.lesson.progress.status === 'complete') ? 0 : 1);
  const willBeOpen = L.lessonsInModule > 0 && done >= L.lessonsInModule;

  const step = (n, title, body, extra) => `<li class="contstep">
    <span class="contn">${n}</span>
    <div class="contbody">
      <h3>${esc(title)}</h3>
      ${body}
      ${extra || ''}
    </div>
  </li>`;

  return `<section class="cont">
    <div class="contk">${esc(T.contKick)}</div>
    <h2>${esc(T.contTitle)}</h2>
    <p class="contlead">${esc(T.contLead)}</p>
    <ol class="contst">
      ${step(7, T.arcS7,
        assignment
          ? `<p class="assignline">${esc(assignment)}</p>`
          : `<p class="muted">${esc(T.contNoAssign)}</p>`,
        assignment ? `<p class="contwhen">${esc(willBeOpen ? T.contOpenNow : T.contOpensAt)}</p>` : '')}
      ${step(8, T.arcS8, `<p>${esc(T.contReflect)}</p>`,
        prompt ? `<p class="contq">${esc(prompt)}</p>` : '')}
      ${step(9, T.arcS9, `<p>${esc(T.contCoach)}</p>`, '')}
    </ol>
    <div class="contacts">
      <button class="wi-alt" id="cont-arc">${esc(T.contSeeArc)}</button>
      ${S.user.role === 'manager' ? '' : `<button class="ghost" id="cont-journal">${esc(T.contOpenJournal)}</button>`}
    </div>
  </section>`;
}

function renderTail() {
  const T = t(), L = S.lesson;
  const tail = $('#tail');
  if (!tail) return;
  if (L.index < L.lesson.blocks.length) { tail.innerHTML = ''; return; }
  setStage('apply');
  tail.innerHTML = `<section class="block lend">
      <div class="stage">${esc(T.apply)}</div>
      <h2>${esc(T.lessonDone)}</h2>
      <p class="lendobj">${esc(L.lesson.objective)}</p>
      ${continuationHTML(L)}
      <button class="primary lg" id="fin">${esc(T.finish)}</button>
    </section>`;
  // The lesson is recorded whichever of these she presses. Following the arc
  // off this page is not a reason to lose the work that put her on it.
  const record = async () => {
    const res = await api('POST', '/api/academy/progress', {
      moduleId: L.module.id, lessonId: L.lesson.id, status: 'complete', payload: L.answers
    });
    S.curriculum = null; S.library = null; S.journey = null;
    return res;
  };
  const leave = tab => async () => {
    busy();
    try { await record(); } catch (e) { /* she still gets where she was going */ }
    S.lesson = null; S.tab = tab; renderTabs(); render();
  };
  const ca = $('#cont-arc');
  if (ca) ca.onclick = leave(S.user.role === 'manager' ? 'start' : 'progress');
  const cj = $('#cont-journal'); if (cj) cj.onclick = leave('journal');
  $('#fin').onclick = async () => {
    const res = await record();
    const mid = L.module.id, lid = L.lesson.id;
    S.lesson = null;
    const c = await loadCurriculum(true);
    S.completion = lessonCompletion(c, mid, lid, res.body && res.body.assignment);
    render();
  };
}

// ==========================================================================
// COMPLETION AND CONTINUATION
//
// Finishing something has to be marked, and marked honestly: what she can now
// do that she could not before, what the next thing is, and the one thing to
// take into a real consultation this week. No certificate, no badge, no score,
// no ranking — the sentences are read off the work that was actually recorded,
// and where the record supports nothing, nothing is claimed.
// ==========================================================================
function lessonCompletion(c, moduleId, lessonId, assignment) {
  const T = t();
  const mods = (c.modules || []).slice().sort((a, b) => a.n - b.n);
  const m = mods.find(x => x.id === moduleId) || mods[0];
  const l = (m.lessons || []).find(x => x.id === lessonId) || null;
  const moduleDone = m.lessons.length > 0 && m.completed === m.lessons.length;
  const available = mods.filter(x => x.status === 'available');
  const allDone = available.length === mods.length &&
                  available.every(x => x.lessons.length > 0 && x.completed === x.lessons.length);

  const nextLessonInModule = (m.lessons || []).find(x => x.built && (!x.progress || x.progress.status !== 'complete')) || null;
  let nextModule = null;
  for (const x of mods) {
    if (x.status !== 'available') continue;
    if (x.lessons.length > 0 && x.completed === x.lessons.length) continue;
    if (x.id === m.id && nextLessonInModule) continue;
    nextModule = x; break;
  }

  const apply = m.apply || {};
  return {
    kind: allDone ? 'all' : moduleDone ? 'module' : 'lesson',
    module: m, lesson: l, assignment: assignment || null,
    title: allDone ? T.cmpAll : moduleDone ? T.cmpModule : T.cmpLesson,
    heading: allDone ? '' : moduleDone ? m.title : (l ? l.title : m.title),
    nowCan: allDone ? T.cmpAllBody : moduleDone ? m.summary : (l ? l.objective : m.summary),
    body: moduleDone && !allDone ? T.cmpModuleBody : '',
    nextLine: allDone ? T.cmpAllNext
      : nextLessonInModule ? `${m.title} · ${T.lessonN} ${nextLessonInModule.n} — ${nextLessonInModule.title}`
      : nextModule ? `${nextModule.n}. ${(T.stages && T.stages[nextModule.n - 1]) || ''} — ${nextModule.title}`
      : T.cmpNoNext,
    nextLesson: nextLessonInModule, nextModule,
    thisWeek: apply.assignment || '',
    thisWeekPrompt: apply.prompt || '',
    modulesDone: available.filter(x => x.lessons.length > 0 && x.completed === x.lessons.length).length,
    modulesTotal: mods.length,
    lessonsDone: mods.reduce((s, x) => s + x.completed, 0)
  };
}

function renderCompletion() {
  const T = t();
  const k = S.completion;
  const all = k.kind === 'all';
  $('#view').innerHTML = `
    <section class="hero cmphero ${all ? 'cmpall' : ''}">
      <div class="kicker">${esc(k.title)}</div>
      ${k.heading ? `<h1>${esc(k.heading)}</h1>` : `<h1>${esc(T.cmpAll)}</h1>`}
      ${k.body ? `<p>${esc(k.body)}</p>` : ''}
      <div class="herostats">
        <div><b>${k.lessonsDone}</b>${esc(T.lessonsCompleted)}</div>
        <div><b>${k.modulesDone}/${k.modulesTotal}</b>${esc(T.curDoneN)}</div>
      </div>
    </section>

    <div class="cols two">
      <section class="card cmpcard">
        <h4>${esc(T.cmpNowCan)}</h4>
        <p class="cmpline">${esc(k.nowCan)}</p>
      </section>
      <section class="card cmpcard">
        <h4>${esc(T.cmpNextThing)}</h4>
        <p class="cmpline">${esc(k.nextLine)}</p>
      </section>
    </div>

    ${k.thisWeek ? `<section class="card cmpweek">
      <h4>${esc(T.cmpThisWeek)}</h4>
      <p class="assignline">${esc(loc(k.thisWeek))}</p>
      ${k.thisWeekPrompt ? `<p class="muted">${esc(loc(k.thisWeekPrompt))}</p>` : ''}
      <ol class="cmpon">
        <li><span>8</span><div><b>${esc(T.arcS8)}</b>${esc(T.contReflect)}</div></li>
        <li><span>9</span><div><b>${esc(T.arcS9)}</b>${esc(T.contCoach)}</div></li>
      </ol>
    </section>` : ''}

    <div class="cmpacts">
      ${k.nextLesson ? `<button class="primary lg" id="cmp-lesson">${esc(T.cmpOpenNext)}</button>` : ''}
      ${!k.nextLesson && k.nextModule ? `<button class="primary lg" id="cmp-module">${esc(T.cmpOpenNextModule)}</button>` : ''}
      ${k.kind !== 'lesson' ? `<button class="wi-alt" id="cmp-journal">${esc(T.cmpOpenJournal)}</button>` : ''}
      <button class="wi-alt" id="cmp-case">${esc(T.cmpOpenCase)}</button>
      <button class="ghost" id="cmp-back">${esc(T.cmpBackToModule)}</button>
    </div>
    <p class="muted cmphonest">${esc(T.cmpHonest)}</p>`;

  const go = (id, fn) => { const b = $('#' + id); if (b) b.onclick = () => { const m = S.completion; S.completion = null; fn(m); }; };
  go('cmp-lesson', m => openLesson(m.module.id, m.nextLesson.id));
  go('cmp-module', m => openModule(m.nextModule.id));
  go('cmp-journal', () => { S.tab = 'journal'; renderTabs(); render(); });
  go('cmp-case', () => { S.tab = 'practice'; renderTabs(); render(); });
  go('cmp-back', m => openModule(m.module.id));
}

const nextBtn = (label) => `<div style="margin-top:16px"><button class="primary" data-next>${esc(label || t().next)}</button></div>`;
function wireNext(host) {
  const b = host.querySelector('[data-next]');
  if (b) b.onclick = advanceBlock;
}

/**
 * THE RETRY STAGE
 *
 * Reading why an answer was wrong is not the same as being able to do it right.
 * After a missed decision the learner is handed a second, different moment that
 * needs the same skill, while the coaching is still on screen. This is the
 * difference between a lesson that explains and a lesson that trains.
 */
function renderRetry(r, host, i) {
  const T = t();
  const id = 'rt' + i;
  host.insertAdjacentHTML('beforeend', `
    <section class="retry" id="${id}">
      <div class="retrytop">
        <span class="rtmark">${ART.secondChance(34)}</span>
        <div class="retryhead">
          <div class="rtline"><span class="rtag">${esc(T.retryTag)}</span>
            <span class="rtstep">${esc(T.retrySecond)}</span></div>
          <p>${esc(r.note || T.retryNote)}</p>
        </div>
      </div>
      <div class="retrybody">
        <div class="prompt">${esc(r.prompt)}</div>
        <div class="opts">${r.options.map(o => `<button class="opt" data-r="${o.id}">
          <div class="lab">${esc(o.label)}</div></button>`).join('')}</div>
        <div id="${id}w" class="hidden"></div>
      </div>
      <p class="retryfoot">${esc(T.retryWhy)}</p>
    </section>`);
  const box = host.querySelector('#' + id);
  // The rail shows the loop: the retry rung becomes real and the decision
  // lights again, because she is about to make it a second time.
  fireRetryStage();
  box.querySelectorAll('[data-r]').forEach(btn => btn.onclick = () => {
    const o = r.options.find(x => x.id === btn.dataset.r);
    btn.classList.add(o.verdict === 'best' ? 'correct' : 'wrong');
    btn.insertAdjacentHTML('beforeend',
      `<div class="why"><span class="verdict v-${esc(o.verdict)}">${esc(verdictBadge(o.verdict))}</span><br>${esc(o.why)}</div>`);
    if (o.verdict !== 'best') { btn.classList.add('locked'); btn.onclick = null; return; }
    box.querySelectorAll('[data-r]').forEach(x => { x.classList.add('locked'); x.onclick = null; });
    S.lesson.answers['retry' + i] = o.id;
    const w = box.querySelector('#' + id + 'w'); w.className = '';
    // The retry's whole justification: name what moved in the consultation.
    const ch = r.changes
      ? `<div class="rchange"><span class="rcax">${esc(T['ax_' + r.changes.axis] || r.changes.axis)}</span>
           <p>${esc(r.changes.detail)}</p></div>` : '';
    w.innerHTML = `<div class="principle sage"><b>${esc(T.retryLanded)}</b>${esc(r.principle)}</div>`
      + ch + nextBtn();
    setStage('understand');
    wireNext(box.parentElement.closest('.bi') || box);
  });
}

function renderBlock(b, i, host) {
  const T = t();
  const R = {

    /* A passage is not a wall. The first paragraph carries the idea and is set
       as such; every paragraph after it is a separate beat with its own mark,
       so three paragraphs read as three moves and not as one block of prose.
       A teaching diagram becomes a band of its own, ruled off above and below. */
    passage() {
      const body = (b.body || []).filter(x => x);
      const lede = body[0] || '';
      const beats = body.slice(1);
      host.innerHTML = `${b.title ? `<h2 class="pstitle">${esc(b.title)}</h2>` : ''}
        ${lede ? `<p class="plede">${esc(lede)}</p>` : ''}
        ${beats.length ? `<div class="pbeats">${beats.map((p, k) =>
          `<div class="pbeat"><span class="pbn">${k + 2}</span><p>${esc(p)}</p></div>`).join('')}</div>` : ''}
        ${b.diagram ? `<figure class="pfigure">${ART.diagram(b.diagram, S.lang)}</figure>` : ''}
        ${nextBtn()}`;
      wireNext(host);
    },

    /* The book itself. These are the sentences the whole method rests on, so
       they are set as a pull-quote on espresso with the chapter as a citation,
       and the reading of it kept separate and quieter underneath. */
    insight() {
      host.parentElement.classList.add('insight');
      host.innerHTML = `<div class="insgrid">
          <div class="insleft">
            <div class="insmark">${ART.quoteMark(46)}</div>
            <div class="inskick">${esc(T.fromBook)}</div>
            <blockquote class="inspull">${esc(b.quote)}</blockquote>
          </div>
          <div class="insright">
            <div class="insrule"></div>
            <cite class="cite inssrc"><span class="insck">${esc(T.insCite)}</span>${esc(b.source)}</cite>
            ${b.note ? `<div class="insnote"><div class="insnk">${esc(T.insRead)}</div>
              <p class="note">${esc(b.note)}</p></div>` : ''}
          </div>
        </div>
        ${nextBtn()}`;
      wireNext(host);
    },

    /* Two frameworks side by side. Used where the learner must hold two
       related-but-distinct canons apart instead of collapsing them. */
    layers() {
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        <div class="layers">
          ${b.layers.map(L => `<div class="layer">
            <div class="laytag">${esc(L.tag)}</div>
            <h3>${esc(L.name)}</h3>
            <div class="src">${esc(L.source)}</div>
            <ol class="laylist">${L.items.map(x =>
              `<li><b>${esc(x.k)}</b><span>${esc(x.v)}</span></li>`).join('')}</ol>
            <p class="note">${esc(L.role)}</p>
          </div>`).join('')}
        </div>
        <div class="statement">${esc(b.statement)}</div>
        ${nextBtn()}`;
      wireNext(host);
    },

    /* The canonical mapping table. Scrolls inside its own container so the
       page body never scrolls sideways on a phone. */
    matrix() {
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        <div class="tablewrap"><table class="matrix">
          <thead><tr><th>${esc(b.rowHeader)}</th>${b.columns.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead>
          <tbody>${b.rows.map(r => `
            <tr class="mrow">
              <th scope="row"><span class="lt">${esc(r.letter)}</span><span class="stepn">${esc(r.step)}</span></th>
              ${r.cells.map(c => `<td>${esc(c)}</td>`).join('')}
            </tr>
            <tr class="prov"><td colspan="${b.columns.length + 1}">
              <b>${esc(b.provenanceLabel)}</b> ${esc(r.provenance)}</td></tr>`).join('')}
          </tbody>
        </table></div>
        ${b.gaps ? `<div class="gaps"><h4>${esc(b.gapsTitle)}</h4>
          ${b.gaps.map(g => `<div class="gap"><b>${esc(g.phase)}</b><p>${esc(g.note)}</p></div>`).join('')}
        </div>` : ''}
        ${nextBtn()}`;
      wireNext(host);
    },

    signal() {
      host.innerHTML = `${b.name ? `<h4>${esc(b.name)}</h4>` : ''}
        <div class="clientline"><div class="who">${esc(T.whatSheSays)}</div>
          <blockquote>${esc(b.client)}</blockquote></div>
        <div class="prompt">${esc(b.prompt || T.whatDidYouNotice)}</div>
        <button class="gold" id="rv${i}">${esc(T.reveal)}</button>
        <div id="nt${i}" class="hidden"><ul style="margin-top:14px;padding-left:20px">
          ${(b.notice || []).map(n => `<li style="margin-bottom:8px">${esc(n)}</li>`).join('')}</ul>${nextBtn()}</div>`;
      host.querySelector('#rv' + i).onclick = (e) => {
        e.target.classList.add('hidden');
        host.querySelector('#nt' + i).classList.remove('hidden');
        wireNext(host);
      };
    },

    reveal() {
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        ${b.client ? `<div class="clientline"><div class="who">${esc(T.whatSheSays)}</div><blockquote>${esc(b.client)}</blockquote></div>` : ''}
        <div class="opts">${(b.guesses || []).map(g => `<button class="opt" data-g="${g.id}">${esc(g.text)}</button>`).join('')}</div>
        <div id="tr${i}" class="hidden"></div>`;
      host.querySelectorAll('[data-g]').forEach(btn => btn.onclick = () => {
        host.querySelectorAll('[data-g]').forEach(o => {
          o.classList.add('locked');
          if (o.dataset.g === b.answer) o.classList.add('correct');
          else if (o === btn) o.classList.add('wrong');
          o.onclick = null;
        });
        S.lesson.answers[b.kind + i] = btn.dataset.g;
        const tr = host.querySelector('#tr' + i);
        tr.className = '';
        setStage('consequence');
        tr.innerHTML = `<div class="principle" style="background:var(--panel-2);color:var(--ink)">
            <b>${esc(T.interpreted)}</b>${esc(b.truth)}</div>
          ${b.why ? `<div class="principle"><b>${esc(T.matters)}</b>${esc(b.why)}</div>` : ''}${nextBtn()}`;
        setStage('understand');
        wireNext(host);
      });
    },

    check() {
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        <div class="opts">${b.options.map(o => `<button class="opt" data-o="${o.id}">${esc(o.text)}</button>`).join('')}</div>
        <div id="wy${i}" class="hidden"></div>`;
      host.querySelectorAll('[data-o]').forEach(btn => btn.onclick = () => {
        host.querySelectorAll('[data-o]').forEach(o => {
          o.classList.add('locked'); o.onclick = null;
          if (o.dataset.o === b.answer) o.classList.add('correct');
          else if (o === btn) o.classList.add('wrong');
        });
        S.lesson.answers[b.kind + i] = { picked: btn.dataset.o, correct: btn.dataset.o === b.answer };
        const w = host.querySelector('#wy' + i); w.className = '';
        w.innerHTML = `<div class="principle"><b>${esc(T.matters)}</b>${esc(b.why)}</div>${nextBtn()}`;
        setStage('understand');
        wireNext(host);
      });
    },

    choose() {
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        <div class="opts">${b.options.map(o => `<button class="opt" data-o="${o.id}">
            <div class="lab">${esc(o.label)}</div></button>`).join('')}</div>
        <div id="pr${i}" class="hidden"></div>`;
      const lock = () => host.querySelectorAll('[data-o]').forEach(o => { o.classList.add('locked'); o.onclick = null; });
      let missed = false;
      host.querySelectorAll('[data-o]').forEach(btn => btn.onclick = () => {
        const o = b.options.find(x => x.id === btn.dataset.o);
        btn.classList.add(o.verdict === 'best' ? 'correct' : 'wrong');
        btn.insertAdjacentHTML('beforeend',
          `<div class="why"><span class="verdict v-${esc(o.verdict)}">${esc(verdictBadge(o.verdict))}</span><br>${esc(o.why)}</div>`);
        setStage('consequence');
        if (o.verdict === 'best') {
          lock();
          S.lesson.answers[b.kind + i] = o.id;
          const p = host.querySelector('#pr' + i); p.className = '';
          p.innerHTML = (b.principle ? `<div class="principle"><b>${esc(T.principle)}</b>${esc(b.principle)}</div>` : '');
          setStage('understand');
          // RETRY — the stage that turns coaching into a skill. A learner who
          // reached the answer only after being corrected gets one more live
          // moment of the same kind, immediately, with the principle in hand.
          // A learner who had it right first time is told so and moves on.
          if (b.retry && missed) renderRetry(b.retry, p, i);
          else { p.insertAdjacentHTML('beforeend', nextBtn()); wireNext(host); }
        } else {
          missed = true;
          btn.classList.add('locked'); btn.onclick = null;
        }
      });
    },

    /* TWO WAYS OF SAYING THE SAME THING.
       Not two buttons of text: two conversations, side by side. Each column is
       a turn — your line, spoken — and under it the turn that belongs to her,
       which is the whole point of the exercise. Before she has chosen, her half
       of each conversation is unanswered. After she has chosen, both halves
       resolve at once: the same client, drawn in the state each line leaves her
       in, so the comparison is between two consultations rather than two
       sentences. */
    compare() {
      const her = (k, posture, line) => `<div class="cmpher">
        <span class="cmpface">${ART.avatar('generic', 42, posture)}</span>
        <p class="cmpsays ${line ? '' : 'wait'}">${esc(line || T.cmpPending)}</p></div>`;
      host.innerHTML = `<div class="cmpkick">${esc(T.cmpKick)}</div>
        <div class="prompt cmpprompt">${esc(b.prompt)}</div>
        <div class="cmpgrid">
          ${['a', 'b'].map(k => `<button class="cmpcol" data-c="${k}">
            <div class="cmptag"><span class="cmplab">${esc(b[k].label)}</span></div>
            <div class="cmpturn you">
              <div class="cmpwho">${esc(T.cmpYouSay)}</div>
              <q class="say">${esc(b[k].text)}</q>
            </div>
            <div class="cmpjoin" aria-hidden="true"><i></i></div>
            <div class="cmpturn hers">
              <div class="cmpwho">${esc(T.cmpHer)}</div>
              ${her(k, 'polite', '')}
            </div>
          </button>`).join('')}
        </div><div id="cw${i}" class="hidden"></div>`;
      host.querySelectorAll('[data-c]').forEach(btn => btn.onclick = () => {
        host.querySelectorAll('[data-c]').forEach(o => {
          const right = o.dataset.c === b.answer;
          o.classList.add('locked', right ? 'correct' : 'wrong');
          if (o === btn) o.classList.add('picked');
          o.onclick = null;
          const slot = o.querySelector('.cmpturn.hers');
          if (slot) slot.innerHTML = `<div class="cmpwho">${esc(T.cmpHer)}</div>` +
            her(o.dataset.c, right ? 'open' : 'reserved', right ? T.cmpOpens : T.cmpCloses);
          if (o === btn) o.querySelector('.cmptag')
            .insertAdjacentHTML('beforeend', `<span class="cmpyours">${esc(T.cmpChosen)}</span>`);
        });
        S.lesson.answers[b.kind + i] = btn.dataset.c;
        setStage('consequence');
        const w = host.querySelector('#cw' + i); w.className = '';
        w.innerHTML = `<div class="principle"><b>${esc(T.cmpReading)}</b>${esc(b.why)}</div>${nextBtn()}`;
        setStage('understand');
        wireNext(host);
      });
    },

    spot() {
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        <div class="transcript">${b.lines.map((l, n) => `<div class="tline ${l.who === 'client' ? 'client' : ''}" data-n="${n}">
          <div class="who">${l.who === 'client' ? '●' : '▸'}</div><div class="txt">${esc(l.text)}</div></div>`).join('')}</div>
        <div id="sw${i}" class="hidden"></div>`;
      host.querySelectorAll('.tline').forEach(line => line.onclick = () => {
        const n = Number(line.dataset.n);
        host.querySelectorAll('.tline').forEach(x => { x.classList.add('locked'); x.onclick = null; });
        host.querySelectorAll('.tline')[b.answerIndex].classList.add('hit');
        if (n !== b.answerIndex) line.classList.add('miss');
        S.lesson.answers[b.kind + i] = { picked: n, correct: n === b.answerIndex };
        setStage('consequence');
        const w = host.querySelector('#sw' + i); w.className = '';
        w.innerHTML = `<div class="principle" style="background:var(--panel-2);color:var(--ink)"><b>${esc(T.changed)}</b>${esc(b.why)}</div>
          ${b.principle ? `<div class="principle"><b>${esc(T.principle)}</b>${esc(b.principle)}</div>` : ''}${nextBtn()}`;
        setStage('understand');
        wireNext(host);
      });
    },

    order() {
      const picked = [];
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        <div class="orderlist">${b.items.map(it => `<div class="orderitem" data-i="${it.id}">
          <div class="ord">·</div><div class="txt">${esc(it.text)}</div></div>`).join('')}</div>
        <div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
          <button id="ck${i}" disabled>${esc(T.checkAnswer)}</button>
          <button class="ghost" id="rs${i}">${esc(T.tryAgain)}</button></div>
        <div id="ow${i}" class="hidden"></div>`;
      const items = host.querySelectorAll('.orderitem');
      const reset = () => { picked.length = 0; items.forEach(x => { x.classList.remove('picked', 'ok', 'no'); x.querySelector('.ord').textContent = '·'; }); host.querySelector('#ck' + i).disabled = true; };
      items.forEach(it => it.onclick = () => {
        if (it.classList.contains('picked')) return;
        picked.push(it.dataset.i); it.classList.add('picked');
        it.querySelector('.ord').textContent = picked.length;
        host.querySelector('#ck' + i).disabled = picked.length !== b.items.length;
      });
      host.querySelector('#rs' + i).onclick = reset;
      host.querySelector('#ck' + i).onclick = () => {
        const right = picked.every((id, n) => id === b.correct[n]);
        items.forEach(it => {
          const pos = picked.indexOf(it.dataset.i);
          it.classList.add(b.correct[pos] === it.dataset.i ? 'ok' : 'no');
        });
        S.lesson.answers[b.kind + i] = { order: picked.slice(), correct: right };
        setStage('understand');
        const w = host.querySelector('#ow' + i); w.className = '';
        w.innerHTML = `<div class="principle"><b>${esc(T.matters)}</b>${esc(b.why)}</div>${nextBtn()}`;
        wireNext(host);
      };
    },

    sort() {
      let sel = null;
      const assigned = {};
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        <div class="clientline"><div class="who">${esc(T.whatSheSays)}</div><blockquote>${esc(b.client)}</blockquote></div>
        <div id="frags">${b.items.map(it => `<div class="frag" data-f="${it.id}">${esc(it.text)}</div>`).join('')}</div>
        <div class="sortgrid">${b.buckets.map(k => `<div class="bucket" data-b="${k.id}"><h4>${esc(k.label)}</h4><div class="drop">—</div></div>`).join('')}</div>
        <div style="margin-top:14px"><button id="sc${i}" disabled>${esc(T.checkAnswer)}</button></div>
        <div id="sr${i}" class="hidden"></div>`;
      const frags = host.querySelectorAll('.frag');
      frags.forEach(f => f.onclick = () => {
        frags.forEach(x => x.classList.remove('sel')); f.classList.add('sel'); sel = f;
      });
      host.querySelectorAll('.bucket').forEach(bk => bk.onclick = () => {
        if (!sel) return;
        assigned[sel.dataset.f] = bk.dataset.b;
        sel.classList.remove('sel');
        sel.style.display = 'none';
        const drop = bk.querySelector('.drop');
        if (drop.textContent === '—') drop.textContent = '';
        drop.insertAdjacentHTML('beforeend', `<div style="font-family:var(--serif);font-size:13.5px;margin-bottom:6px">${esc(sel.textContent)}</div>`);
        sel = null;
        host.querySelector('#sc' + i).disabled = Object.keys(assigned).length !== b.items.length;
      });
      host.querySelector('#sc' + i).onclick = () => {
        const wrong = b.items.filter(it => assigned[it.id] !== it.bucket);
        S.lesson.answers[b.kind + i] = { assigned, correct: wrong.length === 0 };
        setStage('understand');
        const w = host.querySelector('#sr' + i); w.className = '';
        w.innerHTML = `<div class="evidence ${wrong.length ? 'rose' : 'sage'}">
            ${wrong.length ? b.items.map(it => `<div>${esc(it.text)} → <b>${esc(b.buckets.find(x => x.id === it.bucket).label)}</b></div>`).join('') : '✓'}
          </div><div class="principle"><b>${esc(T.matters)}</b>${esc(b.why)}</div>${nextBtn()}`;
        wireNext(host);
      };
    },

    match() {
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        ${b.left.map(l => `<div class="matchrow" data-q="${l.id}">
          <div class="q">${esc(l.text)}</div>
          <select data-s="${l.id}"><option value="">—</option>
            ${b.right.map(r => `<option value="${r.id}">${esc(r.text)}</option>`).join('')}</select>
        </div>`).join('')}
        <div style="margin-top:14px"><button id="mc${i}">${esc(T.checkAnswer)}</button></div>
        <div id="mw${i}" class="hidden"></div>`;
      host.querySelector('#mc' + i).onclick = () => {
        let allRight = true;
        host.querySelectorAll('.matchrow').forEach(row => {
          const q = row.dataset.q, v = row.querySelector('select').value;
          const right = v === b.pairs[q];
          if (!right) allRight = false;
          row.classList.add(right ? 'ok' : 'no');
          if (!right) row.querySelector('select').value = b.pairs[q];
        });
        S.lesson.answers[b.kind + i] = { correct: allRight };
        setStage('understand');
        const w = host.querySelector('#mw' + i); w.className = '';
        w.innerHTML = `<div class="principle"><b>${esc(T.matters)}</b>${esc(b.why)}</div>${nextBtn()}`;
        wireNext(host);
      };
    },

    translate() {
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        ${b.items.map((it, n) => `<div class="card tight" style="margin-bottom:12px">
          <div class="clientline" style="margin-bottom:12px"><blockquote>${esc(it.client)}</blockquote></div>
          <label>${esc(T.yourAnswer)}</label>
          <textarea data-a="${it.id}" style="min-height:64px"></textarea>
          <div style="margin-top:10px"><button data-m="${n}">${esc(T.showModel)}</button></div>
          <div class="hidden" id="md${i}_${n}"></div>
        </div>`).join('')}
        ${nextBtn()}`;
      b.items.forEach((it, n) => {
        host.querySelector(`[data-m="${n}"]`).onclick = (e) => {
          e.target.classList.add('hidden');
          const box = host.querySelector(`#md${i}_${n}`); box.className = '';
          box.innerHTML = `<div class="principle" style="background:var(--panel-2);color:var(--ink)">
            <b>${esc(T.better)}</b><span style="font-family:var(--serif);font-size:16px">${esc(it.model)}</span></div>
            <div class="principle">${esc(it.note)}</div>`;
        };
      });
      host.querySelectorAll('[data-a]').forEach(ta => ta.onchange = () => {
        S.lesson.answers[b.kind + i] = S.lesson.answers[b.kind + i] || {};
        S.lesson.answers[b.kind + i][ta.dataset.a] = ta.value;
      });
      wireNext(host);
    },

    timedPause() {
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        <div class="clientline"><div class="who">${esc(T.whatSheSays)}</div><blockquote>${esc(b.first)}</blockquote></div>
        <div class="pausebox" id="pb${i}">
          <div class="muted">${esc(T.holdSilence)}</div>
          <div class="pausedots">${[0, 1, 2, 3].slice(0, b.seconds || 4).map(() => '<i></i>').join('')}</div>
          <button class="gold" id="hd${i}">${esc(T.waiting)}</button>
        </div>
        <div id="sd${i}" class="hidden"></div>`;
      host.querySelector('#hd' + i).onclick = (e) => {
        e.target.disabled = true;
        const dots = host.querySelectorAll('#pb' + i + ' .pausedots i');
        let n = 0;
        const tick = setInterval(() => {
          if (n < dots.length) { dots[n].classList.add('on'); n++; return; }
          clearInterval(tick);
          host.querySelector('#pb' + i).style.display = 'none';
          const sd = host.querySelector('#sd' + i); sd.className = 'second';
          setStage('consequence');
          sd.innerHTML = `<div class="clientline" style="border-left-color:var(--sage)">
              <div class="who">${esc(T.whatSheSays)}</div><blockquote>${esc(b.second)}</blockquote></div>
            <div class="principle"><b>${esc(T.matters)}</b>${esc(b.why)}</div>${nextBtn()}`;
          setStage('understand');
          wireNext(host);
        }, 1000);
      };
    },

    signalGallery() {
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        <div class="gallery">${b.signals.map(s => `<div class="gitem" data-s="${s.id}">
          ${ART.glyph(s.icon, false)}<div class="nm">${esc(s.name)}</div></div>`).join('')}</div>
        <div class="gpanel" id="gp${i}"><span class="muted">${esc(T.chooseOne)}</span></div>
        <div id="gn${i}" class="hidden"></div>`;
      let seen = 0;
      host.querySelectorAll('.gitem').forEach(g => g.onclick = () => {
        host.querySelectorAll('.gitem').forEach(x => x.classList.remove('on'));
        g.classList.add('on');
        const s = b.signals.find(x => x.id === g.dataset.s);
        host.querySelector('#gp' + i).innerHTML =
          `<h3>${esc(s.name)}</h3><p style="margin:0">${esc(s.means)}</p>
           <div class="say">${esc(s.say)}</div>`;
        seen++;
        if (seen >= 3) {
          const gn = host.querySelector('#gn' + i);
          if (gn.classList.contains('hidden')) { gn.className = ''; gn.innerHTML = nextBtn(); wireNext(host); }
        }
      });
    },

    drill() {
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        <div class="card tight" style="background:var(--panel-2);margin-bottom:16px">
          <h4>${esc(T.whatSheSays)}</h4>
          ${b.transcript.map(x => `<p style="font-family:var(--serif);font-size:15px;margin-bottom:8px">${esc(x)}</p>`).join('')}
        </div>
        ${b.fields.map(f => `<div class="field"><label>${esc(f.label)}</label><textarea data-f="${f.name}" style="min-height:60px"></textarea></div>`).join('')}
        <h4 style="margin-top:18px">${esc(T.depthCheckTitle)}</h4>
        <div class="checklist">${b.depthCheck.map(d => `<label class="chk" data-c="${d.key}">
          <input type="checkbox"><span>${esc(d.label)}</span></label>`).join('')}</div>
        <div style="margin-top:14px"><button id="dc${i}">${esc(T.submit)}</button></div>
        <div id="dr${i}" class="hidden"></div>`;
      host.querySelector('#dc' + i).onclick = () => {
        const issues = [];
        host.querySelectorAll('.chk').forEach(c => {
          const key = c.dataset.c, d = b.depthCheck.find(x => x.key === key);
          const ticked = c.querySelector('input').checked;
          c.classList.remove('ok', 'no');
          if (ticked && !d.supported) {
            c.classList.add('no'); issues.push(d.note);
            if (d.note && !c.querySelector('.note')) c.insertAdjacentHTML('beforeend', `<span class="note">${esc(d.note)}</span>`);
          } else if (ticked) c.classList.add('ok');
        });
        const answers = {};
        host.querySelectorAll('[data-f]').forEach(f => { answers[f.dataset.f] = f.value; });
        b.fields.forEach(f => { if (!answers[f.name] || answers[f.name].trim().length < 10) issues.push(f.label); });
        S.lesson.answers[b.kind + i] = answers;
        const w = host.querySelector('#dr' + i); w.className = '';
        w.innerHTML = issues.length
          ? `<div class="evidence rose">${issues.map(x => `<div>· ${esc(x)}</div>`).join('')}</div>
             <div class="principle"><b>${esc(T.principle)}</b>${esc(b.rule)}</div>`
          : `<div class="evidence sage">✓</div><div class="principle"><b>${esc(T.principle)}</b>${esc(b.rule)}</div>${nextBtn()}`;
        if (!issues.length) wireNext(host);
      };
    },

    reflect() {
      host.innerHTML = `<div class="prompt">${esc(b.prompt)}</div>
        <textarea id="rf${i}" placeholder="${esc(b.placeholder || '')}"></textarea>
        ${nextBtn()}`;
      host.querySelector('#rf' + i).onchange = (e) => { S.lesson.answers[b.kind + i] = e.target.value; };
      wireNext(host);
    }
  };
  (R[b.kind] || R.passage)();
}

// ==========================================================================
// THE CASE LIBRARY
//
// The nine cases are not nine versions of one consultation, so the library is
// not a grid of nine identical cards. Each case is placed on the track it
// actually trains, carries the one skill it teaches written out, and shows the
// state the client is in before a word is said.
//
// Two kinds of number appear here and neither is invented:
//   · `open` is the scenario's own initialClientState() — willingness, posture
//     and the items she is withholding at the door.
//   · `paths` is a count, not an estimate: every combination of decisions in
//     the case was enumerated from initialClientState() through Phase 7 with
//     all required Toolkit artifacts valid, and the Decision Engine was asked
//     for the outcome at the end of each. `total` is the number of complete
//     decision paths the case contains.
// ==========================================================================
const TRACKS = [
  { key: 'disclosure',   name: 'trDisclosure',   sub: 'trDisclosureSub',   note: 'trDisclosureNote' },
  { key: 'identity',     name: 'trIdentity',     sub: 'trIdentitySub',     note: 'trIdentityNote' },
  { key: 'price',        name: 'trPrice',        sub: 'trPriceSub',        note: 'trPriceNote' },
  { key: 'objection',    name: 'trObjection',    sub: 'trObjectionSub',    note: 'trObjectionNote' },
  { key: 'relationship', name: 'trRelationship', sub: 'trRelationshipSub', note: 'trRelationshipNote' }
];

const CASE_LIB = {
  'sofia-melasma': {
    track: 'disclosure',
    open: { willingness: 40, posture: 'reserved', withheld: 2 },
    paths: { total: 2187, YES: 151, DEFER: 707, NO: 1329 },
    teaches: {
      en: 'Reaching a motive she decided in advance not to give you — without asking for it, and without letting a friend’s bad laser outcome become the whole consultation.',
      es: 'Llegar a un motivo que ha decidido de antemano no darte, sin pedírselo y sin dejar que el mal resultado del láser de una amiga se convierta en toda la consulta.'
    }
  },
  'carmen-injectables': {
    track: 'identity',
    open: { willingness: 45, posture: 'armored', withheld: 2 },
    paths: { total: 2187, YES: 13, DEFER: 528, NO: 1646 },
    teaches: {
      en: 'Treating a defence as information. Everything she says against treatment tells you what she is protecting; answer the protection and the objection stops being an objection.',
      es: 'Tratar una defensa como información. Todo lo que dice en contra del tratamiento te dice qué está protegiendo; responde a la protección y la objeción deja de ser una objeción.'
    }
  },
  'beatriz-programme': {
    track: 'price',
    open: { willingness: 60, posture: 'compliant', withheld: 3 },
    paths: { total: 2916, YES: 180, DEFER: 1224, NO: 1512 },
    teaches: {
      en: 'Hearing agreement as a warning. She will accept anything you propose today, so the work is manufacturing room to disagree before she buys something she cancels on Thursday.',
      es: 'Oír el acuerdo como una advertencia. Hoy aceptará cualquier cosa que le propongas, así que el trabajo consiste en fabricar espacio para que discrepe antes de que compre algo que anulará el jueves.'
    }
  },
  'isabel-fullface': {
    track: 'price',
    open: { willingness: 55, posture: 'evaluative', withheld: 3 },
    paths: { total: 2187, YES: 220, DEFER: 896, NO: 1071 },
    teaches: {
      en: 'Holding a number without defending it. She is not comparing quotes, she is testing whether your price means anything — and a discount answers her question in the wrong direction.',
      es: 'Sostener una cifra sin defenderla. No está comparando presupuestos: está comprobando si tu precio significa algo, y un descuento responde a su pregunta en la dirección equivocada.'
    }
  },
  'lucia-body': {
    track: 'disclosure',
    open: { willingness: 45, posture: 'self-deprecating', withheld: 3 },
    paths: { total: 2187, YES: 136, DEFER: 854, NO: 1197 },
    teaches: {
      en: 'Correcting an impossible expectation without confirming she was silly to want anything. She has already minimised the concern herself, and agreeing with her is the fastest way to lose her.',
      es: 'Corregir una expectativa imposible sin confirmarle que fue una tonta por querer algo. Ella misma ya ha quitado importancia al problema, y darle la razón es la forma más rápida de perderla.'
    }
  },
  'nuria-undecided': {
    track: 'relationship',
    open: { willingness: 50, posture: 'open', withheld: 3 },
    paths: { total: 2187, YES: 442, DEFER: 926, NO: 819 },
    teaches: {
      en: 'Recognising the consultation whose right answer is not a booking, and making an unhurried DEFER land as care rather than as a refusal.',
      es: 'Reconocer la consulta cuya respuesta correcta no es una reserva, y conseguir que un APLAZAR sin prisa se viva como cuidado y no como un rechazo.'
    }
  },
  'teresa-repair': {
    track: 'identity',
    open: { willingness: 30, posture: 'distrustful', withheld: 3 },
    paths: { total: 2187, YES: 263, DEFER: 989, NO: 935 },
    teaches: {
      en: 'Answering an audit honestly — naming exactly what can and cannot be corrected — while saying nothing at all about the practitioner who harmed her, which is the thing she is really measuring.',
      es: 'Responder a una auditoría con honestidad, nombrando exactamente qué se puede y qué no se puede corregir, sin decir absolutamente nada de la profesional que le hizo daño, que es lo que ella está midiendo en realidad.'
    }
  },
  'pilar-thirdparty': {
    track: 'objection',
    open: { willingness: 48, posture: 'deferential', withheld: 3 },
    paths: { total: 2187, YES: 101, DEFER: 1081, NO: 1005 },
    teaches: {
      en: 'Separating the objection that has a name from the objection that does not. Her husband is real; he is also the respectable word she has found for having been wrong about this once already.',
      es: 'Separar la objeción que tiene nombre de la que no lo tiene. Su marido existe; también es la palabra respetable que ha encontrado para haberse equivocado ya una vez en esto.'
    }
  },
  'marta-returning': {
    track: 'relationship',
    open: { willingness: 65, posture: 'familiar', withheld: 3 },
    paths: { total: 2187, YES: 111, DEFER: 1131, NO: 945 },
    teaches: {
      en: 'Asking a comfortable two-year client the uncomfortable question. She is easy to sell to today and gone by spring, and the only thing that prevents it is noticing what she never came back to say.',
      es: 'Hacerle a una clienta cómoda de dos años la pregunta incómoda. Hoy es fácil venderle y en primavera ya no está, y lo único que lo evita es notar aquello que nunca volvió a decir.'
    }
  }
};

/** The three cases where the fewest complete decision paths end in a booking. */
const HARDEST = Object.keys(CASE_LIB)
  .sort((a, b) => (CASE_LIB[a].paths.YES / CASE_LIB[a].paths.total) -
                  (CASE_LIB[b].paths.YES / CASE_LIB[b].paths.total))
  .slice(0, 3);

const avatarFor = id => String(id).split('-')[0];
/** The posture a client holds at the door, so a portrait drawn before the
    consultation has moved her is still a portrait of somebody in a state. */
const openingPostureOf = id => ((CASE_LIB[id] || {}).open || {}).posture || 'polite';

/** Which track the library is showing; 'all' until the learner narrows it. */
let libTrack = 'all';
let libAllDebriefs = false;

/**
 * The nine opening numbers on one rail, ordered. The picture is the argument:
 * the two cases furthest apart are the returning client at 65 and the client
 * who was harmed elsewhere at 30, and neither number means what it looks like.
 */
function openingRail(cases) {
  const T = t();
  const rows = (cases || []).map(c => ({
    id: c.id, name: String(c.client.name).split(' ')[0],
    w: (CASE_LIB[c.id] || {}).open ? CASE_LIB[c.id].open.willingness : 0
  })).sort((a, b) => b.w - a.w);
  return `<div class="orail">
    ${rows.map(r => `<div class="orrow"><span class="orn">${esc(r.name)}</span>
      <span class="orb"><i style="width:${r.w}%"></i><em style="left:70%"></em></span>
      <b>${r.w}</b></div>`).join('')}
    <div class="orfoot">${esc(T.libThresholdShort)}</div>
  </div>`;
}

async function renderPractice() {
  const T = t();
  if (S.user.role === 'manager') return renderManagerConsultations();
  if (S.attempt) return renderRunner();
  await loadCurriculum();
  const list = await api('GET', '/api/attempts');
  const mine = (list.body && list.body.attempts) || [];

  // Her history with each client: the open attempt if there is one, otherwise
  // the most recent finished one.
  const open = {}, done = {};
  mine.forEach(a => {
    if (a.status === 'in_progress') { open[a.scenario] = a; return; }
    const prev = done[a.scenario];
    if (!prev || new Date(a.completedAt || a.startedAt) > new Date(prev.completedAt || prev.startedAt)) done[a.scenario] = a;
  });

  const cases = (S.cases || []).slice().sort((a, b) => (a.caseNumber || 0) - (b.caseNumber || 0));
  const counts = {};
  cases.forEach(c => { const k = (CASE_LIB[c.id] || {}).track || 'disclosure'; counts[k] = (counts[k] || 0) + 1; });

  const card = (cs) => {
    const meta = CASE_LIB[cs.id] || { track: 'disclosure', open: { willingness: 0, posture: '', withheld: 0 },
                                      paths: { total: 1, YES: 0, DEFER: 0, NO: 0 }, teaches: { en: '', es: '' } };
    const tr = TRACKS.find(x => x.key === meta.track) || TRACKS[0];
    const o = open[cs.id], d = done[cs.id];
    const phaseN = o ? phaseNumberOf(o.currentPhase) : (d ? 8 : null);
    const outWord = d ? (d.outcome === 'YES' ? T.outYes : d.outcome === 'DEFER' ? T.outDefer : d.outcome === 'NO' ? T.outNo : '') : '';
    const hist = o
      ? `<b>${esc(T.libAtPhase)} ${phaseN} ${esc(T.ofEight)}</b>`
      : d ? `<b class="oc-${esc(String(d.outcome || '').toLowerCase())}">${esc(T.libCompletedAs)} ${esc(outWord)}</b>`
          : `<span class="muted">${esc(T.libNotStarted)}</span>`;
    const held = meta.open.withheld;
    return `<article class="casecard" data-track="${esc(meta.track)}" data-caseid="${esc(cs.id)}">
      <div class="top">
        <div class="cc-face">${ART.avatar(avatarFor(cs.id), 62, meta.open.posture)}</div>
        <div class="cc-id">
          <div class="cc-kick">${esc(cs.title)} <span class="cc-tr">${esc(T[tr.name])}</span></div>
          <h3>${esc(cs.client.name)}${cs.client.age ? ', ' + esc(cs.client.age) : ''}</h3>
          <div class="sub">${esc(cs.subtitle)}</div>
        </div>
      </div>
      <div class="facts">${esc(cs.client.presenting || cs.client.occupation || '')}</div>
      ${cs.languageNote ? `<div class="facts"><span class="notice" style="display:block">${esc(cs.languageNote)}</span></div>` : ''}
      <div class="cc-sec cc-teach">
        <div class="cc-k">${esc(T.libTeaches)}</div>
        <p>${esc(meta.teaches[S.lang] || meta.teaches.en)}</p>
      </div>
      <div class="cc-sec cc-open">
        <div class="cc-k">${esc(T.libOpening)}</div>
        ${ART.openingMeter(meta.open.willingness, { of100: T.libOf100, threshold: T.libThresholdShort })}
        <div class="cc-chips">
          <span class="tag">${esc(postureWord(meta.open.posture))}</span>
          <span class="tag rose">${held} ${esc(held === 1 ? T.libHolding1 : T.libHolding)}</span>
        </div>
      </div>
      <div class="cc-sec cc-paths">
        <div class="cc-k">${esc(T.libPaths)}</div>
        ${ART.outcomeSplit(meta.paths, { yes: T.outYes, defer: T.outDefer, no: T.outNo,
          foot: `${meta.paths.YES} ${T.libPathsOf} ${meta.paths.total} ${T.libPathsEnd} ${Math.round(meta.paths.total / Math.max(1, meta.paths.YES))}.` })}
        ${HARDEST.indexOf(cs.id) >= 0 ? `<div class="cc-hard">${esc(T.libHardest)}</div>` : ''}
      </div>
      <div class="cc-sec cc-hist">
        <div class="cc-k">${esc(T.libHistory)}</div>
        ${ART.phaseDots(phaseN)}
        <div class="cc-histtext">${hist}</div>
      </div>
      <div class="act">
        <button class="primary" data-case="${cs.id}">${esc(o ? T.continueCase : d ? T.libAgain : T.beginCase)}</button>
        ${o || d ? `<button class="ghost" data-new="${cs.id}">${esc(T.restart)}</button>` : ''}
      </div></article>`;
  };

  let html = `<h1>${esc(T.libTitle)}</h1>
    <p class="muted lead-note" style="margin-bottom:16px">${esc(T.libSub)}</p>

    <section class="card openingnote">
      <h4>${esc(T.libOpeningTitle)}</h4>
      <div class="onbody">
        <p>${esc(T.libOpeningNote)}</p>
        ${openingRail(cases)}
      </div>
    </section>

    <div class="libfilter" id="libfilter">
      <span class="lfk">${esc(T.libShow)}</span>
      <button data-track="all" class="${libTrack === 'all' ? 'on' : ''}">${esc(T.libAll)}</button>
      ${TRACKS.map(tr => `<button data-track="${tr.key}" class="${libTrack === tr.key ? 'on' : ''}">${esc(T[tr.name])}
        <span class="lfn">${counts[tr.key] || 0}</span></button>`).join('')}
    </div>`;

  for (const tr of TRACKS) {
    const inTrack = cases.filter(c => ((CASE_LIB[c.id] || {}).track || 'disclosure') === tr.key);
    if (!inTrack.length) continue;
    if (libTrack !== 'all' && libTrack !== tr.key) continue;
    html += `<section class="track" data-tracksec="${tr.key}">
      <div class="secthead trhead"><h2>${esc(T[tr.name])}</h2>
        <span class="trcount">${inTrack.length} ${esc(inTrack.length === 1 ? T.libCount1 : T.libCount)}</span></div>
      <div class="trsub">${esc(T[tr.sub])}</div>
      <p class="muted trnote">${esc(T[tr.note])}</p>
      <div class="libgrid">${inTrack.map(card).join('')}</div>
    </section>`;
  }

  html += `<p class="muted libfoot">${esc(T.libPathsNote)} ${esc(T.libHardestNote)}</p>`;

  // Newest first, and capped: a practitioner who has practised for a month has
  // dozens of these, and an unbounded list at the foot of the library buries
  // the library itself. The rest are one click away.
  const finished = mine.filter(a => a.status === 'completed')
    .sort((a, b) => new Date(b.completedAt || b.startedAt) - new Date(a.completedAt || a.startedAt));
  const shown = libAllDebriefs ? finished : finished.slice(0, 6);
  if (finished.length) {
    html += `<h2 style="margin:26px 0 12px">${esc(T.debrief)}</h2><div class="card">` +
      shown.map(a => `<div class="orderitem" data-ev="${a.id}" style="margin-bottom:8px">
        <div class="ord">${a.outcome === 'YES' ? '✓' : a.outcome === 'DEFER' ? '~' : '×'}</div>
        <div class="txt"><b>${esc(a.caseTitle)}</b> · ${esc(a.outcome === 'YES' ? T.outYes : a.outcome === 'DEFER' ? T.outDefer : a.outcome === 'NO' ? T.outNo : (a.outcome || ''))}<br>
          <span class="muted">${new Date(a.completedAt || a.startedAt).toLocaleString()}</span></div>
      </div>`).join('') +
      (finished.length > shown.length
        ? `<button class="ghost" id="libmore">${esc(T.libMore)} (${finished.length - shown.length})</button>`
        : '') + `</div>`;
  }

  $('#view').innerHTML = html;
  const more = $('#libmore');
  if (more) more.onclick = () => { libAllDebriefs = true; renderPractice(); };
  document.querySelectorAll('#libfilter button').forEach(b => b.onclick = () => {
    libTrack = b.dataset.track; renderPractice();
  });
  document.querySelectorAll('[data-case]').forEach(b => b.onclick = () => startCase(b.dataset.case, false));
  document.querySelectorAll('[data-new]').forEach(b => b.onclick = () => startCase(b.dataset.new, true));
  document.querySelectorAll('[data-ev]').forEach(b => b.onclick = () => showEvidence(b.dataset.ev));
}

/** Managers do not practise here; they read what their team recorded. */
async function renderManagerConsultations() {
  const T = t();
  const r = await api('GET', '/api/manager/attempts');
  const rows = (r.body && r.body.attempts) || [];
  $('#view').innerHTML = `<h1>${esc(T.evSeeAll)}</h1>
    <p class="muted" style="max-width:66ch;margin-bottom:20px">${esc(T.qEvidenceSub)}</p>
    ${rows.length ? `<div class="card"><table class="people"><thead><tr>
        <th>${esc(T.practitioner)}</th><th>${esc(T.caseCol)}</th><th>${esc(T.outcomeTitle)}</th><th>${esc(T.lastActive)}</th></tr></thead>
      <tbody>${rows.map(a => `<tr data-ev="${a.id}" style="cursor:pointer">
        <td>${esc(a.practitionerName)}</td><td>${esc(a.caseTitle)}</td>
        <td>${esc(a.outcome || a.phaseReached)}</td>
        <td>${new Date(a.completedAt || a.startedAt).toLocaleDateString()}</td></tr>`).join('')}</tbody></table></div>`
      : blank({
          mark: 'consult', kicker: T.blankConsK, title: T.blankMgrConsTitle,
          body: T.blankMgrConsBody, acts: [{ id: 'mc-clinic', label: T.blankMgrConsGo }]
        })}`;
  document.querySelectorAll('[data-ev]').forEach(tr => tr.onclick = () => openCaseEvidence(tr.dataset.ev));
  const gc = $('#mc-clinic');
  if (gc) gc.onclick = () => { S.tab = 'clinic'; renderTabs(); render(); };
}

async function startCase(scenarioId, forceNew) {
  busy();
  const r = await api('POST', '/api/attempts', { scenarioId, forceNew: !!forceNew });
  S.attempt = r.body.attempt; S.view = r.body.view;
  S.feedback = null; S.outcome = null; S.proposal = null;
  // Phase 8 is not an ordinary phase to be resumed into. Its Toolkit has no
  // fields of its own — the Continuation Engine writes its rows from the
  // outcome — so a practitioner who closed the tab after Phase 7 and came back
  // was landed in a phase whose only form could never be completed and whose
  // gate would therefore never open. Where an outcome has already been
  // derived, she is returned to the screen that carries it.
  if (S.attempt && S.attempt.decisionOutcome && S.attempt.status !== 'completed') {
    return renderOutcome();
  }
  renderRunner();
}

function moodOf(cs) {
  const w = cs.willingness;
  if (cs.posture === 'withdrawn' || w < 45) return 'guard';
  if (w >= 70 && (cs.trust.safety || 0) >= 1) return 'open';
  return 'mid';
}
/**
 * Every posture any of the nine cases can hold, in both languages. A posture
 * the table does not know is shown as the scenario wrote it rather than
 * silently mistranslated.
 */
const POSTURE_WORD = {
  armored:            { en: 'armored',            es: 'acorazada' },
  attentive:          { en: 'attentive',          es: 'atenta' },
  compliant:          { en: 'compliant',          es: 'complaciente' },
  considering:        { en: 'considering it',     es: 'valorándolo' },
  decided:            { en: 'decided',            es: 'decidida' },
  deferential:        { en: 'deferential',        es: 'deferente' },
  distrustful:        { en: 'distrustful',        es: 'desconfiada' },
  engaged:            { en: 'engaged',            es: 'implicada' },
  evaluative:         { en: 'evaluating you',     es: 'evaluándote' },
  familiar:           { en: 'familiar',           es: 'de confianza' },
  guarded:            { en: 'guarded',            es: 'en guardia' },
  open:               { en: 'open',               es: 'abierta' },
  opening:            { en: 'opening',            es: 'abriéndose' },
  polite:             { en: 'polite',             es: 'correcta' },
  reflective:         { en: 'reflective',         es: 'reflexiva' },
  reserved:           { en: 'reserved',           es: 'reservada' },
  resolved:           { en: 'resolved',           es: 'resuelta' },
  'self-deprecating': { en: 'making light of it', es: 'quitándose importancia' },
  tentative:          { en: 'tentative',          es: 'dubitativa' },
  testing:            { en: 'testing you',        es: 'poniéndote a prueba' },
  withdrawn:          { en: 'withdrawn',          es: 'retraída' }
};
const postureWord = p => (POSTURE_WORD[p] && POSTURE_WORD[p][S.lang]) || String(p || '').replace(/_/g, ' ');
function moodWord(cs) { return postureWord(cs && cs.posture); }

/**
 * The client-state ledger keys, in words. The scenarios name each item in
 * snake case because the engine compares them; the learner should never see
 * an engine key, and in Spanish she should never see an English one.
 */
const LEDGER_WORD = {
  avoided_holiday:         { en: 'the holiday she did not go on',      es: 'las vacaciones a las que no fue' },
  budget_ceiling:          { en: 'her budget ceiling',                 es: 'su techo de presupuesto' },
  changed_circumstances:   { en: 'what changed at home',               es: 'lo que ha cambiado en su casa' },
  competitor_quotes:       { en: 'the other quotes',                   es: 'los otros presupuestos' },
  considering_leaving:     { en: 'that she is thinking of leaving',    es: 'que se está planteando irse' },
  disagreement_permitted:  { en: 'that she is allowed to disagree',    es: 'que puede no estar de acuerdo' },
  discount_test:           { en: 'the discount test',                  es: 'la prueba del descuento' },
  emotional_cost:          { en: 'what it has cost her',               es: 'lo que le ha costado' },
  guard_lowered:           { en: 'her guard, lowered',                 es: 'la guardia, bajada' },
  hidden_motivation:       { en: 'her real reason for coming',         es: 'su motivo real para venir' },
  hospital_promise:        { en: 'the promise she made in hospital',   es: 'la promesa que se hizo en el hospital' },
  identity_fear:           { en: 'her fear of not looking like herself', es: 'su miedo a no parecerse a sí misma' },
  life_change:             { en: 'the change in her life',             es: 'el cambio en su vida' },
  no_decision_yet:         { en: 'that she has decided nothing',       es: 'que todavía no ha decidido nada' },
  not_told_him:            { en: 'that she never told him',            es: 'que nunca se lo contó' },
  own_view:                { en: 'her own opinion',                    es: 'su propia opinión' },
  partner_comment:         { en: 'what her partner said',              es: 'lo que dijo su pareja' },
  permission_fear:         { en: 'her fear of not being allowed this', es: 'su miedo a no tener derecho a esto' },
  previous_spend:          { en: 'what she already spent',             es: 'lo que ya se gastó' },
  prior_experience_detail: { en: 'the detail of the earlier treatment', es: 'el detalle del tratamiento anterior' },
  saved_fund:              { en: 'the money she saved for this',       es: 'el dinero que ahorró para esto' },
  self_blame:              { en: 'that she blames herself',            es: 'que se culpa a sí misma' },
  self_permission:         { en: 'whether she is allowed to want it',  es: 'si tiene derecho a quererlo' },
  shame_at_wanting_it:     { en: 'her shame at still wanting it',      es: 'su vergüenza por seguir queriéndolo' },
  spouse_comment:          { en: 'what her husband said',              es: 'lo que dijo su marido' },
  surgical_expectation:    { en: 'the result she is picturing',        es: 'el resultado que se imagina' },
  trust_injury:            { en: 'where her trust was injured',        es: 'dónde se dañó su confianza' },
  unspoken_disappointment: { en: 'the disappointment she never mentioned', es: 'la decepción que nunca mencionó' }
};
const ledgerWord = k => (LEDGER_WORD[k] && LEDGER_WORD[k][S.lang]) || String(k || '').replace(/_/g, ' ');

/**
 * Her state, always on screen, and visibly different after every decision.
 * The change is the product, so what moved is marked rather than left for the
 * learner to spot. Two layouts, not one reflowed: `full` sits beside the
 * consultation on a laptop, `compact` sits above the decision on a phone so it
 * is never behind the thing it is meant to inform.
 */
function statePanel(cs, readout, prev, variant) {
  const T = t();
  const compact = variant === 'compact';
  const wDelta = prev && typeof prev.willingness === 'number' ? cs.willingness - prev.willingness : 0;
  const postureMoved = prev && prev.posture && prev.posture !== cs.posture;
  const prevRevealed = (prev && prev.revealed) || null;
  const prevTrust = (prev && prev.trust) || null;
  const isNew = x => prevRevealed && prevRevealed.indexOf(x) < 0;
  const chip = d => d === 0 ? '' :
    `<span class="delta ${d > 0 ? 'up' : 'down'}">${d > 0 ? '+' : ''}${d}</span>`;

  const ladder = ART.trustLadder(readout || [], prevTrust, { legend: compact ? '' : T.trustLegend });
  const disclosed = (cs.revealed || []).length
    ? (cs.revealed || []).map(x => `<span class="tag gold ${isNew(x) ? 'fresh' : ''}">${esc(ledgerWord(x))}</span>`).join('')
    : `<p class="muted" style="margin:0">${esc(T.nothingDisclosed)}</p>`;
  const withheld = (cs.withheld || []).length
    ? `<h4 style="margin-top:14px">${esc(T.withheld)}</h4>
       ${cs.withheld.map(x => `<span class="tag rose">${esc(ledgerWord(x))}</span>`).join('')}` : '';
  const objection = typeof cs.objectionIntensity === 'number'
    ? `<div class="trustrow"><span>${esc(T.objectionRow)}</span>
         <span class="pip">${[1, 2, 3].map(n => `<i class="${cs.objectionIntensity >= n ? 'n' : ''}"></i>`).join('')}</span></div>` : '';

  if (compact) {
    const fell = (readout || []).filter(r => prevTrust && typeof prevTrust[r.key] === 'number' && r.value < prevTrust[r.key]);
    return `<section class="card statemob">
      <div class="smhead">
        <div class="smw"><span class="smk">${esc(T.willingness)}</span>
          <b>${cs.willingness}</b><small>/100</small> ${chip(wDelta)}</div>
        <div class="smp"><span class="smk">${esc(T.postureRow)}</span>
          <b>${esc(moodWord(cs))}</b>${postureMoved ? ` <span class="delta up">${esc(T.changedNow)}</span>` : ''}</div>
      </div>
      <div class="bar smbar"><i style="width:${cs.willingness}%;background:var(--mercury)"></i></div>
      ${fell.length ? `<div class="smfell">${fell.map(r => `<span class="tag rose">${esc(r.name)} ${r.value - prevTrust[r.key]}</span>`).join('')}</div>` : ''}
      <details class="smmore">
        <summary>${esc(T.stateExpand)}</summary>
        <div class="smbody">
          <h4>${esc(T.trustMoveTitle)}</h4>
          ${ladder}
          ${objection}
          <h4 style="margin-top:14px">${esc(T.disclosed)}</h4>
          ${disclosed}
          ${withheld}
        </div>
      </details>
    </section>`;
  }

  return `<div class="card statepanel">
    <h4>${esc(T.stateHead)}</h4>
    <div class="st"><div class="lab"><span>${esc(T.willingness)}</span>
        <b>${cs.willingness}/100 ${chip(wDelta)}</b></div>
      <div class="bar"><i style="width:${cs.willingness}%;background:var(--mercury)"></i></div></div>
    <div class="st"><div class="lab"><span>${esc(T.posture)}</span>
      <b>${esc(moodWord(cs))}${postureMoved ? ` <span class="delta up">${esc(T.changedNow)}</span>` : ''}</b></div></div>
    ${objection}
    <h4 style="margin-top:16px">${esc(T.trustMoveTitle)}</h4>
    ${ladder}
    <h4 style="margin-top:16px">${esc(T.disclosed)}</h4>
    ${disclosed}
    ${withheld}
  </div>`;
}

/**
 * Feedback that teaches: the same seven parts every time, each one labelled,
 * never a paragraph. A heading whose material the server did not send is left
 * out rather than filled in.
 */
function feedbackCard(fb, clientFirstName, evidenceQuote) {
  const T = t();
  const v = fb.alignmentVerdict || '';
  const cls = /^ALIGNED/.test(v) ? 'vd-A' : /^PARTIALLY/.test(v) ? 'vd-P' : 'vd-N';
  const oc = fb.observableConsequence || {};
  const rows = [
    [T.fbSignal, fb.signalDetected],
    [T.fbInterpret, fb.mirrorInterpretation],
    [T.fbEvidence + (clientFirstName ? ' ' + clientFirstName : ''), evidenceQuote, 'quote'],
    [T.fbPrinciple, fb.canonicalPrinciple],
    [T.fbWhy, fb.alignmentReason],
    [T.fbChangedState, oc.narrative],
    [T.fbNext, fb.nextPracticePriority]
  ];
  return `<section class="card fb">
    <div class="fbhead"><span class="vd ${cls}">${esc(v)}</span></div>
    ${rows.filter(r => r[1]).map(r => `<div class="blk"><div class="k">${esc(r[0])}</div>
      <div class="v ${r[2] === 'quote' ? 'q' : ''}">${esc(r[1])}</div></div>`).join('')}
    ${oc.degradedNote ? `<div class="notice" style="margin-top:14px">${esc(oc.degradedNote)}</div>` : ''}
  </section>`;
}

/** The step rail: one numbered move of the loop, visually separated. */
function step(n, label, inner, cls) {
  return `<section class="cstep ${cls || ''}">
    <div class="stepline"><span class="stepn">${n}</span><span class="stept">${esc(label)}</span></div>
    ${inner}</section>`;
}

/**
 * THE CONSULTATION.
 * One loop, legible in order: the signal she gives → what there is to notice →
 * your decision → what materially changed in her → why, in MIRROR terms → the
 * Toolkit you now operate → the next phase. The canonical phase, the owning
 * Engine and the active Toolkit are on screen the whole time, and her state
 * sits beside all of it and moves.
 */
async function renderRunner() {
  const T = t();
  const a = S.attempt, v = S.view;
  if (!v) return renderOutcome();
  const nav = v.navigation, cs = v.clientState, content = v.content;
  const sig = content.clientSignal || {};
  const avatarKey = a.scenario.split('-')[0];
  const first = String((v.caseMeta.profile && v.caseMeta.profile.name) || '').split(' ')[0];
  const fb = S.feedback;
  const decided = v.progress.decisionMade;
  const chosen = fb && fb.choice ? fb.choice : null;
  try { await loadOrientation(); } catch (e) { /* the spine also exists locally */ }
  const spine = (S.orientation && S.orientation.spine) ||
    PHASE_KEYS.map((k, i) => ({ n: i + 1, key: k, name: phaseLabel(k) }));
  const nextPhase = spine[nav.phase.n] || null;
  const tkLine = nav.toolkit && nav.toolkit.name
    ? `${T.toolkitTitle} #${nav.toolkit.n} — ${nav.toolkit.name}`
    : (content.toolkit ? `${T.toolkitTitle} #${content.toolkit}` : T.noToolkitHere);

  // The consultation so far, from the attempt's own recorded decisions. This
  // is the existing evidence payload; nothing new is asked of the server.
  let prior = [];
  try {
    const ev = await api('GET', `/api/attempts/${a.id}/evidence`);
    prior = (ev.body && ev.body.decisions) || [];
  } catch (e) { prior = []; }
  const stageName = {};
  (v.trustReadout || []).forEach(r => { stageName[r.key] = r.name; });
  const mapRows = spine.map(p => {
    const d = prior.find(x => phaseNumberOf(x.phase) === p.n);
    if (!d) return { n: p.n, name: p.name, state: p.n === nav.phase.n ? 'now' : 'ahead' };
    const c = d.consequence || {};
    const moved = Object.keys(c.trustDelta || {})
      .filter(k => c.trustDelta[k])
      .map(k => ({ name: stageName[k] || k, d: c.trustDelta[k] }));
    return {
      n: p.n, name: p.name, state: p.n === nav.phase.n ? 'now' : 'done',
      choice: d.label, willingness: c.willingnessAfter,
      wd: (c.willingnessAfter || 0) - (c.willingnessBefore || 0), moved
    };
  });
  // Her opening line in any phase after the first is her reaction to the
  // decision you took in the phase before it.
  const priorDecision = prior.find(x => phaseNumberOf(x.phase) === nav.phase.n - 1) || null;

  let stepN = 0;
  let html = `<div class="runtop">
      <button class="ghost" id="leave">← ${esc(T.practiceTitle)}</button>
      <span class="sp"></span><span class="badge ready">${esc(v.caseMeta.title)}</span></div>
    <div class="phasebar">
      <div class="ribbon">${ART.phaseRibbon(nav.phase.n)}</div>
      <div class="phaseline">
        <div class="pbcol">
          <div class="pl">${esc(T.phaseLabelWord)}</div>
          <div class="pn">${nav.phase.n} · ${esc(nav.phase.name)}</div>
        </div>
        <div class="pbcol">
          <div class="pl">${esc(T.engineLabel)}</div>
          <div class="pv">${esc(nav.engine ? engineWords(nav.engine).name : '')}</div>
        </div>
        <div class="pbcol">
          <div class="pl">${esc(T.toolkitLabel)}</div>
          <div class="pv">${esc(tkLine)}</div>
        </div>
      </div>
      <div class="obj">${esc(nav.phase.objective || '')}</div>
    </div>
    <div class="grid2"><div class="gmain">`;

  // On a phone her state is read before the decision, not after it.
  html += statePanel(cs, v.trustReadout, S.prevState, 'compact');

  // 1 — the signal she gives. From Phase 2 on, that signal is her answer to
  // what you decided in the phase before, so it is labelled as what it is.
  html += step(++stepN, priorDecision ? T.stepReaction : T.stepSignal, `<section class="moment">
      <div class="lbl">${esc(sig.source || T.whatSheSays)}</div>
      <div class="clienthead">
        <div class="avatar">${ART.avatar(avatarKey, 60, cs.posture)}</div>
        <div><div class="nm">${esc(v.caseMeta.profile.name)}</div>
          <span class="persona ${moodOf(cs)}"><span class="d"></span>${esc(moodWord(cs))} · ${cs.willingness}/100</span></div>
      </div>
      ${priorDecision && priorDecision.language ? `<div class="yousaid">
        <span class="ysk">${esc(T.afterYouSaid)}</span>
        <q>${esc(priorDecision.language)}</q></div>` : ''}
      <blockquote>${esc(sig.quote || '')}</blockquote>
    </section>`);

  // 2 — what there is to notice
  const details = Array.isArray(sig.detail) ? sig.detail : (Array.isArray(sig.observations) ? sig.observations : []);
  if (sig.subtext || details.length) {
    html += step(++stepN, T.stepNotice, `<section class="card notice-card">
      ${details.length ? `<ul class="noticelist">${details.map(o => `<li>${esc(o)}</li>`).join('')}</ul>` : ''}
      ${sig.subtext ? `<p class="subtext">${esc(sig.subtext)}</p>` : ''}
    </section>`);
  }

  // 3 — your decision
  if (content.decision && !decided) {
    html += step(++stepN, T.stepDecision, `<section class="card">
      <p class="lead decisionprompt">${esc(content.decision.prompt)}</p>
      <div class="opts">${content.decision.options.map(o => `<button class="opt optsay" data-opt="${o.id}">
        <div class="lab">${esc(o.label)}</div>
        <div class="sayk">${esc(T.yourWords)}</div>
        <div class="say">${esc(o.language)}</div>
        ${o.degraded && o.degradedNote ? `<div class="why">${esc(o.degradedNote)}</div>` : ''}
      </button>`).join('')}</div></section>`);
  } else if (decided) {
    html += step(++stepN, T.stepDecision, `<section class="card chosen">
      <div class="k">${esc(T.yourChoice)}</div>
      <div class="chosenlab">${esc(chosen ? chosen.label : (fb && fb.learnerDid) || '')}</div>
      ${chosen && chosen.language ? `<div class="k" style="margin-top:12px">${esc(T.herWords)}</div>
        <blockquote class="chosensay">${esc(chosen.language)}</blockquote>` : ''}
    </section>`);
  }

  // 4 — what materially changed in her: her reaction first, then her state
  // before and after side by side, then the ledger in full.
  if (fb) {
    const oc = fb.observableConsequence || {};
    const changes = oc.ledgerChanges || [];
    const rec = prior.find(x => phaseNumberOf(x.phase) === nav.phase.n);
    const rc = (rec && rec.consequence) || null;
    const was = S.prevState || null;
    const wBefore = was ? was.willingness : (rc ? rc.willingnessBefore : cs.willingness);
    const newly = (rc && rc.newlyRevealed && rc.newlyRevealed.length)
      ? rc.newlyRevealed
      : (was ? (cs.revealed || []).filter(x => (was.revealed || []).indexOf(x) < 0) : []);

    const items = [];
    if (wBefore !== cs.willingness) {
      const d = cs.willingness - wBefore;
      items.push({ k: T.willingness, v: `${wBefore} → ${cs.willingness} (${d > 0 ? '+' : ''}${d})`,
                   tone: d > 0 ? 'up' : 'down' });
    }
    if (was && was.posture && was.posture !== cs.posture) {
      items.push({ k: T.postureRow, v: `${postureWord(was.posture)} → ${moodWord(cs)}`, tone: 'flat' });
    }
    if (was && typeof was.objectionIntensity === 'number' &&
        typeof cs.objectionIntensity === 'number' && was.objectionIntensity !== cs.objectionIntensity) {
      items.push({ k: T.objectionRow, v: `${was.objectionIntensity} → ${cs.objectionIntensity}`,
                   tone: cs.objectionIntensity > was.objectionIntensity ? 'down' : 'up' });
    }
    if (newly.length) items.push({ k: T.justDisclosed, v: newly.map(ledgerWord).join(' · '), tone: 'up' });

    const delta = ART.consequenceDelta({
      before: { willingness: wBefore, posture: was ? postureWord(was.posture) : '' },
      after: { willingness: cs.willingness, posture: moodWord(cs) },
      changes: items.length ? items : [{ k: '', v: T.nothingMoved, tone: 'flat' }],
      labels: { before: T.stateBefore, after: T.stateAfter, threshold: T.thrNote }
    });

    html += step(++stepN, T.stepChanged,
      (oc.narrative ? `<section class="reaction"><div class="rk">${esc(T.reactionHead)}</div>
        <blockquote>${esc(oc.narrative)}</blockquote></section>` : '') +
      delta +
      `<section class="card changecard">
        ${changes.length ? `<ul class="changes">${changes.map(c => `<li>${esc(c)}</li>`).join('')}</ul>`
          : `<p class="muted" style="margin:0">${esc(T.nothingYet)}</p>`}
      </section>`);

    // 5 — why, in MIRROR terms
    html += step(++stepN, T.stepWhy, feedbackCard(fb, first, S.lastSignal && S.lastSignal.quote));
  }

  // 6 — the Toolkit you now operate
  const tks = [content.toolkit, content.secondaryToolkit].filter(Boolean);
  if (tks.length) {
    const nn = ++stepN;
    let inner = '';
    for (const num of tks) {
      const done = (a.artifacts || []).find(x => x.n === num && x.valid);
      inner += `<section class="card" id="tk${num}">
        <h4>${esc(T.toolkitTitle)} #${num}${nav.toolkit && nav.toolkit.n === num && nav.toolkit.name ? ' — ' + esc(nav.toolkit.name) : ''}</h4>
        ${done ? `<div class="evidence sage">${esc(done.summary || T.saved)}</div>` : `<div id="tkbody${num}"><span class="spinner"></span></div>`}
      </section>`;
    }
    html += step(nn, T.stepToolkit, inner);
  }

  // 7 — the next phase
  if (decided) {
    html += step(++stepN, T.stepNext, `<section class="card nextcard">
      <p class="nextline">${nextPhase
        ? `${esc(T.nextPhaseIs)}: <b>${nextPhase.n} · ${esc(nextPhase.name)}</b>`
        : esc(T.consultationEnds)}</p>
      <button class="primary lg" id="adv" ${v.progress.canAdvance ? '' : 'disabled'}>${esc(T.advance)}</button>
      ${v.progress.canAdvance ? '' : `<div class="notice" style="margin-top:12px">${esc(T.gateClosed)}${v.progress.gate && v.progress.gate.reason ? ' — ' + esc(v.progress.gate.reason) : ''}</div>`}
    </section>`);
  }

  // The consultation so far — every phase, the decision made in it, and what
  // moved in her because of it. Visible at any point, in every phase.
  html += `<section class="card mapcard cmapcard">
      <h4>${esc(T.mapTitle)}</h4>
      <p class="muted" style="margin-bottom:12px">${esc(T.mapSub)}</p>
      ${ART.consultMap(mapRows, { notReached: T.mapNotReached, here: T.mapHere, willShort: T.willShort })}
    </section>`;

  html += `</div><div class="gside">${statePanel(cs, v.trustReadout, S.prevState)}</div></div>`;
  $('#view').innerHTML = html;

  $('#leave').onclick = () => {
    S.attempt = null; S.view = null; S.feedback = null; S.prevState = null; S.lastSignal = null; render();
  };
  document.querySelectorAll('[data-opt]').forEach(b => b.onclick = async () => {
    document.querySelectorAll('[data-opt]').forEach(x => { x.classList.add('locked'); x.onclick = null; });
    b.classList.add('sel');
    // Snapshot what she said and how she was, so the change is visible after.
    S.lastSignal = sig;
    S.prevState = JSON.parse(JSON.stringify(cs));
    const r = await api('POST', `/api/attempts/${a.id}/decision`, { optionId: b.dataset.opt });
    if (!r.ok) return render();
    S.feedback = r.body.feedback; S.view = r.body.view;
    const ar = await api('GET', `/api/attempts/${a.id}`); S.attempt = ar.body.attempt;
    renderRunner();
  });
  const adv = $('#adv');
  if (adv) adv.onclick = async () => {
    const r = await api('POST', `/api/attempts/${a.id}/advance`, {});
    if (r.status === 409) { S.view = r.body.view; return renderRunner(); }
    if (r.body.decisionOutcome) {
      S.outcome = r.body.decisionOutcome; S.proposal = r.body.continuationProposal; S.view = r.body.view;
      const ar = await api('GET', `/api/attempts/${a.id}`); S.attempt = ar.body.attempt;
      return renderOutcome();
    }
    // A new phase starts clean: her state before this phase's decision is the
    // state she is in now.
    S.view = r.body.view; S.feedback = null; S.prevState = null; S.lastSignal = null;
    const ar = await api('GET', `/api/attempts/${a.id}`); S.attempt = ar.body.attempt;
    renderRunner();
  };
  for (const n of tks) {
    const done = (a.artifacts || []).find(x => x.n === n && x.valid);
    if (!done) renderToolkit(n);
  }
}

/**
 * A validator's sentence, made readable in the reader's language.
 *
 * Toolkit #8 names the field that is missing by interpolating its own key —
 * "Fila 1: falta timing." — and those keys are English in both languages. The
 * document labels already exist in both, so a Spanish practitioner is told
 * which field she is actually looking at. The shape is matched exactly, so a
 * sentence that merely contains one of these words is left alone.
 */
function localiseIssue(text) {
  return String(text == null ? '' : text).replace(
    /\bfalta\s+(timing|channel|owner|purpose|interval|outcome)\b/gi,
    (m, key) => 'falta ' + humanKey(key.toLowerCase()).toLowerCase());
}

/**
 * THE TOOLKIT WORKSPACE.
 *
 * This is the one place in a consultation where the practitioner writes rather
 * than chooses, and it was the plainest surface in the product: a stack of
 * unnumbered boxes and a small grey Submit. It is a document she is filling in
 * — the same document that is kept, verbatim, in her materials afterwards — so
 * it is laid out as one: numbered entries down a ruled margin, the criteria in
 * a grid rather than a column, and a footer that says what submitting settles.
 */
async function renderToolkit(n) {
  const T = t();
  const host = document.getElementById('tkbody' + n);
  if (!host) return;
  const r = await api('GET', '/api/toolkits/' + n);
  const s = r.body;
  // Some Toolkits have no fields of their own: their rows are generated by an
  // Engine from what the consultation produced, and they are completed on the
  // screen that carries that outcome. Offering an empty form and a Submit that
  // can only ever refuse her is worse than saying so.
  if (!(s.fields || []).length) {
    host.innerHTML = `<div class="tkwork">
      ${s.intro ? `<div class="tkintro"><p>${esc(s.intro)}</p></div>` : ''}
      <p class="tklater">${esc(T.tkLater)}</p>
    </div>`;
    return;
  }
  let entry = 0;
  host.innerHTML = `<div class="tkwork">
    ${s.intro ? `<div class="tkintro"><p>${esc(s.intro)}</p></div>` : ''}
    ${(s.fields || []).map(f => {
      if (f.type === 'checklist') return `<div class="tkcrit">
        <h4>${esc(f.label)}</h4>
        <div class="checklist crit">${f.items.map(it =>
          `<label class="chk"><input type="checkbox" data-k="${it.key}"><span>${esc(it.label)}</span></label>`).join('')}</div>
      </div>`;
      const num = String(++entry).padStart(2, '0');
      const id = `tkf${n}-${entry}`;
      const control = f.type === 'select'
        ? `<select id="${id}" data-n="${f.name}">${f.options.map(o => `<option>${esc(o)}</option>`).join('')}</select>`
        : f.type === 'text'
          ? `<input id="${id}" data-n="${f.name}">`
          : `<textarea id="${id}" data-n="${f.name}" rows="2"></textarea>`;
      return `<div class="tkentry">
        <span class="tkno">${num}</span>
        <div class="tkfield"><label for="${id}">${esc(f.label)}</label>${control}</div>
      </div>`;
    }).join('')}
    <div class="tkfoot">
      <button class="primary lg" id="tks${n}" type="button">${esc(T.submit)}</button>
      <span class="tkfnote">${esc(T.tkKept)}</span>
    </div>
    <div id="tki${n}"></div>
  </div>`;
  document.getElementById('tks' + n).onclick = async () => {
    const btn = document.getElementById('tks' + n);
    const box = document.getElementById('tki' + n);
    const label = btn.textContent;
    const data = {};
    host.querySelectorAll('[data-n]').forEach(f => { data[f.dataset.n] = f.value; });
    const chk = host.querySelectorAll('[data-k]');
    if (chk.length) { data.depthCheck = {}; chk.forEach(c => { data.depthCheck[c.dataset.k] = c.checked; }); }
    btn.disabled = true; btn.textContent = T.saving;
    let res = null;
    try { res = await api('POST', `/api/attempts/${S.attempt.id}/toolkit/${n}`, data); }
    catch (e) { res = null; }
    btn.disabled = false; btn.textContent = label;
    // A network failure is not the same thing as a document that does not yet
    // meet the criterion, and she should never be told the second when it was
    // the first.
    if (!res) {
      box.innerHTML = `<div class="tkissues"><h4>${esc(T.failTitle)}</h4>
        <div>${esc(T.errSave)}</div></div>`;
      return;
    }
    if (res.body && res.body.valid) {
      S.view = res.body.view;
      const ar = await api('GET', `/api/attempts/${S.attempt.id}`); S.attempt = ar.body.attempt;
      return renderRunner();
    }
    const issues = (res.body && res.body.issues) || [];
    box.innerHTML = `<div class="tkissues">
      <h4>${esc(T.tkNotYet)}</h4>
      ${issues.length ? issues.map(x => `<div>${esc(localiseIssue(x))}</div>`).join('')
        : `<div>${esc(plainError(res, T.errSave))}</div>`}</div>`;
    box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };
}

// ---- Phase 8 --------------------------------------------------------------
async function renderOutcome() {
  const T = t();
  if (!S.outcome) {
    const r = await api('GET', `/api/attempts/${S.attempt.id}/continuation`);
    S.outcome = r.body.decisionOutcome; S.proposal = r.body.proposal;
  }
  const o = S.outcome, p = S.proposal;
  const cls = o.outcome === 'YES' ? 'sage' : o.outcome === 'DEFER' ? '' : 'rose';
  let html = `<div style="display:flex;gap:10px;align-items:center;margin-bottom:12px">
      <button class="ghost" id="leave">← ${esc(T.practiceTitle)}</button></div>
    <section class="hero"><div class="kicker">${esc(T.outcomeTitle)}</div>
      <h1>${esc(o.outcome)}</h1>
      <p style="font-family:var(--serif);font-size:19px;color:#EFEAE3">${esc(o.clientLanguage)}</p></section>
    <section class="card"><h4>${esc(T.outcomeBasis)}</h4>
      ${o.rationale.map(r => `<div class="evidence ${cls}">${esc(r)}</div>`).join('')}
      <div class="notice" style="margin-top:8px">${esc(o.toolkitAttachment.note)}</div></section>
    <section class="card tkwork"><h4>${esc(T.followUp)} · ${esc(T.toolkitTitle)} #8</h4>
      ${p.instruction ? `<div class="tkintro"><p>${esc(p.instruction)}</p></div>` : ''}
      <div id="rows" class="fuplan">${p.rows.map((r, i) => `<article class="furow">
        <div class="fuwhen"><b>${esc(r.interval)}</b><span>${esc(r.purpose)}</span></div>
        <div class="cols three fufields">
          ${['timing', 'channel', 'owner'].map(k =>
            `<div class="field" style="margin:0"><label for="fu${i}${k}">${esc(humanKey(k))}</label>
              <input id="fu${i}${k}" data-r="${i}" data-k="${k}"></div>`).join('')}
        </div></article>`).join('')}</div>
      ${p.prompts.agreedFollowUpDate ? `<div class="field"><label for="agreed">${esc(T.agreedDate)}</label><input id="agreed" placeholder="${esc(p.prompts.agreedFollowUpDate)}"></div>` : ''}
      ${p.prompts.closureNote ? `<div class="field"><label for="closure">${esc(T.closureNote)}</label><textarea id="closure" placeholder="${esc(p.prompts.closureNote)}"></textarea></div>` : ''}
      ${p.closureOptions ? `<div class="field"><label for="disp">${esc(humanKey('closureDisposition'))}</label><select id="disp">${p.closureOptions.map(c => `<option value="${c.key}">${esc(c.label)} — ${esc(c.when)}</option>`).join('')}</select></div>` : ''}
      <div class="field"><label for="stopc">${esc(T.stopCondition)}</label><textarea id="stopc" placeholder="${esc(p.prompts.stopCondition)}"></textarea></div>
      ${p.prompts.notes ? `<div class="notice">${esc(p.prompts.notes)}</div>` : ''}
      <div class="tkfoot">
        <button class="primary lg" id="submit8" type="button">${esc(T.completePlan)}</button>
        <span class="tkfnote">${esc(T.tkKept)}</span>
      </div>
      <div id="i8"></div></section>`;
  $('#view').innerHTML = html;
  $('#leave').onclick = () => { S.attempt = null; S.view = null; S.outcome = null; render(); };
  $('#submit8').onclick = async () => {
    const btn = $('#submit8'), box = $('#i8'), label = btn.textContent;
    const rows = p.rows.map((r, i) => {
      const o2 = { interval: r.interval, purpose: r.purpose, outcome: '' };
      document.querySelectorAll(`[data-r="${i}"]`).forEach(f => { o2[f.dataset.k] = f.value; });
      return o2;
    });
    const body = { rows, stopCondition: ($('#stopc') || {}).value || '' };
    if ($('#agreed')) body.agreedFollowUpDate = $('#agreed').value;
    if ($('#closure')) body.closureNote = $('#closure').value;
    if ($('#disp')) body.closureDisposition = $('#disp').value;
    btn.disabled = true; btn.textContent = T.saving;
    let r = null;
    try { r = await api('POST', `/api/attempts/${S.attempt.id}/continuation`, body); }
    catch (e) { r = null; }
    btn.disabled = false; btn.textContent = label;
    if (!r) {
      box.innerHTML = `<div class="tkissues"><h4>${esc(T.failTitle)}</h4>
        <div>${esc(T.errSave)}</div></div>`;
      return;
    }
    if (r.body && r.body.valid) { S.evidence = r.body.evidence; return renderDebrief(); }
    const issues = (r.body && r.body.issues) || [];
    box.innerHTML = `<div class="tkissues"><h4>${esc(T.tkNotYet)}</h4>
      ${issues.length ? issues.map(x => `<div>${esc(localiseIssue(x))}</div>`).join('')
        : `<div>${esc(plainError(r, T.errSave))}</div>`}</div>`;
    box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };
}

async function showEvidence(id) {
  busy();
  const r = await api('GET', `/api/attempts/${id}/evidence`);
  S.evidence = r.body; S.attempt = { id };
  renderDebrief();
}

/**
 * Is a competency observation a good one?
 *
 * The engine writes the reading as a WORD, already in the reader's language —
 * ESTABLISHED / ESTABLECIDA, STRENGTH / FORTALEZA, and their opposites. The
 * screen used to test `reading === 'ESTABLISHED'`, which is false for every
 * Spanish reading and for every English STRENGTH: a Madrid practitioner was
 * told nothing she did had held, and every observation was coloured as a
 * failure. The reading is matched in both languages, both ways round.
 */
const READING_HOLDS = /^(ESTABLISHED|ESTABLECIDA|STRENGTH|FORTALEZA)$/i;
const holds = o => READING_HOLDS.test(String((o && o.reading) || '').trim());

/**
 * A finished consultation is marked in the debrief the way a finished module
 * is marked in the Academy: what the record now supports, what comes next, and
 * the one thing to carry into a real room this week. The first is read from
 * the competency observations the engine wrote — and where none of them stands
 * established, that is said plainly instead of being dressed up.
 */
function consultationCompletion(e) {
  const T = t();
  if (!e || e.status !== 'completed' || (S.user && S.user.role === 'manager')) return '';
  const established = (e.competencyObservations || []).filter(holds);

  // the next consultation is the next case she has not finished
  const cases = (S.cases || []).slice().sort((a, b) => (a.caseNumber || 0) - (b.caseNumber || 0));
  const nextCase = cases.find(c => c.id !== e.scenario) || null;

  // what to take into a real consultation: the practice priority the engine
  // wrote against the first decision that did not hold, else the last one.
  const decs = (e.feedback || []).filter(f => f.kind === 'decision').map(f => f.feedback);
  const off = decs.find(f => f && !/^ALIGNED/.test(f.alignmentVerdict || ''));
  const src = off || decs[decs.length - 1] || null;
  const week = src && src.nextPracticePriority ? src.nextPracticePriority : '';

  return `<section class="card cmpconsult">
    <div class="ccm-kick">${esc(T.cmpCase)}</div>
    <p class="ccm-lead">${esc(T.cmpCaseBody)}</p>
    <div class="cols two">
      <div>
        <h4>${esc(T.cmpNowCan)}</h4>
        ${established.length
          ? established.map(o => `<div class="evidence sage"><b>${esc(o.dimension)}</b><br>${esc(o.evidence)}</div>`).join('')
          : `<p class="cmpline">${esc(T.cmpNoneEstablished)}</p>`}
      </div>
      <div>
        <h4>${esc(T.cmpNextThing)}</h4>
        <p class="cmpline">${esc(nextCase ? `${nextCase.title} — ${nextCase.client.name}` : T.cmpNoNext)}</p>
        <div class="cmpacts">
          ${nextCase ? `<button class="wi-alt" id="ccm-next">${esc(T.cmpOpenCase)}</button>` : ''}
          <button class="wi-alt" id="ccm-keep">${esc(T.arcGoMaterials)}</button>
        </div>
      </div>
    </div>
    <p class="muted" style="margin:14px 0 0">${esc(T.cmpKeepNote)}</p>
    ${week ? `<div class="cmpweekin">
      <h4>${esc(T.cmpThisWeek)}</h4>
      <p class="assignline">${esc(week)}</p>
    </div>` : ''}
    <p class="muted cmphonest">${esc(T.cmpHonest)}</p>
  </section>`;
}

// ==========================================================================
// CASE EVIDENCE — the manager's drill-down
//
// The fifth question the manager is buying an answer to: what actually
// happened in one consultation. Every decision in the order it was taken, the
// words that were used, the client's state at that exact moment and how far it
// moved, the MIRROR reading of the choice, the Toolkit documents written
// inside the consultation as documents, and the outcome with the rationale the
// Decision Engine derived it from. Nothing is scored and nobody is ranked.
// ==========================================================================
async function openCaseEvidence(id) {
  busy();
  const r = await api('GET', `/api/manager/attempts/${id}`);
  const e = r.body || null;
  const schemas = {};
  if (e) {
    const numbers = (e.toolkitArtifacts || []).filter(a => a && a.valid).map(a => a.n);
    await pool(numbers, 4, async (n) => {
      try { const s = await api('GET', '/api/toolkits/' + n); if (s.ok) schemas[n] = s.body; } catch (err) { /* readable without labels */ }
    });
  }
  S.caseEvidence = { e, schemas, id };
  renderCaseEvidence();
}

function renderCaseEvidence() {
  const T = t();
  const { e, schemas } = S.caseEvidence;
  if (!e) {
    $('#view').innerHTML = `<div class="card"><p class="muted">${esc(T.errLoad)}</p></div>`;
    return;
  }
  const day = s => { if (!s) return ''; const d = new Date(s); return isNaN(d.getTime()) ? '' : d.toLocaleString(); };
  const readout = e.trustReadout || [];
  const decs = e.decisions || [];
  const fbs = (e.feedback || []).filter(f => f.kind === 'decision');
  const arts = (e.toolkitArtifacts || []).filter(a => a && a.valid).sort((a, b) => (a.n || 0) - (b.n || 0));
  const o = e.decisionOutcome;

  const mapRows = decs.map(d => {
    const c = d.consequence || {};
    const moved = Object.keys(c.trustDelta || {}).filter(k => c.trustDelta[k]).map(k => {
      const r = readout.find(x => x.key === k);
      return { name: r ? r.name : k, d: c.trustDelta[k] };
    });
    return { n: phaseNumberOf(d.phase), name: phaseLabel(d.phase), state: 'done',
             choice: d.label, willingness: c.willingnessAfter,
             wd: (c.willingnessAfter || 0) - (c.willingnessBefore || 0), moved };
  });

  const steps = decs.map((d, i) => {
    const c = d.consequence || {};
    const fb = fbs[i] && fbs[i].feedback;
    const neg = fb ? !/^ALIGNED/.test(fb.alignmentVerdict || '') : false;
    const rows = readout.map(r => Object.assign({}, r, {
      value: (c.trustAfter && typeof c.trustAfter[r.key] === 'number') ? c.trustAfter[r.key] : r.value
    }));
    const moved = Object.keys(c.trustDelta || {}).filter(k => c.trustDelta[k]);
    return `<div class="tp ${neg ? 'neg' : ''}">
      <div class="ph">${esc(T.evAtPhase)} ${phaseNumberOf(d.phase)} · ${esc(phaseLabel(d.phase))}</div>
      <div class="ti"><b>${esc(d.label)}</b></div>
      ${d.language ? `<div class="evsaid"><span class="evk">${esc(T.evSaid)}</span>
        <q>${esc(d.language)}</q></div>` : ''}
      ${d.degraded ? `<div class="notice" style="margin-top:8px">${esc(T.evDegraded)}</div>` : ''}
      ${fb ? `<div class="evverdict">
        <span class="vd ${/^ALIGNED/.test(fb.alignmentVerdict || '') ? 'vd-A' : /^PARTIALLY/.test(fb.alignmentVerdict || '') ? 'vd-P' : 'vd-N'}">${esc(fb.alignmentVerdict || '')}</span>
        <span class="evk">${esc(T.evVerdict)}</span>
        <p>${esc(fb.alignmentReason || fb.mirrorInterpretation || '')}</p>
      </div>` : ''}
      <div class="evstate">
        <div class="evk">${esc(T.evClientAt)}</div>
        ${ART.miniTrack(c.willingnessBefore, c.willingnessAfter, T.willingness)}
        <div class="evchips">
          <span class="tag">${esc(T.postureRow)}: ${esc(postureWord(c.posture))}</span>
          ${typeof c.objectionIntensity === 'number'
            ? `<span class="tag">${esc(T.objectionRow)}: ${c.objectionIntensity}</span>` : ''}
        </div>
        ${moved.length ? ART.trustLadder(rows.filter(r => moved.indexOf(r.key) >= 0), c.trustBefore, {})
          : `<p class="muted" style="margin:6px 0 0">${esc(T.evNothingMoved)}</p>`}
        ${(c.newlyRevealed || []).length ? `<div class="evchips"><span class="evk">${esc(T.justDisclosed)}</span>
          ${c.newlyRevealed.map(x => `<span class="tag gold">${esc(ledgerWord(x))}</span>`).join('')}</div>` : ''}
        ${(c.stillWithheld || []).length ? `<div class="evchips"><span class="evk">${esc(T.withheld)}</span>
          ${c.stillWithheld.map(x => `<span class="tag rose">${esc(ledgerWord(x))}</span>`).join('')}</div>` : ''}
      </div>
    </div>`;
  }).join('');

  $('#view').innerHTML = `
    <div class="runtop"><button class="ghost" id="leave">← ${esc(T.evBack)}</button></div>
    <section class="hero"><div class="kicker">${esc(T.evTitle)}</div>
      <h1>${esc(e.caseTitle || e.scenario)}${e.clientName ? ' · ' + esc(e.clientName) : ''}</h1>
      <p>${esc(T.evWhoWhen)}: ${esc(e.practitioner || '')} · ${esc(day(e.completedAt || e.startedAt))}</p>
      <div class="herostats">
        <div><b>${esc(o ? o.outcome : '—')}</b>${esc(T.outcomeTitle)}</div>
        <div><b>${decs.length}</b>${esc(T.decisionsMade)}</div>
        <div><b>${arts.length}</b>${esc(T.toolkitDocs)}</div>
      </div></section>

    ${decs.length ? `<section class="card mapcard cmapcard">
      <h4>${esc(T.mapTitle)}</h4>
      <p class="muted" style="margin-bottom:12px">${esc(T.mapSubMgr)}</p>
      ${ART.consultMap(mapRows, { notReached: T.mapNotReached, here: T.mapHere, willShort: T.willShort })}
    </section>` : ''}

    <div class="secthead"><h2>${esc(T.evDecisions)}</h2></div>
    ${decs.length
      ? `<section class="card evtl"><div class="timeline">${steps}</div></section>`
      : `<div class="card"><p class="muted">${esc(T.evAbandoned)}</p></div>`}

    <div class="secthead"><h2>${esc(T.evArtifacts)}</h2></div>
    <p class="muted lead-note">${esc(T.evArtifactsSub)}</p>
    ${arts.length
      ? `<div class="tkdocs">${arts.map(a => toolkitDocument(a, schemas[a.n], true)).join('')}</div>`
      : `<div class="card libempty"><p>${esc(T.evNoArtifacts)}</p></div>`}

    <div class="secthead"><h2>${esc(T.evOutcome)}</h2></div>
    ${o ? `<section class="card outcard oc-${esc(String(o.outcome).toLowerCase())}">
        <div class="ocbig">${esc(o.outcome)}</div>
        <blockquote class="ocsay">${esc(o.clientLanguage || '')}</blockquote>
        <h4>${esc(T.evRationale)}</h4>
        ${(o.rationale || []).map(r => `<div class="evidence">${esc(r)}</div>`).join('')}
        ${o.toolkitAttachment && o.toolkitAttachment.note ? `<div class="notice">${esc(o.toolkitAttachment.note)}</div>` : ''}
      </section>`
      : `<div class="card libempty"><p>${esc(T.evNotDerived)}</p></div>`}

    ${e.continuation ? `<section class="card"><h4>${esc(T.evFollowUp)}</h4>
      <div class="evidence">${esc(e.continuation.relationshipTransition.basis)}</div>
    </section>` : ''}

    <div class="evfinal">${statePanel(e.clientStateFinal, readout)}</div>`;

  $('#leave').onclick = () => {
    S.caseEvidence = null; S.attempt = null; S.evidence = null;
    S.tab = 'manager'; renderTabs(); render();
  };
}

function renderDebrief() {
  const T = t();
  const e = S.evidence;
  // A manager can reach this screen too, and it must not tell her that she
  // made decisions she watched somebody else make.
  const mgrReading = !!(S.user && S.user.role === 'manager');
  const tps = (e.decisions || []).map((d, i) => {
    const fb = (e.feedback || []).filter(f => f.kind === 'decision')[i];
    const neg = fb && !/^ALIGNED/.test(fb.feedback.alignmentVerdict || '');
    return { d, fb: fb && fb.feedback, neg };
  });
  $('#view').innerHTML = `
    <div style="display:flex;gap:10px;margin-bottom:12px"><button class="ghost" id="leave">← ${esc(T.practiceTitle)}</button></div>
    <section class="hero"><div class="kicker">${esc(T.debrief)}</div>
      <h1>${esc(e.caseTitle || e.scenario)}</h1>
      <p>${esc(e.decisionOutcome ? e.decisionOutcome.clientLanguage : '')}</p>
      <div class="herostats">
        <div><b>${e.decisionOutcome ? e.decisionOutcome.outcome : '—'}</b>${esc(T.outcomeTitle)}</div>
        <div><b>${(e.decisions || []).length}</b>${esc(mgrReading ? T.decisionsMade : T.yourMove)}</div>
        <div><b>${(e.toolkitArtifacts || []).filter(a => a.valid).length}</b>${esc(T.toolkitDocs)}</div>
      </div></section>
    ${consultationCompletion(e)}
    ${tps.length ? `<section class="mapcard">
      <h4>${esc(T.consultMap)}</h4>
      ${ART.trustCurve(tps.map((x, i) => ({
        n: i + 1,
        short: phaseLabel(x.d.phase).slice(0, 9),
        willingness: x.d.consequence.willingnessAfter,
        aligned: x.fb ? /^ALIGNED/.test(x.fb.alignmentVerdict || '') : null
      })), S.lang)}
      <p class="muted" style="margin:0">${esc(mgrReading ? T.consultMapNoteMgr : T.consultMapNote)}</p>
    </section>` : ''}
    <div class="grid2"><div>
      <section class="card"><h4>${esc(T.turningPoints)}</h4>${tps.length ? `<div class="timeline">
        ${tps.map(x => `<div class="tp ${x.neg ? 'neg' : ''}">
          <div class="ph">${esc(phaseLabel(x.d.phase))}</div>
          <div class="ti"><b>${esc(x.d.label)}</b></div>
          ${x.fb ? `<div class="muted" style="margin-top:4px">${esc(x.fb.alignmentReason || '')}</div>` : ''}
          ${(x.d.consequence.newlyRevealed || []).length ? `<div style="margin-top:6px">${x.d.consequence.newlyRevealed.map(r => `<span class="tag gold">${esc(ledgerWord(r))}</span>`).join('')}</div>` : ''}
        </div>`).join('')}
      </div>` : `<p class="muted">${esc(T.noData)}</p>`}</section>
      ${(e.competencyObservations || []).length ? `<section class="card"><h4>${esc(T.progressTitle)}</h4>
        ${e.competencyObservations.map(o => `<div class="evidence ${holds(o) ? 'sage' : 'rose'}">
          <b>${esc(o.dimension)}</b> — ${esc(o.reading)}<br>${esc(o.evidence)}</div>`).join('')}</section>` : ''}
      ${e.continuation ? `<section class="card"><h4>${esc(T.followUp)}</h4>
        <div class="evidence">${esc(e.continuation.relationshipTransition.basis)}</div>
        <div class="notice">${esc(e.continuation.toolkitEligibility[16].reason)}</div></section>` : ''}
    </div><div>${statePanel(e.clientStateFinal, e.trustReadout)}</div></div>`;
  $('#leave').onclick = () => { S.attempt = null; S.evidence = null; S.view = null; S.outcome = null; render(); };
  if (S.user.role === 'manager') $('#leave').textContent = '← ' + t().practiceTitle;

  // The end of one consultation is the beginning of the next thing, never a
  // page she has to find her own way off. Both offers are wired.
  const clear = () => { S.attempt = null; S.evidence = null; S.view = null; S.outcome = null; };
  const nx = $('#ccm-next');
  if (nx) nx.onclick = () => {
    const cases = (S.cases || []).slice().sort((a, b) => (a.caseNumber || 0) - (b.caseNumber || 0));
    const next = cases.find(c => c.id !== e.scenario);
    clear();
    if (next) { S.tab = 'practice'; renderTabs(); return startCase(next.id, false); }
    S.tab = 'practice'; renderTabs(); render();
  };
  const kp = $('#ccm-keep');
  if (kp) kp.onclick = () => { clear(); S.tab = 'resources'; renderTabs(); render(); };
}

// ==========================================================================
// JOURNAL
// ==========================================================================
async function renderJournal() {
  const T = t();
  const r = await api('GET', '/api/academy/journal');
  const entries = r.body.entries || [];
  $('#view').innerHTML = `<h1>${esc(T.journalTitle)}</h1>
    <p class="muted" style="max-width:66ch;margin-bottom:20px">${esc(T.journalSub)}</p>
    ${entries.length ? entries.map(en => `<section class="card">
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px">
        <span class="badge ${en.status === 'open' ? 'ready' : 'done'}">${esc(en.status === 'open' ? T.open : T.answered)}</span>
        <span class="muted">${esc(en.moduleTitle || '')}</span></div>
      <p style="font-family:var(--serif);font-size:17px">${esc(en.apply.assignment)}</p>
      <p class="muted">${esc(en.apply.prompt)}</p>
      ${en.status === 'answered'
        ? `<div class="evidence sage">${esc(en.answer)}</div>`
        : `<textarea data-j="${en.id}" placeholder="${esc(T.answer)}"></textarea>
           <div style="margin-top:10px"><button class="gold" data-js="${en.id}">${esc(T.save)}</button></div>
           <div id="je${en.id}"></div>`}
    </section>`).join('') : blank({
      mark: 'journal', kicker: T.blankJnK, title: T.blankJnTitle, body: T.blankJnBody,
      acts: [{ id: 'jn-go', label: T.blankJnGo }]
    })}`;
  const go = $('#jn-go');
  if (go) go.onclick = () => { S.tab = 'curriculum'; renderTabs(); render(); };
  document.querySelectorAll('[data-js]').forEach(b => b.onclick = async () => {
    const id = b.dataset.js;
    const box = document.getElementById('je' + id);
    const val = document.querySelector(`[data-j="${id}"]`).value;
    // A saved reflection is the only thing in the product the practitioner
    // cannot recover by re-running something, so the button says it is working
    // and a failure never eats what she wrote.
    const label = b.textContent;
    b.disabled = true; b.textContent = T.saving;
    let res = null;
    try { res = await api('POST', `/api/academy/journal/${id}`, { answer: val }); }
    catch (e) { res = null; }
    b.disabled = false; b.textContent = label;
    if (res && res.ok) return renderJournal();
    box.innerHTML = `<div class="evidence rose" style="margin-top:10px">${esc(
      res ? plainError(res, t().errSave) : t().errSave)}</div>`;
  });
}

// ==========================================================================
// YOUR MATERIALS
//
// A retained-materials surface: everything the practitioner has produced and
// can come back to, from recorded work only. Three kinds of thing, and each is
// shown as the thing it is rather than as a row in a table —
//   · the Toolkit artifacts she completed inside consultations, laid out as
//     the documents they are, field by field, in her own words;
//   · her field-journal answers, kept against the assignment that asked;
//   · the passages from the book she has worked through in lessons, with the
//     chapter each one came from, collected as one reference she can re-read.
// Nothing is invented and nothing is summarised: if a section is empty it says
// how it fills, because that is the useful sentence.
// ==========================================================================

/** Run an async job over a list a few at a time, so a full library does not
    open forty requests at once. */
async function pool(items, width, job) {
  const queue = items.slice();
  const run = async () => { while (queue.length) await job(queue.shift()); };
  await Promise.all(Array.from({ length: Math.min(width, queue.length || 1) }, run));
}

async function gatherLibrary() {
  if (S.library) return S.library;
  const c = await loadCurriculum(true);
  const [listR, jnR] = await Promise.all([
    api('GET', '/api/attempts'), api('GET', '/api/academy/journal')
  ]);
  const attempts = ((listR.body && listR.body.attempts) || [])
    .filter(a => (a.toolkitsCompleted || []).length)
    .sort((a, b) => new Date(b.completedAt || b.startedAt) - new Date(a.completedAt || a.startedAt));

  // one entry per consultation, with the documents written inside it
  const consults = [];
  await pool(attempts, 6, async (a) => {
    let ev = null;
    try { ev = await api('GET', `/api/attempts/${a.id}/evidence`); } catch (e) { return; }
    const body = ev && ev.body; if (!body) return;
    const docs = (body.toolkitArtifacts || []).filter(x => x && x.valid)
      .sort((x, y) => (x.n || 0) - (y.n || 0));
    if (!docs.length) return;
    consults.push({
      id: a.id, caseTitle: body.caseTitle || a.caseTitle, clientName: body.clientName || '',
      scenario: a.scenario, outcome: a.outcome,
      at: body.completedAt || body.startedAt || a.startedAt, docs
    });
  });
  consults.sort((a, b) => new Date(b.at) - new Date(a.at));

  // the field schemas, so a document reads with its own labels
  const schemas = {};
  const numbers = [];
  consults.forEach(cn => cn.docs.forEach(d => { if (numbers.indexOf(d.n) < 0) numbers.push(d.n); }));
  await pool(numbers, 4, async (n) => {
    try { const r = await api('GET', '/api/toolkits/' + n); if (r.ok) schemas[n] = r.body; } catch (e) { /* label-less is still readable */ }
  });

  // the passages she has worked through, from the lessons she has completed
  const completed = [];
  c.modules.forEach(m => (m.lessons || []).forEach(l => {
    if (l.built && l.progress && l.progress.status === 'complete') completed.push({ m, l });
  }));
  const passages = [];
  await pool(completed, 6, async ({ m, l }) => {
    let r = null;
    try { r = await api('GET', `/api/academy/modules/${m.id}/lessons/${l.id}`); } catch (e) { return; }
    if (!r.body || !r.body.built) return;
    (r.body.lesson.blocks || []).forEach(b => {
      if (b.kind !== 'insight' || !b.quote) return;
      passages.push({ quote: b.quote, source: b.source, note: b.note,
                      moduleN: m.n, moduleTitle: m.title, lessonN: l.n, lessonTitle: l.title });
    });
  });
  passages.sort((a, b) => (a.moduleN - b.moduleN) || (a.lessonN - b.lessonN));

  const journal = ((jnR.body && jnR.body.entries) || []).filter(e => e.status === 'answered');
  S.library = { consults, schemas, passages, journal };
  return S.library;
}

/** A value as it was written. Toolkit #8 stores rows of a plan, the depth
    checks store ticks; both are documents too, so both are laid out. */
function docValue(v, schema, key) {
  if (v == null || v === '') return '';
  if (typeof v === 'boolean') return `<span class="dvtick">${v ? '✓' : '—'}</span>`;
  if (Array.isArray(v)) {
    return `<div class="dvrows">${v.map(item => typeof item === 'object' && item
      ? `<div class="dvrow">${Object.keys(item).filter(k => item[k] !== '' && item[k] != null)
          .map(k => `<span><em>${esc(humanKey(k, schema, key))}</em>${esc(String(item[k]))}</span>`).join('')}</div>`
      : `<div class="dvrow"><span>${esc(String(item))}</span></div>`).join('')}</div>`;
  }
  if (typeof v === 'object') {
    const labels = checklistLabels(schema, key);
    return `<div class="dvticks">${Object.keys(v).map(k =>
      `<span class="dvt ${v[k] ? 'on' : ''}">${v[k] ? '✓' : '·'} ${esc(labels[k] || humanKey(k))}</span>`).join('')}</div>`;
  }
  return `<div class="dvtext">${esc(String(v))}</div>`;
}
/**
 * Some of a submitted document's keys belong to the continuation plan rather
 * than to a Toolkit schema, so the schema cannot name them. They are named
 * here, in both languages; anything else falls back to the key itself, made
 * readable.
 */
const DOC_LABEL = {
  rows:               { en: 'Follow-up sequence',  es: 'Secuencia de seguimiento' },
  interval:           { en: 'Interval',            es: 'Intervalo' },
  purpose:            { en: 'Purpose',             es: 'Propósito' },
  timing:             { en: 'Timing',              es: 'Momento' },
  channel:            { en: 'Channel',             es: 'Canal' },
  owner:              { en: 'Owner',               es: 'Responsable' },
  outcome:            { en: 'Outcome',             es: 'Resultado' },
  stopCondition:      { en: 'Stop condition',      es: 'Condición de cierre' },
  closureNote:        { en: 'Closure note',        es: 'Nota de cierre' },
  closureDisposition: { en: 'Closure',             es: 'Cierre' },
  agreedFollowUpDate: { en: 'Agreed follow-up moment', es: 'Momento de seguimiento acordado' },
  depthCheck:         { en: 'Depth check',         es: 'Comprobación de profundidad' }
};
function humanKey(k) {
  if (DOC_LABEL[k]) return DOC_LABEL[k][S.lang] || DOC_LABEL[k].en;
  return String(k).replace(/^f\d+_/, '').replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2');
}
function checklistLabels(schema, key) {
  const out = {};
  ((schema && schema.fields) || []).forEach(f => {
    if (f.type !== 'checklist') return;
    (f.items || []).forEach(it => { out[it.key] = it.label; });
  });
  return out;
}

/** One completed Toolkit, laid out as the document it is. Closed by default in
    the library so the shelf is legible; open where the document is the point. */
function toolkitDocument(doc, schema, open) {
  const T = t();
  const data = doc.data || {};
  const used = {};
  const fields = ((schema && schema.fields) || []).map(f => {
    used[f.name] = true;
    const v = f.type === 'checklist' ? data.depthCheck : data[f.name];
    if (f.type === 'checklist') used.depthCheck = true;
    return { label: f.label, value: v, key: f.name };
  }).filter(f => f.value != null && f.value !== '');
  Object.keys(data).forEach(k => {
    if (used[k] || data[k] == null || data[k] === '') return;
    fields.push({ label: humanKey(k), value: data[k], key: k });
  });
  return `<details class="tkdoc"${open ? ' open' : ''} data-doc="${esc(doc.n + '-' + (doc.submittedAt || ''))}">
    <summary class="tkdhead">
      <div class="tkdmark">${ART.toolkitPreview(doc.n, fields.length)}</div>
      <div class="tkdid">
        <div class="tkdk">${esc(T.toolkitTitle)} #${doc.n}</div>
        <h3>${esc(doc.name || '')}</h3>
        ${doc.summary ? `<div class="tkdsum">${esc(doc.summary)}</div>` : ''}
      </div>
      <span class="tkdopen"><span class="tkdo">${esc(T.resOpenDoc)}</span><span class="tkdc">${esc(T.resCloseDoc)}</span></span>
    </summary>
    <div class="tkdbody">
      ${fields.map(f => `<div class="dvfield">
        <div class="dvk">${esc(f.label)}</div>
        <div class="dvv userwrote">${docValue(f.value, schema, f.key)}</div>
      </div>`).join('')}
    </div>
  </details>`;
}

async function renderResources() {
  const T = t();
  $('#view').innerHTML = `<h1>${esc(T.resTitle)}</h1>
    <p class="muted lead-note">${esc(T.resSub)}</p>
    ${loadingPane(T.resLoading)}`;
  const lib = await gatherLibrary();
  const day = s => { if (!s) return ''; const d = new Date(s); return isNaN(d.getTime()) ? '' : d.toLocaleDateString(); };
  const docCount = lib.consults.reduce((s, c) => s + c.docs.length, 0);

  const tkSection = lib.consults.length
    ? lib.consults.map((cn, ci) => `<section class="libset">
        <div class="libsethead">
          <div class="lsface">${ART.avatar(avatarFor(cn.scenario), 44, openingPostureOf(cn.scenario))}</div>
          <div class="lsid">
            <div class="lsk">${esc(T.resWrittenIn)}</div>
            <h3>${esc(cn.caseTitle)}${cn.clientName ? ' · ' + esc(cn.clientName) : ''}</h3>
            <div class="muted">${esc(day(cn.at))}${cn.outcome ? ' · ' + esc(cn.outcome === 'YES' ? T.outYes : cn.outcome === 'DEFER' ? T.outDefer : T.outNo) : ''}</div>
          </div>
          <span class="lscount">${cn.docs.length} ${esc(cn.docs.length === 1 ? T.resItem : T.resItems)}</span>
        </div>
        <div class="tkdocs">${cn.docs.map((d, i) => toolkitDocument(d, lib.schemas[d.n], ci === 0 && i === 0)).join('')}</div>
      </section>`).join('')
    : blank({ mark: 'doc', kicker: T.blankJnK, title: T.resTkEmptyT, body: T.resTkEmpty,
              acts: [{ id: 'lib-cases', label: T.blankConsGo }] });

  const jnSection = lib.journal.length
    ? lib.journal.map(en => `<section class="card jncard">
        <div class="jnk">${esc(en.moduleTitle || '')}${en.answeredAt ? ' · ' + esc(day(en.answeredAt)) : ''}</div>
        <div class="jnq">${esc(T.resAssignment)}</div>
        <p class="assignline">${esc(loc(en.apply && en.apply.assignment) || '')}</p>
        ${en.apply && en.apply.prompt ? `<p class="muted">${esc(loc(en.apply.prompt))}</p>` : ''}
        <div class="jnq">${esc(T.resYourAnswer)}</div>
        <div class="evidence sage userwrote">${esc(en.answer || '')}</div>
      </section>`).join('')
    : blank({ mark: 'journal', kicker: T.blankJnK, title: T.resJnEmptyT, body: T.resJnEmpty,
              acts: [{ id: 'lib-jn', label: T.blankJnGo }] });

  const bkSection = lib.passages.length
    ? `<div class="bkgrid">${lib.passages.map(p => `<article class="bkcard">
        <div class="bksrc">${esc(p.source || '')}</div>
        <blockquote>${esc(p.quote)}</blockquote>
        ${p.note ? `<p class="bknote">${esc(p.note)}</p>` : ''}
        <div class="bkfrom">${esc(T.resFrom)} ${esc(p.moduleTitle)} · ${esc(T.lessonN)} ${p.lessonN} — ${esc(p.lessonTitle)}</div>
      </article>`).join('')}</div>`
    : blank({ mark: 'book', kicker: T.blankJnK, title: T.resBkEmptyT, body: T.resBkEmpty });

  $('#view').innerHTML = `<h1>${esc(T.resTitle)}</h1>
    <p class="muted lead-note">${esc(T.resSub)}</p>

    <div class="secthead"><h2>${esc(T.resTk)}</h2>
      <span class="trcount">${docCount} ${esc(docCount === 1 ? T.resItem : T.resItems)}</span></div>
    <p class="muted lead-note">${esc(T.resTkSub)}</p>
    ${tkSection}

    <div class="secthead"><h2>${esc(T.resJn)}</h2>
      <span class="trcount">${lib.journal.length} ${esc(lib.journal.length === 1 ? T.resEntry : T.resEntries)}</span></div>
    <p class="muted lead-note">${esc(T.resJnSub)}</p>
    ${jnSection}

    <div class="secthead"><h2>${esc(T.resBk)}</h2>
      <span class="trcount">${lib.passages.length} ${esc(lib.passages.length === 1 ? T.resNote : T.resNotes)}</span></div>
    <p class="muted lead-note">${esc(T.resBkSub)}</p>
    ${bkSection}`;

  // An empty shelf that tells you how it fills should also be the way there.
  const goTab = (id, tab) => { const b = $('#' + id); if (b) b.onclick = () => { S.tab = tab; renderTabs(); render(); }; };
  goTab('lib-cases', 'practice');
  goTab('lib-jn', 'curriculum');
}

// ==========================================================================
// PROGRESS
// ==========================================================================
/**
 * A consultation with no outcome yet is still in one of two states, and the
 * column used to print the database's own word for it — `in_progress`, in
 * English, underscore and all, on both language's screens.
 */
function attemptStatusWord(status) {
  const T = t();
  return status === 'completed' ? T.completed
    : status === 'in_progress' ? T.inProgressAt
    : String(status || '').replace(/_/g, ' ');
}

async function renderProgress() {
  const T = t();
  const c = await loadCurriculum(true);
  const list = await api('GET', '/api/attempts');
  const attempts = (list.body && list.body.attempts) || [];
  const journal = await api('GET', '/api/academy/journal');
  const answered = (journal.body.entries || []).filter(e => e.status === 'answered');
  const lessonsDone = c.modules.reduce((s, m) => s + m.completed, 0);
  let j = null;
  try { j = (await api('GET', '/api/journey')).body; } catch (e) { j = null; }
  S.journey = j;
  $('#view').innerHTML = `<h1>${esc(T.progressTitle)}</h1>
    <p class="muted" style="max-width:66ch;margin-bottom:20px">${esc(T.progressSub)}</p>

    ${j ? `<div class="secthead"><h2>${esc(T.arcTitle)}</h2></div>
    <p class="muted lead-note">${esc(T.arcLead)}</p>
    ${arcHTML(j, { extra: { decisions: attempts.reduce((s, a) => s + (a.decisions || 0), 0) } })}` : ''}

    <section class="hero"><div class="herostats" style="border:0;padding-top:0;margin-top:0">
      <div><b>${lessonsDone}</b>${esc(T.lessonsDone)}</div>
      <div><b>${attempts.length}</b>${esc(T.consultations)}</div>
      <div><b>${attempts.filter(a => a.status === 'completed').length}</b>${esc(T.statComplete)}</div>
      <div><b>${answered.length}</b>${esc(T.assignments)}</div>
    </div></section>
    <div class="cols two">
      <section class="card"><h4>${esc(T.curriculumTitle)}</h4>
        ${c.modules.filter(m => m.status === 'available').map(m => `<div class="trustrow">
          <span>${esc(m.title)}</span><span>${ART.ring(m.completed, m.lessons.length)}</span></div>`).join('')}</section>
      <section class="card"><h4>${esc(T.practiceTitle)}</h4>
        ${attempts.length ? attempts.map(a => `<div class="trustrow"><span>${esc(a.caseTitle)}</span>
          <span class="tag ${a.outcome === 'YES' ? 'gold' : ''}">${esc(a.outcome || attemptStatusWord(a.status))}</span></div>`).join('')
          : blank({ mark: 'consult', title: T.blankConsTitle, body: T.blankConsBody,
                    acts: [{ id: 'pr-cases', label: T.blankConsGo }] })}</section>
    </div>
    ${answered.length ? `<section class="card"><h4>${esc(T.journalTitle)}</h4>
      ${answered.map(a => `<div class="evidence sage">${esc(a.answer)}</div>`).join('')}</section>` : ''}`;
  if (j) wireArcNext(j);
  const pc = $('#pr-cases');
  if (pc) pc.onclick = () => { S.tab = 'practice'; renderTabs(); render(); };
}

// ==========================================================================
// MANAGER
// ==========================================================================
/**
 * THE COACHING CENTRE — five questions, each one named on screen, each one
 * answered from recorded activity and nothing else. The fifth is the one a
 * clinic owner pays for: it opens a practitioner's actual consultation and
 * lets him read it decision by decision.
 */
function mgrQuestion(n, question, caption, body, sub) {
  return `<section class="card mgrpanel qcard" data-q="${n}">
    <div class="qhead">
      <span class="qn">${n}</span>
      <div class="qh">
        <h2>${esc(question)}</h2>
        <h4>${esc(caption)}</h4>
      </div>
    </div>
    ${sub ? `<p class="muted qsub">${esc(sub)}</p>` : ''}
    ${body}
  </section>`;
}

// ==========================================================================
// THE SEVENTH ANSWER — WHAT CHANGED AFTER COACHING?
//
// The other six questions describe a team and name what to do about it. This
// one is the only one that can tell a clinic owner whether any of it worked,
// and it can only do so because she records the conversation she actually had.
//
// The discipline of the whole panel:
//   · a practitioner is compared with her own earlier work, never with a
//     colleague, and never on anything but the one thing that was named;
//   · "too early to say" is an answer, printed as plainly as any other —
//     it is honesty, not a failure to produce a result;
//   · a result that got WORSE is set in exactly the same type, on exactly the
//     same paper, as a result that improved. No red, no alarm, no softening;
//   · there is no score, no percentage, no rating, no rank and no leaderboard.
// ==========================================================================

/**
 * What there is to coach. The behaviours come from this clinic's own evidence —
 * a pattern nobody has recorded is not a thing to claim you coached. The phases
 * are canonical and are always offered, because a manager can perfectly well
 * coach Phase 2 in a week when nothing at Phase 2 was recorded.
 */
function coachablesOf(m) {
  const T = t();
  const patterns = (m.repeats || []).map(r => ({ kind: 'pattern', key: r.key, label: r.label }));
  const phases = PHASE_KEYS.map((k, n) => ({
    kind: 'phase', key: k, label: `${T.cnPhaseWord} ${n + 1} · ${phaseLabel(k)}`
  }));
  return { patterns, phases };
}

/** Which coachable thing a "coach this week" row is about, where it is about one. */
function coachableForRow(m, row) {
  const title = String(row.title || '');
  const pat = (m.repeats || []).find(r => String(r.label) === title);
  if (pat) return { kind: 'pattern', key: pat.key };
  const ph = (m.trustLoss || []).find(x => title.indexOf(String(x.name)) >= 0);
  if (ph) return { kind: 'phase', key: ph.phaseKey };
  return null;
}

/** The form. Three fields, because the server asks for exactly three things. */
function coachingForm(m) {
  const T = t();
  const people = ((m.practising && m.practising.rows) || []);
  const { patterns, phases } = coachablesOf(m);
  if (!people.length) return `<p class="muted">${esc(T.cnNoWho)}</p>`;
  return `<section class="cnform" id="cnform">
    <div class="cnfk">${esc(T.cnRecord)}</div>
    <p class="cnfsub">${esc(T.cnRecordSub)}</p>
    <div class="cnrow">
      <div class="field">
        <label for="cn-who">${esc(T.cnWho)}</label>
        <select id="cn-who"><option value="">${esc(T.cnWhoPick)}</option>
          ${people.map(p => `<option value="${esc(p.practitionerId)}">${esc(p.name)}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <label for="cn-what">${esc(T.cnWhat)}</label>
        <select id="cn-what"><option value="">${esc(T.cnWhatPick)}</option>
          ${patterns.length ? `<optgroup label="${esc(T.cnPatterns)}">
            ${patterns.map(p => `<option value="pattern:${esc(p.key)}">${esc(p.label)}</option>`).join('')}
          </optgroup>` : ''}
          ${phases.length ? `<optgroup label="${esc(T.cnPhases)}">
            ${phases.map(p => `<option value="phase:${esc(p.key)}">${esc(p.label)}</option>`).join('')}
          </optgroup>` : ''}
        </select>
      </div>
    </div>
    <div class="field">
      <label for="cn-note">${esc(T.cnNote)}</label>
      <textarea id="cn-note" placeholder="${esc(T.cnNotePh)}"></textarea>
    </div>
    <div class="cnguide${S.coachFlash ? ' good' : ' hidden'}" id="cn-guide">${esc(S.coachFlash || '')}</div>
    <div class="cnacts"><button class="primary" id="cn-save">${esc(T.cnSave)}</button></div>
  </section>`;
}

/** One recorded conversation, and what her own later work did with it. */
function coachingEffectCard(e) {
  const T = t();
  const eff = e.effect || {};
  const state = eff.state || 'too_early';
  const word = state === 'improved' ? T.cnStImproved
    : state === 'worse' ? T.cnStWorse
    : state === 'unchanged' ? T.cnStUnchanged : T.cnStTooEarly;
  const what = e.patternKey
    ? (((S.manager && S.manager.repeats) || []).find(r => r.key === e.patternKey) || {}).label
    : null;
  const subject = what || e.phaseName || '';
  const when = (() => { const d = new Date(e.createdAt); return isNaN(d.getTime()) ? '' : d.toLocaleDateString(); })();
  const b = eff.before || {}, a = eff.after || {};
  const lines = eff.lines || [];
  return `<article class="cneff st-${esc(state)}">
    <header class="cnhd">
      <div class="cnwho"><h3>${esc(e.practitioner)}</h3>
        <span class="cnwhen">${esc(when)}</span></div>
      <span class="cnstate">${esc(word)}</span>
    </header>
    ${subject ? `<div class="cnsubj"><span>${esc(T.cnCoachedOn)}</span><b>${esc(subject)}</b></div>` : ''}
    <div class="cnsaid"><div class="cnk">${esc(T.cnSaidIt)}</div><q>${esc(e.note)}</q></div>
    <p class="cnhead">${esc(eff.headline || '')}</p>
    <div class="cnba">
      <div class="cnbax"><span>${esc(T.cnBefore)}</span><b>${b.consultations || 0}</b>
        <i>${esc(T.cnConsults)}</i></div>
      <div class="cnbax"><span>${esc(T.cnAfter)}</span><b>${a.consultations || 0}</b>
        <i>${esc(T.cnConsults)}</i></div>
    </div>
    ${lines.length ? `<div class="cnlines"><div class="cnk">${esc(T.cnWhatWeRead)}</div>
      ${lines.map(l => `<p>${esc(l)}</p>`).join('')}</div>` : ''}
    ${eff.detail ? `<p class="cndetail">${esc(eff.detail)}</p>` : ''}
    ${eff.caution ? `<p class="cncaution">${esc(eff.caution)}</p>` : ''}
  </article>`;
}

function questionSeven(m) {
  const T = t();
  const list = m.coachingEffects || [];
  return coachingForm(m) + (list.length
    ? `<div class="cnlist">${list.map(coachingEffectCard).join('')}</div>`
    : `<p class="muted cnempty">${esc(T.cnNone)}</p>`);
}

/** The form, wired. A 422 is guidance about what is still missing, not an error. */
function wireQuestionSeven() {
  const T = t();
  const btn = $('#cn-save');
  if (!btn) return;
  const guide = $('#cn-guide');
  const say = (msg, good) => {
    if (!guide) return;
    guide.className = 'cnguide' + (good ? ' good' : '');
    guide.textContent = msg;
  };
  btn.onclick = async () => {
    const who = $('#cn-who').value;
    const what = $('#cn-what').value;
    const note = $('#cn-note').value;
    const [kind, key] = what ? what.split(':') : ['', ''];
    btn.disabled = true;
    const was = btn.textContent;
    btn.textContent = T.cnSaving;
    const r = await api('POST', '/api/manager/coaching-notes', {
      practitionerId: who,
      patternKey: kind === 'pattern' ? key : null,
      phase: kind === 'phase' ? key : null,
      note: note
    });
    btn.disabled = false; btn.textContent = was;
    if (r.status === 201) {
      // The confirmation survives the re-render that brings the new card in.
      S.coachFlash = T.cnSaved;
      await renderManager();
      S.coachFlash = null;
      return;
    }
    say((r.body && r.body.error) || T.cnSave, false);
  };

  // Record straight off the row she is reading.
  document.querySelectorAll('[data-coachrow]').forEach(b => b.onclick = (ev) => {
    ev.stopPropagation();
    const sel = $('#cn-what');
    if (sel) sel.value = b.dataset.coachrow;
    const form = $('#cnform');
    if (form) {
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      form.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      const who = $('#cn-who');
      if (who) setTimeout(() => who.focus(), reduce ? 0 : 320);
    }
  });
}

async function renderManager() {
  const T = t();
  const [r, ar, cur, jr] = await Promise.all([
    api('GET', '/api/manager/coaching'),
    api('GET', '/api/manager/attempts'),
    loadCurriculum().catch(() => null),
    api('GET', '/api/journey').catch(() => null)
  ]);
  const m = r.body;
  S.manager = m;
  // The same nine stages her practitioners read, counted across the clinic —
  // so she can see the exact point at which the method leaves the screen.
  const journey = (jr && jr.body && jr.body.stages) ? jr.body : null;
  if (journey) S.journey = journey;
  const p = m.practising;
  const attempts = ((ar.body && ar.body.attempts) || [])
    .filter(a => !a.abandoned)
    .sort((a, b) => new Date(b.completedAt || b.startedAt) - new Date(a.completedAt || a.startedAt));
  const day = s2 => { if (!s2) return '—'; const d = new Date(s2); return isNaN(d.getTime()) ? '—' : d.toLocaleDateString(); };

  const q1 = p.rows.length ? `<p class="qlead">${esc(p.headline)}</p>
      <div class="tablewrap"><table class="people"><thead><tr>
        <th>${esc(T.practitioner)}</th><th>${esc(T.lessonsDone)}</th><th>${esc(T.consultations)}</th><th>${esc(T.lastActive)}</th></tr></thead>
        <tbody>${p.rows.map(r2 => `<tr><td>${esc(r2.name)}</td><td>${r2.lessons}</td>
          <td>${r2.consultations}${r2.completed ? ' (' + r2.completed + '✓)' : ''}</td>
          <td>${esc(day(r2.lastActive))}</td></tr>`).join('')}</tbody></table></div>`
    : `<p class="muted">${esc(T.qNoneWho)}</p>`;

  const q2 = m.repeats.length
    ? ART.patternBars(m.repeats.map(x => ({
        label: x.label, value: x.occurrences, tone: x.practitioners > 1 ? 'bad' : 'warn', note: x.evidence
      })), S.lang)
    : `<p class="muted">${esc(T.qNoneRepeats)}</p>`;

  const q3 = m.trustLoss.length
    ? ART.patternBars(m.trustLoss.slice(0, 5).map(x => ({
        label: `${x.n} · ${x.name}`, value: x.misaligned + x.partial, tone: 'bad', note: x.evidence
      })), S.lang)
    : `<p class="muted">${esc(T.qNoneTrust)}</p>`;

  // Each row names a pattern or a phase, so the manager can record the
  // conversation from the row she is reading rather than rebuilding it in a form.
  const q4 = m.coachThisWeek.length
    ? m.coachThisWeek.map((c, i) => {
        const k = coachableForRow(m, c);
        return `<div class="coachitem ${i ? '' : 'first'}">
        <h3>${esc(c.title)}</h3>
        <div class="evidence">${esc(c.evidence)}</div>
        <div class="principle"><b>${esc(T.apply)}</b>${esc(c.action)}</div>
        <div class="coachfoot">
          <span class="muted">${esc(c.basis)}</span>
          ${k ? `<button class="wi-alt cnjump" data-coachrow="${esc(k.kind + ':' + k.key)}">${esc(T.cnFromRow)}</button>` : ''}
        </div></div>`;
      }).join('')
    : `<p class="muted">${esc(T.qNoneCoach)}</p>`;

  const q5 = attempts.length
    ? `<div class="evlist">${attempts.slice(0, 8).map(a => `<div class="evrow" data-ev="${esc(a.id)}">
          <div class="evface">${ART.avatar(avatarFor(a.scenario), 42, openingPostureOf(a.scenario))}</div>
          <div class="evmeta">
            <b>${esc(a.caseTitle)}</b>
            <span class="muted">${esc(a.practitionerName)} · ${esc(day(a.completedAt || a.startedAt))} · ${a.decisions} ${esc(T.yourMove)}</span>
          </div>
          <span class="evout oc-${esc(String(a.outcome || '').toLowerCase())}">${esc(a.outcome || a.phaseReached)}</span>
          <button class="wi-alt">${esc(T.evOpen)}</button>
        </div>`).join('')}</div>
        ${attempts.length > 8 ? `<button class="ghost" id="ev-all">${esc(T.evSeeAll)}</button>` : ''}`
    : `<p class="muted">${esc(T.qNoneEvidence)}</p>`;

  // -------------------------------------------------------------------------
  // 6 — WHICH LESSON AND WHICH CASE SHOULD THIS PERSON REPEAT?
  //
  // A prescription, not a table row: the module drawn with its own cover art,
  // the client drawn as the person she is at the door, and the reason for each
  // read off this practitioner's own recorded choices. Nobody is scored, ranked
  // or ordered against anybody else — every card is about one person only, and
  // a person with nothing recorded gets a sentence that is actually useful
  // rather than an empty row.
  // -------------------------------------------------------------------------
  const modById = {};
  ((cur && cur.modules) || []).forEach(x => { modById[x.id] = x; });

  const rxSlotLesson = (rl) => {
    if (!rl) return `<p class="muted rxnone">${esc(T.rxNoLesson)}</p>`;
    const mod = modById[rl.moduleId] || null;
    return `<div class="rxcover">${mod ? ART.cover(mod.n, mod.accent) : ''}
        <span class="rxnum">${esc(mod ? String(mod.n).padStart(2, '0') : '')}</span></div>
      <h4 class="rxname">${esc(rl.title)}</h4>
      ${mod ? `<div class="rxsub">${esc(T.curTeaches)} ${phaseNumberOf(mod.phase)} · ${esc(phaseLabel(mod.phase))}</div>` : ''}
      <p class="rxwhy"><b>${esc(T.rxWhy)}</b>${esc(rl.reason)}</p>
      ${mod ? `<button class="wi-alt rxgo" data-rxmod="${esc(mod.id)}">${esc(T.rxOpenModule)}</button>` : ''}`;
  };
  const rxSlotCase = (rc) => {
    if (!rc) return `<p class="muted rxnone">${esc(T.rxNoCase)}</p>`;
    const posture = openingPostureOf(rc.id);
    return `<div class="rxclient">
        <span class="rxface">${ART.avatar(avatarFor(rc.id), 58, posture)}</span>
        <span class="rxnum rxcn">${esc(String(rc.caseNumber || '').padStart(2, '0'))}</span>
      </div>
      <h4 class="rxname">${esc(rc.title)}</h4>
      <div class="rxsub">${esc(T.libPosture)} · ${esc(postureWord(posture))}</div>
      <p class="rxwhy"><b>${esc(T.rxWhy)}</b>${esc(rc.why)}</p>`;
  };

  const rows6 = (m.whatToRepeat || []);
  const q6 = rows6.length ? `<div class="rxlist">${rows6.map(p6 => {
      if (p6.state !== 'ready') {
        return `<article class="rxcard waiting">
          <div class="rxwho"><h3>${esc(p6.name)}</h3>
            <span class="badge prod">${esc(T.rxNotStarted)}</span></div>
          <p class="rxline">${esc(p6.headline)}</p>
          <p class="rxwait">${esc(p6.evidence)}</p>
        </article>`;
      }
      return `<article class="rxcard">
        <div class="rxwho"><h3>${esc(p6.name)}</h3></div>
        <p class="rxline">${esc(p6.headline)}</p>
        <div class="rxpair">
          <section class="rxslot rxl"><div class="rxk">${esc(T.rxLesson)}</div>${rxSlotLesson(p6.repeatLesson)}</section>
          <section class="rxslot rxc"><div class="rxk">${esc(T.rxCase)}</div>${rxSlotCase(p6.repeatCase)}</section>
        </div>
        <div class="rxfoot">
          <div class="rxblk"><div class="rxk">${esc(T.rxEvidence)}</div><p>${esc(p6.evidence)}</p></div>
          ${p6.conversation ? `<div class="rxblk rxtalk"><div class="rxk">${esc(T.rxConversation)}</div>
            <p>${esc(p6.conversation)}</p></div>` : ''}
        </div>
        <div class="rxbasis">${esc(p6.basis || T.rxBasis)}</div>
      </article>`;
    }).join('')}</div>`
    : `<p class="muted">${esc(T.qNonePrescribe)}</p>`;

  $('#view').innerHTML = (S.onboard ? walkInHTML({}) : '') + `
    <section class="hero"><div class="kicker">${esc(m.clinic)}</div>
      <h1>${esc(T.mgrTitle)}</h1><p>${esc(T.mgrSub)}</p>
      <div class="herostats">
        <div><b>${m.totals.consultations}</b>${esc(T.consultations)}</div>
        <div><b>${m.totals.lessonsCompleted}</b>${esc(T.lessonsDone)}</div>
        <div><b>${m.totals.assignmentsAnswered}</b>${esc(T.assignments)}</div>
      </div></section>

    ${journey ? `<div class="secthead"><h2>${esc(T.mgrArcTitle)}</h2></div>
    <p class="muted lead-note">${esc(T.arcMgrLead)}</p>
    ${arcHTML(journey, { noNext: true, extra: { coaching: (m.coachingEffects || []).length } })}` : ''}

    ${mgrQuestion(1, T.qWho, T.whoPractising, q1)}
    ${mgrQuestion(2, T.qRepeats, T.whatRepeats, q2)}
    ${mgrQuestion(3, T.qTrust, T.whereLost, q3)}
    ${mgrQuestion(4, T.qCoach, T.coachWeek, q4)}
    ${mgrQuestion(5, T.qEvidence, T.debrief, q5, T.qEvidenceSub)}
    ${mgrQuestion(6, T.qPrescribe, T.prescribeCap, q6, T.qPrescribeSub)}
    ${mgrQuestion(7, T.qChanged, T.changedCap, questionSeven(m), T.qChangedSub)}

    <div class="card" style="background:var(--panel-2)"><p class="muted" style="margin:0">${esc(m.basis)}</p></div>`;

  if (S.onboard) bindWalkIn({});
  wireQuestionSeven();
  document.querySelectorAll('.evrow[data-ev]').forEach(row =>
    row.onclick = () => openCaseEvidence(row.dataset.ev));
  document.querySelectorAll('[data-rxmod]').forEach(btn =>
    btn.onclick = () => openModule(btn.dataset.rxmod));
  const all = $('#ev-all');
  if (all) all.onclick = () => { S.tab = 'practice'; renderTabs(); render(); };
}

// ==========================================================================
// THE ARC — NINE STAGES, AND THE LAST THREE ARE NOT ON THIS SCREEN
//
//   Learn → See → Decide → Experience the consequence → Understand → Retry
//   → Apply in clinic → Reflect → Manager coaching
//
// The first six happen inside a lesson and inside every consultation she
// practises. The last three leave the product entirely: an assignment carried
// into a real room, a write-up on the way back, and a manager who coaches from
// that write-up rather than from an opinion. That continuation is the thing
// that separates this from a book, and it used to be invisible.
//
// It is built from the same /api/journey payload the four movements were built
// from — the server stays the source of truth for what has actually been
// recorded — plus whatever the calling screen already happens to know
// (decisions taken, coaching conversations logged). Where a number does not
// exist, none is invented, and a stage nobody has reached says "not yet"
// rather than anything that could be read as a failure or a score.
//
// A practitioner reads it for herself, a manager reads the same nine for her
// team, and it still ends in one concrete next thing rather than a status.
// ==========================================================================
const ARC_STATE_WORD = () => ({
  done: t().arcStDone, now: t().arcStNow, open: t().arcStOpen, ahead: t().arcStNotYet
});

/** Which station the server's "one next thing" is pointing at. */
// A manager's own onboarding steps — walking the moment, sending an invitation
// — are not places her team stands, so they mark nothing on the clinic's arc.
const ARC_NEXT_STATION = {
  lesson: 'learn', curriculum: 'learn', case: 'decide',
  journal: 'reflect', coach: 'coaching', materials: 'reflect'
};

/**
 * The nine stations, filled in from what has actually been recorded.
 * `opts.extra` carries anything the calling screen already holds and the
 * journey payload does not: `decisions` (a practitioner's recorded decisions)
 * and `coaching` (coaching conversations a manager has logged).
 */
function arcStations(j, opts) {
  const T = t();
  const mgr = (j && j.role) === 'manager';
  const tt = (j && j.totals) || {};
  const ex = (opts && opts.extra) || {};
  const byKey = {};
  ((j && j.stages) || []).forEach(s => { byKey[s.key] = s; });

  const lessons = tt.lessons || 0;
  const lessonsTotal = mgr ? null : (tt.lessonsAvailable || null);
  const consults = tt.consultations || 0;
  const answered = tt.assignmentsAnswered || 0;
  const opened = mgr ? null : answered + (tt.assignmentsOpen || 0);
  const decisions = (ex.decisions == null) ? null : ex.decisions;
  const coaching = (ex.coaching == null) ? null : ex.coaching;
  const nextKey = ARC_NEXT_STATION[(j && j.next && j.next.kind) || ''] || null;
  const onScreen = lessons > 0 || consults > 0;

  // A station is `now` when the server's own next step points at it, `done`
  // only against a denominator that exists, `open` when there is something
  // recorded, and otherwise simply not reached yet.
  const st = (key, has, complete) =>
    nextKey === key ? 'now' : complete ? 'done' : has ? 'open' : 'ahead';

  return [
    { key: 'learn', n: 1, name: T.arcS1, caption: mgr ? T.arcM1C : T.arcS1C, band: 'screen',
      done: lessons > 0 ? lessons : null, total: lessonsTotal,
      detail: (mgr && byKey.learn && byKey.learn.detail)
        || (lessons > 0 ? T.arcUnitLessons : T.arcWhereLearn),
      state: st('learn', lessons > 0, !!(lessonsTotal && lessons >= lessonsTotal)) },

    { key: 'see', n: 2, name: T.arcS2, caption: mgr ? T.arcM2C : T.arcS2C, band: 'screen',
      done: consults > 0 ? consults : null, total: null,
      detail: consults > 0 ? T.arcUnitConsults : T.arcWhereSee,
      state: st('see', onScreen, false) },

    { key: 'decide', n: 3, name: T.arcS3, caption: mgr ? T.arcM3C : T.arcS3C, band: 'screen',
      done: decisions > 0 ? decisions : null, total: null,
      detail: decisions > 0 ? T.arcUnitDecisions : (mgr ? T.arcMgrWhereDecide : T.arcWhereDecide),
      state: st('decide', onScreen, false) },

    { key: 'consequence', n: 4, name: T.arcS4, caption: mgr ? T.arcM4C : T.arcS4C, band: 'screen',
      done: null, total: null, detail: mgr ? T.arcMgrWhereConseq : T.arcWhereConseq,
      state: st('consequence', onScreen, false) },

    { key: 'understand', n: 5, name: T.arcS5, caption: mgr ? T.arcM5C : T.arcS5C, band: 'screen',
      done: null, total: null, detail: mgr ? T.arcMgrWhereUnderstand : T.arcWhereUnderstand,
      state: st('understand', onScreen, false) },

    { key: 'retry', n: 6, name: T.arcS6, caption: mgr ? T.arcM6C : T.arcS6C, band: 'screen',
      done: null, total: null, detail: T.arcWhereRetry,
      state: st('retry', lessons > 0, false) },

    { key: 'apply', n: 7, name: T.arcS7, caption: mgr ? T.arcM7C : T.arcS7C, band: 'clinic',
      done: (!mgr && opened > 0) ? opened : null, total: null,
      detail: mgr ? T.arcMgrApply : (opened > 0 ? T.arcUnitAssign : T.arcApplyNotYet),
      state: st('apply', (mgr ? answered : opened) > 0, false) },

    { key: 'reflect', n: 8, name: T.arcS8, caption: mgr ? T.arcM8C : T.arcS8C, band: 'clinic',
      done: answered > 0 ? answered : null, total: mgr ? null : opened,
      detail: mgr ? T.arcMgrReflect : (answered > 0 ? T.arcUnitWritten : T.arcReflectNotYet),
      state: st('reflect', answered > 0, !!(!mgr && opened && answered >= opened)) },

    { key: 'coaching', n: 9, name: mgr ? T.arcM9 : T.arcS9, caption: mgr ? T.arcM9C : T.arcS9C, band: 'clinic',
      done: (mgr && coaching > 0) ? coaching : null, total: null,
      detail: mgr ? T.arcMgrCoach : (answered > 0 ? T.arcCoachWith : T.arcCoachNotYet),
      state: st('coaching', mgr ? (coaching || 0) > 0 : answered > 0, false) }
  ];
}

function arcHTML(j, opts) {
  const T = t();
  const words = ARC_STATE_WORD();
  const mgr = (j && j.role) === 'manager';
  const stations = arcStations(j, opts);
  // On a screen that already offers the next step as its own action, offering
  // it a second time underneath is noise.
  const next = (opts && opts.noNext) ? null : (j && j.next);

  // "3 of 60" is an orientation; "0 of 0" is only a puzzle, so a total that
  // does not exist yet is simply not drawn, and a station that has no number
  // to give shows none rather than a zero pretending to be a measurement.
  const count = s => s.done == null ? ''
    : `<div class="arcxnum"><b>${s.done}</b>${s.total
        ? `<span class="arcof"> ${esc(T.arcOf)} ${s.total}</span>` : ''}</div>`;

  const card = s => `<article class="arcxst ${esc(s.state)}" data-arc="${esc(s.key)}">
    <div class="arcxtop">
      <span class="arcxn">${s.n}</span>
      <span class="arcxstate">${esc(words[s.state] || '')}</span>
    </div>
    <h4>${esc(s.name)}</h4>
    ${count(s)}
    <p>${esc(s.caption)}</p>
    ${s.detail ? `<div class="arcxdetail">${esc(s.detail)}</div>` : ''}
  </article>`;

  const band = (key, title, sub) => `<section class="arcxband b-${key}">
    <header class="arcxbh">
      <span class="arcxbk">${esc(title)}</span>
      <p>${esc(sub)}</p>
    </header>
    <div class="arcxset">${stations.filter(s => s.band === key).map(card).join('')}</div>
  </section>`;

  return `<section class="arcx">
    ${band('screen', T.arcBandScreen, mgr ? T.arcMgrBandScreenSub : T.arcBandScreenSub)}
    <div class="arcxleave" aria-hidden="true"><i></i><i></i><i></i></div>
    ${band('clinic', T.arcBandClinic, T.arcBandClinicSub)}
    <p class="arcxhonest">${esc(mgr ? T.arcMgrNotYetNote : T.arcNotYetNote)}</p>
    ${next ? `<div class="arcnext">
      <div class="arcnk">${esc(T.arcNext)}</div>
      <h3>${esc(next.title || '')}</h3>
      <p class="arcwhy">${esc(next.why || '')}</p>
      <button class="primary lg" id="arc-go">${esc(next.label || T.next)}</button>
    </div>` : ''}
  </section>`;
}

/** The single next step, wired to the thing it names. */
function wireArcNext(j) {
  const b = $('#arc-go');
  if (!b || !j || !j.next) return;
  const n = j.next;
  b.onclick = () => {
    const go = tab => { S.tab = tab; renderTabs(); render(); };
    if (n.kind === 'lesson') return openLesson(n.moduleId, n.lessonId);
    if (n.kind === 'case') { S.tab = 'practice'; renderTabs(); return startCase(n.scenarioId, false); }
    if (n.kind === 'journal') return go('journal');
    if (n.kind === 'materials') return go('resources');
    if (n.kind === 'moment') { S.moment = { pick: null }; return renderFirstMoment(); }
    if (n.kind === 'invite') return go('clinic');
    if (n.kind === 'coach') return go('manager');
    if (n.kind === 'curriculum') return go('curriculum');
    return go(S.user.role === 'manager' ? 'manager' : 'home');
  };
}

// ==========================================================================
// THE FIRST MOMENT
//
// What a clinic owner is given before anybody on her team has practised: not a
// tour and not an empty dashboard, but ninety seconds inside a real
// consultation, played by her. The signal, the three replies and the reading
// are the shipped case engine's own — she is trying the product, not a mock-up
// of it — and nothing she does here is recorded against anybody.
// ==========================================================================
const verdictWord = v => {
  const T = t();
  return /^ALIGNED/.test(v || '') ? T.vdAligned
    : /^PARTIALLY/.test(v || '') ? T.vdPartial
    : /^NOT/.test(v || '') ? T.vdNot : String(v || '');
};
const verdictClass = v => /^ALIGNED/.test(v || '') ? 'vd-A' : /^PARTIALLY/.test(v || '') ? 'vd-P' : 'vd-N';

async function loadMoment() {
  if (S.momentData) return S.momentData;
  const r = await api('GET', '/api/first-moment');
  S.momentData = r.body;
  return S.momentData;
}

async function renderFirstMoment() {
  const T = t();
  busy();
  let m = null;
  try { m = await loadMoment(); } catch (e) { m = null; }
  if (!m || !m.options) {
    $('#view').innerHTML = `<div class="card"><div class="err">${esc(T.errLoad)}</div></div>`;
    return;
  }
  const picked = S.moment && S.moment.pick
    ? m.options.find(o => o.id === S.moment.pick) : null;

  const head = `<section class="fmhero">
      <div class="kicker">${esc(m.frame.kicker)}</div>
      <h1>${esc(m.frame.title)}</h1>
      <p>${esc(m.frame.lead)}</p>
      <div class="fmnote">${esc(m.frame.note)}</div>
    </section>

    <section class="card fmroom">
      <div class="fmwho">
        <div class="fmface">${ART.avatar(avatarFor(m.client.scenario), 78, 'reserved')}</div>
        <div class="fmid">
          <div class="fmk">${esc(T.fmRoom)}</div>
          <h2>${esc(m.client.name)}</h2>
          <div class="muted">${esc(m.client.caseTitle)} · ${esc(String(m.client.age || ''))} · ${esc(m.client.presenting || '')}</div>
          <div class="fmphase">${esc(T.phaseOf)} ${m.phase.n} · ${esc(m.phase.name)} — ${esc(m.phase.objective)}</div>
        </div>
      </div>
      <p class="fmsetting">${esc(m.setting)}</p>
      <div class="fmk">${esc(T.fmSays)}</div>
      <blockquote class="fmquote">${esc(m.signal.quote)}</blockquote>
      <div class="fmk">${esc(T.fmBeneath)}</div>
      <p class="fmsub">${esc(m.signal.subtext)}</p>
    </section>`;

  if (!picked) {
    $('#view').innerHTML = head + `
      <section class="card fmchoose">
        <h4>${esc(T.fmChoose)}</h4>
        <p class="decisionprompt">${esc(m.prompt)}</p>
        <div class="fmopts">${m.options.map(o => `<button class="fmopt" data-o="${esc(o.id)}">
          <span class="fmol">${esc(o.label)}</span>
          <span class="fmoq">${esc(o.language)}</span>
        </button>`).join('')}</div>
        <button class="ghost fmskip" id="fm-skip">${esc(T.fmSkip)}</button>
      </section>`;
    document.querySelectorAll('.fmopt').forEach(b => b.onclick = () => {
      S.moment = { pick: b.dataset.o };
      api('POST', '/api/milestones/first_moment').catch(() => {});
      renderFirstMoment();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    const sk = $('#fm-skip');
    if (sk) sk.onclick = () => { S.moment = null; S.tab = 'start'; renderTabs(); render(); };
    return;
  }

  const r = picked.reading, mv = picked.movement;
  const rows = [
    [T.fmDid, r.did], [T.fmReading, r.signal], [T.fmWhy, r.interpretation],
    [T.fmPrinciple, r.principle], [T.fmCost, r.consequence], [T.fmNextTime, r.next]
  ].filter(x => x[1]);

  const deltas = Object.keys(mv.trustDelta || {}).map(k =>
    `<li class="fmdl ${mv.trustDelta[k] < 0 ? 'down' : 'up'}">${esc(trustWord(k))}
      <b>${mv.trustDelta[k] > 0 ? '+' : ''}${mv.trustDelta[k]}</b></li>`).join('');

  $('#view').innerHTML = head + `
    <section class="card fmsaid">
      <div class="fmk">${esc(T.fmYouSay)}</div>
      <blockquote class="fmyou">${esc(picked.language)}</blockquote>
    </section>

    <section class="card fb fmread">
      <div class="fbhead"><span class="vd ${verdictClass(picked.alignment)}">${esc(verdictWord(picked.alignment))}</span></div>
      ${rows.map(x => `<div class="blk"><div class="k">${esc(x[0])}</div><div class="v">${esc(x[1])}</div></div>`).join('')}
    </section>

    <section class="card fmmove">
      <h4>${esc(T.fmMoved)}</h4>
      ${ART.miniTrack(mv.willingnessBefore, mv.willingnessAfter, T.fmWillingness)}
      <div class="fmrow"><span>${esc(T.fmPosture)}</span>
        <b>${esc(postureWord(mv.postureBefore))} → ${esc(postureWord(mv.postureAfter))}</b></div>
      ${deltas ? `<ul class="fmdeltas">${deltas}</ul>` : ''}
      ${(mv.revealed || []).length ? `<div class="fmrow"><span>${esc(T.fmRevealed)}</span>
        <b>${esc(mv.revealed.map(ledgerWord).join(', '))}</b></div>` : ''}
      ${(mv.stillWithheld || []).length ? `<div class="fmrow"><span>${esc(T.fmStill)}</span>
        <b>${esc(mv.stillWithheld.map(ledgerWord).join(', '))}</b></div>` : ''}
    </section>

    <section class="card fmclose">
      <h3>${esc(m.close.title)}</h3>
      <ul class="fmpoints">${m.close.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
      <div class="fmacts">
        <button class="primary lg" id="fm-team">${esc(T.fmSeenEnough)}</button>
        <button class="wi-alt" id="fm-again">${esc(T.fmAgain)}</button>
      </div>
    </section>`;

  $('#fm-again').onclick = () => { S.moment = { pick: null }; renderFirstMoment(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  $('#fm-team').onclick = () => { S.moment = null; S.tab = 'clinic'; renderTabs(); render(); };
}

/** The seven trust dimensions, in words rather than as engine keys. */
const TRUST_WORD = {
  safety:       { en: 'Safety',       es: 'Seguridad' },
  attention:    { en: 'Attention',    es: 'Atención' },
  understanding:{ en: 'Understanding',es: 'Comprensión' },
  credibility:  { en: 'Credibility',  es: 'Credibilidad' },
  alignment:    { en: 'Alignment',    es: 'Alineación' },
  reliability:  { en: 'Reliability',  es: 'Fiabilidad' },
  confirmation: { en: 'Confirmation', es: 'Confirmación' }
};
const trustWord = k => (TRUST_WORD[k] && TRUST_WORD[k][S.lang]) || String(k || '');

// ==========================================================================
// START HERE — the clinic manager's first ten minutes.
//
// She has just been given an account and nobody on her team has practised yet.
// An empty coaching view would be honest and useless. This is three things she
// can do today, in order, the first of which is worth her time on its own.
// ==========================================================================
/* ==========================================================================
   MONDAY MORNING
   --------------------------------------------------------------------------
   The first thing a clinic owner sees, above her own arc.

   WHAT HAPPENED → WHAT IT MAY MEAN → WHAT TO DO WITH THE TEAM.

   Not an analytics panel. The counts are there because she asked what
   happened, and they stop as soon as the question is answered; the page then
   spends its space on the one thing worth ten minutes and the exercise that
   fills them. When there is not enough practice to say anything, it says that
   and names the one action that would change it — which is a more useful
   screen than a confident chart built on four data points.
   ========================================================================== */
async function mondayPanel() {
  const T = t();
  let b = null;
  try {
    const r = await api('GET', '/api/manager/monday');
    if (r.ok) b = r.body;
  } catch (e) { return ''; }
  if (!b) return '';

  const h = b.happened || {};
  const w = b.thisWeek || {};

  // Counts. Four at most, and each one a plain noun — no percentages, because
  // a percentage of three people misleads a manager who is in a hurry.
  const counts = [
    [h.practitionersPractised, `${T.mdPractised}${h.practitionersOnTeam ? ' / ' + h.practitionersOnTeam : ''}`],
    [h.consultations, T.mdConsults],
    [h.consultationsCompleted, T.mdCompleted],
    [h.lessonsCompleted, T.mdLessons]
  ].map(([n, label]) => `<div class="mdc"><b>${esc(n == null ? '—' : n)}</b><span>${esc(label)}</span></div>`).join('');

  const notYet = (h.notYetThisWeek || []).length
    ? `<p class="mdnot"><span>${esc(T.mdNotYet)}</span> ${(h.notYetThisWeek || []).map(p => esc(p.name)).join(' · ')}</p>`
    : '';

  const attention = b.mayMean
    ? `<div class="mdblock">
         <div class="mdk">${esc(T.mdAttention)}</div>
         <p class="mdobs">${esc(b.mayMean.observation)}</p>
         ${b.mayMean.evidence ? `<p class="mdev">${esc(b.mayMean.evidence)}</p>` : ''}
       </div>`
    : `<div class="mdblock"><p class="mdobs quiet">${esc(w.headline || '')}</p></div>`;

  const ex = w.exercise
    ? `<div class="mdblock">
         <div class="mdk">${esc(T.mdExercise)}</div>
         <p class="mdex"><b>${esc(w.exercise.title)}</b> · ${esc(w.exercise.minutes)} min</p>
         <ol class="mdsteps">${(w.exercise.steps || []).map(st => `<li>${esc(st)}</li>`).join('')}</ol>
         ${w.thenRead ? `<p class="mdthen"><span>${esc(T.mdThenRead)}</span> ${esc(w.thenRead)}</p>` : ''}
       </div>`
    : '';

  const practice = (w.practice || []).length
    ? `<div class="mdblock">
         <div class="mdk">${esc(T.mdPractice)}</div>
         <div class="mdcases">${w.practice.map(c =>
           `<button class="mdcase" type="button" data-md-case="${esc(c.scenario)}">${esc(c.title)}</button>`).join('')}</div>
       </div>`
    : '';

  const action = w.action ? `<p class="mdaction">${esc(w.action)}</p>` : '';

  return `
    <section class="md">
      <div class="mdhead">
        <div class="mdgreet">${esc(b.greeting)}</div>
        <h2>${esc(T.mdTitle)}</h2>
      </div>
      <div class="mdcounts">${counts}</div>
      ${notYet}
      ${attention}
      ${action}
      ${ex}
      ${practice}
      <div class="mdfoot">
        <button class="btn" type="button" id="md-detail">${esc(T.mdDetail)}</button>
        <p class="mdbasis">${esc(b.basis)}</p>
      </div>
    </section>`;
}

/** Wire the buttons inside the panel, once it is on the page. */
function wireMondayPanel() {
  const d = document.getElementById('md-detail');
  if (d) d.onclick = () => { S.tab = 'manager'; renderTabs(); render(); };
  document.querySelectorAll('[data-md-case]').forEach(b => b.onclick = () => {
    // A manager cannot record a consultation — the case picker is a
    // practitioner surface — so this takes her to the case list she would
    // send her team to, rather than opening an attempt she cannot own.
    S.tab = 'practice'; renderTabs(); render();
  });
}

async function renderStart() {
  const T = t();
  const jr = await api('GET', '/api/journey');
  const j = jr.body || {};
  S.journey = j;
  // The ninth station of the arc is her own coaching. It is the one number on
  // the clinic's arc that only she can produce, so it is read from her log.
  let coachingLogged = null;
  try {
    const cn = await api('GET', '/api/manager/coaching-notes');
    coachingLogged = ((cn.body && cn.body.notes) || []).length;
  } catch (e) { coachingLogged = null; }
  const reached = j.reached || {};
  const team = j.team || {};
  const totals = j.totals || {};

  const steps = [
    { key: 'moment', mins: 3, title: T.st1Title, body: T.st1Body, cta: T.st1Cta, done: !!reached.first_moment },
    { key: 'invite', mins: 4, title: T.st2Title, body: T.st2Body, cta: T.st2Cta, done: (team.practitioners || 0) > 0 || (team.invitesOpen || 0) > 0 },
    { key: 'coach',  mins: 3, title: T.st3Title, body: T.st3Body, cta: T.st3Cta, done: (totals.consultations || 0) > 0 }
  ];
  const nowIndex = steps.findIndex(s => !s.done);

  // Monday morning comes first: what to do with the team this week is the
  // reason she opened the product, and her own arc is the context for it.
  const monday = await mondayPanel();

  $('#view').innerHTML = `
    ${monday}
    <section class="hero"><div class="kicker">${esc(j.clinic || S.user.clinicName)}</div>
      <h1>${esc(T.stTitle)}</h1><p>${esc(T.stLead)}</p></section>

    <div class="ststeps">${steps.map((s, i) => {
      const state = s.done ? 'done' : (i === nowIndex ? 'now' : 'next');
      const word = s.done ? T.stStateDone : (i === nowIndex ? T.stStateNow : T.stStateNext);
      return `<article class="stcard ${state}">
        <div class="sthead">
          <span class="stn">${esc(T.stStepWord)} ${i + 1}</span>
          <span class="stbadge">${esc(word)}</span>
          <span class="sp"></span>
          <span class="stmin">${s.mins} ${esc(T.stMinutes)}</span>
        </div>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.body)}</p>
        <button class="${i === nowIndex ? 'primary lg' : 'wi-alt'}" data-st="${esc(s.key)}">${esc(s.cta)}</button>
      </article>`;
    }).join('')}</div>

    <section class="card stsample">
      <h4>${esc(T.stSampleTitle)}</h4>
      <blockquote class="stq">${esc(T.stSample)}</blockquote>
      <p class="muted">${esc(T.stSampleNote)}</p>
    </section>

    <div class="secthead"><h2>${esc(T.stArcTitle)}</h2></div>
    <p class="muted lead-note">${esc(T.arcMgrLead)}</p>
    ${arcHTML(j, { noNext: true, extra: { coaching: coachingLogged } })}

    <p class="muted stfoot">${esc(T.stWhyHere)}</p>`;

  wireMondayPanel();
  wireArcNext(j);
  document.querySelectorAll('[data-st]').forEach(b => b.onclick = () => {
    const k = b.dataset.st;
    if (k === 'moment') { S.moment = { pick: null }; return renderFirstMoment(); }
    S.tab = k === 'invite' ? 'clinic' : 'manager';
    renderTabs(); render();
  });
}

// ==========================================================================
// THE HANDOVER
//
// The product cannot send email, and pretending otherwise would be a lie the
// manager discovers on the day nobody turns up. So the thing she is handed has
// to be good enough to send in one paste: the message already written, in her
// practitioner's language, with the link inside it — and the bare link beside
// it for the manager who would rather write her own words.
// ==========================================================================
function handoverHTML(h, opts) {
  const T = t();
  const o = opts || {};
  // Two handovers can be on the clinic screen in one session — an invitation
  // and a password link — so the ids carry a prefix rather than colliding.
  const p = o.prefix || 'ho';
  const until = h.expiresAt ? (() => { const d = new Date(h.expiresAt); return isNaN(d.getTime()) ? '' : d.toLocaleDateString(); })() : '';
  return `<div class="invitedone handover">
    <h4>${esc(o.title || T.hoTitle)}</h4>
    <p class="hoto"><b>${esc(h.name)}</b><span>${esc(h.email || '')}</span></p>
    <p class="muted holead">${esc(o.lead || T.hoLead)}</p>

    <div class="hok">${esc(T.hoMessage)}</div>
    <textarea class="homsg" id="${p}-msg" readonly rows="11">${esc(h.message || '')}</textarea>
    <div class="hoacts">
      <button class="gold" id="${p}-copymsg" type="button">${esc(T.hoCopyMessage)}</button>
      <span class="muted" id="${p}-said"></span>
    </div>

    <div class="hok">${esc(T.hoLink)}</div>
    <div class="invitelink">
      <input id="${p}-link" type="text" readonly value="${esc(h.link || '')}">
      <button id="${p}-copylink" type="button">${esc(T.hoCopyLink)}</button>
    </div>

    <p class="notice hownote">${esc(o.note || T.hoWhatHappens)}${until ? ' ' + esc(T.hoValid) + ' ' + esc(until) + '.' : ''}</p>
  </div>`;
}

/** Copying, with the two fallbacks browsers actually need. */
async function copyFrom(node) {
  if (!node) return false;
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(node.value); return true;
    }
  } catch (e) { /* fall through to the selection route */ }
  try { node.focus(); node.select(); return !!document.execCommand('copy'); }
  catch (e) { return false; }
}

function wireHandover(prefix) {
  const T = t();
  const p = prefix || 'ho';
  const said = $('#' + p + '-said');
  const on = (id, src) => {
    const b = $('#' + id);
    if (!b) return;
    b.onclick = async () => {
      const ok = await copyFrom($('#' + src));
      if (said) said.textContent = ok ? T.hoCopied : T.hoManual;
    };
  };
  on(p + '-copymsg', p + '-msg');
  on(p + '-copylink', p + '-link');
  // She should be able to read the whole message she is about to send without
  // scrolling inside a box, so the box is the size of its contents — and no
  // taller. `rows` drops to one first, because `height:auto` on a textarea
  // still resolves to the rows attribute, and the shorter password message was
  // being framed by seven lines of empty paper.
  const msg = $('#' + p + '-msg');
  if (msg) {
    msg.rows = 1;
    msg.style.height = 'auto';
    msg.style.height = (msg.scrollHeight + 4) + 'px';
  }
}

// ==========================================================================
// A PRACTITIONER WHO CANNOT SIGN IN
//
// Somebody forgets a password in the first fortnight of every pilot. There is
// no email from this product, and the manager is in the building, so she does
// what she already did for the invitation: she issues a link and hands it over.
//
// Three things have to be plain on the screen, because they are the three
// things a clinic owner worries about before she clicks: the link works once
// and dies in 48 hours, she never sees the password herself, and nothing the
// practitioner has recorded is touched.
// ==========================================================================
function pwPanelHTML(h) {
  const T = t();
  return `<div class="pwpanel">
    ${handoverHTML(h, { prefix: 'pw', title: T.pwFor, lead: T.pwLead, note: h.note })}
    <div class="pwknow">
      <h4>${esc(T.pwKnowTitle)}</h4>
      <ul class="pwfacts">
        <li>${esc(T.pwFactOnce)}</li>
        <li>${esc(T.pwFactExpires)}</li>
        <li><b>${esc(T.pwFactNever)}</b></li>
        <li><b>${esc(T.pwFactKeeps)}</b></li>
        <li>${esc(T.pwFactRetires)}</li>
        <li>${esc(T.pwSignedOut)}</li>
      </ul>
    </div>
  </div>`;
}

/**
 * A refusal from the server is guidance, never an error box. The three things
 * it can refuse are all reasonable states of a real clinic — the manager asked
 * for her own password, the person has left the plan, nobody was chosen — and
 * each one has a sentence that says what to do instead. The server's own
 * wording is English only, so it is matched rather than shown.
 */
function pwGuidanceFor(reason) {
  const T = t();
  const s = String(reason || '');
  if (/own password|different manager/i.test(s)) return T.pwGuideSelf;
  if (/not in this clinic/i.test(s)) return T.pwGuideNotHere;
  if (/choose whose/i.test(s)) return T.pwGuidePick;
  return T.pwGuideOther;
}

/** What the clinic still has after the programme ends. */
function keepsHTML(k) {
  const T = t();
  const any = k.consultations || k.documents || k.journal;
  const item = (n, label, what) => `<article class="keepcard">
    <b>${n}</b><span class="keeplab">${esc(label)}</span>
    <p>${esc(what)}</p></article>`;
  return `<section class="card mgrpanel keeps"><h4>${esc(T.keepTitle)}</h4>
    <p class="muted" style="margin-bottom:14px">${esc(T.keepLead)}</p>
    <div class="keepgrid">
      ${item(k.consultations, T.keepConsults, T.keepConsultsWhat)}
      ${item(k.documents, T.keepDocs, T.keepDocsWhat)}
      ${item(k.journal, T.keepJournal, T.keepJournalWhat)}
    </div>
    ${any ? `<div class="keepacts">
        <button class="wi-alt" id="keep-ev">${esc(T.keepOpenEvidence)}</button>
      </div>`
      : `<p class="muted keepempty">${esc(T.keepEmpty)}</p>`}
  </section>`;
}

// ==========================================================================
// CLINIC — the manager's own tenancy: plan, seats, practitioners, invitations.
// Nothing here asserts a payment or sends an email; it reports what the
// server actually holds and hands the manager the link to send herself.
// ==========================================================================
async function renderClinic() {
  const T = t();
  const [cr, ir, mr, ar, as] = await Promise.all([
    api('GET', '/api/clinic'),
    api('GET', '/api/invites'),
    api('GET', '/api/manager/coaching'),
    api('GET', '/api/manager/attempts').catch(() => null),
    api('GET', '/api/manager/assignments').catch(() => null)
  ]);
  // What the clinic keeps: the consultations its people recorded, the Toolkit
  // documents written inside them, and the field journal. Counted from what is
  // actually stored, never estimated.
  const clinicAttempts = ((ar && ar.body && ar.body.attempts) || []).filter(a => !a.abandoned);
  const journalRows = ((as && as.body && as.body.entries) || []).filter(e => e.status === 'answered');
  const keeps = {
    consultations: clinicAttempts.filter(a => a.status === 'completed').length,
    documents: clinicAttempts.reduce((s, a) => s + ((a.toolkitsValid || []).length), 0),
    journal: journalRows.length
  };
  const clinic = (cr.body && cr.body.clinic) || {};
  const seats = (ir.body && ir.body.seats) || (cr.body && cr.body.seats) ||
                { total: 0, used: 0, members: 0, pending: 0 };
  const invites = (ir.body && ir.body.invites) || [];
  const people = (mr.body && mr.body.practising && mr.body.practising.rows) || [];

  const day = s => { if (!s) return '—'; const d = new Date(s); return isNaN(d.getTime()) ? '—' : d.toLocaleDateString(); };

  // Payment is reported, never asserted. Pending stays pending on screen.
  const ps = String(clinic.paymentState || 'pending');
  const pay = ps === 'paid' ? { tone: 'done', label: T.payActive, note: T.payPaidNote }
    : ps === 'waived' ? { tone: 'done', label: T.payActive, note: T.payWaivedNote }
    : ps === 'lapsed' ? { tone: 'late', label: T.payLapsed, note: T.payLapsedNote }
    : { tone: 'warn', label: T.payPending, note: T.payPendingNote };

  // Accepted invitations are the only place an email address is known here.
  // Two accepted invitations can carry the same name, and the coaching rows
  // hold no email of their own, so an address is attributed only when the name
  // belongs to exactly one accepted invitation.
  const emailOf = {};
  invites.forEach(i => {
    if (i.state !== 'accepted') return;
    const k = String(i.name || '').trim().toLowerCase();
    emailOf[k] = Object.prototype.hasOwnProperty.call(emailOf, k) ? null : i.email;
  });

  const free = Math.max(0, (seats.total || 0) - (seats.used || 0));
  const stateLabel = { open: T.stOpen, accepted: T.stAccepted, expired: T.stExpired };
  const stateTone = { open: 'ready', accepted: 'done', expired: 'prod' };
  const pendingList = invites.filter(i => i.state !== 'accepted');

  // Guidance belongs beside the name it is about. If the refusal was about
  // somebody this list no longer holds — she left the plan between the page
  // loading and the button being pressed — it is shown above the list rather
  // than thrown away, because an unanswered click is worse than a misplaced
  // sentence.
  const orphanGuide = !!(S.pwGuide &&
    !people.some(p => (p.practitionerId || '') === S.pwGuide.practitionerId));

  $('#view').innerHTML = `
    <section class="hero"><div class="kicker">${esc(clinic.name || S.user.clinicName)}</div>
      <h1>${esc(T.clinicTitle)}</h1><p>${esc(T.clinicSub)}</p>
      <div class="herostats">
        <div><b>${esc(T.planName)}</b>${esc(T.planTitle)}</div>
        <div><b>${esc(T.planPrice)}</b>${esc(T.priceNote)}</div>
        <div><b>${seats.used || 0}/${seats.total || 0}</b>${esc(T.seatsInUse)}</div>
      </div></section>

    <div class="cols two">
      <section class="card mgrpanel"><h4>${esc(T.planTitle)}</h4>
        <h3 style="font-family:var(--serif);font-weight:400;font-size:19px">${esc(T.planName)} · ${esc(T.planPrice)}</h3>
        <p class="muted" style="margin-bottom:12px">${esc(T.planIncludes)}</p>
        <div class="trustrow"><span>${esc(T.seatsRow)}</span>
          <b>${seats.used || 0} ${esc(T.seatsOf)} ${seats.total || 0}${free ? ' · ' + free + ' ' + esc(T.seatsFree) : ''}</b></div>
        <div class="trustrow"><span>${esc(T.accountsRow)}</span><b>${seats.members || 0}</b></div>
        <div class="trustrow"><span>${esc(T.openInvitesRow)}</span><b>${seats.pending || 0}</b></div>
        <div class="trustrow"><span>${esc(T.clinicOpened)}</span><b>${esc(day(clinic.createdAt))}</b></div>
        ${free ? '' : `<p class="notice" style="margin-top:12px">${esc(T.seatsNone)}</p>`}
      </section>

      <section class="card mgrpanel"><h4>${esc(T.paymentTitle)}</h4>
        <span class="badge ${pay.tone}">${esc(pay.label)}</span>
        <p style="margin:10px 0 0;color:var(--ink-2);font-size:13.5px">${esc(pay.note)}</p>
        <div class="trustrow" style="margin-top:12px"><span>${esc(T.invoiceRef)}</span>
          <b class="clinicref">${esc(clinic.paymentReference || T.noRef)}</b></div>
        ${clinic.activatedAt ? `<div class="trustrow"><span>${esc(T.activeSince)}</span>
          <b>${esc(day(clinic.activatedAt))}</b></div>` : ''}
      </section>
    </div>

    <section class="card mgrpanel"><h4>${esc(T.peopleTitle)}</h4>
      <p class="muted" style="margin-bottom:12px">${esc(T.peopleSub)}</p>
      <div id="ppl-err" class="err hidden"></div>
      ${orphanGuide ? blank({ mark: 'invite', title: T.pwGuideTitle, body: S.pwGuide.guidance }) : ''}
      ${people.length ? `<div class="ppl">${people.map(p => {
          const em = emailOf[String(p.name || '').trim().toLowerCase()];
          const id = p.practitionerId || '';
          const started = p.lessons || p.consultations;
          const mine = S.pwHandover && S.pwHandover.practitionerId === id;
          const guided = S.pwGuide && S.pwGuide.practitionerId === id;
          return `<div class="pplrow ${mine || guided ? 'on' : ''}">
            <span class="pplwho"><b>${esc(p.name)}</b>${em ? `<span class="em">${esc(em)}</span>` : ''}</span>
            ${started ? `<span class="pplstat">
                <span><b>${p.lessons}</b>${esc(T.lessonsDone)}</span>
                <span><b>${p.consultations}${p.completed ? '/' + p.completed : ''}</b>${esc(T.consultations)}</span>
                ${p.lastActive ? `<span class="pplwhen"><b>${esc(day(p.lastActive))}</b>${esc(T.pplLast)}</span>` : ''}
              </span>`
              : `<span class="pplquiet">${esc(T.pplNotStarted)}</span>`}
            ${id ? `<span class="pplact"><button class="wi-alt" data-pw="${esc(id)}"
              data-name="${esc(p.name)}">${esc(mine ? T.pwAgain : T.pwAsk)}</button></span>` : ''}
          </div>
          ${guided ? `<div class="pplrow on"><div class="pwguide" style="flex:1 1 100%">
            ${blank({ mark: 'invite', title: T.pwGuideTitle, body: S.pwGuide.guidance })}
          </div></div>` : ''}
          ${mine ? `<div class="pplrow on"><div style="flex:1 1 100%">
            ${pwPanelHTML(S.pwHandover)}
          </div></div>` : ''}`;
        }).join('')}</div>`
        : blank({ mark: 'invite', title: T.noPeopleT, body: T.noPeople })}
    </section>

    <section class="card mgrpanel"><h4>${esc(T.inviteTitle)}</h4>
      <p class="muted" style="margin-bottom:14px">${esc(T.inviteSub)}</p>
      <div id="inv-err" class="err hidden"></div>
      <form id="inv-form">
        <div class="cols two">
          <div class="field"><label for="inv-name">${esc(T.inviteName)}</label>
            <input id="inv-name" type="text" autocomplete="off"></div>
          <div class="field"><label for="inv-email">${esc(T.inviteEmail)}</label>
            <input id="inv-email" type="email" autocomplete="off"></div>
        </div>
        <button class="gold lg" id="inv-send" type="submit"${free ? '' : ' disabled'}>${esc(T.inviteSend)}</button>
      </form>
      ${S.handover ? handoverHTML(S.handover) : ''}
    </section>

    <section class="card mgrpanel"><h4>${esc(T.invitesTitle)}</h4>
      <p class="muted" style="margin-bottom:10px">${esc(T.invitesSub)}</p>
      ${pendingList.length ? pendingList.map(i => `<div class="trustrow inviterow">
          <span><b>${esc(i.name)}</b><span class="em">${esc(i.email)}</span></span>
          <span class="invitemeta">
            <span class="muted">${esc(i.state === 'expired' ? T.expiresOn : T.sentOn)} ${esc(day(i.state === 'expired' ? i.expiresAt : i.createdAt))}</span>
            <span class="badge ${stateTone[i.state] || 'prod'}">${esc(stateLabel[i.state] || i.state)}</span>
            ${i.state === 'open' ? `<button class="wi-alt hore" data-resend="${esc(i.token)}">${esc(T.hoResend)}</button>` : ''}
          </span></div>`).join('')
        : blank({ mark: 'invite', title: T.noInvites, body: T.noInvitesBody })}
    </section>

    ${keepsHTML(keeps)}`;

  $('#inv-form').onsubmit = async (e) => {
    e.preventDefault();
    const box = $('#inv-err');
    const fail = msg => { box.textContent = msg; box.classList.remove('hidden'); };
    box.classList.add('hidden');
    const name = $('#inv-name').value.trim();
    const email = $('#inv-email').value.trim();
    if (!name || !email) return fail(T.inviteFields);
    const btn = $('#inv-send'); const label = btn.textContent;
    btn.disabled = true; btn.textContent = T.inviteWorking;
    let r = null;
    try { r = await api('POST', '/api/invites', { name, email }); }
    catch (err) { btn.disabled = false; btn.textContent = label; return fail(T.inviteFailed); }
    btn.disabled = false; btn.textContent = label;
    if (r.status !== 201 || !r.body || !r.body.link) return fail(plainError(r, T.inviteFailed));
    S.handover = {
      name, email, link: r.body.link, message: r.body.message,
      expiresAt: r.body.invite && r.body.invite.expiresAt
    };
    render();
  };

  wireHandover();
  wireHandover('pw');

  // "She cannot sign in." One request, and either a link she can hand over or
  // a sentence saying why there is no link for this one. A refusal is guidance
  // in the panel beside the name, never a red box at the top of the screen.
  document.querySelectorAll('[data-pw]').forEach(b => b.onclick = async () => {
    const practitionerId = b.dataset.pw;
    const name = b.dataset.name || '';
    const label = b.textContent;
    const errBox = $('#ppl-err');
    if (errBox) errBox.classList.add('hidden');
    b.disabled = true; b.textContent = T.pwWorking;
    let r = null;
    try { r = await api('POST', '/api/password-resets', { practitionerId }); }
    catch (err) { r = null; }
    b.disabled = false; b.textContent = label;

    // Only one handover is ever on this screen, so issuing a password link
    // puts away an invitation message the manager has already copied.
    S.pwGuide = null;
    if (!r) {
      S.pwHandover = null;
      if (errBox) { errBox.textContent = T.pwFailed; errBox.classList.remove('hidden'); }
      return;
    }
    if (r.status === 201 && r.body && r.body.link) {
      S.handover = null;
      S.pwHandover = {
        practitionerId, name: r.body.name || name,
        email: emailOf[String(r.body.name || name).trim().toLowerCase()] || '',
        link: r.body.link, message: r.body.message, note: r.body.note,
        expiresAt: r.body.expiresAt
      };
    } else if (r.status === 422) {
      S.pwHandover = null;
      S.pwGuide = { practitionerId, guidance: pwGuidanceFor(r.body && r.body.error) };
    } else {
      S.pwHandover = null;
      if (errBox) { errBox.textContent = plainError(r, T.pwFailed); errBox.classList.remove('hidden'); }
      return;
    }
    render();
  });

  // An invitation sent last week and not yet used: the same message again,
  // rather than a manager hunting for a link she cannot find.
  document.querySelectorAll('[data-resend]').forEach(b => b.onclick = async () => {
    const label = b.textContent;
    b.disabled = true; b.textContent = T.inviteWorking;
    let r = null;
    try { r = await api('GET', '/api/invites/' + encodeURIComponent(b.dataset.resend) + '/handover'); }
    catch (err) { r = null; }
    b.disabled = false; b.textContent = label;
    if (!r || !r.ok || !r.body || !r.body.link) return;
    S.handover = {
      name: r.body.name, email: r.body.email, link: r.body.link,
      message: r.body.message, expiresAt: r.body.expiresAt
    };
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const ke = $('#keep-ev');
  if (ke) ke.onclick = () => { S.tab = 'practice'; renderTabs(); render(); };
}

// --------------------------------------------------------------------------
document.documentElement.lang = S.lang;

// The classes the commercial screens use. They belong to this file rather than
// to the Academy's own sheet, and the page they are added to is fixed, so the
// link is placed from here rather than asking the shell to carry it.
(function stylesheet() {
  try {
    if (document.querySelector('link[href="/commercial.css"]')) return;
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = '/commercial.css';
    document.head.appendChild(l);
  } catch (e) { /* the screens degrade to the Academy's own styling */ }
})();

// A practitioner who has just chosen her password arrives here from the
// invitation page. She is expected in a lesson, not on a dashboard.
if (window.location.hash === '#begin') {
  S.arriving = true;
  try { history.replaceState(null, '', window.location.pathname); } catch (e) { window.location.hash = ''; }
}

if (S.token) boot(); else renderSignIn();

})();
