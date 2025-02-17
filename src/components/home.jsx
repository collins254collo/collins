import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import portfolio from "../assets/port.jpg";
import Skills from "./skills";
import Contact from "./contact";
import Testimonials from "./testimonial";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate(); // Use React Router navigation

  return (
    <div>
      <section className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-center px-6 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="md:w-1/2 max-w-3xl"
        >
          {/* Subheading */}
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
            Web Developer | Full-Stack Developer
          </p>

          <h1 className="text-3xl md:text-6xl font-bold my-6">
            Hi, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Collins Njogu
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-6 text-gray-900 dark:text-gray-300 font-medium leading-relaxed">
            <span className="text-indigo-600 dark:text-indigo-400 text-3xl">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "React & Tailwind Enthusiast",
                    "Backend Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>

          <p className="text-xl font-medium mb-8 text-gray-800 dark:text-gray-400 leading-relaxed">
            I'm a passionate Full Stack Developer who loves transforming ideas
            into sleek, high-performance applications. I specialize in building
            responsive and scalable web solutions using modern technologies like
            React, Tailwind, Node.js, and PostgreSQL.
          </p>

          {/* Call to Actions */}
          <div className="flex gap-4 justify-center mb-6">
            <button
              onClick={() => navigate("/projects")}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-md transition duration-300 cursor-pointer"
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-gray-900 font-semibold rounded-lg shadow-md transition duration-300"
            >
              View Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 text-gray-700 dark:text-gray-300 text-2xl">
            <a
              href="https://github.com/collins254collo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/collins-njogu-4aa75a351"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>

        {/* Right Content (Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img
            className="max-w-[280px] md:max-w-[300px] lg:max-w-[400px] rounded-xl shadow-lg border-4 border-indigo-200 dark:border-indigo-400"
            src={portfolio}
            alt="Collins Njogu"
          />
        </motion.div>
      </section>

      <Skills />
      <Contact />
      <Testimonials />
    </div>
  );
};

export default Home;
