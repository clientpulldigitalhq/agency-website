import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import ServicesSection from "../components/services/ServicesSection";
import ContactSection from "../components/contact/ContactSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
