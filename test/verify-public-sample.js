/**
 * THE PUBLIC SAMPLE GIVES AWAY THE MOMENT, NOT THE ANSWER
 *
 * `/api/sample` is the only door in the product that serves case content to
 * somebody with no account. That makes it two risks at once:
 *
 *   1. It can leak the answer. The authenticated `firstMoment()` pre-resolves
 *      all three replies so the browser can respond instantly; if the public
 *      endpoint is ever built the same way — or refactored to share that
 *      helper — the correct reply is sitting in the page source, and the one
 *      moment the product has to earn a stranger's attention is spoiled before
 *      she clicks anything.
 *
 *   2. It can become a way to read the programme for free. One phase of one
 *      case is a sample. A lesson body, a toolkit, a second case or the
 *      principle catalogue arriving through the same door is the product.
 *
 * So this test reads the payload as an attacker would: it does not check that
 * the fields it knows about are absent, it walks every string in the response
 * and fails if any of them is a verdict, a reading or a consequence. A future
 * field called something else does not get past it.
 *
 * Run: node test/verify-public-sample.js
 */
const path = require('path');
const os = require('os');
const fs = require('fs');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);

/** Every string anywhere in a payload, with the path that reached it. */
function strings(v, at = '$', out = []) {
  if (typeof v === 'string') { out.push([at, v]); return out; }
  if (Array.isArray(v)) { v.forEach((x, i) => strings(x, `${at}[${i}]`, out)); return out; }
  if (v && typeof v === 'object') { Object.keys(v).forEach(k => strings(v[k], `${at}.${k}`, out)); return out; }
  return out;
}
const keys = (v, at = '$', out = []) => {
  if (Array.isArray(v)) v.forEach((x, i) => keys(x, `${at}[${i}]`, out));
  else if (v && typeof v === 'object') Object.keys(v).forEach(k => { out.push([`${at}.${k}`, k]); keys(v[k], `${at}.${k}`, out); });
  return out;
};

