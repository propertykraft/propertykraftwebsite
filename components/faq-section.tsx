"use client";

import { useState } from "react";
import { FAQItem } from "@/app/faq/_components";
import { ChevronDown } from "lucide-react";

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  maxItems?: number;
  showViewAll?: boolean;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about our services",
  faqs,
  maxItems,
  showViewAll = true,
}: FAQSectionProps) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const displayedFAQs = maxItems ? faqs.slice(0, maxItems) : faqs;

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {displayedFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 transition-transform ${
                      openItem === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openItem === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {showViewAll && maxItems && faqs.length > maxItems && (
            <div className="text-center mt-8">
              <a
                href="/faq"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Questions
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
