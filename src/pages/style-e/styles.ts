import type { StylePreset } from "@/components/StandardShowcase"

// Style-E: Dark Industrial Architecture (CSS Zen Garden inspired)
// Monochromatic dark theme with architectural photography background
// Extreme typographic contrast, layered frames, gallery-like atmosphere
// Sharp corners, structural borders, dramatic depth through layering

export const styles: StylePreset = {
  card: {
    wrapper: "bg-black/85 border-2 border-white/30 backdrop-blur-sm shadow-none hover:border-white/50 transition-colors duration-300",
    header: "pb-3 border-b border-white/20",
    title: "text-base font-bold uppercase tracking-wider text-white",
    description: "text-xs text-gray-400 uppercase tracking-wider",
    content: "pt-4",
  },
  kpi: {
    wrapper: "bg-black/70 border border-white/30 backdrop-blur-sm p-6 hover:bg-black/80 transition-all duration-300",
    title: "text-xs font-serif uppercase tracking-widest text-gray-400 mb-2",
    value: "text-4xl font-black text-white",
    badge: {
      positive: "bg-white/20 border border-white/40 text-white font-bold text-xs px-3 py-1 uppercase tracking-wider",
      negative: "bg-white/10 border border-white/30 text-gray-300 font-bold text-xs px-3 py-1 uppercase tracking-wider",
    },
  },
  tabs: {
    list: "bg-transparent border-b-2 border-white/20 rounded-none p-0 gap-0",
    trigger: "rounded-none font-bold uppercase text-sm tracking-widest text-gray-400 border-b-2 border-transparent px-6 py-3 data-[state=active]:border-white data-[state=active]:text-white hover:text-white hover:border-white/50 transition-all duration-200",
    content: "mt-8",
  },
  table: {
    wrapper: "border border-white/30",
    header: "bg-black/60 border-b-2 border-white/30",
    headerCell: "text-xs font-bold uppercase tracking-widest text-white h-12 px-4 border-r border-white/20 last:border-r-0",
    body: "",
    row: "border-b border-white/20 hover:bg-white/5 transition-colors duration-150",
    cell: "py-3 px-4 text-sm font-serif text-gray-300 border-r border-white/10 last:border-r-0",
    statusBadge: {
      active: "bg-white/20 border border-white/40 text-white font-bold px-3 py-1 uppercase tracking-wider text-xs",
      inactive: "bg-white/10 border border-white/20 text-gray-400 font-bold px-3 py-1 uppercase tracking-wider text-xs",
      pending: "bg-white/15 border border-white/30 text-gray-300 font-bold px-3 py-1 uppercase tracking-wider text-xs",
    },
  },
  form: {
    wrapper: "space-y-6",
    label: "text-xs font-serif uppercase tracking-widest text-gray-400 mb-2 block",
    input: {
      default: "h-12 rounded-none border border-white/30 bg-black/50 px-4 text-sm font-serif text-white placeholder:text-gray-500 focus:outline-none focus:border-white focus:bg-black/70 transition-all duration-200",
      error: "h-12 rounded-none border-2 border-white bg-black/50 px-4 text-sm font-serif text-white focus:outline-none focus:border-white focus:bg-black/70 transition-all duration-200",
      disabled: "h-12 rounded-none bg-black/30 text-gray-600 cursor-not-allowed border border-white/20 px-4 opacity-50",
    },
    select: {
      trigger: "h-12 rounded-none border border-white/30 bg-black/50 px-4 text-sm font-serif text-white focus:border-white",
      content: "rounded-none bg-black border-2 border-white/30 shadow-none",
    },
    textarea: "rounded-none border border-white/30 bg-black/50 px-4 py-3 text-sm font-serif text-white min-h-[100px] placeholder:text-gray-500 focus:outline-none focus:border-white focus:bg-black/70 transition-all duration-200",
    errorMessage: "text-xs font-bold text-white mt-2 uppercase tracking-wider",
  },
  button: {
    primary: "h-12 rounded-none bg-white text-black hover:bg-black hover:text-white border-2 border-white font-bold uppercase text-sm tracking-widest px-6 transition-all duration-200",
    secondary: "h-12 rounded-none bg-transparent text-white hover:bg-white/10 border-2 border-white/50 hover:border-white font-bold uppercase text-sm tracking-widest px-6 transition-all duration-200",
    ghost: "h-12 rounded-none text-gray-400 hover:text-white hover:bg-white/5 font-bold uppercase text-sm tracking-widest px-6 transition-colors duration-150",
  },
  alert: {
    wrapper: "rounded-none border-2 border-white/30 bg-black/70 backdrop-blur-sm p-6",
    title: "text-sm font-bold uppercase tracking-wider text-white",
    description: "text-xs font-serif text-gray-300 mt-2 leading-relaxed",
  },
  modal: {
    overlay: "bg-black/80 backdrop-blur-sm",
    content: "rounded-none bg-black border-2 border-white/30 shadow-none max-w-lg",
    header: "pb-4 border-b border-white/20",
    title: "text-xl font-black uppercase tracking-wider text-white",
    description: "text-sm font-serif text-gray-300 mt-2",
    footer: "gap-3 pt-6 border-t border-white/20",
  },
  layout: {
    sidebar: "bg-black/90 border-r-2 border-white/30 backdrop-blur-sm",
    sidebarItem: "block px-4 py-3 text-sm font-serif text-gray-300 hover:bg-white/10 hover:text-white border-b border-white/10 transition-all duration-150",
    sidebarItemActive: "bg-white/15 text-white border-white/30",
    topbar: "border-b-2 border-white/30 bg-black/90 backdrop-blur-sm",
    content: "bg-transparent p-8",
    section: "mb-8",
    sectionTitle: "text-3xl font-black uppercase tracking-wide text-white mb-6 border-b-2 border-white/20 pb-3",
  },
}
