---
title: "אבטחה ושרשרת אספקה"
name: "Skeletonic Stylus"
description: "כיצד Skeletonic Stylus v1.1.7 מאבטחת את צינור הבנייה שלה, חותמת שחרורים ושולחת SBOM."
layout: page
permalink: https://skeletonic.io/he/avtakha/
date: 2026-04-08
author: Sebastien Rousseau
language: he
theme_color: "hsl(210, 100%, 42%)"
keywords: "אבטחת css, sbom, cyclonedx, מקוריות npm, openssf scorecard, שרשרת אספקה"
---

## ביצועים

- **39.9&nbsp;KB ממוזער · 7.5&nbsp;KB בדחיסת gzip · 6.3&nbsp;KB brotli** עבור גיליון הסגנונות הליבתי המלא.
- **אפס JavaScript** — Stylus טהור &larr; CSS טהור, ללא עלות ריצה.
- **מאורגן בשכבות קסקייד** — דריסות מנצחות ללא `!important`.
- **תקציבי `size-limit`** נאכפים ב-CI בכל commit.

ביצועים הם בקרת אבטחה. כל בית שלא נשלח הוא בית פחות לביקורת,
חתימה ואימות.

## שרשרת אספקה בקיצור

| בקרה | סטטוס v1.1.7 |
|---|---|
| **SBOM מסוג CycloneDX** | נוצר בכל שחרור, מועבר תחת `dist/sbom.json` |
| **מקוריות npm** | מופעלת (`--provenance --access public`) |
| **תגי git חתומים** | חתומים ב-SSH על ידי מפתח המתחזק |
| **Dependabot נעוץ** | עדכונים שבועיים, סקירה אוטומטית |
| **תקציבי גודל** | `size-limit` תקרת 8 KB בדחיסת gzip, נכשל CI בנסיגה |
| **Lint** | `stylelint` + הצהרות נגישות בכל push |
| **CodeQL** | מופעל עבור `javascript` וקבצי תצורה |
| **CVE-2023-44270** | **תוקנה** דרך `pnpm.overrides` שמשדרגת `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## SBOM מסוג CycloneDX

כל ארכיון שפורסם כולל SBOM מסוג CycloneDX ב-`dist/sbom.json`.
תוכלו לאמת חבילה שהותקנה זה עתה עם:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@1.1.7
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "1.1.7"
```

ה-SBOM נוצר עם `cyclonedx-npm` במהלך תהליך הפרסום.

<hr class="hr-text" data-content="מקוריות">

## מקוריות npm

הארטיפקט שפורסם חתום באמצעות
[מקוריות חבילת npm](https://docs.npmjs.com/generating-provenance-statements).

תוכלו לאמת זאת לאחר ההתקנה עם:

```bash
npm view @sebastienrousseau/skeletonic-stylus@1.1.7 --json | \
  jq '.dist."npm-signature"'
```

האישור החתום מקשר את הארכיון בחזרה להרצת GitHub Actions המדויקת
שייצרה אותו.

<hr class="hr-text" data-content="CVE">

## CVE ידועים ותיקונים

| CVE | חומרה | סטטוס |
|---|---|---|
| **CVE-2023-44270** (ניתוח שורה חדשה ב-postcss) | בינונית | **תוקנה** ב-v1.1.7 דרך `pnpm.overrides` שמשדרגת `postcss` ל-8.4.31 ומעלה |

מאגר ההמלצות של Snyk ועדכוני GitHub Security Advisories מנוטרים
באופן רציף; תיקוני אבטחה נשלחים כ**שחרורי טלאי**.

<hr class="hr-text" data-content="דיווח">

## דיווח על פגיעות

אנא **אל** תפתחו issue ציבורי ב-GitHub לדיווח אבטחה. במקום זאת,
השתמשו בערוץ הפרטי בכתובת:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

דיווחים מאושרים תוך **72 שעות** ותיקון נשלח תוך **14 יום**
לבעיות בינוניות, **48 שעות** לקריטיות.

[חזרה לדף הבית &larr;](/he/) · [קראו את יומן השינויים &larr;](/he/yoman-shinuyim/)
