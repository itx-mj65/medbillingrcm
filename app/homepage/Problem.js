export default function Problem() {
  return (
    <section className="section problem" id="problem">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">The revenue gap</p>
          <h2>Most Practices Are Losing Revenue They Have Already Earned</h2>
          <p className="lead">Fragmented billing is not a staffing problem. It is a systems problem, and the gap between services delivered and revenue collected widens quietly.</p>
        </div>
        <div className="problem-grid">
          <article className="issue reveal">
            <span className="issue-index">01</span>
            <h3>Denial rates keep climbing</h3>
            <p>Initial denial rates reached 11.8% across the industry in 2024, according to Kodiak Solutions data drawn from more than 2,100 hospitals and 300,000 practice-based physicians. At scale, that is hundreds of thousands of dollars sitting in delay or written off each year.</p>
          </article>
          <article className="issue reveal">
            <span className="issue-index">02</span>
            <h3>Aging AR that nobody works</h3>
            <p>HFMA sets the benchmark at no more than 10% of total AR sitting beyond 90 days. Most billing teams are too occupied with today&#39;s claims to systematically chase last quarter&#39;s, and the aged bucket drifts past that line without anyone deciding to let it.</p>
          </article>
          <article className="issue reveal">
            <span className="issue-index">03</span>
            <h3>No revenue visibility for leadership</h3>
            <p>Without live dashboards, CFOs make decisions on month-old reports. By the time a denial pattern surfaces in a monthly summary, it has already repeated across hundreds of claims.</p>
          </article>
          <article className="issue reveal">
            <span className="issue-index">04</span>
            <h3>Compliance risk at every touchpoint</h3>
            <p>The 2026 CPT update introduced 288 new codes, part of 418 total changes. Payer policies shift mid-year. Left unmanaged, these changes compound into audit exposure across the revenue cycle.</p>
          </article>
        </div>
        <div className="stat-callout reveal">
          U.S. healthcare loses an estimated $262 billion a year to claim denials (Modern Healthcare). Six in ten denied claims are never appealed or resubmitted (AHIMA Journal). And 86% of denials are preventable before the claim leaves the building, according to Change Healthcare analysis confirmed by MGMA.
        </div>
        <div className="case-note reveal">
          <strong>$40K</strong>
          <p>Here is what that looks like inside one practice. A six-provider primary care group came to us collecting $40,000 a month against $220,000 in charges. The coding was correct, and the care had been delivered. The claims had stopped being followed after submission.</p>
        </div>
      </div>
    </section>
  );
}
