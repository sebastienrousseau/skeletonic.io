---
title: "רכיבים"
name: "Skeletonic Stylus"
description: "דוגמאות HTML חיות לכל רכיב ב-Skeletonic Stylus, מקובצות, מעוגנות ומוצגות עם גיליון הסגנונות עצמו."
layout: page
permalink: https://skeletonic.io/he/rekhivim/
date: 2026-04-08
author: Sebastien Rousseau
language: he
theme_color: "hsl(210, 100%, 42%)"
keywords: "רכיבי skeletonic, כפתורים, כרטיסים, טפסים, התראות, תגיות, כותרת, ניווט hamburger, css only"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

כל דוגמה למטה **מוצגת עם גיליון הסגנונות עצמו**. ללא מעבד מקדים.
ללא JavaScript. ללא תלויות נוספות. העתיקו כל קטע קוד לקובץ HTML
ריק והוא עובד.

<nav aria-label="בדף זה">
<p><strong>בדף זה</strong></p>
<ul>
<li><strong>קלטים</strong> — <a href="#buttons">כפתורים</a> · <a href="#badges">תגיות</a></li>
<li><strong>משוב</strong> — <a href="#alerts">התראות</a></li>
<li><strong>משטחים</strong> — <a href="#cards">כרטיסים</a></li>
<li><strong>טפסים</strong> — <a href="#form-fields">שדות טופס</a></li>
<li><strong>פריסה</strong> — <a href="#grid">רשת</a> · <a href="#header">כותרת וניווט hamburger</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="קלטים">

<h2 id="inputs">קלטים</h2>

אלמנטים אינטראקטיביים שהמבקר לוחץ עליהם, מקיש או מביא לפוקוס
כדי להפעיל את הדף.

<h3 id="buttons">כפתורים</h3>

טריגר פעולה סמנטי וניתן להתאמה. גרסאות מלאות ומתאר מגיעות בשישה
צבעי מותג כל אחת.

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">ראשי</a>
  <a href="#" class="button secondary">משני</a>
  <a href="#" class="button tertiary">שלישוני</a>
</p>
</section>

גרסאות מתאר:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">מתאר</a>
  <a href="#" class="button secondary-outline">מתאר</a>
</p>

> **הערת נגישות.** כל גרסת `.button` מגיעה עם טבעת
> `:focus-visible` ו**שטח לחיצה מינימלי של 24×24&nbsp;px**
> (WCAG&nbsp;2.2 SC&nbsp;2.5.8). השתמשו ב-`<button type="button">`
> לפעולות בדף וב-`<a href>` רק לניווט.

<h3 id="badges">תגיות</h3>

תווית קומפקטית לסטטוס, מנייה או קטגוריה. גודל הטקסט קבוע כך
שהתגיות מיושרות עם הטקסט הסובב.

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">ברירת מחדל</span>
  <span class="badge primary">ראשי</span>
  <span class="badge success">הצלחה</span>
  <span class="badge warning">אזהרה</span>
  <span class="badge danger">סכנה</span>
</p>
</section>

> **הערת נגישות.** תגיות הן דקורטיביות כברירת מחדל. כשהתגית
> נושאת את האות היחיד (למשל מונה הודעות שלא נקראו), עטפו אותה
> בעזר מוסתר ויזואלית: `<span class="visually-hidden">3 הודעות
> שלא נקראו</span>`.

<hr class="hr-text" data-content="משוב">

<h2 id="feedback">משוב</h2>

משטחים שמודיעים למבקר שמשהו קרה — או עומד לקרות.

<h3 id="alerts">התראות</h3>

הודעות סטטוס עם כוונה סמנטית. **ב-v2.0.0 כל גרסה ממורחבת
במפורש** תחת `.alert-{primary,secondary,info,success,warning,error}`
כך שמחלקת הגרסה לא תתנגש עם מחלקות מצב במקומות אחרים בדף.

