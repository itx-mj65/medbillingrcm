export default function HospitalInHouseCost() {
  return (
    <section className="section cost" id="in-house-cost">
      <div className="shell">
        <div className="cost-grid">
          <div className="reveal">
            <p className="eyebrow">Operating reality</p>
            <h2>What In-House Hospital Billing Costs to Run</h2>
            <div className="cost-number">
              $50,250
              <span>Median records specialist salary (BLS, May 2024)</span>
            </div>
          </div>
          <div className="reveal">
            <p>A hospital billing operation is not one biller. It is a department, and the roles that matter most are the hardest to keep.</p>
            <p>Inpatient coders trained on MS-DRG and clinical documentation are scarcer than general billers. Revenue cycle roles turn over at <strong>11 to 40% a year</strong> against a national average near 3.8% (Experian).</p>
            <p>The cost that hurts is not the salary. It is the empty seat during a bad denial quarter, when DRG-level knowledge walks out the door and claims sit. We carry that staffing risk instead.</p>
            <p>Pricing is scoped during the revenue assessment by facility type, specialty mix, and claim volume. No rate card, no setup fee.</p>
            <a className="btn" href="#assessment">See What Your Hospital Is Leaving on the Table</a>
          </div>
        </div>
      </div>
    </section>
  );
}
