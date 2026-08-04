"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "97%", label: "First-pass clean claim rate, measured at the payer" },
  { value: "14d", label: "Average onboarding" },
  { value: "$0", label: "Setup fees" },
  { value: "50+", label: "States served" },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Parallax on hero image
    const handler = () => {
      if (!heroRef.current) return;
      const y = window.scrollY;
      const img = heroRef.current.querySelector(".hero-img");
      if (img) img.style.transform = `translateY(${y * 0.15}px)`;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #1a214f 0%, #232b6a 50%, #1a214f 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: 72,
      }}
    >
      {/* Background grid pattern */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      {/* Accent blobs */}
      <div style={{
        position: "absolute", top: "10%", right: "-5%", width: 500, height: 500, zIndex: 0,
        background: "radial-gradient(circle, rgba(82,133,50,0.15) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: "-8%", width: 400, height: 400, zIndex: 0,
        background: "radial-gradient(circle, rgba(212,155,40,0.1) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)",
      }} />

      <div className="container-brand" style={{ position: "relative", zIndex: 1, paddingTop: "clamp(3rem,6vw,5rem)", paddingBottom: "clamp(2rem,4vw,4rem)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }}>

          {/* Desktop: two columns */}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 64, alignItems: "center" }}
            className="hero-grid">

            {/* Left: Copy */}
            <div>
              {/* Eyebrow */}
              <div className="animate-fade-up" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(212,155,40,0.12)", border: "1px solid rgba(212,155,40,0.3)",
                borderRadius: 999, padding: "6px 14px", marginBottom: 24,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#d49b28", animation: "pulseGold 2s ease-in-out infinite" }} />
                <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d49b28" }}>
                  Revenue Infrastructure Partner
                </span>
              </div>

              {/* H1 */}
              <h1 className="animate-fade-up delay-100" style={{
                fontFamily: "var(--font-poppins)", fontWeight: 700,
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                lineHeight: 1.1, color: "#fff", marginBottom: 24,
              }}>
                Medical billing services that{" "}
                <span style={{ color: "#d49b28" }}>engineer the revenue system</span>{" "}
                behind your practice
              </h1>

              {/* Subhead */}
              <div className="animate-fade-up delay-200">
                <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: 12 }}>
                  Medbilling RCM provides medical billing and management services for physician practices, hospitals, and ambulatory surgery centers across all 50 U.S. states.
                </p>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 36 }}>
                  HIPAA-aligned workflows, specialty-specific coding teams, and reporting you can act on. Stop managing billing and start operating a revenue cycle.
                </p>
              </div>

              {/* CTAs */}
              <div className="animate-fade-up delay-300" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 48 }}>
                <Link href="/request-free-audit/" className="btn-primary" style={{ fontSize: "1rem", padding: "15px 30px" }}>
                  Get a Free Revenue Assessment
                </Link>
                <a href="tel:(888) 551-2526" className="btn-outline" style={{ fontSize: "1rem", padding: "15px 30px" }}>
                  📞 Book a Free Consultation
                </a>
              </div>

              {/* Stats bar */}
              <div className="animate-fade-up delay-400" style={{
                display: "grid", gridTemplateColumns: "repeat(4,1fr)",
                gap: 0, borderRadius: 14,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
              }} role="list">
                {stats.map((s, i) => (
                  <div key={i} role="listitem" style={{
                    padding: "18px 16px",
                    borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    textAlign: "center",
                  }}>
                    <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "clamp(1.25rem,2.5vw,1.625rem)", color: "#d49b28", lineHeight: 1.1, marginBottom: 4 }}>
                      {s.value}
                    </div>
                    <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="animate-fade-up delay-500" style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                {["SOC 2 Type II Certified", "HIPAA Compliant", "BAA Executed on Day One"].map((badge) => (
                  <span key={badge} style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    background: "rgba(82,133,50,0.15)", border: "1px solid rgba(82,133,50,0.3)",
                    borderRadius: 999, padding: "5px 12px",
                    fontFamily: "var(--font-montserrat)", fontSize: "0.6875rem", fontWeight: 600,
                    color: "rgba(255,255,255,0.8)", letterSpacing: "0.04em",
                  }}>
                    <span style={{ color: "#528532" }}>✓</span> {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="animate-scale-in delay-200 hero-img-wrap" style={{ position: "relative" }}>
              {/* Floating metric card — top left */}
              <div className="animate-float" style={{
                position: "absolute", top: -20, left: -20, zIndex: 2,
                background: "#fff", borderRadius: 12, padding: "14px 18px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)", borderLeft: "3px solid #d49b28",
                minWidth: 160,
              }}>
                <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-primary)", lineHeight: 1 }}>97.4%</div>
                <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6875rem", color: "var(--color-muted)", marginTop: 4 }}>Collections Rate</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 6 }}>
                  <span style={{ color: "#528532", fontSize: "0.75rem", fontWeight: 600 }}>↑ Avg. Onboard</span>
                </div>
              </div>

              {/* Main image */}
              <div style={{ borderRadius: "var(--radius-media)", overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
                <img
                  src="https://medbillingrcm.com/wp-content/uploads/2026/07/2-1024x1024.webp"
                  alt="Home Page Hero Section Image"
                  className="hero-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(26,33,79,0.25) 0%, transparent 60%)" }} />
              </div>

              {/* Floating metric card — bottom right */}
              <div style={{
                position: "absolute", bottom: -16, right: -16, zIndex: 2,
                background: "var(--color-secondary)", borderRadius: 12, padding: "14px 18px",
                boxShadow: "0 8px 32px rgba(82,133,50,0.35)", color: "#fff", minWidth: 140,
              }}>
                <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "1.375rem", lineHeight: 1 }}>14 Days</div>
                <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6875rem", opacity: 0.85, marginTop: 4 }}>Avg. Onboarding</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by strip */}
        <div className="animate-fade-up delay-600" style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", textAlign: "center", marginBottom: 20 }}>
            Trusted by healthcare organizations across the country
          </p>
          <div className="marquee-track" style={{ overflow: "hidden", position: "relative" }}>
            <div className="animate-marquee" style={{ display: "flex", gap: 48, alignItems: "center", width: "max-content" }}>
              {[...Array(2)].map((_, gi) => (
                <div key={gi} style={{ display: "flex", gap: 48, alignItems: "center" }}>
                  <img src="https://medbillingrcm.com/wp-content/uploads/2026/05/Logo-1920w.webp" alt="Client logo" style={{ height: 32, filter: "brightness(0) invert(1) opacity(0.5)", objectFit: "contain" }} />
                  <img src="https://medbillingrcm.com/wp-content/uploads/2026/05/Divine-Dermatology.svg" alt="Divine Dermatology" style={{ height: 28, filter: "brightness(0) invert(1) opacity(0.5)", objectFit: "contain" }} />
                  <img src="https://medbillingrcm.com/wp-content/uploads/2026/05/ChatGPT_Image_May_2__2026__02_01_54_AM-removebg-preview.png" alt="Client logo" style={{ height: 30, filter: "brightness(0) invert(1) opacity(0.5)", objectFit: "contain" }} />
                  <img src="https://medbillingrcm.com/wp-content/uploads/2026/05/FullLogo_Transparent_NoBuffer-3-1024x1024.png" alt="Client logo" style={{ height: 34, filter: "brightness(0) invert(1) opacity(0.5)", objectFit: "contain" }} />
                  <img src="https://medbillingrcm.com/wp-content/uploads/2026/06/client.svg" alt="Client logo" style={{ height: 28, filter: "brightness(0) invert(1) opacity(0.5)", objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: 60, display: "block" }}>
          <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" fill="var(--color-paper)" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-img-wrap { display: none; }
        }
      `}</style>
    </section>
  );
}
