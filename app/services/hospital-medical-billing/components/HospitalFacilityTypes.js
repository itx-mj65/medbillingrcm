export default function HospitalFacilityTypes() {
  const types = [
    { label: "Acute care hospitals", detail: "Pay under IPPS by DRG" },
    { label: "Critical access hospitals", detail: "Bill on a cost basis, not by DRG" },
    { label: "Skilled nursing facilities", detail: "Per-diem rate under PDPM" },
    { label: "Long-term acute care", detail: "Own forms and thresholds" },
    { label: "Inpatient rehab", detail: "Own forms and thresholds" },
    { label: "Ambulatory surgery", detail: "APC grouping and modifier work" },
    { label: "Behavioral health", detail: "Own forms and thresholds" },
  ];

  return (
    <section className="section" id="facility-types">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">Configured by facility</p>
          <h2>Every Facility Bills Differently, and We're Built for That</h2>
          <p className="lead">We bill for hospitals and facilities of every type. What changes from one to the next is the payment model underneath, and that is what we configure for.</p>
        </div>
        <div className="service-grid reveal">
          {types.map((type, i) => (
            <article className="service" key={i}>
              <span className="service-num">0{i + 1}</span>
              <h3>{type.label}</h3>
              <p>{type.detail}</p>
            </article>
          ))}
        </div>
        <p className="reveal" style={{ marginTop: '28px', maxWidth: '760px' }}>We match the setup to the facility instead of forcing one workflow across all of them, and we tie hospital work back to the <a href="/specialties/" className="text-link">specialties</a> each facility runs.</p>
      </div>
    </section>
  );
}
