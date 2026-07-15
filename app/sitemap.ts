import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dongxin24.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/lou-shui`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tiao-dian`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/shui-guan`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ma-tong`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/shen-shui-ma-da`,
      lastModified: new Date(),
    },
  ];
}