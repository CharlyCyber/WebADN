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
  W.findSections = () => {
    const vw = innerWidth, vh = innerHeight;
    const docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const info = (el) => {
      const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
      return { el, r, cs, ok: shown(el, cs, r) && cs.position !== "fixed" && r.width >= vw * 0.6 };
    };
    const minH = (el) => (/^(header|nav|footer)$/i.test(el.tagName) ? 48 : vh * 0.12);
    let root = document.body;
    for (let i = 0; i < 10; i++) {
      const kids = [...root.children].map(info).filter((k) => k.ok && k.r.height >= minH(k.el));
      if (kids.length === 1 && kids[0].r.height >= root.getBoundingClientRect().height * 0.7) root = kids[0].el;
      else break;
    }
    let list = [...root.children].map(info).filter((k) => k.ok && k.r.height >= minH(k.el)).map((k) => k.el);
    for (let pass = 0; pass < 3; pass++) {
      const next = [];
      let changed = false;
      for (const el of list) {
        const h = el.getBoundingClientRect().height;
        const kids = [...el.children].map(info).filter((k) => k.ok && k.r.height >= minH(k.el));
        const cover = kids.reduce((s, k) => s + k.r.height, 0);
        const semantic = kids.filter((k) => /^(section|article|header|footer)$/i.test(k.el.tagName)).length;
        if (h > vh * 2.2 && kids.length >= 2 && cover >= h * 0.7 && (semantic >= 2 || list.length < 3)) {
          next.push(...kids.map((k) => k.el)); changed = true;
        } else next.push(el);
      }
      list = next;
      if (!changed) break;
    }
    list = list
      .map((el) => ({ el, top: el.getBoundingClientRect().top + scrollY, height: el.getBoundingClientRect().height }))
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

  // ---------- tipografía + color + efectos (una sola pasada) ----------
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
    window.scrollTo(0, y);
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

  W.pageMetrics = () => ({
    vw: innerWidth, vh: innerHeight,
    docHeight: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
    title: document.title, lang: document.documentElement.lang || "",
    overflowX: Math.max(0, document.documentElement.scrollWidth - innerWidth),
  });
}
