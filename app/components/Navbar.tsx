export default function Navbar() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "#111827",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "12px 16px" : "18px 40px",
        zIndex: 999,
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: isMobile ? "22px" : "30px",
          whiteSpace: "nowrap",
        }}
      >
        ⚡ 棟鑫水電
      </h2>

      <div
        style={{
          display: "flex",
          gap: isMobile ? "10px" : "24px",
          alignItems: "center",
          fontSize: isMobile ? "13px" : "16px",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        <a href="#services" style={{ color: "#fff", textDecoration: "none" }}>
          服務
        </a>

        <a href="#gallery" style={{ color: "#fff", textDecoration: "none" }}>
          案例
        </a>

        <a href="#areas" style={{ color: "#fff", textDecoration: "none" }}>
          地區
        </a>

        <a
          href="tel:0918808209"
          style={{
            color: "#22c55e",
            textDecoration: "none",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          📞0918-808-209
        </a>
      </div>
    </nav>
  );
}