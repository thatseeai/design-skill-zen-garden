// Style R: Organic Wellness
// Earth/leaf/cream palette with paper-like texture and soft depth.

export const themeClassName = "style-r-theme"

const fiberNoise = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220">
    <rect width="220" height="220" fill="transparent"/>
    <g stroke="#ffffff" stroke-opacity="0.08" stroke-width="1.2" fill="none" stroke-linecap="round">
      <path d="M10 22 C32 48, 24 84, 14 114"/>
      <path d="M60 8 C76 34, 78 62, 66 94"/>
      <path d="M108 18 C126 44, 122 74, 114 102"/>
      <path d="M158 12 C174 36, 176 70, 166 104"/>
      <path d="M198 24 C212 50, 208 86, 198 120"/>
      <path d="M18 128 C34 150, 30 180, 20 206"/>
      <path d="M82 124 C96 146, 100 178, 92 206"/>
      <path d="M144 132 C160 156, 158 184, 146 212"/>
    </g>
  </svg>`
)}`

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,650&family=Inter:wght@400;500;600;700&display=swap');

  .style-r-theme {
    --background: 42 44% 93%;
    --foreground: 34 12% 17%;
    --card: 44 40% 96%;
    --card-foreground: 34 12% 17%;
    --popover: 44 40% 96%;
    --popover-foreground: 34 12% 17%;
    --primary: 110 22% 44%;
    --primary-foreground: 44 40% 96%;
    --secondary: 43 25% 78%;
    --secondary-foreground: 34 12% 22%;
    --muted: 45 24% 86%;
    --muted-foreground: 35 12% 36%;
    --accent: 110 22% 44%;
    --accent-foreground: 44 40% 96%;
    --destructive: 10 70% 53%;
    --destructive-foreground: 0 0% 100%;
    --border: 35 28% 74%;
    --input: 35 28% 74%;
    --ring: 110 22% 44%;
    --radius: 14px;

    font-family: 'Inter', sans-serif;
    color: hsl(var(--foreground));
    background:
      radial-gradient(circle at 16% 14%, rgba(205, 216, 190, 0.35) 0%, rgba(205, 216, 190, 0) 32%),
      radial-gradient(circle at 84% 18%, rgba(122, 90, 59, 0.18) 0%, rgba(122, 90, 59, 0) 34%),
      linear-gradient(180deg, #f6f0e3 0%, #efe5d3 100%);
    position: relative;
    overflow: hidden;
  }

  .style-r-theme::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)),
      url('${fiberNoise}');
    opacity: 0.55;
    mix-blend-mode: soft-light;
    z-index: 0;
  }

  .style-r-theme .font-heading,
  .style-r-theme h1,
  .style-r-theme h2,
  .style-r-theme h3 {
    font-family: 'Fraunces', serif;
    letter-spacing: 0.005em;
  }

  .style-r-theme .organic-surface {
    border: 1px solid rgba(216, 204, 183, 0.95);
    background: linear-gradient(180deg, rgba(244, 237, 220, 0.92), rgba(239, 230, 211, 0.88));
    box-shadow:
      0 10px 26px rgba(47, 42, 36, 0.14),
      inset 0 1px 0 rgba(255, 255, 255, 0.34);
  }

  .dark .style-r-theme {
    --background: 30 12% 13%;
    --foreground: 45 30% 89%;
    --card: 31 12% 17%;
    --card-foreground: 45 30% 89%;
    --popover: 31 12% 17%;
    --popover-foreground: 45 30% 89%;
    --primary: 108 20% 55%;
    --primary-foreground: 30 12% 13%;
    --secondary: 30 10% 28%;
    --secondary-foreground: 45 26% 84%;
    --muted: 30 9% 25%;
    --muted-foreground: 40 18% 70%;
    --accent: 108 20% 55%;
    --accent-foreground: 30 12% 13%;
    --destructive: 12 72% 62%;
    --destructive-foreground: 30 12% 13%;
    --border: 32 14% 34%;
    --input: 32 14% 34%;
    --ring: 108 20% 55%;
    background:
      radial-gradient(circle at 16% 14%, rgba(95, 138, 87, 0.2) 0%, rgba(95, 138, 87, 0) 32%),
      radial-gradient(circle at 84% 18%, rgba(182, 144, 93, 0.14) 0%, rgba(182, 144, 93, 0) 34%),
      linear-gradient(180deg, #1f1b17 0%, #171411 100%);
  }

  .dark .style-r-theme::before {
    opacity: 0.24;
    mix-blend-mode: normal;
  }

  .dark .style-r-theme .organic-surface {
    border: 1px solid rgba(96, 84, 66, 0.9);
    background: linear-gradient(180deg, rgba(53, 46, 38, 0.95), rgba(44, 38, 31, 0.92));
    box-shadow:
      0 10px 26px rgba(0, 0, 0, 0.34),
      inset 0 1px 0 rgba(255, 255, 255, 0.07);
  }
`
