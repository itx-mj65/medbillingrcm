"use client";
import { useEffect } from "react";

export default function HospitalScripts() {
  useEffect(() => {
    // Scroll reveal — hospital page uses .visible class (not .in)
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
        }),
        { threshold: 0.07, rootMargin: "0px 0px -35px" }
      );
      document.querySelectorAll(".level2.reveal").forEach((el) => io.observe(el));
    }

    // Form submit
    const form = document.getElementById("hospitalForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const success = document.getElementById("hospitalSuccess");
        if (success) success.classList.add("show");
        const btn = form.querySelector("button");
        if (btn) btn.textContent = "Assessment Requested";
      });
    }

    // Hash scroll on load
    if (window.location.hash) {
      setTimeout(() => {
        document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
      }, 80);
    }
  }, []);

  return null;
}
