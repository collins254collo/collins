import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiStripe,
  SiMapbox,
  SiOpenai,
} from "react-icons/si";

  const projectsData = [
    {
      id: 1,
      title: "Furniture E-Commerce Shop",
      intro:
        "A full-stack e-commerce website for browsing, purchasing, and managing furniture orders. Built with scalability and user experience in mind.",
      image: "/furniture.png",
      technologies: [
        { name: "React", icon: SiReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Stripe", icon: SiStripe },
      ],
      contributions: [
        "Developed backend services in Node.js + PostgreSQL for products, users, and orders.",
        "Built a responsive frontend using React and Tailwind CSS.",
        "Deployed frontend (Vercel) and backend (Render) for global access.",
      ],
      impact:
        "Delivered a real-world shopping experience with authentication, secure payments, and fast UI — simulating a production-ready e-commerce system.",
      github: "https://github.com/collins254collo/bobby",
      live: "https://www.bobbyfurniturekenya.com/",
    },
    {
      id: 2,
      title: "Ride-Hailing Platform",
      intro:
        "A real-time Uber-like platform that connects drivers and riders with live location tracking and digital payments.",
      image: "/furniture.png",
      technologies: [
        { name: "React", icon: SiReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Mapbox", icon: SiMapbox },
      ],
      contributions: [
        "Designed the driver and rider UI in React with Tailwind.",
        "Built RESTful APIs for ride requests, fare calculation, and driver matching.",
        "Integrated Mapbox for real-time tracking and route visualization.",
        "Added authentication system with role-based login (driver/rider).",
      ],
      impact:
        "Created a scalable foundation for ride-hailing systems with features like real-time maps, role-based access, and payment integration.",
      github: "https://github.com/Collins254collo/ride-hailing",
      live: "https://ride-hailing.vercel.app",
    },
    {
      id: 3,
      title: "AI-Powered Chatbot",
      intro:
        "As a co-founder of Colman, I developed an AI-powered chatbot integrated with OpenAI’s API to deliver real-time, automated customer support on our platform.",
      image: "/colman.png",
      technologies: [
        { name: "React", icon: SiReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "OpenAI", icon: SiOpenai },
      ],
      contributions: [
        "Integrated OpenAI API for intelligent, context-aware responses.",
        "Designed and built the chatbot UI with React + Tailwind for seamless interactions.",
        "Implemented a Node.js backend for session management and API integration.",
        "Deployed the chatbot on Colman’s platform to support real-time customer engagement.",
      ],
      impact:
        "Improved customer experience by automating inquiries, reducing manual workload, and ensuring 24/7 availability for users.",
      github: "https://github.com/collins254collo/colmantechsavvy",
      live: "https://colman-client.vercel.app/",
    },
  ];


const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 text-gray-900 dark:text-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
      
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium sm:px-6 px-4 leading-relaxed">
        Showcasing{" "}
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-extrabold">
        Projects
        </span>{" "}
        that demonstrate my expertise and craftsmanship.
      </p>


      </motion.div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row items-start gap-10 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
        {/* Image */}

      <div className="lg:w-1/2 w-full overflow-hidden rounded-2xl shadow-lg relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover transform group-hover:scale-105 transition duration-500"
        />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>



            {/* Content */}
            <div className="lg:w-1/2 w-full">
              <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {project.intro}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-lg"
                  >
                    <tech.icon className="w-4 h-4 text-indigo-500" />
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Contributions */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">My Contributions</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                  {project.contributions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <p className="italic text-sm text-gray-500 dark:text-gray-400 mb-6">
                <strong>Impact:</strong> {project.impact}
              </p>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-indigo-600 transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
