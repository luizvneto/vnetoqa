# Luiz Valério Neto — Senior QA Engineer website

A static site (plain HTML/CSS/JS, no build step) presenting you as an
independent Senior QA Engineer available for LATAM-based contracts with
international companies. Copy this folder straight into your hosting repo.

## Structure

```
index.html                 Home
about.html                 Bio, timeline, education & recognition
services.html              What you offer + engagement models
portfolio.html             Project grid, powered by js/projects-data.js
contact.html                Location, timezone, email, LinkedIn — no form
blog.html                  Blog listing — NOT linked in the nav yet (see below)
blog-post-template.html    A ready-to-duplicate post layout with Lorem Ipsum
css/style.css               Design system: colors, type, components, layout
css/animations.css          Keyframes + scroll-reveal states
js/main.js                  Nav, scroll reveal, falling leaves, typewriter, portfolio filter
js/projects-data.js         Edit this to add/remove portfolio projects
images/                     See images/README.md
```

## First things to customize

1. **Contact info** — `contact.html` and the footer on every page use
   `your.email@example.com` as a placeholder. Find-and-replace it across all
   HTML files with your real email.
2. **Achievements** — `index.html` and `about.html` have bracketed
   placeholders (`[Add: conference name and talk title]`, etc.) under
   "Education & recognition." Replace them with your real conference talks,
   published articles, and awards from LinkedIn.
3. **About page bio** — the bio paragraphs and the timeline in `about.html`
   are a starting draft. Read them over, adjust anything that doesn't sound
   like you, and fill in the bracketed timeline entry.
4. **Portfolio** — open `js/projects-data.js` and replace the three example
   entries with your real projects. That's the only file you need to touch;
   the page renders itself from that list.
5. **Photo** — see `images/README.md` for how to swap the illustrated
   placeholder on the About page for a real photo.

## Publishing your blog

`blog.html` and `blog-post-template.html` exist but aren't linked from the
navigation on any page yet — that's intentional, so the site doesn't point
visitors to an empty blog. When you've written your first post:

1. Duplicate `blog-post-template.html`, rename it, and replace the Lorem
   Ipsum with your real writing (instructions are in a comment at the top of
   that file).
2. Replace the "Template preview" card in `blog.html` with a card linking to
   your real post.
3. In every HTML file, find the commented-out line in the nav:
   ```html
   <!-- Blog link hidden until you're ready to publish. Uncomment to reveal it in the nav:
   <li><a href="blog.html" class="nav-link">Blog</a></li>
   -->
   ```
   and uncomment the `<li>` line.

## Maintenance notes

- The header and footer markup is duplicated on every page (no build step,
  so this is the simplest approach for a plain static site). If you update
  the nav or footer, use find-and-replace across all HTML files, or move to
  a static site generator later if this gets tedious.
- Colors, fonts, and spacing all live in `css/style.css` under `:root` at
  the top of the file — change a value there to restyle the whole site.
- Animations respect `prefers-reduced-motion` automatically.

## Deploying

No build step needed — any static host works:

- **GitHub Pages**: push this folder to a repo and enable Pages in settings.
- **Netlify / Vercel**: drag-and-drop the folder in their dashboard, or
  connect the repo for automatic deploys.

## Browser support

Built with standard HTML5/CSS3/vanilla JS — works in all current browsers.
Fonts (Fraunces, Work Sans) load from Google Fonts; an internet connection
is needed for them to render, with sensible system-font fallbacks otherwise.
