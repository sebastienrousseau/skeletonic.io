---
title: "Начало работы с Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Установите Skeletonic Stylus из npm или CDN, подключите к вашей Stylus-сборке и переопределите переменные за секунды."
layout: page
permalink: https://skeletonic.io/ru/nachalo/
date: 2026-04-08
author: Sebastien Rousseau
language: ru
theme_color: "hsl(210, 100%, 42%)"
keywords: "установка skeletonic, настройка stylus, css cdn, начало работы"
---

## Введение

Впервые используете Skeletonic Stylus? В **v1.1.7** стало проще, чем когда-либо, выбрать только те возможности, которые вам нужны. Благодаря минимальному размеру (~7,5&nbsp;КБ gzip для основного файла стилей) библиотека быстро интегрируется в любое веб-приложение — без JavaScript-фреймворка, без этапа сборки при использовании CDN.

Готовы к установке? Все варианты описаны ниже — выбирайте подходящий.

## 1. Загрузка и установка

Вы можете установить Skeletonic Stylus через **pnpm**, **npm** или **yarn**, либо загрузить напрямую с CDN. Также возможно самостоятельное размещение дистрибутивных файлов локально.

### Через менеджер пакетов (рекомендуется)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7

# npm
npm install @sebastienrousseau/skeletonic-stylus@1.1.7

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@1.1.7
```

### Через CDN

Если вам нужен только скомпилированный CSS, добавьте одну из этих строк в ваш `<head>`:

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

Для максимальной целостности скопируйте **SRI-хеш** из заметок к релизу v1.1.7 и добавьте атрибут `integrity="sha384-…"`.

### Альтернативные CDN-адреса

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Да | Да |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Да | Нет |

### Загрузка релиза с GitHub

Предпочитаете версионный архив? Скачайте последний релиз с
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
и скопируйте содержимое `dist/` прямо в ваш проект.

### Клонирование репозитория GitHub

Склонируйте основной репозиторий, чтобы получить все исходные файлы, включая скрипты сборки:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Совет:** подписывайте свои коммиты — проект требует подписанных коммитов в CI.
> Используйте `git commit -S -m "..."` (или установите `commit.gpgsign = true` в глобальном конфиге git).

## 2. Использование скомпилированного CSS

Библиотека поставляет несколько готовых сборок в каталоге
`dist/css/` после установки:

| Файл | Назначение | Размер (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + токены + макет + элементы + компоненты + утилиты | 39,9 КБ / 7,5 КБ |
| `animations/skeletonic-animations.min.css` | Опциональный модуль анимаций | ≈18 КБ / ≈4 КБ |
| `palettes/material/skeletonic-material.min.css` | Цветовая палитра Material | ≈8 КБ |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Утилитарная палитра Tachyons | 7,3 КБ |
| `palettes/websafe/skeletonic-websafe.min.css` | Web-safe палитра | ≈4 КБ |

Каждый модуль независим — выбирайте минимальную необходимую комбинацию.

## 3. Использование из Stylus

Если у вас уже есть Stylus-пайплайн, можно импортировать исходные модули и позволить сборщику убрать неиспользуемые части:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Или импортируйте только нужное:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Переопределение основного цвета

Skeletonic предоставляет свои дизайн-токены как **CSS Custom Properties**, поэтому вы можете настроить тему без перекомпиляции Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Вот и всё — каждый компонент, использующий основной цвет, подхватит изменения.

## 5. Проверка установки

Минимальная проверка «всё работает?»:

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Работает.</h1>
    <a href="#" class="button primary">Привет, мир</a>
  </body>
</html>
```

Если заголовок масштабируется плавно, а кнопка имеет форму синей таблетки — всё готово.

## 6. Что входит в комплект

Внутри пакета вы найдёте все исходные файлы, скомпилированные и минифицированные CSS-сборки, карты исходников и полное дерево Stylus, организованное по категориям:

```text
@sebastienrousseau/skeletonic-stylus@1.1.7
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
        └── skeletonic.styl  ← единый импорт, подключающий всё
```

Каждый модуль независим — подключайте только нужные сборки, чтобы минимизировать размер CSS.

## Часто задаваемые вопросы

**Как установить Skeletonic Stylus?**
Выполните `pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7`. Или загрузите скомпилированный CSS прямо с CDN — этап сборки не требуется.

**Требуется ли JavaScript?**
Нет. Основной файл стилей — чистый CSS, без затрат времени выполнения. Компоненты работают без единой строки JS.

**Соответствует ли WCAG 2.2?**
Да. В v1.1.7 обеспечен контраст уровня AA, кольца focus-visible, skip-link хелперы, поддержка уменьшенного движения и тёмная тема по умолчанию.

**Какой размер в gzip?**
39,9&nbsp;КБ минифицированный, **~7,5&nbsp;КБ gzip**, ~6,3&nbsp;КБ brotli для полного основного файла стилей. Лимит в 8&nbsp;КБ контролируется в CI.

**Какая лицензия?**
Двойная лицензия: MIT и Apache 2.0 — выбирайте ту, которая подходит вашему проекту. Бесплатно для коммерческого и личного использования.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Как установить Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Выполните pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7. Или загрузите скомпилированный CSS прямо с CDN — этап сборки не требуется."
      }
    },
    {
      "@type": "Question",
      "name": "Требуется ли Skeletonic Stylus JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Нет. Основной файл стилей — чистый CSS, без затрат времени выполнения. Компоненты работают без единой строки JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "Соответствует ли Skeletonic Stylus WCAG 2.2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Да. В v1.1.7 обеспечен контраст уровня AA, кольца focus-visible, skip-link хелперы, поддержка уменьшенного движения и тёмная тема по умолчанию."
      }
    },
    {
      "@type": "Question",
      "name": "Какой размер Skeletonic Stylus в gzip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "39,9 КБ минифицированный, ~7,5 КБ gzip, ~6,3 КБ brotli для полного основного файла стилей. Лимит в 8 КБ контролируется в CI при каждом коммите."
      }
    },
    {
      "@type": "Question",
      "name": "Какую лицензию использует Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Двойная лицензия: MIT и Apache 2.0 — выбирайте ту, которая подходит вашему проекту. Бесплатно для коммерческого и личного использования."
      }
    }
  ]
}
</script>

[Просмотреть компоненты →](/ru/komponenty/)
