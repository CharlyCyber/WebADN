export async function navigateWithFallback(page, url, timeoutMs) {
  const errors = [];
  const shortWaitMs = Math.min(4000, Math.max(1200, Math.floor(timeoutMs * 0.2)));

  let navigateSuccess = false;
  let retries = 3;
  let delay = 1000;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await page.goto(url, { waitUntil: "commit", timeout: timeoutMs });
      navigateSuccess = true;
      break;
    } catch (error) {
      errors.push(`commit attempt ${attempt} failed: ${error.message}`);
      if (attempt < retries) {
        await page.waitForTimeout(delay);
        delay *= 2; // Backoff exponencial
      }
    }
  }

  if (!navigateSuccess) {
    errors.push("all navigation attempts timed out or failed");
  }

  try {
    await page.waitForLoadState("domcontentloaded", { timeout: shortWaitMs });
  } catch (error) {
    errors.push(`domcontentloaded delayed: ${error.message}`);
  }

  try {
    const hasBody = await page.evaluate(() => !!document.body && document.body.children.length > 0);
    if (!hasBody) {
      errors.push("empty body after DOMContentLoaded");
    }
  } catch {
    errors.push("cannot evaluate body presence");
  }

  try {
    const hasVisibleText = await page.evaluate(() => {
      const text = document.body?.innerText?.trim();
      return text && text.length > 50;
    });
    if (!hasVisibleText) {
      errors.push("no visible text content");
    }
  } catch {
    errors.push("cannot evaluate visible text");
  }

  try {
    await page.waitForLoadState("networkidle", { timeout: shortWaitMs });
  } catch {
    errors.push("networkidle timeout (analytics may be keeping connections open)");
  }

  try {
    await page.waitForTimeout(700);
  } catch {
    errors.push("settle timeout");
  }

  const diagnosis = diagnoseNavigation(errors);

  return {
    errors,
    diagnosis,
    success: errors.length <= 1
  };
}

function diagnoseNavigation(errors) {
  if (errors.length === 0) return "loaded successfully";

  const errorText = errors.join(" ").toLowerCase();

  if (errorText.includes("blocked") || errorText.includes("forbidden") || errorText.includes("403")) {
    return "blocked by bot protection or access denied";
  }
  if (errorText.includes("timeout") && errorText.includes("body")) {
    return "timeout before body rendered — likely heavy JS or geo/cookie wall";
  }
  if (errorText.includes("tls") || errorText.includes("certificate") || errorText.includes("ssl")) {
    return "TLS/network error";
  }
  if (errorText.includes("empty body")) {
    return "empty body — page may require JavaScript execution or authentication";
  }
  if (errors.length > 3) {
    return "multiple failures — site may be protected or unreachable";
  }

  return "loaded with warnings — extraction may be partial";
}
