import "./fte.css";

export const metadata = {
  title:       "Healthcare FTE Outsourcing Services | Medbilling RCM",
  description: "Dedicated healthcare FTE outsourcing for practices, hospitals, and health systems. HIPAA-compliant virtual staff deployed in 5-10 business days. Free assessment.",
  alternates:  { canonical: "https://medbillingrcm.com/services/healthcare-fte-outsourcing/" },
  openGraph: {
    title:       "Healthcare FTE Outsourcing | Virtual Staff | Medbilling RCM",
    description: "Dedicated healthcare virtual staff for billing, coding, prior auth, VMAs, and front-office. HIPAA + BAA compliant. 5-10 day deployment.",
    url:         "https://medbillingrcm.com/services/healthcare-fte-outsourcing/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
  twitter: { card: "summary_large_image" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://medbillingrcm.com/services/healthcare-fte-outsourcing/#service",
      "serviceType": "Healthcare FTE Outsourcing Services",
      "provider": {
        "@type": "Organization", "name": "Medbilling RCM", "url": "https://medbillingrcm.com", "telephone": "+1-888-551-2526",
        "address": [
          { "@type": "PostalAddress", "streetAddress": "8907 Creeks Gate Ct", "addressLocality": "Richmond", "addressRegion": "TX", "postalCode": "77407", "addressCountry": "US" },
          { "@type": "PostalAddress", "streetAddress": "7 1st St", "addressLocality": "Rosedale", "addressRegion": "NY", "postalCode": "11422", "addressCountry": "US" }
        ]
      },
      "areaServed": { "@type": "Country", "name": "United States" },
      "description": "Dedicated healthcare FTE outsourcing services for physician practices, hospitals, and health systems. HIPAA-compliant virtual staff for medical billing, coding, prior authorization, virtual medical assistants, virtual scribes, and front-office support. Deployed in 5-10 business days.",
      "url": "https://medbillingrcm.com/services/healthcare-fte-outsourcing/"
    },
    {
      "@type": "FAQPage",
      "@id": "https://medbillingrcm.com/services/healthcare-fte-outsourcing/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is healthcare FTE outsourcing?", "acceptedAnswer": { "@type": "Answer", "text": "Healthcare FTE outsourcing and healthcare BPO services provide your practice with dedicated, full-time professionals who work exclusively on your accounts rather than being shared across a pool of clients. Unlike traditional BPO, an FTE works inside your EHR, follows your SOPs, and is a direct extension of your team. The model eliminates recruiting, benefits, payroll taxes, and training overhead while maintaining the consistency of a named staff member who knows your practice." } },
        { "@type": "Question", "name": "What is the difference between a dedicated FTE and shared BPO outsourcing?", "acceptedAnswer": { "@type": "Answer", "text": "A dedicated FTE works exclusively for your practice, 40 hours per week, inside your systems and under your management. Shared BPO assigns work from multiple clients to a pool of agents, prioritizing throughput over practice-specific familiarity. The quality gap shows up in denial rates, registration accuracy, and the time it takes to resolve exceptions, because a shared agent has no institutional knowledge of your practice." } },
        { "@type": "Question", "name": "How much does healthcare FTE outsourcing cost?", "acceptedAnswer": { "@type": "Answer", "text": "Fully loaded in-house medical admin staff costs $61,000 to $74,000 per year when salary, benefits, payroll taxes, recruiting, and training are included. Dedicated FTE outsourcing typically saves $29,000 to $45,000 per role per year at comparable competency levels. For a practice replacing two front-desk roles and one prior auth coordinator, annual savings typically exceed $90,000." } },
        { "@type": "Question", "name": "How quickly can a healthcare FTE be deployed?", "acceptedAnswer": { "@type": "Answer", "text": "Most placements deploy within 5 to 10 business days. Because staff are pre-vetted and trained on major EHR and billing platforms, orientation and ramp-up time are minimal. That compares to 6 to 10 weeks for a standard in-house hire from posting to productivity." } },
        { "@type": "Question", "name": "Is outsourcing healthcare administrative staff HIPAA-compliant?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, when the vendor operates under a signed Business Associate Agreement and maintains documented safeguards for protected health information. Medbilling RCM signs a BAA with every client before deployment. Staff access your systems through HIPAA-compliant virtual desktop environments with full audit logging. A BAA is a legal requirement under HIPAA for any third party that handles protected health information on your behalf." } },
        { "@type": "Question", "name": "What healthcare services can be outsourced through the FTE model?", "acceptedAnswer": { "@type": "Answer", "text": "Any non-clinical administrative function. Revenue cycle roles (billing, coding, prior authorization, eligibility verification, AR follow-up, denial management), clinical support roles (virtual medical assistants, virtual scribes, prescription refill coordinators), and front-office roles (patient scheduling, inbound registration, outbound recall campaigns). Clinical care and medical decision-making remain with licensed in-house staff." } },
        { "@type": "Question", "name": "What happens if an FTE takes leave or leaves the role?", "acceptedAnswer": { "@type": "Answer", "text": "We provide a zero-downtime replacement guarantee. In the event of scheduled leave or unexpected absence, a cross-trained backup specialist steps in under supervisor guidance. If a staff member leaves the role permanently, a replacement is placed and onboarded without workflow disruption or additional recruiting cost to the practice." } },
        { "@type": "Question", "name": "How do I get started?", "acceptedAnswer": { "@type": "Answer", "text": "Request a free revenue assessment. We review your current staffing structure, workflow bottlenecks, volume requirements, and EHR environment, then deliver a written staffing recommendation with projected cost savings. No obligation. You keep the analysis whether or not you work with us." } }
      ]
    }
  ]
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://medbillingrcm.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://medbillingrcm.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Healthcare FTE Outsourcing",
      "item": "https://medbillingrcm.com/services/healthcare-fte-outsourcing/"
    }
  ]
};

export default function FTELayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
