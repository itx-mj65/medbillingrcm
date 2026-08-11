export default function HospitalProcess() {
  const steps = [
    { num: "01", title: "Revenue assessment", body: "A review of a sample of your AR, denials, and aging to find where revenue is leaking, at no cost." },
    { num: "02", title: "Scope and BAA", body: "We agree on scope and sign a Business Associate Agreement before any patient data moves." },
    { num: "03", title: "EHR integration", body: "We connect to your EHR and practice-management system and confirm payer enrollment and credentialing are current." },
    { num: "04", title: "Go live", body: "We begin billing and give you reporting you can actually read." },
  ];

  return (
    <section className="section framework" id="process">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">From assessment to go-live</p>
          <h2>What Happens After You Request an Assessment</h2>
          <p className="lead">Starting with us takes four steps, not a quarter.</p>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <article className="step reveal" key={step.num}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '3rem', color: 'var(--gold)', lineHeight: 1 }}>{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <p className="target reveal">Most engagements go live within 14 days of receiving system access and the signed BAA.</p>
      </div>
    </section>
  );
}
