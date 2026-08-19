import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import SpecialtyHero from "@/components/specialty/SpecialtyHero";

export default function MentalHealthBillingPage() {
  return (
    <main className="sp-page mh-page" id="main">

      {/* ═══ HERO ════════════════════════════════════════════
          UNIQUE: Hero stats panel uses icon badges instead of
          plain numbers — fits the human/care nature of mental health
      ═════════════════════════════════════════════════════ */}
      <SpecialtyHero
        eyebrow="Behavioral Health Revenue Infrastructure"
        heading="Mental Health Billing Services"
        intro="Since 2024, Medbilling RCM has been committed to providing complete medical billing solutions for mental health and behavioral health providers improving your insurance and patient collections so you can prioritize care and scale your practice."
        badge="AAPC Certified · MHPAEA Compliant · 50 States"
        stats={[
          { num: "50%",   label: "Overhead Cost Reduction" },
          { num: "5–10%", label: "Operational Efficiency Gain" },
          { num: "99%",   label: "Claim Accuracy Rate" },
          { num: "24/7",  label: "Online Data Access" },
        ]}
      />

      {/* ═══ COMPREHENSIVE SERVICES — 8-card mosaic ══════════
          UNIQUE DESIGN: ivory background with 8 service cards
          in a 4-col mosaic, each with a left-accent border in
          alternating green/gold — wave-like visual rhythm.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal" id="services">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Comprehensive MH Billing</p>
          <h2 className="reveal">Our Comprehensive Mental Health Billing Services</h2>
          <p className="reveal mh-rcm-intro">Our team of mental health billing experts manages your medical billing end-to-end covering everything from pre-intake insurance verification to accounts receivable management, reporting, and analysis.</p>
          <p className="reveal mh-rcm-intro">We integrate seamlessly with your existing billing software, EHR, and practice management systems, so nothing changes in your workflow only your results.</p>

          <div className="mh-services-mosaic">
            {[
              { icon:"📋", h:"Claims Processing",         t:"We handle claims from start to finish, submitting them electronically and coordinating secondary claims through automatic crossovers. Smooth integration with your existing billing software is standard." },
              { icon:"👤", h:"Patient Billing",           t:"Patient billing for mental health services includes mailing statements, answering account inquiries, and sending follow-up letters keeping patients informed and payments moving." },
              { icon:"💳", h:"Payment Posting",           t:"We post payments and adjustments directly from insurance EOBs/ERAs and handle patient copays, ensuring all transactions are accurately recorded with full reconciliation." },
              { icon:"📊", h:"Financial Reports",         t:"Access insurance aging, patient aging, daily and monthly summaries, and reimbursement analysis across different payers keeping a clear view of your practice's financial health." },
              { icon:"🔄", h:"Follow-Up and Appeals",     t:"Our team actively follows up on unpaid claims by contacting insurance companies, resubmitting claims, reviewing denials, and filing appeals to secure every dollar owed to your practice." },
              { icon:"🖥️", h:"Online Access to Data",     t:"Providers have 24/7 online access to monitor claim statuses, check balances, and run financial reports without needing to contact the billing office for routine information." },
              { icon:"✅", h:"Verification of Benefits",  t:"We verify mental health benefits and eligibility before every patient visit confirming co-pays, deductibles, annual visit limits, authorization requirements, and claims mailing addresses." },
              { icon:"📅", h:"Practice Management Solutions", t:"Simplify your practice with online appointment calendars and automatic reminder calls or text messages keeping your schedule organized and reducing no-shows." },
            ].map(({ icon, h, t }, i) => (
              <div className={`mh-svc-card mh-svc-card--${i % 2 === 0 ? 'green' : 'gold'} reveal`} key={h}>
                <div className="reveal mh-svc-icon" aria-hidden="true">{icon}</div>
                <h3 className="reveal">{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>

          <div className="mh-services-cta">
            <Link href="/request-free-audit/" className="reveal sp-btn sp-btn--primary">Request Free Demo</Link>
          </div>
        </div>
      </section>

      {/* ═══ DENIAL CHALLENGES — NEW UNIQUE SECTION ══════════
          UNIQUE DESIGN: Dark navy full-bleed section with 4 denial
          challenge cards using a "problem → solution" two-line
          structure. Each card has a pulsing alert dot (red tint)
          that turns green on hover — signaling problem → resolved.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal" id="denial-challenges">
        <div className="sp-wrap">
          <p className="reveal sp-ew sp-ew--gold">Overcoming Denial Challenges</p>
          <h2 className="reveal">Helping Your Mental Health Practice Overcome Denial Challenges</h2>
          <p className="reveal mh-denial-intro">If your mental health practice is dealing with any of the following billing challenges, it's time to outsource your mental health billing services to Medbilling RCM. We identify and resolve the root causes that drive denials in behavioral health practices.</p>

          <div className="mh-denial-grid">
            {[
              {
                icon:"🔐", n:"01",
                h:"Prior Authorization",
                t:"Many mental health procedures require prior authorization before treatment can begin. We proactively manage all authorization requests, tracking approvals and ensuring no encounter goes unprotected preventing the most common denial trigger in behavioral health billing.",
              },
              {
                icon:"📝", n:"02",
                h:"Documentation Errors",
                t:"CMS mandates specific documentation including timesheets and encounter notes to establish medical necessity. Accurate documentation significantly reduces denials. Our team reviews documentation completeness before every claim submission.",
              },
              {
                icon:"🎯", n:"03",
                h:"Coding Accuracy",
                t:"Billing is based on the number of therapy units provided. Correct CPT & HBAI codes related to the time spent in therapy help avoid billing errors. Our AAPC-certified coders ensure time-based billing is applied precisely for every session type.",
              },
              {
                icon:"⚖️", n:"04",
                h:"Policy Violations",
                t:"Common violations that lead to costly denials and audits include: Delayed recording of progress notes past payer-required timelines, and billing for services requiring prior authorization without having obtained it.",
              },
            ].map(({ icon, n, h, t }) => (
              <div className="mh-denial-card reveal" key={n}>
                <div className="reveal mh-denial-top">
                  <div className="reveal mh-denial-icon-wrap" aria-hidden="true">{icon}</div>
                  <span className="mh-denial-num">{n}</span>
                  <div className="mh-denial-dot" aria-hidden="true" />
                </div>
                <h3 className="reveal">{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REVENUE CONTROL FRAMEWORK ════════════════════════
          UNIQUE: Custom 5-step process for mental health —
          different step titles from shared SpecialtyProcess.
          Uses same visual style but BH-specific content.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="process">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Revenue Control Framework</p>
          <h2 className="reveal">How We Engineer Your Mental Health Revenue System</h2>
          <p className="reveal mh-process-intro">A structured end-to-end billing infrastructure from pre-intake verification through final payment reconciliation designed for the specific complexity of behavioral health billing.</p>

          <div className="mh-steps">
            {[
              { n:"01", h:"Benefits Verification",           t:"Verify mental health benefits, co-pays, deductibles, visit limits, and auth requirements before intake" },
              { n:"02", h:"Prior Authorization",             t:"Proactive auth management for all mental health, behavioral health, and substance use procedures" },
              { n:"03", h:"Coding & Documentation Review",   t:"CPT, HBAI, time-based coding with encounter note review before any claim is submitted" },
              { n:"04", h:"Electronic Claims Submission",    t:"Clean claims submitted electronically with secondary crossovers coordinated automatically" },
              { n:"05", h:"Payment Posting & AR",            t:"EOB/ERA posting, patient copay recording, denial appeals, and unpaid claim follow-up" },
            ].map(({ n, h, t }, i, arr) => (
              <div className="mh-step" key={n}>
                <div className="mh-step-aside">
                  <div className="mh-step-num">{n}</div>
                  {i < arr.length - 1 && <div className="mh-step-conn" aria-hidden="true" />}
                </div>
                <div className="mh-step-body">
                  <h3 className="reveal">{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mh-process-cta">
            <Link href="/request-free-audit/" className="reveal sp-btn sp-btn--primary">Schedule Revenue Assessment</Link>
            <span className="mh-process-note">For mental health &amp; behavioral health providers · AAPC-certified coders · 50 states served</span>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US — 6-card grid ══════════════════════
          UNIQUE DESIGN: White section, 3-col grid with cards
          that have a rotating border animation always-on —
          different from orb (rheum/intmed) and pulse-dot (rad).
          Cards use white bg on ivory section for contrast.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--ivory reveal" id="why">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Why Choose Us</p>
          <h2 className="reveal">Why Choose Our Behavioral &amp; Mental Health Billing Services?</h2>
          <p className="reveal mh-why-sub">Our billing services for mental health providers are designed to increase revenue, streamline your revenue cycle, and reduce denials while your staff focuses on patient care.</p>

          <div className="mh-why-grid">
            {[
              { icon:"📈", h:"Proven Expertise in Revenue Management",   t:"We specialize in simplifying revenue cycles for Behavioral and Mental Health practices, helping you boost income while cutting down on claim denials since 2024." },
              { icon:"🏅", h:"Certified Professionals You Can Trust",    t:"Our team is certified by AAPC, so you know you're working with experts in medical coding and billing who are dedicated to getting things right the first time." },
              { icon:"🌐", h:"Experience with All Major Insurers",       t:"Whether commercial or government payers, we handle claims efficiently making sure you receive the coverage and reimbursements you deserve across every insurance type." },
              { icon:"⚕️", h:"Specialized in Medicare, Medicaid & MHPAEA",t:"We have deep expertise in Medicare, state Medicaid programs, HIPAA, and the Mental Health Parity and Addiction Equity Act ensuring your billing is accurate and fully compliant." },
              { icon:"💰", h:"Cutting Costs and Boosting Efficiency",    t:"As a leading mental health billing company, we implement strategies that slash overhead costs by up to 50% while improving day-to-day practice efficiency by 5–10%." },
              { icon:"🖥️", h:"Advanced PMS/EHR Software",               t:"Medbilling RCM utilizes the latest practice management and EHR software to streamline workflows, improve accuracy, and ensure seamless billing processes without disrupting your team." },
            ].map(({ icon, h, t }) => (
              <div className="mh-why-card reveal" key={h}>
                <div className="mh-why-spin-border" aria-hidden="true" />
                <div className="mh-why-inner">
                  <div className="reveal mh-why-icon-wrap" aria-hidden="true">{icon}</div>
                  <h3 className="reveal">{h}</h3>
                  <p>{t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER STATS ══════════════════════════════
          UNIQUE DESIGN: 4 large counter-style cards in a row,
          each with a ticker line below showing "Before → After"
          using a pill badge — visually different from all other
          specialty pages.
      ═════════════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--navy reveal">
        <div className="sp-wrap">
          <p className="reveal sp-ew sp-ew--gold">Operational Transformation</p>
          <h2 className="reveal">Before → After. The Numbers Tell the Story.</h2>
          <h3 className="reveal mh-ba-sub">Optimizing Practice Efficiency and Reducing Overhead Costs</h3>

          <div className="mh-counter-grid">
            <div className="reveal mh-counter-card">
              <div className="mh-counter-num">50<span>%↓</span></div>
              <div className="reveal mh-counter-lbl">Overhead Cost Reduction</div>
              <div className="mh-counter-pill">
                <span className="mh-pill--before">High</span>
                <span className="mh-pill-arrow">→</span>
                <span className="mh-pill--after">50% Lower</span>
              </div>
            </div>
            <div className="reveal mh-counter-card mh-counter-card--accent">
              <div className="mh-counter-num">5–10<span>%↑</span></div>
              <div className="reveal mh-counter-lbl">Operational Efficiency</div>
              <div className="mh-counter-pill">
                <span className="mh-pill--before">Baseline</span>
                <span className="mh-pill-arrow">→</span>
                <span className="mh-pill--after">+5–10%</span>
              </div>
            </div>
            <div className="reveal mh-counter-card">
              <div className="mh-counter-num">99<span>%</span></div>
              <div className="reveal mh-counter-lbl">Claim Accuracy Rate</div>
              <div className="mh-counter-pill">
                <span className="mh-pill--before">Frequent errors</span>
                <span className="mh-pill-arrow">→</span>
                <span className="mh-pill--after">99% accurate</span>
              </div>
            </div>
            <div className="reveal mh-counter-card mh-counter-card--accent">
              <div className="mh-counter-num">24<span>/7</span></div>
              <div className="reveal mh-counter-lbl">Online Data Access</div>
              <div className="mh-counter-pill">
                <span className="mh-pill--before">Slow</span>
                <span className="mh-pill-arrow">→</span>
                <span className="mh-pill--after">Always on</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ══════════════════════════════════════════════ */}
      <section className="sp-sec sp-sec--paper reveal" id="faq">
        <div className="sp-wrap">
          <p className="reveal sp-ew">Common Questions</p>
          <h2 className="reveal">Frequently Asked Questions</h2>

          <div className="mh-faq-layout">
            <div className="mh-faq-intro">
              <p>Direct answers about mental health billing, CPT codes, credentialing, and telehealth compliance.</p>
            </div>
            <div className="mh-faq-list">
              {[
                ["How do mental health billing requirements differ from other specialties?",
                 "Mental health billing involves unique CPT codes, time-based billing, and specific payer policies for therapy, psychiatry, and telehealth services. Unlike procedure-based specialties, mental health billing is driven by session length, provider type, and the nature of the intervention requiring specialized knowledge that generalist billing teams often lack."],
                ["What are the most common reasons for claim denials in mental health billing?",
                 "Denials in mental health billing most often result from missing documentation (especially progress notes and timesheets), incorrect time-based coding, lack of prior authorization, or exceeding session limits set by payers. Our proactive approach addresses each of these root causes before claims are submitted."],
                ["Can you help with insurance credentialing for mental health providers?",
                 "Yes, our mental health billing services handle credentialing with commercial and government payers to ensure timely reimbursements and network participation. We manage the full credentialing process applications, payer enrollment, re-credentialing, and maintenance so your providers can see patients from day one."],
                ["Does your mental health billing company handle billing for teletherapy and remote mental health services?",
                 "Yes, we ensure compliance with telehealth billing rules, including correct place-of-service codes and payer-specific teletherapy reimbursement policies. As telehealth for mental health has expanded significantly, our team stays current with all CMS and commercial payer updates affecting virtual behavioral health services."],
                ["How do 2025 CPT code updates affect mental health billing?",
                 "The latest updates include new codes for extended therapy sessions, remote behavioral health monitoring, and crisis intervention. Using outdated codes leads to claim denials and our mental health billing services ensure your billing is always aligned with the latest CPT and payer requirements, updated as changes take effect."],
              ].map(([q, a]) => (
                <details className="reveal" key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ══════════════════════════════════════════════ */}
      <CtaSection
        eyebrow="Revenue Assessment"
        heading="Building Trust through Teamwork"
        body="We customize our mental health billing services to fit the specific needs of your practice. Contact Medbilling RCM today to streamline your psychiatry billing, reduce administrative burdens, and maximize reimbursements."
        ctaLabel="Request Free Audit"
        formId="mhAssessmentForm"
        checklist={[
          "Pre-intake insurance verification and benefits check",
          "CPT and HBAI time-based coding audit",
          "Prior authorization gap analysis",
          "You keep the findings either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="For mental health & behavioral health providers · AAPC-certified specialists · Since 2012 · 50 states served"
      />

    </main>
  );
}
