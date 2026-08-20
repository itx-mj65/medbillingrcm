import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function GastroenterologyBillingPage() {
  return (
    <main className="sp-page gi-page" id="main">

      {/* ═══ HERO ════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="GI Revenue Infrastructure"
        heading="Gastroenterology Billing Services"
        intro="Medbilling RCM's gastroenterology billing services help reduce errors, speed up reimbursements, and keep your practice compliant. While you focus on patient care, we ensure accurate claim processing and hassle-free revenue management."
        badge="AAPC Certified · NCCI Compliant · 50 States"
        stats={[
          { num: "99.9%", label: "Claim Acceptance Rate" },
          { num: "30%",   label: "Reduction in A/R" },
          { num: "90%",   label: "Collection Rate" },
          { num: "50",    label: "States Served" },
        ]}
      />

      {/* ═══ COMPREHENSIVE SERVICES ══════════════════════════
          UNIQUE DESIGN: two-col — left short intro + right 8-item
          service tag list, then 6 detail cards below in 3-col grid.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="services">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Comprehensive GI Billing Services</p>
          <h2 className="reveal">Our Comprehensive Gastroenterology Medical Billing Services</h2>

          <div className="gi-overview-layout">
            <div className="gi-overview-copy">
              <p className="reveal">We manage every aspect of gastroenterology medical billing, from claim submission to reimbursement tracking, handling complexities unique to GI procedures. Our gastroenterology billing services cover every procedure, every setting, every payer.</p>
              <Link href="/request-free-audit/" className="sp-btn sp-btn--primary reveal">Request Free Demo</Link>
            </div>

            <div className="gi-svc-tags">
              {[
                { icon:"🔢", label:"Accurate CPT Coding & Modifier Application",    sub:"EGDs, polyp removals, colonoscopies" },
                { icon:"🏛️", label:"Medicare & Private Insurance Policies",          sub:"Screening vs. diagnostic compliance" },
                { icon:"🔐", label:"Prior Authorization Management",                 sub:"ERCP, EUS, capsule endoscopy, Bravo pH" },
                { icon:"📅", label:"Post-Procedure Global Period Billing",           sub:"Correct follow-up charge capture" },
                { icon:"💉", label:"Anesthesia & Pathology Billing",                 sub:"CPT 00731, 00732 documented and billed" },
                { icon:"🏥", label:"Multi-Setting Billing",                          sub:"Hospitals, ASCs, outpatient facilities" },
                { icon:"🚫", label:"Denial Management & Appeals",                    sub:"Wrongly denied claims recovered" },
                { icon:"🖥️", label:"Smart GI Billing Software",                      sub:"Auto-coding, automated pre-auth tracking" },
              ].map(({ icon, label, sub }) => (
                <div className="gi-svc-tag reveal" key={label}>
                  <span className="gi-svc-tag-icon" aria-hidden="true">{icon}</span>
                  <div>
                    <strong>{label}</strong>
                    <span>{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detail cards — 3-col */}
          <div className="gi-detail-grid">
            {[
              { icon:"🔢", h:"Accurate CPT Coding & Modifier Application",    t:"Billing errors in GI procedures like colonoscopies and endoscopies often lead to denials or lost revenue. Our team ensures correct CPT codes for every procedure, from EGDs to polyp removals, proper modifier application (51, 59, 76) to prevent claim bundling issues, and compliance with NCCI edits so you get paid for every eligible service." },
              { icon:"🏛️", h:"Handling Medicare & Private Insurance Policies",  t:"Different payers have different rules, especially regarding screening vs. diagnostic colonoscopies. We make sure claims are coded correctly so screening procedures aren't denied for unexpected findings, Medicare and Medicaid rules are followed to prevent rejected claims, and payer guidelines are updated regularly to avoid reimbursement delays." },
              { icon:"🔐", h:"Eliminating Prior Authorization & Medical Necessity Denials", t:"Many GI procedures require prior authorization, and insurers often deny claims due to missing documentation. We handle pre-authorizations for endoscopic treatments, capsule endoscopy, and Bravo pH studies, thorough documentation to justify medical necessity and prevent denials, and appeals for wrongly denied claims so you don't lose out on revenue." },
              { icon:"📅", h:"Correct Billing for Post-Procedure Care",        t:"Gastroenterology procedures come with global periods, meaning follow-ups aren't always separately billable. We ensure claims follow global period guidelines to prevent audits and overbilling, post-op visits are billed correctly when additional services are provided, and every service performed is captured so nothing gets missed." },
              { icon:"💉", h:"Capturing Every Billable Service",               t:"Many practices lose money by not billing for anesthesia, pathology, or diagnostic interpretations. Our experts ensure anesthesia services (CPT 00731, 00732) are properly documented and billed, submit claims for pathology and diagnostic tests to maximize reimbursements, and prevent revenue loss by identifying missed charges before claims go out." },
              { icon:"🏥", h:"Billing for Every Practice Setting",             t:"Billing can be complicated no matter where you provide care hospitals, ASCs, or out-of-network facilities. Medbilling RCM makes it simple: inpatient and outpatient claims handled with accuracy and compliance, errors prevented, reimbursements maximized for all GI procedures, and fair payments secured with expert negotiation and claim management." },
            ].map(({ icon, h, t }) => (
              <article className="gi-detail-card reveal" key={h}>
                <div className="gi-detail-icon" aria-hidden="true">{icon}</div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINANCIAL PERFORMANCE — 3 pillars ══════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Financial Performance</p>
          <h2 className="reveal">How We Elevate Your Financial Performance</h2>
          <p className="gi-perf-sub reveal">AAPC-certified GI billing specialists driving measurable revenue improvement and compliance excellence for gastroenterology practices of every size.</p>

          <div className="gi-perf-grid">
            <div className="gi-perf-card reveal">
              <div className="gi-perf-icon" aria-hidden="true">📈</div>
              <h3>Maximizing Revenue with AAPC-Certified Coders</h3>
              <p>Our team specializes in revenue cycle optimization, helping gastroenterologists achieve measurable results:</p>
              <ul className="gi-perf-list">
                <li>Reduce Claim Denials by 25–30% through accurate coding and proactive payer communication</li>
                <li>Increase Collections by 15–30% with efficient AR follow-ups and appeals</li>
                <li>Ensure 98% First-Pass Claim Acceptance Rate, reducing payment delays</li>
              </ul>
            </div>
            <div className="gi-perf-card reveal">
              <div className="gi-perf-icon" aria-hidden="true">⚖️</div>
              <h3>Compliance and Regulatory Adherence</h3>
              <p>We stay updated with CMS guidelines, HIPAA regulations, and payer policy changes to safeguard your practice. Our solutions align with:</p>
              <ul className="gi-perf-list">
                <li>Medicare Local Coverage Determinations (LCDs) for GI Procedures</li>
                <li>American Gastroenterological Association (AGA) Coding Guidelines</li>
                <li>HIPAA-Compliant Data Security Measures</li>
              </ul>
            </div>
            <div className="gi-perf-card reveal">
              <div className="gi-perf-icon" aria-hidden="true">🖥️</div>
              <h3>Advanced Gastroenterology Billing Software</h3>
              <p>Our software simplifies GI coding, payer rules, and compliance, helping your practice submit claims faster:</p>
              <ul className="gi-perf-list">
                <li>Smart Coding: Auto-suggests accurate CPT and ICD-10 codes for EGD, colonoscopies, and more</li>
                <li>Automated Pre-Authorizations: Tracks payer approvals for ERCP and EUS</li>
                <li>Error-Free Claims: Flags missing modifiers and medical necessity issues</li>
                <li>Custom Reports: Analyzes underpaid claims, denials, and reimbursements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ REVENUE CONTROL FRAMEWORK — 6 steps ════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="process">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Revenue Control Framework</p>
          <h2 className="reveal">How We Engineer Your GI Revenue System</h2>
          <p className="gi-process-intro reveal">End-to-end GI billing infrastructure from pre-authorization to payment posting built for the complexity of endoscopy and GI procedures.</p>

          <div className="gi-steps">
            {[
              { n:"01", h:"Pre-Service Authorization",       t:"Proactive prior auth for endoscopic treatments, capsule endoscopy, ERCP, EUS, and Bravo pH studies" },
              { n:"02", h:"Procedure Coding",               t:"AAPC-certified GI coders apply correct CPT codes with modifiers 51, 59, 76 and NCCI edit compliance" },
              { n:"03", h:"Anesthesia & Pathology Capture", t:"Anesthesia (CPT 00731, 00732) and pathology services billed accurately no missed revenue" },
              { n:"04", h:"Global Period Management",       t:"Track post-procedure periods; ensure follow-up visits are billed correctly when separately billable" },
              { n:"05", h:"Denial Management",              t:"Screening vs. diagnostic denial prevention plus proactive appeals for all wrongly denied GI claims" },
              { n:"06", h:"Multi-Setting Reconciliation",   t:"Accurate billing across hospitals, ASCs, and outpatient facilities with full payment reconciliation" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="gi-step reveal" key={n}>
                <div className="gi-step-aside">
                  <div className="gi-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="gi-step-conn" aria-hidden="true" />}
                </div>
                <div className="gi-step-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gi-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
            <span className="gi-process-note">For GI practices &amp; ASCs · Colonoscopy &amp; endoscopy specialists · 50 states served</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>

          <div className="gi-ba-grid">
            <div className="gi-ba-card gi-ba-card--green reveal">
              <div className="gi-ba-label">First-Pass Acceptance</div>
              <div className="gi-ba-num">70%<span>→</span><strong>98%</strong></div>
              <div className="gi-ba-desc">first-pass acceptance rate</div>
            </div>
            <div className="gi-ba-card reveal">
              <div className="gi-ba-label">Claim Denial Reduction</div>
              <div className="gi-ba-num">High<span>→</span><strong>25–30%↓</strong></div>
              <div className="gi-ba-desc">denial rate reduction</div>
            </div>
            <div className="gi-ba-card gi-ba-card--green reveal">
              <div className="gi-ba-label">Collections Increase</div>
              <div className="gi-ba-num">Low<span>→</span><strong>15–30%↑</strong></div>
              <div className="gi-ba-desc">revenue improvement</div>
            </div>
            <div className="gi-ba-card reveal">
              <div className="gi-ba-label">HIPAA Compliant</div>
              <div className="gi-ba-num">Manual<span>→</span><strong>100%</strong></div>
              <div className="gi-ba-desc">automated compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING — 4 horizontal cards ════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your GI Revenue Infrastructure Partner</h2>
          <p className="gi-why-intro reveal">Our gastroenterology billing team understands the nuances of colonoscopy modifiers, anesthesia bundling, capsule endoscopy authorization, and the critical difference between screening and diagnostic procedures the specific expertise that drives results.</p>

          <div className="gi-why-grid">
            {[
              { icon:"🔭", n:"01", h:"Colonoscopy & Endoscopy Specialists",  t:"Deep expertise in colonoscopy, EGD, ERCP, capsule endoscopy, and all GI procedural coding with correct modifier application every time." },
              { icon:"💉", n:"02", h:"Anesthesia & Pathology Billing",       t:"We capture all associated charges including anesthesia services and pathology interpretations to maximize total reimbursement per encounter." },
              { icon:"🛡️", n:"03", h:"Proactive Denial Prevention",          t:"We shift from reactive denial management to prevention catching bundling issues and authorization gaps before claims are submitted." },
              { icon:"🏥", n:"04", h:"ASC & Hospital Setting Expertise",     t:"Accurate facility and professional fee billing across all GI care settings hospitals, ASCs, and outpatient clinics without billing errors." },
            ].map(({ icon, n, h, t }) => (
              <div className="gi-why-card reveal" key={n}>
                <div className="gi-why-top">
                  <div className="gi-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="gi-why-num">{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ══════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="faq">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Common Questions</p>
          <h2 className="reveal">Frequently Asked Questions</h2>

          <div className="gi-faq-layout">
            <div className="gi-faq-intro reveal">
              <p>Direct answers about GI billing, colonoscopy modifiers, anesthesia coding, global periods, and multi-location billing. <Link href="/specialties/" className="gi-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="gi-faq-list">
              {[
                ["How do you handle the difference between screening and diagnostic colonoscopy billing?",
                 "We code screening colonoscopies with the appropriate HCPCS codes (G0121, G0105) and apply correct modifiers when unexpected findings convert a screening to diagnostic. This prevents denials for the additional work performed and ensures accurate reimbursement in both scenarios."],
                ["How do you manage anesthesia billing for GI procedures?",
                 "We ensure anesthesia services (CPT 00731, 00732) are properly documented with correct time units, ASA codes, and provider credentials. We handle both separate anesthesia billing and monitored anesthesia care (MAC) for all GI procedures, maximizing total reimbursement per case."],
                ["What is your approach to global period billing for GI procedures?",
                 "We track global periods for all GI procedures and ensure post-operative services are correctly classified as within-global (not separately billable) vs. separately billable with appropriate modifiers, preventing audits while maximizing legitimate revenue."],
                ["How do you handle multi-location GI billing across hospitals and ASCs?",
                 "We maintain separate billing workflows for each facility setting, applying correct place-of-service codes, facility vs. professional fee rules, and ASC vs. HOPD billing requirements to ensure compliance and maximum reimbursement at each location."],
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
        heading="Get Faster Collections with Expert Gastroenterology Billing"
        body="Schedule a GI billing assessment and discover how our specialists can reduce denials, capture missed charges, and accelerate collections across all your GI procedures."
        ctaLabel="Schedule Revenue Assessment"
        formId="giAssessmentForm"
        checklist={[
          "CPT modifier audit — colonoscopy, EGD, ERCP, capsule endoscopy",
          "Anesthesia & pathology capture gap analysis (CPT 00731, 00732)",
          "Screening vs. diagnostic denial prevention review",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For GI practices & ASCs · Colonoscopy & endoscopy specialists · 50 states served"
      />

    </main>
  );
}
