"use client";
import { useEffect, useRef } from "react";

export default function HowWeMeasure() {
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="measure-grid">
          {/* Left */}
          <div>
            <div className="observe section-eyebrow">A number worth checking</div>
            <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 700, color: "var(--color-primary)", marginBottom: 20 }}>
              A number worth checking before you believe it
            </h2>
            <p className="observe delay-200" style={{ color: "var(--color-muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 16 }}>
              A clean claim rate can be measured at two different points, and the two numbers are not close.
            </p>
            <p className="observe delay-300" style={{ color: "var(--color-muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 16 }}>
              Measured at the clearinghouse, it confirms the claim was formatted correctly. The payer can still reject it on eligibility, authorization, or medical necessity the moment it arrives. Measured at the payer, it means the claim was accepted and paid. Clearinghouse acceptance runs seven to twelve points higher than payer first-pass yield.
            </p>
            <p className="observe delay-400" style={{ color: "var(--color-muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 24 }}>
              Our 97% is first-pass yield measured at the payer, with zero rework. If a claim needed a correction, a resubmission, or a documentation request before it paid, it does not count. HFMA&rsquo;s high-performance benchmark for 2026 is 98% on that same basis.
            </p>
            <p className="observe delay-500" style={{ color: "var(--color-ink)", fontSize: "1rem", lineHeight: 1.75, fontWeight: 500 }}>
              It is the smaller of the two numbers. It is also the one that reflects what actually gets paid. Worth asking any billing company which point they count from before comparing figures side by side.
            </p>
          </div>

          {/* Right: visual */}
          <div className="observe-right delay-200" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Clearinghouse box */}
            <div style={{ background: "#fff", borderRadius: 14, padding: "28px 28px", border: "1px solid rgba(26,33,79,0.08)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "var(--color-muted)" }} />
              <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: 12 }}>
                Clearinghouse Measurement
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginBottom: 12 }}>
                <span style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "3rem", color: "var(--color-muted)", lineHeight: 1 }}>
                  99%+
                </span>
                <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.875rem", color: "var(--color-muted)", paddingBottom: 6 }}>
                  Formatted correctly
                </span>
              </div>
              <p style={{ color: "var(--color-muted)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
                Confirms the claim left your office without format errors. Does not confirm it will be paid.
              </p>
            </div>

            {/* Payer box */}
            <div style={{ background: "var(--color-primary)", borderRadius: 14, padding: "28px 28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#d49b28" }} />
              <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>
                Payer Measurement (How We Count)
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginBottom: 12 }}>
                <span style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "3rem", color: "#d49b28", lineHeight: 1 }}>
                  97%
                </span>
                <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", paddingBottom: 6 }}>
                  First-pass yield, zero rework
                </span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
                If a claim needed any correction, resubmission, or documentation request before it paid, it does not count toward this figure.
              </p>
              <div style={{ marginTop: 16, padding: "10px 14px", background: "rgba(212,155,40,0.15)", borderRadius: 8, border: "1px solid rgba(212,155,40,0.3)" }}>
                <p style={{ margin: 0, fontFamily: "var(--font-montserrat)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
                  HFMA high-performance benchmark 2026: 98% on this same basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.measure-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
