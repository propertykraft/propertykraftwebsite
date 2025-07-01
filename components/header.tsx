"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`font-medium hover:text-orange-500 transition-colors ${
              typeof window !== "undefined" && window.location.pathname === "/"
                ? "text-orange-500"
                : "text-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-orange-500 transition-colors ${
              typeof window !== "undefined" &&
              window.location.pathname === "/about"
                ? "text-orange-500"
                : "text-gray-700"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`hover:text-orange-500 transition-colors ${
              typeof window !== "undefined" &&
              window.location.pathname === "/services"
                ? "text-orange-500"
                : "text-gray-700"
            }`}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`hover:text-orange-500 transition-colors ${
              typeof window !== "undefined" &&
              window.location.pathname === "/contact"
                ? "text-orange-500"
                : "text-gray-700"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex items-center space-x-2 bg-transparent"
            onClick={() => window.open("tel:+2348165490072", "_self")}
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </Button>
          <Button
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={() => window.open("https://wa.me/2348165490072", "_blank")}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
}
