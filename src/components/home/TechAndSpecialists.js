"use client";
import { useEffect, useRef } from "react";

const automatedItems = [
  { icon: "⚡", text: "Eligibility verification runs automatically against payer systems before the appointment." },
  { icon: "🔍", text: "Claims are scrubbed against payer-specific rule libraries before submission." },
  { icon: "💳", text: "Remittance data posts and reconciles against contracted rates without rekeying." },
  { icon: "📊", text: "Dashboards update continuously instead of compiling monthly." },
];

const specialistItems = [
  { icon: "⚖️", text: "The appeal that needs a clinical argument." },
  { icon: "📋", text: "The payer contract that has not been renegotiated in six years." },
  { icon: "🔎", text: "The denial pattern that looks random until someone who knows that payer recognizes it." },
];

export default function TechAndSpecialists() {
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
      {/* background decoration */}
      <div style={{ position: "absolute", top: "20%", right: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(82,133,50,0.12) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />

      <div className="container-brand" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 780, margin: "0 auto 56px", textAlign: "center" }}>
          <div className="observe section-eyebrow">Technology & Specialists</div>
          <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 700, color: "#fff", marginBottom: 20 }}>
            Technology runs the volume.<br />Specialists make the calls.
          </h2>
          <p className="observe delay-200" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.0625rem", lineHeight: 1.75 }}>
            Four out of five health systems are now piloting or deploying AI somewhere in their revenue cycle. In a separate HFMA survey this February, only 7% said they felt very prepared for it. That gap is the whole story. The technology is arriving faster than the operational discipline to use it well.
          </p>
        </div>

        {/* Quote */}
        <div className="observe delay-300" style={{
          maxWidth: 700, margin: "0 auto 56px",
          background: "rgba(255,255,255,0.06)", border: "1px solid rgba(212,155,40,0.25)",
          borderRadius: 16, padding: "32px 36px", textAlign: "center",
        }}>
          <div style={{ fontSize: "2rem", color: "#d49b28", marginBottom: 12, lineHeight: 1 }}>&ldquo;</div>
          <p style={{ fontFamily: "var(--font-poppins)", fontStyle: "italic", fontSize: "1.0625rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 16 }}>
            You should never put automation or AI on top of a broken process or people who need different training. Not only will you not solve the problem, but you are often going to compound it with speed or scale and end up worse in the end.
          </p>
          <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.8125rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: 0 }}>
            Nikki Harper, Mayo Clinic — speaking to HFMA, April 2026
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="tech-grid">
          {/* Automated column */}
          <div className="observe-left delay-200" style={{ background: "rgba(255,255,255,0.05)", borderRadius: "var(--radius-card)", padding: "36px 32px", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(82,133,50,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>🤖</div>
              <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "1.125rem", color: "#fff", margin: 0 }}>What runs automatically</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {automatedItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Specialist column */}
          <div className="observe-right delay-300" style={{ background: "rgba(212,155,40,0.08)", borderRadius: "var(--radius-card)", padding: "36px 32px", border: "1px solid rgba(212,155,40,0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(212,155,40,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>🧠</div>
              <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "1.125rem", color: "#fff", margin: 0 }}>What stays with people</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {specialistItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, padding: "16px 18px", background: "rgba(255,255,255,0.06)", borderRadius: 10, borderLeft: "3px solid #d49b28" }}>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                Those are judgment calls, and judgment is what you are actually hiring. Your revenue cycle is run by senior strategists who know your payers, your specialty, and your operation.
              </p>
            </div>
          </div>
        </div>

        <div className="observe delay-400" style={{ marginTop: 40, textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9375rem" }}>We build the process first. Then we automate the parts of it that are genuinely repetitive.</p>
        </div>
      </div>
      <style>{`@media(max-width:767px){.tech-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
