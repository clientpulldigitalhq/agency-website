import Footer from "../../layouts/Footer";
import { Navbar } from "../../layouts/Navbar";
import { AboutSection } from "./sections/about/AboutSection";
import { ContactSection } from "./sections/contact/ContactSection";
import { HeroSection } from "./sections/hero/HeroSection";
import { ServicesSection } from "./sections/services/ServicesSection";

export function HomePage() {
  return (
    <>
      <main>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
