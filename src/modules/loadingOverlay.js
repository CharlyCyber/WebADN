// Detección y retirada de pantallas de carga / transiciones de página.
//
// Muchos sitios (en especial los hechos con GSAP, Lenis o Nuxt) muestran un
// preloader a pantalla completa que, en un navegador headless, no siempre
// termina su animación: se queda cubriendo la página y aparece en todas las
// capturas. Este módulo espera a que desaparezca y, si no lo hace, lo oculta
// antes de medir.
//
// La detección distingue "overlay de carga" de "contenedor de contenido" por
// VOLUMEN (secciones, enlaces, cantidad de texto), no por tamaño: un preloader
// a pantalla completa también tiene cajas grandes (vídeo a sangre, logo, contador)
// y antes eso lo protegía de ser ocultado.
//
// Además, cuando el preloader no termina suele dejar la página inutilizable:
// la librería de smooth scroll cierra el scroll (.lenis-stopped { overflow:hidden }),
// la raíz de la app recorta el contenido y el contenido principal sigue
// invisible (visibility:hidden / opacity:0) porque la intro no llegó a abrirlo.
// Sin deshacer eso, todas las capturas son el loader y findSections solo ve la
// raíz de la app como una única sección (el bug de accentboissons.com).

/**
 * Función serializable que se ejecuta DENTRO de la página.
 * Devuelve los overlays detectados; si `hide` es true, además los oculta,
 * desbloquea el scroll y revela el contenido que la intro escondió.
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

  // Un overlay es fixed/absolute/sticky, o un hijo en flujo dentro de un
  // ancestro fixed que cubre la ventana: los preloaders de Nuxt/Lenis viven
  // dentro de la raíz fija de la app, no como hermanos del body.
  const isOverlayPosition = (el, cs) => {
    if (cs.position === "fixed" || cs.position === "absolute" || cs.position === "sticky") return true;
    if (cs.position !== "static" && cs.position !== "relative") return false;
    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
      const pcs = getComputedStyle(p);
      if (pcs.position === "fixed") return coversViewport(p.getBoundingClientRect());
    }
    return false;
  };

  // Volumen de contenido real. El tamaño NO vale como señal: un preloader con
  // vídeo a sangre + logo + contador tiene tantas cajas grandes como una página.
  const contentVolume = (el) => {
    const text = textOf(el);
    const sections = el.querySelectorAll("section,article,main").length;
    const headings = el.querySelectorAll("h1,h2,h3,h4,h5,h6").length;
    const links = el.querySelectorAll("a,button,input,select,textarea").length;
    return {
      text, sections, headings, links,
      isContent: sections >= 2 || text.length >= 600 || (links >= 8 && text.length >= 200),
    };
  };

  // ¿El elemento es una pantalla de carga atascada y no contenido? Señales:
  // nombre de clase/id de loader, texto de carga corto, contador de porcentaje
  // dominante (aunque tenga logo y CTA) o cortina decorativa vacía.
  const looksLikeLoader = (el, cs) => {
    const vol = contentVolume(el);
    if (vol.isContent) return { hit: false, vol };
    const id = (el.id || "").toLowerCase();
    const cls = (typeof el.className === "string" ? el.className : "").toLowerCase();
    const nameHit = loaderName.test(`${id} ${cls}`);
    const textHit = vol.text.length < 80 && (percentText.test(vol.text) || (vol.headings === 0 && loadingText.test(vol.text)));
    // Contador de porcentaje dominante: "COMMANDER 47 %" con logo y botón.
    const counterHit = percentText.test(vol.text) && vol.text.length < 60 && vol.links <= 3;
    const media = [...el.querySelectorAll("img,video,canvas,svg,picture")].filter((m) => {
      const mr = m.getBoundingClientRect();
      return mr.width > 20 && mr.height > 20;
    }).length;
    const zIndex = parseInt(cs.zIndex, 10);
    const decorative = vol.headings === 0 && vol.links === 0 && media === 0 && vol.text.length === 0 &&
      (zIndex >= 50 || cs.pointerEvents === "none");
    return { hit: nameHit || textHit || counterHit || decorative, vol, media };
  };

  // El preloader dejó la página cerrada: quitar el overflow:hidden de la raíz de
  // la app y de html/body para que el documento vuelva a scrollear.
  const unlockScroll = () => {
    const body = document.body;
    // 1) Lenis y similares bloquean con una clase sobre la raíz de la app.
    const roots = [document.documentElement, body];
    for (const el of body.querySelectorAll("[class*='lenis'],[data-lenis-stopped],[data-lenis-prevent]")) {
      if (el && !roots.includes(el)) roots.push(el);
    }
    for (const el of roots) {
      try {
        el.classList?.remove("lenis-stopped", "lenis-smooth");
        el.removeAttribute?.("data-lenis-stopped");
      } catch { /* sin classList (SVG): no es fatal */ }
    }
    // 2) Raíz de la app que recorta el contenido (height:100vh + overflow:hidden):
    // se pasa a flujo normal. Solo si contiene secciones de página y su alto visible
    // es de una pantalla (un carrusel interno no se toca).
    for (const el of body.querySelectorAll("*")) {
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.overflowY === "visible") continue;
      if (cs.position === "fixed" || cs.position === "absolute") continue;
      if (el.scrollHeight <= el.clientHeight + 20) continue;
      if (el.clientHeight > vh * 1.5) continue;
      if (el.querySelectorAll("section,article,main").length < 2) continue;
      el.style.setProperty("overflow", "visible", "important");
      el.style.setProperty("height", "auto", "important");
      el.style.setProperty("max-height", "none", "important");
      el.style.setProperty("contain", "none", "important");
    }
    // 3) html/body cerrados por el preloader: devolver el scroll nativo. Si el
    // scroll ya lo lleva un contenedor fijo no hace falta (y crearía dos barras).
    const fixedScroller = [...body.querySelectorAll("*")].some((el) => {
      const cs = getComputedStyle(el);
      return cs.position === "fixed" && el.scrollHeight > el.clientHeight + 20;
    });
    if (!fixedScroller) {
      for (const node of [document.documentElement, body]) {
        const cs = getComputedStyle(node);
        if (cs.overflowY !== "hidden" && cs.overflowY !== "clip") continue;
        node.style.setProperty("overflow-y", "auto", "important");
        const h = parseFloat(cs.height);
        if (isFinite(h) && h <= vh * 1.2) node.style.setProperty("height", "auto", "important");
      }
    }
    // 4) Si el documento sigue sin scrollear, el contenido vive en un wrapper
    // FIJO con scroll por transform (Lenis/ScrollSmoother): se pasa a flujo
    // normal para que window.scrollTo mueva la página de verdad.
    const docH = () => Math.max(document.documentElement.scrollHeight, body.scrollHeight);
    if (docH() <= vh + 10) {
      for (const el of body.querySelectorAll("*")) {
        const cs = getComputedStyle(el);
        if (cs.display === "none") continue;
        if (cs.position !== "fixed" && cs.position !== "absolute") continue;
        if (el.querySelectorAll("section,article,main").length < 2) continue;
        if (el.getBoundingClientRect().width < vw * 0.6) continue;
        const s = el.style;
        s.setProperty("position", "static", "important");
        s.setProperty("top", "auto", "important");
        s.setProperty("right", "auto", "important");
        s.setProperty("bottom", "auto", "important");
        s.setProperty("left", "auto", "important");
        s.setProperty("height", "auto", "important");
        s.setProperty("max-height", "none", "important");
        s.setProperty("overflow", "visible", "important");
        s.setProperty("transform", "none", "important");
      }
    }
    if (globalThis.__WADN) globalThis.__WADN._scrollHost = null;
  };

  // La intro escondió el contenido principal (visibility:hidden, opacity:0 o un
  // colapso de altura) y nunca llegó a abrirlo. Se fuerza visible para poder
  // medirlo. Nunca se toca `display` (tabs, menús, acordeones) ni lo fijo/absoluto
  // (menús, modales), ni nada que parezca un overlay.
  const revealHiddenContent = (loaders) => {
    const inLoader = (el) => loaders.some((l) => l === el || (l.contains && l.contains(el)));
    const looksLikeOverlay = (el) => {
      const cls = typeof el.className === "string" ? el.className : "";
      return /\b(modal|menu|overlay|popup|drawer|lightbox|cookie|consent|dialog|sheet)\b/i.test(cls) ||
        el.getAttribute?.("role") === "dialog" || el.hasAttribute?.("aria-modal") || el.hasAttribute?.("inert");
    };
    const out = [];
    for (const el of document.body.querySelectorAll("*")) {
      if (inLoader(el) || looksLikeOverlay(el)) continue;
      const cs = getComputedStyle(el);
      if (cs.display === "none") continue;
      if (cs.position === "fixed" || cs.position === "absolute" || cs.position === "sticky") continue;
      const r = el.getBoundingClientRect();
      if (r.width < vw * 0.6) continue;
      const collapsed = r.height < vh * 0.35 && el.scrollHeight > vh * 0.8;
      if (cs.visibility !== "hidden" && !(parseFloat(cs.opacity) < 0.05) && !collapsed) continue;
      const text = textOf(el);
      const sections = el.querySelectorAll("section,article,main").length;
      if (sections < 2 && text.length < 300) continue;
      out.push(el);
    }
    // De fuera hacia dentro: los hijos heredan la visibilidad del padre.
    out.sort((a, b) => (a.compareDocumentPosition(b) & 4 ? 1 : -1));
    for (const el of out) {
      const s = el.style;
      s.setProperty("visibility", "visible", "important");
      s.setProperty("opacity", "1", "important");
      s.setProperty("transform", "none", "important");
      s.setProperty("clip-path", "none", "important");
      s.setProperty("height", "auto", "important");
      s.setProperty("max-height", "none", "important");
      s.setProperty("overflow", "visible", "important");
    }
    // 2ª pasada: dentro de lo revelado, GSAP deja los textos en autoAlpha:0
    // (visibility:hidden + opacity:0) cuando la intro no llega a terminar. Sin
    // esto las capturas saldrían con las secciones vacías. No se toca el
    // transform: las animaciones de scroll siguen midiéndose. Si no hubo que
    // revelar ningún contenedor (el texto oculto está en una página visible),
    // se repasa el cuerpo entero con las mismas guardas.
    const roots = out.length ? out : [document.body];
    let seen = 0;
    for (const root of roots) {
      for (const el of root.querySelectorAll("*")) {
        if (++seen > 1200) break;
        if (looksLikeOverlay(el)) continue;
        const cs = getComputedStyle(el);
        if (cs.display === "none") continue;
        if (cs.position === "fixed" || cs.position === "absolute" || cs.position === "sticky") continue;
        const hidden = cs.visibility === "hidden";
        const faded = parseFloat(cs.opacity) < 0.05;
        if (!hidden && !faded) continue;
        if (hidden) el.style.setProperty("visibility", "visible", "important");
        if (faded) el.style.setProperty("opacity", "1", "important");
      }
    }
    return out;
  };

  const found = [];
  for (const el of document.body.querySelectorAll("*")) {
    // Primero el rect (barato): solo los elementos que cubren la ventana
    // merecen un getComputedStyle, que es lo caro en páginas grandes.
    const r = el.getBoundingClientRect();
    if (!coversViewport(r)) continue;
    const cs = getComputedStyle(el);
    if (!visible(el, cs, r) || !isOverlayPosition(el, cs)) continue;

    const { hit, vol, media } = looksLikeLoader(el, cs);
    if (!hit) continue;

    found.push({
      el,
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      cls: typeof el.className === "string" ? el.className.slice(0, 120) : "",
      text: vol.text.slice(0, 80),
      position: cs.position,
      zIndex: cs.zIndex,
      width: Math.round(r.width),
      height: Math.round(r.height),
      media: media ?? 0,
    });
  }

  let unlocked = false;
  if (hide && found.length) {
    const loaders = [];
    for (const o of found) {
      loaders.push(o.el);
      // Marcado para que findSections no lo confunda con una sección.
      try { o.el.setAttribute("data-wadn-loader", "1"); } catch { /* sin setAttribute */ }
      o.el.style.setProperty("display", "none", "important");
      o.el.style.setProperty("visibility", "hidden", "important");
      o.el.style.setProperty("opacity", "0", "important");
      o.el.style.setProperty("pointer-events", "none", "important");
    }
    unlockScroll();
    // Con viewport miniatura (thumbnails) no se revela: los umbrales no aplican.
    if (vw >= 400) revealHiddenContent(loaders);
    unlocked = true;
  }

  return found.map(({ el: _el, ...o }) => ({ ...o, unlocked }));
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
