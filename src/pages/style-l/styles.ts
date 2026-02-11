import type { StylePreset } from "@/components/StandardShowcase"

export const styles: StylePreset = {
  card: {
    wrapper:
      "l-pop-surface rounded-[22px] text-[#2f1a75] dark:text-[#f6f2ff] [&_.text-muted-foreground]:text-[#6f5ea6] dark:[&_.text-muted-foreground]:text-[#d7cef8]",
    header: "pb-3 border-b border-[#ceb5ff] dark:border-[#65539a]",
    title: "font-heading text-3xl text-[#5e2eba] dark:text-[#f3ecff]",
    description: "text-base text-[#6f5ea6] dark:text-[#d7cef8]",
    content: "pt-4",
  },
  kpi: {
    wrapper: "",
    title: "text-sm uppercase tracking-[0.12em] font-bold text-[#7a57bc] dark:text-[#ccb6ff]",
    value: "font-heading text-5xl leading-none text-[#5c2db5] dark:text-[#f4ecff]",
    badge: {
      positive:
        "rounded-[999px] border-2 border-[#57dfe9] bg-[#dfffff] text-[#13666e] hover:bg-[#cafcfe] dark:border-[#67e8f2] dark:bg-[#21515c] dark:text-[#c9fbff]",
      negative:
        "rounded-[999px] border-2 border-[#ef8ed6] bg-[#ffe2f7] text-[#9b2f7f] hover:bg-[#ffd1f1] dark:border-[#ff9be1] dark:bg-[#5a2a4b] dark:text-[#ffd2f4]",
    },
  },
  tabs: {
    list: "rounded-[18px] p-1.5 bg-[#f1e3ff] dark:bg-[#433169] border-2 border-[#cfb4ff] dark:border-[#6f5aa5] h-auto",
    trigger:
      "rounded-[14px] px-5 py-2.5 font-semibold text-[#6e4aa7] dark:text-[#d9cbff] data-[state=active]:bg-[#ffffff] data-[state=active]:text-[#51219d] dark:data-[state=active]:bg-[#634d93] dark:data-[state=active]:text-[#f8f3ff] data-[state=active]:shadow-[0_6px_14px_rgba(127,87,206,0.24)]",
    content: "mt-5",
  },
  table: {
    wrapper:
      "rounded-[20px] overflow-hidden [border-collapse:separate] [border-spacing:0] shadow-[inset_0_0_0_2px_#cfb4ff] dark:shadow-[inset_0_0_0_2px_#6f5aa5]",
    header: "bg-[#ebd8ff] dark:bg-[#4a386f] [&_tr]:border-0",
    headerCell: "text-[#65439c] dark:text-[#e0d4ff] font-bold",
    body: "bg-[#fff7ff] dark:bg-[#3d2f60]",
    row: "border-b border-[#ead8ff] dark:border-[#5d4a8a] hover:bg-[#f6ecff] dark:hover:bg-[#47386f] transition-colors",
    cell: "text-[#2f1a75] dark:text-[#f4efff]",
    statusBadge: {
      active:
        "rounded-[999px] border-2 border-[#57dfe9] bg-[#dfffff] text-[#13666e] dark:border-[#67e8f2] dark:bg-[#21515c] dark:text-[#c9fbff]",
      inactive:
        "rounded-[999px] border-2 border-[#c4b4ed] bg-[#f5eeff] text-[#6b5899] dark:border-[#8e7fc0] dark:bg-[#4f3f77] dark:text-[#ddd3ff]",
      pending:
        "rounded-[999px] border-2 border-[#f6a7e6] bg-[#ffe9fb] text-[#8d3171] dark:border-[#ffb2ea] dark:bg-[#5a2d53] dark:text-[#ffd8f6]",
    },
  },
  form: {
    wrapper: "",
    label: "text-[#553597] dark:text-[#e1d2ff] font-medium",
    input: {
      default:
        "rounded-[16px] border-2 border-[#cfb4ff] bg-[#fff9ff] dark:bg-[#3d2f60] dark:border-[#6f5aa5] focus:ring-[#6cf0ff]/35 focus:border-[#63e6f8]",
      error:
        "rounded-[16px] border-2 border-[#f69fdc] bg-[#fff0f9] dark:bg-[#5a2d53] dark:border-[#ffb2ea] focus:ring-[#ff9ce2]/35 focus:border-[#ff8fdd]",
      disabled:
        "rounded-[16px] border-2 border-[#ddd0fa] bg-[#f6f1ff] text-[#987dc8] dark:bg-[#514076] dark:border-[#7f6aa8] dark:text-[#c8b8e9]",
    },
    select: {
      trigger:
        "rounded-[16px] border-2 border-[#cfb4ff] bg-[#fff9ff] dark:bg-[#3d2f60] dark:border-[#6f5aa5] focus:ring-[#6cf0ff]/35 focus:border-[#63e6f8]",
      content: "rounded-[16px] border-2 border-[#cfb4ff] bg-[#fff9ff] dark:bg-[#3d2f60] dark:border-[#6f5aa5]",
    },
    textarea:
      "rounded-[16px] border-2 border-[#cfb4ff] bg-[#fff9ff] dark:bg-[#3d2f60] dark:border-[#6f5aa5] focus:ring-[#6cf0ff]/35 focus:border-[#63e6f8]",
    errorMessage: "text-[#b53989] dark:text-[#ffb5e8]",
  },
  button: {
    primary:
      "rounded-[16px] bg-[linear-gradient(135deg,#ff5fd1_0%,#9759ff_100%)] hover:brightness-105 text-white shadow-[0_12px_22px_rgba(125,64,214,0.34)] hover:translate-y-[-1px]",
    secondary:
      "rounded-[16px] border-2 border-[#cfb4ff] bg-[#fff8ff] text-[#52229f] hover:bg-[#f4e6ff] dark:border-[#6f5aa5] dark:bg-[#4a3a72] dark:text-[#f4ecff] dark:hover:bg-[#574383]",
    ghost: "rounded-[16px] text-[#7147b9] hover:bg-[#eedfff] dark:text-[#f7f2ff] dark:hover:bg-[#6b52a1]",
  },
  alert: {
    wrapper:
      "rounded-[20px] border-2 border-[#cfb4ff] bg-[linear-gradient(90deg,rgba(255,247,255,0.95)_0%,rgba(222,253,255,0.92)_48%,rgba(255,228,250,0.94)_100%)] dark:border-[#6f5aa5] dark:bg-[linear-gradient(90deg,rgba(68,52,107,0.94)_0%,rgba(39,87,101,0.88)_50%,rgba(82,43,84,0.9)_100%)]",
    title: "text-[#472392] dark:text-[#f4ecff] font-semibold",
    description: "text-[#684ba5] dark:text-[#d7caf8]",
  },
  modal: {
    overlay: "bg-[#201638]/44 backdrop-blur-[2px]",
    content:
      "rounded-[24px] border-2 border-[#cfb4ff] bg-[#fff8ff] dark:bg-[#3d2f60] dark:border-[#6f5aa5] shadow-[0_20px_34px_rgba(42,20,79,0.34)]",
    header: "border-b border-[#ddc6ff] dark:border-[#62508e] pb-4",
    title: "font-heading text-3xl text-[#5427a3] dark:text-[#f4ecff]",
    description: "text-[#6e52a9] dark:text-[#d4c6f7]",
    footer: "border-t border-[#ddc6ff] dark:border-[#62508e] pt-4 gap-3",
  },
  layout: {
    sidebar:
      "bg-[linear-gradient(180deg,#ffd8f6_0%,#eed6ff_56%,#d8f8ff_100%)] dark:bg-[linear-gradient(180deg,#332350_0%,#2f2550_56%,#213e5a_100%)] border-r-2 border-[#cfb4ff] dark:border-[#695396] md:w-72",
    sidebarItem:
      "block w-full rounded-[14px] px-4 py-3 text-left text-[#62399f] dark:text-[#d8cbff] hover:bg-[#f5e9ff] dark:hover:bg-[#4c3b74] transition-colors",
    sidebarItemActive:
      "bg-[#ffffff] dark:bg-[#644d93] text-[#4e1f99] dark:text-[#f8f3ff] font-bold shadow-[0_6px_14px_rgba(126,86,206,0.22)]",
    topbar:
      "bg-card text-foreground backdrop-blur-md border-b-2 border-border shadow-[0_1px_0_rgba(255,255,255,0.6)] dark:bg-[#1e1533] dark:text-[#f8f3ff] dark:border-[#8c74c7] dark:shadow-[0_1px_0_rgba(255,255,255,0.1)] [&_h1]:text-current [&_h1]:font-bold",
    content: "relative z-10 p-6 md:p-10",
    section: "mb-10",
    sectionTitle:
      "font-heading text-5xl md:text-6xl text-[#5d2cb7] dark:text-[#f5eeff] tracking-[0.005em] mb-7 [text-shadow:0_2px_0_rgba(255,255,255,0.75)] dark:[text-shadow:0_2px_12px_rgba(0,0,0,0.4)]",
  },
}
