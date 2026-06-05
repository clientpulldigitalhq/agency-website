import { createContext, useContext, useEffect, useState } from "react";

const NavbarContext = createContext(null);

export function NavbarProvider({ children }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 640);

	const close = () => setIsMenuOpen(false);
	const open = () => setIsMenuOpen(true);

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

	return (
		<NavbarContext.Provider value={{ isMenuOpen, isDesktop, open, close }}>
			{children}{" "}
		</NavbarContext.Provider>
	);
}

export const useNavbar = () => {
	const context = useContext(NavbarContext);

	if (!context)
		throw new Error("NavbarContext must be used within NavbarProvider");

	return context;
};
