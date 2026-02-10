// Style J: Fur Couture Theme
// Cozy, tactile, and luxurious tone with warm contrast.

export const themeClassName = "style-j-theme"

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap');

  .style-j-theme {
    --background: 34 38% 93%;
    --foreground: 25 33% 14%;
    --card: 35 55% 97%;
    --card-foreground: 25 33% 14%;
    --popover: 35 55% 97%;
    --popover-foreground: 25 33% 14%;
    --primary: 24 39% 39%;
    --primary-foreground: 34 50% 96%;
    --secondary: 35 38% 84%;
    --secondary-foreground: 25 28% 18%;
    --muted: 35 33% 86%;
    --muted-foreground: 28 25% 31%;
    --accent: 35 48% 58%;
    --accent-foreground: 25 33% 14%;
    --destructive: 2 72% 48%;
    --destructive-foreground: 0 0% 100%;
    --border: 32 35% 73%;
    --input: 32 35% 73%;
    --ring: 24 39% 39%;
    --radius: 16px;

    font-family: 'Manrope', sans-serif;
    background:
      radial-gradient(circle at 84% 20%, rgba(200, 154, 95, 0.22) 0%, rgba(200, 154, 95, 0) 32%),
      linear-gradient(180deg, rgba(255, 250, 244, 0.95), rgba(245, 239, 230, 0.95));
    color: hsl(var(--foreground));
    position: relative;
    overflow: hidden;
  }

  .style-j-theme::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0));
    z-index: 0;
  }

  .style-j-theme .font-heading,
  .style-j-theme h1,
  .style-j-theme h2,
  .style-j-theme h3 {
    font-family: 'Cormorant Garamond', serif;
    letter-spacing: 0.01em;
  }

  .style-j-theme .fur-surface {
    border: 1px solid rgba(214, 194, 170, 0.88);
    background: linear-gradient(180deg, rgba(255, 250, 244, 0.95), rgba(232, 220, 203, 0.8));
    box-shadow: 0 14px 30px rgba(58, 37, 20, 0.16);
  }

  .dark .style-j-theme {
    --background: 24 17% 12%;
    --foreground: 36 42% 90%;
    --card: 24 18% 16%;
    --card-foreground: 36 42% 90%;
    --popover: 24 18% 16%;
    --popover-foreground: 36 42% 90%;
    --primary: 31 46% 62%;
    --primary-foreground: 23 20% 12%;
    --secondary: 23 20% 24%;
    --secondary-foreground: 36 32% 89%;
    --muted: 23 17% 23%;
    --muted-foreground: 34 24% 72%;
    --accent: 35 48% 58%;
    --accent-foreground: 23 20% 12%;
    --destructive: 2 78% 62%;
    --destructive-foreground: 23 20% 12%;
    --border: 25 20% 34%;
    --input: 25 20% 34%;
    --ring: 31 46% 62%;

    background:
      radial-gradient(circle at 84% 20%, rgba(200, 154, 95, 0.18) 0%, rgba(200, 154, 95, 0) 32%),
      linear-gradient(180deg, rgba(28, 22, 18, 0.96), rgba(22, 18, 14, 0.95));
  }

  .dark .style-j-theme::before {
    background: linear-gradient(180deg, rgba(12, 9, 7, 0.52), rgba(12, 9, 7, 0.3));
  }

  .dark .style-j-theme .fur-surface {
    border: 1px solid rgba(97, 73, 53, 0.9);
    background: linear-gradient(180deg, rgba(54, 40, 30, 0.96), rgba(43, 32, 24, 0.94));
    box-shadow: 0 14px 30px rgba(10, 8, 6, 0.35);
  }
`
