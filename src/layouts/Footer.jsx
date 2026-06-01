import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

import Navlinks from "./Navlinks";

const currentYear = new Date().getFullYear();

function Footer() {
	return (
		<footer className="bg-brand-secondary mt-20 p-6">
			<nav className="mx-auto flex w-full flex-col sm:max-w-110">
				<ul className="flex-center justify-between">
					<li className="text-brand-accent-secondary">
						<a
							href="https://wa.me/+233209717786"
							title="Whatsapp"
							target="_blank"
							rel="noopener"
						>
							<FaWhatsapp size={40} />
						</a>
					</li>
					<li className="text-brand-accent-secondary">
						<a
							href="https://github.com/clientpulldigitalhq"
							title="Github"
							target="_blank"
							rel="noopener"
						>
							<FaGithub size={40} />
						</a>
					</li>
					<li className="text-brand-accent-secondary">
						<a
							href="mailto:clientpulldigital@gmail.com"
							title="Email"
							target="_blank"
							rel="noopener"
						>
							<HiOutlineMailOpen size={40} />
						</a>
					</li>
				</ul>
				<Navlinks styles={"flex mt-8 justify-between"} />
			</nav>
			<p className="mt-8 text-center font-light text-white">
				&copy; {currentYear} IntegraFlow Solutions. All right reserved.
			</p>
		</footer>
	);
}

export default Footer;
