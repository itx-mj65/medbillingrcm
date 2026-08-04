"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  { label: "Hospital Billing Services", href: "/services/hospital-medical-billing/" },
  { label: "Physician Billing Services", href: "/services/physician-billing/" },
  { label: "Account Receivable Services", href: "/services/account-receivable-management/" },
  { label: "Coverage Discovery Services", href: "/services/coverage-discovery/" },
  { label: "Laboratory Medical Billing Services", href: "/services/laboratory-billing-services" },
  { label: "Ambulatory Surgical Center Billing Services", href: "/services/ambulatory-surgical-center-billing-services/" },
  { label: "Medical Credentialing Services", href: "/services/medical-credentialing-services/" },
  { label: "Medical Coding Services", href: "/services/medical-coding/" },
  { label: "Healthcare Outsourcing Services", href: "/services/healthcare-fte-outsourcing/" },
];

const specialties = [
  { label: "Urgent Care", href: "/specialties/urgent-care/" },
  { label: "General Surgery", href: "/specialties/general-surgery/" },
  { label: "Rheumatology", href: "/specialties/rheumatology/" },
  { label: "Internal Medicine", href: "/specialties/internal-medicine/" },
  { label: "Radiology", href: "/specialties/radiology-billing/" },
  { label: "Dermatology", href: "/specialties/dermatology/" },
  { label: "Mental Health", href: "/specialties/mental-health/" },
  { label: "Family Practice", href: "/specialties/family-practice/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileSpecialties, setMobileSpecialties] = useState(false);
  const servicesRef = useRef(null);
  const specialtiesRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false);
      if (specialtiesRef.current && !specialtiesRef.current.contains(e.target)) setSpecialtiesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          background: scrolled ? "rgba(26,33,79,0.98)" : "rgba(26,33,79,0.0)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.18)" : "none",
          transition: "background 0.35s, box-shadow 0.35s, backdrop-filter 0.35s",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        }}
      >
        <div className="container-brand">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
              {/* Logo mark — bar chart icon from brand book */}
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: "rgba(255,255,255,0.12)",
                display: "flex", alignItems: "flex-end", justifyContent: "center",
                gap: 3, padding: "7px 8px",
              }}>
                <div style={{ width: 6, height: 12, background: "#d49b28", borderRadius: 2 }} />
                <div style={{ width: 6, height: 18, background: "#fff", borderRadius: 2 }} />
                <div style={{ width: 6, height: 9, background: "#528532", borderRadius: 2 }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "1.0625rem", color: "#fff", lineHeight: 1.1 }}>
                  Medbilling RCM
                </div>
                <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.12em", color: "rgba(255,255,255,0.55)", textTransform: "uppercase" }}>
                  Revenue Cycle Management
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav style={{ display: "flex", alignItems: "center", gap: 28 }} aria-label="Main navigation"
              className="hidden-mobile">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about-us/" className="nav-link">About</Link>

              {/* Services dropdown */}
              <div ref={servicesRef} style={{ position: "relative" }}>
                <button
                  onClick={() => { setServicesOpen(p => !p); setSpecialtiesOpen(false); }}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 5,
                    fontFamily: "var(--font-montserrat)", fontSize: "0.9375rem", fontWeight: 500,
                    color: "rgba(255,255,255,0.88)", padding: "6px 0",
                    transition: "color 0.18s",
                  }}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "none" }}>
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)",
                    background: "#fff", borderRadius: 14, boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
                    padding: "8px 0", minWidth: 300, zIndex: 100,
                    animation: "scaleIn 0.18s var(--ease-brand) both",
                  }}>
                    {services.map(s => (
                      <Link key={s.href} href={s.href}
                        onClick={() => setServicesOpen(false)}
                        style={{
                          display: "block", padding: "11px 20px",
                          fontFamily: "var(--font-montserrat)", fontSize: "0.875rem", fontWeight: 500,
                          color: "var(--color-ink)", textDecoration: "none",
                          transition: "background 0.15s, color 0.15s",
                        }}
                        onMouseEnter={e => { e.target.style.background = "var(--color-ivory)"; e.target.style.color = "var(--color-action)"; }}
                        onMouseLeave={e => { e.target.style.background = ""; e.target.style.color = "var(--color-ink)"; }}
                      >{s.label}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Specialties dropdown */}
              <div ref={specialtiesRef} style={{ position: "relative" }}>
                <button
                  onClick={() => { setSpecialtiesOpen(p => !p); setServicesOpen(false); }}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 5,
                    fontFamily: "var(--font-montserrat)", fontSize: "0.9375rem", fontWeight: 500,
                    color: "rgba(255,255,255,0.88)", padding: "6px 0",
                    transition: "color 0.18s",
                  }}
                  aria-expanded={specialtiesOpen}
                >
                  Specialties
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: specialtiesOpen ? "rotate(180deg)" : "none" }}>
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {specialtiesOpen && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)",
                    background: "#fff", borderRadius: 14, boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
                    padding: "8px 0", minWidth: 220, zIndex: 100,
                    animation: "scaleIn 0.18s var(--ease-brand) both",
                  }}>
                    <div style={{ padding: "10px 20px 6px", fontFamily: "var(--font-poppins)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)" }}>
                      Specialties We Serve
                    </div>
                    {specialties.map(s => (
                      <Link key={s.href} href={s.href}
                        onClick={() => setSpecialtiesOpen(false)}
                        style={{
                          display: "block", padding: "9px 20px",
                          fontFamily: "var(--font-montserrat)", fontSize: "0.875rem", fontWeight: 500,
                          color: "var(--color-ink)", textDecoration: "none",
                          transition: "background 0.15s, color 0.15s",
                        }}
                        onMouseEnter={e => { e.target.style.background = "var(--color-ivory)"; e.target.style.color = "var(--color-action)"; }}
                        onMouseLeave={e => { e.target.style.background = ""; e.target.style.color = "var(--color-ink)"; }}
                      >{s.label}</Link>
                    ))}
                    <div style={{ borderTop: "1px solid rgba(26,33,79,0.07)", margin: "6px 0 4px" }} />
                    <Link href="/specialties/"
                      onClick={() => setSpecialtiesOpen(false)}
                      style={{
                        display: "block", padding: "10px 20px",
                        fontFamily: "var(--font-montserrat)", fontSize: "0.8125rem", fontWeight: 700,
                        color: "var(--color-action)", textDecoration: "none",
                      }}>
                      View All Specialties →
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/blog/" className="nav-link">Blog</Link>
              <Link href="/contact-us/" className="nav-link">Contact</Link>
            </nav>

            {/* CTA + Hamburger */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Link href="/request-free-audit/" className="btn-primary hidden-mobile" style={{ fontSize: "0.8125rem", padding: "11px 22px" }}>
                Request Free Audit
              </Link>
              <button
                onClick={() => setMobileOpen(p => !p)}
                className="show-mobile"
                style={{
                  background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 8,
                  width: 42, height: 42, display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: 5, cursor: "pointer",
                  transition: "background 0.18s",
                }}
                aria-label="Toggle navigation"
              >
                <span style={{ display: "block", width: 20, height: 2, background: "#fff", borderRadius: 2, transition: "transform 0.25s, opacity 0.25s", transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
                <span style={{ display: "block", width: 20, height: 2, background: "#fff", borderRadius: 2, opacity: mobileOpen ? 0 : 1, transition: "opacity 0.25s" }} />
                <span style={{ display: "block", width: 20, height: 2, background: "#fff", borderRadius: 2, transition: "transform 0.25s, opacity 0.25s", transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        <div style={{ display: "flex", flexDirection: "column", height: "100%", overflowY: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <Link href="/" onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <div style={{ width: 32, height: 32, borderRadius: 7, background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 2, padding: "6px 7px" }}>
                <div style={{ width: 5, height: 10, background: "#d49b28", borderRadius: 2 }} />
                <div style={{ width: 5, height: 16, background: "#fff", borderRadius: 2 }} />
                <div style={{ width: 5, height: 8, background: "#528532", borderRadius: 2 }} />
              </div>
              <span style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>Medbilling RCM</span>
            </Link>
            <button onClick={() => setMobileOpen(false)} style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 8, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", fontSize: "1.3rem" }}>✕</button>
          </div>
          <nav style={{ padding: "16px 20px", flex: 1 }}>
            {[{ label: "Home", href: "/" }, { label: "About", href: "/about-us/" }, { label: "Blog", href: "/blog/" }, { label: "Contact", href: "/contact-us/" }].map(item => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "14px 0", fontFamily: "var(--font-montserrat)", fontSize: "1rem", fontWeight: 500, color: "rgba(255,255,255,0.88)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                {item.label}
              </Link>
            ))}
            <div>
              <button onClick={() => setMobileServices(p => !p)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", background: "none", border: "none", color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-montserrat)", fontSize: "1rem", fontWeight: 500, cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                Services <span style={{ transition: "transform 0.2s", display: "inline-block", transform: mobileServices ? "rotate(180deg)" : "none" }}>▾</span>
              </button>
              {mobileServices && (
                <div style={{ paddingLeft: 16 }}>
                  {services.map(s => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "10px 0", fontFamily: "var(--font-montserrat)", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button onClick={() => setMobileSpecialties(p => !p)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", background: "none", border: "none", color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-montserrat)", fontSize: "1rem", fontWeight: 500, cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                Specialties <span style={{ transition: "transform 0.2s", display: "inline-block", transform: mobileSpecialties ? "rotate(180deg)" : "none" }}>▾</span>
              </button>
              {mobileSpecialties && (
                <div style={{ paddingLeft: 16 }}>
                  {specialties.map(s => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "10px 0", fontFamily: "var(--font-montserrat)", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
          <div style={{ padding: "20px" }}>
            <Link href="/request-free-audit/" onClick={() => setMobileOpen(false)} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Request Free Audit
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </>
  );
}
