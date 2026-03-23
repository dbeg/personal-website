# personal-website

The personal website of Dan Beghin

## Installation

See `package.json` for engine requirments, ensure minimum versions of `node` and `npm` are available.

Run locally:

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

Build for production:

```bash
npm run build
npm run preview # optional, preview the latest build from /dist
```

The build output is in `/dist`.

See [Astro build and preview documentation](https://docs.astro.build/en/develop-and-build/#build-and-preview-your-site).

## Deployment

Commits and PRs to non-`main` branches trigger Cloudflare Pages preview deployments. Preview URLs are posted in PR comments.

Commits to `main` trigger Cloudflare Pages production deployments.

This project outputs static files (`/dist`) and can be hosted on any static provider, e.g., Cloudflare Pages, GitHub Pages, Netlify, Vercel, S3, etc...
