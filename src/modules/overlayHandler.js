const OVERLAY_PATTERNS = [
  { text: /accept.*(all|cookies?)|acceptar/i, action: "accept", priority: 2 },
  { text: /reject.*(all|cookies?)|rechazar/i, action: "reject", priority: 1 },
  { text: /allow.*(all|cookies?)|permitir/i, action: "accept", priority: 2 },
  { text: /necessary|necesari/i, action: "necessary", priority: 1 },
  { text: /continue|continuar|got it|entendido/i, action: "accept", priority: 3 },
  { text: /close|cerrar|dismiss|x/i, action: "close", priority: 4 },
  { text: /agree|consent/i, action: "accept", priority: 2 },
  { text: /decline|opt.?out/i, action: "reject", priority: 1 }
];

const OVERLAY_CONTAINER_SELECTORS = [
  "#onetrust-banner-sdk",
  "#cookie-banner",
  "#cookie-consent",
  "#cookieNotice",
  ".cookie-banner",
  ".cookie-consent",
  ".cookie-overlay",
  "[class*='cookie-banner']",
  "[class*='consent-banner']",
  "[class*='privacy-banner']",
  "[role='dialog']",
  "[data-cookiebanner]"
];

export async function handleOverlays(page) {
  const actions = [];

  for (const selector of OVERLAY_CONTAINER_SELECTORS) {
    const overlay = page.locator(selector);
    if (!(await overlay.count())) continue;
    if (!(await overlay.first().isVisible())) continue;

    const buttons = overlay.locator("button, a, [role=button]");
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      // Re-resolve the locator on every iteration. A previous click may have
      // navigated/reloaded the page, which destroys the execution context of
      // any cached ElementHandle and triggers
      // "Execution context was destroyed, most likely because of a navigation".
      const button = buttons.nth(i);

      let text;
      try {
        text = await button.textContent();
      } catch {
        // Execution context destroyed by an earlier navigation: stop
        // iterating this overlay rather than aborting the whole extraction.
        break;
      }
      if (!text) continue;

      for (const pattern of OVERLAY_PATTERNS) {
        if (pattern.text.test(text)) {
          try {
            await button.click({ timeout: 2000 });
            // Some consent SDKs reload after accepting. Wait for the load to
            // settle so downstream extractors get a stable context. If the
            // click didn't navigate, this just times out harmlessly.
            try {
              await page.waitForLoadState("domcontentloaded", { timeout: 2000 });
            } catch {
              // No navigation happened (or load already complete): fine.
            }
            actions.push(`Clicked "${text.trim().slice(0, 40)}" (${pattern.action})`);
            // After a successful click, every remaining handle/locator is
            // potentially stale (the page may have reloaded). Return early so
            // we never operate on a destroyed execution context again.
            return actions;
          } catch {
            // Click failed (detached, covered, etc.): try the next pattern/button.
          }
        }
      }
    }

    if (actions.length > 0) break;
  }

  return actions;
}
