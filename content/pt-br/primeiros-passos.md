---
title: "Primeiros passos com o Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Instale o Skeletonic Stylus via npm ou CDN, importe no seu build Stylus e sobrescreva variaveis em segundos."
layout: page
permalink: https://skeletonic.io/pt-br/primeiros-passos/
date: 2026-04-08
author: Sebastien Rousseau
language: pt-br
theme_color: "hsl(210, 100%, 42%)"
keywords: "instalar skeletonic, configurar stylus, css cdn, primeiros passos"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Introducao

Novo no Skeletonic Stylus? Na **v2.0.0** ficou mais facil do que nunca
escolher apenas os recursos que voce precisa. Gracas ao seu tamanho
minimo (8,3&nbsp;KB gzipped para a folha de estilos principal), ele se
integra rapidamente a qualquer aplicacao web — sem necessidade de
framework JavaScript, sem etapa de build se voce usar o CDN.

Todos os caminhos estao descritos abaixo — escolha o que preferir.

## 1. Baixar e instalar

Voce pode instalar o Skeletonic Stylus via **pnpm**, **npm** ou **yarn**,
ou carrega-lo diretamente de um CDN. Tambem e possivel hospedar os
arquivos de distribuicao localmente, se preferir.

### Via gerenciador de pacotes (recomendado)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### Via CDN

Se voce precisa apenas do CSS compilado, adicione uma destas linhas ao seu `<head>`:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

Para maxima integridade, copie o **hash SRI** das notas de lancamento da
v2.0.0 e adicione um atributo `integrity="sha384-…"`.

### Fontes CDN alternativas

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | Sim | Sim |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | Sim | Nao |

### Baixar o release do GitHub

Prefere um tarball versionado? Baixe o ultimo release em
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
e copie o conteudo de `dist/` diretamente para o seu projeto.

### Clonar o repositorio GitHub

Clone o repositorio principal para obter todos os arquivos-fonte,
incluindo os scripts de build:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Dica:** assine seus commits — o projeto exige commits assinados no CI.
> Use `git commit -S -m "..."` (ou defina `commit.gpgsign = true` na sua
> configuracao global do git).

## 2. Usar o CSS compilado

A biblioteca inclui varios bundles pre-compilados em `dist/css/` apos
a instalacao:

| Arquivo | Finalidade | Tamanho (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + tokens + layout + elementos + componentes + utilitarios | 45,7 KB / 8,3 KB |
| `animations/skeletonic-animations.min.css` | Modulo de animacoes opcional | ≈213 KB / ≈6.8 KB |
| `palettes/material/skeletonic-material.min.css` | Paleta de cores Material | ≈17.4 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Paleta utilitaria Tachyons | 7,3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Paleta web-safe | ≈3.5 KB |

Cada modulo e independente — escolha a menor combinacao que voce precisa.

## 3. Usar diretamente no Stylus

Se voce ja tem um pipeline Stylus, pode importar os modulos-fonte e
deixar seu bundler fazer tree-shaking das partes nao utilizadas:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Ou importe apenas o que voce precisa:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Sobrescrever a cor da marca

O Skeletonic expoe seus design tokens como **CSS custom properties**
para que voce possa personaliza-lo sem recompilar o Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Pronto — cada componente que usa a cor primaria seguira automaticamente.

## 5. Verificar a instalacao

Um teste minimo de "funcionou?":

```html
<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Funcionou.</h1>
    <a href="#" class="button primary">Ola, mundo</a>
  </body>
</html>
```

Se o titulo escala de forma fluida e o botao tem formato de pilula azul,
voce esta pronto.

## 6. O que esta incluido

Dentro do pacote voce encontrara todos os arquivos-fonte, os bundles CSS
compilados e minificados, source maps e uma arvore Stylus completa
organizada por categoria:

```text
@sebastienrousseau/skeletonic-stylus@2.0.0
├── CHANGELOG.md
├── LICENSE-APACHE
├── LICENSE-MIT
├── README.md
├── package.json
├── dist/
│   └── css/
│       ├── core/
│       │   ├── skeletonic.css
│       │   ├── skeletonic.css.map
│       │   └── skeletonic.min.css
│       ├── animations/
│       │   ├── skeletonic-animations.css
│       │   └── skeletonic-animations.min.css
│       └── palettes/
│           ├── material/skeletonic-material.min.css
│           ├── tachyons/skeletonic-tachyons.min.css
│           └── websafe/skeletonic-websafe.min.css
└── src/
    └── stylus/
        ├── animations/      bounce, fade, pulse, shake, vanish, zoom…
        ├── base/            reset, helpers
        ├── components/      card, header, navbar, alert
        ├── configurations/  colors, variables
        ├── elements/        button, form, table, link, list, code…
        ├── fonts/           font-face declarations
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixins
        └── skeletonic.styl  ← import unico que inclui tudo
```

Cada modulo e independente — inclua apenas os bundles necessarios para
manter seu payload CSS o menor possivel.

## Perguntas frequentes

**Como instalo o Skeletonic Stylus?**
Execute `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0`. Ou carregue
o CSS compilado diretamente de um CDN — sem necessidade de etapa de build.

**Ele requer JavaScript?**
Nao. A folha de estilos principal e CSS puro, sem custo de execucao.
Os componentes funcionam sem uma unica linha de JS.

**E compativel com WCAG 2.2?**
Sim. A v2.0.0 inclui contraste em conformidade com AA, aneis
focus-visible, helpers de skip-link, suporte a movimento reduzido e
modo escuro por padrao.

**Qual o tamanho gzipped?**
45,7&nbsp;KB minificado, **8,3&nbsp;KB gzipped**, 6,9&nbsp;KB brotli
para a folha de estilos principal completa. O limite de 8&nbsp;KB e
aplicado no CI em cada commit.

**Qual licenca utiliza?**
Licenciado sob MIT e Apache 2.0 — escolha a que melhor se encaixa no
seu projeto. Gratuito para uso comercial e pessoal.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como instalo o Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Execute pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0. Ou carregue o CSS compilado diretamente de um CDN — sem necessidade de etapa de build."
      }
    },
    {
      "@type": "Question",
      "name": "O Skeletonic Stylus requer JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nao. A folha de estilos principal e CSS puro, sem custo de execucao. Os componentes funcionam sem uma unica linha de JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "O Skeletonic Stylus e compativel com WCAG 2.2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. A v2.0.0 inclui contraste em conformidade com AA, aneis focus-visible, helpers de skip-link, suporte a movimento reduzido e modo escuro por padrao."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o tamanho gzipped do Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45,7 KB minificado, 8,3 KB gzipped, 6,9 KB brotli para a folha de estilos principal completa. O limite de 8 KB e aplicado no CI em cada commit."
      }
    },
    {
      "@type": "Question",
      "name": "Qual licenca o Skeletonic Stylus utiliza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Licenciado sob MIT e Apache 2.0 — escolha a que melhor se encaixa no seu projeto. Gratuito para uso comercial e pessoal."
      }
    }
  ]
}
</script>

[Ver os componentes →](/pt-br/componentes/)
