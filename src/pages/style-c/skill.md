# Intent
귀여운 애니메이션 세계관 안에서 조작하는 느낌을 주는 감정 중심 UI를 구현한다. 핵심은 "고채도 파스텔 + 둥근 형태 + 반응형 마이크로 인터랙션"이다. 시각적으로는 명랑하고 안전해야 하며, 기능적으로는 각 상태가 즉시 구분되어야 한다.

# Style Rules
- 색상은 핑크/스카이/민트 중심의 고채도 파스텔 팔레트를 사용한다
- 카드/버튼/탭/입력은 큰 라운드(12~24px)로 통일한다
- 그림자는 소프트 섀도 기반이며 다크 모드에서는 글로우 성향을 강화한다
- 주요 정보 블록은 카드화하고 섹션 간 여백을 넉넉히 유지한다
- 호버/활성은 색 변화 + 미세 스케일(최대 1.02)로 표현한다
- 포커스 링은 두껍고 눈에 띄게(4px 계열) 유지한다
- 배지는 채움형 rounded pill로 상태를 즉시 구분한다
- 다크 모드에서도 파스텔 포인트 색의 정체성을 유지한다
- 텍스트 대비를 충분히 유지해 "예쁘지만 읽기 어려운" 상태를 피한다

# Tokens
- light.background: hsl(270 50% 98%)
- light.surface: hsl(0 0% 100%)
- light.text.primary: hsl(280 40% 15%)
- light.text.secondary: hsl(280 20% 45%)
- light.primary: hsl(330 81% 70%)
- light.secondary: hsl(200 85% 70%)
- light.accent: hsl(160 70% 65%)
- light.success: hsl(160 70% 65%)
- light.warning: hsl(50 100% 70%)
- light.border: hsl(270 30% 90%)
- dark.background: hsl(270 30% 8%)
- dark.surface: hsl(270 25% 12%)
- dark.text.primary: hsl(270 20% 92%)
- dark.text.secondary: hsl(270 15% 65%)
- dark.primary: hsl(330 81% 70%)
- dark.secondary: hsl(200 85% 70%)
- dark.accent: hsl(160 70% 65%)
- dark.border: hsl(270 20% 22%)
- radius.card: 24px
- radius.panel: 16px
- radius.control: 16px
- radius.badge: 999px
- shadow.soft.light: blur 8~16px / opacity 10~20%
- shadow.soft.dark: glow 중심 강화
- motion.fast: 150ms ease-out
- motion.base: 220ms ease-out
- motion.slow: 300ms ease-in-out

# Do
- 컴포넌트 규격을 고정한다: control height=48px, card radius>=16px, badge=999px
- card/kpi는 gradient 보조 톤과 소프트 그림자를 함께 사용한다
- tabs active는 배경 색상 + 그림자 + 미세 확대를 함께 적용한다
- table row hover는 배경 변화와 미세 scale(1.01 이하)만 사용한다
- form은 default/error/disabled 상태를 명확한 보더/배경 대비로 구분한다
- button은 primary/secondary/ghost 간 시각 무게 차이를 확실히 둔다
- 모바일에서도 최소 터치 영역 44px 이상을 보장한다
- 장식 요소는 콘텐츠 판독성을 해치지 않도록 뒤 레이어에 배치한다

# Don't
- 무채색 비즈니스 팔레트로 톤을 바꾸지 않는다
- 각진 반경이나 얇은 보더 중심 문법으로 바꾸지 않는다
- 애니메이션 없는 정적 화면으로 두지 않는다
- 과도한 네온/강한 대비로 귀여운 톤을 깨지 않는다
- 텍스트 대비를 낮춰 정보 판독성을 희생하지 않는다
- 과도한 스케일 애니메이션(>1.02)을 반복하지 않는다

# Notes
이 문서는 감성 묘사가 아니라 재현 스펙이다. 다른 프로젝트 적용 순서는 1) 파스텔 토큰 고정, 2) 반경/컨트롤 높이 규격 고정, 3) 인터랙션 강도 고정이다. 이 세 가지를 고정하면 style-c의 look&feel 편차를 크게 줄일 수 있다.
