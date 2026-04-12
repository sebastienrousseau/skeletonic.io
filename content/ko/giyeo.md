---
title: "기여하기"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus에 이슈를 제출하고, 변경을 제안하며, 풀 리퀘스트를 제출하는 방법입니다."
layout: page
permalink: https://skeletonic.io/ko/giyeo/
date: 2026-04-08
author: Sebastien Rousseau
language: ko
theme_color: "hsl(210, 100%, 42%)"
keywords: "기여, 오픈소스, 풀 리퀘스트, 이슈, 규칙"
---

Skeletonic Stylus는 오픈소스 프로젝트이며, 오타 수정부터 새로운 구성 요소까지 모든 규모의 기여를 환영합니다.

<hr class="hr-text" data-content="빠른 시작">

## 빠른 시작

```bash
# 1. 포크 & 클론
git clone git@github.com:YOUR-USER/skeletonic-stylus.git
cd skeletonic-stylus

# 2. 설치 (corepack을 통한 pnpm 사용)
corepack enable
pnpm install

# 3. 빌드
pnpm run build           # 전체 파이프라인 (stylus → prettier → stylelint → autoprefixer → csso)

# 4. 린트 & 테스트
pnpm run lint
node scripts/a11y-test.mjs
```

<hr class="hr-text" data-content="규칙">

## 규칙

- **브랜치 이름:** `feat/short-thing`, `fix/short-thing`, `docs/short-thing`.
- **커밋:** [Conventional Commits](https://www.conventionalcommits.org). 모든 커밋은 서명됩니다.
- **Stylus:** 4칸 들여쓰기, 세미콜론 없음, 매직 넘버 대신 `$variables` 사용, 모든 공개 클래스는 캐스케이드 레이어에 위치.
- **접근성:** 새로운 구성 요소는 WCAG 2.2 AA를 충족해야 합니다. PR을 열기 전에 `node scripts/a11y-test.mjs`를 쇼케이스에 대해 실행하십시오.
- **크기 예산:** 코어 스타일시트는 **8 KB gzipped** 미만이어야 합니다. 변경 사항이 이를 초과하면 PR에서 정당성을 설명하십시오.

<hr class="hr-text" data-content="풀 리퀘스트">

## 풀 리퀘스트

1. 사소하지 않은 변경은 먼저 이슈를 열어주십시오. 재작업을 줄여줍니다.
2. PR은 집중적으로 유지하십시오: PR당 하나의 논리적 변경.
3. `CHANGELOG.md`의 "Unreleased" 항목을 업데이트하십시오.
4. 리뷰 요청 전에 CI가 통과하는지 확인하십시오.
5. Squash-merge가 기본입니다. 병합 시 커밋 메시지가 정리됩니다.

<hr class="hr-text" data-content="행동 강령">

## 행동 강령

참여함으로써 [Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)을 준수하는 데 동의하게 됩니다. 친절하고 인내심을 가지며, 선의를 가정하십시오.

[이슈 열기 ↗](https://github.com/sebastienrousseau/skeletonic-stylus/issues) ·
[PR 열기 ↗](https://github.com/sebastienrousseau/skeletonic-stylus/pulls)
