"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Building,
  Phone,
  Handshake,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const FloatingCard = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`absolute animate-float ${className}`}
      style={{
        animationDelay: `${delay}s`,
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium animate-bounce-subtle">
                ✨ Your Trusted Property Partner
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Your Trusted Partner in</span>
                <br />
                <span className="text-orange-500 animate-gradient-text">
                  Property Management
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Managing your property with care, professionalism, and
                transparency. Experience guaranteed rent and peace of mind.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white group w-full"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="group bg-transparent w-full"
                >
                  <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse-gentle">
              <Building className="w-12 h-12 text-white" />
            </div>

            {/* Floating Cards */}
            <FloatingCard delay={0} className="top-8 right-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={1} className="bottom-20 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">
                      Properties Managed
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={2} className="top-16 left-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      Trusted Partner
                    </div>
                    <div className="text-sm text-gray-600">Since 2025</div>
                  </div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={0.5} className="bottom-8 left-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 shadow-xl text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-lg font-bold">Guaranteed Rent</div>
                  <div className="text-sm opacity-90">100% Secure</div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
