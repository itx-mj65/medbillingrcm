"use client";
import { useEffect, useRef } from "react";

const goodFit = [
  "You generate $1M+ in annual collections and want to optimize",
  "Your CFO or administrator is actively engaged in the process",
  "You have seen denial rates rise or AR aging degrade",
  "You want full revenue cycle visibility, not just billing execution",
  "You are expanding, acquiring, or restructuring operations",
  "You value infrastructure over activity, and outcomes over reports",
];

const notFit = [
  "You are looking for the lowest-cost billing option",
  "Your practice bills under $500K in annual collections",
  "You want to keep an in-house billing department",
  "You need a vendor handling one specialty in isolation",
  "You prefer monthly reporting over live dashboards",
  "Leadership is not involved in the revenue cycle decision",
];

export default function FitQualification() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    ref.current?.querySelectorAll(".observe,.observe-left,.observe-scale,.observe-right").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "var(--color-primary)", padding: "var(--space-section) 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="container-brand" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
          <div className="observe" style={{ display: "inline-block", fontFamily: "var(--font-montserrat)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d49b28", marginBottom: 12, paddingLeft: 20, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 12, height: 2, background: "#d49b28" }} />
            Is This the Right Fit?
          </div>
          <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            We work with practices ready to operate at a higher level
          </h2>
          <p className="observe delay-200" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.0625rem", lineHeight: 1.7 }}>
            Our medical practice billing services are built for a specific type of organization. Understanding fit saves everyone time.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }} className="fit-grid">
          {/* Good fit */}
          <div className="observe-left delay-200" style={{ background: "rgba(82,133,50,0.12)", borderRadius: "var(--radius-card)", padding: "36px 32px", border: "1px solid rgba(82,133,50,0.3)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(82,133,50,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>✓</div>
              <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "1.125rem", color: "#fff", margin: 0 }}>A strong fit if:</h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {goodFit.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(82,133,50,0.4)", border: "1.5px solid rgba(82,133,50,0.7)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 3, color: "#90d070", fontSize: "0.65rem", fontWeight: 700 }}>✓</span>
                  <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.9375rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.55 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not fit */}
          <div className="observe-right delay-300" style={{ background: "rgba(255,255,255,0.04)", borderRadius: "var(--radius-card)", padding: "36px 32px", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", color: "rgba(255,255,255,0.4)" }}>✕</div>
              <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "1.125rem", color: "#fff", margin: 0 }}>Not a fit if:</h3>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {notFit.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1.5px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 3, color: "rgba(255,255,255,0.35)", fontSize: "0.65rem", fontWeight: 700 }}>✕</span>
                  <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.55 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:767px){.fit-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
