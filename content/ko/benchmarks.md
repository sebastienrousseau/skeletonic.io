---
language: "ko"
title: "Benchmarks — Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Real CDN sizes for Skeletonic Stylus, Pico, Bulma, Bootstrap, Tailwind, Open Props, Beer CSS and Shoelace — gzip -9 and brotli -q 11, with reproduction commands."
layout: page
permalink: https://skeletonic.io/ko/benchmarks/
date: 2026-04-30
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css framework size, brotli benchmark, tailwind v4 size, pico css size, bulma size, bootstrap size, skeletonic stylus size"
---

> **이 섹션에 대한 자세한 문서는 현재 아래에 영어로 제공됩니다. 완전한 번역을 위해 노력하고 있습니다.** <!-- i18n-summary -->

CSS framework "size" claims are usually marketing. This page reports
the actual bytes returned by `wc -c`, `gzip -9`, and `brotli -q 11` for
the canonical CDN bundle each project documents on its homepage.

Numbers were gathered on **2026-04-30** with `curl 8.7.1` against
jsDelivr. No purging, no tree-shaking, no per-page optimisation. The
reproduction commands at the bottom of this page run in about 30
seconds — please verify them yourself before quoting any number here.

<hr class="hr-text" data-content="Results">

## Bundle sizes — bytes returned by `wc -c`

| Framework | Version | Raw | gzip −9 | brotli −q 11 |
|---|---|---:|---:|---:|
| **Skeletonic Stylus** | 2.0.0 | **40,567** | **7,981** | **6,916** |
| Pico CSS | 2.1.1 | 83,319 | 11,651 | 10,098 |
| Bootstrap | 5.3.8 | 232,111 | 30,887 | 22,970 |
| Bulma | 1.0.4 | 677,931 | 64,854 | 36,338 |
| Beer CSS | 4.0.21 | 90,191 | 16,985 | 14,748 |
| Tailwind Play CDN (JS) | latest | 407,279 | 123,126 | 104,668 |
| Open Props *(tokens only)* | 1.7.23 | 29,566 | 7,682 | 6,250 |
| Shoelace `themes/light.css` *(tokens only)* | 2.20.1 | 19,536 | 4,179 | 3,180 |

All numbers are bytes. **Brotli** is what production CDNs serve over
HTTPS in 2026 — that's the line that matters for real-world transfer.

<hr class="hr-text" data-content="What was measured">

## What was measured

| Key | URL |
|---|---|
| Skeletonic | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` |
| Pico CSS | `https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css` |
| Bootstrap | `https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css` |
| Bulma | `https://cdn.jsdelivr.net/npm/bulma@1/css/bulma.min.css` |
| Beer CSS | `https://cdn.jsdelivr.net/npm/beercss@latest/dist/cdn/beer.min.css` |
| Tailwind Play CDN | `https://cdn.tailwindcss.com` |
| Open Props | `https://cdn.jsdelivr.net/npm/open-props@latest/open-props.min.css` |
| Shoelace | `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@latest/dist/themes/light.css` |

<hr class="hr-text" data-content="Caveats">

## Reading the numbers honestly

- **Open Props** and **Shoelace `themes/light.css`** are token
  libraries, not component frameworks. They give you `--cl-*`-style
  design tokens; you still write every component yourself. Listing
  them as "smaller" is misleading without that context — they aren't
  solving the same problem as Skeletonic, Bootstrap, Bulma, or Pico.

- **Tailwind Play CDN** (`cdn.tailwindcss.com`) is a JavaScript shim
  that compiles utility classes at runtime. The 407 KB raw / 123 KB
  gzip / 105 KB brotli is the **JS** bundle, not CSS. A production
  Tailwind v4 build is purged and typically ships well under 10 KB
  gzip — but only if you've added the Oxide build pipeline that
  Skeletonic was designed to avoid. **If you want JS-free, no-toolchain
  CSS, the Tailwind Play CDN is the only Tailwind option, and it is
  the largest payload in this table by an order of magnitude.**

- **Bootstrap** numbers above are CSS only. The full
  `bootstrap.bundle.min.js` (Popper + Bootstrap JS, required for
  modals / dropdowns / tooltips) adds **≈ 81 KB gzip** on top.
  Skeletonic ships **zero** JS.

- **Bulma** ships everything by default. A modular Bulma build is
  much smaller, but again costs you a Sass pipeline.

- **Pico CSS** is the closest no-build-step competitor at the same
  weight class. Pico is *classless* — semantic HTML only, no grid
  system, no utility classes, limited customisation surface.
  Skeletonic is class-based; different ergonomic trade-off, similar
  weight.

- **Skeletonic 2.0.0** absorbs the v2.0.0 RTL refactor (95
  logical-property declarations, 19 `[dir="rtl"]` overrides). The
  pre-RTL bundle was ≈ 7.5 KB gzip — that's the historical number you
  may see in older docs.

<hr class="hr-text" data-content="Reproduce">

## Reproduce in 30 seconds

```bash
mkdir -p /tmp/skel-bench && cd /tmp/skel-bench

curl -sL "https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css" -o skeletonic.css
curl -sL "https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css"                                   -o bootstrap.css
curl -sL "https://cdn.jsdelivr.net/npm/bulma@1/css/bulma.min.css"                                                  -o bulma.css
curl -sL "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"                                           -o pico.css
curl -sL "https://cdn.jsdelivr.net/npm/open-props@latest/open-props.min.css"                                       -o open-props.css
curl -sL "https://cdn.jsdelivr.net/npm/beercss@latest/dist/cdn/beer.min.css"                                       -o beer.css
curl -sL "https://cdn.tailwindcss.com"                                                                              -o tailwind.css
curl -sL "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@latest/dist/themes/light.css"                      -o shoelace.css

printf '%-14s %10s %10s %10s\n' FILE RAW GZIP BROTLI
for f in *.css; do
  printf '%-14s %10d %10d %10d\n' "$f" \
    "$(wc -c < "$f")" \
    "$(gzip -9c "$f" | wc -c)" \
    "$(brotli -q 11 -c "$f" | wc -c)"
done
```

If you don't have `brotli` on your system, install it: `brew install
brotli` on macOS, `apt-get install brotli` on Debian/Ubuntu. The
numbers in the table above are exactly what those commands return.

[Read more about positioning in 2026 →](/about/) ·
[How to install Skeletonic →](/getting-started/)
