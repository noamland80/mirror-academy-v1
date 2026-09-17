/**
 * CURRICULUM CONTENT VERIFICATION
 *
 * Structural and bilingual integrity of every module, lesson and block:
 * no {en,es} leaf missing a language, no untranslated Spanish, no block kind
 * the player cannot render, and every interactive block's answer key resolving
 * to something that actually exists.
 *
 * Run: node test/verify-content.js
 */
const path = require('path');
const fs = require('fs');
const academy = require('../server/academy/content');
const canonical = require('../server/framework/canonical');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) { pass++; } else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const section = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log(`  ${fail ? ' ' : ''}${t}`);

// The block kinds public/app.js can render, and the art keys public/art.js has.
const APP = fs.readFileSync(path.join(__dirname, '..', 'public', 'app.js'), 'utf8');
const ART = fs.readFileSync(path.join(__dirname, '..', 'public', 'art.js'), 'utf8');
const RENDERABLE = new Set(
  (APP.match(/\n\s{4}([a-zA-Z]+)\(\)\s*\{/g) || []).map(s => s.trim().replace(/\(\)\s*\{$/, ''))
);
const STAGE_KEYS = new Set(
  (APP.slice(APP.indexOf('const STAGE_FOR'), APP.indexOf('function renderLesson'))
    .match(/(\w+):\s*'(learn|see|choose|experience|reflect|apply)'/g) || [])
    .map(s => s.split(':')[0].trim())
);
const DIAGRAMS = new Set(
  (ART.slice(ART.indexOf('const DIAGRAMS'), ART.indexOf('function diagram'))
    .match(/'([a-z-]+)':\s*\(t\)/g) || []).map(s => s.split("'")[1])
);
const GLYPHS = new Set(['hand', 'mirror', 'phone', 'short', 'laugh', 'correct', 'pause']);
const ACCENTS = new Set(['sage', 'champagne', 'mercury', 'gold', 'rose']);
const PHASES = new Set(canonical.PHASE_ORDER);

// ---------------------------------------------------------------------------
// bilingual integrity
// ---------------------------------------------------------------------------
// Spanish is detected by function words rather than accents: plenty of correct
// Spanish sentences contain no accented character at all.
// English left in place is detected directly, by English function words that
// have no Spanish homograph. Absent accents prove nothing — plenty of correct
// Spanish sentences carry none.
const EN_WORDS = /\b(the|and|you|your|she|her|that|this|with|what|which|would|because|about|there|they|have|was|were|been|will|not|from|when|where|their|them)\b/gi;
const looksEnglish = s => (s.match(EN_WORDS) || []).length >= 3;
function walkBilingual(v, p, out) {
  if (v === null || v === undefined) return;
  if (Array.isArray(v)) return v.forEach((x, i) => walkBilingual(x, `${p}[${i}]`, out));
  if (typeof v === 'object') {
    const k = Object.keys(v);
    if (k.length && k.every(x => x === 'en' || x === 'es')) {
      if (typeof v.en !== 'string' || !v.en.trim()) out.missing.push(p + '.en');
      else if (typeof v.es !== 'string' || !v.es.trim()) out.missing.push(p + '.es');
      else {
        out.leaves++;
        if (v.en === v.es && v.en.length > 24) out.identical.push(p);
        // Citation lines legitimately carry the English book title.
        if (!/\.source$/.test(p) && looksEnglish(v.es)) out.unaccented.push(p);
      }
      return;
    }
    k.forEach(x => walkBilingual(v[x], `${p}.${x}`, out));
  }
}

// ---------------------------------------------------------------------------
(function run() {
  section('CURRICULUM SHAPE');
  const mods = academy.MODULES;
  ok('Ten modules are published', mods.length === 10, String(mods.length));
  ok('Module numbers are 1..10 in order', mods.every((m, i) => m.n === i + 1));
  ok('Every module id matches its number', mods.every(m => m.id === 'm' + m.n));
  ok('Every module accent is a real palette key', mods.every(m => ACCENTS.has(m.accent)),
     mods.filter(m => !ACCENTS.has(m.accent)).map(m => m.id + ':' + m.accent).join(','));
  ok('Every module maps to a canonical phase', mods.every(m => PHASES.has(m.phase)),
     mods.filter(m => !PHASES.has(m.phase)).map(m => m.id + ':' + m.phase).join(','));
  ok('Every module cites a source', mods.every(m => m.source && m.source.en && m.source.es));
  ok('Every module carries a field assignment and a follow-up question',
     mods.every(m => m.apply && m.apply.assignment && m.apply.prompt && m.apply.assignment.es && m.apply.prompt.es));
  const stats = academy.stats();
  ok('All ten modules are built', stats.modulesBuilt === 10, String(stats.modulesBuilt));
  ok('At least 45 lessons exist', stats.lessons >= 45, String(stats.lessons));
  ok('Every lesson has a built interior', stats.lessonsBuilt === stats.lessons,
     `${stats.lessonsBuilt}/${stats.lessons}`);
  ok('Declared module minutes equal the sum of their lessons',
     mods.every(m => Math.abs(m.minutes - m.lessons.reduce((s, l) => s + l.minutes, 0)) <= 2),
     mods.filter(m => Math.abs(m.minutes - m.lessons.reduce((s, l) => s + l.minutes, 0)) > 2)
       .map(m => m.id + ':' + m.minutes + 'vs' + m.lessons.reduce((s, l) => s + l.minutes, 0)).join(','));
  ok('The curriculum is at least five hours of teaching', stats.learningMinutes >= 300,
     stats.learningMinutes + ' min');
  done(`${mods.length} modules · ${stats.lessons} lessons · ${stats.learningMinutes} minutes`);

  section('LESSON SHAPE');
  const allBlocks = [];
  const kindsUsed = new Set();
  let thinLessons = [];
  mods.forEach(m => {
    m.lessons.forEach((l, i) => {
      ok(`${l.id} has a sequential number`, l.n === i + 1, `${l.id} n=${l.n}`);
      ok(`${l.id} id follows the module`, l.id === m.id + 'l' + l.n, l.id);
      ok(`${l.id} declares minutes`, typeof l.minutes === 'number' && l.minutes > 0, String(l.minutes));
      ok(`${l.id} has a title and objective in both languages`,
         !!(l.title && l.title.es && l.objective && l.objective.es));
      ok(`${l.id} has at least four blocks`, (l.blocks || []).length >= 4,
         `${l.id}=${(l.blocks || []).length}`);
      if ((l.blocks || []).length < 4) thinLessons.push(l.id);
      (l.blocks || []).forEach((b, bi) => { allBlocks.push({ m, l, b, ref: `${l.id}#${bi}` }); kindsUsed.add(b.kind); });
    });
  });
  ok('No lesson is thinner than four blocks', thinLessons.length === 0, thinLessons.join(','));
  const interactive = allBlocks.filter(x => !['passage', 'insight'].includes(x.b.kind));
  ok('Most blocks are interactive rather than reading',
     interactive.length / allBlocks.length > 0.55,
     `${interactive.length}/${allBlocks.length}`);
  mods.forEach(m => {
    const inter = m.lessons.reduce((s, l) => s + (l.blocks || []).filter(b => !['passage', 'insight'].includes(b.kind)).length, 0);
    ok(`Module ${m.n} contains multiple decisions`, inter >= m.lessons.length * 2,
       `m${m.n}=${inter} interactive blocks across ${m.lessons.length} lessons`);
  });
  done(`${allBlocks.length} blocks · ${interactive.length} interactive · ${kindsUsed.size} distinct kinds`);

  section('THE PLAYER CAN RENDER EVERY BLOCK');
  const unrenderable = [...kindsUsed].filter(k => !RENDERABLE.has(k));
  ok('Every block kind has a renderer in app.js', unrenderable.length === 0, unrenderable.join(','));
  const unstaged = [...kindsUsed].filter(k => !STAGE_KEYS.has(k));
  ok('Every block kind has a learning stage', unstaged.length === 0, unstaged.join(','));
  ok('At least twelve distinct exercise types are in use', kindsUsed.size >= 12,
     [...kindsUsed].sort().join(','));
  done([...kindsUsed].sort().join(', '));

  section('EVERY ANSWER KEY RESOLVES');
  allBlocks.forEach(({ b, ref }) => {
    switch (b.kind) {
      case 'choose': {
        // The RETRY stage: a second live moment for a learner who missed the
        // first one. Same contract as the host block, so the player needs one
        // renderer and the content cannot drift into a different shape.
        if (b.retry) {
          const rb = (b.retry.options || []).filter(o => o.verdict === 'best');
          ok(`${ref} retry has exactly one best option`, rb.length === 1, `${ref}=${rb.length}`);
          ok(`${ref} retry explains every option`, (b.retry.options || []).every(o => o.why && o.why.es));
          ok(`${ref} retry states what the second attempt proves`, !!(b.retry.principle && b.retry.principle.es));
          // A retry that changes nothing is a second quiz question. It must
          // name which part of the consultation moves because of it.
          const AXES = ['clientResponse', 'disclosure', 'trust', 'objection', 'recommendation', 'continuation'];
          ok(`${ref} retry names what it changes in the consultation`,
             !!(b.retry.changes && AXES.includes(b.retry.changes.axis)),
             b.retry.changes ? b.retry.changes.axis : 'no changes block');
          ok(`${ref} retry says what that change is, in both languages`,
             !!(b.retry.changes && b.retry.changes.detail && b.retry.changes.detail.en && b.retry.changes.detail.es));
          ok(`${ref} retry asks a different question from the first attempt`,
             b.retry.prompt && b.retry.prompt.en !== b.prompt.en);
          ok(`${ref} retry verdicts are from the vocabulary`,
             (b.retry.options || []).every(o => ['best', 'weak', 'harmful'].includes(o.verdict)));
        }
        const best = (b.options || []).filter(o => o.verdict === 'best');
        ok(`${ref} choose has exactly one best option`, best.length === 1, `${ref}=${best.length}`);
        ok(`${ref} every option explains its consequence`, (b.options || []).every(o => o.why && o.why.es));
        ok(`${ref} choose ends on a principle`, !!(b.principle && b.principle.es));
        ok(`${ref} verdicts are from the vocabulary`,
           (b.options || []).every(o => ['best', 'weak', 'harmful'].includes(o.verdict)));
        break;
      }
      case 'check':
      case 'reveal': {
        const ids = (b.options || b.guesses || []).map(o => o.id);
        ok(`${ref} answer resolves`, ids.includes(b.answer), `${ref} answer=${b.answer} of ${ids}`);
        ok(`${ref} explains why`, !!(b.why && b.why.es));
        break;
      }
      case 'compare':
        ok(`${ref} compare answer is a or b`, ['a', 'b'].includes(b.answer), b.answer);
        ok(`${ref} compare has both sides`, !!(b.a && b.b && b.a.text && b.b.text));
        break;
      case 'spot':
        ok(`${ref} spot index is in range`, b.answerIndex >= 0 && b.answerIndex < (b.lines || []).length,
           `${ref} ${b.answerIndex}/${(b.lines || []).length}`);
        ok(`${ref} spot speakers are you/client`, (b.lines || []).every(l => ['you', 'client'].includes(l.who)));
        break;
      case 'order': {
        const ids = (b.items || []).map(i => i.id).sort().join(',');
        ok(`${ref} order key covers every item`, (b.correct || []).slice().sort().join(',') === ids,
           `${ref}`);
        break;
      }
      case 'sort': {
        const buckets = new Set((b.buckets || []).map(x => x.id));
        ok(`${ref} every item has a real bucket`, (b.items || []).every(i => buckets.has(i.bucket)),
           `${ref}`);
        ok(`${ref} every bucket is used`, [...buckets].every(x => (b.items || []).some(i => i.bucket === x)),
           `${ref}`);
        break;
      }
      case 'match': {
        const L = new Set((b.left || []).map(x => x.id));
        const R = new Set((b.right || []).map(x => x.id));
        const keys = Object.keys(b.pairs || {});
        ok(`${ref} every left item is paired`, keys.length === L.size && keys.every(k => L.has(k)), `${ref}`);
        ok(`${ref} every pair points at a real right item`,
           keys.every(k => R.has(b.pairs[k])), `${ref}`);
        break;
      }
      case 'translate':
        ok(`${ref} every translate item has a model and a note`,
           (b.items || []).every(i => i.client && i.model && i.note && i.model.es));
        break;
      case 'timedPause':
        ok(`${ref} pause has both answers and a duration`,
           !!(b.first && b.second && typeof b.seconds === 'number'), `${ref}`);
        break;
      case 'signalGallery':
        ok(`${ref} gallery glyphs exist`, (b.signals || []).every(s => GLYPHS.has(s.icon)),
           (b.signals || []).map(s => s.icon).filter(i => !GLYPHS.has(i)).join(','));
        ok(`${ref} every signal has a meaning and a sentence`,
           (b.signals || []).every(s => s.means && s.say && s.say.es));
        break;
      case 'drill': {
        const keys = (b.depthCheck || []).map(d => d.key);
        ok(`${ref} drill check keys are unique`, new Set(keys).size === keys.length, `${ref}`);
        ok(`${ref} drill has at least one unsupported claim to catch`,
           (b.depthCheck || []).some(d => d.supported === false), `${ref}`);
        ok(`${ref} unsupported items explain themselves`,
           (b.depthCheck || []).filter(d => d.supported === false).every(d => d.note && d.note.es), `${ref}`);
        ok(`${ref} drill states its rule`, !!(b.rule && b.rule.es));
        break;
      }
      case 'signal':
        ok(`${ref} signal has observations`, (b.notice || []).length >= 2, `${ref}`);
        break;
      case 'reflect':
        ok(`${ref} reflect has a prompt`, !!(b.prompt && b.prompt.es));
        break;
      case 'passage':
        ok(`${ref} passage has body text`, (b.body || []).length >= 1, `${ref}`);
        if (b.diagram) ok(`${ref} diagram "${b.diagram}" exists in art.js`, DIAGRAMS.has(b.diagram), b.diagram);
        break;
      case 'insight':
        ok(`${ref} insight cites a source and quotes the book`,
           !!(b.source && b.quote && b.note && b.note.es));
        break;
    }
  });
  done('answer keys, verdicts, buckets, pairs and glyph names all resolve');

  section('EVERY MODULE STATES THE SKILL IT PRODUCES');
  mods.forEach(m => {
    ok(`${m.id} names the skill a practitioner leaves with`,
       !!(m.outcome && m.outcome.en && m.outcome.es), m.id);
    ok(`${m.id} states it as something she can DO`,
       !!(m.outcome && /^(Run|Name|Read|Hold|Say|Ask|Build|Diagnose|Deliver|Separate|Recognise|Recognize|Turn|Close|Keep|Write|Place|Give|Decline|Stop|Open|Answer|Refuse|Choose|Present|Make|Take|Hear|Find|Put|Let|Carry|Own|Set|Draw|Leave|Reach|End|Show|Tell|Track)\b/.test(m.outcome.en)),
       m.outcome ? m.outcome.en.slice(0, 60) : 'absent');
  });
  done('ten skill outcomes, each stated as an action');

  section('EVERY LESSON TEACHES THE REASONING, NOT ONLY THE SENTENCE');
  // Three things a practitioner cannot get from the book alone, and the reason
  // a €490 product is not condensed book notes: why a competent person makes
  // this mistake, what the client is thinking and not saying, and the same
  // moment said three ways with what each one does.
  let deep = 0;
  mods.forEach(m => m.lessons.forEach(l => {
    const d = l.depth;
    ok(`${l.id} explains why a good practitioner gets this wrong`,
       !!(d && d.whyItGoesWrong && d.whyItGoesWrong.en && d.whyItGoesWrong.es), l.id);
    ok(`${l.id} says what the client is thinking and not saying`,
       !!(d && d.sheIsThinking && d.sheIsThinking.en && d.sheIsThinking.es), l.id);
    ok(`${l.id} shows the same moment weak, average and strong`,
       !!(d && d.ladder && ['weak', 'average', 'strong'].every(k =>
          d.ladder[k] && d.ladder[k].line && d.ladder[k].line.es &&
          d.ladder[k].effect && d.ladder[k].effect.es)), l.id);
    if (d && d.ladder) {
      ok(`${l.id} the three rungs are genuinely different lines`,
         new Set(['weak', 'average', 'strong'].map(k => (d.ladder[k].line || {}).en)).size === 3, l.id);
      deep++;
    }
  }));
  ok('Every lesson carries its reasoning layer', deep === stats.lessons, `${deep}/${stats.lessons}`);
  done(`${deep} lessons with why-it-goes-wrong, what she is thinking, and a weak/average/strong ladder`);

  section('EVERY LESSON SAYS WHERE IT COMES FROM');
  // Six things a practitioner (or an auditor) can ask of any lesson: which
  // chapter of the book, which principle, which canonical phase, which Trust
  // Stage it forms, which Standard governs it, which Duty binds it — and the
  // Toolkit, where one applies.
  const BOOK = (() => {
    try { return JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures', 'book-index.json'), 'utf8')).chapters; }
    catch (e) { return null; }
  })();
  const STAGES = new Set(canonical.TRUST_STAGE_KEYS);
  let traced = 0;
  mods.forEach(m => m.lessons.forEach(l => {
    const p = l.provenance;
    ok(`${l.id} carries a source trace`, !!p, l.id);
    if (!p) return;
    traced++;
    const chapters = Array.isArray(p.chapter) ? p.chapter : [p.chapter];
    ok(`${l.id} cites a chapter the book actually has`,
       chapters.every(c => c === null || (BOOK ? !!BOOK[String(c)] : (c >= 1 && c <= 17))),
       JSON.stringify(p.chapter));
    ok(`${l.id} states the principle in both languages`, !!(p.principle && p.principle.en && p.principle.es));
    ok(`${l.id} names a real canonical phase`, PHASES.has(p.phase), String(p.phase));
    ok(`${l.id} names a real Trust Stage`, STAGES.has(p.trustStage), String(p.trustStage));
    ok(`${l.id} names a Trust Standard between 1 and 6`, p.standard >= 1 && p.standard <= 6, String(p.standard));
    ok(`${l.id} names an Ethical Duty between 1 and 4`, p.duty >= 1 && p.duty <= 4, String(p.duty));
    ok(`${l.id} names a real Toolkit or none`,
       p.toolkit === null || p.toolkit === undefined ||
       ['IMPLEMENTED', 'GATED'].includes((canonical.TOOLKIT[p.toolkit] || {}).status),
       String(p.toolkit));
  }));
  ok('Every lesson in the curriculum is source-traced', traced === stats.lessons, `${traced}/${stats.lessons}`);
  done(`${traced} lessons traced to chapter, principle, phase, stage, standard, duty and toolkit`);

  section('BILINGUAL PARITY');
  const out = { leaves: 0, missing: [], identical: [], unaccented: [] };
  walkBilingual(academy.MODULES, 'curriculum', out);
  ok('No bilingual leaf is missing a language', out.missing.length === 0,
     out.missing.slice(0, 5).join(' | '));
  ok('No Spanish string is an untranslated copy of the English',
     out.identical.length === 0, out.identical.slice(0, 5).join(' | '));
  ok('No Spanish string is English left in place',
     out.unaccented.length === 0, out.unaccented.slice(0, 5).join(' | '));
  ok('Spanish is present throughout, not only in the module titles',
     out.leaves > 1200, String(out.leaves));
  done(`${out.leaves} bilingual strings checked`);

  section('BOOK AND CANONICAL PROVENANCE');
  const chapters = new Set();
  const cites = [];
  mods.forEach(m => {
    cites.push(m.source.en);
    m.lessons.forEach(l => (l.blocks || []).forEach(b => { if (b.kind === 'insight') cites.push(b.source.en); }));
  });
  cites.forEach(c => (c.match(/Chapters? ([\d, and–-]+)/g) || []).forEach(x =>
    x.replace(/Chapters? /, '').split(/[,\s–-]+/).filter(Boolean).forEach(n => { if (/^\d+$/.test(n)) chapters.add(Number(n)); })));
  ok('Every citation names a chapter that exists in the book (1–17)',
     [...chapters].every(n => n >= 1 && n <= 17), [...chapters].filter(n => n < 1 || n > 17).join(','));
  ok('The curriculum draws on at least ten different chapters', chapters.size >= 10,
     [...chapters].sort((a, b) => a - b).join(','));
  ok('Every module names either a book chapter or the canonical architecture',
     mods.every(m => /Chapter|Prologue|Epilogue/.test(m.source.en) && /MIRROR|Toolkit|Phase|Trust|Duty/.test(m.source.en)));
  const mapPath = path.join(__dirname, '..', 'BOOK_MIRROR_CONTENT_MAP.md');
  const map = fs.existsSync(mapPath) ? fs.readFileSync(mapPath, 'utf8') : '';
  ok('A provenance map exists', map.length > 1000);
  ok('The provenance map covers every module', mods.every(m => new RegExp(`Module ${m.n}\\b`).test(map)),
     mods.filter(m => !new RegExp(`Module ${m.n}\\b`).test(map)).map(m => m.id).join(','));
  ok('The provenance map lists every lesson id',
     mods.every(m => m.lessons.every(l => map.includes(l.id))),
     mods.flatMap(m => m.lessons.filter(l => !map.includes(l.id)).map(l => l.id)).slice(0, 6).join(','));
  done(`chapters cited: ${[...chapters].sort((a, b) => a - b).join(', ')}`);

  section('THE TWO MIRROR LAYERS ARE RECONCILED, NOT COLLAPSED');
  const method = require('../server/framework/method');
  const table = method.methodTable();
  ok('The book method has exactly six steps', table.length === 6, String(table.length));
  ok('The six letters spell MIRROR', table.map(r => r.letter).join('') === 'MIRROR',
     table.map(r => r.letter).join(''));
  ok('Every step cites a chapter between 8 and 13',
     table.every(r => r.chapter >= 8 && r.chapter <= 13),
     table.map(r => r.chapter).join(','));
  ok('Every step lands in at least one real canonical phase',
     table.every(r => r.phases.length >= 1 && r.phases.every(p => PHASES.has(p.key))));
  ok('Every step names trust stages, standards, duties and Toolkits',
     table.every(r => r.stages.length && r.standards.length && r.duties.length && r.toolkits.length));
  ok('Every Toolkit named by a step is implemented or explicitly gated',
     table.every(r => r.toolkits.every(t => ['IMPLEMENTED', 'GATED'].includes(t.status))),
     table.flatMap(r => r.toolkits.filter(t => !['IMPLEMENTED', 'GATED'].includes(t.status)).map(t => '#' + t.n)).join(','));
  const coverage = method.phaseCoverage();
  ok('All eight canonical phases are accounted for', coverage.length === 8, String(coverage.length));
  ok('No canonical phase is left without a step or an honest note',
     coverage.every(p => p.steps.length >= 1 || p.architectureOnly),
     coverage.filter(p => !p.steps.length && !p.architectureOnly).map(p => p.key).join(','));
  ok('The mismatch between six and eight is stated, not hidden',
     method.ARCHITECTURE_ONLY.length >= 3 &&
     method.ARCHITECTURE_ONLY.every(a => PHASES.has(a.phase) && a.note.en && a.note.es),
     method.ARCHITECTURE_ONLY.map(a => a.phase).join(','));
  ok('Six steps do not map one-to-one onto eight phases',
     new Set(table.flatMap(r => r.phases.map(p => p.key))).size === 8 && table.length !== 8);

  const m1 = mods[0];
  const twoMirrors = m1.lessons.find(l => l.id === 'm1l6');
  ok('Module 1 contains the reconciliation lesson', !!twoMirrors);
  const tmKinds = twoMirrors ? twoMirrors.blocks.map(b => b.kind) : [];
  ok('The reconciliation lesson shows both layers side by side', tmKinds.includes('layers'));
  ok('The reconciliation lesson carries the canonical mapping table', tmKinds.includes('matrix'));
  ok('The reconciliation lesson makes the learner decide, not only read',
     tmKinds.filter(k => !['passage', 'insight'].includes(k)).length >= 3, tmKinds.join(','));
  const layersBlock = twoMirrors && twoMirrors.blocks.find(b => b.kind === 'layers');
  ok('The learner-facing statement is shown verbatim',
     !!layersBlock && layersBlock.statement.en === method.RECONCILIATION_STATEMENT.en);
  ok('The statement is present in Spanish too',
     !!layersBlock && layersBlock.statement.es === method.RECONCILIATION_STATEMENT.es);
  ok('The two layers are labelled by their own sources',
     !!layersBlock && /Beauty Sales Secrets/.test(layersBlock.layers[0].source.en) &&
     /MBOK/.test(layersBlock.layers[1].source.en));
  ok('The architecture layer lists all eight phases',
     !!layersBlock && layersBlock.layers[1].items.length === 8);
  const matrixBlock = twoMirrors && twoMirrors.blocks.find(b => b.kind === 'matrix');
  ok('The mapping table has one row per letter', !!matrixBlock && matrixBlock.rows.length === 6);
  ok('Every mapping row fills every column',
     !!matrixBlock && matrixBlock.rows.every(r => r.cells.length === matrixBlock.columns.length));
  ok('Every mapping row cites both the book and the architecture',
     !!matrixBlock && matrixBlock.rows.every(r => /Ch\./.test(r.provenance.en) && /MBOK/.test(r.provenance.en)));
  ok('The table publishes where the layers do not line up',
     !!matrixBlock && (matrixBlock.gaps || []).length >= 3);
  ok('The reconciliation is curriculum, not only documentation',
     !!twoMirrors && twoMirrors.minutes >= 8, twoMirrors ? String(twoMirrors.minutes) : 'absent');
  done('6 book steps · 8 canonical phases · 3 declared gaps · reconciled in m1l6');

  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.slice(0, 40).forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})();
