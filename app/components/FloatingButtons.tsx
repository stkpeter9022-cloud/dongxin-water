"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// ================================
// Google Ads 轉換設定
// ================================

// 第一個 Google Ads 帳號
const GOOGLE_ADS_1 = {
  phone: "AW-16737912362/otUiCMOLjNccEKqMoa0-",
  line: "AW-16737912362/4txVCMWfjNEcEKqMoa0-",
};

// 第二個 Google Ads 帳號
const GOOGLE_ADS_2 = {
  phone: "AW-18052969763/M6n4CJ6ck9EcEKPqqaBD",
  line: "AW-18052969763/OoeuCPvejs4cEKPqqaBD",
};

// ================================
// 發送 Google Ads 轉換
// ================================

const sendConversion = (sendTo: string) => {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: sendTo,
    value: 1.0,
    currency: "TWD",
  });
};

// ================================
// CONTACT 轉換
// ================================

const sendContactConversion = (url: string) => {
  if (typeof window === "undefined" || !window.gtag) {
    window.location.href = url;
    return;
  }

  let navigated = false;

  const goToPhone = () => {
    if (navigated) return;
    navigated = true;
    window.location.href = url;
  };

  window.gtag("event", "conversion_event_contact", {
    event_callback: goToPhone,
    event_timeout: 2000,
  });

  // 保險機制：2 秒後即使 Google 沒回傳，也照樣撥電話
  setTimeout(goToPhone, 2000);
};

// ================================
// Floating Buttons
// ================================

export default function FloatingButtons() {
  // ------------------------------
  // 電話按鈕
  // ------------------------------
  const handlePhoneClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    // 原本的 Google Ads 電話轉換
    sendConversion(GOOGLE_ADS_1.phone);
    sendConversion(GOOGLE_ADS_2.phone);

    // 新建立的 CONTACT 轉換
    sendContactConversion("tel:0918808209");
  };

  // ------------------------------
  // LINE 按鈕
  // ------------------------------
  const handleLineClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    const lineUrl = "https://line.me/ti/p/ezn_Ad6UpZ";

    // 第一個 Google Ads 帳號
    sendConversion(GOOGLE_ADS_1.line);

    // 第二個 Google Ads 帳號
    sendConversion(GOOGLE_ADS_2.line);

    // 等待轉換事件送出後再開 LINE
    setTimeout(() => {
      window.open(lineUrl, "_blank", "noopener,noreferrer");
    }, 800);
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
      {/* ========================= */}
      {/* 電話 */}
      {/* ========================= */}

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

      {/* ========================= */}
      {/* LINE */}
      {/* ========================= */}

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