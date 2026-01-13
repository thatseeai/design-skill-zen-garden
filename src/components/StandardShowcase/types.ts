// 스타일 프리셋 타입 정의

export interface StylePreset {
  // 카드 스타일
  card: {
    wrapper: string
    header: string
    title: string
    description: string
    content: string
  }
  // KPI 카드 스타일
  kpi: {
    wrapper: string
    title: string
    value: string
    badge: {
      positive: string
      negative: string
    }
  }
  // 탭 스타일
  tabs: {
    list: string
    trigger: string
    content: string
  }
  // 테이블 스타일
  table: {
    wrapper: string
    header: string
    headerCell: string
    body: string
    row: string
    cell: string
    statusBadge: {
      active: string
      inactive: string
      pending: string
    }
  }
  // 폼 스타일
  form: {
    wrapper: string
    label: string
    input: {
      default: string
      error: string
      disabled: string
    }
    select: {
      trigger: string
      content: string
    }
    textarea: string
    errorMessage: string
  }
  // 버튼 스타일
  button: {
    primary: string
    secondary: string
    ghost: string
  }
  // 알림 스타일
  alert: {
    wrapper: string
    title: string
    description: string
  }
  // 모달 스타일
  modal: {
    overlay: string
    content: string
    header: string
    title: string
    description: string
    footer: string
  }
  // 레이아웃 스타일
  layout: {
    sidebar: string
    sidebarItem: string
    sidebarItemActive: string
    topbar: string
    content: string
    section: string
    sectionTitle: string
  }
}
