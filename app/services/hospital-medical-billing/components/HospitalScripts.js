"use client";
import { useEffect } from "react";

export default function HospitalScripts() {
  useEffect(() => {
    // Mobile menu
    const menu = document.getElementById("menu");
    const nav  = document.getElementById("nav");
    if (menu && nav) {
      menu.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        menu.setAttribute("aria-expanded", String(open));
        document.body.classList.toggle("menu-open", open);
      });
      nav.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          nav.classList.remove("open");
          menu.setAttribute("aria-expanded", "false");
          document.body.classList.remove("menu-open");
        })
      );
    }

    // Scroll reveal
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
        { rootMargin: "0px 0px -48px 0px", threshold: 0.05 }
      );
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    }

    // Form submit — hospital assessment
    const form = document.getElementById("hospitalAssessmentForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const success = document.getElementById("hospitalSuccess");
        if (success) success.classList.add("show");
        const btn = form.querySelector("button");
        if (btn) btn.textContent = "Assessment Requested";
      });
    }

    // Hash scroll
    if (window.location.hash) {
      setTimeout(() => {
        document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
      }, 100);
    }
  }, []);

  return null;
}
