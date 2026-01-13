# SkillZenGarden (Vite + React Router) — CLAUDE.md

이 문서는 코딩 에이전트가 **SkillZenGarden** 프로젝트를 일관되게 생성/확장하기 위한 작업 지침서입니다.  
목표는 CSS Zen Garden처럼 **동일한 표준 UI(구조/콘텐츠)를 유지**한 채, **페이지별 스킬(prompt) 문서에 따라 스타일만 다르게** 만든 예시 페이지들을 모아 보여주는 것입니다.

---

## 0) 핵심 원칙 (반드시 준수)

1. **프레임워크 고정:** Vite + React 18+ + React Router 사용 (변경 금지).
2. **표준 UI는 고정:** 페이지 간 **컴포넌트 트리/레이아웃/더미 데이터는 동일**해야 한다.  
   - 바뀌는 것은 **스타일(클래스/토큰/컴포넌트 스킨)** 뿐이다.
3. **스킬(prompt)은 런타임 자동 적용이 아님:**  
   - `skill.md`는 “스타일링 가이드 문서”이며, **에이전트/개발자가 읽고 코드에 수동 반영**한다.
   - `skill.md`를 파싱해 자동으로 CSS를 생성/주입하는 기능은 **MVP 범위에서 금지**.
4. **각 페이지는 디렉토리로 분리:** `src/pages/<page-slug>/` 구조를 따른다.
5. **각 페이지의 스킬 파일은 해당 페이지 디렉토리에 위치:** `src/pages/<page-slug>/skill.md`
6. **페이지에서 스킬 파일 내용을 확인 가능:**  
   - `skill.md`를 **raw import**로 읽어 화면에 표시한다 (예: `?raw`).
7. **초기 샘플 페이지는 2개를 생성:** 동일한 표준 UI를 서로 다른 스타일로 재디자인하여 대비를 분명히 한다.

---

## 1) 기술 스택

- Vite
- React 18+
- TypeScript (권장: 기본값으로 사용)
- React Router v6+
- Tailwind CSS
- shadcn/ui (필요 컴포넌트 설치)
- (선택) class-variance-authority, clsx, tailwind-merge (shadcn 기본 흐름)

---

## 2) 프로젝트 산출물 (이번 작업에서 반드시 생성)

### 필수 생성 파일/디렉토리
- `src/pages/_template/` : 새 페이지 복사용 템플릿 폴더(수동 복제 워크플로 지원)
- `src/pages/style-a/` : 샘플 페이지 1
  - `page.tsx`
  - `skill.md`
  - `styles.ts` (또는 `style.ts`) : 페이지별 스타일 상수/클래스 모음(권장)
- `src/pages/style-b/` : 샘플 페이지 2
  - `page.tsx`
  - `skill.md`
  - `styles.ts` (또는 `style.ts`)
- `src/pages/index.ts` : 페이지 메타(네비게이션/라우팅용)
- `src/routes.tsx` : 라우트 정의(또는 `src/main.tsx` 내 구성)
- `src/components/StandardShowcase/` : 표준 UI를 구성하는 고정 컴포넌트(권장)
  - `StandardShowcase.tsx` : “변하지 않는 UI 구조” 컴포넌트
  - `data.ts` : 더미 데이터(고정 시드)
- `src/components/SkillPanel/SkillPanel.tsx` : 스킬 문서 표시 패널(접기/펼치기, 복사 버튼 포함)

### 페이지 추가 워크플로 (수동)
1) `src/pages/_template`를 `src/pages/<new-slug>`로 **복사**  
2) `skill.md` 작성/수정  
3) `styles.ts` 수정(스타일 규칙/클래스 변경)  
4) `src/pages/index.ts`에 페이지 등록(네비 목록/라우팅 메타)

---

## 3) 표준 페이지(표준 UI) 스펙 — “구조 고정”

샘플 페이지 A/B는 **아래 구조를 반드시 동일**하게 사용한다.  
(텍스트/컴포넌트 구성, 상태 요소 포함)

### 표준 UI 구성 (권장 최소)
- App Shell
  - Topbar (로고/페이지명/액션 버튼 1개)
  - Sidebar (네비 링크 목록)
  - Content
- Content 내부 섹션
  1) KPI 카드 3개 (수치/증감 배지 포함)
  2) Tabs 2개 (예: Overview / Activity)
  3) Table (행 8~12개, 상태 배지, 행 액션 버튼 포함)
  4) Form (input 2개 + select 1개 + textarea 1개)
     - 상태 포함: default / focus / error / disabled (시각적으로 드러나야 함)
  5) Button set (primary / secondary / ghost)
  6) Modal trigger + Toast trigger (동작은 간단히)
  7) Alert(또는 Callout) 1개

