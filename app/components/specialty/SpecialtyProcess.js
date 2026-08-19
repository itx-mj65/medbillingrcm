import Link from "next/link";

/**
 * SpecialtyProcess — Revenue Control Framework 5-step process
 * Reusable for ALL specialty pages — steps are the same, intro varies.
 *
 * Props:
 *  intro   string   — sentence below the heading
 *  ctaNote string   — note below the CTA button
 */
export default function SpecialtyProcess({
  intro   = "A structured, end-to-end process built for precision from first patient contact to final payment posting.",
  ctaNote = "For practices billing $500K+ annually. AAPC-certified team.",
}) {
  const steps = [
    { n:"01", h:"Patient Registration & Eligibility",   t:"Verify coverage, COB, and benefits in real time before service delivery" },
    { n:"02", h:"Coding & Charge Capture",              t:"AAPC-certified coders assign ICD-10, CPT, HCPCS codes with zero disruption" },
    { n:"03", h:"Claims Submission & Scrubbing",        t:"Every claim reviewed for compliance before electronic submission to payers" },
    { n:"04", h:"AR Follow-Up & Denial Management",    t:"Proactive follow-up within 30 days root-cause denial resolution, not just resubmission" },
    { n:"05", h:"Payment Posting & Reconciliation",    t:"Accurate posting with EOB review, discrepancy resolution, and detailed reporting" },
  ];

  return (
    <section className="sp-process sp-sec--navy">
      <div className="sp-wrap">
        <p className="sp-ew sp-ew--gold reveal">Revenue Control Framework</p>
        <h2 className="reveal">How We Engineer Your Revenue System</h2>
        <p className="sp-process-intro reveal">{intro}</p>

        <div className="sp-steps">
          {steps.map(({ n, h, t }, i) => (
            <div className="sp-step reveal" key={n}>
              <div className="sp-step-aside">
                <div className="sp-step-num">{n}</div>
                {i < steps.length - 1 && <div className="sp-step-conn" aria-hidden="true" />}
              </div>
              <div className="sp-step-body">
                <h3>{h}</h3>
                <p>{t}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="sp-process-cta">
          <Link href="/request-free-audit/" className="sp-btn sp-btn--gold">
            Schedule Revenue Assessment
          </Link>
          <span className="sp-process-note">{ctaNote}</span>
        </div>
      </div>
    </section>
  );
}
