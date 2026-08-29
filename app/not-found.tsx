import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px 120px",
        background:
          "linear-gradient(135deg, #111827 0%, #1f2937 60%, #111827 100%)",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          textAlign: "center",
        }}
      >
        {/* 404 */}
        <div
          style={{
            color: "#F5B942",
            fontSize: "clamp(80px,18vw,150px)",
            lineHeight: 1,
            fontWeight: 900,
            letterSpacing: "-5px",
            marginBottom: "20px",
          }}
        >
          404
        </div>

        <div
          style={{
            width: "60px",
            height: "4px",
            background: "#F5B942",
            margin: "0 auto 28px",
          }}
        />

        <h1
          style={{
            fontSize: "clamp(30px,5vw,44px)",
            margin: "0 0 18px",
            fontWeight: 800,
          }}
        >
          找不到您要查看的頁面
        </h1>

        <p
          style={{
            maxWidth: "620px",
            margin: "0 auto 35px",
            color: "rgba(255,255,255,.72)",
            fontSize: "17px",
            lineHeight: 1.9,
          }}
        >
          此頁面可能已經移動、網址輸入錯誤，
          或目前不存在。
          您可以返回棟鑫水電首頁查看服務項目，
          若有緊急水電問題也可以直接與我們聯絡。
        </p>

        {/* 按鈕 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "45px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              minHeight: "56px",
              padding: "0 30px",
              alignItems: "center",
              justifyContent: "center",
              background: "#F5B942",
              color: "#111827",
              borderRadius: "7px",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "17px",
            }}
          >
            返回棟鑫水電首頁
          </Link>

          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              minHeight: "56px",
              padding: "0 30px",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,.08)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,.22)",
              borderRadius: "7px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            聯絡我們
          </Link>
        </div>

        {/* 常用服務 */}
        <div
          style={{
            paddingTop: "35px",
            borderTop: "1px solid rgba(255,255,255,.12)",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,.55)",
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            或查看常用水電服務
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {[
              ["跳電維修", "/tiao-dian"],
              ["漏水處理", "/lou-shui"],
              ["水管疏通", "/shui-guan"],
              ["馬桶不通", "/ma-tong"],
            ].map(([title, href]) => (
              <Link
                key={href}
                href={href}
                style={{
                  padding: "10px 15px",
                  color: "rgba(255,255,255,.8)",
                  border: "1px solid rgba(255,255,255,.15)",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>

        {/* 緊急聯絡 */}
        <div
          style={{
            marginTop: "40px",
            padding: "22px",
            borderRadius: "10px",
            background: "rgba(255,255,255,.05)",
            border: "1px solid rgba(255,255,255,.1)",
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              color: "rgba(255,255,255,.65)",
              fontSize: "14px",
            }}
          >
            雙北緊急水電問題
          </p>

          <a
            href="tel:0918808209"
            style={{
              color: "#F5B942",
              fontSize: "22px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            📞 0918-808-209
          </a>
        </div>
      </div>
    </main>
  );
}