# Portfolio (Next.js)

A personal portfolio website built with Next.js and Tailwind CSS. This project showcases projects, blogs, achievements, a timeline (journey), and contact form — everything needed to present a technical portfolio.

**Project Structure (selected)**

- `app/` – Next.js App Router pages and layout
- `components/` – Reusable React components (cards, hero, timeline, navbar, footer)
- `public/` – Static assets and `data/*.json` used by the site
- `styles/` – Global CSS
- `lib/` – Utility helpers (data loader, utils)

Features

- Responsive portfolio layout
- Projects, blogs, achievements pages
- Timeline (journey) with images
- Framer Motion animations (client-only)
- Next.js App Router with server and client components
- Tailwind CSS styling

Prerequisites

- Node.js (LTS recommended, v18+)
- npm (bundled with Node) or `pnpm` if you prefer
- Git (to push to GitHub)

Quick start (development)

1. Clone the repo (if not already on your machine):

```pwsh
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd "c:\Users\Hp 840 G5\Desktop\portfolio"
```

2. Install dependencies:

```pwsh
npm install
```

3. Run development server:

```pwsh
npm run dev
```

Open `http://localhost:3000` in your browser.

Build & production run

```pwsh
npm run build
npm run start
```

Notes

- If the dev server reports port conflicts, stop other Node processes or change the port:

```pwsh
# stop node processes (Windows PowerShell)
Get-Process node | Stop-Process -Force -ErrorAction SilentlyContinue
```

- The project uses Next.js App Router. Some pages/components are client-only (Framer Motion). If you edit those files remember to keep `"use client"` at the top of client components.

Images

- Static images are stored in `public/` and referenced from `public/data/*.json` as `/imagename.jpg`.
- If you experience 404s, ensure files exist in `public/` and that the JSON data does not include query strings like `?height=200&width=200`.

Deploying to Vercel (recommended)

1. Commit and push your code to a Git provider (GitHub, GitLab, or Bitbucket):

```pwsh
git add .
git commit -m "Deploy: portfolio"
git push origin main
```

2. Go to https://vercel.com and log in with your GitHub account.
3. Click `Add New` → `Project` → `Import Git Repository` and pick your repo.
4. Vercel auto-detects Next.js. Default settings are typically fine:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `.next`
5. Click `Deploy`.
6. Vercel provides a URL after deployment; every push to `main` will create a new deployment.

Environment variables

- If you add secrets (APIs, keys), set them in the Vercel dashboard under *Settings → Environment Variables* and redeploy.

Troubleshooting tips

- If images don't appear in production, verify files in `public/` and check the deployment logs on Vercel.
- If you have hydration warnings, check for `Math.random()` or `Date()` calls during server render, or attributes injected by browser extensions. Use `suppressHydrationWarning` if necessary and move client-only code into client components.

Contributing

- Fork the repo, create a branch, make changes, and submit a pull request.

License

- Add a license if you want (MIT is common for portfolios). Create a `LICENSE` file if desired.

Contact

- For changes or questions, open an issue or contact the repository owner.

---

If you want, I can:
- Add a `VERCEL.md` with screenshots of the Vercel setup flow.
- Create a GitHub Actions workflow for CI checks before deploy.
- Configure a custom domain on Vercel and add DNS instructions.

Tell me which of these you'd like next.