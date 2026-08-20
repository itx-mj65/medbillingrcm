import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function CardiologyBillingPage() {
  return (
    <main className="sp-page cardio-page" id="main">

      {/* ── Breadcrumb ────────────────────────────────────── */}
      <nav className="sp-breadcrumb" aria-label="Breadcrumb">
        <div className="sp-wrap">
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/specialties/">Specialties</a></li>
            <li aria-current="page">Cardiology Billing Services</li>
          </ol>
        </div>
      </nav>

      {/* ═══ HERO ════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="Cardiovascular Revenue Infrastructure"
        heading="Cardiology Billing Services"
        intro="Reliable cardiology billing services built on proven cardiovascular RCM expertise. Our AAPC-certified coders are well-versed in ICD-10, CPT, and HCPCS coding and adhere strictly to CMS, MACRA, and AMA guidelines, serving hospitals and physician practices across all 50 states."
        badge="AAPC Certified · MACRA/MIPS · 50 States"
        stats={[
          { num: "97%",  label: "Claim Acceptance Rate" },
          { num: "30%",  label: "Reduction in A/R" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ EXPERT RCM ══════════════════════════════════════
          UNIQUE DESIGN: Two-col layout with a services table on
          the right — 6 specific services with icons. Different from
          other specialty pages which use bullet lists.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="expert-rcm">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Reliable Cardiology Billing</p>
          <h2 className="reveal">Expert Cardiology Revenue Cycle Management</h2>

          <div className="cardio-rcm-layout">
            <div className="cardio-rcm-copy">
              <p className="reveal">Cardiology billing is one of the most complex specialties with hundreds of CPT codes covering diagnostic, interventional, electrophysiology, and device procedures, each requiring precise documentation, correct modifier use, and MACRA/MIPS compliance.</p>
              <p className="reveal">Medbilling RCM conducts comprehensive pre-billing audits to minimize insurance denials, monitors payments against contracted amounts to identify underpayments, and prioritizes AR management to follow up promptly when payers exceed payment cycles.</p>
              <Link href="/request-free-audit/" className="sp-btn sp-btn--primary reveal">Schedule Revenue Assessment</Link>
            </div>

            <div className="cardio-services-table">
              <p className="cardio-services-label reveal">Our Cardiology Billing Services Include</p>
              {[
                { icon:"🔍", h:"Patient Registration & Eligibility Verification",  t:"Real-time verification of coverage and benefits before cardiac procedures" },
                { icon:"🔐", h:"Prior Authorization Management",                    t:"Pre-auth for catheterizations, device implantations, nuclear stress tests, and high-cost interventions" },
                { icon:"🧬", h:"Cardiology-Specific Medical Coding",               t:"AAPC-certified coders for echos, stress tests, caths, PCI, ablations, and device billing" },
                { icon:"⚖️", h:"TC/26 Component Billing",                          t:"Accurate technical vs. professional component splitting for all diagnostic cardiology services" },
                { icon:"📊", h:"Denial Management & AR Follow-Up",                 t:"Pre-billing audits, denial root-cause analysis, and systematic appeals for all cardiac claims" },
                { icon:"📋", h:"MACRA / MIPS Reporting",                           t:"Quality measure tracking and submission to maximize performance scores and avoid penalties" },
              ].map(({ icon, h, t }) => (
                <div className="cardio-svc-row reveal" key={h}>
                  <div className="cardio-svc-icon" aria-hidden="true">{icon}</div>
                  <div className="cardio-svc-body">
                    <strong>{h}</strong>
                    <span>{t}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES — 6 specialty challenge cards ════════
          UNIQUE DESIGN: ivory bg, 3-col navy cards with a
          heartbeat pulse animation on each card's top border.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Cardiology Billing Challenges</p>
          <h2 className="reveal">Complex Cardiology Billing — Expertly Handled</h2>
          <p className="cardio-challenges-sub reveal">Cardiology encompasses a wide range of cardiovascular procedures from routine office visits to complex interventional procedures. Each requires specific coding, compliance, and documentation our specialists handle daily.</p>

          <div className="cardio-caps-grid">
            {[
              { icon:"🫀", n:"01", h:"Echocardiography & Diagnostic Coding",     t:"Precise coding for echocardiograms (93303–93350), stress tests (93015–93018), and Holter monitors (93224–93227) with correct -TC/-26 component splits for technical and professional fees." },
              { icon:"❤️", n:"02", h:"Cardiac Catheterization & PCI Billing",    t:"Expert coding for cardiac catheterizations, percutaneous coronary interventions, and stent placements including bundling rules, add-on codes, and payer-specific modifier requirements." },
              { icon:"🔋", n:"03", h:"Device Implantation Billing",              t:"Pacemakers, ICDs, and CRT devices require separate HCPCS device codes plus implantation CPT codes. We ensure both are billed correctly with full documentation to prevent underpayment." },
              { icon:"📈", n:"04", h:"MACRA / MIPS Compliance",                  t:"We track quality measure performance throughout the year, select optimal reporting measures, and submit MIPS data to maximize scores and avoid Medicare payment adjustments." },
              { icon:"☢️", n:"05", h:"Nuclear Stress Test Billing",              t:"Accurate coding for nuclear stress tests (78451–78454) including perfusion imaging, technical and professional component billing, and prior authorization management across all payers." },
              { icon:"⚡", n:"06", h:"Electrophysiology & Ablation Coding",     t:"Complex EP study and cardiac ablation procedures require precise bundling knowledge. We correctly code ablations alongside mapping codes with payer-specific bundling edits applied." },
            ].map(({ icon, n, h, t }) => (
              <article className="cardio-cap-card reveal" key={n}>
                <div className="cardio-cap-top">
                  <div className="cardio-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="cardio-cap-num">{n}</span>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REVENUE CONTROL FRAMEWORK — 6 steps ════════════ */}
      <section className="sp-sec sp-sec--navy reveal" id="process">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Revenue Control Framework</p>
          <h2 className="reveal">How We Engineer Your Cardiology Revenue System</h2>
          <p className="cardio-process-intro reveal">From pre-authorization to MACRA compliance a complete cardiology revenue infrastructure built for cardiovascular precision.</p>

          <div className="cardio-steps">
            {[
              { n:"01", h:"Eligibility & Pre-Auth",         t:"Verify cardiac coverage and secure authorizations for catheterizations, device implants, and nuclear studies" },
              { n:"02", h:"Cardiology-Specific Coding",     t:"AAPC-certified coders apply precise CPT, ICD-10, HCPCS codes with -TC/-26 and device modifiers" },
              { n:"03", h:"Pre-Billing Audit",              t:"Comprehensive audit of every claim before submission catching bundling errors and documentation gaps" },
              { n:"04", h:"Electronic Claim Submission",    t:"Clean, compliant claims submitted electronically to all major cardiac payers with real-time tracking" },
              { n:"05", h:"AR & Denial Management",         t:"Proactive payer follow-up when payment cycles are exceeded underpayment identification and appeals" },
              { n:"06", h:"MACRA / MIPS Reporting",         t:"Year-round quality measure tracking and submission to maximize MIPS scores and prevent penalties" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="cardio-step reveal" key={n}>
                <div className="cardio-step-aside">
                  <div className="cardio-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="cardio-step-conn" aria-hidden="true" />}
                </div>
                <div className="cardio-step-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cardio-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="cardio-process-note">For cardiology practices, heart centers &amp; hospitals · AAPC-certified coders · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER — transformation grid ════════════
          UNIQUE DESIGN: 2×2 grid showing Standard→Medbilling RCM
          transformation with a before/after split — different from
          other specialty pages single-col stat lists.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>

          <div className="cardio-ba-grid">
            <div className="cardio-ba-card reveal">
              <div className="cardio-ba-label">Revenue Increase</div>
              <div className="cardio-ba-row">
                <div className="cardio-ba-before"><span>Standard</span></div>
                <div className="cardio-ba-arrow">→</div>
                <div className="cardio-ba-after cardio-ba-after--green"><strong>+15–30%</strong></div>
              </div>
            </div>
            <div className="cardio-ba-card cardio-ba-card--accent reveal">
              <div className="cardio-ba-label">Coding Accuracy</div>
              <div className="cardio-ba-row">
                <div className="cardio-ba-before"><span>Variable</span></div>
                <div className="cardio-ba-arrow">→</div>
                <div className="cardio-ba-after"><strong>99.5%</strong></div>
              </div>
            </div>
            <div className="cardio-ba-card reveal">
              <div className="cardio-ba-label">A/R Days Reduction</div>
              <div className="cardio-ba-row">
                <div className="cardio-ba-before"><span>High</span></div>
                <div className="cardio-ba-arrow">→</div>
                <div className="cardio-ba-after cardio-ba-after--green"><strong>30%↓</strong></div>
              </div>
            </div>
            <div className="cardio-ba-card cardio-ba-card--accent reveal">
              <div className="cardio-ba-label">Collection Rate</div>
              <div className="cardio-ba-row">
                <div className="cardio-ba-before"><span>Limited</span></div>
                <div className="cardio-ba-arrow">→</div>
                <div className="cardio-ba-after"><strong>90%+</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING — 5 capability cards (white on ivory) ═
          UNIQUE DESIGN: white bg section, 5 horizontal cards with
          left-accent color bar — different layout from navy grid.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Cardiology Revenue Infrastructure Partner</h2>
          <p className="cardio-why-intro reveal">With extensive cardiovascular RCM experience, our cardiology billing team understands the nuances of TC/26 component billing, device implantation HCPCS codes, MACRA/MIPS reporting, and the specific payer rules that govern cardiac procedure reimbursement.</p>

          <div className="cardio-why-grid">
            {[
              { icon:"🫀", n:"01", h:"Diagnostic Cardiology Expertise",         t:"Complete coding for echocardiograms, stress tests, Holter monitors, event monitors, and nuclear perfusion imaging with correct component billing every time." },
              { icon:"⚙️", n:"02", h:"Interventional & Device Billing",         t:"Expert coding for cardiac catheterizations, PCI, ablations, pacemakers, ICDs, and CRT devices capturing both HCPCS device codes and CPT implantation codes." },
              { icon:"📋", n:"03", h:"CMS & AMA Guideline Adherence",           t:"Continuous alignment with CMS Cardiovascular Fee Schedule updates, AMA cardiology guidelines, and MACRA regulations zero lag on annual policy changes." },
              { icon:"💰", n:"04", h:"Underpayment Monitoring",                 t:"Every payment is monitored against contracted rates. Underpayments are identified and pursued systematically recovering revenue most practices don't realize they're losing." },
              { icon:"📊", n:"05", h:"Custom Cardiology Reporting",             t:"Detailed financial and compliance reports by procedure type, payer, and provider giving your practice full visibility into revenue performance and denial trends." },
            ].map(({ icon, n, h, t }) => (
              <div className="cardio-why-card reveal" key={n}>
                <div className="cardio-why-icon-wrap" aria-hidden="true">{icon}</div>
                <div className="cardio-why-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
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

          <div className="cardio-faq-layout">
            <div className="cardio-faq-intro reveal">
              <p>Direct answers about cardiology billing, TC/26 components, device implantation, MACRA/MIPS, and underpayment recovery.</p>
            </div>
            <div className="cardio-faq-list">
              {[
                ["How do you handle technical vs. professional component billing for cardiology diagnostics?",
                 "We correctly apply modifier -TC for the technical component (equipment, staff) and modifier -26 for the professional component (physician interpretation) for all applicable diagnostic cardiology services including echocardiograms, stress tests, and nuclear imaging. When a cardiologist provides the global service, no modifier is used, and we bill accordingly for maximum reimbursement."],
                ["How do you handle pacemaker and ICD device implantation billing?",
                 "Device implantation billing requires two distinct billing components: the HCPCS device code for the implanted hardware and the CPT implantation procedure code. We ensure both are captured, correctly linked with diagnosis codes, and submitted with appropriate documentation to prevent denials related to medical necessity or device coverage."],
                ["How do you support MACRA/MIPS reporting for cardiology practices?",
                 "We assist with measure selection, performance tracking, and year-end MIPS data submission. Our team monitors your performance category scores throughout the year, flags measures at risk of low performance, and ensures data is submitted accurately to maximize your MIPS final score and avoid payment penalties."],
                ["How do you identify and recover underpayments from payers?",
                 "Every payment posting is compared against contracted rates. When a payer remits below the contracted amount, we systematically identify the discrepancy, document the underpayment, and pursue recovery through formal dispute or appeal processes recovering revenue that most in-house billing teams miss entirely."],
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
        heading="Optimize Your Cardiology Revenue Cycle"
        body="Schedule a free revenue health analysis and discover how our cardiology billing specialists can recover lost revenue, reduce denials, and accelerate your reimbursement cycles."
        ctaLabel="Schedule Revenue Assessment"
        formId="cardioAssessmentForm"
        checklist={[
          "TC/26 component billing audit for all diagnostics",
          "Device implantation HCPCS + CPT capture review",
          "MACRA/MIPS performance gap analysis",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For cardiology practices & heart centers · AAPC-certified coders · All 50 states served"
      />

    </main>
  );
}
