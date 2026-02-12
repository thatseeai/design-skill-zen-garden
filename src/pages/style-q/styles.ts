import type { StylePreset } from "@/components/StandardShowcase"

export const styles: StylePreset = {
  card: {
    wrapper:
      "glossy-shell rounded-[16px] text-[#eef4ff] [&_.text-muted-foreground]:text-[#b8c7ec] border-[#89a1df]/45",
    header: "pb-3 border-b border-[#6f86be]/55",
    title: "font-heading text-xl text-[#eef4ff]",
    description: "text-[#b8c7ec]",
    content: "pt-4",
  },
  kpi: {
    wrapper: "",
    title: "text-xs uppercase tracking-[0.14em] font-semibold text-[#b8c7ec]",
    value: "font-heading text-5xl leading-none text-[#f5f9ff] tabular-nums",
    badge: {
      positive:
        "rounded-[14px] border border-[#59e9ad] bg-[linear-gradient(180deg,#b4f8da_0%,#6ee7b3_100%)] text-[#153f2e] shadow-[0_6px_12px_rgba(20,95,70,0.35)]",
      negative:
        "rounded-[14px] border border-[#ff6b6b] bg-[linear-gradient(180deg,#ffb3b3_0%,#ff7f7f_100%)] text-[#4a1212] shadow-[0_6px_12px_rgba(90,20,20,0.35)]",
    },
  },
  tabs: {
    list: "glossy-shell rounded-[14px] p-1.5 h-auto bg-[#26366b]/70",
    trigger:
      "rounded-[12px] px-5 py-2.5 font-semibold text-[#c4d1f0] data-[state=active]:bg-[linear-gradient(180deg,#7af0ff_0%,#4ccfff_100%)] data-[state=active]:text-[#111a38] data-[state=active]:shadow-[0_8px_14px_rgba(33,123,161,0.45)]",
    content: "mt-5",
  },
  table: {
    wrapper:
      "rounded-[14px] overflow-hidden [border-collapse:separate] [border-spacing:0] shadow-[inset_0_0_0_1px_rgba(137,161,223,0.45)]",
    header: "bg-[linear-gradient(180deg,#374c8f_0%,#2c3d75_100%)] [&_tr]:border-0",
    headerCell: "text-[#e6eeff] font-semibold",
    body: "bg-[linear-gradient(180deg,#1f2e5c_0%,#1b2851_100%)]",
    row: "border-b border-[#5f76b2]/55 hover:bg-[#2b3d76]/58 transition-colors",
    cell: "text-[#e7efff]",
    statusBadge: {
      active: "rounded-[12px] border border-[#59e9ad] bg-[linear-gradient(180deg,#b4f8da_0%,#6ee7b3_100%)] text-[#153f2e]",
      inactive: "rounded-[12px] border border-[#b4bfd8] bg-[linear-gradient(180deg,#e0e7ff_0%,#b6c2df_100%)] text-[#2e3651]",
      pending: "rounded-[12px] border border-[#ffd166] bg-[linear-gradient(180deg,#ffe8a5_0%,#ffd166_100%)] text-[#5f4508]",
    },
  },
  form: {
    wrapper: "",
    label: "text-[#c8d6f6] font-semibold",
    input: {
      default:
        "rounded-[14px] border border-[#7f93cb] bg-[linear-gradient(180deg,#273c7a_0%,#202f61_100%)] text-[#eff4ff] focus:ring-[#5ee3ff]/30 focus:border-[#5ee3ff]",
      error:
        "rounded-[14px] border border-[#ff7d7d] bg-[linear-gradient(180deg,#4c2344_0%,#3e1d37_100%)] text-[#ffe9f7] focus:ring-[#ff7ac8]/30 focus:border-[#ff7ac8]",
      disabled:
        "rounded-[14px] border border-[#62709a] bg-[#212c56] text-[#91a0c8] cursor-not-allowed",
    },
    select: {
      trigger:
        "rounded-[14px] border border-[#7f93cb] bg-[linear-gradient(180deg,#273c7a_0%,#202f61_100%)] text-[#eff4ff] focus:ring-[#5ee3ff]/30 focus:border-[#5ee3ff]",
      content: "rounded-[14px] border border-[#7f93cb] bg-[#24356b] text-[#eff4ff]",
    },
    textarea:
      "rounded-[14px] border border-[#7f93cb] bg-[linear-gradient(180deg,#273c7a_0%,#202f61_100%)] text-[#eff4ff] focus:ring-[#5ee3ff]/30 focus:border-[#5ee3ff]",
    errorMessage: "text-[#ffc2e9]",
  },
  button: {
    primary:
      "rounded-[14px] border border-[#8fefff] bg-[linear-gradient(180deg,#8bf2ff_0%,#4ecdf6_58%,#39abd2_100%)] text-[#0f203e] shadow-[0_10px_18px_rgba(20,63,94,0.45)] hover:brightness-105 active:translate-y-[1px]",
    secondary:
      "rounded-[14px] border border-[#9f86de] bg-[linear-gradient(180deg,#ccb9ff_0%,#a983ff_100%)] text-[#271645] shadow-[0_10px_18px_rgba(49,30,95,0.38)] hover:brightness-105 active:translate-y-[1px]",
    ghost:
      "rounded-[14px] border border-transparent text-[#b8c7ec] hover:bg-[#2a3f7a]/52 hover:border-[#6f86be]/55 hover:text-[#f2f7ff]",
  },
  alert: {
    wrapper:
      "rounded-[14px] border border-[#8f9fda] bg-[linear-gradient(110deg,rgba(94,227,255,0.24)_0%,rgba(178,137,255,0.18)_56%,rgba(255,122,200,0.17)_100%)] text-[#f0f5ff]",
    title: "text-[#f7fbff] font-semibold",
    description: "text-[#d4ddf4]",
  },
  modal: {
    overlay: "bg-[#060915]/74 backdrop-blur-[2px]",
    content:
      "glossy-shell rounded-[16px] border-[#89a1df]/55 bg-[linear-gradient(170deg,#2a3f7d_0%,#202f61_100%)] text-[#eef4ff]",
    header: "pb-3 border-b border-[#6f86be]/55",
    title: "font-heading text-2xl text-[#f6faff]",
    description: "text-[#c7d3ef]",
    footer: "pt-4 border-t border-[#6f86be]/55 gap-3",
  },
  layout: {
    sidebar:
      "bg-[linear-gradient(180deg,#1a2550_0%,#131d3f_100%)] border-r border-[#6d82be]/55 md:w-72 text-[#eef4ff]",
    sidebarItem:
      "block w-full rounded-[10px] px-4 py-3 text-left text-[#bcc9eb] hover:bg-[#2b3f7a]/58 hover:text-[#f5f9ff] transition-colors",
    sidebarItemActive:
      "bg-[linear-gradient(160deg,#78efff_0%,#57cbff_100%)] text-[#132247] font-bold shadow-[0_10px_16px_rgba(20,63,94,0.38)]",
    topbar:
      "bg-[linear-gradient(180deg,rgba(29,47,98,0.93)_0%,rgba(23,38,79,0.93)_100%)] backdrop-blur border-b border-[#6d82be]/55",
    content: "relative z-10 p-6 md:p-10",
    section: "mb-10",
    sectionTitle:
      "font-heading text-5xl md:text-6xl leading-[0.95] text-[#f8fbff] mb-7 [text-shadow:0_0_18px_rgba(94,227,255,0.34)]",
  },
}
