---
title: "組件"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus 每個組件的即時 HTML 範例，分組、錨定，並使用展示中的樣式表進行渲染。"
language: zh-hant
layout: page
permalink: https://skeletonic.io/zh-hant/zu-jian/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic 組件, 按鈕, 卡片, 表單, 提示框, 徽章, 頁首, 導覽列, 純 css 漢堡選單"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

以下每個範例均使用**正在展示的樣式表**進行渲染。無需預處理器、無需 JavaScript、無額外依賴。將任何片段複製到空白 HTML 檔案中即可運作。

<nav aria-label="本頁目錄">
<p><strong>本頁目錄</strong></p>
<ul>
<li><strong>輸入元素</strong> — <a href="#buttons">按鈕</a> · <a href="#badges">徽章</a></li>
<li><strong>回饋</strong> — <a href="#alerts">提示框</a></li>
<li><strong>表面</strong> — <a href="#cards">卡片</a></li>
<li><strong>表單</strong> — <a href="#form-fields">表單欄位</a></li>
<li><strong>版面</strong> — <a href="#grid">格線</a> · <a href="#header">頁首與漢堡導覽</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="輸入元素">

<h2 id="inputs">輸入元素</h2>

訪客透過點擊、觸控或聚焦來驅動頁面的互動元素。

<h3 id="buttons">按鈕</h3>

語義化、可定製主題的操作觸發器。實心與邊框變體各提供六種品牌色彩。

```html
<a href="#" class="button primary">Primary</a>
<a href="#" class="button secondary">Secondary</a>
<a href="#" class="button tertiary">Tertiary</a>
```

<section aria-labelledby="buttons">
<p>
  <a href="#" class="button primary">主要</a>
  <a href="#" class="button secondary">次要</a>
  <a href="#" class="button tertiary">第三</a>
</p>
</section>

邊框變體：

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">邊框</a>
  <a href="#" class="button secondary-outline">邊框</a>
</p>

> **無障礙提示。** 每個 `.button` 變體均附帶 `:focus-visible` 焦點環和 **24×24&nbsp;px 最小點擊區域**（WCAG&nbsp;2.2 SC&nbsp;2.5.8）。頁面內操作請使用 `<button type="button">`，導覽操作則使用 `<a href>`。

<h3 id="badges">徽章</h3>

用於狀態、計數或分類的緊湊標籤。文字大小固定，確保徽章與周圍文字對齊。

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">預設</span>
  <span class="badge primary">主要</span>
  <span class="badge success">成功</span>
  <span class="badge warning">警告</span>
  <span class="badge danger">危險</span>
</p>
</section>

> **無障礙提示。** 徽章預設為裝飾性元素。當徽章承載唯一訊號（例如未讀計數）時，請使用視覺隱藏輔助：`<span class="visually-hidden">3 則未讀訊息</span>`。

<hr class="hr-text" data-content="回饋">

<h2 id="feedback">回饋</h2>

告知訪客事件已發生（或即將發生）的表面元素。

<h3 id="alerts">提示框</h3>

帶有語義意圖的狀態訊息。**在 v2.0.0 中，每個變體均明確以 `.alert-{primary,secondary,info,success,warning,error}` 命名空間化**，使變體類別不會與頁面上其他狀態類別衝突。

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
<strong>請注意。</strong> 這是一個主要提示框。
</div>

<div class="alert alert-success" role="status">
<strong>已儲存。</strong> 您的變更已持久化。
</div>

<div class="alert alert-warning" role="alert">
<strong>請小心。</strong> 此操作會影響共用狀態。
</div>

<div class="alert alert-error" role="alert">
<strong>錯誤。</strong> 無法儲存表單。
</div>
</section>

> **無障礙提示。** 對需要立即關注的訊息（錯誤、警告）使用 `role="alert"`，對非緊急確認使用 `role="status"`。兩者都會在訊息出現的瞬間向輔助技術公開內容。

<hr class="hr-text" data-content="表面">

<h2 id="surface">表面</h2>

框架化並組織相關內容的容器。

<h3 id="cards">卡片</h3>

