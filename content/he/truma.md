---
title: "תרומה"
name: "Skeletonic Stylus"
description: "כיצד לדווח על בעיות, להציע שינויים ולהגיש Pull Requests ל-Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/he/truma/
date: 2026-04-08
author: Sebastien Rousseau
language: he
theme_color: "hsl(210, 100%, 42%)"
keywords: "תרומה, קוד פתוח, pull request, issue, מוסכמות"
---

Skeletonic Stylus הוא פרויקט קוד פתוח; תרומות בכל גודל מתקבלות
בברכה — מתיקוני שגיאות כתיב ועד רכיבים חדשים.

<hr class="hr-text" data-content="התחלה מהירה">

## התחלה מהירה

```bash
# 1. פצלו ושכפלו
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. התקנה (pnpm via corepack)
corepack enable
pnpm install

# 3. בנייה
pnpm run build           # צינור מלא (stylus → prettier → stylelint → autoprefixer → csso)

# 4. בדיקת איכות ובדיקות
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="מוסכמות">

## מוסכמות

- **שמות ענפים:** `feat/short-thing`, `fix/short-thing`, `docs/short-thing`.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org).
  כל ה-commits חתומים.
- **Stylus:** הזחה של 4 רווחים, ללא נקודה-פסיק, העדפת `$variables`
  על מספרי קסם, כל מחלקה ציבורית חיה בשכבת קסקייד.
- **נגישות:** כל רכיב חדש חייב להוכיח עמידה ב-WCAG 2.2 AA; הריצו
  `node scripts/a11y-test.mjs` מול דף התצוגה לפני פתיחת PR.
- **תקציב גודל:** גיליון הסגנונות הליבתי חייב להישאר מתחת ל-**8 KB
  בדחיסת gzip**. אם השינוי שלכם דוחף מעבר, נמקו זאת ב-PR.

<hr class="hr-text" data-content="Pull Requests">

## Pull Requests

1. פתחו issue קודם לכל דבר שאינו טריוויאלי — חוסך עבודה מחדש.
2. שמרו על PR ממוקד: שינוי לוגי אחד לכל PR.
3. עדכנו את `CHANGELOG.md` תחת "Unreleased".
4. ודאו ש-CI ירוק לפני בקשת סקירה.
5. Squash-merge הוא ברירת המחדל; הודעות commit ינוקו במיזוג.

<hr class="hr-text" data-content="קוד התנהגות">

## קוד התנהגות

בהשתתפותכם, אתם מסכימים לפעול בהתאם
ל-[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
היו אדיבים, סבלניים, והניחו כוונה טובה.

[פתחו issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[פתחו PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
