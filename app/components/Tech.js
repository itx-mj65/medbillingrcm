import Image from "next/image";

export default function Tech() {
  return (
    <section className="tech">
      <div className="tech-grid">
        <div className="tech-media">
          <Image
            src="/tech-specialist.webp"
            alt="Revenue cycle specialist reviewing automated claim analytics"
            fill
            sizes="(max-width:1050px) 100vw, 50vw"
            style={{ objectFit:"cover", objectPosition:"50% center" }}
            quality={80}
          />
        </div>
        <div className="tech-copy">
          <p className="eyebrow">Human judgment, operational scale</p>
          <h2>Technology Runs the Volume. Specialists Make the Calls.</h2>
          <p>Four out of five health systems are piloting or deploying AI somewhere in their revenue cycle, according to an HFMA and AKASA survey of 519 CFOs and revenue cycle leaders. In a separate HFMA survey this February, only 7% said they felt very prepared for it.</p>
          <p>That gap is the story. The technology is arriving faster than the operational discipline to use it well. As Nikki Harper of Mayo Clinic put it to HFMA in April 2026, putting automation on top of a broken process compounds the problem with speed and scale.</p>
          <p>We build the process first, then automate what is genuinely repetitive. Eligibility verification runs against payer systems before the appointment. Claims are scrubbed against payer-specific rule libraries before submission. Remittance data posts and reconciles against contracted rates without rekeying.</p>
          <p className="human">What stays with people: the appeal that needs a clinical argument, the payer contract nobody has renegotiated in six years, the denial pattern that looks random until someone who knows that payer recognizes it. Judgment is what you are hiring.</p>
        </div>
      </div>
    </section>
  );
}
