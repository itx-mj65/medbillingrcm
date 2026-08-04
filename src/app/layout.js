import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  metadataBase: new URL("https://medbillingrcm.com"),
  title: "Medical Billing Services & RCM Company | Medbilling RCM",
  description:
    "Outsource medical billing to a partner measuring clean claim rate at the payer, not the clearinghouse. 97% first-pass. 14-day onboarding. Free assessment.",
  keywords: ["medical billing services","revenue cycle management","RCM","healthcare billing","claim management","medical coding","denial management"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medbillingrcm.com",
    siteName: "Medbilling RCM",
    title: "Medical Billing Services That Engineer the Revenue System Behind Your Practice",
    description: "Revenue cycle infrastructure for physician practices, hospitals, and surgery centers across 50+ states.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Medbilling RCM — Revenue Cycle Management" }],
  },
  twitter: { card: "summary_large_image", title: "Medical Billing Services & RCM Company | Medbilling RCM" },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#1a214f", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
