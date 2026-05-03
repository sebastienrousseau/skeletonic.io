---
title: "Skeletonic Stylus 快速入門"
name: "Skeletonic Stylus"
description: "透過 npm 或 CDN 安裝 Skeletonic Stylus，將其匯入 Stylus 建置管線，並在數秒內覆寫變數。"
language: zh-hant
layout: page
permalink: https://skeletonic.io/zh-hant/kuai-su-ru-men/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "安裝 skeletonic, stylus 設定, css cdn, 快速入門"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## 簡介

剛接觸 Skeletonic Stylus？在 **v2.0.0** 中，按需選用功能比以往更加簡單。得益於極小的體積（核心樣式表 gzip 後約 7.7&nbsp;KB），它可以快速整合至任何 Web 應用程式——無需 JavaScript 框架，如果使用 CDN 則連建置步驟也不需要。

準備好安裝了嗎？所有路徑均在下方說明——選擇適合的即可。

## 1. 下載與安裝

您可以透過 **pnpm**、**npm** 或 **yarn** 安裝 Skeletonic Stylus，或直接從 CDN 載入。您也可以選擇在本地自行託管發行檔案。

### 透過套件管理器（建議）

```bash
# pnpm
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0

# npm
npm install @sebastienrousseau/skeletonic-stylus@2.0.0

# yarn
yarn add @sebastienrousseau/skeletonic-stylus@2.0.0
```

### 透過 CDN

如果您只需要編譯後的 CSS，將以下程式碼加入您的 `<head>` 中即可：

```html
<!-- jsDelivr -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">

<!-- unpkg -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css"
  crossorigin="anonymous">
```

為了最大完整性，請從 v2.0.0 發行說明中複製 **SRI 雜湊值**，並添加 `integrity="sha384-…"` 屬性。

### 備選 CDN 位址

| CDN | 網址 | HTTPS | 合併 |
|---|---|---|---|
| **jsDelivr** | `https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | 是 | 是 |
| **unpkg** | `https://unpkg.com/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css` | 是 | 否 |

### 下載 GitHub 版本

