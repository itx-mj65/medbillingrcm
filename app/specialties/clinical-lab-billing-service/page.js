import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function ClinicalLabBillingPage() {
  return (
    <main className="sp-page lab-page" id="main">
      <SpecialtyHero
        eyebrow="Clinical Lab Revenue Infrastructure"
        heading="Clinical Lab Billing Services"
        intro="Medbilling RCM provides specialized clinical laboratory billing services covering PAMA-compliant claim submission, ABN management, advance beneficiary notice compliance, NCCI edit verification, molecular diagnostics billing, reflex testing coding, and NPI credentialing — ensuring accurate claims and maximum reimbursements for independent labs, hospital labs, and physician office labs."
        badge="AAPC Certified · PAMA Compliant · ABN Management · 50 States"
        stats={[
          { num: "97%",  label: "Clean Claim Rate" },
          { num: "30%",  label: "Reduction in A/R Days" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* UNIQUE: Lab test type reference panel — showing common lab
          test categories with HCPCS/CPT families and ABN status,
          with a flickering "processing" animation unique to lab */}
      <section className="sp-sec sp-sec--paper reveal" id="services">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Lab Test Type Coverage</p>
          <h2 className="reveal">Clinical Lab Test Categories — Billed Precisely</h2>
          <p className="lab-cat-sub reveal">Clinical lab billing covers dozens of test categories — each with its own CPT/HCPCS code family, PAMA fee schedule rate, ABN requirements, and NCCI bundling rules. Our lab billing specialists know every category.</p>

          <div className="lab-cat-grid">
            {[
              { icon:"🩸", cat:"Hematology & CBC",          codes:"85025, 85027, 85730",   abn:"Frequency limits apply",  pama:"CLFS reimbursement" },
              { icon:"🧪", cat:"Chemistry Panels",           codes:"80048, 80050, 80053",   abn:"Panel vs individual rules", pama:"Panel codes required" },
              { icon:"🦠", cat:"Microbiology & Culture",     codes:"87040, 87070, 87086",   abn:"Usually covered",         pama:"Culture + sensitivity" },
              { icon:"🧬", cat:"Molecular Diagnostics",      codes:"81161–81408, 87631",    abn:"Prior auth often required", pama:"High-cost tier codes" },
              { icon:"💉", cat:"Immunology & Serology",      codes:"86003, 86038, 86148",   abn:"Medical necessity required", pama:"Diagnosis-driven" },
              { icon:"🔬", cat:"Urinalysis & Toxicology",    codes:"81000–81015, 80300",    abn:"Frequency monitored",     pama:"UA vs drug screen rules" },
              { icon:"📊", cat:"Coagulation Studies",        codes:"85610, 85730, 85732",   abn:"Diagnosis supported",     pama:"PT/PTT/INR covered" },
              { icon:"🏥", cat:"Tumor Markers & Hormones",   codes:"86300, 84153, 86316",   abn:"Diagnosis-linked required", pama:"Cancer monitoring" },
            ].map(({ icon, cat, codes, abn, pama }) => (
              <div className="lab-cat-card reveal" key={cat}>
                <div className="lab-cat-header">
                  <span className="lab-cat-icon" aria-hidden="true">{icon}</span>
                  <h3>{cat}</h3>
                </div>
                <div className="lab-cat-codes">{codes}</div>
                <div className="lab-cat-rules">
                  <span className="lab-rule-abn">ABN: {abn}</span>
                  <span className="lab-rule-pama">PAMA: {pama}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="lab-abn-callout reveal">
            <div className="lab-abn-badge">ABN Compliance</div>
            <div className="lab-abn-body">
              <p><strong>When Medicare may not cover a test</strong>, an Advance Beneficiary Notice (ABN) must be issued before the service. We track ABN requirements for every test type, apply modifier GA (ABN issued) on uncertain claims, and prevent uncollectable patient balances from missing ABN documentation.</p>
              <span className="lab-abn-modifier">Modifier GA · Modifier GX · Modifier GZ</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Lab Billing Challenges</p>
          <h2 className="reveal">Complex Lab Billing — Expertly Handled</h2>
          <p className="lab-caps-sub reveal">Clinical lab billing involves PAMA fee schedule compliance, ABN issuance, panel vs. individual code selection, NCCI bundling edits, reflex testing authorization, and molecular diagnostics prior auth — all frequently audited.</p>

          <div className="lab-caps-grid">
            {[
              { icon:"📋", n:"01", h:"PAMA-Compliant Lab Fee Schedule Billing",  t:"Under PAMA, Medicare reimburses lab tests at rates tied to weighted median private payer rates from the Clinical Lab Fee Schedule (CLFS). Accurate CPT/HCPCS code assignment and verification that billed codes reflect actual tests performed are required. We stay current on CLFS rate updates and verify PAMA-compliant coding on every Medicare lab claim." },
              { icon:"📃", n:"02", h:"ABN Management & Modifier Application",    t:"An Advance Beneficiary Notice (ABN) is required when Medicare may not cover a test. Without a properly executed ABN, the lab cannot bill the patient if Medicare denies the claim. We track ABN requirements, verify ABN completion before submission, and apply modifier GA (ABN issued), GX (voluntary ABN), or GZ (no ABN) correctly on every uncertain claim." },
              { icon:"🔗", n:"03", h:"Panel vs. Individual Code Billing — NCCI", t:"When all components of a laboratory panel are ordered, the panel CPT code must be used — not individual component codes. Unbundling panel components generates NCCI violations. Reflex testing must be physician-ordered with documented clinical indication. We verify panel completion requirements and prevent unbundling on every multi-test claim." },
              { icon:"🧬", n:"04", h:"Molecular Diagnostics Prior Authorization", t:"High-cost molecular tests (81161–81408) frequently require prior authorization with specific ICD-10 diagnosis codes and documented clinical indication. We maintain current molecular code mappings, manage prior authorizations, and ensure correct tier coding based on test complexity." },
              { icon:"📝", n:"05", h:"CLIA Certification & NPI Credentialing",   t:"Labs billing Medicare must maintain CLIA certification and be enrolled with the appropriate MAC. Organizational NPI plus supervising physician NPIs must be correctly linked. We manage the complete lab credentialing cycle, track CLIA certification renewal, and prevent claim routing failures from NPI enrollment gaps." },
              { icon:"🏷️", n:"06", h:"Diagnosis Linking & Medical Necessity",    t:"Medicare requires that every lab test be linked to a diagnosis that justifies medical necessity. Missing or incorrect ICD-10 linkage is a primary lab denial cause. We verify ICD-10 specificity and diagnosis-to-test linkage on every claim, preventing medical necessity denials before submission." },
            ].map(({ icon, n, h, t }) => (
              <article className="lab-cap-card reveal" key={n}>
                <div className="lab-cap-top">
                  <div className="lab-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="lab-cap-num">{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--navy reveal" id="process">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Revenue Control Framework</p>
          <h2 className="reveal">How We Engineer Your Lab Revenue System</h2>
          <p className="lab-process-intro reveal">End-to-end clinical lab billing infrastructure from CLIA credentialing and ABN management through PAMA-compliant claim submission and molecular diagnostics authorization.</p>
          <div className="lab-steps">
            {[
              { n:"01", h:"CLIA & NPI Credentialing Verification",        t:"Confirm CLIA certification, MAC enrollment, and NPI linkage for organizational and supervising physician NPIs before billing" },
              { n:"02", h:"Test Order & Medical Necessity Review",         t:"Link each ordered test to ICD-10 diagnosis supporting medical necessity — flag tests lacking compliant diagnosis before claim" },
              { n:"03", h:"ABN Review & Modifier Assignment",              t:"Identify tests requiring ABN documentation — apply GA/GX/GZ modifier based on ABN status before submission" },
              { n:"04", h:"Panel Code vs. Individual Component Selection", t:"Verify panel completion for panel CPT code use — prevent NCCI violations from unbundled panel components" },
              { n:"05", h:"PAMA Fee Schedule Billing",                     t:"Assign CPT/HCPCS codes matching actual tests performed — verified against current CLFS rates for all Medicare lab claims" },
              { n:"06", h:"Denial Management & ABN Appeals",               t:"Root-cause lab denial analysis, ABN compliance appeals, and medical necessity documentation appeals for denied lab claims" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="lab-step reveal" key={n}>
                <div className="lab-step-aside">
                  <div className="lab-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="lab-step-conn" />}
                </div>
                <div className="lab-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>
          <div className="lab-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="lab-process-note">For independent labs, hospital labs &amp; POLs · AAPC-certified · All 50 states</span>
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="lab-ba-grid">
            {[
              { label:"Clean Claim Rate",       num:"97",  unit:"%",   green:true,  desc:"first-pass acceptance" },
              { label:"ABN Compliance Rate",    num:"100", unit:"%",   green:false, desc:"ABN issued before uncertain claims" },
              { label:"A/R Days Reduction",     num:"30",  unit:"%↓",  green:true,  desc:"accounts receivable days" },
              { label:"NCCI Panel Denials",     num:"$0",  unit:"",    green:false, desc:"panel code rules applied correctly" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`lab-ba-card${green ? " lab-ba-card--green" : ""} reveal`} key={label}>
                <div className="lab-ba-label">{label}</div>
                <div className="lab-ba-num">{num}<span>{unit}</span></div>
                <div className="lab-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Clinical Lab Revenue Infrastructure Partner</h2>
          <p className="lab-why-intro reveal">Our clinical lab billing team understands PAMA fee schedule requirements, ABN compliance, panel code rules, NCCI bundling edits, molecular diagnostics prior auth, and the CLIA credentialing requirements that determine payment for every lab claim.</p>
          <div className="lab-why-grid">
            {[
              { icon:"📋", n:"01", h:"PAMA-Compliant Billing Specialists",     t:"CLFS rate-matched CPT/HCPCS coding on every Medicare lab claim — updated with each PAMA rate period revision." },
              { icon:"📃", n:"02", h:"ABN Management & Modifier Expertise",    t:"GA/GX/GZ modifier applied correctly based on ABN status — preventing uncollectable patient balances from ABN gaps." },
              { icon:"🔗", n:"03", h:"Panel Code & NCCI Compliance",           t:"Panel completion verified before panel code use — individual component unbundling prevented on every multi-test claim." },
              { icon:"🧬", n:"04", h:"Molecular Diagnostics Authorization",    t:"81161–81408 tier coding with prior auth management for high-cost molecular tests — ICD-10 linked for medical necessity." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Lab Coders",              t:"Every specialist holds AAPC certification with dedicated clinical lab training. CMS CLFS and NCCI guidelines applied on every claim." },
              { icon:"📝", n:"06", h:"CLIA & NPI Credentialing Support",       t:"Complete lab credentialing and MAC enrollment management — CLIA renewal tracked, NPI linkage verified before billing." },
              { icon:"🏷️", n:"07", h:"Medical Necessity Diagnosis Linking",    t:"ICD-10 linked to every test ordered — medical necessity verified before submission to prevent diagnosis-driven denials." },
              { icon:"🔍", n:"08", h:"Lab-Specific Financial Reporting",       t:"Test-level revenue tracking, PAMA rate reconciliation, ABN compliance reporting, and denial trend analysis by test type." },
            ].map(({ icon, n, h, t }) => (
              <div className="lab-why-card reveal" key={n}>
                <div className="lab-why-top">
                  <div className="lab-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="lab-why-num">{n}</span>
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
          <div className="lab-faq-layout">
            <div className="lab-faq-intro reveal">
              <p>Direct answers about PAMA compliance, ABN management, reflex testing, molecular diagnostics, and lab NPI credentialing. <Link href="/specialties/" className="lab-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="lab-faq-list">
              {[
                ["What is PAMA and how does it affect clinical lab billing?","The Protecting Access to Medicare Act (PAMA) established the Clinical Lab Fee Schedule (CLFS) based on private payer rates reported by applicable laboratories. Under PAMA, Medicare reimburses lab tests at rates tied to weighted median private payer rates, which are periodically updated based on new data collection periods. PAMA compliance requires accurate HCPCS/CPT code assignment for each test and verification that billed codes reflect actual tests performed. We stay current on CLFS rate updates and verify PAMA-compliant coding on every Medicare lab claim."],
                ["How do you manage Advance Beneficiary Notices (ABN) for lab claims?","An Advance Beneficiary Notice (ABN) is required when Medicare may not cover a lab test — either because the test lacks an accepted indication, the frequency exceeds coverage limits, or the diagnosis doesn't support medical necessity. Without a properly executed ABN, the lab cannot bill the patient if Medicare denies the claim. We track which tests require ABN documentation, verify ABN completion before claim submission, and apply the appropriate GA modifier (ABN issued) on claims where coverage is uncertain."],
                ["How do you handle reflex testing and panel billing?","Reflex testing occurs when an initial test result triggers an additional confirmatory or supplementary test. Reflex tests must be ordered by a physician (not automatically added) and documented with clinical indication. Panel billing uses panel CPT codes when all components of a panel are ordered — individual component codes are not billed separately when a panel code applies. We verify that reflex testing has physician authorization, apply correct panel codes, and prevent unbundling of panel components that generates NCCI violations."],
                ["How do you handle molecular diagnostics billing for clinical labs?","Molecular diagnostics billing requires precise CPT code selection from the 81161–81479 range based on the gene analyzed and test methodology. Many molecular tests require prior authorization, specific ICD-10 diagnosis codes, and documentation of clinical indication. We maintain current molecular pathology code mappings, manage prior authorizations for high-cost molecular tests, and ensure correct tier coding based on test complexity for every molecular diagnostics claim."],
                ["How do you manage NPI credentialing and Medicare enrollment for labs?","Clinical labs billing Medicare must be enrolled with the appropriate MAC and maintain current CLIA certification. NPI credentialing requires the lab's organizational NPI plus individual NPIs for supervising physicians. We manage the complete lab credentialing and enrollment process, track CLIA certification renewal, and ensure all billing NPIs are correctly linked in the Medicare enrollment system to prevent claim routing failures."],
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
        heading="Maximize Your Clinical Lab Revenue"
        body="Schedule a free lab billing assessment and discover how PAMA compliance, ABN management, and panel code accuracy can significantly improve your lab's collections."
        ctaLabel="Schedule Revenue Assessment"
        formId="labAssessmentForm"
        checklist={[
          "PAMA compliance audit — CLFS code accuracy review",
          "ABN process review — GA/GX/GZ modifier compliance",
          "Panel vs. individual code NCCI compliance check",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For independent labs, hospital labs & POLs · AAPC-certified coders · All 50 states served"
      />
    </main>
  );
}
