import { isDarkColor } from "../support/domUtils.js";

const VIEWPORT_ORDER = ["desktop", "tablet", "mobile", "wide"];

export function computeVisualRhythm(visualEvidence) {
  if (!visualEvidence || visualEvidence.length < 2) {
    return {
      sectionCountEstimate: 1,
      stickySceneEstimate: false,
      visualDensityByScroll: [],
      contrastMoodByScroll: [],
      majorTransitions: [],
      perViewport: {},
      responsiveDelta: {}
    };
  }

  const desktopEvidence = visualEvidence.filter((e) => e.viewport === "desktop");
  const analysis = desktopEvidence.length > 0 ? desktopEvidence : visualEvidence;

  const visualDensityByScroll = analysis.map((point) => ({
    scrollPercent: point.scrollPercent,
    elementCount: point.visibleElements?.length || 0,
    headingCount: point.visibleText?.length || 0,
    totalArea: (point.visibleElements || []).reduce((sum, el) => sum + (el.area || 0), 0),
    hasBackground: (point.visibleElements || []).filter((el) => el.background).length
  }));

  const contrastMoodByScroll = analysis.map((point) => {
    const backgrounds = (point.visibleElements || [])
      .map((el) => el.background)
      .filter(Boolean);
    const darkCount = backgrounds.filter((bg) => isDarkColor(bg)).length;
    const lightCount = backgrounds.length - darkCount;

    return {
      scrollPercent: point.scrollPercent,
      mood: darkCount > lightCount * 0.5 ? "dark" : lightCount > darkCount * 0.5 ? "light" : "mixed",
      darkRatio: backgrounds.length ? darkCount / backgrounds.length : 0
    };
  });

  const majorTransitions = detectTransitions(analysis);
  const sectionCountEstimate = Math.max(1, majorTransitions.length + 1);
  const stickySceneEstimate = analysis.some(
    (point) => point.dominantLayoutSignals?.some((s) => s.includes("sticky"))
  );

  const perViewport = {};
  const viewports = [...new Set(visualEvidence.map((e) => e.viewport))];
  for (const vp of viewports) {
    const vpPoints = visualEvidence.filter((e) => e.viewport === vp);
    if (vpPoints.length < 2) continue;
    const vpTransitions = detectTransitions(vpPoints);
    perViewport[vp] = {
      sectionCountEstimate: Math.max(1, vpTransitions.length + 1),
      majorTransitions: vpTransitions,
      elementCountAvg: Math.round(vpPoints.reduce((s, p) => s + (p.visibleElements?.length || 0), 0) / vpPoints.length)
    };
  }

  const responsiveDelta = {};
  if (perViewport.desktop && perViewport.mobile) {
    responsiveDelta.desktopVsMobile = {
      sectionDelta: perViewport.mobile.sectionCountEstimate - perViewport.desktop.sectionCountEstimate,
      elementDensityDelta: perViewport.mobile.elementCountAvg - perViewport.desktop.elementCountAvg
    };
  }
  if (perViewport.desktop && perViewport.tablet) {
    responsiveDelta.desktopVsTablet = {
      sectionDelta: perViewport.tablet.sectionCountEstimate - perViewport.desktop.sectionCountEstimate,
      elementDensityDelta: perViewport.tablet.elementCountAvg - perViewport.desktop.elementCountAvg
    };
  }

  return {
    sectionCountEstimate,
    stickySceneEstimate,
    visualDensityByScroll,
    contrastMoodByScroll,
    majorTransitions,
    perViewport,
    responsiveDelta
  };
}

function detectTransitions(analysis) {
  const transitions = [];

  for (let i = 1; i < analysis.length; i++) {
    const prev = analysis[i - 1];
    const curr = analysis[i];

    const prevHeadings = new Set((prev.visibleText || []).map((h) => h.text));
    const currHeadings = new Set((curr.visibleText || []).map((h) => h.text));

    const newHeadings = [...currHeadings].filter((h) => !prevHeadings.has(h));
    const lostHeadings = [...prevHeadings].filter((h) => !currHeadings.has(h));

    const prevElements = prev.visibleElements || [];
    const currElements = curr.visibleElements || [];

    const elementChange = Math.abs(currElements.length - prevElements.length);
    const headingChange = newHeadings.length + lostHeadings.length;

    const prevMood = detectMood(prev);
    const currMood = detectMood(curr);
    const moodShift = prevMood !== currMood;

    const prevBackgrounds = new Set(prevElements.map((e) => e.background).filter(Boolean));
    const currBackgrounds = new Set(currElements.map((e) => e.background).filter(Boolean));
    const backgroundChange = [...currBackgrounds].filter((b) => !prevBackgrounds.has(b)).length;

    const changeScore = headingChange * 3 + elementChange + (moodShift ? 5 : 0) + backgroundChange * 2;

    if (changeScore >= 4) {
      transitions.push({
        fromScroll: prev.scrollPercent,
        toScroll: curr.scrollPercent,
        changeScore,
        signals: [
          headingChange > 0 ? `${headingChange} heading(s) changed` : null,
          elementChange > 2 ? `${elementChange} element(s) changed` : null,
          moodShift ? `mood shift: ${prevMood} -> ${currMood}` : null,
          backgroundChange > 0 ? `${backgroundChange} new background(s)` : null
        ].filter(Boolean),
        newHeadings: newHeadings.slice(0, 3)
      });
    }
  }

  return transitions;
}

function detectMood(point) {
  const backgrounds = (point.visibleElements || [])
    .map((el) => el.background)
    .filter(Boolean);
  if (!backgrounds.length) return "neutral";

  const darkCount = backgrounds.filter((bg) => isDarkColor(bg)).length;
  const ratio = darkCount / backgrounds.length;

  if (ratio > 0.6) return "dark";
  if (ratio < 0.3) return "light";
  return "mixed";
}


