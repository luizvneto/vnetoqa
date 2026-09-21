/* =================================================================
   Luiz Valério Neto — Senior QA Engineer
   Shared site behavior. Every function checks for its own elements,
   so this one file is safe to include on every page.
   ================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initScrollReveal();
  initLeaves();
  initTypewriter();
  initPortfolioFilter();
  initFooterYear();
});

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/* ---------- Header + mobile nav ---------- */
function initNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");

  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".main-nav .nav-link, .main-nav .nav-cta").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------- Falling autumn leaves (hero decoration only) ---------- */
function initLeaves() {
  const container = document.getElementById("leaves");
  if (!container || prefersReducedMotion) return;

  const colors = ["var(--rust)", "var(--marigold)", "var(--moss)"];
  const leafCount = 13;

  for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement("span");
    leaf.className = "leaf";
    const size = 8 + Math.random() * 8;
    const left = Math.random() * 95;
    const duration = 9 + Math.random() * 7;
    const delay = Math.random() * -16;
    const drift = Math.round(-60 + Math.random() * 120);
    const fall = Math.round(560 + Math.random() * 200);
    const rotateStart = Math.round(Math.random() * 360);

    leaf.style.width = `${size}px`;
    leaf.style.height = `${size}px`;
    leaf.style.left = `${left}%`;
    leaf.style.background = colors[i % colors.length];
    leaf.style.animationDuration = `${duration}s`;
    leaf.style.animationDelay = `${delay}s`;
    leaf.style.setProperty("--drift", `${drift}px`);
    leaf.style.setProperty("--fall", `${fall}px`);
    leaf.style.transform = `rotate(${rotateStart}deg)`;

    container.appendChild(leaf);
  }
}

/* ---------- Hero typewriter tagline ---------- */
function initTypewriter() {
  const el = document.getElementById("typedTagline");
  if (!el) return;

  const phrases = [
    "Building quality into every release.",
    "LATAM-based. Built for global teams.",
    "Your international QA partner.",
  ];

  if (prefersReducedMotion) {
    el.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 45 + Math.random() * 40);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 25);
    }
  }

  tick();
}

/* ---------- Portfolio filter + render ---------- */
function initPortfolioFilter() {
  const grid = document.getElementById("portfolioGrid");
  const filterBar = document.getElementById("filterBar");
  if (!grid || typeof projectsData === "undefined") return;

  const categories = ["all", ...new Set(projectsData.map((p) => p.category))];

  if (filterBar) {
    filterBar.innerHTML = categories
      .map(
        (cat, i) =>
          `<button class="filter-tab${i === 0 ? " is-active" : ""}" data-filter="${cat}">${
            cat === "all" ? "All" : cat
          }</button>`
      )
      .join("");
  }

  function renderCards(filter) {
    grid.innerHTML = projectsData
      .map((project) => {
        const visible = filter === "all" || project.category === filter;
        const linkHtml =
          project.link && project.link !== "#"
            ? `<a class="text-link" href="${project.link}" target="_blank" rel="noopener">View project
                <svg class="icon" viewBox="0 0 24 24" width="14" height="14"><path d="M7 17L17 7M9 7h8v8"/></svg>
               </a>`
            : "";
        const imageHtml = project.image
          ? `<img src="${project.image}" alt="${project.title}" style="width:100%;aspect-ratio:16/10;object-fit:cover;margin:-1.8rem -1.6rem 1.2rem;width:calc(100% + 3.2rem);max-width:none;">`
          : "";
        return `
          <article class="index-card project-card${visible ? " is-visible" : ""}${
          project.placeholder ? " index-card--placeholder" : ""
        }" data-category="${project.category}">
            ${imageHtml}
            <span class="tag" style="margin-bottom:0.9rem;">${project.category}</span>
            <h3 class="index-card__title">${project.title}</h3>
            <p>${project.description}</p>
            ${linkHtml}
          </article>`;
      })
      .join("");
  }

  renderCards("all");

  if (filterBar) {
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-tab");
      if (!btn) return;
      filterBar
        .querySelectorAll(".filter-tab")
        .forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderCards(btn.dataset.filter);
    });
  }
}

/* ---------- Footer year ---------- */
function initFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}
