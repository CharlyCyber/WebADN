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
    this.style = {
      props: {},
      setProperty(k, v) { this.props[k] = v; },
    };
  }
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
