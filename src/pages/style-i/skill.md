# Intent
프리미엄 케어/고객지원 랜딩 페이지의 정갈한 에디토리얼 감성을 대시보드 UI로 재구성한다. 핵심은 "넓은 여백 + 절제된 중성 톤 + 단일 블루 포인트"다. 시각 노이즈를 최소화해 신뢰감을 만들되, 정보 구조는 빠르게 스캔 가능해야 한다.

# Style Rules
- 배경은 옅은 쿨그레이, 표면은 거의 흰색으로 분리해 명도 계층을 만든다
- 색상 강조는 블루 계열 1축(primary/link)으로 제한하고 다색 포인트를 피한다
- 카드/패널은 큰 라운드와 얇은 보더를 사용하고 소프트 그림자만 허용한다
- 타이포는 sans-serif 1종으로 통일하고 굵기/크기로만 계층을 만든다
- 헤드라인은 큼직하게, 본문/보조 텍스트는 고대비 중성 회색으로 유지한다
- 인터랙션은 색 변화 중심으로 처리하고 과한 입체/모션 효과를 배제한다
- 테이블/폼은 중성 톤을 기본으로 하되 상태색(success/error/warning)만 제한적으로 사용한다
- 다크 모드에서는 동일한 계층 구조를 유지하며 텍스트 대비를 최우선으로 둔다
- 장식은 라디얼 라이트/소프트 블러 정도로 제한하고 패턴 장식은 사용하지 않는다
- 상단바/사이드바/본문은 보더와 배경 명도차로 구조를 즉시 구분 가능해야 한다

# Tokens
- light.background: #f5f5f7
- light.surface: #ffffff
- light.surface.alt: #f2f2f4
- light.text.primary: #1d1d1f
- light.text.secondary: #424245
- light.primary: #0071e3
- light.link: #0066cc
- light.accent.blue: #4fa3ff
- light.border: #d2d2d7
- dark.background: #11141e
- dark.surface: #1f2430
- dark.surface.alt: #2b3342
- dark.text.primary: #f5f5f7
- dark.text.secondary: #cfd5e0
- dark.primary: #79b8ff
- dark.link: #8dc3ff
- dark.border: #3a4254
- radius.card: 28px
- radius.panel: 20px
- radius.control: 14px
- radius.tab: 10px
- border.default: 1px solid token(border)
- shadow.surface.light: 0 12px 30px rgba(17, 17, 26, 0.08)
- shadow.surface.dark: 0 14px 30px rgba(8, 10, 16, 0.34)
- shadow.button.primary: 0 6px 16px rgba(0, 113, 227, 0.28)
- font.body.family: "Manrope", sans-serif
- font.heading.size.section: 48~60px
- font.body.size.base: 16px
- motion.fast: 140ms ease-out
- motion.base: 200ms ease-out

# Do
- 컴포넌트 규격을 고정한다: card=28px, table wrapper=20px, control=14px, badge=10px
- card: 큰 반경과 얇은 보더를 유지하고 강한 명도 대비로 카드 분리를 보장한다
- tabs: list는 `surface.alt`, active trigger는 `surface`+얕은 그림자로만 강조한다
- table: 헤더/본문 배경을 분리하고 row hover는 3~5% 밝기 변화만 사용한다
- form: default/error/disabled를 border와 배경으로 즉시 구분되게 유지한다
- button.primary는 블루 단색, secondary/ghost는 중성 톤으로 시각적 위계를 만든다
- alert/modal은 카드 문법(얇은 보더, 큰 라운드, 약한 섀도우)을 공유한다
- 장식 오브젝트는 콘텐츠 뒤에 두고 opacity를 낮춰 텍스트 가독성을 보호한다
- 모바일(<=768px)에서는 큰 여백을 유지하되 장식 레이어 면적을 축소한다
- 포커스 링은 블루 계열 2px 이상으로 명확하게 노출한다

# Don't
- 다색 고채도 포인트를 섞어 미니멀 톤을 깨지 않는다
- 두꺼운 보더/강한 그림자/복잡한 패턴을 남용하지 않는다
- 모든 버튼을 같은 시각적 무게로 처리하지 않는다
- 타이포 크기를 균등하게 맞춰 계층을 흐리지 않는다
- 다크 모드에서 저대비 회색 텍스트를 대량 사용하지 않는다
- 접근성 대비(본문 4.5:1 이상)를 분위기 때문에 포기하지 않는다

# Notes
이 문서는 감성 가이드가 아니라 재현 스펙이다. 다른 프로젝트에서는 1) 토큰 고정, 2) 컴포넌트 상태 규칙 고정, 3) 블루 포인트 사용 범위 고정 순서로 적용하면 style-i의 look&feel 편차를 줄일 수 있다.
