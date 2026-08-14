import PhysicianScripts from "./PhysicianScripts";

export default function PhysicianBillingPage() {
  return (
    <div className="ph-page">

      <main id="main">

        {/* ═══ HERO ═══════════════════════════════════════════ */}
        <section className="ph-hero">
          <div className="ph-hero-inner">
            <div className="ph-hero-copy">
              <p className="ew ew--light">Physician billing services</p>
              <h1>Physician billing services for practices that bill on the CMS-1500</h1>

              {/* Mobile image inside copy column */}
              <div className="ph-hero-media-mobile" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/physician-hero.webp" alt="" />
              </div>

              <p className="ph-hero-intro">Physician billing is professional billing: the CMS-1500 side of the revenue cycle. A claim is paid on the code, the modifier, and the documentation behind it. We run that side for practices in all 50 states, from charge capture through denial resolution. We report our clean claim rate at the payer.</p>
              <div className="ph-hero-action">
                <a className="btn btn--gold" href="#assessment">Get a Free Revenue Assessment</a>
                <a className="btn btn--ghost" href="#scope">See what we cover</a>
              </div>
              <p className="ph-hero-note">97% first-pass clean claim rate at the payer · 14-day onboarding · No setup fee · All 50 states</p>
            </div>

            {/* Desktop image */}
            <div className="ph-hero-media" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/physician-hero.webp" alt="Physician and administrator reviewing EHR revenue workflow at a workstation" />
            </div>
          </div>
        </section>

        {/* ═══ PROOF STRIP ════════════════════════════════════ */}
        <div className="ph-proof" role="list" aria-label="Key metrics">
          <div className="ph-proof-inner wrap">
            <div className="ph-proof-item" role="listitem">97% clean claim rate — measured at the payer</div>
            <div className="ph-proof-item" role="listitem">14-day onboarding</div>
            <div className="ph-proof-item" role="listitem">No setup fees</div>
            <div className="ph-proof-item" role="listitem">All 50 states</div>
          </div>
        </div>

        {/* ═══ PROFESSIONAL vs FACILITY ═══════════════════════ */}
        <section className="sec sec--white ph-reveal">
          <p className="ew">Understanding the difference</p>
          <h2>Professional billing is not facility billing</h2>
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

        {/* ═══ REVENUE LEAKS — 3 BIG NUMBERS ════════════════ */}
        <section className="sec sec--navy ph-reveal">
          <p className="ew ew--light">Where physician revenue slips</p>
          <h2>Most practices are losing revenue they have already earned</h2>
          <p>Two places leak the most: the claim coded a level too low, and the authorization nobody chased before the visit. Our physician billing services close both.</p>
          <div className="ph-leak-grid">
            <div className="ph-leak-stat">
              <div className="ph-leak-num">11.8%</div>
              <div className="ph-leak-lbl">Initial denial rate across all payers in 2024</div>
              <div className="ph-leak-src">Kodiak Solutions / Business Wire, Feb 2025</div>
            </div>
            <div className="ph-leak-stat">
              <div className="ph-leak-num">23.35%</div>
              <div className="ph-leak-lbl">Initial denial rate for Medicare Advantage — nearly 1 in 4 claims</div>
              <div className="ph-leak-src">Kodiak Solutions / Business Wire, Feb 2025</div>
            </div>
            <div className="ph-leak-stat">
              <div className="ph-leak-num">40/wk</div>
              <div className="ph-leak-lbl">Prior auth requests per physician — 13 hours of staff time</div>
              <div className="ph-leak-src">AMA Prior Authorization Survey</div>
            </div>
          </div>
          <p>Most denied claims are paid in the end, but only after staff time to rework them and a delay in the cash. About one in three physicians say prior auth requests are often or always denied.</p>
        </section>

        {/* ═══ SCOPE — 6 CARDS ════════════════════════════════ */}
        <section className="sec sec--ivory ph-reveal" id="scope">
          <p className="ew">What we manage</p>
          <h2>What we run across the physician revenue cycle</h2>
          <p>Our physician billing services cover the professional revenue cycle end to end — one connected process so a denial pattern changes how the next claim is coded.</p>
          <div className="ph-scope-grid">
            {[
              ["01","Eligibility, benefits & prior authorization","Verified before the visit — not after the denial. We confirm coverage and submit authorizations per payer on schedule."],
              ["02","Specialty-assigned CPT, ICD-10 & E/M coding","Charge capture assigned by specialty at onboarding. Cardiology, dermatology, and others worked by people who know that specialty's edits."],
              ["03","Claim scrubbing against payer rules & NCCI edits","Every claim checked against payer-specific rules and NCCI edit sets before submission. Errors caught before they become denials."],
              ["04","Payment posting & denial resolution","Denials worked by root cause, not batch-processed by age. Patterns feed back into coding so the same mistake does not recur."],
              ["05","AR follow-up & patient statements","AR worked by payer-specific escalation paths. Patient statements generated and followed up so aging does not accumulate."],
              ["06","Provider credentialing & payer enrollment","NPI, CAQH, PECOS, and payer applications managed with re-credentialing dates tracked. A lapsed enrollment stops payment — we prevent that."],
            ].map(([n,t,b]) => (
              <article className="ph-scope-card ph-reveal" key={n}>
                <div className="ph-scope-num" aria-hidden="true">{n}</div>
                <h3>{t}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ E/M LEVEL — image + number card ═══════════════ */}
        <section className="sec sec--navy ph-reveal">
          <p className="ew ew--light">The quietest revenue loss</p>
          <h2>E/M level optimization</h2>
          <p>The most common way a physician claim loses money is not a denial. It is a visit billed one level below what the record supports. That is under-coding, and it is silent.</p>
          <p>Under the 2021 guidelines, an office visit is coded by medical decision making or total time. A 99214 pays about $40 more than a 99213 — roughly $135 against $95. Commercial payers pay 120 to 200 percent of that.</p>
          <div className="ph-em-wrap">
            <div className="ph-em-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/physician-em-coding.webp" alt="Medical billing specialist reviewing encounter notes and CPT coding on dual monitors" loading="lazy" />
              <div className="ph-em-photo__chip" aria-hidden="true">
                <div className="ph-em-chip-num">$40</div>
                <div className="ph-em-chip-lbl">More per visit<br/>99213 → 99214</div>
              </div>
            </div>
            <div>
              <p style={{color:"rgba(255,255,255,.78)"}}>We review each encounter against the decision-making criteria and code the level the documentation supports, up or down. Where it cannot support a level, the provider gets specific feedback so the fix lands at the chart — not claim by claim.</p>
              <div className="ph-em-card">
                <div className="ph-em-big">$20K<span>+</span></div>
                <div className="ph-em-sub">Annual revenue from visits already happened</div>
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
          <h2>Where physician claims get denied, and how we stop it</h2>
          <p>Physician denials cluster in a handful of codes. We catch each before the claim leaves, not after it comes back.</p>
          <div className="ph-dt-wrap">
            <table className="ph-dt" aria-label="Denial codes and prevention methods">
              <thead><tr><th scope="col">Denial</th><th scope="col">How we stop it</th></tr></thead>
              <tbody>
                <tr><td>E/M level mismatch</td><td>Decision-making review on every encounter, coded up or down to the record</td></tr>
                <tr><td>CO-50 medical necessity</td><td>ICD-10 checked against the payer&apos;s coverage policy before billing</td></tr>
                <tr><td>CO-97 bundling / modifier 25</td><td>NCCI edits checked; modifier applied only when the service is separate</td></tr>
                <tr><td>CO-29 timely filing</td><td>Submission inside a set turnaround with deadline monitoring</td></tr>
                <tr><td>Prior-auth denial</td><td>Authorization tracked per payer before the service is rendered</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ═══ SPECIALTY WORKFLOWS — 4 BIG-NUMBER CARDS ══════ */}
        <section className="sec sec--ivory ph-reveal">
          <p className="ew">Specialized workflows</p>
          <h2>Every part of the professional revenue cycle, managed</h2>
          <div className="ph-hl-grid">
            <article className="ph-hl-card ph-reveal" aria-labelledby="pa-h3">
              <div className="ph-hl-big">4 in 5</div>
              <h3 id="pa-h3">Prior authorization, handled before the visit</h3>
              <p>Physicians average 40 prior auth requests a week and 13 hours of staff time. Roughly one in three are often or always denied. We submit, track, and appeal per payer before the visit — off the front desk entirely.</p>
              <p>Around four in five appealed prior-auth denials get overturned, so the appeal is usually the right call.</p>
              <span className="ph-chip">~4 in 5 appealed denials overturned</span>
            </article>
            <article className="ph-hl-card ph-hl-card--gold ph-reveal" aria-labelledby="th-h3">
              <div className="ph-hl-big ph-hl-big--gold">1 fix</div>
              <h3 id="th-h3">Telehealth billing without the repeat errors</h3>
              <p>Telehealth denials tend to hit every claim at once — one setup error, every claim wrong. POS 10 when the patient is at home, POS 02 when not. Modifier 95 for audio-video, modifier 93 for audio-only — not interchangeable.</p>
              <p>We set the place-of-service and modifier pairing per payer and confirm state parity rules. The same visit does not get denied twice.</p>
            </article>
            <article className="ph-hl-card ph-hl-card--navy ph-reveal" aria-labelledby="mips-h3">
              <div className="ph-hl-big ph-hl-big--navy">−9%</div>
              <h3 id="mips-h3">MIPS reporting, scored honestly</h3>
              <p>MIPS moves Medicare Part B payments up or down two years later. Maximum penalty: 9 percent. The upside is budget-neutral and rarely reaches the headline figure.</p>
              <p>We report Quality, Promoting Interoperability, and Improvement Activities to clear the 75-point threshold and give you the realistic upside — not the statutory maximum.</p>
              <span className="ph-chip ph-chip--navy">Max penalty: 9% of Part B</span>
            </article>
            <article className="ph-hl-card ph-hl-card--muted ph-reveal" aria-labelledby="cred-h3">
              <div className="ph-hl-big ph-hl-big--muted">$0</div>
              <h3 id="cred-h3">Credentialing and enrollment kept current</h3>
              <p>A lapsed enrollment stops payment with no denial code to warn you. A PECOS deactivation or expired CAQH attestation quietly holds every Medicare claim for that provider.</p>
              <p>Our <a href="/services/medical-credentialing/">credentialing team</a> manages NPI, CAQH, PECOS, and payer applications, tracking re-credentialing dates so a gap never reaches your remittance.</p>
              <span className="ph-chip ph-chip--muted">Zero gaps in enrollment</span>
            </article>
          </div>
        </section>

        {/* ═══ MID CTA ════════════════════════════════════════ */}
        <div className="ph-cta-band">
          <div className="ph-cta-inner">
            <div>
              <h2>Two places leak the most. Let us show you exactly where yours is.</h2>
              <p>The free assessment pulls a sample of your claims and shows your E/M distribution against benchmark, your top denial reasons by dollar, and your aged AR by payer. You keep the findings.</p>
            </div>
            <a href="#assessment" className="btn">Get a Free Revenue Assessment</a>
          </div>
        </div>

        {/* ═══ IN-HOUSE COST ══════════════════════════════════ */}
        <section className="sec sec--navy ph-reveal">
          <p className="ew ew--light">Honest comparison</p>
          <h2>In-house or outsourced, the honest version</h2>
          <div className="ph-inhouse">
            <div>
              <p>Outsourcing is closer to a coverage question than a cost line. A single biller runs about $50,250 a year before benefits, and that seat carries E/M coding, prior auth, denials, and every CPT change alone. When it sits empty, collections stall. One seat is one point of failure.</p>
              <p>We work on a percentage of what we collect — paid when you are paid. No seat to backfill, no long-term contract. If you already run a strong team, we take only the leaking piece: <a href="/services/account-receivable-management/">AR</a>, denials, or <a href="/services/medical-credentialing/">credentialing</a>.</p>
              <div style={{marginTop:"2rem"}}>
                <a href="#assessment" className="btn">Get a Free Revenue Assessment</a>
              </div>
            </div>
            <div className="ph-cost-box">
              <div className="ph-cost-fig">$50,250</div>
              <div className="ph-cost-sub">Median biller salary · per year · before benefits (BLS.gov)</div>
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
          <h2>What changed for the practices we took on</h2>
          <p>These are physician practices we bill for now. The charges did not change; the collections did.</p>
          <div className="ph-proof-grid">
            <article className="ph-oc ph-reveal">
              <span className="ph-oc-badge">Primary Care</span>
              <div className="ph-oc-metric">18.2% → 61%</div>
              <div className="ph-oc-lbl">Collection rate on identical $220K/month charges</div>
              <span className="ph-oc-extra-num">+$94,200</span>
              <span className="ph-oc-extra-lbl">Additional per month</span>
              <div className="ph-oc-name"><a href="/case-studies/patient-first-primary-care/">Patient First Primary Care</a></div>
              <div className="ph-oc-type">Six-provider primary care group</div>
            </article>
            <article className="ph-oc ph-reveal">
              <span className="ph-oc-badge">Behavioral Health</span>
              <div className="ph-oc-metric">$0 → $43,678</div>
              <div className="ph-oc-lbl">Monthly collections after ERA &amp; EFT enrollments completed</div>
              <span className="ph-oc-extra-num">$178,237</span>
              <span className="ph-oc-extra-lbl">Monthly charges, unchanged</span>
              <div className="ph-oc-name"><a href="/case-studies/psychiatric-connections/">Psychiatric Connections</a></div>
              <div className="ph-oc-type">Telehealth psychiatry — 6 states</div>
            </article>
            <article className="ph-oc ph-reveal">
              <span className="ph-oc-badge">Dermatology</span>
              <div className="ph-oc-metric">$60,000</div>
              <div className="ph-oc-lbl">Revenue retained in a one-time audit</div>
              <span className="ph-oc-extra-num">1 audit</span>
              <span className="ph-oc-extra-lbl">No billing handoff needed</span>
              <div className="ph-oc-name"><a href="/case-studies/">Divine Dermatology</a></div>
              <div className="ph-oc-type">Specialty dermatology practice</div>
            </article>
          </div>
          <p style={{marginTop:"1.25rem",fontSize:".9rem",color:"var(--color-muted)"}}>The full <a href="/case-studies/" style={{color:"var(--color-action)",fontWeight:700}}>case studies are here</a>.</p>
        </section>

        {/* ═══ 97% MEASURE ════════════════════════════════════ */}
        <section className="sec sec--green ph-reveal">
          <p className="ew ew--gold">How we measure it</p>
          <div className="ph-measure">
            <div>
              <div className="ph-measure-mark">97<span>%</span></div>
            </div>
            <div>
              <div className="ph-measure-sub">First-pass clean claim rate</div>
              <p className="ph-measure-note">Measured at the payer on professional (837-P) claims — not clearinghouse acceptance, which reads 7–12 points higher. Every account runs inside our <a href="/">Revenue Control Framework</a>.</p>
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
          <h2>The systems we already work inside</h2>
          <p>Switching billing usually raises the fear of ripping out your systems. You keep them. We work inside your existing setup with integrations scoped during the revenue assessment at no extra charge.</p>
          <div className="ph-ehr" role="list" aria-label="Compatible EHR and practice management systems">
            {["Epic","Athenahealth","eClinicalWorks","NextGen","Kareo","AdvancedMD","Office Ally","Practice Fusion","DrChrono","Greenway Health"].map(s=>(
              <span className="ph-ehr-badge" role="listitem" key={s}>{s}</span>
            ))}
          </div>
          <p style={{marginTop:"1rem",fontSize:".875rem",color:"var(--color-muted)"}}>No forced platform migration. Custom integrations scoped at no extra charge.</p>
        </section>

        {/* ═══ WHO THIS IS FOR ════════════════════════════════ */}
        <section className="sec sec--ivory ph-reveal">
          <p className="ew">Fit check</p>
          <h2>Who this is for</h2>
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/physician-closing.webp" alt="Senior practice executive reviewing revenue analysis dashboard at a modern executive desk" loading="lazy" />
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
          <h2>Physician billing questions we get asked</h2>
          <div className="ph-faq-layout">
            <div className="ph-faq-intro">
              <p style={{color:"var(--color-muted)",fontSize:"1rem",lineHeight:1.7}}>Direct answers for physician practices evaluating an outside billing partner.</p>
            </div>
            <div className="ph-faq-list">
              {[
                ["fq1","What is the difference between physician billing and hospital billing?","The two get confused constantly, and billing them the same way is where money leaks. Physician billing covers the provider's work on the CMS-1500 or 837-P, priced by RVUs under the fee schedule. Hospital billing covers the building on the UB-04, priced by DRG or APC. One encounter can generate both, and they are coded and denied differently."],
                ["fq2","How do you improve E/M coding accuracy?","Most practices lose money to under-coding without ever seeing a denial. We review each encounter against the 2021 decision-making criteria and code the level the documentation supports, up or down. Where the record cannot support a level, the provider gets specific feedback so the fix happens at the chart."],
                ["fq3","Do you handle prior authorization?","Yes. We submit and track authorizations per payer before the visit and appeal the denials that are wrong. Most appealed prior-auth denials are overturned, so the appeal is usually worth filing."],
                ["fq4","Can you bill telehealth correctly across states?","Telehealth denials tend to repeat across every claim because one setup error hits them all. Yes, we apply the correct place-of-service code and modifier for each payer, then confirm state parity rules."],
                ["fq5","Do you support MIPS reporting?","Yes. We report the categories that clear the 75-point threshold and keep you off the penalty, and we give you a realistic view of the upside — not the statutory maximum."],
                ["fq6","What EHR and practice management systems do you work with?","You keep your systems. We work inside Epic, Athenahealth, eClinicalWorks, NextGen, Kareo, AdvancedMD, and others, with integrations scoped during the revenue assessment."],
                ["fq7","How fast can you onboard, and is there a contract?","Onboarding runs about 14 days with no gap in claim submission, no setup fee, and no long-term contract."],
                ["fq8","How do you measure your clean claim rate?","At the payer, on first submission, with zero rework — so a claim that needed a correction before it paid does not count. Many vendors quote clearinghouse acceptance instead, which reads 7–12 points higher."],
              ].map(([id,q,a])=>(
                <details key={id}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ASSESSMENT ═════════════════════════════════════ */}
        <section className="sec sec--green ph-reveal" id="assessment">
          <p className="ew ew--gold">Ready when you are</p>
          <h2>The free assessment is specific</h2>
          <p>We pull a sample of your claims and show your E/M distribution against benchmark, your top denial reasons by dollar, and your aged AR by payer. You keep the findings whether or not you work with us.</p>

          {/* Wide banner */}
          <div className="ph-assess-banner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/physician-meeting.webp" alt="Practice administrator and RCM strategist reviewing revenue analysis reports" loading="lazy" />
            <div className="ph-assess-grad" aria-hidden="true" />
            <div className="ph-assess-text" aria-hidden="true">
              <div className="ph-assess-tag">Revenue Assessment</div>
              <div className="ph-assess-hl">A 45-minute review with a senior RCM specialist — no sales pitch, just the numbers.</div>
            </div>
          </div>

          {/* 3-col: photo | checklist | form */}
          <div className="ph-assess-grid">
            <div className="ph-assess-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/physician-assessment.webp" alt="Senior RCM strategist presenting revenue assessment summary on tablet" loading="lazy" />
              <div className="ph-assess-accent" aria-hidden="true" />
              <div className="ph-assess-caption" aria-hidden="true">
                <div className="ph-assess-cap-h">45-minute revenue assessment</div>
                <div className="ph-assess-cap-s">No rate card. No obligation. You keep the findings.</div>
              </div>
            </div>

            <div>
              <p className="ew ew--gold" style={{marginBottom:"1.25rem"}}>Your revenue assessment starts here</p>
              <h3 style={{color:"#fff",marginBottom:"1rem",fontSize:"clamp(1.25rem,2.2vw,1.5rem)"}}>A focused look at where your revenue is going</h3>
              <p style={{color:"rgba(255,255,255,.65)",maxWidth:"none"}}>We review your claims, your E/M distribution, your top denial codes by dollar, and your aged AR by payer. You keep the findings. No rate card, no obligation.</p>
              <ul className="ph-checklist">
                {["E/M distribution benchmarked against your specialty","Top denial reasons by dollar from your AR","Aged AR by payer — filing window exposure","You keep the findings either way","HIPAA-compliant — BAA signed before any data moves","No setup fee. No long-term contract."].map(item=>(
                  <li key={item}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#528532" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="ph-form-box">
              <h3>Get a Free Revenue Assessment</h3>
              <form id="physicianAssessmentForm" action="/request-free-audit/" method="post" noValidate>
                <div className="ph-form-group"><label className="ph-form-lbl" htmlFor="f-name">Full name</label><input className="ph-form-ctrl" type="text" id="f-name" name="full_name" placeholder="Dr. Jane Smith" autoComplete="name" required /></div>
                <div className="ph-form-group"><label className="ph-form-lbl" htmlFor="f-email">Work email</label><input className="ph-form-ctrl" type="email" id="f-email" name="work_email" placeholder="name@practice.com" autoComplete="email" required /></div>
                <div className="ph-form-group"><label className="ph-form-lbl" htmlFor="f-practice">Practice name</label><input className="ph-form-ctrl" type="text" id="f-practice" name="practice_name" placeholder="Your practice or group name" required /></div>
                <div className="ph-form-group">
                  <label className="ph-form-lbl" htmlFor="f-specialty">Specialty</label>
                  <select className="ph-form-ctrl" id="f-specialty" name="specialty" defaultValue="">
                    <option value="" disabled>Select specialty</option>
                    {["Primary care","Cardiology","Dermatology","Behavioral health","Orthopedics","Gastroenterology","Neurology","Oncology","Radiology","Other specialty"].map(s=><option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="ph-form-group">
                  <label className="ph-form-lbl" htmlFor="f-concern">Primary revenue concern</label>
                  <select className="ph-form-ctrl" id="f-concern" name="revenue_concern" defaultValue="">
                    <option value="" disabled>Select concern</option>
                    {["Denials","Under-coded E/M levels","Prior authorization burden","Aged AR","Credentialing gaps","Telehealth billing","Full revenue cycle"].map(s=><option key={s}>{s}</option>)}
                  </select>
                </div>
                <button type="submit" className="ph-form-submit">Get a Free Revenue Assessment</button>
                <p className="ph-form-foot">HIPAA-compliant · No setup fee · No long-term contract</p>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="ph-footer">
        <div className="ph-footer-grid">
          <div className="ph-footer-brand">
            <a href="/">Medbilling RCM</a>
            <p>Professional billing for CMS-1500 practices, measured at the payer. E/M coding, prior auth, denials, and telehealth across all 50 states.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul className="ph-footer-links">
              <li><a href="/services/physician-billing/">Physician Billing</a></li>
              <li><a href="/services/hospital-medical-billing/">Hospital Billing</a></li>
              <li><a href="/services/medical-coding/">Medical Coding</a></li>
              <li><a href="/services/account-receivable-management/">AR Management</a></li>
              <li><a href="/services/medical-credentialing/">Credentialing</a></li>
              <li><a href="/services/coverage-discovery/">Coverage Discovery</a></li>
            </ul>
          </div>
          <div>
            <h4>Specialties</h4>
            <ul className="ph-footer-links">
              <li><a href="/specialties/">All Specialties</a></li>
              <li><a href="/specialties/cardiology/">Cardiology</a></li>
              <li><a href="/specialties/dermatology/">Dermatology</a></li>
              <li><a href="/specialties/behavioral-health/">Behavioral Health</a></li>
              <li><a href="/specialties/oncology/">Oncology</a></li>
              <li><a href="/specialties/radiology/">Radiology</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="ph-footer-links">
              <li><a href="/case-studies/">Case Studies</a></li>
              <li><a href="/#standard">About Us</a></li>
              <li><a href="/request-free-audit/">Free Revenue Assessment</a></li>
              <li><a href="tel:+18885512526">1-888-551-2526</a></li>
              <li><a href="mailto:info@medbillingrcm.com">info@medbillingrcm.com</a></li>
            </ul>
          </div>
        </div>
        <div className="ph-footer-bot">
          <div>
            <p className="ph-footer-copy">© 2026 Medbilling RCM. All rights reserved.</p>
            <p className="ph-footer-copy">8907 Creeks Gate Ct, Richmond, TX 77407 | 7 1st St, Rosedale, NY 11422</p>
          </div>
          <p className="ph-footer-rev">Last reviewed August 2026. Figures from CMS, AMA, Kodiak Solutions, and BLS.</p>
        </div>
      </footer>

      <PhysicianScripts />
    </div>
  );
}
