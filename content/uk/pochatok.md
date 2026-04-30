---
title: "Початок роботи зі Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Встановіть Skeletonic Stylus через npm або CDN, імпортуйте його у ваш Stylus-проєкт та перевизначте змінні за лічені секунди."
layout: page
language: uk
permalink: https://skeletonic.io/uk/pochatok/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "встановити skeletonic, налаштування stylus, css cdn, початок роботи"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## Вступ

Вперше знайомитесь зі Skeletonic Stylus? У **v1.1.7** як ніколи просто
обрати лише потрібні вам функції. Завдяки мініатюрному розміру
(8,3&nbsp;КБ gzip для основної таблиці стилів) бібліотека швидко
інтегрується в будь-який веб-додаток — без JavaScript-фреймворку, без
кроку збірки, якщо ви використовуєте CDN.

Готові до встановлення? Усі варіанти описані нижче — обирайте потрібний.

## 1. Завантажте та встановіть

Ви можете встановити Skeletonic Stylus через **pnpm**, **npm** або
**yarn**, або завантажити його безпосередньо з CDN. Також можна
самостійно розмістити файли дистрибутиву локально.

### З менеджера пакетів (рекомендовано)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7

# npm
npm install @sebastienrousseau/skeletonic-stylus@1.1.7

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@1.1.7
```

### З CDN

Якщо вам потрібен лише скомпільований CSS, додайте один з цих рядків до вашого `<head>`:

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

Для максимальної цілісності скопіюйте **SRI-хеш** з приміток до релізу
v1.1.7 та додайте атрибут `integrity="sha384-…"`.

### Альтернативні CDN-адреси

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Так | Так |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css` | Так | Ні |

### Завантаження з релізів GitHub

Надаєте перевагу версійному архіву? Візьміть останній реліз з
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
та скопіюйте вміст `dist/` безпосередньо у свій проєкт.

### Клонування репозиторію GitHub

Клонуйте основний репозиторій, щоб отримати всі вихідні файли,
включаючи скрипти збірки:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **Порада:** підписуйте свої коміти — проєкт вимагає підписаних комітів у CI.
> Використовуйте `git commit -S -m "..."` (або встановіть `commit.gpgsign = true`
> у вашому глобальному git config).

## 2. Використання скомпільованого CSS

Бібліотека постачає декілька готових збірок у `dist/css/` після
встановлення:

| Файл | Призначення | Розмір (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Скидання + токени + макет + елементи + компоненти + утиліти | 45,7 КБ / 8,3 КБ |
| `animations/skeletonic-animations.min.css` | Опціональний модуль анімацій | ≈18 КБ / ≈4 КБ |
| `palettes/material/skeletonic-material.min.css` | Кольорова палітра Material | ≈8 КБ |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Утилітарна палітра Tachyons | 7,3 КБ |
| `palettes/websafe/skeletonic-websafe.min.css` | Web-safe палітра | ≈4 КБ |

Кожен модуль незалежний — обирайте найменшу потрібну комбінацію.

## 3. Використання зі Stylus

Якщо у вас вже є Stylus-пайплайн, ви можете імпортувати вихідні модулі
й дозволити вашому бандлеру видалити невикористані частини:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

Або імпортуйте тільки потрібне:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. Перевизначення фірмового кольору

Skeletonic надає свої дизайн-токени як **CSS-змінні**, тож ви можете
налаштувати тему без перекомпіляції Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

Ось і все — кожен компонент, що використовує основний колір, автоматично
оновиться.

## 5. Перевірка встановлення

Мінімальна перевірка «чи все працює?»:

```html
<!doctype html>
<html lang="uk">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@1.1.7/dist/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>Це працює.</h1>
    <a href="#" class="button primary">Привіт, світе</a>
  </body>
</html>
```

Якщо заголовок масштабується динамічно, а кнопка має форму синьої
«пігулки» — все готово.

## 6. Що входить до пакета

Усередині пакета ви знайдете всі вихідні файли, скомпільовані та
мініфіковані CSS-бандли, карти коду та повне дерево Stylus,
організоване за категоріями:

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
        └── skeletonic.styl  ← єдиний імпорт, що підключає все
```

Кожен модуль незалежний — підключайте лише потрібні бандли, щоб
зберегти мінімальний розмір CSS.

## Часті запитання

**Як встановити Skeletonic Stylus?**
Виконайте `pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7`. Або
завантажте скомпільований CSS безпосередньо з CDN — крок збірки
не потрібен.

**Чи потрібен JavaScript?**
Ні. Основна таблиця стилів — це чистий CSS із нульовою вартістю в
рантаймі. Компоненти працюють без жодного рядка JS.

**Чи відповідає WCAG 2.2?**
Так. v1.1.7 постачається з контрастом рівня AA, кільцями focus-visible,
skip-link хелперами, підтримкою зменшення руху та темним режимом
за замовчуванням.

**Який розмір gzip?**
45,7&nbsp;КБ мініфіковано, **8,3&nbsp;КБ gzip**, 6,9&nbsp;КБ brotli
для повної основної таблиці стилів. Обмеження 8&nbsp;КБ контролюється
в CI.

**Яка ліцензія?**
Подвійна ліцензія — MIT та Apache 2.0. Обирайте ту, що потрібна вашому
проєкту. Безкоштовно для комерційного та особистого використання.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Як встановити Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Виконайте pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7. Або завантажте скомпільований CSS безпосередньо з CDN — крок збірки не потрібен."
      }
    },
    {
      "@type": "Question",
      "name": "Чи потрібен Skeletonic Stylus JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ні. Основна таблиця стилів — це чистий CSS із нульовою вартістю в рантаймі. Компоненти працюють без жодного рядка JavaScript."
      }
    },
    {
      "@type": "Question",
      "name": "Чи відповідає Skeletonic Stylus вимогам WCAG 2.2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Так. v1.1.7 постачається з контрастом рівня AA, кільцями focus-visible, skip-link хелперами, підтримкою зменшення руху та темним режимом за замовчуванням."
      }
    },
    {
      "@type": "Question",
      "name": "Який розмір Skeletonic Stylus у gzip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45,7 КБ мініфіковано, 8,3 КБ gzip, 6,9 КБ brotli для повної основної таблиці стилів. Обмеження 8 КБ контролюється в CI при кожному коміті."
      }
    },
    {
      "@type": "Question",
      "name": "Яку ліцензію використовує Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Подвійна ліцензія — MIT та Apache 2.0. Обирайте ту, що потрібна вашому проєкту. Безкоштовно для комерційного та особистого використання."
      }
    }
  ]
}
</script>

[Переглянути компоненти →](/uk/komponenty/)
