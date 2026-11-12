// WebADN — dashboard. Tres pasos: Extraer → Kit → Medir.

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const safeColor = (c) => (/^#[0-9a-f]{3,8}$/i.test(String(c)) ? c : "transparent");
const shotUrl = (run, file) => `/api/screenshots?run=${encodeURIComponent(run)}&file=${encodeURIComponent(file)}`;
const hostOf = (url) => { try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return String(url || ""); } };
const vpName = (n) => ({ desktop: "escritorio", mobile: "móvil", "desktop+mobile": "escritorio y móvil" }[n] || String(n || ""));
const fmtDate = (iso) => { const d = new Date(iso); return isNaN(d) ? "" : d.toLocaleDateString(undefined, { day: "numeric", month: "short" }) + " · " + d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }); };

let kit = null;            // { run, url, niche, generatedAt, prompt, fingerprint }
let lastReport = null;     // { report, markdown }
let dimensionLabels = {};
let sectionViewport = "desktop";
let sectionIndex = 0;

// ---------- almacenamiento local ----------
// El servidor gratuito no tiene disco: los kits se guardan también en este dispositivo
// para poder seguir midiendo aunque el servidor se haya reiniciado.
const STORE_KEY = "webadn:kits";
const MAX_LOCAL = 4;
const readLocal = () => { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch { return []; } };
function saveLocal(entry) {
  let list = [entry, ...readLocal().filter((k) => k.run !== entry.run)].slice(0, MAX_LOCAL);
  while (list.length) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); return; } catch { list = list.slice(0, -1); }
  }
}

// ---------- utilidades de interfaz ----------
let toastTimer;
function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("is-on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-on"), 2600);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } finally { ta.remove(); }
  }
}

function downloadBlob(name, blob) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

function setView(name) {
  $$(".view").forEach((v) => v.classList.toggle("is-active", v.id === `view-${name}`));
  $$(".step").forEach((s) => s.classList.toggle("is-active", s.dataset.view === name));
  window.scrollTo({ top: 0 });
}
document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-view]");
  if (target) setView(target.dataset.view);
});

/** POST con respuesta SSE: llama a onEvent(tipo, datos) por cada evento. */
async function postStream(path, body, onEvent) {
  const response = await fetch(path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (response.status === 401) { location.href = "/login"; throw new Error("Sesión caducada."); }
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || `Error ${response.status}`);
  }
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    let cut;
    while ((cut = buffer.indexOf("\n\n")) !== -1) {
      const block = buffer.slice(0, cut);
      buffer = buffer.slice(cut + 2);
      const type = (block.match(/^event: (.+)$/m) || [])[1];
      const raw = block.split("\n").filter((l) => l.startsWith("data: ")).map((l) => l.slice(6)).join("\n");
      if (type && raw) onEvent(type, JSON.parse(raw));
    }
  }
}

/** Barra de progreso que avanza sola y se acerca al final sin llegar. */
function progressUI(prefix) {
  const wrap = $(`#${prefix}Progress`), bar = $(`#${prefix}Bar`), status = $(`#${prefix}Status`), button = $(`#${prefix}Button`);
  let timer, pct = 0;
  return {
    start(message) {
      pct = 4; bar.style.width = "4%"; wrap.hidden = false; button.disabled = true; status.textContent = message;
      timer = setInterval(() => { pct += (92 - pct) * 0.035; bar.style.width = `${pct}%`; }, 1000);
    },
    say(message) { if (message) status.textContent = message; },
    stop(message = "") {
      clearInterval(timer); button.disabled = false; bar.style.width = "100%"; status.textContent = message;
      if (!message) wrap.hidden = true;
    },
  };
}

// ---------- 1 · Extraer ----------
const extractProgress = progressUI("extract");

$("#extractForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  extractProgress.start("Despertando el navegador de medición…");
  let result = null;
  try {
    await postStream("/api/extract", {
      url: data.get("url"), niche: data.get("niche"), notes: data.get("notes") || "",
      force: data.get("force") === "on", ignoreRobots: data.get("ignoreRobots") === "on",
    }, (type, payload) => {
      if (type === "progress") extractProgress.say(payload.message);
      if (type === "error") throw new Error(payload.message);
      if (type === "result") result = payload;
    });
    if (!result) throw new Error("El servidor cortó la conexión (puede haberse quedado sin memoria). Inténtalo de nuevo.");
    extractProgress.stop();
    useKit(result, { save: true });
    setView("kit");
  } catch (error) {
    extractProgress.stop(`No se pudo extraer: ${error.message}`);
  }
});