帶有邊框和內距的容器，用於承載單一內聚單元。搭配 `flex-N` 格線可建立響應式卡片牆。

```html
<section class="row">
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">Lightweight</h3>
      <p>40.6 KB minified, 8.0 KB gzipped.</p>
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
      <h3 class="card-title">輕量級</h3>
      <p>壓縮後 40.6&nbsp;KB，gzip 後 8.0&nbsp;KB。</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">無障礙</h3>
      <p>開箱即符合 WCAG&nbsp;2.2。</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">模組化</h3>
      <p>級聯層架構，輕鬆覆寫。</p>
    </div>
  </article>
</section>

> **無障礙提示。** 將每張卡片包裹在語義化地標中（`<article>`、`<section>`），並以標題（`<h3>`）開始其內容。螢幕閱讀器使用者即可將卡片清單作為一級可導覽區域來瀏覽。

<hr class="hr-text" data-content="表單">

<h2 id="forms">表單</h2>

用於收集使用者資料的輸入框、標籤和分組。

<h3 id="form-fields">表單欄位</h3>

標籤、文字輸入框、文字區域、欄位集和圖例——所有尺寸均與設計系統的其他部分保持一致。

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
  <label for="demo-name">姓名</label>
  <input id="demo-name" type="text">

  <label for="demo-email">電子郵件</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">訊息</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">發送（示範）</button></p>
</form>
</section>

> **無障礙提示。** 每個輸入框必須有程式化關聯的 `<label for="…">`。將相關控制項放入 `<fieldset>` 並附上 `<legend>`。使用 `required` 標記必填欄位（並在標籤文字中加上可見的星號）。

<hr class="hr-text" data-content="版面">

<h2 id="layout">版面</h2>

結構化基礎元素——格線、容器、頁首——用於構建整個頁面。

<h3 id="grid">格線</h3>

基於 flexbox 的響應式 `flex-N` 格線（1 → 12 欄）。`.row` 父元素自動處理間距與換行。

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
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">一半</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">一半</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">三分之一</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">三分之一</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">三分之一</div>
</div>
</section>

> **無障礙提示。** 視覺順序應與 DOM 順序一致。避免使用 `flex-direction: row-reverse` 或 `order:` 重新排列列——螢幕閱讀器和鍵盤使用者跟隨原始碼順序，而非繪製順序。

<h3 id="header">頁首與漢堡導覽</h3>

完整的純 CSS 頁首，附帶響應式漢堡切換按鈕。**零 JavaScript。** 將下方片段複製到已載入 `skeletonic.min.css` 的空白 HTML 頁面中，選單即可自動收合、展開並正確管理焦點。

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
  <a class="sk-brand" href="#">品牌</a>
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="切換導覽">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">首頁</a></li>
    <li><a href="#">文件</a></li>
    <li><a href="#">組件</a></li>
    <li><a href="#">關於</a></li>
  </ul>
</header>
</section>

> **無障礙提示。** 隱藏的核取方塊保留在 Tab 順序中，鍵盤使用者可透過 `Space` 或 `Enter` 開啟選單。`<label>` 帶有 `aria-hidden`，因為核取方塊本身就是無障礙名稱的來源。將視窗縮小至 640&nbsp;px 以下即可看到漢堡切換按鈕接管。

[查看完整無障礙說明 →](/zh-hant/wu-zhang-ai/) · [瀏覽色板 →](/zh-hant/se-ban/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Skeletonic Stylus 組件",
  "description": "Skeletonic Stylus v2.0.0 中隨附的每個組件。",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "按鈕",
      "url": "https://skeletonic.io/zh-hant/zu-jian/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "徽章",
      "url": "https://skeletonic.io/zh-hant/zu-jian/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "提示框",
      "url": "https://skeletonic.io/zh-hant/zu-jian/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "卡片",
      "url": "https://skeletonic.io/zh-hant/zu-jian/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "表單欄位",
      "url": "https://skeletonic.io/zh-hant/zu-jian/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "格線",
      "url": "https://skeletonic.io/zh-hant/zu-jian/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "頁首與漢堡導覽",
      "url": "https://skeletonic.io/zh-hant/zu-jian/#header"
    }
  ]
}
</script>
