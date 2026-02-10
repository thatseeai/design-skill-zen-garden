import type { StylePreset } from "@/components/StandardShowcase"

export const styles: StylePreset = {
  card: {
    wrapper:
      "care-panel rounded-[28px] border border-[#d2d2d7] bg-white/95 dark:bg-[#1f2430]/92 dark:border-[#3a4254] shadow-[0_12px_30px_rgba(17,17,26,0.08)]",
    header: "pb-4 border-b border-[#d2d2d7] dark:border-[#3a4254]",
    title: "text-2xl md:text-[2.1rem] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]",
    description: "text-base text-[#424245] dark:text-[#ced3dd]",
    content: "pt-5",
  },
  kpi: {
    wrapper: "bg-transparent",
    title: "text-[#424245] dark:text-[#d8deea] text-sm uppercase tracking-[0.12em] font-semibold",
    value: "text-[#1d1d1f] dark:text-[#f5f5f7] text-5xl font-semibold",
    badge: {
      positive:
        "rounded-[10px] border border-[#2e8b57] bg-[#e7f7ef] text-[#18633b] hover:bg-[#d9f0e3] dark:border-[#4cb67b] dark:bg-[#1f3a2d] dark:text-[#a4e2bf]",
      negative:
        "rounded-[10px] border border-[#cf4c45] bg-[#fdebea] text-[#8b302c] hover:bg-[#f9dbd8] dark:border-[#f27870] dark:bg-[#3f2525] dark:text-[#ffb8b3]",
    },
  },
  tabs: {
    list: "bg-[#ececf1] dark:bg-[#2b3342] rounded-[14px] p-1 border border-[#d2d2d7] dark:border-[#3a4254] h-auto",
    trigger:
      "rounded-[10px] px-5 py-2.5 font-semibold text-[#3a3a3c] dark:text-[#d5dae3] data-[state=active]:bg-white data-[state=active]:text-[#1d1d1f] data-[state=active]:shadow-sm dark:data-[state=active]:bg-[#1f2430] dark:data-[state=active]:text-[#f5f5f7]",
    content: "mt-5",
  },
  table: {
    wrapper:
      "rounded-[20px] overflow-hidden [border-collapse:separate] [border-spacing:0] shadow-[inset_0_0_0_1px_#d2d2d7] dark:shadow-[inset_0_0_0_1px_#3a4254]",
    header: "bg-[#f2f2f4] dark:bg-[#2b3342] [&_tr]:border-0",
    headerCell: "text-[#424245] dark:text-[#d0d5df] font-semibold",
    body: "bg-white dark:bg-[#1f2430]",
    row: "border-b border-[#e6e6eb] dark:border-[#323a49] hover:bg-[#f7f8fb] dark:hover:bg-[#262d3a] transition-colors",
    cell: "text-[#1d1d1f] dark:text-[#ebeff5]",
    statusBadge: {
      active: "rounded-[10px] border border-[#3ea66f] bg-[#ecfaf2] text-[#1a6b44] dark:border-[#53c08a] dark:bg-[#213a31] dark:text-[#a5e6c2]",
      inactive: "rounded-[10px] border border-[#a4a4aa] bg-[#f5f5f6] text-[#4f4f54] dark:border-[#667086] dark:bg-[#2c3342] dark:text-[#d2d8e4]",
      pending: "rounded-[10px] border border-[#cf9f33] bg-[#fff8e7] text-[#7d611e] dark:border-[#e5bf63] dark:bg-[#3a331f] dark:text-[#f8df9e]",
    },
  },
  form: {
    wrapper: "",
    label: "text-[#2d2d30] dark:text-[#dde2ec] font-medium",
    input: {
      default:
        "rounded-[14px] border border-[#d2d2d7] bg-white dark:bg-[#1f2430] dark:border-[#3a4254] focus:ring-[#4fa3ff]/25 focus:border-[#4fa3ff]",
      error:
        "rounded-[14px] border border-[#cf4c45] bg-[#fff5f4] dark:bg-[#332123] dark:border-[#f27870] focus:ring-[#cf4c45]/25 focus:border-[#cf4c45]",
      disabled:
        "rounded-[14px] border border-[#dfdfe5] bg-[#f3f3f6] text-[#8a8a91] dark:bg-[#2b3342] dark:border-[#3d4558] dark:text-[#8f98aa]",
    },
    select: {
      trigger:
        "rounded-[14px] border border-[#d2d2d7] bg-white dark:bg-[#1f2430] dark:border-[#3a4254] focus:ring-[#4fa3ff]/25 focus:border-[#4fa3ff]",
      content: "rounded-[14px] border border-[#d2d2d7] bg-white dark:bg-[#1f2430] dark:border-[#3a4254]",
    },
    textarea:
      "rounded-[14px] border border-[#d2d2d7] bg-white dark:bg-[#1f2430] dark:border-[#3a4254] focus:ring-[#4fa3ff]/25 focus:border-[#4fa3ff]",
    errorMessage: "text-[#c83b35] dark:text-[#ff9d98] text-sm",
  },
  button: {
    primary:
      "rounded-[14px] bg-[#0071e3] hover:bg-[#0062c4] text-white shadow-[0_6px_16px_rgba(0,113,227,0.28)]",
    secondary:
      "rounded-[14px] border border-[#d2d2d7] bg-white text-[#1d1d1f] hover:bg-[#f5f7fa] dark:border-[#3a4254] dark:bg-[#232a38] dark:text-[#f1f5fb] dark:hover:bg-[#2b3342]",
    ghost: "rounded-[14px] text-[#06c] hover:bg-[#eaf3ff] dark:text-[#79b8ff] dark:hover:bg-[#243247]",
  },
  alert: {
    wrapper:
      "rounded-[20px] border border-[#bcd8f6] bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(234,244,255,0.95)_100%)] dark:border-[#3f5d84] dark:bg-[linear-gradient(90deg,rgba(33,40,55,0.95)_0%,rgba(28,56,92,0.85)_100%)]",
    title: "text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold",
    description: "text-[#3a3a3c] dark:text-[#d7dde8]",
  },
  modal: {
    overlay: "bg-black/30 backdrop-blur-[2px]",
    content:
      "rounded-[24px] border border-[#d2d2d7] bg-white dark:bg-[#1f2430] dark:border-[#3a4254] shadow-[0_18px_36px_rgba(17,17,26,0.2)]",
    header: "pb-3 border-b border-[#e6e6eb] dark:border-[#363f50]",
    title: "text-[#1d1d1f] dark:text-[#f5f5f7] text-2xl font-semibold",
    description: "text-[#444449] dark:text-[#cfd5e0]",
    footer: "pt-4 border-t border-[#e6e6eb] dark:border-[#363f50] gap-3",
  },
  layout: {
    sidebar:
      "bg-white/85 dark:bg-[#1a202d]/90 backdrop-blur border-r border-[#d2d2d7] dark:border-[#30394a] md:w-72",
    sidebarItem:
      "block w-full rounded-[12px] px-4 py-3 text-left text-[#303036] dark:text-[#d5dbe6] hover:bg-[#eef2f8] dark:hover:bg-[#273144] transition-colors",
    sidebarItemActive:
      "bg-[#eaf3ff] dark:bg-[#293851] text-[#005ecb] dark:text-[#8dc3ff] font-semibold",
    topbar:
      "bg-white/88 dark:bg-[#1a202d]/88 backdrop-blur border-b border-[#d2d2d7] dark:border-[#30394a]",
    content: "relative z-10 p-6 md:p-10",
    section: "mb-10",
    sectionTitle:
      "text-5xl md:text-6xl tracking-[-0.02em] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-7",
  },
}
