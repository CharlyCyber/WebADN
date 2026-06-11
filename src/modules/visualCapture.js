import { writeFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Safe screenshot wrapper — uses Promise.race to prevent Playwright's
 * internal font-loading wait from blocking indefinitely.
 * Falls back to a no-timeout screenshot if the timed one fails.
 */
async function safeScreenshot(page, options, timeoutMs = 15000) {
  try {
    await Promise.race([
      page.screenshot({ ...options, timeout: timeoutMs }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("screenshot safety timeout")), timeoutMs + 2000)
      )
    ]);
  } catch (err) {
    // If the normal screenshot timed out waiting for fonts, bypass fonts and retry
    try {
      await page.evaluate(() => {
        // Force all font faces to loaded status by replacing them
        try {
          const fonts = [...document.fonts];
          for (const font of fonts) {
            if (font.status === 'loading') {
              document.fonts.delete(font);
            }
          }
        } catch {}
      });
      await page.screenshot({ ...options, timeout: timeoutMs });
    } catch (retryErr) {
      // Last resort: capture what we can with animations disabled
      try {
        await page.evaluate(() => {
          document.querySelectorAll('*').forEach(el => {
            el.style.animationPlayState = 'paused';
            el.style.transition = 'none';
          });
        });
        await page.screenshot({ ...options, timeout: timeoutMs });
      } catch {
        // Silently skip this screenshot — better than crashing the entire pipeline
        console.warn(`[visualCapture] Screenshot skipped: ${retryErr.message}`);
      }
    }
  }
}

export const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 1100 },
  { name: "tablet", width: 834, height: 1112 },
  { name: "mobile", width: 390, height: 844 },
  { name: "wide", width: 1920, height: 1080 }
];

const SCROLL_POINTS = [0, 25, 50, 75, 100];

export async function captureViewportMatrix(page, screenshotsPath, preset = "standard") {
  const viewports = getViewportsForPreset(preset);
  const scrollPoints = getScrollPointsForPreset(preset);
  const results = [];

  // Esperar a que las fuentes estén cargadas (con timeout de 5s para evitar bloqueo infinito)
  try {
    await page.evaluate(async () => {
      await Promise.race([
        document.fonts.ready,
        new Promise(r => setTimeout(r, 5000))
      ]);
    });
  } catch {}

  // Forzar carga inmediata de imágenes perezosas (lazy load img)
  try {
    await page.evaluate(() => {
      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.loading = "eager";
      });
      document.querySelectorAll('[loading="lazy"]').forEach(el => {
        el.removeAttribute("loading");
      });
    });
  } catch {}

  // Hacer scroll progresivo hacia abajo y volver arriba para disparar lazy loads
  try {
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 120;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 30);
      });
    });
  } catch {}

  // Tiempo de asentamiento (2.5s) para que finalicen las animaciones de entrada
  await page.waitForTimeout(2500);

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.waitForTimeout(300);

    const bodyHeight = await page.evaluate(() => (document.body || document.documentElement).scrollHeight);
    const viewportHeight = viewport.height;
    const maxScroll = Math.max(0, bodyHeight - viewportHeight);

    for (const scrollPercent of scrollPoints) {
      const scrollY = Math.round((scrollPercent / 100) * maxScroll);
      await page.evaluate((y) => window.scrollTo(0, y), scrollY);
      await page.waitForTimeout(250);

      const screenshotName = `${viewport.name}-${String(scrollPercent).padStart(3, "0")}.png`;
      const screenshotPath = join(screenshotsPath, screenshotName);
      await safeScreenshot(page, { path: screenshotPath, fullPage: false });

      const domSnapshot = await page.evaluate(() => {
        const visibleElements = [];
        const visibleText = [];
        const dominantLayoutSignals = [];

        const elements = [...document.querySelectorAll("h1, h2, h3, h4, h5, h6, a, button, [role=button], img, video, canvas, svg, section, article, nav, header, footer, form, input, textarea, select")];
        const viewportTop = window.scrollY;
        const viewportBottom = viewportTop + window.innerHeight;

        for (const el of elements.slice(0, 200)) {
          const rect = el.getBoundingClientRect();
          const elTop = rect.top + window.scrollY;
          const elBottom = rect.bottom + window.scrollY;

          if (elBottom < viewportTop || elTop > viewportBottom) continue;

          const styles = getComputedStyle(el);
          const area = rect.width * rect.height;

          visibleElements.push({
            tag: el.tagName.toLowerCase(),
            text: (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 120),
            area: Math.round(area),
            position: { x: Math.round(rect.left), y: Math.round(rect.top), width: Math.round(rect.width), height: Math.round(rect.height) },
            background: styles.backgroundColor !== "rgba(0, 0, 0, 0)" ? styles.backgroundColor : null,
            backgroundImage: styles.backgroundImage !== "none" ? styles.backgroundImage.slice(0, 200) : null,
            transform: styles.transform !== "none" ? styles.transform : null,
            opacity: styles.opacity !== "1" ? parseFloat(styles.opacity) : null,
            zIndex: styles.zIndex !== "auto" ? parseInt(styles.zIndex) : null,
            position_type: styles.position
          });

          const text = (el.textContent || "").replace(/\s+/g, " ").trim();
          if (text && text.length > 2 && text.length < 300 && /^h[1-6]$/i.test(el.tagName)) {
            visibleText.push({ level: el.tagName, text });
          }
        }

        const topElements = visibleElements.sort((a, b) => b.area - a.area).slice(0, 20);

        const hasSticky = visibleElements.some((e) => e.position_type === "sticky");
        const hasFixed = visibleElements.some((e) => e.position_type === "fixed");
        const hasTransform = visibleElements.some((e) => e.transform);
        const hasOpacity = visibleElements.some((e) => e.opacity !== null);

        if (hasSticky) dominantLayoutSignals.push("sticky positioning active");
        if (hasFixed) dominantLayoutSignals.push("fixed positioning active");
        if (hasTransform) dominantLayoutSignals.push("transform-driven effects");
        if (hasOpacity) dominantLayoutSignals.push("opacity-based effects");

        return {
          visibleText: visibleText.slice(0, 30),
          visibleElements: topElements,
          dominantLayoutSignals
        };
      });

      results.push({
        viewport: viewport.name,
        scrollPercent,
        scrollY,
        screenshotPath,
        screenshotName,
        visibleText: domSnapshot.visibleText,
        visibleElements: domSnapshot.visibleElements,
        dominantLayoutSignals: domSnapshot.dominantLayoutSignals,
        bodyHeight,
        viewportHeight
      });
    }
  }

  return results;
}

function getViewportsForPreset(preset) {
  switch (preset) {
    case "fast":
      return [VIEWPORTS[0]];
    case "surgical":
      return VIEWPORTS;
    default:
      return [VIEWPORTS[0], VIEWPORTS[2]];
  }
}

function getScrollPointsForPreset(preset) {
  switch (preset) {
    case "fast":
      return [0, 50, 100];
    case "surgical":
      return SCROLL_POINTS;
    default:
      return [0, 25, 50, 75, 100];
  }
}


