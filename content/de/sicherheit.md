---
title: "Sicherheit & Lieferkette"
name: "Skeletonic Stylus"
description: "So sichert Skeletonic Stylus v1.1.7 seine Build-Pipeline, signiert Releases und liefert ein SBOM."
layout: page
language: de
permalink: https://skeletonic.io/de/sicherheit/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css sicherheit, sbom, cyclonedx, npm provenance, openssf scorecard, supply chain"
---

## Leistung

- **45,7&nbsp;KB minifiziert, 8,3&nbsp;KB gzipped, 6,9&nbsp;KB brotli** fuer das gesamte Core-Stylesheet.
- **Kein JavaScript** — pures Stylus zu purem CSS, keine Laufzeitkosten.
- **Cascade-Layered** — Ueberschreibungen greifen ohne `!important`.
- **`size-limit`-Budget in CI erzwungen** bei jedem Commit.

Leistung ist eine Sicherheitskontrolle. Jedes nicht ausgelieferte Byte ist ein Byte weniger, das auditiert, signiert und verifiziert werden muss.

## Lieferkette im Ueberblick

| Kontrolle | Status in v1.1.7 |
|---|---|
| **CycloneDX SBOM** | Bei jedem Release generiert, committet unter `dist/sbom.json` |
| **npm provenance** | Aktiviert (`--provenance --access public`) |
| **Signierte Git-Tags** | SSH-signiert durch den Maintainer-Schluessel |
| **Gepinnter Dependabot** | Woechentliche Aktualisierungen, automatisch geprueft |
| **Groessenbudgets** | `size-limit` mit 8-KB-gzipped-Obergrenze, bricht CI bei Regression ab |
| **Lint** | `stylelint` + a11y-Assertions bei jedem Push |
| **CodeQL** | Aktiviert fuer `javascript` und Konfigurationsdateien |
| **CVE-2023-44270** | **Behoben** via `pnpm.overrides` durch Flush von `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Jeder veroeffentlichte Tarball enthaelt ein CycloneDX SBOM unter `dist/sbom.json`.
Ein frisch installiertes Paket laesst sich wie folgt verifizieren:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "1.1.7"
```

Das SBOM wird mit `cyclonedx-npm` waehrend des Publish-Workflows generiert.

<hr class="hr-text" data-content="Provenance">

## npm Provenance

Das veroeffentlichte Artefakt wird mittels
[npm Package Provenance](https://docs.npmjs.com/generating-provenance-statements) signiert.

Nach der Installation laesst es sich wie folgt verifizieren:

```bash
npm view @sebastienrousseau/skeletonic-stylus@1.1.7 --json | \
  jq '.dist."npm-signature"'
```

Die signierte Attestierung verknuepft den Tarball mit dem exakten GitHub-Actions-Lauf, der ihn erzeugt hat.

<hr class="hr-text" data-content="CVEs">

## Bekannte CVEs und Patches

| CVE | Schweregrad | Status |
|---|---|---|
| **CVE-2023-44270** (postcss line return parsing) | Mittel | **Behoben** in v1.1.7 via `pnpm.overrides` durch Upgrade von `postcss` auf >= 8.4.31 |

Die Snyk-Advisory-Datenbank und der GitHub-Security-Advisories-Feed werden kontinuierlich ueberwacht; Sicherheitspatches erscheinen als **Patch-Level-Releases**.

<hr class="hr-text" data-content="Meldung">

## Eine Sicherheitsluecke melden

Bitte **kein** oeffentliches GitHub-Issue fuer Sicherheitsmeldungen erstellen.
Stattdessen den privaten Kanal nutzen:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Ziel ist es, Meldungen innerhalb von **72 Stunden** zu bestaetigen und einen Fix innerhalb von **14 Tagen** fuer moderate Probleme bzw. **48 Stunden** fuer kritische Probleme bereitzustellen.

[Zurueck zur Startseite](/de/) · [Aenderungsprotokoll lesen](/de/aenderungsprotokoll/)
