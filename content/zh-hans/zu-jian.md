---
title: "组件"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus 所有组件的实时 HTML 示例，按类别分组、锚点定位，使用被演示的样式表本身渲染。"
language: zh-hans
layout: page
permalink: https://skeletonic.io/zh-hans/zu-jian/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic 组件, 按钮, 卡片, 表单, 提示框, 徽章, 页头, 导航栏, 纯 css 汉堡菜单"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

以下每个示例均**使用被演示的样式表本身渲染**。无预处理器。无 JavaScript。无额外依赖。将任意代码片段复制到空白 HTML 文件中即可运行。

<nav aria-label="本页目录">
<p><strong>本页目录</strong></p>
<ul>
<li><strong>输入控件</strong> — <a href="#buttons">按钮</a> · <a href="#badges">徽章</a></li>
<li><strong>反馈</strong> — <a href="#alerts">提示框</a></li>
<li><strong>容器</strong> — <a href="#cards">卡片</a></li>
<li><strong>表单</strong> — <a href="#form-fields">表单字段</a></li>
<li><strong>布局</strong> — <a href="#grid">栅格</a> · <a href="#header">页头和汉堡导航</a></li>
</ul>
</nav>

<hr class="hr-text" data-content="输入控件">

<h2 id="inputs">输入控件</h2>

访客通过点击、轻触或聚焦来驱动页面的交互元素。

<h3 id="buttons">按钮</h3>

语义化、可主题化的操作触发器。实心和描边变体各提供六种品牌颜色。

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

描边变体：

```html
<a href="#" class="button primary-outline">Outline</a>
<a href="#" class="button secondary-outline">Outline</a>
```

<p>
  <a href="#" class="button primary-outline">描边</a>
  <a href="#" class="button secondary-outline">描边</a>
</p>

> **无障碍提示。** 每个 `.button` 变体均配备 `:focus-visible` 焦点环和 **24×24&nbsp;px 最小点击区域**（WCAG&nbsp;2.2 SC&nbsp;2.5.8）。页内操作请使用 `<button type="button">`，仅在导航时使用 `<a href>`。

<h3 id="badges">徽章</h3>

