export default function Areas() {
  const taipei = [
    "中正區",
    "大同區",
    "中山區",
    "松山區",
    "大安區",
    "萬華區",
    "信義區",
    "士林區",
    "北投區",
    "內湖區",
    "南港區",
    "文山區",
  ];

  const newTaipei = [
    "板橋區",
    "中和區",
    "永和區",
    "新莊區",
    "三重區",
    "蘆洲區",
    "土城區",
    "新店區",
    "樹林區",
    "汐止區",
    "淡水區",
    "林口區",
    "三峽區",
    "鶯歌區",
    "五股區",
    "泰山區",
    "八里區",
    "深坑區",
    "金山區",
    "萬里區",
  ];

  return (
    <section
      id="areas"
      aria-labelledby="areas-title"
      style={{
        padding: "110px 20px",
        background: "#f5f6f7",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* 標題 */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "55px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 16px",
              borderRadius: "999px",
              background: "#fff4d6",
              color: "#9a6b00",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "16px",
            }}
          >
            SERVICE AREA
          </div>

          <h2
            id="areas-title"
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            台北・新北水電服務區域
          </h2>

          <p
            style={{
              maxWidth: "780px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.9,
            }}
          >
            棟鑫水電提供台北市、新北市雙北地區水電維修、
            水電工程與裝修水電服務，包含跳電、漏水、抓漏、
            排水疏通、馬桶、馬達、室內配線及衛浴工程。
            緊急水電問題可直接聯絡，實際派工時間依案件位置與現場狀況安排。
          </p>
        </div>

        {/* 台北市 */}
        <article
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "32px",
            marginBottom: "22px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 8px 25px rgba(15,23,42,.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width: "46px",
                height: "46px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                background: "#111827",
                color: "#fff",
                fontSize: "22px",
              }}
            >
              📍
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "#111827",
                }}
              >
                台北市水電服務
              </h3>

              <p
                style={{
                  margin: "4px 0 0",
                  color: "#64748b",
                  fontSize: "14px",
                }}
              >
                台北水電維修・水電工程・裝修水電
              </p>
            </div>
          </div>

          <p
            style={{
              margin: "0 0 24px",
              color: "#64748b",
              lineHeight: 1.8,
              fontSize: "15px",
            }}
          >
            台北市各行政區可依案件安排水電師傅到府，
            一般水電工程可預約，跳電、漏水、排水堵塞等緊急狀況可直接聯絡。
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "9px",
            }}
          >
            {taipei.map((area) => (
              <span
                key={area}
                title={`台北市${area}水電服務`}
                style={{
                  padding: "9px 14px",
                  borderRadius: "8px",
                  background: "#f8fafc",
                  border: "1px solid #e5e7eb",
                  color: "#475569",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                台北市{area}
              </span>
            ))}
          </div>
        </article>

        {/* 新北市 */}
        <article
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "32px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 8px 25px rgba(15,23,42,.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width: "46px",
                height: "46px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                background: "#111827",
                color: "#fff",
                fontSize: "22px",
              }}
            >
              📍
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "#111827",
                }}
              >
                新北市水電服務
              </h3>

              <p
                style={{
                  margin: "4px 0 0",
                  color: "#64748b",
                  fontSize: "14px",
                }}
              >
                新北水電維修・水電工程・裝修水電
              </p>
            </div>
          </div>

          <p
            style={{
              margin: "0 0 24px",
              color: "#64748b",
              lineHeight: 1.8,
              fontSize: "15px",
            }}
          >
            新北市主要行政區提供到府水電服務，
            住宅、店面水電維修及各類水電工程皆可依現場需求安排。
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "9px",
            }}
          >
            {newTaipei.map((area) => (
              <span
                key={area}
                title={`新北市${area}水電服務`}
                style={{
                  padding: "9px 14px",
                  borderRadius: "8px",
                  background: "#f8fafc",
                  border: "1px solid #e5e7eb",
                  color: "#475569",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                新北市{area}
              </span>
            ))}
          </div>
        </article>

        {/* SEO 說明 */}
        <div
          style={{
            maxWidth: "850px",
            margin: "45px auto 0",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              margin: "0 0 14px",
              color: "#111827",
              fontSize: "22px",
              fontWeight: 800,
            }}
          >
            雙北水電維修與工程需求皆可聯絡
          </h3>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "15px",
              lineHeight: 1.9,
            }}
          >
            無論是台北水電維修、新北水電維修，
            或室內配線、給排水、衛浴及裝修水電工程，
            都可先提供所在區域與現場需求，
            再依案件內容安排後續處理。
          </p>
        </div>

        {/* 底部 CTA */}
        <div
          style={{
            marginTop: "35px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 20px",
              color: "#64748b",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            不確定您的區域是否能安排？
            <br />
            歡迎直接聯絡並提供地址與工程需求。
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <a
              href="tel:0918808209"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "210px",
                height: "56px",
                padding: "0 28px",
                borderRadius: "8px",
                background: "#111827",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "17px",
              }}
            >
              📞 電話確認服務區域
            </a>

            <a
              href="https://line.me/ti/p/ezn_Ad6UpZ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "210px",
                height: "56px",
                padding: "0 28px",
                borderRadius: "8px",
                background: "#06C755",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "17px",
              }}
            >
              💬 LINE 詢問
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}