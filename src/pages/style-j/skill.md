# Intent
겨울 럭셔리 아우터 화보의 촉감과 무게감을 대시보드 UI로 재해석한다. 핵심은 "퍼(fur) 질감의 따뜻함"과 "편집숍 에디토리얼의 고급 대비"를 함께 유지하는 것이다. 시각적으로는 포근하고 깊어야 하며, 사용성 측면에서는 정보 계층과 조작성이 명확해야 한다.

# Style Rules
- 팔레트는 크림/카멜/브라운 계열로 제한하고 고채도 보색 대비를 피한다
- 표면은 단색 대신 미세 그라데이션과 얕은 텍스처로 촉감(직물/퍼)을 암시한다
- 카드/모달/패널은 얇은 보더(1px)와 넓은 소프트 그림자를 공유한다
- 헤드라인은 세리프, 본문은 산세리프 1종으로 통일해 럭셔리 편집 톤을 유지한다
- 라운드는 중간 이상(14~24px)으로 부드럽게, 과장된 곡선은 피한다
- 상태 배지는 톤온톤 계열로 구분하고 형광/네온 색상은 배제한다
- hover는 밝기 변화 중심으로 처리하고 큰 scale/글로우 효과는 금지한다
- 장식 텍스처는 콘텐츠 뒤 또는 화면 외곽에만 두고 가독성을 우선한다
- 다크 모드는 동일 색 관계를 유지하되 명도 대비를 강화해 텍스트를 먼저 읽히게 한다
- 상단바/사이드바/본문의 명도 차이를 분명히 두어 구조 구분을 보장한다

# Tokens
- light.background: #f5efe6
- light.surface: #fffaf4
- light.surface.deep: #e8dccb
- light.text.primary: #2e2217
- light.text.secondary: #5f4a37
- light.primary: #8a5a3c
- light.accent: #c89a5f
- light.border: #d6c2aa
- dark.background: #1c1612
- dark.surface: #3a2b20
- dark.surface.deep: #2e231b
- dark.text.primary: #f3e1cd
- dark.text.secondary: #d1baa1
- dark.primary: #d0ac74
- dark.accent: #c89a5f
- dark.border: #6a513c
- radius.card: 24px
- radius.panel: 20px
- radius.control: 14px
- radius.tab: 12px
- border.default: 1px solid token(border)
- shadow.surface.light: 0 14px 30px rgba(58, 37, 20, 0.16)
- shadow.surface.dark: 0 14px 30px rgba(10, 8, 6, 0.35)
- shadow.modal: 0 18px 34px rgba(34, 22, 12, 0.35)
- font.heading.family: "Cormorant Garamond", serif
- font.body.family: "Manrope", sans-serif
- font.heading.size.section: 48~60px
- font.body.size.base: 16px
- motion.fast: 160ms ease-out
- motion.base: 220ms ease-out

# Do
- 컴포넌트 규격을 고정한다: card=24px, table wrapper=20px, control=14px, badge=999px
- card: `surface` 배경 + 얇은 보더 + 하단으로 퍼지는 소프트 섀도 조합을 유지한다
- tabs: list는 `surface.deep`, active trigger는 `surface`와 강한 텍스트 대비를 유지한다
- table: 헤더/본문 색 분리, row hover는 배경만 미세 변경하고 텍스트 대비는 고정한다
- form: default/error/disabled를 border/배경 조합으로 명확히 구분한다
- primary 버튼은 브라운 단색 중심, secondary/ghost는 톤온톤 베이지 계열로 유지한다
- modal/alert는 카드와 같은 보더 언어를 유지하고 그림자만 한 단계 강화한다
- 퍼 텍스처 장식은 `pointer-events-none`과 낮은 opacity(0.1~0.3)로 제한한다
- 모바일(<=768px)에서는 장식 텍스처 면적을 줄여 본문 폭을 우선 확보한다
- 포커스 링은 카멜 계열로 2px 이상 명확하게 노출한다

# Don't
- 차가운 블루/네온 계열을 주 포인트로 사용하지 않는다
- 글래스모피즘, 과한 반사광, 강한 블러를 섞지 않는다
- 카드와 텍스트 명도를 비슷하게 설정해 대비를 잃지 않는다
- 텍스처를 본문 위에 직접 깔아 가독성을 해치지 않는다
- 컴포넌트마다 상이한 radius/보더 두께를 섞어 쓰지 않는다
- 다크 모드에서 밝은 라이트 배경을 재사용하지 않는다

# Notes
이 문서는 스타일 설명이 아니라 재현 스펙이다. 다른 프로젝트에서는 1) 색/타입/보더 토큰 고정, 2) 컴포넌트 상태 규칙 고정, 3) 텍스처 레이어 강도 고정 순으로 적용해야 style-j의 look&feel 편차를 최소화할 수 있다.
