// @ts-check

import { SERVICES } from "./constants";

export function ServicesSection() {
	return (
		<section id="services" className="mt-20 text-center text-white">
			<h2 className="mb-5 font-semibold text-yellow-400 sm:mb-3">SERVICES</h2>
			<ul className="mb-8">
				{SERVICES.map(({ icon: Icon, ...service }) => (
					<li key={service.title}>
						<div className="sm:flex-center flex-col gap-4 sm:flex-row sm:justify-center">
							<div className="flex justify-center">
								{<Icon className="text-5xl text-teal-300 sm:text-3xl" />}
							</div>
							<h3 className="my-2 font-semibold uppercase">{service.title}</h3>
						</div>
						<p className="px-4 sm:px-50">{service.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
