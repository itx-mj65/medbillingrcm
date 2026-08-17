import Link from "next/link";
import { siteConfig } from "@/app/lib/metadata";

const FOOTER_LINKS = {
  services: [
    { label: "Physician Billing",    href: "/services/physician-billing/" },
    { label: "Hospital Billing",     href: "/services/hospital-medical-billing/" },
    { label: "Medical Coding",       href: "/services/medical-coding/" },
    { label: "AR Management",        href: "/services/account-receivable-management/" },
    { label: "Credentialing",        href: "/services/medical-credentialing/" },
    { label: "Coverage Discovery",   href: "/services/coverage-discovery/" },
  ],
  specialties: [
    { label: "Primary Care",         href: "/specialties/primary-care/" },
    { label: "Cardiology",           href: "/specialties/cardiology/" },
    { label: "Dermatology",          href: "/specialties/dermatology/" },
    { label: "Behavioral Health",    href: "/specialties/behavioral-health/" },
    { label: "Oncology",             href: "/specialties/oncology/" },
    { label: "Radiology",            href: "/specialties/radiology/" },
  ],
  company: [
    { label: "About Us",             href: "/#standard" },
    { label: "Case Studies",         href: "/case-studies/" },
    { label: "Client Outcomes",      href: "/#outcomes" },
    { label: "Free Assessment",      href: "/#assessment" },
    { label: "FAQ",                  href: "/#faq" },
  ],
};

function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="rgba(82,133,50,.18)"/>
      <path d="M8 22 Q11 16 14 22 Q17 28 20 14 Q23 0 26 20 Q29 28 32 22" stroke="#528532" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
      <path d="M10 24 Q15 30 20 26 Q25 22 30 24" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity=".4"/>
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      <div className="ftr-top">
        <div className="ftr-brand-col">
          <Link href="/" className="ftr-logo" aria-label="Medbilling RCM home">
            <LogoMark />
            <div>
              <div className="ftr-logo-name">Medbilling<strong>RCM</strong></div>
              <div className="ftr-logo-sub">Revenue Cycle Management</div>
            </div>
          </Link>
          <p className="ftr-tagline">
            Medical billing services for CMS-1500 practices and hospital systems.
            97% first-pass clean claim rate, measured at the payer.
          </p>
          <div className="ftr-contact">
            <a href={`tel:${siteConfig.phone.replace(/\D/g,"")}`} className="ftr-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 011 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7a16 16 0 006.91 6.91l.35-.36a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="ftr-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {siteConfig.email}
            </a>
          </div>
          <div className="ftr-addr">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            8907 Creeks Gate Ct, Richmond, TX 77407
          </div>
          <div className="ftr-addr">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            7 1st St, Rosedale, NY 11422
          </div>
        </div>

        <div className="ftr-links-col">
          <h4 className="ftr-col-head">Services</h4>
          <ul className="ftr-link-list">
            {FOOTER_LINKS.services.map(({ label, href }) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="ftr-links-col">
          <h4 className="ftr-col-head">Specialties</h4>
          <ul className="ftr-link-list">
            {FOOTER_LINKS.specialties.map(({ label, href }) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="ftr-links-col">
          <h4 className="ftr-col-head">Company</h4>
          <ul className="ftr-link-list">
            {FOOTER_LINKS.company.map(({ label, href }) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ftr-bottom">
        <p className="ftr-copy">© {year} {siteConfig.name}. All rights reserved.</p>
        <p className="ftr-note">Last reviewed August 2026. Figures cited from CMS, the AMA, Kodiak Solutions, and the U.S. Bureau of Labor Statistics.</p>
      </div>
    </footer>
  );
}
