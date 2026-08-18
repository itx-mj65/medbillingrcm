import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";

export default function LaboratoryBillingPage() {
  return (
    <main className="lab-page" id="main">

      {/* ═══ HERO — shared PageHero component ══════════════════
          IMAGE PLACEHOLDER → replace with real image when ready
          File:    /public/lab-hero.webp
          Size:    1536 × 900 px
          Subject: Lab technician at centrifuge or microscope in a
                   modern clinical laboratory — sterile environment,
                   professional scrubs, lab equipment visible.
          AI prompt: "Clinical laboratory technician in modern lab
                     reviewing diagnostic samples, centrifuge and
                     microscope visible, professional healthcare
                     setting, navy and green tones, photorealistic,
                     no text overlay, wide format"
      ═══════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="Laboratory billing services"
        heading="Laboratory billing services"
        intro="Laboratory billing runs on volume: hundreds or thousands of claims per week, most of them low-dollar, each requiring lab-specific CPT, HCPCS, or PLA coding that general billers do not handle. At lab margins, a single coding error on a routine panel costs pennies to make and weeks to fix."
        note="1,000+ Payers  |  48hr Denial Turnaround  |  PAMA + CLIA + HIPAA Compliant"
        cta="Get a Free Revenue Assessment"
        ctaAlt="See what we cover"
        ctaAltHref="#scope"
        badge="PAMA · CLIA · HIPAA"
        image="/lab-hero.webp"
        imageAlt="Laboratory technician reviewing diagnostic samples with centrifuge and microscope in modern clinical laboratory"
        imageW={1536}
        imageH={900}
      />

      {/* ═══ PROOF STRIP ════════════════════════════════════ */}
      <div className="lab-proof">
        <div className="lab-proof-inner">
          <div className="lab-proof-item">1,000+ Payers</div>
          <div className="lab-proof-item">48hr Denial Turnaround</div>
          <div className="lab-proof-item">PAMA Compliant</div>
          <div className="lab-proof-item">CLIA + HIPAA Compliant</div>
        </div>
      </div>

      {/* ═══ COMPLIANCE BADGES ══════════════════════════════ */}
      <div className="lab-badges-bar">
        <div className="lab-badges-inner">
          <span className="lab-badges-label">Compliance standards</span>
          <div className="lab-badges-divider" aria-hidden="true" />
          {[
            { icon:"🏛️", text:"CAP Accredited" },
            { icon:"🧬", text:"CLIA Compliant" },
            { icon:"📋", text:"NCCI Edits Applied" },
            { icon:"🔒", text:"HIPAA Compliant" },
          ].map(({ icon, text }) => (
            <span className="lab-badge" key={text}>
              <span className="lab-badge-icon" aria-hidden="true">{icon}</span>
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ WHY LAB BILLING BREAKS DIFFERENTLY ════════════ */}
      <section className="lab-sec lab-sec--white reveal" id="why">
        <div className="lab-wrap">
          <p className="lab-ew">Why laboratory billing breaks differently</p>
          <h2>Why laboratory billing breaks differently</h2>

          {/* Two-column comparison card */}
          <div className="lab-compare">
            <div className="lab-compare-col lab-compare-col--left">
              <div className="lab-compare-head">Physician billing</div>
              <p>Physician practices process 20 to 60 claims per day at $150 to $500 each. A denied claim justifies the $25 to $57 in rework cost.</p>
            </div>
            <div className="lab-compare-col lab-compare-col--right">
              <div className="lab-compare-head">Laboratory billing</div>
              <p>Labs process hundreds of claims daily at $10 to $50 each. A denied $15 CBC panel is not worth reworking, so it gets written off. Multiply that across a month and the leak is material.</p>
            </div>
          </div>

          <p>The coding is structurally different too. Labs work with CPT codes (80047 through 89398), HCPCS, and Proprietary Laboratory Analyses (PLA) codes that update quarterly through the <a href="https://pgmbilling.com/laboratory-medical-billing/" target="_blank" rel="noopener">AMA</a>. The AMA estimates that more than 50% of laboratory claims ship with incorrect codes. Factor in CLIA tier requirements, payer-specific medical necessity rules, Medically Unlikely Edit (MUE) caps, and the technical-versus-professional component split, and general billing expertise falls short.</p>
        </div>
      </section>

      {/* ═══ PAMA SECTION ════════════════════════════════════ */}
      <section className="lab-sec lab-sec--navy reveal">
        <div className="lab-wrap">
          <p className="lab-ew lab-ew--gold">PAMA: $4 billion in cuts and counting</p>
          <h2>PAMA: $4 billion in cuts and counting</h2>

          {/* Three stat cards */}
          <div className="lab-pama-stats">
            <div className="lab-pama-card">
              <div className="lab-pama-num">$4B+</div>
              <div className="lab-pama-lbl">Cut since 2018</div>
              <div className="lab-pama-src"><a href="https://www.ascp.org/news/news-details/2026/02/09/medicare-laboratory-payment-cuts-averted-for-2026" target="_blank" rel="noopener">ASCP and NILA</a></div>
            </div>
            <div className="lab-pama-card">
              <div className="lab-pama-num">30%</div>
              <div className="lab-pama-lbl">Cumulative reduction on common tests</div>
              <div className="lab-pama-src"><a href="https://adsc.com/blog/the-2026-mid-year-lab-reimbursement-review" target="_blank" rel="noopener">2026 Mid-Year Review</a></div>
            </div>
            <div className="lab-pama-card lab-pama-card--accent">
              <div className="lab-pama-num">15%</div>
              <div className="lab-pama-lbl">Annual cap starting 2027</div>
              <div className="lab-pama-src"><a href="https://apsmedbill.com/whitepapers/spending-package-officially-delays-pama-cuts" target="_blank" rel="noopener">Consolidated Appropriations Act 2026</a></div>
            </div>
          </div>

          <p>Since 2018, PAMA has reduced Medicare lab payments by over $4 billion according to <a href="https://www.ascp.org/news/news-details/2026/02/09/medicare-laboratory-payment-cuts-averted-for-2026" target="_blank" rel="noopener">ASCP and NILA</a>. Common tests like CBC, basic metabolic panel, and lipid panels have seen cumulative reductions of 30% or more. The <a href="https://apsmedbill.com/whitepapers/spending-package-officially-delays-pama-cuts" target="_blank" rel="noopener">Consolidated Appropriations Act of 2026</a> delayed the next round of 15% annual cuts through December 31, 2026, but reductions resume in 2027 based on private payer data labs are reporting to CMS during the May 1 through July 31, 2026, window.</p>
          <p>We help labs navigate PAMA data reporting: identifying whether your lab meets the applicable laboratory threshold, collecting the required HCPCS codes, private payer rates, and test volumes, and submitting within the <a href="https://www.cap.org/advocacy/laboratory-oversight-and-regulation/protecting-access-to-medicare-act-for-laboratories" target="_blank" rel="noopener">CMS deadline</a>.</p>
        </div>
      </section>

      {/* ═══ SCOPE — DIAGNOSTIC BILLING SERVICES ════════════ */}
      <section className="lab-sec lab-sec--ivory reveal" id="scope">
        <div className="lab-wrap">
          <p className="lab-ew">What we cover</p>
          <h2>What our diagnostic billing services cover</h2>

          {/* IMAGE PLACEHOLDER — scope section
              File:   /public/lab-scope.webp
              Size:   1100 × 600 px
              Subject: Laboratory billing team reviewing CPT coding
                       sheets and claim reports, professional office
                       environment, dual monitors showing billing data.
              AI prompt: "Medical billing team reviewing laboratory
                         claim reports and CPT coding documentation
                         on dual monitors, professional office setting,
                         healthcare RCM environment, photorealistic" */}
          <div className="lab-scope-img">
            <Image src="/lab-scope.webp" alt="Medical billing team reviewing laboratory CPT coding documentation and claim reports on dual monitors" width={1100} height={600} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top"}} />
          </div>

          <p>We are a lab billing company built for that reality. Our laboratory billing services cover the full revenue cycle for clinical labs, hospital outreach, reference labs, molecular diagnostics, toxicology, and pathology practices. Coding, claim submission, denial management, PAMA compliance, and CLFS reporting, handled by a team that does lab billing exclusively.</p>
          <p>Coding is where most lab revenue is won or lost. Clinical laboratory billing requires tracking quarterly PLA code updates, monitoring LCD and NCD changes for medical necessity determinations, and verifying MolDX Z-code registration for molecular assays where required by Medicare Administrative Contractors and commercial payers like <a href="https://journals.asm.org/doi/10.1128/jcm.00666-25" target="_blank" rel="noopener">UnitedHealthcare and Humana</a>. When a test does not have an established code, we identify the correct unlisted code and documentation path.</p>

          {/* Scope items */}
          <div className="lab-scope-grid">
            {[
              { n:"01", h:"Insurance AR recovery",          t:<>Insurance AR recovery across Medicare, Medicaid, and 1,000+ payers. See also: <Link href="/services/account-receivable-management/">AR recovery services</Link>.</> },
              { n:"02", h:"CPT, HCPCS & PLA coding",        t:"Lab-specific CPT codes (80047–89398), HCPCS Level II, and quarterly PLA code updates applied by coders who work lab claims exclusively." },
              { n:"03", h:"PAMA & CLFS reporting",          t:"We identify whether your lab meets the applicable laboratory threshold, collect required data, and submit within the CMS window." },
              { n:"04", h:"Denial management",              t:"Root-cause analysis and resubmission within 48 hours. Denial patterns tracked across your full claim volume to prevent recurrence." },
              { n:"05", h:"MolDX Z-code registration",      t:"Z-code registration through the MolDX program for molecular assays and prior authorization management for genetic panels." },
              { n:"06", h:"Coverage & credentialing",       t:<>Payer enrollment and re-credentialing kept current. See: <Link href="/services/medical-credentialing/">credentialing services</Link> and <Link href="/services/coverage-discovery/">coverage discovery</Link>.</> },
            ].map(({ n, h, t }) => (
              <article className="lab-scope-card reveal" key={n}>
                <div className="lab-scope-num">{n}</div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LAB TYPES — tabbed cards ═══════════════════════ */}
      <section className="lab-sec lab-sec--white reveal">
        <div className="lab-wrap">
          <p className="lab-ew">Built for every type of laboratory</p>
          <h2>Built for every type of laboratory</h2>
          <div className="lab-types-grid">
            {[
              {
                icon: "🧪",
                h: "Clinical and reference labs",
                t: "High volumes across routine panels (CBC, BMP, CMP, lipids). We manage each claim individually, not in batches, so coding and eligibility errors are caught before submission.",
              },
              {
                icon: "🏥",
                h: "Hospital outreach labs",
                t: "The 72-hour rule bundles outpatient lab services performed within 72 hours of an inpatient admission. We flag these before submission to prevent bundling denials and coordinate between hospital and lab billing departments where most outreach revenue leaks occur.",
              },
              {
                icon: "🔬",
                h: "Molecular diagnostics and genetic testing",
                t: "PLA codes for proprietary tests issue quarterly, and many advanced molecular tests require manual rate negotiation with payers who have no established fee schedule. We manage Z-code registration through the MolDX program and handle prior authorization for genetic panels to prevent post-service denials.",
              },
              {
                icon: "⚗️",
                h: "Toxicology labs",
                t: "Payer scrutiny around medical necessity is intense, especially for confirmatory testing beyond the initial presumptive screen. We verify that each claim stays within Medically Unlikely Edit (MUE) unit caps and documents the clinical rationale tying the test to the appropriate diagnosis.",
              },
              {
                icon: "🔭",
                h: "Pathology billing",
                t: "Pathology uses dual coding: anatomic (CPT 88000 through 88399) and clinical (80047 through 85999). Surgical pathology levels (88300 through 88309), immunohistochemistry (88342 through 88346), and cytopathology (88104 through 88199) each require complexity-based coding. We manage the technical component (TC) and professional component (modifier 26) split on every interpretation, one of the most common sources of immediate denials in pathology.",
              },
            ].map(({ icon, h, t }) => (
              <article className="lab-type-card reveal" key={h}>
                <div className="lab-type-icon">{icon}</div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LIS / EHR SYSTEMS ══════════════════════════════ */}
      <section className="lab-sec lab-sec--navy reveal">
        <div className="lab-wrap">
          <p className="lab-ew lab-ew--gold">Works with your existing lab systems</p>
          <h2>Works with your existing lab systems</h2>
          <p>You keep your LIS and EHR. We work inside your existing setup with integrations scoped during the free revenue assessment. See also: <Link href="/services/medical-coding/">medical coding services</Link>.</p>
          <div className="lab-ehr-strip">
            {["Orchard","Sunquest","SCC SoftLab","Epic Beaker","Athenahealth","eClinicalWorks","NextGen","Kareo","LabWare","LabVantage","MEDITECH","Cerner PathNet","30+ others"].map(s => (
              <span className="lab-ehr-tag" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MID CTA BAND ════════════════════════════════════ */}
      <div className="lab-cta-band">
        <div className="lab-cta-inner">
          <div>
            <h2>Your lab runs the tests. We collect the revenue.</h2>
            <p>The free revenue assessment covers your denial rate by root cause, coding accuracy against current CPT and PLA code sets, PAMA reporting status, and estimated recoverable revenue. You keep the findings whether or not you work with us.</p>
          </div>
          <Link href="/request-free-audit/" className="pg-btn pg-btn--gold">Get a Free Revenue Assessment</Link>
        </div>
      </div>

      {/* ═══ CLOSING IMAGE BANNER ════════════════════════════
          IMAGE PLACEHOLDER → replace when real image ready
          File:   /public/lab-closing.webp
          Size:   1536 × 480 px (wide banner)
          Subject: Wide shot of laboratory or pathology department —
                   professional staff, organized workstations, clinical
                   precision setting. No identifiable faces required.
          AI prompt: "Wide panoramic shot of modern clinical laboratory
                     department, organized workstations, medical equipment,
                     sterile professional environment, navy and green
                     color palette, photorealistic, no text overlay" */}
      <div className="lab-closing-banner">
        <Image src="/lab-closing.webp" alt="Modern clinical laboratory department with organized workstations and medical equipment" width={1536} height={480} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%"}} />
      </div>

      {/* ═══ FAQ ═════════════════════════════════════════════ */}
      <section className="lab-sec lab-sec--white reveal" id="faq">
        <div className="lab-wrap">
          <p className="lab-ew">Laboratory billing questions we get asked</p>
          <h2>Laboratory billing questions we get asked</h2>
          <div className="lab-faq-layout">
            <div className="lab-faq-intro">
              <p>Direct answers for labs, pathology practices, and diagnostic centers evaluating a billing partner.</p>
            </div>
            <div className="lab-faq-list">
              {[
                ["What makes laboratory billing different from physician billing?",
                 "Labs process high volumes of low-dollar claims where the cost of reworking a denial often exceeds the claim value. Lab coding involves CPT, HCPCS, and PLA codes that update quarterly, payer-specific medical necessity rules, CLIA tier requirements, MUE unit caps, and technical-versus-professional component splits that physician billing does not deal with."],
                ["What is PAMA and how does it affect my lab?",
                 "PAMA is the Protecting Access to Medicare Act. It restructured Medicare lab payments based on private payer rate data. Since 2018, PAMA has cut over $4 billion in Medicare lab payments. The next round of 15% annual reductions begins in 2027 based on data labs are reporting to CMS during the May through July 2026 window."],
                ["What types of laboratories do you work with?",
                 "Independent clinical labs, hospital outreach programs, reference labs, molecular diagnostics and genetic testing labs, toxicology labs, and pathology practices. Each lab type has distinct coding, compliance, payer, and regulatory requirements that we manage as part of the billing engagement, not as a generic add-on."],
                ["How do you handle pathology billing specifically?",
                 "Pathology billing uses dual coding systems: anatomic pathology (CPT 88000 through 88399) and clinical pathology (80047 through 85999). We code surgical pathology levels, immunohistochemistry, and cytopathology by complexity, and manage the technical component (TC) and professional component (modifier 26) split on every interpretation to prevent modifier-related denials."],
                ["How do you handle lab claim denials?",
                 "We analyze each denial by root cause, whether that is a coding error, missing modifier, eligibility gap, or medical necessity rejection. We correct the issue and resubmit or appeal within 48 hours. We also track denial patterns across your claim volume to fix recurring problems at the workflow level, not one claim at a time."],
                ["Do you handle PAMA data reporting?",
                 "Yes. We help labs determine whether they meet the applicable laboratory threshold, collect the required HCPCS codes, private payer rates, and test volumes, and submit within the CMS reporting window. The current period runs May 1 through July 31, 2026, using data collected from January through June 2025."],
                ["What coding systems do you use for laboratory and diagnostic billing?",
                 "CPT codes for standard lab and diagnostic tests, HCPCS for supplies and certain services, and PLA codes for proprietary tests. PLA codes update quarterly through the AMA. For molecular assays, we also manage MolDX Z-code registration where required by Medicare Administrative Contractors and commercial payers."],
                ["How do I get started?",
                 "Request a free revenue assessment. We review your current denial rate, coding accuracy, payer mix, and PAMA exposure, then deliver a written report with your findings, estimated recoverable revenue, and specific recommendations for your lab type. No obligation, no upfront cost, and you keep the report whether or not you work with us."],
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

      {/* ═══ ASSESSMENT — shared CtaSection component ════════ */}
      <CtaSection
        eyebrow="Ready when you are"
        heading="Your lab runs the tests. We collect the revenue."
        body="The free revenue assessment covers your denial rate by root cause, coding accuracy against current CPT and PLA code sets, PAMA reporting status, and estimated recoverable revenue. You keep the findings whether or not you work with us."
        ctaLabel="Get a Free Revenue Assessment"
        formId="labAssessmentForm"
        checklist={[
          "Denial rate by root cause across your claim volume",
          "Coding accuracy against current CPT and PLA code sets",
          "PAMA reporting status and filing window exposure",
          "Estimated recoverable revenue",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="PAMA · CLIA · HIPAA compliant · All 50 states"
      />



    </main>
  );
}
