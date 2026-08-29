import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import FloatingButtons from "./components/FloatingButtons";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dongxin24.com"),

  // ================================
  // Google 自然搜尋 SEO
  // ================================
  title: {
    default: "雙北水電｜台北新北24小時水電維修｜棟鑫水電",
    template: "%s｜棟鑫水電",
  },

  description:
    "棟鑫水電提供台北市、新北市雙北地區24小時水電維修與水電工程服務，專業處理水電急修、跳電、漏水抓漏、水管疏通、馬桶不通、抽水馬達、加壓馬達、室內配線、配電箱及衛浴工程，提供到府處理與現場評估。",

  keywords: [
    "雙北水電",
    "台北水電",
    "新北水電",
    "水電行",
    "水電維修",
    "水電工程",
    "24小時水電",
    "24小時水電維修",
    "水電急修",
    "台北水電行",
    "新北水電行",
    "台北水電維修",
    "新北水電維修",
    "跳電維修",
    "漏水處理",
    "漏水抓漏",
    "水管疏通",
    "馬桶疏通",
    "馬桶不通",
    "抽水馬達",
    "沉水馬達",
    "加壓馬達",
    "配電箱維修",
    "無熔絲開關更換",
    "電表底座更換",
    "室內配線",
    "給排水工程",
    "衛浴工程",
  ],

  authors: [
    {
      name: "棟鑫水電",
    },
  ],

  creator: "棟鑫水電",

  // ================================
  // 搜尋引擎索引
  // ================================
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ================================
  // Canonical
  // ================================
  alternates: {
    canonical: "https://www.dongxin24.com/",
  },

  // ================================
  // Open Graph
  // ================================
  openGraph: {
    title: "雙北水電｜台北新北24小時水電維修｜棟鑫水電",

    description:
      "棟鑫水電提供台北、新北雙北地區24小時水電維修與水電工程服務，專業處理跳電、漏水、抓漏、水管疏通、馬桶、馬達、室內配線及配電箱維修。",

    url: "https://www.dongxin24.com/",

    siteName: "棟鑫水電",

    locale: "zh_TW",

    type: "website",

    images: [
      {
        url: "https://www.dongxin24.com/case3.jpg",
        width: 1200,
        height: 630,
        alt: "棟鑫水電｜雙北24小時水電維修",
      },
    ],
  },

  // ================================
  // Twitter / 社群分享
  // ================================
  twitter: {
    card: "summary_large_image",
    title: "雙北水電｜台北新北24小時水電維修｜棟鑫水電",
    description: "雙北24小時水電維修，台北、新北水電急修與水電工程服務。",
    images: ["https://www.dongxin24.com/case3.jpg"],
  },

  // ================================
  // 網站圖示
  // ================================
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        {/* ==========================================
            Google Analytics 4 + Google Ads
        ========================================== */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KQMV13X0NC"
          strategy="afterInteractive"
        />

        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());

            // Google Analytics 4
            gtag('config', 'G-KQMV13X0NC');

            // Google Ads 帳號 1
            gtag('config', 'AW-16737912362');

            // Google Ads 帳號 2
            gtag('config', 'AW-18052969763');

            // Google Ads 目前使用的帳號
            gtag('config', 'AW-18404348972');
          `}
        </Script>

        {/* ==========================================
            LocalBusiness 結構化資料
        ========================================== */}

        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "棟鑫水電",
            url: "https://www.dongxin24.com/",
            telephone: "0918808209",
            image: "https://www.dongxin24.com/case3.jpg",

            description:
              "棟鑫水電提供台北市、新北市雙北地區24小時水電維修與水電工程服務。",

            areaServed: [
              {
                "@type": "City",
                name: "台北市",
              },
              {
                "@type": "City",
                name: "新北市",
              },
            ],

            serviceType: [
              "水電維修",
              "水電急修",
              "漏水抓漏",
              "跳電維修",
              "水管疏通",
              "馬桶疏通",
              "抽水馬達維修",
              "加壓馬達維修",
              "室內配線",
              "配電箱維修",
              "衛浴工程",
            ],
          })}
        </Script>
      </head>

      <body>
        {children}

        {/* ================================
            浮動電話 / LINE 按鈕
        ================================= */}
        <FloatingButtons />
      </body>
    </html>
  );
}