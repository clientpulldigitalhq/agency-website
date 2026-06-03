// @ts-check
import { ContactForm } from "./ContactForm";

export function ContactSection() {
	return (
		<section className="section px-4 py-20 text-center" id="contact">
			<div>
				<h2 className="mb-8 text-4xl sm:text-6xl font-medium text-brand-accent-secondary">
					CONTACT US
				</h2>
			</div>
			<ContactForm />
		</section>
	);
}
