const form = document.querySelector("#extractForm");
const runButton = document.querySelector(".run-button");
const statusDot = document.querySelector("#statusDot");
const statusText = document.querySelector("#statusText");
const copyButton = document.querySelector("#copyButton");
const downloadPrompt = document.querySelector("#downloadPrompt");
const downloadEvidence = document.querySelector("#downloadEvidence");
const exportToAIStudio = document.querySelector("#exportToAIStudio");
const resetButton = document.querySelector("#resetButton");
const stopServer = document.querySelector("#stopServer");
const techCount = document.querySelector("#techCount");
const fidelityScore = document.querySelector("#fidelityScore");
const promptSize = document.querySelector("#promptSize");
const artifactPath = document.querySelector("#artifactPath");
const tabBar = document.querySelector("#tabBar");
const runList = document.querySelector("#runList");
const screenshotGrid = document.querySelector("#screenshotGrid");

// --- Dynamic project sections list (Client Brief) ---
const sectionsList = document.querySelector("#sectionsList");
const addSectionBtn = document.querySelector("#addSection");
let sectionSeq = 0;

// Sugerencias rápidas para el datalist de cada sección.
const COMMON_SECTIONS = ["Hero", "Sobre nosotros", "Servicios", "Portafolio", "Procesos", "Testimonios", "Pricing", "FAQ", "Equipo", "Blog", "Contacto", "Footer"];

/**
 * Añade una fila a la lista de secciones del sitio.
 * @param {{name?:string, copy?:string}} [initial]  Valores precargados (ej. al abrir un run del historial).
 */
function addSection(initial = {}) {
  if (!sectionsList) return;
  const id = ++sectionSeq;
  const row = document.createElement("div");
  row.className = "section-row";
  row.dataset.row = id;

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Nombre de la sección (ej: Hero)";
  nameInput.value = initial.name || "";
  nameInput.setAttribute("list", "sectionSuggestions");
  nameInput.setAttribute("aria-label", "Nombre de la sección");

  const copyInput = document.createElement("textarea");
  copyInput.placeholder = "Descripción / copy / objetivo de esta sección";
  copyInput.value = initial.copy || "";
  copyInput.setAttribute("aria-label", "Descripción de la sección");

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "remove-section";
  removeBtn.textContent = "×";
  removeBtn.title = "Quitar sección";
  removeBtn.setAttribute("aria-label", "Quitar sección");
  removeBtn.addEventListener("click", () => {
    row.remove();
  });

  row.appendChild(nameInput);
  row.appendChild(copyInput);
  row.appendChild(removeBtn);
  sectionsList.appendChild(row);
}

/**
 * Recolecta el brief completo introducido por el usuario.
 * Devuelve un objeto plano listo para serializar en el payload.
 */
function collectClientBrief() {
  const sections = [];
  if (sectionsList) {
    for (const row of sectionsList.querySelectorAll(".section-row")) {
      const [nameInput, copyInput] = row.querySelectorAll("input, textarea");
      const name = (nameInput?.value || "").trim();
      const copy = (copyInput?.value || "").trim();
      if (name || copy) {
        sections.push({ name: name || "(sin título)", copy });
      }
    }
  }

  const brief = {
    brandName: (document.querySelector("#brandName")?.value || "").trim(),
    niche: (document.querySelector("#niche")?.value || "").trim(),
    audience: (document.querySelector("#audience")?.value || "").trim(),
    tone: (document.querySelector("#tone")?.value || "").trim(),
    sections,
    extraBrief: (document.querySelector("#extraBrief")?.value || "").trim()
  };

  // Solo devolvemos el brief si contiene algo de información útil.
  const hasContent = Object.values(brief).some((v) =>
    Array.isArray(v) ? v.length > 0 : Boolean(v)
  );
  return hasContent ? brief : null;
}

/**
 * Puebla el formulario del brief desde un objeto (ej. run del historial).
 * @param {object|null} [brief]
 */
