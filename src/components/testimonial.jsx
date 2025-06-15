import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const testimonials = [
  {
    name: "Emmanuel Ambundo",
    company: "Microsoft INC",
    image: "https://via.placeholder.com/150",
    linkedin: "https://linkedin.com/in/emmanuelambundo",
    twitter: "https://twitter.com/emmanuelambundo",
  },
  {
    name: "Kevin Comba",
    company: "Tech2Give INC",
    image: `../assets/testimonial.webp`,
    linkedin: "https://linkedin.com/in/kevincomba",
    twitter: "https://twitter.com/kevincomba",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16  ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
          References
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Meet the people who have been part of my journey
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform transition hover:-translate-y-2 hover:shadow-2xl text-center w-80"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 shadow-md"
            />
            <h4 className="text-xl font-semibold mt-4 text-gray-900 dark:text-gray-100">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.company}
            </p>

            <div className="flex justify-center gap-6 mt-4">
              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110 hover:rotate-6"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href={testimonial.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition transform hover:scale-110 hover:-rotate-6"
              >
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
