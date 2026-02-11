// Style M: Called Into Bloom Theme
// Poetic, relational, and tender mood inspired by "calling a name into meaning".

export const themeClassName = "style-m-theme"

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Noto+Sans+KR:wght@400;500;700;800&display=swap');

  .style-m-theme {
    --background: 34 42% 96%;
    --foreground: 220 24% 20%;
    --card: 0 0% 100%;
    --card-foreground: 220 24% 20%;
    --popover: 0 0% 100%;
    --popover-foreground: 220 24% 20%;
    --primary: 336 56% 52%;
    --primary-foreground: 0 0% 100%;
    --secondary: 160 28% 66%;
    --secondary-foreground: 220 24% 20%;
    --muted: 38 25% 90%;
    --muted-foreground: 218 13% 39%;
    --accent: 199 56% 62%;
    --accent-foreground: 220 24% 20%;
    --destructive: 358 74% 56%;
    --destructive-foreground: 0 0% 100%;
    --border: 214 20% 82%;
    --input: 214 20% 82%;
    --ring: 336 56% 52%;
    --radius: 16px;

    font-family: 'Noto Sans KR', sans-serif;
    background:
      radial-gradient(circle at 18% 16%, rgba(247, 188, 212, 0.34) 0%, rgba(247, 188, 212, 0) 36%),
      radial-gradient(circle at 84% 22%, rgba(145, 207, 219, 0.3) 0%, rgba(145, 207, 219, 0) 34%),
      linear-gradient(160deg, #f9f4ee 0%, #f5f2f8 46%, #edf5f4 100%);
    color: hsl(var(--foreground));
    position: relative;
    overflow: hidden;
  }

  .style-m-theme .font-heading,
  .style-m-theme h1,
  .style-m-theme h2,
  .style-m-theme h3 {
    font-family: 'Gowun Batang', serif;
    letter-spacing: 0.01em;
  }

  .style-m-theme .m-paper-grain {
    background-image:
      radial-gradient(circle at 2px 2px, rgba(96, 84, 111, 0.1) 0.9px, transparent 1.1px),
      radial-gradient(circle at 2px 2px, rgba(80, 114, 124, 0.08) 0.8px, transparent 1.1px);
    background-size: 18px 18px, 24px 24px;
    background-position: 0 0, 9px 11px;
  }

  .style-m-theme .m-bloom-a {
    background: radial-gradient(circle, rgba(241, 153, 191, 0.56) 0%, rgba(241, 153, 191, 0.2) 42%, rgba(241, 153, 191, 0) 76%);
  }

  .style-m-theme .m-bloom-b {
    background: radial-gradient(circle, rgba(132, 197, 187, 0.48) 0%, rgba(132, 197, 187, 0.18) 42%, rgba(132, 197, 187, 0) 78%);
  }

  .style-m-theme .m-bloom-c {
    background: radial-gradient(circle, rgba(125, 174, 213, 0.4) 0%, rgba(125, 174, 213, 0.14) 42%, rgba(125, 174, 213, 0) 80%);
  }

  .style-m-theme .m-name-surface {
    border: 1px solid rgba(198, 205, 220, 0.95);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.93), rgba(251, 248, 246, 0.9));
    box-shadow: 0 14px 32px rgba(30, 36, 48, 0.09);
  }

  @keyframes m-float {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, -10px, 0);
    }
  }

  @keyframes m-whisper {
    0%, 100% {
      opacity: 0.45;
      letter-spacing: 0.18em;
    }
    50% {
      opacity: 0.82;
      letter-spacing: 0.24em;
    }
  }

  .style-m-theme .m-float-slow {
    animation: m-float 9s ease-in-out infinite;
  }

  .style-m-theme .m-float-delay {
    animation: m-float 12s ease-in-out infinite;
    animation-delay: 1.8s;
  }

  .style-m-theme .m-whisper {
    animation: m-whisper 5.8s ease-in-out infinite;
  }

  .style-m-theme .m-whisper-delay {
    animation: m-whisper 6.4s ease-in-out infinite;
    animation-delay: 1.2s;
  }

  .dark .style-m-theme {
    --background: 221 30% 13%;
    --foreground: 32 36% 92%;
    --card: 222 22% 18%;
    --card-foreground: 32 36% 92%;
    --popover: 222 22% 18%;
    --popover-foreground: 32 36% 92%;
    --primary: 335 72% 69%;
    --primary-foreground: 224 24% 12%;
    --secondary: 162 34% 62%;
    --secondary-foreground: 224 24% 12%;
    --muted: 221 16% 26%;
    --muted-foreground: 32 24% 77%;
    --accent: 199 62% 67%;
    --accent-foreground: 224 24% 12%;
    --destructive: 359 78% 67%;
    --destructive-foreground: 224 24% 12%;
    --border: 223 15% 34%;
    --input: 223 15% 34%;
    --ring: 335 72% 69%;

    background:
      radial-gradient(circle at 18% 16%, rgba(221, 136, 176, 0.2) 0%, rgba(221, 136, 176, 0) 36%),
      radial-gradient(circle at 84% 22%, rgba(113, 174, 188, 0.18) 0%, rgba(113, 174, 188, 0) 34%),
      linear-gradient(160deg, #1f2738 0%, #25223b 44%, #1d3031 100%);
  }

  .dark .style-m-theme .m-name-surface {
    border: 1px solid rgba(84, 94, 117, 0.92);
    background: linear-gradient(180deg, rgba(45, 48, 66, 0.95), rgba(36, 40, 57, 0.93));
    box-shadow: 0 16px 34px rgba(9, 12, 20, 0.34);
  }

  .dark .style-m-theme .m-paper-grain {
    background-image:
      radial-gradient(circle at 2px 2px, rgba(200, 190, 220, 0.14) 0.9px, transparent 1.1px),
      radial-gradient(circle at 2px 2px, rgba(145, 188, 198, 0.12) 0.8px, transparent 1.1px);
  }
`
