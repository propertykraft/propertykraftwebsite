import Link from "next/link";

export function PhilosophyCta() {
  return (
    <section className="relative w-full bg-navy py-14 mb-12">
      <div className="max-w-[1200px] w-full mx-auto px-5 md:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-semibold text-white text-[24px] md:text-[40px] leading-[1.1] mb-5">
            Our Philosophy
          </h2>

          <p className="font-normal text-white/80 text-[15px] md:text-[20px] leading-[1.6] mb-8">
            We believe property management should be{" "}
            <span className="font-medium text-pk-orange">organized</span>,{" "}
            <span className="font-medium text-pk-orange">transparent</span>,{" "}
            <span className="font-medium text-pk-orange">documented</span>, and{" "}
            <span className="font-medium text-pk-orange">reliable</span> — not
            dependent on scattered messages, memory, or informal processes.
          </p>

          <p className="font-normal text-white text-[15px] md:text-[20px] leading-[1.4] mb-5">
            Want us to manage your property?
          </p>

          <Link
            href="/contact"
            className="inline-block bg-pk-orange hover:bg-pk-orange-hover transition-colors text-white px-8 py-3.5 rounded-lg font-medium text-[16px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
