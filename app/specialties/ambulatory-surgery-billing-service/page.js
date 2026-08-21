import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function AmbulatorySurgeryBillingPage() {
  return (
    <main className="sp-page amb-page" id="main">

      {/* ═══ HERO ════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="ASC Revenue Infrastructure"
        heading="Ambulatory Surgery Billing Services"
        intro="Medbilling RCM understands that billing for ambulatory surgery centers is quite different and often more challenging than billing for solo healthcare providers. Our revenue cycle management services for ASCs address all aspects of the billing process, from pre-authorization and eligibility verification to claims submission, payment posting, and denial management."
        badge="AAPC Certified · APC/ASC Experts · NCCI Compliant · 50 States"
        stats={[
          { num: "30%",  label: "Revenue Growth for ASCs" },
          { num: "30%",  label: "Reduction in A/R Days" },
          { num: "98%",  label: "Clean Claim Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ EXPERT ASC RCM ══════════════════════════════════
          UNIQUE DESIGN: left copy + right numbered service rows
          with a progress-style visual bar — shows service completeness.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="services">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Scalable ASC Billing Services</p>
          <h2 className="reveal">Expert Ambulatory Surgery Center Revenue Cycle Management</h2>

          <div className="amb-overview-layout">
            <div className="amb-copy">
              <p className="reveal">Medbilling RCM understands that billing for ambulatory surgery centers is quite different and often more challenging than billing for solo healthcare providers. Medical billing and coding aren't a one-size-fits-all deal, especially for ASCs.</p>
              <p className="reveal">As one of the leading ASC billing companies, we offer scalable services to cater to the unique needs of your practice. Clients have seen their revenue grow by as much as 30% with our ambulatory medical billing services. Request a free consultation today to discuss the unique needs of your practice and get a customized solution.</p>
              <Link href="/request-free-audit/" className="sp-btn sp-btn--primary reveal">Request Free Consultation</Link>
            </div>

            <div className="amb-services-stack">
              {[
                { icon:"✅", label:"Pre-Authorization & Eligibility Verification",  pct:98 },
                { icon:"🔢", label:"APC/CPT Coding & HCPCS Level II",               pct:99 },
                { icon:"🔩", label:"Device & Implant Charge Capture",                pct:97 },
                { icon:"📤", label:"UB-04 & CMS-1500 Claim Submission",             pct:98 },
                { icon:"⚖️", label:"NCCI Edit & Modifier Compliance",                pct:99 },
                { icon:"🚫", label:"Denial Management & Root-Cause Appeals",         pct:96 },
                { icon:"💰", label:"Payment Posting & Contract Reconciliation",      pct:98 },
                { icon:"📊", label:"ASC Quality Reporting (ASCQR) Support",         pct:95 },
              ].map(({ icon, label, pct }) => (
                <div className="amb-svc-row reveal" key={label}>
                  <span className="amb-svc-icon" aria-hidden="true">{icon}</span>
                  <div className="amb-svc-body">
                    <div className="amb-svc-label">{label}</div>
                    <div className="amb-svc-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                      <div className="amb-svc-fill" style={{ "--fill-w": `${pct}%` }} />
                    </div>
                  </div>
                  <span className="amb-svc-pct">{pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES — 6 navy cards ═══════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">ASC Billing Challenges</p>
          <h2 className="reveal">Complex ASC Billing — Expertly Handled</h2>
          <p className="amb-caps-sub reveal">ASC billing requires mastery of APC groupings, device pass-throughs, facility vs. professional fee splits, and payer-specific ASC regulations our specialists manage daily.</p>

          <div className="amb-caps-grid">
            {[
              { icon:"🏥", n:"01", h:"APC Grouping & Facility Fee Billing",     t:"ASC facility fees are reimbursed based on APC (Ambulatory Payment Classification) groupings. We correctly map every procedure to its APC, apply composite APCs where applicable, and ensure facility claims are structured to capture the maximum allowable payment under CMS ASC payment schedules." },
              { icon:"🔩", n:"02", h:"Device & Implant Revenue Capture",        t:"Device and implant billing requires HCPCS Level II codes alongside surgical CPTs. Missed device billing is the most common revenue gap in ASCs. We track every implant, identify pass-through eligibility, and submit complete device documentation to prevent underpayment on high-cost cases." },
              { icon:"⚖️", n:"03", h:"NCCI Edits & ASC-Specific Modifiers",    t:"ASC NCCI edits differ from physician setting edits. Modifiers CG, QX, QY, and QZ apply in the ASC context for supervised anesthesia. We apply correct modifiers for every procedure, preventing bundling denials and ensuring all separately payable services are captured." },
              { icon:"🔐", n:"04", h:"Pre-Authorization & Payer Compliance",    t:"ASC procedures require upfront authorization and strict medical necessity documentation. We manage pre-auth for all scheduled procedures, track approvals, and maintain payer-specific authorization requirements preventing same-day cancellations and post-procedure denials." },
              { icon:"📋", n:"05", h:"Professional vs. Facility Fee Splits",    t:"Surgeons bill CMS-1500 for professional fees while the ASC bills UB-04 for facility fees. We coordinate billing across both tracks ensuring correct place-of-service codes, accurate fee splits, and no duplicate billing between the facility and professional claims." },
              { icon:"📊", n:"06", h:"ASCQR & Compliance Reporting",           t:"CMS requires ASCs participating in Medicare to submit data under the ASC Quality Reporting Program. We support ASCQR data collection and submission, monitor compliance with Medicare Conditions for Coverage, and conduct internal audits to protect your center from survey deficiencies." },
            ].map(({ icon, n, h, t }) => (
              <article className="amb-cap-card reveal" key={n}>
                <div className="amb-cap-glow" aria-hidden="true" />
                <div className="amb-cap-top">
                  <div className="amb-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="amb-cap-num">{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REVENUE CONTROL FRAMEWORK ════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal" id="process">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Revenue Control Framework</p>
          <h2 className="reveal">How We Engineer Your ASC Revenue System</h2>
          <p className="amb-process-intro reveal">End-to-end ASC billing infrastructure from pre-authorization to payment reconciliation built for the unique complexity of facility fee billing and device capture.</p>

          <div className="amb-steps">
            {[
              { n:"01", h:"Pre-Procedure Authorization",        t:"Initiate prior auth for all scheduled procedures, track approvals, and verify patient eligibility and ASC benefits before day of surgery" },
              { n:"02", h:"APC Coding & Device Capture",        t:"AAPC-certified coders map procedures to APC groupings, apply NCCI edits, identify device pass-throughs, and assign HCPCS Level II implant codes" },
              { n:"03", h:"UB-04 Facility Claim Submission",    t:"Clean UB-04 facility claims submitted with correct revenue codes, ASC modifiers (CG, QX, QY, QZ), and supporting clinical documentation" },
              { n:"04", h:"Concurrent Professional Billing",    t:"Coordinate CMS-1500 professional fee billing for surgeons and anesthesiologists alongside facility claims without duplicate billing" },
              { n:"05", h:"Real-Time Denial Management",        t:"Root-cause analysis and same-day appeal preparation for all denied ASC claims with payer-specific appeal strategies" },
              { n:"06", h:"Contract Reconciliation",            t:"Compare every payment against contracted ASC rates — identify underpayments, pursue recovery, and report payer performance by procedure" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="amb-step reveal" key={n}>
                <div className="amb-step-aside">
                  <div className="amb-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="amb-step-conn" aria-hidden="true" />}
                </div>
                <div className="amb-step-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="amb-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="amb-process-note">For ASCs, surgery centers &amp; multi-specialty facilities · AAPC-certified coders · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER — horizontal compare strips ══════
          UNIQUE DESIGN: stacked compare rows showing before/after
          with animated fill bar — different from stat cards.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>

          <div className="amb-compare-grid">
            {[
              { label:"Revenue Growth",         before:"Baseline",  after:"+30%",   color:"green" },
              { label:"A/R Days Reduction",     before:"45+ days",  after:"30 days", color:"green" },
              { label:"Clean Claim Rate",       before:"~72%",      after:"98%",    color:"gold" },
              { label:"Denial Rate",            before:"High",      after:"<5%",    color:"gold" },
            ].map(({ label, before: b, after: a, color }) => (
              <div className={`amb-compare-card amb-compare-card--${color} reveal`} key={label}>
                <div className="amb-compare-label">{label}</div>
                <div className="amb-compare-row">
                  <div className="amb-compare-before">
                    <span className="amb-compare-tag">Before</span>
                    <strong>{b}</strong>
                  </div>
                  <div className="amb-compare-arrow" aria-hidden="true">→</div>
                  <div className="amb-compare-after">
                    <span className="amb-compare-tag amb-compare-tag--after">After</span>
                    <strong>{a}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your ASC Revenue Infrastructure Partner</h2>
          <p className="amb-why-intro reveal">Our ambulatory surgery billing team understands APC groupings, device pass-throughs, facility vs. professional fee coordination, and the specific CMS ASC payment rules that drive results for surgery centers of all sizes and specialties.</p>

          <div className="amb-why-grid">
            {[
              { icon:"🏥", n:"01", h:"APC & Facility Fee Specialists",         t:"Deep expertise in ASC APC groupings, composite APCs, and facility fee structure maximizing every claim under CMS ASC payment schedules." },
              { icon:"🔩", n:"02", h:"Device Pass-Through Revenue Capture",     t:"We identify and bill all device pass-through opportunities and implant HCPCS codes — the most common missed revenue in ASC billing." },
              { icon:"⚖️", n:"03", h:"NCCI & ASC Modifier Mastery",             t:"Correct application of CG, QX, QY, QZ, and all applicable ASC modifiers with NCCI edit compliance on every claim submitted." },
              { icon:"🔐", n:"04", h:"Proactive Prior Authorization",           t:"Zero-lag authorization management across all ASC procedure categories preventing same-day cancellations and retro denials." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Coders",                   t:"Every coding specialist holds AAPC certification with ASC-specific training. Zero CPT, HCPCS, ICD-10 errors on facility claims." },
              { icon:"📋", n:"06", h:"ASCQR & CMS Compliance",                  t:"Full ASCQR reporting support, Conditions for Coverage monitoring, and internal compliance audits protecting your center." },
              { icon:"💰", n:"07", h:"Up to 30% Revenue Growth",               t:"Clients have seen their ASC revenue grow by as much as 30% with our scalable ambulatory billing services." },
              { icon:"🔍", n:"08", h:"Transparent Reporting",                   t:"Production vs. collection reports, payer performance by procedure, underpayment tracking, and custom ASC analytics." },
            ].map(({ icon, n, h, t }) => (
              <div className="amb-why-card reveal" key={n}>
                <div className="amb-why-top">
                  <div className="amb-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="amb-why-num">{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ══════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="faq">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Common Questions</p>
          <h2 className="reveal">Frequently Asked Questions</h2>

          <div className="amb-faq-layout">
            <div className="amb-faq-intro reveal">
              <p>Direct answers about ASC billing, APC coding, device capture, prior authorization, and compliance. <Link href="/specialties/" className="amb-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="amb-faq-list">
              {[
                ["How does ASC billing differ from physician practice billing?",
                 "ASC billing uses facility fee structures under the CMS ASC payment system rather than the physician fee schedule. Claims are submitted on the UB-04 for facility fees while the operating surgeon bills separately on the CMS-1500. ASC payment rates are based on APC (Ambulatory Payment Classification) groupings, and correct coding requires knowledge of device pass-throughs, implant billing, and ASC-specific NCCI edits that differ from the physician setting."],
                ["How do you handle device and implant billing for ASC procedures?",
                 "Device and implant billing in the ASC setting requires separate HCPCS codes for the implanted hardware plus the surgical CPT code. We track device costs, identify pass-through eligibility, apply correct HCPCS Level II codes, and ensure all implant documentation meets payer requirements. Missed device billing is one of the most common sources of revenue loss in ASC environments."],
                ["How do you manage prior authorizations for ASC procedures?",
                 "We initiate pre-authorization requests before scheduled procedures, track approval timelines, document medical necessity, and follow up with payers proactively. Our team maintains payer-specific authorization requirements for all high-volume ASC procedure categories, preventing same-day cancellations and post-procedure authorization denials."],
                ["What compliance standards do your ASC billing services meet?",
                 "Our ASC billing services comply with Medicare Conditions for Coverage (CFCs), HIPAA data security requirements, and CMS ASC Quality Reporting (ASCQR) Program requirements. We monitor CMS and commercial payer policy updates, apply NCCI edits and ASC-specific modifiers (CG, QX, QY, QZ), and conduct internal compliance audits to protect your center from audit risk."],
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

      {/* ═══ CTA ══════════════════════════════════════════════ */}
      <CtaSection
        eyebrow="Revenue Assessment"
        heading="Grow Your ASC Revenue by Up to 30%"
        body="Schedule a free ASC billing assessment and discover how our ambulatory surgery specialists can recover missed device revenue, reduce denials, and maximize your facility fee reimbursements."
        ctaLabel="Request Free Consultation"
        formId="ambAssessmentForm"
        checklist={[
          "APC grouping audit — facility fee accuracy review",
          "Device & implant HCPCS capture gap analysis",
          "NCCI edit & ASC modifier compliance check",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For ASCs & surgery centers · APC/ASC billing specialists · NCCI compliant · All 50 states"
      />

    </main>
  );
}
