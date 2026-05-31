export async function extractStyles(page) {
  return page.evaluate(() => {
    const result = {
      styleRules: [],
      keyframes: [],
      mediaQueries: [],
      fontFaces: [],
      cssVariableMap: {},
      totalRuleCount: 0,
      externalSheets: []
    };

    for (const sheet of document.styleSheets) {
      let rules;
      try {
        rules = sheet.cssRules || sheet.rules;
      } catch {
        if (sheet.href) result.externalSheets.push(sheet.href);
        continue;
      }
      if (!rules) continue;

      const origin = sheet.href ? "external" : "inline";
      const href = sheet.href;

      if (href && !result.externalSheets.includes(href)) {
        result.externalSheets.push(href);
      }

      for (const rule of rules) {
        result.totalRuleCount++;

        if (rule instanceof CSSStyleRule) {
          const props = {};
          for (let i = 0; i < rule.style.length; i++) {
            const name = rule.style[i];
            props[name] = rule.style.getPropertyValue(name);
          }
          result.styleRules.push({
            selector: rule.selectorText,
            css: rule.cssText,
            properties: props,
            origin,
            sheet: href
          });
        } else if (rule instanceof CSSKeyframesRule) {
          const frames = [];
          for (const frame of rule.cssRules) {
            const fp = {};
            for (let i = 0; i < frame.style.length; i++) {
              const name = frame.style[i];
              fp[name] = frame.style.getPropertyValue(name);
            }
            frames.push({ key: frame.keyText, css: frame.cssText, properties: fp });
          }
          result.keyframes.push({
            name: rule.name,
            css: rule.cssText,
            frames
          });
        } else if (rule instanceof CSSMediaRule) {
          const mediaRules = [];
          for (const mr of rule.cssRules) {
            if (mr instanceof CSSStyleRule) {
              const mp = {};
              for (let i = 0; i < mr.style.length; i++) {
                const name = mr.style[i];
                mp[name] = mr.style.getPropertyValue(name);
              }
              mediaRules.push({ selector: mr.selectorText, css: mr.cssText, properties: mp });
            }
          }
          result.mediaQueries.push({
            conditionText: rule.conditionText,
            css: rule.cssText,
            rules: mediaRules
          });
        } else if (rule instanceof CSSFontFaceRule) {
          const ffp = {};
          for (let i = 0; i < rule.style.length; i++) {
            const name = rule.style[i];
            ffp[name] = rule.style.getPropertyValue(name);
          }
          result.fontFaces.push({
            css: rule.cssText,
            properties: ffp
          });
        }
      }
    }

    const vars = {};
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (rule instanceof CSSStyleRule) {
            for (let i = 0; i < rule.style.length; i++) {
              const name = rule.style[i];
              if (name.startsWith("--")) {
                vars[name] = rule.style.getPropertyValue(name);
              }
            }
          }
        }
      } catch {}
    }
    result.cssVariableMap = vars;

    return result;
  });
}
