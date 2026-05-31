import { ContactForm } from "./ContactForm";

export function ContactSection() {
	return (
		<section className="px-4 text-center text-white" id="contact">
			<div>
				<h2 className="mb-4 font-medium text-yellow-400">CONTACT US</h2>
			</div>
			<ContactForm />
		</section>
	);
}
