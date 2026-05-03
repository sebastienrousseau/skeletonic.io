---
title: "貢獻"
name: "Skeletonic Stylus"
description: "如何提交問題、提議變更以及向 Skeletonic Stylus 提交拉取請求。"
language: zh-hant
layout: page
permalink: https://skeletonic.io/zh-hant/gong-xian/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "貢獻, 開源, 拉取請求, issue, 慣例"
---

Skeletonic Stylus 是一個開源專案；歡迎各種規模的貢獻——從錯字修正到新組件。

<hr class="hr-text" data-content="快速開始">

## 快速開始

```bash
# 1. Fork 並複製
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. 安裝（pnpm via corepack）
corepack enable
pnpm install

# 3. 建置
pnpm run build           # 完整管線（stylus → prettier → stylelint → autoprefixer → csso）

# 4. Lint 與測試
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="慣例">

## 慣例

- **分支命名：** `feat/short-thing`、`fix/short-thing`、`docs/short-thing`。
- **提交：** [約定式提交](https://www.conventionalcommits.org)。所有提交均需簽署。
- **Stylus：** 4 空格縮排，不使用分號，優先使用 `$variables` 而非魔術數字，每個公開類別位於級聯層中。
- **無障礙：** 任何新組件必須可驗證地滿足 WCAG 2.2 AA；在開啟 PR 前請對展示頁面執行 `node scripts/a11y-test.mjs`。
- **大小預算：** 核心樣式表必須保持在 **8 KB gzip** 以下。如果您的變更超出此限制，請在 PR 中說明理由。

<hr class="hr-text" data-content="拉取請求">

## 拉取請求

1. 對於非瑣碎的變更，請先開啟 issue——避免重複工作。
2. 保持 PR 聚焦：每個 PR 一個邏輯變更。
3. 在「未發行」下方更新 `CHANGELOG.md`。
4. 在請求審查前確保 CI 為綠色。
5. 預設使用 squash-merge；提交訊息將在合併時整理。

<hr class="hr-text" data-content="行為準則">

## 行為準則

參與本專案即表示您同意遵守[貢獻者公約 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)。請保持友善、耐心，並假設善意。

[開啟 issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[開啟 PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
