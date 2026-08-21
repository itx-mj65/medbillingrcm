import Link from "next/link";
import CtaSection from "@/components/CtaSection";

/**
 * SPECIALTIES DATA — single source of truth.
 * To add a specialty: add one object here. Header mega-menu,
 * this page, and sitemap all derive from this array.
 * To remove: delete the object. Zero other files need editing.
 *
 * status: "live"    → full page built, link is active
 * status: "planned" → page coming soon, shown but not linked
 */
const SPECIALTIES = [
  // ── LIVE PAGES ────────────────────────────────────────────
  {
    slug:   "rheumatology-billing-services",
    label:  "Rheumatology",
    icon:   "🧬",
    badge:  "Biologics & DMARDs",
    desc:   "Specialty billing for biologics, DMARDs, infusion therapy, J-codes, prior auth, and CAQH management.",
    status: "live",
  },
  {
    slug:   "internal-medicine-billing-service",
    label:  "Internal Medicine",
    icon:   "🩺",
    badge:  "E/M & MIPS",
    desc:   "E/M coding, chronic care management, MIPS reporting, and high-volume Medicare & commercial billing.",
    status: "live",
  },
  {
    slug:   "radiology-billing-service",
    label:  "Radiology",
    icon:   "🔬",
    badge:  "Technical & Professional",
    desc:   "Technical, professional, and global billing. MPPR compliance, PACS/RIS integration, and prior auth.",
    status: "live",
  },
  {
    slug:   "dermatology-billing-service",
    label:  "Dermatology",
    icon:   "💊",
    badge:  "Mohs & Cosmetic",
    desc:   "Mohs surgery coding, biologic therapy billing, cosmetic vs medical differentiation, and prior auth.",
    status: "live",
  },
  {
    slug:   "mental-health-billing-service",
    label:  "Mental Health",
    icon:   "🧠",
    badge:  "MHPAEA & Telehealth",
    desc:   "CPT and HBAI time-based coding, prior auth, MHPAEA compliance, and telehealth billing rules.",
    status: "live",
  },
  {
    slug:   "family-practice-billing-service",
    label:  "Family Practice",
    icon:   "👨‍👩‍👧",
    badge:  "Primary Care",
    desc:   "Full-spectrum primary care billing including preventive, chronic care, and value-based payment models.",
    status: "live",
  },
  // ── COMING SOON — pages being built ───────────────────────
  { slug:"urgent-care-billing-service",         label:"Urgent Care",       icon:"🚑", badge:"High Volume",      desc:"Fast-turnaround urgent care billing with E/M coding and same-day claim submission.",                                   status:"planned" },
  { slug:"general-surgery-billing-service",     label:"General Surgery",   icon:"🏥", badge:"Procedure Coding", desc:"Surgical CPT coding, global surgery periods, assistant surgeon billing, and modifiers.",                            status:"planned" },
  { slug:"cardiology-billing-service",          label:"Cardiology",        icon:"❤️", badge:"Interventional",   desc:"Complex interventional and diagnostic billing, device coding, and cardiac catheterization claims.",                  status:"live" },
  { slug:"gastroenterology-billing-service",    label:"Gastroenterology",  icon:"🔭", badge:"Procedural",       desc:"Endoscopy and colonoscopy billing, polyp coding, anesthesia coordination, and payer compliance.",                   status:"live",  featured:false },
  { slug:"ob-gyn-billing-service",              label:"OB-GYN",            icon:"🤱", badge:"Global Package",   desc:"OB global package billing, delivery coding, maternity care, and gynecological procedure claims.",                    status:"live" },
  { slug:"neurosurgery-billing-service",        label:"Neurosurgery",      icon:"🧪", badge:"Complex Coding",   desc:"Neurosurgical CPT coding, spinal procedures, add-on codes, and intraoperative monitoring billing.",                  status:"planned" },
  { slug:"ophthalmology-billing-service",       label:"Ophthalmology",     icon:"👁️", badge:"Vision & Surgery", desc:"Ophthalmic surgical and diagnostic coding, cataract billing, vision therapy, and E/M integration.",                 status:"live" },
  { slug:"pain-management-billing-services",    label:"Pain Management",   icon:"💉", badge:"Interventional",   desc:"Interventional pain coding, fluoroscopy billing, drug testing claims, and prior authorization management.",         status:"planned" },
  { slug:"physical-therapy-billing-services",   label:"Physical Therapy",  icon:"🏋️", badge:"Functional Coding","desc":"Time-based PT coding, functional limitation reporting, Medicare therapy cap compliance, and PQRS.",               status:"planned" },
  { slug:"oncology-billing-service",            label:"Oncology",          icon:"🎗️", badge:"Drug Admin",       desc:"Chemotherapy and infusion billing, J-code accuracy, prior auth, and MIPS quality reporting.",                      status:"planned" },
  { slug:"psychiatric-billing-service",         label:"Psychiatry",        icon:"🧘", badge:"Behavioral Health", desc:"Psychiatric E/M coding, therapy add-ons, MHPAEA compliance, and collaborative care billing.",                      status:"live",  featured:false },
  { slug:"urology-billing-services",            label:"Urology",           icon:"⚕️", badge:"Surgical & E/M",   desc:"Urological surgical coding, cystoscopy billing, robotic procedure modifiers, and E/M optimization.",               status:"planned" },
  { slug:"endocrinology-billing-services",      label:"Endocrinology",     icon:"🔬", badge:"Chronic Care",     desc:"Diabetes management billing, thyroid and endocrine procedure coding, and CCM reimbursement.",                       status:"planned" },
  { slug:"pathology-billing-services",          label:"Pathology",         icon:"🔭", badge:"Lab & Tissue",     desc:"Technical and professional pathology billing, tissue examination codes, and molecular lab claims.",                  status:"planned" },
  { slug:"clinical-lab-billing-service",        label:"Clinical Lab",      icon:"🧫", badge:"PAMA Compliant",   desc:"PAMA-compliant lab billing, ABN management, NCCI edits, and molecular diagnostics coding.",                          status:"planned" },
  { slug:"wound-care-billing-services",         label:"Wound Care",        icon:"🩹", badge:"Debridement",      desc:"Wound debridement coding, hyperbaric oxygen billing, skin substitute claims, and per-visit documentation.",          status:"planned" },
  { slug:"nursing-home-billing-services",       label:"Nursing Home",      icon:"🏠", badge:"SNF & LTC",        desc:"SNF consolidated billing, MDS coding, Medicare Part A per-diem billing, and therapy coordination.",                  status:"planned" },
  { slug:"infectious-disease-billing-service",  label:"Infectious Disease",icon:"🦠", badge:"Immunization",     desc:"ID procedure coding, HIV/AIDS billing, antibiotic infusion claims, and public health reporting.",                   status:"planned" },
  { slug:"immunology-billing-services",         label:"Immunology",        icon:"🛡️", badge:"Allergy & Biologic","desc":"Allergy testing and immunotherapy billing, biologic infusion coding, and prior authorization.",                    status:"planned" },
  { slug:"dme-billing-services",                label:"DME",               icon:"♿", badge:"DMEPOS",           desc:"DMEPOS billing, CMN documentation, Medicare Local Coverage Determination, and competitive bidding.",                 status:"live",  featured:false },
  { slug:"rehab-billing-service",               label:"Rehab",             icon:"🏃", badge:"PT/OT/ST",         desc:"Inpatient and outpatient rehab billing, PPS payment, functional outcome reporting, and Medicare compliance.",        status:"planned" },
  { slug:"dental-billing-service",              label:"Dental",            icon:"🦷", badge:"CDT & Medical",    desc:"CDT coding, cross-coding for medical dental procedures, implant billing, and benefit coordination.",                 status:"live",  featured:false },
  { slug:"hipaa-compliant-oncology-billing-service",label:"Oncology (HIPAA)",icon:"🎗️",badge:"HIPAA Certified","desc":"HIPAA-certified oncology billing with complete audit trail, drug administration coding, and appeals support.",    status:"planned" },
  { slug:"ambulatory-surgery-billing-service",  label:"Ambulatory Surgery",icon:"🏥", badge:"APC & ASC",        desc:"APC and ASC billing, facility fee optimization, modifier compliance, and same-day surgery coding.",                  status:"live",  featured:false },
  { slug:"molecular-lab-biliing-services",      label:"Molecular Lab",     icon:"🧬", badge:"NGS & PCR",        desc:"NGS, PCR, and molecular diagnostic billing with PAMA compliance and Medicare LCD coverage mapping.",                  status:"planned" },
  { slug:"gynecology-billing-services",         label:"Gynecology",        icon:"🩺", badge:"Surgical & E/M",   desc:"Gynecological surgical coding, hysteroscopy billing, and women's health E/M optimization.",                          status:"planned" },
  { slug:"medical-clinics-billing-services",    label:"Medical Clinics",   icon:"🏥", badge:"Multi-Specialty",  desc:"Multi-specialty clinic billing, provider enrollment, and EHR-integrated revenue cycle management.",                  status:"planned" },
  { slug:"tailored-fqhc-billing-service",       label:"FQHC",             icon:"🏛️", badge:"Prospective PPS",  desc:"FQHC prospective payment, encounter-based billing, sliding fee compliance, and UDS reporting.",                    status:"planned" },
  { slug:"rcm",                                 label:"Healthcare RCM",    icon:"📊", badge:"Full-Service RCM",  desc:"End-to-end revenue cycle management from eligibility through payment reconciliation for any specialty.",              status:"planned" },
];

