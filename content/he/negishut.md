---
title: "נגישות — WCAG 2.2 ב-v1.1.7"
name: "Skeletonic Stylus"
description: "מה v1.1.7 מספקת ישירות מהקופסה לתאימות WCAG 2.2 — טבעות פוקוס, ניגודיות, קישורי דילוג, תנועה ומצב כהה."
layout: page
permalink: https://skeletonic.io/he/negishut/
date: 2026-04-08
author: Sebastien Rousseau
language: he
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, נגישות, focus visible, קישור דילוג, prefers reduced motion, ניגודיות"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v1.1.7 מספקת תאימות WCAG 2.2 כהתנהגות ברירת
> מחדל, לא כערכת נושא אופציונלית.** דף זה מתעד את מה שמובנה ואילו
> מיקסינים תוכלו להצטרף אליהם לשליטה עדינה יותר.

<hr class="hr-text" data-content="מה שמגיע">

## מה אתם מקבלים חינם

| WCAG 2.2 SC | מה v1.1.7 עושה | כיצד לאמת |
|---|---|---|
| **1.4.3 ניגודיות (מינימום) — AA** | `--cl-primary` ו-`--cl-secondary` הוכהו ל-4.5:1 לפחות מול לבן | DevTools &larr; בודק ניגודיות |
| **1.4.11 ניגודיות לא-טקסטואלית — AA** | גבולות טפסים, כפתורים, תגיות 3:1 לפחות | כנ"ל |
| **2.4.7 פוקוס נראה — AA** | לכל אלמנט ממוקד טבעת `:focus-visible` (צהובה על רקע כהה, כחולה על בהיר) | `Tab` בכל דף |
| **2.4.11 פוקוס לא מוסתר — AA (חדש ב-2.2)** | כותרת דביקה בגובה מופחת + scroll-margin של פוקוס | `Tab` מעבר לכותרת הדביקה |
| **2.5.8 גודל יעד — AA (חדש ב-2.2)** | כפתורים / קישורים: שטח לחיצה של 24x24 CSS px לפחות | DevTools מודל קופסה |
| **1.4.12 ריווח טקסט — AA** | כל האלמנטים מכבדים דריסות line-height / letter-spacing של המשתמש | דריסה ב-DevTools |
| **2.3.3 אנימציה מאינטראקציות — AAA** | כל מחלקות האנימציה עטופות ב-`@media (prefers-reduced-motion: no-preference)` | הפחתת תנועה ברמת מערכת ההפעלה |
| **1.4.10 זרימה מחדש — AA** | הפריסה עובדת ב-320 px ללא גלילה אופקית | DevTools תצוגה צרה |
| **מצב כהה** | `prefers-color-scheme: dark` מחליף טוקנים אוטומטית | מתג מצב כהה במערכת ההפעלה |

<hr class="hr-text" data-content="מיקסינים">

## מיקסיני Stylus להצטרפות

אם אתם מהדרים מהמקור, המיקסינים הבאים זמינים ב-
`src/stylus/utilities/mixins.styl`:

| מיקסין | שימוש |
|---|---|
| `focus-ring()` | טבעת פוקוס בניגודיות גבוהה המכבדת `:focus-visible` |
| `visually-hidden()` | טקסט לקורא מסך בלבד שנשאר ניתן למיקוד |
| `skip-link()` | עוגן שהופך גלוי במיקוד |
| `reduced-motion()` | עוטף כל בלוק ב-`prefers-reduced-motion: no-preference` |
| `forced-colors()` | התאמות למצב ניגודיות גבוהה של Windows |
| `target-size(24px)` | מרפד כל אלמנט לחיץ ליעד מגע מינימלי |

דוגמה:

```stylus
// החלת טבעת פוקוס חזקה על כפתור מותאם
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="קישור דילוג">

## עזר קישור הדילוג

הכניסו זאת **כדבר הראשון בתוך `<body>`**:

```html
<a href="#main-content" class="skip-link">דלג לתוכן הראשי</a>
```

המחלקה **אינה** בגיליון הסגנונות הליבתי (כך שמשקל הדף לא זז);
זהו קטע קוד בן 4 שורות שתרכיבו בעצמכם או שתשתמשו במיקסין
`skip-link()` המצורף. אתר זה משתמש בו — מקדו את הדף ולחצו Tab
כדי לראות אותו מופיע למעלה.

<hr class="hr-text" data-content="אימות">

## אימות הדפים שלכם

הספרייה מגיעה עם סקריפט `a11y-test.mjs` תחת `scripts/` שמריץ
[axe-core](https://github.com/dequelabs/axe-core) מול כל URL
שתספקו לו.

```bash
node scripts/a11y-test.mjs https://example.com
```

CI מריץ סקריפט זה מול דף התצוגה `dist/index.html` בכל push.

[קראו על שחרור v1.1.7 &larr;](/he/yoman-shinuyim/) ·
[ראו את דף האבטחה &larr;](/he/avtakha/)
