export default function Hospital340B() {
  return (
    <section className="section" id="340b-billing">
      <div className="shell">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          <div className="reveal">
            <p className="eyebrow">Drug revenue integrity</p>
            <h2>340B Split Billing Without the Audit Exposure</h2>
            <p>Hospitals with 340B status buy covered drugs at up to <strong>50% below market</strong> (AHA, 2025). The rule that trips them is split billing: separating which doses came from 340B inventory and which did not, then billing each correctly.</p>
            <p>The stakes are real. HRSA audits about 200 covered entities a year, and in FY2025 roughly <strong>49% of those audits came back with findings</strong>. Federal law also bars duplicate discounts on Medicaid.</p>
            <p>We set up split billing with correct inventory attribution and Medicaid exclusion logic from the first claim, and we keep the documentation an audit will ask for.</p>
          </div>
          <div className="reveal">
            <p className="eyebrow">Mandatory model</p>
            <h2>What the 2026 TEAM Model Changes for Hospital Billing</h2>
            <p>On January 1, 2026, CMS replaced the voluntary bundled-payment program with the mandatory <strong>Transforming Episode Accountability Model (TEAM)</strong>.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
              {[
                "741 hospitals across 188 regions are enrolled",
                "Each is accountable for the total cost of care for 30 days after discharge from one of five surgical episodes",
                "Beat the spending target and the hospital keeps the difference. Miss it and the hospital repays it",
                "The model runs through 2030"
              ].map((item, i) => (
                <li key={i} style={{ padding: '10px 0 10px 20px', borderBottom: '1px solid var(--color-line)', position: 'relative', fontSize: '.95rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: '18px', width: '7px', height: '7px', background: 'var(--gold)', display: 'block' }}></span>
                  {item}
                </li>
              ))}
            </ul>
            <p>We track episode spending against target as it accrues and flag the post-acute patterns that push an episode over, so the reconciliation is not a surprise at the end.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
