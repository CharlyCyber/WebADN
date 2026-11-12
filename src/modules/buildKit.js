// Empaqueta el "Build Kit": lo que se le entrega al modelo que va a construir.
//   PROMPT.md         → encargo autocontenido (se puede pegar tal cual en un chat)
//   spec.json         → medidas exactas, legibles por máquina (fuente de verdad)
//   fingerprint.json  → huella completa para `webadn compare`
//   screenshots/      → capturas por sección (escritorio y móvil)
//   extras/brief.md   → brief largo heredado (CSS, keyframes, assets)

import { copyFile, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createZip } from "../support/zip.js";

export const KIT_DIR = "kit";
export const REF_SHOT_PREFIX = "ref-";

const fmt = (n, unit = "") => (n === null || n === undefined || n === "" ? "—" : `${n}${unit}`);
const state = (s) => {
  const p = [];
  if (s.opacity !== undefined && s.opacity !== 1) p.push(`opacity ${s.opacity}`);
  if (Math.abs(s.x || 0) >= 1) p.push(`x ${Math.round(s.x)}px`);
  if (Math.abs(s.y || 0) >= 1) p.push(`y ${Math.round(s.y)}px`);
  if (s.scale !== undefined && Math.abs(s.scale - 1) > 0.01) p.push(`scale ${s.scale}`);
  if (Math.abs(s.rotate || 0) >= 0.5) p.push(`rotate ${s.rotate}°`);
  if (s.clipPath) p.push(`clip-path ${s.clipPath}`);
  if (s.filter) p.push(`filter ${s.filter}`);
  return p.join(", ") || "estado natural";
};

/** spec.json = huella sin las rejillas de píxeles (no aportan nada al modelo). */
export function toSpec(fingerprint, meta = {}) {
  const spec = JSON.parse(JSON.stringify(fingerprint));
  for (const vp of Object.values(spec.viewports || {})) for (const s of vp.sections || []) delete s.grid;
  return { $schema: "webadn-spec/1", ...meta, ...spec };
}

function typeTable(d, m) {
  const roles = ["h1", "h2", "h3", "body", "button", "nav", "small"];
  const rows = ["| Rol | Familia | Escritorio | Móvil | Peso | Interlineado | Tracking | Transform |", "|---|---|---|---|---|---|---|---|"];
  for (const role of roles) {
    const r = d?.type?.roles?.[role]; const mr = m?.type?.roles?.[role];
    if (!r && !mr) continue;
    const x = r || mr;
    rows.push(`| ${role} | ${x.family}${x.generic ? ` (${x.generic})` : ""}${x.italic ? " itálica" : ""} | ${fmt(r?.size, "px")} | ${fmt(mr?.size, "px")} | ${x.weight} | ${x.lineHeight} | ${x.letterSpacing}em | ${x.transform || "—"} |`);
  }
  return rows.join("\n");
}

const KIND = { h1: "H1", h2: "H2", h3: "H3", h4: "H4", h5: "H5", h6: "H6", text: "Texto", button: "Botón", link: "Enlace", img: "Imagen", video: "Vídeo", canvas: "Canvas", svg: "SVG", card: "Tarjeta", field: "Campo" };
const rad = (r) => (r === "pill" ? "píldora" : r ? `radio ${r}px` : "");

function elementLine(e) {
  const group = e.n > 1 ? `${e.n} × ` : "";
  const bits = [`x ${e.x}% · ancho ${e.varW ? "medio " : ""}${e.w}%${e.varW ? " (cada uno según su texto)" : ""} · y ${e.y}px · alto ${e.h}px`];
  if (e.n > 1 && e.dir === "row") bits.push(`en fila, separación ${e.gap}% (el grupo ocupa ${e.span}% del ancho)`);
  if (e.n > 1 && e.dir === "column") bits.push(`apilados, separación ${e.gapY}px`);
  if (e.fs) bits.push(`${e.fs}px${e.fw ? `/${e.fw}` : ""}${e.font ? ` ${e.font}` : ""}${e.lh ? `, interlineado ${e.lh}` : ""}${e.ls ? `, tracking ${e.ls}em` : ""}${e.upper ? ", mayúsculas" : ""}`);
  if (e.lines) bits.push(`${e.lines} línea(s), ~${e.chars} caracteres${e.align && e.align !== "left" ? `, alineado ${e.align}` : ""}`);
  if (e.color) bits.push(`color ${e.color}`);
  if (e.bg || e.bgImage) bits.push(`fondo ${e.bg || ""}${e.bgImage ? ` ${e.bgImage === "gradient" ? "degradado" : "imagen"}` : ""}`.replace(/\s+/g, " ").trim());
  if (e.border) bits.push(`borde ${e.border}`);
  if (e.shadow) bits.push("con sombra");
  if (e.radius) bits.push(rad(e.radius));
  if (e.padX) bits.push(`padding lateral ${e.padX}px`);
  if (e.pad) bits.push(`padding ${e.pad}px`);
  if (e.ratio) bits.push(`proporción ${e.ratio}:1${e.fit && e.fit !== "fill" ? `, object-fit ${e.fit}` : ""}`);
  return `  - ${group}${KIND[e.k] || e.k}: ${bits.join(" · ")}`;
}

