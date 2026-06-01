// @ts-check

import { Footer } from "../../layouts/Footer/Footer";
import { Navbar } from "../../layouts/Navbar/Navbar";
import { AboutSection } from "./sections/about/AboutSection";
import { ContactSection } from "./sections/contact/ContactSection";
import { HeroSection } from "./sections/hero/HeroSection";
import { ServicesSection } from "./sections/services/ServicesSection";

export function HomePage() {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<ContactSection />
			<Footer />
		</main>
	);
}
