import { Metadata } from "next";

import { BASE_URL } from "@/lib/constants";
import { Cta, Hero, ServicesGrid, Stats } from "./_components";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Property Kraft's comprehensive range of property and facility management services, including cleaning, security, maintenance, landscaping, and more for residential and commercial properties.",
  openGraph: {
    title: "Frequently Asked Questions - Property Kraft Africa",
    description:
      "Get answers to common questions about Property Kraft Africa's property and facility management services.",

    url: `${BASE_URL}/services`,
  },
  ...createCanonicalMetadata("services"),
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Hero />
      <Stats />
      <ServicesGrid />
      <Cta />
    </main>
  );
}
