import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";

export default function HospitalBillingPage() {
  return (
    <main className="hospital-page" id="main">

      {/* ═══ HERO ══════════════════════════════════════════════
          IMAGE: /public/hospital-hero.png  |  1536 × 900 px
      ══════════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="Hospital medical billing services"
        heading="Hospital medical billing services for inpatient and outpatient care"
        intro="Hospital billing is not physician billing with a bigger claim form. A hospital bills for the facility: the bed, the operating room, the drugs, the imaging. Admitted patients pay under MS-DRG, outpatient visits pay under APC, and both ride on a UB-04. When a claim in either system is coded short or denied, that is revenue the hospital already earned. We handle the facility side end to end, and we report what actually landed at the payer."
        note="97% first-pass clean claim rate, measured at the payer   |   14-day onboarding   |   No setup fees   |   All 50 states"
        cta="Get a Free Revenue Assessment"
        ctaAlt="See how we measure it"
        ctaAltHref="#measurement"
        badge="97% at payer · UB-04 · MS-DRG · APC"
        image="/hospital-hero.png"
        imageAlt="Hospital revenue cycle specialists reviewing inpatient and outpatient billing workflow"
        imageW={1536}
        imageH={900}
      />

      {/* ═══ REVENUE GAP — stat-forward ══════════════════════ */}
      <section className="h-sec h-sec--ivory reveal" id="revenue-gap">
        <div className="h-wrap">
          <p className="h-ew">Where hospital revenue goes missing between the bedside and the bank</p>
          <h2>Where hospital revenue goes missing between the bedside and the bank</h2>

          <p>Every claim passes through registration, coding, charge capture, and submission before a payer sees it. A mistake at any point becomes a denial, and a denial costs money to work twice.</p>

          <div className="h-stat-row">
            <div className="h-stat-block">
              <div className="h-stat-num">86<span>%</span></div>
              <div className="h-stat-lbl">of initial denials are avoidable</div>
              <div className="h-stat-src"><a href="https://www.mgma.com/data/benchmarking-data/revenue-cycle-denials-benchmarking-report" target="_blank" rel="noopener">Change Healthcare Denials Index via MGMA</a></div>
            </div>
            <div className="h-stat-block h-stat-block--accent">
              <div className="h-stat-num">17<span>%</span></div>
              <div className="h-stat-lbl">Medicare Advantage initial denial rate on first submission</div>
              <div className="h-stat-src"><a href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2024.01485" target="_blank" rel="noopener">Health Affairs, 2024</a></div>
            </div>
          </div>

          <div className="h-callout">
            <div className="h-callout-bar" aria-hidden="true" />
            <p>That gap is not a rounding error. It is cash that should have closed the month. We built our hospital revenue cycle management to close that gap before it opens. Our hospital medical billing services cover the facility side of care from registration to the last dollar collected. As a hospital billing company, we report the number that matters at the payer, not the one that looks best on a dashboard.</p>
          </div>

          <p>Related: <Link href="/services/account-receivable-management/">revenue cycle services and AR recovery</Link>.</p>
        </div>
      </section>

      {/* ═══ TWO PAYMENT SYSTEMS ═════════════════════════════ */}
      <section className="h-sec h-sec--white reveal">
        <div className="h-wrap">
          <p className="h-ew">Two payment systems under one roof</p>
          <h2>Two payment systems under one roof</h2>
          <p>Inpatient and outpatient billing are not two versions of the same job. They use different claim forms, different code sets, and different payment systems, and they break in different places. A team that treats them the same loses money on both.</p>

          <div className="h-table-wrap">
            <table className="h-compare-table" aria-label="Inpatient vs outpatient billing comparison">
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

          <div className="h-status-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
            <p>The status trap catches hospitals more than anything else here. A patient can spend two nights in a hospital bed and still bill as outpatient observation under Medicare Part B. Get the status wrong and the claim is wrong from the first line. We check it against the two-midnight rule before coding, not after a denial.</p>
          </div>

          <p>For the outpatient surgical side, our <Link href="/services/asc-billing/">ASC billing team</Link> handles APC grouping and modifier work. Our <Link href="/services/medical-coding/">medical coding team</Link> carries both the inpatient and outpatient code sets.</p>
        </div>
      </section>

      {/* ═══ HOW WE HOLD THE REVENUE CYCLE TOGETHER ═════════ */}
      <section className="h-sec h-sec--navy reveal" id="how-we-hold-a-hospitals-revenue-cycle-together">
        <div className="h-wrap">
          <p className="h-ew h-ew--gold">How we hold a hospital's revenue cycle together</p>
          <h2>How we hold a hospital's revenue cycle together</h2>
          <p className="h-sec-intro">Every hospital account runs inside our Revenue Control Framework, the five-phase method behind every Medbilling RCM engagement, from the opening revenue audit through to monthly revenue intelligence. On the hospital side, our hospital revenue cycle management work falls into three stages, each built to catch revenue before it leaks rather than chase it after.</p>

          <div className="h-stages">
            <div className="h-stage reveal">
              <div className="h-stage-num">01</div>
              <div className="h-stage-body">
                <h3>Before the patient is seen</h3>
                <p>Provider <Link href="/services/medical-credentialing/">credentialing</Link>, patient scheduling, pre-registration, <Link href="/services/coverage-discovery/">insurance verification</Link>, eligibility and benefits verification, and patient registration.</p>
              </div>
            </div>
            <div className="h-stage reveal">
              <div className="h-stage-num">02</div>
              <div className="h-stage-body">
                <h3>While the claim is built</h3>
                <p>Charge capture, and coding and billing. This is the stage where a DRG is won or lost, so every inpatient chart is reviewed for documentation completeness before the claim goes out.</p>
              </div>
            </div>
            <div className="h-stage reveal">
              <div className="h-stage-num">03</div>
              <div className="h-stage-body">
                <h3>Getting paid and keeping it</h3>
                <p>Claims submission, <Link href="/services/account-receivable-management/">accounts receivable management</Link>, denial management, patient collections, revenue reporting, and patient follow-up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FACILITY TYPES ══════════════════════════════════ */}
      <section className="h-sec h-sec--ivory reveal">
        <div className="h-wrap">
          <p className="h-ew">Every facility bills differently, and we're built for that</p>
          <h2>Every facility bills differently, and we're built for that</h2>
          <p>We bill for hospitals and facilities of every type. What changes from one to the next is the payment model underneath, and that is what we configure for.</p>

          <div className="h-facility-grid">
            {[
              { icon:"🏥", t:"Acute care hospitals", d:"pay under IPPS by DRG." },
              { icon:"🏨", t:"Critical access hospitals", d:"bill on a cost basis, not by DRG." },
              { icon:"🛏️", t:"Skilled nursing facilities", d:"pay a per-diem rate under PDPM." },
              { icon:"⚕️", t:"Long-term acute care, inpatient rehab, ambulatory surgery, and behavioral health", d:"each carry their own forms and thresholds." },
            ].map(({ icon, t, d }) => (
              <div className="h-facility-card" key={t}>
                <span className="h-facility-icon" aria-hidden="true">{icon}</span>
                <div><strong>{t}</strong> {d}</div>
              </div>
            ))}
          </div>
          <p>We match the setup to the facility instead of forcing one workflow across all of them, and we tie hospital work back to the <Link href="/specialties/">specialties</Link> each facility runs.</p>
        </div>
      </section>

      {/* ═══ WHERE REVENUE LEAKS ═════════════════════════════ */}
      <section className="h-sec h-sec--white reveal">
        <div className="h-wrap">
          <p className="h-ew">The places hospital revenue quietly slips, and how we close each one</p>
          <h2>The places hospital revenue quietly slips, and how we close each one</h2>

          <div className="h-leaks-grid">
            <div className="h-leak-card reveal">
              <div className="h-leak-icon">📉</div>
              <h3>DRG downgrades and missing complications</h3>
              <p>When a chart does not document a complication or comorbidity the care actually involved, the claim drops to a lower-paying DRG. The difference is real money. A sepsis admission coded without its major complication can pay roughly $6,000 less. We review every inpatient chart for that documentation before coding, not after the payment posts short.</p>
            </div>
            <div className="h-leak-card reveal">
              <div className="h-leak-icon">🔄</div>
              <h3>Inpatient stays that should have been outpatient</h3>
              <p>Condition Code 44 lets a hospital correct an admission to outpatient status when utilization review finds the inpatient criteria were not met. It only works before discharge and with the right approvals. Applied late, it becomes an audit flag instead of a fix. We catch status problems while the patient is still in the building.</p>
            </div>
            <div className="h-leak-card reveal">
              <div className="h-leak-icon">⏱️</div>
              <h3>Records requests with a clock on them</h3>
              <div className="h-leak-stat">
                <span className="h-leak-stat-num">45</span>
                <span className="h-leak-stat-unit">days</span>
              </div>
              <p>A Recovery Audit Contractor request gives a hospital <a href="https://www.cms.gov/research-statistics-data-and-systems/monitoring-programs/medicare-ffs-compliance-programs/recovery-audit-program" target="_blank" rel="noopener">45 days to respond</a>, and a late response becomes an automatic recoupment. We keep documentation audit-ready for every coded encounter, so a request is a filing task rather than a fire drill.</p>
            </div>
            <div className="h-leak-card reveal">
              <div className="h-leak-icon">📊</div>
              <h3>AR that ages past the benchmark</h3>
              <p>HFMA treats gross days in AR under 40 as the target and 50 or more as a sign of a structural collection problem. When accounts sit, cash sits. Our <Link href="/services/account-receivable-management/">AR team</Link> works aged inpatient accounts by payer-specific escalation rather than working the list oldest-first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DOCUMENTATION / DRG ═════════════════════════════ */}
      <section className="h-sec h-sec--navy reveal">
        <div className="h-wrap">
          <p className="h-ew h-ew--gold">Getting paid for the care that was actually delivered</p>
          <h2>Getting paid for the care that was actually delivered</h2>

          <div className="h-drg-stat">
            <div className="h-drg-num">$6,752<span>.61</span></div>
            <div className="h-drg-lbl">FY2026 IPPS base rate per admission</div>
            <div className="h-drg-src"><a href="https://www.aapc.com/blog/93928/" target="_blank" rel="noopener">CMS FY2026 IPPS Final Rule via AAPC</a></div>
          </div>

          <p>Each inpatient admission groups into a DRG that sets the payment. The FY2026 base rate is $6,752.61 per the CMS final rule.</p>
          <p>What moves an admission to the right payment is documentation: the complication or comorbidity the record supports. Our team finds it before the claim is built, so the DRG matches the care delivered.</p>
          <p>Audits are the other half. <a href="https://www.cms.gov/data-research/monitoring-programs/medicare-risk-adjustment-data-validation-program" target="_blank" rel="noopener">CMS has widened its Medicare Advantage risk-adjustment audits</a> from a few dozen plans to more than 550 contracts, and every diagnosis now has to meet the MEAT standard: monitored, evaluated, assessed, treated. We hold records to that standard on every encounter, so the response is ready before an audit asks.</p>
          <p>A grouper can flag the code. Whether the documentation supports it is a judgment call, and that stays with a person on our coding team.</p>
        </div>
      </section>

      {/* ═══ 340B ════════════════════════════════════════════ */}
      <section className="h-sec h-sec--white reveal">
        <div className="h-wrap">
          <p className="h-ew">340B split billing without the audit exposure</p>
          <h2>340B split billing without the audit exposure</h2>
          <p>Hospitals with 340B status buy covered drugs at up to 50% below market. The rule that trips them is split billing: separating which doses came from 340B inventory and which did not, then billing each correctly.</p>

          <div className="h-audit-stat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
            <p>The stakes are real. <a href="https://www.aha.org/fact-sheets/2025-11-24-fact-sheet-340b-drug-pricing-program" target="_blank" rel="noopener">HRSA audits about 200 covered entities a year</a>, and in FY2025 roughly 49% of those audits came back with findings. Federal law also bars duplicate discounts on Medicaid.</p>
          </div>

          <p>We set up split billing with correct inventory attribution and Medicaid exclusion logic from the first claim, and we keep the documentation an audit will ask for.</p>
        </div>
      </section>

      {/* ═══ TEAM MODEL ══════════════════════════════════════ */}
      <section className="h-sec h-sec--navy reveal" id="what-the-2026-team-model-changes-for-hospital-billing">
        <div className="h-wrap">
          <p className="h-ew h-ew--gold">What the 2026 TEAM model changes for hospital billing</p>
          <h2>What the 2026 TEAM model changes for hospital billing</h2>
          <p>On January 1, 2026, CMS replaced the voluntary bundled-payment program with the mandatory Transforming Episode Accountability Model (TEAM). If you bill for surgical episodes, it changes how you get paid.</p>

          <div className="h-team-stats">
            <div className="h-team-stat">
              <div className="h-team-num">741</div>
              <div className="h-team-lbl">hospitals enrolled across 188 regions</div>
            </div>
            <div className="h-team-stat">
              <div className="h-team-num">30</div>
              <div className="h-team-lbl">days post-discharge accountability window per episode</div>
            </div>
            <div className="h-team-stat">
              <div className="h-team-num">5</div>
              <div className="h-team-lbl">surgical episode types covered through 2030</div>
            </div>
          </div>

          <ul className="h-team-list">
            <li>741 hospitals across 188 regions are enrolled.</li>
            <li>Each is accountable for the total cost of care for 30 days after discharge from one of five surgical episodes.</li>
            <li>Beat the spending target and the hospital keeps the difference. Miss it and the hospital repays it.</li>
            <li><a href="https://www.cms.gov/priorities/innovation/innovation-models/team-model" target="_blank" rel="noopener">The model runs through 2030.</a></li>
          </ul>

          <p>We track episode spending against target as it accrues and flag the post-acute patterns that push an episode over, so the reconciliation is not a surprise at the end.</p>
        </div>
      </section>

      {/* ═══ 97% MEASUREMENT ══════════════════════════════════*/}
      <section className="h-sec h-sec--ivory reveal" id="measurement">
        <div className="h-wrap">
          <p className="h-ew">97%, and where we measure it</p>
          <h2>97%, and where we measure it</h2>

          <div className="h-97-pullquote">
            <div className="h-97-num">97<span>%</span></div>
            <div className="h-97-copy">
              <p>Our 97% first-pass clean claim rate is measured at the payer on institutional (837I) claims, not at the clearinghouse where the number always looks higher. For a hospital claim riding on a DRG or an APC, that is the difference between a claim that formatted correctly and one that actually paid. We explain why a 99% figure usually means the clearinghouse, and how the two measurements differ, on our <Link href="/services/">main revenue page</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ IN-HOUSE COST ════════════════════════════════════*/}
      <section className="h-sec h-sec--white reveal">
        <div className="h-wrap">
          <p className="h-ew">What in-house hospital billing costs to run</p>
          <h2>What in-house hospital billing costs to run</h2>

          <div className="h-cost-stat">
            <div className="h-cost-num">$50,250</div>
            <div className="h-cost-lbl">Median records specialist salary — <a href="https://www.bls.gov/ooh/healthcare/medical-records-and-health-information-technicians.htm" target="_blank" rel="noopener">BLS</a></div>
          </div>

          <p>A hospital billing operation is not one biller. It is a department, and the roles that matter most are the hardest to keep.</p>
          <p>Inpatient coders trained on MS-DRG and clinical documentation are scarcer than general billers. Revenue cycle roles turn over at 11 to 40% a year against a national average near 3.8% (Experian). A median records specialist earns $50,250.</p>
          <p>The cost that hurts is not the salary. It is the empty seat during a bad denial quarter, when DRG-level knowledge walks out the door and claims sit. We carry that staffing risk instead. See our <Link href="/services/healthcare-fte-outsourcing/">healthcare FTE outsourcing</Link> for details on dedicated staffing.</p>
          <p>Pricing is scoped during the revenue assessment by facility type, specialty mix, and claim volume. No rate card, no setup fee. See what your hospital is leaving on the table.</p>
        </div>
      </section>

      {/* Mid CTA */}
      <div className="h-mid-cta">
        <div className="h-mid-cta-inner">
          <div>
            <h2>See where your hospital revenue is leaking</h2>
            <p>The revenue assessment is free, and it is specific. We look at your denials, your aged AR, and your DRG mix, and we show you where the money is going.</p>
          </div>
          <Link href="/request-free-audit/" className="pg-btn pg-btn--gold">Get a Free Revenue Assessment</Link>
        </div>
      </div>

      {/* ═══ CLIENT OUTCOMES ══════════════════════════════════*/}
      <section className="h-sec h-sec--ivory reveal">
        <div className="h-wrap">
          <p className="h-ew">What changed for the practices we took on</p>
          <h2>What changed for the practices we took on</h2>
          <p>These are revenue cycle outcomes from our own client work. They are practice-level engagements rather than hospital contracts, but the pattern is the one a hospital cares about: the charges did not change, the collections did. Across three monthly engagements we added $179,778 in collections a month, about $2.16 million a year at the current run rate, by collecting revenue that had already been earned.</p>

          <div className="h-outcomes-row">
            <div className="h-outcome-stat">
              <div className="h-outcome-num">$179,778<span>/mo</span></div>
              <div className="h-outcome-lbl">added in collections per month across three engagements</div>
            </div>
            <div className="h-outcome-stat h-outcome-stat--accent">
              <div className="h-outcome-num">$2.16<span>M/yr</span></div>
              <div className="h-outcome-lbl">annualized at current run rate</div>
            </div>
          </div>

          <ul className="h-outcomes-list">
            <li>Patient First went from an 18.2% to a 61% collection rate.</li>
            <li>Psychiatric Connections went from $0 to $43,678 a month.</li>
            <li>Choice Medical Transport lifted collections from $12,320.63 to $54,220.72.</li>
            <li>A separate one-time audit retained $60,000 for Divine Dermatology.</li>
          </ul>
          <p><Link href="/case-studies/">Read the full case studies.</Link></p>
        </div>
      </section>

      {/* ═══ COMPLIANCE RULES ════════════════════════════════ */}
      <section className="h-sec h-sec--white reveal">
        <div className="h-wrap">
          <p className="h-ew">The rules we build every claim around</p>
          <h2>The rules we build every claim around</h2>
          <p>Hospital billing lives inside a stack of federal and state rules, and a claim that ignores any one of them is a claim at risk. We build every workflow around them:</p>

          <div className="h-rules-grid">
            {[
              "The No Surprises Act and its limits on balance billing",
              "The CMS Hospital Price Transparency Rule and machine-readable charge files",
              "The Transparency in Coverage Rule",
              "340B drug pricing program guidelines",
              "The OIG Work Plan and its current audit targets",
              "Condition Code 44 rules for inpatient-to-outpatient reclassification",
              "HIPAA privacy and security on every claim we touch",
              "The Stark Law and the Anti-Kickback Statute",
              "State-specific balance-billing laws",
            ].map((rule) => (
              <div className="h-rule-item" key={rule}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>{rule}</span>
              </div>
            ))}
          </div>

          <p>A compliance team tracks changes in federal and state law so the workflows stay current. HIPAA and a signed Business Associate Agreement are in place before we touch a single record.</p>
        </div>
      </section>

      {/* ═══ EHR SYSTEMS ════════════════════════════════════ */}
      <section className="h-sec h-sec--ivory reveal">
        <div className="h-wrap">
          <p className="h-ew">The systems we already work inside</p>
          <h2>The systems we already work inside</h2>
          <p>We bill inside the platform a hospital already runs, or we move data into ours if that is easier. Our teams work day to day in Epic, Athenahealth, eClinicalWorks, NextGen, Kareo, AdvancedMD, and others.</p>
          <div className="h-ehr-strip">
            {["Epic","Athenahealth","eClinicalWorks","NextGen","Kareo","AdvancedMD","MEDITECH","Cerner","30+ others"].map(s => (
              <span className="h-ehr-tag" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ONBOARDING STEPS ════════════════════════════════ */}
      <section className="h-sec h-sec--navy reveal">
        <div className="h-wrap">
          <p className="h-ew h-ew--gold">What happens after you request an assessment</p>
          <h2>What happens after you request an assessment</h2>
          <p className="h-sec-intro">Starting with us takes four steps, not a quarter.</p>

          <div className="h-onboard-steps">
            {[
              { n:"1", t:"Revenue assessment", d:"A review of a sample of your AR, denials, and aging to find where revenue is leaking, at no cost." },
              { n:"2", t:"Scope and BAA", d:"We agree on scope and sign a Business Associate Agreement before any patient data moves." },
              { n:"3", t:"EHR connection", d:"We connect to your EHR and practice-management system and confirm payer enrollment and credentialing are current." },
              { n:"4", t:"Go live", d:"We begin billing and give you reporting you can actually read." },
            ].map(({ n, t, d }) => (
              <div className="h-onboard-step" key={n}>
                <div className="h-onboard-num">{n}</div>
                <div className="h-onboard-body">
                  <strong>{t}</strong>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FIT / NOT FIT ════════════════════════════════════*/}
      <section className="h-sec h-sec--white reveal">
        <div className="h-wrap">
          <p className="h-ew">Who this is for</p>
          <h2>Who this is for</h2>
          <p>We are a strong fit for some hospitals and the wrong choice for others. We would rather say so up front.</p>

          <div className="h-fit-grid">
            <div className="h-fit-col h-fit-col--yes">
              <div className="h-fit-head">✓ A strong fit if:</div>
              <ul>
                <li>You run a hospital, health system, or facility and want billing measured at the payer, not the clearinghouse.</li>
                <li>You have revenue leaking in denials, aged AR, or DRG downgrades and want it found and fixed.</li>
                <li>You want a specialist team that knows your payers, not a rules engine that looks them up.</li>
              </ul>
            </div>
            <div className="h-fit-col h-fit-col--no">
              <div className="h-fit-head">✗ Probably not a fit if:</div>
              <ul>
                <li>You want the lowest possible percentage and nothing else.</li>
                <li>You want to keep billing fully in-house and only need software.</li>
              </ul>
            </div>
          </div>

          <div className="h-fit-cta">
            <Link href="/request-free-audit/" className="pg-btn pg-btn--gold">Get a Free Revenue Assessment</Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ════════════════════════════════════════════ */}
      <section className="h-sec h-sec--ivory reveal" id="faq">
        <div className="h-wrap">
          <p className="h-ew">Hospital billing questions we get asked</p>
          <h2>Hospital billing questions we get asked</h2>

          <div className="h-faq-layout">
            <div className="h-faq-intro">
              <p>Direct answers for hospital administrators, CFOs, and revenue cycle leaders evaluating billing support.</p>
            </div>
            <div className="h-faq-list">
              {[
                ["How is hospital billing different from physician billing?",
                 "Hospital billing covers the facility side of care and runs on two systems: MS-DRG for inpatient stays and APC for outpatient visits, usually on a UB-04 claim form. Physician billing covers the professional side on a CMS-1500. We handle both and keep the facility and professional claims from colliding."],
                ["What is the difference between inpatient and outpatient hospital billing?",
                 "Inpatient billing pays a single bundled amount per admission under MS-DRG and uses ICD-10-PCS procedure codes. Outpatient billing pays per service line under APC and uses CPT and HCPCS codes. The status of the patient, admitted versus observation, decides which one applies, and getting it wrong is one of the most common hospital billing errors."],
                ["Do you handle DRG optimization and clinical documentation?",
                 "Yes. We review every inpatient chart for the complications and comorbidities the record supports before the claim is coded, so the DRG matches the care actually delivered. This is where most underpayment on inpatient claims hides."],
                ["Can you manage 340B split billing?",
                 "Yes. We set up split billing that separates 340B inventory from non-340B inventory, applies Medicaid exclusion logic to avoid duplicate discounts, and keeps the documentation HRSA audits look for."],
                ["How do you handle hospital-based telehealth billing?",
                 "We bill the originating-site facility fee (Q3014) separately from the professional claim, apply the correct place-of-service codes and modifiers, and confirm state parity rules for commercial payers."],
                ["How quickly can you onboard a hospital?",
                 "Most engagements go live within about 14 days, depending on EHR access and payer enrollment status. The revenue assessment and BAA come first, then integration, then go-live."],
                ["What does it cost?",
                 "Pricing is scoped during the revenue assessment based on facility type, specialty mix, and claim volume. There is no published rate card, no setup fee, and no long-term contract."],
                ["Are you HIPAA compliant?",
                 "Yes. We sign a Business Associate Agreement before accessing any patient data, encrypt protected health information in transit and at rest, restrict access by role, and train staff on HIPAA every year."],
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

      {/* ═══ ASSESSMENT CTA ═════════════════════════════════ */}
      <CtaSection
        eyebrow="Ready when you are"
        heading="See where your hospital revenue is leaking."
        body="The revenue assessment is free, and it is specific. We look at your denials, your aged AR, and your DRG mix, and we show you where the money is going. No rate card, no obligation."
        ctaLabel="Get a Free Revenue Assessment"
        formId="hospitalAssessmentForm"
        checklist={[
          "Denial rate by root cause from your claim volume",
          "Aged AR by payer — filing window exposure identified",
          "DRG mix review — underpayment patterns flagged",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="97% clean claim rate measured at the payer · 14-day onboarding · All 50 states"
      />

    </main>
  );
}
