/* =================================================================
   Portfolio data
   -----------------------------------------------------------------
   This is the ONLY file you need to touch to update your portfolio.
   Add, remove, or edit objects in the array below — the portfolio
   page renders itself from this list automatically.

   Fields:
   - title       : project name (string)
   - category    : short category label, used for the filter tabs
                   (e.g. "QA & Automation", "Research", "Personal")
   - description : 1-3 sentences, plain language
   - link        : a URL to the live project/repo, or "#" if none yet
   - image       : optional. Path to a screenshot, e.g.
                   "images/portfolio/my-project.png". Leave it out
                   entirely if you don't have one yet — the card
                   still looks fine without it.
   - placeholder : set to true only for template/example cards —
                   remove this field (or set to false) on real projects
   ================================================================= */

const projectsData = [
  {
    title: "Add your first project",
    category: "QA & Automation",
    description:
      "This is a placeholder card. Replace this whole object with a real project: a title, a couple of plain-language sentences on what it does and what you built, and a link if you have one.",
    link: "#",
    placeholder: true,
  },
  {
    title: "Add a research or academic project",
    category: "Research",
    description:
      "Worked on something during your Master's, a paper, or a study? This is a good spot for it — swap this text for the real thing.",
    link: "#",
    placeholder: true,
  },
  {
    title: "Add a personal or side project",
    category: "Personal",
    description:
      "Side projects, open-source contributions, tools you built for yourself — anything that shows how you think outside of client work.",
    link: "#",
    placeholder: true,
  },
];
