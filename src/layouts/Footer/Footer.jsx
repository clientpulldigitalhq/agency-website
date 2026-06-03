// @ts-check

import { BRANDING_NAME } from "../../shared/constants";
import { Navlinks } from "../Navbar/Navlinks";
import { CONTACT_LINKS } from "./contants";

export function Footer() {
	return (
		<footer className="bg-brand-secondary mt-20 p-6 ">
			<nav className="mx-auto flex w-full flex-col sm:max-w-110">
				<ul className="flex-center w-fit  gap-x-4 gap-y-2 mx-auto justify-between">
					{CONTACT_LINKS.map(({ icon: Icon, path, title }) => (
						<li key={title} className="text-brand-accent-secondary">
							<a href={path} title={title} target="_blank" rel="noopener">
								<Icon size={40} />
							</a>
						</li>
					))}
				</ul>
				<Navlinks className="flex mt-8 justify-between -ml-4" />
			</nav>

			<p className="mt-8 text-center font-light text-netural ">
				&copy; {new Date().getFullYear()} {BRANDING_NAME}. All right reserved.
			</p>
		</footer>
	);
}
