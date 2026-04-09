import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://meridianstonesearch.com"),
  title: {
    default: "Meridian Stone Search | Renewable Energy Executive Search",
    template: "%s | Meridian Stone Search",
  },
  description:
    "Boutique executive search for renewable energy, battery storage, solar, EPC, and infrastructure platforms. Meridian Stone Search partners with developers, EPCs, and investors to build high-performing teams.",
  icons: {
    icon: "/Meridian Stone Search logo.png",
    shortcut: "/Meridian Stone Search logo.png",
    apple: "/Meridian Stone Search logo.png",
  },
  openGraph: {
    title: "Meridian Stone Search | Renewable Energy Executive Search",
    description:
      "Boutique executive search for renewable energy, battery storage, solar, EPC, and infrastructure platforms.",
    url: "https://meridianstonesearch.com",
    siteName: "Meridian Stone Search",
    images: [
      {
        url: "/Meridian Stone Search logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "7066FU3MHwCJjahjcTFWmlauqigrkgipup6quE9JndY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <SiteFooter />
        <Analytics />
        <Script
          id="vtag-ai-js"
          strategy="afterInteractive"
          src="https://r2.leadsy.ai/tag.js"
          data-pid="1cMdga9t1VWMy3tqM"
          data-version="062024"
        />
      </body>
    </html>
  );
}
