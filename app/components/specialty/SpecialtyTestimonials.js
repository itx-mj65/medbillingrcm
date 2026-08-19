/**
 * SpecialtyTestimonials — 4 client quotes
 * Reusable for ALL specialty pages — same testimonials, same design.
 */
export default function SpecialtyTestimonials() {
  const reviews = [
    {
      q: "Med Billing RCM has been a game changer for my practice. Since teaming up, we've seen a significant improvement in collections and a smoother overall process. The team is highly responsive and transparent.",
      name: "Dr. Sarah Kin",
      practice: "Family Medicine Practice",
    },
    {
      q: "Their streamlined processes have modernized our system and increased our monthly revenue. We particularly appreciate the transparency and regular updates on our claims status.",
      name: "Dr. Wayne Bonner",
      practice: "Medical Practice",
    },
    {
      q: "Their attention to detail and commitment to HIPAA compliance gives us confidence. They handle everything from AR management to claims submissions with professionalism and efficiency.",
      name: "Dr. Nick Toriani",
      practice: "Specialty Practice",
    },
    {
      q: "I've been extremely satisfied with the services provided by Med Billing RCM. Their team is highly responsive and has resolved many billing issues that were causing headaches for our practice. Their ability to handle the intricacies of dermatology billing has saved us time and money.",
      name: "Dr. Jennifer Lee",
      practice: "Dermatology Practice",
    },
  ];

  return (
    <section className="sp-sec sp-sec--ivory sp-testimonials">
      <div className="sp-wrap">
        <p className="sp-ew">Client Outcomes</p>
        <h2>What Healthcare Leaders Say</h2>
        <p className="sp-testimonials-sub">Feedback that reflects our commitment to delivering measurable, transparent results.</p>

        <div className="sp-reviews-grid">
          {reviews.map(({ q, name, practice }) => (
            <div className="sp-review-card" key={name}>
              <div className="sp-review-quote" aria-hidden="true">&ldquo;</div>
              <p className="sp-review-text">{q}</p>
              <div className="sp-review-author">
                <div className="sp-review-avatar" aria-hidden="true">
                  {name.split(" ").pop()[0]}
                </div>
                <div>
                  <div className="sp-review-name">{name}</div>
                  <div className="sp-review-practice">{practice}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
