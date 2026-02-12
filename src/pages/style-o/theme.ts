// Style O: Futuristic Brutalism
// Matte dark base + high-contrast neon accents + layered grid/noise/glow.

export const themeClassName = "style-o-theme"

const noiseTexture = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
    <rect width="180" height="180" fill="transparent"/>
    <g fill="#ffffff" opacity="0.05">
      <circle cx="14" cy="18" r="1"/><circle cx="60" cy="30" r="1"/><circle cx="122" cy="16" r="1"/>
      <circle cx="40" cy="70" r="1"/><circle cx="88" cy="54" r="1"/><circle cx="156" cy="74" r="1"/>
      <circle cx="22" cy="116" r="1"/><circle cx="72" cy="96" r="1"/><circle cx="130" cy="122" r="1"/>
      <circle cx="44" cy="150" r="1"/><circle cx="98" cy="162" r="1"/><circle cx="166" cy="146" r="1"/>
    </g>
  </svg>`
)}`

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;700&display=swap');

  .style-o-theme {
    --background: 216 28% 7%;
    --foreground: 210 100% 96%;
    --card: 215 30% 12%;
    --card-foreground: 210 100% 96%;
    --popover: 215 30% 12%;
    --popover-foreground: 210 100% 96%;
    --primary: 186 100% 50%;
    --primary-foreground: 215 36% 8%;
    --secondary: 325 100% 62%;
    --secondary-foreground: 215 36% 8%;
    --muted: 214 24% 18%;
    --muted-foreground: 212 26% 72%;
    --accent: 83 100% 58%;
    --accent-foreground: 215 36% 8%;
    --destructive: 358 100% 64%;
    --destructive-foreground: 215 36% 8%;
    --border: 210 42% 26%;
    --input: 210 42% 26%;
    --ring: 186 100% 50%;
    --radius: 2px;

    font-family: 'Space Grotesk', sans-serif;
    background:
      radial-gradient(circle at 10% 12%, rgba(255, 63, 164, 0.22), rgba(255, 63, 164, 0) 35%),
      radial-gradient(circle at 84% 20%, rgba(0, 229, 255, 0.16), rgba(0, 229, 255, 0) 40%),
      linear-gradient(180deg, #090d12 0%, #0b1018 100%);
    color: hsl(var(--foreground));
    position: relative;
    overflow: hidden;
  }

  .style-o-theme::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(0, 229, 255, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 229, 255, 0.06) 1px, transparent 1px);
    background-size: 42px 42px;
    z-index: 0;
  }

  .style-o-theme::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image: url('${noiseTexture}');
    opacity: 0.55;
    mix-blend-mode: soft-light;
    z-index: 0;
  }

  .style-o-theme .font-heading,
  .style-o-theme h1,
  .style-o-theme h2,
  .style-o-theme h3 {
    font-family: 'Archivo Black', sans-serif;
    letter-spacing: 0.01em;
    text-transform: uppercase;
  }

  .style-o-theme .neon-frame {
    border: 2px solid rgba(39, 64, 93, 0.95);
    background: linear-gradient(180deg, rgba(19, 26, 36, 0.92), rgba(16, 22, 31, 0.92));
    box-shadow:
      0 0 0 1px rgba(0, 229, 255, 0.14),
      0 0 24px rgba(0, 229, 255, 0.16),
      0 18px 28px rgba(0, 0, 0, 0.45);
  }

  .dark .style-o-theme {
    --background: 216 28% 7%;
    --foreground: 210 100% 96%;
    --card: 215 30% 12%;
    --card-foreground: 210 100% 96%;
    --popover: 215 30% 12%;
    --popover-foreground: 210 100% 96%;
    --primary: 186 100% 50%;
    --primary-foreground: 215 36% 8%;
    --secondary: 325 100% 62%;
    --secondary-foreground: 215 36% 8%;
    --muted: 214 24% 18%;
    --muted-foreground: 212 26% 72%;
    --accent: 83 100% 58%;
    --accent-foreground: 215 36% 8%;
    --destructive: 358 100% 64%;
    --destructive-foreground: 215 36% 8%;
    --border: 210 42% 26%;
    --input: 210 42% 26%;
    --ring: 186 100% 50%;
  }
`
