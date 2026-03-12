import { Metadata } from "next";

import { BASE_URL } from "@/lib/constants";
import { createCanonicalMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Tenant Onboarding & KYC - Property Kraft Africa",
  description:
    "Streamlined tenant verification and onboarding that ensures compliance, security, and a smooth move-in experience.",
  openGraph: {
    title: "Tenant Onboarding & KYC - Property Kraft Africa",
    description:
      "Streamlined tenant verification and onboarding that ensures compliance, security, and a smooth move-in experience.",
    url: `${BASE_URL}/services/tenant-onboarding-kyc`,
  },
  ...createCanonicalMetadata("services/tenant-onboarding-kyc"),
};

export default function TenantOnboardingPage() {
  return (
    <ServicePageTemplate
      title="Tenant Onboarding & KYC"
      subtitle="Streamlined tenant verification and onboarding that ensures compliance, security, and a smooth move-in experience."
      customHero={
        <div
          className="relative w-full min-h-[500px] md:min-h-[600px]"
          style={{ backgroundColor: "#0F172A" }}
        >
          {/* Concentric circular arcs radiating from right side */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1920 800"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1600" cy="400" r="300" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
            <circle cx="1600" cy="400" r="450" fill="none" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1.5" />
            <circle cx="1600" cy="400" r="600" fill="none" stroke="rgba(255, 255, 255, 0.07)" strokeWidth="1.5" />
            <circle cx="1600" cy="400" r="750" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />
          </svg>

          {/* Subtle atmospheric overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 1000px 900px at 50% 40%, rgba(255, 255, 255, 0.04) 0%, rgba(15, 23, 42, 0) 70%)",
            }}
          />

          {/* Content Container */}
          <div className="relative px-[20px] md:px-[40px] py-[80px] md:py-[120px]">
            <div className="max-w-[1200px] w-full mx-auto relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-[40px]">
                {/* Left: Text Content */}
                <div className="flex flex-col gap-[20px] max-w-[800px] md:max-w-[750px]">
                  <h1 className="font-medium text-white text-[32px] md:text-[42px] lg:text-[48px] leading-[1.15]">
                    Structured Tenant Onboarding & KYC
                  </h1>
                  <p className="font-normal text-white/90 text-[16px] md:text-[18px] leading-[1.6] max-w-[500px]">
                    Streamlined tenant onboarding that ensures compliance,
                    document collection, and a smooth move-in experience for
                    property owners and tenants.
                  </p>
                </div>

                {/* Right: Circular Image Frames */}
                <div className="relative w-[400px] h-[400px] flex-shrink-0 hidden md:block">
                  {/* Large Circle (Primary) - Bottom Right */}
                  <div
                    className="absolute bottom-0 right-0 w-[240px] h-[240px] rounded-full overflow-hidden bg-navy-light"
                    style={{
                      border: "2px solid rgba(255, 255, 255, 0.9)",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <img
                      src="/kyc-1.jpg"
                      alt="Professional handshake"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Medium Circle - Top Right */}
                  <div
                    className="absolute top-[20px] right-[100px] w-[180px] h-[180px] rounded-full overflow-hidden bg-navy-light"
                    style={{
                      border: "2px solid rgba(255, 255, 255, 0.9)",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <img
                      src="/kyc-2.jpg"
                      alt="Digital verification"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Small Circle - Top Left */}
                  <div
                    className="absolute top-[80px] left-[0px] w-[140px] h-[140px] rounded-full overflow-hidden bg-navy-light"
                    style={{
                      border: "2px solid rgba(255, 255, 255, 0.9)",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <img
                      src="/kyc-3.jpg"
                      alt="Property keys"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      overview={{
        title: "Structured Tenant Onboarding",
        description:
          "Property Kraft manages the complete tenant onboarding process — from initial screening and document collection to KYC verification and lease execution. Our approach ensures every tenancy begins with proper documentation, verified identities, and clear mutual expectations.",
      }}
      capabilities={{
        title: "How Our Onboarding Works",
        steps: [
          {
            title: "Application & Screening",
            description:
              "We collect tenant applications, verify basic eligibility, and conduct initial screening to assess suitability before moving forward.",
          },
          {
            title: "Document Collection & KYC",
            description:
              "We gather required identity documents, employment verification, references, and other KYC documentation to ensure a complete tenant profile.",
          },
          {
            title: "Verification & Approval",
            description:
              "We verify all submitted documents, conduct background checks where applicable, and compile a comprehensive report for the property owner's review.",
          },
          {
            title: "Lease Execution & Move-In",
            description:
              "Once approved, we coordinate lease signing, collect initial payments, conduct property handover inspections, and manage a structured move-in process.",
          },
        ],
      }}
      ctaTitle="Start Every Tenancy on the Right Foundation."
      ctaDescription="Let Property Kraft handle your tenant onboarding with structured verification, documentation, and a smooth move-in experience."
    />
  );
}
