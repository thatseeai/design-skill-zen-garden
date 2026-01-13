# Skill Zen Garden

A design exploration project inspired by CSS Zen Garden, demonstrating how the same UI structure can be styled in dramatically different ways using different design skills (prompts).

## Concept

Like CSS Zen Garden, this project maintains a **fixed standard UI structure** across all pages while applying completely different visual styles. Each page:

- Uses the same component tree and layout
- Displays the same content and data
- Implements the same interactions
- But looks completely different through styling alone

## Live Demo

[View the live demo](https://thatseeai.github.io/design-skill-zen-garden/)

## Sample Pages

- **Style A (B2B SaaS Minimal)**: Low saturation, flat design, minimal shadows, high-density tables
- **Style B (Editorial/Poster)**: High contrast, bold typography, generous spacing, expressive shapes

## Tech Stack

- **Vite** - Build tool
- **React 18+** - UI framework
- **TypeScript** - Type safety
- **React Router v6** - Routing
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components

## Project Structure

```
src/
  components/
    StandardShowcase/      # Fixed UI structure
      StandardShowcase.tsx
      data.ts             # Static seed data
    SkillPanel/           # Skill document viewer
      SkillPanel.tsx
  pages/
    _template/            # Template for new pages
      page.tsx
      skill.md
      styles.ts
    style-a/              # Sample page 1
      page.tsx
      skill.md
      styles.ts
    style-b/              # Sample page 2
      page.tsx
      skill.md
      styles.ts
    index.ts              # Page metadata
  routes.tsx              # Route definitions
```

## Standard UI Components

Every page includes the same set of UI elements:

- App Shell (Topbar, Sidebar, Content)
- 3 KPI cards with metrics and badges
- Tabs (Overview / Activity)
- Data table with status badges and actions
- Form inputs (text, select, textarea) with all states (default, focus, error, disabled)
- Button variants (primary, secondary, ghost)
- Modal and Toast triggers
- Alert/Callout component

## Adding a New Page

1. Copy the template:
   ```bash
   cp -r src/pages/_template src/pages/your-style-name
   ```

2. Edit `skill.md` with your design intent and style rules

3. Modify `styles.ts` to implement your styling approach

4. Register the page in `src/pages/index.ts`:
   ```ts
   export const pages = [
     // ...existing pages
     {
       slug: 'your-style-name',
       title: 'Your Style Name',
       description: 'Brief description'
     }
   ]
   ```

## Skill Files

Each page has a `skill.md` file that documents its design approach:

```md
# Intent
(The design concept and intention)

# Style Rules
- (5-12 specific styling rules)

# Tokens (optional)
- color.primary: ...
- radius.md: ...

# Do
- (Best practices for this style)

# Don't
- (Things to avoid)

# Notes
(Additional context)
```

The skill file content is displayed in the page UI with copy functionality.

## Development

Install dependencies:
```bash
npm install
```

Start dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

The workflow:
1. Triggers on push to `main` branch
2. Builds the project
3. Deploys to GitHub Pages

SPA routing is handled via:
- `public/404.html` - Redirects to index with path as query param
- `index.html` - Restores the original path from query param

## Key Principles

1. **Framework is fixed**: Vite + React + React Router (no changes)
2. **Standard UI is fixed**: Component structure, layout, and data remain identical across pages
3. **Only styling changes**: Different pages = different visual treatment
4. **Skills are documentation**: `skill.md` files guide manual implementation, not runtime parsing
5. **Each page is isolated**: Organized in `src/pages/<page-slug>/` directories

## Credits

Inspired by [CSS Zen Garden](http://www.csszengarden.com/) by Dave Shea.

## License

MIT
