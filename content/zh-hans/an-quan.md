---
title: "安全与供应链"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v2.0.0 如何保护其构建管线、签署发布包，以及提供 SBOM。"
language: zh-hans
layout: page
permalink: https://skeletonic.io/zh-hans/an-quan/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "css 安全, sbom, cyclonedx, npm 来源验证, openssf 评分, 供应链"
---

## 性能

- **40.6&nbsp;KB 压缩后 · 8.0&nbsp;KB gzip · 6.9&nbsp;KB brotli**（完整核心样式表）。
- **零 JavaScript** — 纯 Stylus 到纯 CSS，无运行时开销。
- **级联层** — 覆盖样式无需 `!important`。
- **`size-limit` 预算** 在 CI 的每次提交中强制执行。

性能本身就是一项安全控制。每少传输一个字节，就少一个需要审计、签名和验证的字节。

## 供应链概要

| 控制措施 | v2.0.0 状态 |
|---|---|
| **CycloneDX SBOM** | 每次发布时生成，提交到 `dist/sbom.json` |
| **npm 来源验证** | 已启用（`--provenance --access public`） |
| **签名 git 标签** | 由维护者密钥 SSH 签名 |
| **Dependabot 锁定** | 每周更新，自动审核 |
| **体积预算** | `size-limit` 8 KB gzip 上限，回归时 CI 失败 |
| **代码检查** | `stylelint` + 无障碍断言，每次推送执行 |
| **CodeQL** | 对 `javascript` 和配置文件启用 |
| **CVE-2023-44270** | **已修补**，通过 `pnpm.overrides` 替换 `postcss@7` |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

每个发布的压缩包都在 `dist/sbom.json` 包含 CycloneDX SBOM。你可以使用以下命令验证新安装的包：

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

SBOM 由发布工作流中的 `cyclonedx-npm` 生成。

<hr class="hr-text" data-content="来源验证">

## npm 来源验证

发布产物使用 [npm 包来源验证](https://docs.npmjs.com/generating-provenance-statements) 进行签名。

安装后你可以使用以下命令验证：

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

签名证明将压缩包追溯到生成它的确切 GitHub Actions 运行。

<hr class="hr-text" data-content="CVE">

## 已知 CVE 与补丁

| CVE | 严重程度 | 状态 |
|---|---|---|
| **CVE-2023-44270**（postcss 换行解析） | 中等 | **已修补**：v2.0.0 通过 `pnpm.overrides` 将 `postcss` 升级到 ≥ 8.4.31 |

Snyk 安全通告数据库和 GitHub Security Advisories 源受到持续监控；安全补丁以**补丁版本**发布。

<hr class="hr-text" data-content="报告漏洞">

## 报告漏洞

请**不要**为安全报告创建公开的 GitHub issue。请使用以下私密通道：

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

报告在 **72 小时**内得到确认，中等级别问题在 **14 天**内发布修复，严重问题在 **48 小时**内修复。

[返回首页 →](/zh-hans/) · [阅读更新日志 →](/zh-hans/geng-xin-ri-zhi/)
