---
title: "Mga Paleta"
name: "Skeletonic Stylus"
description: "Mga colour palette na Material, Tachyons at web-safe na kasama sa Skeletonic Stylus v1.1.7."
layout: page
permalink: https://skeletonic.io/fil/mga-paleta/
date: 2026-04-08
author: Sebastien Rousseau
language: fil
theme_color: "hsl(210, 100%, 42%)"
keywords: "css palette, material, tachyons, websafe, design token"
---

Ang Skeletonic Stylus v1.1.7 ay nagpapadala ng **tatlong opsyonal na colour palette**, bawat isa ay ipinamamahagi bilang sariling minified na stylesheet kaya nagbabayad ka lamang para sa ginagamit mo.

| Palette | File | Laki (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | ≈17.4 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7.3 KB |
| Web-safe | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | ≈3.5 KB |

Nilo-load ng pahinang ito ang **Tachyons** na palette kaya ang mga colour utility class sa ibaba ay nire-render nang tama.

<hr class="hr-text" data-content="Mga Grey">

## Mga core grey ng Skeletonic

Ang core stylesheet ay nagpapadala ng isang accessible na 11-step na grey scale na inilalantad bilang
`--cl-grey-100` … `--cl-grey-1000`.

<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-100);">
    100
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-300);">
    300
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-500);color:#fff;">
    500
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-700);color:#fff;">
    700
  </div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-200);">
    200
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-400);">
    400
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-600);color:#fff;">
    600
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:var(--cl-grey-900);color:#fff;">
    900
  </div>
</div>

<hr class="hr-text" data-content="Brand">

## Mga kulay ng brand (v1.1.7 — AA contrast)

Sa v1.1.7 ang mga primary at secondary na token ay pinaitim upang matugunan ang
**WCAG 4.5:1** na contrast laban sa puting text agad mula sa kahon.

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1rem;">
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:hsl(210,100%,42%);color:#fff;">
    <strong>--cl-primary</strong><br>hsl(210 100% 42%)
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:hsl(195,100%,33%);color:#fff;">
    <strong>--cl-secondary</strong><br>hsl(195 100% 33%)
  </div>
  <div style="flex:1 1 0;padding:.75rem;text-align:center;background-color:#757c8a;color:#fff;">
    <strong>--cl-tertiary</strong><br>#757c8a
  </div>
</div>

> **Paalala.** `--cl-tertiary` (#757c8a) ay nakakamit ng 4.71:1 na
> contrast ratio laban sa puti — AA-conformant para sa **malaking teksto**
> (≥ 18 px bold / ≥ 24 px regular) ngunit hindi para sa body text.
> Ipares ito sa mas madilim na background o gamitin lamang para sa mga
> hindi esensyal na dekorasyong elemento.

<hr class="hr-text" data-content="Tachyons">

## Mga Tachyons palette utility class

Kapag nilo-load mo ang `skeletonic-tachyons.min.css` nakakakuha ka ng buong set ng
single-purpose na colour class — parehong shipped na artefact, opt-in na module.

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

Ang buong Tachyons palette spec ay nakadokumento sa
[tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/);
ang bersyon na narito ay ang kino-compile ng Skeletonic.

[Bumalik sa mga bahagi →](/fil/mga-bahagi/)
