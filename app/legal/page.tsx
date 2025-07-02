"use client";
import { Shield, FileText, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Legal Information
            </h1>
            <p className="text-xl opacity-90">
              Your privacy and trust are important to us. Please review our
              policies and terms of service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="privacy" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger
                  value="privacy"
                  className="flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Privacy Policy
                </TabsTrigger>
                <TabsTrigger value="terms" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Terms of Service
                </TabsTrigger>
              </TabsList>

              <TabsContent value="privacy">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Shield className="w-6 h-6 text-blue-600" />
                      Privacy Policy
                    </CardTitle>
                    <p className="text-gray-600">
                      Last updated: January 1, 2025
                    </p>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <div className="space-y-8">
                      <section>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Information We Collect
                        </h3>
                        <div className="bg-blue-50 p-6 rounded-lg">
                          <h4 className="font-semibold mb-3">
                            Personal Information
                          </h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Name, email address, and phone number</li>
                            <li>• Property addresses and details</li>
                            <li>• Financial information for rent collection</li>
                            <li>• Communication preferences</li>
                          </ul>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          How We Use Your Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-green-50 p-6 rounded-lg">
                            <h4 className="font-semibold mb-3">
                              Service Delivery
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                              <li>• Property management services</li>
                              <li>• Tenant screening and placement</li>
                              <li>• Maintenance coordination</li>
                              <li>• Financial reporting</li>
                            </ul>
                          </div>
                          <div className="bg-orange-50 p-6 rounded-lg">
                            <h4 className="font-semibold mb-3">
                              Communication
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                              <li>• Service updates and notifications</li>
                              <li>• Emergency communications</li>
                              <li>• Marketing communications (opt-in)</li>
                              <li>• Customer support</li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Data Protection
                        </h3>
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <p className="text-gray-700 mb-4">
                            We implement industry-standard security measures to
                            protect your personal information:
                          </p>
                          <ul className="space-y-2 text-gray-700">
                            <li>• SSL encryption for data transmission</li>
                            <li>• Secure servers with regular backups</li>
                            <li>
                              • Limited access to authorized personnel only
                            </li>
                            <li>• Regular security audits and updates</li>
                          </ul>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Your Rights
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <h4 className="font-semibold mb-2">Access</h4>
                            <p className="text-sm text-gray-600">
                              Request access to your personal data
                            </p>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg text-center">
                            <h4 className="font-semibold mb-2">Correction</h4>
                            <p className="text-sm text-gray-600">
                              Update or correct your information
                            </p>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg text-center">
                            <h4 className="font-semibold mb-2">Deletion</h4>
                            <p className="text-sm text-gray-600">
                              Request deletion of your data
                            </p>
                          </div>
                        </div>
                      </section>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="terms">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <FileText className="w-6 h-6 text-green-600" />
                      Terms of Service
                    </CardTitle>
                    <p className="text-gray-600">
                      Last updated: January 1, 2025
                    </p>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <div className="space-y-8">
                      <section>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Service Description
                        </h3>
                        <div className="bg-blue-50 p-6 rounded-lg">
                          <p className="text-gray-700 mb-4">
                            Property Kraft provides comprehensive property
                            management services including:
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-gray-700">
                              <li>• Tenant screening and placement</li>
                              <li>
                                • Rent collection and financial management
                              </li>
                              <li>• Property maintenance and repairs</li>
                              <li>• Legal compliance and documentation</li>
                            </ul>
                            <ul className="space-y-2 text-gray-700">
                              <li>• 24/7 emergency response</li>
                              <li>• Regular property inspections</li>
                              <li>• Marketing and advertising</li>
                              <li>• Detailed financial reporting</li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Client Responsibilities
                        </h3>
                        <div className="bg-green-50 p-6 rounded-lg">
                          <ul className="space-y-3 text-gray-700">
                            <li>
                              • Provide accurate property information and
                              documentation
                            </li>
                            <li>
                              • Maintain property insurance as required by law
                            </li>
                            <li>
                              • Respond promptly to requests for information or
                              decisions
                            </li>
                            <li>
                              • Pay management fees and expenses as agreed
                            </li>
                            <li>
                              • Comply with all applicable laws and regulations
                            </li>
                          </ul>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Fees and Payment
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-orange-50 p-6 rounded-lg">
                            <h4 className="font-semibold mb-3">
                              Management Fees
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                              <li>
                                • Monthly management fee: 8-12% of rent
                                collected
                              </li>
                              <li>• Tenant placement fee: One month's rent</li>
                              <li>• Lease renewal fee: $200 per renewal</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 p-6 rounded-lg">
                            <h4 className="font-semibold mb-3">
                              Additional Services
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                              <li>
                                • Property inspections: $150 per inspection
                              </li>
                              <li>• Eviction processing: $500 + legal costs</li>
                              <li>• Maintenance coordination: 10% markup</li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Limitation of Liability
                        </h3>
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <p className="text-gray-700 mb-4">
                            Property Kraft's liability is limited to the
                            management fees paid in the preceding 12 months. We
                            are not liable for:
                          </p>
                          <ul className="space-y-2 text-gray-700">
                            <li>
                              • Property damage beyond our reasonable control
                            </li>
                            <li>• Tenant actions or defaults</li>
                            <li>• Market conditions affecting rental income</li>
                            <li>• Force majeure events</li>
                          </ul>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Termination
                        </h3>
                        <div className="bg-red-50 p-6 rounded-lg">
                          <p className="text-gray-700 mb-4">
                            Either party may terminate this agreement with 30
                            days written notice. Upon termination:
                          </p>
                          <ul className="space-y-2 text-gray-700">
                            <li>
                              • All funds will be transferred within 30 days
                            </li>
                            <li>• Property records will be provided</li>
                            <li>• Ongoing leases may be transferred</li>
                            <li>• Final accounting will be completed</li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Contact Section */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="text-center">
                  Questions About Our Policies?
                </CardTitle>
                <p className="text-center text-gray-600">
                  Contact us if you have any questions about our privacy policy
                  or terms of service.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <Mail className="w-8 h-8 text-blue-600" />
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">legal@propertykraft.com</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Phone className="w-8 h-8 text-green-600" />
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <MapPin className="w-8 h-8 text-orange-600" />
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      123 Business Ave
                      <br />
                      Suite 100
                    </p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Contact Legal Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
