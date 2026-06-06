// @ts-check

import { useNavbar } from "../../context/NavbarProvider";
import { useSmoothScroll } from "../../shared/hooks/useSmoothScroll";
import { cn } from "../../shared/utils/cn";
import { NAV_LINKS } from "./constants";

/**
 * @typedef {React.ComponentProps<"ul">} NavlinksProps
 * @param {NavlinksProps} props
 */

export function Navlinks({ className, ...props }) {
	const scrollTo = useSmoothScroll();

	const { close } = useNavbar();
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
					<a href={link.path} onClick={scrollTo(link.path, close)}>
						{link.title}
					</a>
				</li>
			))}
		</ul>
	);
}
