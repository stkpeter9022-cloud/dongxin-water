import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import FloatingButtons from "./components/FloatingButtons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Schema from "./components/Schema";
import PageMotion from "./components/PageMotion";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dongxin24.com"),

  // ================================
  // Google 自然搜尋 SEO
  // ================================
  title: {
    default: "台北新北24小時水電行｜水電維修・水電工程｜棟鑫水電",
    template: "%s",
  },

  description:
    "棟鑫工程行／棟鑫水電提供台北、新北24小時水電維修聯絡，處理跳電、漏水、通水管、馬桶不通與馬達故障；承接水電工程、水電裝潢、老屋換線及給排水工程。中和、板橋、永和及台北各區可來電0918-808-209，現場評估報價，派工時間依安排確認。",

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
    title: "台北新北24小時水電行｜水電維修・水電工程｜棟鑫水電",

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
    icon: { url: "/icon1", type: "image/png", sizes: "32x32" },
    shortcut: "/icon1",
    apple: { url: "/apple-icon", type: "image/png", sizes: "180x180" },
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
          strategy="lazyOnload"
        />

        <Script id="google-tag" strategy="beforeInteractive">
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

            // One delegated listener covers all current and future contact links.
            // These events represent a click, never a connected phone call.
            if (!window.dongxinContactTrackingInstalled) {
              window.dongxinContactTrackingInstalled = true;
              document.addEventListener('click', function(event) {
                var target = event.target;
                var link = target instanceof Element ? target.closest('a[href]') : null;
                if (!link) return;
                var href = link.getAttribute('href');
                var method = href === 'tel:0918808209' ? 'phone'
                  : href === 'https://line.me/ti/p/ezn_Ad6UpZ' ? 'line' : null;
                if (!method) return;
                var location = link.closest('header') ? 'navbar'
                  : link.closest('footer') ? 'footer'
                  : link.closest('nav[aria-label="快速聯絡"]') ? 'floating' : 'content';
                var params = {
                  contact_method: method,
                  contact_action: 'click',
                  contact_location: location,
                  page_path: window.location.pathname,
                  transport_type: 'beacon'
                };
                try {
                  gtag('event', 'conversion_event_contact', {
                    ...params, value: 1, currency: 'TWD'
                  });
                  gtag('event', method === 'phone' ? 'click_phone' : 'click_line', {
                    ...params, send_to: 'G-KQMV13X0NC'
                  });
                } catch (_) {
                  // Tracking failures must not interfere with native link navigation.
                }
              }, true);
            }
          `}
        </Script>


      </head>

      <body>
        <Schema />
        <a className="skip-link" href="#main-content">跳到主要內容</a>
        <Navbar />
        {children}
        <PageMotion />
        <Footer />

        {/* ================================
            浮動電話 / LINE 按鈕
        ================================= */}
        <FloatingButtons />
      </body>
    </html>
  );
}
