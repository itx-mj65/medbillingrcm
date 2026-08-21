import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function MedicalClinicsBillingPage() {
  return (
    <main className="sp-page clinic-page" id="main">

      <SpecialtyHero
        eyebrow="Medical Clinic Revenue Infrastructure"
        heading="Medical Clinics Billing Services"
        intro="Medbilling RCM provides specialized medical clinic billing services covering multi-specialty E/M coding (99202–99215), preventive care billing (99381–99397), chronic care management (99490), transitional care management (99495–99496), provider credentialing, EHR-integrated revenue cycle management, and Annual Wellness Visit coding — ensuring accurate claims and maximum reimbursements for medical clinics, FQHCs, and multi-specialty practices."
        badge="AAPC Certified · Multi-Specialty · CCM/TCM Experts · 50 States"
        stats={[
          { num: "97%",  label: "Clean Claim Rate" },
          { num: "30%",  label: "Reduction in A/R Days" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ VALUE-BASED CARE SERVICES DASHBOARD ═════════════
          UNIQUE DESIGN: A value-based and preventive care billing
          dashboard — shows CCM, TCM, AWV, and preventive codes
          with requirement indicators. "Beyond the visit" billing
          that most clinics systematically miss.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="services">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Beyond-the-Visit Revenue</p>
          <h2 className="reveal">Value-Based Care Billing — Revenue Most Clinics Miss</h2>
          <p className="clinic-vbc-sub reveal">Medical clinics leave significant revenue on the table by billing only face-to-face visits. CCM, TCM, AWV, and chronic disease management codes represent thousands in monthly untapped revenue for qualifying patient panels.</p>

          <div className="clinic-vbc-grid">
            {[
              { code:"99490",  name:"Chronic Care Management",           category:"CCM",  time:"20+ min/month", patients:"2+ chronic conditions", color:"blue",
                reqs:["Patient consent documented","Care plan established","24/7 access provided","Monthly time tracked"] },
              { code:"99495",  name:"Transitional Care Management",      category:"TCM",  time:"14-day window",  patients:"Post-facility discharge", color:"green",
                reqs:["Contact within 2 business days","Face-to-face within 14 days","Care coordination documented","Moderate MDM complexity"] },
              { code:"G0439",  name:"Annual Wellness Visit",             category:"AWV",  time:"Per year",       patients:"Medicare beneficiaries", color:"navy",
                reqs:["Health risk assessment","Personalized prevention plan","BP/BMI screening","Referrals documented"] },
              { code:"99487",  name:"Complex CCM",                       category:"CCCM", time:"60+ min/month",  patients:"2+ chronic high-risk",    color:"gold",
                reqs:["Complex medication management","Care plan revision","Specialist coordination","60+ min time logged"] },
              { code:"99453",  name:"Remote Patient Monitoring Setup",   category:"RPM",  time:"Initial setup",  patients:"Chronic disease patient",  color:"blue",
                reqs:["Device education provided","Technical setup complete","Consent obtained","Initial data baseline"] },
              { code:"99457",  name:"RPM Monthly Management",            category:"RPM",  time:"20+ min/month",  patients:"Active RPM patient",        color:"green",
                reqs:["20+ min data review/month","Interactive communication","Clinical decision made","Ongoing monitoring"] },
            ].map(({ code, name, category, time, patients, color, reqs }) => (
              <div className={`clinic-vbc-card clinic-vbc-card--${color} reveal`} key={code}>
                <div className="clinic-vbc-top">
                  <span className="clinic-vbc-code">{code}</span>
                  <span className="clinic-vbc-cat">{category}</span>
                </div>
                <h3>{name}</h3>
                <div className="clinic-vbc-meta">
                  <span className="clinic-vbc-time">⏱ {time}</span>
                  <span className="clinic-vbc-pts">👥 {patients}</span>
                </div>
                <ul className="clinic-vbc-reqs">
                  {reqs.map(r => <li key={r}>{r}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="clinic-vbc-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Assess Your Untapped Revenue</Link>
            <span className="clinic-vbc-note">Most clinics bill less than 30% of their eligible CCM and TCM encounters. We identify and capture the rest.</span>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES ══════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Clinic Billing Challenges</p>
          <h2 className="reveal">Multi-Specialty Clinic Billing — Expertly Handled</h2>
          <p className="clinic-caps-sub reveal">Medical clinic billing spans E/M level optimization, preventive care coding, value-based care programs, provider credentialing, and multi-payer management — all simultaneously across multiple providers and specialties.</p>

          <div className="clinic-caps-grid">
            {[
              { icon:"📋", n:"01", h:"E/M Level Optimization — 2021 AMA Guidelines",  t:"Post-2021 AMA changes, E/M level selection is based on MDM complexity or total time — not history and physical exam components. Many clinic billing teams still undercode because they apply pre-2021 rules. We select E/M levels based on documented MDM (problem complexity, data reviewed, and risk) or total visit time on every encounter." },
              { icon:"💊", n:"02", h:"CCM Monthly Billing & Time Tracking",            t:"Chronic Care Management (99490) requires 20+ minutes of non-face-to-face care management per calendar month, documented care plan, patient consent, and 24/7 access. Most clinics that qualify for CCM bill fewer than 30% of eligible patient months. We implement CCM workflows, track monthly minutes per patient, and bill every qualifying month." },
              { icon:"🏥", n:"03", h:"AWV + Same-Day E/M Modifier 25",                 t:"Annual Wellness Visits (G0438/G0439) are not E/M visits — they have distinct documentation requirements. When a significant, separately identifiable E/M is performed during an AWV, modifier 25 is required on the E/M code. Missing modifier 25 on AWV + E/M same-day encounters costs clinics thousands in preventable denials." },
              { icon:"📝", n:"04", h:"Provider Credentialing & Enrollment",             t:"New provider credentialing requires individual NPI enrollment across Medicare PECOS, Medicaid, and all commercial payers. Timelines range 30–180 days. Billing claims before credentialing is complete — or with incorrect NPI linkage — generates denials that can take months to correct. We manage the full credentialing cycle for every new provider." },
              { icon:"🔄", n:"05", h:"TCM Post-Discharge Billing",                     t:"Transitional Care Management (99495/99496) is billable after facility discharge with specific timeline requirements: interactive contact within 2 business days, face-to-face within 7 or 14 days. Missing TCM billing means losing high-reimbursement codes most clinics simply forget to bill. We track discharge dates and capture TCM on every qualifying patient." },
              { icon:"🌐", n:"06", h:"Multi-Payer & EHR Billing Integration",          t:"Multi-specialty clinics manage Medicare, Medicaid, and dozens of commercial payers — each with distinct rules, fee schedules, and claim formats. We integrate with major EHR platforms (Epic, Athena, eClinicalWorks, NextGen), maintain payer-specific rule sets, and manage the full claim lifecycle across your entire provider panel." },
            ].map(({ icon, n, h, t }) => (
              <article className="clinic-cap-card reveal" key={n}>
                <div className="clinic-cap-top">
                  <div className="clinic-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="clinic-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your Clinic Revenue System</h2>
          <p className="clinic-process-intro reveal">End-to-end medical clinic billing infrastructure from provider credentialing through CCM/TCM monthly billing and EHR-integrated claim submission.</p>
          <div className="clinic-steps">
            {[
              { n:"01", h:"Provider Credentialing & NPI Enrollment",    t:"Individual and organizational NPI setup, Medicare PECOS enrollment, Medicaid credentialing, and commercial payer enrollment managed for every new provider" },
              { n:"02", h:"E/M Level Selection — 2021 AMA MDM Rules",  t:"MDM-based or time-based E/M level selection per AMA 2021 guidelines — 99202–99215 coded from documented problem complexity, data reviewed, and risk" },
              { n:"03", h:"Preventive & AWV Code Application",          t:"99381–99397 preventive codes plus G0438/G0439 AWV — modifier 25 applied for same-day E/M + preventive encounters" },
              { n:"04", h:"CCM/TCM/RPM Monthly Revenue Capture",        t:"Monthly CCM (99490/99487) time tracking, TCM (99495/99496) discharge calendar management, and RPM (99453/99457) data review documentation" },
              { n:"05", h:"Multi-Payer Claim Submission",               t:"EHR-integrated electronic claim submission with payer-specific rule sets — Medicare, Medicaid, and commercial simultaneously" },
              { n:"06", h:"Denial Management & Value-Based Reporting",  t:"Root-cause denial analysis, CCM/TCM appeal support, and performance reporting across all providers, payers, and service lines" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="clinic-step reveal" key={n}>
                <div className="clinic-step-aside">
                  <div className="clinic-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="clinic-step-conn" />}
                </div>
                <div className="clinic-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>
          <div className="clinic-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="clinic-process-note">For medical clinics &amp; FQHCs · Multi-specialty RCM · All 50 states</span>
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="clinic-ba-grid">
            {[
              { label:"Clean Claim Rate",        num:"97",  unit:"%",   green:true,  desc:"first-pass acceptance" },
              { label:"CCM Capture Rate",        num:"100", unit:"%",   green:false, desc:"of eligible patient months billed" },
              { label:"A/R Days Reduction",      num:"30",  unit:"%↓",  green:true,  desc:"accounts receivable days" },
              { label:"Credentialing Delays",    num:"$0",  unit:"",    green:false, desc:"zero revenue loss from NPI gaps" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`clinic-ba-card${green ? " clinic-ba-card--green" : ""} reveal`} key={label}>
                <div className="clinic-ba-label">{label}</div>
                <div className="clinic-ba-num">{num}<span>{unit}</span></div>
                <div className="clinic-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Medical Clinic Revenue Infrastructure Partner</h2>
          <p className="clinic-why-intro reveal">Our medical clinic billing team understands 2021 AMA E/M guidelines, CCM/TCM time documentation, AWV + E/M same-day coding, provider credentialing timelines, and the value-based care billing programs that represent untapped revenue for most multi-specialty clinics.</p>
          <div className="clinic-why-grid">
            {[
              { icon:"📋", n:"01", h:"2021 AMA E/M Optimization",              t:"MDM-based level selection per current AMA guidelines — capturing the highest supportable E/M level on every encounter." },
              { icon:"💊", n:"02", h:"CCM Monthly Billing Specialists",        t:"CCM 99490/99487 workflow implementation, monthly time tracking, and 100% eligible patient month billing." },
              { icon:"🏥", n:"03", h:"AWV & Preventive Care Coding",           t:"G0438/G0439 AWV plus 99381–99397 preventive — modifier 25 on same-day E/M correctly applied every time." },
              { icon:"🔄", n:"04", h:"TCM Discharge Calendar Management",      t:"Post-discharge TCM 99495/99496 captured on every qualifying patient — tracked from discharge date to visit completion." },
              { icon:"🌐", n:"05", h:"RPM Billing & Monitoring",               t:"99453 setup and 99457 monthly management billed on every active RPM patient with documented data review." },
              { icon:"📝", n:"06", h:"Provider Credentialing Management",      t:"Complete NPI enrollment lifecycle — PECOS, Medicaid, and commercial payer credentialing for every new provider." },
              { icon:"🏅", n:"07", h:"AAPC-Certified Clinic Coders",          t:"Every specialist holds AAPC certification with multi-specialty clinic training. 2021 AMA guidelines applied on every claim." },
              { icon:"🔍", n:"08", h:"Multi-Specialty Performance Reporting",  t:"Provider-level revenue reports, E/M level distribution analysis, CCM capture rates, and multi-payer performance dashboards." },
            ].map(({ icon, n, h, t }) => (
              <div className="clinic-why-card reveal" key={n}>
                <div className="clinic-why-top">
                  <div className="clinic-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="clinic-why-num">{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--paper reveal" id="faq">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Common Questions</p>
          <h2 className="reveal">Frequently Asked Questions</h2>
          <div className="clinic-faq-layout">
            <div className="clinic-faq-intro reveal">
              <p>Direct answers about E/M coding, CCM billing, AWV, provider credentialing, and TCM. <Link href="/specialties/" className="clinic-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="clinic-faq-list">
              {[
                ["How do you handle E/M coding for medical clinic visits?","Medical clinic E/M coding uses CPT codes 99202–99215 based on medical decision-making (MDM) complexity or total time. The 2021 AMA E/M guidelines eliminated history and physical exam as primary level determinants — MDM or time now drives code selection. We select E/M levels based on documented MDM complexity (problem complexity, data reviewed, and risk of complications) or documented total visit time, capturing the highest supportable level on every clinic encounter."],
                ["How do you bill Chronic Care Management (CCM) for medical clinics?","CCM is billed using CPT 99490 for 20+ minutes of non-face-to-face chronic disease management per calendar month for patients with 2+ chronic conditions. Complex CCM uses 99487 (60+ minutes) and 99489 (each additional 30 minutes). CCM requires documented care plan, patient consent, 24/7 access provision, and monthly time tracking. We implement CCM billing workflows, track monthly time per patient, and ensure all documentation requirements are met before billing each monthly CCM claim."],
                ["How do you handle preventive care and Annual Wellness Visit billing?","Preventive care uses CPT 99381–99397 based on age and visit type (new vs established). Annual Wellness Visit (AWV) is a Medicare benefit billed using G0438 (Initial AWV) or G0439 (Subsequent AWV) — not a standard E/M visit code. When a significant, separately identifiable E/M service is performed during an AWV, modifier 25 is required on the E/M code. We apply the correct preventive or AWV code and manage same-day E/M billing with modifier 25 on all qualifying encounters."],
                ["How do you manage provider credentialing for medical clinics?","Provider credentialing requires enrollment with each payer separately — including Medicare (PECOS), Medicaid, and commercial insurers. Each provider needs an individual NPI (Type 1) linked to the clinic's organizational NPI (Type 2). Credentialing timelines range from 30–180 days depending on payer. We manage the complete credentialing cycle for new providers, track enrollment status, and prevent the revenue loss that occurs when providers see patients before credentialing is complete."],
                ["How do you handle Transitional Care Management (TCM) billing?","TCM is billed after a patient is discharged from a facility. CPT 99495 covers moderate complexity TCM with a face-to-face visit within 14 days; CPT 99496 covers high complexity TCM with a visit within 7 days. TCM requires interactive contact with the patient within 2 business days of discharge and documentation of care coordination activities. We track discharge dates, manage the interactive contact timeline, and bill TCM on all qualifying post-discharge encounters."],
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
        heading="Maximize Your Medical Clinic Revenue"
        body="Schedule a free clinic billing assessment and discover how CCM/TCM capture, E/M level optimization, and AWV billing can significantly improve your practice collections."
        ctaLabel="Schedule Revenue Assessment"
        formId="clinicAssessmentForm"
        checklist={[
          "CCM eligible patient panel analysis — 99490 capture rate",
          "E/M level distribution review — 2021 AMA MDM compliance",
          "AWV + same-day E/M modifier 25 audit",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For medical clinics & FQHCs · Multi-specialty RCM · AAPC-certified · All 50 states"
      />
    </main>
  );
}
