# skeletonic.io

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7df45f6a0c3b49d283ef64d9944ab7ce)](https://app.codacy.com/gh/sebastienrousseau/skeletonic.io?utm_source=github.com&utm_medium=referral&utm_content=sebastienrousseau/skeletonic.io&utm_campaign=Badge_Grade_Settings)

The official documentation and homepage for **[Skeletonic Stylus v2.0.0](https://github.com/sebastienrousseau/skeletonic-stylus)** — the accessible, modular, cascade-layered CSS library for the post-bundler web.

Crafted with precision, zero dependencies, and 100% native browser baselines. Served live at **[https://skeletonic.io](https://skeletonic.io)** via GitHub Pages.

---

## Key Highlights

- **2026 CSS Baseline:** Built natively on `@layer`, OKLCH colours, CSS Grid, Container Queries, Popover API, CSS Anchor Positioning, and native View Transitions.
- **WCAG AAA Compliance:** Engineered for maximum accessibility, featuring strict ≥ 7.0:1 contrast ratios, keyboard-scrollable code regions, focusable skip-links, and full `prefers-reduced-motion` integration.
- **Ultra-Fast Performance:** Inlined critical CSS for sub-1s First Contentful Paint (FCP), paired with a 7.7 KB gzip (~6.7 KB Brotli) core bundle.
- **28 Locales & Native RTL:** Complete multi-language matrix supporting 28 locales with zero-overhead Right-to-Left (`dir="rtl"`) layout flipping via CSS logical properties.
- **Content-First SSG Pipeline:** Powered by **[Shokunin SSG](https://github.com/sebastienrousseau/shokunin) v0.0.34** (Rust) and an automated i18n post-processing build script (`scripts/build-i18n.sh`).

---

## Repository Layout

```text
skeletonic.io/
├── config.toml             # Shokunin SSG configuration (output_dir = "docs")
├── content/                # Markdown source pages (en + 27 localized subdirs)
│   ├── index.md            # / (Hero, feature matrix, quick start)
│   ├── getting-started.md  # /getting-started/ (Installation & setup)
│   ├── components.md       # /components/ (Complete 21-category interactive showcase)
│   ├── palettes.md         # /palettes/ (Material, Tachyons, web-safe & OKLCH systems)
│   ├── animations.md       # /animations/ (48 keyframe motion utilities)
│   ├── accessibility.md    # /accessibility/ (WCAG AAA standards & RTL guidance)
│   ├── tokens.md           # /tokens/ (Design tokens & custom properties)
│   ├── spacing.md          # /spacing/ (Golden-ratio spacing ladder)
│   ├── breakpoints.md      # /breakpoints/ (Responsive viewport grid scale)
│   ├── cascade-layers.md   # /cascade-layers/ (Native @layer specification)
│   ├── benchmarks.md       # /benchmarks/ (Framework performance comparisons)
│   ├── utilities.md        # /utilities/ (Class and HTML attribute utility matrix)
│   ├── changelog.md        # /changelog/ (Release history)
│   ├── security.md         # /security/ (Security policy & SBOM)
│   ├── contribute.md       # /contribute/ (Contribution guidelines)
│   ├── about.md            # /about/ (Project vision & architecture)
│   ├── contact.md          # /contact/ (Contact form page)
│   ├── privacy.md          # /privacy/ (Privacy policy)
│   ├── terms.md            # /terms/ (Terms of service)
│   └── 404.md              # /404/ (Custom 404 error page)
├── templates/tera/         # Tera HTML templates
│   ├── base.html           # Core HTML5 skeleton & JSON-LD schemas
│   ├── index.html          # Homepage & hero layout
│   ├── page.html           # Generic documentation page
│   └── contact.html        # Contact form layout
├── static/                 # Static assets mirrored into docs/
│   ├── css/                # Skeletonic Stylus v2.0.0 stylesheets + chrome.css + critical.css
│   ├── js/                 # Main JavaScript (search overlay, theme & palette switchers)
│   ├── images/             # Brand logos, icons, and social sharing banners
│   ├── CNAME               # Custom domain configuration (skeletonic.com)
│   ├── manifest.webmanifest# Progressive Web App manifest
│   └── robots.txt          # Search engine crawler instructions
├── scripts/
│   └── build-i18n.sh       # Automated multi-locale build and HTML post-processor
├── docs/                   # Compiled static HTML output (committed for GitHub Pages)
└── .github/workflows/      # Automated CI workflows (build-site.yml, codeql.yml, codacy-analysis.yml)
```

---

## Local Development & Build

### Prerequisites
Install **Shokunin (`ssg`)** v0.0.34 (Rust toolchain required):

```bash
cargo install --locked --git https://github.com/sebastienrousseau/shokunin --tag v0.0.34 ssg
```

### Build Everything (28 Locales)

To build the canonical English site and all 27 localized translations with complete post-processing, run:

```bash
bash scripts/build-i18n.sh
```

### Build English Only (Fast Rebuild)

For rapid local iteration on content or styling:

```bash
ssg --config config.toml
```

### Serve Locally

Serve the static output from `docs/` using any HTTP server:

```bash
python3 -m http.server 8000 --directory docs
```

Open **[http://localhost:8000](http://localhost:8000)** in your browser to inspect the build.

---

## CSS Architecture & Performance

The site applies a lightweight, render-optimised stylesheet architecture:

| Stylesheet | Path | Purpose |
| :--- | :--- | :--- |
| **Critical CSS** | Inlined into `<head>` | Above-the-fold styling for sub-1s First Contentful Paint |
| **Core Skeletonic** | `/css/skeletonic.min.css` | Native `@layer` core components, elements, and layout |
| **Chrome Theme** | `/css/chrome.css` | Site navigation, footer, frosted glass, & View Transitions |
| **Animations** | `/css/skeletonic-animations.min.css` | Optional keyframe motion module (`/animations/` only) |

---

## Content Frontmatter Standard

Every documentation page under `content/` incorporates standard metadata:

```yaml
---
title: "Components"
name: "Skeletonic Stylus"
description: "Live HTML examples of every Skeletonic Stylus component rendered with native CSS."
layout: page
permalink: https://skeletonic.io/components/
date: 2026-07-24
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic components, css library, wcag aaa, oklch, popover api"
---
```

---

## License

Copyright © 2021 – 2026 Skeletonic CSS. All rights reserved.

Licensed under the **[MIT License](https://opensource.org/licenses/MIT)**.
