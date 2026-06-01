// @ts-check
import { ABOUT_AGENCY_INFO } from "./constants";

export function AboutSection() {
	return (
		<section className="text-center" id="about">
			<div className="py-20">
				<h2 className="mb-2 text-4xl sm:text-6xl tracking-tight font-semibold text-brand-accent-secondary">
					ABOUT US
				</h2>

				<h3 className="mb-4 text-sm text-neutral-secondary">
					A small but focused team building digital solutions that helps
					businesses grow.
				</h3>

				<p className="mb-8 text-neutral-secondary tracking-tight text-sm max-w-xl mx-auto">
					We are designers and developers based in Ghana — building websites,
					workflow systems, and delivery coordination platforms for businesses
					that are ready to grow. We do not just build websites. We build
					systems that help businesses run smoother, serve customers better and
					grow faster.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 max-w-3xl mx-auto">
					{ABOUT_AGENCY_INFO.map(({ icon: Icon, ...about }) => (
						<div
							className="text-brand-primary rounded-lg bg-white p-4 transition-transform duration-300 hover:scale-102"
							key={about.title}
						>
							<div className="flex-center flex-col">
								<div className="flex-center my-2 gap-2">
									<div>
										<Icon className="text-3xl" />
									</div>
									<h4 className="font-medium">{about.title}</h4>
								</div>
								<p>{about.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
