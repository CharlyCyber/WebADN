export async function mapSections(page) {
  const sections = await page.evaluate(() => {
    const rolePatterns = {
      hero: { signals: ["h1", "first", "cta", "large"] },
      nav: { signals: ["nav", "menu", "logo"] },
      proof: { signals: ["testimonial", "client", "metric", "stat", "number", "award"] },
      showcase: { signals: ["gallery", "portfolio", "project", "work", "case"] },
      service: { signals: ["service", "feature", "offering", "solution", "capability"] },
      process: { signals: ["step", "process", "how", "method", "approach", "phase"] },
      pricing: { signals: ["price", "plan", "tier", "package", "subscription", "$", "/mo"] },
      team: { signals: ["team", "member", "founder", "staff", "about", "leadership"] },
      contact: { signals: ["contact", "form", "email", "phone", "reach", "book", "get in touch"] },
      footer: { signals: ["footer", "copyright", "legal", "privacy", "terms"] }
    };

    function guessRole(el, index, totalSections, headings, ctas, textContent) {
      const reasons = [];
      const scores = {};
      const textLower = textContent.toLowerCase();
      const headingText = headings.map((h) => h.text.toLowerCase()).join(" ");

      for (const [role, config] of Object.entries(rolePatterns)) {
        let score = 0;
        if (role === "hero" && index === 0) { score += 0.3; reasons.push("first section"); }
        if (role === "footer" && index === totalSections - 1) { score += 0.3; reasons.push("last section"); }
        for (const signal of config.signals) {
          if (headingText.includes(signal) || textLower.includes(signal)) { score += 0.2; reasons.push(`contains "${signal}"`); }
        }
        if (headings.some((h) => h.level === "H1") && role === "hero") { score += 0.25; reasons.push("contains h1"); }
        if (ctas.length > 0 && (role === "hero" || role === "contact" || role === "pricing")) { score += 0.15; reasons.push("contains CTA"); }
        if (role === "nav" && el.tagName.toLowerCase() === "header") { score += 0.2; reasons.push("header element"); }
        scores[role] = score;
      }

      const bestRole = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
      return { role: bestRole[0], confidence: Math.min(0.95, bestRole[1]), reasons: [...new Set(reasons)].slice(0, 4) };
    }

    function inferLayoutType(styles, el) {
      const display = styles.display;
      if (display.includes("grid")) return "CSS Grid";
      if (display.includes("flex")) return "Flexbox";
      if (display === "block") {
        const floated = [...el.children].some((c) => getComputedStyle(c).float !== "none");
        return floated ? "Floated layout" : "Block flow";
      }
      return display || "unknown";
    }

    const sectionSelectors = ["main > section", "[data-section]", "section", "article", "header", "footer"];
    const sectionElements = [];

    for (const selector of sectionSelectors) {
      const found = [...document.querySelectorAll(selector)];
      for (const el of found) {
        if (!sectionElements.includes(el)) sectionElements.push(el);
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
      if (!sectionElements.includes(div)) sectionElements.push(div);
    }

    return sectionElements.map((el, index) => {
      const rect = el.getBoundingClientRect();
      const textContent = (el.textContent || "").replace(/\s+/g, " ").trim();
      const headings = [...el.querySelectorAll("h1, h2, h3, h4, h5, h6")].map((h) => ({
        level: h.tagName,
        text: h.textContent.replace(/\s+/g, " ").trim().slice(0, 150)
      }));
      const ctas = [...el.querySelectorAll("a, button")]
        .map((node) => node.textContent.replace(/\s+/g, " ").trim())
        .filter((text) => text.length > 2 && text.length < 80);
      const styles = getComputedStyle(el);
      const roleGuess = guessRole(el, index, sectionElements.length, headings, ctas, textContent);

      return {
        index,
        tag: el.tagName.toLowerCase(),
        viewportPosition: {
          top: Math.round(rect.top), left: Math.round(rect.left),
          width: Math.round(rect.width), height: Math.round(rect.height)
        },
        height: Math.round(rect.height),
        isFullViewport: rect.height >= window.innerHeight * 0.85,
        textHierarchy: headings,
        ctaText: ctas.slice(0, 5),
        layoutType: inferLayoutType(styles, el),
        background: {
          color: styles.backgroundColor !== "rgba(0, 0, 0, 0)" ? styles.backgroundColor : null,
          image: styles.backgroundImage !== "none" ? styles.backgroundImage.slice(0, 200) : null
        },
        mediaElements: {
          images: el.querySelectorAll("img").length,
          videos: el.querySelectorAll("video").length,
          canvases: el.querySelectorAll("canvas").length,
          svgs: el.querySelectorAll("svg").length
        },
        stickyDescendants: [...el.querySelectorAll("*")].filter((child) => getComputedStyle(child).position === "sticky").length,
        fixedDescendants: [...el.querySelectorAll("*")].filter((child) => getComputedStyle(child).position === "fixed").length,
        hasCanvas: el.querySelectorAll("canvas").length > 0,
        hasVideo: el.querySelectorAll("video").length > 0,
        hasSvg: el.querySelectorAll("svg").length > 0,
        role: roleGuess.role,
        confidence: roleGuess.confidence,
        reasons: roleGuess.reasons,
        textPreview: textContent.slice(0, 200)
      };
    });
  });

  return sections;
}
