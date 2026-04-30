---
title: "Registro de alteracoes"
name: "Skeletonic Stylus"
description: "Notas de release do Skeletonic Stylus, com a v1.1.7 completa."
layout: page
permalink: https://skeletonic.io/pt-br/registro-de-alteracoes/
author: Sebastien Rousseau
language: pt-br
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic changelog, notas de release, v1.1.7, semver"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v1.1.7 — 2026-04 (atual)

A revisao de "prontidao para release": a11y, cadeia de suprimentos,
higiene do repositorio.

### Acessibilidade (WCAG 2.2)
- **`$primary` escurecido** para `hsl(210, 100%, 42%)` para contraste AA
  contra texto branco em botoes / badges / links.
- **`$secondary` escurecido** para `hsl(195, 100%, 33%)`.
- Adicionados aneis **focus-visible** em cada elemento interativo.
- Adicionado wrapper **`@media (prefers-reduced-motion)`** no modulo
  de animacoes.
- Adicionada troca de tokens **`prefers-color-scheme: dark`**.
- Adicionado mixin **target-size(24px)** para atender WCAG 2.2 SC 2.5.8.
- Adicionados helpers **focus-not-obscured** de scroll-margin para
  headers fixos.

### Build &amp; cadeia de suprimentos
- **Cascade layers** — cada bloco agora vive em
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **CycloneDX SBOM** gerado como parte do tarball npm.
- **Budgets `size-limit`** aplicados no CI: limite de 8 KB gzipped na
  folha de estilos principal.
- **CVE-2023-44270** (retorno de linha do postcss) corrigido via
  `pnpm.overrides`.
- Procedencia + assinatura no workflow de publicacao npm
  (`--provenance --access public`).
- Removido plugin arquivado `stylelint-a11y` da configuracao de lint.

### Higiene do repositorio &amp; pacote para consumidores
- Diretorio legado `package/` removido; `dist/` e agora a unica fonte
  de verdade para consumidores.
- README reescrito para refletir os caminhos de instalacao da v1.1.7.
- `dist/` e commitado; `debug/` e gerado e incluido no gitignore.
- Novo `.github/workflows/npm-publish.yml` acionado por tags.

### Correcoes de bugs (P0)
- **Regressao de seletor pai `row $:after`** — substituido `$` avulso por
  `&` em `src/stylus/components/_grid.styl`.
- **`.alternate`** aplicava erroneamente `animation-direction: reverse`
  em vez de `alternate`.
- **Namespacing `.alert-*`** — `.alert.success` → `.alert.alert-success`
  para evitar colisoes com classes de estado.

[Notas completas do release v1.1.7 no GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases/tag/v1.1.7)

<hr class="hr-text" data-content="Historico">

## Releases anteriores

- **v1.1.6** — limpeza interna, atualizacao de dependencias.
- **v1.1.5** — adicionada paleta Material.
- **v1.1.0** — paleta Tachyons + refatoracao do grid.
- **v1.0.5** — ultimo release "legado" antes da revisao WCAG 2.2.
- **v1.0.0** — release publico inicial (2018).

Para um historico commit por commit, consulte a
[pagina de Releases no GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
