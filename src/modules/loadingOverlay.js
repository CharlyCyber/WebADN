// Detección y retirada de pantallas de carga / transiciones de página.
//
// Muchos sitios (en especial los hechos con GSAP, Lenis o Nuxt) muestran un
// preloader a pantalla completa que, en un navegador headless, no siempre
// termina su animación: se queda cubriendo la página y aparece en todas las
// capturas. Este módulo espera a que desaparezca y, si no lo hace, lo oculta
// antes de medir.
//
// La detección es deliberadamente conservadora: solo se consideran overlays
// que cubren casi toda la ventana, están fijos/absolutos y NO contienen el
// contenido real de la página (secciones, titulares, bloques grandes). Así no
// se oculta por error un wrapper de scroll fijo ni un hero a pantalla completa.

/**
 * Función serializable que se ejecuta DENTRO de la página.
 * Devuelve los overlays detectados; si `hide` es true, además los oculta.
 * (Se exporta para poder probarla sin navegador.)
 */
export function scanLoadingOverlays(hide) {
  const vw = innerWidth;
  const vh = innerHeight;
  const loaderName = /(?:^|[-_\s.])(?:pre)?load(?:er|ing)?(?:[-_\s.]|$)|spinner|spin|curtain|transition|splash|progress/i;
  const loadingText = /loading|chargement|cargando|carregamento|laden|載入|加载|caricamento/i;
  const percentText = /(?:^|\s)\d{1,3}\s*%/;

  const textOf = (el) => (el.innerText || el.textContent || "").replace(/\s+/g, " ").trim();
  const visible = (el, cs, r) =>
    r.width >= 2 && r.height >= 2 &&
    cs.display !== "none" &&
    cs.visibility !== "hidden" &&
    parseFloat(cs.opacity) > 0.04;
  const coversViewport = (r) => r.width >= vw * 0.7 && r.height >= vh * 0.7;
  const isOverlayPosition = (cs) => cs.position === "fixed" || cs.position === "absolute";

  // Un contenedor fijo que contiene la página entera (wrapper de smooth scroll,
  // carrusel de secciones, etc.) no debe ocultarse: es el host del contenido.
  const isContentHost = (el) => {
    let sections = 0;
    let headings = 0;
    let large = 0;
    const all = el.querySelectorAll("*");
    const limit = Math.min(all.length, 1500);
    for (let i = 0; i < limit; i++) {
      const d = all[i];
      const tag = d.tagName;
      if (/^(SECTION|ARTICLE|MAIN)$/.test(tag)) sections++;
      else if (/^H[1-6]$/.test(tag)) headings++;
      const dr = d.getBoundingClientRect();
      if (dr.height >= vh * 0.18 && dr.width >= vw * 0.35) large++;
    }
    return sections >= 2 || headings >= 3 || large >= 4;
  };

  const found = [];
  for (const el of document.body.querySelectorAll("*")) {
    // Primero el rect (barato): solo los elementos que cubren la ventana
    // merecen un getComputedStyle, que es lo caro en páginas grandes.
    const r = el.getBoundingClientRect();
    if (!coversViewport(r)) continue;
    const cs = getComputedStyle(el);
    if (!visible(el, cs, r) || !isOverlayPosition(cs)) continue;
    if (isContentHost(el)) continue;

    const id = (el.id || "").toLowerCase();
    const cls = (typeof el.className === "string" ? el.className : "").toLowerCase();
    const text = textOf(el);
    const nameHit = loaderName.test(`${id} ${cls}`);
    const headingCount = el.querySelectorAll("h1,h2,h3,h4,h5,h6").length;
    // Un texto de carga es corto ("0 %", "100 %", "Loading…"). Un párrafo de
    // contenido no lo es: evita ocultar una sección por contener "loading".
    const textHit = headingCount === 0 && text.length < 80 && (percentText.test(text) || loadingText.test(text));

    // Solo se ocultan overlays decorativos VACÍOS (cortinas de color). Un
    // fondo fijo con una imagen también cubre la ventana, pero no es un loader.
    const links = el.querySelectorAll("a,button,input,select,textarea").length;
    const media = [...el.querySelectorAll("img,video,canvas,svg,picture")].filter((m) => {
      const mr = m.getBoundingClientRect();
      return mr.width > 20 && mr.height > 20;
    }).length;
    const zIndex = parseInt(cs.zIndex, 10);
    const decorative = headingCount === 0 && links === 0 && media === 0 && text.length === 0 &&
      (zIndex >= 50 || cs.pointerEvents === "none");

    if (!nameHit && !textHit && !decorative) continue;

    found.push({
      el,
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      cls: typeof el.className === "string" ? el.className.slice(0, 120) : "",
      text: text.slice(0, 80),
      position: cs.position,
      zIndex: cs.zIndex,
      width: Math.round(r.width),
      height: Math.round(r.height)
    });
  }

  if (hide && found.length) {
    for (const o of found) {
      o.el.style.setProperty("display", "none", "important");
      o.el.style.setProperty("visibility", "hidden", "important");
      o.el.style.setProperty("opacity", "0", "important");
      o.el.style.setProperty("pointer-events", "none", "important");
    }
    // Si el preloader dejó la página bloqueada, devolvemos el scroll nativo:
    // sin esto window.scrollTo no mueve nada y todas las capturas son iguales.
    // Si el scroll ya lo lleva un contenedor fijo, no hace falta (y crearía
    // una segunda barra).
    const fixedScroller = [...document.body.querySelectorAll("*")].some((el) => {
      const cs = getComputedStyle(el);
      return cs.position === "fixed" && el.scrollHeight > el.clientHeight + 20;
    });
    if (!fixedScroller && (document.documentElement.scrollHeight > vh + 10 || document.body.scrollHeight > vh + 10)) {
      for (const node of [document.documentElement, document.body]) {
        const cs = getComputedStyle(node);
        if (cs.overflowY === "hidden" || cs.overflowY === "clip") {
          node.style.setProperty("overflow-y", "auto", "important");
        }
      }
    }
  }

  return found.map(({ el: _el, ...o }) => o);
}

/** Devuelve los overlays de carga visibles (sin modificar la página). */
export async function findLoadingOverlays(page) {
  return page.evaluate(scanLoadingOverlays, false);
}

/** Oculta los overlays de carga detectados y devuelve lo que ocultó. */
export async function hideLoadingOverlays(page) {
  return page.evaluate(scanLoadingOverlays, true);
}

/**
 * Espera a que la pantalla de carga desaparezca. Si sigue ahí al agotarse el
 * timeout, la oculta a la fuerza para que las capturas muestren el contenido.
 *
 * @returns {{cleared:boolean, overlays:Array, forced:Array}}
 */
export async function waitForLoadingOverlays(page, { timeoutMs = 6000, intervalMs = 150 } = {}) {
  const start = Date.now();
  let overlays = [];
  while (Date.now() - start < timeoutMs) {
    try {
      overlays = await findLoadingOverlays(page);
    } catch {
      return { cleared: true, overlays: [], forced: [] };
    }
    if (!overlays.length) return { cleared: true, overlays: [], forced: [] };
    await page.waitForTimeout(intervalMs).catch(() => {});
  }
  let forced = [];
  try {
    forced = await hideLoadingOverlays(page);
  } catch { /* la página pudo navegar: no es fatal */ }
  return { cleared: forced.length === 0, overlays, forced };
}
