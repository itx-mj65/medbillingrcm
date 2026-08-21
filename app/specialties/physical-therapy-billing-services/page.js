import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function PhysicalTherapyBillingPage() {
  return (
    <main className="sp-page pt-page" id="main">

      <SpecialtyHero
        eyebrow="Physical Therapy Revenue Infrastructure"
        heading="Physical Therapy Billing Services"
        intro="Medbilling RCM provides specialized physical therapy billing services covering timed CPT code unit calculation (97110, 97112, 97116, 97140, 97530), the 8-minute rule, Medicare KX modifier, therapy cap management, and NCCI compliance — ensuring accurate claims and maximum reimbursements for physical therapy practices and outpatient rehab facilities."
        badge="AAPC Certified · 8-Minute Rule Experts · KX Modifier Compliance · 50 States"
        stats={[
          { num: "97%",  label: "Clean Claim Rate" },
          { num: "30%",  label: "Reduction in A/R Days" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ 8-MINUTE RULE VISUAL ════════════════════════════
          UNIQUE DESIGN: An interactive-looking 8-minute rule
          calculator visual — shows timed PT codes with unit
          calculations displayed as time-bars. Completely unique
          across all specialty pages. Billing knowledge as design.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="codes">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Timed CPT Code Mastery</p>
          <h2 className="reveal">PT Timed Codes — Unit Precision on Every Claim</h2>
          <p className="pt-timer-sub reveal">Physical therapy billing is time-based. Every timed CPT code is billed in 15-minute units under the 8-minute rule. Getting the unit count wrong — even by one — means systematic underpayment or compliance risk on every claim.</p>

          <div className="pt-code-grid">
            {[
              { code:"97110", name:"Therapeutic Exercise",          pct:92, units:"Most billed PT code — 42% of all PT billing nationwide", modifier:"GP required (Medicare)", color:"blue" },
              { code:"97140", name:"Manual Therapy Techniques",     pct:78, units:"Modifier 59 when billed with 97110 in separate region/interval", modifier:"59 + GP required", color:"green" },
              { code:"97530", name:"Therapeutic Activities",        pct:65, units:"Functional movement training — distinct from 97110 (impairment-focused)", modifier:"GP required", color:"navy" },
              { code:"97112", name:"Neuromuscular Re-education",    pct:55, units:"Documented neuromuscular deficit required — not interchangeable with 97110", modifier:"GP required", color:"gold" },
              { code:"97116", name:"Gait Training",                 pct:48, units:"Ambulatory training — gait belt, assistive device, parallel bars", modifier:"GP required", color:"blue" },
              { code:"97535", name:"Self-Care / Home Management",   pct:40, units:"ADL instruction, safety training, home program — 15 min units", modifier:"GP required", color:"green" },
            ].map(({ code, name, pct, units, modifier, color }) => (
              <div className={`pt-code-card pt-code-card--${color} reveal`} key={code}>
                <div className="pt-code-top">
                  <span className="pt-code-badge">{code}</span>
                  <h3>{name}</h3>
                </div>
                <div className="pt-timer-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                  <div className="pt-timer-fill" style={{ "--pt-fill": `${pct}%` }} />
                  <span className="pt-timer-label">Usage: {pct}%</span>
                </div>
                <p className="pt-code-note">{units}</p>
                <div className="pt-code-mod">{modifier}</div>
              </div>
            ))}
          </div>

          <div className="pt-rule-callout reveal">
            <div className="pt-rule-badge">⏱ 8-Minute Rule</div>
            <div className="pt-rule-grid">
              {[
                { range:"8–22 min",  units:"1 unit" },
                { range:"23–37 min", units:"2 units" },
                { range:"38–52 min", units:"3 units" },
                { range:"53–67 min", units:"4 units" },
              ].map(({ range, units }) => (
                <div className="pt-rule-row" key={range}>
                  <span className="pt-rule-range">{range}</span>
                  <span className="pt-rule-arrow">→</span>
                  <span className="pt-rule-units">{units}</span>
                </div>
              ))}
            </div>
            <p className="pt-rule-note">For multiple timed services in one session, total time is combined before applying this table.</p>
          </div>

          <div className="pt-code-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES ══════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">PT Billing Challenges</p>
          <h2 className="reveal">Complex Physical Therapy Billing — Expertly Handled</h2>
          <p className="pt-caps-sub reveal">Physical therapy billing has unique complexity — timed code units, the 8-minute rule, Medicare thresholds, discipline modifiers, and the 97110 vs 97530 distinction create systematic error opportunities most billing teams miss.</p>

          <div className="pt-caps-grid">
            {[
              { icon:"⏱️", n:"01", h:"8-Minute Rule Unit Calculation",          t:"Every timed PT CPT code requires correct unit calculation under the 8-minute rule. For multiple timed services in a session, total time is combined and units allocated from the aggregate. Undercounting units means systematic underpayment; overcounting triggers compliance risk. We calculate timed units precisely from documented treatment time on every claim." },
              { icon:"🏷️", n:"02", h:"KX Modifier — Medicare Threshold Compliance", t:"When Medicare claims exceed the Therapy Threshold, the KX modifier must be appended to certify medical necessity for services above the threshold. Without KX, Medicare auto-denies every claim above the line. We track each patient's cumulative billed charges, flag threshold approach, and apply KX on every qualifying claim without exception." },
              { icon:"💊", n:"03", h:"G0283 vs 97014 — Medicare Electrical Stimulation", t:"Medicare does not reimburse CPT 97014 (unattended electrical stimulation) — it uses HCPCS G0283 instead. Billing 97014 on a Medicare claim generates an automatic denial. We maintain separate code mappings for Medicare vs. commercial payers to ensure the correct code is applied on every electrical stimulation claim." },
              { icon:"📋", n:"04", h:"97110 vs 97530 — Correct Code Selection",   t:"97110 (therapeutic exercise) targets impairment-level goals — strength, ROM, endurance. 97530 (therapeutic activities) targets functional performance — sit-to-stand, lifting, ADLs. These two codes are frequently confused. Billing the wrong one triggers denials and, if systematic, audit exposure. We review clinical documentation before selecting between these codes." },
              { icon:"⚕️", n:"05", h:"Discipline Modifiers — GP, GO, GN",         t:"Medicare requires the correct discipline modifier on every therapy claim: GP (physical therapy plan of care), GO (occupational therapy), GN (speech therapy). Missing or incorrect discipline modifiers result in automatic Medicare denials. For multi-discipline practices, we apply the correct modifier based on the supervising therapist's credential and patient plan of care." },
              { icon:"⚖️", n:"06", h:"Modifier 59 — NCCI & Timed Code Bundling",  t:"Modifier 59 is required when 97140 (manual therapy) is billed with 97110 (therapeutic exercise) in a separate anatomical region or separate interval. High utilization of the 59 modifier is a Medicare audit trigger. We apply 59 only when documentation clearly supports separate, distinct services — protecting compliance while capturing legitimate revenue." },
            ].map(({ icon, n, h, t }) => (
              <article className="pt-cap-card reveal" key={n}>
                <div className="pt-cap-top">
                  <div className="pt-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="pt-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your PT Revenue System</h2>
          <p className="pt-process-intro reveal">End-to-end physical therapy billing infrastructure from eligibility verification and therapy threshold tracking through timed code submission and Medicare compliance.</p>

          <div className="pt-steps">
            {[
              { n:"01", h:"Eligibility & Therapy Benefit Verification",  t:"Confirm PT coverage, deductibles, prior auth requirements, and Medicare therapy threshold status before scheduling" },
              { n:"02", h:"Timed Code & Unit Calculation",               t:"Review daily notes for documented treatment time per service — calculate units per the 8-minute rule for combined timed services" },
              { n:"03", h:"Modifier Application — KX, GP, 59, GN, GO",   t:"Apply KX above Medicare threshold, GP on all Medicare PT claims, and 59 on NCCI-bundled services with separate documentation" },
              { n:"04", h:"Medicare G-Code Mapping",                     t:"G0283 for unattended electrical stimulation on Medicare; correct G-code vs. CPT mapping verified per payer before submission" },
              { n:"05", h:"Clean Claim Submission",                      t:"Electronic claims with unit counts verified, modifiers applied, therapy threshold tracked, and medical necessity linked" },
              { n:"06", h:"Denial Management & Threshold Monitoring",    t:"Root-cause denial analysis, KX appeal support, and proactive therapy threshold monitoring to prevent mid-year billing gaps" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="pt-step reveal" key={n}>
                <div className="pt-step-aside">
                  <div className="pt-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="pt-step-conn" />}
                </div>
                <div className="pt-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>

          <div className="pt-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="pt-process-note">For PT clinics &amp; outpatient rehab · AAPC-certified coders · 8-minute rule experts · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="pt-ba-grid">
            {[
              { label:"Clean Claim Rate",        num:"97",  unit:"%",   green:true,  desc:"first-pass acceptance" },
              { label:"Timed Unit Accuracy",     num:"100", unit:"%",   green:false, desc:"8-minute rule applied correctly" },
              { label:"A/R Days Reduction",      num:"30",  unit:"%↓",  green:true,  desc:"accounts receivable days" },
              { label:"KX Threshold Denials",    num:"$0",  unit:"",    green:false, desc:"zero Medicare threshold auto-denials" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`pt-ba-card${green ? " pt-ba-card--green" : ""} reveal`} key={label}>
                <div className="pt-ba-label">{label}</div>
                <div className="pt-ba-num">{num}<span>{unit}</span></div>
                <div className="pt-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your PT Revenue Infrastructure Partner</h2>
          <p className="pt-why-intro reveal">Our physical therapy billing team understands the 8-minute rule, timed code units, KX modifier requirements, Medicare G-code mapping, and the 97110/97530 distinction that determines correct payment for every PT encounter.</p>
          <div className="pt-why-grid">
            {[
              { icon:"⏱️", n:"01", h:"8-Minute Rule Specialists",          t:"Unit calculation from documented session time — correctly applied for single and multiple timed services per session on every claim." },
              { icon:"🏷️", n:"02", h:"KX Modifier & Threshold Tracking",   t:"Per-patient cumulative charge tracking with automatic KX application when Medicare Therapy Threshold is exceeded — zero auto-denials." },
              { icon:"💊", n:"03", h:"Medicare G-Code Expertise",           t:"G0283 vs 97014 correctly mapped per payer. Medicare and commercial payer rule sets maintained separately to prevent cross-payer errors." },
              { icon:"⚕️", n:"04", h:"GP/GO/GN Discipline Compliance",     t:"Correct discipline modifier applied on every Medicare PT, OT, and ST claim based on supervising therapist credential and plan of care." },
              { icon:"🏅", n:"05", h:"AAPC-Certified PT Coders",           t:"Every specialist holds AAPC certification with dedicated physical therapy billing training. CMS and APTA guidelines applied on every claim." },
              { icon:"⚖️", n:"06", h:"NCCI & Modifier 59 Compliance",      t:"97140 + 97110 bundling rules applied correctly — modifier 59 used only when documentation clearly supports separate, distinct services." },
              { icon:"📊", n:"07", h:"Timed Code Performance Reports",      t:"Per-provider utilization by timed CPT code, unit count analysis, modifier 59 frequency tracking, and threshold monitoring dashboards." },
              { icon:"🔍", n:"08", h:"Transparent PT Billing Reporting",    t:"Production vs. collection reports, denial trend analysis by code and payer, and therapy threshold alerts built for PT practice management." },
            ].map(({ icon, n, h, t }) => (
              <div className="pt-why-card reveal" key={n}>
                <div className="pt-why-top">
                  <div className="pt-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="pt-why-num">{n}</span>
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
          <div className="pt-faq-layout">
            <div className="pt-faq-intro reveal">
              <p>Direct answers about the 8-minute rule, KX modifier, 97110 vs 97530, electrical stimulation coding, and GP modifier. <Link href="/specialties/" className="pt-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="pt-faq-list">
              {[
                ["How do you apply the 8-minute rule in physical therapy billing?",
                 "The 8-minute rule determines how many units of a timed CPT code can be billed. For a timed service to be billable, it must be performed for at least 8 minutes. Each unit represents 15 minutes of direct contact. For multiple timed services in a single session, total time is combined and units are calculated based on the aggregate — using standard rounding rules (8-22 minutes = 1 unit, 23-37 minutes = 2 units, etc.). We apply the 8-minute rule correctly on every PT claim to prevent under-billing and over-billing compliance issues."],
                ["When is the KX modifier required in physical therapy billing?",
                 "The KX modifier is required on Medicare claims when billed charges exceed the Medicare Therapy Threshold (formerly known as the therapy cap). By appending KX to the claim, the provider attests that the services are medically necessary and that documentation in the patient's medical record supports the continued need for skilled therapy beyond the threshold amount. Without KX, Medicare will automatically deny any claims above the threshold. We track each patient's cumulative therapy charges and apply KX on every qualifying claim."],
                ["What is the difference between CPT 97110 and CPT 97530?",
                 "CPT 97110 (therapeutic exercise) is used for exercises targeting impairment-level goals — improving strength, endurance, range of motion, and flexibility. CPT 97530 (therapeutic activities) is used for functional movement training where the goal is task performance — activities like sit-to-stand, lifting techniques, and functional mobility drills. Both are timed codes billed in 15-minute units. Billing 97530 when 97110 is the correct code, or vice versa, triggers claim denials and audit risk. We review clinical documentation before selecting between these two commonly confused codes."],
                ["How do you bill electrical stimulation for Medicare patients?",
                 "Medicare does not recognize CPT 97014 (unattended electrical stimulation) for reimbursement — instead Medicare uses HCPCS code G0283. Billing 97014 on a Medicare claim generates an automatic denial. We maintain separate billing rules for Medicare vs. commercial payers and map G0283 on all Medicare electrical stimulation claims while continuing to use 97014 for non-Medicare payers."],
                ["How do you handle therapy modifier GP in physical therapy billing?",
                 "Modifier GP is required on all Medicare claims to indicate that services were performed under a physical therapy plan of care. Without GP, Medicare cannot identify the service as PT and will deny the claim. For practices that also provide occupational therapy (GO modifier) or speech therapy (GN modifier), we ensure the correct discipline modifier is applied to every claim based on the supervising therapist's credential and the patient's plan of care."],
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

      <CtaSection
        eyebrow="Revenue Assessment"
        heading="Maximize Your Physical Therapy Practice Revenue"
        body="Schedule a free PT billing assessment and discover how accurate 8-minute rule application, KX modifier compliance, and timed code unit precision can significantly improve your practice collections."
        ctaLabel="Schedule Revenue Assessment"
        formId="ptAssessmentForm"
        checklist={[
          "8-minute rule unit calculation audit — timed code accuracy review",
          "KX modifier threshold tracking — Medicare compliance check",
          "97110 vs 97530 coding accuracy review",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For PT clinics & outpatient rehab · AAPC-certified coders · 8-minute rule experts · All 50 states"
      />
    </main>
  );
}
