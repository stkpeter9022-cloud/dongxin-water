import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dongxin24.com"),

  title: {
    default: "棟鑫水電｜雙北24小時水電急修",
    template: "%s｜棟鑫水電",
  },

  description:
    "棟鑫水電提供台北市、新北市24小時水電急修，專業處理跳電維修、漏水抓漏、水管疏通、馬桶不通、抽水馬達、沈水馬達、加壓馬達、室內配線、配電箱維修、電表底座更換。",

  keywords: [
    "棟鑫水電",
    "水電",
    "水電行",
    "24小時水電",
    "水電急修",
    "台北水電",
    "新北水電",
    "雙北水電",
    "跳電維修",
    "漏水處理",
    "抓漏",
    "馬桶不通",
    "水管疏通",
    "抽水馬達",
    "沈水馬達",
    "加壓馬達",
    "配電箱維修",
    "電表底座更換",
    "無熔絲開關更換",
    "室內配線",
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
  },

  openGraph: {
    title: "棟鑫水電｜雙北24小時水電急修",
    description:
      "24小時快速到府，專業處理跳電、漏水、抓漏、水管疏通、馬桶不通、抽水馬達及配電箱維修。",
    url: "https://dongxin24.com",
    siteName: "棟鑫水電",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "https://dongxin24.com/case3.jpg",
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
    images: ["https://dongxin24.com/case3.jpg"],
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16737912362"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16737912362');
            gtag('config', 'AW-18052969763');
          `}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}