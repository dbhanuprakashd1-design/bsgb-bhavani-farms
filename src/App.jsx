import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/layouts/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Statistics from "./components/home/Statistics";
import SheepSection from "./components/home/SheepSection";
import GoatSection from "./components/home/GoatSection";
import Breeds from "./components/home/Breeds";
import Gallery from "./components/home/Gallery";
import VideoSection from "./components/home/VideoSection";
import Testimonials from "./components/home/Testimonials";
import FAQ from "./components/home/FAQ";
import Contact from "./components/home/Contact";
import Footer from "./components/layouts/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
import ScrollToTop from "./components/common/ScrollToTop";
import Schema from "./components/SEO/Schema";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
       <Schema />
      <Navbar />

      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Statistics />

      <SheepSection />
      <GoatSection />

      <Breeds />
      <Gallery />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <Contact />

      <Footer />

      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default App;
