export function WhoWeAre() {
  return (
    <section className="relative w-full bg-white py-[80px] md:py-[100px]">
      <div className="max-w-[1200px] w-full mx-auto px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-semibold text-navy text-[32px] md:text-[40px] leading-[1.2] mb-8 text-center">
            Who We Are
          </h2>

          <div className="space-y-6">
            <p className="font-normal text-navy/70 text-[17px] md:text-[18px] leading-[1.8]">
              Property Kraft was created to improve how properties are managed.
              Many landlords struggle with fragmented communication, reactive
              maintenance, and inconsistent tenant coordination.
            </p>
            <p className="font-normal text-navy/70 text-[17px] md:text-[18px] leading-[1.8]">
              Our approach brings structure to property operations through clear
              processes, reliable oversight, and organized documentation.
            </p>
            <p className="font-normal text-navy/70 text-[17px] md:text-[18px] leading-[1.8]">
              Alongside our management services, we also built Lizt — a
              WhatsApp-based tool that helps simplify communication between
              landlords, tenants, and facility teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
