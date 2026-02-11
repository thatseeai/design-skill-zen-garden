import type { StylePreset } from "@/components/StandardShowcase"

export const styles: StylePreset = {
  card: {
    wrapper:
      "m-name-surface rounded-[24px] text-[#243247] dark:text-[#f2ecdf] [&_.text-muted-foreground]:text-[#5a6a79] dark:[&_.text-muted-foreground]:text-[#c9c3b6]",
    header: "pb-4 border-b border-[#ced4de] dark:border-[#56607a]",
    title: "font-heading text-3xl font-bold text-[#20354d] dark:text-[#f4efe4]",
    description: "text-base text-[#5a6a79] dark:text-[#c9c3b6]",
    content: "pt-5",
  },
  kpi: {
    wrapper: "",
    title: "text-xs uppercase tracking-[0.14em] font-semibold text-[#6f5367] dark:text-[#dbb8cb]",
    value: "font-heading text-5xl leading-none font-bold text-[#2e415a] dark:text-[#f3ede1]",
    badge: {
      positive:
        "rounded-[12px] border border-[#7db7ad] bg-[#edf8f6] text-[#2a645d] hover:bg-[#dff1ee] dark:border-[#79bfb3] dark:bg-[#284540] dark:text-[#c7ebe4]",
      negative:
        "rounded-[12px] border border-[#d98ba8] bg-[#fdf0f5] text-[#8d3c5f] hover:bg-[#fae4ec] dark:border-[#e49ab6] dark:bg-[#553047] dark:text-[#ffd2e2]",
    },
  },
  tabs: {
    list: "rounded-[16px] p-1.5 bg-[#eee8e3] dark:bg-[#34384a] border border-[#d0d5dd] dark:border-[#58617a] h-auto",
    trigger:
      "rounded-[12px] px-5 py-2.5 font-semibold text-[#44556a] dark:text-[#d6d0c4] data-[state=active]:bg-white data-[state=active]:text-[#20354d] dark:data-[state=active]:bg-[#454c62] dark:data-[state=active]:text-[#f4efe4]",
    content: "mt-5",
  },
  table: {
    wrapper:
      "rounded-[20px] overflow-hidden [border-collapse:separate] [border-spacing:0] shadow-[inset_0_0_0_1px_#d0d5dd] dark:shadow-[inset_0_0_0_1px_#58617a]",
    header: "bg-[#f1ebe6] dark:bg-[#353a4b] [&_tr]:border-0",
    headerCell: "text-[#4c5e74] dark:text-[#d5cfbf] font-semibold",
    body: "bg-[#fffdfb] dark:bg-[#2c3243]",
    row: "border-b border-[#e4e2df] dark:border-[#49526a] hover:bg-[#f8f5f2] dark:hover:bg-[#33394d] transition-colors",
    cell: "text-[#22364d] dark:text-[#f1ebdd]",
    statusBadge: {
      active: "rounded-[10px] border border-[#7db7ad] bg-[#edf8f6] text-[#2a645d] dark:border-[#79bfb3] dark:bg-[#284540] dark:text-[#c7ebe4]",
      inactive: "rounded-[10px] border border-[#b9c1cd] bg-[#f5f6f8] text-[#546175] dark:border-[#72809a] dark:bg-[#374055] dark:text-[#d4d9e4]",
      pending: "rounded-[10px] border border-[#d6ae6f] bg-[#fff7e8] text-[#7f5f2d] dark:border-[#e3bf82] dark:bg-[#4f4128] dark:text-[#f3ddb2]",
    },
  },
  form: {
    wrapper: "",
    label: "text-[#3c4f67] dark:text-[#dfd8ca] font-medium",
    input: {
      default:
        "rounded-[14px] border border-[#d0d5dd] bg-[#fffdfb] dark:bg-[#2c3243] dark:border-[#58617a] focus:ring-[#d981a6]/25 focus:border-[#d981a6]",
      error:
        "rounded-[14px] border border-[#d87098] bg-[#fff1f6] dark:bg-[#4b2d3f] dark:border-[#e294b3] focus:ring-[#d87098]/25 focus:border-[#d87098]",
      disabled:
        "rounded-[14px] border border-[#e1e4e9] bg-[#f4f3f1] text-[#8a92a0] dark:bg-[#3a4051] dark:border-[#5d657a] dark:text-[#aeb4c2]",
    },
    select: {
      trigger:
        "rounded-[14px] border border-[#d0d5dd] bg-[#fffdfb] dark:bg-[#2c3243] dark:border-[#58617a] focus:ring-[#d981a6]/25 focus:border-[#d981a6]",
      content: "rounded-[14px] border border-[#d0d5dd] bg-[#fffdfb] dark:bg-[#2c3243] dark:border-[#58617a]",
    },
    textarea:
      "rounded-[14px] border border-[#d0d5dd] bg-[#fffdfb] dark:bg-[#2c3243] dark:border-[#58617a] focus:ring-[#d981a6]/25 focus:border-[#d981a6]",
    errorMessage: "text-[#b74a74] dark:text-[#f6b5cc]",
  },
  button: {
    primary:
      "rounded-[14px] bg-[linear-gradient(135deg,#d96896_0%,#739fc1_100%)] hover:brightness-105 text-white shadow-[0_8px_20px_rgba(94,79,126,0.26)]",
    secondary:
      "rounded-[14px] border border-[#d0d5dd] bg-[#fffdfb] text-[#2b3f57] hover:bg-[#f3efea] dark:border-[#58617a] dark:bg-[#34384a] dark:text-[#efe8db] dark:hover:bg-[#3d4256]",
    ghost: "rounded-[14px] text-[#486177] hover:bg-[#ebf1f4] dark:text-[#d6d0c3] dark:hover:bg-[#41475c]",
  },
  alert: {
    wrapper:
      "rounded-[20px] border border-[#c7d8dc] bg-[linear-gradient(90deg,rgba(255,253,250,0.94)_0%,rgba(237,246,245,0.92)_46%,rgba(250,240,245,0.92)_100%)] dark:border-[#5d7482] dark:bg-[linear-gradient(90deg,rgba(50,56,74,0.95)_0%,rgba(43,62,67,0.9)_46%,rgba(66,43,58,0.88)_100%)]",
    title: "text-[#274057] dark:text-[#f2ecdf] font-semibold",
    description: "text-[#567184] dark:text-[#d1cbbb]",
  },
  modal: {
    overlay: "bg-[#1f2432]/36 backdrop-blur-[2px]",
    content:
      "rounded-[24px] border border-[#d0d5dd] bg-[#fffdfb] dark:bg-[#2c3243] dark:border-[#58617a] shadow-[0_18px_36px_rgba(21,25,35,0.26)]",
    header: "border-b border-[#e4e2df] dark:border-[#4f5870] pb-4",
    title: "font-heading text-3xl text-[#20354d] dark:text-[#f4efe4]",
    description: "text-[#5a6a79] dark:text-[#cac3b5]",
    footer: "border-t border-[#e4e2df] dark:border-[#4f5870] pt-4 gap-3",
  },
  layout: {
    sidebar:
      "bg-[linear-gradient(180deg,#f7f1ea_0%,#eef2f0_100%)] dark:bg-[linear-gradient(180deg,#252a39_0%,#222735_100%)] border-r border-[#ced4de] dark:border-[#4d556c] md:w-72",
    sidebarItem:
      "block w-full rounded-[12px] px-4 py-3 text-left text-[#43586f] dark:text-[#d3cdbe] hover:bg-[#edf1f3] dark:hover:bg-[#353c50] transition-colors",
    sidebarItemActive:
      "bg-[#fffdfb] dark:bg-[#42495f] text-[#25405a] dark:text-[#f4efe2] font-semibold",
    topbar:
      "bg-[#fffcfa]/88 dark:bg-[#262d3d]/90 backdrop-blur border-b border-[#ced4de] dark:border-[#4d556c] text-[#23384f] dark:text-[#f4efe2]",
    content: "relative z-10 p-6 md:p-10",
    section: "mb-10",
    sectionTitle:
      "font-heading text-5xl md:text-6xl font-bold text-[#2b425d] dark:text-[#f5f0e5] mb-7 tracking-[-0.01em]",
  },
}
