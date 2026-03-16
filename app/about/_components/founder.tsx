import Image from "next/image";

import { founder } from "./data";

export function Leadership() {
  return (
    <section className="relative w-full bg-white pt-[140px] pb-[80px]">
      <div className="max-w-[1200px] w-full mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-[60px] lg:gap-[80px]">
          {/* Left Column */}
          <div>
            <p className="font-normal text-navy/50 text-[13px] uppercase tracking-[0.15em] mb-4">
              Our Team
            </p>
            <h2 className="font-normal text-navy text-[42px] md:text-[48px] leading-[1.1] mb-6">
              Leadership
            </h2>
            <p className="font-normal text-navy/70 text-[15px] md:text-[16px] leading-[1.7]">
              Our leadership brings together expertise across product,
              operations, compliance, and real estate to build structured systems
              that scale with clarity and accountability.
            </p>
          </div>

          {/* Right Column — Founder */}
          <div>
            <div className="relative w-full max-w-[400px] h-[420px] mb-6">
              <Image
                src={founder.imgUrl}
                alt={founder.name}
                fill
                className="object-cover"
              />
              {founder.linkedIn && (
                <a
                  href={founder.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 w-8 h-8 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <span className="text-navy text-[12px] font-semibold">in</span>
                </a>
              )}
            </div>

            <h3 className="font-semibold text-navy text-[24px] md:text-[26px] leading-[1.2] mb-1.5">
              {founder.name}
            </h3>
            <p className="font-normal text-pk-orange text-[14px] leading-[1.5] mb-5">
              {founder.role}
            </p>

            <div className="max-w-[600px]">
              <p className="font-normal text-navy/70 text-[15px] md:text-[16px] leading-[1.7]">
                {founder.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
