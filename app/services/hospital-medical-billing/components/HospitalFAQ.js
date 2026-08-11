const faqs = [
  {
    q: "How is hospital billing different from physician billing?",
    a: "Hospital billing covers the facility side of care and runs on two systems: MS-DRG for inpatient stays and APC for outpatient visits, usually on a UB-04 claim form. Physician billing covers the professional side on a CMS-1500. We handle both and keep the facility and professional claims from colliding."
  },
  {
    q: "What is the difference between inpatient and outpatient hospital billing?",
    a: "Inpatient billing pays a single bundled amount per admission under MS-DRG and uses ICD-10-PCS procedure codes. Outpatient billing pays per service line under APC and uses CPT and HCPCS codes. The status of the patient — admitted versus observation — decides which one applies, and getting it wrong is one of the most common hospital billing errors."
  },
  {
    q: "Do you handle DRG optimization and clinical documentation?",
    a: "Yes. We review every inpatient chart for the complications and comorbidities the record supports before the claim is coded, so the DRG matches the care actually delivered. This is where most underpayment on inpatient claims hides."
  },
  {
    q: "Can you manage 340B split billing?",
    a: "Yes. We set up split billing that separates 340B inventory from non-340B inventory, applies Medicaid exclusion logic to avoid duplicate discounts, and keeps the documentation HRSA audits look for."
  },
  {
    q: "How do you handle hospital-based telehealth billing?",
    a: "We bill the originating-site facility fee (Q3014) separately from the professional claim, apply the correct place-of-service codes and modifiers, and confirm state parity rules for commercial payers."
  },
  {
    q: "How quickly can you onboard a hospital?",
    a: "Most engagements go live within about 14 days, depending on EHR access and payer enrollment status. The revenue assessment and BAA come first, then integration, then go-live."
  },
  {
    q: "What does it cost?",
    a: "Pricing is scoped during the revenue assessment based on facility type, specialty mix, and claim volume. There is no published rate card, no setup fee, and no long-term contract."
  },
  {
    q: "Are you HIPAA compliant?",
    a: "Yes. We sign a Business Associate Agreement before accessing any patient data, encrypt protected health information in transit and at rest, restrict access by role, and train staff on HIPAA every year."
  },
];

export default function HospitalFAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="shell faq-grid">
        <div className="faq-intro reveal">
          <p className="eyebrow">Hospital billing FAQs</p>
          <h2>Hospital Billing Questions We Get Asked</h2>
          <p className="lead">Direct answers for hospital leaders evaluating an outside revenue-cycle partner.</p>
        </div>
        <div className="reveal">
          {faqs.map((faq, i) => (
            <details key={i}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
