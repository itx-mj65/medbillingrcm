import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function DMEBillingPage() {
  return (
    <main className="sp-page dme-page" id="main">

      {/* ═══ HERO ════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="DMEPOS Revenue Infrastructure"
        heading="DME Billing Services"
        intro="Medbilling RCM provides specialized DME billing services for DMEPOS suppliers covering HCPCS Level II coding, CMN documentation, LCD compliance, prior authorization, capped rental billing, and denial management — ensuring accurate claims and maximum reimbursements across Medicare, Medicaid, and commercial payers."
        badge="DMEPOS Specialists · HCPCS Level II · LCD Compliant · 50 States"
        stats={[
          { num: "98%",   label: "Clean Claim Rate" },
          { num: "30%",   label: "Reduction in A/R Days" },
          { num: "14–30", label: "Day Reimbursement" },
          { num: "50",    label: "States Served" },
        ]}
      />

      {/* ═══ DMEPOS OVERVIEW ═════════════════════════════════
          UNIQUE: Equipment category showcase — horizontal scrolling
          category cards showing DME types covered, each with HCPCS
          code examples. Different from any section on other pages.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="services">
        <div className="sp-wrap">
          <p className="sp-ew reveal">What We Bill For</p>
          <h2 className="reveal">DME Categories We Cover</h2>
          <p className="dme-overview-sub reveal">We bill for the complete range of durable medical equipment, prosthetics, orthotics, and supplies (DMEPOS). Every category uses HCPCS Level II codes — not CPT — and requires category-specific documentation and modifier strategies.</p>

          <div className="dme-category-grid">
            {[
              { icon:"♿", cat:"Power Mobility",        codes:"E1130–E1298", items:"Power wheelchairs, scooters, complex rehab",       doc:"Face-to-face exam + WOPD required" },
              { icon:"😮‍💨", cat:"Respiratory Therapy",    codes:"E0601, E0470", items:"CPAP, BiPAP, oxygen concentrators, ventilators", doc:"Sleep study + CMN + prior auth" },
              { icon:"🛏️", cat:"Hospital Beds & Support", codes:"E0250–E0373", items:"Hospital beds, mattresses, trapeze bars",          doc:"CMN + physician order" },
              { icon:"🦽", cat:"Manual Wheelchairs",     codes:"K0001–K0108", items:"Standard, lightweight, heavy-duty chairs",         doc:"Face-to-face + CMN" },
              { icon:"🦿", cat:"Orthotics & Prosthetics",codes:"L0100–L4999", items:"AFO, KAFO, lower limb prosthetics, spinal braces",  doc:"Prescription + fitting notes" },
              { icon:"💉", cat:"Diabetic Supplies",      codes:"A4253, E0607", items:"Glucose monitors, lancets, test strips",           doc:"Diagnosis + usage records" },
              { icon:"🩹", cat:"Wound Care Supplies",    codes:"A6000–A6550", items:"Dressings, negative pressure wound therapy",        doc:"Wound measurements + progress notes" },
              { icon:"🏃", cat:"Rehab & PT Equipment",   codes:"E0935, E1399", items:"Walkers, crutches, bath safety equipment",         doc:"Physician Rx + medical necessity" },
            ].map(({ icon, cat, codes, items, doc }) => (
              <div className="dme-cat-card reveal" key={cat}>
                <div className="dme-cat-top">
                  <span className="dme-cat-icon" aria-hidden="true">{icon}</span>
                  <span className="dme-cat-codes">{codes}</span>
                </div>
                <h3 className="dme-cat-title">{cat}</h3>
                <p className="dme-cat-items">{items}</p>
                <div className="dme-cat-doc">
                  <span className="dme-cat-doc-label">Doc required:</span> {doc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MODIFIER REFERENCE TABLE ════════════════════════
          UNIQUE: Navy section with a modifier reference table —
          shows RR/NU/UE/KX/KH modifiers with descriptions.
          This is genuinely useful reference content unique to DME.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">HCPCS Modifier Expertise</p>
          <h2 className="reveal">DME Modifiers We Apply — Every Claim, Every Time</h2>
          <p className="dme-mod-intro reveal">Incorrect modifier use is the #1 cause of preventable DME denials. Our billing team applies the exact modifier combination required for each equipment type, rental period, and payer rule.</p>

          <div className="dme-mod-grid">
            {[
              { mod:"RR",  label:"Rental",             desc:"Equipment rented to the patient — required for all capped and continuous rental claims" },
              { mod:"NU",  label:"New Purchase",        desc:"New equipment purchased outright — used after capped rental period converts to purchase" },
              { mod:"UE",  label:"Used Equipment",      desc:"Used (refurbished) equipment purchase — must be disclosed for Medicare compliance" },
              { mod:"KX",  label:"Medical Necessity",   desc:"Supplier attests medical necessity documentation is on file — required for many high-cost items" },
              { mod:"KH",  label:"Month 1 Rental",      desc:"First month of capped rental — triggers the rental clock for hospital beds, standard wheelchairs" },
              { mod:"KI",  label:"Month 2–3 Rental",    desc:"Months 2 and 3 of capped rental — different reimbursement rate applies" },
              { mod:"KJ",  label:"Month 4–13 Rental",   desc:"Months 4–13 of capped rental period — required before ownership transfer" },
              { mod:"MS",  label:"Maintenance",         desc:"Post-cap maintenance and servicing — applies after equipment ownership transfers to patient" },
            ].map(({ mod, label, desc }) => (
              <div className="dme-mod-card reveal" key={mod}>
                <div className="dme-mod-badge">{mod}</div>
                <div className="dme-mod-body">
                  <strong>{label}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES — 6 challenge cards ════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">DME Billing Challenges</p>
          <h2 className="reveal">Complex DME Billing — Expertly Handled</h2>
          <p className="dme-caps-sub reveal">DME has one of the highest denial rates in healthcare — averaging 15–25% industry-wide vs. 5–8% for medical/surgical billing. Most denials are preventable with the right expertise.</p>

          <div className="dme-caps-grid">
            {[
              { icon:"📋", n:"01", h:"CMN & Documentation Compliance",       t:"Certificate of Medical Necessity (CMN) forms are required for many DMEPOS items. We complete, obtain physician signatures, and maintain all CMNs in accordance with LCD requirements and CMS guidelines preventing the most common DME denial reason." },
              { icon:"📅", n:"02", h:"Capped Rental & Ownership Tracking",   t:"Hospital beds, standard wheelchairs, and other capped rental items bill monthly for 13 months then convert to patient ownership. We track each unit's rental phase, apply month-specific KH/KI/KJ modifiers, and manage the ownership transition correctly." },
              { icon:"🏛️", n:"03", h:"LCD Compliance & ICD-10 Linking",      t:"Each DMEPOS item is covered only for specific ICD-10 diagnosis codes as defined in MAC-published Local Coverage Determinations. We verify LCD compliance before every claim submission, matching the correct diagnosis to the equipment HCPCS code." },
              { icon:"🔐", n:"04", h:"Prior Authorization — Power Mobility",  t:"Power wheelchairs and complex rehabilitation equipment require CMS Prior Authorization Program approval before delivery. We submit complete documentation packages including face-to-face examination notes, functional assessments, and WOPD to prevent authorization denials." },
              { icon:"🚫", n:"05", h:"Denial Management & Recoupment Defense",t:"DME audits and probe reviews frequently result in recoupment demands. We provide root-cause denial analysis, prepare comprehensive appeal packages with clinical documentation, and represent suppliers through the DME MAC appeal process to recover denied revenue." },
              { icon:"📦", n:"06", h:"Proof of Delivery & Competitive Bidding",t:"POD signatures and competitive bidding contract compliance are non-negotiable for DME claims. We ensure all deliveries are documented correctly, competitive bid contract rates are applied, and out-of-area supplier rules are followed for every claim submitted." },
            ].map(({ icon, n, h, t }) => (
              <article className="dme-cap-card reveal" key={n}>
                <div className="dme-cap-top">
                  <div className="dme-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="dme-cap-num">{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REVENUE CONTROL FRAMEWORK ════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal" id="process">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Revenue Control Framework</p>
          <h2 className="reveal">How We Engineer Your DME Revenue System</h2>
          <p className="dme-process-intro reveal">End-to-end DMEPOS billing infrastructure from prescription intake to rental reconciliation built for the unique documentation, modifier, and compliance requirements of DME suppliers.</p>

          <div className="dme-steps">
            {[
              { n:"01", h:"Prescription Intake & LCD Verification",  t:"Verify physician order, confirm ICD-10 diagnosis meets LCD coverage criteria, and flag items requiring CMN or prior authorization" },
              { n:"02", h:"CMN & Prior Authorization",               t:"Complete CMN forms, obtain physician signatures, submit power mobility pre-auth packages with face-to-face documentation" },
              { n:"03", h:"HCPCS Coding & Modifier Assignment",      t:"Assign correct HCPCS Level II codes and rental modifiers (RR/NU/UE/KX/KH/KI/KJ/MS) for each item and billing period" },
              { n:"04", h:"POD Verification & Claim Submission",     t:"Confirm proof of delivery is on file, then submit clean DME claims electronically to Medicare MAC or commercial payer" },
              { n:"05", h:"Rental Tracking & Monthly Rebilling",     t:"Track capped rental periods, update modifiers monthly, and manage ownership conversion at end of cap period" },
              { n:"06", h:"Denial Management & Audit Defense",       t:"Root-cause denial analysis, appeal preparation with clinical documentation, and probe review response support" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="dme-step reveal" key={n}>
                <div className="dme-step-aside">
                  <div className="dme-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="dme-step-conn" aria-hidden="true" />}
                </div>
                <div className="dme-step-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dme-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="dme-process-note">For DME/HME suppliers &amp; DMEPOS providers · HCPCS Level II specialists · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>

          <div className="dme-ba-grid">
            <div className="dme-ba-card dme-ba-card--green reveal">
              <div className="dme-ba-label">Clean Claim Rate</div>
              <div className="dme-ba-num">98<span>%</span></div>
              <div className="dme-ba-desc">vs. 75–80% industry average</div>
            </div>
            <div className="dme-ba-card reveal">
              <div className="dme-ba-label">Denial Rate</div>
              <div className="dme-ba-num">&lt;5<span>%</span></div>
              <div className="dme-ba-desc">vs. 15–25% industry average</div>
            </div>
            <div className="dme-ba-card dme-ba-card--green reveal">
              <div className="dme-ba-label">A/R Days Reduction</div>
              <div className="dme-ba-num">30<span>%↓</span></div>
              <div className="dme-ba-desc">days in accounts receivable</div>
            </div>
            <div className="dme-ba-card reveal">
              <div className="dme-ba-label">Reimbursement Speed</div>
              <div className="dme-ba-num">14–30<span>d</span></div>
              <div className="dme-ba-desc">Medicare & commercial payers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your DMEPOS Revenue Infrastructure Partner</h2>
          <p className="dme-why-intro reveal">Our DME billing team understands HCPCS Level II codes, capped rental tracking, CMN requirements, LCD compliance, and the specific documentation rules that make the difference between a paid DME claim and a recoupment demand.</p>

          <div className="dme-why-grid">
            {[
              { icon:"📋", n:"01", h:"HCPCS Level II Coding Specialists",      t:"Deep expertise in HCPCS Level II codes updated quarterly by CMS with accurate modifier assignment for every equipment category and billing period." },
              { icon:"📅", n:"02", h:"Capped Rental Lifecycle Management",     t:"We track every rental unit from month 1 (KH) through ownership conversion, applying the correct modifier and rate for each monthly billing cycle." },
              { icon:"🏛️", n:"03", h:"LCD Compliance — All Four DME MACs",    t:"We maintain current LCDs for all four DME MAC jurisdictions (A2-3, A4-B) and verify ICD-10 diagnosis code coverage before every claim." },
              { icon:"🔐", n:"04", h:"CMS Prior Authorization Expertise",      t:"Full prior authorization support for power mobility and complex rehab items — face-to-face notes, functional assessments, and WOPD management." },
              { icon:"🏅", n:"05", h:"AAPC-Certified DMEPOS Coders",          t:"Every DME billing specialist holds AAPC certification with DMEPOS-specific training. Zero HCPCS and modifier errors on claim submission." },
              { icon:"🛡️", n:"06", h:"Audit Defense & Recoupment Protection",  t:"We prepare and submit comprehensive appeal packages for denied claims and represent your practice through the DME MAC appeal process." },
              { icon:"💰", n:"07", h:"Competitive Bidding Contract Compliance", t:"We apply correct competitive bidding contract rates and out-of-area supplier rules for all applicable DMEPOS items and regions." },
              { icon:"🔍", n:"08", h:"Transparent Reporting",                  t:"Equipment category reports, payer performance by HCPCS code, rental tracking dashboards, and denial trend analysis built for DME suppliers." },
            ].map(({ icon, n, h, t }) => (
              <div className="dme-why-card reveal" key={n}>
                <div className="dme-why-top">
                  <div className="dme-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="dme-why-num">{n}</span>
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

          <div className="dme-faq-layout">
            <div className="dme-faq-intro reveal">
              <p>Direct answers about DME billing, HCPCS modifiers, capped rentals, prior authorization, and LCD compliance. <Link href="/specialties/" className="dme-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="dme-faq-list">
              {[
                ["What HCPCS modifiers are required for DME billing?",
                 "DME billing requires specific modifiers that tell payers the rental or purchase status of equipment. Key modifiers include RR (rental), NU (new purchase), UE (used equipment), KX (medical necessity documented), KH/KI/KJ (first/second/third month of capped rental), and MS (maintenance/servicing). Incorrect modifier use is one of the most common causes of DME claim denials."],
                ["What documentation is required for a payable DME claim?",
                 "A payable DME claim requires a Standard Written Order (SWO) signed by the treating practitioner, documented medical necessity in the patient's chart, and a Proof of Delivery (POD) confirming the patient received the equipment. Higher-cost items like oxygen therapy, power mobility devices, and hospital beds also require a face-to-face encounter note and in many cases a Written Order Prior to Delivery (WOPD) from the prescribing physician."],
                ["How do you handle capped rental billing for DME?",
                 "Capped rental items (like hospital beds and standard wheelchairs) are billed monthly with month-specific modifiers (KH for month 1, KI for months 2-3, KJ for months 4-13) and switch to maintenance after the cap period. We track each rental unit's billing phase, apply the correct modifier for every monthly claim, and transition items to maintenance and/or ownership correctly to prevent overpayments and recoupment."],
                ["How do you manage DME prior authorizations for high-cost equipment?",
                 "Power mobility devices, complex rehabilitation wheelchairs, and other high-cost DMEPOS items require prior authorization under the CMS DMEPOS Prior Authorization program. We submit authorization requests with full medical necessity documentation, track approval timelines, and coordinate with the prescribing physician to obtain required face-to-face examination notes before delivery."],
                ["What is LCD compliance and why does it matter for DME billing?",
                 "Local Coverage Determinations (LCDs) are Medicare Administrative Contractor (MAC) policies that define coverage criteria for specific DMEPOS items in each jurisdiction. Each DME MAC (A2-3, A4-B) publishes LCDs specifying which ICD-10 diagnosis codes qualify each equipment type for coverage. Filing a claim without a covered diagnosis code linked to the correct HCPCS item is an immediate denial. We verify LCD compliance before every claim submission."],
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
        heading="Stop Leaving DME Revenue on the Table"
        body="Schedule a free DME billing assessment and discover how accurate HCPCS coding, proper modifier application, and proactive LCD compliance can dramatically reduce your denial rate and accelerate reimbursements."
        ctaLabel="Schedule Revenue Assessment"
        formId="dmeAssessmentForm"
        checklist={[
          "HCPCS modifier audit — RR/NU/UE/KX/KH/KI/KJ accuracy review",
          "LCD compliance check across your top 10 HCPCS codes",
          "Capped rental tracking — modifier lifecycle analysis",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For DME/HME suppliers & DMEPOS providers · HCPCS Level II specialists · All 50 states"
      />

    </main>
  );
}
