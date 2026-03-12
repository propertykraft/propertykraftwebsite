import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-navy relative w-full">
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 1200px 1100px at 30% 15%, rgba(255, 255, 255, 0.07) 0%, rgba(15, 23, 42, 0) 70%)",
        }}
      />
      <div className="relative z-[2] flex flex-col items-center pt-[140px] md:pt-[180px] pb-[80px] md:pb-[120px] px-4 md:px-8">
        <div className="max-w-[800px] text-center flex flex-col items-center gap-6">
          <h1 className="font-semibold text-white text-[42px] md:text-[56px] lg:text-[68px] leading-[1.1]">
            Frequently Asked Questions
          </h1>
          <p className="font-normal text-[#e2e8f0] text-[18px] md:text-[22px] leading-[1.6] max-w-[700px]">
            Find answers to common questions about Property Kraft&apos;s
            property and facility management services.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-2 border border-pk-orange text-white px-7 py-3 rounded-lg font-medium text-[15px] hover:bg-pk-orange transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
