---
title: "Änderungsprotokoll"
name: "Skeletonic Stylus"
description: "Release-Hinweise fuer Skeletonic Stylus, mit v2.0.0 im Detail."
layout: page
language: de
permalink: https://skeletonic.io/de/aenderungsprotokoll/
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic aenderungsprotokoll, release notes, v2.0.0, semver"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v2.0.0 — 2026-04 (aktuell)

Der Release-Readiness-Durchlauf: Barrierefreiheit, Lieferkette, Repository-Hygiene.

### Barrierefreiheit (WCAG 2.2)
- **`$primary` abgedunkelt** auf `hsl(210, 100%, 42%)` fuer AA-Kontrast
  gegen weissen Text in Buttons, Badges und Links.
- **`$secondary` abgedunkelt** auf `hsl(195, 100%, 33%)`.
- **focus-visible**-Ringe auf jedem interaktiven Element hinzugefuegt.
- **`@media (prefers-reduced-motion)`**-Wrapper um das
  Animationsmodul hinzugefuegt.
- **`prefers-color-scheme: dark`**-Token-Tausch hinzugefuegt.
- **target-size(24px)**-Mixin hinzugefuegt, um WCAG 2.2 SC 2.5.8 zu erfuellen.
- **focus-not-obscured**-scroll-margin-Helfer fuer Sticky-Header hinzugefuegt.

### Build und Lieferkette
- **Cascade Layers** — jeder Block lebt nun in
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** als Teil des npm-Tarballs generiert.
- **`size-limit`-Budgets** in CI erzwungen: 8-KB-gzipped-Obergrenze fuer das
  Core-Stylesheet.
- **CVE-2023-44270** (postcss line return) via `pnpm.overrides` behoben.
- Provenance und Signierung im npm-Publish-Workflow
  (`--provenance --access public`).
- Archiviertes `stylelint-a11y`-Plugin aus der Lint-Konfiguration entfernt.

### Repository-Hygiene und Consumer-Paket
- Legacy-Verzeichnis `package/` entfernt; `dist/` ist nun die einzige
  Quelle der Wahrheit fuer Nutzer.
- README ueberarbeitet, um die v2.0.0-Installationspfade abzubilden.
- `dist/` wird committet; `debug/` wird generiert und per gitignore ausgeschlossen.
- Neuer `.github/workflows/npm-publish.yml` ist Tag-gesteuert.

### Fehlerbehebungen (P0)
- **`row $:after` Parent-Selector-Regression** — versehentliches `$` durch
  `&` in `src/stylus/components/_grid.styl` ersetzt.
- **`.alternate`** wendete faelschlicherweise `animation-direction: reverse`
  statt `alternate` an.
- **`.alert-*`-Namensraeume** — `.alert.success` zu `.alert.alert-success`
  geaendert, um Kollisionen mit Statusklassen zu vermeiden.

[Vollstaendige v2.0.0-Release-Notes auf GitHub](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="Historie">

## Aeltere Releases

- **v1.1.6** — interne Bereinigung, Abhaengigkeitsaktualisierungen.
- **v1.1.5** — Material-Palette hinzugefuegt.
- **v1.1.0** — Tachyons-Palette und Grid-Refactoring.
- **v1.0.5** — letzter Legacy-Release vor dem WCAG-2.2-Durchlauf.
- **v1.0.0** — erster oeffentlicher Release (2018).

Eine Commit-fuer-Commit-Historie findet sich auf der
[GitHub-Releases-Seite](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