function blueprintBlock(s, ms) {
  const L = [];
  if (s.elements?.length) {
    const c = s.container;
    L.push(`- Plano en escritorio (x/ancho en % del ancho de pantalla; y/alto en px desde el inicio de la sección)${c ? ` · márgenes laterales del contenido: ${c.left}px izq. / ${c.right}px der.` : ""}:`);
    L.push(...s.elements.map(elementLine));
  }
  if (ms?.elements?.length) {
    const c = ms.container;
    L.push(`- Plano en móvil (390px)${c ? ` · márgenes laterales: ${c.left}px / ${c.right}px` : ""}:`);
    L.push(...ms.elements.slice(0, 10).map(elementLine));
  }
  return L;
}

function sectionBlock(s, ms) {
  const L = [];
  L.push(`### Sección ${s.index + 1} — ${s.role}${s.desc ? ` · \`${s.desc.split(" ")[0]}\`` : ""}`);
  L.push(`- Altura: ${s.hVh} × alto de pantalla en escritorio${ms ? `, ${ms.hVh} × en móvil` : ""}`);
  L.push(`- Fondo ${s.bg}${s.bgImage ? ` (+${s.bgImage === "gradient" ? "degradado" : "imagen"})` : ""}${s.bgMedia ? ", con medio a pantalla completa" : ""} · texto ${fmt(s.textColor)}`);
  L.push(`- Layout: ${s.cols} columna(s) en escritorio${ms ? `, ${ms.cols} en móvil` : ""} · titular alineado ${fmt(s.align)} · aire arriba ${fmt(s.padTop, "px")} / abajo ${fmt(s.padBottom, "px")}${ms ? ` (móvil ${fmt(ms.padTop, "px")} / ${fmt(ms.padBottom, "px")})` : ""}`);
  if (s.headings?.length) L.push(`- Titulares: ${s.headings.map((h) => `${h.tag} ${h.size}px ${h.family} ${h.weight}, ${h.lines} línea(s), ~${h.chars} caracteres`).join(" · ")}${ms?.maxFont ? ` (en móvil el mayor mide ${ms.maxFont}px)` : ""}`);
  else if (s.maxFont) L.push(`- Texto mayor: ${s.maxFont}px${ms?.maxFont ? ` (móvil ${ms.maxFont}px)` : ""}`);
  L.push(...blueprintBlock(s, ms));
  const c = s.counts || {};
  L.push(`- Contenido a rellenar: ~${s.chars || 0} caracteres de texto, ${c.images || 0} imagen(es), ${c.videos || 0} vídeo(s), ${c.canvas || 0} canvas, ${c.buttons || 0} botón(es), ${c.links || 0} enlace(s)`);
  const m = s.motion;
  if (m) {
    const bits = [];
    if (m.reveals) bits.push(`${m.reveals} entradas (${Object.keys(m.revealProps).join(" + ")}${m.revealDuration ? `, ${m.revealDuration}ms` : ""}${m.easing ? `, ${m.easing}` : ""}${m.stagger ? `, stagger ${m.stagger}ms` : ""}${m.revealOffsetY ? `, desde ${Math.round(m.revealOffsetY)}px` : ""})`);
    if (m.scrubs) bits.push(`${m.scrubs} elemento(s) ligados al scroll (${m.scrubProps.join(" + ")}${m.parallaxSpeeds?.length ? `, parallax ×${m.parallaxSpeeds.join(", ×")}` : ""})`);
    if (m.pinned) bits.push(`PIN: contenido clavado durante ${m.pinScrollPx}px de scroll`);
    if (m.horizontal) bits.push("desplazamiento horizontal ligado al scroll");
    if (m.loops) bits.push(`${m.loops} elemento(s) en bucle continuo`);
    L.push(`- Movimiento: ${bits.length ? bits.join(" · ") : "ninguno"}`);
  }
  if (s.shot) L.push(`- Captura: \`screenshots/${s.shot}\`${ms?.shot ? ` · móvil \`screenshots/${ms.shot}\`` : ""}`);
  return L.join("\n");
}

function motionDetail(d) {
  const L = [];
  const mo = d.motion || {};
  const load = (mo.reveals || []).filter((r) => r.onLoad);
  const scroll = (mo.reveals || []).filter((r) => !r.onLoad);
  const line = (r) => `- [sec ${r.section + 1}] \`${r.desc}\` — de (${state(r.from)}) a (${state(r.to)}); ${r.durationMs}ms${r.open ? "+" : ""}, retardo ${r.delayMs}ms${r.easing ? `, ${r.easing}` : ""} (${r.timing === "exact" ? "timing exacto" : "medido"})`;
  if (load.length) { L.push("### Animación de carga (al abrir la página)", ...load.slice(0, 20).map(line), ""); }
  if (scroll.length) { L.push("### Entradas al hacer scroll (se disparan al entrar en pantalla)", ...scroll.slice(0, 40).map(line)); if (scroll.length > 40) L.push(`- … ${scroll.length - 40} más en spec.json`); L.push(""); }
  if (mo.scrubs?.length) {
    L.push("### Ligado a la posición de scroll (scrub / parallax)");
    for (const s of mo.scrubs.slice(0, 25)) L.push(`- [sec ${s.section + 1}] \`${s.desc}\` — ${s.props.map((p) => `${p.prop} ${p.from} → ${p.to}${p.speed ? ` (velocidad ×${p.speed} respecto al scroll)` : ""}`).join("; ")} a lo largo de ~${s.scrollPx}px de scroll${s.horizontal ? " · MOVIMIENTO HORIZONTAL" : ""}`);
    L.push("");
  }
  if (mo.pins?.length) { L.push("### Pins (elementos clavados)"); for (const p of mo.pins) L.push(`- [sec ${p.section + 1}] \`${p.desc}\` (${p.size[0]}×${p.size[1]}px) queda fijo durante ${p.scrollPx}px de scroll (scrollY ${p.fromY} → ${p.toY})`); L.push(""); }
  if (mo.loops?.length || mo.cssAnimations?.length) {
    L.push("### Bucles continuos");
    for (const a of (mo.cssAnimations || []).slice(0, 10)) L.push(`- @keyframes \`${a.name}\`: ${a.duration}ms ${a.easing}, iteraciones ${a.iterations}, dirección ${a.direction} (${a.count} elemento(s))`);
    for (const l of (mo.loops || []).slice(0, 8)) L.push(`- [sec ${l.section + 1}] \`${l.desc}\` anima ${l.props.join(" + ") || "transform"} sin parar`);
    L.push("");
  }
  if (mo.fixed?.length) { L.push("### Elementos fijos en pantalla"); for (const f of mo.fixed) L.push(`- \`${f.desc}\` (${f.size[0]}×${f.size[1]}px, top ${f.top}px)`); L.push(""); }
  return L.join("\n");
}

