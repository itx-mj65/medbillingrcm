import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Scripts from "@/components/Scripts";
import { buildMetadata } from "@/app/lib/metadata";

const poppins = Poppins({
  subsets:  ["latin"],
  weight:   ["500", "600", "700"],
  variable: "--font-poppins",
  display:  "swap",
  preload:  true,
});

const montserrat = Montserrat({
  subsets:  ["latin"],
  weight:   ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display:  "swap",
  preload:  true,
});

export const metadata = buildMetadata();

export const viewport = {
  themeColor:   "#1a214f",
  width:        "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
