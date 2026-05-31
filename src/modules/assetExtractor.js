export async function extractAssets(page, preCollected = []) {
  const networkAssets = [...preCollected];
  const responseHandler = (response) => {
    try {
      const url = response.url();
      const status = response.status();
      if (status >= 400) return;

      const contentType = response.headers()["content-type"] || "";
      const type = classifyAssetType(url, contentType);
      if (type) {
        networkAssets.push({
          url,
          type,
          contentType,
          size: parseInt(response.headers()["content-length"] || "0"),
          status
        });
      }
    } catch {
      // Response may have been redirected or closed
    }
  };

  page.on("response", responseHandler);

  const domAssets = await page.evaluate(() => {
    const images = [...document.querySelectorAll("img[src]")].map((img) => ({
      url: img.src,
      alt: img.alt || "",
      width: img.naturalWidth || 0,
      height: img.naturalHeight || 0,
      inPicture: !!img.closest("picture")
    }));

    const pictureSources = [...document.querySelectorAll("picture source[srcset]")].map((source) => ({
      srcset: source.srcset.slice(0, 300),
      media: source.media || null,
      type: source.type || null
    }));

    const videos = [...document.querySelectorAll("video[src], video source[src]")].map((v) => ({
      url: v.src || v.getAttribute("src"),
      type: v.type || null,
      autoplay: v.autoplay || false,
      muted: v.muted || false,
      loop: v.loop || false
    }));

    const inlineSvgCount = document.querySelectorAll("svg").length;
    const canvasCount = document.querySelectorAll("canvas").length;

    const cssBackgroundImages = [];
    try {
      for (const sheet of [...document.styleSheets]) {
        try {
          for (const rule of [...sheet.cssRules]) {
            const text = rule.cssText || "";
            const matches = text.match(/url\(["']?([^"')\s]+)["']?\)/g);
            if (matches) {
              for (const match of matches) {
                const urlMatch = match.match(/url\(["']?([^"')\s]+)["']?\)/);
                if (urlMatch && urlMatch[1].startsWith("http")) {
                  cssBackgroundImages.push(urlMatch[1]);
                }
              }
            }
          }
        } catch {
          // Cross-origin stylesheet
        }
      }
    } catch {
      // Stylesheets may not be accessible
    }

    const fontUrls = [];
    try {
      for (const sheet of [...document.styleSheets]) {
        try {
          for (const rule of [...sheet.cssRules]) {
            if (rule instanceof CSSFontFaceRule) {
              const src = rule.style.getPropertyValue("src");
              const urlMatches = src.match(/url\(["']?([^"')\s]+)["']?\)/g);
              if (urlMatches) {
                for (const match of urlMatches) {
                  const urlMatch = match.match(/url\(["']?([^"')\s]+)["']?\)/);
                  if (urlMatch) {
                    fontUrls.push({
                      url: urlMatch[1],
                      family: rule.style.getPropertyValue("font-family").replace(/["']/g, ""),
                      weight: rule.style.getPropertyValue("font-weight") || "normal",
                      style: rule.style.getPropertyValue("font-style") || "normal"
                    });
                  }
                }
              }
            }
          }
        } catch {
          // Cross-origin stylesheet
        }
      }
    } catch {
      // Stylesheets may not be accessible
    }

    return {
      images: images.slice(0, 100),
      pictureSources: pictureSources.slice(0, 50),
      videos,
      inlineSvgCount,
      canvasCount,
      cssBackgroundImages: [...new Set(cssBackgroundImages)].slice(0, 50),
      fontUrls
    };
  });

  page.off("response", responseHandler);

  const allImages = [...new Set([
    ...domAssets.images.map((i) => i.url),
    ...networkAssets.filter((a) => a.type === "image").map((a) => a.url)
  ])];

  const allVideos = [...new Set([
    ...domAssets.videos.map((v) => v.url).filter(Boolean),
    ...networkAssets.filter((a) => a.type === "video").map((a) => a.url)
  ])];

  const allFonts = [...new Set([
    ...domAssets.fontUrls.map((f) => f.url),
    ...networkAssets.filter((a) => a.type === "font").map((a) => a.url)
  ])];

  const allScripts = [...new Set(
    networkAssets.filter((a) => a.type === "script").map((a) => a.url)
  )];

  const allStylesheets = [...new Set(
    networkAssets.filter((a) => a.type === "stylesheet").map((a) => a.url)
  )];

  const models3d = networkAssets.filter((a) => a.type === "model3d").map((a) => ({
    url: a.url,
    size: a.size
  }));

  const suspiciousHeavyAssets = [
    ...networkAssets.filter((a) => a.size > 2_000_000).map((a) => ({
      url: a.url,
      type: a.type,
      size: a.size,
      sizeMB: (a.size / 1_000_000).toFixed(2)
    }))
  ];

  return {
    images: allImages.slice(0, 80),
    videos: allVideos.slice(0, 20),
    fonts: allFonts.slice(0, 30),
    scripts: allScripts.slice(0, 50),
    stylesheets: allStylesheets.slice(0, 30),
    models3d,
    inlineSvgCount: domAssets.inlineSvgCount,
    canvasCount: domAssets.canvasCount,
    cssBackgroundImages: domAssets.cssBackgroundImages,
    suspiciousHeavyAssets,
    totalNetworkAssets: networkAssets.length
  };
}

export function classifyAssetType(url, contentType) {
  const urlLower = url.toLowerCase();

  if (contentType.startsWith("image/") || /\.(png|jpg|jpeg|gif|webp|avif|svg|ico|bmp)(\?|$)/i.test(urlLower)) {
    return "image";
  }
  if (contentType.startsWith("video/") || /\.(mp4|webm|ogg|mov|avi)(\?|$)/i.test(urlLower)) {
    return "video";
  }
  if (contentType.includes("font") || /\.(woff2?|ttf|otf|eot)(\?|$)/i.test(urlLower)) {
    return "font";
  }
  if (contentType.includes("javascript") || /\.js(\?|$)/i.test(urlLower)) {
    return "script";
  }
  if (contentType.includes("css") || /\.css(\?|$)/i.test(urlLower)) {
    return "stylesheet";
  }
  if (/\.(glb|gltf|hdr|ktx2|wasm)(\?|$)/i.test(urlLower)) {
    return "model3d";
  }

  return null;
}
