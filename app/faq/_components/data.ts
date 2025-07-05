export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What services does Property Kraft Africa offer?",
    answer:
      "Property Kraft Africa offers comprehensive property and facility management services including cleaning services, security services, maintenance, landscaping, waste management, and 24/7 operational support for both residential and commercial properties.",
    category: "Services",
  },
  {
    question: "Do you provide 24/7 support?",
    answer:
      "Yes, we provide 24/7 operational support and emergency response services. Our team is always available to handle urgent maintenance issues, security concerns, and other property-related emergencies.",
    category: "Support",
  },
  {
    question: "What areas do you serve in Lagos?",
    answer:
      "We primarily serve Lagos, including Lekki, Victoria Island, Ikoyi, and surrounding areas. Our service area covers a 100km radius from our headquarters in Lekki Phase 1.",
    category: "Coverage",
  },
  {
    question: "How do you ensure quality service delivery?",
    answer:
      "We maintain high standards through regular quality audits, trained staff, transparent reporting, and client feedback systems. Our team undergoes continuous training and we use advanced technology for monitoring and communication.",
    category: "Quality",
  },
  {
    question: "Can you manage both residential and commercial properties?",
    answer:
      "Yes, we specialize in managing both residential and commercial properties. Our services are tailored to meet the specific needs of each property type, from single-family homes to large commercial complexes.",
    category: "Services",
  },
  {
    question: "How do I get started with Property Kraft?",
    answer:
      "Getting started is easy! Simply contact us via phone (+234 816 549 0072) or email (hello@propertykraft.africa) for a free consultation. We'll assess your property and create a customized management plan.",
    category: "Getting Started",
  },
  {
    question:
      "What makes Property Kraft different from other property managers?",
    answer:
      "Property Kraft stands out through our end-to-end solutions, operational transparency, client satisfaction focus, and African market expertise. We provide full operational visibility and maximize property value while ensuring seamless service delivery.",
    category: "About Us",
  },
  {
    question: "Do you handle tenant screening and management?",
    answer:
      "Yes, we offer comprehensive tenant screening, lease management, rent collection, and tenant communication services. We ensure smooth landlord-tenant relationships and handle all administrative aspects of property management.",
    category: "Tenant Management",
  },
  {
    question: "What maintenance services do you provide?",
    answer:
      "We provide comprehensive maintenance services including preventive maintenance, emergency repairs, HVAC maintenance, plumbing, electrical work, and general property upkeep. Our team handles both routine maintenance and urgent repairs.",
    category: "Maintenance",
  },
  {
    question: "How do you handle security for managed properties?",
    answer:
      "We provide professional security services including 24/7 security personnel, CCTV monitoring, access control systems, and emergency response protocols. Our security measures are customized to each property's specific needs.",
    category: "Security",
  },
];

export const faqCategories = [
  "All",
  "Services",
  "Support",
  "Coverage",
  "Quality",
  "Getting Started",
  "About Us",
  "Tenant Management",
  "Maintenance",
  "Security",
];
