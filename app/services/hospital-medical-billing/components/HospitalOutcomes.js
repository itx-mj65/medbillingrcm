export default function HospitalOutcomes() {
  const cases = [
    { client: "Patient First Primary Care", result: "18.2% → 61%", label: "Collection rate", detail: "From $40,000 to $134,200/month on identical charge volume." },
    { client: "Psychiatric Connections", result: "$0 → $43,678", label: "Monthly collections", detail: "From zero collections to $43,678 a month after ERA/EFT enrollment." },
    { client: "Choice Medical Transport", result: "+340%", label: "Collections increase", detail: "From $12,320.63 to $54,220.72 per month." },
    { client: "Divine Dermatology", result: "$60,000", label: "Retained in sale", detail: "One-time audit retained $60,000 through a records true-up." },
  ];

  return (
    <section className="section outcomes" id="client-outcomes">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">Documented client work</p>
          <h2>What Changed for the Practices We Took On</h2>
          <p className="lead">These are revenue cycle outcomes from our own client work. Across three monthly engagements we added $179,778 in collections a month — about $2.16 million a year at the current run rate — by collecting revenue that had already been earned.</p>
        </div>
        <div className="outcome-summary reveal">
          <div>
            <h3>Results across published engagements</h3>
            <p style={{ color: '#c5c9d7', margin: 0, fontSize: '.9rem' }}>Practice-level engagements. The pattern a hospital cares about: the charges did not change, the collections did.</p>
          </div>
          <div className="big-result">
            <strong>$179,778</strong>
            <span>Additional collections per month</span>
          </div>
          <div className="big-result">
            <strong>$2.16M</strong>
            <span>Annualized at the current run rate</span>
          </div>
        </div>
        <div className="case-grid">
          {cases.map((c, i) => (
            <article className="case reveal" key={i}>
              <p className="meta">{c.client}</p>
              <h3>{c.result}</h3>
              <p style={{ fontSize: '.78rem', fontWeight: 700, color: 'var(--green-dark)', textTransform: 'uppercase', letterSpacing: '.06em', margin: '0 0 10px' }}>{c.label}</p>
              <p>{c.detail}</p>
              <a className="text-link" href="/case-studies/">Read the full case studies →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
