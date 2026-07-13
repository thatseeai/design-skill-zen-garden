# Project Map
_생성: 2026-07-13 | 대상 커밋: 9cb50e4_

목적: 필요한 파일만 찾아 읽기 위한 인덱스. 상세는 각 파일에 있으니 여기서 반복하지 않는다.

## 한 줄 개요
CSS Zen Garden식 데모 앱 — **고정 표준 UI를 스타일 프리셋만 바꿔** 여러 페이지로 보여준다. Vite + React 18 + React Router v6 + Tailwind + shadcn/ui + TS. 실행 `npm run dev`, 빌드 `npm run build`(tsc -b → vite). 진입점 [src/main.tsx](../src/main.tsx) → [src/App.tsx](../src/App.tsx) → [src/routes.tsx](../src/routes.tsx). 규약/작업지침 원본은 [CLAUDE.md](../CLAUDE.md).

## 파일 인덱스
| 경로 | 역할 | 이럴 때 읽기 |
|------|------|-------------|
| [CLAUDE.md](../CLAUDE.md) | 프로젝트 규약·페이지 추가 워크플로 원본 | 규칙 확인 (맵에 복제 안 함) |
| [src/routes.tsx](../src/routes.tsx) | 라우트 정의 + 페이지별 lazy 로더 맵 | 라우팅/새 스타일 등록 |
| [src/pages/index.ts](../src/pages/index.ts) | 페이지 메타(slug/name/description) 배열 = 네비 소스 | 새 스타일 등록/네비 |
| [src/App.tsx](../src/App.tsx) | RouterProvider + ThemeProvider + Toaster | 전역 셸/테마 |
| [src/components/StandardShowcase/](../src/components/StandardShowcase/) | **불변 표준 UI**. `.tsx`(428줄, 점프표 참조) + `data.ts`(고정 더미) + `types.ts`(`StylePreset` 계약) | UI 구조 변경, 프리셋 필드 확인 |
| [src/components/SkillPanel/SkillPanel.tsx](../src/components/SkillPanel/SkillPanel.tsx) | skill.md 원문 표시 패널(접기/복사) | 스킬 패널 UI |
| [src/components/ThemeProvider.tsx](../src/components/ThemeProvider.tsx) | light/dark 토글 (localStorage `zen-garden-theme`) | 다크모드 로직 |
| [src/components/ui/](../src/components/ui/) | shadcn/ui 원자 컴포넌트 (button, table, dialog, sonner 등) | 컴포넌트 스킨/동작 |
| [src/pages/_template/](../src/pages/_template/) | 새 페이지 복제 원본 (page/skill.md/styles.ts/theme.ts) | 새 스타일 생성 |
| `src/pages/style-{a..t}/` | 각 스타일 페이지 (아래 페이지 구조 참조) | 특정 스타일 작업 |
| [src/index.css](../src/index.css) | Tailwind base + CSS 변수 기본값 | 전역 토큰 |
| [tailwind.config.js](../tailwind.config.js) / [components.json](../components.json) | Tailwind·shadcn 설정 | 설정 확인 |

## 페이지(style-*) 내부 구조 — 4파일 고정 패턴
`src/pages/style-x/` 는 항상 4개 파일. (CLAUDE.md는 styles.ts만 언급하지만 실제로는 theme.ts도 필수)
| 파일 | 역할 |
|------|------|
| `page.tsx` | `<style>{themeStyles}</style>` + `themeClassName` 래퍼 안에 `StandardShowcase`(styles 전달) + `SkillPanel`(skill.md?raw) 렌더 |
| `styles.ts` | `StylePreset` 객체 = Tailwind className 프리셋 (card/kpi/tabs/table/form/button/alert/modal/layout) |
| `theme.ts` | `themeClassName` + `themeStyles`(HSL CSS 변수 문자열, `.x-theme` 및 `.dark .x-theme` 두 블록) |
| `skill.md` | 스타일 가이드 문서 (Intent/Style Rules/Tokens/Do/Don't/Notes) |
> 대표 예시로 [style-a/styles.ts](../src/pages/style-a/styles.ts), [style-a/theme.ts](../src/pages/style-a/theme.ts) 참조. 나머지는 값만 다르고 형태 동일.

## 큰 파일 점프표 (StandardShowcase.tsx, 428줄)
| 라인 | 내용 |
|------|------|
| 1–58 | import(ui 컴포넌트) + props 타입 |
| 60–72 | 컴포넌트 시작, state(modal/sidebar), 토스트 핸들러 |
| 73–117 | Sidebar (모바일 오버레이 + 네비) |
| 118–149 | Topbar (로고/액션 버튼) |
| 150–189 | KPI 카드 3개 |
| 190–279 | Tabs (Overview/Activity) + Table (280 전까지) |
| 280–352 | Form (default/error/select/disabled input + textarea) |
| 353–412 | Button set + Modal trigger + Toast trigger |
| 413–428 | Alert |

## 알아둘 점
- **흐름**: `page.tsx` → `StandardShowcase`(구조·데이터 고정) + `styles`(프리셋) + `theme`(CSS 변수). 스타일 차이는 오직 styles.ts/theme.ts 두 파일 안에서만 발생. 구조/더미데이터 수정 금지(= CLAUDE.md 핵심 원칙 "동일 콘텐츠, 다른 스타일").
- **수정 금지 영역**: `StandardShowcase/*`, `types.ts`의 `StylePreset` 형태 — 바꾸면 모든 style-* styles.ts가 깨진다. `data.ts` 더미도 페이지 간 동일 유지.
- **새 스타일 추가 시 2곳 등록 필수**: (1) [src/pages/index.ts](../src/pages/index.ts) `pages[]`, (2) [src/routes.tsx](../src/routes.tsx) `stylePageLoaders` 맵. 둘 중 하나만 하면 타입/라우트 불일치.
- skill.md는 `?raw` import로 표시만 하는 문서 — **런타임 파싱/자동 CSS 생성 금지**(MVP 원칙). 스타일은 손으로 styles.ts에 반영.
- `/` → `/style-a` 리다이렉트. 라우트는 `pages[]` 순회로 생성되되 로더는 별도 맵에서 조회.
