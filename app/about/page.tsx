import {
  AchievementsPreview,
  BoardOfDirectors,
  FoundersMessage,
  Hero,
  VisionAndMissionPreview,
} from "./_components";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Hero />
      <AchievementsPreview />
      <VisionAndMissionPreview />
      <FoundersMessage />
      <BoardOfDirectors />
    </main>
  );
}
