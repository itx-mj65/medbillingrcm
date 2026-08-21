import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function RehabBillingPage() {
  return (
    <main className="sp-page rehab-page" id="main">
      <SpecialtyHero
        eyebrow="Rehabilitation Revenue Infrastructure"
        heading="Rehab Billing Services"
        intro="Medbilling RCM provides specialized rehabilitation billing services covering inpatient rehabilitation facility (IRF) billing, IRF-PAI assessment accuracy, Prospective Payment System (PPS) compliance, functional outcome reporting, outpatient PT/OT/ST therapy coding, and Medicare rehabilitation compliance — ensuring accurate claims and maximum reimbursements for rehabilitation hospitals, IRFs, and outpatient rehab facilities."
        badge="IRF-PAI Specialists · PPS Billing · 60% Rule · All 50 States"
        stats={[
          { num: "97%",  label: "Clean Claim Rate" },
          { num: "30%",  label: "Reduction in A/R Days" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* UNIQUE: Rehab care continuum flow — shows IRF vs SNF vs OP
          as a patient journey with billing rules at each level.
          rehabFlow animation makes the path nodes light up in sequence. */}
      <section className="sp-sec sp-sec--paper reveal" id="settings">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Rehab Settings We Bill</p>
          <h2 className="reveal">Rehabilitation Care Continuum — Every Setting Billed</h2>
          <p className="rehab-cont-sub reveal">Rehabilitation billing varies significantly by care setting — inpatient IRF, skilled nursing, and outpatient each use different payment systems, CPT/HCPCS code sets, and Medicare compliance rules. We specialize in all three.</p>

          <div className="rehab-continuum">
            {[
              {
                setting:"Inpatient IRF",
                icon:"🏥",
                payment:"IRF PPS — CMG-based",
                color:"blue",
                rules:[
                  "IRF-PAI drives Case-Mix Group (CMG) payment",
                  "3 hours therapy/day required (60% Rule)",
                  "13 qualifying conditions for admission",
                  "FIM scores document functional status",
                  "Weekly interdisciplinary team meetings",
                ]
              },
              {
                setting:"Skilled Nursing",
                icon:"🏠",
                payment:"SNF PDPM — 5 components",
                color:"green",
                rules:[
                  "PDPM: PT + OT + SLP + Nursing + NTA",
                  "MDS assessment drives payment components",
                  "Consolidated billing for Part A stays",
                  "Triple Check before Part A claims",
                  "100-day Medicare benefit period",
                ]
              },
              {
                setting:"Outpatient Rehab",
                icon:"🏃",
                payment:"PFS Fee Schedule — 97xxx",
                color:"gold",
                rules:[
                  "8-minute rule for timed CPT codes",
                  "GP (PT), GO (OT), GN (ST) modifiers required",
                  "KX modifier above Medicare threshold",
                  "Functional outcome G-codes every 10 visits",
                  "Medical necessity for each visit required",
                ]
              },
            ].map(({ setting, icon, payment, color, rules }) => (
              <div className={`rehab-cont-card rehab-cont-card--${color} reveal`} key={setting}>
                <div className="rehab-cont-header">
                  <span className="rehab-cont-icon" aria-hidden="true">{icon}</span>
                  <div>
                    <h3>{setting}</h3>
                    <span className="rehab-cont-payment">{payment}</span>
                  </div>
                </div>
                <ul className="rehab-cont-rules">
                  {rules.map(r => <li key={r}>{r}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="rehab-irf-callout reveal">
            <div className="rehab-irf-badge">60% Rule</div>
            <p>IRFs must maintain at least 60% of Medicare patients with qualifying conditions (stroke, spinal cord injury, brain injury, etc.). Failure to maintain compliance risks IRF reclassification to acute care billing rates. We track qualifying condition documentation and help IRFs maintain 60% Rule compliance.</p>
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Request IRF Compliance Audit</Link>
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Rehab Billing Challenges</p>
          <h2 className="reveal">Complex Rehabilitation Billing — Expertly Handled</h2>
          <p className="rehab-caps-sub reveal">Rehabilitation billing combines IRF PPS complexity, PDPM case-mix components, outpatient timed code units, functional outcome reporting, and Medicare compliance — each setting with distinct rules and audit exposure.</p>

          <div className="rehab-caps-grid">
            {[
              { icon:"📊", n:"01", h:"IRF-PAI Accuracy & CMG Optimization",     t:"The IRF-PAI drives Case-Mix Group (CMG) assignment and Medicare payment for IRF stays. Inaccurate FIM scoring or incorrect primary diagnosis coding can significantly reduce payment. We review IRF-PAI data for FIM documentation accuracy, verify primary diagnosis supports admission criteria, and confirm CMG assignment before every Medicare IRF claim." },
              { icon:"⏱️", n:"02", h:"Outpatient 8-Minute Rule & Unit Coding",   t:"Outpatient rehab uses timed CPT codes billed in 15-minute units under the 8-minute rule. GP (PT), GO (OT), and GN (ST) modifiers are required on all Medicare outpatient therapy claims. The KX modifier is required above the Medicare Therapy Threshold. We calculate units from documented session time and apply all required modifiers on every claim." },
              { icon:"📋", n:"03", h:"Functional Outcome G-Code Reporting",       t:"CMS requires functional outcome G-codes and severity modifiers at initial evaluation, every 10 visits, and discharge for outpatient Medicare therapy. Missing G-code reporting generates claim denials. We track 10-visit reporting intervals and ensure all required G-codes and modifiers are applied on every qualifying outpatient rehab claim." },
              { icon:"🏥", n:"04", h:"IRF 60% Rule Documentation",               t:"IRFs must maintain 60% of Medicare patients with qualifying conditions. Primary diagnosis must document one of the 13 qualifying conditions as the reason for IRF admission. We track qualifying condition documentation, verify diagnostic coding supports IRF admission criteria, and help IRFs maintain CMS 60% Rule reporting." },
              { icon:"🔄", n:"05", h:"IRF vs. SNF vs. Outpatient Care Transitions",t:"Patients frequently move between IRF, SNF, and outpatient settings. Each transition has distinct billing rules, Medicare benefit period implications, and coverage gaps. We manage billing across care transitions, ensure correct payer sequencing, and prevent revenue gaps during setting changes." },
              { icon:"📝", n:"06", h:"Physician Oversight & Plan of Care Compliance",t:"Medicare requires a physician or non-physician practitioner to certify a plan of care for all outpatient therapy and to conduct required IRF patient visits. Missing certification or physician oversight documentation generates claim denials. We track plan of care certification timelines and physician visit documentation for all Medicare rehab claims." },
            ].map(({ icon, n, h, t }) => (
              <article className="rehab-cap-card reveal" key={n}>
                <div className="rehab-cap-top">
                  <div className="rehab-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="rehab-cap-num">{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--navy reveal" id="process">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Revenue Control Framework</p>
          <h2 className="reveal">How We Engineer Your Rehab Revenue System</h2>
          <p className="rehab-process-intro reveal">End-to-end rehabilitation billing infrastructure from IRF-PAI accuracy review through outpatient functional outcome reporting and care transition billing management.</p>
          <div className="rehab-steps">
            {[
              { n:"01", h:"IRF-PAI Review & FIM Score Verification",      t:"Review IRF-PAI for FIM documentation accuracy, primary diagnosis qualification, and CMG assignment before Medicare IRF claim submission" },
              { n:"02", h:"Outpatient Timed Code & Modifier Application",  t:"8-minute rule unit calculation with GP/GO/GN discipline modifier and KX threshold application on all Medicare outpatient therapy claims" },
              { n:"03", h:"Functional Outcome G-Code Tracking",            t:"10-visit interval tracking for G-code reporting — initial, interim, and discharge G-codes applied on all qualifying outpatient Medicare therapy claims" },
              { n:"04", h:"60% Rule & Qualifying Condition Documentation", t:"Primary diagnosis review to confirm one of 13 qualifying IRF conditions — track aggregate compliance rate for Medicare reporting" },
              { n:"05", h:"Care Transition & Payer Sequencing",            t:"Manage billing transitions between IRF, SNF, and outpatient settings — correct payer sequencing and benefit period tracking" },
              { n:"06", h:"Denial Management & Appeal Support",            t:"Root-cause rehabilitation denial analysis, IRF-PAI documentation appeals, outpatient medical necessity support, and functional outcome compliance" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="rehab-step reveal" key={n}>
                <div className="rehab-step-aside">
                  <div className="rehab-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="rehab-step-conn" />}
                </div>
                <div className="rehab-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>
          <div className="rehab-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="rehab-process-note">For IRFs, SNFs &amp; outpatient rehab · PPS &amp; PDPM specialists · All 50 states</span>
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="rehab-ba-grid">
            {[
              { label:"Clean Claim Rate",          num:"97",  unit:"%",   green:true,  desc:"first-pass acceptance" },
              { label:"IRF-PAI CMG Accuracy",      num:"100", unit:"%",   green:false, desc:"FIM scores verified before billing" },
              { label:"A/R Days Reduction",        num:"30",  unit:"%↓",  green:true,  desc:"accounts receivable days" },
              { label:"G-Code Compliance",         num:"100", unit:"%",   green:false, desc:"functional outcome reporting complete" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`rehab-ba-card${green ? " rehab-ba-card--green" : ""} reveal`} key={label}>
                <div className="rehab-ba-label">{label}</div>
                <div className="rehab-ba-num">{num}<span>{unit}</span></div>
                <div className="rehab-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Rehab Revenue Infrastructure Partner</h2>
          <p className="rehab-why-intro reveal">Our rehabilitation billing team understands IRF-PAI coding, FIM scoring documentation, the 60% Rule, outpatient timed code units, functional outcome G-codes, and the care continuum billing rules that determine payment for every rehab encounter.</p>
          <div className="rehab-why-grid">
            {[
              { icon:"📊", n:"01", h:"IRF-PAI & CMG Optimization",              t:"FIM score documentation verified, primary diagnosis qualification confirmed, and CMG assignment reviewed before every Medicare IRF claim." },
              { icon:"⏱️", n:"02", h:"Outpatient 8-Minute Rule & Modifiers",     t:"GP/GO/GN discipline modifiers, KX threshold tracking, and correct 8-minute unit calculation on every outpatient Medicare therapy claim." },
              { icon:"📋", n:"03", h:"Functional Outcome G-Code Compliance",     t:"10-visit interval tracking and G-code reporting at every required checkpoint — initial, interim, and discharge for all qualifying patients." },
              { icon:"🏥", n:"04", h:"IRF 60% Rule Compliance Support",          t:"Qualifying condition tracking, diagnostic coding review, and aggregate compliance rate monitoring for CMS 60% Rule requirements." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Rehab Coders",             t:"Every specialist holds AAPC certification with dedicated rehabilitation billing training across IRF, SNF, and outpatient therapy settings." },
              { icon:"🔄", n:"06", h:"Care Transition Billing Management",       t:"Billing handoffs between IRF, SNF, and outpatient managed seamlessly — correct payer sequencing and benefit period tracking at every transition." },
              { icon:"📝", n:"07", h:"Plan of Care & Physician Oversight",       t:"Plan of care certification timelines tracked and physician oversight documentation verified — preventing certification-related claim denials." },
              { icon:"🔍", n:"08", h:"Rehab-Specific Financial Reporting",       t:"Setting-level revenue reports, CMG distribution analysis, outpatient timed code utilization, and functional outcome compliance tracking." },
            ].map(({ icon, n, h, t }) => (
              <div className="rehab-why-card reveal" key={n}>
                <div className="rehab-why-top">
                  <div className="rehab-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="rehab-why-num">{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--paper reveal" id="faq">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Common Questions</p>
          <h2 className="reveal">Frequently Asked Questions</h2>
          <div className="rehab-faq-layout">
            <div className="rehab-faq-intro reveal">
              <p>Direct answers about IRF vs SNF billing, IRF-PAI, functional outcome reporting, the 60% Rule, and outpatient PT/OT/ST modifiers. <Link href="/specialties/" className="rehab-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="rehab-faq-list">
              {[
                ["How does IRF billing differ from SNF billing?","Inpatient Rehabilitation Facility (IRF) billing uses the IRF Prospective Payment System (PPS) based on Case-Mix Groups (CMGs) derived from the IRF-PAI assessment. IRFs require patients to participate in at least 3 hours of therapy per day (the 60% Rule) and have a qualifying condition. SNF billing uses PDPM case-mix components derived from MDS assessment data. IRF payment rates are generally higher than SNF rates, but the qualifying criteria and admission requirements are stricter. We manage both IRF and SNF billing with condition-specific expertise."],
                ["What is the IRF-PAI and how does it affect reimbursement?","The IRF Patient Assessment Instrument (IRF-PAI) is the standardized assessment tool that drives Medicare payment for IRF stays. IRF-PAI data determines the Case-Mix Group (CMG) assignment, which sets the base payment rate for the admission. Inaccurate IRF-PAI coding — particularly functional independence measure (FIM) scores and primary diagnosis — can significantly underpay or create compliance risk. We review IRF-PAI data for accuracy, verify FIM scoring documentation, and confirm primary diagnosis assignment before each Medicare IRF claim."],
                ["How do you handle functional outcome reporting for outpatient rehab?","CMS requires functional outcome reporting for outpatient therapy under Medicare. G-codes and severity modifiers must be reported at initial evaluation, every 10 treatment visits, and at discharge. The G-code reports the functional limitation being treated; the modifier reports the current and projected severity. We implement functional outcome reporting workflows, track the 10-visit reporting intervals, and ensure all required G-codes and modifiers are applied on every qualifying outpatient therapy claim."],
                ["How do you manage the 60% Rule compliance for IRFs?","The 60% Rule requires that at least 60% of an IRF's Medicare patient population have one of 13 qualifying conditions (stroke, spinal cord injury, brain injury, etc.) as their primary reason for the IRF admission. Failure to maintain the 60% threshold can result in loss of IRF status and reclassification to acute care billing rates. We track qualifying condition documentation, verify that primary diagnosis supports IRF admission criteria, and help IRFs maintain compliance with CMS 60% Rule reporting requirements."],
                ["How do you code PT, OT, and ST services in outpatient rehabilitation?","Outpatient PT, OT, and ST services use the same timed CPT code families (97xxx) but require distinct Medicare discipline modifiers: GP for physical therapy, GO for occupational therapy, and GN for speech-language pathology. The KX modifier is required above the Medicare Therapy Threshold. Services must be billed under the supervising therapist's NPI with correct discipline modifier applied. We maintain separate billing rules for each therapy discipline and apply correct modifiers on every Medicare outpatient rehab claim."],
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
        heading="Maximize Your Rehabilitation Practice Revenue"
        body="Schedule a free rehab billing assessment and discover how IRF-PAI accuracy, functional outcome G-code compliance, and outpatient modifier precision can significantly improve your facility's collections."
        ctaLabel="Schedule Revenue Assessment"
        formId="rehabAssessmentForm"
        checklist={[
          "IRF-PAI accuracy review — FIM scoring and CMG assignment",
          "Outpatient modifier compliance — GP/GO/GN and KX",
          "Functional outcome G-code reporting compliance audit",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For IRFs, SNFs & outpatient rehab · PPS & PDPM specialists · All 50 states served"
      />
    </main>
  );
}
