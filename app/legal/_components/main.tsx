"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export const MainComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") === "terms" ? "terms" : "privacy";

  const handleTabChange = (tab: "privacy" | "terms") => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("tab", tab);
    router.push(`?${params.toString()}`);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-5 md:px-10">
        {/* Tab Switcher */}
        <div className="flex gap-2 mb-12 border-b border-pk-border">
          <TabButton
            active={activeTab === "privacy"}
            onClick={() => handleTabChange("privacy")}
          >
            Privacy Policy
          </TabButton>
          <TabButton
            active={activeTab === "terms"}
            onClick={() => handleTabChange("terms")}
          >
            Terms of Service
          </TabButton>
        </div>

        {activeTab === "privacy" ? <PrivacyContent /> : <TermsContent />}

        {/* Contact CTA */}
        <div className="mt-16 bg-navy rounded-xl px-8 py-12 text-center">
          <h3 className="font-semibold text-white text-[24px] md:text-[28px] mb-4">
            Questions About Our Policies?
          </h3>
          <p className="font-normal text-white/80 text-[16px] mb-6">
            Contact us if you have any questions about our privacy policy or
            terms of service.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-pk-orange hover:bg-pk-orange-hover transition-colors text-white px-7 py-3 rounded-lg font-medium text-[15px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 text-[15px] font-medium transition-colors border-b-2 -mb-px ${
        active
          ? "border-pk-orange text-pk-orange"
          : "border-transparent text-pk-text-light hover:text-navy"
      }`}
    >
      {children}
    </button>
  );
}

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h3 className="font-semibold text-navy text-[20px] md:text-[22px] mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="font-normal text-pk-text-light text-[15px] leading-[1.7] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-pk-text-light"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function PrivacyContent() {
  return (
    <div>
      <p className="font-normal text-pk-text-light text-[14px] mb-8">
        Last updated: January 1, 2025
      </p>

      <SectionBlock title="Information We Collect">
        <p className="font-normal text-pk-text-light text-[15px] leading-[1.7] mb-3">
          We collect the following personal information:
        </p>
        <BulletList
          items={[
            "Name, email address, and phone number",
            "Property addresses and details",
            "Financial information for rent collection",
            "Communication preferences",
          ]}
        />
      </SectionBlock>

      <SectionBlock title="How We Use Your Information">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-pk-border rounded-lg p-5">
            <h4 className="font-medium text-navy text-[16px] mb-3">
              Service Delivery
            </h4>
            <BulletList
              items={[
                "Property management services",
                "Tenant screening and placement",
                "Maintenance coordination",
                "Financial reporting",
              ]}
            />
          </div>
          <div className="border border-pk-border rounded-lg p-5">
            <h4 className="font-medium text-navy text-[16px] mb-3">
              Communication
            </h4>
            <BulletList
              items={[
                "Service updates and notifications",
                "Emergency communications",
                "Marketing communications (opt-in)",
                "Customer support",
              ]}
            />
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Data Protection">
        <p className="font-normal text-pk-text-light text-[15px] leading-[1.7] mb-3">
          We implement industry-standard security measures to protect your
          personal information:
        </p>
        <BulletList
          items={[
            "SSL encryption for data transmission",
            "Secure servers with regular backups",
            "Limited access to authorized personnel only",
            "Regular security audits and updates",
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Your Rights">
        <div className="grid md:grid-cols-3 gap-4">
          {["Access", "Correction", "Deletion"].map((right) => (
            <div
              key={right}
              className="border border-pk-border rounded-lg p-4 text-center"
            >
              <h4 className="font-medium text-navy text-[16px] mb-1">
                {right}
              </h4>
              <p className="text-pk-text-light text-[14px]">
                {right === "Access" && "Request access to your personal data"}
                {right === "Correction" && "Update or correct your information"}
                {right === "Deletion" && "Request deletion of your data"}
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>
    </div>
  );
}

function TermsContent() {
  return (
    <div>
      <p className="font-normal text-pk-text-light text-[14px] mb-8">
        Last updated: January 1, 2025
      </p>

      <SectionBlock title="Service Description">
        <p className="font-normal text-pk-text-light text-[15px] leading-[1.7] mb-3">
          Property Kraft provides comprehensive property management services
          including:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <BulletList
            items={[
              "Tenant screening and placement",
              "Rent collection and financial management",
              "Property maintenance and repairs",
              "Legal compliance and documentation",
            ]}
          />
          <BulletList
            items={[
              "24/7 emergency response",
              "Regular property inspections",
              "Marketing and advertising",
              "Detailed financial reporting",
            ]}
          />
        </div>
      </SectionBlock>

      <SectionBlock title="Client Responsibilities">
        <BulletList
          items={[
            "Provide accurate property information and documentation",
            "Maintain property insurance as required by law",
            "Respond promptly to requests for information or decisions",
            "Pay management fees and expenses as agreed",
            "Comply with all applicable laws and regulations",
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Fees and Payment">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-pk-border rounded-lg p-5">
            <h4 className="font-medium text-navy text-[16px] mb-3">
              Management Fees
            </h4>
            <BulletList
              items={[
                "Monthly management fee: 8-12% of rent collected",
                "Tenant placement fee: One month's rent",
                "Lease renewal fee: $200 per renewal",
              ]}
            />
          </div>
          <div className="border border-pk-border rounded-lg p-5">
            <h4 className="font-medium text-navy text-[16px] mb-3">
              Additional Services
            </h4>
            <BulletList
              items={[
                "Property inspections: $150 per inspection",
                "Eviction processing: $500 + legal costs",
                "Maintenance coordination: 10% markup",
              ]}
            />
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Limitation of Liability">
        <p className="font-normal text-pk-text-light text-[15px] leading-[1.7] mb-3">
          Property Kraft&apos;s liability is limited to the management fees paid
          in the preceding 12 months. We are not liable for:
        </p>
        <BulletList
          items={[
            "Property damage beyond our reasonable control",
            "Tenant actions or defaults",
            "Market conditions affecting rental income",
            "Force majeure events",
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Termination">
        <p className="font-normal text-pk-text-light text-[15px] leading-[1.7] mb-3">
          Either party may terminate this agreement with 30 days written notice.
          Upon termination:
        </p>
        <BulletList
          items={[
            "All funds will be transferred within 30 days",
            "Property records will be provided",
            "Ongoing leases may be transferred",
            "Final accounting will be completed",
          ]}
        />
      </SectionBlock>
    </div>
  );
}
