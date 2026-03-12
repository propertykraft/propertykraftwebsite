import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="relative bg-white w-full">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-16 md:pt-32 pb-14 md:pb-28">
        <div className="flex flex-col gap-5 items-start w-full">
          {/* Eyebrow */}
          <p className="font-medium leading-[1.32] text-pk-orange text-[16px] tracking-[1px] uppercase">
            About us
          </p>

          {/* Heading */}
          <h2 className="font-semibold leading-[1.16] text-[#141513] text-[32px] md:text-[48px] max-w-[800px]">
            Designed for Better Property Operations.
          </h2>

          {/* Body text */}
          <div className="font-light leading-[1.6] text-pk-text-light text-[16px] md:text-[20px] w-full mt-5 space-y-[18px]">
            <p>
              Property Kraft is a property and facility management company
              helping landlords, estates, and organizations manage properties
              with structure and clarity.
            </p>
            <p>
              From tenant management and rent administration to facility
              operations and maintenance coordination, we provide the systems and
              operational support needed to keep properties running efficiently.
            </p>
            <p>
              Our approach combines experienced management with smart technology,
              giving property owners better visibility, faster response times,
              and reliable day-to-day operations across their assets.
            </p>
          </div>

          {/* Read more link */}
          <Link href="/about" className="flex items-center gap-2 mt-2 group">
            <span className="font-medium text-pk-orange text-[16px] border-b border-pk-orange">
              Read more
            </span>
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                d="M6.75 4.5L11.25 9L6.75 13.5"
                stroke="#FF5000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
