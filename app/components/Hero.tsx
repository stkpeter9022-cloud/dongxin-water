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
        minHeight: isMobile ? "760px" : "820px",
        paddingTop: isMobile ? "100px" : "90px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        color: "#fff",
        background: "#111",
      }}
    >
      {/* 背景施工照片 */}
      <Image
        src="/case3.jpg"
        alt="雙北水電工程與裝修施工"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(42%)",
        }}
      />

      {/* 深色漸層，增加文字可讀性 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,.55) 55%, rgba(0,0,0,.82) 100%)",
          zIndex: 1,
        }}
      />

      {/* 內容 */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1180px",
          padding: isMobile ? "30px 22px" : "60px 40px",
          margin: "0 auto",
        }}
      >
        {/* 上方標籤 */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "9px 16px",
            marginBottom: "22px",
            border: "1px solid rgba(255,255,255,.28)",
            background: "rgba(255,255,255,.10)",
            backdropFilter: "blur(10px)",
            borderRadius: "999px",
            fontSize: isMobile ? "14px" : "16px",
            fontWeight: 600,
            letterSpacing: "1px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#F5B942",
              boxShadow: "0 0 10px rgba(245,185,66,.8)",
            }}
          />
          雙北專業水電工程團隊
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: isMobile ? "39px" : "68px",
            lineHeight: 1.15,
            fontWeight: 800,
            letterSpacing: isMobile ? "-1px" : "-2px",
            margin: "0 0 20px",
            maxWidth: "900px",
          }}
        >
          水電工程 × 裝修工程
          <br />
          <span style={{ color: "#F5B942" }}>
            專業施工，一次處理
          </span>
        </h1>

        {/* 副標 */}
        <p
          style={{
            fontSize: isMobile ? "18px" : "25px",
            lineHeight: 1.7,
            fontWeight: 500,
            color: "rgba(255,255,255,.92)",
            margin: "0 0 30px",
            maxWidth: "780px",
          }}
        >
          室內配線、給排水、衛浴工程、配電工程、裝修水電，
          <br />
          也提供 24 小時水電緊急維修服務。
        </p>

        {/* 服務分類 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            maxWidth: "850px",
            marginBottom: "34px",
          }}
        >
          {[
            "室內配線",
            "配電工程",
            "給排水工程",
            "衛浴工程",
            "裝修水電",
            "漏水抓漏",
            "馬達設備",
            "24H緊急維修",
          ].map((item) => (
            <span
              key={item}
              style={{
                padding: isMobile ? "9px 13px" : "10px 17px",
                borderRadius: "8px",
                background: "rgba(255,255,255,.11)",
                border: "1px solid rgba(255,255,255,.18)",
                backdropFilter: "blur(8px)",
                fontSize: isMobile ? "14px" : "16px",
                fontWeight: 600,
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* 信任資訊 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: isMobile ? "12px" : "24px",
            marginBottom: "34px",
            color: "rgba(255,255,255,.9)",
            fontSize: isMobile ? "14px" : "16px",
            fontWeight: 500,
          }}
        >
          <span>✓ 雙北到府服務</span>
          <span>✓ 現場評估報價</span>
          <span>✓ 專業施工</span>
          <span>✓ 24H緊急維修</span>
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "14px",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <a
            href="tel:0918808209"
            style={{
              flex: 1,
              minHeight: "62px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#F5B942",
              color: "#111",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: isMobile ? "19px" : "21px",
              boxShadow: "0 10px 30px rgba(0,0,0,.25)",
            }}
          >
            📞 立即電話諮詢
          </a>

          <a
            href="https://line.me/ti/p/ezn_Ad6UpZ"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              minHeight: "62px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#06C755",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: isMobile ? "19px" : "21px",
              boxShadow: "0 10px 30px rgba(0,0,0,.25)",
            }}
          >
            💬 LINE 工程諮詢
          </a>
        </div>

        {/* 底部小字 */}
        <p
          style={{
            marginTop: "20px",
            fontSize: isMobile ? "13px" : "14px",
            color: "rgba(255,255,255,.65)",
          }}
        >
          維修、翻修、裝修水電皆可諮詢，實際工程內容依現場條件評估
        </p>
      </div>
    </section>
  );
}