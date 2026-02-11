# Intent
19세기 바로크 장식과 빈티지 인쇄 질감을 현대 UI에 적용해 "골동 서적 같은 대시보드"를 만든다. 핵심은 "세피아/골드 팔레트 + 오너먼트 프레임 + 깊이 있는 질감 레이어"다. 화려하지만 난잡하지 않게, 장식은 정보 구조를 보조해야 한다.

# Style Rules
- 배경은 어두운 갈색 기반에 종이결/패턴/비네트 레이어를 중첩한다
- 카드/모달/패널은 골드 보더와 그라데이션 표면으로 통일한다
- 장식 코너/오너먼트는 섹션 구분 장치로만 사용한다
- 타이포는 serif 중심으로 구성하고 제목은 장식감 있게 강조한다
- 상태 변화는 금색 계열 명도 변화와 얕은 glow로 표현한다
- 라운드는 중간값(4~12px)으로 유지하되 프레임은 선명하게 보이게 한다
- 그림자는 깊고 무겁게, 그러나 텍스트 대비를 가리지 않도록 제한한다
- 다크 테마 특성상 본문 텍스트 대비를 충분히 확보한다
- 장식 패턴은 콘텐츠 뒤 레이어에서 낮은 opacity로 유지한다

# Tokens
- background.base: #0d0a08
- background.deep: #1a1410
- surface.dark: #2d2419
- text.primary: #e8d5b7
- text.secondary: #c9b18a
- text.highlight: #f4e4c1
- primary.gold: #d4a574
- secondary.bronze: #8b6f47
- border.decorative: #d4a574
- border.subtle: rgba(139,111,71,0.3)
- destructive: #c9563b
- radius.sm: 4px
- radius.md: 8px
- radius.lg: 12px
- border.default: 2px solid token(primary.gold)
- shadow.ornate: 0 4px 12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(244,228,193,0.1)
- shadow.deep: 0 8px 32px rgba(0,0,0,0.8)
- focus.ring: 0 0 0 4px rgba(212,165,116,0.2)
- font.heading.family: serif (ornamental tone)
- font.body.family: serif
- font.heading.size.section: 18~28px
- font.body.size.base: 14~16px
- motion.fast: 160ms ease-out
- motion.base: 240ms ease-out

# Do
- 컴포넌트 규격을 고정한다: card border=2px gold, modal border=2px gold, control height=40px
- 카드/패널은 `dark surface + gold border + ornate shadow` 문법을 공통 적용한다
- table은 헤더와 본문을 분리하고 골드 계열 보더로 구조를 유지한다
- form은 default/error/disabled 상태를 border와 glow로 즉시 구분한다
- button.primary는 gold gradient, secondary는 투명/브론즈 보더 조합으로 유지한다
- section title 아래에 ornamental divider를 배치해 리듬을 만든다
- 장식 코너/패턴은 `pointer-events-none`과 낮은 opacity(0.15~0.6)로 제한한다
- 스크롤바/선택색/포커스 상태까지 빈티지 팔레트로 통일한다
- 모바일에서는 장식 코너 크기와 패턴 밀도를 줄여 본문 가독성을 우선한다

# Don't
- 밝고 현대적인 네온/플랫 컬러를 섞지 않는다
- 산세리프 중심 타이포로 분위기를 바꾸지 않는다
- 장식 요소를 본문/입력 필드 위로 올리지 않는다
- 과한 애니메이션이나 디지털한 모션(바운스/스프링)을 사용하지 않는다
- 그림자/글로우를 과도하게 키워 텍스트를 흐리게 만들지 않는다
- 빈티지 톤을 이유로 대비 기준을 낮추지 않는다

# Notes
이 문서는 재현 스펙이다. 다른 프로젝트에서는 1) 세피아/골드 토큰 고정, 2) 프레임/오너먼트 문법 고정, 3) 질감/비네트 레이어 강도 고정 순으로 적용해야 style-f의 look&feel 편차를 최소화할 수 있다.
