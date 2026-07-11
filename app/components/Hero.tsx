import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "90px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* 背景 */}
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

      {/* 內容 */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1000px",
          width: "100%",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "68px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          棟鑫水電
        </h1>

        <h2
          style={{
            color: "#FFD54A",
            fontSize: "42px",
            fontWeight: "bold",
            marginBottom: "25px",
          }}
        >
          24小時水電急修｜雙北快速到府
        </h2>

        <p
          style={{
            fontSize: "28px",
            lineHeight: "58px",
            marginBottom: "35px",
            fontWeight: 600,
          }}
        >
          跳電維修｜漏水處理｜抓漏服務｜衛浴設備
          <br />
          水塔檢修｜水管疏通｜馬桶不通｜馬達維修
        </p>

        {/* 特色 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,.18)",
              backdropFilter: "blur(10px)",
              padding: "12px 30px",
              borderRadius: "999px",
              fontSize: "18px",
            }}
          >
            🚚 24H快速到府
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.18)",
              backdropFilter: "blur(10px)",
              padding: "12px 30px",
              borderRadius: "999px",
              fontSize: "18px",
            }}
          >
            🛠️ 專業施工保固
          </div>
        </div>

        {/* 按鈕 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:0918808209"
            style={{
              width: "260px",
              height: "68px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#ff3b30",
              color: "#fff",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "24px",
              boxShadow: "0 8px 20px rgba(255,59,48,.35)",
              transition: ".3s",
            }}
          >
            📞 立即來電
          </a>

          <a
            href="https://line.me/ti/p/ezn_Ad6UpZ"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "260px",
              height: "68px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#06C755",
              color: "#fff",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "24px",
              boxShadow: "0 8px 20px rgba(6,199,85,.35)",
              transition: ".3s",
            }}
          >
            💬 LINE立即詢問
          </a>
        </div>
      </div>
    </section>
  );
}