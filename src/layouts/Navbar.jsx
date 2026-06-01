import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 640);

    window.addEventListener("resize", handleResize);

    // avoid scrolling when the Menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("resize", handleResize);

      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav className="flex-center justify-between bg-[linear-gradient(to_right,var(--color-brand-muted)_1%,var(--color-brand-dark)_100%)] px-4 py-4 text-white shadow-lg sm:px-10">
        <div className="bg-green-100 p-1 text-gray-700">LOGO</div>
        <motion.div
          initial={false}
          animate={{ x: isDesktop ? 0 : isMenuOpen ? 0 : -100 }}
          transition={{ duration: "0.3" }}
          exit={-100}
          className={`fixed top-0 left-0 z-50 ${isMenuOpen ? "block" : " hidden"} min-h-screen w-70 bg-gray-900 sm:static sm:block sm:min-h-0 sm:w-100 sm:bg-transparent`}
        >
          <div className="flex justify-end">
            <button
              type="button"
              className="mt-3 flex cursor-pointer justify-end p-3 sm:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoMdClose size={30} />
            </button>
          </div>
          <ul
            className={`sm:flex-center p-5 font-medium *:mb-3 sm:justify-end sm:gap-8 sm:p-0 sm:*:mb-0`}
          >
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </motion.div>
        <button
          type="button"
          className="cursor-pointer sm:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <IoMdMenu size={40} />
        </button>
        <div
          aria-hidden
          className={`fixed inset-0 cursor-pointer bg-black/70 backdrop-blur-lg ${isMenuOpen ? "block" : "hidden"}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      </nav>
    </header>
  );
}
