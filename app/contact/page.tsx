import { Metadata } from "next";

import { Hero, ContactSection } from "./_components";
import { BASE_URL } from "@/lib/constants";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Property Kraft. Send us a message about your property management needs and our team will respond within 1–2 business days.",
  openGraph: {
    title: "Contact Us - Property Kraft Africa",
    description:
      "Get in touch with Property Kraft. Send us a message about your property management needs and our team will respond within 1–2 business days.",
    url: `${BASE_URL}/contact`,
  },
  ...createCanonicalMetadata("contact"),
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ContactSection />
    </main>
  );
}
