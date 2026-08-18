"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ─── Services with preview content ─────────────────────────
   Each item has: label, href, desc, preview { title, body, img, imgAlt }
   img = public path — use placeholder text if image not yet available
────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    label: "Physician Billing",
    href:  "/services/physician-billing/",
    desc:  "CMS-1500 professional billing across all 50 states",
    preview: {
      title:  "Physician Billing Services",
      body:   "Professional billing for CMS-1500 practices. E/M coding, prior auth, denial management, and telehealth billing — measured at the payer.",
      stat:   "97% first-pass clean claim rate",
      img:    "/physician-hero.webp",
      imgAlt: "Physician and administrator reviewing EHR revenue workflow",
    },
  },
  {
    label: "Hospital Billing",
    href:  "/services/hospital-medical-billing/",
    desc:  "Institutional billing, DRG optimization & 340B",
    preview: {
      title:  "Hospital Medical Billing",
      body:   "Institutional billing for inpatient and outpatient care. DRG optimization, 340B compliance, and facility fee management on the UB-04.",
      stat:   "97% clean claim rate — measured at the payer",
      img:    "/hospital-hero.png",
      imgAlt: "Hospital revenue-cycle leaders reviewing EHR financial dashboard",
    },
  },
  {
    label: "Medical Coding",
    href:  "/services/medical-coding/",
    desc:  "CPT, ICD-10, E/M coding with specialty assignment",
    preview: {
      title:  "Medical Coding Services",
      body:   "CPC, CCS, and COC certified coders applying ICD-10, CPT, and HCPCS expertise. 99.5% coding accuracy with real-time edits and audits.",
      stat:   "99.5% coding accuracy · HIPAA compliant",
      img:    "/mc-hero.webp",
      imgAlt: "Medical billing coder reviewing ICD-10 and CPT coding documents at dual monitors",
    },
  },
  {
    label: "AR Management",
    href:  "/services/account-receivable-management/",
    desc:  "Denial resolution and aged AR recovery",
    preview: {
      title:  "AR Recovery Services",
      body:   "Accounts receivable management on claims that did not pay the first time. 90%+ collection rate on worked claims across 800+ payers.",
      stat:   "90%+ collection rate on worked claims",
      img:    "/ar-hero.webp",
      imgAlt: "RCM specialists reviewing accounts receivable aging analysis",
    },
  },
  {
    label: "Laboratory Billing",
    href:  "/services/laboratory-billing/",
    desc:  "Clinical lab, pathology & molecular diagnostics billing",
    preview: {
      title:  "Laboratory Billing Services",
      body:   "Lab billing for clinical labs, pathology, molecular diagnostics, and toxicology. PAMA-compliant with 48hr denial turnaround across 1,000+ payers.",
      stat:   "48hr denial turnaround · PAMA compliant",
      img:    "/lab-hero.webp",
      imgAlt: "Laboratory technician reviewing diagnostic samples with centrifuge and microscope",
    },
  },
  {
    label: "Credentialing",
    href:  "/services/medical-credentialing/",
    desc:  "NPI, CAQH, PECOS and payer enrollment",
    preview: {
      title:  "Medical Credentialing",
      body:   "Provider credentialing and payer enrollment kept current. NPI, CAQH, PECOS, and all payer applications managed with re-credentialing dates tracked.",
      stat:   "Zero enrollment gaps — revenue never stops",
      img:    null,
      imgAlt: "Medical credentialing specialist reviewing provider enrollment documents",
      imgPlaceholder: "Credentialing",
    },
  },
  {
    label: "Coverage Discovery",
    href:  "/services/coverage-discovery/",
    desc:  "Insurance verification and eligibility checks",
    preview: {
      title:  "Coverage Discovery",
      body:   "Insurance verification and eligibility checks before the visit. We surface hidden coverage so claims are submitted correctly the first time.",
      stat:   "Catch coverage gaps before they become denials",
      img:    "/cd-hero.webp",
      imgAlt: "Insurance eligibility specialist reviewing payer database results on dual monitors",
    },
  },
  {
    label: "ASC Billing",
    href:  "/services/asc-billing/",
    preview: {
      title:  "Ambulatory Surgery Center Billing",
      body:   "ASC billing for freestanding and multi-specialty surgery centers. APC coding, implant pass-through, NCCI compliance, and 48hr denial turnaround.",
      stat:   "16–22% denial rate — we fix the infrastructure",
      img:    null,
      imgAlt: "Ambulatory surgery center operating room with surgical team",
      imgPlaceholder: "ASC Billing",
    },
  },
];

const SPECIALTIES = [
  { label: "Primary Care",      href: "/specialties/primary-care/",      desc: "E/M optimization for family and internal medicine" },
  { label: "Cardiology",        href: "/specialties/cardiology/",         desc: "Complex interventional and diagnostic billing" },
  { label: "Dermatology",       href: "/specialties/dermatology/",        desc: "Procedure coding and E/M documentation" },
  { label: "Behavioral Health", href: "/specialties/behavioral-health/",  desc: "Telehealth, ERA, EFT enrollments" },
  { label: "Oncology",          href: "/specialties/oncology/",           desc: "Drug administration and complex coding" },
  { label: "Radiology",         href: "/specialties/radiology/",          desc: "Modality-specific technical and professional billing" },
];

const NAV = [
  { label: "Services",     dropdown: "services"    },
  { label: "Specialties",  dropdown: "specialties" },
  { label: "Case Studies", href: "/case-studies/"  },
  { label: "Resources",    href: "/#faq"           },
  { label: "About",        href: "/#standard"      },
];

