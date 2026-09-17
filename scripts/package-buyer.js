#!/usr/bin/env node
/**
 * BUILD THE BUYER PACKAGE
 *
 * Produces a folder a person can double-click, containing nothing they should
 * not see: no tests, no build scripts, no provenance documents, no README, no
 * repository. The launcher sits alone at the top level; everything the machine
 * needs is inside "MIRROR System Files".
 *
 * Dependencies are vendored, so the package runs with no install step on any
 * Mac with Node 22.5 or newer, online or offline.
 *
 * Run: node scripts/package-buyer.js [outputDir]
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const OUT = process.argv[2] || path.join(ROOT, '..', 'buyer-package');
const APP = path.join(OUT, 'MIRROR', 'MIRROR System Files');

const rm = p => fs.rmSync(p, { recursive: true, force: true });
const copy = (from, to) => fs.cpSync(from, to, { recursive: true });

// What the customer's machine needs, and nothing else.
const INCLUDE = ['server', 'public', 'build.json'];
// What must never reach a buyer folder.
const EXCLUDE_IN_SERVER = ['seed-demo.js'];

function words() {
  const w = ['amber', 'cedar', 'harbour', 'lantern', 'meridian', 'orchard',
             'quartz', 'ridge', 'sable', 'thistle', 'vellum', 'willow'];
  return `${w[crypto.randomInt(w.length)]}-${w[crypto.randomInt(w.length)]}-${crypto.randomInt(100, 999)}`;
}

rm(path.join(OUT, 'MIRROR'));
fs.mkdirSync(APP, { recursive: true });

for (const item of INCLUDE) copy(path.join(ROOT, item), path.join(APP, item));
for (const f of EXCLUDE_IN_SERVER) rm(path.join(APP, 'server', f));

// Vendored runtime dependencies — express, cors, uuid. All pure JavaScript,
// so the same folder runs on any machine without compiling anything.
//
// This used to fall back to an absolute path inside the sandbox that built the
// first package. That directory exists on no other machine, so the script was
// not portable: anybody else running it met a failure naming a path they had
// never heard of. The fallback is now the repository's own node_modules, which
// is where `npm ci` puts them.
const vendor = process.env.MIRROR_VENDOR || path.join(ROOT, 'node_modules');
if (!fs.existsSync(vendor)) {
  console.error(`Vendored modules not found at ${vendor}.`);
  console.error('Run `npm ci` first, or set MIRROR_VENDOR to a node_modules directory');
  console.error('containing express, cors and uuid.');
  process.exit(1);
}
for (const dep of ['express', 'cors', 'uuid']) {
  if (!fs.existsSync(path.join(vendor, dep))) {
    console.error(`${vendor} is missing "${dep}". Run \`npm ci\`, or point MIRROR_VENDOR elsewhere.`);
    process.exit(1);
  }
}
copy(vendor, path.join(APP, 'node_modules'));

// A minimal manifest. sqlite3 is optional: Node 22.5+ needs nothing, and older
// Node installs it on first run.
fs.writeFileSync(path.join(APP, 'package.json'), JSON.stringify({
  name: 'mirror-consultation-training-system',
  version: JSON.parse(fs.readFileSync(path.join(ROOT, 'build.json'), 'utf8')).version,
  private: true,
  main: 'server/index.js',
  optionalDependencies: { sqlite3: '^5.1.7' }
}, null, 2) + '\n');

// The two accounts that come with the package. These are generated per package
// and are NOT the demo passwords that were published to a public repository.
const creds = {
  practitioner: { email: 'practitioner@wildmagic.es', password: words() },
  manager:      { email: 'manager@wildmagic.es',      password: words() }
};

// The launcher, with this package's credentials wired into the seed.
let launcher = fs.readFileSync(path.join(ROOT, 'START MIRROR.command'), 'utf8');
launcher = launcher.replace('MIRROR_DB="$HERE/MIRROR System Files/your-work.db" \\',
  `MIRROR_SEED_PW_PRAC1="${creds.practitioner.password}" \\
MIRROR_SEED_PW_MGR="${creds.manager.password}" \\
MIRROR_SEED_PW_PRAC2="${words()}" \\
MIRROR_DB="$HERE/MIRROR System Files/your-work.db" \\`);
const launcherPath = path.join(OUT, 'MIRROR', 'START MIRROR.command');
fs.writeFileSync(launcherPath, launcher);
fs.chmodSync(launcherPath, 0o755);

// Sanity: nothing a buyer should not see.
const forbidden = [];
const walk = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
  const p = path.join(d, e.name);
  if (e.isDirectory()) { if (e.name !== 'node_modules') walk(p); return; }
  if (/^(README|CHANGELOG|LICENSE)/i.test(e.name)) forbidden.push(p);
  if (/\.(md|test\.js)$/i.test(e.name)) forbidden.push(p);
});
walk(path.join(OUT, 'MIRROR'));
if (forbidden.length) {
  console.error('Buyer package contains files a buyer should not see:');
  forbidden.forEach(f => console.error('  ' + path.relative(OUT, f)));
  process.exit(1);
}

const count = (() => { let n = 0; const w = d => fs.readdirSync(d, { withFileTypes: true })
  .forEach(e => e.isDirectory() ? w(path.join(d, e.name)) : n++); w(path.join(OUT, 'MIRROR')); return n; })();

console.log(`Buyer package: ${path.join(OUT, 'MIRROR')}`);
console.log(`  ${count} files, launcher is executable`);
console.log(`  practitioner  ${creds.practitioner.email}  ${creds.practitioner.password}`);
console.log(`  manager       ${creds.manager.email}  ${creds.manager.password}`);
fs.writeFileSync(path.join(OUT, 'credentials.txt'),
  `MIRROR Consultation Training System — accounts in this package\n\n` +
  `Practitioner  ${creds.practitioner.email}\n              ${creds.practitioner.password}\n\n` +
  `Manager       ${creds.manager.email}\n              ${creds.manager.password}\n`);
