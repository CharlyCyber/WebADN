export async function checkRobotsTxt(url, userAgent = "webadn") {
  const { origin, pathname } = new URL(url);

  try {
    const res = await fetch(origin + "/robots.txt", { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return { allowed: true };
    const text = await res.text();
    return { allowed: isPathAllowed(text, pathname || "/", userAgent), text };
  } catch {
    return { allowed: true };
  }
}

function isPathAllowed(robotsText, path, userAgent) {
  const lines = robotsText.split("\n").map(l => l.replace(/#.*$/, "").trim()).filter(Boolean);

  const groups = [];
  let current = null;
  for (const line of lines) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const field = line.slice(0, idx).trim().toLowerCase();
    const value = line.slice(idx + 1).trim();

    if (field === "user-agent") {
      if (current && current.rules.length === 0) current.agents.push(value.toLowerCase());
      else { current = { agents: [value.toLowerCase()], rules: [] }; groups.push(current); }
    } else if ((field === "disallow" || field === "allow") && current) {
      current.rules.push({ type: field, path: value });
    }
  }

  const ua = userAgent.toLowerCase();
  let group = groups.find(g => g.agents.some(a => a !== "*" && ua.includes(a)));
  if (!group) group = groups.find(g => g.agents.includes("*"));
  if (!group) return true;

  let decision = true;
  let longest = -1;
  for (const rule of group.rules) {
    if (rule.path === "") continue;
    if (path.startsWith(rule.path)) {
      if (rule.path.length > longest || (rule.path.length === longest && rule.type === "allow")) {
        longest = rule.path.length;
        decision = rule.type === "allow";
      }
    }
  }
  return decision;
}
