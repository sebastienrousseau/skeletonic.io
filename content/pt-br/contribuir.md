---
title: "Contribuir"
name: "Skeletonic Stylus"
description: "Como registrar issues, propor mudancas e enviar pull requests para o Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/pt-br/contribuir/
date: 2026-04-08
author: Sebastien Rousseau
language: pt-br
theme_color: "hsl(210, 100%, 42%)"
keywords: "contribuir, codigo aberto, pull request, issue, convencoes"
---

Skeletonic Stylus e um projeto de codigo aberto; contribuicoes de todos
os tamanhos sao bem-vindas — de correcoes de digitacao a novos
componentes.

<hr class="hr-text" data-content="Inicio rapido">

## Inicio rapido

```bash
# 1. Fork &amp; clone
git clone git@github.com:SEU-USUARIO/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Instalar (pnpm via corepack)
corepack enable
pnpm install

# 3. Build
pnpm run build           # pipeline completo (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint &amp; teste
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Convencoes">

## Convencoes

- **Nomes de branch:** `feat/descricao-curta`, `fix/descricao-curta`, `docs/descricao-curta`.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org).
  Todos os commits sao assinados.
- **Stylus:** indentacao de 4 espacos, sem ponto-e-virgula, preferir
  `$variables` a numeros magicos, toda classe publica vive em uma
  cascade layer.
- **Acessibilidade:** qualquer novo componente deve comprovadamente
  atender WCAG 2.2 AA; execute
  `node scripts/a11y-test.mjs` contra a pagina de demonstracao antes
  de abrir um PR.
- **Budget de tamanho:** a folha de estilos principal deve permanecer
  abaixo de **8 KB gzipped**. Se sua alteracao ultrapassar esse limite,
  justifique no PR.

<hr class="hr-text" data-content="Pull requests">

## Pull requests

1. Abra uma issue primeiro para qualquer coisa nao trivial — economiza retrabalho.
2. Mantenha os PRs focados: uma mudanca logica por PR.
3. Atualize o `CHANGELOG.md` na secao "Unreleased".
4. Certifique-se de que o CI esteja verde antes de solicitar revisao.
5. Squash-merge e o padrao; as mensagens de commit serao limpas no merge.

<hr class="hr-text" data-content="Codigo de conduta">

## Codigo de conduta

Ao participar, voce concorda em seguir o
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Seja gentil, seja paciente, presuma boa intencao.

[Abrir uma issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Abrir um PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
