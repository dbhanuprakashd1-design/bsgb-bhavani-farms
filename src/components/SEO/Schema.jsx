import { Helmet } from "react-helmet-async";

const Schema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "BSGB Bhavani Farms",
        image: "/logo.png",
        telephone: "+91-9866274787",
        email: "balajipress4@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Telaprolu Village",
          addressLocality: "Krishna District",
          addressRegion: "Andhra Pradesh",
          postalCode: "521301",
          addressCountry: "IN",
        },
      })}
    </script>
  </Helmet>
);

export default Schema;
