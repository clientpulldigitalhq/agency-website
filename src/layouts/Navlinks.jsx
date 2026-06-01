function Navlinks({ styles }) {
  return (
    <ul
      className={` ${styles} w-full font-medium text-white *:mb-3 sm:flex sm:p-0 sm:*:mb-0`}
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
  );
}

export default Navlinks;
