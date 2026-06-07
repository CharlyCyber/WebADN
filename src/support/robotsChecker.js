export async function checkRobotsTxt(url) {
  const target = new URL(url);
  const pathname = target.pathname || "/";

  try {
    const res = await fetch(target.origin + "/robots.txt", {
      signal: AbortSignal.timeout(5000),
      headers: { "User-Agent": "SurgicalExtractor/1.0" }
    });
    if (!res.ok) return { allowed: true };

    const text = await res.text();
    const groups = [];
    let current = null;

    for (const rawLine of text.split(/\r?\n/)) {
      const line = rawLine.replace(/#.*$/, "").trim();
      if (!line) continue;
      const idx = line.indexOf(":");
      if (idx === -1) continue;
      const key = line.slice(0, idx).trim().toLowerCase();
      const value = line.slice(idx + 1).trim();

      if (key === "user-agent") {
        if (!current || current.rules.length > 0) {
          current = { agents: [value.toLowerCase()], rules: [] };
          groups.push(current);
        } else {
          current.agents.push(value.toLowerCase());
        }
      } else if ((key === "disallow" || key === "allow") && current) {
        current.rules.push({ type: key, path: value });
      }
    }

    const ua = "surgicalextractor";
    const group =
      groups.find(g => g.agents.some(a => a !== "*" && ua.includes(a))) ||
      groups.find(g => g.agents.includes("*"));

    if (!group) return { allowed: true, text };

    let best = { length: -1, type: "allow" };
    for (const rule of group.rules) {
      if (!rule.path) continue;
      if (pathname.startsWith(rule.path)) {
        if (
          rule.path.length > best.length ||
          (rule.path.length === best.length && rule.type === "allow")
        ) {
          best = { length: rule.path.length, type: rule.type };
        }
      }
    }

    return { allowed: best.type !== "disallow", text };
  } catch {
    return { allowed: true };
  }
}
