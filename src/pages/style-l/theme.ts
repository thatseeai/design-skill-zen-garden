// Style L: Neon Kawaii Pop Theme
// Hyper-cute manga palette with neon pink/cyan contrast and halftone overlays.

export const themeClassName = "style-l-theme"

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=M+PLUS+Rounded+1c:wght@400;500;700;800&display=swap');

  .style-l-theme {
    --background: 292 96% 95%;
    --foreground: 248 48% 26%;
    --card: 300 100% 99%;
    --card-foreground: 248 48% 26%;
    --popover: 300 100% 99%;
    --popover-foreground: 248 48% 26%;
    --primary: 316 95% 63%;
    --primary-foreground: 0 0% 100%;
    --secondary: 185 97% 74%;
    --secondary-foreground: 248 48% 26%;
    --muted: 282 72% 90%;
    --muted-foreground: 255 30% 46%;
    --accent: 267 95% 72%;
    --accent-foreground: 248 48% 26%;
    --destructive: 356 89% 66%;
    --destructive-foreground: 0 0% 100%;
    --border: 277 84% 80%;
    --input: 277 84% 80%;
    --ring: 188 98% 64%;
    --radius: 18px;

    font-family: 'M PLUS Rounded 1c', sans-serif;
    background:
      radial-gradient(circle at 15% 6%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 32%),
      radial-gradient(circle at 82% 14%, rgba(108, 251, 255, 0.45) 0%, rgba(108, 251, 255, 0) 35%),
      linear-gradient(160deg, #ffd3f5 0%, #f8d7ff 42%, #d8f8ff 100%);
    color: hsl(var(--foreground));
    position: relative;
    overflow: hidden;
  }

  .style-l-theme .font-heading,
  .style-l-theme h1,
  .style-l-theme h2,
  .style-l-theme h3 {
    font-family: 'Cherry Bomb One', system-ui;
    letter-spacing: 0.01em;
  }

  .style-l-theme .l-halftone {
    background-image:
      radial-gradient(circle at 3px 3px, rgba(137, 87, 255, 0.2) 1.4px, transparent 1.6px),
      radial-gradient(circle at 3px 3px, rgba(99, 240, 255, 0.18) 1.2px, transparent 1.5px);
    background-position: 0 0, 12px 12px;
    background-size: 24px 24px;
  }

  .style-l-theme .l-pop-surface {
    border: 2px solid rgba(132, 92, 236, 0.7);
    background: linear-gradient(180deg, rgba(255, 248, 255, 0.96), rgba(251, 243, 255, 0.92));
    box-shadow:
      0 0 0 3px rgba(255, 255, 255, 0.78),
      0 14px 26px rgba(101, 73, 178, 0.22);
  }

  .style-l-theme .deco-heart {
    width: 34px;
    height: 34px;
    transform: rotate(-45deg);
    border-radius: 10px 10px 4px 4px;
    border: 2px solid rgba(255, 255, 255, 0.82);
    background: linear-gradient(135deg, rgba(255, 111, 224, 1), rgba(143, 116, 255, 0.95));
    box-shadow:
      0 0 0 2px rgba(116, 88, 219, 0.66),
      0 8px 18px rgba(87, 48, 158, 0.34);
  }

  .style-l-theme .deco-heart::before,
  .style-l-theme .deco-heart::after {
    content: "";
    position: absolute;
    width: 34px;
    height: 34px;
    border-radius: 999px;
    border: 2px solid rgba(255, 255, 255, 0.82);
    background: linear-gradient(135deg, rgba(255, 111, 224, 1), rgba(143, 116, 255, 0.95));
  }

  .style-l-theme .deco-heart::before {
    top: -18px;
    left: -2px;
  }

  .style-l-theme .deco-heart::after {
    top: -2px;
    left: 14px;
  }

  .style-l-theme .deco-burst {
    position: relative;
    width: 64px;
    height: 12px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.95), rgba(105, 248, 255, 0.92), rgba(255, 150, 236, 0.92));
    box-shadow:
      0 0 0 2px rgba(110, 220, 255, 0.5),
      0 0 18px rgba(109, 238, 255, 0.5);
  }

  .style-l-theme .deco-burst::before,
  .style-l-theme .deco-burst::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 999px;
    background: inherit;
    box-shadow: inherit;
  }

  .style-l-theme .deco-burst::before {
    transform: rotate(90deg);
  }

  .style-l-theme .deco-burst::after {
    transform: rotate(42deg);
  }

  .dark .style-l-theme {
    --background: 252 47% 13%;
    --foreground: 293 58% 95%;
    --card: 254 45% 18%;
    --card-foreground: 293 58% 95%;
    --popover: 254 45% 18%;
    --popover-foreground: 293 58% 95%;
    --primary: 315 100% 72%;
    --primary-foreground: 253 48% 14%;
    --secondary: 187 100% 72%;
    --secondary-foreground: 253 48% 14%;
    --muted: 257 25% 30%;
    --muted-foreground: 284 32% 84%;
    --accent: 270 90% 70%;
    --accent-foreground: 253 48% 14%;
    --destructive: 357 86% 72%;
    --destructive-foreground: 253 48% 14%;
    --border: 260 34% 50%;
    --input: 260 34% 50%;
    --ring: 186 100% 72%;
    background:
      radial-gradient(circle at 15% 6%, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 32%),
      radial-gradient(circle at 82% 14%, rgba(95, 247, 255, 0.16) 0%, rgba(95, 247, 255, 0) 36%),
      linear-gradient(155deg, #201336 0%, #281d4a 46%, #17314f 100%);
  }

  .dark .style-l-theme .l-pop-surface {
    border: 2px solid rgba(123, 95, 211, 0.84);
    background: linear-gradient(180deg, rgba(53, 38, 87, 0.95), rgba(43, 30, 73, 0.93));
    box-shadow:
      0 0 0 3px rgba(255, 255, 255, 0.08),
      0 14px 26px rgba(9, 6, 22, 0.42);
  }

  .dark .style-l-theme .l-halftone {
    background-image:
      radial-gradient(circle at 3px 3px, rgba(180, 143, 255, 0.24) 1.4px, transparent 1.6px),
      radial-gradient(circle at 3px 3px, rgba(100, 231, 255, 0.22) 1.2px, transparent 1.5px);
  }
`
