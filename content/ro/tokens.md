---
language: "ro"
title: "Tokens — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Every CSS custom property exposed by Skeletonic Stylus v2.0.0 — colours, headings, line heights, golden-ratio constants, focus ring, link colours."
layout: page
permalink: https://skeletonic.io/ro/tokens/
date: 2026-04-30
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css custom properties, design tokens, theme, dark mode, css variables, retheme"
---

> **This documentation is provided in English. A full translation is in progress.** <!-- i18n-summary -->

Skeletonic exposes its design system as CSS custom properties on
`:root`. Override any of them on any ancestor element to retheme that
subtree at runtime — **no Stylus recompile, no rebuild step**.

```css
.my-section {
  --cl-primary: oklch(0.55 0.20 280);   /* purple */
  --gr-h1: 3.6rem;
}
```

Every component that resolves these tokens through the cascade picks
up the override automatically.

> **OKLCH since v2.0.** Every brand, status, and grey token is
> defined in [oklch()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) —
> perceptually uniform contrast, native wide-gamut (P3) support, and
> a single colour space that behaves the same way under
> `prefers-color-scheme: dark`.

<hr class="hr-text" data-content="Brand">

## Brand and status colours

Click any swatch to copy the token name. Hover to preview the live
value resolved against the current palette + colour-scheme.

<ul class="token-grid" data-token-grid>
  <li><button type="button" class="token-card" data-token="--cl-primary"  style="--swatch:var(--cl-primary)"  aria-label="Copy --cl-primary"><span class="token-swatch" aria-hidden="true"></span><span class="token-name">--cl-primary</span><span class="token-use">Primary buttons, badges, links</span></button></li>
  <li><button type="button" class="token-card" data-token="--cl-secondary" style="--swatch:var(--cl-secondary)" aria-label="Copy --cl-secondary"><span class="token-swatch" aria-hidden="true"></span><span class="token-name">--cl-secondary</span><span class="token-use">Secondary buttons, code accent</span></button></li>
  <li><button type="button" class="token-card" data-token="--cl-success"   style="--swatch:var(--cl-success)"   aria-label="Copy --cl-success"><span class="token-swatch" aria-hidden="true"></span><span class="token-name">--cl-success</span><span class="token-use">Success alert, <code>code.success</code></span></button></li>
  <li><button type="button" class="token-card" data-token="--cl-info"      style="--swatch:var(--cl-info)"      aria-label="Copy --cl-info"><span class="token-swatch" aria-hidden="true"></span><span class="token-name">--cl-info</span><span class="token-use">Info alert, <code>.alert-info</code></span></button></li>
  <li><button type="button" class="token-card" data-token="--cl-warning"   style="--swatch:var(--cl-warning)"   aria-label="Copy --cl-warning"><span class="token-swatch" aria-hidden="true"></span><span class="token-name">--cl-warning</span><span class="token-use">Warning alert, <code>code.warning</code></span></button></li>
  <li><button type="button" class="token-card" data-token="--cl-danger"    style="--swatch:var(--cl-danger)"    aria-label="Copy --cl-danger"><span class="token-swatch" aria-hidden="true"></span><span class="token-name">--cl-danger</span><span class="token-use">Error alert, <code>.input-error</code></span></button></li>
  <li><button type="button" class="token-card" data-token="--cl-grey-300"  style="--swatch:var(--cl-grey-300)"  aria-label="Copy --cl-grey-300"><span class="token-swatch" aria-hidden="true"></span><span class="token-name">--cl-grey-300</span><span class="token-use">Borders, dividers</span></button></li>
  <li><button type="button" class="token-card" data-token="--cl-grey-700"  style="--swatch:var(--cl-grey-700)"  aria-label="Copy --cl-grey-700"><span class="token-swatch" aria-hidden="true"></span><span class="token-name">--cl-grey-700</span><span class="token-use">Body text on light surface</span></button></li>
</ul>

Each colour has a paired background token (`--bg-primary`,
`--bg-secondary`, …) for tinted surfaces.

## Surface and text

| Token | Light default | Dark default |
|---|---|---|
| `--background-color` | `#ffffff` | `#0d0d10` |
| `--foreground-color` | `#000000` | `#f5f5f7` |
| `--focus-ring-color` | `var(--link-color, #007aff)` | `var(--link-color, #4ea1ff)` |

Dark values are applied automatically inside
`@media (prefers-color-scheme: dark)`. `color-scheme: light dark` is
declared on `:root` so native form controls and scrollbars also flip.

## Greyscale (10 stops)

`--cl-grey-100` … `--cl-grey-1000` — single-hue ladder used for borders,
shadows, neutral backgrounds.

## Link colours

| Token | Default | When |
|---|---|---|
| `--link-color` | brand blue | Default link colour |
| `--link-color-active` | red | `:active` state |
| `--link-color-focus` | red | `:focus-visible` ring base |
| `--link-color-hover` | red | `:hover` state |
| `--link-color-visited` | purple | `:visited` |

<hr class="hr-text" data-content="Typography">

## Type scale

| Token | Default | Notes |
|---|---|---|
| `--gr-fsb` | `1.62rem` | Body large |
| `--gr-fsl` | `2.01rem` | Body extra-large |
| `--gr-fsm` | `1.62rem` | Body medium |
| `--gr-fss` | `1.23rem` | Body small |

## Heading scale (consumed by `<h1>`–`<h6>`)

These are the tokens that actually drive heading sizes in v2.0.0 — set
them on any ancestor to retheme typography.

| Token | Default |
|---|---|
| `--gr-h1` | `4.2rem` |
| `--gr-h2` | `3.3rem` |
| `--gr-h3` | `2.6rem` |
| `--gr-h4` | `2.0rem` |
| `--gr-h5` | `1.6rem` |
| `--gr-h6` | `1.3rem` |

The default scale uses a 1.27 (minor third) ratio — chosen for visual
rhythm at every size, not for Φⁿ purity.

## Line heights

Body and heading line-height tokens, paired with the size tokens above:

`--gr-lh`, `--gr-lhl`, `--gr-lhm`, `--gr-lhs`,
`--gr-lh-h1`, `--gr-lh-h2`, `--gr-lh-h3`, `--gr-lh-h4`, `--gr-lh-h5`, `--gr-lh-h6`.

<hr class="hr-text" data-content="Constants">

## Golden-ratio constants

Used by the spacing scale, radius utilities, and wherever a "natural"
proportion is needed.

| Token | Value | Purpose |
|---|---|---|
| `--gr` | `1.62` | Φ (the golden ratio) |
| `--gr-large` | `0.62` | 1/Φ |
| `--gr-medium` | `0.50` | midpoint of `gr-small` and `gr-large` |
| `--gr-small` | `0.38` | 1 − 1/Φ |

[Read about the components →](/components/) ·
[See the utility classes →](/utilities/) ·
[Spacing ladder →](/spacing/)
