---
title: "Tungkol sa Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Ang Skeletonic Stylus ay isang open-source na Stylus CSS library para sa accessible, mabilis, at modular na pag-istilo ng UI."
layout: page
permalink: https://skeletonic.io/fil/tungkol/
date: 2026-04-08
author: Sebastien Rousseau
language: fil
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, tungkol, stylus, css framework, pilosopiya"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Buwanang Download" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="npm Version" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Laki ng Bundle" src="https://img.shields.io/badge/gzip-8.3%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="Lisensya" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## Ang maikling bersyon

Ang **Skeletonic Stylus** ay isang open-source na [Stylus](https://stylus-lang.com)
CSS library para sa accessible, mabilis, at modular na pag-istilo ng UI.

Isinilang noong 2018 bilang isang personal na eksperimento sa **pagpapadala ng mas kaunting CSS** nang hindi binabaybay ang ergonomics ng isang tunay na component library. Walong taon na ang nakakaraan, hindi pa rin nagbabago ang layunin.

## Ano ang ibinibigay nito sa iyo

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Kidlat" width="64" height="64" loading="lazy" decoding="async">
    <h3>Napakabilis</h3>
    <p>Magdisenyo at mag-customize ng responsive na interface sa ilang minuto. Mga native CSS variable, predefined na klase, 12-column grid na sumasaklaw sa bawat semantic HTML element.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Balahibo" width="64" height="64" loading="lazy" decoding="async">
    <h3>Magaan</h3>
    <p>8.3&nbsp;KB gzipped. Mas mabilis mag-load ang mga pahina. Bawat pangunahing building block ay nandoon pa rin.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Mga responsive na device" width="64" height="64" loading="lazy" decoding="async">
    <h3>Responsive na disenyo</h3>
    <p>Ginawa para sa desktop at mobile. Ang mga layout ay umaakma sa anumang device. Touch-optimised, semantic HTML sa lahat ng dako.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Aksesibilidad" width="64" height="64" loading="lazy" decoding="async">
    <h3>Aksesibilidad</h3>
    <p>Kasama na ang WCAG&nbsp;2.2: focus-visible ring, AA contrast, skip-link helper, keyboard-friendly na component, reduced-motion support — walang dagdag na stylesheet, walang <code>aria-*</code> boilerplate.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Mga bloke ng component" width="64" height="64" loading="lazy" decoding="async">
    <h3>Component library</h3>
    <p>Modular na CSS component at Stylus mixin. Button, form, card, alert, badge, palette at animasyon — malinis, modular, handang i-drop in.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="GitHub mark" width="64" height="64" loading="lazy" decoding="async">
    <h3>Libre &amp; open source</h3>
    <p>Idinisenyo, ginawa, at pinapanatili ni Sebastien Rousseau. Dual-licensed sa ilalim ng <strong>MIT</strong> o <strong>Apache&nbsp;2.0</strong>. Walang bayad, walang gastos sa lisensya, kahit para sa komersyal na paggamit.</p>
  </article>
</div>

## Paano ito nagkukumpara

Isang self-hosted na stylesheet ang sumasaklaw sa typography, button, form, card, table, palette, animasyon at utility class. Walang JavaScript. Hindi kailangan ng build step. Walang peer dependency sa Bootstrap, Tailwind o Bulma.

| Tampok | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Laki (gzipped) | **8.3&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| WCAG 2.2 conformance | **Kasama na** | Bahagya | Manual | Bahagya |
| Cascade layer | **Oo (`@layer`)** | Hindi | Hindi | Hindi |
| Dark mode | **`prefers-color-scheme`** | Opt-in | Class-based | Opt-in |
| Kailangan ang JavaScript | **Hindi** | Oo (Popper) | Hindi | Hindi |
| CycloneDX SBOM | **Oo** | Hindi | Hindi | Hindi |
| Reduced-motion | **Sinusunod** | Bahagya | Manual | Bahagya |
| Lisensya | MIT o Apache 2.0 | MIT | MIT | MIT |

## Mga prinsipyo

1. **Ang aksesibilidad ay ang sahig, hindi ang kisame.** Ang pagsunod sa WCAG 2.2 ay kasama na sa bawat component, hindi ibinubolt-on bilang isang "theme".
2. **Mahalaga ang bawat byte.** Ang isang shipped na stylesheet ay hindi dapat sumira sa iyong page-weight budget. Ang 8&nbsp;KB gzipped na limitasyon ay ipinatutupad sa CI.
3. **Ang cascade layer ay mas mabuti kaysa sa specificity war.** Mag-override ng kahit ano nang may kumpiyansa — walang `!important`, walang DOM-order na trick.
4. **Maganda pa rin ang Stylus.** Maikli, expressive, at pinapanatili ang library sa ~3,000 nababasang linya.
5. **Ang boring ay isang tampok.** Walang JS dependency. Walang build-time magic. Walang breaking rename. CSS class na ginagawa nang eksakto ang sinasabi nila.
6. **Ma-theme sa ilang segundo.** Mga native CSS custom property para sa kulay, spacing, type at radii.
7. **Supply-chain hardened.** Signed npm provenance. Naka-pin na Dependabot update. CVE-2023-44270 patched sa pamamagitan ng override.

## Versioning &amp; semver

Ang Skeletonic Stylus ay sumusunod sa [Semantic Versioning 2.0](https://semver.org).

| Bump | Kailan | Halimbawa |
|---|---|---|
| **Major** | Pag-alis o pag-rename ng isang public class, mixin, o token | 1.x → 2.0 |
| **Minor** | Pagdagdag ng bagong component, mixin, o token | 1.1 → 1.2 |
| **Patch** | Pag-aayos ng bug, a11y polish, performance, seguridad | 1.1.6 → 1.1.7 |

Lahat ng public class name, lahat ng CSS custom property, at lahat ng exported Stylus mixin ay bahagi ng public API. Ang isang breaking change ay nakakakuha ng major bump at migration guide.

## Pamamahala

Ang Skeletonic Stylus ay idinisenyo, ginawa, at pinapanatili ni
[Sebastien Rousseau](https://sebastienrousseau.com). Dual-licensed
sa ilalim ng [MIT](https://opensource.org/licenses/MIT) at
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Mga isyu, ideya, at kontribusyon ay malugod na tinatanggap —
[tingnan ang gabay sa pag-aambag](/fil/mag-ambag/).
