# Intent
전통 한국 단청의 상징 색과 반복 질서를 현대 대시보드 구조에 적용한다. 목표는 "장식성 있는 프레임 언어"와 "높은 데이터 가독성"의 동시 달성이다. 즉, 화면은 처마 아래 단청 구조처럼 질서 있어야 하며, 장식은 정보 구조를 강조하는 역할만 수행해야 한다.

# Style Rules
- 팔레트는 오방색 계열(청록/적색/황금/한지색/먹색)을 중심으로 고정한다
- 프레임 언어는 직선, 이중 보더, 얕은 각진 라운드(2~4px)로 통일한다
- 섹션 타이틀과 상단바에는 반복 밴드/문양을 적용하되 본문 텍스트 위에는 올리지 않는다
- 카드/패널은 단청 프레임(외곽 금색 + 내부 선)을 공유한다
- 배경은 한지/목재 톤 위에 얇은 격자 문양을 중첩해 평면감을 줄인다
- 버튼/배지는 강한 색 블록보다 보더와 명도 대비로 상태를 구분한다
- hover/active는 색상 반전 또는 border 강조 중심으로 처리한다
- 다크 모드는 색 관계를 유지하되 채도와 명도 대비를 재조정해 판독성을 확보한다
- 장식 이미지는 코너/외곽 중심으로 배치하고 콘텐츠와 최소 24px 이상 간격을 둔다
- 모바일에서는 장식의 크기와 밀도를 줄이고 본문 우선 흐름을 유지한다

# Tokens
- light.background.paper: #f7f2e8
- light.background.wood: #8a5a3b
- light.surface: #f9f4ea
- light.text.primary: #1f2430
- light.text.secondary: #4f4b45
- light.primary.teal: #0f7a72
- light.secondary.red: #b4382f
- light.accent.gold: #d39b2a
- light.border: #d39b2a
- dark.background: #131722
- dark.surface: #1f2430
- dark.surface.alt: #222735
- dark.text.primary: #f7f2e8
- dark.text.secondary: #e6ddcc
- dark.primary.teal: #2da39b
- dark.secondary.red: #d45b52
- dark.accent.gold: #d39b2a
- dark.border: #8f6f35
- radius.sm: 2px
- radius.md: 4px
- radius.lg: 6px
- border.frame.outer: 2px solid token(accent.gold)
- border.frame.inner: 1px solid rgba(15,122,114,0.35)
- shadow.surface.light: 0 10px 26px rgba(31, 36, 48, 0.16)
- shadow.surface.dark: 0 14px 34px rgba(9, 12, 20, 0.36)
- shadow.soft: 0 6px 18px rgba(31, 36, 48, 0.18)
- font.heading.family: "Noto Serif KR", serif
- font.body.family: "Noto Sans KR", sans-serif
- font.heading.size.section: 32~48px
- font.body.size.base: 16px
- pattern.band.height: 24px
- pattern.band.repeat-x: true
- motion.fast: 160ms ease-out
- motion.base: 220ms ease-out

# Do
- 컴포넌트 규격을 고정한다: frame border=2px, 내부 line=1px, panel radius=2~4px
- card/panel: 단청 프레임(`outer gold + inner teal`)을 공통으로 적용해 구조 통일감을 만든다
- tabs: dark ink 배경 + gold 보더 + active gold fill 조합을 유지한다
- table: 헤더는 dark->teal 밴드, 본문은 한지 톤으로 대비를 분리한다
- form: default/error/disabled를 border 색과 배경으로 즉시 구분되게 만든다
- button.primary는 청록 중심, secondary는 한지/금색 프레임 조합으로 유지한다
- section title은 하단 금색 보더와 적색 포인트 라인으로 리듬을 만든다
- 장식 밴드/꽃문양은 `pointer-events-none`과 낮은 opacity(0.16~0.3)를 유지한다
- 모바일(<=768px)에서는 패턴 밀도와 장식 크기를 50% 이상 줄인다
- 포커스 링은 청록 계열 2px 이상으로 명확히 보이게 한다

# Don't
- 네온톤/파스텔톤/현대 미니멀 그레이 팔레트를 섞지 않는다
- 큰 블러, 강한 3D 그림자, 글래스모피즘 효과를 사용하지 않는다
- 큰 원형 라운드를 광범위하게 적용해 목조 프레임 감각을 깨지 않는다
- 장식 문양을 본문 텍스트/입력 필드 위에 겹치지 않는다
- 서로 다른 시대의 시각언어(사이버펑크, 메탈릭 스큐어모피즘)를 혼합하지 않는다
- 다크 모드에서 저대비 회색 텍스트를 대량 사용하지 않는다

# Notes
이 문서는 감성 소개가 아니라 재현 스펙이다. 다른 프로젝트 적용 순서는 1) 단청 토큰 고정, 2) 프레임/보더 문법 고정, 3) 문양 레이어 강도 고정이다. 이 순서를 지켜야 style-h의 고유 look&feel이 안정적으로 재현된다.
