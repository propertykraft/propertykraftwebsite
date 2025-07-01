"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import {
  Building,
  Sparkles,
  Shield,
  Wrench,
  Trees,
  Trash2,
  CheckCircle,
  Clock,
  Users,
  Award,
} from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Facility Management",
    description:
      "General supervision and operations management across residential and commercial spaces. We ensure your properties run smoothly with comprehensive oversight and professional management.",
    features: [
      "24/7 Operations Monitoring",
      "Vendor Management",
      "Compliance Oversight",
      "Performance Reporting",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "Cleaning and Janitorial Services",
    description:
      "Daily and periodic cleaning services for common areas and interiors. Our professional cleaning teams maintain the highest standards of cleanliness and hygiene.",
    features: [
      "Daily Cleaning",
      "Deep Cleaning",
      "Sanitization Services",
      "Specialized Equipment",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Shield,
    title: "Security Services",
    description:
      "Trained security personnel and access control systems to keep properties safe. We provide comprehensive security solutions tailored to your property needs.",
    features: [
      "24/7 Security Personnel",
      "Access Control Systems",
      "CCTV Monitoring",
      "Emergency Response",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    icon: Wrench,
    title: "Maintenance (Electrical, Plumbing, HVAC)",
    description:
      "Preventive and emergency maintenance support for all building systems. Our skilled technicians ensure your property infrastructure operates efficiently.",
    features: [
      "Preventive Maintenance",
      "Emergency Repairs",
      "System Upgrades",
      "Regular Inspections",
    ],
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Trees,
    title: "Landscaping and Groundskeeping",
    description:
      "Lawn care, external beautification, and environmental maintenance. We create and maintain beautiful outdoor spaces that enhance property value.",
    features: [
      "Lawn Care",
      "Garden Maintenance",
      "Tree Services",
      "Irrigation Systems",
    ],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Trash2,
    title: "Waste Management and Utilities Monitoring",
    description:
      "Waste collection schedules and energy/water usage monitoring. We help optimize utility costs while maintaining environmental responsibility.",
    features: [
      "Waste Collection",
      "Recycling Programs",
      "Utility Monitoring",
      "Cost Optimization",
    ],
    color: "from-purple-500 to-purple-600",
  },
];

const stats = [
  {
    icon: Clock,
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance",
  },
  {
    icon: Users,
    number: "500+",
    label: "Properties Managed",
    description: "Diverse portfolio coverage",
  },
  {
    icon: Award,
    number: "98%",
    label: "Client Satisfaction",
    description: "Consistently high ratings",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-300/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium animate-bounce-subtle">
                ✨ Professional Services
              </div>
              <h1 className="text-5xl font-bold text-gray-900 animate-fade-in-up">
                Our Core Services
              </h1>
              <p
                className="text-xl text-gray-600 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                We offer a wide range of professional property and facility
                management services designed to keep your buildings functional,
                secure, and efficient.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-orange-500 mb-1">
                    {stat.label}
                  </div>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="space-y-4 flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <span className="text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-xl opacity-90">
                Contact us today to discuss how we can help manage your property
                with excellence and professionalism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open("/contact", "_self")}
                  className="px-8 py-4 bg-white text-orange-500 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get a Quote
                </button>
                <button
                  onClick={() =>
                    window.open("https://wa.me/2348165490072", "_blank")
                  }
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-orange-500 transition-colors"
                >
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
