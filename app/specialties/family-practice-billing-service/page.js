import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";
import SpecialtyProcess from "@/components/specialty/SpecialtyProcess";

export default function FamilyPracticeBillingPage() {
  return (
    <main className="sp-page fp-page" id="main">

      {/* ═══ HERO ═════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="Technology-Driven Family Practice RCM"
        heading="Family Practice Billing Services"
        intro="Medbilling RCM delivers efficient end-to-end revenue cycle management services to small and large family practice groups across multiple states all billing needs managed in one place."
        badge="AAPC Certified · 12+ Years · 50 States"
        stats={[
          { num: "10%",   label: "Faster Payments" },
          { num: "99%",   label: "Clean Claim Rate" },
          { num: "12+",   label: "Years Experience" },
          { num: "50",    label: "States Served" },
        ]}
      />

      {/* ═══ COMPREHENSIVE FP BILLING ═════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="expert-rcm">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Comprehensive FP Billing</p>
          <h2 className="reveal">Our Comprehensive Family Practice Billing Services</h2>

          <div className="fp-rcm-layout">
            <div className="fp-rcm-copy">
              <p>Family physicians provide comprehensive care from diagnosing illnesses to preventive services like checkups, screenings, and immunizations. Our complete billing infrastructure covers every service category your practice delivers, ensuring nothing falls through the cracks.</p>
              <p>We integrate seamlessly with your existing EHR and practice management software, providing a streamlined experience with zero workflow disruption for your team.</p>
              <Link href="/request-free-audit/" className="reveal sp-btn sp-btn--primary">Request free demo</Link>
            </div>

            {/* Four-category service panel — unique to FP */}
            <div className="fp-svc-categories">
              {[
                {
                  cat: "Family Medicine RCM",
                  items: ["Denial Management","Accounts Receivable (AR) Management","Financial Reporting and Analysis"],
                },
                {
                  cat: "Verification Services",
                  items: ["Patient Demographics Verification","Insurance Eligibility Verification"],
                },
                {
                  cat: "Billing and Coding",
                  items: ["Coding Services","Electronic Claims Submission","Electronic Payment Posting"],
                },
                {
                  cat: "Patient Billing",
                  items: ["Patient Statements","Collections"],
                },
              ].map(({ cat, items }) => (
                <div className="fp-svc-cat" key={cat}>
                  <div className="fp-svc-cat-label">{cat}</div>
                  <ul className="fp-svc-list">
                    {items.map(item => (
                      <li key={item}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BILLING SOLUTIONS — NEW DESIGN: Code showcase ════
          The live page features ICD-10/CPT code examples prominently.
          New design: "Code + label" cards showing real FP codes,
          Denial type rows, and a feature grid — different from other
          specialty pages which use navy orb capability cards.         */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Maximum Reimbursements</p>
          <h2 className="reveal">Family Medicine Billing Solutions for Maximum Reimbursements</h2>
          <p className="reveal fp-solutions-sub">Family physicians provide comprehensive care across a wide range of conditions and services. We handle billing for all of them ensuring timely and accurate reimbursement every time.</p>

          {/* ── Code showcase row ─── */}
          <div className="fp-code-section">
            <div className="fp-code-header">
              <div className="fp-code-tag">Accurate Coding and Claims Submission</div>
              <p>Family medicine involves treating a wide range of conditions, so accurate coding is essential. We use the latest ICD-10 and CPT codes to ensure all services are billed correctly. We also manage HCPCS codes for services not covered under CPT, especially for Medicare patients.</p>
            </div>

            <div className="fp-code-grid">
              {[
                { code: "Z00.00", label: "General adult medical exam without abnormal findings" },
                { code: "E11.9",  label: "Type 2 diabetes without complications" },
                { code: "99213",  label: "Office visit for an established patient" },
                { code: "G0439",  label: "Follow-up Annual Wellness Visit (Medicare)" },
              ].map(({ code, label }) => (
                <div className="fp-code-card" key={code}>
                  <div className="fp-code-value">{code}</div>
                  <div className="fp-code-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Denial types row ─── */}
          <div className="fp-denial-section">
            <div className="fp-denial-header">
              <div className="fp-code-tag">Denial Management and Appeals</div>
              <p>We focus on minimizing denials and handling appeals for all common denial types in family medicine, using root-cause analysis to prevent recurrence:</p>
            </div>
            <div className="fp-denial-grid">
              {[
                { t:"Type 1", h:"Resolving Medical Necessity Denials Through Precision Coding", d:"Medical necessity denials solved with correct ICD-10 justification codes" },
                { t:"Type 2", h:"Modifier errors",                                              d:"Correct use of modifier 25 for separate E/M services" },
                { t:"Type 3", h:"Eligibility denials",                                         d:"Prevented by real-time eligibility checks before service" },
              ].map(({ t, h, d }) => (
                <div className="fp-denial-card" key={t}>
                  <div className="fp-denial-type">{t}</div>
                  <h3 className="reveal">{h}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Feature list ─── */}
          <div className="fp-features-grid">
            {[
              { icon:"🗺️", h:"State-Specific Medicaid Billing",  t:"Each state has different rules for Medicaid claims submission and coverage. Our team is experienced in handling these variations to ensure timely payments for every family practice patient, regardless of their state Medicaid plan." },
              { icon:"☁️", h:"Cloud-Based EHR Technology",       t:"We utilize the latest technology including EHR integration, automated claim scrubbing, and real-time reporting to streamline your billing process. Our tools reduce errors, speed up reimbursements, and provide up-to-date insights into your revenue cycle with 24/7 access." },
              { icon:"⚖️", h:"Regulation Compliance & HIPAA",    t:"We ensure your claims meet CMS requirements for Medicare and Medicaid and adhere to HIPAA standards keeping patient information secure. We also track changes under the Affordable Care Act (ACA) to ensure preventive services like wellness checks are billed correctly using codes like G0438 for initial annual wellness visits." },
              { icon:"🛡️", h:"Preventive Services Billing",      t:"Medicare and ACA rules require preventive care services to be covered without patient cost-sharing. Our family medicine billing services ensure you're properly compensated by using the right codes and modifiers including modifier 33 to indicate preventive services are fully covered." },
              { icon:"📊", h:"Medicare & Value-Based Care",      t:"Family medicine practices increasingly participate in value-based care models like MACRA. We help you track and report on the necessary quality metrics for MIPS (Merit-based Incentive Payment System) to keep your practice compliant and ensure you're eligible for Medicare incentive payments." },
              { icon:"🏠", h:"PCMH Support",                     t:"For practices working toward or maintaining PCMH recognition, we support the additional documentation and billing requirements. PCMH focuses on care coordination and preventive services we ensure your billing reflects the high level of care you provide while keeping your practice financially healthy." },
            ].map(({ icon, h, t }) => (
              <div className="fp-feature-card reveal" key={h}>
                <div className="fp-feature-icon" aria-hidden="true">{icon}</div>
                <h3 className="reveal">{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REVENUE CONTROL FRAMEWORK ════════════════════════ */}
      <SpecialtyProcess
        intro="A structured, technology-driven end-to-end process from first patient contact through final payment built for the broad service mix of family medicine."
        ctaNote="For family practice groups of all sizes · AAPC-certified coders · 50 states served"
      />

      {/* ═══ BEFORE / AFTER — 4-metric flip cards ════════════
          Different from other pages: shows tech upgrade context.
          Live page: Slow→Faster, High→Clean claims, Manual→24/7,
          In-House→$0 software cost. Shows the transformation from
          old-model billing to Medbilling RCM model.                  */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>

          <div className="fp-ba-grid">
            <div className="reveal fp-ba-card">
              <div className="fp-ba-top">
                <div className="fp-ba-before">Slow</div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div className="fp-ba-after">10%<span>↑</span></div>
              <div className="reveal fp-ba-lbl">Faster Payments</div>
            </div>
            <div className="reveal fp-ba-card fp-ba-card--green">
              <div className="fp-ba-top">
                <div className="fp-ba-before">High</div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div className="fp-ba-after">99<span>%</span></div>
              <div className="reveal fp-ba-lbl">Clean Claim Rate</div>
            </div>
            <div className="reveal fp-ba-card">
              <div className="fp-ba-top">
                <div className="fp-ba-before">Manual</div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div className="fp-ba-after">24/7</div>
              <div className="reveal fp-ba-lbl">Reporting Access</div>
            </div>
            <div className="reveal fp-ba-card fp-ba-card--gold">
              <div className="fp-ba-top">
                <div className="fp-ba-before">In-House</div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div className="fp-ba-after">$0</div>
              <div className="reveal fp-ba-lbl">Software Cost</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ════════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="reveal sp-ew sp-ew--gold">Why Choose Us</p>
          <h2 className="reveal">Why Choose Us as Your Family Medicine Billing Company?</h2>
          <p className="reveal fp-why-intro">Our scalable family medicine billing services grow with your practice whether you're a solo physician or a multi-provider group across multiple states. Every feature is designed to reduce friction, increase revenue, and give you full financial visibility.</p>

          <div className="fp-why-grid">
            {[
              { icon:"⚡", n:"01", h:"Reduce Denials — Get Paid 10% Faster",   t:"We help reduce claim denials and accelerate your payment cycle by 10% through automated scrubbing, real-time eligibility, and precise coding." },
              { icon:"🏅", n:"02", h:"AAPC-Certified Precision Billing",        t:"Our AAPC-certified team handles your billing with the precision and specialty-specific knowledge that in-house generalist billers simply can't match." },
              { icon:"💰", n:"03", h:"No In-House Staff or Expensive Software", t:"No need to hire in-house billing staff or install expensive billing software. We provide the full infrastructure staff, technology, and process as a single service." },
              { icon:"✅", n:"04", h:"Clean, Error-Free Claims",                t:"We ensure clean, error-free claims that improve compliance, reduce audit risk, and maximize first-pass acceptance rates across all payers." },
              { icon:"📊", n:"05", h:"Detailed Financial Reports",              t:"Get detailed reports that help you understand your financial health including insurance aging, collection rates, denial trends, and payer performance on demand." },
              { icon:"📈", n:"06", h:"Scalable — Grows With Your Practice",    t:"Our scalable family medicine billing services adjust seamlessly to your practice's growth or volume fluctuations, regardless of size or number of locations." },
            ].map(({ icon, n, h, t }) => (
              <div className="fp-why-card reveal" key={n}>
                <div className="reveal fp-why-top">
                  <div className="reveal fp-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="fp-why-num">{n}</span>
                </div>
                <h3 className="reveal">{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MID CTA ══════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap fp-mid-cta">
          <div>
            <p className="reveal sp-ew">Revenue Assessment</p>
            <h2 className="reveal">Engineer Your Family Practice Revenue System</h2>
            <p>Schedule a free demo and discover how much revenue your family practice is leaving on the table. Our specialists identify coding gaps, optimize your billing workflow, and deploy systems not promises.</p>
          </div>
          <div className="fp-mid-cta-action">
            <Link href="/request-free-audit/" className="reveal sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
            <p className="fp-mid-note">For family practice groups of all sizes · AAPC-certified specialists · 12+ years experience · 50 states served</p>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ══════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="faq">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Common Questions</p>
          <h2 className="reveal">Frequently Asked Questions</h2>

          <div className="fp-faq-layout">
            <div className="fp-faq-intro">
              <p>Direct answers about family medicine billing, EHR integration, MIPS, and Medicaid compliance.</p>
            </div>
            <div className="fp-faq-list">
              {[
                ["How does your family medicine billing company handle high patient volumes without claim delays?",
                 "We streamline claim submissions with automated coding, batch processing, and real-time eligibility checks to ensure no backlog develops regardless of patient volume. Our dedicated account teams handle scaling transparently whether you have 100 or 1,000 encounters per week with consistent turnaround times and no disruption to your revenue cycle."],
                ["Can you integrate with our existing EHR or practice management software?",
                 "Yes. We integrate seamlessly with all major EHR and practice management platforms including Epic, eClinicalWorks, Athena, Allscripts, Cerner, Practice Fusion, and more. Transitions are managed without disruption to your existing workflow or patient data, and our team handles the full onboarding process."],
                ["How do you handle preventive services billing under ACA and Medicare rules?",
                 "We apply the correct preventive care codes and modifiers including modifier 33 for ACA-mandated preventive services and codes like G0438 and G0439 for Medicare Annual Wellness Visits to ensure your practice receives full reimbursement without patient cost-sharing being incorrectly applied. We track ACA and CMS updates annually to stay current."],
                ["How do you support MIPS reporting for family medicine practices participating in value-based care?",
                 "We help you select the optimal MIPS quality measures for family medicine, collect and track performance data throughout the year, and submit your MIPS reporting on time. Our team monitors your scores against penalty thresholds and incentive targets, ensuring you avoid the 9% negative payment adjustment and position your practice for positive incentive payments."],
                ["What is your approach to state-specific Medicaid billing for family practices with diverse patient populations?",
                 "Our team maintains active knowledge of each state's Medicaid billing rules, fee schedules, prior authorization requirements, and covered service policies. We apply state-specific codes and procedures for every Medicaid claim, ensuring compliance and timely payment regardless of which states your patients are enrolled in including Medicaid managed care plans."],
              ].map(([q, a]) => (
                <details className="reveal" key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ══════════════════════════════════════ */}
      <CtaSection
        eyebrow="Ready when you are"
        heading="Engineer Your Family Practice Revenue System."
        body="Schedule a free demo and discover how much revenue your family practice is leaving on the table. Our specialists identify coding gaps, optimize your billing workflow, and deploy systems not promises."
        ctaLabel="Schedule Revenue Assessment"
        formId="fpAssessmentForm"
        checklist={[
          "E/M distribution benchmarked against your specialty",
          "Denial analysis by root cause from your claim volume",
          "MIPS reporting gap and incentive opportunity analysis",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For family practice groups of all sizes · AAPC-certified specialists · 12+ years experience · 50 states served"
      />

    </main>
  );
}
