"use client";
import { useEffect } from "react";

export default function HospitalScripts() {
  useEffect(() => {
    // Mobile menu — shared with header
    const menu = document.getElementById("menu");
    const nav  = document.getElementById("nav");
    if (menu && nav) {
      const toggle = () => {
        const open = nav.classList.toggle("open");
        menu.setAttribute("aria-expanded", String(open));
        menu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
        document.body.classList.toggle("menu-open", open);
      };
      menu.addEventListener("click", toggle);
      nav.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          nav.classList.remove("open");
          menu.setAttribute("aria-expanded", "false");
          document.body.classList.remove("menu-open");
        })
      );
    }

    // Scroll reveal — uses .visible class like the original
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
        }),
        { threshold: 0.07, rootMargin: "0px 0px -35px" }
      );
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
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
