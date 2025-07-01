"use client";

import type React from "react";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  Clock,
  User,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "info@propertykraft.com",
    description: "Send us an email anytime",
    action: () => window.open("mailto:info@propertykraft.com", "_self"),
  },
  {
    icon: Phone,
    title: "Phone/WhatsApp",
    value: "+234 816 549 0072",
    description: "Call or message us directly",
    action: () => window.open("tel:+2348165490072", "_self"),
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    value: "Chat Now",
    description: "Quick response guaranteed",
    action: () => window.open("https://wa.me/2348165490072", "_blank"),
  },
  {
    icon: MapPin,
    title: "Office Hours",
    value: "Mon-Fri, 9 AM – 6 PM",
    description: "We're here to help",
    action: () => {},
  },
];

const responsePolicy = [
  {
    icon: CheckCircle,
    title: "Acknowledgment",
    time: "Within 2 hours",
    description: "We confirm receipt of your message",
  },
  {
    icon: CheckCircle,
    title: "First Response",
    time: "Within 24 hours",
    description: "Initial response with next steps",
  },
  {
    icon: CheckCircle,
    title: "Minor Issues",
    time: "1-3 business days",
    description: "Quick resolution for simple matters",
  },
  {
    icon: CheckCircle,
    title: "Complex Issues",
    time: "Up to 7 business days",
    description: "Thorough handling of complex requests",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                ✨ Get In Touch
              </div>
              <h1 className="text-5xl font-bold text-gray-900 animate-fade-in-up">
                Contact and Support
              </h1>
              <p
                className="text-xl text-gray-600 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                We're here to support residents, tenants, and partners. Reach
                out using the form below or through any of our direct contact
                channels.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  onClick={method.action}
                  className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <div className="text-orange-500 font-medium mb-1">
                    {method.value}
                  </div>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </h2>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="transition-all duration-300 focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="transition-all duration-300 focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone (Optional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="transition-all duration-300 focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you"
                        rows={5}
                        className="transition-all duration-300 focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Response Policy */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Response Policy
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {responsePolicy.map((policy, index) => (
                      <div
                        key={policy.title}
                        className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl"
                      >
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <policy.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {policy.title}
                          </div>
                          <div className="text-orange-500 font-medium text-sm">
                            {policy.time}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {policy.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Escalation Contact
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="font-semibold text-gray-900">
                      Facility Manager: Miracle
                    </div>
                    <div className="text-gray-600">Phone: 08165490072</div>
                    <div className="text-gray-600">
                      For urgent matters requiring immediate attention
                    </div>
                  </div>
                </div>
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
