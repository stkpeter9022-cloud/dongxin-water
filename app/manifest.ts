import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "棟鑫水電｜雙北水電工程與24小時維修",

    short_name: "棟鑫水電",

    description:
      "棟鑫水電提供台北市、新北市水電工程與24小時緊急維修，專業處理跳電、漏水抓漏、水管疏通、馬桶不通、抽水馬達、沈水馬達、室內配線及衛浴工程。",

    start_url: "/",

    scope: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#111827",

    lang: "zh-TW",

    orientation: "portrait-primary",

    categories: [
      "business",
      "utilities",
    ],

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}