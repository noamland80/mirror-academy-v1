/**
 * VERIFY — CREDENTIAL GUARD
 *
 * The three demo passwords in the frozen RC `mirror-wow-v1-20260901` were
 * committed to a public repository. They are compromised. They may remain in
 * that frozen tree for architecture review; they must never be valid in a
 * hosted paying instance.
 *
 * This suite proves that rule against real code paths — not by reading a
 * comment, and not by asserting that a string is absent from a file.
 */

const path = require('path');
const os = require('os');
const fs = require('fs');

let passed = 0, failed = 0;
const section = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
function check(name, fn) {
  try { const r = fn(); if (r === false) throw new Error('returned false'); console.log(`  PASS  ${name}`); passed++; }
  catch (e) { console.log(`  FAIL  ${name}\n        ${e.message}`); failed++; }
}
async function checkAsync(name, fn) {
  try { const r = await fn(); if (r === false) throw new Error('returned false'); console.log(`  PASS  ${name}`); passed++; }
  catch (e) { console.log(`  FAIL  ${name}\n        ${e.message}`); failed++; }
}

const freshSeed = () => { delete require.cache[require.resolve('../server/seed')]; return require('../server/seed'); };
const withEnv = (env, fn) => {
  const saved = {};
  for (const k of Object.keys(env)) { saved[k] = process.env[k]; if (env[k] === undefined) delete process.env[k]; else process.env[k] = env[k]; }
  try { return fn(); }
  finally { for (const k of Object.keys(saved)) { if (saved[k] === undefined) delete process.env[k]; else process.env[k] = saved[k]; } }
};

const CLEAN = {
  MIRROR_MODE: undefined,
  MIRROR_SEED_PW_PRAC1: undefined,
  MIRROR_SEED_PW_PRAC2: undefined,
  MIRROR_SEED_PW_MGR: undefined
};

