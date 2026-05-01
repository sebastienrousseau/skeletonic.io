---
title: "Accessibility — WCAG 2.2 in v2.0.0"
name: "Skeletonic Stylus"
description: "What v2.0.0 ships out of the box for WCAG 2.2 conformance — focus rings, contrast, skip links, motion, and dark mode."
layout: page
permalink: https://skeletonic.io/accessibility/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, accessibility, focus visible, skip link, prefers reduced motion, contrast"
---

> **Skeletonic Stylus v2.0.0 ships WCAG 2.2 conformance as the default
> behaviour, not as an optional theme.** This page documents what's
> baked in and what mixins you can opt into for finer control.

<hr class="hr-text" data-content="Out of the box">

## What you get for free

| WCAG 2.2 SC | What v2.0.0 does | How to verify |
|---|---|---|
| **1.4.3 Contrast (Minimum) — AA** | `--cl-primary` and `--cl-secondary` darkened to ≥ 4.5:1 against white | DevTools → contrast checker |
| **1.4.11 Non-text Contrast — AA** | Form borders, buttons, badges all ≥ 3:1 | Same |
| **2.4.7 Focus Visible — AA** | Every focusable element has a `:focus-visible` ring (yellow on dark backgrounds, blue on light) | `Tab` through any page |
| **2.4.11 Focus Not Obscured — AA (new in 2.2)** | Sticky header has reduced height + focus scroll-margin | `Tab` past the sticky header |
| **2.5.8 Target Size — AA (new in 2.2)** | Buttons / links: ≥ 24×24 CSS px hit area | DevTools box model |
| **1.4.12 Text Spacing — AA** | All elements honour user line-height / letter-spacing overrides | Override in DevTools |
| **2.3.3 Animation from Interactions — AAA** | All animation classes are wrapped in `@media (prefers-reduced-motion: no-preference)` | OS-level reduce-motion |
| **1.4.10 Reflow — AA** | Layout works at 320 px without horizontal scroll | DevTools narrow viewport |
| **Dark mode** | `prefers-color-scheme: dark` swaps tokens automatically | OS dark-mode toggle |
| **RTL & logical properties (3.1.2 / 1.4.10)** | All directional CSS uses `margin-inline-*`, `padding-inline-*`, `border-inline-*`, `inset-inline-*`, `text-align: start/end`. Sidebars, link reveals, code-block accent stripes flip on `<html dir="rtl">` | `<html dir="rtl">` toggle |
| **`forced-colors: active`** (Windows HCM) | Every focus rule has a `CanvasText` outline fallback. No content disappears in HCM | Edge → Settings → High Contrast |

<hr class="hr-text" data-content="Mixins">

## Stylus mixins you can opt into

If you compile from source, the following mixins are available in
`src/stylus/utilities/mixins.styl`:

| Mixin | Use |
|---|---|
| `focus-ring()` | High-contrast focus ring honouring `:focus-visible` |
| `visually-hidden()` | Screen-reader-only text that stays focusable |
| `skip-link()` | Anchor that becomes visible on focus |
| `reduced-motion()` | Wraps any block in `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Adjustments for Windows High Contrast Mode |
| `target-size(24px)` | Pads any clickable to a minimum tap target |

Example:

```stylus
// Apply a strong focus ring on a custom button
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Skip link">

## The skip-link helper

Drop this **first thing inside `<body>`**:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

The class is **not** in the core stylesheet (so the page weight doesn't
budge); it's a 4-line snippet you compose yourself or use the included
`skip-link()` mixin. This site uses it — focus the page and press Tab
to see it appear in the top-left.

<hr class="hr-text" data-content="RTL">

## RTL out of the box

Set `dir="rtl"` on `<html>` (or any subtree) and the inline axis flips
without you adding a single line of CSS:

```html
<html lang="ar" dir="rtl">
  …
  <body>
    <a href="#main" class="skip-link">تخطي إلى المحتوى</a>
    …
  </body>
</html>
```

What flips automatically: paddings, margins, borders, alignment of
forms and tables, the off-canvas hamburger sidebar in
`components/navbar.styl`, and the 12 `.link-1`…`.link-12` underline
reveals (these explicitly preserve their "from-start" / "from-end"
semantics under RTL via a `[dir="rtl"]` override block in
`elements/link-effects.styl`). What doesn't flip: `<code>` and `<pre>`
blocks, which keep `direction: ltr` because code is conventionally
left-to-right.

<hr class="hr-text" data-content="Themable headings">

## Themable headings via `--gr-h1`…`--gr-h6`

v2.0.0 wires the `<h1>`–`<h6>` rules to runtime CSS custom properties
so you can retheme typography without recompiling Stylus. The defaults
follow a 1.27 (minor third) ratio:

```css
:root {
  --gr-h1: 4.2rem;
  --gr-h2: 3.3rem;
  --gr-h3: 2.6rem;
  --gr-h4: 2.0rem;
  --gr-h5: 1.6rem;
  --gr-h6: 1.3rem;
}
```

Override on any ancestor:

```css
.my-section {
  --gr-h1: 3.0rem;  /* tighter for an in-page hero */
  --gr-h2: 2.4rem;
}
```

Line heights follow the same pattern: `--gr-lh-h1` … `--gr-lh-h6`.

<hr class="hr-text" data-content="Verification">

## Verifying your own pages

The library ships an `a11y-test.mjs` script under `scripts/` that runs
[axe-core](https://github.com/dequelabs/axe-core) against every URL
you give it.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI runs this script against the `dist/index.html` showcase page on
every push.

[Read about the v2.0.0 release →](/changelog/) ·
[See the security page →](/security/)
