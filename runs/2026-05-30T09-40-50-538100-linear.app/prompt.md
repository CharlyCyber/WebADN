# 1. Executive Design Diagnosis

**Design Language:** luxury minimal (confidence: 85%)
**Signals:** light palette, low CSS complexity, no WebGL
**Sections:** 33 major sections detected
**Motion Complexity:** 25 scroll-linked animations
**CSS Complexity:** 0/100
**Visual Rhythm:** 4 viewport(s) captured

This reference uses a luxury minimal approach with heavy motion choreography and standard CSS effects.

---

# 2. Reference DNA Summary

**Stack:** React, Next.js
**Layout:** Flexbox-dominant composition
**Typography:** Inter Variable, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif, Berkeley Mono, ui-monospace, SF Mono, Menlo, monospace
**Palette:** rgb(247, 248, 248), rgb(208, 214, 224), rgb(138, 143, 152), rgb(255, 255, 255), rgb(94, 106, 210), rgb(8, 9, 10), rgb(229, 229, 230), rgb(98, 102, 109)
**Design Language:** luxury minimal
**Key Differentiators:** light palette, low CSS complexity, no WebGL

---

# 3. Design Token System

## Color Palette
- **Background:** rgb(15, 16, 17), rgb(8, 9, 10), rgb(9, 10, 11), rgb(16, 17, 18)
- **Text:** rgb(247, 248, 248), rgb(208, 214, 224), rgb(98, 102, 109), rgb(138, 143, 152)
- **Surface:** rgb(18, 19, 20), rgba(255, 255, 255, 0.05), rgb(228, 242, 34)

## Typography
| Element | Size | Weight | Line-Height | Letter-Spacing |
|---------|------|--------|-------------|----------------|
| `h1` | 64px | 510 | 64px | -1.408px |
| `h2` | 48px | 510 | 48px | -1.056px |
| `p` | 24px | 400 | 31.92px | -0.288px |
| `a` | 16px | 400 | 24px | â€” |
| `button` | 13px | 510 | 32px | â€” |
| `li` | 13px | 400 | 19.5px | -0.13px |
| `span` | 14px | 510 | 21px | -0.182px |

## Spacing Scale
- 24px
- 8px
- 6px
- 12px
- 2px
- 4px
- 1px
- -1px
- 14px
- 11px
- 17px
- 20px
- 32px
- 56px
- 80px
- 48px
- 72px
- 199px
- 123px
- 91px
- 131px
- 31px
- 19px
- 69px

## CSS Variables
--accent: var(--color-yellow);
--decorationHeight: 80px;
--x---icon-default-color: var(--color-bg-primary);
--height: 48px;
--x-width: 14px;
--x-height: 14px;
--shine-color: #383b3f;
--mask-x: 0;
--mask-y: 20%;
--Marquee-duration: 30s;
--Marquee-gap: 40px;
--flex-direction: row;
--min-padding: 0px;
--Carousel-gap: 8px;
--mobile-width: 230px;
--grid-areas-default: "a a a a b b b b c c c c";
--grid-areas-desktop: "a a a a a a a a"
				"b b b b b b b b"
				"c c c c c c c c";
--grid-areas-mobile: "a a a a"
				"b b b b"
				"c c c c";
--label-color: #6366F1;
--bg-offset-y: 0px;
--width: 750px;
--bar-color: #993B3B;
--glow-opacity: 0.02;
--token-comment: #8B93A1;
--token-string: #ffdf9f;
--token-constant: #8FA6FF;
--token-variable: #f7bf8b;
--token-keyword: #F79CE0;
--token-entity: #83dcdc;
--token-punctuation: #D2D7DE;
--token-text: #E2E4E7;
--diff-old-color: #F34E52;
--diff-old-bg: rgba(243, 78, 82, 0.1);
--diff-new-color: #27A644;
--diff-new-bg: rgba(39, 166, 68, 0.07);
--toast-icon-margin-start: 4px;
--toast-icon-margin-end: -3px;
--toast-svg-margin-start: 0px;
--toast-svg-margin-end: -1px;
--toast-button-margin-start: 0;
/* ... and 39 more variables */


---

# 4. CSS Architecture (full extraction)

## Extracted Stylesheets
- **Total CSS rules:** 1020
- **External stylesheets:** 16
- **Unique selectors:** 587
- **Keyframe animations:** 407
- **Media queries:** 26
- **@font-face declarations:** 0

## Keyframe Animations
```css
@-webkit-keyframes grid-dot-0-0-agent { 
  0% { opacity: 1; }
  6.25% { opacity: 1; }
  6.25% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-0-0-agent { 
  0% { opacity: 1; }
  6.25% { opacity: 1; }
  6.25% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-0-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-0-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-0-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-0-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-0-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-2-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-2-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-2-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-2-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-3-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-3-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-3-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  57.1429% { opacity: 1; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  57.1429% { opacity: 1; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-3-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-2-upDown { 
  0% { opacity: 1; }
  7.14286% { opacity: 1; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-2-upDown { 
  0% { opacity: 1; }
  7.14286% { opacity: 1; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-0-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-0-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-4-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-0-4-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-0-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-0-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-4-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-4-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-2-0-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-2-0-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-2-1-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-1-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-4-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-2-4-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-0-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-3-0-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-4-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-4-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-0-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-0-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-4-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-4-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-0-agent { 
  0% { opacity: 1; }
  6.25% { opacity: 1; }
  6.25% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-0-0-agent { 
  0% { opacity: 1; }
  6.25% { opacity: 1; }
  6.25% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-0-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-0-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-0-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-0-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-0-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-2-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-2-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-2-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-2-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-3-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-3-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-3-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  57.1429% { opacity: 1; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  57.1429% { opacity: 1; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 1; }
  64.2857% { opacity: 1; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 1; }
  42.8571% { opacity: 1; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 1; }
  71.4286% { opacity: 1; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-3-2-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 1; }
  35.7143% { opacity: 1; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 1; }
  78.5714% { opacity: 1; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-0-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-1-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-2-upDown { 
  0% { opacity: 1; }
  7.14286% { opacity: 1; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-2-upDown { 
  0% { opacity: 1; }
  7.14286% { opacity: 1; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 1; }
  21.4286% { opacity: 1; }
  21.4286% { opacity: 1; }
  28.5714% { opacity: 1; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 1; }
  85.7143% { opacity: 1; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-3-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 1; }
  14.2857% { opacity: 1; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 1; }
  92.8571% { opacity: 1; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-4-upDown { 
  0% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  7.14286% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  14.2857% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  21.4286% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  28.5714% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  35.7143% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  42.8571% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  57.1429% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  64.2857% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  71.4286% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  78.5714% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  85.7143% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  92.8571% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-0-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-0-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-4-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-0-4-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-0-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-0-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-4-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-4-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-2-0-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-2-0-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-2-1-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-1-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-4-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-2-4-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-0-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-3-0-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-4-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-4-pong { 
  0% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-0-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-0-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-1-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-2-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-3-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-4-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-4-pong { 
  0% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-0-agent { 
  0% { opacity: 1; }
  6.25% { opacity: 1; }
  6.25% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-0-0-agent { 
  0% { opacity: 1; }
  6.25% { opacity: 1; }
  6.25% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-0-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-0-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 1; }
  12.5% { opacity: 1; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-0-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-0-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 1; }
  18.75% { opacity: 1; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-0-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 1; }
  25% { opacity: 1; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 1; }
  31.25% { opacity: 1; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 1; }
  37.5% { opacity: 1; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-1-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 1; }
  43.75% { opacity: 1; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-1-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-2-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 1; }
  50% { opacity: 1; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-2-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-2-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 1; }
  56.25% { opacity: 1; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-2-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-3-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 1; }
  62.5% { opacity: 1; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-3-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 1; }
  68.75% { opacity: 1; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-3-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 1; }
  75% { opacity: 1; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-3-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-0-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 1; }
  81.25% { opacity: 1; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-1-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 1; }
  87.5% { opacity: 1; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-2-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 1; }
  93.75% { opacity: 1; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@keyframes grid-dot-4-3-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 1; }
  100% { opacity: 1; }
}
```
```css
@-webkit-keyframes grid-dot-4-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-4-agent { 
  0% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  6.25% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  12.5% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  18.75% { opacity: 0.3; }
  25% { opacity: 0.3; }
  25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  31.25% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  37.5% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  43.75% { opacity: 0.3; }
  50% { opacity: 0.3; }
  50% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  56.25% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  62.5% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  68.75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  75% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  81.25% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  87.5% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  93.75% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-0-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-0-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-1-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-1-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-2-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-2-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-3-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-3-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-0-4-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-0-4-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-0-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-0-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-1-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-1-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-2-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-2-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-3-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-3-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-1-4-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-1-4-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-0-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-0-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-1-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-1-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-2-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-2-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-3-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-3-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-2-4-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-2-4-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-0-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-0-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-1-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-1-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-2-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-2-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-3-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-3-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-3-4-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-3-4-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-0-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-0-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-1-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-1-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-2-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-2-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-3-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-3-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@-webkit-keyframes grid-dot-4-4-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes grid-dot-4-4-empty-once { 
  0% { opacity: 0.3; }
  100% { opacity: 0.3; }
}
```
```css
@keyframes swipe-out-left { 
  0% { transform: var(--y) translateX(var(--swipe-amount-x)); opacity: 1; }
  100% { transform: var(--y) translateX(calc(var(--swipe-amount-x) - 100%)); opacity: 0; }
}
```
```css
@keyframes swipe-out-right { 
  0% { transform: var(--y) translateX(var(--swipe-amount-x)); opacity: 1; }
  100% { transform: var(--y) translateX(calc(var(--swipe-amount-x) + 100%)); opacity: 0; }
}
```
```css
@keyframes swipe-out-up { 
  0% { transform: var(--y) translateY(var(--swipe-amount-y)); opacity: 1; }
  100% { transform: var(--y) translateY(calc(var(--swipe-amount-y) - 100%)); opacity: 0; }
}
```
```css
@keyframes swipe-out-down { 
  0% { transform: var(--y) translateY(var(--swipe-amount-y)); opacity: 1; }
  100% { transform: var(--y) translateY(calc(var(--swipe-amount-y) + 100%)); opacity: 0; }
}
```
```css
@keyframes sonner-fade-in { 
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}
```
```css
@keyframes sonner-fade-out { 
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.8); }
}
```
```css
@keyframes sonner-spin { 
  0% { opacity: 1; }
  100% { opacity: 0.15; }
}
```

## Media Queries
- `(max-width: 1024px)` — 1 rule(s)
  - `.bgDIHX` { font-size: var(--title-7-size); line-height: var(--title-7-line-height); letter-spacing: var(--title-7-letter-spacing) }
- `(max-width: 640px)` — 1 rule(s)
  - `.bgDIHX` { font-size: var(--title-5-size); line-height: var(--title-5-line-height); letter-spacing: var(--title-5-letter-spacing) }
- `(max-width: 640px)` — 1 rule(s)
  - `.ha-DKfc` { font-size: var(--text-mini-size); line-height: var(--text-mini-line-height); letter-spacing: var(--text-mini-letter-spacing) }
- `(max-width: 640px)` — 1 rule(s)
  - `.eBXKXP` { font-size: var(--text-mini-size); line-height: var(--text-mini-line-height); letter-spacing: var(--text-mini-letter-spacing) }
- `(max-width: 1280px)` — 1 rule(s)
  - `.exSLMF` { font-size: var(--title-5-size); line-height: var(--title-5-line-height); letter-spacing: var(--title-5-letter-spacing) }
- `(max-width: 768px)` — 1 rule(s)
  - `.exSLMF` { font-size: var(--title-4-size); line-height: var(--title-4-line-height); letter-spacing: var(--title-4-letter-spacing) }
- `(max-width: 640px)` — 1 rule(s)
  - `.exSLMF` { font-size: var(--title-3-size); line-height: var(--title-3-line-height); letter-spacing: var(--title-3-letter-spacing) }
- `(max-width: 1280px)` — 1 rule(s)
  - `.hkGFXd` { font-size: var(--text-mini-size); line-height: var(--text-mini-line-height); letter-spacing: var(--text-mini-letter-spacing) }
- `(max-width: 640px)` — 1 rule(s)
  - `.hkGFXd` { font-size: var(--text-regular-size); line-height: var(--text-regular-line-height); letter-spacing: var(--text-regular-letter-spacing) }
- `(max-width: 1280px)` — 1 rule(s)
  - `.bHseLi` { font-size: var(--title-5-size); line-height: var(--title-5-line-height); letter-spacing: var(--title-5-letter-spacing) }
- `(max-width: 640px)` — 1 rule(s)
  - `.bHseLi` { font-size: var(--title-3-size); line-height: var(--title-3-line-height); letter-spacing: var(--title-3-letter-spacing) }
- `(max-width: 1280px)` — 1 rule(s)
  - `.eFpKkm` { font-size: var(--title-2-size); line-height: var(--title-2-line-height); letter-spacing: var(--title-2-letter-spacing) }
- `(max-width: 1024px)` — 1 rule(s)
  - `.eFpKkm` { font-size: var(--title-1-size); line-height: var(--title-1-line-height); letter-spacing: var(--title-1-letter-spacing) }
- `(max-width: 640px)` — 1 rule(s)
  - `.eFpKkm` { font-size: var(--text-regular-size); line-height: var(--text-regular-line-height); letter-spacing: var(--text-regular-letter-spacing) }
- `(max-width: 640px)` — 1 rule(s)
  - `.gSpjlA` { font-size: var(--text-micro-size); line-height: var(--text-micro-line-height); letter-spacing: var(--text-micro-letter-spacing) }
- `(max-width: 640px)` — 1 rule(s)
  - `.iIiuc` { font-size: var(--text-regular-size); line-height: var(--text-regular-line-height); letter-spacing: var(--text-regular-letter-spacing) }
- `(max-width: 640px)` — 1 rule(s)
  - `.kxocse` { font-size: var(--text-small-size); line-height: var(--text-small-line-height); letter-spacing: var(--text-small-letter-spacing) }
- `(max-width: 640px)` — 1 rule(s)
  - `.bItBh` { font-size: var(--text-mini-size); line-height: var(--text-mini-line-height); letter-spacing: var(--text-mini-letter-spacing) }
- `(max-width: 1280px)` — 1 rule(s)
  - `.kkJAGU` { font-size: var(--title-5-size); line-height: var(--title-5-line-height); letter-spacing: var(--title-5-letter-spacing) }
- `(max-width: 640px)` — 1 rule(s)
  - `.kkJAGU` { font-size: var(--title-2-size); line-height: var(--title-2-line-height); letter-spacing: var(--title-2-letter-spacing) }
- `(max-width: 768px)` — 1 rule(s)
  - `.gACPou` { font-size: var(--title-2-size); line-height: var(--title-2-line-height); letter-spacing: var(--title-2-letter-spacing) }
- `(max-width: 640px)` — 1 rule(s)
  - `.gACPou` { font-size: var(--title-1-size); line-height: var(--title-1-line-height); letter-spacing: var(--title-1-letter-spacing) }
- `(max-width: 1280px)` — 1 rule(s)
  - `.cvEOJe` { font-size: var(--title-5-size); line-height: var(--title-5-line-height); letter-spacing: var(--title-5-letter-spacing) }
- `(hover: none) and (pointer: coarse)` — 1 rule(s)
  - `[data-sonner-toaster][data-lifted="true"]` { transform: none }
- `(max-width: 600px)` — 7 rule(s)
  - `[data-sonner-toaster]` { position: fixed; right: var(--mobile-offset-right); left: var(--mobile-offset-left); width: 100% }
  - `[data-sonner-toaster][dir="rtl"]` { left: calc(var(--mobile-offset-left) * -1) }
  - `[data-sonner-toaster] [data-sonner-toast]` { left: 0px; right: 0px; width: calc(100% - var(--mobile-offset-left) * 2) }
  - `[data-sonner-toaster][data-x-position="left"]` { left: var(--mobile-offset-left) }
  - `[data-sonner-toaster][data-y-position="bottom"]` { bottom: var(--mobile-offset-bottom) }
  - `[data-sonner-toaster][data-y-position="top"]` { top: var(--mobile-offset-top) }
  - `[data-sonner-toaster][data-x-position="center"]` { left: var(--mobile-offset-left); right: var(--mobile-offset-right); transform: none }
- `(prefers-reduced-motion)` — 1 rule(s)
  - `.sonner-loading-bar, [data-sonner-toast], [data-sonner-toast] > *` { transition-behavior: normal; transition-duration: 0s; transition-timing-function: ease; transition-delay: 0s; transition-property: none }

## Key Selectors (587 shown)

`.bgDIHX` {
  font-size: var(--title-8-size);
  letter-spacing: var(--title-8-letter-spacing);
  line-height: 1;
  font-weight: var(--font-weight-medium);
}

`u.bgDIHX` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.bgDIHX` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.bgDIHX` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.bgDIHX` {
  user-select: none;
}

`.dhJTq` {
  font-size: var(--text-regular-size);
  line-height: var(--text-regular-line-height);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-tertiary);
}

`u.dhJTq` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.dhJTq` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.dhJTq` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.dhJTq` {
  user-select: none;
}

`.ha-DKfc` {
  font-size: var(--text-regular-size);
  line-height: var(--text-regular-line-height);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}

`u.ha-DKfc` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.ha-DKfc` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.ha-DKfc` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.ha-DKfc` {
  user-select: none;
}

`.eBXKXP` {
  font-size: var(--text-regular-size);
  line-height: var(--text-regular-line-height);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-tertiary);
}

`u.eBXKXP` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.eBXKXP` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.eBXKXP` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.eBXKXP` {
  user-select: none;
}

`.fQidsy` {
  font-size: var(--text-small-size);
  line-height: var(--text-small-line-height);
  letter-spacing: var(--text-small-letter-spacing);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-semibold);
}

`u.fQidsy` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.fQidsy` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.fQidsy` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.fQidsy` {
  user-select: none;
}

`.fkFEGF` {
  font-size: var(--text-micro-size);
  line-height: var(--text-micro-line-height);
  letter-spacing: var(--text-micro-letter-spacing);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}

`u.fkFEGF` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.fkFEGF` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.fkFEGF` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.fkFEGF` {
  user-select: none;
}

`.fBTzHJ` {
  font-size: var(--text-micro-size);
  line-height: var(--text-micro-line-height);
  letter-spacing: var(--text-micro-letter-spacing);
  color: var(--color-text-quaternary);
  font-weight: var(--font-weight-medium);
}

`u.fBTzHJ` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.fBTzHJ` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.fBTzHJ` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.fBTzHJ` {
  user-select: none;
}

`.kgndDe` {
  color: var(--color-text-tertiary);
}

`u.kgndDe` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.kgndDe` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.kgndDe` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.kgndDe` {
  user-select: none;
}

`.iuuHLm` {
  font-size: var(--title-2-size);
  line-height: var(--title-2-line-height);
  letter-spacing: var(--title-2-letter-spacing);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-semibold);
}

`u.iuuHLm` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.iuuHLm` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.iuuHLm` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.iuuHLm` {
  user-select: none;
}

`.isbOdf` {
  font-size: var(--text-small-size);
  line-height: var(--text-small-line-height);
  letter-spacing: var(--text-small-letter-spacing);
  color: var(--color-text-tertiary);
}

`u.isbOdf` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.isbOdf` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.isbOdf` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.isbOdf` {
  user-select: none;
}

`.eurYAb` {
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-semibold);
}

`u.eurYAb` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.eurYAb` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.eurYAb` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.eurYAb` {
  user-select: none;
}

`.buZxw` {
  font-size: var(--text-micro-size);
  line-height: var(--text-micro-line-height);
  letter-spacing: var(--text-micro-letter-spacing);
  color: var(--color-text-quaternary);
}

`u.buZxw` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.buZxw` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.buZxw` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.buZxw` {
  user-select: none;
}

`.cluTjt` {
  font-weight: var(--font-weight-semibold);
}

`u.cluTjt` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.cluTjt` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.cluTjt` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.cluTjt` {
  user-select: none;
}

`.ieHpLP` {
  font-size: var(--text-mini-size);
  line-height: var(--text-mini-line-height);
  letter-spacing: var(--text-mini-letter-spacing);
  color: var(--color-text-tertiary);
}

`u.ieHpLP` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.ieHpLP` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.ieHpLP` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.ieHpLP` {
  user-select: none;
}

`.fRpsWU` {
  color: var(--color-text-quaternary);
}

`u.fRpsWU` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.fRpsWU` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.fRpsWU` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.fRpsWU` {
  user-select: none;
}

`.kRmaQY` {
  font-size: var(--text-mini-size);
  line-height: var(--text-mini-line-height);
  color: var(--color-text-quaternary);
  font-family: var(--font-monospace);
  font-feature-settings: normal;
  font-variation-settings: normal;
  letter-spacing: normal;
}

`u.kRmaQY` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.kRmaQY` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.kRmaQY` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.kRmaQY` {
  user-select: none;
}

`.lcjIWe` {
  font-size: var(--text-micro-size);
  line-height: var(--text-micro-line-height);
  letter-spacing: var(--text-micro-letter-spacing);
  color: var(--color-text-tertiary);
}

`u.lcjIWe` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.lcjIWe` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.lcjIWe` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.lcjIWe` {
  user-select: none;
}

`.fCeHYh` {
  color: var(--color-text-quaternary);
  font-family: var(--font-monospace);
  font-feature-settings: normal;
  font-variation-settings: normal;
  letter-spacing: normal;
}

`u.fCeHYh` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.fCeHYh` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.fCeHYh` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.fCeHYh` {
  user-select: none;
}

`.cVJWpx` {
  font-size: var(--text-micro-size);
  line-height: var(--text-micro-line-height);
  color: var(--color-text-quaternary);
  font-family: var(--font-monospace);
  font-feature-settings: normal;
  font-variation-settings: normal;
  letter-spacing: normal;
}

`u.cVJWpx` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.cVJWpx` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.cVJWpx` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.cVJWpx` {
  user-select: none;
}

`.dtQGZI` {
  font-size: var(--text-mini-size);
  line-height: var(--text-mini-line-height);
  letter-spacing: var(--text-mini-letter-spacing);
  color: var(--color-text-quaternary);
  font-weight: var(--font-weight-medium);
}

`u.dtQGZI` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.dtQGZI` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.dtQGZI` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.dtQGZI` {
  user-select: none;
}

`.gEaBCQ` {
  font-size: var(--text-micro-size);
  line-height: var(--text-micro-line-height);
  letter-spacing: var(--text-micro-letter-spacing);
  color: var(--color-text-secondary);
}

`u.gEaBCQ` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.gEaBCQ` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.gEaBCQ` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.gEaBCQ` {
  user-select: none;
}

`.exSLMF` {
  font-size: var(--title-6-size);
  line-height: var(--title-6-line-height);
  letter-spacing: var(--title-6-letter-spacing);
  color: var(--color-text-tertiary);
  font-weight: var(--font-weight-medium);
}

`u.exSLMF` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.exSLMF` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.exSLMF` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.exSLMF` {
  user-select: none;
}

`.bWWlPr` {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
}

`u.bWWlPr` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.bWWlPr` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.bWWlPr` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.bWWlPr` {
  user-select: none;
}

`.JXdnR` {
  font-size: var(--text-regular-size);
  line-height: var(--text-regular-line-height);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}

`u.JXdnR` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.JXdnR` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.JXdnR` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.JXdnR` {
  user-select: none;
}

`.kImeU` {
  font-size: var(--text-micro-size);
  line-height: var(--text-micro-line-height);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  font-family: var(--font-monospace);
  font-feature-settings: normal;
  font-variation-settings: normal;
  letter-spacing: normal;
}

`u.kImeU` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.kImeU` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.kImeU` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.kImeU` {
  user-select: none;
}

`.hkGFXd` {
  font-size: var(--text-regular-size);
  line-height: var(--text-regular-line-height);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-tertiary);
  text-wrap-mode: initial;
  text-wrap-style: balance;
}

`u.hkGFXd` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.hkGFXd` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.hkGFXd` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.hkGFXd` {
  user-select: none;
}

`.bHseLi` {
  font-size: var(--title-6-size);
  line-height: var(--title-6-line-height);
  letter-spacing: var(--title-6-letter-spacing);
  text-wrap-mode: initial;
  text-wrap-style: balance;
  font-weight: var(--font-weight-medium);
}

`u.bHseLi` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.bHseLi` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.bHseLi` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.bHseLi` {
  user-select: none;
}

`.eFpKkm` {
  font-size: var(--title-3-size);
  line-height: var(--title-3-line-height);
  letter-spacing: var(--title-3-letter-spacing);
  text-wrap-mode: initial;
  text-wrap-style: pretty;
}

`u.eFpKkm` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.eFpKkm` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.eFpKkm` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.eFpKkm` {
  user-select: none;
}

`.cRemay` {
  font-size: var(--text-regular-size);
  line-height: var(--text-regular-line-height);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-quaternary);
  font-variant-numeric: tabular-nums;
  font-feature-settings: var(--font-settings),"ss01";
}

`u.cRemay` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.cRemay` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.cRemay` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.cRemay` {
  user-select: none;
}

`.cpxJeY` {
  font-size: var(--text-regular-size);
  line-height: var(--text-regular-line-height);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-quaternary);
}

`u.cpxJeY` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.cpxJeY` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.cpxJeY` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.cpxJeY` {
  user-select: none;
}

`.qoNTv` {
  font-size: var(--text-tiny-size);
  line-height: var(--text-tiny-line-height);
  letter-spacing: var(--text-tiny-letter-spacing);
  color: var(--color-text-quaternary);
  text-transform: uppercase;
}

`u.qoNTv` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.qoNTv` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.qoNTv` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.qoNTv` {
  user-select: none;
}

`.gKwRRs` {
  font-size: var(--text-small-size);
  line-height: var(--text-small-line-height);
  letter-spacing: var(--text-small-letter-spacing);
  color: var(--color-text-tertiary);
  font-weight: var(--font-weight-semibold);
}

`u.gKwRRs` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.gKwRRs` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.gKwRRs` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.gKwRRs` {
  user-select: none;
}

`.eMzRvb` {
  font-size: var(--text-regular-size);
  line-height: var(--text-regular-line-height);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-semibold);
}

`u.eMzRvb` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.eMzRvb` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.eMzRvb` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.eMzRvb` {
  user-select: none;
}

`.eBxaLf` {
  font-size: var(--text-regular-size);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-secondary);
  line-height: 22px;
  font-weight: var(--font-weight-light);
}

`u.eBxaLf` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.eBxaLf` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.eBxaLf` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.eBxaLf` {
  user-select: none;
}

`.kVtUAI` {
  font-size: var(--text-regular-size);
  line-height: var(--text-regular-line-height);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-secondary);
}

`u.kVtUAI` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.kVtUAI` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.kVtUAI` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.kVtUAI` {
  user-select: none;
}

`.cFpukR` {
  font-size: var(--text-mini-size);
  line-height: var(--text-mini-line-height);
  letter-spacing: var(--text-mini-letter-spacing);
  color: var(--color-text-secondary);
}

`u.cFpukR` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.cFpukR` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.cFpukR` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.cFpukR` {
  user-select: none;
}

`.LTSrg` {
  font-size: var(--text-small-size);
  line-height: var(--text-small-line-height);
  letter-spacing: var(--text-small-letter-spacing);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}

`u.LTSrg` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.LTSrg` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.LTSrg` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.LTSrg` {
  user-select: none;
}

`.ewfQMJ` {
  font-size: var(--text-small-size);
  line-height: var(--text-small-line-height);
  letter-spacing: var(--text-small-letter-spacing);
  color: var(--color-text-tertiary);
  white-space-collapse: collapse;
  text-wrap-mode: nowrap;
}

`u.ewfQMJ` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.ewfQMJ` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.ewfQMJ` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.ewfQMJ` {
  user-select: none;
}

`.kyPvam` {
  font-size: var(--text-small-size);
  line-height: var(--text-small-line-height);
  color: var(--color-text-quaternary);
  white-space-collapse: collapse;
  text-wrap-mode: nowrap;
  font-family: var(--font-monospace);
  font-feature-settings: normal;
  font-variation-settings: normal;
  letter-spacing: normal;
}

`u.kyPvam` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.kyPvam` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.kyPvam` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.kyPvam` {
  user-select: none;
}

`.lkJmdy` {
  font-size: var(--text-small-size);
  line-height: var(--text-small-line-height);
  letter-spacing: var(--text-small-letter-spacing);
  color: var(--color-text-tertiary);
  font-weight: var(--font-weight-medium);
}

`u.lkJmdy` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.lkJmdy` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.lkJmdy` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.lkJmdy` {
  user-select: none;
}

`.fUFflj` {
  color: var(--color-text-quaternary);
  font-weight: var(--font-weight-normal);
}

`u.fUFflj` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.fUFflj` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.fUFflj` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.fUFflj` {
  user-select: none;
}

`.fuIiuN` {
  font-size: var(--text-small-size);
  line-height: var(--text-small-line-height);
  letter-spacing: var(--text-small-letter-spacing);
  color: var(--color-text-quaternary);
}

`u.fuIiuN` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.fuIiuN` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.fuIiuN` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.fuIiuN` {
  user-select: none;
}

`.fyRlqn` {
  font-weight: var(--font-weight-medium);
}

`u.fyRlqn` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.fyRlqn` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.fyRlqn` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.fyRlqn` {
  user-select: none;
}

`.gSpjlA` {
  font-size: var(--text-small-size);
  line-height: var(--text-small-line-height);
  color: var(--color-text-quaternary);
  font-family: var(--font-monospace);
  font-feature-settings: normal;
  font-variation-settings: normal;
  letter-spacing: normal;
}

`u.gSpjlA` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.gSpjlA` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.gSpjlA` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.gSpjlA` {
  user-select: none;
}

`.eWjVBF` {
  font-size: var(--text-mini-size);
  line-height: var(--text-mini-line-height);
  letter-spacing: var(--text-mini-letter-spacing);
  color: var(--color-text-quaternary);
}

`u.eWjVBF` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.eWjVBF` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.eWjVBF` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.eWjVBF` {
  user-select: none;
}

`.iIiuc` {
  font-size: var(--text-large-size);
  line-height: var(--text-large-line-height);
  letter-spacing: var(--text-large-letter-spacing);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-semibold);
}

`u.iIiuc` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.iIiuc` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.iIiuc` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.iIiuc` {
  user-select: none;
}

`.fzmrRC` {
  font-size: var(--text-mini-size);
  line-height: var(--text-mini-line-height);
  letter-spacing: var(--text-mini-letter-spacing);
  color: var(--color-text-tertiary);
  font-weight: var(--font-weight-medium);
}

`u.fzmrRC` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.fzmrRC` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.fzmrRC` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.fzmrRC` {
  user-select: none;
}

`.kxocse` {
  font-size: var(--text-regular-size);
  line-height: var(--text-regular-line-height);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
}

`u.kxocse` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.kxocse` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.kxocse` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.kxocse` {
  user-select: none;
}

`.kObxPg` {
  font-size: var(--text-mini-size);
  line-height: var(--text-mini-line-height);
  letter-spacing: var(--text-mini-letter-spacing);
  color: var(--color-red);
}

`u.kObxPg` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.kObxPg` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.kObxPg` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.kObxPg` {
  user-select: none;
}

`.bItBh` {
  font-size: var(--text-regular-size);
  line-height: var(--text-regular-line-height);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-secondary);
}

`u.bItBh` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.bItBh` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.bItBh` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.bItBh` {
  user-select: none;
}

`.joaZDU` {
  font-size: var(--text-mini-size);
  line-height: var(--text-mini-line-height);
  letter-spacing: var(--text-mini-letter-spacing);
  color: var(--color-green);
}

`u.joaZDU` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.joaZDU` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.joaZDU` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.joaZDU` {
  user-select: none;
}

`.kkJAGU` {
  font-size: var(--title-6-size);
  line-height: var(--title-6-line-height);
  letter-spacing: var(--title-6-letter-spacing);
  font-weight: var(--font-weight-medium);
}

`u.kkJAGU` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.kkJAGU` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.kkJAGU` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.kkJAGU` {
  user-select: none;
}

`.hgPYZU` {
  font-size: var(--text-regular-size);
  line-height: var(--text-regular-line-height);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-secondary);
  white-space-collapse: collapse;
  text-wrap-mode: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;
  font-weight: var(--font-weight-medium);
}

`u.hgPYZU` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.hgPYZU` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.hgPYZU` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.hgPYZU` {
  user-select: none;
}

`.fDwULd` {
  font-size: var(--text-regular-size);
  line-height: var(--text-regular-line-height);
  letter-spacing: var(--text-regular-letter-spacing);
  color: var(--color-text-tertiary);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow-x: hidden;
  overflow-y: hidden;
  overflow-wrap: anywhere;
}

`u.fDwULd` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.fDwULd` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.fDwULd` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.fDwULd` {
  user-select: none;
}

`.lojvgG` {
  font-size: var(--text-micro-size);
  line-height: var(--text-micro-line-height);
  color: var(--color-text-quaternary);
  text-transform: uppercase;
  font-family: var(--font-monospace);
  font-feature-settings: normal;
  font-variation-settings: normal;
  letter-spacing: normal;
}

`u.lojvgG` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.lojvgG` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.lojvgG` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.lojvgG` {
  user-select: none;
}

`.kAqRVy` {
  font-size: var(--text-small-size);
  line-height: var(--text-small-line-height);
  letter-spacing: var(--text-small-letter-spacing);
  color: var(--color-bg-primary);
  font-weight: var(--font-weight-medium);
}

`u.kAqRVy` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.kAqRVy` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.kAqRVy` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.kAqRVy` {
  user-select: none;
}

`.hTQQlf` {
  font-size: var(--text-small-size);
  line-height: var(--text-small-line-height);
  letter-spacing: var(--text-small-letter-spacing);
  color: var(--color-bg-primary);
}

`u.hTQQlf` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.hTQQlf` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.hTQQlf` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.hTQQlf` {
  user-select: none;
}

`.gACPou` {
  font-size: var(--title-4-size);
  line-height: var(--title-4-line-height);
  letter-spacing: var(--title-4-letter-spacing);
  color: var(--color-bg-primary);
  text-wrap-mode: initial;
  text-wrap-style: balance;
}

`u.gACPou` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.gACPou` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.gACPou` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.gACPou` {
  user-select: none;
}

`.Wjobp` {
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}

`u.Wjobp` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.Wjobp` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.Wjobp` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.Wjobp` {
  user-select: none;
}

`.cvEOJe` {
  font-size: var(--title-9-size);
  line-height: var(--title-9-line-height);
  letter-spacing: var(--title-9-letter-spacing);
  text-wrap-mode: initial;
  text-wrap-style: balance;
  text-align: center;
  font-weight: var(--font-weight-medium);
}

`u.cvEOJe` {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 1.5px;
  text-decoration-color: var(--color-text-quaternary);
  text-underline-offset: 2.5px;
}

`sup.cvEOJe` {
  position: relative;
  vertical-align: initial;
  top: -0.5em;
  font-size: 0.6em;
}

`code.cvEOJe` {
  font-family: var(--font-monospace);
  font-size: 0.9em;
  background-image: none;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`label.cvEOJe` {
  user-select: none;
}

`.grid-dot-0-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-0-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-0-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-1-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-1-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-2-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-2-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-3-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-3-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-4-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-4-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-0-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-0-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-1-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-1-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-2-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-2-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-3-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-3-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-4-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-4-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-0-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-0-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-1-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-1-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-2-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-2-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-3-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-3-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-4-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-4-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-0-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-0-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-1-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-1-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-2-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-2-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-3-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-3-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-4-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-4-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-0-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-0-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-1-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-1-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-2-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-2-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-3-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-3-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-4-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-4-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-0-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-0-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-1-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-1-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-2-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-2-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-3-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-3-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-4-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-4-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-0-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-0-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-1-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-1-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-2-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-2-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-3-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-3-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-4-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-4-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-0-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-0-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-1-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-1-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-2-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-2-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-3-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-3-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-4-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-4-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-0-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-0-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-1-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-1-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-2-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-2-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-3-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-3-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-4-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-4-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-0-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-0-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-1-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-1-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-2-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-2-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-3-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-3-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-4-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-4-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-0-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-0-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-1-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-1-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-2-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-2-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-3-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-3-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-4-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-4-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-0-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-0-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-1-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-1-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-2-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-2-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-3-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-3-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-4-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-4-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-0-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-0-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-1-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-1-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-2-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-2-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-3-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-3-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-4-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-4-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-0-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-0-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-1-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-1-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-2-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-2-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-3-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-3-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-4-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-4-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-0-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-0-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-1-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-1-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-2-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-2-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-3-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-3-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-4-upDown` {
  animation-duration: 2800ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-4-upDown;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-0-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-0-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-1-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-1-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-2-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-2-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-3-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-3-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-4-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-4-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-0-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-0-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-1-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-1-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-2-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-2-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-3-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-3-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-4-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-4-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-0-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-0-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-1-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-1-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-2-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-2-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-3-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-3-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-4-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-4-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-0-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-0-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-1-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-1-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-2-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-2-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-3-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-3-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-4-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-4-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-0-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-0-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-1-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-1-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-2-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-2-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-3-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-3-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-4-pong` {
  animation-duration: 1600ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-4-pong;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-0-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-1-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-2-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-3-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-0-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-0-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-1-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-1-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-2-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-2-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-3-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-3-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-4-agent` {
  animation-duration: 3200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: grid-dot-4-4-agent;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-0-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-0-0-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-1-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-0-1-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-2-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-0-2-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-3-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-0-3-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-0-4-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-0-4-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-0-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-1-0-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-1-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-1-1-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-2-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-1-2-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-3-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-1-3-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-1-4-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-1-4-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-0-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-2-0-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-1-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-2-1-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-2-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-2-2-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-3-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-2-3-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-2-4-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-2-4-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-0-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-3-0-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-1-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-3-1-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-2-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-3-2-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-3-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-3-3-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-3-4-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-3-4-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-0-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-4-0-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-1-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-4-1-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-2-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-4-2-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-3-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-4-3-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.grid-dot-4-4-empty-once` {
  animation-duration: 200ms;
  animation-timing-function: steps(1);
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: grid-dot-4-4-empty-once;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`[data-sonner-toaster][dir="ltr"], html[dir="ltr"]` {
  --toast-icon-margin-start: -3px;
  --toast-icon-margin-end: 4px;
  --toast-svg-margin-start: -1px;
  --toast-svg-margin-end: 0px;
  --toast-button-margin-start: auto;
  --toast-button-margin-end: 0;
  --toast-close-button-start: 0;
  --toast-close-button-end: unset;
  --toast-close-button-transform: translate(-35%, -35%);
}

`[data-sonner-toaster][dir="rtl"], html[dir="rtl"]` {
  --toast-icon-margin-start: 4px;
  --toast-icon-margin-end: -3px;
  --toast-svg-margin-start: 0px;
  --toast-svg-margin-end: -1px;
  --toast-button-margin-start: 0;
  --toast-button-margin-end: auto;
  --toast-close-button-start: unset;
  --toast-close-button-end: 0;
  --toast-close-button-transform: translate(35%, -35%);
}

`[data-sonner-toaster]` {
  position: fixed;
  width: var(--width);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --gray1: hsl(0, 0%, 99%);
  --gray2: hsl(0, 0%, 97.3%);
  --gray3: hsl(0, 0%, 95.1%);
  --gray4: hsl(0, 0%, 93%);
  --gray5: hsl(0, 0%, 90.9%);
  --gray6: hsl(0, 0%, 88.7%);
  --gray7: hsl(0, 0%, 85.8%);
  --gray8: hsl(0, 0%, 78%);
  --gray9: hsl(0, 0%, 56.1%);
  --gray10: hsl(0, 0%, 52.3%);
  --gray11: hsl(0, 0%, 43.5%);
  --gray12: hsl(0, 0%, 9%);
  --border-radius: 8px;
  box-sizing: border-box;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  list-style-position: initial;
  list-style-image: initial;
  list-style-type: none;
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
  z-index: 999999999;
  transition-behavior: normal;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: transform;
}

`[data-sonner-toaster][data-x-position="right"]` {
  right: var(--offset-right);
}

`[data-sonner-toaster][data-x-position="left"]` {
  left: var(--offset-left);
}

`[data-sonner-toaster][data-x-position="center"]` {
  left: 50%;
  transform: translateX(-50%);
}

`[data-sonner-toaster][data-y-position="top"]` {
  top: var(--offset-top);
}

`[data-sonner-toaster][data-y-position="bottom"]` {
  bottom: var(--offset-bottom);
}

`[data-sonner-toast]` {
  --y: translateY(100%);
  --lift-amount: calc(var(--lift) * var(--gap));
  z-index: var(--z-index);
  position: absolute;
  opacity: 0;
  transform: var(--y);
  touch-action: none;
  transition-behavior: normal, normal, normal, normal;
  transition-duration: 0.4s, 0.4s, 0.4s, 0.2s;
  transition-timing-function: ease, ease, ease, ease;
  transition-delay: 0s, 0s, 0s, 0s;
  transition-property: transform, opacity, height, box-shadow;
  box-sizing: border-box;
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
  overflow-wrap: anywhere;
}

`[data-sonner-toast][data-styled="true"]` {
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-color: ;
  border-top-style: ;
  border-top-width: ;
  border-right-color: ;
  border-right-style: ;
  border-right-width: ;
  border-bottom-color: ;
  border-bottom-style: ;
  border-bottom-width: ;
  border-left-color: ;
  border-left-style: ;
  border-left-width: ;
  border-image-source: ;
  border-image-slice: ;
  border-image-width: ;
  border-image-outset: ;
  border-image-repeat: ;
  color: var(--normal-text);
  border-top-left-radius: ;
  border-top-right-radius: ;
  border-bottom-right-radius: ;
  border-bottom-left-radius: ;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: var(--width);
  font-size: 13px;
  display: flex;
  align-items: center;
  row-gap: 6px;
  column-gap: 6px;
}

`[data-sonner-toast]:focus-visible` {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.2) 0px 0px 0px 2px;
}

`[data-sonner-toast][data-y-position="top"]` {
  top: 0px;
  --y: translateY(-100%);
  --lift: 1;
  --lift-amount: calc(1 * var(--gap));
}

`[data-sonner-toast][data-y-position="bottom"]` {
  bottom: 0px;
  --y: translateY(100%);
  --lift: -1;
  --lift-amount: calc(var(--lift) * var(--gap));
}

`[data-sonner-toast][data-styled="true"] [data-description]` {
  font-weight: 400;
  line-height: 1.4;
  color: rgb(63, 63, 63);
}

`[data-rich-colors="true"][data-sonner-toast][data-styled="true"] [data-description]` {
  color: inherit;
}

`[data-sonner-toaster][data-sonner-theme="dark"] [data-description]` {
  color: rgb(232, 232, 232);
}

`[data-sonner-toast][data-styled="true"] [data-title]` {
  font-weight: 500;
  line-height: 1.5;
  color: inherit;
}

`[data-sonner-toast][data-styled="true"] [data-icon]` {
  display: flex;
  height: 16px;
  width: 16px;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  margin-left: var(--toast-icon-margin-start);
  margin-right: var(--toast-icon-margin-end);
}

`[data-sonner-toast][data-promise="true"] [data-icon] > svg` {
  opacity: 0;
  transform: scale(0.8);
  transform-origin: center center;
  animation-duration: 0.3s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: sonner-fade-in;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`[data-sonner-toast][data-styled="true"] [data-icon] > *` {
  flex-shrink: 0;
}

`[data-sonner-toast][data-styled="true"] [data-icon] svg` {
  margin-left: var(--toast-svg-margin-start);
  margin-right: var(--toast-svg-margin-end);
}

`[data-sonner-toast][data-styled="true"] [data-content]` {
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  column-gap: 2px;
}

`[data-sonner-toast][data-styled="true"] [data-button]` {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  height: 24px;
  font-size: 12px;
  color: var(--normal-bg);
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  margin-left: var(--toast-button-margin-start);
  margin-right: var(--toast-button-margin-end);
  border-top-width: medium;
  border-right-width: medium;
  border-bottom-width: medium;
  border-left-width: medium;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-top-color: currentcolor;
  border-right-color: currentcolor;
  border-bottom-color: currentcolor;
  border-left-color: currentcolor;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  font-weight: 500;
  cursor: pointer;
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition-behavior: normal, normal;
  transition-duration: 0.4s, 0.2s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
  transition-property: opacity, box-shadow;
}

`[data-sonner-toast][data-styled="true"] [data-button]:focus-visible` {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 0px 2px;
}

`[data-sonner-toast][data-styled="true"] [data-button]:first-of-type` {
  margin-left: var(--toast-button-margin-start);
  margin-right: var(--toast-button-margin-end);
}

`[data-sonner-toast][data-styled="true"] [data-cancel]` {
  color: var(--normal-text);
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgba(0, 0, 0, 0.08);
}

`[data-sonner-toaster][data-sonner-theme="dark"] [data-sonner-toast][data-styled="true"] [data-cancel]` {
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgba(255, 255, 255, 0.3);
}

`[data-sonner-toast][data-styled="true"] [data-close-button]` {
  position: absolute;
  left: var(--toast-close-button-start);
  right: var(--toast-close-button-end);
  top: 0px;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  color: var(--gray12);
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-color: ;
  border-top-style: ;
  border-top-width: ;
  border-right-color: ;
  border-right-style: ;
  border-right-width: ;
  border-bottom-color: ;
  border-bottom-style: ;
  border-bottom-width: ;
  border-left-color: ;
  border-left-style: ;
  border-left-width: ;
  border-image-source: ;
  border-image-slice: ;
  border-image-width: ;
  border-image-outset: ;
  border-image-repeat: ;
  transform: var(--toast-close-button-transform);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  cursor: pointer;
  z-index: 1;
  transition-behavior: normal, normal, normal;
  transition-duration: 0.1s, 0.2s, 0.2s;
  transition-timing-function: ease, ease, ease;
  transition-delay: 0s, 0s, 0s;
  transition-property: opacity, background, border-color;
}

`[data-sonner-toast][data-styled="true"] [data-close-button]:focus-visible` {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.2) 0px 0px 0px 2px;
}

`[data-sonner-toast][data-styled="true"] [data-disabled="true"]` {
  cursor: not-allowed;
}

`[data-sonner-toast][data-styled="true"]:hover [data-close-button]:hover` {
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
}

`[data-sonner-toast][data-swiping="true"]::before` {
  content: "";
  position: absolute;
  left: -100%;
  right: -100%;
  height: 100%;
  z-index: -1;
}

`[data-sonner-toast][data-y-position="top"][data-swiping="true"]::before` {
  bottom: 50%;
  transform: scaleY(3) translateY(50%);
}

`[data-sonner-toast][data-y-position="bottom"][data-swiping="true"]::before` {
  top: 50%;
  transform: scaleY(3) translateY(-50%);
}

`[data-sonner-toast][data-swiping="false"][data-removed="true"]::before` {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  transform: scaleY(2);
}

`[data-sonner-toast][data-expanded="true"]::after` {
  content: "";
  position: absolute;
  left: 0px;
  height: calc(var(--gap) + 1px);
  bottom: 100%;
  width: 100%;
}

`[data-sonner-toast][data-mounted="true"]` {
  --y: translateY(0);
  opacity: 1;
}

`[data-sonner-toast][data-expanded="false"][data-front="false"]` {
  --scale: var(--toasts-before) * 0.05 + 1;
  --y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));
  height: var(--front-toast-height);
}

`[data-sonner-toast] > *` {
  transition-behavior: normal;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: opacity;
}

`[data-sonner-toast][data-x-position="right"]` {
  right: 0px;
}

`[data-sonner-toast][data-x-position="left"]` {
  left: 0px;
}

`[data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"] > *` {
  opacity: 0;
}

`[data-sonner-toast][data-visible="false"]` {
  opacity: 0;
  pointer-events: none;
}

`[data-sonner-toast][data-mounted="true"][data-expanded="true"]` {
  --y: translateY(calc(var(--lift) * var(--offset)));
  height: var(--initial-height);
}

`[data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]` {
  --y: translateY(calc(var(--lift) * -100%));
  opacity: 0;
}

`[data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]` {
  --y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));
  opacity: 0;
}

`[data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]` {
  --y: translateY(40%);
  opacity: 0;
  transition-behavior: normal, normal;
  transition-duration: 0.5s, 0.2s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
  transition-property: transform, opacity;
}

`[data-sonner-toast][data-removed="true"][data-front="false"]::before` {
  height: calc(var(--initial-height) + 20%);
}

`[data-sonner-toast][data-swiping="true"]` {
  transform: var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));
  transition-behavior: normal;
  transition-duration: 0s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: none;
}

`[data-sonner-toast][data-swiped="true"]` {
  user-select: none;
}

`[data-sonner-toast][data-swipe-out="true"][data-y-position="bottom"], [data-sonner-toast][data-swipe-out="true"][data-y-position="top"]` {
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

`[data-sonner-toast][data-swipe-out="true"][data-swipe-direction="left"]` {
  animation-name: swipe-out-left;
}

`[data-sonner-toast][data-swipe-out="true"][data-swipe-direction="right"]` {
  animation-name: swipe-out-right;
}

`[data-sonner-toast][data-swipe-out="true"][data-swipe-direction="up"]` {
  animation-name: swipe-out-up;
}

`[data-sonner-toast][data-swipe-out="true"][data-swipe-direction="down"]` {
  animation-name: swipe-out-down;
}

`[data-sonner-toaster][data-sonner-theme="light"]` {
  --normal-bg: #fff;
  --normal-border: var(--gray4);
  --normal-text: var(--gray12);
  --success-bg: hsl(143, 85%, 96%);
  --success-border: hsl(145, 92%, 87%);
  --success-text: hsl(140, 100%, 27%);
  --info-bg: hsl(208, 100%, 97%);
  --info-border: hsl(221, 91%, 93%);
  --info-text: hsl(210, 92%, 45%);
  --warning-bg: hsl(49, 100%, 97%);
  --warning-border: hsl(49, 91%, 84%);
  --warning-text: hsl(31, 92%, 45%);
  --error-bg: hsl(359, 100%, 97%);
  --error-border: hsl(359, 100%, 94%);
  --error-text: hsl(360, 100%, 45%);
}

`[data-sonner-toaster][data-sonner-theme="light"] [data-sonner-toast][data-invert="true"]` {
  --normal-bg: #000;
  --normal-border: hsl(0, 0%, 20%);
  --normal-text: var(--gray1);
}

`[data-sonner-toaster][data-sonner-theme="dark"] [data-sonner-toast][data-invert="true"]` {
  --normal-bg: #fff;
  --normal-border: var(--gray3);
  --normal-text: var(--gray12);
}

`[data-sonner-toaster][data-sonner-theme="dark"]` {
  --normal-bg: #000;
  --normal-bg-hover: hsl(0, 0%, 12%);
  --normal-border: hsl(0, 0%, 20%);
  --normal-border-hover: hsl(0, 0%, 25%);
  --normal-text: var(--gray1);
  --success-bg: hsl(150, 100%, 6%);
  --success-border: hsl(147, 100%, 12%);
  --success-text: hsl(150, 86%, 65%);
  --info-bg: hsl(215, 100%, 6%);
  --info-border: hsl(223, 43%, 17%);
  --info-text: hsl(216, 87%, 65%);
  --warning-bg: hsl(64, 100%, 6%);
  --warning-border: hsl(60, 100%, 9%);
  --warning-text: hsl(46, 87%, 65%);
  --error-bg: hsl(358, 76%, 10%);
  --error-border: hsl(357, 89%, 16%);
  --error-text: hsl(358, 100%, 81%);
}

`[data-sonner-toaster][data-sonner-theme="dark"] [data-sonner-toast] [data-close-button]` {
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
  color: var(--normal-text);
}

`[data-sonner-toaster][data-sonner-theme="dark"] [data-sonner-toast] [data-close-button]:hover` {
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
}

`[data-rich-colors="true"][data-sonner-toast][data-type="success"]` {
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
  color: var(--success-text);
}

`[data-rich-colors="true"][data-sonner-toast][data-type="success"] [data-close-button]` {
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
  color: var(--success-text);
}

`[data-rich-colors="true"][data-sonner-toast][data-type="info"]` {
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
  color: var(--info-text);
}

`[data-rich-colors="true"][data-sonner-toast][data-type="info"] [data-close-button]` {
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
  color: var(--info-text);
}

`[data-rich-colors="true"][data-sonner-toast][data-type="warning"]` {
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
  color: var(--warning-text);
}

`[data-rich-colors="true"][data-sonner-toast][data-type="warning"] [data-close-button]` {
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
  color: var(--warning-text);
}

`[data-rich-colors="true"][data-sonner-toast][data-type="error"]` {
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
  color: var(--error-text);
}

`[data-rich-colors="true"][data-sonner-toast][data-type="error"] [data-close-button]` {
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-color: ;
  border-right-color: ;
  border-bottom-color: ;
  border-left-color: ;
  color: var(--error-text);
}

`.sonner-loading-wrapper` {
  --size: 16px;
  height: var(--size);
  width: var(--size);
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 10;
}

`.sonner-loading-wrapper[data-visible="false"]` {
  transform-origin: center center;
  animation-duration: 0.2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: sonner-fade-out;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
}

`.sonner-spinner` {
  position: relative;
  top: 50%;
  left: 50%;
  height: var(--size);
  width: var(--size);
}

`.sonner-loading-bar` {
  animation-duration: 1.2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: sonner-spin;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-size: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  height: 8%;
  left: -10%;
  position: absolute;
  top: -3.9%;
  width: 24%;
}

`.sonner-loading-bar:first-child` {
  animation-delay: -1.2s;
  transform: rotate(0.0001deg) translate(146%);
}

`.sonner-loading-bar:nth-child(2)` {
  animation-delay: -1.1s;
  transform: rotate(30deg) translate(146%);
}

`.sonner-loading-bar:nth-child(3)` {
  animation-delay: -1s;
  transform: rotate(60deg) translate(146%);
}

`.sonner-loading-bar:nth-child(4)` {
  animation-delay: -0.9s;
  transform: rotate(90deg) translate(146%);
}

`.sonner-loading-bar:nth-child(5)` {
  animation-delay: -0.8s;
  transform: rotate(120deg) translate(146%);
}

`.sonner-loading-bar:nth-child(6)` {
  animation-delay: -0.7s;
  transform: rotate(150deg) translate(146%);
}

`.sonner-loading-bar:nth-child(7)` {
  animation-delay: -0.6s;
  transform: rotate(180deg) translate(146%);
}

`.sonner-loading-bar:nth-child(8)` {
  animation-delay: -0.5s;
  transform: rotate(210deg) translate(146%);
}

`.sonner-loading-bar:nth-child(9)` {
  animation-delay: -0.4s;
  transform: rotate(240deg) translate(146%);
}

`.sonner-loading-bar:nth-child(10)` {
  animation-delay: -0.3s;
  transform: rotate(270deg) translate(146%);
}

`.sonner-loading-bar:nth-child(11)` {
  animation-delay: -0.2s;
  transform: rotate(300deg) translate(146%);
}

`.sonner-loading-bar:nth-child(12)` {
  animation-delay: -0.1s;
  transform: rotate(330deg) translate(146%);
}

`.sonner-loader` {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  transition-behavior: normal, normal;
  transition-duration: 0.2s, 0.2s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
  transition-property: opacity, transform;
}

`.sonner-loader[data-visible="false"]` {
  opacity: 0;
  transform: scale(0.8) translate(-50%, -50%);
}



---

# 5. Component Architecture

Build these components:
- Navigation bar (sticky/fixed)
- Hero section (full viewport)
- Showcase/gallery (portfolio, projects)
- Pricing tiers
- Team/about section
- Contact/booking form
- Footer (business identity, legal)

**Stack recommendation:** Next.js with app router

---

# 6. Section-by-Section Build Spec (33 sections detected, full detail)

## Section 1: Hero
- **Confidence:** 30%
- **Tag:** section
- **Classes:** `section`
- **Size:** 0px height
### HTML Structure

```html
<section aria-label="Notifications alt+T" tabindex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 2: Hero
- **Confidence:** 0%
- **Tag:** section
- **Classes:** `section`
- **Size:** 0px height
### HTML Structure

```html
<section aria-label="Notifications alt+T" tabindex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 3: Contact
- **Confidence:** 35%
- **Tag:** section
- **Classes:** `PageSection_root__kFVv1 PageSection_rootHomepage__2x22W`
- **Size:** full viewport height
- **Padding:** 96px 0px 128px
- **Headings:** H2: "Make product operations self-driving"
- **CTAs:** 1.0Intake→, 1.1Linear Agent +, 1.2Triage +, 1.3Customer Requests +, 1.4Linear Asks +
- **Media:** 10 image(s), 51 SVG(s)
- **Animations:**
  - `div`.page_container__YSA5u: transition: all; transform: matrix(1, 0, 0, 1, -120, 0)
  - `div`.page_panel__h_tIJ: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.hide-mobile: transition: all
  - `div`.SlackIssue_row__Os_Mw: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.SlackIssue_slackBoxContainer__e8FUr: transition: all; transform: matrix(1, 0, 0, 1, -24, 0)
  - `div`.SlackIssue_slackBox__GIILV: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.SlackIssue_glow__EfqJL: transition: all; transform: matrix(1, 0, 0, 1, -400, -160)
  - `div`.SlackIssue_chatMessages__M7WOf: transition: all
  - `div`.page_glow__3Lj5a: transition: all; transform: matrix(1, 0, 0, 1, 200, -200)
  - `div`.PageSection_footer__e0E0p: transition: all
  - `div`.utils_inset__Xhl3T: transition: all
  - `div`.utils_inset__Xhl3T: transition: all
  - `div`.SlackIssue_chatInput__Y9WPf: transition: all
  - `div`.utils_inset__Xhl3T: transition: all
  - `p`.sc-d5151d0-0: transition: all
  - `h2`.sc-d5151d0-0: transition: all
  - `div`.SlackIssue_chatMessage__HOXiM: transition: all
  - `div`.SlackIssue_textarea___o4_Z: transition: all
  - `div`.Pillar_ingredients__QEm_W: transition: all
  - `div`.SlackIssue_chatMessage__HOXiM: transition: all
  - `div`.SlackIssue_chatMessage__HOXiM: transition: all
  - `div`.SlackIssue_chatMessage__HOXiM: transition: all
  - `div`.PageSection_actionWrapper__SpZEC: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all

### Element Style Blueprint

- **`<div>`** .page_container__YSA5u.SlackIssue_container__mAvbr
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 22px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1478.39px | padding: 8px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -120, 0)
  - text: "Backlog8ENG-2085Reduce UI flicker during autonomy...ENG-2094Add buffering for autonomy event streamsENG-2092Reduce startup delay caused by vehicle syn"

- **`<div>`** .page_panel__h_tIJ.SlackIssue_panel__SA_Ze
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(15, 16, 17) | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | shadow: rgb(35, 37, 42) 0px 0px 0px 1px inset | display: block | width: 1460.39px | padding: 24px 0px 24px 385px | opacity: 0.8
  - anim: all
  - text: "Backlog8ENG-2085Reduce UI flicker during autonomy...ENG-2094Add buffering for autonomy event streamsENG-2092Reduce startup delay caused by vehicle syn"

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | display: block | width: 1460.39px | opacity: 0.6
  - anim: all

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Backlog8ENG-2085Reduce UI flicker during autonomy...ENG-2094Add buffering for autonomy event streamsENG-2092Reduce startup delay caused by vehicle syn"

- **`<div>`** .hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Backlog8ENG-2085Reduce UI flicker during autonomy...ENG-2094Add buffering for autonomy event streamsENG-2092Reduce startup delay caused by vehicle syn"

- **`<div>`** .SlackIssue_row__Os_Mw.Flex_root__DOQCW
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 1075.39px | opacity: 1
  - anim: all
  - text: "Backlog8ENG-2085Reduce UI flicker during autonomy...ENG-2094Add buffering for autonomy event streamsENG-2092Reduce startup delay caused by vehicle syn"

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Make product operations self-drivingTurn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the "

- **`<div>`** .SlackIssue_slackBoxContainer__e8FUr
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 16px | border: 0px none rgb(247, 248, 248) | display: block | width: 480px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -24, 0)
  - text: "Thread in #feedbackdidier5:41 AMHas anyone been looking into the iOS startup performance issues?lena5:41 AMAnyone else noticing the iOS app feels slow"

- **`<div>`** .SlackIssue_slackBox__GIILV.page_fixedGlowBgRight__uXUH5
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 16px | border: 0px none rgb(247, 248, 248) | display: block | width: 480px | padding: 0px 0px 12px | opacity: 1
  - anim: all
  - text: "Thread in #feedbackdidier5:41 AMHas anyone been looking into the iOS startup performance issues?lena5:41 AMAnyone else noticing the iOS app feels slow"

- **`<div>`** .Grain_grain__0LR5u
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 16px | border: 0px none rgb(247, 248, 248) | display: block | width: 478px | opacity: 0.9
  - anim: all

- **`<div>`** .SlackIssue_glow__EfqJL.page_glow__3Lj5a
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 800px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -400, -160)

- **`<div>`** .SlackIssue_chatMessages__M7WOf
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 480px | padding: 26px 24px 32px | opacity: 1
  - anim: all
  - text: "didier5:41 AMHas anyone been looking into the iOS startup performance issues?lena5:41 AMAnyone else noticing the iOS app feels slow to open if you hav"

- **`<div>`** .page_glow__3Lj5a.SlackIssue_slackGlow__AZbCE
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 400px | opacity: 0.04
  - anim: all | matrix(1, 0, 0, 1, 200, -200)

- **`<div>`** .PageSection_footer__e0E0p.hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | opacity: 1
  - anim: all
  - text: "1.1Linear Agent +1.2Triage +1.3Customer Requests +1.4Linear Asks +"

- **`<div>`** .utils_inset__Xhl3T.utils_insetLarge__6UCke
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 674px | padding: 0px 32px | margin: 0px 0px 0px -2px | opacity: 1
  - anim: all
  - text: "Make product operations self-driving"

- **`<div>`** .utils_inset__Xhl3T.PageSection_descriptionContainer__cUxgQ
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 672px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "Turn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the right team.1.0Intake→"

- **`<div>`** .SlackIssue_chatInput__Y9WPf
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgba(255, 255, 255, 0.02) | radius: 8px | border: 1px solid rgba(255, 255, 255, 0.05) | display: flex | width: 456px | padding: 16px | margin: 0px 12px | opacity: 1
  - anim: all
  - text: "@Linearcreate issues urgent issues and assign to me"

- **`<div>`** .utils_inset__Xhl3T.PageSection_footerContent__DRk40
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 672px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "1.1Linear Agent +1.2Triage +1.3Customer Requests +1.4Linear Asks +"

- **`<p>`** .sc-d5151d0-0.eFpKkm
  - font: 24px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | lh: 31.92px | ls: -0.288px | text-align: start | border: 0px none rgb(208, 214, 224) | display: block | width: 566.438px | opacity: 1
  - anim: all
  - text: "Turn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the right team."

- **`<h2>`** .sc-d5151d0-0.bHseLi
  - font: 48px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 48px | ls: -1.056px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 541.688px | opacity: 1
  - anim: all
  - text: "Make product operations self-driving"

- **`<div>`** .SlackIssue_chatMessage__HOXiM
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 432px | opacity: 1
  - anim: all
  - text: "andreas5:41 AMFeels like we could render sooner and load the rest in the background. Probably also worth tracking startup timing so we know how often "

- **`<div>`** .SlackIssue_textarea___o4_Z
  - font: 15px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | lh: 22.5px | text-align: start | border: 0px none rgb(208, 214, 224) | display: block | width: 422px | opacity: 1
  - anim: all
  - text: "@Linearcreate issues urgent issues and assign to me"

- **`<div>`** .Pillar_ingredients__QEm_W
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 608px | opacity: 1
  - anim: all
  - text: "1.1Linear Agent +1.2Triage +1.3Customer Requests +1.4Linear Asks +"

- **`<div>`** .SlackIssue_chatMessage__HOXiM
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 432px | opacity: 0
  - anim: all
  - text: "didier5:41 AMHas anyone been looking into the iOS startup performance issues?"

- **`<div>`** .SlackIssue_chatMessage__HOXiM
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 432px | opacity: 1
  - anim: all
  - text: "lena5:41 AMAnyone else noticing the iOS app feels slow to open if you haven't used it in a bit?"

- **`<div>`** .SlackIssue_chatMessage__HOXiM
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 432px | opacity: 1
  - anim: all
  - text: "didier5:41 AMYea, we're still blocking initial render on a full vehicle_state sync every time..."

- **`<div>`** .PageSection_actionWrapper__SpZEC
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 608px | margin: 48px 0px 0px | opacity: 1
  - anim: all
  - text: "1.0Intake→"

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 422px | opacity: 1
  - anim: all

- **`<div>`** .Pillar_ingredient__V_EfN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 304px | opacity: 1
  - anim: all
  - text: "1.1Linear Agent +"

- **`<div>`** .Pillar_ingredient__V_EfN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 304px | opacity: 1
  - anim: all
  - text: "1.3Customer Requests +"

### HTML Structure

```html
<section class="PageSection_root__kFVv1 PageSection_rootHomepage__2x22W"><div class="PageSection_header__3JdVh"><div class="utils_inset__Xhl3T utils_insetLarge__6UCke PageSection_titleContainer__jqqcc"><h2 style="max-width:18ch" class="sc-d5151d0-0 bHseLi">Make product 
operations self-driving</h2></div><div class="utils_inset__Xhl3T PageSection_descriptionContainer__cUxgQ"><p class="sc-d5151d0-0 eFpKkm PageSection_descriptionText__APAbi">Turn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the right team.</p><div class="PageSection_actionWrapper__SpZEC"><a style="display:inline-block" class="Link_root__cNtak" rel="noopener" href="/intake"><div class="PageSection_action__7OSHK Flex_root__DOQCW Flex_align-center__oXK9F"><span class="sc-d5151d0-0 cRemay utils_slashedZero__RsR0l">1.0</span><span style="display:inline-block;margin-left:12px" class="sc-d5151d0-0 dhJTq">Intake</span><span style="display:inline-block;margin-left:6px" class="sc-d5151d0-0 cpxJeY">→</span></div></a></div></div></div><div class="PageSection_illustration__P1Yb9"><div class="hide-mobile" style="position:relative"><div class="page_container__YSA5u SlackIssue_container__mAvbr"><div class="page_panel__h_tIJ SlackIssue_panel__SA_Ze"><div class="Grain_grain__0LR5u Grain_grainSubtle__LzX_q" style="top:1px"></div><div class="SlackIssue_row__Os_Mw Flex_root__DOQCW" style="gap:16px"><div class="SlackIssue_col__p5SlP"><div class="SlackIssue_colHeader__wggP0 Flex_root__DOQCW Flex_align-center__oXK9F" style="gap:8px"><svg width="14" height="14" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:#9c9da1" fill="#9c9da1"><path d="M13.9408 7.91426L11.9576 7.65557C11.9855 7.4419 12 7.22314 12 7C12 6.77686 11.9855 6.5581 11.9576 6.34443L13.9408 6.08573C13.9799 6.38496 14 6.69013 14 7C14 7.30987 13.9799 7.61504 13.9408 7.91426ZM13.4688 4.32049C13.2328 3.7514 12.9239 3.22019 12.5538 2.73851L10.968 3.95716C11.2328 4.30185 11.4533 4.68119 11.6214 5.08659L13.4688 4.32049ZM11.2615 1.4462L10.0428 3.03204C9.69815 2.76716 9.31881 2.54673 8.91341 2.37862L9.67951 0.531163C10.2486 0.767153 10.7798 1.07605 11.2615 1.4462ZM7.91426 0.0591659L7.65557 2.04237C7.4419 2.01449 7.22314 2 7 2C6.77686 2 6.5581 2.01449 6.34443 2.04237L6.08574 0.059166C6.38496 0.0201343 6.69013 0 7 0C7.30987 0 7.61504 0.0201343 7.91426 0.0591659ZM4.32049 0.531164L5.08659 2.37862C4.68119 2.54673 4.30185 2.76716 3.95716 3.03204L2.73851 1.4462C3.22019 1.07605 3.7514 0.767153 4.32049 0.531164ZM1.4462 2.73851L3.03204 3.95716C2.76716 4.30185 2.54673 4.68119 2.37862 5.08659L0.531164 4.32049C0.767153 3.7514 1.07605 3.22019 1.4462 2.73851ZM0.0591659 6.08574C0.0201343 6.38496 0 6.69013 0 7C0 7.30987 0.0201343 7.61504 0.059166 7.91426L2.04237 7.65557C2.01449 7.4419 2 7.22314 2 7C2 6.77686 2.01449 6.5581 2.04237 6.34443L0.0591659 6.08574ZM0.531164 9.67951L2.37862 8.91341C2.54673 9.31881 2.76716 9.69815 3.03204 10.0428L1.4462 11.2615C1.07605 10.7798 0.767153 10.2486 0.531164 9.67951ZM2.73851 12.5538L3.95716 10.968C4.30185 11.2328 4.68119 11.4533 5.08659 11.6214L4.32049 13.4688C3.7514 13.2328 3.22019 12.9239 2.73851 12.5538ZM6.08574 13.9408L6.34443 11.9576C6.5581 11.9855 6.77686 12 7 12C7.22314 12 7.4419 11.9855 7.65557 11.9576L7.91427 13.9408C7.61504 13.9799 7.30987 14 7 14C6.69013 14 6.38496 13.9799 6.08574 13.9408ZM9.67951 13.4688L8.91341 11.6214C9.31881 11.4533 9.69815 11.2328 10.0428 10.968L11.2615 12.5538C10.7798 12.9239 10.2486 13.2328 9.67951 13.4688ZM12.5538 11.2615L10.968 10.0428C11.2328 9.69815 11.4533 9.31881 11.6214 8.91341L13.4688 9.67951C13.2328 10.2486 12.924 10.7798 12.5538 11.2615Z" stroke="none"></path></svg><span class="sc-d5151d0-0 fkFEGF">Backlog</span><span class="sc-d5151d0-0 lcjIWe">8</span><div class="Flex_root__DOQCW" style="margin-left:auto"><button class="SlackIssue_headerButton__7Xc7x" aria-label="Add issue" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path d="M8.75 4C8.75 3.58579 8.41421 3.25 8 3.25C7.58579 3.25 7.25 3.58579 7.25 4V7.25H4C3.58579 7.25 3.25 7.58579 3.25 8C3.25 8.41421 3.58579 8.75 4 8.75H7.25V12C7.25 12.4142 7.58579 12.75 8 12.75C8.41421 12.75 8.75 12.4142 8.75 12V8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8.75V4Z"></path></svg></button><button class="SlackIssue_headerButton__7Xc7x" aria-label="Open menu" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path></svg></button></div></div><div class="Flex_root__DOQCW Flex_column__eg2kV" style="gap:8px"><div class="SlackIssue_issue__o3OEZ"><div class="Flex_root__DOQCW Flex_align-center__oXK9F Flex_justify-space-between__Txsv7"><span class="sc-d5151d0-0 qoNTv">ENG-2085</span><div class="Flex_root__DOQCW" style="color:var(--color-text-quaternary)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M8 4a2 2 0 0 0-2 2v.5a2 2 0 0 0 4 0V6a2 2 0 0 0-2-2"></path><path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-2.879-4.121-1.01 1.01a5.5 5.5 0 1 1 7.778 0l-1.01-1.01A3 3 0 0 0 8.757 10H7.243a3 3 0 0 0-2.122.879" clip-rule="evenodd"></path></svg></div></div><span class="sc-d5151d0-0 gEaBCQ">Reduce UI flicker during autonomy...</span><div class="Flex_root__DOQCW" style="margin-top:auto;gap:4px"><button aria-label="Set priority" class="SlackIssue_priorityButton__s3OgP" tabindex="-1"><svg width="10" height="10" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path></svg></button></div></div><div class="SlackIssue_issue__o3OEZ"><div class="Flex_root__DOQCW Flex_align-center__oXK9F Flex_justify-space-between__Txsv7"><span class="sc-d5151d0-0 qoNTv">ENG-2094</span><div class="Flex_root__DOQCW" style="color:var(--color-text-quaternary)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M8 4a2 2 0 0 0-2 2v.5a2 2 0 0 0 4 0V6a2 2 0 0 0-2-2"></path><path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-2.879-4.121-1.01 1.01a5.5 5.5 0 1 1 7.778 0l-1.01-1.01A3 3 0 0 0 8.757 10H7.243a3 3 0 0 0-2.122.879" clip-rule="evenodd"></path></svg></div></div><span class="sc-d5151d0-0 gEaBCQ">Add buffering for autonomy event streams</span><div class="Flex_root__DOQCW" style="margin-top:auto;gap:4px"><button aria-label="Set priority" class="SlackIssue_priorityButton__s3OgP" tabindex="-1"><svg width="10" height="10" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 4: Hero
- **Confidence:** 35%
- **Tag:** section
- **Classes:** `PageSection_root__kFVv1 PageSection_rootHomepage__2x22W`
- **Size:** full viewport height
- **Padding:** 96px 0px 128px
- **Headings:** H2: "Define the product direction"
- **CTAs:** 2.0Plan→, Core Product99, APAC Expansion21, 2.1Projects +, 2.2Documents +
- **Media:** 1 image(s), 28 SVG(s)
- **Animations:**
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.hide-mobile: transition: all
  - `div`.page_container__YSA5u: transition: all
  - `div`.page_panel__h_tIJ: transition: all
  - `div`.Plan_timelineWrapper__Cpnud: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.Plan_initiativesBox__hyqkS: transition: all; transform: matrix(1, 0, 0, 1, -24, 0)
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.Plan_initiativesBoxGlow__sp6zE: transition: all; transform: matrix(1, 0, 0, 1, 200, -200)
  - `div`.PageSection_footer__e0E0p: transition: all
  - `div`.utils_inset__Xhl3T: transition: all
  - `div`.utils_inset__Xhl3T: transition: all
  - `div`.Plan_initiativesBoxTable__Mx4vD: transition: all
  - `div`.Plan_initiativesBoxTable__Mx4vD: transition: all
  - `div`.utils_inset__Xhl3T: transition: all
  - `p`.sc-d5151d0-0: transition: all
  - `h2`.sc-d5151d0-0: transition: all
  - `div`.Pillar_ingredients__QEm_W: transition: all
  - `div`.PageSection_actionWrapper__SpZEC: transition: all
  - `button`.Plan_primaryItem__P1cX5: transition: all
  - `button`.Plan_primaryItem__P1cX5: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all
  - `div`.Plan_secondaryItem__y_tbD: transition: all
  - `div`.Plan_secondaryItem__y_tbD: transition: all

### Element Style Blueprint

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "FEBMARAPRMAYJUNJULAUGSEP29162329162330613202741118251815222961320273101724317142128UI RefreshCore screensPolishSplit faresInternalPublic BetaAutonomy "

- **`<div>`** .hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "FEBMARAPRMAYJUNJULAUGSEP29162329162330613202741118251815222961320273101724317142128UI RefreshCore screensPolishSplit faresInternalPublic BetaAutonomy "

- **`<div>`** .page_container__YSA5u.Plan_container__bCkp7
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 22px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1344px | padding: 8px | opacity: 1
  - anim: all
  - text: "FEBMARAPRMAYJUNJULAUGSEP29162329162330613202741118251815222961320273101724317142128UI RefreshCore screensPolishSplit faresInternalPublic BetaAutonomy "

- **`<div>`** .page_panel__h_tIJ.Plan_panel__xLKqj
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(15, 16, 17) | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | shadow: rgb(35, 37, 42) 0px 0px 0px 1px inset | display: flex | width: 1326px | opacity: 1
  - anim: all
  - text: "FEBMARAPRMAYJUNJULAUGSEP29162329162330613202741118251815222961320273101724317142128UI RefreshCore screensPolishSplit faresInternalPublic BetaAutonomy "

- **`<div>`** .Plan_timelineWrapper__Cpnud
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 1326px | opacity: 1
  - anim: all
  - text: "FEBMARAPRMAYJUNJULAUGSEP29162329162330613202741118251815222961320273101724317142128UI RefreshCore screensPolishSplit faresInternalPublic BetaAutonomy "

- **`<div>`** .Grain_grain__0LR5u
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | display: block | width: 1326px | opacity: 0.9
  - anim: all

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Define the product directionPlan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date"

- **`<div>`** .Plan_initiativesBox__hyqkS.page_fixedGlowBgRight__uXUH5
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 0px none rgb(247, 248, 248) | display: block | width: 400px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -24, 0)
  - text: "InitiativesCore Product99Infra stability28Autonomous systems16Mobile apps8APAC Expansion21Japan Launch12Customer-driven priorities9"

- **`<div>`** .Grain_grain__0LR5u
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 0px none rgb(247, 248, 248) | display: block | width: 398px | opacity: 0.9
  - anim: all

- **`<div>`** .Plan_initiativesBoxGlow__sp6zE.page_glow__3Lj5a
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 400px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, 200, -200)

- **`<div>`** .PageSection_footer__e0E0p.hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | opacity: 1
  - anim: all
  - text: "2.1Projects +2.2Documents +2.3Initiatives +2.4Visual planning +"

- **`<div>`** .utils_inset__Xhl3T.utils_insetLarge__6UCke
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 674px | padding: 0px 32px | margin: 0px 0px 0px -2px | opacity: 1
  - anim: all
  - text: "Define the product direction"

- **`<div>`** .utils_inset__Xhl3T.PageSection_descriptionContainer__cUxgQ
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 672px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "Plan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date PRDs.2.0Plan→"

- **`<div>`** .Plan_initiativesBoxTable__Mx4vD.Plan_initiativesBoxTableFirst__qdcTt
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | display: flex | width: 400px | padding: 22px 22px 26px | opacity: 1
  - anim: all
  - text: "Core Product99Infra stability28Autonomous systems16Mobile apps8"

- **`<div>`** .Plan_initiativesBoxTable__Mx4vD
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 400px | padding: 22px 22px 26px | opacity: 1
  - anim: all
  - text: "APAC Expansion21Japan Launch12Customer-driven priorities9"

- **`<div>`** .utils_inset__Xhl3T.PageSection_footerContent__DRk40
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 672px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "2.1Projects +2.2Documents +2.3Initiatives +2.4Visual planning +"

- **`<p>`** .sc-d5151d0-0.eFpKkm
  - font: 24px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | lh: 31.92px | ls: -0.288px | text-align: start | border: 0px none rgb(208, 214, 224) | display: block | width: 566.438px | opacity: 1
  - anim: all
  - text: "Plan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date PRDs."

- **`<h2>`** .sc-d5151d0-0.bHseLi
  - font: 48px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 48px | ls: -1.056px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 541.688px | opacity: 1
  - anim: all
  - text: "Define the product direction"

- **`<div>`** .Pillar_ingredients__QEm_W
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 608px | opacity: 1
  - anim: all
  - text: "2.1Projects +2.2Documents +2.3Initiatives +2.4Visual planning +"

- **`<div>`** .PageSection_actionWrapper__SpZEC
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 608px | margin: 48px 0px 0px | opacity: 1
  - anim: all
  - text: "2.0Plan→"

- **`<button>`** .Plan_primaryItem__P1cX5
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(255, 255, 255) | text-align: center | border: 0px none rgb(255, 255, 255) | display: block | width: 356px | opacity: 1
  - anim: all
  - text: "Core Product99"

- **`<button>`** .Plan_primaryItem__P1cX5
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(255, 255, 255) | text-align: center | border: 0px none rgb(255, 255, 255) | display: block | width: 356px | opacity: 1
  - anim: all
  - text: "APAC Expansion21"

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(255, 255, 255) | text-align: center | border: 0px none rgb(255, 255, 255) | display: flex | width: 356px | opacity: 1
  - anim: all
  - text: "Core Product99"

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(255, 255, 255) | text-align: center | border: 0px none rgb(255, 255, 255) | display: flex | width: 356px | opacity: 1
  - anim: all
  - text: "APAC Expansion21"

- **`<div>`** .Pillar_ingredient__V_EfN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 304px | opacity: 1
  - anim: all
  - text: "2.1Projects +"

- **`<div>`** .Pillar_ingredient__V_EfN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 304px | opacity: 1
  - anim: all
  - text: "2.3Initiatives +"

- **`<div>`** .Pillar_ingredient__V_EfN.Pillar_unevenIngredient__Ub7b0
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 280px | padding: 0px 0px 0px 32px | margin: 0px 0px 0px 24px | opacity: 1
  - anim: all
  - text: "2.2Documents +"

- **`<div>`** .Pillar_ingredient__V_EfN.Pillar_unevenIngredient__Ub7b0
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 280px | padding: 0px 0px 0px 32px | margin: 0px 0px 0px 24px | opacity: 1
  - anim: all
  - text: "2.4Visual planning +"

- **`<div>`** .Plan_secondaryItem__y_tbD.Flex_root__DOQCW
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 356px | padding: 0px 0px 0px 26px | opacity: 1
  - anim: all
  - text: "Infra stability28"

- **`<div>`** .Plan_secondaryItem__y_tbD.Flex_root__DOQCW
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 356px | padding: 0px 0px 0px 26px | opacity: 1
  - anim: all
  - text: "Autonomous systems16"

### HTML Structure

```html
<section class="PageSection_root__kFVv1 PageSection_rootHomepage__2x22W"><div class="PageSection_header__3JdVh"><div class="utils_inset__Xhl3T utils_insetLarge__6UCke PageSection_titleContainer__jqqcc"><h2 style="max-width:18ch" class="sc-d5151d0-0 bHseLi">Define the 
product direction</h2></div><div class="utils_inset__Xhl3T PageSection_descriptionContainer__cUxgQ"><p class="sc-d5151d0-0 eFpKkm PageSection_descriptionText__APAbi">Plan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date PRDs.</p><div class="PageSection_actionWrapper__SpZEC"><a style="display:inline-block" class="Link_root__cNtak" rel="noopener" href="/plan"><div class="PageSection_action__7OSHK Flex_root__DOQCW Flex_align-center__oXK9F"><span class="sc-d5151d0-0 cRemay utils_slashedZero__RsR0l">2.0</span><span style="display:inline-block;margin-left:12px" class="sc-d5151d0-0 dhJTq">Plan</span><span style="display:inline-block;margin-left:6px" class="sc-d5151d0-0 cpxJeY">→</span></div></a></div></div></div><div class="PageSection_illustration__P1Yb9"><div class="show-mobile"><div class="Bleed_root__EzNZN"><div class="Spacer_root__uoSvA" style="--height:16px"></div><img alt="" data-nosnippet="true" data-loaded="false" loading="eager" width="390" height="312" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent;width:100%" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/7d7115d9-a0eb-4a92-5900-3ca3ee077d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"><div class="Spacer_root__uoSvA" style="--height:-28px"></div></div></div><div class="hide-mobile" style="position:relative;overflow:hidden"><div class="page_container__YSA5u Plan_container__bCkp7"><div class="page_panel__h_tIJ Plan_panel__xLKqj"><div class="Grain_grain__0LR5u" style="top:1px"></div><div class="Plan_timelineWrapper__Cpnud"><div class="Plan_timeline__Qcs0w"><div class="Plan_timelineMonths__u1U62"><div class="Plan_timelineMonthName__BZsVD"><span class="sc-d5151d0-0 fBTzHJ">FEB</span><div class="Plan_timelineStripes__lYy_R"><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div></div></div><div class="Plan_timelineMonthName__BZsVD"><div class="Plan_timelineMonthSeparator__5snhg"></div><span class="sc-d5151d0-0 fBTzHJ">MAR</span><div class="Plan_timelineStripes__lYy_R"><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div></div></div><div class="Plan_timelineMonthName__BZsVD"><div class="Plan_timelineMonthSeparator__5snhg"></div><span class="sc-d5151d0-0 fBTzHJ">APR</span><div class="Plan_timelineStripes__lYy_R"><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div></div></div><div class="Plan_timelineMonthName__BZsVD"><div class="Plan_timelineMonthSeparator__5snhg"></div><span class="sc-d5151d0-0 fBTzHJ">MAY</span><div class="Plan_timelineStripes__lYy_R"><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div></div></div><div class="Plan_timelineMonthName__BZsVD"><div class="Plan_timelineMonthSeparator__5snhg"></div><span class="sc-d5151d0-0 fBTzHJ">JUN</span><div class="Plan_timelineStripes__lYy_R"><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div></div></div><div class="Plan_timelineMonthName__BZsVD"><div class="Plan_timelineMonthSeparator__5snhg"></div><span class="sc-d5151d0-0 fBTzHJ">JUL</span><div class="Plan_timelineStripes__lYy_R"><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div></div></div><div class="Plan_timelineMonthName__BZsVD"><div class="Plan_timelineMonthSeparator__5snhg"></div><span class="sc-d5151d0-0 fBTzHJ">AUG</span><div class="Plan_timelineStripes__lYy_R"><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div></div></div><div class="Plan_timelineMonthName__BZsVD"><div class="Plan_timelineMonthSeparator__5snhg"></div><span class="sc-d5151d0-0 fBTzHJ">SEP</span><div class="Plan_timelineStripes__lYy_R"><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div><div class="Plan_timelineStripe__ZENJ_"></div></div></div></div><div class="Plan_timelineDates__SPJR3"><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">2</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">9</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">16</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">23</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">2</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">9</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">16</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">23</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">30</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">6</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">13</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">20</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">27</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">4</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">11</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">18</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">25</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">1</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">8</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">15</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">22</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">29</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">6</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">13</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">20</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">27</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">3</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">10</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">17</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">24</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">31</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">7</span></div><div class="Plan_timelineDate__ax95R"><span class="sc-d5151d0-0 buZxw">14</span></div><div class="Plan_timelineDate__ax95R"><span clas
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 5: Pricing
- **Confidence:** 35%
- **Tag:** section
- **Classes:** `PageSection_root__kFVv1 PageSection_rootHomepage__2x22W`
- **Size:** full viewport height
- **Padding:** 96px 0px 128px
- **Headings:** H2: "Move work forward across teams and agents"
- **CTAs:** 3.0Build→, 3.1Issues +, 3.2Agents +, 3.3Linear MCP +, 3.4Git automations +
- **Media:** 8 image(s), 3 SVG(s)
- **Animations:**
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.Build_agentsContainerWrapper___UD1Y: transition: all
  - `div`.page_container__YSA5u: transition: all
  - `div`.page_panel__h_tIJ: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.Build_cmdkContainer__hLqDY: transition: all
  - `div`.Build_cmdk__gSfBd: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.Build_listContainer__e3Qk6: transition: all
  - `div`.Build_list__ryOlg: transition: all
  - `div`.PageSection_footer__e0E0p: transition: all
  - `div`.page_glow__3Lj5a: transition: all; transform: matrix(1, 0, 0, 1, -200, -200)
  - `div`.page_glow__3Lj5a: transition: all; transform: matrix(1, 0, 0, 1, -200, -200)
  - `div`.utils_inset__Xhl3T: transition: all
  - `div`.utils_inset__Xhl3T: transition: all
  - `div`.utils_inset__Xhl3T: transition: all
  - `p`.sc-d5151d0-0: transition: all
  - `h2`.sc-d5151d0-0: transition: all
  - `div`.Pillar_ingredients__QEm_W: transition: all
  - `div`: transition: all
  - `div`.PageSection_actionWrapper__SpZEC: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all
  - `span`.Pillar_ingredient__V_EfN: transition: all
  - `button`.Pillar_ingredientButton__5T1Jt: transition: all

### Element Style Blueprint

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "CodexOn it! I've received your request.Kicked off a task in kinetic/kinetic-iOS environment.Searching for root AGENTS filekinetic/kinetic-iOS$ /bin/ba"

- **`<div>`** .Build_agentsContainerWrapper___UD1Y.hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "CodexOn it! I've received your request.Kicked off a task in kinetic/kinetic-iOS environment.Searching for root AGENTS filekinetic/kinetic-iOS$ /bin/ba"

- **`<div>`** .page_container__YSA5u.Build_agentsContainer__U8YFA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 22px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1344px | padding: 8px | opacity: 1
  - anim: all
  - text: "CodexOn it! I've received your request.Kicked off a task in kinetic/kinetic-iOS environment.Searching for root AGENTS filekinetic/kinetic-iOS$ /bin/ba"

- **`<div>`** .page_panel__h_tIJ.Build_agentsPanel___o9Ez
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(15, 16, 17) | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | shadow: rgb(35, 37, 42) 0px 0px 0px 1px inset | display: block | width: 1326px | opacity: 1
  - anim: all
  - text: "CodexOn it! I've received your request.Kicked off a task in kinetic/kinetic-iOS environment.Searching for root AGENTS filekinetic/kinetic-iOS$ /bin/ba"

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | display: block | width: 1324px | opacity: 0.6
  - anim: all

- **`<div>`** .Flex_root__DOQCW.Flex_align-flex-start__QBSOx
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 1326px | opacity: 1
  - anim: all
  - text: "On it! I've received your request.Kicked off a task in kinetic/kinetic-iOS environment.Searching for root AGENTS filekinetic/kinetic-iOS$ /bin/bash -l"

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Move work forward across teams and agentsBuild and deploy AI agents that work alongside your team. Work on complex tasks together or delegate entire i"

- **`<div>`** .Build_cmdkContainer__hLqDY.page_fixedGlowBgLeft__Hda7A
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 0px none rgb(247, 248, 248) | shadow: rgba(8, 9, 10, 0.6) 0px 4px 32px 0px | display: block | width: 560px | opacity: 1
  - anim: all
  - text: "Agents Command MenuCodexAgentStevenEmaGitHub CopilotAgentCursorAgentMeg"

- **`<div>`** .Build_cmdk__gSfBd
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 0px none rgb(247, 248, 248) | shadow: rgba(8, 9, 10, 0.1) 0px 0px 0px 1px, rgba(8, 9, 10, 0.4) 0px 0px 64px 0px | display: block | width: 560px | opacity: 1
  - anim: all
  - text: "Agents Command MenuCodexAgentStevenEmaGitHub CopilotAgentCursorAgentMeg"

- **`<div>`** .Grain_grain__0LR5u
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 0px none rgb(247, 248, 248) | display: block | width: 558px | opacity: 0.9
  - anim: all

- **`<div>`** .Build_listContainer__e3Qk6
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 560px | padding: 12px | opacity: 1
  - anim: all
  - text: "CodexAgentStevenEmaGitHub CopilotAgentCursorAgentMeg"

- **`<div>`** .Build_list__ryOlg #radix-_R_lphbinpfcqlb_
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 536px | opacity: 1
  - anim: all
  - text: "CodexAgentStevenEmaGitHub CopilotAgentCursorAgentMeg"

- **`<div>`** .PageSection_footer__e0E0p.hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | opacity: 1
  - anim: all
  - text: "3.1Issues +3.2Agents +3.3Linear MCP +3.4Git automations +3.5Cycles +"

- **`<div>`** .page_glow__3Lj5a
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 400px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -200, -200)

- **`<div>`** .page_glow__3Lj5a
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 400px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -200, -200)

- **`<div>`** .utils_inset__Xhl3T.utils_insetLarge__6UCke
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 674px | padding: 0px 32px | margin: 0px 0px 0px -2px | opacity: 1
  - anim: all
  - text: "Move work forward across teams and agents"

- **`<div>`** .utils_inset__Xhl3T.PageSection_descriptionContainer__cUxgQ
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 672px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "Build and deploy AI agents that work alongside your team. Work on complex tasks together or delegate entire issues end-to-end.3.0Build→"

- **`<div>`** .utils_inset__Xhl3T.PageSection_footerContent__DRk40
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 672px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "3.1Issues +3.2Agents +3.3Linear MCP +3.4Git automations +3.5Cycles +"

- **`<p>`** .sc-d5151d0-0.eFpKkm
  - font: 24px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | lh: 31.92px | ls: -0.288px | text-align: start | border: 0px none rgb(208, 214, 224) | display: block | width: 566.438px | opacity: 1
  - anim: all
  - text: "Build and deploy AI agents that work alongside your team. Work on complex tasks together or delegate entire issues end-to-end."

- **`<h2>`** .sc-d5151d0-0.bHseLi
  - font: 48px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 48px | ls: -1.056px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 541.688px | opacity: 1
  - anim: all
  - text: "Move work forward across teams and agents"

- **`<div>`** .Pillar_ingredients__QEm_W
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 608px | opacity: 1
  - anim: all
  - text: "3.1Issues +3.2Agents +3.3Linear MCP +3.4Git automations +3.5Cycles +"

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 560px | opacity: 1
  - anim: all

- **`<div>`** .PageSection_actionWrapper__SpZEC
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 608px | margin: 48px 0px 0px | opacity: 1
  - anim: all
  - text: "3.0Build→"

- **`<div>`** .Pillar_ingredient__V_EfN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 304px | opacity: 1
  - anim: all
  - text: "3.1Issues +"

- **`<div>`** .Pillar_ingredient__V_EfN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 304px | opacity: 1
  - anim: all
  - text: "3.3Linear MCP +"

- **`<div>`** .Pillar_ingredient__V_EfN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 304px | opacity: 1
  - anim: all
  - text: "3.5Cycles +"

- **`<div>`** .Pillar_ingredient__V_EfN.Pillar_unevenIngredient__Ub7b0
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 280px | padding: 0px 0px 0px 32px | margin: 0px 0px 0px 24px | opacity: 1
  - anim: all
  - text: "3.2Agents +"

- **`<div>`** .Pillar_ingredient__V_EfN.Pillar_unevenIngredient__Ub7b0
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 280px | padding: 0px 0px 0px 32px | margin: 0px 0px 0px 24px | opacity: 1
  - anim: all
  - text: "3.4Git automations +"

- **`<span>`** .Pillar_ingredient__V_EfN.Pillar_unevenIngredient__Ub7b0
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 280px | padding: 0px 0px 0px 32px | margin: 0px 0px 0px 24px | opacity: 1
  - anim: all

- **`<button>`** .Pillar_ingredientButton__5T1Jt
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(255, 255, 255) | text-align: center | border: 0px none rgb(255, 255, 255) | display: block | width: 162.625px | opacity: 1
  - anim: all
  - text: "3.4Git automations +"

### HTML Structure

```html
<section class="PageSection_root__kFVv1 PageSection_rootHomepage__2x22W"><div class="PageSection_header__3JdVh"><div class="utils_inset__Xhl3T utils_insetLarge__6UCke PageSection_titleContainer__jqqcc"><h2 style="max-width:18ch" class="sc-d5151d0-0 bHseLi">Move work forward 
across teams and agents</h2></div><div class="utils_inset__Xhl3T PageSection_descriptionContainer__cUxgQ"><p class="sc-d5151d0-0 eFpKkm PageSection_descriptionText__APAbi">Build and deploy AI agents that work alongside your team. Work on complex tasks together or delegate entire issues end-to-end.</p><div class="PageSection_actionWrapper__SpZEC"><a style="display:inline-block" class="Link_root__cNtak" rel="noopener" href="/build"><div class="PageSection_action__7OSHK Flex_root__DOQCW Flex_align-center__oXK9F"><span class="sc-d5151d0-0 cRemay utils_slashedZero__RsR0l">3.0</span><span style="display:inline-block;margin-left:12px" class="sc-d5151d0-0 dhJTq">Build</span><span style="display:inline-block;margin-left:6px" class="sc-d5151d0-0 cpxJeY">→</span></div></a></div></div></div><div class="PageSection_illustration__P1Yb9"><div class="show-mobile"><div class="Spacer_root__uoSvA" style="--height:12px"></div><div class="Bleed_root__EzNZN"><img alt="" data-nosnippet="true" data-loaded="false" loading="eager" width="390" height="312" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent;width:100%" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/584d7dbd-ff4a-41bb-4fab-74fd5217a400/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"><div class="Spacer_root__uoSvA" style="--height:-28px"></div></div></div><div class="Build_agentsContainerWrapper___UD1Y hide-mobile" style="position:relative"><div class="page_container__YSA5u Build_agentsContainer__U8YFA"><div class="page_panel__h_tIJ Build_agentsPanel___o9Ez"><div class="Grain_grain__0LR5u Grain_grainSubtle__LzX_q" style="top:1px;left:1px;right:1px;z-index:var(--layer-3)"></div><header class="Build_header__OAL8V"><div class="Flex_root__DOQCW Flex_align-center__oXK9F" style="position:relative;height:100%"><img alt="Codex" data-nosnippet="true" data-loaded="false" loading="eager" width="20" height="20" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent;border-radius:50%;margin-right:12px" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/13a0909f-186f-4d83-3fd3-d04883ec2d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"><span class="sc-d5151d0-0 LTSrg">Codex</span></div><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:var(--color-text-quaternary)" fill="var(--color-text-quaternary)"><path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path></svg></header><div class="page_glow__3Lj5a" style="z-index:1"></div><div class="Flex_root__DOQCW Flex_align-flex-start__QBSOx Flex_justify-start__sNYF8"><div class="Build_content__aS7m7" data-expanded="false"><div style="height:auto;opacity:1;transform:translateY(0)"><span class="sc-d5151d0-0 ewfQMJ">On it! I've received your request.</span></div><div style="height:auto;opacity:1;transform:translateY(0)"><div class="Flex_root__DOQCW Flex_align-baseline__VVH_q" style="gap:8px"><span class="sc-d5151d0-0 ewfQMJ">Kicked off a task in</span> <span class="sc-d5151d0-0 kyPvam">kinetic/kinetic-iOS environment.</span></div></div><div style="height:auto;opacity:1;transform:translateY(0)"><span class="sc-d5151d0-0 ewfQMJ">Searching for root AGENTS file</span></div><div style="height:auto;opacity:1;transform:translateY(0)"><span class="sc-d5151d0-0 kyPvam">kinetic/kinetic-iOS$ /bin/bash -lc rg --files -g 'AGENTS.md' <br>AGENTS.md</span></div><div style="height:auto;opacity:1;transform:translateY(0)"><div class="Flex_root__DOQCW Flex_align-baseline__VVH_q" style="gap:8px"><span class="sc-d5151d0-0 ewfQMJ">Locating initialization logic for</span> <span class="sc-d5151d0-0 kyPvam">vehicle_state</span></div></div><div style="height:auto;opacity:1;transform:translateY(0)"><div class="Flex_root__DOQCW Flex_align-center__oXK9F" style="gap:8px"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><circle class="grid-dot-0-0-agent" cx="1" cy="1" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-0-1-agent" cx="4.5" cy="1" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-0-2-agent" cx="8" cy="1" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-0-3-agent" cx="11.5" cy="1" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-0-4-agent" cx="15" cy="1" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-1-0-agent" cx="1" cy="4.5" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-1-1-agent" cx="4.5" cy="4.5" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-1-2-agent" cx="8" cy="4.5" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-1-3-agent" cx="11.5" cy="4.5" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-1-4-agent" cx="15" cy="4.5" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-2-0-agent" cx="1" cy="8" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-2-1-agent" cx="4.5" cy="8" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-2-2-agent" cx="8" cy="8" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-2-3-agent" cx="11.5" cy="8" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-2-4-agent" cx="15" cy="8" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-3-0-agent" cx="1" cy="11.5" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-3-1-agent" cx="4.5" cy="11.5" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-3-2-agent" cx="8" cy="11.5" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-3-3-agent" cx="11.5" cy="11.5" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-3-4-agent" cx="15" cy="11.5" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-4-0-agent" cx="1" cy="15" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-4-1-agent" cx="4.5" cy="15" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-4-2-agent" cx="8" cy="15" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-4-3-agent" cx="11.5" cy="15" r="1" fill="#e4e5e9" opacity="0.3"></circle><circle class="grid-dot-4-4-agent" cx="15" cy="15" r="1" fill="#e4e5e9" opacity="0.3"></circle></svg><span class="sc-d5151d0-0 lkJmdy">Thinking..</span></div></div></div></div></div></div></div><div class="Build_cmdkContainer__hLqDY page_fixedGlowBgLeft__Hda7A hide-mobile" style="--bg-offset-y:0px"><div class="Grain_grain__0LR5u" style="inset:1px"></div><div tabindex="-1" class="Build_cmdk__gSfBd" cmdk-root=""><label cmdk-label="" for="radix-_R_lphbinpfcqlbH2_" id="radix-_R_lphbinpfcqlbH1_" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0">Agents Command Menu</label><div style="position:relative"><input class="Build_input__VaDqi" placeholder="Assign to…" cmdk-input="" autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-controls="radix-_R_lphbinpfcqlb_" aria-labelledby="radix-_R_lphbinpfcqlbH1_" id="radix-_R_lphbinpfcqlbH2_" type="text" value=""><span class="Blink_root__0CSDl Build_blink__E_pDa"></span></div><div class="Build_listContainer__e3Qk6"><div class="Build_list__ryOlg" data-custom-scrollbar="" cmdk-list="" role="listbox" tabindex="-1" aria-label="Suggestions" id="radix-_R_lphbinpfcqlb
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 6: Hero
- **Confidence:** 35%
- **Tag:** section
- **Classes:** `PageSection_root__kFVv1 PageSection_rootHomepage__2x22W`
- **Size:** full viewport height
- **Padding:** 96px 0px 128px
- **Headings:** H2: "Review PRs and agent output"
- **CTAs:** 4.0Diffs→, Linear
- **Media:** 1 image(s), 2 SVG(s)
- **Fixed elements:** 1
- **Animations:**
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.page_container__YSA5u: transition: all
  - `div`.page_panel__h_tIJ: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.DiffsIllustration_codeSectionDesktop__a2wQz: transition: all
  - `div`.DiffsIllustration_codeSection__bDM7e: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.page_glow__3Lj5a: transition: all; transform: matrix(1, 0, 0, 1, -200, -200)
  - `div`.utils_inset__Xhl3T: transition: all
  - `div`.utils_inset__Xhl3T: transition: all
  - `div`.DiffsIllustration_header__GmHus: transition: all
  - `p`.sc-d5151d0-0: transition: all
  - `h2`.sc-d5151d0-0: transition: all
  - `div`.PageSection_actionWrapper__SpZEC: transition: all
  - `span`.sc-d5151d0-0: transition: all
  - `div`.ThemeSwitcher_wrapper__rvqqJ: transition: all; transform: matrix(1, 0, 0, 1, 0, -16)
  - `a`.Link_root__cNtak: transition: all
  - `div`.PageSection_action__7OSHK: transition: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - `svg`: transition: all
  - `div`.show-mobile: transition: all
  - `div`.Bleed_root__EzNZN: transition: all
  - `div`.Spacer_root__uoSvA: transition: all
  - `img`.Image_root__UkRqc: transition: all
  - `div`.Spacer_root__uoSvA: transition: all
  - `div`.DiffsIllustration_codeSectionMobile__FqfrJ: transition: all
  - `div`.DiffsIllustration_codeColumnMobile__i7BdT: transition: all

### Element Style Blueprint

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "kinetic-ios/src/screens/Home/HomeScreen.tsxkinetic-ios/src/HomeScreen.tsxLinearimport React from 'react'import { View, ActivityIndicator } from 'react"

- **`<div>`** .page_container__YSA5u.DiffsIllustration_reviewsContainer__W86nX
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 22px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1344px | padding: 8px | opacity: 1
  - anim: all
  - text: "kinetic-ios/src/screens/Home/HomeScreen.tsxkinetic-ios/src/HomeScreen.tsxLinearimport React from 'react'import { View, ActivityIndicator } from 'react"

- **`<div>`** .page_panel__h_tIJ
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(15, 16, 17) | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | shadow: rgb(35, 37, 42) 0px 0px 0px 1px inset | display: block | width: 1326px | opacity: 1
  - anim: all
  - text: "kinetic-ios/src/screens/Home/HomeScreen.tsxkinetic-ios/src/HomeScreen.tsxLinearimport React from 'react'import { View, ActivityIndicator } from 'react"

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | display: block | width: 1324px | opacity: 0.6
  - anim: all

- **`<div>`** .DiffsIllustration_codeSectionDesktop__a2wQz
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1326px | opacity: 1
  - anim: all
  - text: "import React from 'react'import { View, ActivityIndicator } from 'react-native'import { useVehicleState } from '@hooks/useVehicleState'import { Dashbo"

- **`<div>`** .DiffsIllustration_codeSection__bDM7e
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | display: grid | width: 1326px | opacity: 1
  - anim: all
  - text: "import React from 'react'import { View, ActivityIndicator } from 'react-native'import { useVehicleState } from '@hooks/useVehicleState'import { Dashbo"

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Review PRs and agent outputUnderstand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge — all with"

- **`<div>`** .page_glow__3Lj5a
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 400px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -200, -200)

- **`<div>`** .utils_inset__Xhl3T.utils_insetLarge__6UCke
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 674px | padding: 0px 32px | margin: 0px 0px 0px -2px | opacity: 1
  - anim: all
  - text: "Review PRs and agent output"

- **`<div>`** .utils_inset__Xhl3T.PageSection_descriptionContainer__cUxgQ
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 672px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "Understand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge — all within Linear.4.0Diffs→"

- **`<div>`** .DiffsIllustration_header__GmHus
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 1326px | padding: 24px | opacity: 1
  - anim: all
  - text: "kinetic-ios/src/screens/Home/HomeScreen.tsxkinetic-ios/src/HomeScreen.tsxLinear"

- **`<p>`** .sc-d5151d0-0.eFpKkm
  - font: 24px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | lh: 31.92px | ls: -0.288px | text-align: start | border: 0px none rgb(208, 214, 224) | display: block | width: 566.438px | opacity: 1
  - anim: all
  - text: "Understand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge — all within Linear."

- **`<h2>`** .sc-d5151d0-0.bHseLi
  - font: 48px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 48px | ls: -1.056px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 541.688px | opacity: 1
  - anim: all
  - text: "Review PRs and agent output"

- **`<div>`** .PageSection_actionWrapper__SpZEC
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 608px | margin: 48px 0px 0px | opacity: 1
  - anim: all
  - text: "4.0Diffs→"

- **`<span>`** .sc-d5151d0-0.gSpjlA
  - font: 14px 400 "Berkeley Mono", ui-monospace, "SF Mono", Menlo, monospace | color: rgb(98, 102, 109) | lh: 21px | text-align: start | border: 0px none rgb(98, 102, 109) | display: block | width: 361.203px | opacity: 1
  - anim: all
  - text: "kinetic-ios/src/screens/Home/HomeScreen.tsxkinetic-ios/src/HomeScreen.tsx"

- **`<div>`** .ThemeSwitcher_wrapper__rvqqJ
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 82.6719px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, 0, -16)
  - text: "Linear"

- **`<a>`** .Link_root__cNtak
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: inline-block | width: 86.6719px | opacity: 1
  - anim: all
  - href: https://linear.app/diffs
  - text: "4.0Diffs→"

- **`<div>`** .PageSection_action__7OSHK.Flex_root__DOQCW
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: inline-block | width: 86.6719px | opacity: 1
  - anim: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - text: "4.0Diffs→"

- **`<svg>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 16px | opacity: 1
  - anim: all

- **`<div>`** .show-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | opacity: 1
  - anim: all

- **`<div>`** .Bleed_root__EzNZN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | margin: 0px -720px | opacity: 1
  - anim: all

- **`<div>`** .Spacer_root__uoSvA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1px | margin: 11px 0px 0px -1px | opacity: 1
  - anim: all

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | border: 0px none rgba(0, 0, 0, 0) | display: inline | width: 100% | opacity: 1
  - anim: all
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c16152f3-a36c-468e-89ae-f87c2f244d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

- **`<div>`** .Spacer_root__uoSvA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1px | margin: -25px 0px 0px -1px | opacity: 1
  - anim: all

- **`<div>`** .DiffsIllustration_codeSectionMobile__FqfrJ
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | opacity: 1
  - anim: all
  - text: "export const CodeReview = () => { <Diff.Provider> <Slow /> <Fragmented /> <HumanOnly /> <Frictionless /> <Integrated /> <AgentReady /> </Diff.Provider"

- **`<div>`** .DiffsIllustration_codeColumnMobile__i7BdT
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | padding: 16px 0px | opacity: 1
  - anim: all
  - text: "export const CodeReview = () => { <Diff.Provider> <Slow /> <Fragmented /> <HumanOnly /> <Frictionless /> <Integrated /> <AgentReady /> </Diff.Provider"

### HTML Structure

```html
<section class="PageSection_root__kFVv1 PageSection_rootHomepage__2x22W"><div class="PageSection_header__3JdVh"><div class="utils_inset__Xhl3T utils_insetLarge__6UCke PageSection_titleContainer__jqqcc"><h2 style="max-width:18ch" class="sc-d5151d0-0 bHseLi">Review PRs and agent output</h2></div><div class="utils_inset__Xhl3T PageSection_descriptionContainer__cUxgQ"><p class="sc-d5151d0-0 eFpKkm PageSection_descriptionText__APAbi">Understand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge — all within Linear.</p><div class="PageSection_actionWrapper__SpZEC"><a style="display:inline-block" class="Link_root__cNtak" rel="noopener" href="/diffs"><div class="PageSection_action__7OSHK Flex_root__DOQCW Flex_align-center__oXK9F"><span class="sc-d5151d0-0 cRemay utils_slashedZero__RsR0l">4.0</span><span style="display:inline-block;margin-left:12px" class="sc-d5151d0-0 dhJTq">Diffs</span><span style="display:inline-block;margin-left:6px" class="sc-d5151d0-0 cpxJeY">→</span></div></a></div></div></div><div class="PageSection_illustration__P1Yb9"><div class="show-mobile"><div class="Bleed_root__EzNZN"><div class="Spacer_root__uoSvA" style="--height:12px"></div><img alt="" data-nosnippet="true" data-loaded="false" loading="eager" width="390" height="312" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent;width:100%" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c16152f3-a36c-468e-89ae-f87c2f244d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"><div class="Spacer_root__uoSvA" style="--height:-24px"></div></div></div><div class="page_container__YSA5u DiffsIllustration_reviewsContainer__W86nX hide-mobile"><div class="page_panel__h_tIJ" style="--token-comment:#8B93A1;--token-string:#ffdf9f;--token-constant:#8FA6FF;--token-variable:#f7bf8b;--token-keyword:#F79CE0;--token-entity:#83dcdc;--token-punctuation:#D2D7DE;--token-text:#E2E4E7;--diff-old-color:#F34E52;--diff-old-bg:rgba(243, 78, 82, 0.1);--diff-new-color:#27A644;--diff-new-bg:rgba(39, 166, 68, 0.07)"><div class="DiffsIllustration_header__GmHus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="var(--color-text-quaternary)" fill-rule="evenodd" d="M8.212.413a2.5 2.5 0 0 1 1.52.72l3.536 3.534A2.5 2.5 0 0 1 14 6.435V11.9l-.013.256a2.5 2.5 0 0 1-2.231 2.231l-.256.013h-7l-.256-.013a2.5 2.5 0 0 1-2.231-2.231L2 11.9v-9A2.5 2.5 0 0 1 4.244.413L4.5.4h3.465zM4.5 1.9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V6.435q0-.017-.003-.035H8.75A1.75 1.75 0 0 1 7 4.65V1.9zm4 2.75c0 .138.112.25.25.25h2.629L8.672 2.193a1 1 0 0 0-.172-.137z" clip-rule="evenodd"></path></svg><span class="sc-d5151d0-0 gSpjlA"><span class="hide-mobile">kinetic-ios/src/screens/Home/HomeScreen.tsx</span><span class="show-mobile">kinetic-ios/src/HomeScreen.tsx</span></span><div class="ThemeSwitcher_wrapper__rvqqJ"><button type="button" tabindex="0" id="base-ui-_R_j9nbinpfcqlb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" class="ThemeSwitcher_trigger__GwuWs Button_root__Stmhv Button_variant-ghost__a06I_ Button_size-small__sjtMt Button_variant__1FJO9"><span>Linear</span><span aria-hidden="true" class="Select_chevron__5cB3T"><svg width="12" height="12" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:#9c9da1" fill="#9c9da1"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.35355 4.56051C8.15829 4.36525 7.84171 4.36525 7.64645 4.56051L5.35355 6.8534C5.15829 7.04866 4.84171 7.04866 4.64645 6.8534C4.45118 6.65814 4.45118 6.34156 4.64645 6.1463L6.93934 3.8534C7.52513 3.26762 8.47487 3.26762 9.06066 3.8534L11.3536 6.1463C11.5488 6.34156 11.5488 6.65814 11.3536 6.8534C11.1583 7.04866 10.8417 7.04866 10.6464 6.8534L8.35355 4.56051Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.64645 11.4392C7.84171 11.6344 8.15829 11.6344 8.35355 11.4392L10.6464 9.14629C10.8417 8.95103 11.1583 8.95103 11.3536 9.14629C11.5488 9.34156 11.5488 9.65814 11.3536 9.8534L9.06066 12.1463C8.47487 12.7321 7.52513 12.7321 6.93934 12.1463L4.64645 9.8534C4.45118 9.65814 4.45118 9.34156 4.64645 9.14629C4.84171 8.95103 5.15829 8.95103 5.35355 9.14629L7.64645 11.4392Z"></path></svg></span></button><input style="clip-path:inset(50%);overflow:hidden;white-space:nowrap;border:0;padding:0;width:1px;height:1px;margin:-1px;position:fixed;top:0;left:0" tabindex="-1" aria-hidden="true" value="0"></div></div><div class="page_glow__3Lj5a"></div><div class="Grain_grain__0LR5u Grain_grainSubtle__LzX_q" style="inset:1px"></div><div class="DiffsIllustration_codeSectionDesktop__a2wQz" tabindex="0" role="group" aria-label="Editable code diff — press Space to edit"><div class="DiffsIllustration_codeSection__bDM7e"><div class="DiffsIllustration_codeColumn__UoLFE"><pre><code><span class="line "><span class="code-diff_keyword__8MRkf">import</span><span class="code-diff_text__j1V9d"> </span><span class="code-diff_variable__eIh6w">React</span><span class="code-diff_text__j1V9d"> </span><span class="code-diff_keyword__8MRkf">from</span><span class="code-diff_text__j1V9d"> </span><span class="code-diff_text__j1V9d">'</span><span class="code-diff_stringLiteral__Y_SVf">react</span><span class="code-diff_text__j1V9d">'</span></span><span class="line "><span class="code-diff_keyword__8MRkf">import</span><span class="code-diff_text__j1V9d"> { </span><span class="code-diff_variable__eIh6w">View</span><span class="code-diff_text__j1V9d">, </span><span class="code-diff_variable__eIh6w">ActivityIndicator</span><span class="code-diff_text__j1V9d"> } </span><span class="code-diff_keyword__8MRkf">from</span><span class="code-diff_text__j1V9d"> </span><span class="code-diff_text__j1V9d">'</span><span class="code-diff_stringLiteral__Y_SVf">react-native</span><span class="code-diff_text__j1V9d">'</span></span><span class="line diff-old"><span class="code-diff_keyword__8MRkf">import</span><span class="code-diff_text__j1V9d"> { </span><span class="code-diff_variable__eIh6w">useVehicleState</span><span class="code-diff_text__j1V9d"> } </span><span class="code-diff_keyword__8MRkf">from</span><span class="code-diff_text__j1V9d"> </span><span class="code-diff_text__j1V9d">'</span><span class="code-diff_stringLiteral__Y_SVf">@hooks/useVehicleState</span><span class="code-diff_text__j1V9d">'</span></span><span class="line "><span class="code-diff_keyword__8MRkf">import</span><span class="code-diff_text__j1V9d"> { </span><span class="code-diff_variable__eIh6w">Dashboard</span><span class="code-diff_text__j1V9d"> } </span><span class="code-diff_keyword__8MRkf">from</span><span class="code-diff_text__j1V9d"> </span><span class="code-diff_text__j1V9d">'</span><span class="code-diff_stringLiteral__Y_SVf">@components/Dashboard</span><span class="code-diff_text__j1V9d">'</span></span><span class="line "></span><span class="line "><span class="code-diff_keyword__8MRkf">export</span><span class="code-diff_text__j1V9d"> </span><span class="code-diff_keyword__8MRkf">const</span><span class="code-diff_text__j1V9d"> </span><span class="code-diff_entity__SfPQT">HomeScreen</span><span class="code-diff_text__j1V9d"> </span><span class="code-diff_keyword__8MRkf">=</span><span class="code-diff_text__j1V9d"> () </span><span class="code-diff_keyword__8MRkf">=&gt;</span><span class="code-diff_text__j1V9d"> {</span></span><span class="line diff-old"><span class="code-diff_text__j1V9d">  </span><span class="code-diff_keyword__8MRkf">const</span><span class="code-diff_text__j1V9d"> { </span><span class="code-diff_variable__eIh6w">vehicleState</span><span class="code-diff_text__j1V9d">, </span><span class="code-diff_variable__eIh6w code-diff_charRemoved__2MWEY">isFullySynced</span><span class="code-diff_text__j1V9d"> } </span><span class="code-diff_keyword__8MRkf">=</span><span class="co
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 7: Showcase
- **Confidence:** 40%
- **Tag:** section
- **Classes:** `PageSection_root__kFVv1 PageSection_rootHomepage__2x22W`
- **Size:** full viewport height
- **Padding:** 96px 0px 128px
- **Headings:** H2: "Understand progress at scale"
- **CTAs:** 5.0Monitor→, Listen, 1.0×, 5.1Pulse +, 5.2Insights +
- **Media:** 1 image(s), 9 SVG(s)
- **Fixed elements:** 1
- **Animations:**
  - `div`.page_container__YSA5u: transition: all
  - `div`.page_panel__h_tIJ: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.hide-mobile: transition: all
  - `div`.Monitor_cell__cSnld: transition: all
  - `div`.Monitor_cell__cSnld: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.Monitor_pulse__Nw2jL: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`: transition: all
  - `div`.page_glow__3Lj5a: transition: all; transform: matrix(1, 0, 0, 1, -200, -200)
  - `div`.Monitor_pulseGlow__I2zpr: transition: all; transform: matrix(1, 0, 0, 1, 200, -200)
  - `div`.PageSection_footer__e0E0p: transition: all
  - `div`.utils_inset__Xhl3T: transition: all
  - `div`.utils_inset__Xhl3T: transition: all
  - `div`: transition: all
  - `div`: transition: all
  - `div`.utils_inset__Xhl3T: transition: all
  - `p`.sc-d5151d0-0: transition: all
  - `h2`.sc-d5151d0-0: transition: all
  - `div`.Pillar_ingredients__QEm_W: transition: all
  - `div`.PageSection_actionWrapper__SpZEC: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all
  - `div`.Pillar_ingredient__V_EfN: transition: all
  - `span`.Pillar_ingredient__V_EfN: transition: all
  - `button`.Pillar_ingredientButton__5T1Jt: transition: all

### Element Style Blueprint

- **`<div>`** .page_container__YSA5u.Monitor_container__N0_Qy
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 22px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1458px | padding: 8px | margin: 0px -57px | opacity: 1
  - anim: all
  - text: "Issue count by created date181614121086420Feb 2025May 2025Aug 2025Nov 2025Cycle time by agentCursorCodexNo Agent"

- **`<div>`** .page_panel__h_tIJ.Monitor_grid__a9Cqx
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(15, 16, 17) | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | shadow: rgb(35, 37, 42) 0px 0px 0px 1px inset | display: grid | width: 1440px | padding: 24px 32px | opacity: 1
  - anim: all
  - text: "Issue count by created date181614121086420Feb 2025May 2025Aug 2025Nov 2025Cycle time by agentCursorCodexNo Agent"

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | opacity: 0.6
  - anim: all

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Issue count by created date181614121086420Feb 2025May 2025Aug 2025Nov 2025Cycle time by agentCursorCodexNo AgentWeekly Pulse for May 30Listen1.0×Proje"

- **`<div>`** .hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Issue count by created date181614121086420Feb 2025May 2025Aug 2025Nov 2025Cycle time by agentCursorCodexNo AgentWeekly Pulse for May 30Listen1.0×Proje"

- **`<div>`** .Monitor_cell__cSnld
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 20px | border: 1px solid rgb(35, 37, 42) | display: flex | width: 680px | opacity: 1
  - anim: all
  - text: "Issue count by created date181614121086420Feb 2025May 2025Aug 2025Nov 2025"

- **`<div>`** .Monitor_cell__cSnld
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 20px | border: 1px solid rgb(35, 37, 42) | display: flex | width: 680px | opacity: 1
  - anim: all
  - text: "Cycle time by agentCursorCodexNo Agent"

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Understand progress at scaleTake the guesswork out of product development with project updates, analytics, and dashboards that surface what needs your"

- **`<div>`** .Monitor_pulse__Nw2jL.page_fixedGlowBgRight__uXUH5
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 0px none rgb(247, 248, 248) | shadow: rgba(8, 9, 10, 0.6) 0px 4px 32px 0px | display: block | width: 520px | padding: 28px 24px 40px | opacity: 1
  - anim: all
  - text: "Weekly Pulse for May 30Listen1.0×ProjectsUI refreshAt riskBy romain · 1 day agoiOS implementation is mostly complete, but Android updates are still wo"

- **`<div>`** .Grain_grain__0LR5u
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 0px none rgb(247, 248, 248) | display: block | width: 518px | opacity: 0.9
  - anim: all

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 472px | opacity: 1
  - anim: all
  - text: "ProjectsUI refreshAt riskBy romain · 1 day agoiOS implementation is mostly complete, but Android updates are still work in progressRisk of timeline sl"

- **`<div>`** .page_glow__3Lj5a.Monitor_glow__U_50_
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 400px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -200, -200)

- **`<div>`** .Monitor_pulseGlow__I2zpr.page_glow__3Lj5a
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 400px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, 200, -200)

- **`<div>`** .PageSection_footer__e0E0p.hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | opacity: 1
  - anim: all
  - text: "5.1Pulse +5.2Insights +5.3Dashboards +"

- **`<div>`** .utils_inset__Xhl3T.utils_insetLarge__6UCke
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 674px | padding: 0px 32px | margin: 0px 0px 0px -2px | opacity: 1
  - anim: all
  - text: "Understand progress at scale"

- **`<div>`** .utils_inset__Xhl3T.PageSection_descriptionContainer__cUxgQ
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 672px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "Take the guesswork out of product development with project updates, analytics, and dashboards that surface what needs your attention.5.0Monitor→"

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 472px | opacity: 1
  - anim: all
  - text: "UI refreshAt riskBy romain · 1 day agoiOS implementation is mostly complete, but Android updates are still work in progressRisk of timeline slip if re"

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 472px | opacity: 1
  - anim: all
  - text: "Tokyo launchOn trackBy julian · 3 hours agoLocalization efforts have been completedEverything else on track for launch in early September"

- **`<div>`** .utils_inset__Xhl3T.PageSection_footerContent__DRk40
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 672px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "5.1Pulse +5.2Insights +5.3Dashboards +"

- **`<p>`** .sc-d5151d0-0.eFpKkm
  - font: 24px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | lh: 31.92px | ls: -0.288px | text-align: start | border: 0px none rgb(208, 214, 224) | display: block | width: 566.438px | opacity: 1
  - anim: all
  - text: "Take the guesswork out of product development with project updates, analytics, and dashboards that surface what needs your attention."

- **`<h2>`** .sc-d5151d0-0.bHseLi
  - font: 48px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 48px | ls: -1.056px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 541.688px | opacity: 1
  - anim: all
  - text: "Understand progress at scale"

- **`<div>`** .Pillar_ingredients__QEm_W
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 608px | opacity: 1
  - anim: all
  - text: "5.1Pulse +5.2Insights +5.3Dashboards +"

- **`<div>`** .PageSection_actionWrapper__SpZEC
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 608px | margin: 48px 0px 0px | opacity: 1
  - anim: all
  - text: "5.0Monitor→"

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 472px | opacity: 1
  - anim: all
  - text: "Weekly Pulse for May 30Listen1.0×"

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 472px | opacity: 1
  - anim: all
  - text: "Projects"

- **`<div>`** .Pillar_ingredient__V_EfN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 304px | opacity: 1
  - anim: all
  - text: "5.1Pulse +"

- **`<div>`** .Pillar_ingredient__V_EfN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 304px | opacity: 1
  - anim: all
  - text: "5.3Dashboards +"

- **`<div>`** .Pillar_ingredient__V_EfN.Pillar_unevenIngredient__Ub7b0
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 280px | padding: 0px 0px 0px 32px | margin: 0px 0px 0px 24px | opacity: 1
  - anim: all
  - text: "5.2Insights +"

- **`<span>`** .Pillar_ingredient__V_EfN.Pillar_unevenIngredient__Ub7b0
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 280px | padding: 0px 0px 0px 32px | margin: 0px 0px 0px 24px | opacity: 1
  - anim: all

- **`<button>`** .Pillar_ingredientButton__5T1Jt
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(255, 255, 255) | text-align: center | border: 0px none rgb(255, 255, 255) | display: block | width: 137.906px | opacity: 1
  - anim: all
  - text: "5.3Dashboards +"

### HTML Structure

```html
<section class="PageSection_root__kFVv1 PageSection_rootHomepage__2x22W"><div class="PageSection_header__3JdVh"><div class="utils_inset__Xhl3T utils_insetLarge__6UCke PageSection_titleContainer__jqqcc"><h2 style="max-width:18ch" class="sc-d5151d0-0 bHseLi">Understand 
progress at scale</h2></div><div class="utils_inset__Xhl3T PageSection_descriptionContainer__cUxgQ"><p class="sc-d5151d0-0 eFpKkm PageSection_descriptionText__APAbi">Take the guesswork out of product development with project updates, analytics, and dashboards that surface what needs your attention.</p><div class="PageSection_actionWrapper__SpZEC"><a style="display:inline-block" class="Link_root__cNtak" rel="noopener" href="/monitor"><div class="PageSection_action__7OSHK Flex_root__DOQCW Flex_align-center__oXK9F"><span class="sc-d5151d0-0 cRemay utils_slashedZero__RsR0l">5.0</span><span style="display:inline-block;margin-left:12px" class="sc-d5151d0-0 dhJTq">Monitor</span><span style="display:inline-block;margin-left:6px" class="sc-d5151d0-0 cpxJeY">→</span></div></a></div></div></div><div class="PageSection_illustration__P1Yb9"><div class="show-mobile"><div class="Bleed_root__EzNZN"><div class="Spacer_root__uoSvA" style="--height:12px"></div><img alt="" data-nosnippet="true" data-loaded="false" loading="eager" width="390" height="312" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent;width:100%" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/33ec1482-c0b8-402e-d67e-c4902a71ee00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"><div class="Spacer_root__uoSvA" style="--height:-24px"></div></div></div><div class="hide-mobile" style="position:relative"><div class="page_container__YSA5u Monitor_container__N0_Qy"><div class="page_panel__h_tIJ Monitor_grid__a9Cqx"><div class="Grain_grain__0LR5u Grain_grainSubtle__LzX_q" style="top:1px"></div><div class="Monitor_cell__cSnld"><header class="Monitor_header__guWRp"><span class="sc-d5151d0-0 LTSrg">Issue count by created date</span></header><div class="Monitor_issueCountGraph__r_XGb"><div class="Monitor_bars__ihyvG"><div class="Monitor_bar__uVVgH"><div class="Monitor_barTop__qvCIR" style="height:24px"></div><div class="Monitor_barBottom__VYBrC" style="height:222px"></div></div><div class="Monitor_bar__uVVgH"><div class="Monitor_barTop__qvCIR" style="height:65px"></div><div class="Monitor_barBottom__VYBrC" style="height:228px"></div></div><div class="Monitor_bar__uVVgH"><div class="Monitor_barTop__qvCIR" style="height:45px"></div><div class="Monitor_barBottom__VYBrC" style="height:160px"></div></div></div><div class="Monitor_issueCountGraphBar__ldTY2"><div class="Monitor_issueGraphLine__TO05l"></div><span style="font-size:12px" class="sc-d5151d0-0 eWjVBF">18</span></div><div class="Monitor_issueCountGraphBar__ldTY2"><div class="Monitor_issueGraphLine__TO05l"></div><span style="font-size:12px" class="sc-d5151d0-0 eWjVBF">16</span></div><div class="Monitor_issueCountGraphBar__ldTY2"><div class="Monitor_issueGraphLine__TO05l"></div><span style="font-size:12px" class="sc-d5151d0-0 eWjVBF">14</span></div><div class="Monitor_issueCountGraphBar__ldTY2"><div class="Monitor_issueGraphLine__TO05l"></div><span style="font-size:12px" class="sc-d5151d0-0 eWjVBF">12</span></div><div class="Monitor_issueCountGraphBar__ldTY2"><div class="Monitor_issueGraphLine__TO05l"></div><span style="font-size:12px" class="sc-d5151d0-0 eWjVBF">10</span></div><div class="Monitor_issueCountGraphBar__ldTY2"><div class="Monitor_issueGraphLine__TO05l"></div><span style="font-size:12px" class="sc-d5151d0-0 eWjVBF">8</span></div><div class="Monitor_issueCountGraphBar__ldTY2"><div class="Monitor_issueGraphLine__TO05l"></div><span style="font-size:12px" class="sc-d5151d0-0 eWjVBF">6</span></div><div class="Monitor_issueCountGraphBar__ldTY2"><div class="Monitor_issueGraphLine__TO05l"></div><span style="font-size:12px" class="sc-d5151d0-0 eWjVBF">4</span></div><div class="Monitor_issueCountGraphBar__ldTY2"><div class="Monitor_issueGraphLine__TO05l"></div><span style="font-size:12px" class="sc-d5151d0-0 eWjVBF">2</span></div><div class="Monitor_issueCountGraphBar__ldTY2"><div class="Monitor_issueGraphLineSolid__LIsnp"></div><span style="font-size:12px" class="sc-d5151d0-0 eWjVBF">0</span></div></div><div class="Monitor_issueCountXAxis__iuW1T Flex_root__DOQCW Flex_justify-space-between__Txsv7"><span style="font-size:12px;transform:translateY(-4px)" class="sc-d5151d0-0 kgndDe">Feb 2025</span><span style="font-size:12px;transform:translateY(-4px)" class="sc-d5151d0-0 kgndDe">May 2025</span><span style="font-size:12px;transform:translateY(-4px)" class="sc-d5151d0-0 kgndDe">Aug 2025</span><span style="font-size:12px;transform:translateY(-4px)" class="sc-d5151d0-0 kgndDe">Nov 2025</span></div></div><div class="Monitor_cell__cSnld"><header class="Monitor_header__guWRp"><span class="sc-d5151d0-0 LTSrg">Cycle time by agent</span></header><div class="Monitor_agentChartWrapper__lpGzd"><div class="Monitor_agentGridLines__gRmd0"><div class="Monitor_agentGridLine___uxqe"></div><div class="Monitor_agentGridLine___uxqe"></div><div class="Monitor_agentGridLine___uxqe"></div><div class="Monitor_agentGridLine___uxqe"></div></div><div class="Monitor_agentVerticalLines__Nyi0p"><div class="Monitor_agentVerticalLine__mYDco"></div><div class="Monitor_agentVerticalLine__mYDco"></div></div><div class="Monitor_orangeLine__N93N8"><svg xmlns="http://www.w3.org/2000/svg" width="676" height="75" fill="none" viewBox="0 0 676 75"><path stroke="#FF7236" stroke-width="0.5" d="M0 .25h212.038a8 8 0 0 1 6.363 3.152l19.198 25.196a8 8 0 0 0 6.363 3.152H435.33a8 8 0 0 1 6.966 4.066l19.408 34.368a8 8 0 0 0 6.966 4.066H676"></path></svg></div><div class="Monitor_purpleLine__qZHgB"><svg xmlns="http://www.w3.org/2000/svg" width="676" height="43" fill="none" viewBox="0 0 676 43"><path stroke="#5E6AD2" stroke-width="0.5" d="M0 28.75h212.32c2.359 0 4.557-1.042 6.077-2.847l19.206-22.806A8 8 0 0 1 243.722.25H435.33a8 8 0 0 1 6.966 4.066l19.408 34.368a8 8 0 0 0 6.966 4.066H676"></path></svg></div><div class="Monitor_agentGrid__zTueg"><div class="Flex_root__DOQCW Flex_column__eg2kV"><div class="Monitor_dots__vtKCx"><svg xmlns="http://www.w3.org/2000/svg" width="59" height="381" fill="none" viewBox="0 0 59 381"><circle cx="51" cy="358" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="8" cy="332" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="25" cy="251" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="31" cy="273" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="18" cy="263" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="41" cy="143" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="46" cy="265" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="25" cy="279" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="21" cy="295" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="27" cy="250" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="17" cy="268" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="5" cy="212" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="31" cy="315" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="35" cy="331" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="46" cy="317" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="52" cy="260" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="45" cy="249" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="45" cy="224" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="31" cy="211" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="35" cy="309" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="10" cy="283" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="17" cy="212" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx="22" cy="281" r="3.5" fill="#4354B8" stroke="#08090A"></circle><circle cx=
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 8: Team
- **Confidence:** 20%
- **Tag:** section
- **Classes:** `CustomerQuotes_container__Grlfj hide-laptop`
- **Size:** 564px height
- **CTAs:** Customer stories→
- **Media:** 3 SVG(s)
- **Animations:**
  - `svg`.sx-13wgh6h: transition: fill 0.15s; transform: matrix(2.5, 0, 0, 2.5, 0, 0)
  - `div`.CustomerQuotes_customerCards__Mmq26: transition: all
  - `a`.CustomerQuotes_customerCard__51MqY: transition: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - `div`.CustomerQuotes_primaryLogo__IeJLS: transition: all; transform: matrix(1, 0, 0, 1, 192, -240)
  - `a`.CustomerQuotes_customerCard__51MqY: transition: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - `p`.sc-d5151d0-0: transition: all
  - `p`.sc-d5151d0-0: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `div`.CustomerQuotes_footer__Eq55g: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `p`.sc-d5151d0-0: transition: all
  - `div`.CustomerQuotes_authorInfoDesktop__0fP9Y: transition: all
  - `span`.CustomerQuotes_logoDesktop___bvwA: transition: all
  - `span`.CustomerQuotes_logoDesktop___bvwA: transition: all
  - `svg`.sx-13wgh6h: transition: fill 0.15s
  - `svg`.sx-13wgh6h: transition: fill 0.15s
  - `div`.CustomerQuotes_authorInfoDesktop__0fP9Y: transition: all
  - `span`.sc-d5151d0-0: transition: all
  - `span`.sc-d5151d0-0: transition: all
  - `a`.page_homepageLinkAnchor__GZJlh: transition: all
  - `div`.page_homepageLink__0TNsS: transition: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - `span`.sc-d5151d0-0: transition: all
  - `span`.sc-d5151d0-0: transition: all
  - `span`.sc-d5151d0-0: transition: all
  - `span`.sc-d5151d0-0: transition: all
  - `div`.Spacer_root__uoSvA: transition: all

### Element Style Blueprint

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: inline | width: 480px | opacity: 1
  - anim: fill 0.15s | matrix(2.5, 0, 0, 2.5, 0, 0)

- **`<div>`** .CustomerQuotes_customerCards__Mmq26
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 1344px | padding: 12px 12px 0px | opacity: 1
  - anim: all
  - text: "You just have to use it and you will see, you will just feel it.Gabriel PealOpenAIOur speed is intense and Linear helps us be action biased.Nik Koblov"

- **`<a>`** .CustomerQuotes_customerCard__51MqY.CustomerQuotes_primary__pnzzy
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 8px | border: 0px none rgb(247, 248, 248) | display: flex | width: 880px | padding: 24px 32px | opacity: 1
  - anim: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - href: https://linear.app/customers/openai
  - text: "You just have to use it and you will see, you will just feel it.Gabriel PealOpenAI"

- **`<div>`** .CustomerQuotes_primaryLogo__IeJLS
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 480px | opacity: 0.2
  - anim: all | matrix(1, 0, 0, 1, 192, -240)

- **`<a>`** .CustomerQuotes_customerCard__51MqY.CustomerQuotes_secondary__25wvu
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(228, 242, 34) | radius: 8px | border: 0px none rgb(247, 248, 248) | display: flex | width: 432px | padding: 24px 32px | opacity: 1
  - anim: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - href: https://linear.app/customers/ramp
  - text: "Our speed is intense and Linear helps us be action biased.Nik KoblovHead of Engineering, Ramp"

- **`<p>`** .sc-d5151d0-0.gACPou
  - font: 32px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(8, 9, 10) | lh: 36px | ls: -0.704px | text-align: start | border: 0px none rgb(8, 9, 10) | display: block | width: 368px | opacity: 1
  - anim: all
  - text: "Our speed is intense and Linear helps us be action biased."

- **`<p>`** .sc-d5151d0-0.gACPou
  - font: 32px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(8, 9, 10) | lh: 36px | ls: -0.704px | text-align: start | border: 0px none rgb(8, 9, 10) | display: block | width: 549.5px | opacity: 1
  - anim: all
  - text: "You just have to use it and you will see, you will just feel it."

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 816px | margin: 318px 0px 0px | opacity: 1
  - anim: all
  - text: "Gabriel PealOpenAI"

- **`<div>`** .CustomerQuotes_footer__Eq55g.hide-laptop
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 1344px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "Linear powers over 33,000 product teams. From ambitious startups to major enterprises.Customer stories→"

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 368px | margin: 282px 0px 0px | opacity: 1
  - anim: all
  - text: "Nik KoblovHead of Engineering, Ramp"

- **`<p>`** .sc-d5151d0-0.dhJTq
  - font: 15px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(138, 143, 152) | lh: 24px | ls: -0.165px | text-align: start | border: 0px none rgb(138, 143, 152) | display: block | width: 611.828px | opacity: 1
  - anim: all
  - text: "Linear powers over 33,000 product teams. From ambitious startups to major enterprises."

- **`<div>`** .CustomerQuotes_authorInfoDesktop__0fP9Y.Flex_root__DOQCW
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | display: flex | width: 195.562px | padding: 0px 0px 0px 18px | margin: 0px 0px 0px 18px | opacity: 1
  - anim: all
  - text: "Nik KoblovHead of Engineering, Ramp"

- **`<span>`** .CustomerQuotes_logoDesktop___bvwA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 64px | margin: -16px | opacity: 1
  - anim: all

- **`<span>`** .CustomerQuotes_logoDesktop___bvwA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 64px | margin: -16px | opacity: 1
  - anim: all

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 64px | opacity: 1
  - anim: fill 0.15s

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 64px | opacity: 1
  - anim: fill 0.15s

- **`<div>`** .CustomerQuotes_authorInfoDesktop__0fP9Y.Flex_root__DOQCW
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | display: flex | width: 97.2344px | padding: 0px 0px 0px 18px | margin: 0px 0px 0px 18px | opacity: 1
  - anim: all
  - text: "Gabriel PealOpenAI"

- **`<span>`** .sc-d5151d0-0.kAqRVy
  - font: 14px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(8, 9, 10) | lh: 21px | ls: -0.182px | text-align: start | border: 0px none rgb(8, 9, 10) | display: block | width: 176.562px | opacity: 1
  - anim: all
  - text: "Nik Koblov"

- **`<span>`** .sc-d5151d0-0.hTQQlf
  - font: 14px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(8, 9, 10) | lh: 21px | ls: -0.182px | text-align: start | border: 0px none rgb(8, 9, 10) | display: block | width: 176.562px | opacity: 0.6
  - anim: all
  - text: "Head of Engineering, Ramp"

- **`<a>`** .page_homepageLinkAnchor__GZJlh.Link_root__cNtak
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 4px | border: 0px none rgb(247, 248, 248) | display: block | width: 137.969px | opacity: 1
  - anim: all
  - href: https://linear.app/customers
  - text: "Customer stories→"

- **`<div>`** .page_homepageLink__0TNsS.Flex_root__DOQCW
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 137.969px | opacity: 1
  - anim: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - text: "Customer stories→"

- **`<span>`** .sc-d5151d0-0.dhJTq
  - font: 15px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(138, 143, 152) | lh: 24px | ls: -0.165px | text-align: start | border: 0px none rgb(138, 143, 152) | display: block | width: 117.844px | opacity: 1
  - anim: all
  - text: "Customer stories"

- **`<span>`** .sc-d5151d0-0.kAqRVy
  - font: 14px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(8, 9, 10) | lh: 21px | ls: -0.182px | text-align: start | border: 0px none rgb(8, 9, 10) | display: block | width: 78.2344px | opacity: 1
  - anim: all
  - text: "Gabriel Peal"

- **`<span>`** .sc-d5151d0-0.hTQQlf
  - font: 14px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(8, 9, 10) | lh: 21px | ls: -0.182px | text-align: start | border: 0px none rgb(8, 9, 10) | display: block | width: 78.2344px | opacity: 0.6
  - anim: all
  - text: "OpenAI"

- **`<span>`** .sc-d5151d0-0.cpxJeY
  - font: 15px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | lh: 24px | ls: -0.165px | text-align: start | border: 0px none rgb(98, 102, 109) | display: block | width: 14.125px | margin: 0px 0px 0px 6px | opacity: 1
  - anim: all

- **`<div>`** .Spacer_root__uoSvA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1px | margin: 47px 0px 0px -1px | opacity: 1
  - anim: all

### HTML Structure

```html
<section class="CustomerQuotes_container__Grlfj hide-laptop" id="customers"><div class="CustomerQuotes_customerCards__Mmq26"><a style="background:linear-gradient(0deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%), linear-gradient(180deg, #b2d5ff 0%, #dfd1ff 100%)" class="CustomerQuotes_customerCard__51MqY CustomerQuotes_primary__pnzzy Link_root__cNtak" rel="noopener" href="/customers/openai"><p class="sc-d5151d0-0 gACPou CustomerQuotes_customerQuote__Rijcu">You just have to use it and you will see, you will just feel it.</p><div class="CustomerQuotes_primaryLogo__IeJLS"><svg width="64" height="64" viewBox="0 0 56 56" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:var(--color-bg-primary)" fill="var(--color-bg-primary)"><path d="m24.404 23.821 7.684-4.469a1.025 1.025 0 0 1 1.102 0l6.061 3.551c.031-.245.031-.49.031-.704 0-3.03-2.327-5.878-6-5.878-.98 0-1.928.215-2.724.674l-5.848 3.367c-.214.123-.306.306-.306.551v2.908Zm13.653 11.327c2.174-.888 3.552-3.031 3.552-5.358 0-2.02-1.133-4.101-2.817-5.081l-5.847-3.367a.557.557 0 0 0-.612 0l-2.51 1.439 7.683 4.469c.368.214.551.52.551.949v6.95Zm-15.459-6.122v-8.878c0-.428.184-.735.551-.949l6.031-3.49c-1.01-.765-2.204-1.194-3.49-1.194-3.398 0-5.908 2.48-5.908 5.756v6.734c0 .245.092.429.306.551l2.51 1.47Zm5.403 3.122 3.597-2.02v-4.286l-3.597-2.02-3.597 2.02v4.286l3.597 2.02Zm2.312 9.306c3.397 0 5.938-2.48 5.938-5.755v-6.735c0-.245-.092-.429-.306-.55l-2.54-1.47v8.877c0 .43-.184.735-.552.95l-6.03 3.49c1.01.765 2.204 1.193 3.49 1.193Zm-7.256-6.826a.557.557 0 0 0 .613 0l2.51-1.44-7.654-4.438c-.367-.214-.55-.52-.55-.949v-6.98a5.769 5.769 0 0 0-3.582 5.358c0 2.02 1.132 4.102 2.816 5.081l5.847 3.368Zm-.336 5.02c.98 0 1.928-.214 2.724-.673l5.847-3.367c.214-.123.306-.306.306-.551v-2.909l-7.684 4.439a1.025 1.025 0 0 1-1.102 0l-6.03-3.49-.001.006c-.03.243-.06.486-.06.729 0 3.214 2.54 5.816 6 5.816Zm7.592 3.643h-.008a7.672 7.672 0 0 1-5.35-2.204 7.28 7.28 0 0 1-2.418.398c-4.102 0-7.653-3.276-7.653-7.654 0-.642.092-1.285.245-1.928-1.653-1.5-2.572-3.581-2.572-5.724 0-3.276 2.204-6.49 5.633-7.378a7.654 7.654 0 0 1 7.5-6.122c2.082 0 3.98.857 5.357 2.204a7.28 7.28 0 0 1 2.419-.398c4.102 0 7.653 3.275 7.653 7.653 0 .642-.092 1.285-.245 1.928 1.651 1.499 2.57 3.577 2.572 5.717v.015c-.004 3.273-2.207 6.483-5.633 7.37a7.654 7.654 0 0 1-7.493 6.123h-.007Z"></path><path fill-rule="evenodd" d="M43.446 29.783v.015c-.004 3.273-2.207 6.483-5.633 7.37a7.654 7.654 0 0 1-7.493 6.123h-.015a7.672 7.672 0 0 1-5.35-2.204 7.28 7.28 0 0 1-2.418.398c-4.102 0-7.653-3.276-7.653-7.654 0-.642.092-1.285.245-1.928-1.653-1.5-2.572-3.581-2.572-5.724 0-3.276 2.204-6.49 5.633-7.378a7.654 7.654 0 0 1 7.5-6.122c2.082 0 3.98.857 5.357 2.204a7.28 7.28 0 0 1 2.419-.398c4.102 0 7.653 3.275 7.653 7.653 0 .642-.092 1.285-.245 1.928 1.651 1.499 2.57 3.577 2.572 5.717Zm-20.389 4.845L17.21 31.26c-1.684-.98-2.816-3.06-2.816-5.081a5.769 5.769 0 0 1 3.581-5.357v6.98c0 .428.184.734.551.948l7.654 4.439-2.51 1.439a.557.557 0 0 1-.613 0Zm-2.97-7.072 2.511 1.47v-8.878c0-.428.184-.735.551-.949l6.031-3.49c-1.01-.765-2.204-1.194-3.49-1.194-3.398 0-5.908 2.48-5.908 5.756v6.734c0 .245.092.429.306.551Zm4.317-6.643v2.908l7.684-4.469a1.025 1.025 0 0 1 1.102 0l6.061 3.551c.031-.245.031-.49.031-.704 0-3.03-2.327-5.878-6-5.878-.98 0-1.928.215-2.724.674l-5.848 3.367c-.214.123-.306.306-.306.551Zm13.653 14.235v-6.95c0-.428-.183-.734-.55-.948l-7.684-4.47 2.51-1.438a.557.557 0 0 1 .612 0l5.847 3.367c1.684.98 2.817 3.061 2.817 5.082 0 2.326-1.378 4.47-3.552 5.357ZM26.823 40.26c1.01.766 2.204 1.194 3.49 1.194 3.397 0 5.938-2.48 5.938-5.755v-6.735c0-.245-.092-.429-.306-.55l-2.54-1.47v8.877c0 .43-.184.735-.552.95l-6.03 3.49ZM28 32.148l-3.597-2.02v-4.286l3.597-2.02 3.597 2.02v4.286l-3.597 2.02Zm-11.28 1.684c0 3.214 2.54 5.816 6 5.816.98 0 1.928-.214 2.724-.673l5.847-3.367c.214-.123.306-.306.306-.551v-2.909l-7.684 4.439a1.025 1.025 0 0 1-1.102 0l-6.03-3.49-.001.006c-.03.243-.06.486-.06.729Z" clip-rule="evenodd"></path></svg></div><div class="Flex_root__DOQCW Flex_align-center__oXK9F" style="margin-top:auto"><span class="CustomerQuotes_logoDesktop___bvwA"><svg width="64" height="64" viewBox="0 0 56 56" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:var(--color-bg-primary)" fill="var(--color-bg-primary)"><path d="m24.404 23.821 7.684-4.469a1.025 1.025 0 0 1 1.102 0l6.061 3.551c.031-.245.031-.49.031-.704 0-3.03-2.327-5.878-6-5.878-.98 0-1.928.215-2.724.674l-5.848 3.367c-.214.123-.306.306-.306.551v2.908Zm13.653 11.327c2.174-.888 3.552-3.031 3.552-5.358 0-2.02-1.133-4.101-2.817-5.081l-5.847-3.367a.557.557 0 0 0-.612 0l-2.51 1.439 7.683 4.469c.368.214.551.52.551.949v6.95Zm-15.459-6.122v-8.878c0-.428.184-.735.551-.949l6.031-3.49c-1.01-.765-2.204-1.194-3.49-1.194-3.398 0-5.908 2.48-5.908 5.756v6.734c0 .245.092.429.306.551l2.51 1.47Zm5.403 3.122 3.597-2.02v-4.286l-3.597-2.02-3.597 2.02v4.286l3.597 2.02Zm2.312 9.306c3.397 0 5.938-2.48 5.938-5.755v-6.735c0-.245-.092-.429-.306-.55l-2.54-1.47v8.877c0 .43-.184.735-.552.95l-6.03 3.49c1.01.765 2.204 1.193 3.49 1.193Zm-7.256-6.826a.557.557 0 0 0 .613 0l2.51-1.44-7.654-4.438c-.367-.214-.55-.52-.55-.949v-6.98a5.769 5.769 0 0 0-3.582 5.358c0 2.02 1.132 4.102 2.816 5.081l5.847 3.368Zm-.336 5.02c.98 0 1.928-.214 2.724-.673l5.847-3.367c.214-.123.306-.306.306-.551v-2.909l-7.684 4.439a1.025 1.025 0 0 1-1.102 0l-6.03-3.49-.001.006c-.03.243-.06.486-.06.729 0 3.214 2.54 5.816 6 5.816Zm7.592 3.643h-.008a7.672 7.672 0 0 1-5.35-2.204 7.28 7.28 0 0 1-2.418.398c-4.102 0-7.653-3.276-7.653-7.654 0-.642.092-1.285.245-1.928-1.653-1.5-2.572-3.581-2.572-5.724 0-3.276 2.204-6.49 5.633-7.378a7.654 7.654 0 0 1 7.5-6.122c2.082 0 3.98.857 5.357 2.204a7.28 7.28 0 0 1 2.419-.398c4.102 0 7.653 3.275 7.653 7.653 0 .642-.092 1.285-.245 1.928 1.651 1.499 2.57 3.577 2.572 5.717v.015c-.004 3.273-2.207 6.483-5.633 7.37a7.654 7.654 0 0 1-7.493 6.123h-.007Z"></path><path fill-rule="evenodd" d="M43.446 29.783v.015c-.004 3.273-2.207 6.483-5.633 7.37a7.654 7.654 0 0 1-7.493 6.123h-.015a7.672 7.672 0 0 1-5.35-2.204 7.28 7.28 0 0 1-2.418.398c-4.102 0-7.653-3.276-7.653-7.654 0-.642.092-1.285.245-1.928-1.653-1.5-2.572-3.581-2.572-5.724 0-3.276 2.204-6.49 5.633-7.378a7.654 7.654 0 0 1 7.5-6.122c2.082 0 3.98.857 5.357 2.204a7.28 7.28 0 0 1 2.419-.398c4.102 0 7.653 3.275 7.653 7.653 0 .642-.092 1.285-.245 1.928 1.651 1.499 2.57 3.577 2.572 5.717Zm-20.389 4.845L17.21 31.26c-1.684-.98-2.816-3.06-2.816-5.081a5.769 5.769 0 0 1 3.581-5.357v6.98c0 .428.184.734.551.948l7.654 4.439-2.51 1.439a.557.557 0 0 1-.613 0Zm-2.97-7.072 2.511 1.47v-8.878c0-.428.184-.735.551-.949l6.031-3.49c-1.01-.765-2.204-1.194-3.49-1.194-3.398 0-5.908 2.48-5.908 5.756v6.734c0 .245.092.429.306.551Zm4.317-6.643v2.908l7.684-4.469a1.025 1.025 0 0 1 1.102 0l6.061 3.551c.031-.245.031-.49.031-.704 0-3.03-2.327-5.878-6-5.878-.98 0-1.928.215-2.724.674l-5.848 3.367c-.214.123-.306.306-.306.551Zm13.653 14.235v-6.95c0-.428-.183-.734-.55-.948l-7.684-4.47 2.51-1.438a.557.557 0 0 1 .612 0l5.847 3.367c1.684.98 2.817 3.061 2.817 5.082 0 2.326-1.378 4.47-3.552 5.357ZM26.823 40.26c1.01.766 2.204 1.194 3.49 1.194 3.397 0 5.938-2.48 5.938-5.755v-6.735c0-.245-.092-.429-.306-.55l-2.54-1.47v8.877c0 .43-.184.735-.552.95l-6.03 3.49ZM28 32.148l-3.597-2.02v-4.286l3.597-2.02 3.597 2.02v4.286l-3.597 2.02Zm-11.28 1.684c0 3.214 2.54 5.816 6 5.816.98 0 1.928-.214 2.724-.673l5.847-3.367c.214-.123.306-.306.306-.551v-2.909l-7.684 4.439a1.025 1.025 0 0 1-1.102 0l-6.03-3.49-.001.006c-.03.243-.06.486-.06.729Z" clip-rule="evenodd"></path></svg></span><div class="CustomerQuotes_authorInfoDesktop__0fP9Y Flex_root__DOQCW Flex_column__eg2kV"><span class="sc-d5151d0-0 kAqRVy">Gabriel Peal</span><span style="opacity:0.6" class="sc-d5151d0-0 hT
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 9: Contact
- **Confidence:** 35%
- **Tag:** section
- **Classes:** `CTA_homepagePrefooter__FWdih`
- **Size:** 228px height
- **Headings:** H2: "Built for the future. Available today."
- **CTAs:** Get started, Contact sales, Open app, Download
- **Flex:** direction: column, wrap: nowrap, gap: 40px
- **Align items:** center
- **Justify:** center
- **Animations:**
  - `h2`.sc-d5151d0-0: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `a`.Button_root__Stmhv: transition: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.
  - `a`.Button_root__Stmhv: transition: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.
  - `a`.Button_root__Stmhv: transition: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.
  - `a`.Button_root__Stmhv: transition: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.

### Element Style Blueprint

- **`<h2>`** .sc-d5151d0-0.cvEOJe
  - font: 72px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 72px | ls: -1.584px | text-align: center | border: 0px none rgb(247, 248, 248) | display: block | width: 722.25px | opacity: 1
  - anim: all
  - text: "Built for the future. Available today."

- **`<div>`** .Flex_root__DOQCW
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 282.562px | opacity: 1
  - anim: all
  - text: "Get startedContact salesOpen appDownload"

- **`<a>`** .Button_root__Stmhv.Button_variant-secondary__Y2SNH
  - font: 16px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 44px | text-align: start | bg: rgba(255, 255, 255, 0.05) | radius: 9999px | border: 0px none rgb(247, 248, 248) | shadow: rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px | display: flex | width: 143.688px | padding: 0px 20px | opacity: 1
  - anim: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.
  - href: https://linear.app/contact/sales
  - text: "Contact sales"

- **`<a>`** .Button_root__Stmhv.Button_variant-invert__ECHZN
  - font: 16px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(8, 9, 10) | lh: 44px | text-align: start | bg: rgb(229, 229, 230) | radius: 9999px | border: 1px solid rgb(229, 229, 230) | shadow: rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px | display: flex | width: 126.875px | padding: 0px 20px | opacity: 1
  - anim: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.
  - href: https://linear.app/signup
  - text: "Get started"

- **`<a>`** .Button_root__Stmhv.Button_variant-invert__ECHZN
  - font: 16px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(8, 9, 10) | lh: 44px | text-align: start | bg: rgb(229, 229, 230) | radius: 9999px | border: 1px solid rgb(229, 229, 230) | shadow: rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px | padding: 0px 20px | opacity: 1
  - anim: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.
  - href: https://linear.app/login
  - text: "Open app"

- **`<a>`** .Button_root__Stmhv.Button_variant-secondary__Y2SNH
  - font: 16px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 44px | text-align: start | bg: rgba(255, 255, 255, 0.05) | radius: 9999px | border: 0px none rgb(247, 248, 248) | shadow: rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px | padding: 0px 20px | opacity: 1
  - anim: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.
  - href: https://linear.app/download
  - text: "Download"

### HTML Structure

```html
<section class="CTA_homepagePrefooter__FWdih"><h2 style="max-width:16ch" class="sc-d5151d0-0 cvEOJe CTA_heading__8iGL9">Built for the future. Available today.</h2><div class="Flex_root__DOQCW" style="gap:12px"><a data-hide="logged-in" class="Button_root__Stmhv Button_variant-invert__ECHZN Button_size-large__fvxeb Button_variant__1FJO9 Link_root__cNtak" rel="noopener" href="/signup">Get started</a><a data-hide="logged-in" class="Button_root__Stmhv Button_variant-secondary__Y2SNH Button_size-large__fvxeb Button_variant__1FJO9 Link_root__cNtak" rel="noopener" href="/contact/sales">Contact sales</a><a data-show="logged-in" class="Button_root__Stmhv Button_variant-invert__ECHZN Button_size-large__fvxeb Button_variant__1FJO9 Link_root__cNtak" rel="noopener" href="/login">Open app</a><a data-show="logged-in" class="Button_root__Stmhv Button_variant-secondary__Y2SNH Button_size-large__fvxeb Button_variant__1FJO9 Link_root__cNtak" rel="noopener" href="/download">Download</a></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 10: Contact
- **Confidence:** 35%
- **Tag:** header
- **Classes:** `Header_header__hfMjL`
- **Size:** 73px height
- **Background image:** linear-gradient(rgba(11, 11, 11, 0.8) 0px, oklab(0.149576 0.00000680983 0.00000298768 / 0.761905) 100%)
- **CTAs:** Product, Resources, Customers, Pricing, Now
- **Media:** 2 SVG(s)
- **Animations:**
  - `div`.Header_innerWrapper__jlvRl: transition: all
  - `div`: transition: all
  - `li`.Header_logoItem__gFn0o: transition: all
  - `li`.Header_rightSideWrapper__v4fej: transition: all
  - `li`.Header_mobileItem__Prlve: transition: all

### Element Style Blueprint

- **`<div>`** .Header_innerWrapper__jlvRl
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 1436px | padding: 0px 77px | margin: 0px 2px | opacity: 1
  - anim: all
  - text: "ProductResourcesCustomersPricingNowContactDocsOpen appLog inSign up"

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1282px | opacity: 1
  - anim: all
  - text: "ProductResourcesCustomersPricingNowContactDocsOpen appLog inSign up"

- **`<li>`** .Header_logoItem__gFn0o.Header_item__a2E_K
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 654px | opacity: 1
  - anim: all

- **`<li>`** .Header_rightSideWrapper__v4fej
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 620px | opacity: 1
  - anim: all
  - text: "ProductResourcesCustomersPricingNowContactDocsOpen appLog inSign up"

- **`<li>`** .Header_mobileItem__Prlve.Header_item__a2E_K
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | margin: 0px 0px 0px -16px | opacity: 1
  - anim: all

### HTML Structure

```html
<header class="Header_header__hfMjL Header_header__hfMjL"><nav aria-label="Main" data-orientation="horizontal" dir="ltr" class="Header_menuRoot__tJRFd"><div class="Header_innerWrapper__jlvRl"><div style="position:relative"><ul data-orientation="horizontal" class="Header_list__gT80u" aria-label="Site navigation" dir="ltr"><li class="Header_logoItem__gFn0o Header_item__a2E_K"><span data-state="closed" style="-webkit-touch-callout:none;display:flex"><a aria-label="Navigate to home" data-radix-collection-item="" class="Header_logoLink__Sgfy4 Link_root__cNtak" rel="noopener" href="/homepage"><svg height="22" viewBox="0 0 400 100" fill="currentColor" size="22" color="currentColor" aria-label="Linear"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9266 16.3713c-.5283.5806-.4933 1.4714.0617 2.0265l68.5946 68.5946c.5551.555 1.4459.59 2.0265.0617 10.0579-9.1522 16.3713-22.3478 16.3713-37.0179C99.9807 22.402 77.5788 0 49.9445 0 35.2744 0 22.0788 6.31337 12.9266 16.3713ZM4.35334 29.3894c-.25348.5589-.12567 1.2142.30824 1.6481L68.9432 95.3191c.4339.4339 1.0892.5617 1.6481.3083 1.485-.6736 2.9312-1.4176 4.3344-2.2277.8341-.4815.9618-1.6195.2808-2.3005L8.88146 24.7742c-.68097-.681-1.81894-.5532-2.30045.2808-.81013 1.4032-1.55411 2.8494-2.22767 4.3344ZM.453579 47.796c-.300979-.301-.46112014-.7158-.4327856-1.1405.1327026-1.9891.3816396-3.9463.7400796-5.865.214926-1.1505 1.620727-1.5497 2.448307-.7222L59.9124 96.7715c.8275.8276.4283 2.2334-.7222 2.4483-1.9187.3585-3.8759.6074-5.865.7401-.4247.0283-.8395-.1318-1.1405-.4328L.453579 47.796ZM3.93331 61.7589c-1.0331-1.0331-2.70028-.1429-2.32193 1.2683C6.22104 80.2203 19.7604 93.7597 36.9535 98.3693c1.4112.3784 2.3014-1.2888 1.2683-2.3219L3.93331 61.7589ZM201.602 27.535c3.587 0 6.494-2.918 6.494-6.5175S205.189 14.5 201.602 14.5c-3.586 0-6.493 2.918-6.493 6.5175s2.907 6.5175 6.493 6.5175Zm-55.621 56.8396V14.5039h11.54v59.648h31.115v10.2227h-42.655Zm82.136-28.511v28.511h-11.166V34.8555h11.026v8.4876l.14-.0937c1.121-2.6573 2.928-4.8769 5.42-6.6589 2.491-1.8132 5.668-2.7198 9.531-2.7198 3.426 0 6.54.766 9.344 2.2978 2.803 1.5006 5.045 3.7045 6.727 6.6119 1.682 2.9074 2.523 6.4713 2.523 10.6916v30.9026h-11.166V55.0195c0-3.7514-.997-6.5963-2.99-8.5345-1.962-1.9695-4.594-2.9543-7.896-2.9543-2.118 0-4.049.4377-5.793 1.313-1.744.8754-3.13 2.2196-4.158 4.0328-1.028 1.8132-1.542 4.1422-1.542 6.9871Zm101.105 27.6669c2.554 1.0942 5.482 1.6413 8.783 1.6413 2.71 0 5.03-.3439 6.961-1.0317 1.932-.719 3.52-1.6725 4.766-2.8605 1.277-1.1879 2.289-2.4853 3.037-3.8921h.187v6.9871h10.699V50.2833c0-2.4072-.468-4.6111-1.402-6.6119-.934-2.0008-2.289-3.7358-4.065-5.2051-1.744-1.4694-3.862-2.5948-6.354-3.3763-2.491-.8129-5.295-1.2193-8.409-1.2193-4.267 0-7.958.7347-11.073 2.204-3.084 1.4381-5.497 3.3763-7.242 5.8148-1.744 2.4384-2.694 5.1895-2.85 8.2531h10.793c.124-1.438.623-2.7198 1.495-3.8452.872-1.1254 2.056-2.0008 3.551-2.626 1.495-.6565 3.223-.9848 5.186-.9848 1.962 0 3.628.3283 4.999.9848 1.401.6565 2.476 1.5475 3.223 2.6729.748 1.1254 1.122 2.4384 1.122 3.939v.3752c0 1.1254-.39 1.9538-1.168 2.4853-.748.5314-2.025.9222-3.831 1.1723-1.776.2501-4.205.5471-7.289.891-2.523.2813-4.952.7034-7.288 1.2661-2.336.5627-4.423 1.3912-6.261 2.4853-1.806 1.0942-3.239 2.5479-4.298 4.3611-1.059 1.8132-1.588 4.1422-1.588 6.987 0 3.2826.747 6.0336 2.242 8.2532 1.495 2.1884 3.52 3.8453 6.074 4.9707Zm18.081-8.3001c-1.807.9691-4.034 1.4537-6.681 1.4537-2.679 0-4.813-.5627-6.401-1.6881-1.589-1.1567-2.383-2.7355-2.383-4.7362 0-1.5631.436-2.8293 1.308-3.7984.904-.9691 2.087-1.735 3.551-2.2977 1.464-.5628 3.052-.9535 4.765-1.1724 1.246-.1875 2.461-.3751 3.645-.5627 1.183-.2188 2.289-.422 3.317-.6096 1.028-.2188 1.9-.4377 2.616-.6565.748-.2188 1.293-.4533 1.635-.7034v5.5334c0 1.9382-.451 3.7202-1.355 5.3458-.872 1.5944-2.211 2.8917-4.017 3.8921Zm26.094 9.1442V34.8555h10.745v8.1594h.141c.903-2.8136 2.32-4.955 4.251-6.4244 1.962-1.5005 4.532-2.2508 7.709-2.2508.779 0 1.48.0312 2.102.0938.655.0312 1.2.0625 1.636.0937v10.082c-.405-.0625-1.122-.1406-2.149-.2344-1.028-.0938-2.118-.1407-3.271-.1407-1.838 0-3.519.422-5.046 1.2661-1.526.8441-2.741 2.1415-3.644 3.8921-.872 1.7195-1.308 3.8922-1.308 6.5182v28.4641h-11.166Zm-177.401 0V34.8555h11.166v49.5191h-11.166Zm84.238-2.204c3.582 2.2196 7.834 3.3294 12.755 3.3294 3.8 0 7.257-.6878 10.372-2.0633 3.146-1.4068 5.762-3.3294 7.849-5.7678 2.087-2.4697 3.442-5.3146 4.065-8.5346h-10.512c-.468 1.4693-1.231 2.7667-2.29 3.8921-1.027 1.0942-2.32 1.9539-3.877 2.5792-1.558.6252-3.364.9378-5.42.9378-2.772 0-5.155-.6252-7.148-1.8757-1.962-1.2505-3.457-2.9855-4.485-5.2051-.933-2.043-1.443-4.3564-1.529-6.9402h35.915v-3.0012c0-3.8139-.561-7.284-1.682-10.4102-1.121-3.1575-2.71-5.8773-4.766-8.1594-2.055-2.3134-4.531-4.0953-7.428-5.3458-2.866-1.2505-6.058-1.8757-9.578-1.8757-4.578 0-8.627 1.1098-12.147 3.3294-3.52 2.2196-6.276 5.2833-8.27 9.191-1.993 3.9078-2.99 8.3782-2.99 13.4114 0 5.0019.966 9.4568 2.897 13.3645 1.931 3.8765 4.688 6.9246 8.269 9.1442Zm23.501-32.7783c-1.028-2.1258-2.492-3.767-4.392-4.9237-1.9-1.1567-4.142-1.7351-6.728-1.7351-2.554 0-4.781.5784-6.681 1.7351-1.868 1.1567-3.332 2.7979-4.391 4.9237-.756 1.5396-1.234 3.2903-1.434 5.2521h25.059c-.2-1.9618-.678-3.7125-1.433-5.2521Z"></path></svg></a></span></li><li class="Header_rightSideWrapper__v4fej"><ul class="Header_navItems__Szs64"><li class="hide-tablet Header_item__a2E_K"><button id="radix-_R_ninpfcqlb_-trigger-product" data-state="closed" aria-expanded="false" aria-controls="radix-_R_ninpfcqlb_-content-product" class="Header_anchor__CTwdv Header_trigger__xKGQe reset_reset-button__5vBZ4" data-radix-collection-item="">Product</button></li><li class="hide-tablet Header_item__a2E_K"><button id="radix-_R_ninpfcqlb_-trigger-resources" data-state="closed" aria-expanded="false" aria-controls="radix-_R_ninpfcqlb_-content-resources" class="Header_anchor__CTwdv Header_trigger__xKGQe reset_reset-button__5vBZ4" data-radix-collection-item="">Resources</button></li><li class="hide-tablet Header_item__a2E_K"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/customers">Customers</a></li><li class="hide-tablet Header_item__a2E_K"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/pricing">Pricing</a></li><li class="hide-laptop Header_item__a2E_K"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/now">Now</a></li><li class="hide-tablet Header_item__a2E_K"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/contact">Contact</a></li></ul><div style="flex:1"></div><div class="Header_navDivider__Jexuv hide-tablet"></div><div style="flex:1"></div><ul class="Header_buttons__qwTPf"><li class="hide-mobile Header_buttonItem__crtcc Header_item__a2E_K" data-show="logged-in"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/docs">Docs</a></li><li class="Header_buttonItem__crtcc Header_item__a2E_K" data-show="logged-in"><span id="header-tooltip-open-app"><a draggable="false" type="button" role="button" tabindex="0" class="Button_root__Stmhv Button_variant-invert__ECHZN Button_size-small__sjtMt Button_variant__1FJO9 Link_root__cNtak" rel="noopener" href="/login">Open app</a></span></li><li class="Header_buttonItem__crtcc Header_item__a2E_K" data-hide="logged-in"><span id="header-tooltip-login"><a draggable="false" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/login">Log in</a></span></li><li class="Header_buttonItem__crtcc Header_item__a2E_K" data-hide="logged-in"><a draggable="false" class="Button_root__Stmhv Button_variant-invert__ECHZN Button_size-small__sjtMt Button_variant__1FJO9 Link_root__cNtak" rel="noopener" href="/signup">Sign up</a></li></ul></li><li class="Header_mobileItem__Prlve Header_item__a2E_K"><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_R_7inpfcqlb_" data-state="closed" cl
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 11: Nav
- **Confidence:** 20%
- **Tag:** header
- **Classes:** `IssueView_header__sldQv SharedViewStyles_header__19pF0`
- **Size:** 44px height
- **Padding:** 0px 24px 0px 31px
- **Media:** 4 SVG(s)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** center
- **Justify:** space-between
- **Animations:**
  - `div`.Flex_root__DOQCW: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `span`.sc-d5151d0-0: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `span`.sc-d5151d0-0: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `button`.SharedViewStyles_buttonBase__MNsrT: transition: transform 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - `button`.SharedViewStyles_buttonBase__MNsrT: transition: transform 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - `button`.SharedViewStyles_buttonBase__MNsrT: transition: transform 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - `button`.SharedViewStyles_buttonBase__MNsrT: transition: transform 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - `span`: transition: all
  - `svg`.sx-13wgh6h: transition: fill 0.15s
  - `svg`.sx-13wgh6h: transition: fill 0.15s
  - `svg`.sx-13wgh6h: transition: fill 0.15s
  - `svg`.sx-13wgh6h: transition: fill 0.15s
  - `span`.sc-d5151d0-0: transition: all
  - `span`: transition: all

### Element Style Blueprint

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 158.312px | opacity: 1
  - anim: all
  - text: "Faster app launch"

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 107.641px | opacity: 1
  - anim: all
  - text: "02/145"

- **`<span>`** .sc-d5151d0-0.fkFEGF
  - font: 12px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | lh: 16.8px | text-align: start | border: 0px none rgb(208, 214, 224) | display: block | width: 102.312px | opacity: 1
  - anim: all
  - text: "Faster app launch"

- **`<div>`** .Flex_root__DOQCW
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 48px | opacity: 1
  - anim: all

- **`<span>`** .sc-d5151d0-0.fBTzHJ
  - font: 12px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | lh: 16.8px | text-align: start | border: 0px none rgb(98, 102, 109) | display: block | width: 47.6406px | opacity: 1
  - anim: all
  - text: "02/145"

- **`<div>`** .Flex_root__DOQCW
  - font: 12px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | lh: 16.8px | text-align: start | border: 0px none rgb(98, 102, 109) | display: flex | width: 47.6406px | opacity: 1
  - anim: all
  - text: "02/145"

- **`<button>`** .SharedViewStyles_buttonBase__MNsrT.SharedViewStyles_favoriteButton__ugA7z
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | radius: 4px | border: 0px none rgb(98, 102, 109) | display: grid | width: 24px | margin: 0px 0px 0px 8px | opacity: 1
  - anim: transform 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)

- **`<button>`** .SharedViewStyles_buttonBase__MNsrT.Flex_root__DOQCW
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | radius: 4px | border: 0px none rgb(98, 102, 109) | display: grid | width: 24px | opacity: 1
  - anim: transform 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)

- **`<button>`** .SharedViewStyles_buttonBase__MNsrT
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | radius: 4px | border: 0px none rgb(98, 102, 109) | display: grid | width: 24px | opacity: 1
  - anim: transform 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)

- **`<button>`** .SharedViewStyles_buttonBase__MNsrT
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | radius: 4px | border: 0px none rgb(98, 102, 109) | display: grid | width: 24px | opacity: 1
  - anim: transform 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)

- **`<span>`**
  - font: 12px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | lh: 16.8px | text-align: start | border: 0px none rgb(98, 102, 109) | display: block | width: 20.0156px | opacity: 1
  - anim: all
  - text: "145"

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | border: 0px none rgb(98, 102, 109) | display: block | width: 16px | opacity: 1
  - anim: fill 0.15s

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | border: 0px none rgb(98, 102, 109) | display: block | width: 16px | opacity: 1
  - anim: fill 0.15s

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | border: 0px none rgb(98, 102, 109) | display: block | width: 16px | opacity: 1
  - anim: fill 0.15s

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | border: 0px none rgb(98, 102, 109) | display: block | width: 16px | opacity: 1
  - anim: fill 0.15s

- **`<span>`** .sc-d5151d0-0.kgndDe
  - font: 12px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(138, 143, 152) | lh: 16.8px | text-align: start | border: 0px none rgb(138, 143, 152) | display: block | width: 15.1719px | opacity: 1
  - anim: all

- **`<span>`**
  - font: 12px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | lh: 16.8px | text-align: start | border: 0px none rgb(98, 102, 109) | display: block | width: 4.45312px | opacity: 1
  - anim: all

### HTML Structure

```html
<header class="IssueView_header__sldQv SharedViewStyles_header__19pF0"><div class="Flex_root__DOQCW Flex_align-center__oXK9F"><span class="sc-d5151d0-0 fkFEGF">Faster app launch</span><button aria-label="Remove from favorites" class="SharedViewStyles_buttonBase__MNsrT SharedViewStyles_favoriteButton__ugA7z" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:var(--color-yellow)" fill="var(--color-yellow)"><path d="M14.9441 6.05256C14.8798 5.88159 14.7646 5.73411 14.6136 5.6298C14.4626 5.52549 14.2832 5.46931 14.0992 5.46877H10.4417C10.3795 5.46881 10.3187 5.44969 10.2679 5.41405C10.2171 5.37841 10.1787 5.32801 10.1581 5.2698L8.84514 1.58061C8.78083 1.4101 8.66552 1.26313 8.51465 1.15936C8.36377 1.0556 8.18453 1 8.00091 1C7.81728 1 7.63804 1.0556 7.48717 1.15936C7.33629 1.26313 7.22098 1.4101 7.15667 1.58061L7.15367 1.59014L5.84375 5.2698C5.82313 5.32791 5.78483 5.37825 5.73415 5.41388C5.68346 5.44951 5.62288 5.46869 5.56075 5.46877H1.902C1.71682 5.46863 1.53608 5.52504 1.38439 5.63033C1.23269 5.73562 1.11739 5.88468 1.05416 6.05724C0.990937 6.22979 0.982856 6.41746 1.03102 6.59473C1.07919 6.772 1.18126 6.93025 1.32335 7.04798L4.4383 9.6095C4.4849 9.64784 4.51872 9.69923 4.53534 9.75695C4.55196 9.81467 4.5506 9.87603 4.53143 9.93297L3.22272 13.8235C3.16224 14.0034 3.16105 14.1977 3.21932 14.3783C3.27758 14.5589 3.39229 14.7164 3.54684 14.8281C3.70139 14.9398 3.88777 15 4.07903 14.9996C4.27029 14.9994 4.45652 14.9388 4.61076 14.8267L7.82305 12.4915C7.87456 12.4541 7.93675 12.4339 8.00061 12.4339C8.06446 12.4339 8.12665 12.4541 8.17817 12.4915L11.3893 14.8261C11.5434 14.9386 11.7297 14.9995 11.9212 15C12.1126 15.0005 12.2992 14.9406 12.454 14.8289C12.6087 14.7172 12.7236 14.5595 12.782 14.3788C12.8403 14.198 12.8391 14.0035 12.7785 13.8235L11.4698 9.93059C11.4506 9.87364 11.4493 9.81229 11.4659 9.75457C11.4825 9.69685 11.5163 9.64545 11.5629 9.60712L14.6839 7.04202C14.8242 6.9233 14.9243 6.76477 14.9708 6.58783C15.0174 6.41089 15.0081 6.22406 14.9441 6.05256Z"></path></svg></button><button tabindex="-1" class="SharedViewStyles_buttonBase__MNsrT Flex_root__DOQCW Flex_align-center__oXK9F"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path></svg></button></div><div class="Flex_root__DOQCW Flex_align-center__oXK9F" style="gap:12px"><span class="sc-d5151d0-0 fBTzHJ"><div class="Flex_root__DOQCW" style="gap:4px"><span class="sc-d5151d0-0 kgndDe">02</span><span>/</span><span>145</span></div></span><div class="Flex_root__DOQCW"><button aria-label="Previous issue" class="SharedViewStyles_buttonBase__MNsrT" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path d="M11.2197 10.7803C11.5126 11.0732 11.9874 11.0732 12.2803 10.7803C12.5732 10.4874 12.5732 10.0126 12.2803 9.71967L8.28033 5.71967C7.98999 5.42933 7.52014 5.42643 7.22624 5.71318L3.22624 9.61581C2.92976 9.90508 2.92391 10.3799 3.21318 10.6764C3.50244 10.9729 3.97728 10.9787 4.27376 10.6895L7.74351 7.30417L11.2197 10.7803Z"></path></svg></button><button aria-label="Next issue" class="SharedViewStyles_buttonBase__MNsrT" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path d="M4.53 5.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.054.007l4-3.903a.75.75 0 0 0-1.048-1.073l-3.47 3.385L4.53 5.47Z"></path></svg></button></div></div></header>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 12: Nav
- **Confidence:** 20%
- **Tag:** header
- **Classes:** `IssueView_chatBoxHeader__dsIb0`
- **Size:** 49px height
- **Padding:** 12px 16px 12px 20px
- **Media:** 1 image(s), 1 SVG(s)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** center
- **Justify:** space-between
- **Animations:**
  - `div`.Flex_root__DOQCW: transition: all
  - `span`: transition: all
  - `span`.sc-d5151d0-0: transition: all
  - `button`.IssueView_chatBoxCloseButton__IsaTc: transition: color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - `img`.Image_root__UkRqc: transition: all; transform: matrix(1, 0, 0, 1, 0, 1)
  - `svg`.sx-13wgh6h: transition: fill 0.15s

### Element Style Blueprint

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 107.797px | opacity: 1
  - anim: all
  - text: "GitHub Copilot"

- **`<span>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 83.7969px | opacity: 1
  - anim: all
  - text: "GitHub Copilot"

- **`<span>`** .sc-d5151d0-0.fkFEGF
  - font: 12px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | lh: 16.8px | text-align: start | border: 0px none rgb(208, 214, 224) | display: inline | opacity: 1
  - anim: all
  - text: "GitHub Copilot"

- **`<button>`** .IssueView_chatBoxCloseButton__IsaTc
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | border: 0px none rgb(98, 102, 109) | display: grid | width: 16px | opacity: 1
  - anim: color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | radius: 50% | border: 0px none rgba(0, 0, 0, 0) | display: block | width: 16px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, 0, 1)
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/f9ed2721-1966-4abc-129b-93aaac1a6200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | border: 0px none rgb(98, 102, 109) | display: block | width: 16px | opacity: 1
  - anim: fill 0.15s

### HTML Structure

```html
<header class="IssueView_chatBoxHeader__dsIb0"><div class="Flex_root__DOQCW Flex_align-center__oXK9F" style="gap:8px"><img alt="" data-nosnippet="true" data-loaded="true" loading="eager" width="16" height="16" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent;border-radius:50%;transform:translateY(1px)" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/f9ed2721-1966-4abc-129b-93aaac1a6200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"><span><span class="sc-d5151d0-0 fkFEGF">GitHub Copilot</span></span></div><button class="IssueView_chatBoxCloseButton__IsaTc" aria-label="Close chat" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path d="M2.96967 2.96967C3.26256 2.67678 3.73744 2.67678 4.03033 2.96967L8 6.939L11.9697 2.96967C12.2626 2.67678 12.7374 2.67678 13.0303 2.96967C13.3232 3.26256 13.3232 3.73744 13.0303 4.03033L9.061 8L13.0303 11.9697C13.2966 12.2359 13.3208 12.6526 13.1029 12.9462L13.0303 13.0303C12.7374 13.3232 12.2626 13.3232 11.9697 13.0303L8 9.061L4.03033 13.0303C3.73744 13.3232 3.26256 13.3232 2.96967 13.0303C2.67678 12.7374 2.67678 12.2626 2.96967 11.9697L6.939 8L2.96967 4.03033C2.7034 3.76406 2.6792 3.3474 2.89705 3.05379L2.96967 2.96967Z"></path></svg></button></header>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 13: Nav
- **Confidence:** 20%
- **Tag:** header
- **Classes:** `SlackIssue_header__NtjDx utils_bottomGradientBorder__OEIzU`
- **Size:** 59px height
- **Padding:** 17px 24px
- **Media:** 2 SVG(s)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** center
- **Justify:** space-between
- **Animations:**
  - `div`.Flex_root__DOQCW: transition: all
  - `span`: transition: all
  - `span`.sc-d5151d0-0: transition: all
  - `span`.sc-d5151d0-0: transition: all
  - `button`.IconButton_root__vP_d_: transition: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.
  - `svg`.sx-13wgh6h: transition: fill 0.15s
  - `svg`.sx-13wgh6h: transition: fill 0.15s; transform: matrix(0, 1, -1, 0, 0, 0)

### Element Style Blueprint

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 159.562px | opacity: 1
  - anim: all
  - text: "Thread in #feedback"

- **`<span>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 135.562px | opacity: 1
  - anim: all
  - text: "Thread in #feedback"

- **`<span>`** .sc-d5151d0-0.gKwRRs
  - font: 14px 590 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(138, 143, 152) | lh: 21px | ls: -0.182px | text-align: start | border: 0px none rgb(138, 143, 152) | display: inline | opacity: 1
  - anim: all
  - text: "#feedback"

- **`<span>`** .sc-d5151d0-0.isbOdf
  - font: 14px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(138, 143, 152) | lh: 21px | ls: -0.182px | text-align: start | border: 0px none rgb(138, 143, 152) | display: inline | opacity: 1
  - anim: all
  - text: "Thread in"

- **`<button>`** .IconButton_root__vP_d_.Button_root__Stmhv
  - font: 12px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | lh: 24px | text-align: center | radius: 9999px | border: 0px none rgb(98, 102, 109) | display: flex | width: 24px | padding: 0px 10px | opacity: 1
  - anim: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 16px | opacity: 1
  - anim: fill 0.15s

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 12px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | lh: 24px | text-align: center | border: 0px none rgb(98, 102, 109) | display: block | width: 14px | opacity: 1
  - anim: fill 0.15s | matrix(0, 1, -1, 0, 0, 0)

### HTML Structure

```html
<header class="SlackIssue_header__NtjDx utils_bottomGradientBorder__OEIzU"><div class="Flex_root__DOQCW Flex_align-center__oXK9F" style="gap:8px"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:var(--color-text-quaternary)" fill="var(--color-text-quaternary)"><path d="M3.95144 9.85024C3.95144 10.6639 3.29432 11.3216 2.48128 11.3216C1.66823 11.3216 1.01111 10.6639 1.01111 9.85024C1.01111 9.03655 1.66823 8.37891 2.48128 8.37891H3.95144V9.85024ZM4.68653 9.85024C4.68653 9.03655 5.34365 8.37891 6.15669 8.37891C6.96974 8.37891 7.62686 9.03655 7.62686 9.85024V13.5286C7.62686 14.3423 6.96974 14.9999 6.15669 14.9999C5.34365 14.9999 4.68653 14.3423 4.68653 13.5286V9.85024Z" fill="var(--icon-color, #E01E5A)"></path><path d="M9.84333 12.0573C10.6564 12.0573 11.3135 12.7149 11.3135 13.5286C11.3135 14.3423 10.6564 14.9999 9.84333 14.9999C9.03029 14.9999 8.37317 14.3423 8.37317 13.5286V12.0573H9.84333ZM9.84333 11.3216C9.03029 11.3216 8.37317 10.6639 8.37317 9.85024C8.37317 9.03655 9.03029 8.37891 9.84333 8.37891H13.5299C14.3429 8.37891 15.0001 9.03655 15.0001 9.85024C15.0001 10.6639 14.3429 11.3216 13.5299 11.3216H9.84333Z" fill="var(--icon-color, #ECB22E)"></path><path d="M12.0486 6.16083C12.0486 5.34713 12.7057 4.68949 13.5188 4.68949C14.3318 4.68949 14.9889 5.34713 14.9889 6.16083C14.9889 6.97452 14.3318 7.63217 13.5188 7.63217H12.0486V6.16083ZM11.3135 6.16083C11.3135 6.97452 10.6564 7.63217 9.84334 7.63217C9.03029 7.63217 8.37317 6.97452 8.37317 6.16083V2.47134C8.37317 1.65764 9.03029 1 9.84334 1C10.6564 1 11.3135 1.65764 11.3135 2.47134V6.16083Z" fill="var(--icon-color, #2EB67D)"></path><path d="M6.15672 3.94268C5.34368 3.94268 4.68655 3.28503 4.68655 2.47134C4.68655 1.65764 5.34368 1 6.15672 1C6.96977 1 7.62689 1.65764 7.62689 2.47134V3.94268H6.15672ZM6.15672 4.68949C6.96977 4.68949 7.62689 5.34713 7.62689 6.16083C7.62689 6.97452 6.96977 7.63217 6.15672 7.63217H2.47017C1.65712 7.63217 1 6.97452 1 6.16083C1 5.34713 1.65712 4.68949 2.47017 4.68949H6.15672Z" fill="var(--icon-color, #36C5F0)"></path></svg><span><span class="sc-d5151d0-0 isbOdf">Thread in<!-- --> </span><span class="sc-d5151d0-0 gKwRRs">#feedback</span></span></div><button type="button" tabindex="-1" style="pointer-events:none;color:var(--color-text-quaternary)" class="IconButton_root__vP_d_ Button_root__Stmhv Button_variant-ghost__a06I_ Button_size-mini__qsCkZ Button_variant__1FJO9"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:#9c9da1;transform:rotate(90deg);height:14px;width:14px" fill="#9c9da1"><path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path></svg></button></header>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 14: Nav
- **Confidence:** 20%
- **Tag:** header
- **Classes:** `Plan_initiativesBoxHeader__BpkZm`
- **Size:** 60px height
- **Padding:** 0px 24px
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** center
- **Justify:** normal
- **Animations:**
  - `span`.sc-d5151d0-0: transition: all

### Element Style Blueprint

- **`<span>`** .sc-d5151d0-0.LTSrg
  - font: 14px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | lh: 21px | ls: -0.182px | text-align: start | border: 0px none rgb(208, 214, 224) | display: block | width: 61.9844px | opacity: 1
  - anim: all
  - text: "Initiatives"

### HTML Structure

```html
<header class="Plan_initiativesBoxHeader__BpkZm"><span class="sc-d5151d0-0 LTSrg">Initiatives</span></header>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 15: Nav
- **Confidence:** 20%
- **Tag:** header
- **Classes:** `Build_header__OAL8V`
- **Size:** 60px height
- **Background color:** rgb(15, 16, 17)
- **Padding:** 0px 24px 0px 28px
- **Media:** 1 image(s), 1 SVG(s)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** center
- **Justify:** space-between
- **Animations:**
  - `div`.Flex_root__DOQCW: transition: all
  - `span`.sc-d5151d0-0: transition: all
  - `img`.Image_root__UkRqc: transition: all
  - `svg`.sx-13wgh6h: transition: fill 0.15s

### Element Style Blueprint

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 74.25px | opacity: 1
  - anim: all
  - text: "Codex"

- **`<span>`** .sc-d5151d0-0.LTSrg
  - font: 14px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | lh: 21px | ls: -0.182px | text-align: start | border: 0px none rgb(208, 214, 224) | display: block | width: 42.25px | opacity: 1
  - anim: all
  - text: "Codex"

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | radius: 50% | border: 0px none rgba(0, 0, 0, 0) | display: block | width: 20px | margin: 0px 12px 0px 0px | opacity: 1
  - anim: all
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/13a0909f-186f-4d83-3fd3-d04883ec2d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 16px | opacity: 1
  - anim: fill 0.15s

### HTML Structure

```html
<header class="Build_header__OAL8V"><div class="Flex_root__DOQCW Flex_align-center__oXK9F" style="position:relative;height:100%"><img alt="Codex" data-nosnippet="true" data-loaded="false" loading="eager" width="20" height="20" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent;border-radius:50%;margin-right:12px" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/13a0909f-186f-4d83-3fd3-d04883ec2d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"><span class="sc-d5151d0-0 LTSrg">Codex</span></div><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:var(--color-text-quaternary)" fill="var(--color-text-quaternary)"><path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path></svg></header>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 16: Nav
- **Confidence:** 20%
- **Tag:** header
- **Classes:** `Monitor_header__guWRp`
- **Size:** 65px height
- **Padding:** 20px 24px
- **Animations:**
  - `span`.sc-d5151d0-0: transition: all

### Element Style Blueprint

- **`<span>`** .sc-d5151d0-0.LTSrg
  - font: 14px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | lh: 21px | ls: -0.182px | text-align: start | border: 0px none rgb(208, 214, 224) | display: inline | opacity: 1
  - anim: all
  - text: "Issue count by created date"

### HTML Structure

```html
<header class="Monitor_header__guWRp"><span class="sc-d5151d0-0 LTSrg">Issue count by created date</span></header>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 17: Nav
- **Confidence:** 20%
- **Tag:** header
- **Classes:** `Monitor_header__guWRp`
- **Size:** 65px height
- **Padding:** 20px 24px
- **Animations:**
  - `span`.sc-d5151d0-0: transition: all

### Element Style Blueprint

- **`<span>`** .sc-d5151d0-0.LTSrg
  - font: 14px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | lh: 21px | ls: -0.182px | text-align: start | border: 0px none rgb(208, 214, 224) | display: inline | opacity: 1
  - anim: all
  - text: "Cycle time by agent"

### HTML Structure

```html
<header class="Monitor_header__guWRp"><span class="sc-d5151d0-0 LTSrg">Cycle time by agent</span></header>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 18: Nav
- **Confidence:** 20%
- **Tag:** header
- **Classes:** `Monitor_pulseHeader__BiXEt`
- **Size:** 64px height
- **Padding:** 0px 0px 32px
- **CTAs:** Listen, 1.0×
- **Media:** 2 SVG(s)
- **Fixed elements:** 1
- **Animations:**
  - `div`.Flex_root__DOQCW: transition: all
  - `span`.sc-d5151d0-0: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `button`.Button_root__Stmhv: transition: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.
  - `button`.Monitor_playbackSpeedSelector__DgukY: transition: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.
  - `span`: transition: all
  - `svg`.sx-13wgh6h: transition: fill 0.15s
  - `span`.Select_chevron__5cB3T: transition: all
  - `svg`.sx-13wgh6h: transition: fill 0.15s

### Element Style Blueprint

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 472px | opacity: 1
  - anim: all
  - text: "Weekly Pulse for May 30Listen1.0×"

- **`<span>`** .sc-d5151d0-0.iIiuc
  - font: 17px 590 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | lh: 27.2px | text-align: start | border: 0px none rgb(208, 214, 224) | display: block | width: 201.281px | opacity: 1
  - anim: all
  - text: "Weekly Pulse for May 30"

- **`<div>`** .Flex_root__DOQCW
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 160.953px | opacity: 1
  - anim: all
  - text: "Listen1.0×"

- **`<button>`** .Button_root__Stmhv.Button_variant-secondary__Y2SNH
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 32px | text-align: center | bg: rgba(255, 255, 255, 0.05) | radius: 9999px | border: 0px none rgb(247, 248, 248) | shadow: rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px | display: flex | width: 85.4531px | padding: 0px 12px | opacity: 1
  - anim: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.
  - text: "Listen"

- **`<button>`** .Monitor_playbackSpeedSelector__DgukY.Button_root__Stmhv #base-ui-_R_3jl9tbinpfcqlb_
  - font: 12px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(138, 143, 152) | lh: 32px | text-align: center | radius: 9999px | border: 0px none rgb(138, 143, 152) | display: flex | width: 67.5px | padding: 0px 12px | margin: 0px 0px 0px 8px | opacity: 1
  - anim: border 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.16s cubic-bezier(0.25, 0.
  - text: "1.0×"

- **`<span>`**
  - font: 12px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(138, 143, 152) | lh: 32px | text-align: center | border: 0px none rgb(138, 143, 152) | display: block | width: 23.5px | opacity: 1
  - anim: all
  - text: "1.0×"

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 32px | text-align: center | border: 0px none rgb(247, 248, 248) | display: block | width: 16px | opacity: 1
  - anim: fill 0.15s

- **`<span>`** .Select_chevron__5cB3T
  - font: 12px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | lh: 32px | text-align: center | border: 0px none rgb(98, 102, 109) | display: flex | width: 12px | opacity: 1
  - anim: all

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 12px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | lh: 32px | text-align: center | border: 0px none rgb(98, 102, 109) | display: block | width: 12px | opacity: 1
  - anim: fill 0.15s

### HTML Structure

```html
<header class="Monitor_pulseHeader__BiXEt"><div class="Flex_root__DOQCW Flex_align-center__oXK9F Flex_justify-space-between__Txsv7"><span class="sc-d5151d0-0 iIiuc">Weekly Pulse for <!-- -->May 30</span><div class="Flex_root__DOQCW"><audio src="https://static.linear.app/assets/homepage/pulse-audio.mp3" preload="metadata"></audio><button type="button" tabindex="0" class="Button_root__Stmhv Button_variant-secondary__Y2SNH Button_size-small__sjtMt Button_variant__1FJO9"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:#9c9da1" fill="#9c9da1"><path d="m5.604 2.41 7.23 4.502a1.375 1.375 0 0 1-.02 2.345L5.585 13.6a1.375 1.375 0 0 1-2.083-1.18V3.576A1.375 1.375 0 0 1 5.604 2.41Z"></path></svg>Listen</button><button type="button" tabindex="0" id="base-ui-_R_3jl9tbinpfcqlb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" class="Monitor_playbackSpeedSelector__DgukY Button_root__Stmhv Button_variant-ghost__a06I_ Button_size-small__sjtMt Button_variant__1FJO9"><span>1.0×</span><span aria-hidden="true" class="Select_chevron__5cB3T"><svg width="12" height="12" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:#9c9da1" fill="#9c9da1"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.35355 4.56051C8.15829 4.36525 7.84171 4.36525 7.64645 4.56051L5.35355 6.8534C5.15829 7.04866 4.84171 7.04866 4.64645 6.8534C4.45118 6.65814 4.45118 6.34156 4.64645 6.1463L6.93934 3.8534C7.52513 3.26762 8.47487 3.26762 9.06066 3.8534L11.3536 6.1463C11.5488 6.34156 11.5488 6.65814 11.3536 6.8534C11.1583 7.04866 10.8417 7.04866 10.6464 6.8534L8.35355 4.56051Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.64645 11.4392C7.84171 11.6344 8.15829 11.6344 8.35355 11.4392L10.6464 9.14629C10.8417 8.95103 11.1583 8.95103 11.3536 9.14629C11.5488 9.34156 11.5488 9.65814 11.3536 9.8534L9.06066 12.1463C8.47487 12.7321 7.52513 12.7321 6.93934 12.1463L4.64645 9.8534C4.45118 9.65814 4.45118 9.34156 4.64645 9.14629C4.84171 8.95103 5.15829 8.95103 5.35355 9.14629L7.64645 11.4392Z"></path></svg></span></button><input style="clip-path:inset(50%);overflow:hidden;white-space:nowrap;border:0;padding:0;width:1px;height:1px;margin:-1px;position:fixed;top:0;left:0" tabindex="-1" aria-hidden="true" value="1"></div></div></header>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 19: Footer
- **Confidence:** 60%
- **Tag:** footer
- **Classes:** `Footer_footer__lJt10`
- **Size:** 464px height
- **Background color:** rgb(8, 9, 10)
- **Headings:** H3: "Product"; H3: "Features"; H3: "Company"; H3: "Resources"; H3: "Connect"; H3: "Legal"
- **CTAs:** Intake, Plan, Build, Diffs, Monitor
- **Media:** 1 SVG(s)
- **Animations:**
  - `div`.Footer_wrapper__YH6tI: transition: all
  - `div`.Footer_inner__vHgz_: transition: all
  - `div`.Footer_section__VUdD6: transition: all
  - `div`.Footer_section__VUdD6: transition: all
  - `div`.Footer_section__VUdD6: transition: all
  - `div`.Footer_section__VUdD6: transition: all
  - `div`.Footer_section__VUdD6: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all
  - `li`.Footer_sectionItem__lDqAK: transition: all

### Element Style Blueprint

- **`<div>`** .Footer_wrapper__YH6tI
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1436px | margin: 0px 2px | opacity: 1
  - anim: all
  - text: "ProductIntakePlanBuildDiffsMonitorPricingSecurityFeaturesAsksAgentsCustomer RequestsInsightsMobileIntegrationsChangelogCompanyAboutCustomersCareersBlo"

- **`<div>`** .Footer_inner__vHgz_
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1436px | padding: 56px 46px | opacity: 1
  - anim: all
  - text: "ProductIntakePlanBuildDiffsMonitorPricingSecurityFeaturesAsksAgentsCustomer RequestsInsightsMobileIntegrationsChangelogCompanyAboutCustomersCareersBlo"

- **`<div>`** .Footer_section__VUdD6
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 224px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "ProductIntakePlanBuildDiffsMonitorPricingSecurity"

- **`<div>`** .Footer_section__VUdD6
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 224px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "FeaturesAsksAgentsCustomer RequestsInsightsMobileIntegrationsChangelog"

- **`<div>`** .Footer_section__VUdD6
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 224px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "CompanyAboutCustomersCareersBlogMethodQualityBrand"

- **`<div>`** .Footer_section__VUdD6
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 224px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "ResourcesSwitchDownloadDocumentationDocsDevelopersStatusEnterpriseStartups"

- **`<div>`** .Footer_section__VUdD6
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 224px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "ConnectContact usCommunityX (Twitter)GitHubYouTube"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Intake"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Plan"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Build"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Diffs"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Monitor"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Pricing"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Security"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Asks"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Agents"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Customer Requests"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Insights"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Mobile"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Integrations"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Changelog"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "About"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Customers"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Careers"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Blog"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Method"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Quality"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Brand"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Switch"

- **`<li>`** .Footer_sectionItem__lDqAK
  - font: 13px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 19.5px | ls: -0.13px | text-align: start | border: 0px none rgb(247, 248, 248) | display: list-item | width: 160px | opacity: 1
  - anim: all
  - text: "Download"

### HTML Structure

```html
<footer class="Footer_footer__lJt10"><div class="Footer_wrapper__YH6tI"><div class="Footer_inner__vHgz_"><div class="hide-mobile Footer_logoColumn__Tu1xL"><a class="Footer_logoWrapper__9IJLI Link_root__cNtak Link_variant-fade__U2YWc" rel="noopener" href="/"><svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor" aria-label="Linear Logo" size="20" color="currentColor"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"></path></svg></a></div><div class="Footer_section__VUdD6"><h3 class="Footer_sectionTitle__PrfeJ">Product</h3><ul class="Footer_sectionList__qZ85z"><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/intake">Intake</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/plan">Plan</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/build">Build</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/diffs">Diffs</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/monitor">Monitor</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/pricing">Pricing</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/security">Security</a></li></ul></div><div class="Footer_section__VUdD6"><h3 class="Footer_sectionTitle__PrfeJ">Features</h3><ul class="Footer_sectionList__qZ85z"><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/asks">Asks</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/agents">Agents</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/customer-requests">Customer Requests</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/insights">Insights</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/mobile">Mobile</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/integrations">Integrations</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/changelog">Changelog</a></li></ul></div><div class="Footer_section__VUdD6"><h3 class="Footer_sectionTitle__PrfeJ">Company</h3><ul class="Footer_sectionList__qZ85z"><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/about">About</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/customers">Customers</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/careers">Careers</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/blog">Blog</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/method">Method</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/quality">Quality</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/brand">Brand</a></li></ul></div><div class="Footer_section__VUdD6"><h3 class="Footer_sectionTitle__PrfeJ">Resources</h3><ul class="Footer_sectionList__qZ85z"><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/switch">Switch</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/download">Download</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/docs"><span class="hide-mobile">Documentation</span><span class="show-mobile">Docs</span></a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/developers">Developers</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" target="_blank" rel="noopener noreferrer" href="https://linearstatus.com">Status</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/enterprise">Enterprise</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/startups">Startups</a></li></ul></div><div class="Footer_section__VUdD6"><h3 class="Footer_sectionTitle__PrfeJ">Connect</h3><ul class="Footer_sectionList__qZ85z"><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" rel="noopener" href="/contact">Contact us</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" target="_blank" rel="noopener noreferrer" href="https://linear.app/join-slack">Community</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" target="_blank" rel="noopener noreferrer" href="https://x.com/linear">X (Twitter)</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" target="_blank" rel="noopener noreferrer" href="https://github.com/linear">GitHub</a></li><li class="Footer_sectionItem__lDqAK"><a class="Footer_sectionLink__yuXh6 Link_root__cNtak Link_variant-dimmed__kvcr0" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@linear">YouTube</a></li></ul></div><div class="Footer_section__VUdD6 show-laptop"><h3 class="Footer_sectionTitle__PrfeJ">Legal</h3><ul class="Footer_sectionList__qZ85z"><li class="Footer_sectionItem__lDqAK"><a class
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 20: Hero
- **Confidence:** 80%
- **Tag:** div
- **Classes:** `div`
- **Size:** full viewport height
- **Background color:** rgb(8, 9, 10)
- **Headings:** H1: "The product development system for teams and agentsThe product developmentsystem for teams and agentsThe product development system for teams and agen"; H3: "Faster app launch"; H4: "Activity"; H2: "A new species of product tool. Purpose-built for modern teams with AI workflows at its core, Linear sets a new standard for planning and building prod"; H2: "Make product operations self-driving"; H2: "Define the product direction"; H2: "Move work forward across teams and agents"; H2: "Review PRs and agent output"; H2: "Understand progress at scale"; H2: "Changelog"; H2: "Built for the future. Available today."; H3: "Product"; H3: "Features"; H3: "Company"; H3: "Resources"; H3: "Connect"; H3: "Legal"
- **CTAs:** Skip to content →, Product, Resources, Customers, Pricing
- **Media:** 31 image(s), 178 SVG(s)
- **Fixed elements:** 4
- **Animations:**
  - `div`.Layout_container__BVtmP: transition: all
  - `div`.LayoutContent_root__ZBUya: transition: all
  - `div`: transition: all
  - `div`.Bleed_root__EzNZN: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.Footer_wrapper__YH6tI: transition: all
  - `div`.Footer_inner__vHgz_: transition: all
  - `div`.CustomerQuotes_customerCards__Mmq26: transition: all
  - `div`.Benefits_benefits__8ZSjS: transition: all
  - `div`.hide-mobile: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.Changelog_changelog__kvY8A: transition: all
  - `div`.Hero_container__inGFW: transition: all
  - `div`.Benefits_benefit__IHWje: transition: all
  - `div`.Benefits_benefit__IHWje: transition: all
  - `div`.Benefits_benefit__IHWje: transition: all
  - `h2`.sc-d5151d0-0: transition: all
  - `div`.PageSection_footer__e0E0p: transition: all
  - `div`.PageSection_footer__e0E0p: transition: all
  - `div`.PageSection_footer__e0E0p: transition: all
  - `div`.PageSection_footer__e0E0p: transition: all
  - `h2`.sc-d5151d0-0: transition: all

### Element Style Blueprint

- **`<div>`** .Layout_container__BVtmP.page_root__EA6JT
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "ProductResourcesCustomersPricingNowContactDocsOpen appLog inSign upThe product development system for teams and agentsThe product developmentsystem fo"

- **`<div>`** .LayoutContent_root__ZBUya.LayoutContent_homepage__alayp
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1436px | padding: 0px 46px | margin: 0px 2px | opacity: 1
  - anim: all
  - text: "The product development system for teams and agentsThe product developmentsystem for teams and agentsThe product development system for teams and agen"

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "The product development system for teams and agentsThe product developmentsystem for teams and agentsThe product development system for teams and agen"

- **`<div>`** .Bleed_root__EzNZN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | margin: 0px -720px | opacity: 1
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Backlog8ENG-2085Reduce UI flicker during autonomy...ENG-2094Add buffering for autonomy event streamsENG-2092Reduce startup delay caused by vehicle syn"

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "FEBMARAPRMAYJUNJULAUGSEP29162329162330613202741118251815222961320273101724317142128UI RefreshCore screensPolishSplit faresInternalPublic BetaAutonomy "

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Issue count by created date181614121086420Feb 2025May 2025Aug 2025Nov 2025Cycle time by agentCursorCodexNo AgentWeekly Pulse for May 30Listen1.0×Proje"

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "kinetic-ios/src/screens/Home/HomeScreen.tsxkinetic-ios/src/HomeScreen.tsxLinearimport React from 'react'import { View, ActivityIndicator } from 'react"

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "CodexOn it! I've received your request.Kicked off a task in kinetic/kinetic-iOS environment.Searching for root AGENTS filekinetic/kinetic-iOS$ /bin/ba"

- **`<div>`** .Footer_wrapper__YH6tI
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1436px | margin: 0px 2px | opacity: 1
  - anim: all
  - text: "ProductIntakePlanBuildDiffsMonitorPricingSecurityFeaturesAsksAgentsCustomer RequestsInsightsMobileIntegrationsChangelogCompanyAboutCustomersCareersBlo"

- **`<div>`** .Footer_inner__vHgz_
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1436px | padding: 56px 46px | opacity: 1
  - anim: all
  - text: "ProductIntakePlanBuildDiffsMonitorPricingSecurityFeaturesAsksAgentsCustomer RequestsInsightsMobileIntegrationsChangelogCompanyAboutCustomersCareersBlo"

- **`<div>`** .CustomerQuotes_customerCards__Mmq26
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 1344px | padding: 12px 12px 0px | opacity: 1
  - anim: all
  - text: "You just have to use it and you will see, you will just feel it.Gabriel PealOpenAIOur speed is intense and Linear helps us be action biased.Nik Koblov"

- **`<div>`** .Benefits_benefits__8ZSjS.hide-laptop
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "FIG 0.2Built for purposeLinear is shaped by the practices and principles of world-class product teams.FIG 0.3Powered by AI agentsDesigned for workflow"

- **`<div>`** .hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "ChangelogLinear DiffsAgents generate large volumes of code, but individuals are still accountable for the changes that merge. This leads to a lot of r"

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Make product operations self-drivingTurn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the "

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Define the product directionPlan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date"

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Move work forward across teams and agentsBuild and deploy AI agents that work alongside your team. Work on complex tasks together or delegate entire i"

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Review PRs and agent outputUnderstand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge — all with"

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Understand progress at scaleTake the guesswork out of product development with project updates, analytics, and dashboards that surface what needs your"

- **`<div>`** .Changelog_changelog__kvY8A.utils_inset__Xhl3T
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "Linear DiffsAgents generate large volumes of code, but individuals are still accountable for the changes that merge. This leads to a lot of review wor"

- **`<div>`** .Hero_container__inGFW.utils_inset__Xhl3T
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "The product development system for teams and agentsThe product developmentsystem for teams and agentsThe product development system for teams and agen"

- **`<div>`** .Benefits_benefit__IHWje.Grid_b___vQi_
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | display: flex | width: 426.672px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "FIG 0.3Powered by AI agentsDesigned for workflows shared by humans and agents. From drafting PRDs to pushing PRs.Designed for workflows shared by huma"

- **`<div>`** .Benefits_benefit__IHWje.Grid_a__vY7M8
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | display: flex | width: 426.656px | padding: 0px 32px 0px 0px | opacity: 1
  - anim: all
  - text: "FIG 0.2Built for purposeLinear is shaped by the practices and principles of world-class product teams."

- **`<div>`** .Benefits_benefit__IHWje.Grid_c__Tv5Qw
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 426.656px | padding: 0px 0px 0px 32px | opacity: 1
  - anim: all
  - text: "FIG 0.4Designed for speedReduces noise and restores momentum to help teams ship with high velocity and focus."

- **`<h2>`** .sc-d5151d0-0.exSLMF
  - font: 48px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(138, 143, 152) | lh: 48px | ls: -1.056px | text-align: start | border: 0px none rgb(138, 143, 152) | display: block | width: 1250px | padding: 0px 32px | margin: 0px 0px 0px -2px | opacity: 1
  - anim: all
  - text: "A new species of product tool. Purpose-built for modern teams with AI workflows at its core, Linear sets a new standard for planning and building prod"

- **`<div>`** .PageSection_footer__e0E0p.hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | opacity: 1
  - anim: all
  - text: "3.1Issues +3.2Agents +3.3Linear MCP +3.4Git automations +3.5Cycles +"

- **`<div>`** .PageSection_footer__e0E0p.hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | opacity: 1
  - anim: all
  - text: "1.1Linear Agent +1.2Triage +1.3Customer Requests +1.4Linear Asks +"

- **`<div>`** .PageSection_footer__e0E0p.hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | opacity: 1
  - anim: all
  - text: "2.1Projects +2.2Documents +2.3Initiatives +2.4Visual planning +"

- **`<div>`** .PageSection_footer__e0E0p.hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | opacity: 1
  - anim: all
  - text: "5.1Pulse +5.2Insights +5.3Dashboards +"

- **`<h2>`** .sc-d5151d0-0.cvEOJe
  - font: 72px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 72px | ls: -1.584px | text-align: center | border: 0px none rgb(247, 248, 248) | display: block | width: 722.25px | opacity: 1
  - anim: all
  - text: "Built for the future. Available today."

### HTML Structure

```html
<div style="isolation:isolate;background:inherit"><script>((a,b,c,d,e,f,g,h)=>{let i=document.documentElement,j=["light","dark"];function k(b){var c;(Array.isArray(a)?a:[a]).forEach(a=>{let c="class"===a,d=c&&f?e.map(a=>f[a]||a):e;c?(i.classList.remove(...d),i.classList.add(f&&f[b]?f[b]:b)):i.setAttribute(a,b)}),c=b,h&&j.includes(c)&&(i.style.colorScheme=c)}if(d)k(d);else try{let a=localStorage.getItem(b)||c,d=g&&"system"===a?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":a;k(d)}catch(a){}})("data-theme","website-theme","dark","dark",["dark","light","glass"],null,true,true)</script><section aria-label="Notifications alt+T" tabindex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section><a class="SkipNav_root__DcHPR" href="#skip-nav">Skip to content →</a><div class="Layout_container__BVtmP page_root__EA6JT"><div class="Header_root__x8J2p" data-header=""><header class="Header_header__hfMjL Header_header__hfMjL"><nav aria-label="Main" data-orientation="horizontal" dir="ltr" class="Header_menuRoot__tJRFd"><div class="Header_innerWrapper__jlvRl"><div style="position:relative"><ul data-orientation="horizontal" class="Header_list__gT80u" aria-label="Site navigation" dir="ltr"><li class="Header_logoItem__gFn0o Header_item__a2E_K"><span data-state="closed" style="-webkit-touch-callout:none;display:flex"><a aria-label="Navigate to home" data-radix-collection-item="" class="Header_logoLink__Sgfy4 Link_root__cNtak" rel="noopener" href="/homepage"><svg height="22" viewBox="0 0 400 100" fill="currentColor" size="22" color="currentColor" aria-label="Linear"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9266 16.3713c-.5283.5806-.4933 1.4714.0617 2.0265l68.5946 68.5946c.5551.555 1.4459.59 2.0265.0617 10.0579-9.1522 16.3713-22.3478 16.3713-37.0179C99.9807 22.402 77.5788 0 49.9445 0 35.2744 0 22.0788 6.31337 12.9266 16.3713ZM4.35334 29.3894c-.25348.5589-.12567 1.2142.30824 1.6481L68.9432 95.3191c.4339.4339 1.0892.5617 1.6481.3083 1.485-.6736 2.9312-1.4176 4.3344-2.2277.8341-.4815.9618-1.6195.2808-2.3005L8.88146 24.7742c-.68097-.681-1.81894-.5532-2.30045.2808-.81013 1.4032-1.55411 2.8494-2.22767 4.3344ZM.453579 47.796c-.300979-.301-.46112014-.7158-.4327856-1.1405.1327026-1.9891.3816396-3.9463.7400796-5.865.214926-1.1505 1.620727-1.5497 2.448307-.7222L59.9124 96.7715c.8275.8276.4283 2.2334-.7222 2.4483-1.9187.3585-3.8759.6074-5.865.7401-.4247.0283-.8395-.1318-1.1405-.4328L.453579 47.796ZM3.93331 61.7589c-1.0331-1.0331-2.70028-.1429-2.32193 1.2683C6.22104 80.2203 19.7604 93.7597 36.9535 98.3693c1.4112.3784 2.3014-1.2888 1.2683-2.3219L3.93331 61.7589ZM201.602 27.535c3.587 0 6.494-2.918 6.494-6.5175S205.189 14.5 201.602 14.5c-3.586 0-6.493 2.918-6.493 6.5175s2.907 6.5175 6.493 6.5175Zm-55.621 56.8396V14.5039h11.54v59.648h31.115v10.2227h-42.655Zm82.136-28.511v28.511h-11.166V34.8555h11.026v8.4876l.14-.0937c1.121-2.6573 2.928-4.8769 5.42-6.6589 2.491-1.8132 5.668-2.7198 9.531-2.7198 3.426 0 6.54.766 9.344 2.2978 2.803 1.5006 5.045 3.7045 6.727 6.6119 1.682 2.9074 2.523 6.4713 2.523 10.6916v30.9026h-11.166V55.0195c0-3.7514-.997-6.5963-2.99-8.5345-1.962-1.9695-4.594-2.9543-7.896-2.9543-2.118 0-4.049.4377-5.793 1.313-1.744.8754-3.13 2.2196-4.158 4.0328-1.028 1.8132-1.542 4.1422-1.542 6.9871Zm101.105 27.6669c2.554 1.0942 5.482 1.6413 8.783 1.6413 2.71 0 5.03-.3439 6.961-1.0317 1.932-.719 3.52-1.6725 4.766-2.8605 1.277-1.1879 2.289-2.4853 3.037-3.8921h.187v6.9871h10.699V50.2833c0-2.4072-.468-4.6111-1.402-6.6119-.934-2.0008-2.289-3.7358-4.065-5.2051-1.744-1.4694-3.862-2.5948-6.354-3.3763-2.491-.8129-5.295-1.2193-8.409-1.2193-4.267 0-7.958.7347-11.073 2.204-3.084 1.4381-5.497 3.3763-7.242 5.8148-1.744 2.4384-2.694 5.1895-2.85 8.2531h10.793c.124-1.438.623-2.7198 1.495-3.8452.872-1.1254 2.056-2.0008 3.551-2.626 1.495-.6565 3.223-.9848 5.186-.9848 1.962 0 3.628.3283 4.999.9848 1.401.6565 2.476 1.5475 3.223 2.6729.748 1.1254 1.122 2.4384 1.122 3.939v.3752c0 1.1254-.39 1.9538-1.168 2.4853-.748.5314-2.025.9222-3.831 1.1723-1.776.2501-4.205.5471-7.289.891-2.523.2813-4.952.7034-7.288 1.2661-2.336.5627-4.423 1.3912-6.261 2.4853-1.806 1.0942-3.239 2.5479-4.298 4.3611-1.059 1.8132-1.588 4.1422-1.588 6.987 0 3.2826.747 6.0336 2.242 8.2532 1.495 2.1884 3.52 3.8453 6.074 4.9707Zm18.081-8.3001c-1.807.9691-4.034 1.4537-6.681 1.4537-2.679 0-4.813-.5627-6.401-1.6881-1.589-1.1567-2.383-2.7355-2.383-4.7362 0-1.5631.436-2.8293 1.308-3.7984.904-.9691 2.087-1.735 3.551-2.2977 1.464-.5628 3.052-.9535 4.765-1.1724 1.246-.1875 2.461-.3751 3.645-.5627 1.183-.2188 2.289-.422 3.317-.6096 1.028-.2188 1.9-.4377 2.616-.6565.748-.2188 1.293-.4533 1.635-.7034v5.5334c0 1.9382-.451 3.7202-1.355 5.3458-.872 1.5944-2.211 2.8917-4.017 3.8921Zm26.094 9.1442V34.8555h10.745v8.1594h.141c.903-2.8136 2.32-4.955 4.251-6.4244 1.962-1.5005 4.532-2.2508 7.709-2.2508.779 0 1.48.0312 2.102.0938.655.0312 1.2.0625 1.636.0937v10.082c-.405-.0625-1.122-.1406-2.149-.2344-1.028-.0938-2.118-.1407-3.271-.1407-1.838 0-3.519.422-5.046 1.2661-1.526.8441-2.741 2.1415-3.644 3.8921-.872 1.7195-1.308 3.8922-1.308 6.5182v28.4641h-11.166Zm-177.401 0V34.8555h11.166v49.5191h-11.166Zm84.238-2.204c3.582 2.2196 7.834 3.3294 12.755 3.3294 3.8 0 7.257-.6878 10.372-2.0633 3.146-1.4068 5.762-3.3294 7.849-5.7678 2.087-2.4697 3.442-5.3146 4.065-8.5346h-10.512c-.468 1.4693-1.231 2.7667-2.29 3.8921-1.027 1.0942-2.32 1.9539-3.877 2.5792-1.558.6252-3.364.9378-5.42.9378-2.772 0-5.155-.6252-7.148-1.8757-1.962-1.2505-3.457-2.9855-4.485-5.2051-.933-2.043-1.443-4.3564-1.529-6.9402h35.915v-3.0012c0-3.8139-.561-7.284-1.682-10.4102-1.121-3.1575-2.71-5.8773-4.766-8.1594-2.055-2.3134-4.531-4.0953-7.428-5.3458-2.866-1.2505-6.058-1.8757-9.578-1.8757-4.578 0-8.627 1.1098-12.147 3.3294-3.52 2.2196-6.276 5.2833-8.27 9.191-1.993 3.9078-2.99 8.3782-2.99 13.4114 0 5.0019.966 9.4568 2.897 13.3645 1.931 3.8765 4.688 6.9246 8.269 9.1442Zm23.501-32.7783c-1.028-2.1258-2.492-3.767-4.392-4.9237-1.9-1.1567-4.142-1.7351-6.728-1.7351-2.554 0-4.781.5784-6.681 1.7351-1.868 1.1567-3.332 2.7979-4.391 4.9237-.756 1.5396-1.234 3.2903-1.434 5.2521h25.059c-.2-1.9618-.678-3.7125-1.433-5.2521Z"></path></svg></a></span></li><li class="Header_rightSideWrapper__v4fej"><ul class="Header_navItems__Szs64"><li class="hide-tablet Header_item__a2E_K"><button id="radix-_R_ninpfcqlb_-trigger-product" data-state="closed" aria-expanded="false" aria-controls="radix-_R_ninpfcqlb_-content-product" class="Header_anchor__CTwdv Header_trigger__xKGQe reset_reset-button__5vBZ4" data-radix-collection-item="">Product</button></li><li class="hide-tablet Header_item__a2E_K"><button id="radix-_R_ninpfcqlb_-trigger-resources" data-state="closed" aria-expanded="false" aria-controls="radix-_R_ninpfcqlb_-content-resources" class="Header_anchor__CTwdv Header_trigger__xKGQe reset_reset-button__5vBZ4" data-radix-collection-item="">Resources</button></li><li class="hide-tablet Header_item__a2E_K"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/customers">Customers</a></li><li class="hide-tablet Header_item__a2E_K"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/pricing">Pricing</a></li><li class="hide-laptop Header_item__a2E_K"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/now">Now</a></li><li class="hide-tablet Header_item__a2E_K"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/contact">Contact</a></li></ul><div style="flex:1"></div><div class="Header_navDivider__Jexuv hide-tablet"></div><div style="flex:1"></div><ul class="Header_buttons__qwTPf"><li class="hide-mobile Header_buttonItem__crtcc Header_item__a2E_K" data-show="logged-in"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/docs">Docs</a></li><li class="Header_buttonItem__crtcc Header_item__a2E_K" data-show="logged-in"><span id="header-tooltip-open-app
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 21: Hero
- **Confidence:** 80%
- **Tag:** div
- **Classes:** `Layout_container__BVtmP page_root__EA6JT`
- **Size:** full viewport height
- **Headings:** H1: "The product development system for teams and agentsThe product developmentsystem for teams and agentsThe product development system for teams and agen"; H3: "Faster app launch"; H4: "Activity"; H2: "A new species of product tool. Purpose-built for modern teams with AI workflows at its core, Linear sets a new standard for planning and building prod"; H2: "Make product operations self-driving"; H2: "Define the product direction"; H2: "Move work forward across teams and agents"; H2: "Review PRs and agent output"; H2: "Understand progress at scale"; H2: "Changelog"; H2: "Built for the future. Available today."; H3: "Product"; H3: "Features"; H3: "Company"; H3: "Resources"; H3: "Connect"; H3: "Legal"
- **CTAs:** Product, Resources, Customers, Pricing, Now
- **Media:** 31 image(s), 174 SVG(s)
- **Flex:** direction: column, wrap: nowrap, gap: normal
- **Align items:** normal
- **Justify:** normal
- **Fixed elements:** 3
- **Animations:**
  - `div`.LayoutContent_root__ZBUya: transition: all
  - `div`: transition: all
  - `div`.Bleed_root__EzNZN: transition: all
  - `div`.Frame_wrapper___hKDg: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.hide-mobile: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.hide-mobile: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.hide-mobile: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.page_container__YSA5u: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.Build_agentsContainerWrapper___UD1Y: transition: all
  - `div`.Footer_wrapper__YH6tI: transition: all
  - `div`.Footer_inner__vHgz_: transition: all
  - `div`.CustomerQuotes_customerCards__Mmq26: transition: all
  - `div`.Benefits_benefits__8ZSjS: transition: all
  - `div`.hide-mobile: transition: all
  - `a`.CustomerQuotes_customerCard__51MqY: transition: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.PageSection_header__3JdVh: transition: all
  - `div`.SlackIssue_slackBoxContainer__e8FUr: transition: all; transform: matrix(1, 0, 0, 1, -24, 0)
  - `div`.Changelog_changelog__kvY8A: transition: all
  - `div`.Hero_container__inGFW: transition: all
  - `div`.Build_cmdkContainer__hLqDY: transition: all
  - `a`.CustomerQuotes_customerCard__51MqY: transition: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)

### Element Style Blueprint

- **`<div>`** .LayoutContent_root__ZBUya.LayoutContent_homepage__alayp
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1436px | padding: 0px 46px | margin: 0px 2px | opacity: 1
  - anim: all
  - text: "The product development system for teams and agentsThe product developmentsystem for teams and agentsThe product development system for teams and agen"

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "The product development system for teams and agentsThe product developmentsystem for teams and agentsThe product development system for teams and agen"

- **`<div>`** .Bleed_root__EzNZN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | margin: 0px -720px | opacity: 1
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_wrapper___hKDg
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 6px | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | padding: 0px 0px 48px | opacity: 1
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Backlog8ENG-2085Reduce UI flicker during autonomy...ENG-2094Add buffering for autonomy event streamsENG-2092Reduce startup delay caused by vehicle syn"

- **`<div>`** .hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Backlog8ENG-2085Reduce UI flicker during autonomy...ENG-2094Add buffering for autonomy event streamsENG-2092Reduce startup delay caused by vehicle syn"

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "FEBMARAPRMAYJUNJULAUGSEP29162329162330613202741118251815222961320273101724317142128UI RefreshCore screensPolishSplit faresInternalPublic BetaAutonomy "

- **`<div>`** .hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "FEBMARAPRMAYJUNJULAUGSEP29162329162330613202741118251815222961320273101724317142128UI RefreshCore screensPolishSplit faresInternalPublic BetaAutonomy "

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Issue count by created date181614121086420Feb 2025May 2025Aug 2025Nov 2025Cycle time by agentCursorCodexNo AgentWeekly Pulse for May 30Listen1.0×Proje"

- **`<div>`** .hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Issue count by created date181614121086420Feb 2025May 2025Aug 2025Nov 2025Cycle time by agentCursorCodexNo AgentWeekly Pulse for May 30Listen1.0×Proje"

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "kinetic-ios/src/screens/Home/HomeScreen.tsxkinetic-ios/src/HomeScreen.tsxLinearimport React from 'react'import { View, ActivityIndicator } from 'react"

- **`<div>`** .page_container__YSA5u.DiffsIllustration_reviewsContainer__W86nX
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 22px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1344px | padding: 8px | opacity: 1
  - anim: all
  - text: "kinetic-ios/src/screens/Home/HomeScreen.tsxkinetic-ios/src/HomeScreen.tsxLinearimport React from 'react'import { View, ActivityIndicator } from 'react"

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "CodexOn it! I've received your request.Kicked off a task in kinetic/kinetic-iOS environment.Searching for root AGENTS filekinetic/kinetic-iOS$ /bin/ba"

- **`<div>`** .Build_agentsContainerWrapper___UD1Y.hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "CodexOn it! I've received your request.Kicked off a task in kinetic/kinetic-iOS environment.Searching for root AGENTS filekinetic/kinetic-iOS$ /bin/ba"

- **`<div>`** .Footer_wrapper__YH6tI
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1436px | margin: 0px 2px | opacity: 1
  - anim: all
  - text: "ProductIntakePlanBuildDiffsMonitorPricingSecurityFeaturesAsksAgentsCustomer RequestsInsightsMobileIntegrationsChangelogCompanyAboutCustomersCareersBlo"

- **`<div>`** .Footer_inner__vHgz_
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1436px | padding: 56px 46px | opacity: 1
  - anim: all
  - text: "ProductIntakePlanBuildDiffsMonitorPricingSecurityFeaturesAsksAgentsCustomer RequestsInsightsMobileIntegrationsChangelogCompanyAboutCustomersCareersBlo"

- **`<div>`** .CustomerQuotes_customerCards__Mmq26
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 1344px | padding: 12px 12px 0px | opacity: 1
  - anim: all
  - text: "You just have to use it and you will see, you will just feel it.Gabriel PealOpenAIOur speed is intense and Linear helps us be action biased.Nik Koblov"

- **`<div>`** .Benefits_benefits__8ZSjS.hide-laptop
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "FIG 0.2Built for purposeLinear is shaped by the practices and principles of world-class product teams.FIG 0.3Powered by AI agentsDesigned for workflow"

- **`<div>`** .hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "ChangelogLinear DiffsAgents generate large volumes of code, but individuals are still accountable for the changes that merge. This leads to a lot of r"

- **`<a>`** .CustomerQuotes_customerCard__51MqY.CustomerQuotes_primary__pnzzy
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 8px | border: 0px none rgb(247, 248, 248) | display: flex | width: 880px | padding: 24px 32px | opacity: 1
  - anim: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - href: https://linear.app/customers/openai
  - text: "You just have to use it and you will see, you will just feel it.Gabriel PealOpenAI"

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Make product operations self-drivingTurn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the "

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Define the product directionPlan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date"

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Move work forward across teams and agentsBuild and deploy AI agents that work alongside your team. Work on complex tasks together or delegate entire i"

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Review PRs and agent outputUnderstand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge — all with"

- **`<div>`** .PageSection_header__3JdVh
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 0px 96px | opacity: 1
  - anim: all
  - text: "Understand progress at scaleTake the guesswork out of product development with project updates, analytics, and dashboards that surface what needs your"

- **`<div>`** .SlackIssue_slackBoxContainer__e8FUr
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 16px | border: 0px none rgb(247, 248, 248) | display: block | width: 480px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -24, 0)
  - text: "Thread in #feedbackdidier5:41 AMHas anyone been looking into the iOS startup performance issues?lena5:41 AMAnyone else noticing the iOS app feels slow"

- **`<div>`** .Changelog_changelog__kvY8A.utils_inset__Xhl3T
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1344px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "Linear DiffsAgents generate large volumes of code, but individuals are still accountable for the changes that merge. This leads to a lot of review wor"

- **`<div>`** .Hero_container__inGFW.utils_inset__Xhl3T
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "The product development system for teams and agentsThe product developmentsystem for teams and agentsThe product development system for teams and agen"

- **`<div>`** .Build_cmdkContainer__hLqDY.page_fixedGlowBgLeft__Hda7A
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 0px none rgb(247, 248, 248) | shadow: rgba(8, 9, 10, 0.6) 0px 4px 32px 0px | display: block | width: 560px | opacity: 1
  - anim: all
  - text: "Agents Command MenuCodexAgentStevenEmaGitHub CopilotAgentCursorAgentMeg"

- **`<a>`** .CustomerQuotes_customerCard__51MqY.CustomerQuotes_secondary__25wvu
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(228, 242, 34) | radius: 8px | border: 0px none rgb(247, 248, 248) | display: flex | width: 432px | padding: 24px 32px | opacity: 1
  - anim: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - href: https://linear.app/customers/ramp
  - text: "Our speed is intense and Linear helps us be action biased.Nik KoblovHead of Engineering, Ramp"

### HTML Structure

```html
<div class="Layout_container__BVtmP page_root__EA6JT"><div class="Header_root__x8J2p" data-header=""><header class="Header_header__hfMjL Header_header__hfMjL"><nav aria-label="Main" data-orientation="horizontal" dir="ltr" class="Header_menuRoot__tJRFd"><div class="Header_innerWrapper__jlvRl"><div style="position:relative"><ul data-orientation="horizontal" class="Header_list__gT80u" aria-label="Site navigation" dir="ltr"><li class="Header_logoItem__gFn0o Header_item__a2E_K"><span data-state="closed" style="-webkit-touch-callout:none;display:flex"><a aria-label="Navigate to home" data-radix-collection-item="" class="Header_logoLink__Sgfy4 Link_root__cNtak" rel="noopener" href="/homepage"><svg height="22" viewBox="0 0 400 100" fill="currentColor" size="22" color="currentColor" aria-label="Linear"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9266 16.3713c-.5283.5806-.4933 1.4714.0617 2.0265l68.5946 68.5946c.5551.555 1.4459.59 2.0265.0617 10.0579-9.1522 16.3713-22.3478 16.3713-37.0179C99.9807 22.402 77.5788 0 49.9445 0 35.2744 0 22.0788 6.31337 12.9266 16.3713ZM4.35334 29.3894c-.25348.5589-.12567 1.2142.30824 1.6481L68.9432 95.3191c.4339.4339 1.0892.5617 1.6481.3083 1.485-.6736 2.9312-1.4176 4.3344-2.2277.8341-.4815.9618-1.6195.2808-2.3005L8.88146 24.7742c-.68097-.681-1.81894-.5532-2.30045.2808-.81013 1.4032-1.55411 2.8494-2.22767 4.3344ZM.453579 47.796c-.300979-.301-.46112014-.7158-.4327856-1.1405.1327026-1.9891.3816396-3.9463.7400796-5.865.214926-1.1505 1.620727-1.5497 2.448307-.7222L59.9124 96.7715c.8275.8276.4283 2.2334-.7222 2.4483-1.9187.3585-3.8759.6074-5.865.7401-.4247.0283-.8395-.1318-1.1405-.4328L.453579 47.796ZM3.93331 61.7589c-1.0331-1.0331-2.70028-.1429-2.32193 1.2683C6.22104 80.2203 19.7604 93.7597 36.9535 98.3693c1.4112.3784 2.3014-1.2888 1.2683-2.3219L3.93331 61.7589ZM201.602 27.535c3.587 0 6.494-2.918 6.494-6.5175S205.189 14.5 201.602 14.5c-3.586 0-6.493 2.918-6.493 6.5175s2.907 6.5175 6.493 6.5175Zm-55.621 56.8396V14.5039h11.54v59.648h31.115v10.2227h-42.655Zm82.136-28.511v28.511h-11.166V34.8555h11.026v8.4876l.14-.0937c1.121-2.6573 2.928-4.8769 5.42-6.6589 2.491-1.8132 5.668-2.7198 9.531-2.7198 3.426 0 6.54.766 9.344 2.2978 2.803 1.5006 5.045 3.7045 6.727 6.6119 1.682 2.9074 2.523 6.4713 2.523 10.6916v30.9026h-11.166V55.0195c0-3.7514-.997-6.5963-2.99-8.5345-1.962-1.9695-4.594-2.9543-7.896-2.9543-2.118 0-4.049.4377-5.793 1.313-1.744.8754-3.13 2.2196-4.158 4.0328-1.028 1.8132-1.542 4.1422-1.542 6.9871Zm101.105 27.6669c2.554 1.0942 5.482 1.6413 8.783 1.6413 2.71 0 5.03-.3439 6.961-1.0317 1.932-.719 3.52-1.6725 4.766-2.8605 1.277-1.1879 2.289-2.4853 3.037-3.8921h.187v6.9871h10.699V50.2833c0-2.4072-.468-4.6111-1.402-6.6119-.934-2.0008-2.289-3.7358-4.065-5.2051-1.744-1.4694-3.862-2.5948-6.354-3.3763-2.491-.8129-5.295-1.2193-8.409-1.2193-4.267 0-7.958.7347-11.073 2.204-3.084 1.4381-5.497 3.3763-7.242 5.8148-1.744 2.4384-2.694 5.1895-2.85 8.2531h10.793c.124-1.438.623-2.7198 1.495-3.8452.872-1.1254 2.056-2.0008 3.551-2.626 1.495-.6565 3.223-.9848 5.186-.9848 1.962 0 3.628.3283 4.999.9848 1.401.6565 2.476 1.5475 3.223 2.6729.748 1.1254 1.122 2.4384 1.122 3.939v.3752c0 1.1254-.39 1.9538-1.168 2.4853-.748.5314-2.025.9222-3.831 1.1723-1.776.2501-4.205.5471-7.289.891-2.523.2813-4.952.7034-7.288 1.2661-2.336.5627-4.423 1.3912-6.261 2.4853-1.806 1.0942-3.239 2.5479-4.298 4.3611-1.059 1.8132-1.588 4.1422-1.588 6.987 0 3.2826.747 6.0336 2.242 8.2532 1.495 2.1884 3.52 3.8453 6.074 4.9707Zm18.081-8.3001c-1.807.9691-4.034 1.4537-6.681 1.4537-2.679 0-4.813-.5627-6.401-1.6881-1.589-1.1567-2.383-2.7355-2.383-4.7362 0-1.5631.436-2.8293 1.308-3.7984.904-.9691 2.087-1.735 3.551-2.2977 1.464-.5628 3.052-.9535 4.765-1.1724 1.246-.1875 2.461-.3751 3.645-.5627 1.183-.2188 2.289-.422 3.317-.6096 1.028-.2188 1.9-.4377 2.616-.6565.748-.2188 1.293-.4533 1.635-.7034v5.5334c0 1.9382-.451 3.7202-1.355 5.3458-.872 1.5944-2.211 2.8917-4.017 3.8921Zm26.094 9.1442V34.8555h10.745v8.1594h.141c.903-2.8136 2.32-4.955 4.251-6.4244 1.962-1.5005 4.532-2.2508 7.709-2.2508.779 0 1.48.0312 2.102.0938.655.0312 1.2.0625 1.636.0937v10.082c-.405-.0625-1.122-.1406-2.149-.2344-1.028-.0938-2.118-.1407-3.271-.1407-1.838 0-3.519.422-5.046 1.2661-1.526.8441-2.741 2.1415-3.644 3.8921-.872 1.7195-1.308 3.8922-1.308 6.5182v28.4641h-11.166Zm-177.401 0V34.8555h11.166v49.5191h-11.166Zm84.238-2.204c3.582 2.2196 7.834 3.3294 12.755 3.3294 3.8 0 7.257-.6878 10.372-2.0633 3.146-1.4068 5.762-3.3294 7.849-5.7678 2.087-2.4697 3.442-5.3146 4.065-8.5346h-10.512c-.468 1.4693-1.231 2.7667-2.29 3.8921-1.027 1.0942-2.32 1.9539-3.877 2.5792-1.558.6252-3.364.9378-5.42.9378-2.772 0-5.155-.6252-7.148-1.8757-1.962-1.2505-3.457-2.9855-4.485-5.2051-.933-2.043-1.443-4.3564-1.529-6.9402h35.915v-3.0012c0-3.8139-.561-7.284-1.682-10.4102-1.121-3.1575-2.71-5.8773-4.766-8.1594-2.055-2.3134-4.531-4.0953-7.428-5.3458-2.866-1.2505-6.058-1.8757-9.578-1.8757-4.578 0-8.627 1.1098-12.147 3.3294-3.52 2.2196-6.276 5.2833-8.27 9.191-1.993 3.9078-2.99 8.3782-2.99 13.4114 0 5.0019.966 9.4568 2.897 13.3645 1.931 3.8765 4.688 6.9246 8.269 9.1442Zm23.501-32.7783c-1.028-2.1258-2.492-3.767-4.392-4.9237-1.9-1.1567-4.142-1.7351-6.728-1.7351-2.554 0-4.781.5784-6.681 1.7351-1.868 1.1567-3.332 2.7979-4.391 4.9237-.756 1.5396-1.234 3.2903-1.434 5.2521h25.059c-.2-1.9618-.678-3.7125-1.433-5.2521Z"></path></svg></a></span></li><li class="Header_rightSideWrapper__v4fej"><ul class="Header_navItems__Szs64"><li class="hide-tablet Header_item__a2E_K"><button id="radix-_R_ninpfcqlb_-trigger-product" data-state="closed" aria-expanded="false" aria-controls="radix-_R_ninpfcqlb_-content-product" class="Header_anchor__CTwdv Header_trigger__xKGQe reset_reset-button__5vBZ4" data-radix-collection-item="">Product</button></li><li class="hide-tablet Header_item__a2E_K"><button id="radix-_R_ninpfcqlb_-trigger-resources" data-state="closed" aria-expanded="false" aria-controls="radix-_R_ninpfcqlb_-content-resources" class="Header_anchor__CTwdv Header_trigger__xKGQe reset_reset-button__5vBZ4" data-radix-collection-item="">Resources</button></li><li class="hide-tablet Header_item__a2E_K"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/customers">Customers</a></li><li class="hide-tablet Header_item__a2E_K"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/pricing">Pricing</a></li><li class="hide-laptop Header_item__a2E_K"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/now">Now</a></li><li class="hide-tablet Header_item__a2E_K"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/contact">Contact</a></li></ul><div style="flex:1"></div><div class="Header_navDivider__Jexuv hide-tablet"></div><div style="flex:1"></div><ul class="Header_buttons__qwTPf"><li class="hide-mobile Header_buttonItem__crtcc Header_item__a2E_K" data-show="logged-in"><a data-radix-collection-item="" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/docs">Docs</a></li><li class="Header_buttonItem__crtcc Header_item__a2E_K" data-show="logged-in"><span id="header-tooltip-open-app"><a draggable="false" type="button" role="button" tabindex="0" class="Button_root__Stmhv Button_variant-invert__ECHZN Button_size-small__sjtMt Button_variant__1FJO9 Link_root__cNtak" rel="noopener" href="/login">Open app</a></span></li><li class="Header_buttonItem__crtcc Header_item__a2E_K" data-hide="logged-in"><span id="header-tooltip-login"><a draggable="false" class="Header_anchor__CTwdv Link_root__cNtak" rel="noopener" href="/login">Log in</a></span></li><li class="Header_buttonItem__crtcc Header_item__a2E_K" data-hide="logged-in"><a draggable="false" class="Button_root__Stmhv Button_variant-invert__ECHZN Button_size-small__sjtMt Button_variant__1FJO9 Link_root__cNtak" rel="noopener" href="/signup">Sign up</a></li></ul></li><li class="Header_mobileItem__Prlve Header_item__a2E_K"><button type="button" ar
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 22: Hero
- **Confidence:** 80%
- **Tag:** div
- **Classes:** `LayoutContent_root__ZBUya LayoutContent_homepage__alayp`
- **Size:** full viewport height
- **Padding:** 0px 46px
- **Headings:** H1: "The product development system for teams and agentsThe product developmentsystem for teams and agentsThe product development system for teams and agen"; H3: "Faster app launch"; H4: "Activity"; H2: "A new species of product tool. Purpose-built for modern teams with AI workflows at its core, Linear sets a new standard for planning and building prod"; H2: "Make product operations self-driving"; H2: "Define the product direction"; H2: "Move work forward across teams and agents"; H2: "Review PRs and agent output"; H2: "Understand progress at scale"; H2: "Changelog"; H2: "Built for the future. Available today."
- **CTAs:** Issue tracking is deadlinear.app/next →, Linear, Inbox, My issues, Reviews
- **Media:** 31 image(s), 171 SVG(s)
- **Fixed elements:** 2
- **Animations:**
  - `svg`.sx-13wgh6h: transition: fill 0.15s; transform: matrix(2.5, 0, 0, 2.5, 0, 0)
  - `div`: transition: all
  - `div`.Frame_shade__XyqbT: transition: all; transform: matrix(1, 0, 0, 1, -720, 0)
  - `img`.Image_root__UkRqc: transition: all
  - `div`.Bleed_root__EzNZN: transition: all
  - `div`.Frame_wrapper___hKDg: transition: all
  - `div`.Frame_background__iLZh4: transition: all
  - `img`.Image_root__UkRqc: transition: all
  - `div`.Frame_frameWrapper__I7Olr: transition: all
  - `div`.Frame_frame__xbIar: transition: all
  - `div`.page_container__YSA5u: transition: all; transform: matrix(1, 0, 0, 1, -120, 0)
  - `div`.page_panel__h_tIJ: transition: all
  - `div`.page_container__YSA5u: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.hide-mobile: transition: all
  - `div`.page_panel__h_tIJ: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.hide-mobile: transition: all
  - `div`.page_container__YSA5u: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.hide-mobile: transition: all
  - `div`.page_panel__h_tIJ: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.page_container__YSA5u: transition: all
  - `div`.page_panel__h_tIJ: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.PageSection_illustration__P1Yb9: transition: all
  - `div`.Build_agentsContainerWrapper___UD1Y: transition: all
  - `div`.page_container__YSA5u: transition: all
  - `div`.page_panel__h_tIJ: transition: all

### Element Style Blueprint

- **`<svg>`** .sx-13wgh6h.sx-31pjnn
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: inline | width: 480px | opacity: 1
  - anim: fill 0.15s | matrix(2.5, 0, 0, 2.5, 0, 0)

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "The product development system for teams and agentsThe product developmentsystem for teams and agentsThe product development system for teams and agen"

- **`<div>`** .Frame_shade__XyqbT.hide-laptop
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1440px | opacity: 0
  - anim: all | matrix(1, 0, 0, 1, -720, 0)

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | border: 0px none rgba(0, 0, 0, 0) | display: block | width: 1440px | opacity: 1
  - anim: all
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7fa8f5f-d439-4329-6a65-de549b51e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

- **`<div>`** .Bleed_root__EzNZN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | margin: 0px -720px | opacity: 1
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_wrapper___hKDg
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 6px | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | padding: 0px 0px 48px | opacity: 1
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_background__iLZh4
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 6px | border: 0px none rgb(247, 248, 248) | display: block | width: 1416px | opacity: 0
  - anim: all

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | border: 0px none rgba(0, 0, 0, 0) | display: inline | width: 1416px | opacity: 0.08
  - anim: all
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7b144b7-4ef0-4991-9bcb-617c6a37d200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

- **`<div>`** .Frame_frameWrapper__I7Olr
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | padding: 0px 60px | opacity: 0.333797
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_frame__xbIar
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(9, 10, 11) | radius: 12px | border: 0px none rgb(247, 248, 248) | display: grid | width: 1320px | padding: 8px | opacity: 1
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .page_container__YSA5u.SlackIssue_container__mAvbr
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 22px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1478.39px | padding: 8px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -120, 0)
  - text: "Backlog8ENG-2085Reduce UI flicker during autonomy...ENG-2094Add buffering for autonomy event streamsENG-2092Reduce startup delay caused by vehicle syn"

- **`<div>`** .page_panel__h_tIJ.SlackIssue_panel__SA_Ze
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(15, 16, 17) | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | shadow: rgb(35, 37, 42) 0px 0px 0px 1px inset | display: block | width: 1460.39px | padding: 24px 0px 24px 385px | opacity: 0.8
  - anim: all
  - text: "Backlog8ENG-2085Reduce UI flicker during autonomy...ENG-2094Add buffering for autonomy event streamsENG-2092Reduce startup delay caused by vehicle syn"

- **`<div>`** .page_container__YSA5u.Monitor_container__N0_Qy
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 22px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1458px | padding: 8px | margin: 0px -57px | opacity: 1
  - anim: all
  - text: "Issue count by created date181614121086420Feb 2025May 2025Aug 2025Nov 2025Cycle time by agentCursorCodexNo Agent"

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Backlog8ENG-2085Reduce UI flicker during autonomy...ENG-2094Add buffering for autonomy event streamsENG-2092Reduce startup delay caused by vehicle syn"

- **`<div>`** .hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Backlog8ENG-2085Reduce UI flicker during autonomy...ENG-2094Add buffering for autonomy event streamsENG-2092Reduce startup delay caused by vehicle syn"

- **`<div>`** .page_panel__h_tIJ.Monitor_grid__a9Cqx
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(15, 16, 17) | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | shadow: rgb(35, 37, 42) 0px 0px 0px 1px inset | display: grid | width: 1440px | padding: 24px 32px | opacity: 1
  - anim: all
  - text: "Issue count by created date181614121086420Feb 2025May 2025Aug 2025Nov 2025Cycle time by agentCursorCodexNo Agent"

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "FEBMARAPRMAYJUNJULAUGSEP29162329162330613202741118251815222961320273101724317142128UI RefreshCore screensPolishSplit faresInternalPublic BetaAutonomy "

- **`<div>`** .hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "FEBMARAPRMAYJUNJULAUGSEP29162329162330613202741118251815222961320273101724317142128UI RefreshCore screensPolishSplit faresInternalPublic BetaAutonomy "

- **`<div>`** .page_container__YSA5u.Plan_container__bCkp7
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 22px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1344px | padding: 8px | opacity: 1
  - anim: all
  - text: "FEBMARAPRMAYJUNJULAUGSEP29162329162330613202741118251815222961320273101724317142128UI RefreshCore screensPolishSplit faresInternalPublic BetaAutonomy "

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Issue count by created date181614121086420Feb 2025May 2025Aug 2025Nov 2025Cycle time by agentCursorCodexNo AgentWeekly Pulse for May 30Listen1.0×Proje"

- **`<div>`** .hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "Issue count by created date181614121086420Feb 2025May 2025Aug 2025Nov 2025Cycle time by agentCursorCodexNo AgentWeekly Pulse for May 30Listen1.0×Proje"

- **`<div>`** .page_panel__h_tIJ.Plan_panel__xLKqj
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(15, 16, 17) | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | shadow: rgb(35, 37, 42) 0px 0px 0px 1px inset | display: flex | width: 1326px | opacity: 1
  - anim: all
  - text: "FEBMARAPRMAYJUNJULAUGSEP29162329162330613202741118251815222961320273101724317142128UI RefreshCore screensPolishSplit faresInternalPublic BetaAutonomy "

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "kinetic-ios/src/screens/Home/HomeScreen.tsxkinetic-ios/src/HomeScreen.tsxLinearimport React from 'react'import { View, ActivityIndicator } from 'react"

- **`<div>`** .page_container__YSA5u.DiffsIllustration_reviewsContainer__W86nX
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 22px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1344px | padding: 8px | opacity: 1
  - anim: all
  - text: "kinetic-ios/src/screens/Home/HomeScreen.tsxkinetic-ios/src/HomeScreen.tsxLinearimport React from 'react'import { View, ActivityIndicator } from 'react"

- **`<div>`** .page_panel__h_tIJ
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(15, 16, 17) | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | shadow: rgb(35, 37, 42) 0px 0px 0px 1px inset | display: block | width: 1326px | opacity: 1
  - anim: all
  - text: "kinetic-ios/src/screens/Home/HomeScreen.tsxkinetic-ios/src/HomeScreen.tsxLinearimport React from 'react'import { View, ActivityIndicator } from 'react"

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | display: block | width: 1324px | opacity: 0.6
  - anim: all

- **`<div>`** .PageSection_illustration__P1Yb9
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "CodexOn it! I've received your request.Kicked off a task in kinetic/kinetic-iOS environment.Searching for root AGENTS filekinetic/kinetic-iOS$ /bin/ba"

- **`<div>`** .Build_agentsContainerWrapper___UD1Y.hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | opacity: 1
  - anim: all
  - text: "CodexOn it! I've received your request.Kicked off a task in kinetic/kinetic-iOS environment.Searching for root AGENTS filekinetic/kinetic-iOS$ /bin/ba"

- **`<div>`** .page_container__YSA5u.Build_agentsContainer__U8YFA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 22px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1344px | padding: 8px | opacity: 1
  - anim: all
  - text: "CodexOn it! I've received your request.Kicked off a task in kinetic/kinetic-iOS environment.Searching for root AGENTS filekinetic/kinetic-iOS$ /bin/ba"

- **`<div>`** .page_panel__h_tIJ.Build_agentsPanel___o9Ez
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(15, 16, 17) | radius: 12px 12px 0px 0px | border: 0px none rgb(247, 248, 248) | shadow: rgb(35, 37, 42) 0px 0px 0px 1px inset | display: block | width: 1326px | opacity: 1
  - anim: all
  - text: "CodexOn it! I've received your request.Kicked off a task in kinetic/kinetic-iOS environment.Searching for root AGENTS filekinetic/kinetic-iOS$ /bin/ba"

### HTML Structure

```html
<div class="LayoutContent_root__ZBUya LayoutContent_homepage__alayp"><div><div class="hide-laptop Spacer_root__uoSvA" style="--height:200px"></div><div class="show-laptop hide-desktop Spacer_root__uoSvA" style="--height:124px"></div><div class="show-laptop hide-mobile Spacer_root__uoSvA" style="--height:92px"></div><div class="show-mobile Spacer_root__uoSvA" style="--height:132px"></div><div class="Hero_container__inGFW utils_inset__Xhl3T"><h1 class="sc-d5151d0-0 bgDIHX utils_insetLarge__6UCke Hero_title__sHOGp"><span aria-hidden="true"><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="show-mobile">The product</span><span class="show-mobile"> </span><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="show-mobile">development</span><span class="show-mobile"> </span><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="show-mobile">system for teams</span><span class="show-mobile"> </span><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="show-mobile">and agents</span><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="hide-mobile">The product development</span><br class="hide-mobile"><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="hide-mobile">system for teams and agents</span></span><span class="utils_visuallyHidden__DJ_eB">The product development system for teams and agents</span></h1><div class="hide-laptop Spacer_root__uoSvA" style="--height:32px"></div><div class="show-laptop Spacer_root__uoSvA" style="--height:20px"></div><div class="Hero_descriptionContainer__PeKJU Flex_root__DOQCW Flex_justify-space-between__Txsv7"><p class="sc-d5151d0-0 dhJTq"><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="Hero_description__Clw_0">Purpose-built for planning and building products. Designed for the AI era.</span></p><a class="hide-mobile Hero_newFeatureLink__PHt6b Link_root__cNtak" rel="noopener" href="/next"><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)"><div class="Flex_root__DOQCW Flex_align-center__oXK9F" style="gap:12px"><div class="Hero_pulseDot__oDuNr"></div><span class="sc-d5151d0-0 ha-DKfc">Issue tracking is dead</span><span class="sc-d5151d0-0 eBXKXP">linear.app/next<span style="color:var(--color-text-quaternary)"> →</span></span></div></span></a></div></div><div class="hide-laptop Spacer_root__uoSvA" style="--height:70px"></div><div class="show-laptop hide-mobile Spacer_root__uoSvA" style="--height:70px"></div><div class="show-mobile Spacer_root__uoSvA" style="--height:36px"></div><div class="Bleed_root__EzNZN"><div class="Frame_wrapper___hKDg" aria-label="A screenshot of the Linear app showing the issue that's currently in progress"><div class="Frame_background__iLZh4" aria-hidden="true" style="opacity:0"><img data-grain="true" alt="" data-nosnippet="true" data-loaded="true" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent;opacity:0.08;height:100%" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7b144b7-4ef0-4991-9bcb-617c6a37d200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div><div class="Frame_shadows__GaJIa hide-laptop" style="opacity:0"><img alt="" data-nosnippet="true" data-loaded="false" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/6600ca96-e49b-4fd9-c03a-7979faddad00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div><div class="Frame_shade__XyqbT hide-laptop" style="opacity:0"><img alt="" data-nosnippet="true" data-loaded="false" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7fa8f5f-d439-4329-6a65-de549b51e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div><div class="Frame_frameWrapper__I7Olr" style="opacity:0"><div class="Frame_frame__xbIar" data-frame="true"><div class="Frame_frameBackground__YBrog" style="opacity:0"></div><div class="Grain_grain__0LR5u Grain_grainSubtle__LzX_q" style="inset:1px"></div><nav class="Sidebar_sidebar__yeDLZ" style="opacity:0"><div class="Flex_root__DOQCW Flex_align-center__oXK9F Flex_justify-space-between__Txsv7"><button type="button" tabindex="0" aria-haspopup="menu" id="base-ui-_R_1lkl943binpfcqlb_" class="Sidebar_switchWorkspaceButton__QuP7W" aria-expanded="false"><span class="Sidebar_logoWrapper__ddfQJ"><svg width="13" height="13" viewBox="0 0 100 100" fill="#E2E4E6" aria-label="Linear logo" color="#E2E4E6"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"></path></svg></span><span class="sc-d5151d0-0 fQidsy">Linear</span><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:var(--label-faint)" fill="var(--label-faint)"><path d="M4.53 5.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.054.007l4-3.903a.75.75 0 0 0-1.048-1.073l-3.47 3.385L4.53 5.47Z"></path></svg></button><div class="Flex_root__DOQCW" style="gap:6px"><button class="Sidebar_searchButton__I0_9C" aria-label="Search workspace" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C9.76142 2 12 4.23858 12 7C12 8.11012 11.6375 9.13519 11.0254 9.96484L13.7803 12.7197L13.832 12.7764C14.0723 13.0709 14.0549 13.5057 13.7803 13.7803C13.5057 14.0549 13.0709 14.0723 12.7764 13.832L12.7197 13.7803L9.96484 11.0254C9.13519 11.6375 8.11012 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2ZM7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5Z"></path></svg></button><button class="Sidebar_newIssueButton__j96TX" aria-label="New issue" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 1C7.66414 1 7.99988 1.33589 8 1.75C8 2.16421 7.66421 2.5 7.25 2.5H4.75C3.50745 2.5 2.50012 3.50744 2.5 4.75V11.25C2.5 12.4926 3.50736 13.5 4.75 13.5H11.25C12.4926 13.5 13.5 12.4926 13.5 11.25V8.75C13.5001 8.33589 13.8359 8 14.25 8C14.6641 8 14.9999 8.33589 15
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 23: Pricing
- **Confidence:** 55%
- **Tag:** div
- **Classes:** `div`
- **Size:** full viewport height
- **Headings:** H1: "The product development system for teams and agentsThe product developmentsystem for teams and agentsThe product development system for teams and agen"; H3: "Faster app launch"; H4: "Activity"
- **CTAs:** Issue tracking is deadlinear.app/next →, Linear, Inbox, My issues, Reviews
- **Media:** 10 image(s), 36 SVG(s)
- **Animations:**
  - `div`.Frame_shade__XyqbT: transition: all; transform: matrix(1, 0, 0, 1, -720, 0)
  - `img`.Image_root__UkRqc: transition: all
  - `div`.Bleed_root__EzNZN: transition: all
  - `div`.Frame_wrapper___hKDg: transition: all
  - `div`.Frame_background__iLZh4: transition: all
  - `img`.Image_root__UkRqc: transition: all
  - `div`.Frame_frameWrapper__I7Olr: transition: all
  - `div`.Frame_frame__xbIar: transition: all
  - `div`.Frame_frameBackground__YBrog: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.Frame_view__tT3ze: transition: all
  - `div`.Hero_container__inGFW: transition: all
  - `h1`.sc-d5151d0-0: transition: all
  - `span`: transition: all
  - `span`.hide-mobile: transition: all; transform: matrix(1, 0, 0, 1, 0, 12.8)
  - `span`.hide-mobile: transition: all; transform: matrix(1, 0, 0, 1, 0, 12.8)
  - `div`.Hero_descriptionContainer__PeKJU: transition: all
  - `p`.sc-d5151d0-0: transition: all
  - `span`.Hero_description__Clw_0: transition: all; transform: matrix(1, 0, 0, 1, 0, 4.8)
  - `a`.hide-mobile: transition: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - `span`: transition: all; transform: matrix(1, 0, 0, 1, 0, 4.8)
  - `div`.Flex_root__DOQCW: transition: all
  - `div`.hide-laptop: transition: all
  - `div`.hide-laptop: transition: all
  - `div`.hide-laptop: transition: all
  - `span`.utils_visuallyHidden__DJ_eB: transition: all
  - `div`.show-laptop: transition: all
  - `div`.show-laptop: transition: all
  - `div`.show-mobile: transition: all
  - `div`.show-laptop: transition: all

### Element Style Blueprint

- **`<div>`** .Frame_shade__XyqbT.hide-laptop
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1440px | opacity: 0
  - anim: all | matrix(1, 0, 0, 1, -720, 0)

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | border: 0px none rgba(0, 0, 0, 0) | display: block | width: 1440px | opacity: 1
  - anim: all
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7fa8f5f-d439-4329-6a65-de549b51e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

- **`<div>`** .Bleed_root__EzNZN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | margin: 0px -720px | opacity: 1
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_wrapper___hKDg
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 6px | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | padding: 0px 0px 48px | opacity: 1
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_background__iLZh4
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 6px | border: 0px none rgb(247, 248, 248) | display: block | width: 1416px | opacity: 0
  - anim: all

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | border: 0px none rgba(0, 0, 0, 0) | display: inline | width: 1416px | opacity: 0.08
  - anim: all
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7b144b7-4ef0-4991-9bcb-617c6a37d200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

- **`<div>`** .Frame_frameWrapper__I7Olr
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | padding: 0px 60px | opacity: 0.333797
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_frame__xbIar
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(9, 10, 11) | radius: 12px | border: 0px none rgb(247, 248, 248) | display: grid | width: 1320px | padding: 8px | opacity: 1
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_frameBackground__YBrog
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(16, 17, 18) | radius: 12px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1320px | opacity: 0
  - anim: all

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 0px none rgb(247, 248, 248) | display: block | width: 1318px | opacity: 0.6
  - anim: all

- **`<div>`** .Frame_view__tT3ze
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(18, 19, 20) | radius: 7px | border: 1px solid rgba(255, 255, 255, 0.08) | shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 2px | display: block | width: 1072px | opacity: 0
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`** .Hero_container__inGFW.utils_inset__Xhl3T
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1344px | padding: 0px 32px | opacity: 1
  - anim: all
  - text: "The product development system for teams and agentsThe product developmentsystem for teams and agentsThe product development system for teams and agen"

- **`<h1>`** .sc-d5151d0-0.bgDIHX
  - font: 64px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 64px | ls: -1.408px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1282px | margin: 0px 0px 0px -2px | opacity: 1
  - anim: all
  - text: "The product development system for teams and agentsThe product developmentsystem for teams and agentsThe product development system for teams and agen"

- **`<span>`**
  - font: 64px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 64px | ls: -1.408px | text-align: start | border: 0px none rgb(247, 248, 248) | display: inline | opacity: 1
  - anim: all
  - text: "The product development system for teams and agentsThe product developmentsystem for teams and agents"

- **`<span>`** .hide-mobile
  - font: 64px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 64px | ls: -1.408px | text-align: start | border: 0px none rgb(247, 248, 248) | display: inline-block | width: 783.672px | opacity: 0
  - anim: all | matrix(1, 0, 0, 1, 0, 12.8)
  - text: "system for teams and agents"

- **`<span>`** .hide-mobile
  - font: 64px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 64px | ls: -1.408px | text-align: start | border: 0px none rgb(247, 248, 248) | display: inline-block | width: 702.672px | opacity: 0
  - anim: all | matrix(1, 0, 0, 1, 0, 12.8)
  - text: "The product development"

- **`<div>`** .Hero_descriptionContainer__PeKJU.Flex_root__DOQCW
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 1280px | opacity: 1
  - anim: all
  - text: "Purpose-built for planning and building products. Designed for the AI era.Issue tracking is deadlinear.app/next →"

- **`<p>`** .sc-d5151d0-0.dhJTq
  - font: 15px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(138, 143, 152) | lh: 24px | ls: -0.165px | text-align: start | border: 0px none rgb(138, 143, 152) | display: block | width: 505.047px | opacity: 1
  - anim: all
  - text: "Purpose-built for planning and building products. Designed for the AI era."

- **`<span>`** .Hero_description__Clw_0
  - font: 15px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(138, 143, 152) | lh: 24px | ls: -0.165px | text-align: start | border: 0px none rgb(138, 143, 152) | display: inline-block | width: 505.047px | opacity: 0
  - anim: all | matrix(1, 0, 0, 1, 0, 4.8)
  - text: "Purpose-built for planning and building products. Designed for the AI era."

- **`<a>`** .hide-mobile.Hero_newFeatureLink__PHt6b
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 312.781px | opacity: 1
  - anim: filter 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - href: https://linear.app/next
  - text: "Issue tracking is deadlinear.app/next →"

- **`<span>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: inline-block | width: 312.781px | opacity: 0
  - anim: all | matrix(1, 0, 0, 1, 0, 4.8)
  - text: "Issue tracking is deadlinear.app/next →"

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 312.781px | opacity: 1
  - anim: all
  - text: "Issue tracking is deadlinear.app/next →"

- **`<div>`** .hide-laptop.Spacer_root__uoSvA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1px | margin: 199px 0px 0px -1px | opacity: 1
  - anim: all

- **`<div>`** .hide-laptop.Spacer_root__uoSvA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1px | margin: 69px 0px 0px -1px | opacity: 1
  - anim: all

- **`<div>`** .hide-laptop.Spacer_root__uoSvA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1px | margin: 31px 0px 0px -1px | opacity: 1
  - anim: all

- **`<span>`** .utils_visuallyHidden__DJ_eB
  - font: 64px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 64px | ls: -1.408px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1px | margin: -1px | opacity: 1
  - anim: all
  - text: "The product development system for teams and agents"

- **`<div>`** .show-laptop.hide-desktop
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | width: 1px | margin: 123px 0px 0px -1px | opacity: 1
  - anim: all

- **`<div>`** .show-laptop.hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | width: 1px | margin: 91px 0px 0px -1px | opacity: 1
  - anim: all

- **`<div>`** .show-mobile.Spacer_root__uoSvA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | width: 1px | margin: 131px 0px 0px -1px | opacity: 1
  - anim: all

- **`<div>`** .show-laptop.hide-mobile
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | width: 1px | margin: 69px 0px 0px -1px | opacity: 1
  - anim: all

### HTML Structure

```html
<div><div class="hide-laptop Spacer_root__uoSvA" style="--height:200px"></div><div class="show-laptop hide-desktop Spacer_root__uoSvA" style="--height:124px"></div><div class="show-laptop hide-mobile Spacer_root__uoSvA" style="--height:92px"></div><div class="show-mobile Spacer_root__uoSvA" style="--height:132px"></div><div class="Hero_container__inGFW utils_inset__Xhl3T"><h1 class="sc-d5151d0-0 bgDIHX utils_insetLarge__6UCke Hero_title__sHOGp"><span aria-hidden="true"><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="show-mobile">The product</span><span class="show-mobile"> </span><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="show-mobile">development</span><span class="show-mobile"> </span><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="show-mobile">system for teams</span><span class="show-mobile"> </span><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="show-mobile">and agents</span><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="hide-mobile">The product development</span><br class="hide-mobile"><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="hide-mobile">system for teams and agents</span></span><span class="utils_visuallyHidden__DJ_eB">The product development system for teams and agents</span></h1><div class="hide-laptop Spacer_root__uoSvA" style="--height:32px"></div><div class="show-laptop Spacer_root__uoSvA" style="--height:20px"></div><div class="Hero_descriptionContainer__PeKJU Flex_root__DOQCW Flex_justify-space-between__Txsv7"><p class="sc-d5151d0-0 dhJTq"><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)" class="Hero_description__Clw_0">Purpose-built for planning and building products. Designed for the AI era.</span></p><a class="hide-mobile Hero_newFeatureLink__PHt6b Link_root__cNtak" rel="noopener" href="/next"><span style="display:inline-block;opacity:0;filter:blur(10px);transform:translateY(20%)"><div class="Flex_root__DOQCW Flex_align-center__oXK9F" style="gap:12px"><div class="Hero_pulseDot__oDuNr"></div><span class="sc-d5151d0-0 ha-DKfc">Issue tracking is dead</span><span class="sc-d5151d0-0 eBXKXP">linear.app/next<span style="color:var(--color-text-quaternary)"> →</span></span></div></span></a></div></div><div class="hide-laptop Spacer_root__uoSvA" style="--height:70px"></div><div class="show-laptop hide-mobile Spacer_root__uoSvA" style="--height:70px"></div><div class="show-mobile Spacer_root__uoSvA" style="--height:36px"></div><div class="Bleed_root__EzNZN"><div class="Frame_wrapper___hKDg" aria-label="A screenshot of the Linear app showing the issue that's currently in progress"><div class="Frame_background__iLZh4" aria-hidden="true" style="opacity:0"><img data-grain="true" alt="" data-nosnippet="true" data-loaded="true" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent;opacity:0.08;height:100%" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7b144b7-4ef0-4991-9bcb-617c6a37d200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div><div class="Frame_shadows__GaJIa hide-laptop" style="opacity:0"><img alt="" data-nosnippet="true" data-loaded="false" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/6600ca96-e49b-4fd9-c03a-7979faddad00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div><div class="Frame_shade__XyqbT hide-laptop" style="opacity:0"><img alt="" data-nosnippet="true" data-loaded="false" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7fa8f5f-d439-4329-6a65-de549b51e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div><div class="Frame_frameWrapper__I7Olr" style="opacity:0"><div class="Frame_frame__xbIar" data-frame="true"><div class="Frame_frameBackground__YBrog" style="opacity:0"></div><div class="Grain_grain__0LR5u Grain_grainSubtle__LzX_q" style="inset:1px"></div><nav class="Sidebar_sidebar__yeDLZ" style="opacity:0"><div class="Flex_root__DOQCW Flex_align-center__oXK9F Flex_justify-space-between__Txsv7"><button type="button" tabindex="0" aria-haspopup="menu" id="base-ui-_R_1lkl943binpfcqlb_" class="Sidebar_switchWorkspaceButton__QuP7W" aria-expanded="false"><span class="Sidebar_logoWrapper__ddfQJ"><svg width="13" height="13" viewBox="0 0 100 100" fill="#E2E4E6" aria-label="Linear logo" color="#E2E4E6"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"></path></svg></span><span class="sc-d5151d0-0 fQidsy">Linear</span><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:var(--label-faint)" fill="var(--label-faint)"><path d="M4.53 5.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.054.007l4-3.903a.75.75 0 0 0-1.048-1.073l-3.47 3.385L4.53 5.47Z"></path></svg></button><div class="Flex_root__DOQCW" style="gap:6px"><button class="Sidebar_searchButton__I0_9C" aria-label="Search workspace" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C9.76142 2 12 4.23858 12 7C12 8.11012 11.6375 9.13519 11.0254 9.96484L13.7803 12.7197L13.832 12.7764C14.0723 13.0709 14.0549 13.5057 13.7803 13.7803C13.5057 14.0549 13.0709 14.0723 12.7764 13.832L12.7197 13.7803L9.96484 11.0254C9.13519 11.6375 8.11012 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2ZM7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5Z"></path></svg></button><button class="Sidebar_newIssueButton__j96TX" aria-label="New issue" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 1C7.66414 1 7.99988 1.33589 8 1.75C8 2.16421 7.66421 2.5 7.25 2.5H4.75C3.50745 2.5 2.50012 3.50744 2.5 4.75V11.25C2.5 12.4926 3.50736 13.5 4.75 13.5H11.25C12.4926 13.5 13.5 12.4926 13.5 11.25V8.75C13.5001 8.33589 13.8359 8 14.25 8C14.6641 8 14.9999 8.33589 15 8.75V11.25C15 13.3211 13.3211 15 11.25 15H4.75C2.67893 15 1 13.3211 
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 24: Showcase
- **Confidence:** 40%
- **Tag:** div
- **Classes:** `Bleed_root__EzNZN`
- **Size:** 768px height
- **Headings:** H3: "Faster app launch"; H4: "Activity"
- **CTAs:** Linear, Inbox, My issues, Reviews, Pulse
- **Media:** 10 image(s), 36 SVG(s)
- **Animations:**
  - `div`.Frame_shade__XyqbT: transition: all; transform: matrix(1, 0, 0, 1, -720, 0)
  - `img`.Image_root__UkRqc: transition: all
  - `div`.Frame_wrapper___hKDg: transition: all
  - `div`.Frame_background__iLZh4: transition: all
  - `img`.Image_root__UkRqc: transition: all
  - `div`.Frame_frameWrapper__I7Olr: transition: all
  - `div`.Frame_frame__xbIar: transition: all
  - `div`.Frame_frameBackground__YBrog: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Frame_view__tT3ze: transition: all
  - `div`: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.Frame_glow__ZBzzr: transition: all; transform: matrix(1, 0, 0, 1, -200, -200)
  - `div`: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `div`.Spacer_root__uoSvA: transition: all
  - `div`.Frame_shadows__GaJIa: transition: all
  - `img`.Image_root__UkRqc: transition: all
  - `div`: transition: all
  - `div`: transition: all

### Element Style Blueprint

- **`<div>`** .Frame_shade__XyqbT.hide-laptop
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1440px | opacity: 0
  - anim: all | matrix(1, 0, 0, 1, -720, 0)

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | border: 0px none rgba(0, 0, 0, 0) | display: block | width: 1440px | opacity: 1
  - anim: all
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7fa8f5f-d439-4329-6a65-de549b51e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

- **`<div>`** .Frame_wrapper___hKDg
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 6px | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | padding: 0px 0px 48px | opacity: 1
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_background__iLZh4
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 6px | border: 0px none rgb(247, 248, 248) | display: block | width: 1416px | opacity: 0
  - anim: all

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | border: 0px none rgba(0, 0, 0, 0) | display: inline | width: 1416px | opacity: 0.08
  - anim: all
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7b144b7-4ef0-4991-9bcb-617c6a37d200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

- **`<div>`** .Frame_frameWrapper__I7Olr
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | padding: 0px 60px | opacity: 0.333797
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_frame__xbIar
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(9, 10, 11) | radius: 12px | border: 0px none rgb(247, 248, 248) | display: grid | width: 1320px | padding: 8px | opacity: 1
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_frameBackground__YBrog
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(16, 17, 18) | radius: 12px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1320px | opacity: 0
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 1px solid rgb(50, 51, 52) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB.Frame_shineScroll__lRFOP
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 1px solid rgb(56, 59, 63) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 0px none rgb(247, 248, 248) | display: block | width: 1318px | opacity: 0.6
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB.Frame_shineInner__wPfoO
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 8px | border: 1px solid rgb(56, 59, 63) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB.Frame_shineInner__wPfoO
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 8px | border: 1px solid rgb(56, 59, 63) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Frame_view__tT3ze
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(18, 19, 20) | radius: 7px | border: 1px solid rgba(255, 255, 255, 0.08) | shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 2px | display: block | width: 1072px | opacity: 0
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1070px | opacity: 1
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 7px | border: 0px none rgb(247, 248, 248) | display: block | width: 1068px | opacity: 0.6
  - anim: all

- **`<div>`** .Frame_glow__ZBzzr
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 400px | border: 0px none rgb(247, 248, 248) | display: block | width: 400px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -200, -200)

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 210px | opacity: 0.8
  - anim: all
  - text: "InboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents Insights"

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 210px | opacity: 1
  - anim: all
  - text: "Linear"

- **`<div>`** .Spacer_root__uoSvA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1px | margin: 11px 0px 0px 1319px | opacity: 1
  - anim: all

- **`<div>`** .Frame_shadows__GaJIa.hide-laptop
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | width: 1920px | opacity: 0
  - anim: all

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | border: 0px none rgba(0, 0, 0, 0) | display: inline | width: 1920px | opacity: 1
  - anim: all
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/6600ca96-e49b-4fd9-c03a-7979faddad00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | opacity: 0
  - anim: all

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | opacity: 0
  - anim: all

### HTML Structure

```html
<div class="Bleed_root__EzNZN"><div class="Frame_wrapper___hKDg" aria-label="A screenshot of the Linear app showing the issue that's currently in progress"><div class="Frame_background__iLZh4" aria-hidden="true" style="opacity:0"><img data-grain="true" alt="" data-nosnippet="true" data-loaded="true" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent;opacity:0.08;height:100%" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7b144b7-4ef0-4991-9bcb-617c6a37d200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div><div class="Frame_shadows__GaJIa hide-laptop" style="opacity:0"><img alt="" data-nosnippet="true" data-loaded="false" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/6600ca96-e49b-4fd9-c03a-7979faddad00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div><div class="Frame_shade__XyqbT hide-laptop" style="opacity:0"><img alt="" data-nosnippet="true" data-loaded="false" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7fa8f5f-d439-4329-6a65-de549b51e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div><div class="Frame_frameWrapper__I7Olr" style="opacity:0"><div class="Frame_frame__xbIar" data-frame="true"><div class="Frame_frameBackground__YBrog" style="opacity:0"></div><div class="Grain_grain__0LR5u Grain_grainSubtle__LzX_q" style="inset:1px"></div><nav class="Sidebar_sidebar__yeDLZ" style="opacity:0"><div class="Flex_root__DOQCW Flex_align-center__oXK9F Flex_justify-space-between__Txsv7"><button type="button" tabindex="0" aria-haspopup="menu" id="base-ui-_R_1lkl943binpfcqlb_" class="Sidebar_switchWorkspaceButton__QuP7W" aria-expanded="false"><span class="Sidebar_logoWrapper__ddfQJ"><svg width="13" height="13" viewBox="0 0 100 100" fill="#E2E4E6" aria-label="Linear logo" color="#E2E4E6"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"></path></svg></span><span class="sc-d5151d0-0 fQidsy">Linear</span><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:var(--label-faint)" fill="var(--label-faint)"><path d="M4.53 5.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.054.007l4-3.903a.75.75 0 0 0-1.048-1.073l-3.47 3.385L4.53 5.47Z"></path></svg></button><div class="Flex_root__DOQCW" style="gap:6px"><button class="Sidebar_searchButton__I0_9C" aria-label="Search workspace" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C9.76142 2 12 4.23858 12 7C12 8.11012 11.6375 9.13519 11.0254 9.96484L13.7803 12.7197L13.832 12.7764C14.0723 13.0709 14.0549 13.5057 13.7803 13.7803C13.5057 14.0549 13.0709 14.0723 12.7764 13.832L12.7197 13.7803L9.96484 11.0254C9.13519 11.6375 8.11012 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2ZM7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5Z"></path></svg></button><button class="Sidebar_newIssueButton__j96TX" aria-label="New issue" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 1C7.66414 1 7.99988 1.33589 8 1.75C8 2.16421 7.66421 2.5 7.25 2.5H4.75C3.50745 2.5 2.50012 3.50744 2.5 4.75V11.25C2.5 12.4926 3.50736 13.5 4.75 13.5H11.25C12.4926 13.5 13.5 12.4926 13.5 11.25V8.75C13.5001 8.33589 13.8359 8 14.25 8C14.6641 8 14.9999 8.33589 15 8.75V11.25C15 13.3211 13.3211 15 11.25 15H4.75C2.67893 15 1 13.3211 1 11.25V4.75C1.00012 2.67905 2.67899 1 4.75 1H7.25Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4326 1.26953C13.7913 0.910937 14.3728 0.910883 14.7314 1.26953C15.0897 1.6282 15.0899 2.20981 14.7314 2.56836L9.2373 8.06152C8.68101 8.6177 7.94043 8.95161 7.15527 9C7.06754 9.0052 6.99468 8.93248 7 8.84473C7.04847 8.05961 7.38232 7.31897 7.93848 6.7627L13.4326 1.26953Z"></path></svg></button></div></div><div class="Spacer_root__uoSvA" style="--height:12px"></div><div style="opacity:0.8"><div class="Sidebar_navItems__XOSSV"><button data-active="false" data-interactive="true" class="Sidebar_navItem__vdR_h"><svg width="14" height="14" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:#9c9da1" fill="#9c9da1"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0069 1.00879C12.0235 1.09224 12.8967 1.78967 13.1944 2.78027L14.8907 8.42871C15.0034 8.80411 15.0258 9.20103 14.9571 9.58691L14.5069 12.1143L14.4375 12.4219C14.0542 13.8306 12.8312 14.8559 11.378 14.9863L11.0625 15H4.92875L4.6143 14.9863C3.16087 14.8561 1.93819 13.8307 1.55473 12.4219L1.48539 12.1143L1.03422 9.58691C0.974045 9.24914 0.984493 8.90311 1.06352 8.57031L1.1016 8.42871L2.79691 2.78027C3.09453 1.78948 3.96862 1.09214 4.98539 1.00879L5.19047 1H10.8018L11.0069 1.00879ZM2.96098 11.8516C3.13119 12.8053 3.96043 13.4999 4.92875 13.5H11.0625C12.031 13.5 12.8611 12.8054 13.0313 11.8516L13.2715 10.5H11.6211C11.2249 10.5 10.8512 10.6738 10.5957 10.9697L10.4932 11.1035C10.1201 11.6634 9.49195 11.9999 8.81938 12H7.17191C6.54154 11.9998 5.95019 11.7042 5.57133 11.2061L5.49809 11.1035C5.24687 10.7266 4.82396 10.5 4.37113 10.5H2.71977L2.96098 11.8516ZM5.19047 2.5C4.80433 2.50005 4.45748 2.72173 4.29203 3.06055L4.23246 3.21191L2.53715 8.86035C2.5234 8.90613 2.514 8.95293 2.50688 9H4.37113C5.32524 9.00001 6.21689 9.47715 6.74613 10.2715L6.78422 10.3223C6.88083 10.4341 7.02214 10.4998 7.17191 10.5H8.81938C8.99076 10.4999 9.15106 10.4142 9.24613 10.2715L9.34965 10.126C9.88713 9.41919 10.7268 9 11.6211 9H13.4854C13.4785 8.95295 13.4689 8.90616 13.4551 8.86035L11.7588 3.21191C11.6318 2.78947 11.2427 2.50018 10.8018 2.5H5.19047Z"></path></svg><span>Inbox</span></button><button data-active="false" data-interactive="true" class="Sidebar_navItem__vdR_h"><svg width="14" height="14" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:#9c9da1" fill="#9c9d
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 25: Showcase
- **Confidence:** 40%
- **Tag:** div
- **Classes:** `Frame_wrapper___hKDg`
- **Size:** 768px height
- **Padding:** 0px 0px 48px
- **Headings:** H3: "Faster app launch"; H4: "Activity"
- **CTAs:** Linear, Inbox, My issues, Reviews, Pulse
- **Media:** 10 image(s), 36 SVG(s)
- **Animations:**
  - `div`.Frame_shade__XyqbT: transition: all; transform: matrix(1, 0, 0, 1, -720, 0)
  - `img`.Image_root__UkRqc: transition: all
  - `div`.Frame_background__iLZh4: transition: all
  - `img`.Image_root__UkRqc: transition: all
  - `div`.Frame_frameWrapper__I7Olr: transition: all
  - `div`.Frame_frame__xbIar: transition: all
  - `div`.Frame_frameBackground__YBrog: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Frame_view__tT3ze: transition: all
  - `div`: transition: all
  - `div`.SharedViewStyles_wrapperWithSidebar__mgB8H: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.Frame_glow__ZBzzr: transition: all; transform: matrix(1, 0, 0, 1, -200, -200)
  - `div`: transition: all
  - `div`.Sidebar_navItems__XOSSV: transition: all
  - `div`.Sidebar_navItems__XOSSV: transition: all
  - `div`.Sidebar_navItems__XOSSV: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_switchWorkspaceButton__QuP7W: transition: background 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - `div`.Flex_root__DOQCW: transition: all
  - `div`.Spacer_root__uoSvA: transition: all
  - `div`.Spacer_root__uoSvA: transition: all
  - `div`.Spacer_root__uoSvA: transition: all
  - `div`.Frame_shadows__GaJIa: transition: all

### Element Style Blueprint

- **`<div>`** .Frame_shade__XyqbT.hide-laptop
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1440px | opacity: 0
  - anim: all | matrix(1, 0, 0, 1, -720, 0)

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | border: 0px none rgba(0, 0, 0, 0) | display: block | width: 1440px | opacity: 1
  - anim: all
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7fa8f5f-d439-4329-6a65-de549b51e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

- **`<div>`** .Frame_background__iLZh4
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 6px | border: 0px none rgb(247, 248, 248) | display: block | width: 1416px | opacity: 0
  - anim: all

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | border: 0px none rgba(0, 0, 0, 0) | display: inline | width: 1416px | opacity: 0.08
  - anim: all
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7b144b7-4ef0-4991-9bcb-617c6a37d200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

- **`<div>`** .Frame_frameWrapper__I7Olr
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1440px | padding: 0px 60px | opacity: 0.333797
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_frame__xbIar
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(9, 10, 11) | radius: 12px | border: 0px none rgb(247, 248, 248) | display: grid | width: 1320px | padding: 8px | opacity: 1
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_frameBackground__YBrog
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(16, 17, 18) | radius: 12px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1320px | opacity: 0
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 1px solid rgb(50, 51, 52) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB.Frame_shineScroll__lRFOP
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 1px solid rgb(56, 59, 63) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 0px none rgb(247, 248, 248) | display: block | width: 1318px | opacity: 0.6
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB.Frame_shineInner__wPfoO
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 8px | border: 1px solid rgb(56, 59, 63) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB.Frame_shineInner__wPfoO
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 8px | border: 1px solid rgb(56, 59, 63) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Frame_view__tT3ze
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(18, 19, 20) | radius: 7px | border: 1px solid rgba(255, 255, 255, 0.08) | shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 2px | display: block | width: 1072px | opacity: 0
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1070px | opacity: 1
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`** .SharedViewStyles_wrapperWithSidebar__mgB8H
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1070px | opacity: 1
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 7px | border: 0px none rgb(247, 248, 248) | display: block | width: 1068px | opacity: 0.6
  - anim: all

- **`<div>`** .Frame_glow__ZBzzr
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 400px | border: 0px none rgb(247, 248, 248) | display: block | width: 400px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -200, -200)

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 210px | opacity: 0.8
  - anim: all
  - text: "InboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents Insights"

- **`<div>`** .Sidebar_navItems__XOSSV
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 210px | opacity: 1
  - anim: all
  - text: "InboxMy issuesReviewsPulse"

- **`<div>`** .Sidebar_navItems__XOSSV
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 210px | opacity: 1
  - anim: all
  - text: "Faster app launchAgent tasksUI RefreshAgents Insights"

- **`<div>`** .Sidebar_navItems__XOSSV
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 210px | opacity: 1
  - anim: all
  - text: "InitiativesProjectsMore"

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 210px | opacity: 1
  - anim: all
  - text: "Linear"

- **`<button>`** .Sidebar_navItem__vdR_h.Sidebar_collapsible__A_zZf
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | radius: 6px | border: 0px none rgb(98, 102, 109) | display: flex | width: 210px | padding: 0px 6px 0px 4px | opacity: 1
  - anim: all
  - text: "Workspace"

- **`<button>`** .Sidebar_navItem__vdR_h.Sidebar_collapsible__A_zZf
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | radius: 6px | border: 0px none rgb(98, 102, 109) | display: flex | width: 210px | padding: 0px 6px 0px 4px | opacity: 1
  - anim: all
  - text: "Favorites"

- **`<button>`** .Sidebar_switchWorkspaceButton__QuP7W #base-ui-_R_1lkl943binpfcqlb_
  - font: 13.3333px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(255, 255, 255) | text-align: center | radius: 4px | border: 0px none rgb(255, 255, 255) | display: flex | width: 97.0156px | padding: 0px 4px | opacity: 1
  - anim: background 0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - text: "Linear"

- **`<div>`** .Flex_root__DOQCW
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 62px | opacity: 1
  - anim: all

- **`<div>`** .Spacer_root__uoSvA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1px | margin: 11px 0px 0px 1319px | opacity: 1
  - anim: all

- **`<div>`** .Spacer_root__uoSvA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1px | margin: 11px 0px 0px 1319px | opacity: 1
  - anim: all

- **`<div>`** .Spacer_root__uoSvA
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1px | margin: 11px 0px 0px 1319px | opacity: 1
  - anim: all

- **`<div>`** .Frame_shadows__GaJIa.hide-laptop
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | width: 1920px | opacity: 0
  - anim: all

### HTML Structure

```html
<div class="Frame_wrapper___hKDg" aria-label="A screenshot of the Linear app showing the issue that's currently in progress"><div class="Frame_background__iLZh4" aria-hidden="true" style="opacity:0"><img data-grain="true" alt="" data-nosnippet="true" data-loaded="true" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent;opacity:0.08;height:100%" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7b144b7-4ef0-4991-9bcb-617c6a37d200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div><div class="Frame_shadows__GaJIa hide-laptop" style="opacity:0"><img alt="" data-nosnippet="true" data-loaded="false" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/6600ca96-e49b-4fd9-c03a-7979faddad00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div><div class="Frame_shade__XyqbT hide-laptop" style="opacity:0"><img alt="" data-nosnippet="true" data-loaded="false" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7fa8f5f-d439-4329-6a65-de549b51e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div><div class="Frame_frameWrapper__I7Olr" style="opacity:0"><div class="Frame_frame__xbIar" data-frame="true"><div class="Frame_frameBackground__YBrog" style="opacity:0"></div><div class="Grain_grain__0LR5u Grain_grainSubtle__LzX_q" style="inset:1px"></div><nav class="Sidebar_sidebar__yeDLZ" style="opacity:0"><div class="Flex_root__DOQCW Flex_align-center__oXK9F Flex_justify-space-between__Txsv7"><button type="button" tabindex="0" aria-haspopup="menu" id="base-ui-_R_1lkl943binpfcqlb_" class="Sidebar_switchWorkspaceButton__QuP7W" aria-expanded="false"><span class="Sidebar_logoWrapper__ddfQJ"><svg width="13" height="13" viewBox="0 0 100 100" fill="#E2E4E6" aria-label="Linear logo" color="#E2E4E6"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"></path></svg></span><span class="sc-d5151d0-0 fQidsy">Linear</span><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:var(--label-faint)" fill="var(--label-faint)"><path d="M4.53 5.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.054.007l4-3.903a.75.75 0 0 0-1.048-1.073l-3.47 3.385L4.53 5.47Z"></path></svg></button><div class="Flex_root__DOQCW" style="gap:6px"><button class="Sidebar_searchButton__I0_9C" aria-label="Search workspace" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C9.76142 2 12 4.23858 12 7C12 8.11012 11.6375 9.13519 11.0254 9.96484L13.7803 12.7197L13.832 12.7764C14.0723 13.0709 14.0549 13.5057 13.7803 13.7803C13.5057 14.0549 13.0709 14.0723 12.7764 13.832L12.7197 13.7803L9.96484 11.0254C9.13519 11.6375 8.11012 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2ZM7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5Z"></path></svg></button><button class="Sidebar_newIssueButton__j96TX" aria-label="New issue" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 1C7.66414 1 7.99988 1.33589 8 1.75C8 2.16421 7.66421 2.5 7.25 2.5H4.75C3.50745 2.5 2.50012 3.50744 2.5 4.75V11.25C2.5 12.4926 3.50736 13.5 4.75 13.5H11.25C12.4926 13.5 13.5 12.4926 13.5 11.25V8.75C13.5001 8.33589 13.8359 8 14.25 8C14.6641 8 14.9999 8.33589 15 8.75V11.25C15 13.3211 13.3211 15 11.25 15H4.75C2.67893 15 1 13.3211 1 11.25V4.75C1.00012 2.67905 2.67899 1 4.75 1H7.25Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4326 1.26953C13.7913 0.910937 14.3728 0.910883 14.7314 1.26953C15.0897 1.6282 15.0899 2.20981 14.7314 2.56836L9.2373 8.06152C8.68101 8.6177 7.94043 8.95161 7.15527 9C7.06754 9.0052 6.99468 8.93248 7 8.84473C7.04847 8.05961 7.38232 7.31897 7.93848 6.7627L13.4326 1.26953Z"></path></svg></button></div></div><div class="Spacer_root__uoSvA" style="--height:12px"></div><div style="opacity:0.8"><div class="Sidebar_navItems__XOSSV"><button data-active="false" data-interactive="true" class="Sidebar_navItem__vdR_h"><svg width="14" height="14" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:#9c9da1" fill="#9c9da1"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0069 1.00879C12.0235 1.09224 12.8967 1.78967 13.1944 2.78027L14.8907 8.42871C15.0034 8.80411 15.0258 9.20103 14.9571 9.58691L14.5069 12.1143L14.4375 12.4219C14.0542 13.8306 12.8312 14.8559 11.378 14.9863L11.0625 15H4.92875L4.6143 14.9863C3.16087 14.8561 1.93819 13.8307 1.55473 12.4219L1.48539 12.1143L1.03422 9.58691C0.974045 9.24914 0.984493 8.90311 1.06352 8.57031L1.1016 8.42871L2.79691 2.78027C3.09453 1.78948 3.96862 1.09214 4.98539 1.00879L5.19047 1H10.8018L11.0069 1.00879ZM2.96098 11.8516C3.13119 12.8053 3.96043 13.4999 4.92875 13.5H11.0625C12.031 13.5 12.8611 12.8054 13.0313 11.8516L13.2715 10.5H11.6211C11.2249 10.5 10.8512 10.6738 10.5957 10.9697L10.4932 11.1035C10.1201 11.6634 9.49195 11.9999 8.81938 12H7.17191C6.54154 11.9998 5.95019 11.7042 5.57133 11.2061L5.49809 11.1035C5.24687 10.7266 4.82396 10.5 4.37113 10.5H2.71977L2.96098 11.8516ZM5.19047 2.5C4.80433 2.50005 4.45748 2.72173 4.29203 3.06055L4.23246 3.21191L2.53715 8.86035C2.5234 8.90613 2.514 8.95293 2.50688 9H4.37113C5.32524 9.00001 6.21689 9.47715 6.74613 10.2715L6.78422 10.3223C6.88083 10.4341 7.02214 10.4998 7.17191 10.5H8.81938C8.99076 10.4999 9.15106 10.4142 9.24613 10.2715L9.34965 10.126C9.88713 9.41919 10.7268 9 11.6211 9H13.4854C13.4785 8.95295 13.4689 8.90616 13.4551 8.86035L11.7588 3.21191C11.6318 2.78947 11.2427 2.50018 10.8018 2.5H5.19047Z"></path></svg><span>Inbox</span></button><button data-active="false" data-interactive="true" class="Sidebar_navItem__vdR_h"><svg width="14" height="14" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:#9c9da1" fill="#9c9da1"><path fill-rule="evenodd" c
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 26: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `Frame_background__iLZh4`
- **Size:** 768px height
- **Background image:** radial-gradient(52.53% 57.5% at 50% 100%, rgba(8, 9, 10, 0) 0px, rgba(8, 9, 10, 0.5) 100%), linear-gradient(rgb(8, 9, 10) 10%, rgb(208, 214, 224) 100%)
- **Media:** 1 image(s)
- **Animations:**
  - `img`.Image_root__UkRqc: transition: all

### Element Style Blueprint

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | border: 0px none rgba(0, 0, 0, 0) | display: inline | width: 1416px | opacity: 0.08
  - anim: all
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7b144b7-4ef0-4991-9bcb-617c6a37d200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

### HTML Structure

```html
<div class="Frame_background__iLZh4" aria-hidden="true" style="opacity:0"><img data-grain="true" alt="" data-nosnippet="true" data-loaded="true" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent;opacity:0.08;height:100%" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7b144b7-4ef0-4991-9bcb-617c6a37d200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 27: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `Frame_shade__XyqbT hide-laptop`
- **Size:** 804px height
- **Media:** 1 image(s)
- **Grid:** 1440px / 804.047px, gap: normal
- **Align items:** center
- **Justify:** normal
- **Animations:**
  - `img`.Image_root__UkRqc: transition: all

### Element Style Blueprint

- **`<img>`** .Image_root__UkRqc
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | lh: 24px | text-align: start | border: 0px none rgba(0, 0, 0, 0) | display: block | width: 1440px | opacity: 1
  - anim: all
  - src: https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7fa8f5f-d439-4329-6a65-de549b51e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none

### HTML Structure

```html
<div class="Frame_shade__XyqbT hide-laptop" style="opacity:0"><img alt="" data-nosnippet="true" data-loaded="false" loading="eager" width="1920" height="1080" decoding="async" data-nimg="1" class="Image_root__UkRqc" style="color:transparent" src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7fa8f5f-d439-4329-6a65-de549b51e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 28: Showcase
- **Confidence:** 40%
- **Tag:** div
- **Classes:** `Frame_frameWrapper__I7Olr`
- **Size:** 720px height
- **Padding:** 0px 60px
- **Headings:** H3: "Faster app launch"; H4: "Activity"
- **CTAs:** Linear, Inbox, My issues, Reviews, Pulse
- **Media:** 7 image(s), 36 SVG(s)
- **Animations:**
  - `div`.Frame_frame__xbIar: transition: all
  - `div`.Frame_frameBackground__YBrog: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Frame_view__tT3ze: transition: all
  - `div`: transition: all
  - `div`.SharedViewStyles_wrapperWithSidebar__mgB8H: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`: transition: all
  - `div`.SharedViewStyles_sidebar__Q5NUN: transition: all
  - `div`.Frame_glow__ZBzzr: transition: all; transform: matrix(1, 0, 0, 1, -200, -200)
  - `div`: transition: all
  - `div`.Sidebar_navItems__XOSSV: transition: all
  - `div`.Sidebar_navItems__XOSSV: transition: all
  - `div`.Sidebar_navItems__XOSSV: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all

### Element Style Blueprint

- **`<div>`** .Frame_frame__xbIar
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(9, 10, 11) | radius: 12px | border: 0px none rgb(247, 248, 248) | display: grid | width: 1320px | padding: 8px | opacity: 1
  - anim: all
  - text: "LinearInboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents InsightsFaster app launch02/14"

- **`<div>`** .Frame_frameBackground__YBrog
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(16, 17, 18) | radius: 12px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1320px | opacity: 0
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 1px solid rgb(50, 51, 52) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB.Frame_shineScroll__lRFOP
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 1px solid rgb(56, 59, 63) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 0px none rgb(247, 248, 248) | display: block | width: 1318px | opacity: 0.6
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB.Frame_shineInner__wPfoO
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 8px | border: 1px solid rgb(56, 59, 63) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB.Frame_shineInner__wPfoO
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 8px | border: 1px solid rgb(56, 59, 63) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Frame_view__tT3ze
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(18, 19, 20) | radius: 7px | border: 1px solid rgba(255, 255, 255, 0.08) | shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 2px | display: block | width: 1072px | opacity: 0
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1070px | opacity: 1
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`** .SharedViewStyles_wrapperWithSidebar__mgB8H
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1070px | opacity: 1
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 7px | border: 0px none rgb(247, 248, 248) | display: block | width: 1068px | opacity: 0.6
  - anim: all

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 750px | opacity: 1
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`** .SharedViewStyles_sidebar__Q5NUN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | display: block | width: 320px | opacity: 1
  - anim: all
  - text: "ENG-2703In ProgressHighjoriGitHub CopilotLabelsPerformanceiOSCycleCycle 144ProjectCore Performance"

- **`<div>`** .Frame_glow__ZBzzr
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 400px | border: 0px none rgb(247, 248, 248) | display: block | width: 400px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -200, -200)

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 210px | opacity: 0.8
  - anim: all
  - text: "InboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents Insights"

- **`<div>`** .Sidebar_navItems__XOSSV
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 210px | opacity: 1
  - anim: all
  - text: "InboxMy issuesReviewsPulse"

- **`<div>`** .Sidebar_navItems__XOSSV
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 210px | opacity: 1
  - anim: all
  - text: "Faster app launchAgent tasksUI RefreshAgents Insights"

- **`<div>`** .Sidebar_navItems__XOSSV
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 210px | opacity: 1
  - anim: all
  - text: "InitiativesProjectsMore"

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 210px | opacity: 1
  - anim: all
  - text: "Linear"

- **`<button>`** .Sidebar_navItem__vdR_h.Sidebar_collapsible__A_zZf
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | radius: 6px | border: 0px none rgb(98, 102, 109) | display: flex | width: 210px | padding: 0px 6px 0px 4px | opacity: 1
  - anim: all
  - text: "Workspace"

- **`<button>`** .Sidebar_navItem__vdR_h.Sidebar_collapsible__A_zZf
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | radius: 6px | border: 0px none rgb(98, 102, 109) | display: flex | width: 210px | padding: 0px 6px 0px 4px | opacity: 1
  - anim: all
  - text: "Favorites"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "Inbox"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "My issues"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "Reviews"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "Pulse"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "Initiatives"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "Projects"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "More"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | bg: rgba(255, 255, 255, 0.04) | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "Faster app launch"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "Agent tasks"

### HTML Structure

```html
<div class="Frame_frameWrapper__I7Olr" style="opacity:0"><div class="Frame_frame__xbIar" data-frame="true"><div class="Frame_frameBackground__YBrog" style="opacity:0"></div><div class="Grain_grain__0LR5u Grain_grainSubtle__LzX_q" style="inset:1px"></div><nav class="Sidebar_sidebar__yeDLZ" style="opacity:0"><div class="Flex_root__DOQCW Flex_align-center__oXK9F Flex_justify-space-between__Txsv7"><button type="button" tabindex="0" aria-haspopup="menu" id="base-ui-_R_1lkl943binpfcqlb_" class="Sidebar_switchWorkspaceButton__QuP7W" aria-expanded="false"><span class="Sidebar_logoWrapper__ddfQJ"><svg width="13" height="13" viewBox="0 0 100 100" fill="#E2E4E6" aria-label="Linear logo" color="#E2E4E6"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"></path></svg></span><span class="sc-d5151d0-0 fQidsy">Linear</span><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:var(--label-faint)" fill="var(--label-faint)"><path d="M4.53 5.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.054.007l4-3.903a.75.75 0 0 0-1.048-1.073l-3.47 3.385L4.53 5.47Z"></path></svg></button><div class="Flex_root__DOQCW" style="gap:6px"><button class="Sidebar_searchButton__I0_9C" aria-label="Search workspace" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C9.76142 2 12 4.23858 12 7C12 8.11012 11.6375 9.13519 11.0254 9.96484L13.7803 12.7197L13.832 12.7764C14.0723 13.0709 14.0549 13.5057 13.7803 13.7803C13.5057 14.0549 13.0709 14.0723 12.7764 13.832L12.7197 13.7803L9.96484 11.0254C9.13519 11.6375 8.11012 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2ZM7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5Z"></path></svg></button><button class="Sidebar_newIssueButton__j96TX" aria-label="New issue" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 1C7.66414 1 7.99988 1.33589 8 1.75C8 2.16421 7.66421 2.5 7.25 2.5H4.75C3.50745 2.5 2.50012 3.50744 2.5 4.75V11.25C2.5 12.4926 3.50736 13.5 4.75 13.5H11.25C12.4926 13.5 13.5 12.4926 13.5 11.25V8.75C13.5001 8.33589 13.8359 8 14.25 8C14.6641 8 14.9999 8.33589 15 8.75V11.25C15 13.3211 13.3211 15 11.25 15H4.75C2.67893 15 1 13.3211 1 11.25V4.75C1.00012 2.67905 2.67899 1 4.75 1H7.25Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4326 1.26953C13.7913 0.910937 14.3728 0.910883 14.7314 1.26953C15.0897 1.6282 15.0899 2.20981 14.7314 2.56836L9.2373 8.06152C8.68101 8.6177 7.94043 8.95161 7.15527 9C7.06754 9.0052 6.99468 8.93248 7 8.84473C7.04847 8.05961 7.38232 7.31897 7.93848 6.7627L13.4326 1.26953Z"></path></svg></button></div></div><div class="Spacer_root__uoSvA" style="--height:12px"></div><div style="opacity:0.8"><div class="Sidebar_navItems__XOSSV"><button data-active="false" data-interactive="true" class="Sidebar_navItem__vdR_h"><svg width="14" height="14" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:#9c9da1" fill="#9c9da1"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0069 1.00879C12.0235 1.09224 12.8967 1.78967 13.1944 2.78027L14.8907 8.42871C15.0034 8.80411 15.0258 9.20103 14.9571 9.58691L14.5069 12.1143L14.4375 12.4219C14.0542 13.8306 12.8312 14.8559 11.378 14.9863L11.0625 15H4.92875L4.6143 14.9863C3.16087 14.8561 1.93819 13.8307 1.55473 12.4219L1.48539 12.1143L1.03422 9.58691C0.974045 9.24914 0.984493 8.90311 1.06352 8.57031L1.1016 8.42871L2.79691 2.78027C3.09453 1.78948 3.96862 1.09214 4.98539 1.00879L5.19047 1H10.8018L11.0069 1.00879ZM2.96098 11.8516C3.13119 12.8053 3.96043 13.4999 4.92875 13.5H11.0625C12.031 13.5 12.8611 12.8054 13.0313 11.8516L13.2715 10.5H11.6211C11.2249 10.5 10.8512 10.6738 10.5957 10.9697L10.4932 11.1035C10.1201 11.6634 9.49195 11.9999 8.81938 12H7.17191C6.54154 11.9998 5.95019 11.7042 5.57133 11.2061L5.49809 11.1035C5.24687 10.7266 4.82396 10.5 4.37113 10.5H2.71977L2.96098 11.8516ZM5.19047 2.5C4.80433 2.50005 4.45748 2.72173 4.29203 3.06055L4.23246 3.21191L2.53715 8.86035C2.5234 8.90613 2.514 8.95293 2.50688 9H4.37113C5.32524 9.00001 6.21689 9.47715 6.74613 10.2715L6.78422 10.3223C6.88083 10.4341 7.02214 10.4998 7.17191 10.5H8.81938C8.99076 10.4999 9.15106 10.4142 9.24613 10.2715L9.34965 10.126C9.88713 9.41919 10.7268 9 11.6211 9H13.4854C13.4785 8.95295 13.4689 8.90616 13.4551 8.86035L11.7588 3.21191C11.6318 2.78947 11.2427 2.50018 10.8018 2.5H5.19047Z"></path></svg><span>Inbox</span></button><button data-active="false" data-interactive="true" class="Sidebar_navItem__vdR_h"><svg width="14" height="14" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:#9c9da1" fill="#9c9da1"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.75V4.25C1 2.45507 2.45507 1 4.25 1H4.75C5.16421 1 5.5 1.33579 5.5 1.75C5.5 2.16421 5.16421 2.5 4.75 2.5H4.25C3.2835 2.5 2.5 3.2835 2.5 4.25V4.75C2.5 5.16421 2.16421 5.5 1.75 5.5C1.33579 5.5 1 5.16421 1 4.75Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 1L11.75 1C13.5449 1 15 2.45507 15 4.25V4.75L14.9961 4.82715C14.9575 5.20512 14.6382 5.5 14.25 5.5C13.8618 5.5 13.5425 5.20512 13.5039 4.82715L13.5 4.75V4.25C13.5 3.2835 12.7165 2.5 11.75 2.5H11.25C10.8358 2.5 10.5 2.16421 10.5 1.75C10.5 1.33579 10.8358 1 11.25 1Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 14.9951H4.25C2.45507 14.9951 1 13.54 1 11.7451L1 11.2451L1.00391 11.168C1.04253 10.79 1.36183 10.4951 1.75 10.4951C2.13817 10.4951 2.45747 10.79 2.49609 11.168L2.5 11.2451V11.7451C2.5 12.7116 3.2835 13.4951 4.25 13.4951H4.75C5.16421 13.4951 5.5 13.8309 5.5 14.2451C5.5 14.6593 5.16421 14.9951 4.75 14.9951Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 15H11.75C13.5449 15 15 13.5449 15 11.75V11.25L14.9961 11.1729C14.9575 10.7949 14.6382 10.5 14.25 10.5C13.8618 10.5 13.5425 10.7949 13.5039 11.1729L13.5 11.25V11.75C13.5 12.7165 12.7165 13.5 11.75 13.5H11.25C10.8358 13.5 10.5 13.8358 10.5 14.25C10.5 14.6642 10.8358 15 11.25 15Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 29: Showcase
- **Confidence:** 40%
- **Tag:** div
- **Classes:** `Frame_frame__xbIar`
- **Size:** 720px height
- **Background color:** rgb(9, 10, 11)
- **Padding:** 8px
- **Headings:** H3: "Faster app launch"; H4: "Activity"
- **CTAs:** Linear, Inbox, My issues, Reviews, Pulse
- **Media:** 7 image(s), 36 SVG(s)
- **Grid:** 232px 1072px / 704px 0px, gap: normal
- **Align items:** normal
- **Justify:** normal
- **Animations:**
  - `div`.Frame_frameBackground__YBrog: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Frame_shine__Ei3zB: transition: all
  - `div`.Frame_view__tT3ze: transition: all
  - `div`: transition: all
  - `div`.SharedViewStyles_wrapperWithSidebar__mgB8H: transition: all
  - `div`.Grain_grain__0LR5u: transition: all
  - `div`: transition: all
  - `div`.IssueView_body___grLQ: transition: all
  - `div`.SharedViewStyles_sidebar__Q5NUN: transition: all
  - `div`.Frame_glow__ZBzzr: transition: all; transform: matrix(1, 0, 0, 1, -200, -200)
  - `div`.IssueView_sidebarContent__HDN3_: transition: all
  - `div`: transition: all
  - `div`.Sidebar_navItems__XOSSV: transition: all
  - `div`.Sidebar_navItems__XOSSV: transition: all
  - `div`.Sidebar_navItems__XOSSV: transition: all
  - `div`.SharedViewStyles_header__19pF0: transition: all
  - `div`.Flex_root__DOQCW: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all
  - `button`.Sidebar_navItem__vdR_h: transition: all

### Element Style Blueprint

- **`<div>`** .Frame_frameBackground__YBrog
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(16, 17, 18) | radius: 12px | border: 1px solid rgba(255, 255, 255, 0.08) | display: block | width: 1320px | opacity: 0
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 1px solid rgb(50, 51, 52) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB.Frame_shineScroll__lRFOP
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 1px solid rgb(56, 59, 63) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 12px | border: 0px none rgb(247, 248, 248) | display: block | width: 1318px | opacity: 0.6
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB.Frame_shineInner__wPfoO
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 8px | border: 1px solid rgb(56, 59, 63) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Frame_shine__Ei3zB.Frame_shineInner__wPfoO
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 8px | border: 1px solid rgb(56, 59, 63) | display: block | width: 1320px | opacity: 1
  - anim: all

- **`<div>`** .Frame_view__tT3ze
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | bg: rgb(18, 19, 20) | radius: 7px | border: 1px solid rgba(255, 255, 255, 0.08) | shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 2px | display: block | width: 1072px | opacity: 0
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 1070px | opacity: 1
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`** .SharedViewStyles_wrapperWithSidebar__mgB8H
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: grid | width: 1070px | opacity: 1
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`** .Grain_grain__0LR5u.Grain_grainSubtle__LzX_q
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 7px | border: 0px none rgb(247, 248, 248) | display: block | width: 1068px | opacity: 0.6
  - anim: all

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 750px | opacity: 1
  - anim: all
  - text: "Faster app launch02/145Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refres"

- **`<div>`** .IssueView_body___grLQ
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 750px | padding: 48px 68px | opacity: 1
  - anim: all
  - text: "Faster app launchRender UI before vehicle_state sync when minimum required state is present, instead of blocking on full refresh during iOS startup.Ac"

- **`<div>`** .SharedViewStyles_sidebar__Q5NUN
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | display: block | width: 320px | opacity: 1
  - anim: all
  - text: "ENG-2703In ProgressHighjoriGitHub CopilotLabelsPerformanceiOSCycleCycle 144ProjectCore Performance"

- **`<div>`** .Frame_glow__ZBzzr
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | radius: 400px | border: 0px none rgb(247, 248, 248) | display: block | width: 400px | opacity: 1
  - anim: all | matrix(1, 0, 0, 1, -200, -200)

- **`<div>`** .IssueView_sidebarContent__HDN3_
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 319px | padding: 28px 30px | opacity: 0.8
  - anim: all
  - text: "In ProgressHighjoriGitHub CopilotLabelsPerformanceiOSCycleCycle 144ProjectCore Performance"

- **`<div>`**
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: block | width: 210px | opacity: 0.8
  - anim: all
  - text: "InboxMy issuesReviewsPulseWorkspace InitiativesProjectsMoreFavorites Faster app launchAgent tasksUI RefreshAgents Insights"

- **`<div>`** .Sidebar_navItems__XOSSV
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 210px | opacity: 1
  - anim: all
  - text: "InboxMy issuesReviewsPulse"

- **`<div>`** .Sidebar_navItems__XOSSV
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 210px | opacity: 1
  - anim: all
  - text: "Faster app launchAgent tasksUI RefreshAgents Insights"

- **`<div>`** .Sidebar_navItems__XOSSV
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 210px | opacity: 1
  - anim: all
  - text: "InitiativesProjectsMore"

- **`<div>`** .SharedViewStyles_header__19pF0.IssueView_sidebarHeader__HQuJu
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | display: flex | width: 319px | padding: 0px 24px 0px 31px | opacity: 1
  - anim: all
  - text: "ENG-2703"

- **`<div>`** .Flex_root__DOQCW.Flex_align-center__oXK9F
  - font: 16px 400 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(247, 248, 248) | lh: 24px | text-align: start | border: 0px none rgb(247, 248, 248) | display: flex | width: 210px | opacity: 1
  - anim: all
  - text: "Linear"

- **`<button>`** .Sidebar_navItem__vdR_h.Sidebar_collapsible__A_zZf
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | radius: 6px | border: 0px none rgb(98, 102, 109) | display: flex | width: 210px | padding: 0px 6px 0px 4px | opacity: 1
  - anim: all
  - text: "Workspace"

- **`<button>`** .Sidebar_navItem__vdR_h.Sidebar_collapsible__A_zZf
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(98, 102, 109) | text-align: center | radius: 6px | border: 0px none rgb(98, 102, 109) | display: flex | width: 210px | padding: 0px 6px 0px 4px | opacity: 1
  - anim: all
  - text: "Favorites"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "Inbox"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "My issues"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "Reviews"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "Pulse"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "Initiatives"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "Projects"

- **`<button>`** .Sidebar_navItem__vdR_h
  - font: 13px 510 "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif | color: rgb(208, 214, 224) | text-align: center | radius: 6px | border: 0px none rgb(208, 214, 224) | display: flex | width: 210px | padding: 0px 6px | opacity: 1
  - anim: all
  - text: "More"

### HTML Structure

```html
<div class="Frame_frame__xbIar" data-frame="true"><div class="Frame_frameBackground__YBrog" style="opacity:0"></div><div class="Grain_grain__0LR5u Grain_grainSubtle__LzX_q" style="inset:1px"></div><nav class="Sidebar_sidebar__yeDLZ" style="opacity:0"><div class="Flex_root__DOQCW Flex_align-center__oXK9F Flex_justify-space-between__Txsv7"><button type="button" tabindex="0" aria-haspopup="menu" id="base-ui-_R_1lkl943binpfcqlb_" class="Sidebar_switchWorkspaceButton__QuP7W" aria-expanded="false"><span class="Sidebar_logoWrapper__ddfQJ"><svg width="13" height="13" viewBox="0 0 100 100" fill="#E2E4E6" aria-label="Linear logo" color="#E2E4E6"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"></path></svg></span><span class="sc-d5151d0-0 fQidsy">Linear</span><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:var(--label-faint)" fill="var(--label-faint)"><path d="M4.53 5.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.054.007l4-3.903a.75.75 0 0 0-1.048-1.073l-3.47 3.385L4.53 5.47Z"></path></svg></button><div class="Flex_root__DOQCW" style="gap:6px"><button class="Sidebar_searchButton__I0_9C" aria-label="Search workspace" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C9.76142 2 12 4.23858 12 7C12 8.11012 11.6375 9.13519 11.0254 9.96484L13.7803 12.7197L13.832 12.7764C14.0723 13.0709 14.0549 13.5057 13.7803 13.7803C13.5057 14.0549 13.0709 14.0723 12.7764 13.832L12.7197 13.7803L9.96484 11.0254C9.13519 11.6375 8.11012 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2ZM7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5Z"></path></svg></button><button class="Sidebar_newIssueButton__j96TX" aria-label="New issue" tabindex="-1"><svg width="16" height="16" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:currentColor" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 1C7.66414 1 7.99988 1.33589 8 1.75C8 2.16421 7.66421 2.5 7.25 2.5H4.75C3.50745 2.5 2.50012 3.50744 2.5 4.75V11.25C2.5 12.4926 3.50736 13.5 4.75 13.5H11.25C12.4926 13.5 13.5 12.4926 13.5 11.25V8.75C13.5001 8.33589 13.8359 8 14.25 8C14.6641 8 14.9999 8.33589 15 8.75V11.25C15 13.3211 13.3211 15 11.25 15H4.75C2.67893 15 1 13.3211 1 11.25V4.75C1.00012 2.67905 2.67899 1 4.75 1H7.25Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4326 1.26953C13.7913 0.910937 14.3728 0.910883 14.7314 1.26953C15.0897 1.6282 15.0899 2.20981 14.7314 2.56836L9.2373 8.06152C8.68101 8.6177 7.94043 8.95161 7.15527 9C7.06754 9.0052 6.99468 8.93248 7 8.84473C7.04847 8.05961 7.38232 7.31897 7.93848 6.7627L13.4326 1.26953Z"></path></svg></button></div></div><div class="Spacer_root__uoSvA" style="--height:12px"></div><div style="opacity:0.8"><div class="Sidebar_navItems__XOSSV"><button data-active="false" data-interactive="true" class="Sidebar_navItem__vdR_h"><svg width="14" height="14" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:#9c9da1" fill="#9c9da1"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0069 1.00879C12.0235 1.09224 12.8967 1.78967 13.1944 2.78027L14.8907 8.42871C15.0034 8.80411 15.0258 9.20103 14.9571 9.58691L14.5069 12.1143L14.4375 12.4219C14.0542 13.8306 12.8312 14.8559 11.378 14.9863L11.0625 15H4.92875L4.6143 14.9863C3.16087 14.8561 1.93819 13.8307 1.55473 12.4219L1.48539 12.1143L1.03422 9.58691C0.974045 9.24914 0.984493 8.90311 1.06352 8.57031L1.1016 8.42871L2.79691 2.78027C3.09453 1.78948 3.96862 1.09214 4.98539 1.00879L5.19047 1H10.8018L11.0069 1.00879ZM2.96098 11.8516C3.13119 12.8053 3.96043 13.4999 4.92875 13.5H11.0625C12.031 13.5 12.8611 12.8054 13.0313 11.8516L13.2715 10.5H11.6211C11.2249 10.5 10.8512 10.6738 10.5957 10.9697L10.4932 11.1035C10.1201 11.6634 9.49195 11.9999 8.81938 12H7.17191C6.54154 11.9998 5.95019 11.7042 5.57133 11.2061L5.49809 11.1035C5.24687 10.7266 4.82396 10.5 4.37113 10.5H2.71977L2.96098 11.8516ZM5.19047 2.5C4.80433 2.50005 4.45748 2.72173 4.29203 3.06055L4.23246 3.21191L2.53715 8.86035C2.5234 8.90613 2.514 8.95293 2.50688 9H4.37113C5.32524 9.00001 6.21689 9.47715 6.74613 10.2715L6.78422 10.3223C6.88083 10.4341 7.02214 10.4998 7.17191 10.5H8.81938C8.99076 10.4999 9.15106 10.4142 9.24613 10.2715L9.34965 10.126C9.88713 9.41919 10.7268 9 11.6211 9H13.4854C13.4785 8.95295 13.4689 8.90616 13.4551 8.86035L11.7588 3.21191C11.6318 2.78947 11.2427 2.50018 10.8018 2.5H5.19047Z"></path></svg><span>Inbox</span></button><button data-active="false" data-interactive="true" class="Sidebar_navItem__vdR_h"><svg width="14" height="14" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="sx-13wgh6h sx-31pjnn sx-m5nenu sx-1fwcy2r sx-pa2zml sx-yil8dp sx-ob279t sx-12exqgt sx-1tad8l3" style="--x---icon-default-color:#9c9da1" fill="#9c9da1"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.75V4.25C1 2.45507 2.45507 1 4.25 1H4.75C5.16421 1 5.5 1.33579 5.5 1.75C5.5 2.16421 5.16421 2.5 4.75 2.5H4.25C3.2835 2.5 2.5 3.2835 2.5 4.25V4.75C2.5 5.16421 2.16421 5.5 1.75 5.5C1.33579 5.5 1 5.16421 1 4.75Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 1L11.75 1C13.5449 1 15 2.45507 15 4.25V4.75L14.9961 4.82715C14.9575 5.20512 14.6382 5.5 14.25 5.5C13.8618 5.5 13.5425 5.20512 13.5039 4.82715L13.5 4.75V4.25C13.5 3.2835 12.7165 2.5 11.75 2.5H11.25C10.8358 2.5 10.5 2.16421 10.5 1.75C10.5 1.33579 10.8358 1 11.25 1Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 14.9951H4.25C2.45507 14.9951 1 13.54 1 11.7451L1 11.2451L1.00391 11.168C1.04253 10.79 1.36183 10.4951 1.75 10.4951C2.13817 10.4951 2.45747 10.79 2.49609 11.168L2.5 11.2451V11.7451C2.5 12.7116 3.2835 13.4951 4.25 13.4951H4.75C5.16421 13.4951 5.5 13.8309 5.5 14.2451C5.5 14.6593 5.16421 14.9951 4.75 14.9951Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 15H11.75C13.5449 15 15 13.5449 15 11.75V11.25L14.9961 11.1729C14.9575 10.7949 14.6382 10.5 14.25 10.5C13.8618 10.5 13.5425 10.7949 13.5039 11.1729L13.5 11.25V11.75C13.5 12.7165 12.7165 13.5 11.75 13.5H11.25C10.8358 13.5 10.5 13.8358 10.5 14.25C10.5 14.6642 10.8358 15 11.25 15Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"></
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 30: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `Frame_frameBackground__YBrog`
- **Size:** 720px height
- **Background color:** rgb(16, 17, 18)
### HTML Structure

```html
<div class="Frame_frameBackground__YBrog" style="opacity:0"></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 31: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `Grain_grain__0LR5u Grain_grainSubtle__LzX_q`
- **Size:** 718px height
- **Background image:** url("https://static.linear.app/static/grain-default.png")
### HTML Structure

```html
<div class="Grain_grain__0LR5u Grain_grainSubtle__LzX_q" style="inset:1px"></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 32: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `Frame_shine__Ei3zB`
- **Size:** 720px height
### HTML Structure

```html
<div class="Frame_shine__Ei3zB" style="--mask-x: 0%; --mask-y: 25%;"></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 33: Footer
- **Confidence:** 30%
- **Tag:** div
- **Classes:** `Frame_shine__Ei3zB Frame_shineScroll__lRFOP`
- **Size:** 720px height
### HTML Structure

```html
<div class="Frame_shine__Ei3zB Frame_shineScroll__lRFOP" style="--shine-color:#383b3f;--mask-x:0;--mask-y:20%"></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.


---

# 7. Motion Timeline Recipes

25 motion pattern(s) detected:

- **Type:** scroll-translate
  Target: `main.Layout_content__PrPCk` (main)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.LayoutContent_root__ZBUya.LayoutContent_homepage__alayp:nth-child(2)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Frame_shade__XyqbT.hide-laptop:nth-child(3)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Bleed_root__EzNZN:nth-child(9)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Frame_wrapper___hKDg` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Frame_background__iLZh4:nth-child(1)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `img.Image_root__UkRqc` (img)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Frame_frameWrapper__I7Olr:nth-child(4)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Frame_frame__xbIar` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Frame_frameBackground__YBrog:nth-child(1)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Frame_shine__Ei3zB:nth-child(1)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Frame_shine__Ei3zB.Frame_shineScroll__lRFOP:nth-child(1)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Grain_grain__0LR5u.Grain_grainSubtle__LzX_q:nth-child(2)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Frame_shine__Ei3zB.Frame_shineInner__wPfoO:nth-child(2)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.SharedViewStyles_wrapperWithSidebar__mgB8H` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.IssueView_body___grLQ` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Hero_container__inGFW.utils_inset__Xhl3T:nth-child(5)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.SharedViewStyles_sidebar__Q5NUN:nth-child(2)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Benefits_benefit__IHWje.Grid_b___vQi_:nth-child(2)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Benefits_benefit__IHWje.Grid_a__vY7M8:nth-child(1)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Benefits_benefit__IHWje.Grid_c__Tv5Qw:nth-child(3)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `h2.sc-d5151d0-0.exSLMF` (h2)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `h1.sc-d5151d0-0.bgDIHX` (h1)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `nav.Sidebar_sidebar__yeDLZ` (nav)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.Frame_glow__ZBzzr:nth-child(1)` (div)
  Range: 0-100%
  Y movement: -9681px
  Parallax ratio: 1
  Implementation: Scroll-linked transform with requestAnimationFrame

**Math:** Use lerp next = current + (target - current) * alpha with alpha 0.08-0.18.
**Easing:** cubic-bezier(0.22, 1, 0.36, 1) for premium reveals.
**Rule:** Respect prefers-reduced-motion.


---

# 8. Interaction Recipes

No hover interactions probed. Add standard hover states: color shift on links, lift on cards, background change on buttons.

---

# 9. Asset Requirements

- **Images:** 24 detected â€” plan for hero, content, and decorative images
- **Videos:** 0 detected
- **Fonts:** 2 detected
- **Inline SVGs:** 178
- **Canvases:** 0

**Rule:** Do not copy proprietary assets. Recreate the design language with original, niche-specific content.

---

# 10. Responsive Rules

- Mobile-first breakpoint strategy: 390px, 834px, 1440px
- All three viewports captured
- desktop@0%: H1: "The product development system for teams and agentsThe produ"; H3: "Faster app launch"; H4: "Activity"
- desktop signals: fixed positioning active, transform-driven effects, opacity-based effects
- tablet@0%: H1: "The product development system for teams and agentsThe produ"; H3: "Faster app launch"; H4: "Activity"
- tablet signals: fixed positioning active, transform-driven effects, opacity-based effects
- mobile@0%: H1: "The product development system for teams and agentsThe produ"; H3: "Faster app launch"; H4: "Activity"
- mobile signals: fixed positioning active, transform-driven effects, opacity-based effects
- wide@0%: H1: "The product development system for teams and agentsThe produ"; H3: "Faster app launch"; H4: "Activity"
- wide signals: fixed positioning active, transform-driven effects, opacity-based effects
- Navigation collapses to hamburger on mobile
- Full-viewport sections become auto-height on mobile
- WebGL/canvas lazy-loaded and capped at DPR 2 on mobile
- Touch-friendly tap targets (min 44px)


---

# 11. CRO Adaptation

**Paradigm:** undefined

**Required conversion blocks:**


**Pushback:**


**Niche:** SaaS Product Page
Translate the extracted aesthetic into SaaS Product Page. Preserve the premium visual grammar, but rewrite structure, copy, proof, and CTAs around the business outcome. The first viewport must communicate who this is for, what measurable value is offered, why the visitor should trust it, and what action to take next.

---

### Niche Content Translation Table

Edit the [____] fields below with your copy for "SaaS Product Page". All styling, classes, and animations are preserved automatically.

# Nicho: "SaaS Product Page" — Template de Traducción de Contenido

> Instrucciones: Rellena los campos [____] con tu copy de SaaS Product Page. Preserva todas las clases CSS, animaciones y estilos visuales extraídos.

## Sección 1: Hero — First impression, value prop, primary CTA
**Clases:** `.section`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 2: Hero — First impression, value prop, primary CTA
**Clases:** `.section`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 3: Contact/Booking — Form, calendar, CTA
**Clases:** `.PageSection_root__kFVv1 .PageSection_rootHomepage__2x22W`

  **<H2>** original: "Make product operations self-driving"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "1.0Intake→"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "1.1Linear Agent +"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<p>** texto original: "Turn conversations and customer feedback into actionable iss..."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgb(208, 214, 224)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 4: Hero — First impression, value prop, primary CTA
**Clases:** `.PageSection_root__kFVv1 .PageSection_rootHomepage__2x22W`

  **<H2>** original: "Define the product direction"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "2.0Plan→"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Core Product99"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<p>** texto original: "Plan and navigate from idea to launch. Align your team with ..."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgb(208, 214, 224)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 5: Pricing — Tiers, plans, packages, ROI
**Clases:** `.PageSection_root__kFVv1 .PageSection_rootHomepage__2x22W`

  **<H2>** original: "Move work forward across teams and agents"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "3.0Build→"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "3.1Issues +"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<p>** texto original: "Build and deploy AI agents that work alongside your team. Wo..."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgb(208, 214, 224)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 6: Hero — First impression, value prop, primary CTA
**Clases:** `.PageSection_root__kFVv1 .PageSection_rootHomepage__2x22W`

  **<H2>** original: "Review PRs and agent output"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "4.0Diffs→"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Linear"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<p>** texto original: "Understand code changes at a glance with structural diffs fo..."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgb(208, 214, 224)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 7: Showcase — Portfolio, projects, featured work
**Clases:** `.PageSection_root__kFVv1 .PageSection_rootHomepage__2x22W`

  **<H2>** original: "Understand progress at scale"
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "5.0Monitor→"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Listen"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<p>** texto original: "Take the guesswork out of product development with project u..."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgb(208, 214, 224)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 8: Team/About — Who we are, mission, culture
**Clases:** `.CustomerQuotes_container__Grlfj .hide-laptop`

  **<button/a>** original: "Customer stories→"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<div>** original: "Linear powers over 33,000 product teams. From ambitious star..."
  → **Tu CTA:** [________________________________________]
  *Preserva: class="CustomerQuotes_footer__Eq55g hide-laptop Flex_root__DOQCW Flex_align-baseline__VVH_q Flex_justify-space-between__Txsv7" | hover: all | color: rgb(247, 248, 248)*

  **<p>** texto original: "Our speed is intense and Linear helps us be action biased."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgb(8, 9, 10)*

  **<p>** texto original: "You just have to use it and you will see, you will just feel..."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgb(8, 9, 10)*

  **<p>** texto original: "Linear powers over 33,000 product teams. From ambitious star..."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgb(138, 143, 152)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 9: Contact/Booking — Form, calendar, CTA
**Clases:** `.CTA_homepagePrefooter__FWdih`

  **<H2>** original: "Built for the future. Available today."
  → **Tu H2:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Get started"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Contact sales"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** flex, direction: column, gap: 40px
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 10: Contact/Booking — Form, calendar, CTA
**Clases:** `.Header_header__hfMjL`

  **<button/a>** original: "Product"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Resources"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0), bg-image

## Sección 11: Navigation — Brand, menu, optional CTA
**Clases:** `.IssueView_header__sldQv .SharedViewStyles_header__19pF0`

  **Layout:** flex, direction: row, gap: normal
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 12: Navigation — Brand, menu, optional CTA
**Clases:** `.IssueView_chatBoxHeader__dsIb0`

  **Layout:** flex, direction: row, gap: normal
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 13: Navigation — Brand, menu, optional CTA
**Clases:** `.SlackIssue_header__NtjDx .utils_bottomGradientBorder__OEIzU`

  **Layout:** flex, direction: row, gap: normal
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 14: Navigation — Brand, menu, optional CTA
**Clases:** `.Plan_initiativesBoxHeader__BpkZm`

  **Layout:** flex, direction: row, gap: normal
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 15: Navigation — Brand, menu, optional CTA
**Clases:** `.Build_header__OAL8V`

  **Layout:** flex, direction: row, gap: normal
  **Fondo:** rgb(15, 16, 17)

## Sección 16: Navigation — Brand, menu, optional CTA
**Clases:** `.Monitor_header__guWRp`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 17: Navigation — Brand, menu, optional CTA
**Clases:** `.Monitor_header__guWRp`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 18: Navigation — Brand, menu, optional CTA
**Clases:** `.Monitor_pulseHeader__BiXEt`

  **<button/a>** original: "Listen"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "1.0×"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 19: Footer — Links, legal, social, brand
**Clases:** `.Footer_footer__lJt10`

  **<H3>** original: "Product"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H3>** original: "Features"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H3>** original: "Company"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Intake"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Plan"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgb(8, 9, 10)

## Sección 20: Hero — First impression, value prop, primary CTA
**Clases:** `.div`

  **<H1>** original: "The product development system for teams and agentsThe product developmentsystem..."
  → **Tu H1:** [________________________________________]
  *Preserva: estilo y clase*

  **<H3>** original: "Faster app launch"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H4>** original: "Activity"
  → **Tu H4:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Skip to content →"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Product"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgb(8, 9, 10)

## Sección 21: Hero — First impression, value prop, primary CTA
**Clases:** `.Layout_container__BVtmP .page_root__EA6JT`

  **<H1>** original: "The product development system for teams and agentsThe product developmentsystem..."
  → **Tu H1:** [________________________________________]
  *Preserva: estilo y clase*

  **<H3>** original: "Faster app launch"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H4>** original: "Activity"
  → **Tu H4:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Product"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Resources"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** flex, direction: column, gap: normal
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 22: Hero — First impression, value prop, primary CTA
**Clases:** `.LayoutContent_root__ZBUya .LayoutContent_homepage__alayp`

  **<H1>** original: "The product development system for teams and agentsThe product developmentsystem..."
  → **Tu H1:** [________________________________________]
  *Preserva: estilo y clase*

  **<H3>** original: "Faster app launch"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H4>** original: "Activity"
  → **Tu H4:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Issue tracking is deadlinear.app/next →"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Linear"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 23: Pricing — Tiers, plans, packages, ROI
**Clases:** `.div`

  **<H1>** original: "The product development system for teams and agentsThe product developmentsystem..."
  → **Tu H1:** [________________________________________]
  *Preserva: estilo y clase*

  **<H3>** original: "Faster app launch"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H4>** original: "Activity"
  → **Tu H4:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Issue tracking is deadlinear.app/next →"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Linear"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<p>** texto original: "Purpose-built for planning and building products. Designed f..."
  → **Tu texto:** [________________________________________]
  *Preserva color: rgb(138, 143, 152)*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 24: Showcase — Portfolio, projects, featured work
**Clases:** `.Bleed_root__EzNZN`

  **<H3>** original: "Faster app launch"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H4>** original: "Activity"
  → **Tu H4:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Linear"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Inbox"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 25: Showcase — Portfolio, projects, featured work
**Clases:** `.Frame_wrapper___hKDg`

  **<H3>** original: "Faster app launch"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H4>** original: "Activity"
  → **Tu H4:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Linear"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Inbox"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 26: Hero — First impression, value prop, primary CTA
**Clases:** `.Frame_background__iLZh4`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0), bg-image

## Sección 27: Hero — First impression, value prop, primary CTA
**Clases:** `.Frame_shade__XyqbT .hide-laptop`

  **Layout:** grid, gap: normal
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 28: Showcase — Portfolio, projects, featured work
**Clases:** `.Frame_frameWrapper__I7Olr`

  **<H3>** original: "Faster app launch"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H4>** original: "Activity"
  → **Tu H4:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Linear"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Inbox"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 29: Showcase — Portfolio, projects, featured work
**Clases:** `.Frame_frame__xbIar`

  **<H3>** original: "Faster app launch"
  → **Tu H3:** [________________________________________]
  *Preserva: estilo y clase*

  **<H4>** original: "Activity"
  → **Tu H4:** [________________________________________]
  *Preserva: estilo y clase*

  **<button/a>** original: "Linear"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **<button/a>** original: "Inbox"
  → **Tu CTA:** [________________________________________]
  *Preserva: clase y hover effect*

  **Layout:** grid, gap: normal
  **Fondo:** rgb(9, 10, 11)

## Sección 30: Hero — First impression, value prop, primary CTA
**Clases:** `.Frame_frameBackground__YBrog`

  **Layout:** block
  **Fondo:** rgb(16, 17, 18)

## Sección 31: Hero — First impression, value prop, primary CTA
**Clases:** `.Grain_grain__0LR5u .Grain_grainSubtle__LzX_q`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0), bg-image

## Sección 32: Hero — First impression, value prop, primary CTA
**Clases:** `.Frame_shine__Ei3zB`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)

## Sección 33: Footer — Links, legal, social, brand
**Clases:** `.Frame_shine__Ei3zB .Frame_shineScroll__lRFOP`

  **Layout:** block
  **Fondo:** rgba(0, 0, 0, 0)


---

# 12. Performance Budget

- **LCP:** < 2.5s
- **Total load:** < 5s
- **JS:** Keep route-level JS lean; lazy-load WebGL and heavy animation bundles
- **Motion:** Respect prefers-reduced-motion and pause offscreen animation


---

# 13. Accessibility Constraints

- Use semantic HTML landmarks and descriptive accessible names.
- Maintain WCAG AA contrast for text over glass, video, gradients, and WebGL canvases.
- Keyboard states must be visible and match hover affordances.
- Provide reduced-motion alternatives for scroll-linked animation.

---

# 14. Acceptance Criteria

The implementation is not accepted unless:
- The hero communicates value without scrolling.
- All 33 sections match the extracted layout rhythm.
- All scroll animations have reduced-motion alternatives.
- No blocking render resources on initial paint.
- Primary CTA is visible above the fold on desktop and mobile.
- WCAG AA contrast maintained on all text surfaces.
- Page loads in under 5 seconds on 3G Fast.
- All 25 motion patterns are recreated with equivalent feel.

---

# 15. Final Agent Prompt

```text
You are an Awwwards-winning frontend developer. Build a premium site for: "SaaS Product Page".

Reference: https://linear.app

=== DESIGN TOKENS ===
- Design Language: luxury minimal
- Colors: rgb(247, 248, 248), rgb(208, 214, 224), rgb(138, 143, 152), rgb(255, 255, 255), rgb(94, 106, 210), rgb(8, 9, 10), rgb(229, 229, 230), rgb(98, 102, 109)
- Fonts: Inter Variable, SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif | Berkeley Mono, ui-monospace, SF Mono, Menlo, monospace

=== DESIGN TOKENS (CSS VARIABLES) ===
```css
:root {
  --accent: var(--color-yellow);
  --decorationHeight: 80px;
  --x---icon-default-color: var(--color-bg-primary);
  --height: 48px;
  --x-width: 14px;
  --x-height: 14px;
  --shine-color: #383b3f;
  --mask-x: 0;
  --mask-y: 20%;
  --Marquee-duration: 30s;
  --Marquee-gap: 40px;
  --flex-direction: row;
  --min-padding: 0px;
  --Carousel-gap: 8px;
  --mobile-width: 230px;
  --grid-areas-default: "a a a a b b b b c c c c";
  --grid-areas-desktop: "a a a a a a a a"
				"b b b b b b b b"
				"c c c c c c c c";
  --grid-areas-mobile: "a a a a"
				"b b b b"
				"c c c c";
  --label-color: #6366F1;
  --bg-offset-y: 0px;
  --width: 750px;
  --bar-color: #993B3B;
  --glow-opacity: 0.02;
  --token-comment: #8B93A1;
  --token-string: #ffdf9f;
  --token-constant: #8FA6FF;
  --token-variable: #f7bf8b;
  --token-keyword: #F79CE0;
  --token-entity: #83dcdc;
  --token-punctuation: #D2D7DE;
  --token-text: #E2E4E7;
  --diff-old-color: #F34E52;
  --diff-old-bg: rgba(243, 78, 82, 0.1);
  --diff-new-color: #27A644;
  --diff-new-bg: rgba(39, 166, 68, 0.07);
}
```

=== SECTIONS STRUCTURE BLUEPRINT ===
Section 1: HERO
- Original Tag: <section>
- Classes: ``
- Visual Role: hero (confidence: 30%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 2: HERO
- Original Tag: <section>
- Classes: ``
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 3: CONTACT
- Original Tag: <section>
- Classes: `PageSection_root__kFVv1 PageSection_rootHomepage__2x22W`
- Visual Role: contact (confidence: 35%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 4: HERO
- Original Tag: <section>
- Classes: `PageSection_root__kFVv1 PageSection_rootHomepage__2x22W`
- Visual Role: hero (confidence: 35%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 5: PRICING
- Original Tag: <section>
- Classes: `PageSection_root__kFVv1 PageSection_rootHomepage__2x22W`
- Visual Role: pricing (confidence: 35%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 6: HERO
- Original Tag: <section>
- Classes: `PageSection_root__kFVv1 PageSection_rootHomepage__2x22W`
- Visual Role: hero (confidence: 35%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 7: SHOWCASE
- Original Tag: <section>
- Classes: `PageSection_root__kFVv1 PageSection_rootHomepage__2x22W`
- Visual Role: showcase (confidence: 40%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 8: TEAM
- Original Tag: <section>
- Classes: `CustomerQuotes_container__Grlfj hide-laptop`
- Visual Role: team (confidence: 20%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 9: CONTACT
- Original Tag: <section>
- Classes: `CTA_homepagePrefooter__FWdih`
- Visual Role: contact (confidence: 35%)
- Layout: Flexbox
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 10: CONTACT
- Original Tag: <header>
- Classes: `Header_header__hfMjL`
- Visual Role: contact (confidence: 35%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 11: NAV
- Original Tag: <header>
- Classes: `IssueView_header__sldQv SharedViewStyles_header__19pF0`
- Visual Role: nav (confidence: 20%)
- Layout: Flexbox
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 12: NAV
- Original Tag: <header>
- Classes: `IssueView_chatBoxHeader__dsIb0`
- Visual Role: nav (confidence: 20%)
- Layout: Flexbox
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 13: NAV
- Original Tag: <header>
- Classes: `SlackIssue_header__NtjDx utils_bottomGradientBorder__OEIzU`
- Visual Role: nav (confidence: 20%)
- Layout: Flexbox
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 14: NAV
- Original Tag: <header>
- Classes: `Plan_initiativesBoxHeader__BpkZm`
- Visual Role: nav (confidence: 20%)
- Layout: Flexbox
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 15: NAV
- Original Tag: <header>
- Classes: `Build_header__OAL8V`
- Visual Role: nav (confidence: 20%)
- Layout: Flexbox
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 16: NAV
- Original Tag: <header>
- Classes: `Monitor_header__guWRp`
- Visual Role: nav (confidence: 20%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 17: NAV
- Original Tag: <header>
- Classes: `Monitor_header__guWRp`
- Visual Role: nav (confidence: 20%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 18: NAV
- Original Tag: <header>
- Classes: `Monitor_pulseHeader__BiXEt`
- Visual Role: nav (confidence: 20%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 19: FOOTER
- Original Tag: <footer>
- Classes: `Footer_footer__lJt10`
- Visual Role: footer (confidence: 60%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 20: HERO
- Original Tag: <div>
- Classes: ``
- Visual Role: hero (confidence: 80%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 21: HERO
- Original Tag: <div>
- Classes: `Layout_container__BVtmP page_root__EA6JT`
- Visual Role: hero (confidence: 80%)
- Layout: Flexbox
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 22: HERO
- Original Tag: <div>
- Classes: `LayoutContent_root__ZBUya LayoutContent_homepage__alayp`
- Visual Role: hero (confidence: 80%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 23: PRICING
- Original Tag: <div>
- Classes: ``
- Visual Role: pricing (confidence: 55%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 24: SHOWCASE
- Original Tag: <div>
- Classes: `Bleed_root__EzNZN`
- Visual Role: showcase (confidence: 40%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 25: SHOWCASE
- Original Tag: <div>
- Classes: `Frame_wrapper___hKDg`
- Visual Role: showcase (confidence: 40%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 26: HERO
- Original Tag: <div>
- Classes: `Frame_background__iLZh4`
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 27: HERO
- Original Tag: <div>
- Classes: `Frame_shade__XyqbT hide-laptop`
- Visual Role: hero (confidence: 0%)
- Layout: CSS Grid
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 28: SHOWCASE
- Original Tag: <div>
- Classes: `Frame_frameWrapper__I7Olr`
- Visual Role: showcase (confidence: 40%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 29: SHOWCASE
- Original Tag: <div>
- Classes: `Frame_frame__xbIar`
- Visual Role: showcase (confidence: 40%)
- Layout: CSS Grid
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 30: HERO
- Original Tag: <div>
- Classes: `Frame_frameBackground__YBrog`
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 31: HERO
- Original Tag: <div>
- Classes: `Grain_grain__0LR5u Grain_grainSubtle__LzX_q`
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 32: HERO
- Original Tag: <div>
- Classes: `Frame_shine__Ei3zB`
- Visual Role: hero (confidence: 0%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.

Section 33: FOOTER
- Original Tag: <div>
- Classes: `Frame_shine__Ei3zB Frame_shineScroll__lRFOP`
- Visual Role: footer (confidence: 30%)
- Layout: Block flow
- Content instructions: Rebuild content for "SaaS Product Page" but strictly maintain classes, visual styling, backgrounds, and layout hierarchy.



=== MOTION TIMELINE & GSAP RECIPES ===
Recipe 1: SCROLL-TRANSLATE
- Target: `main.Layout_content__PrPCk` (main)
- Scroll Range: 0-100%
```javascript
gsap.to("main.Layout_content__PrPCk", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "main.Layout_content__PrPCk",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 2: SCROLL-TRANSLATE
- Target: `div.LayoutContent_root__ZBUya.LayoutContent_homepage__alayp:nth-child(2)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.LayoutContent_root__ZBUya.LayoutContent_homepage__alayp:nth-child(2)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.LayoutContent_root__ZBUya.LayoutContent_homepage__alayp:nth-child(2)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 3: SCROLL-TRANSLATE
- Target: `div.Frame_shade__XyqbT.hide-laptop:nth-child(3)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Frame_shade__XyqbT.hide-laptop:nth-child(3)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Frame_shade__XyqbT.hide-laptop:nth-child(3)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 4: SCROLL-TRANSLATE
- Target: `div.Bleed_root__EzNZN:nth-child(9)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Bleed_root__EzNZN:nth-child(9)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Bleed_root__EzNZN:nth-child(9)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 5: SCROLL-TRANSLATE
- Target: `div.Frame_wrapper___hKDg` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Frame_wrapper___hKDg", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Frame_wrapper___hKDg",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 6: SCROLL-TRANSLATE
- Target: `div.Frame_background__iLZh4:nth-child(1)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Frame_background__iLZh4:nth-child(1)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Frame_background__iLZh4:nth-child(1)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 7: SCROLL-TRANSLATE
- Target: `img.Image_root__UkRqc` (img)
- Scroll Range: 0-100%
```javascript
gsap.to("img.Image_root__UkRqc", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "img.Image_root__UkRqc",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 8: SCROLL-TRANSLATE
- Target: `div.Frame_frameWrapper__I7Olr:nth-child(4)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Frame_frameWrapper__I7Olr:nth-child(4)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Frame_frameWrapper__I7Olr:nth-child(4)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 9: SCROLL-TRANSLATE
- Target: `div.Frame_frame__xbIar` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Frame_frame__xbIar", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Frame_frame__xbIar",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 10: SCROLL-TRANSLATE
- Target: `div.Frame_frameBackground__YBrog:nth-child(1)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Frame_frameBackground__YBrog:nth-child(1)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Frame_frameBackground__YBrog:nth-child(1)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 11: SCROLL-TRANSLATE
- Target: `div.Frame_shine__Ei3zB:nth-child(1)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Frame_shine__Ei3zB:nth-child(1)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Frame_shine__Ei3zB:nth-child(1)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 12: SCROLL-TRANSLATE
- Target: `div.Frame_shine__Ei3zB.Frame_shineScroll__lRFOP:nth-child(1)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Frame_shine__Ei3zB.Frame_shineScroll__lRFOP:nth-child(1)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Frame_shine__Ei3zB.Frame_shineScroll__lRFOP:nth-child(1)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 13: SCROLL-TRANSLATE
- Target: `div.Grain_grain__0LR5u.Grain_grainSubtle__LzX_q:nth-child(2)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Grain_grain__0LR5u.Grain_grainSubtle__LzX_q:nth-child(2)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Grain_grain__0LR5u.Grain_grainSubtle__LzX_q:nth-child(2)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 14: SCROLL-TRANSLATE
- Target: `div.Frame_shine__Ei3zB.Frame_shineInner__wPfoO:nth-child(2)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Frame_shine__Ei3zB.Frame_shineInner__wPfoO:nth-child(2)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Frame_shine__Ei3zB.Frame_shineInner__wPfoO:nth-child(2)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 15: SCROLL-TRANSLATE
- Target: `div.SharedViewStyles_wrapperWithSidebar__mgB8H` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.SharedViewStyles_wrapperWithSidebar__mgB8H", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.SharedViewStyles_wrapperWithSidebar__mgB8H",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 16: SCROLL-TRANSLATE
- Target: `div.IssueView_body___grLQ` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.IssueView_body___grLQ", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.IssueView_body___grLQ",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 17: SCROLL-TRANSLATE
- Target: `div.Hero_container__inGFW.utils_inset__Xhl3T:nth-child(5)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Hero_container__inGFW.utils_inset__Xhl3T:nth-child(5)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Hero_container__inGFW.utils_inset__Xhl3T:nth-child(5)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 18: SCROLL-TRANSLATE
- Target: `div.SharedViewStyles_sidebar__Q5NUN:nth-child(2)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.SharedViewStyles_sidebar__Q5NUN:nth-child(2)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.SharedViewStyles_sidebar__Q5NUN:nth-child(2)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 19: SCROLL-TRANSLATE
- Target: `div.Benefits_benefit__IHWje.Grid_b___vQi_:nth-child(2)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Benefits_benefit__IHWje.Grid_b___vQi_:nth-child(2)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Benefits_benefit__IHWje.Grid_b___vQi_:nth-child(2)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 20: SCROLL-TRANSLATE
- Target: `div.Benefits_benefit__IHWje.Grid_a__vY7M8:nth-child(1)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Benefits_benefit__IHWje.Grid_a__vY7M8:nth-child(1)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Benefits_benefit__IHWje.Grid_a__vY7M8:nth-child(1)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 21: SCROLL-TRANSLATE
- Target: `div.Benefits_benefit__IHWje.Grid_c__Tv5Qw:nth-child(3)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Benefits_benefit__IHWje.Grid_c__Tv5Qw:nth-child(3)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Benefits_benefit__IHWje.Grid_c__Tv5Qw:nth-child(3)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 22: SCROLL-TRANSLATE
- Target: `h2.sc-d5151d0-0.exSLMF` (h2)
- Scroll Range: 0-100%
```javascript
gsap.to("h2.sc-d5151d0-0.exSLMF", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "h2.sc-d5151d0-0.exSLMF",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 23: SCROLL-TRANSLATE
- Target: `h1.sc-d5151d0-0.bgDIHX` (h1)
- Scroll Range: 0-100%
```javascript
gsap.to("h1.sc-d5151d0-0.bgDIHX", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "h1.sc-d5151d0-0.bgDIHX",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 24: SCROLL-TRANSLATE
- Target: `nav.Sidebar_sidebar__yeDLZ` (nav)
- Scroll Range: 0-100%
```javascript
gsap.to("nav.Sidebar_sidebar__yeDLZ", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "nav.Sidebar_sidebar__yeDLZ",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

Recipe 25: SCROLL-TRANSLATE
- Target: `div.Frame_glow__ZBzzr:nth-child(1)` (div)
- Scroll Range: 0-100%
```javascript
gsap.to("div.Frame_glow__ZBzzr:nth-child(1)", {
  y: -9681,
  ease: "none",
  scrollTrigger: {
    trigger: "div.Frame_glow__ZBzzr:nth-child(1)",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```



=== BOILERPLATE SETUP ===
```bash
npm install gsap
```

```javascript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

```

=== DEVELOPMENT LAWS ===
1. Use transform/opacity for all animations (GPU-composited).
2. Respect prefers-reduced-motion — disable parallax/stagger, keep simple fades.
3. Lazy-load WebGL/Three.js bundles; cap DPR at 2 on mobile.
4. Responsive: 390px, 834px, 1440px. CTA visible above fold on all.
5. WCAG AA contrast on all text surfaces.
6. Primary easing: cubic-bezier(0.22, 1, 0.36, 1).
7. Scroll-linked animations use scrub:1 unless noted otherwise.
8. Do not copy original text — adapt all copy to "SaaS Product Page" while preserving class structure and visual styling.
```
