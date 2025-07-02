import { ContactForm, Hero, ContactMethods } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Reach out to Property Kraft for inquiries, support, or partnership opportunities. Our team is ready to assist you with all your property and facility management needs.",
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
