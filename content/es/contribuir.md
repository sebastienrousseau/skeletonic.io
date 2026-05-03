---
title: "Contribuir"
name: "Skeletonic Stylus"
description: "Como reportar problemas, proponer cambios y enviar pull requests a Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/es/contribuir/
date: 2026-04-08
author: Sebastien Rousseau
language: es
theme_color: "hsl(210, 100%, 42%)"
keywords: "contribuir, codigo abierto, pull request, issue, convenciones"
---

Skeletonic Stylus es un proyecto de codigo abierto; las contribuciones
de todos los tamanos son bienvenidas — desde correcciones de erratas
hasta nuevos componentes.

<hr class="hr-text" data-content="Inicio rapido">

## Inicio rapido

```bash
# 1. Fork y clone
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Instalar (pnpm via corepack)
corepack enable
pnpm install

# 3. Compilar
pnpm run build           # pipeline completo (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint y test
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Convenciones">

## Convenciones

- **Nombres de ramas:** `feat/descripcion-corta`, `fix/descripcion-corta`, `docs/descripcion-corta`.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org).
  Todos los commits estan firmados.
- **Stylus:** indentacion de 4 espacios, sin punto y coma, preferir `$variables`
  sobre numeros magicos, cada clase publica vive en una capa de cascada.
- **Accesibilidad:** cualquier componente nuevo debe cumplir de forma
  demostrable con WCAG 2.2 AA; ejecuta `node scripts/a11y-test.mjs` contra
  la pagina de muestra antes de abrir un PR.
- **Presupuesto de tamano:** la hoja de estilos principal debe mantenerse
  por debajo de **8 KB gzipped**. Si tu cambio lo supera, justificalo en el PR.

<hr class="hr-text" data-content="Pull requests">

## Pull requests

1. Abre un issue primero para cualquier cosa no trivial — ahorra retrabajo.
2. Manten los PRs enfocados: un cambio logico por PR.
3. Actualiza el `CHANGELOG.md` bajo "Unreleased".
4. Asegurate de que CI este en verde antes de solicitar revision.
5. Squash-merge es lo predeterminado; los mensajes de commit se limpian al fusionar.

<hr class="hr-text" data-content="Codigo de conducta">

## Codigo de conducta

Al participar, aceptas cumplir con el
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Se amable, ten paciencia, asume buenas intenciones.

[Abrir un issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Abrir un PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
