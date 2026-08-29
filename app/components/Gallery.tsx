import Image from "next/image";
import Link from "next/link";

const cases = [
  {
    image: "/case5.jpg",
    category: "給排水工程",
    title: "冷熱水管重新配置",
    desc: "依照現場使用需求重新規劃冷熱水管路，進行管線配置、更新與相關給排水施工。",
    href: "/lou-shui",
  },
  {
    image: "/case7.jpg",
    category: "馬達設備工程",
    title: "沈水馬達更換",
    desc: "沈水馬達、污水馬達檢查與更換，依現場設備及排水需求進行施工。",
    href: "/shen-shui-ma-da",
  },
  {
    image: "/case2.jpg",
    category: "衛浴工程",
    title: "衛浴設備安裝",
    desc: "馬桶、洗臉盆、水龍頭及相關衛浴設備安裝、更換與給排水施工。",
    href: "/wei-yu",
  },
  {
    image: "/case3.jpg",
    category: "配電工程",
    title: "配電箱檢修",
    desc: "針對跳電、漏電、迴路及配電箱異常進行現場檢查，依實際狀況安排維修。",
    href: "/tiao-dian",
  },
  {
    image: "/case8.jpg",
    category: "電力工程",
    title: "電表底座更換",
    desc: "針對電表底座燒熔、老化或接點異常等問題，依現場狀況進行檢查與更換。",
    href: "/tiao-dian",
  },
  {
    image: "/case6.jpg",
    category: "馬達設備工程",
    title: "抽水馬達更換",
    desc: "抽水馬達、加壓馬達檢修與更換，依供水、水壓及設備狀況進行處理。",
    href: "/chou-shui-ma-da",
  },
  {
    image: "/case4.jpg",
    category: "漏水工程",
    title: "漏水檢測與修復",
    desc: "針對牆面、管線及現場漏水狀況進行檢查，確認可能原因後評估後續修復方式。",
    href: "/zhua-lou",
  },
  {
    image: "/case10.jpg",
    category: "配電工程",
    title: "無熔絲開關更換",
    desc: "針對無熔絲開關燒熔、老化或異常跳脫等問題進行檢查，依現場狀況安排更換。",
    href: "/tiao-dian",
  },
  {
    image: "/case1.jpg",
    category: "排水工程",
    title: "排水管疏通",
    desc: "處理廚房、浴室、地排及排水管堵塞問題，依管線與堵塞狀況進行疏通。",
    href: "/shui-guan",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      style={{
        padding: "110px 20px",
        background: "#f5f6f7",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* 標題 */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
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
            PROJECTS
          </div>

          <h2
            id="gallery-title"
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            雙北水電工程實績
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.8,
            }}
          >
            棟鑫水電提供台北市、新北市水電維修與工程服務，
            從給排水、配電、馬達、衛浴到漏水與排水問題，
            透過實際施工案例了解我們的服務內容。
          </p>
        </div>

        {/* 工程案例 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "26px",
          }}
        >
          {cases.map((item) => (
            <article
              key={item.title}
              style={{
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                border: "1px solid #e5e7eb",
                boxShadow: "0 10px 30px rgba(15,23,42,.07)",
              }}
            >
              {/* 圖片 */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "250px",
                  overflow: "hidden",
                  background: "#e5e7eb",
                }}
              >
                <Image
                  src={item.image}
                  alt={`${item.title}施工案例｜棟鑫水電`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    left: "18px",
                    bottom: "18px",
                    padding: "7px 12px",
                    borderRadius: "7px",
                    background: "rgba(17,24,39,.9)",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 700,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {item.category}
                </div>
              </div>

              {/* 內容 */}
              <div
                style={{
                  padding: "25px 24px 28px",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 12px",
                    color: "#111827",
                    fontSize: "21px",
                    fontWeight: 800,
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: "0 0 20px",
                    color: "#64748b",
                    fontSize: "15px",
                    lineHeight: 1.85,
                  }}
                >
                  {item.desc}
                </p>

                <Link
                  href={item.href}
                  aria-label={`查看${item.title}相關服務`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    color: "#9a6b00",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 800,
                  }}
                >
                  查看相關服務
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* 補充文字 */}
        <div
          style={{
            maxWidth: "820px",
            margin: "55px auto 0",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              margin: "0 0 14px",
              color: "#111827",
              fontSize: "24px",
              fontWeight: 800,
            }}
          >
            水電維修與工程依現場狀況評估
          </h3>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "15px",
              lineHeight: 1.9,
            }}
          >
            不同住宅、店面與工程現場的管線配置、
            設備規格及施工條件皆可能不同。
            可先提供現場照片、設備型號或工程需求，
            再依實際狀況確認適合的處理方式。
          </p>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "45px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 20px",
              color: "#64748b",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            有水電維修、裝修或工程需求？
            <br />
            歡迎提供現場照片與需求內容。
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:0918808209"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "190px",
                height: "54px",
                padding: "0 24px",
                borderRadius: "8px",
                background: "#111827",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              📞 電話諮詢工程
            </a>

            <a
              href="https://line.me/ti/p/ezn_Ad6UpZ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "190px",
                height: "54px",
                padding: "0 24px",
                borderRadius: "8px",
                background: "#06C755",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              💬 LINE 工程諮詢
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}