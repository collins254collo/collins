import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import portfolio from "../assets/port.jpg";
import Skills from "./skills";
import Contact from "./contact";
import Testimonials from "./testimonial";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaRocket, FaHeart } from "react-icons/fa";
import { SiReact, SiJavascript, SiNodedotjs, SiPostgresql } from "react-icons/si";
// import Blogs from "./blog";

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      <section className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-center px-6 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden">
       

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="md:w-1/2 max-w-3xl relative z-10 "
        >
        

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold mb-4 leading-tight mt-18 "
          >
            Hi 👋, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent ">
              Collins Njogu
            </span>
          </motion.h1>

          {/* Dynamic Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-8 text-gray-700 dark:text-gray-300"
          >
           <Typewriter
                options={{
                  strings: [
                    "Fullstack Engineer",
                    "Next.js Fullstack Developer",
                    "AI Integration Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />



          </motion.div>

          {/*  Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4 mb-8"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I craft <span className="font-semibold text-indigo-600 dark:text-indigo-400">cutting-edge digital experiences</span> that blend innovation with functionality. 
              Specializing in modern web technologies, I build scalable applications that power the future of business.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-base text-gray-500 dark:text-gray-500 leading-relaxed">
              From <span className="font-medium text-purple-600 dark:text-purple-400">AI-powered applications</span> to 
              <span className="font-medium text-blue-600 dark:text-blue-400"> cloud-native solutions</span>, 
              I transform complex ideas into elegant, user-centric products that drive real-world impact.
            </p>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center items-center gap-4 mb-8"
          >
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Tech Stack:</span>
            <div className="flex gap-3">
              <SiReact className="w-6 h-6 text-blue-500 hover:scale-110 transition-transform" title="React" />
              <SiJavascript className="w-6 h-6 text-yellow-500 hover:scale-110 transition-transform" title="JavaScript" />
              <SiNodedotjs className="w-6 h-6 text-green-500 hover:scale-110 transition-transform" title="Node.js" />
              <SiPostgresql className="w-6 h-6 text-blue-600 hover:scale-110 transition-transform" title="PostgreSQL" />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/projects")}
              className="group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer"
            >
              <FaRocket className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce " />
              View My Work
            </motion.button>
            
          <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="resume.pdf"
              download="resume.pdf"
              rel="noopener noreferrer"
              className="group px-6 py-3 md:px-8 md:py-4 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
            <FaCode className="w-4 h-4 md:w-5 md:h-5" />
            Download Resume
          </motion.a>

          </motion.div>

          {/*  Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="space-y-4"
          >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Let's connect and build something amazing together</p>
            <div className="flex justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/collins254collo"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/collins-njogu-4aa75a351"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </motion.a>
              
              {/* <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com/yourtwitter"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <FaTwitter className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors" />
              </motion.a> */}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content (Enhanced Image) */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="mt-24 sm:mt-14 md:mt-0 md:w-1/2 flex justify-center relative z-10 px-4"
    >
      <div className="relative w-full max-w-sm md:max-w-md">
       
        {/* Main Image Container */}
        <div className="relative p-2 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 rounded-2xl shadow-2xl">
          <img
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
            src={portfolio}
            alt="Collins Njogu - Full Stack Developer"
          />
          
          {/* Overlay Badge */}
          
        </div>
      </div>
    </motion.div>

      </section>

      <Skills />
      {/* <Blogs/> */}
      <Contact />
      <Testimonials />
    </div>
  );
};

export default Home;
