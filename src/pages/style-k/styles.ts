import type { StylePreset } from "@/components/StandardShowcase"

export const styles: StylePreset = {
  card: {
    wrapper:
      "sticker-surface sticker-cut rounded-[26px] text-[#392a50] dark:text-[#f2e9ff] [&_.text-muted-foreground]:text-[#655078] dark:[&_.text-muted-foreground]:text-[#c9b9e4]",
    header: "pb-3 border-b border-[#c9b2e2] dark:border-[#6f5894]",
    title: "font-heading text-3xl font-bold text-[#3a2a52] dark:text-[#f4eaff]",
    description: "text-base text-[#655078] dark:text-[#c9b9e4]",
    content: "pt-4",
  },
  kpi: {
    wrapper: "",
    title: "text-sm uppercase tracking-[0.11em] font-semibold text-[#6a5483] dark:text-[#d2c4ea]",
    value: "font-heading text-5xl leading-none font-bold text-[#4b2f6f] dark:text-[#f2e9ff]",
    badge: {
      positive:
        "rounded-[999px] border border-[#7ea45a] bg-[#edf8d9] text-[#44612a] hover:bg-[#e2f0c6] dark:border-[#9ac877] dark:bg-[#3a4d2b] dark:text-[#dbf3c4]",
      negative:
        "rounded-[999px] border border-[#d38982] bg-[#ffe7e4] text-[#8a3a35] hover:bg-[#fdd8d4] dark:border-[#e9a39d] dark:bg-[#563133] dark:text-[#ffcec8]",
    },
  },
  tabs: {
    list: "sticker-cut rounded-[18px] p-1.5 bg-[#f8eefe] dark:bg-[#40315f] border border-[#c8b2e1] dark:border-[#71599a] h-auto",
    trigger:
      "rounded-[14px] px-5 py-2.5 font-semibold text-[#5f477d] dark:text-[#d2c4ea] data-[state=active]:bg-[#ffffff] data-[state=active]:text-[#422868] dark:data-[state=active]:bg-[#5b4481] dark:data-[state=active]:text-[#f7eeff]",
    content: "mt-5",
  },
  table: {
    wrapper:
      "rounded-[20px] overflow-hidden [border-collapse:separate] [border-spacing:0] shadow-[inset_0_0_0_2px_#c8b2e1] dark:shadow-[inset_0_0_0_2px_#705998]",
    header: "bg-[#f0e3fa] dark:bg-[#4b396d] [&_tr]:border-0",
    headerCell: "text-[#5f477d] dark:text-[#dbcdf2] font-semibold",
    body: "bg-[#fff8ff] dark:bg-[#3d2d5e]",
    row: "border-b border-[#e0cfee] dark:border-[#645088] hover:bg-[#f6ecfd] dark:hover:bg-[#463666] transition-colors",
    cell: "text-[#392a50] dark:text-[#f3ecff]",
    statusBadge: {
      active: "rounded-[999px] border border-[#8fbf55] bg-[#edf8d9] text-[#486a2b] dark:border-[#a6d178] dark:bg-[#3c4f2d] dark:text-[#dff6c4]",
      inactive: "rounded-[999px] border border-[#b3a3ca] bg-[#f5edfd] text-[#6d5a89] dark:border-[#8d77ad] dark:bg-[#4b3a69] dark:text-[#dbcff0]",
      pending: "rounded-[999px] border border-[#dbbe60] bg-[#fff5cc] text-[#7c6220] dark:border-[#e5c86e] dark:bg-[#56491e] dark:text-[#f6e0a4]",
    },
  },
  form: {
    wrapper: "",
    label: "text-[#4b3767] dark:text-[#dbcdf2] font-medium",
    input: {
      default:
        "rounded-[16px] border-2 border-[#c8b2e1] bg-[#fff8ff] dark:bg-[#3d2d5e] dark:border-[#705998] focus:ring-[#8a6fba]/25 focus:border-[#8a6fba]",
      error:
        "rounded-[16px] border-2 border-[#e2a6a0] bg-[#fff1ef] dark:bg-[#58353a] dark:border-[#f0b7b0] focus:ring-[#f7a9a0]/25 focus:border-[#f7a9a0]",
      disabled:
        "rounded-[16px] border-2 border-[#ded0ee] bg-[#f5edf9] text-[#937faf] dark:bg-[#4c3b6d] dark:border-[#80689f] dark:text-[#c2afd9]",
    },
    select: {
      trigger:
        "rounded-[16px] border-2 border-[#c8b2e1] bg-[#fff8ff] dark:bg-[#3d2d5e] dark:border-[#705998] focus:ring-[#8a6fba]/25 focus:border-[#8a6fba]",
      content: "rounded-[16px] border-2 border-[#c8b2e1] bg-[#fff8ff] dark:bg-[#3d2d5e] dark:border-[#705998]",
    },
    textarea:
      "rounded-[16px] border-2 border-[#c8b2e1] bg-[#fff8ff] dark:bg-[#3d2d5e] dark:border-[#705998] focus:ring-[#8a6fba]/25 focus:border-[#8a6fba]",
    errorMessage: "text-[#b35249] dark:text-[#ffb8b0]",
  },
  button: {
    primary:
      "rounded-[16px] bg-[#8a6fba] hover:bg-[#795cae] text-white shadow-[0_8px_20px_rgba(95,66,132,0.26)] hover:translate-y-[-1px]",
    secondary:
      "rounded-[16px] border-2 border-[#c8b2e1] bg-[#fff8ff] text-[#422868] hover:bg-[#f5ebfd] dark:border-[#705998] dark:bg-[#49386a] dark:text-[#f4ebff] dark:hover:bg-[#54407a]",
    ghost: "rounded-[16px] text-[#6b4f91] hover:bg-[#f3e8fb] dark:text-[#dccdf4] dark:hover:bg-[#4f3b72]",
  },
  alert: {
    wrapper:
      "rounded-[20px] border-2 border-[#c8b2e1] bg-[linear-gradient(90deg,rgba(255,247,255,0.96)_0%,rgba(236,250,210,0.94)_100%)] dark:border-[#705998] dark:bg-[linear-gradient(90deg,rgba(67,50,97,0.95)_0%,rgba(70,97,53,0.8)_100%)]",
    title: "text-[#3a2a52] dark:text-[#f3ecff] font-semibold",
    description: "text-[#5f4a78] dark:text-[#d1c2ea]",
  },
  modal: {
    overlay: "bg-[#2d1f3d]/40 backdrop-blur-[2px]",
    content:
      "rounded-[24px] border-2 border-[#c8b2e1] bg-[#fff8ff] dark:bg-[#3d2d5e] dark:border-[#705998] shadow-[0_18px_34px_rgba(58,38,88,0.32)]",
    header: "border-b border-[#dac8eb] dark:border-[#69548e] pb-4",
    title: "font-heading text-3xl text-[#3a2a52] dark:text-[#f4ebff]",
    description: "text-[#655078] dark:text-[#d3c5ea]",
    footer: "border-t border-[#dac8eb] dark:border-[#69548e] pt-4 gap-3",
  },
  layout: {
    sidebar:
      "bg-[linear-gradient(180deg,#f5e7f4_0%,#e8d8ee_100%)] dark:bg-[linear-gradient(180deg,#34254f_0%,#2c2044_100%)] border-r-2 border-[#c8b2e1] dark:border-[#705998] md:w-72",
    sidebarItem:
      "block w-full rounded-[14px] px-4 py-3 text-left text-[#553f73] dark:text-[#d8cbf0] hover:bg-[#f7ecfb] dark:hover:bg-[#463468] transition-colors",
    sidebarItemActive:
      "bg-[#ffffff] dark:bg-[#5a4481] text-[#3c2460] dark:text-[#f5ebff] font-bold",
    topbar:
      "bg-[#fdf4ff]/90 dark:bg-[#35264f]/90 backdrop-blur border-b-2 border-[#c8b2e1] dark:border-[#705998]",
    content: "relative z-10 p-6 md:p-10",
    section: "mb-10",
    sectionTitle:
      "font-heading text-5xl md:text-6xl font-bold text-[#41295f] dark:text-[#f4ebff] tracking-[-0.01em] mb-7 [text-shadow:0_2px_0_rgba(255,255,255,0.55)] dark:[text-shadow:0_2px_10px_rgba(0,0,0,0.4)]",
  },
}
