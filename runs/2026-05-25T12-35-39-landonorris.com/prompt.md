# 1. Executive Design Diagnosis

**Design Language:** luxury minimal (confidence: 85%)
**Signals:** light palette, low CSS complexity, no WebGL
**Sections:** 41 major sections detected
**Motion Complexity:** 25 scroll-linked animations
**CSS Complexity:** 66/100
**Visual Rhythm:** 4 estimated sections; 3 major transition(s); 4 viewport(s) captured

This reference uses a luxury minimal approach with heavy motion choreography and advanced CSS effects.

---

# 2. Reference DNA Summary

**Stack:** GSAP, Lenis Scroll
**Layout:** Flexbox-dominant composition
**Typography:** "Mona Sans Variable", Arial, sans-serif, Brier, Arial, sans-serif, Brier
**Palette:** rgba(0, 0, 0, 0), rgb(0, 0, 0), rgb(255, 255, 0), rgb(51, 51, 51), rgb(255, 255, 255), rgb(56, 152, 236), rgba(0, 0, 0, 0.1), rgb(170, 173, 176)
**Design Language:** luxury minimal
**Key Differentiators:** light palette, low CSS complexity, no WebGL

---

# 3. Design Token System

## Color Palette
- **Background:** rgb(244, 244, 237), rgb(40, 44, 32), rgb(17, 17, 18), rgb(210, 255, 0)
- **Text:** rgb(83, 84, 80), rgb(221, 225, 210), rgb(0, 0, 0), rgb(178, 199, 58)
- **Token:** #ebeee0

## Typography
| Element | Size | Weight | Line-Height | Letter-Spacing |
|---------|------|--------|-------------|----------------|
| `h2` | 60px | 700 | 53.16px | -1.66667px |
| `p` | 16.6667px | 400 | 20.8333px | -0.166667px |
| `a` | 14px | 400 | 20px | — |
| `button` | 14px | 400 | 20px | — |
| `span` | 60px | 700 | 53.16px | -1.66667px |

## Spacing Scale
- normal
- 16.6667px
- 8.33333px
- auto
- 33.3333px
- 26.6667px
- 50px
- 25px
- 4.16667px
- 80px
- 160px
- 77px
- 156.75px
- 92.62px
- 18.37px
- 194.016px
- 237.562px
- 89.87px
- 660.562px
- 12.87px
- 88px
- 648.562px
- 22px
- 144.844px