(async () => {

section('THE BURNED LIST IS EXPLICIT');

check('The three published passwords are named as burned', () => {
  const seed = withEnv(CLEAN, freshSeed);
  const b = seed.BURNED_PASSWORDS;
  return b.includes('Mirror2026!prac') && b.includes('Mirror2026!prac2') && b.includes('Mirror2026!mgr') && b.length === 3;
});

check('The burned list cannot be mutated at runtime', () => {
  const seed = withEnv(CLEAN, freshSeed);
  try { seed.BURNED_PASSWORDS.push('anything'); } catch (e) { /* strict-mode throw is also a pass */ }
  return seed.BURNED_PASSWORDS.length === 3;
});

section('DEMO MODE STILL WORKS');

check('Demo mode is the default', () => {
  const seed = withEnv(CLEAN, freshSeed);
  const pw = seed.passwordFor(seed.SEED_ACCOUNTS[0]);
  return pw === 'Mirror2026!prac';
});

check('Demo mode still exposes ACCOUNTS for the QA harnesses', () => {
  const seed = withEnv(CLEAN, freshSeed);
  return seed.ACCOUNTS.length === 3 && seed.ACCOUNTS.every(a => typeof a.password === 'string' && a.password.length > 0);
});

section('HOSTED MODE REFUSES THE BURNED CREDENTIALS');

check('Hosted mode refuses to fall back to a demo password', () => {
  return withEnv({ ...CLEAN, MIRROR_MODE: 'hosted' }, () => {
    const seed = freshSeed();
    try { seed.passwordFor(seed.SEED_ACCOUNTS[0]); return false; }
    catch (e) { return /is not set/.test(e.message); }
  });
});

check('Hosted mode refuses a burned password supplied explicitly', () => {
  return withEnv({ ...CLEAN, MIRROR_MODE: 'hosted', MIRROR_SEED_PW_PRAC1: 'Mirror2026!prac' }, () => {
    const seed = freshSeed();
    try { seed.passwordFor(seed.SEED_ACCOUNTS[0]); return false; }
    catch (e) { return /published to the public repository/.test(e.message); }
  });
});

check('Hosted mode refuses every burned password, not only the first', () => {
  const seed = withEnv(CLEAN, freshSeed);
  return seed.BURNED_PASSWORDS.every((pw, i) =>
    withEnv({ ...CLEAN, MIRROR_MODE: 'hosted', [seed.SEED_ACCOUNTS[i].env]: pw }, () => {
      const s = freshSeed();
      try { s.passwordFor(s.SEED_ACCOUNTS[i]); return false; }
      catch (e) { return /published to the public repository/.test(e.message); }
    }));
});

check('Hosted mode refuses a short replacement password', () => {
  return withEnv({ ...CLEAN, MIRROR_MODE: 'hosted', MIRROR_SEED_PW_PRAC1: 'short-one' }, () => {
    const seed = freshSeed();
    try { seed.passwordFor(seed.SEED_ACCOUNTS[0]); return false; }
    catch (e) { return /at least 16 characters/.test(e.message); }
  });
});

check('Hosted mode accepts a strong supplied password', () => {
  return withEnv({ ...CLEAN, MIRROR_MODE: 'hosted', MIRROR_SEED_PW_PRAC1: 'a-long-rotated-secret-2026' }, () => {
    const seed = freshSeed();
    return seed.passwordFor(seed.SEED_ACCOUNTS[0]) === 'a-long-rotated-secret-2026';
  });
});

check('Hosted mode exposes no password on ACCOUNTS', () => {
  return withEnv({ ...CLEAN, MIRROR_MODE: 'hosted' }, () => {
    const seed = freshSeed();
    return seed.ACCOUNTS.every(a => a.password === undefined);
  });
});

section('THE GUARD IS PROVED AGAINST A LIVE DATABASE');

const tmpDb = path.join(os.tmpdir(), `mirror-credguard-${Date.now()}.db`);

await checkAsync('A hosted database seeded with rotated passwords rejects all nine burned probes', async () => {
  process.env.MIRROR_DB = tmpDb;
  const Database = require('../server/database');
  const db = new Database();
  await db.initialize();

  const seed = withEnv({
    ...CLEAN,
    MIRROR_MODE: 'hosted',
    MIRROR_SEED_PW_PRAC1: 'rotated-practitioner-one-2026',
    MIRROR_SEED_PW_PRAC2: 'rotated-practitioner-two-2026',
    MIRROR_SEED_PW_MGR:   'rotated-manager-account-2026'
  }, () => freshSeed());

  // seed() is async, so the env must stay set across the await — not restored
  // by a synchronous helper the moment the promise is handed back.
  process.env.MIRROR_MODE = 'hosted';
  process.env.MIRROR_SEED_PW_PRAC1 = 'rotated-practitioner-one-2026';
  process.env.MIRROR_SEED_PW_PRAC2 = 'rotated-practitioner-two-2026';
  process.env.MIRROR_SEED_PW_MGR   = 'rotated-manager-account-2026';
  let result;
  try { result = await seed(db); }
  finally {
    delete process.env.MIRROR_MODE;
    delete process.env.MIRROR_SEED_PW_PRAC1;
    delete process.env.MIRROR_SEED_PW_PRAC2;
    delete process.env.MIRROR_SEED_PW_MGR;
  }

  if (result.mode !== 'hosted') throw new Error(`mode was ${result.mode}`);

  const proof = await seed.assertNoBurnedCredentials(db);
  if (proof.checked !== 9) throw new Error(`expected 9 probes, ran ${proof.checked}`);

  const rotated = await db.authenticate('practitioner@wildmagic.es', 'rotated-practitioner-one-2026');
  if (!rotated) throw new Error('rotated password did not authenticate');
  return true;
});

await checkAsync('A database that still accepts a burned password refuses to start', async () => {
  const burnedDb = path.join(os.tmpdir(), `mirror-credguard-burned-${Date.now()}.db`);
  process.env.MIRROR_DB = burnedDb;
  delete require.cache[require.resolve('../server/database')];
  const Database = require('../server/database');
  const db = new Database();
  await db.initialize();

  const seed = withEnv(CLEAN, freshSeed);
  await withEnv(CLEAN, () => seed(db));           // seed in DEMO mode — burned passwords live

  const live = await db.authenticate('manager@wildmagic.es', 'Mirror2026!mgr');
  if (!live) throw new Error('demo seeding did not produce the expected demo account');

  try {
    await seed.assertNoBurnedCredentials(db);     // now apply the hosted guard
    fs.existsSync(burnedDb) && fs.unlinkSync(burnedDb);
    return false;                                  // guard failed to fire
  } catch (e) {
    fs.existsSync(burnedDb) && fs.unlinkSync(burnedDb);
    return /Refusing to start/.test(e.message) && /manager@wildmagic\.es/.test(e.message);
  }
});

check('The temporary hosted database is cleaned up', () => {
  if (fs.existsSync(tmpDb)) fs.unlinkSync(tmpDb);
  return !fs.existsSync(tmpDb);
});

console.log('\n' + '═'.repeat(58));
console.log(`RESULT: ${passed} passed, ${failed} failed`);
console.log('═'.repeat(58));
process.exit(failed ? 1 : 0);

})();
