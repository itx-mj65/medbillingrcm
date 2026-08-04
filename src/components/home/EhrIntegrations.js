"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const ehrs = [
  "eClinicalWorks", "RXNT", "Office Ally", "Epic",
  "Athenahealth", "NextGen", "Kareo", "AdvancedMD",
  "DrChrono", "Greenway Health", "Practice Fusion", "CareCloud",
];

export default function EhrIntegrations() {
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
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
          <div className="observe section-eyebrow">EHR & PM Integrations</div>
          <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 700, color: "var(--color-primary)", marginBottom: 16 }}>
            Works with the systems you already run
          </h2>
          <p className="observe delay-200" style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.7 }}>
            No forced platform migration. No proprietary software you have to buy. We integrate with your existing EHR and practice management setup, and custom integrations are scoped during the revenue audit at no extra charge.
          </p>
        </div>

        {/* Logo grid */}
        <div className="observe delay-200" style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 12 }} role="list">
          {ehrs.map((ehr) => (
            <div key={ehr} role="listitem" className="ehr-logo" title={ehr} style={{ minHeight: 56 }}>
              <span style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "0.75rem", textAlign: "center", lineHeight: 1.3 }}>{ehr}</span>
            </div>
          ))}
        </div>

        <div className="observe delay-300" style={{ textAlign: "center", marginTop: 28 }}>
          <p style={{ color: "var(--color-muted)", fontSize: "0.9375rem", marginBottom: 20 }}>
            Plus 30+ additional platforms. If your system is not listed, it is almost certainly still supported.
          </p>
          <Link href="/contact-us/" className="btn-outline-dark" style={{ fontSize: "0.9375rem" }}>
            Check Your System Compatibility
          </Link>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){div[role="list"].observe{grid-template-columns:repeat(4,1fr) !important;}}
        @media(max-width:600px){div[role="list"].observe{grid-template-columns:repeat(3,1fr) !important;}}
        @media(max-width:400px){div[role="list"].observe{grid-template-columns:repeat(2,1fr) !important;}}
      `}</style>
    </section>
  );
}
