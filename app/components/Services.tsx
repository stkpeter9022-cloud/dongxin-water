import Link from "next/link";

const services = [
  {
    icon: "⚡",
    title: "跳電維修",
    desc: "處理跳電、漏電、斷電、無熔絲開關及配電箱異常，依現場電路狀況進行檢查與維修。",
    link: "/tiao-dian",
    tag: "電力維修",
  },
  {
    icon: "💧",
    title: "漏水處理",
    desc: "處理水管漏水、浴室漏水、室內滲水及給排水管線異常，依現場狀況評估修復方式。",
    link: "/lou-shui",
    tag: "水路維修",
  },
  {
    icon: "🔍",
    title: "漏水抓漏",
    desc: "針對牆面滲水、天花板漏水、不明水痕及管線漏水進行檢查，協助判斷可能的漏水原因。",
    link: "/zhua-lou",
    tag: "漏水檢測",
  },
  {
    icon: "🚿",
    title: "水管疏通",
    desc: "處理廚房、浴室、地排及排水管堵塞、排水緩慢與回堵等排水問題。",
    link: "/shui-guan",
    tag: "排水工程",
  },
  {
    icon: "🚽",
    title: "馬桶疏通與處理",
    desc: "處理馬桶不通、排水緩慢、異物堵塞及反覆堵塞，必要時依現場狀況評估拆裝處理。",
    link: "/ma-tong",
    tag: "衛浴維修",
  },
  {
    icon: "⚙️",
    title: "抽水與加壓馬達",
    desc: "抽水馬達、加壓馬達檢修與更換，處理馬達不運轉、不出水、水壓異常及設備故障。",
    link: "/chou-shui-ma-da",
    tag: "馬達工程",
  },
  {
    icon: "🔧",
    title: "沈水馬達工程",
    desc: "沈水馬達、污水馬達及抽水設備檢修與更換，處理污水排放、積水及相關設備問題。",
    link: "/shen-shui-ma-da",
    tag: "馬達工程",
  },
  {
    icon: "🔌",
    title: "室內配線工程",
    desc: "老屋重拉線、新增專用迴路、插座照明配線、冷氣迴路及配電箱整理等電力工程。",
    link: "/shi-nei-pei-xian",
    tag: "電力工程",
  },
  {
    icon: "🛁",
    title: "衛浴設備工程",
    desc: "馬桶、洗臉盆、水龍頭、淋浴設備及相關衛浴設備安裝、更換與給排水施工。",
    link: "/wei-yu",
    tag: "衛浴工程",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
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
            PROFESSIONAL SERVICES
          </div>

          <h2
            id="services-title"
            style={{
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              color: "#111827",
              margin: "0 0 16px",
              lineHeight: 1.2,
            }}
          >
            雙北水電維修與工程服務
          </h2>

          <p
            style={{
              maxWidth: "780px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.8,
            }}
          >
            棟鑫水電提供台北市、新北市水電維修與工程服務，
            從緊急故障、漏水、排水、馬達到室內配線與衛浴工程，
            依現場需求安排適合的處理方式。
          </p>
        </div>

        {/* 服務卡片 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {services.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              aria-label={`了解${item.title}服務`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <article
                style={{
                  position: "relative",
                  height: "100%",
                  background: "#fff",
                  borderRadius: "18px",
                  padding: "30px",
                  minHeight: "275px",
                  boxShadow: "0 8px 28px rgba(15,23,42,.07)",
                  border: "1px solid #e5e7eb",
                }}
              >
                {/* 金色裝飾線 */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "30px",
                    width: "45px",
                    height: "4px",
                    background: "#d6a52c",
                    borderRadius: "0 0 6px 6px",
                  }}
                />

                {/* Icon */}
                <div
                  aria-hidden="true"
                  style={{
                    width: "58px",
                    height: "58px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "14px",
                    background: "#f8fafc",
                    border: "1px solid #f1f5f9",
                    fontSize: "29px",
                    marginBottom: "20px",
                  }}
                >
                  {item.icon}
                </div>

                {/* 類別 */}
                <div
                  style={{
                    display: "inline-block",
                    marginBottom: "8px",
                    color: "#9a6b00",
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: ".5px",
                  }}
                >
                  {item.tag}
                </div>

                <h3
                  style={{
                    fontSize: "21px",
                    fontWeight: 800,
                    color: "#111827",
                    margin: "0 0 12px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: 1.8,
                    fontSize: "15px",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>

                <div
                  style={{
                    marginTop: "20px",
                    color: "#9a6b00",
                    fontSize: "14px",
                    fontWeight: 800,
                  }}
                >
                  查看服務內容
                  <span
                    aria-hidden="true"
                    style={{
                      marginLeft: "6px",
                    }}
                  >
                    →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* 工程服務補充 */}
        <div
          style={{
            maxWidth: "850px",
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
              lineHeight: 1.4,
            }}
          >
            不只緊急維修，也承接水電工程
          </h3>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "15px",
              lineHeight: 1.9,
            }}
          >
            除了跳電、漏水、馬桶、水管與馬達等日常維修，
            也可洽詢住宅翻修、室內配線、專用迴路、
            給排水配置、衛浴設備及相關裝修水電工程。
            實際施工方式與費用依現場條件評估。
          </p>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "45px",
            padding: "32px",
            borderRadius: "18px",
            background: "#111827",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 420px",
            }}
          >
            <h3
              style={{
                margin: "0 0 8px",
                fontSize: "24px",
                fontWeight: 800,
              }}
            >
              有水電維修或工程需求？
            </h3>

            <p
              style={{
                margin: 0,
                color: "#cbd5e1",
                lineHeight: 1.7,
                fontSize: "15px",
              }}
            >
              可先提供現場照片、設備型號或工程需求，
              讓我們初步了解現場狀況。
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:0918808209"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "175px",
                height: "54px",
                padding: "0 22px",
                borderRadius: "8px",
                background: "#d6a52c",
                color: "#111827",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              📞 立即來電
            </a>

            <a
              href="https://line.me/ti/p/ezn_Ad6UpZ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "175px",
                height: "54px",
                padding: "0 22px",
                borderRadius: "8px",
                background: "#06C755",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              💬 LINE 傳照片
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}