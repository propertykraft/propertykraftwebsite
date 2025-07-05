"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, LogIn } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { navLinks } from "./data";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium hover:text-orange-500 transition-colors ${
                pathname === link.href ? "text-orange-500" : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-4 py-4 border-b">
                  <Logo />
                </div>
                <nav className="flex flex-col gap-2 px-4 py-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={`block py-2 px-2 rounded font-medium text-lg transition-colors ${
                          pathname === link.href
                            ? "text-orange-500 bg-orange-50"
                            : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-2 px-4 pb-6">
                  <Button variant="link" size="sm" asChild>
                    <a
                      href="https://www.getpanda.co"
                      target="_blank"
                      className="flex items-center space-x-2 bg-transparent"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Client Login</span>
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() =>
                      window.open("https://wa.me/2348165490072", "_blank")
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex items-center space-x-3">
          <Button
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={() => window.open("https://wa.me/2348165490072", "_blank")}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <Button variant="link" size="sm" asChild>
            <a
              href="https://www.getpanda.co"
              target="_blank"
              className="flex items-center space-x-2 bg-transparent"
            >
              <LogIn className="w-4 h-4" />
              <span>Client Login</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
