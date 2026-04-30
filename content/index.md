---
title: "Skeletonic Stylus — Accessible, RTL-ready CSS, 8.3 KB gzip"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus is a class-based, JS-free, RTL-ready Stylus CSS library — WCAG 2.2 AA, cascade-layered, 8.3 KB gzipped / 6.9 KB brotli — for the post-bundler hypermedia web."
layout: index
permalink: https://skeletonic.io/
date: 2026-04-30
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css, stylus, css framework, accessible css, wcag 2.2, rtl, logical properties, cascade layers, design system, no javascript, htmx"
---

Class-based CSS for the post-bundler web. **8.3&nbsp;KB&nbsp;gzip · 6.9&nbsp;KB&nbsp;brotli**.
WCAG&nbsp;2.2 AA. RTL-ready. Cascade-layered. Zero JavaScript.
One `<link>` and you're done.

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
```

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
| **Skeletonic Stylus** | 1.1.7 | **6.9 KB** | **8.3 KB** |
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
      href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css">
```

That's the whole install.

## Ready when you are

[Browse components ❯](/components/) &nbsp;·&nbsp;
[Framework benchmarks ❯](/benchmarks/) &nbsp;·&nbsp;
[Read the docs ❯](/getting-started/) &nbsp;·&nbsp;
[GitHub ❯](https://github.com/sebastienrousseau/skeletonic-stylus)
