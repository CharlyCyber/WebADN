// Librería que se inyecta EN LA PÁGINA (addInitScript). Debe ser autocontenida:
// no puede referenciar nada del módulo. Expone window.__WADN con las funciones
// de medición que usa siteProbe.js.
//
// Principio: se mide SIEMPRE con el mismo procedimiento, tanto la referencia
// como el build. Cualquier sesgo de medición se cancela al comparar.

/* eslint-disable no-undef */
export function probeLib() {
  if (window.__WADN) return;
  const W = (window.__WADN = { cands: [], hover: [] });
  const rnd = (n, d = 2) => { const f = 10 ** d; return Math.round((Number(n) || 0) * f) / f; };

  // ---------- color ----------
  W.rgb = (str) => {
    if (!str) return null;
    const m = String(str).match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?/);
    if (m) {
      let a = m[4] === undefined ? 1 : m[4].endsWith("%") ? parseFloat(m[4]) / 100 : parseFloat(m[4]);
      return { r: +m[1], g: +m[2], b: +m[3], a };
    }
    const c = String(str).match(/color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?/);
    if (c) return { r: c[1] * 255, g: c[2] * 255, b: c[3] * 255, a: c[4] === undefined ? 1 : +c[4] };
    return null;
  };
  W.hex = (c) => "#" + [c.r, c.g, c.b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
  const sat = (c) => { const mx = Math.max(c.r, c.g, c.b), mn = Math.min(c.r, c.g, c.b); return mx === 0 ? 0 : (mx - mn) / mx; };

  W.bgOf = (el) => {
    let node = el, image = null;
    while (node && node.nodeType === 1) {
      const cs = getComputedStyle(node);
      if (!image && cs.backgroundImage && cs.backgroundImage !== "none") {
        image = cs.backgroundImage.includes("gradient") ? "gradient" : "image";
        if (image === "gradient") {
          const g = W.rgb(cs.backgroundImage);
          if (g && g.a > 0.5) return { color: W.hex(g), image };
        }
      }
      const c = W.rgb(cs.backgroundColor);
      if (c && c.a > 0.5) return { color: W.hex(c), image };
      node = node.parentElement;
    }
    return { color: "#ffffff", image };
  };

  W.desc = (el) => {
    const cls = typeof el.className === "string" ? el.className.trim().split(/\s+/).filter(Boolean).slice(0, 2) : [];
    const txt = (el.innerText || el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 32);
    return el.tagName.toLowerCase() + (el.id ? "#" + el.id : "") + (cls.length ? "." + cls.join(".") : "") + (txt ? ` "${txt}"` : "");
  };

  const shown = (el, cs, r) => r.width > 1 && r.height > 1 && cs.display !== "none" && cs.visibility !== "hidden";

  // ---------- secciones ----------
  // Un elemento `position: fixed` puede ser dos cosas muy distintas:
  //   1) un nav/preloader/overlay pequeño → no es una sección;
  //   2) el wrapper de smooth scroll (Lenis, ScrollSmoother, GSAP) que contiene
  //      TODA la página → sí es un host de secciones y hay que bajar a él.
  // Antes se descartaba cualquier fixed, así que un sitio con wrapper fijo
  // quedaba reducido a "header + footer" (el bug de accentboissons.com).
  W.findSections = () => {
    const vw = innerWidth, vh = innerHeight;
    const docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const minH = (el) => (/^(header|nav|footer)$/i.test(el.tagName) ? 48 : vh * 0.12);
    const hostCache = new Map();

    const isContentHost = (el) => {
      if (hostCache.has(el)) return hostCache.get(el);
      let sections = 0, headings = 0, large = 0;
      const all = el.querySelectorAll("*");
      const limit = Math.min(all.length, 1800);
      for (let i = 0; i < limit; i++) {
        const d = all[i];
        const tag = d.tagName;
        if (/^(SECTION|ARTICLE|MAIN)$/.test(tag)) sections++;
        else if (/^H[1-6]$/.test(tag)) headings++;
        const dr = d.getBoundingClientRect();
        if (dr.height >= vh * 0.18 && dr.width >= vw * 0.35) large++;
      }
      const height = Math.max(el.scrollHeight, el.getBoundingClientRect().height);
      const host = height >= vh * 0.5 && (sections >= 2 || headings >= 3 || large >= 4);
      hostCache.set(el, host);
      return host;
    };

    const info = (el) => {
      const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
      const fixed = cs.position === "fixed" || cs.position === "sticky";
      const ok = shown(el, cs, r) && r.width >= vw * 0.6 && (!fixed || isContentHost(el));
      return { el, r, cs, ok, fixed };
    };
    const eligible = (k) => k.ok && k.r.height >= minH(k.el);

    let root = document.body;
    for (let i = 0; i < 10; i++) {
      const kids = [...root.children].map(info).filter(eligible);
      if (kids.length === 1 && kids[0].r.height >= root.getBoundingClientRect().height * 0.7) root = kids[0].el;
      else break;
    }
    let list = [...root.children].map(info).filter(eligible).map((k) => k.el);

    // Desciende por wrappers (uno o varios hijos) hasta llegar a los bloques
    // reales. Un wrapper de un solo hijo que cubre casi todo el padre es, casi
    // siempre, un contenedor intermedio (#app, #smooth-content, .page...).
    for (let pass = 0; pass < 6; pass++) {
      const next = [];
      let changed = false;
      for (const el of list) {
        const h = el.getBoundingClientRect().height;
        const kids = [...el.children].map(info).filter(eligible);
        const cover = kids.reduce((s, k) => s + k.r.height, 0);
        const semantic = kids.filter((k) => /^(section|article|header|footer|main)$/i.test(k.el.tagName)).length;
        const sectionish = kids.filter((k) => {
          const cls = typeof k.el.className === "string" ? k.el.className : "";
          return /section|hero|banner|product|block|panel|slide|page|content|about|contact|footer|header/i.test(cls);
        }).length;
        const tallKids = kids.filter((k) => k.r.height >= vh * 0.5).length;
        const parentSemantic = /^(section|article|main)$/i.test(el.tagName);
        const singleWrapper = !parentSemantic && kids.length === 1 &&
          kids[0].r.height >= Math.max(h * 0.7, vh * 1.2);
        const split = cover >= h * 0.65 && (
          singleWrapper ||
          (h > vh * 2.2 && kids.length >= 2 && (semantic >= 2 || sectionish >= 2 || tallKids >= 2 || list.length < 3))
        );
        if (split) {
          next.push(...kids.map((k) => k.el));
          changed = true;
        } else {
          next.push(el);
        }
      }
      list = next;
      if (!changed) break;
    }

    // Fallback: si el recorrido estructural sigue sin encontrar secciones
    // (por ejemplo, paneles fijos con scroll-jacking), recuperar los hitos
    // semánticos que haya en cualquier punto del documento.
    const covered = list.reduce((s, el) => s + el.getBoundingClientRect().height, 0);
    if (list.length < 3 && covered < docH * 0.5) {
      const landmarks = [...document.querySelectorAll("section, article, [data-section], main > div, body > div > div")]
        .map((el) => {
          const r = el.getBoundingClientRect();
          const cs = getComputedStyle(el);
          return { el, r, cs, ok: shown(el, cs, r) && r.width >= vw * 0.6 && r.height >= vh * 0.12 };
        })
        .filter((k) => k.ok)
        .map((k) => ({ el: k.el, top: k.r.top + scrollY, height: k.r.height }))
        .sort((a, b) => a.top - b.top);
      const merged = [];
      for (const item of landmarks) {
        const prev = merged[merged.length - 1];
        if (prev && item.top >= prev.top - 2 && item.top + item.height <= prev.top + prev.height + 2) continue;
        if (prev && prev.top >= item.top - 2 && prev.top + prev.height <= item.top + item.height + 2) {
          merged[merged.length - 1] = item;
          continue;
        }
        merged.push(item);
      }
      if (merged.length >= 3 && merged.reduce((s, x) => s + x.height, 0) >= docH * 0.45) {
        list = merged.map((m) => m.el);
      }
    }

    // Ordenar por posición "de flujo". Un host fijo no ocupa espacio en el
    // documento (position: fixed), así que sus secciones tienen tops relativos
    // al contenido y los hermanos normales que van después (p. ej. el footer)
    // quedarían antes que ellos. Se compensa sumando la altura del host.
    const fixedHosts = [...document.body.querySelectorAll("*")].filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.height < vh * 0.5) return false;
      const cs = getComputedStyle(el);
      return (cs.position === "fixed" || cs.position === "sticky") && isContentHost(el);
    });
    const contentHeight = (el) => {
      const r = el.getBoundingClientRect();
      let h = el.scrollHeight;
      for (const c of el.children) {
        const cr = c.getBoundingClientRect();
        h = Math.max(h, cr.top - r.top + cr.height);
      }
      return Math.max(h, r.height);
    };
    const follows = (a, b) => Boolean(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
    const topOf = (el) => {
      const r = el.getBoundingClientRect();
      let top = r.top + scrollY;
      const host = fixedHosts.find((h) => h === el || h.contains(el));
      if (!host) {
        for (const h of fixedHosts) {
          if (h !== el && !h.contains(el) && follows(h, el)) top += contentHeight(h);
        }
      }
      return top;
    };

    list = list
      .map((el) => ({ el, top: topOf(el), height: el.getBoundingClientRect().height }))
      .sort((a, b) => a.top - b.top);
    let virtual = false;
    if (list.length < 2) {
      virtual = true;
      const n = Math.max(1, Math.min(20, Math.round(docH / vh)));
      list = Array.from({ length: n }, (_, i) => ({ el: null, top: i * (docH / n), height: docH / n }));
    }
    W.secs = list;
    W.virtualSections = virtual;
    return list.length;
  };

  W.sectionIndexOf = (el, docTop) => {
    const secs = W.secs || [];
    for (let i = 0; i < secs.length; i++) if (secs[i].el && secs[i].el.contains(el)) return i;
    return W.sectionIndexAt(docTop);
  };
  W.sectionIndexAt = (docTop) => {
    const secs = W.secs || [];
    let best = -1;
    for (let i = 0; i < secs.length; i++) if (docTop >= secs[i].top - 2) best = i;
    return Math.max(0, best);
  };

  const textEls = (root) => {
    const out = [];
    const walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT);
    const seen = new Set();
    let n, guard = 0;
    while ((n = walker.nextNode()) && guard++ < 20000) {
      const t = n.nodeValue.replace(/\s+/g, " ").trim();
      if (t.length < 1) continue;
      const el = n.parentElement;
      if (!el || /^(script|style|noscript|template)$/i.test(el.tagName)) continue;
      if (seen.has(el)) { el.__wchars += t.length; continue; }
      seen.add(el); el.__wchars = t.length; out.push(el);
    }
    return out;
  };

  const fontOf = (el, cs) => {
    const stack = cs.fontFamily.split(",").map((s) => s.trim().replace(/^["']|["']$/g, ""));
    const size = parseFloat(cs.fontSize) || 16;
    const lh = cs.lineHeight === "normal" ? 1.2 : (parseFloat(cs.lineHeight) || size * 1.2) / size;
    const ls = cs.letterSpacing === "normal" ? 0 : (parseFloat(cs.letterSpacing) || 0) / size;
    const generic = stack.find((s) => /^(serif|sans-serif|monospace|cursive|fantasy|system-ui|ui-sans-serif|ui-serif|ui-monospace)$/i.test(s)) || "";
    return {
      family: stack[0] || "", generic: generic.replace(/^ui-/, "").replace("system-ui", "sans-serif"),
      size: rnd(size, 1), weight: parseInt(cs.fontWeight) || 400, lineHeight: rnd(lh), letterSpacing: rnd(ls, 3),
      transform: cs.textTransform === "none" ? "" : cs.textTransform, italic: cs.fontStyle === "italic",
    };
  };

  const buttonLike = (el, cs) => {
    if (el.tagName === "BUTTON" || el.getAttribute("role") === "button") return true;
    if (el.tagName !== "A") return false;
    const bg = W.rgb(cs.backgroundColor);
    const border = parseFloat(cs.borderTopWidth) > 0 && cs.borderTopStyle !== "none";
    return ((bg && bg.a > 0.3) || border) && parseFloat(cs.paddingLeft) >= 8;
  };

  W.sectionTops = () => (W.secs || []).map((s, i) => ({ index: i, top: Math.round(s.top), height: Math.round(s.height) }));
  W.describeSection = (i) => {
    const vw = innerWidth, vh = innerHeight;
    const secs = W.secs || [];
    return [secs[i]].map((s) => {
      const base = { index: i, top: Math.round(s.top), height: Math.round(s.height), hVh: rnd(s.height / vh), virtual: !s.el };
      if (!s.el) return { ...base, tag: "virtual", bg: W.bgOf(document.body).color, role: i === 0 ? "hero" : "content", headings: [], counts: {} };
      const el = s.el; const cs = getComputedStyle(el); const bg = W.bgOf(el);
      const texts = textEls(el);
      const colorChars = {}; let chars = 0, maxFont = 0; const heads = []; const blocks = [];
      let firstTop = Infinity, lastBottom = -Infinity;
      for (const t of texts) {
        const tcs = getComputedStyle(t); const r = t.getBoundingClientRect();
        if (!shown(t, tcs, r)) continue;
        const c = W.rgb(tcs.color); const n = t.__wchars || 1;
        if (c) { const h = W.hex(c); colorChars[h] = (colorChars[h] || 0) + n; }
        chars += n;
        const fs = parseFloat(tcs.fontSize) || 0;
        if (n >= 2 && fs > maxFont) maxFont = fs;
        const top = r.top + scrollY;
        firstTop = Math.min(firstTop, top); lastBottom = Math.max(lastBottom, top + r.height);
        const hEl = t.closest("h1,h2,h3,h4,h5,h6");
        if (hEl && !heads.some((h) => h.el === hEl)) {
          const hr = hEl.getBoundingClientRect(); const f = fontOf(hEl, getComputedStyle(hEl));
          heads.push({ el: hEl, tag: hEl.tagName.toLowerCase(), ...f, size: rnd(Math.max(f.size, fs), 1), chars: (hEl.innerText || "").trim().length,
            lines: Math.max(1, Math.round(hr.height / (f.size * f.lineHeight))), cx: rnd((hr.left + hr.width / 2) / vw), align: getComputedStyle(hEl).textAlign });
        }
        if (/^(P|LI|H[1-6]|BLOCKQUOTE|A|BUTTON)$/.test(t.tagName)) blocks.push(r);
      }
      const media = [...el.querySelectorAll("img,video,canvas,picture,svg")].filter((m) => { const r = m.getBoundingClientRect(); return r.width > 24 && r.height > 24; });
      let bgMedia = false;
      for (const m of media) {
        const r = m.getBoundingClientRect();
        if (m.tagName !== "SVG" && r.width * r.height >= s.height * vw * 0.55) bgMedia = true;
        if (m.tagName !== "svg") { blocks.push(r); const top = r.top + scrollY; firstTop = Math.min(firstTop, top); lastBottom = Math.max(lastBottom, top + r.height); }
      }
      // columnas: máximo de bloques no anidados cortados por una línea horizontal
      let scan = 0;
      for (const d of el.getElementsByTagName("*")) {
        if (++scan > 500) break;
        const dr = d.getBoundingClientRect();
        if (dr.width * dr.height < 12000 || dr.width > vw * 0.92) continue;
        const dcs = getComputedStyle(d);
        if (dcs.backgroundImage !== "none" || (W.rgb(dcs.backgroundColor)?.a > 0.5 && d.children.length === 0)) blocks.push(dr);
      }
      let cols = 1;
      const flat = blocks.filter((r) => r.width < vw * 0.92 && r.width > 20 && r.height > 8).slice(0, 220);
      for (const a of flat) {
        const row = flat.filter((b) => Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) >= Math.min(a.height, b.height) * 0.5).sort((x, y) => x.left - y.left);
        let n = 0, edge = -Infinity;
        for (const r of row) if (r.left >= edge - 4) { n++; edge = r.right; }
        cols = Math.max(cols, n);
      }
      heads.sort((a, b) => b.size - a.size);
      const top = heads[0];
      const textColor = Object.entries(colorChars).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
      const links = el.querySelectorAll("a").length;
      const isFooter = el.tagName === "FOOTER" || !!el.querySelector(":scope > footer") || (i === secs.length - 1 && links >= 6);
      const isNav = (el.tagName === "HEADER" || el.tagName === "NAV") && s.height < vh * 0.3;
      const role = isNav ? "nav" : isFooter ? "footer" : (el.querySelector("h1") || i === 0 || (i === 1 && secs[0].height < vh * 0.3)) ? "hero" : "content";
      return {
        ...base, tag: el.tagName.toLowerCase(), desc: W.desc(el).slice(0, 60), role,
        bg: bg.color, bgImage: bg.image, bgMedia, textColor,
        display: cs.display, cols, align: top ? (top.align === "center" || (top.cx > 0.4 && top.cx < 0.6 && top.align !== "left" && top.align !== "start") ? "center" : top.cx > 0.62 ? "right" : "left") : null,
        maxFont: rnd(maxFont, 1), chars,
        padTop: isFinite(firstTop) ? Math.max(0, Math.round(firstTop - s.top)) : null,
        padBottom: isFinite(lastBottom) ? Math.max(0, Math.round(s.top + s.height - lastBottom)) : null,
        headings: heads.slice(0, 3).map(({ el: _e, cx: _c, ...h }) => h),
        counts: {
          images: el.querySelectorAll("img,picture").length, videos: el.querySelectorAll("video").length,
          canvas: el.querySelectorAll("canvas").length, svg: el.querySelectorAll("svg").length,
          links, buttons: [...el.querySelectorAll("a,button,[role=button]")].filter((b) => buttonLike(b, getComputedStyle(b))).length,
        },
      };
    })[0];
  };

  // ---------- scroll ----------
  // No toda la página se desplaza con window.scrollTo: los sitios con un
  // contenedor fijo (ScrollSmoother, Lenis con wrapper, apps de scroll propio)
  // hacen scroll dentro de un elemento. Se resuelve el host real una vez.
  W.scrollHost = () => {
    const doc = document.scrollingElement || document.documentElement;
    if (doc.scrollHeight > innerHeight + 10) return doc;
    if (W._scrollHost && W._scrollHost.isConnected) return W._scrollHost;
    let best = null, bestH = 0;
    for (const el of document.body.querySelectorAll("*")) {
      if (el.scrollHeight <= el.clientHeight + 20) continue;
      const cs = getComputedStyle(el);
      if (cs.overflowY === "visible") continue;
      if (el.scrollHeight > bestH) { best = el; bestH = el.scrollHeight; }
    }
    W._scrollHost = best || doc;
    return W._scrollHost;
  };
  W.isDocHost = (host) => host === document.documentElement || host === document.body || host === document.scrollingElement;
  W.scrollTo = (y) => {
    const host = W.scrollHost();
    if (W.isDocHost(host)) {
      window.scrollTo(0, y);
      return window.scrollY;
    }
    host.scrollTop = y;
    return host.scrollTop;
  };
  W.scrollY = () => {
    const host = W.scrollHost();
    return W.isDocHost(host) ? window.scrollY : host.scrollTop;
  };
  W.sectionTop = (i) => {
    const s = (W.secs || [])[i];
    if (!s) return 0;
    if (!s.el) return s.top || 0;
    const host = W.scrollHost();
    if (W.isDocHost(host)) return s.el.getBoundingClientRect().top + window.scrollY;
    return s.el.getBoundingClientRect().top - host.getBoundingClientRect().top + host.scrollTop;
  };

  // ---------- tipografía + color + efectos (una sola pasada) ----------
  // Plano de la sección: cajas de los elementos clave (titulares, textos, medios,
  // botones, tarjetas) con posición y tamaño, para reconstruir la composición y no
  // solo "N columnas". x/w en % del ancho de pantalla; y/h en px desde el inicio de
  // la sección. Los elementos repetidos en fila o columna se agrupan (n, gap).
  W.blueprint = (i) => {
    const sec = (W.secs || [])[i];
    if (!sec || !sec.el) return null;
    const vw = innerWidth, root = sec.el, raw = [];
    const pct = (px) => rnd((px / vw) * 100, 1);
    const box = (el) => {
      const r = el.getBoundingClientRect();
      if (r.width < 6 || r.height < 6) return null;
      if (r.right < -vw * 0.5 || r.left > vw * 1.5) return null;
      return { r, x: pct(r.left), w: pct(r.width), y: Math.round(r.top + scrollY - sec.top), h: Math.round(r.height) };
    };
    const radiusOf = (cs, r) => {
      const v = parseFloat(cs.borderTopLeftRadius) || 0;
      return v >= Math.min(r.width, r.height) / 2 - 1 && v > 0 ? "pill" : Math.round(v);
    };
    const paint = (cs) => {
      const bg = W.rgb(cs.backgroundColor);
      const o = {};
      if (bg && bg.a > 0.05) o.bg = W.hex(bg);
      if (cs.backgroundImage && cs.backgroundImage !== "none") o.bgImage = /gradient/.test(cs.backgroundImage) ? "gradient" : "image";
      if (parseFloat(cs.borderTopWidth) > 0 && cs.borderTopStyle !== "none") { const bc = W.rgb(cs.borderTopColor); o.border = `${rnd(parseFloat(cs.borderTopWidth), 1)}px ${bc ? W.hex(bc) : ""}`.trim(); }
      if (cs.boxShadow && cs.boxShadow !== "none") o.shadow = true;
      return o;
    };
    const seen = new Set();
    const push = (el, k, extra) => { if (seen.has(el)) return; const b = box(el); if (!b) return; seen.add(el); raw.push({ k, el, ...b, ...extra }); };

    let count = 0;
    for (const el of root.querySelectorAll("h1,h2,h3,h4,h5,h6,p,li,blockquote,a,button,[role=button],img,video,canvas,picture,svg,input,textarea")) {
      if (++count > 700) break;
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden") continue;
      const tag = el.tagName.toLowerCase();
      if (/^(img|video|canvas|picture|svg)$/.test(tag)) {
        if (tag === "img" && el.closest("picture")) continue;
        const r = el.getBoundingClientRect();
        if (r.width < 40 || r.height < 40) continue;
        if (tag === "svg" && el.closest("a,button")) continue;
        // Medir integridad del medio: img rota (naturalWidth 0) y video sin datos.
        const broken = tag === "img"
          ? (el.complete && el.naturalWidth === 0)
          : (tag === "video" ? (el.readyState === 0 && !el.src) : false);
        // Posición de object-fit/object-position y fondo del contenedor (scrim).
        const contBg = /^(img|video)$/.test(tag) && el.parentElement
          ? (W.bgOf(el.parentElement).image || null)
          : null;
        push(el, tag === "picture" ? "img" : tag, {
          ratio: rnd(r.width / r.height),
          radius: radiusOf(cs, r),
          fit: /^(img|video)$/.test(tag) ? cs.objectFit : undefined,
          pos: /^(img|video)$/.test(tag) && cs.objectPosition && cs.objectPosition !== "0% 0%" ? cs.objectPosition : undefined,
          bgLayer: contBg,
          broken: broken || undefined,
        });
        continue;
      }
      if (tag === "input" || tag === "textarea") {
        const r = el.getBoundingClientRect();
        push(el, "field", { radius: radiusOf(cs, r), ...paint(cs) });
        continue;
      }
      if (/^(a|button)$/.test(tag) || el.getAttribute("role") === "button") {
        if (buttonLike(el, cs)) {
          const r = el.getBoundingClientRect(); const f = fontOf(el, cs); const c = W.rgb(cs.color);
          push(el, "button", { fs: f.size, fw: f.weight, color: c ? W.hex(c) : null, radius: radiusOf(cs, r), padX: Math.round(parseFloat(cs.paddingLeft) || 0), upper: cs.textTransform === "uppercase" || undefined, ...paint(cs) });
        } else if ((el.innerText || "").trim().length > 0 && !el.closest("h1,h2,h3,h4,h5,h6,p,li")) {
          const f = fontOf(el, cs); const c = W.rgb(cs.color);
          push(el, "link", { fs: f.size, fw: f.weight, color: c ? W.hex(c) : null });
        }
        continue;
      }
      const text = (el.innerText || "").trim();
      if (text.length < 2) continue;
      if (tag === "li" && el.querySelector("p,h1,h2,h3,h4,h5,h6,li")) continue;
      if (tag === "p" && el.closest("li,a,button")) { if (el.closest("a,button")) continue; }
      const f = fontOf(el, cs); const c = W.rgb(cs.color);
      const lines = Math.max(1, Math.round(el.getBoundingClientRect().height / (f.size * f.lineHeight)));
      // Texto recortado: el contenido supera el contenedor (scrollWidth > clientWidth).
      const clipped = el.scrollWidth > el.clientWidth + 1 ? true : undefined;
      push(el, /^h[1-6]$/.test(tag) ? tag : "text", { fs: f.size, fw: f.weight, lh: f.lineHeight, ls: f.letterSpacing || undefined, font: f.family, color: c ? W.hex(c) : null, align: cs.textAlign === "start" ? "left" : cs.textAlign, lines, chars: text.length, upper: cs.textTransform === "uppercase" || undefined, clipped });
    }
    // texto grande fuera de etiquetas semánticas (div/span): rótulos, marquesinas, cifras
    count = 0;
    for (const t of textEls(root)) {
      if (++count > 300) break;
      if (seen.has(t) || t.closest("h1,h2,h3,h4,h5,h6,p,li,blockquote,a,button")) continue;
      const cs = getComputedStyle(t);
      if (cs.display === "none" || cs.visibility === "hidden") continue;
      const text = (t.innerText || "").trim();
      const f = fontOf(t, cs);
      if (text.length < 3 || f.size < 20) continue;
      const c = W.rgb(cs.color);
      push(t, "text", { fs: f.size, fw: f.weight, lh: f.lineHeight, ls: f.letterSpacing || undefined, font: f.family, color: c ? W.hex(c) : null, lines: Math.max(1, Math.round(t.getBoundingClientRect().height / (f.size * f.lineHeight))), chars: text.length, upper: cs.textTransform === "uppercase" || undefined });
    }
    // tarjetas / superficies con fondo, borde o sombra propios
    count = 0;
    for (const el of root.getElementsByTagName("*")) {
      if (++count > 700) break;
      if (seen.has(el) || /^(A|BUTTON|IMG|VIDEO|CANVAS|SVG|PICTURE|INPUT|TEXTAREA|H1|H2|H3|H4|H5|H6|P|LI|SPAN)$/.test(el.tagName)) continue;
      const r = el.getBoundingClientRect();
      if (r.width * r.height < 14000 || r.width > vw * 0.94) continue;
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden") continue;
      const p = paint(cs);
      if (!p.bg && !p.bgImage && !p.border && !p.shadow) continue;
      // envoltorio e interior con la misma caja: es una sola tarjeta (se funden sus pinturas)
      const twin = raw.find((e) => e.k === "card" && Math.abs(e.r.left - r.left) < 4 && Math.abs(e.r.top - r.top) < 4 && Math.abs(e.r.width - r.width) < 6 && Math.abs(e.r.height - r.height) < 6);
      if (twin) { for (const [k, v] of Object.entries(p)) if (twin[k] === undefined) twin[k] = v; if (!twin.radius) twin.radius = radiusOf(cs, r); seen.add(el); continue; }
      push(el, "card", { radius: radiusOf(cs, r), pad: Math.round(parseFloat(cs.paddingTop) || 0), ...p });
    }

    // agrupar repetidos: misma clase de elemento, mismo tamaño, alineados en fila o columna
    const sim = (a, b, t) => Math.abs(a - b) <= t;
    const used = new Set(); const out = [];
    raw.sort((a, b) => a.y - b.y || a.x - b.x);
    for (let a = 0; a < raw.length; a++) {
      if (used.has(a)) continue;
      const A = raw[a]; const rowG = [A], colG = [A]; const rowI = [a], colI = [a];
      const inline = A.k === "link" || A.k === "button";
      for (let b = a + 1; b < raw.length; b++) {
        if (used.has(b)) continue;
        const B = raw[b];
        if (B.k !== A.k || !sim(A.h, B.h, Math.max(6, A.h * 0.12)) || (A.fs && !sim(A.fs, B.fs || 0, 0.6))) continue;
        const sameW = sim(A.w, B.w, Math.max(1.2, A.w * 0.08));
        // enlaces y botones en línea (menús, pies): mismo renglón aunque cada uno mida distinto
        if (!sameW && !(inline && sim(A.y, B.y, 8))) continue;
        if (sim(A.y, B.y, 8)) { if (rowG.every((g) => B.x >= g.x + g.w - 0.3 || B.x + B.w <= g.x + 0.3)) { rowG.push(B); rowI.push(b); } }
        else if (sim(A.x, B.x, 0.8)) { colG.push(B); colI.push(b); }
      }
      const { el: _el, r: _r, ...item } = A;
      if (rowG.length >= 2 && rowG.length >= colG.length) {
        rowI.forEach((x) => used.add(x));
        rowG.sort((p, q) => p.x - q.x);
        item.n = rowG.length; item.dir = "row"; item.gap = rnd(rowG[1].x - rowG[0].x - rowG[0].w, 1);
        item.span = rnd(rowG[rowG.length - 1].x + rowG[rowG.length - 1].w - rowG[0].x, 1);
        const ws = rowG.map((g) => g.w);
        if (Math.max(...ws) - Math.min(...ws) > Math.max(1.2, A.w * 0.08)) {
          item.varW = true; item.x = rowG[0].x;
          item.w = rnd(ws.reduce((t, v) => t + v, 0) / ws.length, 1);
          item.gap = rnd((item.span - ws.reduce((t, v) => t + v, 0)) / (rowG.length - 1), 1);
        }
      } else if (colG.length >= 2) {
        colI.forEach((x) => used.add(x));
        item.n = colG.length; item.dir = "column"; item.gapY = Math.round(colG[1].y - colG[0].y - colG[0].h);
      } else used.add(a);
      out.push(item);
    }
    // prioridad: lo grande y lo tipográficamente dominante primero; después se reordena por posición
    const weight = (e) => (/^h[1-6]$/.test(e.k) ? 5e5 + (e.fs || 0) * 1000 : e.k === "button" ? 4e5 : 0) + e.w * e.h * (e.n || 1);
    const kept = out.sort((p, q) => weight(q) - weight(p)).slice(0, 14).sort((p, q) => p.y - q.y || p.x - q.x);
    // márgenes laterales del contenido (lo que no es a sangre)
    const inner = raw.filter((e) => e.w < 96 && e.x >= 0 && e.x + e.w <= 100.5);
    const left = inner.length ? Math.min(...inner.map((e) => e.x)) : null;
    const right = inner.length ? Math.max(...inner.map((e) => e.x + e.w)) : null;
    for (const e of kept) for (const key of Object.keys(e)) if (e[key] === undefined || e[key] === null) delete e[key];

    // Contenedores con reglas Flex/Grid: jerarquía de layout que el plano plano
    // no tenía. Capturar display, flexDirection/wrap, justifyContent, alignItems,
    // gap y gridTemplateColumns para que el agente use layout estructurado y no
    // porcentajes absolutos.
    const containers = [];
    const seenCont = new Set();
    for (const e of kept) {
      let node = e.el.parentElement;
      while (node && node !== root) {
        const ncs = getComputedStyle(node);
        if (ncs.display.includes("flex") || ncs.display.includes("grid")) {
          if (!seenCont.has(node)) {
            seenCont.add(node);
            containers.push({
              desc: W.desc(node).slice(0, 60),
              display: ncs.display,
              flexDirection: ncs.flexDirection !== "row" ? ncs.flexDirection : undefined,
              flexWrap: ncs.flexWrap !== "nowrap" ? ncs.flexWrap : undefined,
              justifyContent: ncs.justifyContent !== "flex-start" ? ncs.justifyContent : undefined,
              alignItems: ncs.alignItems !== "stretch" ? ncs.alignItems : undefined,
              gap: ncs.gap && ncs.gap !== "0px" ? ncs.gap : undefined,
              gridTemplateColumns: ncs.gridTemplateColumns && ncs.gridTemplateColumns !== "none" ? ncs.gridTemplateColumns : undefined,
              maxWidth: ncs.maxWidth && ncs.maxWidth !== "none" ? ncs.maxWidth : undefined,
            });
          }
          break;
        }
        node = node.parentElement;
      }
    }

    return {
      elements: kept,
      container: left === null ? null : { left: Math.round((left / 100) * vw), right: Math.round((100 - right) / 100) * vw, widthPct: rnd(right - left, 1) },
      containers: containers.slice(0, 8),
    };
  };

  // Fuentes web que carga la página: de dónde vienen y con qué pesos.
  W.fontSources = () => {
    const links = [...document.querySelectorAll("link[href]")].map((l) => l.href)
      .filter((h) => /fonts\.googleapis\.com|use\.typekit\.net|fonts\.bunny\.net|rsms\.me\/inter|fontshare\.com|fonts\.adobe\.com/.test(h)).slice(0, 6);
    const faces = {};
    try {
      for (const f of document.fonts) {
        if (f.status !== "loaded") continue;
        const fam = String(f.family).replace(/^["']|["']$/g, "");
        const e = (faces[fam] = faces[fam] || { family: fam, weights: new Set(), italic: false });
        e.weights.add(String(f.weight));
        if (f.style === "italic") e.italic = true;
      }
    } catch { /* API no disponible */ }
    const hostOf = (u) => { try { return new URL(u).hostname; } catch { return ""; } };
    const provider = links.some((h) => /googleapis/.test(h)) ? "Google Fonts" : links.some((h) => /typekit|adobe/.test(h)) ? "Adobe Fonts" : links.length ? hostOf(links[0]) : null;
    return { provider, links, loaded: Object.values(faces).slice(0, 12).map((e) => ({ family: e.family, weights: [...e.weights].sort(), italic: e.italic })) };
  };

  W.describeStyle = () => {
    const vw = innerWidth, vh = innerHeight;
    const roles = {}; const families = {}; const sizes = {}; const textColors = {}; const accents = {}; const bgs = {};
    let totalChars = 0; let display = null;
    const add = (map, key, w, extra) => { if (!map[key]) map[key] = { w: 0, ...extra }; map[key].w += w; };
    for (const el of textEls(document.body)) {
      const cs = getComputedStyle(el); const r = el.getBoundingClientRect();
      if (!shown(el, cs, r) || +cs.opacity < 0.05) continue;
      const n = el.__wchars || 1; const f = fontOf(el, cs);
      totalChars += n;
      add(families, f.family, n, { generic: f.generic });
      add(sizes, f.size, n);
      const c = W.rgb(cs.color); if (c) add(textColors, W.hex(c), n);
      const h = el.closest("h1,h2,h3,h4,h5,h6");
      const btn = el.closest("a,button,[role=button]");
      let role = h ? h.tagName.toLowerCase() : btn && buttonLike(btn, getComputedStyle(btn)) ? "button"
        : el.closest("nav,header") && el.closest("a") ? "nav" : f.size < 13 ? "small" : "body";
      const key = `${f.family}|${f.size}|${f.weight}`;
      roles[role] = roles[role] || {};
      add(roles[role], key, n, { f });
      if (n >= 3 && (!display || f.size > display.size)) display = { ...f, sample: (el.innerText || "").trim().slice(0, 24) };
      if (c && sat(c) > 0.35 && (btn || el.tagName === "A")) add(accents, W.hex(c), n * f.size);
    }
    const typeRoles = {};
    for (const [role, map] of Object.entries(roles)) {
      const best = Object.values(map).sort((a, b) => b.w - a.w)[0];
      // para titulares manda el tamaño más grande con uso real
      const pick = /^h[1-3]$/.test(role) ? Object.values(map).filter((v) => v.w >= best.w * 0.3).sort((a, b) => b.f.size - a.f.size)[0] : best;
      typeRoles[role] = { ...pick.f, chars: pick.w };
    }

    const fx = { backdropFilter: 0, blendMode: 0, clipPath: 0, mask: 0, filter: 0, gradientBg: 0, gradientText: 0, textStroke: 0,
      roundedLarge: 0, shadow: 0, sticky: 0, fixed: 0, video: 0, canvas: 0, svg: 0, iframe: 0, scrollSnap: 0, overflowHiddenBlocks: 0, splitText: 0 };
    const transitions = {}; const cssAnims = {}; const radii = {}; let grainOverlay = false;
    const all = document.body.getElementsByTagName("*");
    const limit = Math.min(all.length, 8000);
    for (let i = 0; i < limit; i++) {
      const el = all[i]; const cs = getComputedStyle(el);
      if (cs.display === "none") continue;
      const r = el.getBoundingClientRect(); const area = r.width * r.height;
      const tag = el.tagName;
      if (tag === "VIDEO") fx.video++; else if (tag === "CANVAS") fx.canvas++; else if (tag === "svg") fx.svg++; else if (tag === "IFRAME") fx.iframe++;
      if (cs.backdropFilter && cs.backdropFilter !== "none") fx.backdropFilter++;
      if (cs.mixBlendMode && cs.mixBlendMode !== "normal") fx.blendMode++;
      if (cs.clipPath && cs.clipPath !== "none") fx.clipPath++;
      if ((cs.maskImage && cs.maskImage !== "none") || (cs.webkitMaskImage && cs.webkitMaskImage !== "none")) fx.mask++;
      if (cs.filter && cs.filter !== "none") fx.filter++;
      if (cs.backgroundImage.includes("gradient")) { if (cs.webkitBackgroundClip === "text" || cs.backgroundClip === "text") fx.gradientText++; else fx.gradientBg++; }
      if (parseFloat(cs.webkitTextStrokeWidth) > 0) fx.textStroke++;
      if (cs.boxShadow && cs.boxShadow !== "none") fx.shadow++;
      if (cs.position === "sticky") fx.sticky++;
      if (cs.position === "fixed") {
        fx.fixed++;
        if (cs.pointerEvents === "none" && r.width >= vw * 0.9 && r.height >= vh * 0.9 && (cs.backgroundImage !== "none" || tag === "CANVAS" || tag === "svg") && (+cs.opacity < 1 || cs.mixBlendMode !== "normal")) grainOverlay = true;
      }
      if (cs.scrollSnapType && cs.scrollSnapType !== "none") fx.scrollSnap++;
      if (/\b(char|word|line|split)/i.test(typeof el.className === "string" ? el.className : "")) fx.splitText++;
      const rad = parseFloat(cs.borderTopLeftRadius) || 0;
      if (area > 1500 && rad > 0) { const k = rad >= 999 || rad >= Math.min(r.width, r.height) / 2 ? "pill" : Math.round(rad); radii[k] = (radii[k] || 0) + 1; if (rad >= 16) fx.roundedLarge++; }
      if (area >= vw * vh * 0.04) { const c = W.rgb(cs.backgroundColor); if (c && c.a > 0.5) add(bgs, W.hex(c), area); }
      if (area > 300 && area < vw * vh * 0.25) {
        const c = W.rgb(cs.backgroundColor);
        if (c && c.a > 0.5 && sat(c) > 0.35) add(accents, W.hex(c), area);
      }
      const durs = cs.transitionDuration.split(",").map((d) => parseFloat(d) * (d.includes("ms") ? 1 : 1000));
      const dmax = Math.max(...durs);
      if (dmax > 0 && cs.transitionProperty !== "none") {
        const k = `${Math.round(dmax)}|${cs.transitionTimingFunction.split(/,(?![^(]*\))/)[0].trim()}`;
        transitions[k] = (transitions[k] || 0) + 1;
      }
      if (cs.animationName && cs.animationName !== "none") {
        const name = cs.animationName.split(",")[0].trim();
        if (!cssAnims[name]) cssAnims[name] = { name, duration: Math.round(parseFloat(cs.animationDuration) * 1000), easing: cs.animationTimingFunction.split(/,(?![^(]*\))/)[0].trim(),
          iterations: cs.animationIterationCount.split(",")[0].trim(), direction: cs.animationDirection.split(",")[0].trim(), count: 0 };
        cssAnims[name].count++;
      }
    }
    const bodyBg = W.bgOf(document.body).color;
    add(bgs, bodyBg, vw * vh);
    for (const s of W.secs || []) if (s.el) add(bgs, W.bgOf(s.el).color, s.height * vw);
    const top = (map, n, total) => {
      const sum = total || Object.values(map).reduce((s, v) => s + v.w, 0) || 1;
      return Object.entries(map).sort((a, b) => b[1].w - a[1].w).slice(0, n).map(([k, v]) => ({ value: k, share: rnd(v.w / sum, 3), ...(v.generic !== undefined ? { generic: v.generic } : {}) }));
    };
    let anims = [];
    try {
      anims = document.getAnimations().slice(0, 300).map((a) => {
        const t = a.effect?.getComputedTiming?.() || {}; const target = a.effect?.target;
        let props = [];
        try { props = [...new Set(a.effect.getKeyframes().flatMap((k) => Object.keys(k)))].filter((p) => !/^(offset|computedOffset|easing|composite)$/.test(p)); } catch {}
        return { type: a.constructor.name, name: a.animationName || a.transitionProperty || a.id || "", duration: Math.round(+t.duration || 0), delay: Math.round(+t.delay || 0),
          easing: t.easing || "", iterations: t.iterations === Infinity ? "infinite" : t.iterations, direction: t.direction, props, target: target ? W.desc(target).slice(0, 50) : "" };
      });
    } catch {}
    const html = document.documentElement; const hcs = getComputedStyle(html); const bcs = getComputedStyle(document.body);

    // FASE 2B — Tipografía fluida: capturar font-size con clamp()/vw/vh/em/rem
    // declarados en las hojas, para que el prompt replique el comportamiento
    // responsive real (no un px estático resuelto en un único viewport).
    const fluidScale = { rules: [], note: null };
    const FLUID_FONT_RE = /font-size\s*:\s*([^;}]+)/i;
    const FLUID_VALUE_RE = /(clamp\(|vw|vh|vmin|vmax|(?<!\w)em\b|rem\b)/i;
    try {
      for (const sheet of document.styleSheets) {
        let rules;
        try { rules = sheet.cssRules || sheet.rules; } catch { continue; } // cross-origin
        if (!rules) continue;
        for (const rule of rules) {
          const walk = (rs) => {
            for (const r of rs || []) {
              if (r instanceof CSSStyleRule) {
                const m = (r.cssText || "").match(FLUID_FONT_RE);
                if (m && FLUID_VALUE_RE.test(m[1])) {
                  const sel = (r.selectorText || "").split(",").map(s => s.trim()).slice(0, 2).join(",");
                  const tagM = sel.match(/^(h[1-6]|p|a|button|span|small|strong|em|\.[\w-]+|#[\w-]+)/i);
                  const tag = tagM ? tagM[1] : sel.slice(0, 24);
                  if (!fluidScale.rules.find(x => x.tag === tag && x.fluid === m[1].trim())) {
                    fluidScale.rules.push({ tag, selector: sel, fluid: m[1].trim() });
                  }
                }
              } else if (r instanceof CSSMediaRule) { walk(r.cssRules); }
            }
          };
          walk(rules);
        }
      }
    } catch {}
    if (fluidScale.rules.length) {
      fluidScale.note = `Se detectaron ${fluidScale.rules.length} regla(s) de font-size fluido. Repite exactamente estos clamp()/vw y los breakpoints de @media para heredar el comportamiento responsive del original.`;
    }

    const libs = {
      gsap: !!window.gsap, scrollTrigger: !!window.ScrollTrigger, lenis: !!(window.lenis || window.Lenis || html.classList.contains("lenis") || document.querySelector(".lenis")),
      locomotive: !!(window.LocomotiveScroll || document.querySelector("[data-scroll-container]")), scrollSmoother: !!window.ScrollSmoother,
      three: !!(window.THREE || window.__THREE__ || document.querySelector("canvas[data-engine*='three']")), swiper: !!document.querySelector(".swiper,.swiper-container"),
      barba: !!(window.barba || document.querySelector("[data-barba]")), framerMotion: !!document.querySelector("[data-projection-id],[data-framer-appear-id]"),
    };
    return {
      type: { roles: typeRoles, families: top(families, 5), sizes: top(sizes, 10).map((s) => ({ px: +s.value, share: s.share })).sort((a, b) => b.px - a.px), display },
      color: { pageBg: bodyBg, backgrounds: top(bgs, 6), texts: top(textColors, 6), accents: top(accents, 5) },
      effects: { ...fx, grainOverlay, cursorNone: hcs.cursor === "none" || bcs.cursor === "none", smoothScroll: libs.lenis || libs.locomotive || libs.scrollSmoother,
        cssSmoothScroll: hcs.scrollBehavior === "smooth", radii: Object.entries(radii).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([k, n]) => ({ radius: k, count: n })) },
      libs,
      fluidScale,
      motionTokens: Object.entries(transitions).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([k, n]) => { const [d, e] = k.split("|"); return { duration: +d, easing: e, count: n }; }),
      cssAnimations: Object.values(cssAnims).sort((a, b) => b.count - a.count).slice(0, 20),
      runningAnimations: anims,
      totalChars,
    };
  };

  // ---------- movimiento ----------
  W.pickCandidates = (max = 450) => {
    const vw = innerWidth, vh = innerHeight;
    const picked = []; const seen = new Set();
    const push = (el, kind) => {
      if (seen.has(el) || picked.length >= max) return;
      const cs = getComputedStyle(el); if (cs.display === "none") return;
      const r = el.getBoundingClientRect(); if (r.width < 6 || r.height < 6) return;
      seen.add(el);
      const docTop = r.top + scrollY;
      picked.push({ el, kind, desc: W.desc(el).slice(0, 70), tag: el.tagName.toLowerCase(), docTop: Math.round(docTop), w: Math.round(r.width), h: Math.round(r.height),
        big: r.height >= vh * 0.4 && r.width >= vw * 0.5, track: (r.height >= vh * 0.4 && r.width >= vw * 0.5) || cs.position === "fixed" || cs.position === "sticky", sec: W.sectionIndexOf(el, docTop + Math.min(r.height / 2, 10)), position: cs.position, stops: [], rects: [] });
    };
    for (const s of W.secs || []) if (s.el) { push(s.el, "section"); for (const c of s.el.children) { push(c, "block"); for (const g of c.children) push(g, "block"); } }
    document.querySelectorAll("h1,h2,h3,h4").forEach((el) => push(el, "heading"));
    document.querySelectorAll("img,video,canvas,picture,figure").forEach((el) => push(el, "media"));
    document.querySelectorAll("a,button,[role=button]").forEach((el) => push(el, "action"));
    document.querySelectorAll("p,li,blockquote").forEach((el) => push(el, "text"));
    let charish = 0;
    const all = document.body.getElementsByTagName("*");
    for (let i = 0; i < all.length && i < 8000 && picked.length < max; i++) {
      const el = all[i]; if (seen.has(el)) continue;
      const cs = getComputedStyle(el);
      const styled = cs.transform !== "none" || +cs.opacity < 1 || cs.clipPath !== "none" || cs.willChange !== "auto" || cs.position === "sticky" || cs.position === "fixed";
      if (!styled) continue;
      const tiny = (el.textContent || "").trim().length <= 2 && el.children.length === 0;
      if (tiny && ++charish > 40) continue;
      push(el, tiny ? "char" : "styled");
    }
    W.cands = picked;
    return picked.length;
  };

  const sample = (el) => {
    const cs = getComputedStyle(el);
    let tx = 0, ty = 0, sc = 1, rot = 0;
    if (cs.transform && cs.transform !== "none") {
      try { const m = new DOMMatrixReadOnly(cs.transform); tx = m.m41; ty = m.m42; sc = Math.hypot(m.a, m.b); rot = Math.atan2(m.b, m.a) * 57.2958; } catch {}
    }
    if (cs.translate && cs.translate !== "none") { const p = cs.translate.split(" ").map(parseFloat); tx += p[0] || 0; ty += p[1] || 0; }
    if (cs.scale && cs.scale !== "none") sc *= parseFloat(cs.scale) || 1;
    return { o: +cs.opacity, tx, ty, sc, rot, cp: cs.clipPath === "none" ? "" : cs.clipPath, fl: cs.filter === "none" ? "" : cs.filter, v: cs.visibility === "hidden" ? 0 : 1 };
  };
  const differs = (a, b) => Math.abs(a.o - b.o) > 0.01 || Math.abs(a.tx - b.tx) > 0.5 || Math.abs(a.ty - b.ty) > 0.5 || Math.abs(a.sc - b.sc) > 0.004 || Math.abs(a.rot - b.rot) > 0.3 || a.cp !== b.cp || a.fl !== b.fl || a.v !== b.v;
  const pack = (s) => [rnd(s.o), rnd(s.tx, 1), rnd(s.ty, 1), rnd(s.sc, 3), rnd(s.rot, 1), s.cp, s.fl, s.v];
  // Timing exacto cuando la animación es CSS/WAAPI (GSAP y similares no aparecen aquí).
  const cssTiming = (el) => {
    try {
      const a = el.getAnimations().filter((x) => x.playState === "running" || x.playState === "finished")[0];
      if (!a) return null;
      const t = a.effect.getComputedTiming();
      if (t.iterations === Infinity) return null;
      return { duration: Math.round(+t.duration || 0), delay: Math.round(+t.delay || 0), easing: t.easing === "linear" && a.effect.getKeyframes()[0]?.easing ? a.effect.getKeyframes()[0].easing : t.easing };
    } catch { return null; }
  };
  const frame = () => new Promise((r) => requestAnimationFrame(() => r(performance.now())));

  // Una parada: fija el scroll, y muestrea cada frame durante `dwell` ms.
  W.motionStop = async (y, dwell, maxDwell) => {
    const vh = innerHeight;
    W.scrollTo(y);
    const t0 = await frame();
    const live = [];
    for (const c of W.cands) {
      const r = c.el.getBoundingClientRect();
      if (c.track) c.rects.push([Math.round(y), Math.round(r.top), Math.round(r.left)]);
      if (r.bottom < -vh * 0.15 || r.top > vh * 1.15) continue;
      const s = sample(c.el);
      live.push({ c, first: s, last: s, ts: null, te: null, pts: [[0, ...pack(s).slice(0, 4)]], prevT: 0 });
    }
    let t = 0, recent = 0;
    while (t < dwell || (t < (maxDwell || dwell) && t - recent < 130)) {
      t = (await frame()) - t0;
      for (const L of live) {
        const s = sample(L.c.el);
        if (differs(s, L.last)) {
          if (L.ts === null) { L.ts = L.prevT; if (!L.c.css) L.c.css = cssTiming(L.c.el); }
          L.te = t; L.last = s;
          if (!L.c.loopish) recent = t;
          if (L.pts.length < 40) L.pts.push([Math.round(t), ...pack(s).slice(0, 4)]);
        }
        L.prevT = t;
      }
    }
    for (const L of live) {
      const r = L.c.el.getBoundingClientRect();
      L.c.stops.push({ y: Math.round(y), f: pack(L.first), l: pack(L.last), ts: L.ts === null ? null : Math.round(L.ts), te: L.te === null ? null : Math.round(L.te),
        pts: L.ts === null ? undefined : L.pts, top: Math.round(r.top), left: Math.round(r.left), open: L.te !== null && L.te > t - 70 });
      const st = L.c.stops;
      L.c.loopish = st.length >= 2 && st.every((x) => x.open);
    }
    return live.length;
  };

  // Animaciones de carga: se muestrean desde DOMContentLoaded, antes de que
  // exista la lista de candidatos.
  W.intro = { tracks: new Map(), done: false, ms: 0 };
  W.startIntro = (ms) => {
    const I = W.intro; I.ms = ms;
    const t0 = performance.now();
    const adopt = () => {
      if (!document.body || I.tracks.size >= 140) return;
      const vh = innerHeight;
      for (const el of document.body.querySelectorAll("h1,h2,h3,p,a,button,img,video,canvas,picture,figure,section,header,nav,main > *,section > *,section > * > *")) {
        if (I.tracks.size >= 140) break;
        if (I.tracks.has(el)) continue;
        const r = el.getBoundingClientRect();
        if (r.width < 6 || r.height < 6 || r.top > vh * 1.1 || r.bottom < 0) continue;
        const s = sample(el); const t = performance.now() - t0;
        I.tracks.set(el, { first: s, last: s, ts: null, te: null, pts: [[Math.round(t), ...pack(s).slice(0, 4)]], prevT: t, born: t });
      }
    };
    let nextAdopt = 0;
    const tick = () => {
      const t = performance.now() - t0;
      if (t >= nextAdopt) { adopt(); nextAdopt = t < 400 ? t + 120 : t + 500; }
      for (const [el, L] of I.tracks) {
        if (!el.isConnected) continue;
        const s = sample(el);
        if (differs(s, L.last)) { if (L.ts === null) { L.ts = L.prevT; L.css = cssTiming(el); } L.te = t; L.last = s; if (L.pts.length < 50) L.pts.push([Math.round(t), ...pack(s).slice(0, 4)]); }
        L.prevT = t;
      }
      if (t < ms && scrollY < 4) requestAnimationFrame(tick); else I.done = true;
    };
    requestAnimationFrame(tick);
  };
  const mergeIntro = () => {
    const I = W.intro; if (!I.tracks.size) return;
    const byEl = new Map(W.cands.map((c) => [c.el, c]));
    for (const [el, L] of I.tracks) {
      if (L.ts === null || !el.isConnected) continue;
      let c = byEl.get(el);
      if (!c) {
        const r = el.getBoundingClientRect();
        c = { el, css: L.css, kind: "intro", desc: W.desc(el).slice(0, 70), tag: el.tagName.toLowerCase(), docTop: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height), big: false, track: false, sec: W.sectionIndexOf(el, r.top + scrollY + 5), position: "", stops: [], rects: [] };
        W.cands.push(c);
      }
      if (L.css && !c.css) c.css = L.css;
      c.stops.unshift({ y: 0, f: pack(L.first), l: pack(L.last), ts: Math.round(L.ts), te: Math.round(L.te), pts: L.pts, intro: true, open: L.te > I.ms - 70 });
    }
    I.tracks.clear();
  };

  W.motionResult = () => (mergeIntro(), W.cands).map((c, id) => ({ id, kind: c.kind, desc: c.desc, tag: c.tag, docTop: c.docTop, w: c.w, h: c.h, big: c.big, track: c.track, sec: c.sec, position: c.position, css: c.css, stops: c.stops, rects: c.rects }))
    .filter((c) => c.track || c.stops.some((s) => s.ts !== null) || new Set(c.stops.map((s) => s.l.join("|"))).size > 1);

  // ---------- hover ----------
  W.hoverTargets = (max = 14) => {
    const out = []; const sigs = new Set();
    const els = [...document.querySelectorAll("a,button,[role=button]")];
    document.querySelectorAll("figure,article,li,div").forEach((el) => {
      if (els.length < 600 && getComputedStyle(el).cursor === "pointer" && !(el.parentElement && getComputedStyle(el.parentElement).cursor === "pointer") && !el.closest("a,button")) els.push(el);
    });
    for (const el of els) {
      if (out.length >= max) break;
      const cs = getComputedStyle(el); const r = el.getBoundingClientRect();
      if (!shown(el, cs, r) || r.width < 12 || r.height < 10 || +cs.opacity < 0.2 || cs.pointerEvents === "none") continue;
      const kind = buttonLike(el, cs) ? "button" : (el.querySelector("img,video,picture") || r.height > 160) ? "card" : "link";
      const sig = kind + "|" + (typeof el.className === "string" ? el.className.split(/\s+/).slice(0, 2).join(".") : "") + "|" + el.tagName;
      if (sigs.has(sig)) continue;
      sigs.add(sig);
      out.push({ id: W.hover.push(el) - 1, kind, desc: W.desc(el).slice(0, 60), docTop: Math.round(r.top + scrollY), h: Math.round(r.height) });
    }
    return out;
  };
  const snapOne = (el, pseudo) => {
    const cs = getComputedStyle(el, pseudo || null);
    if (pseudo && (cs.content === "none" || cs.content === "normal")) return null;
    return { color: cs.color, "background-color": cs.backgroundColor, "border-color": cs.borderTopColor, transform: cs.transform, opacity: cs.opacity,
      "box-shadow": cs.boxShadow, "text-decoration": cs.textDecorationLine, filter: cs.filter, "clip-path": cs.clipPath, "letter-spacing": cs.letterSpacing,
      width: pseudo ? cs.width : "", "background-position": cs.backgroundPosition };
  };
  W.hoverSnap = (id) => {
    const el = W.hover[id]; if (!el) return null;
    const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
    let child = el.querySelector("img,video,picture");
    if (!child) child = [...el.querySelectorAll("*")].slice(0, 40).find((d) => parseFloat(getComputedStyle(d).transitionDuration) > 0) || el.querySelector("svg,span,div");
    const durs = cs.transitionDuration.split(",").map((d) => parseFloat(d) * (d.includes("ms") ? 1 : 1000));
    return { x: r.left + r.width / 2, y: r.top + Math.min(r.height / 2, 40), inView: r.top + Math.min(r.height / 2, 40) >= 0 && r.top + Math.min(r.height / 2, 40) <= innerHeight - 4,
      self: snapOne(el), before: snapOne(el, "::before"), after: snapOne(el, "::after"), child: child ? snapOne(child) : null,
      childTag: child ? child.tagName.toLowerCase() : null, duration: Math.round(Math.max(0, ...durs)), easing: cs.transitionTimingFunction.split(/,(?![^(]*\))/)[0].trim() };
  };
  W.cursorFollower = (x, y) => {
    for (const el of document.body.getElementsByTagName("*")) {
      const cs = getComputedStyle(el);
      if (cs.position !== "fixed" && cs.position !== "absolute") continue;
      if (cs.pointerEvents !== "none") continue;
      const r = el.getBoundingClientRect();
      if (r.width < 4 || r.width > 160 || r.height < 4 || r.height > 160) continue;
      if (Math.abs(r.left + r.width / 2 - x) < 70 && Math.abs(r.top + r.height / 2 - y) < 70) return { desc: W.desc(el).slice(0, 50), size: Math.round(r.width), blend: cs.mixBlendMode };
    }
    return null;
  };

  W.pageMetrics = () => {
    const docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    // Con un contenedor de scroll fijo (ScrollSmoother, etc.) el documento no
    // crece: la altura real la dan las secciones medidas dentro del contenedor.
    let secH = 0;
    for (const s of W.secs || []) secH = Math.max(secH, (s.top || 0) + (s.height || 0));
    return {
      vw: innerWidth, vh: innerHeight,
      docHeight: Math.max(docH, secH),
      title: document.title, lang: document.documentElement.lang || "",
      overflowX: Math.max(0, document.documentElement.scrollWidth - innerWidth),
    };
  };

  // ---------- elementos fijos / sticky (nav, header, footer fijo) ----------
  // Antes se excluían de findSections (position: fixed), así que el nav/header
  // no entraba en los planos. Ahora se capturan aparte con su contenido para
  // que el agente replique el nav fijo y el menú móvil.
  W.fixedElements = () => {
    const vw = innerWidth, vh = innerHeight;
    const out = [];
    const seen = new Set();
    const all = document.body.getElementsByTagName("*");
    const limit = Math.min(all.length, 6000);
    for (let i = 0; i < limit; i++) {
      const el = all[i];
      const cs = getComputedStyle(el);
      if (cs.position !== "fixed" && cs.position !== "sticky") continue;
      if (cs.display === "none" || cs.visibility === "hidden") continue;
      const r = el.getBoundingClientRect();
      if (r.width < 12 || r.height < 12) continue;
      if (seen.has(el)) continue;
      seen.add(el);
      const bg = W.bgOf(el);
      const txt = (el.innerText || "").replace(/\s+/g, " ").trim().slice(0, 80);
      const links = [...el.querySelectorAll("a,button,[role=button]")].slice(0, 12).map((b) => ({
        text: (b.innerText || "").replace(/\s+/g, " ").trim().slice(0, 40),
        tag: b.tagName.toLowerCase(),
      })).filter((b) => b.text);
      // Un wrapper que contiene al nav fijo se considera un único elemento.
      if (el.parentElement && (getComputedStyle(el.parentElement).position === "fixed" || getComputedStyle(el.parentElement).position === "sticky")) continue;
      out.push({
        desc: W.desc(el).slice(0, 60),
        tag: el.tagName.toLowerCase(),
        position: cs.position,
        x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height),
        bg: bg.color, bgImage: bg.image,
        backdrop: cs.backdropFilter && cs.backdropFilter !== "none" ? cs.backdropFilter : undefined,
        text: txt || null,
        links,
      });
    }
    return out.slice(0, 12);
  };
}
