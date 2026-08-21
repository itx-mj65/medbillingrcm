import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function MolecularLabBillingPage() {
  return (
    <main className="sp-page mol-page" id="main">

      <SpecialtyHero
        eyebrow="Molecular Lab Revenue Infrastructure"
        heading="Molecular Lab Billing Services"
        intro="Medbilling RCM provides specialized molecular laboratory billing services covering NGS panel billing, PCR testing, Tier 1 and Tier 2 molecular pathology codes (81161–81408), PAMA-compliant CLFS billing, Medicare LCD coverage mapping, prior authorization management for high-cost genomic tests, and Multianalyte Assays with Algorithmic Analyses (MAAA) billing — ensuring accurate claims and maximum reimbursements for molecular labs and genomics testing facilities."
        badge="AAPC Certified · NGS & PCR Experts · LCD Compliance · 50 States"
        stats={[
          { num: "97%",  label: "Clean Claim Rate" },
          { num: "30%",  label: "Reduction in A/R Days" },
          { num: "90%",  label: "Collection Rate" },
          { num: "50",   label: "States Served" },
        ]}
      />

      {/* ═══ MOLECULAR CODE TIER MAP ═════════════════════════
          UNIQUE DESIGN: A DNA helix-inspired Tier 1 vs Tier 2 
          comparison with specific gene examples. Animated double
          helix spiral on cap cards. No other page has a molecular
          tier decision reference layout.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="codes">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Molecular Pathology Code Tiers</p>
          <h2 className="reveal">Tier 1 vs Tier 2 — Precise Code Selection on Every Gene Test</h2>
          <p className="mol-tier-sub reveal">Molecular pathology CPT codes are split into two tiers. Billing the wrong tier — or using Tier 2 when a Tier 1 code exists for that gene — is a compliance violation and the most common molecular lab billing error.</p>

          <div className="mol-tier-split">
            <div className="mol-tier-col mol-tier-col--tier1 reveal">
              <div className="mol-tier-header">
                <span className="mol-tier-badge mol-tier-badge--1">Tier 1</span>
                <h3>Gene-Specific Codes</h3>
                <p className="mol-tier-range">CPT 81161–81383</p>
              </div>
              <p className="mol-tier-desc">Assigned to specific genes with specific analytical methods. When a Tier 1 code exists for a gene, it <strong>must</strong> be used — Tier 2 is not permitted as an alternative.</p>
              <div className="mol-tier-examples">
                <div className="mol-tier-ex"><span className="mol-ex-code">81211</span><span className="mol-ex-gene">BRCA1/BRCA2 — full sequence</span></div>
                <div className="mol-tier-ex"><span className="mol-ex-code">81245</span><span className="mol-ex-gene">FLT3 — internal tandem duplication</span></div>
                <div className="mol-tier-ex"><span className="mol-ex-code">81270</span><span className="mol-ex-gene">JAK2 — p.Val617Phe</span></div>
                <div className="mol-tier-ex"><span className="mol-ex-code">81304</span><span className="mol-ex-gene">CSTB — trinucleotide repeat</span></div>
                <div className="mol-tier-ex"><span className="mol-ex-code">81288</span><span className="mol-ex-gene">MLH1 — methylation analysis</span></div>
              </div>
              <div className="mol-tier-rule mol-tier-rule--1">Use when gene has a specific Tier 1 CPT code assigned</div>
            </div>

            <div className="mol-tier-divider" aria-hidden="true">
              <div className="mol-helix">
                {[0,1,2,3,4,5,6,7].map(i => (
                  <div className="mol-helix-pair" key={i} style={{ "--helix-i": i }}>
                    <div className="mol-helix-dot mol-helix-dot--a" />
                    <div className="mol-helix-bar" />
                    <div className="mol-helix-dot mol-helix-dot--b" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mol-tier-col mol-tier-col--tier2 reveal">
              <div className="mol-tier-header">
                <span className="mol-tier-badge mol-tier-badge--2">Tier 2</span>
                <h3>Complexity-Based Codes</h3>
                <p className="mol-tier-range">CPT 81400–81408</p>
              </div>
              <p className="mol-tier-desc">Assigned by analytical complexity — used for genes not listed in Tier 1. Eight levels of complexity determine the correct code, not gene identity.</p>
              <div className="mol-tier-examples">
                <div className="mol-tier-ex"><span className="mol-ex-code">81400</span><span className="mol-ex-gene">Level 1 — single nucleotide variant</span></div>
                <div className="mol-tier-ex"><span className="mol-ex-code">81402</span><span className="mol-ex-gene">Level 3 — deletion/duplication</span></div>
                <div className="mol-tier-ex"><span className="mol-ex-code">81404</span><span className="mol-ex-gene">Level 5 — sequence analysis</span></div>
                <div className="mol-tier-ex"><span className="mol-ex-code">81406</span><span className="mol-ex-gene">Level 7 — duplication/deletion variants</span></div>
                <div className="mol-tier-ex"><span className="mol-ex-code">81408</span><span className="mol-ex-gene">Level 9 — full sequence analysis</span></div>
              </div>
              <div className="mol-tier-rule mol-tier-rule--2">Use only when NO Tier 1 code exists for the specific gene</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES ══════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Molecular Lab Billing Challenges</p>
          <h2 className="reveal">Complex Molecular Lab Billing — Expertly Handled</h2>
          <p className="mol-caps-sub reveal">Molecular lab billing involves Tier 1/Tier 2 code selection, NGS panel codes, PAMA fee schedule compliance, Medicare LCD coverage mapping, high-cost genomic test prior authorization, and proprietary MAAA billing — each with distinct documentation requirements.</p>

          <div className="mol-caps-grid">
            {[
              { icon:"🧬", n:"01", h:"Tier 1 vs Tier 2 Code Selection",           t:"Tier 1 codes (81161–81383) are gene-specific; Tier 2 codes (81400–81408) are complexity-based for genes not listed in Tier 1. Using Tier 2 when Tier 1 exists is a compliance violation. We maintain current CPT mappings for every gene test and verify Tier assignment before every molecular pathology claim." },
              { icon:"🔬", n:"02", h:"NGS Panel Code Selection & Prior Auth",      t:"NGS panels use specific panel CPT codes (81445–81455) or individual gene codes. Prior authorization is required by most payers. Documentation must include clinical indication, panel gene list, and reporting format. We manage NGS panel code selection, prior authorization packages, and medical necessity documentation for every panel." },
              { icon:"📋", n:"03", h:"Medicare LCD Coverage Mapping",              t:"MACs publish LCDs specifying which molecular tests are covered and which ICD-10 codes qualify. Non-covered tests require ABN before testing. We map every molecular test to the applicable LCD, verify covered diagnosis codes, and issue ABNs for tests lacking Medicare LCD coverage — preventing uncollectable balances." },
              { icon:"💰", n:"04", h:"PAMA CLFS Molecular Rate Compliance",       t:"Molecular tests are reimbursed under the PAMA Clinical Lab Fee Schedule with rates based on weighted median private payer data. High-cost molecular tests are subject to significant PAMA rate adjustments. We verify PAMA-compliant coding and track CLFS rate updates for all molecular pathology codes on every Medicare molecular claim." },
              { icon:"🔮", n:"05", h:"MAAA & PLA Code Billing",                   t:"Multianalyte Assays with Algorithmic Analyses (MAAAs) and Proprietary Laboratory Analyses (PLAs) use unique identifying codes that differ from standard molecular pathology codes. Using standard CPT codes for proprietary tests — or vice versa — generates claim denials. We maintain current MAAA and PLA code lists and verify code accuracy on every proprietary test." },
              { icon:"🔐", n:"06", h:"High-Cost Genomic Test Prior Authorization", t:"Whole exome sequencing, comprehensive hereditary cancer panels, and pharmacogenomic panels require prior authorization from commercial payers with diagnosis documentation, prior treatment history, and family history for hereditary panels. We manage the complete authorization workflow, including peer-to-peer coordination when initial authorizations are denied." },
            ].map(({ icon, n, h, t }) => (
              <article className="mol-cap-card reveal" key={n}>
                <div className="mol-cap-top">
                  <div className="mol-cap-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="mol-cap-num">{n}</span>
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
          <h2 className="reveal">How We Engineer Your Molecular Lab Revenue System</h2>
          <p className="mol-process-intro reveal">End-to-end molecular lab billing infrastructure from LCD coverage mapping and prior authorization through Tier code selection and PAMA-compliant claim submission.</p>
          <div className="mol-steps">
            {[
              { n:"01", h:"LCD Coverage Mapping & ABN Management",        t:"Map every molecular test to applicable MAC LCD — verify covered diagnosis codes and issue ABN for non-covered tests before specimen collection" },
              { n:"02", h:"Prior Authorization — NGS & Genomic Panels",   t:"Submit authorization requests with clinical indication, panel gene list, diagnosis, and family history documentation for high-cost genomic tests" },
              { n:"03", h:"Tier 1 vs Tier 2 Code Assignment",             t:"Verify current CPT Tier assignment for every gene tested — apply Tier 1 code where it exists; use Tier 2 complexity level only when no Tier 1 code applies" },
              { n:"04", h:"NGS Panel & MAAA Code Selection",              t:"Select panel-specific CPT codes (81445–81455) for NGS panels; MAAA/PLA codes for proprietary algorithmic tests — no standard CPT substitution" },
              { n:"05", h:"PAMA-Compliant CLFS Claim Submission",         t:"CLFS rate-matched CPT/HCPCS codes on every Medicare molecular claim — verified against current PAMA fee schedule before submission" },
              { n:"06", h:"Denial Management & LCD Appeals",              t:"Root-cause molecular denial analysis, LCD medical necessity appeals with diagnosis documentation, and peer-to-peer support for denied authorizations" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="mol-step reveal" key={n}>
                <div className="mol-step-aside">
                  <div className="mol-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="mol-step-conn" />}
                </div>
                <div className="mol-step-body"><h3>{h}</h3><p>{t}</p></div>
              </div>
            ))}
          </div>
          <div className="mol-process-cta reveal">
            <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">Schedule Revenue Assessment</Link>
            <span className="mol-process-note">For molecular labs &amp; genomics facilities · NGS/PCR specialists · All 50 states</span>
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--paper reveal">
        <div className="sp-wrap">
          <p className="sp-ew reveal">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <div className="mol-ba-grid">
            {[
              { label:"Clean Claim Rate",         num:"97",  unit:"%",   green:true,  desc:"first-pass acceptance" },
              { label:"Tier Code Accuracy",       num:"100", unit:"%",   green:false, desc:"Tier 1/Tier 2 verified on every claim" },
              { label:"A/R Days Reduction",       num:"30",  unit:"%↓",  green:true,  desc:"accounts receivable days" },
              { label:"LCD ABN Compliance",       num:"100", unit:"%",   green:false, desc:"ABN issued before non-covered tests" },
            ].map(({ label, num, unit, green, desc }) => (
              <div className={`mol-ba-card${green ? " mol-ba-card--green" : ""} reveal`} key={label}>
                <div className="mol-ba-label">{label}</div>
                <div className="mol-ba-num">{num}<span>{unit}</span></div>
                <div className="mol-ba-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="sp-ew sp-ew--gold reveal">Why Medbilling RCM</p>
          <h2 className="reveal">Your Molecular Lab Revenue Infrastructure Partner</h2>
          <p className="mol-why-intro reveal">Our molecular lab billing team understands Tier 1/Tier 2 CPT selection, NGS panel billing, PAMA CLFS rates, Medicare LCD mapping, MAAA/PLA code requirements, and the high-cost genomic test authorization workflow that determines payment for every molecular diagnostic claim.</p>
          <div className="mol-why-grid">
            {[
              { icon:"🧬", n:"01", h:"Tier 1 / Tier 2 Code Specialists",         t:"Current gene-to-CPT mapping maintained for Tier 1 (81161–81383) and complexity-based Tier 2 (81400–81408) — correct on every molecular claim." },
              { icon:"🔬", n:"02", h:"NGS Panel Billing & Authorization",         t:"Panel CPT code selection (81445–81455) plus prior auth management — clinical indication, gene list, and family history documentation complete." },
              { icon:"📋", n:"03", h:"Medicare LCD Coverage Mapping",             t:"Every molecular test mapped to MAC-specific LCD — covered diagnosis codes verified, ABN issued for non-covered tests before specimen collection." },
              { icon:"💰", n:"04", h:"PAMA CLFS Compliance",                     t:"CLFS rate-matched CPT codes on all Medicare molecular claims — PAMA rate schedule tracked with every update cycle." },
              { icon:"🔮", n:"05", h:"MAAA & PLA Code Accuracy",                 t:"Proprietary test codes maintained current — MAAA and PLA billed with unique identifying codes, never substituted with standard CPT." },
              { icon:"🏅", n:"06", h:"AAPC-Certified Molecular Coders",          t:"Every specialist holds AAPC certification with dedicated molecular pathology training. AMA, CMS, and MAC guidelines applied on every claim." },
              { icon:"🔐", n:"07", h:"Genomic Test Prior Authorization",          t:"WES, hereditary cancer panels, and pharmacogenomics prior auth managed end-to-end — peer-to-peer coordination when initial auth is denied." },
              { icon:"🔍", n:"08", h:"Molecular Lab Revenue Reporting",           t:"Test-level revenue tracking, Tier code accuracy reporting, LCD denial analysis, and PAMA rate reconciliation dashboards." },
            ].map(({ icon, n, h, t }) => (
              <div className="mol-why-card reveal" key={n}>
                <div className="mol-why-top">
                  <div className="mol-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="mol-why-num">{n}</span>
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
          <div className="mol-faq-layout">
            <div className="mol-faq-intro reveal">
              <p>Direct answers about Tier 1 vs Tier 2, NGS billing, Medicare LCD requirements, prior authorization, and MAAA codes. <Link href="/specialties/" className="mol-faq-link">View all specialties we serve.</Link></p>
            </div>
            <div className="mol-faq-list">
              {[
                ["How do you select between Tier 1 and Tier 2 molecular pathology codes?","Tier 1 codes (81161–81383) are assigned to specific genes and specific analytical methods — each code identifies exactly which gene is being analyzed and by what molecular technique. Tier 2 codes (81400–81408) are used for genes not specifically listed in Tier 1, assigned based on methodology complexity level rather than specific gene identity. When a gene has both a Tier 1 code and could be billed as Tier 2, the Tier 1 code must be used. We maintain current CPT code mappings for every gene test performed and verify Tier assignment before every molecular pathology claim."],
                ["How do you handle NGS panel billing?","Next Generation Sequencing (NGS) panels use either specific panel CPT codes (81445–81455 for solid tumor, 81450–81455 for hematolymphoid and other solid tumors) or individual gene codes when panels lack a specific CPT code. NGS panel billing requires documentation of the clinical indication, genes included in the panel, and reporting format. Prior authorization is required by most payers for NGS panels, particularly for hereditary cancer testing. We manage NGS panel code selection, prior authorization, and medical necessity documentation for every panel test."],
                ["What are Medicare LCD requirements for molecular diagnostic testing?","Medicare Administrative Contractors (MACs) publish Local Coverage Determinations (LCDs) specifying which molecular tests are covered, which ICD-10 diagnosis codes qualify for coverage, and documentation requirements. Non-covered tests require an Advance Beneficiary Notice (ABN) before testing. We map every molecular test to the applicable LCD for the patient's MAC jurisdiction, verify covered diagnosis codes before ordering, and issue ABNs for tests lacking Medicare LCD coverage."],
                ["How do you manage prior authorizations for high-cost genomic tests?","High-cost genomic tests — including comprehensive NGS panels, whole exome sequencing (WES), and pharmacogenomic panels — typically require prior authorization from commercial payers. Authorization requests require clinical documentation including diagnosis, prior treatment history, family history for hereditary panels, and medical necessity justification. We manage the complete prior authorization workflow, track approval timelines, and coordinate peer-to-peer reviews when initial authorizations are denied."],
                ["How do you bill Multianalyte Assays with Algorithmic Analyses (MAAAs)?","MAAAs are proprietary multi-analyte tests that use algorithms to generate clinical results. They are billed using unique CPT or PLA (Proprietary Laboratory Analyses) codes — each MAAA has its own unique identifying code. MAAAs cannot be billed using standard molecular pathology codes. We maintain current MAAA and PLA code lists, verify that billed codes match the actual proprietary test performed, and manage prior authorization for high-cost MAAAs that require coverage determination before testing."],
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
        heading="Maximize Your Molecular Lab Revenue"
        body="Schedule a free molecular lab billing assessment and discover how Tier code accuracy, NGS panel billing, and LCD compliance can significantly improve your lab's reimbursements."
        ctaLabel="Schedule Revenue Assessment"
        formId="molAssessmentForm"
        checklist={[
          "Tier 1 vs Tier 2 code accuracy audit — gene-to-CPT mapping",
          "NGS panel billing review — 81445–81455 code accuracy",
          "Medicare LCD coverage mapping — ABN compliance",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For molecular labs & genomics facilities · NGS/PCR specialists · All 50 states served"
      />
    </main>
  );
}
