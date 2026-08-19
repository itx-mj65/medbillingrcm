export default function sitemap() {
  const base = "https://medbillingrcm.com";
  const now  = new Date().toISOString();

  const routes = [
    { url: "/",                                          priority: 1.0,  changeFrequency: "weekly" },
    { url: "/services/",                                 priority: 0.9,  changeFrequency: "weekly" },
    { url: "/services/physician-billing/",               priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/hospital-medical-billing/",        priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/medical-coding/",                  priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/account-receivable-management/",   priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/laboratory-billing/",              priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/coverage-discovery/",              priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/asc-billing/",                     priority: 0.85, changeFrequency: "monthly" },
    { url: "/services/medical-credentialing/",           priority: 0.85, changeFrequency: "monthly" },
    { url: "/specialties/rheumatology-billing-services/",      priority: 0.8,  changeFrequency: "monthly" },
    { url: "/specialties/internal-medicine-billing-service/",  priority: 0.8,  changeFrequency: "monthly" },
    { url: "/services/healthcare-fte-outsourcing/",      priority: 0.85, changeFrequency: "monthly" },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url:              `${base}${url}`,
    lastModified:     now,
    changeFrequency,
    priority,
  }));
}
