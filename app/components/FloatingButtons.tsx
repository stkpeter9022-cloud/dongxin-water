"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// ==============================
// Google Ads 轉換追蹤
// ==============================

// Google Ads 帳號 1
const GOOGLE_ADS_1 = {
  phone: "AW-16737912362/otUiCMOLjNccEKqMoa0-",
  line: "AW-16737912362/4txVCMWfjNEcEKqMoa0-",
};

// Google Ads 帳號 2
const GOOGLE_ADS_2 = {
  phone: "AW-18052969763/M6n4CJ6ck9EcEKPqqaBD",
  line: "AW-18052969763/0oeuCPvejs4cEKPqqaBD",
};

// ==============================
// 回報電話轉換
// ==============================
const reportPhoneConversion = () => {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  // Google Ads 帳號 1
  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_1.phone,
    value: 1.0,
    currency: "TWD",
  });

  // Google Ads 帳號 2
  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_2.phone,
    value: 1.0,
    currency: "TWD",
  });
};

// ==============================
// 回報 LINE 轉換
// ==============================
const reportLineConversion = () => {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  // Google Ads 帳號 1
  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_1.line,
    value: 1.0,
    currency: "TWD",
  });

  // Google Ads 帳號 2
  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_2.line,
    value: 1.0,
    currency: "TWD",
  });
};

// ==============================
// 浮動按鈕
// ==============================
export default function FloatingButtons() {
  // ============================
  // 電話按鈕
  // ============================
  const handlePhoneClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    // 同時回報兩個 Google Ads 帳號
    reportPhoneConversion();

    // 稍微等待轉換事件送出後再撥電話
    setTimeout(() => {
      window.location.href = "tel:0918808209";
    }, 500);
  };

  // ============================
  // LINE 按鈕
  // ============================
  const handleLineClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    // 回報兩個 Google Ads 帳號的 LINE 轉換
    reportLineConversion();

    // 開啟 LINE
    const lineWindow = window.open(
      "https://line.me/ti/p/ezn_Ad6UpZ",
      "_blank",
      "noopener,noreferrer"
    );

    // 如果瀏覽器阻擋新視窗
    if (!lineWindow) {
      window.location.href =
        "https://line.me/ti/p/ezn_Ad6UpZ";
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
      {/* ============================
          電話按鈕
      ============================ */}
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

      {/* ============================
          LINE 按鈕
      ============================ */}
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