export default function HospitalRCMFramework() {
  const stages = [
    {
      num: "01",
      title: "Before the patient is seen",
      items: ["Provider credentialing", "Patient scheduling", "Pre-registration", "Insurance verification", "Eligibility and benefits verification", "Patient registration"]
    },
    {
      num: "02",
      title: "While the claim is built",
      items: ["Charge capture", "Coding and billing", "DRG documentation review — every inpatient chart reviewed for completeness before the claim goes out"]
    },
    {
      num: "03",
      title: "Getting paid and keeping it",
      items: ["Claims submission", "Accounts receivable management", "Denial management", "Patient collections", "Revenue reporting", "Patient follow-up"]
    }
  ];

  return (
    <section className="section" id="rcm-framework">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">Revenue Control Framework</p>
          <h2>How We Hold a Hospital's Revenue Cycle Together</h2>
          <p className="lead">Every hospital account runs inside our Revenue Control Framework — the five-phase method behind every Medbilling RCM engagement. On the hospital side, our work falls into three stages, each built to catch revenue before it leaks rather than chase it after.</p>
        </div>
        <div className="steps">
          {stages.map((stage) => (
            <article className="step reveal" key={stage.num}>
              <div style={{ gridColumn: '1', fontFamily: 'var(--serif)', fontSize: '3rem', color: 'var(--gold)', lineHeight: 1 }}>{stage.num}</div>
              <div>
                <h3>{stage.title}</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {stage.items.map((item, i) => (
                  <li key={i} style={{ padding: '6px 0 6px 18px', borderBottom: '1px solid var(--color-line)', position: 'relative', fontSize: '.95rem' }}>
                    <span style={{ position: 'absolute', left: 0, top: '13px', width: '6px', height: '6px', background: 'var(--green)', display: 'block' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
