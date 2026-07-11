import Image from "next/image";

const cases = [
  {
    image: "/case5.jpg",
    title: "水管配置",
    desc: "冷熱水管重新配置、更新施工。"
  },
  {
    image: "/case7.jpg",
    title: "沈水馬達更換",
    desc: "沈水抽水馬達更換、安裝與故障排除。"
  },
  {
    image: "/case2.jpg",
    title: "衛浴設備安裝",
    desc: "洗手台、龍頭、馬桶安裝施工。"
  },
  {
    image: "/case3.jpg",
    title: "配電箱維修",
    desc: "跳電、漏電、配電箱檢修。"
  },
  {
    image: "/case8.jpg",
    title: "電表底座燒熔更換",
    desc: "更換燒毀電表底座，恢復安全供電。"
  },
  {
    image: "/case6.jpg",
    title: "抽水馬達更換",
    desc: "抽水馬達安裝、更換及維修服務。"
  },
  {
    image: "/case4.jpg",
    title: "漏水抓漏",
    desc: "快速找出漏水原因並完成修復。"
  },
  {
    image: "/case10.jpg",
    title: "無熔絲開關燒熔更換",
    desc: "更換燒毀無熔絲開關，排除跳電故障。"
  },
  {
    image: "/case1.jpg",
    title: "排水管疏通",
    desc: "專業疏通廚房、浴室及排水管堵塞。"
  }
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        padding: "100px 20px",
        background: "#f8fafc",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "60px",
        }}
      >
        工程案例
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {cases.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 8px 25px rgba(0,0,0,.08)",
              transition: ".3s",
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={420}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "22px" }}>
              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: 1.8,
                  fontSize: "17px",
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}