import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://datasightuk.com"),
  title: {
    default: "DATASIGHT LTD — Data Science Consultancy",
    template: "%s | DATASIGHT LTD",
  },
  description:
    "DATASIGHT LTD is a UK data science consultancy delivering analytics, research, and strategy to help businesses make better decisions with their data.",
  keywords: [
    "data science consultancy UK",
    "machine learning consulting",
    "Python data engineering",
    "business analytics",
    "data strategy",
    "predictive modelling",
  ],
  authors: [{ name: "DATASIGHT LTD" }],
  creator: "DATASIGHT LTD",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://datasightuk.com",
    siteName: "DATASIGHT LTD",
    title: "DATASIGHT LTD — Data Science Consultancy",
    description:
      "Analytics, research, and strategy that turn your data into decisions.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DATASIGHT LTD — Data Science Consultancy",
    description:
      "Analytics, research, and strategy that turn your data into decisions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
