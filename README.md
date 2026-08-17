# JJ Valaya — Fashion Website Replica

A clean Next.js replica of the [JJ Valaya](https://valaya.com) luxury fashion website, built with the App Router, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the homepage and [http://localhost:3000/jjv](http://localhost:3000/jjv) for the JJV collection page.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with white navbar, hero carousel, footer |
| `/jjv` | JJV collection page with maroon header, collection grids, brand section, footer |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + fonts
│   ├── page.tsx            # Homepage
│   └── jjv/page.tsx        # JJV page
├── components/
│   ├── home/               # Homepage sections
│   ├── jjv/                # JJV page sections
│   ├── layout/             # Navbar, Footer, dividers
│   └── ui/                 # Reusable UI (buttons, cards, images)
└── lib/
    ├── data.ts             # All content + image paths
    └── types.ts            # TypeScript interfaces
public/
└── images/                 # Drop your images here (see README inside)
```

## Adding Your Images

1. Add images to `public/images/` following the naming guide in [`public/images/README.md`](public/images/README.md)
2. Refresh the browser — placeholders will be replaced automatically

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Lucide React** (icons)
- **Google Fonts** — Cormorant Garamond (serif), Jost (sans), Great Vibes (script)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Next Steps

Once you share your images, we'll drop them into `public/images/` and fine-tune spacing, typography, and any custom differences you want from the original site.
