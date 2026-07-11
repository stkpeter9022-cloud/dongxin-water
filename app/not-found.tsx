import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "90px",
            marginBottom: "20px",
          }}
        >
          404
        </h1>

        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          找不到此頁面
        </h2>

        <p
          style={{
            color: "#666",
            marginBottom: "40px",
          }}
        >
          您要找的頁面不存在。
        </p>

        <Link
          href="/"
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "16px 36px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          返回首頁
        </Link>
      </div>
    </main>
  );
}