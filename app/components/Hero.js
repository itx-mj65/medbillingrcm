export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Medical billing infrastructure</p>
          <h1>Medical Billing Services That Engineer the Revenue System Behind Your Practice</h1>
          <p className="intro">Medbilling RCM provides medical billing and management services for physician practices, hospitals, and ambulatory surgery centers across all 50 U.S. states. Claims, denials, coding, AR follow-up, and payer reconciliation are handled by specialty-assigned teams working under a signed Business Associate Agreement and HIPAA-compliant protocols.</p>
          <p className="detail">Hospital and practice billing means working through more than 130,000 pages of Medicare rules, two payment systems that behave differently, and payer requirements that shift every quarter. Most billing departments are short-staffed and falling behind. That is where revenue starts slipping.</p>
          <div className="hero-actions">
            <a className="btn" href="#assessment">Get a Free Revenue Assessment</a>
          </div>
          <p className="proof">97% first-pass clean claim rate, measured at the payer. 14-day onboarding. No setup fees. HIPAA compliant. BAA executed on day one.</p>
        </div>
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-physician.webp"
            alt="Physician and medical practice administrator reviewing an EHR revenue workflow inside a clinic"
          />
        </div>
      </div>
    </section>
  );
}
