export const siteConfig = {
  name:        "Medbilling RCM",
  url:         "https://medbillingrcm.com",
  description: "Medical billing and revenue cycle management for physician practices, hospitals, and ambulatory surgery centers across all 50 U.S. states.",
  phone:       "(888) 551-2526",
  email:       "info@medbillingrcm.com",
  address:     "18003 Sky Park Cir, Irvine, CA 92614",
};

export function buildMetadata({ title, description, path = "/" } = {}) {
  const metaTitle = title
    ? `${title} | Medbilling RCM`
    : "Medbilling RCM | Medical Billing & Revenue Cycle Management";
  return {
    metadataBase:  new URL(siteConfig.url),
    title:         metaTitle,
    description:   description ?? siteConfig.description,
    openGraph: {
      type:        "website",
      locale:      "en_US",
      url:         `${siteConfig.url}${path}`,
      siteName:    siteConfig.name,
      title:       metaTitle,
      description: description ?? siteConfig.description,
    },
    twitter:       { card: "summary_large_image" },
    robots:        { index: true, follow: true },
    alternates:    { canonical: `${siteConfig.url}${path}` },
  };
}
