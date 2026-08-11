"use client";
export default function Header() {
  return (
    <header className="site-head">
      <div className="shell head-inner">
        <a className="brand" href="/" aria-label="Medbilling RCM home">
          Medbilling RCM <small>Revenue Cycle Management</small>
        </a>
        <nav className="nav" id="nav" aria-label="Primary navigation">
          <a href="/#services">Solutions</a>
          <a href="/services/hospital-medical-billing/">Hospital Billing</a>
          <a href="/#specialties">Who We Serve</a>
          <a href="/#outcomes">Client Outcomes</a>
          <a href="/#faq">Resources</a>
          <a href="/#standard">About Us</a>
          <a className="head-cta" href="/#assessment">Get a Free Revenue Assessment</a>
        </nav>
        <button className="menu" id="menu" aria-expanded="false" aria-controls="nav">Menu</button>
      </div>
    </header>
  );
}
