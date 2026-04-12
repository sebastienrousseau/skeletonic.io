---
title: "贡献"
name: "Skeletonic Stylus"
description: "如何提交问题、提出变更建议以及向 Skeletonic Stylus 提交拉取请求。"
language: zh-hans
layout: page
permalink: https://skeletonic.io/zh-hans/gong-xian/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "贡献, 开源, 拉取请求, issue, 规范"
---

Skeletonic Stylus 是一个开源项目；我们欢迎各种规模的贡献——从修正错别字到新增组件。

<hr class="hr-text" data-content="快速开始">

## 快速开始

```bash
# 1. Fork 并克隆
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. 安装（pnpm via corepack）
corepack enable
pnpm install

# 3. 构建
pnpm run build           # 完整管线（stylus → prettier → stylelint → autoprefixer → csso）

# 4. 代码检查与测试
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="规范">

## 规范

- **分支命名：** `feat/short-thing`、`fix/short-thing`、`docs/short-thing`。
- **提交：** [约定式提交](https://www.conventionalcommits.org)。所有提交均需签名。
- **Stylus：** 4 空格缩进，无分号，优先使用 `$variables` 而非魔法数字，每个公共类都位于级联层中。
- **无障碍：** 任何新组件必须证明符合 WCAG 2.2 AA；在提交 PR 前对展示页面运行 `node scripts/a11y-test.mjs`。
- **体积预算：** 核心样式表必须保持在 **8 KB gzip** 以下。如果你的变更超出此限制，请在 PR 中说明理由。

<hr class="hr-text" data-content="拉取请求">

## 拉取请求

1. 非琐碎的变更请先创建 issue——避免返工。
2. PR 保持聚焦：每个 PR 一个逻辑变更。
3. 在 `CHANGELOG.md` 的"未发布"部分更新内容。
4. 请求审查前确保 CI 通过。
5. 默认采用 squash 合并；提交消息将在合并时整理。

<hr class="hr-text" data-content="行为准则">

## 行为准则

参与即代表你同意遵守 [贡献者公约 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)。友善待人，耐心交流，善意推测。

[创建 issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[创建 PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
