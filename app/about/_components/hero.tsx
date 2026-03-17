export function Hero() {
  return (
    <section className="relative w-full bg-white py-[80px] md:py-[120px]">
      <div className="max-w-[1200px] w-full mx-auto px-5 md:px-10">
        <div className="max-w-[800px]">
          <div className="w-[60px] h-[3px] bg-pk-orange mb-8" />

          <h1 className="font-semibold text-navy text-[28px] md:text-[48px] lg:text-[56px] leading-[1.15] mb-6">
            Bringing Structure to Modern Property Management.
          </h1>

          <div className="space-y-6">
            <p className="font-normal text-navy/70 text-[15px] md:text-[20px] leading-[1.7]">
              Property Kraft is a property and facility management company that
              helps landlords and organizations manage buildings with clarity,
              accountability, and reliable operational oversight.
            </p>
            <p className="font-normal text-navy/70 text-[15px] md:text-[20px] leading-[1.7]">
              We combine experienced management with structured systems to keep
              properties running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
