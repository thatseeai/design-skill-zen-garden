import type { StylePreset } from "@/components/StandardShowcase"

export const styles: StylePreset = {
  card: {
    wrapper:
      "neon-frame rounded-[2px] text-[#f4f8ff] [&_.text-muted-foreground]:text-[#9fb2c9] transition-colors hover:border-[#00e5ff]/80",
    header: "pb-2 border-b-2 border-[#27405d]",
    title: "font-heading text-xl text-[#f4f8ff] tracking-wide",
    description: "text-[#9fb2c9]",
    content: "pt-4",
  },
  kpi: {
    wrapper: "",
    title: "text-[0.78rem] uppercase tracking-[0.16em] font-bold text-[#9fb2c9]",
    value: "text-5xl leading-none font-heading text-[#f4f8ff] tabular-nums",
    badge: {
      positive:
        "rounded-[2px] border-2 border-[#b8ff2c] bg-[#13210a] text-[#d9ff8f] hover:bg-[#1b2d0f]",
      negative:
        "rounded-[2px] border-2 border-[#ff3fa4] bg-[#2b0f20] text-[#ffc0e3] hover:bg-[#351329]",
    },
  },
  tabs: {
    list: "neon-frame rounded-[2px] p-1.5 h-auto bg-[#111926]",
    trigger:
      "rounded-[2px] px-4 py-2.5 font-bold uppercase tracking-wide text-[#9fb2c9] data-[state=active]:bg-[#00e5ff] data-[state=active]:text-[#0b0f14] data-[state=active]:shadow-[0_0_16px_rgba(0,229,255,0.45)]",
    content: "mt-5",
  },
  table: {
    wrapper:
      "rounded-[2px] overflow-hidden [border-collapse:separate] [border-spacing:0] shadow-[inset_0_0_0_2px_#27405d]",
    header: "bg-[#131d2b] [&_tr]:border-0",
    headerCell: "text-[#00e5ff] font-bold uppercase tracking-wide",
    body: "bg-[#111926]",
    row: "border-b border-[#24384f] hover:bg-[#162334] transition-colors",
    cell: "text-[#e8f2ff]",
    statusBadge: {
      active: "rounded-[2px] border-2 border-[#b8ff2c] bg-[#13210a] text-[#d9ff8f]",
      inactive: "rounded-[2px] border-2 border-[#61758e] bg-[#1c2735] text-[#aebed2]",
      pending: "rounded-[2px] border-2 border-[#ff3fa4] bg-[#2b0f20] text-[#ffc0e3]",
    },
  },
  form: {
    wrapper: "",
    label: "text-[#9fb2c9] uppercase tracking-[0.08em] text-sm font-bold",
    input: {
      default:
        "rounded-[2px] border-2 border-[#27405d] bg-[#111926] text-[#f4f8ff] focus:border-[#00e5ff] focus:ring-[#00e5ff]/30",
      error:
        "rounded-[2px] border-2 border-[#ff3fa4] bg-[#2b0f20] text-[#ffe4f2] focus:border-[#ff3fa4] focus:ring-[#ff3fa4]/30",
      disabled:
        "rounded-[2px] border-2 border-[#233547] bg-[#0f141d] text-[#6f849e] cursor-not-allowed",
    },
    select: {
      trigger:
        "rounded-[2px] border-2 border-[#27405d] bg-[#111926] text-[#f4f8ff] focus:border-[#00e5ff] focus:ring-[#00e5ff]/30",
      content: "rounded-[2px] border-2 border-[#27405d] bg-[#111926] text-[#f4f8ff]",
    },
    textarea:
      "rounded-[2px] border-2 border-[#27405d] bg-[#111926] text-[#f4f8ff] focus:border-[#00e5ff] focus:ring-[#00e5ff]/30",
    errorMessage: "text-[#ff86c8]",
  },
  button: {
    primary:
      "rounded-[2px] bg-[#00e5ff] text-[#0b0f14] border-2 border-[#00e5ff] hover:bg-[#43efff] hover:shadow-[0_0_18px_rgba(0,229,255,0.45)] font-bold uppercase",
    secondary:
      "rounded-[2px] bg-transparent text-[#ff6bbc] border-2 border-[#ff3fa4] hover:bg-[#2a1021] hover:shadow-[0_0_16px_rgba(255,63,164,0.35)] font-bold uppercase",
    ghost:
      "rounded-[2px] text-[#9fb2c9] border-2 border-transparent hover:text-[#f4f8ff] hover:border-[#27405d] hover:bg-[#111926]",
  },
  alert: {
    wrapper:
      "rounded-[2px] border-2 border-[#00e5ff] bg-[linear-gradient(90deg,rgba(0,229,255,0.18)_0%,rgba(184,255,44,0.1)_100%)] text-[#e9fbff]",
    title: "font-heading text-lg text-[#00e5ff]",
    description: "text-[#c9def5]",
  },
  modal: {
    overlay: "bg-[#020409]/78 backdrop-blur-[2px]",
    content:
      "rounded-[2px] border-2 border-[#27405d] bg-[#111926] text-[#f4f8ff] shadow-[0_0_0_1px_rgba(0,229,255,0.2),0_0_22px_rgba(0,229,255,0.16)]",
    header: "pb-3 border-b-2 border-[#27405d]",
    title: "font-heading text-2xl text-[#f4f8ff]",
    description: "text-[#9fb2c9]",
    footer: "pt-4 border-t-2 border-[#27405d] gap-3",
  },
  layout: {
    sidebar:
      "bg-[linear-gradient(180deg,#0d121a_0%,#0b1119_100%)] border-r-2 border-[#27405d] md:w-72 text-[#f4f8ff]",
    sidebarItem:
      "block w-full rounded-[2px] px-4 py-3 text-left text-[#9fb2c9] border-l-4 border-transparent hover:bg-[#111926] hover:text-[#f4f8ff] hover:border-[#00e5ff] transition-colors",
    sidebarItemActive:
      "bg-[#141f2c] text-[#f4f8ff] border-[#00e5ff] font-bold shadow-[inset_0_0_0_1px_rgba(0,229,255,0.25)]",
    topbar:
      "bg-[#0d141f]/95 backdrop-blur border-b-2 border-[#27405d] shadow-[0_0_18px_rgba(0,229,255,0.12)]",
    content: "relative z-10 p-5 md:p-10",
    section:
      "mb-12 relative border-l-2 border-[#27405d] pl-4 md:pl-6 before:content-[''] before:absolute before:left-[-2px] before:top-1 before:h-6 before:w-2 before:bg-[#ff3fa4]",
    sectionTitle:
      "font-heading text-5xl md:text-7xl leading-[0.95] tracking-[0.02em] text-[#f4f8ff] mb-7 [text-shadow:0_0_18px_rgba(0,229,255,0.32)]",
  },
}
