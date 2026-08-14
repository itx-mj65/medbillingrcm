import Image from "next/image";
import PhysicianScripts from "./PhysicianScripts";

export default function PhysicianBillingPage() {
  return (
    <>
      {/* ── BREADCRUMB ── */}
      <nav className="ph-bc" aria-label="Breadcrumb">
        <ol className="ph-bc__list">
          <li><a href="/">Home</a></li>
          <li className="ph-bc__sep" aria-hidden="true">›</li>
          <li><a href="/services/">Services</a></li>
          <li className="ph-bc__sep" aria-hidden="true">›</li>
          <li className="ph-bc__cur" aria-current="page">Physician Billing</li>
        </ol>
      </nav>

      <main id="main">

        {/* ── HERO ── */}
        <section className="ph-hero" aria-labelledby="hero-h1">
          <div className="ph-hero__grid">
            <div>
              <div className="ph-eyebrow">Physician Billing Services</div>
              <h1 id="hero-h1">Physician billing services for practices that bill on the CMS-1500</h1>
              <p className="ph-hero__lead">Physician billing is professional billing: the CMS-1500 side of the revenue cycle. A claim is paid on the code, the modifier, and the documentation behind it. We run that side for practices in all 50 states, from charge capture through denial resolution. We report our clean claim rate at the payer.</p>
              <div className="ph-hero__cta">
                <a href="#assessment" className="ph-btn ph-btn--green">
                  Get a Free Revenue Assessment
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="#scope" className="ph-btn ph-btn--ghost">See what we cover</a>
              </div>
              <div className="ph-hero__stats">
                <div className="ph-hero__stat"><div className="ph-hero__stat-num">97%</div><div className="ph-hero__stat-lbl">First-pass at the payer</div></div>
                <div className="ph-hero__stat"><div className="ph-hero__stat-num">14</div><div className="ph-hero__stat-lbl">Day onboarding — no gap in claims</div></div>
                <div className="ph-hero__stat"><div className="ph-hero__stat-num">$0</div><div className="ph-hero__stat-lbl">Setup fee — ever</div></div>
                <div className="ph-hero__stat"><div className="ph-hero__stat-num">50</div><div className="ph-hero__stat-lbl">States covered</div></div>
              </div>
            </div>
            <div className="ph-hero__img">
              <div className="ph-hero__img-wrap">
                <Image src="/physician-hero.webp" alt="Physician in white coat and administrator reviewing EHR revenue workflow at a wall-mounted workstation" width={1537} height={1023} priority quality={85} style={{width:"100%",height:"auto",display:"block",borderRadius:"20px"}} />
                <div className="ph-hero__img-gradient" aria-hidden="true" />
                <div className="ph-hero__badge" aria-hidden="true">Clinical Collaboration</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROFESSIONAL vs FACILITY ── */}
        <section className="ph-sec ph-sec--white ph-reveal" aria-labelledby="compare-h2">
          <div className="ph-si">
            <div className="ph-eyebrow">Understanding the difference</div>
            <h2 id="compare-h2">Professional billing is not facility billing</h2>
            <p>A physician bills for the work of the provider. A hospital bills for the building. The claims travel on different forms, price on different systems, and get denied for different reasons. Treat them the same and you lose on both.</p>
          </div>
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
          <div className="ph-tbl-note">If your practice also carries a facility component, our <a href="/services/hospital-medical-billing/">hospital billing team</a> runs that side. This page is about the professional claim.</div>
        </section>

        {/* ── REVENUE LEAKS — 3 BIG NUMBERS ── */}
        <section className="ph-sec ph-sec--navy ph-reveal" aria-labelledby="slip-h2">
          <div className="ph-si">
            <div className="ph-eyebrow">Where physician revenue slips</div>
            <h2 id="slip-h2">Most practices are losing revenue they have already earned</h2>
            <p>Two places leak the most: the claim that goes out coded a level too low, and the authorization nobody chased before the visit. Our physician medical billing services close both.</p>
          </div>
          <div className="ph-leak-grid">
            <div className="ph-leak-stat">
              <div className="ph-leak-stat__num">11.8%</div>
              <div className="ph-leak-stat__lbl">Initial denial rate across all payers in 2024</div>
              <div className="ph-leak-stat__src">Kodiak Solutions / Business Wire, Feb 2025 — 2,100+ hospitals & 300,000 physicians</div>
            </div>
            <div className="ph-leak-stat">
              <div className="ph-leak-stat__num">23.35%</div>
              <div className="ph-leak-stat__lbl">Initial denial rate for Medicare Advantage — nearly 1 in 4 claims</div>
              <div className="ph-leak-stat__src">Kodiak Solutions / Business Wire, Feb 2025</div>
            </div>
            <div className="ph-leak-stat">
              <div className="ph-leak-stat__num">40/wk</div>
              <div className="ph-leak-stat__lbl">Prior auth requests per physician — consuming 13 hours of staff time</div>
              <div className="ph-leak-stat__src">AMA Prior Authorization Survey</div>
            </div>
          </div>
          <p style={{maxWidth:"72ch",fontSize:"1rem",color:"rgba(255,255,255,.7)",lineHeight:1.72}}>Most denied claims are paid in the end, but only after staff time to rework them and a delay in the cash. That delay is the cost. About one in three physicians say prior auth requests are often or always denied.</p>
        </section>

        {/* ── SCOPE ── */}
        <section className="ph-sec ph-sec--ivory ph-reveal" id="scope" aria-labelledby="scope-h2">
          <div className="ph-si">
            <div className="ph-eyebrow">What we manage</div>
            <h2 id="scope-h2">What we run across the physician revenue cycle</h2>
            <p>Our physician billing services cover the professional revenue cycle end to end. This is physician revenue cycle management run as one connected process, so a denial pattern changes how the next claim is coded.</p>
          </div>
          <div className="ph-scope-grid">
            {[
              ["01","Eligibility, benefits & prior authorization","Verified before the visit — not after the denial. We confirm coverage and submit authorizations per payer on schedule."],
              ["02","Specialty-assigned CPT, ICD-10 & E/M coding",<>Charge capture assigned by <a href="/specialties/">specialty</a> at onboarding — cardiology, dermatology, and others worked by people who know that specialty&apos;s edits.</>],
              ["03","Claim scrubbing against payer rules & NCCI edits","Every claim checked against payer-specific rules and NCCI edit sets before submission. Errors caught before they become denials."],
              ["04","Payment posting & denial resolution",<>Denials worked by root cause, not batch-processed by age. Patterns feed back into <a href="/services/medical-coding/">coding</a> so the same mistake does not recur.</>],
              ["05","AR follow-up & patient statements",<><a href="/services/account-receivable-management/">AR</a> worked by payer-specific escalation paths. Patient statements generated and followed up so aging does not accumulate.</>],
              ["06","Provider credentialing & payer enrollment","NPI, CAQH, PECOS, and payer applications managed with re-credentialing dates tracked. A lapsed enrollment stops payment — we prevent that."],
            ].map(([num, title, body]) => (
              <div className="ph-scope-card ph-reveal" key={num}>
                <div className="ph-scope-card__num" aria-hidden="true">{num}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── E/M LEVEL ── */}
        <section className="ph-sec ph-sec--navy ph-reveal" aria-labelledby="em-h2">
          <div className="ph-em-layout">
            <div>
              <div className="ph-eyebrow">The quietest revenue loss</div>
              <h2 id="em-h2">E/M level optimization</h2>
              <p>The most common way a physician claim loses money is not a denial. It is a visit billed one level below what the record supports. That is under-coding, and it is silent.</p>
              <p style={{marginTop:"1.25rem"}}>Under the 2021 guidelines, an office visit is coded by medical decision making or total time, not by how much was typed. A 99214 pays about $40 more than a 99213 under the 2026 Medicare Physician Fee Schedule, roughly $135 against $95 in the office. Commercial payers pay 120 to 200 percent of that.</p>
              <p style={{marginTop:"1.25rem"}}>We review each encounter against the decision-making criteria and code the level the documentation supports, up or down. Where it cannot support a level, the provider gets specific feedback, so the fix lands at the chart. A 99214 is also among the most audited codes. The review that catches under-coding is the one that holds up under an audit.</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"flex-start"}}>
              <div className="ph-em-badge" aria-hidden="true">One provider · 90 patients/week</div>
              <div className="ph-em-card">
                <div className="ph-em-card__big">$20K<span>+</span></div>
                <div className="ph-em-card__sub">Annual revenue from visits already happened</div>
                <p className="ph-em-card__note">Move 10 patients a week from 99213 to the 99214 the note already supports — at ~$40 more per visit. No denial ever fires.</p>
                <div className="ph-em-card__div" />
                <div className="ph-em-stats">
                  <div><span className="ph-em-stat-num">$40</span><span className="ph-em-stat-lbl">More per visit<br/>99213→99214</span></div>
                  <div><span className="ph-em-stat-num">$400</span><span className="ph-em-stat-lbl">More per week<br/>10 visits moved</span></div>
                </div>
              </div>
              <div className="ph-em-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/physician-em-coding.webp" alt="Medical billing specialist reviewing encounter notes and CPT coding on dual monitors" loading="lazy" />
                <div className="ph-em-img__scrim" aria-hidden="true" />
                <div className="ph-em-img__chip" aria-hidden="true">
                  <div className="ph-em-img__chip-num">$40</div>
                  <div className="ph-em-img__chip-lbl">More per visit<br/>99213 → 99214</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DENIAL TABLE ── */}
        <section className="ph-sec ph-sec--white ph-reveal" aria-labelledby="denial-h2">
          <div className="ph-si">
            <div className="ph-eyebrow">Denial prevention</div>
            <h2 id="denial-h2">Where physician claims get denied, and how we stop it</h2>
            <p>Physician denials cluster in a handful of codes. We catch each before the claim leaves, not after it comes back. Prevention beats appeals here.</p>
          </div>
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

        {/* ── SPECIALTY WORKFLOWS ── */}
        <section className="ph-sec ph-sec--ivory ph-reveal" aria-labelledby="spec-h2">
          <div className="ph-si">
            <div className="ph-eyebrow">Specialized workflows</div>
            <h2 id="spec-h2">Every part of the professional revenue cycle, managed</h2>
          </div>
          <div className="ph-hl-grid">
            <div className="ph-hl-card ph-reveal" aria-labelledby="pa-h3">
              <div className="ph-hl-big ph-hl-big--green">4 in 5</div>
              <h3 id="pa-h3">Prior authorization, handled before the visit</h3>
              <p>Prior authorization is where a practice loses the most staff time. Physicians average 40 requests a week and 13 hours. Roughly one in three are often or always denied. Left to the front desk, it becomes hold music and missed deadlines. We take it off the front desk.</p>
              <p style={{marginTop:".875rem"}}>We submit and track authorizations per payer before the visit, watch the status, and appeal the denials that are wrong. Around four in five appealed prior-auth denials get overturned, so the appeal is usually the right call.</p>
              <span className="ph-chip">~4 in 5 appealed denials overturned</span>
            </div>
            <div className="ph-hl-card ph-hl-card--gold ph-reveal" aria-labelledby="th-h3">
              <div className="ph-hl-big ph-hl-big--gold">1 fix</div>
              <h3 id="th-h3">Telehealth billing without the repeat errors</h3>
              <p>Telehealth denials tend to hit every claim at once. They come from a setup error, not a single mistake. Fix the setup once.</p>
              <p style={{marginTop:".875rem"}}>POS 10 when the patient is at home, POS 02 when they are not. Modifier 95 marks synchronous audio-video, modifier 93 marks audio-only — not interchangeable. Under parity laws in most states, commercial payers reimburse telehealth at in-person rates, but only when the POS and modifier are right.</p>
              <p style={{marginTop:".875rem"}}>We set the place-of-service and modifier pairing per payer and confirm parity rules on commercial claims. The same visit does not get denied twice.</p>
            </div>
            <div className="ph-hl-card ph-hl-card--navy ph-reveal" aria-labelledby="mips-h3">
              <div className="ph-hl-big" style={{color:"var(--color-primary)"}}>−9%</div>
              <h3 id="mips-h3">MIPS reporting, scored honestly</h3>
              <p>MIPS moves Medicare Part B payments up or down two years later. The performance threshold is 75 points, and the maximum penalty is 9 percent. The upside is smaller than it sounds: the program is budget neutral, so positive adjustments are scaled down and rarely reach the headline figure.</p>
              <p style={{marginTop:".875rem"}}>We report Quality, Promoting Interoperability, and Improvement Activities to clear the threshold and avoid the penalty. We tell you the realistic upside, not the statutory maximum.</p>
              <span className="ph-chip ph-chip--navy">Max penalty: 9% of Part B</span>
            </div>
            <div className="ph-hl-card ph-hl-card--light ph-reveal" aria-labelledby="cred-h3">
              <div className="ph-hl-big" style={{color:"var(--color-muted)"}}>$0</div>
              <h3 id="cred-h3">Credentialing and enrollment kept current</h3>
              <p>A lapsed enrollment stops payment with no denial code to warn you. A PECOS deactivation or an expired CAQH attestation quietly holds every Medicare claim for that provider.</p>
              <p style={{marginTop:".875rem"}}>Our <a href="/services/medical-credentialing/">credentialing team</a> manages NPI, CAQH, PECOS, and payer applications, and tracks re-credentialing dates so a gap never reaches your remittance.</p>
              <span className="ph-chip" style={{background:"rgba(106,109,119,.09)",borderColor:"rgba(106,109,119,.2)",color:"var(--color-muted)"}}>Zero gaps in enrollment</span>
            </div>
          </div>
        </section>

        {/* ── MID CTA BAND ── */}
        <div className="ph-cta-band" aria-label="Revenue assessment CTA">
          <div className="ph-cta-band__inner">
            <div>
              <h2>Two places leak the most. Let us show you exactly where yours is.</h2>
              <p>The free assessment pulls a sample of your claims and shows your E/M distribution against benchmark, your top denial reasons by dollar, and your aged AR by payer. You keep the findings.</p>
            </div>
            <a href="#assessment" className="ph-btn ph-btn--green" style={{flexShrink:0}}>
              Get a Free Revenue Assessment
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* ── IN-HOUSE vs OUTSOURCED ── */}
        <section className="ph-sec ph-sec--navy ph-reveal" aria-labelledby="inhouse-h2">
          <div className="ph-inhouse-layout">
            <div>
              <div className="ph-eyebrow">Honest comparison</div>
              <h2 id="inhouse-h2">In-house or outsourced, the honest version</h2>
              <p>Outsourcing usually gets weighed as a cost line. For a physician practice, it is closer to a coverage question. A single biller runs about $50,250 a year in salary before benefits, and that one seat carries E/M coding, prior auth, denials, and every CPT change alone. When it sits empty for a quarter, collections stall with it. One seat is one point of failure.</p>
              <p style={{marginTop:"1.25rem"}}>We work on a percentage of what we collect, so we are paid when you are paid. There is no seat to backfill, and no long-term contract if it stops working. If you already run a strong billing team, we take only the piece that is leaking, whether that is <a href="/services/account-receivable-management/">AR</a>, denials, or <a href="/services/medical-credentialing/">credentialing</a>. That is medical billing for physicians shaped to the practice, not a fixed package.</p>
              <div style={{marginTop:"2rem"}}><a href="#assessment" className="ph-btn ph-btn--green">Get a Free Revenue Assessment <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></div>
            </div>
            <div className="ph-cost-box">
              <div className="ph-cost-box__fig">$50,250</div>
              <div className="ph-cost-box__sub">Median biller salary · per year · before benefits (BLS.gov)</div>
              <div className="ph-cost-box__div" />
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

        {/* ── CLIENT OUTCOMES ── */}
        <section className="ph-sec ph-sec--white ph-reveal" aria-labelledby="proof-h2">
          <div className="ph-si">
            <div className="ph-eyebrow">Client outcomes</div>
            <h2 id="proof-h2">What changed for the practices we took on</h2>
            <p>These are physician practices we bill for now. The charges did not change; the collections did.</p>
          </div>
          <div className="ph-proof-grid">
            <div className="ph-oc ph-reveal">
              <span className="ph-oc__badge">Primary Care</span>
              <div className="ph-oc__metric">18.2% → 61%</div>
              <div className="ph-oc__lbl">Collection rate on identical $220K/month charges</div>
              <div style={{margin:"1rem 0"}}><span className="ph-oc__extra-num">+$94,200</span><span className="ph-oc__extra-lbl">Additional per month</span></div>
              <div className="ph-oc__name"><a href="/case-studies/patient-first-primary-care/">Patient First Primary Care</a></div>
              <div className="ph-oc__type">Six-provider primary care group</div>
            </div>
            <div className="ph-oc ph-reveal">
              <span className="ph-oc__badge">Behavioral Health</span>
              <div className="ph-oc__metric">$0 → $43,678</div>
              <div className="ph-oc__lbl">Monthly collections after ERA &amp; EFT enrollments completed</div>
              <div style={{margin:"1rem 0"}}><span className="ph-oc__extra-num">$178,237</span><span className="ph-oc__extra-lbl">Monthly charges, unchanged</span></div>
              <div className="ph-oc__name"><a href="/case-studies/psychiatric-connections/">Psychiatric Connections</a></div>
              <div className="ph-oc__type">Telehealth psychiatry — 6 states</div>
            </div>
            <div className="ph-oc ph-reveal">
              <span className="ph-oc__badge">Dermatology</span>
              <div className="ph-oc__metric">$60,000</div>
              <div className="ph-oc__lbl">Revenue retained in a one-time audit</div>
              <div style={{margin:"1rem 0"}}><span className="ph-oc__extra-num">1 audit</span><span className="ph-oc__extra-lbl">No billing handoff needed</span></div>
              <div className="ph-oc__name"><a href="/case-studies/">Divine Dermatology</a></div>
              <div className="ph-oc__type">Specialty dermatology practice</div>
            </div>
          </div>
          <p style={{marginTop:"1.25rem",fontSize:".9rem",color:"var(--color-muted)"}}>The full <a href="/case-studies/" style={{color:"var(--color-action)",fontWeight:700}}>case studies are here</a>.</p>
        </section>

        {/* ── 97% MEASUREMENT ── */}
        <section className="ph-sec ph-sec--navy ph-reveal" aria-labelledby="measure-h2">
          <div className="ph-eyebrow" style={{marginBottom:"2.5rem"}}>How we measure it</div>
          <div className="ph-measure-layout">
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"1rem"}}>
              <div className="ph-measure-num">97<span className="ph-measure-pct">%</span></div>
              <div className="ph-measure-sub">First-pass clean claim rate</div>
              <p className="ph-measure-note">As a physician billing company, our 97% first-pass rate is measured at the payer on professional (837-P) claims. It is not the clearinghouse figure, which always reads higher. Every account runs inside our <a href="/">Revenue Control Framework</a> — the five-phase method behind each engagement.</p>
            </div>
            <div className="ph-measure-items">
              {[
                ["837-P professional claims only","Not clearinghouse acceptance — that figure reads 7–12 points higher"],
                ["First submission · zero rework","A claim that needed a correction before it paid does not count"],
                ["Measured at the payer","Where it matters — not where it looks best on a dashboard"],
                ["No setup fee · no contract","No long-term commitment required to start"],
              ].map(([val, lbl]) => (
                <div className="ph-measure-item" key={val}>
                  <div className="ph-measure-item__val">{val}</div>
                  <div className="ph-measure-item__lbl">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EHR SYSTEMS ── */}
        <section className="ph-sec ph-sec--white ph-reveal" aria-labelledby="ehr-h2">
          <div className="ph-si">
            <div className="ph-eyebrow">System compatibility</div>
            <h2 id="ehr-h2">The systems we already work inside</h2>
            <p>Switching billing usually raises the fear of ripping out your systems. You keep them. We work inside your existing setup, with integrations scoped during the revenue assessment at no extra charge.</p>
          </div>
          <div className="ph-ehr-strip" role="list" aria-label="Compatible EHR and practice management systems">
            {["Epic","Athenahealth","eClinicalWorks","NextGen","Kareo","AdvancedMD","Office Ally","Practice Fusion","DrChrono","Greenway Health"].map(s => (
              <span className="ph-ehr-badge" role="listitem" key={s}>{s}</span>
            ))}
          </div>
          <p style={{marginTop:"1rem",fontSize:".875rem",color:"var(--color-muted)"}}>No forced platform migration. Custom integrations scoped at no extra charge.</p>
        </section>

        {/* ── WHO THIS IS FOR ── */}
        <section className="ph-sec ph-sec--ivory ph-reveal" aria-labelledby="fit-h2">
          <div className="ph-si">
            <div className="ph-eyebrow">Fit check</div>
            <h2 id="fit-h2">Who this is for</h2>
            <p>We are a strong fit for some practices and the wrong choice for others. We would rather say so up front.</p>
          </div>
          <div className="ph-fit-grid">
            <div className="ph-fit-card ph-fit-card--yes ph-reveal">
              <div className="ph-fit-card__head">
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
            <div className="ph-fit-card ph-fit-card--no ph-reveal">
              <div className="ph-fit-card__head">
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

        {/* ── CLOSING BANNER ── */}
        <div className="ph-closing-banner ph-reveal">
          <div className="ph-closing-banner__inner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/physician-closing.webp" alt="Senior practice executive reviewing revenue analysis dashboard and performance reports at a modern executive desk" loading="lazy" style={{width:"100%",height:"clamp(180px,22vw,400px)",objectFit:"cover",objectPosition:"center 25%",display:"block"}} />
            <div className="ph-closing-banner__grad" aria-hidden="true" />
            <div className="ph-closing-banner__stats" aria-hidden="true">
              <div className="ph-closing-banner__big">97%</div>
              <div className="ph-closing-banner__sub">First-pass clean claim rate</div>
              <div className="ph-closing-banner__pair">
                <div style={{textAlign:"right"}}><div className="ph-closing-banner__stat-num">14 days</div><div className="ph-closing-banner__stat-lbl">Onboarding</div></div>
                <div style={{textAlign:"right"}}><div className="ph-closing-banner__stat-num">$0</div><div className="ph-closing-banner__stat-lbl">Setup fee</div></div>
              </div>
            </div>
            <div className="ph-closing-banner__border" aria-hidden="true" />
          </div>
        </div>

        {/* ── FAQ ── */}
        <section className="ph-sec ph-sec--white ph-reveal" id="faq" aria-labelledby="faq-h2">
          <div className="ph-si">
            <div className="ph-eyebrow">Common questions</div>
            <h2 id="faq-h2">Physician billing questions we get asked</h2>
          </div>
          <div className="ph-faq-list">
            {[
              ["fq1","What is the difference between physician billing and hospital billing?","The two get confused constantly, and billing them the same way is where money leaks. Physician, or professional, billing covers the provider's work on the CMS-1500 or 837-P, priced by RVUs under the fee schedule. Hospital, or facility, billing covers the building on the UB-04, priced by DRG or APC. One encounter can generate both, and they are coded and denied differently."],
              ["fq2","How do you improve E/M coding accuracy?","Most practices lose money to under-coding without ever seeing a denial. We review each encounter against the 2021 decision-making criteria and code the level the documentation supports, up or down. Where the record cannot support a level, the provider gets specific feedback, so the fix happens at the chart, not claim by claim."],
              ["fq3","Do you handle prior authorization?","Prior authorization is the biggest time sink most practices have, and the easiest to hand off. Yes, we submit and track authorizations per payer before the visit and appeal the denials that are wrong. Most appealed prior-auth denials are overturned, so the appeal is usually worth filing."],
              ["fq4","Can you bill telehealth correctly across states?","Telehealth denials tend to repeat across every claim, because one setup error hits them all. Yes, we apply the correct place-of-service code and modifier for each payer, then confirm state parity rules, so those claims stop getting rejected."],
              ["fq5","Do you support MIPS reporting?","The risk with MIPS is a penalty of up to 9 percent, and the upside is usually oversold. Yes, we report the categories that clear the 75-point threshold and keep you off the penalty, and we give you a realistic view of the upside, not the statutory maximum."],
              ["fq6","What EHR and practice management systems do you work with?","Switching billing usually raises the fear of ripping out your systems. You keep them. We work inside your existing setup, including Epic, Athenahealth, eClinicalWorks, NextGen, Kareo, and AdvancedMD, among others, with integrations scoped during the revenue assessment."],
              ["fq7","How fast can you onboard, and is there a contract?","The worry is a long, disruptive switch that locks you in. Neither happens here. Onboarding runs about 14 days with no gap in claim submission, no setup fee, and no long-term contract."],
              ["fq8","How do you measure your clean claim rate?","This is the number to pin any billing company on, because it is easy to inflate. We measure ours at the payer, on first submission, with zero rework, so a claim that needed a correction before it paid does not count. Many vendors quote clearinghouse acceptance instead, which reads higher."],
            ].map(([id, q, a]) => (
              <div className="ph-faq-item" key={id}>
                <button className="ph-faq-btn" aria-expanded="false" aria-controls={id} data-faq>
                  {q}
                  <span className="ph-faq-chev" aria-hidden="true">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                  </span>
                </button>
                <div className="ph-faq-panel" id={id} role="region">
                  <div className="ph-faq-panel__inner">{a}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ASSESSMENT ── */}
        <section className="ph-sec ph-sec--navy ph-reveal" id="assessment" aria-labelledby="assess-h2">
          <div className="ph-si" style={{marginBottom:"3rem"}}>
            <div className="ph-eyebrow">Ready when you are</div>
            <h2 id="assess-h2">The free assessment is specific</h2>
            <p>We pull a sample of your claims and show your E/M distribution against benchmark, your top denial reasons by dollar, and your aged AR by payer. You keep the findings whether or not you work with us. If you decide to outsource physician billing services after that, onboarding runs about two weeks, with no setup fee and no long-term contract.</p>
          </div>

          {/* Wide banner image */}
          <div className="ph-assess-banner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/physician-meeting.webp" alt="Practice administrator and senior RCM strategist reviewing printed revenue analysis reports at a professional conference table" loading="lazy" style={{width:"100%",height:"clamp(200px,28vw,420px)",objectFit:"cover",objectPosition:"center 30%",display:"block"}} />
            <div className="ph-assess-banner__grad" aria-hidden="true" />
            <div className="ph-assess-banner__text" aria-hidden="true">
              <div className="ph-assess-banner__tag">Revenue Assessment</div>
              <div className="ph-assess-banner__headline">A 45-minute review with a senior RCM specialist — no sales pitch, just the numbers.</div>
            </div>
          </div>

          {/* 3-col layout */}
          <div className="ph-assess-layout">
            {/* Col 1: photo */}
            <div className="ph-assess-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/physician-assessment.webp" alt="Senior RCM strategist presenting revenue assessment summary on tablet to physician practice owner" loading="lazy" />
              <div className="ph-assess-photo__accent" aria-hidden="true" />
              <div className="ph-assess-photo__caption" aria-hidden="true">
                <div className="ph-assess-photo__cap-head">45-minute revenue assessment</div>
                <div className="ph-assess-photo__cap-sub">No rate card. No obligation. You keep the findings.</div>
              </div>
            </div>

            {/* Col 2: checklist */}
            <div>
              <div className="ph-eyebrow" style={{marginBottom:"1.25rem"}}>Your revenue assessment starts here</div>
              <h3 style={{fontSize:"clamp(1.25rem,2.2vw,1.625rem)",fontWeight:700,color:"#fff",marginBottom:"1rem"}}>A focused look at where your revenue is going</h3>
              <p style={{color:"rgba(255,255,255,.65)",maxWidth:"none"}}>We review your claims, your E/M distribution, your top denial codes by dollar, and your aged AR by payer. You keep the findings. No rate card, no obligation.</p>
              <ul className="ph-checklist">
                {["E/M distribution benchmarked against your specialty","Top denial reasons by dollar from your AR","Aged AR by payer — filing window exposure","You keep the findings either way","HIPAA-compliant — BAA signed before any data moves","No setup fee. No long-term contract."].map(item => (
                  <li key={item}>
                    <svg className="ci" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#528532" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: form */}
            <div className="ph-form-box">
              <h3>Get a Free Revenue Assessment</h3>
              <form id="physicianAssessmentForm" action="/request-free-audit/" method="post" noValidate>
                <div className="ph-form-group"><label className="ph-form-lbl" htmlFor="f-name">Full name</label><input className="ph-form-ctrl" type="text" id="f-name" name="full_name" placeholder="Dr. Jane Smith" autoComplete="name" required /></div>
                <div className="ph-form-group"><label className="ph-form-lbl" htmlFor="f-email">Work email</label><input className="ph-form-ctrl" type="email" id="f-email" name="work_email" placeholder="name@practice.com" autoComplete="email" required /></div>
                <div className="ph-form-group"><label className="ph-form-lbl" htmlFor="f-practice">Practice name</label><input className="ph-form-ctrl" type="text" id="f-practice" name="practice_name" placeholder="Your practice or group name" required /></div>
                <div className="ph-form-group">
                  <label className="ph-form-lbl" htmlFor="f-specialty">Specialty</label>
                  <select className="ph-form-ctrl" id="f-specialty" name="specialty">
                    <option value="" disabled defaultValue="">Select specialty</option>
                    {["Primary care","Cardiology","Dermatology","Behavioral health","Orthopedics","Gastroenterology","Neurology","Oncology","Radiology","Other specialty"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="ph-form-group">
                  <label className="ph-form-lbl" htmlFor="f-concern">Primary revenue concern</label>
                  <select className="ph-form-ctrl" id="f-concern" name="revenue_concern">
                    <option value="" disabled defaultValue="">Select concern</option>
                    {["Denials","Under-coded E/M levels","Prior authorization burden","Aged AR","Credentialing gaps","Telehealth billing","Full revenue cycle"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <button type="submit" className="ph-form-submit">Get a Free Revenue Assessment</button>
                <p className="ph-form-foot">HIPAA-compliant · No setup fee · No long-term contract</p>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="ph-footer">
        <div style={{maxWidth:"1180px",margin:"0 auto"}}>
          <div className="ph-footer__grid">
            <div className="ph-footer__brand">
              <a href="/" style={{display:"flex",alignItems:"center",gap:"11px",textDecoration:"none"}}>
                <div style={{width:"36px",height:"36px",borderRadius:"8px",border:"1.5px solid rgba(255,255,255,.18)",display:"flex",alignItems:"flex-end",justifyContent:"center",gap:"3px",padding:"6px 6px 5px",flexShrink:0}}>
                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" aria-hidden="true"><rect x="0" y="10" width="5" height="10" rx="1.5" fill="#528532"/><rect x="8" y="4" width="5" height="16" rx="1.5" fill="#FFFFFF"/><rect x="16" y="0" width="5" height="20" rx="1.5" fill="#D49B28"/></svg>
                </div>
                <div><div style={{fontFamily:"var(--font-heading)",fontSize:".975rem",fontWeight:700,color:"#fff"}}>Medbilling RCM</div><div style={{fontSize:".58rem",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:"rgba(255,255,255,.45)"}}>Revenue Cycle Management</div></div>
              </a>
              <p>Professional billing for CMS-1500 practices, measured at the payer. E/M coding, prior auth, denials, and telehealth across all 50 states.</p>
            </div>
            <div><h4>Services</h4><ul className="ph-footer__links"><li><a href="/services/physician-billing/">Physician Billing</a></li><li><a href="/services/hospital-medical-billing/">Hospital Billing</a></li><li><a href="/services/medical-coding/">Medical Coding</a></li><li><a href="/services/account-receivable-management/">AR Management</a></li><li><a href="/services/medical-credentialing/">Credentialing</a></li><li><a href="/services/coverage-discovery/">Coverage Discovery</a></li></ul></div>
            <div><h4>Specialties</h4><ul className="ph-footer__links"><li><a href="/specialties/">All Specialties</a></li><li><a href="/specialties/cardiology/">Cardiology</a></li><li><a href="/specialties/dermatology/">Dermatology</a></li><li><a href="/specialties/behavioral-health/">Behavioral Health</a></li><li><a href="/specialties/oncology/">Oncology</a></li><li><a href="/specialties/radiology/">Radiology</a></li></ul></div>
            <div><h4>Company</h4><ul className="ph-footer__links"><li><a href="/case-studies/">Case Studies</a></li><li><a href="/#standard">About Us</a></li><li><a href="/request-free-audit/">Free Revenue Assessment</a></li><li><a href="tel:+18885512526">1-888-551-2526</a></li><li><a href="mailto:info@medbillingrcm.com">info@medbillingrcm.com</a></li></ul></div>
          </div>
          <div className="ph-footer__bot">
            <div><p className="ph-footer__copy">© 2026 Medbilling RCM. All rights reserved.</p><p className="ph-footer__nap">8907 Creeks Gate Ct, Richmond, TX 77407 | 7 1st St, Rosedale, NY 11422</p></div>
            <p className="ph-footer__rev">Last reviewed August 2026. Figures from CMS, AMA, Kodiak Solutions, and BLS.</p>
          </div>
        </div>
      </footer>

      <PhysicianScripts />
    </>
  );
}
