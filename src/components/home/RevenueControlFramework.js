"use client";
import { useEffect, useRef, useState } from "react";

const phases = [
  {
    num: "01",
    title: "Revenue audit and baseline",
    body: "Full diagnostic of the current cycle. We identify leakage points and establish KPI baselines before anything changes.",
    icon: "🔍",
  },
  {
    num: "02",
    title: "System architecture",
    body: "Design the infrastructure: workflows, integrations, coding protocols, payer mapping.",
    icon: "🏗️",
  },
  {
    num: "03",
    title: "Deployment and onboarding",
    body: "14-day structured onboarding with no disruption to daily operations and no gap in claim submission.",
    icon: "🚀",
  },
  {
    num: "04",
    title: "Operational excellence",
    body: "Continuous claims optimization, denial resolution, and AR pursuit at a set cadence.",
    icon: "⚙️",
  },
  {
    num: "05",
    title: "Revenue intelligence",
    body: "Monthly CFO reporting, payer performance reviews, and optimization cycles that compound over time.",
    icon: "📊",
  },
];

export default function RevenueControlFramework() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    ref.current?.querySelectorAll(".observe,.observe-left,.observe-scale,.observe-right").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Auto-cycle active phase
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % phases.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} style={{ background: "var(--color-primary)", padding: "var(--space-section) 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="container-brand" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 64px" }}>
          <div className="observe" style={{ display: "inline-block", fontFamily: "var(--font-montserrat)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d49b28", marginBottom: 12, paddingLeft: 20, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 12, height: 2, background: "#d49b28" }} />
            The Revenue Control Framework™
          </div>
          <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            A five-phase system that closes revenue leaks at every stage
          </h2>
          <p className="observe delay-200" style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.0625rem", lineHeight: 1.7 }}>
            The Revenue Control Framework is the five-phase system Medbilling RCM uses to move a practice from diagnosis to steady-state performance.
          </p>
        </div>

        {/* Desktop: horizontal phases */}
        <div className="observe delay-200" style={{ display: "flex", gap: 0, alignItems: "stretch" }} role="list">
          {phases.map((p, i) => (
            <button
              key={i}
              role="listitem"
              onClick={() => setActive(i)}
              style={{
                flex: 1, position: "relative",
                background: active === i ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)",
                border: "none",
                borderTop: active === i ? "3px solid #d49b28" : "3px solid rgba(255,255,255,0.1)",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                padding: "28px 20px", cursor: "pointer",
                textAlign: "left",
                transition: "background 0.25s, border-top-color 0.25s",
                borderRadius: i === 0 ? "14px 0 0 14px" : i === phases.length - 1 ? "0 14px 14px 0" : 0,
              }}
            >
              <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: active === i ? "#d49b28" : "rgba(255,255,255,0.3)", marginBottom: 6 }}>
                Phase {p.num}
              </div>
              <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>{p.icon}</div>
              <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: "0.9375rem", color: "#fff", lineHeight: 1.3, marginBottom: 10 }}>
                {p.title}
              </div>
              <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.55, display: active === i ? "block" : "none" }}>
                {p.body}
              </div>
            </button>
          ))}
        </div>

        {/* Mobile: stacked */}
        <div className="phase-mobile" style={{ display: "none", flexDirection: "column", gap: 12 }}>
          {phases.map((p, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.06)", borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.1)",
              borderTop: "3px solid #d49b28",
              padding: "24px 20px",
            }}>
              <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d49b28", marginBottom: 8 }}>Phase {p.num}</div>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: "1rem", color: "#fff", marginBottom: 6 }}>{p.title}</div>
                  <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{p.body}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:700px){
          .phase-mobile{display:flex !important;}
          .phase-mobile + div[style*="display:flex"]{display:none !important;}
        }
      `}</style>
    </section>
  );
}
