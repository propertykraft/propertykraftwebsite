import Link from "next/link";

import { footerLinks } from "./data";

function DividerInline() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider/Inline">
      <div className="absolute inset-[-50%_0_0_0]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1204 1.5"
        >
          <g id="Divider/Inline">
            <line
              id="Line"
              stroke="var(--stroke-0, #C1C5BF)"
              x2="1204"
              y1="0.5"
              y2="0.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-white w-full flex flex-col items-center">
      <div
        className="content-stretch flex flex-col items-center max-w-[1200px] relative shrink-0 w-full px-4 md:px-8"
        data-name="Content"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#c1c5bf] border-solid border-t inset-x-0 inset-y-[0.5px] pointer-events-none mx-4 md:mx-8"
        />
        <DividerInline />
        
        <div
          className="content-center flex flex-col md:flex-row flex-wrap gap-[16px] md:gap-[32px] items-center justify-center pt-[24px] pb-[40px] md:pb-[64px] relative shrink-0 w-full text-center md:text-left"
          data-name="Footer"
        >
          <p className="flex-[1_0_0] font-sans font-normal leading-[1.4] min-h-px min-w-px not-italic relative text-[#838b7f] text-[14px] whitespace-pre-wrap">
            ©{new Date().getFullYear()} Property Kraft · All rights reserved.
          </p>
          
          <div
            className="content-stretch flex flex-wrap gap-[24px] items-center justify-center relative shrink-0"
            data-name="Group"
          >
            {footerLinks.map((link) => (
              <div
                key={link.href}
                className="content-stretch flex items-start relative shrink-0"
                data-name="Button text link"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-name="Content"
                >
                  <div
                    className="content-stretch flex items-start overflow-clip relative shrink-0"
                    data-name="Text wrapper"
                  >
                    <span
                      // href={link.href}
                      className="font-sans font-medium leading-[1.26] relative shrink-0 text-[#656b61] text-[14px] text-center transition-colors duration-200"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      {link.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