async function loadRecents() {
  let server = [];
  try {
    const res = await fetch("/api/runs");
    if (res.ok) server = await res.json();
  } catch { /* sin conexión: solo los locales */ }
  const local = readLocal();
  const byRun = new Map();
  for (const k of local) byRun.set(k.run, { run: k.run, url: k.url, niche: k.niche, date: k.generatedAt, local: true });
  for (const r of server) if (!byRun.has(r.path)) byRun.set(r.path, { run: r.path, url: r.url, niche: r.niche, date: r.date });
  const items = [...byRun.values()].sort((a, b) => String(b.date).localeCompare(String(a.date))).slice(0, 8);
  $("#recentSheet").hidden = items.length === 0;
  $("#recentList").innerHTML = items.map((it) => `
    <li><button class="row" type="button" data-run="${esc(it.run)}">
      <span><b>${esc(hostOf(it.url))}</b><small>${esc(it.niche || "")}</small></span>
      <span class="tag">${esc(fmtDate(it.date))}</span>
    </button></li>`).join("");
}

$("#recentList").addEventListener("click", async (event) => {
  const row = event.target.closest("[data-run]");
  if (!row) return;
  const run = row.dataset.run;
  let entry = readLocal().find((k) => k.run === run);
  if (!entry) {
    try {
      const res = await fetch(`/api/run?run=${encodeURIComponent(run)}`);
      if (!res.ok) throw new Error();
      entry = await res.json();
    } catch {
      toast("Ese kit ya no está en el servidor");
      return;
    }
  }
  useKit(entry, { save: true });
  setView("kit");
});

// ---------- 2 · Kit ----------
function useKit(entry, { save = false } = {}) {
  kit = entry;
  lastReport = null;
  sectionIndex = 0;
  sectionViewport = "desktop";
  if (save) saveLocal(entry);
  renderKit();
  $("#report").innerHTML = "";
  loadRecents();
}

function renderKit() {
  const has = Boolean(kit);
  $("#kitEmpty").hidden = has;
  $("#kitBody").hidden = !has;
  $("#kitActions").hidden = !has;
  $("#measureEmpty").hidden = has;
  $("#measureBody").hidden = !has;
  if (!has) { $("#kitTitle").textContent = "Kit"; return; }

  const fp = kit.fingerprint || {};
  const d = fp.viewports?.desktop || Object.values(fp.viewports || {})[0] || {};
  const m = d.motion?.summary || {};
  const roles = d.type?.roles || {};
  const fonts = [...new Set(Object.values(roles).map((r) => r.family).filter(Boolean))];
  const colors = [d.color?.pageBg, ...(d.color?.texts || []).map((c) => c.value), ...(d.color?.accents || []).map((c) => c.value), ...(d.color?.backgrounds || []).map((c) => c.value)];
  const palette = [...new Set(colors.filter(Boolean))].slice(0, 6);
  const moves = (m.reveals || 0) + (m.scrubs || 0) + (m.pins || 0) + (m.loops || 0);

  $("#kitTitle").textContent = hostOf(kit.url);
  $("#kitLead").textContent = `Adaptado a «${kit.niche}». Copia el prompt, pégalo en tu IA y, cuando tengas el sitio publicado, mídelo.`;
  $("#kitStats").innerHTML = `
    <div class="stat"><span>Secciones</span><strong>${(d.sections || []).length}</strong><em>${Object.keys(fp.viewports || {}).length === 2 ? "escritorio y móvil" : esc(Object.keys(fp.viewports || {}).join(", "))}</em></div>
    <div class="stat"><span>Animaciones</span><strong>${moves}</strong><em>${m.reveals || 0} entradas · ${(m.scrubs || 0) + (m.pins || 0)} de scroll · ${m.loops || 0} bucles</em></div>
    <div class="stat"><span>Ritmo</span><strong>${m.revealDuration ? `${Math.round(m.revealDuration)}<small>ms</small>` : "—"}</strong><em>${esc(m.easing || "sin entradas medidas")}</em></div>
    <div class="stat"><span>Paleta y fuentes</span><div class="swatches">${palette.map((c) => `<i style="background:${safeColor(c)}" title="${esc(c)}"></i>`).join("")}</div><em>${esc(fonts.slice(0, 3).join(" · ") || "—")}</em></div>`;
  $("#promptText").textContent = kit.prompt || "";
  renderSections();
}

