"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// =====================================
// Google Ads / GA4 主要 CONTACT 轉換
// GA4：conversion_event_contact
// Google Ads：CONTACT
// =====================================

const sendContactConversion = (
  contactMethod: "phone" | "line",
  callback?: () => void
) => {
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

  // -------------------------------------
  // 1. Google Ads 主要 CONTACT 轉換
  // -------------------------------------

  window.gtag("event", "conversion_event_contact", {
    value: 1,
    currency: "TWD",
    contact_method: contactMethod,
    event_callback: finish,
    event_timeout: 1200,
  });

  // -------------------------------------
  // 2. GA4 分析事件
  // 不設定成 Google Ads 主要轉換
  // -------------------------------------

  window.gtag(
    "event",
    contactMethod === "phone" ? "click_phone" : "click_line",
    {
      contact_method: contactMethod,
    }
  );

  // 避免電話連結等待過久
  setTimeout(finish, 1200);
};

// =====================================
// Floating Buttons
// =====================================

export default function FloatingButtons() {
  // =====================================
  // 電話
  // =====================================

  const handlePhoneClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    sendContactConversion("phone", () => {
      window.location.href = "tel:0918808209";
    });
  };

  // =====================================
  // LINE
  // =====================================

  const handleLineClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    // LINE 使用 target="_blank"
    // 不 preventDefault
    // 避免部分手機瀏覽器阻擋開啟 LINE

    sendContactConversion("line");
  };

  return (
    <nav
      aria-label="快速聯絡"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        zIndex: 9999,
        boxShadow: "0 -4px 16px rgba(0,0,0,.18)",
      }}
    >
      {/* 電話 */}
      <a
        href="tel:0918808209"
        onClick={handlePhoneClick}
        aria-label="立即致電棟鑫水電"
        style={{
          flex: 1,
          minHeight: "62px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111827",
          color: "#fff",
          textAlign: "center",
          padding: "14px 12px",
          textDecoration: "none",
          fontWeight: 800,
          fontSize: "18px",
          borderTop: "3px solid #d6a52c",
        }}
      >
        📞 立即來電
      </a>

      {/* LINE */}
      <a
        href="https://line.me/ti/p/ezn_Ad6UpZ"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLineClick}
        aria-label="透過 LINE 聯絡棟鑫水電"
        style={{
          flex: 1,
          minHeight: "62px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06C755",
          color: "#fff",
          textAlign: "center",
          padding: "14px 12px",
          textDecoration: "none",
          fontWeight: 800,
          fontSize: "18px",
          borderTop: "3px solid #06C755",
        }}
      >
        💬 LINE立即詢問
      </a>
    </nav>
  );
}