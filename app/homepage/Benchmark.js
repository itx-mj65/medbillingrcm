export default function Benchmark() {
  return (
    <section className="section benchmark">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">Transparent comparison</p>
          <h2>Where We Sit Against the Benchmarks</h2>
          <p className="lead">The industry figures below come from HFMA and Kodiak Solutions. Our figures come from our own reporting and can be produced on request.</p>
        </div>
        <div className="table-wrap reveal">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Industry</th>
                <th>Medbilling RCM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First-pass clean claim rate</td>
                <td>98% is HFMA&#39;s high-performance mark</td>
                <td>97%, measured at the payer</td>
              </tr>
              <tr>
                <td>Onboarding time</td>
                <td>Rarely published by vendors</td>
                <td>14 days</td>
              </tr>
              <tr>
                <td>Setup fees</td>
                <td>Common in the industry</td>
                <td>None</td>
              </tr>
              <tr>
                <td>Contract lock-in</td>
                <td>Multi-year terms are standard</td>
                <td>No long-term contract required</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
