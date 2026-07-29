# Mohammad Rehan — Portfolio

A component-based, animated portfolio site built with React + Vite. Every fact on the
site (name, experience, projects, skills, patents, links) lives in one file —
`src/data/content.js` — so you can edit everything without touching component code.

---

## 1. What's inside

```
portfolio-react/
├── index.html                 # HTML shell, SEO meta tags, JSON-LD
├── package.json
├── vite.config.js
├── .env.example                # optional backend config (see §5)
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── RESUME_GOES_HERE.txt    # replace with your real resume.pdf
│   └── PHOTO_GOES_HERE.txt     # optional: add a headshot here
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # composes all sections in order
    ├── index.css               # design tokens + all component styles
    ├── data/
    │   └── content.js          # ← EDIT YOUR INFO HERE
    └── components/
        ├── Loader.jsx           # animated splash/loading screen
        ├── Header.jsx           # sticky glass nav + mobile hamburger
        ├── Hero.jsx              # name, typing role rotation, CTAs
        ├── ParticleBackground.jsx # canvas particle/network animation
        ├── About.jsx             # bio + animated stat counters
        ├── Counter.jsx           # reusable animated number counter
        ├── Skills.jsx            # animated skill bars by category
        ├── Experience.jsx        # expandable timeline
        ├── Projects.jsx          # tilt cards + case-study modals
        ├── Research.jsx          # publications + patents grid
        ├── Certifications.jsx
        ├── Education.jsx
        ├── FAQ.jsx               # accordion
        ├── Contact.jsx           # form (opens mail client) + info
        ├── Footer.jsx
        ├── ChatAssistant.jsx      # rule-based "ask about Rehan" widget
        └── Reveal.jsx             # reusable scroll-reveal wrapper
```

---

## 2. Install & run locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
cd portfolio-react
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). Changes to any file hot-reload
instantly.

To build a production bundle:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

---

## 3. Editing your information

**Almost everything you'd want to change lives in `src/data/content.js`:**

- `profile` — name, location, contact links, hero copy, bio paragraphs
- `stats` — the animated counters in the About section
- `skillGroups` — skill categories and proficiency bars (0–100)
- `experience` — job history, each with an array of bullet points
- `projects` — case studies; each has `overview`, `problem`, `solution`, `results`,
  `stack`, and optional `githubUrl` / `liveUrl`
- `research` — publications; set `url` to link a card straight to the paper
  (already wired to your IEEE Xplore paper)
- `patents` — patent cards. **The third patent is a placeholder** — search for
  `"Third patent — details needed"` in `content.js` and replace it with the real title,
  application number, and filed/published dates
- `certifications`, `education`, `faq` — straightforward arrays
- `chatKnowledge` — the answers the chat widget gives; keep in sync with the sections above

### Adding your photo
Drop a headshot into `public/` (e.g. `public/profile-photo.jpg`), then in
`src/components/Hero.jsx` replace the `<div className="avatar-mono">` block with:
```jsx
<img src="/profile-photo.jpg" alt={profile.name} />
```

### Adding your resume
Drop your real PDF into `public/resume.pdf` (must match `profile.resumeFile` in
`content.js`, currently `/resume.pdf`). The hero "Download Résumé" button will then work.

### Cross-checking against LinkedIn
If you want more from your LinkedIn profile pulled in (more skills, achievements, extra
experience entries), paste the relevant text back to me directly — LinkedIn blocks
automated/bot access, so I can't read it myself.

---

## 4. Design system

All colors, fonts, and spacing are CSS variables at the top of `src/index.css`:

```css
--black:  #050816;   /* base background */
--blue:   #2f6bff;   /* electric blue */
--cyan:   #22d3ee;
--violet: #8b5cf6;
--font-display: 'Space Grotesk';  /* headings */
--font-body:    'Inter';           /* body text */
--font-label:   'Sora';            /* nav, labels, buttons */
```
Change these to re-theme the entire site consistently.

---

## 5. Optional: wiring up a real backend

Out of the box, **no backend is required** — the contact form opens the visitor's email
client with the message pre-filled, and the chat widget is a rule-based keyword matcher
against `content.js` (see the comment at the bottom of `ChatAssistant.jsx`).

If you want to go further:

- **Store contact form submissions (Firebase Firestore):** create a Firebase project,
  copy your config into `.env` (see `.env.example`), install `firebase`
  (`npm install firebase`), and initialize it in `Contact.jsx`'s submit handler instead of
  (or in addition to) the `mailto:` redirect.
- **Real AI assistant instead of the rule-based widget:** stand up a small server route
  (Vercel/Netlify function, or any backend) that calls the Anthropic API server-side, and
  point `ChatAssistant.jsx` at that endpoint via `VITE_CHAT_BACKEND_URL`. **Never** put a
  real Anthropic/OpenAI API key in a `VITE_`-prefixed variable — anything with that prefix
  gets bundled into the public JavaScript anyone can read.
- **reCAPTCHA on the contact form:** get a site key from
  [Google reCAPTCHA](https://www.google.com/recaptcha/admin), add it to `.env`, and wire
  it into `Contact.jsx`.

---

## 6. Hosting & domain — full guide

See `DEPLOYMENT.md` for step-by-step instructions to deploy to Vercel or Netlify and
connect a custom domain.
