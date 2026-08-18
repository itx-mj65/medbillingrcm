import "./cred.css";

export const metadata = {
  title:       "Medical Credentialing Services | Medbilling RCM",
  description: "Medical credentialing company offering physician and provider credentialing, CAQH setup, PECOS enrollment, and insurance credentialing. Free credentialing assessment.",
  alternates:  { canonical: "https://medbillingrcm.com/services/medical-credentialing/" },
  openGraph: {
    title:       "Medical Credentialing Services | Physician & Provider Credentialing | Medbilling RCM",
    description: "Physician credentialing, provider enrollment, CAQH maintenance, and insurance credentialing integrated with your billing workflow. Free assessment.",
    url:         "https://medbillingrcm.com/services/medical-credentialing/",
    siteName:    "Medbilling RCM",
    type:        "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://medbillingrcm.com/services/medical-credentialing/#service",
      "serviceType": "Medical Credentialing Services",
      "provider": {
        "@type": "Organization", "name": "Medbilling RCM", "url": "https://medbillingrcm.com", "telephone": "+1-888-551-2526",
        "address": [
          { "@type": "PostalAddress", "streetAddress": "8907 Creeks Gate Ct", "addressLocality": "Richmond", "addressRegion": "TX", "postalCode": "77407", "addressCountry": "US" },
          { "@type": "PostalAddress", "streetAddress": "7 1st St", "addressLocality": "Rosedale", "addressRegion": "NY", "postalCode": "11422", "addressCountry": "US" }
        ]
      },
      "areaServed": { "@type": "Country", "name": "United States" },
      "description": "Physician credentialing services, provider credentialing services, and insurance credentialing services integrated with your billing workflow. CAQH setup, PECOS enrollment, commercial payer credentialing, and re-credentialing management.",
      "url": "https://medbillingrcm.com/services/medical-credentialing/"
    },
    {
      "@type": "FAQPage",
      "@id": "https://medbillingrcm.com/services/medical-credentialing/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is medical credentialing?", "acceptedAnswer": { "@type": "Answer", "text": "Medical credentialing is the process by which payers and healthcare facilities verify a provider's qualifications, licenses, board certifications, education, and professional history. It is the required step before a provider can bill insurance as an in-network participant. Without completed credentialing, claims submitted under that provider's NPI are denied." } },
        { "@type": "Question", "name": "What is the difference between provider credentialing and provider enrollment?", "acceptedAnswer": { "@type": "Answer", "text": "Credentialing is the verification phase: the payer confirms the provider is qualified. Provider enrollment is the contracting phase: the payer assigns a provider number and activates billing rights. Both must be complete before a provider can bill in-network. Most people use the terms interchangeably, but they are sequential steps, not the same step." } },
        { "@type": "Question", "name": "How long does medical credentialing take?", "acceptedAnswer": { "@type": "Answer", "text": "Medicare enrollment through PECOS takes 15 to 30 days for electronic submissions. Commercial payers typically take 90 to 150 days. Medicaid ranges from 45 to 90 days depending on the state. Delegated networks such as Optum and Carelon can take as long or longer than standard commercial plans. A complete, error-free submission with an up-to-date CAQH profile shortens the front end. Incomplete applications add 30 to 60 days." } },
        { "@type": "Question", "name": "What is CAQH and why does it matter?", "acceptedAnswer": { "@type": "Answer", "text": "CAQH ProView is the centralized database most commercial payers use to pull provider credentials. A complete, attested CAQH profile eliminates duplicate paperwork across payers. The profile must be re-attested every 120 days. A lapsed profile stops all connected commercial enrollments until re-attestation is complete. Providers also must explicitly authorize each payer to access the profile, and forgetting this step delays enrollment even when the profile is current." } },
        { "@type": "Question", "name": "What documents are required for credentialing?", "acceptedAnswer": { "@type": "Answer", "text": "Core documents include: NPI (active, with correct taxonomy codes), state medical license, DEA registration, board certifications, malpractice insurance face sheet, education and training records, and complete work history with no unexplained gaps. Advanced practice providers also need collaborative agreements and supervising physician attestations. Incomplete applications are the leading cause of processing delays." } },
        { "@type": "Question", "name": "What is re-credentialing and when is it required?", "acceptedAnswer": { "@type": "Answer", "text": "Re-credentialing is the periodic reverification of a provider's credentials after initial enrollment. Medicare requires revalidation every five years. Most commercial payers require re-credentialing every two to three years. NCQA standards effective July 2025 require more frequent monitoring: license checks monthly, exclusion checks every 30 days. Missing a re-credentialing deadline can result in disenrollment from all payers until the process restarts." } },
        { "@type": "Question", "name": "Can a provider see patients before credentialing is complete?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but they cannot bill as an in-network provider. Claims submitted before a contract's effective date are denied. Commercial payers do not adjust effective dates retroactively. Once those claims are denied, they cannot be recovered. This is why start date alignment between credentialing and billing is critical." } },
        { "@type": "Question", "name": "How do I get started?", "acceptedAnswer": { "@type": "Answer", "text": "Request a free credentialing assessment. We review your current provider roster, open enrollments, CAQH profile status, expiring credentials, and payer mix, then deliver a written report with findings and a timeline. No obligation. You keep the report whether or not you work with us." } }
      ]
    }
  ]
};

export default function CredentialingLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  );
}
