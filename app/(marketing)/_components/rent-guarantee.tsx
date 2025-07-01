import { features } from "./data";

export function RentGuarantee() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">
            <span className="text-orange-500">Peace of Mind</span>
            <br />
            <span className="text-gray-900">with Annual Rent Guarantees</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Property Kraft, we offer landlords annual rent guarantees on
                the properties we manage — providing peace of mind, predictable
                income, and total protection against tenant defaults.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We guarantee the tenants we place in your property. If they
                default or delay payment, you still receive your full annual
                rent—promptly and in full. We also handle any required
                evictions, taking on the legal and operational burden
                completely.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our guarantee is backed by a trusted financial institution,
                giving you verified, bank-supported assurance that your income
                is secure.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-orange-500">
              <p className="text-lg font-semibold text-gray-900 italic">
                "All you need to do is sit back and receive your rent. We take
                care of the rest."
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