function populateClientBrief(brief) {
  document.querySelector("#brandName").value = brief?.brandName || "";
  // niche se puebla aparte en loadHistoryRun, pero toleramos que venga aquí.
  if (brief?.niche && !document.querySelector("#niche").value) {
    document.querySelector("#niche").value = brief.niche;
  }
  document.querySelector("#audience").value = brief?.audience || "";
  document.querySelector("#tone").value = brief?.tone || "";
  document.querySelector("#extraBrief").value = brief?.extraBrief || "";

  if (sectionsList) sectionsList.innerHTML = "";
  for (const s of brief?.sections || []) {
    addSection(s);
  }
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

let lastResponse = null;
// Una animación por elemento: antes todas las métricas compartían un único ID
// global, de modo que animate() cancelaba la animación de otra métrica al
// arrancar la suya. settleMetrics() encadenaba 3 animate() y la animación de
// fidelity quedaba cancelada antes de renderizar, dejando el badge congelado
// en el último valor de pre-animación (76 % del paso "metrics"). Cada elemento
// gestiona ahora su propio requestAnimationFrame.
const metricAnimByEl = new WeakMap();
let currentMetrics = { tech: 0, fidelity: 0, prompt: 0 };

const stepProgress = {
  queued: 2, "prepare-page": 5, navigate: 8, "intro-capture": 12,
  "page-data": 18, sections: 24, assets: 28, "css-features": 32,
  styles: 36, "js-tokens": 40, webgl: 44, "webgl-time": 48,
  structure: 52, screenshots: 58, motion: 64, hover: 70,
  metrics: 76, download: 82, prompt: 88, "prompt-done": 94
};

function animate(el, from, to, suffix, duration) {
  // Solo cancela la animación previa de ESTE elemento, no la de otros badges.
  const prev = metricAnimByEl.get(el);
  if (prev) cancelAnimationFrame(prev);
  metricAnimByEl.delete(el);
  if (from === to) { el.textContent = `${to}${suffix}`; return; }
  const start = performance.now();
  el.classList.add("metrics-pop");
  setTimeout(() => el.classList.remove("metrics-pop"), 400);
  function frame(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const v = Math.round(from + (to - from) * eased);
    el.textContent = `${v}${suffix}`;
    if (t < 1) {
      metricAnimByEl.set(el, requestAnimationFrame(frame));
    } else {
      metricAnimByEl.delete(el);
    }
  }
  metricAnimByEl.set(el, requestAnimationFrame(frame));
}

function resetMetrics() {
  currentMetrics = { tech: 0, fidelity: 0, prompt: 0 };
  techCount.textContent = "0";
  fidelityScore.textContent = "-";
  promptSize.textContent = "0kb";
}

function advanceMetrics(step) {
  const pct = stepProgress[step];
  if (pct === undefined) return;
  const fTarget = Math.max(currentMetrics.fidelity, pct);
  animate(fidelityScore, currentMetrics.fidelity, fTarget, "%", 350);
  currentMetrics.fidelity = fTarget;
  const tTarget = Math.min(Math.round(pct * 0.15), 14);
  if (tTarget !== currentMetrics.tech) {
    animate(techCount, currentMetrics.tech, tTarget, "", 300);
    currentMetrics.tech = tTarget;
  }
  const pTarget = Math.max(1, Math.round(pct * 0.4));
  if (pTarget !== currentMetrics.prompt) {
    animate(promptSize, currentMetrics.prompt, pTarget, "kb", 300);
    currentMetrics.prompt = pTarget;
  }
}

function settleMetrics(finalTech, finalFidelity, finalPromptKb) {
  animate(techCount, currentMetrics.tech, finalTech, "", 600);
  animate(fidelityScore, currentMetrics.fidelity, finalFidelity, "%", 800);
  animate(promptSize, currentMetrics.prompt, finalPromptKb, "kb", 600);
  currentMetrics = { tech: finalTech, fidelity: finalFidelity, prompt: finalPromptKb };
}

// ---------------------------------------------------------------------------
// scannerView — animación ASCII "radar/scanner" que ocupa #outputPrompt durante
// la extracción. Reemplaza el texto de estado plano que antes se duplicaba con
// el header (#statusText). El nombre del paso sigue apareciendo en el header;
// aquí se muestra el progreso como una barra ASCII + un sweep radial animado.
// Patrón de bucle: requestAnimationFrame con handle cancelable, como animate().
// Respeta prefers-reduced-motion pintando un solo frame estático.
// ---------------------------------------------------------------------------
const outputPromptEl = document.querySelector("#outputPrompt");

const scannerView = (() => {
  const GRID_H = 11;            // alto interior de la rejilla
  const FRAME_MS = 90;          // ~11 fps; suave y barato
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let rafId = null;
  let lastTick = 0;
  let angle = -Math.PI / 2;   // el sweep arranca apuntando arriba
  let pulse = 0;              // para el eco expansivo del núcleo
  let currentStep = "queued";
  let currentPct = stepProgress["queued"] || 2;
  let running = false;

  // Mapa "step -> etiqueta corta" para el pie del frame.
  const STEP_LABEL = {
    queued: "queue", navigate: "navigate", "intro-capture": "intro",
    "prepare-page": "prep", "page-data": "page", sections: "sections",
    assets: "assets", "css-features": "css", styles: "styles",
    "js-tokens": "js", webgl: "webgl", "webgl-time": "webgl-t",
    structure: "structure", screenshots: "scans", motion: "motion",
    hover: "hover", metrics: "metrics", download: "download",
    "auto-preset": "preset", "pixel-color": "palette",
    "llm-interpret": "ia-vision", prompt: "prompt", "prompt-done": "ready",
    cache: "cache", "cache-error": "cache",
  };

  function buildGrid(cx, cy, width) {
    const rows = [];
    for (let y = 0; y < GRID_H; y++) {
      let line = "";
      for (let x = 0; x < width; x++) {
        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        // Hueco cuadrado en el centro para la etiqueta "ADN".
        if (Math.abs(dx) <= 2 && Math.abs(dy) <= 0) { line += " "; continue; }
        // Marcadores de anillos concéntricos tenues.
        if (Math.round(dist) === 3 || Math.round(dist) === 6 || Math.round(dist) === 9) {
          line += "·";
          continue;
        }
        // Sweep radial: glifo barrido si su ángulo está cerca del sweep actual.
        const cellAngle = Math.atan2(dy, dx);
        let diff = cellAngle - angle;
        while (diff > Math.PI) diff -= 2 * Math.PI;
        while (diff < -Math.PI) diff += 2 * Math.PI;
        if (Math.abs(diff) < 0.30) {
          line += dist < 4 ? "▓" : "▒";
          continue;
        }
        if (Math.abs(diff) < 0.55) {
          line += "░";
          continue;
        }
        line += " ";
      }
      rows.push(line);
    }
    return rows;
  }

  function progressBar(pct) {
    const total = 22;
    const filled = Math.max(0, Math.min(total, Math.round((pct / 100) * total)));
    return "▰".repeat(filled) + "▱".repeat(total - filled);
  }

  // Rellena/pada una línea (sin bordes) hasta exactamente width glifos.
  function padTo(str, width) {
    if (str.length === width) return str;
    if (str.length > width) return str.slice(0, width);
    return str + " ".repeat(width - str.length);
  }

  function render() {
    // El footer (barra + % + label) define el ancho interior: todas las líneas
    // se ajustan a ese ancho para que la caja sea siempre rectangular.
    const pctStr = String(currentPct).padStart(3, " ");
    const label = (STEP_LABEL[currentStep] || currentStep).padEnd(10, " ").slice(0, 10);
    const bar = progressBar(currentPct);
    const footInner = ` ${bar} ${pctStr}% · ${label} `;
    const innerW = footInner.length;

    // Reconstruye la rejilla con el nuevo ancho, centrando el núcleo.
    const gx = (innerW - 1) / 2;
    const gy = (GRID_H - 1) / 2;
    const grid = buildGrid(gx, gy, innerW);
    const mid = Math.floor(GRID_H / 2);
    const core = "ADN";
    const coreStart = Math.floor((innerW - core.length) / 2);
    grid[mid] = padTo(grid[mid], innerW);
    grid[mid] = grid[mid].slice(0, coreStart) + core + grid[mid].slice(coreStart + core.length);

    const top = "╭" + "─".repeat(innerW) + "╮";
    const bot = "╰" + "─".repeat(innerW) + "╯";
    const side = "│";
    const coreFlick = pulse < 0.5 ? "●" : "◉";

    const body = grid.map((line, i) => {
      const inner = padTo(line, innerW);
      if (i === mid) {
        // Fila media: pulso del sensor en los laterales del marco.
        return "◆" + inner + coreFlick;
      }
      return side + inner + side;
    });

    const foot = side + footInner + side;
    const padTop = Math.max(0, Math.floor((12 - GRID_H) / 2));
    const lines = [top, ...body, foot, bot];
    const block = "\n".repeat(padTop) + lines.join("\n") + "\n";
    outputPromptEl.textContent = block;
    outputPromptEl.classList.add("pre--scanning");
  }

  function tick(now) {
    if (!running) return;
    if (now - lastTick >= FRAME_MS) {
      lastTick = now;
      angle += 0.34;       // velocidad de rotación del sweep
      pulse = (pulse + 0.08) % 1;
      render();
    }
    rafId = requestAnimationFrame(tick);
  }

  function start() {
    outputPromptEl.classList.add("pre--scanning");
    if (reduceMotion) { running = true; render(); return; }
    if (running) return;
    running = true;
    lastTick = 0;
    rafId = requestAnimationFrame(tick);
  }

  function stop() {
    running = false;
    if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
    outputPromptEl.classList.remove("pre--scanning");
  }

  function setStep(step) {
    currentStep = step;
    if (stepProgress[step] !== undefined) currentPct = stepProgress[step];
    if (!running) return;
    if (reduceMotion) render();
  }

  return { start, stop, setStep };
})();

// Cargar historial al arrancar la aplicación
window.addEventListener("DOMContentLoaded", () => {
  loadHistory();

  // Inicializar lista dinámica de secciones (datalog suggestions + 1 fila por defecto)
  if (addSectionBtn) {
    addSectionBtn.addEventListener("click", () => addSection());
    // Sembrar 2 filas iniciales comunes para guiar al usuario.
    addSection({ name: "Hero" });
    addSection({ name: "Servicios" });
  }
});

async function loadHistory() {
  try {
    const res = await fetch("/api/runs");
    if (!res.ok) return;
    const runs = await res.json();
    
    if (runs.length === 0) {
      runList.innerHTML = `<p style="color:var(--text-muted);">No runs in history.</p>`;
      return;
    }

    runList.innerHTML = runs.map(run => `
      <div class="run-item">
        <div style="display:flex; flex-direction:column; gap:4px;">
          <span style="font-weight: 600; font-family: var(--font-mono); color: var(--text);">${esc(run.domain)}</span>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${esc(run.niche)} &bull; ${new Date(run.date).toLocaleString()}</span>
          <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${esc(run.technologies.join(", "))}</span>
        </div>
        <div style="display:flex; gap:12px; align-items:center;">
          <span style="background: var(--accent); color: #fff; padding: 4px 8px; border-radius: 4px; font-family: var(--font-mono); font-weight: 500; font-size: 0.8rem;">Fidelity: ${esc(String(run.fidelityScore))}%</span>
          <button class="copy-button" data-run-path="${esc(run.path)}" style="cursor:pointer; padding: 6px 12px; font-size: 0.8rem;">Cargar</button>
        </div>
      </div>
    `).join("");

    runList.querySelectorAll("[data-run-path]").forEach(btn => {
      btn.addEventListener("click", () => loadHistoryRun(btn.dataset.runPath));
    });
  } catch (err) {
    console.error("Error al cargar historial:", err);
  }
}

// Inyectar en window para hacerlo accesible a través de onclick en los templates inline
window.loadHistoryRun = async function(runPath) {
  setStatus("Cargando run...");
  try {
    const res = await fetch("/api/runs");
    if (!res.ok) return;
    const runs = await res.json();
    const targetRun = runs.find(r => r.path === runPath);
    if (!targetRun) return;

    // Poblar formulario
    document.querySelector("#url").value = targetRun.url;
    document.querySelector("#niche").value = targetRun.niche;

    // Llamar a /api/extract con force=false (caché inmediato)
    setActiveTab("prompt");
    document.querySelector("#outputPrompt").textContent = "Cargando datos desde caché...";
    setRunning(true);

    const response = await fetch("/api/extract", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: targetRun.url, niche: targetRun.niche, force: false })
    });

    if (!response.ok) throw new Error("Fallo al cargar run");
    
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let eventType = null;
    let eventData = "";

    const flush = () => {
      if (eventType && eventData) {
        let parsed;
        try { parsed = JSON.parse(eventData); }
        catch (e) { console.error("SSE JSON parse fail", e, eventData.slice(0, 200)); eventType = null; eventData = ""; return; }
        if (eventType === "result") {
          lastResponse = parsed;
          document.querySelector("#outputPrompt").textContent = parsed.prompt;
          populateEvidenceTabs(parsed.evidence);
          // Restaurar el brief del cliente desde el run cargado (si existe).
          if (parsed.evidence?.clientBrief) {
            populateClientBrief(parsed.evidence.clientBrief);
          }
          const ft = parsed.evidence?.inspection?.technologies?.length || 0;
          const ff = parsed.fidelityScore?.overall || 0;
          const pk = Math.max(1, Math.round(new Blob([parsed.prompt]).size / 1024));
          settleMetrics(ft, ff, pk);
          if (parsed.artifactPath) {
            artifactPath.textContent = `Cargado: ${parsed.artifactPath}`;
          }
          renderScreenshotsGrid(parsed.evidence, parsed.artifactPath);
          setStatus("Cargado de caché");
        }
      }
      eventType = null;
      eventData = "";
    };

    while (true) {
      const { done, value } = await reader.read();
      if (done) { flush(); break; }
      buffer += decoder.decode(value, { stream: true });

      let nl;
      while ((nl = buffer.indexOf("\n")) !== -1) {
        const line = buffer.slice(0, nl);
        buffer = buffer.slice(nl + 1);

        if (line === "") {
          flush();
        } else if (line.startsWith("event: ")) {
          eventType = line.slice(7).trim();
        } else if (line.startsWith("data: ")) {
          eventData = eventData ? eventData + "\n" + line.slice(6) : line.slice(6);
        }
      }
    }
  } catch (err) {
    setStatus("Error al cargar");
    console.error(err);
  } finally {
    setRunning(false);
  }
};

