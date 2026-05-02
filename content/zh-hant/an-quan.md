---
title: "安全與供應鏈"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v2.0.0 如何保護其建置管線、簽署發行版本並提供 SBOM。"
language: zh-hant
layout: page
permalink: https://skeletonic.io/zh-hant/an-quan/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css 安全, sbom, cyclonedx, npm provenance, openssf scorecard, 供應鏈"
---

## 效能

- **壓縮後 39.1&nbsp;KB · gzip 後 7.8&nbsp;KB · brotli 後 6.7&nbsp;KB**（完整核心樣式表）。
- **零 JavaScript** — 純 Stylus → 純 CSS，零執行時間成本。
- **級聯層架構** — 覆寫無需 `!important` 即可生效。
- **`size-limit` 預算** 在 CI 每次提交時強制執行。

效能是一項安全控制。每少傳送一個位元組，就少了一個需要審計、簽署和驗證的位元組。

## 供應鏈摘要

| 控制措施 | v2.0.0 狀態 |
|---|---|
| **CycloneDX SBOM** | 每次發行時生成，提交至 `dist/sbom.json` |
| **npm 來源驗證** | 已啟用（`--provenance --access public`） |
| **簽署的 git 標籤** | 由維護者金鑰 SSH 簽署 |
| **鎖定的 Dependabot** | 每週更新，自動審核 |
| **大小預算** | `size-limit` 8 KB gzip 上限，回歸時 CI 失敗 |
| **Lint** | 每次推送時執行 `stylelint` + 無障礙斷言 |
| **CodeQL** | 已啟用，涵蓋 `javascript` 和設定檔 |
| **CVE-2023-44270** | **已修補**，透過 `pnpm.overrides` 清除 `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

每個發佈的壓縮檔均包含一份 CycloneDX SBOM，位於 `dist/sbom.json`。您可以使用以下命令驗證新安裝的套件：

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

SBOM 在發佈工作流程中由 `cyclonedx-npm` 生成。

<hr class="hr-text" data-content="來源驗證">

## npm 來源驗證

發佈的產物使用 [npm 套件來源驗證](https://docs.npmjs.com/generating-provenance-statements) 進行簽署。

安裝後可使用以下命令驗證：

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

簽署的證明將壓縮檔追溯至產生它的確切 GitHub Actions 執行。

<hr class="hr-text" data-content="CVE">

## 已知 CVE 與修補

| CVE | 嚴重程度 | 狀態 |
|---|---|---|
| **CVE-2023-44270**（postcss 換行解析） | 中等 | **已修補**，v2.0.0 透過 `pnpm.overrides` 將 `postcss` 升級至 ≥ 8.4.31 |

Snyk 安全通報資料庫和 GitHub Security Advisories 動態受到持續監控；安全修補以**修訂版本**形式發佈。

<hr class="hr-text" data-content="報告">

## 報告漏洞

請**不要**為安全報告開啟公開的 GitHub issue。請改用以下私密通道：

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

報告在 **72 小時**內得到確認，中等問題在 **14 天**內修復，嚴重問題在 **48 小時**內修復。

[返回首頁 →](/zh-hant/) · [閱讀更新日誌 →](/zh-hant/geng-xin-ri-zhi/)
