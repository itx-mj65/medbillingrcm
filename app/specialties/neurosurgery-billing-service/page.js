import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function NeurosurgeryBillingPage() {
  return (
    <main className="sp-page neuro-page" id="main">

      <SpecialtyHero
        eyebrow="Neurosurgical Revenue Infrastructure"
        heading="Neurosurgery Billing Services"
        intro="Medbilling RCM provides specialized neurosurgery billing services covering craniotomy, spinal decompression, spinal fusion, neurostimulator implantation, stereotactic radiosurgery, and peripheral nerve procedures — ensuring accurate claims, complete add-on code capture, and maximum reimbursements for neurosurgery practices."
        badge="AAPC Certified · Cranial & Spinal Specialists · NCCI Compliant · 50 States"
        stats={[
          { num: "99%",  label: "Clean Claim Rate" },
          { num: "65%",  label: "Spine = Billing Volume" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ NEURAL PATHWAY SECTION ══════════════════════════
          UNIQUE DESIGN: Animated neural pathway visual —
          a flowing diagram of the neurosurgery billing process
          shown as interconnected nodes (like a brain network).
          Completely new design language across all specialty pages.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="subspecialties">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Sub-Specialties We Bill</p>
          <h2 className="reveal">Complete Neurosurgical Sub-Specialty Coverage</h2>
          <p className="neuro-sub-intro reveal">Neurosurgery spans brain, spine, peripheral nerve, and functional neurosurgery — each with distinct CPT code families, documentation requirements, and payer rules. Our specialists are trained across all sub-specialties.</p>

          <div className="neuro-subspecialty-network">
            {[
              { icon:"🧠", title:"Cranial Surgery",         codes:"61304–61548", detail:"Craniotomy, tumor resection, aneurysm repair, decompression, ventriculoperitoneal shunts" },
              { icon:"🦴", title:"Spinal Surgery",          codes:"63001–63056", detail:"Laminectomy, discectomy, foraminotomy, spinal decompression — cervical/thoracic/lumbar" },
              { icon:"🔗", title:"Spinal Instrumentation",  codes:"22551–22632", detail:"Cervical/lumbar fusion, anterior/posterior approaches, multi-level add-on codes (+22614)" },
              { icon:"⚡", title:"Neurostimulation",        codes:"63650–63688", detail:"SCS trial/permanent implantation, neurostimulator revision, intrathecal drug delivery" },
              { icon:"🎯", title:"Stereotactic & Radiosurgery", codes:"61790–61800", detail:"Stereotactic radiosurgery, Gamma Knife, CyberKnife, CT-guided procedures" },
              { icon:"🧬", title:"Peripheral Nerve Surgery", codes:"64400–64640", detail:"Nerve repair, decompression, neurolysis, peripheral neurostimulation" },
            ].map(({ icon, title, codes, detail }) => (
              <div className="neuro-node reveal" key={title}>
                <div className="neuro-node-icon" aria-hidden="true">{icon}</div>
                <div className="neuro-node-body">
                  <h3>{title}</h3>
                  <span className="neuro-node-code">{codes}</span>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES — 6 navy cap cards ═══════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Neurosurgery Billing Challenges</p>
          <h2 className="reveal">Complex Neurosurgery Billing — Expertly Handled</h2>
          <p className="neuro-caps-sub reveal">Neurosurgery has one of the highest audit risks and revenue per case in all of surgery. A single miscoded spinal fusion or missed add-on code can mean thousands in lost revenue or compliance exposure.</p>

          <div className="neuro-caps-grid">
            {[
              { icon:"🔗", n:"01", h:"Spinal Surgery Add-On Code Capture",      t:"Spinal procedures often involve multiple levels and components — decompression, instrumentation, fusion — each potentially billable. Add-on codes (+22614 for additional fusion levels, +63035 for additional decompression levels) must be identified in every operative note. We review every spinal surgery report to capture all separately billable add-on codes." },
              { icon:"🎯", n:"02", h:"Navigation & Microscopy Add-On Billing",   t:"CPT 61781 (surgical navigation without MRI) and 61782 (with MRI guidance) are separately billable when documented in the operative report. CPT 69990 (operating microscope) is billable when not already bundled into the primary code. We identify every add-on billing opportunity on every neurosurgical case." },
              { icon:"📋", n:"03", h:"Cranial Surgery Medical Necessity",         t:"High-cost procedures — craniotomy for tumor (CPT 61510), aneurysm repair (CPT 61703) — require detailed operative notes, imaging confirmation, neurological deficit documentation, and failed conservative treatment records. We ensure all pre-authorization packages meet payer standards before submission." },
              { icon:"⚕️", n:"04", h:"Assistant Surgeon Modifier Application",   t:"Complex cranial and spinal surgeries frequently require assistant surgeons. Modifier -80 (assistant), -81 (minimum assistant), and -82 (assistant when resident unavailable) each carry different reimbursement rules — 16–20% of the primary fee under Medicare. We apply the correct modifier for every case based on operative documentation and teaching hospital status." },
              { icon:"📅", n:"05", h:"Global Period & Bundling Management",       t:"Neurosurgery procedures carry 90-day global periods. Post-operative services within the global are not separately billable unless a new problem arises. We track global periods, apply modifiers 24, 57, and 79 for separately billable post-global services, and prevent accidental bundling of legitimately billable encounters." },
              { icon:"⚡", n:"06", h:"Neurostimulator & Implant Billing",         t:"SCS trial placement (CPT 63650), permanent implantation (CPT 63685), and programming (CPT 95970–95982) each have distinct billing cycles. Implant HCPCS codes for the hardware must be billed alongside surgical CPT codes. We manage the full neurostimulator billing lifecycle from trial through permanent implantation." },
            ].map(({ icon, n, h, t }) => (
              <article className="neuro-cap-card reveal" key={n}>
                <div className="neuro-cap-top">
                  <div className="neuro-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="neuro-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your Neurosurgery Revenue System</h2>
          <p className="neuro-process-intro reveal">End-to-end neurosurgery billing infrastructure — from pre-authorization to add-on code capture — built for the layered complexity of cranial, spinal, and functional neurosurgery.</p>

          <div className="neuro-steps">
            {[
              { n:"01", h:"Pre-Auth & Medical Necessity Package",    t:"Compile imaging, neurological deficit documentation, failed conservative treatment records, and submit complete authorization packages for all high-cost neurosurgical procedures" },
              { n:"02", h:"Operative Report Review & Coding",        t:"Detailed review of every operative note for surgical approach, levels, add-on procedures, navigation, microscopy, and assistant surgeon documentation before code selection" },
              { n:"03", h:"Add-On Code & Component Capture",         t:"Systematic identification of all separately billable components — multi-level fusion add-ons, navigation guidance, microscopy, neurostimulator hardware HCPCS codes" },
              { n:"04", h:"Modifier Application & NCCI Scrub",       t:"Correct modifiers (-22, -51, -59, -80/-81/-82) applied with full NCCI edit scrub before claim submission to prevent bundling denials" },
              { n:"05", h:"Global Period & Post-Op Management",       t:"90-day global period tracking with correct modifier 24/57/79 application for all separately billable post-operative neurosurgical services" },
              { n:"06", h:"Denial Management & Audit Defense",        t:"Root-cause denial analysis, appeals with clinical documentation, and audit defense support for high-dollar neurosurgical claims" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="neuro-step reveal" key={n}>
                <div className="neuro-step-aside">
                  <div className="neuro-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="neuro-step-conn" />}
                </div>
                <div className="neuro-step-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="neuro-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="neuro-process-note">For neurosurgery practices &amp; spine centers · AAPC-certified coders · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="neuro-ba-grid">
            {[
              { label:"Clean Claim Rate",       num:"99",   unit:"%",  green:true,  desc:"first-pass acceptance" },
              { label:"Add-On Code Capture",    num:"100",  unit:"%",  green:false, desc:"of billable components identified" },
              { label:"A/R Days Reduction",     num:"30",   unit:"%↓", green:true,  desc:"accounts receivable days" },
              { label:"Audit Defense Rate",     num:"95",   unit:"%",  green:false, desc:"favorable appeal outcomes" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`neuro-ba-card${green ? " neuro-ba-card--green" : ""} reveal`} key={label}>
                <div className="neuro-ba-label">{label}</div>
                <div className="neuro-ba-num">{num}<span>{unit}</span></div>
                <div className="neuro-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Neurosurgery Revenue Infrastructure Partner</h2>
          <p className="neuro-why-intro reveal">Our neurosurgery billing team understands spinal surgery bundling rules, cranial surgery documentation requirements, neurostimulator billing cycles, and the add-on code capture strategies that maximize revenue on every case.</p>

          <div className="neuro-why-grid">
            {[
              { icon:"🧠", n:"01", h:"Cranial Procedure Coding Experts",        t:"Complete expertise in craniotomy, tumor resection, aneurysm repair, VP shunts, and craniectomy with correct add-on code capture for every case." },
              { icon:"🦴", n:"02", h:"Spinal Surgery Add-On Specialists",       t:"Multi-level decompression and fusion add-on code identification on every operative report — the most common and costly omission in neurosurgery billing." },
              { icon:"⚡", n:"03", h:"Neurostimulator Lifecycle Billing",        t:"End-to-end billing from SCS trial (63650) through permanent implantation (63685) and programming codes (95970–95982) with HCPCS hardware capture." },
              { icon:"🎯", n:"04", h:"Navigation & Microscopy Revenue Capture",  t:"CPT 61781/61782 and CPT 69990 identified and billed on every qualifying case — billable units most neurosurgery practices consistently miss." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Neurosurgery Coders",      t:"Every coding specialist holds AAPC certification with dedicated neurosurgery training across cranial, spinal, peripheral nerve, and functional procedures." },
              { icon:"⚕️", n:"06", h:"Assistant Surgeon Billing Expertise",     t:"Correct -80/-81/-82 modifier application based on operative documentation and teaching hospital status maximizing assistant surgeon reimbursement." },
              { icon:"📋", n:"07", h:"Pre-Auth Documentation Packages",          t:"Complete authorization packages with imaging, neurological deficit documentation, and failed conservative treatment records for every high-cost procedure." },
              { icon:"🔍", n:"08", h:"Transparent Neurosurgery Reporting",      t:"Case-level revenue reports, add-on capture rates, payer performance by procedure, and audit exposure analysis specific to neurosurgical billing." },
            ].map(({ icon, n, h, t }) => (
              <div className="neuro-why-card reveal" key={n}>
                <div className="neuro-why-top">
                  <div className="neuro-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="neuro-why-num">{n}</span>
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
          <div className="neuro-faq-layout">
            <div className="neuro-faq-intro reveal">
              <p>Direct answers about spinal surgery coding, navigation add-ons, prior authorization, neurostimulator billing, and assistant surgeon modifiers. <Link href="/specialties/" className="neuro-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="neuro-faq-list">
              {[
                ["How do you handle spinal surgery bundling and add-on code capture?",
                 "Spinal procedures often involve multiple distinct billable components — decompression, instrumentation, fusion at multiple levels, and intraoperative neuromonitoring. Each level and approach may have its own primary or add-on CPT code. We review every operative report to identify all separately billable services, apply correct add-on codes (e.g., +22614 for additional fusion levels), and ensure bundling edits are applied correctly to prevent systematic undercoding."],
                ["How do you code robotic-assisted and navigation-guided neurosurgery?",
                 "Navigation-guided and robotic-assisted neurosurgery require specific CPT codes and documentation to be separately reimbursable. CPT 61781 (surgical navigation without MRI) and 61782 (with MRI guidance) are billable when navigation is documented in the operative report. Modifier -22 may be appropriate for unusually complex procedures. We verify payer-specific rules for navigation add-ons before every submission."],
                ["How do you manage prior authorizations for high-cost neurosurgery procedures?",
                 "We proactively manage prior authorizations for craniotomies, spinal fusions, neurostimulator implantations, and radiosurgery. Our team submits authorization requests with operative planning documents, imaging studies, failed conservative treatment records, and neurological deficit documentation — the exact package payers require for high-cost neurosurgical procedures. We track approvals and follow up proactively to prevent procedure-day authorization failures."],
                ["What neurosurgery ICD-10 codes do you use and how do you ensure specificity?",
                 "Neurosurgery ICD-10 coding requires high specificity — M48.06 (lumbar spinal stenosis with neurogenic claudication) vs M48.02 (cervical), G35 (multiple sclerosis), C71.9 (brain tumor), S06.0 (concussion), M50.121 (cervical disc displacement with radiculopathy, right). We select the most specific available ICD-10 code for every encounter and link procedure codes to diagnoses that satisfy medical necessity requirements for each payer."],
                ["How do you handle assistant surgeon billing for complex neurosurgery?",
                 "Complex cranial and spinal neurosurgery frequently requires assistant surgeons. Modifiers -80 (assistant surgeon), -81 (minimum assistant), and -82 (assistant when qualified resident unavailable) each carry different reimbursement rules — typically 16–20% of the primary surgeon's allowed amount under Medicare. We apply the correct modifier for each case based on the operative documentation, payer rules, and teaching hospital status."],
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
        heading="Maximize Your Neurosurgery Practice Revenue"
        body="Schedule a free neurosurgery billing assessment and discover how complete add-on code capture, navigation billing, and correct modifier application can significantly improve your practice revenue."
        ctaLabel="Schedule Revenue Assessment"
        formId="neuroAssessmentForm"
        checklist={[
          "Spinal surgery add-on code capture rate audit (+22614, +63035)",
          "Navigation & microscopy billing opportunity analysis (CPT 61781, 69990)",
          "Assistant surgeon modifier compliance review (-80, -81, -82)",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For neurosurgery practices & spine centers · AAPC-certified coders · All 50 states served"
      />
    </main>
  );
}
