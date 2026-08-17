import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";

export default function MedicalCodingPage() {
  return (
    <main className="mc-page" id="main">

      {/* ═══ HERO — shared PageHero component ═══════════════════════
          IMAGE PLACEHOLDER:
          Size: 1536 × 900 px (16:9)
          Use: /public/mc-hero.webp
          Subject: Medical coder at dual monitors reviewing ICD-10 and CPT code 
                   documentation — close-up of screen showing coding queue, 
                   specialist in scrubs or clinical attire.
          AI prompt: "Medical billing coder at dual computer monitors in a 
                     modern healthcare office, reviewing medical coding documents, 
                     ICD-10 codes visible on screen, professional clinical setting, 
                     navy and green color tones, photorealistic, no text overlay"
      ════════════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="CPC · CCS · COC Certified Coders"
        heading="Medical Coding Services"
        intro="Our certified team (CPC, CCS, COC) applies deep expertise in ICD-10, CPT, and HCPCS coding prioritizing accuracy, compliance, and measurable financial outcomes for your practice."
        note="99.5% coding accuracy  |  100% HIPAA compliant  |  30% denial reduction  |  All 50 states"
        cta="Request Free Audit"
        ctaAlt="See our process"
        ctaAltHref="#process"
        badge="CPC · CCS · COC Certified"
        image="/mc-hero.webp"
        imageAlt="Certified medical coder reviewing ICD-10, CPT and HCPCS documentation at workstation"
        imageW={1536}
        imageH={900}
      />

      {/* ═══ PROOF STRIP ═════════════════════════════════════════ */}
      <div className="mc-proof">
        <div className="mc-proof-inner">
          <div className="mc-proof-item">99.5% Coding Accuracy</div>
          <div className="mc-proof-item">100% HIPAA Compliance</div>
          <div className="mc-proof-item">30% Denial Reduction</div>
          <div className="mc-proof-item">+10% Cash Flow Boost</div>
        </div>
      </div>

      {/* ═══ WHY MEDBILLING — CODING INFRASTRUCTURE ══════════════ */}
      <section className="mc-sec mc-sec--white reveal" id="why">
        <div className="mc-wrap">
          <p className="mc-ew">Why Medbilling RCM</p>
          <h2>Your General Surgery Revenue Infrastructure Partner</h2>
          <p className="mc-lead">Specialized general surgery billing with AAPC and AHIMA certified coders who understand the complexity of surgical modifiers, global periods, and facility fee billing.</p>

          <div className="mc-cert-badges">
            <span className="mc-cert"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>CPC Certified</span>
            <span className="mc-cert"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>CCS Certified</span>
            <span className="mc-cert"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>COC Certified</span>
            <span className="mc-cert"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>HIPAA Compliant</span>
          </div>

          <p className="mc-tag-line">Expert HIM Consulting · Advanced CDI Solutions · Proven Expertise</p>
          <p>We bring together expert Health Information Management consulting, advanced Clinical Documentation Improvement solutions, and skilled medical coders with demonstrated specialty-specific expertise all in one integrated coding infrastructure.</p>

          {/* IMAGE PLACEHOLDER — Infrastructure section
              Size: 1200 × 700 px
              Use: /public/mc-infrastructure.webp
              Subject: Split image — left: coder at workstation with EHR system;
                       right: performance dashboard showing coding accuracy metrics.
              AI prompt: "Healthcare revenue cycle specialists working in modern 
                         medical billing office, EHR system on screen, professional 
                         team environment, clean clinical aesthetic, photorealistic"
          */}
          <div className="mc-infra-img mc-img-placeholder" aria-label="Image placeholder: Medical coding infrastructure team">
            <div className="mc-placeholder-inner">
              <div className="mc-placeholder-icon">📷</div>
              <div className="mc-placeholder-title">Infrastructure Team Image</div>
              <div className="mc-placeholder-spec">1200 × 700 px · /public/mc-infrastructure.webp</div>
              <div className="mc-placeholder-prompt">AI prompt: "Healthcare revenue cycle specialists working in modern medical billing office, EHR system on screen, professional team environment, clean clinical aesthetic, photorealistic"</div>
            </div>
          </div>

          <div className="mc-feature-grid">
            {[
              { h:"Advanced Coding Algorithms", t:"Intelligent coding systems accurately match diagnoses, procedures, and treatments with correct codes. Automating much of the process reduces human error and the likelihood of claim denials." },
              { h:"Certified Coding Specialists", t:"Our team brings deep understanding of medical terminology, coding rules, and industry standards ensuring coding is consistently accurate, fully compliant, and aligned with best practices." },
              { h:"Real-Time Edits & Audits", t:"We include real-time edits and audits in our coding process, instantly validating accuracy and completeness. Quick corrections minimize coding errors and keep everything compliance-aligned." },
              { h:"EHR & Billing System Integration", t:"Our services integrate seamlessly with Electronic Health Records and billing systems, creating a streamlined coding workflow with efficient data sharing across your revenue cycle." },
              { h:"Compliance with Coding Standards", t:"We adhere to ICD-10, CPT, and HCPCS coding standards with full HIPAA compliance ensuring patient data remains confidential and protected while following all industry regulations." },
              { h:"Customizable Reporting & Analytics", t:"Clear insights into coding accuracy, trends, and reimbursement patterns. Data-driven analytics empower you to track performance and identify areas for improvement across your organization." },
            ].map(({ h, t }) => (
              <article className="mc-feature-card reveal" key={h}>
                <div className="mc-feature-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3>{h}</h3>
                <p>{t}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CODING PROCESS ══════════════════════════════════════ */}
      <section className="mc-sec mc-sec--navy reveal" id="process">
        <div className="mc-wrap">
          <p className="mc-ew mc-ew--gold">Coding Infrastructure</p>
          <h2>The Medical Coding Process</h2>
          <p>Four essential steps designed to ensure maximum accuracy, compliance, and reimbursement on every single claim.</p>

          <div className="mc-process-grid">
            {[
              { n:"01", h:"Retrieving Patient Information",   t:"We collect all necessary documentation nursing notes, physician records, and demographic details providing a complete foundation for the coding process." },
              { n:"02", h:"Entering Key Details",             t:"We input important information location of service, the physician's name, and relevant price modifiers into our system to prepare for accurate and comprehensive coding." },
              { n:"03", h:"Assigning Relevant Codes",         t:"With a strong focus on precision, we assign the appropriate codes in line with regulatory standards CPT, HCPCS, ICD, DRG, and HCC codes along with applicable modifiers." },
              { n:"04", h:"Rechecking & Auditing",            t:"We thoroughly review and audit assigned codes, conducting multiple checks to identify and correct any up-coding or down-coding errors maintaining the integrity of the entire coding process." },
            ].map(({ n, h, t }) => (
              <div className="mc-process-step reveal" key={n}>
                <div className="mc-step-num">{n}</div>
                <h3>{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>

          <div className="mc-process-cta">
            <Link href="/request-free-audit/" className="pg-btn pg-btn--gold">Schedule Revenue Assessment</Link>
            <p className="mc-process-note">For practices across all specialties · CPC, CCS & COC certified team · All 50 states</p>
          </div>
        </div>
      </section>

      {/* ═══ OUTSOURCE SECTION ═══════════════════════════════════ */}
      <section className="mc-sec mc-sec--ivory reveal">
        <div className="mc-wrap">
          <p className="mc-ew">Why Outsource to Us</p>
          <h2>Outsource Your Medical Coding. Keep Your Revenue.</h2>

          {/* IMAGE PLACEHOLDER — Outsource section
              Size: 1200 × 600 px  
              Use: /public/mc-outsource.webp
              Subject: Practice administrator reviewing revenue improvement chart, 
                       confident expression, modern office setting, showing measurable 
                       outcomes from outsourced coding partnership.
              AI prompt: "Practice administrator reviewing revenue improvement 
                         analytics on laptop in modern medical office, positive 
                         business outcome, clean professional setting, photorealistic"
          */}
          <div className="mc-outsource-layout">
            <div className="mc-outsource-img mc-img-placeholder" aria-label="Image placeholder: Outsourced coding outcomes">
              <div className="mc-placeholder-inner">
                <div className="mc-placeholder-icon">📷</div>
                <div className="mc-placeholder-title">Outsource Outcomes Image</div>
                <div className="mc-placeholder-spec">1200 × 600 px · /public/mc-outsource.webp</div>
                <div className="mc-placeholder-prompt">AI prompt: "Practice administrator reviewing revenue improvement analytics on laptop in modern medical office, positive business outcome, clean professional setting, photorealistic"</div>
              </div>
            </div>
            <div className="mc-outsource-copy">
              <p>Outsourcing your medical coding to Medbilling RCM eliminates the cost of in-house coding staff, ongoing training, software, and compliance monitoring while delivering measurably better outcomes.</p>
              <Link href="/request-free-audit/" className="mc-collab-link">Let&apos;s Collaborate →</Link>
              <div className="mc-outcome-grid">
                {[
                  { stat:"10%",  label:"10% Improved Cash Flow",          desc:"More accurate coding means fewer underpayments and faster reimbursements." },
                  { stat:"↓",    label:"Reduced Administrative Burden", desc:"Eliminate in-house coding overhead, training costs, and software investment." },
                  { stat:"100%", label:"HIPAA Compliance",             desc:"All coding workflows are HIPAA-compliant with full audit trail documentation." },
                  { stat:"30%",  label:"30% Reduction in A/R",            desc:"Accurate first-pass coding dramatically reduces claim denials and AR days." },
                  { stat:"✓",    label:"Denial Management Services",   desc:"Root-cause analysis and rapid resubmission for all denied claims." },
                  { stat:"⚡",   label:"Real-Time Coding Insights",    desc:"Access live performance dashboards showing coding accuracy and trends." },
                  { stat:"★",    label:"CMS & AMA Regulatory Updates", desc:"Constant alignment with the latest CMS and AMA coding changes zero lag." },
                  { stat:"↑",    label:"Enhanced Reimbursement Precision", desc:"High-quality coding results ensure claims are paid in full first time." },
                ].map(({ stat, label, desc }) => (
                  <div className="mc-outcome-item reveal" key={label}>
                    <div className="mc-outcome-stat">{stat}</div>
                    <div>
                      <div className="mc-outcome-label">{label}</div>
                      <div className="mc-outcome-desc">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CODE SYSTEMS ════════════════════════════════════════ */}
      <section className="mc-sec mc-sec--navy reveal">
        <div className="mc-wrap">
          <p className="mc-ew mc-ew--gold">Coding Standards &amp; Compliance</p>
          <h2>Every Code System. Every Specialty. Full Compliance.</h2>
          <p>Our team is certified and regularly trained across all major coding systems ensuring your claims are always accurate, audit-proof, and aligned with the latest regulatory requirements.</p>
          <p>We cover a broad spectrum of <a href="/specialties/">specialties</a> including cardiology, family medicine, radiology, urgent care, OBGYN, orthopaedics, and many others. Our team includes specialists for each field, ensuring coding precision for highly specialized medical services.</p>

          <div className="mc-code-grid">
            {[
              { code:"ICD-10", full:"International Classification of Diseases, 10th Revision", desc:"Diagnosis and inpatient procedure coding updated annually with full compliance tracking", tag:"Active" },
              { code:"CPT",    full:"Current Procedural Terminology",                           desc:"AMA-published codes for medical, surgical, and diagnostic procedures and services", tag:"Active" },
              { code:"HCPCS",  full:"Healthcare Common Procedure Coding System",               desc:"Level I (CPT) and Level II codes for supplies, equipment, and non-physician services", tag:"Active" },
              { code:"DRG",    full:"Diagnosis-Related Groups",                                desc:"Hospital inpatient classification system for Medicare reimbursement", tag:"Hospital" },
              { code:"HCC",    full:"Hierarchical Condition Categories",                       desc:"Risk-adjustment coding for Medicare Advantage and value-based contracts", tag:"Risk Adj." },
              { code:"HIPAA",  full:"Health Insurance Portability & Accountability Act",       desc:"Full compliance for all PHI handling, data transmission, and audit requirements", tag:"Compliant" },
            ].map(({ code, full, desc, tag }) => (
              <article className="mc-code-card reveal" key={code}>
                <div className="mc-code-top">
                  <span className="mc-code-label">{code}</span>
                  <span className="mc-code-tag">{tag}</span>
                </div>
                <h3>{full}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ════════════════════════════════════════ */}
      <section className="mc-sec mc-sec--white reveal">
        <div className="mc-wrap">
          <p className="mc-ew">Client Outcomes</p>
          <h2>What Healthcare Leaders Say</h2>
          <p>Feedback that reflects our commitment to delivering measurable, transparent coding results.</p>

          {/* IMAGE PLACEHOLDER — Testimonials background/accent
              Size: 800 × 800 px
              Use: /public/mc-testimonial-bg.webp
              Subject: Professional healthcare environment — abstract background 
                       or physician portrait (no identifiable faces without consent). 
                       Used as testimonial accent imagery.
              AI prompt: "Professional healthcare billing team in modern office, 
                         diverse group, trust and expertise, clean background, 
                         suitable for testimonial section, photorealistic"
          */}
          <div className="mc-testi-grid">
            {[
              { q:"Med Billing RCM has been a game changer for my practice. Since teaming up, we've seen a significant improvement in collections and a smoother overall process. The team is highly responsive and transparent.", name:"Dr. Sarah Kin",    role:"Family Medicine Practice" },
              { q:"Their streamlined processes have modernized our system and increased our monthly revenue. We particularly appreciate the transparency and regular updates on our claims status.", name:"Dr. Alan Peterson", role:"Cardiology Clinic" },
              { q:"Their attention to detail and commitment to HIPAA compliance gives us confidence. They handle everything from AR management to claims submissions with professionalism and efficiency.", name:"Dr. Nick Toriani",  role:"Specialty Practice" },
              { q:"Switching to Med Billing RCM was one of the best decisions we've made. Their expertise in cardiology billing has led to a significant improvement in our claim acceptance rate.", name:"Dr. Jennifer Lee",  role:"Dermatology Practice" },
            ].map(({ q, name, role }) => (
              <blockquote className="mc-testi reveal" key={name}>
                <p className="mc-testi-q">&ldquo;{q}&rdquo;</p>
                <footer className="mc-testi-footer">
                  <div className="mc-testi-avatar" aria-hidden="true">
                    {name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <div className="mc-testi-name">{name}</div>
                    <div className="mc-testi-role">{role}</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSING CTA BAND ════════════════════════════════════ */}
      <div className="mc-cta-band">
        <div className="mc-cta-inner">
          <div>
            <p className="mc-ew mc-ew--gold" style={{marginBottom:"12px"}}>Coding Infrastructure</p>
            <h2>Let Our Coding Expertise Transform Your Revenue Cycle.</h2>
            <p>Reach out today to discuss how we can customize our medical coding services to your practice&apos;s specialty mix, volume, and revenue goals with zero disruption to your existing workflows.</p>
          </div>
          <div className="mc-cta-actions">
            <Link href="/request-free-audit/" className="pg-btn pg-btn--gold">Schedule Revenue Assessment</Link>
            <p className="mc-cta-note">CPC, CCS & COC certified coders · ICD-10, CPT, HCPCS expertise · All 50 states</p>
          </div>
        </div>
      </div>

      {/* ═══ FAQ ═════════════════════════════════════════════════ */}
      <section className="mc-sec mc-sec--white reveal" id="faq">
        <div className="mc-wrap">
          <p className="mc-ew">Common Questions</p>
          <h2>Frequently Asked Questions</h2>
          <div className="mc-faq-layout">
            <div className="mc-faq-intro">
              <p>Direct answers about our medical coding services, compliance standards, and turnaround times.</p>
            </div>
            <div className="mc-faq-list">
              {[
                ["What is the process for outsourcing medical coding services?", "Our process begins with a comprehensive needs assessment to understand your practice's unique requirements. Once defined, we assign experienced coders who work closely with your team, providing regular updates and transparent reporting to maintain alignment with your goals."],
                ["How do you ensure compliance with coding standards?", "Our medical coders are certified and regularly trained in ICD-10, CPT, and HCPCS updates. We conduct compliance audits and align with HIPAA, CMS, and OIG guidelines to safeguard your practice against penalties and audit exposure."],
                ["What specialties do you cover?", "We cover a broad spectrum including cardiology, family medicine, radiology, urgent care, OBGYN, orthopaedics, dermatology, internal medicine, and many others. Our team includes specialists for each field, ensuring coding precision for highly specialized medical services."],
                ["How do you handle claim denials related to coding?", "Our denial management approach focuses on root-cause analysis we identify whether the denial was due to a coding error, documentation gap, or payer policy issue. We correct, resubmit, and provide transparent reporting on denial trends to address issues proactively and prevent recurrence."],
                ["How quickly do you turn around coding after receiving documentation?", "Standard turnaround is 24–48 hours from receipt of complete documentation. For high-volume practices, we scale our team to maintain consistent turnaround times. Rush processing is available for time-sensitive claims with same-day coding when needed."],
              ].map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ASSESSMENT — shared CtaSection component ════════════ */}
      <CtaSection
        eyebrow="Ready when you are"
        heading="Request a Free Coding Audit."
        body="We review a sample of your coding records, identify accuracy gaps, and show you where revenue is being left on the table. You keep the findings. No obligation, no setup fee, no long-term contract."
        ctaLabel="Request Free Audit"
        formId="mcAssessmentForm"
        checklist={[
          "Coding accuracy review across CPT, ICD-10, and HCPCS",
          "Denial pattern analysis by code and payer",
          "Modifier and bundling compliance check",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="HIPAA-compliant · CPC, CCS & COC certified · All 50 states"
      />

    </main>
  );
}
