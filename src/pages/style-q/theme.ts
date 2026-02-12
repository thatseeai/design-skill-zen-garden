// Style Q: Y2K Glossy UI
// Chrome-like highlights, jelly buttons, and reflective layers.

export const themeClassName = "style-q-theme"

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;800&family=Inter:wght@400;500;600;700&display=swap');

  .style-q-theme {
    --background: 226 57% 14%;
    --foreground: 218 100% 96%;
    --card: 223 46% 24%;
    --card-foreground: 218 100% 96%;
    --popover: 223 46% 24%;
    --popover-foreground: 218 100% 96%;
    --primary: 190 100% 68%;
    --primary-foreground: 230 55% 12%;
    --secondary: 262 90% 76%;
    --secondary-foreground: 230 55% 12%;
    --muted: 225 40% 28%;
    --muted-foreground: 220 52% 81%;
    --accent: 321 100% 74%;
    --accent-foreground: 230 55% 12%;
    --destructive: 0 100% 70%;
    --destructive-foreground: 230 55% 12%;
    --border: 225 48% 43%;
    --input: 225 48% 43%;
    --ring: 190 100% 68%;
    --radius: 14px;

    font-family: 'Inter', sans-serif;
    color: hsl(var(--foreground));
    background:
      radial-gradient(circle at 14% 18%, rgba(94, 227, 255, 0.34) 0%, rgba(94, 227, 255, 0) 34%),
      radial-gradient(circle at 86% 14%, rgba(178, 137, 255, 0.3) 0%, rgba(178, 137, 255, 0) 34%),
      linear-gradient(150deg, #0f1635 0%, #1d2f62 45%, #2e3f78 100%);
    position: relative;
    overflow: hidden;
  }

  .style-q-theme::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(120deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 34%),
      repeating-linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.06) 0px,
        rgba(255, 255, 255, 0.06) 2px,
        transparent 2px,
        transparent 24px
      );
    z-index: 0;
  }

  .style-q-theme .font-heading,
  .style-q-theme h1,
  .style-q-theme h2,
  .style-q-theme h3 {
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .style-q-theme .glossy-shell {
    border: 1px solid rgba(144, 174, 255, 0.45);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.04) 18%, rgba(255, 255, 255, 0.02) 100%),
      linear-gradient(160deg, rgba(34, 55, 106, 0.96), rgba(20, 30, 64, 0.96));
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.35),
      inset 0 -1px 0 rgba(0, 0, 0, 0.3),
      0 12px 28px rgba(7, 10, 30, 0.42);
  }

  .dark .style-q-theme {
    --background: 226 57% 14%;
    --foreground: 218 100% 96%;
    --card: 223 46% 24%;
    --card-foreground: 218 100% 96%;
    --popover: 223 46% 24%;
    --popover-foreground: 218 100% 96%;
    --primary: 190 100% 68%;
    --primary-foreground: 230 55% 12%;
    --secondary: 262 90% 76%;
    --secondary-foreground: 230 55% 12%;
    --muted: 225 40% 28%;
    --muted-foreground: 220 52% 81%;
    --accent: 321 100% 74%;
    --accent-foreground: 230 55% 12%;
    --destructive: 0 100% 70%;
    --destructive-foreground: 230 55% 12%;
    --border: 225 48% 43%;
    --input: 225 48% 43%;
    --ring: 190 100% 68%;
  }
`
