import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function InfectiousDiseaseBillingPage() {
  return (
    <main className="sp-page id-page" id="main">

      <SpecialtyHero
        eyebrow="Infectious Disease Revenue Infrastructure"
        heading="Infectious Disease Billing Services"
        intro="Medbilling RCM provides specialized infectious disease billing services covering HIV/AIDS care, antibiotic infusion therapy billing (CPT 96365–96368), complex hospital consult coding, sepsis and MRSA ICD-10 specificity, and prior authorization management — ensuring accurate claims and maximum reimbursements for infectious disease practices and hospital-based ID consultants."
        badge="AAPC Certified · HIV & Infusion Specialists · ICD-10 Specificity · 50 States"
        stats={[
          { num: "97%",   label: "Clean Claim Rate" },
          { num: "30%",   label: "Reduction in A/R Days" },
          { num: "90%",   label: "Collection Rate" },
          { num: "50",    label: "States Served" },
        ]}
      />

      {/* ═══ ICD-10 PATHOGEN REFERENCE ═══════════════════════
          UNIQUE DESIGN: A pathogen-coded reference panel — shows
          major ID conditions with their specific ICD-10 codes,
          animated with idVirus rotating structure. Unique across
          all specialty pages — no other page shows a pathogen grid.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="conditions">
        <div className="sp-wrap">
          <p className="sp-ew reveal">ICD-10 Coding Precision</p>
          <h2 className="reveal">Conditions We Code — Pathogen-Level Specificity</h2>
          <p className="id-path-sub reveal">Infectious disease ICD-10 coding requires pathogen-level specificity. An unspecified code where a specific one exists triggers payer denials and medical necessity failures. We code to the highest level of specificity on every ID encounter.</p>

          <div className="id-pathogen-grid">
            {[
              { icon:"🦠", category:"HIV & AIDS",        color:"blue",
                codes:[ { icd:"B20",    desc:"HIV disease (confirmed)" }, { icd:"B23.8",  desc:"HIV with other conditions" }, { icd:"Z21",    desc:"HIV exposure, asymptomatic" }, { icd:"Z71.7",  desc:"HIV counseling" } ] },
              { icon:"🧫", category:"Bacterial Infections", color:"green",
                codes:[ { icd:"A41.01", desc:"MRSA sepsis" }, { icd:"A41.02", desc:"MSSA sepsis" }, { icd:"A04.71", desc:"C. diff without megacolon" }, { icd:"A04.72", desc:"C. diff with toxic megacolon" } ] },
              { icon:"🫁", category:"Respiratory Infections", color:"navy",
                codes:[ { icd:"J15.212",desc:"Pneumonia due to MRSA" }, { icd:"J18.9",  desc:"Unspecified pneumonia" }, { icd:"A15.0",  desc:"Pulmonary tuberculosis" }, { icd:"U07.1",  desc:"COVID-19, confirmed" } ] },
              { icon:"🦟", category:"Viral & Bloodborne",  color:"gold",
                codes:[ { icd:"B18.2",  desc:"Chronic hepatitis C" }, { icd:"B16.9",  desc:"Acute hepatitis B" }, { icd:"B50.9",  desc:"Malaria, unspecified" }, { icd:"B99.9",  desc:"Other unspecified infection" } ] },
              { icon:"💊", category:"STI & Other ID",     color:"blue",
                codes:[ { icd:"A53.9",  desc:"Syphilis, unspecified" }, { icd:"A54.9",  desc:"Gonococcal infection" }, { icd:"B37.81", desc:"Candida endocarditis" }, { icd:"B44.1",  desc:"Invasive aspergillosis" } ] },
              { icon:"⚗️", category:"Lab & Diagnostic",    color:"green",
                codes:[ { icd:"87040",  desc:"Blood culture (CPT)" }, { icd:"87070",  desc:"Culture, organism (CPT)" }, { icd:"87205",  desc:"Smear, gram stain (CPT)" }, { icd:"87899",  desc:"Infectious agent ID (CPT)" } ] },
            ].map(({ icon, category, color, codes }) => (
              <div className={`id-path-card id-path-card--${color} reveal`} key={category}>
                <div className="id-path-header">
                  <span className="id-path-icon" aria-hidden="true">{icon}</span>
                  <h3>{category}</h3>
                </div>
                <div className="id-path-codes">
                  {codes.map(({ icd, desc }) => (
                    <div className="id-path-row" key={icd}>
                      <span className="id-code">{icd}</span>
                      <span className="id-code-desc">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Infectious Disease Billing Challenges</p>
          <h2 className="reveal">Complex ID Billing — Expertly Handled</h2>
          <p className="id-caps-sub reveal">Infectious disease is one of the most documentation-heavy specialties — multi-system involvement, complex lab interpretation, time-based visits, and hospital consults each require specialty-specific billing expertise.</p>

          <div className="id-caps-grid">
            {[
              { icon:"🦠", n:"01", h:"HIV/AIDS ICD-10 & E/M Coding",           t:"HIV care requires B20 for confirmed HIV disease — not Z21 (exposure only). HIV management visits typically qualify for higher-complexity E/M codes due to multi-system involvement, complex medication management (antiretrovirals), and chronic monitoring requirements. We verify HIV staging codes, ensure correct E/M level selection, and capture all HIV-associated condition codes on every encounter." },
              { icon:"💉", n:"02", h:"Antibiotic Infusion Therapy Billing",     t:"IV antibiotic therapy uses CPT 96365 (first hour), 96366 (each additional hour), and 96367 (additional sequential infusion). Each infusion requires drug, dose, route, start/stop time, and clinical indication documentation. We track infusion time, apply correct sequential and concurrent infusion rules, and bill all antibiotic drugs separately using HCPCS J-codes." },
              { icon:"🏥", n:"03", h:"Hospital Consult & Inpatient ID Coding",  t:"ID specialists provide inpatient consultations, daily rounds, and complex hospital management. Initial hospital care (99221–99223) and subsequent visits (99231–99233) must reflect medical decision-making complexity. Complex ID cases may qualify for critical care (99291/99292) or prolonged services. We ensure correct E/M level selection for every hospital encounter." },
              { icon:"🧫", n:"04", h:"Sepsis & MRSA ICD-10 Specificity",       t:"Sepsis coding requires the specific organism code — A41.01 for MRSA sepsis vs A41.9 for unspecified — plus R65.20 for severe sepsis and T81.44XA for sepsis following a procedure. MRSA infections require organism-specific codes. We verify ICD-10 specificity on every sepsis, MRSA, and C. difficile claim to prevent denials from unspecified diagnosis codes." },
              { icon:"📋", n:"05", h:"Complex Antibiotic Prior Authorization",  t:"High-cost antibiotic regimens — IV vancomycin, daptomycin, and antifungal therapy — require prior authorization with culture and sensitivity results, failed oral therapy documentation, and specific organism confirmation. We manage the complete authorization cycle for all complex antibiotic and antifungal approvals." },
              { icon:"⏱️", n:"06", h:"Time-Based & Prolonged Service Billing",  t:"Complex ID consultations frequently involve extensive time reviewing lab results, culture data, imaging, and coordinating multi-specialty care. When time is the primary basis for E/M level selection, we document and bill prolonged services (99417) correctly — capturing revenue from ID encounters that non-specialized billers consistently undercode." },
            ].map(({ icon, n, h, t }) => (
              <article className="id-cap-card reveal" key={n}>
                <div className="id-cap-top">
                  <div className="id-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="id-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your ID Revenue System</h2>
          <p className="id-process-intro reveal">End-to-end infectious disease billing infrastructure — from HIV encounter coding and infusion billing through complex hospital consult capture and antibiotic prior authorization.</p>

          <div className="id-steps">
            {[
              { n:"01", h:"Eligibility & Infusion Coverage Verification", t:"Confirm outpatient infusion benefits, antibiotic formulary coverage, and prior authorization requirements before scheduling infusion therapy" },
              { n:"02", h:"ICD-10 Specificity Review",                    t:"Review every encounter for organism-specific ICD-10 coding — MRSA vs MSSA, HIV staging, C. diff without/with toxic megacolon, hepatitis type" },
              { n:"03", h:"E/M Level Selection",                          t:"Select E/M level based on documented MDM complexity — HIV management, sepsis consults, and complex ID cases often qualify for 99215 or 99205" },
              { n:"04", h:"Infusion Coding & Drug Billing",               t:"CPT 96365–96368 infusion codes with HCPCS J-codes for all antibiotic drugs — infusion time tracked, sequential/concurrent rules applied" },
              { n:"05", h:"Hospital Consult Capture",                     t:"All inpatient ID consultations, daily rounds, and follow-up visits coded with correct initial/subsequent hospital care E/M levels" },
              { n:"06", h:"Denial Management & Authorization Support",    t:"Root-cause denial analysis, ICD-10 specificity appeals, antibiotic authorization packages with culture and sensitivity results" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="id-step reveal" key={n}>
                <div className="id-step-aside">
                  <div className="id-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="id-step-conn" />}
                </div>
                <div className="id-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>

          <div className="id-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="id-process-note">For ID practices &amp; hospital-based consultants · AAPC-certified coders · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="id-ba-grid">
            {[
              { label:"Clean Claim Rate",          num:"97",  unit:"%",   green:true,  desc:"first-pass claim acceptance" },
              { label:"ICD-10 Specificity Rate",   num:"100", unit:"%",   green:false, desc:"organism-specific codes on every claim" },
              { label:"A/R Days Reduction",        num:"30",  unit:"%↓",  green:true,  desc:"accounts receivable days" },
              { label:"Infusion Coding Accuracy",  num:"100", unit:"%",   green:false, desc:"time-based infusion coding verified" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`id-ba-card${green ? " id-ba-card--green" : ""} reveal`} key={label}>
                <div className="id-ba-label">{label}</div>
                <div className="id-ba-num">{num}<span>{unit}</span></div>
                <div className="id-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Infectious Disease Revenue Infrastructure Partner</h2>
          <p className="id-why-intro reveal">Our infectious disease billing team understands HIV staging codes, sepsis ICD-10 specificity, infusion therapy sequential billing rules, hospital consult E/M levels, and the antibiotic authorization requirements that determine payment for complex ID cases.</p>
          <div className="id-why-grid">
            {[
              { icon:"🦠", n:"01", h:"HIV & AIDS Billing Specialists",          t:"B20 vs Z21 distinction, HIV staging codes, antiretroviral management E/M levels, and all HIV-associated opportunistic infection coding." },
              { icon:"💉", n:"02", h:"Antibiotic Infusion Coding Experts",      t:"96365/96366/96367 sequential infusion rules, HCPCS J-code drug billing, infusion time tracking — every minute captured correctly." },
              { icon:"🧫", n:"03", h:"Sepsis & Pathogen ICD-10 Precision",     t:"MRSA sepsis A41.01, C. diff A04.71/A04.72, organism-specific coding verified on every sepsis, MRSA, and culture-positive claim." },
              { icon:"🏥", n:"04", h:"Hospital Consult Revenue Capture",        t:"Initial and subsequent hospital care E/M levels matched to MDM complexity — including critical care (99291/99292) and prolonged services (99417)." },
              { icon:"🏅", n:"05", h:"AAPC-Certified ID Coders",               t:"Every specialist holds AAPC certification with dedicated infectious disease training across outpatient, inpatient, and infusion therapy billing." },
              { icon:"📋", n:"06", h:"Antibiotic Prior Authorization",          t:"Complete authorization packages with culture and sensitivity results, failed oral therapy documentation, and organism-specific prescriber attestation." },
              { icon:"⏱️", n:"07", h:"Time-Based & Complex E/M Capture",        t:"Prolonged service billing (99417) and critical care coding applied when ID encounter complexity and time support higher-level reimbursement." },
              { icon:"🔍", n:"08", h:"Transparent ID Billing Reports",          t:"Condition-level revenue tracking, infusion billing performance, E/M level distribution analysis, and denial trend reporting." },
            ].map(({ icon, n, h, t }) => (
              <div className="id-why-card reveal" key={n}>
                <div className="id-why-top">
                  <div className="id-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="id-why-num">{n}</span>
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
          <div className="id-faq-layout">
            <div className="id-faq-intro reveal">
              <p>Direct answers about HIV billing, antibiotic infusion coding, hospital consults, ICD-10 specificity, and antibiotic prior authorization. <Link href="/specialties/" className="id-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="id-faq-list">
              {[
                ["How do you handle HIV/AIDS billing in infectious disease practices?",
                 "HIV care requires specific ICD-10 coding — B20 for confirmed HIV disease (not the exposure code Z21), with additional codes for associated conditions and opportunistic infections. HIV management visits typically qualify for higher-complexity E/M codes due to multi-system involvement, complex medication management, and chronic disease monitoring. We verify ICD-10 specificity, ensure correct HIV staging codes, and capture the appropriate E/M level on every HIV management encounter."],
                ["How do you bill for antibiotic infusion therapy in infectious disease?",
                 "Antibiotic infusion therapy uses CPT 96365 for the first hour of IV push or infusion, 96366 for each additional hour, and 96367 for additional sequential infusion. Subcutaneous antibiotic administration uses CPT 96401. Each infusion encounter requires documentation of drug, dose, route, start and stop time, and clinical indication. We track infusion time, apply correct sequential and concurrent infusion rules, and bill all infusion drugs separately using appropriate HCPCS J-codes."],
                ["How do you code hospital consults and inpatient infectious disease care?",
                 "Infectious disease specialists frequently provide inpatient consultations and ongoing hospital management. Initial hospital consultations are billed under 99221–99223 (initial hospital care) or 99241–99245 (outpatient consultations). Subsequent hospital visits use 99231–99233. Complex ID cases often qualify for prolonged services and critical care coding. We ensure correct E/M level selection based on medical decision-making complexity and document all ID-specific complexity factors."],
                ["How do you ensure ICD-10 specificity for infectious disease conditions?",
                 "Infectious disease ICD-10 coding requires high specificity — sepsis requires the specific organism code (A41.01 for MRSA sepsis vs A41.9 for unspecified sepsis), Clostridioides difficile requires A04.71 (without megacolon) or A04.72 (with toxic megacolon), HIV requires B20 for confirmed disease. We verify ICD-10 specificity on every claim and ensure the coding reflects the definitive diagnosis, not unspecified codes that trigger payer denials."],
                ["How do you handle prior authorization for complex antibiotic regimens?",
                 "Complex antibiotic regimens — including IV vancomycin, daptomycin, and antifungal therapy — require prior authorization with documentation of culture and sensitivity results, failed oral antibiotic therapy, and specific organism confirmation. We manage the complete authorization cycle, including submission of microbiology results, clinical notes, and prescriber attestation required by payers for high-cost antibiotic and antifungal approvals."],
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
        heading="Maximize Your Infectious Disease Practice Revenue"
        body="Schedule a free ID billing assessment and discover how HIV coding accuracy, infusion billing precision, and ICD-10 specificity can significantly improve your practice reimbursements."
        ctaLabel="Schedule Revenue Assessment"
        formId="idAssessmentForm"
        checklist={[
          "HIV/AIDS ICD-10 coding audit — B20 vs Z21 accuracy review",
          "Antibiotic infusion billing review — CPT 96365–96368 compliance",
          "Hospital consult E/M level analysis — complexity capture review",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For ID practices & hospital-based consultants · AAPC-certified coders · All 50 states served"
      />
    </main>
  );
}
