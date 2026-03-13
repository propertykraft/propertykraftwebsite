import { Metadata } from "next";

import { BASE_URL } from "@/lib/constants";
import { createCanonicalMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/service-page-template";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lizt — Smart WhatsApp Management - Property Kraft Africa",
  description:
    "Manage your property, tenants, and rent directly through WhatsApp. Lizt keeps everything organized while giving you a simple dashboard to track records and activities.",
  openGraph: {
    title: "Lizt — Smart WhatsApp Management - Property Kraft Africa",
    description:
      "Manage your property, tenants, and rent directly through WhatsApp. Lizt keeps everything organized while giving you a simple dashboard to track records and activities.",
    url: `${BASE_URL}/services/lizt`,
  },
  ...createCanonicalMetadata("services/lizt"),
};

export default function LiztPage() {
  return (
    <ServicePageTemplate
      title="Lizt — Powered by Property Kraft"
      subtitle="Manage your property, tenants, and rent directly through WhatsApp. Lizt keeps everything organized while giving you a simple dashboard to track records and activities."
      customHero={
        <div className="relative w-full" style={{ backgroundColor: "#0F172A" }}>
          {/* Subtle curved communication lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1920 800"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 1400 400 Q 1200 300, 1000 250" fill="none" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1.5" />
            <path d="M 1400 400 Q 1200 400, 1000 400" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
            <path d="M 1400 400 Q 1200 500, 1000 550" fill="none" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1.5" />
            <circle cx="1000" cy="250" r="3" fill="rgba(255, 255, 255, 0.15)" />
            <circle cx="1000" cy="400" r="3" fill="rgba(255, 255, 255, 0.15)" />
            <circle cx="1000" cy="550" r="3" fill="rgba(255, 255, 255, 0.15)" />
          </svg>

          {/* Subtle atmospheric overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 1000px 900px at 50% 40%, rgba(255, 255, 255, 0.03) 0%, rgba(15, 23, 42, 0) 70%)",
            }}
          />

          {/* Content Container */}
          <div className="relative px-[20px] md:px-[40px] pt-[40px] pb-[50px] md:pt-[50px] md:pb-[60px]">
            <div className="max-w-[1200px] w-full mx-auto relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-[40px]">
                {/* Left: Text Content */}
                <div className="flex flex-col gap-[28px] max-w-[800px] md:max-w-[650px]">
                  <div className="flex flex-col gap-[12px]">
                    <p className="font-normal text-white/70 text-[14px] uppercase tracking-[1.2px]">
                      Powered by Property Kraft
                    </p>
                    <h1 className="font-medium text-white text-[36px] md:text-[44px] lg:text-[48px] leading-[1.15]">
                      Lizt by Property Kraft
                    </h1>
                  </div>
                  <p className="font-normal text-white/90 text-[16px] md:text-[18px] leading-[1.6] max-w-[500px]">
                    Manage your property, tenants, and rent directly through
                    WhatsApp. Lizt keeps everything organized while giving you a
                    simple dashboard to track records and activities.
                  </p>
                </div>

                {/* Right: WhatsApp Circular Graphic */}
                <div className="relative w-[320px] h-[320px] flex-shrink-0 flex items-center justify-center">
                  {/* Outer glow ring */}
                  <div
                    className="absolute w-[240px] h-[240px] rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(37, 211, 102, 0.15) 0%, transparent 70%)",
                    }}
                  />

                  {/* Main WhatsApp circle */}
                  <div
                    className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#25D366", boxShadow: "0 10px 40px rgba(37, 211, 102, 0.3)" }}
                  >
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  {/* Small accent dots */}
                  <div
                    className="absolute top-[40px] right-[60px] w-[12px] h-[12px] rounded-full"
                    style={{ backgroundColor: "rgba(37, 211, 102, 0.4)" }}
                  />
                  <div
                    className="absolute bottom-[50px] left-[50px] w-[8px] h-[8px] rounded-full"
                    style={{ backgroundColor: "rgba(37, 211, 102, 0.3)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      overview={{
        title: "Technology Supporting Property Operations",
        description:
          "Lizt is a WhatsApp-based tool designed to simplify day-to-day property communication.\n\nLandlords, tenants, and facility teams can send requests, receive updates, get rent reminders, and handle common property tasks directly through WhatsApp.\n\nBehind the scenes, Lizt keeps records organized and provides a simple dashboard so property managers can track activities and maintain clear documentation.",
      }}
      capabilitiesCustom={
        <div className="flex flex-col gap-[0px] pt-[88px] md:pt-[96px]">
          <div className="flex flex-col gap-[16px]">
            <h2 className="font-semibold text-pk-text text-[36px] md:text-[48px] leading-[1.2]">
              Platform Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[20px] mt-[24px] max-w-[1000px]">
            <CapabilityItem text="Automatic responses to common tenant questions" />
            <CapabilityItem text="Rent reminders and payment confirmations" />
            <CapabilityItem text="Tenant document collection and verification through chat" />
            <CapabilityItem text="Urgent issue escalation and emergency request routing" />
            <CapabilityItem text="Maintenance and service request reporting via WhatsApp" />
            <CapabilityItem text="Broadcast announcements and updates to tenants" />
          </div>
        </div>
      }
      ctaSection={
        <>
          <h3 className="font-semibold text-white text-[28px] md:text-[36px] leading-[1.2]">
            See How Lizt Works for Your Property
          </h3>
          <p className="font-normal text-white/80 text-[16px] md:text-[18px] leading-[1.6] max-w-[700px] mx-auto">
            Lizt helps landlords manage tenants, requests, and rent updates
            directly through WhatsApp while keeping everything organized in a
            simple dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-[12px] justify-center mt-[16px]">
            <button className="bg-[#FF5000] hover:bg-[#ff6a00] transition-colors duration-200 text-white px-[32px] py-[14px] rounded-[8px] font-medium text-[16px]">
              Request Demo
            </button>
            <Link
              href="https://lizt.co"
              target="_blank"
              className="border-2 border-white text-white hover:bg-white/10 transition-colors duration-200 px-[32px] py-[14px] rounded-[8px] font-medium text-[16px] inline-block"
            >
              Learn More
            </Link>
          </div>
        </>
      }
    />
  );
}

function CapabilityItem({ text }: { text: string }) {
  return (
    <div className="flex gap-[14px] items-start">
      <div className="w-[20px] h-[20px] rounded-full bg-[#FF5000] flex items-center justify-center shrink-0 mt-[3px]">
        <svg
          className="w-[12px] h-[12px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="font-normal text-pk-text-light text-[15px] md:text-[16px] leading-[1.6]">
        {text}
      </p>
    </div>
  );
}
