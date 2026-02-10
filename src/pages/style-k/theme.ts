// Style K: Pastel Sticker Pack Theme
// Playful sticker-board mood with rounded outlines and clear readability.

export const themeClassName = "style-k-theme"

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;500;600;700;800&display=swap');

  .style-k-theme {
    --background: 308 38% 89%;
    --foreground: 264 30% 20%;
    --card: 300 70% 98%;
    --card-foreground: 264 30% 20%;
    --popover: 300 70% 98%;
    --popover-foreground: 264 30% 20%;
    --primary: 261 35% 58%;
    --primary-foreground: 0 0% 100%;
    --secondary: 92 53% 71%;
    --secondary-foreground: 260 28% 24%;
    --muted: 286 34% 84%;
    --muted-foreground: 274 24% 36%;
    --accent: 52 80% 70%;
    --accent-foreground: 260 28% 24%;
    --destructive: 7 82% 70%;
    --destructive-foreground: 260 28% 24%;
    --border: 266 38% 76%;
    --input: 266 38% 76%;
    --ring: 261 35% 58%;
    --radius: 16px;

    font-family: 'Nunito', sans-serif;
    background:
      radial-gradient(circle at 12% 6%, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0) 36%),
      linear-gradient(180deg, #f2d9ec 0%, #ebd3e8 100%);
    color: hsl(var(--foreground));
    position: relative;
    overflow: hidden;
  }

  .style-k-theme::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0));
    z-index: 0;
  }

  .style-k-theme .font-heading,
  .style-k-theme h1,
  .style-k-theme h2,
  .style-k-theme h3 {
    font-family: 'Baloo 2', sans-serif;
    letter-spacing: 0.005em;
  }

  .style-k-theme .sticker-surface {
    border: 2px solid rgba(185, 165, 214, 0.88);
    background: linear-gradient(180deg, rgba(255, 247, 255, 0.96), rgba(250, 240, 254, 0.92));
    box-shadow: 0 10px 26px rgba(95, 66, 132, 0.18);
  }

  .style-k-theme .sticker-cut {
    border: 3px solid rgba(255, 255, 255, 0.92);
    box-shadow:
      0 0 0 2px rgba(171, 146, 206, 0.86),
      0 8px 18px rgba(95, 66, 132, 0.2);
  }

  .dark .style-k-theme {
    --background: 267 27% 16%;
    --foreground: 292 36% 90%;
    --card: 268 24% 20%;
    --card-foreground: 292 36% 90%;
    --popover: 268 24% 20%;
    --popover-foreground: 292 36% 90%;
    --primary: 266 55% 70%;
    --primary-foreground: 268 30% 16%;
    --secondary: 97 44% 62%;
    --secondary-foreground: 268 30% 16%;
    --muted: 266 20% 28%;
    --muted-foreground: 290 20% 78%;
    --accent: 49 72% 66%;
    --accent-foreground: 268 30% 16%;
    --destructive: 8 86% 72%;
    --destructive-foreground: 268 30% 16%;
    --border: 267 26% 40%;
    --input: 267 26% 40%;
    --ring: 266 55% 70%;
    background:
      radial-gradient(circle at 12% 6%, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0) 36%),
      linear-gradient(180deg, #2e2240 0%, #271c37 100%);
  }

  .dark .style-k-theme .sticker-surface {
    border: 2px solid rgba(104, 84, 138, 0.9);
    background: linear-gradient(180deg, rgba(61, 46, 84, 0.95), rgba(52, 39, 75, 0.93));
    box-shadow: 0 10px 26px rgba(7, 5, 14, 0.34);
  }

  .dark .style-k-theme .sticker-cut {
    border: 3px solid rgba(247, 239, 255, 0.2);
    box-shadow:
      0 0 0 2px rgba(104, 84, 138, 0.9),
      0 8px 18px rgba(7, 5, 14, 0.35);
  }
`
