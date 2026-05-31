import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import ServicesSection from "../components/services/ServicesSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </>
  );
}

export default HomePage;
