---
title: "Design tokens — runtime CSS custom properties"
name: "Skeletonic Stylus"
description: "Every CSS custom property exposed by Skeletonic Stylus v1.1.7 — colours, headings, line heights, golden-ratio constants, focus ring, link colours."
layout: page
permalink: https://skeletonic.io/tokens/
date: 2026-04-30
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css custom properties, design tokens, theme, dark mode, css variables, retheme"
---

Skeletonic exposes its design system as CSS custom properties on
`:root`. Override any of them on any ancestor element to retheme that
subtree at runtime — **no Stylus recompile, no rebuild step**.

```css
.my-section {
  --cl-primary: hsl(280, 80%, 45%);
  --gr-h1: 3.6rem;
}
```

Every component that resolves these tokens through the cascade picks
up the override automatically.

<hr class="hr-text" data-content="Brand">

## Brand and status colours

| Token | Light default | Where it's used |
|---|---|---|
| `--cl-primary` | `hsl(210, 100%, 42%)` | Primary buttons, badges, links |
| `--cl-secondary` | `hsl(195, 100%, 33%)` | Secondary buttons, secondary code accent |
| `--cl-tertiary` | grey | Tertiary surfaces |
| `--cl-disable` | grey-200 | Disabled states |
| `--cl-info` | blue | Info alert, `.alert-info`, `code.info` |
| `--cl-success` | green | Success alert, `code.success` |
| `--cl-warning` | amber | Warning alert, `code.warning` |
| `--cl-danger` | red | Error alert, `code.error`, `.input-error` |
| `--cl-link` | `var(--cl-primary)` | Inline `<a>` colour |
| `--cl-inverse` | white | Foreground on dark surfaces |

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

These are the tokens that actually drive heading sizes in v1.1.7 — set
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
