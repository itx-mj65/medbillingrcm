import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";
import SpecialtyProcess from "@/components/specialty/SpecialtyProcess";

export default function RadiologyBillingPage() {
  return (
    <main className="sp-page rad-page" id="main">

      {/* ═══ HERO ═════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="Imaging Revenue Infrastructure"
        heading="Radiology Medical Billing Services"
        intro="Radiology medical billing services specialize in coding, submitting, and managing insurance claims for radiology practices ensuring accurate documentation, compliance, and faster reimbursements."
        badge="AAPC Certified · 75K+ Claims Daily · 50 States"
        stats={[
          { num: "90%+",   label: "Collection Rate" },
          { num: "75K+",   label: "Claims Processed Daily" },
          { num: "800+",   label: "Certified Billing Experts" },
          { num: "50",     label: "States Served" },
        ]}
      />

      {/* ═══ FLEXIBLE SERVICES ════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="expert-rcm">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Expert Radiology Billing</p>
          <h2 className="reveal">Flexible Radiology Billing Services for Every Practice Model</h2>

          <div className="rad-rcm-layout">
            <div className="rad-rcm-copy">
              <p>At Medbilling RCM, we provide flexible radiology billing services designed to fit your practice's unique needs. Our offerings include revenue cycle management, EHR/EMR technology integration, accounts receivable recovery, practice management, and patient engagement services.</p>
              <p>Our radiology billing specialists carefully review patient records to assign accurate diagnosis codes, even for claims with rule-out diagnoses, ensuring faster and more reliable reimbursements.</p>
              <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
            </div>
            <div className="rad-services-panel">
              <p className="rad-services-label">Comprehensive Services</p>
              <ul className="rad-svc-list">
                {[
                  "Professional billing for all specialties",
                  "Hospital and SNF claims compliance",
                  "Technical, professional & global billing",
                  "CPT, ICD-10, HCPCS, modifier coding",
                  "Technical billing for X-rays, MRIs, CT, ultrasound",
                  "EOB review and discrepancy resolution",
                  "QCDR support for MIPS reporting",
                  "Radiology EHR/EMR/PMS integration",
                  "Built-in Radiology Information System (RIS)",
                  "PACS integration for image management",
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

      {/* ═══ CAPABILITIES — navy cards ════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Core Capabilities</p>
          <h2 className="reveal">Radiology Billing Solutions That Address Your Challenges</h2>
          <p className="rad-caps-sub">Expert urgent care billing services designed to achieve the highest possible revenue for your practice.</p>

          <div className="rad-caps-grid">
            {[
              { icon:"🎯", n:"01", h:"Accurate Coding for Faster Payments",      t:"Our radiology billing experts carefully review patient records to assign the right diagnosis codes, even for cases with rule-out diagnoses, ensuring quick and efficient reimbursement." },
              { icon:"📋", n:"02", h:"Medicare & Payer Rules Compliance",        t:"We understand NCCI edits and MPPR rules are critical for proper reimbursement. Advanced software reviews claims for accuracy and compliance, reducing errors." },
              { icon:"⚡", n:"03", h:"Simplified Authorization Process",         t:"We streamline pre-authorization for imaging procedures like MRIs and CT scans with efficient workflows and proactive follow-ups to minimize delays." },
              { icon:"🛡️", n:"04", h:"Overcoming Medical Necessity Denials",    t:"We tackle denials head-on by gathering detailed clinical information, clarifying requirements with insurers, and preparing strong appeals for revenue recovery." },
              { icon:"📊", n:"05", h:"90%+ Collection Rate",                     t:"75,000+ claims processed daily by a team of 800+ certified billing experts. Nationwide service across all 50 states." },
              { icon:"⚖️", n:"06", h:"QCDR & MIPS Reporting Support",           t:"Detailed A/R, collection, and revenue reports. Full compliance with No Surprise Act, ACR, CMS, HIPAA, OIG, ACA, and AMA standards." },
            ].map(({ icon, n, h, t }) => (
              <article className="rad-cap-card reveal" key={n}>
                <div className="rad-cap-top">
                  <div className="rad-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="rad-cap-num">{n}</span>
                </div>
                <h3 className="reveal">{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REVENUE CONTROL FRAMEWORK ════════════════════════ */}
      <SpecialtyProcess
        intro="A structured, end-to-end process built for precision from first patient contact to final payment posting."
        ctaNote="For practices billing $500K+ annually. AAPC-certified team."
      />

      {/* ═══ BEFORE / AFTER — NEW DESIGN: horizontal timeline ═══════
          Different from rheum/intmed — uses a flow-left-to-right
          timeline strip showing the transformation journey visually. */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <h3 className="reveal rad-ba-sub">Reducing Your Radiology Average AR Days</h3>

          {/* Timeline strip — unique to radiology */}
          <div className="rad-timeline-strip">
            <div className="rad-tl-before">
              <div className="rad-tl-label">Before</div>
              <div className="rad-tl-num">45<span>+ days</span></div>
              <div className="rad-tl-desc">Average AR days</div>
            </div>
            <div className="rad-tl-arrow" aria-hidden="true">
              <svg viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12 H70 M60 4 L72 12 L60 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Medbilling RCM</span>
            </div>
            <div className="rad-tl-after">
              <div className="rad-tl-label">After</div>
              <div className="rad-tl-num rad-tl-num--green">Under <strong>30</strong></div>
              <div className="rad-tl-desc">days average AR</div>
            </div>
          </div>

          {/* Metric cards row */}
          <div className="reveal rad-metrics-row">
            <div className="rad-metric">
              <div className="rad-metric-num">90<span>%+</span></div>
              <div className="rad-metric-lbl">First-Pass Clean Claims</div>
            </div>
            <div className="rad-metric rad-metric--divider" aria-hidden="true" />
            <div className="rad-metric">
              <div className="rad-metric-num">18<span>%</span></div>
              <div className="rad-metric-lbl">Denial Rate</div>
            </div>
            <div className="rad-metric rad-metric--divider" aria-hidden="true" />
            <div className="rad-metric">
              <div className="rad-metric-num">+15<span>%</span></div>
              <div className="rad-metric-lbl">Revenue Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING — left-rail cards ═══════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="reveal sp-ew sp-ew--gold">Why Medbilling RCM</p>
          <h2 className="reveal">Your Radiology Revenue Infrastructure Partner</h2>
          <p className="rad-why-intro">Unlike other radiology billing companies, we focus on clear communication and personalized service not just claim volume to ensure a better client experience.</p>

          <div className="rad-why-grid">
            {[
              { icon:"💰", n:"01", h:"50% Lower Overhead Costs",           t:"Our efficient radiology billing operations significantly reduce administrative overhead compared to in-house billing." },
              { icon:"⚡", n:"02", h:"75,000+ Claims Processed Daily",     t:"800+ certified billing and coding experts processing claims with speed and accuracy." },
              { icon:"🖥️", n:"03", h:"User-Friendly Radiology EHR/EMR/PMS",t:"Integrated with PACS for image storage and retrieval, RIS for imaging management." },
              { icon:"⚖️", n:"04", h:"Full Compliance Standards",          t:"ACR, CMS, HIPAA, OIG, ACA, and AMA compliance. No Surprise Act compliant billing." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Specialists",         t:"Every coder is certified with specialty-specific training. Zero ICD-10, CPT, and HCPCS coding disruption." },
              { icon:"⏰", n:"06", h:"24/7 AR Follow-Up Within 30 Days",  t:"Proactive monitoring ensures claims are resolved before they age protecting your cash flow." },
              { icon:"📈", n:"07", h:"Up to 30% Revenue Boost",           t:"Advanced EMR/EHR software paired with expert RCM drives measurable revenue improvement." },
              { icon:"🔍", n:"08", h:"Transparent Fee Structure",          t:"No hidden fees. Cost-effective, results-driven solutions with full reporting visibility." },
            ].map(({ icon, n, h, t }) => (
              <div className="rad-why-card reveal" key={n}>
                <div className="rad-why-top">
                  <div className="rad-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="rad-why-num">{n}</span>
                </div>
                <h3 className="reveal">{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MID CTA ══════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal rad-mid-cta-sec">
        <div className="sp-wrap rad-mid-cta">
          <div>
            <p className="reveal sp-ew">Revenue Assessment</p>
            <h2 className="reveal">Engineer Your Radiology Revenue System</h2>
            <p>Schedule a revenue assessment and discover how much your radiology practice can recover through accurate coding, faster authorizations, and proactive denial management.</p>
          </div>
          <div className="rad-mid-cta-action">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
            <p className="rad-mid-note">For radiology practices and imaging centers · 75,000+ claims processed daily · 50 states served</p>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ══════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="faq">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Common Questions</p>
          <h2 className="reveal">Frequently Asked Questions</h2>

          <div className="rad-faq-layout">
            <div className="rad-faq-intro">
              <p>Direct answers about radiology billing, MPPR, PACS/RIS integration, and prior authorization.</p>
            </div>
            <div className="rad-faq-list">
              {[
                ["How do you handle billing for the technical, professional, and global components?",
                 "We accurately bill for all three components of radiology services technical, professional, and global ensuring proper modifier usage and payer-specific billing rules are applied for each scenario."],
                ["How does MPPR (Multiple Procedure Payment Reduction) affect radiology billing?",
                 "MPPR rules reduce reimbursement for multiple imaging procedures performed on the same patient on the same day. Our software automatically identifies and applies MPPR rules to ensure accurate claim submission."],
                ["Can you integrate with our PACS and RIS systems?",
                 "Yes. Our radiology EHR/EMR/PMS software integrates with PACS for image storage and retrieval and includes a built-in Radiology Information System (RIS) for effective imaging management."],
                ["How do you manage prior authorization for imaging procedures?",
                 "We handle pre-authorization for MRIs, CT scans, and other imaging procedures with efficient workflows, proactive insurer follow-ups, and documentation management to prevent authorization-related denials."],
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

      {/* ═══ CTA SECTION ══════════════════════════════════════ */}
      <CtaSection
        eyebrow="Ready when you are"
        heading="Get a Free Revenue Assessment."
        body="We review your billing workflow, coding accuracy, denial patterns, and AR aging — then deliver a written report with findings and a recovery plan. No obligation. You keep the report whether or not you work with us."
        ctaLabel="Schedule Revenue Assessment"
        formId="radAssessmentForm"
        checklist={[
          "Coding accuracy audit — technical, professional, and global billing",
          "MPPR compliance review across all imaging procedures",
          "Top denial reasons by dollar from your AR",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For radiology practices and imaging centers · 75,000+ claims processed daily · 50 states served"
      />

    </main>
  );
}
