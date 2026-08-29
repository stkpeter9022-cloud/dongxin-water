import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "台北新北沈水馬達更換｜抽水泵浦與污水馬達維修｜棟鑫水電",

  description:
    "棟鑫水電提供台北、新北雙北沈水馬達更換與抽水設備維修，處理沈水馬達故障、污水馬達、抽水泵浦、地下室積水、污水池排水及馬達不運轉等問題，依現場設備狀況評估處理。",

  alternates: {
    canonical: "https://www.dongxin24.com/shen-shui-ma-da",
  },

  openGraph: {
    title: "台北新北沈水馬達更換｜抽水與污水馬達｜棟鑫水電",
    description:
      "雙北沈水馬達更換與抽水設備維修，處理污水馬達、抽水泵浦、積水及馬達故障問題。",
    url: "https://www.dongxin24.com/shen-shui-ma-da",
    siteName: "棟鑫水電",
    locale: "zh_TW",
    type: "website",
  },
};

const services = [
  {
    title: "沈水馬達故障",
    text: "沈水馬達無法啟動、運轉異常或無法正常抽水，可協助檢查設備及相關電路狀況。",
  },
  {
    title: "沈水馬達更換",
    text: "既有沈水馬達損壞或使用年限較長，可依現場用途、管路及設備規格評估更換。",
  },
  {
    title: "污水馬達",
    text: "處理污水池、地下室及建築排污系統使用的污水馬達故障與更換需求。",
  },
  {
    title: "抽水泵浦",
    text: "抽水設備無法正常運轉、抽水量異常或完全無法抽水，可依現場設備狀況進行檢查。",
  },
  {
    title: "地下室積水",
    text: "地下室、機房或低窪區域出現積水，可協助確認沈水馬達、浮球開關及排水設備是否正常。",
  },
  {
    title: "浮球與控制設備",
    text: "若馬達本體正常但無法自動啟停，也可能與浮球開關、控制線路或相關設備異常有關。",
  },
];

const faqs = [
  {
    q: "沈水馬達不會動一定是馬達壞掉嗎？",
    a: "不一定。除了馬達本體故障，也可能是電源、控制線路、浮球開關、保護裝置或其他設備異常，需要依現場狀況檢查。",
  },
  {
    q: "沈水馬達可以直接換新的嗎？",
    a: "需要先確認用途、揚程、排水量、管徑、電壓及現場安裝條件，再評估適合的設備規格，避免更換後無法符合現場需求。",
  },
  {
    q: "污水馬達跟一般抽水馬達一樣嗎？",
    a: "用途並不完全相同。污水環境可能含有雜物或污物，因此設備型式與規格需要依實際使用環境選擇。",
  },
  {
    q: "地下室積水是不是沈水馬達壞了？",
    a: "有可能，但也可能是浮球開關、控制設備、電源、排水管堵塞或排水量不足造成，因此通常需要先檢查設備與排水系統。",
  },
  {
    q: "晚上沈水馬達故障可以處理嗎？",
    a: "棟鑫水電提供雙北24小時緊急水電聯絡服務，若遇到地下室積水、污水池滿水或排水設備故障，可先電話或 LINE 說明現場狀況。",
  },
];