// Split into live and planned
const LIVE_SPECS    = SPECIALTIES.filter(s => s.status === "live" && s.featured !== false);
const PLANNED_SPECS = SPECIALTIES.filter(s => s.status === "planned");

export default function SpecialtiesIndexPage() {
  return (
    <main className="specs-page" id="main">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="reveal specs-hero">
        <div className="specs-wrap">
          <div className="specs-hero-copy">
            <p className="reveal specs-hero-ew">Specialty Billing Infrastructure</p>
            <h1>Our Core Specialties</h1>
            <p className="specs-hero-intro">Medbilling RCM specializes in providing comprehensive medical billing services to practices of all sizes in more than 50 specialties. Our dedicated team understands the complexities of medical billing and is committed to maximizing your revenue and minimizing administrative burdens.</p>
            <div className="specs-hero-badges">
              {["50+ Specialties","AAPC Certified","97% Clean Claim Rate","All 50 States"].map(b => (
                <span key={b} className="specs-hero-badge">{b}</span>
              ))}
            </div>
          </div>
          <div className="specs-hero-stats">
            {[
              { num:"50+",  lbl:"Specialties served" },
              { num:"97%",  lbl:"Clean claim rate" },
              { num:"800+", lbl:"Certified experts" },
              { num:"50",   lbl:"States covered" },
            ].map(({ num, lbl }) => (
              <div key={lbl} className="specs-hero-stat">
                <div className="specs-hero-stat-num">{num}</div>
                <div className="reveal specs-hero-stat-lbl">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ──────────────────────────────────── */}
      <div className="specs-intro-strip">
        <div className="specs-wrap">
          <h2 className="reveal specs-section-h2">Medical Billing Specialties</h2>
          <p className="reveal specs-section-sub">The best qualities of services for a Medical Billing Department include accuracy and efficiency in managing claims and reimbursements. Additionally, providing excellent customer support and maintaining compliance with healthcare regulations are essential for smooth operations and financial success.</p>
        </div>
      </div>

      {/* ── LIVE SPECIALTY CARDS ─────────────────────────── */}
      <section className="reveal specs-sec specs-sec--paper" aria-label="Active specialty pages">
        <div className="specs-wrap">
          <p className="reveal specs-ew">Fully Active — Click to Explore</p>

          <div className="specs-live-grid">
            {LIVE_SPECS.map(({ slug, label, icon, badge, desc }) => (
              <Link
                key={slug}
                href={`/specialties/${slug}/`}
                className="reveal specs-live-card"
                aria-label={`${label} billing services`}
              >
                <div className="reveal specs-live-card-top">
                  <div className="specs-live-icon" aria-hidden="true">{icon}</div>
                  <span className="specs-live-badge">{badge}</span>
                </div>
                <h3 className="reveal">{label} Billing Services</h3>
                <p>{desc}</p>
                <div className="reveal specs-live-cta">
                  Explore services <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL SPECIALTIES GRID — planned pages ─────────── */}
      <section className="reveal specs-sec specs-sec--ivory" aria-label="All specialties we serve">
        <div className="specs-wrap">
          <p className="reveal specs-ew">All Specialties We Serve</p>
          <h2 className="reveal specs-section-h2">50+ Medical Billing Specialties</h2>
          <p className="reveal specs-section-sub">Every specialty below receives the same AAPC-certified coding, payer-specific billing rules, and denial management. Full pages are being built — get in touch for any specialty.</p>

          <div className="specs-all-grid">
            {SPECIALTIES.map(({ slug, label, icon, badge, desc, status }) => {
              const isLive = status === "live";
              const inner = (
                <div className={`specs-all-card ${isLive ? "specs-all-card--live" : "specs-all-card--planned"}`}>
                  <div className="specs-all-top">
                    <span className="specs-all-icon" aria-hidden="true">{icon}</span>
                    {isLive && <span className="specs-all-live-dot" aria-label="Page available" />}
                  </div>
                  <div className="reveal specs-all-label">{label}</div>
                  <div className="specs-all-badge">{badge}</div>
                </div>
              );
              return isLive
                ? <Link key={slug} href={`/specialties/${slug}/`} aria-label={`${label} billing page`}>{inner}</Link>
                : <div key={slug}>{inner}</div>;
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <CtaSection
        eyebrow="Revenue Assessment"
        heading="Don't see your specialty? We bill for it."
        body="We cover 50+ medical specialties. Request a free revenue assessment and discover how our specialty billing experts can recover lost revenue, reduce denials, and accelerate your payment cycles."
        ctaLabel="Get a Free Revenue Assessment"
        formId="specsAssessmentForm"
        checklist={[
          "Specialty-specific coding audit for your practice",
          "Top denial reasons by dollar from your AR",
          "Payer mix analysis for your specialty",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="AAPC-certified · 50+ specialties · All 50 states · No setup fee"
      />

    </main>
  );
}
