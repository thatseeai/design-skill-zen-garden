import type { StylePreset } from "@/components/StandardShowcase"

// Style-B: Editorial/Poster Style
// Light: 순백 배경 + 강한 대비, 바이올렛 액센트, 대담한 그림자
// Dark: 깊은 다크 + 강조색 극대화, 글래스모피즘, 레이어드 효과
// 공통: 라운드 코너 크게(16-24px), 그림자 적극 활용, 넉넉한 여백

export const styles: StylePreset = {
  card: {
    wrapper: "rounded-2xl border-0 shadow-lg shadow-primary/10 dark:shadow-[0_20px_60px_rgba(139,92,246,0.4)] bg-card dark:bg-card/95 dark:backdrop-blur-xl dark:border dark:border-violet-500/20 transition-all",
    header: "pb-3",
    title: "text-lg font-bold text-card-foreground",
    description: "text-sm text-muted-foreground",
    content: "pt-0",
  },
  kpi: {
    wrapper: "rounded-2xl shadow-lg shadow-primary/10 dark:shadow-[0_20px_60px_rgba(139,92,246,0.5)] bg-card dark:bg-card/95 dark:backdrop-blur-xl dark:border dark:border-violet-500/20 transition-all hover:dark:shadow-[0_25px_70px_rgba(139,92,246,0.6)]",
    title: "text-sm font-semibold text-muted-foreground",
    value: "text-3xl font-black text-card-foreground tracking-tight",
    badge: {
      positive: "bg-emerald-500 dark:bg-emerald-400 text-white dark:text-black font-bold rounded-full px-2.5 py-0.5 shadow-md dark:shadow-emerald-400/50",
      negative: "bg-rose-500 dark:bg-rose-400 text-white dark:text-black font-bold rounded-full px-2.5 py-0.5 shadow-md dark:shadow-rose-400/50",
    },
  },
  tabs: {
    list: "bg-secondary dark:bg-muted/50 dark:backdrop-blur-lg rounded-2xl p-1.5",
    trigger: "rounded-xl text-sm font-semibold px-5 py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 dark:data-[state=active]:shadow-[0_8px_30px_rgba(139,92,246,0.4)] dark:data-[state=active]:border dark:data-[state=active]:border-violet-500/30 transition-all",
    content: "mt-6",
  },
  table: {
    wrapper: "",
    header: "bg-secondary/50 dark:bg-muted/20 dark:backdrop-blur-sm",
    headerCell: "text-sm font-bold text-muted-foreground uppercase tracking-wider h-12 px-4",
    body: "",
    row: "border-b border-border dark:border-border/50 hover:bg-secondary/50 dark:hover:bg-violet-500/10 dark:hover:shadow-[0_4px_20px_rgba(139,92,246,0.2)] transition-all",
    cell: "py-4 px-4 text-base text-foreground",
    statusBadge: {
      active: "bg-emerald-500 dark:bg-emerald-400 text-white dark:text-black font-bold rounded-full text-xs px-3 py-1 shadow-sm dark:shadow-emerald-400/50",
      inactive: "bg-gray-400 dark:bg-gray-500 text-white font-bold rounded-full text-xs px-3 py-1 dark:shadow-gray-500/30",
      pending: "bg-orange-500 dark:bg-orange-400 text-white dark:text-black font-bold rounded-full text-xs px-3 py-1 shadow-sm dark:shadow-orange-400/50",
    },
  },
  form: {
    wrapper: "",
    label: "text-sm font-bold text-foreground",
    input: {
      default: "h-12 rounded-xl border-2 border-input dark:border-input/50 bg-background text-base focus:ring-2 focus:ring-ring focus:border-ring transition-all",
      error: "h-12 rounded-xl border-2 border-destructive bg-destructive/10 dark:bg-destructive/20 text-base focus:ring-2 focus:ring-destructive",
      disabled: "h-12 rounded-xl bg-secondary dark:bg-muted/50 text-muted-foreground cursor-not-allowed border-2 border-input dark:border-input/30",
    },
    select: {
      trigger: "h-12 rounded-xl border-2 border-input dark:border-input/50 bg-background text-base",
      content: "rounded-xl shadow-xl shadow-primary/10 dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-popover",
    },
    textarea: "rounded-xl border-2 border-input dark:border-input/50 bg-background text-base min-h-[100px] focus:ring-2 focus:ring-ring transition-all",
    errorMessage: "text-sm font-semibold text-destructive mt-1.5",
  },
  button: {
    primary: "h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-bold px-6 shadow-lg shadow-primary/30 dark:shadow-violet-500/40 hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-violet-500/60 hover:scale-[1.02] transition-all",
    secondary: "h-12 rounded-xl border-2 border-input dark:border-violet-500/30 bg-background text-foreground hover:bg-secondary dark:hover:bg-violet-500/20 hover:border-border dark:hover:shadow-[0_4px_20px_rgba(139,92,246,0.3)] text-sm font-bold px-6 transition-all",
    ghost: "h-12 rounded-xl text-muted-foreground hover:bg-secondary dark:hover:bg-violet-500/20 hover:text-primary dark:hover:text-violet-300 text-sm font-semibold transition-all",
  },
  alert: {
    wrapper: "rounded-2xl border-2 border-primary/30 dark:border-violet-500/30 bg-secondary dark:bg-violet-500/10 dark:backdrop-blur-lg dark:shadow-[0_8px_30px_rgba(139,92,246,0.3)]",
    title: "text-base font-bold text-foreground",
    description: "text-sm text-muted-foreground",
  },
  modal: {
    overlay: "bg-black/30 dark:bg-black/80 backdrop-blur-sm",
    content: "rounded-2xl shadow-2xl shadow-primary/20 dark:shadow-[0_30px_80px_rgba(139,92,246,0.5)] dark:border dark:border-violet-500/30 bg-background dark:backdrop-blur-2xl",
    header: "",
    title: "text-xl font-black text-foreground",
    description: "text-base text-muted-foreground",
    footer: "gap-3",
  },
  layout: {
    sidebar: "bg-secondary/50 dark:bg-muted/10 dark:backdrop-blur-xl border-r-0",
    sidebarItem: "block px-4 py-3 text-base font-semibold text-muted-foreground hover:bg-card dark:hover:bg-violet-500/20 hover:text-primary dark:hover:text-violet-300 rounded-xl mx-2 transition-all hover:shadow-md hover:shadow-primary/20 dark:hover:shadow-[0_4px_20px_rgba(139,92,246,0.3)]",
    sidebarItemActive: "bg-card dark:bg-violet-500/30 text-primary dark:text-violet-200 shadow-lg shadow-primary/20 dark:shadow-[0_8px_30px_rgba(139,92,246,0.5)] dark:border dark:border-violet-500/30",
    topbar: "border-b-0 bg-card/80 dark:bg-background/90 backdrop-blur-sm dark:backdrop-blur-xl dark:border-b dark:border-violet-500/20",
    content: "bg-secondary/30 dark:bg-muted/10 p-6",
    section: "mb-8",
    sectionTitle: "text-xl font-black text-foreground mb-4",
  },
}
