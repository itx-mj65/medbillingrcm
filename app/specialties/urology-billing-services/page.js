import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function UrologyBillingPage() {
  return (
    <main className="sp-page urology-page" id="main">

      {/* ═══ HERO ════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="Urologic Revenue Infrastructure"
        heading="Urology Billing Services"
        intro="Medbilling RCM provides specialized urology billing services covering cystoscopy, TURP, prostate biopsy, lithotripsy, robotic urologic surgery, and urodynamics — ensuring accurate claims, correct modifier application, and maximum reimbursements for urology practices."
        badge="AAPC Certified · Robotic Surgery Experts · NCCI Compliant · 50 States"
        stats={[
          { num: "97%",   label: "Clean Claim Rate" },
          { num: "30%",   label: "Reduction in A/R Days" },
          { num: "90%",   label: "Collection Rate" },
          { num: "50",    label: "States Served" },
        ]}
      />

      {/* ═══ PROCEDURE COVERAGE ══════════════════════════════
          UNIQUE DESIGN: 4-column procedure grid — each card shows
          a urology procedure category with specific CPT codes and
          a key billing rule/modifier note. Horizontal scroll on mobile.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="procedures">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Urology Procedures We Bill</p>
          <h2 className="reveal">Complete Urologic Procedure Billing Coverage</h2>
          <p className="urology-proc-sub reveal">We manage the full spectrum of urologic procedure billing — from in-office cystoscopy to complex robotic surgery — with specialty-specific CPT expertise and correct modifier application on every claim.</p>

          <div className="urology-proc-grid">
            {[
              { icon:"🔭", cat:"Endoscopy & Cystoscopy", codes:"52000–52356",
                items:["CPT 52000 — Cystoscopy","CPT 52310 — Stone extraction","CPT 52353 — Lithotripsy","CPT 52354 — Biopsy via scope"],
                note:"Modifier 25 required when E/M billed same day" },
              { icon:"🫀", cat:"Prostate Procedures", codes:"55700–55866",
                items:["CPT 55700 — Prostate biopsy","CPT 55706 — Prostate biopsy, sextant","CPT 52601 — TURP","CPT 55866 — Robotic prostatectomy"],
                note:"55866 (robotic) ≠ 55840 (open) — approach must match OR notes" },
              { icon:"🪨", cat:"Stone Management", codes:"50590–52356",
                items:["CPT 50590 — ESWL lithotripsy","CPT 50610 — Ureterolithotomy","CPT 52352 — Basket extraction","CPT 52353 — Laser lithotripsy"],
                note:"Prior auth required for ESWL and laser procedures" },
              { icon:"🫘", cat:"Kidney & Nephrectomy", codes:"50220–50545",
                items:["CPT 50220 — Open nephrectomy","CPT 50543 — Robotic nephrectomy","CPT 50545 — Laparoscopic nephrectomy","CPT 50240 — Partial nephrectomy"],
                note:"Robotic (50543) vs laparoscopic (50545) — approach critical" },
              { icon:"⚕️", cat:"Urodynamics & Diagnostics", codes:"51725–51798",
                items:["CPT 51725 — CMG (cystometrogram)","CPT 51736 — UFR (uroflowmetry)","CPT 51797 — Voiding pressure studies","CPT 76872 — TRUS"],
                note:"26/TC split billing when equipment owned by hospital" },
              { icon:"✂️", cat:"Minor & In-Office", codes:"54150–55250",
                items:["CPT 54150 — Circumcision","CPT 54400 — Penile prosthesis","CPT 55250 — Vasectomy","CPT 51702 — Foley catheter"],
                note:"Global period 10–90 days — post-op visits tracked" },
              { icon:"🏗️", cat:"Reconstruction & Repairs", codes:"50700–51800",
                items:["CPT 50700 — Ureteroplasty","CPT 51800 — Cystoplasty","CPT 53410 — Urethroplasty","CPT 50830 — Urinary diversion"],
                note:"Modifier 22 for complex reconstructions" },
              { icon:"📊", cat:"E/M & Office Visits", codes:"99202–99215",
                items:["CPT 99202-99205 — New patient","CPT 99212-99215 — Established","CPT 99242-99245 — Consults","Modifier 25 for same-day procedures"],
                note:"AUA coding guidelines applied for E/M level selection" },
            ].map(({ icon, cat, codes, items, note }) => (
              <div className="urology-proc-card reveal" key={cat}>
                <div className="urology-proc-top">
                  <span className="urology-proc-icon" aria-hidden="true">{icon}</span>
                  <span className="urology-proc-range">{codes}</span>
                </div>
                <h3 className="urology-proc-title">{cat}</h3>
                <ul className="urology-proc-list">
                  {items.map(item => <li key={item}>{item}</li>)}
                </ul>
                <div className="urology-proc-note">
                  <span className="urology-proc-note-icon" aria-hidden="true">💡</span>
                  {note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES — 6 navy cards ═══════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Urology Billing Challenges</p>
          <h2 className="reveal">Complex Urology Billing — Expertly Handled</h2>
          <p className="urology-caps-sub reveal">Urology has one of the highest modifier error rates in surgery — robotic approach miscoding, missing modifier 25, and global period mismanagement cost practices thousands in systematic underpayment.</p>

          <div className="urology-caps-grid">
            {[
              { icon:"🤖", n:"01", h:"Robotic vs. Laparoscopic Approach Coding",   t:"Robotic-assisted urologic surgery uses distinct CPT codes from laparoscopic and open approaches. Robotic prostatectomy (55866) differs from open prostatectomy (55840). Robotic nephrectomy (50543) differs from laparoscopic nephrectomy (50545). We review every operative report for surgical approach before code selection — the 37% approach mismatch rate makes this the highest-revenue error in urology." },
              { icon:"25",  n:"02", h:"Modifier 25 — E/M at Same Visit as Procedure", t:"Urology practices perform cystoscopy, prostate biopsy, and in-office procedures at the same encounter as E/M visits daily. The E/M is separately billable only with modifier 25. Without it, payers bundle the visit into the procedure fee. We apply modifier 25 on every qualifying encounter and monitor capture rates per provider monthly." },
              { icon:"📅", n:"03", h:"Global Surgical Period Management",           t:"Major urology surgeries carry a 90-day global period; minor procedures a 10-day global. Post-op visits within the global are not separately billable unless a new significant problem arises. We track every procedure's global period, flag all post-op dates, and apply modifiers 24, 57, and 79 correctly to protect separately billable services." },
              { icon:"🔐", n:"04", h:"Prior Authorization — Robotic & Complex Cases", t:"Robotic prostatectomy, lithotripsy, TURP, and other high-cost urologic procedures require prior authorization. We manage the full authorization cycle — submission, tracking, peer-to-peer coordination, and appeals — preventing procedure-day authorization failures that result in non-covered claims." },
              { icon:"⚖️", n:"05", h:"NCCI Edit & Bundling Compliance",            t:"NCCI edits frequently bundle urologic procedures performed at the same encounter. We apply modifiers 51, 59, and XS to distinguish distinct procedural services, ensure payer-specific bundling rules are followed, and scrub every claim against CMS and commercial NCCI edits before submission." },
              { icon:"🩺", n:"06", h:"ICD-10 Specificity & Medical Necessity",     t:"Urology ICD-10 coding must be highly specific — N40.0 (BPH without LUTS) vs N40.1 (BPH with LUTS), N18.3 vs N18.9 (CKD stages) — because payers deny claims when diagnosis codes don't support medical necessity for the billed procedure. We verify ICD-10 specificity on every claim submission." },
            ].map(({ icon, n, h, t }) => (
              <article className="urology-cap-card reveal" key={n}>
                <div className="urology-cap-top">
                  <div className="urology-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="urology-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your Urology Revenue System</h2>
          <p className="urology-process-intro reveal">End-to-end urology billing infrastructure from pre-authorization to global period management — built for the surgical complexity and modifier precision urology practices demand.</p>

          <div className="urology-steps">
            {[
              { n:"01", h:"Eligibility & Prior Authorization",         t:"Verify urology coverage and secure authorizations for robotic surgery, lithotripsy, TURP, and high-cost procedures before the procedure date" },
              { n:"02", h:"Operative Report Review & Coding",          t:"Review every operative report for surgical approach (robotic/laparoscopic/open) before CPT code selection — preventing the most costly urology billing error" },
              { n:"03", h:"Modifier Application & NCCI Review",        t:"Apply modifiers 25, 51, 59, XS, 26/TC with NCCI edit scrub on every claim — capturing all separately billable services without bundling violations" },
              { n:"04", h:"Clean Claim Submission",                    t:"CMS-1500 and UB-04 claims submitted electronically with ICD-10 specificity verified, medical necessity linked, and AUA guidelines applied" },
              { n:"05", h:"Global Period Tracking & Post-Op Management",t:"Track 10-day and 90-day global periods per procedure, flag post-op visits, and apply modifiers 24/57/79 for separately billable post-global services" },
              { n:"06", h:"Denial Management & AR Recovery",           t:"Root-cause denial analysis, appeals within payer deadlines, and systematic AR follow-up on all outstanding urology claims" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="urology-step reveal" key={n}>
                <div className="urology-step-aside">
                  <div className="urology-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="urology-step-conn" aria-hidden="true" />}
                </div>
                <div className="urology-step-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="urology-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="urology-process-note">For urology practices &amp; surgery centers · AAPC-certified coders · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="urology-ba-grid">
            <div className="urology-ba-card urology-ba-card--green reveal">
              <div className="urology-ba-label">Clean Claim Rate</div>
              <div className="urology-ba-num">97<span>%</span></div>
              <div className="urology-ba-desc">first-pass acceptance</div>
            </div>
            <div className="urology-ba-card reveal">
              <div className="urology-ba-label">Approach Code Errors</div>
              <div className="urology-ba-num">0<span>%</span></div>
              <div className="urology-ba-desc">vs 37% industry average</div>
            </div>
            <div className="urology-ba-card urology-ba-card--green reveal">
              <div className="urology-ba-label">A/R Days Reduction</div>
              <div className="urology-ba-num">30<span>%↓</span></div>
              <div className="urology-ba-desc">accounts receivable days</div>
            </div>
            <div className="urology-ba-card reveal">
              <div className="urology-ba-label">Modifier 25 Capture</div>
              <div className="urology-ba-num">100<span>%</span></div>
              <div className="urology-ba-desc">of qualifying encounters</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Urology Revenue Infrastructure Partner</h2>
          <p className="urology-why-intro reveal">Our urology billing team understands robotic surgery approach coding, modifier 25 capture, global period management, and the NCCI bundling rules that govern complex urologic procedure billing.</p>

          <div className="urology-why-grid">
            {[
              { icon:"🤖", n:"01", h:"Robotic Surgery Approach Specialists",       t:"Every operative report reviewed for surgical approach — robotic vs. laparoscopic vs. open — before CPT selection. Zero approach mismatch errors on urology surgery claims." },
              { icon:"25",  n:"02", h:"Modifier 25 & 51 Expertise",               t:"100% modifier 25 capture on same-day E/M + procedure encounters. Monthly per-provider capture rate monitoring to prevent systematic omission." },
              { icon:"📅", n:"03", h:"Global Period Lifecycle Management",        t:"10-day and 90-day global period tracking with correct modifier 24, 57, and 79 application for all separately billable post-operative services." },
              { icon:"🔐", n:"04", h:"Proactive Prior Authorization",             t:"Authorization management for robotic prostatectomy, lithotripsy, TURP, and all high-cost urologic procedures — zero procedure-day authorization failures." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Urology Coders",             t:"Every billing specialist holds AAPC certification with dedicated urology training. AUA coding guidelines applied on every E/M and surgical claim." },
              { icon:"⚖️", n:"06", h:"NCCI & Bundling Compliance",                t:"Complete NCCI edit scrub on every claim. Correct modifier 51, 59, and XS application to capture all separately billable urologic services." },
              { icon:"📊", n:"07", h:"Comprehensive Urology Reporting",           t:"Procedure-level revenue reports, modifier capture dashboards, denial trend analysis, and CPT utilization benchmarking specific to urology practices." },
              { icon:"🔍", n:"08", h:"Transparent Fee Structure",                 t:"No hidden fees. Results-driven urology billing with full reporting visibility across surgical, office, and diagnostic procedure categories." },
            ].map(({ icon, n, h, t }) => (
              <div className="urology-why-card reveal" key={n}>
                <div className="urology-why-top">
                  <div className="urology-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="urology-why-num">{n}</span>
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
          <div className="urology-faq-layout">
            <div className="urology-faq-intro reveal">
              <p>Direct answers about robotic surgery coding, modifier 25, prior authorization, global periods, and urology ICD-10 specificity. <Link href="/specialties/" className="urology-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="urology-faq-list">
              {[
                ["How do you handle robotic vs. laparoscopic vs. open urology procedure coding?",
                 "Robotic-assisted urologic surgery uses distinct CPT codes from laparoscopic and open approaches. Robotic prostatectomy (55866) differs from open prostatectomy (55840). Robotic nephrectomy (50543) differs from laparoscopic nephrectomy (50545). We review every operative report for surgical approach before code selection, verify prior authorization for robotic approaches, and never default to laparoscopic codes when robotic documentation is present — one of the most common and costly urology billing errors."],
                ["How do you apply modifier 25 in urology billing?",
                 "Modifier 25 is required when a significant, separately identifiable E/M service is performed at the same encounter as an in-office procedure such as cystoscopy, prostate biopsy, or urodynamics. Without modifier 25, payers bundle the visit into the procedure fee. We apply modifier 25 on every qualifying E/M, monitor capture rates per provider monthly, and audit encounters proactively to prevent systematic modifier omission."],
                ["How do you manage prior authorizations for urology procedures?",
                 "We manage prior authorizations for cystoscopy, lithotripsy, TURP, robotic prostatectomy, vasectomy, and other high-cost urology procedures. Our team initiates authorization requests before scheduling, tracks payer approvals, documents medical necessity, and follows up proactively to prevent procedure-day authorization failures that result in non-covered claims."],
                ["How do you handle global surgical period billing in urology?",
                 "We track the global surgical period for every urology procedure — 10 days for minor procedures and 90 days for major surgeries. Post-operative visits within the global period are not separately billable unless a significant new problem arises. We flag all post-op encounters for global period status, apply correct modifiers (24, 57, 79) when services fall outside or after the global period, and prevent accidental bundling of legitimately separately billable services."],
                ["What urology-specific ICD-10 codes do you use?",
                 "Common urology ICD-10 codes include N40.0 (benign prostatic hyperplasia without LUTS), N40.1 (BPH with LUTS), N20.0 (kidney stone), N30.00 (acute cystitis), N39.0 (UTI), C61 (malignant neoplasm of prostate), N18.3 (CKD stage 3), and N43.3 (hydrocele). We verify correct ICD-10 code selection for every encounter and link procedure codes to supporting diagnoses that meet payer medical necessity criteria."],
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
        heading="Maximize Your Urology Practice Revenue"
        body="Schedule a free urology billing assessment and discover how accurate robotic surgery coding, modifier 25 capture, and global period management can significantly improve your practice collections."
        ctaLabel="Schedule Revenue Assessment"
        formId="urologyAssessmentForm"
        checklist={[
          "Robotic vs. laparoscopic approach code accuracy review",
          "Modifier 25 capture rate analysis by provider",
          "Global period compliance audit — 10-day & 90-day",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For urology practices & surgery centers · AAPC-certified coders · All 50 states served"
      />

    </main>
  );
}
