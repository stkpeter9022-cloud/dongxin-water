import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "沈水馬達更換｜棟鑫水電",
  description:
    "雙北24小時跳電維修，到府快速檢修跳電、漏電、配電箱、無熔絲開關故障，立即來電。",
};

export default function Page() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "80px auto",
        padding: "20px",
      }}
    >
      <h1>跳電維修</h1>

      <p>
        棟鑫水電提供雙北24小時跳電維修服務，
        專業處理住宅、店面、工廠跳電、
        漏電、配電箱及無熔絲開關故障。
      </p>

      <a href="tel:0918808209">
        📞 立即來電
      </a>
    </main>
  );
}