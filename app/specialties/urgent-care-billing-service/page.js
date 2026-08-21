import Link from "next/link";
import CtaSection from "@/components/CtaSection";

export default function UrgentCareBillingPage() {
  return (
    <main className="uc-page" id="main">

      {/* ═══════════════════════════════════════════════════════
          HERO — Full-width split: copy left, placeholder right
          Image: warm clinic corridor, urgent care reception desk,
          600×500px, professional healthcare photography style,
          slight navy color grade overlay matching brand palette
      ═══════════════════════════════════════════════════════ */}
      <section className="uc-hero">
        <div className="uc-hero-inner">
          <div className="uc-hero-copy">
            <p className="uc-hero-eyebrow">
              <span className="uc-eyebrow-dot" aria-hidden="true" />
              Urgent Care Revenue Cycle Management
            </p>
            <h1 className="uc-hero-h1">Urgent care billing services</h1>
            <p className="uc-hero-intro">
              Walk-in patients show up without verified coverage. A single 30-minute visit produces four or five billing line items. Your front desk has minutes, not hours, to get the demographics right. MedBilling RCM's AAPC-certified coders catch E/M level mismatches, Modifier 25 errors, wrong POS codes, and unbilled ancillaries before they reach the payer.
            </p>
            <div className="uc-hero-cta-row">
              <Link href="/request-free-audit/" className="uc-btn uc-btn--primary">Get a Free Revenue Assessment →</Link>
            </div>
            {/* Trust badges strip */}
            <div className="uc-trust-strip" aria-label="Compliance certifications">
              {["AAPC-Certified Coders","24-48 Hr Claim Submission","HIPAA + BAA Compliant","50 States Served"].map(b=>(
                <div className="uc-trust-badge" key={b}>
                  <span className="uc-trust-check" aria-hidden="true">✓</span>
                  {b}
                </div>
              ))}
            </div>
            {/* ── DESIGN BLOCK: Compliance icon badges ────────
                4 icon badges: HIPAA shield, BAA handshake,
                AAPC certificate, BBB star — 40×40px each,
                white fill on navy/dark-teal rounded squares.
                Place as a row beneath the text trust strip.
            ── END DESIGN BLOCK ─────────────────────────── */}
          </div>

          <div className="uc-hero-image">
            <div className="uc-img-placeholder uc-img-placeholder--hero">
              <div className="uc-img-placeholder-icon">🏥</div>
              <div className="uc-img-placeholder-label">IMAGE PLACEHOLDER — HERO</div>

              <div className="uc-img-spec-row">
                <span className="uc-img-spec-key">Size</span>
                <span className="uc-img-spec-val">580 × 460 px &nbsp;(retina: 1160 × 920 px)</span>
              </div>
              <div className="uc-img-spec-row">
                <span className="uc-img-spec-key">Format</span>
                <span className="uc-img-spec-val">WebP / AVIF with JPG fallback</span>
              </div>
              <div className="uc-img-spec-row">
                <span className="uc-img-spec-key">Subject</span>
                <span className="uc-img-spec-val">Healthcare administrator at urgent care reception desk — computer screen showing EHR interface, warm clinical lighting, busy waiting-room background softly blurred. No staged handshakes or smiling stock doctors.</span>
              </div>
              <div className="uc-img-spec-row">
                <span className="uc-img-spec-key">Style</span>
                <span className="uc-img-spec-val">Photorealistic · Documentary photography · Cool-to-warm color grade · Depth of field on subject</span>
              </div>
              <div className="uc-img-spec-row uc-img-spec-row--prompt">
                <span className="uc-img-spec-key">AI Prompt</span>
                <span className="uc-img-spec-val uc-img-prompt">"Healthcare administrator at urgent care reception desk, reviewing patient intake on computer screen showing real EHR software interface, clinical setting with warm overhead lighting, professional and calm atmosphere, waiting room visible in background shallow depth of field, photorealistic documentary style, slight cool-to-warm color grade, Canon 5D Mark IV quality"</span>
              </div>
              <div className="uc-img-spec-row">
                <span className="uc-img-spec-key">Alt text</span>
                <span className="uc-img-spec-val">"MedBilling RCM urgent care billing specialists processing walk-in patient claims"</span>
              </div>
              <div className="uc-img-spec-row">
                <span className="uc-img-spec-key">Placement</span>
                <span className="uc-img-spec-val">Hero section · right column · rounded-20px corners · slight drop shadow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM SECTION ════════════════════════════════
          "Why urgent care medical billing breaks"
      ══════════════════════════════════════════════════════ */}
      <section className="uc-sec uc-sec--paper" id="problems">
        <div className="uc-wrap">
          <div className="uc-sec-header reveal">
            <p className="uc-eyebrow-label">Why it breaks</p>
            <h2>Why urgent care medical billing breaks</h2>
            <p className="uc-sec-sub">
              More than 170 million patients walk into U.S. urgent care centers each year, across 15,000+ locations (<a href="https://urgentcareassociation.org/about/urgent-care-data" target="_blank" rel="noopener noreferrer" className="uc-ext-link">Urgent Care Association, 2025</a>). That kind of volume brings billing problems that scheduled office practices simply do not deal with.
            </p>
          </div>

          <div className="uc-problems-grid">
            {[
              {
                n:"01", icon:"🚪",
                title:"Walk-in registration gap",
                body:"No appointment means no pre-verification window. Your front desk captures demographics, checks insurance, and confirms benefits in real time while the waiting room refills. Get any of that wrong and the claim gets denied downstream. About 22% of preventable denials across healthcare trace back to eligibility errors at intake (<a href='https://www.caqh.org/explorations/caqh-index' target='_blank' rel='noopener noreferrer'>CAQH Index</a>). In urgent care, that number runs higher."
              },
              {
                n:"02", icon:"📋",
                title:"Multi-service coding complexity",
                body:"A patient walks in with a laceration. By the time they leave, the encounter includes an E/M evaluation (99202-99215), a repair procedure, an X-ray with -TC/-26 split billing, a rapid flu test, and a tetanus injection. That is five separate line items from one visit. Each needs its own CPT code, ICD-10 pairing, and modifier logic."
              },
              {
                n:"03", icon:"25",
                title:"Modifier 25 revenue loss",
                body:"When a patient gets both an evaluation and a procedure on the same visit, Modifier 25 tells the payer to reimburse both. Leave it off and the payer bundles everything into the procedure payment. The E/M revenue disappears. This modifier is also the single most audited item in urgent care billing."
              },
              {
                n:"04", icon:"🔀",
                title:"S-code routing errors",
                body:"Some commercial payers pay urgent care through flat per-visit S-codes (S9088 as an add-on, S9083 as a global fee). Others want standard E/M codes. Medicare rejects S-codes entirely. Send the wrong format to the wrong payer and you get a denial that was 100% preventable."
              },
              {
                n:"05", icon:"👤",
                title:"Provider turnover and credentialing gaps",
                body:<>Urgent care staffs heavily with locum tenens, PAs, and NPs. When a provider leaves and a replacement starts, there is a window where the new provider is not yet credentialed with payers. Services rendered during that window cannot be billed. Incident-to documentation errors make it worse. Each staffing change risks a <Link href="/services/medical-credentialing/" className="uc-int-link">credentialing</Link> blackout.</>
              },
            ].map(({ n, icon, title, body }) => (
              <div className="uc-problem-card reveal" key={n}>
                <div className="uc-problem-head">
                  <div className="uc-problem-icon" aria-hidden="true">
                    {typeof icon === 'string' && icon.length <= 2 && !icon.match(/\p{Emoji}/u)
                      ? <span className="uc-mod-badge">{icon}</span>
                      : icon}
                  </div>
                  <span className="uc-problem-num">{n}</span>
                </div>
                <h3>{title}</h3>
                {typeof body === 'string'
                  ? <p dangerouslySetInnerHTML={{ __html: body }} />
                  : <p>{body}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STAT CARDS 2×2 ══════════════════════════════════ */}
      <section className="uc-sec uc-sec--navy" id="stats">
        <div className="uc-wrap">
          <p className="uc-eyebrow-label uc-eyebrow-label--gold reveal">By the numbers</p>
          <h2 className="reveal">The cost of getting urgent care billing wrong</h2>
          <div className="uc-stat-grid">
            {[
              { num:"9–12%",  label:"Typical UC denial rate",    source:"Change Healthcare, 2024",        color:"green" },
              { num:"15–25%", label:"Ancillary revenue lost without charge capture", source:"UCA Benchmarking, 2025", color:"gold" },
              { num:"$2M",    label:"CareWell FCA settlement for E/M upcoding", source:"U.S. DOJ",          color:"green" },
              { num:"12%",    label:"UC encounters billed at 99212 when docs support higher", source:"MGMA", color:"gold" },
            ].map(({ num, label, source, color }) => (
              <div className={`uc-stat-card uc-stat-card--${color} reveal`} key={num}>
                <div className="uc-stat-num">{num}</div>
                <div className="uc-stat-label">{label}</div>
                <div className="uc-stat-source">{source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5-PHASE FRAMEWORK ═══════════════════════════════ */}
      <section className="uc-sec uc-sec--paper" id="framework">
        <div className="uc-wrap">
          <p className="uc-eyebrow-label reveal">How we work</p>
          <h2 className="reveal">What we build for urgent care centers</h2>
          <p className="uc-sec-sub reveal">
            Every urgent care engagement at MedBilling RCM runs through our Revenue Control Framework. It is a 5-phase system we built specifically for walk-in volume and the kind of multi-code encounters that trip up generalist billing teams. The same framework powers our <Link href="/services/" className="uc-int-link">revenue cycle management</Link> across all urgent care settings.
          </p>

          <div className="uc-phases">
            {[
              {
                n:"Phase 1",
                title:"Front-end verification",
                body:<>Before the patient sees a provider, we run real-time eligibility. We check active coverage, pull copay and deductible amounts, and identify COB situations. Self-pay patients get Good Faith Estimates on the spot. Our <Link href="/services/coverage-discovery/" className="uc-int-link">coverage discovery</Link> workflow picks up active coverage for patients who present as uninsured.</>
              },
              {
                n:"Phase 2",
                title:"Coding and charge capture",
                body:<>AAPC-certified coders pick the E/M level by documented MDM. Modifier 25 goes on every qualifying same-day procedure claim. The payer routing grid determines E/M, S9088, or S9083 per contract. Labs, imaging, and injections get captured separately. See our <Link href="/services/medical-coding/" className="uc-int-link">medical coding services</Link> for more.</>
              },
              {
                n:"Phase 3",
                title:"Pre-submission scrubbing",
                body:"We validate every claim against NCCI bundling rules, check POS 20 designation, verify modifier accuracy, and confirm NPI matching before electronic submission. Claims go out within 24-48 hours."
              },
              {
                n:"Phase 4",
                title:"Denial resolution and AR",
                body:<>When a claim gets denied, we pull the CARC/RARC code and trace the root cause. Our 48-hour appeal protocol keeps denials from aging. We fix the underlying pattern so the same denial does not recur. For practices with an existing backlog, our <Link href="/services/account-receivable-management/" className="uc-int-link">accounts receivable management</Link> team recovers claims at 60, 90, and 120+ days.</>
              },
              {
                n:"Phase 5",
                title:"Patient billing and reporting",
                body:"Every EOB and ERA gets posted, contractual adjustments verified against your fee schedules. Patients get digital statements by text or email with one-click payment. You get monthly dashboards: denial rate, days in AR, net collection rate, provider productivity."
              },
            ].map(({ n, title, body }, i, arr) => (
              <div className="uc-phase reveal" key={n}>
                <div className="uc-phase-aside">
                  <div className="uc-phase-badge">{n}</div>
                  {i < arr.length - 1 && <div className="uc-phase-conn" />}
                </div>
                <div className="uc-phase-body">
                  <h3>{title}</h3>
                  {typeof body === 'string' ? <p>{body}</p> : <p>{body}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CPT CODE TABLE ══════════════════════════════════ */}
      <section className="uc-sec uc-sec--ivory" id="codes">
        <div className="uc-wrap">
          <p className="uc-eyebrow-label reveal">Code reference</p>
          <h2 className="reveal">High-frequency urgent care CPT codes</h2>
          <div className="uc-table-wrap reveal">
            <table className="uc-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>CPT/HCPCS codes</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["E/M visits (new patient)",   "99202-99205, 99206 (new 2026)", "Level by MDM or total time"],
                  ["E/M visits (established)",   "99212-99215",                   "99213 is most-billed UC code (38%)"],
                  ["Laceration repair",          "12001-12007",                   "Simple repairs; Modifier 25 on E/M"],
                  ["I&D abscess",                "10060, 10061",                  "Separate documentation from E/M"],
                  ["Foreign body removal",       "10120",                         "Bill with wound care codes"],
                  ["Splinting and strapping",    "29125, 29505",                  "HCPCS Q-codes for supplies"],
                  ["Injections",                 "96372, 90471",                  "Drug J-codes billed separately"],
                  ["Rapid diagnostics",          "87880, 87804, 87811",           "Modifier QW for CLIA-waived"],
                  ["Imaging",                    "71046, 73610",                  "-TC/-26 split for in-house reads"],
                  ["S-codes",                    "S9088, S9083",                  "Payer-specific; Medicare rejects"],
                ].map(([cat, codes, notes]) => (
                  <tr key={cat}>
                    <td>{cat}</td>
                    <td className="uc-td-code">{codes}</td>
                    <td>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ DENIAL PATTERNS TABLE ═══════════════════════════ */}
      <section className="uc-sec uc-sec--paper" id="denials">
        <div className="uc-wrap">
          <p className="uc-eyebrow-label reveal">Denial intelligence</p>
          <h2 className="reveal">Top urgent care denial patterns</h2>
          <div className="uc-table-wrap reveal">
            <table className="uc-table uc-table--denials">
              <thead>
                <tr>
                  <th>CARC code</th>
                  <th>Denial reason</th>
                  <th>Resolution</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["CO-16 / CO-27", "Eligibility expired or terminated",       "Front-end real-time eligibility verification before service"],
                  ["CO-97",         "Procedure bundled into primary service",   "Document Modifier 25 or 59/XS with separate clinical rationale"],
                  ["CO-4",          "Modifier-to-procedure mismatch",           "Payer routing grid, pre-submission scrubbing against NCCI edits"],
                ].map(([carc, reason, res]) => (
                  <tr key={carc}>
                    <td><span className="uc-carc">{carc}</span></td>
                    <td>{reason}</td>
                    <td>{res}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="uc-table-note reveal">These three codes show up more than any others in urgent care denials. We track them by CARC code across every client and fix the process that caused them, not just the individual claim.</p>
        </div>
      </section>

      {/* ═══ IN-HOUSE vs OUTSOURCED COMPARISON ══════════════ */}
      <section className="uc-sec uc-sec--navy" id="comparison">
        <div className="uc-wrap">
          <p className="uc-eyebrow-label uc-eyebrow-label--gold reveal">The case for outsourcing</p>
          <h2 className="reveal">In-house billing vs. outsourced urgent care billing</h2>
          <div className="uc-compare-wrap reveal">
            <table className="uc-table uc-table--compare">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>In-house team</th>
                  <th className="uc-th-highlight">MedBilling RCM</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Clean claim rate",   "80-88% typical",              "Target: HFMA benchmark (98% at payer)"],
                  ["Days in AR",         "45-65 days",                  "Target: under 30 days"],
                  ["Staffing cost",      "45K-65K per FTE plus benefits","Percentage of collections, no FTE overhead"],
                  ["Coding expertise",   "Generalist billers",          "AAPC-certified, urgent care trained"],
                  ["Coverage risk",      "Single point of failure",     "Continuous operations, no staffing gaps"],
                  ["Compliance",         "Self-managed, reactive",      "Aligned with OIG compliance guidance"],
                ].map(([metric, inhouse, rcm]) => (
                  <tr key={metric}>
                    <td>{metric}</td>
                    <td className="uc-td-inhouse">{inhouse}</td>
                    <td className="uc-td-rcm">{rcm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="uc-compare-note reveal">
            Administrative transactions between providers and health plans cost $83 billion a year. Providers pick up 97% of that tab (<a href="https://www.caqh.org/explorations/caqh-index" target="_blank" rel="noopener noreferrer" className="uc-ext-link-light">CAQH Index, 2024</a>). Outsourcing flips billing from a fixed overhead line item into a variable cost that scales with what you actually collect.
          </p>
        </div>
      </section>

      {/* ═══ EHR INTEGRATION STRIP ═══════════════════════════ */}
      <section className="uc-sec uc-sec--paper" id="ehr">
        <div className="uc-wrap">
          <p className="uc-eyebrow-label reveal">EHR compatibility</p>
          <h2 className="reveal">EHR and practice management integration</h2>
          <div className="uc-ehr-strip reveal" aria-label="Supported EHR platforms">
            {[
              "Experity (DocuTAP)","AdvancedMD","Kareo / Tebra",
              "eClinicalWorks","Epic","AthenaHealth",
              "NextGen","CareCloud","Allscripts","Cerner"
            ].map(ehr => (
              <div className="uc-ehr-tag" key={ehr}>{ehr}</div>
            ))}
          </div>
          <p className="uc-ehr-body reveal">
            We log into your system through secure remote access. No platform switch, no data migration. During transition, your current billing keeps running while we set up workflows, test charge capture, and confirm payer enrollment.
          </p>
          <div className="uc-ehr-cta reveal">
            <Link href="/request-free-audit/" className="uc-btn uc-btn--primary">Get a Free Revenue Assessment →</Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ACCORDION ═══════════════════════════════════ */}
      <section className="uc-sec uc-sec--ivory" id="faq">
        <div className="uc-wrap">
          <p className="uc-eyebrow-label reveal">Common questions</p>
          <h2 className="reveal">Urgent care billing questions we get asked</h2>
          <div className="uc-faq-layout">
            <div className="uc-faq-intro reveal">
              <p>Direct answers about POS codes, S-codes, Modifier 25, denial rates, ancillary charge capture, billing transitions, and cost. <Link href="/specialties/" className="uc-int-link">View all specialties we serve.</Link></p>
            </div>
            <div className="uc-faq-list">
              {[
                [
                  "What is the difference between POS 20 and POS 11 in urgent care billing?",
                  "POS 20 is the code for an urgent care facility. POS 11 is a standard physician office. Some payer contracts actually require POS 11 even for urgent care locations. Using the wrong one means the payer pulls the wrong fee schedule, and that either underpays you or denies the claim outright. We check POS rules per contract before anything goes out."
                ],
                [
                  "What are S9088 and S9083, and which payers accept them?",
                  "S9088 is an add-on code that goes alongside E/M codes to flag the visit as urgent care. S9083 is different. It is a flat global fee that bundles everything into one payment. Commercial and Medicaid plans often require one or the other. Medicare does not accept either. We keep a payer routing grid that maps every contract to the right format."
                ],
                [
                  "Why does Modifier 25 matter so much in urgent care?",
                  "If a patient gets an evaluation and a procedure on the same day, Modifier 25 tells the payer those are two separate billable services. Without it, the payer folds the evaluation into the procedure payment and you lose that revenue. Payers also audit Modifier 25 more than almost any other code in urgent care, so documentation has to clearly show the E/M addressed something distinct from the procedure."
                ],
                [
                  "What denial rate should my urgent care center expect?",
                  <span key="faq4">The national average for urgent care sits at 9-12% according to <a href="https://www.changehealthcare.com" target="_blank" rel="noopener noreferrer" className="uc-int-link">Change Healthcare's 2024 data</a>. E/M level disputes, modifier errors, and eligibility problems drive most of it. Over 30% of those denials come down to codes that were wrong or mismatched. The two things that cut denial rates fastest are pre-submission scrubbing and real-time eligibility checks at the front desk.</span>
                ],
                [
                  "How do you handle ancillary services that go unbilled?",
                  "The UCA's 2025 benchmarking report puts the number at 15-25% of ancillary revenue lost in centers that do not have a dedicated charge capture process. For a center billing $3 million a year, that is $135,000 to $225,000 in services you performed but never billed for. Our coders capture every lab, imaging study, injection, and supply charge as the encounter happens."
                ],
                [
                  "Can you take over billing without a revenue gap?",
                  "Yes. We run both systems in parallel during transition. Your existing billing keeps going while we onboard, validate data migration, test the EHR integration, and build your payer routing grid. Once everything checks out, we take over fully. No gap in claims, no lost revenue."
                ],
                [
                  "How much does outsourced urgent care billing cost?",
                  "We structure each engagement during the revenue assessment. Pricing ties to collected revenue, not flat fees. There are no setup charges, no monthly minimums, and no long-term lock-in. Most centers end up collecting more at a lower total cost than they were spending on in-house staff and software combined."
                ],
              ].map(([q, a], i) => (
                <details className="uc-faq-item reveal" key={i}>
                  <summary>{q}</summary>
                  <div className="uc-faq-ans">
                    {typeof a === 'string' ? <p>{a}</p> : <p>{a}</p>}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING CTA ═════════════════════════════════════ */}
      <section className="uc-sec uc-sec--navy uc-closing" id="closing">
        <div className="uc-wrap uc-closing-inner">
          <div className="uc-closing-copy reveal">
            <h2>Your urgent care center. Fully billed. Collecting.</h2>
            <p>
              The problem in urgent care billing is not effort. It is infrastructure. Walk-in volume, multi-code encounters, payer-specific S-code routing, and constant provider turnover need a system built for exactly that. We build it.
            </p>
            <Link href="/request-free-audit/" className="uc-btn uc-btn--gold">Get a Free Revenue Assessment →</Link>
          </div>
          <div className="uc-closing-image">
            <div className="uc-img-placeholder uc-img-placeholder--closing">
              <div className="uc-img-placeholder-icon">📊</div>
              <div className="uc-img-placeholder-label">IMAGE PLACEHOLDER — CLOSING SECTION</div>

              <div className="uc-img-spec-row">
                <span className="uc-img-spec-key">Size</span>
                <span className="uc-img-spec-val">480 × 380 px &nbsp;(retina: 960 × 760 px)</span>
              </div>
              <div className="uc-img-spec-row">
                <span className="uc-img-spec-key">Format</span>
                <span className="uc-img-spec-val">WebP / AVIF with JPG fallback</span>
              </div>
              <div className="uc-img-spec-row">
                <span className="uc-img-spec-key">Subject</span>
                <span className="uc-img-spec-val">Medical billing specialist at desk with two monitors displaying a billing revenue dashboard — charts, AR aging columns, denial rate graphs visible on screen. Focused expression, clean modern office environment, warm directional lighting from the side.</span>
              </div>
              <div className="uc-img-spec-row">
                <span className="uc-img-spec-key">Style</span>
                <span className="uc-img-spec-val">Photorealistic · Operational / expertise feel · Warm side lighting · Slightly elevated angle</span>
              </div>
              <div className="uc-img-spec-row uc-img-spec-row--prompt">
                <span className="uc-img-spec-key">AI Prompt</span>
                <span className="uc-img-spec-val uc-img-prompt">"Medical billing specialist seated at a modern desk with two large monitors displaying revenue cycle management dashboard — colorful charts, denial rate metrics, AR aging columns visible on screens, professional focused expression, clean bright office, warm directional side lighting, slightly elevated camera angle, photorealistic documentary style, sharp focus on subject"</span>
              </div>
              <div className="uc-img-spec-row">
                <span className="uc-img-spec-key">Alt text</span>
                <span className="uc-img-spec-val">"MedBilling RCM billing team managing urgent care revenue cycle"</span>
              </div>
              <div className="uc-img-spec-row">
                <span className="uc-img-spec-key">Placement</span>
                <span className="uc-img-spec-val">Closing CTA section · right column on navy background · rounded-18px corners</span>
              </div>
            </div>
          </div>
        </div>
        <p className="uc-footnote">
          <em>Last reviewed August 2026. Denial data: Change Healthcare Revenue Cycle Denials Index (2024). Ancillary leakage: Urgent Care Association Benchmarking Report (2025). Administrative costs: CAQH Index (2024). E/M distribution: MGMA Cost and Revenue Survey. CareWell settlement: U.S. DOJ, District of Massachusetts. Clean claim benchmark: HFMA.</em>
        </p>
      </section>

    </main>
  );
}
