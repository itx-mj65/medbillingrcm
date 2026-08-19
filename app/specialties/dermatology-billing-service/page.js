import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";
import SpecialtyProcess from "@/components/specialty/SpecialtyProcess";

export default function DermatologyBillingPage() {
  return (
    <main className="sp-page derm-page" id="main">

      {/* ═══ HERO ═════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="Dermatology Revenue Infrastructure"
        heading="Dermatology Medical Billing Services"
        intro="Dermatology Medical Billing Services optimize billing for dermatology practices ensuring accurate claims, faster reimbursements, and streamlined revenue management so providers can focus on patient care."
        badge="AAPC Certified · Mohs & Biologic Specialists · 50 States"
        stats={[
          { num: "72%",  label: "First-Pass Clean Claims" },
          { num: "18%",  label: "Denial Rate Reduction" },
          { num: "+15%", label: "Revenue Increase" },
          { num: "30",   label: "Average AR Days" },
        ]}
      />

      {/* ═══ EXPERT RCM ═══════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="expert-rcm">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Comprehensive Dermatology Billing</p>
          <h2 className="reveal">Expert Dermatology Revenue Cycle Management</h2>

          <div className="derm-rcm-layout">
            <div className="derm-rcm-copy">
              <p>Medbilling RCM offers comprehensive dermatology billing services to streamline claim submissions, maximize reimbursements, and reduce administrative burdens for dermatology practices.</p>
              <p>We consistently follow up on accounts receivable and ensure regular completion of prior authorization. Our denials team works proactively shifting from denial management to prevention by enhancing administrative, operational, and financial efficiency.</p>
              <Link href="/request-free-audit/" className="reveal sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
            </div>

            <div className="derm-services-panel">
              <p className="derm-services-label">Comprehensive Services</p>
              <ul className="derm-svc-list">
                {[
                  "Patient Registration & Insurance Verification",
                  "Appointment Scheduling & Prior Authorization",
                  "Coding & Documentation (CPT, ICD-10, HCPCS)",
                  "Claim Creation & Submission",
                  "Claim Tracking & Denial Management",
                  "Payment Posting",
                  "Accounts Receivable (AR) Follow-Up",
                  "Patient Billing & Statements",
                  "Credentialing & Enrollment",
                  "Financial Reporting & Analytics",
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

      {/* ═══ CAPABILITIES — 6 cards, navy with orb ════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Core Capabilities</p>
          <h2 className="reveal">Dermatology Billing Solutions We Offer</h2>
          <p className="reveal derm-caps-sub">Expert urgent care billing services designed to achieve the highest possible revenue for your practice.</p>

          <div className="derm-caps-grid">
            {[
              { icon:"📝", n:"01", h:"Patient Registration & Insurance Verification",   t:"Collect patient information, verify insurance eligibility, and determine coverage details before service delivery to prevent front-end claim denials." },
              { icon:"📅", n:"02", h:"Appointment Scheduling & Prior Authorization",     t:"Schedule appointments and secure prior authorizations for procedures that require approval including biologic therapies and cosmetic vs. medical procedure differentiation." },
              { icon:"🔬", n:"03", h:"Coding & Documentation",                           t:"Accurate dermatology-specific codes (CPT, ICD-10, and HCPCS) with thorough documentation to prevent downcoding and maximize reimbursement." },
              { icon:"📤", n:"04", h:"Claim Creation & Submission",                      t:"Generate claims with accurate coding and submit them to insurance providers electronically with pre-submission scrubbing for compliance and completeness." },
              { icon:"🔄", n:"05", h:"Claim Tracking & Denial Management",              t:"Monitor claim status, address rejections, and manage denials through appeals. Our proactive denial prevention approach reduces rework and accelerates payments." },
              { icon:"💰", n:"06", h:"AR Follow-Up & Revenue Recovery",                 t:"Systematic follow-up on outstanding claims to resolve delayed payments, minimize AR days, and recover revenue from aged accounts." },
            ].map(({ icon, n, h, t }) => (
              <article className="derm-cap-card reveal" key={n}>
                <div className="reveal derm-cap-top">
                  <div className="reveal derm-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="derm-cap-num">{n}</span>
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

      {/* ════════════════════════════════════════════════════════
          NEW MIDDLE SECTION — UNIQUE TO DERMATOLOGY
          "Before → After" is represented as a split stat panel
          with large numbers + descriptive text side by side,
          plus a prominent "Reducing Average AR Days" context label.
          Design: 2-col asymmetric — left large stat display,
          right stacked mini-stats — different from all other pages.
      ════════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="operational-transformation">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <h3 className="reveal derm-ba-subtitle">Reducing Average AR Days for Dermatology Practices</h3>

          <div className="derm-ba-layout">

            {/* Left: hero AR days stat */}
            <div className="derm-ba-hero-stat">
              <div className="derm-ba-hero-label">Average AR Days</div>
              <div className="derm-ba-hero-before">
                <span className="derm-ba-was">was</span>
                <span className="derm-ba-num-old">45<sup>+</sup></span>
              </div>
              <div className="derm-ba-arrow-down" aria-hidden="true">
                <svg viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="40">
                  <path d="M12 2 L12 34 M4 26 L12 36 L20 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>After Medbilling RCM</span>
              </div>
              <div className="derm-ba-hero-after">
                <span className="derm-ba-num-new">Under&nbsp;30</span>
                <span className="derm-ba-days">days</span>
              </div>
            </div>

            {/* Right: 3 stacked metric cards */}
            <div className="derm-ba-mini-stats">
              <div className="derm-ba-mini derm-ba-mini--a">
                <div className="derm-ba-mini-num">72<span>%</span></div>
                <div className="derm-ba-mini-lbl">First-Pass Clean Claims</div>
                <div className="derm-ba-mini-bar"><div className="derm-ba-mini-fill" style={{width:"72%"}} /></div>
              </div>
              <div className="derm-ba-mini derm-ba-mini--b">
                <div className="derm-ba-mini-num">18<span>%</span></div>
                <div className="derm-ba-mini-lbl">Denial Rate</div>
                <div className="derm-ba-mini-bar"><div className="derm-ba-mini-fill derm-ba-mini-fill--warn" style={{width:"18%"}} /></div>
              </div>
              <div className="derm-ba-mini derm-ba-mini--c">
                <div className="derm-ba-mini-num">+15<span>%</span></div>
                <div className="derm-ba-mini-lbl">Revenue Increase</div>
                <div className="derm-ba-mini-bar"><div className="derm-ba-mini-fill derm-ba-mini-fill--gold" style={{width:"55%"}} /></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ═══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="reveal sp-ew sp-ew--gold">Why Medbilling RCM</p>
          <h2 className="reveal">Your Dermatology Revenue Infrastructure Partner</h2>
          <p className="reveal derm-why-intro">From medical dermatology to cosmetic procedure billing, we handle the nuances that other billing companies miss protecting your revenue and your practice.</p>

          <div className="derm-why-grid">
            {[
              { icon:"🛡️", n:"01", h:"Proactive Denial Prevention",           t:"We shift from reactive denial management to prevention catching issues before claims are submitted." },
              { icon:"💉", n:"02", h:"Cosmetic vs. Medical Billing Expertise", t:"Accurate differentiation between cosmetic and medically necessary procedures to maximize reimbursable claims." },
              { icon:"📊", n:"03", h:"Complete AR Management",                 t:"Consistent AR follow-up with 30-day review cycles to minimize days in AR and prevent revenue leakage." },
              { icon:"🏥", n:"04", h:"Anesthesiologist Credentialing",         t:"We verify that anesthesiologists are fully credentialed and eligible for reimbursement for in-office procedures." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Specialists",             t:"Every coder is certified with specialty-specific training. Zero ICD-10, CPT, and HCPCS coding disruption." },
              { icon:"⏰", n:"06", h:"24/7 AR Follow-Up Within 30 Days",      t:"Proactive monitoring ensures claims are resolved before they age protecting your cash flow." },
              { icon:"📈", n:"07", h:"Up to 30% Revenue Boost",               t:"Advanced EMR/EHR software paired with expert RCM drives measurable revenue improvement." },
              { icon:"🔍", n:"08", h:"Transparent Fee Structure",              t:"No hidden fees. Cost-effective, results-driven solutions with full reporting visibility." },
            ].map(({ icon, n, h, t }) => (
              <div className="derm-why-card reveal" key={n}>
                <div className="reveal derm-why-top">
                  <div className="reveal derm-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="derm-why-num">{n}</span>
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
        <div className="sp-wrap derm-mid-cta">
          <div>
            <p className="reveal sp-ew">Revenue Assessment</p>
            <h2 className="reveal">Engineer Your Dermatology Revenue System</h2>
            <p>Schedule a revenue assessment and discover how our dermatology billing specialists can streamline your claim submissions, reduce denials, and maximize your reimbursements.</p>
          </div>
          <div className="derm-mid-cta-action">
            <Link href="/request-free-audit/" className="reveal sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
            <p className="derm-mid-note">For dermatology practices of all sizes · Medical and cosmetic billing specialists · 50 states served</p>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ══════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="faq">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Common Questions</p>
          <h2 className="reveal">Frequently Asked Questions</h2>

          <div className="derm-faq-layout">
            <div className="derm-faq-intro">
              <p>Direct answers about dermatology billing, Mohs surgery, biologic therapies, and prior authorization.</p>
            </div>
            <div className="derm-faq-list">
              {[
                ["How do you differentiate between cosmetic and medically necessary procedures for billing?",
                 "Our certified coders apply clinical documentation guidelines to distinguish between cosmetic and medically necessary dermatology procedures. We ensure proper ICD-10 coding with appropriate medical necessity documentation to maximize reimbursable claims."],
                ["How do you handle billing for biologic therapies like Dupixent or Humira?",
                 "Biologic therapies require specific J-codes, NDC numbers, and prior authorization management. We handle the complete biologic billing cycle including authorization, J-code billing, infusion coding, and appeals if denied."],
                ["What is your approach to Mohs surgery billing?",
                 "Mohs surgery billing requires precise CPT coding for each surgical stage, tissue examination, and repair. Our specialists track stage counts, tissue specimens, and repair complexity to ensure accurate, compliant Mohs billing."],
                ["How do you manage prior authorizations for dermatology procedures?",
                 "We manage authorizations for biologic therapies, laser procedures, and other treatments requiring pre-approval. Our team tracks authorization timelines, documents medical necessity, and follows up with payers to prevent unnecessary delays."],
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
        heading="Get a Free Revenue Assessment."
        body="We review your billing workflow, denial patterns, and AR aging — then deliver a written report with findings and a recovery plan. No obligation. You keep the report whether or not you work with us."
        ctaLabel="Schedule Revenue Assessment"
        formId="dermAssessmentForm"
        checklist={[
          "Cosmetic vs. medically necessary procedure billing audit",
          "Mohs surgery coding accuracy review",
          "Biologic therapy authorization and J-code compliance",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For dermatology practices of all sizes · Medical and cosmetic billing specialists · 50 states served"
      />

    </main>
  );
}
