import type { StylePreset } from "@/components/StandardShowcase"

export const styles: StylePreset = {
  card: {
    wrapper:
      "editorial-surface rounded-[6px] text-[#111111] dark:text-[#efe5d8] [&_.text-muted-foreground]:text-[#5d544a] dark:[&_.text-muted-foreground]:text-[#b9ac9a]",
    header: "pb-3 border-b border-[#d9d0c3] dark:border-[#5d5245]",
    title: "font-heading text-3xl md:text-[2.15rem] font-semibold text-[#181512] dark:text-[#f1e7db]",
    description: "text-[#5d544a] dark:text-[#b9ac9a]",
    content: "pt-4",
  },
  kpi: {
    wrapper: "",
    title: "text-xs uppercase tracking-[0.13em] font-semibold text-[#6a6055] dark:text-[#c4b7a6]",
    value: "font-heading text-5xl leading-none font-semibold text-[#1b1713] dark:text-[#f3e9dd] tabular-nums",
    badge: {
      positive:
        "rounded-[6px] border border-[#9a7a4d] bg-[#f0e5d6] text-[#614b2f] hover:bg-[#e7d9c6] dark:border-[#b6905d] dark:bg-[#3c3228] dark:text-[#e4cba7]",
      negative:
        "rounded-[6px] border border-[#876a47] bg-[#ede3d6] text-[#5a4832] hover:bg-[#e2d6c7] dark:border-[#a88963] dark:bg-[#3a3128] dark:text-[#dcc3a5]",
    },
  },
  tabs: {
    list: "editorial-surface rounded-[6px] p-1.5 bg-[#f3ece2] dark:bg-[#322c26] h-auto",
    trigger:
      "rounded-[4px] px-5 py-2.5 font-semibold text-[#6a6055] dark:text-[#c8bbab] data-[state=active]:bg-[#b6905d] data-[state=active]:text-[#f6f1e8] dark:data-[state=active]:bg-[#b6905d] dark:data-[state=active]:text-[#1a1714]",
    content: "mt-5",
  },
  table: {
    wrapper:
      "rounded-[6px] overflow-hidden [border-collapse:separate] [border-spacing:0] shadow-[inset_0_0_0_1px_#cdbfae] dark:shadow-[inset_0_0_0_1px_#605342]",
    header: "bg-[#ede3d4] dark:bg-[#3a332b] [&_tr]:border-0",
    headerCell: "text-[#4d4338] dark:text-[#d2c2ad] font-semibold",
    body: "bg-[#f9f3e9] dark:bg-[#27221d]",
    row: "border-b border-[#e2d6c5] dark:border-[#4b4033] hover:bg-[#f2e8da] dark:hover:bg-[#312a23] transition-colors",
    cell: "text-[#221d18] dark:text-[#ebe0d2]",
    statusBadge: {
      active: "rounded-[6px] border border-[#9a7a4d] bg-[#efe2cf] text-[#5d472b] dark:border-[#b6905d] dark:bg-[#3d3228] dark:text-[#e2c7a1]",
      inactive: "rounded-[6px] border border-[#a39178] bg-[#f1e8dc] text-[#655742] dark:border-[#8f7d67] dark:bg-[#3a3229] dark:text-[#cabda8]",
      pending: "rounded-[6px] border border-[#b6905d] bg-[#f3e7d5] text-[#6a4f2c] dark:border-[#c6a47a] dark:bg-[#443727] dark:text-[#e7d0b3]",
    },
  },
  form: {
    wrapper: "",
    label: "text-[#4f453a] dark:text-[#d0c1ac] font-medium",
    input: {
      default:
        "rounded-[6px] border border-[#cdbfae] bg-[#faf4ea] dark:bg-[#2a241f] dark:border-[#605342] focus:ring-[#b6905d]/25 focus:border-[#b6905d]",
      error:
        "rounded-[6px] border border-[#a27d52] bg-[#f6efe4] dark:bg-[#3a3026] dark:border-[#b6905d] focus:ring-[#b6905d]/25 focus:border-[#b6905d]",
      disabled:
        "rounded-[6px] border border-[#ddd2c4] bg-[#f1e9dd] text-[#988875] dark:bg-[#383128] dark:border-[#665848] dark:text-[#a69883]",
    },
    select: {
      trigger:
        "rounded-[6px] border border-[#cdbfae] bg-[#faf4ea] dark:bg-[#2a241f] dark:border-[#605342] focus:ring-[#b6905d]/25 focus:border-[#b6905d]",
      content: "rounded-[6px] border border-[#cdbfae] bg-[#faf4ea] dark:bg-[#2a241f] dark:border-[#605342]",
    },
    textarea:
      "rounded-[6px] border border-[#cdbfae] bg-[#faf4ea] dark:bg-[#2a241f] dark:border-[#605342] focus:ring-[#b6905d]/25 focus:border-[#b6905d]",
    errorMessage: "text-[#8a6a45] dark:text-[#d3b48d]",
  },
  button: {
    primary:
      "rounded-[6px] bg-[#b6905d] hover:bg-[#a88252] text-[#f6f1e8] border border-[#8f724b] shadow-[0_8px_18px_rgba(17,17,17,0.16)]",
    secondary:
      "rounded-[6px] border border-[#cdbfae] bg-[#f7efe3] text-[#4b4035] hover:bg-[#f0e5d6] dark:border-[#605342] dark:bg-[#2f2822] dark:text-[#d7c8b4] dark:hover:bg-[#383028]",
    ghost:
      "rounded-[6px] text-[#6a6055] hover:bg-[#efe5d8] dark:text-[#b8ab9a] dark:hover:bg-[#342d26]",
  },
  alert: {
    wrapper:
      "rounded-[6px] border border-[#b6905d] bg-[linear-gradient(90deg,rgba(246,241,232,0.96)_0%,rgba(235,224,206,0.92)_100%)] dark:bg-[linear-gradient(90deg,rgba(43,37,31,0.95)_0%,rgba(56,47,39,0.92)_100%)] dark:border-[#b6905d]",
    title: "text-[#2a241f] dark:text-[#e9dece] font-semibold",
    description: "text-[#5e554a] dark:text-[#c2b6a5]",
  },
  modal: {
    overlay: "bg-black/34 backdrop-blur-[2px]",
    content:
      "rounded-[6px] border border-[#cdbfae] bg-[#f7efe3] dark:bg-[#2c2621] dark:border-[#605342] shadow-[0_18px_30px_rgba(17,17,17,0.32)]",
    header: "border-b border-[#d9d0c3] dark:border-[#5d5245] pb-4",
    title: "font-heading text-3xl text-[#181512] dark:text-[#f1e7db]",
    description: "text-[#5d544a] dark:text-[#b9ac9a]",
    footer: "border-t border-[#d9d0c3] dark:border-[#5d5245] pt-4 gap-3",
  },
  layout: {
    sidebar:
      "bg-[linear-gradient(180deg,#f6f1e8_0%,#ece3d5_100%)] dark:bg-[linear-gradient(180deg,#1d1a17_0%,#171412_100%)] border-r border-[#d2c6b7] dark:border-[#4e4338] md:w-72",
    sidebarItem:
      "block w-full rounded-[4px] px-4 py-3 text-left text-[#574d42] dark:text-[#bcae9b] hover:bg-[#f0e7da] dark:hover:bg-[#2a241f] transition-colors",
    sidebarItemActive:
      "bg-[#e8dbc8] dark:bg-[#362f28] text-[#2d2721] dark:text-[#f0e4d4] font-semibold",
    topbar:
      "bg-[#f7f1e8]/92 dark:bg-[#1a1714]/92 backdrop-blur border-b border-[#d2c6b7] dark:border-[#4e4338]",
    content: "relative z-10 p-8 md:p-14",
    section: "mb-14",
    sectionTitle:
      "font-heading text-6xl md:text-7xl leading-[0.95] tracking-[-0.01em] text-[#181512] dark:text-[#f2e8dc] mb-8",
  },
}
