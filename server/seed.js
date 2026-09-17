/**
 * SEED — demo clinic and accounts.
 *
 * These are SEEDED DEMO ACCOUNTS, not a self-service signup flow.
 * Passwords are salted + scrypt-hashed in the database like any other account;
 * there is no hardcoded credential check anywhere in the request path.
 * Self-service clinic/practitioner onboarding is NOT implemented in this build.
 *
 * ---------------------------------------------------------------------------
 * BURNED CREDENTIALS — 2026-09
 * ---------------------------------------------------------------------------
 * Three demo passwords were committed to a public repository in the frozen
 * release candidate `mirror-wow-v1-20260901`. They are treated as COMPROMISED.
 * They may remain readable in that frozen RC for architecture review, but they
 * must never be valid in a hosted or paying instance.
 *
 * This file enforces that structurally rather than by convention:
 *
 *   MIRROR_MODE=demo   (default) — seeds the local demo accounts. The burned
 *                      passwords are allowed ONLY here, and only because the
 *                      demo instance holds no real client data.
 *   MIRROR_MODE=hosted — every seed password must be supplied by environment
 *                      variable, must be at least 16 characters, and must not
 *                      be one of the burned strings. A violation aborts boot.
 *                      There is no flag to relax this.
 *   MIRROR_MODE=production — NOTHING IS SEEDED AT ALL.
 *
 * `production` exists because `hosted` was not enough. Hosted still creates
 * the Wild Magic demo clinic and its three accounts — with safe passwords, but
 * they are still there, in the tenant list, in the clinic count, and in front
 * of anybody reviewing the instance. An instance that real clinics buy into
 * must contain nothing but real clinics: the first tenant on it should be the
 * first customer, created by the buyer journey, and every clinic after that
 * the same way.
 *
 * So production seeds no clinic, no accounts and no passwords, and it still
 * runs the burned-credential proof — which on an empty database is trivially
 * satisfied and stays meaningful if the database is ever restored from an
 * older backup that did contain them.
 *
 * `assertNoBurnedCredentials(db)` runs at startup in hosted mode and proves the
 * rule against the live database rather than asserting it in a comment: it
 * attempts a real authentication with each burned password against each seeded
 * account and refuses to start the server if any of them succeeds.
 */

const CLINIC = { id: 'clinic_wildmagic', name: 'Wild Magic Cosmetics' };

// Published to a public GitHub repository. Permanently untrusted.
const BURNED_PASSWORDS = Object.freeze([
  'Mirror2026!prac',
  'Mirror2026!prac2',
  'Mirror2026!mgr'
]);

const MODE = () => (process.env.MIRROR_MODE || 'demo').toLowerCase();
/** Production is hosted plus "and seed nothing", so it satisfies both tests. */
const isProduction = () => MODE() === 'production';
const isHosted = () => MODE() === 'hosted' || isProduction();

const SEED_ACCOUNTS = [
  { id: 'usr_prac_01', email: 'practitioner@wildmagic.es',  name: 'Sophia García', role: 'practitioner', env: 'MIRROR_SEED_PW_PRAC1', demo: 'Mirror2026!prac'  },
  { id: 'usr_prac_02', email: 'practitioner2@wildmagic.es', name: 'Elena Duarte',  role: 'practitioner', env: 'MIRROR_SEED_PW_PRAC2', demo: 'Mirror2026!prac2' },
  { id: 'usr_mgr_01',  email: 'manager@wildmagic.es',       name: 'Ana Beltrán',   role: 'manager',      env: 'MIRROR_SEED_PW_MGR',   demo: 'Mirror2026!mgr'   }
];

function passwordFor(account) {
  const supplied = process.env[account.env];

  if (!isHosted()) return supplied || account.demo;

  if (!supplied) {
    throw new Error(
      `MIRROR_MODE=hosted: ${account.env} is not set. Hosted instances must supply ` +
      `every seed password by environment variable; the demo passwords are burned ` +
      `and cannot be used.`
    );
  }
  if (BURNED_PASSWORDS.includes(supplied)) {
    throw new Error(
      `MIRROR_MODE=hosted: ${account.env} is one of the passwords published to the ` +
      `public repository. It is compromised and is refused.`
    );
  }
  if (supplied.length < 16) {
    throw new Error(`MIRROR_MODE=hosted: ${account.env} must be at least 16 characters.`);
  }
  return supplied;
}

/**
 * Live proof that no burned credential opens an account on this database.
 * Returns { checked, mode }. Throws if any burned credential authenticates.
 */
async function assertNoBurnedCredentials(db) {
  let checked = 0;
  const opened = [];
  for (const account of SEED_ACCOUNTS) {
    for (const pw of BURNED_PASSWORDS) {
      checked++;
      const user = await db.authenticate(account.email, pw);
      if (user) opened.push(`${account.email} (burned password accepted)`);
    }
  }
  if (opened.length) {
    throw new Error(
      `Refusing to start: a password published to the public repository still ` +
      `authenticates on this database — ${opened.join('; ')}. Rotate these ` +
      `accounts before serving paying clinics.`
    );
  }
  return { checked, mode: MODE() };
}

module.exports = async function seed(db) {
  if (isProduction()) {
    // Not "skip if they exist" — never create them. The proof still runs, so a
    // database restored from an older backup that carries those accounts is
    // still checked rather than trusted.
    const proof = await assertNoBurnedCredentials(db);
    const clinics = await db.get(`SELECT COUNT(*) n FROM clinics`).catch(() => ({ n: 0 }));
    const users = await db.get(`SELECT COUNT(*) n FROM users`).catch(() => ({ n: 0 }));
    console.log(`  MIRROR_MODE=production: nothing seeded. ` +
                `${clinics.n} clinic(s), ${users.n} account(s) on this database. ` +
                `${proof.checked} burned-credential probes rejected.`);
    return { clinic: null, mode: MODE(), accounts: [], seeded: false };
  }

  for (const account of SEED_ACCOUNTS) {
    const existing = await db.getUserByEmail(account.email);
    if (existing) continue;
    await db.createUser({
      id: account.id, email: account.email, name: account.name, role: account.role,
      clinicId: CLINIC.id, clinicName: CLINIC.name, password: passwordFor(account)
    });
    console.log(`  seeded ${account.role}: ${account.email}`);
  }

  if (isHosted()) {
    const proof = await assertNoBurnedCredentials(db);
    console.log(`  credential guard: ${proof.checked} burned-credential probes rejected (mode=hosted)`);
  }

  return { clinic: CLINIC, mode: MODE(), seeded: true,
           accounts: SEED_ACCOUNTS.map(a => ({ email: a.email, role: a.role })) };
};

module.exports.CLINIC = CLINIC;
module.exports.SEED_ACCOUNTS = SEED_ACCOUNTS;
module.exports.BURNED_PASSWORDS = BURNED_PASSWORDS;
module.exports.assertNoBurnedCredentials = assertNoBurnedCredentials;
module.exports.passwordFor = passwordFor;
module.exports.MODE = MODE;
module.exports.isProduction = isProduction;
module.exports.isHosted = isHosted;

// Back-compat for the demo seeder and QA harnesses, which sign in as these
// accounts. In hosted mode no password is exposed here by construction.
module.exports.ACCOUNTS = SEED_ACCOUNTS.map(a => ({
  id: a.id, email: a.email, name: a.name, role: a.role,
  password: isHosted() ? undefined : (process.env[a.env] || a.demo)
}));
