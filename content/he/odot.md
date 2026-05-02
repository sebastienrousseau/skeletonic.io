---
title: "אודות Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus היא ספריית CSS קוד פתוח מבוססת Stylus לעיצוב ממשקים נגיש, מהיר ומודולרי."
layout: page
permalink: https://skeletonic.io/he/odot/
date: 2026-04-08
author: Sebastien Rousseau
language: he
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, אודות, stylus, css framework, פילוסופיה"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="כוכבים ב-GitHub" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="הורדות חודשיות" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="גרסת npm" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="גודל חבילה" src="https://img.shields.io/badge/gzip-8.0%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="רישיון" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## בקצרה

**Skeletonic Stylus** היא ספריית CSS קוד פתוח מבוססת
[Stylus](https://stylus-lang.com) שנבנתה כדי להפוך עיצוב ממשקים
נגיש, מהיר ומודולרי.

נולדה ב-2018 כניסוי אישי ב**שליחת פחות CSS** מבלי לוותר על
הארגונומיה של ספריית רכיבים אמיתית. שמונה שנים אחר כך, המטרה
לא השתנתה.

## מה היא מספקת

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="ברק" width="64" height="64" loading="lazy" decoding="async">
    <h3>מהירה כברק</h3>
    <p>עצבו והתאימו אישית ממשקים רספונסיביים תוך דקות. משתני CSS מקוריים, מחלקות מוגדרות מראש, רשת 12 עמודות המכסה כל אלמנט HTML סמנטי.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="נוצה" width="64" height="64" loading="lazy" decoding="async">
    <h3>קלת משקל</h3>
    <p>כ-8.0&nbsp;KB בדחיסת gzip. הדפים נטענים מהר יותר. כל אבן בניין חיונית נשארת.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="מכשירים רספונסיביים" width="64" height="64" loading="lazy" decoding="async">
    <h3>עיצוב רספונסיבי</h3>
    <p>מעוצב לשולחן עבודה ולנייד. הפריסות מתאימות לכל מכשיר. מותאם למגע, HTML סמנטי לאורך כל הדרך.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="נגישות" width="64" height="64" loading="lazy" decoding="async">
    <h3>נגישות</h3>
    <p>WCAG&nbsp;2.2 מובנה: טבעות focus-visible, ניגודיות AA, קישורי דילוג, רכיבים ידידותיים למקלדת, תמיכה בתנועה מופחתת — ללא גיליון סגנונות נוסף, ללא תבנית <code>aria-*</code> מיותרת.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="בלוקי רכיבים" width="64" height="64" loading="lazy" decoding="async">
    <h3>ספריית רכיבים</h3>
    <p>רכיבי CSS מודולריים ומיקסינים של Stylus. כפתורים, טפסים, כרטיסים, התראות, תגיות, פלטות ואנימציות — נקיים, מודולריים, מוכנים לשילוב.</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="סמל GitHub" width="64" height="64" loading="lazy" decoding="async">
    <h3>חינמי וקוד פתוח</h3>
    <p>מעוצב, נבנה ומתוחזק על ידי Sebastien Rousseau. רישיון כפול תחת <strong>MIT</strong> או <strong>Apache&nbsp;2.0</strong>. ללא עלויות, גם לשימוש מסחרי.</p>
  </article>
</div>

## השוואה

גיליון סגנונות יחיד באחסון עצמי מכסה טיפוגרפיה, כפתורים, טפסים,
כרטיסים, טבלאות, פלטות, אנימציות ומחלקות שירות. אפס JavaScript.
ללא שלב בנייה. ללא תלויות עמיתים ב-Bootstrap, Tailwind או Bulma.

| תכונה | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| גודל gzip | **כ-8.0&nbsp;KB** | כ-30&nbsp;KB | כ-10&nbsp;KB (varies) | כ-30&nbsp;KB |
| תאימות WCAG 2.2 | **מובנית** | חלקית | ידנית | חלקית |
| שכבות קסקייד | **כן (`@layer`)** | לא | לא | לא |
| מצב כהה | **`prefers-color-scheme`** | הצטרפות | מבוסס מחלקה | הצטרפות |
| נדרש JavaScript | **לא** | כן (Popper) | לא | לא |
| SBOM מסוג CycloneDX | **כן** | לא | לא | לא |
| תנועה מופחתת | **נכבדת** | חלקית | ידנית | חלקית |
| רישיון | MIT או Apache 2.0 | MIT | MIT | MIT |

## עקרונות

1. **נגישות היא הרצפה, לא התקרה.** תאימות WCAG 2.2 מוטמעת בכל
   רכיב, לעולם לא מוברגת כ"ערכת נושא".
2. **בתים חשובים.** גיליון סגנונות בודד שנשלח לא צריך לפוצץ את
   תקציב משקל הדף. תקרת 8&nbsp;KB בדחיסת gzip נאכפת ב-CI.
3. **שכבות קסקייד מנצחות מלחמות ספציפיות.** דרסו כל דבר בביטחון
   — ללא `!important`, ללא טריקים של סדר DOM.
4. **Stylus עדיין טוב.** תמציתי, אקספרסיבי, ומאפשר לספרייה
   להישאר בכ-3,000 שורות קריאות.
5. **שעמום הוא תכונה.** אפס תלויות JS. אפס קסם בזמן בנייה.
   אפס שינויי שמות שוברים. מחלקות CSS שעושות בדיוק מה שהן אומרות.
6. **התאמה אישית תוך שניות.** משתני CSS מקוריים לצבעים,
   ריווח, טיפוגרפיה ורדיוסים.
7. **שרשרת אספקה מוקשחת.** מקוריות npm חתומה. עדכוני Dependabot
   נעוצים. CVE-2023-44270 תוקנה דרך overrides.

## ניהול גרסאות ו-semver

Skeletonic Stylus פועלת לפי [ניהול גרסאות סמנטי 2.0](https://semver.org).

| קפיצה | מתי | דוגמה |
|---|---|---|
| **מג'ורית** | הסרה או שינוי שם של מחלקה, מיקסין או טוקן ציבורי | 1.x &larr; 2.0 |
| **מינורית** | הוספת רכיב, מיקסין או טוקן חדש | 1.1 &larr; 1.2 |
| **טלאי** | תיקוני באגים, שיפורי נגישות, ביצועים, אבטחה | 1.1.6 &larr; 2.0.0 |

כל שמות המחלקות הציבוריים, כל משתני ה-CSS המותאמים אישית וכל
מיקסיני Stylus המיוצאים הם חלק מה-API הציבורי. שינוי שובר זוכה
לקפיצה מג'ורית ומדריך מעבר.

## ניהול הפרויקט

Skeletonic Stylus מעוצב, נבנה ומתוחזק על ידי
[Sebastien Rousseau](https://sebastienrousseau.com). רישיון כפול
תחת [MIT](https://opensource.org/licenses/MIT)
ו-[Apache 2.0](https://opensource.org/licenses/Apache-2.0).

בעיות, רעיונות ותרומות מוזמנים —
[ראו את מדריך התרומה](/he/truma/).
