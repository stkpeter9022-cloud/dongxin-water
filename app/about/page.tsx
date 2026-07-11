import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於棟鑫水電",
  description:
    "棟鑫水電提供雙北24小時水電急修服務，專業處理跳電、漏水、抓漏、水管疏通、馬桶不通、抽水馬達、沈水馬達、室內配線及各式水電工程。",
};

export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "80px auto",
        padding: "20px",
        lineHeight: 1.9,
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "25px" }}>
        關於棟鑫水電
      </h1>

      <p>
        棟鑫水電專營雙北地區24小時水電急修服務，
        提供住宅、店面、辦公室及工廠等各類水電工程，
        堅持快速到府、透明報價、專業施工。
      </p>

      <br />

      <h2>服務項目</h2>

      <ul>
        <li>✔ 跳電維修</li>
        <li>✔ 漏水處理</li>
        <li>✔ 抓漏服務</li>
        <li>✔ 水管疏通</li>
        <li>✔ 馬桶不通</li>
        <li>✔ 抽水馬達更換</li>
        <li>✔ 沈水馬達更換</li>
        <li>✔ 加壓馬達安裝</li>
        <li>✔ 室內配線</li>
        <li>✔ 電表底座更換</li>
        <li>✔ 無熔絲開關更換</li>
        <li>✔ 衛浴設備安裝</li>
      </ul>

      <br />

      <h2>服務區域</h2>

      <p>
        台北市、新北市皆可快速到府，
        提供24小時緊急水電維修服務。
      </p>

      <br />

      <a
        href="tel:0918808209"
        style={{
          display: "inline-block",
          background: "#ef4444",
          color: "#fff",
          padding: "16px 36px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        📞 立即來電
      </a>
    </main>
  );
}