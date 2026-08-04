export default function Measure() {
  return (
    <section className="section measure">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">Measurement matters</p>
          <h2>A Number Worth Checking Before You Believe It</h2>
          <p className="lead" style={{ color: "#d1d4dd" }}>A clean claim rate can be measured at two different points, and the two figures are not close.</p>
        </div>
        <div className="measure-grid">
          <article className="measure-card reveal">
            <p className="label">Measured at the clearinghouse</p>
            <div className="number">Format</div>
            <p>Measured at the clearinghouse, it confirms the claim was formatted correctly. No missing zip code, no malformed field. The payer can still reject it on eligibility, authorization, or medical necessity the moment it arrives. Measured at the payer, it means the claim was accepted and paid. Clearinghouse acceptance runs seven to twelve points higher than payer first-pass yield, so the same billing operation can honestly report two very different numbers depending on which point it counts.</p>
          </article>
          <article className="measure-card reveal">
            <p className="label">Measured at the payer</p>
            <div className="number">97%</div>
            <p>Our 97% is first-pass yield measured at the payer, with zero rework. A claim that needed a correction, a resubmission, or a documentation request before it paid does not count. HFMA&#39;s high-performance benchmark for 2026 is 98% on that same basis.</p>
          </article>
        </div>
        <p className="reveal" style={{ marginTop: "34px", maxWidth: "900px" }}>There is a second number worth asking about. Clean claim rate tells you how many claims left correctly. Gross collection rate tells you how much of what you billed actually arrived. A practice can post a strong clean claim rate and still collect a fraction of its charges, because a claim can be submitted flawlessly and then never followed again.</p>
        <p className="closing reveal">Worth asking any billing company which point they count from before comparing figures side by side.</p>
      </div>
    </section>
  );
}
