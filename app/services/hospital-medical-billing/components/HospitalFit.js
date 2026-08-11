export default function HospitalFit() {
  return (
    <section className="section fit" id="who-this-is-for">
      <div className="shell">
        <div className="section-head center reveal">
          <p className="eyebrow">Clear fit criteria</p>
          <h2>Who This Is For</h2>
          <p className="lead">We are a strong fit for some hospitals and the wrong choice for others. We would rather say so up front.</p>
        </div>
        <div className="fit-grid">
          <article className="fit-card good reveal">
            <h3>A strong fit if:</h3>
            <ul>
              <li>You run a hospital, health system, or facility and want billing measured at the payer, not the clearinghouse</li>
              <li>You have revenue leaking in denials, aged AR, or DRG downgrades and want it found and fixed</li>
              <li>You want a specialist team that knows your payers, not a rules engine that looks them up</li>
            </ul>
          </article>
          <article className="fit-card less reveal">
            <h3>Probably not a fit if:</h3>
            <ul>
              <li>You want the lowest possible percentage and nothing else</li>
              <li>You want to keep billing fully in-house and only need software</li>
            </ul>
          </article>
        </div>
        <div style={{ textAlign: 'center', marginTop: '36px' }} className="reveal">
          <a className="btn" href="#assessment">Get a Free Revenue Assessment</a>
        </div>
      </div>
    </section>
  );
}
