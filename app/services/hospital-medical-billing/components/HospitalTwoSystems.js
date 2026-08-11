export default function HospitalTwoSystems() {
  return (
    <section className="section" id="two-payment-systems" style={{ background: 'var(--color-ivory)' }}>
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">One roof, two systems</p>
          <h2>Two Payment Systems Under One Roof</h2>
          <p className="lead">Inpatient and outpatient billing are not two versions of the same job. They use different claim forms, different code sets, and different payment systems, and they break in different places. A team that treats them the same loses money on both.</p>
        </div>
        <div className="table-wrap reveal">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Inpatient billing</th>
                <th>Outpatient billing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Claim form</td>
                <td>UB-04</td>
                <td>UB-04 or CMS-1500</td>
              </tr>
              <tr>
                <td>Payment system</td>
                <td>MS-DRG under IPPS, one bundled payment per admission</td>
                <td>APC under OPPS, paid per service line</td>
              </tr>
              <tr>
                <td>Code sets</td>
                <td>ICD-10-CM diagnoses plus ICD-10-PCS procedures</td>
                <td>ICD-10-CM diagnoses plus CPT and HCPCS</td>
              </tr>
              <tr>
                <td>Where it breaks most</td>
                <td>DRG assignment, complication capture, present-on-admission indicators</td>
                <td>Modifier errors, medical necessity, observation vs admission status</td>
              </tr>
              <tr>
                <td>What we verify first</td>
                <td>The documentation supports the DRG before the claim is built</td>
                <td>Status, modifiers, and place of service before submission</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="reveal" style={{ marginTop: '32px', maxWidth: '820px' }}>
          <p>The status trap catches hospitals more than anything else here. A patient can spend two nights in a hospital bed and still bill as outpatient observation under Medicare Part B. Get the status wrong and the claim is wrong from the first line. We check it against the two-midnight rule before coding, not after a denial.</p>
          <p>For the outpatient surgical side, our <a href="/services/asc-billing/" className="text-link">ASC billing team</a> handles APC grouping and modifier work. Our <a href="/services/medical-coding/" className="text-link">medical coding team</a> carries both the inpatient and outpatient code sets.</p>
        </div>
      </div>
    </section>
  );
}
