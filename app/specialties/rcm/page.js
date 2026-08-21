import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function RCMPage() {
  return (
    <main className="sp-page rcm-page" id="main">

      <SpecialtyHero
        eyebrow="Full-Service Revenue Cycle Infrastructure"
        heading="Healthcare RCM Services"
        intro="Medbilling RCM provides end-to-end healthcare revenue cycle management covering patient eligibility verification, medical coding (CPT/ICD-10/HCPCS), electronic claim submission, denial management, accounts receivable recovery, payment posting and reconciliation, payer contract negotiation, and provider credentialing — for any specialty, any size practice, across all 50 states."
        badge="AAPC Certified · Full-Cycle RCM · All Specialties · 50 States"
        stats={[
          { num: "97%",  label: "Clean Claim Rate" },
          { num: "30%",  label: "Reduction in A/R Days" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ REVENUE CYCLE RIVER ════════════════════════════
          UNIQUE DESIGN: A horizontal revenue cycle flow diagram
          showing all 8 RCM stages as connected river nodes with
          animated flow particles between them. The "money river"
          metaphor — revenue flows from patient through payment.
          No other specialty page has a full cycle flow diagram.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="cycle">
        <div className="sp-wrap">
          <p className="sp-ew reveal">The Complete Revenue Cycle</p>
          <h2 className="reveal">Every Stage of Your Revenue Cycle — Managed Precisely</h2>
          <p className="rcm-flow-sub reveal">Revenue is lost at every gap in the cycle — eligibility errors, coding inaccuracy, slow submission, missed denials, and aging AR. We close every gap simultaneously so revenue flows without interruption from patient to payment.</p>

          <div className="rcm-cycle-flow">
            {[
              { n:"01", stage:"Eligibility & Benefits",      icon:"✅", color:"blue",  kpi:"Verified before every visit",     desc:"Coverage confirmed, deductibles checked, authorization requirements identified" },
              { n:"02", stage:"Medical Coding",              icon:"📋", color:"green", kpi:"24-hr turnaround",                desc:"CPT/ICD-10/HCPCS assigned by AAPC-certified coders with specialty expertise" },
              { n:"03", stage:"Charge Capture",              icon:"💰", color:"navy",  kpi:"Zero charge leakage",             desc:"All billable services captured from encounter documentation before claim creation" },
              { n:"04", stage:"Claim Submission",            icon:"📤", color:"blue",  kpi:"48-hr submission cycle",          desc:"Electronic claims scrubbed and submitted — rejected claims corrected same day" },
              { n:"05", stage:"Payment Posting",             icon:"📥", color:"green", kpi:"ERA auto-reconciliation",         desc:"ERA processed, underpayments flagged, write-offs documented with approval workflow" },
              { n:"06", stage:"Denial Management",          icon:"⚔️", color:"gold",  kpi:"Root-cause by payer & code",      desc:"Every denial categorized, corrected, and appealed with clinical documentation" },
              { n:"07", stage:"AR Recovery",                icon:"🔄", color:"navy",  kpi:"Weekly follow-up cycle",          desc:"Aged AR worked systematically — no claim left untouched beyond 30 days" },
              { n:"08", stage:"Reporting & Analytics",      icon:"📊", color:"blue",  kpi:"Weekly + monthly dashboards",     desc:"Collections, denial rates, AR aging, and payer performance — full visibility" },
            ].map(({ n, stage, icon, color, kpi, desc }, i, arr) => (
              <div className={`rcm-stage rcm-stage--${color} reveal`} key={n}>
                <div className="rcm-stage-inner">
                  <div className="rcm-stage-num">{n}</div>
                  <div className="rcm-stage-icon" aria-hidden="true">{icon}</div>
                  <h3>{stage}</h3>
                  <div className="rcm-stage-kpi">{kpi}</div>
                  <p>{desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="rcm-stage-arrow" aria-hidden="true">
                    <div className="rcm-flow-particle" />
                    <span>→</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="rcm-cycle-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Request Revenue Cycle Audit</Link>
            <span className="rcm-cycle-note">We identify exactly which stage of your cycle is losing the most revenue — and fix it.</span>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">RCM Service Components</p>
          <h2 className="reveal">Full-Cycle RCM — Every Component Delivered</h2>
          <p className="rcm-caps-sub reveal">Complete revenue cycle management means no gaps between stages — eligibility, coding, submission, posting, denial management, and AR recovery all operating as a single coordinated system.</p>

          <div className="rcm-caps-grid">
            {[
              { icon:"✅", n:"01", h:"Eligibility & Prior Authorization",      t:"Real-time eligibility verification before every appointment. Prior authorization submission and tracking for all specialty procedures. Coverage gaps identified and patients notified before services are rendered — preventing post-service denials from eligibility failures." },
              { icon:"📋", n:"02", h:"Medical Coding — All Specialties",        t:"AAPC-certified coders with specialty-specific expertise across all 30+ clinical specialties. CPT, ICD-10, and HCPCS codes assigned from clinical documentation within 24 hours. Coding audits performed quarterly to maintain compliance and accuracy standards." },
              { icon:"📤", n:"03", h:"Electronic Claim Submission & Scrubbing", t:"Claims submitted electronically within 48 hours of charge capture. Pre-submission scrubbing verifies correct modifiers, diagnosis-to-procedure linking, and payer-specific rules before every claim leaves the system. Rejected claims corrected and resubmitted same day." },
              { icon:"📥", n:"04", h:"Payment Posting & ERA Reconciliation",    t:"Electronic Remittance Advice (ERA) processed daily with automatic underpayment flagging. Manual EOBs posted accurately with contractual adjustment documentation. Unresolved balances escalated for follow-up with clear documentation trail." },
              { icon:"⚔️", n:"05", h:"Denial Management & Appeals",             t:"Every denial categorized by root cause — coding error, authorization, eligibility, medical necessity, or timely filing. Appeals submitted with clinical documentation within payer deadlines. Denial trend analysis identifies and eliminates systematic denial patterns by payer and code." },
              { icon:"🔄", n:"06", h:"Aged AR Recovery & Follow-Up",            t:"Weekly AR aging review with documented action plans for every account over 30 days. Proactive payer follow-up before timely filing deadlines. Secondary and tertiary billing managed automatically. Patient balance statements issued with payment plan options." },
            ].map(({ icon, n, h, t }) => (
              <article className="rcm-cap-card reveal" key={n}>
                <div className="rcm-cap-top">
                  <div className="rcm-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="rcm-cap-num">{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ══════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal" id="process">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Revenue Control Framework</p>
          <h2 className="reveal">How We Engineer Your Revenue Cycle System</h2>
          <p className="rcm-process-intro reveal">End-to-end RCM infrastructure designed as a system — not a collection of independent billing tasks — so revenue moves without gaps from patient encounter to final payment.</p>
          <div className="rcm-steps">
            {[
              { n:"01", h:"Practice Assessment & RCM Audit",            t:"Complete review of current billing workflows, denial patterns, AR aging, collection rates, and coding accuracy — identifying where the most revenue is being lost before onboarding" },
              { n:"02", h:"EHR Integration & Workflow Setup",           t:"Integrate with your EHR (Epic, Athena, eClinicalWorks, NextGen, and others), configure charge capture workflows, and establish coding assignment and review protocols" },
              { n:"03", h:"Provider Credentialing & Payer Enrollment",  t:"Individual and organizational NPI enrollment across Medicare, Medicaid, and all commercial payers — tracked through approval with no billing gaps during the credentialing window" },
              { n:"04", h:"Daily Coding & Claim Submission",            t:"AAPC-certified coding from daily encounter documentation, pre-submission scrubbing, and electronic claim submission within 48 hours of charge capture" },
              { n:"05", h:"Denial Management & AR Recovery",           t:"Weekly denial management cycle with root-cause categorization, appeal submission, and AR aging review — every account worked before timely filing or statute deadlines" },
              { n:"06", h:"Performance Reporting & Contract Optimization", t:"Weekly and monthly revenue cycle performance dashboards, quarterly coding audits, and payer contract rate analysis with renegotiation support" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="rcm-step reveal" key={n}>
                <div className="rcm-step-aside">
                  <div className="rcm-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="rcm-step-conn" />}
                </div>
                <div className="rcm-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>
          <div className="rcm-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="rcm-process-note">For any specialty · Any practice size · All 50 states · AAPC-certified team</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="rcm-ba-grid">
            {[
              { label:"Clean Claim Rate",      num:"97",  unit:"%",   green:true,  desc:"vs 78–85% industry average" },
              { label:"A/R Days Reduction",    num:"30",  unit:"%↓",  green:false, desc:"accounts receivable days" },
              { label:"Collection Rate",       num:"90",  unit:"%",   green:true,  desc:"average across all specialties" },
              { label:"Denial Appeal Rate",    num:"95",  unit:"%",   green:false, desc:"favorable appeal outcomes" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`rcm-ba-card${green ? " rcm-ba-card--green" : ""} reveal`} key={label}>
                <div className="rcm-ba-label">{label}</div>
                <div className="rcm-ba-num">{num}<span>{unit}</span></div>
                <div className="rcm-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Healthcare Revenue Cycle Infrastructure Partner</h2>
          <p className="rcm-why-intro reveal">Our RCM team manages the complete revenue cycle for practices across 30+ specialties — with specialty-specific coding expertise, systematic denial management, and transparent reporting that shows exactly where your revenue is and where it is going.</p>
          <div className="rcm-why-grid">
            {[
              { icon:"✅", n:"01", h:"Pre-Visit Eligibility Verification",     t:"Real-time eligibility confirmed before every appointment — authorization requirements identified and submitted proactively." },
              { icon:"📋", n:"02", h:"AAPC-Certified Multi-Specialty Coding",  t:"30+ specialties coded by certified specialists with dedicated training in each specialty's CPT/ICD-10/HCPCS code families." },
              { icon:"📤", n:"03", h:"48-Hour Claim Submission Cycle",         t:"Electronic claims submitted within 48 hours of charge capture — pre-scrubbed and payer-rule-verified before every submission." },
              { icon:"📥", n:"04", h:"ERA Processing & Underpayment Detection", t:"Daily ERA reconciliation with automatic flagging of contractual underpayments — every payer payment verified against contracted rates." },
              { icon:"⚔️", n:"05", h:"Systematic Denial Management",           t:"Root-cause categorization and appeal submission on every denial — denial patterns identified and eliminated by payer and code." },
              { icon:"🔄", n:"06", h:"Proactive AR Recovery",                  t:"Weekly AR review with documented action plans — no claim left unworked beyond 30 days regardless of payer or balance amount." },
              { icon:"📝", n:"07", h:"Provider Credentialing Management",      t:"Complete NPI enrollment lifecycle across Medicare, Medicaid, and all commercial payers — zero billing gaps during credentialing." },
              { icon:"📊", n:"08", h:"Transparent RCM Performance Reporting",  t:"Weekly and monthly dashboards showing charges, collections, denial rates, AR aging, and payer performance — full cycle visibility." },
            ].map(({ icon, n, h, t }) => (
              <div className="rcm-why-card reveal" key={n}>
                <div className="rcm-why-top">
                  <div className="rcm-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="rcm-why-num">{n}</span>
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
          <div className="rcm-faq-layout">
            <div className="rcm-faq-intro reveal">
              <p>Direct answers about our RCM services, denial management, claim submission speed, reporting, and payer contract negotiation. <Link href="/specialties/" className="rcm-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="rcm-faq-list">
              {[
                ["What does end-to-end RCM include?","End-to-end RCM covers every step from patient registration through final payment: eligibility and benefit verification before the appointment, accurate CPT/ICD-10/HCPCS coding after the encounter, electronic claim submission within 24-48 hours, payment posting and ERA reconciliation, systematic denial management with root-cause analysis and appeal submission, aged AR recovery, and reporting that shows performance at every stage of the cycle."],
                ["How do you handle denial management in your RCM service?","Every denial is categorized by root cause — coding error, missing authorization, eligibility issue, timely filing, or medical necessity. We resolve each category with the appropriate response: coding correction and resubmission, appeal with clinical documentation, authorization retroactive submission, or corrected claim. We track denial rates by payer, code, and reason to identify and eliminate patterns that cause systematic revenue loss."],
                ["How quickly do you submit claims after service delivery?","We target electronic claim submission within 24-48 hours of charge capture or encounter documentation. Faster submission means faster payment and less exposure to timely filing denials. For high-volume practices, we implement daily submission cycles. For practices with complex coding requirements, claims are submitted within the same business day of coding completion and pre-submission scrubbing."],
                ["What reporting do you provide for RCM performance?","We provide weekly and monthly reports covering: gross charges and net collections by provider and payer, days in accounts receivable by aging bucket (0-30, 31-60, 61-90, 91-120, 120+), denial rate by reason and payer, first-pass acceptance rate, clean claim rate, and collection rate vs. expected payment. Practices receive dashboards that show where revenue is being collected and where it is being lost."],
                ["How do you manage payer contract negotiations?","Payer contract negotiation starts with benchmark data — comparing your current contracted rates against Medicare fee schedule percentages, regional market rates, and payer-specific fee schedules. We identify underpaid codes, prepare rate increase proposals with utilization data, and manage the negotiation process with commercial payers. Even modest rate increases across high-volume CPT codes represent significant annual revenue improvements for most practices."],
              ].map(([q,a]) => (
                <details className="reveal" key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Revenue Assessment"
        heading="Engineer Your Healthcare Revenue Cycle"
        body="Schedule a free revenue cycle assessment and discover exactly which stage of your cycle is losing the most revenue — with a clear plan to fix it."
        ctaLabel="Schedule Revenue Assessment"
        formId="rcmAssessmentForm"
        checklist={[
          "Full revenue cycle audit — all 8 stages assessed",
          "Denial pattern analysis — by payer, code, and reason",
          "AR aging review — accounts beyond 60 days identified",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For any specialty · Any practice size · All 50 states · AAPC-certified team"
      />
    </main>
  );
}
