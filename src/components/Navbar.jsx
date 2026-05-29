import { IoMdMenu } from "react-icons/io";

function Navbar() {
  return (
    <header>
      <nav className="flex-center justify-between bg-[linear-gradient(to_right,#00cfa2_1%,#081826_100%)] px-4 py-4 text-white shadow-lg sm:px-10">
        <div className="bg-green-100 p-1 text-gray-700">LOGO</div>
        <ul className="sm:flex-center fixed top-0 left-0 hidden min-h-screen w-50 bg-gray-900 p-5 font-medium *:mb-3 sm:static sm:min-h-0 sm:w-100 sm:justify-end sm:gap-8 sm:bg-transparent sm:p-0 sm:*:mb-0">
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
        <button type="button" className="cursor-pointer sm:hidden">
          <IoMdMenu size={40} />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
