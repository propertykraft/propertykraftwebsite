import Link from "next/link";

export function AboutPreview() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="About us section/1"
    >
      {/* Subtle white overlay at top to absorb hero fade */}
      <div
        className="absolute top-0 left-0 right-0 h-[200px] md:h-[300px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.7) 60%, rgba(255, 255, 255, 1) 100%)",
        }}
      />
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-[56px] md:pb-[112px] pt-[64px] md:pt-[128px] px-[16px] md:px-[32px] relative w-full">
          {/* Container */}
          <div
            className="content-stretch flex flex-col gap-[20px] items-start justify-center max-w-[1200px] relative shrink-0 w-full"
            data-name="Container"
          >
            {/* Top content */}
            <div
              className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full"
              data-name="Top content"
            >
              {/* Seciton headling */}
              <div
                className="relative shrink-0 w-full"
                data-name="Seciton headling/Level 1 - style 2"
              >
                <div className="flex flex-col justify-end size-full">
                  <div className="content-stretch flex flex-col gap-[32px] items-start justify-end pr-[40px] relative w-full">
                    {/* Text wrapper */}
                    <div
                      className="content-stretch flex flex-col gap-[20px] items-start max-w-[800px] relative shrink-0 w-full"
                      data-name="Text wrapper"
                    >
                      {/* Eyebrow */}
                      <div
                        className="content-stretch flex items-center relative rounded-[24px] shrink-0"
                        data-name="Small eyebrow tag label/Style 2"
                      >
                        <p className="font-sans font-medium leading-[1.32] not-italic relative shrink-0 text-[#FF5000] text-[16px] text-center tracking-[1px] uppercase">
                          About us
                        </p>
                      </div>
                      
                      {/* Heading */}
                      <div
                        className="content-stretch flex items-center relative shrink-0 w-full"
                        data-name="Heading wrapper"
                      >
                        <p
                          className="flex-[1_0_0] font-sans font-semibold leading-[1.16] min-h-px min-w-px relative text-[#141513] text-[32px] md:text-[48px] whitespace-pre-wrap"
                          style={{ fontVariationSettings: "'opsz' 14" }}
                        >
                          Designed for Better Property Operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body text */}
              <div className="font-sans font-light leading-[1.6] not-italic relative shrink-0 text-[#51564e] text-[16px] md:text-[20px] w-full whitespace-pre-wrap">
                <p className="mb-[18px]">Property Kraft is a property and facility management company helping landlords, estates, and organizations manage properties with structure and clarity.</p>
                <p className="mb-[18px]">From tenant management and rent administration to facility operations and maintenance coordination, we provide the systems and operational support needed to keep properties running efficiently.</p>
                <p>Our approach combines experienced management with smart technology, giving property owners better visibility, faster response times, and reliable day-to-day operations across their assets.</p>
              </div>
            </div>

            {/* Read more link */}
            <div
              className="content-stretch flex items-start relative shrink-0 mt-2"
              data-name="Button text link"
            >
              <Link
                href="/about"
                className="content-stretch flex items-start group"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-name="Content"
                >
                  <div className="relative shrink-0" data-name="Text wrapper">
                    <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit]">
                      <p
                        className="font-sans font-medium leading-[1.22] relative shrink-0 text-[#FF5000] text-[16px] text-center group-hover:text-[#ff6a00] transition-colors"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        Read more
                      </p>
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute border-[#FF5000] border-b border-solid inset-0 pointer-events-none group-hover:border-[#ff6a00] transition-colors"
                    />
                  </div>
                  <div className="relative shrink-0 size-[18px]" data-name="R icon">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 18 18"
                    >
                      <g id="R icon">
                        <path
                          d="M10.5 4.5L9.45 5.55L12.15 8.25H3V9.75H12.15L9.45 12.45L10.5 13.5L15 9L10.5 4.5Z"
                          fill="currentColor"
                          id="Vector"
                          className="text-[#FF5000] group-hover:text-[#ff6a00] transition-colors"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
