export default function Schema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": ["Plumber", "Electrician"],

    name: "棟鑫水電",

    url: "https://www.dongxin24.com/",

    image: "https://www.dongxin24.com/icon.png",

    logo: "https://www.dongxin24.com/icon.png",

    telephone: "+886918808209",

    description:
      "棟鑫水電提供台北市、新北市雙北地區24小時水電維修與水電工程服務，專業處理水電急修、跳電維修、漏水抓漏、水管疏通、馬桶不通、抽水馬達、加壓馬達、室內配線、配電箱、給排水及衛浴工程。",

    areaServed: [
      {
        "@type": "City",
        name: "台北市",
      },
      {
        "@type": "City",
        name: "新北市",
      },
    ],

    address: {
      "@type": "PostalAddress",
      addressCountry: "TW",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",

      name: "棟鑫水電服務項目",

      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24小時水電急修",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "水電維修",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "台北水電維修",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "新北水電維修",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "跳電與電路維修",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "漏水抓漏",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "水管疏通",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "馬桶疏通與衛浴維修",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "抽水馬達維修",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "加壓馬達工程",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "室內配線工程",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "配電箱維修",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "給排水工程",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "衛浴工程",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "裝修水電工程",
          },
        },
      ],
    },

    sameAs: ["https://line.me/ti/p/ezn_Ad6UpZ"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}