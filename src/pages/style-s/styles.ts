import type { StylePreset } from "@/components/StandardShowcase"

export const styles: StylePreset = {
  card: {
    wrapper:
      "hanji-surface rounded-[12px] text-[#2A2318] dark:text-[#E8DCC8] [&_.text-muted-foreground]:text-[#8A7E6E] dark:[&_.text-muted-foreground]:text-[#A89C8A]",
    header: "pb-3 border-b border-[#D6CBBA] dark:border-[#504638]",
    title: "font-heading text-3xl font-bold text-[#2A2318] dark:text-[#F0E8D8] geumbak-accent",
    description: "text-[#8A7E6E] dark:text-[#A89C8A]",
    content: "pt-4",
  },
  kpi: {
    wrapper: "",
    title: "text-xs uppercase tracking-[0.14em] font-semibold text-[#8A7E6E] dark:text-[#B8A898]",
    value: "font-heading text-5xl leading-none font-bold text-[#2A2318] dark:text-[#F0E8D8] tabular-nums",
    badge: {
      positive:
        "rounded-full border border-[#3B6B4F]/50 bg-[#E8F2E4] text-[#2A5438] hover:bg-[#DCE9D6] dark:border-[#5A9A6E]/50 dark:bg-[#1E3828] dark:text-[#B8DCBE]",
      negative:
        "rounded-full border border-[#C83E3E]/30 bg-[#F8E8E6] text-[#8A2E2E] hover:bg-[#F2DCDA] dark:border-[#D45A5A]/40 dark:bg-[#3A1E1E] dark:text-[#E8AFAF]",
    },
  },
  tabs: {
    list: "hanji-surface rounded-[12px] p-1.5 h-auto",
    trigger:
      "rounded-[10px] px-5 py-2.5 font-semibold text-[#6E6358] dark:text-[#BEB0A0] data-[state=active]:bg-[#C83E3E] data-[state=active]:text-[#F5EFE0] dark:data-[state=active]:bg-[#D45A5A] dark:data-[state=active]:text-[#1A1714]",
    content: "mt-5",
  },
  table: {
    wrapper:
      "rounded-[12px] overflow-hidden [border-collapse:separate] [border-spacing:0] shadow-[inset_0_0_0_1px_#D6CBBA] dark:shadow-[inset_0_0_0_1px_#504638]",
    header: "bg-[#EDE5D2] dark:bg-[#2A2420] [&_tr]:border-0",
    headerCell: "text-[#5A5044] dark:text-[#D0C4B4] font-semibold text-xs uppercase tracking-wider",
    body: "bg-[#F5EFE0]/80 dark:bg-[#1E1A16]",
    row: "border-b border-[#E2D8C8] dark:border-[#3A3228] hover:bg-[#EDE5D2] dark:hover:bg-[#28221E] transition-colors",
    cell: "text-[#2A2318] dark:text-[#E8DCC8]",
    statusBadge: {
      active:
        "rounded-full border border-[#3B6B4F]/50 bg-[#E8F2E4] text-[#2A5438] dark:border-[#5A9A6E]/50 dark:bg-[#1E3828] dark:text-[#B8DCBE]",
      inactive:
        "rounded-full border border-[#8A7E6E]/40 bg-[#EEEAD4] text-[#6E6358] dark:border-[#7A7060]/40 dark:bg-[#2E2822] dark:text-[#AEA494]",
      pending:
        "rounded-full border border-[#C5A55A]/50 bg-[#F6F0DA] text-[#7A6428] dark:border-[#D4B86A]/50 dark:bg-[#342C18] dark:text-[#E2D098]",
    },
  },
  form: {
    wrapper: "",
    label: "text-[#4A4238] dark:text-[#D8CCBA] font-medium",
    input: {
      default:
        "rounded-[10px] border border-[#D6CBBA] bg-[#FAF6EE] dark:bg-[#22201C] dark:border-[#504638] focus:ring-[#C83E3E]/20 focus:border-[#C83E3E]",
      error:
        "rounded-[10px] border-2 border-[#C83E3E]/60 bg-[#FBF2F0] dark:bg-[#2E1E1C] dark:border-[#D45A5A]/50 focus:ring-[#C83E3E]/25 focus:border-[#C83E3E]",
      disabled:
        "rounded-[10px] border border-[#E2D8C8] bg-[#EDE5D2] text-[#A49888] dark:bg-[#262018] dark:border-[#3E3630] dark:text-[#7A6E60]",
    },
    select: {
      trigger:
        "rounded-[10px] border border-[#D6CBBA] bg-[#FAF6EE] dark:bg-[#22201C] dark:border-[#504638] focus:ring-[#C83E3E]/20 focus:border-[#C83E3E]",
      content: "rounded-[10px] border border-[#D6CBBA] bg-[#FAF6EE] dark:bg-[#22201C] dark:border-[#504638]",
    },
    textarea:
      "rounded-[10px] border border-[#D6CBBA] bg-[#FAF6EE] dark:bg-[#22201C] dark:border-[#504638] focus:ring-[#C83E3E]/20 focus:border-[#C83E3E]",
    errorMessage: "text-[#C83E3E] dark:text-[#E88080]",
  },
  button: {
    primary:
      "rounded-[10px] bg-[#C83E3E] hover:bg-[#B53636] text-[#F5EFE0] border border-[#A83232] shadow-[0_6px_18px_rgba(200,62,62,0.2)] font-semibold",
    secondary:
      "rounded-[10px] border-2 border-[#2B4C7E] bg-transparent text-[#2B4C7E] hover:bg-[#2B4C7E]/8 dark:border-[#6A8EC0] dark:text-[#6A8EC0] dark:hover:bg-[#6A8EC0]/10 font-semibold",
    ghost:
      "rounded-[10px] text-[#6E6358] hover:bg-[#EDE5D2] dark:text-[#AEA494] dark:hover:bg-[#2A2420]",
  },
  alert: {
    wrapper:
      "rounded-[12px] border border-[#C5A55A]/40 bg-[linear-gradient(90deg,rgba(245,239,224,0.97)_0%,rgba(246,240,218,0.95)_100%)] dark:border-[#C5A55A]/25 dark:bg-[linear-gradient(90deg,rgba(30,26,22,0.96)_0%,rgba(52,44,24,0.9)_100%)]",
    title: "text-[#2A2318] dark:text-[#F0E8D8] font-bold",
    description: "text-[#6E6358] dark:text-[#B8A898]",
  },
  modal: {
    overlay: "bg-[#1A1714]/40 backdrop-blur-[3px]",
    content:
      "rounded-[12px] border border-[#D6CBBA] bg-[#F5EFE0] dark:bg-[#1E1A16] dark:border-[#504638] shadow-[0_20px_40px_rgba(92,58,26,0.24)]",
    header: "border-b border-[#D6CBBA] dark:border-[#504638] pb-4",
    title: "font-heading text-3xl font-bold text-[#2A2318] dark:text-[#F0E8D8]",
    description: "text-[#8A7E6E] dark:text-[#A89C8A]",
    footer: "border-t border-[#D6CBBA] dark:border-[#504638] pt-4 gap-3",
  },
  layout: {
    sidebar:
      "bg-[linear-gradient(180deg,#F0E8D8_0%,#E6DCC8_100%)] dark:bg-[linear-gradient(180deg,#1A1714_0%,#14110E_100%)] border-r border-[#D6CBBA] dark:border-[#3A3228] md:w-72",
    sidebarItem:
      "block w-full rounded-[10px] px-4 py-3 text-left text-[#6E6358] dark:text-[#B8A898] hover:bg-[#EDE5D2] dark:hover:bg-[#2A2420] transition-colors",
    sidebarItemActive:
      "bg-[#C83E3E]/10 dark:bg-[#C83E3E]/15 text-[#C83E3E] dark:text-[#E88080] font-semibold border-l-2 border-[#C83E3E] dark:border-[#D45A5A]",
    topbar:
      "bg-[#F5EFE0]/92 dark:bg-[#1A1714]/92 backdrop-blur border-b border-[#D6CBBA] dark:border-[#3A3228]",
    content: "relative z-10 p-6 md:p-12",
    section: "mb-12",
    sectionTitle:
      "font-heading text-5xl md:text-6xl leading-[0.95] text-[#2A2318] dark:text-[#F0E8D8] mb-8",
  },
}
