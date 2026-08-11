export default function HospitalCTA() {
  return (
    <section className="cta" id="assessment">
      <div className="cta-grid">
        <div className="cta-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hospital-assessment.png" alt="Hospital revenue assessment meeting reviewing denials, aged accounts receivable and DRG mix" />
        </div>
        <div className="cta-copy">
          <p className="eyebrow">Free, specific, no obligation</p>
          <h2>See Where Your Hospital Revenue Is Leaking</h2>
          <p>The revenue assessment is free, and it is specific. We look at your denials, your aged AR, and your DRG mix, and we show you where the money is going. No rate card, no obligation.</p>
          <div className="contact-list">
            <a href="tel:18885512526">Phone: (888) 551-2526</a>
            <a href="mailto:info@medbillingrcm.com">Email: info@medbillingrcm.com</a>
          </div>
          <form className="assessment" id="hospitalAssessmentForm">
            <label>Full name<input type="text" name="name" autoComplete="name" required /></label>
            <label>Work email<input type="email" name="email" autoComplete="email" required /></label>
            <label>Hospital / facility<input type="text" name="organization" required /></label>
            <label>Facility type
              <select name="facility_type" required>
                <option value="">Select type</option>
                <option>Acute care hospital</option>
                <option>Critical access hospital</option>
                <option>Skilled nursing facility</option>
                <option>Long-term acute care</option>
                <option>Inpatient rehab</option>
                <option>Ambulatory surgery center</option>
                <option>Behavioral health facility</option>
                <option>Health system</option>
              </select>
            </label>
            <label className="full">Primary revenue concern
              <select name="concern">
                <option value="">Select concern</option>
                <option>Denials</option>
                <option>Aged AR</option>
                <option>DRG downgrades</option>
                <option>Charge capture</option>
                <option>340B split billing</option>
                <option>TEAM model performance</option>
                <option>Full revenue cycle</option>
              </select>
            </label>
            <button className="btn" type="submit">Get a Free Revenue Assessment</button>
          </form>
          <div className="success" id="hospitalSuccess" role="status">Thank you. Your assessment request has been received.</div>
          <p className="fine">No setup fee. No long-term contract. BAA executed before any patient data is accessed.</p>
        </div>
      </div>
    </section>
  );
}
