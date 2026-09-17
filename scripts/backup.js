#!/usr/bin/env node
/**
 * BACKUP — one file, hot, consistent, and restorable.
 *
 * WHY NOT `cp mirror.db backup.db`. SQLite writes in pages and keeps a
 * write-ahead log; copying the file while the server is running can capture a
 * torn state that opens fine and is missing the last transactions — the kind
 * of backup that looks successful for months and then fails on the one day it
 * is needed. `VACUUM INTO` asks SQLite itself to write a complete, consistent
 * copy of the database, while it is in use, with no downtime.
 *
 * WHAT IS BACKED UP. The whole database: clinics, users, sessions, invites,
 * orders, consultations, coaching, the audit trail. That is the entire state
 * of the business; the code comes from the repository and the secrets come
 * from the environment, so neither belongs in here.
 *
 * WHAT IS NOT. The env file. A backup that carries STRIPE_SECRET_KEY turns
 * every copy of it into a credential, and backups get copied to laptops.
 *
 * RETENTION. Keeps the newest `MIRROR_BACKUP_KEEP` files (default 14) and
 * deletes the rest, so a daily timer cannot fill the disk — which is itself a
 * way to take the product down.
 *
 * Run: node scripts/backup.js [outputDir]
 */
const fs = require('fs');
const path = require('path');

const DB = process.env.MIRROR_DB || path.join(__dirname, '..', 'mirror.db');
const OUT = process.argv[2] || process.env.MIRROR_BACKUP_DIR || path.join(path.dirname(DB), 'backups');
const KEEP = Math.max(1, Number(process.env.MIRROR_BACKUP_KEEP || 14));

function driver() {
  try { return { kind: 'node', mod: require('node:sqlite') }; }
  catch (e) {
    try { return { kind: 'sqlite3', mod: require('sqlite3') }; }
    catch (e2) { return { kind: 'none' }; }
  }
}

(async () => {
  if (!fs.existsSync(DB)) {
    console.error(`No database at ${DB}. Nothing to back up.`);
    process.exit(2);
  }
  fs.mkdirSync(OUT, { recursive: true });

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const target = path.join(OUT, `mirror-${stamp}.db`);
  const d = driver();
  if (d.kind === 'none') { console.error('No SQLite driver available.'); process.exit(3); }

  if (d.kind === 'node') {
    const db = new d.mod.DatabaseSync(DB, { readOnly: true });
    // The path is a SQL string literal here, so a quote in it would break the
    // statement. Backup directories are operator-chosen, but escaping costs
    // nothing and a broken backup command is discovered late.
    db.exec(`VACUUM INTO '${target.replace(/'/g, "''")}'`);
    db.close();
  } else {
    await new Promise((res, rej) => {
      const db = new d.mod.Database(DB, d.mod.OPEN_READONLY, e => e ? rej(e) : null);
      db.run(`VACUUM INTO ?`, [target], e => e ? rej(e) : db.close(res));
    });
  }

  // Verify the copy before trusting it: an unreadable backup is worse than no
  // backup, because it is counted as protection that does not exist.
  const check = (() => {
    if (d.kind !== 'node') return 'unverified (sqlite3 driver)';
    const c = new d.mod.DatabaseSync(target, { readOnly: true });
    const ok = c.prepare(`PRAGMA integrity_check`).get();
    const counts = {};
    for (const t of ['clinics', 'users', 'orders', 'attempts', 'audit_events']) {
      try { counts[t] = c.prepare(`SELECT COUNT(*) n FROM ${t}`).get().n; } catch (e) { counts[t] = null; }
    }
    c.close();
    return { integrity: ok.integrity_check || Object.values(ok)[0], counts };
  })();

  const bytes = fs.statSync(target).size;

  // Retention, newest first.
  const mine = fs.readdirSync(OUT).filter(f => /^mirror-.*\.db$/.test(f)).sort().reverse();
  const dropped = mine.slice(KEEP);
  for (const f of dropped) fs.unlinkSync(path.join(OUT, f));

  console.log(JSON.stringify({
    ok: true, from: DB, to: target, bytes,
    verified: check, kept: Math.min(mine.length, KEEP), deleted: dropped.length
  }, null, 2));
})().catch(e => { console.error('Backup failed:', e.message); process.exit(1); });
