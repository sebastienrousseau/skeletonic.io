---
title: "色板"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7 内置的 Material、Tachyons 和 Web 安全配色方案。"
language: zh-hans
layout: page
permalink: https://skeletonic.io/zh-hans/se-ban/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css 色板, material, tachyons, websafe, 设计令牌"
---

Skeletonic Stylus v1.1.7 附带**三个可选配色方案**，每个方案都作为独立的压缩样式表分发，你只需为所用的部分付出体积代价。

| 色板 | 文件 | 体积 (min) |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | 约 8 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7.3 KB |
| Web 安全 | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | 约 4 KB |

本页加载了 **Tachyons** 色板，因此以下颜色工具类可以正确渲染。

<hr class="hr-text" data-content="灰度">

## Skeletonic 核心灰度

核心样式表提供 11 级无障碍灰度色阶，以 `--cl-grey-100` 至 `--cl-grey-1000` 的形式暴露。

<div class="row">
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-100);">
    100
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-300);">
    300
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-500); color: #fff;">
    500
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-700); color: #fff;">
    700
  </div>
</div>

<div class="row">
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-200);">
    200
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-400);">
    400
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-600); color: #fff;">
    600
  </div>
  <div class="flex-3 padding-3 text-center" style="background-color: var(--cl-grey-900); color: #fff;">
    900
  </div>
</div>

<hr class="hr-text" data-content="品牌色">

## 品牌色（v1.1.7 — AA 对比度）

在 v1.1.7 中，主色和次色令牌已加深，以满足白色文本上 **WCAG 4.5:1** 的对比度开箱要求。

<div class="row margin-top-3">
  <div class="flex-4 padding-3 text-center" style="background-color: hsl(210, 100%, 42%); color: #fff;">
    <strong>--cl-primary</strong><br>hsl(210 100% 42%)
  </div>
  <div class="flex-4 padding-3 text-center" style="background-color: hsl(195, 100%, 33%); color: #fff;">
    <strong>--cl-secondary</strong><br>hsl(195 100% 33%)
  </div>
  <div class="flex-4 padding-3 text-center" style="background-color: #757c8a; color: #fff;">
    <strong>--cl-tertiary</strong><br>#757c8a
  </div>
</div>

> **注意。** `--cl-tertiary` (#757c8a) 相对于白色的对比度为 4.71:1
> ——符合 AA 标准的**大号文本**（粗体不小于 18 px /
> 常规不小于 24 px），但不适用于正文文本。请搭配深色背景使用，
> 或仅将其用于非必要的装饰性元素。

<hr class="hr-text" data-content="Tachyons">

## Tachyons 色板工具类

加载 `skeletonic-tachyons.min.css` 后，你将获得一整套单一用途的颜色类——同一分发产物，按需加载模块。

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

完整的 Tachyons 色板规范文档请参见 [tachyons.io/docs/themes/colors](https://tachyons.io/docs/themes/colors/)；此处分发的版本是 Skeletonic 编译后的版本。

[返回组件 →](/zh-hans/zu-jian/)
