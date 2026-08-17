import Link from "next/link";
import { siteConfig } from "@/app/lib/metadata";

const SERVICES = [
  { label: "Physician Billing",    href: "/services/physician-billing/" },
  { label: "Hospital Billing",     href: "/services/hospital-medical-billing/" },
  { label: "Medical Coding",       href: "/services/medical-coding/" },
  { label: "AR Management",        href: "/services/account-receivable-management/" },
  { label: "Credentialing",        href: "/services/medical-credentialing/" },
  { label: "Coverage Discovery",   href: "/services/coverage-discovery/" },
];
const SPECIALTIES = [
  { label: "Primary Care",         href: "/specialties/primary-care/" },
  { label: "Cardiology",           href: "/specialties/cardiology/" },
  { label: "Dermatology",          href: "/specialties/dermatology/" },
  { label: "Behavioral Health",    href: "/specialties/behavioral-health/" },
  { label: "Oncology",             href: "/specialties/oncology/" },
  { label: "Radiology",            href: "/specialties/radiology/" },
];
const COMPANY = [
  { label: "About Us",             href: "/#standard" },
  { label: "Case Studies",         href: "/case-studies/" },
  { label: "Client Outcomes",      href: "/#outcomes" },
  { label: "Free Assessment",      href: "/#assessment" },
  { label: "FAQ",                  href: "/#faq" },
];

function LogoWave() {
  return (
    <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="rgba(82,133,50,.22)"/>
      <path d="M7 22 Q10 15 13 22 Q16 29 20 12 Q24 -4 27 20 Q30 29 33 22"
        stroke="#528532" strokeWidth="2.6" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr" role="contentinfo">

      {/* ── Top band — logo + tagline + CTA ────────────────── */}
      <div className="ftr-band">
        <div className="ftr-band-inner">
          <div className="ftr-band-left">
            <Link href="/" className="ftr-logo" aria-label="Medbilling RCM home">
              <LogoWave />
              <div className="ftr-logo-words">
                <span className="ftr-logo-name">Medbilling<strong>RCM</strong></span>
                <span className="ftr-logo-sub">Revenue Cycle Management</span>
              </div>
            </Link>
            <p className="ftr-tagline">
              Medical billing for CMS-1500 practices and hospital systems.
              97% clean claim rate, measured at the payer.
            </p>
            <div className="ftr-creds">
              <span className="ftr-cred">✓ HIPAA compliant</span>
              <span className="ftr-cred">✓ No setup fees</span>
              <span className="ftr-cred">✓ All 50 states</span>
            </div>
          </div>
          <div className="ftr-band-right">
            <p className="ftr-cta-label">Ready to recover more revenue?</p>
            <Link href="/#assessment" className="ftr-cta-btn">
              Get a Free Revenue Assessment
            </Link>
            <div className="ftr-reach">
              <a href={`tel:${siteConfig.phone.replace(/\D/g,"")}`} className="ftr-reach-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 011 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7a16 16 0 006.91 6.91l.35-.36a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="ftr-reach-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Link columns ─────────────────────────────────────── */}
      <div className="ftr-cols">
        <div className="ftr-col">
          <h3 className="ftr-col-h">Services</h3>
          <ul className="ftr-col-list">
            {SERVICES.map(({ label, href }) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="ftr-col">
          <h3 className="ftr-col-h">Specialties</h3>
          <ul className="ftr-col-list">
            {SPECIALTIES.map(({ label, href }) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="ftr-col">
          <h3 className="ftr-col-h">Company</h3>
          <ul className="ftr-col-list">
            {COMPANY.map(({ label, href }) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="ftr-col">
          <h3 className="ftr-col-h">Our Locations</h3>
          <div className="ftr-addr-block">
            <div className="ftr-addr-head">Texas</div>
            <address className="ftr-addr">
              8907 Creeks Gate Ct<br/>Richmond, TX 77407
            </address>
          </div>
          <div className="ftr-addr-block">
            <div className="ftr-addr-head">New York</div>
            <address className="ftr-addr">
              7 1st St<br/>Rosedale, NY 11422
            </address>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────── */}
      <div className="ftr-bottom">
        <p className="ftr-copy">© {year} {siteConfig.name}. All rights reserved.</p>
        <p className="ftr-review">
          Last reviewed August 2026 · Figures from CMS, AMA, Kodiak Solutions &amp; BLS
        </p>
      </div>
    </footer>
  );
}
