// @ts-check

import { useCallback, useEffect, useState } from "react";

export function useSmoothScroll() {
	const [link, setLink] = useState("");

	useEffect(() => {
		if (!link) return;

		const section = document.querySelector(link);
		if (!section) return setLink("");

		section.scrollIntoView({ behavior: "smooth" });
		setLink("");
	}, [link]);

	return useCallback(
		/** @param {string} link */
		(link) => {
			const anchor = link.replace(/^\/*/, "");
			if (!anchor?.startsWith("#")) return;

			return (
				/** @type {React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>} */ e,
			) => {
				e?.preventDefault();
				e?.stopPropagation();

				setLink(anchor);
			};
		},
		[],
	);
}
