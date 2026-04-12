---
title: "Über Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus ist eine Open-Source-Stylus-CSS-Bibliothek für barrierefreies, schnelles und modulares UI-Styling."
layout: page
permalink: https://skeletonic.io/de/ueber-uns/
date: 2026-04-08
author: Sebastien Rousseau
language: de
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, über uns, stylus, css framework, philosophie"
---

<p class="badges">
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Monatliche Downloads" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="npm-Version" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Bundle-Größe" src="https://img.shields.io/badge/gzipped-7.5%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="Lizenz" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## Die Kurzfassung

**Skeletonic Stylus** ist eine Open-Source-[Stylus](https://stylus-lang.com)-CSS-Bibliothek für barrierefreies, schnelles und modulares UI-Styling.

Entstanden 2018 als persönliches Experiment im **Ausliefern von weniger CSS** — ohne auf die Ergonomie einer echten Komponentenbibliothek zu verzichten. Acht Jahre später ist das Ziel unverändert.

## Was Skeletonic bietet

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Blitz" width="64" height="64" loading="lazy" decoding="async">
    <h3>Blitzschnell</h3>
    <p>Responsive Interfaces in Minuten gestalten und anpassen. Native CSS-Variablen, vordefinierte Klassen, ein 12-Spalten-Grid für jedes semantische HTML-Element.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Feder" width="64" height="64" loading="lazy" decoding="async">
    <h3>Leichtgewichtig</h3>
    <p>~7,5&nbsp;KB gzipped. Seiten laden schneller. Alle wesentlichen Bausteine bleiben enthalten.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Responsive Geräte" width="64" height="64" loading="lazy" decoding="async">
    <h3>Responsives Design</h3>
    <p>Entwickelt für Desktop und Mobilgeräte. Layouts passen sich jedem Gerät an. Touch-optimiert, durchgehend semantisches HTML.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Barrierefreiheit" width="64" height="64" loading="lazy" decoding="async">
    <h3>Barrierefreiheit</h3>
    <p>WCAG&nbsp;2.2 fest integriert: focus-visible-Ringe, AA-Kontrast, Skip-Link-Helfer, tastaturfreundliche Komponenten, Unterstützung für reduzierte Bewegung — kein zusätzliches Stylesheet, kein <code>aria-*</code>-Boilerplate.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Komponentenblöcke" width="64" height="64" loading="lazy" decoding="async">
    <h3>Komponentenbibliothek</h3>
    <p>Modulare CSS-Komponenten und Stylus-Mixins. Buttons, Formulare, Cards, Alerts, Badges, Paletten und Animationen — sauber, modular, sofort einsatzbereit.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="GitHub-Logo" width="64" height="64" loading="lazy" decoding="async">
    <h3>Frei &amp; Open Source</h3>
    <p>Entworfen, entwickelt und gepflegt von Sebastien Rousseau. Doppelt lizenziert unter <strong>MIT</strong> oder <strong>Apache&nbsp;2.0</strong>. Keine Gebühren, keine Lizenzkosten, auch für kommerzielle Nutzung.</p>
  </article>
</div>

## Vergleich mit Alternativen

Ein einziges, selbst gehostetes Stylesheet deckt Typografie, Buttons, Formulare, Cards, Tabellen, Paletten, Animationen und Utility-Klassen ab. Kein JavaScript. Kein erforderlicher Build-Schritt. Keine Peer-Dependencies zu Bootstrap, Tailwind oder Bulma.

| Feature | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Gzipped-Größe | **~7,5&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| WCAG-2.2-Konformität | **Integriert** | Teilweise | Manuell | Teilweise |
| Cascade Layers | **Ja (`@layer`)** | Nein | Nein | Nein |
| Dark Mode | **`prefers-color-scheme`** | Opt-in | Klassenbasiert | Opt-in |
| JavaScript erforderlich | **Nein** | Ja (Popper) | Nein | Nein |
| CycloneDX SBOM | **Ja** | Nein | Nein | Nein |
| Reduzierte Bewegung | **Berücksichtigt** | Teilweise | Manuell | Teilweise |
| Lizenz | MIT oder Apache 2.0 | MIT | MIT | MIT |

## Prinzipien

1. **Barrierefreiheit ist die Basis, nicht die Kür.** WCAG-2.2-Konformität ist in jede Komponente eingebaut, nicht als „Theme" nachgerüstet.
2. **Jedes Byte zählt.** Ein einziges ausgeliefertes Stylesheet darf das Seitengewicht-Budget nicht sprengen. Das 8&nbsp;KB-gzipped-Limit wird in der CI durchgesetzt.
3. **Cascade Layers schlagen Spezifitätskriege.** Alles gezielt überschreiben — ohne `!important`, ohne DOM-Reihenfolge-Tricks.
4. **Stylus ist nach wie vor eine gute Wahl.** Prägnant, ausdrucksstark und ermöglicht, die Bibliothek in ~3.000 lesbaren Zeilen zu halten.
5. **Langweilig ist ein Feature.** Keine JS-Abhängigkeiten. Keine Build-Zeit-Magie. Keine brechenden Umbenennungen. CSS-Klassen, die genau das tun, was ihr Name sagt.
6. **In Sekunden anpassbar.** Native CSS Custom Properties für Farben, Abstände, Typografie und Radien.
7. **Gehärtete Lieferkette.** Signierte npm-Provenienz. Gepinnte Dependabot-Updates. CVE-2023-44270 über Overrides gepatcht.

## Versionierung &amp; Semver

Skeletonic Stylus folgt [Semantic Versioning 2.0](https://semver.org).

| Stufe | Wann | Beispiel |
|---|---|---|
| **Major** | Entfernen oder Umbenennen einer öffentlichen Klasse, eines Mixins oder Tokens | 1.x → 2.0 |
| **Minor** | Hinzufügen einer neuen Komponente, eines Mixins oder Tokens | 1.1 → 1.2 |
| **Patch** | Bugfixes, A11y-Feinschliff, Performance, Sicherheit | 1.1.6 → 1.1.7 |

Alle öffentlichen Klassennamen, alle CSS Custom Properties und alle exportierten Stylus-Mixins sind Teil der öffentlichen API. Eine brechende Änderung erhält einen Major-Bump und einen Migrationsleitfaden.

## Verantwortung

Skeletonic Stylus wird entworfen, entwickelt und gepflegt von
[Sebastien Rousseau](https://sebastienrousseau.com). Doppelt lizenziert
unter [MIT](https://opensource.org/licenses/MIT) und
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Issues, Ideen und Beiträge sind willkommen —
[zum Beitragsleitfaden](/de/mitwirken/).
