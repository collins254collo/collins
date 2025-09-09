import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const testimonials = [
  {
    name: "Emmanuel Ambundo",
    company: "Colman Tech Savvy",
    image: "https://via.placeholder.com/150",
    linkedin: "https://linkedin.com/in/emmanuelambundo",
    twitter: "https://twitter.com/emmanuelambundo",
    quote:
      "Collins is a driven developer with strong problem-solving skills and a passion for clean, scalable solutions.",
  },
  {
    name: "Kevin Comba",
    company: "Tech2Give INC",
    image: `../assets/testimonial.webp`,
    linkedin: "https://linkedin.com/in/kevincomba",
    twitter: "https://twitter.com/kevincomba",
    quote:
      "It has been a pleasure collaborating with Collins. His attention to detail and creativity stand out.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-blue-600 dark:text-blue-400"
        >
          References
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 mt-3"
        >
          Meet the amazing people who’ve been part of my journey
        </motion.p>
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all hover:-translate-y-3 w-80"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 shadow-md"
            />
            <h4 className="text-xl font-semibold mt-5 text-gray-900 dark:text-gray-100">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.company}
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 italic text-sm leading-relaxed">
              “{testimonial.quote}”
            </p>

            <div className="flex justify-center gap-6 mt-5">
              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition transform hover:scale-125 hover:rotate-6"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href={testimonial.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition transform hover:scale-125 hover:-rotate-6"
              >
                <FaTwitter size={28} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