function hoverDetail(d) {
  const h = d.hover;
  if (!h?.targets?.length) return "No se midieron efectos hover.";
  const L = [];
  for (const t of h.targets) {
    if (!t.changes.length) { L.push(`- ${t.kind} \`${t.desc}\`: sin efecto`); continue; }
    L.push(`- ${t.kind} \`${t.desc}\`: ${t.changes.map((c) => `${c.prop}: ${c.from} → ${c.to}`).join("; ")} · ${t.duration}ms ${t.easing}`);
  }
  if (h.customCursor) L.push(`- Cursor personalizado: \`${h.customCursor.desc}\`, ${h.customCursor.size}px, blend ${h.customCursor.blend}`);
  return L.join("\n");
}

function effectsLine(e = {}) {
  const names = { backdropFilter: "backdrop-filter", blendMode: "mix-blend-mode", clipPath: "clip-path", mask: "máscaras", filter: "filter", gradientBg: "fondos degradados",
    gradientText: "texto degradado", textStroke: "texto con contorno", shadow: "sombras", sticky: "sticky", video: "vídeo", canvas: "canvas/WebGL", svg: "SVG inline" };
  const used = Object.entries(names).filter(([k]) => e[k] > 0).map(([k, n]) => `${n} ×${e[k]}`);
  if (e.splitText >= 8) used.push(`texto dividido en letras/palabras ×${e.splitText}`);
  if (e.grainOverlay) used.push("capa de grano a pantalla completa");
  if (e.cursorNone) used.push("cursor nativo oculto");
  return used.join(" · ") || "ninguno destacable";
}

