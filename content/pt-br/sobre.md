---
title: "Sobre o Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus e uma biblioteca CSS Stylus de codigo aberto para estilizacao de interfaces acessiveis, rapidas e modulares."
layout: page
permalink: https://skeletonic.io/pt-br/sobre/
date: 2026-04-08
author: Sebastien Rousseau
language: pt-br
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, sobre, stylus, css framework, filosofia"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="Downloads Mensais" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="Versao npm" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="Tamanho do Bundle" src="https://img.shields.io/badge/gzip-7.8%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="Licenca" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## A versao resumida

**Skeletonic Stylus** e uma biblioteca CSS [Stylus](https://stylus-lang.com) de codigo aberto para estilizacao de interfaces acessiveis, rapidas e modulares.

Nasceu em 2018 como um experimento pessoal em **entregar menos CSS** sem abrir mao da ergonomia de uma biblioteca de componentes real. Oito anos depois, o objetivo continua o mesmo.

## O que voce recebe

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="Raio" width="64" height="64" loading="lazy" decoding="async">
    <h3>Ultrarapido</h3>
    <p>Projete e personalize interfaces responsivas em minutos. Variaveis CSS nativas, classes predefinidas e um grid de 12 colunas cobrindo cada elemento HTML semantico.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="Pena" width="64" height="64" loading="lazy" decoding="async">
    <h3>Leve</h3>
    <p>8,3&nbsp;KB gzipped. As paginas carregam mais rapido. Todos os blocos essenciais permanecem incluidos.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="Dispositivos responsivos" width="64" height="64" loading="lazy" decoding="async">
    <h3>Design responsivo</h3>
    <p>Criado para desktop e dispositivos moveis. Os layouts se adaptam a qualquer aparelho. Otimizado para toque, com HTML semantico em toda a estrutura.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="Acessibilidade" width="64" height="64" loading="lazy" decoding="async">
    <h3>Acessibilidade</h3>
    <p>WCAG&nbsp;2.2 integrado: aneis focus-visible, contraste AA, helpers de skip-link, componentes amigaveis ao teclado, suporte a movimento reduzido — sem stylesheet extra, sem boilerplate <code>aria-*</code>.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="Blocos de componentes" width="64" height="64" loading="lazy" decoding="async">
    <h3>Biblioteca de componentes</h3>
    <p>Componentes CSS modulares e mixins Stylus. Botoes, formularios, cards, alertas, badges, paletas e animacoes — limpos, modulares, prontos para usar.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="Logo do GitHub" width="64" height="64" loading="lazy" decoding="async">
    <h3>Gratuito &amp; codigo aberto</h3>
    <p>Projetado, desenvolvido e mantido por Sebastien Rousseau. Licenciado sob <strong>MIT</strong> ou <strong>Apache&nbsp;2.0</strong>. Sem taxas, sem custos de licenciamento, mesmo para uso comercial.</p>
  </article>
</div>

## Como se compara

Uma unica folha de estilos auto-hospedada cobre tipografia, botoes, formularios, cards, tabelas, paletas, animacoes e classes utilitarias. Sem JavaScript. Sem etapa de build obrigatoria. Sem dependencias de Bootstrap, Tailwind ou Bulma.

| Recurso | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Tamanho gzipped | **8,3&nbsp;KB** | ~30&nbsp;KB | ~10&nbsp;KB (varies) | ~30&nbsp;KB |
| Conformidade WCAG 2.2 | **Integrada** | Parcial | Manual | Parcial |
| Cascade layers | **Sim (`@layer`)** | Nao | Nao | Nao |
| Modo escuro | **`prefers-color-scheme`** | Opt-in | Baseado em classes | Opt-in |
| JavaScript necessario | **Nao** | Sim (Popper) | Nao | Nao |
| CycloneDX SBOM | **Sim** | Nao | Nao | Nao |
| Movimento reduzido | **Respeitado** | Parcial | Manual | Parcial |
| Licenca | MIT ou Apache 2.0 | MIT | MIT | MIT |

## Principios

1. **Acessibilidade e o piso, nao o teto.** A conformidade com WCAG 2.2 esta integrada em cada componente, nunca adicionada como um "tema".
2. **Cada byte importa.** Uma unica folha de estilos entregue nao deve estourar seu orcamento de peso de pagina. O limite de 8&nbsp;KB gzipped e aplicado no CI.
3. **Cascade layers vencem guerras de especificidade.** Sobrescreva qualquer coisa com confianca — sem `!important`, sem truques de ordem no DOM.
4. **Stylus continua sendo uma otima opcao.** Conciso, expressivo e permite manter a biblioteca em ~3.000 linhas legiveis.
5. **Chato e um recurso.** Sem dependencias JS. Sem magica em tempo de build. Sem renomeacoes que quebram compatibilidade. Classes CSS que fazem exatamente o que dizem.
6. **Personalizavel em segundos.** CSS custom properties nativas para cores, espacamento, tipografia e bordas arredondadas.
7. **Cadeia de suprimentos fortalecida.** Procedencia npm assinada. Atualizacoes Dependabot fixadas. CVE-2023-44270 corrigido via overrides.

## Versionamento &amp; semver

Skeletonic Stylus segue o [Semantic Versioning 2.0](https://semver.org).

| Nivel | Quando | Exemplo |
|---|---|---|
| **Major** | Remocao ou renomeacao de uma classe publica, mixin ou token | 1.x → 2.0 |
| **Minor** | Adicao de um novo componente, mixin ou token | 1.1 → 1.2 |
| **Patch** | Correcoes de bugs, ajustes de a11y, performance, seguranca | 1.1.6 → 2.0.0 |

Todos os nomes de classes publicas, todas as CSS custom properties e todos os mixins Stylus exportados fazem parte da API publica. Uma mudanca que quebra compatibilidade recebe um bump major e um guia de migracao.

## Responsabilidade

Skeletonic Stylus e projetado, desenvolvido e mantido por
[Sebastien Rousseau](https://sebastienrousseau.com). Licenciado sob
[MIT](https://opensource.org/licenses/MIT) e
[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

Issues, ideias e contribuicoes sao bem-vindas —
[veja o guia de contribuicao](/pt-br/contribuir/).
