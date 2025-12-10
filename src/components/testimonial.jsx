// import React from "react";

// const testimonials = [
//   {
//     name: "Emmanuel Ambundo",
//     role: "Software Engineer",
//     company: "Colman Tech Savvy",
//     image: "https://via.placeholder.com/150",
//     linkedin: "https://linkedin.com/in/emmanuelambundo",
//     twitter: "https://twitter.com/emmanuelambundo",
//     quote:
//       "Collins is a driven developer with strong problem-solving skills and a passion for clean, scalable solutions.",
//   },
//   {
//     name: "Kevin Comba",
//     role: "Technical Writer",
//     company: "Tech2Give INC",
//     image: "../assets/testimonial.webp",
//     linkedin: "https://linkedin.com/in/kevincomba",
//     twitter: "https://twitter.com/kevincomba",
//     quote:
//       "It has been a pleasure collaborating with Collins. His attention to detail and creativity stand out.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-20 duration-500">
//       <div className="max-w-5xl mx-auto text-center px-6">
//         <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
//           References
//         </h2>
//         <p className="text-lg text-gray-600 dark:text-gray-300 mt-3">
//           Meet the amazing people who've been part of my journey
//         </p>
//       </div>

//       <div className="mt-14 flex flex-wrap justify-center gap-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all hover:-translate-y-3 w-80"
//           >
//             <img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 shadow-md"
//             />
//             <h4 className="text-xl font-semibold mt-5 text-gray-100">
//               {testimonial.name}
//             </h4>
//             <p className="text-sm text-blue-400 font-medium">
//               {testimonial.role}
//             </p>
//             <p className="text-sm text-gray-400">
//               {testimonial.company}
//             </p>
//             <p className="mt-4 text-gray-300 italic text-sm leading-relaxed">
//               "{testimonial.quote}"
//             </p>

//             <div className="flex justify-center gap-6 mt-5">
//               <a
//                 href={testimonial.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:text-blue-800 transition transform hover:scale-125 hover:rotate-6"
//               >
//                 <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//               </a>
//               <a
//                 href={testimonial.twitter}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:text-blue-600 transition transform hover:scale-125 hover:-rotate-6"
//               >
//                 <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;