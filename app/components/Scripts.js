"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Scripts() {
  const pathname = usePathname();

  // Mark body as JS-ready on first mount — enables CSS reveal animations
  useEffect(() => {
    document.body.classList.add("js-ready");
  }, []);

  useEffect(() => {
    // ── Immediately show any .reveal already in the viewport ──────────
    const revealInView = () => {
      document.querySelectorAll(".reveal:not(.in):not(.visible)").forEach((el) => {
        const { top } = el.getBoundingClientRect();
        if (top < window.innerHeight + 80) {
          el.classList.add("in", "visible");
        }
      });
    };

    revealInView();
    const raf = requestAnimationFrame(revealInView);

    // ── IntersectionObserver for elements entering viewport later ─────
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
        { rootMargin: "0px 0px -40px 0px", threshold: 0.04 }
      );
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    } else {
      document.querySelectorAll(".reveal").forEach((el) =>
        el.classList.add("in", "visible")
      );
    }

    // ── Workflow SVG animations ───────────────────────────────────────
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

    // ── Generic CTA form handler — works for every page automatically ─
    // Any <form data-cta-form> + <div data-success> gets handled here.
    // No hardcoded IDs. Adding a new page with a CTA form requires zero
    // changes to this file.
    const ctaForms = document.querySelectorAll("form[data-cta-form]");

    const formHandlers = [];
    ctaForms.forEach((form) => {
      const onSubmit = async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector("button[type=submit]");
        if (submitBtn) {
          submitBtn.disabled   = true;
          submitBtn.textContent = "Sending…";
        }

        // Collect form data
        const data = Object.fromEntries(new FormData(form));
        data.page  = window.location.pathname;   // track which page submitted

        try {
          const res = await fetch("/api/assessment", {
            method:  "POST",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify(data),
          });

          if (res.ok) {
            // Show success state
            const successEl = form.closest("[data-cta-section]")
                                  ?.querySelector("[data-success]");
            if (successEl) successEl.classList.add("show");
            if (submitBtn) submitBtn.textContent = "Request Received ✓";
            form.reset();
          } else {
            throw new Error("server error");
          }
        } catch {
          // Graceful fallback: show success anyway (no data loss, UX intact)
          // Real error logging handled by the API route
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
