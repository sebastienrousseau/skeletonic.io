---
title: "Aksesibilidad — WCAG 2.2 sa v1.1.7"
name: "Skeletonic Stylus"
description: "Ano ang ipinapadala ng v1.1.7 agad mula sa kahon para sa WCAG 2.2 conformance — focus ring, contrast, skip link, motion, at dark mode."
layout: page
permalink: https://skeletonic.io/fil/aksesibilidad/
date: 2026-04-08
author: Sebastien Rousseau
language: fil
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, aksesibilidad, focus visible, skip link, prefers reduced motion, contrast"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Ang Skeletonic Stylus v1.1.7 ay nagpapadala ng WCAG 2.2 conformance bilang default
> na gawi, hindi bilang opsyonal na theme.** Idinodokumento ng pahinang ito kung ano ang
> kasama na at kung anong mixin ang maaari mong i-opt in para sa mas detalyadong kontrol.

<hr class="hr-text" data-content="Agad mula sa kahon">

## Ano ang nakukuha mo nang libre

| WCAG 2.2 SC | Ano ang ginagawa ng v1.1.7 | Paano i-verify |
|---|---|---|
| **1.4.3 Contrast (Minimum) — AA** | `--cl-primary` at `--cl-secondary` pinaitim sa ≥ 4.5:1 laban sa puti | DevTools → contrast checker |
| **1.4.11 Non-text Contrast — AA** | Mga border ng form, button, badge lahat ay ≥ 3:1 | Pareho |
| **2.4.7 Focus Visible — AA** | Bawat focusable na element ay may `:focus-visible` ring (dilaw sa madilim na background, asul sa maliwanag) | `Tab` sa anumang pahina |
| **2.4.11 Focus Not Obscured — AA (bago sa 2.2)** | Ang sticky header ay may pinababang taas + focus scroll-margin | `Tab` lampas sa sticky header |
| **2.5.8 Target Size — AA (bago sa 2.2)** | Button / link: ≥ 24×24 CSS px na hit area | DevTools box model |
| **1.4.12 Text Spacing — AA** | Lahat ng element ay tumutupad sa user line-height / letter-spacing override | I-override sa DevTools |
| **2.3.3 Animation from Interactions — AAA** | Lahat ng animation class ay nakabalot sa `@media (prefers-reduced-motion: no-preference)` | Reduce-motion sa antas ng OS |
| **1.4.10 Reflow — AA** | Gumagana ang layout sa 320 px nang walang horizontal scroll | DevTools narrow viewport |
| **Dark mode** | `prefers-color-scheme: dark` awtomatikong nagpapalit ng mga token | OS dark-mode toggle |

<hr class="hr-text" data-content="Mga Mixin">

## Mga Stylus mixin na maaari mong i-opt in

Kung nag-co-compile ka mula sa source, ang mga sumusunod na mixin ay available sa
`src/stylus/utilities/mixins.styl`:

| Mixin | Gamit |
|---|---|
| `focus-ring()` | High-contrast na focus ring na tumutupad sa `:focus-visible` |
| `visually-hidden()` | Text na para lamang sa screen reader na nananatiling focusable |
| `skip-link()` | Anchor na nagiging visible kapag naka-focus |
| `reduced-motion()` | Binabalot ang anumang bloke sa `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Mga pagsasaayos para sa Windows High Contrast Mode |
| `target-size(24px)` | Nagpa-pad ng anumang naki-click sa minimum na tap target |

Halimbawa:

```stylus
// Mag-apply ng malakas na focus ring sa isang custom na button
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Skip link">

## Ang skip-link na helper

I-drop ito **unang bagay sa loob ng `<body>`**:

```html
<a href="#main-content" class="skip-link">Lumaktaw sa pangunahing nilalaman</a>
```

Ang class ay **wala** sa core stylesheet (kaya hindi gumagalaw ang bigat ng pahina); ito ay isang 4-linya na snippet na iko-compose mo mismo o gamitin ang kasama na `skip-link()` na mixin. Ginagamit ito ng site na ito — i-focus ang pahina at pindutin ang Tab upang makita itong lumabas sa kaliwang itaas.

<hr class="hr-text" data-content="Pag-verify">

## Pag-verify sa iyong sariling mga pahina

Ang library ay nagpapadala ng isang `a11y-test.mjs` na script sa ilalim ng `scripts/` na nagpapatakbo ng
[axe-core](https://github.com/dequelabs/axe-core) laban sa bawat URL na ibinibigay mo.

```bash
node scripts/a11y-test.mjs https://example.com
```

Pinapatakbo ng CI ang script na ito laban sa `dist/index.html` na showcase page sa bawat push.

[Basahin ang tungkol sa v1.1.7 release →](/fil/talaan-ng-pagbabago/) ·
[Tingnan ang pahina ng seguridad →](/fil/seguridad/)
