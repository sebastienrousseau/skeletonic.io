---
title: "Despre Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus este o bibliotecă CSS Stylus open-source pentru stilizare UI accesibilă, rapidă și modulară."
layout: page
permalink: https://skeletonic.io/ro/despre/
date: 2026-04-08
author: Sebastien Rousseau
language: ro
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, despre, stylus, framework css, filosofie"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="Stele GitHub" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Descărcări lunare" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="Versiune npm" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Dimensiune bundle" src="https://img.shields.io/badge/gzip-8.0%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="Licență" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## Pe scurt

**Skeletonic Stylus** este o bibliotecă CSS [Stylus](https://stylus-lang.com) open-source pentru stilizare UI accesibilă, rapidă și modulară.

Născută în 2018 ca experiment personal în **livrarea unui volum minim de CSS** — fără a renunța la ergonomia unei biblioteci reale de componente. Opt ani mai târziu, obiectivul rămâne neschimbat.

## Ce oferă

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Fulger" width="64" height="64" loading="lazy" decoding="async">
    <h3>Rapiditate fulgerătoare</h3>
    <p>Proiectează și personalizează interfețe responsive în câteva minute. Variabile CSS native, clase predefinite, un grid de 12 coloane pentru orice element HTML semantic.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Pană" width="64" height="64" loading="lazy" decoding="async">
    <h3>Ușoară</h3>
    <p>8,3&nbsp;KB gzipped. Paginile se încarcă mai repede. Toate blocurile esențiale sunt incluse.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Dispozitive responsive" width="64" height="64" loading="lazy" decoding="async">
    <h3>Design responsive</h3>
    <p>Realizată pentru desktop și mobil. Layout-urile se adaptează la orice dispozitiv. Optimizată pentru touch, HTML semantic peste tot.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Accesibilitate" width="64" height="64" loading="lazy" decoding="async">
    <h3>Accesibilitate</h3>
    <p>WCAG&nbsp;2.2 integrat: inele focus-visible, contrast AA, helpere skip-link, componente prietenoase cu tastatura, suport pentru mișcare redusă — fără stylesheet suplimentar, fără boilerplate <code>aria-*</code>.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Blocuri de componente" width="64" height="64" loading="lazy" decoding="async">
    <h3>Bibliotecă de componente</h3>
    <p>Componente CSS modulare și mixin-uri Stylus. Butoane, formulare, carduri, alerte, badge-uri, palete și animații — curate, modulare, gata de utilizat.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="Logo GitHub" width="64" height="64" loading="lazy" decoding="async">
    <h3>Gratuită &amp; open source</h3>
    <p>Proiectată, dezvoltată și întreținută de Sebastien Rousseau. Licență duală sub <strong>MIT</strong> sau <strong>Apache&nbsp;2.0</strong>. Fără taxe, fără costuri de licențiere, inclusiv pentru uz comercial.</p>
  </article>
</div>

## Comparație cu alternativele

Un singur stylesheet auto-găzduit acoperă tipografia, butoanele, formularele, cardurile, tabelele, paletele, animațiile și clasele utilitare. Fără JavaScript. Fără pas de build obligatoriu. Fără dependențe peer de Bootstrap, Tailwind sau Bulma.

| Funcționalitate | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Dimensiune gzipped | **8,3&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| Conformitate WCAG 2.2 | **Integrată** | Parțial | Manual | Parțial |
| Cascade layers | **Da (`@layer`)** | Nu | Nu | Nu |
| Mod întunecat | **`prefers-color-scheme`** | Opt-in | Bazat pe clase | Opt-in |
| JavaScript necesar | **Nu** | Da (Popper) | Nu | Nu |
| CycloneDX SBOM | **Da** | Nu | Nu | Nu |
| Mișcare redusă | **Respectată** | Parțial | Manual | Parțial |
| Licență | MIT sau Apache 2.0 | MIT | MIT | MIT |

## Principii

1. **Accesibilitatea este baza, nu opționalul.** Conformitatea WCAG 2.2 este integrată în fiecare componentă, nu adăugată ulterior ca „temă".
2. **Fiecare octet contează.** Un singur stylesheet livrat nu trebuie să depășească bugetul de greutate al paginii. Limita de 8&nbsp;KB gzipped este impusă în CI.
3. **Cascade layers bat războaiele de specificitate.** Suprascrie orice cu încredere — fără `!important`, fără trucuri cu ordinea DOM.
4. **Stylus este încă o alegere excelentă.** Concis, expresiv și permite bibliotecii să se mențină în ~3.000 de linii lizibile.
5. **Previzibilul este o virtute.** Fără dependențe JS. Fără magie la build. Fără redenumiri disruptive. Clase CSS care fac exact ceea ce spune numele lor.
6. **Personalizabil în secunde.** Proprietăți CSS native personalizate pentru culori, spațiere, tipografie și raze.
7. **Lanț de aprovizionare securizat.** Proveniență npm semnată. Actualizări Dependabot fixate. CVE-2023-44270 rezolvat prin overrides.

## Versionare &amp; semver

Skeletonic Stylus urmează [Semantic Versioning 2.0](https://semver.org).

| Nivel | Când | Exemplu |
|---|---|---|
| **Major** | Eliminarea sau redenumirea unei clase publice, a unui mixin sau token | 1.x → 2.0 |
| **Minor** | Adăugarea unei componente, a unui mixin sau token nou | 1.1 → 1.2 |
| **Patch** | Remedieri de erori, rafinări a11y, performanță, securitate | 1.1.6 → 2.0.0 |

Toate numele de clase publice, toate proprietățile CSS personalizate și toate mixin-urile Stylus exportate fac parte din API-ul public. O modificare disruptivă primește un bump major și un ghid de migrare.

## Administrare

Skeletonic Stylus este proiectată, dezvoltată și întreținută de
[Sebastien Rousseau](https://sebastienrousseau.com). Licență duală
sub [MIT](https://opensource.org/licenses/MIT) și
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Problemele, ideile și contribuțiile sunt binevenite —
[consultă ghidul de contribuție](/ro/contribuie/).
