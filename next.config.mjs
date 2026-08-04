/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "medbillingrcm.com" },
    ],
  },
};

export default nextConfig;
