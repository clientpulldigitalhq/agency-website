// @ts-check

import { motion } from "motion/react";
import React from "react";

import { useSmoothScroll } from "../../../../shared/hooks/useSmoothScroll";
import { routes } from "../../../../shared/routes/routes";
import { cn } from "../../../../shared/utils/cn";

/**
 * @param {Omit<React.ComponentProps<"a">, "href"> & import("motion/react").MotionProps} props
 */

export function ContactButton({ className, ...props }) {
	const scrollTo = useSmoothScroll();

	return (
		<motion.a
			{...props}
			href={routes.contact}
			onClick={scrollTo(routes.contact)}
			className={cn(
				"bg-brand-accent block mx-auto hover:bg-brand-accent-hover mt-3 w-full cursor-pointer rounded-lg p-2 font-medium transition-colors duration-300 sm:w-50 px-8",
				className,
			)}
		>
			GET IN TOUCH
		</motion.a>
	);
}
