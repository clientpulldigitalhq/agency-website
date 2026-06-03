// @ts-check

import { motion } from "motion/react";
import { ContactButton } from "./ContactButton";

export function HeroSection() {
	return (
		<section className="section bg-linear-to-b grid items-center justify-center my-auto from-brand-primary to-brand-primary  py-20 sm:py-10 sm:min-h-app-height text-center text-neutral">
			<div className="h-fit max-w-full">
				<div>
					<motion.h1
						initial={{ y: "-50%", opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.1, ease: "linear" }}
						viewport={{ once: true }}
						className="font-growland-black text-5xl sm:text-7xl max-w-3xl mx-auto font-black"
					>
						YOUR BUSINESS IS GROWING
					</motion.h1>

					<motion.h2
						initial={{ y: "30%", opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.2, ease: "linear" }}
						viewport={{ once: true }}
						className="font-growland-bold tracking-tight text-yellow-400"
					>
						CAN YOUR CURRENT SYSTEM KEEP UP?
					</motion.h2>

					<motion.p
						initial={{ y: "50%", opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.2, ease: "linear" }}
						viewport={{ once: true }}
						className="mt-4 text-neutral-secondary tracking-tighter max-w-lg mx-auto"
					>
						We help businesses grow through websites, workflow systems, and
						delivery coordination platforms that improve visibility, streamline
						operations, and create better customer experiences.
					</motion.p>
				</div>
				<ContactButton
					initial={{ y: "100%", opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.3, ease: "easeOut" }}
					viewport={{ once: true }}
					className="w-fit"
				/>
			</div>
		</section>
	);
}