> 주의: 페이지별로 구성 요소를 추가/삭제하지 말 것.  
> “동일 콘텐츠, 다른 스타일”이 목표다.

---

## 4) 스킬 파일(`skill.md`) 포맷 규칙 (페이지별 동일 형식)

각 페이지의 `skill.md`는 아래 섹션을 반드시 포함한다.

```md
# Intent
(이 스타일의 의도/컨셉 한 문단)

# Style Rules
- (규칙 5~12개, 명확하게)
- (예: radius는 작게, 그림자는 최소, 테이블은 고밀도 등)

# Tokens (optional)
- color.primary: ...
- radius.md: ...
- space.scale: ...

# Do
- (반드시 지킬 것)

# Don't
- (금지 사항)

# Notes
(기타 힌트)
```

---

## 5) 스킬 파일 표시(페이지에서 확인) 구현 규칙

- Vite raw import를 사용하여 마크다운 원문을 문자열로 로드한다.
  - 예: `import skillMd from "./skill.md?raw";`
- UI에서는 다음을 제공한다.
  - “Applied Skill” 패널(우측 고정 패널 또는 드로어)
  - 펼치기/접기
  - “Copy” 버튼(클립보드 복사)
  - 원문은 코드블록 스타일로 표시(또는 마크다운 렌더러 사용 가능)

---

## 6) 스타일 적용 방식 (MVP)

페이지별 스타일 차이는 다음 중 하나 또는 혼합으로 만든다.

- **Tailwind 클래스 조정**: 컴포넌트에 적용된 className 차이로 스타일링
- **CSS 변수(선택)**: 페이지 루트에 변수 주입 후, shadcn/tailwind에서 참조

단, MVP에서는 **“스킬 파일을 파싱해 자동으로”** 스타일을 바꾸지 않는다.  
스타일은 `styles.ts` 같은 파일에 명시적으로 정의하고, 표준 컴포넌트에 props로 전달한다.

---

## 7) 디렉토리 구조(권장)

```
src/
  components/
    StandardShowcase/
      StandardShowcase.tsx
      data.ts
    SkillPanel/
      SkillPanel.tsx
  pages/
    _template/
      page.tsx
      skill.md
      styles.ts
    style-a/
      page.tsx
      skill.md
      styles.ts
    style-b/
      page.tsx
      skill.md
      styles.ts
    index.ts
  routes.tsx
  main.tsx
```

---

## 8) 샘플 페이지 2개 스타일 컨셉(명확한 대비)

### style-a (예: B2B SaaS 미니멀)
- 저채도/플랫
- 그림자 최소, 보더로 구분
- 테이블 고밀도, 타이포 계층 명확
- radius 작게, spacing 타이트

### style-b (예: 포스터/편집샵 느낌)
- 대비 강함, 타이포 강조
- 카드/섹션의 라운드 크게, 그림자/레이어 사용
- 여백 넓게, 버튼 형태 과감
- 배지/강조색 적극 사용

> 두 페이지는 “구조 동일” + “스타일만 확연히 다름”을 만족해야 한다.

---

## 9) 접근성/품질 최소 조건(MVP)

- 포커스 링이 보일 것 (키보드 내비게이션)
- 버튼 최소 높이 40px 이상 권장 (가능하면 44px)
- 대비가 너무 낮지 않게(가능한 범위에서)

---

## 10) 완료 기준(Definition of Done)

- Vite + React Router로 앱이 실행된다.
- `/style-a`, `/style-b` 라우트가 존재한다.
- 두 페이지는 **동일한 표준 UI**를 렌더링한다(구조/데이터 동일).
- 각 페이지에서 `skill.md` 원문을 UI에서 확인 가능(패널/복사 포함).
- `src/pages/_template`를 제공한다.
- 네비게이션에서 두 샘플 페이지로 이동 가능하다.

---

## 11) 구현 팁(혼선 방지)

- 표준 UI는 `StandardShowcase` 1곳에 모으고, 페이지는 다음만 담당:
  - `styles.ts`에서 스타일 preset 정의
  - `skill.md` 로드
  - `StandardShowcase`에 스타일 preset 전달
  - `SkillPanel`로 skill 표시
- 페이지별 변경 범위는 “스타일 preset” 내부로 제한한다.
- 더미 데이터는 `data.ts`에서 고정 시드로 생성하거나 상수로 유지한다.

끝.
