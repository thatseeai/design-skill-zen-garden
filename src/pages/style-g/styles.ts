import type { StylePreset } from "@/components/StandardShowcase"

export const styles: StylePreset = {
    card: {
        wrapper: "bg-white/90 border-none shadow-sm rounded-none mb-6 relative hover:bg-white transition-colors duration-300",
        header: "pb-2 border-b border-stone-200",
        title: "text-xl font-serif text-stone-700 font-bold",
        description: "text-stone-500 font-serif italic",
        content: "pt-4",
    },
    kpi: {
        wrapper: "bg-white/60",
        title: "text-stone-600 font-serif",
        value: "text-4xl font-serif text-[#9e2a2b]", // Zen Acccent Red
        badge: {
            positive: "bg-[#4a6c45]/20 text-[#2c4a29] hover:bg-[#4a6c45]/30 rounded-none", // Zen Green
            negative: "bg-[#9e2a2b]/10 text-[#9e2a2b] hover:bg-[#9e2a2b]/20 rounded-none",
        },
    },
    tabs: {
        list: "bg-transparent border-b border-stone-300 w-full justify-start rounded-none p-0 h-auto",
        trigger: "rounded-none border-b-2 border-transparent data-[state=active]:border-[#9e2a2b] data-[state=active]:bg-transparent data-[state=active]:text-[#9e2a2b] data-[state=active]:shadow-none px-4 py-2 font-serif text-lg",
        content: "mt-4 outline-none",
    },
    table: {
        wrapper: "border-stone-200 rounded-none",
        header: "bg-[#4a6c45]/10",
        headerCell: "text-stone-700 font-serif font-bold",
        body: "font-serif",
        row: "hover:bg-[#4a6c45]/5 border-stone-100",
        cell: "text-stone-600",
        statusBadge: {
            active: "bg-[#4a6c45] text-white rounded-none hover:bg-[#2c4a29]",
            inactive: "bg-stone-200 text-stone-600 rounded-none hover:bg-stone-300",
            pending: "bg-[#d4a373] text-white rounded-none hover:bg-[#bc8a5f]", // Sand/Earth tone
        },
    },
    form: {
        wrapper: "font-serif",
        label: "text-stone-700 font-bold",
        input: {
            default: "rounded-none border-stone-300 focus:border-[#9e2a2b] focus:ring-[#9e2a2b]/20 bg-white/50",
            error: "rounded-none border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50",
            disabled: "rounded-none border-stone-200 bg-stone-100/50 text-stone-400",
        },
        select: {
            trigger: "rounded-none border-stone-300 focus:ring-[#9e2a2b]/20 bg-white/50",
            content: "rounded-none border-stone-200",
        },
        textarea: "rounded-none border-stone-300 focus:border-[#9e2a2b] focus:ring-[#9e2a2b]/20 bg-white/50",
        errorMessage: "text-[#9e2a2b] font-serif italic",
    },
    button: {
        primary: "rounded-none bg-[#9e2a2b] hover:bg-[#7a1f20] text-white font-serif tracking-wide shadow-sm",
        secondary: "rounded-none border-[#4a6c45] text-[#2c4a29] hover:bg-[#4a6c45]/10 bg-transparent font-serif",
        ghost: "rounded-none text-stone-600 hover:text-[#9e2a2b] hover:bg-[#9e2a2b]/5 font-serif",
    },
    alert: {
        wrapper: "rounded-none border-[#4a6c45] bg-[#4a6c45]/10 text-[#2c4a29]",
        title: "font-serif font-bold",
        description: "font-serif italic",
    },
    modal: {
        overlay: "bg-stone-900/40",
        content: "rounded-none border-none bg-[#fdfbf7] shadow-xl font-serif", // Paper texture color
        header: "border-b border-stone-200 pb-4",
        title: "text-2xl text-[#9e2a2b]",
        description: "text-stone-500",
        footer: "pt-4 border-t border-stone-200",
    },
    layout: {
        sidebar: "bg-[#4a6c45] text-white border-r border-[#2c4a29] shadow-lg md:w-72 relative overflow-hidden",
        sidebarItem: "flex flex-col w-full px-4 py-3 rounded-none hover:bg-[#2c4a29]/40 text-stone-100 hover:text-white font-serif text-lg border-l-4 border-transparent hover:border-[#9e2a2b] transition-all duration-300 text-left whitespace-normal h-auto leading-tight",
        sidebarItemActive: "bg-[#2c4a29]/60 text-white font-bold border-[#9e2a2b]",
        topbar: "bg-white/90 border-b border-stone-200 shadow-sm",
        content: "p-6 md:p-12 scroll-smooth bg-transparent",
        section: "mb-12",
        sectionTitle: "text-3xl md:text-4xl font-serif text-[#9e2a2b] mb-6 pb-4 border-b-2 border-[#4a6c45]/30 relative inline-block after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-1/3 after:h-[2px] after:bg-[#9e2a2b]",
    },
}
