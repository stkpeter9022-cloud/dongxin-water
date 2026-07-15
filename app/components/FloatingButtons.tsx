"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const reportConversion = (
  sendTo: string,
  url: string,
  newTab = false
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: sendTo,
      value: 1.0,
      currency: "TWD",
      event_callback: () => {
        if (newTab) {
          window.open(url, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = url;
        }
      },
    });

    // 避免 callback 沒回來造成按鈕沒反應
    setTimeout(() => {
      if (newTab) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = url;
      }
    }, 800);

    return;
  }

  if (newTab) {
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = url;
  }
};

export default function FloatingButtons() {
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
      <a
        href="tel:0918808209"
        onClick={(e) => {
          e.preventDefault();

          // 點選通話
          reportConversion(
            "AW-16737912362/0JZFCMKfjNEcEKqMoa0-",
            "tel:0918808209"
          );
        }}
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

      <a
        href="https://line.me/ti/p/ezn_Ad6UpZ"
        onClick={(e) => {
          e.preventDefault();

          // LINE 聯絡
          reportConversion(
            "AW-16737912362/4txVCMWfjNEcEKqMoa0-",
            "https://line.me/ti/p/ezn_Ad6UpZ",
            true
          );
        }}
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