function clientBriefBlock(brief) {
  if (!brief) return "";
  const L = [];
  const meta = [];
  if (brief.brandName) meta.push(`- Marca: ${brief.brandName}`);
  if (brief.audience) meta.push(`- Audiencia: ${brief.audience}`);
  if (brief.tone) meta.push(`- Tono: ${brief.tone}`);
  if (Array.isArray(brief.sections) && brief.sections.length) {
    meta.push("- Secciones que pide el cliente (encájalas en los roles de la referencia):");
    for (const s of brief.sections) meta.push(`  - ${s.name || "Sección"}${s.copy ? `: ${s.copy}` : ""}`);
  }
  const notes = String(brief.extra || brief.extraBrief || "").trim();
  if (meta.length || notes) {
    L.push("## Notas del cliente", "", ...meta);
    if (notes) L.push(meta.length ? "" : null, notes);
    L.push("");
  }
  const doc = String(brief.document || "").trim();
  if (doc) {
    L.push(`## Información del negocio${brief.documentName ? ` (extraída de «${brief.documentName}»)` : ""}`, "");
    L.push("Usa este documento SOLO como fuente del contenido: nombre, servicios, textos, datos de contacto, tono. Si menciona colores, tipografías, estilos o estructura de página, ignóralo: el diseño lo dicta la referencia medida. Si falta contenido para alguna sección, redáctalo coherente con el negocio; si sobra, resume para que ocupe el espacio medido.", "");
    L.push("<documento_del_negocio>", doc, "</documento_del_negocio>", "");
  }
  return L.filter((x) => x !== null).join("\n");
}