## CSS Variables
--large: :after { border-width: 5px;
--vertical: :after { border-width: 4px;
--color--dark-green: #282c20;
--color--white: #f4f4ed;
--padding--container: 1.25rem;
--gap: 1.25rem;
--on-t-nav-spacer: 5.375rem;
--color--black: #111112;
--text--h1: 4rem;
--padding--xlarge: 5rem;
--padding--med: 3rem;
--color--lime-off: #b2c73a;
--color--lime: #d2ff00;
--color--green-off-white-1: #dde1d2;
--color--lime-zero: #d2ff0000;
--text--btn-primary: 1rem;
--text--btn-nav: 1.25rem;
--text--btn-footer: 1.875rem;
--color--green-off-white-2: #b4b8a5;
--color--dark-green-tint-2: #535450;
--color--grey-on-track: #b9bbad;
--text--impact: 7.9375rem;
--grid-spacer: 31.51vh;
--color--dark-green-tint-1: #3b3c38;
--padding--small: 2rem;
--color--grey-1: #ebeee0;
--color--green-light: #ebeee0;
--text--h2: 4.5rem;
--text--h3: 2rem;
--text--h4: 1.5rem;
--text--h5: 1.2rem;
--text--h6: 1rem;
--padding--mini: 1rem;
--padding--large: 4rem;
--radius--small: 1rem;
--radius--med: 3rem;
--radius--large: 6.25rem;
--vh: 1vh;
--max-vh: 100vh;
--grid-col: 25.4375rem;
/* ... and 25 more variables */


---

# 4. CSS Architecture

## Extracted Stylesheets
- **Total CSS rules:** 1330
- **External stylesheets:** 1
- **Unique selectors:** 1294
- **Keyframe animations:** 3
- **Media queries:** 30
- **@font-face declarations:** 3

## Keyframe Animations
```css
@keyframes spin { 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```
```css
@keyframes translateXLeft { 
  100% { transform: translateX(-100%); }
}
```
```css
@keyframes translateXRight { 
  100% { transform: translateX(100%); }
}
```

## Media Queries
- `screen and (max-width: 991px)` — 16 rule(s)
- `screen and (max-width: 767px)` — 16 rule(s)
- `screen and (max-width: 479px)` — 16 rule(s)
- `screen and (max-width: 767px)` — 1 rule(s)
- `(min-width: 768px)` — 8 rule(s)
- `screen and (max-width: 991px)` — 2 rule(s)
- `screen and (max-width: 767px)` — 3 rule(s)
- `screen and (max-width: 479px)` — 2 rule(s)
- `screen and (max-width: 479px)` — 1 rule(s)
- `screen and (max-width: 991px)` — 104 rule(s)
- `screen and (max-width: 767px)` — 14 rule(s)
- `screen and (max-width: 479px)` — 317 rule(s)
- `screen and (max-width: 991px)` — 1 rule(s)
- `screen and (max-width: 479px)` — 16 rule(s)
- `screen and (max-width: 991px)` — 1 rule(s)
- `screen and (max-width: 767px)` — 1 rule(s)
- `screen and (max-width: 479px)` — 1 rule(s)
- `screen and (max-width: 991px)` — 1 rule(s)
- `only screen and (max-width: 479px)` — 1 rule(s)
- `only screen and (max-width: 479px)` — 1 rule(s)
- `(min-width: 1920px)` — 1 rule(s)
- `only screen and (min-width: 992px)` — 5 rule(s)
- `only screen and (min-width: 992px)` — 1 rule(s)
- `only screen and (min-width: 992px)` — 1 rule(s)
- `screen and (max-width: 497px)` — 2 rule(s)
- `only screen and (min-width: 992px)` — 1 rule(s)
- `only screen and (max-width: 991px)` — 1 rule(s)
- `screen and (max-width: 767px)` — 1 rule(s)
- `screen and (max-width: 497px)` — 1 rule(s)
- `only screen and (max-width: 479px)` — 2 rule(s)

## @font-face Declarations
```css
@font-face { font-family: webflow-icons; src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format("truetype"); font-weight: normal; font-style: normal; }
```
```css
@font-face { font-family: Brier; src: url("https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67b6113a220f85ad6497495a_Brier-Bold.woff2") format("woff2"); font-weight: 700; font-style: normal; font-display: swap; }
```
```css
@font-face { font-family: "Mona Sans Variable"; src: url("https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67bc6274c5b4108b123aa4d5_MonaSans-VariableFont_wdth%2Cwght.woff2") format("woff2"); font-weight: 200 900; font-style: normal; font-display: swap; }
```

## Key Selectors (first 60)

`html` {
  text-size-adjust: 100%;
  font-family: sans-serif;
}

`body` {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

`article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary` {
  display: block;
}

`audio, canvas, progress, video` {
  vertical-align: baseline;
  display: inline-block;
}

`audio:not([controls])` {
  height: 0px;
  display: none;
}

`[hidden], template` {
  display: none;
}

`a` {
  background-color: rgba(0, 0, 0, 0);
}

`a:active, a:hover` {
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
}

`abbr[title]` {
  border-bottom-width: 1px;
  border-bottom-style: dotted;
  border-bottom-color: currentcolor;
}

`b, strong` {
  font-weight: bold;
}

`dfn` {
  font-style: italic;
}

`h1` {
  margin-top: 0.67em;
  margin-right: 0px;
  margin-bottom: 0.67em;
  margin-left: 0px;
  font-size: 2em;
}

`mark` {
  color: rgb(0, 0, 0);
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(255, 255, 0);
}

`small` {
  font-size: 80%;
}

`sub, sup` {
  vertical-align: baseline;
  font-size: 75%;
  line-height: 0;
  position: relative;
}

`sup` {
  top: -0.5em;
}

`sub` {
  bottom: -0.25em;
}

`img` {
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-top-color: currentcolor;
  border-right-color: currentcolor;
  /* + 7 more properties */
}

`svg:not(:root)` {
  overflow-x: hidden;
  overflow-y: hidden;
}

`hr` {
  box-sizing: content-box;
  height: 0px;
}

`pre` {
  overflow-x: auto;
  overflow-y: auto;
}

`code, kbd, pre, samp` {
  font-family: monospace;
  font-size: 1em;
}

`button, input, optgroup, select, textarea` {
  color: inherit;
  font-style: inherit;
  font-variant-ligatures: inherit;
  font-variant-caps: inherit;
  font-variant-numeric: inherit;
  font-variant-east-asian: inherit;
  font-variant-alternates: inherit;
  font-variant-position: inherit;
  font-variant-emoji: inherit;
  font-weight: inherit;
  /* + 14 more properties */
}

`button` {
  overflow-x: visible;
  overflow-y: visible;
}

`button, select` {
  text-transform: none;
}

`button, html input[type="button"], input[type="reset"]` {
  appearance: button;
  cursor: pointer;
}

`button[disabled], html input[disabled]` {
  cursor: default;
}

`input` {
  line-height: normal;
}

`input[type="checkbox"], input[type="radio"]` {
  box-sizing: border-box;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button` {
  height: auto;
}

`input[type="search"]` {
  appearance: none;
}

`input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration` {
  appearance: none;
}

`legend` {
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-top-color: currentcolor;
  border-right-color: currentcolor;
  /* + 11 more properties */
}

`textarea` {
  overflow-x: auto;
  overflow-y: auto;
}

`optgroup` {
  font-weight: bold;
}

`table` {
  border-collapse: collapse;
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: 0px;
}

`td, th` {
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

`[class^="w-icon-"], [class*=" w-icon-"]` {
  speak: none;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-variant-position: normal;
  font-variant-emoji: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  /* + 4 more properties */
}

`.w-icon-slider-right::before` {
  content: "";
}

`.w-icon-slider-left::before` {
  content: "";
}

`.w-icon-nav-menu::before` {
  content: "";
}

`.w-icon-arrow-down::before, .w-icon-dropdown-toggle::before` {
  content: "";
}

`.w-icon-file-upload-remove::before` {
  content: "";
}

`.w-icon-file-upload-icon::before` {
  content: "";
}

`*` {
  box-sizing: border-box;
}

`html` {
  height: 100%;
}

`body` {
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  min-height: 100%;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
}

`img` {
  vertical-align: middle;
  max-width: 100%;
  display: inline-block;
}

`html.w-mod-touch *` {
  background-attachment: scroll;
}

`.w-block` {
  display: block;
}

`.w-inline-block` {
  max-width: 100%;
  display: inline-block;
}

`.w-clearfix::before, .w-clearfix::after` {
  content: " ";
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;
  display: table;
}

`.w-clearfix::after` {
  clear: both;
}

`.w-hidden` {
  display: none;
}

`.w-button` {
  color: rgb(255, 255, 255);
  line-height: inherit;
  cursor: pointer;
  background-color: rgb(56, 152, 236);
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: none;
  border-right-style: none;
  /* + 24 more properties */
}

`input.w-button` {
  appearance: button;
}

`html[data-w-dynpage] [data-w-cloak]` {
  color: rgba(0, 0, 0, 0);
}

`.w-code-block` {
  margin-top: unset;
  margin-right: unset;
  margin-bottom: unset;
  margin-left: unset;
}

`pre.w-code-block code` {
  all: inherit;
}

`pre.w-code-block code > span` {
  display: block;
}

*... and 1234 more selectors (see full extraction in evidence.json)*


---

# 5. Component Architecture

Build these components:
- Hero section (full viewport)
- Proof/trust block (metrics, logos, testimonials)
- Team/about section
- Contact/booking form
- Footer (business identity, legal)
- WebGL/canvas layer (lazy-loaded, non-critical)

**Stack recommendation:** Astro/Vite + GSAP for scroll choreography

---

# 6. Section-by-Section Build Spec

41 sections detected:

## Section 1: Hero
- **Confidence:** 45%
- **Tag:** section
- **Classes:** `s home-hero`
- **Size:** full viewport height, width: 1440px
- **CTAs:** Monacogp
- **Media:** 1 image(s), 2 canvas(es), 3 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.gl-canvas: transition: all
  - `div`.home-hero-next-race-w: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1)
  - `div`.home-hero-next-race-outline: transition: all
  - `svg`: transition: all
  - `div`.home-hero-next-race-row: transition: all
  - `div`.home-hero-next-race-row: transition: all
  - `div`.nr-list: transition: all
  - `div`.w-dyn-item: transition: all
  - `div`.base-helmet-rive-w: transition: all

### Element Style Blueprint

- **`<div>`** .c.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scroll"

- **`<div>`** .gl-canvas
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1)
  - text: "Next Race Monacogp mclaren f1 since 2019"

- **`<div>`** .home-hero-next-race-outline.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: all

- **`<svg>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: inline | width: 99.1562px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-row.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Monacogp"

- **`<div>`** .home-hero-next-race-row.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .nr-list.w-dyn-items
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Monacogp"

- **`<div>`** .w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Monacogp"

- **`<div>`** .base-helmet-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 80.8281px | opacity: 1
  - anim: all

- **`<div>`** .base-helmet-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 80.8281px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-top
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Next Race"

- **`<div>`** .eyebrow-w.hero-next-race
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: center | border: 0px none rgb(83, 84, 80) | display: flex | width: 79.3125px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 8.33333px | text-transform: uppercase | text-align: center | border: 0px none rgb(83, 84, 80) | display: block | width: 79.3125px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 8.33333px | text-transform: uppercase | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 47.5312px | opacity: 1
  - anim: all
  - text: "Next Race"

- **`<div>`** .home-hero-next-race-line
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | bg: rgb(83, 84, 80) | border: 0px none rgb(83, 84, 80) | display: block | width: 79.3125px | margin: 0px 9.92188px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-tablet-hero-text
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .home-hero-touch-controls-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all
  - text: "tap to lockBack to scroll"

- **`<div>`** .home-hero-tablet-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all

- **`<div>`** .eyebrow-w.hero-next-race
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<button>`** .btn-w.is-touch-swipe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: center | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 50px | padding: 0px 13.3333px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-touch-desc-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "tap to lockBack to scroll"

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 100% | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 8.33333px | text-transform: uppercase | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .btn-inner.is-touch-swipe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: center | border: 0px none rgb(40, 44, 32) | display: flex | opacity: 1
  - anim: all

- **`<div>`** .touch-desc-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "tap to lock"

- **`<div>`** .touch-desc-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "Back to scroll"

- **`<div>`** .btn-icon-w.is-touch-swipe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: center | border: 0px none rgb(40, 44, 32) | display: flex | width: 16px | opacity: 1
  - anim: all

- **`<div>`** .text-eyebrow.touch-desc
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 8.33333px | text-transform: uppercase | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "tap to lock"

- **`<div>`** .text-eyebrow.touch-desc
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 8.33333px | text-transform: uppercase | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "Back to scroll"

### HTML Structure

```html
<section data-hero-animation-container="" class="s home-hero"><div class="c home-hero"><div data-gl="head" data-sticky-hero="canvas" class="gl-canvas"></div><div class="home-hero-next-race-w"><div class="home-hero-next-race-outline w-embed"><svg width="119" height="244" viewBox="0 0 119 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M118.5 6v232a5.5 5.5 0 0 1-5.5 5.5H6A5.5 5.5 0 0 1 .5 238V25A5.5 5.5 0 0 1 6 19.5h46.346c4.695 0 9.167-2 12.297-5.498l7.46-8.337A15.5 15.5 0 0 1 83.653.5H113a5.5 5.5 0 0 1 5.5 5.5Z" stroke="currentColor"></path>
</svg></div><div class="home-hero-next-race-top"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Next Race</div></div><div class="home-hero-next-race-row is-1 w-dyn-list"><div role="list" class="nr-list w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/calendar" class="home-hero-next-race-row w-inline-block"><div class="home-hero-next-race-rive-w"><div class="home-hero-next-race-rive w-embed"><!-- data-rive-circuit-hover="true"
-- looks for all [data-rive-circuit-hover-target] elements on page
-- changes the data-rive-input-track to the value of that hovered attribute
--> 
<canvas data-rive-object="" data-rive-file="circuits" data-rive-artboard="circuits" data-rive-state-machine="circuits" data-rive-input-track="monaco" data-rive-input-color="" data-rive-input-weight="" data-rive-fit="contain" data-rive-circuit-hover="">
</canvas></div></div><div class="eyebrow-w gap0-25"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Monaco</div><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">gp</div></div></a></div></div></div><div class="home-hero-next-race-line"></div><div data-gl-helmet="hover" class="home-hero-next-race-row is-2"><div class="base-helmet-rive-w"><div class="base-helmet-rive w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="helmet-reef" data-rive-state-machine="helmet-reef_play" data-rive-input="" data-rive-instant-play="true" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><div class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">mclaren f1 since 2019</div></div></div></div><div class="home-hero-tablet-hero-text"><div data-hero-anim="mob1" class="home-hero-tablet-text-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg" loading="lazy" alt="Lando Norris Text" class="image"></div><div data-hero-anim="mob2" class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines,chars" class="text-eyebrow">mclaren f1 since 2019</div></div></div><div data-home-swipe-wrap="" class="home-hero-touch-controls-w"><button title="Toggle Swipe" data-home-swipe-toggle="" class="btn-w is-touch-swipe"><div class="btn-inner is-touch-swipe"><div class="btn-icon-w is-touch-swipe"><div class="btn-rive-w is-touch-swipe is-unlocked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.51 15.32">
  <g>
    <path d="M4.9 15.32c-.37 0-.73-.07-1.07-.2s-.65-.34-.92-.61L.12 10.58a.747.747 0 0 1 .2-1.02l1.17-.8c.22-.22.52-.22.81-.13L2.27.77c0-.22.08-.4.23-.55S2.84 0 3.05 0s.39.07.54.22c.14.15.22.33.22.55v10.22s.02 1.13.02 1.55.28 1.26 1.08 1.26h4.78c.61 0 1.14-.2 1.57-.61.49-.47.73-1.15.73-1.83V7.15c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v4.34c0 1.07-.37 1.98-1.11 2.72s-1.65 1.11-2.72 1.11H4.9Z" fill="currentColor"></path>
    <path d="M5.51 7.92V3.83c0-.22.08-.4.23-.55.15-.14.34-.22.55-.22s.39.07.54.22c.14.15.22.33.22.55v4.09H5.51ZM8.73 7.92V5.11c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v2.81H8.73Z" fill="currentColor"></path>
  </g>
</svg></div><div class="btn-rive-w is-touch-swipe is-locked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.51 8.51">
<g><path d="M7.89 7.89.63.63M.63 7.89 7.89.63" stroke="currentColor" stroke-width="0.17rem"></path>
</g></svg></div></div></div></button><div class="home-hero-touch-desc-w"><div data-home-swipe-desc="unlocked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">tap to lock</div></div><div data-home-swipe-desc="locked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">Back to scroll</div></div></div></div></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 2: Hero
- **Confidence:** 0%
- **Tag:** section
- **Classes:** `s home-marquee`
- **Size:** full viewport height, width: 1440px
- **Media:** 2 image(s), 1 canvas(es)
- **Animations:**
  - `div`.c: transition: all
  - `div`.marquee-gl-rive-target: transition: all
  - `div`.marqee-adv-layout: transition: all
  - `div`.marquee-gl-target-w: transition: all
  - `div`.marquee-gl-target: transition: all
  - `div`.marquee-adv-top-w: transition: all
  - `div`.marquee-adv-top-layout: transition: all
  - `div`.marquee-signature-w: transition: all
  - `div`.eyebrow-w: transition: all
  - `div`.gl-carousel: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-gl-rive-target
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 800px | opacity: 1
  - anim: all

- **`<div>`** .marqee-adv-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-gl-target-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marquee-gl-target
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 471.656px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-top-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-adv-top-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 99.0625px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-signature-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 66px | opacity: 1
  - anim: all

- **`<div>`** .eyebrow-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 99.0625px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .gl-carousel
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

### HTML Structure

```html
<section class="s home-marquee"><div class="c is-marquee"><div class="marqee-adv-layout"><div class="marquee-adv-top-w"><div class="marquee-adv-top-layout"><div class="marquee-signature-w"><div data-wf--c-home-hero-icon--variant="ln4" class="home-hero-logo-wrap"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" data-hero-anim="img" alt="Lando's signature in lime color" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg" loading="eager" data-hero-anim="img" alt="" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-ln4-logo"></div></div><div class="eyebrow-w"><div split-text="chars" data-hero-anim="msg" class="text-eyebrow">Message from lando</div></div></div></div><div class="marquee-gl-target-w"><div data-sticky-hero="target" class="marquee-gl-target"><div class="marquee-gl-rive-target"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_scroll" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target=".hero-rive-tracker" data-rive-scrolltrigger-start="top center" data-rive-scrolltrigger-end="bottom 80%">
</canvas></div></div></div></div><div data-gl="carousel" class="gl-carousel"></div></div></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 3: Contact
- **Confidence:** 20%
- **Tag:** section
- **Classes:** `s`
- **Size:** full viewport height, width: 1440px
- **Media:** 1 canvas(es), 1 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.impact-content-w: transition: all
  - `div`.text-impact-lg-mona: transition: all
  - `div`.impact-icon-w: transition: all
  - `div`.base-helmet-rive-w: transition: all
  - `div`.base-helmet-rive: transition: all
  - `div`.text-eyebrow: transition: all
  - `div`.base-helmet-rive: transition: all

### Element Style Blueprint

- **`<div>`** .c
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 o"

- **`<div>`** .impact-content-w.is-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 1068px | padding: 80px 0px 160px | margin: 0px 169.344px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 o"

- **`<div>`** .text-impact-lg-mona
  - font: 105.833px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 95.25px | ls: -0.833333px | text-transform: uppercase | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 1068px | opacity: 1
  - anim: all
  - text: "Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 on and off the track."

- **`<div>`** .impact-icon-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 101.391px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .base-helmet-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 101.391px | opacity: 1
  - anim: all

- **`<div>`** .base-helmet-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 80.8281px | margin: 0px 10.2812px | opacity: 1
  - anim: all

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 8.33333px | text-transform: uppercase | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 101.391px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .base-helmet-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | width: 80.8333px | margin: 0px auto | opacity: 1
  - anim: all

### HTML Structure

```html
<section class="s"><div class="c"><div class="impact-content-w is-home"><div class="impact-icon-w"><div class="base-helmet-rive-w"><div data-rive-placeholder="" class="base-helmet-rive w-embed"><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 97 50.1">
  <path d="M.4 27.6s3 .9 6.1 5.9c-.4-1.1-.6-2.2-.8-3.4C1.5 27.8 1.1 25.7.8 22c.2 1 3.2 2.4 3.6 4 .4 1.3.8 2.5 1.3 3.1 0-1-.1-2 0-3v-.5c-1.3-1.1-4.3-4.3-3.5-9.1.5 1.2 3 1.6 3.7 7.4.2-1.1.5-2.1.8-3.2C5.5 19.2 3.5 15 5.6 7.9c.3 1.2 2.5 5.7 2 8.3-.2.8-.2 1.7-.3 2.6 0-.2.1-.4.2-.6.3-.9.7-1.8 1.2-2.7 0-1.4-.2-2.8-.8-4.1-.3-.6-.4-1.3-.4-2s.4-1.3.8-1.8c.6-.8.8-2.8.8-2.8s2.2 3.4 0 9.8c.4-.7.9-1.5 1.4-2.1.4-1 .4-2 .2-3.1-.4-1.8-.7-4.5 2.2-7.7-.3 1.5.4 4.2-.1 6-.4 1.3-.9 2.6-1.5 3.8.5-.6 1.1-1.2 1.7-1.8.3-1 .2-2.5.8-4.9.7-2.9 2.2-3.3 2.8-4.8.5 3.3-1 6.7-2.4 8.6l.4-.3c.4-.3.8-.6 1.1-1 .4-1.8 1.2-3.5 2.4-5 .8-.9 2.7-1.4 3-2.2-.3 3.3-2.3 5.1-4 6.3.9-.5 1.9-.7 2.9-.7s2 .4 2.8 1c0 0-2.2 1.3-3.7 1.1-1.5-.2-2.1-.5-3-.2-.3.3-.7.6-1.1.9 2.2-.6 4.8 1 5.8 2-1.9.9-3.5.3-4.3-.6-.7-.7-1.8-.4-2.3-.8-.7.6-1.3 1.2-2 1.8-.7.7-1.3 1.5-1.9 2.4 1.4-1.3 3.7-2.7 6-2.2-.3.9-1.8 2.5-3.4 3.1-1.4.4-2.7.4-3.6.9-.6 1-1 2.1-1.4 3.3 2.1-3.1 6.3-3.9 7.3-3.7 0 0-2 .9-2.4 2.4-.5 1.6-2.2 2.1-3.6 2.2-.7.1-1.4.5-1.9 1-.4 1.4-.8 2.9-1 4.4 1.9-6.5 6.4-5.5 6.4-5.5-.6.3-1 .9-1.2 1.5-.4 1.1-.9 2-2.6 3.2-1.2.8-2.2 2.1-2.7 3.5 0 1.8.4 3.5.9 5.2-.3-2.2-.2-5.2 1.4-7.4-.2 1.5 1.5 4.1 1.1 5.9-.3 1.5-1.4 3.4-1.2 4.8.2.4.4.8.6 1.1 0-1 .5-2.3.5-3.3.3.9.2 3 .2 4.4.5.8 1.1 1.5 1.7 2.2-1.3-2.4-1.4-6-.4-9 1 1.5 2.1 4.4 1.8 6.4-.2 1.5 0 2.9.4 4.3l.3.3c.3.3.7.6 1 .8-1.5-2.1-1.3-5.3-1-6.7 1.8 2 3.3 6 3.2 8.1l1.2.6c1.6.7 3.4 1.1 5.1.6v.2l.1.2v.4c-1.8.5-3.8 0-5.5-.7l-1.8-.9c-1.1 1.1-3.4 1.8-4.8 1.4-1.3-.4-2.6-1.4-3.6-1.3 1.7-1.8 3.9-1.9 5.2-1.1 1.2.7 2 1 2.7.8-.8-.5-1.6-1.1-2.3-1.7l-.3-.3c-1.9.7-4 0-5.3-.8-1.5-.9-1.7-2.6-2.8-3.5 3.5-.1 5 1.4 5.6 2.3.5.7 1.2 1.3 2 1.5-1.1-1.1-2.1-2.2-2.9-3.5-.9-.2-3 0-4.1-1.5 1.5-.1 2.6 0 3.4.5-.2-.4-.4-.8-.6-1.1-1.1-.2-3.1 0-4.4-1.1-1.1-1.1-2.2-2.3-3.1-3.6 0 0 2.5.5 3.8 1.1-1.1-1-3.8-5.7-3.8-5.8ZM96.4 27.3s-3 1-6 6c.3-1.1.6-2.2.7-3.4 4.3-2.4 4.6-4.5 4.9-8.2-.2 1-3.1 2.5-3.6 4.1-.4 1.3-.8 2.5-1.2 3.2v-3.5c1.3-1.1 4.2-4.4 3.3-9.1-.4 1.2-3 1.6-3.6 7.5-.2-1.1-.5-2.1-.8-3.2 1.2-1.5 3.1-5.8.9-12.8-.3 1.2-2.4 5.7-1.9 8.3.2.8.3 1.7.3 2.6 0-.2-.1-.4-.2-.6L88 15.5c0-1.4.2-2.8.7-4.1.3-.6.4-1.3.3-2 0-.7-.4-1.3-.9-1.8-.6-.8-.9-2.8-.9-2.8s-2.1 3.5.2 9.8c-.4-.7-.9-1.4-1.5-2.1-.4-1-.5-2-.3-3.1.4-1.8.6-4.5-2.3-7.7.3 1.5-.4 4.2.2 6 .4 1.3.9 2.5 1.5 3.8-.5-.6-1.1-1.2-1.8-1.7-.3-1-.2-2.5-.8-4.9-.8-2.9-2.2-3.2-2.9-4.8-.4 3.3 1.1 6.7 2.5 8.6l-.4-.3-1.2-.9c-.4-1.8-1.3-3.5-2.5-5-.8-.9-2.8-1.3-3-2.2.3 3.3 2.4 5 4.1 6.3-.9-.5-1.9-.7-2.9-.6-1 0-2 .4-2.8 1 0 0 2.2 1.2 3.7 1 1.5-.2 2.1-.5 3-.2.3.3.7.6 1.1.9-2.2-.6-4.8 1.1-5.8 2.1 2 .9 3.5.2 4.3-.6.7-.7 1.7-.5 2.3-.9.7.6 1.4 1.1 2 1.8.7.7 1.3 1.5 1.9 2.3-1.4-1.2-3.7-2.6-6-2.1.3.9 1.8 2.5 3.5 3 1.4.4 2.7.4 3.6.8.6 1 1.1 2.1 1.5 3.2-2.2-3.1-6.4-3.7-7.4-3.6 0 0 2 .8 2.5 2.4.5 1.6 2.2 2 3.7 2.2.7 0 1.4.4 1.9 1 .5 1.4.8 2.9 1.1 4.4-2-6.4-6.5-5.4-6.5-5.4.6.3 1 .9 1.2 1.5.4 1.1.9 2 2.7 3.2 1.3.8 2.2 2 2.8 3.4 0 1.8-.3 3.5-.8 5.2.3-2.2.1-5.2-1.5-7.4.2 1.5-1.5 4.1-1 5.9.4 1.5 1.5 3.4 1.3 4.8l-.6 1.2c0-1-.5-2.3-.5-3.3-.3.9-.1 3-.2 4.4-.5.8-1 1.5-1.6 2.2 1.2-2.5 1.3-6 .2-9-1 1.5-2 4.5-1.7 6.5.2 1.5.1 2.9-.3 4.3l-.3.3c-.3.3-.7.6-1 .9 1.5-2.2 1.2-5.3.9-6.7-1.8 2-3.2 6-3 8.1-.4.2-.8.4-1.1.6-1.6.7-3.4 1.2-5.1.7v.8c1.9.5 3.8 0 5.5-.8.6-.3 1.2-.6 1.8-1 1.1 1.1 3.5 1.7 4.8 1.3 1.3-.4 2.6-1.5 3.6-1.4-1.7-1.7-4-1.8-5.2-1-1.1.7-1.9 1.1-2.7.8.8-.5 1.6-1.1 2.3-1.8l.3-.3c1.9.6 4 0 5.3-.9 1.4-.9 1.7-2.6 2.8-3.6-3.5 0-4.9 1.5-5.5 2.4-.5.7-1.2 1.3-2 1.5 1.1-1.1 2-2.3 2.9-3.5.9-.2 3-.1 4.1-1.6-1.5-.1-2.6 0-3.4.5l.6-1.2c1.1-.2 3.1 0 4.4-1.2 1.1-1.1 2.1-2.3 3-3.6 0 0-2.5.5-3.7 1.2 1.1-1 3.7-5.8 3.7-5.9ZM67.3 20.4zM67.2 20.8zM67.3 20.4zM67.3 20.4zM67.2 20.8zM68.4 33.8c.1-.7.3-1.4.4-2.3 1.1-6.1.4-11.8-2-17-2.9-6.2-9.3-12.9-18.3-13.1-9.1 0-15.6 6.4-18.7 12.6-2.6 5.1-3.4 10.8-2.4 17 .1.9.3 1.6.4 2.3 0 .5.1.9.3 1.4.1.6.3 1.2.4 1.7v.2c.1.5.3 1 .4 1.5.3 1 .5 1.5.8 1.9 0 .2.2.4.3.7l.3.9v.3c0 .3.1.5.2.8 0 1.4.7 2.2 1.5 3.3.9 1.1 1.6 1.3 2.9 1.5.9.1 1.4.2 3 .6l2 .4c2.3.8 4.6 1.3 7.9 1.3h.4c3.1 0 5.2-.4 7.5-1.1s1.9-.4 1.9-.4c1.6-.3 2.2-.4 3.1-.5 1.3-.2 2-.3 3-1.5.9-1 1.5-1.8 1.6-3.2.1-.3.2-.5.3-.8V42c0-.4.2-.7.3-.9.1-.3.2-.5.3-.7.3-.5.5-.9.8-1.9.1-.5.3-1 .4-1.5v-.2c.1-.5.3-1.1.4-1.7.2-.4.3-.9.3-1.4Zm-1-.2v.2c0 .3-.1.6-.2.9-.4 1.2-1.6 2.1-3.5 2.8.1-.3.2-.6.3-1 .4.1.9.2 1.4-.1.3-.2.4-.5.6-.8.1-.3.2-.6.3-1 .2-.7.3-1.7.6-2.8 0 .2 0 .4.2.6.1.2.3.2.5.3 0 .3-.1.7-.2 1ZM47.9 46.5c-7.3 0-13.6-1.7-16.1-4.1.1-.1.3-.3.6-.4 4.8 2.5 12.5 2.8 15.4 2.9h.7c3.3 0 10.4-.3 14.9-2.5.3.1.5.3.6.4-2.6 2.3-8.9 3.8-16.1 3.7ZM28.7 33.3v-.2c0-.3-.1-.6-.2-1 .4 0 .6-.4.7-.8.2.8.3 1.5.4 2 .2 1.4.4 2.2 1 2.6.3.2.6.3.8.3h.5c0 .3.1.7.2 1-1.9-.7-3-1.7-3.4-2.9 0-.3-.1-.6-.2-.9Zm1.8-18.5c.2-.2.4-.4.6-.5-.4.6-.9 1.3-1.2 2 .2-.5.4-.9.6-1.4Zm35.6.5c.2.5.4 1 .6 1.4-.4-.7-.8-1.4-1.2-2 .2.2.4.3.6.6ZM68 30.4h-.2c-.2 0-.5 0-.6.3.2-.9.4-1.5.5-1.9.2-.6.3-.8.5-.9 0 .9-.2 1.8-.3 2.8Zm-4.6 10.9h-.1c-.3-.1-.7-.2-1.1-.3 1.4-.4 2.6-.9 3.4-1.5-.5.7-1.3 1.3-2.3 1.8Zm-29.4.4c1.2-.2 2.5-.2 2.6-.2 3 .5 6.8.9 11.4.9h1.3c4.2 0 7.6-.3 10.4-.8 0 0 1.1.2 2.3.4-3.7 1.4-9.1 2-14 1.9-4.9 0-10.3-.7-13.9-2.2Zm-3.7-2.6c.9.6 2 1.2 3.4 1.6-.4 0-.8.1-1.1.2h-.1c-.9-.5-1.7-1.2-2.2-1.9Zm17.6 2.3c-10.6-.1-17.1-1.8-18.4-4.7 1.2.9 3 1.6 5.4 2.1 3.9.8 8.9.9 12.9.9h3.9c3.2 0 6.6-.1 9.5-.6 2.4-.4 4.2-1.1 5.4-2-1.4 2.9-8 4.4-18.6 4.2ZM33 35.3c0-.1 0-.3.4-.4.6-.1 1.1-.2 1.6-.2.6 0 1-.1 1.5-.3.4-.2.7 0 .7 0h.1v.8c0 .1-.1.3-.1.5v1c-.2.2-.2.2-1.1.2h-.3c-.7 0-1 .1-1.3.3-.2 0-.3.2-.6.2-.5 0-.7-1.3-.8-2.1Zm30.1.4Zm0 0Zm-4.1-1Zm-11 3.4v.5-.5s-.9 0-3.7-.4c.1-.1.2-.2.3-.4.4-.6 0-1.8 0-2 0-.1 0-.2-.2-.3 1 0 2.2 0 3.5.1h3.6s-.1.2-.2.3c0 .2-.5 1.4-.1 1.9.1.3.2.4.3.5-2.8.3-3.7.3-3.7.3Zm-7-2.6c.6.1 1.3.3 2.1.4h.3v.4h-.2c-.8-.1-2.3-.6-3.2-1.1.3 0 .7.1 1 .2Zm11.7 1v-.4h.3c.8 0 1.5-.2 2.1-.3.4 0 .7-.1 1-.2-.9.4-2.4.9-3.2 1h-.2Zm-16.8 1.4c.9 0 1.4 0 1.9-.6.2-.3.3-.6.3-.8 1.3.9 3.6 1.7 5.6 2.1-2.7 0-5.5-.3-8-.7h.2Zm22-1.1c0 .3 0 .6.3.8.5.6 1 .6 1.9.6h.2c-2.5.4-5.3.5-8 .5 2-.3 4.3-1.1 5.7-2Zm2.2.4c-.8 0-.9 0-1.1-.2-.1-.2 0-.4 0-.7V36c0-.2 0-.4-.1-.5s0-.1 0-.3v-.4h.7c.4.2.9.3 1.4.3.5 0 1 .1 1.7.3.3 0 .3.2.4.2v.1c-.1.8-.4 2.1-.8 2.1-.3 0-.4 0-.6-.2-.3-.2-.6-.3-1.3-.3h-.3Zm5.1-2.9v.4c-.3.3-.5.4-.5.4 0-.4-.4-1-1.6-1.3-.7-.2-1.3-.3-1.7-.3-.5 0-.8 0-1.1-.2-.6-.3-1.1-.2-1.4 0L58 33h-.2s-2.4.8-9.6.7c-7.3 0-9.5-.9-9.6-.9h-.2l-.9.2c-.3-.1-.8-.2-1.4 0-.3.1-.7.2-1.1.2-.5 0-1.1 0-1.8.3-1.1.3-1.5.9-1.6 1.3 0 0-.2 0-.5-.4 0-.3-.1-.7-.2-1.1-.1-.7-.3-1.5-.5-2.4-.1-.6-.3-1.1-.4-1.5-.4-1.6-.5-2.3-1.2-2.8-.4-.3-.2-1.3 0-2v-.2c.2-1.1.3-1.8.3-2.6 0-.7.2-1.4.2-1.4V20c0-.2-.1-.4-.2-.5.6 0 .6 0 .7.3v.4c0 .6.2 1.2.4 2.2.3 1.2.7 1.2 3.4 1.1h1c3.8-.2 6.2-.2 13.5 0 7.6 0 10.1.1 13.9.4.9 0 1.6.1 2.2.1h1.2c.3 0 .6-.2.8-.4.2-.2.2-.5.3-.7.3-1.1.4-1.9.5-2.5v-.2h.6v2.1c0 .8 0 1.5.2 2.6 0 .5.2 1 .2 1.5 0 .4-.1.6-.2.7-.5.3-.7.8-.9 1.4-.2.6-.4 1.5-.7 2.8-.4 1.3-.6 2.4-.7 3.2Zm-37-4.4c-.1-.9-.2-1.8-.2-2.8.4.3.5.7.8 2.2 0 .2.1.5.2.7 0 0 0-.1-.1-.1-.2-.1-.3-.2-.5-.2h-.2ZM52.5 6.2c-.4.7-.8 1.5-1.1 2.3-1-.2-1.9-.3-3-.3-1 0-2 0-3 .2-.3-.8-.7-1.6-1.1-2.3 1.3-.3 2.7-.5 4.1-.5 1.4 0 2.7.2 4.1.6Zm-4.3 3h.2c.9 0 1.8.1 2.6.2-.3.8-.6 1.7-.8 2.6h-3.6c-.2-.9-.5-1.7-.8-2.6.8-.1 1.6-.2 2.4-.2Zm17.5 11.4c-1.4-2-3.2-3.8-5.3-5.1.3-.3.6-.6.9-.8 1.9 1.8 3.4 3.9 4.4 5.8ZM49.9 13c-.2.7-.3 1.5-.5 2.2h-2.2c-.1-.8-.3-1.5-.4-2.2h3.1Zm-1.6 3.2h1c-.1.7-.2 1.4-.3 2.2h-1.4c0-.7-.1-1.5-.2-2.2h1Zm15.3 5.9c-1.4-1-3.1-1.9-5.3-2.5.1-.5.3-1 .5-1.5 2.1.9 3.8 2.3 5.2 4h-.4Zm-15.5-.5h-.4c0-.8 0-1.5-.1-2.3h1.2c0 .7-.1 1.5-.2 2.3H48Zm-8.6-.1c0-.5-.1-1-.2-1.4 1.2-.3 2.6-.4 4.3-.6.1.7.2 1.3.3 2.1h-4.3Zm-1 0h-3.7c1-.5 2.1-1 3.5-1.3 0 .4.1.8.2 1.2Zm6.3.1c0-.7-.2-1.4-.3-2.1h2c0 .7 0 1.5.1 2.2h-1.9Zm5.1-2.2c.7 0 1.4 0 2 .1l-.3 2.1h-1.9c0-.8.1-1.5.2-2.2Zm3 .2c1.6.2 3 .4 4.2.7 0 .5-.2.9-.2 1.4h-4.3c0-.7.2-1.4.3-2Zm5.2.9c1.3.4 2.5.9 3.5 1.4-.9 0-1.9-.1-3.1-.2h-.6c0-.4.1-.8.2-1.2Zm-.7-1.2c-1.2-.3-2.6-.5-4.3-.7.2-.7.
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 4: Hero
- **Confidence:** 20%
- **Tag:** section
- **Classes:** `s is-horizontal-track`
- **Size:** full viewport height, width: 1440px
- **Media:** 13 image(s)
- **Sticky elements:** 2
- **Animations:**
  - `div`.horizontal-track: transition: all
  - `div`.c: transition: all
  - `div`.horizontal-pin-wrap: transition: all
  - `div`.horizontal-pin-spacer: transition: all
  - `div`.horizontal-pin-sticky: transition: all
  - `div`.sticky-track-theme-change: transition: all

### Element Style Blueprint

- **`<div>`** .horizontal-track
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 5357.2px | padding: 77px 16.6667px 33.3333px 1080px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .c.is-horiz-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .horizontal-pin-wrap
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .horizontal-pin-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .horizontal-pin-sticky
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .sticky-track-theme-change
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all

### HTML Structure

```html
<section data-gl-change-to="white, dark-green-tint-1-low" data-horizontal-section="" data-h-color-from="dark-green" data-h-color-to="white" data-gl-change-track="" data-gl-change-from="dark-green, dark-green-tint-1" class="s is-horizontal-track"><div class="c is-horiz-scroll"><div class="horizontal-pin-wrap"><div class="horizontal-pin-spacer"><div class="horizontal-pin-sticky"><div class="horizontal-track"><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-1"><div class="horizontal-item-layout is-home-1"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Qatar, 2024</div></div><div class="horizontal-item-img-w is-home-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp 649w" alt="Lando in casual clothes walking through paddock" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-home-2"><div class="horizontal-item-layout is-home-2"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">FIA Prize Giving, 2024</div></div><div class="horizontal-item-img-w is-home-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp 656w" alt="Lando lifting trophy in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col large-img is-home1"><div class="horizontal-item-w is-text-callout callout-1"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text">It doesn’t matter <span class="span-green-off-white-1">where</span> you start, it’s <span class="span-green-off-white-1">how</span> you progress from there.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="lazy" alt="Lando's signature in lime color" class="image"></div></div></div></div><div class="horizontal-item-w is-home3"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Miami GP, 2024</div></div><div class="horizontal-item-img-w is-home3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp 1464w" alt="Lando lifting tophy" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col is-home-flip neg-margin"><div class="horizontal-item-w is-home-4 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Monaco, 2023</div></div><div class="horizontal-item-img-w is-home-5"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp 529w" alt="Lando playing golf" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-5"><div class="horizontal-item-layout is-home-5"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Britain, 2025</div></div><div class="horizontal-item-img-w is-home-4"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp" loading="lazy" width="Auto" alt="Lando in f1 car" class="image is-horizontal-scroll"></div><div data-hide="m" class="horizontal-item-pill-w"><div class="horizontal-item-pill"><div class="horizontal-pill-box is-side"><div class="horizontal-pill-text">1</div></div><div class="horizontal-pill-box"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680cbcfdbc4bdc0ef619369f_ln-icon-crossed-flags2.svg" loading="lazy" alt="" class="horizontal-pill-icon"></div></div></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-6"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Battersea, 2024</div></div><div class="horizontal-item-img-w is-home-6"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp 642w" alt="Lando holding dog smiling" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-7"><div class="horizontal-item-layout is-home-7"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">High Performance Gala, 2024</div></div><div class="horizontal-item-img-w is-home-7"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp" loading="lazy" alt="Lando in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-8 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Barcelona, 2024</div></div><div class="horizontal-item-img-w is-home8"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp 1461w" alt="Lando taking photo out of a plane" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-text-callout is-home-callout-2"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text c-dark-green-tint-1">Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 5: Proof
- **Confidence:** 20%
- **Tag:** section
- **Classes:** `s is-otot-home`
- **Size:** full viewport height, width: 1440px
- **Headings:** H2: "ON"; H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- **Media:** 2 image(s), 3 canvas(es)
- **Animations:**
  - `div`.c: transition: all
  - `div`.otot-home-bg: transition: all
  - `div`.otot-home-inner: transition: all
  - `div`.otot-home-img-w: transition: all
  - `img`.otot-home-img: transition: all
  - `div`.otot-home-img-w: transition: all
  - `img`.otot-home-img: transition: all
  - `div`.otot-home-layout: transition: all
  - `div`.otot-home-text-col: transition: all
  - `div`.otot-home-text-col: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-otot-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .otot-home-bg
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .otot-home-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .otot-home-img-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 451.422px | opacity: 1
  - anim: all

- **`<img>`** .otot-home-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 451.422px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp

- **`<div>`** .otot-home-img-w.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 419.25px | opacity: 1
  - anim: all

- **`<img>`** .otot-home-img.is-helmet
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 419.25px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp

- **`<div>`** .otot-home-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 669.906px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .otot-home-text-col.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: flex | width: 309.953px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside."

- **`<div>`** .otot-home-text-col.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: flex | width: 309.953px | opacity: 1
  - anim: all
  - text: "OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 309.953px | opacity: 1
  - anim: all
  - text: "ONTRACK"

- **`<div>`** .otot-home-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 309.953px | opacity: 1
  - anim: all
  - text: "OFFTRACK"

- **`<div>`** .otot-home-p-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: flex | width: 280px | margin: 16.6667px 0px 0px | opacity: 1
  - anim: all
  - text: "Most recent results, career stats and photos from trackside."

- **`<div>`** .otot-home-p-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: flex | width: 280px | margin: 16.6667px 0px 0px | opacity: 1
  - anim: all
  - text: "Campaigns, shoots and other such promotional materials for fans"

- **`<div>`** .btn-auto-top
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 50px | opacity: 1
  - anim: all

- **`<div>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 50px | opacity: 1
  - anim: all

### HTML Structure

```html
<section data-otot-top="" data-designmode-white="" class="s is-otot-home"><div class="c is-otot-home"><div class="otot-home-inner"><div class="otot-home-layout"><div class="otot-home-text-col is-1"><div class="otot-home-text-w"><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">ON<br></h2><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2><div class="otot-home-text-rive w-embed"><canvas data-rive-object="" data-rive-file="phrases" data-rive-artboard="phrase_on" data-rive-state-machine="phrase_on" data-rive-fit="contain" data-rive-scrolltrigger="true" data-rive-scrolltrigger-start="top center">
</canvas></div></div><div class="otot-home-p-w"><p split-text="lines" data-anim-high="right, dark-green-tint-1, 200" class="text-body-reg-mona">Most recent <strong>results</strong>, career stats and photos from trackside.</p></div><div class="btn-auto-top"><a title="On Track page" data-btn-rive-rotate="true" data-btn-rive-hover="" href="/on-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div><div class="otot-home-text-col is-2"><div class="otot-home-text-w"><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">OFF<br></h2><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2></div><div class="otot-home-p-w is-2"><p split-text="lines" data-anim-high="left, dark-green-tint-1, 200" class="text-body-reg-mona"><strong>Campaigns</strong>, shoots and other such promotional materials for fans</p></div><div><a title="Off Track Page" data-btn-rive-rotate="false" data-btn-rive-hover="" href="/off-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div></div><div class="otot-home-bg"><div class="otot-home-img-w is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp 834w" alt="Lando Norris wearing a lime helmet, side profile" class="otot-home-img is-helmet"></div><div class="otot-home-img-w is-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp 898w" alt="Lando Norris wearing a fleece side profile" class="otot-home-img"></div></div></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 6: Hero
- **Confidence:** 0%
- **Tag:** section
- **Classes:** `s is-otot-end`
- **Size:** full viewport height, width: 1440px
- **Media:** 1 image(s)
- **Animations:**
  - `img`.image: transition: all
  - `div`.otot-home-end-img-w: transition: all

### Element Style Blueprint

- **`<img>`** .image.is-otot-home-end
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302ff5ff89a9a4afb8c19e_ln-home-helm-large.webp

- **`<div>`** .otot-home-end-img-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

### HTML Structure

```html
<section data-otot-bottom="" class="s is-otot-end"><div class="otot-home-end-img-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302ff5ff89a9a4afb8c19e_ln-home-helm-large.webp" loading="lazy" alt="Lando lifting helmet up" class="image is-otot-home-end"></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 7: Team
- **Confidence:** 20%
- **Tag:** section
- **Classes:** `s home-helmets`
- **Size:** full viewport height, width: 1440px
- **Headings:** H2: "Helmets"; H2: "Hall of Fame"; H3: "Season"; H3: "Discoball"; H3: "Dark Glitter"; H3: "Season"; H3: "Porcelain"; H3: "Japan"; H3: "GIF"; H3: "Dark Mode"; H3: "Race"; H3: "Las Vegas"; H3: "Chrome"; H3: "Beachball"; H3: "Basketball"; H3: "Season"; H3: "Silverstone"; H3: "Season"
- **Media:** 64 image(s), 64 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.w-dyn-list: transition: all
  - `div`.helmet-grid: transition: all
  - `div`.spacer: transition: all
  - `div`.title-layout: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all

### Element Style Blueprint

- **`<div>`** .c.home-helmets
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 33.3333px 16.6667px 16.6667px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing"

- **`<div>`** .w-dyn-list
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas202"

- **`<div>`** .helmet-grid.w-dyn-items
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas202"

- **`<div>`** .spacer._8-75rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .title-layout.grid-main
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2021"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2019"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2021"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2019"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Season2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Dark Glitter2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Porcelain2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "GIF2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Race2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Chrome2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Basketball2022"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Silverstone2020"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Season2025"

### HTML Structure

```html
<section class="s home-helmets"><div class="c home-helmets"><div class="title-layout grid-main"><div id="w-node-_5d5ac04e-626f-e2bd-ba2c-8a1157b2eda4-0b17a7eb" class="title-headline-w flex"><h2 data-anim-high="" split-text="lines" class="text-title-lg-mona">Helmets<br></h2><h2 data-anim-high="" split-text="lines" class="text-title-lg-mona"><span class="text-title-lg-brier c-lime-off">Hall of Fame</span></h2></div><div id="w-node-_8734ac60-bf7c-ac47-bf21-501caa438859-0b17a7eb" class="title-para-w c-grey-on-track"><p data-anim-high="right, lime, 200" split-text="lines" class="text-body-reg-mona">From his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helmets.</p></div></div><div class="spacer _8-75rem m-6rem"></div><div class="w-dyn-list"><div data-helmet-grid="" role="list" class="helmet-grid w-dyn-items"><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp 823w" class="helmet-grid-item-reveal-img"></div></div><div class="helmet-grid-item-text-w"><h3 class="text-title-small-label text">Season</h3><div class="helmet-grid-item-date-w"><div class="text-title-small-label date">2025</div></div><div class="helmet-grid-extender"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png 669w" alt="" class="helmet-grid-extender-img"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png 669w" alt="" class="helmet-grid-extender-img is-overlay"></div></div></div></div><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover-p-500.webp 500w, https://cdn.prod
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 8: Hero
- **Confidence:** 15%
- **Tag:** section
- **Classes:** `s`
- **Size:** 476px height, width: 1440px
- **CTAs:** view on track
- **Media:** 2 canvas(es), 1 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.callout-layout: transition: all
  - `div`.callout-text-w: transition: all
  - `div`.text-cta-short-intro: transition: all
  - `a`.btn-w: transition: all
  - `div`.callout-rive-w: transition: all
  - `div`.callout-icon: transition: all
  - `canvas`: transition: all
  - `div`.btn-inner: transition: all
  - `div`.btn-inner-text-w: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-callout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 160px 16.6667px 116.667px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the trackview on track"

- **`<div>`** .callout-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 433.328px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the trackview on track"

- **`<div>`** .callout-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 433.328px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the track"

- **`<div>`** .text-cta-short-intro.font-brier
  - font: 26.6667px 400 Brier, Arial, sans-serif | color: rgb(244, 244, 237) | lh: 27.7333px | ls: 0.666667px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 433.328px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the track"

- **`<a>`** .btn-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 174.203px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: https://landonorris.com/on-track
  - text: "view on track"

- **`<div>`** .callout-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 75px | opacity: 1
  - anim: all

- **`<div>`** .callout-icon.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: start | border: 0px none rgb(210, 255, 0) | display: flex | width: 75px | opacity: 1
  - anim: all

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: start | border: 0px none rgb(210, 255, 0) | display: block | width: 75px | opacity: 1
  - anim: all

- **`<div>`** .btn-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 145.547px | opacity: 1
  - anim: all
  - text: "view on track"

- **`<div>`** .btn-inner-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 121.219px | opacity: 1
  - anim: all
  - text: "view on track"

- **`<div>`** .btn-icon-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 16px | opacity: 1
  - anim: all

- **`<div>`** .callout-icon.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: start | border: 0px none rgb(210, 255, 0) | width: 75px | margin: 0px auto | opacity: 1
  - anim: all

- **`<svg>`** #Layer_1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: start | border: 0px none rgb(210, 255, 0) | display: inline | width: 100% | opacity: 1
  - anim: all

### HTML Structure

```html
<section data-nav-theme-target="light" class="s"><div class="c is-callout"><div class="callout-layout"><div class="callout-rive-w"><div class="callout-icon w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="helmet-reef" data-rive-state-machine="helmet-reef_scroll" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target=".c.is-callout" data-rive-scrolltrigger-start="top bottom" data-rive-scrolltrigger-end="bottom center">
</canvas></div><div data-rive-placeholder="" class="callout-icon w-embed"><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 97 50.1">
  <path d="M.4 27.6s3 .9 6.1 5.9c-.4-1.1-.6-2.2-.8-3.4C1.5 27.8 1.1 25.7.8 22c.2 1 3.2 2.4 3.6 4 .4 1.3.8 2.5 1.3 3.1 0-1-.1-2 0-3v-.5c-1.3-1.1-4.3-4.3-3.5-9.1.5 1.2 3 1.6 3.7 7.4.2-1.1.5-2.1.8-3.2C5.5 19.2 3.5 15 5.6 7.9c.3 1.2 2.5 5.7 2 8.3-.2.8-.2 1.7-.3 2.6 0-.2.1-.4.2-.6.3-.9.7-1.8 1.2-2.7 0-1.4-.2-2.8-.8-4.1-.3-.6-.4-1.3-.4-2s.4-1.3.8-1.8c.6-.8.8-2.8.8-2.8s2.2 3.4 0 9.8c.4-.7.9-1.5 1.4-2.1.4-1 .4-2 .2-3.1-.4-1.8-.7-4.5 2.2-7.7-.3 1.5.4 4.2-.1 6-.4 1.3-.9 2.6-1.5 3.8.5-.6 1.1-1.2 1.7-1.8.3-1 .2-2.5.8-4.9.7-2.9 2.2-3.3 2.8-4.8.5 3.3-1 6.7-2.4 8.6l.4-.3c.4-.3.8-.6 1.1-1 .4-1.8 1.2-3.5 2.4-5 .8-.9 2.7-1.4 3-2.2-.3 3.3-2.3 5.1-4 6.3.9-.5 1.9-.7 2.9-.7s2 .4 2.8 1c0 0-2.2 1.3-3.7 1.1-1.5-.2-2.1-.5-3-.2-.3.3-.7.6-1.1.9 2.2-.6 4.8 1 5.8 2-1.9.9-3.5.3-4.3-.6-.7-.7-1.8-.4-2.3-.8-.7.6-1.3 1.2-2 1.8-.7.7-1.3 1.5-1.9 2.4 1.4-1.3 3.7-2.7 6-2.2-.3.9-1.8 2.5-3.4 3.1-1.4.4-2.7.4-3.6.9-.6 1-1 2.1-1.4 3.3 2.1-3.1 6.3-3.9 7.3-3.7 0 0-2 .9-2.4 2.4-.5 1.6-2.2 2.1-3.6 2.2-.7.1-1.4.5-1.9 1-.4 1.4-.8 2.9-1 4.4 1.9-6.5 6.4-5.5 6.4-5.5-.6.3-1 .9-1.2 1.5-.4 1.1-.9 2-2.6 3.2-1.2.8-2.2 2.1-2.7 3.5 0 1.8.4 3.5.9 5.2-.3-2.2-.2-5.2 1.4-7.4-.2 1.5 1.5 4.1 1.1 5.9-.3 1.5-1.4 3.4-1.2 4.8.2.4.4.8.6 1.1 0-1 .5-2.3.5-3.3.3.9.2 3 .2 4.4.5.8 1.1 1.5 1.7 2.2-1.3-2.4-1.4-6-.4-9 1 1.5 2.1 4.4 1.8 6.4-.2 1.5 0 2.9.4 4.3l.3.3c.3.3.7.6 1 .8-1.5-2.1-1.3-5.3-1-6.7 1.8 2 3.3 6 3.2 8.1l1.2.6c1.6.7 3.4 1.1 5.1.6v.2l.1.2v.4c-1.8.5-3.8 0-5.5-.7l-1.8-.9c-1.1 1.1-3.4 1.8-4.8 1.4-1.3-.4-2.6-1.4-3.6-1.3 1.7-1.8 3.9-1.9 5.2-1.1 1.2.7 2 1 2.7.8-.8-.5-1.6-1.1-2.3-1.7l-.3-.3c-1.9.7-4 0-5.3-.8-1.5-.9-1.7-2.6-2.8-3.5 3.5-.1 5 1.4 5.6 2.3.5.7 1.2 1.3 2 1.5-1.1-1.1-2.1-2.2-2.9-3.5-.9-.2-3 0-4.1-1.5 1.5-.1 2.6 0 3.4.5-.2-.4-.4-.8-.6-1.1-1.1-.2-3.1 0-4.4-1.1-1.1-1.1-2.2-2.3-3.1-3.6 0 0 2.5.5 3.8 1.1-1.1-1-3.8-5.7-3.8-5.8ZM96.4 27.3s-3 1-6 6c.3-1.1.6-2.2.7-3.4 4.3-2.4 4.6-4.5 4.9-8.2-.2 1-3.1 2.5-3.6 4.1-.4 1.3-.8 2.5-1.2 3.2v-3.5c1.3-1.1 4.2-4.4 3.3-9.1-.4 1.2-3 1.6-3.6 7.5-.2-1.1-.5-2.1-.8-3.2 1.2-1.5 3.1-5.8.9-12.8-.3 1.2-2.4 5.7-1.9 8.3.2.8.3 1.7.3 2.6 0-.2-.1-.4-.2-.6L88 15.5c0-1.4.2-2.8.7-4.1.3-.6.4-1.3.3-2 0-.7-.4-1.3-.9-1.8-.6-.8-.9-2.8-.9-2.8s-2.1 3.5.2 9.8c-.4-.7-.9-1.4-1.5-2.1-.4-1-.5-2-.3-3.1.4-1.8.6-4.5-2.3-7.7.3 1.5-.4 4.2.2 6 .4 1.3.9 2.5 1.5 3.8-.5-.6-1.1-1.2-1.8-1.7-.3-1-.2-2.5-.8-4.9-.8-2.9-2.2-3.2-2.9-4.8-.4 3.3 1.1 6.7 2.5 8.6l-.4-.3-1.2-.9c-.4-1.8-1.3-3.5-2.5-5-.8-.9-2.8-1.3-3-2.2.3 3.3 2.4 5 4.1 6.3-.9-.5-1.9-.7-2.9-.6-1 0-2 .4-2.8 1 0 0 2.2 1.2 3.7 1 1.5-.2 2.1-.5 3-.2.3.3.7.6 1.1.9-2.2-.6-4.8 1.1-5.8 2.1 2 .9 3.5.2 4.3-.6.7-.7 1.7-.5 2.3-.9.7.6 1.4 1.1 2 1.8.7.7 1.3 1.5 1.9 2.3-1.4-1.2-3.7-2.6-6-2.1.3.9 1.8 2.5 3.5 3 1.4.4 2.7.4 3.6.8.6 1 1.1 2.1 1.5 3.2-2.2-3.1-6.4-3.7-7.4-3.6 0 0 2 .8 2.5 2.4.5 1.6 2.2 2 3.7 2.2.7 0 1.4.4 1.9 1 .5 1.4.8 2.9 1.1 4.4-2-6.4-6.5-5.4-6.5-5.4.6.3 1 .9 1.2 1.5.4 1.1.9 2 2.7 3.2 1.3.8 2.2 2 2.8 3.4 0 1.8-.3 3.5-.8 5.2.3-2.2.1-5.2-1.5-7.4.2 1.5-1.5 4.1-1 5.9.4 1.5 1.5 3.4 1.3 4.8l-.6 1.2c0-1-.5-2.3-.5-3.3-.3.9-.1 3-.2 4.4-.5.8-1 1.5-1.6 2.2 1.2-2.5 1.3-6 .2-9-1 1.5-2 4.5-1.7 6.5.2 1.5.1 2.9-.3 4.3l-.3.3c-.3.3-.7.6-1 .9 1.5-2.2 1.2-5.3.9-6.7-1.8 2-3.2 6-3 8.1-.4.2-.8.4-1.1.6-1.6.7-3.4 1.2-5.1.7v.8c1.9.5 3.8 0 5.5-.8.6-.3 1.2-.6 1.8-1 1.1 1.1 3.5 1.7 4.8 1.3 1.3-.4 2.6-1.5 3.6-1.4-1.7-1.7-4-1.8-5.2-1-1.1.7-1.9 1.1-2.7.8.8-.5 1.6-1.1 2.3-1.8l.3-.3c1.9.6 4 0 5.3-.9 1.4-.9 1.7-2.6 2.8-3.6-3.5 0-4.9 1.5-5.5 2.4-.5.7-1.2 1.3-2 1.5 1.1-1.1 2-2.3 2.9-3.5.9-.2 3-.1 4.1-1.6-1.5-.1-2.6 0-3.4.5l.6-1.2c1.1-.2 3.1 0 4.4-1.2 1.1-1.1 2.1-2.3 3-3.6 0 0-2.5.5-3.7 1.2 1.1-1 3.7-5.8 3.7-5.9ZM67.3 20.4zM67.2 20.8zM67.3 20.4zM67.3 20.4zM67.2 20.8zM68.4 33.8c.1-.7.3-1.4.4-2.3 1.1-6.1.4-11.8-2-17-2.9-6.2-9.3-12.9-18.3-13.1-9.1 0-15.6 6.4-18.7 12.6-2.6 5.1-3.4 10.8-2.4 17 .1.9.3 1.6.4 2.3 0 .5.1.9.3 1.4.1.6.3 1.2.4 1.7v.2c.1.5.3 1 .4 1.5.3 1 .5 1.5.8 1.9 0 .2.2.4.3.7l.3.9v.3c0 .3.1.5.2.8 0 1.4.7 2.2 1.5 3.3.9 1.1 1.6 1.3 2.9 1.5.9.1 1.4.2 3 .6l2 .4c2.3.8 4.6 1.3 7.9 1.3h.4c3.1 0 5.2-.4 7.5-1.1s1.9-.4 1.9-.4c1.6-.3 2.2-.4 3.1-.5 1.3-.2 2-.3 3-1.5.9-1 1.5-1.8 1.6-3.2.1-.3.2-.5.3-.8V42c0-.4.2-.7.3-.9.1-.3.2-.5.3-.7.3-.5.5-.9.8-1.9.1-.5.3-1 .4-1.5v-.2c.1-.5.3-1.1.4-1.7.2-.4.3-.9.3-1.4Zm-1-.2v.2c0 .3-.1.6-.2.9-.4 1.2-1.6 2.1-3.5 2.8.1-.3.2-.6.3-1 .4.1.9.2 1.4-.1.3-.2.4-.5.6-.8.1-.3.2-.6.3-1 .2-.7.3-1.7.6-2.8 0 .2 0 .4.2.6.1.2.3.2.5.3 0 .3-.1.7-.2 1ZM47.9 46.5c-7.3 0-13.6-1.7-16.1-4.1.1-.1.3-.3.6-.4 4.8 2.5 12.5 2.8 15.4 2.9h.7c3.3 0 10.4-.3 14.9-2.5.3.1.5.3.6.4-2.6 2.3-8.9 3.8-16.1 3.7ZM28.7 33.3v-.2c0-.3-.1-.6-.2-1 .4 0 .6-.4.7-.8.2.8.3 1.5.4 2 .2 1.4.4 2.2 1 2.6.3.2.6.3.8.3h.5c0 .3.1.7.2 1-1.9-.7-3-1.7-3.4-2.9 0-.3-.1-.6-.2-.9Zm1.8-18.5c.2-.2.4-.4.6-.5-.4.6-.9 1.3-1.2 2 .2-.5.4-.9.6-1.4Zm35.6.5c.2.5.4 1 .6 1.4-.4-.7-.8-1.4-1.2-2 .2.2.4.3.6.6ZM68 30.4h-.2c-.2 0-.5 0-.6.3.2-.9.4-1.5.5-1.9.2-.6.3-.8.5-.9 0 .9-.2 1.8-.3 2.8Zm-4.6 10.9h-.1c-.3-.1-.7-.2-1.1-.3 1.4-.4 2.6-.9 3.4-1.5-.5.7-1.3 1.3-2.3 1.8Zm-29.4.4c1.2-.2 2.5-.2 2.6-.2 3 .5 6.8.9 11.4.9h1.3c4.2 0 7.6-.3 10.4-.8 0 0 1.1.2 2.3.4-3.7 1.4-9.1 2-14 1.9-4.9 0-10.3-.7-13.9-2.2Zm-3.7-2.6c.9.6 2 1.2 3.4 1.6-.4 0-.8.1-1.1.2h-.1c-.9-.5-1.7-1.2-2.2-1.9Zm17.6 2.3c-10.6-.1-17.1-1.8-18.4-4.7 1.2.9 3 1.6 5.4 2.1 3.9.8 8.9.9 12.9.9h3.9c3.2 0 6.6-.1 9.5-.6 2.4-.4 4.2-1.1 5.4-2-1.4 2.9-8 4.4-18.6 4.2ZM33 35.3c0-.1 0-.3.4-.4.6-.1 1.1-.2 1.6-.2.6 0 1-.1 1.5-.3.4-.2.7 0 .7 0h.1v.8c0 .1-.1.3-.1.5v1c-.2.2-.2.2-1.1.2h-.3c-.7 0-1 .1-1.3.3-.2 0-.3.2-.6.2-.5 0-.7-1.3-.8-2.1Zm30.1.4Zm0 0Zm-4.1-1Zm-11 3.4v.5-.5s-.9 0-3.7-.4c.1-.1.2-.2.3-.4.4-.6 0-1.8 0-2 0-.1 0-.2-.2-.3 1 0 2.2 0 3.5.1h3.6s-.1.2-.2.3c0 .2-.5 1.4-.1 1.9.1.3.2.4.3.5-2.8.3-3.7.3-3.7.3Zm-7-2.6c.6.1 1.3.3 2.1.4h.3v.4h-.2c-.8-.1-2.3-.6-3.2-1.1.3 0 .7.1 1 .2Zm11.7 1v-.4h.3c.8 0 1.5-.2 2.1-.3.4 0 .7-.1 1-.2-.9.4-2.4.9-3.2 1h-.2Zm-16.8 1.4c.9 0 1.4 0 1.9-.6.2-.3.3-.6.3-.8 1.3.9 3.6 1.7 5.6 2.1-2.7 0-5.5-.3-8-.7h.2Zm22-1.1c0 .3 0 .6.3.8.5.6 1 .6 1.9.6h.2c-2.5.4-5.3.5-8 .5 2-.3 4.3-1.1 5.7-2Zm2.2.4c-.8 0-.9 0-1.1-.2-.1-.2 0-.4 0-.7V36c0-.2 0-.4-.1-.5s0-.1 0-.3v-.4h.7c.4.2.9.3 1.4.3.5 0 1 .1 1.7.3.3 0 .3.2.4.2v.1c-.1.8-.4 2.1-.8 2.1-.3 0-.4 0-.6-.2-.3-.2-.6-.3-1.3-.3h-.3Zm5.1-2.9v.4c-.3.3-.5.4-.5.4 0-.4-.4-1-1.6-1.3-.7-.2-1.3-.3-1.7-.3-.5 0-.8 0-1.1-.2-.6-.3-1.1-.2-1.4 0L58 33h-.2s-2.4.8-9.6.7c-7.3 0-9.5-.9-9.6-.9h-.2l-.9.2c-.3-.1-.8-.2-1.4 0-.3.1-.7.2-1.1.2-.5 0-1.1 0-1.8.3-1.1.3-1.5.9-1.6 1.3 0 0-.2 0-.5-.4 0-.3-.1-.7-.2-1.1-.1-.7-.3-1.5-.5-2.4-.1-.6-.3-1.1-.4-1.5-.4-1.6-.5-2.3-1.2-2.8-.4-.3-.2-1.3 0-2v-.2c.2-1.1.3-1.8.3-2.6 0-.7.2-1.4.2-1.4V20c0-.2-.1-.4-.2-.5.6 0 .6 0 .7.3v.4c0 .6.2 1.2.4 2.2.3 1.2.7 1.2 3.4 1.1h1c3.8-.2 6.2-.2 13.5 0 7.6 0 10.1.1 13.9.4.9 0 1.6.1 2.2.1h1.2c.3 0 .6-.2.8-.4.2-.2.2-.5.3-.7.3-1.1.4-1.9.5-2.5v-.2h.6v2.1c0 .8 0 1.5.2 2.6 0 .5.2 1 .2 1.5 0 .4-.1.6-.2.7-.5.3-.7.8-.9 1.4-.2.6-.4 1.5-.7 2.8-.4 1.3-.6 2.4-.7 3.2Zm-37-4.4c-.1-.9-.2-1.8-.2-2.8.4.3.5.7.8 2.2 0 .2.1.5.2.7 0 0 0-.1-.1-.1-.2-.1-.3-.2-.5-.2h-.2ZM52.5 6.2c-.4.7-.8 1.5-1.1 2.3-1-.2-1.9-.3-3-.3-1 0-2 0-3 .2-.3-.8-.7-1.6-1.1-2.3 1.3-.3 2.7-.5 4.1-.5 1.4 0 2.7.2 4.1.6Zm-4.3 3h.2c.9 0 1.8.1 2.6.2-.3.8-.6 1.7-.8 2.6h-3.6c-.2-.9-.5-1.7-.8-2.6.8-.1 1.6-.2 2.4-.2Zm17.5 11.4c-1.4-2-3.2-3.8-5.3-5.1.3-.3.6-.6.9-.8 1.9 1.8 3.4 3.9 4.4 5.8ZM49.9 13c-.2.7-.3 1.5-.5 2.2h-2.2c-.1-.8-.3-1.5-.4-2.2h3.1Zm-1.6 3.2h1c-.1.7-.2 1.4-.3 2.2h-1.4c0-.7-.1-1.5-.2-2.2h1Zm15.3 5.9c-1.4-1-3.1-1.9-5.3-2.5.1-.5.3-1 .5-1.5 2.1.9 3.8 2.3 5.2 4h-.4Zm-15.5-.5h-.4c0-.8 0-1.5-.1-2.3h1.2c0 .7-.1 1.5-.2 2.3H48Zm-8.6-.1c0-.5-.1-1-
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 9: Hero
- **Confidence:** 15%
- **Tag:** section
- **Classes:** `s is-lando-exe`
- **Size:** 907px height, width: 1440px
- **Headings:** H2: "World Drivers' Champion"
- **CTAs:** Visit the store
- **Media:** 5 image(s), 1 canvas(es), 1 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.grid-main: transition: all
  - `img`.image: transition: all
  - `div`.exe-col-2: transition: all
  - `div`.exe-cta-img-w: transition: all
  - `div`.exe-text-w: transition: all
  - `div`.g-title-layout: transition: all
  - `div`.exe-top-visor: transition: all
  - `div`.g-text-headline-w: transition: all
  - `div`.spacer: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-lando-exe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 146.667px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never sto"

- **`<div>`** .grid-main.exe-grid
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: grid | width: 1146.69px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never sto"

- **`<img>`** .image.is-exe-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 525px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e803d4123abb47dd_lando-store-gold-5.webp

- **`<div>`** .exe-col-2 #w-node-cdf8cae6-890c-0da2-d4ce-f7de7c4f7866-0b17a7eb
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 556.719px | opacity: 1
  - anim: all

- **`<div>`** .exe-cta-img-w.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 525px | opacity: 1
  - anim: all

- **`<div>`** .exe-text-w #w-node-ae7312fc-adb8-42d6-db91-b6f52466ac51-0b17a7eb
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 556.719px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never sto"

- **`<div>`** .g-title-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 556.719px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never sto"

- **`<div>`** .exe-top-visor
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(17, 17, 18) | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .g-text-headline-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 556.719px | opacity: 1
  - anim: all
  - text: "World Drivers' Champion"

- **`<div>`** .spacer.is-exe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1146.69px | opacity: 1
  - anim: all

- **`<div>`** .spacer._8rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1146.69px | opacity: 1
  - anim: all

- **`<img>`** .image.is-exe-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 333.328px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be8f7e939c143a9bed6_lando-store-gold-3.webp

- **`<div>`** .exe-cta-img-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 333.328px | opacity: 1
  - anim: all

- **`<img>`** .image.is-exe-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 189.156px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e4ccfdba84b69d27_lando-store-gold-1.webp

- **`<img>`** .image.is-exe-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 218.328px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be88faa89137717632c_lando-store-gold-2.webp

- **`<div>`** .exe-cta-img-w.is-3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 189.156px | opacity: 1
  - anim: all

- **`<div>`** .exe-cta-img-w.is-4
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 218.328px | opacity: 1
  - anim: all

- **`<div>`** .exe-cta-sticker-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 202.5px | opacity: 1
  - anim: all

- **`<img>`** .image.is-exe-sticker
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: inline-block | width: 202.5px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458c78c9825ebb795d2e81_LN1.webp

- **`<div>`** .g-text-para-w.is-exe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 432.5px | opacity: 1
  - anim: all
  - text: "Celebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame it,"

- **`<a>`** .btn-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 182.141px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: https://landonorris.store/
  - text: "Visit the store"

- **`<div>`** .eyebrow-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 127.453px | opacity: 1
  - anim: all
  - text: "LANDO STORE"

### HTML Structure

```html
<section data-exe-section="" data-nav-theme-target="dark" data-designmode-white="" class="s is-lando-exe"><div data-exe-visor="" class="exe-top-visor"></div><div class="c is-lando-exe"><div class="spacer is-exe"></div><div class="grid-main exe-grid"><div id="w-node-ae7312fc-adb8-42d6-db91-b6f52466ac51-0b17a7eb" class="exe-text-w"><div class="g-title-layout"><div data-hide="t" class="eyebrow-w"><div class="eyebrow-icon-w"><div class="btn-icon-svg is-large w-embed"><svg width="100%" height="100%" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m10.931 5.783-.759.812c-1.132 1.212-2.89 1.212-4.022 0l-.76-.812C4.313 4.637 2.568 5.29 2.275 6.928l-1.238 7.18c-.227 1.318.652 2.543 1.838 2.543h10.588c1.185 0 2.064-1.225 1.838-2.544l-1.239-7.179c-.28-1.638-2.037-2.29-3.116-1.145h-.014ZM10.839 3.048 9.84 1.849C8.894.717 7.43.717 6.484 1.85l-1 1.199" stroke="currentColor" stroke-width="1.949" stroke-miterlimit="10"></path>
</svg></div></div><div data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-eyebrow large">LANDO STORE</div></div><div class="g-text-headline-w"><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-lg-mona reduce">World Drivers' <span class="span-font-brier otot">Champion</span></h2></div><div class="g-text-para-w is-exe"><p data-anim-high="right, dark-green-tint-1, 200" split-text="lines" class="text-body-reg-mona">Celebrate this incredible moment with a collection designed for the fans who never stopped believing. Wear it, frame it, treasure it forever.</p></div><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="https://landonorris.store/" target="_blank" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">Visit the store</div></div><div class="btn-icon-w"><div class="btn-rive-w w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div><div class="exe-cta-img-w is-4"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be88faa89137717632c_lando-store-gold-2.webp" loading="lazy" alt="" class="image is-exe-scroll"></div></div><div id="w-node-cdf8cae6-890c-0da2-d4ce-f7de7c4f7866-0b17a7eb" class="exe-col-2"><div class="exe-cta-img-w is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e803d4123abb47dd_lando-store-gold-5.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e803d4123abb47dd_lando-store-gold-5-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e803d4123abb47dd_lando-store-gold-5-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e803d4123abb47dd_lando-store-gold-5-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e803d4123abb47dd_lando-store-gold-5.webp 1260w" alt="" class="image is-exe-scroll"></div><div class="exe-cta-img-w is-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be8f7e939c143a9bed6_lando-store-gold-3.webp" loading="lazy" width="Auto" sizes="100vw" alt="" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be8f7e939c143a9bed6_lando-store-gold-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be8f7e939c143a9bed6_lando-store-gold-3.webp 796w" class="image is-exe-scroll is-clip"></div><div class="exe-cta-img-w is-3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458be7e4ccfdba84b69d27_lando-store-gold-1.webp" loading="lazy" alt="" class="image is-exe-scroll"></div><div class="exe-cta-sticker-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458c78c9825ebb795d2e81_LN1.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458c78c9825ebb795d2e81_LN1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458c78c9825ebb795d2e81_LN1-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/69458c78c9825ebb795d2e81_LN1.webp 945w" alt="" class="image is-exe-sticker"></div></div></div><div class="spacer _8rem"></div></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 10: Contact
- **Confidence:** 35%
- **Tag:** section
- **Classes:** `s is-home-collabs`
- **Size:** 794px height, width: 1440px
- **Headings:** H2: "partners"; H2: "&campaigns"
- **CTAs:** view partnerships
- **Media:** 18 image(s), 2 canvas(es)
- **Animations:**
  - `div`.c: transition: all
  - `div`.home-collab-rive-w: transition: all
  - `div`.home-collab-rive: transition: all
  - `canvas`: transition: all
  - `div`.spacer: transition: all
  - `div`.spacer: transition: all
  - `div`.title-layout: transition: all
  - `div`.spacer: transition: all
  - `div`.title-headline-w: transition: all
  - `div`.title-para-layout: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-home-collabs
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "partners&campaignsLando is proud to collaborate with a range of partners, who share his passion for performance across a"

- **`<div>`** .home-collab-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1061.66px | opacity: 1
  - anim: all

- **`<div>`** .home-collab-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1061.66px | opacity: 1
  - anim: all

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: inline-block | width: 1061.66px | opacity: 1
  - anim: all

- **`<div>`** .spacer._20rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .spacer._20rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .title-layout.grid-main
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "partners&campaignsLando is proud to collaborate with a range of partners, who share his passion for performance across a"

- **`<div>`** .spacer._8rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .title-headline-w.flex #w-node-_10049719-af3a-791f-b004-78a94b8f2fac-0b17a7eb
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 679.188px | opacity: 1
  - anim: all
  - text: "partners&campaigns"

- **`<div>`** .title-para-layout.tablet-wrap #w-node-_04f46b3f-5093-ef67-5316-1ae3df93be8d-0b17a7eb
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 679.188px | opacity: 1
  - anim: all
  - text: "Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industri"

- **`<div>`** .marquee-offest-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marquee-advanced
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marquee-advanced__scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marquee-advanced__collection
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 933.281px | opacity: 1
  - anim: all

- **`<div>`** .title-para-w.mw
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 333.328px | opacity: 1
  - anim: all
  - text: "Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industri"

- **`<span>`** .text-title-lg-brier
  - font: 62.5px 700 Brier, Arial, sans-serif | color: rgb(40, 44, 32) | lh: 55.375px | ls: -1.66667px | text-transform: uppercase | text-align: start | border: 0px none rgb(40, 44, 32) | display: inline | opacity: 1
  - anim: all
  - text: "&campaigns"

- **`<h2>`** .text-title-lg-mona
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 405.797px | opacity: 1
  - anim: all
  - text: "&campaigns"

- **`<p>`** .text-body-reg-mona
  - font: 16.6667px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20.8333px | ls: -0.166667px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 333.328px | opacity: 1
  - anim: all
  - text: "Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industri"

- **`<h2>`** .text-title-lg-mona
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 312.25px | opacity: 1
  - anim: all
  - text: "partners"

- **`<div>`** .marquee-css
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(239, 238, 236) | lh: 20px | text-align: start | border: 0px none rgb(239, 238, 236) | width: 100% | opacity: 1
  - anim: all

- **`<img>`** .image.is-collab-placeholder
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | width: 100% | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43b0fcd3d4512a46df889_ln-collabs-rive-placeholder.svg

- **`<div>`** .display-none
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | opacity: 1
  - anim: all
  - text: "view partnerships"

- **`<div>`** .marquee-css__list
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(239, 238, 236) | lh: 20px | text-align: start | border: 0px none rgb(239, 238, 236) | display: flex | opacity: 1
  - anim: 30s linear infinite paused translateXLeft | all

- **`<a>`** .btn-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: https://landonorris.com/partnerships
  - text: "view partnerships"

- **`<div>`** .marquee-adv-item.w-dyn-list
  - font: 115.2px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(239, 238, 236) | lh: 20px | text-align: start | border: 0px none rgb(239, 238, 236) | display: flex | opacity: 1
  - anim: all

### HTML Structure

```html
<section data-gl-change-trigger-start="top bottom" data-nav-theme-target="dark" data-gl-change-track="" data-gl-change-from="white, dark-green-tint-1-low" data-gl-change-to="white, white" data-designmode-white="" class="s is-home-collabs"><div class="c is-home-collabs"><div class="spacer _20rem tablet-reduce"></div><div class="title-layout grid-main"><div id="w-node-_10049719-af3a-791f-b004-78a94b8f2fac-0b17a7eb" class="title-headline-w flex"><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-title-lg-mona">partners</h2><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-title-lg-mona"><span class="text-title-lg-brier">&amp;campaigns</span></h2></div><div id="w-node-_04f46b3f-5093-ef67-5316-1ae3df93be8d-0b17a7eb" class="title-para-layout tablet-wrap"><div class="title-para-w mw flex-1"><p data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-body-reg-mona">Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.</p></div><div class="display-none"><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="/partnerships" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">view partnerships</div></div><div class="btn-icon-w"><div class="btn-rive-w w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div><div class="spacer _8rem"></div><div class="marquee-offest-w"><div data-marquee-duplicate="4" data-marquee-scroll-direction-target="" data-marquee-direction="right" data-marquee-status="normal" data-marquee-speed="40" data-marquee-scroll-speed="10" class="marquee-advanced"><div data-marquee-scroll-target="" class="marquee-advanced__scroll"><div data-marquee-collection-target="" class="marquee-advanced__collection"><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d4349e00e6b7904f3746a3_ln4-ln4-collab-logo-ralph.svg" loading="lazy" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item display-none"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d435767c599270fb721513_ln4-ln4-collab-logo-mind.svg" loading="lazy" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88cf1d78e3e7624d5e3_ln4-ln4-collab-logo-ps4.svg" loading="lazy" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88c532235956e5d267a_ln4-ln4-collab-logo-quadrant.svg" loading="lazy" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88cb3373daa7ba240d6_ln4-ln4-collab-logo-tumi.svg" loading="lazy" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67efc88c1939bc87931c2599_ln4-ln4-collab-logo-hilton.svg" loading="lazy" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d294a99b218abd71dc0764_ln4-ln4-collab-logo-uber.svg" loading="lazy" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d7e14222573f46ebdb_ln4-ln4-collab-lnkart.svg" loading="lazy" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d72c50967c2195c702_ln4-ln4-collab-bell-helmets.svg" loading="lazy" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d718fcdbf76afbcc45_ln4-ln4-collab-pure-electric.svg" loading="lazy" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div><div class="marquee-advanced__item"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68dbd5d7a8a302c07e91904d_ln4-ln4-collab-google.svg" loading="lazy" alt="" class="home-collab-marquee-svg edit"><div class="marquee-spacer"></div></div></div></div></div><div display-none="" data-css-marquee="" class="marquee-css"><div data-css-marquee-list="left" class="marquee-css__list"><div class="marquee-adv-item w-dyn-list"><div role="list" class="collab-marquee-item w-dyn-items"><div role="listitem" class="home-collab-logo-w w-dyn-item"><img loading="lazy" src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/67ded2d59a2773f9b6518792_ln4-ln4-collab-logo-quadrant.svg" alt="" class="home-collab-marquee-svg"><div class="marquee-spacer"></div></div><div role="listitem" class="home-collab-logo-w w-dyn-item"><img loading="lazy" src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/67ded30422d52b417b838a96_ln4-ln4-collab-logo-mind.svg" alt="" class="home-collab-marquee-svg"><div class="marquee-spacer"></div></div><div role="listitem" class="home-collab-logo-w w-dyn-item"><img loading="lazy" src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/67ded2eb42843bae575a6892_ln4-ln4-collab-logo-tumi.svg" alt="" class="home-collab-marquee-svg"><div class="marquee-spacer"></div></div><div role="listitem" class="home-collab-logo-w w-dyn-item"><img loading="lazy" src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/67ded2d59a2773f9b6518792_ln4-ln4-collab-logo-quadrant.svg" alt="" class="home-collab-marquee-svg"><div class="marquee-spacer"></div></div><div role="listitem" class="home-collab-logo-w w-dyn-item"><img loading="lazy" src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/67ded2c281ae5431777106b2_ln4-ln4-collab-logo-ralph.svg" alt="" class="home-collab-marquee-svg"><div class="marquee-spacer"></div></div><div role="listitem" class="home-collab-logo-w w-dyn-item"><img loading="lazy" src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/67ded2a099f418db1d37323c_ln4-ln4-collab-logo-ps4.svg" alt="" class="home-collab-marquee-svg"><div class="marquee-spacer"></div></div></div></div></div></div></div><div class="home-collab-rive-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43b0fcd3d4512a46df889_ln-collabs-rive-placeholder.svg" loading="lazy" data-rive-placeholder="" alt="" class="image is-collab-placeholder"><div class="home-collab-rive w-embed"><canvas data-rive-object="" data-rive-file="phrases" data-rive-artboard="collabs" data-rive-state-machine="page_home" data-rive-fit="contain" data-rive-scrolltrigger="true" data-rive-scrolltrigger-start="top center">
</canvas></div></div></div><div class="spacer _20rem tablet-reduce"></div></section>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 11: Hero
- **Confidence:** 15%
- **Tag:** section
- **Classes:** `s is-callout-socials`
- **Size:** full viewport height, width: 1440px
- **Headings:** H2: "what’s upOn Socials"
- **CTAs:** tiktok, instagram, Youtube, Twitch
- **Media:** 7 image(s), 1 canvas(es)
- **Animations:**
  - `div`.c: transition: all
  - `div`.callout-socials-inner: transition: all
  - `div`.callout-socials-layout: transition: all
  - `div`.callout-socials-card-layout: transition: all
  - `div`.spacer: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-callout-socials
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-card-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 1066.66px | opacity: 1
  - anim: all

- **`<div>`** .spacer._8rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<h2>`** .text-title-lg-mona.split-flex
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 356.703px | opacity: 1
  - anim: all
  - text: "what’s upOn Socials"

- **`<span>`** .span-font-brier
  - font: 60px 700 Brier, Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 356.703px | opacity: 1
  - anim: all
  - text: "On Socials"

- **`<span>`**
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 317.203px | opacity: 1
  - anim: all
  - text: "what’s up"

- **`<div>`** .callout-socials-intro-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 369.906px | margin: 50px 0px 0px | opacity: 1
  - anim: all
  - text: "Follow Lando on social media"

- **`<div>`** .text-cta-short-intro.font-brier
  - font: 26.6667px 400 Brier, Arial, sans-serif | color: rgb(17, 17, 18) | lh: 27.7333px | ls: 0.666667px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 369.906px | opacity: 1
  - anim: all
  - text: "Follow Lando on social media"

- **`<div>`** .callout-socials-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 352.812px | opacity: 1
  - anim: all
  - text: "tiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 46.6562px | opacity: 1
  - anim: all

- **`<div>`** .callout-icon.icon-ball
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: center | border: 0px none rgb(210, 255, 0) | display: flex | width: 46.6562px | opacity: 1
  - anim: all

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 89.2031px | opacity: 1
  - anim: all
  - href: https://www.instagram.com/lando
  - text: "instagram"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 72.5156px | opacity: 1
  - anim: all
  - href: https://www.youtube.com/@LandoNorris
  - text: "Youtube"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 58.7969px | opacity: 1
  - anim: all
  - href: https://www.twitch.tv/landonorris
  - text: "Twitch"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 57.2969px | opacity: 1
  - anim: all
  - href: https://www.tiktok.com/@landonorris
  - text: "tiktok"

### HTML Structure

```html
<section data-designmode-white="" data-nav-theme-target="dark" data-wf--section-socials--variant="light-mode" class="s is-callout-socials"><div class="c is-callout-socials"><div class="spacer _8rem"></div><div class="callout-socials-inner"><div class="callout-socials-layout"><div class="callout-socials-rive-w"><div class="callout-icon icon-ball w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="off-icons" data-rive-state-machine="off-icons" data-rive-input="color_green-off-white-2" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-oval-scroll="" split-text="lines" class="text-title-lg-mona split-flex is-center"><span>what’s up</span><span class="span-font-brier">On Socials</span></h2><div data-social-callout="wrap" class="callout-socials-card-layout"><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp 638w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp 637w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp 1080w" class="image is-social-card"></div></div></div><div class="callout-socials-intro-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-cta-short-intro font-brier">Follow Lando on social media</div></div><div class="callout-socials-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">Twitch</div></div></a></div></div></div></div
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 12: Footer
- **Confidence:** 40%
- **Tag:** section
- **Classes:** `s is-footer`
- **Size:** full viewport height, width: 1440px
- **Background color:** rgb(244, 244, 237)
- **Headings:** H2: "Always bringing the fight."
- **CTAs:** Home, On Track, Off Track, Partnerships, Calendar
- **Media:** 10 image(s), 2 canvas(es), 8 SVG(s)
- **Animations:**
  - `div`.footer-bg-gradient: transition: all
  - `div`.c: transition: all
  - `div`.footer-layout-w: transition: all
  - `div`.footer-layout-clip: transition: all
  - `div`.footer-inner-layout: transition: all
  - `div`.footer-bg-pattern-w: transition: all
  - `div`.footer-bg-helmet-w: transition: all
  - `div`.spacer: transition: all
  - `div`.footer-statement-w: transition: all
  - `div`.footer-links-w: transition: all

### Element Style Blueprint

- **`<div>`** .footer-bg-gradient
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .c.is-footer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 16.6667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the figh"

- **`<div>`** .footer-layout-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the figh"

- **`<div>`** .footer-layout-clip
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | bg: rgb(40, 44, 32) | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the figh"

- **`<div>`** .footer-inner-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the figh"

- **`<div>`** .footer-bg-pattern-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 0.12
  - anim: all

- **`<div>`** .footer-bg-helmet-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<div>`** .spacer._14rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .footer-statement-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .footer-links-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | padding: 0px 170.667px | margin: 385.047px 0px 186.667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<div>`** .footer-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .footer-legal-links-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris. All rights reservedPrivacy PolicyTerms"

- **`<div>`** .footer-legal-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 205.344px | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris. All rights reserved"

- **`<div>`** .text-title-small-label
  - font: 10px 600 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 12.5px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 205.344px | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris. All rights reserved"

- **`<div>`** .footer-legal-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 194.156px | opacity: 1
  - anim: all
  - text: "Privacy PolicyTerms"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 125.656px | opacity: 1
  - anim: all
  - href: https://landonorris.com/legal/privacy-policy
  - text: "Privacy Policy"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 51.8438px | opacity: 1
  - anim: all
  - href: https://landonorris.com/legal/terms-conditions
  - text: "Terms"

### HTML Structure

```html
<section data-footer-theme="white" data-nav-theme-target="dark" class="s is-footer"><div class="spacer _14rem"></div><div class="c is-footer"><div class="footer-layout-w"><div data-nav-theme-target="light" class="footer-layout-clip"><div class="footer-inner-layout"><div class="footer-links-w"><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">pages</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="/" aria-current="page" class="text-link-w w-inline-block w--current"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Home</div></div></a><a data-anim="text-hover" href="/on-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">On Track</div></div></a><a data-anim="text-hover" href="/off-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Off Track</div></div></a><a data-anim="text-hover" href="/partnerships" class="text-link-w display-none w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Partnerships</div></div></a><a data-anim="text-hover" href="/calendar" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Calendar</div></div></a></div><a data-anim="text-hover" href="https://store.landonorris.com/" target="_blank" class="text-link-w c-lime w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Store</div></div></a></div><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">Follow On</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Twitch</div></div></a></div><a data-signup-trigger="" data-anim="text-hover" href="#" class="text-link-w c-lime is-hidden w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Sign&nbsp;Up</div></div></a></div></div><div class="footer-statement-w"><div class="footer-statement-layout"><div class="footer-rive-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d443bc774ddcd37b3d8d4d_ln4-footer-rive-placeholder.svg" loading="lazy" data-rive-placeholder="" alt="" class="image is-footer-rive"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_play" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-anim-high="right,lime-off" split-text="lines" class="text-impact-sm-mona footer">Always <span class="text-impact-sm-brier c-lime-off">bringing</span> the <span class="text-impact-sm-brier c-lime-off">fight</span>.</h2></div></div><div class="footer-bg-helmet-w"><div class="footer-bg-helmet-layout"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp 1560w" alt="" class="footer-bg-img"><div class="footer-bg-bottom-btn-w"><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="mailto:business@landonorris.com" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">business enquiries</div></div><div class="btn-icon-w"><div class="btn-rive-w w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div><div aria-hidden="true" class="footer-marquee"><div data-marquee-duplicate="3" data-marquee-scroll-direction-target="" data-marquee-direction="left" data-marquee-status="normal" data-marquee-speed="30" data-marquee-scroll-speed="5" class="marquee-adv-row"><div data-marquee-scroll-target="" class="marquee-adv-scroll"><div data-marquee-collection-target="" class="marquee-adv-collection"><div class="marquee-adv-item"><div class="footer-marquee-item"><div class="footer-marquee-logo-w"><div class="footer-marquee-svg w-embed"><svg width="100%" height="100%" viewBox="0 0 97 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m2.04 15.998 2.249 8.218 2.354-8.218h3.045l2.355 8.188 2.249-8.188h2.026l-2.881 9.748h-2.745l-2.519-8.338-2.52 8.338H2.895L0 15.998h2.04ZM16.377 20.843c0-2.937 1.725-4.993 5.339-4.993 3.164 0 5.039 1.814 5.039 5.008v.48h-8.248c.134 1.65 1.094 2.79 3.224 2.79 1.724 0 2.46-.78 2.64-1.515l.03-.088h2.25l-.015.09c-.285 1.8-1.89 3.284-4.934 3.284-3.6 0-5.324-2.054-5.324-5.039l-.001-.017Zm8.263-.99-.015-.03c-.223-1.41-1.287-2.204-2.999-2.204-1.785 0-2.73.885-3.03 2.235h6.044ZM35.317 24.263c-1.005 1.11-2.444 1.634-4.184 1.634-2.01 0-3.494-.704-3.494-2.505 0-1.859 1.44-2.653 3.584-2.879l2.294-.24c1.575-.165 2.685-.3 2.837-1.14l-.016.152.016-.104c.195-1.064-.6-1.605-2.325-1.605-1.814 0-2.849.557-3.15 2.127l-.03.138h-2.042l.03-.136c.495-2.43 2.16-3.853 5.339-3.853 3.284 0 4.604 1.454 4.11 3.778l-1.304 6.117h-1.98l.315-1.484Zm-3.734.136c2.026 0 3.854-.93 4.439-3.36v-.029l.045-.21c-.42.524-1.335.81-2.49.915l-1.934.223c-1.5.152-1.934.63-1.934 1.29 0 .766.674 1.17 1.874 1.17ZM42.26 17.544c.75-1.05 1.874-1.694 3.315-1.694 2.31 0 3.569 1.92 2.85 4.544l-.18.615H46.16l.165-.615c.42-1.485.045-2.79-1.605-2.79-1.694 0-2.64 1.14-3 2.505l-1.199 5.638h-2.04L40.55 16h2.04l-.33 1.545ZM54.933 15.85c3.674 0 5.115 2.219 4.589 5.053l-.076.435h-8.082c-.03 1.695 1.14 2.79 3.09 2.79 1.409 0 2.338-.585 2.698-1.44l.09-.165h2.055l-.06.18c-.615 1.83-2.145 3.194-4.92 3.194-3.568 0-5.563-2.431-4.873-5.804.45-2.009 2.085-4.243 5.489-4.243Zm2.654 3.973v-.06c.075-1.334-.9-2.144-2.564-2.144-1.98 0-2.938 1.14-3.36 2.204h5.924ZM69.18 24.367c-.525.72-1.605 1.53-3.434 1.53-3.075 0-4.95-2.127-4.95-5.008v-.03c0-2.91 1.935-5.01 4.905-5.01 1.829 0 2.954.825 3.479 1.53V16h2.025v9.703c0 2.325-.855 3.647-3.539 3.647h-6.33v-1.76h6.06c1.484 0 1.784-.644 1.784-2.127v-1.095Zm-3.147-.24c2.114 0 3.15-1.439 3.15-3.224v-.06c0-1.784-1.02-3.224-3.15-3.224-2.19 0-3.15 1.5-3.15 3.242v.03c-.002 1.722.972 3.237 3.
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 13: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `transition-w`
- **Size:** full viewport height, width: 1440px
- **Background color:** rgb(210, 255, 0)
- **CTAs:** Load Norris
- **Media:** 1 canvas(es)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** flex-end
- **Justify:** center
- **Animations:**
  - `div`.transition-rive: transition: all
  - `canvas`: transition: all
  - `div`.transition-btn: transition: all
  - `a`.btn-w: transition: all
  - `div`.btn-inner: transition: all
  - `div`.btn-inner-text-w: transition: all
  - `div`.btn-text: transition: all
  - `div`.js__embed: transition: all

### Element Style Blueprint

- **`<div>`** .transition-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .transition-btn
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 130.922px | opacity: 1
  - anim: all
  - text: "Load Norris"

- **`<a>`** .btn-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 130.922px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: https://landonorris.com/#
  - text: "Load Norris"

- **`<div>`** .btn-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 102.266px | opacity: 1
  - anim: all
  - text: "Load Norris"

- **`<div>`** .btn-inner-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 102.266px | opacity: 1
  - anim: all
  - text: "Load Norris"

- **`<div>`** .btn-text
  - font: 13.3333px 800 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 13.3333px | text-transform: uppercase | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 102.266px | opacity: 1
  - anim: all
  - text: "Load Norris"

- **`<div>`** .js__embed.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="transition-w"><div class="transition-rive w-embed"><canvas data-rive-primary=""></canvas></div><div class="transition-btn"><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="#" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">Load Norris</div></div></div></a></div><div class="js__embed w-embed w-script"><!--
<script src="https://assets.itsoffbrand.io/lando/dev-js/transitions-rive-isolate.js"></script>
--></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 14: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `transition-rive w-embed`
- **Size:** full viewport height, width: 1440px
- **Media:** 1 canvas(es)
- **Animations:**
  - `canvas`: transition: all

### Element Style Blueprint

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 1440px | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="transition-rive w-embed"><canvas data-rive-primary=""></canvas></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 15: Hero
- **Confidence:** 60%
- **Tag:** div
- **Classes:** `page-w`
- **Size:** full viewport height, width: 1440px
- **Headings:** H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"; H2: "ON"; H2: "TRACK"; H2: "OFF"; H2: "TRACK"; H2: "Helmets"; H2: "Hall of Fame"; H3: "Season"; H3: "Discoball"; H3: "Dark Glitter"; H3: "Season"; H3: "Porcelain"; H3: "Japan"; H3: "GIF"; H3: "Dark Mode"; H3: "Race"; H3: "Las Vegas"; H3: "Chrome"; H3: "Beachball"; H3: "Basketball"; H3: "Season"; H3: "Silverstone"; H3: "Season"; H2: "World Drivers' Champion"; H2: "partners"; H2: "&campaigns"; H2: "what’s upOn Socials"; H2: "Always bringing the fight."
- **CTAs:** Monacogp, view on track, Visit the store, view partnerships, tiktok
- **Media:** 123 image(s), 15 canvas(es), 78 SVG(s)
- **Sticky elements:** 4
- **Fixed elements:** 2
- **Animations:**
  - `div`.taxi-w: transition: all
  - `div`.sticky-track: transition: all
  - `div`.sticky-track: transition: all
  - `div`.s-group: transition: all
  - `div`.c: transition: all
  - `div`.c: transition: all
  - `div`.gl-wrap: transition: all
  - `div`.gl-background: transition: all
  - `div`.sticky-item: transition: all
  - `div`.c: transition: all

### Element Style Blueprint

- **`<div>`** .taxi-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Lando Norris2025 Mclaren Formula 1 Driver Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack "

- **`<div>`** .sticky-track.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scrollMessage from lando"

- **`<div>`** .sticky-track.is-home-otot
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .s-group.bg-black
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | bg: rgb(17, 17, 18) | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing"

- **`<div>`** .c.home-helmets
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 33.3333px 16.6667px 16.6667px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing"

- **`<div>`** .c
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 o"

- **`<div>`** .gl-wrap.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .gl-background
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .sticky-item.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scrollMessage from lando"

- **`<div>`** .c.is-horiz-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .sticky-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .horizontal-pin-wrap
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .otot-home-end-img-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .footer-bg-gradient
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .c.is-callout-socials
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .c.is-lando-exe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 146.667px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never sto"

- **`<div>`** .callout-socials-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .impact-content-w.is-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 1068px | padding: 80px 0px 160px | margin: 0px 169.344px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 o"

- **`<div>`** .c.is-footer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 16.6667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the figh"

- **`<div>`** .footer-layout-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the figh"

- **`<div>`** .grid-main.exe-grid
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: grid | width: 1146.69px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never sto"

- **`<div>`** .c.is-home-collabs
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "partners&campaignsLando is proud to collaborate with a range of partners, who share his passion for performance across a"

- **`<div>`** .home-collab-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1061.66px | opacity: 1
  - anim: all

- **`<div>`** .c.is-callout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 160px 16.6667px 116.667px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the trackview on track"

- **`<div>`** .spacer._20rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .spacer._20rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .spacer._14rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .exe-top-visor
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(17, 17, 18) | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .title-layout.grid-main
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "partners&campaignsLando is proud to collaborate with a range of partners, who share his passion for performance across a"

- **`<div>`** .spacer._8rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1406.69px | opacity: 1
  - anim: all

### HTML Structure

```html
<div data-start="hidden" overflow-clip="x" class="page-w"><main data-taxi="" class="main-w"><div data-page="home" data-taxi-view="" class="taxi-w"><div class="home-title-w"><h1 class="screen-reader">Lando Norris</h1><h2 class="screen-reader">2025 Mclaren Formula 1 Driver</h2></div><div data-designmode-white="" data-sticky-hero="track" data-gl-track="head" class="sticky-track home-hero"><div class="sticky-item home-hero"><section data-hero-animation-container="" class="s home-hero"><div class="c home-hero"><div data-gl="head" data-sticky-hero="canvas" class="gl-canvas"></div><div class="home-hero-next-race-w"><div class="home-hero-next-race-outline w-embed"><svg width="119" height="244" viewBox="0 0 119 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M118.5 6v232a5.5 5.5 0 0 1-5.5 5.5H6A5.5 5.5 0 0 1 .5 238V25A5.5 5.5 0 0 1 6 19.5h46.346c4.695 0 9.167-2 12.297-5.498l7.46-8.337A15.5 15.5 0 0 1 83.653.5H113a5.5 5.5 0 0 1 5.5 5.5Z" stroke="currentColor"></path>
</svg></div><div class="home-hero-next-race-top"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Next Race</div></div><div class="home-hero-next-race-row is-1 w-dyn-list"><div role="list" class="nr-list w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/calendar" class="home-hero-next-race-row w-inline-block"><div class="home-hero-next-race-rive-w"><div class="home-hero-next-race-rive w-embed"><!-- data-rive-circuit-hover="true"
-- looks for all [data-rive-circuit-hover-target] elements on page
-- changes the data-rive-input-track to the value of that hovered attribute
--> 
<canvas data-rive-object="" data-rive-file="circuits" data-rive-artboard="circuits" data-rive-state-machine="circuits" data-rive-input-track="monaco" data-rive-input-color="" data-rive-input-weight="" data-rive-fit="contain" data-rive-circuit-hover="">
</canvas></div></div><div class="eyebrow-w gap0-25"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Monaco</div><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">gp</div></div></a></div></div></div><div class="home-hero-next-race-line"></div><div data-gl-helmet="hover" class="home-hero-next-race-row is-2"><div class="base-helmet-rive-w"><div class="base-helmet-rive w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="helmet-reef" data-rive-state-machine="helmet-reef_play" data-rive-input="" data-rive-instant-play="true" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><div class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">mclaren f1 since 2019</div></div></div></div><div class="home-hero-tablet-hero-text"><div data-hero-anim="mob1" class="home-hero-tablet-text-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg" loading="lazy" alt="Lando Norris Text" class="image"></div><div data-hero-anim="mob2" class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines,chars" class="text-eyebrow">mclaren f1 since 2019</div></div></div><div data-home-swipe-wrap="" class="home-hero-touch-controls-w"><button title="Toggle Swipe" data-home-swipe-toggle="" class="btn-w is-touch-swipe"><div class="btn-inner is-touch-swipe"><div class="btn-icon-w is-touch-swipe"><div class="btn-rive-w is-touch-swipe is-unlocked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.51 15.32">
  <g>
    <path d="M4.9 15.32c-.37 0-.73-.07-1.07-.2s-.65-.34-.92-.61L.12 10.58a.747.747 0 0 1 .2-1.02l1.17-.8c.22-.22.52-.22.81-.13L2.27.77c0-.22.08-.4.23-.55S2.84 0 3.05 0s.39.07.54.22c.14.15.22.33.22.55v10.22s.02 1.13.02 1.55.28 1.26 1.08 1.26h4.78c.61 0 1.14-.2 1.57-.61.49-.47.73-1.15.73-1.83V7.15c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v4.34c0 1.07-.37 1.98-1.11 2.72s-1.65 1.11-2.72 1.11H4.9Z" fill="currentColor"></path>
    <path d="M5.51 7.92V3.83c0-.22.08-.4.23-.55.15-.14.34-.22.55-.22s.39.07.54.22c.14.15.22.33.22.55v4.09H5.51ZM8.73 7.92V5.11c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v2.81H8.73Z" fill="currentColor"></path>
  </g>
</svg></div><div class="btn-rive-w is-touch-swipe is-locked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.51 8.51">
<g><path d="M7.89 7.89.63.63M.63 7.89 7.89.63" stroke="currentColor" stroke-width="0.17rem"></path>
</g></svg></div></div></div></button><div class="home-hero-touch-desc-w"><div data-home-swipe-desc="unlocked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">tap to lock</div></div><div data-home-swipe-desc="locked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">Back to scroll</div></div></div></div></div></section><section class="s home-marquee"><div class="c is-marquee"><div class="marqee-adv-layout"><div class="marquee-adv-top-w"><div class="marquee-adv-top-layout"><div class="marquee-signature-w"><div data-wf--c-home-hero-icon--variant="ln4" class="home-hero-logo-wrap"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" data-hero-anim="img" alt="Lando's signature in lime color" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg" loading="eager" data-hero-anim="img" alt="" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-ln4-logo"></div></div><div class="eyebrow-w"><div split-text="chars" data-hero-anim="msg" class="text-eyebrow">Message from lando</div></div></div></div><div class="marquee-gl-target-w"><div data-sticky-hero="target" class="marquee-gl-target"><div class="marquee-gl-rive-target"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_scroll" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target=".hero-rive-tracker" data-rive-scrolltrigger-start="top center" data-rive-scrolltrigger-end="bottom 80%">
</canvas></div></div></div></div><div data-gl="carousel" class="gl-carousel"></div></div></div></section></div><div data-nav-theme-target="dark" class="hero-nav-theme is-1"></div><div data-nav-theme-target="light" class="hero-nav-theme is-2"></div><div data-hero-rive-tracker="" class="hero-eyebrow-tracker"></div><div data-hero-rive-tracker="" class="hero-rive-tracker"></div></div><section class="s"><div class="c"><div class="impact-content-w is-home"><div class="impact-icon-w"><div class="base-helmet-rive-w"><div data-rive-placeholder="" class="base-helmet-rive w-embed"><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 97 50.1">
  <path d="M.4 27.6s3 .9 6.1 5.9c-.4-1.1-.6-2.2-.8-3.4C1.5 27.8 1.1 25.7.8 22c.2 1 3.2 2.4 3.6 4 .4 1.3.8 2.5 1.3 3.1 0-1-.1-2 0-3v-.5c-1.3-1.1-4.3-4.3-3.5-9.1.5 1.2 3 1.6 3.7 7.4.2-1.1.5-2.1.8-3.2C5.5 19.2 3.5 15 5.6 7.9c.3 1.2 2.5 5.7 2 8.3-.2.8-.2 1.7-.3 2.6 0-.2.1-.4.2-.6.3-.9.7-1.8 1.2-2.7 0-1.4-.2-2.8-.8-4.1-.3-.6-.4-1.3-.4-2s.4-1.3.8-1.8c.6-.8.8-2.8.8-2.8s2.2 3.4 0 9.8c.4-.7.9-1.5 1.4-2.1.4-1 .4-2 .2-3.1-.4-1.8-.7-4.5 2.2-7.7-.3 1.5.4 4.2-.1 6-.4 1.3-.9 2.6-1.5 3.8.5-.6 1.1-1.2 1.7-1.8.3-1 .2-2.5.8-4.9.7-2.9 2.2-3.3 2.8-4.8.5 3.3-1 6.7-2.4 8.6l.4-.3c.4-.3.8-.6 1.1-1 .4-1.8 1.2-3.5 2.4-5 .8-.9 2.7-1.4 3-2.2-.3 3.3-2.3 5.1-4 6.3.9-.5 1.9-.7 2.9-.7s2 .4 2.8 1c0 0-2.2 1.3-3.7 1.1-1.5-.2-2.1-.5-3-.2-.3.3-.7.6-1.1.9 2.2-.6 4.8 1 5.8 2-1.9.9-3.5.3-4.3-.6-.7-.7-1.8-.4-2.3-.8-.7.6-1.3 1.2-2 1.8-.7.7-1.3 1.5-1.9 2.4 1.4-1.3 3.7-2.7 6-2.2-.3.9-1.8 2.5-3.4 3.1-1.4.4-2.7.4-3.6.9-.6 1-1 2.1-1.4 3.3 2.1-3.1 6.3-3.9 7.3-3.7 0 0-2 .9-2.4 2.4-.5 1.6-2.2 2.1-3.6 2.2-.7.1-1.4.5-1.9 1-.4 1.4-.8 2.9-1 4.4 1.9-6.5 6.4-5.5 6.4-5.5-.6.3-1 .9-1.2 1.5-.4 1
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 16: Hero
- **Confidence:** 60%
- **Tag:** div
- **Classes:** `taxi-w`
- **Size:** full viewport height, width: 1440px
- **Headings:** H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"; H2: "ON"; H2: "TRACK"; H2: "OFF"; H2: "TRACK"; H2: "Helmets"; H2: "Hall of Fame"; H3: "Season"; H3: "Discoball"; H3: "Dark Glitter"; H3: "Season"; H3: "Porcelain"; H3: "Japan"; H3: "GIF"; H3: "Dark Mode"; H3: "Race"; H3: "Las Vegas"; H3: "Chrome"; H3: "Beachball"; H3: "Basketball"; H3: "Season"; H3: "Silverstone"; H3: "Season"; H2: "World Drivers' Champion"; H2: "partners"; H2: "&campaigns"; H2: "what’s upOn Socials"; H2: "Always bringing the fight."
- **CTAs:** Monacogp, view on track, Visit the store, view partnerships, tiktok
- **Media:** 123 image(s), 15 canvas(es), 78 SVG(s)
- **Sticky elements:** 4
- **Fixed elements:** 2
- **Animations:**
  - `div`.sticky-track: transition: all
  - `div`.sticky-track: transition: all
  - `div`.s-group: transition: all
  - `div`.c: transition: all
  - `div`.w-dyn-list: transition: all
  - `div`.helmet-grid: transition: all
  - `img`.image: transition: all
  - `div`.c: transition: all
  - `div`.gl-wrap: transition: all
  - `div`.gl-background: transition: all

### Element Style Blueprint

- **`<div>`** .sticky-track.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scrollMessage from lando"

- **`<div>`** .sticky-track.is-home-otot
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .s-group.bg-black
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | bg: rgb(17, 17, 18) | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing"

- **`<div>`** .c.home-helmets
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 33.3333px 16.6667px 16.6667px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing"

- **`<div>`** .w-dyn-list
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas202"

- **`<div>`** .helmet-grid.w-dyn-items
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas202"

- **`<img>`** .image.is-otot-home-end
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302ff5ff89a9a4afb8c19e_ln-home-helm-large.webp

- **`<div>`** .c
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 o"

- **`<div>`** .gl-wrap.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .gl-background
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .sticky-item.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scrollMessage from lando"

- **`<div>`** .c.is-horiz-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .sticky-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .horizontal-pin-wrap
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .otot-home-end-img-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .c.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scroll"

- **`<div>`** .c.is-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .horizontal-pin-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .c.is-otot-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .gl-canvas
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-pin-sticky
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .otot-home-bg
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .otot-home-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .footer-bg-gradient
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .c.is-callout-socials
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .c.is-lando-exe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 146.667px | opacity: 1
  - anim: all
  - text: "LANDO STOREWorld Drivers' ChampionCelebrate this incredible moment with a collection designed for the fans who never sto"

- **`<div>`** .callout-socials-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: start | border: 0px none rgb(17, 17, 18) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .impact-content-w.is-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 1068px | padding: 80px 0px 160px | margin: 0px 169.344px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 o"

- **`<div>`** .c.is-footer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 16.6667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the figh"

### HTML Structure

```html
<div data-page="home" data-taxi-view="" class="taxi-w"><div class="home-title-w"><h1 class="screen-reader">Lando Norris</h1><h2 class="screen-reader">2025 Mclaren Formula 1 Driver</h2></div><div data-designmode-white="" data-sticky-hero="track" data-gl-track="head" class="sticky-track home-hero"><div class="sticky-item home-hero"><section data-hero-animation-container="" class="s home-hero"><div class="c home-hero"><div data-gl="head" data-sticky-hero="canvas" class="gl-canvas"></div><div class="home-hero-next-race-w"><div class="home-hero-next-race-outline w-embed"><svg width="119" height="244" viewBox="0 0 119 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M118.5 6v232a5.5 5.5 0 0 1-5.5 5.5H6A5.5 5.5 0 0 1 .5 238V25A5.5 5.5 0 0 1 6 19.5h46.346c4.695 0 9.167-2 12.297-5.498l7.46-8.337A15.5 15.5 0 0 1 83.653.5H113a5.5 5.5 0 0 1 5.5 5.5Z" stroke="currentColor"></path>
</svg></div><div class="home-hero-next-race-top"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Next Race</div></div><div class="home-hero-next-race-row is-1 w-dyn-list"><div role="list" class="nr-list w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/calendar" class="home-hero-next-race-row w-inline-block"><div class="home-hero-next-race-rive-w"><div class="home-hero-next-race-rive w-embed"><!-- data-rive-circuit-hover="true"
-- looks for all [data-rive-circuit-hover-target] elements on page
-- changes the data-rive-input-track to the value of that hovered attribute
--> 
<canvas data-rive-object="" data-rive-file="circuits" data-rive-artboard="circuits" data-rive-state-machine="circuits" data-rive-input-track="monaco" data-rive-input-color="" data-rive-input-weight="" data-rive-fit="contain" data-rive-circuit-hover="">
</canvas></div></div><div class="eyebrow-w gap0-25"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Monaco</div><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">gp</div></div></a></div></div></div><div class="home-hero-next-race-line"></div><div data-gl-helmet="hover" class="home-hero-next-race-row is-2"><div class="base-helmet-rive-w"><div class="base-helmet-rive w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="helmet-reef" data-rive-state-machine="helmet-reef_play" data-rive-input="" data-rive-instant-play="true" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><div class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">mclaren f1 since 2019</div></div></div></div><div class="home-hero-tablet-hero-text"><div data-hero-anim="mob1" class="home-hero-tablet-text-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg" loading="lazy" alt="Lando Norris Text" class="image"></div><div data-hero-anim="mob2" class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines,chars" class="text-eyebrow">mclaren f1 since 2019</div></div></div><div data-home-swipe-wrap="" class="home-hero-touch-controls-w"><button title="Toggle Swipe" data-home-swipe-toggle="" class="btn-w is-touch-swipe"><div class="btn-inner is-touch-swipe"><div class="btn-icon-w is-touch-swipe"><div class="btn-rive-w is-touch-swipe is-unlocked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.51 15.32">
  <g>
    <path d="M4.9 15.32c-.37 0-.73-.07-1.07-.2s-.65-.34-.92-.61L.12 10.58a.747.747 0 0 1 .2-1.02l1.17-.8c.22-.22.52-.22.81-.13L2.27.77c0-.22.08-.4.23-.55S2.84 0 3.05 0s.39.07.54.22c.14.15.22.33.22.55v10.22s.02 1.13.02 1.55.28 1.26 1.08 1.26h4.78c.61 0 1.14-.2 1.57-.61.49-.47.73-1.15.73-1.83V7.15c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v4.34c0 1.07-.37 1.98-1.11 2.72s-1.65 1.11-2.72 1.11H4.9Z" fill="currentColor"></path>
    <path d="M5.51 7.92V3.83c0-.22.08-.4.23-.55.15-.14.34-.22.55-.22s.39.07.54.22c.14.15.22.33.22.55v4.09H5.51ZM8.73 7.92V5.11c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v2.81H8.73Z" fill="currentColor"></path>
  </g>
</svg></div><div class="btn-rive-w is-touch-swipe is-locked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.51 8.51">
<g><path d="M7.89 7.89.63.63M.63 7.89 7.89.63" stroke="currentColor" stroke-width="0.17rem"></path>
</g></svg></div></div></div></button><div class="home-hero-touch-desc-w"><div data-home-swipe-desc="unlocked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">tap to lock</div></div><div data-home-swipe-desc="locked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">Back to scroll</div></div></div></div></div></section><section class="s home-marquee"><div class="c is-marquee"><div class="marqee-adv-layout"><div class="marquee-adv-top-w"><div class="marquee-adv-top-layout"><div class="marquee-signature-w"><div data-wf--c-home-hero-icon--variant="ln4" class="home-hero-logo-wrap"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" data-hero-anim="img" alt="Lando's signature in lime color" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg" loading="eager" data-hero-anim="img" alt="" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-ln4-logo"></div></div><div class="eyebrow-w"><div split-text="chars" data-hero-anim="msg" class="text-eyebrow">Message from lando</div></div></div></div><div class="marquee-gl-target-w"><div data-sticky-hero="target" class="marquee-gl-target"><div class="marquee-gl-rive-target"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_scroll" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target=".hero-rive-tracker" data-rive-scrolltrigger-start="top center" data-rive-scrolltrigger-end="bottom 80%">
</canvas></div></div></div></div><div data-gl="carousel" class="gl-carousel"></div></div></div></section></div><div data-nav-theme-target="dark" class="hero-nav-theme is-1"></div><div data-nav-theme-target="light" class="hero-nav-theme is-2"></div><div data-hero-rive-tracker="" class="hero-eyebrow-tracker"></div><div data-hero-rive-tracker="" class="hero-rive-tracker"></div></div><section class="s"><div class="c"><div class="impact-content-w is-home"><div class="impact-icon-w"><div class="base-helmet-rive-w"><div data-rive-placeholder="" class="base-helmet-rive w-embed"><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 97 50.1">
  <path d="M.4 27.6s3 .9 6.1 5.9c-.4-1.1-.6-2.2-.8-3.4C1.5 27.8 1.1 25.7.8 22c.2 1 3.2 2.4 3.6 4 .4 1.3.8 2.5 1.3 3.1 0-1-.1-2 0-3v-.5c-1.3-1.1-4.3-4.3-3.5-9.1.5 1.2 3 1.6 3.7 7.4.2-1.1.5-2.1.8-3.2C5.5 19.2 3.5 15 5.6 7.9c.3 1.2 2.5 5.7 2 8.3-.2.8-.2 1.7-.3 2.6 0-.2.1-.4.2-.6.3-.9.7-1.8 1.2-2.7 0-1.4-.2-2.8-.8-4.1-.3-.6-.4-1.3-.4-2s.4-1.3.8-1.8c.6-.8.8-2.8.8-2.8s2.2 3.4 0 9.8c.4-.7.9-1.5 1.4-2.1.4-1 .4-2 .2-3.1-.4-1.8-.7-4.5 2.2-7.7-.3 1.5.4 4.2-.1 6-.4 1.3-.9 2.6-1.5 3.8.5-.6 1.1-1.2 1.7-1.8.3-1 .2-2.5.8-4.9.7-2.9 2.2-3.3 2.8-4.8.5 3.3-1 6.7-2.4 8.6l.4-.3c.4-.3.8-.6 1.1-1 .4-1.8 1.2-3.5 2.4-5 .8-.9 2.7-1.4 3-2.2-.3 3.3-2.3 5.1-4 6.3.9-.5 1.9-.7 2.9-.7s2 .4 2.8 1c0 0-2.2 1.3-3.7 1.1-1.5-.2-2.1-.5-3-.2-.3.3-.7.6-1.1.9 2.2-.6 4.8 1 5.8 2-1.9.9-3.5.3-4.3-.6-.7-.7-1.8-.4-2.3-.8-.7.6-1.3 1.2-2 1.8-.7.7-1.3 1.5-1.9 2.4 1.4-1.3 3.7-2.7 6-2.2-.3.9-1.8 2.5-3.4 3.1-1.4.4-2.7.4-3.6.9-.6 1-1 2.1-1.4 3.3 2.1-3.1 6.3-3.9 7.3-3.7 0 0-2 .9-2.4 2.4-.5 1.6-2.2 2.1-3.6 2.2-.7.1-1.4.5-1.9 1-.4 1.4-.8 2.9-1 4.4 1.9-6.5 6.4-5.5 6.4-5.5-.6.3-1 .9-1.2 1.5-.4 1.1-.9 2-2.6 3.2-1.2.8-2.2 2.1-2.7 3.5 0 1.8.4 3.5.9 5.2-.3-2.2-.2-5.2 1.4-7.4-.2 1.5 1.5 4.1
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 17: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `sticky-track home-hero`
- **Size:** full viewport height, width: 1440px
- **CTAs:** Monacogp
- **Media:** 3 image(s), 3 canvas(es), 3 SVG(s)
- **Sticky elements:** 1
- **Animations:**
  - `div`.sticky-item: transition: all
  - `div`.c: transition: all
  - `div`.c: transition: all
  - `div`.gl-canvas: transition: all
  - `div`.marqee-adv-layout: transition: all
  - `div`.marquee-gl-target-w: transition: all
  - `div`.marquee-adv-top-w: transition: all
  - `div`.home-hero-next-race-w: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1)
  - `div`.home-hero-next-race-outline: transition: all
  - `div`.hero-rive-tracker: transition: all

### Element Style Blueprint

- **`<div>`** .sticky-item.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scrollMessage from lando"

- **`<div>`** .c.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scroll"

- **`<div>`** .c.is-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .gl-canvas
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marqee-adv-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-gl-target-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-top-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .home-hero-next-race-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1)
  - text: "Next Race Monacogp mclaren f1 since 2019"

- **`<div>`** .home-hero-next-race-outline.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: all

- **`<div>`** .hero-rive-tracker
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 10px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-row.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Monacogp"

- **`<div>`** .home-hero-next-race-row.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .home-hero-next-race-top
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Next Race"

- **`<div>`** .hero-eyebrow-tracker
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-line
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | bg: rgb(83, 84, 80) | border: 0px none rgb(83, 84, 80) | display: block | width: 79.3125px | margin: 0px 9.92188px | opacity: 1
  - anim: all

- **`<div>`** .hero-nav-theme.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all

- **`<div>`** .hero-nav-theme.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all

- **`<div>`** .home-hero-tablet-hero-text
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .home-hero-touch-controls-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all
  - text: "tap to lockBack to scroll"

- **`<div>`** .home-hero-tablet-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all

- **`<div>`** .eyebrow-w.hero-next-race
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<button>`** .btn-w.is-touch-swipe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: center | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 50px | padding: 0px 13.3333px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-touch-desc-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "tap to lockBack to scroll"

- **`<div>`** .gl-carousel
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

### HTML Structure

```html
<div data-designmode-white="" data-sticky-hero="track" data-gl-track="head" class="sticky-track home-hero"><div class="sticky-item home-hero"><section data-hero-animation-container="" class="s home-hero"><div class="c home-hero"><div data-gl="head" data-sticky-hero="canvas" class="gl-canvas"></div><div class="home-hero-next-race-w"><div class="home-hero-next-race-outline w-embed"><svg width="119" height="244" viewBox="0 0 119 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M118.5 6v232a5.5 5.5 0 0 1-5.5 5.5H6A5.5 5.5 0 0 1 .5 238V25A5.5 5.5 0 0 1 6 19.5h46.346c4.695 0 9.167-2 12.297-5.498l7.46-8.337A15.5 15.5 0 0 1 83.653.5H113a5.5 5.5 0 0 1 5.5 5.5Z" stroke="currentColor"></path>
</svg></div><div class="home-hero-next-race-top"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Next Race</div></div><div class="home-hero-next-race-row is-1 w-dyn-list"><div role="list" class="nr-list w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/calendar" class="home-hero-next-race-row w-inline-block"><div class="home-hero-next-race-rive-w"><div class="home-hero-next-race-rive w-embed"><!-- data-rive-circuit-hover="true"
-- looks for all [data-rive-circuit-hover-target] elements on page
-- changes the data-rive-input-track to the value of that hovered attribute
--> 
<canvas data-rive-object="" data-rive-file="circuits" data-rive-artboard="circuits" data-rive-state-machine="circuits" data-rive-input-track="monaco" data-rive-input-color="" data-rive-input-weight="" data-rive-fit="contain" data-rive-circuit-hover="">
</canvas></div></div><div class="eyebrow-w gap0-25"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Monaco</div><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">gp</div></div></a></div></div></div><div class="home-hero-next-race-line"></div><div data-gl-helmet="hover" class="home-hero-next-race-row is-2"><div class="base-helmet-rive-w"><div class="base-helmet-rive w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="helmet-reef" data-rive-state-machine="helmet-reef_play" data-rive-input="" data-rive-instant-play="true" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><div class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">mclaren f1 since 2019</div></div></div></div><div class="home-hero-tablet-hero-text"><div data-hero-anim="mob1" class="home-hero-tablet-text-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg" loading="lazy" alt="Lando Norris Text" class="image"></div><div data-hero-anim="mob2" class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines,chars" class="text-eyebrow">mclaren f1 since 2019</div></div></div><div data-home-swipe-wrap="" class="home-hero-touch-controls-w"><button title="Toggle Swipe" data-home-swipe-toggle="" class="btn-w is-touch-swipe"><div class="btn-inner is-touch-swipe"><div class="btn-icon-w is-touch-swipe"><div class="btn-rive-w is-touch-swipe is-unlocked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.51 15.32">
  <g>
    <path d="M4.9 15.32c-.37 0-.73-.07-1.07-.2s-.65-.34-.92-.61L.12 10.58a.747.747 0 0 1 .2-1.02l1.17-.8c.22-.22.52-.22.81-.13L2.27.77c0-.22.08-.4.23-.55S2.84 0 3.05 0s.39.07.54.22c.14.15.22.33.22.55v10.22s.02 1.13.02 1.55.28 1.26 1.08 1.26h4.78c.61 0 1.14-.2 1.57-.61.49-.47.73-1.15.73-1.83V7.15c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v4.34c0 1.07-.37 1.98-1.11 2.72s-1.65 1.11-2.72 1.11H4.9Z" fill="currentColor"></path>
    <path d="M5.51 7.92V3.83c0-.22.08-.4.23-.55.15-.14.34-.22.55-.22s.39.07.54.22c.14.15.22.33.22.55v4.09H5.51ZM8.73 7.92V5.11c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v2.81H8.73Z" fill="currentColor"></path>
  </g>
</svg></div><div class="btn-rive-w is-touch-swipe is-locked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.51 8.51">
<g><path d="M7.89 7.89.63.63M.63 7.89 7.89.63" stroke="currentColor" stroke-width="0.17rem"></path>
</g></svg></div></div></div></button><div class="home-hero-touch-desc-w"><div data-home-swipe-desc="unlocked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">tap to lock</div></div><div data-home-swipe-desc="locked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">Back to scroll</div></div></div></div></div></section><section class="s home-marquee"><div class="c is-marquee"><div class="marqee-adv-layout"><div class="marquee-adv-top-w"><div class="marquee-adv-top-layout"><div class="marquee-signature-w"><div data-wf--c-home-hero-icon--variant="ln4" class="home-hero-logo-wrap"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" data-hero-anim="img" alt="Lando's signature in lime color" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg" loading="eager" data-hero-anim="img" alt="" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-ln4-logo"></div></div><div class="eyebrow-w"><div split-text="chars" data-hero-anim="msg" class="text-eyebrow">Message from lando</div></div></div></div><div class="marquee-gl-target-w"><div data-sticky-hero="target" class="marquee-gl-target"><div class="marquee-gl-rive-target"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_scroll" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target=".hero-rive-tracker" data-rive-scrolltrigger-start="top center" data-rive-scrolltrigger-end="bottom 80%">
</canvas></div></div></div></div><div data-gl="carousel" class="gl-carousel"></div></div></div></section></div><div data-nav-theme-target="dark" class="hero-nav-theme is-1"></div><div data-nav-theme-target="light" class="hero-nav-theme is-2"></div><div data-hero-rive-tracker="" class="hero-eyebrow-tracker"></div><div data-hero-rive-tracker="" class="hero-rive-tracker"></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 18: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `sticky-item home-hero`
- **Size:** full viewport height, width: 1440px
- **CTAs:** Monacogp
- **Media:** 3 image(s), 3 canvas(es), 3 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.c: transition: all
  - `div`.gl-canvas: transition: all
  - `div`.marqee-adv-layout: transition: all
  - `div`.marquee-gl-target-w: transition: all
  - `div`.marquee-gl-target: transition: all
  - `div`.marquee-adv-top-w: transition: all
  - `div`.home-hero-next-race-w: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1)
  - `div`.home-hero-next-race-outline: transition: all
  - `svg`: transition: all

### Element Style Blueprint

- **`<div>`** .c.home-hero
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "Next Race Monacogp mclaren f1 since 2019mclaren f1 since 2019 tap to lockBack to scroll"

- **`<div>`** .c.is-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .gl-canvas
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marqee-adv-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .marquee-gl-target-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .marquee-gl-target
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 471.656px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-top-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .home-hero-next-race-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1)
  - text: "Next Race Monacogp mclaren f1 since 2019"

- **`<div>`** .home-hero-next-race-outline.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: all

- **`<svg>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: inline | width: 99.1562px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-row.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Monacogp"

- **`<div>`** .home-hero-next-race-row.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .nr-list.w-dyn-items
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Monacogp"

- **`<div>`** .marquee-adv-top-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 99.0625px | opacity: 1
  - anim: all
  - text: "Message from lando"

- **`<div>`** .base-helmet-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 80.8281px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-next-race-top
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | border: 0px none rgb(83, 84, 80) | display: flex | width: 99.1562px | opacity: 1
  - anim: all
  - text: "Next Race"

- **`<div>`** .eyebrow-w.hero-next-race
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: center | border: 0px none rgb(83, 84, 80) | display: flex | width: 79.3125px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 8.33333px | text-transform: uppercase | text-align: start | border: 0px none rgb(83, 84, 80) | display: block | width: 47.5312px | opacity: 1
  - anim: all
  - text: "Next Race"

- **`<div>`** .home-hero-next-race-line
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(83, 84, 80) | lh: 20px | text-align: start | bg: rgb(83, 84, 80) | border: 0px none rgb(83, 84, 80) | display: block | width: 79.3125px | margin: 0px 9.92188px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-tablet-hero-text
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .home-hero-touch-controls-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | opacity: 1
  - anim: all
  - text: "tap to lockBack to scroll"

- **`<div>`** .home-hero-tablet-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all

- **`<div>`** .eyebrow-w.hero-next-race
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<button>`** .btn-w.is-touch-swipe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: center | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 50px | padding: 0px 13.3333px | opacity: 1
  - anim: all

- **`<div>`** .home-hero-touch-desc-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "tap to lockBack to scroll"

- **`<div>`** .gl-carousel
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 100% | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 8.33333px | text-transform: uppercase | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .btn-inner.is-touch-swipe
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: center | border: 0px none rgb(40, 44, 32) | display: flex | opacity: 1
  - anim: all

- **`<div>`** .touch-desc-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | opacity: 1
  - anim: all
  - text: "tap to lock"

### HTML Structure

```html
<div class="sticky-item home-hero"><section data-hero-animation-container="" class="s home-hero"><div class="c home-hero"><div data-gl="head" data-sticky-hero="canvas" class="gl-canvas"></div><div class="home-hero-next-race-w"><div class="home-hero-next-race-outline w-embed"><svg width="119" height="244" viewBox="0 0 119 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M118.5 6v232a5.5 5.5 0 0 1-5.5 5.5H6A5.5 5.5 0 0 1 .5 238V25A5.5 5.5 0 0 1 6 19.5h46.346c4.695 0 9.167-2 12.297-5.498l7.46-8.337A15.5 15.5 0 0 1 83.653.5H113a5.5 5.5 0 0 1 5.5 5.5Z" stroke="currentColor"></path>
</svg></div><div class="home-hero-next-race-top"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Next Race</div></div><div class="home-hero-next-race-row is-1 w-dyn-list"><div role="list" class="nr-list w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/calendar" class="home-hero-next-race-row w-inline-block"><div class="home-hero-next-race-rive-w"><div class="home-hero-next-race-rive w-embed"><!-- data-rive-circuit-hover="true"
-- looks for all [data-rive-circuit-hover-target] elements on page
-- changes the data-rive-input-track to the value of that hovered attribute
--> 
<canvas data-rive-object="" data-rive-file="circuits" data-rive-artboard="circuits" data-rive-state-machine="circuits" data-rive-input-track="monaco" data-rive-input-color="" data-rive-input-weight="" data-rive-fit="contain" data-rive-circuit-hover="">
</canvas></div></div><div class="eyebrow-w gap0-25"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">Monaco</div><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">gp</div></div></a></div></div></div><div class="home-hero-next-race-line"></div><div data-gl-helmet="hover" class="home-hero-next-race-row is-2"><div class="base-helmet-rive-w"><div class="base-helmet-rive w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="helmet-reef" data-rive-state-machine="helmet-reef_play" data-rive-input="" data-rive-instant-play="true" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><div class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines" class="text-eyebrow">mclaren f1 since 2019</div></div></div></div><div class="home-hero-tablet-hero-text"><div data-hero-anim="mob1" class="home-hero-tablet-text-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e968a40345883f8ccc1b05_ln4-lando-norris-text-mobile.svg" loading="lazy" alt="Lando Norris Text" class="image"></div><div data-hero-anim="mob2" class="eyebrow-w hero-next-race"><div data-anim-high="right, lime" split-text="lines,chars" class="text-eyebrow">mclaren f1 since 2019</div></div></div><div data-home-swipe-wrap="" class="home-hero-touch-controls-w"><button title="Toggle Swipe" data-home-swipe-toggle="" class="btn-w is-touch-swipe"><div class="btn-inner is-touch-swipe"><div class="btn-icon-w is-touch-swipe"><div class="btn-rive-w is-touch-swipe is-unlocked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.51 15.32">
  <g>
    <path d="M4.9 15.32c-.37 0-.73-.07-1.07-.2s-.65-.34-.92-.61L.12 10.58a.747.747 0 0 1 .2-1.02l1.17-.8c.22-.22.52-.22.81-.13L2.27.77c0-.22.08-.4.23-.55S2.84 0 3.05 0s.39.07.54.22c.14.15.22.33.22.55v10.22s.02 1.13.02 1.55.28 1.26 1.08 1.26h4.78c.61 0 1.14-.2 1.57-.61.49-.47.73-1.15.73-1.83V7.15c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v4.34c0 1.07-.37 1.98-1.11 2.72s-1.65 1.11-2.72 1.11H4.9Z" fill="currentColor"></path>
    <path d="M5.51 7.92V3.83c0-.22.08-.4.23-.55.15-.14.34-.22.55-.22s.39.07.54.22c.14.15.22.33.22.55v4.09H5.51ZM8.73 7.92V5.11c0-.22.08-.4.23-.55s.34-.22.55-.22.39.07.54.22c.14.15.22.33.22.55v2.81H8.73Z" fill="currentColor"></path>
  </g>
</svg></div><div class="btn-rive-w is-touch-swipe is-locked w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.51 8.51">
<g><path d="M7.89 7.89.63.63M.63 7.89 7.89.63" stroke="currentColor" stroke-width="0.17rem"></path>
</g></svg></div></div></div></button><div class="home-hero-touch-desc-w"><div data-home-swipe-desc="unlocked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">tap to lock</div></div><div data-home-swipe-desc="locked" class="touch-desc-inner"><div class="text-eyebrow touch-desc">Back to scroll</div></div></div></div></div></section><section class="s home-marquee"><div class="c is-marquee"><div class="marqee-adv-layout"><div class="marquee-adv-top-w"><div class="marquee-adv-top-layout"><div class="marquee-signature-w"><div data-wf--c-home-hero-icon--variant="ln4" class="home-hero-logo-wrap"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="eager" data-hero-anim="img" alt="Lando's signature in lime color" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg" loading="eager" data-hero-anim="img" alt="" class="image is-home-marquee-sig-img w-variant-88b83061-c887-c094-eb94-cbb8cabca5e0 is-ln4-logo"></div></div><div class="eyebrow-w"><div split-text="chars" data-hero-anim="msg" class="text-eyebrow">Message from lando</div></div></div></div><div class="marquee-gl-target-w"><div data-sticky-hero="target" class="marquee-gl-target"><div class="marquee-gl-rive-target"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_scroll" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target=".hero-rive-tracker" data-rive-scrolltrigger-start="top center" data-rive-scrolltrigger-end="bottom 80%">
</canvas></div></div></div></div><div data-gl="carousel" class="gl-carousel"></div></div></div></section></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 19: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `gl-canvas`
- **Size:** full viewport height, width: 1440px
### HTML Structure

```html
<div data-gl="head" data-sticky-hero="canvas" class="gl-canvas"></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 20: Contact
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `impact-content-w is-home`
- **Size:** full viewport height, width: 1068px
- **Padding:** 80px 0px 160px
- **Margin:** 0px 169.344px
- **Media:** 1 canvas(es), 1 SVG(s)
- **Flex:** direction: column, wrap: nowrap, gap: 50px
- **Align items:** center
- **Justify:** flex-start
- **Animations:**
  - `div`.text-impact-lg-mona: transition: all
  - `div`.impact-icon-w: transition: all
  - `div`.base-helmet-rive-w: transition: all
  - `div`.base-helmet-rive: transition: all
  - `canvas`: transition: all
  - `div`.text-eyebrow: transition: all
  - `div`.base-helmet-rive: transition: all
  - `svg`: transition: all

### Element Style Blueprint

- **`<div>`** .text-impact-lg-mona
  - font: 105.833px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 95.25px | ls: -0.833333px | text-transform: uppercase | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 1068px | opacity: 1
  - anim: all
  - text: "Redefining limits, fighting for wins, bringing it all in all ways. Defining a legacy in Formula 1 on and off the track."

- **`<div>`** .impact-icon-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 101.391px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .base-helmet-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 101.391px | opacity: 1
  - anim: all

- **`<div>`** .base-helmet-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: flex | width: 80.8281px | margin: 0px 10.2812px | opacity: 1
  - anim: all

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 80.8281px | opacity: 1
  - anim: all

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 8.33333px | text-transform: uppercase | text-align: center | border: 0px none rgb(221, 225, 210) | display: block | width: 101.391px | opacity: 1
  - anim: all
  - text: "mclaren f1 since 2019"

- **`<div>`** .base-helmet-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | width: 80.8333px | margin: 0px auto | opacity: 1
  - anim: all

- **`<svg>`** #Layer_1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(221, 225, 210) | lh: 20px | text-align: center | border: 0px none rgb(221, 225, 210) | display: inline | width: 100% | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="impact-content-w is-home"><div class="impact-icon-w"><div class="base-helmet-rive-w"><div data-rive-placeholder="" class="base-helmet-rive w-embed"><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 97 50.1">
  <path d="M.4 27.6s3 .9 6.1 5.9c-.4-1.1-.6-2.2-.8-3.4C1.5 27.8 1.1 25.7.8 22c.2 1 3.2 2.4 3.6 4 .4 1.3.8 2.5 1.3 3.1 0-1-.1-2 0-3v-.5c-1.3-1.1-4.3-4.3-3.5-9.1.5 1.2 3 1.6 3.7 7.4.2-1.1.5-2.1.8-3.2C5.5 19.2 3.5 15 5.6 7.9c.3 1.2 2.5 5.7 2 8.3-.2.8-.2 1.7-.3 2.6 0-.2.1-.4.2-.6.3-.9.7-1.8 1.2-2.7 0-1.4-.2-2.8-.8-4.1-.3-.6-.4-1.3-.4-2s.4-1.3.8-1.8c.6-.8.8-2.8.8-2.8s2.2 3.4 0 9.8c.4-.7.9-1.5 1.4-2.1.4-1 .4-2 .2-3.1-.4-1.8-.7-4.5 2.2-7.7-.3 1.5.4 4.2-.1 6-.4 1.3-.9 2.6-1.5 3.8.5-.6 1.1-1.2 1.7-1.8.3-1 .2-2.5.8-4.9.7-2.9 2.2-3.3 2.8-4.8.5 3.3-1 6.7-2.4 8.6l.4-.3c.4-.3.8-.6 1.1-1 .4-1.8 1.2-3.5 2.4-5 .8-.9 2.7-1.4 3-2.2-.3 3.3-2.3 5.1-4 6.3.9-.5 1.9-.7 2.9-.7s2 .4 2.8 1c0 0-2.2 1.3-3.7 1.1-1.5-.2-2.1-.5-3-.2-.3.3-.7.6-1.1.9 2.2-.6 4.8 1 5.8 2-1.9.9-3.5.3-4.3-.6-.7-.7-1.8-.4-2.3-.8-.7.6-1.3 1.2-2 1.8-.7.7-1.3 1.5-1.9 2.4 1.4-1.3 3.7-2.7 6-2.2-.3.9-1.8 2.5-3.4 3.1-1.4.4-2.7.4-3.6.9-.6 1-1 2.1-1.4 3.3 2.1-3.1 6.3-3.9 7.3-3.7 0 0-2 .9-2.4 2.4-.5 1.6-2.2 2.1-3.6 2.2-.7.1-1.4.5-1.9 1-.4 1.4-.8 2.9-1 4.4 1.9-6.5 6.4-5.5 6.4-5.5-.6.3-1 .9-1.2 1.5-.4 1.1-.9 2-2.6 3.2-1.2.8-2.2 2.1-2.7 3.5 0 1.8.4 3.5.9 5.2-.3-2.2-.2-5.2 1.4-7.4-.2 1.5 1.5 4.1 1.1 5.9-.3 1.5-1.4 3.4-1.2 4.8.2.4.4.8.6 1.1 0-1 .5-2.3.5-3.3.3.9.2 3 .2 4.4.5.8 1.1 1.5 1.7 2.2-1.3-2.4-1.4-6-.4-9 1 1.5 2.1 4.4 1.8 6.4-.2 1.5 0 2.9.4 4.3l.3.3c.3.3.7.6 1 .8-1.5-2.1-1.3-5.3-1-6.7 1.8 2 3.3 6 3.2 8.1l1.2.6c1.6.7 3.4 1.1 5.1.6v.2l.1.2v.4c-1.8.5-3.8 0-5.5-.7l-1.8-.9c-1.1 1.1-3.4 1.8-4.8 1.4-1.3-.4-2.6-1.4-3.6-1.3 1.7-1.8 3.9-1.9 5.2-1.1 1.2.7 2 1 2.7.8-.8-.5-1.6-1.1-2.3-1.7l-.3-.3c-1.9.7-4 0-5.3-.8-1.5-.9-1.7-2.6-2.8-3.5 3.5-.1 5 1.4 5.6 2.3.5.7 1.2 1.3 2 1.5-1.1-1.1-2.1-2.2-2.9-3.5-.9-.2-3 0-4.1-1.5 1.5-.1 2.6 0 3.4.5-.2-.4-.4-.8-.6-1.1-1.1-.2-3.1 0-4.4-1.1-1.1-1.1-2.2-2.3-3.1-3.6 0 0 2.5.5 3.8 1.1-1.1-1-3.8-5.7-3.8-5.8ZM96.4 27.3s-3 1-6 6c.3-1.1.6-2.2.7-3.4 4.3-2.4 4.6-4.5 4.9-8.2-.2 1-3.1 2.5-3.6 4.1-.4 1.3-.8 2.5-1.2 3.2v-3.5c1.3-1.1 4.2-4.4 3.3-9.1-.4 1.2-3 1.6-3.6 7.5-.2-1.1-.5-2.1-.8-3.2 1.2-1.5 3.1-5.8.9-12.8-.3 1.2-2.4 5.7-1.9 8.3.2.8.3 1.7.3 2.6 0-.2-.1-.4-.2-.6L88 15.5c0-1.4.2-2.8.7-4.1.3-.6.4-1.3.3-2 0-.7-.4-1.3-.9-1.8-.6-.8-.9-2.8-.9-2.8s-2.1 3.5.2 9.8c-.4-.7-.9-1.4-1.5-2.1-.4-1-.5-2-.3-3.1.4-1.8.6-4.5-2.3-7.7.3 1.5-.4 4.2.2 6 .4 1.3.9 2.5 1.5 3.8-.5-.6-1.1-1.2-1.8-1.7-.3-1-.2-2.5-.8-4.9-.8-2.9-2.2-3.2-2.9-4.8-.4 3.3 1.1 6.7 2.5 8.6l-.4-.3-1.2-.9c-.4-1.8-1.3-3.5-2.5-5-.8-.9-2.8-1.3-3-2.2.3 3.3 2.4 5 4.1 6.3-.9-.5-1.9-.7-2.9-.6-1 0-2 .4-2.8 1 0 0 2.2 1.2 3.7 1 1.5-.2 2.1-.5 3-.2.3.3.7.6 1.1.9-2.2-.6-4.8 1.1-5.8 2.1 2 .9 3.5.2 4.3-.6.7-.7 1.7-.5 2.3-.9.7.6 1.4 1.1 2 1.8.7.7 1.3 1.5 1.9 2.3-1.4-1.2-3.7-2.6-6-2.1.3.9 1.8 2.5 3.5 3 1.4.4 2.7.4 3.6.8.6 1 1.1 2.1 1.5 3.2-2.2-3.1-6.4-3.7-7.4-3.6 0 0 2 .8 2.5 2.4.5 1.6 2.2 2 3.7 2.2.7 0 1.4.4 1.9 1 .5 1.4.8 2.9 1.1 4.4-2-6.4-6.5-5.4-6.5-5.4.6.3 1 .9 1.2 1.5.4 1.1.9 2 2.7 3.2 1.3.8 2.2 2 2.8 3.4 0 1.8-.3 3.5-.8 5.2.3-2.2.1-5.2-1.5-7.4.2 1.5-1.5 4.1-1 5.9.4 1.5 1.5 3.4 1.3 4.8l-.6 1.2c0-1-.5-2.3-.5-3.3-.3.9-.1 3-.2 4.4-.5.8-1 1.5-1.6 2.2 1.2-2.5 1.3-6 .2-9-1 1.5-2 4.5-1.7 6.5.2 1.5.1 2.9-.3 4.3l-.3.3c-.3.3-.7.6-1 .9 1.5-2.2 1.2-5.3.9-6.7-1.8 2-3.2 6-3 8.1-.4.2-.8.4-1.1.6-1.6.7-3.4 1.2-5.1.7v.8c1.9.5 3.8 0 5.5-.8.6-.3 1.2-.6 1.8-1 1.1 1.1 3.5 1.7 4.8 1.3 1.3-.4 2.6-1.5 3.6-1.4-1.7-1.7-4-1.8-5.2-1-1.1.7-1.9 1.1-2.7.8.8-.5 1.6-1.1 2.3-1.8l.3-.3c1.9.6 4 0 5.3-.9 1.4-.9 1.7-2.6 2.8-3.6-3.5 0-4.9 1.5-5.5 2.4-.5.7-1.2 1.3-2 1.5 1.1-1.1 2-2.3 2.9-3.5.9-.2 3-.1 4.1-1.6-1.5-.1-2.6 0-3.4.5l.6-1.2c1.1-.2 3.1 0 4.4-1.2 1.1-1.1 2.1-2.3 3-3.6 0 0-2.5.5-3.7 1.2 1.1-1 3.7-5.8 3.7-5.9ZM67.3 20.4zM67.2 20.8zM67.3 20.4zM67.3 20.4zM67.2 20.8zM68.4 33.8c.1-.7.3-1.4.4-2.3 1.1-6.1.4-11.8-2-17-2.9-6.2-9.3-12.9-18.3-13.1-9.1 0-15.6 6.4-18.7 12.6-2.6 5.1-3.4 10.8-2.4 17 .1.9.3 1.6.4 2.3 0 .5.1.9.3 1.4.1.6.3 1.2.4 1.7v.2c.1.5.3 1 .4 1.5.3 1 .5 1.5.8 1.9 0 .2.2.4.3.7l.3.9v.3c0 .3.1.5.2.8 0 1.4.7 2.2 1.5 3.3.9 1.1 1.6 1.3 2.9 1.5.9.1 1.4.2 3 .6l2 .4c2.3.8 4.6 1.3 7.9 1.3h.4c3.1 0 5.2-.4 7.5-1.1s1.9-.4 1.9-.4c1.6-.3 2.2-.4 3.1-.5 1.3-.2 2-.3 3-1.5.9-1 1.5-1.8 1.6-3.2.1-.3.2-.5.3-.8V42c0-.4.2-.7.3-.9.1-.3.2-.5.3-.7.3-.5.5-.9.8-1.9.1-.5.3-1 .4-1.5v-.2c.1-.5.3-1.1.4-1.7.2-.4.3-.9.3-1.4Zm-1-.2v.2c0 .3-.1.6-.2.9-.4 1.2-1.6 2.1-3.5 2.8.1-.3.2-.6.3-1 .4.1.9.2 1.4-.1.3-.2.4-.5.6-.8.1-.3.2-.6.3-1 .2-.7.3-1.7.6-2.8 0 .2 0 .4.2.6.1.2.3.2.5.3 0 .3-.1.7-.2 1ZM47.9 46.5c-7.3 0-13.6-1.7-16.1-4.1.1-.1.3-.3.6-.4 4.8 2.5 12.5 2.8 15.4 2.9h.7c3.3 0 10.4-.3 14.9-2.5.3.1.5.3.6.4-2.6 2.3-8.9 3.8-16.1 3.7ZM28.7 33.3v-.2c0-.3-.1-.6-.2-1 .4 0 .6-.4.7-.8.2.8.3 1.5.4 2 .2 1.4.4 2.2 1 2.6.3.2.6.3.8.3h.5c0 .3.1.7.2 1-1.9-.7-3-1.7-3.4-2.9 0-.3-.1-.6-.2-.9Zm1.8-18.5c.2-.2.4-.4.6-.5-.4.6-.9 1.3-1.2 2 .2-.5.4-.9.6-1.4Zm35.6.5c.2.5.4 1 .6 1.4-.4-.7-.8-1.4-1.2-2 .2.2.4.3.6.6ZM68 30.4h-.2c-.2 0-.5 0-.6.3.2-.9.4-1.5.5-1.9.2-.6.3-.8.5-.9 0 .9-.2 1.8-.3 2.8Zm-4.6 10.9h-.1c-.3-.1-.7-.2-1.1-.3 1.4-.4 2.6-.9 3.4-1.5-.5.7-1.3 1.3-2.3 1.8Zm-29.4.4c1.2-.2 2.5-.2 2.6-.2 3 .5 6.8.9 11.4.9h1.3c4.2 0 7.6-.3 10.4-.8 0 0 1.1.2 2.3.4-3.7 1.4-9.1 2-14 1.9-4.9 0-10.3-.7-13.9-2.2Zm-3.7-2.6c.9.6 2 1.2 3.4 1.6-.4 0-.8.1-1.1.2h-.1c-.9-.5-1.7-1.2-2.2-1.9Zm17.6 2.3c-10.6-.1-17.1-1.8-18.4-4.7 1.2.9 3 1.6 5.4 2.1 3.9.8 8.9.9 12.9.9h3.9c3.2 0 6.6-.1 9.5-.6 2.4-.4 4.2-1.1 5.4-2-1.4 2.9-8 4.4-18.6 4.2ZM33 35.3c0-.1 0-.3.4-.4.6-.1 1.1-.2 1.6-.2.6 0 1-.1 1.5-.3.4-.2.7 0 .7 0h.1v.8c0 .1-.1.3-.1.5v1c-.2.2-.2.2-1.1.2h-.3c-.7 0-1 .1-1.3.3-.2 0-.3.2-.6.2-.5 0-.7-1.3-.8-2.1Zm30.1.4Zm0 0Zm-4.1-1Zm-11 3.4v.5-.5s-.9 0-3.7-.4c.1-.1.2-.2.3-.4.4-.6 0-1.8 0-2 0-.1 0-.2-.2-.3 1 0 2.2 0 3.5.1h3.6s-.1.2-.2.3c0 .2-.5 1.4-.1 1.9.1.3.2.4.3.5-2.8.3-3.7.3-3.7.3Zm-7-2.6c.6.1 1.3.3 2.1.4h.3v.4h-.2c-.8-.1-2.3-.6-3.2-1.1.3 0 .7.1 1 .2Zm11.7 1v-.4h.3c.8 0 1.5-.2 2.1-.3.4 0 .7-.1 1-.2-.9.4-2.4.9-3.2 1h-.2Zm-16.8 1.4c.9 0 1.4 0 1.9-.6.2-.3.3-.6.3-.8 1.3.9 3.6 1.7 5.6 2.1-2.7 0-5.5-.3-8-.7h.2Zm22-1.1c0 .3 0 .6.3.8.5.6 1 .6 1.9.6h.2c-2.5.4-5.3.5-8 .5 2-.3 4.3-1.1 5.7-2Zm2.2.4c-.8 0-.9 0-1.1-.2-.1-.2 0-.4 0-.7V36c0-.2 0-.4-.1-.5s0-.1 0-.3v-.4h.7c.4.2.9.3 1.4.3.5 0 1 .1 1.7.3.3 0 .3.2.4.2v.1c-.1.8-.4 2.1-.8 2.1-.3 0-.4 0-.6-.2-.3-.2-.6-.3-1.3-.3h-.3Zm5.1-2.9v.4c-.3.3-.5.4-.5.4 0-.4-.4-1-1.6-1.3-.7-.2-1.3-.3-1.7-.3-.5 0-.8 0-1.1-.2-.6-.3-1.1-.2-1.4 0L58 33h-.2s-2.4.8-9.6.7c-7.3 0-9.5-.9-9.6-.9h-.2l-.9.2c-.3-.1-.8-.2-1.4 0-.3.1-.7.2-1.1.2-.5 0-1.1 0-1.8.3-1.1.3-1.5.9-1.6 1.3 0 0-.2 0-.5-.4 0-.3-.1-.7-.2-1.1-.1-.7-.3-1.5-.5-2.4-.1-.6-.3-1.1-.4-1.5-.4-1.6-.5-2.3-1.2-2.8-.4-.3-.2-1.3 0-2v-.2c.2-1.1.3-1.8.3-2.6 0-.7.2-1.4.2-1.4V20c0-.2-.1-.4-.2-.5.6 0 .6 0 .7.3v.4c0 .6.2 1.2.4 2.2.3 1.2.7 1.2 3.4 1.1h1c3.8-.2 6.2-.2 13.5 0 7.6 0 10.1.1 13.9.4.9 0 1.6.1 2.2.1h1.2c.3 0 .6-.2.8-.4.2-.2.2-.5.3-.7.3-1.1.4-1.9.5-2.5v-.2h.6v2.1c0 .8 0 1.5.2 2.6 0 .5.2 1 .2 1.5 0 .4-.1.6-.2.7-.5.3-.7.8-.9 1.4-.2.6-.4 1.5-.7 2.8-.4 1.3-.6 2.4-.7 3.2Zm-37-4.4c-.1-.9-.2-1.8-.2-2.8.4.3.5.7.8 2.2 0 .2.1.5.2.7 0 0 0-.1-.1-.1-.2-.1-.3-.2-.5-.2h-.2ZM52.5 6.2c-.4.7-.8 1.5-1.1 2.3-1-.2-1.9-.3-3-.3-1 0-2 0-3 .2-.3-.8-.7-1.6-1.1-2.3 1.3-.3 2.7-.5 4.1-.5 1.4 0 2.7.2 4.1.6Zm-4.3 3h.2c.9 0 1.8.1 2.6.2-.3.8-.6 1.7-.8 2.6h-3.6c-.2-.9-.5-1.7-.8-2.6.8-.1 1.6-.2 2.4-.2Zm17.5 11.4c-1.4-2-3.2-3.8-5.3-5.1.3-.3.6-.6.9-.8 1.9 1.8 3.4 3.9 4.4 5.8ZM49.9 13c-.2.7-.3 1.5-.5 2.2h-2.2c-.1-.8-.3-1.5-.4-2.2h3.1Zm-1.6 3.2h1c-.1.7-.2 1.4-.3 2.2h-1.4c0-.7-.1-1.5-.2-2.2h1Zm15.3 5.9c-1.4-1-3.1-1.9-5.3-2.5.1-.5.3-1 .5-1.5 2.1.9 3.8 2.3 5.2 4h-.4Zm-15.5-.5h-.4c0-.8 0-1.5-.1-2.3h1.2c0 .7-.1 1.5-.2 2.3H48Zm-8.6-.1c0-.5-.1-1-.2-1.4 1.2-.3 2.6-.4 4.3-.6.1.7.2 1.3.3 2.1h-4.3Zm-1 0h-3.7c1-.5 2.1-1 3.5-1.3 0 .4.1.8.2 1.2Zm6.3.1c0-.7-.2-1.4-.3-2.1h2c0 .7 0 1.5.1 2.2h-1.9Zm5.1-2.2c.7 0 1.4 0 2 .1l-.3 2.1h-1.9c0-.8.1-1.5.2-2.2Zm3 .2c1.6.2 3 .4 4.2.7 0 .5-.2.9-.2 1.4h-4.3c0-.7.2-1.4.3-2Zm5.2.9c1.3.4 2.5.9 3.5 1.4-.9 0-1.9-.1-3.1-.2h-.6c0-.4.1-.8.2-1.2Zm-.7-1.2c-1.2-.3-2.6-.5-4.3-.7.2-.7.3-1.4.5-2 1.6.2 3 .6 4.3 1.1-.2.5-
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 21: Contact
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `text-impact-lg-mona`
- **Size:** 762px height, width: 1068px
### HTML Structure

```html
<div data-anim-high="right, lime-off" split-text="lines" class="text-impact-lg-mona"><strong>Redefining</strong> limits, fighting for <strong>wins</strong>, bringing it all in all ways. Defining a <strong>legacy</strong> in Formula 1 on and off the track.</div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 22: Hero
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `horizontal-pin-wrap`
- **Size:** full viewport height, width: 1440px
- **Media:** 13 image(s)
- **Sticky elements:** 1
- **Animations:**
  - `div`.horizontal-track: transition: all
  - `div`.horizontal-pin-spacer: transition: all
  - `div`.horizontal-pin-sticky: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-spacer: transition: all

### Element Style Blueprint

- **`<div>`** .horizontal-track
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 5357.2px | padding: 77px 16.6667px 33.3333px 1080px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .horizontal-pin-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .horizontal-pin-sticky
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .horizontal-grid-col.large-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that"

- **`<div>`** .horizontal-item-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 720.266px | margin: 194.016px 0px 0px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-w.is-home-8
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 670.438px | margin: 22px 0px 0px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-grid-col.is-home-flip
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Monaco, 2023Britain, 20251"

- **`<div>`** .horizontal-grid-col.neg-margin
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020US, 2024"

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 322.297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 235.172px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 228.125px | opacity: 1
  - anim: all
  - text: "High Performance Gala, 2024"

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 349.25px | margin: 237.562px 0px 89.87px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<div>`** .horizontal-item-w.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 348.578px | margin: 164.12px 0px 0px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-w.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024"

- **`<div>`** .horizontal-item-w.is-home-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 322.297px | margin: 156.75px 0px 92.62px | opacity: 1
  - anim: all
  - text: "FIA Prize Giving, 2024"

- **`<div>`** .horizontal-item-w.is-home9
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 301.609px | margin: 128.375px 0px 33.3333px | opacity: 1
  - anim: all
  - text: "US, 2024"

- **`<div>`** .horizontal-item-w.is-home-6
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 235.172px | margin: 660.562px 0px 12.87px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

- **`<div>`** .horizontal-item-w.is-home-4
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 241.766px | opacity: 1
  - anim: all
  - text: "Monaco, 2023"

- **`<div>`** .horizontal-item-w.is-home-7
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 228.125px | margin: 88px 0px 648.562px | opacity: 1
  - anim: all
  - text: "High Performance Gala, 2024"

- **`<div>`** .horizontal-item-w.is-text-callout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 400px | margin: 144.844px 0px 29.37px | opacity: 1
  - anim: all
  - text: "Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come tru"

- **`<div>`** .horizontal-item-w.is-text-callout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 231.656px | margin: 18.37px 0px 0px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there."

### HTML Structure

```html
<div class="horizontal-pin-wrap"><div class="horizontal-pin-spacer"><div class="horizontal-pin-sticky"><div class="horizontal-track"><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-1"><div class="horizontal-item-layout is-home-1"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Qatar, 2024</div></div><div class="horizontal-item-img-w is-home-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp 649w" alt="Lando in casual clothes walking through paddock" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-home-2"><div class="horizontal-item-layout is-home-2"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">FIA Prize Giving, 2024</div></div><div class="horizontal-item-img-w is-home-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp 656w" alt="Lando lifting trophy in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col large-img is-home1"><div class="horizontal-item-w is-text-callout callout-1"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text">It doesn’t matter <span class="span-green-off-white-1">where</span> you start, it’s <span class="span-green-off-white-1">how</span> you progress from there.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="lazy" alt="Lando's signature in lime color" class="image"></div></div></div></div><div class="horizontal-item-w is-home3"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Miami GP, 2024</div></div><div class="horizontal-item-img-w is-home3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp 1464w" alt="Lando lifting tophy" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col is-home-flip neg-margin"><div class="horizontal-item-w is-home-4 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Monaco, 2023</div></div><div class="horizontal-item-img-w is-home-5"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp 529w" alt="Lando playing golf" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-5"><div class="horizontal-item-layout is-home-5"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Britain, 2025</div></div><div class="horizontal-item-img-w is-home-4"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp" loading="lazy" width="Auto" alt="Lando in f1 car" class="image is-horizontal-scroll"></div><div data-hide="m" class="horizontal-item-pill-w"><div class="horizontal-item-pill"><div class="horizontal-pill-box is-side"><div class="horizontal-pill-text">1</div></div><div class="horizontal-pill-box"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680cbcfdbc4bdc0ef619369f_ln-icon-crossed-flags2.svg" loading="lazy" alt="" class="horizontal-pill-icon"></div></div></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-6"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Battersea, 2024</div></div><div class="horizontal-item-img-w is-home-6"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp 642w" alt="Lando holding dog smiling" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-7"><div class="horizontal-item-layout is-home-7"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">High Performance Gala, 2024</div></div><div class="horizontal-item-img-w is-home-7"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp" loading="lazy" alt="Lando in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-8 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Barcelona, 2024</div></div><div class="horizontal-item-img-w is-home8"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp 1461w" alt="Lando taking photo out of a plane" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-text-callout is-home-callout-2"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text c-dark-green-tint-1">Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e7eeaf67d51519b546828d_ln4-signature-dark-green.webp" loading="lazy" alt="" class="image"></div></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col neg-margin"><div class="horizontal-item-w is-home10"><div class="horizontal-i
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 23: Hero
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `horizontal-pin-spacer`
- **Size:** full viewport height, width: 1440px
- **Media:** 13 image(s)
- **Sticky elements:** 1
- **Animations:**
  - `div`.horizontal-track: transition: all
  - `div`.horizontal-pin-sticky: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all

### Element Style Blueprint

- **`<div>`** .horizontal-track
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 5357.2px | padding: 77px 16.6667px 33.3333px 1080px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .horizontal-pin-sticky
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .horizontal-grid-col.large-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that"

- **`<div>`** .horizontal-item-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 720.266px | margin: 194.016px 0px 0px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-w.is-home-8
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 670.438px | margin: 22px 0px 0px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-grid-col.is-home-flip
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Monaco, 2023Britain, 20251"

- **`<div>`** .horizontal-grid-col.neg-margin
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020US, 2024"

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 322.297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 235.172px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 228.125px | opacity: 1
  - anim: all
  - text: "High Performance Gala, 2024"

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 349.25px | margin: 237.562px 0px 89.87px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<div>`** .horizontal-item-layout.is-home-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<div>`** .horizontal-item-w.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 348.578px | margin: 164.12px 0px 0px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-layout.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-w.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024"

- **`<div>`** .horizontal-item-layout.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024"

- **`<div>`** .horizontal-item-w.is-home-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 322.297px | margin: 156.75px 0px 92.62px | opacity: 1
  - anim: all
  - text: "FIA Prize Giving, 2024"

- **`<div>`** .horizontal-item-layout.is-home-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 322.297px | opacity: 1
  - anim: all
  - text: "FIA Prize Giving, 2024"

- **`<div>`** .horizontal-item-w.is-home9
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 301.609px | margin: 128.375px 0px 33.3333px | opacity: 1
  - anim: all
  - text: "US, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 301.609px | opacity: 1
  - anim: all
  - text: "US, 2024"

- **`<div>`** .horizontal-item-w.is-home-6
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 235.172px | margin: 660.562px 0px 12.87px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 235.172px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

### HTML Structure

```html
<div class="horizontal-pin-spacer"><div class="horizontal-pin-sticky"><div class="horizontal-track"><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-1"><div class="horizontal-item-layout is-home-1"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Qatar, 2024</div></div><div class="horizontal-item-img-w is-home-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp 649w" alt="Lando in casual clothes walking through paddock" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-home-2"><div class="horizontal-item-layout is-home-2"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">FIA Prize Giving, 2024</div></div><div class="horizontal-item-img-w is-home-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp 656w" alt="Lando lifting trophy in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col large-img is-home1"><div class="horizontal-item-w is-text-callout callout-1"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text">It doesn’t matter <span class="span-green-off-white-1">where</span> you start, it’s <span class="span-green-off-white-1">how</span> you progress from there.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="lazy" alt="Lando's signature in lime color" class="image"></div></div></div></div><div class="horizontal-item-w is-home3"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Miami GP, 2024</div></div><div class="horizontal-item-img-w is-home3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp 1464w" alt="Lando lifting tophy" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col is-home-flip neg-margin"><div class="horizontal-item-w is-home-4 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Monaco, 2023</div></div><div class="horizontal-item-img-w is-home-5"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp 529w" alt="Lando playing golf" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-5"><div class="horizontal-item-layout is-home-5"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Britain, 2025</div></div><div class="horizontal-item-img-w is-home-4"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp" loading="lazy" width="Auto" alt="Lando in f1 car" class="image is-horizontal-scroll"></div><div data-hide="m" class="horizontal-item-pill-w"><div class="horizontal-item-pill"><div class="horizontal-pill-box is-side"><div class="horizontal-pill-text">1</div></div><div class="horizontal-pill-box"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680cbcfdbc4bdc0ef619369f_ln-icon-crossed-flags2.svg" loading="lazy" alt="" class="horizontal-pill-icon"></div></div></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-6"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Battersea, 2024</div></div><div class="horizontal-item-img-w is-home-6"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp 642w" alt="Lando holding dog smiling" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-7"><div class="horizontal-item-layout is-home-7"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">High Performance Gala, 2024</div></div><div class="horizontal-item-img-w is-home-7"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp" loading="lazy" alt="Lando in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-8 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Barcelona, 2024</div></div><div class="horizontal-item-img-w is-home8"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp 1461w" alt="Lando taking photo out of a plane" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-text-callout is-home-callout-2"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text c-dark-green-tint-1">Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e7eeaf67d51519b546828d_ln4-signature-dark-green.webp" loading="lazy" alt="" class="image"></div></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col neg-margin"><div class="horizontal-item-w is-home10"><div class="horizontal-item-layout is-home10"><div class=
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 24: Hero
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `horizontal-pin-sticky`
- **Size:** full viewport height, width: 1440px
- **Media:** 13 image(s)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** normal
- **Justify:** normal
- **Animations:**
  - `div`.horizontal-track: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-img-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-img-w: transition: all
  - `div`.horizontal-grid-col: transition: all

### Element Style Blueprint

- **`<div>`** .horizontal-track
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 5357.2px | padding: 77px 16.6667px 33.3333px 1080px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024Monac"

- **`<div>`** .horizontal-grid-col.large-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that"

- **`<div>`** .horizontal-item-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 720.266px | margin: 194.016px 0px 0px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-img-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-home-8
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 670.438px | margin: 22px 0px 0px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-item-img-w.is-home8
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-col.is-home-flip
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Monaco, 2023Britain, 20251"

- **`<div>`** .horizontal-grid-col.neg-margin
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020US, 2024"

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 322.297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 235.172px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 228.125px | opacity: 1
  - anim: all
  - text: "High Performance Gala, 2024"

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 349.25px | margin: 237.562px 0px 89.87px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<div>`** .horizontal-item-layout.is-home-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<div>`** .horizontal-item-w.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 348.578px | margin: 164.12px 0px 0px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-layout.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-img-w.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024"

- **`<div>`** .horizontal-item-layout.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024"

- **`<div>`** .horizontal-item-w.is-home-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 322.297px | margin: 156.75px 0px 92.62px | opacity: 1
  - anim: all
  - text: "FIA Prize Giving, 2024"

- **`<div>`** .horizontal-item-layout.is-home-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 322.297px | opacity: 1
  - anim: all
  - text: "FIA Prize Giving, 2024"

- **`<div>`** .horizontal-item-img-w.is-home-4
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-img-w.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 297px | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="horizontal-pin-sticky"><div class="horizontal-track"><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-1"><div class="horizontal-item-layout is-home-1"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Qatar, 2024</div></div><div class="horizontal-item-img-w is-home-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp 649w" alt="Lando in casual clothes walking through paddock" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-home-2"><div class="horizontal-item-layout is-home-2"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">FIA Prize Giving, 2024</div></div><div class="horizontal-item-img-w is-home-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp 656w" alt="Lando lifting trophy in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col large-img is-home1"><div class="horizontal-item-w is-text-callout callout-1"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text">It doesn’t matter <span class="span-green-off-white-1">where</span> you start, it’s <span class="span-green-off-white-1">how</span> you progress from there.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="lazy" alt="Lando's signature in lime color" class="image"></div></div></div></div><div class="horizontal-item-w is-home3"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Miami GP, 2024</div></div><div class="horizontal-item-img-w is-home3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp 1464w" alt="Lando lifting tophy" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col is-home-flip neg-margin"><div class="horizontal-item-w is-home-4 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Monaco, 2023</div></div><div class="horizontal-item-img-w is-home-5"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp 529w" alt="Lando playing golf" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-5"><div class="horizontal-item-layout is-home-5"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Britain, 2025</div></div><div class="horizontal-item-img-w is-home-4"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp" loading="lazy" width="Auto" alt="Lando in f1 car" class="image is-horizontal-scroll"></div><div data-hide="m" class="horizontal-item-pill-w"><div class="horizontal-item-pill"><div class="horizontal-pill-box is-side"><div class="horizontal-pill-text">1</div></div><div class="horizontal-pill-box"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680cbcfdbc4bdc0ef619369f_ln-icon-crossed-flags2.svg" loading="lazy" alt="" class="horizontal-pill-icon"></div></div></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-6"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Battersea, 2024</div></div><div class="horizontal-item-img-w is-home-6"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp 642w" alt="Lando holding dog smiling" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-7"><div class="horizontal-item-layout is-home-7"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">High Performance Gala, 2024</div></div><div class="horizontal-item-img-w is-home-7"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp" loading="lazy" alt="Lando in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-8 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Barcelona, 2024</div></div><div class="horizontal-item-img-w is-home8"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp 1461w" alt="Lando taking photo out of a plane" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-text-callout is-home-callout-2"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text c-dark-green-tint-1">Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e7eeaf67d51519b546828d_ln4-signature-dark-green.webp" loading="lazy" alt="" class="image"></div></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col neg-margin"><div class="horizontal-item-w is-home10"><div class="horizontal-item-layout is-home10"><div class="eyebrow-w c-dark-green-tint-2"><di
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 25: Hero
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `horizontal-track`
- **Size:** full viewport height, width: 5357.2px
- **Padding:** 77px 16.6667px 33.3333px 1080px
- **Media:** 13 image(s)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** normal
- **Justify:** normal
- **Animations:**
  - `div`.horizontal-grid-col: transition: all
  - `div`.horizontal-grid-col: transition: all
  - `img`.image: transition: all
  - `img`.image: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-img-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-img-w: transition: all

### Element Style Blueprint

- **`<div>`** .horizontal-grid-col.large-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there.Miami GP, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that"

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 773.594px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 723.766px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp

- **`<div>`** .horizontal-item-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 720.266px | margin: 194.016px 0px 0px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-img-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-home-8
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 670.438px | margin: 22px 0px 0px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all
  - text: "Barcelona, 2024"

- **`<div>`** .horizontal-item-img-w.is-home8
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 670.438px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-col.is-home-flip
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Monaco, 2023Britain, 20251"

- **`<div>`** .horizontal-grid-col.neg-margin
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020US, 2024"

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 346.609px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 322.297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024FIA Prize Giving, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 235.172px | opacity: 1
  - anim: all
  - text: "Battersea, 2024"

- **`<div>`** .horizontal-grid-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 228.125px | opacity: 1
  - anim: all
  - text: "High Performance Gala, 2024"

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-grid-spacer.half
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 173.297px | opacity: 1
  - anim: all

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 401.906px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babb87c5f19ec131093_ln-home-horiz-9.webp

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 402.578px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 350.328px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp

- **`<div>`** .horizontal-item-w.is-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 349.25px | margin: 237.562px 0px 89.87px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<div>`** .horizontal-item-layout.is-home-5
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 349.25px | opacity: 1
  - anim: all
  - text: "Britain, 20251"

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 375.625px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp

- **`<div>`** .horizontal-item-w.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 348.578px | margin: 164.12px 0px 0px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-layout.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all
  - text: "austria, 2020"

- **`<div>`** .horizontal-item-img-w.is-home10
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 348.578px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-home-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 297px | opacity: 1
  - anim: all
  - text: "Qatar, 2024"

### HTML Structure

```html
<div class="horizontal-track"><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-1"><div class="horizontal-item-layout is-home-1"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Qatar, 2024</div></div><div class="horizontal-item-img-w is-home-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp 649w" alt="Lando in casual clothes walking through paddock" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-home-2"><div class="horizontal-item-layout is-home-2"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">FIA Prize Giving, 2024</div></div><div class="horizontal-item-img-w is-home-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp 656w" alt="Lando lifting trophy in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col large-img is-home1"><div class="horizontal-item-w is-text-callout callout-1"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text">It doesn’t matter <span class="span-green-off-white-1">where</span> you start, it’s <span class="span-green-off-white-1">how</span> you progress from there.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="lazy" alt="Lando's signature in lime color" class="image"></div></div></div></div><div class="horizontal-item-w is-home3"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Miami GP, 2024</div></div><div class="horizontal-item-img-w is-home3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp 1464w" alt="Lando lifting tophy" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col is-home-flip neg-margin"><div class="horizontal-item-w is-home-4 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Monaco, 2023</div></div><div class="horizontal-item-img-w is-home-5"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp 529w" alt="Lando playing golf" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-5"><div class="horizontal-item-layout is-home-5"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Britain, 2025</div></div><div class="horizontal-item-img-w is-home-4"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp" loading="lazy" width="Auto" alt="Lando in f1 car" class="image is-horizontal-scroll"></div><div data-hide="m" class="horizontal-item-pill-w"><div class="horizontal-item-pill"><div class="horizontal-pill-box is-side"><div class="horizontal-pill-text">1</div></div><div class="horizontal-pill-box"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680cbcfdbc4bdc0ef619369f_ln-icon-crossed-flags2.svg" loading="lazy" alt="" class="horizontal-pill-icon"></div></div></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-6"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Battersea, 2024</div></div><div class="horizontal-item-img-w is-home-6"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp 642w" alt="Lando holding dog smiling" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-7"><div class="horizontal-item-layout is-home-7"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">High Performance Gala, 2024</div></div><div class="horizontal-item-img-w is-home-7"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp" loading="lazy" alt="Lando in tux" class="image is-horizontal-scroll"></div></div></div></div><div class="horizontal-grid-spacer half"></div><div class="horizontal-grid-col"><div class="horizontal-item-w is-home-8 neg-margin"><div class="horizontal-item-layout"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-eyebrow">Barcelona, 2024</div></div><div class="horizontal-item-img-w is-home8"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp 1461w" alt="Lando taking photo out of a plane" class="image is-horizontal-scroll"></div></div></div><div class="horizontal-item-w is-text-callout is-home-callout-2"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text c-dark-green-tint-1">Since I was 7 years old and had my first experience with kart racing, I’ve worked tirelessly to make that dream come true.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e7eeaf67d51519b546828d_ln4-signature-dark-green.webp" loading="lazy" alt="" class="image"></div></div></div></div></div><div class="horizontal-grid-spacer"></div><div class="horizontal-grid-col neg-margin"><div class="horizontal-item-w is-home10"><div class="horizontal-item-layout is-home10"><div class="eyebrow-w c-dark-green-tint-2"><div split-text="lines" class="text-ey
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 26: Process
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `horizontal-grid-col large-img is-home1`
- **Size:** full viewport height, width: 720.266px
- **Media:** 2 image(s)
- **Flex:** direction: column, wrap: nowrap, gap: normal
- **Align items:** flex-start
- **Justify:** flex-start
- **Animations:**
  - `img`.image: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-img-w: transition: all
  - `div`.horizontal-item-w: transition: all
  - `div`.horizontal-item-layout: transition: all
  - `div`.horizontal-item-text-layout: transition: all
  - `div`.horizontal-item-text: transition: all
  - `div`.eyebrow-w: transition: all
  - `div`.horizontal-rive-placeholder: transition: all

### Element Style Blueprint

- **`<img>`** .image.is-horizontal-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 773.594px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp

- **`<div>`** .horizontal-item-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 720.266px | margin: 194.016px 0px 0px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-item-img-w.is-home3
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 720.266px | opacity: 1
  - anim: all

- **`<div>`** .horizontal-item-w.is-text-callout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 231.656px | margin: 18.37px 0px 0px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there."

- **`<div>`** .horizontal-item-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 231.656px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there."

- **`<div>`** .horizontal-item-text-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 231.656px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there."

- **`<div>`** .horizontal-item-text
  - font: 20px 400 Brier, Arial, sans-serif | color: rgb(180, 184, 165) | lh: 18.8px | ls: 0.666667px | text-align: start | border: 0px none rgb(180, 184, 165) | display: block | width: 231.656px | opacity: 1
  - anim: all
  - text: "It doesn’t matter where you start, it’s how you progress from there."

- **`<div>`** .eyebrow-w.c-green-off-white-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(180, 184, 165) | lh: 20px | text-align: start | border: 0px none rgb(180, 184, 165) | display: flex | width: 720.266px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

- **`<div>`** .horizontal-rive-placeholder
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 55px | opacity: 1
  - anim: all

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 55px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg

- **`<span>`** .span-green-off-white-1
  - font: 20px 400 Brier, Arial, sans-serif | color: rgb(221, 225, 210) | lh: 18.8px | ls: 0.666667px | text-align: start | border: 0px none rgb(221, 225, 210) | display: inline | opacity: 1
  - anim: all
  - text: "where"

- **`<span>`** .span-green-off-white-1
  - font: 20px 400 Brier, Arial, sans-serif | color: rgb(221, 225, 210) | lh: 18.8px | ls: 0.666667px | text-align: start | border: 0px none rgb(221, 225, 210) | display: inline | opacity: 1
  - anim: all
  - text: "how"

- **`<div>`** .text-eyebrow
  - font: 8.33333px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(180, 184, 165) | lh: 8.33333px | text-transform: uppercase | text-align: start | border: 0px none rgb(180, 184, 165) | display: block | width: 60.5px | opacity: 1
  - anim: all
  - text: "Miami GP, 2024"

### HTML Structure

```html
<div class="horizontal-grid-col large-img is-home1"><div class="horizontal-item-w is-text-callout callout-1"><div class="horizontal-item-layout"><div class="horizontal-item-text-layout"><div split-text="lines" class="horizontal-item-text">It doesn’t matter <span class="span-green-off-white-1">where</span> you start, it’s <span class="span-green-off-white-1">how</span> you progress from there.</div><div class="horizontal-rive-placeholder"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67cecea4e9d311047dcb51e5_ln4-hw-signature2.svg" loading="lazy" alt="Lando's signature in lime color" class="image"></div></div></div></div><div class="horizontal-item-w is-home3"><div class="horizontal-item-layout"><div class="eyebrow-w c-green-off-white-2"><div split-text="lines" class="text-eyebrow">Miami GP, 2024</div></div><div class="horizontal-item-img-w is-home3"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3.webp 1464w" alt="Lando lifting tophy" class="image is-horizontal-scroll"></div></div></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 27: Proof
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `sticky-track is-home-otot`
- **Size:** full viewport height, width: 1440px
- **Headings:** H2: "ON"; H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- **Media:** 3 image(s), 3 canvas(es)
- **Sticky elements:** 1
- **Animations:**
  - `img`.image: transition: all
  - `div`.sticky-item: transition: all
  - `div`.otot-home-end-img-w: transition: all
  - `div`.c: transition: all
  - `div`.otot-home-bg: transition: all
  - `div`.otot-home-inner: transition: all
  - `div`.otot-home-img-w: transition: all
  - `div`.otot-home-img-w: transition: all
  - `div`.otot-home-layout: transition: all

### Element Style Blueprint

- **`<img>`** .image.is-otot-home-end
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302ff5ff89a9a4afb8c19e_ln-home-helm-large.webp

- **`<div>`** .sticky-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .otot-home-end-img-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .c.is-otot-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .otot-home-bg
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .otot-home-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .otot-home-img-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 451.422px | opacity: 1
  - anim: all

- **`<div>`** .otot-home-img-w.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 419.25px | opacity: 1
  - anim: all

- **`<div>`** .otot-home-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 669.906px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

### HTML Structure

```html
<div data-otot-section="" class="sticky-track is-home-otot"><div class="sticky-item"><section data-otot-top="" data-designmode-white="" class="s is-otot-home"><div class="c is-otot-home"><div class="otot-home-inner"><div class="otot-home-layout"><div class="otot-home-text-col is-1"><div class="otot-home-text-w"><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">ON<br></h2><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2><div class="otot-home-text-rive w-embed"><canvas data-rive-object="" data-rive-file="phrases" data-rive-artboard="phrase_on" data-rive-state-machine="phrase_on" data-rive-fit="contain" data-rive-scrolltrigger="true" data-rive-scrolltrigger-start="top center">
</canvas></div></div><div class="otot-home-p-w"><p split-text="lines" data-anim-high="right, dark-green-tint-1, 200" class="text-body-reg-mona">Most recent <strong>results</strong>, career stats and photos from trackside.</p></div><div class="btn-auto-top"><a title="On Track page" data-btn-rive-rotate="true" data-btn-rive-hover="" href="/on-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div><div class="otot-home-text-col is-2"><div class="otot-home-text-w"><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">OFF<br></h2><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2></div><div class="otot-home-p-w is-2"><p split-text="lines" data-anim-high="left, dark-green-tint-1, 200" class="text-body-reg-mona"><strong>Campaigns</strong>, shoots and other such promotional materials for fans</p></div><div><a title="Off Track Page" data-btn-rive-rotate="false" data-btn-rive-hover="" href="/off-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div></div><div class="otot-home-bg"><div class="otot-home-img-w is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp 834w" alt="Lando Norris wearing a lime helmet, side profile" class="otot-home-img is-helmet"></div><div class="otot-home-img-w is-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp 898w" alt="Lando Norris wearing a fleece side profile" class="otot-home-img"></div></div></div></section></div><section data-otot-bottom="" class="s is-otot-end"><div class="otot-home-end-img-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302ff5ff89a9a4afb8c19e_ln-home-helm-large.webp" loading="lazy" alt="Lando lifting helmet up" class="image is-otot-home-end"></div></section></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 28: Proof
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `sticky-item`
- **Size:** full viewport height, width: 1440px
- **Headings:** H2: "ON"; H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- **Media:** 2 image(s), 3 canvas(es)
- **Animations:**
  - `div`.c: transition: all
  - `div`.otot-home-bg: transition: all
  - `div`.otot-home-inner: transition: all
  - `div`.otot-home-img-w: transition: all
  - `img`.otot-home-img: transition: all
  - `div`.otot-home-img-w: transition: all
  - `img`.otot-home-img: transition: all
  - `div`.otot-home-layout: transition: all
  - `div`.otot-home-text-col: transition: all
  - `div`.otot-home-text-col: transition: all

### Element Style Blueprint

- **`<div>`** .c.is-otot-home
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | padding: 0px 16.6667px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .otot-home-bg
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 1440px | opacity: 1
  - anim: all

- **`<div>`** .otot-home-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .otot-home-img-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 451.422px | opacity: 1
  - anim: all

- **`<img>`** .otot-home-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 451.422px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp

- **`<div>`** .otot-home-img-w.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 419.25px | opacity: 1
  - anim: all

- **`<img>`** .otot-home-img.is-helmet
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 419.25px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp

- **`<div>`** .otot-home-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 669.906px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .otot-home-text-col.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: flex | width: 309.953px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside."

- **`<div>`** .otot-home-text-col.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: flex | width: 309.953px | opacity: 1
  - anim: all
  - text: "OFFTRACKCampaigns, shoots and other such promotional materials for fans"

### HTML Structure

```html
<div class="sticky-item"><section data-otot-top="" data-designmode-white="" class="s is-otot-home"><div class="c is-otot-home"><div class="otot-home-inner"><div class="otot-home-layout"><div class="otot-home-text-col is-1"><div class="otot-home-text-w"><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">ON<br></h2><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2><div class="otot-home-text-rive w-embed"><canvas data-rive-object="" data-rive-file="phrases" data-rive-artboard="phrase_on" data-rive-state-machine="phrase_on" data-rive-fit="contain" data-rive-scrolltrigger="true" data-rive-scrolltrigger-start="top center">
</canvas></div></div><div class="otot-home-p-w"><p split-text="lines" data-anim-high="right, dark-green-tint-1, 200" class="text-body-reg-mona">Most recent <strong>results</strong>, career stats and photos from trackside.</p></div><div class="btn-auto-top"><a title="On Track page" data-btn-rive-rotate="true" data-btn-rive-hover="" href="/on-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div><div class="otot-home-text-col is-2"><div class="otot-home-text-w"><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">OFF<br></h2><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2></div><div class="otot-home-p-w is-2"><p split-text="lines" data-anim-high="left, dark-green-tint-1, 200" class="text-body-reg-mona"><strong>Campaigns</strong>, shoots and other such promotional materials for fans</p></div><div><a title="Off Track Page" data-btn-rive-rotate="false" data-btn-rive-hover="" href="/off-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div></div><div class="otot-home-bg"><div class="otot-home-img-w is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp 834w" alt="Lando Norris wearing a lime helmet, side profile" class="otot-home-img is-helmet"></div><div class="otot-home-img-w is-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp 898w" alt="Lando Norris wearing a fleece side profile" class="otot-home-img"></div></div></div></section></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 29: Proof
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `otot-home-inner`
- **Size:** full viewport height, width: 1406.69px
- **Headings:** H2: "ON"; H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- **Media:** 3 canvas(es)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** center
- **Justify:** center
- **Animations:**
  - `div`.otot-home-layout: transition: all
  - `div`.otot-home-text-col: transition: all
  - `div`.otot-home-text-col: transition: all
  - `div`.otot-home-text-w: transition: all
  - `div`.otot-home-text-w: transition: all
  - `div`.otot-home-text-rive: transition: all
  - `canvas`: transition: all
  - `h2`.text-impact-reg-mona: transition: all
  - `h2`.text-impact-reg-mona: transition: all
  - `h2`.text-impact-reg-brier: transition: all

### Element Style Blueprint

- **`<div>`** .otot-home-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 669.906px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside. OFFTRACKCampaigns, shoots and other such promotiona"

- **`<div>`** .otot-home-text-col.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: flex | width: 309.953px | opacity: 1
  - anim: all
  - text: "ONTRACK Most recent results, career stats and photos from trackside."

- **`<div>`** .otot-home-text-col.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: flex | width: 309.953px | opacity: 1
  - anim: all
  - text: "OFFTRACKCampaigns, shoots and other such promotional materials for fans"

- **`<div>`** .otot-home-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 309.953px | opacity: 1
  - anim: all
  - text: "ONTRACK"

- **`<div>`** .otot-home-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 309.953px | opacity: 1
  - anim: all
  - text: "OFFTRACK"

- **`<div>`** .otot-home-text-rive.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 212.547px | opacity: 1
  - anim: all

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: inline-block | width: 212.547px | opacity: 1
  - anim: all

- **`<h2>`** .text-impact-reg-mona.line-increase
  - font: 93.3333px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 79.3333px | ls: -3.33333px | text-transform: uppercase | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 309.953px | opacity: 1
  - anim: all
  - text: "TRACK"

- **`<h2>`** .text-impact-reg-mona.line-increase
  - font: 93.3333px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 79.3333px | ls: -3.33333px | text-transform: uppercase | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 309.953px | opacity: 1
  - anim: all
  - text: "TRACK"

- **`<h2>`** .text-impact-reg-brier
  - font: 97.5px 700 Brier, Arial, sans-serif | color: rgb(40, 44, 32) | lh: 78.975px | ls: -2.91667px | text-transform: uppercase | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 309.953px | opacity: 1
  - anim: all

- **`<h2>`** .text-impact-reg-brier
  - font: 97.5px 700 Brier, Arial, sans-serif | color: rgb(40, 44, 32) | lh: 78.975px | ls: -2.91667px | text-transform: uppercase | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 309.953px | opacity: 1
  - anim: all
  - text: "OFF"

- **`<div>`** .otot-home-p-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: flex | width: 280px | margin: 16.6667px 0px 0px | opacity: 1
  - anim: all
  - text: "Most recent results, career stats and photos from trackside."

- **`<div>`** .otot-home-p-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: flex | width: 280px | margin: 16.6667px 0px 0px | opacity: 1
  - anim: all
  - text: "Campaigns, shoots and other such promotional materials for fans"

- **`<p>`** .text-body-reg-mona
  - font: 16.6667px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20.8333px | ls: -0.166667px | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 280px | opacity: 1
  - anim: all
  - text: "Most recent results, career stats and photos from trackside."

- **`<p>`** .text-body-reg-mona
  - font: 16.6667px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20.8333px | ls: -0.166667px | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 280px | opacity: 1
  - anim: all
  - text: "Campaigns, shoots and other such promotional materials for fans"

- **`<div>`** .btn-auto-top
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: block | width: 50px | opacity: 1
  - anim: all

- **`<div>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: block | width: 50px | opacity: 1
  - anim: all

- **`<a>`** .btn-w.icon-only
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 50px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: https://landonorris.com/on-track

- **`<a>`** .btn-w.icon-only
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 50px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: https://landonorris.com/off-track

- **`<div>`** .btn-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: right | border: 0px none rgb(40, 44, 32) | display: flex | width: 16px | opacity: 1
  - anim: all

- **`<div>`** .btn-inner
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: left | border: 0px none rgb(40, 44, 32) | display: flex | width: 16px | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="otot-home-inner"><div class="otot-home-layout"><div class="otot-home-text-col is-1"><div class="otot-home-text-w"><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">ON<br></h2><h2 data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2><div class="otot-home-text-rive w-embed"><canvas data-rive-object="" data-rive-file="phrases" data-rive-artboard="phrase_on" data-rive-state-machine="phrase_on" data-rive-fit="contain" data-rive-scrolltrigger="true" data-rive-scrolltrigger-start="top center">
</canvas></div></div><div class="otot-home-p-w"><p split-text="lines" data-anim-high="right, dark-green-tint-1, 200" class="text-body-reg-mona">Most recent <strong>results</strong>, career stats and photos from trackside.</p></div><div class="btn-auto-top"><a title="On Track page" data-btn-rive-rotate="true" data-btn-rive-hover="" href="/on-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div><div class="otot-home-text-col is-2"><div class="otot-home-text-w"><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-brier">OFF<br></h2><h2 data-anim-high="left, dark-green-tint-1" split-text="lines" class="text-impact-reg-mona line-increase">TRACK</h2></div><div class="otot-home-p-w is-2"><p split-text="lines" data-anim-high="left, dark-green-tint-1, 200" class="text-body-reg-mona"><strong>Campaigns</strong>, shoots and other such promotional materials for fans</p></div><div><a title="Off Track Page" data-btn-rive-rotate="false" data-btn-rive-hover="" href="/off-track" class="btn-w icon-only w-inline-block"><div class="btn-inner"><div class="btn-icon-w"><div class="btn-rive-w is-large w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 30: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `otot-home-bg`
- **Size:** full viewport height, width: 1440px
- **Media:** 2 image(s)
- **Animations:**
  - `div`.otot-home-img-w: transition: all
  - `img`.otot-home-img: transition: all
  - `div`.otot-home-img-w: transition: all
  - `img`.otot-home-img: transition: all

### Element Style Blueprint

- **`<div>`** .otot-home-img-w.is-2
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 451.422px | opacity: 1
  - anim: all

- **`<img>`** .otot-home-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 451.422px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp

- **`<div>`** .otot-home-img-w.is-1
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 419.25px | opacity: 1
  - anim: all

- **`<img>`** .otot-home-img.is-helmet
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 419.25px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp

### HTML Structure

```html
<div class="otot-home-bg"><div class="otot-home-img-w is-1"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp 834w" alt="Lando Norris wearing a lime helmet, side profile" class="otot-home-img is-helmet"></div><div class="otot-home-img-w is-2"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp 898w" alt="Lando Norris wearing a fleece side profile" class="otot-home-img"></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 31: Team
- **Confidence:** 20%
- **Tag:** div
- **Classes:** `s-group bg-black`
- **Size:** full viewport height, width: 1440px
- **Background color:** rgb(17, 17, 18)
- **Headings:** H2: "Helmets"; H2: "Hall of Fame"; H3: "Season"; H3: "Discoball"; H3: "Dark Glitter"; H3: "Season"; H3: "Porcelain"; H3: "Japan"; H3: "GIF"; H3: "Dark Mode"; H3: "Race"; H3: "Las Vegas"; H3: "Chrome"; H3: "Beachball"; H3: "Basketball"; H3: "Season"; H3: "Silverstone"; H3: "Season"
- **CTAs:** view on track
- **Media:** 64 image(s), 2 canvas(es), 65 SVG(s)
- **Animations:**
  - `div`.c: transition: all
  - `div`.w-dyn-list: transition: all
  - `div`.helmet-grid: transition: all
  - `div`.c: transition: all
  - `div`.spacer: transition: all
  - `div`.title-layout: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all

### Element Style Blueprint

- **`<div>`** .c.home-helmets
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1440px | padding: 33.3333px 16.6667px 16.6667px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing"

- **`<div>`** .w-dyn-list
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas202"

- **`<div>`** .helmet-grid.w-dyn-items
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas202"

- **`<div>`** .c.is-callout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1440px | padding: 160px 16.6667px 116.667px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the trackview on track"

- **`<div>`** .spacer._8-75rem
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .title-layout.grid-main
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "HelmetsHall of FameFrom his iconic blobs to innovative one-off designs, Lando has always been passionate about designing"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2021"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2019"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Season2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Dark Glitter2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Porcelain2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "GIF2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Race2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Chrome2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Basketball2022"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: all
  - text: "Silverstone2020"

- **`<div>`** .callout-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 433.328px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the trackview on track"

- **`<div>`** .title-headline-w.flex #w-node-_5d5ac04e-626f-e2bd-ba2c-8a1157b2eda4-0b17a7eb
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 679.188px | opacity: 1
  - anim: all
  - text: "HelmetsHall of Fame"

- **`<div>`** .title-para-w.c-grey-on-track #w-node-_8734ac60-bf7c-ac47-bf21-501caa438859-0b17a7eb
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(185, 187, 173) | lh: 20px | text-align: start | border: 0px none rgb(185, 187, 173) | display: block | width: 331.266px | opacity: 1
  - anim: all
  - text: "From his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and mem"

- **`<p>`** .text-body-reg-mona
  - font: 16.6667px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(185, 187, 173) | lh: 20.8333px | ls: -0.166667px | text-align: start | border: 0px none rgb(185, 187, 173) | display: block | width: 331.266px | opacity: 1
  - anim: all
  - text: "From his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and mem"

- **`<h2>`** .text-title-lg-mona
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 440.641px | opacity: 1
  - anim: all
  - text: "Hall of Fame"

- **`<div>`** .callout-text-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 433.328px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the track"

- **`<div>`** .text-cta-short-intro.font-brier
  - font: 26.6667px 400 Brier, Arial, sans-serif | color: rgb(244, 244, 237) | lh: 27.7333px | ls: 0.666667px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 433.328px | opacity: 1
  - anim: all
  - text: "See more helmets and highlights from Lando on the track"

- **`<h2>`** .text-title-lg-mona
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 275.016px | opacity: 1
  - anim: all
  - text: "Helmets"

### HTML Structure

```html
<div data-nav-theme-target="light" class="s-group bg-black"><section class="s home-helmets"><div class="c home-helmets"><div class="title-layout grid-main"><div id="w-node-_5d5ac04e-626f-e2bd-ba2c-8a1157b2eda4-0b17a7eb" class="title-headline-w flex"><h2 data-anim-high="" split-text="lines" class="text-title-lg-mona">Helmets<br></h2><h2 data-anim-high="" split-text="lines" class="text-title-lg-mona"><span class="text-title-lg-brier c-lime-off">Hall of Fame</span></h2></div><div id="w-node-_8734ac60-bf7c-ac47-bf21-501caa438859-0b17a7eb" class="title-para-w c-grey-on-track"><p data-anim-high="right, lime, 200" split-text="lines" class="text-body-reg-mona">From his iconic blobs to innovative one-off designs, Lando has always been passionate about designing innovative and memorable helmets.</p></div></div><div class="spacer _8-75rem m-6rem"></div><div class="w-dyn-list"><div data-helmet-grid="" role="list" class="helmet-grid w-dyn-items"><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp 823w" class="helmet-grid-item-reveal-img"></div></div><div class="helmet-grid-item-text-w"><h3 class="text-title-small-label text">Season</h3><div class="helmet-grid-item-date-w"><div class="text-title-small-label date">2025</div></div><div class="helmet-grid-extender"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png 669w" alt="" class="helmet-grid-extender-img"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png 669w" alt="" class="helmet-grid-extender-img is-overlay"></div></div></div></div><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 32: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `w-dyn-list`
- **Size:** full viewport height, width: 1406.69px
- **Headings:** H3: "Season"; H3: "Discoball"; H3: "Dark Glitter"; H3: "Season"; H3: "Porcelain"; H3: "Japan"; H3: "GIF"; H3: "Dark Mode"; H3: "Race"; H3: "Las Vegas"; H3: "Chrome"; H3: "Beachball"; H3: "Basketball"; H3: "Season"; H3: "Silverstone"; H3: "Season"
- **Media:** 64 image(s), 64 SVG(s)
- **Animations:**
  - `div`.helmet-grid: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all
  - `div`.helmet-grid-item-w: transition: all

### Element Style Blueprint

- **`<div>`** .helmet-grid.w-dyn-items
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: grid | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Season2025 Discoball2025 Dark Glitter2025 Season2024 Porcelain2024 Japan2024 GIF2024 Dark Mode2024 Race2023 Las Vegas202"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2021"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2019"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2021"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2019"

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-frame-w.destop
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item-img-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-frame-w.destop
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-item-img-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

- **`<div>`** .helmet-grid-frame-w.destop
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 339.188px | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="w-dyn-list"><div data-helmet-grid="" role="list" class="helmet-grid w-dyn-items"><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp 823w" class="helmet-grid-item-reveal-img"></div></div><div class="helmet-grid-item-text-w"><h3 class="text-title-small-label text">Season</h3><div class="helmet-grid-item-date-w"><div class="text-title-small-label date">2025</div></div><div class="helmet-grid-extender"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png 669w" alt="" class="helmet-grid-extender-img"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png 669w" alt="" class="helmet-grid-extender-img is-overlay"></div></div></div></div><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp 823w" class="helmet-grid-item-reveal-img"></div></div><div class="helmet-grid-item-text-w"><h3 class="text-title-small-label text">Discoball</h3><div class="helmet-grid-item-date-w"><div class="text-title-small-label date">2025</div></div><div class="helmet-grid-extender"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 33: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `helmet-grid w-dyn-items`
- **Size:** full viewport height, width: 1406.69px
- **Headings:** H3: "Season"; H3: "Discoball"; H3: "Dark Glitter"; H3: "Season"; H3: "Porcelain"; H3: "Japan"; H3: "GIF"; H3: "Dark Mode"; H3: "Race"; H3: "Las Vegas"; H3: "Chrome"; H3: "Beachball"; H3: "Basketball"; H3: "Season"; H3: "Silverstone"; H3: "Season"
- **Media:** 64 image(s), 64 SVG(s)
- **Grid:** 339.172px 339.188px 339.172px 339.188px / 342.609px 342.609px 342.609px 342.609px, gap: 16.6667px
- **Align items:** normal
- **Justify:** normal
- **Animations:**
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)
  - `img`.helmet-grid-item-reveal-img: transition: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1); transform: matrix(1.05, 0, 0, 1.05, 0, 0)

### Element Style Blueprint

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305af56183c37dfd14ff3f_In-helm-2024-Season-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305a9b1716264ea006064b_In-helm-2024-Japan-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305a5cdaa389d0c080afc7_In-helm-2024-DarkMode-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305a3053985f797745cdfc_In-helm-2023-Las%20Vegas-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/683053fb6e004f8218de7f11_In-helm-2023-Beach%20Ball-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b57817f019bc368a7b6_ln-helm-2021-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/6830513c652a87f862917de3_In-helm-2019-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b03644c91f0a8de407b_In-helm-2025-DarkGlitter-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305ad3a594ec37bd1d32cb_In-helm-2024-Porcelain-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305a8e13a9b59a5e99cafe_In-helm-2024-GIF%20Helmet-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305a47417d51c0a58c28a6_In-helm-2023-Race%20100-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305a175a720573cbd3000f_In-helm-2023-Chrome-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/683052ab1073a33331767d2a_In-helm-2022-Basketball-hover.webp

- **`<img>`** .helmet-grid-item-reveal-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.172px | opacity: 1
  - anim: clip-path 0.75s cubic-bezier(0.65, 0.05, 0, 1), transform 0.75s cubic-bezier(0.65, 0.05, 0, 1) | matrix(1.05, 0, 0, 1.05, 0, 0)
  - src: https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305223cddca8f1ea359a7a_In-helm-2020-Silverstone-hover.webp

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2021"

- **`<div>`** .helmet-grid-item-w.w-dyn-item
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2019"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Discoball2025"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Season2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Japan2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Dark Mode2024"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Las Vegas2023"

- **`<div>`** .helmet-grid-item-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 339.188px | opacity: 1
  - anim: all
  - text: "Beachball2023"

### HTML Structure

```html
<div data-helmet-grid="" role="list" class="helmet-grid w-dyn-items"><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp 823w" class="helmet-grid-item-reveal-img"></div></div><div class="helmet-grid-item-text-w"><h3 class="text-title-small-label text">Season</h3><div class="helmet-grid-item-date-w"><div class="text-title-small-label date">2025</div></div><div class="helmet-grid-extender"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png 669w" alt="" class="helmet-grid-extender-img"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade-p-500.png 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41235ad69136bdc861b67_ln4-2-helm-mask-extender-lime-fade.png 669w" alt="" class="helmet-grid-extender-img is-overlay"></div></div></div></div><div role="listitem" class="helmet-grid-item-w w-dyn-item"><div class="helmet-grid-item-w"><div data-helmet-item="" class="helmet-grid-item"><div class="helmet-grid-frame-w destop"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1h390.89a7 7 0 0 1 7 7v356.983a7 7 0 0 1-7 7H263.329a23.999 23.999 0 0 0-18.766 9.038l-16.499 20.694A21.999 21.999 0 0 1 210.862 410H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z" stroke="var(--color--lime)" stroke-width="2"></path>
</svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 407 411" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 .5h390.89a7.5 7.5 0 0 1 7.5 7.5v356.983a7.5 7.5 0 0 1-7.5 7.5H263.329a23.502 23.502 0 0 0-18.375 8.849l-16.499 20.695a22.502 22.502 0 0 1-17.593 8.473H8A7.5 7.5 0 0 1 .5 403V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
</svg></div></div><div class="helmet-grid-frame-w mobile"><div class="helmet-grid-frame is-overlay w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="var(--color--lime)" stroke-width="2"></path></svg></div><div class="helmet-grid-frame is-base w-embed"><svg width="100%" height="100%" viewBox="0 0 187 188" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5h170.12a7.5 7.5 0 0 1 7.5 7.5v154.61a7.5 7.5 0 0 1-7.5 7.5H60.681a10.5 10.5 0 0 0-8.21 3.954l-7.86 9.858a9.5 9.5 0 0 1-7.427 3.578H8A7.5 7.5 0 0 1 .5 180V8A7.5 7.5 0 0 1 8 .5Z" stroke="currentColor" stroke-width="1"></path></svg></div></div><div class="helmet-grid-item-img-w"><div class="helmet-grid-item-img-helmet-w"><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp 823w" class="helmet-grid-item-img-helmet"></div><img src="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp" loading="lazy" alt="" sizes="100vw" srcset="https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover-p-500.webp 500w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover-p-800.webp 800w, https://cdn.prod.website-files.com/67d97a68478fe87e30c67abe/68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp 823w" class="helmet-grid-item-reveal-img"></div></div><div class="helmet-grid-item-text-w"><h3 class="text-title-small-label text">Discoball</h3><div class="helmet-grid-item-date-w"><div class="text-title-small-label date">2025</div></div><div class="helmet-grid-extender"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade.png" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67e41c00f127bc68e2462635_ln4-2-helm-mask-extender-grey-fade-p-500.png 500w, htt
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 34: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `callout-socials-inner`
- **Size:** 857px height, width: 1406.69px
- **Headings:** H2: "what’s upOn Socials"
- **CTAs:** tiktok, instagram, Youtube, Twitch
- **Media:** 7 image(s), 1 canvas(es)
- **Flex:** direction: row, wrap: nowrap, gap: normal
- **Align items:** center
- **Justify:** center
- **Animations:**
  - `div`.callout-socials-layout: transition: all
  - `div`.callout-socials-card-layout: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.video-stream: transition: all

### Element Style Blueprint

- **`<div>`** .callout-socials-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "what’s upOn SocialsFollow Lando on social mediatiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-card-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 1066.66px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp

- **`<h2>`** .text-title-lg-mona.split-flex
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 356.703px | opacity: 1
  - anim: all
  - text: "what’s upOn Socials"

- **`<span>`** .span-font-brier
  - font: 60px 700 Brier, Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 356.703px | opacity: 1
  - anim: all
  - text: "On Socials"

- **`<span>`**
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 317.203px | opacity: 1
  - anim: all
  - text: "what’s up"

- **`<div>`** .callout-socials-intro-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 369.906px | margin: 50px 0px 0px | opacity: 1
  - anim: all
  - text: "Follow Lando on social media"

- **`<div>`** .text-cta-short-intro.font-brier
  - font: 26.6667px 400 Brier, Arial, sans-serif | color: rgb(17, 17, 18) | lh: 27.7333px | ls: 0.666667px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 369.906px | opacity: 1
  - anim: all
  - text: "Follow Lando on social media"

- **`<div>`** .callout-socials-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 352.812px | opacity: 1
  - anim: all
  - text: "tiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 46.6562px | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="callout-socials-inner"><div class="callout-socials-layout"><div class="callout-socials-rive-w"><div class="callout-icon icon-ball w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="off-icons" data-rive-state-machine="off-icons" data-rive-input="color_green-off-white-2" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-oval-scroll="" split-text="lines" class="text-title-lg-mona split-flex is-center"><span>what’s up</span><span class="span-font-brier">On Socials</span></h2><div data-social-callout="wrap" class="callout-socials-card-layout"><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp 638w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp 637w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp 1080w" class="image is-social-card"></div></div></div><div class="callout-socials-intro-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-cta-short-intro font-brier">Follow Lando on social media</div></div><div class="callout-socials-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">Twitch</div></div></a></div></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 35: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `callout-socials-layout`
- **Size:** 857px height, width: 1406.69px
- **Headings:** H2: "what’s upOn Socials"
- **CTAs:** tiktok, instagram, Youtube, Twitch
- **Media:** 7 image(s), 1 canvas(es)
- **Flex:** direction: column, wrap: nowrap, gap: 33.3333px
- **Align items:** center
- **Justify:** flex-start
- **Animations:**
  - `div`.callout-socials-card-layout: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.callout-socials-card-w: transition: all
  - `div`.video-stream: transition: all
  - `div`.video-stream: transition: all

### Element Style Blueprint

- **`<div>`** .callout-socials-card-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 1066.66px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .callout-socials-card-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | radius: 44.2167px | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<div>`** .video-stream
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | bg: rgb(0, 0, 0) | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp

- **`<img>`** .image.is-social-card
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 266.656px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp

- **`<h2>`** .text-title-lg-mona.split-flex
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 356.703px | opacity: 1
  - anim: all
  - text: "what’s upOn Socials"

- **`<span>`** .span-font-brier
  - font: 60px 700 Brier, Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 356.703px | opacity: 1
  - anim: all
  - text: "On Socials"

- **`<span>`**
  - font: 60px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 53.16px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 317.203px | opacity: 1
  - anim: all
  - text: "what’s up"

- **`<div>`** .callout-socials-intro-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 369.906px | margin: 50px 0px 0px | opacity: 1
  - anim: all
  - text: "Follow Lando on social media"

- **`<div>`** .text-cta-short-intro.font-brier
  - font: 26.6667px 400 Brier, Arial, sans-serif | color: rgb(17, 17, 18) | lh: 27.7333px | ls: 0.666667px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 369.906px | opacity: 1
  - anim: all
  - text: "Follow Lando on social media"

- **`<div>`** .callout-socials-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: flex | width: 352.812px | opacity: 1
  - anim: all
  - text: "tiktokinstagramYoutubeTwitch"

- **`<div>`** .callout-socials-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(17, 17, 18) | lh: 20px | text-align: center | border: 0px none rgb(17, 17, 18) | display: block | width: 46.6562px | opacity: 1
  - anim: all

- **`<div>`** .callout-icon.icon-ball
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: center | border: 0px none rgb(210, 255, 0) | display: flex | width: 46.6562px | opacity: 1
  - anim: all

### HTML Structure

```html
<div class="callout-socials-layout"><div class="callout-socials-rive-w"><div class="callout-icon icon-ball w-embed"><canvas data-rive-object="" data-rive-file="reef" data-rive-artboard="off-icons" data-rive-state-machine="off-icons" data-rive-input="color_green-off-white-2" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-oval-scroll="" split-text="lines" class="text-title-lg-mona split-flex is-center"><span>what’s up</span><span class="span-font-brier">On Socials</span></h2><div data-social-callout="wrap" class="callout-socials-card-layout"><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba846e593e52541fb7a8_Lando-6-on-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302d42237886d0c4b24c_ln-social-img-2.webp 638w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8463e72a95c2d8a0ba_Lando-4-off-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba848fb98d1ca68eb6c8_Lando-5-off-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba8449f0506fbaad037b_Lano-5-on-track.webp 1080w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/6830302dadd0727e6ac034dd_ln-social-img-6.webp 637w" class="image is-social-card"></div></div><div data-video-stream-wrap="" class="callout-socials-card-w"><div data-stream-hover="true" data-video-stream="" data-stream-url="824804225" data-stream-muted="true" data-stream-loop="true" data-stream-autoplay="true" class="video-stream"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp" loading="lazy" data-video-stream-placeholder="" alt="" sizes="(max-width: 767px) 100vw, 637.9948120117188px" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68d3ba83f162f4d2f4e78442_Lando-6-off-track.webp 1080w" class="image is-social-card"></div></div></div><div class="callout-socials-intro-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines" class="text-cta-short-intro font-brier">Follow Lando on social media</div></div><div class="callout-socials-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text">Twitch</div></div></a></div></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 36: Footer
- **Confidence:** 40%
- **Tag:** div
- **Classes:** `footer-layout-w`
- **Size:** 747px height, width: 1406.69px
- **Headings:** H2: "Always bringing the fight."
- **CTAs:** Home, On Track, Off Track, Partnerships, Calendar
- **Media:** 10 image(s), 2 canvas(es), 8 SVG(s)
- **Animations:**
  - `div`.footer-layout-clip: transition: all
  - `div`.footer-inner-layout: transition: all
  - `div`.footer-bg-pattern-w: transition: all
  - `img`.image: transition: all
  - `div`.footer-bg-helmet-w: transition: all
  - `div`.footer-bg-helmet-layout: transition: all
  - `img`.footer-bg-img: transition: all
  - `div`.footer-statement-w: transition: all
  - `div`.footer-links-w: transition: all
  - `div`.footer-statement-layout: transition: all

### Element Style Blueprint

- **`<div>`** .footer-layout-clip
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | bg: rgb(40, 44, 32) | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the figh"

- **`<div>`** .footer-inner-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the figh"

- **`<div>`** .footer-bg-pattern-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 0.12
  - anim: all

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 1406.69px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dbeba158707fa1cd5e5e45_blobs_footer_1.svg

- **`<div>`** .footer-bg-helmet-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<div>`** .footer-bg-helmet-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 650px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<img>`** .footer-bg-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 650px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp

- **`<div>`** .footer-statement-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .footer-links-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | padding: 0px 170.667px | margin: 385.047px 0px 186.667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<div>`** .footer-statement-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 640px | margin: 0px 383.344px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<h2>`** .text-impact-sm-mona.footer
  - font: 70px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 59.92px | ls: -0.0625px | text-transform: uppercase | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 640px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .footer-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-row
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .footer-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 167.281px | opacity: 1
  - anim: all
  - text: "Follow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<div>`** .footer-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 159.281px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStore"

- **`<div>`** .footer-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 174.156px | opacity: 1
  - anim: all

- **`<div>`** .footer-legal-links-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris. All rights reservedPrivacy PolicyTerms"

- **`<div>`** .footer-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 167.281px | margin: 13.3333px 0px 26.6667px | opacity: 1
  - anim: all
  - text: "TiktokInstagramYoutubeTwitch"

- **`<div>`** .footer-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 159.281px | margin: 13.3333px 0px 26.6667px | opacity: 1
  - anim: all
  - text: "HomeOn TrackOff TrackPartnershipsCalendar"

- **`<div>`** .footer-bg-bottom-btn-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 216.297px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<div>`** .footer-legal-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 205.344px | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris. All rights reserved"

- **`<div>`** .text-title-small-label
  - font: 10px 600 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 12.5px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 205.344px | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris. All rights reserved"

- **`<div>`** .footer-legal-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: flex | width: 194.156px | opacity: 1
  - anim: all
  - text: "Privacy PolicyTerms"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 125.656px | opacity: 1
  - anim: all
  - href: https://landonorris.com/legal/privacy-policy
  - text: "Privacy Policy"

- **`<div>`** .text-clip-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 125.656px | opacity: 1
  - anim: all
  - text: "Privacy Policy"

- **`<div>`** .btn-text
  - font: 13.3333px 800 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 13.3333px | text-transform: uppercase | text-align: start | border: 0px none rgb(40, 44, 32) | display: block | width: 125.656px | opacity: 1
  - anim: all
  - text: "Privacy Policy"

- **`<span>`** .text-title-small-label.bold
  - font: 10px 800 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 12.5px | text-align: start | border: 0px none rgb(40, 44, 32) | display: inline | opacity: 1
  - anim: all
  - text: "© 2026 Lando Norris."

- **`<a>`** .text-link-w.c-lime
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: start | border: 0px none rgb(210, 255, 0) | display: block | width: 77.75px | opacity: 0
  - anim: all
  - href: https://landonorris.com/#
  - text: "Sign Up"

- **`<a>`** .text-link-w.c-lime
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(210, 255, 0) | lh: 20px | text-align: start | border: 0px none rgb(210, 255, 0) | display: block | width: 62.375px | opacity: 1
  - anim: all
  - href: https://store.landonorris.com/
  - text: "Store"

### HTML Structure

```html
<div class="footer-layout-w"><div data-nav-theme-target="light" class="footer-layout-clip"><div class="footer-inner-layout"><div class="footer-links-w"><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">pages</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="/" aria-current="page" class="text-link-w w-inline-block w--current"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Home</div></div></a><a data-anim="text-hover" href="/on-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">On Track</div></div></a><a data-anim="text-hover" href="/off-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Off Track</div></div></a><a data-anim="text-hover" href="/partnerships" class="text-link-w display-none w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Partnerships</div></div></a><a data-anim="text-hover" href="/calendar" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Calendar</div></div></a></div><a data-anim="text-hover" href="https://store.landonorris.com/" target="_blank" class="text-link-w c-lime w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Store</div></div></a></div><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">Follow On</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Twitch</div></div></a></div><a data-signup-trigger="" data-anim="text-hover" href="#" class="text-link-w c-lime is-hidden w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Sign&nbsp;Up</div></div></a></div></div><div class="footer-statement-w"><div class="footer-statement-layout"><div class="footer-rive-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d443bc774ddcd37b3d8d4d_ln4-footer-rive-placeholder.svg" loading="lazy" data-rive-placeholder="" alt="" class="image is-footer-rive"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_play" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-anim-high="right,lime-off" split-text="lines" class="text-impact-sm-mona footer">Always <span class="text-impact-sm-brier c-lime-off">bringing</span> the <span class="text-impact-sm-brier c-lime-off">fight</span>.</h2></div></div><div class="footer-bg-helmet-w"><div class="footer-bg-helmet-layout"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp 1560w" alt="" class="footer-bg-img"><div class="footer-bg-bottom-btn-w"><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="mailto:business@landonorris.com" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">business enquiries</div></div><div class="btn-icon-w"><div class="btn-rive-w w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div><div aria-hidden="true" class="footer-marquee"><div data-marquee-duplicate="3" data-marquee-scroll-direction-target="" data-marquee-direction="left" data-marquee-status="normal" data-marquee-speed="30" data-marquee-scroll-speed="5" class="marquee-adv-row"><div data-marquee-scroll-target="" class="marquee-adv-scroll"><div data-marquee-collection-target="" class="marquee-adv-collection"><div class="marquee-adv-item"><div class="footer-marquee-item"><div class="footer-marquee-logo-w"><div class="footer-marquee-svg w-embed"><svg width="100%" height="100%" viewBox="0 0 97 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m2.04 15.998 2.249 8.218 2.354-8.218h3.045l2.355 8.188 2.249-8.188h2.026l-2.881 9.748h-2.745l-2.519-8.338-2.52 8.338H2.895L0 15.998h2.04ZM16.377 20.843c0-2.937 1.725-4.993 5.339-4.993 3.164 0 5.039 1.814 5.039 5.008v.48h-8.248c.134 1.65 1.094 2.79 3.224 2.79 1.724 0 2.46-.78 2.64-1.515l.03-.088h2.25l-.015.09c-.285 1.8-1.89 3.284-4.934 3.284-3.6 0-5.324-2.054-5.324-5.039l-.001-.017Zm8.263-.99-.015-.03c-.223-1.41-1.287-2.204-2.999-2.204-1.785 0-2.73.885-3.03 2.235h6.044ZM35.317 24.263c-1.005 1.11-2.444 1.634-4.184 1.634-2.01 0-3.494-.704-3.494-2.505 0-1.859 1.44-2.653 3.584-2.879l2.294-.24c1.575-.165 2.685-.3 2.837-1.14l-.016.152.016-.104c.195-1.064-.6-1.605-2.325-1.605-1.814 0-2.849.557-3.15 2.127l-.03.138h-2.042l.03-.136c.495-2.43 2.16-3.853 5.339-3.853 3.284 0 4.604 1.454 4.11 3.778l-1.304 6.117h-1.98l.315-1.484Zm-3.734.136c2.026 0 3.854-.93 4.439-3.36v-.029l.045-.21c-.42.524-1.335.81-2.49.915l-1.934.223c-1.5.152-1.934.63-1.934 1.29 0 .766.674 1.17 1.874 1.17ZM42.26 17.544c.75-1.05 1.874-1.694 3.315-1.694 2.31 0 3.569 1.92 2.85 4.544l-.18.615H46.16l.165-.615c.42-1.485.045-2.79-1.605-2.79-1.694 0-2.64 1.14-3 2.505l-1.199 5.638h-2.04L40.55 16h2.04l-.33 1.545ZM54.933 15.85c3.674 0 5.115 2.219 4.589 5.053l-.076.435h-8.082c-.03 1.695 1.14 2.79 3.09 2.79 1.409 0 2.338-.585 2.698-1.44l.09-.165h2.055l-.06.18c-.615 1.83-2.145 3.194-4.92 3.194-3.568 0-5.563-2.431-4.873-5.804.45-2.009 2.085-4.243 5.489-4.243Zm2.654 3.973v-.06c.075-1.334-.9-2.144-2.564-2.144-1.98 0-2.938 1.14-3.36 2.204h5.924ZM69.18 24.367c-.525.72-1.605 1.53-3.434 1.53-3.075 0-4.95-2.127-4.95-5.008v-.03c0-2.91 1.935-5.01 4.905-5.01 1.829 0 2.954.825 3.479 1.53V16h2.025v9.703c0 2.325-.855 3.647-3.539 3.647h-6.33v-1.76h6.06c1.484 0 1.784-.644 1.784-2.127v-1.095Zm-3.147-.24c2.114 0 3.15-1.439 3.15-3.224v-.06c0-1.784-1.02-3.224-3.15-3.224-2.19 0-3.15 1.5-3.15 3.242v.03c-.002 1.722.972 3.237 3.15 3.237ZM74.7 17.754c.45-1.035 1.71-1.904 3.314-1.904 1.92 0 3.45 1.02 3.45 3.748v1.095h-2.1v-1.034c0-1.29-.54-2.055-1.95-2.055-2.04 0-2.714 
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 37: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `footer-layout-clip`
- **Size:** 747px height, width: 1406.69px
- **Background color:** rgb(40, 44, 32)
- **Headings:** H2: "Always bringing the fight."
- **CTAs:** Home, On Track, Off Track, Partnerships, Calendar
- **Media:** 10 image(s), 2 canvas(es), 8 SVG(s)
- **Animations:**
  - `div`.footer-inner-layout: transition: all
  - `div`.footer-bg-pattern-w: transition: all
  - `img`.image: transition: all
  - `div`.footer-bg-helmet-w: transition: all
  - `div`.footer-bg-helmet-layout: transition: all
  - `img`.footer-bg-img: transition: all
  - `div`.footer-statement-w: transition: all
  - `div`.footer-links-w: transition: all
  - `div`.footer-statement-layout: transition: all
  - `h2`.text-impact-sm-mona: transition: all

### Element Style Blueprint

- **`<div>`** .footer-inner-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up Always bringing the figh"

- **`<div>`** .footer-bg-pattern-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 0.12
  - anim: all

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 1406.69px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dbeba158707fa1cd5e5e45_blobs_footer_1.svg

- **`<div>`** .footer-bg-helmet-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<div>`** .footer-bg-helmet-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 650px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<img>`** .footer-bg-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 650px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp

- **`<div>`** .footer-statement-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .footer-links-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | padding: 0px 170.667px | margin: 385.047px 0px 186.667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<div>`** .footer-statement-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 640px | margin: 0px 383.344px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<h2>`** .text-impact-sm-mona.footer
  - font: 70px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 59.92px | ls: -0.0625px | text-transform: uppercase | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 640px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .footer-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-row
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-collection
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1172.34px | opacity: 1
  - anim: all

- **`<div>`** .footer-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 167.281px | opacity: 1
  - anim: all
  - text: "Follow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<span>`** .text-impact-sm-brier.c-lime-off
  - font: 72.5px 700 Brier, Arial, sans-serif | color: rgb(178, 199, 58) | lh: 62.06px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(178, 199, 58) | display: inline | opacity: 1
  - anim: all
  - text: "bringing"

- **`<div>`** .footer-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 159.281px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStore"

- **`<div>`** .footer-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 174.156px | opacity: 1
  - anim: all

- **`<div>`** .marquee-gl-rive-w.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 174.156px | opacity: 1
  - anim: all

- **`<div>`** .footer-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 167.281px | margin: 13.3333px 0px 26.6667px | opacity: 1
  - anim: all
  - text: "TiktokInstagramYoutubeTwitch"

- **`<div>`** .footer-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 159.281px | margin: 13.3333px 0px 26.6667px | opacity: 1
  - anim: all
  - text: "HomeOn TrackOff TrackPartnershipsCalendar"

- **`<span>`** .text-impact-sm-brier.c-lime-off
  - font: 72.5px 700 Brier, Arial, sans-serif | color: rgb(178, 199, 58) | lh: 62.06px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(178, 199, 58) | display: inline | opacity: 1
  - anim: all
  - text: "fight"

- **`<div>`** .footer-bg-bottom-btn-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 216.297px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<a>`** .btn-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 216.297px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: mailto:business@landonorris.com
  - text: "business enquiries"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 167.281px | opacity: 1
  - anim: all
  - href: https://www.instagram.com/lando
  - text: "Instagram"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 159.281px | opacity: 1
  - anim: all
  - href: https://landonorris.com/off-track
  - text: "Off Track"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 151.719px | opacity: 1
  - anim: all
  - href: https://landonorris.com/calendar
  - text: "Calendar"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 146.766px | opacity: 1
  - anim: all
  - href: https://landonorris.com/on-track
  - text: "On Track"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 135.984px | opacity: 1
  - anim: all
  - href: https://www.youtube.com/@LandoNorris
  - text: "Youtube"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 110.266px | opacity: 1
  - anim: all
  - href: https://www.twitch.tv/landonorris
  - text: "Twitch"

### HTML Structure

```html
<div data-nav-theme-target="light" class="footer-layout-clip"><div class="footer-inner-layout"><div class="footer-links-w"><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">pages</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="/" aria-current="page" class="text-link-w w-inline-block w--current"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Home</div></div></a><a data-anim="text-hover" href="/on-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">On Track</div></div></a><a data-anim="text-hover" href="/off-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Off Track</div></div></a><a data-anim="text-hover" href="/partnerships" class="text-link-w display-none w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Partnerships</div></div></a><a data-anim="text-hover" href="/calendar" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Calendar</div></div></a></div><a data-anim="text-hover" href="https://store.landonorris.com/" target="_blank" class="text-link-w c-lime w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Store</div></div></a></div><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">Follow On</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Twitch</div></div></a></div><a data-signup-trigger="" data-anim="text-hover" href="#" class="text-link-w c-lime is-hidden w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Sign&nbsp;Up</div></div></a></div></div><div class="footer-statement-w"><div class="footer-statement-layout"><div class="footer-rive-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d443bc774ddcd37b3d8d4d_ln4-footer-rive-placeholder.svg" loading="lazy" data-rive-placeholder="" alt="" class="image is-footer-rive"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_play" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-anim-high="right,lime-off" split-text="lines" class="text-impact-sm-mona footer">Always <span class="text-impact-sm-brier c-lime-off">bringing</span> the <span class="text-impact-sm-brier c-lime-off">fight</span>.</h2></div></div><div class="footer-bg-helmet-w"><div class="footer-bg-helmet-layout"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp 1560w" alt="" class="footer-bg-img"><div class="footer-bg-bottom-btn-w"><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="mailto:business@landonorris.com" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">business enquiries</div></div><div class="btn-icon-w"><div class="btn-rive-w w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div><div aria-hidden="true" class="footer-marquee"><div data-marquee-duplicate="3" data-marquee-scroll-direction-target="" data-marquee-direction="left" data-marquee-status="normal" data-marquee-speed="30" data-marquee-scroll-speed="5" class="marquee-adv-row"><div data-marquee-scroll-target="" class="marquee-adv-scroll"><div data-marquee-collection-target="" class="marquee-adv-collection"><div class="marquee-adv-item"><div class="footer-marquee-item"><div class="footer-marquee-logo-w"><div class="footer-marquee-svg w-embed"><svg width="100%" height="100%" viewBox="0 0 97 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m2.04 15.998 2.249 8.218 2.354-8.218h3.045l2.355 8.188 2.249-8.188h2.026l-2.881 9.748h-2.745l-2.519-8.338-2.52 8.338H2.895L0 15.998h2.04ZM16.377 20.843c0-2.937 1.725-4.993 5.339-4.993 3.164 0 5.039 1.814 5.039 5.008v.48h-8.248c.134 1.65 1.094 2.79 3.224 2.79 1.724 0 2.46-.78 2.64-1.515l.03-.088h2.25l-.015.09c-.285 1.8-1.89 3.284-4.934 3.284-3.6 0-5.324-2.054-5.324-5.039l-.001-.017Zm8.263-.99-.015-.03c-.223-1.41-1.287-2.204-2.999-2.204-1.785 0-2.73.885-3.03 2.235h6.044ZM35.317 24.263c-1.005 1.11-2.444 1.634-4.184 1.634-2.01 0-3.494-.704-3.494-2.505 0-1.859 1.44-2.653 3.584-2.879l2.294-.24c1.575-.165 2.685-.3 2.837-1.14l-.016.152.016-.104c.195-1.064-.6-1.605-2.325-1.605-1.814 0-2.849.557-3.15 2.127l-.03.138h-2.042l.03-.136c.495-2.43 2.16-3.853 5.339-3.853 3.284 0 4.604 1.454 4.11 3.778l-1.304 6.117h-1.98l.315-1.484Zm-3.734.136c2.026 0 3.854-.93 4.439-3.36v-.029l.045-.21c-.42.524-1.335.81-2.49.915l-1.934.223c-1.5.152-1.934.63-1.934 1.29 0 .766.674 1.17 1.874 1.17ZM42.26 17.544c.75-1.05 1.874-1.694 3.315-1.694 2.31 0 3.569 1.92 2.85 4.544l-.18.615H46.16l.165-.615c.42-1.485.045-2.79-1.605-2.79-1.694 0-2.64 1.14-3 2.505l-1.199 5.638h-2.04L40.55 16h2.04l-.33 1.545ZM54.933 15.85c3.674 0 5.115 2.219 4.589 5.053l-.076.435h-8.082c-.03 1.695 1.14 2.79 3.09 2.79 1.409 0 2.338-.585 2.698-1.44l.09-.165h2.055l-.06.18c-.615 1.83-2.145 3.194-4.92 3.194-3.568 0-5.563-2.431-4.873-5.804.45-2.009 2.085-4.243 5.489-4.243Zm2.654 3.973v-.06c.075-1.334-.9-2.144-2.564-2.144-1.98 0-2.938 1.14-3.36 2.204h5.924ZM69.18 24.367c-.525.72-1.605 1.53-3.434 1.53-3.075 0-4.95-2.127-4.95-5.008v-.03c0-2.91 1.935-5.01 4.905-5.01 1.829 0 2.954.825 3.479 1.53V16h2.025v9.703c0 2.325-.855 3.647-3.539 3.647h-6.33v-1.76h6.06c1.484 0 1.784-.644 1.784-2.127v-1.095Zm-3.147-.24c2.114 0 3.15-1.439 3.15-3.224v-.06c0-1.784-1.02-3.224-3.15-3.224-2.19 0-3.15 1.5-3.15 3.242v.03c-.002 1.722.972 3.237 3.15 3.237ZM74.7 17.754c.45-1.035 1.71-1.904 3.314-1.904 1.92 0 3.45 1.02 3.45 3.748v1.095h-2.1v-1.034c0-1.29-.54-2.055-1.95-2.055-2.04 0-2.714 1.5-2.714 2.595v5.548h-2.04V1
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 38: Hero
- **Confidence:** 15%
- **Tag:** div
- **Classes:** `footer-inner-layout`
- **Size:** 747px height, width: 1406.69px
- **Headings:** H2: "Always bringing the fight."
- **CTAs:** Home, On Track, Off Track, Partnerships, Calendar
- **Media:** 10 image(s), 2 canvas(es), 8 SVG(s)
- **Flex:** direction: column, wrap: nowrap, gap: normal
- **Align items:** normal
- **Justify:** normal
- **Animations:**
  - `div`.footer-bg-pattern-w: transition: all
  - `img`.image: transition: all
  - `div`.footer-bg-helmet-w: transition: all
  - `div`.footer-bg-helmet-layout: transition: all
  - `img`.footer-bg-img: transition: all
  - `div`.footer-statement-w: transition: all
  - `div`.footer-links-w: transition: all
  - `div`.footer-statement-layout: transition: all
  - `h2`.text-impact-sm-mona: transition: all
  - `div`.footer-marquee: transition: all

### Element Style Blueprint

- **`<div>`** .footer-bg-pattern-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 0.12
  - anim: all

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 1406.69px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dbeba158707fa1cd5e5e45_blobs_footer_1.svg

- **`<div>`** .footer-bg-helmet-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<div>`** .footer-bg-helmet-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 650px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<img>`** .footer-bg-img
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 650px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp

- **`<div>`** .footer-statement-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .footer-links-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | padding: 0px 170.667px | margin: 385.047px 0px 186.667px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStoreFollow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<div>`** .footer-statement-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: flex | width: 640px | margin: 0px 383.344px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<h2>`** .text-impact-sm-mona.footer
  - font: 70px 700 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 59.92px | ls: -0.0625px | text-transform: uppercase | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 640px | opacity: 1
  - anim: all
  - text: "Always bringing the fight."

- **`<div>`** .footer-marquee
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-row
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-scroll
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1406.69px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-collection
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1172.34px | opacity: 1
  - anim: all

- **`<div>`** .marquee-adv-item
  - font: 115.2px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 1172.34px | opacity: 1
  - anim: all

- **`<div>`** .footer-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 167.281px | opacity: 1
  - anim: all
  - text: "Follow OnTiktokInstagramYoutubeTwitchSign Up"

- **`<span>`** .text-impact-sm-brier.c-lime-off
  - font: 72.5px 700 Brier, Arial, sans-serif | color: rgb(178, 199, 58) | lh: 62.06px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(178, 199, 58) | display: inline | opacity: 1
  - anim: all
  - text: "bringing"

- **`<div>`** .footer-links-col
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 159.281px | opacity: 1
  - anim: all
  - text: "pagesHomeOn TrackOff TrackPartnershipsCalendarStore"

- **`<div>`** .footer-rive-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 174.156px | opacity: 1
  - anim: all

- **`<div>`** .marquee-gl-rive-w.w-embed
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: block | width: 174.156px | opacity: 1
  - anim: all

- **`<canvas>`**
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: center | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 174.156px | opacity: 1
  - anim: all

- **`<div>`** .footer-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 167.281px | margin: 13.3333px 0px 26.6667px | opacity: 1
  - anim: all
  - text: "TiktokInstagramYoutubeTwitch"

- **`<div>`** .footer-links-layout
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: flex | width: 159.281px | margin: 13.3333px 0px 26.6667px | opacity: 1
  - anim: all
  - text: "HomeOn TrackOff TrackPartnershipsCalendar"

- **`<span>`** .text-impact-sm-brier.c-lime-off
  - font: 72.5px 700 Brier, Arial, sans-serif | color: rgb(178, 199, 58) | lh: 62.06px | ls: -1.66667px | text-transform: uppercase | text-align: center | border: 0px none rgb(178, 199, 58) | display: inline | opacity: 1
  - anim: all
  - text: "fight"

- **`<div>`** .footer-bg-bottom-btn-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 216.297px | opacity: 1
  - anim: all
  - text: "business enquiries"

- **`<a>`** .btn-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(40, 44, 32) | lh: 20px | text-align: start | bg: rgb(210, 255, 0) | radius: 7.2px | border: 1px solid rgb(210, 255, 0) | display: flex | width: 216.297px | padding: 0px 13.3333px | opacity: 1
  - anim: all
  - href: mailto:business@landonorris.com
  - text: "business enquiries"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 167.281px | opacity: 1
  - anim: all
  - href: https://www.instagram.com/lando
  - text: "Instagram"

- **`<div>`** .text-clip-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 167.281px | opacity: 1
  - anim: all
  - text: "Instagram"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 159.281px | opacity: 1
  - anim: all
  - href: https://landonorris.com/off-track
  - text: "Off Track"

- **`<div>`** .text-clip-w
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 159.281px | opacity: 1
  - anim: all
  - text: "Off Track"

- **`<a>`** .text-link-w.w-inline-block
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: block | width: 151.719px | opacity: 1
  - anim: all
  - href: https://landonorris.com/calendar
  - text: "Calendar"

### HTML Structure

```html
<div class="footer-inner-layout"><div class="footer-links-w"><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">pages</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="/" aria-current="page" class="text-link-w w-inline-block w--current"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Home</div></div></a><a data-anim="text-hover" href="/on-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">On Track</div></div></a><a data-anim="text-hover" href="/off-track" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Off Track</div></div></a><a data-anim="text-hover" href="/partnerships" class="text-link-w display-none w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Partnerships</div></div></a><a data-anim="text-hover" href="/calendar" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Calendar</div></div></a></div><a data-anim="text-hover" href="https://store.landonorris.com/" target="_blank" class="text-link-w c-lime w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Store</div></div></a></div><div class="footer-links-col"><div class="eyebrow-w c-green-off-white-2"><div class="text-eyebrow">Follow On</div></div><div class="footer-links-layout"><a data-anim="text-hover" href="https://www.tiktok.com/@landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Tiktok</div></div></a><a data-anim="text-hover" href="https://www.instagram.com/lando" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Instagram</div></div></a><a data-anim="text-hover" href="https://www.youtube.com/@LandoNorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Youtube</div></div></a><a data-anim="text-hover" href="https://www.twitch.tv/landonorris" target="_blank" class="text-link-w w-inline-block"><div class="text-clip-w"><div data-anim-high="right, lime" split-text="lines,chars" class="btn-text is-footer">Twitch</div></div></a></div><a data-signup-trigger="" data-anim="text-hover" href="#" class="text-link-w c-lime is-hidden w-inline-block"><div class="text-clip-w"><div data-anim-high="right, dark-green-tint-1" split-text="lines,chars" class="btn-text is-nav">Sign&nbsp;Up</div></div></a></div></div><div class="footer-statement-w"><div class="footer-statement-layout"><div class="footer-rive-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d443bc774ddcd37b3d8d4d_ln4-footer-rive-placeholder.svg" loading="lazy" data-rive-placeholder="" alt="" class="image is-footer-rive"><div class="marquee-gl-rive-w w-embed"><canvas data-rive-object="" data-rive-file="signature" data-rive-artboard="signature" data-rive-state-machine="signature_play" data-rive-input="color_lime" data-rive-fit="contain" data-rive-scrolltrigger-target="" data-rive-scrolltrigger-start="" data-rive-scrolltrigger-end="">
</canvas></div></div><h2 data-anim-high="right,lime-off" split-text="lines" class="text-impact-sm-mona footer">Always <span class="text-impact-sm-brier c-lime-off">bringing</span> the <span class="text-impact-sm-brier c-lime-off">fight</span>.</h2></div></div><div class="footer-bg-helmet-w"><div class="footer-bg-helmet-layout"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-500.webp 500w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-800.webp 800w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1-p-1080.webp 1080w, https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67d43d6e276c436a378a1da6_ln-360-helm-1.webp 1560w" alt="" class="footer-bg-img"><div class="footer-bg-bottom-btn-w"><a data-btn-rive-rotate="false" data-anim="text-hover" data-btn-rive-hover="" data-theme="lime" data-wf--button-primary--variant="base" href="mailto:business@landonorris.com" class="btn-w w-inline-block"><div class="btn-inner"><div class="btn-inner-text-w"><div split-text="chars" class="btn-text">business enquiries</div></div><div class="btn-icon-w"><div class="btn-rive-w w-embed"><canvas data-rive-object="" data-rive-file="btn-ui" data-rive-artboard="arrow" data-rive-state-machine="arrow" data-rive-hover="false" data-rive-fit="contain">
</canvas></div></div></div></a></div></div></div><div aria-hidden="true" class="footer-marquee"><div data-marquee-duplicate="3" data-marquee-scroll-direction-target="" data-marquee-direction="left" data-marquee-status="normal" data-marquee-speed="30" data-marquee-scroll-speed="5" class="marquee-adv-row"><div data-marquee-scroll-target="" class="marquee-adv-scroll"><div data-marquee-collection-target="" class="marquee-adv-collection"><div class="marquee-adv-item"><div class="footer-marquee-item"><div class="footer-marquee-logo-w"><div class="footer-marquee-svg w-embed"><svg width="100%" height="100%" viewBox="0 0 97 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m2.04 15.998 2.249 8.218 2.354-8.218h3.045l2.355 8.188 2.249-8.188h2.026l-2.881 9.748h-2.745l-2.519-8.338-2.52 8.338H2.895L0 15.998h2.04ZM16.377 20.843c0-2.937 1.725-4.993 5.339-4.993 3.164 0 5.039 1.814 5.039 5.008v.48h-8.248c.134 1.65 1.094 2.79 3.224 2.79 1.724 0 2.46-.78 2.64-1.515l.03-.088h2.25l-.015.09c-.285 1.8-1.89 3.284-4.934 3.284-3.6 0-5.324-2.054-5.324-5.039l-.001-.017Zm8.263-.99-.015-.03c-.223-1.41-1.287-2.204-2.999-2.204-1.785 0-2.73.885-3.03 2.235h6.044ZM35.317 24.263c-1.005 1.11-2.444 1.634-4.184 1.634-2.01 0-3.494-.704-3.494-2.505 0-1.859 1.44-2.653 3.584-2.879l2.294-.24c1.575-.165 2.685-.3 2.837-1.14l-.016.152.016-.104c.195-1.064-.6-1.605-2.325-1.605-1.814 0-2.849.557-3.15 2.127l-.03.138h-2.042l.03-.136c.495-2.43 2.16-3.853 5.339-3.853 3.284 0 4.604 1.454 4.11 3.778l-1.304 6.117h-1.98l.315-1.484Zm-3.734.136c2.026 0 3.854-.93 4.439-3.36v-.029l.045-.21c-.42.524-1.335.81-2.49.915l-1.934.223c-1.5.152-1.934.63-1.934 1.29 0 .766.674 1.17 1.874 1.17ZM42.26 17.544c.75-1.05 1.874-1.694 3.315-1.694 2.31 0 3.569 1.92 2.85 4.544l-.18.615H46.16l.165-.615c.42-1.485.045-2.79-1.605-2.79-1.694 0-2.64 1.14-3 2.505l-1.199 5.638h-2.04L40.55 16h2.04l-.33 1.545ZM54.933 15.85c3.674 0 5.115 2.219 4.589 5.053l-.076.435h-8.082c-.03 1.695 1.14 2.79 3.09 2.79 1.409 0 2.338-.585 2.698-1.44l.09-.165h2.055l-.06.18c-.615 1.83-2.145 3.194-4.92 3.194-3.568 0-5.563-2.431-4.873-5.804.45-2.009 2.085-4.243 5.489-4.243Zm2.654 3.973v-.06c.075-1.334-.9-2.144-2.564-2.144-1.98 0-2.938 1.14-3.36 2.204h5.924ZM69.18 24.367c-.525.72-1.605 1.53-3.434 1.53-3.075 0-4.95-2.127-4.95-5.008v-.03c0-2.91 1.935-5.01 4.905-5.01 1.829 0 2.954.825 3.479 1.53V16h2.025v9.703c0 2.325-.855 3.647-3.539 3.647h-6.33v-1.76h6.06c1.484 0 1.784-.644 1.784-2.127v-1.095Zm-3.147-.24c2.114 0 3.15-1.439 3.15-3.224v-.06c0-1.784-1.02-3.224-3.15-3.224-2.19 0-3.15 1.5-3.15 3.242v.03c-.002 1.722.972 3.237 3.15 3.237ZM74.7 17.754c.45-1.035 1.71-1.904 3.314-1.904 1.92 0 3.45 1.02 3.45 3.748v1.095h-2.1v-1.034c0-1.29-.54-2.055-1.95-2.055-2.04 0-2.714 1.5-2.714 2.595v5.548h-2.04V16h2.04v1.755ZM83.726 13c.855 0 1.29.42 1.29 1.035 0 .585-.435 
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 39: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `footer-bg-pattern-w`
- **Size:** 747px height, width: 1406.69px
- **Media:** 1 image(s)
- **Animations:**
  - `img`.image: transition: all

### Element Style Blueprint

- **`<img>`** .image
  - font: 14px 400 "Mona Sans Variable", Arial, sans-serif | color: rgb(244, 244, 237) | lh: 20px | text-align: start | border: 0px none rgb(244, 244, 237) | display: inline-block | width: 1406.69px | opacity: 1
  - anim: all
  - src: https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dbeba158707fa1cd5e5e45_blobs_footer_1.svg

### HTML Structure

```html
<div class="footer-bg-pattern-w"><img src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dbeba158707fa1cd5e5e45_blobs_footer_1.svg" loading="lazy" alt="" class="image"></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 40: Hero
- **Confidence:** 0%
- **Tag:** div
- **Classes:** `gl-wrap w-embed`
- **Size:** full viewport height, width: 1440px
### HTML Structure

```html
<div class="gl-wrap w-embed"><!--
<canvas class="gl"></canvas>
--></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.

## Section 41: Footer
- **Confidence:** 30%
- **Tag:** div
- **Classes:** `gl-background`
- **Size:** full viewport height, width: 1440px
### HTML Structure

```html
<div data-gl="background" class="gl-background"></div>
```

**Adaptation:** Replace original copy with niche-specific value prop. Preserve all classes, layout, and visual styling exactly as extracted.


---

# 7. Motion Timeline Recipes

25 motion pattern(s) detected:

- **Type:** scroll-translate
  Target: `div.page-w:nth-child(6)` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `main.main-w` (main)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.taxi-w` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.horizontal-track` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.sticky-track.home-hero:nth-child(2)` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `section.home-helmets:nth-child(1)` (section)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.home-helmets` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.w-dyn-list:nth-child(3)` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: -0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.helmet-grid.w-dyn-items` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `img.image.is-otot-home-end` (img)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** sticky-pin
  Target: `div.sticky-item.home-hero:nth-child(1)` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: -0.9
  Implementation: CSS position: sticky with scroll-linked animation

- **Type:** scroll-translate
  Target: `section.home-hero:nth-child(1)` (section)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: -0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.home-hero` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.gl-canvas:nth-child(1)` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: -0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `section.home-marquee:nth-child(2)` (section)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: -0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.is-marquee` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: -0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** sticky-pin
  Target: `div.is-horiz-scroll:nth-child(1)` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: CSS position: sticky with scroll-linked animation

- **Type:** scroll-translate
  Target: `div.horizontal-pin-wrap` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.horizontal-pin-spacer` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** sticky-pin
  Target: `div.horizontal-pin-sticky` (div)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: CSS position: sticky with scroll-linked animation

- **Type:** sticky-pin
  Target: `div.sticky-item` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: -0.9
  Implementation: CSS position: sticky with scroll-linked animation

- **Type:** scroll-translate
  Target: `section.is-otot-home` (section)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: -0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.is-otot-home` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: -0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `div.otot-home-bg:nth-child(2)` (div)
  Range: 0-100%
  Y movement: -10133px
  Parallax ratio: -0.9
  Implementation: Scroll-linked transform with requestAnimationFrame

- **Type:** scroll-translate
  Target: `section.is-otot-end` (section)
  Range: 0-100%
  Y movement: -11233px
  Parallax ratio: -1
  Implementation: Scroll-linked transform with requestAnimationFrame

**Math:** Use lerp next = current + (target - current) * alpha with alpha 0.08-0.18.
**Easing:** cubic-bezier(0.22, 1, 0.36, 1) for premium reveals.
**Rule:** Respect prefers-reduced-motion.


---

# 8. Interaction Recipes

No hover interactions probed. Add standard hover states: color shift on links, lift on cards, background change on buttons.

---

# 9. Asset Requirements

- **Images:** 64 detected — plan for hero, content, and decorative images
- **Videos:** 0 detected
- **Fonts:** 3 detected
- **Inline SVGs:** 86
- **Canvases:** 20

**Rule:** Do not copy proprietary assets. Recreate the design language with original, niche-specific content.

---

# 10. Responsive Rules

- Mobile-first breakpoint strategy: 390px, 834px, 1440px
- All three viewports captured
- desktop@0%: H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"
- desktop@50%: H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- desktop signals: opacity-based effects
- tablet@0%: H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"
- tablet@50%: H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- tablet signals: opacity-based effects
- mobile@0%: H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"
- mobile@50%: H2: "TRACK"; H2: "OFF"; H2: "TRACK"
- mobile signals: opacity-based effects
- wide@0%: H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"
- wide@50%: H1: "Lando Norris"; H2: "2025 Mclaren Formula 1 Driver"
- wide signals: opacity-based effects
- Navigation collapses to hamburger on mobile
- Full-viewport sections become auto-height on mobile
- WebGL/canvas lazy-loaded and capped at DPR 2 on mobile
- Touch-friendly tap targets (min 44px)


---

# 11. CRO Adaptation

**Paradigm:** Value first, spectacle second.

**Required conversion blocks:**
- Hero with niche-specific offer for Taller de motos, a concise proof point, and one primary CTA.
- Trust block near the first friction point: testimonials, metrics, client logos, or before/after proof.
- Offer explanation section that makes the buying path obvious.
- Conversion-focused contact or booking flow with minimal fields.
- Accessible footer with business identity, navigation, and legal links.

**Pushback:**
- Strengthen the hero H1 so the value proposition is understandable without scrolling.
- Add a primary above-the-fold CTA with concrete commercial intent.

**Niche:** Taller de motos
Translate the extracted aesthetic into Taller de motos. Preserve the premium visual grammar, but rewrite structure, copy, proof, and CTAs around the business outcome. The first viewport must communicate who this is for, what measurable value is offered, why the visitor should trust it, and what action to take next.

---

# 12. Performance Budget

- **LCP:** < 2.5s
- **Total load:** < 5s
- **JS:** Keep route-level JS lean; lazy-load WebGL and heavy animation bundles.
- **Motion:** Respect prefers-reduced-motion and pause offscreen animation.

**Performance risk:** medium
- Multiple canvases (20) - potential rendering overhead


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
- All 41 sections match the extracted layout rhythm.
- All scroll animations have reduced-motion alternatives.
- No blocking render resources on initial paint.
- Primary CTA is visible above the fold on desktop and mobile.
- WCAG AA contrast maintained on all text surfaces.
- Page loads in under 5 seconds on 3G Fast.
- All 25 motion patterns are recreated with equivalent feel.

---

# 15. Final Agent Prompt

```text
You are a senior full-stack product engineer and conversion-focused web designer.

Build a premium, high-performance website for: "Taller de motos".

Reference: https://landonorris.com/
Design language: luxury minimal

LEGAL AND ETHICAL POLICY: Use this reference as inspiration for structure, interaction patterns, and quality bar. Do not copy proprietary assets, brand identity, exact copy, source code, trademarks, or unique protected illustrations. Recreate the design language with original assets and niche-specific content.

Follow all sections above (1-15) as your build specification. Every directive, token, recipe, and constraint in this brief is mandatory.

Deliver a production-ready responsive site with modular components, tokenized styles, and concise conversion copy adapted to "Taller de motos".
```