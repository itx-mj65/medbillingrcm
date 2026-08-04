"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const cases = [
  {
    client: "Patient First Primary Care",
    tag: "Six providers",
    title: "Fee-for-service and capitation, running in one workflow",
    body: "The practice was billing under two reimbursement models at once. Most billing setups are built for one, so the second gets handled as an exception, and the exception is where revenue goes missing. We built two tracks. Both feed a single view: the Capitation vs FFS Yield Dashboard.",
    href: "/case-studies/patient-first-primary-care/",
    img: "https://medbillingrcm.com/wp-content/uploads/2026/04/Modern-Healthcare-Facility-—-Exterior-Architectural-Shot-1024x572.webp",
    metrics: [],
  },
  {
    client: "Angela Wilson Dermatology",
    tag: "Ownership transition",
    title: "Cleaning up a legacy ledger during an ownership transition",
    body: "Years of unreconciled patient credit entries were sitting on the books during an ownership transition. We ran a full records true-up audit. Every credit entry was traced, verified, and either applied or refunded. The practice transferred with a reconciled ledger and no open credit balance liabilities.",
    href: "/case-studies/angela-wilson-dermatology/",
    img: "https://medbillingrcm.com/wp-content/uploads/2026/04/Modern-Clinic-Interior-—-Administrative-or-Reception-Space-1024x572.webp",
    metrics: [],
  },
  {
    client: "Choice Medical Transport",
    tag: "Medical transport billing",
    title: "Billing built for medical transport, not adapted to it",
    body: "Transport billing does not behave like clinical billing. We built the workflow around transport logistics rather than fitting transport into a clinical template. Every claim is followed through a Transport Turnaround Tracker that runs from dispatch through clean submission to final adjudication.",
    href: "/case-studies/choice-medical-transport/",
    img: null,
    metrics: [],
  },
  {
    client: "Praveen Bodakunta, PMHNP-BC",
    tag: "Licensed across six states",
    title: "Daily eligibility verification for multi-state telehealth",
    body: "Telehealth psychiatry has a specific failure mode. Coverage lapses between sessions and nobody finds out until the claim is denied weeks later. We built a Daily Eligibility and Copay Action Report that reaches the provider before appointments begin — coverage confirmed the morning of the appointment.",
    href: "/case-studies/praveen-bodakunta-telehealth/",
    img: null,
    metrics: [],
  },
];

export default function ClientOutcomes() {
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
    <section ref={ref} style={{ background: "var(--color-ivory)", padding: "var(--space-section) 0" }}>
      <div className="container-brand">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
          <div className="observe section-eyebrow">Client Outcomes</div>
          <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3.5vw,2.75rem)", fontWeight: 700, color: "var(--color-primary)", marginBottom: 16 }}>
            Client outcomes
          </h2>
          <p className="observe delay-200" style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.7 }}>
            Four engagements, four different problems, four workflows built to fit them. Full write-ups on each.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 28 }} className="cases-grid stagger">
          {cases.map((c, i) => (
            <div key={i} className="observe case-card">
              {c.img && (
                <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                  <img src={c.img} alt={c.client} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s var(--ease-brand)" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.03)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                </div>
              )}
              {!c.img && (
                <div style={{ height: 8, background: "var(--color-secondary)" }} />
              )}
              <div style={{ padding: "28px 28px 32px" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.75rem", fontWeight: 700, color: "var(--color-secondary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {c.client}
                  </span>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-muted)" }} />
                  <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.75rem", color: "var(--color-muted)" }}>{c.tag}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: "1.125rem", color: "var(--color-primary)", marginBottom: 12, lineHeight: 1.35 }}>
                  {c.title}
                </h3>
                <p style={{ color: "var(--color-muted)", fontSize: "0.9375rem", lineHeight: 1.65, marginBottom: 20 }}>{c.body}</p>
                <Link href={c.href} style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.875rem",
                  color: "var(--color-action)", textDecoration: "none",
                  borderBottom: "1px solid transparent", transition: "border-color 0.18s, gap 0.18s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-action)"; e.currentTarget.style.gap = "10px"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.gap = "6px"; }}
                >
                  Read full case study <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:767px){.cases-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
