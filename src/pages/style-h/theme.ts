// Style H: Korean Dancheong Theme
// Decorative geometry, obangsaek palette, and wooden frame motifs.

export const themeClassName = "style-h-theme"

const dancheongBandSvg = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="48" viewBox="0 0 1200 48">
    <rect width="1200" height="48" fill="#1f2430"/>
    <g opacity="0.95">
      <rect x="0" y="0" width="1200" height="4" fill="#d39b2a"/>
      <rect x="0" y="44" width="1200" height="4" fill="#d39b2a"/>
      <path d="M0 24 H1200" stroke="#0f7a72" stroke-width="6"/>
      <path d="M0 24 H1200" stroke="#b4382f" stroke-width="2"/>
      <g fill="#f7f2e8">
        <circle cx="40" cy="24" r="4"/>
        <circle cx="160" cy="24" r="4"/>
        <circle cx="280" cy="24" r="4"/>
        <circle cx="400" cy="24" r="4"/>
        <circle cx="520" cy="24" r="4"/>
        <circle cx="640" cy="24" r="4"/>
        <circle cx="760" cy="24" r="4"/>
        <circle cx="880" cy="24" r="4"/>
        <circle cx="1000" cy="24" r="4"/>
        <circle cx="1120" cy="24" r="4"/>
      </g>
    </g>
  </svg>`
)}`

const dancheongFlowerSvg = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
    <defs>
      <radialGradient id="petalBlue" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="#2da39b"/>
        <stop offset="100%" stop-color="#0f7a72"/>
      </radialGradient>
      <radialGradient id="petalRed" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="#d45b52"/>
        <stop offset="100%" stop-color="#b4382f"/>
      </radialGradient>
    </defs>
    <rect width="160" height="160" fill="none"/>
    <g transform="translate(80 80)">
      <circle r="10" fill="#f7f2e8" stroke="#d39b2a" stroke-width="3"/>
      <ellipse rx="9" ry="28" fill="url(#petalBlue)" transform="rotate(0) translate(0 -34)"/>
      <ellipse rx="9" ry="28" fill="url(#petalRed)" transform="rotate(60) translate(0 -34)"/>
      <ellipse rx="9" ry="28" fill="url(#petalBlue)" transform="rotate(120) translate(0 -34)"/>
      <ellipse rx="9" ry="28" fill="url(#petalRed)" transform="rotate(180) translate(0 -34)"/>
      <ellipse rx="9" ry="28" fill="url(#petalBlue)" transform="rotate(240) translate(0 -34)"/>
      <ellipse rx="9" ry="28" fill="url(#petalRed)" transform="rotate(300) translate(0 -34)"/>
      <circle r="34" fill="none" stroke="#d39b2a" stroke-width="2" opacity="0.7"/>
    </g>
  </svg>`
)}`

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Noto+Serif+KR:wght@500;700&display=swap');

  .style-h-theme {
    --background: 38 45% 95%;
    --foreground: 224 18% 18%;
    --card: 38 42% 97%;
    --card-foreground: 224 18% 18%;
    --popover: 38 42% 97%;
    --popover-foreground: 224 18% 18%;
    --primary: 175 78% 27%;
    --primary-foreground: 44 100% 96%;
    --secondary: 4 60% 45%;
    --secondary-foreground: 44 100% 96%;
    --muted: 40 35% 90%;
    --muted-foreground: 224 16% 35%;
    --accent: 41 67% 50%;
    --accent-foreground: 224 18% 18%;
    --destructive: 356 74% 47%;
    --destructive-foreground: 0 0% 100%;
    --border: 38 44% 72%;
    --input: 38 44% 72%;
    --ring: 175 78% 27%;
    --radius: 4px;

    font-family: 'Noto Sans KR', sans-serif;
    background:
      linear-gradient(180deg, rgba(138, 90, 59, 0.11), rgba(138, 90, 59, 0.06)),
      linear-gradient(120deg, rgba(211, 155, 42, 0.08), rgba(15, 122, 114, 0.08)),
      #f7f2e8;
    color: hsl(var(--foreground));
    position: relative;
    overflow: hidden;
  }

  .style-h-theme::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image:
      repeating-linear-gradient(90deg, transparent 0, transparent 132px, rgba(31, 36, 48, 0.035) 132px, rgba(31, 36, 48, 0.035) 136px),
      repeating-linear-gradient(0deg, transparent 0, transparent 92px, rgba(15, 122, 114, 0.04) 92px, rgba(15, 122, 114, 0.04) 96px);
    z-index: 0;
  }

  .style-h-theme::after {
    content: "";
    position: fixed;
    left: 24px;
    bottom: 24px;
    width: 132px;
    height: 132px;
    background-image: url('${dancheongFlowerSvg}');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.26;
    pointer-events: none;
    z-index: 0;
  }

  .style-h-theme .font-heading,
  .style-h-theme h1,
  .style-h-theme h2,
  .style-h-theme h3 {
    font-family: 'Noto Serif KR', serif;
    letter-spacing: 0.01em;
  }

  .style-h-theme .dancheong-band {
    background-image: url('${dancheongBandSvg}');
    background-size: 600px 24px;
    background-repeat: repeat-x;
    background-position: center;
    border-top: 2px solid #d39b2a;
    border-bottom: 2px solid #d39b2a;
  }

  .style-h-theme .dancheong-frame {
    border: 2px solid rgba(211, 155, 42, 0.85);
    box-shadow:
      inset 0 0 0 2px rgba(31, 36, 48, 0.14),
      0 10px 26px rgba(31, 36, 48, 0.16);
    background: linear-gradient(180deg, rgba(247, 242, 232, 0.9), rgba(247, 242, 232, 0.74));
    position: relative;
  }

  .style-h-theme .dancheong-frame::before {
    content: "";
    position: absolute;
    inset: 6px;
    border: 1px solid rgba(15, 122, 114, 0.35);
    pointer-events: none;
  }

  .style-h-theme ::selection {
    background: rgba(15, 122, 114, 0.28);
    color: #1f2430;
  }

  .dark .style-h-theme {
    --background: 222 30% 12%;
    --foreground: 45 78% 93%;
    --card: 222 28% 16%;
    --card-foreground: 45 78% 93%;
    --popover: 222 28% 16%;
    --popover-foreground: 45 78% 93%;
    --primary: 175 62% 40%;
    --primary-foreground: 222 30% 12%;
    --secondary: 4 66% 56%;
    --secondary-foreground: 45 78% 93%;
    --muted: 223 22% 22%;
    --muted-foreground: 224 14% 34%;
    --accent: 41 72% 56%;
    --accent-foreground: 222 30% 12%;
    --border: 41 44% 42%;
    --input: 41 44% 42%;
    --ring: 175 62% 40%;

    background:
      linear-gradient(180deg, rgba(10, 12, 18, 0.95), rgba(22, 17, 12, 0.95)),
      #131722;
  }

  .dark .style-h-theme::before {
    background-image:
      repeating-linear-gradient(90deg, transparent 0, transparent 150px, rgba(211, 155, 42, 0.022) 150px, rgba(211, 155, 42, 0.022) 154px),
      repeating-linear-gradient(0deg, transparent 0, transparent 100px, rgba(15, 122, 114, 0.018) 100px, rgba(15, 122, 114, 0.018) 104px);
  }

  .dark .style-h-theme::after {
    opacity: 0.16;
  }
`
