import Link from "next/link";
import CtaSection from "@/components/CtaSection";

/**
 * SERVICES — single source of truth for this page.
 * Add/remove a service here; cards and layout update automatically.
 */
const SERVICES = [
  {
    slug:   "physician-billing",
    label:  "Physician Billing Services",
    icon:   "🩺",
    accent: "green",
    tag:    "CMS-1500 · Professional",
    stat:   { num: "97%",  lbl: "Clean claim rate" },
    desc:   "Enhance revenue cycle management, optimize coding practices, and ensure HIPAA compliance with our comprehensive physician billing solutions.",
    long:   "Professional billing for CMS-1500 practices across all 50 states. E/M coding, prior auth, denial management, and telehealth billing — measured at the payer, not the clearinghouse.",
  },
  {
    slug:   "hospital-medical-billing",
    label:  "Hospital Billing Services",
    icon:   "🏥",
    accent: "navy",
    tag:    "UB-04 · DRG · APC",
    stat:   { num: "14",   lbl: "Day onboarding" },
    desc:   "Improve revenue capture, streamline claims processing, and leverage EMR integration for seamless hospital billing management.",
    long:   "Institutional billing for inpatient and outpatient care. DRG optimization, 340B compliance, TEAM model support, and facility fee management on the UB-04.",
  },
  {
    slug:   "medical-coding",
    label:  "Medical Coding Services",
    icon:   "📋",
    accent: "green",
    tag:    "ICD-10 · CPT · HCPCS",
    stat:   { num: "99.5%", lbl: "Coding accuracy" },
    desc:   "Maximize reimbursements and ensure ICD-10 compliance with expert medical coding across all specialties and claim types.",
    long:   "AAPC-certified coders (CPC, CCS, COC) applying ICD-10, CPT, and HCPCS expertise with real-time edits, audits, and specialty-specific modifier mastery.",
  },
  {
    slug:   "account-receivable-management",
    label:  "AR Management",
    icon:   "📊",
    accent: "gold",
    tag:    "Denial Recovery · AR Aging",
    stat:   { num: "90%+", lbl: "Collection rate" },
    desc:   "Improve cash flow, reduce denials, and accelerate revenue recovery with our proactive accounts receivable billing management solutions.",
    long:   "Accounts receivable management on claims that did not pay the first time. Systematic follow-up on aged 30/60/90+ day accounts with root-cause denial resolution.",
  },
  {
    slug:   "laboratory-billing",
    label:  "Laboratory Billing Services",
    icon:   "🧫",
    accent: "green",
    tag:    "PAMA · Clinical Lab",
    stat:   { num: "48hr", lbl: "Denial turnaround" },
    desc:   "Maximize revenue potential, ensure ICD-10 compliance, and streamline reimbursement with our advanced laboratory billing solutions.",
    long:   "Lab billing for clinical labs, pathology, molecular diagnostics, and toxicology. PAMA-compliant with 48hr denial turnaround across 1,000+ payers.",
  },
  {
    slug:   "medical-credentialing",
    label:  "Medical Credentialing Services",
    icon:   "🏅",
    accent: "navy",
    tag:    "CAQH · PECOS · NPI",
    stat:   { num: "1K+", lbl: "Payers credentialed" },
    desc:   "Access qualified billing professionals, ensure coding accuracy, and optimize revenue with our specialized medical credentialing services.",
    long:   "Provider credentialing and payer enrollment kept current — NPI, CAQH, PECOS, and all commercial payer applications managed with re-credentialing dates tracked.",
  },
  {
    slug:   "coverage-discovery",
    label:  "Coverage Discovery Services",
    icon:   "🔍",
    accent: "green",
    tag:    "Eligibility · Verification",
    stat:   { num: "Pre-visit", lbl: "Coverage verified" },
    desc:   "Enhance reimbursement rates, streamline eligibility verification, and improve revenue cycle efficiency with coverage discovery solutions.",
    long:   "Insurance verification and eligibility checks before the visit. We surface hidden coverage so claims are submitted correctly the first time — stopping denials before they start.",
  },
  {
    slug:   "asc-billing",
    label:  "Ambulatory Surgical Center Billing",
    icon:   "⚕️",
    accent: "gold",
    tag:    "APC · ASC · NCCI",
    stat:   { num: "APC", lbl: "Grouping expertise" },
    desc:   "Boost revenue performance, streamline revenue cycle workflows, and ensure compliance with our tailored ASC billing solutions.",
    long:   "ASC billing for freestanding and multi-specialty surgery centers. APC coding, implant pass-through billing, NCCI compliance, and 48hr denial turnaround.",
  },
  {
    slug:   "healthcare-fte-outsourcing",
    label:  "Medical Billing Staffing",
    icon:   "👥",
    accent: "navy",
    tag:    "FTE · Virtual Staff",
    stat:   { num: "5–10", lbl: "Day deployment" },
    desc:   "Access qualified billing professionals and optimize revenue management with our specialized medical billing staffing services.",
    long:   "Dedicated virtual staff deployed inside your EHR in 5–10 business days. Billing, coding, prior auth, VMAs, scribes, and front-office. HIPAA + BAA compliant.",
  },
];

