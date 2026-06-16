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
    const overlay = await page.$(selector);
    if (!overlay) continue;

    const isVisible = await overlay.isVisible();
    if (!isVisible) continue;

    const buttons = await overlay.$$("button, a, [role=button]");

    for (const button of buttons) {
      const text = await button.textContent();
      if (!text) continue;

      for (const pattern of OVERLAY_PATTERNS) {
        if (pattern.text.test(text)) {
          try {
            await button.click();
            actions.push(`Clicked "${text.trim().slice(0, 40)}" (${pattern.action})`);
            await page.waitForTimeout(300);
            break;
          } catch {
            // Button may have been removed by previous click
          }
        }
      }
    }

    if (actions.length > 0) break;
  }

  return actions;
}