用于状态、计数或分类的紧凑标签。文字大小固定，徽章与周围文本对齐。

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge danger">Danger</span>
```

<section aria-labelledby="badges">
<p>
  <span class="badge">默认</span>
  <span class="badge primary">主要</span>
  <span class="badge success">成功</span>
  <span class="badge warning">警告</span>
  <span class="badge danger">危险</span>
</p>
</section>

> **无障碍提示。** 徽章默认为装饰性元素。当徽章承载唯一信号（如未读计数）时，请用视觉隐藏辅助类包裹：`<span class="visually-hidden">3 条未读消息</span>`。

<hr class="hr-text" data-content="反馈">

<h2 id="feedback">反馈</h2>

告知访客某事已发生或即将发生的界面元素。

<h3 id="alerts">提示框</h3>

带有语义意图的状态消息。**在 v2.0.0 中，每个变体均显式命名空间化**为 `.alert-{primary,secondary,info,success,warning,error}`，因此变体类不会与页面其他地方的状态类冲突。

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
<strong>请注意。</strong> 这是一条主要提示。
</div>

<div class="alert alert-success" role="status">
<strong>已保存。</strong> 你的更改已持久化。
</div>

<div class="alert alert-warning" role="alert">
<strong>请谨慎。</strong> 此操作影响共享状态。
</div>

<div class="alert alert-error" role="alert">
<strong>错误。</strong> 无法保存表单。
</div>
</section>

> **无障碍提示。** 对需要立即关注的消息（错误、警告）使用 `role="alert"`，对非紧急确认使用 `role="status"`。两者都会在消息出现时立即向辅助技术暴露。

<hr class="hr-text" data-content="容器">

<h2 id="surface">容器</h2>

用于框定和分组相关内容的容器。

<h3 id="cards">卡片</h3>

一个带边框和内边距的容器，用于承载单个内聚单元。配合 `flex-N` 栅格即可构建响应式卡片墙。

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
      <h3 class="card-title">轻量</h3>
      <p>40.6&nbsp;KB 压缩后，8.0&nbsp;KB gzip。</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">无障碍</h3>
      <p>开箱即符合 WCAG&nbsp;2.2 标准。</p>
    </div>
  </article>
  <article class="card flex-1">
    <div class="card-content">
      <h3 class="card-title">模块化</h3>
      <p>级联层架构，轻松覆盖样式。</p>
    </div>
  </article>
</section>

> **无障碍提示。** 每张卡片应使用语义化地标元素包裹（`<article>`、`<section>`），内容以标题（`<h3>`）开头。屏幕阅读器用户可将卡片列表作为一级可导航区域遍历。

<hr class="hr-text" data-content="表单">

<h2 id="forms">表单</h2>

用于收集用户数据的输入框、标签和分组。

<h3 id="form-fields">表单字段</h3>

标签、文本输入框、文本域、字段集和图例——与设计系统其余部分保持一致的尺寸。

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

  <label for="demo-email">邮箱</label>
  <input id="demo-email" type="email" class="input-primary">

  <label for="demo-msg">留言</label>
  <textarea id="demo-msg" rows="4"></textarea>

  <p><button type="button" class="button primary">发送（演示）</button></p>
</form>
</section>

> **无障碍提示。** 每个输入框必须有程序化关联的 `<label for="…">`。使用 `<fieldset>` 和 `<legend>` 对相关控件分组。必填字段使用 `required` 属性（并在标签文本中添加可见的星号）。

<hr class="hr-text" data-content="布局">

<h2 id="layout">布局</h2>

结构性基础元素——栅格、容器、页头——构成整个页面的框架。

<h3 id="grid">栅格</h3>

基于 flexbox 的响应式 `flex-N` 栅格（1 → 12 列）。`.row` 父元素自动处理间距和换行。

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
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">二分之一</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">二分之一</div>
</div>

<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;">
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">三分之一</div>
  <div style="flex:1 1 0;padding:.75rem;background:#e4e4e7;border-radius:.25rem;text-align:center;">三分之一</div>
  <div style="flex:1 1 0;padding:.75rem;background:#f4f4f5;border-radius:.25rem;text-align:center;">三分之一</div>
</div>
</section>

> **无障碍提示。** 视觉顺序应与 DOM 顺序一致。避免使用 `flex-direction: row-reverse` 或 `order:` 重排行——屏幕阅读器和键盘用户遵循源码顺序，而非渲染顺序。

<h3 id="header">页头和汉堡导航</h3>

一个完整的纯 CSS 页头，带响应式汉堡切换按钮。**零 JavaScript。** 将下方代码片段复制到已加载 `skeletonic.min.css` 的空白 HTML 页面中，菜单即可自动折叠、展开，并正确捕获焦点。

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
  <input class="sk-toggle" id="sk-nav-toggle" type="checkbox" aria-label="切换导航">
  <label class="sk-burger" for="sk-nav-toggle" aria-hidden="true">☰</label>
  <ul class="sk-menu">
    <li><a href="#">首页</a></li>
    <li><a href="#">文档</a></li>
    <li><a href="#">组件</a></li>
    <li><a href="#">关于</a></li>
  </ul>
</header>
</section>

> **无障碍提示。** 隐藏的复选框保留在 Tab 顺序中，键盘用户可通过 `Space` 或 `Enter` 打开菜单。`<label>` 设置了 `aria-hidden`，因为复选框本身才是无障碍名称来源。将窗口宽度缩小到 640&nbsp;px 以下即可看到汉堡切换按钮接管导航。

[查看完整无障碍说明 →](/zh-hans/wu-zhang-ai/) · [浏览色板 →](/zh-hans/se-ban/)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Skeletonic Stylus 组件",
  "description": "Skeletonic Stylus v2.0.0 中的所有组件。",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "按钮",
      "url": "https://skeletonic.io/zh-hans/zu-jian/#buttons"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "徽章",
      "url": "https://skeletonic.io/zh-hans/zu-jian/#badges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "提示框",
      "url": "https://skeletonic.io/zh-hans/zu-jian/#alerts"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "卡片",
      "url": "https://skeletonic.io/zh-hans/zu-jian/#cards"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "表单字段",
      "url": "https://skeletonic.io/zh-hans/zu-jian/#form-fields"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "栅格",
      "url": "https://skeletonic.io/zh-hans/zu-jian/#grid"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "页头和汉堡导航",
      "url": "https://skeletonic.io/zh-hans/zu-jian/#header"
    }
  ]
}
</script>
