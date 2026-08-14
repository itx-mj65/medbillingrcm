"use client";
import { useEffect } from "react";

export default function PhysicianScripts() {
  useEffect(() => {
    document.body.classList.add("js-ready");

    const page = document.querySelector(".ph-page");
    if (!page) return;

    // Reveal elements already in viewport
    const showNow = () => {
      page.querySelectorAll(".ph-reveal:not(.ph-in)").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight + 80)
          el.classList.add("ph-in");
      });
    };
    showNow();
    const raf = requestAnimationFrame(showNow);

    // Observer for below-fold
    let io = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("ph-in"); io.unobserve(e.target); }
        }),
        { rootMargin: "0px 0px -40px", threshold: 0.04 }
      );
      page.querySelectorAll(".ph-reveal").forEach((el) => io.observe(el));
    }

    // Assessment form
    const form = document.getElementById("physicianAssessmentForm");
    const onSubmit = (e) => {
      e.preventDefault();
      const btn = form?.querySelector("button[type=submit]");
      if (btn) btn.textContent = "Request Received ✓";
    };
    form?.addEventListener("submit", onSubmit);

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      form?.removeEventListener("submit", onSubmit);
    };
  }, []);

  return null;
}