function renderSections() {
  const fp = kit.fingerprint || {};
  const names = Object.keys(fp.viewports || {});
  if (!names.includes(sectionViewport)) sectionViewport = names[0];
  const sections = fp.viewports?.[sectionViewport]?.sections || [];
  sectionIndex = Math.min(sectionIndex, Math.max(0, sections.length - 1));
  const list = $("#sectionList");
  list.classList.add("is-scroller");
  list.innerHTML = sections.map((s, i) => `
    <li><button class="row ${i === sectionIndex ? "is-active" : ""}" type="button" data-section="${i}">
      <span><b>#${i + 1} ${esc(s.role || "sección")}</b><small>${esc(s.headings?.[0]?.text || s.desc || "")}</small></span>
      <span class="tag">${s.hVh ? `${s.hVh}× pantalla` : ""}</span>
    </button></li>`).join("");

  const s = sections[sectionIndex];
  const detail = $("#sectionDetail");
  if (!s) { detail.innerHTML = `<p>Sin secciones medidas.</p>`; return; }
  detail.innerHTML = `
    ${names.length > 1 ? `<div class="seg">${names.map((n) => `<button type="button" data-viewport="${esc(n)}" class="${n === sectionViewport ? "is-active" : ""}">${n === "desktop" ? "Escritorio" : n === "mobile" ? "Móvil" : esc(n)}</button>`).join("")}</div>` : ""}
    <h3>#${sectionIndex + 1} ${esc(s.role || "sección")}</h3>
    <p>${esc(s.desc || "")}</p>
    ${s.shot ? `<img class="shot" alt="Captura de la sección ${sectionIndex + 1}" src="${shotUrl(kit.run, s.shot)}" />` : ""}
    <div class="facts">
      <div class="fact"><span>Altura</span><b>${s.hVh ?? "—"}× pantalla</b></div>
      <div class="fact"><span>Columnas</span><b>${s.cols ?? "—"}</b></div>
      <div class="fact"><span>Texto mayor</span><b>${s.maxFont ? `${Math.round(s.maxFont)} px` : "—"}</b></div>
      <div class="fact"><span>Fondo</span><b><i style="background:${safeColor(s.bg)}"></i>${esc(s.bg || "—")}</b></div>
    </div>`;
  const img = $(".shot", detail);
  if (img) img.addEventListener("error", () => {
    img.outerHTML = `<p class="shot-missing">La captura ya no está en el servidor (se reinició). Las medidas siguen en el prompt.</p>`;
  }, { once: true });
}

$("#sectionList").addEventListener("click", (event) => {
  const row = event.target.closest("[data-section]");
  if (!row) return;
  sectionIndex = Number(row.dataset.section);
  renderSections();
});
$("#sectionDetail").addEventListener("click", (event) => {
  const btn = event.target.closest("[data-viewport]");
  if (!btn) return;
  sectionViewport = btn.dataset.viewport;
  renderSections();
});

$("#copyPrompt").addEventListener("click", async () => {
  if (!kit) return;
  await copyText(kit.prompt);
  toast("Prompt copiado");
});

$("#downloadKit").addEventListener("click", async () => {
  if (!kit) return;
  try {
    const res = await fetch(`/api/kit?run=${encodeURIComponent(kit.run)}`);
    if (!res.ok) throw new Error();
    downloadBlob(`webadn-kit-${hostOf(kit.url)}.zip`, await res.blob());
  } catch {
    // El servidor ya no tiene el run: se entrega al menos el prompt guardado aquí.
    downloadBlob("PROMPT.md", new Blob([kit.prompt], { type: "text/markdown" }));
    toast("El zip ya no está en el servidor: descargado solo el prompt");
  }
});

// ---------- 3 · Medir ----------
const measureProgress = progressUI("measure");
const scoreClass = (n) => (n >= 85 ? "is-good" : n >= 65 ? "is-mid" : "is-bad");

$("#measureForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!kit) return;
  const data = new FormData(event.currentTarget);
  measureProgress.start("Abriendo tu sitio en el navegador de medición…");
  let result = null;
  try {
    await postStream("/api/compare", { run: kit.run, buildUrl: data.get("buildUrl"), ignore: data.getAll("ignore"), fingerprint: kit.fingerprint }, (type, payload) => {
      if (type === "progress") measureProgress.say(payload.message);
      if (type === "error") throw new Error(payload.message);
      if (type === "result") result = payload;
    });
    if (!result) throw new Error("El servidor cortó la conexión (puede haberse quedado sin memoria). Inténtalo de nuevo.");
    measureProgress.stop();
    lastReport = result;
    renderReport();
  } catch (error) {
    measureProgress.stop(`No se pudo medir: ${error.message}`);
  }
});

