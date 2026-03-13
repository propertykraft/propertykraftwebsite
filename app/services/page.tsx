import { Metadata } from "next";
import Link from "next/link";

import { BASE_URL } from "@/lib/constants";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Property Kraft's comprehensive range of property and facility management services, including property management, facility management, rent administration, tenant onboarding, and Lizt.",
  openGraph: {
    title: "Our Services - Property Kraft Africa",
    description:
      "Explore Property Kraft's comprehensive range of property and facility management services.",
    url: `${BASE_URL}/services`,
  },
  ...createCanonicalMetadata("services"),
};

const services = [
  {
    title: "Property Management",
    description:
      "Tenant coordination, rent administration, inspections, and daily operational oversight to keep your properties organized and performing.",
    href: "/services/property-management",
  },
  {
    title: "Facility Management",
    description:
      "Building systems management, preventive maintenance, vendor coordination, and compliance monitoring for your facilities.",
    href: "/services/facility-management",
  },
  {
    title: "Rent Administration",
    description:
      "Efficient rent collection, payment tracking, reconciliation, and financial reporting that ensures timely cash flow.",
    href: "/services/rent-administration",
  },
  {
    title: "Tenant Onboarding & KYC",
    description:
      "Streamlined tenant verification, document collection, and onboarding that ensures compliance and a smooth move-in.",
    href: "/services/tenant-onboarding-kyc",
  },
  {
    title: "Lizt — Smart WhatsApp Management",
    description:
      "Manage your property, tenants, and rent directly through WhatsApp with a companion dashboard for records and activities.",
    href: "/services/lizt",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-navy relative w-full">
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 1200px 1100px at 30% 15%, rgba(255, 255, 255, 0.07) 0%, rgba(15, 23, 42, 0) 70%)",
          }}
        />
        <div className="relative z-[2] flex flex-col items-center pt-[80px] md:pt-[100px] pb-[60px] md:pb-[80px] px-4 md:px-8">
          <div className="max-w-[900px] text-center flex flex-col items-center gap-6">
            <h1 className="font-semibold text-white text-[42px] md:text-[56px] lg:text-[68px] leading-[1.1]">
              Our Services
            </h1>
            <p className="font-normal text-[#e2e8f0] text-[18px] md:text-[22px] leading-[1.6] max-w-[700px]">
              Complete property and facility management solutions designed for
              clarity, accountability, and long-term stability.
            </p>
          </div>
        </div>
      </section>



      {/* Services Grid */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col gap-4 p-8 border border-[#e5e7eb] rounded-xl hover:border-pk-orange/40 transition-all duration-300"
            >
              <h2 className="font-semibold text-pk-text text-[22px] md:text-[24px] leading-[1.3] group-hover:text-pk-orange transition-colors">
                {service.title}
              </h2>
              <p className="font-normal text-pk-text-light text-[16px] leading-[1.6]">
                {service.description}
              </p>
              <span className="font-medium text-pk-orange text-[15px] mt-auto">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy w-full mb-10 md:mb-[60px]">
        <div className="flex flex-col items-center px-4 md:px-8 py-[60px] md:py-[80px] text-center">
          <h2 className="font-medium text-white text-[24px] md:text-[28px] leading-[1.3] mb-5">
            Need Help Choosing?
          </h2>
          <p className="font-normal text-white/85 text-[16px] md:text-[18px] leading-[1.6] max-w-[600px] mb-6">
            Talk to us about your property and we&apos;ll recommend the right
            management solution for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-pk-orange hover:bg-pk-orange-hover transition-colors text-white px-7 py-3 rounded-lg font-medium text-[15px]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
