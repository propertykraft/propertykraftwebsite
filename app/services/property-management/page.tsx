import { Metadata } from "next";

import { BASE_URL } from "@/lib/constants";
import { createCanonicalMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Property Management - Property Kraft Africa",
  description:
    "Reliable property management including tenant coordination, rent administration, inspections, and daily operational oversight.",
  openGraph: {
    title: "Property Management - Property Kraft Africa",
    description:
      "Reliable property management including tenant coordination, rent administration, inspections, and daily operational oversight.",
    url: `${BASE_URL}/services/property-management`,
  },
  ...createCanonicalMetadata("services/property-management"),
};

export default function PropertyManagementPage() {
  return (
    <ServicePageTemplate
      title="Property Management"
      subtitle="Reliable property management including tenant coordination, rent administration, inspections, and daily operational oversight."
      customHero={
        <div
          className="relative w-full h-[80vh] md:h-[90vh]"
          style={{ backgroundColor: "#1E293B" }}
        >
          <div
            className="relative h-full flex items-end px-[20px] md:px-[40px] pt-[100px] md:pt-[140px] pb-[80px] md:pb-[100px]"
            style={{
              backgroundImage: "url('/property-management-hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#0F172A]/75" />

            <div className="max-w-[1200px] w-full mx-auto relative z-10">
              <div className="flex flex-col gap-[16px] max-w-[700px] mt-[40px] md:mt-[60px]">
                <h1 className="font-medium text-white text-[28px] md:text-[36px] leading-[1.15]">
                  Reliable Property Management, Handled For You.
                </h1>
                <p className="font-normal text-white/90 text-[16px] md:text-[18px] leading-[1.5]">
                  Property Kraft manages tenant coordination, rent
                  administration, inspections, and daily operational oversight
                  to keep your properties organized, compliant, and performing
                  at their best.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
      overviewCustom={
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-pk-text text-[28px] md:text-[36px] leading-[1.2]">
            What We Handle For You
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] md:gap-[100px] lg:gap-[120px] mt-5">
            <p className="font-normal text-pk-text-light text-[18px] md:text-[20px] leading-[1.7]">
              Property Kraft manages the day-to-day operational responsibilities
              required to keep your properties structured, compliant, and
              running smoothly — so you don&apos;t have to manage them yourself.
            </p>
            <div className="flex flex-col gap-6">
              <ServiceBlock
                title="Tenant Management"
                description="We oversee tenant screening, onboarding, documentation, renewals, and structured communication to ensure clear expectations and accountability."
              />
              <ServiceBlock
                title="Rent Administration"
                description="We coordinate rent collection, monitor payments, issue reminders, and maintain accurate financial records to ensure consistency and transparency."
              />
              <ServiceBlock
                title="Property Inspections"
                description="We conduct routine inspections, oversee compliance requirements, and document property conditions to protect your assets and maintain operational standards."
              />
            </div>
          </div>
        </div>
      }
      capabilities={{
        title: "Core Capabilities",
        items: [
          "Tenant screening and onboarding",
          "Lease documentation and renewals",
          "Rent collection and tracking",
          "Property inspections and audits",
          "Maintenance coordination",
          "Compliance oversight",
          "Vendor management",
          "Financial reporting",
        ],
      }}
      ctaTitle="Let's Take the Responsibility Off Your Hands."
      ctaDescription="From tenant management to rent coordination and inspections, Property Kraft handles your property operations with structure and accountability."
    />
  );
}

function ServiceBlock({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-lg bg-pk-orange/10 flex items-center justify-center shrink-0">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FF5000"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-pk-text text-[18px] md:text-[20px] mb-2">
          {title}
        </h3>
        <p className="font-normal text-pk-text-light text-[16px] leading-[1.6]">
          {description}
        </p>
      </div>
    </div>
  );
}
