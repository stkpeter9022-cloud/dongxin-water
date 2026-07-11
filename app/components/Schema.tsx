export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "棟鑫水電",
    image: "https://你的網域.com/icon.png",
    telephone: "0918-808-209",
    url: "https://你的網域.com",
    priceRange: "$$",
    areaServed: [
      "台北市",
      "新北市"
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "TW"
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
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    sameAs: [
      "https://line.me/ti/p/ezn_Ad6UpZ"
    ]
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