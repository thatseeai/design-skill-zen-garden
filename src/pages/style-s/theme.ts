// Style S: Korean Seollal (설날)
// Hanji texture, traditional obangsaek palette, warm golden accents.

export const themeClassName = "style-s-theme"

/* ── Hanji (한지) fiber texture as inline SVG ── */
const hanjiNoise = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
    <rect width="300" height="300" fill="transparent"/>
    <g stroke="#B8A88A" stroke-opacity="0.07" stroke-width="0.8" fill="none" stroke-linecap="round">
      <path d="M12 18 C40 32, 60 14, 90 26"/>
      <path d="M50 60 C72 48, 110 56, 140 44"/>
      <path d="M8 100 C34 88, 56 104, 82 96"/>
      <path d="M120 20 C148 36, 170 22, 200 30"/>
      <path d="M160 72 C186 58, 212 68, 240 56"/>
      <path d="M100 120 C128 108, 154 122, 180 114"/>
      <path d="M20 160 C44 148, 68 162, 96 150"/>
      <path d="M200 110 C224 98, 248 112, 276 102"/>
      <path d="M60 200 C86 188, 108 202, 136 192"/>
      <path d="M140 170 C166 158, 192 170, 218 162"/>
      <path d="M10 240 C36 228, 58 242, 84 232"/>
      <path d="M180 220 C206 208, 230 222, 258 212"/>
      <path d="M80 260 C106 248, 130 262, 158 252"/>
      <path d="M220 260 C244 248, 268 262, 294 252"/>
      <path d="M240 160 C266 148, 288 162, 298 154"/>
      <path d="M30 280 C56 268, 80 282, 108 272"/>
    </g>
  </svg>`
)}`

/* ── Traditional lattice pattern (격자 문양) ── */
const latticePattern = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <rect width="40" height="40" fill="transparent"/>
    <path d="M0 20h40M20 0v40" stroke="#C5A55A" stroke-opacity="0.04" stroke-width="0.5"/>
    <path d="M0 0h40v40H0z" stroke="#C5A55A" stroke-opacity="0.03" stroke-width="0.5" fill="none"/>
  </svg>`
)}`

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@500;700;900&family=Inter:wght@400;500;600;700&display=swap');

  .style-s-theme {
    --background: 38 38% 93%;
    --foreground: 30 18% 12%;
    --card: 40 34% 96%;
    --card-foreground: 30 18% 12%;
    --popover: 40 34% 96%;
    --popover-foreground: 30 18% 12%;
    --primary: 0 55% 51%;
    --primary-foreground: 42 38% 94%;
    --secondary: 214 48% 33%;
    --secondary-foreground: 42 38% 94%;
    --muted: 38 18% 86%;
    --muted-foreground: 36 14% 40%;
    --accent: 43 43% 56%;
    --accent-foreground: 30 18% 12%;
    --destructive: 0 55% 51%;
    --destructive-foreground: 0 0% 100%;
    --border: 36 24% 77%;
    --input: 36 24% 77%;
    --ring: 0 55% 51%;
    --radius: 12px;

    font-family: 'Inter', 'Pretendard', sans-serif;
    color: hsl(var(--foreground));
    background:
      url('${latticePattern}'),
      radial-gradient(ellipse at 18% 12%, rgba(197, 165, 90, 0.12) 0%, transparent 40%),
      radial-gradient(ellipse at 82% 88%, rgba(200, 62, 62, 0.06) 0%, transparent 36%),
      linear-gradient(175deg, #F5EFE0 0%, #EDE5D2 50%, #E8DCC8 100%);
    position: relative;
    overflow: hidden;
  }

  /* Hanji texture overlay */
  .style-s-theme::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: url('${hanjiNoise}');
    opacity: 0.6;
    mix-blend-mode: multiply;
    z-index: 0;
  }

  /* Typography */
  .style-s-theme .font-heading,
  .style-s-theme h1,
  .style-s-theme h2,
  .style-s-theme h3 {
    font-family: 'Noto Serif KR', serif;
    letter-spacing: -0.01em;
  }

  /* Hanji card surface */
  .style-s-theme .hanji-surface {
    border: 1px solid rgba(214, 203, 186, 0.9);
    background: linear-gradient(180deg, rgba(245, 239, 224, 0.95), rgba(237, 229, 210, 0.9));
    box-shadow:
      0 8px 24px rgba(92, 58, 26, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }

  /* Gold accent line for headings */
  .style-s-theme .geumbak-accent {
    position: relative;
  }
  .style-s-theme .geumbak-accent::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 2.4em;
    height: 2px;
    background: linear-gradient(90deg, #C5A55A, rgba(197, 165, 90, 0.3));
    border-radius: 1px;
  }

  /* ─── Dark mode ─── */
  .dark .style-s-theme {
    --background: 28 14% 10%;
    --foreground: 40 28% 88%;
    --card: 28 12% 14%;
    --card-foreground: 40 28% 88%;
    --popover: 28 12% 14%;
    --popover-foreground: 40 28% 88%;
    --primary: 0 58% 55%;
    --primary-foreground: 28 12% 10%;
    --secondary: 214 42% 48%;
    --secondary-foreground: 40 28% 92%;
    --muted: 28 10% 22%;
    --muted-foreground: 38 16% 62%;
    --accent: 43 50% 52%;
    --accent-foreground: 28 12% 10%;
    --destructive: 0 60% 58%;
    --destructive-foreground: 28 12% 10%;
    --border: 30 12% 28%;
    --input: 30 12% 28%;
    --ring: 0 58% 55%;
    background:
      url('${latticePattern}'),
      radial-gradient(ellipse at 18% 12%, rgba(197, 165, 90, 0.08) 0%, transparent 40%),
      radial-gradient(ellipse at 82% 88%, rgba(200, 62, 62, 0.05) 0%, transparent 36%),
      linear-gradient(175deg, #1A1714 0%, #15120F 50%, #110F0D 100%);
  }

  .dark .style-s-theme::before {
    opacity: 0.18;
    mix-blend-mode: screen;
  }

  .dark .style-s-theme .hanji-surface {
    border: 1px solid rgba(80, 70, 55, 0.85);
    background: linear-gradient(180deg, rgba(36, 32, 26, 0.95), rgba(30, 26, 22, 0.92));
    box-shadow:
      0 8px 24px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }
`
