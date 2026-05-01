---
title: "Sakerhet &amp; leveranskedja"
name: "Skeletonic Stylus"
description: "Hur Skeletonic Stylus v2.0.0 sakrar sin byggpipeline, signerar releaser och levererar en SBOM."
layout: page
permalink: https://skeletonic.io/sv/sakerhet/
date: 2026-04-08
author: Sebastien Rousseau
language: sv
theme_color: "hsl(210, 100%, 42%)"
keywords: "css sakerhet, sbom, cyclonedx, npm proveniens, openssf scorecard, leveranskedja"
---

## Prestanda

- **45,7&nbsp;KB minifierad · 8,3&nbsp;KB gzippad · 6,9&nbsp;KB brotli** for det fullstandiga karn-stylesheetet.
- **Noll JavaScript** — ren Stylus → ren CSS, ingen runtimekostnad.
- **Cascade-layered** — overskrivningar vinner utan `!important`.
- **`size-limit`-budget tillampad** i CI vid varje commit.

Prestanda ar en sakerhetsatgard. Varje byte som inte levereras ar en farre
byte att granska, signera och verifiera.

## Leveranskedja i korthet

| Kontroll | v2.0.0-status |
|---|---|
| **CycloneDX SBOM** | Genereras vid varje release, sparas under `dist/sbom.json` |
| **npm-proveniens** | Aktiverad (`--provenance --access public`) |
| **Signerade git-taggar** | SSH-signerade av forvaltar-nyckel |
| **Lastad Dependabot** | Veckovisa uppdateringar, automatiskt granskade |
| **Storleksbudgetar** | `size-limit` 8 KB gzippat tak, misslyckas i CI vid regression |
| **Linting** | `stylelint` + a11y-prov vid varje push |
| **CodeQL** | Aktiverad for `javascript` och konfigurationsfiler |
| **CVE-2023-44270** | **Patchad** via `pnpm.overrides` som uppgraderar `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Varje publicerad tarball inkluderar en CycloneDX SBOM pa `dist/sbom.json`.
Du kan verifiera ett nyinstallerat paket med:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

SBOM:en genereras med `cyclonedx-npm` under publiceringsarbetsfloden.

<hr class="hr-text" data-content="Proveniens">

## npm-proveniens

Den publicerade artefakten ar signerad med
[npm-paketproveniens](https://docs.npmjs.com/generating-provenance-statements).

Du kan verifiera den efter installation med:

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

Den signerade attesteringen lankar tarballen tillbaka till den exakta
GitHub Actions-korningen som producerade den.

<hr class="hr-text" data-content="CVE:er">

## Kanda CVE:er &amp; patchar

| CVE | Allvarlighetsgrad | Status |
|---|---|---|
| **CVE-2023-44270** (postcss radreturtolkning) | Mattlig | **Patchad** i v2.0.0 via `pnpm.overrides` som uppgraderar `postcss` till ≥ 8.4.31 |

Snyks sakerhetsdatabas och GitHub Security Advisories-floden bevakas kontinuerligt;
sakerhetspatchar levereras som **patchniva-releaser**.

<hr class="hr-text" data-content="Rapportering">

## Rapportera en sarbarhet

Var vanlig och oppna **inte** ett offentligt GitHub-arende for en sakerhetsrapport.
Anvand istallet den privata kanalen pa:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Rapporter bekraftas inom **72 timmar** och en fix levereras inom
**14 dagar** for mattliga problem, **48 timmar** for kritiska.

[Tillbaka till startsidan →](/sv/) · [Las andringsloggen →](/sv/andringslogg/)
