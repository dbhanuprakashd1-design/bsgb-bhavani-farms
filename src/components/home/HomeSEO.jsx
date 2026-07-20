import { Helmet } from "react-helmet-async";

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>
          BSGB Bhavani Farms | Premium Sheep & Goat Farming in Andhra Pradesh
        </title>

        <meta
          name="description"
          content="BSGB Bhavani Farms provides healthy sheep, goats, quality breeding, livestock management, and professional farming services in Andhra Pradesh."
        />

        <meta
          name="keywords"
          content="sheep farm, goat farm, sheep farming Andhra Pradesh, goat farming, livestock, BSGB Bhavani Farms, Nellore sheep, Boer goat"
        />

        <meta name="author" content="BSGB Bhavani Farms" />

        <meta
          property="og:title"
          content="BSGB Bhavani Farms"
        />

        <meta
          property="og:description"
          content="Healthy sheep and goats for breeding and farming."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="/logo.png"
        />

        <meta
          property="og:url"
          content="https://www.bsgbbhavanifarms.com"
        />
      </Helmet>

      {/* Existing Hero JSX */}
    </>
  );
};

export default Hero;