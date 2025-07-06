"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import Link from "next/link";

import { faqData, faqCategories } from "./data";
import { Button } from "@/components/ui/button";

export function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openItem, setOpenItem] = useState<number | null>(null);

  const filteredFAQs =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((faq) => faq.category === selectedCategory);

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-orange-50/50 text-gray-700 hover:bg-orange-50"
                }`}
                aria-label="FAQ category"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="shadow-sm rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left bg-orange-50/10 hover:bg-orange-50 transition-colors flex justify-between items-center"
                  aria-label="FAQ item"
                >
                  <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openItem === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openItem === index && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Get in touch with us for personalized
              assistance.
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="group bg-orange-500 text-white hover:bg-orange-600 hover:text-white"
                aria-label="Contact us"
              >
                <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
