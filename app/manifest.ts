import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "棟鑫水電",
    short_name: "棟鑫水電",
    description: "雙北24小時水電急修｜跳電、漏水、抓漏、馬達、水管配置",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    lang: "zh-TW",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}