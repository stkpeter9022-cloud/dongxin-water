import Breadcrumbs from "../components/Breadcrumbs";
import ServiceContext from "../components/ServiceContext";
import PageFaqs from "../components/PageFaqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "台北新北水管疏通｜排水管堵塞與通管服務｜棟鑫水電",

  description:
    "棟鑫水電提供台北、新北雙北水管疏通與排水管通管服務，處理廚房排水堵塞、浴室排水不通、地排堵塞、排水管阻塞及排水異常，依現場管線與堵塞狀況評估處理。",

  alternates: {
    canonical: "https://www.dongxin24.com/shui-guan",
  },

  openGraph: {
    title: "台北新北水管疏通｜排水管通管｜棟鑫水電",
    description:
      "雙北水管疏通與排水管通管服務，處理廚房、浴室、地排及各類排水堵塞問題。",
    url: "https://www.dongxin24.com/shui-guan",
    siteName: "棟鑫水電",
    locale: "zh_TW",
    type: "website",
  },
};

const services = [
  {
    title: "排水管堵塞",
    text: "排水速度變慢、積水或完全不通，可依現場管線與堵塞情況評估適合的疏通方式。",
  },
  {
    title: "廚房排水不通",
    text: "廚房水槽排水緩慢、堵塞或回堵，協助檢查排水管線及可能的阻塞位置。",
  },
  {
    title: "浴室排水堵塞",
    text: "浴室排水孔、淋浴區排水不順或積水，可依現場狀況進行通管處理。",
  },
  {
    title: "地排堵塞",
    text: "地板排水孔排水緩慢、堵塞或出現回水問題，協助檢查與疏通。",
  },
  {
    title: "排水管回堵",
    text: "排水時出現冒水、回流或其他排水口跟著異常，可能涉及共用或較深處管線堵塞。",
  },
  {
    title: "排水管線檢查",
    text: "若經常反覆堵塞，可依現場管線配置、存水彎及排水狀況進一步判斷原因。",
  },
];

const faqs = [
  {
    q: "水管疏通費用怎麼計算？",
    a: "費用會依堵塞位置、管線長度、施工難度及現場狀況而不同，通常需先了解現場情況，再說明適合的處理方式與費用。",
  },
  {
    q: "為什麼排水管通完之後又堵住？",
    a: "可能是油垢、毛髮、異物再次堆積，也可能是管線坡度、存水彎、管路配置或較深處仍有阻塞，需要依現場狀況判斷。",
  },
  {
    q: "廚房水槽排水很慢需要通管嗎？",
    a: "排水逐漸變慢通常可能已有油垢或其他髒污堆積。若清理排水口後仍沒有改善，可安排進一步檢查。",
  },
  {
    q: "半夜排水管堵塞可以處理嗎？",
    a: "棟鑫水電提供雙北24小時緊急水電聯絡服務，若遇到嚴重回堵、積水或無法使用的情況，可先電話或 LINE 說明現場狀況。",
  },
];

export default function Page() {
  return (
    <main id="main-content"
      style={{
        background: "#f8fafc",
        color: "#111827",
      }}
    >
      <Breadcrumbs title="水管疏通" path="/shui-guan" />
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
            雙北水電服務｜排水管疏通
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
              水管疏通與排水處理
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
            處理住宅、店面常見排水管堵塞，
            包含廚房排水、浴室排水、地排堵塞、
            排水管回堵及各類排水不順問題。
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
              "水管疏通",
              "排水管堵塞",
              "廚房排水",
              "浴室排水",
              "地排堵塞",
              "排水回堵",
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
              📞 電話諮詢通管
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
              LINE 傳照片詢問
            </a>
          </div>
        </div>
      </section>

      {/* 服務內容 */}
      <section
        style={{
          padding: "75px 20px",
        }}
      >
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
            雙北水管疏通服務
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
            依堵塞位置、管線配置及現場狀況，
            評估適合的排水疏通方式。
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%, 280px), 1fr))",
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
            排水堵塞處理流程
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%, 220px), 1fr))",
              gap: "18px",
            }}
          >
            {[
              [
                "01",
                "說明堵塞狀況",
                "電話或 LINE 告知哪一處排水不通、是否有回堵或積水。",
              ],
              [
                "02",
                "確認管線",
                "到場了解排水口、管線配置及可能堵塞位置。",
              ],
              [
                "03",
                "評估疏通方式",
                "依現場管路與堵塞情況說明施工方式及費用。",
              ],
              [
                "04",
                "確認後施工",
                "經客戶確認後進行通管，並確認排水狀況。",
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
      <section
        style={{
          padding: "75px 20px",
        }}
      >
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
            水管疏通常見問題
          </h2>

          <PageFaqs items={faqs} />
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
          排水管堵住或開始回堵？
        </h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          可先電話或 LINE 說明堵塞位置與現場狀況，
          也可以傳送排水口及現場照片協助了解。
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
    <ServiceContext route="/shui-guan" />
    </main>
  );
}