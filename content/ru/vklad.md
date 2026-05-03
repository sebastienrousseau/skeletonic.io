---
title: "Участие в разработке"
name: "Skeletonic Stylus"
description: "Как создавать issue, предлагать изменения и отправлять pull request в Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/ru/vklad/
date: 2026-04-08
author: Sebastien Rousseau
language: ru
theme_color: "hsl(210, 100%, 42%)"
keywords: "участие, open source, pull request, issue, соглашения"
---

Skeletonic Stylus — проект с открытым исходным кодом; приветствуются вклады любого масштаба — от исправления опечаток до новых компонентов.

<hr class="hr-text" data-content="Быстрый старт">

## Быстрый старт

```bash
# 1. Форк и клонирование
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Установка (pnpm через corepack)
corepack enable
pnpm install

# 3. Сборка
pnpm run build           # полный конвейер (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Линтинг и тестирование
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Соглашения">

## Соглашения

- **Имена веток:** `feat/short-thing`, `fix/short-thing`, `docs/short-thing`.
- **Коммиты:** [Conventional Commits](https://www.conventionalcommits.org). Все коммиты подписаны.
- **Stylus:** отступ 4 пробела, без точек с запятой, предпочитайте `$variables` вместо магических чисел, каждый публичный класс живёт в каскадном слое.
- **Доступность:** любой новый компонент должен наглядно соответствовать WCAG 2.2 AA; запустите `node scripts/a11y-test.mjs` для демонстрационной страницы перед открытием PR.
- **Бюджет размера:** основной файл стилей должен оставаться **менее 8 КБ gzip**. Если ваше изменение превышает лимит, обоснуйте это в PR.

<hr class="hr-text" data-content="Pull request">

## Pull request

1. Сначала создайте issue для нетривиальных изменений — это экономит время.
2. Делайте PR сфокусированными: одно логическое изменение на PR.
3. Обновите `CHANGELOG.md` в разделе «Unreleased».
4. Убедитесь, что CI успешно завершён, прежде чем запрашивать ревью.
5. Squash-merge используется по умолчанию; сообщения коммитов будут приведены в порядок при слиянии.

<hr class="hr-text" data-content="Кодекс поведения">

## Кодекс поведения

Участвуя в проекте, вы соглашаетесь соблюдать
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Будьте вежливы, будьте терпеливы, предполагайте добрые намерения.

[Создать issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Создать PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