/* ─── Services mega-menu with hover preview ─────────────── */
function ServicesMegaMenu({ onClose }) {
  const [active, setActive] = useState(SERVICES[0]);

  return (
    <div className="hdr-drop hdr-drop--mega" role="menu">
      <div className="hdr-mega-inner">

        {/* Left: service list */}
        <ul className="hdr-mega-list" role="none">
          {SERVICES.map((svc) => (
            <li key={svc.href} role="none"
              onMouseEnter={() => setActive(svc)}>
              <Link
                href={svc.href}
                className={`hdr-mega-item${active.href === svc.href ? " hdr-mega-item--active" : ""}`}
                role="menuitem"
                onClick={onClose}
              >
                <span className="hdr-mega-label">{svc.label}</span>

              </Link>
            </li>
          ))}
          <li role="none" style={{marginTop:"8px", paddingTop:"12px", borderTop:"1px solid var(--color-line)"}}>
            <Link href="/services/" className="hdr-mega-all" role="menuitem" onClick={onClose}>
              View all services →
            </Link>
          </li>
        </ul>

        {/* Right: dynamic preview */}
        <div className="hdr-mega-preview" key={active.href}>
          <div className="hdr-mega-img-wrap">
            {active.preview.img ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={active.preview.img}
                alt={active.preview.imgAlt}
                className="hdr-mega-img"
                style={{width:"100%",height:"190px",objectFit:"cover",objectPosition:"center 30%",display:"block"}}
              />
            ) : (
              <div className="hdr-mega-img-ph">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                <span>{active.preview.imgPlaceholder}</span>
              </div>
            )}
            <div className="hdr-mega-img-overlay" aria-hidden="true" />
          </div>
          <div className="hdr-mega-content">
            <p className="hdr-mega-preview-tag">Service</p>
            <h3 className="hdr-mega-preview-title">{active.preview.title}</h3>
            <p className="hdr-mega-preview-body">{active.preview.body}</p>
            <div className="hdr-mega-preview-stat">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
              {active.preview.stat}
            </div>
            <Link href={active.href} className="hdr-mega-preview-btn" onClick={onClose}>
              Learn more about {active.label} →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─── Specialties dropdown (simple list) ────────────────── */
function SpecialtiesDropdown({ onClose }) {
  return (
    <div className="hdr-drop" role="menu">
      <div className="hdr-drop-inner">
        <ul className="hdr-drop-list" role="none">
          {SPECIALTIES.map(({ label, href, desc }) => (
            <li key={href} role="none">
              <Link href={href} className="hdr-drop-item" role="menuitem" onClick={onClose}>
                <span className="hdr-drop-label">{label}</span>
                {desc && <span className="hdr-drop-desc">{desc}</span>}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hdr-drop-feat">
          <div className="hdr-drop-feat-tag">Explore</div>
          <div className="hdr-drop-feat-title">All Specialties</div>
          <p className="hdr-drop-feat-desc">Coding and billing configured for your specialty — cardiology, dermatology, oncology, and more.</p>
          <Link href="/specialties/" className="hdr-drop-feat-cta" onClick={onClose}>
            View all specialties →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Logo ───────────────────────────────────────────────── */

/* ─── Main Header ────────────────────────────────────────── */
export default function Header() {
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [activeMenu,   setActiveMenu]   = useState(null);
  const [mobileExpand, setMobileExpand] = useState(null);
  const hoverTimer = useRef(null);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1020) { setMobileOpen(false); setMobileExpand(null); } };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
  }, [mobileOpen]);

  const closeAll = () => { setMobileOpen(false); setMobileExpand(null); setActiveMenu(null); };

  const onEnter = (label) => { clearTimeout(hoverTimer.current); setActiveMenu(label); };
  const onLeave = () => { hoverTimer.current = setTimeout(() => setActiveMenu(null), 160); };

  return (
    <header className="hdr">
      <div className="hdr-inner">

        {/* Logo */}
        <Link className="hdr-logo" href="/" onClick={closeAll} aria-label="Medbilling RCM home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-dark.png" alt="Medbilling RCM" className="hdr-logo-img" />
        </Link>

        {/* Desktop nav */}
        <nav className="hdr-nav" aria-label="Primary navigation">
          {NAV.map((item) => {
            const hasDrop  = Boolean(item.dropdown);
            const isActive = activeMenu === item.label;
            return (
              <div
                key={item.label}
                className={`hdr-nav-item${hasDrop ? " hdr-has-drop" : ""}${isActive ? " hdr-active" : ""}`}
                onMouseEnter={hasDrop ? () => onEnter(item.label) : undefined}
                onMouseLeave={hasDrop ? onLeave : undefined}
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
                {hasDrop && isActive && item.dropdown === "services" && (
                  <ServicesMegaMenu onClose={closeAll} />
                )}
                {hasDrop && isActive && item.dropdown === "specialties" && (
                  <SpecialtiesDropdown onClose={closeAll} />
                )}
              </div>
            );
          })}
        </nav>

        <Link className="hdr-cta" href="/#assessment" onClick={closeAll}>
          Get a Free Assessment
        </Link>

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
            const subItems = item.dropdown === "services" ? SERVICES : item.dropdown === "specialties" ? SPECIALTIES : [];
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
                        {subItems.map(({ label, href }) => (
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

      {mobileOpen && (
        <div className="hdr-backdrop" aria-hidden="true" onClick={closeAll} />
      )}
    </header>
  );
}
