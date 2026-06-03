// @ts-check
import { motion } from "motion/react";

import { ContactForm } from "./ContactForm";

export function ContactSection() {
	return (
		<motion.section
			initial={{ y: "60", opacity: 0 }}
			whileInView={{ y: "0", opacity: 1 }}
			transition={{ delay: 0.3, ease: "easeInOut" }}
			viewport={{ once: true }}
			className=" px-4 py-20 text-center"
			id="contact"
		>
			<div>
				<h2 className="mb-8 text-4xl sm:text-6xl font-medium text-brand-accent-secondary">
					CONTACT US
				</h2>
			</div>
			<ContactForm />
		</motion.section>
	);
}
