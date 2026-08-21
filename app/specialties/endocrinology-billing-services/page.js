import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function EndocrinologyBillingPage() {
  return (
    <main className="sp-page endo-page" id="main">

      {/* ═══ HERO ════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="Endocrine Revenue Infrastructure"
        heading="Endocrinology Billing Services"
        intro="Medbilling RCM provides specialized endocrinology billing services covering diabetes management, thyroid disorder billing, CGM and insulin pump coding, hormone therapy reimbursement, and DSMT billing — ensuring accurate claims and maximum reimbursements for endocrinology practices."
        badge="AAPC Certified · Diabetes & Thyroid Specialists · 50 States"
        stats={[
          { num: "97%",  label: "Clean Claim Rate" },
          { num: "30%",  label: "Reduction in A/R Days" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ CONDITION COVERAGE ══════════════════════════════
          UNIQUE DESIGN: 3-col condition columns — each column
          covers one major endocrine disease area with specific
          CPT/ICD-10 codes shown inline. Resembles a clinical
          coding reference — no other specialty page uses this.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="conditions">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Conditions We Bill For</p>
          <h2 className="reveal">Endocrinology Conditions & Procedures We Cover</h2>
          <p className="endo-cond-sub reveal">Every endocrine condition requires specific CPT, ICD-10, and HCPCS codes. Our AAPC-certified coders are trained across the full spectrum of endocrinology.</p>

          <div className="endo-cond-layout">

            <div className="endo-cond-col reveal">
              <div className="endo-cond-col-header endo-cond-col-header--blue">🩸 Diabetes & Metabolic</div>
              {[
                { code:"E11.9",  label:"Type 2 diabetes without complications" },
                { code:"E10.65", label:"Type 1 diabetes with hyperglycemia" },
                { code:"CPT 95250", label:"CGM sensor placement & training" },
                { code:"CPT 95251", label:"CGM data interpretation" },
                { code:"G0108",  label:"DSMT individual session" },
                { code:"G0109",  label:"DSMT group session" },
                { code:"CPT 99490", label:"Chronic Care Management" },
                { code:"E11.65", label:"T2DM with hyperglycemia" },
              ].map(({ code, label }) => (
                <div className="endo-cond-item reveal" key={code}>
                  <span className="endo-code">{code}</span>
                  <span className="endo-cond-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="endo-cond-col reveal">
              <div className="endo-cond-col-header endo-cond-col-header--green">🦋 Thyroid & Parathyroid</div>
              {[
                { code:"E03.9",  label:"Hypothyroidism, unspecified" },
                { code:"E05.90", label:"Hyperthyroidism without crisis" },
                { code:"CPT 84443", label:"Thyroid-stimulating hormone (TSH)" },
                { code:"CPT 84436", label:"Thyroxine total (T4)" },
                { code:"CPT 76536", label:"Thyroid ultrasound with image doc" },
                { code:"CPT 60100", label:"Thyroid biopsy, percutaneous needle" },
                { code:"E21.3",  label:"Hyperparathyroidism, unspecified" },
                { code:"CPT 84443+59", label:"Repeat TSH, separate encounter" },
              ].map(({ code, label }) => (
                <div className="endo-cond-item reveal" key={code}>
                  <span className="endo-code endo-code--green">{code}</span>
                  <span className="endo-cond-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="endo-cond-col reveal">
              <div className="endo-cond-col-header endo-cond-col-header--gold">💊 Hormones, Adrenal & Other</div>
              {[
                { code:"E27.49", label:"Adrenal insufficiency / Addison's" },
                { code:"E22.0",  label:"Acromegaly (pituitary disorders)" },
                { code:"M81.0",  label:"Osteoporosis without fracture" },
                { code:"CPT 77080", label:"DEXA bone density scan" },
                { code:"CPT 99203", label:"New patient office visit (moderate)" },
                { code:"CPT 99214", label:"Established patient (moderate-high)" },
                { code:"Z79.4",  label:"Long-term insulin use" },
                { code:"CPT 36591", label:"Blood draw, established line" },
              ].map(({ code, label }) => (
                <div className="endo-cond-item reveal" key={code}>
                  <span className="endo-code endo-code--gold">{code}</span>
                  <span className="endo-cond-label">{label}</span>
                </div>
              ))}
            </div>

          </div>

          <div className="endo-cond-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
            <span className="endo-cond-note">Not seeing your condition? We code the full endocrine spectrum — contact us for a custom audit.</span>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES — 6 navy cards ═══════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Endocrinology Billing Challenges</p>
          <h2 className="reveal">Complex Endocrinology Billing — Expertly Handled</h2>
          <p className="endo-caps-sub reveal">Endocrinology has one of the highest denial rates due to complex device billing, frequent policy changes for CGMs and insulin pumps, and multi-payer rules for DSMT programs.</p>

          <div className="endo-caps-grid">
            {[
              { icon:"📊", n:"01", h:"CGM & Insulin Pump Device Billing",     t:"Continuous glucose monitors and insulin pumps require HCPCS Level II codes (K0553, A4239) for devices plus separate professional codes (CPT 95251) for interpretation. We manage PDAC validation, supplier enrollment, and dual-track billing to capture all revenue from device and professional components." },
              { icon:"🎓", n:"02", h:"DSMT Program Billing (G0108/G0109)",    t:"Diabetes Self-Management Training requires an accredited DSMT program, physician referral, and documented sessions. Individual sessions (G0108) and group sessions (G0109) each have specific billing rules. We ensure program accreditation compliance and correct G-code billing for every session type." },
              { icon:"🦋", n:"03", h:"Thyroid & Lab Panel Coding",            t:"TSH (84443), T4 (84436), T3 (84480), thyroid antibody panels, and thyroid ultrasound (76536) must be linked to correct ICD-10 diagnosis codes and medical necessity documentation. We prevent bundling errors and frequency-limitation denials on endocrine lab panels." },
              { icon:"💉", n:"04", h:"Prior Auth — Biologics & Growth Hormone",t:"Specialty medications including growth hormone therapy, GLP-1 agonists, and PCSK9 inhibitors require prior authorization with detailed medical necessity. We manage the full authorization cycle — submission, tracking, peer-to-peer coordination, and appeals — preventing treatment delays and coverage denials." },
              { icon:"📋", n:"05", h:"CCM & RPM Revenue Capture",             t:"Chronic Care Management (CPT 99490/99491) and Remote Patient Monitoring (CPT 99457/99458) are major revenue opportunities for endocrinology practices. We implement billing workflows that correctly capture monthly contact time, ensure required documentation, and bill all eligible patients systematically." },
              { icon:"⚖️", n:"06", h:"Bone Density & Osteoporosis Billing",   t:"DEXA bone density scans (CPT 77080) have specific frequency limitations and coverage criteria by payer. We verify coverage before each scan, apply correct diagnosis codes (M81.0, Z79.899), and track payer-specific frequency limits to prevent denials on follow-up studies." },
            ].map(({ icon, n, h, t }) => (
              <article className="endo-cap-card reveal" key={n}>
                <div className="endo-cap-top">
                  <div className="endo-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="endo-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your Endocrinology Revenue System</h2>
          <p className="endo-process-intro reveal">End-to-end endocrinology billing infrastructure from eligibility verification to CCM/RPM revenue capture — built for the unique complexity of chronic endocrine disease management.</p>

          <div className="endo-steps">
            {[
              { n:"01", h:"Eligibility & Benefit Verification",      t:"Verify endocrinology coverage, CGM/insulin pump benefits, DSMT program eligibility, and CCM qualification before every encounter" },
              { n:"02", h:"Prior Authorization",                      t:"Proactive auth management for CGMs, insulin pumps, specialty biologics, growth hormone therapy, and high-cost diagnostic tests" },
              { n:"03", h:"Endocrinology-Specific Coding",            t:"AAPC-certified coders apply CPT, ICD-10, HCPCS Level II, and G-codes with diabetes, thyroid, and hormonal disorder expertise" },
              { n:"04", h:"Device & Lab Claim Coordination",          t:"Coordinate CGM device claims (HCPCS), professional interpretation (CPT 95251), and lab panel submissions simultaneously" },
              { n:"05", h:"CCM & RPM Monthly Billing",                t:"Systematic monthly billing for all eligible CCM (99490/99491) and RPM (99457/99458) patients with time-tracking documentation" },
              { n:"06", h:"Denial Management & Payment Reconciliation", t:"Root-cause denial analysis, appeals with clinical documentation, and payment posting with underpayment identification" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="endo-step reveal" key={n}>
                <div className="endo-step-aside">
                  <div className="endo-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="endo-step-conn" aria-hidden="true" />}
                </div>
                <div className="endo-step-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="endo-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="endo-process-note">For endocrinology practices &amp; diabetes centers · AAPC-certified coders · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="endo-ba-grid">
            <div className="endo-ba-card endo-ba-card--green reveal">
              <div className="endo-ba-label">Clean Claim Rate</div>
              <div className="endo-ba-num">97<span>%</span></div>
              <div className="endo-ba-desc">first-pass acceptance</div>
            </div>
            <div className="endo-ba-card reveal">
              <div className="endo-ba-label">A/R Days Reduction</div>
              <div className="endo-ba-num">30<span>%↓</span></div>
              <div className="endo-ba-desc">accounts receivable days</div>
            </div>
            <div className="endo-ba-card endo-ba-card--green reveal">
              <div className="endo-ba-label">Collection Rate</div>
              <div className="endo-ba-num">90<span>%</span></div>
              <div className="endo-ba-desc">average collections</div>
            </div>
            <div className="endo-ba-card reveal">
              <div className="endo-ba-label">CCM Revenue Increase</div>
              <div className="endo-ba-num">+40<span>%</span></div>
              <div className="endo-ba-desc">from CCM/RPM capture</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Endocrinology Revenue Infrastructure Partner</h2>
          <p className="endo-why-intro reveal">Our endocrinology billing team understands CGM and insulin pump device coding, DSMT G-code requirements, CCM/RPM revenue capture, and the specific payer rules that govern complex chronic endocrine disease management.</p>

          <div className="endo-why-grid">
            {[
              { icon:"📊", n:"01", h:"CGM & Insulin Pump Coding Experts",     t:"Full HCPCS Level II expertise for CGM devices, supplies, and insulin pumps — PDAC validation, dual-track billing, and professional interpretation coding." },
              { icon:"🎓", n:"02", h:"DSMT Program Compliance",               t:"G0108/G0109 billing with program accreditation tracking, physician referral management, and documentation compliance for all DSMT sessions." },
              { icon:"💰", n:"03", h:"CCM & RPM Revenue Optimization",        t:"Systematic monthly billing for CCM (99490/99491) and RPM (99457/99458) — a revenue stream most endocrinology practices under-capture by 40%+." },
              { icon:"🦋", n:"04", h:"Thyroid & Endocrine Lab Expertise",     t:"TSH, T3, T4, bone density, and endocrine panel coding with frequency limitation tracking and medical necessity documentation for each payer." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Specialists",            t:"Every coder holds AAPC certification with dedicated endocrinology training. Zero CPT, ICD-10, HCPCS coding errors across all endocrine sub-specialties." },
              { icon:"🔐", n:"06", h:"Prior Auth — Biologics & Devices",      t:"End-to-end authorization for CGMs, insulin pumps, growth hormone, GLP-1 agonists, and PCSK9 inhibitors across all commercial and government payers." },
              { icon:"⚖️", n:"07", h:"Regulatory & Payer Compliance",         t:"Alignment with CMS, Medicare LCDs, and commercial payer policies for endocrine diagnostics, device coverage, and medication prior auth requirements." },
              { icon:"🔍", n:"08", h:"Transparent Reporting",                  t:"Condition-level revenue reports, device claim tracking, CCM/RPM performance dashboards, and denial trend analysis by code and payer." },
            ].map(({ icon, n, h, t }) => (
              <div className="endo-why-card reveal" key={n}>
                <div className="endo-why-top">
                  <div className="endo-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="endo-why-num">{n}</span>
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

          <div className="endo-faq-layout">
            <div className="endo-faq-intro reveal">
              <p>Direct answers about CGM billing, DSMT coding, prior authorization, thyroid procedures, and CCM revenue. <Link href="/specialties/" className="endo-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="endo-faq-list">
              {[
                ["How do you handle CGM and insulin pump billing for diabetes patients?",
                 "CGM devices are billed using specific HCPCS codes (K0553, A4239) with proper physician interpretation billed separately under CPT 95251. Insulin pump supplies require accurate HCPCS Level II coding with supporting documentation of medical necessity. We manage the full CGM billing cycle including supplier enrollment, PDAC validation, device codes, and professional interpretation claims to maximize reimbursement from Medicare and commercial payers."],
                ["What documentation is required for DSMT billing?",
                 "Diabetes Self-Management Training (DSMT) requires an accredited DSMT program, a physician referral, and session-specific documentation. Individual sessions are billed under G0108 and group sessions under G0109. We ensure program accreditation requirements are tracked, all sessions are documented with required elements, and claims are submitted with correct G-codes and supporting physician orders."],
                ["How do you manage prior authorizations for high-cost endocrinology treatments?",
                 "We proactively manage prior authorizations for CGMs, insulin pumps, specialty biologics, and growth hormone therapies. Our team submits authorization requests with complete medical necessity documentation, tracks approval timelines, and follows up with payers proactively to prevent delays in patient care and revenue loss from authorization-related denials."],
                ["How do you handle thyroid and parathyroid procedure billing?",
                 "Thyroid and parathyroid procedures require precise CPT coding — thyroid biopsy (CPT 60100), thyroid ultrasound (CPT 76536), TSH assay (CPT 84443), and T4 testing (CPT 84436) each have specific documentation and medical necessity requirements. We verify payer coverage, apply correct modifiers, and ensure lab and imaging claims are linked to supporting diagnoses to prevent coverage-related denials."],
                ["How do you bill for Chronic Care Management (CCM) in endocrinology practices?",
                 "Chronic Care Management (CPT 99490, 99491) is billable for endocrinology patients with two or more chronic conditions including diabetes, thyroid disorders, and metabolic diseases. We implement CCM documentation workflows, track required monthly contact minutes, and bill all eligible patients — a significant revenue stream that most endocrinology practices are not fully capturing."],
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
        heading="Maximize Your Endocrinology Practice Revenue"
        body="Schedule a free endocrinology billing assessment and discover how accurate CGM/device coding, DSMT program billing, and CCM/RPM revenue capture can significantly improve your practice collections."
        ctaLabel="Schedule Revenue Assessment"
        formId="endoAssessmentForm"
        checklist={[
          "CGM & insulin pump HCPCS coding audit (K0553, A4239, CPT 95251)",
          "DSMT G-code compliance review (G0108, G0109)",
          "CCM/RPM revenue gap analysis (CPT 99490, 99457)",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For endocrinology practices & diabetes centers · AAPC-certified specialists · 50 states served"
      />

    </main>
  );
}
