// Style N: Luxury Editorial
// Strong hierarchy + restrained palette + refined texture.

export const themeClassName = "style-n-theme"

const linenNoise = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
    <rect width="180" height="180" fill="transparent"/>
    <g fill="#ffffff" opacity="0.05">
      <circle cx="20" cy="24" r="1"/><circle cx="62" cy="38" r="1"/><circle cx="128" cy="20" r="1"/>
      <circle cx="42" cy="78" r="1"/><circle cx="86" cy="66" r="1"/><circle cx="152" cy="84" r="1"/>
      <circle cx="26" cy="124" r="1"/><circle cx="76" cy="104" r="1"/><circle cx="136" cy="128" r="1"/>
      <circle cx="52" cy="156" r="1"/><circle cx="104" cy="164" r="1"/><circle cx="166" cy="148" r="1"/>
    </g>
  </svg>`
)}`

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

  .style-n-theme {
    --background: 35 32% 95%;
    --foreground: 20 10% 10%;
    --card: 38 30% 97%;
    --card-foreground: 20 10% 10%;
    --popover: 38 30% 97%;
    --popover-foreground: 20 10% 10%;
    --primary: 34 37% 54%;
    --primary-foreground: 38 30% 97%;
    --secondary: 30 13% 88%;
    --secondary-foreground: 20 10% 16%;
    --muted: 34 20% 89%;
    --muted-foreground: 28 10% 35%;
    --accent: 34 37% 54%;
    --accent-foreground: 38 30% 97%;
    --destructive: 4 72% 55%;
    --destructive-foreground: 0 0% 100%;
    --border: 30 21% 72%;
    --input: 30 21% 72%;
    --ring: 34 37% 54%;
    --radius: 6px;

    font-family: 'Inter', sans-serif;
    color: hsl(var(--foreground));
    background:
      radial-gradient(circle at 14% 8%, rgba(182, 144, 93, 0.16) 0%, rgba(182, 144, 93, 0) 34%),
      linear-gradient(180deg, #f8f3ea 0%, #f1e9dd 100%);
    position: relative;
    overflow: hidden;
  }

  .style-n-theme::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image: url('${linenNoise}');
    opacity: 0.45;
    mix-blend-mode: soft-light;
    z-index: 0;
  }

  .style-n-theme .font-heading,
  .style-n-theme h1,
  .style-n-theme h2,
  .style-n-theme h3 {
    font-family: 'Cormorant Garamond', serif;
    letter-spacing: 0.01em;
  }

  .style-n-theme .editorial-surface {
    border: 1px solid rgba(182, 144, 93, 0.45);
    background: linear-gradient(180deg, rgba(246, 241, 232, 0.94), rgba(240, 233, 222, 0.9));
    box-shadow: 0 10px 24px rgba(17, 17, 17, 0.14);
  }

  .dark .style-n-theme {
    --background: 24 8% 11%;
    --foreground: 35 26% 90%;
    --card: 24 9% 14%;
    --card-foreground: 35 26% 90%;
    --popover: 24 9% 14%;
    --popover-foreground: 35 26% 90%;
    --primary: 34 37% 58%;
    --primary-foreground: 24 8% 11%;
    --secondary: 24 10% 21%;
    --secondary-foreground: 35 22% 88%;
    --muted: 24 8% 22%;
    --muted-foreground: 35 16% 68%;
    --accent: 34 37% 58%;
    --accent-foreground: 24 8% 11%;
    --destructive: 4 82% 65%;
    --destructive-foreground: 24 8% 11%;
    --border: 28 16% 34%;
    --input: 28 16% 34%;
    --ring: 34 37% 58%;
    background:
      radial-gradient(circle at 14% 8%, rgba(182, 144, 93, 0.13) 0%, rgba(182, 144, 93, 0) 34%),
      linear-gradient(180deg, #171411 0%, #141210 100%);
  }

  .dark .style-n-theme::before {
    opacity: 0.22;
    mix-blend-mode: normal;
  }

  .dark .style-n-theme .editorial-surface {
    border: 1px solid rgba(182, 144, 93, 0.4);
    background: linear-gradient(180deg, rgba(42, 36, 30, 0.94), rgba(34, 30, 25, 0.9));
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.32);
  }
`
