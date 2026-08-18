import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";

export default function MedicalCodingPage() {
  return (
    <main className="mc-page" id="main">

      {/* ═══ HERO ══════════════════════════════════════════════
          IMAGE: /public/mc-hero.webp  |  1536 × 900 px
      ══════════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="Medical coding services"
        heading="Medical coding services"
        intro="A wrong modifier, an unspecified diagnosis where specificity was required, a CPT code that failed an NCCI edit the scrubber missed. None of these generate a phone call. They generate a denial 30 days later, and 65% of those denials are never resubmitted. We are a medical coding company that covers ICD-10-CM, CPT, and HCPCS Level II coding for physician practices, hospital outpatient departments, ASCs, and specialty groups. AAPC and AHIMA certified coders deliver professional medical coding services with NCCI compliance on every claim and quarterly code set updates built into the workflow."
        note="50+ Specialties  |  48hr Turnaround  |  AAPC + AHIMA + HIPAA Compliant"
        cta="Get a Free Coding Assessment"
        ctaAlt="See what we cover"
        ctaAltHref="#services"
        badge="AAPC · AHIMA · NCCI"
        image="/mc-hero.webp"
        imageAlt="Medical billing coder reviewing ICD-10 and CPT coding documents at dual monitors"
        imageW={1536}
        imageH={900}
      />

      {/* ═══ FEATURE STRIP ══════════════════════════════════ */}
      <div className="mc-feature-strip">
        <div className="mc-feature-inner">
          {[
            { icon:"{ }", text:"ICD-10 + CPT + HCPCS Level II" },
            { icon:"🏅",  text:"AAPC + AHIMA Certified" },
            { icon:"✓",   text:"NCCI Edit Compliance" },
            { icon:"⏱",   text:"48hr Coding Turnaround" },
          ].map(({ icon, text }) => (
            <div className="mc-feature-item" key={text}>
              <span className="mc-feature-icon" aria-hidden="true">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ COMPLIANCE BADGES ══════════════════════════════ */}
      <div className="mc-badges-bar">
        <div className="mc-badges-inner">
          <span className="mc-badges-label">Compliance standards</span>
          <div className="mc-badges-div" aria-hidden="true" />
          {[
            { icon:"🏛️", text:"AAPC Certified" },
            { icon:"📘", text:"AHIMA Certified" },
            { icon:"🔒", text:"HIPAA Compliant" },
            { icon:"⚕️", text:"CMS Compliant" },
          ].map(({ icon, text }) => (
            <span className="mc-badge" key={text}>
              <span aria-hidden="true">{icon}</span>{text}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ WHY CODING ERRORS COST MORE ════════════════════ */}
      <section className="mc-sec mc-sec--white reveal" id="problem">
        <div className="mc-wrap">
          <p className="mc-ew">Why coding errors cost more than a denied claim</p>
          <h2>Why coding errors cost more than a denied claim</h2>

          {/* Two stat blocks — large numbers anchor each fact */}
          <div className="mc-stat-row">
            <div className="mc-stat-block">
              <div className="mc-stat-num">42<span>%</span></div>
              <div className="mc-stat-lbl">of all claim denials are caused by coding errors</div>
              <div className="mc-stat-src"><a href="https://qualigenix.com/claim-denials-2026/" target="_blank" rel="noopener">Sully.ai, 2026</a></div>
            </div>
            <div className="mc-stat-block mc-stat-block--accent">
              <div className="mc-stat-num">$6–7<span>B</span></div>
              <div className="mc-stat-lbl">annual revenue lost to coding errors across US healthcare</div>
              <div className="mc-stat-src"><a href="https://steadymedicalbilling.com/understanding-cpt-icd10-hcpcs-codes/" target="_blank" rel="noopener">steadymedicalbilling.com, 2026</a></div>
            </div>
          </div>

          <p>Coding errors are not an occasional billing problem. They are a structural one. A claim denied for a coding reason costs <a href="https://qualigenix.com/claim-denials-2026/" target="_blank" rel="noopener">$57.23 to rework on average, according to Aptarro (2026)</a>. Multiply that across a practice volume and the math gets uncomfortable quickly.</p>
          <p>The 2026 environment made it worse. CMS added <a href="https://www.medicalbillersandcoders.com/blog/icd-10-cm-updates-fy-2026/" target="_blank" rel="noopener">487 new ICD-10-CM diagnosis codes for FY 2026</a>. The AMA released <a href="https://www.tebra.com/theintake/featured/cpt-code-changes-2026/" target="_blank" rel="noopener">288 new CPT codes as part of 418 total changes</a>. The National Correct Coding Initiative underwent <a href="https://practolytics.com/blog/top-10-coding-errors-that-trigger-denials/" target="_blank" rel="noopener">its largest single-cycle update in seven years</a>. Each of those updates is a point of failure for practices whose coding workflows were not updated to match. A code that passed in 2025 can produce a CO-97 denial in 2026 because the NCCI bundling logic changed.</p>

          {/* Callout box — 65% stat */}
          <div className="mc-callout">
            <div className="mc-callout-accent" aria-hidden="true" />
            <div>
              <div className="mc-callout-stat"><a href="https://wifitalents.com/medical-billing-errors-statistics/" target="_blank" rel="noopener">65% of denied claims are never resubmitted.</a></div>
              <p className="mc-callout-sub">That is revenue earned, coded incorrectly, denied, and written off.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES COVERED ════════════════════════════════ */}
      <section className="mc-sec mc-sec--ivory reveal" id="services">
        <div className="mc-wrap">
          <p className="mc-ew">What our professional medical coding services cover</p>
          <h2>What our professional medical coding services cover</h2>

          <div className="mc-services-grid">
            {[
              {
                n:"01", icon:"📄",
                h:"ICD-10-CM and CPT code assignment",
                t:"Clinical notes, operative reports, and diagnostic documentation reviewed and coded against current CMS and AMA code sets. Quarterly HCPCS Level II updates incorporated at each release cycle, not annually.",
              },
              {
                n:"02", icon:"🛡️",
                h:"NCCI compliance and modifier management",
                t:"Every claim validated against NCCI edit pairs before submission. Modifier 25, Modifier 59, and the XE/XS/XP/XU unbundling set applied per payer-specific rules. Modifier misuse is the source of CO-97 and CO-11 denials that look like payer problems but are coding problems.",
              },
              {
                n:"03", icon:"🩺",
                h:"Clinical documentation improvement (CDI)",
                t:"When a physician note uses a non-specific diagnosis where specificity is required, or omits severity indicators that support higher-acuity coding, the coder either undercodes or creates audit risk. We identify documentation gaps before coding and generate compliant physician queries that clarify the clinical picture without suggesting codes.",
              },
              {
                n:"04", icon:"📊",
                h:"HCC and risk adjustment coding",
                t:"Hierarchical Condition Category coding links ICD-10-CM diagnosis codes to RAF scores that determine reimbursement under Medicare Advantage and value-based care contracts. An unspecified code where a more specific one exists reduces the RAF score and understates patient complexity. We code to documented specificity.",
              },
              {
                n:"05", icon:"🔍",
                h:"Retrospective coding audits",
                t:"We review a statistically valid sample of historical claims, typically 30 to 50 records per specialty, identify undercoding patterns, overcoding patterns, modifier errors, and diagnosis specificity gaps, and quantify the financial impact of each.",
              },
              {
                n:"06", icon:"🏥",
                h:"Inpatient coding and DRG optimization",
                t:"Hospital inpatient claims are assigned to MS-DRGs that determine facility reimbursement. We apply ICD-10-CM and ICD-10-PCS codes under current IPPS rules to ensure the assigned DRG reflects the full documented complexity of the encounter. Silent underpayment on high-acuity cases is prevented.",
              },
            ].map(({ n, icon, h, t }) => (
              <article className="mc-service-card reveal" key={n}>
                <div className="mc-service-top">
                  <span className="mc-service-num">{n}</span>
                  <span className="mc-service-icon" aria-hidden="true">{icon}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IN-HOUSE VS OUTSOURCED ══════════════════════════ */}
      <section className="mc-sec mc-sec--white reveal">
        <div className="mc-wrap">
          <p className="mc-ew">The cost of keeping coding in-house</p>
          <h2>The cost of keeping coding in-house</h2>

          <div className="mc-cost-compare">
            <div className="mc-cost-col mc-cost-col--left">
              <div className="mc-cost-marker">In-house</div>
              <div className="mc-cost-rows">
                <div className="mc-cost-row">
                  <div className="mc-cost-num">$50,250</div>
                  <div className="mc-cost-lbl">Median coder salary/year — <a href="https://www.bls.gov/oes/current/oes291099.htm" target="_blank" rel="noopener">BLS, May 2024 OES</a></div>
                </div>
                <div className="mc-cost-row">
                  <div className="mc-cost-num">$67,147</div>
                  <div className="mc-cost-lbl">With AAPC CPC certification — <a href="https://www.aapc.com/blog/85965-2025-salary-report/" target="_blank" rel="noopener">AAPC 2025 salary survey</a></div>
                </div>
                <div className="mc-cost-row mc-cost-row--highlight">
                  <div className="mc-cost-num">$95,000<span>+</span></div>
                  <div className="mc-cost-lbl">Fully loaded cost/year (salary + benefits + encoder + management + training)</div>
                </div>
                <div className="mc-cost-row">
                  <div className="mc-cost-num">$3K–$6K</div>
                  <div className="mc-cost-lbl">Encoder software per seat/year (3M CodeFinder, Optum360 EncoderPro)</div>
                </div>
                <div className="mc-cost-row">
                  <div className="mc-cost-num">487 + 288</div>
                  <div className="mc-cost-lbl">New ICD-10-CM + CPT codes in 2026 requiring continuous retraining</div>
                </div>
              </div>
            </div>
            <div className="mc-cost-col mc-cost-col--right">
              <div className="mc-cost-marker">Outsourced to Medbilling RCM</div>
              <div className="mc-cost-rows">
                <div className="mc-cost-row">
                  <div className="mc-cost-num">$2.50–$4.50</div>
                  <div className="mc-cost-lbl">Per chart — outpatient</div>
                </div>
                <div className="mc-cost-row">
                  <div className="mc-cost-num">$8–$18</div>
                  <div className="mc-cost-lbl">Per chart — inpatient</div>
                </div>
                <div className="mc-cost-row mc-cost-row--highlight">
                  <div className="mc-cost-num">25–58<span>%</span></div>
                  <div className="mc-cost-lbl">Reduction in total coding costs for mid-size organizations — <a href="https://medcodexhealth.com" target="_blank" rel="noopener">MedCodex Health, 2026</a></div>
                </div>
                <div className="mc-cost-row">
                  <div className="mc-cost-num">$0</div>
                  <div className="mc-cost-lbl">Encoder licensing, training overhead, turnover risk</div>
                </div>
                <div className="mc-cost-row">
                  <div className="mc-cost-num">Auto</div>
                  <div className="mc-cost-lbl">NCCI updates and code set releases managed automatically</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mc-cost-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
            <p>The case for practices that outsource medical coding is not about labor arbitrage. It is about accuracy at a cost structure the practice can predict. A 7% <Link href="/services/account-receivable-management/">denial rate</Link> on a $3 million practice equals $210,000 in reworked claims annually. If 65% of those denials are never resubmitted, the actual revenue loss is higher than that.</p>
          </div>
        </div>
      </section>

      {/* ═══ SPECIALTY COMPLEXITY ════════════════════════════ */}
      <section className="mc-sec mc-sec--navy reveal">
        <div className="mc-wrap">
          <p className="mc-ew mc-ew--gold">Specialty coding complexity we manage</p>
          <h2>Specialty coding complexity we manage</h2>

          <div className="mc-spec-grid">
            {[
              {
                icon:"🦴", sp:"Orthopedics and spine",
                t:"Global surgical period modifier management (58, 78, 79) for staged procedures and complications. Per-level spinal add-on code stacking rules. Total joint replacement CPT codes expanded on the ASC Covered Procedures List for 2026. Implant supply capture tied to operative reports.",
              },
              {
                icon:"💊", sp:"Oncology",
                t:"Chemotherapy administration hierarchy (96413, 96415, 96417): primary drug first, sequential infusions as add-ons, concurrent infusions coded by the hour. J-code drug unit reconciliation against the administered dose. Waste documentation for high-cost drugs where partial vials are discarded.",
              },
              {
                icon:"🧠", sp:"Behavioral health",
                t:"Time-based psychotherapy code selection (90832, 90834, 90837) by documented session length. Same-day E/M and psychotherapy add-on pairing under Modifier 25. Panel availability verification affects whether a provider can bill as in-network. Coding reflects the same contract status.",
              },
              {
                icon:"🏥", sp:"Hospital outpatient and ASC",
                t:<>APC grouping under the OPPS payment system. Multiple procedure reduction (100%/50% rule). Pass-through versus packaged implant billing under HCPCS C-codes. CARC 96 prevention through correct implant classification before submission. See: <Link href="/services/asc-billing/">ASC billing services</Link>.</>,
              },
              {
                icon:"📋", sp:"HCC and Medicare Advantage",
                t:"ICD-10-CM diagnosis codes mapped to HCC categories determine RAF scores. An unspecified diagnosis where a more specific code exists understates the patient's risk score and reduces reimbursement. We code to documented specificity on every encounter.",
              },
              {
                icon:"🔭", sp:"Radiology and diagnostic imaging",
                t:"Supervision and interpretation component coding: modifier TC for technical component, modifier 26 for professional interpretation. Global billing where both components are billed together. Interventional radiology coding combines imaging guidance codes with procedural codes. NCCI edits frequently apply.",
              },
            ].map(({ icon, sp, t }) => (
              <article className="mc-spec-card reveal" key={sp}>
                <div className="mc-spec-icon" aria-hidden="true">{icon}</div>
                <h3>{sp}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EHR SYSTEMS ════════════════════════════════════ */}
      <section className="mc-sec mc-sec--ivory reveal">
        <div className="mc-wrap">
          <p className="mc-ew">Works with your existing systems</p>
          <h2>Works with your existing systems</h2>
          <p className="mc-sys-lead">Our healthcare coding services connect to your existing systems. No system replacement. No disruption to clinical workflows. Secure chart access, coded records returned to your EHR within the turnaround window, and coding metrics reported back to your billing team.</p>
          <div className="mc-sys-strip">
            {["Epic","Cerner","eClinicalWorks","Athenahealth","AdvancedMD","Kareo","NextGen","30+ others"].map(s => (
              <span className="mc-sys-tag" key={s}>{s}</span>
            ))}
          </div>
          <div className="mc-sys-cta">
            <Link href="/request-free-audit/" className="pg-btn pg-btn--gold">Get a Free Coding Assessment</Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ════════════════════════════════════════════ */}
      <section className="mc-sec mc-sec--white reveal" id="faq">
        <div className="mc-wrap">
          <p className="mc-ew">Medical coding questions we get asked</p>
          <h2>Medical coding questions we get asked</h2>
          <div className="mc-faq-layout">
            <div className="mc-faq-intro">
              <p>Direct answers for practices and billing teams evaluating medical coding outsourcing.</p>
            </div>
            <div className="mc-faq-list">
              {[
                ["What is medical coding outsourcing?",
                 "Medical coding outsourcing is the practice of delegating ICD-10, CPT, and HCPCS code assignment to an external team of certified coders rather than handling it in-house. The practice or facility securely transmits clinical documentation to the coding vendor, receives coded records back within an agreed turnaround window, and uses those codes to generate and submit claims. Outsourcing eliminates the overhead of recruiting, training, and retaining in-house coders while maintaining compliance with annual code set updates."],
                ["How much does it cost to outsource medical coding?",
                 "Per-chart pricing typically runs $2.50 to $4.50 for outpatient work and $8.00 to $18.00 for inpatient work, depending on specialty complexity and volume. Fully loaded in-house coder costs typically exceed $95,000 per coder annually when salary, benefits, encoder licensing, management, and training are included. For mid-size organizations, outsourcing can reduce total coding costs by 25 to 58%, according to a 2026 CFO benchmark analysis by MedCodex Health."],
                ["What are the benefits of outsourcing medical coding?",
                 "Professional medical coding services provide access to specialty-trained certified coders, eliminate recruitment and retention costs, keep coding current with quarterly NCCI updates and annual code set releases, and convert fixed staffing overhead into predictable per-chart costs. Coding accuracy improves when coders work only within their specialty rather than handling mixed-specialty queues."],
                ["What certifications should a medical coding company have?",
                 "Look for AAPC-certified coders holding CPC (Certified Professional Coder) credentials for outpatient and physician work, and AHIMA-certified coders holding CCS (Certified Coding Specialist) credentials for inpatient and hospital coding. Coders working in specialty areas (risk adjustment, inpatient, outpatient facilities) should hold the corresponding specialty credential (CRC, CIC, or COC). HIPAA compliance and a signed Business Associate Agreement are non-negotiable baseline requirements."],
                ["What is the difference between medical coding and medical billing?",
                 "Medical coding translates clinical documentation into standardized alphanumeric codes: ICD-10-CM for diagnoses, CPT for procedures, and HCPCS for supplies and certain services. Medical billing uses those codes to construct claims and submit them to payers for reimbursement. Coding errors create billing problems. A wrong code or missing modifier results in a denied claim that the billing team then has to work. The two functions are distinct but directly connected."],
                ["What types of medical coding exist?",
                 "The three primary code sets are ICD-10-CM (diagnosis codes, maintained by CDC/NCHS), CPT (Current Procedural Terminology, maintained by AMA), and HCPCS Level II (supplies, drugs, and non-physician services, maintained by CMS). Within those code sets, distinct coding disciplines exist: outpatient facility coding (APC/OPPS), inpatient facility coding (MS-DRG/IPPS), professional fee coding (profee), HCC/risk adjustment coding for Medicare Advantage, and specialty-specific coding for radiology, oncology, behavioral health, and surgical specialties."],
                ["Is outsourcing medical coding HIPAA-compliant?",
                 "Yes, when the vendor operates under a signed Business Associate Agreement (BAA) and maintains HIPAA-compliant data handling protocols: encrypted transmission, role-based access controls, and secure coding environments. A BAA is not optional. It is a legal requirement under HIPAA for any third party that handles protected health information on your behalf."],
                ["How do I get started?",
                 "Request a free coding assessment. We review a sample of your current claims for coding accuracy, modifier compliance, and NCCI edit exposure, then deliver a written report identifying the error patterns costing you the most revenue. No obligation. You keep the report whether or not you work with us."],
              ].map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING CTA BAND ════════════════════════════════ */}
      <div className="mc-closing-band">
        <div className="mc-closing-inner">
          <div>
            <p className="mc-ew mc-ew--gold" style={{marginBottom:"12px"}}>Coded right. Paid faster.</p>
            <h2>Coded right. Paid faster.</h2>
            <p>Coding errors that prevent payment today were avoidable at the time the code was assigned. The 2026 code environment: 487 new ICD-10-CM codes, 288 new CPT codes, the largest NCCI update in seven years. It makes in-house coding accuracy harder to maintain than it was in 2025. Our healthcare coding services track those changes so your practice does not have to.</p>
          </div>
          <div className="mc-closing-actions">
            <Link href="/request-free-audit/" className="pg-btn pg-btn--gold">Get a Free Coding Assessment</Link>
            <p className="mc-closing-note">AAPC + AHIMA certified · 50+ specialties · All 50 states</p>
          </div>
        </div>
      </div>

      {/* ═══ ASSESSMENT CTA ═════════════════════════════════ */}
      <CtaSection
        eyebrow="Ready when you are"
        heading="Request a Free Coding Assessment."
        body="We review a sample of your current claims for coding accuracy, modifier compliance, and NCCI edit exposure, then deliver a written report identifying the error patterns costing you the most revenue. No obligation. You keep the report whether or not you work with us."
        ctaLabel="Get a Free Coding Assessment"
        formId="mcAssessmentForm"
        checklist={[
          "Coding accuracy review across CPT, ICD-10-CM, and HCPCS",
          "NCCI edit exposure and modifier compliance check",
          "Denial pattern analysis by code and payer",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="AAPC + AHIMA certified · NCCI compliant · All 50 states"
      />

    </main>
  );
}
