"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "After switching to Medbilling RCM, our denial rate dropped and AR aging improved within the first quarter. The team understood our payer mix from day one.",
    author: "Dr. Sarah Kin",
    role: "Family Medicine",
  },
  {
    quote: "We needed a billing partner that could handle outpatient volume and inpatient complexity. Medbilling RCM delivered.",
    author: "Dr. Nick Toriani",
    role: "Multi-Specialty Practice",
  },
  {
    quote: "The monthly reporting changed how we run our practice. We see exactly where revenue is delayed and why.",
    author: "Dr. Wayne Bonner",
    role: "Medical Practice",
  },
];

export default function Testimonials() {
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
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 800, height: 400, background: "radial-gradient(ellipse at center, rgba(82,133,50,0.15) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="container-brand" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 52px" }}>
          <div className="observe" style={{ display: "inline-block", fontFamily: "var(--font-montserrat)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d49b28", marginBottom: 12, paddingLeft: 20, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 12, height: 2, background: "#d49b28" }} />
            Client Testimonials
          </div>
          <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 700, color: "#fff" }}>
            What our clients say
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="testimonials-grid stagger">
          {testimonials.map((t, i) => (
            <div key={i} className="observe" style={{
              background: "rgba(255,255,255,0.06)", borderRadius: "var(--radius-card)", padding: "32px 28px",
              border: "1px solid rgba(255,255,255,0.1)", borderTop: "3px solid #d49b28",
              transition: "background 0.25s, transform 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "2rem", color: "#d49b28", lineHeight: 1, marginBottom: 16 }}>&ldquo;</div>
              <p style={{ fontFamily: "var(--font-poppins)", fontStyle: "italic", fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 20 }}>
                {t.quote}
              </p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16 }}>
                <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "0.9375rem", color: "#fff" }}>{t.author}</div>
                <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", marginTop: 3 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.testimonials-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
