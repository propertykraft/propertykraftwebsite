import { Metadata } from "next";

import {
  AchievementsPreview,
  BoardOfDirectors,
  FoundersMessage,
  Hero,
  VisionAndMissionPreview,
  Leadership,
  TeamMembers,
} from "./_components";
import { BASE_URL } from "@/lib/constants";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Mission, Vision & Team",
  description:
    "Discover Property Kraft's mission, vision, and the dedicated team behind our success. Learn how we deliver trusted property and facility management solutions for residential and commercial clients across Africa.",
  openGraph: {
    title: "Our Mission, Vision & Team - Property Kraft Africa",
    description:
      "Discover Property Kraft's mission, vision, and the dedicated team behind our success. Learn how we deliver trusted property and facility management solutions for residential and commercial clients across Africa.",
    url: `${BASE_URL}/about`,
  },
  ...createCanonicalMetadata("about"),
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Hero />
      <AchievementsPreview />
      <VisionAndMissionPreview />
      <FoundersMessage />
      <BoardOfDirectors />
      <Leadership />
      <TeamMembers />
    </main>
  );
}
