import Image from "next/image";
import Link from "next/link";

/**
 * PageHero — Single shared hero component for ALL service pages.
 *
 * Used on:  Hospital Billing, Physician Billing, and every future page.
 * NOT used on homepage (uses its own Hero.js with different layout).
 *
 * Props:
 *   eyebrow    {string}  — small ALL CAPS label
 *   heading    {string}  — H1 text
 *   intro      {string}  — lead paragraph
 *   note       {string}  — italic note below CTA buttons
 *   cta        {string}  — primary button text (href always → #assessment)
 *   ctaAlt     {string}  — optional secondary ghost button text
 *   ctaAltHref {string}  — ghost button href (default #scope)
 *   badge      {string}  — image overlay label (bottom-right of photo)
 *   image      {string}  — /public image path
 *   imageAlt   {string}  — image alt text
 *   imageW     {number}  — intrinsic width (for next/image)
 *   imageH     {number}  — intrinsic height (for next/image)
 */
export default function PageHero({
  eyebrow,
  heading,
  intro,
  note,
  cta       = "Get a Free Revenue Assessment",
  ctaAlt,
  ctaAltHref = "#scope",
  badge,
  image,
  imageAlt  = "",
  imageW    = 1536,
  imageH    = 1024,
  heroPlaceholder = null,  // { title, spec, prompt } — shown when no real image exists
}) {
  return (
    <section className="pg-hero" aria-labelledby="pg-hero-h1">

      {/* ── Copy + Mobile image ──────────────────────────── */}
      <div className="pg-hero-inner">
        <div className="pg-hero-copy">
          {eyebrow && <p className="pg-hero-ew">{eyebrow}</p>}
          <h1 className="pg-hero-h1" id="pg-hero-h1">{heading}</h1>

          {/* Mobile-only image (sits between H1 and intro on small screens) */}
          {image && (
            <div className="pg-hero-img pg-hero-img--mob" aria-hidden="true">
              <Image
                src={image} alt="" width={imageW} height={imageH}
                priority quality={85}
                style={{ objectFit:"cover", objectPosition:"52% center", width:"100%", height:"100%" }}
              />
              {badge && <span className="pg-hero-badge">{badge}</span>}
            </div>
          )}
          {!image && heroPlaceholder && (
            <div className="pg-hero-img pg-hero-img--mob pg-hero-placeholder" aria-label="Image placeholder">
              <div className="pg-hero-ph-inner">
                <div className="pg-hero-ph-icon">📷</div>
                <div className="pg-hero-ph-title">{heroPlaceholder.title}</div>
                <div className="pg-hero-ph-spec">{heroPlaceholder.spec}</div>
              </div>
              {badge && <span className="pg-hero-badge">{badge}</span>}
            </div>
          )}

          <p className="pg-hero-intro">{intro}</p>

          <div className="pg-hero-actions">
            <Link href="#assessment" className="pg-btn pg-btn--gold">{cta}</Link>
            {ctaAlt && (
              <Link href={ctaAltHref} className="pg-btn pg-btn--ghost">{ctaAlt}</Link>
            )}
          </div>

          {note && <p className="pg-hero-note">{note}</p>}
        </div>

        {/* ── Desktop image (right column) ────────────────── */}
        {image && (
          <div className="pg-hero-img pg-hero-img--desk" aria-hidden="true">
            <Image
              src={image} alt={imageAlt}
              width={imageW} height={imageH}
              priority quality={85}
              style={{ objectFit:"cover", objectPosition:"52% center", width:"100%", height:"100%" }}
            />
            {badge && <span className="pg-hero-badge">{badge}</span>}
          </div>
        )}
        {/* ── Hero image placeholder (shown when no real image yet) ── */}
        {!image && heroPlaceholder && (
          <div className="pg-hero-img pg-hero-img--desk pg-hero-placeholder" aria-label="Image placeholder">
            <div className="pg-hero-ph-inner">
              <div className="pg-hero-ph-icon">📷</div>
              <div className="pg-hero-ph-title">{heroPlaceholder.title}</div>
              <div className="pg-hero-ph-spec">{heroPlaceholder.spec}</div>
              <div className="pg-hero-ph-prompt">
                <strong>AI prompt:</strong> {heroPlaceholder.prompt}
              </div>
            </div>
            {badge && <span className="pg-hero-badge">{badge}</span>}
          </div>
        )}
      </div>

    </section>
  );
}
