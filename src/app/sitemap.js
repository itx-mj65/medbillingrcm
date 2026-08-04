export default function sitemap() {
  const baseUrl = "https://medbillingrcm.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
