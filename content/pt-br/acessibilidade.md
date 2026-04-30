---
title: "Acessibilidade — WCAG 2.2 na v1.1.7"
name: "Skeletonic Stylus"
description: "O que a v1.1.7 entrega por padrao para conformidade com WCAG 2.2 — aneis de foco, contraste, skip links, movimento e modo escuro."
layout: page
permalink: https://skeletonic.io/pt-br/acessibilidade/
date: 2026-04-08
author: Sebastien Rousseau
language: pt-br
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, acessibilidade, focus visible, skip link, prefers reduced motion, contraste"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **O Skeletonic Stylus v1.1.7 entrega conformidade com WCAG 2.2 como
> comportamento padrao, nao como um tema opcional.** Esta pagina documenta
> o que esta integrado e quais mixins voce pode optar por usar para um
> controle mais refinado.

<hr class="hr-text" data-content="Pronto para uso">

## O que voce recebe gratuitamente

| WCAG 2.2 SC | O que a v1.1.7 faz | Como verificar |
|---|---|---|
| **1.4.3 Contraste (Minimo) — AA** | `--cl-primary` e `--cl-secondary` escurecidos para ≥ 4.5:1 contra branco | DevTools → verificador de contraste |
| **1.4.11 Contraste Nao-Textual — AA** | Bordas de formularios, botoes e badges todos ≥ 3:1 | Idem |
| **2.4.7 Foco Visivel — AA** | Cada elemento focavel possui um anel `:focus-visible` (amarelo em fundos escuros, azul em claros) | `Tab` por qualquer pagina |
| **2.4.11 Foco Nao Obscurecido — AA (novo em 2.2)** | Header fixo com altura reduzida + scroll-margin de foco | `Tab` alem do header fixo |
| **2.5.8 Tamanho do Alvo — AA (novo em 2.2)** | Botoes / links: area de toque ≥ 24x24 CSS px | DevTools box model |
| **1.4.12 Espacamento de Texto — AA** | Todos os elementos respeitam sobrescrita de line-height / letter-spacing do usuario | Sobrescrever no DevTools |
| **2.3.3 Animacao de Interacoes — AAA** | Todas as classes de animacao estao envolvidas em `@media (prefers-reduced-motion: no-preference)` | Reduzir movimento no nivel do SO |
| **1.4.10 Refluxo — AA** | O layout funciona em 320 px sem scroll horizontal | DevTools viewport estreito |
| **Modo escuro** | `prefers-color-scheme: dark` troca os tokens automaticamente | Alternar modo escuro no SO |

<hr class="hr-text" data-content="Mixins">

## Mixins Stylus disponiveis

Se voce compila a partir do codigo-fonte, os seguintes mixins estao
disponiveis em `src/stylus/utilities/mixins.styl`:

| Mixin | Uso |
|---|---|
| `focus-ring()` | Anel de foco de alto contraste respeitando `:focus-visible` |
| `visually-hidden()` | Texto apenas para leitor de tela que permanece focavel |
| `skip-link()` | Ancora que fica visivel ao receber foco |
| `reduced-motion()` | Envolve qualquer bloco em `prefers-reduced-motion: no-preference` |
| `forced-colors()` | Ajustes para o Modo de Alto Contraste do Windows |
| `target-size(24px)` | Adiciona padding a qualquer clicavel para um alvo de toque minimo |

Exemplo:

```stylus
// Aplicar um anel de foco forte em um botao personalizado
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="Skip link">

## O helper skip-link

Coloque isto **como primeiro elemento dentro de `<body>`**:

```html
<a href="#main-content" class="skip-link">Pular para o conteudo principal</a>
```

A classe **nao** esta na folha de estilos principal (para nao afetar o
peso da pagina); e um trecho de 4 linhas que voce compoe ou usa o mixin
`skip-link()` incluido. Este site o utiliza — foque na pagina e
pressione Tab para ve-lo aparecer no canto superior esquerdo.

<hr class="hr-text" data-content="Verificacao">

## Verificando suas proprias paginas

A biblioteca inclui um script `a11y-test.mjs` em `scripts/` que executa
o [axe-core](https://github.com/dequelabs/axe-core) contra cada URL
que voce fornecer.

```bash
node scripts/a11y-test.mjs https://example.com
```

O CI executa este script contra a pagina de demonstracao `dist/index.html`
a cada push.

[Leia sobre o release v1.1.7 →](/pt-br/registro-de-alteracoes/) ·
[Veja a pagina de seguranca →](/pt-br/seguranca/)
