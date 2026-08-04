"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const points = [
  "Medbilling RCM measures its 97% first-pass clean claim rate at the payer with zero rework, not at the clearinghouse where the number always looks better.",
  "The clients above are named, with their permission, because work you can point to counts for more than work you can only describe. Our reporting is available to any prospective client who wants to see it before signing anything.",
  "Our processes were built around the payer environment that exists right now. Automated denial engines. Prior authorization lists that expand mid-year. The 270 new CPT codes that landed this year.",
  "We also work with a focused number of practices rather than a large book of accounts. Your payer mix, your denial patterns, and your department-level performance are things our team knows rather than things we look up.",
  "Medbilling RCM does not require long-term contracts. Practices stay because the numbers hold.",
  "SOC 2 Type II certification and HIPAA-compliant infrastructure were in place before we took on our first engagement.",
];

export default function TheStandard() {
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
        <div style={{ display: "grid", gridTemplateColumns: "380px 1fr", gap: 72, alignItems: "start" }} className="standard-grid">
          {/* Left sticky */}
          <div style={{ position: "sticky", top: 100 }}>
            <div className="observe section-eyebrow">The Standard We Hold Ourselves To</div>
            <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 700, color: "var(--color-primary)", marginBottom: 20, lineHeight: 1.15 }}>
              The standard we hold ourselves to
            </h2>
            <p className="observe delay-200" style={{ color: "var(--color-muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 28 }}>
              Ask a medical billing company how long it has been operating and you will get a number. Ask how it measures its clean claim rate and the answers get vague. We would rather be judged on the second question.
            </p>
            <div className="observe delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["SOC 2 Type II", "HIPAA Compliant", "BAA Day One"].map(b => (
                <span key={b} style={{
                  padding: "6px 14px", borderRadius: 999,
                  background: "rgba(82,133,50,0.1)", border: "1px solid rgba(82,133,50,0.25)",
                  fontFamily: "var(--font-montserrat)", fontSize: "0.75rem", fontWeight: 700,
                  color: "var(--color-action)", letterSpacing: "0.04em",
                }}>✓ {b}</span>
              ))}
            </div>
          </div>

          {/* Right: points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {points.map((pt, i) => (
              <div key={i} className="observe" style={{
                background: "#fff", borderRadius: 12, padding: "22px 24px",
                border: "1px solid rgba(26,33,79,0.07)",
                display: "flex", gap: 16, alignItems: "flex-start",
                transition: "box-shadow 0.25s, transform 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(26,33,79,0.1)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = ""; e.currentTarget.style.transform = ""; }}
              >
                <div style={{
                  flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
                  background: "rgba(82,133,50,0.12)", display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "0.75rem", color: "var(--color-secondary)",
                  marginTop: 2,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p style={{ color: "var(--color-ink)", fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.standard-grid{grid-template-columns:1fr !important;} .standard-grid>div:first-child{position:static !important;}}`}</style>
    </section>
  );
}
