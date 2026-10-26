import type { MetadataRoute } from "next";
import { guides } from "./lib/knowledge";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.dongxin24.com";

  return [
    ...["/knowledge", ...guides.map(guide => `/knowledge/${guide.slug}`)].map(path => ({ url: baseUrl + path, lastModified: "2026-10-27" })),
    ...["/projects", "/shui-dian-gong-cheng", "/gei-pai-shui"].map(path => ({ url: baseUrl + path, lastModified: "2026-10-27" })),
    {
      url: baseUrl,
      lastModified: "2026-10-27",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/lou-shui`,
      lastModified: "2026-10-27",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/zhua-lou`,
      lastModified: "2026-10-27",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tiao-dian`,
      lastModified: "2026-10-27",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/shui-guan`,
      lastModified: "2026-10-27",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ma-tong`,
      lastModified: "2026-10-27",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chou-shui-ma-da`,
      lastModified: "2026-10-27",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/shen-shui-ma-da`,
      lastModified: "2026-10-27",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/shi-nei-pei-xian`,
      lastModified: "2026-10-27",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wei-yu`,
      lastModified: "2026-10-27",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2026-10-27",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-10-27",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
