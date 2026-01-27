import type { StylePreset } from "@/components/StandardShowcase"

// Style-C: Cute Animated World Design
// Light: 파스텔 고채도 컬러, 큰 radius(12-24px), 소프트 섀도우, 볼륨감
// Dark: 차콜/퍼플 배경, 파스텔 유지, 글로우 중심
// 공통: 넉넉한 여백, 둥근 형태, 명확한 대비, 마이크로 애니메이션

export const styles: StylePreset = {
  card: {
    wrapper: "rounded-3xl shadow-lg shadow-primary/10 dark:shadow-primary/20 bg-card border-2 border-border/50 hover:shadow-xl hover:shadow-primary/15 dark:hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300",
    header: "pb-3",
    title: "text-lg font-bold text-card-foreground",
    description: "text-sm text-muted-foreground",
    content: "pt-0",
  },
  kpi: {
    wrapper: "rounded-2xl shadow-md shadow-accent/10 dark:shadow-accent/20 bg-gradient-to-br from-card to-accent/5 border-2 border-accent/30 p-6 hover:scale-[1.02] transition-all duration-200",
    title: "text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2",
    value: "text-3xl font-black text-card-foreground",
    badge: {
      positive: "bg-success text-white dark:text-success-foreground font-bold text-xs px-3 py-1 rounded-full shadow-sm",
      negative: "bg-destructive text-white dark:text-destructive-foreground font-bold text-xs px-3 py-1 rounded-full shadow-sm",
    },
  },
  tabs: {
    list: "bg-muted/50 rounded-2xl p-2 gap-2",
    trigger: "rounded-xl font-bold px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/30 dark:data-[state=active]:shadow-primary/50 data-[state=active]:scale-105 hover:bg-muted-foreground/10 transition-all duration-200",
    content: "mt-6",
  },
  table: {
    wrapper: "rounded-2xl overflow-hidden shadow-md",
    header: "bg-primary/10 dark:bg-primary/20",
    headerCell: "text-sm font-black text-primary uppercase tracking-wider h-12 px-4 first:rounded-tl-2xl last:rounded-tr-2xl",
    body: "",
    row: "border-b-2 border-border/30 hover:bg-accent/10 dark:hover:bg-accent/20 hover:scale-[1.01] transition-all duration-150",
    cell: "py-4 px-4 text-base text-foreground",
    statusBadge: {
      active: "bg-success text-white dark:text-success-foreground font-bold px-3 py-1.5 rounded-full shadow-sm",
      inactive: "bg-muted text-muted-foreground font-bold px-3 py-1.5 rounded-full",
      pending: "bg-warning text-white dark:text-warning-foreground font-bold px-3 py-1.5 rounded-full shadow-sm",
    },
  },
  form: {
    wrapper: "space-y-4",
    label: "text-sm font-bold text-foreground mb-2 block",
    input: {
      default: "h-12 rounded-2xl border-2 border-input bg-background px-4 text-base font-medium focus:ring-4 focus:ring-ring/30 focus:border-primary focus:shadow-lg focus:shadow-ring/20 dark:focus:shadow-ring/40 transition-all duration-200",
      error: "h-12 rounded-2xl border-2 border-destructive bg-destructive/10 dark:bg-destructive/20 px-4 text-base font-medium focus:ring-4 focus:ring-destructive/30 focus:shadow-lg focus:shadow-destructive/20",
      disabled: "h-12 rounded-2xl bg-muted/50 text-muted-foreground cursor-not-allowed border-2 border-muted px-4 opacity-60",
    },
    select: {
      trigger: "h-12 rounded-2xl border-2 border-input bg-background px-4 text-base font-medium focus:ring-4 focus:ring-ring/30",
      content: "rounded-2xl bg-popover border-2 border-border shadow-xl",
    },
    textarea: "rounded-2xl border-2 border-input bg-background px-4 py-3 text-base font-medium min-h-[100px] focus:ring-4 focus:ring-ring/30 focus:border-primary focus:shadow-lg focus:shadow-ring/20 dark:focus:shadow-ring/40 transition-all duration-200",
    errorMessage: "text-sm font-bold text-destructive mt-2",
  },
  button: {
    primary: "h-12 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 shadow-lg shadow-primary/30 dark:shadow-primary/50 hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-primary/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
    secondary: "h-12 rounded-2xl border-2 border-secondary bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 font-bold px-6 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
    ghost: "h-12 rounded-2xl text-muted-foreground hover:bg-accent/20 hover:text-accent-foreground font-bold px-6 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150",
  },
  alert: {
    wrapper: "rounded-2xl border-2 border-accent/50 bg-gradient-to-br from-accent/10 to-accent/5 shadow-md p-6",
    title: "text-base font-black text-foreground",
    description: "text-sm font-medium text-muted-foreground mt-1",
  },
  modal: {
    overlay: "bg-black/50 dark:bg-black/70 backdrop-blur-sm",
    content: "rounded-3xl bg-background border-2 border-border shadow-2xl shadow-primary/20 dark:shadow-primary/40",
    header: "pb-4",
    title: "text-2xl font-black text-foreground",
    description: "text-base font-medium text-muted-foreground",
    footer: "gap-3 pt-6",
  },
  layout: {
    sidebar: "bg-gradient-to-b from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border-r-2 border-border/50",
    sidebarItem: "block px-4 py-3 text-base font-bold text-muted-foreground hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary rounded-2xl mx-3 my-1 hover:scale-[1.02] transition-all duration-150",
    sidebarItemActive: "bg-primary/15 dark:bg-primary/25 text-primary shadow-md scale-[1.02]",
    topbar: "border-b-2 border-border/50 bg-gradient-to-r from-background to-primary/5 dark:to-primary/10 shadow-sm",
    content: "bg-gradient-to-br from-background via-accent/5 to-secondary/5 dark:from-background dark:via-accent/10 dark:to-secondary/10 p-6",
    section: "mb-6",
    sectionTitle: "text-xl font-black text-foreground mb-4",
  },
}
