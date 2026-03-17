import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-navy w-full mb-12">
      <div className="flex flex-col items-center py-12 md:py-16 px-4 md:px-8">
        <div className="flex flex-col gap-8 items-center justify-center max-w-[1200px] w-full">
          <div className="flex flex-col gap-5 items-center justify-center max-w-[900px] w-full mx-auto">
            <h2 className="font-semibold leading-[1.2] text-white text-[24px] md:text-[40px] text-center">
              Let Us Manage Your Property With Confidence.
            </h2>
            <p className="font-normal leading-[1.6] text-[#e2e8f0] text-[14px] md:text-[18px] text-center">
              From tenant onboarding to rent coordination and facility oversight,
              Property Kraft handles the details — so you don&apos;t have to.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-pk-orange hover:bg-[#e64800] transition-colors rounded-[10px] text-white font-bold text-[16px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
