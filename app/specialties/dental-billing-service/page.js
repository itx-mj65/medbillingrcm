import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function DentalBillingPage() {
  return (
    <main className="sp-page dental-page" id="main">

      {/* ═══ HERO ════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="Dental Revenue Infrastructure"
        heading="Dental Billing Services"
        intro="Medbilling RCM provides specialized dental billing services covering CDT coding, medical-dental cross-coding, dental implant billing, and oral surgery coding ensuring accurate claims and maximum reimbursements for dental practices of all sizes."
        badge="ADA CDT Certified · Cross-Coding Experts · 50 States"
        stats={[
          { num: "98%",  label: "Claim Acceptance Rate" },
          { num: "25%",  label: "More Revenue via Cross-Coding" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ COMPREHENSIVE SERVICES — split panel ════════════
          UNIQUE DESIGN: horizontal split bar layout — left services
          list and right a highlighted callout panel showing the
          cross-coding revenue opportunity (visual distinction).
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="services">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Comprehensive Dental Billing</p>
          <h2 className="reveal">Expert Dental Revenue Cycle Management</h2>

          <div className="dental-overview-layout">
            <div className="dental-svc-list-col">
              <p className="reveal">Dental billing is uniquely complex — it operates on CDT codes distinct from medical CPT codes, involves separate dental benefit plans with annual maximums, and requires knowledge of which procedures can be cross-billed to medical insurance for additional reimbursement.</p>
              <p className="reveal">Our ADA CDT-trained billing specialists manage every aspect of your dental revenue cycle from eligibility verification and pre-authorizations to claim submission, denial appeals, and patient billing.</p>
              <Link href="/request-free-audit/" className="sp-btn sp-btn--primary reveal">Schedule Revenue Assessment</Link>

              <ul className="dental-svc-list reveal">
                {[
                  "CDT Coding & Claim Submission",
                  "Medical-Dental Cross-Coding",
                  "Dental Implant Billing",
                  "Oral Surgery & Maxillofacial Billing",
                  "Orthodontic Billing & Tracking",
                  "Periodontal Procedure Coding",
                  "Endodontic Billing",
                  "Pre-Determination & Prior Auth",
                  "Denial Management & Appeals",
                  "Patient Balance Billing & Collections",
                  "Insurance Verification & Credentialing",
                  "EOB Review & Reconciliation",
                ].map(item => (
                  <li key={item}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cross-coding callout — unique to dental page */}
            <div className="dental-callout-panel reveal">
              <div className="dental-callout-badge">Revenue Opportunity</div>
              <h3>Medical-Dental Cross-Coding</h3>
              <p>Many dental procedures qualify for medical insurance reimbursement in addition to dental benefits — a revenue stream most dental practices miss entirely.</p>

              <div className="dental-callout-examples">
                {[
                  { proc:"Wisdom Tooth Extractions",    cdt:"D7210", cpt:"41899" },
                  { proc:"Dental Implants (medical need)",cdt:"D6010",cpt:"21248" },
                  { proc:"Oral Surgery / Jaw Fracture",  cdt:"D7800",cpt:"21470" },
                  { proc:"Sleep Apnea Oral Appliances",  cdt:"D9946",cpt:"E0486" },
                  { proc:"TMJ Treatment",               cdt:"D7880",cpt:"29800" },
                ].map(({ proc, cdt, cpt }) => (
                  <div className="dental-callout-row" key={proc}>
                    <span className="dental-callout-proc">{proc}</span>
                    <div className="dental-callout-codes">
                      <span className="dental-code dental-code--cdt">{cdt}</span>
                      <span className="dental-code-plus">+</span>
                      <span className="dental-code dental-code--cpt">{cpt}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="dental-callout-note">Practices that implement cross-coding capture 20–30% more revenue per encounter without changing services provided.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES — 6 capability cards (navy) ══════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Dental Billing Challenges</p>
          <h2 className="reveal">Complex Dental Billing — Expertly Handled</h2>
          <p className="dental-caps-sub reveal">Dental billing involves CDT codes, dental benefit structures, and cross-billing rules that differ significantly from medical billing. Our specialists handle it all with precision.</p>

          <div className="dental-caps-grid">
            {[
              { icon:"🦷", n:"01", h:"CDT Coding Accuracy",                 t:"ADA CDT codes change annually and vary by procedure, tooth number, surface, and clinical documentation. Our specialists ensure every claim uses the correct CDT code, accurate tooth notation, and required treatment notes to pass payer edits on the first submission." },
              { icon:"💊", n:"02", h:"Medical-Dental Cross-Coding",          t:"Procedures like oral surgery, dental implants for trauma, sleep apnea appliances, and TMJ treatment can be billed to medical insurance using CPT codes. We identify and execute cross-coding opportunities that most practices miss, adding 20–30% more revenue per case." },
              { icon:"🔩", n:"03", h:"Dental Implant Billing",              t:"Implant billing requires multiple CDT codes across planning, surgical, and restorative phases, each with separate clinical documentation. We track each implant case through all stages and coordinate medical cross-billing for medically necessary implants." },
              { icon:"✂️", n:"04", h:"Oral Surgery & Maxillofacial Coding", t:"Oral and maxillofacial surgery spans dental CDT codes and medical CPT codes for procedures like jaw fractures, orthognathic surgery, and complex extractions. We correctly apply codes from both systems and coordinate dual-insurance billing for maximum reimbursement." },
              { icon:"📋", n:"05", h:"Dental Benefit Plan Complexity",      t:"Dental benefit plans have annual maximums, waiting periods, frequency limitations, and missing tooth clauses that vary by carrier and plan. We verify all restrictions upfront, track patient annual benefit usage, and bill in the optimal sequence to capture maximum reimbursement." },
              { icon:"⚖️", n:"06", h:"Denial Management & Appeals",         t:"Dental claim denials for missing documentation, frequency limitations, or medical necessity are common. Our team reviews every denial, identifies the root cause, prepares supporting clinical documentation, and files appeals within carrier timelines to recover denied revenue." },
            ].map(({ icon, n, h, t }) => (
              <article className="dental-cap-card reveal" key={n}>
                <div className="dental-cap-inner">
                  <div className="dental-cap-top">
                    <div className="dental-cap-icon-wrap" aria-hidden="true">{icon}</div>
                    <span className="dental-cap-num">{n}</span>
                  </div>
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REVENUE CONTROL FRAMEWORK ════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal" id="process">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Revenue Control Framework</p>
          <h2 className="reveal">How We Engineer Your Dental Revenue System</h2>
          <p className="dental-process-intro reveal">A structured end-to-end dental billing infrastructure from insurance verification to payment reconciliation built for the unique complexity of dental and oral surgery billing.</p>

          <div className="dental-steps">
            {[
              { n:"01", h:"Insurance Verification & Pre-Determination",  t:"Verify dental benefits, annual maximums, frequency limits, and submit pre-determination requests before treatment begins" },
              { n:"02", h:"CDT Coding & Medical Cross-Code Review",      t:"ADA CDT-trained specialists assign accurate codes and identify all medical cross-coding opportunities for each encounter" },
              { n:"03", h:"Prior Authorization Management",              t:"Proactive authorization for implants, oral surgery, orthodontics, and medically necessary procedures across all payers" },
              { n:"04", h:"Dual-Insurance Claim Submission",             t:"Coordinated submission to dental and medical insurance when applicable — clean claims to both payers simultaneously" },
              { n:"05", h:"Denial Management & Appeals",                 t:"Root-cause analysis and appeals with clinical documentation within all carrier timelines" },
              { n:"06", h:"Payment Posting & Patient Billing",           t:"EOB/ERA reconciliation, patient balance calculation, and statement generation with collections support" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="dental-step reveal" key={n}>
                <div className="dental-step-aside">
                  <div className="dental-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="dental-step-conn" aria-hidden="true" />}
                </div>
                <div className="dental-step-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dental-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="dental-process-note">For dental practices &amp; oral surgery centers · CDT &amp; cross-coding specialists · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>

          <div className="dental-ba-grid">
            <div className="dental-ba-card dental-ba-card--green reveal">
              <div className="dental-ba-label">Claim Acceptance Rate</div>
              <div className="dental-ba-num">98<span>%</span></div>
              <div className="dental-ba-desc">first-pass clean claims</div>
            </div>
            <div className="dental-ba-card reveal">
              <div className="dental-ba-label">Revenue via Cross-Coding</div>
              <div className="dental-ba-num">+25<span>%</span></div>
              <div className="dental-ba-desc">additional revenue captured</div>
            </div>
            <div className="dental-ba-card dental-ba-card--green reveal">
              <div className="dental-ba-label">Collection Rate</div>
              <div className="dental-ba-num">90<span>%</span></div>
              <div className="dental-ba-desc">average collection rate</div>
            </div>
            <div className="dental-ba-card reveal">
              <div className="dental-ba-label">Denial Rate Reduction</div>
              <div className="dental-ba-num">30<span>%↓</span></div>
              <div className="dental-ba-desc">fewer claim denials</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING — left-rail pulse cards ══════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Dental Revenue Infrastructure Partner</h2>
          <p className="dental-why-intro reveal">Our dental billing team understands CDT coding, dental benefit plan structures, and the medical-dental cross-coding opportunities that can transform your practice revenue without changing a single procedure you provide.</p>

          <div className="dental-why-grid">
            {[
              { icon:"🦷", n:"01", h:"ADA CDT Coding Specialists",           t:"Deep expertise in CDT codes with annual update tracking and payer-specific billing rules for all dental procedures and sub-specialties." },
              { icon:"💊", n:"02", h:"Medical Cross-Coding Expertise",        t:"We identify every medical cross-coding opportunity and execute dual-insurance billing capturing revenue most dental practices leave on the table." },
              { icon:"🔩", n:"03", h:"Implant & Oral Surgery Specialists",    t:"Multi-phase implant case tracking and oral surgery CDT + CPT dual-coding expertise for maximum reimbursement from all applicable payers." },
              { icon:"📋", n:"04", h:"Dental Benefit Plan Mastery",           t:"Annual maximum tracking, frequency limitation monitoring, and benefit coordination across all major dental carriers and self-funded plans." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Billing Team",           t:"Every billing specialist is AAPC-certified with dedicated dental and oral surgery training. Zero coding disruption and full compliance at all times." },
              { icon:"⏰", n:"06", h:"Fast Claim Turnaround",                 t:"Claims submitted within 48 hours of encounter with real-time payer tracking and proactive follow-up on any unpaid or pending claims." },
              { icon:"📊", n:"07", h:"Dental-Specific Reporting",             t:"Production vs. collection reports, aging by carrier, cross-coding revenue tracking, and custom analytics built for dental practice management." },
              { icon:"🔍", n:"08", h:"Transparent Fee Structure",             t:"No hidden fees. Results-driven dental billing with full reporting visibility across CDT procedures, medical cross-claims, and patient collections." },
            ].map(({ icon, n, h, t }) => (
              <div className="dental-why-card reveal" key={n}>
                <div className="dental-why-top">
                  <div className="dental-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="dental-why-num">{n}</span>
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

          <div className="dental-faq-layout">
            <div className="dental-faq-intro reveal">
              <p>Direct answers about dental billing, CDT coding, medical-dental cross-coding, implant billing, and prior authorizations. <Link href="/specialties/" className="dental-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="dental-faq-list">
              {[
                ["What is medical-dental cross-coding and how does it benefit my practice?",
                 "Medical-dental cross-coding involves billing dental procedures to medical insurance when the service has a medical cause, such as tooth extractions related to a medical condition, oral surgery for trauma, or sleep apnea devices. This allows practices to capture additional reimbursement beyond dental insurance limits, significantly increasing total revenue per patient encounter."],
                ["How do you handle CDT code updates and ensure coding accuracy?",
                 "Our billing specialists stay current with annual ADA CDT code updates, payer-specific coverage changes, and dental benefit plan variations. We conduct regular coding audits to ensure every procedure is billed with the correct CDT code, accurate tooth numbers, and proper documentation to prevent denials."],
                ["Can you handle billing for both dental and oral surgery procedures?",
                 "Yes. We handle the full spectrum of dental billing including general dentistry, orthodontics, periodontics, endodontics, and oral and maxillofacial surgery. Oral surgery billing often crosses into medical insurance for procedures like wisdom tooth extractions, jaw surgery, and implants, and we manage this cross-billing process to maximize reimbursement from both payers."],
                ["How do you manage prior authorizations for dental procedures?",
                 "We proactively manage prior authorizations for major dental procedures including implants, crowns, oral surgery, and orthodontic treatment. Our team submits pre-determination requests to insurance carriers, tracks approval timelines, and ensures all required documentation is in place before treatment begins to prevent denials."],
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
        heading="Maximize Your Dental Practice Revenue"
        body="Schedule a free dental billing assessment and discover how accurate CDT coding, medical cross-coding opportunities, and denial management can significantly improve your practice collections."
        ctaLabel="Schedule Revenue Assessment"
        formId="dentalAssessmentForm"
        checklist={[
          "CDT coding accuracy audit across all procedure categories",
          "Medical cross-coding opportunity analysis (implants, oral surgery, sleep apnea)",
          "Denial root-cause review by CDT category",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For dental practices & oral surgery centers · CDT & cross-coding specialists · 50 states served"
      />

    </main>
  );
}
