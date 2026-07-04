export async function segmentSections(page) {
  return page.evaluate(() => {
    const candidates = [...document.querySelectorAll(
      "main > section, section, article, header, footer, [data-section]"
    )];

    const normalized = candidates
      .map((el, index) => {
        const rect = el.getBoundingClientRect();
        return {
          index,
          selector: buildSelector(el, index),
          tag: el.tagName.toLowerCase(),
          top: Math.round(rect.top + window.scrollY),
          height: Math.round(rect.height),
          width: Math.round(rect.width),
          text: (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 300),
          headings: [...el.querySelectorAll("h1,h2,h3")].map(h => h.textContent.trim()),
          mediaCount: el.querySelectorAll("img,video,canvas,svg").length
        };
      })
      .filter(s => s.height > window.innerHeight * 0.25);

    return mergeNestedSections(normalized);

    function buildSelector(el, index) {
      if (el.id) return `#${CSS.escape(el.id)}`;
      const cls = [...el.classList].slice(0, 2).map(c => `.${CSS.escape(c)}`).join("");
      return `${el.tagName.toLowerCase()}${cls || `:nth-of-type(${index + 1})`}`;
    }

    function mergeNestedSections(items) {
      return items.filter((item, i, arr) => {
        return !arr.some(other =>
          other !== item &&
          item.top >= other.top &&
          item.top + item.height <= other.top + other.height &&
          other.height > item.height * 1.5
        );
      });
    }
  });
}
