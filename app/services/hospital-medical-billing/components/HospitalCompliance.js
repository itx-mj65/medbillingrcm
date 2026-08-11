export default function HospitalCompliance() {
  const rules = [
    "The No Surprises Act and its limits on balance billing",
    "The CMS Hospital Price Transparency Rule and machine-readable charge files",
    "The Transparency in Coverage Rule",
    "340B drug pricing program guidelines",
    "The OIG Work Plan and its current audit targets",
    "Condition Code 44 rules for inpatient-to-outpatient reclassification",
    "HIPAA privacy and security on every claim we touch",
    "The Stark Law and the Anti-Kickback Statute",
    "State-specific balance-billing laws",
  ];

  return (
    <section className="section" id="compliance" style={{ background: 'var(--color-ivory)' }}>
      <div className="shell">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: '64px', alignItems: 'start' }}>
          <div>
            <div className="section-head reveal" style={{ marginBottom: '32px' }}>
              <p className="eyebrow">Compliance by design</p>
              <h2>The Rules We Build Every Claim Around</h2>
              <p className="lead">Hospital billing lives inside a stack of federal and state rules, and a claim that ignores any one of them is a claim at risk. We build every workflow around them:</p>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {rules.map((rule, i) => (
                <li key={i} className="reveal" style={{ padding: '12px 0 12px 22px', borderBottom: '1px solid var(--color-line)', position: 'relative', fontSize: '.95rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: '20px', width: '7px', height: '7px', background: 'var(--green)', display: 'block' }}></span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-card)', padding: '40px', color: '#eef0f6' }}>
              <p className="eyebrow" style={{ color: '#c4d6b8' }}>BAA before data access</p>
              <h3 style={{ color: '#fff', fontSize: 'var(--fs-h3)' }}>HIPAA and a Signed BAA Before We Touch a Single Record</h3>
              <p style={{ color: '#d0d4de', fontSize: '.95rem' }}>A compliance team tracks changes in federal and state law so the workflows stay current. HIPAA and a signed Business Associate Agreement are in place before we touch a single record.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0' }}>
                {["HIPAA-compliant infrastructure", "BAA executed on day one", "PHI encrypted in transit and at rest", "Role-based access controls", "Annual staff HIPAA training"].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0 8px 18px', borderBottom: '1px solid rgba(255,255,255,.12)', position: 'relative', fontSize: '.88rem', color: '#c5c9d7' }}>
                    <span style={{ position: 'absolute', left: 0, top: '15px', width: '6px', height: '6px', background: 'var(--gold)', display: 'block' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
