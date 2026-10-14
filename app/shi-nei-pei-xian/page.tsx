import Breadcrumbs from "../components/Breadcrumbs";
import ServiceContext from "../components/ServiceContext";
import PageFaqs from "../components/PageFaqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "台北新北室內配線｜老屋重拉線與專用迴路工程｜棟鑫水電",

  description:
    "棟鑫工程行承接台北、新北、桃園、基隆較大型室內配線與老屋換線工程，處理老屋重拉線、電線更新、插座迴路、冷氣專用迴路、配電箱整理及新增專用迴路，依現場用電需求與施工條件評估。",

  alternates: {
    canonical: "https://www.dongxin24.com/shi-nei-pei-xian",
  },

  openGraph: {
    title: "台北新北室內配線｜老屋重拉線｜棟鑫水電",
    description:
      "雙北室內配線工程，提供老屋重拉線、專用迴路、插座迴路、冷氣迴路及配電箱整理。",
    url: "https://www.dongxin24.com/shi-nei-pei-xian",
    siteName: "棟鑫水電",
    locale: "zh_TW",
    type: "website",
  },
};

const services = [
  {
    title: "老屋重拉線",
    text: "老舊住宅若線路使用多年、線徑不足或迴路配置不符合現代用電需求，可依現場狀況重新規劃配線。",
  },
  {
    title: "新增專用迴路",
    text: "冷氣、烘衣機、電熱水器、廚房設備等高耗電設備，可依實際功率與現場條件規劃專用迴路。",
  },
  {
    title: "插座與照明配線",
    text: "新增或調整插座、開關、燈具及相關配線，配合裝修或使用需求重新配置。",
  },
  {
    title: "冷氣專用迴路",
    text: "分離式冷氣或其他冷氣設備，可依設備電壓、電流與現場距離規劃專用電源迴路。",
  },
  {
    title: "配電箱整理",
    text: "針對既有配電箱迴路混亂、開關老化或新增設備需求，協助整理與重新分配迴路。",
  },
  {
    title: "裝修水電配線",
    text: "住宅、店面與辦公空間裝修，可配合木作、天花板、廚衛及設備位置規劃水電管線。",
  },
];

const faqs = [
  {
    q: "老屋一定要全部重拉電線嗎？",
    a: "不一定。是否需要全面更換要看線路年限、線材狀況、負載需求、配電方式及現場檢查結果，有些情況可以局部改善。",
  },
  {
    q: "新增冷氣一定要拉專用迴路嗎？",
    a: "要依冷氣設備功率、原有迴路負載與配線狀況判斷。較高功率設備通常需要獨立迴路，以避免共用迴路負載過高。",
  },
  {
    q: "室內配線工程怎麼報價？",
    a: "費用會依線徑、迴路數量、施工距離、明管或暗管、是否需要打鑿及現場施工難度而不同，通常需現場評估後才能準確報價。",
  },
  {
    q: "可以只新增一個插座或一組迴路嗎？",
    a: "可以，實際仍需確認原有配電箱容量、線路狀況與施工路徑，再決定合適的配線方式。",
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
      <Breadcrumbs title="室內配線與老屋換線" path="/shi-nei-pei-xian" />
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
            雙北水電工程｜室內配線
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
              室內配線與老屋重拉線
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
            提供住宅、店面、辦公空間室內配線工程，
            包含老屋重拉線、新增專用迴路、插座照明配線、
            冷氣迴路、配電箱整理及裝修水電配置。
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
              "老屋重拉線",
              "專用迴路",
              "插座配線",
              "冷氣迴路",
              "配電箱整理",
              "裝修水電",
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
              LINE 傳現場照片
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "75px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "15px",
            }}
          >
            雙北室內配線工程
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
            依用電需求、設備功率、線路距離與現場施工條件，
            規劃適合的配線方式。
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%, 280px), 1fr))",
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
            室內配線施工流程
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%, 220px), 1fr))",
              gap: "18px",
            }}
          >
            {[
              [
                "01",
                "了解需求",
                "確認設備、迴路、插座及裝修空間的實際用電需求。",
              ],
              [
                "02",
                "現場評估",
                "確認既有配電箱、線路、施工路徑及現場條件。",
              ],
              [
                "03",
                "規劃與報價",
                "依線徑、距離、迴路與施工方式說明工程內容及費用。",
              ],
              [
                "04",
                "確認後施工",
                "確認施工內容後進場施作，完成後檢查迴路與設備狀況。",
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

      <section style={{ padding: "75px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(30px,5vw,42px)",
              marginBottom: "45px",
            }}
          >
            室內配線常見問題
          </h2>

          <PageFaqs items={faqs} />
        </div>
      </section>

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
          有室內配線或裝修水電需求？
        </h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: 1.8,
            marginBottom: "28px",
          }}
        >
          可先提供現場照片、設備需求與大約施工位置，
          再依實際條件安排現場評估。
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
    <ServiceContext route="/shi-nei-pei-xian" />
    </main>
  );
}