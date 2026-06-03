import { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

export function ScrollToTop() {
  const [hasPassThredHold, setHasPassedThresHold] = useState(window.scrollY > 400);

  const scrollToTop = function () {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = function () {
      setHasPassedThresHold(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasPassThredHold]);
  return (
    hasPassThredHold && (
      <button type="button" className="bg-brand-accent p-2 rounded-full z-50 bottom-2 cursor-pointer sm:bottom-5 right-5  fixed  hover:bg-brand-accent-hover transition-colors duration-300" onClick={scrollToTop}>
        <BiArrowToTop className="size-6" />
      </button>
    )
  );
}
