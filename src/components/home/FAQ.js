"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "How long does onboarding take before we see results?",
    a: "Onboarding runs 14 days and is built for zero disruption. Most clients see measurable clean claim improvement in the first billing cycle, usually within 30 days of go-live.",
  },
  {
    q: "Do you replace our existing billing staff?",
    a: "We replace the function, not the relationship. Most clients move existing billing staff into patient services or coordination roles. Transition planning is included at no additional cost.",
  },
  {
    q: "What EHR and PM systems do you integrate with?",
    a: "eClinicalWorks, RXNT, Office Ally, Epic, Athenahealth, NextGen, Kareo, AdvancedMD, and 30+ others. Custom integrations are scoped during the revenue audit phase at no extra charge.",
  },
  {
    q: "How is pricing structured?",
    a: "Engagements are custom-structured during the revenue assessment based on practice size, specialty mix, and scope of services. Fees are tied to net collections. No setup fees, no monthly minimums, no long-term contracts.",
  },
  {
    q: "What specialties do you work with?",
    a: "Primary care, orthopedics, cardiology, behavioral health, radiology, dermatology, gastroenterology, urgent care, and more. Medical coding and billing services are handled by specialty-specific teams assigned at onboarding, so the people working your claims already know how your payers behave in your specialty.",
  },
  {
    q: "How do you handle compliance and HIPAA?",
    a: "Full HIPAA-compliant infrastructure. SOC 2 Type II certified. All staff complete annual HIPAA and compliance training. BAAs are executed on day one, before any patient data is accessed.",
  },
  {
    q: "How do you measure your clean claim rate?",
    a: "At the payer, on first submission, with zero rework. A claim that needed a correction or resubmission before it paid does not count toward the figure. Many vendors report clearinghouse acceptance instead, which runs seven to twelve points higher.",
  },
  {
    q: "How much does medical billing outsourcing cost?",
    a: "Most medical billing companies charge a percentage of net collections. Published rates across the market run roughly 2.5% to 9%, varying by specialty, claim volume, and how much of the cycle the vendor handles. Medbilling RCM structures each engagement during the revenue assessment rather than quoting from a rate card. No setup fees, no monthly minimums, no long-term contracts.",
  },
  {
    q: "What is a good clean claim rate?",
    a: "HFMA's high-performance benchmark for 2026 is 98%, measured at the payer on first submission with zero rework. Compare vendor claims carefully. A company advertising 99% is usually reporting clearinghouse acceptance, which only confirms the claim was formatted correctly and runs seven to twelve points above payer-level first-pass yield. Ask which one they mean before you compare two numbers side by side.",
  },
  {
    q: "Should I outsource medical billing or keep it in-house?",
    a: "Cost usually favors outsourcing by 30% to 50%, but cost is rarely what decides it. In-house works when you have an experienced, stable billing team and steady enough volume to keep them busy. Outsourcing works when turnover keeps disrupting collections, when hiring cannot keep pace with growth, or when denials are rising faster than the team can appeal them. Revenue cycle roles turn over at 11% to 40% a year against a 3.8% national average (Experian), which is why continuity tends to be the real argument rather than price.",
  },
  {
    q: "How long does it take to switch medical billing companies?",
    a: "Onboarding with Medbilling RCM runs 14 days with no gap in claim submission. Week one maps payer contracts, denial history, and current AR position. Week two configures EHR and PM integrations and starts processing new claims alongside your existing workflow. The variable outside our control is how quickly your current vendor releases data and how clean their handoff records are.",
  },
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  return (
    <div className="faq-item">
      <button
        className="faq-btn"
        aria-expanded={open}
        onClick={() => setOpen(p => !p)}
      >
        <span style={{ flex: 1 }}>{q}</span>
        <span className="faq-icon">+</span>
      </button>
      <div className={`faq-panel ${open ? "open" : ""}`} ref={panelRef} aria-hidden={!open}>
        <div className="faq-panel-inner">{a}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); obs.unobserve(e.target); } }),
      { threshold: 0.05, rootMargin: "0px 0px -60px 0px" }
    );
    ref.current?.querySelectorAll(".observe,.observe-left,.observe-scale,.observe-right").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "var(--color-paper)", padding: "var(--space-section) 0" }}>
      <div className="container-brand">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 72, alignItems: "start" }} className="faq-grid">
          {/* Left */}
          <div style={{ position: "sticky", top: 100 }}>
            <div className="observe section-eyebrow">Common Questions</div>
            <h2 className="observe delay-100" style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 700, color: "var(--color-primary)", marginBottom: 16, lineHeight: 1.2 }}>
              Common questions
            </h2>
            <p className="observe delay-200" style={{ color: "var(--color-muted)", fontSize: "1rem", lineHeight: 1.7 }}>
              Specific answers. No boilerplate. If you have a question that is not here, ask us during the revenue assessment.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="observe delay-100">
            {faqs.map((faq, i) => (
              <FAQItem key={i} index={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.faq-grid{grid-template-columns:1fr !important;} .faq-grid>div:first-child{position:static !important;}}`}</style>
    </section>
  );
}
