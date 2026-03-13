import { Metadata } from "next";

import { BASE_URL } from "@/lib/constants";
import { createCanonicalMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Facility Management - Property Kraft Africa",
  description:
    "Structured facility oversight that protects infrastructure, optimizes system performance, and ensures operational continuity.",
  openGraph: {
    title: "Facility Management - Property Kraft Africa",
    description:
      "Structured facility oversight that protects infrastructure, optimizes system performance, and ensures operational continuity.",
    url: `${BASE_URL}/services/facility-management`,
  },
  ...createCanonicalMetadata("services/facility-management"),
};

export default function FacilityManagementPage() {
  return (
    <ServicePageTemplate
      title="Facility Management"
      subtitle="Structured facility oversight that protects infrastructure, optimizes system performance, and ensures operational continuity."
      customHero={
        <div
          className="relative w-full overflow-hidden"
          style={{ backgroundColor: "#1E293B" }}
        >
          <div
            className="relative flex items-start px-[20px] md:px-[40px] pt-[60px] md:pt-[80px] pb-[60px] md:pb-[80px]"
            style={{
              backgroundImage: "url('/facility-management-hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#0F172A]/75" />

            <div className="max-w-[1200px] w-full mx-auto relative z-10">
              <div className="flex flex-col gap-[16px] max-w-[700px]">
                <h1 className="font-semibold text-white text-[36px] md:text-[48px] leading-[1.15]">
                  Facility Management You Can Rely On.
                </h1>
                <p className="font-normal text-white/90 text-[16px] md:text-[18px] leading-[1.5]">
                  We oversee building infrastructure, maintenance operations,
                  vendor coordination, and compliance — ensuring your facilities
                  remain safe, efficient, and professionally maintained.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
      overviewCustom={
        <div className="flex flex-col gap-6 items-start">
          <h2 className="font-semibold text-pk-text text-[36px] md:text-[48px] leading-[1.2]">
            Infrastructure & Facility Oversight
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
            <OverviewCard
              title="Mechanical & Electrical Systems"
              description="We oversee core building systems such as power, electrical infrastructure, and mechanical operations to ensure reliability, safety, and consistent performance."
            />
            <OverviewCard
              title="Preventive Maintenance Planning"
              description="We implement structured maintenance schedules that reduce breakdowns, extend equipment life, and keep your facility running smoothly."
            />
            <OverviewCard
              title="Vendor & Contractor Coordination"
              description="We coordinate and supervise external service providers, ensuring vendors deliver quality work on schedule and according to agreed standards."
            />
            <OverviewCard
              title="Safety & Compliance Monitoring"
              description="We monitor safety requirements, conduct routine checks, and ensure facilities remain compliant with operational and regulatory standards."
            />
          </div>
        </div>
      }
      capabilities={{
        title: "Key Responsibilities",
        description:
          "Our facility management team oversees the following operational responsibilities to ensure buildings remain safe, efficient, and properly maintained.",
        items: [
          "Oversight of building systems (HVAC, electrical, plumbing, and utilities)",
          "Preventive maintenance planning and execution",
          "Vendor and contractor coordination",
          "Janitorial and facility cleaning service management",
          "Security operations and access control oversight",
          "Health and safety compliance monitoring",
          "Energy usage monitoring and utility optimization",
          "Emergency preparedness and response coordination",
        ],
      }}
      ctaSection={
        <>
          <h3 className="font-semibold text-white text-[28px] md:text-[36px] leading-[1.2]">
            Let Us Handle Your Facility Operations.
          </h3>
          <p className="font-normal text-white/80 text-[16px] md:text-[18px] leading-[1.6] max-w-[700px] mx-auto">
            Property Kraft oversees maintenance, vendor coordination,
            compliance, and daily facility operations — so your buildings remain
            safe, efficient, and professionally maintained.
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-pk-orange hover:bg-pk-orange-hover transition-colors duration-200 text-white px-8 py-4 rounded-lg font-medium">
              Schedule Consultation
            </button>
          </div>
        </>
      }
    />
  );
}

function OverviewCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 bg-white border border-[#e5e7eb] rounded-lg p-7">
      <h3 className="font-semibold text-pk-text text-[20px] md:text-[22px] leading-[1.3]">
        {title}
      </h3>
      <p className="font-normal text-pk-text-light text-[16px] leading-[1.6]">
        {description}
      </p>
    </div>
  );
}
