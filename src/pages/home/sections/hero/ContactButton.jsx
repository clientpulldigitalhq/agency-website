// @ts-check

import React from "react";
import { routes } from "../../../../shared/routes/routes";
import { cn } from "../../../../shared/utils/cn";

/**
 *
 * @param {Omit<React.ComponentProps<"a">, "href">} props
 */

export function ContactButton({ className, ...props }) {
	return (
		<a
			{...props}
			href={routes.contact}
			className={cn(
				"bg-brand-accent block mx-auto hover:bg-brand-accent-hover mt-3 w-full cursor-pointer rounded-lg p-2 font-medium transition-colors duration-300 sm:w-50 px-8",
				className,
			)}
		>
			GET IN TOUCH
		</a>
	);
}
