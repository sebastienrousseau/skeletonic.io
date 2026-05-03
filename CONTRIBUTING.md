Contributing
============

Skeletonic Stylus is an open-source project; contributions of all sizes
are welcome — from typo fixes to new components.

## Quick start

```bash
# 1. Fork & clone
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Install (pnpm via corepack)
corepack enable
pnpm install

# 3. Build
pnpm run build    # stylus → prettier → stylelint → autoprefixer → csso

# 4. Lint & test
pnpm run lint
node scripts/a11y-test.mjs
```

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

## Pull requests

1. Open an issue first for anything non-trivial — saves rework.
2. Keep PRs focused: one logical change per PR.
3. Update the `CHANGELOG.md` under "Unreleased".
4. Make sure CI is green before requesting review.
5. Squash-merge is the default; commit messages will be cleaned up at merge.

## Code of conduct

By participating, you agree to abide by the
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Be kind, be patient, assume good intent.

[Open an issue](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Open a PR](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
