export default function Faq() {
  const faqs = [
    {
      q: "How long does onboarding take before we see results?",
      a: "Onboarding runs 14 days and is built for zero disruption. Most clients see measurable clean claim improvement in the first billing cycle, usually within 30 days of go-live."
    },
    {
      q: "Do you replace our existing billing staff?",
      a: "We replace the function, not the relationship. Most clients move existing billing staff into patient services or coordination roles. Transition planning is included at no additional cost."
    },
    {
      q: "What EHR and PM systems do you integrate with?",
      a: "eClinicalWorks, RXNT, Office Ally, Epic, Athenahealth, NextGen, Kareo, AdvancedMD, and 30+ others. Custom integrations are scoped during the revenue audit phase at no extra charge."
    },
    {
      q: "How is pricing structured?",
      a: "Engagements are custom-structured during the revenue assessment based on practice size, specialty mix, and scope of services. Fees are tied to net collections: no setup fees, no monthly minimums, no long-term contracts."
    },
    {
      q: "What specialties do you work with?",
      a: "Primary care, orthopedics, cardiology, behavioral health, radiology, dermatology, gastroenterology, urgent care, and more. Medical coding and billing services are handled by specialty-specific teams assigned at onboarding, so the people working your claims already know how your payers behave in your specialty."
    },
    {
      q: "How do you handle compliance and HIPAA?",
      a: "Full HIPAA-compliant infrastructure. All staff complete annual HIPAA and compliance training. BAAs are executed on day one, before any patient data is accessed."
    },
    {
      q: "How do you measure your clean claim rate?",
      a: "At the payer, on first submission, with zero rework. A claim that needed a correction or resubmission before it paid does not count toward the figure. Many vendors report clearinghouse acceptance instead, which runs seven to twelve points higher."
    },
    {
      q: "How much does medical billing outsourcing cost?",
      a: "Most medical billing companies charge a percentage of net collections. Among vendors who publish their rates, the range runs from roughly 2.5% to 9%, varying by specialty, claim volume, and how much of the cycle the vendor handles. Medbilling RCM structures each engagement during the revenue assessment rather than quoting from a rate card. No setup fees, no monthly minimums, no long-term contracts."
    },
    {
      q: "What is a good clean claim rate?",
      a: "HFMA's high-performance benchmark for 2026 is 98%, measured at the payer on first submission with zero rework. Compare vendor claims carefully. A company advertising 99% is usually reporting clearinghouse acceptance, which only confirms the claim was formatted correctly and runs seven to twelve points above payer-level first-pass yield."
    },
    {
      q: "Should I outsource medical billing or keep it in-house?",
      a: "In-house works when you have an experienced, stable billing team and steady enough volume to keep them busy. Outsourcing works when turnover keeps disrupting collections, when hiring cannot keep pace with growth, or when denials are rising faster than the team can appeal them. Revenue cycle roles turn over at 11% to 40% a year against a 3.8% national average (Experian), which is why continuity tends to be the real argument rather than price."
    },
    {
      q: "How long does it take to switch medical billing companies?",
      a: "Onboarding with Medbilling RCM runs 14 days with no gap in claim submission. Week one maps payer contracts, denial history, and current AR position. Week two configures EHR and PM integrations and starts processing new claims alongside your existing workflow. The variable outside our control is how quickly your current vendor releases data and how clean their handoff records are."
    },
    {
      q: "What happens to our billing records if we sell the practice?",
      a: "Buyers examine the patient ledger during diligence, and any credit balance you cannot trace to a specific payment tends to be treated as money owed. Reconciling years of posting history takes longer than a diligence window allows, so the work is worth doing before a sale is in view rather than after a number has already been proposed. We handle records true-up audits as part of transition support."
    }
  ];

  return (
    <section className="reveal section faq" id="faq">
      <div className="shell faq-grid">
        <div className="faq-intro reveal">
          <p className="reveal eyebrow">Practical answers</p>
          <h2 className="reveal">Frequently Asked Questions</h2>
          <p className="lead">Straight answers about onboarding, pricing, compliance, clean claim measurement, and switching billing partners.</p>
        </div>
        <div className="reveal">
          {faqs.map((faq, i) => (
            <details className="reveal" key={i}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
