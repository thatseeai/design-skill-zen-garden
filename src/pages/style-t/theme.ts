// Style T: Binance Exchange (바이낸스)
// Deep near-black canvas, single Binance-yellow accent, flat color-block surfaces.
// Marketing default = dark; transactional = light. Both share yellow CTAs + trading green/red.

export const themeClassName = "style-t-theme"

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');

  /* ── Light mode (transactional surface) ── */
  .style-t-theme {
    --background: 0 0% 100%;
    --foreground: 220 14% 11%;
    --card: 0 0% 100%;
    --card-foreground: 220 14% 11%;
    --popover: 0 0% 100%;
    --popover-foreground: 220 14% 11%;
    --primary: 46 97% 60%;
    --primary-foreground: 220 14% 11%;
    --secondary: 0 0% 96%;
    --secondary-foreground: 220 14% 11%;
    --muted: 0 0% 98%;
    --muted-foreground: 215 9% 49%;
    --accent: 0 0% 96%;
    --accent-foreground: 220 14% 11%;
    --destructive: 351 90% 62%;
    --destructive-foreground: 0 0% 100%;
    --border: 216 16% 93%;
    --input: 216 16% 93%;
    --ring: 217 91% 60%;
    --radius: 8px;

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: hsl(var(--foreground));
    background: #ffffff;
  }

  /* Editorial type — BinanceNova substitute (Inter, tight + bold) */
  .style-t-theme .font-heading,
  .style-t-theme h1,
  .style-t-theme h2,
  .style-t-theme h3 {
    font-family: 'Inter', sans-serif;
    letter-spacing: -0.02em;
  }

  /* Numeric / financial type — BinancePlex substitute (IBM Plex Mono, tabular) */
  .style-t-theme .font-num {
    font-family: 'IBM Plex Mono', 'JetBrains Mono', monospace;
    font-feature-settings: 'tnum' 1;
  }

  /* ── Dark mode (marketing default — signature near-black canvas) ── */
  .dark .style-t-theme {
    --background: 210 21% 6%;
    --foreground: 216 15% 93%;
    --card: 213 15% 14%;
    --card-foreground: 216 15% 93%;
    --popover: 213 15% 14%;
    --popover-foreground: 216 15% 93%;
    --primary: 46 97% 60%;
    --primary-foreground: 220 14% 11%;
    --secondary: 213 15% 20%;
    --secondary-foreground: 216 15% 93%;
    --muted: 213 15% 20%;
    --muted-foreground: 213 9% 61%;
    --accent: 213 15% 20%;
    --accent-foreground: 216 15% 93%;
    --destructive: 351 90% 62%;
    --destructive-foreground: 0 0% 100%;
    --border: 213 15% 20%;
    --input: 213 15% 20%;
    --ring: 217 91% 60%;

    background: #0b0e11;
  }
`
