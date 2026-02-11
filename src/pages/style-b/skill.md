# Intent
에디토리얼/포스터 기반의 대담한 시각 임팩트를 대시보드 구조에 적용한다. 목표는 "큰 타이포 + 강한 대비 + 레이어드 깊이"로 브랜드 성격을 강하게 드러내는 것이다. 정보 밀도보다 시각 경험의 우선순위가 높지만, 핵심 데이터는 즉시 읽혀야 한다.

# Style Rules
- 팔레트는 흑백 대비를 기반으로 바이올렛 포인트를 전략적으로 사용한다
- 카드/패널은 큰 라운드(16~24px)와 적극적인 그림자로 떠 있는 레이어를 만든다
- 헤드라인은 굵고 크게, 본문은 상대적으로 단정하게 유지한다
- 호버 시 그림자 강화와 미세 스케일(최대 1.02)로 인터랙션을 강조한다
- 탭/버튼/배지는 강한 채움 스타일로 시선 유도를 명확히 한다
- 다크 모드에서는 글래스모피즘 계열(투명+블러)을 제한적으로 허용한다
- 섹션 간 여백을 크게 두고 덩어리감을 분명히 만든다
- 같은 화면에서 포인트 색은 바이올렛 중심 1축으로 통제한다

# Tokens
- light.background: hsl(0 0% 98%)
- light.surface: hsl(0 0% 100%)
- light.surface.alt: hsl(270 10% 94%)
- light.text.primary: hsl(0 0% 3%)
- light.text.secondary: hsl(0 0% 45%)
- light.primary: hsl(262 83% 58%)
- light.border: hsl(0 0% 90%)
- dark.background: hsl(240 10% 4%)
- dark.surface: hsl(240 10% 6%)
- dark.surface.alt: hsl(240 6% 12%)
- dark.text.primary: hsl(0 0% 95%)
- dark.text.secondary: hsl(240 5% 55%)
- dark.primary: hsl(263 70% 65%)
- dark.border: hsl(240 6% 15%)
- radius.card: 24px
- radius.panel: 16px
- radius.control: 12px
- shadow.card.light: 0 10px 40px rgba(0,0,0,0.1)
- shadow.card.dark: 0 20px 60px rgba(139,92,246,0.4)
- shadow.active.dark: 0 25px 70px rgba(139,92,246,0.6)
- motion.fast: 160ms ease-out
- motion.base: 220ms ease-out

# Do
- 컴포넌트 규격을 고정한다: card=24px, tab list=16px, trigger=12px, badge=999px
- card/kpi는 깊은 그림자와 큰 라운드를 공통으로 사용한다
- tabs는 active 상태에 배경+섀도우를 동시에 적용해 명확히 구분한다
- table은 헤더 강조와 행 hover 대비를 강하게 유지한다
- form control은 높이 48px 기준으로 시각적 존재감을 확보한다
- button.primary는 바이올렛 중심 강한 채움, secondary는 보더 강조로 대비한다
- modal/alert는 일반 카드보다 한 단계 높은 그림자 강도를 사용한다
- 모바일(<=768px)에서도 버튼/탭의 시각 무게를 유지하되 장식성 효과는 줄인다

# Don't
- 요소를 촘촘하게 배치해 포스터형 여백 리듬을 깨지 않는다
- 낮은 대비/저채도만으로 화면을 구성하지 않는다
- 모든 요소에 같은 그림자 강도를 적용하지 않는다
- 포인트 색을 다축으로 늘려 시선 분산을 만들지 않는다
- 과한 3D/글로우를 전역 적용해 텍스트 판독성을 해치지 않는다
- 큰 스케일 애니메이션(>1.02)을 반복 적용하지 않는다

# Notes
이 문서는 스타일 소개가 아니라 재현 스펙이다. 다른 프로젝트 적용 시 1) 색/그림자 토큰 고정, 2) 컴포넌트별 반경/높이 규격 고정, 3) 호버/활성 강도 고정 순서를 지켜야 style-b의 look&feel 편차를 줄일 수 있다.
