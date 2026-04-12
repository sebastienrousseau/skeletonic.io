---
title: "Contribute"
name: "Skeletonic Stylus"
description: "How to file issues, propose changes, and submit pull requests to Skeletonic Stylus."
layout: page
permalink: https://skeletonic.io/contribute/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "contribute, open source, pull request, issue, conventions"
---

Skeletonic Stylus is an open-source project; contributions of all sizes
are welcome — from typo fixes to new components.

<hr class="hr-text" data-content="Quick start">

## Quick start

```bash
# 1. Fork &amp; clone
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Install (pnpm via corepack)
corepack enable
pnpm install

# 3. Build
pnpm run build           # full pipeline (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint &amp; test
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Conventions">

## Conventions

- **Branch names:** `feat/short-thing`, `fix/short-thing`, `docs/short-thing`.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org).
  All commits are signed.
- **Stylus:** 4-space indent, no semicolons, prefer `$variables` over magic
  numbers, every public class lives in a cascade layer.
- **Accessibility:** any new component must demonstrably meet WCAG 2.2 AA;
  run `node scripts/a11y-test.mjs` against the showcase before opening a PR.
- **Size budget:** the core stylesheet must stay under **8 KB gzipped**.
  If your change pushes it over, justify it in the PR.

<hr class="hr-text" data-content="Pull requests">

## Pull requests

1. Open an issue first for anything non-trivial — saves rework.
2. Keep PRs focused: one logical change per PR.
3. Update the `CHANGELOG.md` under "Unreleased".
4. Make sure CI is green before requesting review.
5. Squash-merge is the default; commit messages will be cleaned up at merge.

<hr class="hr-text" data-content="Code of conduct">

## Code of conduct

By participating, you agree to abide by the
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Be kind, be patient, assume good intent.

[Open an issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Open a PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
