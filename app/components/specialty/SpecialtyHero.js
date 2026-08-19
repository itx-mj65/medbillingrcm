"use client";
import Link from "next/link";

/**
 * SpecialtyHero — reusable hero for ALL specialty pages
 *
 * Props:
 *  eyebrow      string   — "Specialty Billing Infrastructure"
 *  heading      string   — "Rheumatology Billing Services"
 *  intro        string   — one paragraph intro
 *  cta          string   — primary CTA label
 *  ctaHref      string   — primary CTA href
 *  phone        string   — phone number
 *  stats        array    — [{ num, label }] up to 4 items
 *  badge        string   — top badge label e.g. "AAPC Certified · 50 States"
 */
export default function SpecialtyHero({
  eyebrow   = "Specialty Billing Infrastructure",
  heading,
  intro,
  cta       = "Schedule Revenue Assessment",
  ctaHref   = "/request-free-audit/",
  phone     = "tel:(888)551-2526",
  stats     = [],
  badge,
}) {
  return (
    <section className="sp-hero" aria-label="Specialty hero">
      <div className="sp-hero-wrap">

        {/* Left content column */}
        <div className="sp-hero-copy">
          {badge && <div className="sp-hero-badge">{badge}</div>}
          <p className="sp-hero-ew">{eyebrow}</p>
          <h1 className="sp-hero-h1">{heading}</h1>
          <p className="sp-hero-intro">{intro}</p>

          <div className="sp-hero-actions">
            <Link href={ctaHref} className="sp-btn sp-btn--primary">{cta}</Link>
            <a href={phone} className="sp-btn sp-btn--ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.22 2 2 0 012.1 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.55-.55a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Right stats panel */}
        {stats.length > 0 && (
          <div className="sp-hero-stats" aria-label="Key performance metrics">
            {stats.map(({ num, label }) => (
              <div className="sp-hero-stat" key={label}>
                <div className="sp-hero-stat-num">{num}</div>
                <div className="sp-hero-stat-lbl">{label}</div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
