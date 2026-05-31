export function isDarkColor(color) {
  if (!color) return false;
  let r, g, b;
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    }
  } else if (color.startsWith("rgb")) {
    const match = color.match(/(\d+)/g);
    if (!match || match.length < 3) return false;
    r = parseInt(match[0]);
    g = parseInt(match[1]);
    b = parseInt(match[2]);
  } else {
    return false;
  }
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.4;
}

export function getLuminance(color) {
  if (!color) return 0.5;
  let r, g, b;
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    r = parseInt(hex.slice(0, 2), 16) / 255;
    g = parseInt(hex.slice(2, 4), 16) / 255;
    b = parseInt(hex.slice(4, 6), 16) / 255;
  } else if (color.startsWith("rgb")) {
    const match = color.match(/(\d+)/g);
    if (!match || match.length < 3) return 0.5;
    r = parseInt(match[0]) / 255;
    g = parseInt(match[1]) / 255;
    b = parseInt(match[2]) / 255;
  } else {
    return 0.5;
  }
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

export function generateSelector(el) {
  if (el.id) return `#${CSS.escape(el.id)}`;
  const classes = [...el.classList].filter((c) => !c.startsWith("css-") && c.length > 2).slice(0, 2);
  if (classes.length) {
    const parent = el.parentElement;
    const siblings = parent ? [...parent.children].filter((c) => c.tagName === el.tagName) : [];
    const index = siblings.indexOf(el);
    const classSelector = classes.map((c) => `.${CSS.escape(c)}`).join("");
    return index >= 0 && siblings.length > 1
      ? `${el.tagName.toLowerCase()}${classSelector}:nth-child(${index + 1})`
      : `${el.tagName.toLowerCase()}${classSelector}`;
  }
  return el.tagName.toLowerCase();
}

export function parseTransform(transform) {
  if (!transform || transform === "none") return null;
  const matrixMatch = transform.match(/matrix\(([^)]+)\)/);
  if (matrixMatch) {
    const values = matrixMatch[1].split(",").map((v) => parseFloat(v.trim()));
    if (values.length === 6) {
      return {
        type: "2d",
        scale: values[0],
        scaleX: values[0],
        skewY: values[1],
        skewX: values[2],
        scaleY: values[3],
        translateX: values[4],
        translateY: values[5]
      };
    }
    if (values.length === 16) {
      return { type: "3d", values };
    }
  }
  const scaleMatch = transform.match(/scale\(([^)]+)\)/);
  const translateMatch = transform.match(/translate[XY]?\(([^)]+)\)/);
  return {
    type: "parsed",
    scale: scaleMatch ? parseFloat(scaleMatch[1]) : 1,
    translateY: translateMatch ? parseFloat(translateMatch[1]) : 0
  };
}
