import {
  Hero,
  AboutPreview,
  CtaSection,
  LiztPreview,
  ServicesPreview,
} from "./_components";
import { FAQSection } from "@/components/faq-section";

const homepageFaqs = [
  {
    question: "What does Property Kraft actually handle for me?",
    answer:
      "We manage tenant onboarding, lease documentation, rent coordination, renewals, maintenance oversight, and day-to-day property administration — so you don't have to manage it yourself.",
  },
  {
    question: "Do I still have control over my property?",
    answer:
      "Yes. You remain fully informed and in control. We provide structured updates, clear records, and transparent communication while handling the operational work on your behalf.",
  },
  {
    question: "How do you ensure rent is paid on time?",
    answer:
      "We use structured reminders, clear documentation, and consistent follow-up processes to reduce delays and keep rent collection organized.",
  },
  {
    question: "How do you screen and onboard tenants?",
    answer:
      "We guide new tenants through a structured onboarding and KYC process, review documentation, and manage offer letters and agreements before tenancy begins.",
  },
  {
    question: "How are maintenance issues handled?",
    answer:
      "Maintenance requests are documented and tracked to ensure they are acknowledged, assigned, and resolved without being lost in informal communication.",
  },
  {
    question:
      "Is Property Kraft suitable for landlords with only one or two properties?",
    answer:
      "Yes. Whether you manage one property or a growing portfolio, our structured approach helps you stay organized and reduce stress.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <LiztPreview />
      <FAQSection faqs={homepageFaqs} />
      <CtaSection />
    </main>
  );
}
