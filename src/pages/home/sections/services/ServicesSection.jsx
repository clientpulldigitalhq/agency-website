// @ts-check

import { SERVICES } from "./constants";

export function ServicesSection() {
	return (
		<section id="services" className="py-20">
			<h2 className="text-4xl mb-6 text-center sm:text-6xl font-semibold text-brand-accent-secondary">
				SERVICES
			</h2>

			<ul className="grid h-fit gap-y-12 max-w-2xl mx-auto">
				{SERVICES.map(({ icon: Icon, ...service }) => (
					<li
						key={service.title}
						className="grid grid-cols-[auto_1fr] gap-x-2 "
					>
						<Icon className="text-5xl border-2 p-0.5 sm:p-1 rounded-md text-brand-accent size-8" />

						<h3 className="font-semibold uppercase text-neutral">
							{service.title}
						</h3>

						<p className="col-start-2 tracking-tight text-neutral-secondary">
							{service.description}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}
