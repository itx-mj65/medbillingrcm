import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function ImmunologyBillingPage() {
  return (
    <main className="sp-page immuno-page" id="main">

      <SpecialtyHero
        eyebrow="Allergy & Immunology Revenue Infrastructure"
        heading="Immunology Billing Services"
        intro="Medbilling RCM provides specialized immunology billing services covering allergy testing (CPT 95004–95078), allergen immunotherapy administration (CPT 95115–95199), biologic infusion therapy (HCPCS J-codes), IVIG billing, and prior authorization management — ensuring accurate claims and maximum reimbursements for allergy and immunology practices."
        badge="AAPC Certified · Biologic J-Code Experts · CCI Compliant · 50 States"
        stats={[
          { num: "97%",  label: "Clean Claim Rate" },
          { num: "30%",  label: "Reduction in A/R Days" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ BIOLOGIC J-CODE SHOWCASE ════════════════════════
          UNIQUE DESIGN: A drug-pairing reference panel — shows
          top biologics with their J-codes, injection CPT, and
          prior auth status. Glowing shield cards with immunoShield
          animation. No other specialty page has drug reference cards.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="services">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Biologic & J-Code Expertise</p>
          <h2 className="reveal">Biologic Drug Billing — J-Code to Reimbursement</h2>
          <p className="immuno-biol-sub reveal">Biologic therapies require HCPCS J-codes for the drug plus CPT administration codes plus prior authorization — all managed simultaneously. Our team handles the complete biologic billing cycle for every approved drug in your formulary.</p>

          <div className="immuno-biol-grid">
            {[
              { drug:"Omalizumab (Xolair)",    jcode:"J2357", admin:"96401", condition:"Asthma, CIU",         auth:"✅ Required", class:"Anti-IgE" },
              { drug:"Dupilumab (Dupixent)",   jcode:"J3385", admin:"96401", condition:"Atopic derm, asthma",  auth:"✅ Required", class:"IL-4/IL-13" },
              { drug:"Mepolizumab (Nucala)",   jcode:"J0222", admin:"96401", condition:"Severe eosinophilic",  auth:"✅ Required", class:"Anti-IL-5" },
              { drug:"Benralizumab (Fasenra)", jcode:"J0517", admin:"96401", condition:"Eosinophilic asthma",  auth:"✅ Required", class:"Anti-IL-5Rα" },
              { drug:"IVIG (Various brands)",  jcode:"J1459+", admin:"96365", condition:"CVID, immunodeficiency",auth:"✅ Required", class:"Immunoglobulin" },
              { drug:"Canakinumab (Ilaris)",   jcode:"J0638", admin:"96401", condition:"Autoinflammatory",     auth:"✅ Required", class:"Anti-IL-1β" },
            ].map(({ drug, jcode, admin, condition, auth, class: cls }) => (
              <div className="immuno-biol-card reveal" key={drug}>
                <div className="immuno-biol-shield" aria-hidden="true">🛡️</div>
                <h3 className="immuno-biol-drug">{drug}</h3>
                <div className="immuno-biol-class">{cls}</div>
                <div className="immuno-biol-codes">
                  <span className="immuno-code immuno-code--j">{jcode}</span>
                  <span className="immuno-code-plus">+</span>
                  <span className="immuno-code immuno-code--cpt">{admin}</span>
                </div>
                <div className="immuno-biol-condition">{condition}</div>
                <div className="immuno-biol-auth">{auth}</div>
              </div>
            ))}
          </div>

          <div className="immuno-biol-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
            <span className="immuno-biol-note">We bill every FDA-approved biologic in allergy and immunology — not just the most common ones.</span>
          </div>
        </div>
      </section>

      {/* ═══ ALLERGY TESTING + IMMUNOTHERAPY CODING ══════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Core Allergy Billing Services</p>
          <h2 className="reveal">Allergy Testing & Immunotherapy — Billed Precisely</h2>
          <p className="immuno-core-sub reveal">Allergy and immunology billing spans percutaneous testing, intradermal testing, antigen preparation, and immunotherapy administration — each with specific CPT codes, unit billing rules, and CCI edits that determine correct reimbursement.</p>

          <div className="immuno-core-grid">
            {[
              { icon:"💉", n:"01", h:"Allergy Skin Testing (CPT 95004–95078)",   t:"Percutaneous tests (95004), intradermal tests (95024), and patch tests (95044) are billed per test with unit reporting. Maximum tests per visit vary by payer. We verify payer-specific test limits, apply correct CPT codes based on test type, and ensure per-unit billing accuracy on every testing claim." },
              { icon:"🌿", n:"02", h:"Allergen Immunotherapy (CPT 95115–95199)",  t:"Immunotherapy injection CPT 95115 (single injection) and 95117 (two or more injections) report administration. Antigen preparation (CPT 95165) reports provision of allergen extracts. Both services are billed together when the practice provides full service. Allergy testing and immunotherapy are generally not billed on the same date without specific documentation of additional allergens." },
              { icon:"🧬", n:"03", h:"Biologic Infusions (J-codes + 96365–96368)",t:"Biologic administration requires both a HCPCS J-code for the drug and an infusion CPT code for administration. IV infusion therapy uses CPT 96365 (first hour) and 96366 (additional hours). Subcutaneous biologics use CPT 96401. We manage J-code selection, dose unit billing, waste billing where applicable, and concurrent infusion rules." },
              { icon:"💊", n:"04", h:"IVIG Therapy Billing",                       t:"IVIG is billed using J1459 (or brand-specific J-codes) for the drug product plus infusion administration codes. IVIG requires prior authorization with documentation of specific indications (CVID, ITP, Guillain-Barré). We manage IVIG authorization, dosing documentation, infusion time tracking, and payer-specific coverage rules." },
              { icon:"📋", n:"05", h:"Prior Authorization — Biologics & Immunotherapy",t:"Biologic prior authorizations require failed step therapy documentation, diagnostic test results, and severity scoring. Immunotherapy plans require positive skin test results and failed avoidance documentation. We manage every authorization with complete clinical packages, renewal tracking, and peer-to-peer coordination." },
              { icon:"25",  n:"06", h:"Modifier 25 — E/M with Same-Day Procedures", t:"Modifier 25 is required when a significant E/M service is performed on the same date as allergy testing or immunotherapy injection. We apply Modifier 25 only when documentation supports a distinct, separately identifiable evaluation — protecting compliance while capturing earned revenue." },
            ].map(({ icon, n, h, t }) => (
              <article className="immuno-cap-card reveal" key={n}>
                <div className="immuno-cap-top">
                  <div className="immuno-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="immuno-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your Immunology Revenue System</h2>
          <p className="immuno-process-intro reveal">End-to-end allergy and immunology billing infrastructure — from insurance verification and biologic prior authorization through J-code submission and denial management.</p>

          <div className="immuno-steps">
            {[
              { n:"01", h:"Insurance Verification & Benefits Check",   t:"Confirm allergy testing coverage, immunotherapy benefits, biologic formulary, infusion site requirements, and prior authorization requirements before every service" },
              { n:"02", h:"Prior Authorization — Biologics & Immunotherapy", t:"Submit complete authorization packages for biologics (failed step therapy, severity scores, diagnostic results) and immunotherapy plans (skin test results, avoidance failure)" },
              { n:"03", h:"CPT & HCPCS J-Code Coding",                t:"AAPC-certified coders assign allergy testing CPT codes (95004–95078), immunotherapy codes (95115–95199), J-codes for biologics, and infusion administration codes (96365–96368)" },
              { n:"04", h:"CCI Edit Scrub & Modifier Application",     t:"Verify CCI edit compliance for same-day testing and immunotherapy, apply Modifier 25 for qualifying E/M services, and check unit billing accuracy on all per-test and per-dose claims" },
              { n:"05", h:"Electronic Claim Submission",               t:"Clean claims submitted electronically with ICD-10 specificity verified, J-code drug quantities confirmed, and medical necessity linked before every submission" },
              { n:"06", h:"Denial Management & AR Recovery",          t:"Root-cause denial analysis, authorization appeals, peer-to-peer coordination support, and systematic AR follow-up on all outstanding immunology claims" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="immuno-step reveal" key={n}>
                <div className="immuno-step-aside">
                  <div className="immuno-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="immuno-step-conn" />}
                </div>
                <div className="immuno-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>

          <div className="immuno-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="immuno-process-note">For allergy &amp; immunology practices · AAPC-certified coders · All 50 states</span>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="immuno-ba-grid">
            {[
              { label:"Clean Claim Rate",    num:"97",   unit:"%",  green:true,  desc:"first-pass claim acceptance" },
              { label:"A/R Days Reduction",  num:"30",   unit:"%↓", green:false, desc:"accounts receivable days" },
              { label:"Collection Rate",     num:"90",   unit:"%",  green:true,  desc:"average collections" },
              { label:"Biologic Auth Rate",  num:"95",   unit:"%",  green:false, desc:"prior auth approvals first submission" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`immuno-ba-card${green ? " immuno-ba-card--green" : ""} reveal`} key={label}>
                <div className="immuno-ba-label">{label}</div>
                <div className="immuno-ba-num">{num}<span>{unit}</span></div>
                <div className="immuno-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDBILLING ══════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Immunology Revenue Infrastructure Partner</h2>
          <p className="immuno-why-intro reveal">Our immunology billing team understands allergy testing unit billing, immunotherapy CPT codes, biologic J-code pairing, IVIG authorization requirements, and the CCI bundling rules that govern same-day testing and treatment encounters.</p>
          <div className="immuno-why-grid">
            {[
              { icon:"🛡️", n:"01", h:"Biologic J-Code Specialists",             t:"Every FDA-approved biologic billed with correct J-code, dose unit calculation, and concurrent infusion rules — including omalizumab, dupilumab, mepolizumab, and IVIG." },
              { icon:"💉", n:"02", h:"Allergy Testing Unit Billing",             t:"Per-test unit reporting for CPT 95004–95078 with payer-specific test limit compliance and CCI edit verification on every testing claim." },
              { icon:"🌿", n:"03", h:"Immunotherapy Complete Service Billing",   t:"95115/95117 (injection) + 95165 (antigen preparation) — both components billed correctly when the practice provides complete service." },
              { icon:"🔐", n:"04", h:"Prior Auth — Biologic Step Therapy",       t:"Complete authorization packages with failed step therapy documentation, diagnostic results, and severity scoring for all biologic treatments." },
              { icon:"🏅", n:"05", h:"AAPC-Certified Immunology Coders",        t:"Every specialist holds AAPC certification with dedicated allergy and immunology training. CMS and AMA guidelines applied on every claim." },
              { icon:"25",  n:"06", h:"Modifier 25 Compliance",                 t:"Modifier 25 applied only when documentation supports a distinct E/M — protecting compliance while capturing earned revenue on same-day encounters." },
              { icon:"💊", n:"07", h:"IVIG & Infusion Therapy Billing",         t:"Complete IVIG billing — J1459/brand J-codes, infusion time tracking, 96365/96366 coding, waste billing, and prior authorization support." },
              { icon:"🔍", n:"08", h:"Transparent Immunology Reporting",        t:"Service-level revenue reports, biologic authorization tracking, denial trend analysis, and AR aging by procedure and payer." },
            ].map(({ icon, n, h, t }) => (
              <div className="immuno-why-card reveal" key={n}>
                <div className="immuno-why-top">
                  <div className="immuno-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="immuno-why-num">{n}</span>
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
          <div className="immuno-faq-layout">
            <div className="immuno-faq-intro reveal">
              <p>Direct answers about allergy testing billing, immunotherapy coding, biologic J-codes, prior authorization, and Modifier 25. <Link href="/specialties/" className="immuno-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="immuno-faq-list">
              {[
                ["How do you bill allergy testing and immunotherapy on the same date?",
                 "CPT codes for allergy testing (95004–95078) and immunotherapy (95115–95199) are generally not reported on the same date of service unless the physician provides allergy immunotherapy and testing for additional allergens on the same day. Allergen potency testing prior to immunotherapy administration is an inherent component of immunotherapy and is not separately reportable. We verify CCI edits and payer-specific rules before billing both services on the same date to prevent bundling denials."],
                ["How do you handle J-code billing for biologic infusions (dupilumab, omalizumab, mepolizumab)?",
                 "Biologic drugs administered in-office require HCPCS J-codes for the drug (J2357 for omalizumab, J3385 for dupilumab) plus infusion administration CPT codes (96365–96368 for IV infusion, 96401 for subcutaneous injection). Prior authorization is required for most biologics with clinical documentation of failed step therapy. We manage the complete biologic billing cycle — prior authorization, J-code selection, administration coding, and copay assistance program coordination."],
                ["How do you apply Modifier 25 in allergy and immunology billing?",
                 "Modifier 25 is required when a significant, separately identifiable E/M service is performed on the same date as allergy testing or immunotherapy injection. Without Modifier 25, payers bundle the E/M into the procedure fee. We apply Modifier 25 only when documentation supports a distinct, separately identifiable evaluation — protecting compliance while capturing earned revenue on every qualifying encounter."],
                ["How do you manage prior authorization for immunotherapy and biologic treatments?",
                 "Allergen immunotherapy plans require documentation of positive skin test results, failed avoidance measures, and physician-documented treatment rationale. Biologic therapies require failed step therapy documentation (typically failed antihistamines and inhaled corticosteroids), diagnostic test results, and severity scoring. We submit complete authorization packages, track renewal timelines, manage peer-to-peer coordination, and maintain payer-specific authorization requirements for all immunotherapy and biologic treatments."],
                ["What ICD-10 codes do you use for allergy and immunology billing?",
                 "Common immunology ICD-10 codes include J30.1 (allergic rhinitis due to pollen), J30.9 (unspecified allergic rhinitis), J45.909 (unspecified asthma uncomplicated), L20.9 (atopic dermatitis unspecified), D83.9 (common variable immunodeficiency), L50.0 (allergic urticaria), and T78.40XA (allergy, unspecified, initial encounter). We select the most specific ICD-10 code for every encounter and link testing and treatment codes to diagnoses that satisfy payer medical necessity criteria."],
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
        heading="Maximize Your Allergy & Immunology Practice Revenue"
        body="Schedule a free immunology billing assessment and discover how accurate biologic J-code billing, allergy testing unit coding, and prior authorization management can significantly improve your practice collections."
        ctaLabel="Schedule Revenue Assessment"
        formId="immunoAssessmentForm"
        checklist={[
          "Biologic J-code audit — J2357, J3385, J0222, J1459 accuracy",
          "Allergy testing unit billing review — CPT 95004–95078 compliance",
          "Modifier 25 capture rate analysis — same-day E/M + procedure",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For allergy & immunology practices · AAPC-certified coders · All 50 states served"
      />
    </main>
  );
}
