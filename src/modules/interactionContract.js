// Contrato de interacciones: detecta y describe los componentes interactivos
// del sitio (menú móvil, accordeon, tabs, carrusel, modal, formularios, navegación
// ancla). Antes solo se probeaban hovers; ahora se captura un contrato de
// funcionalidad para que el agente replique la interactividad y la comparadora
// pueda verificar que funciona.

/**
 * @param {import('playwright').Page} page
 * @returns {Promise<{components: Array, summary: object}>}
 */
export async function probeInteractionContract(page) {
  const contract = await page.evaluate(() => {
    const vw = innerWidth;
    const components = [];
    const push = (c) => { if (c) components.push(c); };

    // --- Menú móvil / drawer / hamburger ---
    const hamburger = [...document.querySelectorAll("button, [role=button], a")].find((b) => {
      const t = (b.innerText || b.getAttribute("aria-label") || "").trim();
      const cls = (b.className || "").toString().toLowerCase();
      return /hamburger|menu|nav|burger|^×$|^menu$/i.test(t) || /hamburger|burger|nav-toggle|menu-toggle/.test(cls);
    });
    if (hamburger) {
      push({
        type: "mobile-menu",
        selector: buildSel(hamburger),
        triggerText: (hamburger.innerText || hamburger.getAttribute("aria-label") || "").trim().slice(0, 40),
        note: "Botón que abre/cierra el menú (drawer) en móvil. Debe alternar la apertura del drawer y el estado del botón (icono abierto/cerrado)."
      });
    }

    // --- Accordeon / FAQ ---
    const accordions = [...document.querySelectorAll("[data-accordion], [data-collapse], .accordion, .faq")];
    for (const acc of accordions.slice(0, 4)) {
      const triggers = [...acc.querySelectorAll("button, [role=button], summary, h3, h4")].slice(0, 6);
      push({
        type: "accordion",
        selector: buildSel(acc),
        itemCount: triggers.length,
        note: "Cada item alterna entre abierto/cerrado. Mantener el estado visual (marco, +/-) del item activo."
      });
    }

    // --- Tabs ---
    const tablists = [...document.querySelectorAll("[role=tablist], .tabs, [data-tabs]")];
    for (const tl of tablists.slice(0, 3)) {
      const tabs = [...tl.querySelectorAll("[role=tab], button, .tab")].slice(0, 8);
      push({
        type: "tabs",
        selector: buildSel(tl),
        tabCount: tabs.length,
        note: "Al pulsar una pestaña, se activa y muestra su panel correspondiente (solo una activa a la vez)."
      });
    }

    // --- Carrusel / slider ---
    const carousels = [...document.querySelectorAll(".swiper, .carousel, .slider, [data-carousel], [role=region][aria-roledescription=carousel]")];
    for (const car of carousels.slice(0, 3)) {
      push({
        type: "carousel",
        selector: buildSel(car),
        note: "Carrusel con navegación (flechas/indicadores) y movimiento entre slides."
      });
    }

    // --- Modal / dialog ---
    const modals = [...document.querySelectorAll("[role=dialog], .modal, .dialog")].filter((m) => {
      const cs = getComputedStyle(m);
      return cs.display !== "none" && cs.visibility !== "hidden";
    }).slice(0, 2);
    for (const modal of modals) {
      push({
        type: "modal",
        selector: buildSel(modal),
        note: "Ventana modal que se abre con una acción y se cierra con botón de cerrar o fondo."
      });
    }

    // --- Formularios ---
    const forms = [...document.querySelectorAll("form")].slice(0, 4);
    for (const form of forms) {
      const fields = [...form.querySelectorAll("input, textarea, select")].map((f) => ({
        tag: f.tagName.toLowerCase(),
        type: f.type || null,
        name: f.name || null,
        required: !!f.required,
      }));
      const submit = form.querySelector("button[type=submit], button, input[type=submit]");
      push({
        type: "form",
        selector: buildSel(form),
        fieldCount: fields.length,
        fields: fields.slice(0, 10),
        submit: submit ? (submit.innerText || submit.value || "Submit").trim().slice(0, 40) : null,
        note: "Formulario con validación y estado de envío. Mantener los estados (foco, error, enviado)."
      });
    }

    // --- Navegación ancla ---
    const anchorLinks = [...document.querySelectorAll("a[href^='#']")].slice(0, 12);
    if (anchorLinks.length) {
      push({
        type: "anchor-nav",
        selector: "a[href^='#']",
        count: anchorLinks.length,
        note: "Enlaces que navegan a secciones del mismo documento (scroll suave o ancla)."
      });
    }

    return {
      components,
      summary: {
        total: components.length,
        byType: components.reduce((acc, c) => { acc[c.type] = (acc[c.type] || 0) + 1; return acc; }, {})
      }
    };
  }).catch(() => ({ components: [], summary: { total: 0, byType: {} } }));

  return contract;
}

function buildSel(el) {
  if (el.id) return "#" + CSS.escape(el.id);
  const cls = [...el.classList].filter((c) => c.length > 2).slice(0, 2);
  if (cls.length) return el.tagName.toLowerCase() + cls.map((c) => "." + CSS.escape(c)).join("");
  return el.tagName.toLowerCase();
}
