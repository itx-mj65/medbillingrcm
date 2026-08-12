"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Scripts() {
  const pathname = usePathname();

  // Mark body as JS-ready on first mount — enables CSS reveal animations
  // Done separately so it runs only once and as fast as possible
  useEffect(() => {
    document.body.classList.add("js-ready");
  }, []);

  useEffect(() => {
    // ── Immediately show any .reveal already in the viewport ──
    // This handles: page load, client-side navigation, anchor jumps
    const revealInView = () => {
      document.querySelectorAll(".reveal:not(.in):not(.visible)").forEach((el) => {
        const { top } = el.getBoundingClientRect();
        if (top < window.innerHeight + 80) {
          el.classList.add("in", "visible");
        }
      });
    };

    // Run immediately, then again after a frame to catch any
    // elements that are positioned after React commits
    revealInView();
    const raf = requestAnimationFrame(revealInView);

    // ── Observer for elements that scroll into view later ──
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
      // Fallback: show everything
      document.querySelectorAll(".reveal").forEach((el) =>
        el.classList.add("in", "visible")
      );
    }

    // ── Workflow SVG animations ──
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

    // ── Homepage assessment form ──
    const form = document.getElementById("assessmentForm");
    const onSubmit = (e) => {
      e.preventDefault();
      document.getElementById("success")?.classList.add("show");
      const btn = form.querySelector("button[type=submit]");
      if (btn) btn.textContent = "Request Received";
    };
    form?.addEventListener("submit", onSubmit);

    // ── Hospital assessment form ──
    const hForm = document.getElementById("hospitalForm");
    const onHSubmit = (e) => {
      e.preventDefault();
      document.getElementById("hospitalSuccess")?.classList.add("show");
      const btn = hForm.querySelector("button[type=submit]");
      if (btn) btn.textContent = "Request Received";
    };
    hForm?.addEventListener("submit", onHSubmit);

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      flowIO?.disconnect();
      form?.removeEventListener("submit", onSubmit);
      hForm?.removeEventListener("submit", onHSubmit);
    };
  }, [pathname]); // ← re-runs on every client-side navigation

  return null;
}
