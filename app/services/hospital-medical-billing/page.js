import Image from "next/image";
export default function HospitalMedicalBillingPage() {
  return (
    <main id="main" className="level1">

        {/* ── HERO ── */}
        <section className="hero" id="top">
          <div className="shell">
            <div className="hero-copy">
              <p className="eyebrow">Hospital revenue cycle management</p>
              <h1>Hospital medical billing services for inpatient and outpatient care</h1>
              {/* mobile image */}
              <div className="hero-media mobile">
                <Image src="/hospital-hero.png" alt="Hospital revenue-cycle leaders reviewing an EHR and financial performance dashboard" width={1536} height={1024} sizes="(max-width:900px) 92vw, 0px" priority quality={85} style={{objectFit:"cover",objectPosition:"52% center"}} />
              </div>
              <p className="hero-intro">Hospital billing is not physician billing with a bigger claim form. A hospital bills for the facility: the bed, the operating room, the drugs, the imaging. Admitted patients pay under MS-DRG, outpatient visits pay under APC, and both ride on a UB-04. When a claim in either system is coded short or denied, that is revenue the hospital already earned. We handle the facility side end to end, and we report what actually landed at the payer.</p>
              <div className="hero-action">
                <a className="btn gold" href="#assessment">Get a Free Revenue Assessment</a>
              </div>
              <p className="hero-note">Institutional billing built around status, documentation, payer rules, and the payment that actually lands.</p>
            </div>
            {/* desktop image */}
            <div className="hero-media">
              <Image src="/hospital-hero.png" alt="Hospital revenue-cycle leaders reviewing an EHR and financial performance dashboard" fill sizes="(max-width:900px) 0px, (max-width:1160px) 45vw, 590px" priority quality={85} style={{objectFit:"cover",objectPosition:"52% center"}} />
            </div>
          </div>
        </section>

        {/* ── PROOF STRIP ── */}
        <div className="proof-strip">
          <div className="shell proof-grid">
            <div className="proof-item">97% clean claim rate, measured at the payer</div>
            <div className="proof-item">Same week onboarding</div>
            <div className="proof-item">No setup fees</div>
            <div className="proof-item">All 50 states</div>
          </div>
        </div>

        {/* ── WHERE REVENUE GOES MISSING ── */}
        <section className="level2 reveal" id="where-hospital-revenue-goes-missing-between-the-bedside-and-the-bank">
          <h2 data-eyebrow="The hidden gap">Where hospital revenue goes missing between the bedside and the bank</h2>
          <p>Every claim passes through registration, coding, charge capture, and submission before a payer sees it. A mistake at any point becomes a denial, and a denial costs money to work twice.</p>
          <p>Roughly <strong>86% of initial denials are avoidable</strong> (<a href="https://www.mgma.com/" target="_blank" rel="noopener">MGMA</a>). Medicare Advantage plans deny nearly <strong>17% of claims on first submission</strong> (<a href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2024.01485" target="_blank" rel="noopener">Health Affairs, 2024</a>). That gap is not a rounding error. It is cash that should have closed the month.</p>
          <p>We built our hospital revenue cycle management to close that gap before it opens. Our hospital medical billing services cover the facility side of care from registration to the last dollar collected. As a hospital billing company, we report the number that matters to the payer, not the one that looks best on a dashboard.</p>
        </section>

        {/* ── TWO PAYMENT SYSTEMS ── */}
        <section className="level2 reveal" id="two-payment-systems-under-one-roof">
          <h2 data-eyebrow="One roof, two systems">Two payment systems under one roof</h2>
          <p>Inpatient and outpatient billing are not two versions of the same job. They use different claim forms, different code sets, and different payment systems, and they break in different places. A team that treats them the same loses money on both.</p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Inpatient billing</th>
                  <th>Outpatient billing</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Claim form</td><td>UB-04</td><td>UB-04 or CMS-1500</td></tr>
                <tr><td>Payment system</td><td>MS-DRG under IPPS, one bundled payment per admission</td><td>APC under OPPS, paid per service line</td></tr>
                <tr><td>Code sets</td><td>ICD-10-CM diagnoses plus ICD-10-PCS procedures</td><td>ICD-10-CM diagnoses plus CPT and HCPCS</td></tr>
                <tr><td>Where it breaks most</td><td>DRG assignment, complication capture, present-on-admission indicators</td><td>Modifier errors, medical necessity, observation vs admission status</td></tr>
                <tr><td>What we verify first</td><td>The documentation supports the DRG before the claim is built</td><td>Status, modifiers, and place of service before submission</td></tr>
              </tbody>
            </table>
          </div>
          <p>The status trap catches hospitals more than anything else here. A patient can spend two nights in a hospital bed and still bill as outpatient observation under Medicare Part B. Get the status wrong and the claim is wrong from the first line. We check it against the two-midnight rule before coding, not after a denial.</p>
          <p>For the outpatient surgical side, our <a href="/services/asc-billing/">ASC billing team</a> handles APC grouping and modifier work. Our <a href="/services/medical-coding/">medical coding team</a> carries both the inpatient and outpatient code sets.</p>
        </section>

        {/* ── RCM FRAMEWORK ── */}
        <section className="level2 reveal" id="how-we-hold-a-hospitals-revenue-cycle-together">
          <h2 data-eyebrow="Revenue Control Framework">How we hold a hospital&apos;s revenue cycle together</h2>
          <p>Every hospital account runs inside our Revenue Control Framework, the five-phase method behind every Medbilling RCM engagement, from the opening revenue audit through to monthly revenue intelligence. On the hospital side, our hospital revenue cycle management work falls into three stages, each built to catch revenue before it leaks rather than chase it after.</p>
          <div className="rcm-visual">
            <div className="rcm-flow">
              <article className="rcm-step" data-step="01">
                <strong>Before the patient is seen</strong>
                <p><a href="/services/medical-credentialing/">Provider credentialing</a>, patient scheduling, pre-registration, insurance verification, <a href="/services/coverage-discovery/">eligibility and benefits verification</a>, and patient registration.</p>
              </article>
              <article className="rcm-step" data-step="02">
                <strong>While the claim is built</strong>
                <p>Charge capture, and coding and billing. This is the stage where a DRG is won or lost, so every inpatient chart is reviewed for documentation completeness before the claim goes out.</p>
              </article>
              <article className="rcm-step" data-step="03">
                <strong>Getting paid and keeping it</strong>
                <p>Claims submission, <a href="/services/account-receivable-management/">accounts receivable management</a>, denial management, patient collections, revenue reporting, and patient follow-up.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ── FACILITY TYPES ── */}
        <section className="level2 reveal" id="every-facility-bills-differently-and-were-built-for-that">
          <h2 data-eyebrow="Configured by facility">Every facility bills differently, and we&apos;re built for that</h2>
          <p>We bill for hospitals and facilities of every type. What changes from one to the next is the payment model underneath, and that is what we configure for.</p>
          <blockquote>
            <p>Acute care hospitals pay under IPPS by DRG.</p>
            <p>Critical access hospitals bill on a cost basis, not by DRG.</p>
            <p>Skilled nursing facilities pay a per-diem rate under PDPM.</p>
            <p>Long-term acute care, inpatient rehab, ambulatory surgery, and behavioral health each carry their own forms and thresholds.</p>
          </blockquote>
          <p>We match the setup to the facility instead of forcing one workflow across all of them, and we tie hospital work back to the <a href="/specialties/">specialties</a> each facility runs.</p>
        </section>

        {/* ── REVENUE SLIPS ── */}
        <section className="level2 reveal" id="the-places-hospital-revenue-quietly-slips-and-how-we-close-each-one">
          <h2 data-eyebrow="Revenue integrity">The places hospital revenue quietly slips, and how we close each one</h2>
          <section className="level3" id="drg-downgrades-and-missing-complications">
            <h3>DRG downgrades and missing complications</h3>
            <p>When a chart does not document a complication or comorbidity of the care actually involved, the claim drops to a lower-paying DRG. The difference is real money. A sepsis admission coded without its major complication can pay roughly <a href="https://www.aapc.com/blog/93928-what-the-fy-2026-ipps-final-rule-means-for-hospitals/" target="_blank" rel="noopener">$6,000 less</a>. We review every inpatient chart for that documentation before coding, not after the payment posts short.</p>
          </section>
          <section className="level3" id="inpatient-stays-that-should-have-been-outpatient">
            <h3>Inpatient stays that should have been outpatient</h3>
            <p><a href="https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/Downloads/clm104c01.pdf" target="_blank" rel="noopener">Condition Code 44</a> lets a hospital correct an admission to outpatient status when utilization review finds the inpatient criteria were not met. It only works before discharge and with the right approvals. Applied late, it becomes an audit flag instead of a fix. We catch status problems while the patient is still in the building.</p>
          </section>
          <section className="level3" id="records-requests-with-a-clock-on-them">
            <h3>Records requests with a clock on them</h3>
            <p>A Recovery Audit Contractor request gives a hospital <a href="https://www.cms.gov/research-statistics-data-and-systems/monitoring-programs/medicare-ffs-compliance-programs/recovery-audit-program" target="_blank" rel="noopener">45 days to respond</a>, and a late response becomes an automatic recoupment. We keep documentation audit-ready for every coded encounter, so a request is a filing task rather than a fire drill.</p>
          </section>
          <section className="level3" id="ar-that-ages-past-the-benchmark">
            <h3>AR that ages past the benchmark</h3>
            <p>HFMA treats gross days in AR under 40 as the target and 50 or more as a sign of a structural collection problem. When accounts sit, cash sits. Our <a href="/services/account-receivable-management/">AR team</a> works aged inpatient accounts by payer-specific escalation rather than working the list oldest-first.</p>
          </section>
        </section>

        {/* ── DRG PAYMENT (split-media) ── */}
        <section className="level2 split-media reveal" id="getting-paid-for-the-care-that-was-actually-delivered">
          <div className="section-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hospital-coding.png" alt="Inpatient coding specialist validating hospital documentation and DRG assignment" />
          </div>
          <div className="section-copy">
            <h2 data-eyebrow="Documentation to payment">Getting paid for the care that was actually delivered</h2>
            <p>Each inpatient admission groups into a DRG that sets the payment. The FY2026 base rate is <a href="https://www.aapc.com/blog/93928-what-the-fy-2026-ipps-final-rule-means-for-hospitals/" target="_blank" rel="noopener">$6,752.61</a> per the CMS final rule.</p>
            <p>What moves an admission to the right payment is documentation: the complication or comorbidity the record supports. Our team finds it before the claim is built, so the DRG matches the care delivered.</p>
            <p>Audits are the other half. CMS has widened its Medicare Advantage <a href="https://www.cms.gov/data-research/monitoring-programs/medicare-risk-adjustment-data-validation-program" target="_blank" rel="noopener">risk-adjustment audits</a> from a few dozen plans to more than 550 contracts, and every diagnosis now has to meet the MEAT standard: monitored, evaluated, assessed, treated. We hold records to that standard on every encounter, so the response is ready before an audit asks.</p>
            <p>A grouper can flag the code. Whether the documentation supports it is a judgment call, and that stays with a person on our <a href="/services/medical-coding/">coding team</a>.</p>
          </div>
        </section>

        {/* ── 340B + TEAM — card pair inside ivory wrapper ── */}
        <div className="pair-section reveal">
          <div className="pair-card">
            <section id="b-split-billing-without-the-audit-exposure">
              <h2 data-eyebrow="Drug revenue integrity">340B split billing without the audit exposure</h2>
              <p>Hospitals with 340B status buy covered drugs at up to <a href="https://www.aha.org/fact-sheets/2025-11-24-fact-sheet-340b-drug-pricing-program" target="_blank" rel="noopener">50% below market</a>. The rule that trips them is split billing: separating which doses came from 340B inventory and which did not, then billing each correctly.</p>
              <p>The stakes are real. HRSA audits about 200 covered entities a year, and in FY2025 roughly 49% of those audits came back with findings. Federal law also bars duplicate discounts on Medicaid.</p>
              <p>We set up split billing with correct inventory attribution and Medicaid exclusion logic from the first claim, and we keep the documentation an audit will ask for.</p>
            </section>
            <section id="what-the-2026-team-model-changes-for-hospital-billing">
              <h2 data-eyebrow="Mandatory model">What the 2026 TEAM model changes for hospital billing</h2>
              <p>On January 1, 2026, CMS replaced the voluntary bundled-payment program with the mandatory <a href="https://www.cms.gov/priorities/innovation/innovation-models/team-model" target="_blank" rel="noopener">Transforming Episode Accountability Model (TEAM)</a>. If you bill for surgical episodes, it changes how you get paid.</p>
              <blockquote>
                <p>741 hospitals across 188 regions are enrolled.</p>
                <p>Each is accountable for the total cost of care for 30 days after discharge from one of five surgical episodes.</p>
                <p>Beat the spending target and the hospital keeps the difference. Miss it and the hospital repays it.</p>
                <p>The model runs through 2030.</p>
              </blockquote>
              <p>We track episode spending against target as it accrues and flag the post-acute patterns that push an episode over, so the reconciliation is not a surprise at the end.</p>
            </section>
          </div>
        </div>

        {/* ── CLEAN CLAIM ── */}
        <section className="level2 reveal" id="and-where-we-measure-it">
          <h2 data-eyebrow="Measured at the payer">97%, and where we measure it</h2>
          <p>Our 97% first-pass clean claim rate is measured at the payer on institutional (837I) claims, not at the clearinghouse where the number always looks higher. For a hospital claim riding on a DRG or an APC, that is the difference between a claim that is formatted correctly and one that actually paid. We explain why a 99% figure usually means the clearinghouse, and how the two measurements differ, on our <a href="/">main revenue page</a>.</p>
        </section>

        {/* ── IN-HOUSE COST ── */}
        <section className="level2 reveal" id="what-in-house-hospital-billing-costs-to-run">
          <h2 data-eyebrow="Operating reality">What in-house hospital billing costs to run</h2>
          <p>A hospital billing operation is not one biller. It is a department, and the roles that matter most are the hardest to keep.</p>
          <p>Inpatient coders trained on MS-DRG and clinical documentation are scarcer than general billers. Revenue cycle roles turn over at 11 to 40% a year against a national average near 3.8% (Experian). A median records specialist earns <a href="https://www.bls.gov/ooh/healthcare/medical-records-and-health-information-technicians.htm" target="_blank" rel="noopener">$50,250</a>.</p>
          <p>The cost that hurts is not the salary. It is the empty seat during a bad denial quarter, when DRG-level knowledge walks out the door and claims sit. We carry that staffing risk instead.</p>
          <p>Pricing is scoped during the revenue assessment by facility type, specialty mix, and claim volume. No rate card, no setup fee. <a href="#assessment">See what your hospital is leaving on the table</a>.</p>
        </section>

        {/* ── CLIENT OUTCOMES ── */}
        <section className="level2 reveal" id="what-changed-for-the-practices-we-took-on">
          <h2 data-eyebrow="Documented client work">What changed for the practices we took on</h2>
          <p>These are revenue cycle outcomes from our own client work. They are practice-level engagements rather than hospital contracts, but the pattern is the one a hospital cares about: the charges did not change, the collections did. Across three monthly engagements we added $179,778 in collections a month, about $2.16 million a year at the current run rate, by collecting revenue that had already been earned.</p>
          <p><a href="/case-studies/patient-first-primary-care/">Patient First</a> went from an 18.2% to a 61% collection rate. <a href="/case-studies/psychiatric-connections/">Psychiatric Connections</a> went from $0 to $43,678 a month. <a href="/case-studies/choice-medical-transport/">Choice Medical Transport</a> lifted collections from $12,320.63 to $54,220.72. A separate one-time audit retained $60,000 for <a href="/case-studies/divine-dermatology/">Divine Dermatology</a>. Read the full <a href="/case-studies/">case studies</a>.</p>
        </section>

        {/* ── COMPLIANCE ── */}
        <section className="level2 reveal" id="the-rules-we-build-every-claim-around">
          <h2 data-eyebrow="Compliance by design">The rules we build every claim around</h2>
          <p>Hospital billing lives inside a stack of federal and state rules, and a claim that ignores any one of them is a claim at risk. We build every workflow around them:</p>
          <blockquote>
            <p>The No Surprises Act and its limits on balance billing</p>
            <p>The CMS Hospital Price Transparency Rule and machine-readable charge files</p>
            <p>The Transparency in Coverage Rule</p>
            <p>340B drug pricing program guidelines</p>
            <p>The OIG Work Plan and its current audit targets</p>
            <p>Condition Code 44 rules for inpatient-to-outpatient reclassification</p>
            <p>HIPAA privacy and security on every claim we touch</p>
            <p>The Stark Law and the Anti-Kickback Statute</p>
            <p>State-specific balance-billing laws</p>
          </blockquote>
          <p>A compliance team tracks changes in federal and state law so the workflows stay current. HIPAA and a signed Business Associate Agreement are in place before we touch a single record.</p>
        </section>

        {/* ── SYSTEMS ── */}
        <section className="level2 reveal" id="the-systems-we-already-work-inside">
          <h2 data-eyebrow="EHR and PM integration">The systems we already work inside</h2>
          <p>We bill inside the platform a hospital already runs, or we move data into ours if that is easier. Our teams work day to day in Epic, Athenahealth, eClinicalWorks, NextGen, Kareo, AdvancedMD, and others.</p>
          <div className="systems-layout">
            <div className="systems-copy">
              <div className="platforms">
                <span>Epic</span><span>Athenahealth</span><span>eClinicalWorks</span>
                <span>NextGen</span><span>Kareo</span><span>AdvancedMD</span>
                <span>RXNT</span><span>Office Ally</span><span>Practice Fusion</span>
                <span>CareCloud</span><span>DrChrono</span><span>Greenway Health</span>
              </div>
              <p>No forced platform migration. Custom integrations are scoped during the revenue audit at no extra charge.</p>
              <p style={{display:'none'}}></p>
            </div>
            <div className="workflow-visual" role="img" aria-label="EHR to payer hospital claim workflow">
              <svg viewBox="0 0 720 470" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="hg" x1="0" x2="1"><stop stopColor="#528532"/><stop offset="1" stopColor="#d49b28"/></linearGradient>
                </defs>
                <rect x="24" y="30" width="672" height="410" rx="28" fill="#151d43" stroke="#fff" strokeOpacity=".12"/>
                <path className="flow-path" d="M120 152C210 78 286 80 360 152S510 225 598 152" fill="none" stroke="url(#hg)" strokeWidth="5"/>
                <path className="flow-path" d="M598 312C510 240 430 240 360 312S204 382 120 312" fill="none" stroke="url(#hg)" strokeWidth="5"/>
                <g fontFamily="Montserrat,Arial" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700">
                  <g><circle cx="120" cy="152" r="48" fill="#fff" fillOpacity=".1" stroke="#fff" strokeOpacity=".3"/><circle className="pulse" cx="120" cy="152" r="8" fill="#528532"/><text x="120" y="218">Hospital EHR</text></g>
                  <g><circle cx="360" cy="152" r="48" fill="#fff" fillOpacity=".1" stroke="#fff" strokeOpacity=".3"/><circle className="pulse" cx="360" cy="152" r="8" fill="#d49b28"/><text x="360" y="218">Status + DRG</text></g>
                  <g><circle cx="598" cy="152" r="48" fill="#fff" fillOpacity=".1" stroke="#fff" strokeOpacity=".3"/><circle className="pulse" cx="598" cy="152" r="8" fill="#528532"/><text x="598" y="218">837I claim</text></g>
                  <g><circle cx="598" cy="312" r="48" fill="#fff" fillOpacity=".1" stroke="#fff" strokeOpacity=".3"/><circle className="pulse" cx="598" cy="312" r="8" fill="#d49b28"/><text x="598" y="378">Payer</text></g>
                  <g><circle cx="360" cy="312" r="48" fill="#fff" fillOpacity=".1" stroke="#fff" strokeOpacity=".3"/><circle className="pulse" cx="360" cy="312" r="8" fill="#528532"/><text x="360" y="378">Payment</text></g>
                  <g><circle cx="120" cy="312" r="48" fill="#fff" fillOpacity=".1" stroke="#fff" strokeOpacity=".3"/><circle className="pulse" cx="120" cy="312" r="8" fill="#d49b28"/><text x="120" y="378">Revenue report</text></g>
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="level2 reveal" id="what-happens-after-you-request-an-assessment">
          <h2 data-eyebrow="From assessment to go-live">What happens after you request an assessment</h2>
          <p>Starting with us takes four steps, not a quarter.</p>
          <blockquote>
            <p>We start with a revenue assessment: a review of a sample of your AR, denials, and aging to find where revenue is leaking, at no cost.</p>
            <p>We agree on scope and sign a Business Associate Agreement before any patient data moves.</p>
            <p>We connect to your EHR and practice-management system and confirm payer enrollment and <a href="/services/medical-credentialing/">credentialing</a> are current.</p>
            <p>We go live, begin billing, and give you reporting you can actually read.</p>
          </blockquote>
        </section>

        {/* ── FIT ── */}
        <section className="level2 reveal" id="who-this-is-for">
          <h2 data-eyebrow="Clear fit criteria">Who this is for</h2>
          <p>We are a strong fit for some hospitals and the wrong choice for others. We would rather say so up front.</p>
          <blockquote>
            <p>You run a hospital, health system, or facility and want billing measured at the payer, not the clearinghouse.</p>
            <p>You have revenue leaking in denials, aged AR, or DRG downgrades and want it found and fixed.</p>
            <p>You want a specialist team that knows your payers, not a rules engine that looks them up.</p>
          </blockquote>
          <p><strong>Probably not a fit if:</strong></p>
          <blockquote>
            <p>You want the lowest possible percentage and nothing else.</p>
            <p>You want to keep billing fully in-house and only need software.</p>
          </blockquote>
          <p><a className="btn" href="#assessment">Get a Free Revenue Assessment</a></p>
        </section>

        {/* ── FAQ ── */}
        <section className="level2 reveal" id="hospital-billing-questions-we-get-asked">
          <h2 data-eyebrow="Hospital billing FAQs">Hospital billing questions we get asked</h2>
          <div className="faq-layout">
            <div className="faq-intro">
              <p>Direct answers for hospital leaders evaluating an outside revenue-cycle partner.</p>
            </div>
            <div className="faq-list">
              {[
                ["How is hospital billing different from physician billing?","Hospital billing covers the facility side of care and runs on two systems: MS-DRG for inpatient stays and APC for outpatient visits, usually on a UB-04 claim form. Physician billing covers the professional side on a CMS-1500. We handle both and keep the facility and professional claims from colliding."],
                ["What is the difference between inpatient and outpatient hospital billing?","Inpatient billing pays a single bundled amount per admission under MS-DRG and uses ICD-10-PCS procedure codes. Outpatient billing pays per service line under APC and uses CPT and HCPCS codes. The status of the patient, admitted versus observation, decides which one applies, and getting it wrong is one of the most common hospital billing errors."],
                ["Do you handle DRG optimization and clinical documentation?","Yes. We review every inpatient chart for the complications and comorbidities the record supports before the claim is coded, so the DRG matches the care actually delivered. This is where most underpayment on inpatient claims hides."],
                ["Can you manage 340B split billing?","Yes. We set up split billing that separates 340B inventory from non-340B inventory, applies Medicaid exclusion logic to avoid duplicate discounts, and keeps the documentation HRSA audits look for."],
                ["How do you handle hospital-based telehealth billing?","We bill the originating-site facility fee (Q3014) separately from the professional claim, apply the correct place-of-service codes and modifiers, and confirm state parity rules for commercial payers."],
                ["How quickly can you onboard a hospital?","Most engagements go live within about 14 days, depending on EHR access and payer enrollment status. The revenue assessment and BAA come first, then integration, then go-live."],
                ["What does it cost?","Pricing is scoped during the revenue assessment based on facility type, specialty mix, and claim volume. There is no published rate card, no setup fee, and no long-term contract."],
                ["Are you HIPAA compliant?","Yes. We sign a Business Associate Agreement before accessing any patient data, encrypt protected health information in transit and at rest, restrict access by role, and train staff on HIPAA every year."],
              ].map(([q,a],i) => (
                <details key={i}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="level2 reveal" id="see-where-your-hospital-revenue-is-leaking" style={{background:'var(--green)'}}>
          <h2 data-eyebrow="Free, specific, no obligation">See where your hospital revenue is leaking</h2>
          <p>The revenue assessment is free, and it is specific. We look at your denials, your aged AR, and your DRG mix, and we show you where the money is going. No rate card, no obligation.</p>
          <div className="cta-card" id="assessment">
            <div className="cta-media">
              <Image src="/hospital-assessment.png" alt="Hospital revenue assessment meeting reviewing denials, aged accounts receivable and DRG mix" fill sizes="(max-width:1050px) 100vw, 50vw" quality={80} style={{objectFit:"cover"}} />
            </div>
            <div className="cta-copy">
              <h2 style={{color:'#fff'}}>Your revenue assessment starts here</h2>
              <p>A 45-minute conversation with a senior RCM strategist. We review your denials, aged AR, and DRG mix, and show you where the money is going. No rate card, no obligation.</p>
              <form className="assessment" id="hospitalForm">
                <label>Full name<input name="name" autoComplete="name" required /></label>
                <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
                <label>Hospital / facility<input name="organization" required /></label>
                <label>Facility type
                  <select name="facility_type">
                    <option value="">Select type</option>
                    <option>Acute care hospital</option>
                    <option>Critical access hospital</option>
                    <option>Skilled nursing facility</option>
                    <option>Long-term acute care</option>
                    <option>Inpatient rehab</option>
                    <option>Ambulatory surgery center</option>
                    <option>Behavioral health facility</option>
                    <option>Health system</option>
                  </select>
                </label>
                <label className="full">Primary revenue concern
                  <select name="concern">
                    <option value="">Select concern</option>
                    <option>Denials</option>
                    <option>Aged AR</option>
                    <option>DRG downgrades</option>
                    <option>Charge capture</option>
                    <option>340B split billing</option>
                    <option>TEAM model performance</option>
                    <option>Full revenue cycle</option>
                  </select>
                </label>
                <button className="btn gold" type="submit">Get a Free Revenue Assessment</button>
              </form>
              <div className="success" id="hospitalSuccess" role="status">Thank you. Your assessment request has been received.</div>
            </div>
          </div>
        </section>

    </main>
  );
}
