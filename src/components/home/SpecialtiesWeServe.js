"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const specialties = [
  { label: "Urgent Care", icon: "🚑", href: "/specialties/urgent-care-billing-service/" },
  { label: "General Surgery", icon: "🔪", href: "/specialties/general-surgery-billing-service/" },
  { label: "Rheumatology", icon: "🦴", href: "/specialties/rheumatology-billing-services/" },
  { label: "Internal Medicine", icon: "🩺", href: "/specialties/internal-medicine-billing-service/" },
  { label: "Radiology", icon: "📷", href: "/specialties/radiology-billing-service/" },
  { label: "Dermatology", icon: "🧬", href: "/specialties/dermatology-billing-service/" },
  { label: "Mental Health", icon: "🧠", href: "/specialties/mental-health-billing-service/" },
  { label: "Family Practice", icon: "👨‍👩‍👧", href: "/specialties/family-practice-billing-service/" },
];

export default function SpecialtiesWeServe() {
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
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
          <div className="observe section-eyebrow-green">Specialties We Serve</div>
          <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 700, color: "var(--color-primary)", marginBottom: 16 }}>
            Billing built around your specialty
          </h2>
          <p className="observe delay-200" style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.7 }}>
            Every specialty carries its own denial risks. Modifier rules, prior authorization triggers, documentation requirements, and payer policies all shift depending on what you practice. Coding teams are assigned by specialty at onboarding rather than pooled.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="specialty-grid stagger">
          {specialties.map((s) => (
            <Link key={s.href} href={s.href} className="observe specialty-card">
              <div className="specialty-icon">{s.icon}</div>
              <div>
                <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: "0.9375rem", color: "var(--color-primary)", marginBottom: 4 }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.8125rem", color: "var(--color-action)", fontWeight: 600 }}>
                  View specialty →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="observe delay-400" style={{ textAlign: "center", marginTop: 36 }}>
          <Link href="/specialties/" className="btn-primary" style={{ fontSize: "0.9375rem" }}>
            View All Specialties
          </Link>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.specialty-grid{grid-template-columns:repeat(3,1fr) !important;}}
        @media(max-width:600px){.specialty-grid{grid-template-columns:repeat(2,1fr) !important;}}
      `}</style>
    </section>
  );
}
