"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* ── Reveal variant assignment rules ────────────────────────
   Elements are assigned a reveal variant based on:
   1. Their tag / role / className
   2. Their index within their parent section
   3. Whether they are inside a grid/flex container
   This creates organic stagger and directional flow per section.
──────────────────────────────────────────────────────────── */
function assignRevealVariants() {
  const reveals = document.querySelectorAll(".reveal:not([data-reveal])");

  reveals.forEach((el, globalIdx) => {
    const tag        = el.tagName.toLowerCase();
    const cls        = el.className || "";
    const parentCls  = el.parentElement?.className || "";
    const grandCls   = el.parentElement?.parentElement?.className || "";

    /* Count siblings with .reveal in the same direct parent */
    const siblings = Array.from(el.parentElement?.querySelectorAll(
      ":scope > .reveal, :scope > * > .reveal"
    ) || []);
    const sibIdx = siblings.indexOf(el);

    /* ── Rule 1: Eyebrows / labels come down ── */
    if (cls.includes("-ew") || cls.includes("eyebrow") ||
        cls.includes("sp-ew") || cls.includes("h-ew") ||
        cls.includes("svc-idx-ew") || cls.includes("specs-ew")) {
      el.dataset.reveal = "down";
      el.style.transitionDelay = "0s";
      return;
    }

    /* ── Rule 2: Stat blocks / badges / numbers → scale ── */
    if (cls.includes("-stat") || cls.includes("-num") ||
        cls.includes("-counter") || cls.includes("-badge") ||
        cls.includes("hero-stat") || cls.includes("ba-card") ||
        cls.includes("metric") || cls.includes("-kpi")) {
      el.dataset.reveal = "scale";
      el.style.transitionDelay = `${sibIdx * 0.08}s`;
      return;
    }

    /* ── Rule 3: Text paragraphs → blur (subtle) ── */
    if (tag === "p" && !cls.includes("card") && !cls.includes("card")) {
      el.dataset.reveal = "blur";
      el.style.transitionDelay = "0.1s";
      return;
    }

    /* ── Rule 4: Grid children — left / up / right alternate ── */
    const isInGrid = parentCls.includes("-grid") || parentCls.includes("-mosaic") ||
                     parentCls.includes("-row") || grandCls.includes("-grid");
    if (isInGrid) {
      const col = sibIdx % 3;
      if (col === 0)      el.dataset.reveal = "right"; /* leftmost → from left */
      else if (col === 2) el.dataset.reveal = "left";  /* rightmost → from right */
      else                el.dataset.reveal = "up";    /* middle → up */
      el.style.transitionDelay = `${sibIdx * 0.1}s`;
      return;
    }

    /* ── Rule 5: Steps / process items → alternate sides ── */
    if (cls.includes("-step") || cls.includes("-stage") ||
        cls.includes("-why-card") || cls.includes("-denial-card")) {
      el.dataset.reveal = sibIdx % 2 === 0 ? "right" : "left";
      el.style.transitionDelay = `${sibIdx * 0.12}s`;
      return;
    }

    /* ── Rule 6: Cards in a list → staggered up ── */
    if (cls.includes("-card") || cls.includes("-item") ||
        cls.includes("-cap-card") || cls.includes("-svc-card") ||
        cls.includes("svc-idx-card") || cls.includes("specs-live-card")) {
      el.dataset.reveal = "up";
      el.style.transitionDelay = `${sibIdx * 0.09}s`;
      return;
    }

    /* ── Rule 7: Section-level reveals (whole sections) → up ── */
    if (tag === "section" || tag === "article" || cls.includes("-sec")) {
      el.dataset.reveal = "up";
      el.style.transitionDelay = "0s";
      return;
    }

    /* ── Default: fade up with slight global-index stagger ── */
    el.dataset.reveal = "up";
    el.style.transitionDelay = `${(globalIdx % 4) * 0.06}s`;
  });
}

export default function Scripts() {
  const pathname = usePathname();

  /* Mark body js-ready once on mount */
  useEffect(() => {
    document.body.classList.add("js-ready");
  }, []);

  useEffect(() => {
    /* ── Assign reveal variants first ── */
    assignRevealVariants();

    /* ── Show elements already in viewport ── */
    const revealInView = () => {
      document.querySelectorAll(".reveal:not(.in):not(.visible)").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight + 80) {
          el.classList.add("in", "visible");
        }
      });
    };
    revealInView();
    const raf = requestAnimationFrame(revealInView);

    /* ── IntersectionObserver with rootMargin for early trigger ── */
    let io = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in", "visible");
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -32px 0px", threshold: 0.04 }
      );
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    } else {
      document.querySelectorAll(".reveal").forEach((el) =>
        el.classList.add("in", "visible")
      );
    }

    /* ── Workflow SVG animations ── */
    let flowIO = null;
    if ("IntersectionObserver" in window) {
      flowIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("active");
              flowIO.unobserve(e.target);
            }
          });
        },
        { threshold: 0.22 }
      );
      document.querySelectorAll("[data-workflow]").forEach((el) =>
        flowIO.observe(el)
      );
    }

    /* ── Generic CTA form handler ── */
    const ctaForms = document.querySelectorAll("form[data-cta-form]");
    const formHandlers = [];
    ctaForms.forEach((form) => {
      const onSubmit = async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector("button[type=submit]");
        if (submitBtn) {
          submitBtn.disabled    = true;
          submitBtn.textContent = "Sending…";
        }
        const data = Object.fromEntries(new FormData(form));
        data.page  = window.location.pathname;
        try {
          const res = await fetch("/api/assessment", {
            method:  "POST",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify(data),
          });
          if (res.ok) {
            const successEl = form.closest("[data-cta-section]")
                                  ?.querySelector("[data-success]");
            if (successEl) successEl.classList.add("show");
            if (submitBtn) submitBtn.textContent = "Request Received ✓";
            form.reset();
          } else { throw new Error("server error"); }
        } catch {
          const successEl = form.closest("[data-cta-section]")
                                ?.querySelector("[data-success]");
          if (successEl) successEl.classList.add("show");
          if (submitBtn) submitBtn.textContent = "Request Received ✓";
        }
      };
      form.addEventListener("submit", onSubmit);
      formHandlers.push({ form, onSubmit });
    });

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      flowIO?.disconnect();
      formHandlers.forEach(({ form, onSubmit }) =>
        form.removeEventListener("submit", onSubmit)
      );
    };
  }, [pathname]);

  return null;
}
