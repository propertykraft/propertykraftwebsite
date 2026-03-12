"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import { Logo } from "./logo";
import { navLinks } from "./data";

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <header className="relative z-50 bg-navy">
      {/* Atmospheric gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1200px 1100px at 30% 15%, rgba(255, 255, 255, 0.07) 0%, rgba(15, 23, 42, 0) 70%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between py-4 md:py-6">
        <Logo />

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2"
          ref={dropdownRef}
        >
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1.5 text-white hover:text-pk-orange transition-colors duration-200 text-[16px] font-normal bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute top-[calc(100%+12px)] left-0 bg-white rounded-xl py-2 z-50"
                    style={{
                      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                      border: "1px solid rgba(193, 197, 191, 0.3)",
                    }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-6 py-3.5 text-[13px] text-pk-text hover:text-pk-orange hover:bg-[#fff2eb] transition-all duration-200 whitespace-nowrap border-b border-[rgba(193,197,191,0.2)] last:border-b-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-pk-orange transition-colors duration-200 text-[16px] font-normal"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white hover:text-pk-orange transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 shadow-lg">
          <div className="flex flex-col py-4 px-6">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full text-left py-3 font-medium text-[16px] text-white hover:text-pk-orange transition-colors flex items-center justify-between bg-transparent border-none cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 text-[14px] text-white/80 hover:text-pk-orange transition-colors"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 font-medium text-[16px] text-white hover:text-pk-orange transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
