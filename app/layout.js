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
  title: "Medbilling RCM | Executive Editorial Homepage",
  description:
    "Medbilling RCM provides medical billing and management services for physician practices, hospitals, and ambulatory surgery centers across all 50 U.S. states.",
  keywords: [
    "medical billing services",
    "revenue cycle management",
    "RCM",
    "healthcare billing",
    "denial management",
    "medical coding",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medbillingrcm.com",
    siteName: "Medbilling RCM",
    title: "Medical Billing Services That Engineer the Revenue System Behind Your Practice",
    description:
      "Revenue cycle infrastructure for physician practices, hospitals, and ambulatory surgery centers across all 50 U.S. states.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#1a214f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
