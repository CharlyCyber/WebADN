let pool = [];
let poolSize = 0;

export async function initBrowserPool(size = 2) {
  if (pool.length >= size) return;
  const { chromium } = await import("playwright");
  const newBrowsers = await Promise.all(
    Array.from({ length: size - pool.length }, () => chromium.launch({ headless: true }))
  );
  pool.push(...newBrowsers);
  poolSize = pool.length;
}

export async function getBrowser() {
  if (pool.length === 0) {
    const { chromium } = await import("playwright");
    const b = await chromium.launch({ headless: true });
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
}