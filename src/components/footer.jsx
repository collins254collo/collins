import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-100 py-8 bg-gray-900 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
              Collins Njogu
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              Your go-to software developer
            </p>
          </div>

          {/* Middle Section (Links) */}
          <div className="flex flex-col md:flex-row gap-6 text-center">
            <a
              href="#home"
              className="hover:text-indigo-700 dark:hover:text-indigo-400 transition"
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-indigo-700 dark:hover:text-indigo-400 transition"
            >
              Projects
            </a>
            <a
              href="#about"
              className="hover:text-indigo-700 dark:hover:text-indigo-400 transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-700 dark:hover:text-indigo-400 transition"
            >
              Contact
            </a>
          </div>

          {/* Right Section (Social Media Links) */}
          <div className="flex gap-6 mt-6 md:mt-0">
            <a
              href="https://github.com/collins254collo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-700 dark:hover:text-indigo-400 transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/collinsnjogu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-700 dark:hover:text-indigo-400 transition text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:wamiatucollins@gmail.com"
              aria-label="Email"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-700 dark:hover:text-indigo-400 transition text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-6 text-sm text-gray-700 dark:text-gray-400">
          <p>&copy; 2025 Collins Njogu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
