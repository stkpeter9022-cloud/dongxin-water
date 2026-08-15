"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// ==============================
// Google Ads 轉換追蹤
// ==============================

// 第一個 Google Ads 帳號
const GOOGLE_ADS_1 = {
  phone: "AW-16737912362/otUiCMOLjNccEKqMoa0-",
  line: "AW-16737912362/4txVCMWfjNEcEKqMoa0-",
};

// 第二個 Google Ads 帳號
const GOOGLE_ADS_2 = {
  phone: "AW-18052969763/M6n4CJ6ck9EcEKPqqaBD",
  line: "AW-18052969763/0oeuCPvejs4cEKqMoa0-",
};

// 回報電話轉換
const reportPhoneConversion = () => {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  // 第一個 Google Ads 帳號
  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_1.phone,
    value: 1.0,
    currency: "TWD",
  });

  // 第二個 Google Ads 帳號
  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_2.phone,
    value: 1.0,
    currency: "TWD",
  });
};

// 回報 LINE 轉換
const reportLineConversion = () => {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  // 第一個 Google Ads 帳號
  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_1.line,
    value: 1.0,
    currency: "TWD",
  });

  // 第二個 Google Ads 帳號
  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_2.line,
    value: 1.0,
    currency: "TWD",
  });
};

export default function FloatingButtons() {
  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // 回報兩個 Google Ads 帳號
    reportPhoneConversion();

    // 稍微等待 Google Ads 發送轉換，再撥電話
    setTimeout(() => {
      window.location.href = "tel:0918808209";
    }, 500);
  };

  const handleLineClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // 先開啟 LINE，避免瀏覽器阻擋新分頁
    const lineWindow = window.open(
      "https://line.me/ti/p/ezn_Ad6UpZ",
      "_blank",
      "noopener,noreferrer"
    );

    // 回報兩個 Google Ads 帳號
    reportLineConversion();

    // 如果瀏覽器阻擋新視窗，則直接導向 LINE
    if (!lineWindow) {
      window.location.href = "https://line.me/ti/p/ezn_Ad6UpZ";
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        zIndex: 9999,
        boxShadow: "0 -4px 12px rgba(0,0,0,.15)",
      }}
    >
      {/* ==============================
          電話按鈕
      ============================== */}
      <a
        href="tel:0918808209"
        onClick={handlePhoneClick}
        style={{
          flex: 1,
          background: "#ef4444",
          color: "#fff",
          textAlign: "center",
          padding: "18px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        📞 立即來電
      </a>

      {/* ==============================
          LINE 按鈕
      ============================== */}
      <a
        href="https://line.me/ti/p/ezn_Ad6UpZ"
        onClick={handleLineClick}
        style={{
          flex: 1,
          background: "#06C755",
          color: "#fff",
          textAlign: "center",
          padding: "18px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        💬 LINE立即詢問
      </a>
    </div>
  );
}