function renderScreenshotsGrid(evidence, runPath) {
  const visualEvidence = evidence?.inspection?.visualEvidence || [];
  const runName = runPath.split(/[/\\]/).pop();

  if (visualEvidence.length === 0) {
    screenshotGrid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1;">No screenshots captured yet.</p>`;
    return;
  }

  screenshotGrid.innerHTML = visualEvidence.map(ev => `
    <div style="border:1px solid var(--border); border-radius:var(--radius); overflow:hidden; display:flex; flex-direction:column; background:var(--surface);">
      <img src="/api/screenshots?run=${encodeURIComponent(runName)}&file=${encodeURIComponent(ev.screenshotName)}" style="width:100%; height:auto; object-fit:contain; border-bottom:1px solid var(--border);" alt="${ev.viewport}">
      <div style="padding:8px; font-family:var(--font-mono); font-size:0.75rem; text-align:center; color:var(--text);">
        <strong>${ev.viewport.toUpperCase()}</strong> (${ev.scrollPercent}%)
      </div>
    </div>
  `).join("");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  setRunning(true);

  const payload = {
    url: document.querySelector("#url").value,
    niche: document.querySelector("#niche").value,
    preset: document.querySelector("#preset").value,
    ignoreRobots: document.querySelector("[name=ignoreRobots]").checked,
    clientBrief: collectClientBrief(),
    force: true
  };

  setActiveTab("prompt");
  scannerView.start();
  scannerView.setStep("queued");
  document.querySelector("#outputSections").textContent = "Esperando datos...";
  document.querySelector("#outputStyles").textContent = "Esperando datos...";
  document.querySelector("#outputMotion").textContent = "Esperando datos...";
  document.querySelector("#outputAssets").textContent = "Esperando datos...";
  document.querySelector("#outputRisks").textContent = "Esperando datos...";
  screenshotGrid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1; font-family:var(--font-sans);">Capturando viewports en background...</p>`;

  const statusMap = {
    "page-data": "Extrayendo datos de página...",
    "sections": "Mapeando secciones...",
    "assets": "Extrayendo assets...",
    "css-features": "Analizando features CSS...",
    "styles": "Extrayendo estilos...",
    "webgl": "Inspeccionando WebGL...",
    "structure": "Extrayendo estructura...",
    "screenshots": "Capturando viewports...",
    "motion": "Muestreando animaciones...",
    "hover": "Analizando hovers...",
    "download": "Descargando assets..."
  };

  try {
    const response = await fetch("/api/extract", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({ error: "Extracción fallida" }));
      throw new Error(err.error);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let eventType = null;
    let eventData = "";

    const flush = () => {
      if (eventType && eventData) {
        let parsed;
        try { parsed = JSON.parse(eventData); }
        catch (e) { console.error("SSE JSON parse fail", e, eventData.slice(0, 200)); eventType = null; eventData = ""; return; }
        handleEvent(eventType, parsed);
      }
      eventType = null;
      eventData = "";
    };

    while (true) {
      const { done, value } = await reader.read();
      if (done) { flush(); break; }
      buffer += decoder.decode(value, { stream: true });

      let nl;
      while ((nl = buffer.indexOf("\n")) !== -1) {
        const line = buffer.slice(0, nl);
        buffer = buffer.slice(nl + 1);

        if (line === "") {
          flush();
        } else if (line.startsWith("event: ")) {
          eventType = line.slice(7).trim();
        } else if (line.startsWith("data: ")) {
          eventData = eventData ? eventData + "\n" + line.slice(6) : line.slice(6);
        }
      }
    }

    function handleEvent(type, data) {
      if (type === "progress") {
        const msg = statusMap[data.step] || data.message;
        // El texto del paso va al header (#statusText). En #outputPrompt corre
        // la animación scannerView, que absorbe el paso para su barra de progreso.
        scannerView.setStep(data.step);
        setStatus(msg);
        advanceMetrics(data.step);
        return;
      }

      if (type === "error") {
        scannerView.stop();
        throw new Error(data.message);
      }

      if (type === "result") {
        scannerView.stop();
        lastResponse = data;
        document.querySelector("#outputPrompt").textContent = data.prompt;
        populateEvidenceTabs(data.evidence);

        if (data.artifactPath) {
          artifactPath.textContent = `Guardado: ${data.artifactPath}`;
        }

        const ft = data.evidence?.inspection?.technologies?.length || 0;
        const ff = data.fidelityScore?.overall || 0;
        const pk = Math.max(1, Math.round(new Blob([data.prompt]).size / 1024));
        settleMetrics(ft, ff, pk);

        renderScreenshotsGrid(data.evidence, data.artifactPath);
        loadHistory();
        setStatus("Completado");
      }
    }
  } catch (error) {
    scannerView.stop();
    document.querySelector("#outputPrompt").textContent = error.message;
    setStatus("Error");
  } finally {
    setRunning(false);
  }
});

