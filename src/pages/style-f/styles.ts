import type { StylePreset } from "@/components/StandardShowcase"

// Style-F: Vintage Baroque
// Dark textured backgrounds with aged parchment effects
// Sepia & gold palette with ornamental elements
// Script/serif typography with decorative flourishes
// High contrast, layered depth, Victorian elegance

export const styles: StylePreset = {
  card: {
    wrapper: "vintage-card rounded-lg border-2 border-[#d4a574] shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(244,228,193,0.1)] bg-gradient-to-br from-[#2d2419] to-[#1a1410] relative backdrop-blur-sm",
    header: "pb-3 border-b border-[#8b6f47]/30 relative",
    title: "text-base font-serif font-semibold text-[#f4e4c1] tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]",
    description: "text-sm text-[#c9b18a] font-serif italic",
    content: "pt-4 relative",
  },
  kpi: {
    wrapper: "rounded-lg border-2 border-[#d4a574] bg-gradient-to-br from-[#2d2419] to-[#1a1410] shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(244,228,193,0.1)] relative overflow-hidden",
    title: "text-sm font-serif font-medium text-[#c9b18a] uppercase tracking-widest",
    value: "text-3xl font-serif font-bold text-[#f4e4c1] drop-shadow-[0_2px_8px_rgba(212,165,116,0.4)]",
    badge: {
      positive: "bg-gradient-to-r from-[#d4a574] to-[#f4e4c1] border border-[#f4e4c1]/50 text-[#1a1410] text-xs px-2 py-1 rounded shadow-[0_2px_6px_rgba(212,165,116,0.4)] font-semibold",
      negative: "bg-gradient-to-r from-[#8b6f47] to-[#6b5437] border border-[#8b6f47] text-[#e8d5b7] text-xs px-2 py-1 rounded shadow-[0_2px_6px_rgba(0,0,0,0.4)] font-semibold",
    },
  },
  tabs: {
    list: "bg-[#1a1410] rounded-lg p-1 border border-[#8b6f47]",
    trigger: "rounded-md text-sm font-serif font-medium px-4 py-2 text-[#c9b18a] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4a574] data-[state=active]:to-[#8b6f47] data-[state=active]:text-[#1a1410] data-[state=active]:shadow-[0_2px_8px_rgba(212,165,116,0.4)] transition-all duration-300",
    content: "mt-4",
  },
  table: {
    wrapper: "border-2 border-[#d4a574] rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.6)]",
    header: "bg-gradient-to-r from-[#2d2419] to-[#1a1410] border-b-2 border-[#8b6f47]",
    headerCell: "text-sm font-serif font-bold text-[#f4e4c1] uppercase tracking-widest h-12 px-4",
    body: "bg-[#1a1410]",
    row: "border-b border-[#8b6f47]/30 hover:bg-[#2d2419]/50 transition-all duration-300 hover:shadow-[inset_0_0_12px_rgba(212,165,116,0.1)]",
    cell: "py-3 px-4 text-sm text-[#e8d5b7] font-serif",
    statusBadge: {
      active: "bg-gradient-to-r from-[#d4a574] to-[#f4e4c1] border border-[#f4e4c1]/50 text-[#1a1410] text-xs rounded px-2 py-1 shadow-[0_2px_6px_rgba(212,165,116,0.4)] font-semibold",
      inactive: "bg-gradient-to-r from-[#4a3f33] to-[#3a2f23] border border-[#8b6f47] text-[#c9b18a] text-xs rounded px-2 py-1 shadow-[0_2px_6px_rgba(0,0,0,0.4)]",
      pending: "bg-gradient-to-r from-[#8b6f47] to-[#c9b18a] border border-[#c9b18a]/50 text-[#1a1410] text-xs rounded px-2 py-1 shadow-[0_2px_6px_rgba(201,177,138,0.4)] font-semibold",
    },
  },
  form: {
    wrapper: "",
    label: "text-sm font-serif font-medium text-[#e8d5b7] mb-2 block",
    input: {
      default: "h-10 rounded-md border-2 border-[#8b6f47] bg-[#2d2419] text-[#e8d5b7] text-sm font-serif px-3 focus:ring-2 focus:ring-[#d4a574] focus:border-[#d4a574] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]",
      error: "h-10 rounded-md border-2 border-[#c9563b] bg-[#2d2419] text-[#e8d5b7] text-sm font-serif px-3 focus:ring-2 focus:ring-[#c9563b] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_0_8px_rgba(201,86,59,0.3)]",
      disabled: "h-10 rounded-md bg-[#1a1410] text-[#8b6f47] cursor-not-allowed border-2 border-[#4a3f33] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]",
    },
    select: {
      trigger: "h-10 rounded-md border-2 border-[#8b6f47] bg-[#2d2419] text-[#e8d5b7] text-sm font-serif shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]",
      content: "rounded-md bg-[#2d2419] border-2 border-[#d4a574] shadow-[0_4px_12px_rgba(0,0,0,0.6)]",
    },
    textarea: "rounded-md border-2 border-[#8b6f47] bg-[#2d2419] text-[#e8d5b7] text-sm font-serif min-h-[80px] px-3 py-2 focus:ring-2 focus:ring-[#d4a574] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]",
    errorMessage: "text-xs text-[#e8a598] mt-1 font-serif italic",
  },
  button: {
    primary: "h-10 rounded-md bg-gradient-to-r from-[#d4a574] to-[#f4e4c1] text-[#1a1410] hover:from-[#f4e4c1] hover:to-[#d4a574] text-sm font-serif font-bold px-5 transition-all duration-300 shadow-[0_4px_12px_rgba(212,165,116,0.4)] hover:shadow-[0_6px_16px_rgba(244,228,193,0.5)] hover:scale-[1.02]",
    secondary: "h-10 rounded-md border-2 border-[#8b6f47] bg-transparent text-[#e8d5b7] hover:bg-[#2d2419] text-sm font-serif font-medium px-5 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.4)]",
    ghost: "h-10 rounded-md text-[#c9b18a] hover:bg-[#2d2419]/50 hover:text-[#f4e4c1] text-sm font-serif transition-all duration-300",
  },
  alert: {
    wrapper: "rounded-lg border-2 border-[#d4a574] bg-gradient-to-br from-[#2d2419] to-[#1a1410] shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(244,228,193,0.1)] relative overflow-hidden",
    title: "text-base font-serif font-semibold text-[#f4e4c1]",
    description: "text-sm text-[#c9b18a] font-serif",
  },
  modal: {
    overlay: "bg-black/80 backdrop-blur-sm",
    content: "rounded-lg bg-gradient-to-br from-[#2d2419] to-[#1a1410] border-2 border-[#d4a574] shadow-[0_8px_32px_rgba(0,0,0,0.8)]",
    header: "border-b border-[#8b6f47]/30",
    title: "text-xl font-serif font-bold text-[#f4e4c1] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]",
    description: "text-sm text-[#c9b18a] font-serif italic",
    footer: "gap-3 border-t border-[#8b6f47]/30 pt-4",
  },
  layout: {
    sidebar: "bg-gradient-to-b from-[#1a1410] to-[#0d0a08] border-r-2 border-[#8b6f47] shadow-[4px_0_12px_rgba(0,0,0,0.6)] relative",
    sidebarItem: "block px-4 py-3 text-sm font-serif text-[#c9b18a] hover:bg-[#2d2419]/50 hover:text-[#f4e4c1] rounded-md mx-2 transition-all duration-300 hover:shadow-[inset_0_0_12px_rgba(212,165,116,0.1)] hover:border-l-2 hover:border-[#d4a574]",
    sidebarItemActive: "bg-gradient-to-r from-[#2d2419] to-transparent text-[#f4e4c1] font-semibold border-l-2 border-[#d4a574] shadow-[inset_0_0_12px_rgba(212,165,116,0.2)]",
    topbar: "border-b-2 border-[#8b6f47] bg-gradient-to-r from-[#1a1410] via-[#2d2419] to-[#1a1410] shadow-[0_4px_12px_rgba(0,0,0,0.6)]",
    content: "bg-[#0d0a08] p-6 relative",
    section: "mb-6",
    sectionTitle: "vintage-section-title text-lg font-serif font-bold text-[#f4e4c1] mb-4 pb-2 border-b border-[#8b6f47]/40 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-[2px] after:bg-gradient-to-r after:from-[#d4a574] after:to-transparent",
  },
}
