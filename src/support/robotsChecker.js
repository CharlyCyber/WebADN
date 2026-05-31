export async function checkRobotsTxt(url) {
  const { origin } = new URL(url);
  try {
    const res = await fetch(origin + "/robots.txt", { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return { allowed: true };
    const text = await res.text();
    const lines = text.split("\n").map(l => l.trim());
    const isDisallowed = lines.some(l => l.startsWith("Disallow: /") && !l.startsWith("Disallow: /api"));
    return { allowed: !isDisallowed, text };
  } catch {
    return { allowed: true };
  }
}
