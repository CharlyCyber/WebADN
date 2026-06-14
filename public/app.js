const form = document.querySelector("#extractForm");
const runButton = document.querySelector(".run-button");
const statusDot = document.querySelector("#statusDot");
const statusText = document.querySelector("#statusText");
const copyButton = document.querySelector("#copyButton");
const downloadPrompt = document.querySelector("#downloadPrompt");
const downloadEvidence = document.querySelector("#downloadEvidence");
const techCount = document.querySelector("#techCount");
const fidelityScore = document.querySelector("#fidelityScore");
const promptSize = document.querySelector("#promptSize");
const artifactPath = document.querySelector("#artifactPath");
const tabBar = document.querySelector("#tabBar");
const runList = document.querySelector("#runList");
const screenshotGrid = document.querySelector("#screenshotGrid");

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

let lastResponse = null;
let metricAnimId = null;
let currentMetrics = { tech: 0, fidelity: 0, prompt: 0 };

const stepProgress = {
  queued: 2, "prepare-page": 5, navigate: 8, "intro-capture": 12,
  "page-data": 18, sections: 24, assets: 28, "css-features": 32,
  styles: 36, "js-tokens": 40, webgl: 44, "webgl-time": 48,
  structure: 52, screenshots: 58, motion: 64, hover: 70,
  metrics: 76, download: 82, prompt: 88, "prompt-done": 94
};

function animate(el, from, to, suffix, duration) {
  if (from === to) { el.textContent = `${to}${suffix}`; return; }
  const start = performance.now();
  if (metricAnimId) cancelAnimationFrame(metricAnimId);
  el.classList.add("metrics-pop");
  setTimeout(() => el.classList.remove("metrics-pop"), 400);
  function frame(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const v = Math.round(from + (to - from) * eased);
    el.textContent = `${v}${suffix}`;
    if (t < 1) metricAnimId = requestAnimationFrame(frame);
  }
  metricAnimId = requestAnimationFrame(frame);
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

// Cargar historial al arrancar la aplicación
window.addEventListener("DOMContentLoaded", () => {
  loadHistory();
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
    force: true
  };

  setActiveTab("prompt");
  document.querySelector("#outputPrompt").textContent = "Iniciando extracción...";
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
        document.querySelector("#outputPrompt").textContent = msg;
        setStatus(msg);
        advanceMetrics(data.step);
        return;
      }

      if (type === "error") {
        throw new Error(data.message);
      }

      if (type === "result") {
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

function downloadFile(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

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