function renderReport() {
  const { report } = lastReport;
  const total = (report.issues || []).length;
  const vps = Object.entries(report.viewports || {});
  const dims = Object.entries(report.dimensions || {}).map(([key, value]) => `
    <li class="dim ${scoreClass(value)}"><span>${esc(dimensionLabels[key] || key)}</span><span class="bar"><i style="width:${Math.max(2, Math.round(value))}%"></i></span><b>${Math.round(value)}</b></li>`).join("");
  const issues = (report.issues || []).slice(0, 30).map((it) => `
    <li class="issue sev-${esc(it.severity || "low")}">
      <div class="issue-head"><b>${esc(it.title)}</b><small>${esc(vpName(it.viewport))} · ${esc(dimensionLabels[it.dimension] || it.dimension || "")}</small></div>
      <dl>
        ${it.expected !== undefined ? `<dt>Referencia</dt><dd>${esc(it.expected)}</dd>` : ""}
        ${it.actual !== undefined ? `<dt>Tu sitio</dt><dd>${esc(it.actual)}</dd>` : ""}
      </dl>
    </li>`).join("");
  const pairs = vps.map(([name, v]) => {
    const rows = (v.sections || []).filter((s) => s.refShot && s.buildShot).map((s) => `
      <figure>
        <figcaption>#${s.index + 1} ${esc(s.role || "")}${typeof s.visual === "number" ? ` · parecido ${Math.round(s.visual)}` : ""}</figcaption>
        <div class="pair">
          <div><span>Referencia</span><img class="shot" loading="lazy" alt="Referencia, sección ${s.index + 1}" src="${shotUrl(kit.run, s.refShot)}" /></div>
          <div><span>Tu sitio</span><img class="shot" loading="lazy" alt="Tu sitio, sección ${s.index + 1}" src="${shotUrl(kit.run, s.buildShot)}" /></div>
        </div>
      </figure>`).join("");
    return rows ? `<details class="more card pairs"><summary>Capturas lado a lado · ${esc(vpName(name))}</summary>${rows}</details>` : "";
  }).join("");

  $("#report").innerHTML = `
    <div class="card" style="margin-top:16px">
      <div class="score ${scoreClass(report.score)}" style="margin-top:0">
        <div class="score-num">${Math.round(report.score)}<small>/100</small></div>
        <div class="score-meta">
          <strong>${esc(report.verdict || "")}</strong>
          <span>Objetivo ${esc(report.target ?? 85)}${vps.length ? " · " + vps.map(([n, v]) => `${esc(vpName(n))} ${Math.round(v.score)}`).join(" · ") : ""}</span>
          ${report.ignored?.length ? `<span>Sin puntuar: ${esc(report.ignored.map((x) => dimensionLabels[x] || x).join(", "))}</span>` : ""}
        </div>
      </div>
      <ul class="dims">${dims}</ul>
      ${total ? `<div class="report-actions"><button class="btn btn-accent btn-block" id="copyReport" type="button">Copiar correcciones para tu IA</button></div>` : ""}
    </div>
    <section class="sheet">
      <h2>${total ? `Qué corregir (${total})` : "Sin diferencias relevantes"}</h2>
      ${total ? `<ol class="issues">${issues}</ol>` : ""}
      ${total > 30 ? `<p class="note">Se muestran las 30 de mayor impacto; al copiar se incluyen todas.</p>` : ""}
    </section>
    ${pairs}`;
  $("#copyReport")?.addEventListener("click", async () => {
    await copyText(lastReport.markdown || "");
    toast("Correcciones copiadas");
  });
  $$("#report img.shot").forEach((img) => img.addEventListener("error", () => { img.closest("figure")?.remove(); }, { once: true }));
  $("#report").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ---------- arranque ----------
fetch("/api/config").then((r) => (r.ok ? r.json() : null)).then((cfg) => {
  if (!cfg) return;
  dimensionLabels = cfg.dimensions || {};
  $("#logout").hidden = !cfg.auth;
  if (cfg.allowLocalBuilds) $("#buildUrl").placeholder = "http://localhost:5173";
}).catch(() => {});

const saved = readLocal();
if (saved.length) { kit = saved[0]; }
renderKit();
loadRecents();