function populateEvidenceTabs(evidence) {
  if (!evidence) return;

  const insp = evidence.inspection || {};

  const sections = insp.sections || [];
  document.querySelector("#outputSections").textContent = sections.length
    ? JSON.stringify(sections.map((s) => ({
        index: s.index,
        role: s.role,
        confidence: s.confidence,
        height: s.height,
        fullViewport: s.isFullViewport,
        headings: s.textHierarchy?.map((h) => h.text),
        ctas: s.ctaText
      })), null, 2)
    : "No section map available.";

  const motion = insp.motionRecipes || [];
  document.querySelector("#outputMotion").textContent = motion.length
    ? JSON.stringify(motion, null, 2)
    : "No motion recipes detected.";

  const assets = insp.assets;
  document.querySelector("#outputAssets").textContent = assets
    ? JSON.stringify({
        images: assets.images?.length || 0,
        videos: assets.videos?.length || 0,
        fonts: assets.fonts?.length || 0,
        scripts: assets.scripts?.length || 0,
        inlineSvgs: assets.inlineSvgCount,
        canvases: assets.canvasCount,
        heavyAssets: assets.suspiciousHeavyAssets?.length || 0
      }, null, 2)
    : "No asset manifest available.";

  const styles = insp.styles;
  document.querySelector("#outputStyles").textContent = styles
    ? formatStyles(styles)
    : "No style data extracted.";

  const risks = insp.risks || [];
  const webglRisks = insp.webgl?.performanceRisk?.risks || [];
  const allRisks = [...risks, ...webglRisks];
  document.querySelector("#outputRisks").textContent = allRisks.length
    ? allRisks.map((r) => `- ${r}`).join("\n")
    : "No risks detected.";
}

