# Intent
김춘수 「꽃」의 정서를 UI로 옮긴다. 기본 상태는 "아직 불리지 않은 이름"처럼 고요하고 담담해야 하며, 사용자 상호작용 순간에는 "호명되어 의미를 얻는 개화"가 은은하게 드러나야 한다. 즉, 과한 화려함이 아니라 관계가 생길 때만 감정의 채도와 대비가 한 단계 피어나는 서정적 편집 디자인을 만든다.

# Style Rules
- 전체 무드는 따뜻한 종이색 배경 + 잉크색 본문 + 꽃빛 포인트(장미/세이지/청록) 3축으로 구성한다
- 배경은 단색 대신 2~3개 저명도 그라데이션과 미세한 grain 패턴을 얇게 겹친다
- 컴포넌트는 얇은 테두리(1px)와 중간 라운드(14~24px)로 단정하게 통일한다
- 기본 상태는 저채도, hover/focus/active에서만 채도와 밝기를 소폭 올린다
- 헤드라인은 서정적 serif, 본문과 UI 라벨은 가독성 높은 sans-serif를 사용한다
- 시각 계층은 "제목 > 핵심 수치 > 본문 > 보조" 순서가 즉시 읽히게 만든다
- 모든 인터랙션 애니메이션은 150~300ms 중심으로 짧고 조용하게 유지한다
- 장식 요소는 콘텐츠 바깥(또는 뒤)에만 배치하고 클릭 영역을 절대 가리지 않는다
- 다크 모드는 라이트 모드의 색 관계를 유지한 채 명도만 낮추고 대비는 유지한다
- 표/폼/모달 등 정보 컴포넌트는 감성보다 판독성을 우선한다

# Tokens
- light.background: #f9f4ee
- light.surface: #fffdfb
- light.surface.alt: #f1ebe6
- light.text.primary: #22364d
- light.text.secondary: #5a6a79
- light.border: #d0d5dd
- light.primary: #d96896
- light.secondary: #84c5bb
- light.accent: #7daed5
- dark.background: #1f2738
- dark.surface: #2c3243
- dark.surface.alt: #353a4b
- dark.text.primary: #f2ecdf
- dark.text.secondary: #cac3b5
- dark.border: #58617a
- dark.primary: #e294b3
- dark.secondary: #79bfb3
- dark.accent: #8ec1e6
- radius.card: 24px
- radius.panel: 20px
- radius.control: 14px
- border.default: 1px solid token(border)
- shadow.soft.light: 0 14px 32px rgba(30, 36, 48, 0.09)
- shadow.soft.dark: 0 16px 34px rgba(9, 12, 20, 0.34)
- font.heading.family: "Gowun Batang", serif
- font.body.family: "Noto Sans KR", sans-serif
- font.heading.size.section: 48~60px
- font.body.size.base: 16px
- font.label.size: 13~14px
- motion.fast: 160ms ease-out
- motion.base: 220ms ease-out
- motion.slow: 300ms ease-in-out

# Do
- 컴포넌트별 구현 기준을 고정해 재현성을 높인다
- KPI 카드: 배경 `surface`, 제목 `text.secondary`, 값 `text.primary`, 상태 배지에만 accent 계열 사용
- Tabs: list는 `surface.alt`, active trigger는 `surface` + `text.primary`
- Table: 헤더 `surface.alt`, 본문 `surface`, row hover는 배경 밝기만 4~6% 변화
- Form: 기본/에러/비활성 상태를 border와 배경으로 분리하고 텍스트 대비 4.5:1 이상 유지
- Button: primary는 gradient 1개만 사용, secondary/ghost는 중성 팔레트로 균형 유지
- Modal/Alert: 카드와 동일 톤을 유지하고 그림자는 한 단계만 강화
- 데스크톱 장식 문구는 우상단/우하단 외곽에만 배치하고 opacity 0.55~0.75 범위로 제한
- 모바일(<=768px)에서는 장식 문구와 대형 bloom 오브젝트를 50% 이상 축소하거나 비노출
- 포커스 링은 primary 계열 2px 이상으로 항상 보이게 유지한다

# Don't
- 네온/글로우/강한 blur로 감정을 과장하지 않는다
- 컴포넌트마다 다른 border 두께와 radius를 쓰지 않는다
- hover마다 scale을 크게 주지 않는다(최대 1.01 권장)
- 장식 텍스트를 본문 위에 올려 가독성을 해치지 않는다
- 다크 모드에서 라이트용 밝은 배경을 재사용하지 않는다
- primary 색을 모든 요소에 반복해 시각적 강조점을 잃지 않는다
- 타이포 폰트 수를 2종 이상 늘리지 않는다
- 서정적 분위기를 이유로 대비 기준을 낮추지 않는다

# Notes
이 문서는 "감정 설명"이 아니라 "재현 규격"으로 사용한다. 다른 프로젝트에 전달할 때는 이 파일만으로도 최대한 동일한 인상을 만들 수 있도록 아래 순서를 따른다: 1) 토큰 고정, 2) 컴포넌트 상태 매핑 고정, 3) 장식 배치와 모션 강도 고정. 스타일 해석의 자유도는 줄이고 구현 편차를 줄이는 것이 목적이다.
