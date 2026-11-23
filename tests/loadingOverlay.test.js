import assert from "node:assert/strict";
import { test } from "node:test";
import { scanLoadingOverlays } from "../src/modules/loadingOverlay.js";

// DOM mínimo para probar la detección sin navegador. Solo implementa lo que
// usa scanLoadingOverlays: querySelectorAll por etiqueta, rects y estilos.
class El {
  constructor({ tag = "div", id = "", cls = "", text = "", rect = {}, children = [], computed = {} } = {}) {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.className = cls;
    this.innerText = text;
    this.textContent = text;
    this.rect = { width: 0, height: 0, top: 0, left: 0, ...rect };
    this.children = children;
    this.computed = {
      display: "block", visibility: "visible", opacity: "1", position: "static",
      zIndex: "auto", pointerEvents: "auto", overflowY: "visible", ...computed,
    };
    this.attrs = {};
    this.style = {
      props: {},
      setProperty(k, v) { this.props[k] = v; },
    };
  }
  setAttribute(k, v) { this.attrs[k] = String(v); }
  getAttribute(k) { return k in this.attrs ? this.attrs[k] : null; }
  hasAttribute(k) { return k in this.attrs; }
  getBoundingClientRect() {
    return { ...this.rect, right: this.rect.left + this.rect.width, bottom: this.rect.top + this.rect.height };
  }
  descendants() {
    const out = [];
    for (const c of this.children) { out.push(c); out.push(...c.descendants()); }
    return out;
  }
  querySelectorAll(sel) {
    if (sel === "*") return this.descendants();
    const tags = sel.split(",").map((s) => s.trim().toLowerCase());
    return this.descendants().filter((d) => tags.includes(d.tagName.toLowerCase()));
  }
  querySelector(sel) { return this.querySelectorAll(sel)[0] || null; }
  compareDocumentPosition(other) {
    const all = globalThis.document.body.descendants();
    return all.indexOf(other) > all.indexOf(this) ? 4 : 0;
  }
}

function withDom(bodyChildren, fn) {
  const body = new El({ tag: "body", children: bodyChildren });
  const html = new El({ tag: "html", children: [body] });
  const prev = {
    document: globalThis.document,
    getComputedStyle: globalThis.getComputedStyle,
    innerWidth: globalThis.innerWidth,
    innerHeight: globalThis.innerHeight,
  };
  globalThis.document = { body, documentElement: html };
  globalThis.getComputedStyle = (el) => el.computed;
  globalThis.innerWidth = 1440;
  globalThis.innerHeight = 900;
  try {
    return fn();
  } finally {
    for (const [k, v] of Object.entries(prev)) {
      if (v === undefined) delete globalThis[k];
      else globalThis[k] = v;
    }
  }
}

const viewport = { width: 1440, height: 900 };

test("detecta y oculta un preloader fijo a pantalla completa", () => {
  const loader = new El({
    tag: "div", id: "loader", cls: "loader", text: "100 %", rect: viewport,
    computed: { position: "fixed", zIndex: "9999" },
  });
  const content = new El({
    tag: "div", cls: "page", rect: viewport,
    computed: { position: "static" },
    children: [
      new El({ tag: "section", rect: { width: 1440, height: 900 }, children: [new El({ tag: "h1", text: "Hola", rect: { width: 800, height: 90 } })] }),
      new El({ tag: "section", rect: { width: 1440, height: 900 }, children: [new El({ tag: "h2", text: "Sección", rect: { width: 800, height: 70 } })] }),
    ],
  });

  withDom([loader, content], () => {
    const found = scanLoadingOverlays(false);
    assert.equal(found.length, 1, "solo debe detectar el loader");
    assert.equal(found[0].id, "loader");

    scanLoadingOverlays(true);
    assert.equal(loader.style.props.display, "none");
  });
});

test("no oculta un wrapper fijo que contiene la página (host de secciones)", () => {
  const wrapper = new El({
    tag: "div", id: "smooth-wrapper", cls: "smooth-wrapper", rect: viewport,
    computed: { position: "fixed", zIndex: "1" },
    children: [
      new El({ tag: "section", rect: { width: 1440, height: 900 }, children: [new El({ tag: "h1", text: "Hero", rect: { width: 900, height: 100 } })] }),
      new El({ tag: "section", rect: { width: 1440, height: 900 }, children: [new El({ tag: "h2", text: "Producto", rect: { width: 700, height: 80 } })] }),
      new El({ tag: "section", rect: { width: 1440, height: 900 }, children: [new El({ tag: "h2", text: "Otro", rect: { width: 700, height: 80 } })] }),
    ],
  });
  withDom([wrapper], () => {
    assert.deepEqual(scanLoadingOverlays(false), []);
  });
});

test("no oculta un hero fijo con imagen y titular", () => {
  const hero = new El({
    tag: "section", cls: "hero", rect: viewport,
    computed: { position: "fixed", zIndex: "100" },
    children: [
      new El({ tag: "h1", text: "Boissons pétillantes", rect: { width: 900, height: 90 } }),
      new El({ tag: "p", text: "Bio et français", rect: { width: 500, height: 40 } }),
      new El({ tag: "img", rect: { width: 600, height: 600 } }),
    ],
  });
  withDom([hero], () => {
    assert.deepEqual(scanLoadingOverlays(false), []);
  });
});

