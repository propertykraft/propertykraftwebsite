import Link from "next/link";

import { Logo } from "./logo";
import { navLinks } from "./data";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-gray-400">
              Your trusted partner in professional property and facility
              management.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  href={href}
                  className="block text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <div className="text-gray-400">Property Management</div>
              <div className="text-gray-400">Cleaning Services</div>
              <div className="text-gray-400">Security</div>
              <div className="text-gray-400">Maintenance</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <div>Email: info@propertykraft.com</div>
              <div>Phone: +234 816 549 0072</div>
              <div>Hours: Mon-Fri, 9 AM – 6 PM</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400">
            © {new Date().getFullYear()} Property Kraft. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
