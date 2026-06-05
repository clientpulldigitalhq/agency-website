// @ts-check

import { ScrollToTop } from "../../components/ui/ScrollToTop";
import { NavbarProvider } from "../../context/NavbarProvider";
import { Footer } from "../../layouts/Footer/Footer";
import { Navbar } from "../../layouts/Navbar/Navbar";
import { AboutSection } from "./sections/about/AboutSection";
import { ContactSection } from "./sections/contact/ContactSection";
import { HeroSection } from "./sections/hero/HeroSection";
import { ServicesSection } from "./sections/services/ServicesSection";

export function HomePage() {
	return (
		<NavbarProvider>
			<main className="*:px-4">
				<ScrollToTop />
				<Navbar />
				<HeroSection />
				<AboutSection />
				<ServicesSection />
				<ContactSection />
				<Footer />
			</main>
		</NavbarProvider>
	);
}
