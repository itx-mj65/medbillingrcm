import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function PainManagementBillingPage() {
  return (
    <main className="sp-page pain-page" id="main">

      <SpecialtyHero
        eyebrow="Interventional Pain Revenue Infrastructure"
        heading="Pain Management Billing Services"
        intro="Medbilling RCM provides specialized pain management billing services covering interventional procedure coding, fluoroscopic guidance capture (CPT 77003), radiofrequency ablation billing, urine drug testing codes, spinal cord stimulator billing, and prior authorization management — ensuring accurate claims and maximum reimbursements for pain management practices."
        badge="AAPC Certified · Interventional Pain Specialists · LCD Compliant · 50 States"
        stats={[
          { num: "97%",    label: "Clean Claim Rate" },
          { num: "15–22%", label: "Industry Denial Rate (we beat it)" },
          { num: "90%",    label: "Collection Rate" },
          { num: "50",     label: "States Served" },
        ]}
      />

      {/* ═══ PROCEDURE MATRIX ════════════════════════════════
          UNIQUE DESIGN: A "billing matrix" table showing procedure
          types vs billing requirements (fluoroscopy, modifier 25,
          prior auth, UDT). Visual checklist grid — completely new.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="procedures">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Interventional Procedure Billing</p>
          <h2 className="reveal">Pain Management Procedure Billing Matrix</h2>
          <p className="pain-matrix-sub reveal">Pain management billing requires procedure-specific documentation, mandatory fluoroscopy capture, payer-by-payer authorization rules, and drug testing coding complexity. Our specialists know every rule for every procedure.</p>

          <div className="pain-matrix-grid">
            {[
              { icon:"💉", cat:"Epidural Steroid Injections",   codes:"62321, 62323, 64479–64484", fluoro:"✅ CPT 77003 (interlaminar only)", mod25:"✅ Required same-day E/M", auth:"✅ Most payers",   udt:"—" },
              { icon:"🔥", cat:"Radiofrequency Ablation (RFA)", codes:"64633–64636",               fluoro:"✅ Required documentation",          mod25:"✅ Required same-day E/M", auth:"✅ Always required", udt:"—" },
              { icon:"⚡", cat:"Spinal Cord Stimulator (SCS)",  codes:"63650–63688",               fluoro:"✅ Documented in OR notes",          mod25:"✅ Required same-day E/M", auth:"✅ Always required", udt:"✅ Monitoring" },
              { icon:"🧊", cat:"Nerve Blocks",                  codes:"64400–64530",               fluoro:"📋 Ultrasound or fluoroscopy",      mod25:"✅ Required same-day E/M", auth:"📋 Varies by payer", udt:"—" },
              { icon:"🩺", cat:"Facet Joint Injections",        codes:"64490–64495",               fluoro:"✅ Required (imaging guidance)",    mod25:"✅ Required same-day E/M", auth:"📋 Varies",          udt:"—" },
              { icon:"🧪", cat:"Urine Drug Testing (UDT)",      codes:"G0477–G0483, 80320–80377",  fluoro:"—",                                 mod25:"—",                       auth:"—",                  udt:"✅ LCD compliance" },
              { icon:"💊", cat:"Intrathecal Drug Delivery",     codes:"62360–62368",               fluoro:"✅ Required for catheter",          mod25:"✅ Same-day E/M",          auth:"✅ Always required", udt:"✅ Monitoring" },
              { icon:"📊", cat:"E/M — Chronic Pain",            codes:"99202–99215, G3002",        fluoro:"—",                                 mod25:"—",                       auth:"📋 CCM/RPM varies",  udt:"✅ Per LCD" },
            ].map(({ icon, cat, codes, fluoro, mod25, auth, udt }) => (
              <div className="pain-matrix-card reveal" key={cat}>
                <div className="pain-matrix-header">
                  <span className="pain-matrix-icon" aria-hidden="true">{icon}</span>
                  <div>
                    <h3 className="pain-matrix-title">{cat}</h3>
                    <span className="pain-matrix-codes">{codes}</span>
                  </div>
                </div>
                <div className="pain-matrix-rules">
                  <div className="pain-matrix-rule"><span className="pain-rule-label">Fluoroscopy:</span><span>{fluoro}</span></div>
                  <div className="pain-matrix-rule"><span className="pain-rule-label">Modifier 25:</span><span>{mod25}</span></div>
                  <div className="pain-matrix-rule"><span className="pain-rule-label">Prior Auth:</span><span>{auth}</span></div>
                  <div className="pain-matrix-rule"><span className="pain-rule-label">UDT:</span><span>{udt || "—"}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES — 6 navy cap cards ═══════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Pain Management Billing Challenges</p>
          <h2 className="reveal">Complex Pain Management Billing — Expertly Handled</h2>
          <p className="pain-caps-sub reveal">Pain management has one of the highest denial rates — 15–22% industry average for interventional practices vs 5–8% for medical/surgical. Most denials are preventable with specialty-specific expertise.</p>

          <div className="pain-caps-grid">
            {[
              { icon:"📸", n:"01", h:"Fluoroscopy Capture — CPT 77003",           t:"CPT 77003 (fluoroscopic guidance for needle placement) is separately billable when documented during spinal injection procedures — but must not be billed with CPT 62321, 62323, or transforaminal ESI codes (64479–64484) due to NCCI bundling. Vendors who bundle guidance or fail to document imaging leave significant billable revenue uncollected on every guided injection." },
              { icon:"🧪", n:"02", h:"Urine Drug Testing LCD Compliance",         t:"Presumptive testing (G0477–G0483, CPT 80300–80304) vs definitive testing (CPT 80320–80377) must be correctly differentiated. UDT is one of the most frequently audited categories in pain management. We verify LCD compliance for your DME MAC jurisdiction, document medical necessity for testing frequency, and prevent systematic audit exposure from miscoded drug testing claims." },
              { icon:"🔐", n:"03", h:"Prior Auth — RFA & SCS Procedures",         t:"Radiofrequency ablation requires documentation of medial branch blocks with specific percentage pain relief. SCS trials (CPT 63650) and permanent implantation (CPT 63685) require complete medical necessity packages. We manage every authorization with clinical documentation matched to payer-specific criteria — preventing the high-dollar denials that represent thousands per case." },
              { icon:"25",  n:"04", h:"Modifier 25 on Same-Day E/M",              t:"When a significant evaluation precedes an interventional pain procedure on the same date, modifier 25 is required on the E/M code. Without it, payers bundle the visit into the procedure fee. We apply modifier 25 on every qualifying encounter and monitor capture rates per provider monthly — the most common and consistently costly pain management billing omission." },
              { icon:"📋", n:"05", h:"Interlaminar vs. Transforaminal Approach",  t:"Interlaminar and transforaminal epidural injection codes are NOT interchangeable — approach-specific codes must match the documented technique. Fluoroscopic guidance (CPT 77003) is separately billable with interlaminar codes but bundled into some transforaminal codes. We verify approach documentation in every procedure note before code selection." },
              { icon:"⚖️", n:"06", h:"Bilateral Injection Modifier Compliance",   t:"Bilateral injections (modifier -50) vs bilateral with separate line items requires careful payer-specific analysis. RT/LT errors on bilateral pain injections affect every claim of the same type systematically. We apply correct bilateral modifiers and verify laterality documentation on every injection claim." },
            ].map(({ icon, n, h, t }) => (
              <article className="pain-cap-card reveal" key={n}>
                <div className="pain-cap-top">
                  <div className="pain-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="pain-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your Pain Management Revenue System</h2>
          <p className="pain-process-intro reveal">End-to-end pain management billing infrastructure from pre-authorization to fluoroscopy capture — built for the compliance complexity and audit risk of interventional pain billing.</p>

          <div className="pain-steps">
            {[
              { n:"01", h:"Coverage Verification & Prior Auth",       t:"Verify pain procedure benefits, frequency limits, and submit prior authorization 48h before every interventional procedure and RFA" },
              { n:"02", h:"Procedure Note & Approach Review",         t:"Review every procedure note for injection approach (interlaminar vs. transforaminal), fluoroscopy documentation, and laterality before code selection" },
              { n:"03", h:"CPT Coding & Fluoroscopy Capture",         t:"Assign correct injection CPT codes with NCCI-compliant fluoroscopy add-on (CPT 77003) where separately billable — verified against bundling edits" },
              { n:"04", h:"UDT Code Selection & LCD Compliance",      t:"Differentiate presumptive vs. definitive drug testing, apply correct G-codes or CPT codes, and verify LCD compliance for testing frequency" },
              { n:"05", h:"Modifier 25 & Bilateral Compliance",       t:"Apply modifier 25 on all same-day E/M encounters; correct RT/LT/50 bilateral modifiers on all injection claims" },
              { n:"06", h:"Denial Management & Audit Defense",        t:"Root-cause denial analysis, appeals within payer deadlines, and audit defense for UDT, fluoroscopy, and interventional billing" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="pain-step reveal" key={n}>
                <div className="pain-step-aside">
                  <div className="pain-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="pain-step-conn" />}
                </div>
                <div className="pain-step-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pain-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="pain-process-note">For pain management practices &amp; interventional centers · AAPC-certified coders · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="pain-ba-grid">
            {[
              { label:"Clean Claim Rate",         num:"97",   unit:"%",     green:true,  desc:"vs 78–85% without specialty billing" },
              { label:"Denial Rate",              num:"<5",   unit:"%",     green:false, desc:"vs 15–22% industry average" },
              { label:"Fluoroscopy Capture Rate", num:"100",  unit:"%",     green:true,  desc:"of separately billable guided injections" },
              { label:"UDT Audit Exposure",       num:"$0",   unit:"",      green:false, desc:"LCD-compliant testing on every claim" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`pain-ba-card${green ? " pain-ba-card--green" : ""} reveal`} key={label}>
                <div className="pain-ba-label">{label}</div>
                <div className="pain-ba-num">{num}<span>{unit}</span></div>
                <div className="pain-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Pain Management Revenue Infrastructure Partner</h2>
          <p className="pain-why-intro reveal">Our pain management billing team understands fluoroscopy bundling rules, UDT LCD compliance, RFA authorization requirements, and the modifier 25 capture strategies that consistently separate high-performing pain practices from average ones.</p>

          <div className="pain-why-grid">
            {[
              { icon:"📸", n:"01", h:"Fluoroscopy Billing Specialists",          t:"CPT 77003 captured on every qualifying guided injection — NCCI bundling rules applied per injection code to prevent denials on fluoroscopy add-ons." },
              { icon:"🧪", n:"02", h:"UDT LCD Compliance Experts",                t:"Presumptive vs. definitive drug testing correctly coded per MAC LCD requirements. Zero audit exposure from miscoded or over-utilized UDT claims." },
              { icon:"🔥", n:"03", h:"RFA Authorization & Billing",              t:"Complete medial branch block documentation packages for RFA prior authorization, with correct CPT 64633–64636 coding and pain relief criteria tracking." },
              { icon:"⚡", n:"04", h:"SCS Trial & Permanent Billing",             t:"End-to-end billing for SCS trial (63650), permanent implantation (63685), and programming codes (95970–95982) with HCPCS hardware capture." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Interventional Coders",     t:"Every billing specialist holds AAPC certification with dedicated interventional pain training. AMA and payer guidelines applied on every claim." },
              { icon:"25",  n:"06", h:"100% Modifier 25 Capture",                t:"Every same-day E/M + procedure encounter audited for modifier 25 eligibility. Monthly per-provider monitoring prevents systematic omission." },
              { icon:"⚖️", n:"07", h:"Bilateral & Laterality Compliance",        t:"Correct RT/LT/modifier 50 application on bilateral injections — preventing the systematic revenue loss from laterality errors across practice volume." },
              { icon:"🔍", n:"08", h:"Audit Defense & Compliance Reporting",     t:"Proactive compliance monitoring across fluoroscopy, UDT, and interventional billing categories — with audit defense support if needed." },
            ].map(({ icon, n, h, t }) => (
              <div className="pain-why-card reveal" key={n}>
                <div className="pain-why-top">
                  <div className="pain-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="pain-why-num">{n}</span>
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
          <div className="pain-faq-layout">
            <div className="pain-faq-intro reveal">
              <p>Direct answers about fluoroscopy billing, drug testing codes, prior authorization, modifier 25, and RFA billing. <Link href="/specialties/" className="pain-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="pain-faq-list">
              {[
                ["How do you bill fluoroscopic guidance (CPT 77003) for pain management procedures?",
                 "CPT 77003 (fluoroscopic guidance for needle placement) is separately billable when performed and documented during spinal injection procedures. We verify that fluoroscopy is documented in the procedure note with imaging confirmation and bill it separately from the injection code. Critical compliance point: CPT 77003 must not be billed alongside CPT 62321, 62323, or transforaminal ESI codes (64479–64484) due to NCCI bundling edits — bundling errors on fluoroscopy are among the most common pain management billing mistakes."],
                ["How do you code presumptive vs. definitive urine drug testing in pain management?",
                 "Presumptive drug testing (G0477–G0483, CPT 80300–80304) screens for drug classes and is point-of-care or immunoassay based. Definitive testing (CPT 80320–80377) provides exact drug identification and quantification requiring lab analysis. These are among the most frequently audited billing categories in pain management. We apply the correct code set based on the testing method performed, maintain LCD compliance for your DME MAC jurisdiction, and ensure documentation supports the medical necessity for the frequency of testing ordered."],
                ["How do you manage prior authorizations for interventional pain procedures?",
                 "We initiate prior authorization requests before scheduling epidural steroid injections, radiofrequency ablation, spinal cord stimulator trials, and other high-cost interventional procedures. Our team submits clinical documentation including imaging, failed conservative treatment records, and functional assessment scores. We track authorization timelines, follow up proactively with payers, and maintain payer-specific authorization requirements to prevent procedure-day authorization failures."],
                ["How do you apply modifier 25 in pain management billing?",
                 "Modifier 25 is required when a significant, separately identifiable E/M service is performed on the same date as an interventional pain procedure. Without modifier 25, payers bundle the E/M into the procedure fee. We apply modifier 25 on every qualifying same-day E/M encounter, monitor capture rates per provider, and prevent the systematic revenue loss that occurs when modifier 25 is consistently omitted."],
                ["How do you handle radiofrequency ablation (RFA) billing and prior authorization?",
                 "RFA billing requires accurate CPT code selection based on nerve location and technique — facet joint RFA (CPT 64633–64636) vs. peripheral nerve RFA — with correct documentation of medial branch blocks and pain relief criteria. Prior authorization for RFA typically requires documentation of at least two diagnostic medial branch blocks with a specific percentage of pain relief. We manage RFA authorization requests, track pain relief documentation requirements, and ensure all medial branch block billing is compliant."],
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
        heading="Stop Losing Revenue to Pain Management Billing Errors"
        body="Schedule a free pain management billing assessment and discover how fluoroscopy capture, UDT LCD compliance, and modifier 25 optimization can significantly improve your practice collections."
        ctaLabel="Schedule Revenue Assessment"
        formId="painAssessmentForm"
        checklist={[
          "Fluoroscopy capture audit — CPT 77003 on every qualifying injection",
          "UDT LCD compliance review — presumptive vs. definitive coding",
          "Modifier 25 capture rate analysis by provider",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For pain management practices & interventional centers · AAPC-certified coders · All 50 states"
      />
    </main>
  );
}
