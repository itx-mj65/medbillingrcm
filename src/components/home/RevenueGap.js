"use client";
import { useEffect, useRef } from "react";

const problems = [
  {
    num: "01",
    title: "Denial rates keep climbing",
    body: "Initial denial rates hit 11.8% across the industry in 2024 (Kodiak Solutions, confirmed by HFMA). At scale that is hundreds of thousands of dollars sitting in delay or write-off every year.",
  },
  {
    num: "02",
    title: "Aging AR that nobody works",
    body: "Collection probability drops below 50% once a claim passes 90 days (HFMA benchmarks). Most billing teams are too busy with today's claims to systematically chase last quarter's.",
  },
  {
    num: "03",
    title: "No revenue visibility for leadership",
    body: "Without live dashboards, CFOs make decisions on month-old reports. By the time a denial pattern shows up in a monthly summary, it has already repeated across hundreds of claims.",
  },
  {
    num: "04",
    title: "Compliance risk at every touchpoint",
    body: "The 2026 CPT update introduced 270 new codes. Payer policies shift mid-year. Unmanaged, these changes compound into audit exposure across the whole revenue cycle.",
  },
];

const callouts = [
  { value: "$262B", label: "Lost annually", desc: "U.S. healthcare loses an estimated $262 billion a year to claim denials (Modern Healthcare)." },
  { value: "60%", label: "Never resubmitted", desc: "Six in ten denied claims are never appealed or resubmitted (AHIMA Journal)." },
  { value: "86%", label: "Avoidable", desc: "Most denials are preventable before the claim leaves the building (Change Healthcare, confirmed by MGMA)." },
];

export default function RevenueGap() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    const els = sectionRef.current?.querySelectorAll(".observe, .observe-left, .observe-scale, .observe-right");
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "var(--color-paper)", padding: "var(--space-section) 0" }}>
      <div className="container-brand">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 64px" }}>
          <div className="observe section-eyebrow">The Revenue Gap</div>
          <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 700, color: "var(--color-primary)", marginBottom: 16 }}>
            Most practices are losing revenue they have already earned
          </h2>
          <p className="observe delay-200" style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.7 }}>
            Fragmented billing is not a staffing problem. It is a systems problem. The gap between services delivered and revenue collected is structural, and it widens quietly.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "start" }} className="gap-grid">
          {/* Problem cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }} className="stagger">
            {problems.map((p) => (
              <div key={p.num} className="observe card" style={{ padding: "28px 32px", display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{
                  flexShrink: 0, width: 44, height: 44, borderRadius: 10,
                  background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "0.75rem", color: "#fff",
                }}>
                  {p.num}
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: "1.0625rem", color: "var(--color-primary)", marginBottom: 8 }}>
                    {p.title}
                  </h3>
                  <p style={{ color: "var(--color-muted)", fontSize: "0.9375rem", lineHeight: 1.65, margin: 0 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stat callouts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 100 }} className="stagger callout-col">
            {callouts.map((c) => (
              <div key={c.value} className="observe-scale" style={{
                background: "var(--color-primary)", borderRadius: "var(--radius-card)", padding: "28px 24px",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "clamp(2rem,4vw,2.75rem)", color: "#d49b28", lineHeight: 1, marginBottom: 8 }}>
                  {c.value}
                </div>
                <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em", marginBottom: 10, textTransform: "uppercase" }}>
                  {c.label}
                </div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .gap-grid { grid-template-columns: 1fr !important; }
          .callout-col { position: static !important; display: grid !important; grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 600px) {
          .callout-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
