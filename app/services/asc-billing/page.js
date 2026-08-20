import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";

export default function ASCBillingPage() {
  return (
    <main className="asc-page" id="main">

      {/* ═══ HERO ══════════════════════════════════════════════
          IMAGE PLACEHOLDER
          File: /public/asc-hero.webp  |  Size: 1536 × 900 px
          Subject: ASC operating room or surgical team in a modern
                   ambulatory surgery center — sterile environment,
                   surgical equipment, professional clinical setting.
          AI prompt: "Modern ambulatory surgery center operating room,
                     surgical team preparing for procedure, sterile
                     clinical environment, professional healthcare
                     setting, navy and green tones, photorealistic,
                     no text overlay, wide format"
      ══════════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="Ambulatory surgery center billing services"
        heading="Ambulatory surgery center billing services"
        intro="ASC billing runs on a separate payment system most billing teams were never trained on: facility fees under Ambulatory Payment Classifications, not the physician fee schedule. Implant reimbursement splits between pass-through and packaged categories. The multiple procedure reduction follows a 100/50/50 rule. And Medicare will not pay a facility fee for any procedure not on the ASC Covered Procedures List. We are an ASC billing company built for that reality, handling ASC medical billing and ASC revenue cycle management exclusively."
        note="1,000+ Payers  |  48hr Denial Turnaround  |  CMS + NCCI + HIPAA Compliant"
        cta="Get a Free Revenue Assessment"
        ctaAlt="See how it works"
        ctaAltHref="#how-it-works"
        badge="APC · NCCI · HIPAA"
        image="/asc-hero.webp"
        imageAlt="Surgical team performing a procedure in an ambulatory surgery center operating room"
        imageW={1536}
        imageH={900}
      />

      {/* ═══ FEATURE STRIP ══════════════════════════════════ */}
      <div className="asc-feature-strip">
        <div className="asc-feature-inner">
          {[
            { icon:"⚕️", text:"APC payment system" },
            { icon:"🔩", text:"Implant pass-through + packaged billing" },
            { icon:"📐", text:"100/50/50 multiple procedure reduction" },
            { icon:"✅", text:"ASC Covered Procedures List compliance" },
          ].map(({ icon, text }) => (
            <div className="asc-feature-item" key={text}>
              <span className="asc-feature-icon" aria-hidden="true">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ COMPLIANCE BADGES ══════════════════════════════ */}
      <div className="asc-badges-bar">
        <div className="asc-badges-inner">
          <span className="asc-badges-label">Compliance standards</span>
          <div className="asc-badges-div" aria-hidden="true" />
          {[
            { icon:"🏛️", text:"CMS Compliant" },
            { icon:"📋", text:"NCCI Compliant" },
            { icon:"🔒", text:"HIPAA Compliant" },
            { icon:"📊", text:"ASCQR Compliant" },
          ].map(({ icon, text }) => (
            <span className="asc-badge" key={text}>
              <span aria-hidden="true">{icon}</span>{text}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ WHY ASC BILLING BREAKS DIFFERENTLY ════════════ */}
      <section className="asc-sec asc-sec--white reveal">
        <div className="asc-wrap">
          <p className="reveal asc-ew">Why ASC billing breaks differently than physician billing</p>
          <h2 className="reveal">Why ASC billing breaks differently than physician billing</h2>

          {/* Two-column comparison: physician vs ASC facility */}
          <div className="asc-compare">
            <div className="asc-compare-col asc-compare-col--left">
              <div className="asc-compare-marker">A</div>
              <div className="asc-compare-head">Physician billing</div>
              <div className="asc-compare-tag asc-compare-tag--green">PFS · One claim · 10–12% denial</div>
              <p>Physician practices bill professional fees under the Medicare Physician Fee Schedule. One claim per encounter. One payment per service. Standard CPT coding with modifier rules physicians already know.</p>
            </div>
            <div className="asc-compare-col asc-compare-col--right">
              <div className="asc-compare-marker">B</div>
              <div className="asc-compare-head">ASC facility billing</div>
              <div className="asc-compare-tag asc-compare-tag--amber">APC · Two claims per case · 16–22% denial</div>
              <p>ASCs bill facility fees under a separate payment system: Ambulatory Payment Classifications. The facility fee covers nursing, supplies, equipment, and the operating room. It is billed separately from the surgeon&apos;s professional fee, which the surgeon&apos;s practice bills on its own claim.</p>
              <p>That split creates two claims for every case, each with its own coding rules, modifier requirements, and payer adjudication path. APC + implant + modifier + NCCI — none of it applies to physician billing.</p>
            </div>
          </div>

          {/* Stat-forward denial data */}
          <div className="asc-denial-stats">
            <div className="asc-denial-block">
              <div className="asc-denial-num">16–22<span>%</span></div>
              <p>ASC first-pass denial rate, according to <a href="https://www.medicalbillersandcoders.com/blog/top-10-ambulatory-surgery-center-asc-billing-companies-2026/" target="_blank" rel="noopener">Medical Billers and Coders&apos; 2026 ASC industry report</a> — significantly above the physician group average of 10 to 12%. The higher rate is driven by implant pass-through billing complexity, prior authorization denials, and NCCI bundling violations that physician billing rarely encounters.</p>
            </div>
            <div className="asc-denial-block">
              <div className="asc-denial-num">9.4<span>%→</span>12.8<span>%</span></div>
              <p>The average ASC claim denial rate increased from 9.4% in 2024 to an <a href="https://www.medicalbillersandcoders.com/blog/asc-claim-denial-rates-climbing-2026/" target="_blank" rel="noopener">estimated 12.8% in 2026</a> among multi-OR facilities. That increase is not driven by coding error volume. It is driven by infrastructure gaps that general billing platforms are not built to catch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW THE ASC PAYMENT SYSTEM WORKS ══════════════ */}
      <section className="asc-sec asc-sec--navy reveal" id="how-it-works">
        <div className="asc-wrap">
          <p className="reveal asc-ew asc-ew--gold">How the ASC payment system works</p>
          <h2 className="reveal">How the ASC payment system works</h2>

          {/* Three key stats */}
          <div className="asc-pay-stats">
            <div className="asc-pay-card">
              <div className="asc-pay-num">2.6<span>%</span></div>
              <div className="asc-pay-lbl">CY 2026 rate increase</div>
              <p>CMS increased ASC rates by 2.6% for CY 2026. ASCs that fail <a href="https://www.cms.gov/newsroom/fact-sheets/calendar-year-2026-hospital-outpatient-prospective-payment-system-opps-ambulatory-surgical-center" target="_blank" rel="noopener">ASC Quality Reporting Program</a> requirements face a 2.0 percentage point payment reduction.</p>
            </div>
            <div className="asc-pay-card">
              <div className="asc-pay-num">54.5<span>%</span></div>
              <div className="asc-pay-lbl">Of the OPPS rate</div>
              <p>Medicare <a href="https://roithatworks.com/specialties/ambulatory-surgery-center-billing.html" target="_blank" rel="noopener">ASC rates sit at approximately 54.5% of the OPPS rate</a> for comparable procedures. A coding error that might cost a hospital $50 on a $500 procedure costs an ASC the same $50 on a $272 payment. Half the margin, same dollar loss.</p>
            </div>
            <div className="asc-pay-card asc-pay-card--accent">
              <div className="asc-pay-num">573</div>
              <div className="asc-pay-lbl">New CPL codes in CY 2026</div>
              <p>CMS added 573 new codes to the ASC Covered Procedures List for CY 2026. An outdated charge master either bills for procedures Medicare rejects or misses newly covered procedures.</p>
            </div>
          </div>

          <p className="reveal asc-pay-intro">Medicare reimburses ASCs based on the Ambulatory Payment Classification system. Each covered procedure is assigned to an APC group with a fixed facility payment. CMS updates rates annually.</p>

          {/* Three payment rules — icon cards, not paragraphs */}
          <div className="asc-rules-grid">
            <div className="asc-rule-card reveal">
              <div className="asc-rule-icon">📐</div>
              <h3 className="reveal">Multiple procedure reduction</h3>
              <p>When multiple procedures are performed in the same session, the highest pays at 100%, each additional at 50%. Billing at full rate triggers recoupment.</p>
              <div className="asc-rule-consequence">⚠ Consequence: recoupment demand from payer</div>
            </div>
            <div className="asc-rule-card reveal">
              <div className="asc-rule-icon">🔩</div>
              <h3 className="reveal">Pass-through versus packaged implants</h3>
              <p>Pass-through implants bill separately using HCPCS C-codes. Packaged implants are bundled into the APC rate. Billing a packaged implant separately triggers CARC 96. Missing a pass-through implant means lost revenue.</p>
              <div className="asc-rule-consequence">⚠ Consequence: CARC 96 denial or missed revenue</div>
            </div>
            <div className="asc-rule-card reveal">
              <div className="asc-rule-icon">✅</div>
              <h3 className="reveal">ASC Covered Procedures List</h3>
              <p>Medicare will not pay an ASC facility fee for a procedure not on the CPL. CMS added 573 new codes for CY 2026. An outdated charge master either bills for procedures Medicare rejects or misses newly covered procedures.</p>
              <div className="asc-rule-consequence">⚠ Consequence: zero payment on uncovered procedures</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES COVERED ════════════════════════════════ */}
      <section className="asc-sec asc-sec--ivory reveal">
        <div className="asc-wrap">
          <p className="reveal asc-ew">What our surgery center billing services cover</p>
          <h2 className="reveal">What our surgery center billing services cover</h2>

          <div className="asc-services-img">
            <img
              src="/asc-services.webp"
              alt="ASC billing specialists reviewing operative reports and claims at dual-monitor workstations"
              width={1100}
              height={600}
              loading="lazy"
              decoding="async"
              style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"var(--radius-card)"}}
            />
          </div>

          <div className="asc-services-grid">
            {[
              { n:"01", icon:"📋", h:"Prior authorization and eligibility",     t:"Verified at scheduling, not the day of surgery. Authorization status tracked through date of service." },
              { n:"02", icon:"🏥", h:"Charge capture from OR logs",             t:"Operative reports and supply logs reconciled against the billing record for every case. Missed charges generate no alert." },
              { n:"03", icon:"⚕️", h:"APC coding and claim submission",          t:"NCCI edit updates tracked on each CMS quarterly release. Modifiers 50, 51, 59, SG, LT/RT, and XE/XS/XP/XU managed per procedure." },
              { n:"04", icon:"🔩", h:"Implant billing (pass-through and packaged)", t:"Pass-through implants billed with HCPCS C-codes. Packaged items verified against APC rate. Every implant classified before submission." },
              { n:"05", icon:"🔁", h:"Denial management",                       t:<>Root cause analysis, correction, and resubmission or appeal within 48 hours. Denial patterns tracked to prevent recurrence.</> },
              { n:"06", icon:"🔍", h:"Coverage discovery and out-of-network",   t:<>Self-pay write-offs converted to billable claims via <Link href="/services/coverage-discovery/">coverage discovery</Link>. Out-of-network cases verified for benefits, medical necessity documented, and patient financial responsibility communicated before the procedure.</> },
            ].map(({ n, icon, h, t }) => (
              <article className="asc-service-card reveal" key={n}>
                <div className="asc-service-top">
                  <span className="asc-service-num">{n}</span>
                  <span className="asc-service-icon" aria-hidden="true">{icon}</span>
                </div>
                <h3 className="reveal">{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IN-HOUSE VS OUTSOURCED ══════════════════════════ */}
      <section className="asc-sec asc-sec--white reveal">
        <div className="asc-wrap">
          <p className="reveal asc-ew">The cost of running ASC billing in-house</p>
          <h2 className="reveal">The cost of running ASC billing in-house</h2>

          <div className="asc-cost-compare">
            <div className="asc-cost-col asc-cost-col--left">
              <div className="asc-cost-marker">In-house</div>
              <div className="asc-cost-num-row">
                <div className="asc-cost-num-block">
                  <div className="asc-cost-num">$46,660</div>
                  <div className="asc-cost-num-lbl">Median salary <a href="https://www.bls.gov/oes/current/oes436011.htm" target="_blank" rel="noopener">BLS May 2024</a></div>
                </div>
                <div className="asc-cost-num-block">
                  <div className="asc-cost-num">$65K–$85K</div>
                  <div className="asc-cost-num-lbl">Loaded cost per staff member</div>
                </div>
              </div>
              <ul className="asc-cost-list">
                <li>Minimum 2+ staff needed for coverage</li>
                <li>Denial queue grows during staff turnover</li>
                <li>ASC-specific APC and implant expertise rare</li>
                <li>AR damage surfaces weeks after the problem starts</li>
              </ul>
            </div>
            <div className="asc-cost-col asc-cost-col--right">
              <div className="asc-cost-marker">Outsourced</div>
              <div className="asc-cost-num-row">
                <div className="asc-cost-num-block">
                  <div className="asc-cost-num">4–8<span>%</span></div>
                  <div className="asc-cost-num-lbl">Of collections</div>
                </div>
                <div className="asc-cost-num-block">
                  <div className="asc-cost-num">$60K–$120K</div>
                  <div className="asc-cost-num-lbl">At $1.5M/yr — all-in</div>
                </div>
              </div>
              <ul className="asc-cost-list">
                <li>Coding + denial management + credentialing + reporting</li>
                <li>No turnover gap — denial queue never stops</li>
                <li>ASC-specific billing expertise included</li>
                <li>Scales with case volume, no staff hiring required</li>
              </ul>
            </div>
          </div>

          <div className="asc-cost-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
            <p>The decision depends on case volume, specialty mix, and whether the current in-house team can keep denial rates below 10% and AR under 40 days. When staff turns over, the denial queue grows and nobody notices until the AR aging report surfaces the damage.</p>
          </div>
        </div>
      </section>

      {/* ═══ ASC SPECIALTIES ════════════════════════════════ */}
      <section className="asc-sec asc-sec--navy reveal">
        <div className="asc-wrap">
          <p className="reveal asc-ew asc-ew--gold">Built for every ASC specialty</p>
          <h2 className="reveal">Built for every ASC specialty</h2>

          <div className="asc-spec-grid">
            {[
              { icon:"🦴", sp:"Orthopedics",          t:"Joint replacements, arthroscopy, spine procedures. Total joints have expanded on the ASC CPL. We manage implant pass-through billing, device offset calculations, and bilateral/staged modifier logic." },
              { icon:"💉", sp:"Pain management",       t:"Epidural steroid injections, nerve blocks, radiofrequency ablation, spinal cord stimulator trials. Prior authorization requirements vary by payer and procedure. We verify before every scheduled case." },
              { icon:"🔬", sp:"Gastroenterology",      t:"EGD and colonoscopy at high volume with tight APC margins. We reconcile biopsy and polypectomy findings against the operative report to bill the correct procedure code, not the screening code." },
              { icon:"👁️", sp:"Ophthalmology",         t:"Cataract surgery (CPT 66984), glaucoma, retinal surgery. Modifiers LT/RT and 50 for laterality and bilateral. IOL implant charges captured separately when applicable." },
              { icon:"👂", sp:"ENT and general surgery", t:"Tonsillectomy, septoplasty, hernia repair, cholecystectomy. NCCI edit compliance and multiple procedure reduction on most multi-procedure sessions." },
              { icon:"🏥", sp:"Multi-specialty ASCs",  t:"Billing workflows configured per specialty. APC groups, modifier rules, and payer requirements managed separately rather than one generic rule set across the center." },
            ].map(({ icon, sp, t }) => (
              <article className="asc-spec-card reveal" key={sp}>
                <div className="asc-spec-icon" aria-hidden="true">{icon}</div>
                <h3 className="reveal">{sp}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ASC SYSTEMS ════════════════════════════════════ */}
      <section className="asc-sec asc-sec--ivory reveal">
        <div className="asc-wrap">
          <p className="reveal asc-ew">Works with your existing ASC systems</p>
          <h2 className="reveal">Works with your existing ASC systems</h2>
          <p className="asc-sys-lead">No system replacement. No workflow disruption. Billing connects to your existing <Link href="/services/medical-credentialing/">credentialing</Link> and <Link href="/services/account-receivable-management/">AR recovery</Link> workflows from a single team.</p>
          <div className="asc-sys-strip">
            {["HST Pathways","SIS (Surgical Information Systems)","AmkaiSolutions","AdvancedMD","30+ others"].map(s => (
              <span className="asc-sys-tag" key={s}>{s}</span>
            ))}
          </div>

          <div className="asc-sys-cta">
            <Link href="/request-free-audit/" className="reveal pg-btn pg-btn--gold">Get a Free Revenue Assessment</Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ════════════════════════════════════════════ */}
      <section className="asc-sec asc-sec--white reveal" id="faq">
        <div className="asc-wrap">
          <p className="reveal asc-ew">ASC billing questions we get asked</p>
          <h2 className="reveal">ASC billing questions we get asked</h2>
          <div className="asc-faq-layout">
            <div className="asc-faq-intro">
              <p>Direct answers for surgery center administrators and billing teams evaluating ASC billing services.</p>
            </div>
            <div className="asc-faq-list">
              {[
                ["What is ASC in billing?",
                 "ASC stands for Ambulatory Surgery Center. In billing, an ASC is a facility that performs outpatient surgical procedures and bills a facility fee separately from the surgeon's professional fee. The facility fee covers the operating room, nursing, equipment, and supplies. ASCs are reimbursed under the Ambulatory Payment Classification system for Medicare and under individual contracts for commercial payers."],
                ["What is the difference between ASC billing and hospital outpatient billing?",
                 "Both handle outpatient surgical procedures, but the payment systems differ. Hospital outpatient departments bill under the Outpatient Prospective Payment System (OPPS) at higher rates. ASCs bill under the ASC payment system, where rates are set at approximately 54.5% of OPPS. ASCs use the CMS-1500 form with Place of Service 24, while hospital outpatient uses the UB-04 with POS 22. Modifier rules, covered procedure lists, and implant billing also differ between the two settings."],
                ["How is ASC billing different from physician billing?",
                 "ASCs bill facility fees under the APC system, separate from the surgeon's professional fee. The facility claim covers the operating room, nursing, supplies, and equipment. Physician billing covers the surgeon's work. ASCs also deal with implant pass-through billing, the ASC Covered Procedures List, and the multiple procedure reduction rule, none of which apply to physician billing."],
                ["Can an ASC bill on a UB-04 form?",
                 "Most freestanding ASCs bill on the CMS-1500 (837P) form using Place of Service code 24. Some state Medicaid programs and certain commercial contracts require the UB-04 (837I) format. Hospital-based ASCs typically use the UB-04. We configure claim format rules per payer to prevent form-related rejections."],
                ["What is the ASC Covered Procedures List?",
                 "The ASC Covered Procedures List is the CMS list of surgical procedures eligible for Medicare facility fee payment in an ASC. If a procedure is not on the CPL, Medicare will not pay a facility fee for it. CMS updates the CPL annually. For CY 2026, 573 new procedure codes were added. Charge masters must be updated each year."],
                ["How do you handle implant and supply billing?",
                 "We reconcile operative reports and supply logs against the billing record for every case. Pass-through implants are billed separately using HCPCS C-codes. Packaged implants are included in the APC rate and cannot be billed as separate line items. We verify every implant classification to prevent missed revenue and CARC 96 denials."],
                ["What causes the most ASC claim denials?",
                 "Missing or expired prior authorizations, CPT coding errors, modifier misuse, NCCI bundling violations, documentation gaps, and eligibility issues. ASCs experience first-pass denial rates of 16 to 22%, driven by billing complexity that general platforms do not handle well."],
                ["How do I get started?",
                 "Request a free revenue assessment. We review your denial rate by root cause, implant charge capture accuracy, APC coding patterns, and payer contract performance. You receive a written report with findings and recommendations. No obligation, no upfront cost, and you keep the report whether or not you work with us."],
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
        heading="Your center runs the cases. We collect the revenue."
        body="The free revenue assessment covers your denial rate by root cause, implant charge capture accuracy against OR logs, APC coding patterns, and estimated recoverable revenue. You keep the findings whether or not you work with us."
        ctaLabel="Get a Free Revenue Assessment"
        formId="ascAssessmentForm"
        checklist={[
          "Denial rate by root cause from your ASC claim volume",
          "Implant charge capture accuracy against OR logs",
          "APC coding pattern review",
          "Estimated recoverable revenue",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="CMS + NCCI + HIPAA compliant · 1,000+ payers · All 50 states"
      />

    </main>
  );
}