export default function Page() {
  return (
    <main
      style={{
        background: "#f8fafc",
        color: "#111827",
      }}
    >
      {/* Hero */}
      <section
        style={{
          padding: "120px 20px 80px",
          background:
            "linear-gradient(135deg, #111827 0%, #1f2937 60%, #111827 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              marginBottom: "20px",
              borderLeft: "3px solid #F5B942",
              background: "rgba(255,255,255,.08)",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            雙北水電工程｜抽水設備
          </div>

          <h1
            style={{
              fontSize: "clamp(38px,6vw,64px)",
              lineHeight: 1.2,
              margin: "0 0 24px",
              fontWeight: 800,
            }}
          >
            台北・新北
            <br />
            <span style={{ color: "#F5B942" }}>
              沈水馬達更換與維修
            </span>
          </h1>

          <p
            style={{
              maxWidth: "760px",
              fontSize: "clamp(17px,3vw,22px)",
              lineHeight: 1.8,
              color: "rgba(255,255,255,.88)",
              marginBottom: "32px",
            }}
          >
            處理住宅、大樓、店面及各類場所的沈水馬達與抽水設備問題，
            包含沈水馬達故障、污水馬達、抽水泵浦、地下室積水、
            浮球開關及相關控制設備。
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "34px",
            }}
          >
            {[
              "沈水馬達",
              "污水馬達",
              "抽水泵浦",
              "馬達更換",
              "地下室積水",
              "浮球開關",
            ].map((item) => (
              <span
                key={item}
                style={{
                  padding: "9px 14px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,.18)",
                  background: "rgba(255,255,255,.08)",
                  fontSize: "14px",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "flex",
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
                minHeight: "58px",
                padding: "0 28px",
                background: "#F5B942",
                color: "#111827",
                borderRadius: "7px",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              📞 電話諮詢馬達問題
            </a>

            <a
              href="https://line.me/ti/p/ezn_Ad6UpZ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "58px",
                padding: "0 28px",
                background: "#06C755",
                color: "#fff",
                borderRadius: "7px",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              LINE 傳設備照片
            </a>
          </div>
        </div>
      </section>

      {/* 服務內容 */}
      <section style={{ padding: "75px 20px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "15px",
            }}
          >
            雙北沈水馬達與抽水設備服務
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              fontSize: "17px",
              lineHeight: 1.8,
              marginBottom: "45px",
            }}
          >
            依設備用途、現場管路、電源與故障狀況，
            評估適合的檢修或更換方式。
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "20px",
            }}
          >
            {services.map((item) => (
              <article
                key={item.title}
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "28px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 8px 25px rgba(0,0,0,.05)",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "4px",
                    background: "#F5B942",
                    marginBottom: "20px",
                  }}
                />

                <h3
                  style={{
                    fontSize: "22px",
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 處理流程 */}
      <section
        style={{
          padding: "75px 20px",
          background: "#111827",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "45px",
            }}
          >
            沈水馬達故障處理流程
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "18px",
            }}
          >
            {[
              [
                "01",
                "說明設備狀況",
                "告知馬達用途、故障情況及目前是否有積水。",
              ],
              [
                "02",
                "現場檢查",
                "確認馬達、電源、浮球、控制設備及排水管路。",
              ],
              [
                "03",
                "評估處理方式",
                "依故障原因與設備規格說明維修或更換方式。",
              ],
              [
                "04",
                "確認後施工",
                "經客戶確認後進行施工，並確認設備運轉狀況。",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                style={{
                  padding: "25px",
                  border: "1px solid rgba(255,255,255,.12)",
                  background: "rgba(255,255,255,.05)",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    color: "#F5B942",
                    fontSize: "14px",
                    fontWeight: 800,
                    marginBottom: "12px",
                  }}
                >
                  {number}
                </div>

                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "10px",
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,.7)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "75px 20px" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "45px",
            }}
          >
            沈水馬達常見問題
          </h2>

          {faqs.map((faq) => (
            <article
              key={faq.q}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "24px",
                marginBottom: "15px",
                border: "1px solid #e5e7eb",
              }}
            >
              <h3
                style={{
                  fontSize: "19px",
                  marginBottom: "10px",
                }}
              >
                {faq.q}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  lineHeight: 1.8,
                }}
              >
                {faq.a}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "70px 20px 120px",
          textAlign: "center",
          background: "#f1f5f9",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px,5vw,40px)",
            marginBottom: "15px",
          }}
        >
          沈水馬達故障或現場正在積水？
        </h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          可以先電話或 LINE 說明設備與現場狀況，
          若知道馬達品牌、型號或規格，也可以直接傳照片協助了解。
        </p>

        <a
          href="tel:0918808209"
          style={{
            display: "inline-flex",
            minHeight: "58px",
            padding: "0 32px",
            alignItems: "center",
            justifyContent: "center",
            background: "#111827",
            color: "#fff",
            borderRadius: "7px",
            textDecoration: "none",
            fontWeight: 800,
            fontSize: "18px",
          }}
        >
          📞 立即聯絡棟鑫水電
        </a>
      </section>
    </main>
  );
}