```html
<div class="alert alert-primary" role="alert">
  <strong>Heads up.</strong> This is a primary alert.
</div>
<div class="alert alert-success" role="status">
  <strong>Saved.</strong> Your changes are persisted.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Careful.</strong> This action affects shared state.
</div>
<div class="alert alert-error" role="alert">
  <strong>Error.</strong> Could not save the form.
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>שימו לב.</strong> זוהי התראה ראשית.
</div>

<div class="alert alert-success" role="status">
<strong>נשמר.</strong> השינויים שלכם נשמרו.
</div>

<div class="alert alert-warning" role="alert">
<strong>זהירות.</strong> פעולה זו משפיעה על מצב משותף.
</div>

<div class="alert alert-error" role="alert">
<strong>שגיאה.</strong> לא ניתן היה לשמור את הטופס.
</div>
</section>

> **הערת נגישות.** השתמשו ב-`role="alert"` להודעות הדורשות
> תשומת לב מיידית (שגיאות, אזהרות) וב-`role="status"` לאישורים
> לא דחופים. שניהם חושפים את ההודעה לטכנולוגיה מסייעת ברגע
> שהיא מופיעה.

<hr class="hr-text" data-content="משטחים">

<h2 id="surface">משטחים</h2>

מכולות שממסגרות ומקבצות תוכן קשור.

<h3 id="cards">כרטיסים</h3>

מכולה עם גבול ומרווח לקבוצת תוכן קוהרנטית. שלבו עם רשת `flex-N`
לקירות כרטיסים רספונסיביים.

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lightweight</h3>
      <p>39.1 KB minified, 7.8 KB gzipped.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Accessible</h3>
      <p>WCAG 2.2 conformant out of the box.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Modular</h3>
      <p>Cascade-layered for easy overrides.</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">קל משקל</h3>
      <p>39.1&nbsp;KB ממוזער, 7.8&nbsp;KB בדחיסת gzip.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">נגיש</h3>
      <p>תואם WCAG&nbsp;2.2 ישירות מהקופסה.</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">מודולרי</h3>
      <p>מאורגן בשכבות קסקייד לדריסה קלה.</p>
    </div>
  </article>
</section>

> **הערת נגישות.** עטפו כל כרטיס בציון סמנטי
> (`<article>`, `<section>`) והתחילו את תוכנו בכותרת
> (`<h3>`). משתמשי קוראי מסך יוכלו אז לנווט ברשימת הכרטיסים
> כאזורים ניווטיים מדרגה ראשונה.

<hr class="hr-text" data-content="טפסים">

<h2 id="forms">טפסים</h2>

קלטים, תוויות וקיבוצים לאיסוף נתוני משתמש.

<h3 id="form-fields">שדות טופס</h3>

תוויות, שדות טקסט, אזורי טקסט, מערכות שדות וכותרות — הכול
בגודל עקבי עם שאר מערכת העיצוב.

```html
<form>
  <label for="name">Name</label>
  <input id="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">Message</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">Send</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">שם</label>
  <input id="demo-name" type="text">

  <label for="demo-email">דוא"ל</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">הודעה</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">שלח (הדגמה)</button></p>
</form>
</section>

> **הערת נגישות.** לכל קלט חייבת להיות `<label for="…">`
> משויכת פרוגרמטית. קבצו פקדים קשורים בתוך `<fieldset>` עם
> `<legend>`. סמנו שדות חובה עם `required` (וכוכבית נראית
> בטקסט התווית).

<hr class="hr-text" data-content="פריסה">

<h2 id="layout">פריסה</h2>

פרימיטיבים מבניים — רשת, מכולה, כותרת — שממסגרים את הדף כולו.

<h3 id="grid">רשת</h3>

רשת רספונסיבית `flex-N` (מ-1 עד 12 עמודות) בנויה על flexbox.
אלמנט האב `.row` מוסיף מרווחים ועוטף אוטומטית.

