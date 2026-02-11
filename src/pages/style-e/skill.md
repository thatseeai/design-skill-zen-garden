# Intent
다크 인더스트리얼 아키텍처 사진과 전시형 타이포 그래픽을 결합한 갤러리 톤의 대시보드를 구현한다. 핵심은 "모노크롬 고대비 + 구조적 프레임 + 극단적 타이포 스케일 대비"다. 화면은 의도적으로 밀도 있고 드라마틱해야 하며, 콘텐츠는 프레임 레이어 안에서 읽혀야 한다.

# Style Rules
- 배경은 어두운 산업/구조 사진 위에 오버레이를 깔아 콘트라스트를 확보한다
- 팔레트는 흑/백/회색의 모노크롬으로 제한한다
- 카드/패널은 직각 프레임(1~2px 보더)과 반투명 검정 배경을 사용한다
- 타이포는 display(대형 uppercase)와 body(작은 serif)의 극단적 대비를 유지한다
- 레이어는 배경 → 오버레이 → 콘텐츠 프레임 순으로 명확히 구분한다
- 그림자는 최소화하고 보더와 레이어 중첩으로 깊이를 만든다
- 인터랙션은 색 변화보다 보더/명도 변화 중심으로 처리한다
- 다크 톤을 유지하되 텍스트 대비는 항상 충분해야 한다
- 레이아웃은 사이드바 고정 구조와 프레임 밀도를 유지한다

# Tokens
- background.base: #1a1a1a
- background.overlay: rgba(0, 0, 0, 0.6)
- surface.frame: rgba(0, 0, 0, 0.85)
- surface.frame.light: rgba(0, 0, 0, 0.7)
- text.primary: #ffffff
- text.secondary: #cccccc
- text.muted: #999999
- border.default: rgba(255, 255, 255, 0.3)
- border.subtle: rgba(255, 255, 255, 0.15)
- accent: #ffffff
- radius.none: 0px
- border.width.thin: 1px
- border.width.default: 2px
- border.width.strong: 3px
- spacing.frame.inner: 2rem
- spacing.frame.large: 3rem
- spacing.section: 1.5rem
- layout.sidebar.width: 300px
- font.display.family: "Impact", "Arial Black", sans-serif
- font.display.size: 4rem~8rem
- font.display.weight: 900
- font.body.family: "Georgia", "Times New Roman", serif
- font.body.size: 0.875rem~1rem
- motion.fast: 140ms ease-out
- motion.base: 200ms ease-out

# Do
- 컴포넌트 규격을 고정한다: radius=0, frame border=2px, modal border=2px
- 카드/테이블/폼 배경은 `black alpha` 기반으로 일관되게 유지한다
- tabs는 하단 보더 활성 방식으로 표현하고 불필요한 채움색을 배제한다
- table은 세로/가로 보더로 구조를 강조하고 hover는 명도만 미세 상승시킨다
- form은 검정 배경 + 흰 보더 중심으로 default/error/disabled를 구분한다
- 버튼은 흰색/투명 보더 대비(반전형)로 통일한다
- 사이드바 내비는 얇은 하단 보더 리듬으로 정보 밀도를 유지한다
- 배경 사진 위 텍스트는 반드시 오버레이로 분리해 판독성을 보장한다
- 모바일에서는 프레임 패딩을 줄이되 모노크롬 대비는 유지한다

# Don't
- 모노크롬 외 색상 포인트를 추가하지 않는다
- 라운드, 글래스모피즘, 소프트 UI 문법을 섞지 않는다
- 강한 그림자나 과한 블러로 구조 보더를 약화시키지 않는다
- 본문 타이포를 너무 작게 낮춰 가독성을 해치지 않는다
- 배경 사진이 콘텐츠보다 앞서 보이도록 두지 않는다
- 상업적/캐주얼 무드의 컬러/아이콘을 섞지 않는다

# Notes
이 문서는 재현 스펙이다. 다른 프로젝트에서는 1) 모노크롬 토큰 고정, 2) 프레임 보더 문법 고정, 3) 타이포 스케일 대비 고정 순서로 적용해야 style-e의 look&feel 편차를 최소화할 수 있다.
