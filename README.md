# Investis Annual Report 2024

Vite + React SPA showcasing Investis Group 2024 Annual Report.

## Scripts

- npm run dev – start dev server
- npm run build – production build to dist/
- npm run preview – preview production build

## Deploy

GitHub Pages is preconfigured via .github/workflows/deploy.yml.
- Push to main to deploy.
- In repo settings, set Pages source to GitHub Actions.

## Structure

- src/App.jsx – main layout and navigation
- src/components/* – section components
- src/data/* – static JSON content
- vite.config.js – Vite config

Tailwind v4 via @tailwindcss/vite and CSS variables in src/App.css.

