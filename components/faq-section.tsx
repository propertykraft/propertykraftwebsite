"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white w-full">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-20 md:py-36">
        <div className="flex flex-col gap-2 items-start w-full">
          {/* Section heading */}
          <div className="max-w-[700px] min-w-0 md:min-w-[360px] w-full mb-4">
            <div className="flex flex-col gap-5 items-start max-w-[800px] w-full">
              <p className="font-medium leading-[1.32] text-pk-orange text-[16px] tracking-[1px] uppercase">
                FAQ
              </p>
              <h2 className="font-semibold leading-[1.16] text-[#141513] text-[32px] md:text-[48px]">
                Frequently Asked Questions
              </h2>
              <p className="font-normal leading-[1.6] opacity-80 text-pk-text-light text-[16px] pr-6">
                Learn how Property Kraft helps landlords, property managers, and
                facility teams manage properties, tenants, and operations more
                efficiently.
              </p>
            </div>
          </div>

          {/* Accordion */}
          <div className="flex w-full">
            <div className="flex flex-col w-full max-w-[820px]">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="w-full border-b border-[#E5E7EB]/40"
                >
                  <div className="py-9 md:py-10">
                    {/* Question header */}
                    <div
                      className="flex items-start justify-between gap-6 group cursor-pointer"
                      onClick={() => handleToggle(index)}
                    >
                      <div className="flex-1">
                        <p className="font-normal leading-[1.65] text-[#141513] text-[17px] md:text-[19px] transition-colors duration-200 group-hover:text-pk-orange">
                          {faq.question}
                        </p>
                      </div>
                      <div
                        className="shrink-0 mt-1 transition-transform duration-300"
                        style={{
                          transform:
                            openIndex === index
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      >
                        {openIndex === index ? (
                          <Minus className="w-5 h-5 text-pk-orange" strokeWidth={2} />
                        ) : (
                          <Plus className="w-5 h-5 text-pk-orange" strokeWidth={2} />
                        )}
                      </div>
                    </div>

                    {/* Answer with smooth transition */}
                    <div
                      className="transition-all duration-400 ease-in-out overflow-hidden"
                      style={{
                        maxHeight: openIndex === index ? "500px" : "0",
                        opacity: openIndex === index ? 1 : 0,
                        transitionProperty: "max-height, opacity",
                      }}
                    >
                      <div className="pt-5 pr-11">
                        <p className="font-normal leading-[1.7] text-pk-text-light text-[17px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
