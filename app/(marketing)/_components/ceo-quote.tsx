import { Star } from "lucide-react";

export function CEOQuote() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-2xl font-bold text-white">OO</span>
          </div>

          <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed italic">
            "At Property Kraft, we don't just manage properties – we transform
            them into thriving ecosystems that deliver exceptional value and
            peace of mind to every stakeholder."
          </blockquote>

          <div className="space-y-2">
            <div className="text-xl font-semibold">Olatunji Oginni</div>
            <div className="text-orange-200">Founder & CEO, Property Kraft</div>
          </div>

          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
