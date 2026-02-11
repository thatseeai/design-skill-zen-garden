# Intent
CSS Zen Garden의 대담한 컬러 블록 정신을 현대 대시보드에 적용한다. 핵심은 "강한 색면 대비 + 샤프한 기하 구조 + 과감한 타이포"다. 디자인은 자신감 있고 직설적이어야 하며, 정보 구조는 색면과 보더로 즉시 구분되어야 한다.

# Style Rules
- 메인 배경은 밝은 teal 계열, 강조색은 magenta 계열로 고정한다
- 코너는 모두 직각(0px)으로 유지해 기하학적 선명도를 확보한다
- 카드/테이블/폼은 두꺼운 보더(2px 이상) 중심으로 구조를 만든다
- 타이포는 uppercase와 굵은 웨이트를 적극 사용한다
- 그림자 사용은 최소화하고 색 대비로 깊이를 만든다
- 섹션 간 여백은 넉넉하게, 내부는 명확한 블록 단위로 구성한다
- 버튼/배지는 채움형 강색 스타일로 상호작용 우선순위를 분명히 한다
- 다크 모드에서도 동일 색 관계를 유지하고 대비만 조정한다
- 사이드바는 다크 톤으로 고정해 메인 색면과 강한 대비를 만든다

# Tokens
- light.background: hsl(180 56% 64%)
- light.surface: hsl(0 0% 100%)
- light.text.primary: hsl(220 18% 20%)
- light.text.secondary: hsl(220 15% 40%)
- light.primary: hsl(339 58% 52%)
- light.secondary: hsl(48 87% 94%)
- light.border: hsl(220 18% 20%)
- light.sidebar: hsl(220 18% 18%)
- dark.background: hsl(220 18% 18%)
- dark.surface: hsl(220 18% 20%)
- dark.text.primary: hsl(180 56% 84%)
- dark.text.secondary: hsl(220 15% 60%)
- dark.primary: hsl(339 58% 52%)
- dark.secondary: hsl(48 20% 25%)
- dark.border: hsl(180 56% 64%)
- radius.none: 0px
- border.default: 2px solid token(border)
- border.strong: 4px for topbar/modal frame
- shadow.default: none
- font.heading.weight: 800~900
- font.heading.case: uppercase
- font.section.size: 24px+
- motion.fast: 140ms ease-out
- motion.base: 200ms ease-out

# Do
- 컴포넌트 규격을 고정한다: radius=0, control height=48px, border>=2px
- card/kpi는 강한 보더와 직각 구조를 공통으로 유지한다
- tabs active는 magenta 채움으로 즉시 식별되게 구성한다
- table은 헤더 dark fill + 본문 밝은 배경 대비를 분명히 한다
- form은 default/error/disabled 상태를 보더 색과 배경으로 명확히 구분한다
- button.primary는 magenta 채움, secondary는 강한 보더 스타일로 대비한다
- section title은 uppercase + 하단 강조선으로 리듬을 만든다
- 모바일에서도 보더 두께와 대비를 유지해 스타일 정체성을 지킨다

# Don't
- 라운드 코너나 소프트 엣지를 적용하지 않는다
- 파스텔/저채도 톤으로 바꿔 컬러 블록 인상을 약화시키지 않는다
- 드롭섀도우/글래스모피즘/블러를 중심 효과로 사용하지 않는다
- 얇고 작은 타이포로 제목의 존재감을 낮추지 않는다
- 색을 너무 많이 섞어 핵심 대비(teal/magenta/dark)를 흐리지 않는다
- 다크 모드에서 대비를 낮춰 정보 구획을 흐리지 않는다

# Notes
이 문서는 재현 스펙이다. 다른 프로젝트에서는 1) 컬러 블록 토큰 고정, 2) 직각/보더 문법 고정, 3) uppercase 타이포 계층 고정 순으로 적용해야 style-d의 look&feel이 안정적으로 유지된다.
