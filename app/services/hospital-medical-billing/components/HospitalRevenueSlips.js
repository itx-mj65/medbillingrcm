export default function HospitalRevenueSlips() {
  const slips = [
    {
      title: "DRG downgrades and missing complications",
      body: "When a chart does not document a complication or comorbidity of the care actually involved, the claim drops to a lower-paying DRG. A sepsis admission coded without its major complication can pay roughly $6,000 less (AAPC, FY2026 IPPS Final Rule). We review every inpatient chart for documentation before coding, not after the payment posts short."
    },
    {
      title: "Inpatient stays that should have been outpatient",
      body: "Condition Code 44 lets a hospital correct an admission to outpatient status when utilization review finds the inpatient criteria were not met. It only works before discharge and with the right approvals. Applied late, it becomes an audit flag instead of a fix. We catch status problems while the patient is still in the building."
    },
    {
      title: "Records requests with a clock on them",
      body: "A Recovery Audit Contractor request gives a hospital 45 days to respond (CMS RAP), and a late response becomes an automatic recoupment. We keep documentation audit-ready for every coded encounter, so a request is a filing task rather than a fire drill."
    },
    {
      title: "AR that ages past the benchmark",
      body: "HFMA treats gross days in AR under 40 as the target and 50 or more as a sign of a structural collection problem. When accounts sit, cash sits. Our AR team works aged inpatient accounts by payer-specific escalation rather than working the list oldest-first."
    },
  ];

  return (
    <section className="section" id="revenue-slips" style={{ background: 'var(--color-ivory)' }}>
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">Revenue integrity</p>
          <h2>The Places Hospital Revenue Quietly Slips, and How We Close Each One</h2>
        </div>
        <div className="problem-grid">
          {slips.map((slip, i) => (
            <article className="issue reveal" key={i}>
              <span className="issue-index">0{i + 1}</span>
              <h3>{slip.title}</h3>
              <p>{slip.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
