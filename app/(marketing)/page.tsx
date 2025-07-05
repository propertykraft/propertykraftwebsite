import {
  Hero,
  AboutPreview,
  CEOQuote,
  RentGuarantee,
  ServicesPreview,
} from "./_components";
import { FAQSection } from "@/components/faq-section";
import { faqData } from "@/app/faq/_components";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <RentGuarantee />
      <CEOQuote />
      <FAQSection
        faqs={faqData.slice(0, 6)}
        maxItems={6}
        title="Common Questions"
        subtitle="Get quick answers to frequently asked questions about our property management services"
      />
    </main>
  );
}
