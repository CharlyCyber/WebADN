const SECTION_ROLE_LABELS = {
  hero: "Hero — First impression, value prop, primary CTA",
  nav: "Navigation — Brand, menu, optional CTA",
  proof: "Proof/Trust — Metrics, testimonials, logos, results",
  showcase: "Showcase — Portfolio, projects, featured work",
  service: "Services/Features — What you offer, how it works",
  process: "Process — Methodology, steps, timeline",
  pricing: "Pricing — Tiers, plans, packages, ROI",
  team: "Team/About — Who we are, mission, culture",
  contact: "Contact/Booking — Form, calendar, CTA",
  footer: "Footer — Links, legal, social, brand",
  cta: "CTA Banner — Final call-to-action section",
};

export function buildNicheTranslationTable(inspection, niche) {
  const sections = inspection.sections || [];
  const structure = inspection.sectionStructure || [];

  if (!sections.length) {
    return `# Nicho: ${niche}\n\nNo sections detected. Build a standard landing adapted to "${niche}".`;
  }

  const parts = [`# Nicho: "${niche}" — Template de Traducción de Contenido\n`];
  parts.push(`> Instrucciones: Rellena los campos [____] con tu copy de ${niche}. Preserva todas las clases CSS, animaciones y estilos visuales extraídos.\n`);

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const struct = structure[i] || {};
    const role = section.role || "unknown";
    const roleLabel = SECTION_ROLE_LABELS[role] || `Section ${i + 1}`;
    const classList = struct.classList || section.tag || "";

    parts.push(`## Sección ${i + 1}: ${roleLabel}`);
    parts.push(`**Clases:** \`.${classList.replace(/\s+/g, " .")}\``);

    const headings = extractHeadings(section, struct);
    for (const h of headings) {
      const preserve = [];
      if (h.className) preserve.push(`class="${h.className}"`);
      if (h.animation) preserve.push(`anim: ${trunc(h.animation, 80)}`);
      if (h.styles) {
        const s = [];
        if (h.styles.color) s.push(`color: ${h.styles.color}`);
        if (h.styles.fontSize) s.push(`fs: ${h.styles.fontSize}`);
        if (h.styles.fontWeight) s.push(`fw: ${h.styles.fontWeight}`);
        if (s.length) preserve.push(s.join(", "));
      }
      parts.push(`\n  **<${h.tag}>** original: "${trunc(h.text, 80)}"`);
      parts.push(`  → **Tu ${h.tag}:** [________________________________________]`);
      parts.push(`  *Preserva: ${preserve.length ? preserve.join(" | ") : "estilo y clase"}*`);
    }

    const ctas = extractCtas(section, struct);
    for (const cta of ctas) {
      const preserve = [];
      if (cta.className) preserve.push(`class="${cta.className}"`);
      if (cta.animation) {
        if (cta.animation.transition) preserve.push(`hover: ${trunc(cta.animation.transition, 60)}`);
        if (cta.animation.transform) preserve.push(`transform: ${trunc(cta.animation.transform, 60)}`);
      }
      if (cta.styles) {
        const s = [];
        if (cta.styles.backgroundColor) s.push(`bg: ${cta.styles.backgroundColor}`);
        if (cta.styles.color) s.push(`color: ${cta.styles.color}`);
        if (cta.styles.borderRadius) s.push(`radius: ${cta.styles.borderRadius}`);
        if (s.length) preserve.push(s.join(", "));
      }
      parts.push(`\n  **<${cta.tag}>** original: "${trunc(cta.text, 60)}"`);
      parts.push(`  → **Tu CTA:** [________________________________________]`);
      parts.push(`  *Preserva: ${preserve.length ? preserve.join(" | ") : "clase y hover effect"}*`);
    }

    const texts = extractTexts(struct);
    for (const t of texts) {
      parts.push(`\n  **<${t.tag}>** texto original: "${trunc(t.text, 60)}"`);
      parts.push(`  → **Tu texto:** [________________________________________]`);
      if (t.styles?.color) parts.push(`  *Preserva color: ${t.styles.color}*`);
    }

    const layout = struct.layoutConfig || {};
    if (layout.display) {
      parts.push(`\n  **Layout:** ${layout.display}${layout.flexDirection ? `, direction: ${layout.flexDirection}` : ""}${layout.gap ? `, gap: ${layout.gap}` : ""}`);
    }

    if (struct.background) {
      const bgInfo = [];
      if (struct.background.color) bgInfo.push(struct.background.color);
      if (struct.background.image) bgInfo.push("bg-image");
      if (bgInfo.length) parts.push(`  **Fondo:** ${bgInfo.join(", ")}`);
    }

    parts.push(""); // blank line separator
  }

  return parts.join("\n");
}

function extractHeadings(section, struct) {
  const result = [];
  const seen = new Set();

  if (section.textHierarchy) {
    for (const h of section.textHierarchy) {
      if (!seen.has(h.text)) {
        seen.add(h.text);
        result.push({ tag: h.level || "h?", text: h.text, className: "", animation: null, styles: null });
      }
    }
  }

  if (struct.keyChildren) {
    for (const child of struct.keyChildren) {
      if (/^h[1-6]$/.test(child.tag) && child.textContent && !seen.has(child.textContent)) {
        seen.add(child.textContent);
        result.push({
          tag: child.tag,
          text: child.textContent,
          className: child.classList,
          animation: child.animation,
          styles: child.styles,
        });
      }
    }
  }

  return result.slice(0, 3);
}

function extractCtas(section, struct) {
  const result = [];
  const seen = new Set();

  if (section.ctaText) {
    for (const cta of section.ctaText) {
      if (!seen.has(cta)) {
        seen.add(cta);
        result.push({ tag: "button/a", text: cta, className: "", animation: null, styles: null });
      }
    }
  }

  if (struct.keyChildren) {
    for (const child of struct.keyChildren) {
      if (child.textContent && /(book|buy|start|get|contact|demo|call|quote|join|try|shop|reserve|comprar|contactar|empezar|cotizar|send|submit|sign|learn|view|explore)/i.test(child.textContent) && !seen.has(child.textContent)) {
        seen.add(child.textContent);
        result.push({
          tag: child.tag,
          text: child.textContent,
          className: child.classList,
          animation: child.animation,
          styles: child.styles,
        });
      }
    }
  }

  return result.slice(0, 2);
}

function extractTexts(struct) {
  const result = [];
  const seen = new Set();

  if (struct.keyChildren) {
    for (const child of struct.keyChildren) {
      if (child.tag === "p" && child.textContent && child.textContent.length > 10 && !seen.has(child.textContent)) {
        seen.add(child.textContent);
        result.push({ tag: child.tag, text: child.textContent, styles: child.styles });
        if (result.length >= 3) break;
      }
    }
  }

  return result;
}

function trunc(str, max) {
  if (!str) return "";
  return str.length > max ? str.slice(0, max) + "..." : str;
}
