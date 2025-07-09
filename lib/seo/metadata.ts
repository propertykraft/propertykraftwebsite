import { Metadata } from "next";

import { BASE_URL } from "../constants";

const VERSION = Date.now();

export const seoMetadata: Metadata = {
  title: {
    default:
      "Property Kraft Africa | Professional Property & Facility Management Solutions",
    template: "%s | Property Kraft Africa",
  },
  description:
    "Property Kraft delivers trusted, end-to-end property and facility management for residential and commercial properties. Our tailored solutions maximize value, ensure seamless service, and provide full operational transparency. Experience Africa's benchmark for excellence in property management.",

  icons: {
    icon: [
      {
        url: `${BASE_URL}/favicon.ico?v=${VERSION}`,
        rel: "icon",
        type: "image/x-icon",
        sizes: "48x48",
      },
      {
        url: `${BASE_URL}/android-chrome-192x192.png?v=${VERSION}`,
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: `${BASE_URL}/android-chrome-512x512.png?v=${VERSION}`,
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: `${BASE_URL}/apple-touch-icon.png?v=${VERSION}`,
        rel: "apple-touch-icon",
        sizes: "180x180",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: `${BASE_URL}/favicon.svg?v=${VERSION}`,
      },
    ],
  },

  keywords: [
    "Property Kraft Africa",
    "Property Kraft",
    "Property Craft Africa",
    "PropertyCraft",
    "property management",
    "facility management",
    "residential",
    "commercial",
    "cleaning services",
    "security services",
    "maintenance",
    "landscaping",
    "waste management",
    "Africa",
    "operational transparency",
    "end-to-end solutions",
    "client satisfaction",
    "real estate",
    "property solutions",
    "professional management",
    "24/7 support",
    "value maximization",
    "seamless service",
    "trusted management",
    "property oversight",
    "facility services",
    "property care",
    "property maintenance",
    "property security",
    "property cleaning",
    "property support",
    "property excellence",
    "properties",
    "Lagos",
    "Lekki",
    "Victoria Island",
    "Ikoyi",
    "Real estate property management",
    "property management in Nigeria",
    "property management",
    "property management service",
    "property management Lagos",
    "facility management Nigeria",
    "property management Lekki",
    "facility management Victoria Island",
    "residential property management services Lagos",
  ],

  authors: [{ name: "Property Kraft Team", url: BASE_URL }],
  category: "Property & Facility Management",
  creator: "Property Kraft Africa",
  publisher: "Property Kraft Africa",

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Property Kraft Africa",
    title:
      "Property Kraft Africa | Professional Property & Facility Management Solutions",
    description:
      "Property Kraft delivers trusted, end-to-end property and facility management for residential and commercial properties. Our tailored solutions maximize value, ensure seamless service, and provide full operational transparency.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Property Kraft Property & Facility Management",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Property Kraft Africa | Professional Property & Facility Management Solutions",
    description:
      "Property Kraft delivers trusted, end-to-end property and facility management for residential and commercial properties. Our tailored solutions maximize value, ensure seamless service, and provide full operational transparency.",
    creator: "@propertykraft",
    site: "@propertykraft",
    images: [`${BASE_URL}/og-image.png?v=${VERSION}`],
  },

  alternates: {
    canonical: BASE_URL,
  },

  // verification: {
  //   google: "google-verification-code",
  //   yandex: "yandex-verification-code",
  // },

  other: {
    "geo.region": "NG-LA",
    "geo.placename": "Lekki, Lagos State",
    "geo.position": "6.5244;3.3792",
    ICBM: "6.5244, 3.3792",
    "DC.title":
      "Property Kraft Africa | Professional Property & Facility Management Solutions",
    "DC.creator": "Property Kraft Africa",
    "DC.subject":
      "Property Management, Facility Management, Real Estate Services",
    "DC.description":
      "Property Kraft delivers trusted, end-to-end property and facility management for residential and commercial properties.",
    "DC.publisher": "Property Kraft Africa",
    "DC.contributor": "Property Kraft Team",
    "DC.date": new Date().toISOString(),
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": BASE_URL,
    "DC.language": "en",
    "DC.coverage": "Lagos",
    "DC.rights": "Copyright © 2025 Property Kraft Africa. All rights reserved.",
  },
};