test("detecta una cortina de transición vacía", () => {
  const curtain = new El({
    tag: "div", cls: "page-transition", rect: viewport,
    computed: { position: "fixed", zIndex: "9999" },
  });
  withDom([curtain], () => {
    const found = scanLoadingOverlays(false);
    assert.equal(found.length, 1);
    assert.equal(found[0].cls, "page-transition");
  });
});

test("no oculta un fondo fijo con imagen", () => {
  const bg = new El({
    tag: "div", cls: "bg", rect: viewport,
    computed: { position: "fixed", zIndex: "100" },
    children: [new El({ tag: "img", rect: { width: 1440, height: 900 } })],
  });
  withDom([bg], () => {
    assert.deepEqual(scanLoadingOverlays(false), []);
  });
});

test("detecta un preloader con titular y porcentaje", () => {
  const loader = new El({
    tag: "div", cls: "intro", text: "Accent 0 %", rect: viewport,
    computed: { position: "fixed", zIndex: "9999" },
    children: [
      new El({ tag: "h1", text: "Accent", rect: { width: 400, height: 80 } }),
      new El({ tag: "span", text: "0 %", rect: { width: 100, height: 40 } }),
    ],
  });
  withDom([loader], () => {
    const found = scanLoadingOverlays(false);
    assert.equal(found.length, 1);
    assert.equal(found[0].cls, "intro");
  });
});

test("detecta un preloader con logo, CTA y porcentaje aunque tenga cajas grandes", () => {
  // Reproduce el caso real: el preloader cubre la ventana con un vídeo a sangre,
  // un logo, un contador y un CTA. Por tamaño parece "contenido" (4 cajas grandes)
  // y antes quedaba protegido; por volumen (19 caracteres, 1 enlace) es un loader.
  const loader = new El({
    tag: "div", cls: "intro", text: "Accent 47 % COMMANDER", rect: viewport,
    computed: { position: "fixed", zIndex: "9999" },
    children: [
      new El({ tag: "img", rect: { width: 1440, height: 900 } }),
      new El({ tag: "div", rect: { width: 1440, height: 900 }, children: [
        new El({ tag: "h1", text: "Accent", rect: { width: 400, height: 80 } }),
        new El({ tag: "div", text: "47 %", rect: { width: 500, height: 264 } }),
      ] }),
      new El({ tag: "div", rect: { width: 1440, height: 900 } }),
    ],
  });
  withDom([loader], () => {
    const found = scanLoadingOverlays(false);
    assert.equal(found.length, 1, "el preloader debe detectarse aunque tenga cajas grandes");
    assert.equal(found[0].cls, "intro");
  });
});

test("no oculta un wrapper de contenido aunque su texto contenga un porcentaje", () => {
  const wrapper = new El({
    tag: "div", cls: "page", rect: viewport,
    computed: { position: "fixed", zIndex: "1" },
    text: "Promo -50 % sur toutes les bouteilles de la gamme, du 1er au 30 juin, dans la limite des stocks disponibles.",
    children: [
      new El({ tag: "section", rect: { width: 1440, height: 900 }, children: [new El({ tag: "h1", text: "Hero", rect: { width: 900, height: 100 } })] }),
      new El({ tag: "section", rect: { width: 1440, height: 900 }, children: [new El({ tag: "h2", text: "Produit", rect: { width: 700, height: 80 } })] }),
    ],
  });
  withDom([wrapper], () => {
    assert.deepEqual(scanLoadingOverlays(false), []);
  });
});

test("al ocultar el preloader desbloquea el scroll y revela el contenido oculto", () => {
  const loader = new El({
    tag: "div", cls: "intro", text: "47 %", rect: viewport,
    computed: { position: "fixed", zIndex: "9999" },
  });
  const page = new El({
    tag: "div", cls: "page", rect: viewport,
    computed: { position: "static", visibility: "hidden" },
    children: [
      new El({ tag: "section", rect: { width: 1440, height: 900 }, children: [new El({ tag: "h1", text: "Des goûts", rect: { width: 900, height: 100 }, computed: { visibility: "hidden", opacity: "0" } })] }),
      new El({ tag: "section", rect: { width: 1440, height: 900 }, children: [new El({ tag: "h2", text: "Ginger Beer", rect: { width: 700, height: 80 } })] }),
    ],
  });
  const hiddenTitle = page.children[0].children[0];
  withDom([loader, page], () => {
    const html = globalThis.document.documentElement;
    html.computed.overflowY = "hidden";
    html.computed.height = "900px";
    const found = scanLoadingOverlays(true);
    assert.equal(found.length, 1);
    assert.equal(found[0].unlocked, true);
    assert.equal(loader.style.props.display, "none");
    assert.equal(loader.attrs["data-wadn-loader"], "1", "el loader queda marcado para findSections");
    assert.equal(page.style.props.visibility, "visible", "el contenido oculto por la intro se revela");
    assert.equal(html.style.props["overflow-y"], "auto", "el scroll nativo vuelve a html");
    assert.equal(hiddenTitle.style.props.visibility, "visible", "un texto en autoAlpha:0 se revela");
    assert.equal(hiddenTitle.style.props.opacity, "1");
  });
});
