import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function OphthalmologyBillingPage() {
  return (
    <main className="sp-page ophtho-page" id="main">

      {/* ── Breadcrumb ──────────────────────────────────── */}
      <nav className="sp-breadcrumb" aria-label="Breadcrumb">
        <div className="sp-wrap">
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/specialties/">Specialties</a></li>
            <li aria-current="page">Ophthalmology Billing Services</li>
          </ol>
        </div>
      </nav>

      {/* ═══ HERO ════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="Precision Ophthalmology Billing"
        heading="Ophthalmology Billing Services"
        intro="Medical billing for ophthalmology is complex due to payer-specific guidelines, frequent coding changes, and strict documentation requirements. MedBilling RCM utilizes the latest CMS regulations and CPT, ICD-10, and HCPCS coding updates to ensure accurate claim submissions and faster reimbursements."
        badge="AAPC Certified · NCCI Compliant · 50 States"
        stats={[
          { num: "95%+", label: "First-Pass Clean Claims" },
          { num: "30%",  label: "Reduction in A/R" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ CHALLENGES SECTION ══════════════════════════════
          UNIQUE DESIGN: Two-col layout — left copy + right 6 challenge
          cards with a scanning beam animation (like an eye exam machine)
          Different from all other specialty pages.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="challenges">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Top Billing Challenges</p>
          <h2 className="reveal">Ophthalmology Billing Challenges And How We Solve Them</h2>

          <div className="ophtho-challenges-layout">
            <div className="ophtho-challenges-copy reveal">
              <p>Medbilling RCM has a team of ophthalmology billing specialists that efficiently handles your entire RCM. From precise code selection to prior authorization management and NCCI compliance, we protect your revenue at every step.</p>
              <p>We utilize the latest CMS regulations and follow CPT, ICD-10, and HCPCS coding updates to ensure accurate claim submissions and faster reimbursements for all sub-specialties.</p>
              <Link href="/request-free-audit/" className="sp-btn sp-btn--primary reveal">Request Free Demo</Link>
            </div>

            <div className="ophtho-challenges-grid">
              {[
                { icon:"🔢", n:"01", h:"Complex Coding Systems",          t:"Ophthalmology billing requires precise CPT, ICD-10, and HCPCS coding. Our billing specialists ensure correct code selection for procedures like 66984 (Cataract Surgery) and 92083 (Visual Field Examination) to minimize denials." },
                { icon:"🏷️", n:"02", h:"Modifier Usage",                  t:"Proper use of ophthalmology billing modifiers is essential. We apply modifiers like -50 (Bilateral Procedure), -LT/-RT (Left/Right Eye), and -25 (Significant, Separately Identifiable E/M Service) to avoid payment reductions." },
                { icon:"⚖️", n:"03", h:"Medicare and Insurance Compliance",t:"We adhere to the National Correct Coding Initiative (NCCI) edits, Local Coverage Determinations (LCDs), and payer-specific policies to ensure compliance and reduce claim rejections." },
                { icon:"📅", n:"04", h:"Frequent Policy Changes",          t:"Medicare and commercial insurers update their policies regularly. We monitor changes in the Medicare Physician Fee Schedule (MPFS) and American Academy of Ophthalmology (AAO) guidelines to optimize reimbursement." },
                { icon:"🚫", n:"05", h:"High Claim Denial Rates",          t:"Many ophthalmology claims get denied due to missing documentation or incorrect coding. Our team implements detailed documentation reviews and electronic claim scrubbing to maintain a 95%+ first-pass clean claims rate." },
                { icon:"🔐", n:"06", h:"Prior Authorization",              t:"Many ophthalmology services, such as intravitreal injections (CPT 67028), require prior authorization and proof of medical necessity. Our billing services manage the authorization process proactively to prevent claim denials." },
              ].map(({ icon, n, h, t }) => (
                <div className="ophtho-challenge-card reveal" key={n}>
                  <div className="ophtho-challenge-top">
                    <div className="ophtho-challenge-icon" aria-hidden="true">{icon}</div>
                    <span className="ophtho-challenge-num">{n}</span>
                  </div>
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE — 6 capability cards (navy) ══════════
          UNIQUE DESIGN: navy cards — same orb system as other pages
          but with lens-flare top-accent (circle not line) + teal hue
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Why Choose Medbilling RCM</p>
          <h2 className="reveal">Your Ophthalmology Revenue Infrastructure Partner</h2>
          <p className="ophtho-why-intro reveal">Specialized ophthalmology billing expertise from routine exams to complex surgical procedures and intravitreal injections.</p>

          <div className="ophtho-caps-grid">
            {[
              { icon:"💊", n:"01", h:"Ophthalmic CPT Code Mastery",        t:"Expert coding for cataract surgery (66984), intravitreal injections (67028), visual field exams (92083), and the full range of ophthalmic procedures accurately coded first time." },
              { icon:"✅", n:"02", h:"NCCI Edit Compliance",               t:"We review all claims against NCCI edits and apply correct modifiers to ensure you receive full reimbursement for bundled and unbundled services every time." },
              { icon:"👁️", n:"03", h:"Bilateral Procedure Billing",        t:"Correct application of -50, -LT, and -RT modifiers ensures bilateral procedures are billed accurately and paid without unexpected reductions or bundling issues." },
              { icon:"📋", n:"04", h:"Medicare LCD Adherence",             t:"We stay current with all Local Coverage Determinations affecting ophthalmology services, ensuring your claims meet documentation and medical necessity requirements." },
              { icon:"💉", n:"05", h:"Intravitreal Injection Authorization",t:"Proactive prior authorization management for high-cost injections and surgical procedures prevents last-minute claim denials and authorization-related revenue loss." },
              { icon:"📊", n:"06", h:"AAO Guideline Compliance",           t:"We align billing processes with American Academy of Ophthalmology guidelines and CMS Physician Fee Schedule updates to optimize reimbursement continuously." },
            ].map(({ icon, n, h, t }) => (
              <article className="ophtho-cap-card reveal" key={n}>
                <div className="ophtho-cap-top">
                  <div className="ophtho-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="ophtho-cap-num">{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REVENUE CONTROL — custom 6-step (not shared) ═══
          Ophthalmology has 6 steps vs standard 5 — unique content
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal" id="process">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Revenue Control Framework</p>
          <h2 className="reveal">How We Engineer Your Ophthalmology Revenue System</h2>
          <p className="ophtho-process-intro reveal">From pre-authorization to payment posting a precision billing infrastructure built for ophthalmology.</p>

          <div className="ophtho-steps">
            {[
              { n:"01", h:"Eligibility & Benefits Verification",   t:"Confirm vision vs. medical coverage, deductibles, and prior auth requirements before every encounter" },
              { n:"02", h:"Specialty-Specific Coding",             t:"AAPC-certified coders assign ICD-10, CPT, HCPCS codes with zero disruption" },
              { n:"03", h:"Prior Authorization",                   t:"Proactive management of auth requirements for injections, surgeries, and diagnostic procedures" },
              { n:"04", h:"Electronic Claim Submission",           t:"Pre-scrubbed, compliant claims submitted electronically to all major ophthalmology payers" },
              { n:"05", h:"Denial Management",                     t:"Root-cause analysis and rapid appeal filing for all denied ophthalmology claims" },
              { n:"06", h:"Payment Reconciliation",                t:"EOB review, discrepancy resolution, and detailed financial reporting by procedure and payer" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="ophtho-step reveal" key={n}>
                <div className="ophtho-step-aside">
                  <div className="ophtho-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="ophtho-step-conn" aria-hidden="true" />}
                </div>
                <div className="ophtho-step-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="ophtho-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="ophtho-process-note">For ophthalmology practices &amp; ASCs · Cataract, retinal &amp; glaucoma specialists · 50 states served</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER — stat strip ═════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>

          <div className="ophtho-ba-grid">
            <div className="ophtho-ba-card reveal">
              <div className="ophtho-ba-label">Average AR Days</div>
              <div className="ophtho-ba-before">40<span>+ days</span></div>
              <div className="ophtho-ba-arrow" aria-hidden="true">↓</div>
              <div className="ophtho-ba-after">Under <strong>30</strong></div>
            </div>
            <div className="ophtho-ba-card ophtho-ba-card--green reveal">
              <div className="ophtho-ba-label">First-Pass Acceptance</div>
              <div className="ophtho-ba-before">78<span>%</span></div>
              <div className="ophtho-ba-arrow" aria-hidden="true">↑</div>
              <div className="ophtho-ba-after"><strong>95%+</strong></div>
            </div>
            <div className="ophtho-ba-card reveal">
              <div className="ophtho-ba-label">Denial Rate</div>
              <div className="ophtho-ba-before">22<span>%</span></div>
              <div className="ophtho-ba-arrow" aria-hidden="true">↓</div>
              <div className="ophtho-ba-after">Under <strong>5%</strong></div>
            </div>
            <div className="ophtho-ba-card ophtho-ba-card--green reveal">
              <div className="ophtho-ba-label">Revenue Increase</div>
              <div className="ophtho-ba-before">Baseline</div>
              <div className="ophtho-ba-arrow" aria-hidden="true">↑</div>
              <div className="ophtho-ba-after"><strong>+15–30%</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING — left-rail pulse cards (navy) ═══ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Ophthalmology Billing Infrastructure</h2>
          <p className="ophtho-why2-intro reveal">Our ophthalmology billing specialists understand the unique complexity of dual-track billing (medical vs. vision), bilateral modifiers, and pre-authorization requirements for high-cost ophthalmic treatments.</p>

          <div className="ophtho-why-grid">
            {[
              { icon:"👁️", n:"01", h:"Medical vs. Vision Coverage Expertise",     t:"We correctly route claims between medical insurance and vision plans, maximizing reimbursement from both coverage sources simultaneously." },
              { icon:"💉", n:"02", h:"High-Cost Injection Authorization",          t:"Proactive management of prior authorizations for intravitreal injections (Lucentis, Eylea, Avastin) and anti-VEGF therapies that prevent revenue loss." },
              { icon:"🔪", n:"03", h:"Surgical Coding Accuracy",                  t:"Precise coding for cataract (66984), retinal detachment, glaucoma filtration, and corneal procedures with correct laterality modifiers applied every time." },
              { icon:"📋", n:"04", h:"AAO & CMS Compliance",                      t:"Continuous alignment with AAO guidelines and annual CMS ophthalmology fee schedule updates zero lag on policy changes affecting your practice." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Specialists",                t:"Every coder is certified with specialty-specific training. Zero ICD-10, CPT, and HCPCS coding disruption across all sub-specialties." },
              { icon:"⏰", n:"06", h:"24/7 AR Follow-Up Within 30 Days",         t:"Proactive monitoring ensures claims are resolved before they age protecting your cash flow and collections." },
              { icon:"💰", n:"07", h:"Up to 30% Revenue Boost",                  t:"Advanced EMR/EHR software paired with expert RCM drives measurable revenue improvement for ophthalmology practices." },
              { icon:"🔍", n:"08", h:"Transparent Fee Structure",                 t:"No hidden fees. Cost-effective, results-driven solutions with full reporting visibility by procedure and payer." },
            ].map(({ icon, n, h, t }) => (
              <div className="ophtho-why-card reveal" key={n}>
                <div className="ophtho-why-top">
                  <div className="ophtho-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="ophtho-why-num">{n}</span>
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

          <div className="ophtho-faq-layout">
            <div className="ophtho-faq-intro reveal">
              <p>Direct answers about ophthalmology billing, bilateral modifiers, intravitreal injections, and NCCI compliance.</p>
            </div>
            <div className="ophtho-faq-list">
              {[
                ["How do you differentiate between medical and vision insurance billing for ophthalmology?",
                 "We assess each encounter to determine whether the condition is medical (e.g., cataracts, glaucoma, diabetic retinopathy) or routine (refractions, exams). Medical conditions are billed to medical insurance with appropriate ICD-10 codes, while vision-specific services are routed to vision plans."],
                ["How do you handle bilateral procedure billing to avoid payment reductions?",
                 "We apply modifier -50 for bilateral procedures, or -LT/-RT for unilateral services, following CMS and payer-specific rules for each situation. Our coders understand which modifiers trigger reductions vs. full payment and structure claims accordingly to maximize reimbursement."],
                ["How do you manage prior authorizations for intravitreal injections?",
                 "We initiate authorization requests before treatment, track approval timelines, document medical necessity using clinical records, and follow up proactively with payers to ensure no injection is delayed or denied due to authorization issues."],
                ["What ophthalmology sub-specialties do you cover?",
                 "We cover all ophthalmology sub-specialties including cataract and refractive surgery, retina, glaucoma, cornea, oculoplastics, pediatric ophthalmology, and neuro-ophthalmology with dedicated billing expertise for each."],
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
        heading="Accelerate Reimbursements with Precision-Driven Ophthalmology Billing"
        body="Schedule a revenue assessment and discover how precision billing for cataract, retinal, and glaucoma procedures can significantly improve your collections and reduce denials."
        ctaLabel="Schedule Revenue Assessment"
        formId="ophthoAssessmentForm"
        checklist={[
          "Coding audit: cataract, retinal, and glaucoma CPT accuracy",
          "Bilateral modifier review — -50, -LT, -RT compliance",
          "Prior auth gap analysis for intravitreal injections",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For ophthalmology practices & ASCs · Injection & surgical billing specialists · 50 states served"
      />

    </main>
  );
}
