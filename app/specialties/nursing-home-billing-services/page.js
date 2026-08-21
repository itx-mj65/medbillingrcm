import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function NursingHomeBillingPage() {
  return (
    <main className="sp-page snf-page" id="main">

      <SpecialtyHero
        eyebrow="SNF Revenue Infrastructure"
        heading="Nursing Home Billing Services"
        intro="Medbilling RCM provides specialized nursing home and skilled nursing facility billing services covering PDPM classification, Medicare Part A and Part B billing, MDS accuracy review, Medicaid state-specific billing, consolidated billing compliance, and Triple Check process support — ensuring accurate claims and maximum reimbursements for SNFs and long-term care facilities."
        badge="PDPM Specialists · Medicare Part A & B · MDS Accuracy · 50 States"
        stats={[
          { num: "97%",   label: "Clean Claim Rate" },
          { num: "15.1%", label: "Industry Improper Pay Rate (we prevent it)" },
          { num: "90%",   label: "Collection Rate" },
          { num: "50",    label: "States Served" },
        ]}
      />

      {/* ═══ PDPM COMPONENT DASHBOARD ════════════════════════
          UNIQUE DESIGN: An interactive-looking PDPM component
          dashboard — shows the 5 PDPM case-mix components as
          meter cards with animated fill bars. Unique to any
          specialty page — simulates the actual PDPM calculation.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="pdpm">
        <div className="sp-wrap">
          <p className="sp-ew reveal">PDPM Payment Components</p>
          <h2 className="reveal">We Optimize All 5 PDPM Case-Mix Components</h2>
          <p className="snf-pdpm-sub reveal">Under the Patient-Driven Payment Model, your Medicare Part A per-diem rate is the sum of five independently calculated case-mix components — each derived from MDS assessment data. Errors in any component affect the daily rate for the entire stay.</p>

          <div className="snf-pdpm-grid">
            {[
              { abbr:"PT",  label:"Physical Therapy",          pct:82, color:"blue",  note:"PT case-mix group derived from MDS Section GG functional scores and primary diagnosis" },
              { abbr:"OT",  label:"Occupational Therapy",      pct:78, color:"green", note:"OT component calculated from ADL function scores — often miscoded reducing daily rate" },
              { abbr:"SLP", label:"Speech-Language Pathology", pct:71, color:"gold",  note:"SLP classification driven by cognitive status, swallowing disorders, and respiratory failure" },
              { abbr:"NRS", label:"Nursing",                   pct:90, color:"navy",  note:"Nursing component — highest weight in PDPM — derived from extensive conditions list in MDS" },
              { abbr:"NTA", label:"Non-Therapy Ancillaries",   pct:85, color:"green", note:"NTA captures high-cost medications, IV therapy, tracheostomy, ventilator, and complex medical needs" },
            ].map(({ abbr, label, pct, color, note }) => (
              <div className={`snf-pdpm-card snf-pdpm-card--${color} reveal`} key={abbr}>
                <div className="snf-pdpm-top">
                  <div className="snf-pdpm-abbr">{abbr}</div>
                  <div className="snf-pdpm-pct">{pct}%</div>
                </div>
                <div className="snf-pdpm-label">{label}</div>
                <div className="snf-pdpm-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                  <div className="snf-pdpm-fill" style={{ "--fill-pct": `${pct}%` }} />
                </div>
                <p className="snf-pdpm-note">{note}</p>
              </div>
            ))}
          </div>

          <div className="snf-pdpm-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Request MDS & PDPM Audit</Link>
            <span className="snf-pdpm-note-cta">MDS inaccuracies in any component reduce your per-diem for the entire resident stay — every day.</span>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">SNF Billing Challenges</p>
          <h2 className="reveal">Complex Nursing Home Billing — Expertly Handled</h2>
          <p className="snf-caps-sub reveal">SNF billing has a 15.1% improper payment rate (CMS 2022 data) — among the highest in healthcare. Most errors originate from MDS inaccuracies, PDPM miscalculation, consolidated billing violations, and Part A/B coverage misclassification.</p>

          <div className="snf-caps-grid">
            {[
              { icon:"📊", n:"01", h:"PDPM Classification & MDS Accuracy",       t:"MDS accuracy is the most consequential billing variable in SNF billing. An incorrect MDS item can reduce all five PDPM payment components for the entire stay. We review MDS data, verify ICD-10 coding, and conduct pre-submission accuracy checks before every RAI submission — preventing systematic daily rate reductions from documentation errors." },
              { icon:"🏥", n:"02", h:"Medicare Part A vs. Part B Classification", t:"Medicare Part A covers the SNF stay for qualified beneficiaries; Medicare Part B covers outpatient skilled services for residents not in a covered Part A stay. Misclassifying services between tracks generates denials and compliance risk. We manage both billing tracks simultaneously, ensuring correct classification at every point in the resident's care continuum." },
              { icon:"📋", n:"03", h:"Consolidated Billing Compliance",           t:"Under consolidated billing, most services provided during a Part A SNF stay must be billed by the SNF — not by outside providers. Violations occur when therapy companies, labs, or DME suppliers bill Medicare directly for bundled services. We manage consolidated billing compliance, identify separately billable Part B services, and prevent billing conflicts that trigger OIG audit risk." },
              { icon:"🔄", n:"04", h:"Triple Check Pre-Billing Quality Review",   t:"The Triple Check process verifies MDS data, therapy documentation, and billing data are consistent before submitting Medicare Part A claims. It prevents PDPM miscalculations from MDS inaccuracies and inconsistencies between therapy minutes and billing. We implement Triple Check protocols on every Part A claim cycle, preventing the most costly SNF billing errors before claims are submitted." },
              { icon:"🗺️", n:"05", h:"State-Specific Medicaid Billing",          t:"Medicaid nursing home billing varies significantly by state — each state sets its own rate methodology, eligibility criteria, case-mix systems, and billing cycles. We maintain current knowledge of state-specific requirements and manage coverage transitions for residents moving from Medicare Part A to Medicaid, preventing revenue gaps during payer changes." },
              { icon:"⏰", n:"06", h:"Timely Filing & AR Management",             t:"Medicare Part A claims have a 12-month timely filing deadline from the date of service. Missing this deadline results in permanent revenue loss with no appeal remedy. We manage SNF AR on a structured weekly cycle with documented action plans for every account over 60 days — preventing the quiet revenue erosion from aging uncollected SNF claims." },
            ].map(({ icon, n, h, t }) => (
              <article className="snf-cap-card reveal" key={n}>
                <div className="snf-cap-top">
                  <div className="snf-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="snf-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your SNF Revenue System</h2>
          <p className="snf-process-intro reveal">End-to-end SNF billing infrastructure from admission PDPM classification through Medicaid coverage transition — built for the regulatory complexity of skilled nursing facility reimbursement.</p>

          <div className="snf-steps">
            {[
              { n:"01", h:"Admission PDPM Classification Review",   t:"Review ICD-10 primary diagnosis and MDS data at admission to optimize PDPM classification across all five case-mix components before the first Part A claim" },
              { n:"02", h:"MDS Accuracy & RAI Compliance",          t:"Pre-submission MDS review — verify Section GG scores, cognitive assessments, and condition documentation drive accurate PDPM component rates" },
              { n:"03", h:"Triple Check Pre-Billing Process",       t:"Three-point verification: therapy documentation vs. billing, MDS coding vs. clinical records, and billing data reconciliation before every Part A submission" },
              { n:"04", h:"Consolidated Billing Management",        t:"Identify all separately billable Part B services, manage outside provider billing conflicts, and ensure consolidated billing compliance throughout the stay" },
              { n:"05", h:"Part A to Part B / Medicaid Transition", t:"Manage coverage transitions — Part A exhaustion, swing beds, Medicaid crossover — ensuring no billing gaps during payer changes" },
              { n:"06", h:"AR Recovery & Timely Filing Protection", t:"Weekly AR aging review, documented follow-up plans, and proactive monitoring of all claims approaching the 12-month Part A timely filing deadline" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="snf-step reveal" key={n}>
                <div className="snf-step-aside">
                  <div className="snf-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="snf-step-conn" />}
                </div>
                <div className="snf-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>

          <div className="snf-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="snf-process-note">For SNFs &amp; nursing homes · PDPM specialists · Medicare, Medicaid &amp; managed care · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="snf-ba-grid">
            {[
              { label:"Clean Claim Rate",        num:"97",   unit:"%",   green:true,  desc:"vs 85% industry average for SNFs" },
              { label:"Improper Payment Exposure",num:"<2",   unit:"%",   green:false, desc:"vs 15.1% CMS-reported industry rate" },
              { label:"PDPM Optimization",        num:"100",  unit:"%",   green:true,  desc:"of 5 components reviewed per resident" },
              { label:"Timely Filing Denials",    num:"$0",   unit:"",    green:false, desc:"12-month deadline never missed" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`snf-ba-card${green ? " snf-ba-card--green" : ""} reveal`} key={label}>
                <div className="snf-ba-label">{label}</div>
                <div className="snf-ba-num">{num}<span>{unit}</span></div>
                <div className="snf-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your SNF Revenue Infrastructure Partner</h2>
          <p className="snf-why-intro reveal">Our SNF billing team understands PDPM case-mix components, MDS accuracy requirements, Triple Check protocols, consolidated billing rules, and the state-specific Medicaid billing complexity that determines financial performance for long-term care facilities.</p>
          <div className="snf-why-grid">
            {[
              { icon:"📊", n:"01", h:"PDPM Case-Mix Optimization",             t:"All five PDPM components reviewed for every resident at admission and reassessment — ensuring maximum per-diem rates throughout the stay." },
              { icon:"📋", n:"02", h:"MDS Accuracy & RAI Compliance",          t:"Pre-submission MDS review catches coding errors that systematically reduce payment components for the full duration of the resident's Medicare stay." },
              { icon:"✅", n:"03", h:"Triple Check Protocol Implementation",   t:"Three-point verification — therapy, MDS, and billing — on every Part A claim cycle prevents the most costly SNF billing errors before submission." },
              { icon:"🏥", n:"04", h:"Part A / Part B Billing Experts",        t:"Simultaneous management of both billing tracks with correct service classification at every point in the care continuum." },
              { icon:"📦", n:"05", h:"Consolidated Billing Compliance",        t:"Full consolidated billing management — identifying separately billable Part B services and preventing outside-provider billing conflicts." },
              { icon:"🗺️", n:"06", h:"State Medicaid Expertise — All 50 States", t:"Current Medicaid rate methodology, billing cycle, and eligibility rules for every state where your residents receive coverage." },
              { icon:"⏰", n:"07", h:"Timely Filing & AR Protection",          t:"Weekly AR review with documented action plans — zero Medicare Part A timely filing deadline misses. 12-month clock tracked for every claim." },
              { icon:"🔍", n:"08", h:"SNF-Specific Financial Reporting",       t:"Per-resident revenue tracking, PDPM component performance reports, payer mix analysis, and census-to-revenue reconciliation." },
            ].map(({ icon, n, h, t }) => (
              <div className="snf-why-card reveal" key={n}>
                <div className="snf-why-top">
                  <div className="snf-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="snf-why-num">{n}</span>
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
          <div className="snf-faq-layout">
            <div className="snf-faq-intro reveal">
              <p>Direct answers about PDPM, MDS accuracy, consolidated billing, Medicare Part A/B, Medicaid billing, and the Triple Check process. <Link href="/specialties/" className="snf-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="snf-faq-list">
              {[
                ["How does PDPM affect SNF Medicare Part A reimbursement?",
                 "Under the Patient-Driven Payment Model (PDPM), Medicare Part A per-diem rates are determined by clinical complexity across five case-mix components: Physical Therapy, Occupational Therapy, Speech-Language Pathology, Nursing, and Non-Therapy Ancillaries. Each component rate is derived from MDS assessment data. MDS accuracy is the most consequential billing variable — an incorrect MDS item can systematically reduce all five payment components throughout the patient's stay. We review MDS data and ICD-10 coding before every RAI submission."],
                ["What is SNF consolidated billing and what services does it affect?",
                 "Under consolidated billing, Medicare requires that most services provided to beneficiaries during a covered Part A SNF stay be billed by the SNF in a single consolidated claim — not by the individual therapy, ancillary, or professional service provider. This means most outside providers (therapy companies, labs, DME suppliers) must look to the SNF for payment. Services that CAN be separately billed to Part B include certain physician services, specific lab tests, and ambulance transportation. We manage consolidated billing compliance and identify which services are separately billable from Part B."],
                ["How do you handle Medicare Part A vs. Part B billing for SNF residents?",
                 "Medicare Part A covers the first 100 days of a qualifying SNF stay (100% for days 1–20, coinsurance for days 21–100) following a three-day inpatient hospital stay. Medicare Part B covers outpatient skilled services for residents not in a covered Part A stay. The two programs have different claim formats, documentation requirements, and fee schedule rates. We manage both billing tracks simultaneously, ensuring correct classification of services under Part A or Part B at every point in the resident's stay."],
                ["How do you manage Medicaid billing for nursing home residents?",
                 "Medicaid nursing home billing varies significantly by state — each state sets its own rate methodology, eligibility criteria, and billing requirements. We maintain current knowledge of state-specific Medicaid rate structures, billing cycles, and documentation requirements. For residents transitioning from Medicare Part A to Medicaid coverage, we manage the billing crossover, ensure correct payer sequencing, and prevent revenue gaps during coverage transitions."],
                ["What is the Triple Check process and why is it important?",
                 "The Triple Check process is a pre-billing quality review that verifies MDS data, therapy documentation, and billing data are all consistent and accurate before submitting Medicare Part A claims. It involves three separate review points: therapy verification against clinical documentation, MDS coding accuracy review, and billing data reconciliation. The Triple Check prevents the most common and costly SNF billing errors — PDPM miscalculations from MDS inaccuracies and inconsistencies between therapy minutes and billing data. We implement Triple Check protocols on every Medicare Part A claim cycle."],
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
        heading="Maximize Your Nursing Home Revenue Cycle"
        body="Schedule a free SNF billing assessment and discover how PDPM optimization, MDS accuracy review, and Triple Check implementation can recover missed revenue and prevent improper payment exposure."
        ctaLabel="Schedule Revenue Assessment"
        formId="snfAssessmentForm"
        checklist={[
          "PDPM case-mix component audit — all 5 components reviewed",
          "MDS accuracy review — ICD-10 coding and Section GG verification",
          "Consolidated billing compliance check",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For SNFs & nursing homes · PDPM specialists · Medicare, Medicaid & managed care · All 50 states"
      />
    </main>
  );
}
