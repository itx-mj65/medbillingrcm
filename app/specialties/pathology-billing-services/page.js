import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function PathologyBillingPage() {
  return (
    <main className="sp-page path-page" id="main">
      <SpecialtyHero
        eyebrow="Pathology Revenue Infrastructure"
        heading="Pathology Billing Services"
        intro="Medbilling RCM provides specialized pathology billing services covering surgical pathology CPT codes (88300–88309), cytopathology (88104–88160), immunohistochemistry (88342–88344), molecular pathology (81161–81408), technical and professional component split billing (modifier 26/TC), and FISH testing — ensuring accurate claims and maximum reimbursements for pathology practices and hospital labs."
        badge="AAPC Certified · 26/TC Split Experts · Molecular Pathology · 50 States"
        stats={[
          { num: "97%",  label: "Clean Claim Rate" },
          { num: "30%",  label: "Reduction in A/R Days" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* UNIQUE: Microscope specimen viewer — surgical pathology levels shown
          as specimen slides with complexity indicators */}
      <section className="sp-sec sp-sec--paper reveal" id="services">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Surgical Pathology Levels</p>
          <h2 className="reveal">Pathology CPT Levels — Complexity-Driven Code Selection</h2>
          <p className="path-spec-sub reveal">Surgical pathology CPT codes 88300–88309 are selected by examination complexity, not specimen type. Our pathology-certified coders review every pathologist's report to confirm the correct level — preventing systematic downcoding and compliance-risk upcoding.</p>

          <div className="path-specimen-grid">
            {[
              { cpt:"88300", level:"Level I",   color:"blue",  exam:"Gross examination only",               examples:"Simple tissue specimens, gross only",        freq:"Rarely billed — most specimens require microscopy" },
              { cpt:"88302", level:"Level II",  color:"blue",  exam:"Gross & microscopic simple",           examples:"Hernia sac, vessels, foreign body",           freq:"Simple anatomical specimens" },
              { cpt:"88304", level:"Level III", color:"green", exam:"Gross & microscopic — moderate",       examples:"Cholecystitis, appendix, fallopian tube",      freq:"Common outpatient specimens" },
              { cpt:"88305", level:"Level IV",  color:"green", exam:"Gross & microscopic — most specimens", examples:"Biopsies, polyps, skin excisions, cervix",     freq:"Most frequently billed pathology code" },
              { cpt:"88307", level:"Level V",   color:"navy",  exam:"Complex — multiple tissue types",       examples:"Prostate, bladder, uterus with neoplasm",     freq:"Oncology and complex resections" },
              { cpt:"88309", level:"Level VI",  color:"gold",  exam:"Extremely complex neoplasm",            examples:"Total/radical resection for neoplasm",        freq:"Highest complexity — requires documentation" },
            ].map(({ cpt, level, color, exam, examples, freq }) => (
              <div className={`path-spec-card path-spec-card--${color} reveal`} key={cpt}>
                <div className="path-spec-top">
                  <span className="path-spec-cpt">{cpt}</span>
                  <span className={`path-spec-level path-spec-level--${color}`}>{level}</span>
                </div>
                <h3>{exam}</h3>
                <p className="path-spec-examples">{examples}</p>
                <div className="path-spec-freq">{freq}</div>
              </div>
            ))}
          </div>

          <div className="path-modifier-row reveal">
            <div className="path-mod-card">
              <span className="path-mod-badge">26</span>
              <div>
                <strong>Professional Component</strong>
                <p>Pathologist interprets — billed by independent pathologist when technical performed by hospital/lab</p>
              </div>
            </div>
            <div className="path-mod-card">
              <span className="path-mod-badge path-mod-badge--green">TC</span>
              <div>
                <strong>Technical Component</strong>
                <p>Lab processing — billed by hospital/independent lab when interpretation billed separately by pathologist</p>
              </div>
            </div>
            <div className="path-mod-card">
              <span className="path-mod-badge path-mod-badge--gold">Global</span>
              <div>
                <strong>No Modifier (Global)</strong>
                <p>Both technical and professional performed by same entity — billed as complete service</p>
              </div>
            </div>
          </div>

          <div className="path-spec-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Pathology Billing Challenges</p>
          <h2 className="reveal">Complex Pathology Billing — Expertly Handled</h2>
          <p className="path-caps-sub reveal">Pathology billing spans gross examination coding, IHC antibody counting, molecular pathology tiers, FISH probe documentation, and TC/26 split billing — each requiring specific documentation to support the billed code.</p>

          <div className="path-caps-grid">
            {[
              { icon:"🔬", n:"01", h:"Surgical Pathology Level Selection (88300–88309)", t:"Level selection is based on examination complexity, not specimen type. The pathologist's report must support the complexity level billed. 88305 is the most commonly billed code — but 88307 requires documentation of additional complexity. We review every pathology report before code selection to ensure level accuracy." },
              { icon:"🧫", n:"02", h:"Immunohistochemistry — Antibody Count Accuracy",  t:"IHC is billed using CPT 88342 for the first antibody and 88344 for each additional antibody per specimen. The number billed must match the number of antibodies used per the pathology report. Overbilling antibody counts is a top IHC audit trigger. We verify antibody count against staining documentation on every IHC claim." },
              { icon:"🧬", n:"03", h:"Molecular Pathology Tier Coding (81161–81408)",   t:"Molecular pathology codes are tiered by test complexity. Code selection is gene-specific and methodology-specific — billing the wrong tier is a common and costly error. Many molecular tests require prior authorization. We maintain current molecular code mappings and manage prior auth for high-cost molecular tests." },
              { icon:"🔭", n:"04", h:"FISH Testing — Probe Count Documentation",        t:"FISH is billed using CPT 88365 (single probe) and 88366 (each additional probe). Documentation must identify each specific probe used. FISH is commonly required for oncology diagnosis and chromosomal analysis. We verify probe count, document all probes used, and manage prior authorization for FISH tests." },
              { icon:"⚖️", n:"05", h:"Technical vs. Professional Component Split Billing",t:"When the pathologist is independent from the processing lab, modifier 26 applies to the professional interpretation and TC to the technical processing. Billing the global code when split billing applies — or vice versa — generates denials and compliance risk. We determine the correct billing structure based on employment and facility relationship." },
              { icon:"📋", n:"06", h:"Cytopathology Coding (88104–88160)",              t:"Cytopathology coding covers Pap smears, fine needle aspirations, and fluid cytology. Each specimen type and interpretation method has a distinct CPT code. Cytopathology claims also require correct specimen source documentation and ICD-10 linking. We apply the correct cytopathology code based on specimen type and examination method." },
            ].map(({ icon, n, h, t }) => (
              <article className="path-cap-card reveal" key={n}>
                <div className="path-cap-top">
                  <div className="path-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="path-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your Pathology Revenue System</h2>
          <p className="path-process-intro reveal">End-to-end pathology billing infrastructure from specimen receipt coding through molecular pathology authorization and TC/26 split billing reconciliation.</p>
          <div className="path-steps">
            {[
              { n:"01", h:"Pathologist Report Review & Level Selection",   t:"Review examination complexity in pathologist report — select 88300–88309 level based on documented examination type, not specimen only" },
              { n:"02", h:"TC/26 Split vs. Global Billing Determination",  t:"Verify employment relationship and facility arrangement to determine correct modifier 26, TC, or global code on every claim" },
              { n:"03", h:"IHC Antibody Count Verification",               t:"Match 88342 and 88344 billing to staining documentation — antibody count reconciled against lab records before claim submission" },
              { n:"04", h:"Molecular Pathology & FISH Prior Auth",         t:"Tier code selection for 81161–81408 and probe count for 88365/88366 — with prior authorization managed for high-cost molecular tests" },
              { n:"05", h:"Cytopathology & Specimen Source Coding",        t:"88104–88160 code selection based on specimen type and examination method — ICD-10 linked to correct source documentation" },
              { n:"06", h:"Denial Management & Audit Defense",             t:"Root-cause pathology denial analysis, IHC count appeals, and audit defense for level selection and molecular tier compliance" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="path-step reveal" key={n}>
                <div className="path-step-aside">
                  <div className="path-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="path-step-conn" />}
                </div>
                <div className="path-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>
          <div className="path-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="path-process-note">For pathology practices &amp; hospital labs · AAPC-certified coders · All 50 states</span>
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="path-ba-grid">
            {[
              { label:"Clean Claim Rate",       num:"97",  unit:"%",   green:true,  desc:"first-pass acceptance" },
              { label:"Level Code Accuracy",    num:"100", unit:"%",   green:false, desc:"88300–88309 correct on every claim" },
              { label:"A/R Days Reduction",     num:"30",  unit:"%↓",  green:true,  desc:"accounts receivable days" },
              { label:"IHC Antibody Accuracy",  num:"100", unit:"%",   green:false, desc:"88342/88344 count verified" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`path-ba-card${green ? " path-ba-card--green" : ""} reveal`} key={label}>
                <div className="path-ba-label">{label}</div>
                <div className="path-ba-num">{num}<span>{unit}</span></div>
                <div className="path-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Pathology Revenue Infrastructure Partner</h2>
          <p className="path-why-intro reveal">Our pathology billing team understands surgical pathology level selection, IHC antibody counting, molecular pathology tier coding, FISH probe documentation, and TC/26 split billing — the specific expertise that determines correct payment for every pathology encounter.</p>
          <div className="path-why-grid">
            {[
              { icon:"🔬", n:"01", h:"Surgical Pathology Level Specialists",     t:"Complexity-based 88300–88309 selection from pathologist report review — not specimen defaults that systematically undercode or overcode." },
              { icon:"🧫", n:"02", h:"IHC Antibody Count Accuracy",              t:"88342 first antibody + 88344 each additional — antibody count reconciled against staining records on every IHC claim." },
              { icon:"🧬", n:"03", h:"Molecular Pathology Tier Coding",          t:"Gene-specific and methodology-specific code selection for 81161–81408 with prior auth management for high-cost molecular tests." },
              { icon:"🔭", n:"04", h:"FISH Probe Documentation",                 t:"88365/88366 probe count matched to lab documentation — prior authorization managed for oncology FISH testing." },
              { icon:"⚖️", n:"05", h:"TC/26 Split Billing Expertise",            t:"Employment relationship and facility arrangement determines modifier 26, TC, or global — correctly applied on every pathology claim." },
              { icon:"🏅", n:"06", h:"AAPC-Certified Pathology Coders",         t:"Every specialist holds AAPC certification with dedicated pathology training across surgical, cytopathology, and molecular coding." },
              { icon:"🧪", n:"07", h:"Cytopathology & FNA Coding",               t:"88104–88160 code selection based on specimen source and examination method — Pap smear, FNA, and fluid cytology correctly coded." },
              { icon:"🔍", n:"08", h:"Transparent Pathology Reporting",          t:"Specimen-level revenue tracking, level code distribution analysis, IHC billing performance, and molecular prior auth reporting." },
            ].map(({ icon, n, h, t }) => (
              <div className="path-why-card reveal" key={n}>
                <div className="path-why-top">
                  <div className="path-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="path-why-num">{n}</span>
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
          <div className="path-faq-layout">
            <div className="path-faq-intro reveal">
              <p>Direct answers about surgical pathology levels, TC/26 billing, IHC coding, molecular pathology, and FISH testing. <Link href="/specialties/" className="path-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="path-faq-list">
              {[
                ["How do you select the correct surgical pathology CPT code (88300–88309)?",
                 "Surgical pathology CPT codes 88300–88309 are selected based on the complexity of the pathologist's examination, not the specimen type. CPT 88300 covers gross examination only; 88305 covers most routine tissue examinations; 88307 is for more complex specimens; and 88309 is for the most complex cases. We review the pathologist's report to confirm examination complexity and select the appropriate level code, preventing downcoding from 88305 to 88300 and upcoding from 88305 to 88307 without supporting documentation."],
                ["How do you handle technical vs. professional component billing in pathology?",
                 "When pathology services are split between a hospital or independent lab (technical component, modifier TC) and an independent pathologist (professional component, modifier 26), both must be billed separately. The pathologist bills with modifier 26 for the professional interpretation; the facility bills with modifier TC for the technical processing. When both are performed by the same entity, the global code (no modifier) is billed. We determine the correct billing structure based on employment arrangement and facility relationship before every claim."],
                ["How do you bill immunohistochemistry (IHC) in pathology?",
                 "Immunohistochemistry is billed using CPT 88342 for the first antibody and 88344 for each additional antibody per specimen. Each antibody used must be documented separately. We verify that the number of antibodies billed matches the pathology report, ensure IHC codes are linked to supporting diagnoses, and prevent overbilling by confirming antibody count against staining records on every IHC claim."],
                ["How do you handle molecular pathology billing (CPT 81161–81408)?",
                 "Molecular pathology CPT codes (81161–81408) are tiered by technical complexity of the test methodology. Code selection is determined by the gene analyzed and the type of molecular analysis performed. Many molecular tests require prior authorization with specific diagnosis codes. We maintain current molecular pathology code updates, verify prior auth requirements by payer, and ensure correct genetic marker codes are used on every molecular pathology claim."],
                ["How do you manage billing for FISH testing in pathology?",
                 "Fluorescence in situ hybridization (FISH) testing uses CPT 88365 (single probe) and 88366 (each additional probe). FISH is commonly used for cancer diagnosis and chromosomal analysis. Documentation must identify the specific probe(s) used, the specimen analyzed, and the clinical indication. Prior authorization is frequently required for FISH testing, particularly in oncology contexts. We verify probe count, document all probes used, and manage prior authorization for FISH tests on every applicable claim."],
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
        heading="Maximize Your Pathology Practice Revenue"
        body="Schedule a free pathology billing assessment and discover how accurate level code selection, IHC antibody count accuracy, and TC/26 split billing can significantly improve your practice collections."
        ctaLabel="Schedule Revenue Assessment"
        formId="pathAssessmentForm"
        checklist={[
          "Surgical pathology level code accuracy audit (88300–88309)",
          "IHC antibody count review — 88342/88344 compliance",
          "TC/26 split billing structure verification",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For pathology practices & hospital labs · AAPC-certified coders · All 50 states served"
      />
    </main>
  );
}
