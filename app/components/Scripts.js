"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/* ─────────────────────────────────────────────────────────────
   REVEAL VARIANT RULES
   Called once per page navigation. Assigns data-reveal + delay.
───────────────────────────────────────────────────────────── */
function assignRevealVariants() {
  document.querySelectorAll(".reveal").forEach((el, globalIdx) => {
    // Always reassign — page navigation creates fresh DOM
    const tag       = el.tagName.toLowerCase();
    const cls       = el.className || "";
    const parentCls = el.parentElement?.className || "";
    const grandCls  = el.parentElement?.parentElement?.className || "";

    const siblings = Array.from(
      el.parentElement?.querySelectorAll(":scope > .reveal, :scope > * > .reveal") || []
    );
    const sibIdx = siblings.indexOf(el);

    // Eyebrows → drop from above
    if (/\b(-ew|eyebrow|sp-ew|h-ew|svc-idx-ew|specs-ew)\b/.test(cls)) {
      el.dataset.reveal = "down";
      el.style.transitionDelay = "0s";
      return;
    }
    // Stats / badges → scale in
    if (/\b(-stat|hero-stat|ba-card|counter-card|-badge|-num|-metric|-kpi)\b/.test(cls)) {
      el.dataset.reveal = "scale";
      el.style.transitionDelay = `${sibIdx * 0.08}s`;
      return;
    }
    // Body paragraphs → blur clear
    if (tag === "p" && !/card/.test(cls)) {
      el.dataset.reveal = "blur";
      el.style.transitionDelay = "0.08s";
      return;
    }
    // Grid/mosaic children → wave: left | up | right by column
    if (/(-grid|-mosaic|-row)/.test(parentCls) || /(-grid)/.test(grandCls)) {
      const col = sibIdx % 3;
      el.dataset.reveal = col === 0 ? "right" : col === 2 ? "left" : "up";
      el.style.transitionDelay = `${sibIdx * 0.1}s`;
      return;
    }
    // Process steps / why-cards → alternate left/right
    if (/(-step|-stage|-why-card|-denial-card|-svc-card)/.test(cls)) {
      el.dataset.reveal = sibIdx % 2 === 0 ? "right" : "left";
      el.style.transitionDelay = `${sibIdx * 0.11}s`;
      return;
    }
    // Regular cards → staggered up
    if (/(-card|-item|-cap-card|svc-idx-card|specs-live-card|specs-all-card)/.test(cls)) {
      el.dataset.reveal = "up";
      el.style.transitionDelay = `${sibIdx * 0.09}s`;
      return;
    }
    // Sections → up, no delay
    if (tag === "section" || tag === "article") {
      el.dataset.reveal = "up";
      el.style.transitionDelay = "0s";
      return;
    }
    // Default → fade up
    el.dataset.reveal = "up";
    el.style.transitionDelay = `${(globalIdx % 5) * 0.05}s`;
  });
}

/* ─────────────────────────────────────────────────────────────
   FULL RESET — called on every route change before new setup
   Removes ALL prior .in / .visible state and data-reveal attrs
   so the new page starts clean.
───────────────────────────────────────────────────────────── */
function resetReveals() {
  document.querySelectorAll(".reveal").forEach((el) => {
    el.classList.remove("in", "visible");
    delete el.dataset.reveal;
    el.style.transitionDelay = "";
  });
}

export default function Scripts() {
  const pathname = usePathname();
  const ioRef    = useRef(null);
  const flowRef  = useRef(null);

  /* ── Mark body js-ready on first mount only ── */
  useEffect(() => {
    document.body.classList.add("js-ready");
  }, []);

  useEffect(() => {
    /* 1. Tear down previous observers */
    ioRef.current?.disconnect();
    flowRef.current?.disconnect();

    /* 2. Reset all reveal state from previous page */
    resetReveals();

    /* 3. Small rAF so React has committed new page DOM */
    const setup = () => {
      /* 4. Assign variants to fresh DOM */
      assignRevealVariants();

      /* 5. Immediately reveal anything already in viewport */
      const vh = window.innerHeight;
      document.querySelectorAll(".reveal").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh + 60) el.classList.add("in", "visible");
      });

      /* 6. IntersectionObserver for below-the-fold elements */
      if ("IntersectionObserver" in window) {
        ioRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("in", "visible");
                ioRef.current?.unobserve(e.target);
              }
            });
          },
          { rootMargin: "0px 0px -24px 0px", threshold: 0.04 }
        );
        document.querySelectorAll(".reveal:not(.in)").forEach((el) =>
          ioRef.current.observe(el)
        );
      } else {
        // Fallback: show everything
        document.querySelectorAll(".reveal").forEach((el) =>
          el.classList.add("in", "visible")
        );
      }

      /* 7. Workflow SVG observer */
      if ("IntersectionObserver" in window) {
        flowRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("active");
                flowRef.current?.unobserve(e.target);
              }
            });
          },
          { threshold: 0.2 }
        );
        document.querySelectorAll("[data-workflow]").forEach((el) =>
          flowRef.current.observe(el)
        );
      }
    };

    // Use double rAF — ensures browser has painted new page content
    const r1 = requestAnimationFrame(() => {
      const r2 = requestAnimationFrame(setup);
      return r2;
    });

    /* 8. CTA form handler */
    const forms = document.querySelectorAll("form[data-cta-form]");
    const handlers = [];
    forms.forEach((form) => {
      const onSubmit = async (e) => {
        e.preventDefault();
        const btn = form.querySelector("button[type=submit]");
        if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
        const payload = { ...Object.fromEntries(new FormData(form)), page: pathname };
        try {
          const res = await fetch("/api/assessment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const ok = res.ok;
          const success = form.closest("[data-cta-section]")?.querySelector("[data-success]");
          if (success) success.classList.add("show");
          if (btn) btn.textContent = ok ? "Request Received ✓" : "Sent ✓";
          form.reset();
        } catch {
          const success = form.closest("[data-cta-section]")?.querySelector("[data-success]");
          if (success) success.classList.add("show");
          if (btn) btn.textContent = "Sent ✓";
        }
      };
      form.addEventListener("submit", onSubmit);
      handlers.push({ form, onSubmit });
    });

    return () => {
      cancelAnimationFrame(r1);
      ioRef.current?.disconnect();
      flowRef.current?.disconnect();
      handlers.forEach(({ form, onSubmit }) =>
        form.removeEventListener("submit", onSubmit)
      );
    };
  }, [pathname]);

  return null;
}
