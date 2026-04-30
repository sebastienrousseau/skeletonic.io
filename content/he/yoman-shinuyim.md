---
title: "יומן שינויים"
name: "Skeletonic Stylus"
description: "הערות שחרור עבור Skeletonic Stylus, עם v1.1.7 במלואה."
layout: page
permalink: https://skeletonic.io/he/yoman-shinuyim/
author: Sebastien Rousseau
language: he
theme_color: "hsl(210, 100%, 42%)"
keywords: "יומן שינויים skeletonic, הערות שחרור, v1.1.7, semver"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v1.1.7 — 2026-04 (נוכחית)

סבב "מוכנות לפרסום": נגישות, שרשרת אספקה, היגיינת מאגר.

### נגישות (WCAG 2.2)
- **`$primary` הוכהה** ל-`hsl(210, 100%, 42%)` לניגודיות AA מול
  טקסט לבן בכפתורים / תגיות / קישורים.
- **`$secondary` הוכהה** ל-`hsl(195, 100%, 33%)`.
- נוספו טבעות **focus-visible** על כל אלמנט אינטראקטיבי.
- נוסף עוטף **`@media (prefers-reduced-motion)`** סביב מודול
  האנימציות.
- נוספה החלפת טוקנים **`prefers-color-scheme: dark`**.
- נוסף מיקסין **target-size(24px)** לעמידה ב-WCAG 2.2 SC 2.5.8.
- נוספו עזרי **focus-not-obscured** עם scroll-margin לכותרות
  דביקות.

### בנייה ושרשרת אספקה
- **שכבות קסקייד** — כל בלוק חי כעת ב-
  `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}`.
- **SBOM מסוג CycloneDX** נוצר כחלק מארכיון ה-npm.
- **תקציבי `size-limit`** נאכפים ב-CI: תקרת 8 KB בדחיסת gzip על
  גיליון הסגנונות הליבתי.
- **CVE-2023-44270** (ניתוח שורה חדשה ב-postcss) תוקנה דרך
  `pnpm.overrides`.
- מקוריות + חתימה בתהליך פרסום npm
  (`--provenance --access public`).
- הוסר תוסף `stylelint-a11y` המאורכב מתצורת ה-lint.

### היגיינת מאגר וחבילת צרכן
- תיקיית `package/` הישנה הוסרה; `dist/` הוא כעת מקור האמת
  היחיד לצרכנים.
- README נכתב מחדש כדי לשקף נתיבי התקנה של v1.1.7.
- `dist/` מועבר; `debug/` נוצר ומוגדר ב-gitignore.
- תהליך `npm-publish.yml` חדש ב-`.github/workflows/` מונע
  על ידי תגים.

### תיקוני באגים (P0)
- **רגרסיית `row $:after` של בורר האב** — `$` תועה הוחלף
  ב-`&` ב-`src/stylus/components/_grid.styl`.
- **`.alternate`** החיל בטעות `animation-direction: reverse`
  במקום `alternate`.
- **מרחוב שמות `.alert-*`** — `.alert.success` הפך
  ל-`.alert.alert-success` כדי למנוע התנגשויות עם מחלקות מצב.

[הערות שחרור מלאות של v1.1.7 ב-GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="היסטוריה">

## שחרורים ישנים יותר

- **v1.1.6** — ניקיון פנימי, עדכוני תלויות.
- **v1.1.5** — נוספה פלטת Material.
- **v1.1.0** — פלטת Tachyons + שיפוץ רשת.
- **v1.0.5** — שחרור "ישן" אחרון לפני סבב WCAG 2.2.
- **v1.0.0** — שחרור ציבורי ראשון (2018).

להיסטוריית commit-by-commit ראו את
[דף השחרורים ב-GitHub ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases).
