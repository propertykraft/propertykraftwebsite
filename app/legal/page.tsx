import { Metadata } from "next";

import { Hero, MainComponent } from "./_components";

export const metadata: Metadata = {
  title: "Legal & Privacy Information",
  description:
    "Review Property Kraft's legal, privacy, and data protection policies. Learn how we safeguard your information and ensure compliance in all our property management operations.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <MainComponent />
    </main>
  );
}
