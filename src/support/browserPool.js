import { launchBrowser } from "./launchBrowser.js";

const POOL_ARGS = ["--js-flags=--max-old-space-size=512"];
let pool = [];
let poolSize = 0;
let idleTimer = null;
const IDLE_TIMEOUT_MS = 300_000;

function resetIdleTimer() {
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    drainBrowserPool();
  }, IDLE_TIMEOUT_MS);
  if (typeof idleTimer.unref === "function") idleTimer.unref();
}

export async function initBrowserPool(size = 2) {
  if (pool.length >= size) return;
  const newBrowsers = await Promise.all(
    Array.from({ length: size - pool.length }, () => launchBrowser({ extraArgs: POOL_ARGS }))
  );
  pool.push(...newBrowsers);
  poolSize = pool.length;
  resetIdleTimer();
}

export async function getBrowser() {
  resetIdleTimer();
  if (pool.length === 0) {
    const b = await launchBrowser({ extraArgs: POOL_ARGS });
    pool.push(b);
    poolSize = 1;
    return b;
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

export async function drainBrowserPool() {
  for (const b of pool) {
    try { await b.close(); } catch {}
  }
  pool = [];
  poolSize = 0;
  if (idleTimer) { clearTimeout(idleTimer); idleTimer = null; }
}