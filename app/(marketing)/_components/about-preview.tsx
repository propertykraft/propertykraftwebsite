import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Property Kraft is a professional property and facility management
              company supporting multi-location residential and commercial
              properties. We deliver trusted, end-to-end property solutions that
              maximize value and ensure seamless service.
            </p>
          </div>

          <Link href="/about">
            <Button
              size="lg"
              variant="outline"
              className="group bg-transparent mt-6"
              aria-label="Learn more about us"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
