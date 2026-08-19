import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";
import SpecialtyProcess from "@/components/specialty/SpecialtyProcess";

export default function InternalMedicineBillingPage() {
  return (
    <main className="sp-page intmed-page" id="main">

      {/* ═══ HERO ═════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="Physician Revenue Infrastructure"
        heading="Internal Medicine Billing Services"
        intro="Medbilling RCM is a dedicated internal medicine medical billing company that simplifies revenue cycle management for physicians reducing administrative burdens, minimizing claim denials, and accelerating reimbursements."
        badge="AAPC Certified · 50 States · Medicare & Commercial"
        stats={[
          { num: "99.9%", label: "Claim Acceptance Rate" },
          { num: "90%",   label: "Collection Rate" },
          { num: "50",    label: "States Served" },
          { num: "+15%",  label: "Revenue Increase" },
        ]}
      />

      {/* ═══ EXPERT RCM ═══════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="expert-rcm">
        <div className="sp-wrap">
          <p className="sp-ew">Solving Every Billing Challenge</p>
          <h2>Expert Internal Medicine Revenue Cycle Management</h2>

          <div className="intmed-rcm-layout">
            <div className="intmed-rcm-copy">
              <p>Internal medicine billing is complex, requiring accurate coding, documentation, and compliance with changing regulations. Our certified specialists handle it all so you can concentrate on providing exceptional patient care.</p>
              <p>From complex E/M coding to chronic care management and value-based payment models, we deploy comprehensive solutions tailored to internal medicine practices of every size.</p>
              <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
            </div>

            <div className="intmed-services-panel">
              <p className="intmed-services-label">Comprehensive Services</p>
              <ul className="intmed-svc-list">
                {[
                  "Complex & Evolving Coding Requirements",
                  "Chronic Care & Preventive Services Billing",
                  "Coordination of Care & Multi-Provider Billing",
                  "Value-Based Payment Models",
                  "MIPS Reporting & Quality Measures",
                  "Managing High Patient Volumes",
                  "E/M Code Compliance",
                  "Medicare Advantage Billing",
                  "Preventive Care Billing",
                  "Alternative Payment Model Support",
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

      {/* ═══ CORE CAPABILITIES ════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew">Core Capabilities</p>
          <h2>Internal Medicine Billing Challenges We Solve</h2>
          <p className="intmed-caps-sub">Expert urgent care billing services designed to achieve the highest possible revenue for your practice.</p>

          <div className="intmed-caps-grid">
            {[
              { icon:"📋", n:"01", h:"Complex & Evolving Coding Requirements",     t:"Internal medicine physicians treat a broad range of conditions. E/M coding changes, ICD-10 updates, and CPT revisions require constant attention our certified coders ensure claims are always accurate." },
              { icon:"🩺", n:"02", h:"Chronic Care & Preventive Services Billing", t:"Billing for chronic disease management and preventive care services requires Medicare and payer-specific compliance. We ensure proper documentation for accurate reimbursements." },
              { icon:"🔗", n:"03", h:"Coordination of Care & Multi-Provider Billing",t:"Internal medicine doctors often collaborate with specialists. Our team manages complex claims involving multiple providers and ensures accurate payer reimbursement coordination." },
              { icon:"📊", n:"04", h:"Value-Based Payment Models",                 t:"We assist in MIPS reporting, quality measure tracking, and alternative payment models to ensure compliance and maximize revenue in the transition to value-based care." },
              { icon:"⚡", n:"05", h:"High Patient Volume Management",             t:"Multiple services in one visit require proper documentation for full reimbursement. Our AAPC-certified specialists ensure every procedure is accounted for, reducing underpayments." },
              { icon:"🛡️", n:"06", h:"Compliance & Audit Protection",              t:"We safeguard your practice against Medicare audits, RAC reviews, and HIPAA violations with proactive compliance monitoring and thorough documentation review." },
            ].map(({ icon, n, h, t }) => (
              <article className="intmed-cap-card reveal" key={n}>
                <div className="intmed-cap-top">
                  <div className="intmed-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="intmed-cap-num">{n}</span>
                </div>
                <h3>{h}</h3>
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

      {/* ═══ BEFORE / AFTER STATS ═════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew">Operational Transformation</p>
          <h2>Before → After. The Numbers Tell the Story.</h2>

          <div className="intmed-ba-grid">
            <div className="intmed-ba-card">
              <div className="intmed-ba-label">Average AR Days</div>
              <div className="intmed-ba-num">45<span>+ days</span></div>
              <div className="intmed-ba-arrow">↓</div>
              <div className="intmed-ba-after">Under <strong>30</strong></div>
            </div>
            <div className="intmed-ba-card intmed-ba-card--green">
              <div className="intmed-ba-label">First-Pass Clean Claims</div>
              <div className="intmed-ba-num">72<span>%</span></div>
              <div className="intmed-ba-sub-lbl">first-pass rate</div>
            </div>
            <div className="intmed-ba-card">
              <div className="intmed-ba-label">Denial Rate</div>
              <div className="intmed-ba-num">18<span>%</span></div>
              <div className="intmed-ba-sub-lbl">average denial rate</div>
            </div>
            <div className="intmed-ba-card intmed-ba-card--gold">
              <div className="intmed-ba-label">Revenue Increase</div>
              <div className="intmed-ba-num">+15<span>%</span></div>
              <div className="intmed-ba-sub-lbl">within first 90 days</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ═══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold">Why Medbilling RCM</p>
          <h2>Your Internal Medicine Revenue Infrastructure Partner</h2>
          <p className="intmed-why-intro">Over a decade of experience in internal medicine billing clients see a 15–30% revenue increase within months of switching to our services.</p>

          <div className="intmed-why-grid">
            {[
              { icon:"🏆", n:"01", h:"Industry Expertise",             t:"Over a decade of experience specifically in internal medicine billing and coding." },
              { icon:"📈", n:"02", h:"Proven Results 15–30% Revenue Increase", t:"Clients see measurable revenue improvement within the first few months of engagement." },
              { icon:"⚖️", n:"03", h:"Compliance Focused",              t:"We safeguard your practice against Medicare audits and HIPAA violations proactively." },
              { icon:"🔧", n:"04", h:"Scalability",                     t:"Whether a small practice or multi-provider facility, our solutions adjust to your specific needs." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Specialists",      t:"Every coder is certified with specialty-specific training. Zero ICD-10, CPT, and HCPCS coding disruption." },
              { icon:"⏰", n:"06", h:"24/7 AR Follow-Up Within 30 Days",t:"Proactive monitoring ensures claims are resolved before they age protecting your cash flow." },
              { icon:"💰", n:"07", h:"Up to 30% Revenue Boost",        t:"Advanced EMR/EHR software paired with expert RCM drives measurable revenue improvement." },
              { icon:"🔍", n:"08", h:"Transparent Fee Structure",       t:"No hidden fees. Cost-effective, results-driven solutions with full reporting visibility." },
            ].map(({ icon, n, h, t }) => (
              <div className="intmed-why-card reveal" key={n}>
                <div className="intmed-why-top">
                  <div className="intmed-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="intmed-why-num">{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ASSESSMENT CTA ═══════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal intmed-mid-cta-sec">
        <div className="sp-wrap intmed-mid-cta">
          <div>
            <p className="sp-ew">Revenue Assessment</p>
            <h2>Engineer Your Internal Medicine Revenue System</h2>
            <p>Schedule a revenue assessment and discover how our internal medicine billing specialists can recover lost revenue, reduce denials, and accelerate your payment cycles.</p>
          </div>
          <div className="intmed-mid-cta-action">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
            <p className="intmed-mid-note">For internal medicine practices of all sizes · AAPC-certified specialists · 50 states served</p>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ══════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="faq">
        <div className="sp-wrap">
          <p className="sp-ew">Common Questions</p>
          <h2>Frequently Asked Questions</h2>

          <div className="intmed-faq-layout">
            <div className="intmed-faq-intro">
              <p>Direct answers about internal medicine billing, E/M coding, and compliance.</p>
            </div>
            <div className="intmed-faq-list">
              {[
                ["How do you handle the 2026 E/M coding changes for internal medicine?",
                 "Our certified coders stay current with all E/M documentation and coding changes. We conduct regular audits of your E/M code selection to ensure compliance with the latest CMS guidelines and prevent undercoding or overcoding."],
                ["Can you manage billing for both Medicare and commercial payers?",
                 "Yes. We have extensive experience with Medicare, Medicare Advantage, Medicaid, and all major commercial payers. We track payer-specific rules to ensure claims are submitted correctly for each insurer."],
                ["How do you support MIPS reporting for internal medicine practices?",
                 "We assist with quality measure selection, data collection, and MIPS submission to maximize your performance category scores. Our team monitors your progress throughout the performance year to ensure optimal outcomes."],
                ["What is your process for managing high-volume practices?",
                 "We scale our team and workflows to match your practice volume. Our automated claim scrubbing and dedicated account managers ensure consistent turnaround times regardless of patient volume fluctuations."],
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
        body="We review your billing workflow, denial patterns, and AR aging — then deliver a written report with findings and a recovery plan. No obligation. You keep the report whether or not you work with us."
        ctaLabel="Schedule Revenue Assessment"
        formId="intmedAssessmentForm"
        checklist={[
          "E/M distribution benchmarked against your specialty",
          "Top denial reasons by dollar from your AR",
          "MIPS reporting gap analysis",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For internal medicine practices of all sizes · AAPC-certified specialists · 50 states served"
      />

    </main>
  );
}
