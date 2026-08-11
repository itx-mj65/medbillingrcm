export default function HospitalHero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Hospital revenue cycle management</p>
          <h1>Hospital Medical Billing Services for Inpatient and Outpatient Care</h1>
          <p className="intro">Hospital billing is not physician billing with a bigger claim form. A hospital bills for the facility: the bed, the operating room, the drugs, the imaging. Admitted patients pay under MS-DRG, outpatient visits pay under APC, and both ride on a UB-04. When a claim in either system is coded short or denied, that is revenue the hospital already earned. We handle the facility side end to end, and we report what actually landed at the payer.</p>
          <div className="hero-actions">
            <a className="btn" href="#assessment">Get a Free Revenue Assessment</a>
          </div>
          <p className="proof">Institutional billing built around status, documentation, payer rules, and the payment that actually lands.</p>
        </div>
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hospital-hero.png" alt="Hospital revenue-cycle leaders reviewing an EHR and financial performance dashboard" />
        </div>
      </div>
    </section>
  );
}
