import { DatabaseSync } from "node:sqlite";
import { randomUUID } from "node:crypto";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { EventEmitter } from "node:events";

/**
 * Persistent job queue backed by SQLite.
 * - Survives restarts (jobs persisted to disk).
 * - Stable jobId returned immediately (HTTP 202 pattern).
 * - Pluggable: same interface a BullMQ adapter podria implementar mañana.
 *
 * Estados: queued | running | done | failed | canceled
 */
export class PersistentJobQueue extends EventEmitter {
  constructor({ dbPath = "./data/jobs.db", concurrency = 2, maxQueue = 50 } = {}) {
    super();
    mkdirSync(dirname(dbPath), { recursive: true });
    this.db = new DatabaseSync(dbPath);
    this.db.exec("PRAGMA journal_mode = WAL;");
    this.db.exec("PRAGMA synchronous = NORMAL;");

    this.db.exec(`
      CREATE TABLE IF NOT EXISTS jobs (
        id          TEXT PRIMARY KEY,
        user_id     TEXT,
        type        TEXT NOT NULL,
        payload     TEXT NOT NULL,
        status      TEXT NOT NULL DEFAULT 'queued',
        progress    TEXT,
        result      TEXT,
        error       TEXT,
        attempts    INTEGER NOT NULL DEFAULT 0,
        max_attempts INTEGER NOT NULL DEFAULT 1,
        created_at  INTEGER NOT NULL,
        started_at  INTEGER,
        finished_at INTEGER
      );
      CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status, created_at);
      CREATE INDEX IF NOT EXISTS idx_jobs_user   ON jobs(user_id, created_at DESC);
    `);

    // Recovery: si el proceso murio mientras un job estaba "running", devolverlo a la cola.
    this.db.prepare(
      `UPDATE jobs SET status='queued', started_at=NULL WHERE status='running'`
    ).run();

    this.concurrency = concurrency;
    this.maxQueue = maxQueue;
    this.active = 0;
    this.handlers = new Map(); // type -> async fn(payload, ctx)
    this.running = false;
  }

  registerHandler(type, fn) {
    this.handlers.set(type, fn);
  }

  enqueue({ type, payload, userId = null, maxAttempts = 1 }) {
    const queuedCount = this.db.prepare(
      `SELECT COUNT(*) AS n FROM jobs WHERE status='queued'`
    ).get().n;
    if (queuedCount >= this.maxQueue) {
      const err = new Error("queue_full");
      err.code = "QUEUE_FULL";
      throw err;
    }

    const id = randomUUID();
    const now = Date.now();
    this.db.prepare(`
      INSERT INTO jobs (id, user_id, type, payload, status, created_at, max_attempts)
      VALUES (?, ?, ?, ?, 'queued', ?, ?)
    `).run(id, userId, type, JSON.stringify(payload), now, maxAttempts);

    this.emit("enqueued", { id });
    this.#tick();
    return id;
  }

  get(id) {
    const row = this.db.prepare(`SELECT * FROM jobs WHERE id = ?`).get(id);
    return row ? this.#hydrate(row) : null;
  }

  listByUser(userId, limit = 25) {
    const rows = this.db.prepare(
      `SELECT * FROM jobs WHERE user_id = ? ORDER BY created_at DESC LIMIT ?`
    ).all(userId, limit);
    return rows.map(r => this.#hydrate(r));
  }

  cancel(id) {
    const info = this.db.prepare(
      `UPDATE jobs SET status='canceled', finished_at=? WHERE id=? AND status='queued'`
    ).run(Date.now(), id);
    return info.changes > 0;
  }

  start() {
    this.running = true;
    this.#tick();
  }

  stop() { this.running = false; }

  // ────────── internals ──────────

  #hydrate(row) {
    return {
      id: row.id,
      userId: row.user_id,
      type: row.type,
      payload: JSON.parse(row.payload),
      status: row.status,
      progress: row.progress ? JSON.parse(row.progress) : null,
      result: row.result ? JSON.parse(row.result) : null,
      error: row.error,
      attempts: row.attempts,
      maxAttempts: row.max_attempts,
      createdAt: row.created_at,
      startedAt: row.started_at,
      finishedAt: row.finished_at
    };
  }

  #updateProgress(id, progress) {
    this.db.prepare(`UPDATE jobs SET progress=? WHERE id=?`)
      .run(JSON.stringify(progress), id);
    this.emit("progress", { id, progress });
  }

  async #tick() {
    if (!this.running) return;
    while (this.active < this.concurrency) {
      const next = this.db.prepare(
        `SELECT * FROM jobs WHERE status='queued' ORDER BY created_at ASC LIMIT 1`
      ).get();
      if (!next) return;

      const claim = this.db.prepare(
        `UPDATE jobs SET status='running', started_at=?, attempts=attempts+1
         WHERE id=? AND status='queued'`
      ).run(Date.now(), next.id);
      if (claim.changes === 0) continue; // race lost

      this.active++;
      this.#process(this.#hydrate({ ...next, status: "running", started_at: Date.now() }))
        .catch(err => console.error("job_loop_error:", err))
        .finally(() => { this.active--; this.#tick(); });
    }
  }

  async #process(job) {
    const handler = this.handlers.get(job.type);
    if (!handler) {
      this.#fail(job.id, `no_handler_for_type:${job.type}`);
      return;
    }

    try {
      const result = await handler(job.payload, {
        jobId: job.id,
        userId: job.userId,
        onProgress: (p) => this.#updateProgress(job.id, p)
      });
      this.db.prepare(
        `UPDATE jobs SET status='done', result=?, finished_at=? WHERE id=?`
      ).run(JSON.stringify(result ?? null), Date.now(), job.id);
      this.emit("done", { id: job.id, result });
    } catch (err) {
      const msg = (err && err.message) || String(err);
      if (job.attempts < job.maxAttempts) {
        this.db.prepare(
          `UPDATE jobs SET status='queued', error=? WHERE id=?`
        ).run(msg, job.id);
      } else {
        this.#fail(job.id, msg);
      }
    }
  }

  #fail(id, message) {
    this.db.prepare(
      `UPDATE jobs SET status='failed', error=?, finished_at=? WHERE id=?`
    ).run(message, Date.now(), id);
    this.emit("failed", { id, error: message });
  }
}
