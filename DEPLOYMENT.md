# Deployment Guide — Host the Portfolio + Connect a Domain

This project builds to static files (`npm run build` → `dist/`), so it can be hosted
almost anywhere. Two easiest, free options: **Vercel** and **Netlify**. Both give you a
free `.vercel.app` / `.netlify.app` URL immediately, then let you attach your own domain.

---

## Option A: Vercel (recommended, fastest)

### 1. Push your code to GitHub
```bash
cd portfolio-react
git init
git add .
git commit -m "Initial portfolio"
```
Create a new repo on [github.com/new](https://github.com/new), then:
```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

### 2. Import into Vercel
1. Go to [vercel.com](https://vercel.com) → sign in with GitHub.
2. Click **Add New → Project**, select your repo.
3. Vercel auto-detects Vite. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. In under a minute you'll get a live URL like
   `https://your-repo.vercel.app`.

### 3. Connect a custom domain
1. Buy a domain if you don't have one (Namecheap, Google Domains/Squarespace, GoDaddy —
   any registrar works).
2. In your Vercel project → **Settings → Domains** → enter your domain (e.g.
   `mohammadrehan.dev`) → **Add**.
3. Vercel shows you DNS records to add:
   - If using Vercel's nameservers: point your registrar's nameservers to the ones Vercel
     gives you.
   - If keeping your registrar's DNS: add the **A record** (`76.76.21.21`) for the root
     domain and a **CNAME** (`cname.vercel-dns.com`) for `www`.
4. Wait for DNS propagation (a few minutes to a few hours). Vercel auto-issues a free
   SSL certificate once it verifies the domain — your site will be served over HTTPS
   automatically.

Every future `git push` to `main` auto-redeploys.

---

## Option B: Netlify

### 1. Push to GitHub (same as above)

### 2. Import into Netlify
1. Go to [netlify.com](https://netlify.com) → sign in with GitHub.
2. **Add new site → Import an existing project** → pick your repo.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**. You'll get a URL like `https://random-name.netlify.app`.

### 3. Connect a custom domain
1. **Site settings → Domain management → Add a domain**.
2. Enter your domain, follow Netlify's DNS instructions (either delegate nameservers to
   Netlify, or add the A/CNAME records they show you at your registrar).
3. Netlify auto-provisions a free SSL certificate (via Let's Encrypt) once DNS verifies.

---

## Option C: GitHub Pages (free, no separate host account)

```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"homepage": "https://<your-username>.github.io/<repo-name>",
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```
Then:
```bash
npm run deploy
```
Enable Pages in your repo's **Settings → Pages**, source: `gh-pages` branch. For a custom
domain, add a `CNAME` file to `public/` containing your domain, and point your registrar's
DNS to GitHub's IPs (documented at
[docs.github.com/pages/custom-domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

---

## After deploying: checklist

- [ ] Replace `public/RESUME_GOES_HERE.txt` with a real `resume.pdf`
- [ ] Replace `public/PHOTO_GOES_HERE.txt` with a real headshot and update `Hero.jsx`
- [ ] Fill in the third patent in `src/data/content.js`
- [ ] Update `https://your-domain.com` placeholders in `index.html`, `public/robots.txt`,
      and `public/sitemap.xml` to your real domain
- [ ] Run your live URL through [PageSpeed Insights](https://pagespeed.web.dev) to check
      Lighthouse/Core Web Vitals scores
- [ ] Test the contact form on the live site (it opens the visitor's email client)
- [ ] Test on a real mobile device, not just browser dev tools
