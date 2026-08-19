import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";

export default function CoverageDiscoveryPage() {
  return (
    <main className="cd-page" id="main">

      {/* ═══ HERO ══════════════════════════════════════════════
          IMAGE PLACEHOLDER
          File: /public/cd-hero.webp  |  Size: 1536 × 900 px
          AI prompt: "Insurance eligibility specialist at dual computer
          monitors in modern medical billing office, payer database search
          results visible on screen, professional healthcare RCM environment,
          navy and green tones, photorealistic, no text overlay, wide format"
      ══════════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="Coverage discovery services"
        heading="Coverage discovery services"
        intro="Coverage discovery is the process of identifying active insurance a patient has but the provider has not captured. Up to 30% of patients classified as self-pay carry billable coverage that was never surfaced at registration. Our insurance discovery services find it, across Medicare, Medicaid, and 1,000+ commercial payers, before a claim is submitted, at the point of service, or on aged accounts already headed for write-off."
        note="1,000+ payers searched  |  30% average AR reduction  |  100% HIPAA compliant"
        cta="Get a Free Coverage Audit"
        ctaAlt="See how it works"
        ctaAltHref="#how-it-works"
        badge="1,000+ Payers · HIPAA"
        image="/cd-hero.webp"
        imageAlt="Insurance eligibility specialist reviewing eligibility results and payer database on dual monitors in healthcare billing office"
        imageW={1536}
        imageH={900}
      />

      {/* ═══ PROOF STRIP ════════════════════════════════════ */}
      <div className="cd-proof">
        <div className="cd-proof-inner">
          <div className="cd-proof-item">1,000+ Payers Searched</div>
          <div className="cd-proof-item">30% Average AR Reduction</div>
          <div className="cd-proof-item">100% HIPAA Compliant</div>
          <div className="cd-proof-item">No Setup Fee</div>
        </div>
      </div>

      {/* ═══ THE REVENUE HIDING IN SELF-PAY ═════════════════ */}
      <section className="cd-sec cd-sec--white reveal" id="problem">
        <div className="cd-wrap">
          <p className="reveal cd-ew">The revenue hiding inside your self-pay accounts</p>
          <h2 className="reveal">The revenue hiding inside your self-pay accounts</h2>

          {/* Stat-forward layout: large numbers anchor each fact */}
          <div className="cd-stats-row">
            <div className="reveal cd-stat-block">
              <div className="cd-stat-num">$745<span>B</span></div>
              <div className="cd-stat-body">
                <p>U.S. hospitals have provided nearly <strong>$745 billion</strong> in uncompensated care over the past two decades, according to the <a href="https://www.aha.org/fact-sheets/2020-01-06-fact-sheet-uncompensated-hospital-care-cost" target="_blank" rel="noopener">American Hospital Association</a>. A significant share of that total is not truly uncompensated. It is care delivered to patients who had active insurance that was never identified.</p>
              </div>
            </div>
            <div className="reveal cd-stat-block">
              <div className="cd-stat-num">27<span>%</span></div>
              <div className="cd-stat-body">
                <p>Registration and eligibility errors remain the single largest denial category, responsible for nearly <strong>27% of all claim denials</strong> according to <a href="https://www.ajmc.com/view/denials-management-the-financial-impact-of-claim-denials" target="_blank" rel="noopener">Change Healthcare analysis confirmed by MGMA</a>. Each denied claim costs an average of <a href="https://www.etactics.com/blog/cost-to-rework-a-claim" target="_blank" rel="noopener">$25 to rework</a>, with administrative costs per denial reaching <a href="https://aptarro.com/insights/us-healthcare-denial-rates-reimbursement-statistics" target="_blank" rel="noopener">$57 in 2023 according to Aptarro data</a>. Up to <a href="https://fuseinsight.com/blog/coordination-of-benefits-errors-denials/" target="_blank" rel="noopener">65% of denials are never resubmitted at all</a>. The claims age out, get written off, and the revenue disappears permanently.</p>
              </div>
            </div>
          </div>

          <div className="cd-intervene-banner">
            <div className="cd-intervene-line" aria-hidden="true" />
            <p>Coverage discovery intervenes before that loss becomes irreversible. It is an operational discipline built into the front end of the revenue cycle, with a post-service recovery sweep for accounts that already slipped through.</p>
          </div>

          {/* IMAGE PLACEHOLDER
              File: /public/cd-problem.webp  |  Size: 1100 × 580 px
              AI prompt: "Hospital administrator reviewing uncompensated care
              financial report at desk, self-pay account dashboard visible,
              executive healthcare setting, professional attire, photorealistic" */}
          <div className="cd-problem-img">
            <Image src="/cd-problem.webp" alt="Hospital administrator reviewing uncompensated care financial report with self-pay accounts dashboard visible on screen" width={1100} height={580} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 20%"}} />
          </div>
        </div>
      </section>

      {/* ═══ DISCOVERY VS ELIGIBILITY ════════════════════════ */}
      <section className="cd-sec cd-sec--ivory reveal">
        <div className="cd-wrap">
          <p className="reveal cd-ew">Understanding the difference</p>
          <h2 className="reveal">Coverage discovery versus eligibility verification</h2>
          <p className="reveal cd-intro-p">The two terms describe different operations and solve different problems.</p>

          <div className="cd-compare">
            <div className="cd-compare-col cd-compare-col--left">
              <div className="cd-compare-marker">A</div>
              <div className="cd-compare-head">Eligibility verification</div>
              <p>Confirms benefits on a plan the patient already provided. It starts with known insurance data and checks whether coverage is active for a specific service: copays, deductibles, referral requirements, and prior authorization needs. It runs at scheduling or check-in. It does not search for coverage the patient never mentioned.</p>
            </div>
            <div className="cd-compare-col cd-compare-col--right">
              <div className="cd-compare-marker">B</div>
              <div className="cd-compare-head">Coverage discovery</div>
              <p>Starts from the other direction. The patient has no insurance on file, or the information is incomplete, and we search payer databases to find active plans the provider does not know about. It queries state Medicaid systems, employer records, and commercial carriers. It runs pre-service, at registration, and post-service. It catches parent plans, dual-eligible coverage, workers&apos; comp, VA benefits, and retroactive Medicaid.</p>
            </div>
          </div>

          <div className="cd-compare-note">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
            <p>Most billing operations run eligibility checks at scheduling. Few run coverage discovery at all. The accounts that carry hidden insurance — young adults still on a parent&apos;s plan, dual-eligible Medicare and Medicaid patients, workers&apos; comp cases that were never flagged — are the ones that slip into the self-pay bucket and stay there.</p>
          </div>
        </div>
      </section>

      {/* ═══ THREE DISCOVERY POINTS ══════════════════════════ */}
      <section className="cd-sec cd-sec--navy reveal" id="how-it-works">
        <div className="cd-wrap">
          <p className="reveal cd-ew cd-ew--gold">Where we run discovery in the revenue cycle</p>
          <h2 className="reveal">Where we run discovery in the revenue cycle</h2>
          <p className="reveal cd-intro-p cd-intro-p--dark">We check for undiscovered coverage at three points, not one. Each catches revenue the others miss.</p>

          <div className="cd-steps">

            <div className="cd-step reveal">
              <div className="cd-step-aside">
                <div className="cd-step-num">01</div>
                <div className="cd-step-connector" aria-hidden="true" />
              </div>
              <div className="cd-step-body">
                <h3 className="reveal">Pre-service discovery</h3>
                <p>Before the patient is seen, we query payer databases through 270/271 eligibility transactions to confirm active coverage, benefit limits, copays, deductibles, referral requirements, and prior authorization needs. Patients with no insurance on file are flagged for a full discovery sweep, cross-checking state Medicaid systems, employer records, and commercial payer databases to surface coverage before the appointment.</p>
              </div>
            </div>

            <div className="cd-step reveal">
              <div className="cd-step-aside">
                <div className="cd-step-num">02</div>
                <div className="cd-step-connector" aria-hidden="true" />
              </div>
              <div className="cd-step-body">
                <h3 className="reveal">Point-of-service verification</h3>
                <p>At registration, we verify coordination of benefits to confirm primary, secondary, and tertiary payer order. COB errors account for 15 to 17 percent of all claim denials and cause 20 to 30 percent of claim processing delays in practices with high dual-coverage volume. We catch payer sequencing problems here, before they become CO-22 denials downstream.</p>
              </div>
            </div>

            <div className="cd-step reveal">
              <div className="cd-step-aside">
                <div className="cd-step-num">03</div>
              </div>
              <div className="cd-step-body">
                <h3 className="reveal">Post-service recovery</h3>
                <p>For accounts already classified as self-pay, we run batch sweeps against payer databases to find coverage that was missed at intake. Industry data shows a 10 to 30 percent hit rate on self-pay accounts, meaning one in ten to three in ten patients marked as uninsured actually have billable coverage at the time of service. We verify the match with an eligibility transaction, then route the account for claim submission, converting what was headed for write-off into a paid claim.</p>
              </div>
            </div>

          </div>

          {/* IMAGE PLACEHOLDER
              File: /public/cd-process.webp  |  Size: 1200 × 600 px
              AI prompt: "Medical billing team working through patient eligibility
              verification workflow, multiple stages visible, professional
              healthcare office, navy and green color palette, photorealistic" */}
          <div className="cd-process-img">
            <Image src="/cd-process.webp" alt="Medical billing team working through patient eligibility verification workflow at Medbilling RCM office" width={1200} height={600} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}} />
          </div>
        </div>
      </section>

      {/* ═══ SIX COVERAGE GAPS ═══════════════════════════════ */}
      <section className="cd-sec cd-sec--white reveal">
        <div className="cd-wrap">
          <p className="reveal cd-ew">Six coverage gaps we identify and close</p>
          <h2 className="reveal">Six coverage gaps we identify and close</h2>

          <div className="cd-gaps-grid">
            {[
              {
                n: "01", h: "Coordination of benefits", tag: "Most common",
                t: <>With <a href="https://textexpander.com/blog/coordination-of-benefits-medical-billing-guide" target="_blank" rel="noopener">43 million Americans covered by multiple health plans</a>, incorrect payer sequencing drives <a href="https://kepler.team/articles/simplifying-coordination-of-benefits" target="_blank" rel="noopener">15 to 17 percent of all claim denials</a>. We confirm the correct primary, secondary, and tertiary payer order before the claim goes out.</>,
              },
              {
                n: "02", h: "Medicaid and dual-eligible coverage", tag: "Second gap",
                t: "Many patients qualify for Medicaid but fail to report it, or do not realize they are dual-eligible for both Medicare and Medicaid. We cross-check state and federal databases to identify QMB, SLMB, and full dual-eligible beneficiaries, coverage that often goes undisclosed and unbilled.",
              },
              {
                n: "03", h: "Undisclosed secondary and tertiary plans", tag: "Third gap",
                t: "Young adults still covered under a parent's plan, spouses who assume the provider automatically sees their secondary coverage, and workers' comp or VA benefits that were never mentioned at intake all fall into this category.",
              },
              {
                n: "04", h: "Out-of-network and HDHP identification", tag: "Fourth gap",
                t: "High-deductible health plans and out-of-network situations create billing complexity. We confirm plan type, deductible status, and network participation so claims are routed correctly and patient responsibility is set before the visit.",
              },
              {
                n: "05", h: "Medicare Secondary Payer compliance", tag: "Fifth gap",
                t: "MSP rules determine when Medicare is not the primary payer. Employer group health plans, auto insurance, workers' comp, and liability situations all affect sequencing. We verify MSP status to prevent denials and comply with CMS billing requirements.",
              },
              {
                n: "06", h: "Retroactive and lapsed coverage", tag: "Sixth gap",
                t: "Medicaid coverage can activate retroactively. Commercial plans lapse mid-month. We verify coverage effective dates against dates of service, catching mismatches that would otherwise result in a denial or an account wrongly sent to collections.",
              },
            ].map(({ n, h, t, tag }) => (
              <article className="cd-gap-card reveal" key={n}>
                <div className="cd-gap-num-wrap">
                  <span className="cd-gap-num">{n}</span>
                  <span className="cd-gap-tag">{tag}</span>
                </div>
                <h3 className="reveal">{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONNECTED TO REST OF CYCLE ══════════════════════ */}
      <section className="cd-sec cd-sec--ivory reveal">
        <div className="cd-wrap">
          <p className="reveal cd-ew">Connected to the rest of your revenue cycle</p>
          <h2 className="reveal">Connected to the rest of your revenue cycle</h2>

          <div className="cd-connected-layout">
            <div className="cd-connected-copy">
              <p>Coverage discovery feeds directly into our <Link href="/services/">medical billing</Link>, <Link href="/services/medical-coding/">medical coding</Link>, <Link href="/services/medical-credentialing/">credentialing</Link>, and <Link href="/services/account-receivable-management/">AR recovery</Link> workflows. When we find coverage, the claim moves. It does not sit in a queue waiting for a handoff.</p>
              <p>We integrate with your existing EHR and practice management system, including eClinicalWorks, Athenahealth, NextGen, Kareo, AdvancedMD, Epic, RXNT, Office Ally, and 30+ others. No system replacement. No staff retraining. Implementation is scoped during the free coverage audit at no extra charge.</p>
              <div className="cd-ehr-strip">
                {["eClinicalWorks","Athenahealth","NextGen","Kareo","AdvancedMD","Epic","RXNT","Office Ally","30+ others"].map(s => (
                  <span className="cd-ehr-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>

            {/* IMAGE PLACEHOLDER
                File: /public/cd-integration.webp  |  Size: 640 × 720 px
                AI prompt: "Medical billing software integration dashboard on
                computer screen, EHR and payer database connections visible,
                clean professional interface, healthcare technology, photorealistic" */}
            <div className="cd-connected-img">
              <Image src="/cd-integration.webp" alt="Medbilling RCM integration dashboard showing EHR system and payer database connections on computer screen" width={640} height={720} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",borderRadius:"var(--radius-card)"}} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="cd-sec cd-sec--navy reveal">
        <div className="cd-wrap">
          <p className="reveal cd-ew cd-ew--gold">Why practices choose Medbilling RCM for coverage discovery</p>
          <h2 className="reveal">Why practices choose Medbilling RCM for coverage discovery</h2>

          <div className="cd-why-grid">
            {[
              { icon:"🔍", h:"1,000+ payer network",        t:"We search across 1,000+ payers from a single platform: Medicare (Parts A, B, C, D), Medicaid in all states, TRICARE, VA, workers\u2019 comp, BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Humana, and regional plans." },
              { icon:"⏱️", h:"Three-point discovery",       t:"Most providers only check eligibility at scheduling. We run discovery before the visit, at registration, and as a batch sweep on aged self-pay accounts — three points, not one." },
              { icon:"🔒", h:"HIPAA-compliant by default",  t:"All transmissions are encrypted. A Business Associate Agreement is executed before any patient data is accessed. Patient demographics are used solely for coverage identification and are never shared with third parties." },
              { icon:"🔗", h:"No system replacement",       t:"Coverage discovery layers onto your current setup with no system replacement and no forced platform migration. Integration is scoped during the free coverage audit." },
            ].map(({ icon, h, t }) => (
              <div className="cd-why-card reveal" key={h}>
                <div className="reveal cd-why-icon">{icon}</div>
                <h3 className="reveal">{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>

          <div className="cd-why-cta">
            <Link href="/request-free-audit/" className="reveal pg-btn pg-btn--gold">Get a Free Coverage Audit</Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ════════════════════════════════════════════ */}
      <section className="cd-sec cd-sec--white reveal" id="faq">
        <div className="cd-wrap">
          <p className="reveal cd-ew">Coverage discovery questions we get asked</p>
          <h2 className="reveal">Coverage discovery questions we get asked</h2>
          <div className="cd-faq-layout">
            <div className="cd-faq-intro">
              <p>Direct answers for practices, hospitals, and billing teams evaluating coverage discovery.</p>
            </div>
            <div className="cd-faq-list">
              {[
                ["What is coverage discovery in medical billing?","Coverage discovery is the process of finding active insurance that a patient has but the provider has not captured. It identifies billable Medicare, Medicaid, and commercial coverage on accounts that would otherwise be classified as self-pay and written off as bad debt. It differs from eligibility verification, which confirms benefits on a plan the patient already provided."],
                ["How much revenue can coverage discovery recover?","Results depend on patient population and payer mix. Industry data shows that 10 to 30 percent of accounts classified as self-pay have active, billable insurance at the time of service. For providers with high self-pay volume, including emergency departments, FQHCs, and behavioral health practices, the recovery is typically material."],
                ["When should coverage discovery run in the revenue cycle?","At three points: before the appointment for pre-service eligibility and discovery, at registration for coordination of benefits verification, and after service as a batch sweep of self-pay accounts before they reach collections or write-off. Most providers only check at scheduling. Running at all three points catches coverage the others miss."],
                ["What is coordination of benefits and why does it cause denials?","Coordination of benefits determines which insurance pays first when a patient has multiple plans. COB errors, including billing the wrong primary payer, missing a secondary plan, or incorrect payer sequencing, account for 15 to 17 percent of all claim denials. Each reworked denial costs $25 to $57 in administrative time, and many are never reworked at all."],
                ["How does coverage discovery reduce bad debt?","It identifies active insurance on accounts that were classified as self-pay, converting what would have been a patient collection or write-off into a payer-billed claim. This reduces bad debt and lowers patient financial burden. The provider collects from the payer instead of chasing the patient, and the patient avoids a bill their insurance should have covered."],
                ["Does coverage discovery work with our EHR system?","Yes. We integrate with eClinicalWorks, Athenahealth, NextGen, Kareo, AdvancedMD, Epic, RXNT, Office Ally, and 30+ other EHR and practice management systems. Implementation requires no system replacement and no staff retraining. Integration is scoped during the free coverage audit at no extra charge."],
                ["What payers do you search?","We search across 1,000+ payers including Medicare Parts A through D, Medicaid in all states, TRICARE, VA benefits, workers' compensation, and commercial carriers such as BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, Humana, and regional plans. All searches run from a single integrated platform."],
                ["Is patient data secure during coverage discovery?","All transmissions are encrypted and run through HIPAA-compliant channels. We execute a Business Associate Agreement with every client before any patient data is accessed. Patient demographic data is used solely for coverage identification and is never shared with third parties."],
                ["How long does it take to see results from coverage discovery?","Pre-service discovery produces results before the patient visit. Post-service batch sweeps typically return discoverable coverage within the first two weeks of engagement. Claims on discovered coverage are submitted immediately, and reimbursement follows the normal payer processing timeline, usually 14 to 30 days for clean claims."],
                ["How do I get started?","Request a free coverage audit. We analyze a sample of your self-pay accounts, identify recoverable coverage by payer type, and report back what we find, including your estimated recovery and coordination-of-benefits exposure. You keep the findings whether or not you work with us."],
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

      {/* ═══ ASSESSMENT CTA ═════════════════════════════════ */}
      <CtaSection
        eyebrow="Ready when you are"
        heading="The free coverage audit is specific."
        body="We pull a sample of your self-pay accounts and show your discoverable coverage by payer type, your coordination-of-benefits exposure, and your estimated recovery. You keep the findings whether or not you work with us. If you decide to move forward, engagement starts within two weeks with no setup fee and no long-term contract."
        ctaLabel="Get a Free Coverage Audit"
        formId="coverageAuditForm"
        checklist={[
          "Discoverable coverage by payer type from your self-pay accounts",
          "Coordination-of-benefits exposure report",
          "Estimated recovery dollar amount",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="100% HIPAA compliant · 1,000+ payers searched · All 50 states"
      />

    </main>
  );
}
