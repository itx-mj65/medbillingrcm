import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function WoundCareBillingPage() {
  return (
    <main className="sp-page wound-page" id="main">

      <SpecialtyHero
        eyebrow="Wound Care Revenue Infrastructure"
        heading="Wound Care Billing Services"
        intro="Medbilling RCM provides specialized wound care billing services covering selective and surgical debridement coding (CPT 97597–97602, 11042–11047), negative pressure wound therapy billing, skin substitute application claims, wound supply HCPCS coding, and LCD compliance — ensuring accurate claims and maximum reimbursements for wound care practices and clinics."
        badge="AAPC Certified · Debridement Specialists · LCD Compliant · 50 States"
        stats={[
          { num: "97%",  label: "Clean Claim Rate" },
          { num: "30%",  label: "Reduction in A/R Days" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ WOUND HEALING JOURNEY ═══════════════════════════
          UNIQUE DESIGN: A horizontal "healing timeline" showing
          the wound treatment billing progression with animated
          scan effect — simulating tissue healing stages in a
          billing context. Completely unique visual metaphor.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="services">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Wound Treatment Billing Coverage</p>
          <h2 className="reveal">Every Stage of Wound Care — Billed Precisely</h2>
          <p className="wound-journey-sub reveal">Wound care billing evolves with the wound itself — from initial assessment and debridement through advanced therapies and closure. Each stage has distinct CPT codes, documentation requirements, and payer rules.</p>

          <div className="wound-healing-timeline">
            {[
              {
                stage: "01", phase: "Assessment & Diagnosis",
                icon: "🔍", color: "blue",
                codes: ["99202–99215 E/M visit", "ICD-10: L89.x (pressure ulcer)", "ICD-10: E11.621 (DM foot ulcer)", "ICD-10: L97.x (chronic ulcer)"],
                note: "Wound type, size, and depth documented at every visit"
              },
              {
                stage: "02", phase: "Selective Debridement",
                icon: "🔬", color: "green",
                codes: ["CPT 97597 — 1st 20 sq cm", "CPT 97598 — each add'l 20 sq cm", "NOT billed with 11042–11047", "Dressings included — not billed separately"],
                note: "Area-based coding — wound measurement drives code selection"
              },
              {
                stage: "03", phase: "Surgical Debridement",
                icon: "🏥", color: "navy",
                codes: ["CPT 11042 — subcutaneous tissue", "CPT 11043 — muscle / fascia", "CPT 11044 — bone", "Add-ons: +11045, +11046, +11047"],
                note: "Depth-based coding — debrided tissue depth determines code"
              },
              {
                stage: "04", phase: "Advanced Therapies",
                icon: "⚡", color: "green",
                codes: ["CPT 97605 — NPWT ≤50 sq cm", "CPT 97606 — NPWT >50 sq cm", "Q4100 series — skin substitutes", "CPT 15271–15278 — graft application"],
                note: "Prior auth required for NPWT and skin substitutes"
              },
              {
                stage: "05", phase: "Wound Supplies",
                icon: "📦", color: "gold",
                codes: ["HCPCS A4450–A4456 — dressings", "HCPCS A6000–A6550 — wound covers", "A1–A9 modifiers (number of wounds)", "Not billable when bundled in procedure"],
                note: "Separate supply billing only when not bundled into CPT"
              },
              {
                stage: "06", phase: "Closure & Grafting",
                icon: "🩹", color: "blue",
                codes: ["CPT 15002–15003 — excision prep", "CPT 15100–15101 — split graft", "CPT 15200–15201 — full thickness", "CPT 15240–15261 — free grafts"],
                note: "Global periods 10–90 days — post-op visits tracked"
              },
            ].map(({ stage, phase, icon, color, codes, note }) => (
              <div className={`wound-stage wound-stage--${color} reveal`} key={stage}>
                <div className="wound-stage-num">{stage}</div>
                <div className="wound-stage-body">
                  <div className="wound-stage-icon" aria-hidden="true">{icon}</div>
                  <h3>{phase}</h3>
                  <ul className="wound-stage-codes">
                    {codes.map(c => <li key={c}>{c}</li>)}
                  </ul>
                  <div className="wound-stage-note">{note}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="wound-journey-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
            <span className="wound-journey-note">Not sure which stage your denials target? We audit the full wound care billing cycle.</span>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES — 6 navy challenge cards ═══════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Wound Care Billing Challenges</p>
          <h2 className="reveal">Complex Wound Care Billing — Expertly Handled</h2>
          <p className="wound-caps-sub reveal">Wound care has complex depth-vs-area coding distinctions, bundling rules between selective and surgical debridement, skin substitute prior authorization, and LCD compliance requirements — all frequently audited by Medicare.</p>

          <div className="wound-caps-grid">
            {[
              { icon:"📐", n:"01", h:"Depth vs. Area Debridement Code Selection",   t:"The most critical wound care coding decision: selective debridement (97597/97598) is area-based and billed per 20 sq cm; surgical debridement (11042–11047) is depth-based and selected by the tissue layer debrided. The two code families cannot be billed together for the same wound on the same date. We review every procedure note to apply the correct series based on documented tissue depth — preventing the most audited wound care error." },
              { icon:"🚫", n:"02", h:"Bundling Compliance — 97602 & 11042 Series",  t:"CPT 97602 (non-selective debridement) must not be reported with CPT 97597 or 97598 for the same wound on the same date. Codes 97597, 97598, and 97602 must not be reported with codes 11042–11047 for the same wound. Dressings applied as part of these services are included and cannot be billed separately. We apply these bundling rules on every wound care claim to prevent denials and audit recoupment." },
              { icon:"⚡", n:"03", h:"NPWT Size-Based Code Selection",             t:"Negative pressure wound therapy uses CPT 97605 for wound areas ≤50 sq cm and CPT 97606 for wound areas >50 sq cm. Code selection depends entirely on wound size measured at time of application. Documentation must include wound measurements, device type, application duration, and clinical justification. Missing or incorrect wound measurements generate immediate NPWT denials." },
              { icon:"🧬", n:"04", h:"Skin Substitute & Bioengineered Tissue Billing", t:"Skin substitute products are billed using Q codes (Q4100 series) for the product plus CPT 15271–15278 for the application procedure. Many require prior authorization and detailed medical necessity documentation including wound type, size, duration of wound, and failed conventional treatment records. We manage the full authorization cycle and ensure correct Q-code selection for each product used." },
              { icon:"📋", n:"05", h:"LCD Compliance & ICD-10 Specificity",        t:"Medicare LCDs specify exact ICD-10 diagnosis codes that qualify for wound care coverage. Pressure ulcer coding (L89.x) requires stage specificity; diabetic ulcer coding (E11.621, E11.622) requires diabetes type and ulcer severity. We verify ICD-10 specificity and LCD compliance on every wound care claim — preventing denials from diagnosis-procedure mismatches." },
              { icon:"📏", n:"06", h:"Wound Measurement Documentation",            t:"Wound size measurement at every visit is required for area-based debridement (97597/97598), NPWT code selection (97605 vs 97606), skin substitute documentation, and LCD compliance. Missing measurements generate denials or downcoding. We work with wound care clinicians to establish consistent measurement documentation workflows that support every billable service." },
            ].map(({ icon, n, h, t }) => (
              <article className="wound-cap-card reveal" key={n}>
                <div className="wound-cap-top">
                  <div className="wound-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="wound-cap-num">{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ══════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal" id="process">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Revenue Control Framework</p>
          <h2 className="reveal">How We Engineer Your Wound Care Revenue System</h2>
          <p className="wound-process-intro reveal">End-to-end wound care billing infrastructure from initial assessment coding through advanced therapy claims — built for the depth, area, and bundling complexity of modern wound care billing.</p>

          <div className="wound-steps">
            {[
              { n:"01", h:"LCD Verification & ICD-10 Specificity",  t:"Verify wound type diagnosis against MAC LCD requirements, confirm ICD-10 code specificity (stage, severity, diabetes type), and flag any claims requiring medical necessity documentation" },
              { n:"02", h:"Debridement Code Selection",             t:"Review procedure notes for tissue depth debrided — selecting area-based (97597/97598) or depth-based (11042–11047) series and verifying no same-wound same-date bundling violations" },
              { n:"03", h:"Advanced Therapy Authorization",          t:"Submit prior authorization requests for NPWT, skin substitutes (Q4100 series), and bioengineered tissue products with wound documentation packages" },
              { n:"04", h:"Supply & HCPCS Coding",                  t:"Bill wound supply HCPCS codes (A4450–A4456, A6000–A6550) only when not bundled into a procedure code — with correct A1–A9 wound count modifiers" },
              { n:"05", h:"Clean Claim Submission",                 t:"Wound measurements, debridement depth, NPWT device documentation, and skin substitute records verified before every claim submission" },
              { n:"06", h:"Denial Management & LCD Appeals",        t:"Root-cause wound care denial analysis, LCD appeals with clinical wound documentation, and audit defense for high-frequency debridement claims" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="wound-step reveal" key={n}>
                <div className="wound-step-aside">
                  <div className="wound-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="wound-step-conn" />}
                </div>
                <div className="wound-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>

          <div className="wound-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="wound-process-note">For wound care clinics &amp; wound centers · AAPC-certified coders · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="wound-ba-grid">
            {[
              { label:"Clean Claim Rate",         num:"97",  unit:"%",   green:true,  desc:"first-pass acceptance" },
              { label:"Debridement Code Accuracy", num:"100", unit:"%",   green:false, desc:"depth vs. area correct on every claim" },
              { label:"A/R Days Reduction",        num:"30",  unit:"%↓",  green:true,  desc:"accounts receivable days" },
              { label:"LCD Denial Rate",           num:"<2",  unit:"%",   green:false, desc:"LCD-compliant claims submitted" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`wound-ba-card${green ? " wound-ba-card--green" : ""} reveal`} key={label}>
                <div className="wound-ba-label">{label}</div>
                <div className="wound-ba-num">{num}<span>{unit}</span></div>
                <div className="wound-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Wound Care Revenue Infrastructure Partner</h2>
          <p className="wound-why-intro reveal">Our wound care billing team understands depth-based vs. area-based debridement coding, NPWT size documentation, skin substitute Q-codes, and the LCD compliance rules that determine payment for every wound care encounter.</p>
          <div className="wound-why-grid">
            {[
              { icon:"📐", n:"01", h:"Depth vs. Area Coding Experts",       t:"Correct selection between 97597/97598 (area) and 11042–11047 (depth) on every claim — the most audited decision in wound care billing." },
              { icon:"🚫", n:"02", h:"Bundling Rule Compliance",            t:"97602 bundling with 97597/97598 and 97597–97602 bundling with 11042–11047 prevented on every same-wound same-date claim." },
              { icon:"⚡", n:"03", h:"NPWT Size-Based Billing",             t:"Correct CPT 97605/97606 selection based on wound measurements at time of application — with complete documentation verification." },
              { icon:"🧬", n:"04", h:"Skin Substitute Authorization",       t:"Q4100-series Q-code selection, prior authorization management, and failed-conventional-treatment documentation for all bioengineered tissue claims." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Wound Care Coders",    t:"Every specialist holds AAPC certification with dedicated wound care training and current LCD knowledge for all MAC jurisdictions." },
              { icon:"📋", n:"06", h:"LCD & ICD-10 Compliance",            t:"Pressure ulcer stage specificity, diabetic ulcer type/severity, and LCD diagnosis-procedure matching verified on every claim." },
              { icon:"📏", n:"07", h:"Wound Measurement Documentation",    t:"Documentation workflow support ensuring wound measurements, depth, and treatment response are captured to support every billable service." },
              { icon:"🔍", n:"08", h:"Transparent Wound Care Reporting",   t:"Procedure-level revenue reports, debridement frequency analytics, skin substitute billing performance, and denial trend analysis." },
            ].map(({ icon, n, h, t }) => (
              <div className="wound-why-card reveal" key={n}>
                <div className="wound-why-top">
                  <div className="wound-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="wound-why-num">{n}</span>
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
          <div className="wound-faq-layout">
            <div className="wound-faq-intro reveal">
              <p>Direct answers about debridement coding, NPWT billing, skin substitute claims, wound supply HCPCS, and LCD compliance. <Link href="/specialties/" className="wound-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="wound-faq-list">
              {[
                ["What is the difference between CPT 97597 and CPT 11042 for wound debridement?",
                 "CPT 97597 (selective debridement) is area-based — billed per 20 sq cm of wound surface treated, removing necrotic tissue above subcutaneous depth using instruments such as forceps, scalpels, or curettes. CPT 11042 (surgical debridement) is depth-based — billed when tissue is removed down to the subcutaneous layer or deeper. The wound depth debrided determines the appropriate code, not the wound grade or extent. We review documentation before every coding decision to ensure correct code selection and prevent audit exposure from depth/area code mismatches."],
                ["Can wound dressings be billed separately from debridement codes?",
                 "Wound dressings applied as part of debridement services under CPT 97597, 97598, and 97602 are included in those codes and cannot be billed separately. Dressing supplies billed separately use HCPCS Level II codes (A4450–A4456 range for specific wound dressing materials) when they are not bundled into a procedure code. CPT 97602 must not be reported in addition to CPT 97597 or 97598 for the same wound on the same date of service. We verify bundling rules on every wound care claim submission."],
                ["How do you bill for Negative Pressure Wound Therapy (NPWT)?",
                 "NPWT is billed using CPT 97605 for wound areas ≤50 sq cm and CPT 97606 for wound areas >50 sq cm. Code selection depends entirely on wound size measured at the time of application. Documentation must include wound measurements (length × width), NPWT device type, application duration, and clinical justification for ongoing therapy. We ensure correct size-based code selection on every NPWT claim and verify documentation completeness before submission."],
                ["How do you handle skin substitute (bioengineered tissue) billing?",
                 "Skin substitute application is billed using Q codes (Q4100 series) for the product and CPT 15271–15278 for the application procedure. Many skin substitutes require prior authorization and detailed medical necessity documentation including wound type, size, duration, and failed conventional treatment records. We manage the complete skin substitute billing cycle including prior authorization, Q-code selection, application CPT coding, and payer-specific coverage verification."],
                ["What LCD compliance requirements apply to wound care billing?",
                 "Local Coverage Determinations (LCDs) from Medicare Administrative Contractors specify which ICD-10 diagnosis codes qualify for coverage of debridement, NPWT, and skin substitutes in each jurisdiction. Wound care LCDs require documentation of wound type, measurement at each visit, wound progression or active treatment plan, and medical necessity for the frequency of services. We verify LCD compliance on every wound care claim and ensure documentation meets MAC-specific requirements before submission."],
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

      <CtaSection
        eyebrow="Revenue Assessment"
        heading="Maximize Your Wound Care Practice Revenue"
        body="Schedule a free wound care billing assessment and discover how accurate debridement coding, NPWT documentation, and LCD compliance can significantly improve your practice collections."
        ctaLabel="Schedule Revenue Assessment"
        formId="woundAssessmentForm"
        checklist={[
          "Debridement code accuracy audit — depth vs. area series",
          "NPWT billing review — 97605/97606 documentation compliance",
          "Skin substitute Q-code and prior auth gap analysis",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For wound care clinics & wound centers · AAPC-certified coders · All 50 states served"
      />
    </main>
  );
}
