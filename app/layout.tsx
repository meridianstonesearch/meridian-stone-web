import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import SiteFooter from "@/components/SiteFooter";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

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

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Meridian Stone Search",
  url: "https://meridianstonesearch.com",
  image: "https://meridianstonesearch.com/Meridian%20Stone%20Search%20logo.png",
  description:
    "Boutique executive search for renewable energy, battery storage, solar, EPC, finance, and infrastructure platforms.",
  areaServed: "United States",
  knowsAbout: [
    "Renewable Energy Executive Search",
    "Battery Energy Storage Recruiting",
    "Solar Recruiting",
    "Development Recruiting",
    "Renewable Energy Finance Recruiting",
    "EPC and Construction Recruiting",
  ],
  sameAs: ["https://www.linkedin.com/in/ian-farber-b73428233/"],
  founder: {
    "@type": "Person",
    name: "Ian Farber",
    jobTitle: "Founder",
    sameAs: ["https://www.linkedin.com/in/ian-farber-b73428233/"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ian Farber",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Meridian Stone Search",
    url: "https://meridianstonesearch.com",
  },
  sameAs: ["https://www.linkedin.com/in/ian-farber-b73428233/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${cormorant.variable}`}
    >
      <body className="antialiased">
        {children}
        <SiteFooter />
        <Analytics />

        <Script
          id="schema-professional-service"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="vtag-ai-js"
          strategy="afterInteractive"
          src="https://r2.leadsy.ai/tag.js"
          data-pid="1cMdga9t1VWMy3tqM"
          data-version="062024"
        />
        <Script
          id="linkedin-insight"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `_linkedin_partner_id = "7866756"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);`,
          }}
        />
        <Script
          id="linkedin-insight-src"
          strategy="afterInteractive"
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
        />
      </body>
    </html>
  );
}
