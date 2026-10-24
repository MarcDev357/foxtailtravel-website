# Foxtail Travel website

Multi-page site for Foxtail Travel LLC (BJ Bradley, CTA). React 18 + TypeScript + Vite + Tailwind CSS + React Router.

## Run it

    npm install
    cp .env.example .env      # add the Web3Forms key
    npm run dev               # local dev server
    npm run build             # type-check + production build in dist/

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About BJ |
| `/blog` | Blog |
| `/blog/why-work-with-a-travel-advisor` | Blog post (same URL as the old site) |
| `/cruises` `/destinations` `/family` `/groups` `/resorts` `/solo` | Wellness services (one shared template) |
| `/contact` | Contact form |

Retreats and Explora Journeys link out to BJ's affiliate pages.

## Edit content

All copy, links, services, guides, partners and photos live in `src/data/site.ts`.
Colors are tokens at the top of `src/index.css` (light + dark). Fonts are in `index.html`.

## Photos

All 23 photos and logos from the old site are in `src/assets/images/` (gallery shots in
`gallery/`), resized to web size. Vite bundles and fingerprints them on build. To swap a
photo, replace the file with the same name or change the name in `src/data/site.ts`.

## Forms

Inquiry and newsletter forms post to Web3Forms. Create a key at web3forms.com tied to
foxtailtravel@gmail.com and set `VITE_WEB3FORMS_KEY` in `.env` before building.

## Nginx (EC2)

React Router needs every path to fall back to index.html, and the old Weebly `.html`
URLs should 301 to the new routes so Google and old links keep working:

    location / {
        try_files $uri $uri/ /index.html;
    }
    location ~ ^/(about|blog|cruises|destinations|family|groups|resorts|solo|contact)\.html$ {
        return 301 /$1;
    }
    location = /index.html { try_files $uri =404; }
