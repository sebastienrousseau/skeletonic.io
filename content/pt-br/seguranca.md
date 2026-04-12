---
title: "Seguranca &amp; cadeia de suprimentos"
name: "Skeletonic Stylus"
description: "Como o Skeletonic Stylus v1.1.7 protege seu pipeline de build, assina releases e inclui um SBOM."
layout: page
permalink: https://skeletonic.io/pt-br/seguranca/
date: 2026-04-08
author: Sebastien Rousseau
language: pt-br
theme_color: "hsl(210, 100%, 42%)"
keywords: "seguranca css, sbom, cyclonedx, procedencia npm, openssf scorecard, cadeia de suprimentos"
---

## Performance

- **39,9&nbsp;KB minificado · 7,5&nbsp;KB gzipped · 6,3&nbsp;KB brotli** para a folha de estilos principal completa.
- **Zero JavaScript** — Stylus puro → CSS puro, sem custo de execucao.
- **Cascade-layered** — sobrescrita vence sem `!important`.
- **Budget `size-limit` aplicado** no CI em cada commit.

Performance e um controle de seguranca. Cada byte nao enviado e um byte
a menos para auditar, assinar e verificar.

## Resumo da cadeia de suprimentos

| Controle | Status na v1.1.7 |
|---|---|
| **CycloneDX SBOM** | Gerado a cada release, commitado em `dist/sbom.json` |
| **Procedencia npm** | Ativada (`--provenance --access public`) |
| **Tags git assinadas** | Assinadas via SSH pela chave do mantenedor |
| **Dependabot fixado** | Atualizacoes semanais, revisadas automaticamente |
| **Budgets de tamanho** | `size-limit` com limite de 8 KB gzipped, falha no CI em caso de regressao |
| **Lint** | `stylelint` + assercoes de a11y em cada push |
| **CodeQL** | Ativado para `javascript` e arquivos de configuracao |
| **CVE-2023-44270** | **Corrigido** via `pnpm.overrides` atualizando `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

Cada tarball publicado inclui um CycloneDX SBOM em `dist/sbom.json`.
Voce pode verificar um pacote recem-instalado com:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "1.1.7"
```

O SBOM e gerado com `cyclonedx-npm` durante o workflow de publicacao.

<hr class="hr-text" data-content="Procedencia">

## Procedencia npm

O artefato publicado e assinado utilizando a
[procedencia de pacotes npm](https://docs.npmjs.com/generating-provenance-statements).

Voce pode verifica-lo apos a instalacao com:

```bash
npm view @sebastienrousseau/skeletonic-stylus@1.1.7 --json | \
  jq '.dist."npm-signature"'
```

A atestacao assinada vincula o tarball a execucao exata do GitHub Actions
que o produziu.

<hr class="hr-text" data-content="CVEs">

## CVEs conhecidos &amp; correcoes

| CVE | Gravidade | Status |
|---|---|---|
| **CVE-2023-44270** (parsing de retorno de linha do postcss) | Moderada | **Corrigido** na v1.1.7 via `pnpm.overrides` atualizando `postcss` para ≥ 8.4.31 |

O banco de dados de advisories do Snyk e o feed de GitHub Security
Advisories sao monitorados continuamente; patches de seguranca sao
entregues como **releases de nivel patch**.

<hr class="hr-text" data-content="Relatar">

## Relatar uma vulnerabilidade

Por favor, **nao** abra uma issue publica no GitHub para relatar
vulnerabilidades. Em vez disso, use o canal privado em:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

Os relatorios sao confirmados em **72 horas**. Correcoes sao entregues
em **14 dias** para problemas moderados e **48 horas** para criticos.

[Voltar para a pagina inicial →](/pt-br/) · [Ler o registro de alteracoes →](/pt-br/registro-de-alteracoes/)
