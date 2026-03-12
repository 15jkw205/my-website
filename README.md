# jakobwest.dev

Personal portfolio site for Jakob West — software engineer, tech enthusiast, and Colorado outdoorsman.

Built with **Next.js 15** (static export), deployed via **Cloudflare Pages**, CI/CD via **GitHub Actions**.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router, static export) |
| Styling | CSS Modules |
| Deployment | Cloudflare Pages |
| CI/CD | GitHub Actions |
| Language | TypeScript |

---

## Project Structure

```
my-website/
├── src/
│   └── app/
│       ├── page.tsx          # One-pager (Hero, About, Projects, Contact)
│       ├── page.module.css   # All styles + CSS variables
│       ├── layout.tsx        # Root layout + metadata + SEO
│       └── globals.css       # CSS reset
├── public/
│   ├── _headers              # Cloudflare Pages security + cache headers
│   ├── robots.txt            # Search engine crawler config
│   └── sitemap.xml           # SEO sitemap
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD pipeline
├── next.config.ts            # Static export config
├── tsconfig.json
└── package.json
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev
```

---

## Build

```bash
# Type-check + static export to /out
npm run build
```

The `out/` directory is the production build output. It is git-ignored and should never be committed.

---

## Deployment

Deployments are fully automated via GitHub Actions (`.github/workflows/deploy.yml`):

| Trigger | Action |
|---|---|
| Push to any branch or PR to `main` | Lint + build check |
| Push to `main` | Lint + build + deploy to Cloudflare Pages |

### Required GitHub Secrets

Go to **Settings > Secrets and variables > Actions** and add:

| Secret | Where to find it |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare dashboard > My Profile > API Tokens > Create Token (use "Cloudflare Pages: Edit" template) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard > right sidebar on the Overview page |

### Manual Deploy (if needed)

```bash
npm run build
npx wrangler pages deploy out --project-name=my-website
```

---

## Projects Section

Projects are fetched live from the GitHub API at runtime:

```
https://api.github.com/users/15jkw205/repos?sort=updated&per_page=20
```

No manual updates needed. Public repos with descriptions are displayed automatically, sorted by most recently updated.

---

## Theming

All colors are defined as CSS variables at the top of `page.module.css`:

```css
--orange: #ff6b35;
--black: #0a0a0a;
--surface: #111111;
--text: #f0ece6;
```

Adjust these to retheme the entire site instantly.

---

## Security Headers

Configured in `public/_headers` for Cloudflare Pages:

- HSTS with preload (2 year max-age)
- Content Security Policy (allows Google Fonts + GitHub API)
- X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- Permissions-Policy (blocks camera, microphone, geolocation)
- Static assets cached for 1 year, HTML always fresh

---

## Git Workflow

```bash
# Work on development branch
git checkout development

# After testing locally (npm run dev + npm run build)
git add .
git commit -m "your message"
git push origin development

# When ready to go live, merge to main
git checkout main
git merge development
git push origin main
```

Pushing to `main` triggers the full CI/CD pipeline and deploys to jakobwest.dev automatically.