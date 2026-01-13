import type { StylePreset } from "@/components/StandardShowcase"

// Style-B: Editorial/Poster Style
// Light: 순백 배경 + 강한 대비, 바이올렛 액센트, 대담한 그림자
// Dark: 깊은 다크 + 강조색 극대화, 글래스모피즘, 레이어드 효과
// 공통: 라운드 코너 크게(16-24px), 그림자 적극 활용, 넉넉한 여백

export const styles: StylePreset = {
  card: {
    wrapper: "rounded-2xl border-0 shadow-[0_8px_30px_rgba(139,92,246,0.12)] dark:shadow-[0_10px_50px_rgba(0,0,0,0.5)] bg-card dark:bg-card/95 transition-all",
    header: "pb-3",
    title: "text-lg font-bold text-card-foreground",
    description: "text-sm text-muted-foreground",
    content: "pt-0",
  },
  kpi: {
    wrapper: "rounded-2xl shadow-[0_8px_30px_rgba(139,92,246,0.12)] dark:shadow-[0_10px_50px_rgba(0,0,0,0.5)] bg-card dark:bg-card/95 transition-all",
    title: "text-sm font-semibold text-muted-foreground",
    value: "text-3xl font-black text-card-foreground tracking-tight",
    badge: {
      positive: "bg-emerald-500 text-white font-bold rounded-full px-2.5 py-0.5 shadow-md",
      negative: "bg-rose-500 text-white font-bold rounded-full px-2.5 py-0.5 shadow-md",
    },
  },
  tabs: {
    list: "bg-violet-50 dark:bg-muted/50 rounded-2xl p-1.5",
    trigger: "rounded-xl text-sm font-semibold px-5 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-lg data-[state=active]:shadow-violet-200/50 dark:data-[state=active]:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all",
    content: "mt-6",
  },
  table: {
    wrapper: "",
    header: "bg-violet-50/50 dark:bg-muted/20",
    headerCell: "text-sm font-bold text-muted-foreground uppercase tracking-wider h-12 px-4",
    body: "",
    row: "border-b border-violet-100 dark:border-border/50 hover:bg-violet-50/50 dark:hover:bg-accent/20 transition-colors",
    cell: "py-4 px-4 text-base text-foreground",
    statusBadge: {
      active: "bg-emerald-500 text-white font-bold rounded-full text-xs px-3 py-1 shadow-sm",
      inactive: "bg-gray-400 dark:bg-muted-foreground/80 text-white dark:text-background font-bold rounded-full text-xs px-3 py-1",
      pending: "bg-orange-500 text-white font-bold rounded-full text-xs px-3 py-1 shadow-sm",
    },
  },
  form: {
    wrapper: "",
    label: "text-sm font-bold text-foreground",
    input: {
      default: "h-12 rounded-xl border-2 border-violet-200 dark:border-input/50 bg-background text-base focus:ring-2 focus:ring-violet-400 focus:border-violet-400 dark:focus:ring-ring dark:focus:border-ring transition-all",
      error: "h-12 rounded-xl border-2 border-destructive bg-destructive/10 dark:bg-destructive/20 text-base focus:ring-2 focus:ring-destructive",
      disabled: "h-12 rounded-xl bg-violet-50 dark:bg-muted/50 text-muted-foreground cursor-not-allowed border-2 border-violet-100 dark:border-input/30",
    },
    select: {
      trigger: "h-12 rounded-xl border-2 border-violet-200 dark:border-input/50 bg-background text-base",
      content: "rounded-xl shadow-xl shadow-violet-200/30 dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-popover",
    },
    textarea: "rounded-xl border-2 border-violet-200 dark:border-input/50 bg-background text-base min-h-[100px] focus:ring-2 focus:ring-violet-400 dark:focus:ring-ring transition-all",
    errorMessage: "text-sm font-semibold text-destructive mt-1.5",
  },
  button: {
    primary: "h-12 rounded-xl bg-violet-600 dark:bg-primary text-white dark:text-primary-foreground hover:bg-violet-700 dark:hover:bg-primary/90 text-sm font-bold px-6 shadow-lg shadow-violet-300/50 hover:shadow-xl hover:shadow-violet-300/60 dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_6px_30px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all",
    secondary: "h-12 rounded-xl border-2 border-violet-200 dark:border-input/50 bg-background text-foreground hover:bg-violet-50 dark:hover:bg-accent hover:border-violet-300 dark:hover:border-border text-sm font-bold px-6 transition-all",
    ghost: "h-12 rounded-xl text-muted-foreground hover:bg-violet-50 dark:hover:bg-accent hover:text-violet-700 dark:hover:text-accent-foreground text-sm font-semibold transition-all",
  },
  alert: {
    wrapper: "rounded-2xl border-2 border-violet-300/50 dark:border-primary/20 bg-violet-50 dark:bg-primary/5",
    title: "text-base font-bold text-foreground",
    description: "text-sm text-muted-foreground",
  },
  modal: {
    overlay: "bg-black/30 dark:bg-black/80 backdrop-blur-sm",
    content: "rounded-2xl shadow-2xl shadow-violet-200/50 dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-background",
    header: "",
    title: "text-xl font-black text-foreground",
    description: "text-base text-muted-foreground",
    footer: "gap-3",
  },
  layout: {
    sidebar: "bg-violet-50/50 dark:bg-muted/10 border-r-0",
    sidebarItem: "block px-4 py-3 text-base font-semibold text-muted-foreground hover:bg-white dark:hover:bg-background/80 hover:text-violet-700 dark:hover:text-foreground rounded-xl mx-2 transition-all hover:shadow-md hover:shadow-violet-200/50 dark:hover:shadow-lg",
    sidebarItemActive: "bg-white dark:bg-background/90 text-violet-700 dark:text-foreground shadow-lg shadow-violet-200/50 dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
    topbar: "border-b-0 bg-white/80 dark:bg-background/90 backdrop-blur-sm",
    content: "bg-violet-50/30 dark:bg-muted/10 p-6",
    section: "mb-8",
    sectionTitle: "text-xl font-black text-foreground mb-4",
  },
}
