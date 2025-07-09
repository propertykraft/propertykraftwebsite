import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";

import { ContactForm, Hero, ContactMethods } from "./_components";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Reach out to Property Kraft for inquiries, support, or partnership opportunities. Our team is ready to assist you with all your property and facility management needs.",
  openGraph: {
    title: "Get in Touch - Property Kraft Africa",
    description:
      "Reach out to Property Kraft for inquiries, support, or partnership opportunities. Our team is ready to assist you with all your property and facility management needs.",

    url: `${BASE_URL}/contact`,
  },
  ...createCanonicalMetadata("contact"),
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Hero />
      <ContactMethods />
      <ContactForm />
    </main>
  );
}
