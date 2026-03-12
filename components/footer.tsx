import Link from "next/link";

import { footerLinks } from "./data";

export function Footer() {
  return (
    <footer className="bg-white w-full">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-12">
        {/* Divider line */}
        <div className="h-px bg-pk-border" />

        {/* Content row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <p className="text-[14px] text-[#838b7f] font-normal">
            ©{new Date().getFullYear()} Property Kraft · All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] text-[#656b61] font-medium hover:text-pk-orange transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
