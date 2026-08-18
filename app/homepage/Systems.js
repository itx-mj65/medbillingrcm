export default function Systems() {
  return (
    <section className="section systems" id="systems">
      <div className="shell systems-grid">
        <div className="reveal">
          <p className="eyebrow">Keep your current stack</p>
          <h2>Works With the Systems You Already Run</h2>
          <p className="lead">No forced platform migration and no proprietary software to buy. We integrate with your existing EHR and practice management setup, and custom integrations are scoped during the revenue audit at no extra charge.</p>
          <a className="text-link" href="#assessment">Check Your System Compatibility →</a>
        </div>
        <div className="systems-visual reveal">
          <div className="workflow-visual ehr-visual" data-workflow role="img" aria-label="Animated EHR integration workflow from clinical encounter through billing rules to payer reconciliation">
            <svg viewBox="0 0 720 480" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="ehrPanel" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1a214f"/><stop offset="1" stopColor="#101638"/></linearGradient>
                <filter id="ehrShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#1a214f" floodOpacity=".13"/></filter>
                <marker id="ehrArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#528532"/></marker>
              </defs>
              <rect width="720" height="480" fill="#f7f8f4"/>
              <rect x="0" y="0" width="720" height="54" fill="url(#ehrPanel)"/>
              <text x="30" y="34" fill="#fff" fontFamily="Arial,sans-serif" fontSize="15" fontWeight="700">LIVE EHR → REVENUE WORKFLOW</text>
              <rect x="600" y="18" width="88" height="20" rx="10" fill="#528532"/>
              <circle className="status-dot" cx="618" cy="28" r="5" fill="#d7ebca"/>
              <text x="630" y="33" fill="#fff" fontFamily="Arial,sans-serif" fontSize="10" fontWeight="700">ACTIVE</text>
              <g filter="url(#ehrShadow)">
                <rect x="26" y="82" width="186" height="322" rx="16" fill="#fff"/>
                <rect x="278" y="82" width="192" height="322" rx="16" fill="url(#ehrPanel)"/>
                <rect x="532" y="82" width="162" height="322" rx="16" fill="#fff"/>
              </g>
              <text x="46" y="112" fill="#1a214f" fontFamily="Arial,sans-serif" fontSize="14" fontWeight="800">CLINICAL EHR</text>
              <text x="298" y="112" fill="#fff" fontFamily="Arial,sans-serif" fontSize="14" fontWeight="800">RCM CONTROL LAYER</text>
              <text x="552" y="112" fill="#1a214f" fontFamily="Arial,sans-serif" fontSize="14" fontWeight="800">PAYER + ERA</text>
              <g fill="#f4f0e7">
                <rect x="46" y="134" width="146" height="56" rx="9"/>
                <rect x="46" y="204" width="146" height="56" rx="9"/>
                <rect x="46" y="274" width="146" height="56" rx="9"/>
                <rect x="46" y="344" width="146" height="40" rx="9"/>
              </g>
              <g fill="#1a214f" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700">
                <text x="62" y="158">Encounter + notes</text>
                <text x="62" y="178">CPT / ICD-10 context</text>
                <text x="62" y="228">Eligibility response</text>
                <text x="62" y="248">Authorization status</text>
                <text x="62" y="298">Charges captured</text>
                <text x="62" y="318">Provider mapping</text>
                <text x="62" y="369">Secure data handoff</text>
              </g>
              <g>
                <rect x="298" y="134" width="152" height="48" rx="8" fill="#fff" fillOpacity=".08" stroke="#fff" strokeOpacity=".2"/>
                <rect x="298" y="196" width="152" height="48" rx="8" fill="#fff" fillOpacity=".08" stroke="#fff" strokeOpacity=".2"/>
                <rect x="298" y="258" width="152" height="48" rx="8" fill="#fff" fillOpacity=".08" stroke="#fff" strokeOpacity=".2"/>
                <rect x="298" y="320" width="152" height="48" rx="8" fill="#fff" fillOpacity=".08" stroke="#fff" strokeOpacity=".2"/>
              </g>
              <g fill="#fff" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700">
                <text x="316" y="163">1  Verify eligibility</text>
                <text x="316" y="225">2  Scrub payer rules</text>
                <text x="316" y="287">3  Submit clean claim</text>
                <text x="316" y="349">4  Reconcile payment</text>
              </g>
              <g fill="#eef3e9">
                <rect x="552" y="134" width="122" height="62" rx="9"/>
                <rect x="552" y="212" width="122" height="62" rx="9"/>
                <rect x="552" y="290" width="122" height="94" rx="9"/>
              </g>
              <g fill="#1a214f" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700">
                <text x="570" y="160">Claim accepted</text>
                <text x="570" y="180">Status tracked</text>
                <text x="570" y="238">ERA received</text>
                <text x="570" y="258">Rates checked</text>
                <text x="570" y="316">Exceptions routed</text>
                <text x="570" y="336">Human review</text>
                <text x="570" y="356">Dashboard updated</text>
              </g>
              <path className="flow-path" d="M212 242H270" fill="none" stroke="#528532" strokeWidth="4" markerEnd="url(#ehrArrow)"/>
              <path className="flow-path" d="M470 242H524" fill="none" stroke="#528532" strokeWidth="4" markerEnd="url(#ehrArrow)"/>
              <rect className="scan-line" x="290" y="142" width="168" height="3" rx="2" fill="#d49b28"/>
              <circle className="status-dot" cx="438" cy="158" r="5" fill="#d49b28"/>
              <circle className="status-dot" cx="438" cy="220" r="5" fill="#d49b28"/>
              <circle className="status-dot" cx="438" cy="282" r="5" fill="#d49b28"/>
              <text x="30" y="446" fill="#697083" fontFamily="Arial,sans-serif" fontSize="11">Your existing system stays in place. Clean data moves securely through the revenue cycle.</text>
            </svg>
          </div>
          <div className="system-cloud compact" aria-label="Supported systems">
            <span>eClinicalWorks</span><span>RXNT</span><span>Office Ally</span><span>Epic</span>
            <span>Athenahealth</span><span>NextGen</span><span>Kareo</span><span>AdvancedMD</span>
            <span>DrChrono</span><span>Greenway Health</span><span>Practice Fusion</span>
            <span>CareCloud</span><span>30+ additional platforms</span>
          </div>
        </div>
      </div>
    </section>
  );
}
