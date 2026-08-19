export default function Specialties() {
  return (
    <section className="reveal section specialties" id="specialties">
      <div className="shell">
        <div className="section-head center reveal">
          <p className="reveal eyebrow">Specialty-assigned teams</p>
          <h2 className="reveal">Billing Built Around Your Specialty</h2>
          <p className="lead">Every specialty carries its own denial risks. Modifier rules, prior authorization triggers, documentation requirements, and payer policies all shift depending on what you practice. Coding teams are assigned by specialty at onboarding rather than pooled.</p>
        </div>
        <div className="specialties-layout">
          <div className="workflow-visual specialty-workflow reveal" data-workflow role="img" aria-label="Animated specialty workflow showing encounters routed through specialty-specific coding and payer rules">
            <svg viewBox="0 0 720 430" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <marker id="spArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#d49b28"/></marker>
              </defs>
              <rect width="720" height="430" fill="#101638"/>
              <text x="28" y="38" fill="#fff" fontFamily="Arial,sans-serif" fontSize="14" fontWeight="800">SPECIALTY-ASSIGNED CLAIM CONTROL</text>
              <rect x="28" y="72" width="172" height="300" rx="16" fill="#fff" fillOpacity=".06" stroke="#fff" strokeOpacity=".16"/>
              <rect x="274" y="72" width="190" height="300" rx="16" fill="#fff" fillOpacity=".08" stroke="#d49b28" strokeOpacity=".48"/>
              <rect x="538" y="72" width="154" height="300" rx="16" fill="#fff" fillOpacity=".06" stroke="#fff" strokeOpacity=".16"/>
              <text x="50" y="104" fill="#c7d9bd" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="800">ENCOUNTER SIGNALS</text>
              <text x="296" y="104" fill="#f1dfb7" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="800">SPECIALTY PROTOCOL</text>
              <text x="560" y="104" fill="#c7d9bd" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="800">CLAIM OUTCOME</text>
              <g fill="#fff" fillOpacity=".08">
                <rect x="48" y="128" width="132" height="42" rx="8"/>
                <rect x="48" y="184" width="132" height="42" rx="8"/>
                <rect x="48" y="240" width="132" height="42" rx="8"/>
                <rect x="48" y="296" width="132" height="42" rx="8"/>
              </g>
              <g fill="#fff" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700">
                <text x="64" y="154">Procedure + modifier</text>
                <text x="64" y="210">Clinical documentation</text>
                <text x="64" y="266">Authorization trigger</text>
                <text x="64" y="322">Payer + location</text>
              </g>
              <g>
                <rect x="294" y="128" width="150" height="42" rx="8" fill="#528532" fillOpacity=".26"/>
                <rect x="294" y="184" width="150" height="42" rx="8" fill="#528532" fillOpacity=".26"/>
                <rect x="294" y="240" width="150" height="42" rx="8" fill="#528532" fillOpacity=".26"/>
                <rect x="294" y="296" width="150" height="42" rx="8" fill="#528532" fillOpacity=".26"/>
              </g>
              <g fill="#fff" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700">
                <text x="312" y="154">Coding rule matched</text>
                <text x="312" y="210">Medical necessity check</text>
                <text x="312" y="266">Prior auth validated</text>
                <text x="312" y="322">Payer edit applied</text>
              </g>
              <g>
                <rect x="558" y="128" width="114" height="74" rx="10" fill="#528532"/>
                <rect x="558" y="218" width="114" height="56" rx="10" fill="#fff" fillOpacity=".08"/>
                <rect x="558" y="290" width="114" height="48" rx="10" fill="#d49b28"/>
              </g>
              <g fill="#fff" fontFamily="Arial,sans-serif" textAnchor="middle">
                <text x="615" y="155" fontSize="12" fontWeight="800">CLEAN CLAIM</text>
                <text x="615" y="176" fontSize="10">submitted first pass</text>
                <text x="615" y="243" fontSize="11" fontWeight="700">Exception</text>
                <text x="615" y="259" fontSize="10">human review</text>
                <text x="615" y="319" fontSize="11" fontWeight="800">Resolved</text>
              </g>
              <path className="flow-path" d="M200 222H266" fill="none" stroke="#d49b28" strokeWidth="4" markerEnd="url(#spArrow)"/>
              <path className="flow-path" d="M464 222H530" fill="none" stroke="#d49b28" strokeWidth="4" markerEnd="url(#spArrow)"/>
              <rect className="scan-line" x="286" y="142" width="166" height="3" rx="2" fill="#d49b28"/>
              <circle className="status-dot" cx="432" cy="149" r="5" fill="#d49b28"/>
              <circle className="status-dot" cx="432" cy="205" r="5" fill="#d49b28"/>
              <circle className="status-dot" cx="432" cy="261" r="5" fill="#d49b28"/>
              <text x="28" y="402" fill="#aeb4c4" fontFamily="Arial,sans-serif" fontSize="11">Rules change by specialty. Your assigned team changes the workflow before the claim reaches the payer.</text>
            </svg>
          </div>
          <div>
            <div className="specialty-list reveal">
              <a href="#assessment">Urgent Care</a>
              <a href="#assessment">General Surgery</a>
              <a href="#assessment">Rheumatology</a>
              <a href="#assessment">Internal Medicine</a>
              <a href="#assessment">Radiology</a>
              <a href="#assessment">Dermatology</a>
              <a href="#assessment">Mental Health</a>
              <a href="#assessment">Family Practice</a>
            </div>
            <div style={{ textAlign: "center" }}>
              <a className="btn" href="#specialties">View All Specialties</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
