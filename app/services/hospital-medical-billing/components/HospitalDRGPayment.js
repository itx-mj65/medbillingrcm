export default function HospitalDRGPayment() {
  return (
    <section className="tech" id="drg-payment">
      <div className="tech-grid">
        <div className="tech-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hospital-coding.png" alt="Inpatient coding specialist validating hospital documentation and DRG assignment" />
        </div>
        <div className="tech-copy">
          <p className="eyebrow">Documentation to payment</p>
          <h2>Getting Paid for the Care That Was Actually Delivered</h2>
          <p>Each inpatient admission groups into a DRG that sets the payment. The FY2026 base rate is <strong style={{ color: '#fff' }}>$6,752.61</strong> per the CMS final rule. What moves an admission to the right payment is documentation: the complication or comorbidity the record supports. Our team finds it before the claim is built, so the DRG matches the care delivered.</p>
          <p>CMS has widened its Medicare Advantage risk-adjustment audits from a few dozen plans to more than 550 contracts, and every diagnosis now has to meet the MEAT standard: monitored, evaluated, assessed, treated. We hold records to that standard on every encounter, so the response is ready before an audit asks.</p>
          <p className="human">A grouper can flag the code. Whether the documentation supports it is a judgment call, and that stays with a person on our coding team.</p>
        </div>
      </div>
    </section>
  );
}
