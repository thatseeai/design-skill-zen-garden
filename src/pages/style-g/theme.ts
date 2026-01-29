// Style G Theme - Zen Garden
// Inspired by the classic CSS Zen Garden design

export const themeClassName = "zen-garden-theme"

export const themeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Noto+Serif+JP:wght@300;400;500;700&display=swap');

  .zen-garden-theme {
    --font-sans: 'Crimson Text', serif;
    --font-serif: 'Noto Serif JP', serif;
    
    /* Zen Garden Palette */
    --zen-bg-sky: #dceaf3;
    --zen-ink: #3a3a3a;
    --zen-paper: rgba(255, 255, 255, 0.7);
    --zen-accent-red: #9e2a2b;
    --zen-accent-green: #4a6c45;
    --zen-accent-dark-green: #2c4a29;
    
    /* Base Overrides */
    --background: 204 36% 91%; /* Sky Blue hsl(204, 36%, 91%) */
    --foreground: 0 0% 23%;     /* Ink Black */
    
    --card: 0 0% 100%;
    --card-foreground: 0 0% 23%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 23%;
    
    --primary: 359 58% 39%;     /* Deep Red */
    --primary-foreground: 0 0% 100%;
    
    --secondary: 106 22% 35%;   /* Bamboo Green */
    --secondary-foreground: 0 0% 100%;
    
    --muted: 106 15% 90%;
    --muted-foreground: 106 20% 40%;
    
    --accent: 359 58% 39%;
    --accent-foreground: 0 0% 100%;
    
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    
    --border: 106 20% 80%;
    --input: 106 20% 80%;
    --ring: 359 58% 39%;
    
    --radius: 0px;
  }

  .zen-garden-theme {
    font-family: var(--font-sans);
    background-color: var(--zen-bg-sky);
  }
  
  /* Bamboo Decorations will be handled in page layout or specific components */
  
  .zen-garden-theme h1, 
  .zen-garden-theme h2, 
  .zen-garden-theme h3,
  .zen-garden-theme .font-heading {
    font-family: var(--font-serif);
    font-weight: 700;
  }
`