export function composeKitPrompt({ fingerprint, niche, url, clientBrief = null }) {
  const d = fingerprint.viewports.desktop || Object.values(fingerprint.viewports)[0];
  const m = fingerprint.viewports.mobile || null;
  const libs = Object.entries(d.libs || {}).filter(([, v]) => v).map(([k]) => k);
  const stack = [];
  if (libs.includes("gsap") || d.motion?.scrubs?.length || d.motion?.pins?.length) stack.push("GSAP + ScrollTrigger para scrub, pins y timelines");
  if (d.effects?.smoothScroll) stack.push("Lenis para el scroll suavizado (la referencia lo usa)");
  if (libs.includes("three") || d.effects?.canvas) stack.push("Three.js / WebGL para los canvas (recrea la intención visual; el shader exacto no es extraíble)");
  if (!stack.length) stack.push("CSS + IntersectionObserver bastan: la referencia no usa librerías de animación");
  const colors = d.color || {};
  const L = [];
  const src = d.type?.sources;
  L.push(`# Encargo: sitio para «${niche}» con el sistema visual de ${url}`, "");
  L.push("Eres un desarrollador front-end sénior especializado en sitios de nivel Awwwards. Vas a construir un sitio NUEVO para el nicho indicado que reproduzca el sistema visual y de movimiento de la referencia: mismas proporciones, ritmo, tipografía, color, animaciones, scroll y hovers. Todos los valores de este documento fueron MEDIDOS en un navegador real; no los sustituyas por valores «parecidos».", "");
  L.push("## Reglas", "");
  L.push("1. **Fuente de verdad:** `spec.json` (medidas exactas) y `screenshots/` (una captura por sección, escritorio y móvil). Este documento es su resumen legible; si no tienes acceso a los archivos, trabaja solo con él.");
  L.push("2. **Qué se conserva (intocable):** estructura y orden de secciones, alturas, el plano de cada sección (posición y tamaño de cada elemento), escala tipográfica, paleta, radios, efectos, cada animación (propiedades, duración, retardo, easing), comportamiento de scroll (pins, parallax, horizontal) y hovers.");
  L.push("   **El nicho no cambia el diseño.** No adaptes colores, tipografías, formas, espaciados ni animaciones al sector, a la marca del cliente ni a lo que «pegaría» con el negocio: es el contenido el que se adapta al diseño medido, nunca al revés. Ante la duda entre el nicho y una medida, gana la medida.");
  L.push(`3. **Qué se sustituye:** todo el texto, imágenes, logos y nombres. Escribe contenido original para «${niche}» que ocupe aproximadamente el mismo espacio (mismo número de líneas en titulares, misma cantidad de tarjetas/elementos). No copies copy ni assets de la referencia.`);
  L.push("4. **Fuentes:** carga las mismas familias que la referencia cuando sean de uso libre (ver «Tipografía»). Solo si la familia exacta no lo es, elige la alternativa libre más parecida de la misma clasificación (serif/sans/mono) y ajusta tamaño y tracking para igualar la mancha.");
  L.push("5. **Responsive:** el diseño móvil (390px) está medido aparte; respeta sus valores, no los derives del escritorio.");
  L.push("6. Respeta `prefers-reduced-motion` y anima solo `transform`/`opacity`/`clip-path`.");
  L.push("7. **Orden de trabajo:** (a) variables de color, tipografía y radios; (b) esqueleto de secciones con sus alturas y fondos; (c) cada sección siguiendo su plano, primero en escritorio y luego en móvil; (d) animaciones y scroll; (e) hovers. No añadas secciones, adornos ni efectos que no estén medidos aquí.", "");
  L.push("## Verificación (obligatoria)", "");
  L.push("El resultado se mide con la misma sonda que midió la referencia: publica el sitio y pega su URL en la pestaña «Medir» del panel de WebADN (o, con terminal, ejecuta el comando):", "", "```bash", "webadn compare --ref ./fingerprint.json --build http://localhost:5173", "```", "");
  L.push("Devuelve una puntuación 0-100 por dimensión y la lista de diferencias ordenada por impacto. **Objetivo: ≥ 85.** Corrige de arriba abajo, vuelve a medir y repite hasta alcanzarlo. Si trabajas en un chat sin terminal, entrega el código y pide al usuario que pegue el informe.", "");
  const brief = clientBriefBlock(clientBrief);
  if (brief) L.push(brief);
  L.push("## Stack", "", ...stack.map((s) => `- ${s}`), `- Librerías detectadas en la referencia: ${libs.join(", ") || "ninguna conocida"}`, "");
  L.push("## Sistema de diseño", "");
  L.push(`- Fondo de página: ${fmt(colors.pageBg)}`);
  L.push(`- Fondos (por superficie): ${(colors.backgrounds || []).map((c) => `${c.value} ${Math.round(c.share * 100)}%`).join(" · ") || "—"}`);
  L.push(`- Texto: ${(colors.texts || []).map((c) => `${c.value} ${Math.round(c.share * 100)}%`).join(" · ") || "—"}`);
  L.push(`- Acento: ${(colors.accents || []).map((c) => c.value).join(" · ") || "ninguno (paleta neutra)"}`);
  L.push(`- Radios más usados: ${(d.effects?.radii || []).map((r) => `${r.radius === "pill" ? "píldora" : r.radius + "px"} ×${r.count}`).join(" · ") || "esquinas rectas"}`);
  L.push(`- Efectos: ${effectsLine(d.effects)}`);
  L.push(`- Transiciones CSS habituales: ${(d.motion?.tokens || []).slice(0, 4).map((t) => `${t.duration}ms ${t.easing} (×${t.count})`).join(" · ") || "—"}`);
  L.push(`- Scroll: ${d.effects?.smoothScroll ? "suavizado por librería" : d.effects?.cssSmoothScroll ? "scroll-behavior: smooth" : "nativo"}`, "");
  L.push("### Tipografía", "", typeTable(d, m), "");
  if (src?.loaded?.length || src?.links?.length) {
    L.push(`Fuentes web que carga la referencia${src.provider ? ` (${src.provider})` : ""}: ${src.loaded.map((f) => `${f.family} [${f.weights.join(", ")}${f.italic ? ", itálica" : ""}]`).join(" · ") || "ver enlaces"}.`);
    for (const h of src.links || []) L.push(`- ${h}`);
    L.push("");
  }
  if (d.type?.display) L.push(`Texto más grande de la página: ${d.type.display.size}px ${d.type.display.family}${m?.type?.display ? ` (móvil ${m.type.display.size}px)` : ""}.`, "");
  L.push(`## Secciones (${d.sections.length}) — página de ${d.page.heightVh} alturas de pantalla${m ? ` en escritorio, ${m.page.heightVh} en móvil` : ""}`, "");
  d.sections.forEach((s, i) => { L.push(sectionBlock(s, m?.sections?.[i] && m.sections.length === d.sections.length ? m.sections[i] : null), ""); });
  L.push("## Movimiento en detalle (escritorio)", "", motionDetail(d));
  if (m) {
    const ms = m.motion?.summary || {};
    L.push(`En móvil se midieron ${ms.reveals || 0} entradas, ${ms.scrubs || 0} elementos ligados al scroll, ${ms.pins || 0} pin(s) y ${ms.loops || 0} bucle(s): mantén el movimiento también en móvil en esa proporción.`, "");
  }
  L.push("## Hover (escritorio)", "", hoverDetail(d), "");
  L.push("## Criterios de aceptación", "");
  L.push("- `webadn compare` ≥ 85 global y ninguna dimensión por debajo de 70.");
  L.push("- Sin scroll horizontal accidental en 390px.");
  L.push(`- Ningún texto, imagen ni marca de la referencia: todo el contenido es original de «${niche}».`);
  if (fingerprint.errors?.length) L.push("", "## Avisos de la medición", "", ...fingerprint.errors.map((e) => `- ${e.viewport}: ${e.message}`));
  return L.join("\n") + "\n";
}

