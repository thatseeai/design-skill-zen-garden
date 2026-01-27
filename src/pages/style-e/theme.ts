export const theme = {
  // Core Colors - Monochromatic Dark Industrial
  colors: {
    background: '#1a1a1a',
    surface: 'rgba(0, 0, 0, 0.85)',
    surfaceLight: 'rgba(0, 0, 0, 0.7)',
    border: 'rgba(255, 255, 255, 0.3)',
    borderSubtle: 'rgba(255, 255, 255, 0.15)',
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
      muted: '#999999',
    },
    accent: '#ffffff',
    overlay: 'rgba(0, 0, 0, 0.6)',
  },

  // Typography - Extreme Scale Contrast
  typography: {
    display: {
      fontFamily: "'Impact', 'Arial Black', sans-serif",
      fontSize: '4rem',
      fontWeight: '900',
      lineHeight: '1',
      letterSpacing: '0.02em',
      textTransform: 'uppercase' as const,
    },
    heading: {
      fontFamily: "'Impact', 'Arial Black', sans-serif",
      fontSize: '1.5rem',
      fontWeight: '700',
      lineHeight: '1.2',
      textTransform: 'uppercase' as const,
    },
    body: {
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.6',
    },
    label: {
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontSize: '0.75rem',
      fontWeight: '400',
      lineHeight: '1.4',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
    },
  },

  // Spacing - Frame-based Layout
  spacing: {
    frameInner: '2rem',
    frameLarge: '3rem',
    section: '1.5rem',
    element: '1rem',
    compact: '0.5rem',
  },

  // Layout Dimensions
  layout: {
    sidebarWidth: '300px',
    contentMaxWidth: '1200px',
    frameGap: '1rem',
  },

  // Border & Structure
  border: {
    width: '2px',
    widthThick: '3px',
    widthThin: '1px',
    radius: '0px',
  },

  // Z-index Layering
  zIndex: {
    background: 0,
    backgroundOverlay: 1,
    contentFrame: 10,
    sidebar: 20,
    header: 30,
    modal: 100,
  },
};

// Component Style Presets
export const componentStyles = {
  // Frame container for content sections
  frame: `
    bg-black/85
    border-2 border-white/30
    backdrop-blur-sm
  `,

  // Display heading (massive, uppercase)
  displayHeading: `
    font-black
    text-6xl md:text-7xl lg:text-8xl
    uppercase
    tracking-wide
    leading-none
    text-white
  `,

  // Section heading
  sectionHeading: `
    font-bold
    text-2xl
    uppercase
    tracking-wide
    text-white
    mb-4
  `,

  // Body text
  bodyText: `
    font-serif
    text-sm
    leading-relaxed
    text-gray-300
  `,

  // Label text
  labelText: `
    font-serif
    text-xs
    uppercase
    tracking-wider
    text-gray-400
  `,

  // Button - Primary
  buttonPrimary: `
    px-6 py-3
    bg-white
    text-black
    font-bold
    uppercase
    text-sm
    tracking-wider
    border-2 border-white
    transition-all
    hover:bg-black hover:text-white
  `,

  // Button - Secondary
  buttonSecondary: `
    px-6 py-3
    bg-transparent
    text-white
    font-bold
    uppercase
    text-sm
    tracking-wider
    border-2 border-white/50
    transition-all
    hover:border-white hover:bg-white/10
  `,

  // Input field
  input: `
    w-full
    px-4 py-3
    bg-black/50
    border border-white/30
    text-white
    font-serif
    text-sm
    transition-all
    focus:outline-none focus:border-white focus:bg-black/70
    placeholder:text-gray-500
  `,

  // Table cell
  tableCell: `
    px-4 py-3
    border-b border-white/20
    font-serif
    text-sm
    text-gray-300
  `,

  // Badge
  badge: `
    px-3 py-1
    bg-white/20
    border border-white/40
    text-white
    text-xs
    font-bold
    uppercase
    tracking-wider
  `,

  // Card/KPI
  kpiCard: `
    p-6
    bg-black/70
    border border-white/30
    backdrop-blur-sm
  `,

  // Tab button
  tab: `
    px-6 py-3
    text-sm
    font-bold
    uppercase
    tracking-wider
    text-gray-400
    border-b-2 border-transparent
    transition-all
    hover:text-white hover:border-white/50
  `,

  tabActive: `
    text-white
    border-white
  `,

  // Sidebar navigation
  navLink: `
    block
    py-2
    text-sm
    font-serif
    text-gray-300
    border-b border-white/10
    transition-colors
    hover:text-white hover:border-white/30
  `,

  // Background overlay
  backgroundOverlay: `
    absolute
    inset-0
    bg-black/60
    z-[1]
  `,

  // Content container
  contentContainer: `
    relative
    z-10
    min-h-screen
  `,
};

export default theme;
