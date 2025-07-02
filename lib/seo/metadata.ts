import { Metadata } from "next";

import { BASE_URL } from "../constants";

const VERSION = Date.now();

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Property Kraft | Professional Property & Facility Management Solutions",
    template: "%s | Property Kraft",
  },
  description:
    "Property Kraft delivers trusted, end-to-end property and facility management for residential and commercial properties. Our tailored solutions maximize value, ensure seamless service, and provide full operational transparency. Experience Africa's benchmark for excellence in property management.",

  icons: {
    icon: [
      {
        url: `${BASE_URL}/favicon.ico`,
        rel: "icon",
        type: "image/x-icon",
        sizes: "48x48",
      },
      {
        url: `${BASE_URL}/android-chrome-192x192.png`,
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: `${BASE_URL}/android-chrome-512x512.png`,
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: `${BASE_URL}/apple-touch-icon.png`,
        rel: "apple-touch-icon",
        sizes: "180x180",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: `${BASE_URL}/favicon.svg`,
        color: "#4d1481",
      },
    ],
  },

  keywords: [
    "Property Kraft",
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
  ],

  authors: [{ name: "Property Kraft Team", url: BASE_URL }],
  category: "Property & Facility Management",
  creator: "Property Kraft",
  publisher: "Property Kraft",

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
    siteName: "Property Kraft",
    title:
      "Property Kraft | Professional Property & Facility Management Solutions",
    description:
      "Property Kraft delivers trusted, end-to-end property and facility management for residential and commercial properties. Our tailored solutions maximize value, ensure seamless service, and provide full operational transparency.",
    images: [
      {
        url: `${BASE_URL}/og-image.png?v=${VERSION}`,
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
      "Property Kraft | Professional Property & Facility Management Solutions",
    description:
      "Property Kraft delivers trusted, end-to-end property and facility management for residential and commercial properties. Our tailored solutions maximize value, ensure seamless service, and provide full operational transparency.",
    creator: "@propertykraft",
    images: [`${BASE_URL}/og-image.png?v=${VERSION}`],
  },
};
