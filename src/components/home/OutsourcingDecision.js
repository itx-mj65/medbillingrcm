"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const stats = [
  { value: "30–50%", label: "Cost reduction", desc: "Practices that move to outsourced billing typically cut total cost against the in-house equivalent." },
  { value: "40%", label: "Turnover rate", desc: "Revenue cycle roles turn over at 11–40% per year against a 3.8% national average (Experian)." },
  { value: "90 days", label: "Ramp-up time", desc: "A new hire needs 60–90 days before they are productive on your payer mix." },
];

export default function OutsourcingDecision() {
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
    <section ref={ref} style={{ background: "var(--color-paper)", padding: "var(--space-section) 0" }}>
      <div className="container-brand">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="outsource-grid">
          {/* Left */}
          <div>
            <div className="observe section-eyebrow">The Outsourcing Decision</div>
            <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 700, color: "var(--color-primary)", marginBottom: 20 }}>
              What it costs to keep billing in-house
            </h2>
            <div className="observe delay-200">
              <p style={{ color: "var(--color-muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 16 }}>
                Healthcare revenue cycle outsourcing is usually pitched as a cost comparison. It is closer to a capacity question.
              </p>
              <p style={{ color: "var(--color-muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 16 }}>
                A medical billing specialist earns a median of $50,250 a year (Bureau of Labor Statistics, May 2024). Add benefits, payroll taxes, software licenses, training, and workspace and the loaded cost lands between $90,000 and $140,000 per biller (Medical Billers and Coders, 2026).
              </p>
              <p style={{ color: "var(--color-muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 16 }}>
                That part is visible on a budget line. Turnover is the part that is not. Revenue cycle roles turn over at 11% to 40% a year against a 3.8% national average (Experian). Replacing one biller runs $10,000 to $30,000, and a new hire needs 60 to 90 days before they are productive on your payer mix.
              </p>
              <p style={{ color: "var(--color-ink)", fontSize: "1rem", lineHeight: 1.75, fontWeight: 500 }}>
                So the real question is not whether you can afford to outsource medical billing. It is whether your practice can absorb a resignation in the middle of a bad denial quarter.
              </p>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {stats.map((s, i) => (
              <div key={i} className="observe-right" style={{ transitionDelay: `${i * 100}ms` }}>
                <div style={{ background: "#fff", borderRadius: "var(--radius-card)", padding: "28px 28px", border: "1px solid rgba(26,33,79,0.08)", borderLeft: "4px solid var(--color-secondary)" }}>
                  <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "2.25rem", color: "var(--color-primary)", lineHeight: 1, marginBottom: 6 }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.8125rem", color: "var(--color-secondary)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 10 }}>
                    {s.label}
                  </div>
                  <p style={{ color: "var(--color-muted)", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}

            <div className="observe-right delay-400" style={{
              background: "var(--color-primary)", borderRadius: "var(--radius-card)", padding: "28px 28px",
            }}>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 16px", fontStyle: "italic" }}>
                When you outsource medical billing services, what you are buying is continuity. Someone is always working your claims.
              </p>
              <Link href="/request-free-audit/" className="btn-primary" style={{ fontSize: "0.875rem" }}>
                Get a Free Revenue Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.outsource-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
