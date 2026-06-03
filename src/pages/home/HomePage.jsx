// @ts-check

import { useEffect } from "react";

import { ScrollToTop } from "../../components/ui/ScrollToTop";
import { Footer } from "../../layouts/Footer/Footer";
import { Navbar } from "../../layouts/Navbar/Navbar";
import { AboutSection } from "./sections/about/AboutSection";
import { ContactSection } from "./sections/contact/ContactSection";
import { HeroSection } from "./sections/hero/HeroSection";
import { ServicesSection } from "./sections/services/ServicesSection";

export function HomePage() {
	useEffect(() => {
		const allSections = document.querySelectorAll(".section");

		/** 
     @param {IntersectionObserverEntry[]} entries
     @param {IntersectionObserver} observer

     */
		const observeSections = (entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;

				entry.target.classList.remove("section--hidden");

				observer.unobserve(entry.target);
			});
		};

		const sectionsObserver = new IntersectionObserver(observeSections, {
			root: null,
			threshold: 0.15,
		});

		allSections.forEach((section) => {
			section.classList.add("section--hidden");

			sectionsObserver.observe(section);
		});
	}, []);

	return (
		<main className="*:px-4">
			<ScrollToTop />
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<ContactSection />
			<Footer />
		</main>
	);
}
