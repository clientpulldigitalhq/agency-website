// @ts-check

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

import { cn } from "../../shared/utils/cn";
import { Navlinks } from "./Navlinks";

export function Navbar() {
	const { isDesktop, isMenuOpen, open, close } = useNavbar();

	return (
		<motion.header
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			className="bg-linear-to-r sticky z-2000 top-0 from-brand-muted to-brand-dark "
		>
			<nav className="flex-center justify-between py-4 text-white shadow-lg max-w-6xl mx-auto">
				<div className="bg-green-100 p-1 text-gray-700">LOGO</div>

				<motion.div
					initial={false}
					animate={{ x: isDesktop ? 0 : isMenuOpen ? 0 : -100 }}
					transition={{ duration: 0.3 }}
					exit={{ x: isDesktop ? 0 : -100 }}
					className={cn(
						"fixed top-0 left-0 z-50 min-h-screen w-70 bg-gray-900 sm:static sm:block  sm:min-h-0 sm:w-100 sm:bg-transparent",
						isMenuOpen ? "block" : "hidden",
					)}
				>
					<div className="flex justify-end">
						<button
							type="button"
							className="mt-3 flex cursor-pointer justify-end p-3 sm:hidden"
							onClick={close}
						>
							<IoMdClose size={30} />
						</button>
					</div>
					<Navlinks className="sm:items-center sm:justify-end p-5 sm:gap-8" />
				</motion.div>
				<button
					type="button"
					className="cursor-pointer sm:hidden"
					onClick={open}
				>
					<IoMdMenu size={40} />
				</button>
				<div
					aria-hidden
					className={cn(
						"fixed inset-0 cursor-pointer bg-black/70 ",
						isMenuOpen ? "block backdrop-blur-lg" : "hidden backdrop-blur-none",
					)}
					onClick={close}
				></div>
			</nav>
		</motion.header>
	);
}

function useNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 640);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth > 640);
			setIsMenuOpen(false);
		};

		/** @param {KeyboardEvent} e */
		const handleKeyDown = (e) => {
			if (e.key === "Escape") setIsMenuOpen(false);
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("keydown", handleKeyDown);

		// avoid scrolling when the Menu is open
		document.body.style.overflow = isMenuOpen ? "hidden" : "";

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("keydown", handleKeyDown);

			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	return {
		close: () => setIsMenuOpen(false),
		open: () => setIsMenuOpen(true),
		isMenuOpen,
		isDesktop,
	};
}
