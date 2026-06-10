const form = document.querySelector("#extractForm");
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
      runList.innerHTML = `<p style="color:var(--muted);">No runs in history.</p>`;
      return;
    }

    runList.innerHTML = runs.map(run => `
      <div class="panel" style="padding: 1rem; border: 2px solid var(--line); border-radius: var(--radius); display: flex; justify-content: space-between; align-items: center; background: var(--panel);">
        <div style="display:flex; flex-direction:column; gap:4px;">
          <span style="font-weight: 600; font-family: var(--mono); color: var(--ink);">${esc(run.domain)}</span>
          <span style="font-size: 0.75rem; color: var(--muted);">${esc(run.niche)} &bull; ${new Date(run.date).toLocaleString()}</span>
          <span style="font-size: 0.75rem; color: var(--muted); font-family: var(--mono);">${esc(run.technologies.join(", "))}</span>
        </div>
        <div style="display:flex; gap:12px; align-items:center;">
          <span style="background: var(--acid); padding: 4px 8px; border: 2px solid var(--line); border-radius: 4px; font-weight: bold; font-size: 0.85rem;">Fidelity: ${esc(String(run.fidelityScore))}%</span>
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
          updateMetrics(parsed);
          if (parsed.fidelityScore) {
            fidelityScore.textContent = `${parsed.fidelityScore.overall}%`;
          }
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
    screenshotGrid.innerHTML = `<p style="color:var(--muted); grid-column:1/-1;">No screenshots captured yet.</p>`;
    return;
  }

  screenshotGrid.innerHTML = visualEvidence.map(ev => `
    <div style="border:2px solid var(--line); border-radius:var(--radius); overflow:hidden; display:flex; flex-direction:column; background:var(--panel-strong);">
      <img src="/api/screenshots?run=${encodeURIComponent(runName)}&file=${encodeURIComponent(ev.screenshotName)}" style="width:100%; height:auto; object-fit:contain; border-bottom:2px solid var(--line);" alt="${ev.viewport}">
      <div style="padding:8px; font-family:var(--mono); font-size:0.75rem; text-align:center; color:var(--ink);">
        <strong>${ev.viewport.toUpperCase()}</strong> (${ev.scrollPercent}%)
      </div>
    </div>
  `).join("");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  setRunning(true);

  const formData = new FormData(form);
  const payload = {
    url: formData.get("url"),
    niche: formData.get("niche"),
    preset: formData.get("preset"),
    ignoreRobots: formData.get("ignoreRobots") === "true",
    force: true
  };

  setActiveTab("prompt");
  document.querySelector("#outputPrompt").textContent = "Iniciando extracción...";
  document.querySelector("#outputSections").textContent = "Esperando datos...";
  document.querySelector("#outputStyles").textContent = "Esperando datos...";
  document.querySelector("#outputMotion").textContent = "Esperando datos...";
  document.querySelector("#outputAssets").textContent = "Esperando datos...";
  document.querySelector("#outputRisks").textContent = "Esperando datos...";
  screenshotGrid.innerHTML = `<p style="color:var(--muted); grid-column:1/-1;">Capturando viewports en background...</p>`;

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
        return;
      }

      if (type === "error") {
        throw new Error(data.message);
      }

      if (type === "result") {
        lastResponse = data;
        document.querySelector("#outputPrompt").textContent = data.prompt;
        populateEvidenceTabs(data.evidence);
        updateMetrics(data);

        if (data.fidelityScore) {
          fidelityScore.textContent = `${data.fidelityScore.overall}%`;
        }
        if (data.artifactPath) {
          artifactPath.textContent = `Guardado: ${data.artifactPath}`;
        }

        renderScreenshotsGrid(data.evidence, data.artifactPath);
        loadHistory(); // Recargar historial automáticamente
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
  if (isRunning) setStatus("Running");
}

function setStatus(value) {
  statusText.textContent = value;
}

function updateMetrics(data) {
  const insp = data.evidence?.inspection || {};
  const techSection = insp.technologies || [];
  techCount.textContent = techSection.length;
  promptSize.textContent = `${Math.max(1, Math.round(new Blob([data.prompt]).size / 1024))}kb`;
}
