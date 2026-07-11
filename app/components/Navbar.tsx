export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#111827",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        zIndex: 999,
      }}
    >
      <h2>⚡ 棟鑫水電</h2>

      <div
        style={{
          display: "flex",
          gap: "24px",
          fontSize: "16px",
        }}
      >
        <a href="#services" style={{ color: "white", textDecoration: "none" }}>
          服務項目
        </a>

        <a href="#gallery" style={{ color: "white", textDecoration: "none" }}>
          工程案例
        </a>

        <a href="#areas" style={{ color: "white", textDecoration: "none" }}>
          服務地區
        </a>

        <a href="tel:0918808209" style={{ color: "#22c55e" }}>
          📞0918-808-209
        </a>
      </div>
    </nav>
  );
}