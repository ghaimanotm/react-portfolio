# React Personal Portfolio

A six-page personal portfolio built with **React 18**, **Vite** and **React Router**.

## Pages
| Route | Page | Contents |
|---|---|---|
| `/` | Home | Welcome message, mission statement, buttons to other pages |
| `/about` | About Me | Legal name, headshot, bio, skills, link to PDF resume |
| `/projects` | Projects | 3 projects with image, role and outcome |
| `/education` | Education | Timeline of qualifications with dates |
| `/services` | Services | Services offered with illustrations |
| `/contact` | Contact Me | Contact info panel + form that redirects to Home |

## Project structure
```
public/            static assets (images, resume.pdf, logo.svg, _redirects)
src/
  components/      Navbar, Logo, Footer, PageHeader, ScrollToTop
  pages/           one component per page
  data/            siteContent.js – all personal content in one place
  styles/          global.css
  App.jsx          layout + routes
  main.jsx         entry point
```

## Personalising
1. Edit **`src/data/siteContent.js`** (name, initials, bio, projects, education, links).
2. Replace `public/images/headshot.svg` with your photo and update `headshotPath`.
3. Replace `public/resume.pdf` with your resume.
4. Update initials in `public/logo.svg` (browser tab icon).

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint     # check for code errors
```

## Deployment
- **Vercel:** import the GitHub repo → framework *Vite* → deploy (`vercel.json` handles routing).
- **Netlify:** import repo; `netlify.toml` sets build command and `dist` folder; `public/_redirects` handles routing.
- **Render (Static Site):** build `npm install && npm run build`, publish dir `dist`, add rewrite `/*` → `/index.html`.