export async function writeKit({ runPath, fingerprint, niche, url, clientBrief = null, legacyBrief = null }) {
  const kitPath = join(runPath, KIT_DIR);
  await mkdir(kitPath, { recursive: true });
  const prompt = composeKitPrompt({ fingerprint, niche, url, clientBrief });
  const spec = toSpec(fingerprint, { niche, generator: "WebADN" });
  await Promise.all([
    writeFile(join(kitPath, "PROMPT.md"), prompt),
    writeFile(join(kitPath, "spec.json"), JSON.stringify(spec, null, 1)),
    writeFile(join(kitPath, "fingerprint.json"), JSON.stringify(fingerprint)),
    legacyBrief ? mkdir(join(kitPath, "extras"), { recursive: true }).then(() => writeFile(join(kitPath, "extras", "brief.md"), legacyBrief)) : null,
  ]);
  // El kit es autocontenido: copia las capturas de referencia junto al prompt.
  try {
    const src = join(runPath, "screenshots");
    const shots = (await readdir(src)).filter((f) => f.startsWith(REF_SHOT_PREFIX) && f.endsWith(".png"));
    if (shots.length) {
      await mkdir(join(kitPath, "screenshots"), { recursive: true });
      await Promise.all(shots.map((f) => copyFile(join(src, f), join(kitPath, "screenshots", f))));
    }
  } catch { /* sin capturas */ }
  return { kitPath, prompt, promptPath: join(kitPath, "PROMPT.md") };
}

/** Genera el .zip del kit al vuelo (incluye las capturas de referencia del run). */
export async function zipKit(runPath) {
  const kitPath = join(runPath, KIT_DIR);
  const files = [];
  const add = async (rel, abs) => { try { files.push({ name: `webadn-kit/${rel}`, data: await readFile(abs) }); } catch { /* opcional */ } };
  for (const f of ["PROMPT.md", "spec.json", "fingerprint.json"]) await add(f, join(kitPath, f));
  await add("extras/brief.md", join(kitPath, "extras", "brief.md"));
  let shots = [];
  let shotsDir = join(kitPath, "screenshots");
  try { shots = await readdir(shotsDir); } catch { shotsDir = join(runPath, "screenshots"); try { shots = await readdir(shotsDir); } catch { /* sin capturas */ } }
  shots = shots.filter((f) => f.startsWith(REF_SHOT_PREFIX) && f.endsWith(".png"));
  for (const f of shots.sort()) await add(`screenshots/${f}`, join(shotsDir, f));
  if (!files.some((f) => f.name.endsWith("PROMPT.md"))) throw new Error("Este run no tiene kit (se generó en modo demo o con una versión anterior).");
  return createZip(files);
}
