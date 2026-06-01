// @ts-check

import { cn } from "../../shared/utils/cn";
import { NAV_LINKS } from "./constants";

/**
 * @typedef {import("react").ComponentProps<"ul">} NavlinksProps
 *
 * @param {NavlinksProps} props
 */

export function Navlinks({ className, ...props }) {
	return (
		<ul
			{...props}
			className={cn(
				"w-full font-medium text-white *:mb-3 sm:flex sm:p-0 sm:*:mb-0",
				className,
			)}
		>
			{NAV_LINKS.map((link) => (
				<li key={link.title}>
					<a href={link.path}>{link.title}</a>
				</li>
			))}
		</ul>
	);
}
