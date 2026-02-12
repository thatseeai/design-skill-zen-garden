import type { StylePreset } from "@/components/StandardShowcase"

export const styles: StylePreset = {
  card: {
    wrapper:
      "sticker-pop rounded-[28px] text-[#2e2342] dark:text-[#f5edff] [&_.text-muted-foreground]:text-[#5e5373] dark:[&_.text-muted-foreground]:text-[#cfc3e6]",
    header: "pb-3 border-b-2 border-[#ccb6ec] dark:border-[#7f69aa]",
    title: "font-heading text-3xl font-bold text-[#37254e] dark:text-[#f7eeff]",
    description: "text-[#5e5373] dark:text-[#cfc3e6]",
    content: "pt-4",
  },
  kpi: {
    wrapper: "",
    title: "text-xs uppercase tracking-[0.12em] font-extrabold text-[#635581] dark:text-[#d8c9f1]",
    value: "font-heading text-5xl leading-none font-bold text-[#44256e] dark:text-[#f9f0ff] tabular-nums",
    badge: {
      positive:
        "rounded-[999px] border-2 border-[#7dcf85] bg-[#eafbe8] text-[#3e7a4a] hover:bg-[#dbf5d8] dark:border-[#95df9d] dark:bg-[#304834] dark:text-[#d5f4d7]",
      negative:
        "rounded-[999px] border-2 border-[#ff9b90] bg-[#ffece9] text-[#8a3b35] hover:bg-[#ffdeda] dark:border-[#ffaea5] dark:bg-[#5b3434] dark:text-[#ffd0ca]",
    },
  },
  tabs: {
    list: "sticker-pop rounded-[20px] p-1.5 h-auto bg-[#fff5ff] dark:bg-[#4a376d]",
    trigger:
      "rounded-[16px] px-5 py-2.5 font-bold text-[#5d4a82] dark:text-[#d8caf1] data-[state=active]:bg-[#ff5f8a] data-[state=active]:text-white dark:data-[state=active]:bg-[#ff7da1] dark:data-[state=active]:text-[#2b1d3f]",
    content: "mt-5",
  },
  table: {
    wrapper:
      "rounded-[24px] overflow-hidden [border-collapse:separate] [border-spacing:0] shadow-[inset_0_0_0_3px_#b293e0] dark:shadow-[inset_0_0_0_3px_#775fa8]",
    header: "bg-[#e9dbff] dark:bg-[#4a376d] [&_tr]:border-0",
    headerCell: "text-[#5a4780] dark:text-[#e2d5f8] font-extrabold",
    body: "bg-[#fffdf7] dark:bg-[#3e2f5f]",
    row: "border-b border-[#e3d3f6] dark:border-[#695592] hover:bg-[#fff1fb] dark:hover:bg-[#4a396f] transition-colors",
    cell: "text-[#2e2342] dark:text-[#f3e9ff]",
    statusBadge: {
      active: "rounded-[999px] border-2 border-[#8ce99a] bg-[#eefce8] text-[#3f7546] dark:border-[#a3f2af] dark:bg-[#324b36] dark:text-[#ddf8df]",
      inactive: "rounded-[999px] border-2 border-[#bca7dd] bg-[#f5edff] text-[#67588a] dark:border-[#9278ba] dark:bg-[#4c3a6f] dark:text-[#decef7]",
      pending: "rounded-[999px] border-2 border-[#ffd84d] bg-[#fff7cf] text-[#846b1f] dark:border-[#ffe066] dark:bg-[#5d4f22] dark:text-[#fff1b0]",
    },
  },
  form: {
    wrapper: "",
    label: "text-[#4f3e70] dark:text-[#dbcdf4] font-bold",
    input: {
      default:
        "rounded-[18px] border-2 border-[#b293e0] bg-[#fffdf7] dark:bg-[#3e2f5f] dark:border-[#775fa8] focus:ring-[#65d8ff]/30 focus:border-[#65d8ff]",
      error:
        "rounded-[18px] border-2 border-[#ff9b90] bg-[#fff0ee] dark:bg-[#5b3434] dark:border-[#ffaea5] focus:ring-[#ff9b90]/30 focus:border-[#ff9b90]",
      disabled:
        "rounded-[18px] border-2 border-[#d9c8ef] bg-[#f7efff] text-[#9485ae] dark:bg-[#4a396d] dark:border-[#7d66aa] dark:text-[#bcaed6]",
    },
    select: {
      trigger:
        "rounded-[18px] border-2 border-[#b293e0] bg-[#fffdf7] dark:bg-[#3e2f5f] dark:border-[#775fa8] focus:ring-[#65d8ff]/30 focus:border-[#65d8ff]",
      content: "rounded-[18px] border-2 border-[#b293e0] bg-[#fffdf7] dark:bg-[#3e2f5f] dark:border-[#775fa8]",
    },
    textarea:
      "rounded-[18px] border-2 border-[#b293e0] bg-[#fffdf7] dark:bg-[#3e2f5f] dark:border-[#775fa8] focus:ring-[#65d8ff]/30 focus:border-[#65d8ff]",
    errorMessage: "text-[#b4473f] dark:text-[#ffb8b0]",
  },
  button: {
    primary:
      "rounded-[18px] bg-[#ff5f8a] hover:bg-[#ff4b7b] text-white border-2 border-[#b53a61] shadow-[0_8px_18px_rgba(181,58,97,0.26)]",
    secondary:
      "rounded-[18px] bg-[#65d8ff] hover:bg-[#4ecfff] text-[#2a2f4c] border-2 border-[#3d86a8] shadow-[0_8px_18px_rgba(61,134,168,0.24)]",
    ghost:
      "rounded-[18px] text-[#5e4f81] border-2 border-transparent hover:border-[#b293e0] hover:bg-[#fff1fb] dark:text-[#d6c8ef] dark:hover:bg-[#4c3a6f]",
  },
  alert: {
    wrapper:
      "rounded-[22px] border-3 border-[#b293e0] bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,245,205,0.95)_100%)] dark:border-[#775fa8] dark:bg-[linear-gradient(90deg,rgba(71,56,104,0.95)_0%,rgba(85,74,41,0.88)_100%)]",
    title: "text-[#3a2a58] dark:text-[#f4ebff] font-extrabold",
    description: "text-[#625279] dark:text-[#d4c6ee]",
  },
  modal: {
    overlay: "bg-[#301f4a]/42 backdrop-blur-[2px]",
    content:
      "rounded-[26px] border-3 border-[#b293e0] bg-[#fffdf7] dark:bg-[#3e2f5f] dark:border-[#775fa8] shadow-[0_18px_32px_rgba(96,63,143,0.34)]",
    header: "border-b-2 border-[#dcc9f2] dark:border-[#6f5a98] pb-4",
    title: "font-heading text-3xl text-[#3a2a58] dark:text-[#f5ecff]",
    description: "text-[#625279] dark:text-[#d5c8ef]",
    footer: "border-t-2 border-[#dcc9f2] dark:border-[#6f5a98] pt-4 gap-3",
  },
  layout: {
    sidebar:
      "bg-[linear-gradient(180deg,#fff2fb_0%,#ffeef3_100%)] dark:bg-[linear-gradient(180deg,#392a59_0%,#30224d_100%)] border-r-3 border-[#b293e0] dark:border-[#775fa8] md:w-72",
    sidebarItem:
      "block w-full rounded-[16px] px-4 py-3 text-left text-[#5d4b81] dark:text-[#d9cbf2] hover:bg-[#fff8ff] dark:hover:bg-[#4b396f] transition-colors",
    sidebarItemActive:
      "bg-[#ffd84d] text-[#4f3b14] dark:bg-[#ffe066] dark:text-[#3a2a58] font-extrabold",
    topbar:
      "bg-[#fff6ff]/92 dark:bg-[#3c2d5d]/92 backdrop-blur border-b-3 border-[#b293e0] dark:border-[#775fa8]",
    content: "relative z-10 p-6 md:p-10",
    section: "mb-10",
    sectionTitle:
      "font-heading text-5xl md:text-6xl font-extrabold text-[#3a2a58] dark:text-[#f5ecff] tracking-[-0.01em] mb-7 [text-shadow:0_2px_0_rgba(255,255,255,0.7)] dark:[text-shadow:0_2px_10px_rgba(0,0,0,0.4)]",
  },
}
