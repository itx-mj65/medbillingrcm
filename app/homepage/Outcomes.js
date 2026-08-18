export default function Outcomes() {
  return (
    <section className="section outcomes" id="outcomes">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">Published engagements</p>
          <h2>Client Outcomes</h2>
          <p className="lead">Different specialties, different problems, different workflows built to fix them.</p>
        </div>
        <div className="outcome-summary reveal">
          <div>
            <h3>Results across published engagements</h3>
            <p>The figures below combine the three engagements with monthly figures. Each card carries its own numbers, and these are the totals. The Divine Dermatology audit produced a one-time outcome rather than a monthly one, so its figures sit with that case study rather than in this total.</p>
          </div>
          <div className="big-result">
            <strong>$179,778</strong>
            <span>Additional collections per month</span>
          </div>
          <div className="big-result">
            <strong>$2.16M</strong>
            <span>Annualized at the current run rate</span>
          </div>
        </div>
        <p className="lead reveal" style={{ margin: "0 0 32px" }}>Two of the three practices billed exactly the same charges before and after. No additional patients, no new providers, no change to coding, and every dollar came from collecting revenue that had already been earned. The third submitted 40% more claims while collections rose 340%, so the bulk of its recovery came from the same place: claims that were already going out and were not being followed.</p>
        <div className="case-grid">
          <article className="case reveal">
            <p className="meta">Patient First Primary Care | Six providers</p>
            <h3>Fee-for-service and capitation, running in one workflow</h3>
            <p>Two reimbursement models running through a workflow built for one. Dual-track billing lifted the gross collection rate from 18.2% to 61% on identical charge volume, taking monthly collections from $40,000 to $134,200.</p>
            <div className="metrics">
              <div className="metric"><strong>18.2% to 61%</strong><span>Gross collection rate</span></div>
              <div className="metric"><strong>$40,000 to $134,200</strong><span>Monthly collections</span></div>
              <div className="metric"><strong>+$94,200</strong><span>Additional per month</span></div>
              <div className="metric"><strong>$220,000</strong><span>Monthly charges, unchanged</span></div>
            </div>
            <a className="text-link" href="#assessment">Read the full case study →</a>
          </article>
          <article className="case reveal">
            <p className="meta">Psychiatric Connections | Praveen Bodakunta, PMHNP-BC | Six states</p>
            <h3>From zero collections to $43,678 a month</h3>
            <p>Billing $178,237 a month and collecting nothing, because the ERA and EFT enrollments had never been set up. Monthly collections now run $43,678 on the same charge volume.</p>
            <div className="metrics">
              <div className="metric"><strong>$0 to $43,678</strong><span>Monthly collections</span></div>
              <div className="metric"><strong>0% to 24.5%</strong><span>Gross collection rate</span></div>
              <div className="metric"><strong>+$43,678</strong><span>Additional per month</span></div>
              <div className="metric"><strong>$178,237</strong><span>Monthly charges, unchanged</span></div>
            </div>
            <a className="text-link" href="#assessment">Read the full case study →</a>
          </article>
          <article className="case reveal">
            <p className="meta">Divine Dermatology | Angela Wilson, practice manager | Dermatology</p>
            <h3>$60,000 retained through a records true-up audit</h3>
            <p>Roughly $100,000 in unreconciled patient credit balances left behind by a previous billing team. A forensic true-up audit traced $60,000 of it to posting errors rather than money owed to patients, with documentation attached to every line.</p>
            <div className="metrics">
              <div className="metric"><strong>$100,000</strong><span>Liability claimed at diligence</span></div>
              <div className="metric"><strong>$40,000</strong><span>Verified as owed</span></div>
              <div className="metric"><strong>60%</strong><span>Reduction in the claim</span></div>
              <div className="metric"><strong>$60,000</strong><span>Retained in the sale</span></div>
            </div>
            <a className="text-link" href="#assessment">Read the full case study →</a>
          </article>
          <article className="case reveal">
            <p className="meta">Choice Medical Transport | Ground transport</p>
            <h3>Collections up 340% on 40% more claims</h3>
            <p>Transport billing does not behave like clinical billing. Monthly claim volume rose 40% once stalled claims were resolved against the dispatch log, but collections rose 340%, because most of the money was sitting in claims already submitted and never worked.</p>
            <div className="metrics">
              <div className="metric"><strong>476 to 667</strong><span>Monthly claim submissions</span></div>
              <div className="metric"><strong>$12,320.63 to $54,220.72</strong><span>Monthly collections</span></div>
              <div className="metric"><strong>+40%</strong><span>Monthly claim volume</span></div>
              <div className="metric"><strong>+340%</strong><span>Monthly collections</span></div>
            </div>
            <a className="text-link" href="#assessment">Read the full case study →</a>
          </article>
        </div>
        <div style={{ textAlign: "center", marginTop: "38px" }}>
          <a className="btn" href="#outcomes">View All Case Studies</a>
        </div>
      </div>
    </section>
  );
}
