export async function extractJsTokens(page) {
  const jsTokens = await page.evaluate(() => {
    const COLOR_PATTERNS = [
      /#[0-9a-fA-F]{3,8}\b/g,
      /rgba?\([^)]+\)/g,
      /hsla?\([^)]+\)/g,
      /"color":\s*"[^"]+"/g,
      /'color':\s*'[^']+'/g
    ];
    
    const FONT_PATTERNS = [
      /fontFamily\s*:\s*["']([^"']+)["']/g,
      /"font":\s*"([^"]+)"/g,
      /font:\s*([^;}]+);?/g
    ];
    
    const SPACING_PATTERNS = [
      /(margin|padding|gap|spacing)\s*[:=]\s*["']?(\d+(?:\.\d+)?(?:px|em|rem|%|vh|vw)?)["']?/gi
    ];
    
    const COMMON_THEME_NAMES = ['__THEME__', 'theme', 'designTokens', 'tokens', 'colorTokens', 'spacingTokens', 'fontTokens'];
    
    const tokens = {
      colors: [],
      fonts: [],
      spacing: [],
      cssVariables: {}
    };
    const extractedColors = new Set();
    const extractedFonts = new Set();
    const extractedSpacing = new Set();

    const scripts = [...document.scripts].map(s => s.textContent || "").join("\n");

    // Extract window-based theme objects
    for (const name of COMMON_THEME_NAMES) {
      try {
        if (window[name]) {
          const theme = window[name];
          traverseForTokens(theme, tokens, extractedColors, extractedFonts, extractedSpacing);
        }
      } catch {}
    }

    // Pattern extraction from script content
    const sliceScripts = scripts.slice(0, 200000); // Limit to avoid performance issues

    for (const pattern of COLOR_PATTERNS) {
      const matches = [...sliceScripts.matchAll(pattern)];
      for (const m of matches) {
        const color = m[0].includes('"') ? m[0].match(/"([^"]+)"/)?.[1] || m[0] : m[0];
        if (color && color.length > 0 && color.length < 50) {
          extractedColors.add(color);
        }
      }
    }

    for (const pattern of FONT_PATTERNS) {
      const matches = [...sliceScripts.matchAll(pattern)];
      for (const m of matches) {
        const font = m[1] || m[0];
        if (font && font.length > 2 && font.length < 100) {
          extractedFonts.add(font.replace(/['"]/g, '').trim());
        }
      }
    }

    for (const pattern of SPACING_PATTERNS) {
      const matches = [...sliceScripts.matchAll(pattern)];
      for (const m of matches) {
        const value = m[2] || m[0];
        if (value && value.length > 0 && value.length < 20) {
          extractedSpacing.add(value);
        }
      }
    }

    return {
      colors: [...extractedColors].slice(0, 20),
      fonts: [...extractedFonts].slice(0, 10),
      spacing: [...extractedSpacing].slice(0, 15)
    };
  });

  return jsTokens;
}

function traverseForTokens(obj, tokens, extractedColors, extractedFonts, extractedSpacing) {
  if (!obj || typeof obj !== 'object') return;
  if (JSON.stringify(obj).length > 10000) return; // Prevent deep traversal of large objects

  const colorRegex = /^#[0-9a-fA-F]{3,8}$|^rgba?\(|hsla?\(/;
  const fontRegex = /^[0-9]px|[a-z-]+,\s*(?:sans-serif|serif|monospace|display)$/;

  for (const [key, value] of Object.entries(obj)) {
    const keyLower = key.toLowerCase();
    const valueStr = String(value);

    if (keyLower.includes('color') && colorRegex.test(valueStr)) {
      extractedColors.add(valueStr);
    } else if (keyLower.includes('font') && fontRegex.test(valueStr)) {
      extractedFonts.add(valueStr);
    } else if ((keyLower.includes('spacing') || keyLower.includes('size') || keyLower.includes('gap')) && /(\d+(?:px|rem|em))/.test(valueStr)) {
      extractedSpacing.add(valueStr);
    } else if (typeof value === 'object' && value !== null) {
      tokens.cssVariables[`--${key}`] = JSON.stringify(value).slice(0, 100);
      traverseForTokens(value, tokens, extractedColors, extractedFonts, extractedSpacing);
    }
  }
}

export function mergeJsTokens(inspection, jsTokens) {
  const tokens = inspection.tokens || {};
  
  if (jsTokens.colors?.length) {
    const mergedColors = [...new Set([...(tokens.colors || []), ...jsTokens.colors])];
    inspection.tokens.colors = mergedColors.slice(0, 50);
  }
  
  if (jsTokens.fonts?.length) {
    const mergedFonts = [...new Set([...(tokens.fonts || []), ...jsTokens.fonts])];
    inspection.tokens.fonts = mergedFonts.slice(0, 20);
  }
  
  if (jsTokens.spacing?.length) {
    const mergedSpacing = [...new Set([...(tokens.spacingScale || []), ...jsTokens.spacing])];
    inspection.tokens.spacingScale = mergedSpacing.slice(0, 30);
  }
  
  return inspection;
}