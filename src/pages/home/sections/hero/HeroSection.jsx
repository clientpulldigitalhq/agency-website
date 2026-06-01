// @ts-check

import { ContactButton } from "./ContactButton";

export function HeroSection() {
	return (
		<section className="bg-linear-to-b grid items-center justify-center my-auto from-brand-primary to-brand-primary  py-20 sm:py-10 sm:min-h-app-height text-center text-neutral">
			<div className="h-fit max-w-full">
				<div>
					<h1 className="font-growland-black text-5xl sm:text-7xl max-w-3xl mx-auto font-black">
						YOUR BUSINESS IS GROWING
					</h1>
					<h3 className="font-growland-bold tracking-tight text-yellow-400">
						CAN YOUR CURRENT SYSTEM KEEP UP?
					</h3>
					<p className="mt-4 text-neutral-secondary tracking-tighter max-w-lg mx-auto">
						We help businesses grow through websites, workflow systems, and
						delivery coordination platforms that improve visibility, streamline
						operations, and create better customer experiences.
					</p>
				</div>
				<ContactButton className="w-fit" />
			</div>
		</section>
	);
}
