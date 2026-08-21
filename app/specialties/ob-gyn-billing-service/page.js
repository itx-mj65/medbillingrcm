import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function OBGYNBillingPage() {
  return (
    <main className="sp-page obgyn-page" id="main">

      {/* ═══ HERO ════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="Women's Health Revenue Infrastructure"
        heading="OB-GYN Billing Services"
        intro="Medbilling RCM provides specialized OB-GYN billing services covering obstetric global packages, gynecological surgical coding, delivery billing, and women's health compliance ensuring accurate claims and maximum reimbursements for OB-GYN practices."
        badge="AAPC Certified · Global Package Experts · 50 States"
        stats={[
          { num: "97%",  label: "Claim Acceptance Rate" },
          { num: "30%",  label: "Reduction in A/R" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ EXPERT OB-GYN RCM ═══════════════════════════════
          UNIQUE DESIGN: 3-panel service overview — left intro copy,
          center OB services list, right GYN services list.
          Triptych layout not used on any other specialty page.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="services">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Comprehensive OB-GYN Billing</p>
          <h2 className="reveal">Expert OB-GYN Revenue Cycle Management</h2>

          <div className="obgyn-overview-layout">
            <div className="obgyn-overview-copy">
              <p className="reveal">OB-GYN billing encompasses two distinct specialties — obstetrics and gynecology — each with unique CPT codes, global packages, and payer rules. Our AAPC-certified specialists manage both with equal precision.</p>
              <p className="reveal">From antepartum care bundles and delivery coding to laparoscopic gynecological procedures and in-office GYN services, we ensure every billable service is captured, correctly coded, and paid the first time.</p>
              <Link href="/request-free-audit/" className="sp-btn sp-btn--primary reveal">Schedule Revenue Assessment</Link>
            </div>

            <div className="obgyn-svc-col">
              <div className="obgyn-svc-col-header reveal">Obstetrics Billing</div>
              {[
                "Global OB Package (CPT 59400, 59510)",
                "Antepartum care (59425, 59426)",
                "Vaginal & C-section delivery coding",
                "High-risk pregnancy billing",
                "Postpartum visit coding",
                "Split/shared care coordination",
                "Fetal monitoring & ultrasound billing",
              ].map(item => (
                <div className="obgyn-svc-item reveal" key={item}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                  {item}
                </div>
              ))}
            </div>

            <div className="obgyn-svc-col">
              <div className="obgyn-svc-col-header reveal">Gynecology Billing</div>
              {[
                "Hysterectomy & laparoscopy coding",
                "Hysteroscopy & colposcopy billing",
                "Endometrial ablation coding",
                "Pelvic floor procedure billing",
                "In-office procedure coding",
                "Preventive GYN visit billing",
                "Fertility & ART billing support",
              ].map(item => (
                <div className="obgyn-svc-item reveal" key={item}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ KEY CHALLENGES — 6 navy cards ══════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">OB-GYN Billing Challenges</p>
          <h2 className="reveal">Complex OB-GYN Billing — Expertly Handled</h2>
          <p className="obgyn-caps-sub reveal">OB-GYN billing requires mastery of two distinct coding systems, global packages, and payer-specific maternity rules. Our specialists handle all of it daily.</p>

          <div className="obgyn-caps-grid">
            {[
              { icon:"🤱", n:"01", h:"OB Global Package Billing",              t:"The OB global package bundles antepartum, delivery, and postpartum care into single codes (59400, 59510, 59610, 59618). We track each component, handle split care between providers, and ensure no billable service is missed or incorrectly bundled." },
              { icon:"🏥", n:"02", h:"Delivery & C-Section Coding",            t:"Vaginal deliveries, cesarean sections, and vaginal births after cesarean (VBAC) each require distinct CPT codes and documentation. We apply the correct delivery code for every encounter and capture add-on codes for complications when applicable." },
              { icon:"🔪", n:"03", h:"GYN Surgical Procedure Coding",          t:"Hysterectomies (vaginal, abdominal, laparoscopic), hysteroscopies, and colposcopies require precise coding with correct approach modifiers, NCCI compliance, and global period tracking to maximize reimbursement without audit risk." },
              { icon:"📋", n:"04", h:"High-Risk Pregnancy & Split Care",       t:"High-risk obstetric care, antepartum-only services, and mid-pregnancy transfers require split-care CPT codes (59425, 59426) and careful coordination between delivering and non-delivering providers to ensure accurate reimbursement for each." },
              { icon:"🔐", n:"05", h:"Prior Authorization for GYN Procedures", t:"Robotic hysterectomies, endometrial ablations, and fertility-related services require prior authorization and detailed medical necessity documentation. We manage the full authorization cycle proactively to prevent revenue-impacting delays." },
              { icon:"⚖️", n:"06", h:"Payer Policy & Preventive Billing",     t:"Preventive GYN visits (annual exams, Pap smears) are subject to payer-specific rules under the ACA. We correctly distinguish preventive from problem-focused visits and apply the right codes to avoid cost-sharing surprises and denials." },
            ].map(({ icon, n, h, t }) => (
              <article className="obgyn-cap-card reveal" key={n}>
                <div className="obgyn-cap-top">
                  <div className="obgyn-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="obgyn-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your OB-GYN Revenue System</h2>
          <p className="obgyn-process-intro reveal">From eligibility verification to postpartum reconciliation a precision billing infrastructure built for the full obstetric and gynecology care cycle.</p>

          <div className="obgyn-steps">
            {[
              { n:"01", h:"Eligibility & Coverage Verification",  t:"Verify maternity benefits, GYN coverage, deductibles, and prior auth requirements before every OB and GYN encounter" },
              { n:"02", h:"Global Package Tracking",              t:"Track antepartum visit counts, delivery type, and postpartum care to apply the correct global OB CPT code every time" },
              { n:"03", h:"OB-GYN Specific Coding",              t:"AAPC-certified coders apply precise CPT codes for obstetrics, GYN surgery, in-office procedures, and preventive visits" },
              { n:"04", h:"Prior Authorization",                  t:"Proactive authorization management for GYN surgeries, high-risk OB care, and fertility-related procedures" },
              { n:"05", h:"Claim Submission & Tracking",         t:"Clean, compliant claims submitted electronically with real-time payer tracking and 48h follow-up on unpaid claims" },
              { n:"06", h:"Payment Posting & Reconciliation",    t:"EOB/ERA posting, global period reconciliation, underpayment identification, and detailed OB-GYN financial reporting" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="obgyn-step reveal" key={n}>
                <div className="obgyn-step-aside">
                  <div className="obgyn-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="obgyn-step-conn" aria-hidden="true" />}
                </div>
                <div className="obgyn-step-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="obgyn-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="obgyn-process-note">For OB-GYN practices, women's health centers &amp; hospitals · AAPC-certified coders · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>

          <div className="obgyn-ba-grid">
            <div className="obgyn-ba-card obgyn-ba-card--green reveal">
              <div className="obgyn-ba-label">Claim Acceptance Rate</div>
              <div className="obgyn-ba-num">97<span>%</span></div>
              <div className="obgyn-ba-desc">first-pass acceptance</div>
            </div>
            <div className="obgyn-ba-card reveal">
              <div className="obgyn-ba-label">A/R Days Reduction</div>
              <div className="obgyn-ba-num">30<span>%↓</span></div>
              <div className="obgyn-ba-desc">reduction in AR days</div>
            </div>
            <div className="obgyn-ba-card obgyn-ba-card--green reveal">
              <div className="obgyn-ba-label">Collection Rate</div>
              <div className="obgyn-ba-num">90<span>%</span></div>
              <div className="obgyn-ba-desc">average collection rate</div>
            </div>
            <div className="obgyn-ba-card reveal">
              <div className="obgyn-ba-label">Revenue Increase</div>
              <div className="obgyn-ba-num">+15<span>%</span></div>
              <div className="obgyn-ba-desc">within first 90 days</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING — left-rail pulse cards ══════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your OB-GYN Revenue Infrastructure Partner</h2>
          <p className="obgyn-why-intro reveal">Deep OB-GYN billing expertise spanning global packages, surgical GYN coding, split care, and preventive visit billing the complete women's health revenue cycle managed by specialists who understand both sides of your specialty.</p>

          <div className="obgyn-why-grid">
            {[
              { icon:"🤱", n:"01", h:"OB Global Package Specialists",         t:"Expert tracking and coding of the complete OB global package ensuring no antepartum, delivery, or postpartum component is missed or incorrectly billed." },
              { icon:"🔪", n:"02", h:"GYN Surgical Coding Accuracy",          t:"Precise coding for hysterectomies, laparoscopies, hysteroscopies, and colposcopies with NCCI compliance and global period tracking at every step." },
              { icon:"⚖️", n:"03", h:"ACA Preventive Visit Compliance",       t:"Correct distinction between preventive and problem-focused GYN visits ensuring maximum ACA coverage and no unexpected patient cost-sharing." },
              { icon:"💰", n:"04", h:"Split Care & Transfer Coordination",    t:"Accurate antepartum-only coding and delivering vs. non-delivering provider billing when care is shared or patients transfer mid-pregnancy." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Specialists",            t:"Every coder is certified with OB-GYN-specific training. Zero CPT, ICD-10, and HCPCS coding errors across obstetrics and gynecology." },
              { icon:"⏰", n:"06", h:"24/7 AR Follow-Up Within 30 Days",     t:"Proactive monitoring ensures OB and GYN claims are resolved before they age protecting your global package revenue." },
              { icon:"📊", n:"07", h:"Comprehensive OB-GYN Reporting",       t:"Detailed financial reports by procedure type (OB vs GYN), payer, and provider giving full visibility into your revenue performance." },
              { icon:"🔍", n:"08", h:"Transparent Fee Structure",             t:"No hidden fees. Cost-effective, results-driven OB-GYN billing with full reporting visibility at every stage." },
            ].map(({ icon, n, h, t }) => (
              <div className="obgyn-why-card reveal" key={n}>
                <div className="obgyn-why-top">
                  <div className="obgyn-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="obgyn-why-num">{n}</span>
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

          <div className="obgyn-faq-layout">
            <div className="obgyn-faq-intro reveal">
              <p>Direct answers about OB global packages, GYN surgical coding, split care, and prior authorization. <Link href="/specialties/" className="obgyn-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="obgyn-faq-list">
              {[
                ["What is the OB global package and how do you handle it?",
                 "The OB global package (CPT 59400, 59510, 59610, 59618) bundles all antepartum visits, delivery, and postpartum care into a single code. We track each component, ensure the correct global or split-care codes are applied, and handle unbundling when care is shared between providers or transferred mid-pregnancy."],
                ["How do you bill for gynecological surgical procedures?",
                 "GYN surgical billing requires precise CPT coding for hysterectomies, laparoscopies, hysteroscopies, and colposcopies with correct approach modifiers and medical necessity documentation. We apply NCCI edits, track global surgical periods, and ensure all separately billable services are captured."],
                ["How do you handle split or shared OB care billing?",
                 "When antepartum care is shared between providers or a patient transfers mid-pregnancy, we apply the correct split-care CPT codes (59425, 59426) for antepartum-only services. We coordinate between delivering and non-delivering providers to ensure each physician receives accurate reimbursement for their contribution to care."],
                ["How do you manage prior authorizations for OB-GYN procedures?",
                 "We proactively manage prior authorizations for high-cost GYN procedures including robotic hysterectomies, endometrial ablations, and fertility-related services. Our team tracks authorization timelines, documents medical necessity, and follows up with payers to prevent revenue-impacting delays."],
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
        heading="Maximize Your OB-GYN Revenue Cycle"
        body="Schedule a free revenue assessment and discover how our OB-GYN billing specialists can recover lost global package revenue, reduce GYN surgical denials, and accelerate your reimbursement cycles."
        ctaLabel="Schedule Revenue Assessment"
        formId="obgynAssessmentForm"
        checklist={[
          "OB global package coding audit (CPT 59400, 59510, 59610, 59618)",
          "GYN surgical CPT accuracy — hysterectomy, laparoscopy, hysteroscopy",
          "Split care & antepartum-only billing review",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For OB-GYN practices & women's health centers · AAPC-certified specialists · 50 states served"
      />

    </main>
  );
}
