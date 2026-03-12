import { Metadata } from "next";

import {
  Hero,
  WhoWeAre,
  WhyWeExist,
  Leadership,
  AdvisoryBoard,
  CoreTeam,
  PhilosophyCta,
} from "./_components";
import { BASE_URL } from "@/lib/constants";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Property Kraft is a property and facility management company that helps landlords and organizations manage buildings with clarity, accountability, and reliable operational oversight.",
  openGraph: {
    title: "About Us - Property Kraft Africa",
    description:
      "Property Kraft is a property and facility management company that helps landlords and organizations manage buildings with clarity, accountability, and reliable operational oversight.",
    url: `${BASE_URL}/about`,
  },
  ...createCanonicalMetadata("about"),
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhoWeAre />
      <WhyWeExist />
      <Leadership />
      <AdvisoryBoard />
      <CoreTeam />
      <PhilosophyCta />
    </main>
  );
}
