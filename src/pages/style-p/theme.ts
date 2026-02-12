// Style P: Retro Sticker Pop
// Pastel high-saturation palette + thick outline + halftone patterns.

export const themeClassName = "style-p-theme"

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@500;600;700;800&display=swap');

  .style-p-theme {
    --background: 334 100% 97%;
    --foreground: 257 30% 20%;
    --card: 45 100% 98%;
    --card-foreground: 257 30% 20%;
    --popover: 45 100% 98%;
    --popover-foreground: 257 30% 20%;
    --primary: 343 100% 69%;
    --primary-foreground: 0 0% 100%;
    --secondary: 194 100% 70%;
    --secondary-foreground: 257 30% 20%;
    --muted: 280 42% 90%;
    --muted-foreground: 264 20% 36%;
    --accent: 48 100% 65%;
    --accent-foreground: 257 30% 20%;
    --destructive: 4 92% 72%;
    --destructive-foreground: 257 30% 20%;
    --border: 261 38% 64%;
    --input: 261 38% 64%;
    --ring: 343 100% 69%;
    --radius: 18px;

    font-family: 'Nunito', sans-serif;
    background:
      radial-gradient(circle at 12% 12%, rgba(101, 216, 255, 0.24) 0%, rgba(101, 216, 255, 0) 32%),
      radial-gradient(circle at 88% 16%, rgba(255, 216, 77, 0.24) 0%, rgba(255, 216, 77, 0) 30%),
      linear-gradient(180deg, #ffeef7 0%, #fff6ee 100%);
    color: hsl(var(--foreground));
    position: relative;
    overflow: hidden;
  }

  .style-p-theme::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image:
      radial-gradient(rgba(143, 120, 196, 0.22) 1.2px, transparent 1.2px),
      linear-gradient(135deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0));
    background-size: 16px 16px, 100% 100%;
    z-index: 0;
  }

  .style-p-theme .font-heading,
  .style-p-theme h1,
  .style-p-theme h2,
  .style-p-theme h3 {
    font-family: 'Baloo 2', sans-serif;
    letter-spacing: 0.005em;
  }

  .style-p-theme .sticker-pop {
    border: 3px solid rgba(143, 120, 196, 0.92);
    box-shadow:
      0 0 0 4px rgba(255, 255, 255, 0.95),
      0 10px 24px rgba(120, 88, 170, 0.22);
    background: linear-gradient(180deg, rgba(255, 253, 247, 0.98), rgba(255, 249, 239, 0.95));
  }

  .dark .style-p-theme {
    --background: 258 32% 16%;
    --foreground: 300 42% 92%;
    --card: 259 28% 20%;
    --card-foreground: 300 42% 92%;
    --popover: 259 28% 20%;
    --popover-foreground: 300 42% 92%;
    --primary: 343 100% 73%;
    --primary-foreground: 258 30% 16%;
    --secondary: 194 100% 72%;
    --secondary-foreground: 258 30% 16%;
    --muted: 258 22% 28%;
    --muted-foreground: 292 22% 80%;
    --accent: 48 100% 68%;
    --accent-foreground: 258 30% 16%;
    --destructive: 4 92% 72%;
    --destructive-foreground: 258 30% 16%;
    --border: 264 34% 46%;
    --input: 264 34% 46%;
    --ring: 343 100% 73%;
    background:
      radial-gradient(circle at 12% 12%, rgba(101, 216, 255, 0.16) 0%, rgba(101, 216, 255, 0) 32%),
      radial-gradient(circle at 88% 16%, rgba(255, 216, 77, 0.16) 0%, rgba(255, 216, 77, 0) 30%),
      linear-gradient(180deg, #2d2440 0%, #241d34 100%);
  }

  .dark .style-p-theme .sticker-pop {
    border: 3px solid rgba(126, 102, 176, 0.95);
    box-shadow:
      0 0 0 4px rgba(33, 24, 52, 0.9),
      0 10px 24px rgba(8, 6, 16, 0.35);
    background: linear-gradient(180deg, rgba(67, 52, 98, 0.95), rgba(57, 44, 84, 0.92));
  }
`
