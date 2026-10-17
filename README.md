# Aura Fabrics

A responsive, editorial-style saree boutique website built with React, Vite, Tailwind CSS v4, React Router and Lucide React. The three routes are `/`, `/about` and `/contact`.

> **Before launch:** Product names and photography are temporary editorial placeholders. They do not represent confirmed Aura Fabrics stock. Replace them with approved business information and your own product photography, and configure a real form endpoint.

## Run locally

Requirements: Node.js 20 or newer and npm.

```sh
npm install
npm run dev
```

Vite prints the local development URL (usually `http://localhost:5173`). To create and preview the production build:

```sh
npm run build
npm run preview
```

## Edit the site

- **Brand colors, typography, spacing and responsive styles:** `src/index.css`. The Aura palette is defined in the `:root` variables and Tailwind v4 `@theme` block. Google Fonts are linked from `index.html` (Bodoni Moda and Manrope).
- **Saree cards and editorial photography:** `src/data/sarees.js`. Update each saree's `name`, `category`, `image`, `alt`, `position`, and `priceLabel` here. All sample cards are marked as placeholders.
- **Hero and editorial images:** change the `editorialImages` values in `src/data/sarees.js`.
- **Image credits:** `src/data/imageCredits.js` records the temporary Pexels source pages. Review Pexels' current terms before commercial publication. Replace placeholder images with photos you have permission to use; do not imply that a placeholder is a product sold by Aura Fabrics.
- **Local image replacement:** add a photo to `public/images/`, then set its path in the data file, e.g. `/images/my-saree.jpg`. No page JSX changes are needed. Keep descriptive alt text and adjust `position` if necessary.
- **Email, phone, WhatsApp, Instagram and optional location label:** fill in the currently empty values in `src/config/site.js`. Empty details are intentionally not displayed as clickable links.
- **Contact form:** the form is frontend-only until configured. Copy `.env.example` to `.env.local` and set `VITE_FORMSPREE_ENDPOINT` to your real Formspree endpoint (or update the adapter in `src/pages/Contact.jsx` for another provider). Restart Vite after changing environment variables. The form reports success only after the endpoint returns an HTTP success response. Without a configured endpoint, it clearly reports that enquiries are not connected.

`VITE_` values are bundled into public browser code. Never put private API keys, passwords, or other secrets in a frontend environment variable.

## Deploy

- **Vercel:** import the repository, use `npm run build` as the build command and `dist` as the output directory. Vercel's Vite integration supports SPA routes; if needed add a rewrite from `/(.*)` to `/`.
- **Netlify:** use `npm run build` and `dist`. The included `public/_redirects` sends route requests to the SPA entry point.
- **GitHub Pages:** standard user/organization root sites are simplest. For a project subpath, set Vite's `base` in `vite.config.js` to `'/repository-name/'` and configure React Router with a matching `basename`. GitHub Pages does not provide SPA fallback by default; configure a 404-to-index fallback (and test direct route reloads) or use a hash router. Ensure any asset paths use the configured base.

## Review before publishing

Replace temporary Pexels photos with approved product/editorial photography and confirm image rights; review sample names and collection categories; enter verified contact methods; connect and test the real form endpoint; decide which prices and product details should be published; and verify the deployment's direct-route fallback. No availability, pricing, testimonials, shipping claims, address or social account are asserted by this demo.
