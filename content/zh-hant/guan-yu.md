---
title: "關於 Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus 是一個開源的 Stylus CSS 函式庫，用於無障礙、快速、模組化的 UI 樣式設計。"
language: zh-hant
layout: page
permalink: https://skeletonic.io/zh-hant/guan-yu/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, 關於, stylus, css 框架, 設計理念"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

<p class="badges">
  <img alt="GitHub 星標" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="每月下載量" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="npm 版本" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="套件大小" src="https://img.shields.io/badge/gzip-8.3%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="授權條款" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## 簡要介紹

**Skeletonic Stylus** 是一個開源的 [Stylus](https://stylus-lang.com) CSS 函式庫，用於無障礙、快速、模組化的 UI 樣式設計。

誕生於 2018 年，最初是一項**精簡 CSS 體積**的個人實驗，同時不犧牲元件庫的開發體驗。八年後，目標始終如一。

## 它能為您帶來什麼

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="閃電" width="64" height="64" loading="lazy" decoding="async">
    <h3>極速開發</h3>
    <p>數分鐘內即可設計並自訂響應式介面。原生 CSS 變數、預定義類別、涵蓋每個語義化 HTML 元素的 12 欄格線系統。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="羽毛" width="64" height="64" loading="lazy" decoding="async">
    <h3>輕量級</h3>
    <p>gzip 後約 8.3&nbsp;KB。頁面載入更快。每個必要的建構模組一應俱全。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="響應式裝置" width="64" height="64" loading="lazy" decoding="async">
    <h3>響應式設計</h3>
    <p>專為桌面與行動裝置打造。版面自動適應任何設備。全面支援觸控操作與語義化 HTML。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="無障礙人物" width="64" height="64" loading="lazy" decoding="async">
    <h3>無障礙</h3>
    <p>WCAG&nbsp;2.2 內建：focus-visible 焦點環、AA 對比度、跳轉連結輔助、鍵盤友善組件、減弱動效支援——無需額外樣式表，無需 <code>aria-*</code> 範本程式碼。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="組件模組" width="64" height="64" loading="lazy" decoding="async">
    <h3>組件庫</h3>
    <p>模組化 CSS 組件與 Stylus mixins。按鈕、表單、卡片、提示框、徽章、色板和動畫——乾淨、模組化、即裝即用。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="GitHub 標誌" width="64" height="64" loading="lazy" decoding="async">
    <h3>免費且開源</h3>
    <p>由 Sebastien Rousseau 設計、建置與維護。採用 <strong>MIT</strong> 或 <strong>Apache&nbsp;2.0</strong> 雙授權。無費用、無授權成本，商業用途亦然。</p>
  </article>
</div>

## 橫向比較

一個自託管的樣式表即可涵蓋排版、按鈕、表單、卡片、表格、色板、動畫與工具類別。無需 JavaScript、無需建置步驟、無需依賴 Bootstrap、Tailwind 或 Bulma。

| 功能 | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| gzip 大小 | **約 8.3&nbsp;KB** | 約 30&nbsp;KB | 約 10&nbsp;KB (varies) | 約 30&nbsp;KB |
| WCAG 2.2 合規 | **內建** | 部分 | 手動 | 部分 |
| 級聯層 | **支援（`@layer`）** | 不支援 | 不支援 | 不支援 |
| 深色模式 | **`prefers-color-scheme`** | 選擇性啟用 | 基於類別 | 選擇性啟用 |
| 需要 JavaScript | **否** | 是（Popper） | 否 | 否 |
| CycloneDX SBOM | **是** | 否 | 否 | 否 |
| 減弱動效 | **遵循** | 部分 | 手動 | 部分 |
| 授權條款 | MIT 或 Apache 2.0 | MIT | MIT | MIT |

## 原則

1. **無障礙是底線，而非天花板。** WCAG 2.2 合規性內建於每個組件，絕非後期加裝的「主題」。
2. **每個位元組都很重要。** 單一樣式表不應超出頁面載重預算。8&nbsp;KB gzip 上限在 CI 中強制執行。
3. **級聯層勝過特異性之戰。** 自信地覆寫任何樣式——無需 `!important`，無需 DOM 順序技巧。
4. **Stylus 依然出色。** 簡潔、富表現力，讓函式庫維持在約 3,000 行可讀程式碼。
5. **無聊即特色。** 無 JS 依賴、無建置時魔法、無破壞性重新命名。CSS 類別名稱所見即所得。
6. **秒級主題定製。** 原生 CSS 自訂屬性涵蓋色彩、間距、排版與圓角。
7. **供應鏈強化。** 簽名的 npm 來源驗證、鎖定的 Dependabot 更新、透過 overrides 修補 CVE-2023-44270。

## 版本管理與語意化版本

Skeletonic Stylus 遵循[語意化版本 2.0](https://semver.org)。

| 版本變更 | 條件 | 範例 |
|---|---|---|
| **主版本** | 移除或重新命名公開類別、mixin 或 token | 1.x → 2.0 |
| **次版本** | 新增組件、mixin 或 token | 1.1 → 1.2 |
| **修訂版本** | 錯誤修正、無障礙改善、效能、安全性 | 1.1.6 → 1.1.7 |

所有公開類別名稱、所有 CSS 自訂屬性以及所有匯出的 Stylus mixins 均屬公開 API。破壞性變更將升級主版本並附上遷移指南。

## 專案管理

Skeletonic Stylus 由 [Sebastien Rousseau](https://sebastienrousseau.com) 設計、建置與維護。採用 [MIT](https://opensource.org/licenses/MIT) 和 [Apache 2.0](https://opensource.org/licenses/Apache-2.0) 雙授權。

歡迎提交問題、想法和貢獻——[請參閱貢獻指南](/zh-hant/gong-xian/)。
