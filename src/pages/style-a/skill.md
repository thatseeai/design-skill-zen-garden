# Intent
B2B SaaS 운영 대시보드에 맞는 저채도, 고밀도, 무장식 인터페이스를 구현한다. 핵심 목표는 "빠른 스캔 + 높은 데이터 밀도 + 안정적 조작성"이다. 시각적으로는 절제되어야 하며, 모든 요소는 장식보다 정보 전달을 우선해야 한다.

# Style Rules
- 색상은 슬레이트/그레이 기반 저채도 팔레트로 제한한다
- 카드/패널 구분은 그림자보다 1px 보더로 만든다
- 라운드는 작게 유지한다(2~4px 중심)
- 테이블/폼/배지는 컴팩트 높이로 구성해 화면당 정보량을 높인다
- 타이포 계층은 크기보다 굵기/명도 차로 만든다
- 호버/활성 상태는 미세한 배경 변화만 사용한다
- 애니메이션은 짧고 조용하게 유지한다
- 다크 모드에서도 동일한 미니멀 문법을 유지한다
- 상단바/사이드바/콘텐츠 영역은 보더와 배경 명도차로 명확히 분리한다

# Tokens
- light.background: hsl(210 20% 98%)
- light.surface: hsl(0 0% 100%)
- light.surface.alt: hsl(210 18% 93%)
- light.text.primary: hsl(222 47% 11%)
- light.text.secondary: hsl(215 16% 47%)
- light.primary: hsl(215 28% 17%)
- light.border: hsl(214 20% 88%)
- dark.background: hsl(222 47% 6%)
- dark.surface: hsl(222 40% 8%)
- dark.surface.alt: hsl(217 25% 14%)
- dark.text.primary: hsl(210 20% 92%)
- dark.text.secondary: hsl(215 16% 58%)
- dark.border: hsl(217 20% 18%)
- radius.sm: 2px
- radius.md: 4px
- border.default: 1px solid token(border)
- shadow.default: none
- font.size.base: 14px
- font.size.compact: 12px
- motion.fast: 120ms ease-out
- motion.base: 180ms ease-out

# Do
- 컴포넌트 규격을 고정한다: control height=32px, table row compact, badge는 아웃라인 스타일
- card/panel은 `border + flat background` 조합을 유지한다
- tabs는 작은 높이와 단순 상태 변화로 처리한다
- table은 헤더 대문자 라벨 + 고밀도 행 간격을 유지한다
- form은 default/error/disabled를 border 색으로 우선 구분한다
- button.primary는 명확하지만 절제된 단색으로 유지한다
- 포커스 링은 항상 보이게(1px 이상) 설정한다
- 모바일에서도 정보 밀도를 유지하되 터치 영역은 40px 이상 확보한다

# Don't
- 강한 그라데이션/글로우/대형 그림자를 사용하지 않는다
- 불필요한 장식 패턴과 아이콘을 추가하지 않는다
- 큰 라운드(8px 이상)를 광범위하게 사용하지 않는다
- 과한 스케일 애니메이션과 바운스 모션을 사용하지 않는다
- 상태 표현을 색상 하나에만 의존하지 않는다
- 다크 모드에서 대비가 낮은 회색 텍스트를 장문에 사용하지 않는다

# Notes
이 문서는 감성 설명이 아니라 재현 스펙이다. 다른 프로젝트에서는 1) 토큰 고정, 2) 컴포넌트 크기/상태 규칙 고정, 3) 장식 배제 원칙 고정 순으로 적용해야 style-a의 look&feel 편차를 최소화할 수 있다.
