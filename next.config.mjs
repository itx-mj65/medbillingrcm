/** @type {import('next').NextConfig} */
const nextConfig = {

  /* ── Images ────────────────────────────────────────────── */
  images: {
    formats:        ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "medbillingrcm.com" }],
    deviceSizes:    [390, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes:     [64, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  /* ── Output & Compression ──────────────────────────────── */
  compress:         true,
  poweredByHeader:  false,

  /* ── Experimental performance flags ───────────────────── */
  experimental: {
    optimizeCss:           true,   // minify + tree-shake CSS
    optimizePackageImports: ["next/font"],
  },

  /* ── Bundle analyser (comment out for prod) ────────────── */
  // Run: ANALYZE=true npm run build
  ...(process.env.ANALYZE === "true"
    ? { experimental: { bundleAnalyzer: { enabled: true } } }
    : {}),

  /* ── Security + cache headers ──────────────────────────── */
  async headers() {
    return [
      {
        // HTML pages — no-store so Next.js soft nav works perfectly
        source: "/((?!_next/static|_next/image|favicon|.*\\.(?:webp|png|jpg|jpeg|svg|ico|woff2|js|css)).*)",
        headers: [
          { key: "X-Content-Type-Options",  value: "nosniff" },
          { key: "X-Frame-Options",         value: "SAMEORIGIN" },
          { key: "X-XSS-Protection",        value: "1; mode=block" },
          { key: "Referrer-Policy",         value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",      value: "camera=(), microphone=(), geolocation=()" },
          // Allow prefetch/prerender for instant navigation
          { key: "Cache-Control",           value: "public, max-age=0, must-revalidate" },
        ],
      },
      {
        // Static assets — immutable cache for 1 year
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Images & fonts — long cache
        source: "/(.*)\\.(webp|avif|png|jpg|jpeg|svg|ico|woff2|woff|ttf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
