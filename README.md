# Sphe's Vetkoeks

A Vite, React, TypeScript, shadcn/ui, and Tailwind CSS landing page for Sphe's Vetkoeks.

## Local Development

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Create a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Deploy To Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Use these settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Add environment variables:
   - `VITE_WHATSAPP_NUMBER`
   - `VITE_WHATSAPP_DISPLAY_NUMBER`
5. Deploy.

This repo includes `vercel.json` so Vercel serves the Vite build from `dist` and rewrites routes back to `index.html`.

## Deploy To Netlify

1. Push this folder to a GitHub repository.
2. Import the repository in Netlify.
3. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Package directory: leave blank unless the repo root is above this app folder
4. Add environment variables:
   - `VITE_WHATSAPP_NUMBER`
   - `VITE_WHATSAPP_DISPLAY_NUMBER`
5. Deploy.

This repo includes `netlify.toml` so Netlify uses the correct build command, publish directory, and single-page app redirect.

## Important Before Showcasing

The WhatsApp order links use placeholder values unless environment variables are configured.

Copy `.env.example` to `.env.local` for local development, then set:

- `VITE_WHATSAPP_NUMBER`: international format without `+`, for example `27821234567`
- `VITE_WHATSAPP_DISPLAY_NUMBER`: human-readable format, for example `+27 82 123 4567`
