"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

import { faqData, faqCategories } from "./data";

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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Category Filters */}
        <div className="mb-12">
          <h2 className="font-semibold text-navy text-[22px] mb-6 text-center">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setOpenItem(null);
                }}
                className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-pk-orange text-white"
                    : "bg-[#f8f9fa] text-pk-text-light hover:bg-[#f1f3f5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-[820px] mx-auto">
          <div className="flex flex-col w-full">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="w-full border-b border-[#E5E7EB]/40"
              >
                <div className="py-9 md:py-10">
                  <div
                    className="flex items-start justify-between gap-6 group cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex-1">
                      <p className="font-normal leading-[1.65] text-[#141513] text-[15px] md:text-[19px] transition-colors duration-200 group-hover:text-pk-orange">
                        {faq.question}
                      </p>
                    </div>
                    <div
                      className="shrink-0 mt-1 transition-transform duration-300"
                      style={{
                        transform:
                          openItem === index
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      {openItem === index ? (
                        <Minus className="w-5 h-5 text-pk-orange" strokeWidth={2} />
                      ) : (
                        <Plus className="w-5 h-5 text-pk-orange" strokeWidth={2} />
                      )}
                    </div>
                  </div>

                  <div
                    className="transition-all duration-400 ease-in-out overflow-hidden"
                    style={{
                      maxHeight: openItem === index ? "500px" : "0",
                      opacity: openItem === index ? 1 : 0,
                      transitionProperty: "max-height, opacity",
                    }}
                  >
                    <div className="pt-5 pr-11">
                      <p className="font-normal leading-[1.7] text-pk-text-light text-[15px] md:text-[17px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-navy rounded-xl px-8 py-12">
            <h3 className="font-semibold text-white text-[24px] md:text-[28px] mb-4">
              Still have questions?
            </h3>
            <p className="font-normal text-white/80 text-[16px] mb-6">
              Our team is here to help. Get in touch for personalized
              assistance.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-pk-orange hover:bg-pk-orange-hover transition-colors text-white px-7 py-3 rounded-lg font-medium text-[15px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
