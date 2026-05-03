---
title: "無障礙——v2.0.0 中的 WCAG 2.2"
name: "Skeletonic Stylus"
description: "v2.0.0 為 WCAG 2.2 合規性開箱即用的功能——焦點環、對比度、跳轉連結、動效與深色模式。"
language: zh-hant
layout: page
permalink: https://skeletonic.io/zh-hant/wu-zhang-ai/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, 無障礙, focus visible, 跳轉連結, prefers reduced motion, 對比度"
---

> **Translation note (2026-04-30).** v2.0.0 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

> **Skeletonic Stylus v2.0.0 將 WCAG 2.2 合規性作為預設行為，而非可選主題。** 本頁記錄了內建功能以及可選啟用的 mixin。

<hr class="hr-text" data-content="開箱即用">

## 免費獲得的功能

| WCAG 2.2 成功準則 | v2.0.0 的做法 | 驗證方式 |
|---|---|---|
| **1.4.3 對比度（最低）— AA** | `--cl-primary` 和 `--cl-secondary` 加深至白色背景上 ≥ 4.5:1 | 開發者工具 → 對比度檢查器 |
| **1.4.11 非文字對比度 — AA** | 表單邊框、按鈕、徽章均 ≥ 3:1 | 同上 |
| **2.4.7 焦點可見 — AA** | 每個可聚焦元素均有 `:focus-visible` 焦點環（深色背景為黃色，淺色背景為藍色） | 在任意頁面按 `Tab` 鍵 |
| **2.4.11 焦點不被遮蔽 — AA（2.2 新增）** | 固定頁首高度縮減 + 焦點 scroll-margin | 按 `Tab` 鍵越過固定頁首 |
| **2.5.8 目標大小 — AA（2.2 新增）** | 按鈕/連結：≥ 24×24 CSS px 點擊區域 | 開發者工具盒模型 |
| **1.4.12 文字間距 — AA** | 所有元素支援使用者自訂的 line-height / letter-spacing | 在開發者工具中覆寫 |
| **2.3.3 互動動畫 — AAA** | 所有動畫類別包裹在 `@media (prefers-reduced-motion: no-preference)` 中 | 作業系統級減少動態效果 |
| **1.4.10 內容重排 — AA** | 版面在 320 px 寬度下無水平捲動 | 開發者工具窄視窗 |
| **深色模式** | `prefers-color-scheme: dark` 自動切換 token | 作業系統深色模式切換 |

<hr class="hr-text" data-content="Mixins">

## 可選啟用的 Stylus mixins

如果您從原始碼編譯，以下 mixin 可在 `src/stylus/utilities/mixins.styl` 中使用：

| Mixin | 用途 |
|---|---|
| `focus-ring()` | 支援 `:focus-visible` 的高對比度焦點環 |
| `visually-hidden()` | 僅供螢幕閱讀器的文字，保持可聚焦 |
| `skip-link()` | 聚焦時可見的錨點 |
| `reduced-motion()` | 將任意區塊包裹在 `prefers-reduced-motion: no-preference` 中 |
| `forced-colors()` | 針對 Windows 高對比模式的調整 |
| `target-size(24px)` | 將任何可點擊元素填充至最小觸控目標 |

範例：

```stylus
// 在自訂按鈕上應用強焦點環
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="跳轉連結">

## 跳轉連結輔助

將以下程式碼放在 **`<body>` 內的第一個位置**：

```html
<a href="#main-content" class="skip-link">跳至主要內容</a>
```

此類別**不在**核心樣式表中（因此頁面大小不會增加）；它是一個 4 行的片段，您可以自行編寫或使用內建的 `skip-link()` mixin。本站即使用了它——聚焦頁面並按 Tab 鍵即可看到它出現在左上角。

<hr class="hr-text" data-content="驗證">

## 驗證您自己的頁面

函式庫在 `scripts/` 下隨附一個 `a11y-test.mjs` 腳本，可對您提供的每個 URL 執行 [axe-core](https://github.com/dequelabs/axe-core)。

```bash
node scripts/a11y-test.mjs https://example.com
```

CI 在每次推送時都會對 `dist/index.html` 展示頁面執行此腳本。

[閱讀 v2.0.0 發行說明 →](/zh-hant/geng-xin-ri-zhi/) ·
[查看安全頁面 →](/zh-hant/an-quan/)
