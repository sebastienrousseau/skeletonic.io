---
title: "घटक"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus के हर घटक के लाइव HTML उदाहरण, समूहीकृत, एंकर्ड, और उसी स्टाइलशीट से रेंडर जिसका डेमो दिया जा रहा है।"
layout: page
permalink: https://skeletonic.io/hi/ghatak/
date: 2026-04-08
author: Sebastien Rousseau
language: hi
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic घटक, बटन, कार्ड, फ़ॉर्म, अलर्ट, बैज, हेडर, navbar, css only hamburger"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

नीचे दिया गया हर उदाहरण **उसी स्टाइलशीट से रेंडर** हो रहा है जिसका
डेमो दिया जा रहा है। कोई प्रीप्रोसेसर नहीं। कोई JavaScript नहीं। कोई
अतिरिक्त निर्भरता नहीं। किसी भी स्निपेट को एक ताज़ी HTML फ़ाइल में
कॉपी करें और वह काम करेगा।

<nav aria-label="इस पेज पर">
<p><strong>इस पेज पर</strong></p>
<ul>
<li><strong>इनपुट</strong> — <a href="#buttons">बटन</a> · <a href="#badges">बैज</a></li>
<li><strong>फ़ीडबैक</strong> — <a href="#alerts">अलर्ट</a></li>
<li><strong>सतह</strong> — <a href="#cards">कार्ड</a></li>
<li><strong>फ़ॉर्म</strong> — <a href="#form-fields">फ़ॉर्म फ़ील्ड</a></li>
<li><strong>लेआउट</strong> — <a href="#grid">ग्रिड</a> · <a href="#header">हेडर और हैमबर्गर नेव</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="इनपुट">

<h2 id="inputs">इनपुट</h2>

इंटरैक्टिव तत्व जिन पर विज़िटर पेज चलाने के लिए क्लिक, टैप या
फ़ोकस करता है।

<h3 id="buttons">बटन</h3>

एक सिमैंटिक, थीम करने योग्य एक्शन ट्रिगर। सॉलिड और आउटलाइन
वेरिएंट छह ब्रांड रंगों में उपलब्ध हैं।

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">Primary</a>
  <a href="#" class="button secondary">Secondary</a>
  <a href="#" class="button tertiary">Tertiary</a>
</p>
</section>

आउटलाइन वेरिएंट:

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">Outline</a>
  <a href="#" class="button secondary-outline">Outline</a>
</p>

> **सुलभता नोट।** हर `.button` वेरिएंट `:focus-visible` रिंग और
> **24×24&nbsp;px न्यूनतम हिट एरिया** (WCAG&nbsp;2.2 SC&nbsp;2.5.8)
> के साथ आता है। इन-पेज एक्शन के लिए `<button type="button">`
> और नेविगेशन के लिए `<a href>` इस्तेमाल करें।

<h3 id="badges">बैज</h3>

स्थिति, गिनती या श्रेणी के लिए एक कॉम्पैक्ट लेबल। टेक्स्ट साइज़
फ़िक्स है ताकि बैज आसपास के टेक्स्ट के साथ अलाइन हों।

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">Default</span>
  <span class="badge primary">Primary</span>
  <span class="badge success">Success</span>
  <span class="badge warning">Warning</span>
  <span class="badge danger">Danger</span>
</p>
</section>

> **सुलभता नोट।** बैज डिफ़ॉल्ट रूप से सजावटी हैं। जब बैज एकमात्र
> संकेत देता है (जैसे अपठित गिनती), तो इसे विज़ुअली-हिडन हेल्पर
> में लपेटें: `<span class="visually-hidden">3 अपठित
> संदेश</span>`।

<hr class="hr-text" data-content="फ़ीडबैक">

<h2 id="feedback">फ़ीडबैक</h2>

वे सतहें जो विज़िटर को बताती हैं कि कुछ हुआ है — या होने वाला है।

<h3 id="alerts">अलर्ट</h3>

सिमैंटिक इंटेंट वाले स्टेटस संदेश। **v2.0.0 में हर वेरिएंट स्पष्ट
रूप से** `.alert-{primary,secondary,info,success,warning,error}` के
तहत नेमस्पेस्ड है ताकि वेरिएंट क्लास पेज पर कहीं और स्टेट क्लास से
न टकराए।

