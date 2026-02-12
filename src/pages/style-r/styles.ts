import type { StylePreset } from "@/components/StandardShowcase"

export const styles: StylePreset = {
  card: {
    wrapper:
      "organic-surface rounded-[22px] text-[#2f2a24] dark:text-[#ece2d2] [&_.text-muted-foreground]:text-[#6d665d] dark:[&_.text-muted-foreground]:text-[#b9ae9f]",
    header: "pb-3 border-b border-[#d8ccb7] dark:border-[#5f5345]",
    title: "font-heading text-3xl font-semibold text-[#2f2a24] dark:text-[#f1e7d8]",
    description: "text-[#6d665d] dark:text-[#b9ae9f]",
    content: "pt-4",
  },
  kpi: {
    wrapper: "",
    title: "text-xs uppercase tracking-[0.12em] font-semibold text-[#6a6258] dark:text-[#c8bcac]",
    value: "font-heading text-5xl leading-none font-semibold text-[#2f2a24] dark:text-[#f3e9dc] tabular-nums",
    badge: {
      positive:
        "rounded-[999px] border border-[#7fa978] bg-[#e7f2dc] text-[#456240] hover:bg-[#deedd0] dark:border-[#8fb887] dark:bg-[#30452f] dark:text-[#d5eacb]",
      negative:
        "rounded-[999px] border border-[#a78d73] bg-[#efe4d6] text-[#5d4d3b] hover:bg-[#e6d8c7] dark:border-[#b79c82] dark:bg-[#42352a] dark:text-[#e3ccb0]",
    },
  },
  tabs: {
    list: "organic-surface rounded-[16px] p-1.5 h-auto",
    trigger:
      "rounded-[12px] px-5 py-2.5 font-semibold text-[#665f56] dark:text-[#c9bdad] data-[state=active]:bg-[#5f8a57] data-[state=active]:text-[#f3ecde] dark:data-[state=active]:bg-[#7ca574] dark:data-[state=active]:text-[#1f1b17]",
    content: "mt-5",
  },
  table: {
    wrapper:
      "rounded-[16px] overflow-hidden [border-collapse:separate] [border-spacing:0] shadow-[inset_0_0_0_1px_#d8ccb7] dark:shadow-[inset_0_0_0_1px_#605344]",
    header: "bg-[#e9ddc9] dark:bg-[#3a322a] [&_tr]:border-0",
    headerCell: "text-[#534a40] dark:text-[#d8ccbb] font-semibold",
    body: "bg-[#f7f1e4] dark:bg-[#29231e]",
    row: "border-b border-[#e1d4bf] dark:border-[#4e4337] hover:bg-[#efe4d2] dark:hover:bg-[#332c25] transition-colors",
    cell: "text-[#2f2a24] dark:text-[#ebdfd0]",
    statusBadge: {
      active: "rounded-[999px] border border-[#7fa978] bg-[#e7f2dc] text-[#456240] dark:border-[#8fb887] dark:bg-[#30452f] dark:text-[#d5eacb]",
      inactive: "rounded-[999px] border border-[#9f9486] bg-[#eee4d7] text-[#5f554a] dark:border-[#867a6b] dark:bg-[#3b332c] dark:text-[#cabdaf]",
      pending: "rounded-[999px] border border-[#b6905d] bg-[#f1e4cf] text-[#6a4f2c] dark:border-[#c2a071] dark:bg-[#493a29] dark:text-[#e6cdab]",
    },
  },
  form: {
    wrapper: "",
    label: "text-[#544b41] dark:text-[#d2c6b5] font-medium",
    input: {
      default:
        "rounded-[14px] border border-[#d8ccb7] bg-[#f8f2e6] dark:bg-[#2d2721] dark:border-[#605344] focus:ring-[#5f8a57]/25 focus:border-[#5f8a57]",
      error:
        "rounded-[14px] border border-[#a78d73] bg-[#f3e9dd] dark:bg-[#43362a] dark:border-[#b79c82] focus:ring-[#b6905d]/25 focus:border-[#b6905d]",
      disabled:
        "rounded-[14px] border border-[#e1d6c5] bg-[#efe7d9] text-[#9c9082] dark:bg-[#3b3229] dark:border-[#6a5d4e] dark:text-[#ad9f8d]",
    },
    select: {
      trigger:
        "rounded-[14px] border border-[#d8ccb7] bg-[#f8f2e6] dark:bg-[#2d2721] dark:border-[#605344] focus:ring-[#5f8a57]/25 focus:border-[#5f8a57]",
      content: "rounded-[14px] border border-[#d8ccb7] bg-[#f8f2e6] dark:bg-[#2d2721] dark:border-[#605344]",
    },
    textarea:
      "rounded-[14px] border border-[#d8ccb7] bg-[#f8f2e6] dark:bg-[#2d2721] dark:border-[#605344] focus:ring-[#5f8a57]/25 focus:border-[#5f8a57]",
    errorMessage: "text-[#8f6d47] dark:text-[#d5b38f]",
  },
  button: {
    primary:
      "rounded-[14px] bg-[#5f8a57] hover:bg-[#547d4d] text-[#f4eddc] border border-[#4e7447] shadow-[0_8px_20px_rgba(47,42,36,0.16)]",
    secondary:
      "rounded-[14px] border border-[#d8ccb7] bg-[#f3ecdf] text-[#4d443a] hover:bg-[#e8decd] dark:border-[#605344] dark:bg-[#322b24] dark:text-[#d2c5b4] dark:hover:bg-[#3a3129]",
    ghost:
      "rounded-[14px] text-[#6d665d] hover:bg-[#ece2d2] dark:text-[#b8ac9b] dark:hover:bg-[#352d26]",
  },
  alert: {
    wrapper:
      "rounded-[16px] border border-[#b7a384] bg-[linear-gradient(90deg,rgba(244,237,220,0.96)_0%,rgba(223,234,209,0.92)_100%)] dark:border-[#8f7a5e] dark:bg-[linear-gradient(90deg,rgba(52,44,36,0.95)_0%,rgba(54,68,49,0.88)_100%)]",
    title: "text-[#3d352c] dark:text-[#e6dccd] font-semibold",
    description: "text-[#6d665d] dark:text-[#c2b6a6]",
  },
  modal: {
    overlay: "bg-black/32 backdrop-blur-[2px]",
    content:
      "rounded-[16px] border border-[#d8ccb7] bg-[#f4eddc] dark:bg-[#2d2721] dark:border-[#605344] shadow-[0_18px_30px_rgba(47,42,36,0.32)]",
    header: "border-b border-[#d8ccb7] dark:border-[#5f5345] pb-4",
    title: "font-heading text-3xl text-[#2f2a24] dark:text-[#efe5d6]",
    description: "text-[#6d665d] dark:text-[#b9ae9f]",
    footer: "border-t border-[#d8ccb7] dark:border-[#5f5345] pt-4 gap-3",
  },
  layout: {
    sidebar:
      "bg-[linear-gradient(180deg,#f3ecdf_0%,#e9dfcf_100%)] dark:bg-[linear-gradient(180deg,#221e1a_0%,#1b1815_100%)] border-r border-[#d8ccb7] dark:border-[#504538] md:w-72",
    sidebarItem:
      "block w-full rounded-[12px] px-4 py-3 text-left text-[#5b5249] dark:text-[#bcae9b] hover:bg-[#ece2d2] dark:hover:bg-[#2d2721] transition-colors",
    sidebarItemActive:
      "bg-[#dbe5ce] dark:bg-[#3a4c36] text-[#2f3b2c] dark:text-[#deebd9] font-semibold",
    topbar:
      "bg-[#f4eddc]/92 dark:bg-[#1f1b17]/92 backdrop-blur border-b border-[#d8ccb7] dark:border-[#504538]",
    content: "relative z-10 p-6 md:p-12",
    section: "mb-12",
    sectionTitle:
      "font-heading text-5xl md:text-6xl leading-[0.95] text-[#2f2a24] dark:text-[#f0e6d8] mb-8",
  },
}
