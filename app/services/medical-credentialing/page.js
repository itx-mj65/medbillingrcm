import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";

export default function MedicalCredentialingPage() {
  return (
    <main className="cred-page" id="main">

      {/* ═══ HERO ══════════════════════════════════════════════
          IMAGE PLACEHOLDER
          File: /public/cred-hero.webp  |  Size: 1536 × 900 px
          Subject: Credentialing specialist reviewing provider
                   enrollment documents at a professional workstation,
                   payer portal visible on screen, organized file system.
          AI prompt: "Medical credentialing specialist reviewing
                     provider enrollment documents and payer portal
                     on dual monitors in professional healthcare
                     billing office, CAQH and PECOS forms visible,
                     navy and green tones, photorealistic, no text"
      ══════════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="Medical credentialing services"
        heading="Medical credentialing services"
        intro="A provider who cannot bill cannot generate revenue. The credentialing process that stands between hiring a provider and collecting for their services takes 60 to 120 days with most payers. That gap costs practices between $6,000 and $8,000 per provider per month in unbilled revenue. We are a medical credentialing company built for that gap. Our physician credentialing services, provider credentialing services, and insurance credentialing services are integrated directly with your billing workflow so revenue starts the day the contract executes."
        note="1,000+ Payers Credentialed  |  48hr Weekly Follow-Up Cycle  |  NCQA + HIPAA Compliant"
        cta="Get a Free Credentialing Assessment"
        ctaAlt="See our process"
        ctaAltHref="#process"
        badge="NCQA · HIPAA · CAQH"
        heroPlaceholder={{
          title:  "Hero Image — Credentialing Specialist",
          spec:   "1536 × 900 px  ·  /public/cred-hero.webp",
          prompt: "Medical credentialing specialist reviewing provider enrollment documents and payer portal on dual monitors in professional healthcare billing office, CAQH and PECOS forms visible, navy and green tones, photorealistic, no text overlay",
        }}
      />

      {/* ═══ COMPLIANCE BADGES ══════════════════════════════ */}
      <div className="cred-badges-bar">
        <div className="cred-badges-inner">
          <span className="cred-badges-label">Compliance standards</span>
          <div className="cred-badges-div" aria-hidden="true" />
          {[
            { icon:"🏛️", text:"NCQA Compliant" },
            { icon:"🔒", text:"HIPAA Compliant" },
            { icon:"⚕️", text:"CMS Compliant" },
            { icon:"📋", text:"CAQH Enrolled" },
          ].map(({ icon, text }) => (
            <span className="cred-badge" key={text}>
              <span aria-hidden="true">{icon}</span>{text}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ WHY DELAYS COST MORE ════════════════════════════ */}
      <section className="cred-sec cred-sec--white reveal" id="problem">
        <div className="cred-wrap">
          <p className="cred-ew">Why credentialing delays cost more than most practices realize</p>
          <h2>Why credentialing delays cost more than most practices realize</h2>

          {/* Two stat blocks — large numbers as anchors */}
          <div className="cred-stat-row">
            <div className="cred-stat-block">
              <div className="cred-stat-num">$122,144</div>
              <div className="cred-stat-lbl">Average revenue lost per physician over a 120-day delay</div>
              <div className="cred-stat-src">
                <a href="https://neolytix.com/articles/credentialing-delays-revenue-loss/" target="_blank" rel="noopener">Neolytix</a> / <a href="https://sutherlandglobal.com/insights/blog/cost-of-provider-credentialing-delays-and-revenue-loss" target="_blank" rel="noopener">Sutherland Global, 2026</a>
              </div>
            </div>
            <div className="cred-stat-block cred-stat-block--accent">
              <div className="cred-stat-num">1 in 3</div>
              <div className="cred-stat-lbl">Credentialing applications require correction or resubmission</div>
              <div className="cred-stat-src"><a href="https://mbwrcm.com/the-revenue-cycle-blog/provider-credentialing-timeline-and-delays" target="_blank" rel="noopener">mbwrcm.com, 2026</a></div>
            </div>
          </div>

          <p>A provider is ready to see patients. The schedule is full. The clinical team has completed onboarding. But until that provider is credentialed and enrolled with each payer, they cannot bill a single claim. Staffing costs hit your payroll immediately. Revenue activation follows 90 to 120 days later, if everything goes right.</p>

          {/* Callout — 43% stat */}
          <div className="cred-callout">
            <div className="cred-callout-accent" aria-hidden="true" />
            <div>
              <div className="cred-callout-stat">43% of healthcare organizations now report losing $50,000 or more per month due to credentialing delays</div>
              <p className="cred-callout-sub">according to an <a href="https://ngahealthcare.com/blog/how-long-does-credentialing-take-detailed-guide" target="_blank" rel="noopener">Intelliworx 2026 survey cited by NGAHealthcare</a>. The single most important timing decision a practice makes is starting the credentialing process the day a new provider signs their offer letter, not their first day of work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PAYER TIMELINE ══════════════════════════════════ */}
      <section className="cred-sec cred-sec--ivory reveal">
        <div className="cred-wrap">
          <p className="cred-ew">How long does credentialing take by payer?</p>
          <h2>How long does credentialing take by payer?</h2>

          <div className="cred-timeline-grid">
            {[
              { payer:"Medicare (PECOS)", days:"15–30", unit:"days", note:"Electronic; 95% within 15 days per CMS", color:"green" },
              { payer:"Medicaid",         days:"45–90", unit:"days", note:"Varies by state; managed care adds separate applications", color:"yellow" },
              { payer:"Commercial (BCBS, Aetna, UHC, Cigna)", days:"90–150", unit:"days", note:"Delegated networks can run longer", color:"orange" },
              { payer:"Expedited (when available)", days:"30–60", unit:"days", note:"Only with complete clean submission", color:"blue" },
            ].map(({ payer, days, unit, note, color }) => (
              <div className={`cred-timeline-card cred-timeline-card--${color}`} key={payer}>
                <div className="cred-timeline-days">{days}</div>
                <div className="cred-timeline-unit">{unit}</div>
                <div className="cred-timeline-payer">{payer}</div>
                <div className="cred-timeline-note">{note}</div>
              </div>
            ))}
          </div>

          <div className="cred-ncqa-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
            <p><a href="https://piehealthusa.com/insurance-credentialing-timelines-in-2026-what-practices-should-expect" target="_blank" rel="noopener">NCQA rule changes effective July 2025</a> require monthly license checks, exclusion monitoring every 30 days, and credentialing windows of 90 to 120 days. A small discrepancy in NPI data, taxonomy codes, or CAQH profile can restart the clock instead of triggering a correction request.</p>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES COVERED ════════════════════════════════ */}
      <section className="cred-sec cred-sec--white reveal">
        <div className="cred-wrap">
          <p className="cred-ew">What our healthcare credentialing services cover</p>
          <h2>What our healthcare credentialing services cover</h2>

          {/* IMAGE PLACEHOLDER
              File: /public/cred-services.webp  |  Size: 1100 × 580 px
              Subject: Credentialing team reviewing provider enrollment
                       applications and CAQH profiles on dual monitors.
              AI prompt: "Medical credentialing team reviewing CAQH profiles
                         and payer enrollment applications on dual computer
                         monitors, professional healthcare billing office,
                         organized workstation, photorealistic" */}
          <div className="cred-services-img cred-img-placeholder" aria-label="Image placeholder">
            <div className="cred-ph-inner">
              <span className="cred-ph-icon">📷</span>
              <strong>Services Section Image</strong>
              <span>1100 × 580 px · /public/cred-services.webp</span>
              <em>AI prompt: "Medical credentialing team reviewing CAQH profiles and payer enrollment applications on dual computer monitors, professional healthcare billing office, organized workstation, photorealistic"</em>
            </div>
          </div>

          <div className="cred-services-grid">
            {[
              { n:"01", icon:"📋", h:"CAQH profile setup and attestation management (insurance credentialing services)", t:"The CAQH ProView profile is the foundation of commercial payer credentialing. We build or update the profile, upload all required documents, authorize relevant payers, and manage the mandatory 120-day re-attestation cycle. A lapsed profile stops all connected commercial enrollments." },
              { n:"02", icon:"⚕️", h:"Medicare and Medicaid enrollment (PECOS)", t:"We manage Medicare enrollment through PECOS using the correct CMS forms (855I for individual providers, 855B for group practices, 855A for institutional providers). We also handle state-specific Medicaid applications and managed care plan enrollments separately, since each MCO requires its own application." },
              { n:"03", icon:"🏥", h:"Commercial insurance credentialing", t:"Applications submitted to BCBS, Aetna, UnitedHealthcare, Cigna, Humana, and regional managed care plans. We follow up with payer credentialing committees weekly, not monthly, tracking each file so stale applications do not close for inactivity. Payer enrollment is activated the moment the committee approves." },
              { n:"04", icon:"🔍", h:"Primary source verification", t:"Licenses, board certifications, DEA registration, malpractice history, education records, and work history verified directly against issuing bodies before any application goes out. One discrepancy caught here prevents a 90-day restart downstream." },
              { n:"05", icon:"🔄", h:"Re-credentialing and revalidation", t:"Medicare requires revalidation every five years. Most commercial payers require re-credentialing every two to three years. We track every expiration across your provider roster and initiate renewals before deadlines, not after." },
              { n:"06", icon:"📝", h:"Hospital privileges and contract negotiation", t:<>We coordinate applications for hospital admitting privileges and assist with payer contract and fee schedule review. Getting to contract is the finish line of credentialing. We do not stop at enrollment. See: <Link href="/services/hospital-medical-billing/">hospital billing services</Link>.</> },
            ].map(({ n, icon, h, t }) => (
              <article className="cred-service-card reveal" key={n}>
                <div className="cred-service-top">
                  <span className="cred-service-num">{n}</span>
                  <span className="cred-service-icon" aria-hidden="true">{icon}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4-STEP PROCESS ══════════════════════════════════ */}
      <section className="cred-sec cred-sec--navy reveal" id="process">
        <div className="cred-wrap">
          <p className="cred-ew cred-ew--gold">Our physician credentialing services: four-step process</p>
          <h2>Our physician credentialing services: four-step process</h2>

          <div className="cred-steps">

            <div className="cred-step reveal">
              <div className="cred-step-aside">
                <div className="cred-step-num">01</div>
                <div className="cred-step-connector" aria-hidden="true" />
              </div>
              <div className="cred-step-body">
                <h3>Application and documentation gathering</h3>
                <p>We collect every required document: NPI details, active license, DEA registration, board certifications, education records, malpractice coverage, and complete work history with no unexplained gaps. We verify each document against the issuing source before the file moves forward.</p>
              </div>
            </div>

            <div className="cred-step reveal">
              <div className="cred-step-aside">
                <div className="cred-step-num">02</div>
                <div className="cred-step-connector" aria-hidden="true" />
              </div>
              <div className="cred-step-body">
                <h3>Primary source verification</h3>
                <p>Every credential verified directly: state medical boards, educational institutions, training programs, malpractice carriers. Discrepancies resolved before payer submission, not after a rejection.</p>
              </div>
            </div>

            <div className="cred-step reveal">
              <div className="cred-step-aside">
                <div className="cred-step-num">03</div>
                <div className="cred-step-connector" aria-hidden="true" />
              </div>
              <div className="cred-step-body">
                <h3>Payer submission and weekly tracking</h3>
                <p>Applications submitted electronically through payer portals or secure channels. We maintain weekly contact with payer credentialing committees and flag files at risk of going stale. A file nobody is watching stops moving.</p>
              </div>
            </div>

            <div className="cred-step reveal">
              <div className="cred-step-aside">
                <div className="cred-step-num">04</div>
              </div>
              <div className="cred-step-body">
                <h3>Contract attainment and billing activation</h3>
                <p>Once approved, we coordinate payer contract and fee schedule review before execution. We confirm the effective date and billing start date with your <Link href="/services/physician-billing/">billing team</Link> so claims begin on day one, not weeks later.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ PROVIDER TYPES ══════════════════════════════════ */}
      <section className="cred-sec cred-sec--ivory reveal">
        <div className="cred-wrap">
          <p className="cred-ew">Healthcare credentialing services by provider type</p>
          <h2>Healthcare credentialing services by provider type</h2>

          <div className="cred-types-grid">
            {[
              {
                icon:"👨‍⚕️", type:"Physicians and multi-specialty groups",
                t:"Individual provider enrollments, group NPI linkage, hospital privileging coordination, and cross-payer updates across multi-site practices. Total joint replacement, surgical specialists, and high-volume proceduralists face the longest commercial timelines. We flag those files for parallel submission to shorten the aggregate cycle.",
              },
              {
                icon:"🧠", type:"Mental and behavioral health providers",
                t:"Insurance credentialing for mental health providers involves distinct panel requirements and licensure checks by payer. We manage enrollment for psychiatrists, licensed clinical psychologists, LCSWs, LMFTs, and professional counselors, including panel availability verification before submission.",
              },
              {
                icon:"🩺", type:"Nurse practitioners and physician assistants",
                t:"Advanced practice providers follow the same NPI, DEA, and CAQH requirements as physicians but carry collaborative agreement requirements, supervising physician attestations, and incident-to versus direct billing rules that vary by payer. We manage every layer.",
              },
              {
                icon:"🏢", type:"Multi-location and growing practices",
                t:"Each new location requires its own NPI linkage, payer notification, and in some cases a fresh credentialing file. We manage the roster centrally so a provider credentialed at one location bills correctly at all locations from day one.",
              },
            ].map(({ icon, type, t }) => (
              <article className="cred-type-card reveal" key={type}>
                <div className="cred-type-icon" aria-hidden="true">{icon}</div>
                <h3>{type}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IN-HOUSE VS OUTSOURCED ══════════════════════════ */}
      <section className="cred-sec cred-sec--white reveal">
        <div className="cred-wrap">
          <p className="cred-ew">The cost of managing credentialing in-house</p>
          <h2>The cost of managing credentialing in-house</h2>

          <div className="cred-cost-compare">
            <div className="cred-cost-col cred-cost-col--left">
              <div className="cred-cost-marker">In-house</div>
              <div className="cred-cost-rows">
                <div className="cred-cost-row">
                  <div className="cred-cost-num">$48,780</div>
                  <div className="cred-cost-lbl">Coordinator median salary/year — <a href="https://www.bls.gov/oes/current/oes119199.htm" target="_blank" rel="noopener">BLS May 2024 OES</a></div>
                </div>
                <div className="cred-cost-row cred-cost-row--highlight">
                  <div className="cred-cost-num">$65K–$80K</div>
                  <div className="cred-cost-lbl">Fully loaded per coordinator (salary + benefits + overhead)</div>
                </div>
                <div className="cred-cost-row">
                  <div className="cred-cost-num">1–2 FTEs</div>
                  <div className="cred-cost-lbl">Minimum headcount for adequate coverage</div>
                </div>
                <div className="cred-cost-row">
                  <div className="cred-cost-num">Turnover</div>
                  <div className="cred-cost-lbl">Single point of failure — files stall when coordinator leaves</div>
                </div>
              </div>
            </div>
            <div className="cred-cost-col cred-cost-col--right">
              <div className="cred-cost-marker">Outsourced to Medbilling RCM</div>
              <div className="cred-cost-rows">
                <div className="cred-cost-row">
                  <div className="cred-cost-num">Integrated</div>
                  <div className="cred-cost-lbl">With your <Link href="/services/physician-billing/">billing workflow</Link> — no hand-off gap</div>
                </div>
                <div className="cred-cost-row cred-cost-row--highlight">
                  <div className="cred-cost-num">Weekly</div>
                  <div className="cred-cost-lbl">Follow-up cycle with every payer credentialing committee</div>
                </div>
                <div className="cred-cost-row">
                  <div className="cred-cost-num">All-in</div>
                  <div className="cred-cost-lbl">CAQH + PECOS + commercial + re-credentialing covered</div>
                </div>
                <div className="cred-cost-row">
                  <div className="cred-cost-num">Day one</div>
                  <div className="cred-cost-lbl">Revenue starts at contract execution, not weeks after</div>
                </div>
              </div>
            </div>
          </div>

          <div className="cred-cost-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
            <p>The argument for outsourcing provider credentialing services is not staffing cost. Every week a payer enrollment sits unworked is a week of unbilled revenue. It is the revenue that stops moving when a credentialing file sits in a queue nobody is watching. At <a href="https://medusarcm.com/blog/cost-credentialing-delays-physician/" target="_blank" rel="noopener">$6,000 to $8,000 per provider per month in lost billable revenue</a>, a 30-day delay is more expensive than a month of outsourced service.</p>
          </div>

          <div className="cred-cost-cta">
            <Link href="/request-free-audit/" className="pg-btn pg-btn--gold">Get a Free Credentialing Assessment</Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ════════════════════════════════════════════ */}
      <section className="cred-sec cred-sec--ivory reveal" id="faq">
        <div className="cred-wrap">
          <p className="cred-ew">Medical credentialing questions we get asked</p>
          <h2>Medical credentialing questions we get asked</h2>
          <div className="cred-faq-layout">
            <div className="cred-faq-intro">
              <p>Direct answers for practices, groups, and hospital systems evaluating credentialing support.</p>
            </div>
            <div className="cred-faq-list">
              {[
                ["What is medical credentialing?",
                 "Medical credentialing is the process by which payers and healthcare facilities verify a provider's qualifications, licenses, board certifications, education, and professional history. It is the required step before a provider can bill insurance as an in-network participant. Without completed credentialing, claims submitted under that provider's NPI are denied."],
                ["What is the difference between provider credentialing and provider enrollment?",
                 "Credentialing is the verification phase: the payer confirms the provider is qualified. Provider enrollment is the contracting phase: the payer assigns a provider number and activates billing rights. Both must be complete before a provider can bill in-network. Most people use the terms interchangeably, but they are sequential steps, not the same step."],
                ["How long does medical credentialing take?",
                 "Medicare enrollment through PECOS takes 15 to 30 days for electronic submissions. Commercial payers typically take 90 to 150 days. Medicaid ranges from 45 to 90 days depending on the state. Delegated networks (Optum, Carelon) can take as long or longer than standard commercial plans. A complete, error-free submission with an up-to-date CAQH profile shortens the front end. Incomplete applications add 30 to 60 days."],
                ["What is CAQH and why does it matter?",
                 "CAQH ProView is the centralized database most commercial payers use to pull provider credentials. A complete, attested CAQH profile eliminates duplicate paperwork across payers. The profile must be re-attested every 120 days. A lapsed profile stops all connected commercial enrollments until re-attestation is complete. Providers also must explicitly authorize each payer to access the profile - forgetting this step delays enrollment even when the profile is current."],
                ["What documents are required for credentialing?",
                 "Core documents include: NPI (active, with correct taxonomy codes), state medical license, DEA registration, board certifications, malpractice insurance face sheet, education and training records, and complete work history with no unexplained gaps. Advanced practice providers also need collaborative agreements and supervising physician attestations. Incomplete applications are the leading cause of processing delays."],
                ["What is re-credentialing and when is it required?",
                 "Re-credentialing is the periodic reverification of a provider's credentials after initial enrollment. Medicare requires revalidation every five years. Most commercial payers require re-credentialing every two to three years. NCQA standards effective July 2025 require more frequent monitoring: license checks monthly, exclusion checks every 30 days. Missing a re-credentialing deadline can result in disenrollment from all payers until the process restarts."],
                ["Can a provider see patients before credentialing is complete?",
                 "Yes, but they cannot bill as an in-network provider. Claims submitted before a contract's effective date are denied. Commercial payers do not adjust effective dates retroactively. Once those claims are denied, they cannot be recovered. This is why start date alignment between credentialing and billing is critical."],
                ["How do I get started?",
                 "Request a free credentialing assessment. We review your current provider roster, open enrollments, CAQH profile status, expiring credentials, and payer mix - then deliver a written report with findings and a timeline. No obligation. You keep the report whether or not you work with us."],
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
      <div className="cred-closing-band">
        <div className="cred-closing-inner">
          <div>
            <p className="cred-ew cred-ew--gold" style={{marginBottom:"12px"}}>Your providers are ready. Get them billing.</p>
            <h2>Your providers are ready. Get them billing.</h2>
            <p>A new provider on your payroll costs you money every day they are not credentialed. At $6,000 to $8,000 per month in lost billable revenue per provider, every week of delay is measurable. As a medical credentialing company integrated with your billing team, we start the process the day you engage us, follow up weekly, and connect billing activation to contract execution so there is no gap between credentialing completion and the first clean claim.</p>
          </div>
          <div className="cred-closing-actions">
            <Link href="/request-free-audit/" className="pg-btn pg-btn--gold">Get a Free Credentialing Assessment</Link>
            <p className="cred-closing-note">1,000+ payers · 48hr follow-up · NCQA + HIPAA compliant</p>
          </div>
        </div>
      </div>

      {/* ═══ ASSESSMENT CTA ═════════════════════════════════ */}
      <CtaSection
        eyebrow="Ready when you are"
        heading="Get a Free Credentialing Assessment."
        body="We review your current provider roster, open enrollments, CAQH profile status, expiring credentials, and payer mix — then deliver a written report with findings and a timeline. No obligation. You keep the report whether or not you work with us."
        ctaLabel="Get a Free Credentialing Assessment"
        formId="credAssessmentForm"
        checklist={[
          "Current provider roster and open enrollment status",
          "CAQH profile status and re-attestation schedule",
          "Expiring credentials and revalidation deadlines",
          "Payer mix and enrollment gap analysis",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="NCQA + HIPAA compliant · 1,000+ payers · All 50 states"
      />

    </main>
  );
}
