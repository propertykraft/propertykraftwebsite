import { Metadata } from "next";
import { Suspense } from "react";

import { Hero, MainComponent } from "./_components";

export const metadata: Metadata = {
  title: "Legal & Privacy Information",
  description:
    "Review Property Kraft's legal, privacy, and data protection policies. Learn how we safeguard your information and ensure compliance in all our property management operations.",
};

export default function LegalPage() {
  return (
    <Suspense fallback="Please wait...">
      <main className="min-h-screen bg-gray-50">
        <Hero />
        <MainComponent />
      </main>
    </Suspense>
  );
}
