import { Poppins, Montserrat } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

/* ── Brand Fonts (Brand Book v1.0, Page 11 & 20) ── */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

/* ── SEO Metadata (Next.js 16 Metadata API) ── */
export const metadata = {
  metadataBase: new URL("https://medbillingrcm.com"),
  title: {
    default: "Medbilling RCM — Revenue Cycle Management",
    template: "%s | Medbilling RCM",
  },
  description:
    "Medical billing services that engineer the revenue system behind your practice. Experienced specialists, disciplined workflows, and practical automation.",
  keywords: [
    "medical billing services",
    "revenue cycle management",
    "RCM",
    "healthcare billing",
    "claim management",
    "medical coding",
    "denial management",
    "healthcare revenue",
  ],
  authors: [{ name: "Medbilling RCM" }],
  creator: "Medbilling RCM",
  publisher: "Medbilling RCM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medbillingrcm.com",
    siteName: "Medbilling RCM",
    title: "Medbilling RCM — Revenue Cycle Management",
    description:
      "Medical billing services that engineer the revenue system behind your practice. Visibility, control, and measurable recovery.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medbilling RCM — Revenue Cycle Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medbilling RCM — Revenue Cycle Management",
    description:
      "Medical billing services that engineer the revenue system behind your practice.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ── Viewport Configuration ── */
export const viewport = {
  themeColor: "#1a214f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
