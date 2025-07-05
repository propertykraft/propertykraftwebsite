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

export const metadata: Metadata = {
  title: "Our Mission, Vision & Team",
  description:
    "Discover Property Kraft's mission, vision, and the dedicated team behind our success. Learn how we deliver trusted property and facility management solutions for residential and commercial clients across Africa.",
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
