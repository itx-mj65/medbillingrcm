import Image from "next/image";
import PageHero from "@/components/PageHero";
import PhysicianScripts from "./PhysicianScripts";
import CtaSection from "@/components/CtaSection";

export default function PhysicianBillingPage() {
  return (
    <div className="ph-page">
      <main id="main">

        {/* ═══ HERO ═══════════════════════════════════════════ */}
        <PageHero
          eyebrow="Physician billing services"
          heading="Physician billing services for practices that bill on the CMS-1500"
          intro="Physician billing is professional billing: the CMS-1500 side of the revenue cycle. A claim is paid on the code, the modifier, and the documentation behind it. We run that side for practices in all 50 states, from charge capture through denial resolution. We report our clean claim rate at the payer."
          note="97% first-pass at the payer | 14-day onboarding | $0 setup | 50 states"
          cta="Get a Free Revenue Assessment"
          ctaAlt="See what we cover"
          ctaAltHref="#scope"
          badge="Professional billing · CMS-1500"
          image="/physician-hero.webp"
          imageAlt="Physician and administrator reviewing EHR revenue workflow at a workstation"
          imageW={1537}
          imageH={1023}
        />

        {/* ═══ PROOF STRIP ════════════════════════════════════ */}
        <div className="ph-proof">
          <div className="ph-proof-inner wrap">
            <div className="ph-proof-item">97% clean claim rate — measured at the payer</div>
            <div className="ph-proof-item">14-day onboarding</div>
            <div className="ph-proof-item">No setup fees</div>
            <div className="ph-proof-item">All 50 states</div>
          </div>
        </div>

        {/* ═══ PROFESSIONAL vs FACILITY ═══════════════════════ */}
        <section className="sec sec--white ph-reveal">
          <p className="ew">Understanding the difference</p>
          <h2 className="reveal">Professional billing is not facility billing</h2>
          <p>A physician bills for the work of the provider. A hospital bills for the building. The claims travel on different forms, price on different systems, and get denied for different reasons. Treat them the same and you lose on both.</p>
          <div className="ph-tbl-wrap">
            <table className="ph-tbl" aria-label="Physician vs facility billing comparison">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Physician (professional)</th>
                  <th scope="col">Facility</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Claim form</td><td>CMS-1500 / 837-P</td><td>UB-04 / 837-I</td></tr>
                <tr><td>Priced on</td><td>RVUs under the fee schedule</td><td>DRG or APC</td></tr>
                <tr><td>Coding</td><td>CPT, ICD-10-CM, HCPCS, modifiers</td><td>ICD-10-PCS, revenue codes</td></tr>
                <tr><td>Denied most for</td><td>E/M level, modifiers, medical necessity, prior auth</td><td>DRG, patient status, authorization</td></tr>
              </tbody>
            </table>
          </div>
          <p className="ph-tbl-note">If your practice also carries a facility component, our <a href="/services/hospital-medical-billing/">hospital billing team</a> runs that side. This page is about the professional claim.</p>
        </section>

        {/* ═══ WHERE REVENUE SLIPS ════════════════════════════ */}
        <section className="sec sec--navy ph-reveal">
          <p className="ew ew--light">Where physician revenue slips</p>
          <h2 className="reveal">Where physician revenue slips</h2>
          <p>Payers denied 11.8% of claims on first submission in 2024. For Medicare Advantage, the initial rate reached 23.35%, nearly one in four. Most are paid in the end, but only after staff time to rework them and a delay in the cash. That delay is the cost.</p>
          <p>Prior authorization carries the heaviest load. Physicians average 40 requests a week and 13 hours of staff time. About one in three say those requests are often or always denied.</p>
          <div className="ph-leak-grid">
            <div className="ph-leak-stat">
              <div className="ph-leak-num">11.8%</div>
              <div className="ph-leak-lbl">Initial denial across all payers</div>
              <div className="ph-leak-src"><a href="https://www.businesswire.com/news/home/20250227227547/en/Kodiak-Solutions-Revenue-Cycle-Industry-Trends-Report" target="_blank" rel="noopener">Kodiak Solutions / Business Wire, Feb 2025</a></div>
            </div>
            <div className="ph-leak-stat">
              <div className="ph-leak-num">23.35%</div>
              <div className="ph-leak-lbl">Initial denial for Medicare Advantage — nearly 1 in 4</div>
              <div className="ph-leak-src"><a href="https://www.businesswire.com/news/home/20250227227547/en/Kodiak-Solutions-Revenue-Cycle-Industry-Trends-Report" target="_blank" rel="noopener">Kodiak Solutions / Business Wire, Feb 2025</a></div>
            </div>
            <div className="ph-leak-stat">
              <div className="ph-leak-num">40/wk</div>
              <div className="ph-leak-lbl">Prior auth requests per physician — 13 hours of staff time</div>
              <div className="ph-leak-src"><a href="https://www.ama-assn.org/practice-management/prior-authorization/prior-authorization-reform-progress-physicians-remain-burdened" target="_blank" rel="noopener">AMA Prior Authorization Survey</a></div>
            </div>
          </div>
          <p>By the numbers: 11.8% initial denial across all payers, 23.35% for Medicare Advantage, and 40 prior authorizations a week at 13 hours of staff time.</p>
          <p>Two places leak the most: the claim that goes out coded a level too low, and the authorization nobody chased before the visit. Our physician medical billing services close both.</p>
        </section>

        {/* ═══ SCOPE ══════════════════════════════════════════ */}
        <section className="sec sec--ivory ph-reveal" id="scope">
          <p className="ew">What we manage</p>
          <h2 className="reveal">What we run across the physician revenue cycle</h2>
          <p>Our physician billing services cover the professional revenue cycle end to end. This is <a href="/">physician revenue cycle management</a> run as one connected process, so a denial pattern changes how the next claim is coded.</p>
          <div className="ph-scope-grid">
            <article className="ph-scope-card ph-reveal">
              <div className="ph-scope-num" aria-hidden="true">01</div>
              <h3 className="reveal">Eligibility, benefits, and prior authorization before the visit</h3>
              <p>Verified before the visit — not after the denial. Coverage confirmed, authorizations submitted per payer on schedule.</p>
            </article>
            <article className="ph-scope-card ph-reveal">
              <div className="ph-scope-num" aria-hidden="true">02</div>
              <h3 className="reveal">Specialty-assigned CPT, ICD-10, and E/M coding with charge capture</h3>
              <p>Charge capture assigned by <a href="/specialties/">specialty</a> at onboarding — coding worked by people who know that specialty&apos;s edits. See also: <a href="/services/medical-coding/">medical coding services</a>.</p>
            </article>
            <article className="ph-scope-card ph-reveal">
              <div className="ph-scope-num" aria-hidden="true">03</div>
              <h3 className="reveal">Claim scrubbing against payer rules and NCCI edits</h3>
              <p>Every claim checked against payer-specific rules and NCCI edit sets before submission. Errors caught before they become denials.</p>
            </article>
            <article className="ph-scope-card ph-reveal">
              <div className="ph-scope-num" aria-hidden="true">04</div>
              <h3 className="reveal">Payment posting and denial resolution by root cause</h3>
              <p>Denials worked by root cause, not batch-processed by age. Patterns feed back into coding so the same mistake does not recur.</p>
            </article>
            <article className="ph-scope-card ph-reveal">
              <div className="ph-scope-num" aria-hidden="true">05</div>
              <h3 className="reveal">Accounts receivable follow-up and patient statements</h3>
              <p><a href="/services/account-receivable-management/">AR</a> worked by payer-specific escalation paths. Patient statements generated and followed up so aging does not accumulate.</p>
            </article>
            <article className="ph-scope-card ph-reveal">
              <div className="ph-scope-num" aria-hidden="true">06</div>
              <h3 className="reveal">Provider credentialing and payer enrollment kept current</h3>
              <p>NPI, CAQH, PECOS, and payer applications managed with re-credentialing dates tracked. A lapsed enrollment stops payment — we prevent that.</p>
            </article>
          </div>
          <p style={{marginTop:"1.5rem"}}>Coding is assigned by specialty at onboarding, so a cardiology or dermatology claim is worked by someone who knows that specialty&apos;s edits, not a general queue.</p>
        </section>

        {/* ═══ E/M OPTIMIZATION ═══════════════════════════════ */}
        <section className="sec sec--navy ph-reveal">
          <p className="ew ew--light">The quietest revenue loss</p>
          <h2 className="reveal">E/M level optimization, the quietest revenue loss</h2>
          <p>The most common way a physician claim loses money is not a denial. It is a visit billed one level below what the record supports. That is under-coding, and it is silent.</p>
          <div className="ph-em-wrap">
            <div className="ph-em-photo">
              <Image
                src="/physician-em-coding.webp"
                alt="Medical billing specialist reviewing encounter notes and CPT coding on dual monitors"
                width={900} height={580}
                loading="lazy"
                style={{width:"100%",height:"100%",objectFit:"cover"}}
              />
              <div className="ph-em-photo__chip" aria-hidden="true">
                <div className="ph-em-chip-num">$40</div>
                <div className="ph-em-chip-lbl">More per visit<br/>99213 → 99214</div>
              </div>
            </div>
            <div>
              <p>Under the 2021 guidelines, an office visit is coded by medical decision making or total time, not by how much was typed. A 99214 pays about $40 more than a 99213 under the <a href="https://www.cms.gov/medicare/physician-fee-schedule/search" target="_blank" rel="noopener">2026 Medicare Physician Fee Schedule</a>, roughly $135 against $95 in the office. Commercial payers pay 120 to 200 percent of that. Picture one provider seeing 90 established patients a week. Move ten from a 99213 to the 99214 the note already supports, and that is about $400 a week. Over a year it passes $20,000, from visits that already happened. No denial ever fires.</p>
              <p>We review each encounter against the decision-making criteria and code the level the documentation supports, up or down. Where it cannot support a level, the provider gets specific feedback, so the fix lands at the chart. A 99214 is also among the most audited codes. The review that catches under-coding is the one that holds up under an audit.</p>
              <div className="ph-em-card">
                <div className="ph-em-big">$20K<span>+</span></div>
                <div className="ph-em-sub">From visits that already happened</div>
                <p className="ph-em-note">Move 10 patients a week from 99213 to the 99214 the note already supports — at ~$40 more per visit. No denial ever fires.</p>
                <div className="ph-em-div" />
                <div className="ph-em-stats">
                  <div><span className="ph-em-stat-num">$40</span><span className="ph-em-stat-lbl">More per visit<br/>99213 → 99214</span></div>
                  <div><span className="ph-em-stat-num">$400</span><span className="ph-em-stat-lbl">More per week<br/>10 visits moved</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ DENIAL TABLE ════════════════════════════════════ */}
        <section className="sec sec--white ph-reveal">
          <p className="ew">Denial prevention</p>
          <h2 className="reveal">Where physician claims get denied, and how we stop it</h2>
          <p>Physician denials cluster in a handful of codes. We catch each before the claim leaves, not after it comes back. Prevention beats appeals here.</p>
          <div className="ph-dt-wrap">
            <table className="ph-dt" aria-label="Denial codes and prevention methods">
              <thead><tr><th scope="col">Denial</th><th scope="col">How we stop it</th></tr></thead>
              <tbody>
                <tr><td>E/M level mismatch</td><td>Decision-making review on every encounter, coded up or down to the record</td></tr>
                <tr><td>CO-50 medical necessity</td><td>ICD-10 checked against the payer&apos;s coverage policy before billing</td></tr>
                <tr><td>CO-97 bundling and modifier 25</td><td>NCCI edits checked; modifier applied only when the service is separate</td></tr>
                <tr><td>CO-29 timely filing</td><td>Submission inside a set turnaround with deadline monitoring</td></tr>
                <tr><td>Prior-auth denial</td><td>Authorization tracked per payer before the service is rendered</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ═══ SPECIALTY WORKFLOWS ════════════════════════════ */}
        <section className="sec sec--ivory ph-reveal">
          <p className="ew">Specialized workflows</p>
          <h2 className="reveal">Every part of the professional revenue cycle, managed</h2>
          <div className="ph-hl-grid">
            <article className="ph-hl-card ph-reveal">
              <div className="ph-hl-big">4 in 5</div>
              <h3 className="reveal">Prior authorization, handled before the visit</h3>
              <p>Prior authorization is where a practice loses the most staff time. Physicians average 40 requests a week and 13 hours. Roughly one in three are often or always denied. Left to the front desk, it becomes hold music and missed deadlines. We take it off the front desk.</p>
              <p>We submit and track authorizations per payer before the visit, watch the status, and appeal the denials that are wrong. Around four in five appealed prior-auth denials get overturned, so the appeal is usually the right call.</p>
              <span className="ph-chip">~4 in 5 appealed denials overturned</span>
            </article>
            <article className="ph-hl-card ph-hl-card--gold ph-reveal">
              <div className="ph-hl-big ph-hl-big--gold">1 fix</div>
              <h3 className="reveal">Telehealth billing without the repeat errors</h3>
              <p>Telehealth denials tend to hit every claim at once. They come from a setup error, not a single mistake. Fix the setup once.</p>
              <p>Place of service decides it: POS 10 when the patient is at home, POS 02 when they are not. Modifier 95 marks synchronous audio-video, modifier 93 marks audio-only, and the two are not interchangeable. Under parity laws in most states, commercial payers reimburse telehealth at in-person rates, but only when the POS and modifier are right.</p>
              <p>We set the place-of-service and modifier pairing per payer and confirm parity rules on commercial claims. The same visit does not get denied twice.</p>
            </article>
            <article className="ph-hl-card ph-hl-card--navy ph-reveal">
              <div className="ph-hl-big ph-hl-big--navy">−9%</div>
              <h3 className="reveal">MIPS reporting, scored honestly</h3>
              <p>MIPS moves Medicare Part B payments up or down two years later. The performance threshold is <a href="https://qpp.cms.gov" target="_blank" rel="noopener">75 points</a>, and the maximum penalty is 9 percent. The upside is smaller than it sounds: the program is budget neutral, so positive adjustments are scaled down and rarely reach the headline figure.</p>
              <p>We report Quality, Promoting Interoperability, and Improvement Activities to clear the threshold and avoid the penalty. We tell you the realistic upside, not the statutory maximum.</p>
              <span className="ph-chip ph-chip--navy">Max penalty: 9% of Part B</span>
            </article>
            <article className="ph-hl-card ph-hl-card--muted ph-reveal">
              <div className="ph-hl-big ph-hl-big--muted">$0</div>
              <h3 className="reveal">Credentialing and enrollment kept current</h3>
              <p>A lapsed enrollment stops payment with no denial code to warn you. A <a href="https://www.cms.gov/medicare/enrollment-renewal/providers-suppliers" target="_blank" rel="noopener">PECOS</a> deactivation or an expired CAQH attestation quietly holds every Medicare claim for that provider.</p>
              <p>Our credentialing team — managed at <a href="/services/medical-credentialing/">medical-credentialing services</a> — manages NPI, CAQH, PECOS, and payer applications, and tracks re-credentialing dates so a gap never reaches your remittance.</p>
              <span className="ph-chip ph-chip--muted">Zero gaps in enrollment</span>
            </article>
          </div>
        </section>

        {/* ═══ MID CTA ════════════════════════════════════════ */}
        <div className="ph-cta-band">
          <div className="ph-cta-inner">
            <div>
              <h2 className="reveal">Two places leak the most. Let us show you exactly where yours is.</h2>
              <p>The free assessment pulls a sample of your claims and shows your E/M distribution against benchmark, your top denial reasons by dollar, and your aged AR by payer. You keep the findings.</p>
            </div>
            <a href="#assessment" className="btn">Get a Free Revenue Assessment</a>
          </div>
        </div>

        {/* ═══ IN-HOUSE COST ══════════════════════════════════ */}
        <section className="sec sec--navy ph-reveal">
          <p className="ew ew--light">Honest comparison</p>
          <h2 className="reveal">In-house or outsourced, the honest version</h2>
          <div className="ph-inhouse">
            <div>
              <p>Outsourcing usually gets weighed as a cost line. For a physician practice, it is closer to a coverage question. A single biller runs about <a href="https://www.bls.gov/oes/current/oes292071.htm" target="_blank" rel="noopener">$50,250 a year</a> in salary before benefits, and that one seat carries E/M coding, prior auth, denials, and every CPT change alone. When it sits empty for a quarter, collections stall with it. One seat is one point of failure.</p>
              <p>We work on a percentage of what we collect, so we are paid when you are paid. There is no seat to backfill, and no long-term contract if it stops working. If you already run a strong billing team, we take only the piece that is leaking, whether that is <a href="/services/account-receivable-management/">AR</a>, denials, or <a href="/services/medical-credentialing/">credentialing</a>. That is medical billing for physicians shaped to the practice, not a fixed package.</p>
              <div style={{marginTop:"2rem"}}>
                <a href="#assessment" className="btn">Get a Free Revenue Assessment</a>
              </div>
            </div>
            <div className="ph-cost-box">
              <div className="ph-cost-fig">$50,250</div>
              <div className="ph-cost-sub">Median biller salary · per year · before benefits (<a href="https://www.bls.gov/oes/current/oes292071.htm" target="_blank" rel="noopener" style={{color:"rgba(255,255,255,.5)"}}>BLS.gov</a>)</div>
              <div className="ph-cost-div" />
              <ul className="ph-bul">
                <li>One biller carries E/M coding, prior auth, and denials alone</li>
                <li>When that seat is empty, collections stall with it</li>
                <li>We are paid when you are paid — percentage of collections</li>
                <li>No setup fee. No long-term contract required.</li>
                <li>Take only the leaking piece — AR, denials, or credentialing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ CLIENT OUTCOMES ════════════════════════════════ */}
        <section className="sec sec--white ph-reveal">
          <p className="ew">Documented client work</p>
          <h2 className="reveal">What changed for the practices we took on</h2>
          <p>These are physician practices we bill for now. The charges did not change; the collections did.</p>
          <div className="ph-proof-grid">
            <article className="ph-oc ph-reveal">
              <span className="ph-oc-badge">Primary Care</span>
              <div className="ph-oc-metric">18.2% → 61%</div>
              <div className="ph-oc-lbl">Collection rate on identical charges</div>
              <span className="ph-oc-extra-num">Six-provider group</span>
              <span className="ph-oc-extra-lbl">Primary care practice</span>
              <div className="ph-oc-name"><a href="/case-studies/patient-first-primary-care/">Patient First Primary Care</a></div>
            </article>
            <article className="ph-oc ph-reveal">
              <span className="ph-oc-badge">Behavioral Health</span>
              <div className="ph-oc-metric">$0 → $43,678</div>
              <div className="ph-oc-lbl">Monthly collections after ERA &amp; EFT enrollments that had never been completed</div>
              <span className="ph-oc-extra-num">$178,237</span>
              <span className="ph-oc-extra-lbl">Monthly charges, unchanged</span>
              <div className="ph-oc-name"><a href="/case-studies/psychiatric-connections/">Psychiatric Connections</a></div>
            </article>
            <article className="ph-oc ph-reveal">
              <span className="ph-oc-badge">Dermatology</span>
              <div className="ph-oc-metric">$60,000</div>
              <div className="ph-oc-lbl">Revenue retained in a one-time audit</div>
              <span className="ph-oc-extra-num">Divine Dermatology</span>
              <span className="ph-oc-extra-lbl">Specialty dermatology practice</span>
              <div className="ph-oc-name"><a href="/case-studies/">The full case studies are here.</a></div>
            </article>
          </div>
          <p style={{marginTop:"1rem",fontSize:".9rem",color:"var(--color-muted)"}}>
            Patient First, a six-provider primary care group, moved from an 18.2% to a 61% collection rate. Psychiatric Connections, a behavioral health practice, went from $0 to $43,678 a month once we set up the ERA and EFT enrollments that had never been completed. A one-time audit retained $60,000 for Divine Dermatology. <a href="/case-studies/" style={{color:"var(--color-action)",fontWeight:700}}>The full case studies are here.</a>
          </p>
        </section>

        {/* ═══ 97% MEASURE ════════════════════════════════════ */}
        <section className="sec sec--green ph-reveal">
          <p className="ew ew--gold">How we measure it</p>
          <h2 className="reveal">The 97% we report, and where we count it</h2>
          <div className="ph-measure">
            <div>
              <div className="ph-measure-mark">97<span>%</span></div>
            </div>
            <div>
              <div className="ph-measure-sub">First-pass clean claim rate</div>
              <p className="ph-measure-note">As a physician billing company, our 97% first-pass rate is measured at the payer on professional (837-P) claims. It is not the clearinghouse figure, which always reads higher. Every account runs inside our Revenue Control Framework — the five-phase method behind each engagement — and there is no setup fee or long-term contract. <a href="/" style={{color:"rgba(255,255,255,.6)"}}>About the framework →</a></p>
              <div className="ph-m-items">
                {[
                  ["837-P professional claims only","Not clearinghouse acceptance — that figure reads 7–12 points higher"],
                  ["First submission · zero rework","A claim that needed a correction before it paid does not count"],
                  ["Measured at the payer","Where it matters — not where it looks best on a dashboard"],
                  ["No setup fee · no contract","No long-term commitment required to start"],
                ].map(([v,l])=>(
                  <div className="ph-m-item" key={v}>
                    <div className="ph-m-val">{v}</div>
                    <div className="ph-m-lbl">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ EHR SYSTEMS ════════════════════════════════════ */}
        <section className="sec sec--white ph-reveal">
          <p className="ew">System compatibility</p>
          <h2 className="reveal">The systems we already work inside</h2>
          <p>Switching billing usually raises the fear of ripping out your systems. You keep them. We work inside your existing setup, including Epic, Athenahealth, eClinicalWorks, NextGen, Kareo, and AdvancedMD, among others, with integrations scoped during the revenue assessment.</p>
          <div className="ph-ehr" role="list">
            {["Epic","Athenahealth","eClinicalWorks","NextGen","Kareo","AdvancedMD","Office Ally","Practice Fusion","DrChrono","Greenway Health"].map(s=>(
              <span className="ph-ehr-badge" role="listitem" key={s}>{s}</span>
            ))}
          </div>
          <p style={{marginTop:"1rem",fontSize:".875rem",color:"var(--color-muted)"}}>No forced platform migration. Custom integrations scoped at no extra charge.</p>
        </section>

        {/* ═══ WHO THIS IS FOR ════════════════════════════════ */}
        <section className="sec sec--ivory ph-reveal">
          <p className="ew">Fit check</p>
          <h2 className="reveal">Who this is for</h2>
          <p>We are a strong fit for some practices and the wrong choice for others. We would rather say so up front.</p>
          <div className="ph-fit-grid">
            <div className="ph-fit-yes ph-reveal">
              <div className="ph-fit-head">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                Good fit
              </div>
              <ul className="ph-fit-list">
                <li>Physician practice billing on the CMS-1500 wanting collections measured at the payer</li>
                <li>Revenue leaking in denials, aged AR, or under-coded E/M levels</li>
                <li>A specialist team that knows your payers, not a rules engine</li>
                <li>Practices in any specialty across all 50 states</li>
                <li>Practices wanting to keep their EHR and hand off the billing layer</li>
              </ul>
            </div>
            <div className="ph-fit-no ph-reveal">
              <div className="ph-fit-head">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
                Probably not a fit
              </div>
              <ul className="ph-fit-list">
                <li>You want the lowest possible percentage and nothing else</li>
                <li>You want to keep billing fully in-house and only need software</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ CLOSING BANNER ═════════════════════════════════ */}
        <div className="ph-closing ph-reveal">
          <Image
            src="/physician-closing.webp"
            alt="Senior practice executive reviewing revenue analysis dashboard at a modern executive desk"
            width={1536} height={480}
            loading="lazy"
            style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%"}}
          />
          <div className="ph-closing-grad" aria-hidden="true" />
          <div className="ph-closing-stats" aria-hidden="true">
            <div className="ph-closing-big">97%</div>
            <div className="ph-closing-sub">First-pass clean claim rate</div>
            <div className="ph-closing-pair">
              <div style={{textAlign:"right"}}><div className="ph-closing-snum">14 days</div><div className="ph-closing-slbl">Onboarding</div></div>
              <div style={{textAlign:"right"}}><div className="ph-closing-snum">$0</div><div className="ph-closing-slbl">Setup fee</div></div>
            </div>
          </div>
          <div className="ph-closing-bar" aria-hidden="true" />
        </div>

        {/* ═══ FAQ ════════════════════════════════════════════ */}
        <section className="sec sec--white ph-reveal" id="faq">
          <p className="ew">Common questions</p>
          <h2 className="reveal">Physician billing questions we get asked</h2>
          <div className="ph-faq-layout">
            <div className="ph-faq-intro">
              <p style={{color:"var(--color-muted)"}}>Direct answers for physician practices evaluating an outside billing partner.</p>
            </div>
            <div className="ph-faq-list">
              <details>
                <summary>What is the difference between physician billing and hospital billing?</summary>
                <p>The two get confused constantly, and billing them the same way is where money leaks. Physician, or professional, billing covers the provider&apos;s work on the CMS-1500 or 837-P, priced by RVUs under the fee schedule. Hospital, or facility, billing covers the building on the UB-04, priced by DRG or APC. One encounter can generate both, and they are coded and denied differently.</p>
              </details>
              <details>
                <summary>How do you improve E/M coding accuracy?</summary>
                <p>Most practices lose money to under-coding without ever seeing a denial. We review each encounter against the 2021 decision-making criteria and code the level the documentation supports, up or down. Where the record cannot support a level, the provider gets specific feedback, so the fix happens at the chart, not claim by claim.</p>
              </details>
              <details>
                <summary>Do you handle prior authorization?</summary>
                <p>Prior authorization is the biggest time sink most practices have, and the easiest to hand off. Yes, we submit and track authorizations per payer before the visit and appeal the denials that are wrong. Most appealed prior-auth denials are overturned, so the appeal is usually worth filing.</p>
              </details>
              <details>
                <summary>Can you bill telehealth correctly across states?</summary>
                <p>Telehealth denials tend to repeat across every claim, because one setup error hits them all. Yes, we apply the correct place-of-service code and modifier for each payer, then confirm state parity rules, so those claims stop getting rejected.</p>
              </details>
              <details>
                <summary>Do you support MIPS reporting?</summary>
                <p>The risk with MIPS is a penalty of up to 9 percent, and the upside is usually oversold. Yes, we report the categories that clear the 75-point threshold and keep you off the penalty, and we give you a realistic view of the upside, not the statutory maximum.</p>
              </details>
              <details>
                <summary>What EHR and practice management systems do you work with?</summary>
                <p>Switching billing usually raises the fear of ripping out your systems. You keep them. We work inside your existing setup, including Epic, Athenahealth, eClinicalWorks, NextGen, Kareo, and AdvancedMD, among others, with integrations scoped during the revenue assessment.</p>
              </details>
              <details>
                <summary>How fast can you onboard, and is there a contract?</summary>
                <p>The worry is a long, disruptive switch that locks you in. Neither happens here. Onboarding runs about 14 days with no gap in claim submission, no setup fee, and no long-term contract.</p>
              </details>
              <details>
                <summary>How do you measure your clean claim rate?</summary>
                <p>This is the number to pin any billing company on, because it is easy to inflate. We measure ours at the payer, on first submission, with zero rework, so a claim that needed a correction before it paid does not count. Many vendors quote clearinghouse acceptance instead, which reads higher.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ═══ ASSESSMENT — shared CtaSection component ══════ */}
        <CtaSection
          eyebrow="Ready when you are"
          heading="The free assessment is specific."
          body="We pull a sample of your claims and show your E/M distribution against benchmark, your top denial reasons by dollar, and your aged AR by payer. You keep the findings whether or not you work with us. If you decide to outsource physician billing services after that, onboarding runs about two weeks, with no setup fee and no long-term contract."
          formId="physicianAssessmentForm"
          ctaLabel="Get a Free Revenue Assessment"
        />

      </main>

    <PhysicianScripts />
    </div>
  );
}