export default function ServicesIndexPage() {
  return (
    <main className="svc-idx-page" id="main">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="svc-idx-hero">
        <div className="svc-idx-wrap">
          <div className="svc-idx-hero-copy">
            <p className="svc-idx-ew">Revenue Cycle Management</p>
            <h1>Med Billing RCM Offers Medical Billing Services</h1>
            <p className="svc-idx-hero-intro">Maximize your practice's revenue potential with our tailored outsourced medical billing solutions in the USA. Experience seamless financial growth and focus on patient care with our expert assistance.</p>
            <div className="svc-idx-hero-pills">
              {["97% Clean Claim Rate","AAPC Certified","All 50 States","HIPAA Compliant"].map(p => (
                <span key={p} className="svc-idx-pill">{p}</span>
              ))}
            </div>
            <div className="svc-idx-hero-actions">
              <Link href="/request-free-audit/" className="svc-idx-btn svc-idx-btn--primary">Get a Free Revenue Assessment</Link>
              <Link href="#services"            className="svc-idx-btn svc-idx-btn--ghost">Explore Services</Link>
            </div>
          </div>

          {/* Right: animated stat strip */}
          <div className="svc-idx-hero-stats">
            {[
              { num:"97%",  lbl:"First-pass clean claim rate" },
              { num:"9",    lbl:"Core billing services" },
              { num:"50",   lbl:"States served" },
              { num:"800+", lbl:"Certified experts" },
            ].map(({ num, lbl }) => (
              <div key={lbl} className="svc-idx-hero-stat">
                <div className="svc-idx-stat-num">{num}</div>
                <div className="svc-idx-stat-lbl">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OUTSOURCE — 3-col with numbers ──────────── */}
      <section className="svc-idx-sec svc-idx-sec--ivory">
        <div className="svc-idx-wrap">
          <p className="svc-idx-ew">Why Medical Billing Services</p>
          <h2>The Reason For Using Billing Services</h2>

          <div className="svc-idx-why-grid">
            <div className="svc-idx-why-card">
              <div className="svc-idx-why-num">01</div>
              <h3>Three-Party Coordination</h3>
              <p>Doctor's visits involve a complex system of information and payment involving three parties — patients, healthcare providers, and insurance companies (payers). The medical biller must negotiate and pay all three parties.</p>
            </div>
            <div className="svc-idx-why-card">
              <div className="svc-idx-why-num">02</div>
              <h3>Claims Generation &amp; Submission</h3>
              <p>Billers compile patient demographics, medical histories, insurance coverage, and treatment reports into insurance claims (superbills). We generate medical claims, check them for accuracy, and submit them to payers electronically.</p>
            </div>
            <div className="svc-idx-why-card">
              <div className="svc-idx-why-num">03</div>
              <h3>Payment Reconciliation</h3>
              <p>Once a payer approves a claim, billers post payments and reconcile deductibles, copayments, and outstanding balances. Medical billing services in California and across the USA provide a critical link between patients and providers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS — data-driven 3-col grid ──────── */}
      <section className="svc-idx-sec svc-idx-sec--white" id="services">
        <div className="svc-idx-wrap">
          <p className="svc-idx-ew">Our Services</p>
          <h2>Medical Billing Specialties</h2>
          <p className="svc-idx-sec-sub">The best qualities of services for a Medical Billing Department include accuracy and efficiency in managing claims and reimbursements.</p>

          <div className="svc-idx-grid">
            {SERVICES.map(({ slug, label, icon, accent, tag, stat, desc, long }) => (
              <Link
                key={slug}
                href={`/services/${slug}/`}
                className={`svc-idx-card svc-idx-card--${accent}`}
                aria-label={label}
              >
                {/* Animated corner badge */}
                <div className="svc-idx-card-tag">{tag}</div>

                <div className="svc-idx-card-top">
                  <div className="svc-idx-card-icon" aria-hidden="true">{icon}</div>
                  <div className="svc-idx-card-stat">
                    <strong>{stat.num}</strong>
                    <span>{stat.lbl}</span>
                  </div>
                </div>

                <h3>{label}</h3>
                <p className="svc-idx-card-desc">{desc}</p>
                <p className="svc-idx-card-long">{long}</p>

                <div className="svc-idx-card-cta" aria-hidden="true">
                  Learn more <span className="svc-idx-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — process strip ────────────────── */}
      <section className="svc-idx-sec svc-idx-sec--navy">
        <div className="svc-idx-wrap">
          <p className="svc-idx-ew svc-idx-ew--gold">Talk To Healthcare RCM And Physician Billing Expert</p>
          <h2>Maximize your practice's revenue potential with our tailored outsourced medical billing solutions in the USA.</h2>

          <div className="svc-idx-process">
            {[
              { n:"1", h:"Information Gathering",   t:"The billing department analyzes the patient's demographics, medical history, insurance coverage, and previous treatment to verify coverage and prepare claims." },
              { n:"2", h:"Claim Creation & Submission", t:"We generate medical claims, check them for accuracy, and submit them to payers. Claims include patient demographics, medical histories, insurance coverage, and treatment reports." },
              { n:"3", h:"Payment & Reconciliation", t:"Once a payer approves a claim, they notify the biller and return the agreed-upon payment. Billers then post the payment, deducting reimbursements, accounting for copayments, and adding outstanding balances." },
            ].map(({ n, h, t }) => (
              <div key={n} className="svc-idx-process-step">
                <div className="svc-idx-process-num">{n}</div>
                <div className="svc-idx-process-body">
                  <h3>{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <CtaSection
        eyebrow="Revenue Assessment"
        heading="Get a Free Revenue Assessment."
        body="We pull a sample of your claims and show your E/M distribution against benchmark, your top denial reasons by dollar, and your aged AR by payer. You keep the findings whether or not you work with us."
        ctaLabel="Get a Free Revenue Assessment"
        formId="svcIdxAssessmentForm"
        checklist={[
          "E/M distribution benchmarked against your specialty",
          "Top denial reasons by dollar from your AR",
          "Aged AR by payer — filing window exposure",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="97% clean claim rate measured at the payer · 14-day onboarding · All 50 states"
      />
    </main>
  );
}
