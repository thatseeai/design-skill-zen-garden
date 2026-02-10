import type { StylePreset } from "@/components/StandardShowcase"

export const styles: StylePreset = {
  card: {
    wrapper:
      "fur-surface rounded-[24px] text-[#2e2217] dark:text-[#f4e8d8] [&_.text-muted-foreground]:text-[#6b543f] dark:[&_.text-muted-foreground]:text-[#cfbda8]",
    header: "pb-3 border-b border-[#d6c2aa] dark:border-[#634b37]",
    title: "font-heading text-3xl font-semibold text-[#2e2217] dark:text-[#f4e8d8]",
    description: "text-base text-[#5f4a37] dark:text-[#cfbda8]",
    content: "pt-4",
  },
  kpi: {
    wrapper: "",
    title: "text-xs uppercase tracking-[0.14em] font-semibold text-[#735a42] dark:text-[#d1b79f]",
    value: "text-5xl font-sans tabular-nums leading-none font-semibold text-[#3f2a1b] dark:text-[#f0dfca]",
    badge: {
      positive:
        "rounded-[999px] border border-[#6f8c54] bg-[#eef6df] text-[#41602a] hover:bg-[#e2efcc] dark:border-[#8ba573] dark:bg-[#304127] dark:text-[#d3ebbb]",
      negative:
        "rounded-[999px] border border-[#b86657] bg-[#fcedea] text-[#7f3a2f] hover:bg-[#f7dfd9] dark:border-[#d58778] dark:bg-[#4f2f29] dark:text-[#f6c4ba]",
    },
  },
  tabs: {
    list: "rounded-[16px] p-1.5 bg-[#e9dccb] dark:bg-[#3d2e22] border border-[#ccb395] dark:border-[#6f533e] h-auto",
    trigger:
      "rounded-[12px] px-5 py-2.5 font-semibold text-[#5c4633] dark:text-[#d8c2ab] data-[state=active]:bg-[#fffaf4] data-[state=active]:text-[#2e2217] dark:data-[state=active]:bg-[#5a4330] dark:data-[state=active]:text-[#fff3e4]",
    content: "mt-5",
  },
  table: {
    wrapper:
      "rounded-[20px] overflow-hidden [border-collapse:separate] [border-spacing:0] shadow-[inset_0_0_0_1px_#d6c2aa] dark:shadow-[inset_0_0_0_1px_#6a513c]",
    header: "bg-[#efe2d2] dark:bg-[#493628] [&_tr]:border-0",
    headerCell: "text-[#5a4330] dark:text-[#e6d0ba] font-semibold",
    body: "bg-[#fffaf4] dark:bg-[#38291f]",
    row: "border-b border-[#eadccf] dark:border-[#564131] hover:bg-[#f4e9dc] dark:hover:bg-[#433125] transition-colors",
    cell: "text-[#2e2217] dark:text-[#f3e3d0]",
    statusBadge: {
      active: "rounded-[999px] border border-[#6f8c54] bg-[#eef6df] text-[#41602a] dark:border-[#8ba573] dark:bg-[#304127] dark:text-[#d3ebbb]",
      inactive: "rounded-[999px] border border-[#a99072] bg-[#f4eadf] text-[#6a533c] dark:border-[#8e7257] dark:bg-[#4b3a2d] dark:text-[#dcc2a6]",
      pending: "rounded-[999px] border border-[#c89a5f] bg-[#fff2df] text-[#7f5a28] dark:border-[#d0ac74] dark:bg-[#4d3b24] dark:text-[#f0d2a2]",
    },
  },
  form: {
    wrapper: "",
    label: "text-[#4b3829] dark:text-[#dcc8b2] font-medium",
    input: {
      default:
        "rounded-[14px] border border-[#d6c2aa] bg-[#fffaf4] dark:bg-[#3b2c21] dark:border-[#6a513c] focus:ring-[#c89a5f]/25 focus:border-[#c89a5f]",
      error:
        "rounded-[14px] border border-[#c06f5f] bg-[#fff3ef] dark:bg-[#4f3028] dark:border-[#d08b7f] focus:ring-[#c06f5f]/25 focus:border-[#c06f5f]",
      disabled:
        "rounded-[14px] border border-[#e3d4c4] bg-[#f4ece2] text-[#9a8169] dark:bg-[#453328] dark:border-[#65503d] dark:text-[#a58d75]",
    },
    select: {
      trigger:
        "rounded-[14px] border border-[#d6c2aa] bg-[#fffaf4] dark:bg-[#3b2c21] dark:border-[#6a513c] focus:ring-[#c89a5f]/25 focus:border-[#c89a5f]",
      content: "rounded-[14px] border border-[#d6c2aa] bg-[#fffaf4] dark:bg-[#3b2c21] dark:border-[#6a513c]",
    },
    textarea:
      "rounded-[14px] border border-[#d6c2aa] bg-[#fffaf4] dark:bg-[#3b2c21] dark:border-[#6a513c] focus:ring-[#c89a5f]/25 focus:border-[#c89a5f]",
    errorMessage: "text-[#9a4035] dark:text-[#f1a89c]",
  },
  button: {
    primary:
      "rounded-[14px] bg-[#8a5a3c] hover:bg-[#76472b] text-[#fff5ea] shadow-[0_8px_18px_rgba(58,37,20,0.22)]",
    secondary:
      "rounded-[14px] border border-[#cdb196] bg-[#fff7ee] text-[#3a2a1d] hover:bg-[#f5e8d8] dark:border-[#7a5f47] dark:bg-[#473526] dark:text-[#f7e6d1] dark:hover:bg-[#513c2b]",
    ghost: "rounded-[14px] text-[#7b5236] hover:bg-[#f1e2d0] dark:text-[#e2c8ad] dark:hover:bg-[#523c2c]",
  },
  alert: {
    wrapper:
      "rounded-[20px] border border-[#cdb196] bg-[linear-gradient(90deg,rgba(255,250,244,0.95)_0%,rgba(242,229,212,0.95)_100%)] dark:border-[#775b43] dark:bg-[linear-gradient(90deg,rgba(64,46,33,0.95)_0%,rgba(77,57,40,0.95)_100%)]",
    title: "text-[#35271b] dark:text-[#f2dec7] font-semibold",
    description: "text-[#5f4a37] dark:text-[#d0b89d]",
  },
  modal: {
    overlay: "bg-[#1e1610]/45 backdrop-blur-[2px]",
    content:
      "rounded-[24px] border border-[#d6c2aa] bg-[#fffaf4] dark:bg-[#3a2b20] dark:border-[#6a513c] shadow-[0_18px_34px_rgba(34,22,12,0.35)]",
    header: "border-b border-[#e6d5c2] dark:border-[#5f4734] pb-4",
    title: "font-heading text-3xl text-[#2e2217] dark:text-[#f3e1cd]",
    description: "text-[#5f4a37] dark:text-[#d1baa1]",
    footer: "border-t border-[#e6d5c2] dark:border-[#5f4734] pt-4 gap-3",
  },
  layout: {
    sidebar:
      "bg-[linear-gradient(180deg,#f8efe4_0%,#eadbc8_100%)] dark:bg-[linear-gradient(180deg,#2e231b_0%,#261d16_100%)] border-r border-[#d3bda4] dark:border-[#5f4734] md:w-72",
    sidebarItem:
      "block w-full rounded-[12px] px-4 py-3 text-left text-[#4f3b2b] dark:text-[#d9c1a8] hover:bg-[#f6e8d6] dark:hover:bg-[#3f2f24] transition-colors",
    sidebarItemActive:
      "bg-[#fff7ed] dark:bg-[#544031] text-[#2f2116] dark:text-[#fff1df] font-semibold",
    topbar:
      "bg-[#fff8ef]/90 dark:bg-[#2f241c]/90 backdrop-blur border-b border-[#d3bda4] dark:border-[#5f4734]",
    content: "relative z-10 p-6 md:p-10",
    section: "mb-10",
    sectionTitle:
      "font-heading text-5xl md:text-6xl font-semibold text-[#3a2719] dark:text-[#fff1df] tracking-[-0.02em] mb-7 [text-shadow:0_1px_0_rgba(255,250,244,0.5)] dark:[text-shadow:0_2px_10px_rgba(0,0,0,0.55)]",
  },
}
