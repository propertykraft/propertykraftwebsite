import { ReactNode } from "react";
import Link from "next/link";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  customHero?: ReactNode;
  overview?: {
    title: string;
    description: string;
  };
  overviewCustom?: ReactNode;
  capabilities?: {
    title: string;
    description?: string;
    items?: string[];
    stages?: {
      title: string;
      items: string[];
    }[];
    steps?: {
      title: string;
      description: string;
    }[];
  };
  capabilitiesCustom?: ReactNode;
  benefits?: {
    title: string;
    description: string;
    items: string[];
  };
  detailImage?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaSection?: ReactNode;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  heroImage,
  customHero,
  overview,
  overviewCustom,
  capabilities,
  capabilitiesCustom,
  benefits,
  detailImage,
  ctaTitle = "Let's Take the Responsibility Off Your Hands.",
  ctaDescription,
  ctaSection,
}: ServicePageTemplateProps) {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      {customHero ? (
        customHero
      ) : (
        <div className="bg-navy relative w-full">
          {/* Atmospheric gradient */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background:
                "radial-gradient(ellipse 1200px 1100px at 30% 15%, rgba(255, 255, 255, 0.07) 0%, rgba(15, 23, 42, 0) 70%)",
            }}
          />

          <div className="relative z-[2] flex flex-col items-center pt-[60px] md:pt-[80px] pb-[60px] md:pb-[80px] px-4 md:px-8 w-full">
            <div className="max-w-[1000px] flex flex-col items-center gap-6 text-center">
              <h1 className="font-semibold text-white text-[42px] md:text-[56px] lg:text-[68px] leading-[1.1]">
                {title}
              </h1>
              <p className="font-normal text-[#e2e8f0] text-[18px] md:text-[22px] leading-[1.6] max-w-[800px]">
                {subtitle}
              </p>
            </div>

            {/* Hero Image */}
            {heroImage && (
              <div className="max-w-[1000px] w-full mt-[40px] md:mt-[60px]">
                <div className="relative rounded-[20px] overflow-hidden aspect-[16/9] shadow-2xl bg-navy-light">
                  {/* placeholder for hero image */}
                  <div className="w-full h-full bg-navy-light flex items-center justify-center text-white/30 text-sm">
                    {title} Hero Image
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}



      {/* Content Sections */}
      <div className="bg-white w-full">
        <div className="flex flex-col px-5 md:px-10 py-[60px] md:py-[100px] w-full">
          <div className="max-w-[1200px] w-full mx-auto flex flex-col gap-20 md:gap-[120px]">
            {/* Overview Section */}
            {overview && (
              <div className="flex flex-col gap-6">
                <h2 className="font-semibold text-pk-text text-[36px] md:text-[48px] leading-[1.2]">
                  {overview.title}
                </h2>
                <p className="font-normal text-pk-text-light text-[18px] md:text-[20px] leading-[1.7]">
                  {overview.description}
                </p>
              </div>
            )}
            {overviewCustom}

            {/* Capabilities Section */}
            {(capabilities || capabilitiesCustom) && (
              capabilitiesCustom ? (
                capabilitiesCustom
              ) : (
                <div className="flex flex-col gap-0 pt-[88px] md:pt-[96px]">
                  <div className="flex flex-col gap-4">
                    <h2 className="font-semibold text-pk-text text-[36px] md:text-[48px] leading-[1.2]">
                      {capabilities?.title}
                    </h2>
                    {capabilities?.description && (
                      <p className="font-normal text-pk-text-light text-[15px] md:text-[16px] leading-[1.6] max-w-[900px]">
                        {capabilities.description}
                      </p>
                    )}
                  </div>

                  {/* Checklist items */}
                  {capabilities?.items && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mt-6 max-w-[1000px]">
                      {capabilities.items.map((item, index) => (
                        <div key={index} className="flex gap-3.5 items-start">
                          <div className="w-5 h-5 rounded-full bg-pk-orange flex items-center justify-center shrink-0 mt-[3px]">
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="white"
                              strokeWidth="3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="font-normal text-pk-text-light text-[15px] md:text-[16px] leading-[1.6]">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stages (card grid) */}
                  {capabilities?.stages && (
                    <div className="bg-[#f8f9fa] rounded-xl p-8 md:p-10 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {capabilities.stages.map((stage, i) => (
                          <div
                            key={i}
                            className="bg-white rounded-lg p-6 flex flex-col gap-3 border-t-2 border-pk-orange shadow-sm"
                          >
                            <h3 className="font-bold text-pk-text text-[18px] md:text-[19px] leading-[1.3]">
                              {stage.title}
                            </h3>
                            <div className="flex flex-col gap-2">
                              {stage.items.map((item, j) => (
                                <p
                                  key={j}
                                  className="font-normal text-pk-text-light text-[14px] md:text-[15px] leading-[1.6]"
                                >
                                  {item}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Steps (numbered) */}
                  {capabilities?.steps && (
                    <div className="flex flex-col mt-1">
                      {capabilities.steps.map((step, i) => (
                        <div key={i}>
                          <div className="flex gap-5 items-start py-8">
                            <div className="w-8 h-8 rounded-full bg-pk-orange flex items-center justify-center shrink-0">
                              <span className="font-bold text-white text-[16px]">
                                {i + 1}
                              </span>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                              <h3 className="text-pk-text text-[20px] md:text-[22px] leading-[1.3] font-semibold">
                                {step.title}
                              </h3>
                              <p className="font-normal text-pk-text-light text-[15px] md:text-[16px] leading-[1.6]">
                                {step.description}
                              </p>
                            </div>
                          </div>
                          {i < capabilities.steps!.length - 1 && (
                            <div className="h-px bg-[#e2e8f0]" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}

            {/* Benefits Section */}
            {benefits && (
              <div className="flex flex-col gap-6">
                <h2 className="font-semibold text-pk-text text-[36px] md:text-[48px] leading-[1.2]">
                  {benefits.title}
                </h2>
                {benefits.description && (
                  <p className="font-normal text-pk-text-light text-[18px] md:text-[20px] leading-[1.7]">
                    {benefits.description}
                  </p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-4">
                  {benefits.items.map((item, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-pk-orange/10 flex items-center justify-center shrink-0 mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#FF5000"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="font-normal text-pk-text-light text-[16px] leading-[1.6]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detail Image */}
            {detailImage && (
              <div className="w-full mt-4">
                <div className="relative rounded-[20px] overflow-hidden aspect-[21/9] shadow-lg bg-navy-light">
                  <div className="w-full h-full bg-navy-light flex items-center justify-center text-white/30 text-sm">
                    Detail View Image
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy w-full mb-[40px] md:mb-[60px]">
        <div className="flex flex-col items-center px-4 md:px-8 py-[60px] md:py-[80px] text-center">
          <div className="max-w-[1200px] w-full flex flex-col gap-5 items-center">
            {ctaSection ? (
              ctaSection
            ) : (
              <>
                <h2 className="font-medium text-white text-[24px] md:text-[28px] leading-[1.3]">
                  {ctaTitle}
                </h2>
                {ctaDescription && (
                  <p className="font-normal text-white/85 text-[16px] md:text-[18px] leading-[1.6] max-w-[600px]">
                    {ctaDescription}
                  </p>
                )}
                <div className="mt-2">
                  <Link
                    href="/contact"
                    className="inline-block bg-pk-orange hover:bg-pk-orange-hover transition-colors duration-200 text-white px-7 py-3 rounded-lg font-medium text-[15px]"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
