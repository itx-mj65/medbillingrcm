"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const disciplines = [
  {
    num: "01",
    icon: "📋",
    title: "Medical coding and charge capture",
    body: "Our medical billing and coding services run on specialty-specific certified coders who review every encounter for accurate CPT, ICD-10, and HCPCS assignment. Real-time charge auditing closes the gap between what was delivered and what was billed.",
    href: "/services/medical-coding/",
  },
  {
    num: "02",
    icon: "🔄",
    title: "Claims submission and denial management",
    body: "Claims are scrubbed against payer-specific rules before submission. Denials are categorized by root cause, appealed within the payer window, and fed back upstream so the same pattern stops repeating.",
    href: "/services/physician-billing/",
  },
  {
    num: "03",
    icon: "📈",
    title: "AR recovery and follow-up",
    body: "Structured 30, 60, and 90-day pursuit protocols. Aging claims are prioritized by dollar value and recovery likelihood. Nothing gets abandoned because the team ran out of time.",
    href: "/services/account-receivable-management/",
  },
  {
    num: "04",
    icon: "🏥",
    title: "Provider credentialing and payer enrollment",
    body: "CAQH ProView management, PECOS enrollment, and commercial payer applications handled end to end. We track closed network panels and prepare submission packages ahead of anticipated reopening windows.",
    href: "/services/medical-credentialing-services/",
  },
  {
    num: "05",
    icon: "💰",
    title: "Payer contract optimization",
    body: "Systematic review of fee schedules against current market rates, plus reconciliation of payments against contracted rates. Underpayments of $50 or $200 per claim compound into six figures a year when nobody checks.",
    href: null,
  },
  {
    num: "06",
    icon: "👥",
    title: "Patient collections and billing",
    body: "Patient financial responsibility rose 11% between 2022 and 2024, and providers write off 30 to 40 cents of every dollar billed directly to patients. Clear statements, upfront estimates, and accessible payment options recover more of it.",
    href: null,
  },
  {
    num: "07",
    icon: "📊",
    title: "Revenue analytics and reporting",
    body: "Live dashboards for CFOs and administrators. Denial rates by payer and provider, AR aging by bucket, clean claim performance, and collections tracked continuously rather than summarized monthly.",
    href: null,
  },
];

export default function OperatingSystem() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); obs.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    ref.current?.querySelectorAll(".observe,.observe-left,.observe-scale,.observe-right").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "var(--color-paper)", padding: "var(--space-section) 0" }}>
      <div className="container-brand">
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 64px" }}>
          <div className="observe section-eyebrow-green">The Operating System</div>
          <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 700, color: "var(--color-primary)", marginBottom: 16 }}>
            Seven disciplines. One integrated revenue infrastructure.
          </h2>
          <p className="observe delay-200" style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.7 }}>
            Medbilling RCM runs seven billing disciplines as one system rather than as separate services. Not a list of billing tasks. A coordinated system where each discipline reinforces the others.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="disc-grid stagger">
          {disciplines.map((d) => (
            <div key={d.num} className="observe discipline-card">
              <div className="discipline-num">{d.num}</div>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(82,133,50,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: 16 }}>
                {d.icon}
              </div>
              <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: "1.0625rem", color: "var(--color-primary)", marginBottom: 10, lineHeight: 1.3 }}>
                {d.title}
              </h3>
              <p style={{ color: "var(--color-muted)", fontSize: "0.9375rem", lineHeight: 1.65, margin: 0, flex: 1 }}>{d.body}</p>
              {d.href && (
                <Link href={d.href} style={{
                  display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16,
                  fontFamily: "var(--font-montserrat)", fontWeight: 600, fontSize: "0.8125rem",
                  color: "var(--color-action)", textDecoration: "none",
                  transition: "gap 0.18s",
                }}
                  onMouseEnter={e => e.currentTarget.style.gap = "10px"}
                  onMouseLeave={e => e.currentTarget.style.gap = "6px"}
                >
                  Learn more <span>→</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="observe delay-300" style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/services/" className="btn-primary" style={{ fontSize: "1rem", padding: "15px 36px" }}>
            View All Services
          </Link>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.disc-grid{grid-template-columns:repeat(2,1fr) !important;}}
        @media(max-width:600px){.disc-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
}
