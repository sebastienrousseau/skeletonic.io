---
title: "Skeletonic Stylus 2.0 — Modern CSS, 8.0 KB gzip"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus 2.0 — OKLCH colours, native @layer, CSS Grid, container queries, view transitions. Class-based, JS-free, WCAG 2.2 AA, 8.0 KB gzip / 6.9 KB brotli."
layout: index
permalink: https://skeletonic.io/
date: 2026-05-01
author: Sebastien Rousseau
theme_color: "oklch(0.55 0.2 250)"
keywords: "css, stylus, css framework, oklch, css grid, container queries, view transitions, css cascade layers, accessible css, wcag 2.2, rtl, no javascript, htmx"
---

**Skeletonic Stylus 2.0** — modern CSS for the post-bundler web.
**8.0&nbsp;KB&nbsp;gzip · 6.9&nbsp;KB&nbsp;brotli**. OKLCH colours,
native `@layer`, CSS Grid, container queries, view transitions.
WCAG&nbsp;2.2 AA. RTL-ready. Zero JavaScript. One `<link>` and
you're done.

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
```

## What's new in 2.0

Six 2026-baseline CSS features the library now ships natively.

| Feature | Where it lives |
|---|---|
| **OKLCH colour system** | every brand / status / grey token, dark-mode included |
| **Native `@layer`** | `skeletonic.{base,layout,elements,components}` — drop unlayered overrides anywhere and they win |
| **CSS Grid layout** | `.grid` + `.grid-cols-1..12` + `.col-span-1..12` |
| **Container queries** | `.card` reflows to its parent's width, not the viewport's |
| **View Transitions API** | `.view-transition-name-{root,header,main,footer,article,section}` |
| **Scroll-driven animation** | `.scroll-timeline`, `.animate-on-scroll` |

[Full v2.0.0 release notes →](/changelog/)

## The Anatomy of Skeletonic

Six paths into the library. Pick what you need.

<div class="anatomy-grid">
  <a class="anatomy-card" href="/getting-started/">
    <img class="anatomy-icon" src="/images/icons/content.min.svg" alt="Get started" width="48" height="48" loading="lazy" decoding="async">
    <h3>Get started</h3>
    <p>Install once. Theme in seconds. From CDN to Stylus pipeline.</p>
  </a>
  <a class="anatomy-card" href="/components/">
    <img class="anatomy-icon" src="/images/icons/components.min.svg" alt="Components" width="48" height="48" loading="lazy" decoding="async">
    <h3>Components</h3>
    <p>Buttons, alerts, badges, cards, forms, headers — every snippet copy-paste ready.</p>
  </a>
  <a class="anatomy-card" href="/palettes/">
    <img class="anatomy-icon" src="/images/icons/colors.min.svg" alt="Palettes" width="48" height="48" loading="lazy" decoding="async">
    <h3>Palettes</h3>
    <p>Material, Tachyons and web-safe colour systems. Conformant out of the box.</p>
  </a>
  <a class="anatomy-card" href="/animations/">
    <img class="anatomy-icon" src="/images/icons/animations.min.svg" alt="Animations" width="48" height="48" loading="lazy" decoding="async">
    <h3>Animations</h3>
    <p>Bounce, fade, pulse, shake, vanish &amp; zoom — gated behind <code>prefers-reduced-motion</code>.</p>
  </a>
  <a class="anatomy-card" href="/accessibility/">
    <img class="anatomy-icon" src="/images/icons/accessibility.min.svg" alt="Accessibility" width="48" height="48" loading="lazy" decoding="async">
    <h3>Accessibility &amp; RTL</h3>
    <p>WCAG 2.2 AA. Focus rings. Skip links. Reduced motion. Dark mode. Logical-property RTL — no extra stylesheet.</p>
  </a>
  <a class="anatomy-card" href="/security/">
    <img class="anatomy-icon" src="/images/icons/github.min.svg" alt="Security" width="48" height="48" loading="lazy" decoding="async">
    <h3>Security</h3>
    <p>CycloneDX SBOM. npm provenance. Pinned dependencies. CVE-patched.</p>
  </a>
</div>

## Numbers, not promises

CDN-served, no purging, measured with `gzip -9` and `brotli -q 11` on
**2026-04-30**. The full table is on [the benchmarks page](/benchmarks/).

| Framework | Version | Brotli | Gzip |
|---|---|---:|---:|
| **Skeletonic Stylus** | 2.0.0 | **6.9 KB** | **8.0 KB** |
| Pico CSS | 2.1.1 | 10.1 KB | 11.6 KB |
| Bootstrap | 5.3.8 | 23.0 KB | 30.9 KB |
| Bulma | 1.0.4 | 36.3 KB | 64.9 KB |
| Tailwind Play CDN (JS) | latest | 104.7 KB | 123.1 KB |

## Built for the post-bundler web

Skeletonic exists for the parts of the web where Tailwind v4's Oxide
pipeline is overkill: HTMX apps, Hotwire and Phoenix LiveView,
Astro MPA, every Hugo / Eleventy / **Shokunin** SSG, server-rendered
Laravel / Django / Rails templates, and AI-scaffolded HTML. One
`<link>`, no JavaScript, no compile step, real RTL, real WCAG 2.2 AA.
No surprises in production.

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/dist/css/core/skeletonic.min.css">
```

That's the whole install.

## Ready when you are

[Browse components ❯](/components/) &nbsp;·&nbsp;
[Framework benchmarks ❯](/benchmarks/) &nbsp;·&nbsp;
[Read the docs ❯](/getting-started/) &nbsp;·&nbsp;
[GitHub ❯](https://github.com/sebastienrousseau/skeletonic-stylus)
