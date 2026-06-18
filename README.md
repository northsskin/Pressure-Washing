# Blast Off Cleaning

Single-page marketing site for Blast Off Cleaning, a local pressure washing
business. Navy-and-white brand with a rocket-meets-water concept; one
orchestrated hero launch animation, otherwise restrained motion.

Built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploying (GitHub Pages)

GitHub Pages can't build a Vite app — it only serves static files — so the
site must be **built** first and the `dist/` output served. This repo includes
a workflow (`.github/workflows/deploy.yml`) that does that automatically.

**One-time setup:** in the repo on GitHub, go to **Settings → Pages → Build
and deployment → Source** and choose **GitHub Actions** (not "Deploy from a
branch"). After that, every push builds and deploys the site automatically;
watch progress under the **Actions** tab.

> Serving the repository source directly (the previous setup) is what caused
> the blank white page — the browser was handed `/src/main.jsx`, which it can't
> run. Always deploy the built `dist/` output, which the workflow handles.

Hosting elsewhere (Netlify, Vercel, etc.)? Use build command `npm run build`
and publish directory `dist`. Asset paths are relative, so root or subpath
both work.

## Editing the business details (one file)

Everything specific to the business lives in **`src/config/business.js`** —
phone number, service area, social links, Formspree form ID, and year. Replace
the bracketed placeholder values (drop the brackets) with the real values.
These are the *only* placeholders in the project.

The hero "Get a Free Quote" button and the "Prefer to text?" link open the
visitor's messaging app via an `sms:` deep link with a pre-filled message,
since the business runs on texting customers directly.

## The contact form

The form posts to [Formspree](https://formspree.io) (free, no backend). Until
you paste a real form ID into `FORMSPREE_ENDPOINT`, the form gracefully hands
the lead off to SMS so nothing is lost.

## Logo & photos

- **Logo** — the real logo is in `/public/logo.png` (used for social sharing).
  The on-page mark (`rocket-navy.png` / `rocket-white.png`) and `favicon.png`
  are derived from it. See `public/LOGO_NOTE.md`.
- **Before/after photos** — `src/config/gallery.js` is wired to three slots.
  Real job photos go in `public/assets/gallery/` (see the README there). No
  stock or stand-in images are used — empty slots show a clearly labeled
  "coming soon" placeholder.

## Brand tokens

Colors and type are defined in `tailwind.config.js`. Tailwind's default
palette is intentionally removed — every color maps to a named brand token
(navy, spray, cloud, ignition, slate).
