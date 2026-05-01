---
title: "보안 &amp; 공급망"
name: "Skeletonic Stylus"
description: "Skeletonic Stylus v2.0.0이 빌드 파이프라인을 보호하고, 릴리스에 서명하며, SBOM을 제공하는 방법입니다."
layout: page
permalink: https://skeletonic.io/ko/boaan/
date: 2026-04-08
author: Sebastien Rousseau
language: ko
theme_color: "hsl(210, 100%, 42%)"
keywords: "css 보안, sbom, cyclonedx, npm 출처 증명, openssf scorecard, 공급망"
---

## 성능

- **45.0&nbsp;KB 최소화 · 8.6&nbsp;KB gzipped · 7.2&nbsp;KB brotli** (전체 코어 스타일시트 기준).
- **JavaScript 없음** — 순수 Stylus → 순수 CSS, 런타임 비용 없음.
- **캐스케이드 레이어** — `!important` 없이 오버라이드가 적용됩니다.
- **`size-limit` 예산이 CI에서** 매 커밋마다 적용됩니다.

성능은 보안 통제입니다. 전송하지 않는 모든 바이트는 감사, 서명 및 검증할 바이트가 하나 줄어드는 것입니다.

## 공급망 요약

| 통제 | v2.0.0 상태 |
|---|---|
| **CycloneDX SBOM** | 매 릴리스마다 생성, `dist/sbom.json`에 커밋 |
| **npm 출처 증명** | 활성화 (`--provenance --access public`) |
| **서명된 git 태그** | 유지관리자 키로 SSH 서명 |
| **고정된 Dependabot** | 주간 업데이트, 자동 검토 |
| **크기 예산** | `size-limit` 8 KB gzipped 상한선, 회귀 시 CI 실패 |
| **린트** | `stylelint` + 접근성 어설션이 매 푸시마다 적용 |
| **CodeQL** | `javascript` 및 설정 파일에 대해 활성화 |
| **CVE-2023-44270** | `pnpm.overrides`를 통한 `postcss@7` 플러시로 **패치 완료** |

<hr class="hr-text" data-content="SBOM">

## CycloneDX SBOM

모든 게시된 tarball에는 `dist/sbom.json`에 CycloneDX SBOM이 포함되어 있습니다. 새로 설치한 패키지를 다음과 같이 확인할 수 있습니다:

```bash
pnpm add @sebastienrousseau/skeletonic-stylus@2.0.0
jq '.metadata.component.version' \
  node_modules/@sebastienrousseau/skeletonic-stylus/dist/sbom.json
# → "2.0.0"
```

SBOM은 게시 워크플로우 중 `cyclonedx-npm`으로 생성됩니다.

<hr class="hr-text" data-content="출처 증명">

## npm 출처 증명

게시된 산출물은 [npm 패키지 출처 증명](https://docs.npmjs.com/generating-provenance-statements)을 사용하여 서명됩니다.

설치 후 다음과 같이 확인할 수 있습니다:

```bash
npm view @sebastienrousseau/skeletonic-stylus@2.0.0 --json | \
  jq '.dist."npm-signature"'
```

서명된 증명은 tarball을 해당 산출물을 생성한 정확한 GitHub Actions 실행에 연결합니다.

<hr class="hr-text" data-content="CVE">

## 알려진 CVE &amp; 패치

| CVE | 심각도 | 상태 |
|---|---|---|
| **CVE-2023-44270** (postcss 줄바꿈 파싱) | 보통 | `pnpm.overrides`를 통해 `postcss`를 8.4.31 이상으로 업그레이드하여 v2.0.0에서 **패치 완료** |

Snyk 권고 데이터베이스와 GitHub Security Advisories 피드가 지속적으로 모니터링됩니다. 보안 패치는 **패치 수준 릴리스**로 제공됩니다.

<hr class="hr-text" data-content="보고">

## 취약점 보고

보안 보고서에 대해 공개 GitHub 이슈를 열지 **마십시오**. 대신 아래의 비공개 채널을 사용하십시오:

> [github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new](https://github.com/sebastienrousseau/skeletonic-stylus/security/advisories/new)

보고서는 **72시간** 이내에 수신 확인됩니다. 보통 수준 이슈는 **14일** 이내, 치명적 이슈는 **48시간** 이내에 수정이 제공됩니다.

[홈으로 돌아가기 →](/ko/) · [변경 이력 읽기 →](/ko/byeongyeong-ilji/)
