import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://你的網域.com"), // 上線後改成自己的網址

  title: {
    default: "棟鑫水電｜雙北24小時水電急修",
    template: "%s｜棟鑫水電",
  },

  description:
    "棟鑫水電提供雙北24小時水電急修服務，專業處理跳電、漏水、抓漏、水管疏通、馬桶不通、抽水馬達、沈水馬達、加壓馬達、室內配線、電表底座更換、無熔絲開關更換。",

  keywords: [
    "棟鑫水電",
    "24小時水電",
    "水電行",
    "水電維修",
    "跳電維修",
    "漏水",
    "抓漏",
    "馬桶不通",
    "水管疏通",
    "抽水馬達",
    "沈水馬達",
    "加壓馬達",
    "室內配線",
    "電表底座更換",
    "無熔絲開關更換",
    "雙北水電",
    "台北水電",
    "新北水電",
  ],

  authors: [
    {
      name: "棟鑫水電",
    },
  ],

  creator: "棟鑫水電",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "棟鑫水電｜雙北24小時水電急修",
    description:
      "24小時快速到府，專業處理跳電、漏水、抓漏、水管、馬達維修。",
    url: "https://dongxin24.com",
    siteName: "棟鑫水電",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/case3.jpg",
        width: 1200,
        height: 630,
        alt: "棟鑫水電",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "棟鑫水電",
    description: "雙北24小時水電急修",
    images: ["/case3.jpg"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}