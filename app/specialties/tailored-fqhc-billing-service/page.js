import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function FQHCBillingPage() {
  return (
    <main className="sp-page fqhc-page" id="main">

      <SpecialtyHero
        eyebrow="FQHC Revenue Infrastructure"
        heading="Tailored FQHC Billing Services"
        intro="Medbilling RCM provides tailored FQHC billing services covering Medicare and Medicaid FQHC Prospective Payment System (PPS) encounter billing, sliding fee scale compliance documentation, UDS reporting support, HRSA grant billing, same-day visit billing, behavioral health add-on billing, and encounter-based revenue optimization — ensuring accurate claims and maximum reimbursements for federally qualified health centers and FQHC look-alikes."
        badge="FQHC PPS Specialists · Sliding Fee Compliant · UDS Support · 50 States"
        stats={[
          { num: "97%",  label: "Clean Claim Rate" },
          { num: "30%",  label: "Reduction in A/R Days" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ FQHC PPS ENCOUNTER ARCHITECTURE ════════════════
          UNIQUE DESIGN: A visual showing the FQHC encounter
          definition and PPS billing structure — Medicare vs
          Medicaid rates, encounter types, and add-on billing.
          Community health beam sweeps across cards like a
          lighthouse illuminating underserved communities.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="pps">
        <div className="sp-wrap">
          <p className="sp-ew reveal">FQHC PPS Billing Architecture</p>
          <h2 className="reveal">FQHC Prospective Payment — Encounter-Based Revenue Optimized</h2>
          <p className="fqhc-pps-sub reveal">FQHC billing is fundamentally different from standard fee-for-service. Revenue is driven by encounter count and correct encounter definition — not individual service CPT codes. Every qualifying encounter must be captured; every missed encounter is direct revenue loss.</p>

          <div className="fqhc-pps-grid">
            {[
              { type:"Medicare FQHC Encounter",   icon:"🏛️", color:"blue",
                rate:"All-Inclusive Rate (AIR)",
                codes:["Revenue code 0521 (medical)", "Revenue code 0522 (mental health)", "Qualifying CPT codes required", "G0466–G0470 encounter codes"],
                rule:"One AIR per qualifying encounter. Mental health add-on eligible same-day."
              },
              { type:"Medicaid FQHC Encounter",  icon:"🗺️", color:"green",
                rate:"State-Specific PPS Rate",
                codes:["Rate set by each state MAC", "Encounter visit codes required", "Cost settlement annually", "Wrap-around payments apply"],
                rule:"State PPS rate wraps around any Medicaid managed care payment."
              },
              { type:"Same-Day Add-On Encounter", icon:"➕", color:"gold",
                rate:"Second AIR (qualifying)",
                codes:["G0469 (new patient mental health)", "G0470 (established patient MH)", "Separate MH practitioner required", "Separate documentation required"],
                rule:"Medical + behavioral health same-day = two billable encounters."
              },
              { type:"Sliding Fee Scale Patients", icon:"📊", color:"navy",
                rate:"Payer pays full AIR",
                codes:["FPL determination documented", "≤100% FPL = no charge to patient", "101-200% FPL = sliding fee", "Full AIR billed to Medicare/Medicaid"],
                rule:"Sliding fee reduces patient share — payer reimbursement is unchanged."
              },
            ].map(({ type, icon, color, rate, codes, rule }) => (
              <div className={`fqhc-pps-card fqhc-pps-card--${color} reveal`} key={type}>
                <div className="fqhc-pps-header">
                  <span className="fqhc-pps-icon" aria-hidden="true">{icon}</span>
                  <div>
                    <h3>{type}</h3>
                    <span className="fqhc-pps-rate">{rate}</span>
                  </div>
                </div>
                <ul className="fqhc-pps-codes">
                  {codes.map(c => <li key={c}>{c}</li>)}
                </ul>
                <div className="fqhc-pps-rule">{rule}</div>
              </div>
            ))}
          </div>

          <div className="fqhc-hrsa-callout reveal">
            <div className="fqhc-hrsa-badge">HRSA Compliance</div>
            <div className="fqhc-hrsa-body">
              <p>FQHC billing must satisfy both CMS reimbursement requirements and HRSA program compliance — sliding fee documentation, scope of project services, and UDS reporting alignment. We manage both simultaneously so your billing supports your grant compliance.</p>
              <div className="fqhc-hrsa-tags">
                <span>Sliding Fee Schedule</span>
                <span>Scope of Project</span>
                <span>UDS Alignment</span>
                <span>Cost Report</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">FQHC Billing Challenges</p>
          <h2 className="reveal">Complex FQHC Billing — Expertly Handled</h2>
          <p className="fqhc-caps-sub reveal">FQHC billing operates under a unique regulatory intersection of CMS reimbursement rules and HRSA program requirements — encounter definition, sliding fee compliance, same-day add-on billing, and UDS alignment all require specialty expertise.</p>

          <div className="fqhc-caps-grid">
            {[
              { icon:"🏛️", n:"01", h:"FQHC Encounter Definition & Qualification",    t:"A qualifying FQHC encounter requires a face-to-face visit with a qualifying professional and medically necessary documented service. Not every clinical contact qualifies. Missing encounter documentation — or billing non-qualifying visits — generates claim denials and HRSA compliance risk. We verify encounter qualification on every visit before billing." },
              { icon:"💰", n:"02", h:"PPS Rate Optimization — Medicare & Medicaid",   t:"Medicare FQHC PPS rates are geographically adjusted All-Inclusive Rates updated annually. Medicaid FQHC PPS rates vary by state with annual cost settlement. Understanding your FQHC PPS rate structure — and ensuring every qualifying encounter is billed and paid at the correct rate — is the foundation of FQHC revenue optimization." },
              { icon:"➕", n:"03", h:"Same-Day Mental Health Add-On Billing",         t:"When a patient receives both a medical and behavioral health service on the same day from separate qualifying practitioners, two encounters may be billed — the primary medical encounter plus a behavioral health add-on (G0469/G0470). Most FQHCs under-capture same-day add-on encounters. We identify every qualifying same-day add-on opportunity across your patient population." },
              { icon:"📊", n:"04", h:"Sliding Fee Scale Documentation & Compliance",  t:"HRSA requires FQHCs to maintain sliding fee schedules based on Federal Poverty Level (FPL) and apply fee adjustments to all eligible patients. Sliding fee documentation must be accurate, current, and auditable. Patient fee adjustments must be documented separately from payer reimbursement. We maintain sliding fee compliance documentation that satisfies both HRSA and payer audit requirements." },
              { icon:"📋", n:"05", h:"UDS Reporting Data Alignment",                  t:"UDS reports require encounter counts, patient demographics, and financial data that must align with billing records. Discrepancies between billing data and clinical documentation create UDS reporting errors and HRSA compliance flags. We structure billing data to support accurate UDS extraction and provide encounter reconciliation reports for your annual UDS submission." },
              { icon:"🌐", n:"06", h:"Multi-Payer FQHC Billing — Medicare, Medicaid, Commercial", t:"FQHCs bill Medicare, Medicaid, commercial insurers, CHIP, and uninsured patients under different rules. Commercial payers do not use PPS rates. CHIP rules vary by state. Uninsured patients use the sliding fee schedule without a payer claim. We manage all payer types simultaneously with FQHC-specific billing rules for each." },
            ].map(({ icon, n, h, t }) => (
              <article className="fqhc-cap-card reveal" key={n}>
                <div className="fqhc-cap-top">
                  <div className="fqhc-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="fqhc-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your FQHC Revenue System</h2>
          <p className="fqhc-process-intro reveal">End-to-end FQHC billing infrastructure from encounter qualification through PPS rate reconciliation and UDS data alignment — tailored to the unique regulatory requirements of federally qualified health centers.</p>
          <div className="fqhc-steps">
            {[
              { n:"01", h:"Encounter Qualification Review",             t:"Verify qualifying practitioner, medical necessity documentation, and encounter definition requirements before billing every patient visit" },
              { n:"02", h:"Same-Day Add-On Encounter Identification",   t:"Flag every patient visit with both medical and behavioral health services from separate qualifying practitioners — bill G0469/G0470 add-on encounter" },
              { n:"03", h:"Sliding Fee Documentation & FPL Verification",t:"Verify current income documentation for all sliding fee patients, apply correct FPL-based fee adjustment, maintain audit-ready fee schedule records" },
              { n:"04", h:"PPS Claim Submission — Medicare & Medicaid",  t:"FQHC revenue codes (0521/0522) with correct encounter codes — Medicare AIR billing and state-specific Medicaid PPS submission" },
              { n:"05", h:"Commercial & CHIP Payer Billing",             t:"Fee-for-service billing to commercial payers and CHIP programs — standard CPT/ICD-10 billing with FQHC provider enrollment" },
              { n:"06", h:"UDS Alignment & Cost Report Support",         t:"Encounter count reconciliation, financial data extraction for UDS, and Medicaid cost settlement documentation support" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="fqhc-step reveal" key={n}>
                <div className="fqhc-step-aside">
                  <div className="fqhc-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="fqhc-step-conn" />}
                </div>
                <div className="fqhc-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>
          <div className="fqhc-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="fqhc-process-note">For FQHCs &amp; FQHC look-alikes · PPS &amp; HRSA specialists · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="fqhc-ba-grid">
            {[
              { label:"Clean Claim Rate",           num:"97",  unit:"%",   green:true,  desc:"first-pass PPS encounter acceptance" },
              { label:"Same-Day Add-On Capture",    num:"100", unit:"%",   green:false, desc:"G0469/G0470 on every qualifying visit" },
              { label:"A/R Days Reduction",         num:"30",  unit:"%↓",  green:true,  desc:"accounts receivable days" },
              { label:"Sliding Fee Compliance",     num:"100", unit:"%",   green:false, desc:"FPL documentation audit-ready" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`fqhc-ba-card${green ? " fqhc-ba-card--green" : ""} reveal`} key={label}>
                <div className="fqhc-ba-label">{label}</div>
                <div className="fqhc-ba-num">{num}<span>{unit}</span></div>
                <div className="fqhc-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your FQHC Revenue Infrastructure Partner</h2>
          <p className="fqhc-why-intro reveal">Our FQHC billing team understands the PPS encounter definition, same-day add-on rules, sliding fee compliance requirements, UDS data alignment, and the multi-payer billing complexity that makes FQHC revenue cycle management uniquely challenging.</p>
          <div className="fqhc-why-grid">
            {[
              { icon:"🏛️", n:"01", h:"FQHC PPS Encounter Specialists",           t:"Encounter qualification verified on every visit — qualifying practitioner, medical necessity documentation, and encounter definition requirements all confirmed." },
              { icon:"➕", n:"02", h:"Same-Day Add-On Revenue Capture",           t:"G0469/G0470 mental health add-on identified and billed on every qualifying same-day medical + behavioral health encounter." },
              { icon:"📊", n:"03", h:"Sliding Fee Scale Compliance",              t:"FPL-based fee adjustment documentation maintained audit-ready — HRSA sliding fee schedule requirements satisfied for every eligible patient." },
              { icon:"📋", n:"04", h:"UDS Reporting Data Alignment",              t:"Billing data structured to support accurate UDS extraction — encounter counts, patient types, and financial data reconciled before annual submission." },
              { icon:"🌐", n:"05", h:"Multi-Payer FQHC Billing Management",       t:"Medicare AIR, Medicaid PPS wrap-around, commercial fee-for-service, CHIP, and sliding fee uninsured — all payer types managed simultaneously." },
              { icon:"🏅", n:"06", h:"AAPC-Certified FQHC Coders",              t:"Every specialist holds AAPC certification with dedicated FQHC billing training. CMS, HRSA, and state Medicaid agency guidelines applied on every claim." },
              { icon:"💰", n:"07", h:"PPS Rate Reconciliation",                   t:"Medicare AIR rates verified against CMS announcements; Medicaid PPS wrap-around payments reconciled against state fee schedules — no rate change missed." },
              { icon:"🔍", n:"08", h:"FQHC-Specific Financial Reporting",         t:"Encounter counts by payer and visit type, PPS rate reconciliation, sliding fee utilization, and same-day add-on capture rates — FQHC-specific dashboards." },
            ].map(({ icon, n, h, t }) => (
              <div className="fqhc-why-card reveal" key={n}>
                <div className="fqhc-why-top">
                  <div className="fqhc-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="fqhc-why-num">{n}</span>
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
          <div className="fqhc-faq-layout">
            <div className="fqhc-faq-intro reveal">
              <p>Direct answers about FQHC PPS billing, encounter qualification, sliding fee compliance, same-day add-ons, and UDS reporting. <Link href="/specialties/" className="fqhc-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="fqhc-faq-list">
              {[
                ["How does FQHC Prospective Payment System (PPS) billing work?","Under the FQHC Prospective Payment System, Medicare and Medicaid reimburse FQHCs a fixed All-Inclusive Rate (AIR) per qualifying encounter rather than per individual service. The rate covers all qualifying FQHC services in a single encounter. For Medicare, the rate is geographically adjusted and updated annually. For Medicaid, each state sets its own FQHC PPS rate. Billing must correctly identify qualifying encounters, document all services provided, and use FQHC-specific revenue codes (0521-0522) and CPT/HCPCS codes that satisfy the encounter definition."],
                ["What qualifies as an FQHC encounter for billing purposes?","A qualifying FQHC encounter requires a face-to-face visit between the patient and a qualifying healthcare professional (physician, NP, PA, CNM, or clinical psychologist/LCSW for mental health), with a medically necessary service documented in the medical record. A single patient visit may include multiple qualifying encounters if the patient receives both a medical and a mental health service on the same day, each of which can be billed as a separate encounter under the mental health add-on billing rules."],
                ["How do you handle sliding fee scale compliance in FQHC billing?","FQHCs are required by HRSA to provide services on a sliding fee scale based on patient income as a percentage of the Federal Poverty Level (FPL). Sliding fee scale discounts are applied to the patient's share of the cost — not to the payer reimbursement. Patients at or below 100% FPL receive free care; patients from 101-200% FPL pay a reduced fee on a graduated scale. We manage sliding fee documentation, ensure fee adjustment audit trails, and maintain compliance with HRSA sliding fee schedule requirements."],
                ["How do you bill same-day visits and behavioral health add-ons at FQHCs?","Same-day visits at FQHCs can qualify for separate encounter billing when both a medical and behavioral health service are provided. Medicare allows a separate mental health add-on encounter (using the G0469 or G0470 codes) when a qualifying mental health professional provides a separately documented mental health service on the same day as a medical encounter. Correct billing requires separate documentation for each encounter, distinct qualifying practitioners for each service type, and proper revenue code assignment. We manage same-day add-on billing to maximize encounter-based revenue."],
                ["How do you support UDS reporting for FQHCs?","The Uniform Data System (UDS) report is required annually by HRSA for all FQHCs. UDS data includes patient demographics, clinical quality measures, and financial performance indicators derived from billing and clinical records. We maintain billing data in formats that support UDS extraction, verify encounter counts by patient type, and ensure billing data aligns with clinical documentation for accurate UDS submission. We support your UDS reporting team with data validation, encounter reconciliation, and financial reporting requirements."],
              ].map(([q,a]) => (
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
        heading="Maximize Your FQHC Revenue Cycle"
        body="Schedule a free FQHC billing assessment and discover how encounter optimization, same-day add-on capture, and sliding fee compliance can significantly improve your health center's revenue."
        ctaLabel="Schedule Revenue Assessment"
        formId="fqhcAssessmentForm"
        checklist={[
          "FQHC encounter qualification audit — PPS billing accuracy review",
          "Same-day add-on capture analysis — G0469/G0470 utilization",
          "Sliding fee documentation compliance review",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For FQHCs & FQHC look-alikes · PPS & HRSA specialists · All 50 states served"
      />
    </main>
  );
}
