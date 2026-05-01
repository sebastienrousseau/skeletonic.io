---
title: "Registro modifiche"
name: "Skeletonic Stylus"
description: "Note di rilascio per Skeletonic Stylus, con la v2.0.0 completa."
layout: page
permalink: https://skeletonic.io/it/registro-modifiche/
author: Sebastien Rousseau
language: it
theme_color: "hsl(210, 100%, 42%)"
keywords: "registro modifiche skeletonic, note di rilascio, v2.0.0, semver"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v2.0.0 — 2026-04 (attuale)

Il passaggio di "preparazione al rilascio": a11y, supply chain, igiene del repository.

### Accessibilita (WCAG 2.2)
- **`$primary` scurito** a `hsl(210, 100%, 42%)` per contrasto AA
  contro il testo bianco in pulsanti / badge / link.
- **`$secondary` scurito** a `hsl(195, 100%, 33%)`.
- Aggiunti anelli **focus-visible** su ogni elemento interattivo.
- Aggiunto wrapper **`@media (prefers-reduced-motion)`** attorno al
  modulo animazioni.
- Aggiunto scambio token **`prefers-color-scheme: dark`**.
- Aggiunto mixin **target-size(24px)** per soddisfare WCAG 2.2 SC 2.5.8.
- Aggiunti helper **focus-not-obscured** con scroll-margin per header fissi.

### Build &amp; supply chain
- **Cascade layers** — ogni blocco ora risiede in
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** generato come parte dell'archivio npm.
- **Budget `size-limit`** imposti nella CI: limite di 8 KB gzipped sul
  foglio di stile principale.
- **CVE-2023-44270** (parsing line return di postcss) corretta tramite `pnpm.overrides`.
- Provenienza + firma nel workflow di pubblicazione npm
  (`--provenance --access public`).
- Rimosso il plugin archiviato `stylelint-a11y` dalla configurazione lint.

### Igiene del repository &amp; pacchetto per i consumatori
- Directory legacy `package/` rimossa; `dist/` e ora l'unica fonte
  di verita per i consumatori.
- README riscritto per riflettere i percorsi di installazione v2.0.0.
- `dist/` e committato; `debug/` e generato e incluso nel gitignore.
- Nuovo `.github/workflows/npm-publish.yml` guidato da tag.

### Correzioni bug (P0)
- **Regressione del selettore padre `row $:after`** — sostituito `$` errato con
  `&` in `src/stylus/components/_grid.styl`.
- **`.alternate`** applicava erroneamente `animation-direction: reverse`
  invece di `alternate`.
- **Namespace `.alert-*`** — `.alert.success` → `.alert.alert-success`
  per evitare collisioni con classi di stato.

[Note complete del rilascio v2.0.0 su GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="Cronologia">

## Rilasci precedenti

- **v1.1.6** — pulizia interna, aggiornamento dipendenze.
- **v1.1.5** — aggiunta palette Material.
- **v1.1.0** — palette Tachyons + refactoring della griglia.
- **v1.0.5** — ultimo rilascio "legacy" prima del passaggio WCAG 2.2.
- **v1.0.0** — primo rilascio pubblico (2018).

Per una cronologia commit-per-commit consulta la
[pagina dei rilasci su GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
