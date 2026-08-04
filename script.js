const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Reveal on scroll -------------------------------------------------------- */
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}

/* Scroll progress bar ----------------------------------------------------- */
const progress = document.querySelector(".scroll-progress i");

if (progress) {
  let ticking = false;

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    },
    { passive: true }
  );

  update();
}

/* Print trigger (used by resume.html) ------------------------------------- */
document.querySelector("[data-print]")?.addEventListener("click", () => window.print());
