"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PhysicianScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Mark body js-ready (triggers reveal animations)
    document.body.classList.add("js-ready");

    // Immediately reveal in-viewport elements
    const revealNow = () => {
      document.querySelectorAll(".reveal:not(.in):not(.visible)").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight + 80)
          el.classList.add("in", "visible");
      });
    };
    revealNow();
    const raf = requestAnimationFrame(revealNow);

    // Observer for below-fold elements
    let io = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in","visible"); io.unobserve(e.target); } }),
        { rootMargin: "0px 0px -40px", threshold: 0.04 }
      );
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    }

    // Assessment form
    const form = document.getElementById("physicianAssessmentForm");
    const onSubmit = (e) => {
      e.preventDefault();
      const btn = form.querySelector("button[type=submit]");
      if (btn) btn.textContent = "Request Received ✓";
    };
    form?.addEventListener("submit", onSubmit);

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      form?.removeEventListener("submit", onSubmit);
    };
  }, [pathname]);

  return null;
}