function formatStyles(styles) {
  const parts = [];
  parts.push(`/* Total CSS rules: ${styles.totalRuleCount} */`);
  parts.push(`/* External sheets: ${(styles.externalSheets || []).length} */\n`);

  if (styles.cssVariableMap && Object.keys(styles.cssVariableMap).length) {
    parts.push("/* CSS Variables */");
    for (const [key, val] of Object.entries(styles.cssVariableMap)) {
      parts.push(`${key}: ${val};`);
    }
    parts.push("");
  }

  if (styles.keyframes && styles.keyframes.length) {
    parts.push("/* @keyframes */");
    for (const kf of styles.keyframes) {
      parts.push(kf.css);
    }
    parts.push("");
  }

  if (styles.fontFaces && styles.fontFaces.length) {
    parts.push("/* @font-face */");
    for (const ff of styles.fontFaces) {
      parts.push(ff.css);
    }
    parts.push("");
  }

  if (styles.mediaQueries && styles.mediaQueries.length) {
    parts.push("/* @media */");
    for (const mq of styles.mediaQueries) {
      parts.push(mq.css);
    }
    parts.push("");
  }

  parts.push("/* Selector Rules (first 100) */");
  const rules = (styles.styleRules || []).slice(0, 100);
  for (const rule of rules) {
    parts.push(rule.css);
  }
  if (styles.styleRules && styles.styleRules.length > 100) {
    parts.push(`/* ... and ${styles.styleRules.length - 100} more rules */`);
  }

  return parts.join("\n");
}