```html
<div class="row">
  <div class="flex-6">Half</div>
  <div class="flex-6">Half</div>
</div>
<div class="row">
  <div class="flex-4">Third</div>
  <div class="flex-4">Third</div>
  <div class="flex-4">Third</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">חצי</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">חצי</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">שליש</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">שליש</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">שליש</div>
</div>
</section>

> **הערת נגישות.** הסדר הוויזואלי צריך לתאום את סדר ה-DOM. הימנעו
> מסידור מחדש של שורות עם `flex-direction: row-reverse` או `order:`
> — קוראי מסך ומשתמשי מקלדת עוקבים אחרי המקור, לא אחרי הציור.

<h3 id="header">כותרת וניווט hamburger</h3>

כותרת מלאה מבוססת CSS בלבד עם מתג hamburger רספונסיבי. **אפס
JavaScript.** העתיקו את הקטע למטה לדף HTML ריק שכבר טוען את
`skeletonic.min.css` והתפריט מתקפל, מתרחב ולוכד פוקוס כראוי
בעצמו.

```html
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">Brand</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="Toggle navigation">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Components</a></li>
    <li><a href="#">About</a></li>
  </ul>
</header>
```

<section aria-labelledby="header">
<style>
  .sk-header{position:relative;display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;border:1px solid #e4e4e7;border-radius:.5rem;background:#fff;}
  .sk-header .sk-brand{font-weight:600;color:#0a0a0a;text-decoration:none;}
  .sk-header .sk-toggle{position:absolute;left:-9999px;}
  .sk-header .sk-burger{display:none;margin-left:auto;cursor:pointer;padding:.625rem .75rem;border:1px solid #e4e4e7;border-radius:.375rem;font-size:1.125rem;line-height:1;min-width:2.75rem;min-height:2.75rem;}
  .sk-header .sk-burger:focus-within,.sk-header .sk-toggle:focus-visible+.sk-burger{outline:2px solid hsl(210,100%,42%);outline-offset:2px;}
  .sk-header .sk-menu{list-style:none;display:flex;gap:.25rem;margin:0 0 0 auto;padding:0;}
  .sk-header .sk-menu a{display:inline-flex;align-items:center;min-height:2.75rem;padding:.5rem .875rem;border-radius:.375rem;color:#1a1a1a;text-decoration:none;}
  .sk-header .sk-menu a:hover{background:#f4f4f5;}
  @media (max-width:640px){
    .sk-header .sk-burger{display:inline-flex;align-items:center;justify-content:center;}
    .sk-header .sk-menu{display:none;flex-direction:column;gap:0;position:absolute;top:calc(100% + .25rem);left:0;right:0;background:#fff;border:1px solid #e4e4e7;border-radius:.5rem;padding:.375rem;box-shadow:0 4px 24px rgba(0,0,0,.08);z-index:10;}
    .sk-header .sk-menu a{padding:.75rem 1rem;border-bottom:1px solid #f4f4f5;}
    .sk-header .sk-menu li:last-child a{border-bottom:0;}
    .sk-header .sk-toggle:checked ~ .sk-menu{display:flex;}
  }
</style>
<header class="sk-header">
  <a class="sk-brand" href="#">מותג</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="החלפת ניווט">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">בית</a></li>
    <li><a href="#">תיעוד</a></li>
    <li><a href="#">רכיבים</a></li>
    <li><a href="#">אודות</a></li>
  </ul>
</header>
</section>

> **הערת נגישות.** תיבת הסימון המוסתרת נשארת בסדר הטאבים כך
> שמשתמשי מקלדת יכולים לפתוח את התפריט עם `Space` או `Enter`.
> ה-`<label>` נושא `aria-hidden` כי תיבת הסימון עצמה היא מקור
> השם הנגיש. צמצמו את החלון מתחת ל-640&nbsp;px כדי לראות את מתג
> ה-burger משתלט.

[ראו הערות נגישות מלאות &larr;](/he/negishut/) · [עיינו בפלטות &larr;](/he/paleta/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "רכיבי Skeletonic Stylus",
  "description": "כל רכיב שנשלח ב-Skeletonic Stylus v2.0.0.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "כפתורים",
      "url": "https://skeletonic.io/he/rekhivim/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "תגיות",
      "url": "https://skeletonic.io/he/rekhivim/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "התראות",
      "url": "https://skeletonic.io/he/rekhivim/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "כרטיסים",
      "url": "https://skeletonic.io/he/rekhivim/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "שדות טופס",
      "url": "https://skeletonic.io/he/rekhivim/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "רשת",
      "url": "https://skeletonic.io/he/rekhivim/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "כותרת וניווט hamburger",
      "url": "https://skeletonic.io/he/rekhivim/#header"
    }
  ]
}
</script>
