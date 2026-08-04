"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function PrimaryCTA() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); obs.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".observe,.observe-left,.observe-scale,.observe-right").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "var(--color-paper)", padding: "var(--space-section) 0" }}>
      <div className="container-brand">
        <div style={{
          background: "linear-gradient(135deg, var(--color-primary) 0%, #232b6a 100%)",
          borderRadius: 24, padding: "clamp(48px,7vw,80px) clamp(24px,6vw,72px)",
          textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          {/* Blobs */}
          <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(82,133,50,0.18) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: 350, height: 350, background: "radial-gradient(circle, rgba(212,155,40,0.12) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="observe" style={{ display: "inline-block", fontFamily: "var(--font-montserrat)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d49b28", marginBottom: 16, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 12, height: 2, background: "#d49b28" }} />
              Ready to Operate at a Higher Level?
            </div>
            <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 700, color: "#fff", marginBottom: 20, maxWidth: 720, margin: "0 auto 20px" }}>
              Your revenue assessment starts here
            </h2>
            <p className="observe delay-200" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.0625rem", lineHeight: 1.7, maxWidth: 620, margin: "0 auto 16px" }}>
              A 45-minute conversation with a senior RCM strategist. No sales presentation. We look at where your revenue cycle stands now, where it is leaking, and what recovery would realistically look like.
            </p>
            <p className="observe delay-300" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 36px" }}>
              If the numbers show an opportunity, we build a custom engagement. If they do not, we say so.
            </p>
            <div className="observe delay-400">
              <Link href="/request-free-audit/" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "17px 40px", display: "inline-flex" }}>
                Schedule Revenue Assessment
              </Link>
            </div>
            <div className="observe delay-500" style={{ marginTop: 24, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
              {["Practices billing $1M+ annually", "14-day onboarding", "No long-term contract required"].map((item, i) => (
                <span key={i} style={{
                  display: "flex", alignItems: "center", gap: 6,
                  fontFamily: "var(--font-montserrat)", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)",
                }}>
                  <span style={{ color: "#d49b28" }}>•</span> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
