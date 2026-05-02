---
title: "Getting started with Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Install Skeletonic Stylus from npm or a CDN, import it into your Stylus build, and override variables in seconds."
layout: page
permalink: https://skeletonic.io/getting-started/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "oklch(0.55 0.2 250)"
keywords: "install skeletonic, stylus setup, css cdn, getting started"
---

## Intro

New to Skeletonic Stylus? In **v2.0.0** the core stylesheet is
**7.8&nbsp;KB gzip / 6.7&nbsp;KB brotli** for the full RTL-ready,
WCAG&nbsp;2.2&nbsp;AA bundle — measured against the canonical CDN file,
not approximated. It integrates into any web app from a single
`<link>` — no JavaScript framework required, no build step needed if
you load it from a CDN.

Ready to install? Every path covered below — pick one.

## 1. Download and install

You can install Skeletonic Stylus via **pnpm**, **npm** or **yarn**, or
load it straight from a CDN. You can also self-host the distribution
files locally if you prefer.

### From a package manager (recommended)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### From a CDN

If you only need the compiled CSS, drop one of these into your `<head>`:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

For maximum integrity, copy the **SRI hash** from the v2.0.0 release
notes and add an `integrity="sha384-…"` attribute.

### Alternate CDN locations

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | Yes | Yes |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css` | Yes | No |

### Download the GitHub release

Prefer a versioned tarball? Grab the latest release from
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
and drop the contents of `dist/` straight into your project.

### Clone the GitHub repository

Clone the main repository to get all source files including the build
scripts:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Tip:** sign your commits — the project enforces signed commits in CI.
> Use `git commit -S -m "..."` (or set `commit.gpgsign = true` in your
> global git config).

## 2. Use the compiled CSS

The library ships several pre-built bundles under
`dist/css/` once installed:

| File | Purpose | Min raw / gzip / brotli |
|---|---|---|
| `core/skeletonic.min.css` | Reset + tokens + layout + elements + components + utilities, RTL-ready | 39.1 KB / 7.8 KB / 6.7 KB |
| `animations/skeletonic-animations.min.css` | 56 keyframes, gated behind `prefers-reduced-motion` | 217.8 KB / 6.7 KB / — |
| `palettes/material/skeletonic-material.min.css` | Material 19×14 hue/shade utilities | ≈17.9 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Tachyons utility palette | 7.3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | ~140 CSS named-color utilities | ≈3.5 KB |

Each module is independent — pick the smallest combination you need.

## 3. Use it from Stylus

If you have a Stylus pipeline already, you can import the source
modules and let your bundler tree-shake unused parts:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Or import only the bits you need:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Override the brand colour

Skeletonic exposes its design tokens as **CSS custom properties** so you
can theme it without recompiling Stylus:

```css
:root {
  --cl-primary:   oklch(0.55 0.2 250);
  --cl-secondary: oklch(0.45 0.15 200);
  --cl-tertiary:  #757c8a;
}
```

That's it — every component that uses the primary colour will follow.

## 5. Verify the install

A minimal "did it work?" check:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>It works.</h1>
    <a href="#" class="button primary">Hello, world</a>
  </body>
</html>
```

If the heading is sized fluidly and the button has a blue pill shape,
you're done.

## 6. What's included

Inside the package you'll find every source file, the compiled and
minified CSS bundles, source maps, and a full Stylus tree organised by
category:

```text
@sebastienrousseau/skeletonic-stylus@2.0.0
├── CHANGELOG.md
├── LICENSE-APACHE
├── LICENSE-MIT
├── README.md
├── package.json
├── dist/
│   └── css/
│       ├── core/
│       │   ├── skeletonic.css
│       │   ├── skeletonic.css.map
│       │   └── skeletonic.min.css
│       ├── animations/
│       │   ├── skeletonic-animations.css
│       │   └── skeletonic-animations.min.css
│       └── palettes/
│           ├── material/skeletonic-material.min.css
│           ├── tachyons/skeletonic-tachyons.min.css
│           └── websafe/skeletonic-websafe.min.css
└── src/
    └── stylus/
        ├── animations/      bounce, fade, pulse, shake, vanish, zoom…
        ├── base/            reset, helpers
        ├── components/      card, header, navbar, alert
        ├── configurations/  colors, variables
        ├── elements/        button, form, table, link, list, code…
        ├── fonts/           font-face declarations
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixins
        └── skeletonic.styl  ← single import that pulls everything
```

Every module is independent — pull in only the bundles you need to keep
your CSS payload as small as possible.

## Frequently asked questions

**How do I install Skeletonic Stylus?**
Run `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0`. Or load the
compiled CSS straight from a CDN — no build step required.

**Does it require JavaScript?**
No. The core stylesheet is pure CSS, with zero runtime cost. Components
work without a single line of JS.

**Is it WCAG 2.2 ready?**
Yes. v2.0.0 ships AA-conformant contrast, focus-visible rings,
skip-link helpers, reduced-motion support and dark mode by default.

**What's the gzipped size?**
39.1&nbsp;KB minified, **7.8&nbsp;KB gzip**, **6.7&nbsp;KB brotli** for
the full RTL-ready core stylesheet. Compressed budgets (10&nbsp;KB gzip,
8&nbsp;KB brotli) are enforced in CI on every commit. See
[the framework benchmark](/benchmarks/) for side-by-side numbers
against Bootstrap, Bulma, Pico, and Tailwind.

**What licence does it use?**
Dual-licensed under MIT and Apache 2.0 — pick whichever your project
needs. Free for commercial and personal use.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I install Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Run pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0. Or load the compiled CSS straight from a CDN — no build step required."
      }
    },
    {
      "@type": "Question",
      "name": "Does Skeletonic Stylus require JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The core stylesheet is pure CSS, with zero runtime cost. Components work without a single line of JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "Is Skeletonic Stylus WCAG 2.2 ready?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. v2.0.0 ships AA-conformant contrast, focus-visible rings, skip-link helpers, reduced-motion support and dark mode by default."
      }
    },
    {
      "@type": "Question",
      "name": "What's the gzipped size of Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "39.1 KB minified, 7.8 KB gzip, 6.7 KB brotli for the full RTL-ready core stylesheet. Compressed budgets (10 KB gzip, 8 KB brotli) are enforced in CI on every commit."
      }
    },
    {
      "@type": "Question",
      "name": "What licence does Skeletonic Stylus use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dual-licensed under MIT and Apache 2.0 — pick whichever your project needs. Free for commercial and personal use."
      }
    }
  ]
}
</script>

[Browse the components →](/components/)
