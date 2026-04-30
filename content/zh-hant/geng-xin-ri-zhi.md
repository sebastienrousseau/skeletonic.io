---
title: "更新日誌"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus 發行說明，包含 v1.1.7 完整內容。"
language: zh-hant
layout: page
permalink: https://skeletonic.io/zh-hant/geng-xin-ri-zhi/
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic 更新日誌, 發行說明, v1.1.7, 語意化版本"
---

> **Translation note (2026-04-30).** v1.1.7 adds RTL support and a refreshed
> 2026 framework comparison. The English source is the canonical reference
> while these translations catch up. See <https://skeletonic.io/about/> ·
> <https://skeletonic.io/components/> · <https://skeletonic.io/benchmarks/>.

## v1.1.7 — 2026-04（當前版本）

「發行就緒」審查：無障礙、供應鏈、儲存庫整理。

### 無障礙（WCAG 2.2）
- **`$primary` 加深**至 `hsl(210, 100%, 42%)`，使按鈕/徽章/連結中的白色文字達到 AA 對比度。
- **`$secondary` 加深**至 `hsl(195, 100%, 33%)`。
- 為每個互動元素添加 **focus-visible** 焦點環。
- 在動畫模組中添加 **`@media (prefers-reduced-motion)`** 包裹。
- 添加 **`prefers-color-scheme: dark`** token 切換。
- 添加 **target-size(24px)** mixin 以滿足 WCAG 2.2 SC 2.5.8。
- 添加 **focus-not-obscured** scroll-margin 輔助，用於固定頁首。

### 建置與供應鏈
- **級聯層** — 每個區塊現在都位於 `@layer skeletonic.{reset,tokens,layout,elements,components,utilities}` 中。
- **CycloneDX SBOM** 作為 npm 壓縮檔的一部分生成。
- **`size-limit` 預算**在 CI 中強制執行：核心樣式表 8 KB gzip 上限。
- **CVE-2023-44270**（postcss 換行解析）透過 `pnpm.overrides` 修補。
- npm 發佈工作流程啟用來源驗證與簽署（`--provenance --access public`）。
- 從 lint 設定中移除已歸檔的 `stylelint-a11y` 外掛。

### 儲存庫整理與消費者套件
- 移除舊版 `package/` 目錄；`dist/` 現在是消費者的唯一真實來源。
- README 重寫以反映 v1.1.7 安裝路徑。
- `dist/` 已提交；`debug/` 為生成目錄且已加入 gitignore。
- 新的 `.github/workflows/npm-publish.yml` 由標籤驅動。

### 錯誤修正（P0）
- **`row $:after` 父選擇器回歸** — 將 `src/stylus/components/_grid.styl` 中的雜散 `$` 替換為 `&`。
- **`.alternate`** 錯誤地套用 `animation-direction: reverse` 而非 `alternate`。
- **`.alert-*` 命名空間化** — `.alert.success` → `.alert.alert-success`，避免與狀態類別衝突。

[GitHub 上的完整 v1.1.7 發行說明 ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)

<hr class="hr-text" data-content="歷史">

## 舊版發行

- **v1.1.6** — 內部清理、依賴更新。
- **v1.1.5** — 新增 Material 色板。
- **v1.1.0** — Tachyons 色板 + 格線重構。
- **v1.0.5** — WCAG 2.2 全面審查前的最後一個「舊版」發行。
- **v1.0.0** — 首次公開發行（2018）。

逐提交歷史請參閱 [GitHub Releases 頁面 ↗](https://github.com/sebastienrousseau/skeletonic-stylus/releases)。
