import type { MetadataRoute } from "next";
import { institutions } from "@/data/institutions";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = ["", "/institutions", "/stocks", "/how-it-works", "/account"];

  return [
    ...pages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...institutions.map((i) => ({
      url: `${siteConfig.url}/institutions/${i.slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.6,
    })),
  ];
}
