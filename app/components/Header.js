"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ─── Nav structure ─────────────────────────────────────────
   Simple items  → { label, href }
   Dropdown items → { label, dropdown: { items[], featured } }
────────────────────────────────────────────────────────── */
const NAV = [
  {
    label: "Services",
    dropdown: {
      items: [
        { label: "Physician Billing",   href: "/services/physician-billing/",         desc: "CMS-1500 professional billing across all 50 states" },
        { label: "Hospital Billing",    href: "/services/hospital-medical-billing/",  desc: "Institutional billing, DRG optimization & 340B" },
        { label: "Medical Coding",      href: "/services/medical-coding/",            desc: "CPT, ICD-10, E/M coding with specialty assignment" },
        { label: "AR Management",       href: "/services/account-receivable-management/", desc: "Denial resolution and aged AR recovery" },
        { label: "Credentialing",       href: "/services/medical-credentialing/",     desc: "NPI, CAQH, PECOS and payer enrollment" },
        { label: "Coverage Discovery",  href: "/services/coverage-discovery/",        desc: "Insurance verification and eligibility checks" },
      ],
      featured: {
        href:  "/services/physician-billing/",
        title: "Free Revenue Assessment",
        desc:  "We pull a sample of your claims and show where your revenue is going. No rate card, no obligation.",
        cta:   "Get Started →",
      },
    },
  },
  {
    label: "Specialties",
    dropdown: {
      items: [
        { label: "Primary Care",        href: "/specialties/primary-care/",       desc: "E/M optimization for family and internal medicine" },
        { label: "Cardiology",          href: "/specialties/cardiology/",          desc: "Complex interventional and diagnostic billing" },
        { label: "Dermatology",         href: "/specialties/dermatology/",         desc: "Procedure coding and E/M documentation" },
        { label: "Behavioral Health",   href: "/specialties/behavioral-health/",   desc: "Telehealth, ERA, EFT enrollments" },
        { label: "Oncology",            href: "/specialties/oncology/",             desc: "Drug administration and complex coding" },
        { label: "Radiology",           href: "/specialties/radiology/",            desc: "Modality-specific technical and professional billing" },
      ],
    },
  },
  { label: "Case Studies",  href: "/case-studies/" },
  { label: "Resources",     href: "/#faq" },
  { label: "About",         href: "/#standard" },
];

/* ─── Dropdown panel ──────────────────────────────────────── */
function DropdownMenu({ dropdown, onClose }) {
  return (
    <div className="hdr-drop" role="menu">
      <div className="hdr-drop-inner">
        <ul className="hdr-drop-list" role="none">
          {dropdown.items.map(({ label, href, desc }) => (
            <li key={href} role="none">
              <Link href={href} className="hdr-drop-item" role="menuitem" onClick={onClose}>
                <span className="hdr-drop-label">{label}</span>
                {desc && <span className="hdr-drop-desc">{desc}</span>}
              </Link>
            </li>
          ))}
        </ul>
        {dropdown.featured && (
          <div className="hdr-drop-feat">
            <div className="hdr-drop-feat-tag">Featured</div>
            <div className="hdr-drop-feat-title">{dropdown.featured.title}</div>
            <p className="hdr-drop-feat-desc">{dropdown.featured.desc}</p>
            <Link href={dropdown.featured.href} className="hdr-drop-feat-cta" onClick={onClose}>
              {dropdown.featured.cta}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Logo mark ─────────────────────────────────────────── */
function LogoMark() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#f0f7e8"/>
      <path d="M8 22 Q11 16 14 22 Q17 28 20 14 Q23 0 26 20 Q29 28 32 22" stroke="#528532" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
      <path d="M10 24 Q15 30 20 26 Q25 22 30 24" stroke="#1a214f" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity=".55"/>
    </svg>
  );
}

/* ─── Main Header ─────────────────────────────────────────── */
export default function Header() {
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [activeMenu,   setActiveMenu]   = useState(null); // label string
  const [mobileExpand, setMobileExpand] = useState(null); // label string
  const hoverTimer = useRef(null);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) { setMobileOpen(false); setMobileExpand(null); } };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
  }, [mobileOpen]);

  const closeAll = () => { setMobileOpen(false); setMobileExpand(null); setActiveMenu(null); };

  const handleMouseEnter = (label) => {
    clearTimeout(hoverTimer.current);
    setActiveMenu(label);
  };
  const handleMouseLeave = () => {
    hoverTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <header className="hdr">
      <div className="hdr-inner">
        {/* Logo */}
        <Link className="hdr-logo" href="/" onClick={closeAll} aria-label="Medbilling RCM home">
          <LogoMark />
          <div className="hdr-logo-text">
            <span className="hdr-logo-main">Medbilling<strong>RCM</strong></span>
            <span className="hdr-logo-sub">Revenue Cycle Management</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hdr-nav" aria-label="Primary navigation">
          {NAV.map((item) => {
            const hasDrop = Boolean(item.dropdown);
            const isActive = activeMenu === item.label;
            return (
              <div
                key={item.label}
                className={`hdr-nav-item${hasDrop ? " hdr-has-drop" : ""}${isActive ? " hdr-active" : ""}`}
                onMouseEnter={hasDrop ? () => handleMouseEnter(item.label) : undefined}
                onMouseLeave={hasDrop ? handleMouseLeave : undefined}
              >
                {hasDrop ? (
                  <button
                    className="hdr-nav-btn"
                    aria-expanded={isActive}
                    aria-haspopup="true"
                    onClick={() => setActiveMenu(isActive ? null : item.label)}
                  >
                    {item.label}
                    <svg className="hdr-chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
                  </button>
                ) : (
                  <Link href={item.href} className="hdr-nav-link" onClick={closeAll}>{item.label}</Link>
                )}
                {hasDrop && isActive && (
                  <DropdownMenu dropdown={item.dropdown} onClose={closeAll} />
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA button */}
        <Link className="hdr-cta" href="/#assessment" onClick={closeAll}>
          Get a Free Assessment
        </Link>

        {/* Hamburger */}
        <button
          className={`hdr-burger${mobileOpen ? " hdr-burger--open" : ""}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => { setMobileOpen(v => !v); setMobileExpand(null); }}
        >
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        id="mobile-nav"
        className={`hdr-mobile${mobileOpen ? " hdr-mobile--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div className="hdr-mobile-inner">
          {NAV.map((item) => {
            const hasDrop  = Boolean(item.dropdown);
            const expanded = mobileExpand === item.label;
            return (
              <div key={item.label} className="hdr-mob-item">
                {hasDrop ? (
                  <>
                    <button
                      className="hdr-mob-btn"
                      aria-expanded={expanded}
                      onClick={() => setMobileExpand(expanded ? null : item.label)}
                    >
                      {item.label}
                      <svg className={`hdr-chev${expanded ? " hdr-chev--up" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
                    </button>
                    {expanded && (
                      <div className="hdr-mob-sub">
                        {item.dropdown.items.map(({ label, href }) => (
                          <Link key={href} href={href} className="hdr-mob-sub-link" onClick={closeAll}>{label}</Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="hdr-mob-link" onClick={closeAll}>{item.label}</Link>
                )}
              </div>
            );
          })}
          <Link className="hdr-mob-cta" href="/#assessment" onClick={closeAll}>
            Get a Free Assessment
          </Link>
        </div>
      </nav>

      {/* Backdrop */}
      {mobileOpen && (
        <div className="hdr-backdrop" aria-hidden="true" onClick={closeAll} />
      )}
    </header>
  );
}