偏好版本化壓縮檔？從 [github.com/sebastienrousseau/skeletonic-stylus/releases](https://github.com/sebastienrousseau/skeletonic-stylus/releases) 取得最新版本，將 `dist/` 的內容直接放入您的專案中。

### 複製 GitHub 儲存庫

複製主儲存庫以取得所有原始檔案（含建置腳本）：

```bash
git clone https://github.com/sebastienrousseau/skeletonic-stylus.git
cd skeletonic-stylus
pnpm install
pnpm run build
```

> **提示：** 請簽署您的提交——專案在 CI 中強制要求簽署提交。
> 使用 `git commit -S -m "..."` （或在全域 git 設定中設定 `commit.gpgsign = true`）。

## 2. 使用編譯後的 CSS

安裝後，函式庫在 `dist/css/` 下提供數個預建置套件：

| 檔案 | 用途 | 大小（min/gz） |
|---|---|---|
| `core/skeletonic.min.css` | 重設 + token + 版面 + 元素 + 組件 + 工具類別 | 38.8 KB / 7.7 KB |
| `animations/skeletonic-animations.min.css` | 可選動畫模組 | 約 18 KB / 約 4 KB |
| `palettes/material/skeletonic-material.min.css` | Material 色板 | 約 8 KB |
| `palettes/tachyons/skeletonic-tachyons.min.css` | Tachyons 工具色板 | 7.3 KB |
| `palettes/websafe/skeletonic-websafe.min.css` | Web 安全色板 | 約 4 KB |

每個模組均為獨立——選擇您需要的最小組合。

## 3. 在 Stylus 中使用

如果您已有 Stylus 管線，可以匯入原始模組，讓打包工具 tree-shake 未使用的部分：

```stylus
// styles/main.styl
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/skeletonic'
```

或僅匯入您需要的部分：

```stylus
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/variables'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/utilities/mixins'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/elements/buttons'
@import '~@sebastienrousseau/skeletonic-stylus/src/stylus/components/card'
```

## 4. 覆寫品牌色彩

Skeletonic 將設計 token 以 **CSS 自訂屬性**形式公開，因此您無需重新編譯 Stylus 即可更換主題：

```css
:root {
  --cl-primary:   hsl(210, 100%, 42%);
  --cl-secondary: hsl(195, 100%, 33%);
  --cl-tertiary:  #757c8a;
}
```

就是這樣——每個使用主色的組件都會自動跟隨變更。

## 5. 驗證安裝

一個最簡「是否成功」的檢查：

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@sebastienrousseau/skeletonic-stylus@2.0.0/css/core/skeletonic.min.css">
  </head>
  <body class="container padding-3">
    <h1>成功了。</h1>
    <a href="#" class="button primary">您好，世界</a>
  </body>
</html>
```

如果標題以流動方式縮放，且按鈕呈藍色圓角造型，您就完成了。

## 6. 套件內容

套件內包含所有原始檔案、編譯與壓縮後的 CSS 套件、source maps，以及依類別組織的完整 Stylus 目錄樹：

```text
@sebastienrousseau/skeletonic-stylus@2.0.0
├── CHANGELOG.md
├── LICENSE-APACHE
├── LICENSE-MIT
├── README.md
├── package.json
├── dist/
│   └── css/
│       ├── core/
│       │   ├── skeletonic.css
│       │   ├── skeletonic.css.map
│       │   └── skeletonic.min.css
│       ├── animations/
│       │   ├── skeletonic-animations.css
│       │   └── skeletonic-animations.min.css
│       └── palettes/
│           ├── material/skeletonic-material.min.css
│           ├── tachyons/skeletonic-tachyons.min.css
│           └── websafe/skeletonic-websafe.min.css
└── src/
    └── stylus/
        ├── animations/      bounce, fade, pulse, shake, vanish, zoom…
        ├── base/            reset, helpers
        ├── components/      card, header, navbar, alert
        ├── configurations/  colors, variables
        ├── elements/        button, form, table, link, list, code…
        ├── fonts/           font-face declarations
        ├── layout/          container, grid, media-queries
        ├── palettes/        material, tachyons, websafe
        ├── utilities/       mixins
        └── skeletonic.styl  ← 單一匯入檔，拉取全部內容
```

每個模組均為獨立——僅引入您需要的套件，讓 CSS 載重盡可能精簡。

## 常見問題

**如何安裝 Skeletonic Stylus？**
執行 `pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0`。或直接從 CDN 載入編譯後的 CSS——無需建置步驟。

**需要 JavaScript 嗎？**
不需要。核心樣式表是純 CSS，零執行時間成本。組件無需任何一行 JS 即可運作。

**是否符合 WCAG 2.2？**
是的。v2.0.0 內建符合 AA 標準的對比度、focus-visible 焦點環、跳轉連結輔助、減弱動效支援以及預設深色模式。

**gzip 後的大小是多少？**
壓縮後 38.8&nbsp;KB，**gzip 後約 7.7&nbsp;KB**，brotli 後約 6.7&nbsp;KB（完整核心樣式表）。8&nbsp;KB 上限在 CI 中強制執行。

**使用什麼授權條款？**
採用 MIT 和 Apache 2.0 雙授權——選擇適合您專案的即可。免費用於商業和個人用途。

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "如何安裝 Skeletonic Stylus？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "執行 pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0。或直接從 CDN 載入編譯後的 CSS——無需建置步驟。"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus 需要 JavaScript 嗎？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "不需要。核心樣式表是純 CSS，零執行時間成本。組件無需任何一行 JavaScript 即可運作。"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus 是否符合 WCAG 2.2？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "是的。v2.0.0 內建符合 AA 標準的對比度、focus-visible 焦點環、跳轉連結輔助、減弱動效支援以及預設深色模式。"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus gzip 後的大小是多少？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "壓縮後 38.8 KB，gzip 後約 7.7 KB，brotli 後約 6.7 KB（完整核心樣式表）。8 KB 上限在 CI 每次提交時強制執行。"
      }
    },
    {
      "@type": "Question",
      "name": "Skeletonic Stylus 使用什麼授權條款？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "採用 MIT 和 Apache 2.0 雙授權——選擇適合您專案的即可。免費用於商業和個人用途。"
      }
    }
  ]
}
</script>

[瀏覽組件 →](/zh-hant/zu-jian/)
