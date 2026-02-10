import type { StylePreset } from "@/components/StandardShowcase"

export const styles: StylePreset = {
  card: {
    wrapper:
      "dancheong-frame rounded-sm bg-[rgba(247,242,232,0.92)] text-[#1f2430] [&_.text-muted-foreground]:text-[#6a5a45] backdrop-blur-[1px] transition-colors duration-300 hover:bg-[rgba(247,242,232,0.98)]",
    header: "pb-3 border-b-2 border-[#0f7a72]/35",
    title: "text-[#1f2430] font-heading text-xl font-bold",
    description: "text-[#4f4b45] text-sm",
    content: "pt-4",
  },
  kpi: {
    wrapper: "bg-transparent",
    title: "text-[#5f4736] uppercase tracking-[0.12em] text-xs font-semibold",
    value: "text-[#b4382f] text-3xl md:text-4xl font-heading font-bold",
    badge: {
      positive:
        "rounded-sm border border-[#0f7a72] bg-[#0f7a72]/14 text-[#0d5f58] hover:bg-[#0f7a72]/22",
      negative:
        "rounded-sm border border-[#b4382f] bg-[#b4382f]/14 text-[#8e2c25] hover:bg-[#b4382f]/22",
    },
  },
  tabs: {
    list: "bg-[#1f2430] rounded-sm p-1 border-2 border-[#d39b2a] h-auto gap-1",
    trigger:
      "rounded-sm text-[#f7f2e8] data-[state=active]:bg-[#d39b2a] data-[state=active]:text-[#1f2430] data-[state=active]:shadow-none font-semibold px-4 py-2",
    content: "mt-4",
  },
  table: {
    wrapper: "border-2 border-[#d39b2a] rounded-sm overflow-hidden bg-[#f9f4ea]",
    header: "bg-[linear-gradient(90deg,#1f2430_0%,#0f7a72_60%,#1f2430_100%)]",
    headerCell: "text-[#f7f2e8] font-semibold",
    body: "bg-[#f7f2e8]",
    row: "border-b border-[#d39b2a]/30 hover:bg-[#0f7a72]/7 transition-colors",
    cell: "text-[#1f2430]",
    statusBadge: {
      active: "rounded-sm border border-[#0f7a72] bg-[#0f7a72]/20 text-[#0a5d57]",
      inactive: "rounded-sm border border-[#1f2430]/40 bg-[#1f2430]/12 text-[#1f2430]",
      pending: "rounded-sm border border-[#d39b2a] bg-[#d39b2a]/20 text-[#7e5a18]",
    },
  },
  form: {
    wrapper: "space-y-5",
    label: "text-[#1f2430] font-semibold",
    input: {
      default:
        "rounded-sm border-2 border-[#d39b2a]/70 bg-[#fffdf8] focus:border-[#0f7a72] focus:ring-[#0f7a72]/25",
      error:
        "rounded-sm border-2 border-[#b4382f] bg-[#fff7f6] focus:border-[#b4382f] focus:ring-[#b4382f]/25",
      disabled: "rounded-sm border-2 border-[#d39b2a]/40 bg-[#ece6db] text-[#8f8374]",
    },
    select: {
      trigger:
        "rounded-sm border-2 border-[#d39b2a]/70 bg-[#fffdf8] focus:ring-[#0f7a72]/25 focus:border-[#0f7a72]",
      content: "rounded-sm border-2 border-[#1f2430]/25 bg-[#f7f2e8]",
    },
    textarea:
      "rounded-sm border-2 border-[#d39b2a]/70 bg-[#fffdf8] focus:border-[#0f7a72] focus:ring-[#0f7a72]/25",
    errorMessage: "text-[#b4382f] text-sm",
  },
  button: {
    primary:
      "rounded-sm bg-[linear-gradient(120deg,#0f7a72_0%,#0c625c_100%)] text-[#f7f2e8] border border-[#1f2430]/25 hover:brightness-110 shadow-[0_4px_12px_rgba(15,122,114,0.28)]",
    secondary:
      "rounded-sm bg-[linear-gradient(120deg,#f7f2e8_0%,#efe4cf_100%)] border-2 border-[#d39b2a] text-[#1f2430] hover:bg-[#f2ead9]",
    ghost: "rounded-sm text-[#1f2430] hover:text-[#b4382f] hover:bg-[#b4382f]/10",
  },
  alert: {
    wrapper:
      "rounded-sm border-2 border-[#d39b2a] bg-[linear-gradient(90deg,rgba(247,242,232,0.92)_0%,rgba(15,122,114,0.14)_100%)] text-[#1f2430] shadow-[0_6px_18px_rgba(31,36,48,0.18)] dark:bg-[linear-gradient(90deg,rgba(31,36,48,0.9)_0%,rgba(15,122,114,0.28)_100%)] dark:text-[#f7f2e8]",
    title: "text-[#1f2430] dark:text-[#f7f2e8] font-heading font-bold",
    description: "text-[#2e3340] dark:text-[#e6ddcc]",
  },
  modal: {
    overlay: "bg-[#1f2430]/70 backdrop-blur-[1px]",
    content:
      "rounded-sm border-2 border-[#d39b2a] bg-[linear-gradient(180deg,#f9f4ea_0%,#f4ecde_100%)] shadow-[0_14px_40px_rgba(31,36,48,0.35)]",
    header: "pb-4 border-b border-[#1f2430]/20",
    title: "text-[#1f2430] font-heading text-2xl",
    description: "text-[#4f4b45]",
    footer: "pt-4 border-t border-[#1f2430]/15 gap-3",
  },
  layout: {
    sidebar:
      "bg-[linear-gradient(180deg,#1f2430_0%,#18202a_45%,#142831_100%)] text-[#f7f2e8] border-r-2 border-[#d39b2a] md:w-72",
    sidebarItem:
      "block w-full rounded-sm border-l-4 border-transparent px-4 py-3 text-left text-[#efe4cf] hover:bg-[#0f7a72]/32 hover:border-[#d39b2a] transition-colors text-sm leading-snug",
    sidebarItemActive:
      "bg-[linear-gradient(90deg,rgba(212,155,42,0.3)_0%,rgba(180,56,47,0.24)_100%)] border-[#d39b2a] text-white font-semibold",
    topbar:
      "dancheong-band bg-[linear-gradient(180deg,rgba(247,242,232,0.95)_0%,rgba(238,229,214,0.88)_100%)] border-b-2 border-[#d39b2a] shadow-[0_4px_16px_rgba(31,36,48,0.15)]",
    content: "relative z-10 p-5 md:p-10",
    section: "mb-10",
    sectionTitle:
      "font-heading text-3xl md:text-4xl text-foreground mb-6 pb-3 border-b-2 border-[#d39b2a] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-2/5 after:bg-[#b4382f]",
  },
}
