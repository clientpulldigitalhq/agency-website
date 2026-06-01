// @ts-check

import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { socialsConfig } from "../../config/socialsConfig";

export const CONTACT_LINKS = [
	{
		title: "Whatsapp",
		path: `https://wa.me/+${socialsConfig.whatsapp}`,
		icon: FaWhatsapp,
	},
	{
		title: "Github",
		path: `https://github.com/${socialsConfig.github}`,
		icon: FaGithub,
	},
	{
		title: "Email",
		path: `mailto:${socialsConfig.email}`,
		icon: HiOutlineMailOpen,
	},
];
