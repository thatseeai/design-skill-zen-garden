// Style-F: Vintage Baroque Theme
// Dark, textured backgrounds with aged parchment/paper effects
// Sepia & gold palette with ornamental elements

export const themeClassName = "style-f-theme"

// Inline SVG as data URI for reliable loading
const vintageCornerSvg = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><linearGradient id="cornerGold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#f4e4c1;stop-opacity:1"/><stop offset="50%" style="stop-color:#d4a574;stop-opacity:1"/><stop offset="100%" style="stop-color:#8b6f47;stop-opacity:1"/></linearGradient></defs><g opacity="0.8"><line x1="5" y1="30" x2="5" y2="5" stroke="url(#cornerGold)" stroke-width="2"/><line x1="5" y1="5" x2="30" y2="5" stroke="url(#cornerGold)" stroke-width="2"/><path d="M 5,25 Q 10,20 12,15 Q 10,12 8,10" fill="none" stroke="url(#cornerGold)" stroke-width="1.5"/><path d="M 25,5 Q 20,10 15,12 Q 12,10 10,8" fill="none" stroke="url(#cornerGold)" stroke-width="1.5"/><circle cx="5" cy="35" r="2" fill="url(#cornerGold)"/><circle cx="35" cy="5" r="2" fill="url(#cornerGold)"/><ellipse cx="15" cy="15" rx="3" ry="5" fill="url(#cornerGold)" opacity="0.6" transform="rotate(-45 15 15)"/></g></svg>`)}`

const vintageOrnamentSvg = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="100" viewBox="0 0 400 100"><defs><linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#8b6f47;stop-opacity:1"/><stop offset="50%" style="stop-color:#d4a574;stop-opacity:1"/><stop offset="100%" style="stop-color:#8b6f47;stop-opacity:1"/></linearGradient></defs><g transform="translate(200, 50)"><path d="M 0,-8 L 8,0 L 0,8 L -8,0 Z" fill="url(#goldGradient)" opacity="0.9"/><path d="M -10,0 Q -30,-10 -50,-5 Q -40,-2 -30,0 Q -40,2 -50,5 Q -30,10 -10,0" fill="none" stroke="url(#goldGradient)" stroke-width="1.5" opacity="0.7"/><path d="M 10,0 Q 30,-10 50,-5 Q 40,-2 30,0 Q 40,2 50,5 Q 30,10 10,0" fill="none" stroke="url(#goldGradient)" stroke-width="1.5" opacity="0.7"/><ellipse cx="-60" cy="0" rx="8" ry="4" fill="url(#goldGradient)" opacity="0.6" transform="rotate(-20 -60 0)"/><ellipse cx="60" cy="0" rx="8" ry="4" fill="url(#goldGradient)" opacity="0.6" transform="rotate(20 60 0)"/><line x1="-70" y1="0" x2="-180" y2="0" stroke="url(#goldGradient)" stroke-width="1" opacity="0.5"/><line x1="70" y1="0" x2="180" y2="0" stroke="url(#goldGradient)" stroke-width="1" opacity="0.5"/></g></svg>`)}`

const vintagePatternSvg = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><defs><pattern id="vintagePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><g opacity="0.15"><circle cx="50" cy="50" r="8" fill="#d4a574"/><circle cx="50" cy="50" r="5" fill="none" stroke="#f4e4c1" stroke-width="1"/><ellipse cx="50" cy="35" rx="4" ry="8" fill="#d4a574" opacity="0.7"/><ellipse cx="50" cy="65" rx="4" ry="8" fill="#d4a574" opacity="0.7"/><ellipse cx="35" cy="50" rx="8" ry="4" fill="#d4a574" opacity="0.7"/><ellipse cx="65" cy="50" rx="8" ry="4" fill="#d4a574" opacity="0.7"/><circle cx="15" cy="15" r="3" fill="#d4a574" opacity="0.5"/><circle cx="85" cy="15" r="3" fill="#d4a574" opacity="0.5"/><circle cx="15" cy="85" r="3" fill="#d4a574" opacity="0.5"/><circle cx="85" cy="85" r="3" fill="#d4a574" opacity="0.5"/><path d="M 50,25 Q 45,20 40,25" fill="none" stroke="#d4a574" stroke-width="1" opacity="0.6"/><path d="M 50,75 Q 55,80 60,75" fill="none" stroke="#d4a574" stroke-width="1" opacity="0.6"/><path d="M 25,50 Q 20,45 25,40" fill="none" stroke="#d4a574" stroke-width="1" opacity="0.6"/><path d="M 75,50 Q 80,55 75,60" fill="none" stroke="#d4a574" stroke-width="1" opacity="0.6"/></g></pattern></defs><rect width="200" height="200" fill="url(#vintagePattern)"/></svg>`)}`

