/**
 * Shared typography scale extraction — canonical source.
 */

/**
 * @param {Object} inspection
 * @returns {{ tag: string, fontSize: string|null, fontWeight: string|null, lineHeight: string|null, letterSpacing: string|null }[]}
 */
export function extractTypeScale(inspection) {
  const tagSizes = {};
  const structure = inspection.sectionStructure || [];
  for (const section of structure) {
    const children = section.keyChildren || [];
    for (const child of children) {
      const tag = child.tag;
      if (!/^h[1-6]$|^p$|^span$|^a$|^button$|^li$|^figcaption$/.test(tag)) continue;
      const s = child.styles || {};
      const key = `${tag}`;
      if (!tagSizes[key]) tagSizes[key] = { tag, sizes: [], weights: [], lh: [], ls: [] };
      if (s.fontSize) tagSizes[key].sizes.push(s.fontSize);
      if (s.fontWeight) tagSizes[key].weights.push(s.fontWeight);
      if (s.lineHeight) tagSizes[key].lh.push(s.lineHeight);
      if (s.letterSpacing) tagSizes[key].ls.push(s.letterSpacing);
    }
  }

  const mode = (arr) => {
    if (!arr.length) return null;
    const freq = {};
    let max = 0, best = arr[0];
    for (const v of arr) { freq[v] = (freq[v] || 0) + 1; if (freq[v] > max) { max = freq[v]; best = v; } }
    return best;
  };

  const scale = [];
  for (const entry of Object.values(tagSizes)) {
    scale.push({
      tag: entry.tag,
      fontSize: mode(entry.sizes),
      fontWeight: mode(entry.weights),
      lineHeight: mode(entry.lh),
      letterSpacing: mode(entry.ls)
    });
  }

  const order = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "a", "button", "li", "span", "figcaption"];
  return scale.sort((a, b) => order.indexOf(a.tag) - order.indexOf(b.tag)).filter((e) => e.fontSize || e.fontWeight);
}
