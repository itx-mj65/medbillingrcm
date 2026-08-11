export default function HospitalCleanClaim() {
  return (
    <section className="section" style={{ background: 'var(--navy)', color: '#fff' }} id="clean-claim">
      <div className="shell">
        <div style={{ display: 'grid', gridTemplateColumns: '.75fr 1.25fr', gap: '64px', alignItems: 'center' }}>
          <div className="reveal">
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(5rem,10vw,10rem)', lineHeight: .85, color: 'var(--gold)' }}>97%</div>
            <small style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '.72rem', lineHeight: 1.5, letterSpacing: '.11em', textTransform: 'uppercase', color: '#c4d6b8', marginTop: '14px' }}>
              First-pass clean claim rate<br />measured at the payer
            </small>
          </div>
          <div className="reveal">
            <p className="eyebrow" style={{ color: '#c4d6b8' }}>Measured at the payer</p>
            <h2 style={{ color: '#fff' }}>97%, and Where We Measure It</h2>
            <p style={{ color: '#d0d4de' }}>Our 97% first-pass clean claim rate is measured at the payer on institutional (837I) claims, not at the clearinghouse where the number always looks higher. For a hospital claim riding on a DRG or an APC, that is the difference between a claim that is formatted correctly and one that actually paid.</p>
            <p style={{ color: '#d0d4de' }}>We explain why a 99% figure usually means the clearinghouse, and how the two measurements differ, on our <a href="/" className="text-link" style={{ color: '#c4d6b8', borderBottomColor: 'var(--gold)' }}>main revenue page</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