```html
<div class="alert alert-primary" role="alert">
  <strong>ध्यान दें।</strong> यह एक प्राइमरी अलर्ट है।
</div>
<div class="alert alert-success" role="status">
  <strong>सहेजा गया।</strong> आपके बदलाव सुरक्षित हैं।
</div>
<div class="alert alert-warning" role="alert">
  <strong>सावधान।</strong> यह क्रिया साझा स्थिति को प्रभावित करती है।
</div>
<div class="alert alert-error" role="alert">
  <strong>त्रुटि।</strong> फ़ॉर्म सहेजा नहीं जा सका।
</div>
```

<section aria-labelledby="alerts">
<div class="alert alert-primary" role="alert">
<strong>ध्यान दें।</strong> यह एक प्राइमरी अलर्ट है।
</div>

<div class="alert alert-success" role="status">
<strong>सहेजा गया।</strong> आपके बदलाव सुरक्षित हैं।
</div>

<div class="alert alert-warning" role="alert">
<strong>सावधान।</strong> यह क्रिया साझा स्थिति को प्रभावित करती है।
</div>

<div class="alert alert-error" role="alert">
<strong>त्रुटि।</strong> फ़ॉर्म सहेजा नहीं जा सका।
</div>
</section>

> **सुलभता नोट।** तत्काल ध्यान माँगने वाले संदेशों (त्रुटियाँ,
> चेतावनियाँ) के लिए `role="alert"` और गैर-ज़रूरी पुष्टि के लिए
> `role="status"` इस्तेमाल करें। दोनों संदेश दिखते ही सहायक तकनीक
> को सुलभ बनाते हैं।

<hr class="hr-text" data-content="सतह">

<h2 id="surface">सतह</h2>

कंटेनर जो संबंधित सामग्री को फ़्रेम और समूहित करते हैं।

<h3 id="cards">कार्ड</h3>

एक बॉर्डर्ड, पैडेड कंटेनर एक एकल सुसंगत इकाई के लिए। रिस्पॉन्सिव
कार्ड वॉल के लिए `flex-N` ग्रिड के साथ जोड़ें।

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">हल्की</h3>
      <p>39.1 KB minified, 7.8 KB gzipped।</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">सुलभ</h3>
      <p>WCAG 2.2 बॉक्स से निकलते ही अनुरूप।</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">मॉड्यूलर</h3>
      <p>आसान ओवरराइड के लिए cascade-layered।</p>
    </div>
  </article>
</section>
```

<section class="row" aria-labelledby="cards">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">हल्की</h3>
      <p>39.1&nbsp;KB minified, 7.8&nbsp;KB gzipped।</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">सुलभ</h3>
      <p>WCAG&nbsp;2.2 बॉक्स से निकलते ही अनुरूप।</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">मॉड्यूलर</h3>
      <p>आसान ओवरराइड के लिए cascade-layered।</p>
    </div>
  </article>
</section>

> **सुलभता नोट।** हर कार्ड को सिमैंटिक लैंडमार्क (`<article>`,
> `<section>`) में लपेटें और उसकी सामग्री को हेडिंग (`<h3>`) से शुरू
> करें। स्क्रीन-रीडर उपयोगकर्ता तब कार्ड सूची को प्रथम श्रेणी
> नेविगेबल क्षेत्रों के रूप में ट्रैवर्स कर सकते हैं।

<hr class="hr-text" data-content="फ़ॉर्म">

<h2 id="forms">फ़ॉर्म</h2>

उपयोगकर्ता डेटा एकत्र करने के लिए इनपुट, लेबल और ग्रुपिंग।

<h3 id="form-fields">फ़ॉर्म फ़ील्ड</h3>

लेबल, टेक्स्ट इनपुट, टेक्स्टएरिया, फ़ील्डसेट और लीजेंड — सब डिज़ाइन
सिस्टम के बाकी हिस्सों के साथ समान आकार में।

```html
<form>
  <label for="name">नाम</label>
  <input id="name" type="text" required>

  <label for="email">ईमेल</label>
  <input id="email" type="email" required class="input-primary">

  <label for="msg">संदेश</label>
  <textarea id="msg" rows="4"></textarea>

  <button type="submit" class="button primary">भेजें</button>
