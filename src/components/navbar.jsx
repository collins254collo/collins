import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-gray-900 shadow-md top-0 left-0 w-full z-50  bg-gray-900 ">
      <div className="container mx-auto px-6 py-4 flex justify-around items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-500 cursor-pointer">
          <a
            href="#home"
            className="hover:text-indigo-400 dark:hover:text-indigo-300 transition"
          >
            Collins Njogu
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none cursor-pointer dark:text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen ? "true" : "false"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-row md:gap-6 text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 sm:flex flex-col md:bg-transparent transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:opacity-100 md:items-center `}
        >
          <li className="py-2 md:py-0 text-center md:text-left">
            <a
              href="#home"
              className="hover:text-indigo-400 dark:text-gray-100 dark:hover:text-indigo-300 transition block md:inline"
              onClick={() => (window.location.href = "/")}
            >
              Home
            </a>
          </li>
          <li className="py-2 md:py-0 text-center md:text-left">
            <a
              href="/projects"
              className="hover:text-indigo-400 dark:text-gray-100 dark:hover:text-indigo-300 transition block md:inline"
            >
              Projects
            </a>
          </li>

          <li className="py-2 md:py-0 text-center md:text-left">
            <a
              href="#contact"
              className="hover:text-indigo-400 dark:text-gray-100 dark:hover:text-indigo-300 transition block md:inline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
