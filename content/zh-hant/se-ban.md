---
title: "色板"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v1.1.7 隨附的 Material、Tachyons 與 Web 安全色板。"
language: zh-hant
layout: page
permalink: https://skeletonic.io/zh-hant/se-ban/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css 色板, material, tachyons, websafe, 設計 token"
---

Skeletonic Stylus v1.1.7 隨附**三套可選色板**，每套均以獨立的壓縮樣式表形式發佈，讓您只需為所用的部分付出代價。

| 色板 | 檔案 | 大小（min） |
|---|---|---|
| Material | `dist/css/palettes/material/skeletonic-material.min.css` | 約 8 KB |
| Tachyons | `dist/css/palettes/tachyons/skeletonic-tachyons.min.css` | 7.3 KB |
| Web 安全 | `dist/css/palettes/websafe/skeletonic-websafe.min.css` | 約 4 KB |

本頁正在載入 **Tachyons** 色板，因此下方的色彩工具類別可以正確渲染。

<hr class="hr-text" data-content="灰階">

## Skeletonic 核心灰階

核心樣式表隨附一組符合無障礙標準的 11 級灰階，以 `--cl-grey-100` … `--cl-grey-1000` 公開。

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

## 品牌色彩（v1.1.7 — AA 對比度）

在 v1.1.7 中，主色與次色 token 加深處理，以在白色文字背景下開箱即達 **WCAG 4.5:1** 對比度。

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

> **注意。** `--cl-tertiary` (#757c8a) 相對於白色的對比度為 4.71:1
> ——符合 AA 標準的**大號文字**（粗體不小於 18 px /
> 常規不小於 24 px），但不���用於內文。請搭配深色背景使用，
> 或僅將其用於非必要的裝飾性元素。

<hr class="hr-text" data-content="Tachyons">

## Tachyons 色板工具類別

當您載入 `skeletonic-tachyons.min.css` 後，即可獲得一整套單一用途的色彩類別——同一發行產物，選擇性啟用模組。

```html
<span class="bg-blue white pa2">.bg-blue .white</span>
<span class="bg-light-green dark-green pa2">.bg-light-green .dark-green</span>
<span class="bg-washed-yellow dark-gray pa2">.bg-washed-yellow .dark-gray</span>
```

完整的 Tachyons 色板規範請參閱 [tachyons.io/docs/themes/skins](https://tachyons.io/docs/themes/skins/)；此處隨附的是 Skeletonic 編譯的版本。

[返回組件 →](/zh-hant/zu-jian/)
