export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navLinks: NavLink[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Property Management", href: "/services/property-management" },
      { label: "Facility Management", href: "/services/facility-management" },
      { label: "Rent Administration", href: "/services/rent-administration" },
      {
        label: "Tenant Onboarding & KYC",
        href: "/services/tenant-onboarding-kyc",
      },
      {
        label: "Lizt — Smart WhatsApp Management",
        href: "/services/lizt",
      },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks = [
  { label: "Term of use", href: "/legal?tab=terms" },
  { label: "Privacy policy", href: "/legal?tab=privacy" },
];
