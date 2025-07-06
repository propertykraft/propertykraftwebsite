import type { Metadata } from "next";

import { faqData, FAQSchema } from "./_components";
import { BASE_URL } from "@/lib/constants";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Get answers to common questions about Property Kraft Africa's property and facility management services. Learn about our processes, pricing, and how we can help manage your properties.",
  keywords: [
    "FAQ",
    "frequently asked questions",
    "property management questions",
    "facility management FAQ",
    "Property Kraft questions",
    "property management services",
    "facility management services",
    "property management Lagos",
    "facility management Nigeria",
  ],
  openGraph: {
    title: "Frequently Asked Questions - Property Kraft Africa",
    description:
      "Get answers to common questions about Property Kraft Africa's property and facility management services.",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-faq.jpg`,
        width: 1200,
        height: 630,
        alt: "Q&A",
        type: "image/jpg",
      },
    ],
    url: `${BASE_URL}/faq`,
  },
  ...createCanonicalMetadata("faq"),
};

export default function FAQLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FAQSchema faqs={faqData} />
      {children}
    </>
  );
}
