"use client";
import { useEffect, useRef } from "react";

const rows = [
  { metric: "First-pass clean claim rate", industry: "98% is HFMA's high-performance mark", ours: "97%, measured at the payer" },
  { metric: "Onboarding time", industry: "Rarely published by vendors", ours: "14 days" },
  { metric: "Setup fees", industry: "Common in the industry", ours: "None" },
  { metric: "Contract lock-in", industry: "Multi-year terms are standard", ours: "No long-term contract required" },
];

export default function BenchmarkTable() {
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
    <section ref={ref} style={{ background: "var(--color-ivory)", padding: "var(--space-section) 0" }}>
      <div className="container-brand">
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}>
          <div className="observe section-eyebrow">Measured Against Industry Benchmarks</div>
          <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 700, color: "var(--color-primary)", marginBottom: 16 }}>
            Where we sit against the benchmarks
          </h2>
          <p className="observe delay-200" style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.7 }}>
            Industry figures below are published by HFMA, MGMA, and Kodiak Solutions. Our numbers come from our own reporting and can be produced on request.
          </p>
        </div>

        <div className="observe delay-200" style={{ overflowX: "auto" }}>
          <table className="benchmark-table" style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 24px rgba(26,33,79,0.08)" }}>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Industry Standard</th>
                <th style={{ background: "var(--color-action)" }}>Medbilling RCM</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600, color: "var(--color-primary)" }}>{row.metric}</td>
                  <td style={{ color: "var(--color-muted)" }}>{row.industry}</td>
                  <td className="highlight-cell">{row.ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="observe delay-300" style={{ textAlign: "center", marginTop: 20, fontFamily: "var(--font-montserrat)", fontSize: "0.8125rem", color: "var(--color-muted)" }}>
          Denial rate row omitted deliberately. We will add it once system reporting can produce a verified aggregate figure.
        </p>
      </div>
    </section>
  );
}
