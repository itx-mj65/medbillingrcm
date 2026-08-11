export default function HospitalSystems() {
  const platforms = ["Epic","Athenahealth","eClinicalWorks","NextGen","Kareo","AdvancedMD","RXNT","Office Ally","Practice Fusion","CareCloud","DrChrono","Greenway Health"];

  return (
    <section className="section systems" id="systems">
      <div className="shell systems-grid">
        <div className="reveal">
          <p className="eyebrow">EHR and PM integration</p>
          <h2>The Systems We Already Work Inside</h2>
          <p className="lead">We bill inside the platform a hospital already runs, or we move data into ours if that is easier. No forced migration. Custom integrations are scoped during the revenue audit at no extra charge.</p>
          <a className="text-link" href="#assessment">Check Your System Compatibility →</a>
        </div>
        <div className="systems-visual reveal">
          <div className="system-cloud compact">
            {platforms.map((p, i) => <span key={i}>{p}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
