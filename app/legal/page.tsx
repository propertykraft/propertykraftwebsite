import { Metadata } from "next";
import { Suspense } from "react";

import { Hero, MainComponent } from "./_components";
import { BASE_URL } from "@/lib/constants";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Legal & Privacy Information",
  description:
    "Review Property Kraft's legal, privacy, and data protection policies. Learn how we safeguard your information and ensure compliance in all our property management operations.",
  openGraph: {
    title: "Frequently Asked Questions - Property Kraft Africa",
    description:
      "Get answers to common questions about Property Kraft Africa's property and facility management services.",

    url: `${BASE_URL}/legal`,
  },
  ...createCanonicalMetadata("legal"),
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
