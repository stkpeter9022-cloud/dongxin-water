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
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            雙北水電工程服務
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.8,
            }}
          >
            提供台北市、新北市水電維修與工程服務，
            <br />
            實際派工及施工時間依案件位置與現場需求安排。
          </p>
        </div>

        {/* 台北市 */}
        <div
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
              marginBottom: "24px",
            }}
          >
            <div
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
                台北市
              </h3>

              <p
                style={{
                  margin: "4px 0 0",
                  color: "#64748b",
                  fontSize: "14px",
                }}
              >
                水電維修・工程・裝修水電
              </p>
            </div>
          </div>

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
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* 新北市 */}
        <div
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
              marginBottom: "24px",
            }}
          >
            <div
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
                新北市
              </h3>

              <p
                style={{
                  margin: "4px 0 0",
                  color: "#64748b",
                  fontSize: "14px",
                }}
              >
                水電維修・工程・裝修水電
              </p>
            </div>
          </div>

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
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* 底部 CTA */}
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
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            不確定您的區域是否能安排？
            <br />
            歡迎直接聯繫，提供地址與工程需求確認。
          </p>

          <a
            href="tel:0918808209"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "210px",
              height: "56px",
              padding: "0 28px",
              borderRadius: "10px",
              background: "#111827",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "17px",
            }}
          >
            📞 電話確認服務區域
          </a>
        </div>
      </div>
    </section>
  );
}