tabBar.addEventListener("click", (event) => {
  const tab = event.target.closest(".tab");
  if (!tab) return;
  setActiveTab(tab.dataset.tab);
});

function setActiveTab(name) {
  tabBar.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === name));
  document.querySelectorAll(".tab-pane").forEach((p) => p.classList.toggle("active", p.id === `output${name.charAt(0).toUpperCase() + name.slice(1)}`));
}

copyButton.addEventListener("click", async () => {
  const prompt = document.querySelector("#outputPrompt").textContent;
  await navigator.clipboard.writeText(prompt);
  const original = copyButton.textContent;
  copyButton.textContent = "Copied";
  setTimeout(() => {
    copyButton.textContent = original;
  }, 1200);
});

downloadPrompt.addEventListener("click", () => {
  if (!lastResponse) return;
  downloadFile("prompt.md", lastResponse.prompt, "text/markdown");
});

downloadEvidence.addEventListener("click", () => {
  if (!lastResponse) return;
  downloadFile("evidence.json", JSON.stringify(lastResponse.evidence, null, 2), "application/json");
});

exportToAIStudio.addEventListener("click", async () => {
  if (!lastResponse) return;

  const brief = collectClientBrief();
  const niche = brief?.niche || document.querySelector("#niche").value || "sitio web profesional";
  const promptContent = lastResponse.prompt;

  // Bloque de contexto del proyecto construido a partir del brief del usuario.
  const contextLines = [`- Nicho/Tipo de negocio: ${niche}`];
  if (brief?.brandName) contextLines.push(`- Marca/Proyecto: ${brief.brandName}`);
  if (brief?.audience) contextLines.push(`- Audiencia objetivo: ${brief.audience}`);
  if (brief?.tone) contextLines.push(`- Tono de voz: ${brief.tone}`);
  if (brief?.sections?.length) {
    const secs = brief.sections.map((s) => `  • ${s.name}${s.copy ? ` — ${s.copy}` : ""}`).join("\n");
    contextLines.push(`- Secciones del sitio:\n${secs}`);
  }

  const briefNote = brief?.extraBrief
    ? `\n**NOTAS ADICIONALES DEL CLIENTE:**\n${brief.extraBrief}\n`
    : "";

  // Crear un prompt en lenguaje natural estructurado para Google AI Studio
  const aiStudioPrompt = `Crea el sitio web o landing page que aparece en el código adjunto.

**CONTEXTO DEL PROYECTO:**
${contextLines.join("\n")}
- Debe ser completamente responsivo para todos los dispositivos (móvil, tablet, desktop)
${briefNote}
**INSTRUCCIONES:**
Analiza el siguiente mega-prompt técnico que contiene toda la información extraída de un sitio web de referencia. Utiliza esta información para recrear un sitio web con la misma estructura, diseño, estilos, animaciones y funcionalidades. Prioriza los requisitos del cliente expresados arriba cuando entren en conflicto con la referencia.

---

${promptContent}

---

**REQUISITOS TÉCNICOS:**
1. El sitio debe ser 100% responsivo y funcionar perfectamente en todos los dispositivos
2. Mantén la fidelidad visual y estructural del sitio original
3. Implementa todas las animaciones y efectos de motion descritos
4. Asegúrate de que la tipografía, colores y spacing sean consistentes
5. El código debe ser limpio, semántico y optimizado para SEO
6. Respeta estrictamente la estructura de secciones y la copy provista en el contexto del proyecto

Genera el código completo del sitio web basándote en esta especificación técnica.`;

  // AI Studio no tiene deep-link oficial para precargar prompts, así que
  // abrimos la app base (/app/apps) y copiamos el prompt al portapapeles.
  // El usuario solo tiene que pegar (Ctrl+V) en el editor que elija.
  const aiStudioUrl = "https://aistudio.google.com/app/apps";

  // Copiar el prompt al portapapeles antes de abrir, para que esté listo
  // cuando el usuario llegue a la app. Manejamos fallos de permisos/HTTPS.
  let clipboardOk = false;
  try {
    await navigator.clipboard.writeText(aiStudioPrompt);
    clipboardOk = true;
  } catch (err) {
    clipboardOk = false;
  }

  // Abrir en una nueva pestaña. window.open devuelve null si el popup
  // fue bloqueado (o el navegador no permite window.open desde un handler
  // asíncrono tras un await); en ese caso avisamos al usuario.
  const popup = window.open(aiStudioUrl, "_blank");

  // Feedback visual al usuario (honesto según el resultado)
  const originalText = exportToAIStudio.textContent;
  let feedbackText;
  if (popup && clipboardOk) {
    feedbackText = "✓ Abierto — pega con Ctrl+V";
  } else if (popup && !clipboardOk) {
    feedbackText = "✓ Abierto (portapapeles falló: copia manual)";
  } else if (!popup && clipboardOk) {
    feedbackText = "Popup bloqueado — ve a aistudio.google.com y pega con Ctrl+V";
  } else {
    feedbackText = "Popup bloqueado y portapapeles falló — copia el prompt a mano";
  }
  exportToAIStudio.textContent = feedbackText;
  setTimeout(() => {
    exportToAIStudio.textContent = originalText;
  }, 3500);
});

