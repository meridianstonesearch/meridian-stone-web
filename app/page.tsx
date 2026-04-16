import HomePageClient from "./HomePageClient";

export const metadata = {
  title: "Renewable Energy Executive Search",
  description:
    "Boutique executive search for renewable energy, battery storage, solar, EPC, development, and finance platforms.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Renewable Energy Executive Search | Meridian Stone Search",
    description:
      "Boutique executive search for renewable energy, battery storage, solar, EPC, development, and finance platforms.",
    url: "https://meridianstonesearch.com",
  },
};

export default function Page() {
  return <HomePageClient />;
}
