---
title: "无障碍 — v1.1.7 中的 WCAG 2.2"
name: "Skeletonic Stylus"
description: "v1.1.7 开箱即用的 WCAG 2.2 合规能力——焦点环、对比度、跳转链接、动效控制和深色模式。"
language: zh-hans
layout: page
permalink: https://skeletonic.io/zh-hans/wu-zhang-ai/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "wcag 2.2, 无障碍, focus visible, 跳转链接, prefers reduced motion, 对比度"
---

> **Skeletonic Stylus v1.1.7 将 WCAG 2.2 合规作为默认行为，而非可选主题。** 本页说明了内置功能以及可选启用的混入。

<hr class="hr-text" data-content="开箱即用">

## 开箱即用的功能

| WCAG 2.2 SC | v1.1.7 的实现 | 验证方式 |
|---|---|---|
| **1.4.3 对比度（最低要求）— AA** | `--cl-primary` 和 `--cl-secondary` 加深至白色背景上 ≥ 4.5:1 | 开发者工具 → 对比度检查器 |
| **1.4.11 非文本对比度 — AA** | 表单边框、按钮、徽章均 ≥ 3:1 | 同上 |
| **2.4.7 焦点可见 — AA** | 每个可聚焦元素均有 `:focus-visible` 焦点环（深色背景上为黄色，浅色背景上为蓝色） | 使用 `Tab` 键遍历任意页面 |
| **2.4.11 焦点不被遮挡 — AA（2.2 新增）** | 固定页头高度缩减 + 焦点 scroll-margin | 使用 `Tab` 键越过固定页头 |
| **2.5.8 目标尺寸 — AA（2.2 新增）** | 按钮/链接：≥ 24×24 CSS px 点击区域 | 开发者工具盒模型 |
| **1.4.12 文本间距 — AA** | 所有元素均遵循用户的 line-height / letter-spacing 覆盖 | 在开发者工具中覆盖 |
| **2.3.3 交互动画 — AAA** | 所有动画类均包裹在 `@media (prefers-reduced-motion: no-preference)` 中 | 操作系统级减弱动效 |
| **1.4.10 重排 — AA** | 在 320 px 宽度下布局正常，无水平滚动 | 开发者工具窄视口 |
| **深色模式** | `prefers-color-scheme: dark` 自动切换令牌 | 操作系统深色模式切换 |

<hr class="hr-text" data-content="混入">

## 可选启用的 Stylus 混入

如果你从源码编译，以下混入可在 `src/stylus/utilities/mixins.styl` 中使用：

| 混入 | 用途 |
|---|---|
| `focus-ring()` | 遵循 `:focus-visible` 的高对比度焦点环 |
| `visually-hidden()` | 仅屏幕阅读器可见、仍可聚焦的文本 |
| `skip-link()` | 聚焦时变为可见的锚点 |
| `reduced-motion()` | 将任意块包裹在 `prefers-reduced-motion: no-preference` 中 |
| `forced-colors()` | Windows 高对比度模式适配 |
| `target-size(24px)` | 将任何可点击元素填充到最小点击目标 |

示例：

```stylus
// 为自定义按钮应用强焦点环
.my-button
    focus-ring()
    target-size(28px)
```

<hr class="hr-text" data-content="跳转链接">

## 跳转链接辅助

在 **`<body>` 内的第一个位置**放入以下代码：

```html
<a href="#main-content" class="skip-link">跳转到主要内容</a>
```

该类**不在**核心样式表中（因此不影响页面体积）；它是一个 4 行代码片段，你可以自行编写或使用内置的 `skip-link()` 混入。本站已使用该功能——聚焦页面并按 Tab 键即可在左上角看到它出现。

<hr class="hr-text" data-content="验证">

## 验证你的页面

该库在 `scripts/` 目录下提供一个 `a11y-test.mjs` 脚本，可对你指定的任意 URL 运行 [axe-core](https://github.com/dequelabs/axe-core) 检测。

```bash
node scripts/a11y-test.mjs https://example.com
```

CI 在每次推送时都会对 `dist/index.html` 展示页面运行此脚本。

[了解 v1.1.7 版本发布 →](/zh-hans/geng-xin-ri-zhi/) ·
[查看安全页面 →](/zh-hans/an-quan/)
