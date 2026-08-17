import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Image from "next/image";
import Link from "next/link";

export default function ARManagementPage() {
  return (
    <main className="ar-page" id="main">

      {/* ═══ HERO — shared PageHero component ═══════════════ */}
      <PageHero
        eyebrow="AR recovery services"
        heading="Account receivable (AR) recovery services"
        intro="AR recovery is accounts receivable management on the claims that did not pay the first time. A balance ages because it was denied, rejected, or abandoned in the follow-up queue. We work every account in your aging report, across Medicare, Medicaid, and 800+ commercial payers, and stop it before the timely filing window closes for good."
        note="99.9% claim acceptance rate | 90%+ collection rate on worked claims | 30% average AR reduction | 50 states"
        cta="Get a Free AR Analysis"
        ctaAlt="See what we cover"
        ctaAltHref="#scope"
        badge="AR Recovery · 800+ payers"
        image="/ar-hero.webp"
        imageAlt="Two RCM specialists reviewing accounts receivable aging analysis reports at a conference table"
        imageW={1536}
        imageH={640}
      />

      {/* ═══ PROOF STRIP ════════════════════════════════════ */}
      <div className="ar-proof">
        <div className="ar-proof-inner">
          <div className="ar-proof-item">99.9% claim acceptance rate</div>
          <div className="ar-proof-item">90%+ collection on worked claims</div>
          <div className="ar-proof-item">30% average AR reduction</div>
          <div className="ar-proof-item">All 50 states</div>
        </div>
      </div>

      {/* ═══ WHERE AR SLIPS ═════════════════════════════════ */}
      <section className="ar-sec ar-sec--navy reveal" id="where-ar-slips">
        <div className="ar-wrap">
          <p className="ar-ew ar-ew--gold">Where AR revenue slips</p>
          <h2>Where AR revenue slips, and why it keeps slipping</h2>
          <p>The initial claim denial rate across all payers reached 11.8% in 2024, according to <a href="https://www.businesswire.com/news/home/20250227227547/en/Kodiak-Solutions-Revenue-Cycle-Industry-Trends-Report" target="_blank" rel="noopener">Kodiak Solutions data</a> drawn from more than 2,100 hospitals and 300,000 practice-based physicians. Most get paid eventually, but only after staff time and a cash delay that compounds when no one is running systematic follow-up.</p>
          <p>The deeper problem is the filing window. Commercial payers enforce hard deadlines: 90 days for most UnitedHealthcare and Aetna plans, 90 to 180 days for BCBS depending on state. Miss the cutoff by one day and the claim is gone permanently. No appeal. No exception. <a href="https://www.hfma.org/revenue-cycle/map-keys/" target="_blank" rel="noopener">HFMA sets the benchmark</a> at no more than 10% of total AR sitting beyond 90 days. Most billing teams are too occupied with today&apos;s claims to systematically chase last quarter&apos;s, and the aged bucket drifts past that line.</p>
          <p>Two buckets lose the most revenue: claims that aged past the filing window without a follow-up touch, and balances written off before the actual deadline expired. Both are recoverable before they are not.</p>

          {/* Revenue slips — image left, aging table right */}
          <div className="ar-slips-layout">
            <div className="ar-slips-img">
              <Image src="/ar-revenue-slips.webp" alt="Practice administrator reviewing aging accounts receivable report with 90-plus day bucket highlighted" width={900} height={600} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover"}} />
            </div>
            <div>
              {/* Aging table */}
              <div className="ar-tbl-wrap">
                <table className="ar-tbl" aria-label="AR aging bucket recovery rates">
                  <thead>
                    <tr>
                      <th>Aging bucket</th>
                      <th>Typical recovery rate</th>
                      <th>Filing window</th>
                      <th>Operational reality</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="ar-tbl-best"><td>0–60 days</td><td>90–95%</td><td>Open, most payers</td><td>Highest yield window. No delay.</td></tr>
                    <tr><td>61–90 days</td><td>75–85%</td><td>Narrowing fast</td><td>Commercial windows tightening.</td></tr>
                    <tr className="ar-tbl-warn"><td>91–120 days</td><td>55–70%</td><td>Time-critical</td><td>Every day of delay cuts recovery odds.</td></tr>
                    <tr className="ar-tbl-danger"><td>121–180 days</td><td>30–50%</td><td>Medicare and select payers only</td><td>Most commercial windows have closed.</td></tr>
                    <tr className="ar-tbl-critical"><td>180+ days</td><td>15–25%</td><td>Primarily Medicare only</td><td>Revenue is largely unrecoverable.</td></tr>
                  </tbody>
                </table>
                <p className="ar-tbl-note">Source: Industry recovery rate benchmarks derived from payer timely filing rules and <a href="https://www.hfma.org/revenue-cycle/map-keys/" target="_blank" rel="noopener">HFMA AR aging analysis standards</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SCOPE ══════════════════════════════════════════ */}
      <section className="ar-sec ar-sec--ivory reveal" id="scope">
        <div className="ar-wrap">
          <p className="ar-ew">What we manage</p>
          <h2>What we run across the AR recovery cycle</h2>
          <p>Our accounts receivable management services cover the full recovery cycle end to end. This is <a href="/services/">medical AR management</a> run as one connected process, so a denial pattern changes how the next account is routed.</p>
          <div className="ar-scope-grid">
            {[
              { n:"01", h:"Insurance AR recovery", t:"Insurance AR recovery across Medicare, Medicaid, and 800+ commercial payers" },
              { n:"02", h:"Denial appeals", t:"Denial appeals and resubmissions by CARC and RARC code with root cause correction" },
              { n:"03", h:"Aged AR cleanup", t:"Aged AR cleanup and backlog resolution for 90-plus day accounts" },
              { n:"04", h:"Write-off recovery", t:"Write-off recovery audit on the past 12 months of closed balances" },
              { n:"05", h:"Patient balance resolution", t:"Patient balance resolution and CMS-compliant statements" },
              { n:"06", h:"Healthcare AR outsourcing", t:<><a href="/services/">Healthcare AR services outsourcing</a> for practices whose denial volume exceeds internal capacity</> },
            ].map(({ n, h, t }) => (
              <article className="ar-scope-card reveal" key={n}>
                <div className="ar-scope-num">{n}</div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
          <p className="ar-scope-note">Specialty is assigned at onboarding, so an orthopedic denial is worked by someone who knows that specialty&apos;s modifier rules, not a general queue. See our <a href="/specialties/">specialty pages</a> for the denial patterns we handle by specialty.</p>
        </div>
      </section>

      {/* ═══ INSURANCE AR ════════════════════════════════════ */}
      <section className="ar-sec ar-sec--white reveal">
        <div className="ar-wrap">
          <p className="ar-ew">The systematic loss most practices accept</p>
          <h2>Insurance AR, the systematic loss most practices accept without knowing</h2>
          {/* Top: 3 paragraphs (left) + image (right) */}
          <div className="ar-insurance-split">
            <div className="ar-split-copy">
              <p>The most common way a practice loses AR revenue is not a payer error. It is a claim that sat in a 60-day aging bucket and received no substantive follow-up. No denial code fires. The claim just ages past the commercial filing window and becomes permanently uncollectable.</p>
              <p>Under standard payer contracts, UnitedHealthcare and Aetna both enforce 90-day timely filing limits on most commercial plans. Miss those windows by a single day and the claim cannot be appealed, corrected, or recovered. <a href="https://www.hfma.org/revenue-cycle/map-keys/" target="_blank" rel="noopener">HFMA sets the target</a> at under 10% of receivables in the 90-plus day bucket. Most billing teams are running well past that line.</p>
              <p>We review each account in the aging report for filing window status before working it. Accounts near expiration are prioritized over stable accounts regardless of dollar value. A $300 claim expiring in 10 days gets worked before a $3,000 claim with 90 days left.</p>
            </div>
            <div className="ar-split-img">
              <Image src="/ar-insurance.webp" alt="AR specialist reviewing insurance aging report on dual monitors showing payer follow-up queue" width={900} height={700} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover"}} />
            </div>
          </div>

          {/* Below: H3 + denial table — full width */}
          <div className="ar-denial-full">
            <h3>Where AR accounts get stuck, and how we clear them</h3>
            <p>AR denials cluster in a short list of reason codes. We address each at the claim level and at the workflow level so the same denial does not reappear on the next submission.</p>
            <div className="ar-tbl-wrap">
              <table className="ar-tbl" aria-label="AR denial problems and solutions">
                <thead><tr><th>The problem</th><th>How we address it</th></tr></thead>
                <tbody>
                  <tr><td>Denial rate above 5%</td><td>We analyze your denial pattern by CARC code, payer, and claim type to identify the root cause, correct the upstream error, and resubmit with complete documentation. We track whether the same denial reappears after correction.</td></tr>
                  <tr><td>CO-4 modifier required</td><td>Modifier reviewed per payer policy before resubmission. NCCI edits checked and modifier applied only when the service qualifies as separate and distinct.</td></tr>
                  <tr><td>CO-50 medical necessity</td><td>ICD-10 checked against the payer&apos;s coverage policy and LCD before billing. Missing diagnosis codes identified and documentation reviewed before appeal.</td></tr>
                  <tr><td>CO-29 timely filing</td><td>Every account flagged for filing window position at intake. Accounts within 30 days of expiration worked first. No account ages out without a documented follow-up touch.</td></tr>
                  <tr><td>CO-97 bundling dispute</td><td>NCCI bundling edits reviewed. Unbundling justification documented and supported with modifier and clinical notes before appeal.</td></tr>
                  <tr><td>Prior authorization denial</td><td>Authorization tracked per payer and service type before claim submission. Retroactive authorization pursued where payer policy permits.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WRITE-OFF RECOVERY ══════════════════════════════ */}
      <section className="ar-sec ar-sec--navy reveal">
        <div className="ar-wrap">
          <p className="ar-ew ar-ew--gold">Write-off recovery</p>
          <h2>Write-off recovery, the revenue practices leave twice</h2>
          <div className="ar-writeoff-grid">
            <div>
              <p>Practices write off aged balances based on internal aging thresholds that are often shorter than the actual payer filing deadline. A claim written off at 90 days against a payer with a 180-day filing window is money still on the table that has been administratively closed.</p>
              <p>We conduct a 12-month write-off review that identifies every balance where three conditions hold: the filing window is still open, the clinical documentation supports the original billing position, and the payer has not issued a final coverage determination. Recoverable write-offs consistently account for 8 to 15% of annual write-off volume. For a practice writing off $500,000 per year, the recoverable pool typically runs $40,000 to $75,000.</p>
              <p>The audit does not require a full billing handoff. We pull the write-off register, run the review, and return a list of recoverable accounts with their current filing window status. Recovery starts from that list.</p>
            </div>
            <div className="ar-writeoff-stat-col">
              <div className="ar-stat-card">
                <div className="ar-stat-big">8–15%</div>
                <div className="ar-stat-lbl">Of annual write-offs are recoverable</div>
              </div>
              <div className="ar-stat-card ar-stat-card--accent">
                <div className="ar-stat-big">$40K–$75K</div>
                <div className="ar-stat-lbl">Recoverable pool for a practice writing off $500K/year</div>
              </div>
              <div className="ar-stat-card">
                <div className="ar-stat-big">12 mo</div>
                <div className="ar-stat-lbl">Write-off history we audit — no full handoff required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PATIENT AR ══════════════════════════════════════ */}
      <section className="ar-sec ar-sec--white reveal">
        <div className="ar-wrap">
          <p className="ar-ew">After insurance pays</p>
          <h2>Patient AR, after insurance pays</h2>
          <div className="ar-split">
            <div className="ar-split-img">
              <Image src="/ar-patient.webp" alt="Patient services coordinator reviewing CMS-compliant patient statement at front desk" width={900} height={700} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover"}} />
            </div>
            <div className="ar-split-copy">
              <p>After insurance adjudicates, the remaining patient balance requires a different approach than payer follow-up. We generate itemized, CMS-compliant statements, verify coordination of benefits is applied correctly, and flag any No Surprises Act compliance issues before the patient is contacted.</p>
              <p>Where your practice wants us to handle direct patient inquiries, we take those calls. Where you prefer to manage patient contact internally, we prepare the documentation and hand it off. We are not a collections agency. Patient communication through Medbilling RCM is designed to protect the relationship your practice has built, while recovering the balance the visit earned.</p>

              <h3>Prior authorization, the front of the AR problem</h3>
              <p>Prior authorization is where most AR problems begin, not where they show up. Physicians average <a href="https://www.ama-assn.org/practice-management/prior-authorization/prior-authorization-reform-progress-physicians-remain-burdened" target="_blank" rel="noopener">40 requests a week and 13 hours of staff time</a>. Roughly one in three are often or always denied. A missed authorization before the visit becomes a denial after it, and a denial after the visit becomes an aged AR account that is harder to recover the longer it sits.</p>
              <p>We submit and track authorizations per payer before the service is rendered, monitor status, and appeal denials that are wrong. Around four in five appealed prior-auth denials are overturned when the clinical documentation supports the original request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SPECIALTY AR ════════════════════════════════════ */}
      <section className="ar-sec ar-sec--ivory reveal">
        <div className="ar-wrap">
          <p className="ar-ew">Configured per specialty</p>
          <h2>Specialty AR recovery, configured per specialty</h2>
          <p>AR recovery protocols that work for family practice do not transfer to orthopedics without modification. Each specialty has distinct denial patterns, documentation requirements, and payer behavior. Our <a href="/specialties/">medical AR management</a> workflows are built per specialty, not applied generically.</p>
                    <div className="ar-spec-grid">
            <div className="ar-spec-card reveal">
              <div className="ar-spec-head">Orthopedics</div>
              <ul className="ar-spec-list">
                <li>Global surgical period modifier review</li>
                <li>Workers&apos; compensation routing</li>
                <li>Multiple procedure reduction disputes</li>
              </ul>
            </div>
            <div className="ar-spec-card reveal">
              <div className="ar-spec-head">Behavioral health</div>
              <ul className="ar-spec-list">
                <li>Managed care authorization documentation</li>
                <li>Time-based CPT code appeals</li>
                <li>Medicaid MCO retroactive recovery</li>
              </ul>
            </div>
            <div className="ar-spec-card reveal">
              <div className="ar-spec-head">Oncology</div>
              <ul className="ar-spec-list">
                <li>J-code underpayment identification</li>
                <li>340B drug program claim variance</li>
                <li>Buy-and-bill adjudication disputes</li>
              </ul>
            </div>
            <div className="ar-spec-card reveal">
              <div className="ar-spec-head">Laboratory</div>
              <ul className="ar-spec-list">
                <li>LOINC validation corrections</li>
                <li>LCD and NCD coverage policy appeals</li>
                <li>Technical vs professional component billing</li>
              </ul>
            </div>
            <div className="ar-spec-card reveal">
              <div className="ar-spec-head">Radiology</div>
              <ul className="ar-spec-list">
                <li>TC/PC split billing disputes</li>
                <li>Contrast administration denials</li>
                <li>Multi-read claim routing</li>
              </ul>
            </div>
            <div className="ar-spec-card reveal">
              <div className="ar-spec-head">ASC</div>
              <ul className="ar-spec-list">
                <li>Facility fee coding disputes</li>
                <li>Implant billing</li>
                <li>Anesthesia time unit reconciliation</li>
              </ul>
            </div>
          </div>        </div>
      </section>

      {/* ═══ MID CTA BAND ════════════════════════════════════ */}
      <div className="ar-cta-band">
        <div className="ar-cta-inner">
          <div>
            <h2>Two buckets lose the most revenue. Let us show you exactly where yours is.</h2>
            <p>The free AR analysis pulls a sample of your aging report and shows your top denial reasons by dollar, your filing window exposure by payer, and your recoverable write-off estimate.</p>
          </div>
          <Link href="#assessment" className="pg-btn pg-btn--gold">Get a Free AR Analysis</Link>
        </div>
      </div>

      {/* ═══ IN-HOUSE VS OUTSOURCED ══════════════════════════ */}
      <section className="ar-sec ar-sec--navy reveal">
        <div className="ar-wrap">
          <p className="ar-ew ar-ew--gold">Honest comparison</p>
          <h2>In-house AR or outsourced, the honest version</h2>
          <div className="ar-inhouse">
            <div>
              <p>Outsourcing AR recovery usually gets weighed as a cost line. For a practice with aging AR, it is closer to a capacity question. A billing team running current claims cannot simultaneously chase every 90-plus day account before filing windows close. One seat is one point of failure.</p>
              <p>We work on a percentage of what we collect, so we are paid when you are paid. There is no setup fee, no retainer, and no long-term contract. If you already run a strong billing team, we take only the piece that is leaking, whether that is aged AR, specific payer denials, or the write-off backlog. That is <a href="/services/">healthcare AR services</a> shaped to the practice, not a fixed package.</p>
              <Link href="#assessment" className="pg-btn pg-btn--gold" style={{marginTop:"1.5rem",display:"inline-flex"}}>Get a Free AR Analysis</Link>
            </div>
            <div className="ar-cost-box">
              <div className="ar-cost-fig">0%</div>
              <div className="ar-cost-sub">Fee on accounts where recovery is unsuccessful — if we do not collect, you do not pay</div>
              <div className="ar-cost-div" />
              <ul className="ar-bul">
                <li>Performance-based — percentage of what we recover</li>
                <li>No setup fee. No retainer. No long-term contract.</li>
                <li>Take only the leaking piece — aged AR, denials, or write-off backlog</li>
                <li>Internal team keeps running current claims without interruption</li>
                <li>Engagement starts within two weeks of the free analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUTCOMES ════════════════════════════════════════ */}
      <section className="ar-sec ar-sec--white reveal">
        <div className="ar-wrap">
          <p className="ar-ew">Documented client work</p>
          <h2>What changed for the practices we took on</h2>
          <p>These are practices we bill for now. The charges did not change; the collections did. Every dollar came from collecting revenue that had already been earned.</p>
          <div className="ar-oc-grid">
            <article className="ar-oc reveal">
              <span className="ar-oc-badge">Primary Care</span>
              <div className="ar-oc-metric">18.2% → 61%</div>
              <div className="ar-oc-lbl">Gross collection rate on identical charges</div>
              <div className="ar-oc-detail">Patient First Primary Care, a six-provider primary care group running fee-for-service and capitation together, lifted its gross collection rate from 18.2% to 61% on identical charge volume of $220,000 a month. Monthly collections moved from $40,000 to $134,200, an additional $94,200 every month. The claims had stopped being followed after submission.</div>
              <Link href="/case-studies/patient-first-primary-care/" className="ar-oc-link">Patient First Primary Care →</Link>
            </article>
            <article className="ar-oc reveal">
              <span className="ar-oc-badge">Behavioral Health</span>
              <div className="ar-oc-metric">$0 → $43,678</div>
              <div className="ar-oc-lbl">Monthly collections after ERA &amp; EFT enrollments</div>
              <div className="ar-oc-detail">Psychiatric Connections, a telehealth psychiatry practice billing $178,237 a month across six states, was collecting nothing at all because the ERA and EFT enrollments had never been set up. Monthly collections now run $43,678 on the same charge volume.</div>
              <Link href="/case-studies/psychiatric-connections/" className="ar-oc-link">Psychiatric Connections →</Link>
            </article>
            <article className="ar-oc reveal">
              <span className="ar-oc-badge">Combined</span>
              <div className="ar-oc-metric">$179,778/mo</div>
              <div className="ar-oc-lbl">Additional monthly collections across three engagements</div>
              <div className="ar-oc-detail">Approximately $2.16M annualized in additional collections from revenue already earned, not from new charges. <Link href="/case-studies/">The full case studies are here.</Link></div>
              <Link href="/case-studies/" className="ar-oc-link">All case studies →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ═══ 90% MEASURE ══════════════════════════════════════ */}
      <section className="ar-sec ar-sec--green reveal">
        <div className="ar-wrap">
          <p className="ar-ew ar-ew--gold">How we measure it</p>
          <h2>The 90% we report, and where we count it</h2>
          <div className="ar-measure">
            <div className="ar-measure-mark">90<span>%+</span></div>
            <div>
              <div className="ar-measure-sub">Collection rate on worked claims</div>
              <p>Our 90%+ collection rate on worked claims is measured on accounts our team actively followed up on, not on the full aging report including accounts abandoned before we engaged. It is not a clearinghouse figure. Every engagement runs inside our <Link href="/">Revenue Control Framework</Link>, the five-phase method behind each AR recovery engagement. There is no setup fee and no long-term contract.</p>
              <div className="ar-m-items">
                {[
                  ["Worked claims only","Not the full aging report including pre-engagement abandonments"],
                  ["Active follow-up measured","Not clearinghouse acceptance — that figure reads higher"],
                  ["First resubmissions in motion","Within two weeks of engagement start"],
                  ["No setup fee · no contract","No long-term commitment required to start"],
                ].map(([v,l]) => (
                  <div className="ar-m-item" key={v}>
                    <div className="ar-m-val">{v}</div>
                    <div className="ar-m-lbl">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING BANNER ══════════════════════════════════ */}
      <div className="ar-closing reveal">
        <Image src="/ar-closing.webp" alt="Senior RCM strategist and practice executive reviewing AR recovery results in boardroom" width={1536} height={500} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 30%"}} />
        <div className="ar-closing-grad" aria-hidden="true" />
        <div className="ar-closing-stats" aria-hidden="true">
          <div className="ar-closing-big">90%+</div>
          <div className="ar-closing-sub">Collection rate on worked claims</div>
          <div className="ar-closing-pair">
            <div><div className="ar-closing-snum">30%</div><div className="ar-closing-slbl">Avg AR reduction</div></div>
            <div><div className="ar-closing-snum">800+</div><div className="ar-closing-slbl">Payers covered</div></div>
          </div>
        </div>
      </div>

      {/* ═══ FAQ ═════════════════════════════════════════════ */}
      <section className="ar-sec ar-sec--white reveal" id="faq">
        <div className="ar-wrap">
          <p className="ar-ew">Common questions</p>
          <h2>AR recovery questions we get asked</h2>
          <div className="ar-faq-layout">
            <div className="ar-faq-intro">
              <p>Direct answers for practices evaluating outside AR recovery support.</p>
            </div>
            <div className="ar-faq-list">
              {[
                ["What does accounts receivable management mean in a healthcare practice?","Accounts receivable management is the ongoing process of tracking, following up on, and collecting payments for services already rendered, from both insurance payers and patients. AR recovery services specifically target accounts that have aged past normal payment timelines and require active intervention: resubmission, appeal, or direct payer contact before the filing window expires."],
                ["At what point should a practice bring in outside AR recovery?","HFMA sets the benchmark at no more than 10% of total AR sitting beyond 90 days. When a practice climbs above 50 days in AR, or when the aged bucket has drifted past that line, those numbers reflect a structural capacity gap, not a temporary backlog. External AR recovery is designed to close that gap while your internal team continues working current claims without interruption."],
                ["Why does recovery probability fall so sharply after 90 days?","Because payer contracts set hard filing deadlines that cannot be extended. UnitedHealthcare and Aetna enforce 90-day windows for most commercial plans. BCBS varies by state, with many plans at 90 to 180 days. Medicare Part A and Part B allow one full calendar year, but Medicare Advantage plans follow their own timelines, often 90 to 120 days. Once those windows close, a claim denied for timely filing cannot be appealed and the revenue cannot be recovered. That hard cutoff is what makes aged AR a time-sensitive operation."],
                ["How do you handle a rejection versus a denial?","A rejection is returned before the payer ever reviews the claim, usually because of a formatting error, incorrect payer ID, or demographic mismatch. The claim never entered adjudication. Rejections require a technical correction and fast resubmission, because the timely filing clock is still running. A denial is a post-adjudication refusal tied to a specific CARC reason code. Denials require a clinical or administrative appeal that directly addresses the stated reason for refusal. We route rejections and denials through separate workflows because the fix and the timeline are entirely different for each."],
                ["Can you recover revenue from balances we have already written off?","In many cases, yes. Write-off recovery applies when the payer filing window is still open, the clinical documentation supports the original billing position, and the payer has not issued a final coverage determination. We audit 12 months of write-off history to identify every account where those three conditions hold. Recoverable write-offs represent 8 to 15% of annual write-off volume. For a practice writing off $500,000 per year, the recoverable pool typically runs $40,000 to $75,000."],
                ["How quickly will we see recovered revenue?","Most practices see initial recovered payments post within the first 30 days of engagement. Rejected claims that require a technical correction and resubmission resolve within one to two payer processing cycles. Complex denied claims that require clinical appeals go through a longer timeline set by the payer's appeal review period. We have first resubmissions and appeals in motion within two weeks of the engagement start."],
                ["Are your healthcare AR services adapted to each specialty?","Recovery protocols are built per specialty, not applied generically. An orthopedic modifier appeal requires different documentation and a different CARC code response than a behavioral health authorization appeal. Oncology J-code underpayments are a different problem from laboratory LCD coverage disputes. We configure the workflow for the denial patterns specific to your specialty."],
                ["Do you work patient balances as well as insurance AR?","Yes. After insurance adjudicates, we handle the patient balance side through itemized CMS-compliant statements, coordination-of-benefits verification, No Surprises Act compliance review, and direct patient communication when your practice opts in. We are not a collections agency."],
                ["What EHR and practice management systems do you work with?","You keep your existing systems. We work inside your setup, including Epic, Athenahealth, eClinicalWorks, NextGen, Kareo, and AdvancedMD, among others, with integrations scoped during the free AR analysis."],
                ["How does your pricing work?","We work on a percentage of what we recover. There is no setup fee, no retainer, and no fee on accounts where recovery is unsuccessful. If we do not collect, you do not pay. The specific percentage is set based on the volume, age distribution, and complexity of your AR portfolio, assessed during the initial free analysis."],
              ].map(([q,a]) => (
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
        heading="The free analysis is specific."
        body="We pull a sample of your aging report and show your top denial reasons by dollar, your filing window exposure by payer, and your recoverable write-off estimate. You keep the findings whether or not you work with us. If you decide to move forward on AR recovery after that, engagement starts within two weeks with no setup fee and no long-term contract."
        ctaLabel="Get a Free AR Analysis"
        formId="arAssessmentForm"
        checklist={[
          "Top denial reasons by dollar from your aging report",
          "Filing window exposure by payer",
          "Recoverable write-off estimate",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="HIPAA-compliant · No setup fee · No long-term contract"
      />



    </main>
  );
}
