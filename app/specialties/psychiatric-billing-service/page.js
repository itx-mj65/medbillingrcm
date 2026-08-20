import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function PsychiatricBillingPage() {
  return (
    <main className="sp-page psych-page" id="main">

      {/* ═══ HERO ════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="Mental Health Revenue Infrastructure"
        heading="Psychiatry Billing Services"
        intro="Medbilling RCM has been a leading medical billing company in the USA for over a decade. We focus on efficiently integrating our psychiatry billing services with your current EMR/EHR systems ensuring accurate, timely reimbursement for every mental health encounter."
        badge="AAPC Certified · HIPAA Compliant · 50 States"
        stats={[
          { num: "48h",  label: "Claim Filing Turnaround" },
          { num: "72h",  label: "Denial Resolution" },
          { num: "50%",  label: "Overhead Cost Reduction" },
          { num: "3×",   label: "Faster Payments" },
        ]}
      />

      {/* ═══ HOW WE HELP — two-col intro + 3 challenge cards ═
          UNIQUE DESIGN: left intro copy + right 3 tall challenge
          cards with gradient top border that grows on hover.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="how-we-help">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Specialized Psychiatry Billing</p>
          <h2 className="reveal">How Our Psychiatry Billing Services Help Your Practice Thrive</h2>

          <div className="psych-intro-layout">
            <div className="psych-intro-copy">
              <p className="reveal">At Medbilling RCM, we specialize in overcoming the unique billing challenges faced by psychiatric practices. Mental health billing involves a distinct set of coding rules, referral requirements, and coverage complexity that generalist billing teams routinely get wrong.</p>
              <p className="reveal">Our AAPC-certified specialists understand psychiatric CPT coding at the procedure level from initial evaluations and psychotherapy add-ons to medication management visits ensuring your claims are accurate, compliant, and paid on time.</p>
              <Link href="/request-free-audit/" className="sp-btn sp-btn--primary reveal">Request Free Demo</Link>
            </div>

            <div className="psych-challenges-col">
              {[
                { icon:"🔢", h:"Complex Coding",           t:"Psychiatric billing involves numerous codes for similar services different CPT codes depending on whether a medical or non-medical provider performs an evaluation. This complexity trips up inexperienced coders, especially when add-on codes (which must be paired with a primary code) are involved. Our expert team ensures all codes are correctly applied, reducing the risk of claim denials and keeping your practice compliant." },
                { icon:"📋", h:"Referral Management",      t:"Patients often need a referral from a general practitioner before seeing a psychiatrist. We make sure all referrals are properly filed with the payer before your patients are seen, preventing payment delays. Psychiatrists also need to be credentialed with a wide range of insurers both private and government. Medbilling RCM handles this complexity so your practice can focus on providing care." },
                { icon:"⚖️", h:"Understanding Coverage Rules", t:"The Affordable Care Act mandates that all Health Insurance Marketplace plans include mental health and substance use disorder services, but specifics vary greatly between plans. Coverage rules for Medicare also differ depending on the part of the plan (A, B, or D) and whether the patient has supplemental insurance. Our in-depth knowledge of these policies ensures claims are filed correctly, even in the face of complex coverage rules." },
              ].map(({ icon, h, t }) => (
                <div className="psych-challenge-card reveal" key={h}>
                  <div className="psych-challenge-icon" aria-hidden="true">{icon}</div>
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES OFFERED — 2×5 grid ═════════════════════
          UNIQUE DESIGN: ivory section, compact pill-style service
          tags arranged in a flowing 2-col grid. Different from
          vertical lists and card grids on other pages.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Psychiatric Billing Services</p>
          <h2 className="reveal">Psychiatric Billing Services We Offer</h2>
          <p className="psych-svc-sub reveal">Our team specializes in psychiatric billing services along with collections, AR follow-ups, and denial management for all mental health and substance use disorder encounters. Partner with Medbilling RCM for psychiatric billing that's accurate, timely, and fully compliant with all industry regulations. <Link href="/specialties/" className="psych-svc-link">View all specialties we serve.</Link></p>

          <div className="psych-svc-grid">
            {[
              { icon:"✅", label:"Accurate Coding and Claim Filing" },
              { icon:"🔐", label:"Referral and Authorization Management" },
              { icon:"🔍", label:"Insurance Verification and Credentialing" },
              { icon:"🧠", label:"Mental Health & Substance Use Disorder Billing Expertise" },
              { icon:"🏛️", label:"Medicare and Medicaid Billing" },
              { icon:"📊", label:"Account Follow-Up and AR Management" },
              { icon:"⚖️", label:"Compliance with Industry Regulations" },
              { icon:"👤", label:"Patient Billing Support" },
              { icon:"📈", label:"Customizable Reporting and Analytics" },
              { icon:"🖥️", label:"EMR/EHR System Integration" },
            ].map(({ icon, label }) => (
              <div className="psych-svc-item reveal" key={label}>
                <span className="psych-svc-icon" aria-hidden="true">{icon}</span>
                <span className="psych-svc-label">{label}</span>
              </div>
            ))}
          </div>

          <div className="psych-svc-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Schedule a Free Demo</Link>
          </div>
        </div>
      </section>

      {/* ═══ REVENUE CONTROL FRAMEWORK — 5 steps ════════════ */}
      <section className="sp-sec sp-sec--navy reveal" id="process">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Revenue Control Framework</p>
          <h2 className="reveal">How We Engineer Your Psychiatry Revenue System</h2>
          <p className="psych-process-intro reveal">A structured, end-to-end billing infrastructure engineered to eliminate revenue leakage at every stage of the psychiatric claim lifecycle.</p>

          <div className="psych-steps">
            {[
              { n:"01", h:"Eligibility & Referral Verification",  t:"Confirm mental health coverage, referral status, and prior authorization before every psychiatric encounter" },
              { n:"02", h:"Psychiatric-Specific Coding",          t:"AAPC-certified coders apply precise CPT codes for evaluations, psychotherapy, medication management, and add-ons" },
              { n:"03", h:"Claim Filing Within 48h",             t:"Every claim reviewed, scrubbed for errors, and submitted electronically within 48 hours of encounter" },
              { n:"04", h:"Payment Posting Within 48h",          t:"ERA/EOB payments posted, discrepancies flagged, and underpayments identified within 48 hours of receipt" },
              { n:"05", h:"Denial Resolution Within 72h",        t:"Root-cause analysis, correction, and resubmission of denied psychiatric claims within 72 hours" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="psych-step reveal" key={n}>
                <div className="psych-step-aside">
                  <div className="psych-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="psych-step-conn" aria-hidden="true" />}
                </div>
                <div className="psych-step-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="psych-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="psych-process-note">For psychiatric practices &amp; mental health groups · AAPC-certified coders · 50 states served</span>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE — 7 benefit cards (paper bg) ══════════
          UNIQUE DESIGN: paper/white bg (not navy), 3+4 grid layout
          with cards using a fade-in shimmer on the left border.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Benefits of Outsourcing</p>
          <h2 className="reveal">Why Psychiatric Practices Choose Medbilling RCM</h2>
          <p className="psych-why-sub reveal">Proven outcomes that go beyond billing a complete operational transformation for your psychiatric practice.</p>

          <div className="psych-why-grid">
            {[
              { icon:"⚡", h:"Fast Turnaround",                  t:"Charges billed within 48 hours, payments posted within 48 hours of ERA/EOBs, and denials resolved within 72 hours no revenue left waiting." },
              { icon:"🧘", h:"Reduced Administrative Burden",    t:"Free your in-house team to focus on patient care instead of getting caught up in complex billing tasks, coding disputes, and payer follow-ups." },
              { icon:"💰", h:"Cost Efficiency",                  t:"Save up to 50% on the expenses of hiring, training, and managing an in-house billing team without sacrificing accuracy or compliance." },
              { icon:"🖥️", h:"Access to Technology & Analytics", t:"Use advanced EMR/EHR systems and receive detailed reports to keep track of your practice's financial health with full visibility at every stage." },
              { icon:"🛡️", h:"Improved Denial Management",       t:"Get denied claims addressed quickly and effectively, leading to better revenue recovery and fewer resubmissions from the same root causes." },
              { icon:"📈", h:"Scalability",                      t:"Easily adjust to your practice's growth or fluctuating patient volumes without compromising billing efficiency, compliance, or turnaround times." },
              { icon:"🚀", h:"Faster Payments — 3× Speed",      t:"Enjoy a streamlined billing process that delivers payments 3× faster than in-house billing, giving you a steady, predictable cash flow to run and grow your practice without financial uncertainty." },
            ].map(({ icon, h, t }) => (
              <div className="psych-why-card reveal" key={h}>
                <div className="psych-why-icon-wrap" aria-hidden="true">{icon}</div>
                <h3>{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ══════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal" id="faq">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Common Questions</p>
          <h2 className="reveal">Frequently Asked Questions</h2>

          <div className="psych-faq-layout">
            <div className="psych-faq-intro reveal">
              <p>Direct answers about psychiatry billing, insurance coverage, denial management, and compliance.</p>
            </div>
            <div className="psych-faq-list">
              {[
                ["What are psychiatry billing services, and why does my practice need them?",
                 "Psychiatry billing services help psychiatric practices manage the complexities of coding, claim submission, and reimbursement for mental health services. These services ensure that claims are filed correctly, referrals are managed, and payment is received on time. By outsourcing your billing needs, you can focus on patient care while professionals handle the financial side of your practice."],
                ["What types of insurance do your billing services cover?",
                 "Our services cover a wide range of insurance providers, including private health plans, government payers like Medicare and Medicaid, and marketplace plans. We ensure that your practice is credentialed with various insurers including government plans so that all your patients' coverage is verified and billing is handled correctly across every payer."],
                ["What happens if a claim gets denied, and how do you help?",
                 "If a claim is denied, our billing experts quickly identify the cause whether it's due to incorrect coding, missing information, or issues with payer requirements. We follow up with the payer, correct the errors, and resubmit the claim within 72 hours to secure payment. Root-cause analysis also prevents the same denial from recurring."],
                ["Can psychiatry billing services reduce the administrative burden on my practice?",
                 "Yes. Psychiatry billing services take over the time-consuming tasks of coding, claim filing, and follow-up, allowing your practice to focus on patient care. By outsourcing billing, you can reduce administrative overhead, minimize human error, and improve operational efficiency leading to better financial outcomes and a less stressed in-house team."],
                ["How do psychiatry billing services ensure compliance with industry regulations?",
                 "Our psychiatric billing services stay updated with the latest regulations, including HIPAA, ACA, and other compliance standards, ensuring your practice meets all necessary requirements. We also ensure that your claims follow all payer-specific guidelines reducing the risk of audits, fines, and penalties that can significantly impact practice revenue."],
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

      {/* ═══ CTA ══════════════════════════════════════════════ */}
      <CtaSection
        eyebrow="Revenue Assessment"
        heading="Ready to Streamline Your Psychiatry Billing and Boost Revenue?"
        body="Contact Medbilling RCM today to learn how our expert billing services can help you stay compliant, reduce administrative burdens, and maximize reimbursements. Get started now."
        ctaLabel="Schedule Revenue Assessment"
        formId="psychAssessmentForm"
        checklist={[
          "Psychiatric CPT coding audit — evaluations, add-ons, med management",
          "Referral and prior authorization gap analysis",
          "Denial root-cause review — 72h resolution guaranteed",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For psychiatric practices & mental health groups · AAPC-certified specialists · 50 states served"
      />

    </main>
  );
}
