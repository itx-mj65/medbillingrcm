import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function OncologyBillingPage() {
  return (
    <main className="sp-page onco-page" id="main">

      <SpecialtyHero
        eyebrow="Oncology Revenue Infrastructure"
        heading="HIPAA-Compliant Oncology Billing Services"
        intro="Medbilling RCM provides HIPAA-compliant oncology billing services covering chemotherapy J-code accuracy, drug wastage billing (modifier JW), buy-and-bill reimbursement at ASP+6%, infusion administration CPT coding (96413–96417), prior authorization management, and radiation oncology billing — ensuring accurate claims and maximum reimbursements for oncology practices and cancer centers."
        badge="AAPC Certified · J-Code Specialists · HIPAA Compliant · 50 States"
        stats={[
          { num: "98%",  label: "Clean Claim Rate" },
          { num: "30%",  label: "Faster Reimbursements" },
          { num: "94%",  label: "Denial Appeal Success" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ INFUSION SEQUENCE VISUAL ════════════════════════
          UNIQUE DESIGN: Chemotherapy infusion sequencing diagram
          showing the exact CPT hierarchy (96413 → 96415 → 96417)
          with animated infusion drip effect — oncoInfuse animation.
          No other specialty page has an infusion flow diagram.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="infusion">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Infusion Sequencing Expertise</p>
          <h2 className="reveal">Chemotherapy Infusion Coding — Sequence Matters</h2>
          <p className="onco-inf-sub reveal">Chemotherapy infusion coding is sequence-dependent and time-based. The order drugs are administered, how long each infusion runs, and whether infusions are concurrent or sequential determines which CPT codes are billed. A single coding error affects the entire encounter.</p>

          <div className="onco-inf-sequence">
            {[
              { cpt:"96413", label:"Initial Chemo Infusion", time:"First hour", desc:"First chemotherapy drug — initial infusion CPT, regardless of drug cost or volume", dot:"🔵" },
              { cpt:"96415", label:"Add'l Sequential Hour",  time:"+1 hr each",  desc:"Each additional hour of the same initial drug — billed per hour after the first", dot:"🔵" },
              { cpt:"96417", label:"Sequential Infusion",    time:"Next drug",   desc:"Second chemotherapy drug administered after the first — sequential, not concurrent", dot:"🟢" },
              { cpt:"96409", label:"Push Injection",          time:"≤15 min",    desc:"Chemotherapy administered by direct IV push — 15 minutes or less, single code", dot:"🟡" },
              { cpt:"96411", label:"Add'l Push Injection",    time:"Each add'l", desc:"Each additional push injection of a different chemotherapy drug at the same encounter", dot:"🟡" },
            ].map(({ cpt, label, time, desc, dot }, i) => (
              <div className="onco-inf-step reveal" key={cpt}>
                <div className="onco-inf-connector" aria-hidden="true">
                  <div className="onco-inf-dot">{dot}</div>
                  {i < 4 && <div className="onco-inf-line" />}
                </div>
                <div className="onco-inf-card">
                  <div className="onco-inf-top">
                    <span className="onco-inf-cpt">{cpt}</span>
                    <span className="onco-inf-time">{time}</span>
                  </div>
                  <h3>{label}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="onco-jw-callout reveal">
            <div className="onco-jw-badge">Modifier JW — Drug Wastage</div>
            <p>Single-use vials often contain more drug than the dose administered. The unused portion (wastage) is separately billable using modifier JW on the J-code line — where payer rules allow. Missed JW billing represents thousands in annual revenue loss for busy oncology practices. We capture JW on every eligible claim.</p>
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Request J-Code Audit</Link>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES ══════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Oncology Billing Challenges</p>
          <h2 className="reveal">Complex Oncology Billing — Expertly Handled</h2>
          <p className="onco-caps-sub reveal">Oncology billing involves buy-and-bill drug procurement, chemotherapy sequencing rules, J-code precision on drugs worth thousands per dose, HIPAA-protected patient data, and NCCN compendia requirements for off-label prior authorization.</p>

          <div className="onco-caps-grid">
            {[
              { icon:"💊", n:"01", h:"J-Code Accuracy — High-Cost Drug Claims",   t:"Every chemotherapy claim requires the exact HCPCS J-code matched to drug name, dose, and administration route. J-code errors on oncology drugs worth $10,000–$150,000 per dose create immediate cash flow crises. We verify every J-code against drug administration records, calculate units from administered dose, and track ASP+6% reimbursement rates for Medicare buy-and-bill." },
              { icon:"💉", n:"02", h:"Infusion Sequencing — CPT 96413–96417",     t:"Chemotherapy infusion coding is sequence-dependent. Initial infusion (96413), additional hours (96415), sequential drug (96417), and concurrent infusion coding each have distinct rules. Incorrect sequencing results in bundling denials. We review infusion start/stop times and drug sequencing in every administration record before code assignment." },
              { icon:"🗑️", n:"03", h:"Drug Wastage Billing — Modifier JW",        t:"Unused drug from single-use vials is separately billable with modifier JW where payer rules allow. Most practices systematically miss JW billing — losing significant annual revenue on expensive drugs. We identify every eligible JW opportunity, document vial size vs. dose administered, and bill wastage on every qualifying claim." },
              { icon:"🔐", n:"04", h:"Prior Authorization — Off-Label NCCN Support", t:"Off-label chemotherapy use requires compendia support (NCCN, Micromedex, Clinical Pharmacology) cited in the prior authorization request. Without the correct compendia citation, the authorization and claim are denied for medical necessity. We submit complete oncology authorization packages with NCCN-cited indications for every off-label drug request." },
              { icon:"🛡️", n:"05", h:"HIPAA Compliance — Oncology Data Security",  t:"Oncology patient data includes highly sensitive diagnosis, genetic, and treatment information. We operate under a signed Business Associate Agreement (BAA), encrypted data transmission, role-based access controls, and audit trail maintenance — meeting all CMS and OCR HIPAA requirements for oncology billing data handling." },
              { icon:"☢️", n:"06", h:"Radiation Oncology Billing",                  t:"Radiation therapy billing requires planning CPT codes (77261–77263), simulation (77280–77295), treatment delivery (77401–77432), and weekly management (77427). Each phase has distinct documentation requirements. We manage the complete radiation oncology billing cycle from treatment planning through final delivery and physician management." },
            ].map(({ icon, n, h, t }) => (
              <article className="onco-cap-card reveal" key={n}>
                <div className="onco-cap-top">
                  <div className="onco-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="onco-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your Oncology Revenue System</h2>
          <p className="onco-process-intro reveal">End-to-end HIPAA-compliant oncology billing infrastructure — from drug procurement J-code to buy-and-bill reimbursement, with zero tolerance for J-code errors on high-cost drug claims.</p>

          <div className="onco-steps">
            {[
              { n:"01", h:"Prior Authorization — NCCN Documentation",   t:"Submit complete oncology authorization packages with diagnosis staging, NCCN compendia citations for off-label drugs, and treatment protocol documentation" },
              { n:"02", h:"J-Code Verification & Drug Unit Calculation", t:"Match J-code to drug administered, calculate units from dose administered (not ordered), and identify JW drug wastage opportunities before claim submission" },
              { n:"03", h:"Infusion Sequencing Coding",                  t:"Review administration records for drug sequence, start/stop times, and concurrent vs. sequential infusion — applying CPT 96413/96415/96417/96409/96411 correctly" },
              { n:"04", h:"Supportive Care Capture",                     t:"Bill hydration infusions, antiemetics, growth factor injections, and port access separately — each has its own CPT/HCPCS code alongside chemotherapy" },
              { n:"05", h:"HIPAA-Compliant Claim Submission",           t:"Encrypted electronic claim submission under BAA — all oncology patient data handled under CMS and OCR HIPAA standards with full audit trail" },
              { n:"06", h:"Buy-and-Bill Reconciliation & Denial Appeals", t:"Compare every payment against ASP+6% rates, identify underpayments, and manage appeals with NCCN citation support for denied off-label claims" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="onco-step reveal" key={n}>
                <div className="onco-step-aside">
                  <div className="onco-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="onco-step-conn" />}
                </div>
                <div className="onco-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>

          <div className="onco-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="onco-process-note">For oncology practices &amp; cancer centers · J-code specialists · HIPAA-compliant · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="onco-ba-grid">
            {[
              { label:"Clean Claim Rate",      num:"98",  unit:"%",   green:true,  desc:"first-pass acceptance" },
              { label:"Denial Appeal Success",  num:"94",  unit:"%",   green:false, desc:"favorable appeal outcomes" },
              { label:"Reimbursement Speed",   num:"30",  unit:"%↑",  green:true,  desc:"faster buy-and-bill payments" },
              { label:"Drug Wastage Captured", num:"100", unit:"%",   green:false, desc:"JW modifier on all eligible claims" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`onco-ba-card${green ? " onco-ba-card--green" : ""} reveal`} key={label}>
                <div className="onco-ba-label">{label}</div>
                <div className="onco-ba-num">{num}<span>{unit}</span></div>
                <div className="onco-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Oncology Revenue Infrastructure Partner</h2>
          <p className="onco-why-intro reveal">Our oncology billing team understands J-code precision, chemotherapy sequencing rules, buy-and-bill reimbursement mechanics, drug wastage capture, NCCN compendia requirements for off-label authorization, and the HIPAA compliance standards that protect your oncology patient data.</p>
          <div className="onco-why-grid">
            {[
              { icon:"💊", n:"01", h:"J-Code Precision on Every Claim",          t:"Drug-matched HCPCS J-codes, dose-based unit calculation, and JW wastage capture on every chemotherapy claim — zero J-code errors on high-cost drugs." },
              { icon:"💉", n:"02", h:"Infusion Sequencing Specialists",           t:"CPT 96413/96415/96417 correctly sequenced per administration record — initial, sequential, and concurrent infusion rules applied on every encounter." },
              { icon:"🗑️", n:"03", h:"Drug Wastage JW Capture",                  t:"Every eligible single-use vial wastage identified and billed with modifier JW — recovering annual revenue most practices systematically miss." },
              { icon:"🔐", n:"04", h:"NCCN Off-Label Authorization Experts",     t:"Complete authorization packages with NCCN compendia citations for all off-label drug requests — preventing authorization denials for off-protocol chemotherapy." },
              { icon:"🛡️", n:"05", h:"Full HIPAA Compliance — BAA Signed",       t:"Encrypted data handling, BAA executed before any data sharing, audit trails maintained — CMS and OCR-compliant oncology billing at every step." },
              { icon:"🏅", n:"06", h:"AAPC-Certified Oncology Coders",           t:"Every specialist holds AAPC certification with oncology-specific training. CPT, ICD-10, and HCPCS J-code guidelines applied on every claim." },
              { icon:"☢️", n:"07", h:"Radiation Oncology Billing",               t:"Full radiation oncology cycle: treatment planning (77261-77263), simulation, delivery, and weekly physician management (77427)." },
              { icon:"🔍", n:"08", h:"ASP+6% Payment Reconciliation",            t:"Every Medicare buy-and-bill payment compared against current ASP rates — underpayments identified and appealed with drug pricing documentation." },
            ].map(({ icon, n, h, t }) => (
              <div className="onco-why-card reveal" key={n}>
                <div className="onco-why-top">
                  <div className="onco-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="onco-why-num">{n}</span>
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
          <div className="onco-faq-layout">
            <div className="onco-faq-intro reveal">
              <p>Direct answers about J-code accuracy, buy-and-bill, infusion sequencing, prior authorization, and HIPAA compliance. <Link href="/specialties/" className="onco-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="onco-faq-list">
              {[
                ["How do you ensure J-code accuracy for chemotherapy billing?",
                 "Every chemotherapy claim requires the exact HCPCS J-code matched to the drug name, dose, and administration route documented in the clinical record. J-code errors on high-cost oncology drugs can mean denials of $10,000–$150,000 per claim. We verify J-code selection against the drug administered, calculate units based on the dose administered (not the dose ordered), and apply modifier JW for drug wastage from single-use vials where payer rules allow."],
                ["What is buy-and-bill reimbursement and how do you manage it?",
                 "Under the buy-and-bill model, oncology practices purchase chemotherapy drugs and seek reimbursement from payers after administration. Medicare reimburses at Average Sales Price (ASP) plus 6% for Part B drugs. Accurate J-code selection, correct unit calculation, timely claim submission, and effective denial management are critical — a denied claim for a $18,000-per-dose drug creates significant cash flow risk. We manage the complete buy-and-bill cycle from J-code to payment."],
                ["How do you code chemotherapy infusion sequencing?",
                 "Chemotherapy infusion coding is sequence-dependent. The initial drug infusion is billed under CPT 96413 (first hour). Each additional hour of the same drug uses 96415. A second chemotherapy drug administered sequentially uses 96417. Concurrent infusions (two drugs running simultaneously) are coded differently from sequential infusions. We review infusion records, document start/stop times, and apply the correct initial/sequential/concurrent infusion hierarchy on every chemotherapy encounter."],
                ["How do you handle prior authorizations for oncology treatments?",
                 "Oncology prior authorizations require diagnosis codes, staging information, treatment protocol documentation, NCCN guideline citations for off-label drug use, and in many cases pathology reports and genomic testing results. We manage the complete oncology authorization workflow — submission, tracking, peer-to-peer coordination, and appeals — for all chemotherapy drugs, biologics, immunotherapy agents, and targeted therapy medications."],
                ["Is your oncology billing fully HIPAA-compliant?",
                 "Yes. All our oncology billing services operate under strict HIPAA compliance protocols including encrypted data transmission, secure EHR integration, Business Associate Agreement (BAA) execution before any data sharing, role-based access controls, and audit trail maintenance. Our team undergoes annual HIPAA training and we conduct regular compliance audits to ensure patient data protection meets all CMS and OCR requirements."],
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
        heading="Maximize Your Oncology Practice Revenue"
        body="Schedule a free oncology billing assessment and discover how J-code accuracy, drug wastage capture, infusion sequencing compliance, and NCCN off-label authorization can significantly improve your practice collections."
        ctaLabel="Schedule Revenue Assessment"
        formId="oncoAssessmentForm"
        checklist={[
          "J-code accuracy audit — drug name, dose, unit calculation review",
          "Modifier JW drug wastage capture gap analysis",
          "Infusion sequencing compliance — 96413/96415/96417 accuracy",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For oncology practices & cancer centers · J-code specialists · HIPAA-compliant · All 50 states"
      />
    </main>
  );
}
