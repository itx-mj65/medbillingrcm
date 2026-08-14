"use client";
import { useEffect } from "react";

export default function PhysicianScripts() {
  useEffect(() => {
    // Scroll reveal
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("ph-in"); io.unobserve(e.target); } }),
        { rootMargin: "0px 0px -40px", threshold: 0.04 }
      );
      document.querySelectorAll(".ph-reveal").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 80) { el.classList.add("ph-in"); }
        else { io.observe(el); }
      });
    } else {
      document.querySelectorAll(".ph-reveal").forEach((el) => el.classList.add("ph-in"));
    }

    // FAQ accordion
    document.querySelectorAll("[data-faq]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        const panel = document.getElementById(btn.getAttribute("aria-controls"));
        btn.setAttribute("aria-expanded", String(!expanded));
        if (panel) { if (!expanded) panel.setAttribute("data-open",""); else panel.removeAttribute("data-open"); }
      });
    });

    // Assessment form
    const form = document.getElementById("physicianAssessmentForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = form.querySelector("button[type=submit]");
        if (btn) btn.textContent = "Request Received ✓";
      });
    }
  }, []);

  return null;
}
