import { Metadata } from "next";

import { BASE_URL } from "@/lib/constants";
import { createCanonicalMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Rent Administration - Property Kraft Africa",
  description:
    "Efficient rent collection, payment tracking, and financial administration that ensures timely cash flow and accurate records.",
  openGraph: {
    title: "Rent Administration - Property Kraft Africa",
    description:
      "Efficient rent collection, payment tracking, and financial administration that ensures timely cash flow and accurate records.",
    url: `${BASE_URL}/services/rent-administration`,
  },
  ...createCanonicalMetadata("services/rent-administration"),
};

export default function RentAdministrationPage() {
  return (
    <ServicePageTemplate
      title="Rent Administration"
      subtitle="Efficient rent collection, payment tracking, and financial administration that ensures timely cash flow and accurate records."
      customHero={
        <div className="bg-[#0f172a] relative w-full overflow-hidden flex items-center">
          {/* Subtle Abstract Flowing Lines */}
          <div className="absolute inset-0 opacity-[0.06]">
            <svg
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M -200,120 C 100,80 300,180 500,140 C 700,100 900,220 1100,160 C 1300,100 1500,180 1800,140"
                fill="none"
                stroke="white"
                strokeWidth="0.8"
              />
              <path
                d="M -150,280 C 150,380 400,220 650,320 C 900,420 1100,260 1350,340 C 1600,420 1800,300 2000,360"
                fill="none"
                stroke="white"
                strokeWidth="0.8"
              />
              <path
                d="M -100,450 C 200,380 450,520 700,440 C 950,360 1200,500 1450,420 C 1700,340 1900,460 2100,400"
                fill="none"
                stroke="white"
                strokeWidth="0.8"
              />
              <path
                d="M -250,580 C 50,520 350,620 600,540 C 850,460 1050,580 1300,520 C 1550,460 1750,560 2000,500"
                fill="none"
                stroke="white"
                strokeWidth="0.8"
              />
              <path
                d="M -180,50 C 120,140 380,40 620,120 C 860,200 1080,80 1320,160 C 1560,240 1780,120 2000,180"
                fill="none"
                stroke="white"
                strokeWidth="0.8"
              />
            </svg>
          </div>

          <div className="relative w-full px-[16px] md:px-[32px] pt-[20px] pb-[40px] md:pt-[24px] md:pb-[60px] z-10">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Column - Content */}
                <div className="flex flex-col gap-[18px]">
                  <h1 className="font-semibold text-white text-[28px] md:text-[34px] lg:text-[38px] leading-[1.1] max-w-[580px]">
                    Reliable Rent Administration, Handled for You.
                  </h1>
                  <p className="font-normal text-[#cbd5e1] text-[15px] md:text-[18px] leading-[1.6] max-w-[520px]">
                    Property Kraft manages rent collection, payment tracking,
                    and financial records to ensure consistency, transparency,
                    and clear financial oversight for property owners.
                  </p>
                </div>

                {/* Right Column - Corporate Image */}
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="w-full max-w-[450px] relative">
                    <div className="rounded-[12px] overflow-hidden shadow-2xl">
                      <img
                        src="/rent-administration.jpeg"
                        alt="Financial documentation"
                        className="w-full h-auto object-cover"
                        style={{
                          filter: "grayscale(0.4) contrast(0.85) brightness(0.9)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      overview={{
        title: "Structured Rent Management",
        description:
          "Property Kraft manages the full rent cycle for property owners — from invoice generation and payment reminders to payment tracking, reconciliation, and financial documentation. Our structured approach ensures timely rent collection, reduces payment delays, and provides complete transparency through accurate financial records and detailed reporting.",
      }}
      capabilities={{
        title: "End-to-End Rent Oversight",
        description:
          "Property Kraft manages the full rent administration process — from issuing rent invoices and tracking payments to handling late payment follow-ups and maintaining clear financial records. This ensures consistency, transparency, and reliable financial oversight for property owners.",
        stages: [
          {
            title: "Invoice Generation & Distribution",
            items: [
              "We prepare and distribute rent invoices to tenants across all managed properties, ensuring clear payment expectations and consistent documentation.",
            ],
          },
          {
            title: "Payment Tracking & Reminders",
            items: [
              "We monitor rent payments, send reminders where necessary, and keep accurate records so property owners always have visibility over collections.",
            ],
          },
          {
            title: "Escalation & Adjustments",
            items: [
              "We handle late payment follow-ups and manage rent adjustments or exceptions through structured procedures that maintain fairness and accountability.",
            ],
          },
          {
            title: "Reporting & Reconciliation",
            items: [
              "We maintain clear financial records and prepare owner statements that provide transparency into rent collections and outstanding balances.",
            ],
          },
        ],
      }}
      ctaSection={
        <>
          <h3 className="font-semibold text-white text-[22px] md:text-[36px] leading-[1.2]">
            Let Us Handle Your Rent Administration.
          </h3>
          <p className="font-normal text-white/80 text-[16px] md:text-[18px] leading-[1.6] max-w-[700px] mx-auto">
            Property Kraft coordinates rent collection, payment tracking, and
            financial records — ensuring consistency, transparency, and reliable
            oversight for property owners.
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-pk-orange hover:bg-pk-orange-hover transition-colors duration-200 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium text-[15px] md:text-[16px]">
              Schedule Consultation
            </button>
          </div>
        </>
      }
    />
  );
}
