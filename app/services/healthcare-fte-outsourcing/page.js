import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";

export default function HealthcareFTEPage() {
  return (
    <main className="fte-page" id="main">

      {/* ═══ HERO ══════════════════════════════════════════════
          IMAGE PLACEHOLDER
          File: /public/fte-hero.webp  |  Size: 1536 × 900 px
          Subject: Dedicated healthcare virtual staff working at
                   professional medical billing workstation, EHR on
                   dual monitors, clean organized office environment.
          AI prompt: "Dedicated healthcare virtual staff member working
                     at professional medical billing workstation, EHR
                     system visible on dual monitors, clean organized
                     office environment, navy and green tones,
                     photorealistic, no text overlay, wide format"
      ══════════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="Healthcare FTE outsourcing services"
        heading="Healthcare FTE outsourcing services"
        intro="Administrative work does not stop accumulating because the practice is understaffed. 77% of physicians cite regulatory and administrative burden as a top contributor to burnout (MGMA 2026). Hiring in-house costs $61,000 to $74,000 per year fully loaded and takes 6 to 10 weeks to fill. Our healthcare FTE outsourcing, healthcare staffing outsourcing, and healthcare BPO services put a dedicated, trained professional inside your workflow in 5 to 10 business days, at a fraction of that cost."
        note="5-10 Business Days to Deploy  |  100% Dedicated to Your Practice  |  HIPAA + BAA Compliant"
        cta="Get a Free Revenue Assessment"
        ctaAlt="See our process"
        ctaAltHref="#process"
        badge="HIPAA · BAA · AAPC · AHIMA"
        heroPlaceholder={{
          title:  "Hero Image — Healthcare FTE Virtual Staff",
          spec:   "1536 × 900 px  ·  /public/fte-hero.webp",
          prompt: "Dedicated healthcare virtual staff member working at professional medical billing workstation, EHR system visible on dual monitors, clean organized office environment, navy and green tones, photorealistic, no text overlay, wide format",
        }}
      />

      {/* Second hero paragraph — per design notes: 2-paragraph hero */}
      <div className="fte-hero-sub">
        <div className="fte-hero-sub-inner">
          <p>Dedicated staff who work exclusively on your accounts, inside your EHR, under your SOPs. Not a shared call center. Not a temp agency. A named person who knows your practice.</p>
        </div>
      </div>

      {/* ═══ COMPLIANCE BADGES ══════════════════════════════ */}
      <div className="fte-badges-bar">
        <div className="fte-badges-inner">
          <span className="fte-badges-label">Compliance standards</span>
          <div className="fte-badges-div" aria-hidden="true" />
          {[
            { icon:"🔒", text:"HIPAA Compliant" },
            { icon:"📋", text:"BAA Signed" },
            { icon:"🏅", text:"AAPC Certified" },
            { icon:"📘", text:"AHIMA Certified" },
          ].map(({ icon, text }) => (
            <span className="fte-badge" key={text}>
              <span aria-hidden="true">{icon}</span>{text}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ WHAT FTE OUTSOURCING ACTUALLY MEANS ═══════════ */}
      <section className="fte-sec fte-sec--white reveal" id="compare">
        <div className="fte-wrap">
          <p className="reveal fte-ew">What healthcare FTE outsourcing actually means</p>
          <h2 className="reveal">What healthcare FTE outsourcing actually means</h2>

          {/* 34% stat — number-forward anchor */}
          <div className="fte-stat-callout">
            <div className="fte-stat-callout-num">34<span>%</span></div>
            <div>
              <div className="fte-stat-callout-lbl">of ambulatory practices already use outsourced administrative staff for at least one function</div>
              <div className="fte-stat-callout-src"><a href="https://stealthagents.com/healthcare-outsourcing-statistics/" target="_blank" rel="noopener">Healthcare Business Insights 2025</a></div>
            </div>
          </div>

          <p>Healthcare FTE outsourcing is not the same as hiring a BPO vendor. The distinction matters.</p>

          {/* Three-column comparison table */}
          <div className="fte-table-wrap">
            <table className="fte-table" aria-label="FTE outsourcing comparison">
              <thead>
                <tr>
                  <th>Operational Metric</th>
                  <th>In-House Staff</th>
                  <th>Generic Temp/BPO</th>
                  <th className="fte-th-highlight">Medbilling RCM Dedicated FTE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Direct cost</td>
                  <td>$61K–$74K/year fully loaded (<a href="https://staffingfordoctors.com/blog/medical-staffing-costs-in-house-vs-virtual-budget-breakdown" target="_blank" rel="noopener">BLS + SHRM</a>)</td>
                  <td>Variable/hourly markup</td>
                  <td className="fte-td-highlight">Fixed, transparent</td>
                </tr>
                <tr>
                  <td>Dedicated assignment</td>
                  <td>Yes</td>
                  <td>Shared across multiple clients</td>
                  <td className="fte-td-highlight">100% exclusively yours</td>
                </tr>
                <tr>
                  <td>Time to deploy</td>
                  <td>6–10 weeks (hire + ramp)</td>
                  <td>2–4 weeks</td>
                  <td className="fte-td-highlight"><strong>5–10 business days</strong></td>
                </tr>
                <tr>
                  <td>Overhead, taxes, benefits</td>
                  <td>25–35% on top of salary</td>
                  <td>Included in agency markup</td>
                  <td className="fte-td-highlight">Zero employer taxes or overhead</td>
                </tr>
                <tr>
                  <td>EHR proficiency</td>
                  <td>Requires lengthy onboarding</td>
                  <td>Basic/generic</td>
                  <td className="fte-td-highlight">Pre-vetted, trained on major EHRs</td>
                </tr>
                <tr>
                  <td>HIPAA compliance</td>
                  <td>In-house responsibility</td>
                  <td>Mixed</td>
                  <td className="fte-td-highlight">HIPAA compliant, BAA signed at launch</td>
                </tr>
                <tr>
                  <td>Turnover risk</td>
                  <td>Severe workflow disruption</td>
                  <td>High agent rotation</td>
                  <td className="fte-td-highlight">Zero-downtime replacement guarantee</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="fte-table-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
            <p>The in-house cost figures come from <a href="https://staffingfordoctors.com/blog/medical-staffing-costs-in-house-vs-virtual-budget-breakdown" target="_blank" rel="noopener">staffingfordoctors.com (July 2026)</a>, citing BLS median medical secretary wages and SHRM benefits benchmarks. The turnover cost alone runs <a href="https://a3medicalbilling.com/blog/healthcare-staffing-turnover-cost" target="_blank" rel="noopener">$6,000 to $9,000 per departure (SHRM)</a>. <a href="https://experian.com/blogs/healthcare/revenue-cycle-management/" target="_blank" rel="noopener">Healthcare revenue cycle roles turn over at 11 to 40% annually versus a 3.8% national average (Experian Health)</a>. See how our <Link href="/revenue-cycle-management/">revenue cycle management</Link> approach reduces this turnover risk.</p>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES COVERED ════════════════════════════════ */}
      <section className="fte-sec fte-sec--ivory reveal">
        <div className="fte-wrap">
          <p className="reveal fte-ew">What our healthcare outsourcing services and staffing outsourcing covers</p>
          <h2 className="reveal">What our healthcare outsourcing services and staffing outsourcing covers</h2>

          {/* IMAGE PLACEHOLDER
              File: /public/fte-services.webp  |  Size: 1100 × 580 px
              Subject: Healthcare virtual team at workstations — billing
                       specialists, scribes, front-office staff in modern
                       medical billing office environment.
              AI prompt: "Healthcare virtual staff team working in modern
                         medical billing office, multiple specialists at
                         individual workstations reviewing EHR systems,
                         professional collaborative environment, photorealistic" */}
          <div className="fte-services-img fte-img-placeholder" aria-label="Image placeholder">
            <div className="fte-ph-inner">
              <span className="fte-ph-icon">📷</span>
              <strong>Services Team Image</strong>
              <span>1100 × 580 px · /public/fte-services.webp</span>
              <em>AI prompt: "Healthcare virtual staff team working in modern medical billing office, multiple specialists at individual workstations reviewing EHR systems, professional collaborative environment, photorealistic"</em>
            </div>
          </div>

          <div className="fte-pillars">

            <div className="fte-pillar reveal">
              <div className="fte-pillar-head">
                <span className="fte-pillar-icon" aria-hidden="true">💳</span>
                <h3 className="reveal">Revenue cycle management FTEs</h3>
              </div>
              <div className="fte-pillar-items">
                <div className="fte-pillar-item">
                  <div className="fte-pillar-title">Medical billing and certified coding</div>
                  <p>AAPC and AHIMA certified coders proficient in ICD-10-CM, CPT, HCPCS, and specialty-specific modifier rules. See our <Link href="/services/medical-coding/">medical coding services</Link> for specialty-specific coverage.</p>
                </div>
                <div className="fte-pillar-item">
                  <div className="fte-pillar-title">Insurance eligibility and benefits verification</div>
                  <p>Real-time pre-service eligibility checks, copay and deductible calculation, and primary and secondary payer coordination.</p>
                </div>
                <div className="fte-pillar-item">
                  <div className="fte-pillar-title">Prior authorization specialists</div>
                  <p>Rapid submission, clinical documentation aggregation, insurer follow-up, and peer-to-peer review scheduling.</p>
                </div>
                <div className="fte-pillar-item">
                  <div className="fte-pillar-title">Accounts receivable and denial management</div>
                  <p>Aggressive follow-up on aged 30/60/90+ day claims, root-cause denial analysis, appeals submission, and underpayment recovery. For standalone AR recovery, see our <Link href="/services/account-receivable-management/">accounts receivable management service</Link>.</p>
                </div>
              </div>
            </div>

            <div className="fte-pillar reveal">
              <div className="fte-pillar-head">
                <span className="fte-pillar-icon" aria-hidden="true">🩺</span>
                <h3 className="reveal">Healthcare virtual staff and clinical support</h3>
              </div>
              <div className="fte-pillar-items">
                <div className="fte-pillar-item">
                  <div className="fte-pillar-title">Healthcare virtual staff: Virtual medical assistants</div>
                  <p>Coordinate pre-visit intake, gather medical history, update patient charts, and manage physician inboxes. Reduce the documentation burden that <a href="https://getfreed.ai/resources/physician-burnout-statistics" target="_blank" rel="noopener">Freed&apos;s 2025 survey found consumes more than 44 hours per month for 57% of clinicians</a>.</p>
                </div>
                <div className="fte-pillar-item">
                  <div className="fte-pillar-title">Virtual medical scribes</div>
                  <p>Live or asynchronous clinical documentation directly within Epic, Cerner, eClinicalWorks, Athenahealth, Kareo, and NextGen. Physicians document less. Patient time increases.</p>
                </div>
                <div className="fte-pillar-item">
                  <div className="fte-pillar-title">Prescription refill and referral coordinators</div>
                  <p>Process pharmacy renewal requests per clinic protocols and coordinate specialty referrals.</p>
                </div>
              </div>
            </div>

            <div className="fte-pillar reveal">
              <div className="fte-pillar-head">
                <span className="fte-pillar-icon" aria-hidden="true">🏥</span>
                <h3 className="reveal">Front-office and patient access outsourcing</h3>
              </div>
              <div className="fte-pillar-items">
                <div className="fte-pillar-item">
                  <div className="fte-pillar-title">Patient scheduling and inbound registration</div>
                  <p>Dedicated bilingual virtual receptionists managing patient calendars, confirmations, cancellations, and registration.</p>
                </div>
                <div className="fte-pillar-item">
                  <div className="fte-pillar-title">Outbound recall and care gap campaigns</div>
                  <p>Proactive outreach for preventive screenings, annual wellness visits (AWVs), and chronic care follow-up.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ COST COMPARISON ═════════════════════════════════ */}
      <section className="fte-sec fte-sec--white reveal">
        <div className="fte-wrap">
          <p className="reveal fte-ew">The cost of healthcare administrative outsourcing vs. in-house staffing</p>
          <h2 className="reveal">The cost of healthcare administrative outsourcing vs. in-house staffing</h2>

          <div className="fte-cost-compare">
            <div className="fte-cost-col fte-cost-col--left">
              <div className="fte-cost-marker">In-house</div>
              <div className="fte-cost-rows">
                <div className="fte-cost-row">
                  <div className="fte-cost-num">~$40K</div>
                  <div className="fte-cost-lbl">Median medical admin salary/year — <a href="https://www.bls.gov/oes/current/oes436013.htm" target="_blank" rel="noopener">BLS 2024</a></div>
                </div>
                <div className="fte-cost-row fte-cost-row--highlight">
                  <div className="fte-cost-num">$61K–$74K</div>
                  <div className="fte-cost-lbl">Fully loaded/year (salary + benefits + payroll taxes + recruiting) — <a href="https://staffingfordoctors.com/blog/medical-staffing-costs-in-house-vs-virtual-budget-breakdown" target="_blank" rel="noopener">staffingfordoctors.com 2026</a></div>
                </div>
                <div className="fte-cost-row">
                  <div className="fte-cost-num">$6K–$9K</div>
                  <div className="fte-cost-lbl">Turnover cost per departure — <a href="https://a3medicalbilling.com/blog/healthcare-staffing-turnover-cost" target="_blank" rel="noopener">SHRM</a></div>
                </div>
                <div className="fte-cost-row">
                  <div className="fte-cost-num">6–10 wks</div>
                  <div className="fte-cost-lbl">Time to replace from posting to productivity</div>
                </div>
                <div className="fte-cost-row">
                  <div className="fte-cost-num">4–8 wks</div>
                  <div className="fte-cost-lbl">Training ramp before full productivity</div>
                </div>
                <div className="fte-cost-row">
                  <div className="fte-cost-num">⚠</div>
                  <div className="fte-cost-lbl">Single point of failure when staff leaves</div>
                </div>
              </div>
            </div>
            <div className="fte-cost-col fte-cost-col--right">
              <div className="fte-cost-marker">Outsourced FTE (Medbilling RCM)</div>
              <div className="fte-cost-rows">
                <div className="fte-cost-row fte-cost-row--highlight">
                  <div className="fte-cost-num">$29K–$45K</div>
                  <div className="fte-cost-lbl">Savings per role per year vs. in-house — <a href="https://staffingfordoctors.com/blog/virtual-staff-vs-in-house-real-cost-breakdown-2026" target="_blank" rel="noopener">staffingfordoctors.com 2026</a></div>
                </div>
                <div className="fte-cost-row">
                  <div className="fte-cost-num">$0</div>
                  <div className="fte-cost-lbl">Benefits, payroll taxes, or recruiting overhead</div>
                </div>
                <div className="fte-cost-row">
                  <div className="fte-cost-num">5–10 days</div>
                  <div className="fte-cost-lbl">Deploy in 5–10 business days</div>
                </div>
                <div className="fte-cost-row">
                  <div className="fte-cost-num">✓</div>
                  <div className="fte-cost-lbl">Zero-downtime replacement guarantee</div>
                </div>
                <div className="fte-cost-row">
                  <div className="fte-cost-num">Day 1</div>
                  <div className="fte-cost-lbl">Pre-vetted staff trained on your EHR from day one</div>
                </div>
              </div>
            </div>
          </div>

          <div className="fte-cost-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
            <p>At a practice running two front-desk roles and one prior authorization coordinator, the annual saving versus in-house staffing typically exceeds $90,000 before accounting for faster onboarding, reduced turnover disruption, and improved workflow consistency. We have deployed this model for multi-location physician groups, single-specialty practices, and hospital-affiliated clinics. The cost structure holds across all three because the savings come from eliminating employer-side overhead, not from lowering skill levels.</p>
          </div>
        </div>
      </section>

      {/* ═══ SECURITY ════════════════════════════════════════ */}
      <section className="fte-sec fte-sec--navy reveal">
        <div className="fte-wrap">
          <p className="reveal fte-ew fte-ew--gold">Enterprise-grade security and HIPAA compliance</p>
          <h2 className="reveal">Enterprise-grade security and HIPAA compliance</h2>
          <p className="reveal fte-sec-intro">Healthcare administrative outsourcing requires a higher compliance standard than generic BPO. Every Medbilling RCM engagement operates under:</p>

          <div className="fte-security-grid">
            {[
              { icon:"📋", h:"Business Associate Agreement (BAA)", t:"Signed prior to any staff deployment. Full legal accountability for protected health information." },
              { icon:"🖥️", h:"Zero-footprint remote desktops (VDI)", t:"Staff access your systems through secure virtual desktops. Local download, printing, screenshot, and USB are disabled." },
              { icon:"🔐", h:"AES-256 encryption and dedicated IP whitelisting", t:"All communications and data transmissions use AES-256 bit encryption with IP-level access controls." },
              { icon:"👁️", h:"Continuous auditing and monitoring", t:"Real-time screen recording, keystroke activity tracking, and access logs maintained by our internal compliance team." },
              { icon:"🎓", h:"Ongoing HIPAA and security training", t:"Workforce recertification in HIPAA Privacy, Security, and Omnibus Rules." },
            ].map(({ icon, h, t }) => (
              <div className="fte-security-card reveal" key={h}>
                <div className="fte-security-icon" aria-hidden="true">{icon}</div>
                <h3 className="reveal">{h}</h3>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EHR SYSTEMS ════════════════════════════════════ */}
      <section className="fte-sec fte-sec--ivory reveal">
        <div className="fte-wrap">
          <p className="reveal fte-ew">Supported EHR and practice management platforms</p>
          <h2 className="reveal">Supported EHR and practice management platforms</h2>

          <div className="fte-ehr-groups">
            {[
              { label:"Enterprise EHRs", tags:["Epic","Cerner (Oracle Health)","MEDITECH","Allscripts (Veradigm)"] },
              { label:"Ambulatory & Specialty EHRs", tags:["Athenahealth","eClinicalWorks","NextGen Healthcare","AdvancedMD","Kareo (Tebra)","DrChrono","Greenway Health","Modernizing Medicine (EMA)"] },
              { label:"Clearinghouses & Billing Portals", tags:["Availity","Change Healthcare","Waystar","Office Ally","TriZetto"] },
            ].map(({ label, tags }) => (
              <div className="fte-ehr-group" key={label}>
                <div className="fte-ehr-group-label">{label}</div>
                <div className="fte-ehr-strip">
                  {tags.map(s => <span className="fte-ehr-tag" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="fte-ehr-note">
            <p>Staff arrive pre-vetted and trained on your platform. Healthcare staffing outsourcing through the FTE model means your team member already knows Epic, eClinicalWorks, or whatever system you run on day one. Healthcare staffing outsourcing eliminates the 4 to 8 week training ramp that in-house hires require on unfamiliar platforms. No lengthy onboarding. No generic learning curves.</p>
          </div>
          <div className="fte-ehr-cta">
            <Link href="/request-free-audit/" className="reveal pg-btn pg-btn--gold">Get a Free Revenue Assessment</Link>
          </div>
        </div>
      </section>

      {/* ═══ 4-STEP PROCESS ══════════════════════════════════ */}
      <section className="fte-sec fte-sec--navy reveal" id="process">
        <div className="fte-wrap">
          <p className="reveal fte-ew fte-ew--gold">How we deploy a dedicated FTE: the Dedicated Staffing Engine (4 steps)</p>
          <h2 className="reveal">How we deploy a dedicated FTE: the Dedicated Staffing Engine (4 steps)</h2>

          <div className="fte-steps">
            <div className="fte-step reveal">
              <div className="fte-step-aside">
                <div className="fte-step-num">01</div>
                <div className="fte-step-connector" aria-hidden="true" />
              </div>
              <div className="fte-step-body">
                <h3 className="reveal">Workflow and needs assessment</h3>
                <p>We evaluate your volume, specialty requirements, current backlogs, and target workflows. We define roles, staffing ratios, and SOPs before anyone is placed. This is the foundation of our Dedicated Staffing Engine: a four-phase deployment model built to place healthcare professionals inside your workflow in 5 to 10 business days with zero operational disruption.</p>
              </div>
            </div>
            <div className="fte-step reveal">
              <div className="fte-step-aside">
                <div className="fte-step-num">02</div>
                <div className="fte-step-connector" aria-hidden="true" />
              </div>
              <div className="fte-step-body">
                <h3 className="reveal">Candidate matching</h3>
                <p>We identify pre-vetted, certified healthcare professionals matched to your specific specialty or billing discipline. You review resumes and interview finalists.</p>
              </div>
            </div>
            <div className="fte-step reveal">
              <div className="fte-step-aside">
                <div className="fte-step-num">03</div>
                <div className="fte-step-connector" aria-hidden="true" />
              </div>
              <div className="fte-step-body">
                <h3 className="reveal">Secure onboarding and systems integration</h3>
                <p>We provision secure virtual workspaces, establish VPN connections, and orient the dedicated team to your SOPs and communication channels. Staff requiring payer enrollment are coordinated through our <Link href="/services/medical-credentialing/">medical credentialing service</Link>.</p>
              </div>
            </div>
            <div className="fte-step reveal">
              <div className="fte-step-aside">
                <div className="fte-step-num">04</div>
              </div>
              <div className="fte-step-body">
                <h3 className="reveal">Launch and quality assurance</h3>
                <p>Your FTE begins operations with daily KPI reporting, productivity monitoring, and ongoing oversight from our senior account managers. If a staff member leaves, a replacement is deployed without workflow interruption.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ════════════════════════════════════════════ */}
      <section className="fte-sec fte-sec--white reveal" id="faq">
        <div className="fte-wrap">
          <p className="reveal fte-ew">Healthcare FTE outsourcing questions we get asked</p>
          <h2 className="reveal">Healthcare FTE outsourcing questions we get asked</h2>
          <div className="fte-faq-layout">
            <div className="fte-faq-intro">
              <p>Direct answers for practices, groups, and hospital systems evaluating healthcare FTE outsourcing.</p>
            </div>
            <div className="fte-faq-list">
              {[
                ["What is healthcare FTE outsourcing?","Healthcare FTE outsourcing and healthcare BPO services provide your practice with dedicated, full-time professionals who work exclusively on your accounts rather than being shared across a pool of clients. Unlike traditional BPO, an FTE works inside your EHR, follows your SOPs, and is a direct extension of your team. The model eliminates recruiting, benefits, payroll taxes, and training overhead while maintaining the consistency of a named staff member who knows your practice."],
                ["What is the difference between a dedicated FTE and shared BPO outsourcing?","A dedicated FTE works exclusively for your practice, 40 hours per week, inside your systems and under your management. Shared BPO assigns work from multiple clients to a pool of agents, prioritizing throughput over practice-specific familiarity. The quality gap shows up in denial rates, registration accuracy, and the time it takes to resolve exceptions, because a shared agent has no institutional knowledge of your practice."],
                ["How much does healthcare FTE outsourcing cost?","Fully loaded in-house medical admin staff costs $61,000 to $74,000 per year when salary, benefits, payroll taxes, recruiting, and training are included (staffingfordoctors.com, July 2026, citing BLS and SHRM). Dedicated FTE outsourcing typically saves $29,000 to $45,000 per role per year at comparable competency levels. For a practice replacing two front-desk roles and one prior auth coordinator, annual savings typically exceed $90,000."],
                ["How quickly can a healthcare FTE be deployed?","Most placements deploy within 5 to 10 business days. Because staff are pre-vetted and trained on major EHR and billing platforms, orientation and ramp-up time are minimal. That compares to 6 to 10 weeks for a standard in-house hire from posting to productivity."],
                ["Is outsourcing healthcare administrative staff HIPAA-compliant?","Yes, when the vendor operates under a signed Business Associate Agreement and maintains documented safeguards for protected health information. Medbilling RCM signs a BAA with every client before deployment. Staff access your systems through HIPAA-compliant virtual desktop environments with full audit logging. A BAA is a legal requirement under HIPAA for any third party that handles protected health information on your behalf."],
                ["What healthcare services can be outsourced through the FTE model?","Any non-clinical administrative function. Revenue cycle roles (billing, coding, prior authorization, eligibility verification, AR follow-up, denial management), clinical support roles (virtual medical assistants, virtual scribes, prescription refill coordinators), and front-office roles (patient scheduling, inbound registration, outbound recall campaigns). Clinical care and medical decision-making remain with licensed in-house staff."],
                ["What happens if an FTE takes leave or leaves the role?","We provide a zero-downtime replacement guarantee. In the event of scheduled leave or unexpected absence, a cross-trained backup specialist steps in under supervisor guidance. If a staff member leaves the role permanently, a replacement is placed and onboarded without workflow disruption or additional recruiting cost to the practice."],
                ["How do I get started?","Request a free revenue assessment. We review your current staffing structure, workflow bottlenecks, volume requirements, and EHR environment, then deliver a written staffing recommendation with projected cost savings. No obligation. You keep the analysis whether or not you work with us."],
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

      {/* ═══ CLOSING BAND ════════════════════════════════════ */}
      <div className="fte-closing-band">
        <div className="fte-closing-inner">
          <div>
            <p className="reveal fte-ew fte-ew--gold" style={{marginBottom:"12px"}}>Your practice. Fully staffed. Running.</p>
            <h2 className="reveal">Your practice. Fully staffed. Running.</h2>
            <p><a href="https://kevinmd.com/2026/04/administrative-burden-is-driving-severe-physician-burnout" target="_blank" rel="noopener">62% of physicians report burnout, with administrative burden consistently ranking as the top cause (Medscape 2025)</a>. The answer is not hiring more in-house staff. Healthcare outsourcing services built around the dedicated FTE model solve the capacity problem without the overhead, turnover, and ramp-up time of traditional hiring. The gap is not motivation. It is capacity. We see it in every engagement. A practice running the right number of trained people on the right tasks collects more, burns out less, and scales without rebuilding the same infrastructure every time a staff member leaves.</p>
          </div>
          <div className="fte-closing-actions">
            <Link href="/request-free-audit/" className="reveal pg-btn pg-btn--gold">Get a Free Revenue Assessment</Link>
            <p className="fte-closing-note">5–10 day deployment · HIPAA + BAA compliant · All 50 states</p>
          </div>
        </div>
      </div>

      {/* ═══ ASSESSMENT CTA ═════════════════════════════════ */}
      <CtaSection
        eyebrow="Ready when you are"
        heading="Get a Free Revenue Assessment."
        body="We review your current staffing structure, workflow bottlenecks, volume requirements, and EHR environment, then deliver a written staffing recommendation with projected cost savings. No obligation. You keep the analysis whether or not you work with us."
        ctaLabel="Get a Free Revenue Assessment"
        formId="fteAssessmentForm"
        checklist={[
          "Current staffing structure and workflow bottleneck analysis",
          "Volume requirements and EHR environment review",
          "Written staffing recommendation with projected cost savings",
          "You keep the analysis either way",
          "HIPAA-compliant — BAA signed before data moves",
          "No setup fee. No long-term contract.",
        ]}
        formNote="HIPAA + BAA compliant · 5–10 day deployment · All 50 states"
      />

    </main>
  );
}
