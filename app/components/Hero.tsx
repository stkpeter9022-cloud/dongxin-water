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
        minHeight: isMobile ? "820px" : "820px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        color: "#fff",
        background: "#101417",
      }}
    >
      {/* ========================================
          背景工程照片
      ======================================== */}

      <Image
        src="/case3.jpg"
        alt="雙北水電工程與裝修施工"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: isMobile ? "60% center" : "center",
          filter: "brightness(38%) contrast(1.05)",
          transform: "scale(1.02)",
        }}
      />

      {/* ========================================
          多層遮罩
      ======================================== */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(8,12,15,.96) 0%, rgba(8,12,15,.82) 38%, rgba(8,12,15,.48) 72%, rgba(8,12,15,.68) 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,.05) 45%, rgba(0,0,0,.75) 100%)",
          zIndex: 1,
        }}
      />

      {/* ========================================
          裝飾線
      ======================================== */}

      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: isMobile ? "70px" : "120px",
          height: "4px",
          background: "#F5B942",
          zIndex: 3,
        }}
      />

      {/* ========================================
          主內容
      ======================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isMobile ? "115px 22px 80px" : "125px 50px 90px",
        }}
      >
        {/* 上方標籤 */}

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: isMobile ? "22px" : "28px",
            padding: "9px 15px",
            borderLeft: "3px solid #F5B942",
            background: "rgba(255,255,255,.07)",
            backdropFilter: "blur(12px)",
            color: "rgba(255,255,255,.9)",
            fontSize: isMobile ? "13px" : "15px",
            fontWeight: 700,
            letterSpacing: "1.5px",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#F5B942",
              boxShadow: "0 0 12px rgba(245,185,66,.9)",
            }}
          />

          雙北專業水電工程團隊
        </div>

        {/* ========================================
            H1
        ======================================== */}

        <h1
          style={{
            margin: 0,
            maxWidth: "900px",
            fontSize: isMobile ? "40px" : "68px",
            lineHeight: 1.14,
            fontWeight: 850,
            letterSpacing: isMobile ? "-1.5px" : "-2.5px",
          }}
        >
          雙北水電工程
          <br />

          <span
            style={{
              color: "#F5B942",
            }}
          >
            裝修・維修・一次完成
          </span>
        </h1>

        {/* ========================================
            副標
        ======================================== */}

        <p
          style={{
            margin: isMobile ? "22px 0 28px" : "25px 0 30px",
            maxWidth: "760px",
            color: "rgba(255,255,255,.9)",
            fontSize: isMobile ? "17px" : "22px",
            lineHeight: 1.75,
            fontWeight: 500,
          }}
        >
          提供台北、新北水電工程與裝修水電服務，
          <br className="desktop-break" />
          從室內配線、給排水、衛浴、配電到水電維修，
          <br className="desktop-break" />
          另提供 24 小時緊急水電處理。
        </p>

        {/* ========================================
            專業服務標籤
        ======================================== */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "9px",
            maxWidth: "820px",
            marginBottom: "30px",
          }}
        >
          {[
            "室內配線",
            "裝修水電",
            "給排水工程",
            "衛浴工程",
            "配電工程",
            "漏水抓漏",
            "馬達工程",
            "24H水電急修",
          ].map((item) => (
            <span
              key={item}
              style={{
                padding: isMobile ? "8px 12px" : "9px 14px",
                border: "1px solid rgba(255,255,255,.18)",
                background: "rgba(255,255,255,.075)",
                backdropFilter: "blur(8px)",
                borderRadius: "6px",
                color: "rgba(255,255,255,.92)",
                fontSize: isMobile ? "13px" : "15px",
                fontWeight: 600,
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* ========================================
            信任資訊
        ======================================== */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: isMobile ? "10px 18px" : "12px 30px",
            marginBottom: "32px",
            color: "rgba(255,255,255,.82)",
            fontSize: isMobile ? "13px" : "15px",
          }}
        >
          <span>✓ 雙北到府服務</span>
          <span>✓ 現場評估報價</span>
          <span>✓ 專業施工</span>
          <span>✓ 施工保固</span>
        </div>

        {/* ========================================
            CTA
        ======================================== */}

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "12px",
            width: "100%",
            maxWidth: "590px",
          }}
        >
          {/* 電話 */}

          <a
            href="tel:0918808209"
            style={{
              flex: 1,
              minHeight: "62px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#F5B942",
              color: "#101417",
              borderRadius: "7px",
              textDecoration: "none",
              fontSize: isMobile ? "18px" : "20px",
              fontWeight: 800,
              boxShadow: "0 12px 30px rgba(0,0,0,.3)",
            }}
          >
            📞 電話工程諮詢
          </a>

          {/* LINE */}

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
              borderRadius: "7px",
              textDecoration: "none",
              fontSize: isMobile ? "18px" : "20px",
              fontWeight: 800,
              boxShadow: "0 12px 30px rgba(0,0,0,.3)",
            }}
          >
            LINE 工程諮詢
          </a>
        </div>

        {/* ========================================
            底部說明
        ======================================== */}

        <p
          style={{
            marginTop: "18px",
            marginBottom: 0,
            maxWidth: "650px",
            color: "rgba(255,255,255,.58)",
            fontSize: isMobile ? "12px" : "13px",
            lineHeight: 1.7,
          }}
        >
          維修、翻修、裝修水電皆可諮詢，實際施工內容與費用依現場條件評估。
        </p>
      </div>

      {/* ========================================
          右下角工程識別
      ======================================== */}

      {!isMobile && (
        <div
          style={{
            position: "absolute",
            right: "50px",
            bottom: "42px",
            zIndex: 3,
            padding: "16px 20px",
            borderLeft: "2px solid #F5B942",
            background: "rgba(0,0,0,.28)",
            backdropFilter: "blur(10px)",
            color: "rgba(255,255,255,.75)",
            fontSize: "13px",
            letterSpacing: "1px",
          }}
        >
          WATER · ELECTRICAL · RENOVATION
        </div>
      )}
    </section>
  );
}