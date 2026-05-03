---
title: "התחלת עבודה עם Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "התקינו את Skeletonic Stylus מ-npm או CDN, ייבאו אותה לצינור Stylus שלכם, ודרסו משתנים תוך שניות."
layout: page
permalink: https://skeletonic.io/he/hatkhala/
date: 2026-04-08
author: Sebastien Rousseau
language: he
theme_color: "hsl(210, 100%, 42%)"
keywords: "התקנת skeletonic, הגדרת stylus, css cdn, התחלה"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## מבוא

חדשים ב-Skeletonic Stylus? ב-**v2.0.0** קל מתמיד לבחור רק את
התכונות שאתם צריכים. הודות לטביעת רגל זעירה (כ-7.7&nbsp;KB בדחיסת
gzip עבור גיליון הסגנונות הליבתי), היא משתלבת במהירות בכל יישום
אינטרנט — ללא צורך ב-framework של JavaScript, ללא שלב בנייה אם
אתם משתמשים ב-CDN.

כל דרך מתועדת להלן — בחרו את המתאימה לכם.

## 1. הורדה והתקנה

תוכלו להתקין את Skeletonic Stylus דרך **pnpm**, **npm** או **yarn**,
או לטעון אותה ישירות מ-CDN. תוכלו גם לאחסן את קבצי ההפצה מקומית
אם תעדיפו.

### ממנהל חבילות (מומלץ)

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### מ-CDN

אם אתם צריכים רק את ה-CSS המהודר, הוסיפו אחד מאלה ל-`<head>`:

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

לשלמות מרבית, העתיקו את ה-**SRI hash** מהערות השחרור של v2.0.0
והוסיפו תכונת `integrity="sha384-…"`.

### מיקומי CDN חלופיים

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | כן | כן |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | כן | לא |

### הורדת שחרור GitHub

מעדיפים ארכיון מגורס? הורידו את השחרור האחרון מ-
[github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases)
והעבירו את תוכן `dist/` ישירות לפרויקט שלכם.

### שכפול מאגר GitHub

שכפלו את המאגר הראשי כדי לקבל את כל קבצי המקור כולל סקריפטי
הבנייה:

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **טיפ:** חתמו על ה-commits שלכם — הפרויקט אוכף commits חתומים ב-CI.
> השתמשו ב-`git commit -S -m "..."` (או הגדירו `commit.gpgsign = true`
> בתצורת git הגלובלית שלכם).

## 2. שימוש ב-CSS המהודר

הספרייה מגיעה עם מספר חבילות בנויות מראש תחת
`dist/css/` לאחר ההתקנה:

| קובץ | מטרה | גודל (min/gz) |
|---|---|---|
| `core/skeletonic.min.css` | Reset + טוקנים + פריסה + אלמנטים + רכיבים + שירות | 38.8 KB / 7.7 KB |
| `animations/skeletonic-animations.min.css` | מודול אנימציות אופציונלי | כ-18 KB / כ-4 KB |
| `palettes/material/skeletonic-material.min.css` | פלטת צבעים Material | כ-8 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | פלטת שירות Tachyons | 7.3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | פלטה בטוחה לאינטרנט | כ-4 KB |

כל מודול עצמאי — בחרו את השילוב הקטן ביותר שאתם צריכים.

## 3. שימוש מתוך Stylus

אם יש לכם כבר צינור Stylus, תוכלו לייבא את מודולי המקור ולתת
לבנדלר שלכם לנפות חלקים שאינם בשימוש:

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

או ייבאו רק את מה שאתם צריכים:

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. דריסת צבע המותג

Skeletonic חושפת את טוקני העיצוב שלה כ-**משתני CSS** כך שתוכלו
להתאים אישית ללא הידור מחדש של Stylus:

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

זהו — כל רכיב שמשתמש בצבע הראשי ילך בעקבותיו.

## 5. אימות ההתקנה

בדיקת "האם זה עובד?" מינימלית:

```html
<!doctype html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>זה עובד.</h1>
    <a href="#" class="button primary">שלום, עולם</a>
  </body>
</html>
```

אם הכותרת מותאמת באופן נזיל והכפתור בצורת גלולה כחולה, סיימתם.

## 6. מה כלול

בתוך החבילה תמצאו כל קובץ מקור, חבילות CSS מהודרות ומוקטנות,
מפות מקור, ועץ Stylus מלא מאורגן לפי קטגוריה:

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
        └── skeletonic.styl  ← ייבוא יחיד שמושך הכול
```

כל מודול עצמאי — שלבו רק את החבילות שאתם צריכים כדי לשמור על
משקל ה-CSS נמוך ככל האפשר.

## שאלות נפוצות

**כיצד מתקינים את Skeletonic Stylus?**
הריצו `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0`. או
טענו את ה-CSS המהודר ישירות מ-CDN — ללא צורך בשלב בנייה.

**האם נדרש JavaScript?**
לא. גיליון הסגנונות הליבתי הוא CSS טהור, ללא עלות ריצה. הרכיבים
עובדים ללא שורת JavaScript אחת.

**האם היא תואמת WCAG 2.2?**
כן. v2.0.0 מגיעה עם ניגודיות תואמת AA, טבעות focus-visible, קישורי
דילוג, תמיכה בתנועה מופחתת ומצב כהה כברירת מחדל.

**מה הגודל בדחיסת gzip?**
38.8&nbsp;KB ממוזער, **כ-7.7&nbsp;KB בדחיסת gzip**, כ-6.7&nbsp;KB
brotli עבור גיליון הסגנונות הליבתי המלא. תקרת 8&nbsp;KB נאכפת ב-CI.

**באיזה רישיון היא משתמשת?**
רישיון כפול תחת MIT ו-Apache 2.0 — בחרו את מה שהפרויקט שלכם צריך.
חינם לשימוש מסחרי ואישי.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "כיצד מתקינים את Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "הריצו pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0. או טענו את ה-CSS המהודר ישירות מ-CDN — ללא צורך בשלב בנייה."
      }
    },
    {
      "@type": "Question",
      "name": "האם Skeletonic Stylus דורשת JavaScript?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "לא. גיליון הסגנונות הליבתי הוא CSS טהור, ללא עלות ריצה. הרכיבים עובדים ללא שורת JavaScript אחת."
      }
    },
    {
      "@type": "Question",
      "name": "האם Skeletonic Stylus תואמת WCAG 2.2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "כן. v2.0.0 מגיעה עם ניגודיות תואמת AA, טבעות focus-visible, קישורי דילוג, תמיכה בתנועה מופחתת ומצב כהה כברירת מחדל."
      }
    },
    {
      "@type": "Question",
      "name": "מה הגודל בדחיסת gzip של Skeletonic Stylus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "38.8 KB ממוזער, כ-7.7 KB בדחיסת gzip, כ-6.7 KB brotli עבור גיליון הסגנונות הליבתי המלא. תקרת 8 KB נאכפת ב-CI בכל commit."
      }
    },
    {
      "@type": "Question",
      "name": "באיזה רישיון Skeletonic Stylus משתמשת?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "רישיון כפול תחת MIT ו-Apache 2.0 — בחרו את מה שהפרויקט שלכם צריך. חינם לשימוש מסחרי ואישי."
      }
    }
  ]
}
</script>

[עיינו ברכיבים &larr;](/he/rekhivim/)
