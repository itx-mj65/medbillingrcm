import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function GynecologyBillingPage() {
  return (
    <main className="sp-page gyn-page" id="main">

      <SpecialtyHero
        eyebrow="Gynecology Revenue Infrastructure"
        heading="Gynecology Billing Services"
        intro="Medbilling RCM provides specialized gynecology billing services covering hysteroscopy CPT coding, laparoscopic gynecological surgery, colposcopy billing, endometrial ablation, IUD insertion and removal, preventive gynecology E/M coding, global period management, and prior authorization for gynecological procedures — ensuring accurate claims and maximum reimbursements for gynecology and OB-GYN practices."
        badge="AAPC Certified · Surgical & E/M Specialists · Global Period Experts · 50 States"
        stats={[
          { num: "97%",  label: "Clean Claim Rate" },
          { num: "30%",  label: "Reduction in A/R Days" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ PROCEDURE APPROACH MATRIX ════════════════════════
          UNIQUE DESIGN: Gynecological procedure approach selector
          showing diagnostic vs operative and laparoscopic vs open
          CPT families side by side. Orbit animation unique to gyn.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="procedures">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Procedure Coding Precision</p>
          <h2 className="reveal">Gynecological Procedures — Approach-Specific CPT Coding</h2>
          <p className="gyn-proc-sub reveal">Gynecological procedure coding requires exact approach matching — diagnostic vs. operative, laparoscopic vs. abdominal vs. vaginal. Each approach has its own CPT code family. Approach mismatches are the most common gynecology billing compliance error.</p>

          <div className="gyn-proc-grid">
            {[
              { icon:"🔬", procedure:"Hysteroscopy",      color:"blue",
                approaches:[
                  { label:"Diagnostic",             cpt:"58555", note:"Diagnostic only — no operative" },
                  { label:"Operative + Biopsy",     cpt:"58558", note:"With biopsy or polypectomy" },
                  { label:"Adhesion Lysis",         cpt:"58559", note:"Intrauterine adhesions" },
                  { label:"Septum Resection",       cpt:"58560", note:"Uterine septum — with resectoscope" },
                ]
              },
              { icon:"🩺", procedure:"Hysterectomy",      color:"green",
                approaches:[
                  { label:"Laparoscopic (TLH)",     cpt:"58570–58573", note:"Total laparoscopic — by uterine size" },
                  { label:"Laparoscopic (LAVH)",    cpt:"58550–58554", note:"Laparoscopic-assisted vaginal" },
                  { label:"Abdominal (TAH)",        cpt:"58150–58240", note:"Open abdominal approach" },
                  { label:"Vaginal (TVH)",          cpt:"58260–58294", note:"Vaginal approach — by complexity" },
                ]
              },
              { icon:"🔭", procedure:"Laparoscopy",        color:"navy",
                approaches:[
                  { label:"Diagnostic",             cpt:"49320",       note:"Diagnostic laparoscopy only" },
                  { label:"Oophorectomy",           cpt:"58661",       note:"Laparoscopic removal of ovary" },
                  { label:"Myomectomy",             cpt:"58545–58546", note:"Laparoscopic fibroid removal" },
                  { label:"Endometrioma",           cpt:"58661",       note:"Ovarian endometrioma removal" },
                ]
              },
              { icon:"🩻", procedure:"Colposcopy",          color:"gold",
                approaches:[
                  { label:"Without biopsy",        cpt:"57452",       note:"Colposcopy exam only" },
                  { label:"With biopsy",           cpt:"57454",       note:"Includes ectocervical biopsy" },
                  { label:"With LEEP",             cpt:"57460",       note:"Loop excision of cervix" },
                  { label:"With ECC",              cpt:"57456",       note:"Includes endocervical curettage" },
                ]
              },
              { icon:"🏥", procedure:"Ablation & Procedures", color:"blue",
                approaches:[
                  { label:"Endometrial Ablation",  cpt:"58563",       note:"NovaSure, Thermachoice" },
                  { label:"IUD Insertion",         cpt:"58300",       note:"+ device J-code (J7298–J7304)" },
                  { label:"IUD Removal",           cpt:"58301",       note:"Removal only" },
                  { label:"Vulvar Biopsy",         cpt:"56605–56606", note:"First + add'l lesion" },
                ]
              },
              { icon:"🩹", procedure:"Preventive & E/M",    color:"green",
                approaches:[
                  { label:"New Preventive (18–39)", cpt:"99385",      note:"Age-appropriate screening" },
                  { label:"Est. Preventive (40+)",  cpt:"99396",      note:"Well woman visit" },
                  { label:"Problem Office Visit",  cpt:"99213–99215", note:"MDM-based or time-based" },
                  { label:"Same-Day E/M",          cpt:"99213 + -25", note:"Modifier 25 required" },
                ]
              },
            ].map(({ icon, procedure, color, approaches }) => (
              <div className={`gyn-proc-card gyn-proc-card--${color} reveal`} key={procedure}>
                <div className="gyn-proc-header">
                  <span className="gyn-proc-icon" aria-hidden="true">{icon}</span>
                  <h3>{procedure}</h3>
                </div>
                <div className="gyn-proc-approaches">
                  {approaches.map(({ label, cpt, note }) => (
                    <div className="gyn-approach" key={cpt}>
                      <div className="gyn-approach-top">
                        <span className="gyn-approach-label">{label}</span>
                        <span className="gyn-approach-cpt">{cpt}</span>
                      </div>
                      <span className="gyn-approach-note">{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES ══════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Gynecology Billing Challenges</p>
          <h2 className="reveal">Complex Gynecology Billing — Expertly Handled</h2>
          <p className="gyn-caps-sub reveal">Gynecology billing combines surgical approach coding, 90-day global period management, preventive vs. E/M coding rules, IUD device codes, and contraceptive coverage compliance — each with payer-specific variations.</p>

          <div className="gyn-caps-grid">
            {[
              { icon:"🔬", n:"01", h:"Diagnostic vs. Operative Procedure Coding",    t:"When a diagnostic procedure is converted to an operative procedure during the same session, only the operative code is billed — not both. Diagnostic hysteroscopy (58555) cannot be billed on the same day as operative hysteroscopy (58558). We review every operative report to determine the final procedure performed and apply the correct single code." },
              { icon:"📅", n:"02", h:"90-Day Global Period Management",               t:"Most gynecological surgeries carry a 90-day global period — post-operative visits within the global are not separately billable. Unrelated E/M visits require modifier 24; unrelated procedures require modifier 79. We track global period start and end dates for every surgery and apply correct modifiers on all post-operative encounters." },
              { icon:"🔭", n:"03", h:"Laparoscopic vs. Open Approach Accuracy",      t:"Laparoscopic and open approaches for the same procedure have distinct CPT codes — each approach family must match the operative documentation. When a laparoscopic procedure is converted to open during the same session, the correct code depends on how much laparoscopic work was completed. We verify the documented surgical approach before code selection on every case." },
              { icon:"🩺", n:"04", h:"IUD Device Code & Prior Authorization",         t:"IUD insertion is billed with both a procedure code (CPT 58300) and a device HCPCS code (J7298 Mirena, J7301 Kyleena, J7302 Liletta, J7304 Paragard). The device code requires prior authorization from most payers under contraceptive coverage rules. We manage IUD device prior authorization, device code selection, and insertion billing as a complete service." },
              { icon:"👩‍⚕️", n:"05", h:"Preventive vs. Problem Visit Coding",         t:"Preventive gynecology visits (99381–99397) and problem-focused E/M visits (99202–99215) have different coverage rules, patient cost-sharing implications, and documentation requirements. When both are performed on the same date, modifier 25 is required on the E/M. Incorrect coding — billing preventive when a problem was addressed — generates payer audits." },
              { icon:"🧪", n:"06", h:"Colposcopy + Biopsy Add-On Code Capture",       t:"Colposcopy coding is component-based — base colposcopy (57452 or 57454) with additional codes for each biopsy, LEEP, or ECC performed. Failing to capture all billable components means systematic underpayment on every colposcopy with interventions. We identify all separately billable components documented in the procedure record." },
            ].map(({ icon, n, h, t }) => (
              <article className="gyn-cap-card reveal" key={n}>
                <div className="gyn-cap-top">
                  <div className="gyn-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="gyn-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your Gynecology Revenue System</h2>
          <p className="gyn-process-intro reveal">End-to-end gynecology billing infrastructure from surgical prior authorization through operative report approach coding and 90-day global period management.</p>
          <div className="gyn-steps">
            {[
              { n:"01", h:"Prior Authorization — Surgical Procedures",    t:"Submit prior authorization for hysteroscopy, laparoscopy, hysterectomy, endometrial ablation, and IUD devices — with diagnosis, symptom documentation, and failed conservative treatment" },
              { n:"02", h:"Operative Report Review & Approach Coding",    t:"Review every operative report for documented approach (diagnostic/operative, laparoscopic/open/vaginal) and convert to approach-specific CPT code" },
              { n:"03", h:"Global Period Tracking & Modifier Application", t:"Track 90-day global period for every gynecological surgery — apply modifiers 24/58/79 on unrelated services, new problems, and staged procedures" },
              { n:"04", h:"IUD Device Code & Contraceptive Coverage",     t:"J-code device selection (J7298–J7304), contraceptive prior authorization, and ACA preventive coverage compliance for all IUD claims" },
              { n:"05", h:"Preventive + Problem E/M Modifier 25",         t:"Preventive (99381–99397) + same-day E/M modifier 25 applied when separately identifiable problem is documented at the same encounter" },
              { n:"06", h:"Denial Management & Surgical Appeals",         t:"Root-cause gynecology denial analysis, approach-coding appeals with operative documentation, and global period compliance support" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="gyn-step reveal" key={n}>
                <div className="gyn-step-aside">
                  <div className="gyn-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="gyn-step-conn" />}
                </div>
                <div className="gyn-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>
          <div className="gyn-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="gyn-process-note">For gynecology &amp; OB-GYN practices · Surgical billing experts · All 50 states</span>
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="gyn-ba-grid">
            {[
              { label:"Clean Claim Rate",          num:"97",  unit:"%",   green:true,  desc:"first-pass acceptance" },
              { label:"Approach Code Accuracy",    num:"100", unit:"%",   green:false, desc:"lap vs open vs vaginal correct" },
              { label:"A/R Days Reduction",        num:"30",  unit:"%↓",  green:true,  desc:"accounts receivable days" },
              { label:"Global Period Denials",     num:"$0",  unit:"",    green:false, desc:"90-day global tracked per surgery" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`gyn-ba-card${green ? " gyn-ba-card--green" : ""} reveal`} key={label}>
                <div className="gyn-ba-label">{label}</div>
                <div className="gyn-ba-num">{num}<span>{unit}</span></div>
                <div className="gyn-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Gynecology Revenue Infrastructure Partner</h2>
          <p className="gyn-why-intro reveal">Our gynecology billing team understands approach-specific CPT coding, 90-day global period rules, diagnostic vs. operative conversion, IUD device codes, preventive care billing, and the modifier 24/25/58/79 compliance rules that determine payment for every gynecological encounter.</p>
          <div className="gyn-why-grid">
            {[
              { icon:"🔬", n:"01", h:"Surgical Approach Coding Specialists",    t:"Diagnostic vs. operative, laparoscopic vs. open vs. vaginal — approach-matched CPT code from operative report on every gynecological surgery." },
              { icon:"📅", n:"02", h:"90-Day Global Period Management",          t:"Global period tracked from surgery date — modifiers 24/58/79 applied on all unrelated encounters within the 90-day window." },
              { icon:"🩺", n:"03", h:"IUD Device Code & Authorization",          t:"J7298–J7304 device code selection, ACA contraceptive coverage authorization, and 58300/58301 procedure coding managed together." },
              { icon:"👩‍⚕️", n:"04", h:"Preventive vs. Problem E/M Expertise",   t:"99381–99397 preventive + modifier 25 on same-day problem E/M — payer-specific preventive rules applied on every encounter." },
              { icon:"🔭", n:"05", h:"Colposcopy Component Capture",            t:"57452–57460 base + all biopsy, LEEP, and ECC add-ons captured from procedure record — no component missed on any colposcopy claim." },
              { icon:"🏅", n:"06", h:"AAPC-Certified Gynecology Coders",        t:"Every specialist holds AAPC certification with dedicated gynecological surgery and E/M training. AMA and CMS guidelines on every claim." },
              { icon:"🔐", n:"07", h:"Surgical Prior Authorization",            t:"Complete gynecological surgery authorization packages — diagnosis, failed conservative treatment, and imaging documentation submitted before scheduling." },
              { icon:"🔍", n:"08", h:"Transparent Gynecology Reporting",        t:"Procedure-level revenue reports, approach code accuracy tracking, global period compliance monitoring, and denial trend analysis." },
            ].map(({ icon, n, h, t }) => (
              <div className="gyn-why-card reveal" key={n}>
                <div className="gyn-why-top">
                  <div className="gyn-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="gyn-why-num">{n}</span>
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
          <div className="gyn-faq-layout">
            <div className="gyn-faq-intro reveal">
              <p>Direct answers about gynecological surgical coding, global periods, IUD billing, preventive care, and colposcopy components. <Link href="/specialties/" className="gyn-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="gyn-faq-list">
              {[
                ["How do you handle gynecological surgical procedure coding?","Gynecological surgical procedures require correct selection between diagnostic and operative approaches. For example, diagnostic hysteroscopy (CPT 58555) has a different code from operative hysteroscopy with biopsy (CPT 58558), polypectomy (CPT 58558), or lysis of intrauterine adhesions (CPT 58559). When a diagnostic procedure is converted to an operative procedure during the same session, only the operative code is billed. We review every operative report to select the correct approach-specific code."],
                ["How do you manage the global period for gynecological surgeries?","Most gynecological surgical procedures carry a 90-day global period during which post-operative visits are included in the surgical fee and cannot be billed separately. Unrelated E/M visits during the global period require modifier 24; an unrelated surgical procedure requires modifier 79; staged procedures use modifier 58. We track global period start and end dates for every gynecological surgery and apply correct modifiers on all encounters during the global period."],
                ["How do you bill preventive gynecology visits and Pap smears?","Preventive gynecology visits use age-appropriate E/M codes (99381–99397 for new/established patients). Pap smear collection is billed using CPT 99000 (specimen handling) or as part of the preventive visit code depending on payer rules. Cervical cytology interpretation uses separate lab codes (88142–88155). When a significant problem is addressed during a preventive visit, modifier 25 applies to the E/M for the problem-focused service. We navigate payer-specific preventive billing rules on every gynecology claim."],
                ["How do you handle IUD insertion and removal billing?","IUD insertion is billed using CPT 58300 for insertion plus a separate HCPCS code for the device itself (J7298 for Mirena, J7301 for Kyleena, J7302 for Liletta, J7304 for Paragard). IUD removal uses CPT 58301 (removal of IUD) — with a separate code for removal and reinsertion (CPT 58300) on the same date if applicable. The device code requires prior authorization from most payers. We manage the complete IUD billing cycle including device code, insertion code, and prior authorization for contraceptive coverage."],
                ["How do you code laparoscopic vs. open gynecological procedures?","Laparoscopic and open approaches for the same gynecological procedure have distinct CPT codes — laparoscopic hysterectomy (58541–58544) vs. abdominal hysterectomy (58150–58240) vs. vaginal hysterectomy (58260–58294). The approach must match the operative report. When a laparoscopic procedure is converted to open during the same session, modifier 22 or the open procedure code applies depending on circumstances. We verify the documented surgical approach in every operative report before code selection."],
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
        heading="Maximize Your Gynecology Practice Revenue"
        body="Schedule a free gynecology billing assessment and discover how approach-specific coding, global period management, and IUD device billing can significantly improve your practice collections."
        ctaLabel="Schedule Revenue Assessment"
        formId="gynAssessmentForm"
        checklist={[
          "Surgical approach code accuracy audit — lap vs open vs vaginal",
          "Global period management review — modifier 24/58/79 compliance",
          "IUD device code and contraceptive prior auth gap analysis",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For gynecology & OB-GYN practices · Surgical billing experts · All 50 states served"
      />
    </main>
  );
}
