export default {};

/**
 * @typedef {Object} Evidence
 * @property {string} url
 * @property {string} niche
 * @property {string} generatedAt
 * @property {Inspection} inspection
 * @property {FidelityScore} fidelityScore
 * @property {MotionAnalysis} motionAnalysis
 * @property {ConversionPlan} conversionPlan
 * @property {Object} knowledgeMatrix
 * @property {PixelPalette} [pixelPalette]
 * @property {SpacingScale} [spacing]
 * @property {DesignLanguage} designLanguage
 * @property {Object} [llmInterpretation]
 * @property {Object} [llmAnalysis]
 * @property {Object} [visualRhythm]
 * @property {Object} timings
 * @property {string} [fidelityLevel]
 * @property {string[]} [validationWarnings]
 */

/**
 * @typedef {Object} Inspection
 * @property {string} title
 * @property {string} description
 * @property {string} h1
 * @property {string[]} technologies
 * @property {Object} tokens
 * @property {string} layout
 * @property {string[]} animationHints
 * @property {Object} gsapDataAttrs
 * @property {Object} semanticTags
 * @property {Array} ctas
 * @property {Object} viewport
 * @property {string[]} risks
 * @property {Array} visualEvidence
 * @property {Section[]} [sections]
 * @property {AssetManifest} [assets]
 * @property {CssFeatures} [cssFeatures]
 * @property {MotionRecipe[]} [motionRecipes]
 * @property {HoverEffect[]} [hoverEffects]
 * @property {WebGlInfo} [webgl]
 * @property {StyleInfo} [styles]
 * @property {Array} [sectionStructure]
 * @property {Object} [downloadedAssets]
 * @property {IntroTimeline} [introTimeline]
 * @property {Object} [performanceMetrics]
 * @property {string[]} [overlayActions]
 */

/**
 * @typedef {Object} Section
 * @property {number} index
 * @property {string} tag
 * @property {string} [role]
 * @property {number} [confidence]
 * @property {string[]} [reasons]
 * @property {Object} viewportPosition
 * @property {number} height
 * @property {boolean} [isFullViewport]
 * @property {Object} [textHierarchy]
 * @property {string[]} [ctaText]
 * @property {string} [layoutType]
 * @property {Object} [background]
 * @property {Object} [mediaElements]
 * @property {number} [stickyDescendants]
 * @property {number} [fixedDescendants]
 * @property {boolean} [hasCanvas]
 * @property {boolean} [hasVideo]
 * @property {boolean} [hasSvg]
 * @property {string} [textPreview]
 */

/**
 * @typedef {Object} FidelityScore
 * @property {number} overall
 * @property {string} label
 * @property {Object} breakdown
 * @property {string[]} missingEvidence
 */

/**
 * @typedef {Object} PixelPalette
 * @property {string} background
 * @property {number} backgroundCoverage
 * @property {string} dominant
 * @property {string} accent
 * @property {string} muted
 * @property {string[]} textCandidates
 * @property {Array} palette
 * @property {Array} [gradients]
 * @property {string} source
 * @property {string} method
 */

/**
 * @typedef {Object} SpacingScale
 * @property {number} baseUnit
 * @property {Array} scale
 * @property {string[]} tokens
 * @property {Object} observed
 * @property {boolean} inferred
 * @property {Object} [rhythm]
 */

/**
 * @typedef {Object} DesignLanguage
 * @property {string} label
 * @property {number} confidence
 * @property {string[]} signals
 */

/**
 * @typedef {Object} MotionRecipe
 * @property {string} type
 * @property {string} target
 * @property {string} tag
 * @property {string} range
 * @property {number} [yDelta]
 * @property {number} [xDelta]
 * @property {number} [parallaxRatio]
 * @property {string} [opacity]
 * @property {string} [scaleRange]
 * @property {Object} [easing]
 * @property {Array} [keyframes]
 * @property {string} [implementation]
 */

/**
 * @typedef {Object} HoverEffect
 * @property {string} target
 * @property {string} tag
 * @property {string} [type]
 * @property {Object} [before]
 * @property {Object} [after]
 * @property {Object} [delta]
 */

/**
 * @typedef {Object} CssFeatures
 * @property {number} complexityScore
 * @property {Object} customProperties
 * @property {string[]} animations
 * @property {Array} [effects]
 */

/**
 * @typedef {Object} AssetManifest
 * @property {Array} [images]
 * @property {Array} [videos]
 * @property {Array} [fonts]
 * @property {Array} [scripts]
 * @property {Array} [stylesheets]
 * @property {Array} [models3d]
 * @property {Array} [suspiciousHeavyAssets]
 */

/**
 * @typedef {Object} WebGlInfo
 * @property {number} canvasCount
 * @property {number} webglCount
 * @property {string} [likely3dLibrary]
 * @property {string} [performanceRisk]
 * @property {Object} [animations]
 */

/**
 * @typedef {Object} StyleInfo
 * @property {Array} [colors]
 * @property {Object} [fonts]
 * @property {Array} [spacing]
 * @property {Array} [styleRules]
 */

/**
 * @typedef {Object} IntroTimeline
 * @property {Object} [preloader]
 * @property {Array} timeline
 * @property {string[]} screenshotPaths
 * @property {Array} frames
 */

/**
 * @typedef {Object} MotionAnalysis
 * @property {boolean} enabled
 * @property {string} source
 * @property {Array} findings
 * @property {string[]} mappedTechniques
 */

/**
 * @typedef {Object} ConversionPlan
 * @property {string} paradigm
 * @property {string[]} pushbacks
 * @property {string[]} requiredBlocks
 * @property {Object} performanceBudget
 * @property {string[]} motionDirectives
 * @property {string[]} accessibility
 * @property {string[]} seo
 */
