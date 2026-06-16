const LOG_LEVELS = { debug: 0, info: 1, warn: 2, error: 3 };
const CURRENT_LEVEL = LOG_LEVELS[process.env.LOG_LEVEL || "info"] ?? 1;

globalThis.__startTime = globalThis.__startTime || Date.now();

export function redactUrl(u) {
  try {
    const x = new URL(u);
    x.search = "";
    return x.toString();
  } catch {
    return "[invalid]";
  }
}

export function log(level, phase, msg, extra = {}) {
  const numericLevel = LOG_LEVELS[level.toLowerCase()] ?? 1;
  if (numericLevel < CURRENT_LEVEL) return;

  const cleanExtra = {};
  for (const [k, v] of Object.entries(extra)) {
    if (k === "url" || k === "error" || (typeof v === "string" && v.startsWith("http"))) {
      cleanExtra[k] = redactUrl(v);
    } else {
      cleanExtra[k] = v;
    }
  }

  const entry = {
    level: level.toUpperCase(),
    phase,
    msg,
    ts: new Date().toISOString(),
    elapsedMs: Date.now() - globalThis.__startTime,
    ...cleanExtra,
  };

  console.log(JSON.stringify(entry));
}
