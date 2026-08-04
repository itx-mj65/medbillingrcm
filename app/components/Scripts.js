"use client";
import { useEffect } from "react";

export default function Scripts() {
  useEffect(() => {
    // Mobile menu
    const menu = document.getElementById("menu");
    const nav = document.getElementById("nav");
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

    // Reveal on scroll
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 70)
          el.classList.add("in");
      });
    };
    window.addEventListener("scroll", reveal, { passive: true });
    reveal();

    // IntersectionObserver for reveal
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("in");
          }),
        { rootMargin: "0px 0px -45px 0px", threshold: 0.04 }
      );
      document.querySelectorAll(".reveal").forEach((el) =>
        revealObserver.observe(el)
      );
    }

    // Workflow animations
    if ("IntersectionObserver" in window) {
      const flowObserver = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("active");
          }),
        { threshold: 0.28 }
      );
      document.querySelectorAll("[data-workflow]").forEach((flow) =>
        flowObserver.observe(flow)
      );
    } else {
      document.querySelectorAll("[data-workflow]").forEach((el) =>
        el.classList.add("active")
      );
    }

    // Hero media: place after h1 on mobile
    const heroGrid = document.querySelector(".hero-grid");
    const heroCopy = document.querySelector(".hero-copy");
    const heroMedia = document.querySelector(".hero-media");
    const heroTitle = heroCopy?.querySelector("h1");
    const placeHeroMedia = () => {
      if (heroGrid && heroCopy && heroMedia && heroTitle) {
        if (window.matchMedia("(max-width:900px)").matches) {
          if (heroMedia.parentElement !== heroCopy) heroTitle.after(heroMedia);
        } else if (heroMedia.parentElement !== heroGrid) {
          heroGrid.append(heroMedia);
        }
      }
    };
    placeHeroMedia();
    window.addEventListener("resize", placeHeroMedia, { passive: true });

    // Form submit
    const form = document.getElementById("assessmentForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const successEl = document.getElementById("success");
        if (successEl) successEl.classList.add("show");
        const btn = e.currentTarget.querySelector("button");
        if (btn) btn.textContent = "Assessment Request Prepared";
      });
    }

    // Hash sync
    const syncHashTarget = () => {
      if (!window.location.hash) return;
      const target = document.querySelector(window.location.hash);
      if (!target) return;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          target.scrollIntoView({ block: "start" });
          reveal();
        })
      );
    };
    window.addEventListener("hashchange", syncHashTarget);
    syncHashTarget();
    setTimeout(syncHashTarget, 300);

    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", placeHeroMedia);
      window.removeEventListener("hashchange", syncHashTarget);
    };
  }, []);

  return null;
}
