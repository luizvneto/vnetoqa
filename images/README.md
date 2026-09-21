# Images

This site works without any of these — the placeholders (SVG illustrations and
CSS) fill the gaps. Add real files here whenever you're ready, using these
names so the pages pick them up automatically.

| File | Used on | Recommended size |
|---|---|---|
| `profile.jpg` | About page portrait | Square or 4:5, at least 800px wide |
| `og-image.jpg` | Social share previews (link this in each page's `<meta property="og:image">`) | 1200×630 |
| `portfolio/your-project.jpg` | Portfolio cards — reference the path in `js/projects-data.js` via the `image` field | 16:10, at least 1200px wide |

## Swapping in your profile photo

In `about.html`, find this block:

```html
<svg viewBox="0 0 200 240" ...>
  ...placeholder illustration...
</svg>
```

Replace it with:

```html
<img src="images/profile.jpg" alt="Luiz Valério Neto" style="width:100%;max-width:280px;border-radius:4px;">
```

## Adding a project screenshot

Drop the image file in `images/portfolio/`, then in `js/projects-data.js` add
an `image` field to that project's entry:

```js
{
  title: "Your project",
  category: "QA & Automation",
  description: "...",
  link: "https://...",
  image: "images/portfolio/your-project.jpg"
}
```
