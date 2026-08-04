"use client";
import Link from "next/link";

const services = [
  { label: "Hospital Billing", href: "/services/hospital-medical-billing/" },
  { label: "Physician Billing", href: "/services/physician-billing/" },
  { label: "AR Recovery", href: "/services/account-receivable-management/" },
  { label: "Coverage Discovery", href: "/services/coverage-discovery/" },
  { label: "Laboratory Billing", href: "/services/laboratory-billing-services" },
  { label: "ASC Billing", href: "/services/ambulatory-surgical-center-billing-services/" },
];

const sitemap = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Services", href: "/services/" },
  { label: "Specialties", href: "/specialties/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Our Team", href: "/team/" },
];

const social = [
  { label: "Facebook", href: "https://www.facebook.com/people/Medbilling-RCM/61565157759488/", icon: "f" },
  { label: "Instagram", href: "https://www.instagram.com/medbilling_rcm/", icon: "in" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/med-billing-rcm", icon: "li" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-primary)", color: "#fff", paddingTop: 72 }}>
      <div className="container-brand">
        {/* Top grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 56, borderBottom: "1px solid rgba(255,255,255,0.1)" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 3, padding: "7px 8px" }}>
                <div style={{ width: 6, height: 12, background: "#d49b28", borderRadius: 2 }} />
                <div style={{ width: 6, height: 18, background: "#fff", borderRadius: 2 }} />
                <div style={{ width: 6, height: 9, background: "#528532", borderRadius: 2 }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "1.0625rem", color: "#fff", lineHeight: 1.1 }}>Medbilling RCM</div>
                <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.12em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>Revenue Cycle Management</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 24, maxWidth: 340 }}>
              Medbilling RCM is a revenue infrastructure partner for physician practices, hospitals, and ambulatory surgery centers billing $1M+ annually. SOC 2 Type II certified. HIPAA compliant. BAA executed on day one.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: 10 }}>
              {social.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{
                    width: 38, height: 38, borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "0.75rem", color: "rgba(255,255,255,0.7)",
                    textDecoration: "none", transition: "background 0.18s, color 0.18s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "0.875rem", color: "#fff", marginBottom: 20, letterSpacing: "0.04em" }}>Sitemap</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {sitemap.map(item => (
                <li key={item.href}>
                  <Link href={item.href} style={{
                    fontFamily: "var(--font-montserrat)", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", textDecoration: "none",
                    transition: "color 0.18s",
                  }}
                    onMouseEnter={e => e.target.style.color = "#fff"}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "0.875rem", color: "#fff", marginBottom: 20, letterSpacing: "0.04em" }}>Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {services.map(item => (
                <li key={item.href}>
                  <Link href={item.href} style={{
                    fontFamily: "var(--font-montserrat)", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", textDecoration: "none",
                    transition: "color 0.18s",
                  }}
                    onMouseEnter={e => e.target.style.color = "#fff"}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "0.875rem", color: "#fff", marginBottom: 20, letterSpacing: "0.04em" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Email</div>
                <a href="mailto:info@medbillingrcm.com" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.18s" }}
                  onMouseEnter={e => e.target.style.color = "#fff"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.7)"}
                >info@medbillingrcm.com</a>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Phone</div>
                <a href="tel:888-551-2526" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                  (888) 551-2526
                </a>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Office</div>
                <address style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, fontStyle: "normal" }}>
                  8907 Creeks Gate Ct<br />Richmond, TX 77407<br /><br />
                  7 1st St<br />Rosedale, NY 11422
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 0", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", margin: 0 }}>
            © 2026 Medbilling RCM. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[{ label: "Privacy Policy", href: "/privacy-policy/" }, { label: "Terms Of Service", href: "/terms-of-service/" }].map(item => (
              <Link key={item.href} href={item.href} style={{
                fontFamily: "var(--font-montserrat)", fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", textDecoration: "none",
                transition: "color 0.18s",
              }}
                onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.7)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.35)"}
              >{item.label}</Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr !important;}}
        @media(max-width:540px){.footer-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </footer>
  );
}