(async () => {
  const dbPath = path.join(os.tmpdir(), `mirror-sample-${Date.now()}.db`);
  process.env.MIRROR_DB = dbPath;
  const { app, bootstrap } = require('../server/index');
  await bootstrap();
  const server = app.listen(0);
  await new Promise(r => server.once('listening', r));
  const base = 'http://127.0.0.1:' + server.address().port;
  const get = (p, lang) => fetch(base + p, { headers: lang ? { 'X-Mirror-Lang': lang } : {} });
  const post = (p, body, lang) => fetch(base + p, {
    method: 'POST',
    headers: Object.assign({ 'Content-Type': 'application/json' }, lang ? { 'X-Mirror-Lang': lang } : {}),
    body: JSON.stringify(body)
  });

  sec('IT OPENS WITHOUT AN ACCOUNT');
  const r = await get('/api/sample');
  ok('GET /api/sample answers 200 with no token', r.status === 200, String(r.status));
  const m = await r.json();
  ok('It is the public sample', m.kind === 'public_sample', String(m.kind));

  sec('YOU MEET A PERSON, NOT A RECORD');
  ok('She has a name', m.client && m.client.name === 'Carmen', JSON.stringify(m.client && m.client.name));
  ok('And an age', m.client.age === 51, String(m.client.age));
  ok('And an occupation, because it is why the case is what it is',
     typeof m.client.occupation === 'string' && m.client.occupation.length > 3, m.client.occupation);
  ok('Her story arrives before her file', Array.isArray(m.client.story) && m.client.story.length >= 2,
     String(m.client.story && m.client.story.length));
  ok('The first line says who booked the appointment',
     /sister/i.test(m.client.story.join(' ')), m.client.story[0]);
  ok('Her own words are quoted from the booking form',
     /look like me/i.test(m.client.story.join(' ')), m.client.story[1]);
  ok('Her file has what a practitioner would actually hold',
     Array.isArray(m.client.onFile) && m.client.onFile.length >= 4,
     String(m.client.onFile && m.client.onFile.length));
  ok('Including the clinic she walked out of',
     JSON.stringify(m.client.onFile).match(/printed a treatment plan|plan de tratamiento/i) !== null);
  done(`${m.client.name}, ${m.client.age} — ${m.client.occupation}`);

  sec('WHAT TO NOTICE IS ASKED, NEVER ANSWERED');
  ok('There are things to notice', Array.isArray(m.client.toNotice) && m.client.toNotice.length >= 3,
     String(m.client.toNotice && m.client.toNotice.length));
  ok('Every one of them is a question, not a finding',
     m.client.toNotice.every(n => /\?$/.test(String(n).trim())),
     m.client.toNotice.filter(n => !/\?$/.test(String(n).trim())).join(' | '));

  sec('THE MOMENT IS PLAYABLE');
  ok('Her words are there', m.signal && typeof m.signal.quote === 'string' && m.signal.quote.length > 40);
  ok('Attributed to her, entering', /carmen/i.test(String(m.signal.source)), m.signal.source);
  ok('Her subtext is NOT — it is the first line of the reading',
     !('subtext' in m.signal), JSON.stringify(Object.keys(m.signal)));
  ok('Three replies', Array.isArray(m.options) && m.options.length === 3, String(m.options && m.options.length));
  ok('Each reply is words a practitioner would say, not a label alone',
     m.options.every(o => typeof o.language === 'string' && o.language.length > 30));
  ok('And the visitor is asked what she would say', typeof m.ask === 'string' && /\?/.test(m.ask), m.ask);

  sec('NOTHING IN THE PAYLOAD GRADES THE REPLIES');
  // The real guard: walk every string, not just the fields we remembered.
  const VERDICT = /\b(NOT ALIGNED|PARTIALLY ALIGNED|ALIGNED|NO ALINEAD\w*|PARCIALMENTE ALINEAD\w*|ALINEAD\w*)\b/;
  const leaked = strings(m).filter(([p, s]) => VERDICT.test(s));
  ok('No alignment verdict appears anywhere', leaked.length === 0,
     leaked.slice(0, 3).map(([p, s]) => `${p}: «${s.slice(0, 60)}»`).join(' | '));

  const GRADING_KEYS = /^(alignment|reading|consequence|mirror|effects|movement|trustDelta|willingnessAfter|principle|correct|best|recommended)$/i;
  const badKeys = keys(m).filter(([p, k]) => GRADING_KEYS.test(k));
  ok('No field is named after a verdict, a reading or a consequence',
     badKeys.length === 0, badKeys.slice(0, 4).map(([p]) => p).join(' | '));

  // Cheap and decisive: the aligned reply's own consequence sentence must not
  // be findable in the opening payload in either language.
  const sample = require('../server/sample');
  for (const lang of ['en', 'es']) {
    const opening = JSON.stringify(await (await get('/api/sample', lang)).json());
    const aligned = await (await post('/api/sample/reveal', { optionId: 'conn-autonomy' }, lang)).json();
    const tell = String(aligned.consequence.narrative || '').slice(0, 30);
    ok(`${lang}: the aligned reply's consequence is not in the opening payload`,
       tell.length > 10 && !opening.includes(tell), tell);
  }

  sec('THE READING ARRIVES ONLY WHEN SHE COMMITS TO ONE REPLY');
  const ids = sample.sampleOptionIds();
  ok('The three replies are the case\'s own', ids.length === 3 && ids.every(i => /^conn-/.test(i)), ids.join(','));
  for (const id of ids) {
    const rr = await post('/api/sample/reveal', { optionId: id });
    ok(`${id}: answers 200`, rr.status === 200, String(rr.status));
    const d = await rr.json();
    ok(`${id}: carries a verdict`, VERDICT.test(String(d.alignment)), String(d.alignment));
    ok(`${id}: names the signal, the meaning and the principle`,
       !!(d.reading && d.reading.signal && d.reading.interpretation && d.reading.principle));
    ok(`${id}: says what happened to her in her behaviour`,
       !!(d.consequence && typeof d.consequence.narrative === 'string' && d.consequence.narrative.length > 25),
       String(d.consequence && d.consequence.narrative));
    ok(`${id}: and reports her posture and willingness before and after`,
       typeof d.consequence.willingnessBefore === 'number' && typeof d.consequence.willingnessAfter === 'number' &&
       !!d.consequence.postureBefore && !!d.consequence.postureAfter);
    done(`${id}  ${d.alignment}  ${d.consequence.postureBefore}→${d.consequence.postureAfter}  ${d.consequence.willingnessBefore}→${d.consequence.willingnessAfter}`);
  }

  sec('EACH REPLY IS PLAYED AGAINST HER ENTRANCE, NOT AGAINST THE LAST ONE');
  // Three reveals in a row must give the same three answers as three reveals
  // in the opposite order. A shared mutable state would break this.
  const forward = [];
  for (const id of ids) forward.push((await (await post('/api/sample/reveal', { optionId: id })).json()).consequence.willingnessAfter);
  const backward = [];
  for (const id of [...ids].reverse()) backward.push((await (await post('/api/sample/reveal', { optionId: id })).json()).consequence.willingnessAfter);
  ok('Order does not change the outcome', JSON.stringify(forward) === JSON.stringify([...backward].reverse()),
     `${forward} vs ${[...backward].reverse()}`);
  ok('Every reply starts from the same willingness',
     (await Promise.all(ids.map(async id =>
       (await (await post('/api/sample/reveal', { optionId: id })).json()).consequence.willingnessBefore)))
       .every((w, _, a) => w === a[0]));

  sec('THE THREE REPLIES ACTUALLY DIVERGE');
  const outcomes = {};
  for (const id of ids) outcomes[id] = (await (await post('/api/sample/reveal', { optionId: id })).json());
  const verdicts = ids.map(i => outcomes[i].alignment);
  ok('They do not all read the same', new Set(verdicts).size === 3, verdicts.join(' | '));
  ok('One of them costs her willingness',
     ids.some(i => outcomes[i].consequence.willingnessAfter < outcomes[i].consequence.willingnessBefore));
  ok('One of them earns it', ids.some(i => outcomes[i].consequence.willingnessAfter > outcomes[i].consequence.willingnessBefore));
  ok('And one of them moves her posture off armored',
     ids.some(i => outcomes[i].consequence.postureAfter !== outcomes[i].consequence.postureBefore));

  sec('THE DOOR IS NOT A WAY INTO THE PROGRAMME');
  const NEVER = /lessonBody|lessons?\b.*\bbody|toolkitFields|curriculum|moduleId|lessonId/i;
  const smuggled = strings(m).filter(([p, s]) => NEVER.test(p));
  ok('No lesson, module or toolkit content rides along', smuggled.length === 0,
     smuggled.slice(0, 3).map(([p]) => p).join(' | '));
  ok('Only one case is reachable', String(JSON.stringify(m)).match(/sofia|beatriz|teresa|isabel|lucia|marta|nuria|pilar/i) === null);
  const bad = await post('/api/sample/reveal', { optionId: 'disc-anything' });
  ok('A reply id from another phase is a 404', bad.status === 404, String(bad.status));
  const none = await post('/api/sample/reveal', {});
  ok('No reply id is a 404', none.status === 404, String(none.status));
  const j404 = await bad.json();
  ok('And the refusal lists nothing', !/conn-/.test(JSON.stringify(j404)), JSON.stringify(j404));

  sec('THE DISCLOSURE LEDGER IS IN WORDS, IN BOTH LANGUAGES');
  // The defect this replaced: the sample returned the engine's own flags, so a
  // Spanish visitor read "identity fear, spouse comment" — English, and not
  // even English a client would recognise — inside a Spanish debrief.
  const ledger = require('../server/ledger');
  for (const lang of ['en', 'es']) {
    const d = await (await post('/api/sample/reveal', { optionId: 'conn-autonomy' }, lang)).json();
    const shown = [...(d.consequence.revealed || []), ...(d.consequence.stillWithheld || [])];
    ok(`${lang}: the ledger is shown at all`, shown.length >= 1, JSON.stringify(shown));
    ok(`${lang}: no engine flag name reaches the visitor`,
       shown.every(w => !/_/.test(w)), shown.filter(w => /_/.test(w)).join(' | '));
    ok(`${lang}: nor any of the known flag names in the clear`,
       shown.every(w => !/identity fear|spouse comment|guard lowered/i.test(w)) || lang === 'en',
       shown.join(' | '));
    done(`${lang}: ${shown.join('  ·  ')}`);
  }
  {
    // Every flag the sample's own case can actually produce must have a phrase;
    // a missing one degrades to the raw flag, which is the bug above returning.
    const sc = require('../server/scenario').get(sample.SAMPLE.scenario);
    const src = fs.readFileSync(path.join(__dirname, '..', 'server', 'scenario', 'carmenScenario.js'), 'utf8');
    const flags = [...new Set([...src.matchAll(/reveals:\s*\[([^\]]*)\]/g)]
      .flatMap(m => m[1].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(Boolean))
      .concat((sc.initialClientState().withheld || [])))];
    const missing = flags.filter(f => !ledger.hasLedgerWord(f));
    ok(`Every flag Carmen's case can produce has a human phrase (${flags.length} flags)`,
       missing.length === 0, missing.join(' | '));
  }
  {
    // And the Academy shell's copy of the map must still agree with the
    // server's, or one surface starts calling the same disclosure two things.
    const appSrc = fs.readFileSync(path.join(__dirname, '..', 'public', 'app.js'), 'utf8');
    const block = (appSrc.match(/const LEDGER_WORD = \{[\s\S]*?\n\};/) || [''])[0];
    ok('The shell still has its ledger map', block.length > 200);
    let shellMap = {};
    try { shellMap = eval('(' + block.replace(/^const LEDGER_WORD = /, '').replace(/;$/, '') + ')'); } catch (e) {}
    const shellKeys = Object.keys(shellMap).sort();
    const serverKeys = Object.keys(ledger.LEDGER_WORD).sort();
    ok('The shell and the server agree on which disclosures exist',
       JSON.stringify(shellKeys) === JSON.stringify(serverKeys),
       `shell ${shellKeys.length} / server ${serverKeys.length}`);
    const differ = serverKeys.filter(k => shellMap[k] &&
      (shellMap[k].en !== ledger.LEDGER_WORD[k].en || shellMap[k].es !== ledger.LEDGER_WORD[k].es));
    ok('And on the words for every one of them', differ.length === 0, differ.join(' | '));
    done(`${serverKeys.length} disclosures, one wording`);
  }

  sec('IT IS SPANISH IN SPANISH');
  const es = await (await get('/api/sample', 'es')).json();
  ok('Her story is in Spanish', /hermana/i.test(es.client.story.join(' ')), es.client.story[0]);
  ok('The question is in Spanish', /qué dices/i.test(es.ask), es.ask);
  ok('The phase is in Spanish', /conexi/i.test(String(es.phase.name)), String(es.phase.name));
  ok('And her words are her Spanish words, not the English ones',
     es.signal.quote !== m.signal.quote && /neurotoxinas|decida/i.test(es.signal.quote), es.signal.quote.slice(0, 50));
  const esr = await (await post('/api/sample/reveal', { optionId: 'conn-autonomy' }, 'es')).json();
  ok('The reading is in Spanish too', /coraza|seguridad|autonom/i.test(JSON.stringify(esr.reading)));
  done(esr.consequence.narrative);

  sec('IT IS RATE LIMITED');
  // The window is per-process and already partly spent by this test, so the
  // check is that a refusal happens and says how long to wait — not the exact
  // request it happens on.
  let saw429 = null;
  for (let i = 0; i < 80 && !saw429; i++) {
    const rr = await get('/api/sample');
    if (rr.status === 429) saw429 = rr;
  }
  ok('The sample door closes under a flood', !!saw429);
  if (saw429) {
    ok('With 429 and a Retry-After', saw429.headers.get('retry-after') !== null,
       String(saw429.headers.get('retry-after')));
    const body = await saw429.json();
    ok('And a message a person could act on', typeof body.error === 'string' && body.retryAfterSeconds > 0,
       JSON.stringify(body));
    done(`refused, retry in ${body.retryAfterSeconds}s`);
  } else { ok('With 429 and a Retry-After', false, 'never refused'); ok('And a message a person could act on', false); }

  server.close();
  fs.existsSync(dbPath) && fs.unlinkSync(dbPath);
  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
