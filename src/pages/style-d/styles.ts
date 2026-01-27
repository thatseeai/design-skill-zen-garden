import type { StylePreset } from "@/components/StandardShowcase"

// Style-D: CSS Zen Garden Bold Color Block
// 밝은 teal 배경, 강렬한 magenta 액센트, 대형 타이포그래피
// 샤프한 직각 코너, 컬러 블록 레이아웃, 넉넉한 여백
// 고대비, 자신감 있는 디자인

export const styles: StylePreset = {
  card: {
    wrapper: "rounded-none border-2 border-foreground shadow-none bg-card",
    header: "pb-4",
    title: "text-xl font-bold text-card-foreground uppercase tracking-tight",
    description: "text-base text-muted-foreground",
    content: "pt-2",
  },
  kpi: {
    wrapper: "rounded-none border-2 border-foreground bg-card p-6",
    title: "text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2",
    value: "text-4xl font-black text-card-foreground",
    badge: {
      positive: "bg-primary text-primary-foreground text-sm font-bold px-3 py-1 uppercase",
      negative: "bg-destructive text-destructive-foreground text-sm font-bold px-3 py-1 uppercase",
    },
  },
  tabs: {
    list: "bg-secondary rounded-none p-1 gap-1",
    trigger: "rounded-none text-base font-bold px-6 py-3 uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none transition-colors",
    content: "mt-6",
  },
  table: {
    wrapper: "border-2 border-foreground",
    header: "bg-foreground text-background",
    headerCell: "text-sm font-bold uppercase tracking-wide h-12 px-4",
    body: "",
    row: "border-b-2 border-foreground hover:bg-secondary transition-colors",
    cell: "py-4 px-4 text-base text-foreground font-medium",
    statusBadge: {
      active: "bg-primary text-primary-foreground text-xs font-bold rounded-none px-2 py-1 uppercase",
      inactive: "bg-muted text-muted-foreground text-xs font-bold rounded-none px-2 py-1 uppercase",
      pending: "bg-secondary text-secondary-foreground text-xs font-bold rounded-none px-2 py-1 uppercase border-2 border-foreground",
    },
  },
  form: {
    wrapper: "",
    label: "text-sm font-bold text-foreground uppercase tracking-wide mb-2",
    input: {
      default: "h-12 rounded-none border-2 border-foreground bg-card text-base font-medium px-4 focus:ring-4 focus:ring-primary focus:border-primary transition-all",
      error: "h-12 rounded-none border-2 border-destructive bg-destructive/10 text-base font-medium px-4 focus:ring-4 focus:ring-destructive",
      disabled: "h-12 rounded-none bg-muted text-muted-foreground cursor-not-allowed border-2 border-muted-foreground/30",
    },
    select: {
      trigger: "h-12 rounded-none border-2 border-foreground bg-card text-base font-medium px-4",
      content: "rounded-none bg-card border-2 border-foreground",
    },
    textarea: "rounded-none border-2 border-foreground bg-card text-base font-medium min-h-[100px] px-4 py-3 focus:ring-4 focus:ring-primary focus:border-primary transition-all",
    errorMessage: "text-sm text-destructive mt-2 font-bold",
  },
  button: {
    primary: "h-12 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-base font-bold px-8 uppercase tracking-wide transition-colors border-2 border-transparent hover:border-foreground",
    secondary: "h-12 rounded-none border-2 border-foreground bg-card text-foreground hover:bg-secondary text-base font-bold px-8 uppercase tracking-wide transition-colors",
    ghost: "h-12 rounded-none text-foreground hover:bg-secondary hover:text-foreground text-base font-bold uppercase tracking-wide transition-colors border-2 border-transparent hover:border-foreground",
  },
  alert: {
    wrapper: "rounded-none border-2 border-foreground bg-secondary p-6",
    title: "text-lg font-bold text-foreground uppercase",
    description: "text-base text-muted-foreground mt-2",
  },
  modal: {
    overlay: "bg-foreground/80",
    content: "rounded-none bg-card border-4 border-foreground shadow-none",
    header: "",
    title: "text-2xl font-black text-foreground uppercase",
    description: "text-base text-muted-foreground",
    footer: "gap-3",
  },
  layout: {
    sidebar: "bg-[hsl(220,18%,18%)] border-r-4 border-foreground",
    sidebarItem: "block px-6 py-4 text-base font-bold text-[hsl(180,56%,84%)] hover:bg-primary hover:text-primary-foreground rounded-none mx-3 my-1 transition-colors uppercase tracking-wide border-2 border-transparent hover:border-[hsl(180,56%,84%)]",
    sidebarItemActive: "bg-primary text-primary-foreground font-black border-2 border-[hsl(180,56%,84%)]",
    topbar: "border-b-4 border-foreground bg-card",
    content: "bg-background p-8",
    section: "mb-8",
    sectionTitle: "text-2xl font-black text-foreground mb-6 uppercase tracking-tight border-b-4 border-primary pb-3 inline-block",
  },
}
