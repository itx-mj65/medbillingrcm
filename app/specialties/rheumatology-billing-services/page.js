import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";
import SpecialtyProcess from "@/components/specialty/SpecialtyProcess";

export default function RheumatologyBillingPage() {
  return (
    <main className="sp-page rheum-page" id="main">

      {/* ═══ HERO ═════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="Specialty Billing Infrastructure"
        heading="Rheumatology Billing Services"
        intro="Rheumatology Billing Services handle coding, claims, and reimbursements for rheumatology practices ensuring accurate billing, faster payments, and expert management of biologics and specialty drug authorizations."
        badge="AAPC Certified · Biologics Specialist · 50 States"
        stats={[
          { num: "72%",  label: "First-Pass Clean Claims" },
          { num: "18%",  label: "Denial Rate Reduction" },
          { num: "+15%", label: "Revenue Increase" },
          { num: "30",   label: "Average AR Days" },
        ]}
      />

      {/* ═══ EXPERT RCM ══════════════════════════════════════ */}
      <section className="sp-sec sp-sec--white reveal" id="expert-rcm">
        <div className="sp-wrap">
          <p className="sp-ew">Expert Rheumatology Billing</p>
          <h2>Expert Rheumatology Revenue Cycle Management</h2>

          <div className="rheum-rcm-layout">
            <div className="rheum-rcm-copy">
              <p>Rheumatology billing involves challenges like complex coding and obtaining prior authorizations for costly treatments, which can affect both cash flow and patient care. At Medbilling RCM, we specialize in taking these billing challenges off your shoulders.</p>
              <p>With over 10 years of rheumatology billing experience, our solutions and software are designed to streamline your operations and increase revenue.</p>
              <Link href="/request-free-audit/" className="sp-btn sp-btn--outline">Schedule Revenue Assessment</Link>
            </div>

            <div className="rheum-services-list">
              <h3>Comprehensive Services</h3>
              <ul className="rheum-svc-list">
                {[
                  "Denial Resolution Services",
                  "Financial Reporting and Analysis",
                  "Insurance Verification",
                  "Prior Authorization",
                  "Charge Entry and Coding",
                  "Claims Processing",
                  "Accounts Receivable Management",
                  "Payment Posting and Reconciliation",
                  "Denial Tracking and Appeals",
                  "Patient Billing and Collections",
                  "Reporting and Analytics",
                ].map(item => (
                  <li key={item}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE CAPABILITIES ═══════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew">Core Capabilities</p>
          <h2>Comprehensive Rheumatology Billing &amp; Coding Services</h2>
          <p className="rheum-caps-sub">Expert urgent care billing services designed to achieve the highest possible revenue for your practice.</p>

          <div className="rheum-caps-grid">
            {[
              {
                icon: "💉",
                h: "Full-Service Revenue Cycle Management",
                t: "We handle everything from charge capture to claim submission, monitoring key performance metrics like claim rejection rates and AR days to keep your practice financially healthy.",
              },
              {
                icon: "💊",
                h: "Prior Authorization for Biologics & Specialty Drugs",
                t: "We manage prior authorizations for biologic drugs and DMARDs, ensuring timely approvals and preventing claim denials for your highest-cost treatments.",
              },
              {
                icon: "📋",
                h: "Rheumatology-Specific Coding Expertise",
                t: "Our team handles ICD-10 codes for rheumatoid arthritis to CPT codes for joint injections and biologic infusions every claim submitted correctly the first time.",
              },
              {
                icon: "🔍",
                h: "Root-Cause Denial Management",
                t: "We don't just resubmit denied claims we identify patterns, fix root causes, and handle appeals to ensure you get paid for every service provided.",
              },
              {
                icon: "⚖️",
                h: "Healthcare Compliance & MIPS Reporting",
                t: "Stay up to date with HIPAA, CMS guidelines, and MIPS reporting standards. We keep your practice compliant and financially optimized.",
              },
              {
                icon: "🎯",
                h: "Customized Practice Solutions",
                t: "Whether a small practice or large group, we customize our rheumatology billing services to your specific volume, specialty mix, and billing requirements.",
              },
            ].map(({ icon, h, t }) => (
              <article className="rheum-cap-card reveal" key={h}>
                <div className="rheum-cap-icon-wrap" aria-hidden="true">{icon}</div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REVENUE CONTROL FRAMEWORK — shared component ════ */}
      <SpecialtyProcess
        intro="A structured, end-to-end process built for precision from first patient contact to final payment posting."
        ctaNote="For practices billing $500K+ annually. AAPC-certified team."
      />

      {/* ═══ BEFORE / AFTER STATS ════════════════════════════ */}
      <section className="sp-sec sp-sec--white reveal">
        <div className="sp-wrap">
          <p className="sp-ew">Operational Transformation</p>
          <h2>Before → After. The Numbers Tell the Story.</h2>
          <h3 className="rheum-ba-sub">Optimizing Rheumatology Accounts Receivable Performance</h3>

          <div className="rheum-ba-grid">
            <div className="rheum-ba-card">
              <div className="rheum-ba-num">30</div>
              <div className="rheum-ba-unit">days</div>
              <div className="rheum-ba-lbl">Average AR Days</div>
            </div>
            <div className="rheum-ba-card rheum-ba-card--accent">
              <div className="rheum-ba-num">72<span>%</span></div>
              <div className="rheum-ba-lbl">First-Pass Clean Claims</div>
            </div>
            <div className="rheum-ba-card">
              <div className="rheum-ba-num">18<span>%</span></div>
              <div className="rheum-ba-lbl">Denial Rate</div>
            </div>
            <div className="rheum-ba-card rheum-ba-card--accent">
              <div className="rheum-ba-num">+15<span>%</span></div>
              <div className="rheum-ba-lbl">Revenue Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold">Why Medbilling RCM</p>
          <h2>Your Rheumatology Billing Infrastructure Partner</h2>
          <p className="rheum-why-intro">Expertise in rheumatology billing including biologics, DMARDs, and complex coding driving measurable revenue improvement from day one.</p>

          <div className="rheum-why-grid">
            {[
              { icon:"🧬", h:"Expertise in Biologics & DMARDs",      t:"Specialized knowledge in J-codes, NDC reporting, and biologic prior authorizations." },
              { icon:"✅", h:"Zero Coding Disruption",               t:"AAPC-certified team ensures no ICD-10, CPT, or HCPCS coding errors or compliance gaps." },
              { icon:"📈", h:"30% Revenue Boost",                    t:"Advanced EMR/EHR software paired with expert RCM drives measurable revenue improvement." },
              { icon:"🕐", h:"24/7 Customer Support",                t:"AR follow-up within 30 days, E/M code review to prevent RAC and OIG audits." },
              { icon:"🏅", h:"AAPC-Certified Specialists",           t:"Every coder is certified with specialty-specific training. Zero ICD-10, CPT, and HCPCS coding disruption." },
              { icon:"⏰", h:"24/7 AR Follow-Up Within 30 Days",    t:"Proactive monitoring ensures claims are resolved before they age protecting your cash flow." },
              { icon:"💰", h:"Up to 30% Revenue Boost",             t:"Advanced EMR/EHR software paired with expert RCM drives measurable revenue improvement." },
              { icon:"🔍", h:"Transparent Fee Structure",            t:"No hidden fees. Cost-effective, results-driven solutions with full reporting visibility." },
            ].map(({ icon, h, t }) => (
              <div className="rheum-why-card reveal" key={h}>
                <div className="rheum-why-icon-wrap" aria-hidden="true">{icon}</div>
                <h3>{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--white reveal" id="faq">
        <div className="sp-wrap">
          <p className="sp-ew">Common Questions</p>
          <h2>Frequently Asked Questions</h2>

          <div className="rheum-faq-layout">
            <div className="rheum-faq-intro">
              <p>Direct answers about rheumatology billing, biologics, and coding compliance.</p>
            </div>
            <div className="rheum-faq-list">
              {[
                ["How do biologic and infusion therapy reimbursements impact rheumatology billing?",
                 "Biologic drugs and infusion therapies require specific J-codes, accurate NDC reporting, and prior authorizations to avoid claim denials. We ensure proper coding and documentation to maximize reimbursements."],
                ["What are the key 2025 CPT code updates affecting rheumatology billing?",
                 "New updates include revised E/M guidelines for prolonged visits, expanded remote patient monitoring codes, and changes to musculoskeletal ultrasound billing. Using outdated codes can delay payments significantly."],
                ["How do payer policies affect reimbursement for complex rheumatology cases?",
                 "Insurers often impose step therapy requirements, drug formulary restrictions, and stringent documentation rules for high-cost treatments. We track payer-specific policies to prevent denials proactively."],
                ["How do you handle modifier usage for rheumatology procedures?",
                 "Incorrect use of modifiers like -25 (separate E/M service) and -59 (distinct procedural service) can trigger audits. We apply the correct modifiers to ensure compliance and maximize reimbursement."],
              ].map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ══════════════════════════════════════ */}
      <CtaSection
        eyebrow="Revenue Assessment"
        heading="Engineer Your Rheumatology Revenue System"
        body="Schedule a revenue assessment and discover how much your rheumatology practice is leaving on the table with complex biologics and specialty drug billing."
        ctaLabel="Schedule Revenue Assessment"
        formId="rheumAssessmentForm"
        checklist={[
          "E/M distribution benchmarked against your specialty",
          "Top denial reasons by dollar from your AR",
          "Aged AR by payer — filing window exposure",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For rheumatology practices billing $500K+ annually · Biologic & DMARD billing specialists · 50 states served"
      />

    </main>
  );
}
