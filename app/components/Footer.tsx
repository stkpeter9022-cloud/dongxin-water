import Link from "next/link";

const services = [
  {
    name: "跳電維修",
    href: "/tiao-dian",
  },
  {
    name: "漏水處理",
    href: "/lou-shui",
  },
  {
    name: "抓漏服務",
    href: "/zhua-lou",
  },
  {
    name: "水管疏通",
    href: "/shui-guan",
  },
  {
    name: "馬桶不通",
    href: "/ma-tong",
  },
  {
    name: "抽水馬達",
    href: "/chou-shui-ma-da",
  },
  {
    name: "沈水馬達",
    href: "/shen-shui-ma-da",
  },
  {
    name: "室內配線",
    href: "/shi-nei-pei-xian",
  },
  {
    name: "衛浴設備",
    href: "/wei-yu",
  },
];

const companyLinks = [
  {
    name: "關於棟鑫水電",
    href: "/about",
  },
  {
    name: "聯絡我們",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "#fff",
        padding: "75px 20px 95px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(230px,1fr))",
          gap: "45px",
        }}
      >
        {/* 公司資訊 */}
        <div>
          <h2
            style={{
              fontSize: "30px",
              margin: "0 0 18px",
              fontWeight: 800,
            }}
          >
            <span style={{ color: "#d6a52c" }}>⚡</span>{" "}
            棟鑫水電
          </h2>

          <p
            style={{
              margin: 0,
              color: "#cbd5e1",
              lineHeight: 1.9,
              fontSize: "15px",
            }}
          >
            棟鑫水電提供台北市、新北市雙北地區水電維修、
            水電工程與裝修水電服務，包含24小時緊急水電、
            跳電、漏水抓漏、水管疏通、馬桶、馬達、
            室內配線、給排水及衛浴工程。
          </p>

          <div
            style={{
              width: "45px",
              height: "3px",
              background: "#d6a52c",
              marginTop: "22px",
            }}
          />
        </div>

        {/* 熱門服務 */}
        <nav aria-label="水電服務">
          <h3
            style={{
              fontSize: "20px",
              margin: "0 0 20px",
              fontWeight: 800,
            }}
          >
            水電服務
          </h3>

          <div
            style={{
              display: "grid",
              gap: "11px",
            }}
          >
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "15px",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    color: "#d6a52c",
                    marginRight: "7px",
                  }}
                >
                  ›
                </span>

                {service.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* 公司導覽 */}
        <nav aria-label="網站導覽">
          <h3
            style={{
              fontSize: "20px",
              margin: "0 0 20px",
              fontWeight: 800,
            }}
          >
            網站導覽
          </h3>

          <div
            style={{
              display: "grid",
              gap: "11px",
              marginBottom: "28px",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#cbd5e1",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              <span
                style={{
                  color: "#d6a52c",
                  marginRight: "7px",
                }}
              >
                ›
              </span>
              首頁
            </Link>

            {companyLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                <span
                  style={{
                    color: "#d6a52c",
                    marginRight: "7px",
                  }}
                >
                  ›
                </span>

                {item.name}
              </Link>
            ))}
          </div>

          <h3
            style={{
              fontSize: "20px",
              margin: "0 0 14px",
              fontWeight: 800,
            }}
          >
            服務區域
          </h3>

          <p
            style={{
              margin: 0,
              color: "#cbd5e1",
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            台北市・新北市
            <br />
            雙北水電維修與工程服務
          </p>
        </nav>

        {/* 聯絡資訊 */}
        <div>
          <h3
            style={{
              fontSize: "20px",
              margin: "0 0 20px",
              fontWeight: 800,
            }}
          >
            聯絡棟鑫水電
          </h3>

          <div
            style={{
              color: "#cbd5e1",
              fontSize: "15px",
              lineHeight: 2,
            }}
          >
            <div>
              📞{" "}
              <a
                href="tel:0918808209"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                0918-808-209
              </a>
            </div>

            <div>📍 台北市・新北市</div>

            <div>🕒 24小時可聯絡</div>
          </div>

          <div
            style={{
              marginTop: "22px",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <a
              href="tel:0918808209"
              style={{
                minHeight: "48px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 20px",
                background: "#d6a52c",
                color: "#111827",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: 800,
                fontSize: "15px",
              }}
            >
              📞 立即來電
            </a>

            <a
              href="https://line.me/ti/p/ezn_Ad6UpZ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                minHeight: "48px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 20px",
                background: "#06C755",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: 800,
                fontSize: "15px",
              }}
            >
              💬 LINE詢問
            </a>
          </div>
        </div>
      </div>

      {/* 分隔線 */}
      <div
        style={{
          maxWidth: "1200px",
          height: "1px",
          background: "#334155",
          margin: "50px auto 25px",
        }}
      />

      {/* Copyright */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <p
          style={{
            margin: 0,
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "14px",
            lineHeight: 1.8,
          }}
        >
          © 2026 棟鑫水電｜台北・新北水電工程與24小時緊急維修
        </p>
      </div>
    </footer>
  );
}