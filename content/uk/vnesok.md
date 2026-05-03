---
title: "Внесок"
name: "Skeletonic Stylus"
description: "Як створювати issue, пропонувати зміни та надсилати pull request до Skeletonic Stylus."
layout: page
language: uk
permalink: https://skeletonic.io/uk/vnesok/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "внесок, відкритий код, pull request, issue, конвенції"
---

Skeletonic Stylus — це проєкт з відкритим кодом; внески будь-якого
масштабу вітаються — від виправлення друкарських помилок до нових
компонентів.

<hr class="hr-text" data-content="Швидкий старт">

## Швидкий старт

```bash
# 1. Fork та clone
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Встановлення (pnpm через corepack)
corepack enable
pnpm install

# 3. Збірка
pnpm run build           # повний пайплайн (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Лінтинг та тестування
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Конвенції">

## Конвенції

- **Назви гілок:** `feat/short-thing`, `fix/short-thing`, `docs/short-thing`.
- **Коміти:** [Conventional Commits](https://www.conventionalcommits.org).
  Усі коміти підписані.
- **Stylus:** 4-пробільний відступ, без крапок з комою, перевага
  `$variables` замість магічних чисел, кожен публічний клас знаходиться
  в каскадному шарі.
- **Доступність:** будь-який новий компонент повинен демонстративно
  відповідати WCAG 2.2 AA; запустіть `node scripts/a11y-test.mjs` на
  сторінці-вітрині перед створенням PR.
- **Бюджет розміру:** основна таблиця стилів повинна залишатися менше
  **8 КБ gzip**. Якщо ваша зміна перевищує ліміт, обґрунтуйте це в PR.

<hr class="hr-text" data-content="Pull request-и">

## Pull request-и

1. Спочатку створіть issue для будь-чого нетривіального — заощадить
   зайву роботу.
2. Зберігайте PR фокусованими: одна логічна зміна на PR.
3. Оновіть `CHANGELOG.md` у розділі «Unreleased».
4. Переконайтесь, що CI зелений, перш ніж запитувати рев'ю.
5. Squash-merge — стандартний підхід; повідомлення комітів будуть
   упорядковані при злитті.

<hr class="hr-text" data-content="Кодекс поведінки">

## Кодекс поведінки

Беручи участь, ви погоджуєтесь дотримуватись
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Будьте ввічливі, терплячі та виходьте з добрих намірів.

[Створити issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Створити PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
