import { MetadataRoute } from "next";

import { BASE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/services", "/contact", "/legal"],
      disallow: ["/private/", "/_next/", "/api/", "/admin/"],
      crawlDelay: 1,
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
