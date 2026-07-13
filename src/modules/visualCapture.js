import { writeFile } from "node:fs/promises";
import { join } from "node:path";

const THUMB_W = 96;
const THUMB_H = 54;

async function generateThumbnail(page) {
  const oldViewport = page.viewportSize();
  try {
    await page.setViewportSize({ width: THUMB_W * 2, height: THUMB_H * 2 });
    await page.waitForTimeout(100);
    const buf = await page.screenshot({ type: "jpeg", quality: 50, timeout: 5000 });
    return "data:image/jpeg;base64," + buf.toString("base64");
  } catch {
    return null;
  } finally {
    if (oldViewport) {
      try { await page.setViewportSize(oldViewport); } catch {}
    }
  }
}

/**
 * Safe screenshot wrapper — returns { filePath, thumbnail }.
 */
async function safeScreenshot(page, options, timeoutMs = 15000) {
  let buffer;
  try {
    buffer = await Promise.race([
      page.screenshot({ ...options, timeout: timeoutMs }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("screenshot safety timeout")), timeoutMs + 2000)
      )
    ]);
  } catch (err) {
    try {
      await page.evaluate(() => {
        try {
          const fonts = [...document.fonts];
          for (const font of fonts) {
            if (font.status === 'loading') {
              document.fonts.delete(font);
            }
          }
        } catch {}
      });
      buffer = await page.screenshot({ ...options, timeout: timeoutMs });
    } catch (retryErr) {
      try {
        await page.evaluate(() => {
          document.querySelectorAll('*').forEach(el => {
            el.style.animationPlayState = 'paused';
            el.style.transition = 'none';
          });
        });
        buffer = await page.screenshot({ ...options, timeout: timeoutMs });
      } catch {
        console.warn(`[visualCapture] Screenshot skipped: ${retryErr.message}`);
        return null;
      }
    }
  }
  if (!buffer) return null;
  if (options.path) {
    await writeFile(options.path, buffer);
  }
  return buffer;
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
    await page.waitForTimeout(1000);

    const bodyHeight = await page.evaluate(() => (document.body || document.documentElement).scrollHeight);
    const viewportHeight = viewport.height;
    const maxScroll = Math.max(0, bodyHeight - viewportHeight);

    for (const scrollPercent of scrollPoints) {
      const scrollY = Math.round((scrollPercent / 100) * maxScroll);
      await page.evaluate((y) => window.scrollTo(0, y), scrollY);
      await page.waitForTimeout(250);

      const screenshotName = `${viewport.name}-${String(scrollPercent).padStart(3, "0")}.png`;
      const screenshotPath = join(screenshotsPath, screenshotName);
      const raw = await safeScreenshot(page, { path: screenshotPath, fullPage: false });
      let thumbnail = null;
      if (raw) {
        try {
          thumbnail = await generateThumbnail(page);
        } catch {}
      }

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

      const quality = {
        colors: [],
        dominantRatio: 1,
        note: "TODO: sample screenshot buffer via png parser"
      };

      results.push({
        viewport: viewport.name,
        scrollPercent,
        scrollY,
        screenshotPath,
        screenshotName,
        thumbnail,
        screenshotQuality: quality,
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


