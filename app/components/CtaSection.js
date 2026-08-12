import Image from "next/image";
import { siteConfig } from "@/app/lib/metadata";

export default function CtaSection() {
  return (
    <section className="cta" id="assessment">
      <div className="cta-grid">
        <div className="cta-media">
          <Image
            src="/cta-strategist.webp"
            alt="Senior revenue cycle strategist conducting a confidential practice assessment"
            fill
            sizes="(max-width:1050px) 100vw, 50vw"
            style={{ objectFit:"cover", objectPosition:"center" }}
            quality={80}
          />
        </div>
        <div className="cta-copy">
          <p className="eyebrow">No sales presentation</p>
          <h2>Your Revenue Assessment Starts Here</h2>
          <p>A 45-minute conversation with a senior RCM strategist. No sales presentation. We review where your revenue cycle stands now, where it is leaking, and what recovery would realistically look like. If the numbers show an opportunity, we build a custom engagement. If they do not, we say so.</p>
          <div className="contact-list">
            <a href={`tel:${siteConfig.phone.replace(/\D/g,"")}`}>Phone: {siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`}>Email: {siteConfig.email}</a>
            <span>Office: {siteConfig.address}</span>
          </div>
          <form className="assessment" id="assessmentForm">
            <label>Full name<input type="text" name="name" autoComplete="name" required /></label>
            <label>Work email<input type="email" name="email" autoComplete="email" required /></label>
            <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
            <label>Annual collections
              <select name="collections" required>
                <option value="">Select range</option>
                <option>$500K–$1M</option>
                <option>$1M–$5M</option>
                <option>$5M–$20M</option>
                <option>$20M+</option>
              </select>
            </label>
            <label className="full">Practice or organization<input type="text" name="organization" autoComplete="organization" /></label>
            <button className="btn" type="submit">Get a Free Revenue Assessment</button>
          </form>
          <div className="success" id="success" role="status" aria-live="polite"></div>
          <p className="fine">Practices billing $1M+ annually. 14-day onboarding. No long-term contract required.</p>
        </div>
      </div>
    </section>
  );
}
