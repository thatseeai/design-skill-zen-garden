# Intent
파스텔 포장 박스 위에 스티커를 겹겹이 붙인 레트로 문구 감성을 대시보드 UI로 번역한다. 인상은 유쾌하고 밝아야 하지만 정보 판독성은 업무 UI 수준으로 유지해야 한다. 즉, 장식은 "스티커 보드 분위기"를 만들고, 구조는 명확한 카드형 정보 계층을 유지한다.

# Style Rules
- 기본 팔레트는 라일락/핑크 기반의 저채도 파스텔을 사용하고 포인트는 그린/옐로/코랄로 제한한다
- 카드/탭/버튼은 스티커 컷팅 느낌(이중 보더 + 외곽 라인 + 부드러운 그림자)을 공유한다
- 대형 컴포넌트는 큰 라운드, 컨트롤은 중간 라운드, 배지는 pill 형태로 고정한다
- 헤드라인은 둥근 디스플레이 계열, 본문은 둥근 산세리프 1종으로 통일한다
- 배경은 단색이 아니라 부드러운 그라데이션 + 얇은 오버레이 패턴으로 구성한다
- hover/active는 밝기 변화와 미세 이동(-1px 이내)만 허용하고 큰 스케일 변화는 금지한다
- 장식 스티커 요소는 콘텐츠 뒤 레이어 또는 외곽에만 두고 상호작용 영역을 가리지 않는다
- 다크 모드는 동일한 색 관계를 유지하고 명도 대비만 강화해 읽기성을 확보한다
- 상단바/사이드바/본문은 명도차를 분명히 둬 구획이 즉시 인식되게 한다

# Tokens
- light.background.start: #f2d9ec
- light.background.end: #ebd3e8
- light.surface: #fff7ff
- light.surface.alt: #f8eefe
- light.text.primary: #392a50
- light.text.secondary: #655078
- light.primary: #8a6fba
- light.accent.green: #b8db7a
- light.accent.yellow: #f2dc7a
- light.accent.coral: #f7a9a0
- light.border: #b9a5d6
- dark.background.start: #2e2240
- dark.background.end: #271c37
- dark.surface: #3d2d5e
- dark.surface.alt: #40315f
- dark.text.primary: #f2e9ff
- dark.text.secondary: #d2c4ea
- dark.primary: #a184d9
- dark.accent.green: #9ac877
- dark.accent.yellow: #e5c86e
- dark.accent.coral: #ffb8b0
- dark.border: #705998
- radius.card: 26px
- radius.panel: 20px
- radius.control: 16px
- radius.tab: 14px
- border.default: 2px solid token(border)
- border.sticker.cut: 3px solid rgba(255,255,255,0.92)
- shadow.surface.light: 0 10px 26px rgba(95, 66, 132, 0.18)
- shadow.surface.dark: 0 10px 26px rgba(7, 5, 14, 0.34)
- shadow.sticker: 0 8px 18px rgba(95, 66, 132, 0.2)
- font.heading.family: "Baloo 2", sans-serif
- font.body.family: "Nunito", sans-serif
- font.heading.size.section: 48~60px
- font.body.size.base: 16px
- motion.fast: 160ms ease-out
- motion.base: 220ms ease-out

# Do
- 컴포넌트 규격을 고정한다: card=26px, table wrapper=20px, control=16px, badge=999px
- card: sticker 표면 클래스(이중 보더 + 소프트 섀도)를 모든 주요 카드에 일관 적용한다
- tabs: list는 `surface.alt`, active trigger는 `surface` 배경과 강한 텍스트 대비를 유지한다
- table: 헤더/바디 배경을 분리하고 hover는 배경만 미세 변경(텍스트색 고정)한다
- form: default/error/disabled 상태를 border와 background 조합으로 즉시 구분되게 한다
- button.primary: 보라 단색 중심, secondary/ghost는 중성 파스텔 톤으로 균형을 맞춘다
- alert/modal: 카드와 동일한 보더 언어(두께/색/라운드)를 공유한다
- 장식 스티커는 `pointer-events-none`과 낮은 opacity(0.18~0.35)로 처리한다
- 모바일(<=768px)에서는 장식량을 50% 이상 줄이고 본문 패딩을 24px 이상 유지한다
- 포커스 링은 primary 계열 2px 이상으로 항상 보이게 한다

# Don't
- 네온 고채도 컬러를 전면에 사용해 파스텔 무드를 깨지 않는다
- 컴포넌트마다 보더 두께/라운드 값을 다르게 쓰지 않는다
- 스티커 장식이 버튼/폼/테이블 텍스트를 덮게 두지 않는다
- 과도한 그림자나 큰 블러로 화면을 무겁게 만들지 않는다
- 장식 때문에 보조 텍스트 대비(최소 4.5:1)를 희생하지 않는다
- 다크 모드에서 라이트 배경값을 그대로 재사용하지 않는다

# Notes
이 문서는 감성 서술이 아니라 재현 스펙이다. 다른 프로젝트에 적용할 때는 1) 토큰 고정, 2) 컴포넌트 상태 규칙 고정, 3) 장식 레이어 규칙 고정 순서로 적용하면 style-k의 look&feel 편차를 크게 줄일 수 있다.
