"use client";
import { useEffect } from "react";

export default function Scripts() {
  useEffect(() => {
    // ── Scroll reveal (homepage uses .in class) ──
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
        { rootMargin: "0px 0px -45px 0px", threshold: 0.04 }
      );
      document.querySelectorAll(".reveal:not(.level2)").forEach((el) => io.observe(el));
    }

    // ── Hospital page reveal (.visible class) ──
    if ("IntersectionObserver" in window) {
      const io2 = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io2.unobserve(e.target); } }),
        { rootMargin: "0px 0px -35px 0px", threshold: 0.07 }
      );
      document.querySelectorAll(".level2.reveal").forEach((el) => io2.observe(el));
    }

    // ── Workflow SVG animations ──
    if ("IntersectionObserver" in window) {
      const flowIO = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("active"); flowIO.unobserve(e.target); } }),
        { threshold: 0.28 }
      );
      document.querySelectorAll("[data-workflow]").forEach((el) => flowIO.observe(el));
    }

    // ── Homepage assessment form ──
    const form = document.getElementById("assessmentForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("success")?.classList.add("show");
        const btn = form.querySelector("button[type=submit]");
        if (btn) btn.textContent = "Request Received";
      });
    }

    // ── Hospital assessment form ──
    const hForm = document.getElementById("hospitalForm");
    if (hForm) {
      hForm.addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("hospitalSuccess")?.classList.add("show");
        const btn = hForm.querySelector("button[type=submit]");
        if (btn) btn.textContent = "Request Received";
      });
    }
  }, []);

  return null;
}
