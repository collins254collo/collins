import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const testimonials = [
  {
    name: "Emmanuel Ambundo",
    title: "Software Engineer, Microsoft",
    text: "Working with Collins Njogu was a fantastic experience. Their frontend skills are top-notch!",
    image: "https://via.placeholder.com/150",
    linkedin: "https://linkedin.com/in/emmanuelambundo",
    twitter: "https://twitter.com/emmanuelambundo",
  },
  {
    name: "Kevin Comba",
    title: "Software Developer, Tech2Give",
    text: "Collins Njogu delivered a high-quality project on time. Highly recommend!",
    image: "../assets/testimonial.webp",
    linkedin: "https://linkedin.com/in/kevincomba",
    twitter: "https://twitter.com/kevincomba",
  },
];

const Testimonials = () => {
  return (
    <div className="py-10 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        References
      </h2>
      <h4 className="text-2xl font-medium text-center my-1.5 text-blue-400">
        Meet the people who have been part of my journey
      </h4>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 italic">"{testimonial.text}"</p>
            <h4 className="font-semibold mt-2">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.title}</p>

            <div className="flex justify-center gap-4 mt-3">
              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={testimonial.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
