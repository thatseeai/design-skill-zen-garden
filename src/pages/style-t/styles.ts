import type { StylePreset } from "@/components/StandardShowcase"

// Style T: Binance Exchange
// Flat color-block surfaces, single yellow accent (#FCD535 w/ black text),
// small radius (6px buttons / 8px cards), trading green (#0ECB81) / red (#F6465D).
// Numbers render in the mono `font-num` class (BinancePlex substitute).

export const styles: StylePreset = {
  card: {
    wrapper:
      "rounded-[8px] border border-[#EAECEF] bg-white text-[#181A20] shadow-none dark:border-[#2B3139] dark:bg-[#1E2329] dark:text-[#EAECEF] [&_.text-muted-foreground]:text-[#707A8A] dark:[&_.text-muted-foreground]:text-[#929AA5]",
    header: "pb-3",
    title: "font-heading text-xl font-semibold text-[#181A20] dark:text-[#EAECEF]",
    description: "text-[#707A8A] dark:text-[#929AA5]",
    content: "pt-2",
  },
  kpi: {
    wrapper: "",
    title: "text-xs font-medium uppercase tracking-wide text-[#707A8A] dark:text-[#929AA5]",
    value:
      "font-num text-4xl font-bold leading-tight tabular-nums text-[#181A20] dark:text-[#EAECEF]",
    badge: {
      positive:
        "rounded-[4px] border-0 bg-[#0ECB81]/12 text-[#0A9D64] hover:bg-[#0ECB81]/18 dark:text-[#0ECB81] font-num font-medium",
      negative:
        "rounded-[4px] border-0 bg-[#F6465D]/12 text-[#E03145] hover:bg-[#F6465D]/18 dark:text-[#F6465D] font-num font-medium",
    },
  },
  tabs: {
    list: "h-auto gap-6 rounded-none border-b border-[#EAECEF] bg-transparent p-0 dark:border-[#2B3139]",
    trigger:
      "rounded-none border-b-2 border-transparent bg-transparent px-1 pb-3 pt-0 font-semibold text-[#707A8A] shadow-none data-[state=active]:border-[#FCD535] data-[state=active]:bg-transparent data-[state=active]:text-[#181A20] data-[state=active]:shadow-none dark:text-[#929AA5] dark:data-[state=active]:text-[#EAECEF]",
    content: "mt-5",
  },
  table: {
    wrapper: "overflow-hidden rounded-[8px] border border-[#EAECEF] dark:border-[#2B3139]",
    header: "bg-[#FAFAFA] dark:bg-[#161A1E] [&_tr]:border-0",
    headerCell: "text-[#707A8A] dark:text-[#929AA5] font-medium text-xs uppercase tracking-wide",
    body: "bg-white dark:bg-[#1E2329]",
    row: "border-b border-[#EAECEF] transition-colors hover:bg-[#FAFAFA] dark:border-[#2B3139] dark:hover:bg-[#2B3139]",
    cell: "font-num tabular-nums text-[#181A20] dark:text-[#EAECEF]",
    statusBadge: {
      active:
        "rounded-[4px] border-0 bg-[#0ECB81]/12 text-[#0A9D64] dark:text-[#0ECB81] font-medium",
      inactive:
        "rounded-[4px] border-0 bg-[#707A8A]/12 text-[#707A8A] dark:text-[#929AA5] font-medium",
      pending:
        "rounded-[4px] border-0 bg-[#FCD535]/18 text-[#8A6D00] dark:text-[#FCD535] font-medium",
    },
  },
  form: {
    wrapper: "",
    label: "text-[#181A20] dark:text-[#EAECEF] font-medium",
    input: {
      default:
        "rounded-[6px] border border-[#EAECEF] bg-white text-[#181A20] focus:border-[#3B82F6] focus:ring-[#3B82F6]/25 dark:border-[#2B3139] dark:bg-[#1E2329] dark:text-[#EAECEF]",
      error:
        "rounded-[6px] border border-[#F6465D] bg-white focus:border-[#F6465D] focus:ring-[#F6465D]/25 dark:border-[#F6465D] dark:bg-[#1E2329]",
      disabled:
        "rounded-[6px] border border-[#EAECEF] bg-[#FAFAFA] text-[#929AA5] dark:border-[#2B3139] dark:bg-[#161A1E] dark:text-[#5E6673]",
    },
    select: {
      trigger:
        "rounded-[6px] border border-[#EAECEF] bg-white text-[#181A20] focus:border-[#3B82F6] focus:ring-[#3B82F6]/25 dark:border-[#2B3139] dark:bg-[#1E2329] dark:text-[#EAECEF]",
      content:
        "rounded-[6px] border border-[#EAECEF] bg-white dark:border-[#2B3139] dark:bg-[#1E2329]",
    },
    textarea:
      "rounded-[6px] border border-[#EAECEF] bg-white text-[#181A20] focus:border-[#3B82F6] focus:ring-[#3B82F6]/25 dark:border-[#2B3139] dark:bg-[#1E2329] dark:text-[#EAECEF]",
    errorMessage: "text-[#E03145] dark:text-[#F6465D]",
  },
  button: {
    primary:
      "rounded-[6px] border-0 bg-[#FCD535] text-[#181A20] shadow-none hover:bg-[#F0B90B] font-semibold",
    secondary:
      "rounded-[6px] border border-[#EAECEF] bg-white text-[#181A20] hover:bg-[#FAFAFA] dark:border-[#2B3139] dark:bg-[#2B3139] dark:text-[#EAECEF] dark:hover:bg-[#363D47] font-semibold",
    ghost:
      "rounded-[6px] bg-transparent text-[#707A8A] hover:bg-[#F5F5F5] dark:text-[#929AA5] dark:hover:bg-[#2B3139] font-semibold",
  },
  alert: {
    wrapper:
      "rounded-[8px] border border-[#FCD535]/40 bg-[#FCD535]/8 dark:border-[#FCD535]/25 dark:bg-[#FCD535]/10 [&>svg]:text-[#F0B90B]",
    title: "text-[#181A20] dark:text-[#EAECEF] font-semibold",
    description: "text-[#707A8A] dark:text-[#929AA5]",
  },
  modal: {
    overlay: "bg-[#0B0E11]/60 backdrop-blur-sm",
    content:
      "rounded-[8px] border border-[#EAECEF] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.24)] dark:border-[#2B3139] dark:bg-[#1E2329]",
    header: "pb-4",
    title: "font-heading text-2xl font-semibold text-[#181A20] dark:text-[#EAECEF]",
    description: "text-[#707A8A] dark:text-[#929AA5]",
    footer: "pt-4 gap-3",
  },
  layout: {
    sidebar:
      "border-r border-[#EAECEF] bg-white dark:border-[#2B3139] dark:bg-[#0B0E11] md:w-64",
    sidebarItem:
      "block w-full rounded-[6px] px-4 py-2.5 text-left font-medium text-[#707A8A] transition-colors hover:bg-[#F5F5F5] dark:text-[#929AA5] dark:hover:bg-[#1E2329]",
    sidebarItemActive:
      "bg-[#FCD535]/15 font-semibold text-[#181A20] dark:text-[#FCD535]",
    topbar:
      "border-b border-[#EAECEF] bg-white/90 backdrop-blur dark:border-[#2B3139] dark:bg-[#0B0E11]/90",
    content: "relative z-10 p-6 md:p-10",
    section: "mb-12",
    sectionTitle:
      "font-heading text-4xl md:text-5xl font-bold tracking-tight text-[#181A20] dark:text-[#EAECEF] mb-8",
  },
}
