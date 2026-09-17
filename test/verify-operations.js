/**
 * THE THINGS THAT ONLY MATTER ON THE WORST DAY
 *
 * Backups, restores, and the deployment description. None of it is visible to
 * a customer and all of it is what stands between a bad morning and a lost
 * business. Each one is tested here the only way that means anything: by
 * actually doing it.
 *
 *   · a backup is taken from a database that is being written to
 *   · the backup is opened and its contents counted
 *   · it is restored over a database, and the superseded one is kept
 *   · the restored database SERVES — a real manager signs into it
 *   · a corrupt file is refused, loudly, instead of restored
 *   · an empty backup cannot silently replace a populated database
 *   · the deployment file contains no secret of any kind
 *
 * Run: node test/verify-operations.js
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

let pass = 0, fail = 0; const failures = [];
const ok = (n, c, d) => { if (c) pass++; else { fail++; failures.push(n + (d ? '  →  ' + d : '')); } };
const sec = t => console.log(`\n${t}\n${'─'.repeat(t.length)}`);
const done = t => console.log('  ' + t);

const ROOT = path.join(__dirname, '..');
const node = process.execPath;
const run = (script, args, env) => {
  try {
    return { ok: true, out: execFileSync(node, [path.join(ROOT, script), ...args], {
      env: Object.assign({}, process.env, env || {}), encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']
    }) };
  } catch (e) {
    return { ok: false, out: String(e.stdout || ''), err: String(e.stderr || e.message), code: e.status };
  }
};
const json = s => { try { return JSON.parse(s); } catch (e) { return null; } };

(async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'mirror-ops-'));
  const dbPath = path.join(tmp, 'live.db');
  const backupDir = path.join(tmp, 'backups');

  // ---- a database with a real clinic and a real consultation in it ----
  process.env.MIRROR_DB = dbPath;
  const { app, db, bootstrap } = require('../server/index');
  const tenancy = require('../server/tenancy');
  await bootstrap();
  const made = await tenancy.createPilotClinic(db, {
    clinicName: 'Clínica Respaldo', managerName: 'Pilar Vega', managerEmail: 'pilar@respaldo.test',
    paymentState: 'paid', password: 'Una-copia-de-seguridad-7'
  });
  const server = app.listen(0);
  await new Promise(r => server.once('listening', r));
  const base = 'http://127.0.0.1:' + server.address().port;
  const login = (email, password, b) => fetch((b || base) + '/api/auth/login', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  sec('A BACKUP IS TAKEN WHILE THE SERVER IS RUNNING');
  // Keep writing during the backup: the whole reason for VACUUM INTO rather
  // than a file copy is that the database is in use.
  const churn = setInterval(() => {
    db.run(`INSERT INTO audit_events (id,at,event,clinic_id,detail) VALUES (?,?,?,?,?)`,
      ['ae_' + Math.random().toString(16).slice(2, 10), new Date().toISOString(),
       'checkout_started', made.clinic.id, '{}']).catch(() => {});
  }, 5);
  const b1 = run('scripts/backup.js', [backupDir], { MIRROR_DB: dbPath });
  clearInterval(churn);
  ok('The backup succeeds against a live database', b1.ok, (b1.err || '').slice(0, 160));
  const r1 = json(b1.out);
  ok('It reports what it wrote', !!(r1 && r1.ok && r1.to), (b1.out || '').slice(0, 120));
  ok('The file exists', !!(r1 && fs.existsSync(r1.to)));
  ok('And it is not empty', !!(r1 && r1.bytes > 10000), String(r1 && r1.bytes));

  sec('AND IT IS VERIFIED BEFORE IT IS TRUSTED');
  ok('The backup passes an integrity check', r1 && r1.verified && r1.verified.integrity === 'ok',
     JSON.stringify(r1 && r1.verified && r1.verified.integrity));
  ok('It contains the clinic', r1 && r1.verified.counts.clinics >= 1, String(r1 && r1.verified.counts.clinics));
  ok('And the accounts', r1 && r1.verified.counts.users >= 1, String(r1 && r1.verified.counts.users));
  done(`${r1.bytes} bytes · ${JSON.stringify(r1.verified.counts)}`);

  sec('A REHEARSAL PROVES IT IS RESTORABLE WITHOUT TOUCHING ANYTHING');
  const before = fs.statSync(dbPath).mtimeMs;
  const chk = run('scripts/restore.js', ['--check', r1.to], { MIRROR_DB: dbPath });
  ok('The rehearsal passes', chk.ok, (chk.err || '').slice(0, 160));
  ok('It says the backup is restorable', !!(json(chk.out) || {}).restorable);
  ok('And the live database was not touched', fs.statSync(dbPath).mtimeMs === before);

  sec('RETENTION CANNOT FILL THE DISK');
  for (let i = 0; i < 4; i++) {
    run('scripts/backup.js', [backupDir], { MIRROR_DB: dbPath, MIRROR_BACKUP_KEEP: '3' });
  }
  const kept = fs.readdirSync(backupDir).filter(f => /^mirror-.*\.db$/.test(f));
  ok('Only the newest few are kept', kept.length === 3, String(kept.length));
  done(`${kept.length} kept`);

  sec('A CORRUPT BACKUP IS REFUSED, NOT RESTORED');
  const corrupt = path.join(tmp, 'corrupt.db');
  fs.writeFileSync(corrupt, Buffer.concat([
    Buffer.from('SQLite format 3\0'), Buffer.alloc(4096, 0x5a)
  ]));
  const bad = run('scripts/restore.js', ['--check', corrupt], { MIRROR_DB: dbPath });
  ok('It exits non-zero', !bad.ok, String(bad.code));
  ok('And says why', /integrity|not pass/i.test(bad.err || bad.out || ''), (bad.err || '').slice(0, 120));

  sec('AN EMPTY BACKUP CANNOT SILENTLY REPLACE A POPULATED DATABASE');
  const emptyDb = path.join(tmp, 'empty.db');
  process.env.MIRROR_DB = emptyDb;
  {
    const Database = require('../server/database');
    const fresh = new Database(emptyDb);
    await fresh.initialize();
    await tenancy.migrate(fresh);
  }
  const emptyBackupDir = path.join(tmp, 'empty-backups');
  const eb = run('scripts/backup.js', [emptyBackupDir], { MIRROR_DB: emptyDb });
  const ebj = json(eb.out);
  ok('An empty database can still be backed up', eb.ok && !!ebj, (eb.err || '').slice(0, 120));
  const refuse = run('scripts/restore.js', [ebj.to], { MIRROR_DB: dbPath });
  ok('Restoring it over a populated database is refused', !refuse.ok, String(refuse.code));
  ok('And it names the reason and the override', /no clinics/i.test(refuse.err || '') && /--force/.test(refuse.err || ''),
     (refuse.err || '').slice(0, 140));
  ok('The live database still has its clinic',
     (await db.get(`SELECT COUNT(*) n FROM clinics`)).n >= 1);

  sec('A REAL RESTORE PUTS THE BUSINESS BACK, AND KEEPS WHAT IT REPLACED');
  // A fresh backup, because the retention section above deliberately pruned
  // the first one — which is the retention policy working, not a fault.
  const latest = json(run('scripts/backup.js', [backupDir], { MIRROR_DB: dbPath }).out);
  ok('A current backup exists to restore from', !!(latest && fs.existsSync(latest.to)));
  const target = path.join(tmp, 'restored.db');
  fs.copyFileSync(dbPath, target);
  const rst = run('scripts/restore.js', [latest.to], { MIRROR_DB: target });
  ok('The restore succeeds', rst.ok, (rst.err || '').slice(0, 160));
  const rj = json(rst.out);
  ok('The superseded database is kept, not deleted',
     !!(rj && rj.previousKeptAt && fs.existsSync(rj.previousKeptAt)), String(rj && rj.previousKeptAt));
  ok('And it says what to do next', /Restart/i.test(String(rj && rj.next)), String(rj && rj.next));

  sec('AND THE RESTORED DATABASE ACTUALLY SERVES');
  // The only test of a restore that means anything: a real person signs in to it.
  server.close();
  process.env.MIRROR_DB = target;
  delete require.cache[require.resolve('../server/index')];
  const restored = require('../server/index');
  await restored.bootstrap();
  const s2 = restored.app.listen(0);
  await new Promise(r => s2.once('listening', r));
  const base2 = 'http://127.0.0.1:' + s2.address().port;
  const back = await login('pilar@respaldo.test', 'Una-copia-de-seguridad-7', base2);
  ok('Her password still works after the restore', back.status === 200, String(back.status));
  const bj = await back.json();
  ok('And she is still the manager of her clinic',
     bj.user && bj.user.role === 'manager' && bj.user.clinicName === 'Clínica Respaldo',
     JSON.stringify(bj.user && bj.user.clinicName));
  const health = await (await fetch(base2 + '/api/health')).json();
  ok('The instance reports healthy', health.status === 'ok', JSON.stringify(health.status));
  s2.close();
  done('signed in to a restored database');

sec('MIRROR_MODE=production SEEDS NOTHING AT ALL');
  // `hosted` still creates the Wild Magic demo clinic with safe passwords.
  // An instance real clinics buy into must contain nothing but real clinics,
  // so `production` seeds no clinic, no account and no password.
  {
    const seed = require('../server/seed');
    const prodDb = path.join(tmp, 'production.db');
    const Database = require('../server/database');
    const pdb = new Database(prodDb);
    await pdb.initialize();
    await tenancy.migrate(pdb);

    const was = process.env.MIRROR_MODE;
    process.env.MIRROR_MODE = 'production';
    const result = await seed(pdb);
    ok('It reports that nothing was seeded', result.seeded === false, JSON.stringify(result.seeded));
    ok('And names the mode', result.mode === 'production', String(result.mode));
    ok('No clinic exists', (await pdb.get(`SELECT COUNT(*) n FROM clinics`)).n === 0);
    ok('No account exists', (await pdb.get(`SELECT COUNT(*) n FROM users`)).n === 0);
    for (const email of ['practitioner@wildmagic.es', 'practitioner2@wildmagic.es', 'manager@wildmagic.es']) {
      ok(`${email} does not exist`, !(await pdb.getUserByEmail(email)));
    }
    // And none of the published passwords opens anything, which is the check
    // that keeps meaning something after a restore from an older backup.
    for (const pw of seed.BURNED_PASSWORDS) {
      ok(`A published password opens nothing (${pw.slice(0, 8)}…)`,
         !(await pdb.authenticate('manager@wildmagic.es', pw)));
    }
    ok('production counts as hosted for the credential rules', seed.isHosted() === true);

    // And `hosted` still seeds, so the difference is real rather than a label.
    process.env.MIRROR_MODE = 'hosted';
    const hostedDb = path.join(tmp, 'hosted.db');
    const hdb = new Database(hostedDb);
    await hdb.initialize();
    await tenancy.migrate(hdb);
    process.env.MIRROR_SEED_PW_PRAC1 = 'a-long-enough-seed-password-1';
    process.env.MIRROR_SEED_PW_PRAC2 = 'a-long-enough-seed-password-2';
    process.env.MIRROR_SEED_PW_MGR = 'a-long-enough-seed-password-3';
    const hostedResult = await seed(hdb);
    ok('hosted DOES still seed, so production is a real difference',
       hostedResult.seeded === true && (await hdb.get(`SELECT COUNT(*) n FROM users`)).n === 3,
       JSON.stringify(hostedResult.seeded));
    if (was === undefined) delete process.env.MIRROR_MODE; else process.env.MIRROR_MODE = was;
    delete process.env.MIRROR_SEED_PW_PRAC1;
    delete process.env.MIRROR_SEED_PW_PRAC2;
    delete process.env.MIRROR_SEED_PW_MGR;
    done('production: 0 clinics, 0 accounts, 9 burned probes rejected');
  }

  sec('THE DEPLOYMENT KIT COVERS THE THINGS THAT TAKE A PRODUCT DOWN');
  {
    const ci = fs.readFileSync(path.join(ROOT, 'deploy', 'cloud-init.yaml'), 'utf8');

    // The database survives a restart and a redeploy.
    ok('The database lives outside the app directory',
       /MIRROR_DB=\/var\/lib\/mirror\/mirror\.db/.test(ci));
    ok('And that directory is the only thing the service may write',
       /ReadWritePaths=\/var\/lib\/mirror/.test(ci) && /ProtectSystem=strict/.test(ci));

    // It comes back by itself.
    ok('The service restarts after a crash', /Restart=always/.test(ci));
    ok('And starts again after a reboot', /WantedBy=multi-user\.target/.test(ci));
    ok('With a crash-loop ceiling so it cannot hammer the machine',
       /StartLimitIntervalSec=/.test(ci) && /StartLimitBurst=/.test(ci));

    // Logs cannot fill the disk — the most likely way this instance dies.
    ok('Caddy rolls its own access log', /roll_size\s+50MiB/.test(ci) && /roll_keep\s+10/.test(ci));
    ok('logrotate caps it as well', /logrotate\.d\/mirror-caddy/.test(ci) && /maxsize 50M/.test(ci));
    ok('And journald has a hard ceiling', /SystemMaxUse=500M/.test(ci) && /MaxRetentionSec=/.test(ci));

    // Going back.
    ok('There is a rollback script', /\/opt\/mirror\/rollback\.sh/.test(ci));
    ok('The deploy records what it replaced, so rollback needs no argument',
       /previous-ref/.test(ci) && /echo "\$CURRENT" > "\$PREV_FILE"/.test(ci));
    ok('A failed test run leaves the OLD service running',
       /if ! npm test; then[\s\S]{0,400}will not be started/.test(ci));
    ok('And puts the working tree back, so nothing is half-deployed',
       /TESTS FAILED[\s\S]{0,400}git checkout -f "\$CURRENT"/.test(ci));
    ok('A release that installs but will not answer rolls itself back',
       /DOES NOT ANSWER[\s\S]{0,300}git checkout -f "\$CURRENT"/.test(ci));
    ok('Every deploy takes a backup first', /backup\.js[\s\S]{0,200}git fetch/.test(ci));

    // The instance is production, not a demo with the lights off.
    ok('The env file sets production mode, not hosted',
       /MIRROR_MODE=production/.test(ci) && !/^\s*MIRROR_MODE=hosted\s*$/m.test(ci));
  }

  sec('THE DEPLOYMENT DESCRIPTION CARRIES NO SECRET');
  const ci = fs.readFileSync(path.join(ROOT, 'deploy', 'cloud-init.yaml'), 'utf8');
  ok('cloud-init.yaml exists', ci.length > 500);
  const SECRETS = /\b(sk_live_|sk_test_|whsec_[A-Za-z0-9]{6,}|rk_live_|pk_live_|re_[A-Za-z0-9]{12,}|AKIA[0-9A-Z]{10,})/;
  ok('No Stripe, mail or cloud credential is embedded in it',
     !SECRETS.test(ci), (ci.match(SECRETS) || [])[0]);
  ok('The env file it writes is root-only',
     /\/etc\/mirror\/mirror\.env[\s\S]{0,200}permissions: '0600'/.test(ci));
  ok('Every secret is a commented placeholder, not a value',
     /# STRIPE_SECRET_KEY=\s*$/m.test(ci) && /# MAIL_API_KEY=\s*$/m.test(ci));
  // The admin address used to be a placeholder here. It is now filled in, so
  // what matters is that Caddy has SOME address to send expiry warnings to —
  // a certificate that silently stops renewing is how a hosted product goes
  // dark on a Tuesday.
  ok('Caddy has an address for certificate-expiry warnings',
     /caddy/i.test(ci) && /\bemail\s+\S+@\S+\.\S+/.test(ci));
  ok('It installs the nightly backup AND the restore rehearsal',
     /mirror-backup\.timer/.test(ci) && /mirror-restore-drill\.timer/.test(ci));
  ok('It closes every port but ssh, http and https',
     /ufw default deny incoming/.test(ci) && /ufw allow 443/.test(ci));
  ok('The service runs as an unprivileged user',
     /User=mirror/.test(ci) && /NoNewPrivileges=true/.test(ci));
  {
    // Assert the ORDER, not a character distance: the deploy script grew a
    // pre-deploy backup and a rollback branch between these two lines, and a
    // fixed-width lookahead started failing for a reason that had nothing to
    // do with the property being tested.
    const iTest = ci.indexOf('npm test');
    const iRestart = ci.indexOf('systemctl restart mirror');
    ok('And the deploy runs the test suite before the service is restarted',
       iTest > 0 && iRestart > iTest, `npm test @${iTest}, restart @${iRestart}`);
  }

sec('EVERY SHELL SCRIPT IN THE DEPLOYMENT KIT PARSES');
  {
    // These scripts cannot be RUN here — there is no systemd, no Caddy and no
    // server. But they can be parsed, and a stray quote in the deploy script
    // is an outage discovered at the worst possible moment. One did exist:
    // `echo "MIRROR is running $REF""`, left by an edit, which shellcheck
    // found and this now keeps out.
    const yamlText = fs.readFileSync(path.join(ROOT, 'deploy', 'cloud-init.yaml'), 'utf8');
    // The scripts are literal blocks under `content: |`, indented six spaces.
    const blocks = [...yamlText.matchAll(/- path: (\/[^\n]*\.sh)\n(?:[^\n]*\n)*?\s+content: \|\n((?:      [^\n]*\n|\n)+)/g)];
    // Three now: deploy, rollback and the hostname derivation. Asserted as
    // "at least the ones we know about" so adding a fourth does not fail the
    // suite for existing.
    ok('Every shell script in the kit was found', blocks.length >= 3, String(blocks.length));
    for (const [, scriptPath, body] of blocks) {
      const src = body.split('\n').map(l => l.replace(/^ {6}/, '')).join('\n');
      const f = path.join(tmp, path.basename(scriptPath));
      fs.writeFileSync(f, src);
      let parsed = true, why = '';
      try { execFileSync('bash', ['-n', f], { stdio: ['ignore', 'pipe', 'pipe'] }); }
      catch (e) { parsed = false; why = String(e.stderr || e.message).slice(0, 160); }
      ok(`${path.basename(scriptPath)} parses as bash`, parsed, why);
      ok(`${path.basename(scriptPath)} fails fast rather than continuing past an error`,
         /set -euo pipefail/.test(src));
    }
  }

  sec('NO SECRET IS IN THE REPOSITORY EITHER');
  const tracked = execFileSync('git', ['ls-files'], { cwd: ROOT, encoding: 'utf8' }).trim().split('\n');
  const offenders = [];
  for (const f of tracked) {
    if (!/\.(js|json|yaml|yml|md|html|css|toml|command|sh)$/i.test(f)) continue;
    let body = '';
    try { body = fs.readFileSync(path.join(ROOT, f), 'utf8'); } catch (e) { continue; }
    // The stub's fake key is `sk_test_stub`, which is not a credential; a real
    // one has entropy after the prefix.
    const hit = body.match(/\b(sk_live_[A-Za-z0-9]{10,}|sk_test_[A-Za-z0-9]{16,}|whsec_[A-Za-z0-9]{16,}|re_[A-Za-z0-9]{16,})/);
    if (hit) offenders.push(`${f}: ${hit[0].slice(0, 14)}…`);
  }
  ok('No live or test API key is committed anywhere', offenders.length === 0, offenders.slice(0, 3).join(' | '));
  ok('The env file is not tracked', !tracked.includes('.env') && !tracked.some(f => /mirror\.env$/.test(f)),
     tracked.filter(f => /\.env/.test(f)).join(', '));

  fs.rmSync(tmp, { recursive: true, force: true });
  console.log('\n' + '═'.repeat(58));
  console.log(`RESULT: ${pass} passed, ${fail} failed`);
  if (fail) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  · ' + f)); }
  console.log('═'.repeat(58));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
