export default function FloatingButtons() {
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