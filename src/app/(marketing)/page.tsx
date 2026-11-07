import { InspireHome } from "@/components/marketing/inspire-home";
import { siteConfig } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  potentialAction: {
    "@type": "JoinAction",
    name: "Join InspireMe",
    target: `${siteConfig.url}/signup`,
  },
  offers: {
    "@type": "Offer",
    price: "1",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InspireHome />
    </>
  );
}