export const themeStyles = `
  .style-f-theme {
    /* Base colors - Vintage sepia & gold palette */
    --background: 30 20% 4%;
    --foreground: 38 35% 85%;
    --card: 30 20% 12%;
    --card-foreground: 38 35% 85%;
    --popover: 30 20% 12%;
    --popover-foreground: 38 35% 85%;
    --primary: 38 45% 65%;
    --primary-foreground: 30 20% 4%;
    --secondary: 35 30% 45%;
    --secondary-foreground: 38 35% 85%;
    --muted: 30 15% 25%;
    --muted-foreground: 38 20% 65%;
    --accent: 38 55% 85%;
    --accent-foreground: 30 20% 4%;
    --destructive: 10 65% 55%;
    --destructive-foreground: 0 0% 100%;
    --border: 35 30% 45%;
    --input: 35 30% 45%;
    --ring: 38 45% 65%;

    /* Background textures and patterns */
    background-image:
      url('${vintagePatternSvg}'),
      radial-gradient(ellipse at top left, rgba(212, 165, 116, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at bottom right, rgba(139, 111, 71, 0.08) 0%, transparent 50%),
      linear-gradient(180deg, #0d0a08 0%, #1a1410 100%);
    background-attachment: fixed, fixed, fixed, fixed;
    background-size: 200px 200px, 100% 100%, 100% 100%, 100% 100%;
    background-position: 0 0, top left, bottom right, center;

    /* Vignette effect */
    position: relative;
  }

  .style-f-theme::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
    pointer-events: none;
    z-index: 0;
  }

  /* Ornamental corner decorations for cards only */
  .style-f-theme .vintage-card {
    position: relative;
  }

  .style-f-theme .vintage-card::before,
  .style-f-theme .vintage-card::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background-image: url('${vintageCornerSvg}');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.6;
    pointer-events: none;
    z-index: 1;
  }

  .style-f-theme .vintage-card::before {
    top: 4px;
    left: 4px;
  }

  .style-f-theme .vintage-card::after {
    bottom: 4px;
    right: 4px;
    transform: rotate(180deg);
  }

  /* Ornamental dividers for section titles */
  .style-f-theme .vintage-section-title::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 20px;
    background-image: url('${vintageOrnamentSvg}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.5;
    pointer-events: none;
  }

  /* Custom scrollbar for vintage aesthetic */
  .style-f-theme ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  .style-f-theme ::-webkit-scrollbar-track {
    background: #1a1410;
    border: 1px solid #8b6f47;
  }

  .style-f-theme ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #d4a574 0%, #8b6f47 100%);
    border: 1px solid #8b6f47;
    border-radius: 4px;
  }

  .style-f-theme ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #f4e4c1 0%, #d4a574 100%);
  }

  /* Selection color */
  .style-f-theme ::selection {
    background: rgba(212, 165, 116, 0.4);
    color: #f4e4c1;
  }

  /* Focus ring with vintage gold glow */
  .style-f-theme *:focus-visible {
    outline: 2px solid #d4a574;
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(212, 165, 116, 0.2);
  }

  /* Ensure modal overlay appears above all content */
  .style-f-theme [data-radix-portal] {
    z-index: 9999 !important;
  }
`
