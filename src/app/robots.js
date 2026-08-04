export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://medbillingrcm.com/sitemap.xml",
  };
}
