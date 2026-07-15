"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: isMobile ? "110px" : "90px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      <Image
        src="/case3.jpg"
        alt="棟鑫水電"
        fill
        priority
        style={{
          objectFit: "cover",
          filter: "brightness(40%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1100px",
          padding: isMobile ? "20px" : "40px",
        }}
      >
        {/* 主標 */}
        <h1
          style={{
            fontSize: isMobile ? "42px" : "68px",
            fontWeight: "bold",
            marginBottom: "12px",
            lineHeight: 1.2,
          }}
        >
          棟鑫水電
        </h1>

        {/* 副標 */}
        <h2
          style={{
            color: "#FFD54A",
            fontSize: isMobile ? "22px" : "42px",
            fontWeight: "bold",
            lineHeight: 1.5,
            marginBottom: "30px",
          }}
        >
          24小時水電急修
          <br />
          雙北快速到府
        </h2>

        {/* 服務項目 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
            gap: isMobile ? "10px" : "16px",
            maxWidth: isMobile ? "360px" : "900px",
            margin: "0 auto 35px",
            fontSize: isMobile ? "17px" : "26px",
            fontWeight: "bold",
          }}
        >
          <span>跳電維修</span>
          <span>漏水處理</span>
          <span>抓漏服務</span>
          <span>衛浴設備</span>
          <span>水塔檢修</span>
          <span>水管疏通</span>
          <span>馬桶不通</span>
          <span>馬達維修</span>
        </div>

        {/* 特色 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,.18)",
              backdropFilter: "blur(8px)",
              padding: isMobile ? "10px 16px" : "12px 28px",
              borderRadius: "999px",
              fontSize: isMobile ? "14px" : "18px",
            }}
          >
            🚚 24H快速到府
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.18)",
              backdropFilter: "blur(8px)",
              padding: isMobile ? "10px 16px" : "12px 28px",
              borderRadius: "999px",
              fontSize: isMobile ? "14px" : "18px",
            }}
          >
            🛠️ 專業施工保固
          </div>
        </div>

        {/* 按鈕 */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <a
            href="tel:0918808209"
            style={{
              width: isMobile ? "100%" : "260px",
              maxWidth: "320px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#ef4444",
              color: "#fff",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: isMobile ? "18px" : "24px",
            }}
          >
            📞 立即來電
          </a>

          <a
            href="https://line.me/ti/p/ezn_Ad6UpZ"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: isMobile ? "100%" : "260px",
              maxWidth: "320px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#06C755",
              color: "#fff",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: isMobile ? "18px" : "24px",
            }}
          >
            💬 LINE立即詢問
          </a>
        </div>
      </div>
    </section>
  );
}