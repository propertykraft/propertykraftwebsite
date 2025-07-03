import Link from "next/link";
import { Home, Phone, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-orange-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
        </div>

        <Card className="text-left">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              If you're having trouble finding what you're looking for, we're
              here to help.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-600" />
                <div>
                  <div className="font-medium">Call us</div>
                  <div className="text-sm text-gray-600">+234 816 549 0072</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-600" />
                <div>
                  <div className="font-medium">Email us</div>
                  <div className="text-sm text-gray-600">
                    info@propertykraft.africa
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-medium mb-3">Popular Pages</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link href="/about" className="text-orange-600 hover:underline">
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-orange-600 hover:underline"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="text-orange-600 hover:underline"
                >
                  Contact
                </Link>
                <Link href="/legal" className="text-orange-600 hover:underline">
                  Legal Info
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
