import { Users, DollarSign, Wrench } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Tenant & Lease Administration",
    description:
      "We oversee tenant onboarding, lease documentation, renewals, and communication — ensuring every agreement is structured, documented, and properly managed from start to finish.",
  },
  {
    icon: DollarSign,
    title: "Rent & Financial Management",
    description:
      "We coordinate rent administration, track payments, monitor outstanding balances, and provide clear financial visibility so you always understand the performance of your property.",
  },
  {
    icon: Wrench,
    title: "Facility & Maintenance",
    description:
      "We manage maintenance requests, inspections, and vendor coordination to keep your properties running efficiently and professionally — without reactive chaos.",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-32">
        <div className="flex flex-col gap-12 md:gap-16 items-center w-full">
          {/* Section heading */}
          <div className="flex flex-col gap-5 items-start w-full">
            <p className="font-medium leading-[1.32] text-pk-orange text-[16px] tracking-[1px] uppercase">
              Solutions
            </p>
            <h2 className="font-semibold leading-[1.15] text-[#141513] text-[32px] md:text-[48px]">
              Complete Oversight for Your Properties.
            </h2>
          </div>

          {/* Feature cards */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start justify-center w-full">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex-1 min-w-0 md:min-w-[260px] relative"
              >
                <div className="flex flex-col gap-6 items-start pt-10 pb-8">
                  {/* Icon */}
                  <div className="shrink-0 size-12">
                    <feature.icon
                      className="size-12 text-pk-orange"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-3 w-full">
                    <h3 className="font-semibold leading-[1.28] text-pk-text text-[20px]">
                      {feature.title}
                    </h3>
                    <p className="font-normal leading-[1.58] text-pk-text-light text-[16px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {/* Top border */}
                <div
                  aria-hidden="true"
                  className="absolute border-pk-border/40 border-solid border-t inset-0 pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
