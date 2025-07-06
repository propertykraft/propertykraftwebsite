import { Phone } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto text-center space-y-6 mt-10 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up">
            Find answers to common questions about Property Kraft Africa's
            property and facility management services. Can't find what you're
            looking for? Contact us directly.
          </p>

          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="group bg-transparent hover:bg-orange-500 hover:text-white mt-8"
              aria-label="Contact Us"
            >
              <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
