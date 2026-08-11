import "./hospital.css";
import HospitalScripts from "./components/HospitalScripts";

export const metadata = {
  title: "Hospital Medical Billing Services | Inpatient & Outpatient | Medbilling RCM",
  description: "Hospital medical billing services for inpatient and outpatient care. MS-DRG, APC, UB-04, 340B split billing, and TEAM model. 97% clean claim rate measured at the payer.",
};

export default function HospitalLayout({ children }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      {/* ── HEADER — original nav links from the source file ── */}
      <header className="site-head">
        <div className="shell head-inner">
          <a className="hosp-brand" href="/" aria-label="Medbilling RCM home">
            <span className="brand-mark">M</span>
            <span>Medbilling RCM<small>Revenue control, made visible</small></span>
          </a>
          <nav className="hosp-nav" id="hosp-nav" aria-label="Primary navigation">
            <a href="#two-payment-systems-under-one-roof">Services</a>
            <a href="#the-systems-we-already-work-inside">Systems</a>
            <a href="#what-changed-for-the-practices-we-took-on">Outcomes</a>
            <a href="#the-rules-we-build-every-claim-around">Compliance</a>
            <a href="#hospital-billing-questions-we-get-asked">FAQs</a>
            <a className="head-cta" href="#see-where-your-hospital-revenue-is-leaking">Free Revenue Assessment</a>
          </nav>
          <button className="hosp-menu" id="hosp-menu" aria-expanded="false" aria-controls="hosp-nav" aria-label="Open navigation">
            <span></span>
          </button>
        </div>
      </header>

      {children}

      {/* ── FOOTER ── */}
      <footer className="site-foot">
        <div className="shell foot-inner">
          <a className="hosp-brand" href="/">
            <span className="brand-mark">M</span>
            <span>Medbilling RCM</span>
          </a>
          <span>Hospital medical billing services for inpatient and outpatient care.</span>
          <span>HIPAA &bull; BAA before data access</span>
        </div>
      </footer>

      <HospitalScripts />
    </>
  );
}
