"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// ================================
// CONTACT 轉換
// GA4 事件：conversion_event_contact
// Google Ads：CONTACT
// ================================

const sendContactConversion = (callback?: () => void) => {
  // 如果 gtag 尚未載入，直接執行後續動作
  if (typeof window === "undefined" || !window.gtag) {
    callback?.();
    return;
  }

  let completed = false;

  const finish = () => {
    if (completed) return;
    completed = true;
    callback?.();
  };

  window.gtag("event", "conversion_event_contact", {
    value: 1,
    currency: "TWD",
    event_callback: finish,
    event_timeout: 1500,
  });

  // 保險機制：最多等 1.5 秒
  setTimeout(finish, 1500);
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

    const phoneUrl = "tel:0918808209";

    // 送出 GA4 CONTACT 事件
    sendContactConversion(() => {
      window.location.href = phoneUrl;
    });
  };

  // ------------------------------
  // LINE 按鈕
  // ------------------------------

  const handleLineClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const lineUrl = "https://line.me/ti/p/ezn_Ad6UpZ";

    // 送出 GA4 CONTACT 事件
    // LINE 同時正常開啟，不等待轉換
    sendContactConversion();

    // 讓瀏覽器正常開啟 LINE
    // 不 preventDefault，避免手機瀏覽器阻擋新視窗
    e.currentTarget.href = lineUrl;
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
        target="_blank"
        rel="noopener noreferrer"
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