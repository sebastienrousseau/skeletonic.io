---
title: "关于 Skeletonic Stylus"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus 是一个开源 Stylus CSS 库，用于无障碍、高性能、模块化的 UI 样式开发。"
language: zh-hans
layout: page
permalink: https://skeletonic.io/zh-hans/guan-yu/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "skeletonic, 关于, stylus, css 框架, 设计理念"
---

<p class="badges">
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Stars" height="28" loading="lazy">
  <img alt="月下载量" src="https://img.shields.io/npm/dm/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=Downloads" height="28" loading="lazy">
  <img alt="npm 版本" src="https://img.shields.io/npm/v/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=npm" height="28" loading="lazy">
  <img alt="压缩体积" src="https://img.shields.io/badge/gzipped-7.5%20KB-brightgreen?style=for-the-badge" height="28" loading="lazy">
  <img alt="许可证" src="https://img.shields.io/npm/l/@sebastienrousseau/skeletonic-stylus?style=for-the-badge&label=License" height="28" loading="lazy">
  <img alt="WCAG" src="https://img.shields.io/badge/WCAG-2.2%20AA-2e7d32?style=for-the-badge" height="28" loading="lazy">
</p>

## 简短介绍

**Skeletonic Stylus** 是一个开源 [Stylus](https://stylus-lang.com)
CSS 库，用于无障碍、高性能、模块化的 UI 样式开发。

它诞生于 2018 年，最初是一个**精简 CSS 体积**的个人实验，同时保留了完整组件库的开发体验。八年过去，目标始终未变。

## 核心能力

<div class="feature-grid">
  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/thunder.min.svg" alt="闪电" width="64" height="64" loading="lazy" decoding="async">
    <h3>极速开发</h3>
    <p>几分钟即可设计和定制响应式界面。原生 CSS 变量、预定义类名、覆盖所有语义 HTML 元素的 12 列栅格。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/lightweight.min.svg" alt="羽毛" width="64" height="64" loading="lazy" decoding="async">
    <h3>轻量小巧</h3>
    <p>gzip 后约 7.5&nbsp;KB。页面加载更快，核心构建块一个不少。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/responsive.min.svg" alt="响应式设备" width="64" height="64" loading="lazy" decoding="async">
    <h3>响应式设计</h3>
    <p>专为桌面和移动端打造，布局自适应任何设备。触控优化，全程语义化 HTML。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/accessibility.min.svg" alt="无障碍" width="64" height="64" loading="lazy" decoding="async">
    <h3>无障碍</h3>
    <p>WCAG&nbsp;2.2 内置支持：focus-visible 焦点环、AA 对比度、跳转链接辅助、键盘友好组件、减弱动效支持——无需额外样式表，无需 <code>aria-*</code> 模板代码。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/components.min.svg" alt="组件模块" width="64" height="64" loading="lazy" decoding="async">
    <h3>组件库</h3>
    <p>模块化 CSS 组件与 Stylus 混入。按钮、表单、卡片、提示框、徽章、色板和动画——简洁、模块化、即装即用。</p>
  </article>

  <article class="feature-card">
    <img class="feature-icon" src="/images/icons/github.min.svg" alt="GitHub 标志" width="64" height="64" loading="lazy" decoding="async">
    <h3>免费开源</h3>
    <p>由 Sebastien Rousseau 设计、构建和维护。双重许可：<strong>MIT</strong> 或 <strong>Apache&nbsp;2.0</strong>。无费用，无许可成本，商业用途同样适用。</p>
  </article>
</div>

## 横向对比

一个自托管样式表即可涵盖排版、按钮、表单、卡片、表格、色板、动画和工具类。无 JavaScript。无需构建步骤。无 Bootstrap、Tailwind 或 Bulma 的对等依赖。

| 特性 | Skeletonic Stylus | Bootstrap 5 | Tailwind CSS | Bulma |
|---|---|---|---|---|
| Gzip 体积 | **约 7.5&nbsp;KB** | 约 30&nbsp;KB | 约 10&nbsp;KB (varies) | 约 30&nbsp;KB |
| WCAG 2.2 合规 | **内置** | 部分 | 手动 | 部分 |
| 级联层 | **支持 (`@layer`)** | 不支持 | 不支持 | 不支持 |
| 深色模式 | **`prefers-color-scheme`** | 可选启用 | 基于类名 | 可选启用 |
| 需要 JavaScript | **不需要** | 需要 (Popper) | 不需要 | 不需要 |
| CycloneDX SBOM | **有** | 无 | 无 | 无 |
| 减弱动效 | **已适配** | 部分 | 手动 | 部分 |
| 许可证 | MIT 或 Apache 2.0 | MIT | MIT | MIT |

## 原则

1. **无障碍是底线，而非天花板。** WCAG 2.2 合规内置于每个组件，而非作为"主题"外挂。
2. **字节很重要。** 单一样式表不应超出页面体积预算。8&nbsp;KB gzip 上限在 CI 中强制执行。
3. **级联层胜过优先级大战。** 放心覆盖任何样式——无需 `!important`，无需 DOM 顺序技巧。
4. **Stylus 依然优秀。** 简洁、表达力强，让整个库保持在约 3,000 行可读代码。
5. **平实即特性。** 无 JS 依赖。无构建时魔法。无破坏性重命名。CSS 类名名副其实。
6. **秒级主题定制。** 原生 CSS 自定义属性控制颜色、间距、字体和圆角。
7. **供应链加固。** 签名的 npm 来源验证。Dependabot 锁定更新。CVE-2023-44270 已通过覆盖修补。

## 版本管理与语义化版本

Skeletonic Stylus 遵循 [语义化版本 2.0](https://semver.org)。

| 升级类型 | 时机 | 示例 |
|---|---|---|
| **主版本** | 移除或重命名公共类、混入或令牌 | 1.x → 2.0 |
| **次版本** | 新增组件、混入或令牌 | 1.1 → 1.2 |
| **补丁版本** | Bug 修复、无障碍优化、性能、安全 | 1.1.6 → 1.1.7 |

所有公共类名、所有 CSS 自定义属性以及所有导出的 Stylus 混入均属于公共 API。破坏性变更将触发主版本升级并附带迁移指南。

## 项目管理

Skeletonic Stylus 由 [Sebastien Rousseau](https://sebastienrousseau.com) 设计、构建和维护。双重许可：[MIT](https://opensource.org/licenses/MIT) 和 [Apache 2.0](https://opensource.org/licenses/Apache-2.0)。

欢迎提交问题、想法和贡献——[查看贡献指南](/zh-hans/gong-xian/)。
