# Portifolio-Eliedson-Luna - Agent Instructions

## Project
Next.js 15 professional portfolio with MDX blog/posts, deployed on Netlify.

## Structure

````
src/
  app/                    # Next.js App Router pages
    page.tsx              # Home page
    layout.tsx            # Root layout with Header
    globals.css           # Global styles + Tailwind v4
    loading.tsx           # Loading UI
    sobre/page.tsx        # About page
    contatos/page.tsx     # Contact page
    projetos/             # Projects pages
      page.tsx            # Projects listing
      [slug]/page.tsx     # Project detail (MDX)
    api/recaptcha/        # reCAPTCHA verification endpoint
  features/               # Feature-based components
    Home/                 # Homepage sections (Start, TopProjects, About, Contacts)
    Sobre/                # About page components
    Projetos/             # Projects listing components
    Contatos/             # Contact form components
  shared/
    components/           # Reusable UI components
      ui/                 # Text, buttons, scroll indicators
      structural/         # Layout wrappers (Header, Footer, containers)
      animations/         # Luna SVG animation
    content/posts/        # MDX blog posts (Velite)
    context/              # Theme context
    hooks/                # Custom hooks (MDX)
    fonts/                # Roboto Mono + font size utilities
public/
  assets/                 # Static assets (PDF resume)
  images/projects/        # Project thumbnails
.velite/                  # Velite generated data (gitignored)
````
## Commands
| Command | Description |
|---------|-------------|
| npm run dev | Runs Velite (watch) + Next.js dev server |
| npm run build | Next.js production build (Velite runs via next.config.ts) |
| npm run start | Start production server |
| npm run lint | Next.js ESLint |

Netlify build: npx velite && npm run build (see netlify.toml)

## Key Conventions
- Path aliases: @/* -> src/*, #site/content -> .velite (generated)
- Velite processes MDX from src/shared/content/posts/ -> .velite/ + public/static/
- Tailwind v4 via @tailwindcss/postcss (no tailwind.config.ts)
- Turbopack enabled in next.config.ts
- reCAPTCHA required for contact form (env vars in .env)
- Portuguese (pt-br) locale in layout

## Environment Variables
Create .env with:
RECAPTCHA_API_KEY=your_secret_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key

## Important Notes
- Velite runs automatically on dev and build via next.config.ts hook (checks VELITE_STARTED env)
- No test suite configured
- Footer commented out in layout.tsx
- Images use both .webp and .jpg formats in public/images/projects/
