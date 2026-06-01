// @ts-check

import { cn } from "../../utils/cn";

/**
 * @param {import("react").ComponentProps<"p">} props
 */

export function ErrorCard({ className, ...props }) {
	return <p className={cn("errorElement", className)} {...props} />;
}
