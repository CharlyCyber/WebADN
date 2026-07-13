const SECTION_SELECTORS = [
  "main > section",
  "[data-section]",
  "section",
  "article",
  "header",
  "footer"
];

const KEY_STYLE_PROPS = [
  "display", "position", "width", "height", "minHeight", "maxWidth",
  "margin", "marginTop", "marginRight", "marginBottom", "marginLeft",
  "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
  "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing",
  "textTransform", "textAlign", "color",
  "backgroundColor", "backgroundImage", "backgroundSize", "backgroundPosition",
  "border", "borderRadius", "borderTop", "borderRight", "borderBottom", "borderLeft",
  "boxShadow", "opacity",
  "transform", "transition", "animation",
  "gridTemplateColumns", "gridTemplateRows", "gap", "rowGap", "columnGap",
  "alignItems", "justifyContent", "flexDirection", "flexWrap",
  "overflow", "zIndex", "clipPath", "backdropFilter", "mixBlendMode",
  "objectFit", "objectPosition",
  "textShadow", "filter", "willChange"
];

export async function extractSectionStructure(page, _sections) {
  const structure = await page.evaluate((opts) => {
    const textTags = new Set(["h1", "h2", "h3", "h4", "h5", "h6", "p", "a", "button", "span", "li", "label", "blockquote", "cite", "figcaption"]);
    const mediaTags = new Set(["img", "video", "canvas", "svg", "picture", "source", "iframe"]);

    function findSectionElements() {
      const elements = [];
      for (const selector of opts.sectionSelectors) {
        const found = [...document.querySelectorAll(selector)];
        for (const el of found) {
          if (!elements.includes(el)) elements.push(el);
        }
      }
      const largeDivs = [...document.querySelectorAll("div")]
        .filter((div) => {
          const rect = div.getBoundingClientRect();
          return rect.height > window.innerHeight * 0.65 && rect.width > window.innerWidth * 0.5;
        })
        .filter((div) => {
          const parent = div.parentElement;
          return !parent || (parent.tagName !== "SECTION" && parent.tagName !== "ARTICLE");
        });
      for (const div of largeDivs) {
        if (!elements.includes(div)) elements.push(div);
      }
      return elements;
    }

    function getComputedMap(el, props) {
      const cs = getComputedStyle(el);
      const map = {};
      for (const p of props) {
        const v = cs[p];
        if (v && v !== "none" && v !== "normal" && v !== "auto" && v !== "0px" && !v.startsWith("rgba(0, 0, 0, 0)") && p !== "color" && p !== "fontSize" && p !== "fontWeight") {
          map[p] = v;
        }
      }
      if (cs.color && cs.color !== "rgba(0, 0, 0, 0)") map.color = cs.color;
      if (cs.fontSize) map.fontSize = cs.fontSize;
      if (cs.fontWeight) map.fontWeight = cs.fontWeight;
      return map;
    }

    function getBackgroundDetails(el) {
      const cs = getComputedStyle(el);
      const bg = { color: cs.backgroundColor };
      if (cs.backgroundImage && cs.backgroundImage !== "none") {
        bg.image = cs.backgroundImage.slice(0, 300);
      }
      if (cs.backgroundSize && cs.backgroundSize !== "auto") bg.size = cs.backgroundSize;
      if (cs.backgroundPosition && cs.backgroundPosition !== "0% 0%") bg.position = cs.backgroundPosition;
      return bg;
    }

    function getLayoutConfig(el) {
      const cs = getComputedStyle(el);
      const cfg = { display: cs.display };
      if (cs.display.includes("grid")) {
        cfg.gridTemplateColumns = cs.gridTemplateColumns;
        cfg.gridTemplateRows = cs.gridTemplateRows;
        cfg.gap = cs.gap;
        cfg.alignItems = cs.alignItems;
        cfg.justifyContent = cs.justifyContent;
      }
      if (cs.display.includes("flex")) {
        cfg.flexDirection = cs.flexDirection;
        cfg.flexWrap = cs.flexWrap;
        cfg.alignItems = cs.alignItems;
        cfg.justifyContent = cs.justifyContent;
        cfg.gap = cs.gap;
      }
      return cfg;
    }

    function extractElementStyle(el, props) {
      const cs = getComputedStyle(el);
      const styles = {};
      const rect = el.getBoundingClientRect();
      for (const p of props) {
        const v = cs[p];
        if (v && v !== "none" && v !== "normal" && v !== "auto" && v !== "0px" && v !== "rgba(0, 0, 0, 0)") {
          if (p === "color" || p === "backgroundColor" || p === "fontSize" || p === "fontWeight") {
            styles[p] = v;
          } else if (!v.startsWith("rgba(0,0,0,0)")) {
            styles[p] = v;
          }
        }
      }
      styles._area = Math.round(rect.width * rect.height);
      return styles;
    }

    function getAnimationDetails(el) {
      const cs = getComputedStyle(el);
      const info = {};
      if (cs.animation && cs.animation !== "none") info.animation = cs.animation.slice(0, 200);
      if (cs.transition && cs.transition !== "none") info.transition = cs.transition.slice(0, 200);
      if (cs.transform && cs.transform !== "none") info.transform = cs.transform.slice(0, 200);
      if (cs.willChange && cs.willChange !== "auto") info.willChange = cs.willChange;
      return Object.keys(info).length ? info : null;
    }

    const allElements = findSectionElements();

    return allElements.map((sectionEl, idx) => {
      const rect = sectionEl.getBoundingClientRect();
      const hasSvg = sectionEl.querySelector("svg") !== null;
      const hasCanvas = sectionEl.querySelector("canvas") !== null;
      const outerHTML = (hasSvg || hasCanvas)
        ? sectionEl.outerHTML.slice(0, 30000)
        : sectionEl.outerHTML.slice(0, 8000);

      const heroSvg = hasSvg && idx === 0
        ? sectionEl.querySelector("svg")?.outerHTML || null
        : null;

      const keyChildren = [];
      const walkQueue = [[sectionEl, 0]];
      const visited = new Set();
      const maxDepth = 5;

      while (walkQueue.length > 0) {
        const [node, depth] = walkQueue.shift();
        if (depth > maxDepth) continue;
        if (!node || visited.has(node)) continue;
        visited.add(node);
        if (node !== sectionEl && node.nodeType === 1) {
          const tag = node.tagName.toLowerCase();
          if (textTags.has(tag) || mediaTags.has(tag) || tag === "div") {
            keyChildren.push({
              tag,
              classList: [...node.classList].join(" ").slice(0, 200),
              id: node.id || null,
              textContent: (node.textContent || "").replace(/\s+/g, " ").trim().slice(0, 150) || null,
              src: node.src || node.getAttribute("src") || null,
              alt: node.alt || null,
              href: node.href || null,
              styles: extractElementStyle(node, opts.keyProps),

              rect: {
                width: Math.round(node.getBoundingClientRect().width),
                height: Math.round(node.getBoundingClientRect().height)
              },
              animation: getAnimationDetails(node),
              depth
            });
          }
        }
        if (node.nodeType === 1) {
          for (const child of node.children) {
            walkQueue.push([child, depth + 1]);
          }
        }
      }

      keyChildren.sort((a, b) => b.styles._area - a.styles._area);

      return {
        index: idx,
        tag: sectionEl.tagName.toLowerCase(),
        classList: [...sectionEl.classList].join(" ").slice(0, 300),
        id: sectionEl.id || null,
        htmlSnippet: outerHTML,
        heroSvg,
        hasSvg,
        hasCanvas,
        computedStyles: getComputedMap(sectionEl, opts.keyProps),
        background: getBackgroundDetails(sectionEl),
        layoutConfig: getLayoutConfig(sectionEl),
        keyChildren: keyChildren.slice(0, 30),
        elementCount: sectionEl.querySelectorAll("*").length,
        textLength: (sectionEl.textContent || "").length
      };
    });
  }, { sectionSelectors: SECTION_SELECTORS, keyProps: KEY_STYLE_PROPS });

  return structure;
}
