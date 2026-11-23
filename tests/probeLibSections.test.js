import assert from "node:assert/strict";
import { test } from "node:test";
import { probeLib } from "../src/modules/probeLib.js";

// DOM mínimo para probar findSections sin navegador. Cubre lo que usa la
// sonda: hijos, descendientes, rects, estilos y orden del documento.
class El {
  constructor({ tag = "div", id = "", cls = "", rect = {}, children = [], computed = {}, scrollHeight = 0 } = {}) {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.className = cls;
    this.rect = { width: 0, height: 0, top: 0, left: 0, ...rect };
    this.children = children;
    for (const c of children) c.parentElement = this;
    this.computed = {
      display: "block", visibility: "visible", position: "static", ...computed,
    };
    this.scrollHeight = scrollHeight || this.rect.height;
    this.style = { setProperty() {} };
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
  contains(other) {
    let node = other;
    while (node) { if (node === this) return true; node = node.parentElement; }
    return false;
  }
  compareDocumentPosition(other) {
    const all = globalThis.document.body.descendants();
    return all.indexOf(other) > all.indexOf(this) ? 4 : 0;
  }
}

function withDom(bodyChildren, fn) {
  const body = new El({ tag: "body", children: bodyChildren });
  body.scrollHeight = 900;
  const html = new El({ tag: "html", children: [body], scrollHeight: 900 });
  const prev = {
    window: globalThis.window,
    document: globalThis.document,
    getComputedStyle: globalThis.getComputedStyle,
    innerWidth: globalThis.innerWidth,
    innerHeight: globalThis.innerHeight,
    scrollY: globalThis.scrollY,
    Node: globalThis.Node,
  };
  globalThis.window = globalThis;
  globalThis.document = { body, documentElement: html, scrollingElement: html };
  globalThis.getComputedStyle = (el) => el.computed;
  globalThis.innerWidth = 1440;
  globalThis.innerHeight = 900;
  globalThis.scrollY = 0;
  globalThis.Node = { DOCUMENT_POSITION_FOLLOWING: 4 };
  try {
    return fn();
  } finally {
    delete globalThis.__WADN;
    for (const [k, v] of Object.entries(prev)) {
      if (v === undefined) delete globalThis[k];
      else globalThis[k] = v;
    }
  }
}

test("findSections baja por un wrapper fijo y ordena el footer al final", () => {
  const sections = Array.from({ length: 8 }, (_, i) => new El({
    tag: "section",
    rect: { width: 1440, height: i < 5 ? 924 : 900, top: i < 5 ? i * 924 : 5 * 924 + (i - 5) * 900 },
    children: [new El({ tag: "h2", rect: { width: 800, height: 80 } })],
  }));
  const content = new El({
    tag: "div", id: "smooth-content", rect: { width: 1440, height: 7321, top: 0 },
    children: sections, scrollHeight: 7321,
  });
  const wrapper = new El({
    tag: "div", id: "smooth-wrapper", cls: "smooth-wrapper",
    rect: { width: 1440, height: 900, top: 0 },
    computed: { position: "fixed" }, children: [content], scrollHeight: 7321,
  });
  const footer = new El({
    tag: "footer", rect: { width: 1440, height: 420, top: 0 },
    children: [
      new El({ tag: "a", rect: { width: 100, height: 20 } }),
      new El({ tag: "a", rect: { width: 100, height: 20 } }),
      new El({ tag: "a", rect: { width: 100, height: 20 } }),
      new El({ tag: "a", rect: { width: 100, height: 20 } }),
      new El({ tag: "a", rect: { width: 100, height: 20 } }),
      new El({ tag: "a", rect: { width: 100, height: 20 } }),
    ],
  });

  withDom([wrapper, footer], () => {
    probeLib();
    const W = globalThis.__WADN;
    const count = W.findSections();
    assert.equal(count, 9, "8 secciones + footer");
    assert.equal(W.virtualSections, false);
    assert.equal(W.secs[0].el, sections[0]);
    assert.equal(W.secs[8].el, footer, "el footer debe quedar después del contenido del wrapper fijo");
    assert.ok(W.secs[8].top > W.secs[7].top, "el footer se ordena al final");
  });
});

test("findSections conserva un flujo normal sin wrapper fijo", () => {
  const main = new El({
    tag: "main",
    rect: { width: 1440, height: 2700, top: 0 },
    children: [
      new El({ tag: "section", rect: { width: 1440, height: 900, top: 0 }, children: [new El({ tag: "h1", rect: { width: 900, height: 90 } })] }),
      new El({ tag: "section", rect: { width: 1440, height: 900, top: 900 }, children: [new El({ tag: "h2", rect: { width: 800, height: 80 } })] }),
      new El({ tag: "section", rect: { width: 1440, height: 900, top: 1800 }, children: [new El({ tag: "h2", rect: { width: 800, height: 80 } })] }),
    ],
  });
  const footer = new El({ tag: "footer", rect: { width: 1440, height: 360, top: 2700 } });

  withDom([main, footer], () => {
    probeLib();
    const W = globalThis.__WADN;
    const count = W.findSections();
    assert.equal(count, 4);
    assert.equal(W.secs[0].el.tagName, "SECTION");
    assert.equal(W.secs[3].el, footer);
  });
});

test("findSections divide un contenedor de scroll fijo con secciones como hijos directos", () => {
  const sections = Array.from({ length: 8 }, (_, i) => new El({
    tag: "section",
    rect: { width: 1440, height: i < 5 ? 924 : 900, top: i < 5 ? i * 924 : 5 * 924 + (i - 5) * 900 },
    children: [new El({ tag: "h2", rect: { width: 800, height: 80 } })],
  }));
  const app = new El({
    tag: "div", id: "app", rect: { width: 1440, height: 900, top: 0 },
    computed: { position: "fixed", overflowY: "auto" },
    children: sections, scrollHeight: 7321,
  });
  const footer = new El({
    tag: "footer", rect: { width: 1440, height: 420, top: 0 },
    children: Array.from({ length: 6 }, () => new El({ tag: "a", rect: { width: 100, height: 20 } })),
  });

  withDom([app, footer], () => {
    probeLib();
    const W = globalThis.__WADN;
    const count = W.findSections();
    assert.equal(count, 9, "8 secciones directas + footer");
    assert.equal(W.secs[0].el, sections[0]);
    assert.equal(W.secs[8].el, footer);
    assert.ok(W.secs[8].top > W.secs[7].top, "el footer queda después del contenido del contenedor");
  });
});