function downloadFile(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

// --- Stop server (detiene el servidor node que corre oculto en background) ---
stopServer.addEventListener("click", async () => {
  if (!confirm("¿Detener el servidor? Tendrás que volver a arrancarlo con start-dashboard-hidden.vbs.")) return;
  stopServer.disabled = true;
  stopServer.textContent = "Deteniendo…";
  try {
    await fetch("/api/shutdown", { method: "POST" });
  } catch {
    /* fetch falla al cortarse la conexión: es el comportamiento esperado */
  }
  setStatus("Servidor detenido");
  runButton.disabled = true;
  resetButton.disabled = true;
  document.querySelectorAll(".output-actions .copy-button").forEach(b => { b.disabled = true; });
  stopServer.textContent = "Detenido ✓";
});

// --- Reset: vuelve la app al estado inicial (formulario + resultados) ---
const PLACEHOLDERS = {
  prompt: "El resultado aparecerá aquí.",
  sections: "Section map will appear here.",
  styles: "CSS styles will appear here.",
  motion: "Motion recipes will appear here.",
  assets: "Asset manifest will appear here.",
  risks: "Risk findings will appear here."
};
const NO_SCREENSHOTS = `<p style="color:var(--text-muted); grid-column:1/-1;">No screenshots captured yet.</p>`;

function resetWorkspace() {
  // Si hay una extracción en curso, confirmar antes de dejar el stream huérfano.
  if (runButton.disabled && !confirm("Hay una extracción en curso. ¿Resetear de todas formas?")) return;

  // Formulario: reset nativo + repoder preset/checkbox que reset() puede dejar mal.
  form.reset();
  const presetEl = document.querySelector("#preset");
  if (presetEl) presetEl.value = "surgical";
  const ignoreRobots = document.querySelector("[name=ignoreRobots]");
  if (ignoreRobots) ignoreRobots.checked = false;

  // Secciones: limpiar y re-sembra las 2 filas iniciales (como en DOMContentLoaded).
  if (sectionsList) sectionsList.innerHTML = "";
  addSection({ name: "Hero" });
  addSection({ name: "Servicios" });

  // Resultados: paneles a su placeholder y capturas/artefacto vacíos.
  document.querySelector("#outputPrompt").textContent = PLACEHOLDERS.prompt;
  document.querySelector("#outputSections").textContent = PLACEHOLDERS.sections;
  document.querySelector("#outputStyles").textContent = PLACEHOLDERS.styles;
  document.querySelector("#outputMotion").textContent = PLACEHOLDERS.motion;
  document.querySelector("#outputAssets").textContent = PLACEHOLDERS.assets;
  document.querySelector("#outputRisks").textContent = PLACEHOLDERS.risks;
  screenshotGrid.innerHTML = NO_SCREENSHOTS;
  artifactPath.textContent = "";
  lastResponse = null;

  // Métricas, estado y pestaña activa.
  resetMetrics();
  setStatus("Idle");
  setActiveTab("prompt");
}

resetButton.addEventListener("click", resetWorkspace);

function setRunning(isRunning) {
  statusDot.classList.toggle("running", isRunning);
  runButton.classList.toggle("loading", isRunning);
  runButton.disabled = isRunning;
  if (isRunning) {
    setStatus("Running");
    resetMetrics();
  }
}

function setStatus(value) {
  statusText.textContent = value;
}


