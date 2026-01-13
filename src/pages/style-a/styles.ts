import type { StylePreset } from "@/components/StandardShowcase"

// Style-A: B2B SaaS Minimal
// Light: 저채도 슬레이트, 플랫한 보더 구분, 고밀도 레이아웃
// Dark: 깊은 슬레이트, 미니멀한 대비, 차분한 톤
// 공통: radius 작게(2-4px), spacing 타이트, 그림자 없음

export const styles: StylePreset = {
  card: {
    wrapper: "rounded-sm border border-border shadow-none bg-card",
    header: "pb-2",
    title: "text-sm font-semibold text-card-foreground",
    description: "text-xs text-muted-foreground",
    content: "pt-0",
  },
  kpi: {
    wrapper: "rounded-sm border border-border bg-card",
    title: "text-xs font-medium text-muted-foreground uppercase tracking-wide",
    value: "text-xl font-bold text-card-foreground",
    badge: {
      positive: "bg-transparent border border-emerald-600 text-emerald-700 dark:border-emerald-500 dark:text-emerald-400 text-xs px-1.5 py-0",
      negative: "bg-transparent border border-red-600 text-red-700 dark:border-red-500 dark:text-red-400 text-xs px-1.5 py-0",
    },
  },
  tabs: {
    list: "bg-muted rounded-sm p-0.5",
    trigger: "rounded-sm text-xs font-medium px-3 py-1.5 data-[state=active]:bg-background data-[state=active]:shadow-none transition-colors",
    content: "mt-3",
  },
  table: {
    wrapper: "",
    header: "bg-muted/70 dark:bg-muted/30",
    headerCell: "text-xs font-semibold text-muted-foreground uppercase tracking-wide h-8 px-2",
    body: "",
    row: "border-b border-border hover:bg-muted/40 dark:hover:bg-muted/20 transition-colors",
    cell: "py-2 px-2 text-sm text-foreground",
    statusBadge: {
      active: "bg-transparent border border-emerald-600 text-emerald-700 dark:border-emerald-500 dark:text-emerald-400 text-xs rounded-sm",
      inactive: "bg-transparent border border-slate-400 text-slate-500 dark:border-slate-500 dark:text-slate-400 text-xs rounded-sm",
      pending: "bg-transparent border border-amber-600 text-amber-700 dark:border-amber-500 dark:text-amber-400 text-xs rounded-sm",
    },
  },
  form: {
    wrapper: "",
    label: "text-xs font-medium text-foreground",
    input: {
      default: "h-8 rounded-sm border border-input bg-background text-sm focus:ring-1 focus:ring-ring focus:border-ring transition-colors",
      error: "h-8 rounded-sm border border-destructive bg-destructive/5 dark:bg-destructive/10 text-sm focus:ring-1 focus:ring-destructive",
      disabled: "h-8 rounded-sm bg-muted text-muted-foreground cursor-not-allowed border border-input",
    },
    select: {
      trigger: "h-8 rounded-sm border border-input bg-background text-sm",
      content: "rounded-sm bg-popover border border-border",
    },
    textarea: "rounded-sm border border-input bg-background text-sm min-h-[60px] focus:ring-1 focus:ring-ring transition-colors",
    errorMessage: "text-xs text-destructive mt-1",
  },
  button: {
    primary: "h-8 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-medium px-3 transition-colors",
    secondary: "h-8 rounded-sm border border-input bg-background text-foreground hover:bg-muted text-xs font-medium px-3 transition-colors",
    ghost: "h-8 rounded-sm text-muted-foreground hover:bg-muted hover:text-foreground text-xs transition-colors",
  },
  alert: {
    wrapper: "rounded-sm border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50",
    title: "text-sm font-semibold text-foreground",
    description: "text-xs text-muted-foreground",
  },
  modal: {
    overlay: "bg-black/40 dark:bg-black/60",
    content: "rounded-sm bg-background border border-border shadow-sm",
    header: "",
    title: "text-base font-semibold text-foreground",
    description: "text-sm text-muted-foreground",
    footer: "gap-2",
  },
  layout: {
    sidebar: "bg-slate-50 dark:bg-slate-900/50 border-r border-border",
    sidebarItem: "block px-3 py-2 text-sm text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground rounded-sm mx-2 transition-colors",
    sidebarItemActive: "bg-slate-100 dark:bg-slate-800 text-foreground font-medium",
    topbar: "border-b border-border bg-background",
    content: "bg-slate-50 dark:bg-slate-900/30 p-4",
    section: "mb-4",
    sectionTitle: "text-sm font-semibold text-foreground mb-3",
  },
}
