import Image from "next/image";
import Link from "next/link";

/**
 * PageHero — shared hero for ALL service pages.
 * Props: eyebrow, heading, intro, note, cta, ctaAlt, ctaAltHref,
 *        badge, image, imageAlt, imageW, imageH, heroPlaceholder
 *
 * heroPlaceholder = { title, spec, prompt }
 *   Pass when no real image exists yet. Shows a visible dashed box
 *   in the right column only. Remove when adding real image prop.
 */
export default function PageHero({
  eyebrow,
  heading,
  intro,
  note,
  cta           = "Get a Free Revenue Assessment",
  ctaAlt,
  ctaAltHref    = "#scope",
  badge,
  image,
  imageAlt      = "",
  imageW        = 1536,
  imageH        = 1024,
  heroPlaceholder = null,
}) {
  return (
    <section className="pg-hero" aria-labelledby="pg-hero-h1">
      <div className="pg-hero-inner">

        {/* ── Left: copy column ──────────────────────────── */}
        <div className="pg-hero-copy">
          {eyebrow && <p className="pg-hero-ew reveal">{eyebrow}</p>}
          <h1 className="pg-hero-h1 reveal" id="pg-hero-h1">{heading}</h1>

          {/* Mobile image — hidden on desktop via CSS, shown between H1 and intro */}
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

          <p className="pg-hero-intro reveal">{intro}</p>

          <div className="pg-hero-actions reveal">
            <Link href="#assessment" className="pg-btn pg-btn--gold">{cta}</Link>
            {ctaAlt && (
              <Link href={ctaAltHref} className="pg-btn pg-btn--ghost">{ctaAlt}</Link>
            )}
          </div>

          {note && <p className="pg-hero-note reveal">{note}</p>}
        </div>

        {/* ── Right: image column ─────────────────────────
            Real image: shown on desktop, hidden on mobile (CSS handles it)
            Placeholder: shown only when no real image exists
        ──────────────────────────────────────────────── */}
        {image ? (
          <div className="pg-hero-img pg-hero-img--desk" aria-hidden="true">
            <Image
              src={image} alt={imageAlt}
              width={imageW} height={imageH}
              priority quality={85}
              style={{ objectFit:"cover", objectPosition:"52% center", width:"100%", height:"100%" }}
            />
            {badge && <span className="pg-hero-badge">{badge}</span>}
          </div>
        ) : heroPlaceholder ? (
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
        ) : null}

      </div>
    </section>
  );
}
