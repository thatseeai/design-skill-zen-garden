// Style-A: B2B SaaS Minimal Theme
// Light: 저채도 슬레이트 팔레트, 차분하고 전문적인 톤
// Dark: 깊은 슬레이트, 미니멀한 대비

export const themeClassName = "style-a-theme"

export const themeStyles = `
  .style-a-theme {
    --background: 210 20% 98%;
    --foreground: 222 47% 11%;
    --card: 0 0% 100%;
    --card-foreground: 222 47% 11%;
    --popover: 0 0% 100%;
    --popover-foreground: 222 47% 11%;
    --primary: 215 28% 17%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 18% 93%;
    --secondary-foreground: 222 47% 11%;
    --muted: 210 18% 93%;
    --muted-foreground: 215 16% 47%;
    --accent: 210 18% 93%;
    --accent-foreground: 222 47% 11%;
    --destructive: 0 72% 51%;
    --destructive-foreground: 0 0% 100%;
    --border: 214 20% 88%;
    --input: 214 20% 88%;
    --ring: 215 28% 17%;
  }

  .dark .style-a-theme {
    --background: 222 47% 6%;
    --foreground: 210 20% 92%;
    --card: 222 40% 8%;
    --card-foreground: 210 20% 92%;
    --popover: 222 40% 8%;
    --popover-foreground: 210 20% 92%;
    --primary: 210 20% 92%;
    --primary-foreground: 222 47% 6%;
    --secondary: 217 25% 14%;
    --secondary-foreground: 210 20% 92%;
    --muted: 217 25% 14%;
    --muted-foreground: 215 16% 58%;
    --accent: 217 25% 14%;
    --accent-foreground: 210 20% 92%;
    --destructive: 0 62% 40%;
    --destructive-foreground: 0 0% 100%;
    --border: 217 20% 18%;
    --input: 217 20% 18%;
    --ring: 215 20% 70%;
  }
`
