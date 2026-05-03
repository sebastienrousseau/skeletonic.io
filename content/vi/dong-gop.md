---
title: "Dong gop"
name: "Skeletonic Stylus"
description: "Cach bao cao van de, de xuat thay doi va gui pull request cho Skeletonic Stylus."
layout: page
language: vi
permalink: https://skeletonic.io/vi/dong-gop/
date: 2026-04-08
author: Sebastien Rousseau
theme_color: "hsl(210, 100%, 42%)"
keywords: "dong gop, ma nguon mo, pull request, issue, quy uoc"
---

Skeletonic Stylus la du an ma nguon mo; dong gop moi kich thuoc deu
duoc chao don — tu sua loi chinh ta den thanh phan moi.

<hr class="hr-text" data-content="Bat dau nhanh">

## Bat dau nhanh

```bash
# 1. Fork & clone
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. Cai dat (pnpm via corepack)
corepack enable
pnpm install

# 3. Build
pnpm run build           # pipeline day du (stylus → prettier → stylelint → autoprefixer → csso)

# 4. Lint & kiem tra
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="Quy uoc">

## Quy uoc

- **Ten nhanh:** `feat/ten-ngan`, `fix/ten-ngan`, `docs/ten-ngan`.
- **Commit:** [Conventional Commits](https://www.conventionalcommits.org).
  Tat ca commit deu duoc ky.
- **Stylus:** thut le 4 khoang trang, khong dau cham phay, uu tien `$variables`
  hon so phep mau, moi lop cong khai nam trong cascade layer.
- **Tro nang:** moi thanh phan moi phai chung minh dat WCAG 2.2 AA;
  chay `node scripts/a11y-test.mjs` tren trang gioi thieu truoc khi mo PR.
- **Ngan sach kich thuoc:** stylesheet chinh phai nam duoi **8 KB gzip**.
  Neu thay doi cua ban vuot qua, giai trinh trong PR.

<hr class="hr-text" data-content="Pull request">

## Pull request

1. Mo issue truoc cho bat ky dieu gi phuc tap — tiet kiem cong suc lam lai.
2. Giu PR tap trung: mot thay doi logic cho moi PR.
3. Cap nhat `CHANGELOG.md` trong muc "Unreleased".
4. Dam bao CI xanh truoc khi yeu cau xem xet.
5. Squash-merge la mac dinh; tin nhan commit se duoc don dep khi merge.

<hr class="hr-text" data-content="Quy tac ung xu">

## Quy tac ung xu

Khi tham gia, ban dong y tuan thu
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
Hay tot bung, kien nhan va gia dinh thien chi.

[Mo issue ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[Mo PR ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
