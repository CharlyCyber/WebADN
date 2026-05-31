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
- Target: `main.Layout_content__PrPCk` (mai

*[truncated for size — see prompt.md for full]*
