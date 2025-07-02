import { Cta, Hero, ServicesGrid, Stats } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Property Kraft's comprehensive range of property and facility management services, including cleaning, security, maintenance, landscaping, and more for residential and commercial properties.",
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
