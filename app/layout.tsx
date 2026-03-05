import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Meridian Stone Search | Renewable Energy Executive Search",
  description: "Boutique executive search firm specializing in renewable energy, solar, storage, and EPC leadership hiring.",
  metadataBase: new URL('https://meridianstonesearch.com'), 
  icons: {
    icon: "/Meridian Stone Search logo.png",
    shortcut: "/Meridian Stone Search logo.png",
    apple: "/Meridian Stone Search logo.png",
  },
  openGraph: {
    title: "Meridian Stone Search",
    description: "Boutique Executive Search for Renewable Energy & Infrastructure",
    url: 'https://meridianstonesearch.com',
    siteName: 'Meridian Stone Search',
    images: [{ url: '/Meridian Stone Search logo.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