</form>
```

<section aria-labelledby="form-fields">
<form>
  <label for="demo-name">नाम</label>
  <input id="demo-name" type="text">

  <label for="demo-email">ईमेल</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">संदेश</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">भेजें (डेमो)</button></p>
</form>
</section>

> **सुलभता नोट।** हर इनपुट के साथ प्रोग्रामेटिक रूप से जुड़ा
> `<label for="…">` होना चाहिए। संबंधित नियंत्रणों को `<fieldset>`
> में `<legend>` के साथ समूहित करें। आवश्यक फ़ील्ड को `required`
> (और लेबल टेक्स्ट में दृश्य तारांकन) के साथ चिह्नित करें।

<hr class="hr-text" data-content="लेआउट">

<h2 id="layout">लेआउट</h2>

संरचनात्मक आधारभूत तत्व — ग्रिड, कंटेनर, हेडर — जो पूरे पेज को
फ़्रेम करते हैं।

<h3 id="grid">ग्रिड</h3>

flexbox पर निर्मित एक रिस्पॉन्सिव `flex-N` ग्रिड (1 → 12 कॉलम)।
`.row` पैरेंट स्वचालित रूप से गैप और रैप करता है।

```html
<div class="row">
  <div class="flex-6">आधा</div>
  <div class="flex-6">आधा</div>
</div>
<div class="row">
  <div class="flex-4">तिहाई</div>
  <div class="flex-4">तिहाई</div>
  <div class="flex-4">तिहाई</div>
</div>
```

<section aria-labelledby="grid">
<div style="display:flex;flex-wrap:wrap;gap:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">आधा</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">आधा</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">तिहाई</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">तिहाई</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">तिहाई</div>
</div>
</section>

> **सुलभता नोट।** विज़ुअल क्रम DOM क्रम से मेल खाना चाहिए।
> `flex-direction: row-reverse` या `order:` से पंक्तियों को पुनर्व्यवस्थित
> करने से बचें — स्क्रीन रीडर और कीबोर्ड उपयोगकर्ता सोर्स का अनुसरण
> करते हैं, पेंट का नहीं।

<h3 id="header">हेडर और हैमबर्गर नेव</h3>

रिस्पॉन्सिव हैमबर्गर टॉगल के साथ एक पूर्ण CSS-only हेडर। **शून्य
JavaScript।** नीचे दिया गया स्निपेट एक ताज़ी HTML पेज में कॉपी करें
जो पहले से `skeletonic.min.css` लोड करता है और मेनू अपने आप
collapse, expand और focus trap करता है।

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
  <a class="sk-brand" href="#">ब्रांड</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="नेविगेशन टॉगल करें">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">होम</a></li>
    <li><a href="#">डॉक्स</a></li>
    <li><a href="#">घटक</a></li>
    <li><a href="#">परिचय</a></li>
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
  <a class="sk-brand" href="#">ब्रांड</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="नेविगेशन टॉगल करें">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">होम</a></li>
    <li><a href="#">डॉक्स</a></li>
    <li><a href="#">घटक</a></li>
    <li><a href="#">परिचय</a></li>
  </ul>
</header>
</section>

> **सुलभता नोट।** छिपा हुआ चेकबॉक्स टैब क्रम में रहता है ताकि
> कीबोर्ड उपयोगकर्ता `Space` या `Enter` से मेनू खोल सकें। `<label>`
> पर `aria-hidden` है क्योंकि चेकबॉक्स स्वयं सुलभ नाम स्रोत है।
> बर्गर टॉगल देखने के लिए विंडो को 640&nbsp;px से नीचे resize करें।

[पूर्ण a11y नोट्स देखें →](/hi/sulabhata/) · [पैलेट देखें →](/hi/rang-patti/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Skeletonic Stylus घटक",
  "description": "Skeletonic Stylus v2.0.0 में शिप होने वाला हर घटक।",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "बटन",
      "url": "https://skeletonic.io/hi/ghatak/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "बैज",
      "url": "https://skeletonic.io/hi/ghatak/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "अलर्ट",
      "url": "https://skeletonic.io/hi/ghatak/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "कार्ड",
      "url": "https://skeletonic.io/hi/ghatak/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "फ़ॉर्म फ़ील्ड",
      "url": "https://skeletonic.io/hi/ghatak/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "ग्रिड",
      "url": "https://skeletonic.io/hi/ghatak/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "हेडर और हैमबर्गर नेव",
      "url": "https://skeletonic.io/hi/ghatak/#header"
    }
  ]
}
</script>
