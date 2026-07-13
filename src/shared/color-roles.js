/**
 * Shared color role classification — canonical source.
 * Used by briefComposer and contextPackager.
 */

/**
 * @param {Object} inspection
 * @returns {{ color: string, roles: string[], frequency: number }[]}
 */
export function classifyColorsByRole(inspection) {
  const seen = {};

  const add = (color, role) => {
    if (color && color !== "rgba(0, 0, 0, 0)" && color !== "transparent") {
      if (!seen[color]) seen[color] = { count: 0, roles: new Set() };
      seen[color].count++;
      seen[color].roles.add(role);
    }
  };

  // From CSS variables
  const cssVars = inspection.tokens?.cssVariables || {};
  for (const [key, val] of Object.entries(cssVars)) {
    if (/#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(/.test(val)) {
      const role = key.includes("bg") || key.includes("backdrop") || key.includes("surface") ? "Background"
        : key.includes("text") || key.includes("font") ? "Text"
        : key.includes("accent") || key.includes("primary") ? "Accent"
        : key.includes("border") || key.includes("stroke") ? "Border"
        : key.includes("hover") || key.includes("active") ? "Hover"
        : key.includes("success") || key.includes("error") || key.includes("warning") ? "Semantic"
        : "Token";
      add(val, role);
    }
  }

  // From section structure
  const structure = inspection.sectionStructure || [];
  for (const section of structure) {
    if (section.background?.color) add(section.background.color, "Background");
    const children = section.keyChildren || [];
    for (const child of children) {
      if (child.styles?.color) add(child.styles.color, "Text");
      if (child.styles?.backgroundColor) add(child.styles.backgroundColor, "Surface");
    }
  }

  // From style rules
  const rules = inspection.styles?.styleRules || [];
  for (const rule of rules.slice(0, 80)) {
    for (const [prop, val] of Object.entries(rule.properties)) {
      if (/#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(/.test(val)) {
        const role = prop === "background-color" || prop === "background" ? "Background"
          : prop === "color" ? "Text"
          : prop === "border-color" || prop === "outline-color" ? "Border"
          : prop === "accent-color" ? "Accent"
          : "Declared";
        add(val, role);
      }
    }
  }

  return Object.entries(seen)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 16)
    .map(([color, info]) => ({
      color,
      roles: [...info.roles],
      frequency: info.count
    }));
}

/**
 * Get primary (most significant) role for a color.
 * @param {string[]} roles
 * @returns {string}
 */
function primaryRole(roles) {
  const order = ["Background", "Text", "Accent", "Surface", "Border", "Token", "Hover", "Semantic", "Declared"];
  const sorted = [...roles].sort((a, b) => order.indexOf(a) - order.indexOf(b));
  return sorted[0] || "Declared";
}

/**
 * Legacy format: single role per color (for briefComposer backward compat).
 * @param {Object} inspection
 * @returns {{ color: string, role: string, frequency: number }[]}
 */
export function classifyColorsBySingleRole(inspection) {
  return classifyColorsByRole(inspection).map(({ color, roles, frequency }) => ({
    color,
    role: primaryRole(roles),
    frequency
  }));
}

/**
 * Simple roles format for contextPackager backward compat.
 * @param {Object} inspection
 * @returns {{ color: string, roles: string[] }[]}
 */
export function extractColorRoles(inspection) {
  return classifyColorsByRole(inspection).map(({ color, roles }) => ({
    color,
    roles: [...new Set(roles)]
  }));
}
