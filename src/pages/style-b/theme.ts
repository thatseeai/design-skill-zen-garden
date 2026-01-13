// Style-B: Editorial/Poster Theme
// Light: 순백 배경 + 강한 대비, 과감한 컬러 포인트
// Dark: 깊은 다크 + 강조색 극대화, 레이어드 효과

export const themeClassName = "style-b-theme"

export const themeStyles = `
  .style-b-theme {
    --background: 0 0% 98%;
    --foreground: 0 0% 3%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3%;
    --primary: 262 83% 58%;
    --primary-foreground: 0 0% 100%;
    --secondary: 270 10% 94%;
    --secondary-foreground: 0 0% 9%;
    --muted: 270 10% 94%;
    --muted-foreground: 0 0% 45%;
    --accent: 270 10% 94%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 90%;
    --input: 0 0% 90%;
    --ring: 262 83% 58%;
  }

  .dark .style-b-theme {
    --background: 240 10% 4%;
    --foreground: 0 0% 95%;
    --card: 240 10% 6%;
    --card-foreground: 0 0% 95%;
    --popover: 240 10% 6%;
    --popover-foreground: 0 0% 95%;
    --primary: 263 70% 65%;
    --primary-foreground: 240 10% 4%;
    --secondary: 240 6% 12%;
    --secondary-foreground: 0 0% 95%;
    --muted: 240 6% 12%;
    --muted-foreground: 240 5% 55%;
    --accent: 240 6% 12%;
    --accent-foreground: 0 0% 95%;
    --destructive: 0 62% 50%;
    --destructive-foreground: 0 0% 100%;
    --border: 240 6% 15%;
    --input: 240 6% 15%;
    --ring: 263 70% 65%;
  }
`
