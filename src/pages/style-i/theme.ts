// Style I: Premium Care Editorial Theme
// Clean light surfaces, large rounded cards, restrained blue accents.

export const themeClassName = "style-i-theme"

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

  .style-i-theme {
    --background: 240 14% 96%;
    --foreground: 240 6% 12%;
    --card: 0 0% 100%;
    --card-foreground: 240 6% 12%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 6% 12%;
    --primary: 212 100% 40%;
    --primary-foreground: 0 0% 100%;
    --secondary: 240 8% 92%;
    --secondary-foreground: 240 7% 20%;
    --muted: 240 8% 92%;
    --muted-foreground: 240 5% 34%;
    --accent: 211 100% 58%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 72% 46%;
    --destructive-foreground: 0 0% 100%;
    --border: 240 8% 83%;
    --input: 240 8% 83%;
    --ring: 212 100% 40%;
    --radius: 14px;

    font-family: 'Manrope', sans-serif;
    background:
      radial-gradient(circle at 78% 74%, rgba(76, 163, 255, 0.3) 0%, rgba(76, 163, 255, 0) 26%),
      radial-gradient(circle at 22% 18%, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0) 36%),
      #f5f5f7;
    color: hsl(var(--foreground));
    position: relative;
    overflow: hidden;
  }

  .style-i-theme::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(245, 245, 247, 0.22) 100%);
    z-index: 0;
  }

  .style-i-theme .care-panel {
    border: 1px solid rgba(210, 210, 215, 0.95);
    border-radius: 28px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(247, 247, 249, 0.9));
    box-shadow: 0 12px 30px rgba(17, 17, 26, 0.08);
  }

  .dark .style-i-theme {
    --background: 228 17% 12%;
    --foreground: 220 18% 92%;
    --card: 228 15% 16%;
    --card-foreground: 220 18% 92%;
    --popover: 228 15% 16%;
    --popover-foreground: 220 18% 92%;
    --primary: 211 94% 66%;
    --primary-foreground: 224 24% 12%;
    --secondary: 228 12% 22%;
    --secondary-foreground: 220 14% 90%;
    --muted: 228 11% 22%;
    --muted-foreground: 220 10% 72%;
    --accent: 211 94% 66%;
    --accent-foreground: 224 24% 12%;
    --destructive: 0 80% 62%;
    --destructive-foreground: 224 24% 12%;
    --border: 228 10% 30%;
    --input: 228 10% 30%;
    --ring: 211 94% 66%;

    background:
      radial-gradient(circle at 82% 76%, rgba(79, 163, 255, 0.22) 0%, rgba(79, 163, 255, 0) 26%),
      linear-gradient(180deg, rgba(17, 20, 30, 0.96) 0%, rgba(22, 28, 40, 0.95) 100%);
  }

  .dark .style-i-theme::before {
    background: linear-gradient(180deg, rgba(9, 12, 18, 0.2) 0%, rgba(18, 24, 35, 0.46) 100%);
  }

  .dark .style-i-theme .care-panel {
    border: 1px solid rgba(58, 66, 84, 0.95);
    background: linear-gradient(180deg, rgba(34, 41, 55, 0.96), rgba(29, 35, 48, 0.94));
    box-shadow: 0 14px 30px rgba(8, 10, 16, 0.34);
  }
`
