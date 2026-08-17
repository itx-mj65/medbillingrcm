import { siteConfig } from "@/app/lib/metadata";

/**
 * CtaSection — Reusable assessment CTA for every page.
 * 
 * Props:
 *   eyebrow  {string}  — small label above heading (default: "Ready when you are")
 *   heading  {string}  — main H2 text
 *   body     {string}  — paragraph below heading
 *   ctaLabel {string}  — submit button text
 *   formId   {string}  — unique form id for JS targeting (default: "ctaForm")
 *   checklist {string[]} — optional bullet list shown left of form
 *   image    {string}  — optional /public image path for left column
 *   imageAlt {string}  — image alt text
 */
export default function CtaSection({
  eyebrow   = "Ready when you are",
  heading   = "The free assessment is specific.",
  body      = "We pull a sample of your claims and show your E/M distribution against benchmark, your top denial reasons by dollar, and your aged AR by payer. You keep the findings whether or not you work with us.",
  ctaLabel  = "Get a Free Revenue Assessment",
  formId    = "ctaForm",
  checklist = [
    "E/M distribution benchmarked against your specialty",
    "Top denial reasons by dollar from your AR",
    "Aged AR by payer — filing window exposure",
    "You keep the findings either way",
    "HIPAA-compliant — BAA signed before data moves",
    "No setup fee. No long-term contract.",
  ],
  formNote  = "HIPAA-compliant · No setup fee · No long-term contract",
}) {
  return (
    <section className="cta-sec" id="assessment" aria-labelledby="cta-heading">
      <div className="cta-sec-wrap">
        {/* Left — eyebrow, heading, body, checklist */}
        <div className="cta-sec-left">
          <p className="cta-sec-ew">{eyebrow}</p>
          <h2 className="cta-sec-h2" id="cta-heading">{heading}</h2>
          <p className="cta-sec-body">{body}</p>

          {checklist.length > 0 && (
            <ul className="cta-sec-list" aria-label="What the assessment covers">
              {checklist.map((item) => (
                <li key={item}>
                  <svg className="cta-sec-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" width="16" height="16">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="cta-sec-contact">
            <a href={`tel:${siteConfig.phone.replace(/\D/g,"")}`}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 011 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7a16 16 0 006.91 6.91l.35-.36a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div className="cta-sec-right">
          <div className="cta-sec-form-box">
            <h3 className="cta-sec-form-h3">{ctaLabel}</h3>
            <form className="cta-sec-form" id={formId} action="/request-free-audit/" method="post" noValidate>
              <div className="cta-sec-row">
                <div className="cta-sec-field">
                  <label className="cta-sec-lbl" htmlFor={`${formId}-name`}>Full name</label>
                  <input className="cta-sec-ctrl" type="text" id={`${formId}-name`} name="full_name" placeholder="Dr. Jane Smith" autoComplete="name" required />
                </div>
                <div className="cta-sec-field">
                  <label className="cta-sec-lbl" htmlFor={`${formId}-email`}>Work email</label>
                  <input className="cta-sec-ctrl" type="email" id={`${formId}-email`} name="work_email" placeholder="name@practice.com" autoComplete="email" required />
                </div>
              </div>
              <div className="cta-sec-row">
                <div className="cta-sec-field">
                  <label className="cta-sec-lbl" htmlFor={`${formId}-practice`}>Practice name</label>
                  <input className="cta-sec-ctrl" type="text" id={`${formId}-practice`} name="practice_name" placeholder="Your practice or group name" required />
                </div>
                <div className="cta-sec-field">
                  <label className="cta-sec-lbl" htmlFor={`${formId}-specialty`}>Specialty</label>
                  <select className="cta-sec-ctrl" id={`${formId}-specialty`} name="specialty" defaultValue="">
                    <option value="" disabled>Select specialty</option>
                    {["Primary care","Cardiology","Dermatology","Behavioral health","Orthopedics","Gastroenterology","Neurology","Oncology","Radiology","Hospital / Health system","Other"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="cta-sec-field cta-sec-field--full">
                <label className="cta-sec-lbl" htmlFor={`${formId}-concern`}>Primary revenue concern</label>
                <select className="cta-sec-ctrl" id={`${formId}-concern`} name="revenue_concern" defaultValue="">
                  <option value="" disabled>Select concern</option>
                  {["Denials","Under-coded E/M levels","Prior authorization burden","Aged AR","Credentialing gaps","Telehealth billing","Full revenue cycle"].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <button type="submit" className="cta-sec-submit">{ctaLabel}</button>
              {formNote && <p className="cta-sec-foot">{formNote}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
