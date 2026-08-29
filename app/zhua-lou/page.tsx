import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "台北新北抓漏｜漏水檢測與滲水原因檢查｜棟鑫水電",

  description:
    "棟鑫水電提供台北、新北雙北抓漏與漏水檢測服務，協助檢查牆面滲水、天花板漏水、浴室漏水、水管漏水及不明水痕來源，依現場管線與建物狀況判斷可能原因。",

  alternates: {
    canonical: "https://www.dongxin24.com/zhua-lou",
  },

  openGraph: {
    title: "台北新北抓漏｜漏水檢測｜棟鑫水電",
    description:
      "雙北抓漏與漏水檢測，協助判斷牆面滲水、天花板漏水、水管漏水及不明水痕來源。",
    url: "https://www.dongxin24.com/zhua-lou",
    siteName: "棟鑫水電",
    locale: "zh_TW",
    type: "website",
  },
};

const services = [
  {
    title: "牆面滲水檢查",
    text: "牆面出現水痕、油漆剝落、發霉或壁癌時，可依位置、管線配置及現場狀況判斷可能的滲水來源。",
  },
  {
    title: "天花板漏水檢查",
    text: "天花板滴水或出現水漬時，協助確認上方給排水、衛浴設備或其他可能的漏水來源。",
  },
  {
    title: "水管漏水判斷",
    text: "針對冷水管、熱水管及其他給水管線疑似漏水狀況，依現場條件進行檢查與判斷。",
  },
  {
    title: "浴室漏水檢查",
    text: "浴室漏水可能來自給水管、排水管、設備接管或其他位置，先確認原因再決定後續施工方式。",
  },
  {
    title: "不明水痕檢查",
    text: "若牆面、地面或天花板出現水痕但無法確認來源，可從現場管線與用水狀況逐步判斷。",
  },
  {
    title: "給排水管線檢查",
    text: "住宅、店面及其他空間的給排水管線異常，可依現場配置進一步確認問題位置。",
  },
];

const faqs = [
  {
    q: "抓漏一定可以一次找到漏水點嗎？",
    a: "不一定。漏水可能受到建物結構、管線配置、滲水路徑及漏水量影響，有些現場需要分階段檢查才能逐步縮小範圍。",
  },
  {
    q: "牆壁有壁癌就是水管漏水嗎？",
    a: "不一定。壁癌或牆面潮濕可能與水管漏水、防水、外牆滲水或其他水氣問題有關，需要配合現場位置與狀況判斷。",
  },
  {
    q: "天花板滴水是不是樓上浴室漏水？",
    a: "有可能，但也可能來自給水管、排水管、設備接頭或其他區域。水可能沿著樓板或管線移動，因此滴水位置不一定就是實際漏水點。",
  },
  {
    q: "抓漏後可以直接維修嗎？",
    a: "若確認問題與水電管線有關，可依現場狀況評估後續維修方式；若涉及其他防水或建築結構工程，也會依實際問題說明。",
  },
  {
    q: "晚上突然嚴重漏水可以處理嗎？",
    a: "棟鑫水電提供雙北24小時緊急水電聯絡服務。若出現大量漏水、持續滴水或可能影響電路安全，可先電話或 LINE 聯絡。",
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
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
            雙北水電服務｜漏水檢測
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
              抓漏與漏水原因檢查
            </span>
          </h1>

          <p
            style={{
              maxWidth: "780px",
              fontSize: "clamp(17px,3vw,22px)",
              lineHeight: 1.8,
              color: "rgba(255,255,255,.88)",
              marginBottom: "32px",
            }}
          >
            牆面滲水、天花板滴水或不明水痕，
            先從現場管線、用水設備與漏水狀況進行檢查，
            協助判斷可能的漏水來源與後續處理方式。
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
              "漏水抓漏",
              "牆面滲水",
              "天花板漏水",
              "水管漏水",
              "浴室漏水",
              "漏水檢測",
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
              📞 電話諮詢漏水問題
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
              LINE 傳漏水照片
            </a>
          </div>
        </div>
      </section>

      {/* 抓漏項目 */}
      <section style={{ padding: "75px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "15px",
            }}
          >
            雙北抓漏與漏水檢查
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
            漏水位置不一定等於真正漏水點，
            需搭配水痕、管線配置及現場狀況綜合判斷。
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

                <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
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

      {/* 流程 */}
      <section
        style={{
          padding: "75px 20px",
          background: "#111827",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "45px",
            }}
          >
            抓漏檢查流程
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
              ["01", "了解漏水狀況", "確認水痕、滴水時間、位置及目前漏水程度。"],
              ["02", "現場檢查", "了解附近給排水、衛浴設備與相關管線配置。"],
              ["03", "判斷可能來源", "依現場跡象逐步縮小可能的漏水範圍與原因。"],
              ["04", "說明處理方式", "確認問題後，再依實際情況說明後續維修或工程方式。"],
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
                    fontWeight: 800,
                    marginBottom: "12px",
                  }}
                >
                  {number}
                </div>

                <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
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
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "45px",
            }}
          >
            抓漏常見問題
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
              <h3 style={{ fontSize: "19px", marginBottom: "10px" }}>
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
          找不到漏水到底從哪裡來？
        </h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          可先把漏水位置、牆面水痕或天花板照片傳給我們，
          再依現場狀況安排進一步檢查。
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