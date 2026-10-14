import Breadcrumbs from "../components/Breadcrumbs";
import ServiceContext from "../components/ServiceContext";
import PageFaqs from "../components/PageFaqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "台北新北衛浴設備安裝｜馬桶・臉盆・龍頭安裝｜棟鑫水電",

  description:
    "棟鑫水電提供台北、新北雙北衛浴設備安裝與浴室水電工程，包含馬桶安裝、洗臉盆、面盆龍頭、淋浴龍頭、花灑及衛浴設備更換，依現場管線與設備條件評估施工。",

  alternates: {
    canonical: "https://www.dongxin24.com/wei-yu",
  },

  openGraph: {
    title: "台北新北衛浴設備安裝｜浴室水電工程｜棟鑫水電",
    description:
      "雙北衛浴設備安裝，提供馬桶、洗臉盆、龍頭、淋浴設備及浴室水電工程。",
    url: "https://www.dongxin24.com/wei-yu",
    siteName: "棟鑫水電",
    locale: "zh_TW",
    type: "website",
  },
};

const services = [
  {
    title: "馬桶安裝與更換",
    text: "一般馬桶、單體馬桶及各類衛浴馬桶安裝，更換前確認排水距離、進水位置及現場施工條件。",
  },
  {
    title: "洗臉盆安裝",
    text: "提供洗臉盆、面盆及相關排水與給水設備安裝，依現場尺寸與管線位置安排施工。",
  },
  {
    title: "水龍頭更換",
    text: "處理面盆龍頭、廚房龍頭及浴室龍頭老化、漏水、故障等更換需求。",
  },
  {
    title: "淋浴龍頭與花灑",
    text: "提供淋浴龍頭、蓮蓬頭、花灑等設備安裝與更換，施工前確認冷熱水管線及設備規格。",
  },
  {
    title: "衛浴給排水",
    text: "配合衛浴設備位置進行給水、排水管線調整或新增，實際施工方式依現場條件評估。",
  },
  {
    title: "浴室裝修水電",
    text: "浴室翻修或重新配置設備時，可配合馬桶、面盆、淋浴及相關用電設備規劃水電管線。",
  },
];

const faqs = [
  {
    q: "自己買馬桶可以請你們安裝嗎？",
    a: "可以，但施工前需要確認馬桶規格、排水距離、進水位置及現場條件是否符合。若設備尺寸或規格不合，可能需要另外調整。",
  },
  {
    q: "更換馬桶一定可以直接裝新的嗎？",
    a: "不一定。不同馬桶的排水距離、尺寸與安裝方式可能不同，需要確認舊有排水孔、給水位置及新設備規格。",
  },
  {
    q: "拆舊馬桶有破裂風險嗎？",
    a: "既有馬桶拆卸時，可能因使用年限、固定方式、黏著材料或陶瓷狀況而有損壞風險，施工前會依現場情況說明。",
  },
  {
    q: "可以只更換浴室水龍頭或花灑嗎？",
    a: "可以。若既有管線與接頭狀況正常，可依設備規格進行更換；若發現管件老化、牙口損壞或其他問題，會再說明需要的處理方式。",
  },
  {
    q: "浴室翻修可以一起做水電嗎？",
    a: "可以。若有浴室翻修需求，可依設備配置規劃給排水、冷熱水管線、插座、照明及其他相關水電工程。",
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
      <Breadcrumbs title="衛浴設備工程" path="/wei-yu" />
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
            雙北水電工程｜衛浴設備
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
              衛浴設備安裝與浴室水電
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
            提供住宅、店面衛浴設備安裝與更換，
            包含馬桶、洗臉盆、水龍頭、淋浴設備、花灑，
            以及浴室給排水與裝修水電工程。
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
              "馬桶安裝",
              "洗臉盆安裝",
              "水龍頭更換",
              "淋浴設備",
              "衛浴給排水",
              "浴室水電",
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
              📞 電話工程諮詢
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

      {/* 服務項目 */}
      <section style={{ padding: "75px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "15px",
            }}
          >
            雙北衛浴設備安裝服務
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
            從單項衛浴設備更換，到浴室給排水與裝修水電，
            依設備規格及現場條件評估施工。
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
            衛浴設備安裝流程
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
                "提供設備資訊",
                "可先提供設備照片、品牌型號及預計安裝位置。",
              ],
              [
                "02",
                "確認現場條件",
                "確認給排水位置、尺寸、設備規格與施工空間。",
              ],
              [
                "03",
                "說明施工內容",
                "依現場狀況說明安裝方式、可能需要的調整與費用。",
              ],
              [
                "04",
                "確認後施工",
                "確認內容後安排施工，完成後確認設備與給排水狀況。",
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
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "45px",
            }}
          >
            衛浴設備安裝常見問題
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
          要更換衛浴設備或規劃浴室水電？
        </h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          可先提供設備照片、型號及現場照片，
          我們再依設備規格與施工條件協助評估。
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
    <ServiceContext route="/wei-yu" />
    </main>
  );
}