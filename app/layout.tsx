import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Single modern, corporate, premium typeface for the whole site.
// Headings use weights 700–800, body copy uses 400–500 (see tailwind.config.ts).
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rabamfitness.com"),
  title: "RABAM FITNESS CLUB | Akhisar Premium Spor Salonu",
  description:
    "RABAM FITNESS CLUB — Akhisar'da daha güçlü, daha disiplinli ve en iyi versiyonuna ulaşman için tasarlanmış elit antrenman ortamı. 600+ m² antrenman alanı, pro ekipman ve profesyonel kadro.",
  keywords: [
    "Akhisar spor salonu",
    "Akhisar fitness",
    "Manisa gym",
    "RABAM Fitness Club",
    "personal training Akhisar",
    "powerlifting Akhisar",
  ],
  openGraph: {
    title: "RABAM FITNESS CLUB | Akhisar Premium Spor Salonu",
    description:
      "Akhisar'da daha güçlü, daha disiplinli ve en iyi versiyonuna ulaşman için tasarlanmış elit antrenman ortamı.",
    locale: "tr_TR",
    type: "website",
    siteName: "RABAM FITNESS CLUB",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${manrope.variable} font-body-md text-body-md bg-background text-on-surface antialiased`}
      >
        <Header />
        <main className="w-full bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
