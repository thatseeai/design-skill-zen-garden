# Intent
하이틴 만화 컷, 네온 스티커, 반짝이는 스파클 오브젝트가 겹쳐진 Y2K 카와이 에너지를 대시보드 UI에 번역한다. 목표는 "강한 시선 유도 + 높은 정보 판독성"의 동시 달성이다. 즉, 시각적 인상은 과감하고 달콤해야 하지만 실제 사용성은 업무 UI 수준으로 명확해야 한다.

# Style Rules
- 기본 무드는 네온 핑크/시안/바이올렛 3색 대비로 구성하고 중립색 회색 사용을 최소화한다
- 배경은 2~3개 라디얼 라이트와 1개 메인 그라데이션을 겹치고, 하프톤 도트 패턴을 얇게 올린다
- 카드/패널 표면은 이중 경계(내부 밝은 윤곽 + 외부 색상 보더)로 스티커 컷아웃을 표현한다
- 라운드 체계는 대형 컴포넌트 20~24px, 컨트롤 16px, 배지 999px로 고정한다
- 타이포 체계는 display(헤드라인) 1종 + rounded sans(본문/라벨) 1종만 사용한다
- 컴포넌트 기본 상태는 고대비, hover는 밝기 4~8% 상승, active는 y축 -1px 이내 이동으로 제한한다
- 상태 배지(active/inactive/pending)는 배경색이 아니라 보더+텍스트 대비로 우선 구분한다
- 장식 오브젝트(하트/스파클)는 콘텐츠 외곽 또는 뒤 레이어에만 배치한다
- 다크 모드는 라이트 팔레트 관계를 유지하고 배경 명도만 낮춰 "네온이 떠 보이는" 효과를 만든다
- 상단바와 본문은 배경 명도차를 분명히 두어 구획이 즉시 인식되게 한다

# Tokens
- light.background.start: #ffd3f5
- light.background.mid: #f8d7ff
- light.background.end: #d8f8ff
- light.surface: #fff8ff
- light.surface.alt: #f1e3ff
- light.text.primary: #2f1a75
- light.text.secondary: #6f5ea6
- light.primary: #ff5fd1
- light.secondary: #63f0ff
- light.accent: #9759ff
- light.border: #cfb4ff
- dark.background.start: #201336
- dark.background.mid: #281d4a
- dark.background.end: #17314f
- dark.surface: #3d2f60
- dark.surface.alt: #433169
- dark.text.primary: #f8f3ff
- dark.text.secondary: #d9cbff
- dark.primary: #ff8fe2
- dark.secondary: #6cf0ff
- dark.accent: #b08aff
- dark.border: #6f5aa5
- radius.card: 22px
- radius.panel: 20px
- radius.control: 16px
- radius.tab: 14px
- border.default: 2px solid token(border)
- shadow.surface.light: 0 14px 26px rgba(101, 73, 178, 0.22)
- shadow.surface.dark: 0 14px 26px rgba(9, 6, 22, 0.42)
- shadow.active: 0 6px 14px rgba(127, 87, 206, 0.24)
- font.heading.family: "Cherry Bomb One", system-ui
- font.body.family: "M PLUS Rounded 1c", sans-serif
- font.heading.size.section: 48~60px
- font.body.size.base: 16px
- pattern.halftone.size: 24px
- pattern.halftone.offset: 12px
- motion.fast: 160ms ease-out
- motion.base: 220ms ease-out
- motion.slow: 300ms ease-in-out

# Do
- 컴포넌트별 구현 계약을 고정한다: card=22px, table wrapper=20px, form control=16px, badge=999px
- card: `surface` 배경 + 2px 보더 + 상단 헤더 보더를 유지해 정보 블록을 명확히 구분한다
- tabs: list는 `surface.alt`, active trigger는 `surface`+`text.primary`+`shadow.active`를 적용한다
- table: 헤더/바디 배경을 분리하고 row hover는 배경만 바꾸며 텍스트 색은 유지한다
- form: default/error/disabled를 border 색으로 우선 구분하고 placeholder 대비를 충분히 확보한다
- button.primary: 핑크->보라 gradient 1개만 사용하고 secondary/ghost는 중성 톤으로 안정화한다
- modal/alert: 카드와 동일 라운드/보더 문법을 사용해 스타일 일관성을 유지한다
- layout.topbar: 본문 대비 어두운 독립 면으로 설정하고 title 텍스트는 항상 현재 색상 상속으로 고정한다
- decorative layer: `pointer-events-none`, `z-index`는 콘텐츠보다 낮게 유지한다
- 모바일(<=768px): 대형 장식 50% 이상 축소 또는 비노출, 본문 패딩 최소 24px 확보
- 포커스 링은 `secondary` 계열 2px 이상으로 명확히 노출한다

# Don't
- 네온 포인트를 모든 요소에 반복해 시각적 강조점을 소모하지 않는다
- 그라데이션을 2개 이상 중첩해 텍스트 대비를 무너뜨리지 않는다
- 컴포넌트마다 다른 radius/보더 두께를 섞어 쓰지 않는다
- 장식 오브젝트를 헤더 타이틀, 버튼, 폼 입력 위로 올리지 않는다
- 긴 본문에 저대비 보라 텍스트를 사용하지 않는다
- hover마다 큰 scale(>1.01)이나 강한 블러를 적용하지 않는다
- 다크 모드에서 밝은 라이트 배경값을 재사용하지 않는다
- 분위기를 이유로 접근성 대비 기준을 희생하지 않는다

# Notes
이 문서는 감성 설명이 아니라 "재현 스펙"으로 사용한다. 다른 프로젝트 적용 순서는 1) 토큰 고정, 2) 컴포넌트 상태 규칙 고정, 3) 장식 레이어/모션 강도 고정이다. 세 단계를 유지하면 구현자가 달라도 style-l의 look&feel 편차를 크게 줄일 수 있다.
